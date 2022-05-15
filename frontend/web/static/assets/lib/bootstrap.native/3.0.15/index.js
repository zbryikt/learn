// Native JavaScript for Bootstrap v3.0.15 | 2021 © dnp_theme | MIT-License
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).BSN=e()}(this,(function(){"use strict";const t="webkitTransition"in document.head.style?"webkitTransitionEnd":"transitionend",e="webkitTransition"in document.head.style||"transition"in document.head.style,n="webkitTransition"in document.head.style?"webkitTransitionDuration":"transitionDuration",o="webkitTransition"in document.head.style?"webkitTransitionProperty":"transitionProperty";function i(t){const i=getComputedStyle(t),s=i[o],a=i[n],r=a.includes("ms")?1:1e3,l=e&&s&&"none"!==s?parseFloat(a)*r:0;return Number.isNaN(l)?0:l}function s(e,n){let o=0;const s=new Event(t),a=i(e);a?(e.addEventListener(t,(function i(s){s.target===e&&(n.apply(e,[s]),e.removeEventListener(t,i),o=1)})),setTimeout(()=>{o||e.dispatchEvent(s)},a+17)):n.apply(e,[s])}function a(t,e){const n=e&&e instanceof Element?e:document;return t instanceof Element?t:n.querySelector(t)}function r(t,e){return t.classList.contains(e)}function l(t,e){t.classList.remove(e)}const c="addEventListener";function d(t,e){const n=new CustomEvent(t,{cancelable:!0});return e instanceof Object&&Object.keys(e).forEach(t=>{Object.defineProperty(n,t,{value:e[t]})}),n}function u(t){return"true"===t||"false"!==t&&(Number.isNaN(+t)?""===t||"null"===t?null:t:+t)}class h{constructor(t,e,n,o){const i=this,s=a(e);s[t]&&s[t].dispose(),i.element=s,n&&Object.keys(n).length&&(i.options=function(t,e,n,o){const i={},s={},a={...t.dataset};return Object.keys(a).forEach(t=>{const e=t.includes(o)?t.replace(o,"").replace(/[A-Z]/,t=>t.toLowerCase()):t;s[e]=u(a[t])}),Object.keys(n).forEach(t=>{n[t]=u(n[t])}),Object.keys(e).forEach(t=>{i[t]=t in n?n[t]:t in s?s[t]:e[t]}),i}(s,n,o||{},"bs")),s[t]=i}dispose(t){const e=this;e.element[t]=null,Object.keys(e).forEach(t=>{e[t]=null})}}const p=d("close.bs.alert"),m=d("closed.bs.alert");function f(t){const{element:e,relatedTarget:n}=t;g(t),n&&(m.relatedTarget=n),e.dispatchEvent(m),t.dispose(),e.parentNode.removeChild(e)}function g(t,e){const n=e?c:"removeEventListener";t.dismiss&&t.dismiss[n]("click",t.close)}class v extends h{constructor(t){super("Alert",t);const{element:e}=this;this.dismiss=a('[data-bs-dismiss="alert"]',e),this.relatedTarget=null,g(this,1)}close(t){const e=t?t.target:null,n=t?t.target.closest(".alert").Alert:this,{element:o}=n;if(n&&o&&r(o,"show")){if(e&&(p.relatedTarget=e,n.relatedTarget=e),o.dispatchEvent(p),p.defaultPrevented)return;l(o,"show"),r(o,"fade")?s(o,()=>f(n)):f(n)}}dispose(){g(this),super.dispose("Alert")}}function b(t,e){t.classList.add(e)}v.init={component:"Alert",selector:".alert",constructor:v};const y="data-bs-toggle",w=`[${y}="button"]`;function E(t,e){const n=e?c:"removeEventListener";t.element[n]("click",t.toggle)}class A extends h{constructor(t){super("Button",t);const{element:e}=this;this.isActive=r(e,"active"),e.setAttribute("aria-pressed",!!this.isActive),E(this,1)}toggle(t){t&&t.preventDefault();const e=t?this.Button:this,{element:n}=e;if(r(n,"disabled"))return;e.isActive=r(n,"active");const{isActive:o}=e,i=o?"false":"true";(o?l:b)(n,"active"),n.setAttribute("aria-pressed",i)}dispose(){E(this),super.dispose("Button")}}A.init={component:"Button",selector:w,constructor:A};var T=!!(()=>{let t=!1;try{const e=Object.defineProperty({},"passive",{get:()=>(t=!0,t)});document[c]("DOMContentLoaded",(function t(){document.removeEventListener("DOMContentLoaded",t,e)}),e)}catch(t){throw Error("Passive events are not supported")}return t})()&&{passive:!0};function C(t){return t.offsetHeight}function x(t){const e=t.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight;return e.top<=n&&e.bottom>=0}const k='[data-bs-ride="carousel"]',H={pause:"hover",keyboard:!1,touch:!0,interval:5e3};let N=0,L=0,P=0;const S=d("slide.bs.carousel"),O=d("slid.bs.carousel");function D(t){const e=t.target.closest(k).Carousel,{element:n,isAnimating:o}=e;r(n,"paused")||(b(n,"paused"),o||(clearInterval(e.timer),e.timer=null))}function M(t){const e=t.target.closest(k).Carousel,{isPaused:n,isAnimating:o,element:i}=e;!n&&r(i,"paused")&&(l(i,"paused"),o||(clearInterval(e.timer),e.timer=null,e.cycle()))}function B(t){t.preventDefault();const{target:e}=t,n=e.closest(k).Carousel;if(n.isAnimating)return;const o=e.getAttribute("data-bs-slide-to");e&&!r(e,"active")&&o&&n.to(+o)}function I(t){t.preventDefault();const e=this.closest(k).Carousel,{controls:n}=e;n[1]&&this===n[1]?e.next():n[1]&&this===n[0]&&e.prev()}function W({which:t}){const[e]=Array.from(document.querySelectorAll(k)).filter(t=>x(t));if(!e)return;const n=e.Carousel;switch(t){case 39:n.next();break;case 37:n.prev()}}function R(t){const e=this.Carousel;e&&!e.isTouch&&(N=t.changedTouches[0].pageX,this.contains(t.target)&&(e.isTouch=!0,z(e,1)))}function j(t){const{changedTouches:e,type:n}=t,o=this.Carousel;o&&o.isTouch&&(L=e[0].pageX,"touchmove"===n&&e.length>1&&t.preventDefault())}function $(t){const e=this,n=e.Carousel;if(n&&n.isTouch&&(P=L||t.changedTouches[0].pageX,n.isTouch)){if((!e.contains(t.target)||!e.contains(t.relatedTarget))&&Math.abs(N-P)<75)return;L<N?n.index+=1:L>N&&(n.index-=1),n.isTouch=!1,n.to(n.index),z(n)}}function F(t,e){const{indicators:n}=t;Array.from(n).forEach(t=>l(t,"active")),t.indicators[e]&&b(n[e],"active")}function z(t,e){const{element:n}=t,o=e?c:"removeEventListener";n[o]("touchmove",j,T),n[o]("touchend",$,T)}function q(t,e){const{element:n,options:o,slides:i,controls:s,indicator:a}=t,{touch:r,pause:l,interval:d,keyboard:u}=o,h=e?c:"removeEventListener";l&&d&&(n[h]("mouseenter",D),n[h]("mouseleave",M),n[h]("touchstart",D,T),n[h]("touchend",M,T)),r&&i.length>1&&n[h]("touchstart",R,T),s.forEach(t=>{t&&t[h]("click",I)}),a&&a[h]("click",B),u&&window[h]("keydown",W)}function X(t){const{slides:e,element:n}=t;return Array.from(e).indexOf(n.getElementsByClassName("carousel-item active")[0])||0}class Y extends h{constructor(t,e){super("Carousel",t,H,e);const n=this;n.timer=null,n.direction="left",n.isPaused=!1,n.isAnimating=!1,n.index=0,n.timer=null,n.isTouch=!1;const{element:o}=n;n.slides=o.getElementsByClassName("carousel-item");const{slides:i}=n;if(i.length<2)return;n.controls=[a(".carousel-control-prev",o),a(".carousel-control-next",o)],n.indicator=a(".carousel-indicators",o),n.indicators=n.indicator&&n.indicator.querySelectorAll("[data-bs-slide-to]")||[];const{options:s}=n;n.options.interval=!0===s.interval?H.interval:s.interval,X(n)<0&&(i.length&&b(i[0],"active"),n.indicators.length&&F(n,0)),q(n,1),s.interval&&n.cycle()}cycle(){const t=this,{isPaused:e,element:n,options:o}=t;t.timer&&(clearInterval(t.timer),t.timer=null),e&&(l(n,"paused"),t.isPaused=!e),t.timer=setInterval(()=>{x(n)&&(t.index+=1,t.to(t.index))},o.interval)}pause(){const t=this,{element:e,options:n,isPaused:o}=t;n.interval&&!o&&(clearInterval(t.timer),t.timer=null,b(e,"paused"),t.isPaused=!o)}next(){const t=this;t.isAnimating||(t.index+=1,t.to(t.index))}prev(){const t=this;t.isAnimating||(t.index-=1,t.to(t.index))}to(t){const e=this,{element:n,isAnimating:o,slides:a,options:c}=e,d=X(e);let u=t;if(o||d===u)return;d<u||0===d&&u===a.length-1?e.direction="left":(d>u||d===a.length-1&&0===u)&&(e.direction="right");const{direction:h}=e;u<0?u=a.length-1:u>=a.length&&(u=0);const p="left"===h?"next":"prev",m="left"===h?"start":"end",f={relatedTarget:a[u],direction:h,from:d,to:u};Object.keys(f).forEach(t=>{S[t]=f[t],O[t]=f[t]}),n.dispatchEvent(S),S.defaultPrevented||(e.index=u,clearInterval(e.timer),e.timer=null,e.isAnimating=!0,F(e,u),i(a[u])&&r(n,"slide")?(b(a[u],"carousel-item-"+p),C(a[u]),b(a[u],"carousel-item-"+m),b(a[d],"carousel-item-"+m),s(a[u],()=>function(t){const{index:e,direction:n,element:o,slides:i,options:s,isAnimating:a}=t;if(a&&o.Carousel){const a=X(t),c="left"===n?"next":"prev",d="left"===n?"start":"end";t.isAnimating=!1,b(i[e],"active"),l(i[a],"active"),l(i[e],"carousel-item-"+c),l(i[e],"carousel-item-"+d),l(i[a],"carousel-item-"+d),o.dispatchEvent(O),document.hidden||!s.interval||r(o,"paused")||t.cycle()}}(e))):(b(a[u],"active"),l(a[d],"active"),setTimeout(()=>{e.isAnimating=!1,n&&c.interval&&!r(n,"paused")&&e.cycle(),n.dispatchEvent(O)},100)))}dispose(){const t=this,{slides:e}=t,n=["start","end","prev","next"];Array.from(e).forEach((e,o)=>{r(e,"active")&&F(t,o),n.forEach(t=>l(e,"carousel-item-"+t))}),q(t),clearInterval(t.timer),super.dispose("Carousel")}}Y.init={component:"Carousel",selector:k,constructor:Y};function V(t){return a(t.getAttribute("data-bs-target")||t.getAttribute("href"))||t.closest(t.getAttribute("data-bs-parent"))||a(t.getAttribute("data-bs-container"))}const G=`[${y}="collapse"]`,U=d("show.bs.collapse"),Z=d("shown.bs.collapse"),J=d("hide.bs.collapse"),K=d("hidden.bs.collapse");function Q(t){const{element:e,parent:n,triggers:o}=t;e.dispatchEvent(J),J.defaultPrevented||(t.isAnimating=!0,n&&(n.isAnimating=!0),e.style.height=e.scrollHeight+"px",l(e,"collapse"),l(e,"show"),b(e,"collapsing"),C(e),e.style.height="0px",s(e,()=>{t.isAnimating=!1,n&&(n.isAnimating=!1),o.forEach(t=>t.setAttribute("aria-expanded","false")),l(e,"collapsing"),b(e,"collapse"),e.style.height="",e.dispatchEvent(K)}))}function _(t,e){const n=e?c:"removeEventListener",{triggers:o}=t;o.length&&o.forEach(t=>t[n]("click",tt))}function tt(t){const{target:e}=t,n=e.closest(G),o=V(n),i=o&&o.Collapse;i&&i.toggle(e),n&&"A"===n.tagName&&t.preventDefault()}class et extends h{constructor(t,e){super("Collapse",t,{parent:null},e);const{element:n}=this;this.triggers=Array.from(document.querySelectorAll(G)).filter(t=>V(t)===n),this.parent=a(this.options.parent);const{parent:o}=this;this.isAnimating=!1,o&&(o.isAnimating=!1),_(this,1)}toggle(t){r(this.element,"show")?this.hide(t):this.show(t)}hide(){const{triggers:t,isAnimating:e}=this;e||(Q(this),t.length&&t.forEach(t=>b(t,"collapsed")))}show(){const t=this,{element:e,parent:n,triggers:o,isAnimating:i}=t;let a,r;n&&(a=Array.from(n.querySelectorAll(".collapse.show")).find(t=>t.Collapse),r=a&&a.Collapse),n&&(!n||n.isAnimating)||i||(r&&a!==e&&(Q(r),r.triggers.forEach(t=>{b(t,"collapsed")})),function(t){const{element:e,parent:n,triggers:o}=t;e.dispatchEvent(U),U.defaultPrevented||(t.isAnimating=!0,n&&(n.isAnimating=!0),b(e,"collapsing"),l(e,"collapse"),e.style.height=e.scrollHeight+"px",s(e,()=>{t.isAnimating=!1,n&&(n.isAnimating=!1),o.forEach(t=>t.setAttribute("aria-expanded","true")),l(e,"collapsing"),b(e,"collapse"),b(e,"show"),e.style.height="",e.dispatchEvent(Z)}))}(t),o.length&&o.forEach(t=>l(t,"collapsed")))}dispose(){const{parent:t}=this;_(this),t&&delete t.isAnimating,super.dispose("Collapse")}}et.init={component:"Collapse",selector:".collapse",constructor:et};const nt=["dropdown","dropup","dropstart","dropend"];function ot(t){const e=t.closest("A");return t&&(t.href&&"#"===t.href.slice(-1)||e&&e.href&&"#"===e.href.slice(-1))}function it(t){t.focus()}const[st]=nt,at=`[${y}="${st}"]`,rt=nt[1],lt=nt[2],ct=nt[3],dt=["d-block","invisible"],ut=[st,rt],ht=[lt,ct],pt={offset:5,display:"dynamic"},mt=d("show.bs."+st),ft=d("shown.bs."+st),gt=d("hide.bs."+st),vt=d("hidden.bs."+st);function bt(t,e){const{element:n,menu:o,originalClass:i,menuEnd:s,options:a}=t,c=n.parentElement;if(["margin","top","bottom","left","right"].forEach(t=>{o.style[t]=""}),l(c,"position-static"),!e){c.className=i.join(" ");return void(s&&!r(o,"dropdown-menu-end")?b:l)(o,"dropdown-menu-end")}const{offset:d}=a;let u=nt.find(t=>i.includes(t)),h={dropdown:[d,0,0],dropup:[0,0,d],dropstart:[-1,d,0],dropend:[-1,0,0,d]};const p={dropdown:{top:"100%"},dropup:{top:"auto",bottom:"100%"},dropstart:{left:"auto",right:"100%"},dropend:{left:"100%",right:"auto"},menuEnd:{right:0,left:"auto"}};dt.forEach(t=>b(o,t));const m=new RegExp(`\\b(${st}|${rt}|${lt}|${ct})+`),f=n.offsetWidth,g=n.offsetHeight,v=o.offsetWidth,y=o.offsetHeight,w=document.documentElement,E=document.body,A=w.clientWidth||E.clientWidth,T=w.clientHeight||E.clientHeight,C=n.getBoundingClientRect(),x=C.left+f-v<0,k=C.left-v<0,H=C.left+v>=A,N=C.left+v+f>=A,L=C.top+y>=T,P=C.top+y+g>=T,S=C.top-y<0,O=c.parentNode.closest(".btn-group,.btn-group-vertical");if(ht.includes(u)&&k&&N&&(u=st),ht.includes(u)&&L&&(u=rt),u===lt&&k&&!L&&(u=ct),u===ct&&N&&!L&&(u=lt),u===rt&&S&&!P&&(u=st),u===st&&P&&!S&&(u=rt),h=h[u],o.style.margin=""+h.map(t=>t?t+"px":t).join(" "),Object.keys(p[u]).forEach(t=>{o.style[t]=p[u][t]}),r(c,u)||(c.className=c.className.replace(m,u)),ut.includes(u)){const t=H?b:l;O?x&&b(c,"position-static"):t(o,"dropdown-menu-end"),r(o,"dropdown-menu-end")&&Object.keys(p.menuEnd).forEach(t=>{o.style[t]=p.menuEnd[t]})}dt.forEach(t=>l(o,t))}function yt(t){const e=t.open?c:"removeEventListener";document[e]("click",At),document[e]("focus",At),document[e]("keydown",Ct),document[e]("keyup",xt),"dynamic"===t.options.display&&(window[e]("scroll",kt,T),window[e]("resize",kt,T))}function wt(t,e){const n=e?c:"removeEventListener";t.element[n]("click",Tt)}function Et(){const t=nt.map(t=>document.getElementsByClassName(t+" show")).find(t=>t.length);return t&&t.length?Array.from(t[0].children).find(t=>t.hasAttribute(y)):null}function At(t){const{target:e,type:n}=t;if(!e.closest)return;const o=Et(),i=o&&o.parentNode,s=o&&o.Dropdown,a=s&&s.menu,r=null!==e.closest(at),l=i&&i.contains(e)&&("form"===e.tagName||null!==e.closest("form"));"click"===n&&ot(e)&&t.preventDefault(),("focus"!==n||e!==o&&e!==a&&!a.contains(e))&&(l||r||s&&s.hide(o))}function Tt(t){this.Dropdown.toggle(this),ot(t.target)&&t.preventDefault()}function Ct(t){38!==t.which&&40!==t.which||t.preventDefault()}function xt({which:t}){const e=Et(),n=e.Dropdown,{menu:o,menuItems:i,open:s}=n,a=document.activeElement,r=a===e,l=o.contains(a),c=a.parentNode===o||a.parentNode.parentNode===o;let d=i.indexOf(a);c&&(r?d=0:38===t?d=d>1?d-1:0:40===t&&(d=d<i.length-1?d+1:d),i[d]&&it(i[d])),(i.length&&c||!i.length&&(l||r)||!l)&&s&&27===t&&n.toggle()}function kt(){const t=Et(),e=t&&t.Dropdown;e&&e.open&&bt(e,1)}class Ht extends h{constructor(t,e){super("Dropdown",t,pt,e);const n=this,{element:o}=n,i=o.parentElement;n.menu=a(".dropdown-menu",i);const{menu:s}=n;n.originalClass=Array.from(i.classList),n.menuEnd=r(s,"dropdown-menu-end"),n.menuItems=[],Array.from(s.children).forEach(t=>{t.children.length&&"A"===t.children[0].tagName&&n.menuItems.push(t.children[0]),"A"===t.tagName&&n.menuItems.push(t)}),n.open=!1,wt(n,1)}toggle(t){const{open:e}=this;e?this.hide(t):this.show(t)}show(t){const e=this,n=a(nt.map(t=>`.${t}.show`).join(",")),o=n&&a(at,n);o&&o.Dropdown.hide();const{element:i,menu:s,open:r}=e,l=i.parentNode;mt.relatedTarget=t||null,l.dispatchEvent(mt),mt.defaultPrevented||(bt(e,1),b(s,"show"),b(l,"show"),i.setAttribute("aria-expanded",!0),e.open=!r,setTimeout(()=>{it(s.getElementsByTagName("INPUT")[0]||i),yt(e),ft.relatedTarget=t||null,l.dispatchEvent(ft)},1))}hide(t){const e=this,{element:n,menu:o,open:i}=e,s=n.parentNode;gt.relatedTarget=t||null,s.dispatchEvent(gt),gt.defaultPrevented||(l(o,"show"),l(s,"show"),bt(e),n.setAttribute("aria-expanded",!1),e.open=!i,it(n),setTimeout(()=>yt(e),1),vt.relatedTarget=t||null,s.dispatchEvent(vt))}dispose(){const{element:t}=this;r(t.parentNode,"show")&&this.open&&this.hide(),wt(this),super.dispose("Dropdown")}}Ht.init={component:"Dropdown",selector:at,constructor:Ht};const Nt=Array.from(document.getElementsByClassName("fixed-top")).concat(Array.from(document.getElementsByClassName("fixed-bottom"))).concat(Array.from(document.getElementsByClassName("sticky-top"))).concat(Array.from(document.getElementsByClassName("is-fixed")));function Lt(){const t=document.body;t.style.paddingRight="",t.style.overflow="",Nt.length&&Nt.forEach(t=>{t.style.paddingRight="",t.style.marginRight=""})}function Pt(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function St(t,e,n){const o=document.body,i=parseInt(getComputedStyle(o).paddingRight,10),s=n&&i?0:t;e&&(o.style.paddingRight=i+s+"px",Nt.length&&Nt.forEach(t=>{const e=r(t,"sticky-top"),n=getComputedStyle(t).paddingRight;if(t.style.paddingRight=parseInt(n,10)+s+"px",e){const e=getComputedStyle(t).marginRight;t.style.marginRight=parseInt(e,10)-s+"px"}}))}const Ot=document.createElement("div");function Dt(){return a(".modal.show,.offcanvas.show")}function Mt(t){document.body.appendChild(Ot),t&&b(Ot,"fade")}function Bt(){b(Ot,"show"),C(Ot)}function It(){l(Ot,"show")}function Wt(){const t=document.body;Dt()||(l(Ot,"fade"),l(t,"modal-open"),t.removeChild(Ot),Lt())}function Rt(t){return"hidden"!==getComputedStyle(t).visibility&&null!==t.offsetParent}Ot.setAttribute("class","modal-backdrop");const jt=`[${y}="modal"]`,$t={backdrop:!0,keyboard:!0},Ft=d("show.bs.modal"),zt=d("shown.bs.modal"),qt=d("hide.bs.modal"),Xt=d("hidden.bs.modal");function Yt(t){const{element:e,scrollbarWidth:n}=t,o=document.body,i=document.documentElement,s=r(o,"modal-open"),a=i.clientHeight!==i.scrollHeight||o.clientHeight!==o.scrollHeight,l=e.clientHeight!==e.scrollHeight;!l&&n&&(e.style.paddingRight=n+"px"),St(n,l||a,s)}function Vt(t,e){const n=e?c:"removeEventListener";window[n]("resize",t.update,T),t.element[n]("click",te),document[n]("keydown",_t)}function Gt(t,e){const n=e?c:"removeEventListener",{triggers:o}=t;o.length&&o.forEach(t=>t[n]("click",Qt))}function Ut(t){const{triggers:e}=t;if(Wt(),t.element.style.paddingRight="",t.isAnimating=!1,e.length){const t=e.find(t=>Rt(t));t&&it(t)}}function Zt(t){const{element:e,relatedTarget:n}=t;it(e),t.isAnimating=!1,Vt(t,1),zt.relatedTarget=n,e.dispatchEvent(zt)}function Jt(t){const{element:e,hasFade:n}=t;e.style.display="block",Yt(t),a(".modal.show")||b(document.body,"modal-open"),b(e,"show"),e.removeAttribute("aria-hidden"),e.setAttribute("aria-modal",!0),n?s(e,()=>Zt(t)):Zt(t)}function Kt(t,e){const{element:n,relatedTarget:o,hasFade:i}=t,a=Dt();n.style.display="",!e&&i&&r(Ot,"show")&&!a?(It(),s(Ot,()=>Ut(t))):Ut(t),Vt(t),Xt.relatedTarget=o,n.dispatchEvent(Xt)}function Qt(t){const{target:e}=t,n=e.closest(jt),o=V(n),i=o&&o.Modal;"A"===n.tagName&&t.preventDefault(),i.isAnimating||(i.relatedTarget=n,i.toggle())}function _t({which:t}){const e=a(".modal.show"),n=e.Modal,{options:o,isAnimating:i}=n;!i&&o.keyboard&&27===t&&r(e,"show")&&(n.relatedTarget=null,n.hide())}function te(t){const e=this,n=e.Modal;if(n.isAnimating)return;const{isStatic:o,modalDialog:a}=n,{target:r}=t,c=document.getSelection().toString().length,d=a.contains(r),u=r.closest('[data-bs-dismiss="modal"]');o&&!d?(b(e,"modal-static"),n.isAnimating=!0,s(a,()=>function(t){const e=i(t.modalDialog)+17;l(t.element,"modal-static"),setTimeout(()=>{t.isAnimating=!1},e)}(n))):!u&&(c||o||d)||(n.relatedTarget=u||null,n.hide(),t.preventDefault())}class ee extends h{constructor(t,e){super("Modal",t,$t,e);const{element:n}=this;this.modalDialog=a(".modal-dialog",n),this.triggers=Array.from(document.querySelectorAll(jt)).filter(t=>V(t)===n),this.isStatic="static"===this.options.backdrop,this.hasFade=r(n,"fade"),this.isAnimating=!1,this.scrollbarWidth=Pt(),this.relatedTarget=null,Gt(this,1),this.update=this.update.bind(this)}toggle(){r(this.element,"show")?this.hide():this.show()}show(){const t=this,{element:e,isAnimating:n,hasFade:o,relatedTarget:s}=t;let l=0;if(r(e,"show")&&!n)return;if(Ft.relatedTarget=s||null,e.dispatchEvent(Ft),Ft.defaultPrevented)return;t.isAnimating=!0;const c=Dt();if(c&&c!==e){(c.Modal?c.Modal:c.Offcanvas).hide()}a(".modal-backdrop")||Mt(o),l=i(Ot),r(Ot,"show")||Bt(),c?Jt(t):setTimeout(()=>Jt(t),l)}hide(t){const e=this,{element:n,isAnimating:o,hasFade:i,relatedTarget:a}=e;(r(n,"show")||o)&&(qt.relatedTarget=a||null,n.dispatchEvent(qt),qt.defaultPrevented||(e.isAnimating=!0,l(n,"show"),n.setAttribute("aria-hidden",!0),n.removeAttribute("aria-modal"),i&&1!==t?s(n,()=>Kt(e)):Kt(e,t)))}update(){r(this.element,"show")&&Yt(this)}dispose(){this.hide(1),Gt(this),super.dispose("Modal")}}ee.init={component:"Modal",selector:".modal",constructor:ee};const ne=`[${y}="offcanvas"]`,oe={backdrop:!0,keyboard:!0,scroll:!1},ie=d("show.bs.offcanvas"),se=d("shown.bs.offcanvas"),ae=d("hide.bs.offcanvas"),re=d("hidden.bs.offcanvas");function le(t,e){const n=e?c:"removeEventListener";t.triggers.forEach(t=>t[n]("click",he))}function ce(t){const e=t?c:"removeEventListener";document[e]("keydown",me),document[e]("click",pe)}function de(t){const{element:e,options:n}=t;n.scroll||(b(document.body,"modal-open"),function(t){const e=document.body,n=document.documentElement,o=r(e,"modal-open"),i=n.clientHeight!==n.scrollHeight||e.clientHeight!==e.scrollHeight;St(t.scrollbarWidth,i,o)}(t)),b(e,"offcanvas-toggling"),b(e,"show"),e.style.visibility="visible",s(e,()=>function(t){const{element:e,triggers:n,relatedTarget:o}=t;l(e,"offcanvas-toggling"),e.removeAttribute("aria-hidden"),e.setAttribute("aria-modal",!0),e.setAttribute("role","dialog"),t.isAnimating=!1,n.length&&n.forEach(t=>t.setAttribute("aria-expanded",!0));se.relatedTarget=o||null,e.dispatchEvent(se),ce(1),it(e)}(t))}function ue(t){const{element:e,options:n}=t,o=Dt();e.blur(),!o&&n.backdrop&&r(Ot,"show")?(It(),s(Ot,()=>fe(t))):fe(t)}function he(t){const e=this.closest(ne),n=V(e),o=n&&n.Offcanvas;"A"===e.tagName&&t.preventDefault(),o&&(o.relatedTarget=e,o.toggle())}function pe(t){const e=a(".offcanvas.show");if(!e)return;const n=a('[data-bs-dismiss="offcanvas"]',e),o=e.Offcanvas;if(!o)return;const{options:i,open:s,triggers:r}=o,{target:l}=t,c=l.closest(ne);c&&"A"===c.tagName&&t.preventDefault(),s&&(!e.contains(l)&&i.backdrop&&(!c||c&&!r.includes(c))||n.contains(l))&&(o.relatedTarget=l===n?n:null,o.hide())}function me({which:t}){const e=a(".offcanvas.show");if(!e)return;const n=e.Offcanvas;n&&n.options.keyboard&&27===t&&(n.relatedTarget=null,n.hide())}function fe(t){const{element:e,options:n,relatedTarget:o,triggers:i}=t,s=Dt();if(e.setAttribute("aria-hidden",!0),e.removeAttribute("aria-modal"),e.removeAttribute("role"),e.style.visibility="",t.open=!1,t.isAnimating=!1,i.length){i.forEach(t=>t.setAttribute("aria-expanded",!1));const t=i.find(t=>Rt(t));t&&it(t)}s||(n.backdrop&&Wt(),n.scroll||(Lt(),l(document.body,"modal-open"))),re.relatedTarget=o||null,e.dispatchEvent(re),l(e,"offcanvas-toggling"),ce()}class ge extends h{constructor(t,e){super("Offcanvas",t,oe,e);const{element:n}=this;this.triggers=Array.from(document.querySelectorAll(ne)).filter(t=>V(t)===n),this.open=!1,this.isAnimating=!1,this.scrollbarWidth=Pt(),le(this,1)}toggle(){return this.open?this.hide():this.show()}show(){const t=this.Offcanvas?this.Offcanvas:this,{element:e,options:n,isAnimating:o,relatedTarget:s}=t;let l=0;if(t.open||o)return;if(ie.relatedTarget=s||null,e.dispatchEvent(ie),ie.defaultPrevented)return;const c=Dt();if(c&&c!==e){(c.Offcanvas?c.Offcanvas:c.Modal).hide()}t.open=!0,t.isAnimating=!0,n.backdrop?(a(".modal-backdrop")||Mt(1),l=i(Ot),r(Ot,"show")||Bt(),setTimeout(()=>de(t),l)):de(t)}hide(t){const e=this,{element:n,isAnimating:o,relatedTarget:i}=e;e.open&&!o&&(ae.relatedTarget=i||null,n.dispatchEvent(ae),ae.defaultPrevented||(e.isAnimating=!0,b(n,"offcanvas-toggling"),l(n,"show"),t?ue(e):s(n,()=>ue(e))))}dispose(){this.hide(1),le(this),super.dispose("Offcanvas")}}ge.init={component:"Offcanvas",selector:".offcanvas",constructor:ge};var ve={top:"top",bottom:"bottom",left:"start",right:"end"};function be(t,e){return e.contains(t)}function ye(t){return[SVGElement,HTMLImageElement,HTMLVideoElement].some(e=>t instanceof e)}function we(t,e){const n=/\b(top|bottom|start|end)+/,o=t.tooltip||t.popover;o.style.top="",o.style.left="",o.style.right="";const i=!!t.popover;let s={w:o.offsetWidth,h:o.offsetHeight};const a=document.documentElement.clientWidth||document.body.clientWidth,r=document.documentElement.clientHeight||document.body.clientHeight,{element:l,options:c,arrow:d}=t;let{container:u,placement:h}=c,p=u===document.body;const m=getComputedStyle(l).position,f=getComputedStyle(u).position,g=!p&&"static"===f;let v=!p&&"relative"===f;const b=g&&function(t){let e=null,n=t;for(;n!==document.body;)if(n=n.parentElement,"relative"===getComputedStyle(n).position){e=n;break}return e}(u);u=b||u,v=g&&b?1:v,p=u===document.body;const y=u.getBoundingClientRect(),w=v?y.left:0,E=v?y.right:a,A="absolute"===m,T=l.getBoundingClientRect(),C=p?{x:window.pageXOffset,y:window.pageYOffset}:{x:u.scrollLeft,y:u.scrollTop},x=l.offsetWidth,k=l.offsetHeight,H=v?l.offsetTop:T.top,N=v?l.offsetLeft:T.left;let L,P,S,O,D,M;d.style.top="",d.style.left="",d.style.right="";let B=T.top-s.h<0,I=T.top+s.h+k>=r,W=T.left-s.w<w,R=T.left+s.w+x>=E;B=["left","right"].includes(h)?T.top+k/2-s.h/2<0:B,I=["left","right"].includes(h)?T.top+s.h/2+k/2>=r:I,W=["top","bottom"].includes(h)?T.left+x/2-s.w/2<w:W,R=["top","bottom"].includes(h)?T.left+s.w/2+x/2>=E:R,h=["left","right"].includes(h)&&W&&R?"top":h,h="top"===h&&B?"bottom":h,h="bottom"===h&&I?"top":h,h="left"===h&&W?"right":h,h="right"===h&&R?"left":h,o.className.includes(h)||(o.className=o.className.replace(n,ve[h])),s={w:o.offsetWidth,h:o.offsetHeight};const j=d.offsetWidth||0,$=d.offsetHeight||0,F=j/2;if(["left","right"].includes(h))P="left"===h?N+C.x-s.w-(i?j:0):N+C.x+x+(i?j:0),B?(L=H+C.y,O=k/2-j):I?(L=H+C.y-s.h+k,O=s.h-k/2-j):(L=H+C.y-s.h/2+k/2,O=s.h/2-$/2);else if(["top","bottom"].includes(h))if(e&&ye(l)){const t=v?e.layerX+(A?l.offsetLeft:0):e.pageX,n=v?e.layerY+(A?l.offsetTop:0):e.pageY;L="top"===h?n-s.h-(i?j:$):n+$,e.clientX-s.w/2<w?(P=0,D=t-F):e.clientX+.51*s.w>=E?(P="auto",S=0,D=s.w-(E-t)-F):(P=t-s.w/2,D=s.w/2-F)}else L="top"===h?H+C.y-s.h-(i?$:0):H+C.y+k+(i?$:0),W?(P=0,D=N+x/2-F):R?(P="auto",S=0,M=x/2+(y.right-T.right)-F):(P=N+C.x-s.w/2+x/2,D=s.w/2-F);o.style.top=L+"px",o.style.left="auto"===P?P:P+"px",o.style.right=void 0!==S?S+"px":"",void 0!==O&&(d.style.top=O+"px"),void 0!==D?d.style.left=D+"px":void 0!==M&&(d.style.right=M+"px")}let Ee=1;function Ae(t,e){return Ee+=1,t[e]||Ee}function Te(t){const e=t.closest(".modal"),n=t.closest(".fixed-top,.fixed-bottom");return e||n||document.body}const Ce=`[${y}="popover"],[data-tip="popover"]`,xe={template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',title:null,content:null,sanitizeFn:null,customClass:null,dismissible:!1,animation:!0,trigger:"hover",placement:"top",delay:200},ke=/(iPhone|iPod|iPad)/.test(navigator.userAgent);let He='<button type="button" class="btn-close"></button>';const Ne=d("show.bs.popover"),Le=d("shown.bs.popover"),Pe=d("hide.bs.popover"),Se=d("hidden.bs.popover");function Oe(){it(this)}function De({target:t}){const e=this,{popover:n,element:o}=e;n&&n.contains(t)||t===o||o.contains(t)||e.hide()}function Me(t,e){const n=e?c:"removeEventListener",{element:o,options:i}=t,{trigger:s,dismissible:a}=i;t.enabled=!!e,"hover"===s?(o[n]("mousedown",t.show),o[n]("mouseenter",t.show),ye(o)&&o[n]("mousemove",t.update,T),a||o[n]("mouseleave",t.hide)):"click"===s?o[n](s,t.toggle):"focus"===s&&(ke&&o[n]("click",Oe),o[n]("focusin",t.show))}function Be(t,e){const n=e?c:"removeEventListener",{options:o,element:i,popover:s}=t,{trigger:a,dismissible:r}=o;if(r){const[e]=s.getElementsByClassName("btn-close");e&&e[n]("click",t.hide)}else"focus"===a&&i[n]("focusout",t.hide),"hover"===a&&document[n]("touchstart",De,T);ye(i)||(window[n]("scroll",t.update,T),window[n]("resize",t.update,T))}function Ie(t){Be(t,1),t.element.dispatchEvent(Le)}function We(t){Be(t),function(t){const{element:e,popover:n,options:o}=t;e.removeAttribute("aria-describedby"),o.container.removeChild(n),t.timer=null}(t),t.element.dispatchEvent(Se)}class Re extends h{constructor(t,e){xe.container=Te(a(t)),super("Popover",t,xe,e);const{element:n}=this;this.timer=null,this.popover=null,this.arrow=null,this.enabled=!1,this.id="popover-"+Ae(n);const{options:o}=this;this.options.container=ye(n)?xe.container:a(o.container),xe.container=null,o.content&&(!function(t){const{id:e,options:n}=t,{animation:o,customClass:i,sanitizeFn:s,placement:l,dismissible:c}=n;let{title:d,content:u,template:h}=n;const p="bs-popover-"+ve[l];d=d?d.trim():null,u=u?u.trim():null,s&&(d=d?s(d):null,u=u?s(u):null,h=h?s(h):null,He=s(He)),t.popover=document.createElement("div");const{popover:m}=t;m.setAttribute("id",e),m.setAttribute("role","tooltip");const f=document.createElement("div");f.innerHTML=h.trim(),m.className=f.firstChild.className,m.innerHTML=f.firstChild.innerHTML;const g=a(".popover-header",m),v=a(".popover-body",m);t.arrow=a(".popover-arrow",m),c&&(d=d?d+He:d,u=null===d?+He:u),d&&g&&(g.innerHTML=d.trim()),u&&v&&(v.innerHTML=u.trim()),r(m,"popover")||b(m,"popover"),o&&!r(m,"fade")&&b(m,"fade"),i&&!r(m,i)&&b(m,i),r(m,p)||b(m,p)}(this),this.update=this.update.bind(this),Me(this,1))}update(t){we(this,t)}toggle(t){const e=t?this.Popover:this,{popover:n,options:o}=e;be(n,o.container)?e.hide():e.show()}show(t){const e=t?this.Popover:this,{element:n,popover:o,options:i,id:a}=e,{container:l}=i;clearTimeout(e.timer),e.timer=setTimeout(()=>{if(!be(o,l)){if(n.dispatchEvent(Ne),Ne.defaultPrevented)return;l.appendChild(o),n.setAttribute("aria-describedby",a),e.update(t),r(o,"show")||b(o,"show"),i.animation?s(o,()=>Ie(e)):Ie(e)}},17)}hide(t){let e;if(t&&this.Popover)e=this.Popover;else if(t){const t=this.closest(".popover"),n=t&&a(`[aria-describedby="${t.id}"]`);e=n.Popover}else e=this;const{element:n,popover:o,options:i}=e;clearTimeout(e.timer),e.timer=setTimeout(()=>{if(be(o,i.container)){if(n.dispatchEvent(Pe),Pe.defaultPrevented)return;l(o,"show"),i.animation?s(o,()=>We(e)):We(e)}},i.delay+17)}enable(){const t=this,{enabled:e}=t;e||(Me(t,1),t.enabled=!e)}disable(){const t=this,{enabled:e,popover:n,options:o}=t;e&&(be(n,o.container)&&o.animation?(t.hide(),setTimeout(()=>Me(t),i(n)+o.delay+17)):Me(t),t.enabled=!e)}toggleEnabled(){this.enabled?this.disable():this.enable()}dispose(){const t=this,{popover:e,options:n}=t,{container:o,animation:i}=n;i&&be(e,o)?(n.delay=0,t.hide(),s(e,()=>Me(t))):Me(t),super.dispose("Popover")}}Re.init={component:"Popover",selector:Ce,constructor:Re};const je={offset:10,target:null},$e=d("activate.bs.scrollspy");function Fe(t){const{target:e,scrollTarget:n,isWindow:o,options:i,itemsLength:s,scrollHeight:r}=t,{offset:l}=i,c=e.getElementsByTagName("A");if(t.scrollTop=o?n.pageYOffset:n.scrollTop,s!==c.length||ze(n)!==r){let e,i,s;t.items=[],t.offsets=[],t.scrollHeight=ze(n),t.maxScroll=t.scrollHeight-function({element:t,isWindow:e}){return e?window.innerHeight:t.getBoundingClientRect().height}(t),Array.from(c).forEach(n=>{e=n.getAttribute("href"),i=e&&"#"===e.charAt(0)&&"#"!==e.slice(-1)&&a(e),i&&(t.items.push(n),s=i.getBoundingClientRect(),t.offsets.push((o?s.top+t.scrollTop:i.offsetTop)-l))}),t.itemsLength=t.items.length}}function ze(t){return t.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}function qe(t){Array.from(t.getElementsByTagName("A")).forEach(t=>{r(t,"active")&&l(t,"active")})}function Xe(t,e){const{target:n,element:o}=t;qe(n),t.activeItem=e,b(e,"active");const i=[];let s=e;for(;s!==document.body;)s=s.parentNode,(r(s,"nav")||r(s,"dropdown-menu"))&&i.push(s);i.forEach(t=>{const e=t.previousElementSibling;e&&!r(e,"active")&&b(e,"active")}),$e.relatedTarget=e,o.dispatchEvent($e)}function Ye(t,e){const n=e?c:"removeEventListener";t.scrollTarget[n]("scroll",t.refresh,T)}class Ve extends h{constructor(t,e){super("ScrollSpy",t,je,e);const{element:n,options:o}=this;this.target=a(o.target),this.target&&(this.scrollTarget=n.clientHeight<n.scrollHeight?n:window,this.isWindow=this.scrollTarget===window,this.scrollTop=0,this.maxScroll=0,this.scrollHeight=0,this.activeItem=null,this.items=[],this.offsets=[],this.refresh=this.refresh.bind(this),Ye(this,1),this.refresh())}refresh(){const t=this,{target:e}=t;if(0===e.offsetHeight)return;Fe(t);const{scrollTop:n,maxScroll:o,itemsLength:i,items:s,activeItem:a}=t;if(n>=o){const e=s[i-1];return void(a!==e&&Xe(t,e))}const{offsets:r}=t;if(a&&n<r[0]&&r[0]>0)return t.activeItem=null,void qe(e);s.forEach((e,o)=>{a!==e&&n>=r[o]&&(void 0===r[o+1]||n<r[o+1])&&Xe(t,e)})}dispose(){Ye(this),super.dispose("ScrollSpy")}}Ve.init={component:"ScrollSpy",selector:'[data-bs-spy="scroll"]',constructor:Ve};const Ge=`[${y}="tab"]`,Ue=d("show.bs.tab"),Ze=d("shown.bs.tab"),Je=d("hide.bs.tab"),Ke=d("hidden.bs.tab");let Qe,_e,tn,en,nn,on,sn;function an(t){const{tabContent:e,nav:n}=t;e.style.height="",l(e,"collapsing"),n.isAnimating=!1}function rn(t){const{tabContent:e,nav:n}=t;e?sn?an(t):setTimeout(()=>{e.style.height=tn+"px",C(e),s(e,()=>an(t))},50):n.isAnimating=!1,Ze.relatedTarget=en,Qe.dispatchEvent(Ze)}function ln(t){const{tabContent:e}=t;e&&(nn.style.float="left",_e.style.float="left",on=nn.scrollHeight),Ue.relatedTarget=en,Ke.relatedTarget=Qe,Qe.dispatchEvent(Ue),Ue.defaultPrevented||(b(_e,"active"),l(nn,"active"),e&&(tn=_e.scrollHeight,sn=tn===on,b(e,"collapsing"),e.style.height=on+"px",C(e),nn.style.float="",_e.style.float=""),r(_e,"fade")?setTimeout(()=>{b(_e,"show"),s(_e,()=>{rn(t)})},20):rn(t),en.dispatchEvent(Ke))}function cn({nav:t}){const e=t.getElementsByClassName("active");return 1!==e.length||nt.some(t=>r(e[0].parentNode,t))?e.length>1&&(en=e[e.length-1]):[en]=e,en}function dn(t){return a(cn(t).getAttribute("href"))}function un(t,e){const n=e?c:"removeEventListener";t.element[n]("click",hn)}function hn(t){const e=this.Tab;t.preventDefault(),e.nav.isAnimating||e.show()}class pn extends h{constructor(t){super("Tab",t);const{element:n}=this;this.nav=n.closest(".nav");const{nav:o}=this;this.dropdown=o&&a(`.${nt[0]}-toggle`,o),nn=dn(this),this.tabContent=e&&nn.closest(".tab-content"),on=nn.scrollHeight,o.isAnimating=!1,un(this,1)}show(){const t=this,{element:e,nav:n,dropdown:o}=t;if(Qe=e,!r(Qe,"active")){if(_e=a(Qe.getAttribute("href")),en=cn({nav:n}),nn=dn({nav:n}),Je.relatedTarget=Qe,en.dispatchEvent(Je),Je.defaultPrevented)return;n.isAnimating=!0,l(en,"active"),en.setAttribute("aria-selected","false"),b(Qe,"active"),Qe.setAttribute("aria-selected","true"),o&&(r(e.parentNode,"dropdown-menu")?r(o,"active")||b(o,"active"):r(o,"active")&&l(o,"active")),r(nn,"fade")?(l(nn,"show"),s(nn,()=>ln(t))):ln(t)}}dispose(){un(this),super.dispose("Tab")}}pn.init={component:"Tab",selector:Ge,constructor:pn};const mn={animation:!0,autohide:!0,delay:500},fn=d("show.bs.toast"),gn=d("hide.bs.toast"),vn=d("shown.bs.toast"),bn=d("hidden.bs.toast");function yn(t){const{element:e,options:n}=t;n.animation||(l(e,"showing"),b(e,"show")),e.dispatchEvent(vn),n.autohide&&t.hide()}function wn(t){const{element:e}=t;b(e,"hide"),e.dispatchEvent(bn)}function En(t,e){const n=e?c:"removeEventListener";t.dismiss&&t.dismiss[n]("click",t.hide)}function An(t){clearTimeout(t.timer),En(t)}class Tn extends h{constructor(t,e){super("Toast",t,mn,e);this.dismiss=a('[data-bs-dismiss="toast"]',this.element),this.show=this.show.bind(this),this.hide=this.hide.bind(this),En(this,1)}show(){const t=this,{element:e}=t;if(e&&r(e,"hide")){if(e.dispatchEvent(fn),fn.defaultPrevented)return;b(e,"fade"),clearTimeout(t.timer),t.timer=setTimeout(()=>function(t){const{element:e,options:n}=t;l(e,"hide"),n.animation?(C(e),b(e,"showing"),b(e,"show"),s(e,()=>yn(t))):yn(t)}(t),10)}}hide(t){const e=this,{element:n,options:o}=e;if(n&&r(n,"show")){if(n.dispatchEvent(gn),gn.defaultPrevented)return;clearTimeout(e.timer),e.timer=setTimeout(function(t){const{element:e,options:n}=t;l(e,"show"),n.animation?(C(e),s(e,()=>wn(t))):wn(t)}(e),t?10:o.delay)}}dispose(){const t=this,{element:e,options:n}=t;t.hide(),n.animation?s(e,()=>An(t)):An(t),super.dispose("Toast")}}Tn.init={component:"Toast",selector:".toast",constructor:Tn};const Cn=`[${y}="tooltip"],[data-tip="tooltip"]`,xn={title:null,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',placement:"top",animation:!0,customClass:null,delay:200,sanitizeFn:null},kn=d("show.bs.tooltip"),Hn=d("shown.bs.tooltip"),Nn=d("hide.bs.tooltip"),Ln=d("hidden.bs.tooltip");function Pn(t){const{element:e}=t;Mn(t),e.hasAttribute("data-original-title")&&Bn(t)}function Sn(t,e){const n=e?c:"removeEventListener";document[n]("touchstart",In,T),ye(t.element)||(window[n]("scroll",t.update,T),window[n]("resize",t.update,T))}function On(t){Sn(t,1),t.element.dispatchEvent(Hn)}function Dn(t){Sn(t),function(t){const{element:e,options:n,tooltip:o}=t;e.removeAttribute("aria-describedby"),n.container.removeChild(o),t.timer=null}(t),t.element.dispatchEvent(Ln)}function Mn(t,e){const n=e?c:"removeEventListener",{element:o}=t;ye(o)&&o[n]("mousemove",t.update,T),o[n]("mousedown",t.show),o[n]("mouseenter",t.show),o[n]("mouseleave",t.hide)}function Bn(t,e){const n=["data-original-title","title"],{element:o}=t;o.setAttribute(n[e?0:1],e||o.getAttribute(n[0])),o.removeAttribute(n[e?1:0])}function In({target:t}){const{tooltip:e,element:n}=this;e.contains(t)||t===n||n.contains(t)||this.hide()}class Wn extends h{constructor(t,e){const n=a(t);xn.title=n.getAttribute("title"),xn.container=Te(n),super("Tooltip",n,xn,e);this.tooltip=null,this.arrow=null,this.timer=null,this.enabled=!1;const{options:o}=this;this.options.container=ye(n)?xn.container:a(o.container),xn.container=null,xn.title=null,o.title&&(In.bind(this),this.update=this.update.bind(this),n.hasAttribute("title")&&Bn(this,o.title),this.id="tooltip-"+Ae(n),function(t){const{options:e,id:n}=t,o="bs-tooltip-"+ve[e.placement];let i=e.title.trim();if(e.sanitizeFn&&(i=e.sanitizeFn(i),e.template=e.sanitizeFn(e.template)),!i)return;t.tooltip=document.createElement("div");const{tooltip:s}=t;s.setAttribute("id",n);const l=document.createElement("div");l.innerHTML=e.template.trim(),s.className=l.firstChild.className,s.innerHTML=l.firstChild.innerHTML,a(".tooltip-inner",s).innerHTML=i,t.arrow=a(".tooltip-arrow",s),s.setAttribute("role","tooltip"),r(s,"tooltip")||b(s,"tooltip"),e.animation&&!r(s,"fade")&&b(s,"fade"),e.customClass&&!r(s,e.customClass)&&b(s,e.customClass),r(s,o)||b(s,o)}(this),Mn(this,1))}show(t){const e=t?this.Tooltip:this,{options:n,tooltip:o,element:i,id:a}=e;clearTimeout(e.timer),e.timer=setTimeout(()=>{if(!be(o,n.container)){if(i.dispatchEvent(kn),kn.defaultPrevented)return;n.container.appendChild(o),i.setAttribute("aria-describedby",a),e.update(t),r(o,"show")||b(o,"show"),n.animation?s(o,()=>On(e)):On(e)}},20)}hide(t){const e=t?this.Tooltip:this,{options:n,tooltip:o,element:i}=e;clearTimeout(e.timer),e.timer=setTimeout(()=>{if(be(o,n.container)){if(i.dispatchEvent(Nn),Nn.defaultPrevented)return;l(o,"show"),n.animation?s(o,()=>Dn(e)):Dn(e)}},n.delay)}update(t){we(this,t)}toggle(){const{tooltip:t,options:e}=this;be(t,e.container)?this.hide():this.show()}enable(){const t=this,{enabled:e}=t;e||(Mn(t,1),t.enabled=!e)}disable(){const t=this,{tooltip:e,options:n,enabled:o}=t;o&&(!be(e,n.container)&&n.animation?(t.hide(),setTimeout(()=>Mn(t),i(e)+n.delay+17)):Mn(t),t.enabled=!o)}toggleEnabled(){this.enabled?this.disable():this.enable()}dispose(){const t=this,{tooltip:e,options:n}=t;n.animation&&be(e,n.container)?(n.delay=0,t.hide(),s(e,()=>Pn(t))):Pn(t),super.dispose("Tooltip")}}Wn.init={component:"Tooltip",selector:Cn,constructor:Wn};const Rn={Alert:v.init,Button:A.init,Carousel:Y.init,Collapse:et.init,Dropdown:Ht.init,Modal:ee.init,Offcanvas:ge.init,Popover:Re.init,ScrollSpy:Ve.init,Tab:pn.init,Toast:Tn.init,Tooltip:Wn.init};function jn(t){const e=t instanceof Element?t:document;Object.keys(Rn).forEach(t=>{const{constructor:n,selector:o}=Rn[t];var i,s;i=n,s=e.querySelectorAll(o),Array.from(s).forEach(t=>new i(t))})}return document.body?jn():document.addEventListener("DOMContentLoaded",()=>jn(),{once:!0}),{Alert:v,Button:A,Carousel:Y,Collapse:et,Dropdown:Ht,Modal:ee,Offcanvas:ge,Popover:Re,ScrollSpy:Ve,Tab:pn,Toast:Tn,Tooltip:Wn,initCallback:jn,Version:"3.0.15"}}));