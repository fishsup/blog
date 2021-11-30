---
title: mybatisPlus结合sharding jdbc使用时出现的问题记录
date: 2021-11-25
---

# 背景

使用mybatisplus提供的枚举序列化功能, 将枚举值映射为数据库值, 结合sharding jdbc使用时, 枚举值无法反序列化赋值到对象中

mybatisplus版本 3.4.3.1

sharding jdbc版本 4.1.1

# 原因

直接来看mybatisplus对枚举类型的处理器类MybatisEnumTypeHandler

### 序列化

```java
/**
* 初始化枚举处理器, 设置value的fieldName及类型\value值的get方法
*/
public MybatisEnumTypeHandler(Class<E> enumClassType) {
        if (enumClassType == null) {
            throw new IllegalArgumentException("Type argument cannot be null");
        }
        this.enumClassType = enumClassType;
        MetaClass metaClass = MetaClass.forClass(enumClassType, REFLECTOR_FACTORY);
        String name = "value";
        if (!IEnum.class.isAssignableFrom(enumClassType)) {
            name = findEnumValueFieldName(this.enumClassType).orElseThrow(() -> new IllegalArgumentException(String.format("Could not find @EnumValue in Class: %s.", this.enumClassType.getName())));
        }
        this.propertyType = ReflectionKit.resolvePrimitiveIfNecessary(metaClass.getGetterType(name));
        this.getInvoker = metaClass.getGetInvoker(name);
    }

    /**
     * 查找标记标记EnumValue字段
     *
     * @param clazz class
     * @return EnumValue字段
     * @since 3.3.1
     */
    public static Optional<String> findEnumValueFieldName(Class<?> clazz) {
        if (clazz != null && clazz.isEnum()) {
            String className = clazz.getName();
            return Optional.ofNullable(CollectionUtils.computeIfAbsent(TABLE_METHOD_OF_ENUM_TYPES, className, key -> {
                Optional<Field> fieldOptional = findEnumValueAnnotationField(clazz);
                return fieldOptional.map(Field::getName).orElse(null);
            }));
        }
        return Optional.empty();
    }

    private static Optional<Field> findEnumValueAnnotationField(Class<?> clazz) {
        return Arrays.stream(clazz.getDeclaredFields()).filter(field -> field.isAnnotationPresent(EnumValue.class)).findFirst();
    }

		/**
		* 反射调用get方法取值
		*/
		private Object getValue(Object object) {
        try {
            return this.getInvoker.invoke(object, new Object[0]);
        } catch (ReflectiveOperationException e) {
            throw ExceptionUtils.mpe(e);
        }
    }

```

落库的时候单纯的通过注解配置去拿对应字段的值, 存储到数据库时是正常的

### 反序列化

```java
@Override
    public E getNullableResult(ResultSet rs, String columnName) throws SQLException {
        Object value = rs.getObject(columnName, this.propertyType);
        if (null == value && rs.wasNull()) {
            return null;
        }
        return this.valueOf(value);
    }

    @Override
    public E getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
        Object value = rs.getObject(columnIndex, this.propertyType);
        if (null == value && rs.wasNull()) {
            return null;
        }
        return this.valueOf(value);
    }

    @Override
    public E getNullableResult(CallableStatement cs, int columnIndex) throws SQLException {
        Object value = cs.getObject(columnIndex, this.propertyType);
        if (null == value && cs.wasNull()) {
            return null;
        }
        return this.valueOf(value);
    }

		private E valueOf(Object value) {
        E[] es = this.enumClassType.getEnumConstants();
        return Arrays.stream(es).filter((e) -> equalsValue(value, getValue(e))).findAny().orElse(null);
    }
```

调用jdbc ResultSet接口定义的getObject方法来获取re中对应字段的值, 并通过valueOf方法在枚举中进行匹配

配合sharding jdbc使用时, sharding提供的jdbc实现中 `org.apache.shardingsphere.shardingjdbc.jdbc.unsupported.AbstractUnsupportedOperationResultSet`表明并不支持getObject方法, 导致抛异常, 这一点sharding官方描述的不是很详细, 也没有明确说明为什么不实现

```java
  @Override
    public final <T> T getObject(final int columnIndex, final Class<T> type) throws SQLException {
        throw new SQLFeatureNotSupportedException("getObject with type");
    }
    
    @Override
    public final <T> T getObject(final String columnLabel, final Class<T> type) throws SQLException {
        throw new SQLFeatureNotSupportedException("getObject with type");
    }
    
    @Override
    public final Object getObject(final String columnLabel, final Map<String, Class<?>> map) throws SQLException {
        throw new SQLFeatureNotSupportedException("getObject with map");
    }
```

看了一下sharding5.0.0版本也没有实现完全的支持, 只是支持了LocalDateTime\LocalDate\LocalTime这三种特定类型

mybatisplus相关pr: https://github.com/baomidou/mybatis-plus/pull/3854 已被拒绝... 

> https://shardingsphere.apache.org/document/4.1.0/en/manual/sharding-jdbc/unsupported-items/