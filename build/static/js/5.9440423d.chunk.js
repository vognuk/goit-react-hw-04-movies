(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{59:function(e,t,r){"use strict";var a=r(53),n=r.n(a),c=r(54),s="5990567cf4039e52fa9271e8be71e971",i=function(){var e=Object(c.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o={fetchPopular:function(){return fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(s,"&language=en-US&page=1"))},fetchByQuery:function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=true&query=").concat(e))},fetchById:function(){var e=Object(c.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(s,"&language=en-US")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fetchCastById:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"))},fetchTrending:function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s))},fetchReviewsById:i};t.a=o},60:function(e,t,r){"use strict";t.a="https://image.tmdb.org/t/p/w500"},61:function(e,t,r){"use strict";var a=r.p+"static/media/No_image_poster.68ae3506.png",n=r(63),c=r.n(n),s=r(1);t.a=function(){return Object(s.jsx)("img",{className:c.a.image,src:a,alt:"No image"})}},63:function(e,t,r){e.exports={image:"NoImage_image__vdnKC"}},64:function(e,t,r){"use strict";var a=r(10),n=r(3),c=r(65),s=r.n(c),i=r(61),o=r(60),u=r(1);t.a=Object(n.g)((function(e){var t=e.movies,r=e.location,n=e.pageTitle;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:s.a.wrapper,children:[n&&Object(u.jsxs)("h1",{className:s.a.heading,children:[" ",n]}),Object(u.jsx)("ul",{className:s.a.list,children:t.map((function(e){var t=e.id,n=e.title,c=e.poster_path;return Object(u.jsx)("li",{className:s.a.item,children:Object(u.jsxs)(a.b,{to:{pathname:"/movies/".concat(t),state:{from:r}},children:[c?Object(u.jsx)("img",{src:"".concat(o.a).concat(c),alt:"poster"}):Object(u.jsx)(i.a,{}),Object(u.jsx)("span",{className:s.a.title,children:n})]})},t)}))})]})})}))},65:function(e,t,r){e.exports={wrapper:"Movies_wrapper__iMT5C",heading:"Movies_heading__366Be",list:"Movies_list__3Sd2J",item:"Movies_item__I3Orv",title:"Movies_title__e94JA"}},66:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a={POPULAR:"Popular",RESULT:"Search results",TRENDING:"In trending"}},69:function(e,t,r){e.exports={wrapper:"SearchBar_wrapper__2JNS8",form:"SearchBar_form__3sB8r",button:"SearchBar_button__MYZ9H",label:"SearchBar_label__35g-I",input:"SearchBar_input__1CcOr"}},77:function(e,t,r){"use strict";r.r(t);var a=r(53),n=r.n(a),c=r(54),s=r(55),i=r(56),o=r(58),u=r(57),p=r(0),h=r(17),l=r(67),f=r.n(l),m=function(e){return f.a.parse(e)},v=r(69),b=r.n(v),g=r(1),d=function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={value:""},e.handleInputChange=function(t){e.setState({value:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault();var r=e.state.value,a=e.props.onSubmit;""!==r.trim()&&(a(r.trim()),e.setState({value:""}))},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this.state.value;return Object(g.jsx)("div",{className:b.a.wrapper,children:Object(g.jsxs)("form",{className:b.a.form,onSubmit:this.handleSubmit,children:[Object(g.jsx)("input",{className:b.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Enter movie",value:e,onChange:this.handleInputChange}),Object(g.jsx)("button",{type:"submit",className:b.a.button,children:Object(g.jsx)("span",{className:b.a.label,children:"Go"})})]})})}}]),r}(p.Component),j=r(64),x=r(66),_=r(8),S=r(59),y=function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={movies:[],isLoading:!0,isSearching:!1,error:null},e.fetchMovies=function(){var t=Object(c.a)(n.a.mark((function t(r){var a,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0}),t.prev=1,t.next=4,S.a.fetchByQuery(r);case 4:if(!(a=t.sent).ok){t.next=14;break}return t.next=8,a.json();case 8:if(0!==(c=t.sent).results.length){t.next=13;break}return e.props.history.push(_.a.moviesPage),e.setState({isLoading:!1}),t.abrupt("return");case 13:return t.abrupt("return",e.setState({movies:c.results,isLoading:!1}));case 14:return t.abrupt("return",Promise.reject(new Error("Sorry. Something went wrong. Can't find anything.")));case 17:t.prev=17,t.t0=t.catch(1),e.setState({error:t.t0.message,isLoading:!1});case 20:case"end":return t.stop()}}),t,null,[[1,17]])})));return function(e){return t.apply(this,arguments)}}(),e.fetchPopularMovies=Object(c.a)(n.a.mark((function t(){var r,a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!1}),t.prev=1,t.next=4,S.a.fetchPopular();case 4:if(!(r=t.sent).ok){t.next=10;break}return t.next=8,r.json();case 8:return a=t.sent,t.abrupt("return",e.setState({movies:a.results}));case 10:return t.abrupt("return",Promise.reject(new Error("Sorry. Something went wrong. Can't find anything.")));case 13:t.prev=13,t.t0=t.catch(1),e.setState({error:t.t0.message,isLoading:!1});case 16:case"end":return t.stop()}}),t,null,[[1,13]])}))),e.handleFormSubmit=function(t){e.props.history.push({pathname:e.props.location.pathname,search:"query=".concat(t)})},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=Object(c.a)(n.a.mark((function e(){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=m(this.props.location.search),!(r=t.query)){e.next=6;break}return this.setState({isSearching:!0}),e.next=5,this.fetchMovies(r);case 5:return e.abrupt("return");case 6:return e.next=8,this.fetchPopularMovies();case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(c.a)(n.a.mark((function e(t,r){var a,c,s,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=m(t.location.search),c=a.query,s=m(this.props.location.search),i=s.query,c===i||!i){e.next=7;break}return e.next=5,this.fetchMovies(i);case 5:return this.setState({isSearching:!0}),e.abrupt("return");case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,r=e.isSearching,a=e.error,n=e.movies;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d,{onSubmit:this.handleFormSubmit}),t?Object(g.jsx)(h.a,{}):r?Object(g.jsx)(j.a,{movies:n,pageTitle:x.a.RESULT}):Object(g.jsx)(j.a,{movies:n,pageTitle:x.a.POPULAR}),a&&Object(g.jsxs)("h1",{children:[" ",a]})]})}}]),r}(p.Component);t.default=y}}]);
//# sourceMappingURL=5.9440423d.chunk.js.map