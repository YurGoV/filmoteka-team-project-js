function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},a={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in l)return l[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return l[e]=r,n.call(r.exports,r,r.exports),r.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,n){a[e]=n},n.parcelRequired7c6=r),r("8IXMh");var t=r("fb9GJ");(i=r("ewTWP")).refs.btnQueue.addEventListener("click",(function(){i.refs.btnWathed.dataset.watch="",i.refs.btnQueue.dataset.queue="active";try{const n=JSON.parse(localStorage.getItem("queue"));if(!n||0===n.length)return i.refs.galleryLibrary.innerHTML=createMessage(),void i.refs.tuiContainer.classList.add("visually-hidden");{options.totalItems=n.length;let l=0,a=20;const r=e=>{l=e*options.itemsPerPage-20,a=e*options.itemsPerPage};i.refs.tuiContainer.classList.remove("visually-hidden"),murkupGallery(n.slice(l,a));new(e(t))(i.refs.tuiContainer,options).on("beforeMove",(e=>{const t=e.page;r(t),murkupGallery(n.slice(l,a))}))}}catch(e){console.log(e.message)}}));var i=r("ewTWP");e(r("amrNH")).template({1:function(e,n,l,a,r){var t,i=null!=n?n:e.nullContext||{},o=e.hooks.helperMissing,s="function",c=e.escapeExpression,d=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='library-item'>\n    <a\n      class='library-gallery__item'\n      href='#'\n      target='_blank'\n      rel='noopener noreferrer'\n    >\n      <div class='card'>\n\n        <img\n          src='"+c(typeof(t=null!=(t=d(l,"poster_path")||(null!=n?d(n,"poster_path"):n))?t:o)===s?t.call(i,{name:"poster_path",hash:{},data:r,loc:{start:{line:12,column:15},end:{line:12,column:30}}}):t)+"'\n          class='library-card__img'\n          alt='"+c(typeof(t=null!=(t=d(l,"title")||(null!=n?d(n,"title"):n))?t:o)===s?t.call(i,{name:"title",hash:{},data:r,loc:{start:{line:14,column:15},end:{line:14,column:24}}}):t)+"'\n          id='"+c(typeof(t=null!=(t=d(l,"id")||(null!=n?d(n,"id"):n))?t:o)===s?t.call(i,{name:"id",hash:{},data:r,loc:{start:{line:15,column:14},end:{line:15,column:20}}}):t)+"'\n        />\n        <div class='library-info'>\n          <h3 class='library-info__title'>"+c(typeof(t=null!=(t=d(l,"title")||(null!=n?d(n,"title"):n))?t:o)===s?t.call(i,{name:"title",hash:{},data:r,loc:{start:{line:18,column:42},end:{line:18,column:51}}}):t)+"</h3>\n          <div class='library-wrapper'>\n            <p class='library-info__genre'>"+c(typeof(t=null!=(t=d(l,"genre_ids")||(null!=n?d(n,"genre_ids"):n))?t:o)===s?t.call(i,{name:"genre_ids",hash:{},data:r,loc:{start:{line:20,column:43},end:{line:20,column:56}}}):t)+" | "+c(typeof(t=null!=(t=d(l,"release_date")||(null!=n?d(n,"release_date"):n))?t:o)===s?t.call(i,{name:"release_date",hash:{},data:r,loc:{start:{line:20,column:59},end:{line:20,column:75}}}):t)+"</p>\n            <p class='library-rating is-hidden'>"+c(typeof(t=null!=(t=d(l,"vote_average")||(null!=n?d(n,"vote_average"):n))?t:o)===s?t.call(i,{name:"vote_average",hash:{},data:r,loc:{start:{line:21,column:48},end:{line:21,column:64}}}):t)+"</p>\n          </div>\n        </div>\n      </div>\n    </a>\n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,l,a,r){var t;return null!=(t=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(l,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:1,column:0},end:{line:27,column:9}}}))?t:""},useData:!0});function o(){const e=JSON.parse(localStorage.getItem("Add-to-watched"));console.log(e);const n=e.map((e=>`<div class="library-wraper">\n    \n    <a\n      class='library-gallery__item'\n      href='#'\n      target='_blank'\n      rel='noopener noreferrer'\n    >\n      \n\n        <img\n          src='https://image.tmdb.org/t/p/w500${e.poster_path}'\n          class='library-card__img'\n          alt='${e.title}'\n          id='${e.id}'\n        />\n        <div class='library-info'>\n          <h3 class='library-info__title'>${e.title}</h3>\n          <div class='wrap-library'>\n            <p class='library-info__genre'>${e.genre_id} | ${e.release_date}</p>\n                      <span class ="film-rating">${e.vote_average}</span>\n            </div>\n        \n      </div>\n    </a>\n  \n  </div>`)).join();console.log(n),i.refs.galleryLibraryEl.innerHTML=n}function s(){const e=JSON.parse(localStorage.getItem("Add-to-queue"));console.log(e);const n=e.map((e=>`<div class="library-wraper">\n   \n    <a\n      class='library-gallery__item'\n      href='#'\n      target='_blank'\n      rel='noopener noreferrer'\n    >\n      \n\n        <img\n          src='https://image.tmdb.org/t/p/w500${e.poster_path}'\n          class='library-card__img'\n          alt='${e.title}'\n          id='${e.id}'\n        />\n        <div class='library-info'>\n          <h3 class='library-info__title'>${e.title}</h3>\n          <div class='wrap-library'>\n            <p class='library-info__genre'>${e.genre_id} | ${e.release_date}</p>\n         <span class ="film-rating">${e.vote_average}</span>\n          </div>\n       \n      </div>\n    </a>\n  \n  </div>`)).join();console.log(),i.refs.galleryLibraryEl.innerHTML=n}(i=r("ewTWP")).refs.btnQueue.addEventListener("click",o),o(),i.refs.btnWatched.addEventListener("click",s),s();
//# sourceMappingURL=library.10c1fd94.js.map
