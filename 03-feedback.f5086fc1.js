!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=a||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,b=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var i,r,u,f,c,a,l=0,d=!1,s=!1,y=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=i,o=r;return i=r=void 0,l=t,f=e.apply(o,n)}function h(e){return l=e,c=setTimeout(T,t),d?g(e):f}function O(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-l>=u}function T(){var e=p();if(O(e))return w(e);c=setTimeout(T,function(e){var n=t-(e-a);return s?b(n,u-(e-l)):n}(e))}function w(e){return c=void 0,y&&i?g(e):(i=r=void 0,f)}function x(){var e=p(),n=O(e);if(i=arguments,r=this,a=e,n){if(void 0===c)return h(a);if(s)return c=setTimeout(T,t),g(a)}return void 0===c&&(c=setTimeout(T,t)),f}return t=j(t)||0,m(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(j(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),x.cancel=function(){void 0!==c&&clearTimeout(c),l=0,i=a=r=c=void 0},x.flush=function(){return void 0===c?f:w(p())},x}function m(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(m(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=m(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var a=u.test(e);return a||f.test(e)?c(e.slice(2),a?2:8):r.test(e)?NaN:+e}form=document.querySelector(".feedback-form")}();
//# sourceMappingURL=03-feedback.f5086fc1.js.map
