!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var i=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,i.call(r.exports,r,r.exports),r.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,n){o[e]=n},e.parcelRequired7c6=i);var r=i("56dkj");({querySearch:document.querySelector(".js-query-search")}).querySearch.addEventListener("submit",(function(){event.preventDefault(),r.findMovies.queryType="search-on-query";var e=event.currentTarget.elements.searchQuery.value;r.findMovies.query=e,r.findMovies.page=1;r.findMovies.find().then((function(n){console.log("searching by query:",e),console.log(n)}))}));function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;r.findMovies.page=e,r.findMovies.query="",r.findMovies.queryType="popular";r.findMovies.find().then((function(n){console.log("searching by popularity, page #:",e),console.log(n)}))}!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";r.findMovies.queryType="on-query-per-page",r.findMovies.query=e,r.findMovies.page=n,r.findMovies.find().then((function(o){console.log("searching by queryString and page:",e,n),console.log(o)}))}("Kill",2),t(),t(2),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:414419;r.findMovies.query=e,r.findMovies.queryType="full-info",r.findMovies.find().then((function(n){console.log("searching full info by ID:",e),console.log(n)}))}(414419),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:414419;r.findMovies.query=e,r.findMovies.queryType="trailer-info",r.findMovies.find().then((function(n){console.log("searching trailer info by ID:",e),console.log(n),console.log("site:",n.results[0].site,"key:",n.results[0].key,"youtube link: https://youtu.be/".concat(n.results[0].key))}))}(414419)}();
//# sourceMappingURL=fetch_test.6ce76466.js.map
