"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[859],{2961:function(n,e,r){r.d(e,{Z:function(){return a}});var t=r(184);var a=function(n){var e=n.error;return(0,t.jsxs)("div",{style:{textAlign:"center"},children:[(0,t.jsx)("h1",{children:"Something went wrong!"}),(0,t.jsx)("p",{children:e})]})}},4723:function(n,e,r){r.d(e,{Z:function(){return m}});var t,a,i,o,s=r(1087),c=r(7689),u=r(168),p=r(6444),d=p.ZP.ul(t||(t=(0,u.Z)(["\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 32px;\n"]))),l=p.ZP.li(a||(a=(0,u.Z)(["\n  padding: 5px;\n  border-radius: 10px;\n  width: 100%;\n\n  &:not(:last-child) {\n    @media screen and (max-width: 767px) {\n      margin: 0 auto;\n      margin-bottom: 20px;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 394px;\n  }\n\n  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,\n    box-shadow 250ms ease-in-out, transform 250ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 20px 10px,\n      rgba(0, 0, 0, 0.3) 0px 10px 7px -2px;\n    transform: scale(1.03);\n  }\n"]))),v=p.ZP.div(i||(i=(0,u.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n\n  > img {\n    object-fit: cover;\n  }\n"]))),f=p.ZP.div(o||(o=(0,u.Z)(["\n  padding-top: 10px;\n  overflow: hidden;\n"]))),h=r(9093),x=r(184);var m=function(n){var e=n.movies,r=(0,c.TH)();return(0,x.jsx)(d,{children:e.map((function(n){var e=n.id,t=n.poster_path,a=n.original_title,i=n.name,o=n.vote_average,c=n.vote_count;return(0,x.jsx)(l,{children:(0,x.jsxs)(s.OL,{to:"/movies/".concat(e),state:{from:r},children:[(0,x.jsx)(v,{children:(0,x.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w500"+t:h,alt:i})}),(0,x.jsxs)(f,{children:[(0,x.jsx)("h2",{children:null!==a&&void 0!==a?a:i}),(0,x.jsxs)("p",{children:["Rating: ",o]}),(0,x.jsxs)("p",{children:["Votes: ",c," "]})]})]})},e)}))})}},4859:function(n,e,r){r.r(e),r.d(e,{default:function(){return p}});var t=r(9439),a=r(4390),i=r(2791),o=r(4723),s=r(7013),c=r(2961),u=r(184);var p=function(){var n=(0,i.useState)([]),e=(0,t.Z)(n,2),r=e[0],p=e[1],d=(0,i.useState)("idle"),l=(0,t.Z)(d,2),v=l[0],f=l[1],h=(0,i.useState)(null),x=(0,t.Z)(h,2),m=x[0],g=x[1];return(0,i.useEffect)((function(){f("pending"),a.Df().then((function(n){f("resolved"),p(n)})).catch((function(n){g(n),f("rejected")}))}),[]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Tranding movies"}),"pending"===v&&(0,u.jsx)(s.Z,{}),"resolved"===v&&(0,u.jsx)(o.Z,{movies:r}),"rejected"===v&&(0,u.jsx)(c.Z,{error:m.message})]})}},4390:function(n,e,r){r.d(e,{Df:function(){return d},M1:function(){return h},MI:function(){return v},Wf:function(){return u},tx:function(){return m}});var t=r(5861),a=r(7757),i=r.n(a),o=r(1243),s=r(9014),c=o.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"d03712107dcdd723f1173c5ee2c0d8c1"}});function u(n,e){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(i().mark((function n(e,r){var t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("search/movie",{params:{query:e,signal:r.signal}});case 3:return a=n.sent,n.abrupt("return",null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.results);case 7:n.prev=7,n.t0=n.catch(0),s.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("trending/movie/day",{params:{language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",null===r||void 0===r||null===(e=r.data)||void 0===e?void 0:e.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n,e){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(i().mark((function n(e,r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("movie/".concat(e),{params:{signal:r.signal}});case 3:return t=n.sent,n.abrupt("return",null===t||void 0===t?void 0:t.data);case 7:n.prev=7,n.t0=n.catch(0),s.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n,e){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(i().mark((function n(e,r){var t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("movie/".concat(e,"/credits"),{params:{signal:r.signal}});case 3:return a=n.sent,n.abrupt("return",null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.cast);case 7:n.prev=7,n.t0=n.catch(0),s.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function m(n,e){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(i().mark((function n(e,r){var t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("movie/".concat(e,"/reviews"),{params:{signal:r.signal}});case 3:return a=n.sent,n.abrupt("return",null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.results);case 7:n.prev=7,n.t0=n.catch(0),s.ZP.error("Something went wrong \ud83d\ude25!"),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},9093:function(n,e,r){n.exports=r.p+"static/media/movie-pic.a6cacd9a63a2acf7a0e9.jpg"}}]);
//# sourceMappingURL=859.863b60ec.chunk.js.map