webpackJsonp([3],{593:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),l=function(e){return e&&e.__esModule?e:{default:e}}(n),r=a(263),u=a(599);a(631),t.default=function(){return l.default.createElement(r.Link,{className:"splash",to:"/home"},l.default.createElement("div",{className:"logo-gif"}),l.default.createElement(u.Typist,{className:"splash-text"},l.default.createElement("span",{className:"splash-text-glow"}),"The collection of curriculum vitae and",l.default.createElement("br",null)," recent projects"))},e.exports=t.default},599:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(601);Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return n(l).default}});var r=a(602);Object.defineProperty(t,"SvgIcon",{enumerable:!0,get:function(){return n(r).default}});var u=a(604);Object.defineProperty(t,"Typist",{enumerable:!0,get:function(){return n(u).default}});var c=a(606);Object.defineProperty(t,"DocTitle",{enumerable:!0,get:function(){return n(c).default}});var o=a(608);Object.defineProperty(t,"IntroIcon",{enumerable:!0,get:function(){return n(o).default}});var i=a(610);Object.defineProperty(t,"Showcase",{enumerable:!0,get:function(){return n(i).default}});var d=a(612);Object.defineProperty(t,"AwardList",{enumerable:!0,get:function(){return n(d).default}});var f=a(614);Object.defineProperty(t,"ExpList",{enumerable:!0,get:function(){return n(f).default}});var s=a(616);Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return n(s).default}});var m=a(618);Object.defineProperty(t,"Menu",{enumerable:!0,get:function(){return n(m).default}});var p=a(622);Object.defineProperty(t,"Title",{enumerable:!0,get:function(){return n(p).default}});var v=a(624);Object.defineProperty(t,"LazyLoad",{enumerable:!0,get:function(){return n(v).default}});var E=a(626);Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return n(E).default}});var y=a(628);Object.defineProperty(t,"Footer",{enumerable:!0,get:function(){return n(y).default}})},600:function(e,t,a){e.exports={default:a(619),__esModule:!0}},601:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(6),r=n(l),u=a(21),c=n(u),o=a(88),i=n(o),d=a(0),f=n(d),s=a(2),m=n(s);t.default=function(e){var t,a=e.type,n=e.className,l=(0,i.default)(e,["type","className"]),u=(0,m.default)((t={"cm-iconfont":!0},(0,c.default)(t,"icon-"+a,a),(0,c.default)(t,n,n),t));return f.default.createElement("span",(0,r.default)({className:u},l))},e.exports=t.default},602:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(6),r=n(l),u=a(88),c=n(u),o=a(0),i=n(o);a(603);var d=a(2),f=n(d);t.default=function(e){var t=e.type,a=e.className,n=(0,c.default)(e,["type","className"]),l='<use xlink:href="#icon-'+t+'" />';return i.default.createElement("svg",(0,r.default)({className:(0,f.default)("svg-icon",a),"aria-hidden":!0,dangerouslySetInnerHTML:{__html:l}},n))},e.exports=t.default},603:function(e,t){},604:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(6),r=n(l),u=a(88),c=n(u),o=a(0),i=n(o),d=a(269),f=n(d);a(605),t.default=function(e){var t=e.children,a=e.className,n=e.delay,l=void 0===n?40:n,u=(0,c.default)(e,["children","className","delay"]),o={show:!0,blink:!0,element:"_",hideWhenDone:!1};return i.default.createElement(f.default,(0,r.default)({className:a,avgTypingDelay:l,cursor:o},u),t)},e.exports=t.default},605:function(e,t){},606:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),l=function(e){return e&&e.__esModule?e:{default:e}}(n),r=a(599);a(607),t.default=function(e){var t=e.content;return l.default.createElement("div",{className:"doc-title"},l.default.createElement("div",{className:"icon"},l.default.createElement(r.Icon,{type:"doc-"+t.type})),l.default.createElement("div",{className:"title"},t.text.toUpperCase()),l.default.createElement("div",{className:"desc"},t.desc))},e.exports=t.default},607:function(e,t){},608:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),l=function(e){return e&&e.__esModule?e:{default:e}}(n),r=a(599);a(609),t.default=function(e){var t=e.type,a=e.text;return l.default.createElement("div",{className:"intro-icon"},l.default.createElement("div",{className:"intro-icon-box"},l.default.createElement(r.Icon,{type:"doc-"+t})),l.default.createElement("div",{className:"intro-icon-text"},a.toUpperCase()))},e.exports=t.default},609:function(e,t){},610:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),l=function(e){return e&&e.__esModule?e:{default:e}}(n);a(611),t.default=function(e){var t=e.content;return l.default.createElement("div",{className:"showcase"},t.map(function(e,t){return l.default.createElement("div",{key:t,className:"showcase-item"},l.default.createElement("div",{className:"title"},e.title),l.default.createElement("div",{className:"desc"},e.desc))}))},e.exports=t.default},611:function(e,t){},612:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),l=function(e){return e&&e.__esModule?e:{default:e}}(n),r=a(599);a(613),t.default=function(e){var t=e.content;return l.default.createElement("div",{className:"award-list"},t.map(function(e,t){return l.default.createElement("div",{className:"award-list-group",key:t},e.map(function(e,t){return l.default.createElement("div",{className:"award-list-item",key:t},l.default.createElement(r.Icon,{type:0==t?"point-main":"point"}),l.default.createElement("div",{className:"desc"},e.split("|").map(function(e,t){return l.default.createElement("p",{key:t},e)})))}))}))},e.exports=t.default},613:function(e,t){},614:function(e,t,a){"use strict";function n(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),.25].join(",")+")"}Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),r=function(e){return e&&e.__esModule?e:{default:e}}(l);a(615),t.default=function(){var e=[{img:"exp-1",color:"#999999",title:"Freelancer, GapYear",time:"2013\uff0c\u81ea\u7531\u804c\u4e1a\u8005\uff0c\u95f4\u9694\u5e74",desc:"\u521b\u520a\u72ec\u81ea\u6742\u5fd7\u300e\u987b\u81fe\u6620\u793e Instant-Zine\u300f\u53d1\u520a24\u671f|http://instant-zine.lofter.com/"},{img:"exp-2",color:"#1CEBA7",title:"Senior UI/UX Designer, Team Leader",time:"2014.5 - 2015.11\uff0c\u9ad8\u7ea7UED\u8bbe\u8ba1\u5e08\uff0c\u4ea7\u54c1\u7ebf\u4e3b\u8bbe",desc:"\u5c31\u804c\u6caa\u6c5f\u7f51\uff0c\u8d1f\u8d23\u6caa\u6c5f\u5b66\u4e60 \xb7 \u6caa\u6c5f\u5f00\u5fc3\u8bcd\u573a \xb7 \u6caa\u6c5f\u5c0fD\u4e09\u6761\u4ea7\u54c1\u7ebf\u8bbe\u8ba1|\u5b9a\u4e49\u6caa\u6c5fUED\u89c6\u89c9\u5f62\u8c61\uff0c\u5f15\u5165\u52a8\u6548\u5de5\u5177Origami\uff0c\u5efa\u7acb\u57fa\u4e8eSketch/Zeplin\u7684\u8bbe\u8ba1\u6d41\u6c34\u7ebf|\u5176\u4e2d\u4f5c\u4e3a\u4e3b\u8bbe\u6539\u7248\u5f00\u5fc3\u8bcd\u573a5.0\uff1a\u8363\u83b72015\u5e74AppStore\u80cc\u8bcd\u7c7bApp\u7b2c\u4e00\u540d"},{img:"exp-3",color:"#FF9800",title:"Co-Founder, UED Director",time:"2015.11 - \u81f3\u4eca\uff0c\u8054\u5408\u521b\u59cb\u4eba\uff0cUED\u8bbe\u8ba1\u603b\u76d1",desc:"\u8054\u5408\u521b\u529e\u718a\u732b\u91d1\u5e93\uff0c\u521b\u4e1a\u521d\u671f\u7684\u5168\u6808\u8bbe\u8ba1\u5e08\u81f3\u4e2d\u671f\u7684\u8bbe\u8ba1\u7ba1\u7406|\u4ea7\u54c1\u4e0a\u7ebf\u4e00\u5e74\u8fbe\u6210100\u4ebf\u4ea4\u6613\u989d\uff0c\u83b72016\u5e74\u4e2d\u56fd\u6700\u53d7\u6b22\u8fce\u4e92\u8054\u7f51\u91d1\u878d\u54c1\u724c|\u5c06\u524d\u7aef\u6280\u672f\u6808\u5f15\u5165UED\u90e8\u95e8\uff0c\u5efa\u7acb\u4ea7\u54c1\u81ea\u52a8\u5316UI\u4ed3\u5e93/React\u7ec4\u4ef6\u5e93"}];return r.default.createElement("div",{className:"exp-list"},e.map(function(e,t){return r.default.createElement("div",{className:"exp-list-item",key:t},r.default.createElement("div",{className:"exp-list-img",style:{backgroundImage:"url(/img/"+e.img+".png)",boxShadow:"0 12px 24px 0 "+n(e.color)}}),r.default.createElement("div",{className:"exp-list-text"},r.default.createElement("div",{className:"title"},e.title),r.default.createElement("div",{className:"time"},e.time),r.default.createElement("div",{className:"desc"},e.desc.split("|").map(function(e,t){return r.default.createElement("p",{key:t},e)}))))}))},e.exports=t.default},615:function(e,t){},616:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=(a(270),a(271)),r=n(l),u=a(6),c=n(u),o=(a(266),a(51)),i=n(o),d=a(88),f=n(d),s=a(0),m=n(s),p=a(263),v=a(2);n(v);a(617),t.default=function(e){var t=e.children,a=e.url,n=e.to,l=(0,f.default)(e,["children","url","to"]),u=m.default.createElement(r.default,(0,c.default)({className:"cm-btn",type:"primary",onClick:a?function(){return window.open(a)}:null},l),t,m.default.createElement(i.default,{type:"caret-right"}));return n&&(u=m.default.createElement(p.Link,{className:"cm-btn-link",to:n},u)),u},e.exports=t.default},617:function(e,t){},618:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(600),r=n(l),u=a(12),c=n(u),o=a(13),i=n(o),d=a(14),f=n(d),s=a(15),m=n(s),p=a(0),v=n(p),E=a(263),y=a(2),_=n(y);a(621);var h=function(e){function t(e){(0,c.default)(this,t);var a=(0,f.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return a.state={open:!1},a.onClick=a.onClick.bind(a),a}return(0,m.default)(t,e),(0,i.default)(t,[{key:"onClick",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=(this.props.content,this.props.content.map(function(e,t){return v.default.createElement(E.Link,{key:t,className:"menu-item",to:e.to},e.title)}));return v.default.createElement("div",{className:(0,_.default)("menu-open",{"menu-oppenned":this.state.open}),onClick:this.onClick},v.default.createElement("div",{className:"sub-menu"},v.default.createElement("div",{className:"sub-menu-bg"}),e),v.default.createElement("div",{className:"menu-icon"},v.default.createElement("div",{className:"cls"}),v.default.createElement("div",{className:"cls"}),v.default.createElement("div",{className:"cls"})))}}]),t}(v.default.Component);t.default=h,e.exports=t.default},619:function(e,t,a){a(620),e.exports=a(11).Object.getPrototypeOf},620:function(e,t,a){var n=a(68),l=a(267);a(268)("getPrototypeOf",function(){return function(e){return l(n(e))}})},621:function(e,t){},622:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(6),r=n(l),u=a(88),c=n(u),o=a(0),i=n(o),d=a(599),f=a(2),s=n(f);a(623),t.default=function(e){var t=e.className,a=e.title,n=e.desc,l=(0,c.default)(e,["className","title","desc"]);return i.default.createElement("div",(0,r.default)({className:(0,s.default)("contact-title",t)},l),i.default.createElement("div",{className:"title"},a),i.default.createElement(d.Typist,{className:"desc"},n))},e.exports=t.default},623:function(e,t){},624:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=(a(266),a(51)),r=n(l),u=a(0),c=n(u),o=a(140),i=n(o);a(625),t.default=function(e){var t=e.children,a=e.offset,n=void 0===a?100:a,l=e.width,u=void 0===l?"100%":l,o=e.height,d=void 0===o?500:o,f=e.background,s=void 0===f?"transparent":f,m=e.color,p=void 0===m?"#62e6ac":m,v=c.default.createElement("div",{className:"placeholder",style:{width:u,height:d+"px",background:s}},c.default.createElement(r.default,{type:"loading",style:{fontSize:32,color:p}}));return c.default.createElement(i.default,{height:d,offset:n,placeholder:v,children:t,once:!0})},e.exports=t.default},625:function(e,t){},626:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=(a(264),a(265)),r=n(l),u=a(0),c=n(u),o=a(599),i=a(263),d=a(2),f=n(d);a(627);var s=r.default.Header;t.default=function(e){var t=e.location,a=[{title:"Intro",to:"/home"},{title:"Project Story",to:"/project"},{title:"Let's talk",to:"/contact"}],n=function(e){var a=e.title,n=e.to,l=(0,f.default)({"header-navitem":!0,"header-navitem__active":t.pathname==n});return c.default.createElement(i.Link,{className:l,to:n},a)};return c.default.createElement(s,{className:"header"},c.default.createElement(o.Icon,{className:"header-logo",type:"logo"}),c.default.createElement("div",{className:"header-nav"},c.default.createElement("div",{className:"header-phone"},c.default.createElement(o.Menu,{content:a})),c.default.createElement("div",{className:"header-desktop"},a.map(function(e,t){return c.default.createElement(n,{key:t,title:e.title,to:e.to})}))))},e.exports=t.default},627:function(e,t){},628:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=(a(272),a(273)),r=n(l),u=(a(264),a(265)),c=n(u),o=a(0),i=n(o),d=a(599);a(629);var f=c.default.Footer;t.default=function(){var e=function(e){var t=e.type,a=e.href;return i.default.createElement("a",{href:a,target:"_blank"},i.default.createElement(d.Icon,{className:"footer-social-icon",type:"social-"+t}))};return i.default.createElement(f,{className:"footer"},i.default.createElement(d.Icon,{className:"footer-logo",type:"logo-text"}),i.default.createElement("div",{className:"footer-text"},"\xa9 CanisMinor 2017",i.default.createElement("span",{className:"footer-note"},"\u4eacICP\u590716055942\u53f7-1")),i.default.createElement("div",{className:"footer-social"},i.default.createElement(r.default,{content:i.default.createElement("img",{width:"325",src:"/img/wechat.png"}),trigger:"click",placement:"top"},i.default.createElement("a",null,i.default.createElement(d.Icon,{className:"footer-social-icon",type:"social-wechat"}))),i.default.createElement(e,{type:"linkedin",href:"https://www.linkedin.com/in/%E6%98%B1%E5%B8%86-%E6%9D%A8-269087124/"}),i.default.createElement(e,{type:"github",href:"https://github.com/canisminor1990"}),i.default.createElement(e,{type:"coding",href:"https://coding.net/u/canisminor1990"}),i.default.createElement(e,{type:"mail",href:"mailto:i@canisminor.cc"})))},e.exports=t.default},629:function(e,t){},631:function(e,t){}});