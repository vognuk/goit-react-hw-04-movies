(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{59:function(e,t,a){"use strict";var n=a(53),r=a.n(n),c=a(54),s="5990567cf4039e52fa9271e8be71e971",i=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o={fetchPopular:function(){return fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(s,"&language=en-US&page=1"))},fetchByQuery:function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=true&query=").concat(e))},fetchById:function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(s,"&language=en-US")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fetchCastById:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"))},fetchTrending:function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s))},fetchReviewsById:i};t.a=o},60:function(e,t,a){"use strict";t.a="https://image.tmdb.org/t/p/w500"},61:function(e,t,a){"use strict";var n=a.p+"static/media/No_image_poster.68ae3506.png",r=a(63),c=a.n(r),s=a(1);t.a=function(){return Object(s.jsx)("img",{className:c.a.image,src:n,alt:"No image"})}},63:function(e,t,a){e.exports={image:"NoImage_image__vdnKC"}},70:function(e,t,a){e.exports={section:"Details_section__2GdxK",heading:"Details_heading__1O5Zl",title:"Details_title__cG6cP",wrapper:"Details_wrapper__3a6eN",image:"Details_image__2frVo",button:"Details_button__3tTMT",imgWrapper:"Details_imgWrapper__1VNQs",container:"Details_container__2Gh7Y",description:"Details_description__3Gw9p",list:"Details_list__9ufl8",item:"Details_item__2szu6",itemText:"Details_itemText__3Dd9B"}},71:function(e,t,a){e.exports={list:"Info_list__3QGpE",link:"Info_link__2vM5s",activeLink:"Info_activeLink__36t-5"}},72:function(e,t,a){e.exports={list:"Cast_list__2FH54",item:"Cast_item__bR4dC",photoWrapper:"Cast_photoWrapper__2O85y",description:"Cast_description__bRiNl",name:"Cast_name__2lEiX",characterTitle:"Cast_characterTitle__1qJBL",character:"Cast_character__qHeas",content:"Cast_content__ArpdX"}},73:function(e,t,a){e.exports={list:"ReviewsList_list__2PhzF",item:"ReviewsList_item__VxhWb",title:"ReviewsList_title__10Pnd",content:"ReviewsList_content__2eQwt"}},76:function(e,t,a){"use strict";a.r(t);var n=a(53),r=a.n(n),c=a(54),s=a(55),i=a(56),o=a(58),u=a(57),l=a(17),p=a(0),h=a(70),j=a.n(h),m=a(74),v=a(10),d=a(3),f=a(71),b=a.n(f),_=a(72),x=a.n(_),O=a(61),g=a(60),w=a(1),y=function(e){var t=e.cast;return Object(w.jsx)(w.Fragment,{children:t.length>0?Object(w.jsx)("ul",{className:x.a.list,children:t.map((function(e,t){var a=e.profile_path,n=e.name,r=e.character;return Object(w.jsxs)("li",{className:x.a.item,children:[a?Object(w.jsx)("div",{className:x.a.photoWrapper,children:Object(w.jsx)("img",{src:"".concat(g.a).concat(a),alt:"Photo"})}):Object(w.jsx)(O.a,{}),Object(w.jsxs)("div",{className:x.a.description,children:[Object(w.jsx)("span",{className:x.a.name,children:n}),Object(w.jsxs)("span",{className:x.a.characterTitle,children:["Character ",Object(w.jsx)("br",{})," ",Object(w.jsxs)("span",{className:x.a.character,children:[r,Object(w.jsx)("span",{})]})]})]})]},t)}))}):Object(w.jsx)("p",{className:x.a.content,children:"There is no any info about cast for this movie."})})},k=a(59),N=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={cast:[],error:null},e.fetchCast=function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.fetchCastById(a);case 3:if(!(n=t.sent).ok){t.next=10;break}return t.next=7,n.json();case 7:return c=t.sent,s=c.cast,t.abrupt("return",e.setState({cast:s}));case 10:return t.abrupt("return",Promise.reject(new Error("Can't find anything.")));case 13:t.prev=13,t.t0=t.catch(0),e.setState({error:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,this.fetchCast(t);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.cast,a=e.error;return Object(w.jsx)(w.Fragment,{children:a?Object(w.jsx)("p",{children:a}):Object(w.jsx)(y,{cast:t})})}}]),a}(p.Component),C=a(73),B=a.n(C),D=function(e){var t=e.reviews;return Object(w.jsx)(w.Fragment,{children:t.length>0?Object(w.jsx)("ul",{className:B.a.list,children:t.map((function(e){var t=e.id,a=e.author,n=e.content;return Object(w.jsxs)("li",{className:B.a.item,children:[Object(w.jsxs)("h4",{className:B.a.title,children:["Author: ",a]}),Object(w.jsx)("p",{className:B.a.content,children:n})]},t)}))}):Object(w.jsx)("p",{className:B.a.content,children:" No reviews."})})},S=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={reviews:[],error:null},e.fetchReviews=function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.fetchReviewsById(a);case 3:if(!(n=t.sent).ok){t.next=10;break}return t.next=7,n.json();case 7:return c=t.sent,s=c.results,t.abrupt("return",e.setState({reviews:s}));case 10:return t.abrupt("return",Promise.reject(new Error("Can't find anything.")));case 13:t.prev=13,t.t0=t.catch(0),e.setState({error:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,this.fetchReviews(t);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.reviews,a=e.error;return Object(w.jsxs)(w.Fragment,{children:[" ",a?Object(w.jsx)("p",{children:a}):Object(w.jsx)(D,{reviews:t})," "]})}}]),a}(p.Component),I=Object(d.g)((function(e){var t=e.url,a=e.path,n=e.locationState;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("ul",{className:b.a.list,children:[Object(w.jsx)("li",{children:Object(w.jsx)(v.c,{to:{pathname:"".concat(t,"/cast"),state:Object(m.a)({},n)},className:b.a.link,activeClassName:b.a.activeLink,children:"Cast"})}),Object(w.jsx)("li",{children:Object(w.jsx)(v.c,{to:{pathname:"".concat(t,"/reviews"),state:Object(m.a)({},n)},className:b.a.link,activeClassName:b.a.activeLink,children:"Reviews"})})]}),Object(w.jsx)(d.b,{path:"".concat(a,"/cast"),component:N}),Object(w.jsx)(d.b,{path:"".concat(a,"/reviews"),component:S})]})})),L=function(e){var t=e.movie,a=e.url,n=e.path,r=e.handleGoBack,c=e.locationState,s=t.poster_path,i=t.title,o=t.release_date,u=t.vote_average,l=t.overview,p=t.genres;return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("section",{className:j.a.section,children:[Object(w.jsxs)("div",{className:j.a.wrapper,children:[Object(w.jsxs)("div",{className:j.a.imgWrapper,children:[Object(w.jsx)("button",{type:"button",className:j.a.button,onClick:r,children:" Back"}),s?Object(w.jsx)("img",{className:j.a.image,src:"".concat(g.a).concat(s),alt:"Poster"}):Object(w.jsx)(O.a,{})]}),Object(w.jsxs)("div",{className:j.a.container,children:[Object(w.jsx)("h1",{className:j.a.heading,children:"".concat(i,"(").concat(o.slice(0,4),")")}),Object(w.jsx)("p",{className:j.a.description,children:"User score: ".concat(10*u,"%")}),Object(w.jsx)("h2",{className:j.a.title,children:"Overview:"}),Object(w.jsx)("p",{className:j.a.description,children:l}),Object(w.jsx)("h3",{className:j.a.title,children:"Genres:"}),Object(w.jsx)("ul",{className:j.a.list,children:p.map((function(e){var t=e.id,a=e.name;return Object(w.jsx)("li",{className:j.a.item,children:Object(w.jsx)("span",{className:j.a.itemText,children:a})},t)}))})]})]}),Object(w.jsx)(I,{url:a,path:n,locationState:c})]})})},R=a(8),G=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={movie:null,isLoading:!0,error:null},e.fetchMovieById=function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.fetchById(a);case 3:if(!(n=t.sent).ok){t.next=9;break}return t.next=7,n.json();case 7:return c=t.sent,t.abrupt("return",e.setState({movie:c,isLoading:!1}));case 9:return t.abrupt("return",Promise.reject(new Error("Something went wrong.")));case 12:t.prev=12,t.t0=t.catch(0),e.setState({error:t.t0.message,isLoading:!1});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}(),e.handleGoBack=function(){var t,a=e.props,n=a.location;a.history.push((null===n||void 0===n||null===(t=n.state)||void 0===t?void 0:t.from)||R.a.homePage)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,this.fetchMovieById(t);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.location.state,t=this.props.match,a=t.url,n=t.path,r=this.state,c=r.movie,s=r.isLoading,i=r.error;return Object(w.jsxs)(w.Fragment,{children:[s?Object(w.jsx)(l.a,{}):c&&Object(w.jsx)(L,{movie:c,url:a,path:n,locationState:e,handleGoBack:this.handleGoBack}),i&&Object(w.jsx)("h1",{children:i})]})}}]),a}(p.Component);t.default=G}}]);
//# sourceMappingURL=4.85c1f2d3.chunk.js.map