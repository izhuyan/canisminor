webpackJsonp([3],{623:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=(a(151),a(42)),o=l(n),u=(a(149),a(150)),d=l(u),r=a(0),f=l(r),i=a(98),c=(a(32),a(20)),s=a(625),g=l(s),p=a(648),m=l(p),_=function(e){return{loading:e.loading.global,blogPage:e.blogPage}};t.default=(0,i.connect)(_)(function(e){var t=e.loading,a=e.blogPage;return t||(0,g.default)(a.title),f.default.createElement("div",{className:m.default.page},t?f.default.createElement(d.default,{spinning:t,size:"large",style:{width:"100%",lineHeight:"720px"}}):f.default.createElement(c.Markdown,{data:a}),f.default.createElement(c.LazyLoad,{className:m.default.footer},f.default.createElement(c.Button,{style:{paddingRight:"2rem"},to:"/blog",icon:!1},f.default.createElement(o.default,{type:"left"})," Go Back"),t?"":f.default.createElement(c.Tags,{data:a.tag})),f.default.createElement(c.LazyLoad,null,f.default.createElement(c.Comment,null)))}),e.exports=t.default},625:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){document.title=e+" - CanisMinor"},e.exports=t.default},648:function(e,t){e.exports={page:"page___2Bi8b",showup:"showup___2Y6GB",footer:"footer___iOSay"}}});