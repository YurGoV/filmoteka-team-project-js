!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var a=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,a.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){r[e]=n},e.parcelRequired7c6=a),a("8BR1R");var i=a("cFfKp");function l(e){i.refs.galleryLibraryEl.innerHTML="",i.refs.btnQueue.classList.remove("active-lbr"),i.refs.btnWatched.classList.add("active-lbr");var n=JSON.parse(localStorage.getItem("Add-to-watched"));if(n&&n.length){i.refs.noCard.classList.add("visually-hidden");var r=n.map((function(e){var n=e.genres.map((function(e){return e.name})).join(", "),r=e.vote_average.toFixed(1),a=e.release_date.slice(0,4);return console.log(n,r),console.log(a),"<div class=\"library-wraper\">\n            <a\n          class='library-gallery__item'\n          href='#'\n          target='_blank'\n          rel='noopener noreferrer'\n        >\n\n            <img\n              src='".concat(e.poster_path,"'\n              class='library-card__img'\n              alt='").concat(e.title,"'\n              id='").concat(e.id,"'\n            />\n            <div class='library-info'>\n              <h3 class='library-info__title'>").concat(e.title,"</h3>\n              <div class='wrap-library'>\n                <p class='library-info__genre'>").concat(n," | ").concat(a,'</p>\n                          <span class ="film-rating">').concat(r,"</span>\n                </div>\n\n          </div>\n        </a>\n\n      </div>")})).join(" ");i.refs.galleryLibraryEl.innerHTML=r}else i.refs.noCard.classList.remove("visually-hidden")}i.refs.btnQueue.addEventListener("click",(function(e){i.refs.galleryLibraryEl.innerHTML="",i.refs.btnWatched.classList.remove("active-lbr"),i.refs.btnQueue.classList.add("active-lbr");var n=JSON.parse(localStorage.getItem("Add-to-queue"));if(!n||!n.length)return void i.refs.noCard.classList.remove("visually-hidden");i.refs.noCard.classList.add("visually-hidden");var r=n.map((function(e){var n=e.genres.map((function(e){return e.name})).join(", "),r=e.vote_average.toFixed(1),a=e.release_date.slice(0,4);return console.log(n,r),console.log(a),"<div class=\"library-wraper\">\n            <a\n          class='library-gallery__item'\n          href='#'\n          target='_blank'\n          rel='noopener noreferrer'\n        >\n\n            <img\n              src='".concat(e.poster_path,"'\n              class='library-card__img'\n              alt='").concat(e.title,"'\n              id='").concat(e.id,"'\n            />\n            <div class='library-info'>\n              <h3 class='library-info__title'>").concat(e.title,"</h3>\n              <div class='wrap-library'>\n                <p class='library-info__genre'>").concat(n," | ").concat(a,'</p>\n                          <span class ="film-rating">').concat(r,"</span>\n                </div>\n\n          </div>\n        </a>\n\n      </div>")})).join(" ");i.refs.galleryLibraryEl.innerHTML=r})),i.refs.btnWatched.addEventListener("click",l),l(),a("j1Fxp"),a("lfkk0")}();
//# sourceMappingURL=library.4728e6b5.js.map