function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,p=Math.min,v=function(){return l.Date.now()};function y(t,e,n){var i,o,r,u,f,a,c=0,l=!1,d=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=i,r=o;return i=o=void 0,c=e,u=t.apply(r,n)}function j(t){return c=t,f=setTimeout(T,e),l?b(t):u}function w(t){var n=t-a;return void 0===a||n>=e||n<0||d&&t-c>=r}function T(){var t=v();if(w(t))return h(t);f=setTimeout(T,function(t){var n=e-(t-a);return d?p(n,r-(t-c)):n}(t))}function h(t){return f=void 0,y&&i?b(t):(i=o=void 0,u)}function x(){var t=v(),n=w(t);if(i=arguments,o=this,a=t,n){if(void 0===f)return j(a);if(d)return f=setTimeout(T,e),b(a)}return void 0===f&&(f=setTimeout(T,e)),u}return e=g(e)||0,m(n)&&(l=!!n.leading,r=(d="maxWait"in n)?s(g(n.maxWait)||0,e):r,y="trailing"in n?!!n.trailing:y),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=o=f=void 0},x.flush=function(){return void 0===f?u:h(v())},x}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=r.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(t,e,{leading:i,maxWait:e,trailing:o})};const b=document.querySelector("iframe"),j=new Vimeo.Player(b);j.on("timeupdate",t(e)((function(t){console.log(t.percent),localStorage.setItem("videoplayer-current-time",t.seconds.toString())}),1e3)),function(){const t=localStorage.getItem("videoplayer-current-time");if(!t)return;j.setCurrentTime(t)}();
//# sourceMappingURL=02-video.1e4f5b2b.js.map
