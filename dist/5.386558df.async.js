webpackJsonp([5],{946:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function o(e){return{loading:e.loading.models.blogToc,blogToc:e.blogToc}}Object.defineProperty(t,"__esModule",{value:!0});var n=(a(317),a(318)),r=l(n),u=a(0),d=l(u),c=a(101),f=a(59),s=a(29),i=a(319),m=l(i),_=a(972),b=l(_);t.default=(0,c.connect)(o)(function(e){var t=(e.loading,e.blogToc),a=[{title:"post",dataIndex:"title",className:b.default.post,render:function(e,t,a){return d.default.createElement("div",null,d.default.createElement(s.Markdown,{data:t}),d.default.createElement(f.Link,{className:b.default.readmore,to:m.default.join("blog",t.filename),children:"Read more"}))}}];return d.default.createElement("div",{className:b.default.blog},d.default.createElement(r.default,{className:b.default.table,rowClassName:function(){return b.default.row},showHeader:!1,columns:a,dataSource:t,rowKey:function(e){return e.filename}}))}),e.exports=t.default},972:function(e,t){e.exports={blog:"blog___JS5-W",table:"table___3Om_t",row:"row___2wpkm",post:"post___2txIu",readmore:"readmore___17XgT"}}});