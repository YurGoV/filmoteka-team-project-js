!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},a={},t=n.parcelRequired7c6;null==t&&((t=function(e){if(e in l)return l[e].exports;if(e in a){var n=a[e];delete a[e];var t={id:e,exports:{}};return l[e]=t,n.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){a[e]=n},n.parcelRequired7c6=t),t("8BR1R");var r=t("hKHmD"),i=t("cFfKp"),o=t("l5bVx"),d=e(t("WMajR")).template({1:function(n,l,a,t,r){var i,d=null!=l?l:n.nullContext||{},s=n.hooks.helperMissing,u="function",c=n.escapeExpression,f=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <div class='library-wraper'>\n    <a\n      class='library-gallery__item'\n      href='#'\n      target='_blank'\n      rel='noopener noreferrer'\n    >\n\n      <img\n        src='"+c((void 0===(i=null!=(i=f(a,"poster_path")||(null!=l?f(l,"poster_path"):l))?i:s)?"undefined":e(o)(i))===u?i.call(d,{name:"poster_path",hash:{},data:r,loc:{start:{line:11,column:13},end:{line:11,column:28}}}):i)+"'\n        class='library-card__img'\n        alt='"+c((void 0===(i=null!=(i=f(a,"title")||(null!=l?f(l,"title"):l))?i:s)?"undefined":e(o)(i))===u?i.call(d,{name:"title",hash:{},data:r,loc:{start:{line:13,column:13},end:{line:13,column:22}}}):i)+c((void 0===(i=null!=(i=f(a,"name")||(null!=l?f(l,"name"):l))?i:s)?"undefined":e(o)(i))===u?i.call(d,{name:"name",hash:{},data:r,loc:{start:{line:13,column:22},end:{line:13,column:30}}}):i)+"'\n        id='"+c((void 0===(i=null!=(i=f(a,"id")||(null!=l?f(l,"id"):l))?i:s)?"undefined":e(o)(i))===u?i.call(d,{name:"id",hash:{},data:r,loc:{start:{line:14,column:12},end:{line:14,column:18}}}):i)+"'\n      />\n      <div class='library-info'>\n        <h3 class='library-info__title'>"+c((void 0===(i=null!=(i=f(a,"title")||(null!=l?f(l,"title"):l))?i:s)?"undefined":e(o)(i))===u?i.call(d,{name:"title",hash:{},data:r,loc:{start:{line:17,column:40},end:{line:17,column:49}}}):i)+c((void 0===(i=null!=(i=f(a,"name")||(null!=l?f(l,"name"):l))?i:s)?"undefined":e(o)(i))===u?i.call(d,{name:"name",hash:{},data:r,loc:{start:{line:17,column:49},end:{line:17,column:57}}}):i)+"</h3>\n        <div class='wrap-library'>\n          <p class='library-info__genre'>"+c((void 0===(i=null!=(i=f(a,"genreFilmStr")||(null!=l?f(l,"genreFilmStr"):l))?i:s)?"undefined":e(o)(i))===u?i.call(d,{name:"genreFilmStr",hash:{},data:r,loc:{start:{line:19,column:41},end:{line:19,column:57}}}):i)+"|\n            "+c((void 0===(i=null!=(i=f(a,"year")||(null!=l?f(l,"year"):l))?i:s)?"undefined":e(o)(i))===u?i.call(d,{name:"year",hash:{},data:r,loc:{start:{line:20,column:12},end:{line:20,column:20}}}):i)+"</p>\n          <span class='film-rating'>"+c((void 0===(i=null!=(i=f(a,"genreVoit")||(null!=l?f(l,"genreVoit"):l))?i:s)?"undefined":e(o)(i))===u?i.call(d,{name:"genreVoit",hash:{},data:r,loc:{start:{line:21,column:36},end:{line:21,column:49}}}):i)+"</span>\n        </div>\n\n      </div>\n    </a>\n\n  </div>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,l,a,t){var r;return null!=(r=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(l,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,t,0),inverse:e.noop,data:t,loc:{start:{line:1,column:0},end:{line:28,column:9}}}))?r:""},useData:!0});function s(n){var l=n.map((function(n){var l,a=n.genres.map((function(e){return e.name})).join(", "),t=n.vote_average.toFixed(1),i=n.release_date.slice(0,4);return l={poster_path:n.poster_path,title:n.title,id:n.id},e(r)(l,"title",n.title),e(r)(l,"name",n.name),e(r)(l,"genreVoit",t),e(r)(l,"original_title",n.original_title),e(r)(l,"genreFilmStr",a),e(r)(l,"year",i),l}));i.refs.galleryLibraryEl.innerHTML=d(l)}function s(n){var l=n.map((function(n){var l,a=n.genres.map((function(e){return e.name})).join(", "),t=n.vote_average.toFixed(1),i=n.release_date.slice(0,4);return l={poster_path:n.poster_path,title:n.title,id:n.id},e(r)(l,"title",n.title),e(r)(l,"name",n.name),e(r)(l,"genreVoit",t),e(r)(l,"original_title",n.original_title),e(r)(l,"genreFilmStr",a),e(r)(l,"year",i),l}));i.refs.galleryLibraryEl.innerHTML=d(l)}i.refs.btnQueue.addEventListener("click",(function(e){i.refs.galleryLibraryEl.innerHTML="",i.refs.btnWatched.classList.remove("active-lbr"),i.refs.btnQueue.classList.add("active-lbr");var n=JSON.parse(localStorage.getItem("Add-to-queue"));if(!n||!n.length)return void i.refs.noCard.classList.remove("visually-hidden");i.refs.noCard.classList.add("visually-hidden"),s(n)})),i.refs.btnWatched.addEventListener("click",(function(e){i.refs.galleryLibraryEl.innerHTML="",i.refs.btnQueue.classList.remove("active-lbr"),i.refs.btnWatched.classList.add("active-lbr");var n=JSON.parse(localStorage.getItem("Add-to-watched"));if(!n||!n.length)return void i.refs.noCard.classList.remove("visually-hidden");i.refs.noCard.classList.add("visually-hidden"),s(n),s(n)})),t("j1Fxp"),t("lfkk0")}();
//# sourceMappingURL=library.8f241d58.js.map