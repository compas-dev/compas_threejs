(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function oh(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ie={},Ms=[],gi=()=>{},Jm=()=>!1,vl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ah=e=>e.startsWith("onUpdate:"),rn=Object.assign,lh=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},z_=Object.prototype.hasOwnProperty,ve=(e,t)=>z_.call(e,t),Kt=Array.isArray,ws=e=>Xo(e)==="[object Map]",$m=e=>Xo(e)==="[object Set]",Vf=e=>Xo(e)==="[object Date]",jt=e=>typeof e=="function",Ge=e=>typeof e=="string",jn=e=>typeof e=="symbol",xe=e=>e!==null&&typeof e=="object",Zm=e=>(xe(e)||jt(e))&&jt(e.then)&&jt(e.catch),Km=Object.prototype.toString,Xo=e=>Km.call(e),V_=e=>Xo(e).slice(8,-1),Qm=e=>Xo(e)==="[object Object]",xl=e=>Ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,yo=oh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yl=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},H_=/-\w/g,Rn=yl(e=>e.replace(H_,t=>t.slice(1).toUpperCase())),G_=/\B([A-Z])/g,$r=yl(e=>e.replace(G_,"-$1").toLowerCase()),Sl=yl(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ga=yl(e=>e?`on${Sl(e)}`:""),mr=(e,t)=>!Object.is(e,t),zl=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},jm=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},W_=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Hf;const bl=()=>Hf||(Hf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ws(e){if(Kt(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=Ge(i)?J_(i):Ws(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(Ge(e)||xe(e))return e}const X_=/;(?![^(]*\))/g,q_=/:([^]+)/,Y_=/\/\*[^]*?\*\//g;function J_(e){const t={};return e.replace(Y_,"").split(X_).forEach(n=>{if(n){const i=n.split(q_);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Ml(e){let t="";if(Ge(e))t=e;else if(Kt(e))for(let n=0;n<e.length;n++){const i=Ml(e[n]);i&&(t+=i+" ")}else if(xe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const $_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z_=oh($_);function tg(e){return!!e||e===""}function K_(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=ch(e[i],t[i]);return n}function ch(e,t){if(e===t)return!0;let n=Vf(e),i=Vf(t);if(n||i)return n&&i?e.getTime()===t.getTime():!1;if(n=jn(e),i=jn(t),n||i)return e===t;if(n=Kt(e),i=Kt(t),n||i)return n&&i?K_(e,t):!1;if(n=xe(e),i=xe(t),n||i){if(!n||!i)return!1;const r=Object.keys(e).length,s=Object.keys(t).length;if(r!==s)return!1;for(const o in e){const a=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!ch(e[o],t[o]))return!1}}return String(e)===String(t)}const eg=e=>!!(e&&e.__v_isRef===!0),zr=e=>Ge(e)?e:e==null?"":Kt(e)||xe(e)&&(e.toString===Km||!jt(e.toString))?eg(e)?zr(e.value):JSON.stringify(e,ng,2):String(e),ng=(e,t)=>eg(t)?ng(e,t.value):ws(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,r],s)=>(n[Vl(i,s)+" =>"]=r,n),{})}:$m(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Vl(n))}:jn(t)?Vl(t):xe(t)&&!Kt(t)&&!Qm(t)?String(t):t,Vl=(e,t="")=>{var n;return jn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let An;class Q_{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=An,!t&&An&&(this.index=(An.scopes||(An.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=An;try{return An=this,t()}finally{An=n}}}on(){++this._on===1&&(this.prevScope=An,An=this)}off(){this._on>0&&--this._on===0&&(An=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function j_(){return An}let De;const Hl=new WeakSet;class ig{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,An&&An.active&&An.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hl.has(this)&&(Hl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Gf(this),og(this);const t=De,n=Qn;De=this,Qn=!0;try{return this.fn()}finally{ag(this),De=t,Qn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)fh(t);this.deps=this.depsTail=void 0,Gf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wc(this)&&this.run()}get dirty(){return Wc(this)}}let rg=0,So,bo;function sg(e,t=!1){if(e.flags|=8,t){e.next=bo,bo=e;return}e.next=So,So=e}function uh(){rg++}function hh(){if(--rg>0)return;if(bo){let t=bo;for(bo=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;So;){let t=So;for(So=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function og(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ag(e){let t,n=e.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),fh(i),tv(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}e.deps=t,e.depsTail=n}function Wc(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(lg(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function lg(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Do)||(e.globalVersion=Do,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Wc(e))))return;e.flags|=2;const t=e.dep,n=De,i=Qn;De=e,Qn=!0;try{og(e);const r=e.fn(e._value);(t.version===0||mr(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{De=n,Qn=i,ag(e),e.flags&=-3}}function fh(e,t=!1){const{dep:n,prevSub:i,nextSub:r}=e;if(i&&(i.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)fh(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function tv(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Qn=!0;const cg=[];function Wi(){cg.push(Qn),Qn=!1}function Xi(){const e=cg.pop();Qn=e===void 0?!0:e}function Gf(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=De;De=void 0;try{t()}finally{De=n}}}let Do=0;class ev{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class dh{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!De||!Qn||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new ev(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,ug(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=i)}return n}trigger(t){this.version++,Do++,this.notify(t)}notify(t){uh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{hh()}}}function ug(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)ug(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const el=new WeakMap,Vr=Symbol(""),Xc=Symbol(""),Io=Symbol("");function ln(e,t,n){if(Qn&&De){let i=el.get(e);i||el.set(e,i=new Map);let r=i.get(n);r||(i.set(n,r=new dh),r.map=i,r.key=n),r.track()}}function ki(e,t,n,i,r,s){const o=el.get(e);if(!o){Do++;return}const a=l=>{l&&l.trigger()};if(uh(),t==="clear")o.forEach(a);else{const l=Kt(e),c=l&&xl(n);if(l&&n==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Io||!jn(f)&&f>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Io)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Vr)),ws(e)&&a(o.get(Xc)));break;case"delete":l||(a(o.get(Vr)),ws(e)&&a(o.get(Xc)));break;case"set":ws(e)&&a(o.get(Vr));break}}hh()}function nv(e,t){const n=el.get(e);return n&&n.get(t)}function es(e){const t=_e(e);return t===e?t:(ln(t,"iterate",Io),Vn(e)?t:t.map(ti))}function wl(e){return ln(e=_e(e),"iterate",Io),e}function rr(e,t){return qi(e)?Ns(Hr(e)?ti(t):t):ti(t)}const iv={__proto__:null,[Symbol.iterator](){return Gl(this,Symbol.iterator,e=>rr(this,e))},concat(...e){return es(this).concat(...e.map(t=>Kt(t)?es(t):t))},entries(){return Gl(this,"entries",e=>(e[1]=rr(this,e[1]),e))},every(e,t){return Ti(this,"every",e,t,void 0,arguments)},filter(e,t){return Ti(this,"filter",e,t,n=>n.map(i=>rr(this,i)),arguments)},find(e,t){return Ti(this,"find",e,t,n=>rr(this,n),arguments)},findIndex(e,t){return Ti(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ti(this,"findLast",e,t,n=>rr(this,n),arguments)},findLastIndex(e,t){return Ti(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ti(this,"forEach",e,t,void 0,arguments)},includes(...e){return Wl(this,"includes",e)},indexOf(...e){return Wl(this,"indexOf",e)},join(e){return es(this).join(e)},lastIndexOf(...e){return Wl(this,"lastIndexOf",e)},map(e,t){return Ti(this,"map",e,t,void 0,arguments)},pop(){return js(this,"pop")},push(...e){return js(this,"push",e)},reduce(e,...t){return Wf(this,"reduce",e,t)},reduceRight(e,...t){return Wf(this,"reduceRight",e,t)},shift(){return js(this,"shift")},some(e,t){return Ti(this,"some",e,t,void 0,arguments)},splice(...e){return js(this,"splice",e)},toReversed(){return es(this).toReversed()},toSorted(e){return es(this).toSorted(e)},toSpliced(...e){return es(this).toSpliced(...e)},unshift(...e){return js(this,"unshift",e)},values(){return Gl(this,"values",e=>rr(this,e))}};function Gl(e,t,n){const i=wl(e),r=i[t]();return i!==e&&!Vn(e)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const rv=Array.prototype;function Ti(e,t,n,i,r,s){const o=wl(e),a=o!==e&&!Vn(e),l=o[t];if(l!==rv[t]){const h=l.apply(e,s);return a?ti(h):h}let c=n;o!==e&&(a?c=function(h,f){return n.call(this,rr(e,h),f,e)}:n.length>2&&(c=function(h,f){return n.call(this,h,f,e)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Wf(e,t,n,i){const r=wl(e);let s=n;return r!==e&&(Vn(e)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,e)}):s=function(o,a,l){return n.call(this,o,rr(e,a),l,e)}),r[t](s,...i)}function Wl(e,t,n){const i=_e(e);ln(i,"iterate",Io);const r=i[t](...n);return(r===-1||r===!1)&&El(n[0])?(n[0]=_e(n[0]),i[t](...n)):r}function js(e,t,n=[]){Wi(),uh();const i=_e(e)[t].apply(e,n);return hh(),Xi(),i}const sv=oh("__proto__,__v_isRef,__isVue"),hg=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(jn));function ov(e){jn(e)||(e=String(e));const t=_e(this);return ln(t,"has",e),t.hasOwnProperty(e)}class fg{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?gv:gg:s?mg:pg).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Kt(t);if(!r){let l;if(o&&(l=iv[n]))return l;if(n==="hasOwnProperty")return ov}const a=Reflect.get(t,n,ze(t)?t:i);if((jn(n)?hg.has(n):sv(n))||(r||ln(t,"get",n),s))return a;if(ze(a)){const l=o&&xl(n)?a:a.value;return r&&xe(l)?Yc(l):l}return xe(a)?r?Yc(a):_r(a):a}}class dg extends fg{constructor(t=!1){super(!1,t)}set(t,n,i,r){let s=t[n];const o=Kt(t)&&xl(n);if(!this._isShallow){const c=qi(s);if(!Vn(i)&&!qi(i)&&(s=_e(s),i=_e(i)),!o&&ze(s)&&!ze(i))return c||(s.value=i),!0}const a=o?Number(n)<t.length:ve(t,n),l=Reflect.set(t,n,i,ze(t)?t:r);return t===_e(r)&&(a?mr(i,s)&&ki(t,"set",n,i):ki(t,"add",n,i)),l}deleteProperty(t,n){const i=ve(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&i&&ki(t,"delete",n,void 0),r}has(t,n){const i=Reflect.has(t,n);return(!jn(n)||!hg.has(n))&&ln(t,"has",n),i}ownKeys(t){return ln(t,"iterate",Kt(t)?"length":Vr),Reflect.ownKeys(t)}}class av extends fg{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const lv=new dg,cv=new av,uv=new dg(!0);const qc=e=>e,ra=e=>Reflect.getPrototypeOf(e);function hv(e,t,n){return function(...i){const r=this.__v_raw,s=_e(r),o=ws(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=r[e](...i),u=n?qc:t?Ns:ti;return!t&&ln(s,"iterate",l?Xc:Vr),rn(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function sa(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function fv(e,t){const n={get(r){const s=this.__v_raw,o=_e(s),a=_e(r);e||(mr(r,a)&&ln(o,"get",r),ln(o,"get",a));const{has:l}=ra(o),c=t?qc:e?Ns:ti;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!e&&ln(_e(r),"iterate",Vr),r.size},has(r){const s=this.__v_raw,o=_e(s),a=_e(r);return e||(mr(r,a)&&ln(o,"has",r),ln(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=_e(a),c=t?qc:e?Ns:ti;return!e&&ln(l,"iterate",Vr),a.forEach((u,h)=>r.call(s,c(u),c(h),o))}};return rn(n,e?{add:sa("add"),set:sa("set"),delete:sa("delete"),clear:sa("clear")}:{add(r){!t&&!Vn(r)&&!qi(r)&&(r=_e(r));const s=_e(this);return ra(s).has.call(s,r)||(s.add(r),ki(s,"add",r,r)),this},set(r,s){!t&&!Vn(s)&&!qi(s)&&(s=_e(s));const o=_e(this),{has:a,get:l}=ra(o);let c=a.call(o,r);c||(r=_e(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?mr(s,u)&&ki(o,"set",r,s):ki(o,"add",r,s),this},delete(r){const s=_e(this),{has:o,get:a}=ra(s);let l=o.call(s,r);l||(r=_e(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ki(s,"delete",r,void 0),c},clear(){const r=_e(this),s=r.size!==0,o=r.clear();return s&&ki(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=hv(r,e,t)}),n}function ph(e,t){const n=fv(e,t);return(i,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?i:Reflect.get(ve(n,r)&&r in i?n:i,r,s)}const dv={get:ph(!1,!1)},pv={get:ph(!1,!0)},mv={get:ph(!0,!1)};const pg=new WeakMap,mg=new WeakMap,gg=new WeakMap,gv=new WeakMap;function _v(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vv(e){return e.__v_skip||!Object.isExtensible(e)?0:_v(V_(e))}function _r(e){return qi(e)?e:mh(e,!1,lv,dv,pg)}function xv(e){return mh(e,!1,uv,pv,mg)}function Yc(e){return mh(e,!0,cv,mv,gg)}function mh(e,t,n,i,r){if(!xe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=vv(e);if(s===0)return e;const o=r.get(e);if(o)return o;const a=new Proxy(e,s===2?i:n);return r.set(e,a),a}function Hr(e){return qi(e)?Hr(e.__v_raw):!!(e&&e.__v_isReactive)}function qi(e){return!!(e&&e.__v_isReadonly)}function Vn(e){return!!(e&&e.__v_isShallow)}function El(e){return e?!!e.__v_raw:!1}function _e(e){const t=e&&e.__v_raw;return t?_e(t):e}function _g(e){return!ve(e,"__v_skip")&&Object.isExtensible(e)&&jm(e,"__v_skip",!0),e}const ti=e=>xe(e)?_r(e):e,Ns=e=>xe(e)?Yc(e):e;function ze(e){return e?e.__v_isRef===!0:!1}function hn(e){return vg(e,!1)}function yv(e){return vg(e,!0)}function vg(e,t){return ze(e)?e:new Sv(e,t)}class Sv{constructor(t,n){this.dep=new dh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:_e(t),this._value=n?t:ti(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||Vn(t)||qi(t);t=i?t:_e(t),mr(t,n)&&(this._rawValue=t,this._value=i?t:ti(t),this.dep.trigger())}}function St(e){return ze(e)?e.value:e}function gh(e){return jt(e)?e():St(e)}const bv={get:(e,t,n)=>t==="__v_raw"?e:St(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return ze(r)&&!ze(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function xg(e){return Hr(e)?e:new Proxy(e,bv)}function Lo(e){const t=Kt(e)?new Array(e.length):{};for(const n in e)t[n]=yg(e,n);return t}class Mv{constructor(t,n,i){this._object=t,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=_e(t);let r=!0,s=t;if(!Kt(t)||!xl(String(n)))do r=!El(s)||Vn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let t=this._object[this._key];return this._shallow&&(t=St(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&ze(this._raw[this._key])){const n=this._object[this._key];if(ze(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return nv(this._raw,this._key)}}class wv{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ev(e,t,n){return ze(e)?e:jt(e)?new wv(e):xe(e)&&arguments.length>1?yg(e,t,n):hn(e)}function yg(e,t,n){return new Mv(e,t,n)}class Tv{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new dh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Do-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return sg(this,!0),!0}get value(){const t=this.dep.track();return lg(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Av(e,t,n=!1){let i,r;return jt(e)?i=e:(i=e.get,r=e.set),new Tv(i,r,n)}const oa={},nl=new WeakMap;let Lr;function Pv(e,t=!1,n=Lr){if(n){let i=nl.get(n);i||nl.set(n,i=[]),i.push(e)}}function Cv(e,t,n=Ie){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=x=>r?x:Vn(x)||r===!1||r===0?ar(x,1):ar(x);let u,h,f,p,g=!1,v=!1;if(ze(e)?(h=()=>e.value,g=Vn(e)):Hr(e)?(h=()=>c(e),g=!0):Kt(e)?(v=!0,g=e.some(x=>Hr(x)||Vn(x)),h=()=>e.map(x=>{if(ze(x))return x.value;if(Hr(x))return c(x);if(jt(x))return l?l(x,2):x()})):jt(e)?t?h=l?()=>l(e,2):e:h=()=>{if(f){Wi();try{f()}finally{Xi()}}const x=Lr;Lr=u;try{return l?l(e,3,[p]):e(p)}finally{Lr=x}}:h=gi,t&&r){const x=h,A=r===!0?1/0:r;h=()=>ar(x(),A)}const m=j_(),d=()=>{u.stop(),m&&m.active&&lh(m.effects,u)};if(s&&t){const x=t;t=(...A)=>{x(...A),d()}}let S=v?new Array(e.length).fill(oa):oa;const y=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const A=u.run();if(r||g||(v?A.some((P,C)=>mr(P,S[C])):mr(A,S))){f&&f();const P=Lr;Lr=u;try{const C=[A,S===oa?void 0:v&&S[0]===oa?[]:S,p];S=A,l?l(t,3,C):t(...C)}finally{Lr=P}}}else u.run()};return a&&a(y),u=new ig(h),u.scheduler=o?()=>o(y,!1):y,p=x=>Pv(x,!1,u),f=u.onStop=()=>{const x=nl.get(u);if(x){if(l)l(x,4);else for(const A of x)A();nl.delete(u)}},t?i?y(!0):S=u.run():o?o(y.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function ar(e,t=1/0,n){if(t<=0||!xe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ze(e))ar(e.value,t,n);else if(Kt(e))for(let i=0;i<e.length;i++)ar(e[i],t,n);else if($m(e)||ws(e))e.forEach(i=>{ar(i,t,n)});else if(Qm(e)){for(const i in e)ar(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&ar(e[i],t,n)}return e}function qo(e,t,n,i){try{return i?e(...i):e()}catch(r){Tl(r,t,n)}}function xi(e,t,n,i){if(jt(e)){const r=qo(e,t,n,i);return r&&Zm(r)&&r.catch(s=>{Tl(s,t,n)}),r}if(Kt(e)){const r=[];for(let s=0;s<e.length;s++)r.push(xi(e[s],t,n,i));return r}}function Tl(e,t,n,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Ie;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](e,l,c)===!1)return}a=a.parent}if(s){Wi(),qo(s,null,10,[e,l,c]),Xi();return}}Rv(e,n,r,i,o)}function Rv(e,t,n,i=!0,r=!1){if(r)throw e;console.error(e)}const vn=[];let ci=-1;const Es=[];let sr=null,_s=0;const Sg=Promise.resolve();let il=null;function bg(e){const t=il||Sg;return e?t.then(this?e.bind(this):e):t}function Dv(e){let t=ci+1,n=vn.length;for(;t<n;){const i=t+n>>>1,r=vn[i],s=No(r);s<e||s===e&&r.flags&2?t=i+1:n=i}return t}function _h(e){if(!(e.flags&1)){const t=No(e),n=vn[vn.length-1];!n||!(e.flags&2)&&t>=No(n)?vn.push(e):vn.splice(Dv(t),0,e),e.flags|=1,Mg()}}function Mg(){il||(il=Sg.then(Eg))}function Iv(e){Kt(e)?Es.push(...e):sr&&e.id===-1?sr.splice(_s+1,0,e):e.flags&1||(Es.push(e),e.flags|=1),Mg()}function Xf(e,t,n=ci+1){for(;n<vn.length;n++){const i=vn[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;vn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function wg(e){if(Es.length){const t=[...new Set(Es)].sort((n,i)=>No(n)-No(i));if(Es.length=0,sr){sr.push(...t);return}for(sr=t,_s=0;_s<sr.length;_s++){const n=sr[_s];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}sr=null,_s=0}}const No=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Eg(e){try{for(ci=0;ci<vn.length;ci++){const t=vn[ci];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),qo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ci<vn.length;ci++){const t=vn[ci];t&&(t.flags&=-2)}ci=-1,vn.length=0,wg(),il=null,(vn.length||Es.length)&&Eg()}}let yn=null,Tg=null;function rl(e){const t=yn;return yn=e,Tg=e&&e.type.__scopeId||null,t}function dn(e,t=yn,n){if(!t||e._n)return e;const i=(...r)=>{i._d&&al(-1);const s=rl(t);let o;try{o=e(...r)}finally{rl(s),i._d&&al(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Mr(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Wi(),xi(l,n,8,[e.el,a,e,t]),Xi())}}function vh(e,t){if(cn){let n=cn.provides;const i=cn.parent&&cn.parent.provides;i===n&&(n=cn.provides=Object.create(i)),n[e]=t}}function Ts(e,t,n=!1){const i=Xs();if(i||Ps){let r=Ps?Ps._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&jt(t)?t.call(i&&i.proxy):t}}const Lv=Symbol.for("v-scx"),Nv=()=>Ts(Lv);function Uv(e,t){return xh(e,null,t)}function Gr(e,t,n){return xh(e,t,n)}function xh(e,t,n=Ie){const{immediate:i,deep:r,flush:s,once:o}=n,a=rn({},n),l=t&&i||!t&&s!=="post";let c;if(Fo){if(s==="sync"){const p=Nv();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=gi,p.resume=gi,p.pause=gi,p}}const u=cn;a.call=(p,g,v)=>xi(p,u,g,v);let h=!1;s==="post"?a.scheduler=p=>{Tn(p,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():_h(p)}),a.augmentJob=p=>{t&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Cv(e,t,a);return Fo&&(c?c.push(f):l&&f()),f}function Ov(e,t,n){const i=this.proxy,r=Ge(e)?e.includes(".")?Ag(i,e):()=>i[e]:e.bind(i,i);let s;jt(t)?s=t:(s=t.handler,n=t);const o=Jo(this),a=xh(r,s.bind(i),n);return o(),a}function Ag(e,t){const n=t.split(".");return()=>{let i=e;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Fv=Symbol("_vte"),kv=e=>e.__isTeleport,Bv=Symbol("_leaveCb");function yh(e,t){e.shapeFlag&6&&e.component?(e.transition=t,yh(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function $e(e,t){return jt(e)?rn({name:e.name},t,{setup:e}):e}function Pg(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function qf(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const sl=new WeakMap;function Mo(e,t,n,i,r=!1){if(Kt(e)){e.forEach((v,m)=>Mo(v,t&&(Kt(t)?t[m]:t),n,i,r));return}if(As(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Mo(e,t,n,i.component.subTree);return}const s=i.shapeFlag&4?Th(i.component):i.el,o=r?null:s,{i:a,r:l}=e,c=t&&t.r,u=a.refs===Ie?a.refs={}:a.refs,h=a.setupState,f=_e(h),p=h===Ie?Jm:v=>qf(u,v)?!1:ve(f,v),g=(v,m)=>!(m&&qf(u,m));if(c!=null&&c!==l){if(Yf(t),Ge(c))u[c]=null,p(c)&&(h[c]=null);else if(ze(c)){const v=t;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(jt(l))qo(l,a,12,[o,u]);else{const v=Ge(l),m=ze(l);if(v||m){const d=()=>{if(e.f){const S=v?p(l)?h[l]:u[l]:g()||!e.k?l.value:u[e.k];if(r)Kt(S)&&lh(S,s);else if(Kt(S))S.includes(s)||S.push(s);else if(v)u[l]=[s],p(l)&&(h[l]=u[l]);else{const y=[s];g(l,e.k)&&(l.value=y),e.k&&(u[e.k]=y)}}else v?(u[l]=o,p(l)&&(h[l]=o)):m&&(g(l,e.k)&&(l.value=o),e.k&&(u[e.k]=o))};if(o){const S=()=>{d(),sl.delete(e)};S.id=-1,sl.set(e,S),Tn(S,n)}else Yf(e),d()}}}function Yf(e){const t=sl.get(e);t&&(t.flags|=8,sl.delete(e))}bl().requestIdleCallback;bl().cancelIdleCallback;const As=e=>!!e.type.__asyncLoader,Cg=e=>e.type.__isKeepAlive;function zv(e,t){Rg(e,"a",t)}function Vv(e,t){Rg(e,"da",t)}function Rg(e,t,n=cn){const i=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Al(t,i,n),n){let r=n.parent;for(;r&&r.parent;)Cg(r.parent.vnode)&&Hv(i,t,n,r),r=r.parent}}function Hv(e,t,n,i){const r=Al(t,e,i,!0);Sh(()=>{lh(i[t],r)},n)}function Al(e,t,n=cn,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{Wi();const a=Jo(n),l=xi(t,n,e,o);return a(),Xi(),l});return i?r.unshift(s):r.push(s),s}}const $i=e=>(t,n=cn)=>{(!Fo||e==="sp")&&Al(e,(...i)=>t(...i),n)},Gv=$i("bm"),Yo=$i("m"),Wv=$i("bu"),Xv=$i("u"),qv=$i("bum"),Sh=$i("um"),Yv=$i("sp"),Jv=$i("rtg"),$v=$i("rtc");function Zv(e,t=cn){Al("ec",e,t)}const Kv="components",Dg=Symbol.for("v-ndc");function Qv(e){return Ge(e)?jv(Kv,e,!1)||e:e||Dg}function jv(e,t,n=!0,i=!1){const r=yn||cn;if(r){const s=r.type;{const a=Ox(s,!1);if(a&&(a===t||a===Rn(t)||a===Sl(Rn(t))))return s}const o=Jf(r[e]||s[e],t)||Jf(r.appContext[e],t);return!o&&i?s:o}}function Jf(e,t){return e&&(e[t]||e[Rn(t)]||e[Sl(Rn(t))])}function Pl(e,t,n,i){let r;const s=n,o=Kt(e);if(o||Ge(e)){const a=o&&Hr(e);let l=!1,c=!1;a&&(l=!Vn(e),c=qi(e),e=wl(e)),r=new Array(e.length);for(let u=0,h=e.length;u<h;u++)r[u]=t(l?c?Ns(ti(e[u])):ti(e[u]):e[u],u,void 0,s)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,s)}else if(xe(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=t(e[u],u,l,s)}}else r=[];return r}function Mi(e,t,n={},i,r){if(yn.ce||yn.parent&&As(yn.parent)&&yn.parent.ce){const c=Object.keys(n).length>0;return ue(),Ve(Ye,null,[Je("slot",n,i)],c?-2:64)}let s=e[t];s&&s._c&&(s._d=!1),ue();const o=s&&Ig(s(n)),a=n.key||o&&o.key,l=Ve(Ye,{key:(a&&!jn(a)?a:`_${t}`)+(!o&&i?"_fb":"")},o||[],o&&e._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Ig(e){return e.some(t=>Oo(t)?!(t.type===yi||t.type===Ye&&!Ig(t.children)):!0)?e:null}const Jc=e=>e?Qg(e)?Th(e):Jc(e.parent):null,wo=rn(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Jc(e.parent),$root:e=>Jc(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ng(e),$forceUpdate:e=>e.f||(e.f=()=>{_h(e.update)}),$nextTick:e=>e.n||(e.n=bg.bind(e.proxy)),$watch:e=>Ov.bind(e)}),Xl=(e,t)=>e!==Ie&&!e.__isScriptSetup&&ve(e,t),tx={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=e;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(Xl(i,t))return o[t]=1,i[t];if(r!==Ie&&ve(r,t))return o[t]=2,r[t];if(ve(s,t))return o[t]=3,s[t];if(n!==Ie&&ve(n,t))return o[t]=4,n[t];$c&&(o[t]=0)}}const c=wo[t];let u,h;if(c)return t==="$attrs"&&ln(e.attrs,"get",""),c(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==Ie&&ve(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,ve(h,t))return h[t]},set({_:e},t,n){const{data:i,setupState:r,ctx:s}=e;return Xl(r,t)?(r[t]=n,!0):i!==Ie&&ve(i,t)?(i[t]=n,!0):ve(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||e!==Ie&&a[0]!=="$"&&ve(e,a)||Xl(t,a)||ve(s,a)||ve(i,a)||ve(wo,a)||ve(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ve(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function $f(e){return Kt(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let $c=!0;function ex(e){const t=Ng(e),n=e.proxy,i=e.ctx;$c=!1,t.beforeCreate&&Zf(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:d,beforeUnmount:S,destroyed:y,unmounted:x,render:A,renderTracked:P,renderTriggered:C,errorCaptured:R,serverPrefetch:b,expose:M,inheritAttrs:L,components:V,directives:q,filters:j}=t;if(c&&nx(c,i,null),o)for(const k in o){const H=o[k];jt(H)&&(i[k]=H.bind(n))}if(r){const k=r.call(n,n);xe(k)&&(e.data=_r(k))}if($c=!0,s)for(const k in s){const H=s[k],ct=jt(H)?H.bind(n,n):jt(H.get)?H.get.bind(n,n):gi,pt=!jt(H)&&jt(H.set)?H.set.bind(n):gi,ft=pe({get:ct,set:pt});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>ft.value,set:kt=>ft.value=kt})}if(a)for(const k in a)Lg(a[k],i,n,k);if(l){const k=jt(l)?l.call(n):l;Reflect.ownKeys(k).forEach(H=>{vh(H,k[H])})}u&&Zf(u,e,"c");function W(k,H){Kt(H)?H.forEach(ct=>k(ct.bind(n))):H&&k(H.bind(n))}if(W(Gv,h),W(Yo,f),W(Wv,p),W(Xv,g),W(zv,v),W(Vv,m),W(Zv,R),W($v,P),W(Jv,C),W(qv,S),W(Sh,x),W(Yv,b),Kt(M))if(M.length){const k=e.exposed||(e.exposed={});M.forEach(H=>{Object.defineProperty(k,H,{get:()=>n[H],set:ct=>n[H]=ct,enumerable:!0})})}else e.exposed||(e.exposed={});A&&e.render===gi&&(e.render=A),L!=null&&(e.inheritAttrs=L),V&&(e.components=V),q&&(e.directives=q),b&&Pg(e)}function nx(e,t,n=gi){Kt(e)&&(e=Zc(e));for(const i in e){const r=e[i];let s;xe(r)?"default"in r?s=Ts(r.from||i,r.default,!0):s=Ts(r.from||i):s=Ts(r),ze(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function Zf(e,t,n){xi(Kt(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function Lg(e,t,n,i){let r=i.includes(".")?Ag(n,i):()=>n[i];if(Ge(e)){const s=t[e];jt(s)&&Gr(r,s)}else if(jt(e))Gr(r,e.bind(n));else if(xe(e))if(Kt(e))e.forEach(s=>Lg(s,t,n,i));else{const s=jt(e.handler)?e.handler.bind(n):t[e.handler];jt(s)&&Gr(r,s,e)}}function Ng(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!n&&!i?l=t:(l={},r.length&&r.forEach(c=>ol(l,c,o,!0)),ol(l,t,o)),xe(t)&&s.set(t,l),l}function ol(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&ol(e,s,n,!0),r&&r.forEach(o=>ol(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=ix[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const ix={data:Kf,props:Qf,emits:Qf,methods:ho,computed:ho,beforeCreate:mn,created:mn,beforeMount:mn,mounted:mn,beforeUpdate:mn,updated:mn,beforeDestroy:mn,beforeUnmount:mn,destroyed:mn,unmounted:mn,activated:mn,deactivated:mn,errorCaptured:mn,serverPrefetch:mn,components:ho,directives:ho,watch:sx,provide:Kf,inject:rx};function Kf(e,t){return t?e?function(){return rn(jt(e)?e.call(this,this):e,jt(t)?t.call(this,this):t)}:t:e}function rx(e,t){return ho(Zc(e),Zc(t))}function Zc(e){if(Kt(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function mn(e,t){return e?[...new Set([].concat(e,t))]:t}function ho(e,t){return e?rn(Object.create(null),e,t):t}function Qf(e,t){return e?Kt(e)&&Kt(t)?[...new Set([...e,...t])]:rn(Object.create(null),$f(e),$f(t??{})):t}function sx(e,t){if(!e)return t;if(!t)return e;const n=rn(Object.create(null),e);for(const i in t)n[i]=mn(e[i],t[i]);return n}function Ug(){return{app:null,config:{isNativeTag:Jm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ox=0;function ax(e,t){return function(i,r=null){jt(i)||(i=rn({},i)),r!=null&&!xe(r)&&(r=null);const s=Ug(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:ox++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:kx,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&jt(u.install)?(o.add(u),u.install(c,...h)):jt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,f){if(!l){const p=c._ceVNode||Je(i,r);return p.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),e(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Th(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(xi(a,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=Ps;Ps=c;try{return u()}finally{Ps=h}}};return c}}let Ps=null;const lx=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Rn(t)}Modifiers`]||e[`${$r(t)}Modifiers`];function cx(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||Ie;let r=n;const s=t.startsWith("update:"),o=s&&lx(i,t.slice(7));o&&(o.trim&&(r=n.map(u=>Ge(u)?u.trim():u)),o.number&&(r=n.map(W_)));let a,l=i[a=Ga(t)]||i[a=Ga(Rn(t))];!l&&s&&(l=i[a=Ga($r(t))]),l&&xi(l,e,6,r);const c=i[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,xi(c,e,6,r)}}const ux=new WeakMap;function Og(e,t,n=!1){const i=n?ux:t.emitsCache,r=i.get(e);if(r!==void 0)return r;const s=e.emits;let o={},a=!1;if(!jt(e)){const l=c=>{const u=Og(c,t,!0);u&&(a=!0,rn(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(xe(e)&&i.set(e,null),null):(Kt(s)?s.forEach(l=>o[l]=null):rn(o,s),xe(e)&&i.set(e,o),o)}function Cl(e,t){return!e||!vl(t)?!1:(t=t.slice(2).replace(/Once$/,""),ve(e,t[0].toLowerCase()+t.slice(1))||ve(e,$r(t))||ve(e,t))}function jf(e){const{type:t,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:p,ctx:g,inheritAttrs:v}=e,m=rl(e);let d,S;try{if(n.shapeFlag&4){const x=r||i,A=x;d=hi(c.call(A,x,u,h,p,f,g)),S=a}else{const x=t;d=hi(x.length>1?x(h,{attrs:a,slots:o,emit:l}):x(h,null)),S=t.props?a:hx(a)}}catch(x){Eo.length=0,Tl(x,e,1),d=Je(yi)}let y=d;if(S&&v!==!1){const x=Object.keys(S),{shapeFlag:A}=y;x.length&&A&7&&(s&&x.some(ah)&&(S=fx(S,s)),y=Xr(y,S,!1,!0))}return n.dirs&&(y=Xr(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&yh(y,n.transition),d=y,rl(m),d}const hx=e=>{let t;for(const n in e)(n==="class"||n==="style"||vl(n))&&((t||(t={}))[n]=e[n]);return t},fx=(e,t)=>{const n={};for(const i in e)(!ah(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function dx(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?td(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(Fg(o,i,f)&&!Cl(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?td(i,o,c):!0:!!o;return!1}function td(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Fg(t,e,s)&&!Cl(n,s))return!0}return!1}function Fg(e,t,n){const i=e[n],r=t[n];return n==="style"&&xe(i)&&xe(r)?!ch(i,r):i!==r}function px({vnode:e,parent:t},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=n,t=t.parent;else break}}const kg={},Bg=()=>Object.create(kg),zg=e=>Object.getPrototypeOf(e)===kg;function mx(e,t,n,i=!1){const r={},s=Bg();e.propsDefaults=Object.create(null),Vg(e,t,r,s);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=i?r:xv(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function gx(e,t,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=e,a=_e(r),[l]=e.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Cl(e.emitsOptions,f))continue;const p=t[f];if(l)if(ve(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=Rn(f);r[g]=Kc(l,a,g,p,e,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{Vg(e,t,r,s)&&(c=!0);let u;for(const h in a)(!t||!ve(t,h)&&((u=$r(h))===h||!ve(t,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Kc(l,a,h,void 0,e,!0)):delete r[h]);if(s!==a)for(const h in s)(!t||!ve(t,h))&&(delete s[h],c=!0)}c&&ki(e.attrs,"set","")}function Vg(e,t,n,i){const[r,s]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(yo(l))continue;const c=t[l];let u;r&&ve(r,u=Rn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Cl(e.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=_e(n),c=a||Ie;for(let u=0;u<s.length;u++){const h=s[u];n[h]=Kc(r,l,h,c[h],e,!ve(c,h))}}return o}function Kc(e,t,n,i,r,s){const o=e[n];if(o!=null){const a=ve(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&jt(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Jo(r);i=c[n]=l.call(null,t),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===$r(n))&&(i=!0))}return i}const _x=new WeakMap;function Hg(e,t,n=!1){const i=n?_x:t.propsCache,r=i.get(e);if(r)return r;const s=e.props,o={},a=[];let l=!1;if(!jt(e)){const u=h=>{l=!0;const[f,p]=Hg(h,t,!0);rn(o,f),p&&a.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return xe(e)&&i.set(e,Ms),Ms;if(Kt(s))for(let u=0;u<s.length;u++){const h=Rn(s[u]);ed(h)&&(o[h]=Ie)}else if(s)for(const u in s){const h=Rn(u);if(ed(h)){const f=s[u],p=o[h]=Kt(f)||jt(f)?{type:f}:rn({},f),g=p.type;let v=!1,m=!0;if(Kt(g))for(let d=0;d<g.length;++d){const S=g[d],y=jt(S)&&S.name;if(y==="Boolean"){v=!0;break}else y==="String"&&(m=!1)}else v=jt(g)&&g.name==="Boolean";p[0]=v,p[1]=m,(v||ve(p,"default"))&&a.push(h)}}const c=[o,a];return xe(e)&&i.set(e,c),c}function ed(e){return e[0]!=="$"&&!yo(e)}const bh=e=>e==="_"||e==="_ctx"||e==="$stable",Mh=e=>Kt(e)?e.map(hi):[hi(e)],vx=(e,t,n)=>{if(t._n)return t;const i=dn((...r)=>Mh(t(...r)),n);return i._c=!1,i},Gg=(e,t,n)=>{const i=e._ctx;for(const r in e){if(bh(r))continue;const s=e[r];if(jt(s))t[r]=vx(r,s,i);else if(s!=null){const o=Mh(s);t[r]=()=>o}}},Wg=(e,t)=>{const n=Mh(t);e.slots.default=()=>n},Xg=(e,t,n)=>{for(const i in t)(n||!bh(i))&&(e[i]=t[i])},xx=(e,t,n)=>{const i=e.slots=Bg();if(e.vnode.shapeFlag&32){const r=t._;r?(Xg(i,t,n),n&&jm(i,"_",r,!0)):Gg(t,i)}else t&&Wg(e,t)},yx=(e,t,n)=>{const{vnode:i,slots:r}=e;let s=!0,o=Ie;if(i.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:Xg(r,t,n):(s=!t.$stable,Gg(t,r)),o=t}else t&&(Wg(e,t),o={default:1});if(s)for(const a in r)!bh(a)&&o[a]==null&&delete r[a]},Tn=Ex;function Sx(e){return bx(e)}function bx(e,t){const n=bl();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=gi,insertStaticContent:g}=e,v=(I,O,U,z=null,F=null,X=null,E=void 0,rt=null,K=!!O.dynamicChildren)=>{if(I===O)return;I&&!to(I,O)&&(z=ot(I),kt(I,F,X,!0),I=null),O.patchFlag===-2&&(K=!1,O.dynamicChildren=null);const{type:Q,ref:it,shapeFlag:w}=O;switch(Q){case Rl:m(I,O,U,z);break;case yi:d(I,O,U,z);break;case Yl:I==null&&S(O,U,z,E);break;case Ye:V(I,O,U,z,F,X,E,rt,K);break;default:w&1?A(I,O,U,z,F,X,E,rt,K):w&6?q(I,O,U,z,F,X,E,rt,K):(w&64||w&128)&&Q.process(I,O,U,z,F,X,E,rt,K,Mt)}it!=null&&F?Mo(it,I&&I.ref,X,O||I,!O):it==null&&I&&I.ref!=null&&Mo(I.ref,null,X,I,!0)},m=(I,O,U,z)=>{if(I==null)i(O.el=a(O.children),U,z);else{const F=O.el=I.el;O.children!==I.children&&c(F,O.children)}},d=(I,O,U,z)=>{I==null?i(O.el=l(O.children||""),U,z):O.el=I.el},S=(I,O,U,z)=>{[I.el,I.anchor]=g(I.children,O,U,z,I.el,I.anchor)},y=({el:I,anchor:O},U,z)=>{let F;for(;I&&I!==O;)F=f(I),i(I,U,z),I=F;i(O,U,z)},x=({el:I,anchor:O})=>{let U;for(;I&&I!==O;)U=f(I),r(I),I=U;r(O)},A=(I,O,U,z,F,X,E,rt,K)=>{if(O.type==="svg"?E="svg":O.type==="math"&&(E="mathml"),I==null)P(O,U,z,F,X,E,rt,K);else{const Q=I.el&&I.el._isVueCE?I.el:null;try{Q&&Q._beginPatch(),b(I,O,F,X,E,rt,K)}finally{Q&&Q._endPatch()}}},P=(I,O,U,z,F,X,E,rt)=>{let K,Q;const{props:it,shapeFlag:w,transition:_,dirs:N}=I;if(K=I.el=o(I.type,X,it&&it.is,it),w&8?u(K,I.children):w&16&&R(I.children,K,null,z,F,ql(I,X),E,rt),N&&Mr(I,null,z,"created"),C(K,I,I.scopeId,E,z),it){for(const nt in it)nt!=="value"&&!yo(nt)&&s(K,nt,null,it[nt],X,z);"value"in it&&s(K,"value",null,it.value,X),(Q=it.onVnodeBeforeMount)&&oi(Q,z,I)}N&&Mr(I,null,z,"beforeMount");const Y=Mx(F,_);Y&&_.beforeEnter(K),i(K,O,U),((Q=it&&it.onVnodeMounted)||Y||N)&&Tn(()=>{Q&&oi(Q,z,I),Y&&_.enter(K),N&&Mr(I,null,z,"mounted")},F)},C=(I,O,U,z,F)=>{if(U&&p(I,U),z)for(let X=0;X<z.length;X++)p(I,z[X]);if(F){let X=F.subTree;if(O===X||$g(X.type)&&(X.ssContent===O||X.ssFallback===O)){const E=F.vnode;C(I,E,E.scopeId,E.slotScopeIds,F.parent)}}},R=(I,O,U,z,F,X,E,rt,K=0)=>{for(let Q=K;Q<I.length;Q++){const it=I[Q]=rt?Ui(I[Q]):hi(I[Q]);v(null,it,O,U,z,F,X,E,rt)}},b=(I,O,U,z,F,X,E)=>{const rt=O.el=I.el;let{patchFlag:K,dynamicChildren:Q,dirs:it}=O;K|=I.patchFlag&16;const w=I.props||Ie,_=O.props||Ie;let N;if(U&&wr(U,!1),(N=_.onVnodeBeforeUpdate)&&oi(N,U,O,I),it&&Mr(O,I,U,"beforeUpdate"),U&&wr(U,!0),(w.innerHTML&&_.innerHTML==null||w.textContent&&_.textContent==null)&&u(rt,""),Q?M(I.dynamicChildren,Q,rt,U,z,ql(O,F),X):E||H(I,O,rt,null,U,z,ql(O,F),X,!1),K>0){if(K&16)L(rt,w,_,U,F);else if(K&2&&w.class!==_.class&&s(rt,"class",null,_.class,F),K&4&&s(rt,"style",w.style,_.style,F),K&8){const Y=O.dynamicProps;for(let nt=0;nt<Y.length;nt++){const $=Y[nt],wt=w[$],ht=_[$];(ht!==wt||$==="value")&&s(rt,$,wt,ht,F,U)}}K&1&&I.children!==O.children&&u(rt,O.children)}else!E&&Q==null&&L(rt,w,_,U,F);((N=_.onVnodeUpdated)||it)&&Tn(()=>{N&&oi(N,U,O,I),it&&Mr(O,I,U,"updated")},z)},M=(I,O,U,z,F,X,E)=>{for(let rt=0;rt<O.length;rt++){const K=I[rt],Q=O[rt],it=K.el&&(K.type===Ye||!to(K,Q)||K.shapeFlag&198)?h(K.el):U;v(K,Q,it,null,z,F,X,E,!0)}},L=(I,O,U,z,F)=>{if(O!==U){if(O!==Ie)for(const X in O)!yo(X)&&!(X in U)&&s(I,X,O[X],null,F,z);for(const X in U){if(yo(X))continue;const E=U[X],rt=O[X];E!==rt&&X!=="value"&&s(I,X,rt,E,F,z)}"value"in U&&s(I,"value",O.value,U.value,F)}},V=(I,O,U,z,F,X,E,rt,K)=>{const Q=O.el=I?I.el:a(""),it=O.anchor=I?I.anchor:a("");let{patchFlag:w,dynamicChildren:_,slotScopeIds:N}=O;N&&(rt=rt?rt.concat(N):N),I==null?(i(Q,U,z),i(it,U,z),R(O.children||[],U,it,F,X,E,rt,K)):w>0&&w&64&&_&&I.dynamicChildren&&I.dynamicChildren.length===_.length?(M(I.dynamicChildren,_,U,F,X,E,rt),(O.key!=null||F&&O===F.subTree)&&qg(I,O,!0)):H(I,O,U,it,F,X,E,rt,K)},q=(I,O,U,z,F,X,E,rt,K)=>{O.slotScopeIds=rt,I==null?O.shapeFlag&512?F.ctx.activate(O,U,z,E,K):j(O,U,z,F,X,E,K):J(I,O,K)},j=(I,O,U,z,F,X,E)=>{const rt=I.component=Dx(I,z,F);if(Cg(I)&&(rt.ctx.renderer=Mt),Ix(rt,!1,E),rt.asyncDep){if(F&&F.registerDep(rt,W,E),!I.el){const K=rt.subTree=Je(yi);d(null,K,O,U),I.placeholder=K.el}}else W(rt,I,O,U,F,X,E)},J=(I,O,U)=>{const z=O.component=I.component;if(dx(I,O,U))if(z.asyncDep&&!z.asyncResolved){k(z,O,U);return}else z.next=O,z.update();else O.el=I.el,z.vnode=O},W=(I,O,U,z,F,X,E)=>{const rt=()=>{if(I.isMounted){let{next:w,bu:_,u:N,parent:Y,vnode:nt}=I;{const zt=Yg(I);if(zt){w&&(w.el=nt.el,k(I,w,E)),zt.asyncDep.then(()=>{Tn(()=>{I.isUnmounted||Q()},F)});return}}let $=w,wt;wr(I,!1),w?(w.el=nt.el,k(I,w,E)):w=nt,_&&zl(_),(wt=w.props&&w.props.onVnodeBeforeUpdate)&&oi(wt,Y,w,nt),wr(I,!0);const ht=jf(I),Ct=I.subTree;I.subTree=ht,v(Ct,ht,h(Ct.el),ot(Ct),I,F,X),w.el=ht.el,$===null&&px(I,ht.el),N&&Tn(N,F),(wt=w.props&&w.props.onVnodeUpdated)&&Tn(()=>oi(wt,Y,w,nt),F)}else{let w;const{el:_,props:N}=O,{bm:Y,m:nt,parent:$,root:wt,type:ht}=I,Ct=As(O);wr(I,!1),Y&&zl(Y),!Ct&&(w=N&&N.onVnodeBeforeMount)&&oi(w,$,O),wr(I,!0);{wt.ce&&wt.ce._hasShadowRoot()&&wt.ce._injectChildStyle(ht);const zt=I.subTree=jf(I);v(null,zt,U,z,I,F,X),O.el=zt.el}if(nt&&Tn(nt,F),!Ct&&(w=N&&N.onVnodeMounted)){const zt=O;Tn(()=>oi(w,$,zt),F)}(O.shapeFlag&256||$&&As($.vnode)&&$.vnode.shapeFlag&256)&&I.a&&Tn(I.a,F),I.isMounted=!0,O=U=z=null}};I.scope.on();const K=I.effect=new ig(rt);I.scope.off();const Q=I.update=K.run.bind(K),it=I.job=K.runIfDirty.bind(K);it.i=I,it.id=I.uid,K.scheduler=()=>_h(it),wr(I,!0),Q()},k=(I,O,U)=>{O.component=I;const z=I.vnode.props;I.vnode=O,I.next=null,gx(I,O.props,z,U),yx(I,O.children,U),Wi(),Xf(I),Xi()},H=(I,O,U,z,F,X,E,rt,K=!1)=>{const Q=I&&I.children,it=I?I.shapeFlag:0,w=O.children,{patchFlag:_,shapeFlag:N}=O;if(_>0){if(_&128){pt(Q,w,U,z,F,X,E,rt,K);return}else if(_&256){ct(Q,w,U,z,F,X,E,rt,K);return}}N&8?(it&16&&st(Q,F,X),w!==Q&&u(U,w)):it&16?N&16?pt(Q,w,U,z,F,X,E,rt,K):st(Q,F,X,!0):(it&8&&u(U,""),N&16&&R(w,U,z,F,X,E,rt,K))},ct=(I,O,U,z,F,X,E,rt,K)=>{I=I||Ms,O=O||Ms;const Q=I.length,it=O.length,w=Math.min(Q,it);let _;for(_=0;_<w;_++){const N=O[_]=K?Ui(O[_]):hi(O[_]);v(I[_],N,U,null,F,X,E,rt,K)}Q>it?st(I,F,X,!0,!1,w):R(O,U,z,F,X,E,rt,K,w)},pt=(I,O,U,z,F,X,E,rt,K)=>{let Q=0;const it=O.length;let w=I.length-1,_=it-1;for(;Q<=w&&Q<=_;){const N=I[Q],Y=O[Q]=K?Ui(O[Q]):hi(O[Q]);if(to(N,Y))v(N,Y,U,null,F,X,E,rt,K);else break;Q++}for(;Q<=w&&Q<=_;){const N=I[w],Y=O[_]=K?Ui(O[_]):hi(O[_]);if(to(N,Y))v(N,Y,U,null,F,X,E,rt,K);else break;w--,_--}if(Q>w){if(Q<=_){const N=_+1,Y=N<it?O[N].el:z;for(;Q<=_;)v(null,O[Q]=K?Ui(O[Q]):hi(O[Q]),U,Y,F,X,E,rt,K),Q++}}else if(Q>_)for(;Q<=w;)kt(I[Q],F,X,!0),Q++;else{const N=Q,Y=Q,nt=new Map;for(Q=Y;Q<=_;Q++){const Et=O[Q]=K?Ui(O[Q]):hi(O[Q]);Et.key!=null&&nt.set(Et.key,Q)}let $,wt=0;const ht=_-Y+1;let Ct=!1,zt=0;const ut=new Array(ht);for(Q=0;Q<ht;Q++)ut[Q]=0;for(Q=N;Q<=w;Q++){const Et=I[Q];if(wt>=ht){kt(Et,F,X,!0);continue}let It;if(Et.key!=null)It=nt.get(Et.key);else for($=Y;$<=_;$++)if(ut[$-Y]===0&&to(Et,O[$])){It=$;break}It===void 0?kt(Et,F,X,!0):(ut[It-Y]=Q+1,It>=zt?zt=It:Ct=!0,v(Et,O[It],U,null,F,X,E,rt,K),wt++)}const yt=Ct?wx(ut):Ms;for($=yt.length-1,Q=ht-1;Q>=0;Q--){const Et=Y+Q,It=O[Et],xt=O[Et+1],ee=Et+1<it?xt.el||Jg(xt):z;ut[Q]===0?v(null,It,U,ee,F,X,E,rt,K):Ct&&($<0||Q!==yt[$]?ft(It,U,ee,2):$--)}}},ft=(I,O,U,z,F=null)=>{const{el:X,type:E,transition:rt,children:K,shapeFlag:Q}=I;if(Q&6){ft(I.component.subTree,O,U,z);return}if(Q&128){I.suspense.move(O,U,z);return}if(Q&64){E.move(I,O,U,Mt);return}if(E===Ye){i(X,O,U);for(let w=0;w<K.length;w++)ft(K[w],O,U,z);i(I.anchor,O,U);return}if(E===Yl){y(I,O,U);return}if(z!==2&&Q&1&&rt)if(z===0)rt.beforeEnter(X),i(X,O,U),Tn(()=>rt.enter(X),F);else{const{leave:w,delayLeave:_,afterLeave:N}=rt,Y=()=>{I.ctx.isUnmounted?r(X):i(X,O,U)},nt=()=>{X._isLeaving&&X[Bv](!0),w(X,()=>{Y(),N&&N()})};_?_(X,Y,nt):nt()}else i(X,O,U)},kt=(I,O,U,z=!1,F=!1)=>{const{type:X,props:E,ref:rt,children:K,dynamicChildren:Q,shapeFlag:it,patchFlag:w,dirs:_,cacheIndex:N}=I;if(w===-2&&(F=!1),rt!=null&&(Wi(),Mo(rt,null,U,I,!0),Xi()),N!=null&&(O.renderCache[N]=void 0),it&256){O.ctx.deactivate(I);return}const Y=it&1&&_,nt=!As(I);let $;if(nt&&($=E&&E.onVnodeBeforeUnmount)&&oi($,O,I),it&6)ce(I.component,U,z);else{if(it&128){I.suspense.unmount(U,z);return}Y&&Mr(I,null,O,"beforeUnmount"),it&64?I.type.remove(I,O,U,Mt,z):Q&&!Q.hasOnce&&(X!==Ye||w>0&&w&64)?st(Q,O,U,!1,!0):(X===Ye&&w&384||!F&&it&16)&&st(K,O,U),z&&Lt(I)}(nt&&($=E&&E.onVnodeUnmounted)||Y)&&Tn(()=>{$&&oi($,O,I),Y&&Mr(I,null,O,"unmounted")},U)},Lt=I=>{const{type:O,el:U,anchor:z,transition:F}=I;if(O===Ye){Zt(U,z);return}if(O===Yl){x(I);return}const X=()=>{r(U),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(I.shapeFlag&1&&F&&!F.persisted){const{leave:E,delayLeave:rt}=F,K=()=>E(U,X);rt?rt(I.el,X,K):K()}else X()},Zt=(I,O)=>{let U;for(;I!==O;)U=f(I),r(I),I=U;r(O)},ce=(I,O,U)=>{const{bum:z,scope:F,job:X,subTree:E,um:rt,m:K,a:Q}=I;nd(K),nd(Q),z&&zl(z),F.stop(),X&&(X.flags|=8,kt(E,I,O,U)),rt&&Tn(rt,O),Tn(()=>{I.isUnmounted=!0},O)},st=(I,O,U,z=!1,F=!1,X=0)=>{for(let E=X;E<I.length;E++)kt(I[E],O,U,z,F)},ot=I=>{if(I.shapeFlag&6)return ot(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const O=f(I.anchor||I.el),U=O&&O[Fv];return U?f(U):O};let Pt=!1;const Vt=(I,O,U)=>{let z;I==null?O._vnode&&(kt(O._vnode,null,null,!0),z=O._vnode.component):v(O._vnode||null,I,O,null,null,null,U),O._vnode=I,Pt||(Pt=!0,Xf(z),wg(),Pt=!1)},Mt={p:v,um:kt,m:ft,r:Lt,mt:j,mc:R,pc:H,pbc:M,n:ot,o:e};return{render:Vt,hydrate:void 0,createApp:ax(Vt)}}function ql({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function wr({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Mx(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function qg(e,t,n=!1){const i=e.children,r=t.children;if(Kt(i)&&Kt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ui(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&qg(o,a)),a.type===Rl&&(a.patchFlag===-1&&(a=r[s]=Ui(a)),a.el=o.el),a.type===yi&&!a.el&&(a.el=o.el)}}function wx(e){const t=e.slice(),n=[0];let i,r,s,o,a;const l=e.length;for(i=0;i<l;i++){const c=e[i];if(c!==0){if(r=n[n.length-1],e[r]<c){t[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function Yg(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Yg(t)}function nd(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Jg(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Jg(t.subTree):null}const $g=e=>e.__isSuspense;function Ex(e,t){t&&t.pendingBranch?Kt(e)?t.effects.push(...e):t.effects.push(e):Iv(e)}const Ye=Symbol.for("v-fgt"),Rl=Symbol.for("v-txt"),yi=Symbol.for("v-cmt"),Yl=Symbol.for("v-stc"),Eo=[];let Bn=null;function ue(e=!1){Eo.push(Bn=e?null:[])}function Tx(){Eo.pop(),Bn=Eo[Eo.length-1]||null}let Uo=1;function al(e,t=!1){Uo+=e,e<0&&Bn&&t&&(Bn.hasOnce=!0)}function Zg(e){return e.dynamicChildren=Uo>0?Bn||Ms:null,Tx(),Uo>0&&Bn&&Bn.push(e),e}function Fn(e,t,n,i,r,s){return Zg(Cs(e,t,n,i,r,s,!0))}function Ve(e,t,n,i,r){return Zg(Je(e,t,n,i,r,!0))}function Oo(e){return e?e.__v_isVNode===!0:!1}function to(e,t){return e.type===t.type&&e.key===t.key}const Kg=({key:e})=>e??null,Wa=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ge(e)||ze(e)||jt(e)?{i:yn,r:e,k:t,f:!!n}:e:null);function Cs(e,t=null,n=null,i=0,r=null,s=e===Ye?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Kg(t),ref:t&&Wa(t),scopeId:Tg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:yn};return a?(Eh(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=Ge(n)?8:16),Uo>0&&!o&&Bn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Bn.push(l),l}const Je=Ax;function Ax(e,t=null,n=null,i=0,r=null,s=!1){if((!e||e===Dg)&&(e=yi),Oo(e)){const a=Xr(e,t,!0);return n&&Eh(a,n),Uo>0&&!s&&Bn&&(a.shapeFlag&6?Bn[Bn.indexOf(e)]=a:Bn.push(a)),a.patchFlag=-2,a}if(Fx(e)&&(e=e.__vccOpts),t){t=Px(t);let{class:a,style:l}=t;a&&!Ge(a)&&(t.class=Ml(a)),xe(l)&&(El(l)&&!Kt(l)&&(l=rn({},l)),t.style=Ws(l))}const o=Ge(e)?1:$g(e)?128:kv(e)?64:xe(e)?4:jt(e)?2:0;return Cs(e,t,n,i,r,o,s,!0)}function Px(e){return e?El(e)||zg(e)?rn({},e):e:null}function Xr(e,t,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=e,c=t?Si(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Kg(c),ref:t&&t.ref?n&&s?Kt(s)?s.concat(Wa(t)):[s,Wa(t)]:Wa(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ye?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xr(e.ssContent),ssFallback:e.ssFallback&&Xr(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&yh(u,l.clone(u)),u}function wh(e=" ",t=0){return Je(Rl,null,e,t)}function Rs(e="",t=!1){return t?(ue(),Ve(yi,null,e)):Je(yi,null,e)}function hi(e){return e==null||typeof e=="boolean"?Je(yi):Kt(e)?Je(Ye,null,e.slice()):Oo(e)?Ui(e):Je(Rl,null,String(e))}function Ui(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xr(e)}function Eh(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(Kt(t))n=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Eh(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!zg(t)?t._ctx=yn:r===3&&yn&&(yn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else jt(t)?(t={default:t,_ctx:yn},n=32):(t=String(t),i&64?(n=16,t=[wh(t)]):n=8);e.children=t,e.shapeFlag|=n}function Si(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=Ml([t.class,i.class]));else if(r==="style")t.style=Ws([t.style,i.style]);else if(vl(r)){const s=t[r],o=i[r];o&&s!==o&&!(Kt(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function oi(e,t,n,i=null){xi(e,t,7,[n,i])}const Cx=Ug();let Rx=0;function Dx(e,t,n){const i=e.type,r=(t?t.appContext:e.appContext)||Cx,s={uid:Rx++,vnode:e,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Q_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hg(i,r),emitsOptions:Og(i,r),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:i.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=cx.bind(null,s),e.ce&&e.ce(s),s}let cn=null;const Xs=()=>cn||yn;let ll,Qc;{const e=bl(),t=(n,i)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ll=t("__VUE_INSTANCE_SETTERS__",n=>cn=n),Qc=t("__VUE_SSR_SETTERS__",n=>Fo=n)}const Jo=e=>{const t=cn;return ll(e),e.scope.on(),()=>{e.scope.off(),ll(t)}},id=()=>{cn&&cn.scope.off(),ll(null)};function Qg(e){return e.vnode.shapeFlag&4}let Fo=!1;function Ix(e,t=!1,n=!1){t&&Qc(t);const{props:i,children:r}=e.vnode,s=Qg(e);mx(e,i,s,t),xx(e,r,n||t);const o=s?Lx(e,t):void 0;return t&&Qc(!1),o}function Lx(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,tx);const{setup:i}=n;if(i){Wi();const r=e.setupContext=i.length>1?Ux(e):null,s=Jo(e),o=qo(i,e,0,[e.props,r]),a=Zm(o);if(Xi(),s(),(a||e.sp)&&!As(e)&&Pg(e),a){if(o.then(id,id),t)return o.then(l=>{rd(e,l)}).catch(l=>{Tl(l,e,0)});e.asyncDep=o}else rd(e,o)}else jg(e)}function rd(e,t,n){jt(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:xe(t)&&(e.setupState=xg(t)),jg(e)}function jg(e,t,n){const i=e.type;e.render||(e.render=i.render||gi);{const r=Jo(e);Wi();try{ex(e)}finally{Xi(),r()}}}const Nx={get(e,t){return ln(e,"get",""),e[t]}};function Ux(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Nx),slots:e.slots,emit:e.emit,expose:t}}function Th(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(xg(_g(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in wo)return wo[n](e)},has(t,n){return n in t||n in wo}})):e.proxy}function Ox(e,t=!0){return jt(e)?e.displayName||e.name:e.name||t&&e.__name}function Fx(e){return jt(e)&&"__vccOpts"in e}const pe=(e,t)=>Av(e,t,Fo);function To(e,t,n){try{al(-1);const i=arguments.length;return i===2?xe(t)&&!Kt(t)?Oo(t)?Je(e,null,[t]):Je(e,t):Je(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Oo(n)&&(n=[n]),Je(e,t,n))}finally{al(1)}}const kx="3.5.28";let jc;const sd=typeof window<"u"&&window.trustedTypes;if(sd)try{jc=sd.createPolicy("vue",{createHTML:e=>e})}catch{}const t0=jc?e=>jc.createHTML(e):e=>e,Bx="http://www.w3.org/2000/svg",zx="http://www.w3.org/1998/Math/MathML",Ni=typeof document<"u"?document:null,od=Ni&&Ni.createElement("template"),Vx={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t==="svg"?Ni.createElementNS(Bx,e):t==="mathml"?Ni.createElementNS(zx,e):n?Ni.createElement(e,{is:n}):Ni.createElement(e);return e==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:e=>Ni.createTextNode(e),createComment:e=>Ni.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ni.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{od.innerHTML=t0(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=od.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Hx=Symbol("_vtc");function Gx(e,t,n){const i=e[Hx];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ad=Symbol("_vod"),Wx=Symbol("_vsh"),Xx=Symbol(""),qx=/(?:^|;)\s*display\s*:/;function Yx(e,t,n){const i=e.style,r=Ge(n);let s=!1;if(n&&!r){if(t)if(Ge(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Xa(i,a,"")}else for(const o in t)n[o]==null&&Xa(i,o,"");for(const o in n)o==="display"&&(s=!0),Xa(i,o,n[o])}else if(r){if(t!==n){const o=i[Xx];o&&(n+=";"+o),i.cssText=n,s=qx.test(n)}}else t&&e.removeAttribute("style");ad in e&&(e[ad]=s?i.display:"",e[Wx]&&(i.display="none"))}const ld=/\s*!important$/;function Xa(e,t,n){if(Kt(n))n.forEach(i=>Xa(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Jx(e,t);ld.test(n)?e.setProperty($r(i),n.replace(ld,""),"important"):e[i]=n}}const cd=["Webkit","Moz","ms"],Jl={};function Jx(e,t){const n=Jl[t];if(n)return n;let i=Rn(t);if(i!=="filter"&&i in e)return Jl[t]=i;i=Sl(i);for(let r=0;r<cd.length;r++){const s=cd[r]+i;if(s in e)return Jl[t]=s}return t}const ud="http://www.w3.org/1999/xlink";function hd(e,t,n,i,r,s=Z_(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ud,t.slice(6,t.length)):e.setAttributeNS(ud,t,n):n==null||s&&!tg(n)?e.removeAttribute(t):e.setAttribute(t,s?"":jn(n)?String(n):n)}function fd(e,t,n,i,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?t0(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=tg(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function $x(e,t,n,i){e.addEventListener(t,n,i)}function Zx(e,t,n,i){e.removeEventListener(t,n,i)}const dd=Symbol("_vei");function Kx(e,t,n,i,r=null){const s=e[dd]||(e[dd]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=Qx(t);if(i){const c=s[t]=ey(i,r);$x(e,a,c,l)}else o&&(Zx(e,a,o,l),s[t]=void 0)}}const pd=/(?:Once|Passive|Capture)$/;function Qx(e){let t;if(pd.test(e)){t={};let i;for(;i=e.match(pd);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$r(e.slice(2)),t]}let $l=0;const jx=Promise.resolve(),ty=()=>$l||(jx.then(()=>$l=0),$l=Date.now());function ey(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;xi(ny(i,n.value),t,5,[i])};return n.value=e,n.attached=ty(),n}function ny(e,t){if(Kt(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const md=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,iy=(e,t,n,i,r,s)=>{const o=r==="svg";t==="class"?Gx(e,i,o):t==="style"?Yx(e,n,i):vl(t)?ah(t)||Kx(e,t,n,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ry(e,t,i,o))?(fd(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&hd(e,t,i,o,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ge(i))?fd(e,Rn(t),i,s,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),hd(e,t,i,o))};function ry(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&md(t)&&jt(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return md(t)&&Ge(n)?!1:t in e}const sy=rn({patchProp:iy},Vx);let gd;function oy(){return gd||(gd=Sx(sy))}const ay=((...e)=>{const t=oy().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=cy(i);if(!r)return;const s=t._component;!jt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,ly(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t});function ly(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function cy(e){return Ge(e)?document.querySelector(e):e}function e0(e){var t,n,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=e0(e[t]))&&(i&&(i+=" "),i+=n)}else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function n0(){for(var e,t,n=0,i="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=e0(e))&&(i&&(i+=" "),i+=t);return i}const _d=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,vd=n0,uy=(e,t)=>n=>{var i;if(t?.variants==null)return vd(e,n?.class,n?.className);const{variants:r,defaultVariants:s}=t,o=Object.keys(r).map(c=>{const u=n?.[c],h=s?.[c];if(u===null)return null;const f=_d(u)||_d(h);return r[c][f]}),a=n&&Object.entries(n).reduce((c,u)=>{let[h,f]=u;return f===void 0||(c[h]=f),c},{}),l=t==null||(i=t.compoundVariants)===null||i===void 0?void 0:i.reduce((c,u)=>{let{class:h,className:f,...p}=u;return Object.entries(p).every(g=>{let[v,m]=g;return Array.isArray(m)?m.includes({...s,...a}[v]):{...s,...a}[v]===m})?[...c,h,f]:c},[]);return vd(e,o,l,n?.class,n?.className)};function i0(e,t=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY){return Math.min(n,Math.max(t,e))}function Ah(e,t){const n=typeof e=="string"&&!t?`${e}Context`:t,i=Symbol(n);return[o=>{const a=Ts(i,o);if(a||a===null)return a;throw new Error(`Injection \`${i.toString()}\` not found. Component must be used within ${Array.isArray(e)?`one of the following components: ${e.join(", ")}`:`\`${e}\``}`)},o=>(vh(i,o),o)]}function r0(e){return e?e.flatMap(t=>t.type===Ye?r0(t.children):[t]):[]}const[hy]=Ah("ConfigProvider");typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const fy=e=>typeof e<"u";function dy(e){return _r(ze(e)?new Proxy({},{get(t,n,i){return St(Reflect.get(e.value,n,i))},set(t,n,i){return ze(e.value[n])&&!ze(i)?e.value[n].value=i:e.value[n]=i,!0},deleteProperty(t,n){return Reflect.deleteProperty(e.value,n)},has(t,n){return Reflect.has(e.value,n)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}}):e)}function py(e){return dy(pe(e))}function my(e,...t){const n=t.flat(),i=n[0];return py(()=>Object.fromEntries(typeof i=="function"?Object.entries(Lo(e)).filter(([r,s])=>!i(gh(s),r)):Object.entries(Lo(e)).filter(r=>!n.includes(r[0]))))}function Dl(e){var t;const n=gh(e);return(t=n?.$el)!==null&&t!==void 0?t:n}function gy(){const e=yv(!1),t=Xs();return t&&Yo(()=>{e.value=!0},t),e}function _y(e){return JSON.parse(JSON.stringify(e))}function vy(e,t,n,i={}){var r,s;const{clone:o=!1,passive:a=!1,eventName:l,deep:c=!1,defaultValue:u,shouldEmit:h}=i,f=Xs(),p=n||f?.emit||(f==null||(r=f.$emit)===null||r===void 0?void 0:r.bind(f))||(f==null||(s=f.proxy)===null||s===void 0||(s=s.$emit)===null||s===void 0?void 0:s.bind(f?.proxy));let g=l;g=g||`update:${t.toString()}`;const v=S=>o?typeof o=="function"?o(S):_y(S):S,m=()=>fy(e[t])?v(e[t]):u,d=S=>{h?h(S)&&p(g,S):p(g,S)};if(a){const S=hn(m());let y=!1;return Gr(()=>e[t],x=>{y||(y=!0,S.value=v(x),bg(()=>y=!1))}),Gr(S,x=>{!y&&(x!==e[t]||c)&&d(x)},{deep:c}),S}else return pe({get(){return m()},set(S){d(S)}})}function xy(e){const t=hy({dir:hn("ltr")});return pe(()=>e?.value||t.dir?.value||"ltr")}function yy(e){const t=Xs(),n=t?.type.emits,i={};return n?.length||console.warn(`No emitted event found. Please check component: ${t?.type.__name}`),n?.forEach(r=>{i[Ga(Rn(r))]=(...s)=>e(r,...s)}),i}function Sy(e){return pe(()=>gh(e)?!!Dl(e)?.closest("form"):!0)}function Zr(){const e=Xs(),t=hn(),n=pe(()=>["#text","#comment"].includes(t.value?.$el.nodeName)?t.value?.$el.nextElementSibling:Dl(t)),i=Object.assign({},e.exposed),r={};for(const o in e.props)Object.defineProperty(r,o,{enumerable:!0,configurable:!0,get:()=>e.props[o]});if(Object.keys(i).length>0)for(const o in i)Object.defineProperty(r,o,{enumerable:!0,configurable:!0,get:()=>i[o]});Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>e.vnode.el}),e.exposed=r;function s(o){if(t.value=o,!!o&&(Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>o instanceof Element?o:o.$el}),!(o instanceof Element)&&!Object.hasOwn(o,"$el"))){const a=o.$.exposed,l=Object.assign({},r);for(const c in a)Object.defineProperty(l,c,{enumerable:!0,configurable:!0,get:()=>a[c]});e.exposed=l}}return{forwardRef:s,currentRef:t,currentElement:n}}function by(e){const t=Xs(),n=Object.keys(t?.type.props??{}).reduce((r,s)=>{const o=(t?.type.props[s]).default;return o!==void 0&&(r[s]=o),r},{}),i=Ev(e);return pe(()=>{const r={},s=t?.vnode.props??{};return Object.keys(s).forEach(o=>{r[Rn(o)]=s[o]}),Object.keys({...n,...r}).reduce((o,a)=>(i.value[a]!==void 0&&(o[a]=i.value[a]),o),{})})}function My(e,t){const n=by(e),i=t?yy(t):{};return pe(()=>({...n.value,...i}))}function wy(e){const t=hn(),n=pe(()=>t.value?.width??0),i=pe(()=>t.value?.height??0);return Yo(()=>{const r=Dl(e);if(r){t.value={width:r.offsetWidth,height:r.offsetHeight};const s=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const a=o[0];let l,c;if("borderBoxSize"in a){const u=a.borderBoxSize,h=Array.isArray(u)?u[0]:u;l=h.inlineSize,c=h.blockSize}else l=r.offsetWidth,c=r.offsetHeight;t.value={width:l,height:c}});return s.observe(r,{box:"border-box"}),()=>s.unobserve(r)}else t.value=void 0}),{width:n,height:i}}const tu=$e({name:"PrimitiveSlot",inheritAttrs:!1,setup(e,{attrs:t,slots:n}){return()=>{if(!n.default)return null;const i=r0(n.default()),r=i.findIndex(l=>l.type!==yi);if(r===-1)return i;const s=i[r];delete s.props?.ref;const o=s.props?Si(t,s.props):t,a=Xr({...s,props:{}},o);return i.length===1?a:(i[r]=a,i)}}}),Ey=["area","img","input"],qs=$e({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(e,{attrs:t,slots:n}){const i=e.asChild?"template":e.as;return typeof i=="string"&&Ey.includes(i)?()=>To(i,t):i!=="template"?()=>To(e.as,t,{default:n.default}):()=>To(tu,t,{default:n.default})}});function eu(){const e=hn(),t=pe(()=>["#text","#comment"].includes(e.value?.$el.nodeName)?e.value?.$el.nextElementSibling:Dl(e));return{primitiveElement:e,currentElement:t}}const xd="data-reka-collection-item";function Ph(e={}){const{key:t="",isProvider:n=!1}=e,i=`${t}CollectionProvider`;let r;n?(r={collectionRef:hn(),itemMap:hn(new Map)},vh(i,r)):r=Ts(i);const s=(u=!1)=>{const h=r.collectionRef.value;if(!h)return[];const f=Array.from(h.querySelectorAll(`[${xd}]`)),g=Array.from(r.itemMap.value.values()).sort((v,m)=>f.indexOf(v.ref)-f.indexOf(m.ref));return u?g:g.filter(v=>v.ref.dataset.disabled!=="")},o=$e({name:"CollectionSlot",inheritAttrs:!1,setup(u,{slots:h,attrs:f}){const{primitiveElement:p,currentElement:g}=eu();return Gr(g,()=>{r.collectionRef.value=g.value}),()=>To(tu,{ref:p,...f},h)}}),a=$e({name:"CollectionItem",inheritAttrs:!1,props:{value:{validator:()=>!0}},setup(u,{slots:h,attrs:f}){const{primitiveElement:p,currentElement:g}=eu();return Uv(v=>{if(g.value){const m=_g(g.value);r.itemMap.value.set(m,{ref:g.value,value:u.value}),v(()=>r.itemMap.value.delete(m))}}),()=>To(tu,{...f,[xd]:"",ref:p},h)}}),l=pe(()=>Array.from(r.itemMap.value.values())),c=pe(()=>r.itemMap.value.size);return{getItems:s,reactiveItems:l,itemMapSize:c,CollectionSlot:o,CollectionItem:a}}var Ty=$e({__name:"VisuallyHidden",props:{feature:{type:String,required:!1,default:"focusable"},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(e){return(t,n)=>(ue(),Ve(St(qs),{as:t.as,"as-child":t.asChild,"aria-hidden":t.feature==="focusable"?"true":void 0,"data-hidden":t.feature==="fully-hidden"?"":void 0,tabindex:t.feature==="fully-hidden"?"-1":void 0,style:{position:"absolute",border:0,width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",whiteSpace:"nowrap",wordWrap:"normal",top:"-1px",left:"-1px"}},{default:dn(()=>[Mi(t.$slots,"default")]),_:3},8,["as","as-child","aria-hidden","data-hidden","tabindex"]))}}),Ay=Ty,Py=$e({inheritAttrs:!1,__name:"VisuallyHiddenInputBubble",props:{name:{type:String,required:!0},value:{type:null,required:!0},checked:{type:Boolean,required:!1,default:void 0},required:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},feature:{type:String,required:!1,default:"fully-hidden"}},setup(e){const t=e,{primitiveElement:n,currentElement:i}=eu(),r=pe(()=>t.checked??t.value);return Gr(r,(s,o)=>{if(!i.value)return;const a=i.value,l=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(l,"value").set;if(u&&s!==o){const h=new Event("input",{bubbles:!0}),f=new Event("change",{bubbles:!0});u.call(a,s),a.dispatchEvent(h),a.dispatchEvent(f)}}),(s,o)=>(ue(),Ve(Ay,Si({ref_key:"primitiveElement",ref:n},{...t,...s.$attrs},{as:"input"}),null,16))}}),yd=Py,Cy=$e({inheritAttrs:!1,__name:"VisuallyHiddenInput",props:{name:{type:String,required:!0},value:{type:null,required:!0},checked:{type:Boolean,required:!1,default:void 0},required:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},feature:{type:String,required:!1,default:"fully-hidden"}},setup(e){const t=e,n=pe(()=>typeof t.value=="object"&&Array.isArray(t.value)&&t.value.length===0&&t.required),i=pe(()=>typeof t.value=="string"||typeof t.value=="number"||typeof t.value=="boolean"||t.value===null||t.value===void 0?[{name:t.name,value:t.value}]:typeof t.value=="object"&&Array.isArray(t.value)?t.value.flatMap((r,s)=>typeof r=="object"?Object.entries(r).map(([o,a])=>({name:`${t.name}[${s}][${o}]`,value:a})):{name:`${t.name}[${s}]`,value:r}):t.value!==null&&typeof t.value=="object"&&!Array.isArray(t.value)?Object.entries(t.value).map(([r,s])=>({name:`${t.name}[${r}]`,value:s})):[]);return(r,s)=>(ue(),Fn(Ye,null,[Rs(" We render single input if it's required "),n.value?(ue(),Ve(yd,Si({key:r.name},{...t,...r.$attrs},{name:r.name,value:r.value}),null,16,["name","value"])):(ue(!0),Fn(Ye,{key:1},Pl(i.value,o=>(ue(),Ve(yd,Si({key:o.name},{ref_for:!0},{...t,...r.$attrs},{name:o.name,value:o.value}),null,16,["name","value"]))),128))],2112))}}),Ry=Cy;function Dy(e=[],t,n){const i=[...e];return i[n]=t,i.sort((r,s)=>r-s)}function s0(e,t,n){const s=100/(n-t)*(e-t);return i0(s,0,100)}function Iy(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function Ly(e,t){if(e.length===1)return 0;const n=e.map(r=>Math.abs(r-t)),i=Math.min(...n);return n.indexOf(i)}function Ny(e,t,n){const i=e/2,s=Ch([0,50],[0,i]);return(i-s(t)*n)*n}function Uy(e){return e.slice(0,-1).map((t,n)=>e[n+1]-t)}function Oy(e,t){if(t>0){const n=Uy(e);return Math.min(...n)>=t}return!0}function Ch(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const i=(t[1]-t[0])/(e[1]-e[0]);return t[0]+i*(n-e[0])}}function Fy(e){return(String(e).split(".")[1]||"").length}function ky(e,t){const n=10**t;return Math.round(e*n)/n}const o0=["PageUp","PageDown"],a0=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],l0={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageUp","ArrowUp","ArrowLeft"]},[c0,u0]=Ah(["SliderVertical","SliderHorizontal"]);var By=$e({__name:"SliderHorizontal",props:{dir:{type:String,required:!1},min:{type:Number,required:!0},max:{type:Number,required:!0},inverted:{type:Boolean,required:!0}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(e,{emit:t}){const n=e,i=t,{max:r,min:s,dir:o,inverted:a}=Lo(n),{forwardRef:l,currentElement:c}=Zr(),u=Ys(),h=hn(),f=hn(),p=pe(()=>o?.value!=="rtl"&&!a.value||o?.value!=="ltr"&&a.value);function g(S,y){const x=f.value||c.value.getBoundingClientRect(),A=[...u.thumbElements.value][u.valueIndexToChangeRef.value],P=u.thumbAlignment.value==="contain"?A.clientWidth:0;!h.value&&!y&&u.thumbAlignment.value==="contain"&&(h.value=S.clientX-A.getBoundingClientRect().left);const C=[0,x.width-P],R=p.value?[s.value,r.value]:[r.value,s.value],b=Ch(C,R);f.value=x;const M=y?S.clientX-x.left-P/2:S.clientX-x.left-(h.value??0);return b(M)}const v=pe(()=>p.value?"left":"right"),m=pe(()=>p.value?"right":"left"),d=pe(()=>p.value?1:-1);return u0({startEdge:v,endEdge:m,direction:d,size:"width"}),(S,y)=>(ue(),Ve(h0,{ref:St(l),dir:St(o),"data-orientation":"horizontal",style:Ws({"--reka-slider-thumb-transform":!p.value&&St(u).thumbAlignment.value==="overflow"?"translateX(50%)":"translateX(-50%)"}),onSlideStart:y[0]||(y[0]=x=>{const A=g(x,!0);i("slideStart",A)}),onSlideMove:y[1]||(y[1]=x=>{const A=g(x);i("slideMove",A)}),onSlideEnd:y[2]||(y[2]=()=>{f.value=void 0,h.value=void 0,i("slideEnd")}),onStepKeyDown:y[3]||(y[3]=x=>{const A=p.value?"from-left":"from-right",P=St(l0)[A].includes(x.key);i("stepKeyDown",x,P?-1:1)}),onEndKeyDown:y[4]||(y[4]=x=>i("endKeyDown",x)),onHomeKeyDown:y[5]||(y[5]=x=>i("homeKeyDown",x))},{default:dn(()=>[Mi(S.$slots,"default")]),_:3},8,["dir","style"]))}}),zy=By,Vy=$e({__name:"SliderVertical",props:{min:{type:Number,required:!0},max:{type:Number,required:!0},inverted:{type:Boolean,required:!0}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(e,{emit:t}){const n=e,i=t,{max:r,min:s,inverted:o}=Lo(n),a=Ys(),{forwardRef:l,currentElement:c}=Zr(),u=hn(),h=hn(),f=pe(()=>!o.value);function p(d,S){const y=h.value||c.value.getBoundingClientRect(),x=[...a.thumbElements.value][a.valueIndexToChangeRef.value],A=a.thumbAlignment.value==="contain"?x.clientHeight:0;!u.value&&!S&&a.thumbAlignment.value==="contain"&&(u.value=d.clientY-x.getBoundingClientRect().top);const P=[0,y.height-A],C=f.value?[r.value,s.value]:[s.value,r.value],R=Ch(P,C),b=S?d.clientY-y.top-A/2:d.clientY-y.top-(u.value??0);return h.value=y,R(b)}const g=pe(()=>f.value?"bottom":"top"),v=pe(()=>f.value?"top":"bottom"),m=pe(()=>f.value?1:-1);return u0({startEdge:g,endEdge:v,direction:m,size:"height"}),(d,S)=>(ue(),Ve(h0,{ref:St(l),"data-orientation":"vertical",style:Ws({"--reka-slider-thumb-transform":!f.value&&St(a).thumbAlignment.value==="overflow"?"translateY(-50%)":"translateY(50%)"}),onSlideStart:S[0]||(S[0]=y=>{const x=p(y,!0);i("slideStart",x)}),onSlideMove:S[1]||(S[1]=y=>{const x=p(y);i("slideMove",x)}),onSlideEnd:S[2]||(S[2]=()=>{h.value=void 0,u.value=void 0,i("slideEnd")}),onStepKeyDown:S[3]||(S[3]=y=>{const x=f.value?"from-bottom":"from-top",A=St(l0)[x].includes(y.key);i("stepKeyDown",y,A?-1:1)}),onEndKeyDown:S[4]||(S[4]=y=>i("endKeyDown",y)),onHomeKeyDown:S[5]||(S[5]=y=>i("homeKeyDown",y))},{default:dn(()=>[Mi(d.$slots,"default")]),_:3},8,["style"]))}}),Hy=Vy;const[Ys,Gy]=Ah("SliderRoot");var Wy=$e({inheritAttrs:!1,__name:"SliderRoot",props:{defaultValue:{type:Array,required:!1,default:()=>[0]},modelValue:{type:[Array,null],required:!1},disabled:{type:Boolean,required:!1,default:!1},orientation:{type:String,required:!1,default:"horizontal"},dir:{type:String,required:!1},inverted:{type:Boolean,required:!1,default:!1},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},step:{type:Number,required:!1,default:1},minStepsBetweenThumbs:{type:Number,required:!1,default:0},thumbAlignment:{type:String,required:!1,default:"contain"},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue","valueCommit"],setup(e,{emit:t}){const n=e,i=t,{min:r,max:s,step:o,minStepsBetweenThumbs:a,orientation:l,disabled:c,thumbAlignment:u,dir:h}=Lo(n),f=xy(h),{forwardRef:p,currentElement:g}=Zr(),v=Sy(g),{CollectionSlot:m}=Ph({isProvider:!0}),d=vy(n,"modelValue",i,{defaultValue:n.defaultValue,passive:n.modelValue===void 0}),S=pe(()=>Array.isArray(d.value)?[...d.value]:[]),y=hn(0),x=hn(S.value);function A(M){const L=Ly(S.value,M);R(M,L)}function P(M){R(M,y.value)}function C(){const M=x.value[y.value];S.value[y.value]!==M&&i("valueCommit",_e(S.value))}function R(M,L,{commit:V}={commit:!1}){const q=Fy(o.value),j=ky(Math.round((M-r.value)/o.value)*o.value+r.value,q),J=i0(j,r.value,s.value),W=Dy(S.value,J,L);if(Oy(W,a.value*o.value)){y.value=W.indexOf(J);const k=String(W)!==String(d.value);k&&V&&i("valueCommit",W),k&&(b.value[y.value]?.focus(),d.value=W)}}const b=hn([]);return Gy({modelValue:d,currentModelValue:S,valueIndexToChangeRef:y,thumbElements:b,orientation:l,min:r,max:s,disabled:c,thumbAlignment:u}),(M,L)=>(ue(),Ve(St(m),null,{default:dn(()=>[(ue(),Ve(Qv(St(l)==="horizontal"?zy:Hy),Si(M.$attrs,{ref:St(p),"as-child":M.asChild,as:M.as,min:St(r),max:St(s),dir:St(f),inverted:M.inverted,"aria-disabled":St(c),"data-disabled":St(c)?"":void 0,onPointerdown:L[0]||(L[0]=()=>{St(c)||(x.value=S.value)}),onSlideStart:L[1]||(L[1]=V=>!St(c)&&A(V)),onSlideMove:L[2]||(L[2]=V=>!St(c)&&P(V)),onSlideEnd:L[3]||(L[3]=V=>!St(c)&&C()),onHomeKeyDown:L[4]||(L[4]=V=>!St(c)&&R(St(r),0,{commit:!0})),onEndKeyDown:L[5]||(L[5]=V=>!St(c)&&R(St(s),S.value.length-1,{commit:!0})),onStepKeyDown:L[6]||(L[6]=(V,q)=>{if(!St(c)){const W=St(o0).includes(V.key)||V.shiftKey&&St(a0).includes(V.key)?10:1,k=y.value,H=S.value[k],ct=St(o)*W*q;R(H+ct,k,{commit:!0})}})}),{default:dn(()=>[Mi(M.$slots,"default",{modelValue:St(d)}),St(v)&&M.name?(ue(),Ve(St(Ry),{key:0,type:"number",value:St(d),name:M.name,required:M.required,disabled:St(c),step:St(o)},null,8,["value","name","required","disabled","step"])):Rs("v-if",!0)]),_:3},16,["as-child","as","min","max","dir","inverted","aria-disabled","data-disabled"]))]),_:3}))}}),Xy=Wy,qy=$e({__name:"SliderImpl",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},emits:["slideStart","slideMove","slideEnd","homeKeyDown","endKeyDown","stepKeyDown"],setup(e,{emit:t}){const n=e,i=t,r=Ys();return(s,o)=>(ue(),Ve(St(qs),Si({"data-slider-impl":""},n,{onKeydown:o[0]||(o[0]=a=>{a.key==="Home"?(i("homeKeyDown",a),a.preventDefault()):a.key==="End"?(i("endKeyDown",a),a.preventDefault()):St(o0).concat(St(a0)).includes(a.key)&&(i("stepKeyDown",a),a.preventDefault())}),onPointerdown:o[1]||(o[1]=a=>{const l=a.target;l.setPointerCapture(a.pointerId),a.preventDefault(),St(r).thumbElements.value.includes(l)?l.focus():i("slideStart",a)}),onPointermove:o[2]||(o[2]=a=>{a.target.hasPointerCapture(a.pointerId)&&i("slideMove",a)}),onPointerup:o[3]||(o[3]=a=>{const l=a.target;l.hasPointerCapture(a.pointerId)&&(l.releasePointerCapture(a.pointerId),i("slideEnd",a))})}),{default:dn(()=>[Mi(s.$slots,"default")]),_:3},16))}}),h0=qy,Yy=$e({__name:"SliderRange",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(e){const t=Ys(),n=c0();Zr();const i=pe(()=>t.currentModelValue.value.map(o=>s0(o,t.min.value,t.max.value))),r=pe(()=>t.currentModelValue.value.length>1?Math.min(...i.value):0),s=pe(()=>100-Math.max(...i.value,0));return(o,a)=>(ue(),Ve(St(qs),{"data-disabled":St(t).disabled.value?"":void 0,"data-orientation":St(t).orientation.value,"as-child":o.asChild,as:o.as,style:Ws({[St(n).startEdge.value]:`${r.value}%`,[St(n).endEdge.value]:`${s.value}%`})},{default:dn(()=>[Mi(o.$slots,"default")]),_:3},8,["data-disabled","data-orientation","as-child","as","style"]))}}),Jy=Yy,$y=$e({inheritAttrs:!1,__name:"SliderThumbImpl",props:{index:{type:Number,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=e,n=Ys(),i=c0(),{forwardRef:r,currentElement:s}=Zr(),{CollectionItem:o}=Ph(),a=pe(()=>n.modelValue?.value?.[t.index]),l=pe(()=>a.value===void 0?0:s0(a.value,n.min.value??0,n.max.value??100)),c=pe(()=>Iy(t.index,n.modelValue?.value?.length??0)),u=wy(s),h=pe(()=>u[i.size].value),f=pe(()=>n.thumbAlignment.value==="overflow"||!h.value?0:Ny(h.value,l.value,i.direction.value)),p=gy();return Yo(()=>{n.thumbElements.value.push(s.value)}),Sh(()=>{const g=n.thumbElements.value.findIndex(v=>v===s.value)??-1;n.thumbElements.value.splice(g,1)}),(g,v)=>(ue(),Ve(St(o),null,{default:dn(()=>[Je(St(qs),Si(g.$attrs,{ref:St(r),role:"slider",tabindex:St(n).disabled.value?void 0:0,"aria-label":g.$attrs["aria-label"]||c.value,"data-disabled":St(n).disabled.value?"":void 0,"data-orientation":St(n).orientation.value,"aria-valuenow":a.value,"aria-valuemin":St(n).min.value,"aria-valuemax":St(n).max.value,"aria-orientation":St(n).orientation.value,"as-child":g.asChild,as:g.as,style:{transform:"var(--reka-slider-thumb-transform)",position:"absolute",[St(i).startEdge.value]:`calc(${l.value}% + ${f.value}px)`,display:!St(p)&&a.value===void 0?"none":void 0},onFocus:v[0]||(v[0]=()=>{St(n).valueIndexToChangeRef.value=g.index})}),{default:dn(()=>[Mi(g.$slots,"default")]),_:3},16,["tabindex","aria-label","data-disabled","data-orientation","aria-valuenow","aria-valuemin","aria-valuemax","aria-orientation","as-child","as","style"])]),_:3}))}}),Zy=$y,Ky=$e({__name:"SliderThumb",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(e){const t=e,{getItems:n}=Ph(),{forwardRef:i,currentElement:r}=Zr(),s=pe(()=>r.value?n(!0).findIndex(o=>o.ref===r.value):-1);return(o,a)=>(ue(),Ve(Zy,Si({ref:St(i)},t,{index:s.value}),{default:dn(()=>[Mi(o.$slots,"default")]),_:3},16,["index"]))}}),Qy=Ky,jy=$e({__name:"SliderTrack",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(e){const t=Ys();return Zr(),(n,i)=>(ue(),Ve(St(qs),{"as-child":n.asChild,as:n.as,"data-disabled":St(t).disabled.value?"":void 0,"data-orientation":St(t).orientation.value},{default:dn(()=>[Mi(n.$slots,"default")]),_:3},8,["as-child","as","data-disabled","data-orientation"]))}}),tS=jy;const eS=(e,t)=>{const n=new Array(e.length+t.length);for(let i=0;i<e.length;i++)n[i]=e[i];for(let i=0;i<t.length;i++)n[e.length+i]=t[i];return n},nS=(e,t)=>({classGroupId:e,validator:t}),f0=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),cl="-",Sd=[],iS="arbitrary..",rS=e=>{const t=oS(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=e;return{getClassGroupId:o=>{if(o.startsWith("[")&&o.endsWith("]"))return sS(o);const a=o.split(cl),l=a[0]===""&&a.length>1?1:0;return d0(a,l,t)},getConflictingClassGroupIds:(o,a)=>{if(a){const l=i[o],c=n[o];return l?c?eS(c,l):l:c||Sd}return n[o]||Sd}}},d0=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const r=e[t],s=n.nextPart.get(r);if(s){const c=d0(e,t+1,s);if(c)return c}const o=n.validators;if(o===null)return;const a=t===0?e.join(cl):e.slice(t).join(cl),l=o.length;for(let c=0;c<l;c++){const u=o[c];if(u.validator(a))return u.classGroupId}},sS=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),i=t.slice(0,n);return i?iS+i:void 0})(),oS=e=>{const{theme:t,classGroups:n}=e;return aS(n,t)},aS=(e,t)=>{const n=f0();for(const i in e){const r=e[i];Rh(r,n,i,t)}return n},Rh=(e,t,n,i)=>{const r=e.length;for(let s=0;s<r;s++){const o=e[s];lS(o,t,n,i)}},lS=(e,t,n,i)=>{if(typeof e=="string"){cS(e,t,n);return}if(typeof e=="function"){uS(e,t,n,i);return}hS(e,t,n,i)},cS=(e,t,n)=>{const i=e===""?t:p0(t,e);i.classGroupId=n},uS=(e,t,n,i)=>{if(fS(e)){Rh(e(i),t,n,i);return}t.validators===null&&(t.validators=[]),t.validators.push(nS(n,e))},hS=(e,t,n,i)=>{const r=Object.entries(e),s=r.length;for(let o=0;o<s;o++){const[a,l]=r[o];Rh(l,p0(t,a),n,i)}},p0=(e,t)=>{let n=e;const i=t.split(cl),r=i.length;for(let s=0;s<r;s++){const o=i[s];let a=n.nextPart.get(o);a||(a=f0(),n.nextPart.set(o,a)),n=a}return n},fS=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,dS=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),i=Object.create(null);const r=(s,o)=>{n[s]=o,t++,t>e&&(t=0,i=n,n=Object.create(null))};return{get(s){let o=n[s];if(o!==void 0)return o;if((o=i[s])!==void 0)return r(s,o),o},set(s,o){s in n?n[s]=o:r(s,o)}}},nu="!",bd=":",pS=[],Md=(e,t,n,i,r)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:i,isExternal:r}),mS=e=>{const{prefix:t,experimentalParseClassName:n}=e;let i=r=>{const s=[];let o=0,a=0,l=0,c;const u=r.length;for(let v=0;v<u;v++){const m=r[v];if(o===0&&a===0){if(m===bd){s.push(r.slice(l,v)),l=v+1;continue}if(m==="/"){c=v;continue}}m==="["?o++:m==="]"?o--:m==="("?a++:m===")"&&a--}const h=s.length===0?r:r.slice(l);let f=h,p=!1;h.endsWith(nu)?(f=h.slice(0,-1),p=!0):h.startsWith(nu)&&(f=h.slice(1),p=!0);const g=c&&c>l?c-l:void 0;return Md(s,p,f,g)};if(t){const r=t+bd,s=i;i=o=>o.startsWith(r)?s(o.slice(r.length)):Md(pS,!1,o,void 0,!0)}if(n){const r=i;i=s=>n({className:s,parseClassName:r})}return i},gS=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,i)=>{t.set(n,1e6+i)}),n=>{const i=[];let r=[];for(let s=0;s<n.length;s++){const o=n[s],a=o[0]==="[",l=t.has(o);a||l?(r.length>0&&(r.sort(),i.push(...r),r=[]),i.push(o)):r.push(o)}return r.length>0&&(r.sort(),i.push(...r)),i}},_S=e=>({cache:dS(e.cacheSize),parseClassName:mS(e),sortModifiers:gS(e),...rS(e)}),vS=/\s+/,xS=(e,t)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r,sortModifiers:s}=t,o=[],a=e.trim().split(vS);let l="";for(let c=a.length-1;c>=0;c-=1){const u=a[c],{isExternal:h,modifiers:f,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:v}=n(u);if(h){l=u+(l.length>0?" "+l:l);continue}let m=!!v,d=i(m?g.substring(0,v):g);if(!d){if(!m){l=u+(l.length>0?" "+l:l);continue}if(d=i(g),!d){l=u+(l.length>0?" "+l:l);continue}m=!1}const S=f.length===0?"":f.length===1?f[0]:s(f).join(":"),y=p?S+nu:S,x=y+d;if(o.indexOf(x)>-1)continue;o.push(x);const A=r(d,m);for(let P=0;P<A.length;++P){const C=A[P];o.push(y+C)}l=u+(l.length>0?" "+l:l)}return l},yS=(...e)=>{let t=0,n,i,r="";for(;t<e.length;)(n=e[t++])&&(i=m0(n))&&(r&&(r+=" "),r+=i);return r},m0=e=>{if(typeof e=="string")return e;let t,n="";for(let i=0;i<e.length;i++)e[i]&&(t=m0(e[i]))&&(n&&(n+=" "),n+=t);return n},SS=(e,...t)=>{let n,i,r,s;const o=l=>{const c=t.reduce((u,h)=>h(u),e());return n=_S(c),i=n.cache.get,r=n.cache.set,s=a,a(l)},a=l=>{const c=i(l);if(c)return c;const u=xS(l,n);return r(l,u),u};return s=o,(...l)=>s(yS(...l))},bS=[],Xe=e=>{const t=n=>n[e]||bS;return t.isThemeGetter=!0,t},g0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,_0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,MS=/^\d+\/\d+$/,wS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ES=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,TS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,AS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,PS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ns=e=>MS.test(e),ae=e=>!!e&&!Number.isNaN(Number(e)),Zi=e=>!!e&&Number.isInteger(Number(e)),Zl=e=>e.endsWith("%")&&ae(e.slice(0,-1)),Ai=e=>wS.test(e),CS=()=>!0,RS=e=>ES.test(e)&&!TS.test(e),v0=()=>!1,DS=e=>AS.test(e),IS=e=>PS.test(e),LS=e=>!Ot(e)&&!Ft(e),NS=e=>Js(e,S0,v0),Ot=e=>g0.test(e),Er=e=>Js(e,b0,RS),Kl=e=>Js(e,BS,ae),wd=e=>Js(e,x0,v0),US=e=>Js(e,y0,IS),aa=e=>Js(e,M0,DS),Ft=e=>_0.test(e),eo=e=>$s(e,b0),OS=e=>$s(e,zS),Ed=e=>$s(e,x0),FS=e=>$s(e,S0),kS=e=>$s(e,y0),la=e=>$s(e,M0,!0),Js=(e,t,n)=>{const i=g0.exec(e);return i?i[1]?t(i[1]):n(i[2]):!1},$s=(e,t,n=!1)=>{const i=_0.exec(e);return i?i[1]?t(i[1]):n:!1},x0=e=>e==="position"||e==="percentage",y0=e=>e==="image"||e==="url",S0=e=>e==="length"||e==="size"||e==="bg-size",b0=e=>e==="length",BS=e=>e==="number",zS=e=>e==="family-name",M0=e=>e==="shadow",VS=()=>{const e=Xe("color"),t=Xe("font"),n=Xe("text"),i=Xe("font-weight"),r=Xe("tracking"),s=Xe("leading"),o=Xe("breakpoint"),a=Xe("container"),l=Xe("spacing"),c=Xe("radius"),u=Xe("shadow"),h=Xe("inset-shadow"),f=Xe("text-shadow"),p=Xe("drop-shadow"),g=Xe("blur"),v=Xe("perspective"),m=Xe("aspect"),d=Xe("ease"),S=Xe("animate"),y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],x=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],A=()=>[...x(),Ft,Ot],P=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto","contain","none"],R=()=>[Ft,Ot,l],b=()=>[ns,"full","auto",...R()],M=()=>[Zi,"none","subgrid",Ft,Ot],L=()=>["auto",{span:["full",Zi,Ft,Ot]},Zi,Ft,Ot],V=()=>[Zi,"auto",Ft,Ot],q=()=>["auto","min","max","fr",Ft,Ot],j=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],J=()=>["start","end","center","stretch","center-safe","end-safe"],W=()=>["auto",...R()],k=()=>[ns,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...R()],H=()=>[e,Ft,Ot],ct=()=>[...x(),Ed,wd,{position:[Ft,Ot]}],pt=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ft=()=>["auto","cover","contain",FS,NS,{size:[Ft,Ot]}],kt=()=>[Zl,eo,Er],Lt=()=>["","none","full",c,Ft,Ot],Zt=()=>["",ae,eo,Er],ce=()=>["solid","dashed","dotted","double"],st=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ot=()=>[ae,Zl,Ed,wd],Pt=()=>["","none",g,Ft,Ot],Vt=()=>["none",ae,Ft,Ot],Mt=()=>["none",ae,Ft,Ot],oe=()=>[ae,Ft,Ot],I=()=>[ns,"full",...R()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ai],breakpoint:[Ai],color:[CS],container:[Ai],"drop-shadow":[Ai],ease:["in","out","in-out"],font:[LS],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ai],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ai],shadow:[Ai],spacing:["px",ae],text:[Ai],"text-shadow":[Ai],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ns,Ot,Ft,m]}],container:["container"],columns:[{columns:[ae,Ot,Ft,a]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:A()}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:b()}],"inset-x":[{"inset-x":b()}],"inset-y":[{"inset-y":b()}],start:[{start:b()}],end:[{end:b()}],top:[{top:b()}],right:[{right:b()}],bottom:[{bottom:b()}],left:[{left:b()}],visibility:["visible","invisible","collapse"],z:[{z:[Zi,"auto",Ft,Ot]}],basis:[{basis:[ns,"full","auto",a,...R()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ae,ns,"auto","initial","none",Ot]}],grow:[{grow:["",ae,Ft,Ot]}],shrink:[{shrink:["",ae,Ft,Ot]}],order:[{order:[Zi,"first","last","none",Ft,Ot]}],"grid-cols":[{"grid-cols":M()}],"col-start-end":[{col:L()}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":M()}],"row-start-end":[{row:L()}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":q()}],"auto-rows":[{"auto-rows":q()}],gap:[{gap:R()}],"gap-x":[{"gap-x":R()}],"gap-y":[{"gap-y":R()}],"justify-content":[{justify:[...j(),"normal"]}],"justify-items":[{"justify-items":[...J(),"normal"]}],"justify-self":[{"justify-self":["auto",...J()]}],"align-content":[{content:["normal",...j()]}],"align-items":[{items:[...J(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...J(),{baseline:["","last"]}]}],"place-content":[{"place-content":j()}],"place-items":[{"place-items":[...J(),"baseline"]}],"place-self":[{"place-self":["auto",...J()]}],p:[{p:R()}],px:[{px:R()}],py:[{py:R()}],ps:[{ps:R()}],pe:[{pe:R()}],pt:[{pt:R()}],pr:[{pr:R()}],pb:[{pb:R()}],pl:[{pl:R()}],m:[{m:W()}],mx:[{mx:W()}],my:[{my:W()}],ms:[{ms:W()}],me:[{me:W()}],mt:[{mt:W()}],mr:[{mr:W()}],mb:[{mb:W()}],ml:[{ml:W()}],"space-x":[{"space-x":R()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":R()}],"space-y-reverse":["space-y-reverse"],size:[{size:k()}],w:[{w:[a,"screen",...k()]}],"min-w":[{"min-w":[a,"screen","none",...k()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[o]},...k()]}],h:[{h:["screen","lh",...k()]}],"min-h":[{"min-h":["screen","lh","none",...k()]}],"max-h":[{"max-h":["screen","lh",...k()]}],"font-size":[{text:["base",n,eo,Er]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,Ft,Kl]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Zl,Ot]}],"font-family":[{font:[OS,Ot,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[r,Ft,Ot]}],"line-clamp":[{"line-clamp":[ae,"none",Ft,Kl]}],leading:[{leading:[s,...R()]}],"list-image":[{"list-image":["none",Ft,Ot]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Ft,Ot]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:H()}],"text-color":[{text:H()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ce(),"wavy"]}],"text-decoration-thickness":[{decoration:[ae,"from-font","auto",Ft,Er]}],"text-decoration-color":[{decoration:H()}],"underline-offset":[{"underline-offset":[ae,"auto",Ft,Ot]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ft,Ot]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ft,Ot]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ct()}],"bg-repeat":[{bg:pt()}],"bg-size":[{bg:ft()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Zi,Ft,Ot],radial:["",Ft,Ot],conic:[Zi,Ft,Ot]},kS,US]}],"bg-color":[{bg:H()}],"gradient-from-pos":[{from:kt()}],"gradient-via-pos":[{via:kt()}],"gradient-to-pos":[{to:kt()}],"gradient-from":[{from:H()}],"gradient-via":[{via:H()}],"gradient-to":[{to:H()}],rounded:[{rounded:Lt()}],"rounded-s":[{"rounded-s":Lt()}],"rounded-e":[{"rounded-e":Lt()}],"rounded-t":[{"rounded-t":Lt()}],"rounded-r":[{"rounded-r":Lt()}],"rounded-b":[{"rounded-b":Lt()}],"rounded-l":[{"rounded-l":Lt()}],"rounded-ss":[{"rounded-ss":Lt()}],"rounded-se":[{"rounded-se":Lt()}],"rounded-ee":[{"rounded-ee":Lt()}],"rounded-es":[{"rounded-es":Lt()}],"rounded-tl":[{"rounded-tl":Lt()}],"rounded-tr":[{"rounded-tr":Lt()}],"rounded-br":[{"rounded-br":Lt()}],"rounded-bl":[{"rounded-bl":Lt()}],"border-w":[{border:Zt()}],"border-w-x":[{"border-x":Zt()}],"border-w-y":[{"border-y":Zt()}],"border-w-s":[{"border-s":Zt()}],"border-w-e":[{"border-e":Zt()}],"border-w-t":[{"border-t":Zt()}],"border-w-r":[{"border-r":Zt()}],"border-w-b":[{"border-b":Zt()}],"border-w-l":[{"border-l":Zt()}],"divide-x":[{"divide-x":Zt()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Zt()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ce(),"hidden","none"]}],"divide-style":[{divide:[...ce(),"hidden","none"]}],"border-color":[{border:H()}],"border-color-x":[{"border-x":H()}],"border-color-y":[{"border-y":H()}],"border-color-s":[{"border-s":H()}],"border-color-e":[{"border-e":H()}],"border-color-t":[{"border-t":H()}],"border-color-r":[{"border-r":H()}],"border-color-b":[{"border-b":H()}],"border-color-l":[{"border-l":H()}],"divide-color":[{divide:H()}],"outline-style":[{outline:[...ce(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ae,Ft,Ot]}],"outline-w":[{outline:["",ae,eo,Er]}],"outline-color":[{outline:H()}],shadow:[{shadow:["","none",u,la,aa]}],"shadow-color":[{shadow:H()}],"inset-shadow":[{"inset-shadow":["none",h,la,aa]}],"inset-shadow-color":[{"inset-shadow":H()}],"ring-w":[{ring:Zt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:H()}],"ring-offset-w":[{"ring-offset":[ae,Er]}],"ring-offset-color":[{"ring-offset":H()}],"inset-ring-w":[{"inset-ring":Zt()}],"inset-ring-color":[{"inset-ring":H()}],"text-shadow":[{"text-shadow":["none",f,la,aa]}],"text-shadow-color":[{"text-shadow":H()}],opacity:[{opacity:[ae,Ft,Ot]}],"mix-blend":[{"mix-blend":[...st(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":st()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[ae]}],"mask-image-linear-from-pos":[{"mask-linear-from":ot()}],"mask-image-linear-to-pos":[{"mask-linear-to":ot()}],"mask-image-linear-from-color":[{"mask-linear-from":H()}],"mask-image-linear-to-color":[{"mask-linear-to":H()}],"mask-image-t-from-pos":[{"mask-t-from":ot()}],"mask-image-t-to-pos":[{"mask-t-to":ot()}],"mask-image-t-from-color":[{"mask-t-from":H()}],"mask-image-t-to-color":[{"mask-t-to":H()}],"mask-image-r-from-pos":[{"mask-r-from":ot()}],"mask-image-r-to-pos":[{"mask-r-to":ot()}],"mask-image-r-from-color":[{"mask-r-from":H()}],"mask-image-r-to-color":[{"mask-r-to":H()}],"mask-image-b-from-pos":[{"mask-b-from":ot()}],"mask-image-b-to-pos":[{"mask-b-to":ot()}],"mask-image-b-from-color":[{"mask-b-from":H()}],"mask-image-b-to-color":[{"mask-b-to":H()}],"mask-image-l-from-pos":[{"mask-l-from":ot()}],"mask-image-l-to-pos":[{"mask-l-to":ot()}],"mask-image-l-from-color":[{"mask-l-from":H()}],"mask-image-l-to-color":[{"mask-l-to":H()}],"mask-image-x-from-pos":[{"mask-x-from":ot()}],"mask-image-x-to-pos":[{"mask-x-to":ot()}],"mask-image-x-from-color":[{"mask-x-from":H()}],"mask-image-x-to-color":[{"mask-x-to":H()}],"mask-image-y-from-pos":[{"mask-y-from":ot()}],"mask-image-y-to-pos":[{"mask-y-to":ot()}],"mask-image-y-from-color":[{"mask-y-from":H()}],"mask-image-y-to-color":[{"mask-y-to":H()}],"mask-image-radial":[{"mask-radial":[Ft,Ot]}],"mask-image-radial-from-pos":[{"mask-radial-from":ot()}],"mask-image-radial-to-pos":[{"mask-radial-to":ot()}],"mask-image-radial-from-color":[{"mask-radial-from":H()}],"mask-image-radial-to-color":[{"mask-radial-to":H()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":x()}],"mask-image-conic-pos":[{"mask-conic":[ae]}],"mask-image-conic-from-pos":[{"mask-conic-from":ot()}],"mask-image-conic-to-pos":[{"mask-conic-to":ot()}],"mask-image-conic-from-color":[{"mask-conic-from":H()}],"mask-image-conic-to-color":[{"mask-conic-to":H()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ct()}],"mask-repeat":[{mask:pt()}],"mask-size":[{mask:ft()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Ft,Ot]}],filter:[{filter:["","none",Ft,Ot]}],blur:[{blur:Pt()}],brightness:[{brightness:[ae,Ft,Ot]}],contrast:[{contrast:[ae,Ft,Ot]}],"drop-shadow":[{"drop-shadow":["","none",p,la,aa]}],"drop-shadow-color":[{"drop-shadow":H()}],grayscale:[{grayscale:["",ae,Ft,Ot]}],"hue-rotate":[{"hue-rotate":[ae,Ft,Ot]}],invert:[{invert:["",ae,Ft,Ot]}],saturate:[{saturate:[ae,Ft,Ot]}],sepia:[{sepia:["",ae,Ft,Ot]}],"backdrop-filter":[{"backdrop-filter":["","none",Ft,Ot]}],"backdrop-blur":[{"backdrop-blur":Pt()}],"backdrop-brightness":[{"backdrop-brightness":[ae,Ft,Ot]}],"backdrop-contrast":[{"backdrop-contrast":[ae,Ft,Ot]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ae,Ft,Ot]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ae,Ft,Ot]}],"backdrop-invert":[{"backdrop-invert":["",ae,Ft,Ot]}],"backdrop-opacity":[{"backdrop-opacity":[ae,Ft,Ot]}],"backdrop-saturate":[{"backdrop-saturate":[ae,Ft,Ot]}],"backdrop-sepia":[{"backdrop-sepia":["",ae,Ft,Ot]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":R()}],"border-spacing-x":[{"border-spacing-x":R()}],"border-spacing-y":[{"border-spacing-y":R()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Ft,Ot]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ae,"initial",Ft,Ot]}],ease:[{ease:["linear","initial",d,Ft,Ot]}],delay:[{delay:[ae,Ft,Ot]}],animate:[{animate:["none",S,Ft,Ot]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[v,Ft,Ot]}],"perspective-origin":[{"perspective-origin":A()}],rotate:[{rotate:Vt()}],"rotate-x":[{"rotate-x":Vt()}],"rotate-y":[{"rotate-y":Vt()}],"rotate-z":[{"rotate-z":Vt()}],scale:[{scale:Mt()}],"scale-x":[{"scale-x":Mt()}],"scale-y":[{"scale-y":Mt()}],"scale-z":[{"scale-z":Mt()}],"scale-3d":["scale-3d"],skew:[{skew:oe()}],"skew-x":[{"skew-x":oe()}],"skew-y":[{"skew-y":oe()}],transform:[{transform:[Ft,Ot,"","none","gpu","cpu"]}],"transform-origin":[{origin:A()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:I()}],"translate-x":[{"translate-x":I()}],"translate-y":[{"translate-y":I()}],"translate-z":[{"translate-z":I()}],"translate-none":["translate-none"],accent:[{accent:H()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:H()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ft,Ot]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ft,Ot]}],fill:[{fill:["none",...H()]}],"stroke-w":[{stroke:[ae,eo,Er,Kl]}],stroke:[{stroke:["none",...H()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},HS=SS(VS);function w0(...e){return HS(n0(e))}const GS=$e({__name:"Button",props:{variant:{},size:{},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(e){const t=e;return(n,i)=>(ue(),Ve(St(qs),{"data-slot":"button",as:e.as,"as-child":e.asChild,class:Ml(St(w0)(St(WS)({variant:e.variant,size:e.size}),t.class))},{default:dn(()=>[Mi(n.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),WS=uy("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}}),XS=$e({__name:"Slider",props:{defaultValue:{},modelValue:{},disabled:{type:Boolean},orientation:{},dir:{},inverted:{type:Boolean},min:{},max:{},step:{},minStepsBetweenThumbs:{},thumbAlignment:{},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},class:{}},emits:["update:modelValue","valueCommit"],setup(e,{emit:t}){const n=e,i=t,r=my(n,"class"),s=My(r,i);return(o,a)=>(ue(),Ve(St(Xy),Si({"data-slot":"slider",class:St(w0)("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",n.class)},St(s)),{default:dn(({modelValue:l})=>[Je(St(tS),{"data-slot":"slider-track",class:"bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"},{default:dn(()=>[Je(St(Jy),{"data-slot":"slider-range",class:"bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"})]),_:1}),(ue(!0),Fn(Ye,null,Pl(l,(c,u)=>(ue(),Ve(St(Qy),{key:u,"data-slot":"slider-thumb",class:"bg-white border-primary ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"}))),128))]),_:1},16,["class"]))}});function qS(){let e=0,t=0;for(let i=0;i<28;i+=7){let r=this.buf[this.pos++];if(e|=(r&127)<<i,(r&128)==0)return this.assertBounds(),[e,t]}let n=this.buf[this.pos++];if(e|=(n&15)<<28,t=(n&112)>>4,(n&128)==0)return this.assertBounds(),[e,t];for(let i=3;i<=31;i+=7){let r=this.buf[this.pos++];if(t|=(r&127)<<i,(r&128)==0)return this.assertBounds(),[e,t]}throw new Error("invalid varint")}function Ql(e,t,n){for(let s=0;s<28;s=s+7){const o=e>>>s,a=!(!(o>>>7)&&t==0),l=(a?o|128:o)&255;if(n.push(l),!a)return}const i=e>>>28&15|(t&7)<<4,r=t>>3!=0;if(n.push((r?i|128:i)&255),!!r){for(let s=3;s<31;s=s+7){const o=t>>>s,a=!!(o>>>7),l=(a?o|128:o)&255;if(n.push(l),!a)return}n.push(t>>>31&1)}}const qa=4294967296;function Td(e){const t=e[0]==="-";t&&(e=e.slice(1));const n=1e6;let i=0,r=0;function s(o,a){const l=Number(e.slice(o,a));r*=n,i=i*n+l,i>=qa&&(r=r+(i/qa|0),i=i%qa)}return s(-24,-18),s(-18,-12),s(-12,-6),s(-6),t?T0(i,r):Dh(i,r)}function YS(e,t){let n=Dh(e,t);const i=n.hi&2147483648;i&&(n=T0(n.lo,n.hi));const r=E0(n.lo,n.hi);return i?"-"+r:r}function E0(e,t){if({lo:e,hi:t}=JS(e,t),t<=2097151)return String(qa*t+e);const n=e&16777215,i=(e>>>24|t<<8)&16777215,r=t>>16&65535;let s=n+i*6777216+r*6710656,o=i+r*8147497,a=r*2;const l=1e7;return s>=l&&(o+=Math.floor(s/l),s%=l),o>=l&&(a+=Math.floor(o/l),o%=l),a.toString()+Ad(o)+Ad(s)}function JS(e,t){return{lo:e>>>0,hi:t>>>0}}function Dh(e,t){return{lo:e|0,hi:t|0}}function T0(e,t){return t=~t,e?e=~e+1:t+=1,Dh(e,t)}const Ad=e=>{const t=String(e);return"0000000".slice(t.length)+t};function Pd(e,t){if(e>=0){for(;e>127;)t.push(e&127|128),e=e>>>7;t.push(e)}else{for(let n=0;n<9;n++)t.push(e&127|128),e=e>>7;t.push(1)}}function $S(){let e=this.buf[this.pos++],t=e&127;if((e&128)==0)return this.assertBounds(),t;if(e=this.buf[this.pos++],t|=(e&127)<<7,(e&128)==0)return this.assertBounds(),t;if(e=this.buf[this.pos++],t|=(e&127)<<14,(e&128)==0)return this.assertBounds(),t;if(e=this.buf[this.pos++],t|=(e&127)<<21,(e&128)==0)return this.assertBounds(),t;e=this.buf[this.pos++],t|=(e&15)<<28;for(let n=5;(e&128)!==0&&n<10;n++)e=this.buf[this.pos++];if((e&128)!=0)throw new Error("invalid varint");return this.assertBounds(),t>>>0}var Cd={};const di=ZS();function ZS(){const e=new DataView(new ArrayBuffer(8));if(typeof BigInt=="function"&&typeof e.getBigInt64=="function"&&typeof e.getBigUint64=="function"&&typeof e.setBigInt64=="function"&&typeof e.setBigUint64=="function"&&(!!globalThis.Deno||typeof process!="object"||typeof Cd!="object"||Cd.BUF_BIGINT_DISABLE!=="1")){const n=BigInt("-9223372036854775808"),i=BigInt("9223372036854775807"),r=BigInt("0"),s=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(o){const a=typeof o=="bigint"?o:BigInt(o);if(a>i||a<n)throw new Error(`invalid int64: ${o}`);return a},uParse(o){const a=typeof o=="bigint"?o:BigInt(o);if(a>s||a<r)throw new Error(`invalid uint64: ${o}`);return a},enc(o){return e.setBigInt64(0,this.parse(o),!0),{lo:e.getInt32(0,!0),hi:e.getInt32(4,!0)}},uEnc(o){return e.setBigInt64(0,this.uParse(o),!0),{lo:e.getInt32(0,!0),hi:e.getInt32(4,!0)}},dec(o,a){return e.setInt32(0,o,!0),e.setInt32(4,a,!0),e.getBigInt64(0,!0)},uDec(o,a){return e.setInt32(0,o,!0),e.setInt32(4,a,!0),e.getBigUint64(0,!0)}}}return{zero:"0",supported:!1,parse(n){return typeof n!="string"&&(n=n.toString()),Rd(n),n},uParse(n){return typeof n!="string"&&(n=n.toString()),Dd(n),n},enc(n){return typeof n!="string"&&(n=n.toString()),Rd(n),Td(n)},uEnc(n){return typeof n!="string"&&(n=n.toString()),Dd(n),Td(n)},dec(n,i){return YS(n,i)},uDec(n,i){return E0(n,i)}}}function Rd(e){if(!/^-?[0-9]+$/.test(e))throw new Error("invalid int64: "+e)}function Dd(e){if(!/^[0-9]+$/.test(e))throw new Error("invalid uint64: "+e)}const jl=Symbol.for("@bufbuild/protobuf/text-encoding");function A0(){if(globalThis[jl]==null){const e=new globalThis.TextEncoder,t=new globalThis.TextDecoder;globalThis[jl]={encodeUtf8(n){return e.encode(n)},decodeUtf8(n){return t.decode(n)},checkUtf8(n){try{return encodeURIComponent(n),!0}catch{return!1}}}}return globalThis[jl]}var or;(function(e){e[e.Varint=0]="Varint",e[e.Bit64=1]="Bit64",e[e.LengthDelimited=2]="LengthDelimited",e[e.StartGroup=3]="StartGroup",e[e.EndGroup=4]="EndGroup",e[e.Bit32=5]="Bit32"})(or||(or={}));const KS=34028234663852886e22,QS=-34028234663852886e22,jS=4294967295,tb=2147483647,eb=-2147483648;class ne{constructor(t=A0().encodeUtf8){this.encodeUtf8=t,this.stack=[],this.chunks=[],this.buf=[]}finish(){this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]);let t=0;for(let r=0;r<this.chunks.length;r++)t+=this.chunks[r].length;let n=new Uint8Array(t),i=0;for(let r=0;r<this.chunks.length;r++)n.set(this.chunks[r],i),i+=this.chunks[r].length;return this.chunks=[],n}fork(){return this.stack.push({chunks:this.chunks,buf:this.buf}),this.chunks=[],this.buf=[],this}join(){let t=this.finish(),n=this.stack.pop();if(!n)throw new Error("invalid state, fork stack empty");return this.chunks=n.chunks,this.buf=n.buf,this.uint32(t.byteLength),this.raw(t)}tag(t,n){return this.uint32((t<<3|n)>>>0)}raw(t){return this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]),this.chunks.push(t),this}uint32(t){for(Id(t);t>127;)this.buf.push(t&127|128),t=t>>>7;return this.buf.push(t),this}int32(t){return tc(t),Pd(t,this.buf),this}bool(t){return this.buf.push(t?1:0),this}bytes(t){return this.uint32(t.byteLength),this.raw(t)}string(t){let n=this.encodeUtf8(t);return this.uint32(n.byteLength),this.raw(n)}float(t){nb(t);let n=new Uint8Array(4);return new DataView(n.buffer).setFloat32(0,t,!0),this.raw(n)}double(t){let n=new Uint8Array(8);return new DataView(n.buffer).setFloat64(0,t,!0),this.raw(n)}fixed32(t){Id(t);let n=new Uint8Array(4);return new DataView(n.buffer).setUint32(0,t,!0),this.raw(n)}sfixed32(t){tc(t);let n=new Uint8Array(4);return new DataView(n.buffer).setInt32(0,t,!0),this.raw(n)}sint32(t){return tc(t),t=(t<<1^t>>31)>>>0,Pd(t,this.buf),this}sfixed64(t){let n=new Uint8Array(8),i=new DataView(n.buffer),r=di.enc(t);return i.setInt32(0,r.lo,!0),i.setInt32(4,r.hi,!0),this.raw(n)}fixed64(t){let n=new Uint8Array(8),i=new DataView(n.buffer),r=di.uEnc(t);return i.setInt32(0,r.lo,!0),i.setInt32(4,r.hi,!0),this.raw(n)}int64(t){let n=di.enc(t);return Ql(n.lo,n.hi,this.buf),this}sint64(t){const n=di.enc(t),i=n.hi>>31,r=n.lo<<1^i,s=(n.hi<<1|n.lo>>>31)^i;return Ql(r,s,this.buf),this}uint64(t){const n=di.uEnc(t);return Ql(n.lo,n.hi,this.buf),this}}class vt{constructor(t,n=A0().decodeUtf8){this.decodeUtf8=n,this.varint64=qS,this.uint32=$S,this.buf=t,this.len=t.length,this.pos=0,this.view=new DataView(t.buffer,t.byteOffset,t.byteLength)}tag(){let t=this.uint32(),n=t>>>3,i=t&7;if(n<=0||i<0||i>5)throw new Error("illegal tag: field no "+n+" wire type "+i);return[n,i]}skip(t,n){let i=this.pos;switch(t){case or.Varint:for(;this.buf[this.pos++]&128;);break;case or.Bit64:this.pos+=4;case or.Bit32:this.pos+=4;break;case or.LengthDelimited:let r=this.uint32();this.pos+=r;break;case or.StartGroup:for(;;){const[s,o]=this.tag();if(o===or.EndGroup){if(n!==void 0&&s!==n)throw new Error("invalid end group tag");break}this.skip(o,s)}break;default:throw new Error("cant skip wire type "+t)}return this.assertBounds(),this.buf.subarray(i,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let t=this.uint32();return t>>>1^-(t&1)}int64(){return di.dec(...this.varint64())}uint64(){return di.uDec(...this.varint64())}sint64(){let[t,n]=this.varint64(),i=-(t&1);return t=(t>>>1|(n&1)<<31)^i,n=n>>>1^i,di.dec(t,n)}bool(){let[t,n]=this.varint64();return t!==0||n!==0}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return di.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return di.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let t=this.uint32(),n=this.pos;return this.pos+=t,this.assertBounds(),this.buf.subarray(n,n+t)}string(){return this.decodeUtf8(this.bytes())}}function tc(e){if(typeof e=="string")e=Number(e);else if(typeof e!="number")throw new Error("invalid int32: "+typeof e);if(!Number.isInteger(e)||e>tb||e<eb)throw new Error("invalid int32: "+e)}function Id(e){if(typeof e=="string")e=Number(e);else if(typeof e!="number")throw new Error("invalid uint32: "+typeof e);if(!Number.isInteger(e)||e>jS||e<0)throw new Error("invalid uint32: "+e)}function nb(e){if(typeof e=="string"){const t=e;if(e=Number(e),Number.isNaN(e)&&t!=="NaN")throw new Error("invalid float32: "+t)}else if(typeof e!="number")throw new Error("invalid float32: "+typeof e);if(Number.isFinite(e)&&(e>KS||e<QS))throw new Error("invalid float32: "+e)}function Ld(){return{typeUrl:"",value:new Uint8Array(0)}}const vs={encode(e,t=new ne){return e.typeUrl!==""&&t.uint32(10).string(e.typeUrl),e.value.length!==0&&t.uint32(18).bytes(e.value),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Ld();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.typeUrl=n.string();continue}case 2:{if(s!==18)break;r.value=n.bytes();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{typeUrl:ec(e.typeUrl)?globalThis.String(e.typeUrl):ec(e.type_url)?globalThis.String(e.type_url):"",value:ec(e.value)?ib(e.value):new Uint8Array(0)}},toJSON(e){const t={};return e.typeUrl!==""&&(t.typeUrl=e.typeUrl),e.value.length!==0&&(t.value=rb(e.value)),t},create(e){return vs.fromPartial(e??{})},fromPartial(e){const t=Ld();return t.typeUrl=e.typeUrl??"",t.value=e.value??new Uint8Array(0),t}};function ib(e){if(globalThis.Buffer)return Uint8Array.from(globalThis.Buffer.from(e,"base64"));{const t=globalThis.atob(e),n=new Uint8Array(t.length);for(let i=0;i<t.length;++i)n[i]=t.charCodeAt(i);return n}}function rb(e){if(globalThis.Buffer)return globalThis.Buffer.from(e).toString("base64");{const t=[];return e.forEach(n=>{t.push(globalThis.String.fromCharCode(n))}),globalThis.btoa(t.join(""))}}function ec(e){return e!=null}function Nd(e){switch(e){case 0:case"NULL_VALUE":return 0;default:return-1}}function sb(e){return e===0?"NULL_VALUE":"UNRECOGNIZED"}function nc(){return{fields:{}}}const fo={encode(e,t=new ne){return globalThis.Object.entries(e.fields).forEach(([n,i])=>{i!==void 0&&iu.encode({key:n,value:i},t.uint32(10).fork()).join()}),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=nc();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;const o=iu.decode(n,n.uint32());o.value!==void 0&&(r.fields[o.key]=o.value);continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{fields:ru(e.fields)?globalThis.Object.entries(e.fields).reduce((t,[n,i])=>(t[n]=i,t),{}):{}}},toJSON(e){const t={};if(e.fields){const n=globalThis.Object.entries(e.fields);n.length>0&&(t.fields={},n.forEach(([i,r])=>{t.fields[i]=r}))}return t},create(e){return fo.fromPartial(e??{})},fromPartial(e){const t=nc();return t.fields=globalThis.Object.entries(e.fields??{}).reduce((n,[i,r])=>(r!==void 0&&(n[i]=r),n),{}),t},wrap(e){const t=nc();if(e!==void 0)for(const n of globalThis.Object.keys(e))t.fields[n]=e[n];return t},unwrap(e){const t={};if(e.fields)for(const n of globalThis.Object.keys(e.fields))t[n]=e.fields[n];return t}};function Ud(){return{key:"",value:void 0}}const iu={encode(e,t=new ne){return e.key!==""&&t.uint32(10).string(e.key),e.value!==void 0&&zn.encode(zn.wrap(e.value),t.uint32(18).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Ud();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.key=n.string();continue}case 2:{if(s!==18)break;r.value=zn.unwrap(zn.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{key:ui(e.key)?globalThis.String(e.key):"",value:ui(e?.value)?e.value:void 0}},toJSON(e){const t={};return e.key!==""&&(t.key=e.key),e.value!==void 0&&(t.value=e.value),t},create(e){return iu.fromPartial(e??{})},fromPartial(e){const t=Ud();return t.key=e.key??"",t.value=e.value??void 0,t}};function ic(){return{nullValue:void 0,numberValue:void 0,stringValue:void 0,boolValue:void 0,structValue:void 0,listValue:void 0}}const zn={encode(e,t=new ne){return e.nullValue!==void 0&&t.uint32(8).int32(e.nullValue),e.numberValue!==void 0&&t.uint32(17).double(e.numberValue),e.stringValue!==void 0&&t.uint32(26).string(e.stringValue),e.boolValue!==void 0&&t.uint32(32).bool(e.boolValue),e.structValue!==void 0&&fo.encode(fo.wrap(e.structValue),t.uint32(42).fork()).join(),e.listValue!==void 0&&po.encode(po.wrap(e.listValue),t.uint32(50).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=ic();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==8)break;r.nullValue=n.int32();continue}case 2:{if(s!==17)break;r.numberValue=n.double();continue}case 3:{if(s!==26)break;r.stringValue=n.string();continue}case 4:{if(s!==32)break;r.boolValue=n.bool();continue}case 5:{if(s!==42)break;r.structValue=fo.unwrap(fo.decode(n,n.uint32()));continue}case 6:{if(s!==50)break;r.listValue=po.unwrap(po.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{nullValue:ui(e.nullValue)?Nd(e.nullValue):ui(e.null_value)?Nd(e.null_value):void 0,numberValue:ui(e.numberValue)?globalThis.Number(e.numberValue):ui(e.number_value)?globalThis.Number(e.number_value):void 0,stringValue:ui(e.stringValue)?globalThis.String(e.stringValue):ui(e.string_value)?globalThis.String(e.string_value):void 0,boolValue:ui(e.boolValue)?globalThis.Boolean(e.boolValue):ui(e.bool_value)?globalThis.Boolean(e.bool_value):void 0,structValue:ru(e.structValue)?e.structValue:ru(e.struct_value)?e.struct_value:void 0,listValue:globalThis.Array.isArray(e.listValue)?[...e.listValue]:globalThis.Array.isArray(e.list_value)?[...e.list_value]:void 0}},toJSON(e){const t={};return e.nullValue!==void 0&&(t.nullValue=sb(e.nullValue)),e.numberValue!==void 0&&(t.numberValue=e.numberValue),e.stringValue!==void 0&&(t.stringValue=e.stringValue),e.boolValue!==void 0&&(t.boolValue=e.boolValue),e.structValue!==void 0&&(t.structValue=e.structValue),e.listValue!==void 0&&(t.listValue=e.listValue),t},create(e){return zn.fromPartial(e??{})},fromPartial(e){const t=ic();return t.nullValue=e.nullValue??void 0,t.numberValue=e.numberValue??void 0,t.stringValue=e.stringValue??void 0,t.boolValue=e.boolValue??void 0,t.structValue=e.structValue??void 0,t.listValue=e.listValue??void 0,t},wrap(e){const t=ic();if(e===null)t.nullValue=0;else if(typeof e=="boolean")t.boolValue=e;else if(typeof e=="number")t.numberValue=e;else if(typeof e=="string")t.stringValue=e;else if(globalThis.Array.isArray(e))t.listValue=e;else if(typeof e=="object")t.structValue=e;else if(typeof e<"u")throw new globalThis.Error("Unsupported any value type: "+typeof e);return t},unwrap(e){if(e.stringValue!==void 0)return e.stringValue;if(e?.numberValue!==void 0)return e.numberValue;if(e?.boolValue!==void 0)return e.boolValue;if(e?.structValue!==void 0)return e.structValue;if(e?.listValue!==void 0)return e.listValue;if(e?.nullValue!==void 0)return null}};function rc(){return{values:[]}}const po={encode(e,t=new ne){for(const n of e.values)zn.encode(zn.wrap(n),t.uint32(10).fork()).join();return t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=rc();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.values.push(zn.unwrap(zn.decode(n,n.uint32())));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{values:globalThis.Array.isArray(e?.values)?[...e.values]:[]}},toJSON(e){const t={};return e.values?.length&&(t.values=e.values),t},create(e){return po.fromPartial(e??{})},fromPartial(e){const t=rc();return t.values=e.values?.map(n=>n)||[],t},wrap(e){const t=rc();return t.values=e??[],t},unwrap(e){return e?.hasOwnProperty("values")&&globalThis.Array.isArray(e.values)?e.values:e}};function ru(e){return typeof e=="object"&&e!==null}function ui(e){return e!=null}function Od(){return{message:void 0,value:void 0,fallback:void 0}}const Cn={encode(e,t=new ne){return e.message!==void 0&&vs.encode(e.message,t.uint32(10).fork()).join(),e.value!==void 0&&zn.encode(zn.wrap(e.value),t.uint32(18).fork()).join(),e.fallback!==void 0&&xs.encode(e.fallback,t.uint32(26).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Od();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.message=vs.decode(n,n.uint32());continue}case 2:{if(s!==18)break;r.value=zn.unwrap(zn.decode(n,n.uint32()));continue}case 3:{if(s!==26)break;r.fallback=xs.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{message:gr(e.message)?vs.fromJSON(e.message):void 0,value:gr(e?.value)?e.value:void 0,fallback:gr(e.fallback)?xs.fromJSON(e.fallback):void 0}},toJSON(e){const t={};return e.message!==void 0&&(t.message=vs.toJSON(e.message)),e.value!==void 0&&(t.value=e.value),e.fallback!==void 0&&(t.fallback=xs.toJSON(e.fallback)),t},create(e){return Cn.fromPartial(e??{})},fromPartial(e){const t=Od();return t.message=e.message!==void 0&&e.message!==null?vs.fromPartial(e.message):void 0,t.value=e.value??void 0,t.fallback=e.fallback!==void 0&&e.fallback!==null?xs.fromPartial(e.fallback):void 0,t}};function Fd(){return{data:void 0}}const xs={encode(e,t=new ne){return e.data!==void 0&&lr.encode(e.data,t.uint32(10).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Fd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.data=lr.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{data:gr(e.data)?lr.fromJSON(e.data):void 0}},toJSON(e){const t={};return e.data!==void 0&&(t.data=lr.toJSON(e.data)),t},create(e){return xs.fromPartial(e??{})},fromPartial(e){const t=Fd();return t.data=e.data!==void 0&&e.data!==null?lr.fromPartial(e.data):void 0,t}};function kd(){return{items:{}}}const lr={encode(e,t=new ne){return globalThis.Object.entries(e.items).forEach(([n,i])=>{su.encode({key:n,value:i},t.uint32(10).fork()).join()}),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=kd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;const o=su.decode(n,n.uint32());o.value!==void 0&&(r.items[o.key]=o.value);continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{items:ob(e.items)?globalThis.Object.entries(e.items).reduce((t,[n,i])=>(t[n]=Cn.fromJSON(i),t),{}):{}}},toJSON(e){const t={};if(e.items){const n=globalThis.Object.entries(e.items);n.length>0&&(t.items={},n.forEach(([i,r])=>{t.items[i]=Cn.toJSON(r)}))}return t},create(e){return lr.fromPartial(e??{})},fromPartial(e){const t=kd();return t.items=globalThis.Object.entries(e.items??{}).reduce((n,[i,r])=>(r!==void 0&&(n[i]=Cn.fromPartial(r)),n),{}),t}};function Bd(){return{key:"",value:void 0}}const su={encode(e,t=new ne){return e.key!==""&&t.uint32(10).string(e.key),e.value!==void 0&&Cn.encode(e.value,t.uint32(18).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Bd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.key=n.string();continue}case 2:{if(s!==18)break;r.value=Cn.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{key:gr(e.key)?globalThis.String(e.key):"",value:gr(e.value)?Cn.fromJSON(e.value):void 0}},toJSON(e){const t={};return e.key!==""&&(t.key=e.key),e.value!==void 0&&(t.value=Cn.toJSON(e.value)),t},create(e){return su.fromPartial(e??{})},fromPartial(e){const t=Bd();return t.key=e.key??"",t.value=e.value!==void 0&&e.value!==null?Cn.fromPartial(e.value):void 0,t}};function zd(){return{data:void 0,version:void 0}}const P0={encode(e,t=new ne){return e.data!==void 0&&Cn.encode(e.data,t.uint32(10).fork()).join(),e.version!==void 0&&t.uint32(18).string(e.version),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=zd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.data=Cn.decode(n,n.uint32());continue}case 2:{if(s!==18)break;r.version=n.string();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{data:gr(e.data)?Cn.fromJSON(e.data):void 0,version:gr(e.version)?globalThis.String(e.version):void 0}},toJSON(e){const t={};return e.data!==void 0&&(t.data=Cn.toJSON(e.data)),e.version!==void 0&&(t.version=e.version),t},create(e){return P0.fromPartial(e??{})},fromPartial(e){const t=zd();return t.data=e.data!==void 0&&e.data!==null?Cn.fromPartial(e.data):void 0,t.version=e.version??void 0,t}};function ob(e){return typeof e=="object"&&e!==null}function gr(e){return e!=null}function Vd(){return{guid:"",name:"",x:0,y:0,z:0}}const Ht={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.x!==0&&t.uint32(29).float(e.x),e.y!==0&&t.uint32(37).float(e.y),e.z!==0&&t.uint32(45).float(e.z),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Vd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.x=n.float();continue}case 4:{if(s!==37)break;r.y=n.float();continue}case 5:{if(s!==45)break;r.z=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",x:at(e.x)?globalThis.Number(e.x):0,y:at(e.y)?globalThis.Number(e.y):0,z:at(e.z)?globalThis.Number(e.z):0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.x!==0&&(t.x=e.x),e.y!==0&&(t.y=e.y),e.z!==0&&(t.z=e.z),t},create(e){return Ht.fromPartial(e??{})},fromPartial(e){const t=Vd();return t.guid=e.guid??"",t.name=e.name??"",t.x=e.x??0,t.y=e.y??0,t.z=e.z??0,t}};function Hd(){return{guid:"",name:"",x:0,y:0,z:0}}const Me={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.x!==0&&t.uint32(29).float(e.x),e.y!==0&&t.uint32(37).float(e.y),e.z!==0&&t.uint32(45).float(e.z),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Hd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.x=n.float();continue}case 4:{if(s!==37)break;r.y=n.float();continue}case 5:{if(s!==45)break;r.z=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",x:at(e.x)?globalThis.Number(e.x):0,y:at(e.y)?globalThis.Number(e.y):0,z:at(e.z)?globalThis.Number(e.z):0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.x!==0&&(t.x=e.x),e.y!==0&&(t.y=e.y),e.z!==0&&(t.z=e.z),t},create(e){return Me.fromPartial(e??{})},fromPartial(e){const t=Hd();return t.guid=e.guid??"",t.name=e.name??"",t.x=e.x??0,t.y=e.y??0,t.z=e.z??0,t}};function Gd(){return{guid:"",name:"",point:void 0,xaxis:void 0,yaxis:void 0}}const Wt={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.point!==void 0&&Ht.encode(e.point,t.uint32(26).fork()).join(),e.xaxis!==void 0&&Me.encode(e.xaxis,t.uint32(34).fork()).join(),e.yaxis!==void 0&&Me.encode(e.yaxis,t.uint32(42).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Gd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.point=Ht.decode(n,n.uint32());continue}case 4:{if(s!==34)break;r.xaxis=Me.decode(n,n.uint32());continue}case 5:{if(s!==42)break;r.yaxis=Me.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",point:at(e.point)?Ht.fromJSON(e.point):void 0,xaxis:at(e.xaxis)?Me.fromJSON(e.xaxis):void 0,yaxis:at(e.yaxis)?Me.fromJSON(e.yaxis):void 0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.point!==void 0&&(t.point=Ht.toJSON(e.point)),e.xaxis!==void 0&&(t.xaxis=Me.toJSON(e.xaxis)),e.yaxis!==void 0&&(t.yaxis=Me.toJSON(e.yaxis)),t},create(e){return Wt.fromPartial(e??{})},fromPartial(e){const t=Gd();return t.guid=e.guid??"",t.name=e.name??"",t.point=e.point!==void 0&&e.point!==null?Ht.fromPartial(e.point):void 0,t.xaxis=e.xaxis!==void 0&&e.xaxis!==null?Me.fromPartial(e.xaxis):void 0,t.yaxis=e.yaxis!==void 0&&e.yaxis!==null?Me.fromPartial(e.yaxis):void 0,t}};function Wd(){return{guid:"",name:"",point:void 0,normal:void 0}}const Ih={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.point!==void 0&&Ht.encode(e.point,t.uint32(26).fork()).join(),e.normal!==void 0&&Me.encode(e.normal,t.uint32(34).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Wd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.point=Ht.decode(n,n.uint32());continue}case 4:{if(s!==34)break;r.normal=Me.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",point:at(e.point)?Ht.fromJSON(e.point):void 0,normal:at(e.normal)?Me.fromJSON(e.normal):void 0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.point!==void 0&&(t.point=Ht.toJSON(e.point)),e.normal!==void 0&&(t.normal=Me.toJSON(e.normal)),t},create(e){return Ih.fromPartial(e??{})},fromPartial(e){const t=Wd();return t.guid=e.guid??"",t.name=e.name??"",t.point=e.point!==void 0&&e.point!==null?Ht.fromPartial(e.point):void 0,t.normal=e.normal!==void 0&&e.normal!==null?Me.fromPartial(e.normal):void 0,t}};function Xd(){return{guid:"",name:"",w:0,x:0,y:0,z:0}}const Lh={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.w!==0&&t.uint32(29).float(e.w),e.x!==0&&t.uint32(37).float(e.x),e.y!==0&&t.uint32(45).float(e.y),e.z!==0&&t.uint32(53).float(e.z),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Xd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.w=n.float();continue}case 4:{if(s!==37)break;r.x=n.float();continue}case 5:{if(s!==45)break;r.y=n.float();continue}case 6:{if(s!==53)break;r.z=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",w:at(e.w)?globalThis.Number(e.w):0,x:at(e.x)?globalThis.Number(e.x):0,y:at(e.y)?globalThis.Number(e.y):0,z:at(e.z)?globalThis.Number(e.z):0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.w!==0&&(t.w=e.w),e.x!==0&&(t.x=e.x),e.y!==0&&(t.y=e.y),e.z!==0&&(t.z=e.z),t},create(e){return Lh.fromPartial(e??{})},fromPartial(e){const t=Xd();return t.guid=e.guid??"",t.name=e.name??"",t.w=e.w??0,t.x=e.x??0,t.y=e.y??0,t.z=e.z??0,t}};function qd(){return{guid:"",name:"",start:void 0,end:void 0}}const Nh={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.start!==void 0&&Ht.encode(e.start,t.uint32(26).fork()).join(),e.end!==void 0&&Ht.encode(e.end,t.uint32(34).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=qd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.start=Ht.decode(n,n.uint32());continue}case 4:{if(s!==34)break;r.end=Ht.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",start:at(e.start)?Ht.fromJSON(e.start):void 0,end:at(e.end)?Ht.fromJSON(e.end):void 0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.start!==void 0&&(t.start=Ht.toJSON(e.start)),e.end!==void 0&&(t.end=Ht.toJSON(e.end)),t},create(e){return Nh.fromPartial(e??{})},fromPartial(e){const t=qd();return t.guid=e.guid??"",t.name=e.name??"",t.start=e.start!==void 0&&e.start!==null?Ht.fromPartial(e.start):void 0,t.end=e.end!==void 0&&e.end!==null?Ht.fromPartial(e.end):void 0,t}};function Yd(){return{guid:"",name:"",radius:0,frame:void 0}}const cr={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.radius!==0&&t.uint32(29).float(e.radius),e.frame!==void 0&&Wt.encode(e.frame,t.uint32(34).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Yd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==34)break;r.frame=Wt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",radius:at(e.radius)?globalThis.Number(e.radius):0,frame:at(e.frame)?Wt.fromJSON(e.frame):void 0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.radius!==0&&(t.radius=e.radius),e.frame!==void 0&&(t.frame=Wt.toJSON(e.frame)),t},create(e){return cr.fromPartial(e??{})},fromPartial(e){const t=Yd();return t.guid=e.guid??"",t.name=e.name??"",t.radius=e.radius??0,t.frame=e.frame!==void 0&&e.frame!==null?Wt.fromPartial(e.frame):void 0,t}};function Jd(){return{guid:"",name:"",circle:void 0,startAngle:0,endAngle:0}}const Uh={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.circle!==void 0&&cr.encode(e.circle,t.uint32(26).fork()).join(),e.startAngle!==0&&t.uint32(37).float(e.startAngle),e.endAngle!==0&&t.uint32(45).float(e.endAngle),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Jd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.circle=cr.decode(n,n.uint32());continue}case 4:{if(s!==37)break;r.startAngle=n.float();continue}case 5:{if(s!==45)break;r.endAngle=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",circle:at(e.circle)?cr.fromJSON(e.circle):void 0,startAngle:at(e.startAngle)?globalThis.Number(e.startAngle):at(e.start_angle)?globalThis.Number(e.start_angle):0,endAngle:at(e.endAngle)?globalThis.Number(e.endAngle):at(e.end_angle)?globalThis.Number(e.end_angle):0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.circle!==void 0&&(t.circle=cr.toJSON(e.circle)),e.startAngle!==0&&(t.startAngle=e.startAngle),e.endAngle!==0&&(t.endAngle=e.endAngle),t},create(e){return Uh.fromPartial(e??{})},fromPartial(e){const t=Jd();return t.guid=e.guid??"",t.name=e.name??"",t.circle=e.circle!==void 0&&e.circle!==null?cr.fromPartial(e.circle):void 0,t.startAngle=e.startAngle??0,t.endAngle=e.endAngle??0,t}};function $d(){return{guid:"",name:"",major:0,minor:0,frame:void 0}}const Oh={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.major!==0&&t.uint32(29).float(e.major),e.minor!==0&&t.uint32(37).float(e.minor),e.frame!==void 0&&Wt.encode(e.frame,t.uint32(42).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=$d();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.major=n.float();continue}case 4:{if(s!==37)break;r.minor=n.float();continue}case 5:{if(s!==42)break;r.frame=Wt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",major:at(e.major)?globalThis.Number(e.major):0,minor:at(e.minor)?globalThis.Number(e.minor):0,frame:at(e.frame)?Wt.fromJSON(e.frame):void 0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.major!==0&&(t.major=e.major),e.minor!==0&&(t.minor=e.minor),e.frame!==void 0&&(t.frame=Wt.toJSON(e.frame)),t},create(e){return Oh.fromPartial(e??{})},fromPartial(e){const t=$d();return t.guid=e.guid??"",t.name=e.name??"",t.major=e.major??0,t.minor=e.minor??0,t.frame=e.frame!==void 0&&e.frame!==null?Wt.fromPartial(e.frame):void 0,t}};function Zd(){return{guid:"",name:"",focal:0,frame:void 0}}const Fh={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.focal!==0&&t.uint32(29).float(e.focal),e.frame!==void 0&&Wt.encode(e.frame,t.uint32(34).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Zd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.focal=n.float();continue}case 4:{if(s!==34)break;r.frame=Wt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",focal:at(e.focal)?globalThis.Number(e.focal):0,frame:at(e.frame)?Wt.fromJSON(e.frame):void 0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.focal!==0&&(t.focal=e.focal),e.frame!==void 0&&(t.frame=Wt.toJSON(e.frame)),t},create(e){return Fh.fromPartial(e??{})},fromPartial(e){const t=Zd();return t.guid=e.guid??"",t.name=e.name??"",t.focal=e.focal??0,t.frame=e.frame!==void 0&&e.frame!==null?Wt.fromPartial(e.frame):void 0,t}};function Kd(){return{guid:"",name:"",major:0,minor:0,frame:void 0}}const kh={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.major!==0&&t.uint32(29).float(e.major),e.minor!==0&&t.uint32(37).float(e.minor),e.frame!==void 0&&Wt.encode(e.frame,t.uint32(42).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Kd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.major=n.float();continue}case 4:{if(s!==37)break;r.minor=n.float();continue}case 5:{if(s!==42)break;r.frame=Wt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",major:at(e.major)?globalThis.Number(e.major):0,minor:at(e.minor)?globalThis.Number(e.minor):0,frame:at(e.frame)?Wt.fromJSON(e.frame):void 0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.major!==0&&(t.major=e.major),e.minor!==0&&(t.minor=e.minor),e.frame!==void 0&&(t.frame=Wt.toJSON(e.frame)),t},create(e){return kh.fromPartial(e??{})},fromPartial(e){const t=Kd();return t.guid=e.guid??"",t.name=e.name??"",t.major=e.major??0,t.minor=e.minor??0,t.frame=e.frame!==void 0&&e.frame!==null?Wt.fromPartial(e.frame):void 0,t}};function Qd(){return{guid:"",name:"",points:[],degree:0}}const Bh={encode(e,t=new ne){e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name);for(const n of e.points)Ht.encode(n,t.uint32(26).fork()).join();return e.degree!==0&&t.uint32(32).int32(e.degree),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Qd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(Ht.decode(n,n.uint32()));continue}case 4:{if(s!==32)break;r.degree=n.int32();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",points:globalThis.Array.isArray(e?.points)?e.points.map(t=>Ht.fromJSON(t)):[],degree:at(e.degree)?globalThis.Number(e.degree):0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.points?.length&&(t.points=e.points.map(n=>Ht.toJSON(n))),e.degree!==0&&(t.degree=Math.round(e.degree)),t},create(e){return Bh.fromPartial(e??{})},fromPartial(e){const t=Qd();return t.guid=e.guid??"",t.name=e.name??"",t.points=e.points?.map(n=>Ht.fromPartial(n))||[],t.degree=e.degree??0,t}};function jd(){return{guid:"",name:"",points:[]}}const zh={encode(e,t=new ne){e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name);for(const n of e.points)Ht.encode(n,t.uint32(26).fork()).join();return t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=jd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(Ht.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",points:globalThis.Array.isArray(e?.points)?e.points.map(t=>Ht.fromJSON(t)):[]}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.points?.length&&(t.points=e.points.map(n=>Ht.toJSON(n))),t},create(e){return zh.fromPartial(e??{})},fromPartial(e){const t=jd();return t.guid=e.guid??"",t.name=e.name??"",t.points=e.points?.map(n=>Ht.fromPartial(n))||[],t}};function tp(){return{guid:"",name:"",points:[]}}const Vh={encode(e,t=new ne){e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name);for(const n of e.points)Ht.encode(n,t.uint32(26).fork()).join();return t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=tp();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(Ht.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",points:globalThis.Array.isArray(e?.points)?e.points.map(t=>Ht.fromJSON(t)):[]}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.points?.length&&(t.points=e.points.map(n=>Ht.toJSON(n))),t},create(e){return Vh.fromPartial(e??{})},fromPartial(e){const t=tp();return t.guid=e.guid??"",t.name=e.name??"",t.points=e.points?.map(n=>Ht.fromPartial(n))||[],t}};function ep(){return{guid:"",name:"",frame:void 0,xsize:0,ysize:0,zsize:0}}const Hh={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.frame!==void 0&&Wt.encode(e.frame,t.uint32(26).fork()).join(),e.xsize!==0&&t.uint32(37).float(e.xsize),e.ysize!==0&&t.uint32(45).float(e.ysize),e.zsize!==0&&t.uint32(53).float(e.zsize),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=ep();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.frame=Wt.decode(n,n.uint32());continue}case 4:{if(s!==37)break;r.xsize=n.float();continue}case 5:{if(s!==45)break;r.ysize=n.float();continue}case 6:{if(s!==53)break;r.zsize=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",frame:at(e.frame)?Wt.fromJSON(e.frame):void 0,xsize:at(e.xsize)?globalThis.Number(e.xsize):0,ysize:at(e.ysize)?globalThis.Number(e.ysize):0,zsize:at(e.zsize)?globalThis.Number(e.zsize):0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.frame!==void 0&&(t.frame=Wt.toJSON(e.frame)),e.xsize!==0&&(t.xsize=e.xsize),e.ysize!==0&&(t.ysize=e.ysize),e.zsize!==0&&(t.zsize=e.zsize),t},create(e){return Hh.fromPartial(e??{})},fromPartial(e){const t=ep();return t.guid=e.guid??"",t.name=e.name??"",t.frame=e.frame!==void 0&&e.frame!==null?Wt.fromPartial(e.frame):void 0,t.xsize=e.xsize??0,t.ysize=e.ysize??0,t.zsize=e.zsize??0,t}};function np(){return{guid:"",name:"",radius:0,frame:void 0}}const Gh={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.radius!==0&&t.uint32(29).float(e.radius),e.frame!==void 0&&Wt.encode(e.frame,t.uint32(34).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=np();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==34)break;r.frame=Wt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",radius:at(e.radius)?globalThis.Number(e.radius):0,frame:at(e.frame)?Wt.fromJSON(e.frame):void 0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.radius!==0&&(t.radius=e.radius),e.frame!==void 0&&(t.frame=Wt.toJSON(e.frame)),t},create(e){return Gh.fromPartial(e??{})},fromPartial(e){const t=np();return t.guid=e.guid??"",t.name=e.name??"",t.radius=e.radius??0,t.frame=e.frame!==void 0&&e.frame!==null?Wt.fromPartial(e.frame):void 0,t}};function ip(){return{guid:"",name:"",radius:0,height:0,frame:void 0}}const Wh={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.radius!==0&&t.uint32(29).float(e.radius),e.height!==0&&t.uint32(37).float(e.height),e.frame!==void 0&&Wt.encode(e.frame,t.uint32(42).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=ip();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==37)break;r.height=n.float();continue}case 5:{if(s!==42)break;r.frame=Wt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",radius:at(e.radius)?globalThis.Number(e.radius):0,height:at(e.height)?globalThis.Number(e.height):0,frame:at(e.frame)?Wt.fromJSON(e.frame):void 0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.radius!==0&&(t.radius=e.radius),e.height!==0&&(t.height=e.height),e.frame!==void 0&&(t.frame=Wt.toJSON(e.frame)),t},create(e){return Wh.fromPartial(e??{})},fromPartial(e){const t=ip();return t.guid=e.guid??"",t.name=e.name??"",t.radius=e.radius??0,t.height=e.height??0,t.frame=e.frame!==void 0&&e.frame!==null?Wt.fromPartial(e.frame):void 0,t}};function rp(){return{guid:"",name:"",radius:0,height:0,frame:void 0}}const Xh={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.radius!==0&&t.uint32(29).float(e.radius),e.height!==0&&t.uint32(37).float(e.height),e.frame!==void 0&&Wt.encode(e.frame,t.uint32(42).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=rp();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==37)break;r.height=n.float();continue}case 5:{if(s!==42)break;r.frame=Wt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",radius:at(e.radius)?globalThis.Number(e.radius):0,height:at(e.height)?globalThis.Number(e.height):0,frame:at(e.frame)?Wt.fromJSON(e.frame):void 0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.radius!==0&&(t.radius=e.radius),e.height!==0&&(t.height=e.height),e.frame!==void 0&&(t.frame=Wt.toJSON(e.frame)),t},create(e){return Xh.fromPartial(e??{})},fromPartial(e){const t=rp();return t.guid=e.guid??"",t.name=e.name??"",t.radius=e.radius??0,t.height=e.height??0,t.frame=e.frame!==void 0&&e.frame!==null?Wt.fromPartial(e.frame):void 0,t}};function sp(){return{guid:"",name:"",radius:0,height:0,frame:void 0}}const qh={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.radius!==0&&t.uint32(29).float(e.radius),e.height!==0&&t.uint32(37).float(e.height),e.frame!==void 0&&Wt.encode(e.frame,t.uint32(42).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=sp();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==37)break;r.height=n.float();continue}case 5:{if(s!==42)break;r.frame=Wt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",radius:at(e.radius)?globalThis.Number(e.radius):0,height:at(e.height)?globalThis.Number(e.height):0,frame:at(e.frame)?Wt.fromJSON(e.frame):void 0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.radius!==0&&(t.radius=e.radius),e.height!==0&&(t.height=e.height),e.frame!==void 0&&(t.frame=Wt.toJSON(e.frame)),t},create(e){return qh.fromPartial(e??{})},fromPartial(e){const t=sp();return t.guid=e.guid??"",t.name=e.name??"",t.radius=e.radius??0,t.height=e.height??0,t.frame=e.frame!==void 0&&e.frame!==null?Wt.fromPartial(e.frame):void 0,t}};function op(){return{guid:"",name:"",radiusAxis:0,radiusPipe:0,frame:void 0}}const Yh={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.radiusAxis!==0&&t.uint32(29).float(e.radiusAxis),e.radiusPipe!==0&&t.uint32(37).float(e.radiusPipe),e.frame!==void 0&&Wt.encode(e.frame,t.uint32(42).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=op();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radiusAxis=n.float();continue}case 4:{if(s!==37)break;r.radiusPipe=n.float();continue}case 5:{if(s!==42)break;r.frame=Wt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",radiusAxis:at(e.radiusAxis)?globalThis.Number(e.radiusAxis):at(e.radius_axis)?globalThis.Number(e.radius_axis):0,radiusPipe:at(e.radiusPipe)?globalThis.Number(e.radiusPipe):at(e.radius_pipe)?globalThis.Number(e.radius_pipe):0,frame:at(e.frame)?Wt.fromJSON(e.frame):void 0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.radiusAxis!==0&&(t.radiusAxis=e.radiusAxis),e.radiusPipe!==0&&(t.radiusPipe=e.radiusPipe),e.frame!==void 0&&(t.frame=Wt.toJSON(e.frame)),t},create(e){return Yh.fromPartial(e??{})},fromPartial(e){const t=op();return t.guid=e.guid??"",t.name=e.name??"",t.radiusAxis=e.radiusAxis??0,t.radiusPipe=e.radiusPipe??0,t.frame=e.frame!==void 0&&e.frame!==null?Wt.fromPartial(e.frame):void 0,t}};function ap(){return{guid:"",name:"",points:[]}}const Jh={encode(e,t=new ne){e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name);for(const n of e.points)Ht.encode(n,t.uint32(26).fork()).join();return t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=ap();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(Ht.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",points:globalThis.Array.isArray(e?.points)?e.points.map(t=>Ht.fromJSON(t)):[]}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.points?.length&&(t.points=e.points.map(n=>Ht.toJSON(n))),t},create(e){return Jh.fromPartial(e??{})},fromPartial(e){const t=ap();return t.guid=e.guid??"",t.name=e.name??"",t.points=e.points?.map(n=>Ht.fromPartial(n))||[],t}};function lp(){return{guid:"",name:"",matrix:[]}}const $h={encode(e,t=new ne){e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),t.uint32(26).fork();for(const n of e.matrix)t.float(n);return t.join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=lp();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",matrix:globalThis.Array.isArray(e?.matrix)?e.matrix.map(t=>globalThis.Number(t)):[]}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.matrix?.length&&(t.matrix=e.matrix),t},create(e){return $h.fromPartial(e??{})},fromPartial(e){const t=lp();return t.guid=e.guid??"",t.name=e.name??"",t.matrix=e.matrix?.map(n=>n)||[],t}};function cp(){return{guid:"",name:"",translationVector:void 0}}const Zh={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.translationVector!==void 0&&Me.encode(e.translationVector,t.uint32(26).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=cp();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.translationVector=Me.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",translationVector:at(e.translationVector)?Me.fromJSON(e.translationVector):at(e.translation_vector)?Me.fromJSON(e.translation_vector):void 0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.translationVector!==void 0&&(t.translationVector=Me.toJSON(e.translationVector)),t},create(e){return Zh.fromPartial(e??{})},fromPartial(e){const t=cp();return t.guid=e.guid??"",t.name=e.name??"",t.translationVector=e.translationVector!==void 0&&e.translationVector!==null?Me.fromPartial(e.translationVector):void 0,t}};function up(){return{guid:"",name:"",axis:void 0,angle:0,point:void 0}}const Kh={encode(e,t=new ne){return e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),e.axis!==void 0&&Me.encode(e.axis,t.uint32(26).fork()).join(),e.angle!==0&&t.uint32(37).float(e.angle),e.point!==void 0&&Ht.encode(e.point,t.uint32(42).fork()).join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=up();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.axis=Me.decode(n,n.uint32());continue}case 4:{if(s!==37)break;r.angle=n.float();continue}case 5:{if(s!==42)break;r.point=Ht.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",axis:at(e.axis)?Me.fromJSON(e.axis):void 0,angle:at(e.angle)?globalThis.Number(e.angle):0,point:at(e.point)?Ht.fromJSON(e.point):void 0}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.axis!==void 0&&(t.axis=Me.toJSON(e.axis)),e.angle!==0&&(t.angle=e.angle),e.point!==void 0&&(t.point=Ht.toJSON(e.point)),t},create(e){return Kh.fromPartial(e??{})},fromPartial(e){const t=up();return t.guid=e.guid??"",t.name=e.name??"",t.axis=e.axis!==void 0&&e.axis!==null?Me.fromPartial(e.axis):void 0,t.angle=e.angle??0,t.point=e.point!==void 0&&e.point!==null?Ht.fromPartial(e.point):void 0,t}};function hp(){return{guid:"",name:"",matrix:[]}}const Qh={encode(e,t=new ne){e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),t.uint32(26).fork();for(const n of e.matrix)t.float(n);return t.join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=hp();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",matrix:globalThis.Array.isArray(e?.matrix)?e.matrix.map(t=>globalThis.Number(t)):[]}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.matrix?.length&&(t.matrix=e.matrix),t},create(e){return Qh.fromPartial(e??{})},fromPartial(e){const t=hp();return t.guid=e.guid??"",t.name=e.name??"",t.matrix=e.matrix?.map(n=>n)||[],t}};function fp(){return{guid:"",name:"",matrix:[]}}const jh={encode(e,t=new ne){e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),t.uint32(26).fork();for(const n of e.matrix)t.float(n);return t.join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=fp();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",matrix:globalThis.Array.isArray(e?.matrix)?e.matrix.map(t=>globalThis.Number(t)):[]}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.matrix?.length&&(t.matrix=e.matrix),t},create(e){return jh.fromPartial(e??{})},fromPartial(e){const t=fp();return t.guid=e.guid??"",t.name=e.name??"",t.matrix=e.matrix?.map(n=>n)||[],t}};function dp(){return{guid:"",name:"",matrix:[]}}const tf={encode(e,t=new ne){e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),t.uint32(26).fork();for(const n of e.matrix)t.float(n);return t.join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=dp();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",matrix:globalThis.Array.isArray(e?.matrix)?e.matrix.map(t=>globalThis.Number(t)):[]}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.matrix?.length&&(t.matrix=e.matrix),t},create(e){return tf.fromPartial(e??{})},fromPartial(e){const t=dp();return t.guid=e.guid??"",t.name=e.name??"",t.matrix=e.matrix?.map(n=>n)||[],t}};function pp(){return{guid:"",name:"",matrix:[]}}const ef={encode(e,t=new ne){e.guid!==""&&t.uint32(10).string(e.guid),e.name!==""&&t.uint32(18).string(e.name),t.uint32(26).fork();for(const n of e.matrix)t.float(n);return t.join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=pp();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:at(e.guid)?globalThis.String(e.guid):"",name:at(e.name)?globalThis.String(e.name):"",matrix:globalThis.Array.isArray(e?.matrix)?e.matrix.map(t=>globalThis.Number(t)):[]}},toJSON(e){const t={};return e.guid!==""&&(t.guid=e.guid),e.name!==""&&(t.name=e.name),e.matrix?.length&&(t.matrix=e.matrix),t},create(e){return ef.fromPartial(e??{})},fromPartial(e){const t=pp();return t.guid=e.guid??"",t.name=e.name??"",t.matrix=e.matrix?.map(n=>n)||[],t}};function at(e){return e!=null}const nf="182",Wr={ROTATE:0,DOLLY:1,PAN:2},Ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ab=0,mp=1,lb=2,Ya=1,C0=2,mo=3,vr=0,fn=1,xn=2,Hi=0,Ds=1,gp=2,_p=3,vp=4,cb=5,Ur=100,ub=101,hb=102,fb=103,db=104,pb=200,mb=201,gb=202,_b=203,ou=204,au=205,vb=206,xb=207,yb=208,Sb=209,bb=210,Mb=211,wb=212,Eb=213,Tb=214,lu=0,cu=1,uu=2,Us=3,hu=4,fu=5,du=6,pu=7,R0=0,Ab=1,Pb=2,_i=0,D0=1,I0=2,L0=3,rf=4,N0=5,U0=6,O0=7,F0=300,qr=301,Os=302,mu=303,gu=304,Il=306,_u=1e3,Bi=1001,vu=1002,nn=1003,Cb=1004,ca=1005,un=1006,sc=1007,Fr=1008,kn=1009,k0=1010,B0=1011,ko=1012,sf=1013,bi=1014,pi=1015,Yi=1016,of=1017,af=1018,Bo=1020,z0=35902,V0=35899,H0=1021,G0=1022,Kn=1023,Ji=1026,kr=1027,W0=1028,lf=1029,Fs=1030,cf=1031,uf=1033,Ja=33776,$a=33777,Za=33778,Ka=33779,xu=35840,yu=35841,Su=35842,bu=35843,Mu=36196,wu=37492,Eu=37496,Tu=37488,Au=37489,Pu=37490,Cu=37491,Ru=37808,Du=37809,Iu=37810,Lu=37811,Nu=37812,Uu=37813,Ou=37814,Fu=37815,ku=37816,Bu=37817,zu=37818,Vu=37819,Hu=37820,Gu=37821,Wu=36492,Xu=36494,qu=36495,Yu=36283,Ju=36284,$u=36285,Zu=36286,Rb=3200,X0=0,Db=1,ur="",On="srgb",ks="srgb-linear",ul="linear",be="srgb",is=7680,xp=519,Ib=512,Lb=513,Nb=514,hf=515,Ub=516,Ob=517,ff=518,Fb=519,yp=35044,Sp="300 es",mi=2e3,hl=2001;function q0(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function fl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function kb(){const e=fl("canvas");return e.style.display="block",e}const bp={};function Mp(...e){const t="THREE."+e.shift();console.log(t,...e)}function Yt(...e){const t="THREE."+e.shift();console.warn(t,...e)}function de(...e){const t="THREE."+e.shift();console.error(t,...e)}function zo(...e){const t=e.join(" ");t in bp||(bp[t]=!0,Yt(...e))}function Bb(e,t,n){return new Promise(function(i,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class Kr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wp=1234567;const Ao=Math.PI/180,Bs=180/Math.PI;function Qr(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[e&255]+sn[e>>8&255]+sn[e>>16&255]+sn[e>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function re(e,t,n){return Math.max(t,Math.min(n,e))}function df(e,t){return(e%t+t)%t}function zb(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)}function Vb(e,t,n){return e!==t?(n-e)/(t-e):0}function Po(e,t,n){return(1-n)*e+n*t}function Hb(e,t,n,i){return Po(e,t,1-Math.exp(-n*i))}function Gb(e,t=1){return t-Math.abs(df(e,t*2)-t)}function Wb(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Xb(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function qb(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Yb(e,t){return e+Math.random()*(t-e)}function Jb(e){return e*(.5-Math.random())}function $b(e){e!==void 0&&(wp=e);let t=wp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zb(e){return e*Ao}function Kb(e){return e*Bs}function Qb(e){return(e&e-1)===0&&e!==0}function jb(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function tM(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function eM(e,t,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((t+i)/2),u=o((t+i)/2),h=s((t-i)/2),f=o((t-i)/2),p=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":e.set(a*u,l*h,l*f,a*c);break;case"YZY":e.set(l*f,a*u,l*h,a*c);break;case"ZXZ":e.set(l*h,l*f,a*u,a*c);break;case"XZX":e.set(a*u,l*g,l*p,a*c);break;case"YXY":e.set(l*p,a*u,l*g,a*c);break;case"ZYZ":e.set(l*g,l*p,a*u,a*c);break;default:Yt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ys(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function gn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const Ku={DEG2RAD:Ao,RAD2DEG:Bs,generateUUID:Qr,clamp:re,euclideanModulo:df,mapLinear:zb,inverseLerp:Vb,lerp:Po,damp:Hb,pingpong:Gb,smoothstep:Wb,smootherstep:Xb,randInt:qb,randFloat:Yb,randFloatSpread:Jb,seededRandom:$b,degToRad:Zb,radToDeg:Kb,isPowerOfTwo:Qb,ceilPowerOfTwo:jb,floorPowerOfTwo:tM,setQuaternionFromProperEuler:eM,normalize:gn,denormalize:ys};class mt{constructor(t=0,n=0){mt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=re(this.x,t.x,n.x),this.y=re(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=re(this.x,t,n),this.y=re(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let en=class{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a<=0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=h;return}if(a>=1){t[n+0]=f,t[n+1]=p,t[n+2]=g,t[n+3]=v;return}if(h!==v||l!==f||c!==p||u!==g){let m=l*f+c*p+u*g+h*v;m<0&&(f=-f,p=-p,g=-g,v=-v,m=-m);let d=1-a;if(m<.9995){const S=Math.acos(m),y=Math.sin(S);d=Math.sin(d*S)/y,a=Math.sin(a*S)/y,l=l*d+f*a,c=c*d+p*a,u=u*d+g*a,h=h*d+v*a}else{l=l*d+f*a,c=c*d+p*a,u=u*d+g*a,h=h*d+v*a;const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return t[n]=a*g+u*h+l*p-c*f,t[n+1]=l*g+u*f+c*h-a*p,t[n+2]=c*g+u*p+a*f-l*h,t[n+3]=u*g-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,s=t._z,o=t._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let i=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class D{constructor(t=0,n=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ep.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ep.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=re(this.x,t.x,n.x),this.y=re(this.y,t.y,n.y),this.z=re(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=re(this.x,t,n),this.y=re(this.y,t,n),this.z=re(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return oc.copy(this).projectOnVector(t),this.sub(oc)}reflect(t){return this.sub(oc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oc=new D,Ep=new en;class ie{constructor(t,n,i,r,s,o,a,l,c){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,o,a,l,c)}set(t,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],v=r[0],m=r[3],d=r[6],S=r[1],y=r[4],x=r[7],A=r[2],P=r[5],C=r[8];return s[0]=o*v+a*S+l*A,s[3]=o*m+a*y+l*P,s[6]=o*d+a*x+l*C,s[1]=c*v+u*S+h*A,s[4]=c*m+u*y+h*P,s[7]=c*d+u*x+h*C,s[2]=f*v+p*S+g*A,s[5]=f*m+p*y+g*P,s[8]=f*d+p*x+g*C,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=n*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(r*c-u*i)*v,t[2]=(a*i-r*o)*v,t[3]=f*v,t[4]=(u*n-r*l)*v,t[5]=(r*s-a*n)*v,t[6]=p*v,t[7]=(i*l-c*n)*v,t[8]=(o*n-i*s)*v,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(ac.makeScale(t,n)),this}rotate(t){return this.premultiply(ac.makeRotation(-t)),this}translate(t,n){return this.premultiply(ac.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ac=new ie,Tp=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ap=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nM(){const e={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===be&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(r.r=Is(r.r),r.g=Is(r.g),r.b=Is(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ur?ul:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return zo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return zo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[ks]:{primaries:t,whitePoint:i,transfer:ul,toXYZ:Tp,fromXYZ:Ap,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:t,whitePoint:i,transfer:be,toXYZ:Tp,fromXYZ:Ap,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),e}const me=nM();function Gi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Is(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let rs;class iM{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{rs===void 0&&(rs=fl("canvas")),rs.width=t.width,rs.height=t.height;const r=rs.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=rs}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=fl("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Gi(n[i]/255)*255):n[i]=Gi(n[i]);return{data:n,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rM=0;class pf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Qr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(lc(r[o].image)):s.push(lc(r[o]))}else s=lc(r);i.url=s}return n||(t.images[this.uuid]=i),i}}function lc(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?iM.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}let sM=0;const cc=new D;class Sn extends Kr{constructor(t=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,i=Bi,r=Bi,s=un,o=Fr,a=Kn,l=kn,c=Sn.DEFAULT_ANISOTROPY,u=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Qr(),this.name="",this.source=new pf(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cc).x}get height(){return this.source.getSize(cc).y}get depth(){return this.source.getSize(cc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Yt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Yt(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==F0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _u:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case vu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _u:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case vu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=F0;Sn.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,n=0,i=0,r=1){Be.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,x=(p+1)/2,A=(d+1)/2,P=(u+f)/4,C=(h+v)/4,R=(g+m)/4;return y>x&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=P/i,s=C/i):x>A?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=P/r,s=R/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=R/s),this.set(i,r,s,n),this}let S=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-v)/S,this.z=(f-u)/S,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=re(this.x,t.x,n.x),this.y=re(this.y,t.y,n.y),this.z=re(this.z,t.z,n.z),this.w=re(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=re(this.x,t,n),this.y=re(this.y,t,n),this.z=re(this.z,t,n),this.w=re(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oM extends Kr{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Be(0,0,t,n),this.scissorTest=!1,this.viewport=new Be(0,0,t,n);const r={width:t,height:n,depth:i.depth},s=new Sn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},t.textures[n].image);this.textures[n].source=new pf(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends oM{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Y0 extends Sn{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class aM extends Sn{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $o{constructor(t=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Yn):Yn.fromBufferAttribute(s,o),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(no),ha.subVectors(this.max,no),ss.subVectors(t.a,no),os.subVectors(t.b,no),as.subVectors(t.c,no),Ki.subVectors(os,ss),Qi.subVectors(as,os),Tr.subVectors(ss,as);let n=[0,-Ki.z,Ki.y,0,-Qi.z,Qi.y,0,-Tr.z,Tr.y,Ki.z,0,-Ki.x,Qi.z,0,-Qi.x,Tr.z,0,-Tr.x,-Ki.y,Ki.x,0,-Qi.y,Qi.x,0,-Tr.y,Tr.x,0];return!uc(n,ss,os,as,ha)||(n=[1,0,0,0,1,0,0,0,1],!uc(n,ss,os,as,ha))?!1:(fa.crossVectors(Ki,Qi),n=[fa.x,fa.y,fa.z],uc(n,ss,os,as,ha))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pi=[new D,new D,new D,new D,new D,new D,new D,new D],Yn=new D,ua=new $o,ss=new D,os=new D,as=new D,Ki=new D,Qi=new D,Tr=new D,no=new D,ha=new D,fa=new D,Ar=new D;function uc(e,t,n,i,r){for(let s=0,o=e.length-3;s<=o;s+=3){Ar.fromArray(e,s);const a=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),l=t.dot(Ar),c=n.dot(Ar),u=i.dot(Ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const lM=new $o,io=new D,hc=new D;let Zo=class{constructor(t=new D,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):lM.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;io.subVectors(t,this.center);const n=io.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(io,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(io.copy(t.center).add(hc)),this.expandByPoint(io.copy(t.center).sub(hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}};const Ci=new D,fc=new D,da=new D,ji=new D,dc=new D,pa=new D,pc=new D;class Ko{constructor(t=new D,n=new D(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ci.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){fc.copy(t).add(n).multiplyScalar(.5),da.copy(n).sub(t).normalize(),ji.copy(this.origin).sub(fc);const s=t.distanceTo(n)*.5,o=-this.direction.dot(da),a=ji.dot(this.direction),l=-ji.dot(da),c=ji.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(fc).addScaledVector(da,f),p}intersectSphere(t,n){Ci.subVectors(t.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,n,i,r,s){dc.subVectors(n,t),pa.subVectors(i,t),pc.crossVectors(dc,pa);let o=this.direction.dot(pc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,t);const l=a*this.direction.dot(pa.crossVectors(ji,pa));if(l<0)return null;const c=a*this.direction.dot(dc.cross(ji));if(c<0||l+c>o)return null;const u=-a*ji.dot(pc);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,n,i,r,s,o,a,l,c,u,h,f,p,g,v,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,o,a,l,c,u,h,f,p,g,v,m)}set(t,n,i,r,s,o,a,l,c,u,h,f,p,g,v,m){const d=this.elements;return d[0]=t,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,r=1/ls.setFromMatrixColumn(t,0).length(),s=1/ls.setFromMatrixColumn(t,1).length(),o=1/ls.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,v=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=f-v*c,n[9]=-a*l,n[2]=v-f*c,n[6]=g+p*c,n[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,v=c*h;n[0]=f+v*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=v+f*a,n[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,v=c*h;n[0]=f-v*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=v-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,v=a*h;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+v,n[1]=l*h,n[5]=v*c+f,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-f*h,n[8]=g*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+g,n[10]=f-v*h}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+v,n[5]=o*u,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*u,n[10]=v*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cM,t,uM)}lookAt(t,n,i){const r=this.elements;return Nn.subVectors(t,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),tr.crossVectors(i,Nn),tr.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),tr.crossVectors(i,Nn)),tr.normalize(),ma.crossVectors(Nn,tr),r[0]=tr.x,r[4]=ma.x,r[8]=Nn.x,r[1]=tr.y,r[5]=ma.y,r[9]=Nn.y,r[2]=tr.z,r[6]=ma.z,r[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],S=i[3],y=i[7],x=i[11],A=i[15],P=r[0],C=r[4],R=r[8],b=r[12],M=r[1],L=r[5],V=r[9],q=r[13],j=r[2],J=r[6],W=r[10],k=r[14],H=r[3],ct=r[7],pt=r[11],ft=r[15];return s[0]=o*P+a*M+l*j+c*H,s[4]=o*C+a*L+l*J+c*ct,s[8]=o*R+a*V+l*W+c*pt,s[12]=o*b+a*q+l*k+c*ft,s[1]=u*P+h*M+f*j+p*H,s[5]=u*C+h*L+f*J+p*ct,s[9]=u*R+h*V+f*W+p*pt,s[13]=u*b+h*q+f*k+p*ft,s[2]=g*P+v*M+m*j+d*H,s[6]=g*C+v*L+m*J+d*ct,s[10]=g*R+v*V+m*W+d*pt,s[14]=g*b+v*q+m*k+d*ft,s[3]=S*P+y*M+x*j+A*H,s[7]=S*C+y*L+x*J+A*ct,s[11]=S*R+y*V+x*W+A*pt,s[15]=S*b+y*q+x*k+A*ft,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],v=t[7],m=t[11],d=t[15],S=l*p-c*f,y=a*p-c*h,x=a*f-l*h,A=o*p-c*u,P=o*f-l*u,C=o*h-a*u;return n*(v*S-m*y+d*x)-i*(g*S-m*A+d*P)+r*(g*y-v*A+d*C)-s*(g*x-v*P+m*C)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],v=t[13],m=t[14],d=t[15],S=h*m*c-v*f*c+v*l*p-a*m*p-h*l*d+a*f*d,y=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,x=u*v*c-g*h*c+g*a*p-o*v*p-u*a*d+o*h*d,A=g*h*l-u*v*l-g*a*f+o*v*f+u*a*m-o*h*m,P=n*S+i*y+r*x+s*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return t[0]=S*C,t[1]=(v*f*s-h*m*s-v*r*p+i*m*p+h*r*d-i*f*d)*C,t[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*d+i*l*d)*C,t[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*C,t[4]=y*C,t[5]=(u*m*s-g*f*s+g*r*p-n*m*p-u*r*d+n*f*d)*C,t[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*d-n*l*d)*C,t[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*C,t[8]=x*C,t[9]=(g*h*s-u*v*s-g*i*p+n*v*p+u*i*d-n*h*d)*C,t[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*d+n*a*d)*C,t[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*p-n*a*p)*C,t[12]=A*C,t[13]=(u*v*r-g*h*r+g*i*f-n*v*f-u*i*m+n*h*m)*C,t[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*C,t[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*f+n*a*f)*C,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,v=o*u,m=o*h,d=a*h,S=l*c,y=l*u,x=l*h,A=i.x,P=i.y,C=i.z;return r[0]=(1-(v+d))*A,r[1]=(p+x)*A,r[2]=(g-y)*A,r[3]=0,r[4]=(p-x)*P,r[5]=(1-(f+d))*P,r[6]=(m+S)*P,r[7]=0,r[8]=(g+y)*C,r[9]=(m-S)*C,r[10]=(1-(f+v))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=ls.set(r[0],r[1],r[2]).length();const o=ls.set(r[4],r[5],r[6]).length(),a=ls.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Jn.copy(this);const c=1/s,u=1/o,h=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=h,Jn.elements[9]*=h,Jn.elements[10]*=h,n.setFromRotationMatrix(Jn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,n,i,r,s,o,a=mi,l=!1){const c=this.elements,u=2*s/(n-t),h=2*s/(i-r),f=(n+t)/(n-t),p=(i+r)/(i-r);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===mi)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===hl)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,r,s,o,a=mi,l=!1){const c=this.elements,u=2/(n-t),h=2/(i-r),f=-(n+t)/(n-t),p=-(i+r)/(i-r);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===mi)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===hl)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const ls=new D,Jn=new he,cM=new D(0,0,0),uM=new D(1,1,1),tr=new D,ma=new D,Nn=new D,Pp=new he,Cp=new en;class ei{constructor(t=0,n=0,i=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Pp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pp,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Cp.setFromEuler(this),this.setFromQuaternion(Cp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class mf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hM=0;const Rp=new D,cs=new en,Ri=new he,ga=new D,ro=new D,fM=new D,dM=new en,Dp=new D(1,0,0),Ip=new D(0,1,0),Lp=new D(0,0,1),Np={type:"added"},pM={type:"removed"},us={type:"childadded",child:null},mc={type:"childremoved",child:null};class Te extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new D,n=new ei,i=new en,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new he},normalMatrix:{value:new ie}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return cs.setFromAxisAngle(t,n),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,n){return cs.setFromAxisAngle(t,n),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(Dp,t)}rotateY(t){return this.rotateOnAxis(Ip,t)}rotateZ(t){return this.rotateOnAxis(Lp,t)}translateOnAxis(t,n){return Rp.copy(t).applyQuaternion(this.quaternion),this.position.add(Rp.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Dp,t)}translateY(t){return this.translateOnAxis(Ip,t)}translateZ(t){return this.translateOnAxis(Lp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?ga.copy(t):ga.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(ro,ga,this.up):Ri.lookAt(ga,ro,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(Ri),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(de("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Np),us.child=t,this.dispatchEvent(us),us.child=null):de("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(pM),mc.child=t,this.dispatchEvent(mc),mc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Np),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,t,fM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,dM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(n){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Te.DEFAULT_UP=new D(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new D,Di=new D,gc=new D,Ii=new D,hs=new D,fs=new D,Up=new D,_c=new D,vc=new D,xc=new D,yc=new Be,Sc=new Be,bc=new Be;class Zn{constructor(t=new D,n=new D,i=new D){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),$n.subVectors(t,n),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){$n.subVectors(r,n),Di.subVectors(i,n),gc.subVectors(t,n);const o=$n.dot($n),a=$n.dot(Di),l=$n.dot(gc),c=Di.dot(Di),u=Di.dot(gc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,n,i,r,s,o,a,l){return this.getBarycoord(t,n,i,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(t,n,i,r,s,o){return yc.setScalar(0),Sc.setScalar(0),bc.setScalar(0),yc.fromBufferAttribute(t,n),Sc.fromBufferAttribute(t,i),bc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(yc,s.x),o.addScaledVector(Sc,s.y),o.addScaledVector(bc,s.z),o}static isFrontFacing(t,n,i,r){return $n.subVectors(i,n),Di.subVectors(t,n),$n.cross(Di).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),$n.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Zn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,s){return Zn.getInterpolation(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return Zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,s=this.c;let o,a;hs.subVectors(r,i),fs.subVectors(s,i),_c.subVectors(t,i);const l=hs.dot(_c),c=fs.dot(_c);if(l<=0&&c<=0)return n.copy(i);vc.subVectors(t,r);const u=hs.dot(vc),h=fs.dot(vc);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(hs,o);xc.subVectors(t,s);const p=hs.dot(xc),g=fs.dot(xc);if(g>=0&&p<=g)return n.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(fs,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Up.subVectors(s,r),a=(h-u)/(h-u+(p-g)),n.copy(r).addScaledVector(Up,a);const d=1/(m+v+f);return o=v*d,a=f*d,n.copy(i).addScaledVector(hs,o).addScaledVector(fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const J0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Mc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class $t{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=On){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,n),this}setRGB(t,n,i,r=me.workingColorSpace){return this.r=t,this.g=n,this.b=i,me.colorSpaceToWorking(this,r),this}setHSL(t,n,i,r=me.workingColorSpace){if(t=df(t,1),n=re(n,0,1),i=re(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Mc(o,s,t+1/3),this.g=Mc(o,s,t),this.b=Mc(o,s,t-1/3)}return me.colorSpaceToWorking(this,r),this}setStyle(t,n=On){function i(s){s!==void 0&&parseFloat(s)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Yt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=On){const i=J0[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=On){return me.workingToColorSpace(on.copy(this),t),Math.round(re(on.r*255,0,255))*65536+Math.round(re(on.g*255,0,255))*256+Math.round(re(on.b*255,0,255))}getHexString(t=On){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=me.workingColorSpace){me.workingToColorSpace(on.copy(this),n);const i=on.r,r=on.g,s=on.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=me.workingColorSpace){return me.workingToColorSpace(on.copy(this),n),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=On){me.workingToColorSpace(on.copy(this),t);const n=on.r,i=on.g,r=on.b;return t!==On?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,n,i){return this.getHSL(er),this.setHSL(er.h+t,er.s+n,er.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(er),t.getHSL(_a);const i=Po(er.h,_a.h,n),r=Po(er.s,_a.s,n),s=Po(er.l,_a.l,n);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new $t;$t.NAMES=J0;let mM=0;class jr extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Qr(),this.name="",this.type="Material",this.blending=Ds,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ou,this.blendDst=au,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Yt(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Yt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ou&&(i.blendSrc=this.blendSrc),this.blendDst!==au&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class xr extends jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=R0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const We=new D,va=new mt;let gM=0;class bn{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=yp,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)va.fromBufferAttribute(this,n),va.applyMatrix3(t),this.setXY(n,va.x,va.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyMatrix3(t),this.setXYZ(n,We.x,We.y,We.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyMatrix4(t),this.setXYZ(n,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyNormalMatrix(t),this.setXYZ(n,We.x,We.y,We.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.transformDirection(t),this.setXYZ(n,We.x,We.y,We.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=ys(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ys(n,this.array)),n}setX(t,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ys(n,this.array)),n}setY(t,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ys(n,this.array)),n}setZ(t,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ys(n,this.array)),n}setW(t,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yp&&(t.usage=this.usage),t}}class $0 extends bn{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Z0 extends bn{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class te extends bn{constructor(t,n,i){super(new Float32Array(t),n,i)}}let _M=0;const Gn=new he,wc=new Te,ds=new D,Un=new $o,so=new $o,Qe=new D;class fe extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(q0(t)?Z0:$0)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ie().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,n,i){return Gn.makeTranslation(t,n,i),this.applyMatrix4(Gn),this}scale(t,n,i){return Gn.makeScale(t,n,i),this.applyMatrix4(Gn),this}lookAt(t){return wc.lookAt(t),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(i,3))}else{const i=Math.min(t.length,n.count);for(let r=0;r<i;r++){const s=t[r];n.setXYZ(r,s.x,s.y,s.z||0)}t.length>n.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&de('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];so.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(Un.min,so.min),Un.expandByPoint(Qe),Qe.addVectors(Un.max,so.max),Un.expandByPoint(Qe)):(Un.expandByPoint(so.min),Un.expandByPoint(so.max))}Un.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Qe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Qe));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Qe.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(t,c),Qe.add(ds)),r=Math.max(r,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&de('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){de("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new D,l[R]=new D;const c=new D,u=new D,h=new D,f=new mt,p=new mt,g=new mt,v=new D,m=new D;function d(R,b,M){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),a[R].add(v),a[b].add(v),a[M].add(v),l[R].add(m),l[b].add(m),l[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,b=S.length;R<b;++R){const M=S[R],L=M.start,V=M.count;for(let q=L,j=L+V;q<j;q+=3)d(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const y=new D,x=new D,A=new D,P=new D;function C(R){A.fromBufferAttribute(r,R),P.copy(A);const b=a[R];y.copy(b),y.sub(A.multiplyScalar(A.dot(b))).normalize(),x.crossVectors(P,b);const L=x.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,L)}for(let R=0,b=S.length;R<b;++R){const M=S[R],L=M.start,V=M.count;for(let q=L,j=L+V;q<j;q+=3)C(t.getX(q+0)),C(t.getX(q+1)),C(t.getX(q+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Qe.fromBufferAttribute(t,n),Qe.normalize(),t.setXYZ(n,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new bn(f,u,h)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new fe,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Op=new he,Pr=new Ko,xa=new Zo,Fp=new D,ya=new D,Sa=new D,ba=new D,Ec=new D,Ma=new D,kp=new D,wa=new D;let _t=class extends Te{constructor(t=new fe,n=new xr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ma.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ec.fromBufferAttribute(h,t),o?Ma.addScaledVector(Ec,u):Ma.addScaledVector(Ec.sub(n),u))}n.add(Ma)}return n}raycast(t,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(s),Pr.copy(t.ray).recast(t.near),!(xa.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(xa,Fp)===null||Pr.origin.distanceToSquared(Fp)>(t.far-t.near)**2))&&(Op.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(Op),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Pr)))}_computeIntersections(t,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,A=y;x<A;x+=3){const P=a.getX(x),C=a.getX(x+1),R=a.getX(x+2);r=Ea(this,d,t,i,c,u,h,P,C,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const S=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=Ea(this,o,t,i,c,u,h,S,y,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,A=y;x<A;x+=3){const P=x,C=x+1,R=x+2;r=Ea(this,d,t,i,c,u,h,P,C,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const S=m,y=m+1,x=m+2;r=Ea(this,o,t,i,c,u,h,S,y,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}};function vM(e,t,n,i,r,s,o,a){let l;if(t.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===vr,a),l===null)return null;wa.copy(a),wa.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(wa);return c<n.near||c>n.far?null:{distance:c,point:wa.clone(),object:e}}function Ea(e,t,n,i,r,s,o,a,l,c){e.getVertexPosition(a,ya),e.getVertexPosition(l,Sa),e.getVertexPosition(c,ba);const u=vM(e,t,n,i,ya,Sa,ba,kp);if(u){const h=new D;Zn.getBarycoord(kp,ya,Sa,ba,h),r&&(u.uv=Zn.getInterpolatedAttribute(r,a,l,c,h,new mt)),s&&(u.uv1=Zn.getInterpolatedAttribute(s,a,l,c,h,new mt)),o&&(u.normal=Zn.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};Zn.getNormal(ya,Sa,ba,f.normal),u.face=f,u.barycoord=h}return u}class ke extends fe{constructor(t=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,t,o,s,0),g("z","y","x",1,-1,i,n,-t,o,s,1),g("x","z","y",1,1,t,i,n,r,o,2),g("x","z","y",1,-1,t,i,-n,r,o,3),g("x","y","z",1,-1,t,n,i,r,s,4),g("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(h,2));function g(v,m,d,S,y,x,A,P,C,R,b){const M=x/C,L=A/R,V=x/2,q=A/2,j=P/2,J=C+1,W=R+1;let k=0,H=0;const ct=new D;for(let pt=0;pt<W;pt++){const ft=pt*L-q;for(let kt=0;kt<J;kt++){const Lt=kt*M-V;ct[v]=Lt*S,ct[m]=ft*y,ct[d]=j,c.push(ct.x,ct.y,ct.z),ct[v]=0,ct[m]=0,ct[d]=P>0?1:-1,u.push(ct.x,ct.y,ct.z),h.push(kt/C),h.push(1-pt/R),k+=1}}for(let pt=0;pt<R;pt++)for(let ft=0;ft<C;ft++){const kt=f+ft+J*pt,Lt=f+ft+J*(pt+1),Zt=f+(ft+1)+J*(pt+1),ce=f+(ft+1)+J*pt;l.push(kt,Lt,ce),l.push(Lt,Zt,ce),H+=6}a.addGroup(p,H,b),p+=H,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zs(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function _n(e){const t={};for(let n=0;n<e.length;n++){const i=zs(e[n]);for(const r in i)t[r]=i[r]}return t}function xM(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function K0(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}const Q0={clone:zs,merge:_n};var yM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yM,this.fragmentShader=SM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=xM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class j0 extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new D,Bp=new mt,zp=new mt;class Pn extends j0{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Bs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-t/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-t/nr.z)}getViewSize(t,n){return this.getViewBounds(t,Bp,zp),n.subVectors(zp,Bp)}setViewOffset(t,n,i,r,s,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Ao*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ps=-90,ms=1;class bM extends Te{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(ps,ms,t,n);r.layers=this.layers,this.add(r);const s=new Pn(ps,ms,t,n);s.layers=this.layers,this.add(s);const o=new Pn(ps,ms,t,n);o.layers=this.layers,this.add(o);const a=new Pn(ps,ms,t,n);a.layers=this.layers,this.add(a);const l=new Pn(ps,ms,t,n);l.layers=this.layers,this.add(l);const c=new Pn(ps,ms,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(t===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(n,s),t.setRenderTarget(i,1,r),t.render(n,o),t.setRenderTarget(i,2,r),t.render(n,a),t.setRenderTarget(i,3,r),t.render(n,l),t.setRenderTarget(i,4,r),t.render(n,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(n,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class t_ extends Sn{constructor(t=[],n=qr,i,r,s,o,a,l,c,u){super(t,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class e_ extends vi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new t_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ke(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Hi});s.uniforms.tEquirect.value=n;const o=new _t(r,s),a=n.minFilter;return n.minFilter===Fr&&(n.minFilter=un),new bM(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,r);t.setRenderTarget(s)}}class Ta extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MM={type:"move"};class Tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=n.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(MM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Ta;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}class wM extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class EM extends Sn{constructor(t=null,n=1,i=1,r,s,o,a,l,c=nn,u=nn,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ac=new D,TM=new D,AM=new ie;let Oi=class{constructor(t=new D(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=Ac.subVectors(i,n).cross(TM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(Ac),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||AM.getNormalMatrix(t),r=this.coplanarPoint(Ac).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Cr=new Zo,PM=new mt(.5,.5),Aa=new D;class gf{constructor(t=new Oi,n=new Oi,i=new Oi,r=new Oi,s=new Oi,o=new Oi){this.planes=[t,n,i,r,s,o]}set(t,n,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=mi,i=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],g=s[8],v=s[9],m=s[10],d=s[11],S=s[12],y=s[13],x=s[14],A=s[15];if(r[0].setComponents(c-o,p-u,d-g,A-S).normalize(),r[1].setComponents(c+o,p+u,d+g,A+S).normalize(),r[2].setComponents(c+a,p+h,d+v,A+y).normalize(),r[3].setComponents(c-a,p-h,d-v,A-y).normalize(),i)r[4].setComponents(l,f,m,x).normalize(),r[5].setComponents(c-l,p-f,d-m,A-x).normalize();else if(r[4].setComponents(c-l,p-f,d-m,A-x).normalize(),n===mi)r[5].setComponents(c+l,p+f,d+m,A+x).normalize();else if(n===hl)r[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(t){Cr.center.set(0,0,0);const n=PM.distanceTo(t.center);return Cr.radius=.7071067811865476+n,Cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Aa.x=r.normal.x>0?t.max.x:t.min.x,Aa.y=r.normal.y>0?t.max.y:t.min.y,Aa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ii extends jr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const dl=new D,pl=new D,Vp=new he,oo=new Ko,Pa=new Zo,Pc=new D,Hp=new D;let tn=class extends Te{constructor(t=new fe,n=new ii){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)dl.fromBufferAttribute(n,r-1),pl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=dl.distanceTo(pl);t.setAttribute("lineDistance",new te(i,1))}else Yt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(r),Pa.radius+=s,t.ray.intersectsSphere(Pa)===!1)return;Vp.copy(r).invert(),oo.copy(t.ray).applyMatrix4(Vp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=u.getX(v),S=u.getX(v+1),y=Ca(this,t,oo,l,d,S,v);y&&n.push(y)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),d=Ca(this,t,oo,l,v,m,g-1);d&&n.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=Ca(this,t,oo,l,v,v+1,v);d&&n.push(d)}if(this.isLineLoop){const v=Ca(this,t,oo,l,g-1,p,g-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ca(e,t,n,i,r,s,o){const a=e.geometry.attributes.position;if(dl.fromBufferAttribute(a,r),pl.fromBufferAttribute(a,s),n.distanceSqToSegment(dl,pl,Pc,Hp)>i)return;Pc.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(Pc);if(!(c<t.near||c>t.far))return{distance:c,point:Hp.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}const Gp=new D,Wp=new D;class n_ extends tn{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Gp.fromBufferAttribute(n,r),Wp.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Gp.distanceTo(Wp);t.setAttribute("lineDistance",new te(i,1))}else Yt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _f extends jr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xp=new he,Qu=new Ko,Ra=new Zo,Da=new D;class vf extends Te{constructor(t=new fe,n=new _f){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(r),Ra.radius+=s,t.ray.intersectsSphere(Ra)===!1)return;Xp.copy(r).invert(),Qu.copy(t.ray).applyMatrix4(Xp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,v=p;g<v;g++){const m=c.getX(g);Da.fromBufferAttribute(h,m),qp(Da,m,l,r,t,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,v=p;g<v;g++)Da.fromBufferAttribute(h,g),qp(Da,g,l,r,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function qp(e,t,n,i,r,s,o){const a=Qu.distanceSqToPoint(e);if(a<n){const l=new D;Qu.closestPointToPoint(e,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Vo extends Sn{constructor(t,n,i=bi,r,s,o,a=nn,l=nn,c,u=Ji,h=1){if(u!==Ji&&u!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:n,depth:h};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pf(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class CM extends Vo{constructor(t,n=bi,i=qr,r,s,o=nn,a=nn,l,c=Ji){const u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class i_ extends Sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xf extends fe{constructor(t=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],u=n/2,h=Math.PI/2*t,f=n,p=2*h+f,g=i*2+s,v=r+1,m=new D,d=new D;for(let S=0;S<=g;S++){let y=0,x=0,A=0,P=0;if(S<=i){const b=S/i,M=b*Math.PI/2;x=-u-t*Math.cos(M),A=t*Math.sin(M),P=-t*Math.cos(M),y=b*h}else if(S<=i+s){const b=(S-i)/s;x=-u+b*n,A=t,P=0,y=h+b*f}else{const b=(S-i-s)/i,M=b*Math.PI/2;x=u+t*Math.sin(M),A=t*Math.cos(M),P=t*Math.sin(M),y=h+f+b*h}const C=Math.max(0,Math.min(1,y/p));let R=0;S===0?R=.5/r:S===g&&(R=-.5/r);for(let b=0;b<=r;b++){const M=b/r,L=M*Math.PI*2,V=Math.sin(L),q=Math.cos(L);d.x=-A*q,d.y=x,d.z=A*V,a.push(d.x,d.y,d.z),m.set(-A*q,P,A*V),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+R,C)}if(S>0){const b=(S-1)*v;for(let M=0;M<r;M++){const L=b+M,V=b+M+1,q=S*v+M,j=S*v+M+1;o.push(L,V,q),o.push(V,j,q)}}}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xf(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class yf extends fe{constructor(t=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new D,u=new mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=n;h++,f+=3){const p=i+h/n*r;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yf(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class je extends fe{constructor(t=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let g=0;const v=[],m=i/2;let d=0;S(),o===!1&&(t>0&&y(!0),n>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new te(h,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(p,2));function S(){const x=new D,A=new D;let P=0;const C=(n-t)/i;for(let R=0;R<=s;R++){const b=[],M=R/s,L=M*(n-t)+t;for(let V=0;V<=r;V++){const q=V/r,j=q*l+a,J=Math.sin(j),W=Math.cos(j);A.x=L*J,A.y=-M*i+m,A.z=L*W,h.push(A.x,A.y,A.z),x.set(J,C,W).normalize(),f.push(x.x,x.y,x.z),p.push(q,1-M),b.push(g++)}v.push(b)}for(let R=0;R<r;R++)for(let b=0;b<s;b++){const M=v[b][R],L=v[b+1][R],V=v[b+1][R+1],q=v[b][R+1];(t>0||b!==0)&&(u.push(M,L,q),P+=3),(n>0||b!==s-1)&&(u.push(L,V,q),P+=3)}c.addGroup(d,P,0),d+=P}function y(x){const A=g,P=new mt,C=new D;let R=0;const b=x===!0?t:n,M=x===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const L=g;for(let V=0;V<=r;V++){const j=V/r*l+a,J=Math.cos(j),W=Math.sin(j);C.x=b*W,C.y=m*M,C.z=b*J,h.push(C.x,C.y,C.z),f.push(0,M,0),P.x=J*.5+.5,P.y=W*.5*M+.5,p.push(P.x,P.y),g++}for(let V=0;V<r;V++){const q=A+V,j=L+V;x===!0?u.push(j,j+1,q):u.push(j+1,j,q),R+=3}c.addGroup(d,R,x===!0?1:2),d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ll extends je{constructor(t=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ll(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sf extends fe{constructor(t=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(s.slice(),3)),this.setAttribute("uv",new te(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new D,x=new D,A=new D;for(let P=0;P<n.length;P+=3)p(n[P+0],y),p(n[P+1],x),p(n[P+2],A),l(y,x,A,S)}function l(S,y,x,A){const P=A+1,C=[];for(let R=0;R<=P;R++){C[R]=[];const b=S.clone().lerp(x,R/P),M=y.clone().lerp(x,R/P),L=P-R;for(let V=0;V<=L;V++)V===0&&R===P?C[R][V]=b:C[R][V]=b.clone().lerp(M,V/L)}for(let R=0;R<P;R++)for(let b=0;b<2*(P-R)-1;b++){const M=Math.floor(b/2);b%2===0?(f(C[R][M+1]),f(C[R+1][M]),f(C[R][M])):(f(C[R][M+1]),f(C[R+1][M+1]),f(C[R+1][M]))}}function c(S){const y=new D;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(S),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function u(){const S=new D;for(let y=0;y<s.length;y+=3){S.x=s[y+0],S.y=s[y+1],S.z=s[y+2];const x=m(S)/2/Math.PI+.5,A=d(S)/Math.PI+.5;o.push(x,1-A)}g(),h()}function h(){for(let S=0;S<o.length;S+=6){const y=o[S+0],x=o[S+2],A=o[S+4],P=Math.max(y,x,A),C=Math.min(y,x,A);P>.9&&C<.1&&(y<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),A<.2&&(o[S+4]+=1))}}function f(S){s.push(S.x,S.y,S.z)}function p(S,y){const x=S*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const S=new D,y=new D,x=new D,A=new D,P=new mt,C=new mt,R=new mt;for(let b=0,M=0;b<s.length;b+=9,M+=6){S.set(s[b+0],s[b+1],s[b+2]),y.set(s[b+3],s[b+4],s[b+5]),x.set(s[b+6],s[b+7],s[b+8]),P.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),A.copy(S).add(y).add(x).divideScalar(3);const L=m(A);v(P,M+0,S,L),v(C,M+2,y,L),v(R,M+4,x,L)}}function v(S,y,x,A){A<0&&S.x===1&&(o[y]=S.x-1),x.x===0&&x.z===0&&(o[y]=A/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sf(t.vertices,t.indices,t.radius,t.detail)}}class wi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Yt("Curve: .getPoint() not implemented.")}getPointAt(t,n){const i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){const n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){const n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(t,n){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new mt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,n){const i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){const i=new D,r=[],s=[],o=[],a=new D,l=new he;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(re(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(re(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class bf extends wi{constructor(t=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,n=new mt){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class RM extends bf{constructor(t,n,i,r,s,o){super(t,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Mf(){let e=0,t=0,n=0,i=0;function r(s,o,a,l){e=s,t=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return e+t*s+n*o+i*a}}}const Ia=new D,Cc=new Mf,Rc=new Mf,Dc=new Mf;class DM extends wi{constructor(t=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=r}getPoint(t,n=new D){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ia.subVectors(r[0],r[1]).add(r[0]),c=Ia);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ia.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ia),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Cc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,v,m),Rc.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,v,m),Dc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Cc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Rc.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Dc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Cc.calc(l),Rc.calc(l),Dc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const r=t.points[n];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const r=t.points[n];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Yp(e,t,n,i,r){const s=(i-t)*.5,o=(r-n)*.5,a=e*e,l=e*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*e+n}function IM(e,t){const n=1-e;return n*n*t}function LM(e,t){return 2*(1-e)*e*t}function NM(e,t){return e*e*t}function Co(e,t,n,i){return IM(e,t)+LM(e,n)+NM(e,i)}function UM(e,t){const n=1-e;return n*n*n*t}function OM(e,t){const n=1-e;return 3*n*n*e*t}function FM(e,t){return 3*(1-e)*e*e*t}function kM(e,t){return e*e*e*t}function Ro(e,t,n,i,r){return UM(e,t)+OM(e,n)+FM(e,i)+kM(e,r)}class r_ extends wi{constructor(t=new mt,n=new mt,i=new mt,r=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=r}getPoint(t,n=new mt){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ro(t,r.x,s.x,o.x,a.x),Ro(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class BM extends wi{constructor(t=new D,n=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=r}getPoint(t,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ro(t,r.x,s.x,o.x,a.x),Ro(t,r.y,s.y,o.y,a.y),Ro(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class s_ extends wi{constructor(t=new mt,n=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new mt){const i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new mt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zM extends wi{constructor(t=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new D){const i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class o_ extends wi{constructor(t=new mt,n=new mt,i=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new mt){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Co(t,r.x,s.x,o.x),Co(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class VM extends wi{constructor(t=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new D){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Co(t,r.x,s.x,o.x),Co(t,r.y,s.y,o.y),Co(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class a_ extends wi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new mt){const i=n,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Yp(a,l.x,c.x,u.x,h.x),Yp(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const r=t.points[n];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const r=t.points[n];this.points.push(new mt().fromArray(r))}return this}}var ju=Object.freeze({__proto__:null,ArcCurve:RM,CatmullRomCurve3:DM,CubicBezierCurve:r_,CubicBezierCurve3:BM,EllipseCurve:bf,LineCurve:s_,LineCurve3:zM,QuadraticBezierCurve:o_,QuadraticBezierCurve3:VM,SplineCurve:a_});class HM extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ju[i](n,t))}return this}getPoint(t,n){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){const r=t.curves[n];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){const r=t.curves[n];this.curves.push(new ju[r.type]().fromJSON(r))}return this}}class th extends HM{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const i=new s_(this.currentPoint.clone(),new mt(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,r){const s=new o_(this.currentPoint.clone(),new mt(t,n),new mt(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,n,i,r,s,o){const a=new r_(this.currentPoint.clone(),new mt(t,n),new mt(i,r),new mt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),i=new a_(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,n+l,i,r,s,o),this}absarc(t,n,i,r,s,o){return this.absellipse(t,n,i,i,r,s,o),this}ellipse(t,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,n+u,i,r,s,o,a,l),this}absellipse(t,n,i,r,s,o,a,l){const c=new bf(t,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Qa extends th{constructor(t){super(t),this.uuid=Qr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){const r=t.holes[n];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){const r=t.holes[n];this.holes.push(new th().fromJSON(r))}return this}}function GM(e,t,n=2){const i=t&&t.length,r=i?t[0]*n:e.length;let s=l_(e,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=JM(e,t,s,n)),e.length>80*n){a=e[0],l=e[1];let u=a,h=l;for(let f=n;f<r;f+=n){const p=e[f],g=e[f+1];p<a&&(a=p),g<l&&(l=g),p>u&&(u=p),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Ho(s,o,n,a,l,c,0),o}function l_(e,t,n,i,r){let s;if(r===sw(e,t,n,i)>0)for(let o=t;o<n;o+=i)s=Jp(o/i|0,e[o],e[o+1],s);else for(let o=n-i;o>=t;o-=i)s=Jp(o/i|0,e[o],e[o+1],s);return s&&Vs(s,s.next)&&(Wo(s),s=s.next),s}function Yr(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(Vs(n,n.next)||Ne(n.prev,n,n.next)===0)){if(Wo(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function Ho(e,t,n,i,r,s,o){if(!e)return;!o&&s&&jM(e,i,r,s);let a=e;for(;e.prev!==e.next;){const l=e.prev,c=e.next;if(s?XM(e,i,r,s):WM(e)){t.push(l.i,e.i,c.i),Wo(e),e=c.next,a=c.next;continue}if(e=c,e===a){o?o===1?(e=qM(Yr(e),t),Ho(e,t,n,i,r,s,2)):o===2&&YM(e,t,n,i,r,s):Ho(Yr(e),t,n,i,r,s,1);break}}}function WM(e){const t=e.prev,n=e,i=e.next;if(Ne(t,n,i)>=0)return!1;const r=t.x,s=n.x,o=i.x,a=t.y,l=n.y,c=i.y,u=Math.min(r,s,o),h=Math.min(a,l,c),f=Math.max(r,s,o),p=Math.max(a,l,c);let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&go(r,a,s,l,o,c,g.x,g.y)&&Ne(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function XM(e,t,n,i){const r=e.prev,s=e,o=e.next;if(Ne(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,p=Math.min(a,l,c),g=Math.min(u,h,f),v=Math.max(a,l,c),m=Math.max(u,h,f),d=eh(p,g,t,n,i),S=eh(v,m,t,n,i);let y=e.prevZ,x=e.nextZ;for(;y&&y.z>=d&&x&&x.z<=S;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&go(a,u,l,h,c,f,y.x,y.y)&&Ne(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&go(a,u,l,h,c,f,x.x,x.y)&&Ne(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&go(a,u,l,h,c,f,y.x,y.y)&&Ne(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=S;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&go(a,u,l,h,c,f,x.x,x.y)&&Ne(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function qM(e,t){let n=e;do{const i=n.prev,r=n.next.next;!Vs(i,r)&&u_(i,n,n.next,r)&&Go(i,r)&&Go(r,i)&&(t.push(i.i,n.i,r.i),Wo(n),Wo(n.next),n=e=r),n=n.next}while(n!==e);return Yr(n)}function YM(e,t,n,i,r,s){let o=e;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&nw(o,a)){let l=h_(o,a);o=Yr(o,o.next),l=Yr(l,l.next),Ho(o,t,n,i,r,s,0),Ho(l,t,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==e)}function JM(e,t,n,i){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*i,l=s<o-1?t[s+1]*i:e.length,c=l_(e,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(ew(c))}r.sort($M);for(let s=0;s<r.length;s++)n=ZM(r[s],n);return n}function $M(e,t){let n=e.x-t.x;if(n===0&&(n=e.y-t.y,n===0)){const i=(e.next.y-e.y)/(e.next.x-e.x),r=(t.next.y-t.y)/(t.next.x-t.x);n=i-r}return n}function ZM(e,t){const n=KM(e,t);if(!n)return t;const i=h_(n,e);return Yr(i,i.next),Yr(n,n.next)}function KM(e,t){let n=t;const i=e.x,r=e.y;let s=-1/0,o;if(Vs(e,n))return n;do{if(Vs(e,n.next))return n.next;if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const h=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=i&&h>s&&(s=h,o=n.x<n.next.x?n:n.next,h===i))return o}n=n.next}while(n!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&c_(r<c?i:s,r,l,c,r<c?s:i,r,n.x,n.y)){const h=Math.abs(r-n.y)/(i-n.x);Go(n,e)&&(h<u||h===u&&(n.x>o.x||n.x===o.x&&QM(o,n)))&&(o=n,u=h)}n=n.next}while(n!==a);return o}function QM(e,t){return Ne(e.prev,e,t.prev)<0&&Ne(t.next,e,e.next)<0}function jM(e,t,n,i){let r=e;do r.z===0&&(r.z=eh(r.x,r.y,t,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,tw(r)}function tw(e){let t,n=1;do{let i=e,r;e=null;let s=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:e=r,r.prevZ=s,s=r;i=o}s.nextZ=null,n*=2}while(t>1);return e}function eh(e,t,n,i,r){return e=(e-n)*r|0,t=(t-i)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ew(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function c_(e,t,n,i,r,s,o,a){return(r-o)*(t-a)>=(e-o)*(s-a)&&(e-o)*(i-a)>=(n-o)*(t-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function go(e,t,n,i,r,s,o,a){return!(e===o&&t===a)&&c_(e,t,n,i,r,s,o,a)}function nw(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!iw(e,t)&&(Go(e,t)&&Go(t,e)&&rw(e,t)&&(Ne(e.prev,e,t.prev)||Ne(e,t.prev,t))||Vs(e,t)&&Ne(e.prev,e,e.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Vs(e,t){return e.x===t.x&&e.y===t.y}function u_(e,t,n,i){const r=Na(Ne(e,t,n)),s=Na(Ne(e,t,i)),o=Na(Ne(n,i,e)),a=Na(Ne(n,i,t));return!!(r!==s&&o!==a||r===0&&La(e,n,t)||s===0&&La(e,i,t)||o===0&&La(n,e,i)||a===0&&La(n,t,i))}function La(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Na(e){return e>0?1:e<0?-1:0}function iw(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&u_(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Go(e,t){return Ne(e.prev,e,e.next)<0?Ne(e,t,e.next)>=0&&Ne(e,e.prev,t)>=0:Ne(e,t,e.prev)<0||Ne(e,e.next,t)<0}function rw(e,t){let n=e,i=!1;const r=(e.x+t.x)/2,s=(e.y+t.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function h_(e,t){const n=nh(e.i,e.x,e.y),i=nh(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Jp(e,t,n,i){const r=nh(e,t,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Wo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function nh(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sw(e,t,n,i){let r=0;for(let s=t,o=n-i;s<n;s+=i)r+=(e[o]-e[s])*(e[s+1]+e[o+1]),o=s;return r}class ow{static triangulate(t,n,i=2){return GM(t,n,i)}}class Br{static area(t){const n=t.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return Br.area(t)<0}static triangulateShape(t,n){const i=[],r=[],s=[];$p(t),Zp(i,t);let o=t.length;n.forEach($p);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,Zp(i,n[l]);const a=ow.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function $p(e){const t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Zp(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}class wf extends fe{constructor(t=new Qa([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new te(r,3)),this.setAttribute("uv",new te(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,v=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,S=n.UVGenerator!==void 0?n.UVGenerator:aw;let y,x=!1,A,P,C,R;if(d){y=d.getSpacedPoints(u),x=!0,f=!1;const U=d.isCatmullRomCurve3?d.closed:!1;A=d.computeFrenetFrames(u,U),P=new D,C=new D,R=new D}f||(m=0,p=0,g=0,v=0);const b=a.extractPoints(c);let M=b.shape;const L=b.holes;if(!Br.isClockWise(M)){M=M.reverse();for(let U=0,z=L.length;U<z;U++){const F=L[U];Br.isClockWise(F)&&(L[U]=F.reverse())}}function q(U){const F=10000000000000001e-36;let X=U[0];for(let E=1;E<=U.length;E++){const rt=E%U.length,K=U[rt],Q=K.x-X.x,it=K.y-X.y,w=Q*Q+it*it,_=Math.max(Math.abs(K.x),Math.abs(K.y),Math.abs(X.x),Math.abs(X.y)),N=F*_*_;if(w<=N){U.splice(rt,1),E--;continue}X=K}}q(M),L.forEach(q);const j=L.length,J=M;for(let U=0;U<j;U++){const z=L[U];M=M.concat(z)}function W(U,z,F){return z||de("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(z,F)}const k=M.length;function H(U,z,F){let X,E,rt;const K=U.x-z.x,Q=U.y-z.y,it=F.x-U.x,w=F.y-U.y,_=K*K+Q*Q,N=K*w-Q*it;if(Math.abs(N)>Number.EPSILON){const Y=Math.sqrt(_),nt=Math.sqrt(it*it+w*w),$=z.x-Q/Y,wt=z.y+K/Y,ht=F.x-w/nt,Ct=F.y+it/nt,zt=((ht-$)*w-(Ct-wt)*it)/(K*w-Q*it);X=$+K*zt-U.x,E=wt+Q*zt-U.y;const ut=X*X+E*E;if(ut<=2)return new mt(X,E);rt=Math.sqrt(ut/2)}else{let Y=!1;K>Number.EPSILON?it>Number.EPSILON&&(Y=!0):K<-Number.EPSILON?it<-Number.EPSILON&&(Y=!0):Math.sign(Q)===Math.sign(w)&&(Y=!0),Y?(X=-Q,E=K,rt=Math.sqrt(_)):(X=K,E=Q,rt=Math.sqrt(_/2))}return new mt(X/rt,E/rt)}const ct=[];for(let U=0,z=J.length,F=z-1,X=U+1;U<z;U++,F++,X++)F===z&&(F=0),X===z&&(X=0),ct[U]=H(J[U],J[F],J[X]);const pt=[];let ft,kt=ct.concat();for(let U=0,z=j;U<z;U++){const F=L[U];ft=[];for(let X=0,E=F.length,rt=E-1,K=X+1;X<E;X++,rt++,K++)rt===E&&(rt=0),K===E&&(K=0),ft[X]=H(F[X],F[rt],F[K]);pt.push(ft),kt=kt.concat(ft)}let Lt;if(m===0)Lt=Br.triangulateShape(J,L);else{const U=[],z=[];for(let F=0;F<m;F++){const X=F/m,E=p*Math.cos(X*Math.PI/2),rt=g*Math.sin(X*Math.PI/2)+v;for(let K=0,Q=J.length;K<Q;K++){const it=W(J[K],ct[K],rt);Vt(it.x,it.y,-E),X===0&&U.push(it)}for(let K=0,Q=j;K<Q;K++){const it=L[K];ft=pt[K];const w=[];for(let _=0,N=it.length;_<N;_++){const Y=W(it[_],ft[_],rt);Vt(Y.x,Y.y,-E),X===0&&w.push(Y)}X===0&&z.push(w)}}Lt=Br.triangulateShape(U,z)}const Zt=Lt.length,ce=g+v;for(let U=0;U<k;U++){const z=f?W(M[U],kt[U],ce):M[U];x?(C.copy(A.normals[0]).multiplyScalar(z.x),P.copy(A.binormals[0]).multiplyScalar(z.y),R.copy(y[0]).add(C).add(P),Vt(R.x,R.y,R.z)):Vt(z.x,z.y,0)}for(let U=1;U<=u;U++)for(let z=0;z<k;z++){const F=f?W(M[z],kt[z],ce):M[z];x?(C.copy(A.normals[U]).multiplyScalar(F.x),P.copy(A.binormals[U]).multiplyScalar(F.y),R.copy(y[U]).add(C).add(P),Vt(R.x,R.y,R.z)):Vt(F.x,F.y,h/u*U)}for(let U=m-1;U>=0;U--){const z=U/m,F=p*Math.cos(z*Math.PI/2),X=g*Math.sin(z*Math.PI/2)+v;for(let E=0,rt=J.length;E<rt;E++){const K=W(J[E],ct[E],X);Vt(K.x,K.y,h+F)}for(let E=0,rt=L.length;E<rt;E++){const K=L[E];ft=pt[E];for(let Q=0,it=K.length;Q<it;Q++){const w=W(K[Q],ft[Q],X);x?Vt(w.x,w.y+y[u-1].y,y[u-1].x+F):Vt(w.x,w.y,h+F)}}}st(),ot();function st(){const U=r.length/3;if(f){let z=0,F=k*z;for(let X=0;X<Zt;X++){const E=Lt[X];Mt(E[2]+F,E[1]+F,E[0]+F)}z=u+m*2,F=k*z;for(let X=0;X<Zt;X++){const E=Lt[X];Mt(E[0]+F,E[1]+F,E[2]+F)}}else{for(let z=0;z<Zt;z++){const F=Lt[z];Mt(F[2],F[1],F[0])}for(let z=0;z<Zt;z++){const F=Lt[z];Mt(F[0]+k*u,F[1]+k*u,F[2]+k*u)}}i.addGroup(U,r.length/3-U,0)}function ot(){const U=r.length/3;let z=0;Pt(J,z),z+=J.length;for(let F=0,X=L.length;F<X;F++){const E=L[F];Pt(E,z),z+=E.length}i.addGroup(U,r.length/3-U,1)}function Pt(U,z){let F=U.length;for(;--F>=0;){const X=F;let E=F-1;E<0&&(E=U.length-1);for(let rt=0,K=u+m*2;rt<K;rt++){const Q=k*rt,it=k*(rt+1),w=z+X+Q,_=z+E+Q,N=z+E+it,Y=z+X+it;oe(w,_,N,Y)}}}function Vt(U,z,F){l.push(U),l.push(z),l.push(F)}function Mt(U,z,F){I(U),I(z),I(F);const X=r.length/3,E=S.generateTopUV(i,r,X-3,X-2,X-1);O(E[0]),O(E[1]),O(E[2])}function oe(U,z,F,X){I(U),I(z),I(X),I(z),I(F),I(X);const E=r.length/3,rt=S.generateSideWallUV(i,r,E-6,E-3,E-2,E-1);O(rt[0]),O(rt[1]),O(rt[3]),O(rt[1]),O(rt[2]),O(rt[3])}function I(U){r.push(l[U*3+0]),r.push(l[U*3+1]),r.push(l[U*3+2])}function O(U){s.push(U.x),s.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return lw(n,i,t)}static fromJSON(t,n){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=n[t.shapes[s]];i.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new ju[r.type]().fromJSON(r)),new wf(i,t.options)}}const aw={generateTopUV:function(e,t,n,i,r){const s=t[n*3],o=t[n*3+1],a=t[i*3],l=t[i*3+1],c=t[r*3],u=t[r*3+1];return[new mt(s,o),new mt(a,l),new mt(c,u)]},generateSideWallUV:function(e,t,n,i,r,s){const o=t[n*3],a=t[n*3+1],l=t[n*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[r*3],p=t[r*3+1],g=t[r*3+2],v=t[s*3],m=t[s*3+1],d=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-h),new mt(f,1-g),new mt(v,1-d)]:[new mt(a,1-l),new mt(u,1-h),new mt(p,1-g),new mt(m,1-d)]}};function lw(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){const s=e[i];n.shapes.push(s.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class bs extends Sf{constructor(t=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new bs(t.radius,t.detail)}}class Qo extends fe{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=n/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const S=d*f-o;for(let y=0;y<c;y++){const x=y*h-s;g.push(x,-S,0),v.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<a;S++){const y=S+c*d,x=S+c*(d+1),A=S+1+c*(d+1),P=S+1+c*d;p.push(y,x,P),p.push(x,A,P)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.width,t.height,t.widthSegments,t.heightSegments)}}class jo extends fe{constructor(t=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,f=new D,p=[],g=[],v=[],m=[];for(let d=0;d<=i;d++){const S=[],y=d/i;let x=0;d===0&&o===0?x=.5/n:d===i&&l===Math.PI&&(x=-.5/n);for(let A=0;A<=n;A++){const P=A/n;h.x=-t*Math.cos(r+P*s)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(r+P*s)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(P+x,1-y),S.push(c++)}u.push(S)}for(let d=0;d<i;d++)for(let S=0;S<n;S++){const y=u[d][S+1],x=u[d][S],A=u[d+1][S],P=u[d+1][S+1];(d!==0||o>0)&&p.push(y,x,P),(d!==i-1||l<Math.PI)&&p.push(x,A,P)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class hr extends fe{constructor(t=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new D,h=new D,f=new D;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const v=g/r*s,m=p/i*Math.PI*2;h.x=(t+n*Math.cos(m))*Math.cos(v),h.y=(t+n*Math.cos(m))*Math.sin(v),h.z=n*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const v=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,S=(r+1)*p+g;o.push(v,m,S),o.push(m,d,S)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class cw extends ni{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zs extends jr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=X0,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uw extends Zs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class hw extends jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fw extends jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Kp={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class dw{constructor(t,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const pw=new dw;class Ef{constructor(t){this.manager=t!==void 0?t:pw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(r,s){i.load(t,r,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ef.DEFAULT_MATERIAL_NAME="__DEFAULT";const Li={};class mw extends Error{constructor(t,n){super(t),this.response=n}}class gw extends Ef{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,n,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Kp.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{n&&n(s),this.manager.itemEnd(t)},0),s;if(Li[t]!==void 0){Li[t].push({onLoad:n,onProgress:i,onError:r});return}Li[t]=[],Li[t].push({onLoad:n,onProgress:i,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Yt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Li[t],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let v=0;const m=new ReadableStream({start(d){S();function S(){h.read().then(({done:y,value:x})=>{if(y)d.close();else{v+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let P=0,C=u.length;P<C;P++){const R=u[P];R.onProgress&&R.onProgress(A)}d.enqueue(x),S()}},y=>{d.error(y)})}}});return new Response(m)}else throw new mw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Kp.add(`file:${t}`,c);const u=Li[t];delete Li[t];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Li[t];if(u===void 0)throw this.manager.itemError(t),c;delete Li[t];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class ta extends Te{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Ic=new he,Qp=new D,jp=new D;class Tf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gf,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;Qp.setFromMatrixPosition(t.matrixWorld),n.position.copy(Qp),jp.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(jp),n.updateMatrixWorld(),Ic.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ic,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ic)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _w extends Tf{constructor(){super(new Pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const n=this.camera,i=Bs*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class vw extends ta{constructor(t,n,i=0,r=Math.PI/3,s=0,o=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new _w}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(t).uuid),n.object.shadow=this.shadow.toJSON(),n}}class xw extends Tf{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0}}class yw extends ta{constructor(t,n,i=0,r=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new xw}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Af extends j0{constructor(t=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Sw extends Tf{constructor(){super(new Af(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class f_ extends ta{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Sw}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class d_ extends ta{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class bw extends ta{constructor(t,n,i=10,r=10){super(t,n),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const n=super.toJSON(t);return n.object.width=this.width,n.object.height=this.height,n}}class Mw extends Pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const tm=new he;class p_{constructor(t,n,i=0,r=1/0){this.ray=new Ko(t,n),this.near=i,this.far=r,this.camera=null,this.layers=new mf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):de("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return tm.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tm),this}intersectObject(t,n=!0,i=[]){return ih(t,this,i,n),i.sort(em),i}intersectObjects(t,n=!0,i=[]){for(let r=0,s=t.length;r<s;r++)ih(t[r],this,i,n);return i.sort(em),i}}function em(e,t){return e.distance-t.distance}function ih(e,t,n,i){let r=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(r=!1),r===!0&&i===!0){const s=e.children;for(let o=0,a=s.length;o<a;o++)ih(s[o],t,n,!0)}}class nm{constructor(t=1,n=0,i=0){this.radius=t,this.phi=n,this.theta=i}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=re(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(re(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const im=new D;class ww extends Te{constructor(t,n){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=n,this.type="SpotLightHelper";const i=new fe,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,u=a/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}i.setAttribute("position",new te(r,3));const s=new ii({fog:!1,toneMapped:!1});this.cone=new n_(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,n=t*Math.tan(this.light.angle);this.cone.scale.set(n,n,t),im.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(im),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class Ew extends _t{constructor(t,n,i){const r=new jo(n,4,2),s=new xr({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=t,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const rm=new D,Ua=new D,sm=new D;class Tw extends Te{constructor(t,n,i){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",n===void 0&&(n=1);let r=new fe;r.setAttribute("position",new te([-n,n,0,n,n,0,n,-n,0,-n,-n,0,-n,n,0],3));const s=new ii({fog:!1,toneMapped:!1});this.lightPlane=new tn(r,s),this.add(this.lightPlane),r=new fe,r.setAttribute("position",new te([0,0,0,0,0,1],3)),this.targetLine=new tn(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),rm.setFromMatrixPosition(this.light.matrixWorld),Ua.setFromMatrixPosition(this.light.target.matrixWorld),sm.subVectors(Ua,rm),this.lightPlane.lookAt(Ua),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ua),this.targetLine.scale.z=sm.length()}}class Aw extends tn{constructor(t,n=1,i=16776960){const r=i,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new fe;o.setAttribute("position",new te(s,3)),o.computeBoundingSphere(),super(o,new ii({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=n;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new fe;l.setAttribute("position",new te(a,3)),l.computeBoundingSphere(),this.add(new _t(l,new xr({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const om=new D;let Oa,Lc;class Pf extends Te{constructor(t=new D(0,0,1),n=new D(0,0,0),i=1,r=16776960,s=i*.2,o=s*.2){super(),this.type="ArrowHelper",Oa===void 0&&(Oa=new fe,Oa.setAttribute("position",new te([0,0,0,0,1,0],3)),Lc=new Ll(.5,1,5,1),Lc.translate(0,-.5,0)),this.position.copy(n),this.line=new tn(Oa,new ii({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new _t(Lc,new xr({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,s,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{om.set(t.z,0,-t.x).normalize();const n=Math.acos(t.y);this.quaternion.setFromAxisAngle(om,n)}}setLength(t,n=t*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,t-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class m_ extends n_{constructor(t=1){const n=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new fe;r.setAttribute("position",new te(n,3)),r.setAttribute("color",new te(i,3));const s=new ii({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,n,i){const r=new $t,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Pw{constructor(){this.type="ShapePath",this.color=new $t,this.subPaths=[],this.currentPath=null}moveTo(t,n){return this.currentPath=new th,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,n),this}lineTo(t,n){return this.currentPath.lineTo(t,n),this}quadraticCurveTo(t,n,i,r){return this.currentPath.quadraticCurveTo(t,n,i,r),this}bezierCurveTo(t,n,i,r,s,o){return this.currentPath.bezierCurveTo(t,n,i,r,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function n(d){const S=[];for(let y=0,x=d.length;y<x;y++){const A=d[y],P=new Qa;P.curves=A.curves,S.push(P)}return S}function i(d,S){const y=S.length;let x=!1;for(let A=y-1,P=0;P<y;A=P++){let C=S[A],R=S[P],b=R.x-C.x,M=R.y-C.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(C=S[P],b=-b,R=S[A],M=-M),d.y<C.y||d.y>R.y)continue;if(d.y===C.y){if(d.x===C.x)return!0}else{const L=M*(d.x-C.x)-b*(d.y-C.y);if(L===0)return!0;if(L<0)continue;x=!x}}else{if(d.y!==C.y)continue;if(R.x<=d.x&&d.x<=C.x||C.x<=d.x&&d.x<=R.x)return!0}}return x}const r=Br.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Qa,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=t?!u:u;const h=[],f=[];let p=[],g=0,v;f[g]=void 0,p[g]=[];for(let d=0,S=s.length;d<S;d++)a=s[d],v=a.getPoints(),o=r(v),o=t?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Qa,p:v},f[g].s.curves=a.curves,u&&g++,p[g]=[]):p[g].push({h:a,p:v[0]});if(!f[0])return n(s);if(f.length>1){let d=!1,S=0;for(let y=0,x=f.length;y<x;y++)h[y]=[];for(let y=0,x=f.length;y<x;y++){const A=p[y];for(let P=0;P<A.length;P++){const C=A[P];let R=!0;for(let b=0;b<f.length;b++)i(C.p,f[b].p)&&(y!==b&&S++,R?(R=!1,h[b].push(C)):d=!0);R&&h[y].push(C)}}S>0&&d===!1&&(p=h)}let m;for(let d=0,S=f.length;d<S;d++){l=f[d].s,c.push(l),m=p[d];for(let y=0,x=m.length;y<x;y++)l.holes.push(m[y].h)}return c}}class g_ extends Kr{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Yt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function am(e,t,n,i){const r=Cw(i);switch(n){case H0:return e*t;case W0:return e*t/r.components*r.byteLength;case lf:return e*t/r.components*r.byteLength;case Fs:return e*t*2/r.components*r.byteLength;case cf:return e*t*2/r.components*r.byteLength;case G0:return e*t*3/r.components*r.byteLength;case Kn:return e*t*4/r.components*r.byteLength;case uf:return e*t*4/r.components*r.byteLength;case Ja:case $a:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Za:case Ka:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yu:case bu:return Math.max(e,16)*Math.max(t,8)/4;case xu:case Su:return Math.max(e,8)*Math.max(t,8)/2;case Mu:case wu:case Tu:case Au:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Eu:case Pu:case Cu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ru:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Du:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Iu:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Lu:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Nu:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Uu:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ou:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Fu:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ku:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Bu:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case zu:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Vu:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Hu:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Gu:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Wu:case Xu:case qu:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Yu:case Ju:return Math.ceil(e/4)*Math.ceil(t/4)*8;case $u:case Zu:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Cw(e){switch(e){case kn:case k0:return{byteLength:1,components:1};case ko:case B0:case Yi:return{byteLength:2,components:1};case of:case af:return{byteLength:2,components:4};case bi:case sf:case pi:return{byteLength:4,components:1};case z0:case V0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nf}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nf);function __(){let e=null,t=!1,n=null,i=null;function r(s,o){n(s,o),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function Rw(e){const t=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(e.bindBuffer(c,a),h.length===0)e.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];e.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(e.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Dw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ow=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ww=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$w=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aE="gl_FragColor = linearToOutputTexel( gl_FragColor );",lE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_E=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ME=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,CE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,RE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$E=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ZE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,oT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_T=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ST=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ET=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$T=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,l1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:Dw,alphahash_pars_fragment:Iw,alphamap_fragment:Lw,alphamap_pars_fragment:Nw,alphatest_fragment:Uw,alphatest_pars_fragment:Ow,aomap_fragment:Fw,aomap_pars_fragment:kw,batching_pars_vertex:Bw,batching_vertex:zw,begin_vertex:Vw,beginnormal_vertex:Hw,bsdfs:Gw,iridescence_fragment:Ww,bumpmap_pars_fragment:Xw,clipping_planes_fragment:qw,clipping_planes_pars_fragment:Yw,clipping_planes_pars_vertex:Jw,clipping_planes_vertex:$w,color_fragment:Zw,color_pars_fragment:Kw,color_pars_vertex:Qw,color_vertex:jw,common:tE,cube_uv_reflection_fragment:eE,defaultnormal_vertex:nE,displacementmap_pars_vertex:iE,displacementmap_vertex:rE,emissivemap_fragment:sE,emissivemap_pars_fragment:oE,colorspace_fragment:aE,colorspace_pars_fragment:lE,envmap_fragment:cE,envmap_common_pars_fragment:uE,envmap_pars_fragment:hE,envmap_pars_vertex:fE,envmap_physical_pars_fragment:ME,envmap_vertex:dE,fog_vertex:pE,fog_pars_vertex:mE,fog_fragment:gE,fog_pars_fragment:_E,gradientmap_pars_fragment:vE,lightmap_pars_fragment:xE,lights_lambert_fragment:yE,lights_lambert_pars_fragment:SE,lights_pars_begin:bE,lights_toon_fragment:wE,lights_toon_pars_fragment:EE,lights_phong_fragment:TE,lights_phong_pars_fragment:AE,lights_physical_fragment:PE,lights_physical_pars_fragment:CE,lights_fragment_begin:RE,lights_fragment_maps:DE,lights_fragment_end:IE,logdepthbuf_fragment:LE,logdepthbuf_pars_fragment:NE,logdepthbuf_pars_vertex:UE,logdepthbuf_vertex:OE,map_fragment:FE,map_pars_fragment:kE,map_particle_fragment:BE,map_particle_pars_fragment:zE,metalnessmap_fragment:VE,metalnessmap_pars_fragment:HE,morphinstance_vertex:GE,morphcolor_vertex:WE,morphnormal_vertex:XE,morphtarget_pars_vertex:qE,morphtarget_vertex:YE,normal_fragment_begin:JE,normal_fragment_maps:$E,normal_pars_fragment:ZE,normal_pars_vertex:KE,normal_vertex:QE,normalmap_pars_fragment:jE,clearcoat_normal_fragment_begin:tT,clearcoat_normal_fragment_maps:eT,clearcoat_pars_fragment:nT,iridescence_pars_fragment:iT,opaque_fragment:rT,packing:sT,premultiplied_alpha_fragment:oT,project_vertex:aT,dithering_fragment:lT,dithering_pars_fragment:cT,roughnessmap_fragment:uT,roughnessmap_pars_fragment:hT,shadowmap_pars_fragment:fT,shadowmap_pars_vertex:dT,shadowmap_vertex:pT,shadowmask_pars_fragment:mT,skinbase_vertex:gT,skinning_pars_vertex:_T,skinning_vertex:vT,skinnormal_vertex:xT,specularmap_fragment:yT,specularmap_pars_fragment:ST,tonemapping_fragment:bT,tonemapping_pars_fragment:MT,transmission_fragment:wT,transmission_pars_fragment:ET,uv_pars_fragment:TT,uv_pars_vertex:AT,uv_vertex:PT,worldpos_vertex:CT,background_vert:RT,background_frag:DT,backgroundCube_vert:IT,backgroundCube_frag:LT,cube_vert:NT,cube_frag:UT,depth_vert:OT,depth_frag:FT,distance_vert:kT,distance_frag:BT,equirect_vert:zT,equirect_frag:VT,linedashed_vert:HT,linedashed_frag:GT,meshbasic_vert:WT,meshbasic_frag:XT,meshlambert_vert:qT,meshlambert_frag:YT,meshmatcap_vert:JT,meshmatcap_frag:$T,meshnormal_vert:ZT,meshnormal_frag:KT,meshphong_vert:QT,meshphong_frag:jT,meshphysical_vert:t1,meshphysical_frag:e1,meshtoon_vert:n1,meshtoon_frag:i1,points_vert:r1,points_frag:s1,shadow_vert:o1,shadow_frag:a1,sprite_vert:l1,sprite_frag:c1},At={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},fi={basic:{uniforms:_n([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:_n([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new $t(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:_n([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:_n([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:_n([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new $t(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:_n([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:_n([At.points,At.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:_n([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:_n([At.common,At.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:_n([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:_n([At.sprite,At.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:_n([At.common,At.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:_n([At.lights,At.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};fi.physical={uniforms:_n([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const Fa={r:0,b:0,g:0},Rr=new ei,u1=new he;function h1(e,t,n,i,r,s,o){const a=new $t(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?n:t).get(x)),x}function v(y){let x=!1;const A=g(y);A===null?d(a,l):A&&A.isColor&&(d(A,1),x=!0);const P=e.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(y,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===Il)?(u===void 0&&(u=new _t(new ke(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:zs(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Rr.copy(x.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(u1.makeRotationFromEuler(Rr)),u.material.toneMapped=me.getTransfer(A.colorSpace)!==be,(h!==A||f!==A.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,p=e.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new _t(new Qo(2,2),new ni({name:"BackgroundMaterial",uniforms:zs(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=me.getTransfer(A.colorSpace)!==be,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,p=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,x){y.getRGB(Fa,K0(e)),i.buffers.color.setClear(Fa.r,Fa.g,Fa.b,x,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:v,addToRenderList:m,dispose:S}}function f1(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,L,V,q,j){let J=!1;const W=h(q,V,L);s!==W&&(s=W,c(s.object)),J=p(M,q,V,j),J&&g(M,q,V,j),j!==null&&t.update(j,e.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,x(M,L,V,q),j!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return e.createVertexArray()}function c(M){return e.bindVertexArray(M)}function u(M){return e.deleteVertexArray(M)}function h(M,L,V){const q=V.wireframe===!0;let j=i[M.id];j===void 0&&(j={},i[M.id]=j);let J=j[L.id];J===void 0&&(J={},j[L.id]=J);let W=J[q];return W===void 0&&(W=f(l()),J[q]=W),W}function f(M){const L=[],V=[],q=[];for(let j=0;j<n;j++)L[j]=0,V[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:q,object:M,attributes:{},index:null}}function p(M,L,V,q){const j=s.attributes,J=L.attributes;let W=0;const k=V.getAttributes();for(const H in k)if(k[H].location>=0){const pt=j[H];let ft=J[H];if(ft===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor)),pt===void 0||pt.attribute!==ft||ft&&pt.data!==ft.data)return!0;W++}return s.attributesNum!==W||s.index!==q}function g(M,L,V,q){const j={},J=L.attributes;let W=0;const k=V.getAttributes();for(const H in k)if(k[H].location>=0){let pt=J[H];pt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor));const ft={};ft.attribute=pt,pt&&pt.data&&(ft.data=pt.data),j[H]=ft,W++}s.attributes=j,s.attributesNum=W,s.index=q}function v(){const M=s.newAttributes;for(let L=0,V=M.length;L<V;L++)M[L]=0}function m(M){d(M,0)}function d(M,L){const V=s.newAttributes,q=s.enabledAttributes,j=s.attributeDivisors;V[M]=1,q[M]===0&&(e.enableVertexAttribArray(M),q[M]=1),j[M]!==L&&(e.vertexAttribDivisor(M,L),j[M]=L)}function S(){const M=s.newAttributes,L=s.enabledAttributes;for(let V=0,q=L.length;V<q;V++)L[V]!==M[V]&&(e.disableVertexAttribArray(V),L[V]=0)}function y(M,L,V,q,j,J,W){W===!0?e.vertexAttribIPointer(M,L,V,j,J):e.vertexAttribPointer(M,L,V,q,j,J)}function x(M,L,V,q){v();const j=q.attributes,J=V.getAttributes(),W=L.defaultAttributeValues;for(const k in J){const H=J[k];if(H.location>=0){let ct=j[k];if(ct===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),ct!==void 0){const pt=ct.normalized,ft=ct.itemSize,kt=t.get(ct);if(kt===void 0)continue;const Lt=kt.buffer,Zt=kt.type,ce=kt.bytesPerElement,st=Zt===e.INT||Zt===e.UNSIGNED_INT||ct.gpuType===sf;if(ct.isInterleavedBufferAttribute){const ot=ct.data,Pt=ot.stride,Vt=ct.offset;if(ot.isInstancedInterleavedBuffer){for(let Mt=0;Mt<H.locationSize;Mt++)d(H.location+Mt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Mt=0;Mt<H.locationSize;Mt++)m(H.location+Mt);e.bindBuffer(e.ARRAY_BUFFER,Lt);for(let Mt=0;Mt<H.locationSize;Mt++)y(H.location+Mt,ft/H.locationSize,Zt,pt,Pt*ce,(Vt+ft/H.locationSize*Mt)*ce,st)}else{if(ct.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)d(H.location+ot,ct.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ot=0;ot<H.locationSize;ot++)m(H.location+ot);e.bindBuffer(e.ARRAY_BUFFER,Lt);for(let ot=0;ot<H.locationSize;ot++)y(H.location+ot,ft/H.locationSize,Zt,pt,ft*ce,ft/H.locationSize*ot*ce,st)}}else if(W!==void 0){const pt=W[k];if(pt!==void 0)switch(pt.length){case 2:e.vertexAttrib2fv(H.location,pt);break;case 3:e.vertexAttrib3fv(H.location,pt);break;case 4:e.vertexAttrib4fv(H.location,pt);break;default:e.vertexAttrib1fv(H.location,pt)}}}}S()}function A(){R();for(const M in i){const L=i[M];for(const V in L){const q=L[V];for(const j in q)u(q[j].object),delete q[j];delete L[V]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const V in L){const q=L[V];for(const j in q)u(q[j].object),delete q[j];delete L[V]}delete i[M.id]}function C(M){for(const L in i){const V=i[L];if(V[M.id]===void 0)continue;const q=V[M.id];for(const j in q)u(q[j].object),delete q[j];delete V[M.id]}}function R(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function d1(e,t,n){let i;function r(c){i=c}function s(c,u){e.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(e.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];n.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function p1(e,t,n,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Kn&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const R=C===Yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==kn&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==pi&&!R)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Yt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),S=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=e.getParameter(e.MAX_SAMPLES),P=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:x,maxSamples:A,samples:P}}function m1(e){const t=this;let n=null,i=0,r=!1,s=!1;const o=new Oi,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=e.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:i,y=S*4;let x=d.clippingState||null;l.value=x,x=u(g,f,y,p);for(let A=0;A!==y;++A)x[A]=n[A];d.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==v;++y,x+=4)o.copy(h[y]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function g1(e){let t=new WeakMap;function n(o,a){return a===mu?o.mapping=qr:a===gu&&(o.mapping=Os),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===mu||a===gu)if(t.has(o)){const l=t.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new e_(l.height);return c.fromEquirectangularTexture(e,o),t.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const pr=4,lm=[.125,.215,.35,.446,.526,.582],Or=20,_1=256,ao=new Af,cm=new $t;let Nc=null,Uc=0,Oc=0,Fc=!1;const v1=new D;class um{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=v1}=s;Nc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Nc,Uc,Oc),this._renderer.xr.enabled=Fc,t.scissorTest=!1,gs(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===qr||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Yi,format:Kn,colorSpace:ks,depthBuffer:!1},r=hm(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(t,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=x1(s)),this._blurMaterial=S1(s,t,n),this._ggxMaterial=y1(s,t,n)}return r}_compileMaterial(t){const n=new _t(new fe,t);this._renderer.compile(n,ao)}_sceneToCubeUV(t,n,i,r,s){const l=new Pn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(cm),h.toneMapping=_i,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new ke,new xr({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,d=!0):(m.color.copy(cm),d=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const A=this._cubeSize;gs(r,x*A,y>2?A:0,A,A),h.setRenderTarget(r),d&&h.render(v,l),h.render(t,l)}h.toneMapping=p,h.autoClear=f,t.background=S}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===qr||t.mapping===Os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;gs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ao)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-pr?i-g+pr:0),d=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-n,gs(s,m,d,3*v,2*v),r.setRenderTarget(s),r.render(a,ao),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,gs(t,m,d,3*v,2*v),r.setRenderTarget(t),r.render(a,ao)}_blur(t,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&de("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Or-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Or;m>Or&&Yt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Or}`);const d=[];let S=0;for(let C=0;C<Or;++C){const R=C/v,b=Math.exp(-R*R/2);d.push(b),C===0?S+=b:C<m&&(S+=2*b)}for(let C=0;C<d.length;C++)d[C]=d[C]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const x=this._sizeLods[r],A=3*x*(r>y-pr?r-y+pr:0),P=4*(this._cubeSize-x);gs(n,A,P,3*x,2*x),l.setRenderTarget(n),l.render(h,ao)}}function x1(e){const t=[],n=[],i=[];let r=e;const s=e-pr+1+lm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>e-pr?l=lm[o-e+pr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,S=new Float32Array(v*g*p),y=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let P=0;P<p;P++){const C=P%3*2/3-1,R=P>2?0:-1,b=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];S.set(b,v*g*P),y.set(f,m*g*P);const M=[P,P,P,P,P,P];x.set(M,d*g*P)}const A=new fe;A.setAttribute("position",new bn(S,v)),A.setAttribute("uv",new bn(y,m)),A.setAttribute("faceIndex",new bn(x,d)),i.push(new _t(A,null)),r>pr&&r--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function hm(e,t,n){const i=new vi(e,t,n);return i.texture.mapping=Il,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gs(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function y1(e,t,n){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function S1(e,t,n){const i=new Float32Array(Or),r=new D(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function fm(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function dm(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Nl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function b1(e){let t=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===mu||l===gu,u=l===qr||l===Os;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new um(e)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new um(e)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function M1(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const r=e.getExtension(i);return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&zo("WebGLRenderer: "+i+" extension not supported."),r}}}function w1(e,t,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let y=0,x=S.length;y<x;y+=3){const A=S[y+0],P=S[y+1],C=S[y+2];f.push(A,P,P,C,C,A)}}else if(g!==void 0){const S=g.array;v=g.version;for(let y=0,x=S.length/3-1;y<x;y+=3){const A=y+0,P=y+1,C=y+2;f.push(A,P,P,C,C,A)}}else return;const m=new(q0(f)?Z0:$0)(f,1);m.version=v;const d=s.get(h);d&&t.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function E1(e,t,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){e.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,g){g!==0&&(e.drawElementsInstanced(i,p,s,f*o,g),n.update(p,i,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];n.update(m,i,1)}function h(f,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,g);let d=0;for(let S=0;S<g;S++)d+=p[S]*v[S];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function T1(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(s/3);break;case e.LINES:n.lines+=a*(s/2);break;case e.LINE_STRIP:n.lines+=a*(s-1);break;case e.LINE_LOOP:n.lines+=a*s;break;case e.POINTS:n.points+=a*s;break;default:de("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function A1(e,t,n){const i=new WeakMap,r=new Be;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let A=a.attributes.position.count*x,P=1;A>t.maxTextureSize&&(P=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const C=new Float32Array(A*P*4*h),R=new Y0(C,A,P,h);R.type=pi,R.needsUpdate=!0;const b=x*4;for(let L=0;L<h;L++){const V=d[L],q=S[L],j=y[L],J=A*P*4*L;for(let W=0;W<V.count;W++){const k=W*b;g===!0&&(r.fromBufferAttribute(V,W),C[J+k+0]=r.x,C[J+k+1]=r.y,C[J+k+2]=r.z,C[J+k+3]=0),v===!0&&(r.fromBufferAttribute(q,W),C[J+k+4]=r.x,C[J+k+5]=r.y,C[J+k+6]=r.z,C[J+k+7]=0),m===!0&&(r.fromBufferAttribute(j,W),C[J+k+8]=r.x,C[J+k+9]=r.y,C[J+k+10]=r.z,C[J+k+11]=j.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new mt(A,P)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:s}}function P1(e,t,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const C1={[D0]:"LINEAR_TONE_MAPPING",[I0]:"REINHARD_TONE_MAPPING",[L0]:"CINEON_TONE_MAPPING",[rf]:"ACES_FILMIC_TONE_MAPPING",[U0]:"AGX_TONE_MAPPING",[O0]:"NEUTRAL_TONE_MAPPING",[N0]:"CUSTOM_TONE_MAPPING"};function R1(e,t,n,i,r){const s=new vi(t,n,{type:e,depthBuffer:i,stencilBuffer:r}),o=new vi(t,n,{type:Yi,depthBuffer:!1,stencilBuffer:!1}),a=new fe;a.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new te([0,2,0,0,2,0],2));const l=new cw({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new _t(a,l),u=new Af(-1,1,1,-1,0,1);let h=null,f=null,p=!1,g,v=null,m=[],d=!1;this.setSize=function(S,y){s.setSize(S,y),o.setSize(S,y);for(let x=0;x<m.length;x++){const A=m[x];A.setSize&&A.setSize(S,y)}},this.setEffects=function(S){m=S,d=m.length>0&&m[0].isRenderPass===!0;const y=s.width,x=s.height;for(let A=0;A<m.length;A++){const P=m[A];P.setSize&&P.setSize(y,x)}},this.begin=function(S,y){if(p||S.toneMapping===_i&&m.length===0)return!1;if(v=y,y!==null){const x=y.width,A=y.height;(s.width!==x||s.height!==A)&&this.setSize(x,A)}return d===!1&&S.setRenderTarget(s),g=S.toneMapping,S.toneMapping=_i,!0},this.hasRenderPass=function(){return d},this.end=function(S,y){S.toneMapping=g,p=!0;let x=s,A=o;for(let P=0;P<m.length;P++){const C=m[P];if(C.enabled!==!1&&(C.render(S,A,x,y),C.needsSwap!==!1)){const R=x;x=A,A=R}}if(h!==S.outputColorSpace||f!==S.toneMapping){h=S.outputColorSpace,f=S.toneMapping,l.defines={},me.getTransfer(h)===be&&(l.defines.SRGB_TRANSFER="");const P=C1[f];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,S.setRenderTarget(v),S.render(c,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const v_=new Sn,rh=new Vo(1,1),x_=new Y0,y_=new aM,S_=new t_,pm=[],mm=[],gm=new Float32Array(16),_m=new Float32Array(9),vm=new Float32Array(4);function Ks(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let s=pm[r];if(s===void 0&&(s=new Float32Array(r),pm[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(s,a)}return s}function Ze(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ke(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ul(e,t){let n=mm[t];n===void 0&&(n=new Int32Array(t),mm[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function D1(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function I1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2fv(this.addr,t),Ke(n,t)}}function L1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ze(n,t))return;e.uniform3fv(this.addr,t),Ke(n,t)}}function N1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4fv(this.addr,t),Ke(n,t)}}function U1(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ke(n,t)}else{if(Ze(n,i))return;vm.set(i),e.uniformMatrix2fv(this.addr,!1,vm),Ke(n,i)}}function O1(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ke(n,t)}else{if(Ze(n,i))return;_m.set(i),e.uniformMatrix3fv(this.addr,!1,_m),Ke(n,i)}}function F1(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ke(n,t)}else{if(Ze(n,i))return;gm.set(i),e.uniformMatrix4fv(this.addr,!1,gm),Ke(n,i)}}function k1(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function B1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2iv(this.addr,t),Ke(n,t)}}function z1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ze(n,t))return;e.uniform3iv(this.addr,t),Ke(n,t)}}function V1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4iv(this.addr,t),Ke(n,t)}}function H1(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function G1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2uiv(this.addr,t),Ke(n,t)}}function W1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ze(n,t))return;e.uniform3uiv(this.addr,t),Ke(n,t)}}function X1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4uiv(this.addr,t),Ke(n,t)}}function q1(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?(rh.compareFunction=n.isReversedDepthBuffer()?ff:hf,s=rh):s=v_,n.setTexture2D(t||s,r)}function Y1(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||y_,r)}function J1(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||S_,r)}function $1(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||x_,r)}function Z1(e){switch(e){case 5126:return D1;case 35664:return I1;case 35665:return L1;case 35666:return N1;case 35674:return U1;case 35675:return O1;case 35676:return F1;case 5124:case 35670:return k1;case 35667:case 35671:return B1;case 35668:case 35672:return z1;case 35669:case 35673:return V1;case 5125:return H1;case 36294:return G1;case 36295:return W1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return J1;case 36289:case 36303:case 36311:case 36292:return $1}}function K1(e,t){e.uniform1fv(this.addr,t)}function Q1(e,t){const n=Ks(t,this.size,2);e.uniform2fv(this.addr,n)}function j1(e,t){const n=Ks(t,this.size,3);e.uniform3fv(this.addr,n)}function tA(e,t){const n=Ks(t,this.size,4);e.uniform4fv(this.addr,n)}function eA(e,t){const n=Ks(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function nA(e,t){const n=Ks(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function iA(e,t){const n=Ks(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function rA(e,t){e.uniform1iv(this.addr,t)}function sA(e,t){e.uniform2iv(this.addr,t)}function oA(e,t){e.uniform3iv(this.addr,t)}function aA(e,t){e.uniform4iv(this.addr,t)}function lA(e,t){e.uniform1uiv(this.addr,t)}function cA(e,t){e.uniform2uiv(this.addr,t)}function uA(e,t){e.uniform3uiv(this.addr,t)}function hA(e,t){e.uniform4uiv(this.addr,t)}function fA(e,t,n){const i=this.cache,r=t.length,s=Ul(n,r);Ze(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));let o;this.type===e.SAMPLER_2D_SHADOW?o=rh:o=v_;for(let a=0;a!==r;++a)n.setTexture2D(t[a]||o,s[a])}function dA(e,t,n){const i=this.cache,r=t.length,s=Ul(n,r);Ze(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));for(let o=0;o!==r;++o)n.setTexture3D(t[o]||y_,s[o])}function pA(e,t,n){const i=this.cache,r=t.length,s=Ul(n,r);Ze(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));for(let o=0;o!==r;++o)n.setTextureCube(t[o]||S_,s[o])}function mA(e,t,n){const i=this.cache,r=t.length,s=Ul(n,r);Ze(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(t[o]||x_,s[o])}function gA(e){switch(e){case 5126:return K1;case 35664:return Q1;case 35665:return j1;case 35666:return tA;case 35674:return eA;case 35675:return nA;case 35676:return iA;case 5124:case 35670:return rA;case 35667:case 35671:return sA;case 35668:case 35672:return oA;case 35669:case 35673:return aA;case 5125:return lA;case 36294:return cA;case 36295:return uA;case 36296:return hA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return pA;case 36289:case 36303:case 36311:case 36292:return mA}}class _A{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Z1(n.type)}}class vA{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gA(n.type)}}class xA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,n[a.id],i)}}}const kc=/(\w+)(\])?(\[|\.)?/g;function xm(e,t){e.seq.push(t),e.map[t.id]=t}function yA(e,t,n){const i=e.name,r=i.length;for(kc.lastIndex=0;;){const s=kc.exec(i),o=kc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){xm(n,c===void 0?new _A(a,e,t):new vA(a,e,t));break}else{let h=n.map[a];h===void 0&&(h=new xA(a),xm(n,h)),n=h}}}class ja{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(n,o),l=t.getUniformLocation(n,a.name);yA(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in n&&i.push(o)}return i}}function ym(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const SA=37297;let bA=0;function MA(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Sm=new ie;function wA(e){me._getMatrix(Sm,me.workingColorSpace,e);const t=`mat3( ${Sm.elements.map(n=>n.toFixed(4))} )`;switch(me.getTransfer(e)){case ul:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function bm(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+MA(e.getShaderSource(t),a)}else return s}function EA(e,t){const n=wA(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const TA={[D0]:"Linear",[I0]:"Reinhard",[L0]:"Cineon",[rf]:"ACESFilmic",[U0]:"AgX",[O0]:"Neutral",[N0]:"Custom"};function AA(e,t){const n=TA[t];return n===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ka=new D;function PA(){me.getLuminanceCoefficients(ka);const e=ka.x.toFixed(4),t=ka.y.toFixed(4),n=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CA(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_o).join(`
`)}function RA(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function DA(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=e.getActiveAttrib(t,r),o=s.name;let a=1;s.type===e.FLOAT_MAT2&&(a=2),s.type===e.FLOAT_MAT3&&(a=3),s.type===e.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function _o(e){return e!==""}function Mm(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wm(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const IA=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(e){return e.replace(IA,NA)}const LA=new Map;function NA(e,t){let n=se[t];if(n===void 0){const i=LA.get(t);if(i!==void 0)n=se[i],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return sh(n)}const UA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Em(e){return e.replace(UA,OA)}function OA(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tm(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const FA={[Ya]:"SHADOWMAP_TYPE_PCF",[mo]:"SHADOWMAP_TYPE_VSM"};function kA(e){return FA[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BA={[qr]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE",[Il]:"ENVMAP_TYPE_CUBE_UV"};function zA(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":BA[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const VA={[Os]:"ENVMAP_MODE_REFRACTION"};function HA(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":VA[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GA={[R0]:"ENVMAP_BLENDING_MULTIPLY",[Ab]:"ENVMAP_BLENDING_MIX",[Pb]:"ENVMAP_BLENDING_ADD"};function WA(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":GA[e.combine]||"ENVMAP_BLENDING_NONE"}function XA(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function qA(e,t,n,i){const r=e.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=kA(n),c=zA(n),u=HA(n),h=WA(n),f=XA(n),p=CA(n),g=RA(s),v=r.createProgram();let m,d,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(_o).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(_o).join(`
`),d.length>0&&(d+=`
`)):(m=[Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),d=[Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_i?"#define TONE_MAPPING":"",n.toneMapping!==_i?se.tonemapping_pars_fragment:"",n.toneMapping!==_i?AA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,EA("linearToOutputTexel",n.outputColorSpace),PA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_o).join(`
`)),o=sh(o),o=Mm(o,n),o=wm(o,n),a=sh(a),a=Mm(a,n),a=wm(a,n),o=Em(o),a=Em(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Sp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=S+m+o,x=S+d+a,A=ym(r,r.VERTEX_SHADER,y),P=ym(r,r.FRAGMENT_SHADER,x);r.attachShader(v,A),r.attachShader(v,P),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(L){if(e.debug.checkShaderErrors){const V=r.getProgramInfoLog(v)||"",q=r.getShaderInfoLog(A)||"",j=r.getShaderInfoLog(P)||"",J=V.trim(),W=q.trim(),k=j.trim();let H=!0,ct=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,v,A,P);else{const pt=bm(r,A,"vertex"),ft=bm(r,P,"fragment");de("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+J+`
`+pt+`
`+ft)}else J!==""?Yt("WebGLProgram: Program Info Log:",J):(W===""||k==="")&&(ct=!1);ct&&(L.diagnostics={runnable:H,programLog:J,vertexShader:{log:W,prefix:m},fragmentShader:{log:k,prefix:d}})}r.deleteShader(A),r.deleteShader(P),R=new ja(r,v),b=DA(r,v)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,SA)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bA++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=P,this}let YA=0;class JA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new $A(t),n.set(t,i)),i}}class $A{constructor(t){this.id=YA++,this.code=t,this.usedTimes=0}}function ZA(e,t,n,i,r,s,o){const a=new mf,l=new JA,c=new Set,u=[],h=new Map,f=r.logarithmicDepthBuffer;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,L,V,q){const j=V.fog,J=q.geometry,W=b.isMeshStandardMaterial?V.environment:null,k=(b.isMeshStandardMaterial?n:t).get(b.envMap||W),H=k&&k.mapping===Il?k.image.height:null,ct=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&Yt("WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const pt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ft=pt!==void 0?pt.length:0;let kt=0;J.morphAttributes.position!==void 0&&(kt=1),J.morphAttributes.normal!==void 0&&(kt=2),J.morphAttributes.color!==void 0&&(kt=3);let Lt,Zt,ce,st;if(ct){const ye=fi[ct];Lt=ye.vertexShader,Zt=ye.fragmentShader}else Lt=b.vertexShader,Zt=b.fragmentShader,l.update(b),ce=l.getVertexShaderID(b),st=l.getFragmentShaderID(b);const ot=e.getRenderTarget(),Pt=e.state.buffers.depth.getReversed(),Vt=q.isInstancedMesh===!0,Mt=q.isBatchedMesh===!0,oe=!!b.map,I=!!b.matcap,O=!!k,U=!!b.aoMap,z=!!b.lightMap,F=!!b.bumpMap,X=!!b.normalMap,E=!!b.displacementMap,rt=!!b.emissiveMap,K=!!b.metalnessMap,Q=!!b.roughnessMap,it=b.anisotropy>0,w=b.clearcoat>0,_=b.dispersion>0,N=b.iridescence>0,Y=b.sheen>0,nt=b.transmission>0,$=it&&!!b.anisotropyMap,wt=w&&!!b.clearcoatMap,ht=w&&!!b.clearcoatNormalMap,Ct=w&&!!b.clearcoatRoughnessMap,zt=N&&!!b.iridescenceMap,ut=N&&!!b.iridescenceThicknessMap,yt=Y&&!!b.sheenColorMap,Et=Y&&!!b.sheenRoughnessMap,It=!!b.specularMap,xt=!!b.specularColorMap,ee=!!b.specularIntensityMap,B=nt&&!!b.transmissionMap,Dt=nt&&!!b.thicknessMap,gt=!!b.gradientMap,Nt=!!b.alphaMap,dt=b.alphaTest>0,lt=!!b.alphaHash,bt=!!b.extensions;let Qt=_i;b.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Qt=e.toneMapping);const Ce={shaderID:ct,shaderType:b.type,shaderName:b.name,vertexShader:Lt,fragmentShader:Zt,defines:b.defines,customVertexShaderID:ce,customFragmentShaderID:st,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Mt,batchingColor:Mt&&q._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&q.instanceColor!==null,instancingMorph:Vt&&q.morphTexture!==null,outputColorSpace:ot===null?e.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ks,alphaToCoverage:!!b.alphaToCoverage,map:oe,matcap:I,envMap:O,envMapMode:O&&k.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:z,bumpMap:F,normalMap:X,displacementMap:E,emissiveMap:rt,normalMapObjectSpace:X&&b.normalMapType===Db,normalMapTangentSpace:X&&b.normalMapType===X0,metalnessMap:K,roughnessMap:Q,anisotropy:it,anisotropyMap:$,clearcoat:w,clearcoatMap:wt,clearcoatNormalMap:ht,clearcoatRoughnessMap:Ct,dispersion:_,iridescence:N,iridescenceMap:zt,iridescenceThicknessMap:ut,sheen:Y,sheenColorMap:yt,sheenRoughnessMap:Et,specularMap:It,specularColorMap:xt,specularIntensityMap:ee,transmission:nt,transmissionMap:B,thicknessMap:Dt,gradientMap:gt,opaque:b.transparent===!1&&b.blending===Ds&&b.alphaToCoverage===!1,alphaMap:Nt,alphaTest:dt,alphaHash:lt,combine:b.combine,mapUv:oe&&v(b.map.channel),aoMapUv:U&&v(b.aoMap.channel),lightMapUv:z&&v(b.lightMap.channel),bumpMapUv:F&&v(b.bumpMap.channel),normalMapUv:X&&v(b.normalMap.channel),displacementMapUv:E&&v(b.displacementMap.channel),emissiveMapUv:rt&&v(b.emissiveMap.channel),metalnessMapUv:K&&v(b.metalnessMap.channel),roughnessMapUv:Q&&v(b.roughnessMap.channel),anisotropyMapUv:$&&v(b.anisotropyMap.channel),clearcoatMapUv:wt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ht&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Et&&v(b.sheenRoughnessMap.channel),specularMapUv:It&&v(b.specularMap.channel),specularColorMapUv:xt&&v(b.specularColorMap.channel),specularIntensityMapUv:ee&&v(b.specularIntensityMap.channel),transmissionMapUv:B&&v(b.transmissionMap.channel),thicknessMapUv:Dt&&v(b.thicknessMap.channel),alphaMapUv:Nt&&v(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(X||it),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!J.attributes.uv&&(oe||Nt),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Pt,skinning:q.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:kt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:Qt,decodeVideoTexture:oe&&b.map.isVideoTexture===!0&&me.getTransfer(b.map.colorSpace)===be,decodeVideoTextureEmissive:rt&&b.emissiveMap.isVideoTexture===!0&&me.getTransfer(b.emissiveMap.colorSpace)===be,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xn,flipSided:b.side===fn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:bt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&b.extensions.multiDraw===!0||Mt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function d(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(S(M,b),y(M,b),M.push(e.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function S(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const M=g[b.type];let L;if(M){const V=fi[M];L=Q0.clone(V.uniforms)}else L=b.uniforms;return L}function A(b,M){let L=h.get(M);return L!==void 0?++L.usedTimes:(L=new qA(e,M,b,s),u.push(L),h.set(M,L)),L}function P(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),h.delete(b.cacheKey),b.destroy()}}function C(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:A,releaseProgram:P,releaseShaderCache:C,programs:u,dispose:R}}function KA(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let a=e.get(o);return a===void 0&&(a={},e.set(o,a)),a}function i(o){e.delete(o)}function r(o,a,l){e.get(o)[a]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:s}}function QA(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Am(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Pm(){const e=[];let t=0;const n=[],i=[],r=[];function s(){t=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,g,v,m){let d=e[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},e[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),t++,d}function a(h,f,p,g,v,m){const d=o(h,f,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(h,f,p,g,v,m){const d=o(h,f,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||QA),i.length>1&&i.sort(f||Am),r.length>1&&r.sort(f||Am)}function u(){for(let h=t,f=e.length;h<f;h++){const p=e[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function jA(){let e=new WeakMap;function t(i,r){const s=e.get(i);let o;return s===void 0?(o=new Pm,e.set(i,[o])):r>=s.length?(o=new Pm,s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function tP(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new D,color:new $t};break;case"SpotLight":n={position:new D,direction:new D,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new $t,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":n={color:new $t,position:new D,halfWidth:new D,halfHeight:new D};break}return e[t.id]=n,n}}}function eP(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let nP=0;function iP(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function rP(e){const t=new tP,n=eP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new he,o=new he;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,S=0,y=0,x=0,A=0,P=0,C=0;c.sort(iP);for(let b=0,M=c.length;b<M;b++){const L=c[b],V=L.color,q=L.intensity,j=L.distance;let J=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Fs?J=L.shadow.map.texture:J=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=V.r*q,h+=V.g*q,f+=V.b*q;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],q);C++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const k=L.shadow,H=n.get(L);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=L.shadow.matrix,S++}i.directional[p]=W,p++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(V).multiplyScalar(q),W.distance=j,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[v]=W;const k=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,k.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[v]=k.matrix,L.castShadow){const H=n.get(L);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=J,x++}v++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(V).multiplyScalar(q),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=W,m++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const k=L.shadow,H=n.get(L);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=W,g++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(q),W.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[d]=W,d++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=At.LTC_FLOAT_1,i.rectAreaLTC2=At.LTC_FLOAT_2):(i.rectAreaLTC1=At.LTC_HALF_1,i.rectAreaLTC2=At.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==S||R.numPointShadows!==y||R.numSpotShadows!==x||R.numSpotMaps!==A||R.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+A-P,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=S,R.numPointShadows=y,R.numSpotShadows=x,R.numSpotMaps=A,R.numLightProbes=C,i.version=nP++)}function l(c,u){let h=0,f=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){const y=c[d];if(y.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Cm(e){const t=new rP(e),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){t.setup(n)}function l(u){t.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function sP(e){let t=new WeakMap;function n(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Cm(e),t.set(r,[a])):s>=o.length?(a=new Cm(e),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:n,dispose:i}}const oP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lP=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],cP=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Rm=new he,lo=new D,Bc=new D;function uP(e,t,n){let i=new gf;const r=new mt,s=new mt,o=new Be,a=new hw,l=new fw,c={},u=n.maxTextureSize,h={[vr]:fn,[fn]:vr,[xn]:xn},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:oP,fragmentShader:aP}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new fe;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _t(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let d=this.type;this.render=function(P,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;P.type===C0&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=Ya);const b=e.getRenderTarget(),M=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),V=e.state;V.setBlending(Hi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const q=d!==this.type;q&&C.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(J=>J.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,J=P.length;j<J;j++){const W=P[j],k=W.shadow;if(k===void 0){Yt("WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const H=k.getFrameExtents();if(r.multiply(H),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,k.mapSize.y=s.y)),k.map===null||q===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===mo){if(W.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new vi(r.x,r.y,{format:Fs,type:Yi,minFilter:un,magFilter:un,generateMipmaps:!1}),k.map.texture.name=W.name+".shadowMap",k.map.depthTexture=new Vo(r.x,r.y,pi),k.map.depthTexture.name=W.name+".shadowMapDepth",k.map.depthTexture.format=Ji,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=nn,k.map.depthTexture.magFilter=nn}else{W.isPointLight?(k.map=new e_(r.x),k.map.depthTexture=new CM(r.x,bi)):(k.map=new vi(r.x,r.y),k.map.depthTexture=new Vo(r.x,r.y,bi)),k.map.depthTexture.name=W.name+".shadowMap",k.map.depthTexture.format=Ji;const pt=e.state.buffers.depth.getReversed();this.type===Ya?(k.map.depthTexture.compareFunction=pt?ff:hf,k.map.depthTexture.minFilter=un,k.map.depthTexture.magFilter=un):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=nn,k.map.depthTexture.magFilter=nn)}k.camera.updateProjectionMatrix()}const ct=k.map.isWebGLCubeRenderTarget?6:1;for(let pt=0;pt<ct;pt++){if(k.map.isWebGLCubeRenderTarget)e.setRenderTarget(k.map,pt),e.clear();else{pt===0&&(e.setRenderTarget(k.map),e.clear());const ft=k.getViewport(pt);o.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),V.viewport(o)}if(W.isPointLight){const ft=k.camera,kt=k.matrix,Lt=W.distance||ft.far;Lt!==ft.far&&(ft.far=Lt,ft.updateProjectionMatrix()),lo.setFromMatrixPosition(W.matrixWorld),ft.position.copy(lo),Bc.copy(ft.position),Bc.add(lP[pt]),ft.up.copy(cP[pt]),ft.lookAt(Bc),ft.updateMatrixWorld(),kt.makeTranslation(-lo.x,-lo.y,-lo.z),Rm.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Rm,ft.coordinateSystem,ft.reversedDepth)}else k.updateMatrices(W);i=k.getFrustum(),x(C,R,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===mo&&S(k,R),k.needsUpdate=!1}d=this.type,m.needsUpdate=!1,e.setRenderTarget(b,M,L)};function S(P,C){const R=t.update(v);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new vi(r.x,r.y,{format:Fs,type:Yi})),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,e.setRenderTarget(P.mapPass),e.clear(),e.renderBufferDirect(C,null,R,f,v,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,e.setRenderTarget(P.map),e.clear(),e.renderBufferDirect(C,null,R,p,v,null)}function y(P,C,R,b){let M=null;const L=R.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)M=L;else if(M=R.isPointLight===!0?l:a,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const V=M.uuid,q=C.uuid;let j=c[V];j===void 0&&(j={},c[V]=j);let J=j[q];J===void 0&&(J=M.clone(),j[q]=J,C.addEventListener("dispose",A)),M=J}if(M.visible=C.visible,M.wireframe=C.wireframe,b===mo?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=e.properties.get(M);V.light=R}return M}function x(P,C,R,b,M){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===mo)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,P.matrixWorld);const q=t.update(P),j=P.material;if(Array.isArray(j)){const J=q.groups;for(let W=0,k=J.length;W<k;W++){const H=J[W],ct=j[H.materialIndex];if(ct&&ct.visible){const pt=y(P,ct,b,M);P.onBeforeShadow(e,P,C,R,q,pt,H),e.renderBufferDirect(R,null,q,pt,P,H),P.onAfterShadow(e,P,C,R,q,pt,H)}}}else if(j.visible){const J=y(P,j,b,M);P.onBeforeShadow(e,P,C,R,q,J,null),e.renderBufferDirect(R,null,q,J,P,null),P.onAfterShadow(e,P,C,R,q,J,null)}}const V=P.children;for(let q=0,j=V.length;q<j;q++)x(V[q],C,R,b,M)}function A(P){P.target.removeEventListener("dispose",A);for(const R in c){const b=c[R],M=P.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const hP={[lu]:cu,[uu]:du,[hu]:pu,[Us]:fu,[cu]:lu,[du]:uu,[pu]:hu,[fu]:Us};function fP(e,t){function n(){let B=!1;const Dt=new Be;let gt=null;const Nt=new Be(0,0,0,0);return{setMask:function(dt){gt!==dt&&!B&&(e.colorMask(dt,dt,dt,dt),gt=dt)},setLocked:function(dt){B=dt},setClear:function(dt,lt,bt,Qt,Ce){Ce===!0&&(dt*=Qt,lt*=Qt,bt*=Qt),Dt.set(dt,lt,bt,Qt),Nt.equals(Dt)===!1&&(e.clearColor(dt,lt,bt,Qt),Nt.copy(Dt))},reset:function(){B=!1,gt=null,Nt.set(-1,0,0,0)}}}function i(){let B=!1,Dt=!1,gt=null,Nt=null,dt=null;return{setReversed:function(lt){if(Dt!==lt){const bt=t.get("EXT_clip_control");lt?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),Dt=lt;const Qt=dt;dt=null,this.setClear(Qt)}},getReversed:function(){return Dt},setTest:function(lt){lt?ot(e.DEPTH_TEST):Pt(e.DEPTH_TEST)},setMask:function(lt){gt!==lt&&!B&&(e.depthMask(lt),gt=lt)},setFunc:function(lt){if(Dt&&(lt=hP[lt]),Nt!==lt){switch(lt){case lu:e.depthFunc(e.NEVER);break;case cu:e.depthFunc(e.ALWAYS);break;case uu:e.depthFunc(e.LESS);break;case Us:e.depthFunc(e.LEQUAL);break;case hu:e.depthFunc(e.EQUAL);break;case fu:e.depthFunc(e.GEQUAL);break;case du:e.depthFunc(e.GREATER);break;case pu:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Nt=lt}},setLocked:function(lt){B=lt},setClear:function(lt){dt!==lt&&(Dt&&(lt=1-lt),e.clearDepth(lt),dt=lt)},reset:function(){B=!1,gt=null,Nt=null,dt=null,Dt=!1}}}function r(){let B=!1,Dt=null,gt=null,Nt=null,dt=null,lt=null,bt=null,Qt=null,Ce=null;return{setTest:function(ye){B||(ye?ot(e.STENCIL_TEST):Pt(e.STENCIL_TEST))},setMask:function(ye){Dt!==ye&&!B&&(e.stencilMask(ye),Dt=ye)},setFunc:function(ye,si,Ei){(gt!==ye||Nt!==si||dt!==Ei)&&(e.stencilFunc(ye,si,Ei),gt=ye,Nt=si,dt=Ei)},setOp:function(ye,si,Ei){(lt!==ye||bt!==si||Qt!==Ei)&&(e.stencilOp(ye,si,Ei),lt=ye,bt=si,Qt=Ei)},setLocked:function(ye){B=ye},setClear:function(ye){Ce!==ye&&(e.clearStencil(ye),Ce=ye)},reset:function(){B=!1,Dt=null,gt=null,Nt=null,dt=null,lt=null,bt=null,Qt=null,Ce=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,S=null,y=null,x=null,A=null,P=null,C=new $t(0,0,0),R=0,b=!1,M=null,L=null,V=null,q=null,j=null;const J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,k=0;const H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=k>=1):H.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=k>=2);let ct=null,pt={};const ft=e.getParameter(e.SCISSOR_BOX),kt=e.getParameter(e.VIEWPORT),Lt=new Be().fromArray(ft),Zt=new Be().fromArray(kt);function ce(B,Dt,gt,Nt){const dt=new Uint8Array(4),lt=e.createTexture();e.bindTexture(B,lt),e.texParameteri(B,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(B,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let bt=0;bt<gt;bt++)B===e.TEXTURE_3D||B===e.TEXTURE_2D_ARRAY?e.texImage3D(Dt,0,e.RGBA,1,1,Nt,0,e.RGBA,e.UNSIGNED_BYTE,dt):e.texImage2D(Dt+bt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,dt);return lt}const st={};st[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),st[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),st[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(e.DEPTH_TEST),o.setFunc(Us),F(!1),X(mp),ot(e.CULL_FACE),U(Hi);function ot(B){u[B]!==!0&&(e.enable(B),u[B]=!0)}function Pt(B){u[B]!==!1&&(e.disable(B),u[B]=!1)}function Vt(B,Dt){return h[B]!==Dt?(e.bindFramebuffer(B,Dt),h[B]=Dt,B===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=Dt),B===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Mt(B,Dt){let gt=p,Nt=!1;if(B){gt=f.get(Dt),gt===void 0&&(gt=[],f.set(Dt,gt));const dt=B.textures;if(gt.length!==dt.length||gt[0]!==e.COLOR_ATTACHMENT0){for(let lt=0,bt=dt.length;lt<bt;lt++)gt[lt]=e.COLOR_ATTACHMENT0+lt;gt.length=dt.length,Nt=!0}}else gt[0]!==e.BACK&&(gt[0]=e.BACK,Nt=!0);Nt&&e.drawBuffers(gt)}function oe(B){return g!==B?(e.useProgram(B),g=B,!0):!1}const I={[Ur]:e.FUNC_ADD,[ub]:e.FUNC_SUBTRACT,[hb]:e.FUNC_REVERSE_SUBTRACT};I[fb]=e.MIN,I[db]=e.MAX;const O={[pb]:e.ZERO,[mb]:e.ONE,[gb]:e.SRC_COLOR,[ou]:e.SRC_ALPHA,[bb]:e.SRC_ALPHA_SATURATE,[yb]:e.DST_COLOR,[vb]:e.DST_ALPHA,[_b]:e.ONE_MINUS_SRC_COLOR,[au]:e.ONE_MINUS_SRC_ALPHA,[Sb]:e.ONE_MINUS_DST_COLOR,[xb]:e.ONE_MINUS_DST_ALPHA,[Mb]:e.CONSTANT_COLOR,[wb]:e.ONE_MINUS_CONSTANT_COLOR,[Eb]:e.CONSTANT_ALPHA,[Tb]:e.ONE_MINUS_CONSTANT_ALPHA};function U(B,Dt,gt,Nt,dt,lt,bt,Qt,Ce,ye){if(B===Hi){v===!0&&(Pt(e.BLEND),v=!1);return}if(v===!1&&(ot(e.BLEND),v=!0),B!==cb){if(B!==m||ye!==b){if((d!==Ur||x!==Ur)&&(e.blendEquation(e.FUNC_ADD),d=Ur,x=Ur),ye)switch(B){case Ds:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case gp:e.blendFunc(e.ONE,e.ONE);break;case _p:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case vp:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:de("WebGLState: Invalid blending: ",B);break}else switch(B){case Ds:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case gp:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case _p:de("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vp:de("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:de("WebGLState: Invalid blending: ",B);break}S=null,y=null,A=null,P=null,C.set(0,0,0),R=0,m=B,b=ye}return}dt=dt||Dt,lt=lt||gt,bt=bt||Nt,(Dt!==d||dt!==x)&&(e.blendEquationSeparate(I[Dt],I[dt]),d=Dt,x=dt),(gt!==S||Nt!==y||lt!==A||bt!==P)&&(e.blendFuncSeparate(O[gt],O[Nt],O[lt],O[bt]),S=gt,y=Nt,A=lt,P=bt),(Qt.equals(C)===!1||Ce!==R)&&(e.blendColor(Qt.r,Qt.g,Qt.b,Ce),C.copy(Qt),R=Ce),m=B,b=!1}function z(B,Dt){B.side===xn?Pt(e.CULL_FACE):ot(e.CULL_FACE);let gt=B.side===fn;Dt&&(gt=!gt),F(gt),B.blending===Ds&&B.transparent===!1?U(Hi):U(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const Nt=B.stencilWrite;a.setTest(Nt),Nt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),rt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ot(e.SAMPLE_ALPHA_TO_COVERAGE):Pt(e.SAMPLE_ALPHA_TO_COVERAGE)}function F(B){M!==B&&(B?e.frontFace(e.CW):e.frontFace(e.CCW),M=B)}function X(B){B!==ab?(ot(e.CULL_FACE),B!==L&&(B===mp?e.cullFace(e.BACK):B===lb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Pt(e.CULL_FACE),L=B}function E(B){B!==V&&(W&&e.lineWidth(B),V=B)}function rt(B,Dt,gt){B?(ot(e.POLYGON_OFFSET_FILL),(q!==Dt||j!==gt)&&(e.polygonOffset(Dt,gt),q=Dt,j=gt)):Pt(e.POLYGON_OFFSET_FILL)}function K(B){B?ot(e.SCISSOR_TEST):Pt(e.SCISSOR_TEST)}function Q(B){B===void 0&&(B=e.TEXTURE0+J-1),ct!==B&&(e.activeTexture(B),ct=B)}function it(B,Dt,gt){gt===void 0&&(ct===null?gt=e.TEXTURE0+J-1:gt=ct);let Nt=pt[gt];Nt===void 0&&(Nt={type:void 0,texture:void 0},pt[gt]=Nt),(Nt.type!==B||Nt.texture!==Dt)&&(ct!==gt&&(e.activeTexture(gt),ct=gt),e.bindTexture(B,Dt||st[B]),Nt.type=B,Nt.texture=Dt)}function w(){const B=pt[ct];B!==void 0&&B.type!==void 0&&(e.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function _(){try{e.compressedTexImage2D(...arguments)}catch(B){de("WebGLState:",B)}}function N(){try{e.compressedTexImage3D(...arguments)}catch(B){de("WebGLState:",B)}}function Y(){try{e.texSubImage2D(...arguments)}catch(B){de("WebGLState:",B)}}function nt(){try{e.texSubImage3D(...arguments)}catch(B){de("WebGLState:",B)}}function $(){try{e.compressedTexSubImage2D(...arguments)}catch(B){de("WebGLState:",B)}}function wt(){try{e.compressedTexSubImage3D(...arguments)}catch(B){de("WebGLState:",B)}}function ht(){try{e.texStorage2D(...arguments)}catch(B){de("WebGLState:",B)}}function Ct(){try{e.texStorage3D(...arguments)}catch(B){de("WebGLState:",B)}}function zt(){try{e.texImage2D(...arguments)}catch(B){de("WebGLState:",B)}}function ut(){try{e.texImage3D(...arguments)}catch(B){de("WebGLState:",B)}}function yt(B){Lt.equals(B)===!1&&(e.scissor(B.x,B.y,B.z,B.w),Lt.copy(B))}function Et(B){Zt.equals(B)===!1&&(e.viewport(B.x,B.y,B.z,B.w),Zt.copy(B))}function It(B,Dt){let gt=c.get(Dt);gt===void 0&&(gt=new WeakMap,c.set(Dt,gt));let Nt=gt.get(B);Nt===void 0&&(Nt=e.getUniformBlockIndex(Dt,B.name),gt.set(B,Nt))}function xt(B,Dt){const Nt=c.get(Dt).get(B);l.get(Dt)!==Nt&&(e.uniformBlockBinding(Dt,Nt,B.__bindingPointIndex),l.set(Dt,Nt))}function ee(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},ct=null,pt={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,S=null,y=null,x=null,A=null,P=null,C=new $t(0,0,0),R=0,b=!1,M=null,L=null,V=null,q=null,j=null,Lt.set(0,0,e.canvas.width,e.canvas.height),Zt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ot,disable:Pt,bindFramebuffer:Vt,drawBuffers:Mt,useProgram:oe,setBlending:U,setMaterial:z,setFlipSided:F,setCullFace:X,setLineWidth:E,setPolygonOffset:rt,setScissorTest:K,activeTexture:Q,bindTexture:it,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:zt,texImage3D:ut,updateUBOMapping:It,uniformBlockBinding:xt,texStorage2D:ht,texStorage3D:Ct,texSubImage2D:Y,texSubImage3D:nt,compressedTexSubImage2D:$,compressedTexSubImage3D:wt,scissor:yt,viewport:Et,reset:ee}}function dP(e,t,n,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return p?new OffscreenCanvas(w,_):fl("canvas")}function v(w,_,N){let Y=1;const nt=it(w);if((nt.width>N||nt.height>N)&&(Y=N/Math.max(nt.width,nt.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(Y*nt.width),wt=Math.floor(Y*nt.height);h===void 0&&(h=g($,wt));const ht=_?g($,wt):h;return ht.width=$,ht.height=wt,ht.getContext("2d").drawImage(w,0,0,$,wt),Yt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+$+"x"+wt+")."),ht}else return"data"in w&&Yt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){e.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(w,_,N,Y,nt=!1){if(w!==null){if(e[w]!==void 0)return e[w];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=_;if(_===e.RED&&(N===e.FLOAT&&($=e.R32F),N===e.HALF_FLOAT&&($=e.R16F),N===e.UNSIGNED_BYTE&&($=e.R8)),_===e.RED_INTEGER&&(N===e.UNSIGNED_BYTE&&($=e.R8UI),N===e.UNSIGNED_SHORT&&($=e.R16UI),N===e.UNSIGNED_INT&&($=e.R32UI),N===e.BYTE&&($=e.R8I),N===e.SHORT&&($=e.R16I),N===e.INT&&($=e.R32I)),_===e.RG&&(N===e.FLOAT&&($=e.RG32F),N===e.HALF_FLOAT&&($=e.RG16F),N===e.UNSIGNED_BYTE&&($=e.RG8)),_===e.RG_INTEGER&&(N===e.UNSIGNED_BYTE&&($=e.RG8UI),N===e.UNSIGNED_SHORT&&($=e.RG16UI),N===e.UNSIGNED_INT&&($=e.RG32UI),N===e.BYTE&&($=e.RG8I),N===e.SHORT&&($=e.RG16I),N===e.INT&&($=e.RG32I)),_===e.RGB_INTEGER&&(N===e.UNSIGNED_BYTE&&($=e.RGB8UI),N===e.UNSIGNED_SHORT&&($=e.RGB16UI),N===e.UNSIGNED_INT&&($=e.RGB32UI),N===e.BYTE&&($=e.RGB8I),N===e.SHORT&&($=e.RGB16I),N===e.INT&&($=e.RGB32I)),_===e.RGBA_INTEGER&&(N===e.UNSIGNED_BYTE&&($=e.RGBA8UI),N===e.UNSIGNED_SHORT&&($=e.RGBA16UI),N===e.UNSIGNED_INT&&($=e.RGBA32UI),N===e.BYTE&&($=e.RGBA8I),N===e.SHORT&&($=e.RGBA16I),N===e.INT&&($=e.RGBA32I)),_===e.RGB&&(N===e.UNSIGNED_INT_5_9_9_9_REV&&($=e.RGB9_E5),N===e.UNSIGNED_INT_10F_11F_11F_REV&&($=e.R11F_G11F_B10F)),_===e.RGBA){const wt=nt?ul:me.getTransfer(Y);N===e.FLOAT&&($=e.RGBA32F),N===e.HALF_FLOAT&&($=e.RGBA16F),N===e.UNSIGNED_BYTE&&($=wt===be?e.SRGB8_ALPHA8:e.RGBA8),N===e.UNSIGNED_SHORT_4_4_4_4&&($=e.RGBA4),N===e.UNSIGNED_SHORT_5_5_5_1&&($=e.RGB5_A1)}return($===e.R16F||$===e.R32F||$===e.RG16F||$===e.RG32F||$===e.RGBA16F||$===e.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(w,_){let N;return w?_===null||_===bi||_===Bo?N=e.DEPTH24_STENCIL8:_===pi?N=e.DEPTH32F_STENCIL8:_===ko&&(N=e.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===bi||_===Bo?N=e.DEPTH_COMPONENT24:_===pi?N=e.DEPTH_COMPONENT32F:_===ko&&(N=e.DEPTH_COMPONENT16),N}function A(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==nn&&w.minFilter!==un?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function P(w){const _=w.target;_.removeEventListener("dispose",P),R(_),_.isVideoTexture&&u.delete(_)}function C(w){const _=w.target;_.removeEventListener("dispose",C),M(_)}function R(w){const _=i.get(w);if(_.__webglInit===void 0)return;const N=w.source,Y=f.get(N);if(Y){const nt=Y[_.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&b(w),Object.keys(Y).length===0&&f.delete(N)}i.remove(w)}function b(w){const _=i.get(w);e.deleteTexture(_.__webglTexture);const N=w.source,Y=f.get(N);delete Y[_.__cacheKey],o.memory.textures--}function M(w){const _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let nt=0;nt<_.__webglFramebuffer[Y].length;nt++)e.deleteFramebuffer(_.__webglFramebuffer[Y][nt]);else e.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)e.deleteFramebuffer(_.__webglFramebuffer[Y]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=w.textures;for(let Y=0,nt=N.length;Y<nt;Y++){const $=i.get(N[Y]);$.__webglTexture&&(e.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(N[Y])}i.remove(w)}let L=0;function V(){L=0}function q(){const w=L;return w>=r.maxTextures&&Yt("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),L+=1,w}function j(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function J(w,_){const N=i.get(w);if(w.isVideoTexture&&K(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){const Y=w.image;if(Y===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{st(N,w,_);return}}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,N.__webglTexture,e.TEXTURE0+_)}function W(w,_){const N=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){st(N,w,_);return}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,N.__webglTexture,e.TEXTURE0+_)}function k(w,_){const N=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){st(N,w,_);return}n.bindTexture(e.TEXTURE_3D,N.__webglTexture,e.TEXTURE0+_)}function H(w,_){const N=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&N.__version!==w.version){ot(N,w,_);return}n.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+_)}const ct={[_u]:e.REPEAT,[Bi]:e.CLAMP_TO_EDGE,[vu]:e.MIRRORED_REPEAT},pt={[nn]:e.NEAREST,[Cb]:e.NEAREST_MIPMAP_NEAREST,[ca]:e.NEAREST_MIPMAP_LINEAR,[un]:e.LINEAR,[sc]:e.LINEAR_MIPMAP_NEAREST,[Fr]:e.LINEAR_MIPMAP_LINEAR},ft={[Ib]:e.NEVER,[Fb]:e.ALWAYS,[Lb]:e.LESS,[hf]:e.LEQUAL,[Nb]:e.EQUAL,[ff]:e.GEQUAL,[Ub]:e.GREATER,[Ob]:e.NOTEQUAL};function kt(w,_){if(_.type===pi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===un||_.magFilter===sc||_.magFilter===ca||_.magFilter===Fr||_.minFilter===un||_.minFilter===sc||_.minFilter===ca||_.minFilter===Fr)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,ct[_.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,ct[_.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,ct[_.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,pt[_.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,pt[_.minFilter]),_.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,ft[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===nn||_.minFilter!==ca&&_.minFilter!==Fr||_.type===pi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Lt(w,_){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",P));const Y=_.source;let nt=f.get(Y);nt===void 0&&(nt={},f.set(Y,nt));const $=j(_);if($!==w.__cacheKey){nt[$]===void 0&&(nt[$]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,N=!0),nt[$].usedTimes++;const wt=nt[w.__cacheKey];wt!==void 0&&(nt[w.__cacheKey].usedTimes--,wt.usedTimes===0&&b(_)),w.__cacheKey=$,w.__webglTexture=nt[$].texture}return N}function Zt(w,_,N){return Math.floor(Math.floor(w/N)/_)}function ce(w,_,N,Y){const $=w.updateRanges;if($.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,N,Y,_.data);else{$.sort((ut,yt)=>ut.start-yt.start);let wt=0;for(let ut=1;ut<$.length;ut++){const yt=$[wt],Et=$[ut],It=yt.start+yt.count,xt=Zt(Et.start,_.width,4),ee=Zt(yt.start,_.width,4);Et.start<=It+1&&xt===ee&&Zt(Et.start+Et.count-1,_.width,4)===xt?yt.count=Math.max(yt.count,Et.start+Et.count-yt.start):(++wt,$[wt]=Et)}$.length=wt+1;const ht=e.getParameter(e.UNPACK_ROW_LENGTH),Ct=e.getParameter(e.UNPACK_SKIP_PIXELS),zt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let ut=0,yt=$.length;ut<yt;ut++){const Et=$[ut],It=Math.floor(Et.start/4),xt=Math.ceil(Et.count/4),ee=It%_.width,B=Math.floor(It/_.width),Dt=xt,gt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(e.UNPACK_SKIP_ROWS,B),n.texSubImage2D(e.TEXTURE_2D,0,ee,B,Dt,gt,N,Y,_.data)}w.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ht),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ct),e.pixelStorei(e.UNPACK_SKIP_ROWS,zt)}}function st(w,_,N){let Y=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=e.TEXTURE_3D);const nt=Lt(w,_),$=_.source;n.bindTexture(Y,w.__webglTexture,e.TEXTURE0+N);const wt=i.get($);if($.version!==wt.__version||nt===!0){n.activeTexture(e.TEXTURE0+N);const ht=me.getPrimaries(me.workingColorSpace),Ct=_.colorSpace===ur?null:me.getPrimaries(_.colorSpace),zt=_.colorSpace===ur||ht===Ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let ut=v(_.image,!1,r.maxTextureSize);ut=Q(_,ut);const yt=s.convert(_.format,_.colorSpace),Et=s.convert(_.type);let It=y(_.internalFormat,yt,Et,_.colorSpace,_.isVideoTexture);kt(Y,_);let xt;const ee=_.mipmaps,B=_.isVideoTexture!==!0,Dt=wt.__version===void 0||nt===!0,gt=$.dataReady,Nt=A(_,ut);if(_.isDepthTexture)It=x(_.format===kr,_.type),Dt&&(B?n.texStorage2D(e.TEXTURE_2D,1,It,ut.width,ut.height):n.texImage2D(e.TEXTURE_2D,0,It,ut.width,ut.height,0,yt,Et,null));else if(_.isDataTexture)if(ee.length>0){B&&Dt&&n.texStorage2D(e.TEXTURE_2D,Nt,It,ee[0].width,ee[0].height);for(let dt=0,lt=ee.length;dt<lt;dt++)xt=ee[dt],B?gt&&n.texSubImage2D(e.TEXTURE_2D,dt,0,0,xt.width,xt.height,yt,Et,xt.data):n.texImage2D(e.TEXTURE_2D,dt,It,xt.width,xt.height,0,yt,Et,xt.data);_.generateMipmaps=!1}else B?(Dt&&n.texStorage2D(e.TEXTURE_2D,Nt,It,ut.width,ut.height),gt&&ce(_,ut,yt,Et)):n.texImage2D(e.TEXTURE_2D,0,It,ut.width,ut.height,0,yt,Et,ut.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){B&&Dt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Nt,It,ee[0].width,ee[0].height,ut.depth);for(let dt=0,lt=ee.length;dt<lt;dt++)if(xt=ee[dt],_.format!==Kn)if(yt!==null)if(B){if(gt)if(_.layerUpdates.size>0){const bt=am(xt.width,xt.height,_.format,_.type);for(const Qt of _.layerUpdates){const Ce=xt.data.subarray(Qt*bt/xt.data.BYTES_PER_ELEMENT,(Qt+1)*bt/xt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,dt,0,0,Qt,xt.width,xt.height,1,yt,Ce)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,dt,0,0,0,xt.width,xt.height,ut.depth,yt,xt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,dt,It,xt.width,xt.height,ut.depth,0,xt.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?gt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,dt,0,0,0,xt.width,xt.height,ut.depth,yt,Et,xt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,dt,It,xt.width,xt.height,ut.depth,0,yt,Et,xt.data)}else{B&&Dt&&n.texStorage2D(e.TEXTURE_2D,Nt,It,ee[0].width,ee[0].height);for(let dt=0,lt=ee.length;dt<lt;dt++)xt=ee[dt],_.format!==Kn?yt!==null?B?gt&&n.compressedTexSubImage2D(e.TEXTURE_2D,dt,0,0,xt.width,xt.height,yt,xt.data):n.compressedTexImage2D(e.TEXTURE_2D,dt,It,xt.width,xt.height,0,xt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?gt&&n.texSubImage2D(e.TEXTURE_2D,dt,0,0,xt.width,xt.height,yt,Et,xt.data):n.texImage2D(e.TEXTURE_2D,dt,It,xt.width,xt.height,0,yt,Et,xt.data)}else if(_.isDataArrayTexture)if(B){if(Dt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Nt,It,ut.width,ut.height,ut.depth),gt)if(_.layerUpdates.size>0){const dt=am(ut.width,ut.height,_.format,_.type);for(const lt of _.layerUpdates){const bt=ut.data.subarray(lt*dt/ut.data.BYTES_PER_ELEMENT,(lt+1)*dt/ut.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,lt,ut.width,ut.height,1,yt,Et,bt)}_.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,yt,Et,ut.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,It,ut.width,ut.height,ut.depth,0,yt,Et,ut.data);else if(_.isData3DTexture)B?(Dt&&n.texStorage3D(e.TEXTURE_3D,Nt,It,ut.width,ut.height,ut.depth),gt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,yt,Et,ut.data)):n.texImage3D(e.TEXTURE_3D,0,It,ut.width,ut.height,ut.depth,0,yt,Et,ut.data);else if(_.isFramebufferTexture){if(Dt)if(B)n.texStorage2D(e.TEXTURE_2D,Nt,It,ut.width,ut.height);else{let dt=ut.width,lt=ut.height;for(let bt=0;bt<Nt;bt++)n.texImage2D(e.TEXTURE_2D,bt,It,dt,lt,0,yt,Et,null),dt>>=1,lt>>=1}}else if(ee.length>0){if(B&&Dt){const dt=it(ee[0]);n.texStorage2D(e.TEXTURE_2D,Nt,It,dt.width,dt.height)}for(let dt=0,lt=ee.length;dt<lt;dt++)xt=ee[dt],B?gt&&n.texSubImage2D(e.TEXTURE_2D,dt,0,0,yt,Et,xt):n.texImage2D(e.TEXTURE_2D,dt,It,yt,Et,xt);_.generateMipmaps=!1}else if(B){if(Dt){const dt=it(ut);n.texStorage2D(e.TEXTURE_2D,Nt,It,dt.width,dt.height)}gt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,yt,Et,ut)}else n.texImage2D(e.TEXTURE_2D,0,It,yt,Et,ut);m(_)&&d(Y),wt.__version=$.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ot(w,_,N){if(_.image.length!==6)return;const Y=Lt(w,_),nt=_.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+N);const $=i.get(nt);if(nt.version!==$.__version||Y===!0){n.activeTexture(e.TEXTURE0+N);const wt=me.getPrimaries(me.workingColorSpace),ht=_.colorSpace===ur?null:me.getPrimaries(_.colorSpace),Ct=_.colorSpace===ur||wt===ht?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const zt=_.isCompressedTexture||_.image[0].isCompressedTexture,ut=_.image[0]&&_.image[0].isDataTexture,yt=[];for(let lt=0;lt<6;lt++)!zt&&!ut?yt[lt]=v(_.image[lt],!0,r.maxCubemapSize):yt[lt]=ut?_.image[lt].image:_.image[lt],yt[lt]=Q(_,yt[lt]);const Et=yt[0],It=s.convert(_.format,_.colorSpace),xt=s.convert(_.type),ee=y(_.internalFormat,It,xt,_.colorSpace),B=_.isVideoTexture!==!0,Dt=$.__version===void 0||Y===!0,gt=nt.dataReady;let Nt=A(_,Et);kt(e.TEXTURE_CUBE_MAP,_);let dt;if(zt){B&&Dt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Nt,ee,Et.width,Et.height);for(let lt=0;lt<6;lt++){dt=yt[lt].mipmaps;for(let bt=0;bt<dt.length;bt++){const Qt=dt[bt];_.format!==Kn?It!==null?B?gt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,0,0,Qt.width,Qt.height,It,Qt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,ee,Qt.width,Qt.height,0,Qt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?gt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,0,0,Qt.width,Qt.height,It,xt,Qt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,ee,Qt.width,Qt.height,0,It,xt,Qt.data)}}}else{if(dt=_.mipmaps,B&&Dt){dt.length>0&&Nt++;const lt=it(yt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Nt,ee,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ut){B?gt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,yt[lt].width,yt[lt].height,It,xt,yt[lt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ee,yt[lt].width,yt[lt].height,0,It,xt,yt[lt].data);for(let bt=0;bt<dt.length;bt++){const Ce=dt[bt].image[lt].image;B?gt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,0,0,Ce.width,Ce.height,It,xt,Ce.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,ee,Ce.width,Ce.height,0,It,xt,Ce.data)}}else{B?gt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,It,xt,yt[lt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ee,It,xt,yt[lt]);for(let bt=0;bt<dt.length;bt++){const Qt=dt[bt];B?gt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,0,0,It,xt,Qt.image[lt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,ee,It,xt,Qt.image[lt])}}}m(_)&&d(e.TEXTURE_CUBE_MAP),$.__version=nt.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Pt(w,_,N,Y,nt,$){const wt=s.convert(N.format,N.colorSpace),ht=s.convert(N.type),Ct=y(N.internalFormat,wt,ht,N.colorSpace),zt=i.get(_),ut=i.get(N);if(ut.__renderTarget=_,!zt.__hasExternalTextures){const yt=Math.max(1,_.width>>$),Et=Math.max(1,_.height>>$);nt===e.TEXTURE_3D||nt===e.TEXTURE_2D_ARRAY?n.texImage3D(nt,$,Ct,yt,Et,_.depth,0,wt,ht,null):n.texImage2D(nt,$,Ct,yt,Et,0,wt,ht,null)}n.bindFramebuffer(e.FRAMEBUFFER,w),rt(_)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,nt,ut.__webglTexture,0,E(_)):(nt===e.TEXTURE_2D||nt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,nt,ut.__webglTexture,$),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Vt(w,_,N){if(e.bindRenderbuffer(e.RENDERBUFFER,w),_.depthBuffer){const Y=_.depthTexture,nt=Y&&Y.isDepthTexture?Y.type:null,$=x(_.stencilBuffer,nt),wt=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;rt(_)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,E(_),$,_.width,_.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,E(_),$,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,$,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,wt,e.RENDERBUFFER,w)}else{const Y=_.textures;for(let nt=0;nt<Y.length;nt++){const $=Y[nt],wt=s.convert($.format,$.colorSpace),ht=s.convert($.type),Ct=y($.internalFormat,wt,ht,$.colorSpace);rt(_)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,E(_),Ct,_.width,_.height):N?e.renderbufferStorageMultisample(e.RENDERBUFFER,E(_),Ct,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,Ct,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Mt(w,_,N){const Y=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=i.get(_.depthTexture);if(nt.__renderTarget=_,(!nt.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),nt.__webglTexture===void 0){nt.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,nt.__webglTexture),kt(e.TEXTURE_CUBE_MAP,_.depthTexture);const zt=s.convert(_.depthTexture.format),ut=s.convert(_.depthTexture.type);let yt;_.depthTexture.format===Ji?yt=e.DEPTH_COMPONENT24:_.depthTexture.format===kr&&(yt=e.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,yt,_.width,_.height,0,zt,ut,null)}}else J(_.depthTexture,0);const $=nt.__webglTexture,wt=E(_),ht=Y?e.TEXTURE_CUBE_MAP_POSITIVE_X+N:e.TEXTURE_2D,Ct=_.depthTexture.format===kr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ji)rt(_)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Ct,ht,$,0,wt):e.framebufferTexture2D(e.FRAMEBUFFER,Ct,ht,$,0);else if(_.depthTexture.format===kr)rt(_)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Ct,ht,$,0,wt):e.framebufferTexture2D(e.FRAMEBUFFER,Ct,ht,$,0);else throw new Error("Unknown depthTexture format")}function oe(w){const _=i.get(w),N=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const nt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",nt)};Y.addEventListener("dispose",nt),_.__depthDisposeCallback=nt}_.__boundDepthTexture=Y}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let Y=0;Y<6;Y++)Mt(_.__webglFramebuffer[Y],w,Y);else{const Y=w.texture.mipmaps;Y&&Y.length>0?Mt(_.__webglFramebuffer[0],w,0):Mt(_.__webglFramebuffer,w,0)}else if(N){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=e.createRenderbuffer(),Vt(_.__webglDepthbuffer[Y],w,!1);else{const nt=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,$),e.framebufferRenderbuffer(e.FRAMEBUFFER,nt,e.RENDERBUFFER,$)}}else{const Y=w.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Vt(_.__webglDepthbuffer,w,!1);else{const nt=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,$),e.framebufferRenderbuffer(e.FRAMEBUFFER,nt,e.RENDERBUFFER,$)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function I(w,_,N){const Y=i.get(w);_!==void 0&&Pt(Y.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),N!==void 0&&oe(w)}function O(w){const _=w.texture,N=i.get(w),Y=i.get(_);w.addEventListener("dispose",C);const nt=w.textures,$=w.isWebGLCubeRenderTarget===!0,wt=nt.length>1;if(wt||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=_.version,o.memory.textures++),$){N.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[ht]=[];for(let Ct=0;Ct<_.mipmaps.length;Ct++)N.__webglFramebuffer[ht][Ct]=e.createFramebuffer()}else N.__webglFramebuffer[ht]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let ht=0;ht<_.mipmaps.length;ht++)N.__webglFramebuffer[ht]=e.createFramebuffer()}else N.__webglFramebuffer=e.createFramebuffer();if(wt)for(let ht=0,Ct=nt.length;ht<Ct;ht++){const zt=i.get(nt[ht]);zt.__webglTexture===void 0&&(zt.__webglTexture=e.createTexture(),o.memory.textures++)}if(w.samples>0&&rt(w)===!1){N.__webglMultisampledFramebuffer=e.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ht=0;ht<nt.length;ht++){const Ct=nt[ht];N.__webglColorRenderbuffer[ht]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,N.__webglColorRenderbuffer[ht]);const zt=s.convert(Ct.format,Ct.colorSpace),ut=s.convert(Ct.type),yt=y(Ct.internalFormat,zt,ut,Ct.colorSpace,w.isXRRenderTarget===!0),Et=E(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,Et,yt,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,N.__webglColorRenderbuffer[ht])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=e.createRenderbuffer(),Vt(N.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if($){n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),kt(e.TEXTURE_CUBE_MAP,_);for(let ht=0;ht<6;ht++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ct=0;Ct<_.mipmaps.length;Ct++)Pt(N.__webglFramebuffer[ht][Ct],w,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct);else Pt(N.__webglFramebuffer[ht],w,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(_)&&d(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(wt){for(let ht=0,Ct=nt.length;ht<Ct;ht++){const zt=nt[ht],ut=i.get(zt);let yt=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(yt=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(yt,ut.__webglTexture),kt(yt,zt),Pt(N.__webglFramebuffer,w,zt,e.COLOR_ATTACHMENT0+ht,yt,0),m(zt)&&d(yt)}n.unbindTexture()}else{let ht=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ht=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ht,Y.__webglTexture),kt(ht,_),_.mipmaps&&_.mipmaps.length>0)for(let Ct=0;Ct<_.mipmaps.length;Ct++)Pt(N.__webglFramebuffer[Ct],w,_,e.COLOR_ATTACHMENT0,ht,Ct);else Pt(N.__webglFramebuffer,w,_,e.COLOR_ATTACHMENT0,ht,0);m(_)&&d(ht),n.unbindTexture()}w.depthBuffer&&oe(w)}function U(w){const _=w.textures;for(let N=0,Y=_.length;N<Y;N++){const nt=_[N];if(m(nt)){const $=S(w),wt=i.get(nt).__webglTexture;n.bindTexture($,wt),d($),n.unbindTexture()}}}const z=[],F=[];function X(w){if(w.samples>0){if(rt(w)===!1){const _=w.textures,N=w.width,Y=w.height;let nt=e.COLOR_BUFFER_BIT;const $=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,wt=i.get(w),ht=_.length>1;if(ht)for(let zt=0;zt<_.length;zt++)n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+zt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+zt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const Ct=w.texture.mipmaps;Ct&&Ct.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let zt=0;zt<_.length;zt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(nt|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(nt|=e.STENCIL_BUFFER_BIT)),ht){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,wt.__webglColorRenderbuffer[zt]);const ut=i.get(_[zt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ut,0)}e.blitFramebuffer(0,0,N,Y,0,0,N,Y,nt,e.NEAREST),l===!0&&(z.length=0,F.length=0,z.push(e.COLOR_ATTACHMENT0+zt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(z.push($),F.push($),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,F)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,z))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ht)for(let zt=0;zt<_.length;zt++){n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+zt,e.RENDERBUFFER,wt.__webglColorRenderbuffer[zt]);const ut=i.get(_[zt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,wt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+zt,e.TEXTURE_2D,ut,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const _=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function E(w){return Math.min(r.maxSamples,w.samples)}function rt(w){const _=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function K(w){const _=o.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function Q(w,_){const N=w.colorSpace,Y=w.format,nt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==ks&&N!==ur&&(me.getTransfer(N)===be?(Y!==Kn||nt!==kn)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):de("WebGLTextures: Unsupported texture color space:",N)),_}function it(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=V,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=k,this.setTextureCube=H,this.rebindTextures=I,this.setupRenderTarget=O,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=rt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function pP(e,t){function n(i,r=ur){let s;const o=me.getTransfer(r);if(i===kn)return e.UNSIGNED_BYTE;if(i===of)return e.UNSIGNED_SHORT_4_4_4_4;if(i===af)return e.UNSIGNED_SHORT_5_5_5_1;if(i===z0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===V0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===k0)return e.BYTE;if(i===B0)return e.SHORT;if(i===ko)return e.UNSIGNED_SHORT;if(i===sf)return e.INT;if(i===bi)return e.UNSIGNED_INT;if(i===pi)return e.FLOAT;if(i===Yi)return e.HALF_FLOAT;if(i===H0)return e.ALPHA;if(i===G0)return e.RGB;if(i===Kn)return e.RGBA;if(i===Ji)return e.DEPTH_COMPONENT;if(i===kr)return e.DEPTH_STENCIL;if(i===W0)return e.RED;if(i===lf)return e.RED_INTEGER;if(i===Fs)return e.RG;if(i===cf)return e.RG_INTEGER;if(i===uf)return e.RGBA_INTEGER;if(i===Ja||i===$a||i===Za||i===Ka)if(o===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xu||i===yu||i===Su||i===bu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Su)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mu||i===wu||i===Eu||i===Tu||i===Au||i===Pu||i===Cu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Mu||i===wu)return o===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Eu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Tu)return s.COMPRESSED_R11_EAC;if(i===Au)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Pu)return s.COMPRESSED_RG11_EAC;if(i===Cu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ru||i===Du||i===Iu||i===Lu||i===Nu||i===Uu||i===Ou||i===Fu||i===ku||i===Bu||i===zu||i===Vu||i===Hu||i===Gu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ru)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Du)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Iu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ou)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ku)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wu||i===Xu||i===qu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Wu)return o===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yu||i===Ju||i===$u||i===Zu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Yu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ju)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$u)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const mP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _P{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new i_(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new ni({vertexShader:mP,fragmentShader:gP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _t(new Qo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vP extends Kr{constructor(t,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new _P,d={},S=n.getContextAttributes();let y=null,x=null;const A=[],P=[],C=new mt;let R=null;const b=new Pn;b.viewport=new Be;const M=new Pn;M.viewport=new Be;const L=[b,M],V=new Mw;let q=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ot=A[st];return ot===void 0&&(ot=new Tc,A[st]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(st){let ot=A[st];return ot===void 0&&(ot=new Tc,A[st]=ot),ot.getGripSpace()},this.getHand=function(st){let ot=A[st];return ot===void 0&&(ot=new Tc,A[st]=ot),ot.getHandSpace()};function J(st){const ot=P.indexOf(st.inputSource);if(ot===-1)return;const Pt=A[ot];Pt!==void 0&&(Pt.update(st.inputSource,st.frame,c||o),Pt.dispatchEvent({type:st.type,data:st.inputSource}))}function W(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",k);for(let st=0;st<A.length;st++){const ot=P[st];ot!==null&&(P[st]=null,A[st].disconnect(ot))}q=null,j=null,m.reset();for(const st in d)delete d[st];t.setRenderTarget(y),p=null,f=null,h=null,r=null,x=null,ce.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){s=st,i.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,i.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(st){if(r=st,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",W),r.addEventListener("inputsourceschange",k),S.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,Vt=null,Mt=null;S.depth&&(Mt=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Pt=S.stencil?kr:Ji,Vt=S.stencil?Bo:bi);const oe={colorFormat:n.RGBA8,depthFormat:Mt,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(oe),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new vi(f.textureWidth,f.textureHeight,{format:Kn,type:kn,depthTexture:new Vo(f.textureWidth,f.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Pt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Pt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new vi(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(st){for(let ot=0;ot<st.removed.length;ot++){const Pt=st.removed[ot],Vt=P.indexOf(Pt);Vt>=0&&(P[Vt]=null,A[Vt].disconnect(Pt))}for(let ot=0;ot<st.added.length;ot++){const Pt=st.added[ot];let Vt=P.indexOf(Pt);if(Vt===-1){for(let oe=0;oe<A.length;oe++)if(oe>=P.length){P.push(Pt),Vt=oe;break}else if(P[oe]===null){P[oe]=Pt,Vt=oe;break}if(Vt===-1)break}const Mt=A[Vt];Mt&&Mt.connect(Pt)}}const H=new D,ct=new D;function pt(st,ot,Pt){H.setFromMatrixPosition(ot.matrixWorld),ct.setFromMatrixPosition(Pt.matrixWorld);const Vt=H.distanceTo(ct),Mt=ot.projectionMatrix.elements,oe=Pt.projectionMatrix.elements,I=Mt[14]/(Mt[10]-1),O=Mt[14]/(Mt[10]+1),U=(Mt[9]+1)/Mt[5],z=(Mt[9]-1)/Mt[5],F=(Mt[8]-1)/Mt[0],X=(oe[8]+1)/oe[0],E=I*F,rt=I*X,K=Vt/(-F+X),Q=K*-F;if(ot.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Q),st.translateZ(K),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Mt[10]===-1)st.projectionMatrix.copy(ot.projectionMatrix),st.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const it=I+K,w=O+K,_=E-Q,N=rt+(Vt-Q),Y=U*O/w*it,nt=z*O/w*it;st.projectionMatrix.makePerspective(_,N,Y,nt,it,w),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function ft(st,ot){ot===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ot.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(r===null)return;let ot=st.near,Pt=st.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(Pt=m.depthFar)),V.near=M.near=b.near=ot,V.far=M.far=b.far=Pt,(q!==V.near||j!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),q=V.near,j=V.far),V.layers.mask=st.layers.mask|6,b.layers.mask=V.layers.mask&3,M.layers.mask=V.layers.mask&5;const Vt=st.parent,Mt=V.cameras;ft(V,Vt);for(let oe=0;oe<Mt.length;oe++)ft(Mt[oe],Vt);Mt.length===2?pt(V,b,M):V.projectionMatrix.copy(b.projectionMatrix),kt(st,V,Vt)};function kt(st,ot,Pt){Pt===null?st.matrix.copy(ot.matrixWorld):(st.matrix.copy(Pt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ot.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ot.projectionMatrix),st.projectionMatrixInverse.copy(ot.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Bs*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(st){l=st,f!==null&&(f.fixedFoveation=st),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=st)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(st){return d[st]};let Lt=null;function Zt(st,ot){if(u=ot.getViewerPose(c||o),g=ot,u!==null){const Pt=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let Vt=!1;Pt.length!==V.cameras.length&&(V.cameras.length=0,Vt=!0);for(let O=0;O<Pt.length;O++){const U=Pt[O];let z=null;if(p!==null)z=p.getViewport(U);else{const X=h.getViewSubImage(f,U);z=X.viewport,O===0&&(t.setRenderTargetTextures(x,X.colorTexture,X.depthStencilTexture),t.setRenderTarget(x))}let F=L[O];F===void 0&&(F=new Pn,F.layers.enable(O),F.viewport=new Be,L[O]=F),F.matrix.fromArray(U.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(U.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(z.x,z.y,z.width,z.height),O===0&&(V.matrix.copy(F.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Vt===!0&&V.cameras.push(F)}const Mt=r.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const O=h.getDepthInformation(Pt[0]);O&&O.isValid&&O.texture&&m.init(O,r.renderState)}if(Mt&&Mt.includes("camera-access")&&v){t.state.unbindTexture(),h=i.getBinding();for(let O=0;O<Pt.length;O++){const U=Pt[O].camera;if(U){let z=d[U];z||(z=new i_,d[U]=z);const F=h.getCameraImage(U);z.sourceTexture=F}}}}for(let Pt=0;Pt<A.length;Pt++){const Vt=P[Pt],Mt=A[Pt];Vt!==null&&Mt!==void 0&&Mt.update(Vt,ot,c||o)}Lt&&Lt(st,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),g=null}const ce=new __;ce.setAnimationLoop(Zt),this.setAnimationLoop=function(st){Lt=st},this.dispose=function(){}}}const Dr=new ei,xP=new he;function yP(e,t){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,K0(e)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,S,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,S,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===fn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===fn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=t.get(d),y=S.envMap,x=S.envMapRotation;y&&(m.envMap.value=y,Dr.copy(x),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),m.envMapRotation.value.setFromMatrix4(xP.makeRotationFromEuler(Dr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=y*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===fn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const S=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function SP(e,t,n,i){let r={},s={},o=[];const a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const x=y.program;i.uniformBlockBinding(S,x)}function c(S,y){let x=r[S.id];x===void 0&&(g(S),x=u(S),r[S.id]=x,S.addEventListener("dispose",m));const A=y.program;i.updateUBOMapping(S,A);const P=t.render.frame;s[S.id]!==P&&(f(S),s[S.id]=P)}function u(S){const y=h();S.__bindingPointIndex=y;const x=e.createBuffer(),A=S.__size,P=S.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,A,P),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,y,x),x}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return de("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=r[S.id],x=S.uniforms,A=S.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let P=0,C=x.length;P<C;P++){const R=Array.isArray(x[P])?x[P]:[x[P]];for(let b=0,M=R.length;b<M;b++){const L=R[b];if(p(L,P,b,A)===!0){const V=L.__offset,q=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let J=0;J<q.length;J++){const W=q[J],k=v(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,V+j,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,j),j+=k.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,V,L.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(S,y,x,A){const P=S.value,C=y+"_"+x;if(A[C]===void 0)return typeof P=="number"||typeof P=="boolean"?A[C]=P:A[C]=P.clone(),!0;{const R=A[C];if(typeof P=="number"||typeof P=="boolean"){if(R!==P)return A[C]=P,!0}else if(R.equals(P)===!1)return R.copy(P),!0}return!1}function g(S){const y=S.uniforms;let x=0;const A=16;for(let C=0,R=y.length;C<R;C++){const b=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,L=b.length;M<L;M++){const V=b[M],q=Array.isArray(V.value)?V.value:[V.value];for(let j=0,J=q.length;j<J;j++){const W=q[j],k=v(W),H=x%A,ct=H%k.boundary,pt=H+ct;x+=ct,pt!==0&&A-pt<k.storage&&(x+=A-pt),V.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=k.storage}}}const P=x%A;return P>0&&(x+=A-P),S.__size=x,S.__cache={},this}function v(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Yt("WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),e.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const S in r)e.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}const bP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function MP(){return ai===null&&(ai=new EM(bP,16,16,Fs,Yi),ai.name="DFG_LUT",ai.minFilter=un,ai.magFilter=un,ai.wrapS=Bi,ai.wrapT=Bi,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class wP{constructor(t={}){const{canvas:n=kb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=kn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=p,m=new Set([uf,cf,lf]),d=new Set([kn,bi,ko,Bo,of,af]),S=new Uint32Array(4),y=new Int32Array(4);let x=null,A=null;const P=[],C=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let M=!1;this._outputColorSpace=On;let L=0,V=0,q=null,j=-1,J=null;const W=new Be,k=new Be;let H=null;const ct=new $t(0);let pt=0,ft=n.width,kt=n.height,Lt=1,Zt=null,ce=null;const st=new Be(0,0,ft,kt),ot=new Be(0,0,ft,kt);let Pt=!1;const Vt=new gf;let Mt=!1,oe=!1;const I=new he,O=new D,U=new Be,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let F=!1;function X(){return q===null?Lt:1}let E=i;function rt(T,G){return n.getContext(T,G)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nf}`),n.addEventListener("webglcontextlost",Qt,!1),n.addEventListener("webglcontextrestored",Ce,!1),n.addEventListener("webglcontextcreationerror",ye,!1),E===null){const G="webgl2";if(E=rt(G,T),E===null)throw rt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw de("WebGLRenderer: "+T.message),T}let K,Q,it,w,_,N,Y,nt,$,wt,ht,Ct,zt,ut,yt,Et,It,xt,ee,B,Dt,gt,Nt,dt;function lt(){K=new M1(E),K.init(),gt=new pP(E,K),Q=new p1(E,K,t,gt),it=new fP(E,K),Q.reversedDepthBuffer&&f&&it.buffers.depth.setReversed(!0),w=new T1(E),_=new KA,N=new dP(E,K,it,_,Q,gt,w),Y=new g1(b),nt=new b1(b),$=new Rw(E),Nt=new f1(E,$),wt=new w1(E,$,w,Nt),ht=new P1(E,wt,$,w),ee=new A1(E,Q,N),Et=new m1(_),Ct=new ZA(b,Y,nt,K,Q,Nt,Et),zt=new yP(b,_),ut=new jA,yt=new sP(K),xt=new h1(b,Y,nt,it,ht,g,l),It=new uP(b,ht,Q),dt=new SP(E,w,Q,it),B=new d1(E,K,w),Dt=new E1(E,K,w),w.programs=Ct.programs,b.capabilities=Q,b.extensions=K,b.properties=_,b.renderLists=ut,b.shadowMap=It,b.state=it,b.info=w}lt(),v!==kn&&(R=new R1(v,n.width,n.height,r,s));const bt=new vP(b,E);this.xr=bt,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const T=K.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=K.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Lt},this.setPixelRatio=function(T){T!==void 0&&(Lt=T,this.setSize(ft,kt,!1))},this.getSize=function(T){return T.set(ft,kt)},this.setSize=function(T,G,et=!0){if(bt.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=T,kt=G,n.width=Math.floor(T*Lt),n.height=Math.floor(G*Lt),et===!0&&(n.style.width=T+"px",n.style.height=G+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(ft*Lt,kt*Lt).floor()},this.setDrawingBufferSize=function(T,G,et){ft=T,kt=G,Lt=et,n.width=Math.floor(T*et),n.height=Math.floor(G*et),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(v===kn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(W)},this.getViewport=function(T){return T.copy(st)},this.setViewport=function(T,G,et,tt){T.isVector4?st.set(T.x,T.y,T.z,T.w):st.set(T,G,et,tt),it.viewport(W.copy(st).multiplyScalar(Lt).round())},this.getScissor=function(T){return T.copy(ot)},this.setScissor=function(T,G,et,tt){T.isVector4?ot.set(T.x,T.y,T.z,T.w):ot.set(T,G,et,tt),it.scissor(k.copy(ot).multiplyScalar(Lt).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(T){it.setScissorTest(Pt=T)},this.setOpaqueSort=function(T){Zt=T},this.setTransparentSort=function(T){ce=T},this.getClearColor=function(T){return T.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,et=!0){let tt=0;if(T){let Z=!1;if(q!==null){const Tt=q.texture.format;Z=m.has(Tt)}if(Z){const Tt=q.texture.type,Ut=d.has(Tt),Rt=xt.getClearColor(),Bt=xt.getClearAlpha(),Gt=Rt.r,Jt=Rt.g,Xt=Rt.b;Ut?(S[0]=Gt,S[1]=Jt,S[2]=Xt,S[3]=Bt,E.clearBufferuiv(E.COLOR,0,S)):(y[0]=Gt,y[1]=Jt,y[2]=Xt,y[3]=Bt,E.clearBufferiv(E.COLOR,0,y))}else tt|=E.COLOR_BUFFER_BIT}G&&(tt|=E.DEPTH_BUFFER_BIT),et&&(tt|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Qt,!1),n.removeEventListener("webglcontextrestored",Ce,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),xt.dispose(),ut.dispose(),yt.dispose(),_.dispose(),Y.dispose(),nt.dispose(),ht.dispose(),Nt.dispose(),dt.dispose(),Ct.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Nf),bt.removeEventListener("sessionend",Uf),Sr.stop()};function Qt(T){T.preventDefault(),Mp("WebGLRenderer: Context Lost."),M=!0}function Ce(){Mp("WebGLRenderer: Context Restored."),M=!1;const T=w.autoReset,G=It.enabled,et=It.autoUpdate,tt=It.needsUpdate,Z=It.type;lt(),w.autoReset=T,It.enabled=G,It.autoUpdate=et,It.needsUpdate=tt,It.type=Z}function ye(T){de("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function si(T){const G=T.target;G.removeEventListener("dispose",si),Ei(G)}function Ei(T){I_(T),_.remove(T)}function I_(T){const G=_.get(T).programs;G!==void 0&&(G.forEach(function(et){Ct.releaseProgram(et)}),T.isShaderMaterial&&Ct.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,et,tt,Z,Tt){G===null&&(G=z);const Ut=Z.isMesh&&Z.matrixWorld.determinant()<0,Rt=N_(T,G,et,tt,Z);it.setMaterial(tt,Ut);let Bt=et.index,Gt=1;if(tt.wireframe===!0){if(Bt=wt.getWireframeAttribute(et),Bt===void 0)return;Gt=2}const Jt=et.drawRange,Xt=et.attributes.position;let le=Jt.start*Gt,we=(Jt.start+Jt.count)*Gt;Tt!==null&&(le=Math.max(le,Tt.start*Gt),we=Math.min(we,(Tt.start+Tt.count)*Gt)),Bt!==null?(le=Math.max(le,0),we=Math.min(we,Bt.count)):Xt!=null&&(le=Math.max(le,0),we=Math.min(we,Xt.count));const Oe=we-le;if(Oe<0||Oe===1/0)return;Nt.setup(Z,tt,Rt,et,Bt);let Fe,Ae=B;if(Bt!==null&&(Fe=$.get(Bt),Ae=Dt,Ae.setIndex(Fe)),Z.isMesh)tt.wireframe===!0?(it.setLineWidth(tt.wireframeLinewidth*X()),Ae.setMode(E.LINES)):Ae.setMode(E.TRIANGLES);else if(Z.isLine){let qt=tt.linewidth;qt===void 0&&(qt=1),it.setLineWidth(qt*X()),Z.isLineSegments?Ae.setMode(E.LINES):Z.isLineLoop?Ae.setMode(E.LINE_LOOP):Ae.setMode(E.LINE_STRIP)}else Z.isPoints?Ae.setMode(E.POINTS):Z.isSprite&&Ae.setMode(E.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)zo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Ae.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const qt=Z._multiDrawStarts,Se=Z._multiDrawCounts,ge=Z._multiDrawCount,In=Bt?$.get(Bt).bytesPerElement:1,ts=_.get(tt).currentProgram.getUniforms();for(let Ln=0;Ln<ge;Ln++)ts.setValue(E,"_gl_DrawID",Ln),Ae.render(qt[Ln]/In,Se[Ln])}else if(Z.isInstancedMesh)Ae.renderInstances(le,Oe,Z.count);else if(et.isInstancedBufferGeometry){const qt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Se=Math.min(et.instanceCount,qt);Ae.renderInstances(le,Oe,Se)}else Ae.render(le,Oe)};function Lf(T,G,et){T.transparent===!0&&T.side===xn&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,ia(T,G,et),T.side=vr,T.needsUpdate=!0,ia(T,G,et),T.side=xn):ia(T,G,et)}this.compile=function(T,G,et=null){et===null&&(et=T),A=yt.get(et),A.init(G),C.push(A),et.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(A.pushLight(Z),Z.castShadow&&A.pushShadow(Z))}),T!==et&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(A.pushLight(Z),Z.castShadow&&A.pushShadow(Z))}),A.setupLights();const tt=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Rt=Tt[Ut];Lf(Rt,et,Z),tt.add(Rt)}else Lf(Tt,et,Z),tt.add(Tt)}),A=C.pop(),tt},this.compileAsync=function(T,G,et=null){const tt=this.compile(T,G,et);return new Promise(Z=>{function Tt(){if(tt.forEach(function(Ut){_.get(Ut).currentProgram.isReady()&&tt.delete(Ut)}),tt.size===0){Z(T);return}setTimeout(Tt,10)}K.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Fl=null;function L_(T){Fl&&Fl(T)}function Nf(){Sr.stop()}function Uf(){Sr.start()}const Sr=new __;Sr.setAnimationLoop(L_),typeof self<"u"&&Sr.setContext(self),this.setAnimationLoop=function(T){Fl=T,bt.setAnimationLoop(T),T===null?Sr.stop():Sr.start()},bt.addEventListener("sessionstart",Nf),bt.addEventListener("sessionend",Uf),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){de("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const et=bt.enabled===!0&&bt.isPresenting===!0,tt=R!==null&&(q===null||et)&&R.begin(b,q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(G),G=bt.getCamera()),T.isScene===!0&&T.onBeforeRender(b,T,G,q),A=yt.get(T,C.length),A.init(G),C.push(A),I.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Vt.setFromProjectionMatrix(I,mi,G.reversedDepth),oe=this.localClippingEnabled,Mt=Et.init(this.clippingPlanes,oe),x=ut.get(T,P.length),x.init(),P.push(x),bt.enabled===!0&&bt.isPresenting===!0){const Ut=b.xr.getDepthSensingMesh();Ut!==null&&kl(Ut,G,-1/0,b.sortObjects)}kl(T,G,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(Zt,ce),F=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,F&&xt.addToRenderList(x,T),this.info.render.frame++,Mt===!0&&Et.beginShadows();const Z=A.state.shadowsArray;if(It.render(Z,T,G),Mt===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt&&R.hasRenderPass())===!1){const Ut=x.opaque,Rt=x.transmissive;if(A.setupLights(),G.isArrayCamera){const Bt=G.cameras;if(Rt.length>0)for(let Gt=0,Jt=Bt.length;Gt<Jt;Gt++){const Xt=Bt[Gt];Ff(Ut,Rt,T,Xt)}F&&xt.render(T);for(let Gt=0,Jt=Bt.length;Gt<Jt;Gt++){const Xt=Bt[Gt];Of(x,T,Xt,Xt.viewport)}}else Rt.length>0&&Ff(Ut,Rt,T,G),F&&xt.render(T),Of(x,T,G)}q!==null&&V===0&&(N.updateMultisampleRenderTarget(q),N.updateRenderTargetMipmap(q)),tt&&R.end(b),T.isScene===!0&&T.onAfterRender(b,T,G),Nt.resetDefaultState(),j=-1,J=null,C.pop(),C.length>0?(A=C[C.length-1],Mt===!0&&Et.setGlobalState(b.clippingPlanes,A.state.camera)):A=null,P.pop(),P.length>0?x=P[P.length-1]:x=null};function kl(T,G,et,tt){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)et=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Vt.intersectsSprite(T)){tt&&U.setFromMatrixPosition(T.matrixWorld).applyMatrix4(I);const Ut=ht.update(T),Rt=T.material;Rt.visible&&x.push(T,Ut,Rt,et,U.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Vt.intersectsObject(T))){const Ut=ht.update(T),Rt=T.material;if(tt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),U.copy(T.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),U.copy(Ut.boundingSphere.center)),U.applyMatrix4(T.matrixWorld).applyMatrix4(I)),Array.isArray(Rt)){const Bt=Ut.groups;for(let Gt=0,Jt=Bt.length;Gt<Jt;Gt++){const Xt=Bt[Gt],le=Rt[Xt.materialIndex];le&&le.visible&&x.push(T,Ut,le,et,U.z,Xt)}}else Rt.visible&&x.push(T,Ut,Rt,et,U.z,null)}}const Tt=T.children;for(let Ut=0,Rt=Tt.length;Ut<Rt;Ut++)kl(Tt[Ut],G,et,tt)}function Of(T,G,et,tt){const{opaque:Z,transmissive:Tt,transparent:Ut}=T;A.setupLightsView(et),Mt===!0&&Et.setGlobalState(b.clippingPlanes,et),tt&&it.viewport(W.copy(tt)),Z.length>0&&na(Z,G,et),Tt.length>0&&na(Tt,G,et),Ut.length>0&&na(Ut,G,et),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function Ff(T,G,et,tt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[tt.id]===void 0){const le=K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[tt.id]=new vi(1,1,{generateMipmaps:!0,type:le?Yi:kn,minFilter:Fr,samples:Q.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace})}const Tt=A.state.transmissionRenderTarget[tt.id],Ut=tt.viewport||W;Tt.setSize(Ut.z*b.transmissionResolutionScale,Ut.w*b.transmissionResolutionScale);const Rt=b.getRenderTarget(),Bt=b.getActiveCubeFace(),Gt=b.getActiveMipmapLevel();b.setRenderTarget(Tt),b.getClearColor(ct),pt=b.getClearAlpha(),pt<1&&b.setClearColor(16777215,.5),b.clear(),F&&xt.render(et);const Jt=b.toneMapping;b.toneMapping=_i;const Xt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),A.setupLightsView(tt),Mt===!0&&Et.setGlobalState(b.clippingPlanes,tt),na(T,et,tt),N.updateMultisampleRenderTarget(Tt),N.updateRenderTargetMipmap(Tt),K.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let we=0,Oe=G.length;we<Oe;we++){const Fe=G[we],{object:Ae,geometry:qt,material:Se,group:ge}=Fe;if(Se.side===xn&&Ae.layers.test(tt.layers)){const In=Se.side;Se.side=fn,Se.needsUpdate=!0,kf(Ae,et,tt,qt,Se,ge),Se.side=In,Se.needsUpdate=!0,le=!0}}le===!0&&(N.updateMultisampleRenderTarget(Tt),N.updateRenderTargetMipmap(Tt))}b.setRenderTarget(Rt,Bt,Gt),b.setClearColor(ct,pt),Xt!==void 0&&(tt.viewport=Xt),b.toneMapping=Jt}function na(T,G,et){const tt=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,Tt=T.length;Z<Tt;Z++){const Ut=T[Z],{object:Rt,geometry:Bt,group:Gt}=Ut;let Jt=Ut.material;Jt.allowOverride===!0&&tt!==null&&(Jt=tt),Rt.layers.test(et.layers)&&kf(Rt,G,et,Bt,Jt,Gt)}}function kf(T,G,et,tt,Z,Tt){T.onBeforeRender(b,G,et,tt,Z,Tt),T.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(b,G,et,tt,T,Tt),Z.transparent===!0&&Z.side===xn&&Z.forceSinglePass===!1?(Z.side=fn,Z.needsUpdate=!0,b.renderBufferDirect(et,G,tt,Z,T,Tt),Z.side=vr,Z.needsUpdate=!0,b.renderBufferDirect(et,G,tt,Z,T,Tt),Z.side=xn):b.renderBufferDirect(et,G,tt,Z,T,Tt),T.onAfterRender(b,G,et,tt,Z,Tt)}function ia(T,G,et){G.isScene!==!0&&(G=z);const tt=_.get(T),Z=A.state.lights,Tt=A.state.shadowsArray,Ut=Z.state.version,Rt=Ct.getParameters(T,Z.state,Tt,G,et),Bt=Ct.getProgramCacheKey(Rt);let Gt=tt.programs;tt.environment=T.isMeshStandardMaterial?G.environment:null,tt.fog=G.fog,tt.envMap=(T.isMeshStandardMaterial?nt:Y).get(T.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Gt===void 0&&(T.addEventListener("dispose",si),Gt=new Map,tt.programs=Gt);let Jt=Gt.get(Bt);if(Jt!==void 0){if(tt.currentProgram===Jt&&tt.lightsStateVersion===Ut)return zf(T,Rt),Jt}else Rt.uniforms=Ct.getUniforms(T),T.onBeforeCompile(Rt,b),Jt=Ct.acquireProgram(Rt,Bt),Gt.set(Bt,Jt),tt.uniforms=Rt.uniforms;const Xt=tt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Xt.clippingPlanes=Et.uniform),zf(T,Rt),tt.needsLights=O_(T),tt.lightsStateVersion=Ut,tt.needsLights&&(Xt.ambientLightColor.value=Z.state.ambient,Xt.lightProbe.value=Z.state.probe,Xt.directionalLights.value=Z.state.directional,Xt.directionalLightShadows.value=Z.state.directionalShadow,Xt.spotLights.value=Z.state.spot,Xt.spotLightShadows.value=Z.state.spotShadow,Xt.rectAreaLights.value=Z.state.rectArea,Xt.ltc_1.value=Z.state.rectAreaLTC1,Xt.ltc_2.value=Z.state.rectAreaLTC2,Xt.pointLights.value=Z.state.point,Xt.pointLightShadows.value=Z.state.pointShadow,Xt.hemisphereLights.value=Z.state.hemi,Xt.directionalShadowMap.value=Z.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xt.spotShadowMap.value=Z.state.spotShadowMap,Xt.spotLightMatrix.value=Z.state.spotLightMatrix,Xt.spotLightMap.value=Z.state.spotLightMap,Xt.pointShadowMap.value=Z.state.pointShadowMap,Xt.pointShadowMatrix.value=Z.state.pointShadowMatrix),tt.currentProgram=Jt,tt.uniformsList=null,Jt}function Bf(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=ja.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function zf(T,G){const et=_.get(T);et.outputColorSpace=G.outputColorSpace,et.batching=G.batching,et.batchingColor=G.batchingColor,et.instancing=G.instancing,et.instancingColor=G.instancingColor,et.instancingMorph=G.instancingMorph,et.skinning=G.skinning,et.morphTargets=G.morphTargets,et.morphNormals=G.morphNormals,et.morphColors=G.morphColors,et.morphTargetsCount=G.morphTargetsCount,et.numClippingPlanes=G.numClippingPlanes,et.numIntersection=G.numClipIntersection,et.vertexAlphas=G.vertexAlphas,et.vertexTangents=G.vertexTangents,et.toneMapping=G.toneMapping}function N_(T,G,et,tt,Z){G.isScene!==!0&&(G=z),N.resetTextureUnits();const Tt=G.fog,Ut=tt.isMeshStandardMaterial?G.environment:null,Rt=q===null?b.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ks,Bt=(tt.isMeshStandardMaterial?nt:Y).get(tt.envMap||Ut),Gt=tt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Jt=!!et.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Xt=!!et.morphAttributes.position,le=!!et.morphAttributes.normal,we=!!et.morphAttributes.color;let Oe=_i;tt.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Oe=b.toneMapping);const Fe=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Ae=Fe!==void 0?Fe.length:0,qt=_.get(tt),Se=A.state.lights;if(Mt===!0&&(oe===!0||T!==J)){const pn=T===J&&tt.id===j;Et.setState(tt,T,pn)}let ge=!1;tt.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Se.state.version||qt.outputColorSpace!==Rt||Z.isBatchedMesh&&qt.batching===!1||!Z.isBatchedMesh&&qt.batching===!0||Z.isBatchedMesh&&qt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&qt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&qt.instancing===!1||!Z.isInstancedMesh&&qt.instancing===!0||Z.isSkinnedMesh&&qt.skinning===!1||!Z.isSkinnedMesh&&qt.skinning===!0||Z.isInstancedMesh&&qt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&qt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&qt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&qt.instancingMorph===!1&&Z.morphTexture!==null||qt.envMap!==Bt||tt.fog===!0&&qt.fog!==Tt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Et.numPlanes||qt.numIntersection!==Et.numIntersection)||qt.vertexAlphas!==Gt||qt.vertexTangents!==Jt||qt.morphTargets!==Xt||qt.morphNormals!==le||qt.morphColors!==we||qt.toneMapping!==Oe||qt.morphTargetsCount!==Ae)&&(ge=!0):(ge=!0,qt.__version=tt.version);let In=qt.currentProgram;ge===!0&&(In=ia(tt,G,Z));let ts=!1,Ln=!1,Qs=!1;const Re=In.getUniforms(),Mn=qt.uniforms;if(it.useProgram(In.program)&&(ts=!0,Ln=!0,Qs=!0),tt.id!==j&&(j=tt.id,Ln=!0),ts||J!==T){it.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Re.setValue(E,"projectionMatrix",T.projectionMatrix),Re.setValue(E,"viewMatrix",T.matrixWorldInverse);const wn=Re.map.cameraPosition;wn!==void 0&&wn.setValue(E,O.setFromMatrixPosition(T.matrixWorld)),Q.logarithmicDepthBuffer&&Re.setValue(E,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Re.setValue(E,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,Ln=!0,Qs=!0)}if(qt.needsLights&&(Se.state.directionalShadowMap.length>0&&Re.setValue(E,"directionalShadowMap",Se.state.directionalShadowMap,N),Se.state.spotShadowMap.length>0&&Re.setValue(E,"spotShadowMap",Se.state.spotShadowMap,N),Se.state.pointShadowMap.length>0&&Re.setValue(E,"pointShadowMap",Se.state.pointShadowMap,N)),Z.isSkinnedMesh){Re.setOptional(E,Z,"bindMatrix"),Re.setOptional(E,Z,"bindMatrixInverse");const pn=Z.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Re.setValue(E,"boneTexture",pn.boneTexture,N))}Z.isBatchedMesh&&(Re.setOptional(E,Z,"batchingTexture"),Re.setValue(E,"batchingTexture",Z._matricesTexture,N),Re.setOptional(E,Z,"batchingIdTexture"),Re.setValue(E,"batchingIdTexture",Z._indirectTexture,N),Re.setOptional(E,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Re.setValue(E,"batchingColorTexture",Z._colorsTexture,N));const Hn=et.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&ee.update(Z,et,In),(Ln||qt.receiveShadow!==Z.receiveShadow)&&(qt.receiveShadow=Z.receiveShadow,Re.setValue(E,"receiveShadow",Z.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Mn.envMap.value=Bt,Mn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&G.environment!==null&&(Mn.envMapIntensity.value=G.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=MP()),Ln&&(Re.setValue(E,"toneMappingExposure",b.toneMappingExposure),qt.needsLights&&U_(Mn,Qs),Tt&&tt.fog===!0&&zt.refreshFogUniforms(Mn,Tt),zt.refreshMaterialUniforms(Mn,tt,Lt,kt,A.state.transmissionRenderTarget[T.id]),ja.upload(E,Bf(qt),Mn,N)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(ja.upload(E,Bf(qt),Mn,N),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Re.setValue(E,"center",Z.center),Re.setValue(E,"modelViewMatrix",Z.modelViewMatrix),Re.setValue(E,"normalMatrix",Z.normalMatrix),Re.setValue(E,"modelMatrix",Z.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const pn=tt.uniformsGroups;for(let wn=0,Bl=pn.length;wn<Bl;wn++){const br=pn[wn];dt.update(br,In),dt.bind(br,In)}}return In}function U_(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function O_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(T,G,et){const tt=_.get(T);tt.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),_.get(T.texture).__webglTexture=G,_.get(T.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:et,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const et=_.get(T);et.__webglFramebuffer=G,et.__useDefaultFramebuffer=G===void 0};const F_=E.createFramebuffer();this.setRenderTarget=function(T,G=0,et=0){q=T,L=G,V=et;let tt=null,Z=!1,Tt=!1;if(T){const Rt=_.get(T);if(Rt.__useDefaultFramebuffer!==void 0){it.bindFramebuffer(E.FRAMEBUFFER,Rt.__webglFramebuffer),W.copy(T.viewport),k.copy(T.scissor),H=T.scissorTest,it.viewport(W),it.scissor(k),it.setScissorTest(H),j=-1;return}else if(Rt.__webglFramebuffer===void 0)N.setupRenderTarget(T);else if(Rt.__hasExternalTextures)N.rebindTextures(T,_.get(T.texture).__webglTexture,_.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Jt=T.depthTexture;if(Rt.__boundDepthTexture!==Jt){if(Jt!==null&&_.has(Jt)&&(T.width!==Jt.image.width||T.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(T)}}const Bt=T.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Tt=!0);const Gt=_.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Gt[G])?tt=Gt[G][et]:tt=Gt[G],Z=!0):T.samples>0&&N.useMultisampledRTT(T)===!1?tt=_.get(T).__webglMultisampledFramebuffer:Array.isArray(Gt)?tt=Gt[et]:tt=Gt,W.copy(T.viewport),k.copy(T.scissor),H=T.scissorTest}else W.copy(st).multiplyScalar(Lt).floor(),k.copy(ot).multiplyScalar(Lt).floor(),H=Pt;if(et!==0&&(tt=F_),it.bindFramebuffer(E.FRAMEBUFFER,tt)&&it.drawBuffers(T,tt),it.viewport(W),it.scissor(k),it.setScissorTest(H),Z){const Rt=_.get(T.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+G,Rt.__webglTexture,et)}else if(Tt){const Rt=G;for(let Bt=0;Bt<T.textures.length;Bt++){const Gt=_.get(T.textures[Bt]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Bt,Gt.__webglTexture,et,Rt)}}else if(T!==null&&et!==0){const Rt=_.get(T.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Rt.__webglTexture,et)}j=-1},this.readRenderTargetPixels=function(T,G,et,tt,Z,Tt,Ut,Rt=0){if(!(T&&T.isWebGLRenderTarget)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=_.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt){it.bindFramebuffer(E.FRAMEBUFFER,Bt);try{const Gt=T.textures[Rt],Jt=Gt.format,Xt=Gt.type;if(!Q.textureFormatReadable(Jt)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Xt)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-tt&&et>=0&&et<=T.height-Z&&(T.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Rt),E.readPixels(G,et,tt,Z,gt.convert(Jt),gt.convert(Xt),Tt))}finally{const Gt=q!==null?_.get(q).__webglFramebuffer:null;it.bindFramebuffer(E.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(T,G,et,tt,Z,Tt,Ut,Rt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=_.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ut!==void 0&&(Bt=Bt[Ut]),Bt)if(G>=0&&G<=T.width-tt&&et>=0&&et<=T.height-Z){it.bindFramebuffer(E.FRAMEBUFFER,Bt);const Gt=T.textures[Rt],Jt=Gt.format,Xt=Gt.type;if(!Q.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,le),E.bufferData(E.PIXEL_PACK_BUFFER,Tt.byteLength,E.STREAM_READ),T.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Rt),E.readPixels(G,et,tt,Z,gt.convert(Jt),gt.convert(Xt),0);const we=q!==null?_.get(q).__webglFramebuffer:null;it.bindFramebuffer(E.FRAMEBUFFER,we);const Oe=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Bb(E,Oe,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,le),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Tt),E.deleteBuffer(le),E.deleteSync(Oe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,et=0){const tt=Math.pow(2,-et),Z=Math.floor(T.image.width*tt),Tt=Math.floor(T.image.height*tt),Ut=G!==null?G.x:0,Rt=G!==null?G.y:0;N.setTexture2D(T,0),E.copyTexSubImage2D(E.TEXTURE_2D,et,0,0,Ut,Rt,Z,Tt),it.unbindTexture()};const k_=E.createFramebuffer(),B_=E.createFramebuffer();this.copyTextureToTexture=function(T,G,et=null,tt=null,Z=0,Tt=null){Tt===null&&(Z!==0?(zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Z,Z=0):Tt=0);let Ut,Rt,Bt,Gt,Jt,Xt,le,we,Oe;const Fe=T.isCompressedTexture?T.mipmaps[Tt]:T.image;if(et!==null)Ut=et.max.x-et.min.x,Rt=et.max.y-et.min.y,Bt=et.isBox3?et.max.z-et.min.z:1,Gt=et.min.x,Jt=et.min.y,Xt=et.isBox3?et.min.z:0;else{const Hn=Math.pow(2,-Z);Ut=Math.floor(Fe.width*Hn),Rt=Math.floor(Fe.height*Hn),T.isDataArrayTexture?Bt=Fe.depth:T.isData3DTexture?Bt=Math.floor(Fe.depth*Hn):Bt=1,Gt=0,Jt=0,Xt=0}tt!==null?(le=tt.x,we=tt.y,Oe=tt.z):(le=0,we=0,Oe=0);const Ae=gt.convert(G.format),qt=gt.convert(G.type);let Se;G.isData3DTexture?(N.setTexture3D(G,0),Se=E.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(N.setTexture2DArray(G,0),Se=E.TEXTURE_2D_ARRAY):(N.setTexture2D(G,0),Se=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,G.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,G.unpackAlignment);const ge=E.getParameter(E.UNPACK_ROW_LENGTH),In=E.getParameter(E.UNPACK_IMAGE_HEIGHT),ts=E.getParameter(E.UNPACK_SKIP_PIXELS),Ln=E.getParameter(E.UNPACK_SKIP_ROWS),Qs=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Fe.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Fe.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Gt),E.pixelStorei(E.UNPACK_SKIP_ROWS,Jt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Xt);const Re=T.isDataArrayTexture||T.isData3DTexture,Mn=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const Hn=_.get(T),pn=_.get(G),wn=_.get(Hn.__renderTarget),Bl=_.get(pn.__renderTarget);it.bindFramebuffer(E.READ_FRAMEBUFFER,wn.__webglFramebuffer),it.bindFramebuffer(E.DRAW_FRAMEBUFFER,Bl.__webglFramebuffer);for(let br=0;br<Bt;br++)Re&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,_.get(T).__webglTexture,Z,Xt+br),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,_.get(G).__webglTexture,Tt,Oe+br)),E.blitFramebuffer(Gt,Jt,Ut,Rt,le,we,Ut,Rt,E.DEPTH_BUFFER_BIT,E.NEAREST);it.bindFramebuffer(E.READ_FRAMEBUFFER,null),it.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||_.has(T)){const Hn=_.get(T),pn=_.get(G);it.bindFramebuffer(E.READ_FRAMEBUFFER,k_),it.bindFramebuffer(E.DRAW_FRAMEBUFFER,B_);for(let wn=0;wn<Bt;wn++)Re?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Hn.__webglTexture,Z,Xt+wn):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Hn.__webglTexture,Z),Mn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,pn.__webglTexture,Tt,Oe+wn):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,pn.__webglTexture,Tt),Z!==0?E.blitFramebuffer(Gt,Jt,Ut,Rt,le,we,Ut,Rt,E.COLOR_BUFFER_BIT,E.NEAREST):Mn?E.copyTexSubImage3D(Se,Tt,le,we,Oe+wn,Gt,Jt,Ut,Rt):E.copyTexSubImage2D(Se,Tt,le,we,Gt,Jt,Ut,Rt);it.bindFramebuffer(E.READ_FRAMEBUFFER,null),it.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Mn?T.isDataTexture||T.isData3DTexture?E.texSubImage3D(Se,Tt,le,we,Oe,Ut,Rt,Bt,Ae,qt,Fe.data):G.isCompressedArrayTexture?E.compressedTexSubImage3D(Se,Tt,le,we,Oe,Ut,Rt,Bt,Ae,Fe.data):E.texSubImage3D(Se,Tt,le,we,Oe,Ut,Rt,Bt,Ae,qt,Fe):T.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Tt,le,we,Ut,Rt,Ae,qt,Fe.data):T.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Tt,le,we,Fe.width,Fe.height,Ae,Fe.data):E.texSubImage2D(E.TEXTURE_2D,Tt,le,we,Ut,Rt,Ae,qt,Fe);E.pixelStorei(E.UNPACK_ROW_LENGTH,ge),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,In),E.pixelStorei(E.UNPACK_SKIP_PIXELS,ts),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ln),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Qs),Tt===0&&G.generateMipmaps&&E.generateMipmap(Se),it.unbindTexture()},this.initRenderTarget=function(T){_.get(T).__webglFramebuffer===void 0&&N.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?N.setTextureCube(T,0):T.isData3DTexture?N.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?N.setTexture2DArray(T,0):N.setTexture2D(T,0),it.unbindTexture()},this.resetState=function(){L=0,V=0,q=null,it.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),n.unpackColorSpace=me._getUnpackColorSpace()}}class EP{data;constructor(t){let n;"bytes"in t?n=TP(t.bytes):n=t.data,this.data=n}get bytes(){return AP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const t=this.data.matrix,n=new he;return n.set(t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15]),n}}function TP(e){return $h.decode(e)}function AP(e){return $h.encode(e).finish()}function yr(e){const t=new D(e.point.x,e.point.y,e.point.z),n=new D(e.xaxis.x,e.xaxis.y,e.xaxis.z),i=new D(e.yaxis.x,e.yaxis.y,e.yaxis.z),r=new D().crossVectors(n,i),s=new he;return s.makeBasis(n,i,r),s.setPosition(t),s}class qn{data;constructor(t){let n;if("bytes"in t?n=PP(t.bytes):n=t.data,n.x===void 0||n.y===void 0||n.z===void 0)throw new Error("Invalid PointData: Missing required properties (x, y, or z).");this.data=n}get bytes(){return CP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get x(){return this.data.x}get y(){return this.data.y}get z(){return this.data.z}buildGeometry(){const t=new fe,n=new Float32Array([this.x,this.y,this.z]);return t.setAttribute("position",new bn(n,3)),new vf(t)}}function PP(e){return Ht.decode(e)}function CP(e){return Ht.encode(e).finish()}class Hs{data;constructor(t){let n;if("bytes"in t?n=RP(t.bytes):n=t.data,n.x===void 0||n.y===void 0||n.z===void 0)throw new Error("Invalid VectorData: Missing required properties (x, y, or z).");this.data=n}get bytes(){return DP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get x(){return this.data.x}get y(){return this.data.y}get z(){return this.data.z}buildGeometry(t){const n=new D(this.x,this.y,this.z),i=n.length();n.normalize();let r;t?r=new D(t.x,t.y,t.z):r=new D(0,0,0);let s=new Pf(n,r,i,16711680);return s.setDirection(n),s}}function RP(e){return Me.decode(e)}function DP(e){return Me.encode(e).finish()}class ri{data;_point;_xaxis;_yaxis;constructor(t){let n;if("bytes"in t?n=IP(t.bytes):n=t.data,!n.point||!n.xaxis||!n.yaxis)throw new Error("Invalid FrameData: Missing required properties (point, xaxis, or yaxis).");this.data=n}get bytes(){return LP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get point(){return this._point||(this._point=new qn({data:this.data.point})),this._point}get xaxis(){return this._xaxis||(this._xaxis=new Hs({data:this.data.xaxis})),this._xaxis}get yaxis(){return this._yaxis||(this._yaxis=new Hs({data:this.data.yaxis})),this._yaxis}buildGeometry(){const t=new m_(1);t.setColors(new $t(16711680),new $t(65280),new $t(255));const n=yr(this.data);return t.applyMatrix4(n),t}}function IP(e){return Wt.decode(e)}function LP(e){return Wt.encode(e).finish()}class b_{data;_frame;constructor(t){let n;if("bytes"in t?n=NP(t.bytes):n=t.data,!n.radius||!n.frame)throw new Error("Invalid CircleData: Missing required properties (radius or frame).");this.data=n}get bytes(){return UP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get frame(){return this._frame||(this._frame=new ri({data:this.data.frame})),this._frame}buildGeometry(t=64){const n=new yf(this.data.radius,t),i=yr(this.data.frame),r=new _t(n);return r.applyMatrix4(i),r}}function NP(e){return cr.decode(e)}function UP(e){return cr.encode(e).finish()}class OP{data;_circle;constructor(t){let n;if("bytes"in t?n=FP(t.bytes):n=t.data,!n.startAngle||!n.endAngle||!n.circle)throw new Error("Invalid ArcData: Missing required properties (startAngle, endAngle, or circle).");this.data=n}get bytes(){return kP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get startAngle(){return this.data.startAngle}get endAngle(){return this.data.endAngle}get circle(){return this._circle||(this._circle=new b_({data:this.data.circle})),this._circle}buildGeometry(){throw new Error("Method not implemented.")}}function FP(e){return Uh.decode(e)}function kP(e){return Uh.encode(e).finish()}class BP{data;_points;constructor(t){let n;if("bytes"in t?n=zP(t.bytes):n=t.data,!n.points||n.points.length===0)throw new Error("Invalid BezierData: Missing required property points.");this.data=n}get bytes(){return VP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const t of this.data.points){const n=new qn({data:t});this._points.push(n)}}return this._points}buildGeometry(){throw Error("Method not implemented.")}}function zP(e){return Bh.decode(e)}function VP(e){return Bh.encode(e).finish()}class HP{data;_frame;constructor(t){let n;if("bytes"in t?n=GP(t.bytes):n=t.data,!n.xsize||!n.ysize||!n.zsize||!n.frame)throw new Error("Invalid BoxData: Missing required properties (xsize, ysize, zsize, or frame).");this.data=n}get bytes(){return WP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get xsize(){return this.data.xsize}get ysize(){return this.data.ysize}get zsize(){return this.data.zsize}get frame(){return this._frame||(this._frame=new ri({data:this.data.frame})),this._frame}buildGeometry(){const t=new ke(this.data.xsize,this.data.ysize,this.data.zsize),n=yr(this.data.frame),i=new _t(t);return i.applyMatrix4(n),i}}function GP(e){return Hh.decode(e)}function WP(e){return Hh.encode(e).finish()}class XP{data;_frame;constructor(t){let n;if("bytes"in t?n=qP(t.bytes):n=t.data,!n.radius||!n.height||!n.frame)throw new Error("Invalid CapsuleData: Missing required properties (radius, height, or frame).");this.data=n}get bytes(){return YP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get height(){return this.data.height}get frame(){return this._frame||(this._frame=new ri({data:this.data.frame})),this._frame}buildGeometry(t=64){const n=new xf(this.data.radius,this.data.height,t,t),i=new _t(n),r=yr(this.data.frame);return i.applyMatrix4(r),i}}function qP(e){return qh.decode(e)}function YP(e){return qh.encode(e).finish()}class JP{data;_frame;constructor(t){let n;if("bytes"in t?n=$P(t.bytes):n=t.data,!n.radius||!n.height||!n.frame)throw new Error("Invalid ConeData: Missing required properties (radius, height, or frame).");this.data=n}get bytes(){return ZP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get height(){return this.data.height}get frame(){return this._frame||(this._frame=new ri({data:this.data.frame})),this._frame}buildGeometry(t=64){const n=new Ll(this.radius,this.height,t),i=new _t(n),r=yr(this.data.frame);return i.applyMatrix4(r),i}}function $P(e){return Xh.decode(e)}function ZP(e){return Xh.encode(e).finish()}class KP{data;_frame;constructor(t){let n;if("bytes"in t?n=QP(t.bytes):n=t.data,!n.radius||!n.height||!n.frame)throw new Error("Invalid CylinderData: Missing required properties (radius, height, or frame).");this.data=n}get bytes(){return jP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get height(){return this.data.height}get frame(){return this._frame||(this._frame=new ri({data:this.data.frame})),this._frame}buildGeometry(t=64){const n=new je(this.data.radius,this.data.radius,this.data.height,t),i=new _t(n),r=yr(this.frame);return i.applyMatrix4(r),i}}function QP(e){return Wh.decode(e)}function jP(e){return Wh.encode(e).finish()}class tC{data;_frame;constructor(t){let n;if("bytes"in t?n=eC(t.bytes):n=t.data,!n.major||!n.minor||!n.frame)throw new Error("Invalid EllipseData: Missing required properties (major, minor, or frame).");this.data=n}get bytes(){return nC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get major(){return this.data.major}get minor(){return this.data.minor}get frame(){return this._frame||(this._frame=new ri({data:this.data.frame})),this._frame}buildGeometry(t=64){throw Error("Method not implemented.")}}function eC(e){return Oh.decode(e)}function nC(e){return Oh.encode(e).finish()}class iC{data;_frame;constructor(t){let n;if("bytes"in t?n=rC(t.bytes):n=t.data,!n.major||!n.minor||!n.frame)throw new Error("Invalid HyperbolaData: Missing required properties (a, b, or frame).");this.data=n}get bytes(){return sC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get major(){return this.data.major}get minor(){return this.data.minor}get frame(){return this._frame||(this._frame=new ri({data:this.data.frame})),this._frame}buildGeometry(t=64){throw Error("Method not implemented.")}}function rC(e){return kh.decode(e)}function sC(e){return kh.encode(e).finish()}class oC{data;_start;_end;constructor(t){let n;if("bytes"in t?n=aC(t.bytes):n=t.data,!n.start||!n.end)throw new Error("Invalid LineData: Missing required properties (start or end).");this.data=n}get bytes(){return lC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get start(){return this._start||(this._start=new qn({data:this.data.start})),this._start}get end(){return this._end||(this._end=new qn({data:this.data.end})),this._end}buildGeometry(){const t=new D(this.data.start.x,this.data.start.y,this.data.start.z),n=new D(this.data.end.x,this.data.end.y,this.data.end.z),i=new fe().setFromPoints([t,n]),r=new ii({color:255});return new tn(i,r)}}function aC(e){return Nh.decode(e)}function lC(e){return Nh.encode(e).finish()}class cC{data;_frame;constructor(t){let n;if("bytes"in t?n=uC(t.bytes):n=t.data,!n.focal||!n.frame)throw new Error("Invalid ParabolaData: Missing required properties (focal_length or frame).");this.data=n}get bytes(){return hC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get focal(){return this.data.focal}get frame(){return this._frame||(this._frame=new ri({data:this.data.frame})),this._frame}buildGeometry(t=64){throw Error("Method not implemented.")}}function uC(e){return Fh.decode(e)}function hC(e){return Fh.encode(e).finish()}class fC{data;_point;_normal;constructor(t){let n;if("bytes"in t?n=dC(t.bytes):n=t.data,!n.point||!n.normal)throw new Error("Invalid PlaneData: Missing required properties (point or normal).");this.data=n}get bytes(){return pC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get point(){return this._point||(this._point=new qn({data:this.data.point})),this._point}get normal(){return this._normal||(this._normal=new Hs({data:this.data.normal})),this._normal}buildGeometry(t=2){const n=new Oi(new D(this.normal.x,this.normal.y,this.normal.z),0);return n.translate(new D(this.point.x,this.point.y,this.point.z)),new Aw(n,t)}}function dC(e){return Ih.decode(e)}function pC(e){return Ih.encode(e).finish()}class mC{data;_points;constructor(t){let n;if("bytes"in t?n=gC(t.bytes):n=t.data,!n.points||n.points.length===0)throw new Error("Invalid PointcloudData: Missing required property points.");this.data=n}get bytes(){return _C(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const t of this.data.points){const n=new qn({data:t});this._points.push(n)}}return this._points}buildGeometry(){const t=new fe,n=new Float32Array(this.points.length*3);for(let s=0;s<this.points.length;s++)n[s*3]=this.points[s].x,n[s*3+1]=this.points[s].y,n[s*3+2]=this.points[s].z;t.setAttribute("position",new bn(n,3));const i=new _f({size:.2,color:16711935});return new vf(t,i)}}function gC(e){return Jh.decode(e)}function _C(e){return Jh.encode(e).finish()}class vC{data;_points;constructor(t){let n;if("bytes"in t?n=xC(t.bytes):n=t.data,!n.points||n.points.length===0)throw new Error("Invalid PolygonData: Missing required property points.");this.data=n}get bytes(){return yC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const t of this.data.points){const n=new qn({data:t});this._points.push(n)}}return this._points}buildGeometry(){throw Error("Method not implemented.")}}function xC(e){return Vh.decode(e)}function yC(e){return Vh.encode(e).finish()}class SC{data;_points;constructor(t){let n;if("bytes"in t?n=bC(t.bytes):n=t.data,!n.points||n.points.length===0)throw new Error("Invalid PolylineData: Missing required property points.");this.data=n}get bytes(){return MC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const t of this.data.points){const n=new qn({data:t});this._points.push(n)}}return this._points}buildGeometry(){const t=new fe,n=new Float32Array(this.points.length*3);for(let s=0;s<this.points.length;s++)n[s*3]=this.points[s].x,n[s*3+1]=this.points[s].y,n[s*3+2]=this.points[s].z;t.setAttribute("position",new bn(n,3));const i=new ii({color:0});return new tn(t,i)}}function bC(e){return zh.decode(e)}function MC(e){return zh.encode(e).finish()}class wC{data;constructor(t){let n;if("bytes"in t?n=EC(t.bytes):n=t.data,!n.matrix)throw new Error("Invalid ProjectionData: Missing required properties (direction).");this.data=n}get bytes(){return TC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const t=this.data.matrix,n=new he;return n.set(t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15]),n}}function EC(e){return ef.decode(e)}function TC(e){return ef.encode(e).finish()}class AC{data;constructor(t){let n;if("bytes"in t?n=PC(t.bytes):n=t.data,!n.w||!n.x||!n.y||!n.z)throw new Error("Invalid QuaternionData: Missing required properties (w, x, y, or z).");this.data=n}get bytes(){return CC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get w(){return this.data.w}get x(){return this.data.x}get y(){return this.data.y}get z(){return this.data.z}}function PC(e){return Lh.decode(e)}function CC(e){return Lh.encode(e).finish()}class RC{data;constructor(t){let n;if("bytes"in t?n=DC(t.bytes):n=t.data,!n.matrix)throw new Error("Invalid ReflectionData: Missing required properties (frame).");this.data=n}get bytes(){return IC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const t=this.data.matrix,n=new he;return n.set(t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15]),n}}function DC(e){return jh.decode(e)}function IC(e){return jh.encode(e).finish()}class LC{data;_axis;_point;constructor(t){let n;if("bytes"in t?n=NC(t.bytes):n=t.data,!n.axis||!n.point||!n.angle)throw new Error("Invalid RotationData: Missing required properties (axis or point).");this.data=n}get bytes(){return UC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get axis(){return this._axis||(this._axis=new Hs({data:this.data.axis})),this._axis}get point(){return this._point||(this._point=new qn({data:this.data.point})),this._point}get angle(){return this.data.angle}}function NC(e){return Kh.decode(e)}function UC(e){return Kh.encode(e).finish()}class OC{data;constructor(t){let n;if("bytes"in t?n=FC(t.bytes):n=t.data,!n.matrix)throw new Error("Invalid ScaleData: Missing required properties (factor or frame).");this.data=n}get bytes(){return kC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const t=this.data.matrix,n=new he;return n.set(t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15]),n}}function FC(e){return Qh.decode(e)}function kC(e){return Qh.encode(e).finish()}class BC{data;constructor(t){let n;if("bytes"in t?n=zC(t.bytes):n=t.data,!n.matrix)throw new Error("Invalid ShearData: Missing required properties (matrix).");this.data=n}get bytes(){return VC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const t=this.data.matrix,n=new he;return n.set(t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15]),n}}function zC(e){return tf.decode(e)}function VC(e){return tf.encode(e).finish()}class HC{data;_frame;constructor(t){let n;if("bytes"in t?n=GC(t.bytes):n=t.data,!n.radius||!n.frame)throw new Error("Invalid SphereData: Missing required properties (radius or frame).");this.data=n}get bytes(){return WC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get frame(){return this._frame||(this._frame=new ri({data:this.data.frame})),this._frame}buildGeometry(t=64){const n=new jo(this.radius,t,t),i=new _t(n),r=yr(this.data.frame);return i.applyMatrix4(r),i}}function GC(e){return Gh.decode(e)}function WC(e){return Gh.encode(e).finish()}class XC{data;_frame;constructor(t){let n;if("bytes"in t?n=qC(t.bytes):n=t.data,!n.radiusAxis||!n.radiusPipe||!n.frame)throw new Error("Invalid TorusData: Missing required properties (major, minor, or frame).");this.data=n}get bytes(){return YC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radiusAxis(){return this.data.radiusAxis}get radiusPipe(){return this.data.radiusPipe}get frame(){return this._frame||(this._frame=new ri({data:this.data.frame})),this._frame}buildGeometry(t=64,n=64){const i=new hr(this.radiusAxis,this.radiusPipe,t,n),r=new _t(i),s=yr(this.data.frame);return r.applyMatrix4(s),r}}function qC(e){return Yh.decode(e)}function YC(e){return Yh.encode(e).finish()}class JC{data;_translationVector;constructor(t){let n;if("bytes"in t?n=$C(t.bytes):n=t.data,!n.translationVector)throw new Error("Invalid TranslationData: Missing required properties (vector or frame).");this.data=n}get bytes(){return ZC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get translationVector(){return this._translationVector||(this._translationVector=new Hs({data:this.data.translationVector})),this._translationVector}}function $C(e){return Zh.decode(e)}function ZC(e){return Zh.encode(e).finish()}function Dm(){return{indices:[]}}const fr={encode(e,t=new ne){t.uint32(10).fork();for(const n of e.indices)t.uint32(n);return t.join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Dm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s===8){r.indices.push(n.uint32());continue}if(s===10){const o=n.uint32()+n.pos;for(;n.pos<o;)r.indices.push(n.uint32());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{indices:globalThis.Array.isArray(e?.indices)?e.indices.map(t=>globalThis.Number(t)):[]}},toJSON(e){const t={};return e.indices?.length&&(t.indices=e.indices.map(n=>Math.round(n))),t},create(e){return fr.fromPartial(e??{})},fromPartial(e){const t=Dm();return t.indices=e.indices?.map(n=>n)||[],t}};function Im(){return{guid:void 0,name:void 0,vertices:[],faces:[]}}const Cf={encode(e,t=new ne){e.guid!==void 0&&t.uint32(10).string(e.guid),e.name!==void 0&&t.uint32(18).string(e.name);for(const n of e.vertices)Ht.encode(n,t.uint32(26).fork()).join();for(const n of e.faces)fr.encode(n,t.uint32(34).fork()).join();return t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Im();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.vertices.push(Ht.decode(n,n.uint32()));continue}case 4:{if(s!==34)break;r.faces.push(fr.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:ml(e.guid)?globalThis.String(e.guid):void 0,name:ml(e.name)?globalThis.String(e.name):void 0,vertices:globalThis.Array.isArray(e?.vertices)?e.vertices.map(t=>Ht.fromJSON(t)):[],faces:globalThis.Array.isArray(e?.faces)?e.faces.map(t=>fr.fromJSON(t)):[]}},toJSON(e){const t={};return e.guid!==void 0&&(t.guid=e.guid),e.name!==void 0&&(t.name=e.name),e.vertices?.length&&(t.vertices=e.vertices.map(n=>Ht.toJSON(n))),e.faces?.length&&(t.faces=e.faces.map(n=>fr.toJSON(n))),t},create(e){return Cf.fromPartial(e??{})},fromPartial(e){const t=Im();return t.guid=e.guid??void 0,t.name=e.name??void 0,t.vertices=e.vertices?.map(n=>Ht.fromPartial(n))||[],t.faces=e.faces?.map(n=>fr.fromPartial(n))||[],t}};function Lm(){return{vertexIndices:[]}}const dr={encode(e,t=new ne){t.uint32(10).fork();for(const n of e.vertexIndices)t.int32(n);return t.join(),t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Lm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s===8){r.vertexIndices.push(n.int32());continue}if(s===10){const o=n.uint32()+n.pos;for(;n.pos<o;)r.vertexIndices.push(n.int32());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{vertexIndices:globalThis.Array.isArray(e?.vertexIndices)?e.vertexIndices.map(t=>globalThis.Number(t)):globalThis.Array.isArray(e?.vertex_indices)?e.vertex_indices.map(t=>globalThis.Number(t)):[]}},toJSON(e){const t={};return e.vertexIndices?.length&&(t.vertexIndices=e.vertexIndices.map(n=>Math.round(n))),t},create(e){return dr.fromPartial(e??{})},fromPartial(e){const t=Lm();return t.vertexIndices=e.vertexIndices?.map(n=>n)||[],t}};function Nm(){return{guid:void 0,name:void 0,vertices:[],faces:[]}}const Rf={encode(e,t=new ne){e.guid!==void 0&&t.uint32(10).string(e.guid),e.name!==void 0&&t.uint32(18).string(e.name);for(const n of e.vertices)Ht.encode(n,t.uint32(26).fork()).join();for(const n of e.faces)dr.encode(n,t.uint32(34).fork()).join();return t},decode(e,t){const n=e instanceof vt?e:new vt(e),i=t===void 0?n.len:n.pos+t,r=Nm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.vertices.push(Ht.decode(n,n.uint32()));continue}case 4:{if(s!==34)break;r.faces.push(dr.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(e){return{guid:ml(e.guid)?globalThis.String(e.guid):void 0,name:ml(e.name)?globalThis.String(e.name):void 0,vertices:globalThis.Array.isArray(e?.vertices)?e.vertices.map(t=>Ht.fromJSON(t)):[],faces:globalThis.Array.isArray(e?.faces)?e.faces.map(t=>dr.fromJSON(t)):[]}},toJSON(e){const t={};return e.guid!==void 0&&(t.guid=e.guid),e.name!==void 0&&(t.name=e.name),e.vertices?.length&&(t.vertices=e.vertices.map(n=>Ht.toJSON(n))),e.faces?.length&&(t.faces=e.faces.map(n=>dr.toJSON(n))),t},create(e){return Rf.fromPartial(e??{})},fromPartial(e){const t=Nm();return t.guid=e.guid??void 0,t.name=e.name??void 0,t.vertices=e.vertices?.map(n=>Ht.fromPartial(n))||[],t.faces=e.faces?.map(n=>dr.fromPartial(n))||[],t}};function ml(e){return e!=null}class KC{data;constructor(t){let n;if("bytes"in t?n=QC(t.bytes):n=t.data,!n.vertexIndices)throw new Error("Invalid FaceData: Missing required property 'vertices'.");this.data=n}get bytes(){return jC(this.data)}get vertexIndices(){return this.data.vertexIndices}}function QC(e){return dr.decode(e)}function jC(e){return dr.encode(e).finish()}class tR{data;_points;_faces;constructor(t){let n;if("bytes"in t?n=eR(t.bytes):n=t.data,!n.vertices||!n.faces)throw new Error("Invalid PolyhedronData: Missing required properties (vertices or faces).");this.data=n}get bytes(){return nR(this.data)}get guid(){return this.data.guid?this.data.guid:""}get name(){return this.data.name?this.data.name:""}get vertices(){if(!this._points){this._points=[];for(const t of this.data.vertices){const n=new qn({data:t});this._points.push(n)}}return this._points}get faces(){if(!this._faces){this._faces=[];for(const t of this.data.faces){const n=new KC({data:t});this._faces.push(n)}}return this._faces}buildGeometry(){const t=new fe,n=new Float32Array(this.vertices.length*3);for(let o=0;o<this.vertices.length;o++){const a=this.vertices[o];n[o*3]=a.x,n[o*3+1]=a.y,n[o*3+2]=a.z}const i=[];for(const o of this.faces){const a=o.vertexIndices;for(let l=1;l<a.length-1;l++)i.push(a[0],a[l],a[l+1])}t.setIndex(i),t.setAttribute("position",new bn(n,3)),t.computeVertexNormals();const r=new Zs({color:52292,side:xn});return new _t(t,r)}}function eR(e){return Rf.decode(e)}function nR(e){return Rf.encode(e).finish()}class iR{data;constructor(t){let n;if("bytes"in t?n=rR(t.bytes):n=t.data,!n.indices)throw new Error("Invalid FaceList: Missing required property 'faces'.");this.data=n}get bytes(){return sR(this.data)}get indices(){return this.data.indices}}function rR(e){return fr.decode(e)}function sR(e){return fr.encode(e).finish()}class oR{data;_vertices;constructor(t){let n;if("bytes"in t?n=aR(t.bytes):n=t.data,!n.vertices||!n.faces)throw new Error("Invalid MeshData: Missing required properties (vertices or faces).");this.data=n}get bytes(){return lR(this.data)}get guid(){return this.data.guid?this.data.guid:""}get name(){return this.data.name?this.data.name:""}get vertices(){if(!this._vertices){this._vertices=[];for(const t of this.data.vertices){const n=new qn({data:t});this._vertices.push(n)}}return this._vertices}get faces(){const t=[];for(const n of this.data.faces){const i=new iR({data:n});t.push(i)}return t}buildGeometry(){const t=new fe,n=new Float32Array(this.vertices.length*3);this.vertices.forEach((s,o)=>{n[o*3]=s.x,n[o*3+1]=s.y,n[o*3+2]=s.z});const i=[];for(const s of this.faces){const o=s.indices;for(let a=1;a<o.length-1;a++)i.push(o[0],o[a],o[a+1])}t.setIndex(i),t.setAttribute("position",new bn(n,3)),t.computeVertexNormals();const r=new Zs({color:30719,flatShading:!0,side:xn});return new _t(t,r)}}function aR(e){return Cf.decode(e)}function lR(e){return Cf.encode(e).finish()}class M_{data;constructor(t){let n;"bytes"in t?n=cR(t.bytes):n=t.data,this.data=n}get bytes(){return uR(this.data)}get asDict(){const t={};for(const n in this.data.items)Object.prototype.hasOwnProperty.call(this.data.items,n)&&(t[n]=this.data.items[n]);return t}}function cR(e){return lr.decode(e)}function uR(e){return lr.encode(e).finish()}const hR=new Map([["ArcData",OP],["BezierData",BP],["BoxData",HP],["CapsuleData",XP],["CircleData",b_],["ConeData",JP],["CylinderData",KP],["EllipseData",tC],["FrameData",ri],["HyperbolaData",iC],["LineData",oC],["ParabolaData",cC],["PlaneData",fC],["PointData",qn],["PointcloudData",mC],["PolygonData",vC],["PolylineData",SC],["ProjectionData",wC],["QuaternionData",AC],["ReflectionData",RC],["RotationData",LC],["ScaleData",OC],["ShearData",BC],["SphereData",HC],["TorusData",XC],["TransformationData",EP],["TranslationData",JC],["VectorData",Hs],["MeshData",oR],["PolyhedronData",tR],["DictData",M_]]);function fR(e){const t=w_(e),n=dR(t);return n?new n({bytes:t.value}):null}function w_(e){return P0.decode(e).data.message}function dR(e){const n=e.typeUrl.split(".").slice(-1)[0];return hR.get(n)||null}const Um={type:"change"},Df={type:"start"},E_={type:"end"},Ba=new Ko,Om=new Oi,pR=Math.cos(70*Ku.DEG2RAD),qe=new D,En=2*Math.PI,Ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zc=1e-6;class mR extends g_{constructor(t,n=null){super(t,n),this.state=Ee.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:Ss.ROTATE,TWO:Ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new en,this._lastTargetPosition=new D,this._quat=new en().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nm,this._sphericalDelta=new nm,this._scale=1,this._panOffset=new D,this._rotateStart=new mt,this._rotateEnd=new mt,this._rotateDelta=new mt,this._panStart=new mt,this._panEnd=new mt,this._panDelta=new mt,this._dollyStart=new mt,this._dollyEnd=new mt,this._dollyDelta=new mt,this._dollyDirection=new D,this._mouse=new mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_R.bind(this),this._onPointerDown=gR.bind(this),this._onPointerUp=vR.bind(this),this._onContextMenu=ER.bind(this),this._onMouseWheel=SR.bind(this),this._onKeyDown=bR.bind(this),this._onTouchStart=MR.bind(this),this._onTouchMove=wR.bind(this),this._onMouseDown=xR.bind(this),this._onMouseMove=yR.bind(this),this._interceptControlDown=TR.bind(this),this._interceptControlUp=AR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Um),this.update(),this.state=Ee.NONE}update(t=null){const n=this.object.position;qe.copy(n).sub(this.target),qe.applyQuaternion(this._quat),this._spherical.setFromVector3(qe),this.autoRotate&&this.state===Ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=En:i>Math.PI&&(i-=En),r<-Math.PI?r+=En:r>Math.PI&&(r-=En),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(qe.setFromSpherical(this._spherical),qe.applyQuaternion(this._quatInverse),n.copy(this.target).add(qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=qe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ba.origin.copy(this.object.position),Ba.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ba.direction))<pR?this.object.lookAt(this.target):(Om.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ba.intersectPlane(Om,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>zc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zc||this._lastTargetPosition.distanceToSquared(this.target)>zc?(this.dispatchEvent(Um),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?En/60*this.autoRotateSpeed*t:En/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){qe.setFromMatrixColumn(n,0),qe.multiplyScalar(-t),this._panOffset.add(qe)}_panUp(t,n){this.screenSpacePanning===!0?qe.setFromMatrixColumn(n,1):(qe.setFromMatrixColumn(n,0),qe.crossVectors(this.object.up,qe)),qe.multiplyScalar(t),this._panOffset.add(qe)}_pan(t,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;qe.copy(r).sub(this.target);let s=qe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(En*this._rotateDelta.x/n.clientHeight),this._rotateUp(En*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,r=t.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(En*this._rotateDelta.x/n.clientHeight),this._rotateUp(En*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,r=t.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+n.x)*.5,a=(t.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new mt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function gR(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function _R(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function vR(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(E_),this.state=Ee.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function xR(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Wr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Ee.DOLLY;break;case Wr.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Ee.ROTATE}break;case Wr.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Ee.PAN}break;default:this.state=Ee.NONE}this.state!==Ee.NONE&&this.dispatchEvent(Df)}function yR(e){switch(this.state){case Ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function SR(e){this.enabled===!1||this.enableZoom===!1||this.state!==Ee.NONE||(e.preventDefault(),this.dispatchEvent(Df),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(E_))}function bR(e){this.enabled!==!1&&this._handleKeyDown(e)}function MR(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Ee.TOUCH_ROTATE;break;case Ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Ee.TOUCH_PAN;break;default:this.state=Ee.NONE}break;case 2:switch(this.touches.TWO){case Ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Ee.TOUCH_DOLLY_PAN;break;case Ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Ee.TOUCH_DOLLY_ROTATE;break;default:this.state=Ee.NONE}break;default:this.state=Ee.NONE}this.state!==Ee.NONE&&this.dispatchEvent(Df)}function wR(e){switch(this._trackPointer(e),this.state){case Ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Ee.NONE}}function ER(e){this.enabled!==!1&&e.preventDefault()}function TR(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function AR(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ir=new p_,an=new D,ir=new D,Le=new en,Fm={X:new D(1,0,0),Y:new D(0,1,0),Z:new D(0,0,1)},Vc={type:"change"},km={type:"mouseDown",mode:null},Bm={type:"mouseUp",mode:null},zm={type:"objectChange"};class PR extends g_{constructor(t,n=null){super(void 0,n);const i=new NR(this);this._root=i;const r=new UR;this._gizmo=r,i.add(r);const s=new OR;this._plane=s,i.add(s);const o=this;function a(y,x){let A=x;Object.defineProperty(o,y,{get:function(){return A!==void 0?A:x},set:function(P){A!==P&&(A=P,s[y]=P,r[y]=P,o.dispatchEvent({type:y+"-changed",value:P}),o.dispatchEvent(Vc))}}),o[y]=x,s[y]=x,r[y]=x}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const l=new D,c=new D,u=new en,h=new en,f=new D,p=new en,g=new D,v=new D,m=new D,d=0,S=new D;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",u),a("worldQuaternionStart",h),a("cameraPosition",f),a("cameraQuaternion",p),a("pointStart",g),a("pointEnd",v),a("rotationAxis",m),a("rotationAngle",d),a("eye",S),this._offset=new D,this._startNorm=new D,this._endNorm=new D,this._cameraScale=new D,this._parentPosition=new D,this._parentQuaternion=new en,this._parentQuaternionInv=new en,this._parentScale=new D,this._worldScaleStart=new D,this._worldQuaternionInv=new en,this._worldScale=new D,this._positionStart=new D,this._quaternionStart=new en,this._scaleStart=new D,this._getPointer=CR.bind(this),this._onPointerDown=DR.bind(this),this._onPointerHover=RR.bind(this),this._onPointerMove=IR.bind(this),this._onPointerUp=LR.bind(this),n!==null&&this.connect(n)}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&Ir.setFromCamera(t,this.camera);const n=Hc(this._gizmo.picker[this.mode],Ir);n?this.axis=n.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&Ir.setFromCamera(t,this.camera);const n=Hc(this._plane,Ir,!0);n&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(n.point).sub(this.worldPositionStart)),this.dragging=!0,km.mode=this.mode,this.dispatchEvent(km)}}pointerMove(t){const n=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(n==="E"||n==="XYZE"||n==="XYZ")&&(s="world"),r===void 0||n===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&Ir.setFromCamera(t,this.camera);const o=Hc(this._plane,Ir,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&n!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),n.indexOf("X")===-1&&(this._offset.x=0),n.indexOf("Y")===-1&&(this._offset.y=0),n.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&n!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(Le.copy(this._quaternionStart).invert()),n.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(an.setFromMatrixPosition(r.parent.matrixWorld)),n.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(an.setFromMatrixPosition(r.parent.matrixWorld)))),r.position.x=Math.max(this.minX,Math.min(this.maxX,r.position.x)),r.position.y=Math.max(this.minY,Math.min(this.maxY,r.position.y)),r.position.z=Math.max(this.minZ,Math.min(this.maxZ,r.position.z));else if(i==="scale"){if(n.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),ir.set(a,a,a)}else an.copy(this.pointStart),ir.copy(this.pointEnd),an.applyQuaternion(this._worldQuaternionInv),ir.applyQuaternion(this._worldQuaternionInv),ir.divide(an),n.search("X")===-1&&(ir.x=1),n.search("Y")===-1&&(ir.y=1),n.search("Z")===-1&&(ir.z=1);r.scale.copy(this._scaleStart).multiply(ir),this.scaleSnap&&(n.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(an.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;n==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(an.copy(this.rotationAxis).cross(this.eye))*a):(n==="X"||n==="Y"||n==="Z")&&(this.rotationAxis.copy(Fm[n]),an.copy(Fm[n]),s==="local"&&an.applyQuaternion(this.worldQuaternion),an.cross(this.eye),an.length()===0?l=!0:this.rotationAngle=this._offset.dot(an.normalize())*a),(n==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&n!=="E"&&n!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(Le.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(Le.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Vc),this.dispatchEvent(zm)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(Bm.mode=this.mode,this.dispatchEvent(Bm)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Vc),this.dispatchEvent(zm),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Ir}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}setColors(t,n,i,r){const s=this._gizmo.materialLib;s.xAxis.color.set(t),s.yAxis.color.set(n),s.zAxis.color.set(i),s.active.color.set(r),s.xAxisTransparent.color.set(t),s.yAxisTransparent.color.set(n),s.zAxisTransparent.color.set(i),s.activeTransparent.color.set(r),s.xAxis._color&&s.xAxis._color.set(t),s.yAxis._color&&s.yAxis._color.set(n),s.zAxis._color&&s.zAxis._color.set(i),s.active._color&&s.active._color.set(r),s.xAxisTransparent._color&&s.xAxisTransparent._color.set(t),s.yAxisTransparent._color&&s.yAxisTransparent._color.set(n),s.zAxisTransparent._color&&s.zAxisTransparent._color.set(i),s.activeTransparent._color&&s.activeTransparent._color.set(r)}}function CR(e){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:e.button};{const t=this.domElement.getBoundingClientRect();return{x:(e.clientX-t.left)/t.width*2-1,y:-(e.clientY-t.top)/t.height*2+1,button:e.button}}}function RR(e){if(this.enabled)switch(e.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(e));break}}function DR(e){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(e)),this.pointerDown(this._getPointer(e)))}function IR(e){this.enabled&&this.pointerMove(this._getPointer(e))}function LR(e){this.enabled&&(this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(e)))}function Hc(e,t,n){const i=t.intersectObject(e,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||n)return i[r];return!1}const za=new ei,Pe=new D(0,1,0),Vm=new D(0,0,0),Hm=new he,Va=new en,tl=new en,li=new D,Gm=new he,vo=new D(1,0,0),Nr=new D(0,1,0),xo=new D(0,0,1),Ha=new D,co=new D,uo=new D;class NR extends Te{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){const n=this.controls;n.object!==void 0&&(n.object.updateMatrixWorld(),n.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):n.object.parent.matrixWorld.decompose(n._parentPosition,n._parentQuaternion,n._parentScale),n.object.matrixWorld.decompose(n.worldPosition,n.worldQuaternion,n._worldScale),n._parentQuaternionInv.copy(n._parentQuaternion).invert(),n._worldQuaternionInv.copy(n.worldQuaternion).invert()),n.camera.updateMatrixWorld(),n.camera.matrixWorld.decompose(n.cameraPosition,n.cameraQuaternion,n._cameraScale),n.camera.isOrthographicCamera?n.camera.getWorldDirection(n.eye).negate():n.eye.copy(n.cameraPosition).sub(n.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class UR extends Te{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new xr({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=new ii({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=t.clone();i.opacity=.15;const r=n.clone();r.opacity=.5;const s=t.clone();s.color.setHex(16711680);const o=t.clone();o.color.setHex(65280);const a=t.clone();a.color.setHex(255);const l=t.clone();l.color.setHex(16711680),l.opacity=.5;const c=t.clone();c.color.setHex(65280),c.opacity=.5;const u=t.clone();u.color.setHex(255),u.opacity=.5;const h=t.clone();h.opacity=.25;const f=t.clone();f.color.setHex(16776960),f.opacity=.25;const p=t.clone();p.color.setHex(16776960);const g=t.clone();g.color.setHex(7895160),this.materialLib={xAxis:s,yAxis:o,zAxis:a,active:p,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:u,activeTransparent:f};const v=new je(0,.04,.1,12);v.translate(0,.05,0);const m=new ke(.08,.08,.08);m.translate(0,.04,0);const d=new fe;d.setAttribute("position",new te([0,0,0,1,0,0],3));const S=new je(.0075,.0075,.5,3);S.translate(0,.25,0);function y(J,W){const k=new hr(J,.0075,3,64,W*Math.PI*2);return k.rotateY(Math.PI/2),k.rotateX(Math.PI/2),k}function x(){const J=new fe;return J.setAttribute("position",new te([0,0,0,1,1,1],3)),J}const A={X:[[new _t(v,s),[.5,0,0],[0,0,-Math.PI/2]],[new _t(v,s),[-.5,0,0],[0,0,Math.PI/2]],[new _t(S,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new _t(v,o),[0,.5,0]],[new _t(v,o),[0,-.5,0],[Math.PI,0,0]],[new _t(S,o)]],Z:[[new _t(v,a),[0,0,.5],[Math.PI/2,0,0]],[new _t(v,a),[0,0,-.5],[-Math.PI/2,0,0]],[new _t(S,a),null,[Math.PI/2,0,0]]],XYZ:[[new _t(new bs(.1,0),h),[0,0,0]]],XY:[[new _t(new ke(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new _t(new ke(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _t(new ke(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},P={X:[[new _t(new je(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new _t(new je(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new _t(new je(.2,0,.6,4),i),[0,.3,0]],[new _t(new je(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new _t(new je(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new _t(new je(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new _t(new bs(.2,0),i)]],XY:[[new _t(new ke(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new _t(new ke(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _t(new ke(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},C={START:[[new _t(new bs(.01,2),r),null,null,null,"helper"]],END:[[new _t(new bs(.01,2),r),null,null,null,"helper"]],DELTA:[[new tn(x(),r),null,null,null,"helper"]],X:[[new tn(d,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new tn(d,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new tn(d,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},R={XYZE:[[new _t(y(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new _t(y(.5,.5),s)]],Y:[[new _t(y(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new _t(y(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new _t(y(.75,1),f),null,[0,Math.PI/2,0]]]},b={AXIS:[[new tn(d,r),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new _t(new jo(.25,10,8),i)]],X:[[new _t(new hr(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new _t(new hr(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new _t(new hr(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new _t(new hr(.75,.1,2,24),i)]]},L={X:[[new _t(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new _t(S,s),[0,0,0],[0,0,-Math.PI/2]],[new _t(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new _t(m,o),[0,.5,0]],[new _t(S,o)],[new _t(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new _t(m,a),[0,0,.5],[Math.PI/2,0,0]],[new _t(S,a),[0,0,0],[Math.PI/2,0,0]],[new _t(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new _t(new ke(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new _t(new ke(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _t(new ke(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new _t(new ke(.1,.1,.1),h)]]},V={X:[[new _t(new je(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new _t(new je(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new _t(new je(.2,0,.6,4),i),[0,.3,0]],[new _t(new je(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new _t(new je(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new _t(new je(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new _t(new ke(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new _t(new ke(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _t(new ke(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new _t(new ke(.2,.2,.2),i),[0,0,0]]]},q={X:[[new tn(d,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new tn(d,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new tn(d,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function j(J){const W=new Te;for(const k in J)for(let H=J[k].length;H--;){const ct=J[k][H][0].clone(),pt=J[k][H][1],ft=J[k][H][2],kt=J[k][H][3],Lt=J[k][H][4];ct.name=k,ct.tag=Lt,pt&&ct.position.set(pt[0],pt[1],pt[2]),ft&&ct.rotation.set(ft[0],ft[1],ft[2]),kt&&ct.scale.set(kt[0],kt[1],kt[2]),ct.updateMatrix();const Zt=ct.geometry.clone();Zt.applyMatrix4(ct.matrix),ct.geometry=Zt,ct.renderOrder=1/0,ct.position.set(0,0,0),ct.rotation.set(0,0,0),ct.scale.set(1,1,1),W.add(ct)}return W}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=j(A)),this.add(this.gizmo.rotate=j(R)),this.add(this.gizmo.scale=j(L)),this.add(this.picker.translate=j(P)),this.add(this.picker.rotate=j(M)),this.add(this.picker.scale=j(V)),this.add(this.helper.translate=j(C)),this.add(this.helper.rotate=j(b)),this.add(this.helper.scale=j(q)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:tl;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Le.setFromEuler(za.set(0,0,0)),o.quaternion.copy(i).multiply(Le),Math.abs(Pe.copy(vo).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Le.setFromEuler(za.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(Le),Math.abs(Pe.copy(Nr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Le.setFromEuler(za.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(Le),Math.abs(Pe.copy(xo).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Le.setFromEuler(za.set(0,Math.PI/2,0)),Pe.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Hm.lookAt(Vm,Pe,Nr)),o.quaternion.multiply(Le),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),an.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),an.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(an),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Pe.copy(vo).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Pe.copy(Nr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Pe.copy(xo).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Pe.copy(xo).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Pe.copy(vo).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Pe.copy(Nr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Va.copy(i),Pe.copy(this.eye).applyQuaternion(Le.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Hm.lookAt(this.eye,Vm,Nr)),o.name==="X"&&(Le.setFromAxisAngle(vo,Math.atan2(-Pe.y,Pe.z)),Le.multiplyQuaternions(Va,Le),o.quaternion.copy(Le)),o.name==="Y"&&(Le.setFromAxisAngle(Nr,Math.atan2(Pe.x,Pe.z)),Le.multiplyQuaternions(Va,Le),o.quaternion.copy(Le)),o.name==="Z"&&(Le.setFromAxisAngle(xo,Math.atan2(Pe.y,Pe.x)),Le.multiplyQuaternions(Va,Le),o.quaternion.copy(Le))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(t)}}class OR extends _t{constructor(){super(new Qo(1e5,1e5,2,2),new xr({visible:!1,wireframe:!0,side:xn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let n=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(n="local"),Ha.copy(vo).applyQuaternion(n==="local"?this.worldQuaternion:tl),co.copy(Nr).applyQuaternion(n==="local"?this.worldQuaternion:tl),uo.copy(xo).applyQuaternion(n==="local"?this.worldQuaternion:tl),Pe.copy(co),this.mode){case"translate":case"scale":switch(this.axis){case"X":Pe.copy(this.eye).cross(Ha),li.copy(Ha).cross(Pe);break;case"Y":Pe.copy(this.eye).cross(co),li.copy(co).cross(Pe);break;case"Z":Pe.copy(this.eye).cross(uo),li.copy(uo).cross(Pe);break;case"XY":li.copy(uo);break;case"YZ":li.copy(Ha);break;case"XZ":Pe.copy(uo),li.copy(co);break;case"XYZ":case"E":li.set(0,0,0);break}break;default:li.set(0,0,0)}li.length()===0?this.quaternion.copy(this.cameraQuaternion):(Gm.lookAt(an.set(0,0,0),li,Pe),this.quaternion.setFromRotationMatrix(Gm)),super.updateMatrixWorld(t)}}const Jr={},Gs={};function Wm(e){let t;switch(e.type.value){case"standard_material":t=FR(e);break;case"line_material":t=kR(e);break;case"point_material":t=BR(e);break;case"physical_material":t=zR(e);break}Gs[e.guid.value]=t,Jr[e.geometry_guid.value]=e.guid.value,WR(e.geometry_guid.value,t)}function FR(e){let t=e.color.value;t=t.replace("#","0x");let n=e.emissive.value;return n=n.replace("#","0x"),new Zs({color:parseInt(t),metalness:e.metalness.value,roughness:e.roughness.value,emissive:parseInt(n),emissiveIntensity:e.emissive_intensity.value,flatShading:e.flat_shading.value,wireframe:e.wireframe.value,side:xn})}function kR(e){let t=e.color.value;return t=t.replace("#","0x"),new ii({color:parseInt(t)})}function BR(e){let t=e.color.value;return t=t.replace("#","0x"),new _f({color:parseInt(t),size:e.size.value})}function zR(e){let t=e.color.value;t=t.replace("#","0x");let n=e.emissive.value;n=n.replace("#","0x");let i=e.attenuation_color.value;i=i.replace("#","0x");let r=e.sheen_color.value;r=r.replace("#","0x");let s=e.specular_color.value;return s=s.replace("#","0x"),new uw({color:parseInt(t),metalness:e.metalness.value,roughness:e.roughness.value,emissive:parseInt(n),emissiveIntensity:e.emissive_intensity.value,flatShading:e.flat_shading.value,wireframe:e.wireframe.value,side:xn,anisotropy:e.anisotropy.value,anisotropyRotation:e.anisotropy_rotation.value,attenuationColor:parseInt(i),attenuationDistance:e.attenuation_distance.value,clearcoat:e.clearcoat.value,clearcoatRoughness:e.clearcoat_roughness.value,dispersion:e.dispersion.value,ior:e.ior.value,iridescence:e.iridescence.value,iridescenceIOR:e.iridescence_ior.value,iridescenceThicknessRange:[e.iridescence_thickness_start.value,e.iridescence_thickness_end.value],reflectivity:e.reflectivity.value,sheen:e.sheen.value,sheenColor:parseInt(r),specularColor:parseInt(s),sheenRoughness:e.sheen_roughness.value,specularIntensity:e.specular_intensity.value,thickness:e.thickness.value,transmission:e.transmission.value})}const zi={},VR=["Line","Point","Vector","Frame","Plane","Polyline"];function HR(e){console.log(e.name),VR.includes(e.name)&&GR(e);const t=e.guid,n=zi[t],i=e.buildGeometry();if(!i||!(i instanceof _t))return;const r=i.geometry;if(r.computeBoundingSphere(),r.computeBoundingBox(),n instanceof _t){const s=n.geometry;n.geometry=r,n.position.copy(i.position),n.quaternion.copy(i.quaternion),n.scale.copy(i.scale),s&&s.dispose()}else{if(Jr[t]){const s=Jr[t];Gs[s]&&(i.material=Gs[s])}else i.material=new Zs({color:35071,roughness:.5,metalness:.5});Ue.add(i),zi[t]=i}}function GR(e){const t=e.buildGeometry(),n=e.guid;let i;if(Jr[n]){const r=Jr[n];Gs[r]&&(i=Gs[r])}else return;t instanceof tn||t instanceof vf?t.material=i:(t instanceof Pf||t instanceof void 0)&&t.setColor(i.color),Ue.add(t),zi[n]=t}function WR(e,t){const n=zi[e];if(n){if(n){n.material=t;return}(n instanceof Pf||n instanceof void 0)&&n.setColor(t.color)}}const Vi=_r({title:"Object Infos",isVisible:!1,data:null}),T_=_r({value:!0});function XR(){Vi.isVisible=!0}function qR(){Vi.isVisible=!1}function A_(e){Vi.data=e}document.addEventListener("keydown",e=>{(e.key==="I"||e.key==="i")&&(Vi.isVisible?qR():XR())});let gl,Ls,_l;class YR{tControl;constructor(){this.tControl=new PR(Wn,Dn.domElement),Ue.add(this.tControl.getHelper()),this.setupEventListeners()}setupEventListeners(){this.tControl.addEventListener("dragging-changed",t=>{ea.enabled=!t.value}),window.addEventListener("keydown",t=>{switch(t.key){case"w":this.tControl.setMode("translate");break;case"e":this.tControl.setMode("rotate");break;case"r":this.tControl.setMode("scale");break;case"Escape":this.tControl.detach();break}})}get controls(){return this.tControl}}class JR{raycaster;pickedObject;constructor(){this.raycaster=new p_,this.pickedObject=null}pick(t,n){if(!T_.value)return;this.raycaster.setFromCamera(t,Wn);const i=this.raycaster.intersectObjects(zi?Object.values(zi):[],!0);if(i.length){this.pickedObject=i[0].object,_l.attach(this.pickedObject);const r=Object.keys(zi).find(o=>zi[o]===this.pickedObject);R_({dispatch:"object_picked",guid:r}),console.log("Picked object key:",r)}else this.pickedObject&&(this.pickedObject=null,_l.detach(),A_(null))}}function $R(e){const t=Ls.getBoundingClientRect();return{x:(e.clientX-t.left)*(Ls.width/t.width),y:(e.clientY-t.top)*(Ls.height/t.height)}}function ZR(e){const t=$R(e);gl.x=t.x/Ls.width*2-1,gl.y=t.y/Ls.height*-2+1}function KR(e){return Ls=document.querySelector("canvas"),gl={x:0,y:0},_l=new YR().controls,window.addEventListener("mousedown",n=>{n.button===0&&(_l.dragging||(ZR(n),e.pick(gl,Ue)))}),e}Te.DEFAULT_UP.set(0,0,1);const Ue=new wM,Wn=new Pn(60,window.innerWidth/window.innerHeight,.1,1e3);Wn.position.set(8,-15,15);Wn.zoom=1;const Dn=new wP({antialias:!0});Dn.setSize(window.innerWidth,window.innerHeight);Dn.setPixelRatio(window.devicePixelRatio);Dn.toneMapping=rf;Dn.shadowMap.enabled=!0;Dn.shadowMap.type=C0;Dn.toneMappingExposure=2.5;Dn.physicallyCorrectLights=!0;Dn.outputColorSpace=On;document.body.appendChild(Dn.domElement);const ea=new mR(Wn,Dn.domElement);ea.enableDamping=!0;ea.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:Wr.ROTATE};const P_=new m_(5);Ue.add(P_);const QR=new JR;KR(QR);function C_(){requestAnimationFrame(C_),ea.update(),Dn.render(Ue,Wn)}C_();window.addEventListener("resize",()=>{Wn.aspect=window.innerWidth/window.innerHeight,Wn.updateProjectionMatrix(),Dn.setSize(window.innerWidth,window.innerHeight)});function jR(e){switch(e.type.value){case"background_color":t3(e);break;case"controls_damping":ea.enableDamping=e.damping.value;break;case"world_axis":P_.visible=e.show.value;break;case"picker":T_.value=e.enabled.value;break;case"camera_fov":Wn.fov=e.fov.value,Wn.updateProjectionMatrix();break;case"camera_zoom":Wn.zoom=e.zoom.value,Wn.updateProjectionMatrix();break;default:console.warn("Unknown scene type:",e.type.value)}}function t3(e){let t=e.color.value;t=t.replace("#","0x"),t=parseInt(t),Ue.background=new $t(t)}class e3 extends tn{constructor(t,n){const i=[1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],r=new fe;r.setAttribute("position",new te(i,3)),r.computeBoundingSphere();const s=new ii({fog:!1});super(r,s),this.light=t,this.color=n,this.type="RectAreaLightHelper";const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],a=new fe;a.setAttribute("position",new te(o,3)),a.computeBoundingSphere(),this.add(new _t(a,new xr({side:fn,fog:!1})))}updateMatrixWorld(){if(this.scale.set(.5*this.light.width,.5*this.light.height,1),this.color!==void 0)this.material.color.set(this.color),this.children[0].material.color.set(this.color);else{this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);const t=this.material.color,n=Math.max(t.r,t.g,t.b);n>1&&t.multiplyScalar(1/n),this.children[0].material.color.copy(this.material.color)}this.matrixWorld.extractRotation(this.light.matrixWorld).scale(this.scale).copyPosition(this.light.matrixWorld),this.children[0].matrixWorld.copy(this.matrixWorld)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}class Ol extends _t{constructor(){const t=Ol.SkyShader,n=new ni({name:t.name,uniforms:Q0.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:fn,depthWrite:!1});super(new ke(1,1,1),n),this.isSky=!0}}Ol.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const He={},Xn={};function Xm(e){e.type.value=="point_light"?n3(e):e.type.value=="spot_light"?i3(e):e.type.value=="rect_light"?r3(e):e.type.value=="sunlight"?s3(e):e.type.value=="sky"?o3(e):e.type.value=="ambient_light"&&a3(e)}function n3(e){let t,n;He[e.guid.value]?t=He[e.guid.value]:(t=new yw,Ue.add(t));let i=e.color.value;i=i.replace("#","0x"),i=parseInt(i),t.color.set(i),t.intensity=e.intensity.value,t.distance=e.distance.value,t.decay=e.decay.value,t.position.set(e.x.value,e.y.value,e.z.value),t.castShadow=!0,t.shadow.bias=-.002,t.shadow.normalBias=.02,Xn[e.guid.value]&&e.helper.value?(n=Xn[e.guid.value],n.update()):e.helper.value&&(n=new Ew(t,.5),Ue.add(n)),He[e.guid.value]=t,n&&(Xn[e.guid.value]=n)}function i3(e){let t,n;He[e.guid.value]?(t=He[e.guid.value],Ue.remove(t.target)):(t=new vw,Ue.add(t));let i=e.color.value;i=i.replace("#","0x"),i=parseInt(i),t.color.set(i),t.intensity=e.intensity.value,t.distance=e.distance.value,t.angle=e.angle.value,t.penumbra=e.penumbra.value,t.decay=e.decay.value,t.position.set(e.x.value,e.y.value,e.z.value);const r=new Te;r.position.set(e.tx.value,e.ty.value,e.tz.value),Ue.add(r),t.target=r,Ue.remove(r),t.castShadow=!0,t.shadow.bias=-.002,t.shadow.normalBias=.02,Xn[e.guid.value]&&e.helper.value?(n=Xn[e.guid.value],n.update()):e.helper.value&&(n=new ww(t),Ue.add(n)),He[e.guid.value]=t,n&&(Xn[e.guid.value]=n)}function r3(e){let t,n;He[e.guid.value]?t=He[e.guid.value]:(t=new bw,Ue.add(t));let i=e.color.value;i=i.replace("#","0x"),i=parseInt(i),t.color.set(i),t.intensity=e.intensity.value,t.width=e.width.value,t.height=e.height.value,t.position.set(e.x.value,e.y.value,e.z.value),t.lookAt(e.tx.value,e.ty.value,e.tz.value),Xn[e.guid.value]&&e.helper.value?n=Xn[e.guid.value]:e.helper.value&&(n=new e3(t),Ue.add(n)),He[e.guid.value]=t,n&&(Xn[e.guid.value]=n)}function s3(e){let t,n;He[e.guid.value]?t=He[e.guid.value]:(t=new f_,Ue.add(t));let i=e.color.value;if(i=i.replace("#","0x"),i=parseInt(i),t.color.set(i),t.intensity=e.intensity.value,t.position.set(e.x.value,e.y.value,e.z.value),t.target.position.set(e.tx.value,e.ty.value,e.tz.value),t.castShadow=!0,Xn[e.guid.value]&&e.helper.value)n=Xn[e.guid.value],n.update();else if(e.helper.value){const r=new Tw(t);Ue.add(r)}He[e.guid.value]=t,n&&(Xn[e.guid.value]=n)}function o3(e){let t,n,i;He[e.guid.value]?(t=He[e.guid.value],n=He[e.guid.value+"_sun"],i=He[e.guid.value+"_ambient"]):(t=new Ol,n=new f_(16777215,1),i=new d_(16777215,.6),Ue.add(t),Ue.add(n),Ue.add(i)),t.scale.setScalar(1e3),t.material.uniforms.up.value=new D(0,0,1),t.material.uniforms.turbidity.value=e.turbidity.value,t.material.uniforms.rayleigh.value=e.rayleigh.value,t.material.uniforms.mieCoefficient.value=e.mie_coefficient.value,t.material.uniforms.mieDirectionalG.value=e.mie_directional_g.value;let r=new D;const s=Ku.degToRad(90-e.elevation.value),o=Ku.degToRad(e.azimuth.value);r.setFromSphericalCoords(1,s,o),t.material.uniforms.sunPosition.value=r,n.position.copy(t.material.uniforms.sunPosition.value),n.color.copy(qm(e.elevation.value)),i.color.copy(qm(e.elevation.value)).multiplyScalar(.6),He[e.guid.value]=t,He[e.guid.value+"_sun"]=n,He[e.guid.value+"_ambient"]=i}function qm(e){if(e>10)return new $t(16777215);if(e>0){const t=e/10;return new $t(16777164).lerp(new $t(16777215),t)}if(e>-5){const t=(e+5)/5;return new $t(16764006).lerp(new $t(16777164),t)}return new $t(16764006)}function a3(e){let t;He[e.guid.value]?t=He[e.guid.value]:(t=new d_,Ue.add(t));let n=e.color.value;n=n.replace("#","0x"),n=parseInt(n),t.color.set(n),t.intensity=e.intensity.value,t.color.needsUpdate=!0,console.log(e.intensity.value)}class l3 extends wf{constructor(t,n={}){const i=n.font;if(i===void 0)super();else{const r=i.generateShapes(t,n.size,n.direction);n.depth===void 0&&(n.depth=50),n.bevelThickness===void 0&&(n.bevelThickness=10),n.bevelSize===void 0&&(n.bevelSize=8),n.bevelEnabled===void 0&&(n.bevelEnabled=!1),super(r,n)}this.type="TextGeometry"}}class c3 extends Ef{constructor(t){super(t)}load(t,n,i,r){const s=this,o=new gw(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=s.parse(JSON.parse(a));n&&n(l)},i,r)}parse(t){return new u3(t)}}class u3{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,n=100,i="ltr"){const r=[],s=h3(t,n,this.data,i);for(let o=0,a=s.length;o<a;o++)r.push(...s[o].toShapes());return r}}function h3(e,t,n,i){const r=Array.from(e),s=t/n.resolution,o=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*s,a=[];let l=0,c=0;(i=="rtl"||i=="tb")&&r.reverse();for(let u=0;u<r.length;u++){const h=r[u];if(h===`
`)l=0,c-=o;else{const f=f3(h,s,l,c,n);i=="tb"?(l=0,c+=n.ascender*s):l+=f.offsetX,a.push(f.path)}}return a}function f3(e,t,n,i,r){const s=r.glyphs[e]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+e+'" does not exists in font family '+r.familyName+".");return}const o=new Pw;let a,l,c,u,h,f,p,g;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,d=v.length;m<d;)switch(v[m++]){case"m":a=v[m++]*t+n,l=v[m++]*t+i,o.moveTo(a,l);break;case"l":a=v[m++]*t+n,l=v[m++]*t+i,o.lineTo(a,l);break;case"q":c=v[m++]*t+n,u=v[m++]*t+i,h=v[m++]*t+n,f=v[m++]*t+i,o.quadraticCurveTo(h,f,c,u);break;case"b":c=v[m++]*t+n,u=v[m++]*t+i,h=v[m++]*t+n,f=v[m++]*t+i,p=v[m++]*t+n,g=v[m++]*t+i,o.bezierCurveTo(h,f,p,g,c,u);break}}return{offsetX:s.ha*t,path:o}}function d3(e){e.type.value==="text_geometry"&&m3(e)}const Gc={};async function p3(e,t){const n=`${e}_${t}`;if(Gc[n])return Gc[n];const i=new c3,r=`/fonts/${n}.typeface.json`;return new Promise((s,o)=>{i.load(r,a=>{Gc[n]=a,s(a)},void 0,a=>o(a))})}async function m3(e){const t=e.text.value,n=e.font.value,i=e.weight.value,r=e.depth.value,s=e.size.value,o=await p3(n,i),a=new l3(t,{font:o,size:s,depth:r});let l;if(Jr[e.guid.value]){const S=Jr[e.guid.value];l=Gs[S]}else l=new Zs({color:65535,side:xn});let c;e.centered.value?(a.computeBoundingBox(),c=-.5*(a.boundingBox.max.x-a.boundingBox.min.x)):c=0;const u=new D(e.point_x.value,e.point_y.value,e.point_z.value),h=new D(e.direction_x.value,e.direction_y.value,e.direction_z.value),f=new D(e.up_x.value,e.up_y.value,e.up_z.value),p=new D().crossVectors(h,f).normalize(),g=h.clone().normalize(),v=f.clone().normalize(),m=new he().makeBasis(g,v,p);m.setPosition(u);const d=new _t(a,l);d.position.x=c,d.applyMatrix4(m),zi[e.guid.value]=d,Ue.add(d)}function g3(e){w_(e);const t=fR(e);if(t instanceof M_){_3(t);return}else HR(t)}function _3(e){const t=e.data.items;switch(t.dispatch.value){case"material":Wm(t);break;case"light":Xm(t);break;case"scene":jR(t);break;case"ui":S3(t);break;case"text":d3(t);break;case"object_infos":A_(t);break;default:console.warn("Unknown dispatch value:",t.dispatch.value)}t.dispatch.value=="material"?Wm(t):t.dispatch.value=="light"&&Xm(t)}let Fi=null;function v3(){const e=()=>{Fi=new WebSocket("ws://127.0.0.1:9001/ws"),Fi.binaryType="arraybuffer",Fi.onopen=()=>{sessionStorage.getItem("reloaded")||(sessionStorage.setItem("reloaded","true"),window.location.reload())},Fi.onmessage=t=>{if(t.data instanceof ArrayBuffer){const n=new Uint8Array(t.data);g3(n)}else console.warn("❓ Received non-binary data:",t.data)},Fi.onerror=t=>{console.error("WebSocket error:",t)},Fi.onclose=()=>{sessionStorage.removeItem("reloaded"),setTimeout(e,1e3)}};e()}function x3(e){Fi&&Fi.readyState===WebSocket.OPEN?Fi.send(e):console.error("WebSocket is not open. Unable to send message.")}function R_(e){try{const t=JSON.stringify(e),n=y3(t);x3(n)}catch{}}function y3(e){return new TextEncoder().encode(e).buffer}const If=_r([]);function S3(e){const t=e.type.value;switch(t){case"button":b3(e);break;case"slider":M3(e);break;default:console.warn("Unknown component type:",t)}}function b3(e){const t={id:Date.now(),component:"Button",label:e.label?.value,props:{text:e.text.value,variant:e.variant.value},action:e.guid.value};If.push(t)}function M3(e){const t={id:Date.now(),component:"Slider",label:e.label?.value,props:{min:e.min.value,max:e.max.value,step:e.step.value,defaultValue:[e.default_value.value]},action:e.guid.value};If.push(t)}function Ym(e,t){const n={dispatch:"ui_callback",action:e,value:null};t!==void 0&&(n.value=t),R_(n)}const w3={class:"fixed-sidebar"},E3={key:0,class:"dynamic-label"},T3={key:2,class:"slider-container"},A3={key:0,class:"slider-value"},P3=$e({__name:"Sidebar",setup(e){return(t,n)=>(ue(),Fn("div",w3,[(ue(!0),Fn(Ye,null,Pl(St(If),i=>(ue(),Fn("div",{key:i.id,class:"dynamic-item"},[i.label?(ue(),Fn("label",E3,zr(i.label),1)):Rs("",!0),i.component==="Button"?(ue(),Ve(St(GS),{key:1,variant:i.props.variant,onClick:r=>St(Ym)(i.action)},{default:dn(()=>[wh(zr(i.props.text),1)]),_:2},1032,["variant","onClick"])):i.component==="Slider"?(ue(),Fn("div",T3,[Je(St(XS),{min:i.props.min,max:i.props.max,step:i.props.step,"default-value":i.props.defaultValue,modelValue:i.props.defaultValue,"onUpdate:modelValue":[r=>i.props.defaultValue=r,r=>St(Ym)(i.action,r)],class:"w-[80%]"},null,8,["min","max","step","default-value","modelValue","onUpdate:modelValue"]),i.props.defaultValue?(ue(),Fn("span",A3,zr(i.props.defaultValue[0]),1)):Rs("",!0)])):Rs("",!0)]))),128))]))}}),D_=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n},C3=D_(P3,[["__scopeId","data-v-aba02887"]]),R3={class:"info-module"},D3={__name:"ObjectInfo",setup(e){return Vi.data&&Object.fromEntries(Object.entries(Vi.data).filter(([t])=>t!=="dispatch")),(t,n)=>(ue(),Fn("div",R3,[Cs("h1",null,zr(St(Vi).title),1),(ue(!0),Fn(Ye,null,Pl(St(Vi).data,(i,r)=>(ue(),Fn("div",{key:r},[Cs("p",null,[Cs("strong",null,zr(r)+":",1),wh(" "+zr(i),1)])]))),128))]))}},I3=D_(D3,[["__scopeId","data-v-f65f179a"]]),L3=$e({__name:"App",setup(e){const t=hn(null);return Yo(()=>{t.value&&(t.value.appendChild(Dn.domElement),v3())}),(n,i)=>(ue(),Fn(Ye,null,[Je(C3),St(Vi).isVisible?(ue(),Ve(I3,{key:0})):Rs("",!0),Cs("div",{ref_key:"threeContainer",ref:t,class:"three-container"},null,512)],64))}}),N3=ay(L3);N3.mount("#app");
