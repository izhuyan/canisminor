webpackJsonp([4],{622:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=(a(149),a(150)),u=l(o),n=a(0),d=l(n),f=a(98),r=(a(32),a(99)),s=l(r),c=a(20),i=a(625),_=l(i),g=a(647),m=l(g),p=function(e){return{loading:e.loading.global,blogToc:e.blogToc}};t.default=(0,f.connect)(p)(function(e){var t=e.loading,a=e.blogToc;(0,_.default)("Blog");var l=function(e,a){return d.default.createElement(c.LazyLoad,{key:a,offset:-100,className:m.default.post},d.default.createElement(c.Markdown,{data:e}),d.default.createElement("div",{className:m.default.footer},t?"":d.default.createElement(c.Tags,{data:e.tag}),d.default.createElement(c.Button,{to:s.default.join("blog",e.filename)},"Read More")))};return d.default.createElement("div",{className:m.default.blog},d.default.createElement("div",{className:m.default.list},t?d.default.createElement(u.default,{size:"large"}):a.map(l)))}),e.exports=t.default},625:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){document.title=e+" - CanisMinor"},e.exports=t.default},647:function(e,t){e.exports={blog:"blog___JS5-W",list:"list___1PJtj",post:"post___2txIu",footer:"footer___2MBFf",showup:"showup___1ys9V"}}});