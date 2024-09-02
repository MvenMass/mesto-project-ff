/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,c=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(r){p=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new T(n||[]);return c(i,"_invoke",{value:O(t,r,a)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var y="suspendedStart",h="suspendedYield",v="executing",m="completed",_={};function g(){}function b(){}function S(){}var w={};p(w,u,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(A([])));E&&E!==o&&i.call(E,u)&&(w=E);var k=S.prototype=g.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function q(e,r){function n(o,c,a,u){var l=d(e[o],e,c);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==t(p)&&i.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):r.resolve(p).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,u)}))}u(l.arg)}var o;c(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function O(t,e,n){var o=y;return function(i,c){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw c;return{value:r,done:!0}}for(n.method=i,n.arg=c;;){var a=n.delegate;if(a){var u=j(a,n);if(u){if(u===_)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=d(t,e,n);if("normal"===l.type){if(o=n.done?m:h,l.arg===_)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function j(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var i=d(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,_;var c=i.arg;return c?c.done?(e[t.resultName]=c.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,_):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,_)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function A(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,c=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return c.next=c}}throw new TypeError(t(e)+" is not iterable")}return b.prototype=S,c(k,"constructor",{value:S,configurable:!0}),c(S,"constructor",{value:b,configurable:!0}),b.displayName=p(S,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,p(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},x(q.prototype),p(q.prototype,l,(function(){return this})),n.AsyncIterator=q,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var c=new q(f(t,e,r,o),i);return n.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},x(k),p(k,s,"Generator"),p(k,u,(function(){return this})),p(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=A,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],a=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var u=i.call(c,"catchLoc"),l=i.call(c,"finallyLoc");if(u&&l){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),_}},n}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(e,r,n){return(r=function(e){var r=function(e){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}var c={baseUrl:"https://nomoreparties.co/v1/wff-cohort-21",headers:{authorization:"26238813-c771-4ea0-a68b-8fd02c289a4d","Content-Type":"application/json"}},a=function(){var t,r=(t=e().mark((function t(r){var o,i,a,u,l,s=arguments;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=s.length>1&&void 0!==s[1]?s[1]:"GET",i=s.length>2&&void 0!==s[2]?s[2]:null,a="".concat(c.baseUrl).concat(r),u=n({method:o,headers:c.headers},i&&{body:JSON.stringify(i)}),t.prev=4,t.next=7,fetch(a,u);case 7:if((l=t.sent).ok){t.next=10;break}throw new Error("Ошибка: ".concat(l.status));case 10:return t.abrupt("return",l.json());case 13:return t.prev=13,t.t0=t.catch(4),t.abrupt("return",Promise.reject(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[4,13]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var c=t.apply(e,r);function a(t){i(c,n,o,a,u,"next",t)}function u(t){i(c,n,o,a,u,"throw",t)}a(void 0)}))});return function(t){return r.apply(this,arguments)}}(),u=function(t){return a("/cards/".concat(t),"DELETE")},l=function(t){return a("/cards/likes/".concat(t),"PUT")},s=function(t){return a("/cards/likes/".concat(t),"DELETE")};function p(t){var e=t.target,r=e.closest(".card"),n=r.querySelector(".card__like-counter"),o=r.dataset.cardId;(e.classList.contains("card__like-button_is-active")?s:l)(o).then((function(t){e.classList.toggle("card__like-button_is-active"),n.textContent=t.likes.length||"",n.classList.toggle("card__like-counter_is-active",t.likes.length>0)})).catch((function(t){return console.log(t)}))}function f(t,e,r,n,o){return function(t,e,r,n,o){var i=t.link,c=t.name,a=t.likes,u=t.owner,l=t._id,s=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0);s.dataset.cardId=l;var p=s.querySelector(".card__image"),f=s.querySelector(".card__title"),d=s.querySelector(".card__like-button"),y=s.querySelector(".card__delete-button"),h=s.querySelector(".card__like-counter");return p.src=i,p.alt=c,f.textContent=c,h.textContent=a.length||"",h.classList.toggle("card__like-counter_is-active",a.length>0),d.classList.toggle("card__like-button_is-active",a.some((function(t){return t._id===e}))),p.addEventListener("click",(function(){return r(t)})),d.addEventListener("click",n),u._id===e?y.addEventListener("click",(function(t){return o(t,l,s)})):y.style.display="none",s}(t,o,e,r,n)}function d(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",h)}function y(t){t&&(t.classList.remove("popup_is-opened"),t.classList.add("popup_is-animated"),document.removeEventListener("keydown",h))}function h(t){if("Escape"===t.key){var e=document.querySelector(".popup_is-opened");e&&y(e)}}function v(t,e,r){var n=t.closest(r.formSelector).querySelector(".".concat(t.name,"-input-error"));e?n&&(n.textContent=e,n.classList.add(r.errorClass),t.classList.add(r.inputErrorClass)):n&&(n.textContent="",n.classList.remove(r.errorClass),t.classList.remove(r.inputErrorClass))}function m(t,e,r){var n=!function(t){return Array.from(t).every((function(t){return t.validity.valid}))}(t);e.classList.toggle(r.inactiveButtonClass,n),e.disabled=n}function _(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);r.forEach((function(t){return v(t,"",e)})),n.classList.add(e.inactiveButtonClass),n.disabled=!0}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}document.querySelector("#card-template").content;var b=document.querySelector(".places__list"),S=document.querySelector(".popup_type_edit"),w=document.querySelector(".popup_type_new-card"),L=document.querySelector(".profile__title"),E=document.querySelector(".profile__description"),k=document.querySelector(".profile__image"),x=S.querySelector(".popup__input_type_name"),q=S.querySelector(".popup__input_type_description"),O=w.querySelector(".popup__form"),j=O.querySelector(".popup__input_type_card-name"),C=O.querySelector(".popup__input_type_url"),P={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},T=document.querySelector(".popup_type_edit-avatar"),A=T.querySelector(".popup__form"),I=T.querySelector(".popup__input_type_url"),N=document.querySelector(".popup_type_confirm"),G=N.querySelector(".popup__button_confirm"),D=document.querySelector(".popup_type_image"),B=D.querySelector(".popup__image"),F=D.querySelector(".popup__caption");function M(t,e){L.textContent=t,E.textContent=e}function U(t,e,r,n){t.preventDefault();var o=t.target.querySelector(P.submitButtonSelector);o.textContent=n,e().then(r).catch(console.log).finally((function(){o.textContent=o.dataset.defaultText||"Сохранить"}))}function H(t){B.src=t.link,B.alt=t.name,F.textContent=t.name,d(D)}function Y(t,e,r){d(N),G.onclick=function(){G.textContent="Удаление...",u(e).then((function(){r.remove(),y(N)})).catch(console.log).finally((function(){G.textContent="Да"}))}}Promise.all([a("/users/me"),a("/cards")]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,c,a=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return g(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];!function(t){M(t.name,t.about),k.style.backgroundImage="url(".concat(t.avatar,")")}(o),i.forEach((function(t){return b.append(f(t,H,p,Y,o._id))}))})).catch(console.log),document.querySelector(".profile__edit-button").addEventListener("click",(function(){x.value=L.textContent,q.value=E.textContent,d(S),_(S,P)})),S.querySelector(".popup__close").addEventListener("click",(function(){return y(S)})),document.querySelector(".profile__add-button").addEventListener("click",(function(){d(w),O.reset(),_(O,P)})),w.querySelector(".popup__close").addEventListener("click",(function(){return y(w)})),D.querySelector(".popup__close").addEventListener("click",(function(){return y(D)})),k.addEventListener("click",(function(){d(T),A.reset(),_(A,P)})),T.querySelector(".popup__close").addEventListener("click",(function(){return y(T)})),A.addEventListener("submit",(function(t){var e=I.value;U(t,(function(){return a("/users/me/avatar","PATCH",{avatar:e})}),(function(t){k.style.backgroundImage="url(".concat(t.avatar,")"),y(T)}),"Сохранение...")})),O.addEventListener("submit",(function(t){var e={name:j.value,link:C.value};U(t,(function(){return a("/cards","POST",{name:e.name,link:e.link})}),(function(t){b.prepend(f(t,H,p,Y,t.owner._id)),y(w),O.reset(),_(O,P)}),"Создание...")})),S.querySelector(".popup__form").addEventListener("submit",(function(t){var e=x.value;q.value,U(t,(function(){return t=popupImageCardnewAbout,a("/users/me","PATCH",{name:e,about:t});var t}),(function(t){M(t.name,t.about),y(S)}),"Сохранение...")})),function(t){document.querySelectorAll(t.formSelector).forEach((function(e){var r=e.querySelectorAll(t.inputSelector),n=e.querySelector(t.submitButtonSelector);e.addEventListener("input",(function(e){e.target.matches(t.inputSelector)&&(function(t,e){var r=function(t,e){return t.valueMissing?"Вы пропустили это поле.":t.tooShort?"Должно быть от ".concat(e.minLength," до ").concat(e.maxLength," символов."):t.patternMismatch?e.dataset.errorMessage||"Неверный формат.":t.typeMismatch?"url"===e.type?"Введите адрес картинки.":"Введите корректное значение.":""}(t.validity,t);v(t,r,e)}(e.target,t),m(r,n,t))})),e.addEventListener("submit",(function(t){return t.preventDefault()})),m(r,n,t)}))}(P)})();