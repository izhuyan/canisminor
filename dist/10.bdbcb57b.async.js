webpackJsonp([10],{481:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(107),u=n(r),s=a(192),o=n(s);t.default={namespace:"blogPage",state:{},reducers:{save:function(e,t){return t.payload}},effects:{GET:u.default.mark(function e(t,a){var n,r,s=a.call,c=a.put;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=window.location.pathname.split("/")[2],e.next=3,s(function(){return(0,o.default)("/api/blog/"+n)});case 3:return r=e.sent,e.next=6,c({type:"save",payload:r.data});case 6:case"end":return e.stop()}},e,this)})},subscriptions:{setup:function(e){var t=e.dispatch;return e.history.listen(function(e){var a=e.pathname.split("/");"blog"===a[1]&&a[2]&&t({type:"GET"})})}}},e.exports=t.default}});