"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[275],{275:function(e,r,n){n.r(r),n.d(r,{default:function(){return f}});var t=n(861),a=n(433),u=n(439),c=n(757),i=n.n(c),o=n(791),s=n(689),l=n(87),v=n(490),h=n(184),p=function(e){var r=e.value,n=e.value1,t=e.onChange;return(0,h.jsx)(v.dh,{children:(0,h.jsxs)(v.UI,{onSubmit:function(e){e.preventDefault()},children:[(0,h.jsx)(v.IG,{placeholder:"Input name...",autoFocus:"true",type:"text",name:"query",value:r,onChange:function(e){return t("query",e.target.value)}}),(0,h.jsx)(v._r,{placeholder:"Input Release date...",type:"number",min:"1980",max:"2023",step:"1",name:"year",value:n,onChange:function(e){return t("year",e.target.value)}})]})})},d=n(558),f=function(){var e,r,n=(0,o.useState)([]),c=(0,u.Z)(n,2),f=c[0],g=c[1],m=(0,s.TH)(),y=(0,l.lr)(),x=(0,u.Z)(y,2),I=x[0],b=x[1],j=(0,o.useMemo)((function(){return Object.fromEntries((0,a.Z)(I))}),[I]);(0,o.useEffect)((function(){if(j.query){var e=function(){var e=(0,t.Z)(i().mark((function e(){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.h)("searchIO",j.query,j.year);case 3:r=e.sent,n=r.results,g(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[j]);return(0,h.jsxs)("div",{children:[(0,h.jsx)(p,{value:null!==(e=j.query)&&void 0!==e?e:"",value1:null!==(r=j.year)&&void 0!==r?r:"1980",onChange:function(e,r){""===r?delete j[e]||console.log("Error delete"):j[e]=r,b(j)}}),f.length?(0,h.jsx)(v.Jv,{children:f.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"./".concat(e.id),state:{from:m},children:e.title})},e.id)}))}):j.query?(0,h.jsx)(v.v0,{children:"There no movies on your query!"}):(0,h.jsx)(v.v0,{children:"Input your query..."})]})}},558:function(e,r,n){n.d(r,{h:function(){return i}});var t=n(861),a=n(757),u=n.n(a),c=n(243),i=function(){var e=(0,t.Z)(u().mark((function e(r){var n,t,a,i,o,s,l,v,h,p=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=p.length>1&&void 0!==p[1]?p[1]:"",t=p.length>2&&void 0!==p[2]?p[2]:"",a=p.length>3&&void 0!==p[3]?p[3]:0,i=p.length>4&&void 0!==p[4]?p[4]:1,e.t0=r,e.next="trendingIO"===e.t0?7:"searchIO"===e.t0?10:"detailsIO"===e.t0?13:"castIO"===e.t0?16:"reviewsIO"===e.t0?19:22;break;case 7:return s="/trending/movie/day",o={language:"en-US"},e.abrupt("break",23);case 10:return s="/search/movie",o={query:n,primary_release_year:t,include_adult:"false",language:"en-US",page:i},e.abrupt("break",23);case 13:return s="/movie/".concat(a),o={language:"en-US"},e.abrupt("break",23);case 16:return s="/movie/".concat(a,"/credits"),o={language:"en-US"},e.abrupt("break",23);case 19:return s="/movie/".concat(a,"/reviews"),o={language:"en-US",page:i},e.abrupt("break",23);case 22:return e.abrupt("break",23);case 23:return l="https://api.themoviedb.org/3".concat(s),v={method:"GET",params:o,headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2VmNjY1MmU1NDcxYTEwMWQ5YTI2MWViNTI1YjVkZSIsInN1YiI6IjY0OTEzNDBjYzNjODkxMDEwY2E2NzM0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.10kFmhlhDD5DpnNqL0Rvvzn-vv7sk9BM4XvZxV0zxYg"}},e.next=27,c.Z.get(l,v);case 27:return h=e.sent,e.abrupt("return",h.data);case 29:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=275.b31a5653.chunk.js.map