webpackJsonp([4],{617:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=(a(148),a(149)),n=l(o),u=a(0),d=l(u),f=a(95),r=a(96),s=l(r),c=a(24),i=a(624),_=l(i),g=a(645),m=l(g),p=function(e){return{loading:e.loading.global,blogToc:e.blogToc}};t.default=(0,f.connect)(p)(function(e){var t=e.loading,a=e.blogToc;(0,_.default)("Blog");var l=function(e,a){return d.default.createElement(c.LazyLoad,{key:a,className:m.default.post},d.default.createElement(c.Markdown,{data:e}),d.default.createElement("div",{className:m.default.footer},t?"":d.default.createElement(c.Tags,{data:e.tag}),d.default.createElement(c.Button,{to:s.default.join("blog",e.filename)},"Read More")))};return d.default.createElement("div",{className:m.default.blog},d.default.createElement("div",{className:m.default.list},t?d.default.createElement(n.default,{style:{width:"100%",lineHeight:"80vh"},size:"large"}):a.map(l)))}),e.exports=t.default},624:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){document.title=e+" - CanisMinor"},e.exports=t.default},645:function(e,t){e.exports={blog:"blog___JS5-W",list:"list___1PJtj",post:"post___2txIu",footer:"footer___2MBFf",showup:"showup___1ys9V"}}});