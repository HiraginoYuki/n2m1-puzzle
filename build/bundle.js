!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/home/yuki/Documents/15-puzzle.app/public",n(n.s=18)}([function(e,t){e.exports=React},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(u=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(u)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(s," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var u,a,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var u=this[o][0];null!=u&&(i[u]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);r&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){var r=n(4),i=n(14);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FifteenPuzzle=void 0;var r=n(9);Object.defineProperty(t,"FifteenPuzzle",{enumerable:!0,get:function(){return r.FifteenPuzzle}})},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),u=[];function a(e){for(var t=-1,n=0;n<u.length;n++)if(u[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],c=n[s]||0,f="".concat(s," ").concat(c);n[s]=c+1;var l=a(f),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==l?(u[l].references++,u[l].updater(p)):u.push({identifier:f,updater:m(p,t),references:1}),r.push(f)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var u=o(e.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(t)}return t}var f,l=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function p(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var o=document.createTextNode(i),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(o,u[t]):e.appendChild(o)}}function h(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,d=0;function m(e,t){var n,r,i;if(t.singleton){var o=d++;n=v||(v=c(t)),r=p.bind(null,n,o,!1),i=p.bind(null,n,o,!0)}else n=c(t),r=h.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);u[i].references--}for(var o=s(e,t),c=0;c<n.length;c++){var f=a(n[c]);0===u[f].references&&(u[f].updater(),u.splice(f,1))}n=o}}}},function(e,t){e.exports=ReactDOM},function(e,t,n){var r=n(4),i=n(13);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";var r,i="object"==typeof Reflect?Reflect:null,o=i&&"function"==typeof i.apply?i.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var u=Number.isNaN||function(e){return e!=e};function a(){a.init.call(this)}e.exports=a,e.exports.once=function(e,t){return new Promise((function(n,r){function i(n){e.removeListener(t,o),r(n)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",i),n([].slice.call(arguments))}y(e,t,o,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&y(e,"error",t,n)}(e,i,{once:!0})}))},a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var s=10;function c(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function f(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function l(e,t,n,r){var i,o,u,a;if(c(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),u=o[t]),void 0===u)u=o[t]=n,++e._eventsCount;else if("function"==typeof u?u=o[t]=r?[n,u]:[u,n]:r?u.unshift(n):u.push(n),(i=f(e))>0&&u.length>i&&!u.warned){u.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+u.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=e,s.type=t,s.count=u.length,a=s,console&&console.warn&&console.warn(a)}return e}function p(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function h(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=p.bind(r);return i.listener=n,r.wrapFn=i,i}function v(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):m(i,i.length)}function d(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function m(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function y(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(o){r.once&&e.removeEventListener(t,i),n(o)}))}}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||u(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||u(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return f(this)},a.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var u;if(t.length>0&&(u=t[0]),u instanceof Error)throw u;var a=new Error("Unhandled error."+(u?" ("+u.message+")":""));throw a.context=u,a}var s=i[e];if(void 0===s)return!1;if("function"==typeof s)o(s,this,t);else{var c=s.length,f=m(s,c);for(n=0;n<c;++n)o(f[n],this,t)}return!0},a.prototype.addListener=function(e,t){return l(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return l(this,e,t,!0)},a.prototype.once=function(e,t){return c(t),this.on(e,h(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){return c(t),this.prependListener(e,h(this,e,t)),this},a.prototype.removeListener=function(e,t){var n,r,i,o,u;if(c(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){u=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,u||t)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},a.prototype.listeners=function(e){return v(this,e,!0)},a.prototype.rawListeners=function(e){return v(this,e,!1)},a.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},a.prototype.listenerCount=d,a.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},function(e,t,n){var r=n(4),i=n(15);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FifteenPuzzle=void 0;var r=n(10),i=n(11),o=Math.floor,u=Math.abs,a=function(){function e(e){this.columns=e}return e.prototype.convertPointToIndex=function(e){return e[0]+e[1]*this.columns},e.prototype.convertIndexToPoint=function(e){return[e%this.columns,o(e/this.columns)]},e}(),s=function(){function e(e,t){if(void 0===e&&(e=4),void 0===t&&(t=r.range(1,Array.isArray(e)?e[0]*e[1]:Math.pow(e,2)).concat(0)),this.numbers=t,Array.isArray(e)?(this.columns=e[0],this.rows=e[1]):this.columns=this.rows=e,this.pointUtil=new a(this.columns),!this.isValid())throw new RangeError("Invalid numbers")}return e.convertArgs=function(e){var t="string"==typeof e[0],n=t?e[0]:""+ +new Date,r=t?"number"==typeof e[1]?e[1]:4:"number"==typeof e[0]?e[0]:4;return{seed:n,columns:r,rows:t?"number"==typeof e[2]?e[2]:r:"number"==typeof e[1]?e[1]:r}},e.generateRandom=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=this.convertArgs(e),o=n.seed,u=n.columns,a=n.rows,s=i.create(o),c=function(){return s.random()},f=function(e){return r.chooseRandom(e,c)},l=function(e){return r.chooseRandomIndex(e,c)},p=a*u,h=[],v=r.range(1,p),d=0,m=r.range(p-3);d<m.length;d++){m[d];h.push(v.splice(l(v),1)[0])}var y=new this([u,a],h.concat(v,0));y.isSolvable()||(y=new this([u,a],h.concat(v.map(r.flip),0)));var g=f([!0,!1]);return y.tap(g?[f(r.range(u)),a-1]:[u-1,f(r.range(a))]),y.tap(g?[y.getEmptyPoint()[0],f(r.range(a))]:[f(r.range(u)),y.getEmptyPoint()[1]]),s.done(),y},Object.defineProperty(e.prototype,"length",{get:function(){return this.numbers.length},enumerable:!1,configurable:!0}),e.prototype.clone=function(){return new this.constructor([this.rows,this.columns],this.numbers.slice())},e.prototype.equals=function(e,t){return e[0]===t[0]&&e[1]===t[1]},e.prototype.setValueOfPoint=function(e,t){return this.numbers[this.pointUtil.convertPointToIndex(e)]=t,this},e.prototype.getValueFromPoint=function(e){return this.numbers[this.pointUtil.convertPointToIndex(e)]},e.prototype.getPointFromValue=function(e){return this.pointUtil.convertIndexToPoint(this.numbers.findIndex((function(t){return t===e})))},e.prototype.getEmptyPoint=function(){return this.getPointFromValue(0)},e.prototype.isValid=function(){var e=this;return this.numbers.length===this.columns*this.rows&&r.range(this.numbers.length).every((function(t){return e.numbers.includes(t)}))},e.prototype.isSolvable=function(){if(!this.isValid())return!1;var e=this.clone();return e.equals(e.getPointFromValue(0),[e.columns,e.rows])||(e.tap([e.columns-1,e.getPointFromValue(0)[1]]),e.tap([e.columns-1,e.rows-1])),r.range(e.columns*e.rows-1).reduce((function(t,n){var r=e.getPointFromValue(n+1);return n!==e.pointUtil.convertPointToIndex(r)?(e.swap(e.pointUtil.convertIndexToPoint(n),r),t+1):t}))%2==0},e.prototype.isSolved=function(){var e=this;return this.isValid()&&r.range(1,this.length).concat(0).every((function(t,n){return e.getValueFromPoint(e.pointUtil.convertIndexToPoint(n))==t}))},e.prototype.swap=function(e,t){var n=this.getValueFromPoint(e),r=this.getValueFromPoint(t);return this.setValueOfPoint(e,r),this.setValueOfPoint(t,n),!0},e.prototype.tap=function(e){var t=this,n=this.getEmptyPoint();if(this.equals(e,n))return!1;if(e[0]!==n[0]&&e[1]!==n[1])return!1;var i=e[0]===n[0],o=+i,a=n[o]-e[o];return r.range(1,u(a)+1).map((function(e){return a>0?e:-e})).forEach((function(r){return t.swap(t.getEmptyPoint(),i?[e[0],n[1]-r]:[n[0]-r,e[1]])})),!0},e}();t.FifteenPuzzle=s},function(e,t,n){"use strict";var r=this&&this.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.range=t.flip=t.chooseRandom=t.chooseRandomIndex=void 0;t.chooseRandomIndex=function(e,t){return void 0===t&&(t=function(){return Math.random()}),Math.floor(t()*e.length)};t.chooseRandom=function(e,n){return void 0===n&&(n=function(){return Math.random()}),e[t.chooseRandomIndex(e,n)]};t.flip=function(e,t,n){return n[n.length-1-t]},t.range=function e(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];switch(t.length){case 1:return e(0,t[0],1);case 2:return e(t[0],t[1],1);default:var i=t[0],o=t[1],u=t[2];return r([],Array(Math.ceil((o-i)/u))).map((function(e,t){return i+t*u}))}}},function(e,t,n){"use strict";var r=n(12),i=function(){var e=4022871197;return function(t){if(t){t=t.toString();for(var n=0;n<t.length;n++){var r=.02519603282416938*(e+=t.charCodeAt(n));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e)}return 2.3283064365386963e-10*(e>>>0)}e=4022871197}},o=function(e){return function(){var t,n,o=48,u=1,a=o,s=new Array(o),c=0,f=new i;for(t=0;t<o;t++)s[t]=f(Math.random());var l=function(){++a>=o&&(a=0);var e=1768863*s[a]+2.3283064365386963e-10*u;return s[a]=e-(u=0|e)},p=function(e){return Math.floor(e*(l()+11102230246251565e-32*(2097152*l()|0)))};p.string=function(e){var t,n="";for(t=0;t<e;t++)n+=String.fromCharCode(33+p(94));return n};var h=function(){var e=Array.prototype.slice.call(arguments);for(t=0;t<e.length;t++)for(n=0;n<o;n++)s[n]-=f(e[t]),s[n]<0&&(s[n]+=1)};return p.cleanString=function(e){return e=(e=(e=e.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[\x00-\x1F]/gi,"")).replace(/\n /,"\n")},p.hashString=function(e){for(e=p.cleanString(e),f(e),t=0;t<e.length;t++)for(c=e.charCodeAt(t),n=0;n<o;n++)s[n]-=f(c),s[n]<0&&(s[n]+=1)},p.seed=function(e){null==e&&(e=Math.random()),"string"!=typeof e&&(e=r(e,(function(e,t){return"function"==typeof t?t.toString():t}))),p.initState(),p.hashString(e)},p.addEntropy=function(){var e=[];for(t=0;t<arguments.length;t++)e.push(arguments[t]);h(c+++(new Date).getTime()+e.join("")+Math.random())},p.initState=function(){for(f(),t=0;t<o;t++)s[t]=f(" ");u=1,a=o},p.done=function(){f=null},void 0!==e&&p.seed(e),p.range=function(e){return p(e)},p.random=function(){return p(Number.MAX_VALUE-1)/Number.MAX_VALUE},p.floatBetween=function(e,t){return p.random()*(t-e)+e},p.intBetween=function(e,t){return Math.floor(p.random()*(t-e+1))+e},p}()};o.create=function(e){return new o(e)},e.exports=o},function(e,t){function n(e,t){var n=[],r=[];return null==t&&(t=function(e,t){return n[0]===t?"[Circular ~]":"[Circular ~."+r.slice(0,n.indexOf(t)).join(".")+"]"}),function(i,o){if(n.length>0){var u=n.indexOf(this);~u?n.splice(u+1):n.push(this),~u?r.splice(u,1/0,i):r.push(i),~n.indexOf(o)&&(o=t.call(this,i,o))}else n.push(o);return null==e?o:e.call(this,i,o)}}(e.exports=function(e,t,r,i){return JSON.stringify(e,n(t,i),r)}).getSerialize=n},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r)()(!1);i.push([e.i,".flexCenteringContainer__2IhkERfb{display:flex;width:100%;height:100%;justify-content:center;align-content:center}.flexCenteringContainer__2IhkERfb>*{position:relative;margin:auto}",""]),i.locals={flexCenteringContainer:"flexCenteringContainer__2IhkERfb"},t.default=i},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r)()(!1);i.push([e.i,".fifteenPuzzleRenderer__qLinV4ur{user-select:none;-webkit-user-select:none;width:calc(var(--piece-size) * var(--columns));height:calc(var(--piece-size) * var(--rows));--piece-size: 80px;--margin: 0.05}.fifteenPuzzleRenderer__qLinV4ur>.piece__3-JQfuFB{display:flex;position:absolute;width:calc(var(--piece-size) * (1 - var(--margin)));height:calc(var(--piece-size) * (1 - var(--margin)));margin:calc(var(--piece-size) * var(--margin) / 2);transform:translate(calc(var(--piece-size) * var(--x)), calc(var(--piece-size) * var(--y)));border-radius:calc(var(--piece-size) / 16);background-color:#111;font-weight:900;filter:invert(0%);transition:.1s transform var(--easeOutCirc),.2s filter var(--easeOutCirc);z-index:0}.fifteenPuzzleRenderer__qLinV4ur>.piece__3-JQfuFB.hidden__32VDde5O{opacity:0}.fifteenPuzzleRenderer__qLinV4ur>.piece__3-JQfuFB.correct__2xpy-Yms{filter:invert(100%)}.fifteenPuzzleRenderer__qLinV4ur>.piece__3-JQfuFB>.content__3VYu6j77{margin:auto;font-size:calc(var(--piece-size) * 9 / 20)}.fifteenPuzzleRenderer__qLinV4ur>.tapListeners__238GBMIl{display:grid;width:100%;height:100%;grid-template-columns:repeat(var(--columns), 1fr)}.fifteenPuzzleRenderer__qLinV4ur>.tapListeners__238GBMIl>.listener__2l_3IN2k{z-index:1}",""]),i.locals={fifteenPuzzleRenderer:"fifteenPuzzleRenderer__qLinV4ur",piece:"piece__3-JQfuFB",hidden:"hidden__32VDde5O",correct:"correct__2xpy-Yms",content:"content__3VYu6j77",tapListeners:"tapListeners__238GBMIl",listener:"listener__2l_3IN2k"},t.default=i},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r)()(!1);i.push([e.i,".credit__1qk2Sy5Z{user-select:none;-webkit-user-select:none;position:fixed;left:0;bottom:0;margin:8px 10px;font-size:14px;color:#777}.credit__1qk2Sy5Z>a{transition:.1s color cubic-bezier(0, 0.55, 0.45, 1);color:inherit}.credit__1qk2Sy5Z>a:hover{color:#888}",""]),i.locals={credit:"credit__1qk2Sy5Z"},t.default=i},function(e,t,n){var r=n(4),i=n(17);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r)()(!1);i.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap);"]),i.push([e.i,'body{margin:0;width:100vw;height:100vh;overflow:hidden;background-color:#222;color:#ccc;font-family:"Roboto",sans-serif}body>#app{width:100%;height:100%}:root{--easeOutCirc: cubic-bezier(0, 0.55, 0.45, 1)}',""]),t.default=i},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(5),u=n.n(o),a=n(3),s=n(6),c=n.n(s),f=function(){return(f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function l(e){return i.a.createElement("div",f({},e,{className:v(c.a.flexCenteringContainer,e.className)})," ",e.children," ")}function p(e){Object.entries(e).forEach((function(e){var t=e[0],n=e[1];window.hasOwnProperty(t)&&delete window[t],Object.defineProperty(window,t,{value:n,configurable:!0})}))}document.addEventListener("touchmove",(function(e){e.target.classList.contains("allow-scroll")?e.stopPropagation():e.preventDefault()}),{passive:!1});var h=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());function v(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter((function(e){return"string"==typeof e})).map((function(e){return e.trim()})).filter((function(e){return e.length})).join(" ")}var d=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],u=0,a=o.length;u<a;u++,i++)r[i]=o[u];return r};function m(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];switch(e.length){case 1:return m(0,e[0],1);case 2:return m(e[0],e[1],1);default:var n=e[0],r=e[1],i=e[2];return d(Array(Math.ceil((r-n)/i))).map((function(e,t){return n+t*i}))}}var y=function(){function e(e){this.value=e,this.cases=[]}return e.prototype.case=function(e,t){return this.cases.push({value:e,fn:"function"==typeof t?t:function(){return t}}),this},e.prototype.run=function(){var e,t=this;return null===(e=this.cases.find((function(e){return e.value===t.value})))||void 0===e?void 0:e.fn(this.value)},e}();function g(){var e=Object(r.useState)(0)[1];return Object(r.useCallback)((function(){return e((function(e){return e+1}))}),[])}var b,_=function(){var e=this;this.validator=this,this.result=!0,this.expect=function(t){return new w(e,t)}},w=function(){function e(e,t){this.validator=e,this.value=t}return e.prototype.toSatisfy=function(e){var t=this;return this.validator.result&&(this.validator.result=e(this.value)),{and:this,then:Object.assign((function(e){t.validator.result&&e()}),{expect:this.validator.expect})}},e.prototype.toBe=function(e){var t=this;return this.toSatisfy((function(){return t.value===e}))},e.prototype.toBeGreaterThan=function(e){var t=this;return this.toSatisfy((function(){return t.value>e}))},e.prototype.toBeSmallerThan=function(e){var t=this;return this.toSatisfy((function(){return t.value<e}))},e.prototype.toBeTrue=function(){var e=this;return this.toSatisfy((function(){return!0===e.value}))},e.prototype.toBeFalse=function(){var e=this;return this.toSatisfy((function(){return!1===e.value}))},e.prototype.toBeAnArray=function(){return this.toSatisfy(Array.isArray)},e.prototype.toBeAnInteger=function(){return this.toSatisfy(Number.isInteger)},e.prototype.toBeANumber=function(){var e=this;return this.toSatisfy((function(){return"number"==typeof e.value}))},e.prototype.toBeAString=function(){var e=this;return this.toSatisfy((function(){return"string"==typeof e.value}))},e.prototype.toBeNullOrUndefined=function(){var e=this;return this.toSatisfy((function(){return null===e.value||void 0===e.value}))},e}(),O=n(2),S=n.n(O),x=(b=function(e,t){return(b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}b(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),P=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],u=0,a=o.length;u<a;u++,i++)r[i]=o[u];return r},j=function(e){function t(t,n,r,i,o){void 0===o&&(o=[]);var u=e.call(this,[n,r],a.FifteenPuzzle.generateRandom(t,n,r).numbers)||this;return u.seed=t,u.timeGenerated=i,u.taps=o,u.taps.forEach((function(e){return u.puzzleInstance.tap(e.coord)})),u}return x(t,e),Object.defineProperty(t.prototype,"size",{get:function(){return[this.columns,this.rows]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"timeStarted",{get:function(){return this.timeGenerated+this.taps[0].time},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"timeSolved",{get:function(){return this.timeGenerated+(this.isSolved()&&this.taps[this.taps.length-1])},enumerable:!1,configurable:!0}),t.prototype.tap=function(t){var n=e.prototype.tap.call(this,t);return n&&this.taps.push({time:+new Date-this.timeGenerated,coord:t}),n},t.prototype._BRANCHLESS_tap=function(t){var n;return this.taps.length!==((n=this.taps).push.apply(n,[{time:+new Date-this.timeGenerated,coord:t}].slice(+e.prototype.tap.call(this,t))),this.taps.length)},t.generateRandom=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=e.convertArgs.call(this,t),i=r.seed,o=r.columns,u=r.rows;return new this(i,o,u,+new Date,[])},t.fromMinimalData=function(e){if(!this.validateMinimalData(e))return null;var n=a.FifteenPuzzle.convertArgs(e[0]),r=n.seed,i=n.columns,o=n.rows,u=e.slice(2).map((function(e){return{time:e[0],coord:e[1]}}));return new t(r,i,o,e[1][0],u)},t.toMinimalData=function(e){return P([P(e.seed===""+e.timeGenerated?[]:[e.seed],4===e.columns?[]:[e.columns],e.rows===e.columns?[]:[e.rows]),P([e.timeGenerated],null===e.timeStarted?[]:[e.timeStarted],null===e.timeSolved?[]:[e.timeSolved])],e.taps.map((function(e){return[e.time,e.coord]})))},t.validateMinimalData=function(e){var t=new _,n=t.validator,r=t.expect;return r(e).toBeAnArray().and.toSatisfy((function(e){return e.every(Array.isArray)})).then((function(){var t=e[0],i=e[1],o=e.slice(2),u="string"==typeof t[0],a=4,s=4;r(t).toSatisfy((function(e){return(t=e.length-u,new y(t)).case(0,!0).case(1,(function(){return Number.isInteger(a=s=e[+u])})).case(2,(function(){var t;return(t=e.slice(+u),a=t[0],s=t[1],t).every(Number.isInteger)})).run();var t})).and.toSatisfy((function(e){return e.every((function(e,t){return u&&0===t||"number"==typeof e}))})),r(i).toSatisfy((function(e){return[1,2,3].includes(e.length)})).and.toSatisfy((function(e){return e.every(Number.isInteger)})),o.forEach((function(e){return n.expect(e[0]).toBeAnInteger().then.expect(e[1]).toBeAnArray().and.toSatisfy((function(e){return e.every(Number.isInteger)&&0<=e[0]&&e[0]<=a&&0<=e[1]&&e[1]<=s}))}))})),n.result},t}(a.FifteenPuzzle),z=n(7),L=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),E=function(e){function t(){var t=e.call(this)||this;return t.isSolved=!1,t.isSolving=!1,t.games=[],t.on("solve",(function(){return t.isSolved=!0})),t}return L(t,e),Object.defineProperty(t.prototype,"current",{get:function(){return this.games[this.games.length-1]},enumerable:!1,configurable:!0}),t.prototype.new=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.games.push(j.generateRandom.apply(j,e)),this.isSolved=this.current.isSolved(),this.isSolving=!1,this.emit("update"),this},t.prototype.tap=function(e){if(this.isSolved)return!1;var t=this.current.tap(e);return(this.isSolved=this.current.isSolved())&&this.emit("solve"),this.isSolving=!this.isSolved,t&&this.emit("update"),t},t.prototype.getNumbers=function(){var e=this.current;return e?m(e.columns*e.rows).map((function(t){var n=e.getPointFromValue(t);return{coord:n,number:t,isCorrect:t==e.pointUtil.convertPointToIndex(n)+1}})):[]},t}(z.EventEmitter);var M=function(){return(M=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},C=h?"onTouchStart":"onMouseDown";function A(){var e,t,n,o,u=Object(r.useRef)({4:[0,0],5:[1,0],6:[2,0],7:[3,0],r:[0,1],t:[1,1],y:[2,1],u:[3,1],f:[0,2],g:[1,2],h:[2,2],j:[3,2],v:[0,3],b:[1,3],n:[2,3],m:[3,3]}),a=g(),s=Object(r.useState)(!1),c=s[0],f=s[1],l=Object(r.useState)([4,4]),h=l[0],v=l[1],d=Object(r.useMemo)((function(){var e;return(e=(new E).on("update",a)).new.apply(e,h)}),[h]),y=d.current,b=y.columns,_=y.rows,w=y.pointUtil,O=d.isSolving,x=d.isSolved,P=Object(r.useCallback)((function(){return d.new.apply(d,h)}),[h]),j=Object(r.useCallback)((function(){if(!O)return f(!1),P();c?(f(!1),P()):f(!0)}),[O,c,P]),z=Object(r.useCallback)((function(e){var t,n;d.isSolved&&(t=e,n=d.current.size.map((function(e){return e-1})),t[0]===n[0]&&t[1]===n[1])?j():d.tap(e)&&f(!1)}),[d,j]);return e=document,t=function(e){var t=e.key;" "==t&&j();var n=u.current[t.toLowerCase()];Array.isArray(n)&&z(n)},n=[z],(o=Object(r.useRef)(t)).current=Object(r.useCallback)(t,n||[]),Object(r.useEffect)(g(),n||[]),Object(r.useEffect)((function(){null==e||e.addEventListener("keydown",(function(e){return o.current(e)}))}),[e]),p({puzzleManager:d,forceUpdate:a,setSize:v,keyMap:u}),i.a.createElement("div",{style:{"--columns":b,"--rows":_},className:S.a.fifteenPuzzleRenderer},d.getNumbers().map((function(e){var t=e.coord,n=e.number,r=e.isCorrect;return i.a.createElement(R,{hidden:0==n&&!x,correct:r,coord:t,key:n},i.a.createElement("div",{className:S.a.content},0==n?"R":n))})),i.a.createElement("div",{className:S.a.tapListeners,"aria-hidden":!0},m(b*_).map((function(e){var t;return i.a.createElement("div",M({},((t={})[C]=function(){return z(w.convertIndexToPoint(e))},t),{className:S.a.listener,key:e}))}))))}function R(e){var t=e.coord,n=t[0],r=t[1];return i.a.createElement("div",{style:{"--x":n,"--y":r},className:v(S.a.piece,e.correct&&S.a.correct,e.hidden&&S.a.hidden)},e.children)}var I=n(8),N=n.n(I);p({FifteenPuzzle:a.FifteenPuzzle});n(16);u.a.render(i.a.createElement((function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,null,i.a.createElement(A,null)),i.a.createElement("div",{className:N.a.credit},i.a.createElement("a",{href:"https://github.com/HiraginoYuki/15-puzzle.app"}," Made by Yuki Hiragino ")))}),null),document.getElementById("app"))}]);