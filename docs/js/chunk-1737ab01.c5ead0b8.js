(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1737ab01"],{8107:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["SLIM"==t.alertType?r("div",{staticClass:"usa-alert usa-alert--slim",class:{"usa-alert--error":t.messageValidator("ERROR"),"usa-alert--success":t.messageValidator("SUCCESS")},attrs:{role:"alert"}},[r("div",{staticClass:"usa-alert__body"},[r("p",{staticClass:"usa-alert__text"},[t._v(t._s(t.messageHeading))])])]):t._e(),"SLIM"!=t.alertType?r("div",{staticClass:"usa-alert",class:{"usa-alert--error":t.messageValidator("ERROR"),"usa-alert--success":t.messageValidator("SUCCESS")},attrs:{role:"alert"}},[r("div",{staticClass:"usa-alert__body"},[r("h3",{staticClass:"usa-alert__heading"},[t._v(t._s(t.messageTypeVal))]),r("p",{staticClass:"usa-alert__text"},[t._v(t._s(t.messageHeading))]),t._l(t.messages,(function(e){return r("p",{key:e,staticClass:"usa-alert__text"},[t._v(t._s(e))])}))],2)]):t._e()])},a=[],o={name:"app-message",data:function(){return{}},props:{messages:{type:Array,default:function(){return[]}},messageTypeVal:{type:String,default:""},messageHeading:{type:String,default:""},alertType:{type:String,default:"SLIM"}},methods:{messageValidator:function(t){return t===this.messageTypeVal}}},i=o,s=r("2877"),c=Object(s["a"])(i,n,a,!1,null,null,null);e["a"]=c.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,r,n){var a=e&&e.prototype instanceof g?e:g,o=Object.create(a.prototype),i=new T(n||[]);return o._invoke=b(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",d={};function g(){}function y(){}function v(){}var m={};m[o]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(k([])));_&&_!==r&&n.call(_,o)&&(m=_);var x=v.prototype=g.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t,e){function r(a,o,i,s){var c=u(t[a],t,o);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var a;function o(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function b(t,e,r){var n=l;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return j()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var s=S(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?p:f,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=u(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function k(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return y.prototype=x.constructor=v,v.constructor=y,v[s]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[i]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(c(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),x[s]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},ed5a:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid-container"},[r("div",{staticClass:"grid-row"},[r("div",{staticClass:"grid-col-8 grid-offset-2"},[r("AppMessage",{attrs:{messageHeading:t.validationMessage,messageTypeVal:t.messageTypeVal,alertType:""}})],1)]),r("div",{staticClass:"display-flex flex-column flex-align-center margin-top-3"},[r("router-link",{staticClass:"usa-button usa-button--unstyled",attrs:{to:"/"}},[t._v("Go to Home Page")])],1)])},a=[];r("96cf"),r("d3b7"),r("e6cf");function o(t,e,r,n,a,o,i){try{var s=t[o](i),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,a)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function s(t){o(i,n,a,s,c,"next",t)}function c(t){o(i,n,a,s,c,"throw",t)}s(void 0)}))}}var s=r("8107"),c=r("3f02"),u={name:"sign-out",data:function(){return{validationMessage:"You have successfully logged out from system",messageTypeVal:c["a"].success}},components:{AppMessage:s["a"]},methods:{logUserOut:function(){var t=this;return i(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("authentication/logout");case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.logUserOut()}},l=u,f=r("2877"),h=Object(f["a"])(l,n,a,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-1737ab01.c5ead0b8.js.map