"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[244],{6244:function(n,r,t){t.r(r),t.d(r,{default:function(){return p}});var e,a=t(9439),o=t(2791),u=t(7689),i=t(4390),c=t(168),s=t(6444).ZP.ul(e||(e=(0,c.Z)(["\n  padding-bottom: 20px;\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n\n  border-bottom: 1px solid black;\n"]))),l=t(184);var p=function(){var n=(0,o.useState)([]),r=(0,a.Z)(n,2),t=r[0],e=r[1],c=(0,u.UO)().movieId;return(0,o.useEffect)((function(){var n=new AbortController;return i.tx(c,n).then(e),function(){n.abort()}}),[c]),(0,l.jsx)("div",{children:(0,l.jsx)(s,{children:t.map((function(n){return(0,l.jsxs)("li",{children:[(0,l.jsx)("h3",{children:n.author}),(0,l.jsx)("p",{children:n.content})]},n.id)}))})})}},4390:function(n,r,t){t.d(r,{Df:function(){return p},M1:function(){return h},MI:function(){return v},Wf:function(){return s},tx:function(){return m}});var e=t(5861),a=t(7757),o=t.n(a),u=t(1243),i=t(9014),c=u.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"d03712107dcdd723f1173c5ee2c0d8c1"}});function s(n,r){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(o().mark((function n(r,t){var e,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("search/movie",{params:{query:r,signal:t.signal}});case 3:return a=n.sent,n.abrupt("return",null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.results);case 7:n.prev=7,n.t0=n.catch(0),i.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(o().mark((function n(){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("trending/movie/day",{params:{language:"en-US"}});case 2:return t=n.sent,n.abrupt("return",null===t||void 0===t||null===(r=t.data)||void 0===r?void 0:r.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n,r){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(o().mark((function n(r,t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("movie/".concat(r),{params:{signal:t.signal}});case 3:return e=n.sent,n.abrupt("return",null===e||void 0===e?void 0:e.data);case 7:n.prev=7,n.t0=n.catch(0),i.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n,r){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(o().mark((function n(r,t){var e,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("movie/".concat(r,"/credits"),{params:{signal:t.signal}});case 3:return a=n.sent,n.abrupt("return",null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.cast);case 7:n.prev=7,n.t0=n.catch(0),i.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function m(n,r){return w.apply(this,arguments)}function w(){return(w=(0,e.Z)(o().mark((function n(r,t){var e,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("movie/".concat(r,"/reviews"),{params:{signal:t.signal}});case 3:return a=n.sent,n.abrupt("return",null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.results);case 7:n.prev=7,n.t0=n.catch(0),i.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=244.f905bfaf.chunk.js.map