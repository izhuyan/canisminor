webpackJsonp([9],{369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(346),a=n.n(r),c=n(169);t.default={namespace:"projectToc",state:{},reducers:{save:function(e,t){return t.payload}},effects:{GET:a.a.mark(function e(t,n){var r,s,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.call,s=n.put,e.next=3,r(function(){return Object(c.b)("/api/project/toc")});case 3:return u=e.sent,e.next=6,s({type:"save",payload:u.data});case 6:case"end":return e.stop()}},e,this)})},subscriptions:{setup:function(e){var t=e.dispatch;return e.history.listen(function(e){"project"===e.pathname.split("/")[1]&&t({type:"GET"})})}}}}});