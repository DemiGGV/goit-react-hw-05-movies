"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[884],{884:function(e,r,n){n.r(r);var t=n(861),a=n(439),s=n(757),c=n.n(s),i=n(966),u=n(791),o=n(689),l=n(87),h=n(490),d=n(558),p=n(184);r.default=function(){var e=(0,u.useState)({}),r=(0,a.Z)(e,2),n=r[0],s=r[1],v=(0,o.UO)().id,j=(0,u.useRef)(!0),x=(0,u.useRef)((0,o.TH)());(0,u.useEffect)((function(){if(j.current){var e=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.h)("detailsIO","",v);case 3:r=e.sent,s(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e(),j.current=!1}}),[j,v]);var f=n.poster_path,g=n.original_title,b=n.vote_average,m=n.overview,k=n.genres;return(0,p.jsxs)(h.rX,{children:[(0,p.jsx)(l.rU,{to:x.current.state.from,children:(0,p.jsx)(h.jp,{type:"button",children:"Go back"})}),(0,p.jsxs)(h.z1,{children:[(0,p.jsx)(h.oP,{src:"https://image.tmdb.org/t/p/w300".concat(f),alt:g}),(0,p.jsxs)("div",{children:[(0,p.jsx)(h.uF,{children:g}),(0,p.jsxs)("p",{children:["User score:",Math.round(10*b),"%"]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:(0,p.jsx)("i",{children:m})}),(0,p.jsx)("h3",{children:"Genres"}),k&&(0,p.jsx)("p",{children:k.map((function(e){return e.name})).join(", ")})]})]}),(0,p.jsxs)(h.Jv,{children:[(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{to:"cast",children:"Cast:"})}),(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{to:"reviews",children:"User reviews:"})})]}),(0,p.jsx)(u.Suspense,{fallback:(0,p.jsx)(i.a,{}),children:(0,p.jsx)(o.j3,{})})]})}},558:function(e,r,n){n.d(r,{h:function(){return i}});var t=n(861),a=n(757),s=n.n(a),c=n(243),i=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t,a,i,u,o,l,h,d=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=d.length>1&&void 0!==d[1]?d[1]:"",t=d.length>2&&void 0!==d[2]?d[2]:0,a=d.length>3&&void 0!==d[3]?d[3]:1,e.t0=r,e.next="trendingIO"===e.t0?6:"searchIO"===e.t0?9:"detailsIO"===e.t0?12:"castIO"===e.t0?15:"reviewsIO"===e.t0?18:21;break;case 6:return u="/trending/movie/day",i={language:"en-US"},e.abrupt("break",22);case 9:return u="/search/movie",i={query:n,include_adult:"false",language:"en-US",page:a},e.abrupt("break",22);case 12:return u="/movie/".concat(t),i={language:"en-US"},e.abrupt("break",22);case 15:return u="/movie/".concat(t,"/credits"),i={language:"en-US"},e.abrupt("break",22);case 18:return u="/movie/".concat(t,"/reviews"),i={language:"en-US",page:a},e.abrupt("break",22);case 21:return e.abrupt("break",22);case 22:return o="https://api.themoviedb.org/3".concat(u),l={method:"GET",params:i,headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2VmNjY1MmU1NDcxYTEwMWQ5YTI2MWViNTI1YjVkZSIsInN1YiI6IjY0OTEzNDBjYzNjODkxMDEwY2E2NzM0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.10kFmhlhDD5DpnNqL0Rvvzn-vv7sk9BM4XvZxV0zxYg"}},e.next=26,c.Z.get(o,l);case 26:return h=e.sent,console.log(h.data),e.abrupt("return",h.data);case 29:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=884.0ac00836.chunk.js.map