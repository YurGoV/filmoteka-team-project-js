!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var i=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,i.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=i);var l=i("56dkj");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;l.findMovies.page=e,l.findMovies.query="",l.findMovies.queryType="popular";l.findMovies.find().then((function(n){console.log("searching by popularity, page #:",e),console.log(n)}))}!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";l.findMovies.queryType="on-query-per-page",l.findMovies.query=e,l.findMovies.page=n,l.findMovies.find().then((function(o){console.log("searching by queryString and page:",e,n),console.log(o)}))}("Kill",2),r(),r(2),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:414419;l.findMovies.query=e,l.findMovies.queryType="full-info",l.findMovies.find().then((function(n){console.log("searching full info by ID:",e),console.log(n)}))}(414419),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:414419;l.findMovies.query=e,l.findMovies.queryType="trailer-info",l.findMovies.find().then((function(n){console.log("searching trailer info by ID:",e),console.log(n),console.log("site:",n.results[0].site,"key:",n.results[0].key,"youtube link: https://youtu.be/".concat(n.results[0].key))}))}(414419)}();
//# sourceMappingURL=fetch_test.9d8922c3.js.map
