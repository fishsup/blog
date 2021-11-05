---
title: Redis滑动窗口限流分析实现
date: 2021-09-07
tags:
- Redis
---

# 背景

1. 需要对业务进行固定时间窗口内限流, 并且要求足够精确 (单机版全部pass)
2. 需要限制的业务key范围特别广, 会导致消耗大量的内存, 在存储上要尽量保证精简. 
3. 高性能(至少支撑5000TPS)

# 实现

公司的基础设施中目前只有redis可以保证高性能且易于实现, 是满足实现需要的.  

用zset\hash实现思路上是基本一致的, 但是我们业务上在时间窗口内可能会打到上千万的key需要限流, 因此我们会对比一下两种实现上的内存消耗和性能

### 内存消耗

zset和hash在redis实现中, 当存储的元素数量或长度小于固定值时都是使用Ziplist来实现的, 先看一下redis中的配置及实现:

```c
/* src/redis.h:313 Zip structure related defaults */
// 默认hash对象ziplist编码转为ht编码的存储阈值(kv对数量最大512,kv最大长度64)
#define REDIS_HASH_MAX_ZIPLIST_ENTRIES 512
#define REDIS_HASH_MAX_ZIPLIST_VALUE 64
// 默认zset对象ziplist编码转为skiplist编码的存储阈值(kv对数量最大128,kv最大长度64)
#define REDIS_ZSET_MAX_ZIPLIST_ENTRIES 128
#define REDIS_ZSET_MAX_ZIPLIST_VALUE 64

/*
 * src/object.c:275  创建一个 ZIPLIST 编码的哈希对象
 */
robj *createHashObject(void) {
    unsigned char *zl = ziplistNew();
    robj *o = createObject(REDIS_HASH, zl);
    o->encoding = REDIS_ENCODING_ZIPLIST;
    return o;
}

/*
 * src/object.c:289 创建一个 ZIPLIST 编码的有序集合
 */
robj *createZsetZiplistObject(void) {
    unsigned char *zl = ziplistNew();
    robj *o = createObject(REDIS_ZSET,zl);
    o->encoding = REDIS_ENCODING_ZIPLIST;
    return o;
}
```

Ziplist插入元素:

```c
// src/ziplist.c:1076
 /* See if the entry can be encoded */
// 尝试看能否将输入字符串转换为整数，如果成功的话：
// 1)value 将保存转换后的整数值
// 2)encoding 则保存适用于 value 的编码方式
// 无论使用什么编码， reqlen 都保存节点值的长度
// T = O(N)
if (zipTryEncoding(s,slen,&value,&encoding)) {
    /* 'encoding' is set to the appropriate integer encoding */
    reqlen = zipIntSize(encoding);
} else {
    /* 'encoding' is untouched, however zipEncodeLength will use the
     * string length to figure out how to encode it. */
    reqlen = slen;
}


/* Return bytes needed to store integer encoded by 'encoding' 
 *
 * 返回保存 encoding 编码的值所需的字节数量
 *
 * T = O(1)
 */
static unsigned int zipIntSize(unsigned char encoding) {

    switch(encoding) {
    case ZIP_INT_8B:  return 1;
    case ZIP_INT_16B: return 2;
    case ZIP_INT_24B: return 3;
    case ZIP_INT_32B: return 4;
    case ZIP_INT_64B: return 8;
    default: return 0; /* 4 bit immediate */
    }

    assert(NULL);
    return 0;
}
```

Ziplist插入kv元素时都会判断能否转成整数以节约内存.

限流场景中, 无论field还是value, 必然有一个字段用来存储请求的时间.

在hash中我们使用field存储请求时间戳, value用来记录请求数. 实际value值的存储占用一个字节就可以满足需求

在zset中使用score存储请求时间戳, member存储一个任意的唯一值, 实际一个字节也可

因为hash实现用value记录请求数, 如果时间窗口范围很大, field可以用来标识小时甚至天, 从而减少hash对象中存储的kv数量, 所以用hash实现小优

> 实现时也可以根据场景对时间戳进行精简优化, 比如以**yyMMddHH**形式存储, 减少整形存储占用的字节数.

### 操作复杂度

#### Hash实现

```shell
local now_timestamp = tonumber(ARGV[1])
local window_length = tonumber(ARGV[2])
local max_times = tonumber(ARGV[3])
local request_records = redis.call('HGETALL', KEYS[1])
if (request_records == nil or #request_records == 0)
then
    redis.call('HINCRBY', KEYS[1], now_timestamp, 1)
    redis.call('EXPIRE', KEYS[1], window_length)
    return true
else
    local window_times = 0
    local to_del_field = {}
    for i = 1, #request_records, 2 do
        if tonumber(request_records[i]) <= (now_timestamp - window_length)
        then
            table.insert(to_del_field, request_records[i])
        else
            window_times = window_times + request_records[i + 1]
        end
    end
    if #to_del_field > 0 then
        redis.call('HDEL', KEYS[1], unpack(to_del_field))
    end
    if max_times > window_times then
        redis.call('HINCRBY', KEYS[1], now_timestamp, 1)
        redis.call('EXPIRE', KEYS[1], window_length)
        return true
    else
        return false
    end
end
```

