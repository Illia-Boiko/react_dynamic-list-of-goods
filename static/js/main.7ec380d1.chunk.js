(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{14:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(5),s=n.n(r),a=n(3),c=n.n(a),o=(n(14),n(1)),i=n.n(o),u=n(2),l=n(6),p=n(7),h=n(9),f=n(8),b=n(0),d=function(t){var e=t.name,n=t.callback;return Object(b.jsx)("button",{type:"button",className:"button is-light column is-fullwidth",onClick:n,children:e})},j=function(t){Object(h.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={visibleGoods:[]},t.showAll=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,t.props.onAll();case 3:e.t1=e.sent,e.t2={visibleGoods:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),e)}))),t.show5First=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,t.props.on5First();case 3:e.t1=e.sent,e.t2={visibleGoods:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),e)}))),t.showRed=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,t.props.onRed();case 3:e.t1=e.sent,e.t2={visibleGoods:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),e)}))),t}return Object(p.a)(n,[{key:"render",value:function(){var t=this.state.visibleGoods;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{name:"Show All",callback:this.showAll}),Object(b.jsx)(d,{name:"Show first 5",callback:this.show5First}),Object(b.jsx)(d,{name:"Show red",callback:this.showRed}),Object(b.jsx)("ul",{className:"GoodsList content is-large",children:t.map((function(t){return Object(b.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})]})}}]),n}(c.a.Component),m="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json";function w(){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(m);case 2:return t.abrupt("return",t.sent.json());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return t.abrupt("return",t.sent.slice(0,5));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return t.abrupt("return",t.sent.filter((function(t){return"red"===t.color})));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var g=function(){return Object(b.jsxs)("main",{className:"App box",children:[Object(b.jsx)("h1",{className:"title",children:"List of goods"}),Object(b.jsx)(j,{onAll:w,on5First:O,onRed:y})]})};s.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7ec380d1.chunk.js.map