webpackJsonp([7],{620:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(147),u=n(r),s=a(2),c=n(s),o=a(260),p=n(o);e.default={namespace:"projectToc",state:{},reducers:{save:function(t,e){var a=e.payload;return(0,c.default)({},t,{data:a}).data}},effects:{GET:u.default.mark(function t(e,a){var n,r=a.call,s=a.put;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(function(){return(0,p.default)("/api/project/toc")});case 2:return n=t.sent,t.next=5,s({type:"save",payload:n.data});case 5:case"end":return t.stop()}},t,this)})},subscriptions:{setup:function(t){var e=t.dispatch;return t.history.listen(function(t){"project"===t.pathname.split("/")[1]&&e({type:"GET"})})}}},t.exports=e.default}});