最好的情况下对应key没有请求记录, 执行**HGETALL HINCRBY EXPIRE** 三个时间复杂度O(1)的操作

最坏的情况下key中(N-1)个记录都是过期的:

|      | 操作                             | 时间复杂度                                                   |
| ---- | -------------------------------- | ------------------------------------------------------------ |
| 1    | HGETALL获取全部记录(遍历ziplist) | O(N)                                                         |
| 2    | 筛选过期记录(遍历ziplist)        | O(N)                                                         |
| 3    | 删除全部过期filed(遍历ziplist)   | O(N^2) *理论最坏情况下O(N^3), 删除N-1个元素都导致压缩列表级联更新的情况, 当前场景kv值长度固定, 因此不会出现这种情况* |
| 4    | HINCRBY                          | O(N)  ziplist实现先删除后插入                                |
| 5    | EXPIRE                           | O(1)                                                         |

#### Zset实现

```shell
local key = KEYS[1]
local now_timestamp = tonumber(ARGV[1])
local window_length = tonumber(ARGV[2])
local max_times = tonumber(ARGV[3])

--1.删除窗口内过期元素
redis.call('ZREMRANGEBYSCORE',key,0,now_timestamp - window_length)
--2.判断是否超限
local requested_times = redis.call('zcard',key)
if  max_times > requested_times then
    -- 3.增加请求记录
    redis.call('ZADD', key, now_timestamp, now_timestamp)
    -- 4.刷新过期时间
    redis.call('expire', key, window_length)
    return true
else
    return false
```

最好的情况下执行四次O(1)操作

最坏的情况下key中(N-1)个记录都是过期的:

|      | 操作                         | 时间复杂度                 |
| ---- | ---------------------------- | -------------------------- |
| 1    | ZREMRANGEBYSCORE删除过期记录 | O(N^2) ziplist实现循环删除 |
| 2    | ZCARD统计请求记录数          | O(1)  ziplistLen(zl)/2     |
| 3    | ZADD新增一条记录             | O(N) ziplist先删除后插入   |
| 4    | EXPIRE刷新过期时间           | O(1)                       |

单key数据量很小的情况下两种实现复杂度差距不大

### 性能测试

测试环境及用例配置: 

1. M1 macbook docker容器分配4c8g
2. redis版本6.2.6
3. 100W请求, 500连接 (不开启pipeline\不缓存脚本)

#### Hash

```shell
redis-benchmark -r 500000 -n 1000000  -a admin -c 500 eval "local now_timestamp = tonumber(ARGV[1])
local window_length = tonumber(ARGV[2])
local max_times = tonumber(ARGV[3])
local request_records = redis.call('HGETALL', KEYS[1])
if (request_records == nil or #request_records == 0)
then
    redis.call('HINCRBY', KEYS[1], now_timestamp, 1)
    redis.call('EXPIRE', KEYS[1], window_length)
    return true
else
    local window_times = 0
    local to_del_field = {}
    for i = 1, #request_records, 2 do
        if tonumber(request_records[i]) <= (now_timestamp - window_length)
        then
            table.insert(to_del_field, request_records[i])
        else
            window_times = window_times + request_records[i + 1]
        end
    end
    if #to_del_field > 0 then
        redis.call('HDEL', KEYS[1], unpack(to_del_field))
    end
    if max_times > window_times then
        redis.call('HINCRBY', KEYS[1], now_timestamp, 1)
        redis.call('EXPIRE', KEYS[1], window_length)
        return true
    else
        return false
    end
end" 1 __rand_int__ __rand_int__ 30000 2
```

压测结果:

```shell
Summary:
  throughput summary: 27844.29 requests per second
  latency summary (msec):
          avg       min       p50       p95       p99       max
       17.133     1.864    16.623    26.959    32.511    65.535
```

内存占用: 53.18M

#### Zset

```shell
redis-benchmark -r 500000  -n 1000000  -a admin -c 500 eval "local key = KEYS[1]
local now_timestamp = tonumber(ARGV[1])
local window_length = tonumber(ARGV[2])
local max_times = tonumber(ARGV[3])
redis.call('ZREMRANGEBYSCORE',key,0,now_timestamp - window_length)
local requested_times = redis.call('zcard',key)
if  max_times > requested_times then
    redis.call('ZADD', key, now_timestamp, now_timestamp)
    redis.call('expire', key, window_length)
    return true
else
    return false
end" 1 __rand_int__ __rand_int__ 30000 2
```

压测结果:

```shell
Summary:
  throughput summary: 30740.86 requests per second
  latency summary (msec):
          avg       min       p50       p95       p99       max
       15.549     1.288    14.967    24.879    30.623    57.503
```
内存占用: 53.25M

> 测试下来zset实现吞吐量会高一点, 但差距不是很大, 内存消耗也几乎相同 
>
> 压测中hash也使用的时间戳, 但可以根据场景灵活的变更以节省内存
