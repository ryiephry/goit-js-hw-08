function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var o,r,i,f,a,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,a=setTimeout(O,t),l?y(e):f}function w(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function O(){var e=v();if(w(e))return h(e);a=setTimeout(O,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function h(e){return a=void 0,p&&o?y(e):(o=r=void 0,f)}function E(){var e=v(),n=w(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return j(u);if(s)return a=setTimeout(O,t),y(u)}return void 0===a&&(a=setTimeout(O,t)),f}return t=g(t)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(g(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),E.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},E.flush=function(){return void 0===a?f:h(v())},E}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");!function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);for(const[e,n]of Object.entries(t))y.elements[e]&&(y.elements[e].value=n)}}(),y.addEventListener("input",e(t)((function(){const e=new FormData(y),t=JSON.stringify(Object.fromEntries(e.entries()));localStorage.setItem("feedback-form-state",t)}),1e3)),y.addEventListener("submit",(function(e){e.preventDefault(),console.log(localStorage.getItem("feedback-form-state")),""!=e.srcElement[0].value&""!=e.srcElement[1].value&&(y.reset(),localStorage.clear("feedback-form-state"))}));const j=new j;console.log(j);
//# sourceMappingURL=03-feedback.7c0b3710.js.map