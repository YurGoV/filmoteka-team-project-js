!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},t=n.parcelRequired7c6;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in a){var n=a[e];delete a[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){a[e]=n},n.parcelRequired7c6=t),t("8BR1R");var i,l=t("1VFfL");function o(){var e=JSON.parse(localStorage.getItem("Add-to-queue"));console.log(e);var n=e.map((function(e){return"<div class=\"library-wraper\">\n        <a\n      class='library-gallery__item'\n      href='#'\n      target='_blank'\n      rel='noopener noreferrer'\n    >\n      \n        <img\n          src='https://image.tmdb.org/t/p/w500".concat(e.poster_path,"'\n          class='library-card__img'\n          alt='").concat(e.title,"'\n          id='").concat(e.id,"'\n        />\n        <div class='library-info'>\n          <h3 class='library-info__title'>").concat(e.title,"</h3>\n          <div class='wrap-library'>\n            <p class='library-info__genre'>").concat(e.genre_id," | ").concat(e.release_date,'</p>\n                      <span class ="film-rating">').concat(e.vote_average,"</span>\n            </div>\n        \n      </div>\n    </a>\n  \n  </div>")})).join(" ");i.refs.galleryLibraryEl.innerHTML=n}function s(){var e=JSON.parse(localStorage.getItem("Add-to-watched")).map((function(e){return"<div class=\"library-wraper\">\n   \n    <a\n      class='library-gallery__item'\n      href='#'\n      target='_blank'\n      rel='noopener noreferrer'\n    >\n      \n\n        <img\n          src='https://image.tmdb.org/t/p/w500".concat(e.poster_path,"'\n          class='library-card__img'\n          alt='").concat(e.title,"'\n          id='").concat(e.id,"'\n        />\n        <div class='library-info'>\n          <h3 class='library-info__title'>").concat(e.title,"</h3>\n          <div class='wrap-library'>\n            <p class='library-info__genre'>").concat(e.genre_id," | ").concat(e.release_date,'</p>\n         <span class ="film-rating">').concat(e.vote_average,"</span>\n          </div></div>\n    </a>\n  \n  </div>")})).join(" ");i.refs.galleryLibraryEl.innerHTML=e}(i=t("cFfKp")).refs.btnQueue.addEventListener("click",(function(){i.refs.btnWathed.dataset.watch="",i.refs.btnQueue.dataset.queue="active";try{var n=JSON.parse(localStorage.getItem("queue"));if(!n||0===n.length)return i.refs.galleryLibrary.innerHTML=createMessage(),void i.refs.tuiContainer.classList.add("visually-hidden");options.totalItems=n.length;var r=0,a=20;i.refs.tuiContainer.classList.remove("visually-hidden"),murkupGallery(n.slice(r,a)),new(e(l))(i.refs.tuiContainer,options).on("beforeMove",(function(e){!function(e){r=e*options.itemsPerPage-20,a=e*options.itemsPerPage}(e.page),murkupGallery(n.slice(r,a))}))}catch(e){console.log(e.message)}})),(i=t("cFfKp")).refs.btnQueue.addEventListener("click",o),o(),i.refs.btnWatched.addEventListener("click",s),s()}();
//# sourceMappingURL=library.24203acb.js.map