(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[726],{38797:function(e,t,n){var r="[object Symbol]",o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i="\\u2700-\\u27bf",l="a-z\\xdf-\\xf6\\xf8-\\xff",c="A-Z\\xc0-\\xd6\\xd8-\\xde",s="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",u="['’]",g="["+s+"]",p="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",f="\\d+",d="[\\u2700-\\u27bf]",b="["+l+"]",m="[^\\ud800-\\udfff"+s+f+i+l+c+"]",h="(?:\\ud83c[\\udde6-\\uddff]){2}",x="[\\ud800-\\udbff][\\udc00-\\udfff]",y="["+c+"]",v="(?:"+b+"|"+m+")",k="(?:"+y+"|"+m+")",w="(?:['’](?:d|ll|m|re|s|t|ve))?",Z="(?:['’](?:D|LL|M|RE|S|T|VE))?",j="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",O="[\\ufe0e\\ufe0f]?",E=O+j+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",h,x].join("|")+")"+O+j+")*"),S="(?:"+[d,h,x].join("|")+")"+E,I=RegExp(u,"g"),z=RegExp(p,"g"),A=RegExp([y+"?"+b+"+"+w+"(?="+[g,y,"$"].join("|")+")",k+"+"+Z+"(?="+[g,y+v,"$"].join("|")+")",y+"?"+v+"+"+w,y+"+"+Z,f,S].join("|"),"g"),C=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,P="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,D="object"==typeof self&&self&&self.Object===Object&&self,L=P||D||Function("return this")();var T,U=(T={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==T?void 0:T[e]});var R=Object.prototype.toString,N=L.Symbol,F=N?N.prototype:void 0,W=F?F.toString:void 0;function G(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&R.call(e)==r}(e))return W?W.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}function M(e){return null==e?"":G(e)}var V,_=(V=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,r){var o=-1,a=e?e.length:0;for(r&&a&&(n=e[++o]);++o<a;)n=t(n,e[o],o,e);return n}(function(e,t,n){return e=M(e),void 0===(t=n?void 0:t)?function(e){return C.test(e)}(e)?function(e){return e.match(A)||[]}(e):function(e){return e.match(o)||[]}(e):e.match(t)||[]}(function(e){return(e=M(e))&&e.replace(a,U).replace(z,"")}(e).replace(I,"")),V,"")});e.exports=_},90344:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(67294),o=n(70977),a=n(35510),i=n(38797),l=n.n(i),c=n(25444),s=n(69748),u=n(71299),g=n(77710),p=n(80126),f=function(e){var t=e.list,n=(0,u.Z)(),r=n.tagsPath,i=n.basePath;return(0,o.tZ)(s.Z,null,(0,o.tZ)(g.Z,{title:"Tags"}),(0,o.tZ)(a.X6,{as:"h1",variant:"styles.h1"},"Tags"),(0,o.tZ)(a.xu,{mt:[4,5]},t.map((function(e){return(0,o.tZ)(a.kC,{key:e.fieldValue,mb:[1,1,2],sx:{alignItems:"center"}},(0,o.tZ)(a.rU,{as:c.Link,sx:{variant:"links.listItem",mr:2},to:(0,p.Z)("/"+i+"/"+r+"/"+l()(e.fieldValue))},e.fieldValue," ",(0,o.tZ)("span",{sx:{color:"secondary"}},"(",e.totalCount,")")))}))))};var d=function(e){var t=Object.assign({},e),n=t.data.allPost;return r.createElement(f,Object.assign({list:n.group},t))}},69748:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(4942),o=n(67294),a=n(23431),i=n(70977),l=n(35510),c=n(77710),s=n(95078),u=n(71299),g=function(e){var t=e.isDark,n=e.toggle;return(0,i.tZ)("button",{onClick:n,type:"button","aria-label":t?"Activate Light Mode":"Activate Dark Mode",title:t?"Activate Light Mode":"Activate Dark Mode",sx:{opacity:.65,position:"relative",borderRadius:"5px",width:"40px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease",border:"none",outline:"none",background:"none",cursor:"pointer",padding:0,appearance:"none","&:hover, &:focus":{opacity:1}}},(0,i.tZ)("div",{sx:{position:"relative",width:"24px",height:"24px",borderRadius:"50%",border:function(e){return t?"4px solid "+e.colors.toggleIcon:"none"},backgroundColor:t?"toggleIcon":"transparent",transform:t?"scale(0.55)":"scale(1)",transition:"all 0.45s ease",overflow:t?"visible":"hidden",boxShadow:function(e){return t?"none":"inset 8px -8px 0px 0px "+e.colors.toggleIcon},"&:before":{content:'""',position:"absolute",right:"-9px",top:"-9px",height:"24px",width:"24px",border:function(e){return t?"2px solid "+e.colors.toggleIcon:"none"},borderRadius:"50%",transform:t?"translate(14px, -14px)":"translate(0, 0)",opacity:t?0:1,transition:"transform 0.45s ease"},"&:after":{content:'""',width:"8px",height:"8px",borderRadius:"50%",margin:"-4px 0 0 -4px",position:"absolute",top:"50%",left:"50%",boxShadow:function(e){return"0 -23px 0 "+e.colors.toggleIcon+", 0 23px 0 "+e.colors.toggleIcon+", 23px 0 0 "+e.colors.toggleIcon+", -23px 0 0 "+e.colors.toggleIcon+", 15px 15px 0 "+e.colors.toggleIcon+", -15px 15px 0 "+e.colors.toggleIcon+", 15px -15px 0 "+e.colors.toggleIcon+", -15px -15px 0 "+e.colors.toggleIcon},transform:t?"scale(1)":"scale(0)",transition:"all 0.35s ease"}}}))},p=n(25444),f=n(80126);function d(e){return(0,i.tZ)(p.Link,Object.assign({activeClassName:"active"},e))}var b=function(e){var t=e.nav,n=(0,u.Z)().basePath;return(0,i.tZ)(o.Fragment,null,t&&t.length>0&&(0,i.tZ)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:[1,"18px"],".active":{color:"heading"}}},t.map((function(e){return(0,i.tZ)(l.rU,{key:e.slug,as:d,to:(0,f.Z)("/"+n+"/"+e.slug)},e.title)}))))},m=n(1435),h=function(){var e=(0,m.Z)().siteTitle,t=(0,u.Z)().basePath;return(0,i.tZ)(p.Link,{to:(0,f.Z)("/"+t),"aria-label":e+" - Back to home",sx:{color:"heading",textDecoration:"none"}},(0,i.tZ)("div",{sx:{my:0,fontWeight:"medium",fontSize:[3,4]}},e))},x=function(){var e=(0,u.Z)().externalLinks;return(0,i.tZ)(o.Fragment,null,e&&e.length>0&&(0,i.tZ)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,"18px"]}},e.map((function(e){return(0,i.tZ)(l.rU,{key:e.url,href:e.url},e.name)}))))},y=function(){var e=(0,u.Z)().navigation,t=(0,s.If)(),n=t[0],r=t[1],o="dark"===n;return(0,i.tZ)("header",{sx:{mb:[5,6]}},(0,i.tZ)(l.kC,{sx:{alignItems:"center",justifyContent:"space-between"}},(0,i.tZ)(h,null),(0,i.tZ)(g,{isDark:o,toggle:function(e){e.preventDefault(),r(o?"light":"dark")}})),(0,i.tZ)("div",{sx:{boxSizing:"border-box",display:"flex",variant:"dividers.bottom",alignItems:"center",justifyContent:"space-between",mt:3,color:"secondary",a:{color:"secondary",":hover":{color:"heading"}},flexFlow:"wrap"}},(0,i.tZ)(b,{nav:e}),(0,i.tZ)(x,null)))},v=function(){var e=(0,m.Z)().siteTitle;return(0,i.tZ)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"space-between",mt:[6],color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","column","row"],variant:"dividers.top"}},(0,i.tZ)("div",null,"© ",(new Date).getFullYear()," by ",e,". All rights reserved."),(0,i.tZ)("div",null,(0,i.tZ)(l.rU,{"aria-label":"Link to the theme's GitHub repository",href:"https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"},"Theme")," ","by"," ",(0,i.tZ)(l.rU,{"aria-label":"Link to the theme author's website",href:"https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"},"LekoArts")))},k=n(66795),w={"[data-name='live-editor']":{fontSize:1,"textarea, pre":{padding:function(e){return e.space[3]+" !important"}}},"[data-name='live-preview']":{padding:function(e){return"calc("+e.space[2]+" + 10px) !important"},backgroundColor:(0,k.nV)("primary",.7)},".prism-code":{fontSize:[1,1,2],padding:"2rem 1rem 1rem 1rem",webkitOverflowScrolling:"touch",backgroundColor:"transparent",minWidth:"100%",mb:0,mt:0,overflow:"auto",'&[data-linenumber="false"]':{".token-line":{pl:3}}},".gatsby-highlight[data-language=''], .gatsby-highlight[data-language='noLineNumbers']":{".prism-code":{pt:"1rem"}},".token":{display:"inline-block"},"p > code, li > code":{bg:"gray.2",color:"gray.8",px:2,py:1,borderRadius:"2px"},".gatsby-highlight":{fontSize:[1,1,2],position:"relative",webkitOverflowScrolling:"touch",bg:"rgb(1, 22, 39)",borderRadius:"2px",mx:[0,0,0,-3],".token-line":{mx:-3,minWidth:"100%"},"pre code":{float:"left",minWidth:"100%"},'pre[class*="language-"]:before':{bg:"white",borderRadius:"0 0 0.25rem 0.25rem",color:"black",fontSize:"12px",letterSpacing:"0.025rem",padding:"0.1rem 0.5rem",position:"absolute",left:"1rem",textAlign:"right",textTransform:"uppercase",top:0},'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-jsx"]:before':{content:'"jsx"',background:"#61dafb",color:"black"},'pre[class~="language-ts"]:before':{content:'"ts"',background:"#61dafb",color:"black"},'pre[class~="language-tsx"]:before':{content:'"tsx"',background:"#61dafb",color:"black"},'pre[class~="language-html"]:before':{content:'"html"',background:"#005a9c",color:"white"},'pre[class~="language-xml"]:before':{content:'"xml"',background:"#005a9c",color:"white"},'pre[class~="language-svg"]:before':{content:'"svg"',background:"#005a9c",color:"white"},'pre[class~="language-graphql"]:before':{content:'"GraphQL"',background:"#E10098"},'pre[class~="language-css"]:before':{content:'"css"',background:"#ff9800",color:"black"},'pre[class~="language-mdx"]:before':{content:'"mdx"',background:"#f9ac00",color:"black"},'pre[class~="language-php"]:before':{content:'"php"',background:"#777bb3",color:"black"},'pre[class~="language-py"]:before, pre[class~="language-python"]:before':{content:'"py"',background:"#306998",color:"white"},'pre[class~="language-text"]:before':{content:'"text"'},"pre[class~='language-shell']:before":{content:"'shell'"},"pre[class~='language-sh']:before":{content:"'sh'"},"pre[class~='language-bash']:before":{content:"'bash'"},"pre[class~='language-yaml']:before":{content:"'yaml'",background:"#ffa8df"},"pre[class~='language-yml']:before":{content:"'yml'",background:"#ffa8df"},"pre[class~='language-markdown']:before":{content:"'md'"},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:"'json'",background:"linen"},"pre[class~='language-diff']:before":{content:"'diff'",background:"#e6ffed"}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:"normal",wordBreak:"normal",overflowWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},".gatsby-highlight pre::-webkit-scrollbar":{width:2,height:2},".gatsby-highlight pre::-webkit-scrollbar-thumb":{backgroundColor:"primary"},".gatsby-highlight pre::-webkit-scrollbar-track":{background:"rgb(1, 22, 39)"},".line-number-style":{display:"inline-block",width:"3em",userSelect:"none",opacity:.3,textAlign:"center",position:"relative"},".code-title":{backgroundColor:(0,k.nV)("primary",.7),color:"black",fontSize:0,px:3,py:2,fontFamily:"monospace",mx:[0,0,0,-3]},"[data-name='live-preview'], [data-name='live-editor']":{mx:[0,0,0,-3],fontSize:[1,1,2]},".token-line":{pr:3},".highlight-line":{backgroundColor:"rgb(2, 55, 81)",borderLeft:"4px solid rgb(2, 155, 206)",".line-number-style":{width:"calc(3em - 4px)",opacity:.5,left:"-2px"}},".react-live-wrapper":{position:"relative"},".react-live-wrapper .code-copy-button":{right:[0,0,0,-3]}},Z=n(63366),j=["children"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S={border:0,clip:"react(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute","&:focus":{padding:3,position:"fixed",top:"15px",left:"15px",backgroundColor:"heading",color:"background",zIndex:1,width:"auto",height:"auto",clip:"auto",textDecoration:"none"}},I=function(e){var t=e.children,n=(0,Z.Z)(e,j);return(0,i.tZ)("a",Object.assign({},n,{sx:E({},S),href:"#skip-nav","data-skip-link":"true"}),t)};function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){var t=e.children,n=e.className,r=void 0===n?"":n;return(0,i.tZ)(o.Fragment,null,(0,i.tZ)(a.xB,{styles:function(e){return{"*":{boxSizing:"inherit"},html:{WebkitTextSizeAdjust:"100%"},img:{borderStyle:"none"},pre:{fontFamily:"monospace",fontSize:"1em"},"[hidden]":{display:"none"},"::selection":{backgroundColor:e.colors.text,color:e.colors.background},a:{transition:"all 0.3s ease-in-out",color:"text"}}}}),(0,i.tZ)(c.Z,null),(0,i.tZ)(I,null,"Skip to content"),(0,i.tZ)(l.W2,null,(0,i.tZ)(y,null),(0,i.tZ)(l.xu,{id:"skip-nav",sx:A({},w),className:r},t),(0,i.tZ)(v,null)))}},77710:function(e,t,n){"use strict";var r=n(67294),o=n(35414),a=n(25444),i=n(1435);t.Z=function(e){var t=e.title,n=void 0===t?"":t,l=e.description,c=void 0===l?"":l,s=e.pathname,u=void 0===s?"":s,g=e.image,p=void 0===g?"":g,f=e.children,d=void 0===f?null:f,b=e.canonicalUrl,m=void 0===b?"":b,h=(0,i.Z)(),x=h.siteTitle,y=h.siteTitleAlt,v=h.siteUrl,k=h.siteDescription,w=h.siteLanguage,Z=h.siteImage,j=h.author,O={title:n||y,description:c||k,url:""+v+(u||""),image:""+v+(p||Z)};return r.createElement(o.q,{title:n,defaultTitle:y,titleTemplate:"%s | "+x},r.createElement("html",{lang:w}),r.createElement("meta",{name:"description",content:O.description}),r.createElement("meta",{name:"image",content:O.image}),r.createElement("meta",{property:"og:title",content:O.title}),r.createElement("meta",{property:"og:url",content:O.url}),r.createElement("meta",{property:"og:description",content:O.description}),r.createElement("meta",{property:"og:image",content:O.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:O.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:O.title}),r.createElement("meta",{name:"twitter:url",content:O.url}),r.createElement("meta",{name:"twitter:description",content:O.description}),r.createElement("meta",{name:"twitter:image",content:O.image}),r.createElement("meta",{name:"twitter:image:alt",content:O.description}),r.createElement("meta",{name:"twitter:creator",content:j}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,d)}},1435:function(e,t,n){"use strict";var r=n(25444);t.Z=function(){return(0,r.useStaticQuery)("318001574").site.siteMetadata}},80126:function(e,t){"use strict";t.Z=function(e){return e.replace(/\/\/+/g,"/")}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-tags-query-tsx-7df08f32f3cb81837b08.js.map