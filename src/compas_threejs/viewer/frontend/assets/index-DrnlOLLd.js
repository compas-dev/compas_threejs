(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Lu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pt={},os=[],si=()=>{},fm=()=>!1,Wa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Iu=t=>t.startsWith("onUpdate:"),Zt=Object.assign,Nu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},j0=Object.prototype.hasOwnProperty,_t=(t,e)=>j0.call(t,e),Ye=Array.isArray,as=t=>To(t)==="[object Map]",dm=t=>To(t)==="[object Set]",hd=t=>To(t)==="[object Date]",Qe=t=>typeof t=="function",kt=t=>typeof t=="string",Wn=t=>typeof t=="symbol",vt=t=>t!==null&&typeof t=="object",hm=t=>(vt(t)||Qe(t))&&Qe(t.then)&&Qe(t.catch),pm=Object.prototype.toString,To=t=>pm.call(t),e_=t=>To(t).slice(8,-1),mm=t=>To(t)==="[object Object]",Xa=t=>kt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ks=Lu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},t_=/-\w/g,Mn=qa(t=>t.replace(t_,e=>e.slice(1).toUpperCase())),n_=/\B([A-Z])/g,Lr=qa(t=>t.replace(n_,"-$1").toLowerCase()),Ja=qa(t=>t.charAt(0).toUpperCase()+t.slice(1)),_a=qa(t=>t?`on${Ja(t)}`:""),nr=(t,e)=>!Object.is(t,e),ml=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},gm=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},i_=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let pd;const Ya=()=>pd||(pd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ts(t){if(Ye(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=kt(i)?a_(i):Ts(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(kt(t)||vt(t))return t}const r_=/;(?![^(]*\))/g,s_=/:([^]+)/,o_=/\/\*[^]*?\*\//g;function a_(t){const e={};return t.replace(o_,"").split(r_).forEach(n=>{if(n){const i=n.split(s_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function $a(t){let e="";if(kt(t))e=t;else if(Ye(t))for(let n=0;n<t.length;n++){const i=$a(t[n]);i&&(e+=i+" ")}else if(vt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const l_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",c_=Lu(l_);function _m(t){return!!t||t===""}function u_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Uu(t[i],e[i]);return n}function Uu(t,e){if(t===e)return!0;let n=hd(t),i=hd(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Wn(t),i=Wn(e),n||i)return t===e;if(n=Ye(t),i=Ye(e),n||i)return n&&i?u_(t,e):!1;if(n=vt(t),i=vt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Uu(t[o],e[o]))return!1}}return String(t)===String(e)}const vm=t=>!!(t&&t.__v_isRef===!0),va=t=>kt(t)?t:t==null?"":Ye(t)||vt(t)&&(t.toString===pm||!Qe(t.toString))?vm(t)?va(t.value):JSON.stringify(t,xm,2):String(t),xm=(t,e)=>vm(e)?xm(t,e.value):as(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[gl(i,s)+" =>"]=r,n),{})}:dm(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gl(n))}:Wn(e)?gl(e):vt(e)&&!Ye(e)&&!mm(e)?String(e):e,gl=(t,e="")=>{var n;return Wn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let xn;class f_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=xn,!e&&xn&&(this.index=(xn.scopes||(xn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=xn;try{return xn=this,e()}finally{xn=n}}}on(){++this._on===1&&(this.prevScope=xn,xn=this)}off(){this._on>0&&--this._on===0&&(xn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function d_(){return xn}let Ct;const _l=new WeakSet;class ym{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xn&&xn.active&&xn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_l.has(this)&&(_l.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||bm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,md(this),Mm(this);const e=Ct,n=Gn;Ct=this,Gn=!0;try{return this.fn()}finally{Em(this),Ct=e,Gn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bu(e);this.deps=this.depsTail=void 0,md(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_l.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_c(this)&&this.run()}get dirty(){return _c(this)}}let Sm=0,Zs,Qs;function bm(t,e=!1){if(t.flags|=8,e){t.next=Qs,Qs=t;return}t.next=Zs,Zs=t}function Ou(){Sm++}function Fu(){if(--Sm>0)return;if(Qs){let e=Qs;for(Qs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Zs;){let e=Zs;for(Zs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Mm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Em(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Bu(i),h_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function _c(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Tm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Tm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===lo)||(t.globalVersion=lo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!_c(t))))return;t.flags|=2;const e=t.dep,n=Ct,i=Gn;Ct=t,Gn=!0;try{Mm(t);const r=t.fn(t._value);(e.version===0||nr(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ct=n,Gn=i,Em(t),t.flags&=-3}}function Bu(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Bu(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function h_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Gn=!0;const wm=[];function Ii(){wm.push(Gn),Gn=!1}function Ni(){const t=wm.pop();Gn=t===void 0?!0:t}function md(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ct;Ct=void 0;try{e()}finally{Ct=n}}}let lo=0;class p_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ku{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ct||!Gn||Ct===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ct)n=this.activeLink=new p_(Ct,this),Ct.deps?(n.prevDep=Ct.depsTail,Ct.depsTail.nextDep=n,Ct.depsTail=n):Ct.deps=Ct.depsTail=n,Am(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Ct.depsTail,n.nextDep=void 0,Ct.depsTail.nextDep=n,Ct.depsTail=n,Ct.deps===n&&(Ct.deps=i)}return n}trigger(e){this.version++,lo++,this.notify(e)}notify(e){Ou();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Fu()}}}function Am(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Am(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Pa=new WeakMap,Er=Symbol(""),vc=Symbol(""),co=Symbol("");function en(t,e,n){if(Gn&&Ct){let i=Pa.get(t);i||Pa.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new ku),r.map=i,r.key=n),r.track()}}function Pi(t,e,n,i,r,s){const o=Pa.get(t);if(!o){lo++;return}const a=l=>{l&&l.trigger()};if(Ou(),e==="clear")o.forEach(a);else{const l=Ye(t),c=l&&Xa(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===co||!Wn(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(co)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Er)),as(t)&&a(o.get(vc)));break;case"delete":l||(a(o.get(Er)),as(t)&&a(o.get(vc)));break;case"set":as(t)&&a(o.get(Er));break}}Fu()}function m_(t,e){const n=Pa.get(t);return n&&n.get(e)}function kr(t){const e=pt(t);return e===t?e:(en(e,"iterate",co),Ln(t)?e:e.map(Xn))}function Ka(t){return en(t=pt(t),"iterate",co),t}function qi(t,e){return Ui(t)?gs(Tr(t)?Xn(e):e):Xn(e)}const g_={__proto__:null,[Symbol.iterator](){return vl(this,Symbol.iterator,t=>qi(this,t))},concat(...t){return kr(this).concat(...t.map(e=>Ye(e)?kr(e):e))},entries(){return vl(this,"entries",t=>(t[1]=qi(this,t[1]),t))},every(t,e){return _i(this,"every",t,e,void 0,arguments)},filter(t,e){return _i(this,"filter",t,e,n=>n.map(i=>qi(this,i)),arguments)},find(t,e){return _i(this,"find",t,e,n=>qi(this,n),arguments)},findIndex(t,e){return _i(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _i(this,"findLast",t,e,n=>qi(this,n),arguments)},findLastIndex(t,e){return _i(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _i(this,"forEach",t,e,void 0,arguments)},includes(...t){return xl(this,"includes",t)},indexOf(...t){return xl(this,"indexOf",t)},join(t){return kr(this).join(t)},lastIndexOf(...t){return xl(this,"lastIndexOf",t)},map(t,e){return _i(this,"map",t,e,void 0,arguments)},pop(){return Ns(this,"pop")},push(...t){return Ns(this,"push",t)},reduce(t,...e){return gd(this,"reduce",t,e)},reduceRight(t,...e){return gd(this,"reduceRight",t,e)},shift(){return Ns(this,"shift")},some(t,e){return _i(this,"some",t,e,void 0,arguments)},splice(...t){return Ns(this,"splice",t)},toReversed(){return kr(this).toReversed()},toSorted(t){return kr(this).toSorted(t)},toSpliced(...t){return kr(this).toSpliced(...t)},unshift(...t){return Ns(this,"unshift",t)},values(){return vl(this,"values",t=>qi(this,t))}};function vl(t,e,n){const i=Ka(t),r=i[e]();return i!==t&&!Ln(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const __=Array.prototype;function _i(t,e,n,i,r,s){const o=Ka(t),a=o!==t&&!Ln(t),l=o[e];if(l!==__[e]){const f=l.apply(t,s);return a?Xn(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,qi(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function gd(t,e,n,i){const r=Ka(t);let s=n;return r!==t&&(Ln(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,qi(t,a),l,t)}),r[e](s,...i)}function xl(t,e,n){const i=pt(t);en(i,"iterate",co);const r=i[e](...n);return(r===-1||r===!1)&&Za(n[0])?(n[0]=pt(n[0]),i[e](...n)):r}function Ns(t,e,n=[]){Ii(),Ou();const i=pt(t)[e].apply(t,n);return Fu(),Ni(),i}const v_=Lu("__proto__,__v_isRef,__isVue"),Cm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wn));function x_(t){Wn(t)||(t=String(t));const e=pt(this);return en(e,"has",t),e.hasOwnProperty(t)}class Pm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?P_:Im:s?Lm:Dm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ye(e);if(!r){let l;if(o&&(l=g_[n]))return l;if(n==="hasOwnProperty")return x_}const a=Reflect.get(e,n,Ot(e)?e:i);if((Wn(n)?Cm.has(n):v_(n))||(r||en(e,"get",n),s))return a;if(Ot(a)){const l=o&&Xa(n)?a:a.value;return r&&vt(l)?yc(l):l}return vt(a)?r?yc(a):ms(a):a}}class Rm extends Pm{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const o=Ye(e)&&Xa(n);if(!this._isShallow){const c=Ui(s);if(!Ln(i)&&!Ui(i)&&(s=pt(s),i=pt(i)),!o&&Ot(s)&&!Ot(i))return c||(s.value=i),!0}const a=o?Number(n)<e.length:_t(e,n),l=Reflect.set(e,n,i,Ot(e)?e:r);return e===pt(r)&&(a?nr(i,s)&&Pi(e,"set",n,i):Pi(e,"add",n,i)),l}deleteProperty(e,n){const i=_t(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Pi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Wn(n)||!Cm.has(n))&&en(e,"has",n),i}ownKeys(e){return en(e,"iterate",Ye(e)?"length":Er),Reflect.ownKeys(e)}}class y_ extends Pm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const S_=new Rm,b_=new y_,M_=new Rm(!0);const xc=t=>t,Uo=t=>Reflect.getPrototypeOf(t);function E_(t,e,n){return function(...i){const r=this.__v_raw,s=pt(r),o=as(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?xc:e?gs:Xn;return!e&&en(s,"iterate",l?vc:Er),Zt(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function Oo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function T_(t,e){const n={get(r){const s=this.__v_raw,o=pt(s),a=pt(r);t||(nr(r,a)&&en(o,"get",r),en(o,"get",a));const{has:l}=Uo(o),c=e?xc:t?gs:Xn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&en(pt(r),"iterate",Er),r.size},has(r){const s=this.__v_raw,o=pt(s),a=pt(r);return t||(nr(r,a)&&en(o,"has",r),en(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=pt(a),c=e?xc:t?gs:Xn;return!t&&en(l,"iterate",Er),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Zt(n,t?{add:Oo("add"),set:Oo("set"),delete:Oo("delete"),clear:Oo("clear")}:{add(r){!e&&!Ln(r)&&!Ui(r)&&(r=pt(r));const s=pt(this);return Uo(s).has.call(s,r)||(s.add(r),Pi(s,"add",r,r)),this},set(r,s){!e&&!Ln(s)&&!Ui(s)&&(s=pt(s));const o=pt(this),{has:a,get:l}=Uo(o);let c=a.call(o,r);c||(r=pt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?nr(s,u)&&Pi(o,"set",r,s):Pi(o,"add",r,s),this},delete(r){const s=pt(this),{has:o,get:a}=Uo(s);let l=o.call(s,r);l||(r=pt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Pi(s,"delete",r,void 0),c},clear(){const r=pt(this),s=r.size!==0,o=r.clear();return s&&Pi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=E_(r,t,e)}),n}function zu(t,e){const n=T_(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(_t(n,r)&&r in i?n:i,r,s)}const w_={get:zu(!1,!1)},A_={get:zu(!1,!0)},C_={get:zu(!0,!1)};const Dm=new WeakMap,Lm=new WeakMap,Im=new WeakMap,P_=new WeakMap;function R_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function D_(t){return t.__v_skip||!Object.isExtensible(t)?0:R_(e_(t))}function ms(t){return Ui(t)?t:Vu(t,!1,S_,w_,Dm)}function L_(t){return Vu(t,!1,M_,A_,Lm)}function yc(t){return Vu(t,!0,b_,C_,Im)}function Vu(t,e,n,i,r){if(!vt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=D_(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function Tr(t){return Ui(t)?Tr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ui(t){return!!(t&&t.__v_isReadonly)}function Ln(t){return!!(t&&t.__v_isShallow)}function Za(t){return t?!!t.__v_raw:!1}function pt(t){const e=t&&t.__v_raw;return e?pt(e):t}function Nm(t){return!_t(t,"__v_skip")&&Object.isExtensible(t)&&gm(t,"__v_skip",!0),t}const Xn=t=>vt(t)?ms(t):t,gs=t=>vt(t)?yc(t):t;function Ot(t){return t?t.__v_isRef===!0:!1}function rn(t){return Um(t,!1)}function I_(t){return Um(t,!0)}function Um(t,e){return Ot(t)?t:new N_(t,e)}class N_{constructor(e,n){this.dep=new ku,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:pt(e),this._value=n?e:Xn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Ln(e)||Ui(e);e=i?e:pt(e),nr(e,n)&&(this._rawValue=e,this._value=i?e:Xn(e),this.dep.trigger())}}function Se(t){return Ot(t)?t.value:t}function Hu(t){return Qe(t)?t():Se(t)}const U_={get:(t,e,n)=>e==="__v_raw"?t:Se(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ot(r)&&!Ot(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Om(t){return Tr(t)?t:new Proxy(t,U_)}function uo(t){const e=Ye(t)?new Array(t.length):{};for(const n in t)e[n]=Fm(t,n);return e}class O_{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=pt(e);let r=!0,s=e;if(!Ye(e)||!Xa(String(n)))do r=!Za(s)||Ln(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=Se(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Ot(this._raw[this._key])){const n=this._object[this._key];if(Ot(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return m_(this._raw,this._key)}}class F_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function B_(t,e,n){return Ot(t)?t:Qe(t)?new F_(t):vt(t)&&arguments.length>1?Fm(t,e,n):rn(t)}function Fm(t,e,n){return new O_(t,e,n)}class k_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ku(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=lo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ct!==this)return bm(this,!0),!0}get value(){const e=this.dep.track();return Tm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function z_(t,e,n=!1){let i,r;return Qe(t)?i=t:(i=t.get,r=t.set),new k_(i,r,n)}const Fo={},Ra=new WeakMap;let vr;function V_(t,e=!1,n=vr){if(n){let i=Ra.get(n);i||Ra.set(n,i=[]),i.push(t)}}function H_(t,e,n=Pt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=x=>r?x:Ln(x)||r===!1||r===0?$i(x,1):$i(x);let u,f,d,p,g=!1,v=!1;if(Ot(t)?(f=()=>t.value,g=Ln(t)):Tr(t)?(f=()=>c(t),g=!0):Ye(t)?(v=!0,g=t.some(x=>Tr(x)||Ln(x)),f=()=>t.map(x=>{if(Ot(x))return x.value;if(Tr(x))return c(x);if(Qe(x))return l?l(x,2):x()})):Qe(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Ii();try{d()}finally{Ni()}}const x=vr;vr=u;try{return l?l(t,3,[p]):t(p)}finally{vr=x}}:f=si,e&&r){const x=f,A=r===!0?1/0:r;f=()=>$i(x(),A)}const m=d_(),h=()=>{u.stop(),m&&m.active&&Nu(m.effects,u)};if(s&&e){const x=e;e=(...A)=>{x(...A),h()}}let b=v?new Array(t.length).fill(Fo):Fo;const S=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const A=u.run();if(r||g||(v?A.some((C,P)=>nr(C,b[P])):nr(A,b))){d&&d();const C=vr;vr=u;try{const P=[A,b===Fo?void 0:v&&b[0]===Fo?[]:b,p];b=A,l?l(e,3,P):e(...P)}finally{vr=C}}}else u.run()};return a&&a(S),u=new ym(f),u.scheduler=o?()=>o(S,!1):S,p=x=>V_(x,!1,u),d=u.onStop=()=>{const x=Ra.get(u);if(x){if(l)l(x,4);else for(const A of x)A();Ra.delete(u)}},e?i?S(!0):b=u.run():o?o(S.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function $i(t,e=1/0,n){if(e<=0||!vt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ot(t))$i(t.value,e,n);else if(Ye(t))for(let i=0;i<t.length;i++)$i(t[i],e,n);else if(dm(t)||as(t))t.forEach(i=>{$i(i,e,n)});else if(mm(t)){for(const i in t)$i(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&$i(t[i],e,n)}return t}function wo(t,e,n,i){try{return i?t(...i):t()}catch(r){Qa(r,e,n)}}function li(t,e,n,i){if(Qe(t)){const r=wo(t,e,n,i);return r&&hm(r)&&r.catch(s=>{Qa(s,e,n)}),r}if(Ye(t)){const r=[];for(let s=0;s<t.length;s++)r.push(li(t[s],e,n,i));return r}}function Qa(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Pt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){Ii(),wo(s,null,10,[t,l,c]),Ni();return}}G_(t,n,r,i,o)}function G_(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const fn=[];let Zn=-1;const ls=[];let Ji=null,ts=0;const Bm=Promise.resolve();let Da=null;function km(t){const e=Da||Bm;return t?e.then(this?t.bind(this):t):e}function W_(t){let e=Zn+1,n=fn.length;for(;e<n;){const i=e+n>>>1,r=fn[i],s=fo(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Gu(t){if(!(t.flags&1)){const e=fo(t),n=fn[fn.length-1];!n||!(t.flags&2)&&e>=fo(n)?fn.push(t):fn.splice(W_(e),0,t),t.flags|=1,zm()}}function zm(){Da||(Da=Bm.then(Hm))}function X_(t){Ye(t)?ls.push(...t):Ji&&t.id===-1?Ji.splice(ts+1,0,t):t.flags&1||(ls.push(t),t.flags|=1),zm()}function _d(t,e,n=Zn+1){for(;n<fn.length;n++){const i=fn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;fn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Vm(t){if(ls.length){const e=[...new Set(ls)].sort((n,i)=>fo(n)-fo(i));if(ls.length=0,Ji){Ji.push(...e);return}for(Ji=e,ts=0;ts<Ji.length;ts++){const n=Ji[ts];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ji=null,ts=0}}const fo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Hm(t){try{for(Zn=0;Zn<fn.length;Zn++){const e=fn[Zn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Zn<fn.length;Zn++){const e=fn[Zn];e&&(e.flags&=-2)}Zn=-1,fn.length=0,Vm(),Da=null,(fn.length||ls.length)&&Hm()}}let dn=null,Gm=null;function La(t){const e=dn;return dn=t,Gm=t&&t.type.__scopeId||null,e}function on(t,e=dn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Ua(-1);const s=La(e);let o;try{o=t(...r)}finally{La(s),i._d&&Ua(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function cr(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ii(),li(l,n,8,[t.el,a,t,e]),Ni())}}function Wu(t,e){if(tn){let n=tn.provides;const i=tn.parent&&tn.parent.provides;i===n&&(n=tn.provides=Object.create(i)),n[t]=e}}function cs(t,e,n=!1){const i=ws();if(i||fs){let r=fs?fs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Qe(e)?e.call(i&&i.proxy):e}}const q_=Symbol.for("v-scx"),J_=()=>cs(q_);function Y_(t,e){return Xu(t,null,e)}function wr(t,e,n){return Xu(t,e,n)}function Xu(t,e,n=Pt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Zt({},n),l=e&&i||!e&&s!=="post";let c;if(mo){if(s==="sync"){const p=J_();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=si,p.resume=si,p.pause=si,p}}const u=tn;a.call=(p,g,v)=>li(p,u,g,v);let f=!1;s==="post"?a.scheduler=p=>{vn(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():Gu(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=H_(t,e,a);return mo&&(c?c.push(d):l&&d()),d}function $_(t,e,n){const i=this.proxy,r=kt(t)?t.includes(".")?Wm(i,t):()=>i[t]:t.bind(i,i);let s;Qe(e)?s=e:(s=e.handler,n=e);const o=Co(this),a=Xu(r,s.bind(i),n);return o(),a}function Wm(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const K_=Symbol("_vte"),Z_=t=>t.__isTeleport,Q_=Symbol("_leaveCb");function qu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,qu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wt(t,e){return Qe(t)?Zt({name:t.name},e,{setup:t}):t}function Xm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function vd(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Ia=new WeakMap;function js(t,e,n,i,r=!1){if(Ye(t)){t.forEach((v,m)=>js(v,e&&(Ye(e)?e[m]:e),n,i,r));return}if(us(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&js(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?ju(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Pt?a.refs={}:a.refs,f=a.setupState,d=pt(f),p=f===Pt?fm:v=>vd(u,v)?!1:_t(d,v),g=(v,m)=>!(m&&vd(u,m));if(c!=null&&c!==l){if(xd(e),kt(c))u[c]=null,p(c)&&(f[c]=null);else if(Ot(c)){const v=e;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(Qe(l))wo(l,a,12,[o,u]);else{const v=kt(l),m=Ot(l);if(v||m){const h=()=>{if(t.f){const b=v?p(l)?f[l]:u[l]:g()||!t.k?l.value:u[t.k];if(r)Ye(b)&&Nu(b,s);else if(Ye(b))b.includes(s)||b.push(s);else if(v)u[l]=[s],p(l)&&(f[l]=u[l]);else{const S=[s];g(l,t.k)&&(l.value=S),t.k&&(u[t.k]=S)}}else v?(u[l]=o,p(l)&&(f[l]=o)):m&&(g(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const b=()=>{h(),Ia.delete(t)};b.id=-1,Ia.set(t,b),vn(b,n)}else xd(t),h()}}}function xd(t){const e=Ia.get(t);e&&(e.flags|=8,Ia.delete(t))}Ya().requestIdleCallback;Ya().cancelIdleCallback;const us=t=>!!t.type.__asyncLoader,qm=t=>t.type.__isKeepAlive;function j_(t,e){Jm(t,"a",e)}function ev(t,e){Jm(t,"da",e)}function Jm(t,e,n=tn){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ja(e,i,n),n){let r=n.parent;for(;r&&r.parent;)qm(r.parent.vnode)&&tv(i,e,n,r),r=r.parent}}function tv(t,e,n,i){const r=ja(e,t,i,!0);Ju(()=>{Nu(i[e],r)},n)}function ja(t,e,n=tn,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Ii();const a=Co(n),l=li(e,n,t,o);return a(),Ni(),l});return i?r.unshift(s):r.push(s),s}}const Bi=t=>(e,n=tn)=>{(!mo||t==="sp")&&ja(t,(...i)=>e(...i),n)},nv=Bi("bm"),Ao=Bi("m"),iv=Bi("bu"),rv=Bi("u"),sv=Bi("bum"),Ju=Bi("um"),ov=Bi("sp"),av=Bi("rtg"),lv=Bi("rtc");function cv(t,e=tn){ja("ec",t,e)}const uv="components",Ym=Symbol.for("v-ndc");function fv(t){return kt(t)?dv(uv,t,!1)||t:t||Ym}function dv(t,e,n=!0,i=!1){const r=dn||tn;if(r){const s=r.type;{const a=$v(s,!1);if(a&&(a===e||a===Mn(e)||a===Ja(Mn(e))))return s}const o=yd(r[t]||s[t],e)||yd(r.appContext[t],e);return!o&&i?s:o}}function yd(t,e){return t&&(t[e]||t[Mn(e)]||t[Ja(Mn(e))])}function Yu(t,e,n,i){let r;const s=n,o=Ye(t);if(o||kt(t)){const a=o&&Tr(t);let l=!1,c=!1;a&&(l=!Ln(t),c=Ui(t),t=Ka(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?gs(Xn(t[u])):Xn(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(vt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}function hi(t,e,n={},i,r){if(dn.ce||dn.parent&&us(dn.parent)&&dn.parent.ce){const c=Object.keys(n).length>0;return gt(),Bt(Yt,null,[Gt("slot",n,i)],c?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),gt();const o=s&&$m(s(n)),a=n.key||o&&o.key,l=Bt(Yt,{key:(a&&!Wn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function $m(t){return t.some(e=>po(e)?!(e.type===ci||e.type===Yt&&!$m(e.children)):!0)?t:null}const Sc=t=>t?gg(t)?ju(t):Sc(t.parent):null,eo=Zt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sc(t.parent),$root:t=>Sc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Zm(t),$forceUpdate:t=>t.f||(t.f=()=>{Gu(t.update)}),$nextTick:t=>t.n||(t.n=km.bind(t.proxy)),$watch:t=>$_.bind(t)}),yl=(t,e)=>t!==Pt&&!t.__isScriptSetup&&_t(t,e),hv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(yl(i,e))return o[e]=1,i[e];if(r!==Pt&&_t(r,e))return o[e]=2,r[e];if(_t(s,e))return o[e]=3,s[e];if(n!==Pt&&_t(n,e))return o[e]=4,n[e];bc&&(o[e]=0)}}const c=eo[e];let u,f;if(c)return e==="$attrs"&&en(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Pt&&_t(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,_t(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return yl(r,e)?(r[e]=n,!0):i!==Pt&&_t(i,e)?(i[e]=n,!0):_t(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||t!==Pt&&a[0]!=="$"&&_t(t,a)||yl(e,a)||_t(s,a)||_t(i,a)||_t(eo,a)||_t(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_t(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sd(t){return Ye(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let bc=!0;function pv(t){const e=Zm(t),n=t.proxy,i=t.ctx;bc=!1,e.beforeCreate&&bd(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:b,destroyed:S,unmounted:x,render:A,renderTracked:C,renderTriggered:P,errorCaptured:D,serverPrefetch:y,expose:E,inheritAttrs:L,components:H,directives:X,filters:te}=e;if(c&&mv(c,i,null),o)for(const z in o){const V=o[z];Qe(V)&&(i[z]=V.bind(n))}if(r){const z=r.call(n,n);vt(z)&&(t.data=ms(z))}if(bc=!0,s)for(const z in s){const V=s[z],de=Qe(V)?V.bind(n,n):Qe(V.get)?V.get.bind(n,n):si,pe=!Qe(V)&&Qe(V.set)?V.set.bind(n):si,he=ct({get:de,set:pe});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>he.value,set:ze=>he.value=ze})}if(a)for(const z in a)Km(a[z],i,n,z);if(l){const z=Qe(l)?l.call(n):l;Reflect.ownKeys(z).forEach(V=>{Wu(V,z[V])})}u&&bd(u,t,"c");function q(z,V){Ye(V)?V.forEach(de=>z(de.bind(n))):V&&z(V.bind(n))}if(q(nv,f),q(Ao,d),q(iv,p),q(rv,g),q(j_,v),q(ev,m),q(cv,D),q(lv,C),q(av,P),q(sv,b),q(Ju,x),q(ov,y),Ye(E))if(E.length){const z=t.exposed||(t.exposed={});E.forEach(V=>{Object.defineProperty(z,V,{get:()=>n[V],set:de=>n[V]=de,enumerable:!0})})}else t.exposed||(t.exposed={});A&&t.render===si&&(t.render=A),L!=null&&(t.inheritAttrs=L),H&&(t.components=H),X&&(t.directives=X),y&&Xm(t)}function mv(t,e,n=si){Ye(t)&&(t=Mc(t));for(const i in t){const r=t[i];let s;vt(r)?"default"in r?s=cs(r.from||i,r.default,!0):s=cs(r.from||i):s=cs(r),Ot(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function bd(t,e,n){li(Ye(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Km(t,e,n,i){let r=i.includes(".")?Wm(n,i):()=>n[i];if(kt(t)){const s=e[t];Qe(s)&&wr(r,s)}else if(Qe(t))wr(r,t.bind(n));else if(vt(t))if(Ye(t))t.forEach(s=>Km(s,e,n,i));else{const s=Qe(t.handler)?t.handler.bind(n):e[t.handler];Qe(s)&&wr(r,s,t)}}function Zm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Na(l,c,o,!0)),Na(l,e,o)),vt(e)&&s.set(e,l),l}function Na(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Na(t,s,n,!0),r&&r.forEach(o=>Na(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=gv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const gv={data:Md,props:Ed,emits:Ed,methods:Ws,computed:Ws,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:Ws,directives:Ws,watch:vv,provide:Md,inject:_v};function Md(t,e){return e?t?function(){return Zt(Qe(t)?t.call(this,this):t,Qe(e)?e.call(this,this):e)}:e:t}function _v(t,e){return Ws(Mc(t),Mc(e))}function Mc(t){if(Ye(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ln(t,e){return t?[...new Set([].concat(t,e))]:e}function Ws(t,e){return t?Zt(Object.create(null),t,e):e}function Ed(t,e){return t?Ye(t)&&Ye(e)?[...new Set([...t,...e])]:Zt(Object.create(null),Sd(t),Sd(e??{})):e}function vv(t,e){if(!t)return e;if(!e)return t;const n=Zt(Object.create(null),t);for(const i in e)n[i]=ln(t[i],e[i]);return n}function Qm(){return{app:null,config:{isNativeTag:fm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xv=0;function yv(t,e){return function(i,r=null){Qe(i)||(i=Zt({},i)),r!=null&&!vt(r)&&(r=null);const s=Qm(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:xv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Zv,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Qe(u.install)?(o.add(u),u.install(c,...f)):Qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Gt(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,ju(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(li(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=fs;fs=c;try{return u()}finally{fs=f}}};return c}}let fs=null;const Sv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Mn(e)}Modifiers`]||t[`${Lr(e)}Modifiers`];function bv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Pt;let r=n;const s=e.startsWith("update:"),o=s&&Sv(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>kt(u)?u.trim():u)),o.number&&(r=n.map(i_)));let a,l=i[a=_a(e)]||i[a=_a(Mn(e))];!l&&s&&(l=i[a=_a(Lr(e))]),l&&li(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,li(c,t,6,r)}}const Mv=new WeakMap;function jm(t,e,n=!1){const i=n?Mv:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Qe(t)){const l=c=>{const u=jm(c,e,!0);u&&(a=!0,Zt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(vt(t)&&i.set(t,null),null):(Ye(s)?s.forEach(l=>o[l]=null):Zt(o,s),vt(t)&&i.set(t,o),o)}function el(t,e){return!t||!Wa(e)?!1:(e=e.slice(2).replace(/Once$/,""),_t(t,e[0].toLowerCase()+e.slice(1))||_t(t,Lr(e))||_t(t,e))}function Td(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:g,inheritAttrs:v}=t,m=La(t);let h,b;try{if(n.shapeFlag&4){const x=r||i,A=x;h=ei(c.call(A,x,u,f,p,d,g)),b=a}else{const x=e;h=ei(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),b=e.props?a:Ev(a)}}catch(x){to.length=0,Qa(x,t,1),h=Gt(ci)}let S=h;if(b&&v!==!1){const x=Object.keys(b),{shapeFlag:A}=S;x.length&&A&7&&(s&&x.some(Iu)&&(b=Tv(b,s)),S=Cr(S,b,!1,!0))}return n.dirs&&(S=Cr(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&qu(S,n.transition),h=S,La(m),h}const Ev=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wa(n))&&((e||(e={}))[n]=t[n]);return e},Tv=(t,e)=>{const n={};for(const i in t)(!Iu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function wv(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?wd(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(eg(o,i,d)&&!el(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?wd(i,o,c):!0:!!o;return!1}function wd(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(eg(e,t,s)&&!el(n,s))return!0}return!1}function eg(t,e,n){const i=t[n],r=e[n];return n==="style"&&vt(i)&&vt(r)?!Uu(i,r):i!==r}function Av({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const tg={},ng=()=>Object.create(tg),ig=t=>Object.getPrototypeOf(t)===tg;function Cv(t,e,n,i=!1){const r={},s=ng();t.propsDefaults=Object.create(null),rg(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:L_(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Pv(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=pt(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(el(t.emitsOptions,d))continue;const p=e[d];if(l)if(_t(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const g=Mn(d);r[g]=Ec(l,a,g,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{rg(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!_t(e,f)&&((u=Lr(f))===f||!_t(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Ec(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!_t(e,f))&&(delete s[f],c=!0)}c&&Pi(t.attrs,"set","")}function rg(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ks(l))continue;const c=e[l];let u;r&&_t(r,u=Mn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:el(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=pt(n),c=a||Pt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Ec(r,l,f,c[f],t,!_t(c,f))}}return o}function Ec(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=_t(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Qe(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Co(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Lr(n))&&(i=!0))}return i}const Rv=new WeakMap;function sg(t,e,n=!1){const i=n?Rv:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Qe(t)){const u=f=>{l=!0;const[d,p]=sg(f,e,!0);Zt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return vt(t)&&i.set(t,os),os;if(Ye(s))for(let u=0;u<s.length;u++){const f=Mn(s[u]);Ad(f)&&(o[f]=Pt)}else if(s)for(const u in s){const f=Mn(u);if(Ad(f)){const d=s[u],p=o[f]=Ye(d)||Qe(d)?{type:d}:Zt({},d),g=p.type;let v=!1,m=!0;if(Ye(g))for(let h=0;h<g.length;++h){const b=g[h],S=Qe(b)&&b.name;if(S==="Boolean"){v=!0;break}else S==="String"&&(m=!1)}else v=Qe(g)&&g.name==="Boolean";p[0]=v,p[1]=m,(v||_t(p,"default"))&&a.push(f)}}const c=[o,a];return vt(t)&&i.set(t,c),c}function Ad(t){return t[0]!=="$"&&!Ks(t)}const $u=t=>t==="_"||t==="_ctx"||t==="$stable",Ku=t=>Ye(t)?t.map(ei):[ei(t)],Dv=(t,e,n)=>{if(e._n)return e;const i=on((...r)=>Ku(e(...r)),n);return i._c=!1,i},og=(t,e,n)=>{const i=t._ctx;for(const r in t){if($u(r))continue;const s=t[r];if(Qe(s))e[r]=Dv(r,s,i);else if(s!=null){const o=Ku(s);e[r]=()=>o}}},ag=(t,e)=>{const n=Ku(e);t.slots.default=()=>n},lg=(t,e,n)=>{for(const i in e)(n||!$u(i))&&(t[i]=e[i])},Lv=(t,e,n)=>{const i=t.slots=ng();if(t.vnode.shapeFlag&32){const r=e._;r?(lg(i,e,n),n&&gm(i,"_",r,!0)):og(e,i)}else e&&ag(t,e)},Iv=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Pt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:lg(r,e,n):(s=!e.$stable,og(e,r)),o=e}else e&&(ag(t,e),o={default:1});if(s)for(const a in r)!$u(a)&&o[a]==null&&delete r[a]},vn=Bv;function Nv(t){return Uv(t)}function Uv(t,e){const n=Ya();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=si,insertStaticContent:g}=t,v=(R,U,N,k=null,F=null,W=null,T=void 0,re=null,K=!!U.dynamicChildren)=>{if(R===U)return;R&&!Us(R,U)&&(k=oe(R),ze(R,F,W,!0),R=null),U.patchFlag===-2&&(K=!1,U.dynamicChildren=null);const{type:Z,ref:ie,shapeFlag:M}=U;switch(Z){case tl:m(R,U,N,k);break;case ci:h(R,U,N,k);break;case bl:R==null&&b(U,N,k,T);break;case Yt:H(R,U,N,k,F,W,T,re,K);break;default:M&1?A(R,U,N,k,F,W,T,re,K):M&6?X(R,U,N,k,F,W,T,re,K):(M&64||M&128)&&Z.process(R,U,N,k,F,W,T,re,K,be)}ie!=null&&F?js(ie,R&&R.ref,W,U||R,!U):ie==null&&R&&R.ref!=null&&js(R.ref,null,W,R,!0)},m=(R,U,N,k)=>{if(R==null)i(U.el=a(U.children),N,k);else{const F=U.el=R.el;U.children!==R.children&&c(F,U.children)}},h=(R,U,N,k)=>{R==null?i(U.el=l(U.children||""),N,k):U.el=R.el},b=(R,U,N,k)=>{[R.el,R.anchor]=g(R.children,U,N,k,R.el,R.anchor)},S=({el:R,anchor:U},N,k)=>{let F;for(;R&&R!==U;)F=d(R),i(R,N,k),R=F;i(U,N,k)},x=({el:R,anchor:U})=>{let N;for(;R&&R!==U;)N=d(R),r(R),R=N;r(U)},A=(R,U,N,k,F,W,T,re,K)=>{if(U.type==="svg"?T="svg":U.type==="math"&&(T="mathml"),R==null)C(U,N,k,F,W,T,re,K);else{const Z=R.el&&R.el._isVueCE?R.el:null;try{Z&&Z._beginPatch(),y(R,U,F,W,T,re,K)}finally{Z&&Z._endPatch()}}},C=(R,U,N,k,F,W,T,re)=>{let K,Z;const{props:ie,shapeFlag:M,transition:_,dirs:I}=R;if(K=R.el=o(R.type,W,ie&&ie.is,ie),M&8?u(K,R.children):M&16&&D(R.children,K,null,k,F,Sl(R,W),T,re),I&&cr(R,null,k,"created"),P(K,R,R.scopeId,T,k),ie){for(const ne in ie)ne!=="value"&&!Ks(ne)&&s(K,ne,null,ie[ne],W,k);"value"in ie&&s(K,"value",null,ie.value,W),(Z=ie.onVnodeBeforeMount)&&$n(Z,k,R)}I&&cr(R,null,k,"beforeMount");const J=Ov(F,_);J&&_.beforeEnter(K),i(K,U,N),((Z=ie&&ie.onVnodeMounted)||J||I)&&vn(()=>{Z&&$n(Z,k,R),J&&_.enter(K),I&&cr(R,null,k,"mounted")},F)},P=(R,U,N,k,F)=>{if(N&&p(R,N),k)for(let W=0;W<k.length;W++)p(R,k[W]);if(F){let W=F.subTree;if(U===W||dg(W.type)&&(W.ssContent===U||W.ssFallback===U)){const T=F.vnode;P(R,T,T.scopeId,T.slotScopeIds,F.parent)}}},D=(R,U,N,k,F,W,T,re,K=0)=>{for(let Z=K;Z<R.length;Z++){const ie=R[Z]=re?wi(R[Z]):ei(R[Z]);v(null,ie,U,N,k,F,W,T,re)}},y=(R,U,N,k,F,W,T)=>{const re=U.el=R.el;let{patchFlag:K,dynamicChildren:Z,dirs:ie}=U;K|=R.patchFlag&16;const M=R.props||Pt,_=U.props||Pt;let I;if(N&&ur(N,!1),(I=_.onVnodeBeforeUpdate)&&$n(I,N,U,R),ie&&cr(U,R,N,"beforeUpdate"),N&&ur(N,!0),(M.innerHTML&&_.innerHTML==null||M.textContent&&_.textContent==null)&&u(re,""),Z?E(R.dynamicChildren,Z,re,N,k,Sl(U,F),W):T||V(R,U,re,null,N,k,Sl(U,F),W,!1),K>0){if(K&16)L(re,M,_,N,F);else if(K&2&&M.class!==_.class&&s(re,"class",null,_.class,F),K&4&&s(re,"style",M.style,_.style,F),K&8){const J=U.dynamicProps;for(let ne=0;ne<J.length;ne++){const Y=J[ne],Me=M[Y],ue=_[Y];(ue!==Me||Y==="value")&&s(re,Y,Me,ue,F,N)}}K&1&&R.children!==U.children&&u(re,U.children)}else!T&&Z==null&&L(re,M,_,N,F);((I=_.onVnodeUpdated)||ie)&&vn(()=>{I&&$n(I,N,U,R),ie&&cr(U,R,N,"updated")},k)},E=(R,U,N,k,F,W,T)=>{for(let re=0;re<U.length;re++){const K=R[re],Z=U[re],ie=K.el&&(K.type===Yt||!Us(K,Z)||K.shapeFlag&198)?f(K.el):N;v(K,Z,ie,null,k,F,W,T,!0)}},L=(R,U,N,k,F)=>{if(U!==N){if(U!==Pt)for(const W in U)!Ks(W)&&!(W in N)&&s(R,W,U[W],null,F,k);for(const W in N){if(Ks(W))continue;const T=N[W],re=U[W];T!==re&&W!=="value"&&s(R,W,re,T,F,k)}"value"in N&&s(R,"value",U.value,N.value,F)}},H=(R,U,N,k,F,W,T,re,K)=>{const Z=U.el=R?R.el:a(""),ie=U.anchor=R?R.anchor:a("");let{patchFlag:M,dynamicChildren:_,slotScopeIds:I}=U;I&&(re=re?re.concat(I):I),R==null?(i(Z,N,k),i(ie,N,k),D(U.children||[],N,ie,F,W,T,re,K)):M>0&&M&64&&_&&R.dynamicChildren&&R.dynamicChildren.length===_.length?(E(R.dynamicChildren,_,N,F,W,T,re),(U.key!=null||F&&U===F.subTree)&&cg(R,U,!0)):V(R,U,N,ie,F,W,T,re,K)},X=(R,U,N,k,F,W,T,re,K)=>{U.slotScopeIds=re,R==null?U.shapeFlag&512?F.ctx.activate(U,N,k,T,K):te(U,N,k,F,W,T,K):Q(R,U,K)},te=(R,U,N,k,F,W,T)=>{const re=R.component=Wv(R,k,F);if(qm(R)&&(re.ctx.renderer=be),Xv(re,!1,T),re.asyncDep){if(F&&F.registerDep(re,q,T),!R.el){const K=re.subTree=Gt(ci);h(null,K,U,N),R.placeholder=K.el}}else q(re,R,U,N,F,W,T)},Q=(R,U,N)=>{const k=U.component=R.component;if(wv(R,U,N))if(k.asyncDep&&!k.asyncResolved){z(k,U,N);return}else k.next=U,k.update();else U.el=R.el,k.vnode=U},q=(R,U,N,k,F,W,T)=>{const re=()=>{if(R.isMounted){let{next:M,bu:_,u:I,parent:J,vnode:ne}=R;{const Be=ug(R);if(Be){M&&(M.el=ne.el,z(R,M,T)),Be.asyncDep.then(()=>{vn(()=>{R.isUnmounted||Z()},F)});return}}let Y=M,Me;ur(R,!1),M?(M.el=ne.el,z(R,M,T)):M=ne,_&&ml(_),(Me=M.props&&M.props.onVnodeBeforeUpdate)&&$n(Me,J,M,ne),ur(R,!0);const ue=Td(R),Ce=R.subTree;R.subTree=ue,v(Ce,ue,f(Ce.el),oe(Ce),R,F,W),M.el=ue.el,Y===null&&Av(R,ue.el),I&&vn(I,F),(Me=M.props&&M.props.onVnodeUpdated)&&vn(()=>$n(Me,J,M,ne),F)}else{let M;const{el:_,props:I}=U,{bm:J,m:ne,parent:Y,root:Me,type:ue}=R,Ce=us(U);ur(R,!1),J&&ml(J),!Ce&&(M=I&&I.onVnodeBeforeMount)&&$n(M,Y,U),ur(R,!0);{Me.ce&&Me.ce._hasShadowRoot()&&Me.ce._injectChildStyle(ue);const Be=R.subTree=Td(R);v(null,Be,N,k,R,F,W),U.el=Be.el}if(ne&&vn(ne,F),!Ce&&(M=I&&I.onVnodeMounted)){const Be=U;vn(()=>$n(M,Y,Be),F)}(U.shapeFlag&256||Y&&us(Y.vnode)&&Y.vnode.shapeFlag&256)&&R.a&&vn(R.a,F),R.isMounted=!0,U=N=k=null}};R.scope.on();const K=R.effect=new ym(re);R.scope.off();const Z=R.update=K.run.bind(K),ie=R.job=K.runIfDirty.bind(K);ie.i=R,ie.id=R.uid,K.scheduler=()=>Gu(ie),ur(R,!0),Z()},z=(R,U,N)=>{U.component=R;const k=R.vnode.props;R.vnode=U,R.next=null,Pv(R,U.props,k,N),Iv(R,U.children,N),Ii(),_d(R),Ni()},V=(R,U,N,k,F,W,T,re,K=!1)=>{const Z=R&&R.children,ie=R?R.shapeFlag:0,M=U.children,{patchFlag:_,shapeFlag:I}=U;if(_>0){if(_&128){pe(Z,M,N,k,F,W,T,re,K);return}else if(_&256){de(Z,M,N,k,F,W,T,re,K);return}}I&8?(ie&16&&se(Z,F,W),M!==Z&&u(N,M)):ie&16?I&16?pe(Z,M,N,k,F,W,T,re,K):se(Z,F,W,!0):(ie&8&&u(N,""),I&16&&D(M,N,k,F,W,T,re,K))},de=(R,U,N,k,F,W,T,re,K)=>{R=R||os,U=U||os;const Z=R.length,ie=U.length,M=Math.min(Z,ie);let _;for(_=0;_<M;_++){const I=U[_]=K?wi(U[_]):ei(U[_]);v(R[_],I,N,null,F,W,T,re,K)}Z>ie?se(R,F,W,!0,!1,M):D(U,N,k,F,W,T,re,K,M)},pe=(R,U,N,k,F,W,T,re,K)=>{let Z=0;const ie=U.length;let M=R.length-1,_=ie-1;for(;Z<=M&&Z<=_;){const I=R[Z],J=U[Z]=K?wi(U[Z]):ei(U[Z]);if(Us(I,J))v(I,J,N,null,F,W,T,re,K);else break;Z++}for(;Z<=M&&Z<=_;){const I=R[M],J=U[_]=K?wi(U[_]):ei(U[_]);if(Us(I,J))v(I,J,N,null,F,W,T,re,K);else break;M--,_--}if(Z>M){if(Z<=_){const I=_+1,J=I<ie?U[I].el:k;for(;Z<=_;)v(null,U[Z]=K?wi(U[Z]):ei(U[Z]),N,J,F,W,T,re,K),Z++}}else if(Z>_)for(;Z<=M;)ze(R[Z],F,W,!0),Z++;else{const I=Z,J=Z,ne=new Map;for(Z=J;Z<=_;Z++){const Ee=U[Z]=K?wi(U[Z]):ei(U[Z]);Ee.key!=null&&ne.set(Ee.key,Z)}let Y,Me=0;const ue=_-J+1;let Ce=!1,Be=0;const ce=new Array(ue);for(Z=0;Z<ue;Z++)ce[Z]=0;for(Z=I;Z<=M;Z++){const Ee=R[Z];if(Me>=ue){ze(Ee,F,W,!0);continue}let De;if(Ee.key!=null)De=ne.get(Ee.key);else for(Y=J;Y<=_;Y++)if(ce[Y-J]===0&&Us(Ee,U[Y])){De=Y;break}De===void 0?ze(Ee,F,W,!0):(ce[De-J]=Z+1,De>=Be?Be=De:Ce=!0,v(Ee,U[De],N,null,F,W,T,re,K),Me++)}const xe=Ce?Fv(ce):os;for(Y=xe.length-1,Z=ue-1;Z>=0;Z--){const Ee=J+Z,De=U[Ee],ve=U[Ee+1],je=Ee+1<ie?ve.el||fg(ve):k;ce[Z]===0?v(null,De,N,je,F,W,T,re,K):Ce&&(Y<0||Z!==xe[Y]?he(De,N,je,2):Y--)}}},he=(R,U,N,k,F=null)=>{const{el:W,type:T,transition:re,children:K,shapeFlag:Z}=R;if(Z&6){he(R.component.subTree,U,N,k);return}if(Z&128){R.suspense.move(U,N,k);return}if(Z&64){T.move(R,U,N,be);return}if(T===Yt){i(W,U,N);for(let M=0;M<K.length;M++)he(K[M],U,N,k);i(R.anchor,U,N);return}if(T===bl){S(R,U,N);return}if(k!==2&&Z&1&&re)if(k===0)re.beforeEnter(W),i(W,U,N),vn(()=>re.enter(W),F);else{const{leave:M,delayLeave:_,afterLeave:I}=re,J=()=>{R.ctx.isUnmounted?r(W):i(W,U,N)},ne=()=>{W._isLeaving&&W[Q_](!0),M(W,()=>{J(),I&&I()})};_?_(W,J,ne):ne()}else i(W,U,N)},ze=(R,U,N,k=!1,F=!1)=>{const{type:W,props:T,ref:re,children:K,dynamicChildren:Z,shapeFlag:ie,patchFlag:M,dirs:_,cacheIndex:I}=R;if(M===-2&&(F=!1),re!=null&&(Ii(),js(re,null,N,R,!0),Ni()),I!=null&&(U.renderCache[I]=void 0),ie&256){U.ctx.deactivate(R);return}const J=ie&1&&_,ne=!us(R);let Y;if(ne&&(Y=T&&T.onVnodeBeforeUnmount)&&$n(Y,U,R),ie&6)lt(R.component,N,k);else{if(ie&128){R.suspense.unmount(N,k);return}J&&cr(R,null,U,"beforeUnmount"),ie&64?R.type.remove(R,U,N,be,k):Z&&!Z.hasOnce&&(W!==Yt||M>0&&M&64)?se(Z,U,N,!1,!0):(W===Yt&&M&384||!F&&ie&16)&&se(K,U,N),k&&Ie(R)}(ne&&(Y=T&&T.onVnodeUnmounted)||J)&&vn(()=>{Y&&$n(Y,U,R),J&&cr(R,null,U,"unmounted")},N)},Ie=R=>{const{type:U,el:N,anchor:k,transition:F}=R;if(U===Yt){Ke(N,k);return}if(U===bl){x(R);return}const W=()=>{r(N),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(R.shapeFlag&1&&F&&!F.persisted){const{leave:T,delayLeave:re}=F,K=()=>T(N,W);re?re(R.el,W,K):K()}else W()},Ke=(R,U)=>{let N;for(;R!==U;)N=d(R),r(R),R=N;r(U)},lt=(R,U,N)=>{const{bum:k,scope:F,job:W,subTree:T,um:re,m:K,a:Z}=R;Cd(K),Cd(Z),k&&ml(k),F.stop(),W&&(W.flags|=8,ze(T,R,U,N)),re&&vn(re,U),vn(()=>{R.isUnmounted=!0},U)},se=(R,U,N,k=!1,F=!1,W=0)=>{for(let T=W;T<R.length;T++)ze(R[T],U,N,k,F)},oe=R=>{if(R.shapeFlag&6)return oe(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const U=d(R.anchor||R.el),N=U&&U[K_];return N?d(N):U};let Ae=!1;const ke=(R,U,N)=>{let k;R==null?U._vnode&&(ze(U._vnode,null,null,!0),k=U._vnode.component):v(U._vnode||null,R,U,null,null,null,N),U._vnode=R,Ae||(Ae=!0,_d(k),Vm(),Ae=!1)},be={p:v,um:ze,m:he,r:Ie,mt:te,mc:D,pc:V,pbc:E,n:oe,o:t};return{render:ke,hydrate:void 0,createApp:yv(ke)}}function Sl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ur({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ov(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function cg(t,e,n=!1){const i=t.children,r=e.children;if(Ye(i)&&Ye(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=wi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&cg(o,a)),a.type===tl&&(a.patchFlag===-1&&(a=r[s]=wi(a)),a.el=o.el),a.type===ci&&!a.el&&(a.el=o.el)}}function Fv(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function ug(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ug(e)}function Cd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function fg(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?fg(e.subTree):null}const dg=t=>t.__isSuspense;function Bv(t,e){e&&e.pendingBranch?Ye(t)?e.effects.push(...t):e.effects.push(t):X_(t)}const Yt=Symbol.for("v-fgt"),tl=Symbol.for("v-txt"),ci=Symbol.for("v-cmt"),bl=Symbol.for("v-stc"),to=[];let Rn=null;function gt(t=!1){to.push(Rn=t?null:[])}function kv(){to.pop(),Rn=to[to.length-1]||null}let ho=1;function Ua(t,e=!1){ho+=t,t<0&&Rn&&e&&(Rn.hasOnce=!0)}function hg(t){return t.dynamicChildren=ho>0?Rn||os:null,kv(),ho>0&&Rn&&Rn.push(t),t}function jn(t,e,n,i,r,s){return hg(Zu(t,e,n,i,r,s,!0))}function Bt(t,e,n,i,r){return hg(Gt(t,e,n,i,r,!0))}function po(t){return t?t.__v_isVNode===!0:!1}function Us(t,e){return t.type===e.type&&t.key===e.key}const pg=({key:t})=>t??null,xa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?kt(t)||Ot(t)||Qe(t)?{i:dn,r:t,k:e,f:!!n}:t:null);function Zu(t,e=null,n=null,i=0,r=null,s=t===Yt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&pg(e),ref:e&&xa(e),scopeId:Gm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:dn};return a?(Qu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=kt(n)?8:16),ho>0&&!o&&Rn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Rn.push(l),l}const Gt=zv;function zv(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Ym)&&(t=ci),po(t)){const a=Cr(t,e,!0);return n&&Qu(a,n),ho>0&&!s&&Rn&&(a.shapeFlag&6?Rn[Rn.indexOf(t)]=a:Rn.push(a)),a.patchFlag=-2,a}if(Kv(t)&&(t=t.__vccOpts),e){e=Vv(e);let{class:a,style:l}=e;a&&!kt(a)&&(e.class=$a(a)),vt(l)&&(Za(l)&&!Ye(l)&&(l=Zt({},l)),e.style=Ts(l))}const o=kt(t)?1:dg(t)?128:Z_(t)?64:vt(t)?4:Qe(t)?2:0;return Zu(t,e,n,i,r,o,s,!0)}function Vv(t){return t?Za(t)||ig(t)?Zt({},t):t:null}function Cr(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?ui(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&pg(c),ref:e&&e.ref?n&&s?Ye(s)?s.concat(xa(e)):[s,xa(e)]:xa(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Yt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cr(t.ssContent),ssFallback:t.ssFallback&&Cr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&qu(u,l.clone(u)),u}function mg(t=" ",e=0){return Gt(tl,null,t,e)}function no(t="",e=!1){return e?(gt(),Bt(ci,null,t)):Gt(ci,null,t)}function ei(t){return t==null||typeof t=="boolean"?Gt(ci):Ye(t)?Gt(Yt,null,t.slice()):po(t)?wi(t):Gt(tl,null,String(t))}function wi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cr(t)}function Qu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ye(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Qu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!ig(e)?e._ctx=dn:r===3&&dn&&(dn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Qe(e)?(e={default:e,_ctx:dn},n=32):(e=String(e),i&64?(n=16,e=[mg(e)]):n=8);t.children=e,t.shapeFlag|=n}function ui(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=$a([e.class,i.class]));else if(r==="style")e.style=Ts([e.style,i.style]);else if(Wa(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ye(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function $n(t,e,n,i=null){li(t,e,7,[n,i])}const Hv=Qm();let Gv=0;function Wv(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Hv,s={uid:Gv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new f_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sg(i,r),emitsOptions:jm(i,r),emit:null,emitted:null,propsDefaults:Pt,inheritAttrs:i.inheritAttrs,ctx:Pt,data:Pt,props:Pt,attrs:Pt,slots:Pt,refs:Pt,setupState:Pt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=bv.bind(null,s),t.ce&&t.ce(s),s}let tn=null;const ws=()=>tn||dn;let Oa,Tc;{const t=Ya(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Oa=e("__VUE_INSTANCE_SETTERS__",n=>tn=n),Tc=e("__VUE_SSR_SETTERS__",n=>mo=n)}const Co=t=>{const e=tn;return Oa(t),t.scope.on(),()=>{t.scope.off(),Oa(e)}},Pd=()=>{tn&&tn.scope.off(),Oa(null)};function gg(t){return t.vnode.shapeFlag&4}let mo=!1;function Xv(t,e=!1,n=!1){e&&Tc(e);const{props:i,children:r}=t.vnode,s=gg(t);Cv(t,i,s,e),Lv(t,r,n||e);const o=s?qv(t,e):void 0;return e&&Tc(!1),o}function qv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,hv);const{setup:i}=n;if(i){Ii();const r=t.setupContext=i.length>1?Yv(t):null,s=Co(t),o=wo(i,t,0,[t.props,r]),a=hm(o);if(Ni(),s(),(a||t.sp)&&!us(t)&&Xm(t),a){if(o.then(Pd,Pd),e)return o.then(l=>{Rd(t,l)}).catch(l=>{Qa(l,t,0)});t.asyncDep=o}else Rd(t,o)}else _g(t)}function Rd(t,e,n){Qe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:vt(e)&&(t.setupState=Om(e)),_g(t)}function _g(t,e,n){const i=t.type;t.render||(t.render=i.render||si);{const r=Co(t);Ii();try{pv(t)}finally{Ni(),r()}}}const Jv={get(t,e){return en(t,"get",""),t[e]}};function Yv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Jv),slots:t.slots,emit:t.emit,expose:e}}function ju(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Om(Nm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in eo)return eo[n](t)},has(e,n){return n in e||n in eo}})):t.proxy}function $v(t,e=!0){return Qe(t)?t.displayName||t.name:t.name||e&&t.__name}function Kv(t){return Qe(t)&&"__vccOpts"in t}const ct=(t,e)=>z_(t,e,mo);function io(t,e,n){try{Ua(-1);const i=arguments.length;return i===2?vt(e)&&!Ye(e)?po(e)?Gt(t,null,[e]):Gt(t,e):Gt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&po(n)&&(n=[n]),Gt(t,e,n))}finally{Ua(1)}}const Zv="3.5.28";let wc;const Dd=typeof window<"u"&&window.trustedTypes;if(Dd)try{wc=Dd.createPolicy("vue",{createHTML:t=>t})}catch{}const vg=wc?t=>wc.createHTML(t):t=>t,Qv="http://www.w3.org/2000/svg",jv="http://www.w3.org/1998/Math/MathML",Ti=typeof document<"u"?document:null,Ld=Ti&&Ti.createElement("template"),ex={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Ti.createElementNS(Qv,t):e==="mathml"?Ti.createElementNS(jv,t):n?Ti.createElement(t,{is:n}):Ti.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Ti.createTextNode(t),createComment:t=>Ti.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ti.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Ld.innerHTML=vg(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Ld.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},tx=Symbol("_vtc");function nx(t,e,n){const i=t[tx];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Id=Symbol("_vod"),ix=Symbol("_vsh"),rx=Symbol(""),sx=/(?:^|;)\s*display\s*:/;function ox(t,e,n){const i=t.style,r=kt(n);let s=!1;if(n&&!r){if(e)if(kt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ya(i,a,"")}else for(const o in e)n[o]==null&&ya(i,o,"");for(const o in n)o==="display"&&(s=!0),ya(i,o,n[o])}else if(r){if(e!==n){const o=i[rx];o&&(n+=";"+o),i.cssText=n,s=sx.test(n)}}else e&&t.removeAttribute("style");Id in t&&(t[Id]=s?i.display:"",t[ix]&&(i.display="none"))}const Nd=/\s*!important$/;function ya(t,e,n){if(Ye(n))n.forEach(i=>ya(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=ax(t,e);Nd.test(n)?t.setProperty(Lr(i),n.replace(Nd,""),"important"):t[i]=n}}const Ud=["Webkit","Moz","ms"],Ml={};function ax(t,e){const n=Ml[e];if(n)return n;let i=Mn(e);if(i!=="filter"&&i in t)return Ml[e]=i;i=Ja(i);for(let r=0;r<Ud.length;r++){const s=Ud[r]+i;if(s in t)return Ml[e]=s}return e}const Od="http://www.w3.org/1999/xlink";function Fd(t,e,n,i,r,s=c_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Od,e.slice(6,e.length)):t.setAttributeNS(Od,e,n):n==null||s&&!_m(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Wn(n)?String(n):n)}function Bd(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?vg(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=_m(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function lx(t,e,n,i){t.addEventListener(e,n,i)}function cx(t,e,n,i){t.removeEventListener(e,n,i)}const kd=Symbol("_vei");function ux(t,e,n,i,r=null){const s=t[kd]||(t[kd]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=fx(e);if(i){const c=s[e]=px(i,r);lx(t,a,c,l)}else o&&(cx(t,a,o,l),s[e]=void 0)}}const zd=/(?:Once|Passive|Capture)$/;function fx(t){let e;if(zd.test(t)){e={};let i;for(;i=t.match(zd);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Lr(t.slice(2)),e]}let El=0;const dx=Promise.resolve(),hx=()=>El||(dx.then(()=>El=0),El=Date.now());function px(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;li(mx(i,n.value),e,5,[i])};return n.value=t,n.attached=hx(),n}function mx(t,e){if(Ye(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Vd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,gx=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?nx(t,i,o):e==="style"?ox(t,n,i):Wa(e)?Iu(e)||ux(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_x(t,e,i,o))?(Bd(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Fd(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!kt(i))?Bd(t,Mn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Fd(t,e,i,o))};function _x(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Vd(e)&&Qe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Vd(e)&&kt(n)?!1:e in t}const vx=Zt({patchProp:gx},ex);let Hd;function xx(){return Hd||(Hd=Nv(vx))}const yx=((...t)=>{const e=xx().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=bx(i);if(!r)return;const s=e._component;!Qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Sx(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Sx(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function bx(t){return kt(t)?document.querySelector(t):t}function xg(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=xg(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function yg(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=xg(t))&&(i&&(i+=" "),i+=e);return i}const Gd=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,Wd=yg,Mx=(t,e)=>n=>{var i;if(e?.variants==null)return Wd(t,n?.class,n?.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const u=n?.[c],f=s?.[c];if(u===null)return null;const d=Gd(u)||Gd(f);return r[c][d]}),a=n&&Object.entries(n).reduce((c,u)=>{let[f,d]=u;return d===void 0||(c[f]=d),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,u)=>{let{class:f,className:d,...p}=u;return Object.entries(p).every(g=>{let[v,m]=g;return Array.isArray(m)?m.includes({...s,...a}[v]):{...s,...a}[v]===m})?[...c,f,d]:c},[]);return Wd(t,o,l,n?.class,n?.className)};function Sg(t,e=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY){return Math.min(n,Math.max(e,t))}function ef(t,e){const n=typeof t=="string"&&!e?`${t}Context`:e,i=Symbol(n);return[o=>{const a=cs(i,o);if(a||a===null)return a;throw new Error(`Injection \`${i.toString()}\` not found. Component must be used within ${Array.isArray(t)?`one of the following components: ${t.join(", ")}`:`\`${t}\``}`)},o=>(Wu(i,o),o)]}function bg(t){return t?t.flatMap(e=>e.type===Yt?bg(e.children):[e]):[]}const[Ex]=ef("ConfigProvider");typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Tx=t=>typeof t<"u";function wx(t){return ms(Ot(t)?new Proxy({},{get(e,n,i){return Se(Reflect.get(t.value,n,i))},set(e,n,i){return Ot(t.value[n])&&!Ot(i)?t.value[n].value=i:t.value[n]=i,!0},deleteProperty(e,n){return Reflect.deleteProperty(t.value,n)},has(e,n){return Reflect.has(t.value,n)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}}):t)}function Ax(t){return wx(ct(t))}function Cx(t,...e){const n=e.flat(),i=n[0];return Ax(()=>Object.fromEntries(typeof i=="function"?Object.entries(uo(t)).filter(([r,s])=>!i(Hu(s),r)):Object.entries(uo(t)).filter(r=>!n.includes(r[0]))))}function nl(t){var e;const n=Hu(t);return(e=n?.$el)!==null&&e!==void 0?e:n}function Px(){const t=I_(!1),e=ws();return e&&Ao(()=>{t.value=!0},e),t}function Rx(t){return JSON.parse(JSON.stringify(t))}function Dx(t,e,n,i={}){var r,s;const{clone:o=!1,passive:a=!1,eventName:l,deep:c=!1,defaultValue:u,shouldEmit:f}=i,d=ws(),p=n||d?.emit||(d==null||(r=d.$emit)===null||r===void 0?void 0:r.bind(d))||(d==null||(s=d.proxy)===null||s===void 0||(s=s.$emit)===null||s===void 0?void 0:s.bind(d?.proxy));let g=l;g=g||`update:${e.toString()}`;const v=b=>o?typeof o=="function"?o(b):Rx(b):b,m=()=>Tx(t[e])?v(t[e]):u,h=b=>{f?f(b)&&p(g,b):p(g,b)};if(a){const b=rn(m());let S=!1;return wr(()=>t[e],x=>{S||(S=!0,b.value=v(x),km(()=>S=!1))}),wr(b,x=>{!S&&(x!==t[e]||c)&&h(x)},{deep:c}),b}else return ct({get(){return m()},set(b){h(b)}})}function Lx(t){const e=Ex({dir:rn("ltr")});return ct(()=>t?.value||e.dir?.value||"ltr")}function Ix(t){const e=ws(),n=e?.type.emits,i={};return n?.length||console.warn(`No emitted event found. Please check component: ${e?.type.__name}`),n?.forEach(r=>{i[_a(Mn(r))]=(...s)=>t(r,...s)}),i}function Nx(t){return ct(()=>Hu(t)?!!nl(t)?.closest("form"):!0)}function Ir(){const t=ws(),e=rn(),n=ct(()=>["#text","#comment"].includes(e.value?.$el.nodeName)?e.value?.$el.nextElementSibling:nl(e)),i=Object.assign({},t.exposed),r={};for(const o in t.props)Object.defineProperty(r,o,{enumerable:!0,configurable:!0,get:()=>t.props[o]});if(Object.keys(i).length>0)for(const o in i)Object.defineProperty(r,o,{enumerable:!0,configurable:!0,get:()=>i[o]});Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>t.vnode.el}),t.exposed=r;function s(o){if(e.value=o,!!o&&(Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>o instanceof Element?o:o.$el}),!(o instanceof Element)&&!Object.hasOwn(o,"$el"))){const a=o.$.exposed,l=Object.assign({},r);for(const c in a)Object.defineProperty(l,c,{enumerable:!0,configurable:!0,get:()=>a[c]});t.exposed=l}}return{forwardRef:s,currentRef:e,currentElement:n}}function Ux(t){const e=ws(),n=Object.keys(e?.type.props??{}).reduce((r,s)=>{const o=(e?.type.props[s]).default;return o!==void 0&&(r[s]=o),r},{}),i=B_(t);return ct(()=>{const r={},s=e?.vnode.props??{};return Object.keys(s).forEach(o=>{r[Mn(o)]=s[o]}),Object.keys({...n,...r}).reduce((o,a)=>(i.value[a]!==void 0&&(o[a]=i.value[a]),o),{})})}function Ox(t,e){const n=Ux(t),i=e?Ix(e):{};return ct(()=>({...n.value,...i}))}function Fx(t){const e=rn(),n=ct(()=>e.value?.width??0),i=ct(()=>e.value?.height??0);return Ao(()=>{const r=nl(t);if(r){e.value={width:r.offsetWidth,height:r.offsetHeight};const s=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const a=o[0];let l,c;if("borderBoxSize"in a){const u=a.borderBoxSize,f=Array.isArray(u)?u[0]:u;l=f.inlineSize,c=f.blockSize}else l=r.offsetWidth,c=r.offsetHeight;e.value={width:l,height:c}});return s.observe(r,{box:"border-box"}),()=>s.unobserve(r)}else e.value=void 0}),{width:n,height:i}}const Ac=Wt({name:"PrimitiveSlot",inheritAttrs:!1,setup(t,{attrs:e,slots:n}){return()=>{if(!n.default)return null;const i=bg(n.default()),r=i.findIndex(l=>l.type!==ci);if(r===-1)return i;const s=i[r];delete s.props?.ref;const o=s.props?ui(e,s.props):e,a=Cr({...s,props:{}},o);return i.length===1?a:(i[r]=a,i)}}}),Bx=["area","img","input"],As=Wt({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(t,{attrs:e,slots:n}){const i=t.asChild?"template":t.as;return typeof i=="string"&&Bx.includes(i)?()=>io(i,e):i!=="template"?()=>io(t.as,e,{default:n.default}):()=>io(Ac,e,{default:n.default})}});function Cc(){const t=rn(),e=ct(()=>["#text","#comment"].includes(t.value?.$el.nodeName)?t.value?.$el.nextElementSibling:nl(t));return{primitiveElement:t,currentElement:e}}const Xd="data-reka-collection-item";function tf(t={}){const{key:e="",isProvider:n=!1}=t,i=`${e}CollectionProvider`;let r;n?(r={collectionRef:rn(),itemMap:rn(new Map)},Wu(i,r)):r=cs(i);const s=(u=!1)=>{const f=r.collectionRef.value;if(!f)return[];const d=Array.from(f.querySelectorAll(`[${Xd}]`)),g=Array.from(r.itemMap.value.values()).sort((v,m)=>d.indexOf(v.ref)-d.indexOf(m.ref));return u?g:g.filter(v=>v.ref.dataset.disabled!=="")},o=Wt({name:"CollectionSlot",inheritAttrs:!1,setup(u,{slots:f,attrs:d}){const{primitiveElement:p,currentElement:g}=Cc();return wr(g,()=>{r.collectionRef.value=g.value}),()=>io(Ac,{ref:p,...d},f)}}),a=Wt({name:"CollectionItem",inheritAttrs:!1,props:{value:{validator:()=>!0}},setup(u,{slots:f,attrs:d}){const{primitiveElement:p,currentElement:g}=Cc();return Y_(v=>{if(g.value){const m=Nm(g.value);r.itemMap.value.set(m,{ref:g.value,value:u.value}),v(()=>r.itemMap.value.delete(m))}}),()=>io(Ac,{...d,[Xd]:"",ref:p},f)}}),l=ct(()=>Array.from(r.itemMap.value.values())),c=ct(()=>r.itemMap.value.size);return{getItems:s,reactiveItems:l,itemMapSize:c,CollectionSlot:o,CollectionItem:a}}var kx=Wt({__name:"VisuallyHidden",props:{feature:{type:String,required:!1,default:"focusable"},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){return(e,n)=>(gt(),Bt(Se(As),{as:e.as,"as-child":e.asChild,"aria-hidden":e.feature==="focusable"?"true":void 0,"data-hidden":e.feature==="fully-hidden"?"":void 0,tabindex:e.feature==="fully-hidden"?"-1":void 0,style:{position:"absolute",border:0,width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",whiteSpace:"nowrap",wordWrap:"normal",top:"-1px",left:"-1px"}},{default:on(()=>[hi(e.$slots,"default")]),_:3},8,["as","as-child","aria-hidden","data-hidden","tabindex"]))}}),zx=kx,Vx=Wt({inheritAttrs:!1,__name:"VisuallyHiddenInputBubble",props:{name:{type:String,required:!0},value:{type:null,required:!0},checked:{type:Boolean,required:!1,default:void 0},required:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},feature:{type:String,required:!1,default:"fully-hidden"}},setup(t){const e=t,{primitiveElement:n,currentElement:i}=Cc(),r=ct(()=>e.checked??e.value);return wr(r,(s,o)=>{if(!i.value)return;const a=i.value,l=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(l,"value").set;if(u&&s!==o){const f=new Event("input",{bubbles:!0}),d=new Event("change",{bubbles:!0});u.call(a,s),a.dispatchEvent(f),a.dispatchEvent(d)}}),(s,o)=>(gt(),Bt(zx,ui({ref_key:"primitiveElement",ref:n},{...e,...s.$attrs},{as:"input"}),null,16))}}),qd=Vx,Hx=Wt({inheritAttrs:!1,__name:"VisuallyHiddenInput",props:{name:{type:String,required:!0},value:{type:null,required:!0},checked:{type:Boolean,required:!1,default:void 0},required:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},feature:{type:String,required:!1,default:"fully-hidden"}},setup(t){const e=t,n=ct(()=>typeof e.value=="object"&&Array.isArray(e.value)&&e.value.length===0&&e.required),i=ct(()=>typeof e.value=="string"||typeof e.value=="number"||typeof e.value=="boolean"||e.value===null||e.value===void 0?[{name:e.name,value:e.value}]:typeof e.value=="object"&&Array.isArray(e.value)?e.value.flatMap((r,s)=>typeof r=="object"?Object.entries(r).map(([o,a])=>({name:`${e.name}[${s}][${o}]`,value:a})):{name:`${e.name}[${s}]`,value:r}):e.value!==null&&typeof e.value=="object"&&!Array.isArray(e.value)?Object.entries(e.value).map(([r,s])=>({name:`${e.name}[${r}]`,value:s})):[]);return(r,s)=>(gt(),jn(Yt,null,[no(" We render single input if it's required "),n.value?(gt(),Bt(qd,ui({key:r.name},{...e,...r.$attrs},{name:r.name,value:r.value}),null,16,["name","value"])):(gt(!0),jn(Yt,{key:1},Yu(i.value,o=>(gt(),Bt(qd,ui({key:o.name},{ref_for:!0},{...e,...r.$attrs},{name:o.name,value:o.value}),null,16,["name","value"]))),128))],2112))}}),Gx=Hx;function Wx(t=[],e,n){const i=[...t];return i[n]=e,i.sort((r,s)=>r-s)}function Mg(t,e,n){const s=100/(n-e)*(t-e);return Sg(s,0,100)}function Xx(t,e){return e>2?`Value ${t+1} of ${e}`:e===2?["Minimum","Maximum"][t]:void 0}function qx(t,e){if(t.length===1)return 0;const n=t.map(r=>Math.abs(r-e)),i=Math.min(...n);return n.indexOf(i)}function Jx(t,e,n){const i=t/2,s=nf([0,50],[0,i]);return(i-s(e)*n)*n}function Yx(t){return t.slice(0,-1).map((e,n)=>t[n+1]-e)}function $x(t,e){if(e>0){const n=Yx(t);return Math.min(...n)>=e}return!0}function nf(t,e){return n=>{if(t[0]===t[1]||e[0]===e[1])return e[0];const i=(e[1]-e[0])/(t[1]-t[0]);return e[0]+i*(n-t[0])}}function Kx(t){return(String(t).split(".")[1]||"").length}function Zx(t,e){const n=10**e;return Math.round(t*n)/n}const Eg=["PageUp","PageDown"],Tg=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],wg={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageUp","ArrowUp","ArrowLeft"]},[Ag,Cg]=ef(["SliderVertical","SliderHorizontal"]);var Qx=Wt({__name:"SliderHorizontal",props:{dir:{type:String,required:!1},min:{type:Number,required:!0},max:{type:Number,required:!0},inverted:{type:Boolean,required:!0}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(t,{emit:e}){const n=t,i=e,{max:r,min:s,dir:o,inverted:a}=uo(n),{forwardRef:l,currentElement:c}=Ir(),u=Cs(),f=rn(),d=rn(),p=ct(()=>o?.value!=="rtl"&&!a.value||o?.value!=="ltr"&&a.value);function g(b,S){const x=d.value||c.value.getBoundingClientRect(),A=[...u.thumbElements.value][u.valueIndexToChangeRef.value],C=u.thumbAlignment.value==="contain"?A.clientWidth:0;!f.value&&!S&&u.thumbAlignment.value==="contain"&&(f.value=b.clientX-A.getBoundingClientRect().left);const P=[0,x.width-C],D=p.value?[s.value,r.value]:[r.value,s.value],y=nf(P,D);d.value=x;const E=S?b.clientX-x.left-C/2:b.clientX-x.left-(f.value??0);return y(E)}const v=ct(()=>p.value?"left":"right"),m=ct(()=>p.value?"right":"left"),h=ct(()=>p.value?1:-1);return Cg({startEdge:v,endEdge:m,direction:h,size:"width"}),(b,S)=>(gt(),Bt(Pg,{ref:Se(l),dir:Se(o),"data-orientation":"horizontal",style:Ts({"--reka-slider-thumb-transform":!p.value&&Se(u).thumbAlignment.value==="overflow"?"translateX(50%)":"translateX(-50%)"}),onSlideStart:S[0]||(S[0]=x=>{const A=g(x,!0);i("slideStart",A)}),onSlideMove:S[1]||(S[1]=x=>{const A=g(x);i("slideMove",A)}),onSlideEnd:S[2]||(S[2]=()=>{d.value=void 0,f.value=void 0,i("slideEnd")}),onStepKeyDown:S[3]||(S[3]=x=>{const A=p.value?"from-left":"from-right",C=Se(wg)[A].includes(x.key);i("stepKeyDown",x,C?-1:1)}),onEndKeyDown:S[4]||(S[4]=x=>i("endKeyDown",x)),onHomeKeyDown:S[5]||(S[5]=x=>i("homeKeyDown",x))},{default:on(()=>[hi(b.$slots,"default")]),_:3},8,["dir","style"]))}}),jx=Qx,ey=Wt({__name:"SliderVertical",props:{min:{type:Number,required:!0},max:{type:Number,required:!0},inverted:{type:Boolean,required:!0}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(t,{emit:e}){const n=t,i=e,{max:r,min:s,inverted:o}=uo(n),a=Cs(),{forwardRef:l,currentElement:c}=Ir(),u=rn(),f=rn(),d=ct(()=>!o.value);function p(h,b){const S=f.value||c.value.getBoundingClientRect(),x=[...a.thumbElements.value][a.valueIndexToChangeRef.value],A=a.thumbAlignment.value==="contain"?x.clientHeight:0;!u.value&&!b&&a.thumbAlignment.value==="contain"&&(u.value=h.clientY-x.getBoundingClientRect().top);const C=[0,S.height-A],P=d.value?[r.value,s.value]:[s.value,r.value],D=nf(C,P),y=b?h.clientY-S.top-A/2:h.clientY-S.top-(u.value??0);return f.value=S,D(y)}const g=ct(()=>d.value?"bottom":"top"),v=ct(()=>d.value?"top":"bottom"),m=ct(()=>d.value?1:-1);return Cg({startEdge:g,endEdge:v,direction:m,size:"height"}),(h,b)=>(gt(),Bt(Pg,{ref:Se(l),"data-orientation":"vertical",style:Ts({"--reka-slider-thumb-transform":!d.value&&Se(a).thumbAlignment.value==="overflow"?"translateY(-50%)":"translateY(50%)"}),onSlideStart:b[0]||(b[0]=S=>{const x=p(S,!0);i("slideStart",x)}),onSlideMove:b[1]||(b[1]=S=>{const x=p(S);i("slideMove",x)}),onSlideEnd:b[2]||(b[2]=()=>{f.value=void 0,u.value=void 0,i("slideEnd")}),onStepKeyDown:b[3]||(b[3]=S=>{const x=d.value?"from-bottom":"from-top",A=Se(wg)[x].includes(S.key);i("stepKeyDown",S,A?-1:1)}),onEndKeyDown:b[4]||(b[4]=S=>i("endKeyDown",S)),onHomeKeyDown:b[5]||(b[5]=S=>i("homeKeyDown",S))},{default:on(()=>[hi(h.$slots,"default")]),_:3},8,["style"]))}}),ty=ey;const[Cs,ny]=ef("SliderRoot");var iy=Wt({inheritAttrs:!1,__name:"SliderRoot",props:{defaultValue:{type:Array,required:!1,default:()=>[0]},modelValue:{type:[Array,null],required:!1},disabled:{type:Boolean,required:!1,default:!1},orientation:{type:String,required:!1,default:"horizontal"},dir:{type:String,required:!1},inverted:{type:Boolean,required:!1,default:!1},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},step:{type:Number,required:!1,default:1},minStepsBetweenThumbs:{type:Number,required:!1,default:0},thumbAlignment:{type:String,required:!1,default:"contain"},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue","valueCommit"],setup(t,{emit:e}){const n=t,i=e,{min:r,max:s,step:o,minStepsBetweenThumbs:a,orientation:l,disabled:c,thumbAlignment:u,dir:f}=uo(n),d=Lx(f),{forwardRef:p,currentElement:g}=Ir(),v=Nx(g),{CollectionSlot:m}=tf({isProvider:!0}),h=Dx(n,"modelValue",i,{defaultValue:n.defaultValue,passive:n.modelValue===void 0}),b=ct(()=>Array.isArray(h.value)?[...h.value]:[]),S=rn(0),x=rn(b.value);function A(E){const L=qx(b.value,E);D(E,L)}function C(E){D(E,S.value)}function P(){const E=x.value[S.value];b.value[S.value]!==E&&i("valueCommit",pt(b.value))}function D(E,L,{commit:H}={commit:!1}){const X=Kx(o.value),te=Zx(Math.round((E-r.value)/o.value)*o.value+r.value,X),Q=Sg(te,r.value,s.value),q=Wx(b.value,Q,L);if($x(q,a.value*o.value)){S.value=q.indexOf(Q);const z=String(q)!==String(h.value);z&&H&&i("valueCommit",q),z&&(y.value[S.value]?.focus(),h.value=q)}}const y=rn([]);return ny({modelValue:h,currentModelValue:b,valueIndexToChangeRef:S,thumbElements:y,orientation:l,min:r,max:s,disabled:c,thumbAlignment:u}),(E,L)=>(gt(),Bt(Se(m),null,{default:on(()=>[(gt(),Bt(fv(Se(l)==="horizontal"?jx:ty),ui(E.$attrs,{ref:Se(p),"as-child":E.asChild,as:E.as,min:Se(r),max:Se(s),dir:Se(d),inverted:E.inverted,"aria-disabled":Se(c),"data-disabled":Se(c)?"":void 0,onPointerdown:L[0]||(L[0]=()=>{Se(c)||(x.value=b.value)}),onSlideStart:L[1]||(L[1]=H=>!Se(c)&&A(H)),onSlideMove:L[2]||(L[2]=H=>!Se(c)&&C(H)),onSlideEnd:L[3]||(L[3]=H=>!Se(c)&&P()),onHomeKeyDown:L[4]||(L[4]=H=>!Se(c)&&D(Se(r),0,{commit:!0})),onEndKeyDown:L[5]||(L[5]=H=>!Se(c)&&D(Se(s),b.value.length-1,{commit:!0})),onStepKeyDown:L[6]||(L[6]=(H,X)=>{if(!Se(c)){const q=Se(Eg).includes(H.key)||H.shiftKey&&Se(Tg).includes(H.key)?10:1,z=S.value,V=b.value[z],de=Se(o)*q*X;D(V+de,z,{commit:!0})}})}),{default:on(()=>[hi(E.$slots,"default",{modelValue:Se(h)}),Se(v)&&E.name?(gt(),Bt(Se(Gx),{key:0,type:"number",value:Se(h),name:E.name,required:E.required,disabled:Se(c),step:Se(o)},null,8,["value","name","required","disabled","step"])):no("v-if",!0)]),_:3},16,["as-child","as","min","max","dir","inverted","aria-disabled","data-disabled"]))]),_:3}))}}),ry=iy,sy=Wt({__name:"SliderImpl",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},emits:["slideStart","slideMove","slideEnd","homeKeyDown","endKeyDown","stepKeyDown"],setup(t,{emit:e}){const n=t,i=e,r=Cs();return(s,o)=>(gt(),Bt(Se(As),ui({"data-slider-impl":""},n,{onKeydown:o[0]||(o[0]=a=>{a.key==="Home"?(i("homeKeyDown",a),a.preventDefault()):a.key==="End"?(i("endKeyDown",a),a.preventDefault()):Se(Eg).concat(Se(Tg)).includes(a.key)&&(i("stepKeyDown",a),a.preventDefault())}),onPointerdown:o[1]||(o[1]=a=>{const l=a.target;l.setPointerCapture(a.pointerId),a.preventDefault(),Se(r).thumbElements.value.includes(l)?l.focus():i("slideStart",a)}),onPointermove:o[2]||(o[2]=a=>{a.target.hasPointerCapture(a.pointerId)&&i("slideMove",a)}),onPointerup:o[3]||(o[3]=a=>{const l=a.target;l.hasPointerCapture(a.pointerId)&&(l.releasePointerCapture(a.pointerId),i("slideEnd",a))})}),{default:on(()=>[hi(s.$slots,"default")]),_:3},16))}}),Pg=sy,oy=Wt({__name:"SliderRange",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const e=Cs(),n=Ag();Ir();const i=ct(()=>e.currentModelValue.value.map(o=>Mg(o,e.min.value,e.max.value))),r=ct(()=>e.currentModelValue.value.length>1?Math.min(...i.value):0),s=ct(()=>100-Math.max(...i.value,0));return(o,a)=>(gt(),Bt(Se(As),{"data-disabled":Se(e).disabled.value?"":void 0,"data-orientation":Se(e).orientation.value,"as-child":o.asChild,as:o.as,style:Ts({[Se(n).startEdge.value]:`${r.value}%`,[Se(n).endEdge.value]:`${s.value}%`})},{default:on(()=>[hi(o.$slots,"default")]),_:3},8,["data-disabled","data-orientation","as-child","as","style"]))}}),ay=oy,ly=Wt({inheritAttrs:!1,__name:"SliderThumbImpl",props:{index:{type:Number,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const e=t,n=Cs(),i=Ag(),{forwardRef:r,currentElement:s}=Ir(),{CollectionItem:o}=tf(),a=ct(()=>n.modelValue?.value?.[e.index]),l=ct(()=>a.value===void 0?0:Mg(a.value,n.min.value??0,n.max.value??100)),c=ct(()=>Xx(e.index,n.modelValue?.value?.length??0)),u=Fx(s),f=ct(()=>u[i.size].value),d=ct(()=>n.thumbAlignment.value==="overflow"||!f.value?0:Jx(f.value,l.value,i.direction.value)),p=Px();return Ao(()=>{n.thumbElements.value.push(s.value)}),Ju(()=>{const g=n.thumbElements.value.findIndex(v=>v===s.value)??-1;n.thumbElements.value.splice(g,1)}),(g,v)=>(gt(),Bt(Se(o),null,{default:on(()=>[Gt(Se(As),ui(g.$attrs,{ref:Se(r),role:"slider",tabindex:Se(n).disabled.value?void 0:0,"aria-label":g.$attrs["aria-label"]||c.value,"data-disabled":Se(n).disabled.value?"":void 0,"data-orientation":Se(n).orientation.value,"aria-valuenow":a.value,"aria-valuemin":Se(n).min.value,"aria-valuemax":Se(n).max.value,"aria-orientation":Se(n).orientation.value,"as-child":g.asChild,as:g.as,style:{transform:"var(--reka-slider-thumb-transform)",position:"absolute",[Se(i).startEdge.value]:`calc(${l.value}% + ${d.value}px)`,display:!Se(p)&&a.value===void 0?"none":void 0},onFocus:v[0]||(v[0]=()=>{Se(n).valueIndexToChangeRef.value=g.index})}),{default:on(()=>[hi(g.$slots,"default")]),_:3},16,["tabindex","aria-label","data-disabled","data-orientation","aria-valuenow","aria-valuemin","aria-valuemax","aria-orientation","as-child","as","style"])]),_:3}))}}),cy=ly,uy=Wt({__name:"SliderThumb",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const e=t,{getItems:n}=tf(),{forwardRef:i,currentElement:r}=Ir(),s=ct(()=>r.value?n(!0).findIndex(o=>o.ref===r.value):-1);return(o,a)=>(gt(),Bt(cy,ui({ref:Se(i)},e,{index:s.value}),{default:on(()=>[hi(o.$slots,"default")]),_:3},16,["index"]))}}),fy=uy,dy=Wt({__name:"SliderTrack",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const e=Cs();return Ir(),(n,i)=>(gt(),Bt(Se(As),{"as-child":n.asChild,as:n.as,"data-disabled":Se(e).disabled.value?"":void 0,"data-orientation":Se(e).orientation.value},{default:on(()=>[hi(n.$slots,"default")]),_:3},8,["as-child","as","data-disabled","data-orientation"]))}}),hy=dy;const py=(t,e)=>{const n=new Array(t.length+e.length);for(let i=0;i<t.length;i++)n[i]=t[i];for(let i=0;i<e.length;i++)n[t.length+i]=e[i];return n},my=(t,e)=>({classGroupId:t,validator:e}),Rg=(t=new Map,e=null,n)=>({nextPart:t,validators:e,classGroupId:n}),Fa="-",Jd=[],gy="arbitrary..",_y=t=>{const e=xy(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{if(o.startsWith("[")&&o.endsWith("]"))return vy(o);const a=o.split(Fa),l=a[0]===""&&a.length>1?1:0;return Dg(a,l,e)},getConflictingClassGroupIds:(o,a)=>{if(a){const l=i[o],c=n[o];return l?c?py(c,l):l:c||Jd}return n[o]||Jd}}},Dg=(t,e,n)=>{if(t.length-e===0)return n.classGroupId;const r=t[e],s=n.nextPart.get(r);if(s){const c=Dg(t,e+1,s);if(c)return c}const o=n.validators;if(o===null)return;const a=e===0?t.join(Fa):t.slice(e).join(Fa),l=o.length;for(let c=0;c<l;c++){const u=o[c];if(u.validator(a))return u.classGroupId}},vy=t=>t.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=t.slice(1,-1),n=e.indexOf(":"),i=e.slice(0,n);return i?gy+i:void 0})(),xy=t=>{const{theme:e,classGroups:n}=t;return yy(n,e)},yy=(t,e)=>{const n=Rg();for(const i in t){const r=t[i];rf(r,n,i,e)}return n},rf=(t,e,n,i)=>{const r=t.length;for(let s=0;s<r;s++){const o=t[s];Sy(o,e,n,i)}},Sy=(t,e,n,i)=>{if(typeof t=="string"){by(t,e,n);return}if(typeof t=="function"){My(t,e,n,i);return}Ey(t,e,n,i)},by=(t,e,n)=>{const i=t===""?e:Lg(e,t);i.classGroupId=n},My=(t,e,n,i)=>{if(Ty(t)){rf(t(i),e,n,i);return}e.validators===null&&(e.validators=[]),e.validators.push(my(n,t))},Ey=(t,e,n,i)=>{const r=Object.entries(t),s=r.length;for(let o=0;o<s;o++){const[a,l]=r[o];rf(l,Lg(e,a),n,i)}},Lg=(t,e)=>{let n=t;const i=e.split(Fa),r=i.length;for(let s=0;s<r;s++){const o=i[s];let a=n.nextPart.get(o);a||(a=Rg(),n.nextPart.set(o,a)),n=a}return n},Ty=t=>"isThemeGetter"in t&&t.isThemeGetter===!0,wy=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=Object.create(null),i=Object.create(null);const r=(s,o)=>{n[s]=o,e++,e>t&&(e=0,i=n,n=Object.create(null))};return{get(s){let o=n[s];if(o!==void 0)return o;if((o=i[s])!==void 0)return r(s,o),o},set(s,o){s in n?n[s]=o:r(s,o)}}},Pc="!",Yd=":",Ay=[],$d=(t,e,n,i,r)=>({modifiers:t,hasImportantModifier:e,baseClassName:n,maybePostfixModifierPosition:i,isExternal:r}),Cy=t=>{const{prefix:e,experimentalParseClassName:n}=t;let i=r=>{const s=[];let o=0,a=0,l=0,c;const u=r.length;for(let v=0;v<u;v++){const m=r[v];if(o===0&&a===0){if(m===Yd){s.push(r.slice(l,v)),l=v+1;continue}if(m==="/"){c=v;continue}}m==="["?o++:m==="]"?o--:m==="("?a++:m===")"&&a--}const f=s.length===0?r:r.slice(l);let d=f,p=!1;f.endsWith(Pc)?(d=f.slice(0,-1),p=!0):f.startsWith(Pc)&&(d=f.slice(1),p=!0);const g=c&&c>l?c-l:void 0;return $d(s,p,d,g)};if(e){const r=e+Yd,s=i;i=o=>o.startsWith(r)?s(o.slice(r.length)):$d(Ay,!1,o,void 0,!0)}if(n){const r=i;i=s=>n({className:s,parseClassName:r})}return i},Py=t=>{const e=new Map;return t.orderSensitiveModifiers.forEach((n,i)=>{e.set(n,1e6+i)}),n=>{const i=[];let r=[];for(let s=0;s<n.length;s++){const o=n[s],a=o[0]==="[",l=e.has(o);a||l?(r.length>0&&(r.sort(),i.push(...r),r=[]),i.push(o)):r.push(o)}return r.length>0&&(r.sort(),i.push(...r)),i}},Ry=t=>({cache:wy(t.cacheSize),parseClassName:Cy(t),sortModifiers:Py(t),..._y(t)}),Dy=/\s+/,Ly=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r,sortModifiers:s}=e,o=[],a=t.trim().split(Dy);let l="";for(let c=a.length-1;c>=0;c-=1){const u=a[c],{isExternal:f,modifiers:d,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:v}=n(u);if(f){l=u+(l.length>0?" "+l:l);continue}let m=!!v,h=i(m?g.substring(0,v):g);if(!h){if(!m){l=u+(l.length>0?" "+l:l);continue}if(h=i(g),!h){l=u+(l.length>0?" "+l:l);continue}m=!1}const b=d.length===0?"":d.length===1?d[0]:s(d).join(":"),S=p?b+Pc:b,x=S+h;if(o.indexOf(x)>-1)continue;o.push(x);const A=r(h,m);for(let C=0;C<A.length;++C){const P=A[C];o.push(S+P)}l=u+(l.length>0?" "+l:l)}return l},Iy=(...t)=>{let e=0,n,i,r="";for(;e<t.length;)(n=t[e++])&&(i=Ig(n))&&(r&&(r+=" "),r+=i);return r},Ig=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=Ig(t[i]))&&(n&&(n+=" "),n+=e);return n},Ny=(t,...e)=>{let n,i,r,s;const o=l=>{const c=e.reduce((u,f)=>f(u),t());return n=Ry(c),i=n.cache.get,r=n.cache.set,s=a,a(l)},a=l=>{const c=i(l);if(c)return c;const u=Ly(l,n);return r(l,u),u};return s=o,(...l)=>s(Iy(...l))},Uy=[],Vt=t=>{const e=n=>n[t]||Uy;return e.isThemeGetter=!0,e},Ng=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ug=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Oy=/^\d+\/\d+$/,Fy=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,By=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ky=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,zy=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Vy=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,zr=t=>Oy.test(t),st=t=>!!t&&!Number.isNaN(Number(t)),ki=t=>!!t&&Number.isInteger(Number(t)),Tl=t=>t.endsWith("%")&&st(t.slice(0,-1)),vi=t=>Fy.test(t),Hy=()=>!0,Gy=t=>By.test(t)&&!ky.test(t),Og=()=>!1,Wy=t=>zy.test(t),Xy=t=>Vy.test(t),qy=t=>!Ue(t)&&!Oe(t),Jy=t=>Ps(t,kg,Og),Ue=t=>Ng.test(t),fr=t=>Ps(t,zg,Gy),wl=t=>Ps(t,Qy,st),Kd=t=>Ps(t,Fg,Og),Yy=t=>Ps(t,Bg,Xy),Bo=t=>Ps(t,Vg,Wy),Oe=t=>Ug.test(t),Os=t=>Rs(t,zg),$y=t=>Rs(t,jy),Zd=t=>Rs(t,Fg),Ky=t=>Rs(t,kg),Zy=t=>Rs(t,Bg),ko=t=>Rs(t,Vg,!0),Ps=(t,e,n)=>{const i=Ng.exec(t);return i?i[1]?e(i[1]):n(i[2]):!1},Rs=(t,e,n=!1)=>{const i=Ug.exec(t);return i?i[1]?e(i[1]):n:!1},Fg=t=>t==="position"||t==="percentage",Bg=t=>t==="image"||t==="url",kg=t=>t==="length"||t==="size"||t==="bg-size",zg=t=>t==="length",Qy=t=>t==="number",jy=t=>t==="family-name",Vg=t=>t==="shadow",eS=()=>{const t=Vt("color"),e=Vt("font"),n=Vt("text"),i=Vt("font-weight"),r=Vt("tracking"),s=Vt("leading"),o=Vt("breakpoint"),a=Vt("container"),l=Vt("spacing"),c=Vt("radius"),u=Vt("shadow"),f=Vt("inset-shadow"),d=Vt("text-shadow"),p=Vt("drop-shadow"),g=Vt("blur"),v=Vt("perspective"),m=Vt("aspect"),h=Vt("ease"),b=Vt("animate"),S=()=>["auto","avoid","all","avoid-page","page","left","right","column"],x=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],A=()=>[...x(),Oe,Ue],C=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto","contain","none"],D=()=>[Oe,Ue,l],y=()=>[zr,"full","auto",...D()],E=()=>[ki,"none","subgrid",Oe,Ue],L=()=>["auto",{span:["full",ki,Oe,Ue]},ki,Oe,Ue],H=()=>[ki,"auto",Oe,Ue],X=()=>["auto","min","max","fr",Oe,Ue],te=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Q=()=>["start","end","center","stretch","center-safe","end-safe"],q=()=>["auto",...D()],z=()=>[zr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...D()],V=()=>[t,Oe,Ue],de=()=>[...x(),Zd,Kd,{position:[Oe,Ue]}],pe=()=>["no-repeat",{repeat:["","x","y","space","round"]}],he=()=>["auto","cover","contain",Ky,Jy,{size:[Oe,Ue]}],ze=()=>[Tl,Os,fr],Ie=()=>["","none","full",c,Oe,Ue],Ke=()=>["",st,Os,fr],lt=()=>["solid","dashed","dotted","double"],se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],oe=()=>[st,Tl,Zd,Kd],Ae=()=>["","none",g,Oe,Ue],ke=()=>["none",st,Oe,Ue],be=()=>["none",st,Oe,Ue],rt=()=>[st,Oe,Ue],R=()=>[zr,"full",...D()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[vi],breakpoint:[vi],color:[Hy],container:[vi],"drop-shadow":[vi],ease:["in","out","in-out"],font:[qy],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[vi],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[vi],shadow:[vi],spacing:["px",st],text:[vi],"text-shadow":[vi],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",zr,Ue,Oe,m]}],container:["container"],columns:[{columns:[st,Ue,Oe,a]}],"break-after":[{"break-after":S()}],"break-before":[{"break-before":S()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:A()}],overflow:[{overflow:C()}],"overflow-x":[{"overflow-x":C()}],"overflow-y":[{"overflow-y":C()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:y()}],"inset-x":[{"inset-x":y()}],"inset-y":[{"inset-y":y()}],start:[{start:y()}],end:[{end:y()}],top:[{top:y()}],right:[{right:y()}],bottom:[{bottom:y()}],left:[{left:y()}],visibility:["visible","invisible","collapse"],z:[{z:[ki,"auto",Oe,Ue]}],basis:[{basis:[zr,"full","auto",a,...D()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[st,zr,"auto","initial","none",Ue]}],grow:[{grow:["",st,Oe,Ue]}],shrink:[{shrink:["",st,Oe,Ue]}],order:[{order:[ki,"first","last","none",Oe,Ue]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:L()}],"col-start":[{"col-start":H()}],"col-end":[{"col-end":H()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:L()}],"row-start":[{"row-start":H()}],"row-end":[{"row-end":H()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":X()}],"auto-rows":[{"auto-rows":X()}],gap:[{gap:D()}],"gap-x":[{"gap-x":D()}],"gap-y":[{"gap-y":D()}],"justify-content":[{justify:[...te(),"normal"]}],"justify-items":[{"justify-items":[...Q(),"normal"]}],"justify-self":[{"justify-self":["auto",...Q()]}],"align-content":[{content:["normal",...te()]}],"align-items":[{items:[...Q(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Q(),{baseline:["","last"]}]}],"place-content":[{"place-content":te()}],"place-items":[{"place-items":[...Q(),"baseline"]}],"place-self":[{"place-self":["auto",...Q()]}],p:[{p:D()}],px:[{px:D()}],py:[{py:D()}],ps:[{ps:D()}],pe:[{pe:D()}],pt:[{pt:D()}],pr:[{pr:D()}],pb:[{pb:D()}],pl:[{pl:D()}],m:[{m:q()}],mx:[{mx:q()}],my:[{my:q()}],ms:[{ms:q()}],me:[{me:q()}],mt:[{mt:q()}],mr:[{mr:q()}],mb:[{mb:q()}],ml:[{ml:q()}],"space-x":[{"space-x":D()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":D()}],"space-y-reverse":["space-y-reverse"],size:[{size:z()}],w:[{w:[a,"screen",...z()]}],"min-w":[{"min-w":[a,"screen","none",...z()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[o]},...z()]}],h:[{h:["screen","lh",...z()]}],"min-h":[{"min-h":["screen","lh","none",...z()]}],"max-h":[{"max-h":["screen","lh",...z()]}],"font-size":[{text:["base",n,Os,fr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,Oe,wl]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Tl,Ue]}],"font-family":[{font:[$y,Ue,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[r,Oe,Ue]}],"line-clamp":[{"line-clamp":[st,"none",Oe,wl]}],leading:[{leading:[s,...D()]}],"list-image":[{"list-image":["none",Oe,Ue]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Oe,Ue]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:V()}],"text-color":[{text:V()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...lt(),"wavy"]}],"text-decoration-thickness":[{decoration:[st,"from-font","auto",Oe,fr]}],"text-decoration-color":[{decoration:V()}],"underline-offset":[{"underline-offset":[st,"auto",Oe,Ue]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Oe,Ue]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Oe,Ue]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:de()}],"bg-repeat":[{bg:pe()}],"bg-size":[{bg:he()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ki,Oe,Ue],radial:["",Oe,Ue],conic:[ki,Oe,Ue]},Zy,Yy]}],"bg-color":[{bg:V()}],"gradient-from-pos":[{from:ze()}],"gradient-via-pos":[{via:ze()}],"gradient-to-pos":[{to:ze()}],"gradient-from":[{from:V()}],"gradient-via":[{via:V()}],"gradient-to":[{to:V()}],rounded:[{rounded:Ie()}],"rounded-s":[{"rounded-s":Ie()}],"rounded-e":[{"rounded-e":Ie()}],"rounded-t":[{"rounded-t":Ie()}],"rounded-r":[{"rounded-r":Ie()}],"rounded-b":[{"rounded-b":Ie()}],"rounded-l":[{"rounded-l":Ie()}],"rounded-ss":[{"rounded-ss":Ie()}],"rounded-se":[{"rounded-se":Ie()}],"rounded-ee":[{"rounded-ee":Ie()}],"rounded-es":[{"rounded-es":Ie()}],"rounded-tl":[{"rounded-tl":Ie()}],"rounded-tr":[{"rounded-tr":Ie()}],"rounded-br":[{"rounded-br":Ie()}],"rounded-bl":[{"rounded-bl":Ie()}],"border-w":[{border:Ke()}],"border-w-x":[{"border-x":Ke()}],"border-w-y":[{"border-y":Ke()}],"border-w-s":[{"border-s":Ke()}],"border-w-e":[{"border-e":Ke()}],"border-w-t":[{"border-t":Ke()}],"border-w-r":[{"border-r":Ke()}],"border-w-b":[{"border-b":Ke()}],"border-w-l":[{"border-l":Ke()}],"divide-x":[{"divide-x":Ke()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Ke()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...lt(),"hidden","none"]}],"divide-style":[{divide:[...lt(),"hidden","none"]}],"border-color":[{border:V()}],"border-color-x":[{"border-x":V()}],"border-color-y":[{"border-y":V()}],"border-color-s":[{"border-s":V()}],"border-color-e":[{"border-e":V()}],"border-color-t":[{"border-t":V()}],"border-color-r":[{"border-r":V()}],"border-color-b":[{"border-b":V()}],"border-color-l":[{"border-l":V()}],"divide-color":[{divide:V()}],"outline-style":[{outline:[...lt(),"none","hidden"]}],"outline-offset":[{"outline-offset":[st,Oe,Ue]}],"outline-w":[{outline:["",st,Os,fr]}],"outline-color":[{outline:V()}],shadow:[{shadow:["","none",u,ko,Bo]}],"shadow-color":[{shadow:V()}],"inset-shadow":[{"inset-shadow":["none",f,ko,Bo]}],"inset-shadow-color":[{"inset-shadow":V()}],"ring-w":[{ring:Ke()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:V()}],"ring-offset-w":[{"ring-offset":[st,fr]}],"ring-offset-color":[{"ring-offset":V()}],"inset-ring-w":[{"inset-ring":Ke()}],"inset-ring-color":[{"inset-ring":V()}],"text-shadow":[{"text-shadow":["none",d,ko,Bo]}],"text-shadow-color":[{"text-shadow":V()}],opacity:[{opacity:[st,Oe,Ue]}],"mix-blend":[{"mix-blend":[...se(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":se()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[st]}],"mask-image-linear-from-pos":[{"mask-linear-from":oe()}],"mask-image-linear-to-pos":[{"mask-linear-to":oe()}],"mask-image-linear-from-color":[{"mask-linear-from":V()}],"mask-image-linear-to-color":[{"mask-linear-to":V()}],"mask-image-t-from-pos":[{"mask-t-from":oe()}],"mask-image-t-to-pos":[{"mask-t-to":oe()}],"mask-image-t-from-color":[{"mask-t-from":V()}],"mask-image-t-to-color":[{"mask-t-to":V()}],"mask-image-r-from-pos":[{"mask-r-from":oe()}],"mask-image-r-to-pos":[{"mask-r-to":oe()}],"mask-image-r-from-color":[{"mask-r-from":V()}],"mask-image-r-to-color":[{"mask-r-to":V()}],"mask-image-b-from-pos":[{"mask-b-from":oe()}],"mask-image-b-to-pos":[{"mask-b-to":oe()}],"mask-image-b-from-color":[{"mask-b-from":V()}],"mask-image-b-to-color":[{"mask-b-to":V()}],"mask-image-l-from-pos":[{"mask-l-from":oe()}],"mask-image-l-to-pos":[{"mask-l-to":oe()}],"mask-image-l-from-color":[{"mask-l-from":V()}],"mask-image-l-to-color":[{"mask-l-to":V()}],"mask-image-x-from-pos":[{"mask-x-from":oe()}],"mask-image-x-to-pos":[{"mask-x-to":oe()}],"mask-image-x-from-color":[{"mask-x-from":V()}],"mask-image-x-to-color":[{"mask-x-to":V()}],"mask-image-y-from-pos":[{"mask-y-from":oe()}],"mask-image-y-to-pos":[{"mask-y-to":oe()}],"mask-image-y-from-color":[{"mask-y-from":V()}],"mask-image-y-to-color":[{"mask-y-to":V()}],"mask-image-radial":[{"mask-radial":[Oe,Ue]}],"mask-image-radial-from-pos":[{"mask-radial-from":oe()}],"mask-image-radial-to-pos":[{"mask-radial-to":oe()}],"mask-image-radial-from-color":[{"mask-radial-from":V()}],"mask-image-radial-to-color":[{"mask-radial-to":V()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":x()}],"mask-image-conic-pos":[{"mask-conic":[st]}],"mask-image-conic-from-pos":[{"mask-conic-from":oe()}],"mask-image-conic-to-pos":[{"mask-conic-to":oe()}],"mask-image-conic-from-color":[{"mask-conic-from":V()}],"mask-image-conic-to-color":[{"mask-conic-to":V()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:de()}],"mask-repeat":[{mask:pe()}],"mask-size":[{mask:he()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Oe,Ue]}],filter:[{filter:["","none",Oe,Ue]}],blur:[{blur:Ae()}],brightness:[{brightness:[st,Oe,Ue]}],contrast:[{contrast:[st,Oe,Ue]}],"drop-shadow":[{"drop-shadow":["","none",p,ko,Bo]}],"drop-shadow-color":[{"drop-shadow":V()}],grayscale:[{grayscale:["",st,Oe,Ue]}],"hue-rotate":[{"hue-rotate":[st,Oe,Ue]}],invert:[{invert:["",st,Oe,Ue]}],saturate:[{saturate:[st,Oe,Ue]}],sepia:[{sepia:["",st,Oe,Ue]}],"backdrop-filter":[{"backdrop-filter":["","none",Oe,Ue]}],"backdrop-blur":[{"backdrop-blur":Ae()}],"backdrop-brightness":[{"backdrop-brightness":[st,Oe,Ue]}],"backdrop-contrast":[{"backdrop-contrast":[st,Oe,Ue]}],"backdrop-grayscale":[{"backdrop-grayscale":["",st,Oe,Ue]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[st,Oe,Ue]}],"backdrop-invert":[{"backdrop-invert":["",st,Oe,Ue]}],"backdrop-opacity":[{"backdrop-opacity":[st,Oe,Ue]}],"backdrop-saturate":[{"backdrop-saturate":[st,Oe,Ue]}],"backdrop-sepia":[{"backdrop-sepia":["",st,Oe,Ue]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":D()}],"border-spacing-x":[{"border-spacing-x":D()}],"border-spacing-y":[{"border-spacing-y":D()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Oe,Ue]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[st,"initial",Oe,Ue]}],ease:[{ease:["linear","initial",h,Oe,Ue]}],delay:[{delay:[st,Oe,Ue]}],animate:[{animate:["none",b,Oe,Ue]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[v,Oe,Ue]}],"perspective-origin":[{"perspective-origin":A()}],rotate:[{rotate:ke()}],"rotate-x":[{"rotate-x":ke()}],"rotate-y":[{"rotate-y":ke()}],"rotate-z":[{"rotate-z":ke()}],scale:[{scale:be()}],"scale-x":[{"scale-x":be()}],"scale-y":[{"scale-y":be()}],"scale-z":[{"scale-z":be()}],"scale-3d":["scale-3d"],skew:[{skew:rt()}],"skew-x":[{"skew-x":rt()}],"skew-y":[{"skew-y":rt()}],transform:[{transform:[Oe,Ue,"","none","gpu","cpu"]}],"transform-origin":[{origin:A()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:R()}],"translate-x":[{"translate-x":R()}],"translate-y":[{"translate-y":R()}],"translate-z":[{"translate-z":R()}],"translate-none":["translate-none"],accent:[{accent:V()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:V()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Oe,Ue]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Oe,Ue]}],fill:[{fill:["none",...V()]}],"stroke-w":[{stroke:[st,Os,fr,wl]}],stroke:[{stroke:["none",...V()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},tS=Ny(eS);function Hg(...t){return tS(yg(t))}const nS=Wt({__name:"Button",props:{variant:{},size:{},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(t){const e=t;return(n,i)=>(gt(),Bt(Se(As),{"data-slot":"button",as:t.as,"as-child":t.asChild,class:$a(Se(Hg)(Se(iS)({variant:t.variant,size:t.size}),e.class))},{default:on(()=>[hi(n.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),iS=Mx("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}}),rS=Wt({__name:"Slider",props:{defaultValue:{},modelValue:{},disabled:{type:Boolean},orientation:{},dir:{},inverted:{type:Boolean},min:{},max:{},step:{},minStepsBetweenThumbs:{},thumbAlignment:{},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},class:{}},emits:["update:modelValue","valueCommit"],setup(t,{emit:e}){const n=t,i=e,r=Cx(n,"class"),s=Ox(r,i);return(o,a)=>(gt(),Bt(Se(ry),ui({"data-slot":"slider",class:Se(Hg)("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",n.class)},Se(s)),{default:on(({modelValue:l})=>[Gt(Se(hy),{"data-slot":"slider-track",class:"bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"},{default:on(()=>[Gt(Se(ay),{"data-slot":"slider-range",class:"bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"})]),_:1}),(gt(!0),jn(Yt,null,Yu(l,(c,u)=>(gt(),Bt(Se(fy),{key:u,"data-slot":"slider-thumb",class:"bg-white border-primary ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"}))),128))]),_:1},16,["class"]))}});function sS(){let t=0,e=0;for(let i=0;i<28;i+=7){let r=this.buf[this.pos++];if(t|=(r&127)<<i,(r&128)==0)return this.assertBounds(),[t,e]}let n=this.buf[this.pos++];if(t|=(n&15)<<28,e=(n&112)>>4,(n&128)==0)return this.assertBounds(),[t,e];for(let i=3;i<=31;i+=7){let r=this.buf[this.pos++];if(e|=(r&127)<<i,(r&128)==0)return this.assertBounds(),[t,e]}throw new Error("invalid varint")}function Al(t,e,n){for(let s=0;s<28;s=s+7){const o=t>>>s,a=!(!(o>>>7)&&e==0),l=(a?o|128:o)&255;if(n.push(l),!a)return}const i=t>>>28&15|(e&7)<<4,r=e>>3!=0;if(n.push((r?i|128:i)&255),!!r){for(let s=3;s<31;s=s+7){const o=e>>>s,a=!!(o>>>7),l=(a?o|128:o)&255;if(n.push(l),!a)return}n.push(e>>>31&1)}}const Sa=4294967296;function Qd(t){const e=t[0]==="-";e&&(t=t.slice(1));const n=1e6;let i=0,r=0;function s(o,a){const l=Number(t.slice(o,a));r*=n,i=i*n+l,i>=Sa&&(r=r+(i/Sa|0),i=i%Sa)}return s(-24,-18),s(-18,-12),s(-12,-6),s(-6),e?Wg(i,r):sf(i,r)}function oS(t,e){let n=sf(t,e);const i=n.hi&2147483648;i&&(n=Wg(n.lo,n.hi));const r=Gg(n.lo,n.hi);return i?"-"+r:r}function Gg(t,e){if({lo:t,hi:e}=aS(t,e),e<=2097151)return String(Sa*e+t);const n=t&16777215,i=(t>>>24|e<<8)&16777215,r=e>>16&65535;let s=n+i*6777216+r*6710656,o=i+r*8147497,a=r*2;const l=1e7;return s>=l&&(o+=Math.floor(s/l),s%=l),o>=l&&(a+=Math.floor(o/l),o%=l),a.toString()+jd(o)+jd(s)}function aS(t,e){return{lo:t>>>0,hi:e>>>0}}function sf(t,e){return{lo:t|0,hi:e|0}}function Wg(t,e){return e=~e,t?t=~t+1:e+=1,sf(t,e)}const jd=t=>{const e=String(t);return"0000000".slice(e.length)+e};function eh(t,e){if(t>=0){for(;t>127;)e.push(t&127|128),t=t>>>7;e.push(t)}else{for(let n=0;n<9;n++)e.push(t&127|128),t=t>>7;e.push(1)}}function lS(){let t=this.buf[this.pos++],e=t&127;if((t&128)==0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<7,(t&128)==0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<14,(t&128)==0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<21,(t&128)==0)return this.assertBounds(),e;t=this.buf[this.pos++],e|=(t&15)<<28;for(let n=5;(t&128)!==0&&n<10;n++)t=this.buf[this.pos++];if((t&128)!=0)throw new Error("invalid varint");return this.assertBounds(),e>>>0}var th={};const ni=cS();function cS(){const t=new DataView(new ArrayBuffer(8));if(typeof BigInt=="function"&&typeof t.getBigInt64=="function"&&typeof t.getBigUint64=="function"&&typeof t.setBigInt64=="function"&&typeof t.setBigUint64=="function"&&(!!globalThis.Deno||typeof process!="object"||typeof th!="object"||th.BUF_BIGINT_DISABLE!=="1")){const n=BigInt("-9223372036854775808"),i=BigInt("9223372036854775807"),r=BigInt("0"),s=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(o){const a=typeof o=="bigint"?o:BigInt(o);if(a>i||a<n)throw new Error(`invalid int64: ${o}`);return a},uParse(o){const a=typeof o=="bigint"?o:BigInt(o);if(a>s||a<r)throw new Error(`invalid uint64: ${o}`);return a},enc(o){return t.setBigInt64(0,this.parse(o),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},uEnc(o){return t.setBigInt64(0,this.uParse(o),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},dec(o,a){return t.setInt32(0,o,!0),t.setInt32(4,a,!0),t.getBigInt64(0,!0)},uDec(o,a){return t.setInt32(0,o,!0),t.setInt32(4,a,!0),t.getBigUint64(0,!0)}}}return{zero:"0",supported:!1,parse(n){return typeof n!="string"&&(n=n.toString()),nh(n),n},uParse(n){return typeof n!="string"&&(n=n.toString()),ih(n),n},enc(n){return typeof n!="string"&&(n=n.toString()),nh(n),Qd(n)},uEnc(n){return typeof n!="string"&&(n=n.toString()),ih(n),Qd(n)},dec(n,i){return oS(n,i)},uDec(n,i){return Gg(n,i)}}}function nh(t){if(!/^-?[0-9]+$/.test(t))throw new Error("invalid int64: "+t)}function ih(t){if(!/^[0-9]+$/.test(t))throw new Error("invalid uint64: "+t)}const Cl=Symbol.for("@bufbuild/protobuf/text-encoding");function Xg(){if(globalThis[Cl]==null){const t=new globalThis.TextEncoder,e=new globalThis.TextDecoder;globalThis[Cl]={encodeUtf8(n){return t.encode(n)},decodeUtf8(n){return e.decode(n)},checkUtf8(n){try{return encodeURIComponent(n),!0}catch{return!1}}}}return globalThis[Cl]}var Yi;(function(t){t[t.Varint=0]="Varint",t[t.Bit64=1]="Bit64",t[t.LengthDelimited=2]="LengthDelimited",t[t.StartGroup=3]="StartGroup",t[t.EndGroup=4]="EndGroup",t[t.Bit32=5]="Bit32"})(Yi||(Yi={}));const uS=34028234663852886e22,fS=-34028234663852886e22,dS=4294967295,hS=2147483647,pS=-2147483648;class et{constructor(e=Xg().encodeUtf8){this.encodeUtf8=e,this.stack=[],this.chunks=[],this.buf=[]}finish(){this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]);let e=0;for(let r=0;r<this.chunks.length;r++)e+=this.chunks[r].length;let n=new Uint8Array(e),i=0;for(let r=0;r<this.chunks.length;r++)n.set(this.chunks[r],i),i+=this.chunks[r].length;return this.chunks=[],n}fork(){return this.stack.push({chunks:this.chunks,buf:this.buf}),this.chunks=[],this.buf=[],this}join(){let e=this.finish(),n=this.stack.pop();if(!n)throw new Error("invalid state, fork stack empty");return this.chunks=n.chunks,this.buf=n.buf,this.uint32(e.byteLength),this.raw(e)}tag(e,n){return this.uint32((e<<3|n)>>>0)}raw(e){return this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]),this.chunks.push(e),this}uint32(e){for(rh(e);e>127;)this.buf.push(e&127|128),e=e>>>7;return this.buf.push(e),this}int32(e){return Pl(e),eh(e,this.buf),this}bool(e){return this.buf.push(e?1:0),this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){let n=this.encodeUtf8(e);return this.uint32(n.byteLength),this.raw(n)}float(e){mS(e);let n=new Uint8Array(4);return new DataView(n.buffer).setFloat32(0,e,!0),this.raw(n)}double(e){let n=new Uint8Array(8);return new DataView(n.buffer).setFloat64(0,e,!0),this.raw(n)}fixed32(e){rh(e);let n=new Uint8Array(4);return new DataView(n.buffer).setUint32(0,e,!0),this.raw(n)}sfixed32(e){Pl(e);let n=new Uint8Array(4);return new DataView(n.buffer).setInt32(0,e,!0),this.raw(n)}sint32(e){return Pl(e),e=(e<<1^e>>31)>>>0,eh(e,this.buf),this}sfixed64(e){let n=new Uint8Array(8),i=new DataView(n.buffer),r=ni.enc(e);return i.setInt32(0,r.lo,!0),i.setInt32(4,r.hi,!0),this.raw(n)}fixed64(e){let n=new Uint8Array(8),i=new DataView(n.buffer),r=ni.uEnc(e);return i.setInt32(0,r.lo,!0),i.setInt32(4,r.hi,!0),this.raw(n)}int64(e){let n=ni.enc(e);return Al(n.lo,n.hi,this.buf),this}sint64(e){const n=ni.enc(e),i=n.hi>>31,r=n.lo<<1^i,s=(n.hi<<1|n.lo>>>31)^i;return Al(r,s,this.buf),this}uint64(e){const n=ni.uEnc(e);return Al(n.lo,n.hi,this.buf),this}}class _e{constructor(e,n=Xg().decodeUtf8){this.decodeUtf8=n,this.varint64=sS,this.uint32=lS,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength)}tag(){let e=this.uint32(),n=e>>>3,i=e&7;if(n<=0||i<0||i>5)throw new Error("illegal tag: field no "+n+" wire type "+i);return[n,i]}skip(e,n){let i=this.pos;switch(e){case Yi.Varint:for(;this.buf[this.pos++]&128;);break;case Yi.Bit64:this.pos+=4;case Yi.Bit32:this.pos+=4;break;case Yi.LengthDelimited:let r=this.uint32();this.pos+=r;break;case Yi.StartGroup:for(;;){const[s,o]=this.tag();if(o===Yi.EndGroup){if(n!==void 0&&s!==n)throw new Error("invalid end group tag");break}this.skip(o,s)}break;default:throw new Error("cant skip wire type "+e)}return this.assertBounds(),this.buf.subarray(i,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let e=this.uint32();return e>>>1^-(e&1)}int64(){return ni.dec(...this.varint64())}uint64(){return ni.uDec(...this.varint64())}sint64(){let[e,n]=this.varint64(),i=-(e&1);return e=(e>>>1|(n&1)<<31)^i,n=n>>>1^i,ni.dec(e,n)}bool(){let[e,n]=this.varint64();return e!==0||n!==0}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return ni.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return ni.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let e=this.uint32(),n=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(n,n+e)}string(){return this.decodeUtf8(this.bytes())}}function Pl(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid int32: "+typeof t);if(!Number.isInteger(t)||t>hS||t<pS)throw new Error("invalid int32: "+t)}function rh(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid uint32: "+typeof t);if(!Number.isInteger(t)||t>dS||t<0)throw new Error("invalid uint32: "+t)}function mS(t){if(typeof t=="string"){const e=t;if(t=Number(t),Number.isNaN(t)&&e!=="NaN")throw new Error("invalid float32: "+e)}else if(typeof t!="number")throw new Error("invalid float32: "+typeof t);if(Number.isFinite(t)&&(t>uS||t<fS))throw new Error("invalid float32: "+t)}function sh(){return{typeUrl:"",value:new Uint8Array(0)}}const ns={encode(t,e=new et){return t.typeUrl!==""&&e.uint32(10).string(t.typeUrl),t.value.length!==0&&e.uint32(18).bytes(t.value),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=sh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.typeUrl=n.string();continue}case 2:{if(s!==18)break;r.value=n.bytes();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{typeUrl:Rl(t.typeUrl)?globalThis.String(t.typeUrl):Rl(t.type_url)?globalThis.String(t.type_url):"",value:Rl(t.value)?gS(t.value):new Uint8Array(0)}},toJSON(t){const e={};return t.typeUrl!==""&&(e.typeUrl=t.typeUrl),t.value.length!==0&&(e.value=_S(t.value)),e},create(t){return ns.fromPartial(t??{})},fromPartial(t){const e=sh();return e.typeUrl=t.typeUrl??"",e.value=t.value??new Uint8Array(0),e}};function gS(t){if(globalThis.Buffer)return Uint8Array.from(globalThis.Buffer.from(t,"base64"));{const e=globalThis.atob(t),n=new Uint8Array(e.length);for(let i=0;i<e.length;++i)n[i]=e.charCodeAt(i);return n}}function _S(t){if(globalThis.Buffer)return globalThis.Buffer.from(t).toString("base64");{const e=[];return t.forEach(n=>{e.push(globalThis.String.fromCharCode(n))}),globalThis.btoa(e.join(""))}}function Rl(t){return t!=null}function oh(t){switch(t){case 0:case"NULL_VALUE":return 0;default:return-1}}function vS(t){return t===0?"NULL_VALUE":"UNRECOGNIZED"}function Dl(){return{fields:{}}}const Xs={encode(t,e=new et){return globalThis.Object.entries(t.fields).forEach(([n,i])=>{i!==void 0&&Rc.encode({key:n,value:i},e.uint32(10).fork()).join()}),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Dl();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;const o=Rc.decode(n,n.uint32());o.value!==void 0&&(r.fields[o.key]=o.value);continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{fields:Dc(t.fields)?globalThis.Object.entries(t.fields).reduce((e,[n,i])=>(e[n]=i,e),{}):{}}},toJSON(t){const e={};if(t.fields){const n=globalThis.Object.entries(t.fields);n.length>0&&(e.fields={},n.forEach(([i,r])=>{e.fields[i]=r}))}return e},create(t){return Xs.fromPartial(t??{})},fromPartial(t){const e=Dl();return e.fields=globalThis.Object.entries(t.fields??{}).reduce((n,[i,r])=>(r!==void 0&&(n[i]=r),n),{}),e},wrap(t){const e=Dl();if(t!==void 0)for(const n of globalThis.Object.keys(t))e.fields[n]=t[n];return e},unwrap(t){const e={};if(t.fields)for(const n of globalThis.Object.keys(t.fields))e[n]=t.fields[n];return e}};function ah(){return{key:"",value:void 0}}const Rc={encode(t,e=new et){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&Dn.encode(Dn.wrap(t.value),e.uint32(18).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=ah();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.key=n.string();continue}case 2:{if(s!==18)break;r.value=Dn.unwrap(Dn.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{key:Qn(t.key)?globalThis.String(t.key):"",value:Qn(t?.value)?t.value:void 0}},toJSON(t){const e={};return t.key!==""&&(e.key=t.key),t.value!==void 0&&(e.value=t.value),e},create(t){return Rc.fromPartial(t??{})},fromPartial(t){const e=ah();return e.key=t.key??"",e.value=t.value??void 0,e}};function Ll(){return{nullValue:void 0,numberValue:void 0,stringValue:void 0,boolValue:void 0,structValue:void 0,listValue:void 0}}const Dn={encode(t,e=new et){return t.nullValue!==void 0&&e.uint32(8).int32(t.nullValue),t.numberValue!==void 0&&e.uint32(17).double(t.numberValue),t.stringValue!==void 0&&e.uint32(26).string(t.stringValue),t.boolValue!==void 0&&e.uint32(32).bool(t.boolValue),t.structValue!==void 0&&Xs.encode(Xs.wrap(t.structValue),e.uint32(42).fork()).join(),t.listValue!==void 0&&qs.encode(qs.wrap(t.listValue),e.uint32(50).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Ll();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==8)break;r.nullValue=n.int32();continue}case 2:{if(s!==17)break;r.numberValue=n.double();continue}case 3:{if(s!==26)break;r.stringValue=n.string();continue}case 4:{if(s!==32)break;r.boolValue=n.bool();continue}case 5:{if(s!==42)break;r.structValue=Xs.unwrap(Xs.decode(n,n.uint32()));continue}case 6:{if(s!==50)break;r.listValue=qs.unwrap(qs.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{nullValue:Qn(t.nullValue)?oh(t.nullValue):Qn(t.null_value)?oh(t.null_value):void 0,numberValue:Qn(t.numberValue)?globalThis.Number(t.numberValue):Qn(t.number_value)?globalThis.Number(t.number_value):void 0,stringValue:Qn(t.stringValue)?globalThis.String(t.stringValue):Qn(t.string_value)?globalThis.String(t.string_value):void 0,boolValue:Qn(t.boolValue)?globalThis.Boolean(t.boolValue):Qn(t.bool_value)?globalThis.Boolean(t.bool_value):void 0,structValue:Dc(t.structValue)?t.structValue:Dc(t.struct_value)?t.struct_value:void 0,listValue:globalThis.Array.isArray(t.listValue)?[...t.listValue]:globalThis.Array.isArray(t.list_value)?[...t.list_value]:void 0}},toJSON(t){const e={};return t.nullValue!==void 0&&(e.nullValue=vS(t.nullValue)),t.numberValue!==void 0&&(e.numberValue=t.numberValue),t.stringValue!==void 0&&(e.stringValue=t.stringValue),t.boolValue!==void 0&&(e.boolValue=t.boolValue),t.structValue!==void 0&&(e.structValue=t.structValue),t.listValue!==void 0&&(e.listValue=t.listValue),e},create(t){return Dn.fromPartial(t??{})},fromPartial(t){const e=Ll();return e.nullValue=t.nullValue??void 0,e.numberValue=t.numberValue??void 0,e.stringValue=t.stringValue??void 0,e.boolValue=t.boolValue??void 0,e.structValue=t.structValue??void 0,e.listValue=t.listValue??void 0,e},wrap(t){const e=Ll();if(t===null)e.nullValue=0;else if(typeof t=="boolean")e.boolValue=t;else if(typeof t=="number")e.numberValue=t;else if(typeof t=="string")e.stringValue=t;else if(globalThis.Array.isArray(t))e.listValue=t;else if(typeof t=="object")e.structValue=t;else if(typeof t<"u")throw new globalThis.Error("Unsupported any value type: "+typeof t);return e},unwrap(t){if(t.stringValue!==void 0)return t.stringValue;if(t?.numberValue!==void 0)return t.numberValue;if(t?.boolValue!==void 0)return t.boolValue;if(t?.structValue!==void 0)return t.structValue;if(t?.listValue!==void 0)return t.listValue;if(t?.nullValue!==void 0)return null}};function Il(){return{values:[]}}const qs={encode(t,e=new et){for(const n of t.values)Dn.encode(Dn.wrap(n),e.uint32(10).fork()).join();return e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Il();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.values.push(Dn.unwrap(Dn.decode(n,n.uint32())));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{values:globalThis.Array.isArray(t?.values)?[...t.values]:[]}},toJSON(t){const e={};return t.values?.length&&(e.values=t.values),e},create(t){return qs.fromPartial(t??{})},fromPartial(t){const e=Il();return e.values=t.values?.map(n=>n)||[],e},wrap(t){const e=Il();return e.values=t??[],e},unwrap(t){return t?.hasOwnProperty("values")&&globalThis.Array.isArray(t.values)?t.values:t}};function Dc(t){return typeof t=="object"&&t!==null}function Qn(t){return t!=null}function lh(){return{message:void 0,value:void 0,fallback:void 0}}const Sn={encode(t,e=new et){return t.message!==void 0&&ns.encode(t.message,e.uint32(10).fork()).join(),t.value!==void 0&&Dn.encode(Dn.wrap(t.value),e.uint32(18).fork()).join(),t.fallback!==void 0&&is.encode(t.fallback,e.uint32(26).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=lh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.message=ns.decode(n,n.uint32());continue}case 2:{if(s!==18)break;r.value=Dn.unwrap(Dn.decode(n,n.uint32()));continue}case 3:{if(s!==26)break;r.fallback=is.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{message:ir(t.message)?ns.fromJSON(t.message):void 0,value:ir(t?.value)?t.value:void 0,fallback:ir(t.fallback)?is.fromJSON(t.fallback):void 0}},toJSON(t){const e={};return t.message!==void 0&&(e.message=ns.toJSON(t.message)),t.value!==void 0&&(e.value=t.value),t.fallback!==void 0&&(e.fallback=is.toJSON(t.fallback)),e},create(t){return Sn.fromPartial(t??{})},fromPartial(t){const e=lh();return e.message=t.message!==void 0&&t.message!==null?ns.fromPartial(t.message):void 0,e.value=t.value??void 0,e.fallback=t.fallback!==void 0&&t.fallback!==null?is.fromPartial(t.fallback):void 0,e}};function ch(){return{data:void 0}}const is={encode(t,e=new et){return t.data!==void 0&&Ki.encode(t.data,e.uint32(10).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=ch();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.data=Ki.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{data:ir(t.data)?Ki.fromJSON(t.data):void 0}},toJSON(t){const e={};return t.data!==void 0&&(e.data=Ki.toJSON(t.data)),e},create(t){return is.fromPartial(t??{})},fromPartial(t){const e=ch();return e.data=t.data!==void 0&&t.data!==null?Ki.fromPartial(t.data):void 0,e}};function uh(){return{items:{}}}const Ki={encode(t,e=new et){return globalThis.Object.entries(t.items).forEach(([n,i])=>{Lc.encode({key:n,value:i},e.uint32(10).fork()).join()}),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=uh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;const o=Lc.decode(n,n.uint32());o.value!==void 0&&(r.items[o.key]=o.value);continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{items:xS(t.items)?globalThis.Object.entries(t.items).reduce((e,[n,i])=>(e[n]=Sn.fromJSON(i),e),{}):{}}},toJSON(t){const e={};if(t.items){const n=globalThis.Object.entries(t.items);n.length>0&&(e.items={},n.forEach(([i,r])=>{e.items[i]=Sn.toJSON(r)}))}return e},create(t){return Ki.fromPartial(t??{})},fromPartial(t){const e=uh();return e.items=globalThis.Object.entries(t.items??{}).reduce((n,[i,r])=>(r!==void 0&&(n[i]=Sn.fromPartial(r)),n),{}),e}};function fh(){return{key:"",value:void 0}}const Lc={encode(t,e=new et){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&Sn.encode(t.value,e.uint32(18).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=fh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.key=n.string();continue}case 2:{if(s!==18)break;r.value=Sn.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{key:ir(t.key)?globalThis.String(t.key):"",value:ir(t.value)?Sn.fromJSON(t.value):void 0}},toJSON(t){const e={};return t.key!==""&&(e.key=t.key),t.value!==void 0&&(e.value=Sn.toJSON(t.value)),e},create(t){return Lc.fromPartial(t??{})},fromPartial(t){const e=fh();return e.key=t.key??"",e.value=t.value!==void 0&&t.value!==null?Sn.fromPartial(t.value):void 0,e}};function dh(){return{data:void 0,version:void 0}}const qg={encode(t,e=new et){return t.data!==void 0&&Sn.encode(t.data,e.uint32(10).fork()).join(),t.version!==void 0&&e.uint32(18).string(t.version),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=dh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.data=Sn.decode(n,n.uint32());continue}case 2:{if(s!==18)break;r.version=n.string();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{data:ir(t.data)?Sn.fromJSON(t.data):void 0,version:ir(t.version)?globalThis.String(t.version):void 0}},toJSON(t){const e={};return t.data!==void 0&&(e.data=Sn.toJSON(t.data)),t.version!==void 0&&(e.version=t.version),e},create(t){return qg.fromPartial(t??{})},fromPartial(t){const e=dh();return e.data=t.data!==void 0&&t.data!==null?Sn.fromPartial(t.data):void 0,e.version=t.version??void 0,e}};function xS(t){return typeof t=="object"&&t!==null}function ir(t){return t!=null}function hh(){return{guid:"",name:"",x:0,y:0,z:0}}const Ve={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.x!==0&&e.uint32(29).float(t.x),t.y!==0&&e.uint32(37).float(t.y),t.z!==0&&e.uint32(45).float(t.z),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=hh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.x=n.float();continue}case 4:{if(s!==37)break;r.y=n.float();continue}case 5:{if(s!==45)break;r.z=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",x:ae(t.x)?globalThis.Number(t.x):0,y:ae(t.y)?globalThis.Number(t.y):0,z:ae(t.z)?globalThis.Number(t.z):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.x!==0&&(e.x=t.x),t.y!==0&&(e.y=t.y),t.z!==0&&(e.z=t.z),e},create(t){return Ve.fromPartial(t??{})},fromPartial(t){const e=hh();return e.guid=t.guid??"",e.name=t.name??"",e.x=t.x??0,e.y=t.y??0,e.z=t.z??0,e}};function ph(){return{guid:"",name:"",x:0,y:0,z:0}}const bt={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.x!==0&&e.uint32(29).float(t.x),t.y!==0&&e.uint32(37).float(t.y),t.z!==0&&e.uint32(45).float(t.z),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=ph();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.x=n.float();continue}case 4:{if(s!==37)break;r.y=n.float();continue}case 5:{if(s!==45)break;r.z=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",x:ae(t.x)?globalThis.Number(t.x):0,y:ae(t.y)?globalThis.Number(t.y):0,z:ae(t.z)?globalThis.Number(t.z):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.x!==0&&(e.x=t.x),t.y!==0&&(e.y=t.y),t.z!==0&&(e.z=t.z),e},create(t){return bt.fromPartial(t??{})},fromPartial(t){const e=ph();return e.guid=t.guid??"",e.name=t.name??"",e.x=t.x??0,e.y=t.y??0,e.z=t.z??0,e}};function mh(){return{guid:"",name:"",point:void 0,xaxis:void 0,yaxis:void 0}}const Ge={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.point!==void 0&&Ve.encode(t.point,e.uint32(26).fork()).join(),t.xaxis!==void 0&&bt.encode(t.xaxis,e.uint32(34).fork()).join(),t.yaxis!==void 0&&bt.encode(t.yaxis,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=mh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.point=Ve.decode(n,n.uint32());continue}case 4:{if(s!==34)break;r.xaxis=bt.decode(n,n.uint32());continue}case 5:{if(s!==42)break;r.yaxis=bt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",point:ae(t.point)?Ve.fromJSON(t.point):void 0,xaxis:ae(t.xaxis)?bt.fromJSON(t.xaxis):void 0,yaxis:ae(t.yaxis)?bt.fromJSON(t.yaxis):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.point!==void 0&&(e.point=Ve.toJSON(t.point)),t.xaxis!==void 0&&(e.xaxis=bt.toJSON(t.xaxis)),t.yaxis!==void 0&&(e.yaxis=bt.toJSON(t.yaxis)),e},create(t){return Ge.fromPartial(t??{})},fromPartial(t){const e=mh();return e.guid=t.guid??"",e.name=t.name??"",e.point=t.point!==void 0&&t.point!==null?Ve.fromPartial(t.point):void 0,e.xaxis=t.xaxis!==void 0&&t.xaxis!==null?bt.fromPartial(t.xaxis):void 0,e.yaxis=t.yaxis!==void 0&&t.yaxis!==null?bt.fromPartial(t.yaxis):void 0,e}};function gh(){return{guid:"",name:"",point:void 0,normal:void 0}}const of={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.point!==void 0&&Ve.encode(t.point,e.uint32(26).fork()).join(),t.normal!==void 0&&bt.encode(t.normal,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=gh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.point=Ve.decode(n,n.uint32());continue}case 4:{if(s!==34)break;r.normal=bt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",point:ae(t.point)?Ve.fromJSON(t.point):void 0,normal:ae(t.normal)?bt.fromJSON(t.normal):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.point!==void 0&&(e.point=Ve.toJSON(t.point)),t.normal!==void 0&&(e.normal=bt.toJSON(t.normal)),e},create(t){return of.fromPartial(t??{})},fromPartial(t){const e=gh();return e.guid=t.guid??"",e.name=t.name??"",e.point=t.point!==void 0&&t.point!==null?Ve.fromPartial(t.point):void 0,e.normal=t.normal!==void 0&&t.normal!==null?bt.fromPartial(t.normal):void 0,e}};function _h(){return{guid:"",name:"",w:0,x:0,y:0,z:0}}const af={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.w!==0&&e.uint32(29).float(t.w),t.x!==0&&e.uint32(37).float(t.x),t.y!==0&&e.uint32(45).float(t.y),t.z!==0&&e.uint32(53).float(t.z),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=_h();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.w=n.float();continue}case 4:{if(s!==37)break;r.x=n.float();continue}case 5:{if(s!==45)break;r.y=n.float();continue}case 6:{if(s!==53)break;r.z=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",w:ae(t.w)?globalThis.Number(t.w):0,x:ae(t.x)?globalThis.Number(t.x):0,y:ae(t.y)?globalThis.Number(t.y):0,z:ae(t.z)?globalThis.Number(t.z):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.w!==0&&(e.w=t.w),t.x!==0&&(e.x=t.x),t.y!==0&&(e.y=t.y),t.z!==0&&(e.z=t.z),e},create(t){return af.fromPartial(t??{})},fromPartial(t){const e=_h();return e.guid=t.guid??"",e.name=t.name??"",e.w=t.w??0,e.x=t.x??0,e.y=t.y??0,e.z=t.z??0,e}};function vh(){return{guid:"",name:"",start:void 0,end:void 0}}const lf={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.start!==void 0&&Ve.encode(t.start,e.uint32(26).fork()).join(),t.end!==void 0&&Ve.encode(t.end,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=vh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.start=Ve.decode(n,n.uint32());continue}case 4:{if(s!==34)break;r.end=Ve.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",start:ae(t.start)?Ve.fromJSON(t.start):void 0,end:ae(t.end)?Ve.fromJSON(t.end):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.start!==void 0&&(e.start=Ve.toJSON(t.start)),t.end!==void 0&&(e.end=Ve.toJSON(t.end)),e},create(t){return lf.fromPartial(t??{})},fromPartial(t){const e=vh();return e.guid=t.guid??"",e.name=t.name??"",e.start=t.start!==void 0&&t.start!==null?Ve.fromPartial(t.start):void 0,e.end=t.end!==void 0&&t.end!==null?Ve.fromPartial(t.end):void 0,e}};function xh(){return{guid:"",name:"",radius:0,frame:void 0}}const Zi={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.frame!==void 0&&Ge.encode(t.frame,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=xh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==34)break;r.frame=Ge.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",radius:ae(t.radius)?globalThis.Number(t.radius):0,frame:ae(t.frame)?Ge.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.frame!==void 0&&(e.frame=Ge.toJSON(t.frame)),e},create(t){return Zi.fromPartial(t??{})},fromPartial(t){const e=xh();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.frame=t.frame!==void 0&&t.frame!==null?Ge.fromPartial(t.frame):void 0,e}};function yh(){return{guid:"",name:"",circle:void 0,startAngle:0,endAngle:0}}const cf={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.circle!==void 0&&Zi.encode(t.circle,e.uint32(26).fork()).join(),t.startAngle!==0&&e.uint32(37).float(t.startAngle),t.endAngle!==0&&e.uint32(45).float(t.endAngle),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=yh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.circle=Zi.decode(n,n.uint32());continue}case 4:{if(s!==37)break;r.startAngle=n.float();continue}case 5:{if(s!==45)break;r.endAngle=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",circle:ae(t.circle)?Zi.fromJSON(t.circle):void 0,startAngle:ae(t.startAngle)?globalThis.Number(t.startAngle):ae(t.start_angle)?globalThis.Number(t.start_angle):0,endAngle:ae(t.endAngle)?globalThis.Number(t.endAngle):ae(t.end_angle)?globalThis.Number(t.end_angle):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.circle!==void 0&&(e.circle=Zi.toJSON(t.circle)),t.startAngle!==0&&(e.startAngle=t.startAngle),t.endAngle!==0&&(e.endAngle=t.endAngle),e},create(t){return cf.fromPartial(t??{})},fromPartial(t){const e=yh();return e.guid=t.guid??"",e.name=t.name??"",e.circle=t.circle!==void 0&&t.circle!==null?Zi.fromPartial(t.circle):void 0,e.startAngle=t.startAngle??0,e.endAngle=t.endAngle??0,e}};function Sh(){return{guid:"",name:"",major:0,minor:0,frame:void 0}}const uf={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.major!==0&&e.uint32(29).float(t.major),t.minor!==0&&e.uint32(37).float(t.minor),t.frame!==void 0&&Ge.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Sh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.major=n.float();continue}case 4:{if(s!==37)break;r.minor=n.float();continue}case 5:{if(s!==42)break;r.frame=Ge.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",major:ae(t.major)?globalThis.Number(t.major):0,minor:ae(t.minor)?globalThis.Number(t.minor):0,frame:ae(t.frame)?Ge.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.major!==0&&(e.major=t.major),t.minor!==0&&(e.minor=t.minor),t.frame!==void 0&&(e.frame=Ge.toJSON(t.frame)),e},create(t){return uf.fromPartial(t??{})},fromPartial(t){const e=Sh();return e.guid=t.guid??"",e.name=t.name??"",e.major=t.major??0,e.minor=t.minor??0,e.frame=t.frame!==void 0&&t.frame!==null?Ge.fromPartial(t.frame):void 0,e}};function bh(){return{guid:"",name:"",focal:0,frame:void 0}}const ff={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.focal!==0&&e.uint32(29).float(t.focal),t.frame!==void 0&&Ge.encode(t.frame,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=bh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.focal=n.float();continue}case 4:{if(s!==34)break;r.frame=Ge.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",focal:ae(t.focal)?globalThis.Number(t.focal):0,frame:ae(t.frame)?Ge.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.focal!==0&&(e.focal=t.focal),t.frame!==void 0&&(e.frame=Ge.toJSON(t.frame)),e},create(t){return ff.fromPartial(t??{})},fromPartial(t){const e=bh();return e.guid=t.guid??"",e.name=t.name??"",e.focal=t.focal??0,e.frame=t.frame!==void 0&&t.frame!==null?Ge.fromPartial(t.frame):void 0,e}};function Mh(){return{guid:"",name:"",major:0,minor:0,frame:void 0}}const df={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.major!==0&&e.uint32(29).float(t.major),t.minor!==0&&e.uint32(37).float(t.minor),t.frame!==void 0&&Ge.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Mh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.major=n.float();continue}case 4:{if(s!==37)break;r.minor=n.float();continue}case 5:{if(s!==42)break;r.frame=Ge.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",major:ae(t.major)?globalThis.Number(t.major):0,minor:ae(t.minor)?globalThis.Number(t.minor):0,frame:ae(t.frame)?Ge.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.major!==0&&(e.major=t.major),t.minor!==0&&(e.minor=t.minor),t.frame!==void 0&&(e.frame=Ge.toJSON(t.frame)),e},create(t){return df.fromPartial(t??{})},fromPartial(t){const e=Mh();return e.guid=t.guid??"",e.name=t.name??"",e.major=t.major??0,e.minor=t.minor??0,e.frame=t.frame!==void 0&&t.frame!==null?Ge.fromPartial(t.frame):void 0,e}};function Eh(){return{guid:"",name:"",points:[],degree:0}}const hf={encode(t,e=new et){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name);for(const n of t.points)Ve.encode(n,e.uint32(26).fork()).join();return t.degree!==0&&e.uint32(32).int32(t.degree),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Eh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(Ve.decode(n,n.uint32()));continue}case 4:{if(s!==32)break;r.degree=n.int32();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",points:globalThis.Array.isArray(t?.points)?t.points.map(e=>Ve.fromJSON(e)):[],degree:ae(t.degree)?globalThis.Number(t.degree):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.points?.length&&(e.points=t.points.map(n=>Ve.toJSON(n))),t.degree!==0&&(e.degree=Math.round(t.degree)),e},create(t){return hf.fromPartial(t??{})},fromPartial(t){const e=Eh();return e.guid=t.guid??"",e.name=t.name??"",e.points=t.points?.map(n=>Ve.fromPartial(n))||[],e.degree=t.degree??0,e}};function Th(){return{guid:"",name:"",points:[]}}const pf={encode(t,e=new et){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name);for(const n of t.points)Ve.encode(n,e.uint32(26).fork()).join();return e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Th();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(Ve.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",points:globalThis.Array.isArray(t?.points)?t.points.map(e=>Ve.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.points?.length&&(e.points=t.points.map(n=>Ve.toJSON(n))),e},create(t){return pf.fromPartial(t??{})},fromPartial(t){const e=Th();return e.guid=t.guid??"",e.name=t.name??"",e.points=t.points?.map(n=>Ve.fromPartial(n))||[],e}};function wh(){return{guid:"",name:"",points:[]}}const mf={encode(t,e=new et){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name);for(const n of t.points)Ve.encode(n,e.uint32(26).fork()).join();return e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=wh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(Ve.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",points:globalThis.Array.isArray(t?.points)?t.points.map(e=>Ve.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.points?.length&&(e.points=t.points.map(n=>Ve.toJSON(n))),e},create(t){return mf.fromPartial(t??{})},fromPartial(t){const e=wh();return e.guid=t.guid??"",e.name=t.name??"",e.points=t.points?.map(n=>Ve.fromPartial(n))||[],e}};function Ah(){return{guid:"",name:"",frame:void 0,xsize:0,ysize:0,zsize:0}}const gf={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.frame!==void 0&&Ge.encode(t.frame,e.uint32(26).fork()).join(),t.xsize!==0&&e.uint32(37).float(t.xsize),t.ysize!==0&&e.uint32(45).float(t.ysize),t.zsize!==0&&e.uint32(53).float(t.zsize),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Ah();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.frame=Ge.decode(n,n.uint32());continue}case 4:{if(s!==37)break;r.xsize=n.float();continue}case 5:{if(s!==45)break;r.ysize=n.float();continue}case 6:{if(s!==53)break;r.zsize=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",frame:ae(t.frame)?Ge.fromJSON(t.frame):void 0,xsize:ae(t.xsize)?globalThis.Number(t.xsize):0,ysize:ae(t.ysize)?globalThis.Number(t.ysize):0,zsize:ae(t.zsize)?globalThis.Number(t.zsize):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.frame!==void 0&&(e.frame=Ge.toJSON(t.frame)),t.xsize!==0&&(e.xsize=t.xsize),t.ysize!==0&&(e.ysize=t.ysize),t.zsize!==0&&(e.zsize=t.zsize),e},create(t){return gf.fromPartial(t??{})},fromPartial(t){const e=Ah();return e.guid=t.guid??"",e.name=t.name??"",e.frame=t.frame!==void 0&&t.frame!==null?Ge.fromPartial(t.frame):void 0,e.xsize=t.xsize??0,e.ysize=t.ysize??0,e.zsize=t.zsize??0,e}};function Ch(){return{guid:"",name:"",radius:0,frame:void 0}}const _f={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.frame!==void 0&&Ge.encode(t.frame,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Ch();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==34)break;r.frame=Ge.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",radius:ae(t.radius)?globalThis.Number(t.radius):0,frame:ae(t.frame)?Ge.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.frame!==void 0&&(e.frame=Ge.toJSON(t.frame)),e},create(t){return _f.fromPartial(t??{})},fromPartial(t){const e=Ch();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.frame=t.frame!==void 0&&t.frame!==null?Ge.fromPartial(t.frame):void 0,e}};function Ph(){return{guid:"",name:"",radius:0,height:0,frame:void 0}}const vf={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.height!==0&&e.uint32(37).float(t.height),t.frame!==void 0&&Ge.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Ph();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==37)break;r.height=n.float();continue}case 5:{if(s!==42)break;r.frame=Ge.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",radius:ae(t.radius)?globalThis.Number(t.radius):0,height:ae(t.height)?globalThis.Number(t.height):0,frame:ae(t.frame)?Ge.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.height!==0&&(e.height=t.height),t.frame!==void 0&&(e.frame=Ge.toJSON(t.frame)),e},create(t){return vf.fromPartial(t??{})},fromPartial(t){const e=Ph();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.height=t.height??0,e.frame=t.frame!==void 0&&t.frame!==null?Ge.fromPartial(t.frame):void 0,e}};function Rh(){return{guid:"",name:"",radius:0,height:0,frame:void 0}}const xf={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.height!==0&&e.uint32(37).float(t.height),t.frame!==void 0&&Ge.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Rh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==37)break;r.height=n.float();continue}case 5:{if(s!==42)break;r.frame=Ge.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",radius:ae(t.radius)?globalThis.Number(t.radius):0,height:ae(t.height)?globalThis.Number(t.height):0,frame:ae(t.frame)?Ge.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.height!==0&&(e.height=t.height),t.frame!==void 0&&(e.frame=Ge.toJSON(t.frame)),e},create(t){return xf.fromPartial(t??{})},fromPartial(t){const e=Rh();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.height=t.height??0,e.frame=t.frame!==void 0&&t.frame!==null?Ge.fromPartial(t.frame):void 0,e}};function Dh(){return{guid:"",name:"",radius:0,height:0,frame:void 0}}const yf={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.height!==0&&e.uint32(37).float(t.height),t.frame!==void 0&&Ge.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Dh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==37)break;r.height=n.float();continue}case 5:{if(s!==42)break;r.frame=Ge.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",radius:ae(t.radius)?globalThis.Number(t.radius):0,height:ae(t.height)?globalThis.Number(t.height):0,frame:ae(t.frame)?Ge.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.height!==0&&(e.height=t.height),t.frame!==void 0&&(e.frame=Ge.toJSON(t.frame)),e},create(t){return yf.fromPartial(t??{})},fromPartial(t){const e=Dh();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.height=t.height??0,e.frame=t.frame!==void 0&&t.frame!==null?Ge.fromPartial(t.frame):void 0,e}};function Lh(){return{guid:"",name:"",radiusAxis:0,radiusPipe:0,frame:void 0}}const Sf={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radiusAxis!==0&&e.uint32(29).float(t.radiusAxis),t.radiusPipe!==0&&e.uint32(37).float(t.radiusPipe),t.frame!==void 0&&Ge.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Lh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radiusAxis=n.float();continue}case 4:{if(s!==37)break;r.radiusPipe=n.float();continue}case 5:{if(s!==42)break;r.frame=Ge.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",radiusAxis:ae(t.radiusAxis)?globalThis.Number(t.radiusAxis):ae(t.radius_axis)?globalThis.Number(t.radius_axis):0,radiusPipe:ae(t.radiusPipe)?globalThis.Number(t.radiusPipe):ae(t.radius_pipe)?globalThis.Number(t.radius_pipe):0,frame:ae(t.frame)?Ge.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radiusAxis!==0&&(e.radiusAxis=t.radiusAxis),t.radiusPipe!==0&&(e.radiusPipe=t.radiusPipe),t.frame!==void 0&&(e.frame=Ge.toJSON(t.frame)),e},create(t){return Sf.fromPartial(t??{})},fromPartial(t){const e=Lh();return e.guid=t.guid??"",e.name=t.name??"",e.radiusAxis=t.radiusAxis??0,e.radiusPipe=t.radiusPipe??0,e.frame=t.frame!==void 0&&t.frame!==null?Ge.fromPartial(t.frame):void 0,e}};function Ih(){return{guid:"",name:"",points:[]}}const bf={encode(t,e=new et){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name);for(const n of t.points)Ve.encode(n,e.uint32(26).fork()).join();return e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Ih();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(Ve.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",points:globalThis.Array.isArray(t?.points)?t.points.map(e=>Ve.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.points?.length&&(e.points=t.points.map(n=>Ve.toJSON(n))),e},create(t){return bf.fromPartial(t??{})},fromPartial(t){const e=Ih();return e.guid=t.guid??"",e.name=t.name??"",e.points=t.points?.map(n=>Ve.fromPartial(n))||[],e}};function Nh(){return{guid:"",name:"",matrix:[]}}const Mf={encode(t,e=new et){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Nh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return Mf.fromPartial(t??{})},fromPartial(t){const e=Nh();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function Uh(){return{guid:"",name:"",translationVector:void 0}}const Ef={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.translationVector!==void 0&&bt.encode(t.translationVector,e.uint32(26).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Uh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.translationVector=bt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",translationVector:ae(t.translationVector)?bt.fromJSON(t.translationVector):ae(t.translation_vector)?bt.fromJSON(t.translation_vector):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.translationVector!==void 0&&(e.translationVector=bt.toJSON(t.translationVector)),e},create(t){return Ef.fromPartial(t??{})},fromPartial(t){const e=Uh();return e.guid=t.guid??"",e.name=t.name??"",e.translationVector=t.translationVector!==void 0&&t.translationVector!==null?bt.fromPartial(t.translationVector):void 0,e}};function Oh(){return{guid:"",name:"",axis:void 0,angle:0,point:void 0}}const Tf={encode(t,e=new et){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.axis!==void 0&&bt.encode(t.axis,e.uint32(26).fork()).join(),t.angle!==0&&e.uint32(37).float(t.angle),t.point!==void 0&&Ve.encode(t.point,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Oh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.axis=bt.decode(n,n.uint32());continue}case 4:{if(s!==37)break;r.angle=n.float();continue}case 5:{if(s!==42)break;r.point=Ve.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",axis:ae(t.axis)?bt.fromJSON(t.axis):void 0,angle:ae(t.angle)?globalThis.Number(t.angle):0,point:ae(t.point)?Ve.fromJSON(t.point):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.axis!==void 0&&(e.axis=bt.toJSON(t.axis)),t.angle!==0&&(e.angle=t.angle),t.point!==void 0&&(e.point=Ve.toJSON(t.point)),e},create(t){return Tf.fromPartial(t??{})},fromPartial(t){const e=Oh();return e.guid=t.guid??"",e.name=t.name??"",e.axis=t.axis!==void 0&&t.axis!==null?bt.fromPartial(t.axis):void 0,e.angle=t.angle??0,e.point=t.point!==void 0&&t.point!==null?Ve.fromPartial(t.point):void 0,e}};function Fh(){return{guid:"",name:"",matrix:[]}}const wf={encode(t,e=new et){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Fh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return wf.fromPartial(t??{})},fromPartial(t){const e=Fh();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function Bh(){return{guid:"",name:"",matrix:[]}}const Af={encode(t,e=new et){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=Bh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return Af.fromPartial(t??{})},fromPartial(t){const e=Bh();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function kh(){return{guid:"",name:"",matrix:[]}}const Cf={encode(t,e=new et){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=kh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return Cf.fromPartial(t??{})},fromPartial(t){const e=kh();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function zh(){return{guid:"",name:"",matrix:[]}}const Pf={encode(t,e=new et){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=zh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return Pf.fromPartial(t??{})},fromPartial(t){const e=zh();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function ae(t){return t!=null}const Rf="182",ds={ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yS=0,Vh=1,SS=2,ba=1,Jg=2,Js=3,rr=0,sn=1,bn=2,Di=0,hs=1,Hh=2,Gh=3,Wh=4,bS=5,xr=100,MS=101,ES=102,TS=103,wS=104,AS=200,CS=201,PS=202,RS=203,Ic=204,Nc=205,DS=206,LS=207,IS=208,NS=209,US=210,OS=211,FS=212,BS=213,kS=214,Uc=0,Oc=1,Fc=2,_s=3,Bc=4,kc=5,zc=6,Vc=7,Yg=0,zS=1,VS=2,oi=0,$g=1,Kg=2,Zg=3,Df=4,Qg=5,jg=6,e0=7,t0=300,Pr=301,vs=302,Hc=303,Gc=304,il=306,Wc=1e3,Ri=1001,Xc=1002,Kt=1003,HS=1004,zo=1005,nn=1006,Nl=1007,Sr=1008,Pn=1009,n0=1010,i0=1011,go=1012,Lf=1013,fi=1014,ii=1015,Oi=1016,If=1017,Nf=1018,_o=1020,r0=35902,s0=35899,o0=1021,a0=1022,Hn=1023,Fi=1026,br=1027,l0=1028,Uf=1029,xs=1030,Of=1031,Ff=1033,Ma=33776,Ea=33777,Ta=33778,wa=33779,qc=35840,Jc=35841,Yc=35842,$c=35843,Kc=36196,Zc=37492,Qc=37496,jc=37488,eu=37489,tu=37490,nu=37491,iu=37808,ru=37809,su=37810,ou=37811,au=37812,lu=37813,cu=37814,uu=37815,fu=37816,du=37817,hu=37818,pu=37819,mu=37820,gu=37821,_u=36492,vu=36494,xu=36495,yu=36283,Su=36284,bu=36285,Mu=36286,GS=3200,c0=0,WS=1,Qi="",Cn="srgb",ys="srgb-linear",Ba="linear",St="srgb",Vr=7680,Xh=519,XS=512,qS=513,JS=514,Bf=515,YS=516,$S=517,kf=518,KS=519,qh=35044,Jh="300 es",ri=2e3,ka=2001;function u0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function za(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ZS(){const t=za("canvas");return t.style.display="block",t}const Yh={};function $h(...t){const e="THREE."+t.shift();console.log(e,...t)}function qe(...t){const e="THREE."+t.shift();console.warn(e,...t)}function ut(...t){const e="THREE."+t.shift();console.error(e,...t)}function vo(...t){const e=t.join(" ");e in Yh||(Yh[e]=!0,qe(...t))}function QS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class Nr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kh=1234567;const ro=Math.PI/180,Ss=180/Math.PI;function Ur(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function it(t,e,n){return Math.max(e,Math.min(n,t))}function zf(t,e){return(t%e+e)%e}function jS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function eb(t,e,n){return t!==e?(n-t)/(e-t):0}function so(t,e,n){return(1-n)*t+n*e}function tb(t,e,n,i){return so(t,e,1-Math.exp(-n*i))}function nb(t,e=1){return e-Math.abs(zf(t,e*2)-e)}function ib(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function rb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function sb(t,e){return t+Math.floor(Math.random()*(e-t+1))}function ob(t,e){return t+Math.random()*(e-t)}function ab(t){return t*(.5-Math.random())}function lb(t){t!==void 0&&(Kh=t);let e=Kh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cb(t){return t*ro}function ub(t){return t*Ss}function fb(t){return(t&t-1)===0&&t!==0}function db(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function hb(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function pb(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function rs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Eu={DEG2RAD:ro,RAD2DEG:Ss,generateUUID:Ur,clamp:it,euclideanModulo:zf,mapLinear:jS,inverseLerp:eb,lerp:so,damp:tb,pingpong:nb,smoothstep:ib,smootherstep:rb,randInt:sb,randFloat:ob,randFloatSpread:ab,seededRandom:lb,degToRad:cb,radToDeg:ub,isPowerOfTwo:fb,ceilPowerOfTwo:db,floorPowerOfTwo:hb,setQuaternionFromProperEuler:pb,normalize:cn,denormalize:rs};class ge{constructor(e=0,n=0){ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Rr=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a>=1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(f!==v||l!==d||c!==p||u!==g){let m=l*d+c*p+u*g+f*v;m<0&&(d=-d,p=-p,g=-g,v=-v,m=-m);let h=1-a;if(m<.9995){const b=Math.acos(m),S=Math.sin(b);h=Math.sin(h*b)/S,a=Math.sin(a*b)/S,l=l*h+d*a,c=c*h+p*a,u=u*h+g*a,f=f*h+v*a}else{l=l*h+d*a,c=c*h+p*a,u=u*h+g*a,f=f*h+v*a;const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*d,e[n+1]=l*g+u*d+c*f-a*p,e[n+2]=c*g+u*p+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Zh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Zh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ul.copy(this).projectOnVector(e),this.sub(Ul)}reflect(e){return this.sub(Ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ul=new O,Zh=new Rr;class tt{constructor(e,n,i,r,s,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=r[0],m=r[3],h=r[6],b=r[1],S=r[4],x=r[7],A=r[2],C=r[5],P=r[8];return s[0]=o*v+a*b+l*A,s[3]=o*m+a*S+l*C,s[6]=o*h+a*x+l*P,s[1]=c*v+u*b+f*A,s[4]=c*m+u*S+f*C,s[7]=c*h+u*x+f*P,s[2]=d*v+p*b+g*A,s[5]=d*m+p*S+g*C,s[8]=d*h+p*x+g*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ol.makeScale(e,n)),this}rotate(e){return this.premultiply(Ol.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ol.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ol=new tt,Qh=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jh=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mb(){const t={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===St&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(r.r=ps(r.r),r.g=ps(r.g),r.b=ps(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qi?Ba:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return vo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return vo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ys]:{primaries:e,whitePoint:i,transfer:Ba,toXYZ:Qh,fromXYZ:jh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:e,whitePoint:i,transfer:St,toXYZ:Qh,fromXYZ:jh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),t}const ft=mb();function Li(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ps(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Hr;class gb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hr===void 0&&(Hr=za("canvas")),Hr.width=e.width,Hr.height=e.height;const r=Hr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Hr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=za("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Li(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Li(n[i]/255)*255):n[i]=Li(n[i]);return{data:n,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _b=0;class Vf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=Ur(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Fl(r[o].image)):s.push(Fl(r[o]))}else s=Fl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Fl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let vb=0;const Bl=new O;class hn extends Nr{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Ri,r=Ri,s=nn,o=Sr,a=Hn,l=Pn,c=hn.DEFAULT_ANISOTROPY,u=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=Ur(),this.name="",this.source=new Vf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bl).x}get height(){return this.source.getSize(Bl).y}get depth(){return this.source.getSize(Bl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){qe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){qe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wc:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wc:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=t0;hn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,x=(p+1)/2,A=(h+1)/2,C=(u+d)/4,P=(f+v)/4,D=(g+m)/4;return S>x&&S>A?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=C/i,s=P/i):x>A?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=C/r,s=D/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=P/s,r=D/s),this.set(i,r,s,n),this}let b=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-v)/b,this.z=(d-u)/b,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this.w=it(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this.w=it(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xb extends Nr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new hn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Vf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends xb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class f0 extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yb extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vo.copy(i.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Ho.subVectors(this.max,Fs),Gr.subVectors(e.a,Fs),Wr.subVectors(e.b,Fs),Xr.subVectors(e.c,Fs),zi.subVectors(Wr,Gr),Vi.subVectors(Xr,Wr),dr.subVectors(Gr,Xr);let n=[0,-zi.z,zi.y,0,-Vi.z,Vi.y,0,-dr.z,dr.y,zi.z,0,-zi.x,Vi.z,0,-Vi.x,dr.z,0,-dr.x,-zi.y,zi.x,0,-Vi.y,Vi.x,0,-dr.y,dr.x,0];return!kl(n,Gr,Wr,Xr,Ho)||(n=[1,0,0,0,1,0,0,0,1],!kl(n,Gr,Wr,Xr,Ho))?!1:(Go.crossVectors(zi,Vi),n=[Go.x,Go.y,Go.z],kl(n,Gr,Wr,Xr,Ho))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new O,new O,new O,new O,new O,new O,new O,new O],Bn=new O,Vo=new Po,Gr=new O,Wr=new O,Xr=new O,zi=new O,Vi=new O,dr=new O,Fs=new O,Ho=new O,Go=new O,hr=new O;function kl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){hr.fromArray(t,s);const a=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),c=n.dot(hr),u=i.dot(hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Sb=new Po,Bs=new O,zl=new O;let Ro=class{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Sb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const n=Bs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Bs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(zl)),this.expandByPoint(Bs.copy(e.center).sub(zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};const yi=new O,Vl=new O,Wo=new O,Hi=new O,Hl=new O,Xo=new O,Gl=new O;class rl{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,n),yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Vl.copy(e).add(n).multiplyScalar(.5),Wo.copy(n).sub(e).normalize(),Hi.copy(this.origin).sub(Vl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Wo),a=Hi.dot(this.direction),l=-Hi.dot(Wo),c=Hi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Vl).addScaledVector(Wo,d),p}intersectSphere(e,n){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,n,i,r,s){Hl.subVectors(n,e),Xo.subVectors(i,e),Gl.crossVectors(Hl,Xo);let o=this.direction.dot(Gl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);const l=a*this.direction.dot(Xo.crossVectors(Hi,Xo));if(l<0)return null;const c=a*this.direction.dot(Hl.cross(Hi));if(c<0||l+c>o)return null;const u=-a*Hi.dot(Gl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,g,v,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,v,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,v=c*f;n[0]=d+v*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bb,e,Mb)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Gi.crossVectors(i,wn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Gi.crossVectors(i,wn)),Gi.normalize(),qo.crossVectors(wn,Gi),r[0]=Gi.x,r[4]=qo.x,r[8]=wn.x,r[1]=Gi.y,r[5]=qo.y,r[9]=wn.y,r[2]=Gi.z,r[6]=qo.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],b=i[3],S=i[7],x=i[11],A=i[15],C=r[0],P=r[4],D=r[8],y=r[12],E=r[1],L=r[5],H=r[9],X=r[13],te=r[2],Q=r[6],q=r[10],z=r[14],V=r[3],de=r[7],pe=r[11],he=r[15];return s[0]=o*C+a*E+l*te+c*V,s[4]=o*P+a*L+l*Q+c*de,s[8]=o*D+a*H+l*q+c*pe,s[12]=o*y+a*X+l*z+c*he,s[1]=u*C+f*E+d*te+p*V,s[5]=u*P+f*L+d*Q+p*de,s[9]=u*D+f*H+d*q+p*pe,s[13]=u*y+f*X+d*z+p*he,s[2]=g*C+v*E+m*te+h*V,s[6]=g*P+v*L+m*Q+h*de,s[10]=g*D+v*H+m*q+h*pe,s[14]=g*y+v*X+m*z+h*he,s[3]=b*C+S*E+x*te+A*V,s[7]=b*P+S*L+x*Q+A*de,s[11]=b*D+S*H+x*q+A*pe,s[15]=b*y+S*X+x*z+A*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15],b=l*p-c*d,S=a*p-c*f,x=a*d-l*f,A=o*p-c*u,C=o*d-l*u,P=o*f-a*u;return n*(v*b-m*S+h*x)-i*(g*b-m*A+h*C)+r*(g*S-v*A+h*P)-s*(g*x-v*C+m*P)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],b=f*m*c-v*d*c+v*l*p-a*m*p-f*l*h+a*d*h,S=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,x=u*v*c-g*f*c+g*a*p-o*v*p-u*a*h+o*f*h,A=g*f*l-u*v*l-g*a*d+o*v*d+u*a*m-o*f*m,C=n*b+i*S+r*x+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=b*P,e[1]=(v*d*s-f*m*s-v*r*p+i*m*p+f*r*h-i*d*h)*P,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*h+i*l*h)*P,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*P,e[4]=S*P,e[5]=(u*m*s-g*d*s+g*r*p-n*m*p-u*r*h+n*d*h)*P,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*h-n*l*h)*P,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*P,e[8]=x*P,e[9]=(g*f*s-u*v*s-g*i*p+n*v*p+u*i*h-n*f*h)*P,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*h+n*a*h)*P,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*P,e[12]=A*P,e[13]=(u*v*r-g*f*r+g*i*d-n*v*d-u*i*m+n*f*m)*P,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*P,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,v=o*u,m=o*f,h=a*f,b=l*c,S=l*u,x=l*f,A=i.x,C=i.y,P=i.z;return r[0]=(1-(v+h))*A,r[1]=(p+x)*A,r[2]=(g-S)*A,r[3]=0,r[4]=(p-x)*C,r[5]=(1-(d+h))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(g+S)*P,r[9]=(m-b)*P,r[10]=(1-(d+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=qr.set(r[0],r[1],r[2]).length();const o=qr.set(r[4],r[5],r[6]).length(),a=qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),kn.copy(this);const c=1/s,u=1/o,f=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,n.setFromRotationMatrix(kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ri,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===ri)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ka)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ri,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===ri)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===ka)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qr=new O,kn=new mt,bb=new O(0,0,0),Mb=new O(1,1,1),Gi=new O,qo=new O,wn=new O,ep=new mt,tp=new Rr;class di{constructor(e=0,n=0,i=0,r=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ep,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tp.setFromEuler(this),this.setFromQuaternion(tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class d0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Eb=0;const np=new O,Jr=new Rr,Si=new mt,Jo=new O,ks=new O,Tb=new O,wb=new Rr,ip=new O(1,0,0),rp=new O(0,1,0),sp=new O(0,0,1),op={type:"added"},Ab={type:"removed"},Yr={type:"childadded",child:null},Wl={type:"childremoved",child:null};class Rt extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new O,n=new di,i=new Rr,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new tt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new d0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(ip,e)}rotateY(e){return this.rotateOnAxis(rp,e)}rotateZ(e){return this.rotateOnAxis(sp,e)}translateOnAxis(e,n){return np.copy(e).applyQuaternion(this.quaternion),this.position.add(np.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ip,e)}translateY(e){return this.translateOnAxis(rp,e)}translateZ(e){return this.translateOnAxis(sp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Jo.copy(e):Jo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(ks,Jo,this.up):Si.lookAt(Jo,ks,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(Si),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(op),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ab),Wl.child=e,this.dispatchEvent(Wl),Wl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(op),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,Tb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,wb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new O(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new O,bi=new O,Xl=new O,Mi=new O,$r=new O,Kr=new O,ap=new O,ql=new O,Jl=new O,Yl=new O,$l=new Nt,Kl=new Nt,Zl=new Nt;class Vn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),bi.subVectors(i,n),Xl.subVectors(e,n);const o=zn.dot(zn),a=zn.dot(bi),l=zn.dot(Xl),c=bi.dot(bi),u=bi.dot(Xl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return $l.setScalar(0),Kl.setScalar(0),Zl.setScalar(0),$l.fromBufferAttribute(e,n),Kl.fromBufferAttribute(e,i),Zl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector($l,s.x),o.addScaledVector(Kl,s.y),o.addScaledVector(Zl,s.z),o}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),bi.subVectors(e,n),zn.cross(bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),zn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;$r.subVectors(r,i),Kr.subVectors(s,i),ql.subVectors(e,i);const l=$r.dot(ql),c=Kr.dot(ql);if(l<=0&&c<=0)return n.copy(i);Jl.subVectors(e,r);const u=$r.dot(Jl),f=Kr.dot(Jl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector($r,o);Yl.subVectors(e,s);const p=$r.dot(Yl),g=Kr.dot(Yl);if(g>=0&&p<=g)return n.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Kr,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return ap.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(ap,a);const h=1/(m+v+d);return o=v*h,a=d*h,n.copy(i).addScaledVector($r,o).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const h0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function Ql(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ft.workingColorSpace){return this.r=e,this.g=n,this.b=i,ft.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ft.workingColorSpace){if(e=zf(e,1),n=it(n,0,1),i=it(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ql(o,s,e+1/3),this.g=Ql(o,s,e),this.b=Ql(o,s,e-1/3)}return ft.colorSpaceToWorking(this,r),this}setStyle(e,n=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Cn){const i=h0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return ft.workingToColorSpace(jt.copy(this),e),Math.round(it(jt.r*255,0,255))*65536+Math.round(it(jt.g*255,0,255))*256+Math.round(it(jt.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ft.workingColorSpace){ft.workingToColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ft.workingColorSpace){return ft.workingToColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Cn){ft.workingToColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+n,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Wi),e.getHSL(Yo);const i=so(Wi.h,Yo.h,n),r=so(Wi.s,Yo.s,n),s=so(Wi.l,Yo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new $e;$e.NAMES=h0;let Cb=0;class Or extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=hs,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Nc,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){qe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){qe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ic&&(i.blendSrc=this.blendSrc),this.blendDst!==Nc&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ds extends Or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Yg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new O,$o=new ge;let Pb=0;class pn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=qh,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)$o.fromBufferAttribute(this,n),$o.applyMatrix3(e),this.setXY(n,$o.x,$o.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=rs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=rs(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=rs(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=rs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=rs(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qh&&(e.usage=this.usage),e}}class p0 extends pn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class m0 extends pn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class at extends pn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Rb=0;const Un=new mt,jl=new Rt,Zr=new O,An=new Po,zs=new Po,Jt=new O;class dt extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(u0(e)?m0:p0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return jl.lookAt(e),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new at(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ro);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(An.min,zs.min),An.expandByPoint(Jt),Jt.addVectors(An.max,zs.max),An.expandByPoint(Jt)):(An.expandByPoint(zs.min),An.expandByPoint(zs.max))}An.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(Zr.fromBufferAttribute(e,c),Jt.add(Zr)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new O,l[D]=new O;const c=new O,u=new O,f=new O,d=new ge,p=new ge,g=new ge,v=new O,m=new O;function h(D,y,E){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,E),d.fromBufferAttribute(s,D),p.fromBufferAttribute(s,y),g.fromBufferAttribute(s,E),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),a[D].add(v),a[y].add(v),a[E].add(v),l[D].add(m),l[y].add(m),l[E].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,y=b.length;D<y;++D){const E=b[D],L=E.start,H=E.count;for(let X=L,te=L+H;X<te;X+=3)h(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const S=new O,x=new O,A=new O,C=new O;function P(D){A.fromBufferAttribute(r,D),C.copy(A);const y=a[D];S.copy(y),S.sub(A.multiplyScalar(A.dot(y))).normalize(),x.crossVectors(C,y);const L=x.dot(l[D])<0?-1:1;o.setXYZW(D,S.x,S.y,S.z,L)}for(let D=0,y=b.length;D<y;++D){const E=b[D],L=E.start,H=E.count;for(let X=L,te=L+H;X<te;X+=3)P(e.getX(X+0)),P(e.getX(X+1)),P(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new pn(d,u,f)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new dt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lp=new mt,pr=new rl,Ko=new Ro,cp=new O,Zo=new O,Qo=new O,jo=new O,ec=new O,ea=new O,up=new O,ta=new O;let $t=class extends Rt{constructor(e=new dt,n=new Ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ea.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ec.fromBufferAttribute(f,e),o?ea.addScaledVector(ec,u):ea.addScaledVector(ec.sub(n),u))}n.add(ea)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(Ko.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Ko,cp)===null||pr.origin.distanceToSquared(cp)>(e.far-e.near)**2))&&(lp.copy(s).invert(),pr.copy(e.ray).applyMatrix4(lp),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,A=S;x<A;x+=3){const C=a.getX(x),P=a.getX(x+1),D=a.getX(x+2);r=na(this,h,e,i,c,u,f,C,P,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const b=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);r=na(this,o,e,i,c,u,f,b,S,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,A=S;x<A;x+=3){const C=x,P=x+1,D=x+2;r=na(this,h,e,i,c,u,f,C,P,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const b=m,S=m+1,x=m+2;r=na(this,o,e,i,c,u,f,b,S,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}};function Db(t,e,n,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===rr,a),l===null)return null;ta.copy(a),ta.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ta);return c<n.near||c>n.far?null:{distance:c,point:ta.clone(),object:t}}function na(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Zo),t.getVertexPosition(l,Qo),t.getVertexPosition(c,jo);const u=Db(t,e,n,i,Zo,Qo,jo,up);if(u){const f=new O;Vn.getBarycoord(up,Zo,Qo,jo,f),r&&(u.uv=Vn.getInterpolatedAttribute(r,a,l,c,f,new ge)),s&&(u.uv1=Vn.getInterpolatedAttribute(s,a,l,c,f,new ge)),o&&(u.normal=Vn.getInterpolatedAttribute(o,a,l,c,f,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};Vn.getNormal(Zo,Qo,jo,d.normal),u.face=d,u.barycoord=f}return u}class Fr extends dt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(f,2));function g(v,m,h,b,S,x,A,C,P,D,y){const E=x/P,L=A/D,H=x/2,X=A/2,te=C/2,Q=P+1,q=D+1;let z=0,V=0;const de=new O;for(let pe=0;pe<q;pe++){const he=pe*L-X;for(let ze=0;ze<Q;ze++){const Ie=ze*E-H;de[v]=Ie*b,de[m]=he*S,de[h]=te,c.push(de.x,de.y,de.z),de[v]=0,de[m]=0,de[h]=C>0?1:-1,u.push(de.x,de.y,de.z),f.push(ze/P),f.push(1-pe/D),z+=1}}for(let pe=0;pe<D;pe++)for(let he=0;he<P;he++){const ze=d+he+Q*pe,Ie=d+he+Q*(pe+1),Ke=d+(he+1)+Q*(pe+1),lt=d+(he+1)+Q*pe;l.push(ze,Ie,lt),l.push(Ie,Ke,lt),V+=6}a.addGroup(p,V,y),p+=V,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=bs(t[n]);for(const r in i)e[r]=i[r]}return e}function Lb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function g0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const _0={clone:bs,merge:un};var Ib=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ib,this.fragmentShader=Nb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=Lb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class v0 extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new O,fp=new ge,dp=new ge;class yn extends v0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,n){return this.getViewBounds(e,fp,dp),n.subVectors(dp,fp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ro*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qr=-90,jr=1;class Ub extends Rt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(Qr,jr,e,n);r.layers=this.layers,this.add(r);const s=new yn(Qr,jr,e,n);s.layers=this.layers,this.add(s);const o=new yn(Qr,jr,e,n);o.layers=this.layers,this.add(o);const a=new yn(Qr,jr,e,n);a.layers=this.layers,this.add(a);const l=new yn(Qr,jr,e,n);l.layers=this.layers,this.add(l);const c=new yn(Qr,jr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class x0 extends hn{constructor(e=[],n=Pr,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class y0 extends ai{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new x0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fr(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Di});s.uniforms.tEquirect.value=n;const o=new $t(r,s),a=n.minFilter;return n.minFilter===Sr&&(n.minFilter=nn),new Ub(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class ia extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ob={type:"move"};class tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ob)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ia;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Fb extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Bb extends hn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Kt,u=Kt,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nc=new O,kb=new O,zb=new tt;let Ai=class{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=nc.subVectors(i,n).cross(kb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(nc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||zb.getNormalMatrix(e),r=this.coplanarPoint(nc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const mr=new Ro,Vb=new ge(.5,.5),ra=new O;class Hf{constructor(e=new Ai,n=new Ai,i=new Ai,r=new Ai,s=new Ai,o=new Ai){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],p=s[7],g=s[8],v=s[9],m=s[10],h=s[11],b=s[12],S=s[13],x=s[14],A=s[15];if(r[0].setComponents(c-o,p-u,h-g,A-b).normalize(),r[1].setComponents(c+o,p+u,h+g,A+b).normalize(),r[2].setComponents(c+a,p+f,h+v,A+S).normalize(),r[3].setComponents(c-a,p-f,h-v,A-S).normalize(),i)r[4].setComponents(l,d,m,x).normalize(),r[5].setComponents(c-l,p-d,h-m,A-x).normalize();else if(r[4].setComponents(c-l,p-d,h-m,A-x).normalize(),n===ri)r[5].setComponents(c+l,p+d,h+m,A+x).normalize();else if(n===ka)r[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){mr.center.set(0,0,0);const n=Vb.distanceTo(e.center);return mr.radius=.7071067811865476+n,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ra.x=r.normal.x>0?e.max.x:e.min.x,ra.y=r.normal.y>0?e.max.y:e.min.y,ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pi extends Or{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Va=new O,Ha=new O,hp=new mt,Vs=new rl,sa=new Ro,ic=new O,pp=new O;let sr=class extends Rt{constructor(e=new dt,n=new pi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Va.fromBufferAttribute(n,r-1),Ha.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Va.distanceTo(Ha);e.setAttribute("lineDistance",new at(i,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(r),sa.radius+=s,e.ray.intersectsSphere(sa)===!1)return;hp.copy(r).invert(),Vs.copy(e.ray).applyMatrix4(hp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const h=u.getX(v),b=u.getX(v+1),S=oa(this,e,Vs,l,h,b,v);S&&n.push(S)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),h=oa(this,e,Vs,l,v,m,g-1);h&&n.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const h=oa(this,e,Vs,l,v,v+1,v);h&&n.push(h)}if(this.isLineLoop){const v=oa(this,e,Vs,l,g-1,p,g-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function oa(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Va.fromBufferAttribute(a,r),Ha.fromBufferAttribute(a,s),n.distanceSqToSegment(Va,Ha,ic,pp)>i)return;ic.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(ic);if(!(c<e.near||c>e.far))return{distance:c,point:pp.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const mp=new O,gp=new O;class S0 extends sr{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)mp.fromBufferAttribute(n,r),gp.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+mp.distanceTo(gp);e.setAttribute("lineDistance",new at(i,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gf extends Or{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _p=new mt,Tu=new rl,aa=new Ro,la=new O;class b0 extends Rt{constructor(e=new dt,n=new Gf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(r),aa.radius+=s,e.ray.intersectsSphere(aa)===!1)return;_p.copy(r).invert(),Tu.copy(e.ray).applyMatrix4(_p);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);la.fromBufferAttribute(f,m),vp(la,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,v=p;g<v;g++)la.fromBufferAttribute(f,g),vp(la,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vp(t,e,n,i,r,s,o){const a=Tu.distanceSqToPoint(t);if(a<n){const l=new O;Tu.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class xo extends hn{constructor(e,n,i=fi,r,s,o,a=Kt,l=Kt,c,u=Fi,f=1){if(u!==Fi&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Hb extends xo{constructor(e,n=fi,i=Pr,r,s,o=Kt,a=Kt,l,c=Fi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class M0 extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wf extends dt{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],u=n/2,f=Math.PI/2*e,d=n,p=2*f+d,g=i*2+s,v=r+1,m=new O,h=new O;for(let b=0;b<=g;b++){let S=0,x=0,A=0,C=0;if(b<=i){const y=b/i,E=y*Math.PI/2;x=-u-e*Math.cos(E),A=e*Math.sin(E),C=-e*Math.cos(E),S=y*f}else if(b<=i+s){const y=(b-i)/s;x=-u+y*n,A=e,C=0,S=f+y*d}else{const y=(b-i-s)/i,E=y*Math.PI/2;x=u+e*Math.sin(E),A=e*Math.cos(E),C=e*Math.sin(E),S=f+d+y*f}const P=Math.max(0,Math.min(1,S/p));let D=0;b===0?D=.5/r:b===g&&(D=-.5/r);for(let y=0;y<=r;y++){const E=y/r,L=E*Math.PI*2,H=Math.sin(L),X=Math.cos(L);h.x=-A*X,h.y=x,h.z=A*H,a.push(h.x,h.y,h.z),m.set(-A*X,C,A*H),m.normalize(),l.push(m.x,m.y,m.z),c.push(E+D,P)}if(b>0){const y=(b-1)*v;for(let E=0;E<r;E++){const L=y+E,H=y+E+1,X=b*v+E,te=b*v+E+1;o.push(L,H,X),o.push(H,te,X)}}}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wf(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Xf extends dt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new O,u=new ge;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=n;f++,d+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class sl extends dt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],p=[];let g=0;const v=[],m=i/2;let h=0;b(),o===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new at(f,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(p,2));function b(){const x=new O,A=new O;let C=0;const P=(n-e)/i;for(let D=0;D<=s;D++){const y=[],E=D/s,L=E*(n-e)+e;for(let H=0;H<=r;H++){const X=H/r,te=X*l+a,Q=Math.sin(te),q=Math.cos(te);A.x=L*Q,A.y=-E*i+m,A.z=L*q,f.push(A.x,A.y,A.z),x.set(Q,P,q).normalize(),d.push(x.x,x.y,x.z),p.push(X,1-E),y.push(g++)}v.push(y)}for(let D=0;D<r;D++)for(let y=0;y<s;y++){const E=v[y][D],L=v[y+1][D],H=v[y+1][D+1],X=v[y][D+1];(e>0||y!==0)&&(u.push(E,L,X),C+=3),(n>0||y!==s-1)&&(u.push(L,H,X),C+=3)}c.addGroup(h,C,0),h+=C}function S(x){const A=g,C=new ge,P=new O;let D=0;const y=x===!0?e:n,E=x===!0?1:-1;for(let H=1;H<=r;H++)f.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),g++;const L=g;for(let H=0;H<=r;H++){const te=H/r*l+a,Q=Math.cos(te),q=Math.sin(te);P.x=y*q,P.y=m*E,P.z=y*Q,f.push(P.x,P.y,P.z),d.push(0,E,0),C.x=Q*.5+.5,C.y=q*.5*E+.5,p.push(C.x,C.y),g++}for(let H=0;H<r;H++){const X=A+H,te=L+H;x===!0?u.push(te,te+1,X):u.push(te+1,te,X),D+=3}c.addGroup(h,D,x===!0?1:2),h+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ol extends sl{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ol(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,p=(o-u)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ge:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new O,r=[],s=[],o=[],a=new O,l=new mt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(it(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(it(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class qf extends mi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ge){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*f+this.aX,c=d*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Gb extends qf{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Jf(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,p*=u,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const ca=new O,rc=new Jf,sc=new Jf,oc=new Jf;class Wb extends mi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new O){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(ca.subVectors(r[0],r[1]).add(r[0]),c=ca);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ca.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ca),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),rc.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,g,v,m),sc.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,g,v,m),oc.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(rc.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),sc.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),oc.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(rc.calc(l),sc.calc(l),oc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function xp(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function Xb(t,e){const n=1-t;return n*n*e}function qb(t,e){return 2*(1-t)*t*e}function Jb(t,e){return t*t*e}function oo(t,e,n,i){return Xb(t,e)+qb(t,n)+Jb(t,i)}function Yb(t,e){const n=1-t;return n*n*n*e}function $b(t,e){const n=1-t;return 3*n*n*t*e}function Kb(t,e){return 3*(1-t)*t*t*e}function Zb(t,e){return t*t*t*e}function ao(t,e,n,i,r){return Yb(t,e)+$b(t,n)+Kb(t,i)+Zb(t,r)}class E0 extends mi{constructor(e=new ge,n=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ge){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ao(e,r.x,s.x,o.x,a.x),ao(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qb extends mi{constructor(e=new O,n=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ao(e,r.x,s.x,o.x,a.x),ao(e,r.y,s.y,o.y,a.y),ao(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class T0 extends mi{constructor(e=new ge,n=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ge){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ge){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jb extends mi{constructor(e=new O,n=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new O){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new O){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w0 extends mi{constructor(e=new ge,n=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ge){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(oo(e,r.x,s.x,o.x),oo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eM extends mi{constructor(e=new O,n=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(oo(e,r.x,s.x,o.x),oo(e,r.y,s.y,o.y),oo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A0 extends mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ge){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(xp(a,l.x,c.x,u.x,f.x),xp(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ge().fromArray(r))}return this}}var wu=Object.freeze({__proto__:null,ArcCurve:Gb,CatmullRomCurve3:Wb,CubicBezierCurve:E0,CubicBezierCurve3:Qb,EllipseCurve:qf,LineCurve:T0,LineCurve3:jb,QuadraticBezierCurve:w0,QuadraticBezierCurve3:eM,SplineCurve:A0});class tM extends mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wu[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new wu[r.type]().fromJSON(r))}return this}}class Au extends tM{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new T0(this.currentPoint.clone(),new ge(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new w0(this.currentPoint.clone(),new ge(e,n),new ge(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new E0(this.currentPoint.clone(),new ge(e,n),new ge(i,r),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new A0(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new qf(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Aa extends Au{constructor(e){super(e),this.uuid=Ur(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Au().fromJSON(r))}return this}}function nM(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=C0(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=aM(t,e,s,n)),t.length>80*n){a=t[0],l=t[1];let u=a,f=l;for(let d=n;d<r;d+=n){const p=t[d],g=t[d+1];p<a&&(a=p),g<l&&(l=g),p>u&&(u=p),g>f&&(f=g)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return yo(s,o,n,a,l,c,0),o}function C0(t,e,n,i,r){let s;if(r===vM(t,e,n,i)>0)for(let o=e;o<n;o+=i)s=yp(o/i|0,t[o],t[o+1],s);else for(let o=n-i;o>=e;o-=i)s=yp(o/i|0,t[o],t[o+1],s);return s&&Ms(s,s.next)&&(bo(s),s=s.next),s}function Dr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Ms(n,n.next)||Dt(n.prev,n,n.next)===0)){if(bo(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function yo(t,e,n,i,r,s,o){if(!t)return;!o&&s&&dM(t,i,r,s);let a=t;for(;t.prev!==t.next;){const l=t.prev,c=t.next;if(s?rM(t,i,r,s):iM(t)){e.push(l.i,t.i,c.i),bo(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=sM(Dr(t),e),yo(t,e,n,i,r,s,2)):o===2&&oM(t,e,n,i,r,s):yo(Dr(t),e,n,i,r,s,1);break}}}function iM(t){const e=t.prev,n=t,i=t.next;if(Dt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=Math.min(r,s,o),f=Math.min(a,l,c),d=Math.max(r,s,o),p=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=p&&Ys(r,a,s,l,o,c,g.x,g.y)&&Dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rM(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Dt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,d=o.y,p=Math.min(a,l,c),g=Math.min(u,f,d),v=Math.max(a,l,c),m=Math.max(u,f,d),h=Cu(p,g,e,n,i),b=Cu(v,m,e,n,i);let S=t.prevZ,x=t.nextZ;for(;S&&S.z>=h&&x&&x.z<=b;){if(S.x>=p&&S.x<=v&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Ys(a,u,l,f,c,d,S.x,S.y)&&Dt(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Ys(a,u,l,f,c,d,x.x,x.y)&&Dt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=h;){if(S.x>=p&&S.x<=v&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Ys(a,u,l,f,c,d,S.x,S.y)&&Dt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=b;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Ys(a,u,l,f,c,d,x.x,x.y)&&Dt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function sM(t,e){let n=t;do{const i=n.prev,r=n.next.next;!Ms(i,r)&&R0(i,n,n.next,r)&&So(i,r)&&So(r,i)&&(e.push(i.i,n.i,r.i),bo(n),bo(n.next),n=t=r),n=n.next}while(n!==t);return Dr(n)}function oM(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mM(o,a)){let l=D0(o,a);o=Dr(o,o.next),l=Dr(l,l.next),yo(o,e,n,i,r,s,0),yo(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function aM(t,e,n,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=C0(t,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(pM(c))}r.sort(lM);for(let s=0;s<r.length;s++)n=cM(r[s],n);return n}function lM(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),r=(e.next.y-e.y)/(e.next.x-e.x);n=i-r}return n}function cM(t,e){const n=uM(t,e);if(!n)return e;const i=D0(n,t);return Dr(i,i.next),Dr(n,n.next)}function uM(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,o;if(Ms(t,n))return n;do{if(Ms(t,n.next))return n.next;if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const f=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=i&&f>s&&(s=f,o=n.x<n.next.x?n:n.next,f===i))return o}n=n.next}while(n!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&P0(r<c?i:s,r,l,c,r<c?s:i,r,n.x,n.y)){const f=Math.abs(r-n.y)/(i-n.x);So(n,t)&&(f<u||f===u&&(n.x>o.x||n.x===o.x&&fM(o,n)))&&(o=n,u=f)}n=n.next}while(n!==a);return o}function fM(t,e){return Dt(t.prev,t,e.prev)<0&&Dt(e.next,t,t.next)<0}function dM(t,e,n,i){let r=t;do r.z===0&&(r.z=Cu(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,hM(r)}function hM(t){let e,n=1;do{let i=t,r;t=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;i=o}s.nextZ=null,n*=2}while(e>1);return t}function Cu(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function pM(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function P0(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function Ys(t,e,n,i,r,s,o,a){return!(t===o&&e===a)&&P0(t,e,n,i,r,s,o,a)}function mM(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!gM(t,e)&&(So(t,e)&&So(e,t)&&_M(t,e)&&(Dt(t.prev,t,e.prev)||Dt(t,e.prev,e))||Ms(t,e)&&Dt(t.prev,t,t.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Ms(t,e){return t.x===e.x&&t.y===e.y}function R0(t,e,n,i){const r=fa(Dt(t,e,n)),s=fa(Dt(t,e,i)),o=fa(Dt(n,i,t)),a=fa(Dt(n,i,e));return!!(r!==s&&o!==a||r===0&&ua(t,n,e)||s===0&&ua(t,i,e)||o===0&&ua(n,t,i)||a===0&&ua(n,e,i))}function ua(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function fa(t){return t>0?1:t<0?-1:0}function gM(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&R0(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function So(t,e){return Dt(t.prev,t,t.next)<0?Dt(t,e,t.next)>=0&&Dt(t,t.prev,e)>=0:Dt(t,e,t.prev)<0||Dt(t,t.next,e)<0}function _M(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function D0(t,e){const n=Pu(t.i,t.x,t.y),i=Pu(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function yp(t,e,n,i){const r=Pu(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function bo(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Pu(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vM(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class xM{static triangulate(e,n,i=2){return nM(e,n,i)}}class Mr{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Mr.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];Sp(e),bp(i,e);let o=e.length;n.forEach(Sp);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,bp(i,n[l]);const a=xM.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Sp(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function bp(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Yf extends dt{constructor(e=new Aa([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new at(r,3)),this.setAttribute("uv",new at(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,v=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const h=n.extrudePath,b=n.UVGenerator!==void 0?n.UVGenerator:yM;let S,x=!1,A,C,P,D;if(h){S=h.getSpacedPoints(u),x=!0,d=!1;const N=h.isCatmullRomCurve3?h.closed:!1;A=h.computeFrenetFrames(u,N),C=new O,P=new O,D=new O}d||(m=0,p=0,g=0,v=0);const y=a.extractPoints(c);let E=y.shape;const L=y.holes;if(!Mr.isClockWise(E)){E=E.reverse();for(let N=0,k=L.length;N<k;N++){const F=L[N];Mr.isClockWise(F)&&(L[N]=F.reverse())}}function X(N){const F=10000000000000001e-36;let W=N[0];for(let T=1;T<=N.length;T++){const re=T%N.length,K=N[re],Z=K.x-W.x,ie=K.y-W.y,M=Z*Z+ie*ie,_=Math.max(Math.abs(K.x),Math.abs(K.y),Math.abs(W.x),Math.abs(W.y)),I=F*_*_;if(M<=I){N.splice(re,1),T--;continue}W=K}}X(E),L.forEach(X);const te=L.length,Q=E;for(let N=0;N<te;N++){const k=L[N];E=E.concat(k)}function q(N,k,F){return k||ut("ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(k,F)}const z=E.length;function V(N,k,F){let W,T,re;const K=N.x-k.x,Z=N.y-k.y,ie=F.x-N.x,M=F.y-N.y,_=K*K+Z*Z,I=K*M-Z*ie;if(Math.abs(I)>Number.EPSILON){const J=Math.sqrt(_),ne=Math.sqrt(ie*ie+M*M),Y=k.x-Z/J,Me=k.y+K/J,ue=F.x-M/ne,Ce=F.y+ie/ne,Be=((ue-Y)*M-(Ce-Me)*ie)/(K*M-Z*ie);W=Y+K*Be-N.x,T=Me+Z*Be-N.y;const ce=W*W+T*T;if(ce<=2)return new ge(W,T);re=Math.sqrt(ce/2)}else{let J=!1;K>Number.EPSILON?ie>Number.EPSILON&&(J=!0):K<-Number.EPSILON?ie<-Number.EPSILON&&(J=!0):Math.sign(Z)===Math.sign(M)&&(J=!0),J?(W=-Z,T=K,re=Math.sqrt(_)):(W=K,T=Z,re=Math.sqrt(_/2))}return new ge(W/re,T/re)}const de=[];for(let N=0,k=Q.length,F=k-1,W=N+1;N<k;N++,F++,W++)F===k&&(F=0),W===k&&(W=0),de[N]=V(Q[N],Q[F],Q[W]);const pe=[];let he,ze=de.concat();for(let N=0,k=te;N<k;N++){const F=L[N];he=[];for(let W=0,T=F.length,re=T-1,K=W+1;W<T;W++,re++,K++)re===T&&(re=0),K===T&&(K=0),he[W]=V(F[W],F[re],F[K]);pe.push(he),ze=ze.concat(he)}let Ie;if(m===0)Ie=Mr.triangulateShape(Q,L);else{const N=[],k=[];for(let F=0;F<m;F++){const W=F/m,T=p*Math.cos(W*Math.PI/2),re=g*Math.sin(W*Math.PI/2)+v;for(let K=0,Z=Q.length;K<Z;K++){const ie=q(Q[K],de[K],re);ke(ie.x,ie.y,-T),W===0&&N.push(ie)}for(let K=0,Z=te;K<Z;K++){const ie=L[K];he=pe[K];const M=[];for(let _=0,I=ie.length;_<I;_++){const J=q(ie[_],he[_],re);ke(J.x,J.y,-T),W===0&&M.push(J)}W===0&&k.push(M)}}Ie=Mr.triangulateShape(N,k)}const Ke=Ie.length,lt=g+v;for(let N=0;N<z;N++){const k=d?q(E[N],ze[N],lt):E[N];x?(P.copy(A.normals[0]).multiplyScalar(k.x),C.copy(A.binormals[0]).multiplyScalar(k.y),D.copy(S[0]).add(P).add(C),ke(D.x,D.y,D.z)):ke(k.x,k.y,0)}for(let N=1;N<=u;N++)for(let k=0;k<z;k++){const F=d?q(E[k],ze[k],lt):E[k];x?(P.copy(A.normals[N]).multiplyScalar(F.x),C.copy(A.binormals[N]).multiplyScalar(F.y),D.copy(S[N]).add(P).add(C),ke(D.x,D.y,D.z)):ke(F.x,F.y,f/u*N)}for(let N=m-1;N>=0;N--){const k=N/m,F=p*Math.cos(k*Math.PI/2),W=g*Math.sin(k*Math.PI/2)+v;for(let T=0,re=Q.length;T<re;T++){const K=q(Q[T],de[T],W);ke(K.x,K.y,f+F)}for(let T=0,re=L.length;T<re;T++){const K=L[T];he=pe[T];for(let Z=0,ie=K.length;Z<ie;Z++){const M=q(K[Z],he[Z],W);x?ke(M.x,M.y+S[u-1].y,S[u-1].x+F):ke(M.x,M.y,f+F)}}}se(),oe();function se(){const N=r.length/3;if(d){let k=0,F=z*k;for(let W=0;W<Ke;W++){const T=Ie[W];be(T[2]+F,T[1]+F,T[0]+F)}k=u+m*2,F=z*k;for(let W=0;W<Ke;W++){const T=Ie[W];be(T[0]+F,T[1]+F,T[2]+F)}}else{for(let k=0;k<Ke;k++){const F=Ie[k];be(F[2],F[1],F[0])}for(let k=0;k<Ke;k++){const F=Ie[k];be(F[0]+z*u,F[1]+z*u,F[2]+z*u)}}i.addGroup(N,r.length/3-N,0)}function oe(){const N=r.length/3;let k=0;Ae(Q,k),k+=Q.length;for(let F=0,W=L.length;F<W;F++){const T=L[F];Ae(T,k),k+=T.length}i.addGroup(N,r.length/3-N,1)}function Ae(N,k){let F=N.length;for(;--F>=0;){const W=F;let T=F-1;T<0&&(T=N.length-1);for(let re=0,K=u+m*2;re<K;re++){const Z=z*re,ie=z*(re+1),M=k+W+Z,_=k+T+Z,I=k+T+ie,J=k+W+ie;rt(M,_,I,J)}}}function ke(N,k,F){l.push(N),l.push(k),l.push(F)}function be(N,k,F){R(N),R(k),R(F);const W=r.length/3,T=b.generateTopUV(i,r,W-3,W-2,W-1);U(T[0]),U(T[1]),U(T[2])}function rt(N,k,F,W){R(N),R(k),R(W),R(k),R(F),R(W);const T=r.length/3,re=b.generateSideWallUV(i,r,T-6,T-3,T-2,T-1);U(re[0]),U(re[1]),U(re[3]),U(re[1]),U(re[2]),U(re[3])}function R(N){r.push(l[N*3+0]),r.push(l[N*3+1]),r.push(l[N*3+2])}function U(N){s.push(N.x),s.push(N.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return SM(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new wu[r.type]().fromJSON(r)),new Yf(i,e.options)}}const yM={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ge(s,o),new ge(a,l),new ge(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],d=e[r*3],p=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],h=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-f),new ge(d,1-g),new ge(v,1-h)]:[new ge(a,1-l),new ge(u,1-f),new ge(p,1-g),new ge(m,1-h)]}};function SM(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class al extends dt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const b=h*d-o;for(let S=0;S<c;S++){const x=S*f-s;g.push(x,-b,0),v.push(0,0,1),m.push(S/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<a;b++){const S=b+c*h,x=b+c*(h+1),A=b+1+c*(h+1),C=b+1+c*h;p.push(S,x,C),p.push(x,A,C)}this.setIndex(p),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.widthSegments,e.heightSegments)}}class ll extends dt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new O,d=new O,p=[],g=[],v=[],m=[];for(let h=0;h<=i;h++){const b=[],S=h/i;let x=0;h===0&&o===0?x=.5/n:h===i&&l===Math.PI&&(x=-.5/n);for(let A=0;A<=n;A++){const C=A/n;f.x=-e*Math.cos(r+C*s)*Math.sin(o+S*a),f.y=e*Math.cos(o+S*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+S*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(C+x,1-S),b.push(c++)}u.push(b)}for(let h=0;h<i;h++)for(let b=0;b<n;b++){const S=u[h][b+1],x=u[h][b],A=u[h+1][b],C=u[h+1][b+1];(h!==0||o>0)&&p.push(S,x,C),(h!==i-1||l<Math.PI)&&p.push(x,A,C)}this.setIndex(p),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $f extends dt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new O,f=new O,d=new O;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const v=g/r*s,m=p/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(v),f.y=(e+n*Math.cos(m))*Math.sin(v),f.z=n*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const v=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,h=(r+1)*(p-1)+g,b=(r+1)*p+g;o.push(v,m,b),o.push(m,h,b)}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $f(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class bM extends qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Do extends Or{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=c0,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class MM extends Or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class EM extends Or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mp={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class TM{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const wM=new TM;class Kf{constructor(e){this.manager=e!==void 0?e:wM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Kf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ei={};class AM extends Error{constructor(e,n){super(e),this.response=n}}class CM extends Kf{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Mp.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(Ei[e]!==void 0){Ei[e].push({onLoad:n,onProgress:i,onError:r});return}Ei[e]=[],Ei[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ei[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let v=0;const m=new ReadableStream({start(h){b();function b(){f.read().then(({done:S,value:x})=>{if(S)h.close();else{v+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let C=0,P=u.length;C<P;C++){const D=u[C];D.onProgress&&D.onProgress(A)}h.enqueue(x),b()}},S=>{h.error(S)})}}});return new Response(m)}else throw new AM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Mp.add(`file:${e}`,c);const u=Ei[e];delete Ei[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Ei[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ei[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Lo extends Rt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ac=new mt,Ep=new O,Tp=new O;class Zf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hf,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ep.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ep),Tp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Tp),n.updateMatrixWorld(),ac.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class PM extends Zf{constructor(){super(new yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=Ss*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class RM extends Lo{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new PM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class DM extends Zf{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0}}class LM extends Lo{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new DM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Qf extends v0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class IM extends Zf{constructor(){super(new Qf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class L0 extends Lo{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new IM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class I0 extends Lo{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class NM extends Lo{constructor(e,n,i=10,r=10){super(e,n),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const n=super.toJSON(e);return n.object.width=this.width,n.object.height=this.height,n}}class UM extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wp{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(it(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ap=new O;class OM extends Rt{constructor(e,n){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=n,this.type="SpotLightHelper";const i=new dt,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,u=a/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}i.setAttribute("position",new at(r,3));const s=new pi({fog:!1,toneMapped:!1});this.cone=new S0(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,n=e*Math.tan(this.light.angle);this.cone.scale.set(n,n,e),Ap.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Ap),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class FM extends $t{constructor(e,n,i){const r=new ll(n,4,2),s=new Ds({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Cp=new O,da=new O,Pp=new O;class BM extends Rt{constructor(e,n,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",n===void 0&&(n=1);let r=new dt;r.setAttribute("position",new at([-n,n,0,n,n,0,n,-n,0,-n,-n,0,-n,n,0],3));const s=new pi({fog:!1,toneMapped:!1});this.lightPlane=new sr(r,s),this.add(this.lightPlane),r=new dt,r.setAttribute("position",new at([0,0,0,0,0,1],3)),this.targetLine=new sr(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Cp.setFromMatrixPosition(this.light.matrixWorld),da.setFromMatrixPosition(this.light.target.matrixWorld),Pp.subVectors(da,Cp),this.lightPlane.lookAt(da),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(da),this.targetLine.scale.z=Pp.length()}}class kM extends sr{constructor(e,n=1,i=16776960){const r=i,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new dt;o.setAttribute("position",new at(s,3)),o.computeBoundingSphere(),super(o,new pi({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=n;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new dt;l.setAttribute("position",new at(a,3)),l.computeBoundingSphere(),this.add(new $t(l,new Ds({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Rp=new O;let ha,lc;class zM extends Rt{constructor(e=new O(0,0,1),n=new O(0,0,0),i=1,r=16776960,s=i*.2,o=s*.2){super(),this.type="ArrowHelper",ha===void 0&&(ha=new dt,ha.setAttribute("position",new at([0,0,0,0,1,0],3)),lc=new ol(.5,1,5,1),lc.translate(0,-.5,0)),this.position.copy(n),this.line=new sr(ha,new pi({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new $t(lc,new Ds({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Rp.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(Rp,n)}}setLength(e,n=e*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class N0 extends S0{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new dt;r.setAttribute("position",new at(n,3)),r.setAttribute("color",new at(i,3));const s=new pi({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new $e,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class VM{constructor(){this.type="ShapePath",this.color=new $e,this.subPaths=[],this.currentPath=null}moveTo(e,n){return this.currentPath=new Au,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,n),this}lineTo(e,n){return this.currentPath.lineTo(e,n),this}quadraticCurveTo(e,n,i,r){return this.currentPath.quadraticCurveTo(e,n,i,r),this}bezierCurveTo(e,n,i,r,s,o){return this.currentPath.bezierCurveTo(e,n,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function n(h){const b=[];for(let S=0,x=h.length;S<x;S++){const A=h[S],C=new Aa;C.curves=A.curves,b.push(C)}return b}function i(h,b){const S=b.length;let x=!1;for(let A=S-1,C=0;C<S;A=C++){let P=b[A],D=b[C],y=D.x-P.x,E=D.y-P.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(P=b[C],y=-y,D=b[A],E=-E),h.y<P.y||h.y>D.y)continue;if(h.y===P.y){if(h.x===P.x)return!0}else{const L=E*(h.x-P.x)-y*(h.y-P.y);if(L===0)return!0;if(L<0)continue;x=!x}}else{if(h.y!==P.y)continue;if(D.x<=h.x&&h.x<=P.x||P.x<=h.x&&h.x<=D.x)return!0}}return x}const r=Mr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Aa,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const f=[],d=[];let p=[],g=0,v;d[g]=void 0,p[g]=[];for(let h=0,b=s.length;h<b;h++)a=s[h],v=a.getPoints(),o=r(v),o=e?!o:o,o?(!u&&d[g]&&g++,d[g]={s:new Aa,p:v},d[g].s.curves=a.curves,u&&g++,p[g]=[]):p[g].push({h:a,p:v[0]});if(!d[0])return n(s);if(d.length>1){let h=!1,b=0;for(let S=0,x=d.length;S<x;S++)f[S]=[];for(let S=0,x=d.length;S<x;S++){const A=p[S];for(let C=0;C<A.length;C++){const P=A[C];let D=!0;for(let y=0;y<d.length;y++)i(P.p,d[y].p)&&(S!==y&&b++,D?(D=!1,f[y].push(P)):h=!0);D&&f[S].push(P)}}b>0&&h===!1&&(p=f)}let m;for(let h=0,b=d.length;h<b;h++){l=d[h].s,c.push(l),m=p[h];for(let S=0,x=m.length;S<x;S++)l.holes.push(m[S].h)}return c}}class HM extends Nr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){qe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Dp(t,e,n,i){const r=GM(i);switch(n){case o0:return t*e;case l0:return t*e/r.components*r.byteLength;case Uf:return t*e/r.components*r.byteLength;case xs:return t*e*2/r.components*r.byteLength;case Of:return t*e*2/r.components*r.byteLength;case a0:return t*e*3/r.components*r.byteLength;case Hn:return t*e*4/r.components*r.byteLength;case Ff:return t*e*4/r.components*r.byteLength;case Ma:case Ea:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ta:case wa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jc:case $c:return Math.max(t,16)*Math.max(e,8)/4;case qc:case Yc:return Math.max(t,8)*Math.max(e,8)/2;case Kc:case Zc:case jc:case eu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qc:case tu:case nu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case iu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ru:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case su:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ou:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case au:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case lu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case cu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case uu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case fu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case du:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case hu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case pu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case mu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case gu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case _u:case vu:case xu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case yu:case Su:return Math.ceil(t/4)*Math.ceil(e/4)*8;case bu:case Mu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function GM(t){switch(t){case Pn:case n0:return{byteLength:1,components:1};case go:case i0:case Oi:return{byteLength:2,components:1};case If:case Nf:return{byteLength:2,components:4};case fi:case Lf:case ii:return{byteLength:4,components:1};case r0:case s0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rf}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rf);function U0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function WM(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var XM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qM=`#ifdef USE_ALPHAHASH
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
#endif`,JM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZM=`#ifdef USE_AOMAP
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
#endif`,QM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jM=`#ifdef USE_BATCHING
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
#endif`,eE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rE=`#ifdef USE_IRIDESCENCE
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
#endif`,sE=`#ifdef USE_BUMPMAP
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
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pE=`#define PI 3.141592653589793
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
} // validated`,mE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gE=`vec3 transformedNormal = objectNormal;
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
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SE="gl_FragColor = linearToOutputTexel( gl_FragColor );",bE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ME=`#ifdef USE_ENVMAP
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
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
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
#endif`,wE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
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
#endif`,CE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LE=`#ifdef USE_GRADIENTMAP
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
}`,IE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OE=`uniform bool receiveShadow;
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
#endif`,FE=`#ifdef USE_ENVMAP
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
#endif`,BE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HE=`PhysicalMaterial material;
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
#endif`,GE=`uniform sampler2D dfgLUT;
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
}`,WE=`
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
#endif`,XE=`#if defined( RE_IndirectDiffuse )
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
#endif`,qE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eT=`#if defined( USE_POINTS_UV )
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
#endif`,tT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oT=`#ifdef USE_MORPHTARGETS
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
#endif`,aT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hT=`#ifdef USE_NORMALMAP
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
#endif`,pT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ST=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ET=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PT=`float getShadowMask() {
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
}`,RT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DT=`#ifdef USE_SKINNING
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
#endif`,LT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IT=`#ifdef USE_SKINNING
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
#endif`,NT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BT=`#ifdef USE_TRANSMISSION
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
#endif`,kT=`#ifdef USE_TRANSMISSION
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
#endif`,zT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XT=`uniform sampler2D t2D;
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
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$T=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`#include <common>
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
}`,ZT=`#if DEPTH_PACKING == 3200
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
}`,QT=`#define DISTANCE
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
}`,jT=`#define DISTANCE
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
}`,ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nw=`uniform float scale;
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
}`,iw=`uniform vec3 diffuse;
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
}`,rw=`#include <common>
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
}`,sw=`uniform vec3 diffuse;
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
}`,ow=`#define LAMBERT
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
}`,aw=`#define LAMBERT
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
}`,lw=`#define MATCAP
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
}`,cw=`#define MATCAP
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
}`,uw=`#define NORMAL
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
}`,fw=`#define NORMAL
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
}`,dw=`#define PHONG
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
}`,hw=`#define PHONG
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
}`,pw=`#define STANDARD
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
}`,mw=`#define STANDARD
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
}`,gw=`#define TOON
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
}`,_w=`#define TOON
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
}`,vw=`uniform float size;
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
}`,xw=`uniform vec3 diffuse;
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
}`,yw=`#include <common>
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
}`,Sw=`uniform vec3 color;
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
}`,bw=`uniform float rotation;
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
}`,Mw=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:XM,alphahash_pars_fragment:qM,alphamap_fragment:JM,alphamap_pars_fragment:YM,alphatest_fragment:$M,alphatest_pars_fragment:KM,aomap_fragment:ZM,aomap_pars_fragment:QM,batching_pars_vertex:jM,batching_vertex:eE,begin_vertex:tE,beginnormal_vertex:nE,bsdfs:iE,iridescence_fragment:rE,bumpmap_pars_fragment:sE,clipping_planes_fragment:oE,clipping_planes_pars_fragment:aE,clipping_planes_pars_vertex:lE,clipping_planes_vertex:cE,color_fragment:uE,color_pars_fragment:fE,color_pars_vertex:dE,color_vertex:hE,common:pE,cube_uv_reflection_fragment:mE,defaultnormal_vertex:gE,displacementmap_pars_vertex:_E,displacementmap_vertex:vE,emissivemap_fragment:xE,emissivemap_pars_fragment:yE,colorspace_fragment:SE,colorspace_pars_fragment:bE,envmap_fragment:ME,envmap_common_pars_fragment:EE,envmap_pars_fragment:TE,envmap_pars_vertex:wE,envmap_physical_pars_fragment:FE,envmap_vertex:AE,fog_vertex:CE,fog_pars_vertex:PE,fog_fragment:RE,fog_pars_fragment:DE,gradientmap_pars_fragment:LE,lightmap_pars_fragment:IE,lights_lambert_fragment:NE,lights_lambert_pars_fragment:UE,lights_pars_begin:OE,lights_toon_fragment:BE,lights_toon_pars_fragment:kE,lights_phong_fragment:zE,lights_phong_pars_fragment:VE,lights_physical_fragment:HE,lights_physical_pars_fragment:GE,lights_fragment_begin:WE,lights_fragment_maps:XE,lights_fragment_end:qE,logdepthbuf_fragment:JE,logdepthbuf_pars_fragment:YE,logdepthbuf_pars_vertex:$E,logdepthbuf_vertex:KE,map_fragment:ZE,map_pars_fragment:QE,map_particle_fragment:jE,map_particle_pars_fragment:eT,metalnessmap_fragment:tT,metalnessmap_pars_fragment:nT,morphinstance_vertex:iT,morphcolor_vertex:rT,morphnormal_vertex:sT,morphtarget_pars_vertex:oT,morphtarget_vertex:aT,normal_fragment_begin:lT,normal_fragment_maps:cT,normal_pars_fragment:uT,normal_pars_vertex:fT,normal_vertex:dT,normalmap_pars_fragment:hT,clearcoat_normal_fragment_begin:pT,clearcoat_normal_fragment_maps:mT,clearcoat_pars_fragment:gT,iridescence_pars_fragment:_T,opaque_fragment:vT,packing:xT,premultiplied_alpha_fragment:yT,project_vertex:ST,dithering_fragment:bT,dithering_pars_fragment:MT,roughnessmap_fragment:ET,roughnessmap_pars_fragment:TT,shadowmap_pars_fragment:wT,shadowmap_pars_vertex:AT,shadowmap_vertex:CT,shadowmask_pars_fragment:PT,skinbase_vertex:RT,skinning_pars_vertex:DT,skinning_vertex:LT,skinnormal_vertex:IT,specularmap_fragment:NT,specularmap_pars_fragment:UT,tonemapping_fragment:OT,tonemapping_pars_fragment:FT,transmission_fragment:BT,transmission_pars_fragment:kT,uv_pars_fragment:zT,uv_pars_vertex:VT,uv_vertex:HT,worldpos_vertex:GT,background_vert:WT,background_frag:XT,backgroundCube_vert:qT,backgroundCube_frag:JT,cube_vert:YT,cube_frag:$T,depth_vert:KT,depth_frag:ZT,distance_vert:QT,distance_frag:jT,equirect_vert:ew,equirect_frag:tw,linedashed_vert:nw,linedashed_frag:iw,meshbasic_vert:rw,meshbasic_frag:sw,meshlambert_vert:ow,meshlambert_frag:aw,meshmatcap_vert:lw,meshmatcap_frag:cw,meshnormal_vert:uw,meshnormal_frag:fw,meshphong_vert:dw,meshphong_frag:hw,meshphysical_vert:pw,meshphysical_frag:mw,meshtoon_vert:gw,meshtoon_frag:_w,points_vert:vw,points_frag:xw,shadow_vert:yw,shadow_frag:Sw,sprite_vert:bw,sprite_frag:Mw},we={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ti={basic:{uniforms:un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new $e(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:un([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:un([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new $e(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:un([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:un([we.points,we.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:un([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:un([we.common,we.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:un([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:un([we.sprite,we.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:un([we.common,we.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:un([we.lights,we.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ti.physical={uniforms:un([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const pa={r:0,b:0,g:0},gr=new di,Ew=new mt;function Tw(t,e,n,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?n:e).get(x)),x}function v(S){let x=!1;const A=g(S);A===null?h(a,l):A&&A.isColor&&(h(A,1),x=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(S,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===il)?(u===void 0&&(u=new $t(new Fr(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:bs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),gr.copy(x.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ew.makeRotationFromEuler(gr)),u.material.toneMapped=ft.getTransfer(A.colorSpace)!==St,(f!==A||d!==A.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=A,d=A.version,p=t.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new $t(new al(2,2),new qn({name:"BackgroundMaterial",uniforms:bs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ft.getTransfer(A.colorSpace)!==St,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=A,d=A.version,p=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function h(S,x){S.getRGB(pa,g0(t)),i.buffers.color.setClear(pa.r,pa.g,pa.b,x,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,h(a,l)},render:v,addToRenderList:m,dispose:b}}function ww(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(E,L,H,X,te){let Q=!1;const q=f(X,H,L);s!==q&&(s=q,c(s.object)),Q=p(E,X,H,te),Q&&g(E,X,H,te),te!==null&&e.update(te,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,x(E,L,H,X),te!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function u(E){return t.deleteVertexArray(E)}function f(E,L,H){const X=H.wireframe===!0;let te=i[E.id];te===void 0&&(te={},i[E.id]=te);let Q=te[L.id];Q===void 0&&(Q={},te[L.id]=Q);let q=Q[X];return q===void 0&&(q=d(l()),Q[X]=q),q}function d(E){const L=[],H=[],X=[];for(let te=0;te<n;te++)L[te]=0,H[te]=0,X[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:X,object:E,attributes:{},index:null}}function p(E,L,H,X){const te=s.attributes,Q=L.attributes;let q=0;const z=H.getAttributes();for(const V in z)if(z[V].location>=0){const pe=te[V];let he=Q[V];if(he===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(he=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(he=E.instanceColor)),pe===void 0||pe.attribute!==he||he&&pe.data!==he.data)return!0;q++}return s.attributesNum!==q||s.index!==X}function g(E,L,H,X){const te={},Q=L.attributes;let q=0;const z=H.getAttributes();for(const V in z)if(z[V].location>=0){let pe=Q[V];pe===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(pe=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(pe=E.instanceColor));const he={};he.attribute=pe,pe&&pe.data&&(he.data=pe.data),te[V]=he,q++}s.attributes=te,s.attributesNum=q,s.index=X}function v(){const E=s.newAttributes;for(let L=0,H=E.length;L<H;L++)E[L]=0}function m(E){h(E,0)}function h(E,L){const H=s.newAttributes,X=s.enabledAttributes,te=s.attributeDivisors;H[E]=1,X[E]===0&&(t.enableVertexAttribArray(E),X[E]=1),te[E]!==L&&(t.vertexAttribDivisor(E,L),te[E]=L)}function b(){const E=s.newAttributes,L=s.enabledAttributes;for(let H=0,X=L.length;H<X;H++)L[H]!==E[H]&&(t.disableVertexAttribArray(H),L[H]=0)}function S(E,L,H,X,te,Q,q){q===!0?t.vertexAttribIPointer(E,L,H,te,Q):t.vertexAttribPointer(E,L,H,X,te,Q)}function x(E,L,H,X){v();const te=X.attributes,Q=H.getAttributes(),q=L.defaultAttributeValues;for(const z in Q){const V=Q[z];if(V.location>=0){let de=te[z];if(de===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(de=E.instanceColor)),de!==void 0){const pe=de.normalized,he=de.itemSize,ze=e.get(de);if(ze===void 0)continue;const Ie=ze.buffer,Ke=ze.type,lt=ze.bytesPerElement,se=Ke===t.INT||Ke===t.UNSIGNED_INT||de.gpuType===Lf;if(de.isInterleavedBufferAttribute){const oe=de.data,Ae=oe.stride,ke=de.offset;if(oe.isInstancedInterleavedBuffer){for(let be=0;be<V.locationSize;be++)h(V.location+be,oe.meshPerAttribute);E.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let be=0;be<V.locationSize;be++)m(V.location+be);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let be=0;be<V.locationSize;be++)S(V.location+be,he/V.locationSize,Ke,pe,Ae*lt,(ke+he/V.locationSize*be)*lt,se)}else{if(de.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)h(V.location+oe,de.meshPerAttribute);E.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let oe=0;oe<V.locationSize;oe++)m(V.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Ie);for(let oe=0;oe<V.locationSize;oe++)S(V.location+oe,he/V.locationSize,Ke,pe,he*lt,he/V.locationSize*oe*lt,se)}}else if(q!==void 0){const pe=q[z];if(pe!==void 0)switch(pe.length){case 2:t.vertexAttrib2fv(V.location,pe);break;case 3:t.vertexAttrib3fv(V.location,pe);break;case 4:t.vertexAttrib4fv(V.location,pe);break;default:t.vertexAttrib1fv(V.location,pe)}}}}b()}function A(){D();for(const E in i){const L=i[E];for(const H in L){const X=L[H];for(const te in X)u(X[te].object),delete X[te];delete L[H]}delete i[E]}}function C(E){if(i[E.id]===void 0)return;const L=i[E.id];for(const H in L){const X=L[H];for(const te in X)u(X[te].object),delete X[te];delete L[H]}delete i[E.id]}function P(E){for(const L in i){const H=i[L];if(H[E.id]===void 0)continue;const X=H[E.id];for(const te in X)u(X[te].object),delete X[te];delete H[E.id]}}function D(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Aw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*d[v];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Cw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Hn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Pn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ii&&!D)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:x,maxSamples:A,samples:C}}function Pw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ai,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const b=s?0:i,S=b*4;let x=h.clippingState||null;l.value=x,x=u(g,d,S,p);for(let A=0;A!==S;++A)x[A]=n[A];h.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,x=p;S!==v;++S,x+=4)o.copy(f[S]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Rw(t){let e=new WeakMap;function n(o,a){return a===Hc?o.mapping=Pr:a===Gc&&(o.mapping=vs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hc||a===Gc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new y0(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const tr=4,Lp=[.125,.215,.35,.446,.526,.582],yr=20,Dw=256,Hs=new Qf,Ip=new $e;let cc=null,uc=0,fc=0,dc=!1;const Lw=new O;class Np{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=Lw}=s;cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cc,uc,fc),this._renderer.xr.enabled=dc,e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Pr||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Oi,format:Hn,colorSpace:ys,depthBuffer:!1},r=Up(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Up(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Iw(s)),this._blurMaterial=Uw(s,e,n),this._ggxMaterial=Nw(s,e,n)}return r}_compileMaterial(e){const n=new $t(new dt,e);this._renderer.compile(n,Hs)}_sceneToCubeUV(e,n,i,r,s){const l=new yn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Ip),f.toneMapping=oi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $t(new Fr,new Ds({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let h=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,h=!0):(m.color.copy(Ip),h=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const A=this._cubeSize;es(r,x*A,S>2?A:0,A,A),f.setRenderTarget(r),h&&f.render(v,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=b}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Pr||e.mapping===vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Op());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;es(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Hs)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,p=f*d,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-tr?i-g+tr:0),h=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,es(s,m,h,3*v,2*v),r.setRenderTarget(s),r.render(a,Hs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,es(e,m,h,3*v,2*v),r.setRenderTarget(e),r.render(a,Hs)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ut("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*yr-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):yr;m>yr&&qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yr}`);const h=[];let b=0;for(let P=0;P<yr;++P){const D=P/v,y=Math.exp(-D*D/2);h.push(y),P===0?b+=y:P<m&&(b+=2*y)}for(let P=0;P<h.length;P++)h[P]=h[P]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;const x=this._sizeLods[r],A=3*x*(r>S-tr?r-S+tr:0),C=4*(this._cubeSize-x);es(n,A,C,3*x,2*x),l.setRenderTarget(n),l.render(f,Hs)}}function Iw(t){const e=[],n=[],i=[];let r=t;const s=t-tr+1+Lp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-tr?l=Lp[o-t+tr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,h=1,b=new Float32Array(v*g*p),S=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,D=C>2?0:-1,y=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];b.set(y,v*g*C),S.set(d,m*g*C);const E=[C,C,C,C,C,C];x.set(E,h*g*C)}const A=new dt;A.setAttribute("position",new pn(b,v)),A.setAttribute("uv",new pn(S,m)),A.setAttribute("faceIndex",new pn(x,h)),i.push(new $t(A,null)),r>tr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Up(t,e,n){const i=new ai(t,e,n);return i.texture.mapping=il,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function es(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Nw(t,e,n){return new qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Uw(t,e,n){const i=new Float32Array(yr),r=new O(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Op(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Fp(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function cl(){return`

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
	`}function Ow(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hc||l===Gc,u=l===Pr||l===vs;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Np(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Np(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Fw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&vo("WebGLRenderer: "+i+" extension not supported."),r}}}function Bw(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const b=p.array;v=p.version;for(let S=0,x=b.length;S<x;S+=3){const A=b[S+0],C=b[S+1],P=b[S+2];d.push(A,C,C,P,P,A)}}else if(g!==void 0){const b=g.array;v=g.version;for(let S=0,x=b.length/3-1;S<x;S+=3){const A=S+0,C=S+1,P=S+2;d.push(A,C,C,P,P,A)}}else return;const m=new(u0(d)?m0:p0)(d,1);m.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function kw(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function f(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,g);let h=0;for(let b=0;b<g;b++)h+=p[b]*v[b];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function zw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:ut("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Vw(t,e,n){const i=new WeakMap,r=new Nt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let E=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let A=a.attributes.position.count*x,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const P=new Float32Array(A*C*4*f),D=new f0(P,A,C,f);D.type=ii,D.needsUpdate=!0;const y=x*4;for(let L=0;L<f;L++){const H=h[L],X=b[L],te=S[L],Q=A*C*4*L;for(let q=0;q<H.count;q++){const z=q*y;g===!0&&(r.fromBufferAttribute(H,q),P[Q+z+0]=r.x,P[Q+z+1]=r.y,P[Q+z+2]=r.z,P[Q+z+3]=0),v===!0&&(r.fromBufferAttribute(X,q),P[Q+z+4]=r.x,P[Q+z+5]=r.y,P[Q+z+6]=r.z,P[Q+z+7]=0),m===!0&&(r.fromBufferAttribute(te,q),P[Q+z+8]=r.x,P[Q+z+9]=r.y,P[Q+z+10]=r.z,P[Q+z+11]=te.itemSize===4?r.w:1)}}d={count:f,texture:D,size:new ge(A,C)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function Hw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Gw={[$g]:"LINEAR_TONE_MAPPING",[Kg]:"REINHARD_TONE_MAPPING",[Zg]:"CINEON_TONE_MAPPING",[Df]:"ACES_FILMIC_TONE_MAPPING",[jg]:"AGX_TONE_MAPPING",[e0]:"NEUTRAL_TONE_MAPPING",[Qg]:"CUSTOM_TONE_MAPPING"};function Ww(t,e,n,i,r){const s=new ai(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),o=new ai(e,n,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),a=new dt;a.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new at([0,2,0,0,2,0],2));const l=new bM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new $t(a,l),u=new Qf(-1,1,1,-1,0,1);let f=null,d=null,p=!1,g,v=null,m=[],h=!1;this.setSize=function(b,S){s.setSize(b,S),o.setSize(b,S);for(let x=0;x<m.length;x++){const A=m[x];A.setSize&&A.setSize(b,S)}},this.setEffects=function(b){m=b,h=m.length>0&&m[0].isRenderPass===!0;const S=s.width,x=s.height;for(let A=0;A<m.length;A++){const C=m[A];C.setSize&&C.setSize(S,x)}},this.begin=function(b,S){if(p||b.toneMapping===oi&&m.length===0)return!1;if(v=S,S!==null){const x=S.width,A=S.height;(s.width!==x||s.height!==A)&&this.setSize(x,A)}return h===!1&&b.setRenderTarget(s),g=b.toneMapping,b.toneMapping=oi,!0},this.hasRenderPass=function(){return h},this.end=function(b,S){b.toneMapping=g,p=!0;let x=s,A=o;for(let C=0;C<m.length;C++){const P=m[C];if(P.enabled!==!1&&(P.render(b,A,x,S),P.needsSwap!==!1)){const D=x;x=A,A=D}}if(f!==b.outputColorSpace||d!==b.toneMapping){f=b.outputColorSpace,d=b.toneMapping,l.defines={},ft.getTransfer(f)===St&&(l.defines.SRGB_TRANSFER="");const C=Gw[d];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(v),b.render(c,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const O0=new hn,Ru=new xo(1,1),F0=new f0,B0=new yb,k0=new x0,Bp=[],kp=[],zp=new Float32Array(16),Vp=new Float32Array(9),Hp=new Float32Array(4);function Ls(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Bp[r];if(s===void 0&&(s=new Float32Array(r),Bp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function qt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ul(t,e){let n=kp[e];n===void 0&&(n=new Int32Array(e),kp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Xw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),qt(n,e)}}function Jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),qt(n,e)}}function Yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),qt(n,e)}}function $w(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),qt(n,e)}else{if(Xt(n,i))return;Hp.set(i),t.uniformMatrix2fv(this.addr,!1,Hp),qt(n,i)}}function Kw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),qt(n,e)}else{if(Xt(n,i))return;Vp.set(i),t.uniformMatrix3fv(this.addr,!1,Vp),qt(n,i)}}function Zw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),qt(n,e)}else{if(Xt(n,i))return;zp.set(i),t.uniformMatrix4fv(this.addr,!1,zp),qt(n,i)}}function Qw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),qt(n,e)}}function eA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),qt(n,e)}}function tA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),qt(n,e)}}function nA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function iA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),qt(n,e)}}function rA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),qt(n,e)}}function sA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),qt(n,e)}}function oA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Ru.compareFunction=n.isReversedDepthBuffer()?kf:Bf,s=Ru):s=O0,n.setTexture2D(e||s,r)}function aA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||B0,r)}function lA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||k0,r)}function cA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||F0,r)}function uA(t){switch(t){case 5126:return Xw;case 35664:return qw;case 35665:return Jw;case 35666:return Yw;case 35674:return $w;case 35675:return Kw;case 35676:return Zw;case 5124:case 35670:return Qw;case 35667:case 35671:return jw;case 35668:case 35672:return eA;case 35669:case 35673:return tA;case 5125:return nA;case 36294:return iA;case 36295:return rA;case 36296:return sA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return lA;case 36289:case 36303:case 36311:case 36292:return cA}}function fA(t,e){t.uniform1fv(this.addr,e)}function dA(t,e){const n=Ls(e,this.size,2);t.uniform2fv(this.addr,n)}function hA(t,e){const n=Ls(e,this.size,3);t.uniform3fv(this.addr,n)}function pA(t,e){const n=Ls(e,this.size,4);t.uniform4fv(this.addr,n)}function mA(t,e){const n=Ls(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function gA(t,e){const n=Ls(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function _A(t,e){const n=Ls(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function vA(t,e){t.uniform1iv(this.addr,e)}function xA(t,e){t.uniform2iv(this.addr,e)}function yA(t,e){t.uniform3iv(this.addr,e)}function SA(t,e){t.uniform4iv(this.addr,e)}function bA(t,e){t.uniform1uiv(this.addr,e)}function MA(t,e){t.uniform2uiv(this.addr,e)}function EA(t,e){t.uniform3uiv(this.addr,e)}function TA(t,e){t.uniform4uiv(this.addr,e)}function wA(t,e,n){const i=this.cache,r=e.length,s=ul(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Ru:o=O0;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function AA(t,e,n){const i=this.cache,r=e.length,s=ul(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||B0,s[o])}function CA(t,e,n){const i=this.cache,r=e.length,s=ul(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||k0,s[o])}function PA(t,e,n){const i=this.cache,r=e.length,s=ul(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||F0,s[o])}function RA(t){switch(t){case 5126:return fA;case 35664:return dA;case 35665:return hA;case 35666:return pA;case 35674:return mA;case 35675:return gA;case 35676:return _A;case 5124:case 35670:return vA;case 35667:case 35671:return xA;case 35668:case 35672:return yA;case 35669:case 35673:return SA;case 5125:return bA;case 36294:return MA;case 36295:return EA;case 36296:return TA;case 35678:case 36198:case 36298:case 36306:case 35682:return wA;case 35679:case 36299:case 36307:return AA;case 35680:case 36300:case 36308:case 36293:return CA;case 36289:case 36303:case 36311:case 36292:return PA}}class DA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=uA(n.type)}}class LA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=RA(n.type)}}class IA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const hc=/(\w+)(\])?(\[|\.)?/g;function Gp(t,e){t.seq.push(e),t.map[e.id]=e}function NA(t,e,n){const i=t.name,r=i.length;for(hc.lastIndex=0;;){const s=hc.exec(i),o=hc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Gp(n,c===void 0?new DA(a,t,e):new LA(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new IA(a),Gp(n,f)),n=f}}}class Ca{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);NA(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Wp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const UA=37297;let OA=0;function FA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Xp=new tt;function BA(t){ft._getMatrix(Xp,ft.workingColorSpace,t);const e=`mat3( ${Xp.elements.map(n=>n.toFixed(4))} )`;switch(ft.getTransfer(t)){case Ba:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function qp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+FA(t.getShaderSource(e),a)}else return s}function kA(t,e){const n=BA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const zA={[$g]:"Linear",[Kg]:"Reinhard",[Zg]:"Cineon",[Df]:"ACESFilmic",[jg]:"AgX",[e0]:"Neutral",[Qg]:"Custom"};function VA(t,e){const n=zA[e];return n===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ma=new O;function HA(){ft.getLuminanceCoefficients(ma);const t=ma.x.toFixed(4),e=ma.y.toFixed(4),n=ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function WA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function XA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function $s(t){return t!==""}function Jp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Du(t){return t.replace(qA,YA)}const JA=new Map;function YA(t,e){let n=nt[e];if(n===void 0){const i=JA.get(e);if(i!==void 0)n=nt[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Du(n)}const $A=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $p(t){return t.replace($A,KA)}function KA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ZA={[ba]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function QA(t){return ZA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jA={[Pr]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[il]:"ENVMAP_TYPE_CUBE_UV"};function e1(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":jA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const t1={[vs]:"ENVMAP_MODE_REFRACTION"};function n1(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":t1[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const i1={[Yg]:"ENVMAP_BLENDING_MULTIPLY",[zS]:"ENVMAP_BLENDING_MIX",[VS]:"ENVMAP_BLENDING_ADD"};function r1(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":i1[t.combine]||"ENVMAP_BLENDING_NONE"}function s1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function o1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=QA(n),c=e1(n),u=n1(n),f=r1(n),d=s1(n),p=GA(n),g=WA(s),v=r.createProgram();let m,h,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter($s).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter($s).join(`
`),h.length>0&&(h+=`
`)):(m=[Kp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),h=[Kp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oi?"#define TONE_MAPPING":"",n.toneMapping!==oi?nt.tonemapping_pars_fragment:"",n.toneMapping!==oi?VA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,kA("linearToOutputTexel",n.outputColorSpace),HA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($s).join(`
`)),o=Du(o),o=Jp(o,n),o=Yp(o,n),a=Du(a),a=Jp(a,n),a=Yp(a,n),o=$p(o),a=$p(a),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=b+m+o,x=b+h+a,A=Wp(r,r.VERTEX_SHADER,S),C=Wp(r,r.FRAGMENT_SHADER,x);r.attachShader(v,A),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(L){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(v)||"",X=r.getShaderInfoLog(A)||"",te=r.getShaderInfoLog(C)||"",Q=H.trim(),q=X.trim(),z=te.trim();let V=!0,de=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,A,C);else{const pe=qp(r,A,"vertex"),he=qp(r,C,"fragment");ut("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Q+`
`+pe+`
`+he)}else Q!==""?qe("WebGLProgram: Program Info Log:",Q):(q===""||z==="")&&(de=!1);de&&(L.diagnostics={runnable:V,programLog:Q,vertexShader:{log:q,prefix:m},fragmentShader:{log:z,prefix:h}})}r.deleteShader(A),r.deleteShader(C),D=new Ca(r,v),y=XA(r,v)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(v,UA)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=OA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=C,this}let a1=0;class l1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new c1(e),n.set(e,i)),i}}class c1{constructor(e){this.id=a1++,this.code=e,this.usedTimes=0}}function u1(t,e,n,i,r,s,o){const a=new d0,l=new l1,c=new Set,u=[],f=new Map,d=r.logarithmicDepthBuffer;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,E,L,H,X){const te=H.fog,Q=X.geometry,q=y.isMeshStandardMaterial?H.environment:null,z=(y.isMeshStandardMaterial?n:e).get(y.envMap||q),V=z&&z.mapping===il?z.image.height:null,de=g[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&qe("WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const pe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,he=pe!==void 0?pe.length:0;let ze=0;Q.morphAttributes.position!==void 0&&(ze=1),Q.morphAttributes.normal!==void 0&&(ze=2),Q.morphAttributes.color!==void 0&&(ze=3);let Ie,Ke,lt,se;if(de){const xt=ti[de];Ie=xt.vertexShader,Ke=xt.fragmentShader}else Ie=y.vertexShader,Ke=y.fragmentShader,l.update(y),lt=l.getVertexShaderID(y),se=l.getFragmentShaderID(y);const oe=t.getRenderTarget(),Ae=t.state.buffers.depth.getReversed(),ke=X.isInstancedMesh===!0,be=X.isBatchedMesh===!0,rt=!!y.map,R=!!y.matcap,U=!!z,N=!!y.aoMap,k=!!y.lightMap,F=!!y.bumpMap,W=!!y.normalMap,T=!!y.displacementMap,re=!!y.emissiveMap,K=!!y.metalnessMap,Z=!!y.roughnessMap,ie=y.anisotropy>0,M=y.clearcoat>0,_=y.dispersion>0,I=y.iridescence>0,J=y.sheen>0,ne=y.transmission>0,Y=ie&&!!y.anisotropyMap,Me=M&&!!y.clearcoatMap,ue=M&&!!y.clearcoatNormalMap,Ce=M&&!!y.clearcoatRoughnessMap,Be=I&&!!y.iridescenceMap,ce=I&&!!y.iridescenceThicknessMap,xe=J&&!!y.sheenColorMap,Ee=J&&!!y.sheenRoughnessMap,De=!!y.specularMap,ve=!!y.specularColorMap,je=!!y.specularIntensityMap,B=ne&&!!y.transmissionMap,Re=ne&&!!y.thicknessMap,me=!!y.gradientMap,Le=!!y.alphaMap,fe=y.alphaTest>0,le=!!y.alphaHash,ye=!!y.extensions;let Ze=oi;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ze=t.toneMapping);const wt={shaderID:de,shaderType:y.type,shaderName:y.name,vertexShader:Ie,fragmentShader:Ke,defines:y.defines,customVertexShaderID:lt,customFragmentShaderID:se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:be,batchingColor:be&&X._colorsTexture!==null,instancing:ke,instancingColor:ke&&X.instanceColor!==null,instancingMorph:ke&&X.morphTexture!==null,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ys,alphaToCoverage:!!y.alphaToCoverage,map:rt,matcap:R,envMap:U,envMapMode:U&&z.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:k,bumpMap:F,normalMap:W,displacementMap:T,emissiveMap:re,normalMapObjectSpace:W&&y.normalMapType===WS,normalMapTangentSpace:W&&y.normalMapType===c0,metalnessMap:K,roughnessMap:Z,anisotropy:ie,anisotropyMap:Y,clearcoat:M,clearcoatMap:Me,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ce,dispersion:_,iridescence:I,iridescenceMap:Be,iridescenceThicknessMap:ce,sheen:J,sheenColorMap:xe,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:ve,specularIntensityMap:je,transmission:ne,transmissionMap:B,thicknessMap:Re,gradientMap:me,opaque:y.transparent===!1&&y.blending===hs&&y.alphaToCoverage===!1,alphaMap:Le,alphaTest:fe,alphaHash:le,combine:y.combine,mapUv:rt&&v(y.map.channel),aoMapUv:N&&v(y.aoMap.channel),lightMapUv:k&&v(y.lightMap.channel),bumpMapUv:F&&v(y.bumpMap.channel),normalMapUv:W&&v(y.normalMap.channel),displacementMapUv:T&&v(y.displacementMap.channel),emissiveMapUv:re&&v(y.emissiveMap.channel),metalnessMapUv:K&&v(y.metalnessMap.channel),roughnessMapUv:Z&&v(y.roughnessMap.channel),anisotropyMapUv:Y&&v(y.anisotropyMap.channel),clearcoatMapUv:Me&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&v(y.sheenRoughnessMap.channel),specularMapUv:De&&v(y.specularMap.channel),specularColorMapUv:ve&&v(y.specularColorMap.channel),specularIntensityMapUv:je&&v(y.specularIntensityMap.channel),transmissionMapUv:B&&v(y.transmissionMap.channel),thicknessMapUv:Re&&v(y.thicknessMap.channel),alphaMapUv:Le&&v(y.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(W||ie),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!Q.attributes.uv&&(rt||Le),fog:!!te,useFog:y.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ae,skinning:X.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:ze,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ze,decodeVideoTexture:rt&&y.map.isVideoTexture===!0&&ft.getTransfer(y.map.colorSpace)===St,decodeVideoTextureEmissive:re&&y.emissiveMap.isVideoTexture===!0&&ft.getTransfer(y.emissiveMap.colorSpace)===St,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bn,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ye&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&y.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function h(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)E.push(L),E.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(b(E,y),S(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function b(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const E=g[y.type];let L;if(E){const H=ti[E];L=_0.clone(H.uniforms)}else L=y.uniforms;return L}function A(y,E){let L=f.get(E);return L!==void 0?++L.usedTimes:(L=new o1(t,E,y,s),u.push(L),f.set(E,L)),L}function C(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),f.delete(y.cacheKey),y.destroy()}}function P(y){l.remove(y)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:A,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:D}}function f1(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function d1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Zp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,g,v,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function a(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||d1),i.length>1&&i.sort(d||Zp),r.length>1&&r.sort(d||Zp)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function h1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Qp,t.set(i,[o])):r>=s.length?(o=new Qp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function p1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new $e};break;case"SpotLight":n={position:new O,direction:new O,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function m1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let g1=0;function _1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function v1(t){const e=new p1,n=m1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new mt,o=new mt;function a(c){let u=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,b=0,S=0,x=0,A=0,C=0,P=0;c.sort(_1);for(let y=0,E=c.length;y<E;y++){const L=c[y],H=L.color,X=L.intensity,te=L.distance;let Q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===xs?Q=L.shadow.map.texture:Q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=H.r*X,f+=H.g*X,d+=H.b*X;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],X);P++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const z=L.shadow,V=n.get(L);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=L.shadow.matrix,b++}i.directional[p]=q,p++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(H).multiplyScalar(X),q.distance=te,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[v]=q;const z=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,z.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[v]=z.matrix,L.castShadow){const V=n.get(L);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=Q,x++}v++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(H).multiplyScalar(X),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=q,m++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const z=L.shadow,V=n.get(L);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,V.shadowCameraNear=z.camera.near,V.shadowCameraFar=z.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=L.shadow.matrix,S++}i.point[g]=q,g++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(X),q.groundColor.copy(L.groundColor).multiplyScalar(X),i.hemi[h]=q,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==h||D.numDirectionalShadows!==b||D.numPointShadows!==S||D.numSpotShadows!==x||D.numSpotMaps!==A||D.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,D.directionalLength=p,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=h,D.numDirectionalShadows=b,D.numPointShadows=S,D.numSpotShadows=x,D.numSpotMaps=A,D.numLightProbes=P,i.version=g1++)}function l(c,u){let f=0,d=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let h=0,b=c.length;h<b;h++){const S=c[h];if(S.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(S.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function jp(t){const e=new v1(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function x1(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new jp(t),e.set(r,[a])):s>=o.length?(a=new jp(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S1=`uniform sampler2D shadow_pass;
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
}`,b1=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],M1=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],em=new mt,Gs=new O,pc=new O;function E1(t,e,n){let i=new Hf;const r=new ge,s=new ge,o=new Nt,a=new MM,l=new EM,c={},u=n.maxTextureSize,f={[rr]:sn,[sn]:rr,[bn]:bn},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:y1,fragmentShader:S1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new dt;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ba;let h=this.type;this.render=function(C,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;C.type===Jg&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=ba);const y=t.getRenderTarget(),E=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Di),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const X=h!==this.type;X&&P.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(Q=>Q.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,Q=C.length;te<Q;te++){const q=C[te],z=q.shadow;if(z===void 0){qe("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const V=z.getFrameExtents();if(r.multiply(V),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,z.mapSize.y=s.y)),z.map===null||X===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Js){if(q.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ai(r.x,r.y,{format:xs,type:Oi,minFilter:nn,magFilter:nn,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new xo(r.x,r.y,ii),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=Fi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Kt,z.map.depthTexture.magFilter=Kt}else{q.isPointLight?(z.map=new y0(r.x),z.map.depthTexture=new Hb(r.x,fi)):(z.map=new ai(r.x,r.y),z.map.depthTexture=new xo(r.x,r.y,fi)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=Fi;const pe=t.state.buffers.depth.getReversed();this.type===ba?(z.map.depthTexture.compareFunction=pe?kf:Bf,z.map.depthTexture.minFilter=nn,z.map.depthTexture.magFilter=nn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Kt,z.map.depthTexture.magFilter=Kt)}z.camera.updateProjectionMatrix()}const de=z.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<de;pe++){if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,pe),t.clear();else{pe===0&&(t.setRenderTarget(z.map),t.clear());const he=z.getViewport(pe);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),H.viewport(o)}if(q.isPointLight){const he=z.camera,ze=z.matrix,Ie=q.distance||he.far;Ie!==he.far&&(he.far=Ie,he.updateProjectionMatrix()),Gs.setFromMatrixPosition(q.matrixWorld),he.position.copy(Gs),pc.copy(he.position),pc.add(b1[pe]),he.up.copy(M1[pe]),he.lookAt(pc),he.updateMatrixWorld(),ze.makeTranslation(-Gs.x,-Gs.y,-Gs.z),em.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),z._frustum.setFromProjectionMatrix(em,he.coordinateSystem,he.reversedDepth)}else z.updateMatrices(q);i=z.getFrustum(),x(P,D,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===Js&&b(z,D),z.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(y,E,L)};function b(C,P){const D=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ai(r.x,r.y,{format:xs,type:Oi})),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(P,null,D,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(P,null,D,p,v,null)}function S(C,P,D,y){let E=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)E=L;else if(E=D.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const H=E.uuid,X=P.uuid;let te=c[H];te===void 0&&(te={},c[H]=te);let Q=te[X];Q===void 0&&(Q=E.clone(),te[X]=Q,P.addEventListener("dispose",A)),E=Q}if(E.visible=P.visible,E.wireframe=P.wireframe,y===Js?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:f[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const H=t.properties.get(E);H.light=D}return E}function x(C,P,D,y,E){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===Js)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const X=e.update(C),te=C.material;if(Array.isArray(te)){const Q=X.groups;for(let q=0,z=Q.length;q<z;q++){const V=Q[q],de=te[V.materialIndex];if(de&&de.visible){const pe=S(C,de,y,E);C.onBeforeShadow(t,C,P,D,X,pe,V),t.renderBufferDirect(D,null,X,pe,C,V),C.onAfterShadow(t,C,P,D,X,pe,V)}}}else if(te.visible){const Q=S(C,te,y,E);C.onBeforeShadow(t,C,P,D,X,Q,null),t.renderBufferDirect(D,null,X,Q,C,null),C.onAfterShadow(t,C,P,D,X,Q,null)}}const H=C.children;for(let X=0,te=H.length;X<te;X++)x(H[X],P,D,y,E)}function A(C){C.target.removeEventListener("dispose",A);for(const D in c){const y=c[D],E=C.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}const T1={[Uc]:Oc,[Fc]:zc,[Bc]:Vc,[_s]:kc,[Oc]:Uc,[zc]:Fc,[Vc]:Bc,[kc]:_s};function w1(t,e){function n(){let B=!1;const Re=new Nt;let me=null;const Le=new Nt(0,0,0,0);return{setMask:function(fe){me!==fe&&!B&&(t.colorMask(fe,fe,fe,fe),me=fe)},setLocked:function(fe){B=fe},setClear:function(fe,le,ye,Ze,wt){wt===!0&&(fe*=Ze,le*=Ze,ye*=Ze),Re.set(fe,le,ye,Ze),Le.equals(Re)===!1&&(t.clearColor(fe,le,ye,Ze),Le.copy(Re))},reset:function(){B=!1,me=null,Le.set(-1,0,0,0)}}}function i(){let B=!1,Re=!1,me=null,Le=null,fe=null;return{setReversed:function(le){if(Re!==le){const ye=e.get("EXT_clip_control");le?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Re=le;const Ze=fe;fe=null,this.setClear(Ze)}},getReversed:function(){return Re},setTest:function(le){le?oe(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(le){me!==le&&!B&&(t.depthMask(le),me=le)},setFunc:function(le){if(Re&&(le=T1[le]),Le!==le){switch(le){case Uc:t.depthFunc(t.NEVER);break;case Oc:t.depthFunc(t.ALWAYS);break;case Fc:t.depthFunc(t.LESS);break;case _s:t.depthFunc(t.LEQUAL);break;case Bc:t.depthFunc(t.EQUAL);break;case kc:t.depthFunc(t.GEQUAL);break;case zc:t.depthFunc(t.GREATER);break;case Vc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Le=le}},setLocked:function(le){B=le},setClear:function(le){fe!==le&&(Re&&(le=1-le),t.clearDepth(le),fe=le)},reset:function(){B=!1,me=null,Le=null,fe=null,Re=!1}}}function r(){let B=!1,Re=null,me=null,Le=null,fe=null,le=null,ye=null,Ze=null,wt=null;return{setTest:function(xt){B||(xt?oe(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(xt){Re!==xt&&!B&&(t.stencilMask(xt),Re=xt)},setFunc:function(xt,Yn,gi){(me!==xt||Le!==Yn||fe!==gi)&&(t.stencilFunc(xt,Yn,gi),me=xt,Le=Yn,fe=gi)},setOp:function(xt,Yn,gi){(le!==xt||ye!==Yn||Ze!==gi)&&(t.stencilOp(xt,Yn,gi),le=xt,ye=Yn,Ze=gi)},setLocked:function(xt){B=xt},setClear:function(xt){wt!==xt&&(t.clearStencil(xt),wt=xt)},reset:function(){B=!1,Re=null,me=null,Le=null,fe=null,le=null,ye=null,Ze=null,wt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,b=null,S=null,x=null,A=null,C=null,P=new $e(0,0,0),D=0,y=!1,E=null,L=null,H=null,X=null,te=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,z=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=z>=1):V.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=z>=2);let de=null,pe={};const he=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),Ie=new Nt().fromArray(he),Ke=new Nt().fromArray(ze);function lt(B,Re,me,Le){const fe=new Uint8Array(4),le=t.createTexture();t.bindTexture(B,le),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ye=0;ye<me;ye++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(Re,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(Re+ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return le}const se={};se[t.TEXTURE_2D]=lt(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=lt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=lt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=lt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(t.DEPTH_TEST),o.setFunc(_s),F(!1),W(Vh),oe(t.CULL_FACE),N(Di);function oe(B){u[B]!==!0&&(t.enable(B),u[B]=!0)}function Ae(B){u[B]!==!1&&(t.disable(B),u[B]=!1)}function ke(B,Re){return f[B]!==Re?(t.bindFramebuffer(B,Re),f[B]=Re,B===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Re),B===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Re),!0):!1}function be(B,Re){let me=p,Le=!1;if(B){me=d.get(Re),me===void 0&&(me=[],d.set(Re,me));const fe=B.textures;if(me.length!==fe.length||me[0]!==t.COLOR_ATTACHMENT0){for(let le=0,ye=fe.length;le<ye;le++)me[le]=t.COLOR_ATTACHMENT0+le;me.length=fe.length,Le=!0}}else me[0]!==t.BACK&&(me[0]=t.BACK,Le=!0);Le&&t.drawBuffers(me)}function rt(B){return g!==B?(t.useProgram(B),g=B,!0):!1}const R={[xr]:t.FUNC_ADD,[MS]:t.FUNC_SUBTRACT,[ES]:t.FUNC_REVERSE_SUBTRACT};R[TS]=t.MIN,R[wS]=t.MAX;const U={[AS]:t.ZERO,[CS]:t.ONE,[PS]:t.SRC_COLOR,[Ic]:t.SRC_ALPHA,[US]:t.SRC_ALPHA_SATURATE,[IS]:t.DST_COLOR,[DS]:t.DST_ALPHA,[RS]:t.ONE_MINUS_SRC_COLOR,[Nc]:t.ONE_MINUS_SRC_ALPHA,[NS]:t.ONE_MINUS_DST_COLOR,[LS]:t.ONE_MINUS_DST_ALPHA,[OS]:t.CONSTANT_COLOR,[FS]:t.ONE_MINUS_CONSTANT_COLOR,[BS]:t.CONSTANT_ALPHA,[kS]:t.ONE_MINUS_CONSTANT_ALPHA};function N(B,Re,me,Le,fe,le,ye,Ze,wt,xt){if(B===Di){v===!0&&(Ae(t.BLEND),v=!1);return}if(v===!1&&(oe(t.BLEND),v=!0),B!==bS){if(B!==m||xt!==y){if((h!==xr||x!==xr)&&(t.blendEquation(t.FUNC_ADD),h=xr,x=xr),xt)switch(B){case hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hh:t.blendFunc(t.ONE,t.ONE);break;case Gh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ut("WebGLState: Invalid blending: ",B);break}else switch(B){case hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Hh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Gh:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wh:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",B);break}b=null,S=null,A=null,C=null,P.set(0,0,0),D=0,m=B,y=xt}return}fe=fe||Re,le=le||me,ye=ye||Le,(Re!==h||fe!==x)&&(t.blendEquationSeparate(R[Re],R[fe]),h=Re,x=fe),(me!==b||Le!==S||le!==A||ye!==C)&&(t.blendFuncSeparate(U[me],U[Le],U[le],U[ye]),b=me,S=Le,A=le,C=ye),(Ze.equals(P)===!1||wt!==D)&&(t.blendColor(Ze.r,Ze.g,Ze.b,wt),P.copy(Ze),D=wt),m=B,y=!1}function k(B,Re){B.side===bn?Ae(t.CULL_FACE):oe(t.CULL_FACE);let me=B.side===sn;Re&&(me=!me),F(me),B.blending===hs&&B.transparent===!1?N(Di):N(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const Le=B.stencilWrite;a.setTest(Le),Le&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),re(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function F(B){E!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),E=B)}function W(B){B!==yS?(oe(t.CULL_FACE),B!==L&&(B===Vh?t.cullFace(t.BACK):B===SS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),L=B}function T(B){B!==H&&(q&&t.lineWidth(B),H=B)}function re(B,Re,me){B?(oe(t.POLYGON_OFFSET_FILL),(X!==Re||te!==me)&&(t.polygonOffset(Re,me),X=Re,te=me)):Ae(t.POLYGON_OFFSET_FILL)}function K(B){B?oe(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function Z(B){B===void 0&&(B=t.TEXTURE0+Q-1),de!==B&&(t.activeTexture(B),de=B)}function ie(B,Re,me){me===void 0&&(de===null?me=t.TEXTURE0+Q-1:me=de);let Le=pe[me];Le===void 0&&(Le={type:void 0,texture:void 0},pe[me]=Le),(Le.type!==B||Le.texture!==Re)&&(de!==me&&(t.activeTexture(me),de=me),t.bindTexture(B,Re||se[B]),Le.type=B,Le.texture=Re)}function M(){const B=pe[de];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function _(){try{t.compressedTexImage2D(...arguments)}catch(B){ut("WebGLState:",B)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(B){ut("WebGLState:",B)}}function J(){try{t.texSubImage2D(...arguments)}catch(B){ut("WebGLState:",B)}}function ne(){try{t.texSubImage3D(...arguments)}catch(B){ut("WebGLState:",B)}}function Y(){try{t.compressedTexSubImage2D(...arguments)}catch(B){ut("WebGLState:",B)}}function Me(){try{t.compressedTexSubImage3D(...arguments)}catch(B){ut("WebGLState:",B)}}function ue(){try{t.texStorage2D(...arguments)}catch(B){ut("WebGLState:",B)}}function Ce(){try{t.texStorage3D(...arguments)}catch(B){ut("WebGLState:",B)}}function Be(){try{t.texImage2D(...arguments)}catch(B){ut("WebGLState:",B)}}function ce(){try{t.texImage3D(...arguments)}catch(B){ut("WebGLState:",B)}}function xe(B){Ie.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),Ie.copy(B))}function Ee(B){Ke.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),Ke.copy(B))}function De(B,Re){let me=c.get(Re);me===void 0&&(me=new WeakMap,c.set(Re,me));let Le=me.get(B);Le===void 0&&(Le=t.getUniformBlockIndex(Re,B.name),me.set(B,Le))}function ve(B,Re){const Le=c.get(Re).get(B);l.get(Re)!==Le&&(t.uniformBlockBinding(Re,Le,B.__bindingPointIndex),l.set(Re,Le))}function je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},de=null,pe={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,b=null,S=null,x=null,A=null,C=null,P=new $e(0,0,0),D=0,y=!1,E=null,L=null,H=null,X=null,te=null,Ie.set(0,0,t.canvas.width,t.canvas.height),Ke.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Ae,bindFramebuffer:ke,drawBuffers:be,useProgram:rt,setBlending:N,setMaterial:k,setFlipSided:F,setCullFace:W,setLineWidth:T,setPolygonOffset:re,setScissorTest:K,activeTexture:Z,bindTexture:ie,unbindTexture:M,compressedTexImage2D:_,compressedTexImage3D:I,texImage2D:Be,texImage3D:ce,updateUBOMapping:De,uniformBlockBinding:ve,texStorage2D:ue,texStorage3D:Ce,texSubImage2D:J,texSubImage3D:ne,compressedTexSubImage2D:Y,compressedTexSubImage3D:Me,scissor:xe,viewport:Ee,reset:je}}function A1(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return p?new OffscreenCanvas(M,_):za("canvas")}function v(M,_,I){let J=1;const ne=ie(M);if((ne.width>I||ne.height>I)&&(J=I/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Y=Math.floor(J*ne.width),Me=Math.floor(J*ne.height);f===void 0&&(f=g(Y,Me));const ue=_?g(Y,Me):f;return ue.width=Y,ue.height=Me,ue.getContext("2d").drawImage(M,0,0,Y,Me),qe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Y+"x"+Me+")."),ue}else return"data"in M&&qe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),M;return M}function m(M){return M.generateMipmaps}function h(M){t.generateMipmap(M)}function b(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(M,_,I,J,ne=!1){if(M!==null){if(t[M]!==void 0)return t[M];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Y=_;if(_===t.RED&&(I===t.FLOAT&&(Y=t.R32F),I===t.HALF_FLOAT&&(Y=t.R16F),I===t.UNSIGNED_BYTE&&(Y=t.R8)),_===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(Y=t.R8UI),I===t.UNSIGNED_SHORT&&(Y=t.R16UI),I===t.UNSIGNED_INT&&(Y=t.R32UI),I===t.BYTE&&(Y=t.R8I),I===t.SHORT&&(Y=t.R16I),I===t.INT&&(Y=t.R32I)),_===t.RG&&(I===t.FLOAT&&(Y=t.RG32F),I===t.HALF_FLOAT&&(Y=t.RG16F),I===t.UNSIGNED_BYTE&&(Y=t.RG8)),_===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(Y=t.RG8UI),I===t.UNSIGNED_SHORT&&(Y=t.RG16UI),I===t.UNSIGNED_INT&&(Y=t.RG32UI),I===t.BYTE&&(Y=t.RG8I),I===t.SHORT&&(Y=t.RG16I),I===t.INT&&(Y=t.RG32I)),_===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),I===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),I===t.UNSIGNED_INT&&(Y=t.RGB32UI),I===t.BYTE&&(Y=t.RGB8I),I===t.SHORT&&(Y=t.RGB16I),I===t.INT&&(Y=t.RGB32I)),_===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),I===t.UNSIGNED_INT&&(Y=t.RGBA32UI),I===t.BYTE&&(Y=t.RGBA8I),I===t.SHORT&&(Y=t.RGBA16I),I===t.INT&&(Y=t.RGBA32I)),_===t.RGB&&(I===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),I===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),_===t.RGBA){const Me=ne?Ba:ft.getTransfer(J);I===t.FLOAT&&(Y=t.RGBA32F),I===t.HALF_FLOAT&&(Y=t.RGBA16F),I===t.UNSIGNED_BYTE&&(Y=Me===St?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(M,_){let I;return M?_===null||_===fi||_===_o?I=t.DEPTH24_STENCIL8:_===ii?I=t.DEPTH32F_STENCIL8:_===go&&(I=t.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===fi||_===_o?I=t.DEPTH_COMPONENT24:_===ii?I=t.DEPTH_COMPONENT32F:_===go&&(I=t.DEPTH_COMPONENT16),I}function A(M,_){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Kt&&M.minFilter!==nn?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function C(M){const _=M.target;_.removeEventListener("dispose",C),D(_),_.isVideoTexture&&u.delete(_)}function P(M){const _=M.target;_.removeEventListener("dispose",P),E(_)}function D(M){const _=i.get(M);if(_.__webglInit===void 0)return;const I=M.source,J=d.get(I);if(J){const ne=J[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&y(M),Object.keys(J).length===0&&d.delete(I)}i.remove(M)}function y(M){const _=i.get(M);t.deleteTexture(_.__webglTexture);const I=M.source,J=d.get(I);delete J[_.__cacheKey],o.memory.textures--}function E(M){const _=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let ne=0;ne<_.__webglFramebuffer[J].length;ne++)t.deleteFramebuffer(_.__webglFramebuffer[J][ne]);else t.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)t.deleteFramebuffer(_.__webglFramebuffer[J]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const I=M.textures;for(let J=0,ne=I.length;J<ne;J++){const Y=i.get(I[J]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(I[J])}i.remove(M)}let L=0;function H(){L=0}function X(){const M=L;return M>=r.maxTextures&&qe("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),L+=1,M}function te(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function Q(M,_){const I=i.get(M);if(M.isVideoTexture&&K(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&I.__version!==M.version){const J=M.image;if(J===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{se(I,M,_);return}}else M.isExternalTexture&&(I.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+_)}function q(M,_){const I=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){se(I,M,_);return}else M.isExternalTexture&&(I.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+_)}function z(M,_){const I=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){se(I,M,_);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+_)}function V(M,_){const I=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&I.__version!==M.version){oe(I,M,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+_)}const de={[Wc]:t.REPEAT,[Ri]:t.CLAMP_TO_EDGE,[Xc]:t.MIRRORED_REPEAT},pe={[Kt]:t.NEAREST,[HS]:t.NEAREST_MIPMAP_NEAREST,[zo]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[Nl]:t.LINEAR_MIPMAP_NEAREST,[Sr]:t.LINEAR_MIPMAP_LINEAR},he={[XS]:t.NEVER,[KS]:t.ALWAYS,[qS]:t.LESS,[Bf]:t.LEQUAL,[JS]:t.EQUAL,[kf]:t.GEQUAL,[YS]:t.GREATER,[$S]:t.NOTEQUAL};function ze(M,_){if(_.type===ii&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===nn||_.magFilter===Nl||_.magFilter===zo||_.magFilter===Sr||_.minFilter===nn||_.minFilter===Nl||_.minFilter===zo||_.minFilter===Sr)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,de[_.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,de[_.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,de[_.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,pe[_.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,pe[_.minFilter]),_.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,he[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Kt||_.minFilter!==zo&&_.minFilter!==Sr||_.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ie(M,_){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",C));const J=_.source;let ne=d.get(J);ne===void 0&&(ne={},d.set(J,ne));const Y=te(_);if(Y!==M.__cacheKey){ne[Y]===void 0&&(ne[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),ne[Y].usedTimes++;const Me=ne[M.__cacheKey];Me!==void 0&&(ne[M.__cacheKey].usedTimes--,Me.usedTimes===0&&y(_)),M.__cacheKey=Y,M.__webglTexture=ne[Y].texture}return I}function Ke(M,_,I){return Math.floor(Math.floor(M/I)/_)}function lt(M,_,I,J){const Y=M.updateRanges;if(Y.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,I,J,_.data);else{Y.sort((ce,xe)=>ce.start-xe.start);let Me=0;for(let ce=1;ce<Y.length;ce++){const xe=Y[Me],Ee=Y[ce],De=xe.start+xe.count,ve=Ke(Ee.start,_.width,4),je=Ke(xe.start,_.width,4);Ee.start<=De+1&&ve===je&&Ke(Ee.start+Ee.count-1,_.width,4)===ve?xe.count=Math.max(xe.count,Ee.start+Ee.count-xe.start):(++Me,Y[Me]=Ee)}Y.length=Me+1;const ue=t.getParameter(t.UNPACK_ROW_LENGTH),Ce=t.getParameter(t.UNPACK_SKIP_PIXELS),Be=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let ce=0,xe=Y.length;ce<xe;ce++){const Ee=Y[ce],De=Math.floor(Ee.start/4),ve=Math.ceil(Ee.count/4),je=De%_.width,B=Math.floor(De/_.width),Re=ve,me=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,je),t.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,je,B,Re,me,I,J,_.data)}M.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ue),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(t.UNPACK_SKIP_ROWS,Be)}}function se(M,_,I){let J=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=t.TEXTURE_3D);const ne=Ie(M,_),Y=_.source;n.bindTexture(J,M.__webglTexture,t.TEXTURE0+I);const Me=i.get(Y);if(Y.version!==Me.__version||ne===!0){n.activeTexture(t.TEXTURE0+I);const ue=ft.getPrimaries(ft.workingColorSpace),Ce=_.colorSpace===Qi?null:ft.getPrimaries(_.colorSpace),Be=_.colorSpace===Qi||ue===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ce=v(_.image,!1,r.maxTextureSize);ce=Z(_,ce);const xe=s.convert(_.format,_.colorSpace),Ee=s.convert(_.type);let De=S(_.internalFormat,xe,Ee,_.colorSpace,_.isVideoTexture);ze(J,_);let ve;const je=_.mipmaps,B=_.isVideoTexture!==!0,Re=Me.__version===void 0||ne===!0,me=Y.dataReady,Le=A(_,ce);if(_.isDepthTexture)De=x(_.format===br,_.type),Re&&(B?n.texStorage2D(t.TEXTURE_2D,1,De,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,De,ce.width,ce.height,0,xe,Ee,null));else if(_.isDataTexture)if(je.length>0){B&&Re&&n.texStorage2D(t.TEXTURE_2D,Le,De,je[0].width,je[0].height);for(let fe=0,le=je.length;fe<le;fe++)ve=je[fe],B?me&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,ve.width,ve.height,xe,Ee,ve.data):n.texImage2D(t.TEXTURE_2D,fe,De,ve.width,ve.height,0,xe,Ee,ve.data);_.generateMipmaps=!1}else B?(Re&&n.texStorage2D(t.TEXTURE_2D,Le,De,ce.width,ce.height),me&&lt(_,ce,xe,Ee)):n.texImage2D(t.TEXTURE_2D,0,De,ce.width,ce.height,0,xe,Ee,ce.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){B&&Re&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,De,je[0].width,je[0].height,ce.depth);for(let fe=0,le=je.length;fe<le;fe++)if(ve=je[fe],_.format!==Hn)if(xe!==null)if(B){if(me)if(_.layerUpdates.size>0){const ye=Dp(ve.width,ve.height,_.format,_.type);for(const Ze of _.layerUpdates){const wt=ve.data.subarray(Ze*ye/ve.data.BYTES_PER_ELEMENT,(Ze+1)*ye/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,Ze,ve.width,ve.height,1,xe,wt)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,ve.width,ve.height,ce.depth,xe,ve.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,fe,De,ve.width,ve.height,ce.depth,0,ve.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?me&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,ve.width,ve.height,ce.depth,xe,Ee,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,fe,De,ve.width,ve.height,ce.depth,0,xe,Ee,ve.data)}else{B&&Re&&n.texStorage2D(t.TEXTURE_2D,Le,De,je[0].width,je[0].height);for(let fe=0,le=je.length;fe<le;fe++)ve=je[fe],_.format!==Hn?xe!==null?B?me&&n.compressedTexSubImage2D(t.TEXTURE_2D,fe,0,0,ve.width,ve.height,xe,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,fe,De,ve.width,ve.height,0,ve.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?me&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,ve.width,ve.height,xe,Ee,ve.data):n.texImage2D(t.TEXTURE_2D,fe,De,ve.width,ve.height,0,xe,Ee,ve.data)}else if(_.isDataArrayTexture)if(B){if(Re&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,De,ce.width,ce.height,ce.depth),me)if(_.layerUpdates.size>0){const fe=Dp(ce.width,ce.height,_.format,_.type);for(const le of _.layerUpdates){const ye=ce.data.subarray(le*fe/ce.data.BYTES_PER_ELEMENT,(le+1)*fe/ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,ce.width,ce.height,1,xe,Ee,ye)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,xe,Ee,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ce.width,ce.height,ce.depth,0,xe,Ee,ce.data);else if(_.isData3DTexture)B?(Re&&n.texStorage3D(t.TEXTURE_3D,Le,De,ce.width,ce.height,ce.depth),me&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,xe,Ee,ce.data)):n.texImage3D(t.TEXTURE_3D,0,De,ce.width,ce.height,ce.depth,0,xe,Ee,ce.data);else if(_.isFramebufferTexture){if(Re)if(B)n.texStorage2D(t.TEXTURE_2D,Le,De,ce.width,ce.height);else{let fe=ce.width,le=ce.height;for(let ye=0;ye<Le;ye++)n.texImage2D(t.TEXTURE_2D,ye,De,fe,le,0,xe,Ee,null),fe>>=1,le>>=1}}else if(je.length>0){if(B&&Re){const fe=ie(je[0]);n.texStorage2D(t.TEXTURE_2D,Le,De,fe.width,fe.height)}for(let fe=0,le=je.length;fe<le;fe++)ve=je[fe],B?me&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,xe,Ee,ve):n.texImage2D(t.TEXTURE_2D,fe,De,xe,Ee,ve);_.generateMipmaps=!1}else if(B){if(Re){const fe=ie(ce);n.texStorage2D(t.TEXTURE_2D,Le,De,fe.width,fe.height)}me&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Ee,ce)}else n.texImage2D(t.TEXTURE_2D,0,De,xe,Ee,ce);m(_)&&h(J),Me.__version=Y.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function oe(M,_,I){if(_.image.length!==6)return;const J=Ie(M,_),ne=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+I);const Y=i.get(ne);if(ne.version!==Y.__version||J===!0){n.activeTexture(t.TEXTURE0+I);const Me=ft.getPrimaries(ft.workingColorSpace),ue=_.colorSpace===Qi?null:ft.getPrimaries(_.colorSpace),Ce=_.colorSpace===Qi||Me===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Be=_.isCompressedTexture||_.image[0].isCompressedTexture,ce=_.image[0]&&_.image[0].isDataTexture,xe=[];for(let le=0;le<6;le++)!Be&&!ce?xe[le]=v(_.image[le],!0,r.maxCubemapSize):xe[le]=ce?_.image[le].image:_.image[le],xe[le]=Z(_,xe[le]);const Ee=xe[0],De=s.convert(_.format,_.colorSpace),ve=s.convert(_.type),je=S(_.internalFormat,De,ve,_.colorSpace),B=_.isVideoTexture!==!0,Re=Y.__version===void 0||J===!0,me=ne.dataReady;let Le=A(_,Ee);ze(t.TEXTURE_CUBE_MAP,_);let fe;if(Be){B&&Re&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,je,Ee.width,Ee.height);for(let le=0;le<6;le++){fe=xe[le].mipmaps;for(let ye=0;ye<fe.length;ye++){const Ze=fe[ye];_.format!==Hn?De!==null?B?me&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye,0,0,Ze.width,Ze.height,De,Ze.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye,je,Ze.width,Ze.height,0,Ze.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye,0,0,Ze.width,Ze.height,De,ve,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye,je,Ze.width,Ze.height,0,De,ve,Ze.data)}}}else{if(fe=_.mipmaps,B&&Re){fe.length>0&&Le++;const le=ie(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,je,le.width,le.height)}for(let le=0;le<6;le++)if(ce){B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,xe[le].width,xe[le].height,De,ve,xe[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,xe[le].width,xe[le].height,0,De,ve,xe[le].data);for(let ye=0;ye<fe.length;ye++){const wt=fe[ye].image[le].image;B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye+1,0,0,wt.width,wt.height,De,ve,wt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye+1,je,wt.width,wt.height,0,De,ve,wt.data)}}else{B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,De,ve,xe[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,De,ve,xe[le]);for(let ye=0;ye<fe.length;ye++){const Ze=fe[ye];B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye+1,0,0,De,ve,Ze.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye+1,je,De,ve,Ze.image[le])}}}m(_)&&h(t.TEXTURE_CUBE_MAP),Y.__version=ne.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Ae(M,_,I,J,ne,Y){const Me=s.convert(I.format,I.colorSpace),ue=s.convert(I.type),Ce=S(I.internalFormat,Me,ue,I.colorSpace),Be=i.get(_),ce=i.get(I);if(ce.__renderTarget=_,!Be.__hasExternalTextures){const xe=Math.max(1,_.width>>Y),Ee=Math.max(1,_.height>>Y);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,Y,Ce,xe,Ee,_.depth,0,Me,ue,null):n.texImage2D(ne,Y,Ce,xe,Ee,0,Me,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),re(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ne,ce.__webglTexture,0,T(_)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ne,ce.__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(M,_,I){if(t.bindRenderbuffer(t.RENDERBUFFER,M),_.depthBuffer){const J=_.depthTexture,ne=J&&J.isDepthTexture?J.type:null,Y=x(_.stencilBuffer,ne),Me=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;re(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,T(_),Y,_.width,_.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,T(_),Y,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,Y,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,M)}else{const J=_.textures;for(let ne=0;ne<J.length;ne++){const Y=J[ne],Me=s.convert(Y.format,Y.colorSpace),ue=s.convert(Y.type),Ce=S(Y.internalFormat,Me,ue,Y.colorSpace);re(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,T(_),Ce,_.width,_.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,T(_),Ce,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,Ce,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(M,_,I){const J=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(_.depthTexture);if(ne.__renderTarget=_,(!ne.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),ze(t.TEXTURE_CUBE_MAP,_.depthTexture);const Be=s.convert(_.depthTexture.format),ce=s.convert(_.depthTexture.type);let xe;_.depthTexture.format===Fi?xe=t.DEPTH_COMPONENT24:_.depthTexture.format===br&&(xe=t.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,xe,_.width,_.height,0,Be,ce,null)}}else Q(_.depthTexture,0);const Y=ne.__webglTexture,Me=T(_),ue=J?t.TEXTURE_CUBE_MAP_POSITIVE_X+I:t.TEXTURE_2D,Ce=_.depthTexture.format===br?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Fi)re(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ce,ue,Y,0,Me):t.framebufferTexture2D(t.FRAMEBUFFER,Ce,ue,Y,0);else if(_.depthTexture.format===br)re(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ce,ue,Y,0,Me):t.framebufferTexture2D(t.FRAMEBUFFER,Ce,ue,Y,0);else throw new Error("Unknown depthTexture format")}function rt(M){const _=i.get(M),I=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const J=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){const ne=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),_.__depthDisposeCallback=ne}_.__boundDepthTexture=J}if(M.depthTexture&&!_.__autoAllocateDepthBuffer)if(I)for(let J=0;J<6;J++)be(_.__webglFramebuffer[J],M,J);else{const J=M.texture.mipmaps;J&&J.length>0?be(_.__webglFramebuffer[0],M,0):be(_.__webglFramebuffer,M,0)}else if(I){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=t.createRenderbuffer(),ke(_.__webglDepthbuffer[J],M,!1);else{const ne=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,Y)}}else{const J=M.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),ke(_.__webglDepthbuffer,M,!1);else{const ne=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,Y)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function R(M,_,I){const J=i.get(M);_!==void 0&&Ae(J.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&rt(M)}function U(M){const _=M.texture,I=i.get(M),J=i.get(_);M.addEventListener("dispose",P);const ne=M.textures,Y=M.isWebGLCubeRenderTarget===!0,Me=ne.length>1;if(Me||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=_.version,o.memory.textures++),Y){I.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[ue]=[];for(let Ce=0;Ce<_.mipmaps.length;Ce++)I.__webglFramebuffer[ue][Ce]=t.createFramebuffer()}else I.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let ue=0;ue<_.mipmaps.length;ue++)I.__webglFramebuffer[ue]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ue=0,Ce=ne.length;ue<Ce;ue++){const Be=i.get(ne[ue]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&re(M)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ue=0;ue<ne.length;ue++){const Ce=ne[ue];I.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[ue]);const Be=s.convert(Ce.format,Ce.colorSpace),ce=s.convert(Ce.type),xe=S(Ce.internalFormat,Be,ce,Ce.colorSpace,M.isXRRenderTarget===!0),Ee=T(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,xe,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,I.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),ke(I.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),ze(t.TEXTURE_CUBE_MAP,_);for(let ue=0;ue<6;ue++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)Ae(I.__webglFramebuffer[ue][Ce],M,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce);else Ae(I.__webglFramebuffer[ue],M,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(_)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ue=0,Ce=ne.length;ue<Ce;ue++){const Be=ne[ue],ce=i.get(Be);let xe=t.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(xe=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,ce.__webglTexture),ze(xe,Be),Ae(I.__webglFramebuffer,M,Be,t.COLOR_ATTACHMENT0+ue,xe,0),m(Be)&&h(xe)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ue=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,J.__webglTexture),ze(ue,_),_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)Ae(I.__webglFramebuffer[Ce],M,_,t.COLOR_ATTACHMENT0,ue,Ce);else Ae(I.__webglFramebuffer,M,_,t.COLOR_ATTACHMENT0,ue,0);m(_)&&h(ue),n.unbindTexture()}M.depthBuffer&&rt(M)}function N(M){const _=M.textures;for(let I=0,J=_.length;I<J;I++){const ne=_[I];if(m(ne)){const Y=b(M),Me=i.get(ne).__webglTexture;n.bindTexture(Y,Me),h(Y),n.unbindTexture()}}}const k=[],F=[];function W(M){if(M.samples>0){if(re(M)===!1){const _=M.textures,I=M.width,J=M.height;let ne=t.COLOR_BUFFER_BIT;const Y=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(M),ue=_.length>1;if(ue)for(let Be=0;Be<_.length;Be++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Ce=M.texture.mipmaps;Ce&&Ce.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Be=0;Be<_.length;Be++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[Be]);const ce=i.get(_[Be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ce,0)}t.blitFramebuffer(0,0,I,J,0,0,I,J,ne,t.NEAREST),l===!0&&(k.length=0,F.length=0,k.push(t.COLOR_ATTACHMENT0+Be),M.depthBuffer&&M.resolveDepthBuffer===!1&&(k.push(Y),F.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,F)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,k))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let Be=0;Be<_.length;Be++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.RENDERBUFFER,Me.__webglColorRenderbuffer[Be]);const ce=i.get(_[Be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Be,t.TEXTURE_2D,ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const _=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function T(M){return Math.min(r.maxSamples,M.samples)}function re(M){const _=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function K(M){const _=o.render.frame;u.get(M)!==_&&(u.set(M,_),M.update())}function Z(M,_){const I=M.colorSpace,J=M.format,ne=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||I!==ys&&I!==Qi&&(ft.getTransfer(I)===St?(J!==Hn||ne!==Pn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",I)),_}function ie(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=H,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=V,this.rebindTextures=R,this.setupRenderTarget=U,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=re,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function C1(t,e){function n(i,r=Qi){let s;const o=ft.getTransfer(r);if(i===Pn)return t.UNSIGNED_BYTE;if(i===If)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Nf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===r0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===s0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===n0)return t.BYTE;if(i===i0)return t.SHORT;if(i===go)return t.UNSIGNED_SHORT;if(i===Lf)return t.INT;if(i===fi)return t.UNSIGNED_INT;if(i===ii)return t.FLOAT;if(i===Oi)return t.HALF_FLOAT;if(i===o0)return t.ALPHA;if(i===a0)return t.RGB;if(i===Hn)return t.RGBA;if(i===Fi)return t.DEPTH_COMPONENT;if(i===br)return t.DEPTH_STENCIL;if(i===l0)return t.RED;if(i===Uf)return t.RED_INTEGER;if(i===xs)return t.RG;if(i===Of)return t.RG_INTEGER;if(i===Ff)return t.RGBA_INTEGER;if(i===Ma||i===Ea||i===Ta||i===wa)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ea)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ta)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qc||i===Jc||i===Yc||i===$c)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$c)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kc||i===Zc||i===Qc||i===jc||i===eu||i===tu||i===nu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Kc||i===Zc)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qc)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===jc)return s.COMPRESSED_R11_EAC;if(i===eu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===tu)return s.COMPRESSED_RG11_EAC;if(i===nu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===iu||i===ru||i===su||i===ou||i===au||i===lu||i===cu||i===uu||i===fu||i===du||i===hu||i===pu||i===mu||i===gu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===iu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ru)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===su)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ou)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===au)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===du)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_u||i===vu||i===xu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===_u)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yu||i===Su||i===bu||i===Mu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Su)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_o?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const P1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R1=`
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

}`;class D1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new M0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qn({vertexShader:P1,fragmentShader:R1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $t(new al(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L1 extends Nr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new D1,h={},b=n.getContextAttributes();let S=null,x=null;const A=[],C=[],P=new ge;let D=null;const y=new yn;y.viewport=new Nt;const E=new yn;E.viewport=new Nt;const L=[y,E],H=new UM;let X=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let oe=A[se];return oe===void 0&&(oe=new tc,A[se]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(se){let oe=A[se];return oe===void 0&&(oe=new tc,A[se]=oe),oe.getGripSpace()},this.getHand=function(se){let oe=A[se];return oe===void 0&&(oe=new tc,A[se]=oe),oe.getHandSpace()};function Q(se){const oe=C.indexOf(se.inputSource);if(oe===-1)return;const Ae=A[oe];Ae!==void 0&&(Ae.update(se.inputSource,se.frame,c||o),Ae.dispatchEvent({type:se.type,data:se.inputSource}))}function q(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",z);for(let se=0;se<A.length;se++){const oe=C[se];oe!==null&&(C[se]=null,A[se].disconnect(oe))}X=null,te=null,m.reset();for(const se in h)delete h[se];e.setRenderTarget(S),p=null,d=null,f=null,r=null,x=null,lt.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",q),r.addEventListener("inputsourceschange",z),b.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,ke=null,be=null;b.depth&&(be=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ae=b.stencil?br:Fi,ke=b.stencil?_o:fi);const rt={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(rt),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new ai(d.textureWidth,d.textureHeight,{format:Hn,type:Pn,depthTexture:new xo(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ae={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ai(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),lt.setContext(r),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(se){for(let oe=0;oe<se.removed.length;oe++){const Ae=se.removed[oe],ke=C.indexOf(Ae);ke>=0&&(C[ke]=null,A[ke].disconnect(Ae))}for(let oe=0;oe<se.added.length;oe++){const Ae=se.added[oe];let ke=C.indexOf(Ae);if(ke===-1){for(let rt=0;rt<A.length;rt++)if(rt>=C.length){C.push(Ae),ke=rt;break}else if(C[rt]===null){C[rt]=Ae,ke=rt;break}if(ke===-1)break}const be=A[ke];be&&be.connect(Ae)}}const V=new O,de=new O;function pe(se,oe,Ae){V.setFromMatrixPosition(oe.matrixWorld),de.setFromMatrixPosition(Ae.matrixWorld);const ke=V.distanceTo(de),be=oe.projectionMatrix.elements,rt=Ae.projectionMatrix.elements,R=be[14]/(be[10]-1),U=be[14]/(be[10]+1),N=(be[9]+1)/be[5],k=(be[9]-1)/be[5],F=(be[8]-1)/be[0],W=(rt[8]+1)/rt[0],T=R*F,re=R*W,K=ke/(-F+W),Z=K*-F;if(oe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Z),se.translateZ(K),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),be[10]===-1)se.projectionMatrix.copy(oe.projectionMatrix),se.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ie=R+K,M=U+K,_=T-Z,I=re+(ke-Z),J=N*U/M*ie,ne=k*U/M*ie;se.projectionMatrix.makePerspective(_,I,J,ne,ie,M),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function he(se,oe){oe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(oe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let oe=se.near,Ae=se.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),H.near=E.near=y.near=oe,H.far=E.far=y.far=Ae,(X!==H.near||te!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),X=H.near,te=H.far),H.layers.mask=se.layers.mask|6,y.layers.mask=H.layers.mask&3,E.layers.mask=H.layers.mask&5;const ke=se.parent,be=H.cameras;he(H,ke);for(let rt=0;rt<be.length;rt++)he(be[rt],ke);be.length===2?pe(H,y,E):H.projectionMatrix.copy(y.projectionMatrix),ze(se,H,ke)};function ze(se,oe,Ae){Ae===null?se.matrix.copy(oe.matrixWorld):(se.matrix.copy(Ae.matrixWorld),se.matrix.invert(),se.matrix.multiply(oe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(oe.projectionMatrix),se.projectionMatrixInverse.copy(oe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Ss*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(se){return h[se]};let Ie=null;function Ke(se,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){const Ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let ke=!1;Ae.length!==H.cameras.length&&(H.cameras.length=0,ke=!0);for(let U=0;U<Ae.length;U++){const N=Ae[U];let k=null;if(p!==null)k=p.getViewport(N);else{const W=f.getViewSubImage(d,N);k=W.viewport,U===0&&(e.setRenderTargetTextures(x,W.colorTexture,W.depthStencilTexture),e.setRenderTarget(x))}let F=L[U];F===void 0&&(F=new yn,F.layers.enable(U),F.viewport=new Nt,L[U]=F),F.matrix.fromArray(N.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(N.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(k.x,k.y,k.width,k.height),U===0&&(H.matrix.copy(F.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ke===!0&&H.cameras.push(F)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const U=f.getDepthInformation(Ae[0]);U&&U.isValid&&U.texture&&m.init(U,r.renderState)}if(be&&be.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let U=0;U<Ae.length;U++){const N=Ae[U].camera;if(N){let k=h[N];k||(k=new M0,h[N]=k);const F=f.getCameraImage(N);k.sourceTexture=F}}}}for(let Ae=0;Ae<A.length;Ae++){const ke=C[Ae],be=A[Ae];ke!==null&&be!==void 0&&be.update(ke,oe,c||o)}Ie&&Ie(se,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const lt=new U0;lt.setAnimationLoop(Ke),this.setAnimationLoop=function(se){Ie=se},this.dispose=function(){}}}const _r=new di,I1=new mt;function N1(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,g0(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,b,S,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,b,S):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===sn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===sn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const b=e.get(h),S=b.envMap,x=b.envMapRotation;S&&(m.envMap.value=S,_r.copy(x),_r.x*=-1,_r.y*=-1,_r.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),m.envMapRotation.value.setFromMatrix4(I1.makeRotationFromEuler(_r)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,b,S){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=S*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===sn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const b=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function U1(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const x=S.program;i.uniformBlockBinding(b,x)}function c(b,S){let x=r[b.id];x===void 0&&(g(b),x=u(b),r[b.id]=x,b.addEventListener("dispose",m));const A=S.program;i.updateUBOMapping(b,A);const C=e.render.frame;s[b.id]!==C&&(d(b),s[b.id]=C)}function u(b){const S=f();b.__bindingPointIndex=S;const x=t.createBuffer(),A=b.__size,C=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,x),x}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=r[b.id],x=b.uniforms,A=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let C=0,P=x.length;C<P;C++){const D=Array.isArray(x[C])?x[C]:[x[C]];for(let y=0,E=D.length;y<E;y++){const L=D[y];if(p(L,C,y,A)===!0){const H=L.__offset,X=Array.isArray(L.value)?L.value:[L.value];let te=0;for(let Q=0;Q<X.length;Q++){const q=X[Q],z=v(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,H+te,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,te),te+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(b,S,x,A){const C=b.value,P=S+"_"+x;if(A[P]===void 0)return typeof C=="number"||typeof C=="boolean"?A[P]=C:A[P]=C.clone(),!0;{const D=A[P];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return A[P]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(b){const S=b.uniforms;let x=0;const A=16;for(let P=0,D=S.length;P<D;P++){const y=Array.isArray(S[P])?S[P]:[S[P]];for(let E=0,L=y.length;E<L;E++){const H=y[E],X=Array.isArray(H.value)?H.value:[H.value];for(let te=0,Q=X.length;te<Q;te++){const q=X[te],z=v(q),V=x%A,de=V%z.boundary,pe=V+de;x+=de,pe!==0&&A-pe<z.storage&&(x+=A-pe),H.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=z.storage}}}const C=x%A;return C>0&&(x+=A-C),b.__size=x,b.__cache={},this}function v(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const b in r)t.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const O1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Kn=null;function F1(){return Kn===null&&(Kn=new Bb(O1,16,16,xs,Oi),Kn.name="DFG_LUT",Kn.minFilter=nn,Kn.magFilter=nn,Kn.wrapS=Ri,Kn.wrapT=Ri,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}class B1{constructor(e={}){const{canvas:n=ZS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Pn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=p,m=new Set([Ff,Of,Uf]),h=new Set([Pn,fi,go,_o,If,Nf]),b=new Uint32Array(4),S=new Int32Array(4);let x=null,A=null;const C=[],P=[];let D=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let E=!1;this._outputColorSpace=Cn;let L=0,H=0,X=null,te=-1,Q=null;const q=new Nt,z=new Nt;let V=null;const de=new $e(0);let pe=0,he=n.width,ze=n.height,Ie=1,Ke=null,lt=null;const se=new Nt(0,0,he,ze),oe=new Nt(0,0,he,ze);let Ae=!1;const ke=new Hf;let be=!1,rt=!1;const R=new mt,U=new O,N=new Nt,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let F=!1;function W(){return X===null?Ie:1}let T=i;function re(w,G){return n.getContext(w,G)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rf}`),n.addEventListener("webglcontextlost",Ze,!1),n.addEventListener("webglcontextrestored",wt,!1),n.addEventListener("webglcontextcreationerror",xt,!1),T===null){const G="webgl2";if(T=re(G,w),T===null)throw re(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw ut("WebGLRenderer: "+w.message),w}let K,Z,ie,M,_,I,J,ne,Y,Me,ue,Ce,Be,ce,xe,Ee,De,ve,je,B,Re,me,Le,fe;function le(){K=new Fw(T),K.init(),me=new C1(T,K),Z=new Cw(T,K,e,me),ie=new w1(T,K),Z.reversedDepthBuffer&&d&&ie.buffers.depth.setReversed(!0),M=new zw(T),_=new f1,I=new A1(T,K,ie,_,Z,me,M),J=new Rw(y),ne=new Ow(y),Y=new WM(T),Le=new ww(T,Y),Me=new Bw(T,Y,M,Le),ue=new Hw(T,Me,Y,M),je=new Vw(T,Z,I),Ee=new Pw(_),Ce=new u1(y,J,ne,K,Z,Le,Ee),Be=new N1(y,_),ce=new h1,xe=new x1(K),ve=new Tw(y,J,ne,ie,ue,g,l),De=new E1(y,ue,Z),fe=new U1(T,M,Z,ie),B=new Aw(T,K,M),Re=new kw(T,K,M),M.programs=Ce.programs,y.capabilities=Z,y.extensions=K,y.properties=_,y.renderLists=ce,y.shadowMap=De,y.state=ie,y.info=M}le(),v!==Pn&&(D=new Ww(v,n.width,n.height,r,s));const ye=new L1(y,T);this.xr=ye,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const w=K.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=K.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(w){w!==void 0&&(Ie=w,this.setSize(he,ze,!1))},this.getSize=function(w){return w.set(he,ze)},this.setSize=function(w,G,ee=!0){if(ye.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}he=w,ze=G,n.width=Math.floor(w*Ie),n.height=Math.floor(G*Ie),ee===!0&&(n.style.width=w+"px",n.style.height=G+"px"),D!==null&&D.setSize(n.width,n.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(he*Ie,ze*Ie).floor()},this.setDrawingBufferSize=function(w,G,ee){he=w,ze=G,Ie=ee,n.width=Math.floor(w*ee),n.height=Math.floor(G*ee),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(v===Pn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(q)},this.getViewport=function(w){return w.copy(se)},this.setViewport=function(w,G,ee,j){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,G,ee,j),ie.viewport(q.copy(se).multiplyScalar(Ie).round())},this.getScissor=function(w){return w.copy(oe)},this.setScissor=function(w,G,ee,j){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,G,ee,j),ie.scissor(z.copy(oe).multiplyScalar(Ie).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(w){ie.setScissorTest(Ae=w)},this.setOpaqueSort=function(w){Ke=w},this.setTransparentSort=function(w){lt=w},this.getClearColor=function(w){return w.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,ee=!0){let j=0;if(w){let $=!1;if(X!==null){const Te=X.texture.format;$=m.has(Te)}if($){const Te=X.texture.type,Ne=h.has(Te),Pe=ve.getClearColor(),Fe=ve.getClearAlpha(),He=Pe.r,Je=Pe.g,We=Pe.b;Ne?(b[0]=He,b[1]=Je,b[2]=We,b[3]=Fe,T.clearBufferuiv(T.COLOR,0,b)):(S[0]=He,S[1]=Je,S[2]=We,S[3]=Fe,T.clearBufferiv(T.COLOR,0,S))}else j|=T.COLOR_BUFFER_BIT}G&&(j|=T.DEPTH_BUFFER_BIT),ee&&(j|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ze,!1),n.removeEventListener("webglcontextrestored",wt,!1),n.removeEventListener("webglcontextcreationerror",xt,!1),ve.dispose(),ce.dispose(),xe.dispose(),_.dispose(),J.dispose(),ne.dispose(),ue.dispose(),Le.dispose(),fe.dispose(),Ce.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",od),ye.removeEventListener("sessionend",ad),ar.stop()};function Ze(w){w.preventDefault(),$h("WebGLRenderer: Context Lost."),E=!0}function wt(){$h("WebGLRenderer: Context Restored."),E=!1;const w=M.autoReset,G=De.enabled,ee=De.autoUpdate,j=De.needsUpdate,$=De.type;le(),M.autoReset=w,De.enabled=G,De.autoUpdate=ee,De.needsUpdate=j,De.type=$}function xt(w){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Yn(w){const G=w.target;G.removeEventListener("dispose",Yn),gi(G)}function gi(w){X0(w),_.remove(w)}function X0(w){const G=_.get(w).programs;G!==void 0&&(G.forEach(function(ee){Ce.releaseProgram(ee)}),w.isShaderMaterial&&Ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,ee,j,$,Te){G===null&&(G=k);const Ne=$.isMesh&&$.matrixWorld.determinant()<0,Pe=J0(w,G,ee,j,$);ie.setMaterial(j,Ne);let Fe=ee.index,He=1;if(j.wireframe===!0){if(Fe=Me.getWireframeAttribute(ee),Fe===void 0)return;He=2}const Je=ee.drawRange,We=ee.attributes.position;let ot=Je.start*He,Mt=(Je.start+Je.count)*He;Te!==null&&(ot=Math.max(ot,Te.start*He),Mt=Math.min(Mt,(Te.start+Te.count)*He)),Fe!==null?(ot=Math.max(ot,0),Mt=Math.min(Mt,Fe.count)):We!=null&&(ot=Math.max(ot,0),Mt=Math.min(Mt,We.count));const Lt=Mt-ot;if(Lt<0||Lt===1/0)return;Le.setup($,j,Pe,ee,Fe);let It,Tt=B;if(Fe!==null&&(It=Y.get(Fe),Tt=Re,Tt.setIndex(It)),$.isMesh)j.wireframe===!0?(ie.setLineWidth(j.wireframeLinewidth*W()),Tt.setMode(T.LINES)):Tt.setMode(T.TRIANGLES);else if($.isLine){let Xe=j.linewidth;Xe===void 0&&(Xe=1),ie.setLineWidth(Xe*W()),$.isLineSegments?Tt.setMode(T.LINES):$.isLineLoop?Tt.setMode(T.LINE_LOOP):Tt.setMode(T.LINE_STRIP)}else $.isPoints?Tt.setMode(T.POINTS):$.isSprite&&Tt.setMode(T.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)vo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Tt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Xe=$._multiDrawStarts,yt=$._multiDrawCounts,ht=$._multiDrawCount,En=Fe?Y.get(Fe).bytesPerElement:1,Br=_.get(j).currentProgram.getUniforms();for(let Tn=0;Tn<ht;Tn++)Br.setValue(T,"_gl_DrawID",Tn),Tt.render(Xe[Tn]/En,yt[Tn])}else if($.isInstancedMesh)Tt.renderInstances(ot,Lt,$.count);else if(ee.isInstancedBufferGeometry){const Xe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,yt=Math.min(ee.instanceCount,Xe);Tt.renderInstances(ot,Lt,yt)}else Tt.render(ot,Lt)};function sd(w,G,ee){w.transparent===!0&&w.side===bn&&w.forceSinglePass===!1?(w.side=sn,w.needsUpdate=!0,No(w,G,ee),w.side=rr,w.needsUpdate=!0,No(w,G,ee),w.side=bn):No(w,G,ee)}this.compile=function(w,G,ee=null){ee===null&&(ee=w),A=xe.get(ee),A.init(G),P.push(A),ee.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),w!==ee&&w.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),A.setupLights();const j=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Te=$.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const Pe=Te[Ne];sd(Pe,ee,$),j.add(Pe)}else sd(Te,ee,$),j.add(Te)}),A=P.pop(),j},this.compileAsync=function(w,G,ee=null){const j=this.compile(w,G,ee);return new Promise($=>{function Te(){if(j.forEach(function(Ne){_.get(Ne).currentProgram.isReady()&&j.delete(Ne)}),j.size===0){$(w);return}setTimeout(Te,10)}K.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let dl=null;function q0(w){dl&&dl(w)}function od(){ar.stop()}function ad(){ar.start()}const ar=new U0;ar.setAnimationLoop(q0),typeof self<"u"&&ar.setContext(self),this.setAnimationLoop=function(w){dl=w,ye.setAnimationLoop(w),w===null?ar.stop():ar.start()},ye.addEventListener("sessionstart",od),ye.addEventListener("sessionend",ad),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const ee=ye.enabled===!0&&ye.isPresenting===!0,j=D!==null&&(X===null||ee)&&D.begin(y,X);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(G),G=ye.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,G,X),A=xe.get(w,P.length),A.init(G),P.push(A),R.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ke.setFromProjectionMatrix(R,ri,G.reversedDepth),rt=this.localClippingEnabled,be=Ee.init(this.clippingPlanes,rt),x=ce.get(w,C.length),x.init(),C.push(x),ye.enabled===!0&&ye.isPresenting===!0){const Ne=y.xr.getDepthSensingMesh();Ne!==null&&hl(Ne,G,-1/0,y.sortObjects)}hl(w,G,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(Ke,lt),F=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,F&&ve.addToRenderList(x,w),this.info.render.frame++,be===!0&&Ee.beginShadows();const $=A.state.shadowsArray;if(De.render($,w,G),be===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&D.hasRenderPass())===!1){const Ne=x.opaque,Pe=x.transmissive;if(A.setupLights(),G.isArrayCamera){const Fe=G.cameras;if(Pe.length>0)for(let He=0,Je=Fe.length;He<Je;He++){const We=Fe[He];cd(Ne,Pe,w,We)}F&&ve.render(w);for(let He=0,Je=Fe.length;He<Je;He++){const We=Fe[He];ld(x,w,We,We.viewport)}}else Pe.length>0&&cd(Ne,Pe,w,G),F&&ve.render(w),ld(x,w,G)}X!==null&&H===0&&(I.updateMultisampleRenderTarget(X),I.updateRenderTargetMipmap(X)),j&&D.end(y),w.isScene===!0&&w.onAfterRender(y,w,G),Le.resetDefaultState(),te=-1,Q=null,P.pop(),P.length>0?(A=P[P.length-1],be===!0&&Ee.setGlobalState(y.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?x=C[C.length-1]:x=null};function hl(w,G,ee,j){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ke.intersectsSprite(w)){j&&N.setFromMatrixPosition(w.matrixWorld).applyMatrix4(R);const Ne=ue.update(w),Pe=w.material;Pe.visible&&x.push(w,Ne,Pe,ee,N.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ke.intersectsObject(w))){const Ne=ue.update(w),Pe=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),N.copy(w.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),N.copy(Ne.boundingSphere.center)),N.applyMatrix4(w.matrixWorld).applyMatrix4(R)),Array.isArray(Pe)){const Fe=Ne.groups;for(let He=0,Je=Fe.length;He<Je;He++){const We=Fe[He],ot=Pe[We.materialIndex];ot&&ot.visible&&x.push(w,Ne,ot,ee,N.z,We)}}else Pe.visible&&x.push(w,Ne,Pe,ee,N.z,null)}}const Te=w.children;for(let Ne=0,Pe=Te.length;Ne<Pe;Ne++)hl(Te[Ne],G,ee,j)}function ld(w,G,ee,j){const{opaque:$,transmissive:Te,transparent:Ne}=w;A.setupLightsView(ee),be===!0&&Ee.setGlobalState(y.clippingPlanes,ee),j&&ie.viewport(q.copy(j)),$.length>0&&Io($,G,ee),Te.length>0&&Io(Te,G,ee),Ne.length>0&&Io(Ne,G,ee),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function cd(w,G,ee,j){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[j.id]===void 0){const ot=K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[j.id]=new ai(1,1,{generateMipmaps:!0,type:ot?Oi:Pn,minFilter:Sr,samples:Z.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace})}const Te=A.state.transmissionRenderTarget[j.id],Ne=j.viewport||q;Te.setSize(Ne.z*y.transmissionResolutionScale,Ne.w*y.transmissionResolutionScale);const Pe=y.getRenderTarget(),Fe=y.getActiveCubeFace(),He=y.getActiveMipmapLevel();y.setRenderTarget(Te),y.getClearColor(de),pe=y.getClearAlpha(),pe<1&&y.setClearColor(16777215,.5),y.clear(),F&&ve.render(ee);const Je=y.toneMapping;y.toneMapping=oi;const We=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),A.setupLightsView(j),be===!0&&Ee.setGlobalState(y.clippingPlanes,j),Io(w,ee,j),I.updateMultisampleRenderTarget(Te),I.updateRenderTargetMipmap(Te),K.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Mt=0,Lt=G.length;Mt<Lt;Mt++){const It=G[Mt],{object:Tt,geometry:Xe,material:yt,group:ht}=It;if(yt.side===bn&&Tt.layers.test(j.layers)){const En=yt.side;yt.side=sn,yt.needsUpdate=!0,ud(Tt,ee,j,Xe,yt,ht),yt.side=En,yt.needsUpdate=!0,ot=!0}}ot===!0&&(I.updateMultisampleRenderTarget(Te),I.updateRenderTargetMipmap(Te))}y.setRenderTarget(Pe,Fe,He),y.setClearColor(de,pe),We!==void 0&&(j.viewport=We),y.toneMapping=Je}function Io(w,G,ee){const j=G.isScene===!0?G.overrideMaterial:null;for(let $=0,Te=w.length;$<Te;$++){const Ne=w[$],{object:Pe,geometry:Fe,group:He}=Ne;let Je=Ne.material;Je.allowOverride===!0&&j!==null&&(Je=j),Pe.layers.test(ee.layers)&&ud(Pe,G,ee,Fe,Je,He)}}function ud(w,G,ee,j,$,Te){w.onBeforeRender(y,G,ee,j,$,Te),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(y,G,ee,j,w,Te),$.transparent===!0&&$.side===bn&&$.forceSinglePass===!1?($.side=sn,$.needsUpdate=!0,y.renderBufferDirect(ee,G,j,$,w,Te),$.side=rr,$.needsUpdate=!0,y.renderBufferDirect(ee,G,j,$,w,Te),$.side=bn):y.renderBufferDirect(ee,G,j,$,w,Te),w.onAfterRender(y,G,ee,j,$,Te)}function No(w,G,ee){G.isScene!==!0&&(G=k);const j=_.get(w),$=A.state.lights,Te=A.state.shadowsArray,Ne=$.state.version,Pe=Ce.getParameters(w,$.state,Te,G,ee),Fe=Ce.getProgramCacheKey(Pe);let He=j.programs;j.environment=w.isMeshStandardMaterial?G.environment:null,j.fog=G.fog,j.envMap=(w.isMeshStandardMaterial?ne:J).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,He===void 0&&(w.addEventListener("dispose",Yn),He=new Map,j.programs=He);let Je=He.get(Fe);if(Je!==void 0){if(j.currentProgram===Je&&j.lightsStateVersion===Ne)return dd(w,Pe),Je}else Pe.uniforms=Ce.getUniforms(w),w.onBeforeCompile(Pe,y),Je=Ce.acquireProgram(Pe,Fe),He.set(Fe,Je),j.uniforms=Pe.uniforms;const We=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(We.clippingPlanes=Ee.uniform),dd(w,Pe),j.needsLights=$0(w),j.lightsStateVersion=Ne,j.needsLights&&(We.ambientLightColor.value=$.state.ambient,We.lightProbe.value=$.state.probe,We.directionalLights.value=$.state.directional,We.directionalLightShadows.value=$.state.directionalShadow,We.spotLights.value=$.state.spot,We.spotLightShadows.value=$.state.spotShadow,We.rectAreaLights.value=$.state.rectArea,We.ltc_1.value=$.state.rectAreaLTC1,We.ltc_2.value=$.state.rectAreaLTC2,We.pointLights.value=$.state.point,We.pointLightShadows.value=$.state.pointShadow,We.hemisphereLights.value=$.state.hemi,We.directionalShadowMap.value=$.state.directionalShadowMap,We.directionalShadowMatrix.value=$.state.directionalShadowMatrix,We.spotShadowMap.value=$.state.spotShadowMap,We.spotLightMatrix.value=$.state.spotLightMatrix,We.spotLightMap.value=$.state.spotLightMap,We.pointShadowMap.value=$.state.pointShadowMap,We.pointShadowMatrix.value=$.state.pointShadowMatrix),j.currentProgram=Je,j.uniformsList=null,Je}function fd(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=Ca.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function dd(w,G){const ee=_.get(w);ee.outputColorSpace=G.outputColorSpace,ee.batching=G.batching,ee.batchingColor=G.batchingColor,ee.instancing=G.instancing,ee.instancingColor=G.instancingColor,ee.instancingMorph=G.instancingMorph,ee.skinning=G.skinning,ee.morphTargets=G.morphTargets,ee.morphNormals=G.morphNormals,ee.morphColors=G.morphColors,ee.morphTargetsCount=G.morphTargetsCount,ee.numClippingPlanes=G.numClippingPlanes,ee.numIntersection=G.numClipIntersection,ee.vertexAlphas=G.vertexAlphas,ee.vertexTangents=G.vertexTangents,ee.toneMapping=G.toneMapping}function J0(w,G,ee,j,$){G.isScene!==!0&&(G=k),I.resetTextureUnits();const Te=G.fog,Ne=j.isMeshStandardMaterial?G.environment:null,Pe=X===null?y.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ys,Fe=(j.isMeshStandardMaterial?ne:J).get(j.envMap||Ne),He=j.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Je=!!ee.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),We=!!ee.morphAttributes.position,ot=!!ee.morphAttributes.normal,Mt=!!ee.morphAttributes.color;let Lt=oi;j.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Lt=y.toneMapping);const It=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Tt=It!==void 0?It.length:0,Xe=_.get(j),yt=A.state.lights;if(be===!0&&(rt===!0||w!==Q)){const an=w===Q&&j.id===te;Ee.setState(j,w,an)}let ht=!1;j.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==yt.state.version||Xe.outputColorSpace!==Pe||$.isBatchedMesh&&Xe.batching===!1||!$.isBatchedMesh&&Xe.batching===!0||$.isBatchedMesh&&Xe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Xe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Xe.instancing===!1||!$.isInstancedMesh&&Xe.instancing===!0||$.isSkinnedMesh&&Xe.skinning===!1||!$.isSkinnedMesh&&Xe.skinning===!0||$.isInstancedMesh&&Xe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Xe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Xe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Xe.instancingMorph===!1&&$.morphTexture!==null||Xe.envMap!==Fe||j.fog===!0&&Xe.fog!==Te||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ee.numPlanes||Xe.numIntersection!==Ee.numIntersection)||Xe.vertexAlphas!==He||Xe.vertexTangents!==Je||Xe.morphTargets!==We||Xe.morphNormals!==ot||Xe.morphColors!==Mt||Xe.toneMapping!==Lt||Xe.morphTargetsCount!==Tt)&&(ht=!0):(ht=!0,Xe.__version=j.version);let En=Xe.currentProgram;ht===!0&&(En=No(j,G,$));let Br=!1,Tn=!1,Is=!1;const At=En.getUniforms(),mn=Xe.uniforms;if(ie.useProgram(En.program)&&(Br=!0,Tn=!0,Is=!0),j.id!==te&&(te=j.id,Tn=!0),Br||Q!==w){ie.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),At.setValue(T,"projectionMatrix",w.projectionMatrix),At.setValue(T,"viewMatrix",w.matrixWorldInverse);const gn=At.map.cameraPosition;gn!==void 0&&gn.setValue(T,U.setFromMatrixPosition(w.matrixWorld)),Z.logarithmicDepthBuffer&&At.setValue(T,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&At.setValue(T,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,Tn=!0,Is=!0)}if(Xe.needsLights&&(yt.state.directionalShadowMap.length>0&&At.setValue(T,"directionalShadowMap",yt.state.directionalShadowMap,I),yt.state.spotShadowMap.length>0&&At.setValue(T,"spotShadowMap",yt.state.spotShadowMap,I),yt.state.pointShadowMap.length>0&&At.setValue(T,"pointShadowMap",yt.state.pointShadowMap,I)),$.isSkinnedMesh){At.setOptional(T,$,"bindMatrix"),At.setOptional(T,$,"bindMatrixInverse");const an=$.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),At.setValue(T,"boneTexture",an.boneTexture,I))}$.isBatchedMesh&&(At.setOptional(T,$,"batchingTexture"),At.setValue(T,"batchingTexture",$._matricesTexture,I),At.setOptional(T,$,"batchingIdTexture"),At.setValue(T,"batchingIdTexture",$._indirectTexture,I),At.setOptional(T,$,"batchingColorTexture"),$._colorsTexture!==null&&At.setValue(T,"batchingColorTexture",$._colorsTexture,I));const Nn=ee.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&je.update($,ee,En),(Tn||Xe.receiveShadow!==$.receiveShadow)&&(Xe.receiveShadow=$.receiveShadow,At.setValue(T,"receiveShadow",$.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(mn.envMap.value=Fe,mn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&G.environment!==null&&(mn.envMapIntensity.value=G.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=F1()),Tn&&(At.setValue(T,"toneMappingExposure",y.toneMappingExposure),Xe.needsLights&&Y0(mn,Is),Te&&j.fog===!0&&Be.refreshFogUniforms(mn,Te),Be.refreshMaterialUniforms(mn,j,Ie,ze,A.state.transmissionRenderTarget[w.id]),Ca.upload(T,fd(Xe),mn,I)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ca.upload(T,fd(Xe),mn,I),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&At.setValue(T,"center",$.center),At.setValue(T,"modelViewMatrix",$.modelViewMatrix),At.setValue(T,"normalMatrix",$.normalMatrix),At.setValue(T,"modelMatrix",$.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const an=j.uniformsGroups;for(let gn=0,pl=an.length;gn<pl;gn++){const lr=an[gn];fe.update(lr,En),fe.bind(lr,En)}}return En}function Y0(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function $0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,G,ee){const j=_.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),_.get(w.texture).__webglTexture=G,_.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:ee,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const ee=_.get(w);ee.__webglFramebuffer=G,ee.__useDefaultFramebuffer=G===void 0};const K0=T.createFramebuffer();this.setRenderTarget=function(w,G=0,ee=0){X=w,L=G,H=ee;let j=null,$=!1,Te=!1;if(w){const Pe=_.get(w);if(Pe.__useDefaultFramebuffer!==void 0){ie.bindFramebuffer(T.FRAMEBUFFER,Pe.__webglFramebuffer),q.copy(w.viewport),z.copy(w.scissor),V=w.scissorTest,ie.viewport(q),ie.scissor(z),ie.setScissorTest(V),te=-1;return}else if(Pe.__webglFramebuffer===void 0)I.setupRenderTarget(w);else if(Pe.__hasExternalTextures)I.rebindTextures(w,_.get(w.texture).__webglTexture,_.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Je=w.depthTexture;if(Pe.__boundDepthTexture!==Je){if(Je!==null&&_.has(Je)&&(w.width!==Je.image.width||w.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(w)}}const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Te=!0);const He=_.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(He[G])?j=He[G][ee]:j=He[G],$=!0):w.samples>0&&I.useMultisampledRTT(w)===!1?j=_.get(w).__webglMultisampledFramebuffer:Array.isArray(He)?j=He[ee]:j=He,q.copy(w.viewport),z.copy(w.scissor),V=w.scissorTest}else q.copy(se).multiplyScalar(Ie).floor(),z.copy(oe).multiplyScalar(Ie).floor(),V=Ae;if(ee!==0&&(j=K0),ie.bindFramebuffer(T.FRAMEBUFFER,j)&&ie.drawBuffers(w,j),ie.viewport(q),ie.scissor(z),ie.setScissorTest(V),$){const Pe=_.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+G,Pe.__webglTexture,ee)}else if(Te){const Pe=G;for(let Fe=0;Fe<w.textures.length;Fe++){const He=_.get(w.textures[Fe]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Fe,He.__webglTexture,ee,Pe)}}else if(w!==null&&ee!==0){const Pe=_.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Pe.__webglTexture,ee)}te=-1},this.readRenderTargetPixels=function(w,G,ee,j,$,Te,Ne,Pe=0){if(!(w&&w.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){ie.bindFramebuffer(T.FRAMEBUFFER,Fe);try{const He=w.textures[Pe],Je=He.format,We=He.type;if(!Z.textureFormatReadable(Je)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(We)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-j&&ee>=0&&ee<=w.height-$&&(w.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Pe),T.readPixels(G,ee,j,$,me.convert(Je),me.convert(We),Te))}finally{const He=X!==null?_.get(X).__webglFramebuffer:null;ie.bindFramebuffer(T.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(w,G,ee,j,$,Te,Ne,Pe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe)if(G>=0&&G<=w.width-j&&ee>=0&&ee<=w.height-$){ie.bindFramebuffer(T.FRAMEBUFFER,Fe);const He=w.textures[Pe],Je=He.format,We=He.type;if(!Z.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,ot),T.bufferData(T.PIXEL_PACK_BUFFER,Te.byteLength,T.STREAM_READ),w.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Pe),T.readPixels(G,ee,j,$,me.convert(Je),me.convert(We),0);const Mt=X!==null?_.get(X).__webglFramebuffer:null;ie.bindFramebuffer(T.FRAMEBUFFER,Mt);const Lt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await QS(T,Lt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,ot),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Te),T.deleteBuffer(ot),T.deleteSync(Lt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,ee=0){const j=Math.pow(2,-ee),$=Math.floor(w.image.width*j),Te=Math.floor(w.image.height*j),Ne=G!==null?G.x:0,Pe=G!==null?G.y:0;I.setTexture2D(w,0),T.copyTexSubImage2D(T.TEXTURE_2D,ee,0,0,Ne,Pe,$,Te),ie.unbindTexture()};const Z0=T.createFramebuffer(),Q0=T.createFramebuffer();this.copyTextureToTexture=function(w,G,ee=null,j=null,$=0,Te=null){Te===null&&($!==0?(vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=$,$=0):Te=0);let Ne,Pe,Fe,He,Je,We,ot,Mt,Lt;const It=w.isCompressedTexture?w.mipmaps[Te]:w.image;if(ee!==null)Ne=ee.max.x-ee.min.x,Pe=ee.max.y-ee.min.y,Fe=ee.isBox3?ee.max.z-ee.min.z:1,He=ee.min.x,Je=ee.min.y,We=ee.isBox3?ee.min.z:0;else{const Nn=Math.pow(2,-$);Ne=Math.floor(It.width*Nn),Pe=Math.floor(It.height*Nn),w.isDataArrayTexture?Fe=It.depth:w.isData3DTexture?Fe=Math.floor(It.depth*Nn):Fe=1,He=0,Je=0,We=0}j!==null?(ot=j.x,Mt=j.y,Lt=j.z):(ot=0,Mt=0,Lt=0);const Tt=me.convert(G.format),Xe=me.convert(G.type);let yt;G.isData3DTexture?(I.setTexture3D(G,0),yt=T.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(I.setTexture2DArray(G,0),yt=T.TEXTURE_2D_ARRAY):(I.setTexture2D(G,0),yt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,G.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,G.unpackAlignment);const ht=T.getParameter(T.UNPACK_ROW_LENGTH),En=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Br=T.getParameter(T.UNPACK_SKIP_PIXELS),Tn=T.getParameter(T.UNPACK_SKIP_ROWS),Is=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,It.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,It.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,He),T.pixelStorei(T.UNPACK_SKIP_ROWS,Je),T.pixelStorei(T.UNPACK_SKIP_IMAGES,We);const At=w.isDataArrayTexture||w.isData3DTexture,mn=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const Nn=_.get(w),an=_.get(G),gn=_.get(Nn.__renderTarget),pl=_.get(an.__renderTarget);ie.bindFramebuffer(T.READ_FRAMEBUFFER,gn.__webglFramebuffer),ie.bindFramebuffer(T.DRAW_FRAMEBUFFER,pl.__webglFramebuffer);for(let lr=0;lr<Fe;lr++)At&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_.get(w).__webglTexture,$,We+lr),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_.get(G).__webglTexture,Te,Lt+lr)),T.blitFramebuffer(He,Je,Ne,Pe,ot,Mt,Ne,Pe,T.DEPTH_BUFFER_BIT,T.NEAREST);ie.bindFramebuffer(T.READ_FRAMEBUFFER,null),ie.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||_.has(w)){const Nn=_.get(w),an=_.get(G);ie.bindFramebuffer(T.READ_FRAMEBUFFER,Z0),ie.bindFramebuffer(T.DRAW_FRAMEBUFFER,Q0);for(let gn=0;gn<Fe;gn++)At?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Nn.__webglTexture,$,We+gn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Nn.__webglTexture,$),mn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,an.__webglTexture,Te,Lt+gn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,an.__webglTexture,Te),$!==0?T.blitFramebuffer(He,Je,Ne,Pe,ot,Mt,Ne,Pe,T.COLOR_BUFFER_BIT,T.NEAREST):mn?T.copyTexSubImage3D(yt,Te,ot,Mt,Lt+gn,He,Je,Ne,Pe):T.copyTexSubImage2D(yt,Te,ot,Mt,He,Je,Ne,Pe);ie.bindFramebuffer(T.READ_FRAMEBUFFER,null),ie.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else mn?w.isDataTexture||w.isData3DTexture?T.texSubImage3D(yt,Te,ot,Mt,Lt,Ne,Pe,Fe,Tt,Xe,It.data):G.isCompressedArrayTexture?T.compressedTexSubImage3D(yt,Te,ot,Mt,Lt,Ne,Pe,Fe,Tt,It.data):T.texSubImage3D(yt,Te,ot,Mt,Lt,Ne,Pe,Fe,Tt,Xe,It):w.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Te,ot,Mt,Ne,Pe,Tt,Xe,It.data):w.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Te,ot,Mt,It.width,It.height,Tt,It.data):T.texSubImage2D(T.TEXTURE_2D,Te,ot,Mt,Ne,Pe,Tt,Xe,It);T.pixelStorei(T.UNPACK_ROW_LENGTH,ht),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,En),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Br),T.pixelStorei(T.UNPACK_SKIP_ROWS,Tn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Is),Te===0&&G.generateMipmaps&&T.generateMipmap(yt),ie.unbindTexture()},this.initRenderTarget=function(w){_.get(w).__webglFramebuffer===void 0&&I.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?I.setTextureCube(w,0):w.isData3DTexture?I.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?I.setTexture2DArray(w,0):I.setTexture2D(w,0),ie.unbindTexture()},this.resetState=function(){L=0,H=0,X=null,ie.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),n.unpackColorSpace=ft._getUnpackColorSpace()}}class k1{data;constructor(e){let n;"bytes"in e?n=z1(e.bytes):n=e.data,this.data=n}get bytes(){return V1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new mt;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function z1(t){return Mf.decode(t)}function V1(t){return Mf.encode(t).finish()}function or(t){const e=new O(t.point.x,t.point.y,t.point.z),n=new O(t.xaxis.x,t.xaxis.y,t.xaxis.z),i=new O(t.yaxis.x,t.yaxis.y,t.yaxis.z),r=new O().crossVectors(n,i),s=new mt;return s.makeBasis(n,i,r),s.setPosition(e),s}class Fn{data;constructor(e){let n;if("bytes"in e?n=H1(e.bytes):n=e.data,n.x===void 0||n.y===void 0||n.z===void 0)throw new Error("Invalid PointData: Missing required properties (x, y, or z).");this.data=n}get bytes(){return G1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get x(){return this.data.x}get y(){return this.data.y}get z(){return this.data.z}buildGeometry(){const e=new dt,n=new Float32Array([this.x,this.y,this.z]);e.setAttribute("position",new pn(n,3));const i=new Gf({size:.2,color:255});return new b0(e,i)}}function H1(t){return Ve.decode(t)}function G1(t){return Ve.encode(t).finish()}class Es{data;constructor(e){let n;if("bytes"in e?n=W1(e.bytes):n=e.data,n.x===void 0||n.y===void 0||n.z===void 0)throw new Error("Invalid VectorData: Missing required properties (x, y, or z).");this.data=n}get bytes(){return X1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get x(){return this.data.x}get y(){return this.data.y}get z(){return this.data.z}buildGeometry(e){const n=new O(this.x,this.y,this.z),i=n.length();n.normalize();let r;e?r=new O(e.x,e.y,e.z):r=new O(0,0,0);let s=new zM(n,r,i,16711680);return s.setDirection(n),s}}function W1(t){return bt.decode(t)}function X1(t){return bt.encode(t).finish()}class Jn{data;_point;_xaxis;_yaxis;constructor(e){let n;if("bytes"in e?n=q1(e.bytes):n=e.data,!n.point||!n.xaxis||!n.yaxis)throw new Error("Invalid FrameData: Missing required properties (point, xaxis, or yaxis).");this.data=n}get bytes(){return J1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get point(){return this._point||(this._point=new Fn({data:this.data.point})),this._point}get xaxis(){return this._xaxis||(this._xaxis=new Es({data:this.data.xaxis})),this._xaxis}get yaxis(){return this._yaxis||(this._yaxis=new Es({data:this.data.yaxis})),this._yaxis}buildGeometry(){const e=new N0(1);e.setColors(new $e(16711680),new $e(65280),new $e(255));const n=or(this.data);return e.applyMatrix4(n),e}}function q1(t){return Ge.decode(t)}function J1(t){return Ge.encode(t).finish()}class z0{data;_frame;constructor(e){let n;if("bytes"in e?n=Y1(e.bytes):n=e.data,!n.radius||!n.frame)throw new Error("Invalid CircleData: Missing required properties (radius or frame).");this.data=n}get bytes(){return $1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get frame(){return this._frame||(this._frame=new Jn({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new Xf(this.data.radius,e),i=or(this.data.frame);return n.applyMatrix4(i),n}}function Y1(t){return Zi.decode(t)}function $1(t){return Zi.encode(t).finish()}class K1{data;_circle;constructor(e){let n;if("bytes"in e?n=Z1(e.bytes):n=e.data,!n.startAngle||!n.endAngle||!n.circle)throw new Error("Invalid ArcData: Missing required properties (startAngle, endAngle, or circle).");this.data=n}get bytes(){return Q1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get startAngle(){return this.data.startAngle}get endAngle(){return this.data.endAngle}get circle(){return this._circle||(this._circle=new z0({data:this.data.circle})),this._circle}buildGeometry(){throw new Error("Method not implemented.")}}function Z1(t){return cf.decode(t)}function Q1(t){return cf.encode(t).finish()}class j1{data;_points;constructor(e){let n;if("bytes"in e?n=eC(e.bytes):n=e.data,!n.points||n.points.length===0)throw new Error("Invalid BezierData: Missing required property points.");this.data=n}get bytes(){return tC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const e of this.data.points){const n=new Fn({data:e});this._points.push(n)}}return this._points}buildGeometry(){throw Error("Method not implemented.")}}function eC(t){return hf.decode(t)}function tC(t){return hf.encode(t).finish()}class nC{data;_frame;constructor(e){let n;if("bytes"in e?n=iC(e.bytes):n=e.data,!n.xsize||!n.ysize||!n.zsize||!n.frame)throw new Error("Invalid BoxData: Missing required properties (xsize, ysize, zsize, or frame).");this.data=n}get bytes(){return rC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get xsize(){return this.data.xsize}get ysize(){return this.data.ysize}get zsize(){return this.data.zsize}get frame(){return this._frame||(this._frame=new Jn({data:this.data.frame})),this._frame}buildGeometry(){const e=new Fr(this.data.xsize,this.data.ysize,this.data.zsize),n=or(this.data.frame);return e.applyMatrix4(n),e}}function iC(t){return gf.decode(t)}function rC(t){return gf.encode(t).finish()}class sC{data;_frame;constructor(e){let n;if("bytes"in e?n=oC(e.bytes):n=e.data,!n.radius||!n.height||!n.frame)throw new Error("Invalid CapsuleData: Missing required properties (radius, height, or frame).");this.data=n}get bytes(){return aC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get height(){return this.data.height}get frame(){return this._frame||(this._frame=new Jn({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new Wf(this.data.radius,this.data.height,e,e),i=or(this.data.frame);return n.applyMatrix4(i),n}}function oC(t){return yf.decode(t)}function aC(t){return yf.encode(t).finish()}class lC{data;_frame;constructor(e){let n;if("bytes"in e?n=cC(e.bytes):n=e.data,!n.radius||!n.height||!n.frame)throw new Error("Invalid ConeData: Missing required properties (radius, height, or frame).");this.data=n}get bytes(){return uC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get height(){return this.data.height}get frame(){return this._frame||(this._frame=new Jn({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new ol(this.radius,this.height,e),i=or(this.data.frame);return n.applyMatrix4(i),n}}function cC(t){return xf.decode(t)}function uC(t){return xf.encode(t).finish()}class fC{data;_frame;constructor(e){let n;if("bytes"in e?n=dC(e.bytes):n=e.data,!n.radius||!n.height||!n.frame)throw new Error("Invalid CylinderData: Missing required properties (radius, height, or frame).");this.data=n}get bytes(){return hC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get height(){return this.data.height}get frame(){return this._frame||(this._frame=new Jn({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new sl(this.data.radius,this.data.radius,this.data.height,e),i=or(this.frame);return n.applyMatrix4(i),n}}function dC(t){return vf.decode(t)}function hC(t){return vf.encode(t).finish()}class pC{data;_frame;constructor(e){let n;if("bytes"in e?n=mC(e.bytes):n=e.data,!n.major||!n.minor||!n.frame)throw new Error("Invalid EllipseData: Missing required properties (major, minor, or frame).");this.data=n}get bytes(){return gC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get major(){return this.data.major}get minor(){return this.data.minor}get frame(){return this._frame||(this._frame=new Jn({data:this.data.frame})),this._frame}buildGeometry(e=64){throw Error("Method not implemented.")}}function mC(t){return uf.decode(t)}function gC(t){return uf.encode(t).finish()}class _C{data;_frame;constructor(e){let n;if("bytes"in e?n=vC(e.bytes):n=e.data,!n.major||!n.minor||!n.frame)throw new Error("Invalid HyperbolaData: Missing required properties (a, b, or frame).");this.data=n}get bytes(){return xC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get major(){return this.data.major}get minor(){return this.data.minor}get frame(){return this._frame||(this._frame=new Jn({data:this.data.frame})),this._frame}buildGeometry(e=64){throw Error("Method not implemented.")}}function vC(t){return df.decode(t)}function xC(t){return df.encode(t).finish()}class yC{data;_start;_end;constructor(e){let n;if("bytes"in e?n=SC(e.bytes):n=e.data,!n.start||!n.end)throw new Error("Invalid LineData: Missing required properties (start or end).");this.data=n}get bytes(){return bC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get start(){return this._start||(this._start=new Fn({data:this.data.start})),this._start}get end(){return this._end||(this._end=new Fn({data:this.data.end})),this._end}buildGeometry(){const e=new O(this.data.start.x,this.data.start.y,this.data.start.z),n=new O(this.data.end.x,this.data.end.y,this.data.end.z),i=new dt().setFromPoints([e,n]),r=new pi({color:255});return new sr(i,r)}}function SC(t){return lf.decode(t)}function bC(t){return lf.encode(t).finish()}class MC{data;_frame;constructor(e){let n;if("bytes"in e?n=EC(e.bytes):n=e.data,!n.focal||!n.frame)throw new Error("Invalid ParabolaData: Missing required properties (focal_length or frame).");this.data=n}get bytes(){return TC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get focal(){return this.data.focal}get frame(){return this._frame||(this._frame=new Jn({data:this.data.frame})),this._frame}buildGeometry(e=64){throw Error("Method not implemented.")}}function EC(t){return ff.decode(t)}function TC(t){return ff.encode(t).finish()}class wC{data;_point;_normal;constructor(e){let n;if("bytes"in e?n=AC(e.bytes):n=e.data,!n.point||!n.normal)throw new Error("Invalid PlaneData: Missing required properties (point or normal).");this.data=n}get bytes(){return CC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get point(){return this._point||(this._point=new Fn({data:this.data.point})),this._point}get normal(){return this._normal||(this._normal=new Es({data:this.data.normal})),this._normal}buildGeometry(e=2){const n=new Ai(new O(this.normal.x,this.normal.y,this.normal.z),0);return n.translate(new O(this.point.x,this.point.y,this.point.z)),new kM(n,e,16711935)}}function AC(t){return of.decode(t)}function CC(t){return of.encode(t).finish()}class PC{data;_points;constructor(e){let n;if("bytes"in e?n=RC(e.bytes):n=e.data,!n.points||n.points.length===0)throw new Error("Invalid PointcloudData: Missing required property points.");this.data=n}get bytes(){return DC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const e of this.data.points){const n=new Fn({data:e});this._points.push(n)}}return this._points}buildGeometry(){const e=new dt,n=new Float32Array(this.points.length*3);for(let s=0;s<this.points.length;s++)n[s*3]=this.points[s].x,n[s*3+1]=this.points[s].y,n[s*3+2]=this.points[s].z;e.setAttribute("position",new pn(n,3));const i=new Gf({size:.2,color:16711935});return new b0(e,i)}}function RC(t){return bf.decode(t)}function DC(t){return bf.encode(t).finish()}class LC{data;_points;constructor(e){let n;if("bytes"in e?n=IC(e.bytes):n=e.data,!n.points||n.points.length===0)throw new Error("Invalid PolygonData: Missing required property points.");this.data=n}get bytes(){return NC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const e of this.data.points){const n=new Fn({data:e});this._points.push(n)}}return this._points}buildGeometry(){throw Error("Method not implemented.")}}function IC(t){return mf.decode(t)}function NC(t){return mf.encode(t).finish()}class UC{data;_points;constructor(e){let n;if("bytes"in e?n=OC(e.bytes):n=e.data,!n.points||n.points.length===0)throw new Error("Invalid PolylineData: Missing required property points.");this.data=n}get bytes(){return FC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const e of this.data.points){const n=new Fn({data:e});this._points.push(n)}}return this._points}buildGeometry(){const e=new dt,n=new Float32Array(this.points.length*3);for(let s=0;s<this.points.length;s++)n[s*3]=this.points[s].x,n[s*3+1]=this.points[s].y,n[s*3+2]=this.points[s].z;e.setAttribute("position",new pn(n,3));const i=new pi({color:0});return new sr(e,i)}}function OC(t){return pf.decode(t)}function FC(t){return pf.encode(t).finish()}class BC{data;constructor(e){let n;if("bytes"in e?n=kC(e.bytes):n=e.data,!n.matrix)throw new Error("Invalid ProjectionData: Missing required properties (direction).");this.data=n}get bytes(){return zC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new mt;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function kC(t){return Pf.decode(t)}function zC(t){return Pf.encode(t).finish()}class VC{data;constructor(e){let n;if("bytes"in e?n=HC(e.bytes):n=e.data,!n.w||!n.x||!n.y||!n.z)throw new Error("Invalid QuaternionData: Missing required properties (w, x, y, or z).");this.data=n}get bytes(){return GC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get w(){return this.data.w}get x(){return this.data.x}get y(){return this.data.y}get z(){return this.data.z}}function HC(t){return af.decode(t)}function GC(t){return af.encode(t).finish()}class WC{data;constructor(e){let n;if("bytes"in e?n=XC(e.bytes):n=e.data,!n.matrix)throw new Error("Invalid ReflectionData: Missing required properties (frame).");this.data=n}get bytes(){return qC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new mt;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function XC(t){return Af.decode(t)}function qC(t){return Af.encode(t).finish()}class JC{data;_axis;_point;constructor(e){let n;if("bytes"in e?n=YC(e.bytes):n=e.data,!n.axis||!n.point||!n.angle)throw new Error("Invalid RotationData: Missing required properties (axis or point).");this.data=n}get bytes(){return $C(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get axis(){return this._axis||(this._axis=new Es({data:this.data.axis})),this._axis}get point(){return this._point||(this._point=new Fn({data:this.data.point})),this._point}get angle(){return this.data.angle}}function YC(t){return Tf.decode(t)}function $C(t){return Tf.encode(t).finish()}class KC{data;constructor(e){let n;if("bytes"in e?n=ZC(e.bytes):n=e.data,!n.matrix)throw new Error("Invalid ScaleData: Missing required properties (factor or frame).");this.data=n}get bytes(){return QC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new mt;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function ZC(t){return wf.decode(t)}function QC(t){return wf.encode(t).finish()}class jC{data;constructor(e){let n;if("bytes"in e?n=eP(e.bytes):n=e.data,!n.matrix)throw new Error("Invalid ShearData: Missing required properties (matrix).");this.data=n}get bytes(){return tP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new mt;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function eP(t){return Cf.decode(t)}function tP(t){return Cf.encode(t).finish()}class nP{data;_frame;constructor(e){let n;if("bytes"in e?n=iP(e.bytes):n=e.data,!n.radius||!n.frame)throw new Error("Invalid SphereData: Missing required properties (radius or frame).");this.data=n}get bytes(){return rP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get frame(){return this._frame||(this._frame=new Jn({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new ll(this.radius,e,e),i=or(this.data.frame);return n.applyMatrix4(i),n}}function iP(t){return _f.decode(t)}function rP(t){return _f.encode(t).finish()}class sP{data;_frame;constructor(e){let n;if("bytes"in e?n=oP(e.bytes):n=e.data,!n.radiusAxis||!n.radiusPipe||!n.frame)throw new Error("Invalid TorusData: Missing required properties (major, minor, or frame).");this.data=n}get bytes(){return aP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radiusAxis(){return this.data.radiusAxis}get radiusPipe(){return this.data.radiusPipe}get frame(){return this._frame||(this._frame=new Jn({data:this.data.frame})),this._frame}buildGeometry(e=64,n=64){const i=new $f(this.radiusAxis,this.radiusPipe,e,n),r=or(this.data.frame);return i.applyMatrix4(r),i}}function oP(t){return Sf.decode(t)}function aP(t){return Sf.encode(t).finish()}class lP{data;_translationVector;constructor(e){let n;if("bytes"in e?n=cP(e.bytes):n=e.data,!n.translationVector)throw new Error("Invalid TranslationData: Missing required properties (vector or frame).");this.data=n}get bytes(){return uP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get translationVector(){return this._translationVector||(this._translationVector=new Es({data:this.data.translationVector})),this._translationVector}}function cP(t){return Ef.decode(t)}function uP(t){return Ef.encode(t).finish()}function tm(){return{indices:[]}}const ji={encode(t,e=new et){e.uint32(10).fork();for(const n of t.indices)e.uint32(n);return e.join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=tm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s===8){r.indices.push(n.uint32());continue}if(s===10){const o=n.uint32()+n.pos;for(;n.pos<o;)r.indices.push(n.uint32());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{indices:globalThis.Array.isArray(t?.indices)?t.indices.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.indices?.length&&(e.indices=t.indices.map(n=>Math.round(n))),e},create(t){return ji.fromPartial(t??{})},fromPartial(t){const e=tm();return e.indices=t.indices?.map(n=>n)||[],e}};function nm(){return{guid:void 0,name:void 0,vertices:[],faces:[]}}const jf={encode(t,e=new et){t.guid!==void 0&&e.uint32(10).string(t.guid),t.name!==void 0&&e.uint32(18).string(t.name);for(const n of t.vertices)Ve.encode(n,e.uint32(26).fork()).join();for(const n of t.faces)ji.encode(n,e.uint32(34).fork()).join();return e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=nm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.vertices.push(Ve.decode(n,n.uint32()));continue}case 4:{if(s!==34)break;r.faces.push(ji.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:Ga(t.guid)?globalThis.String(t.guid):void 0,name:Ga(t.name)?globalThis.String(t.name):void 0,vertices:globalThis.Array.isArray(t?.vertices)?t.vertices.map(e=>Ve.fromJSON(e)):[],faces:globalThis.Array.isArray(t?.faces)?t.faces.map(e=>ji.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==void 0&&(e.guid=t.guid),t.name!==void 0&&(e.name=t.name),t.vertices?.length&&(e.vertices=t.vertices.map(n=>Ve.toJSON(n))),t.faces?.length&&(e.faces=t.faces.map(n=>ji.toJSON(n))),e},create(t){return jf.fromPartial(t??{})},fromPartial(t){const e=nm();return e.guid=t.guid??void 0,e.name=t.name??void 0,e.vertices=t.vertices?.map(n=>Ve.fromPartial(n))||[],e.faces=t.faces?.map(n=>ji.fromPartial(n))||[],e}};function im(){return{vertexIndices:[]}}const er={encode(t,e=new et){e.uint32(10).fork();for(const n of t.vertexIndices)e.int32(n);return e.join(),e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=im();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s===8){r.vertexIndices.push(n.int32());continue}if(s===10){const o=n.uint32()+n.pos;for(;n.pos<o;)r.vertexIndices.push(n.int32());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{vertexIndices:globalThis.Array.isArray(t?.vertexIndices)?t.vertexIndices.map(e=>globalThis.Number(e)):globalThis.Array.isArray(t?.vertex_indices)?t.vertex_indices.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.vertexIndices?.length&&(e.vertexIndices=t.vertexIndices.map(n=>Math.round(n))),e},create(t){return er.fromPartial(t??{})},fromPartial(t){const e=im();return e.vertexIndices=t.vertexIndices?.map(n=>n)||[],e}};function rm(){return{guid:void 0,name:void 0,vertices:[],faces:[]}}const ed={encode(t,e=new et){t.guid!==void 0&&e.uint32(10).string(t.guid),t.name!==void 0&&e.uint32(18).string(t.name);for(const n of t.vertices)Ve.encode(n,e.uint32(26).fork()).join();for(const n of t.faces)er.encode(n,e.uint32(34).fork()).join();return e},decode(t,e){const n=t instanceof _e?t:new _e(t),i=e===void 0?n.len:n.pos+e,r=rm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.vertices.push(Ve.decode(n,n.uint32()));continue}case 4:{if(s!==34)break;r.faces.push(er.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:Ga(t.guid)?globalThis.String(t.guid):void 0,name:Ga(t.name)?globalThis.String(t.name):void 0,vertices:globalThis.Array.isArray(t?.vertices)?t.vertices.map(e=>Ve.fromJSON(e)):[],faces:globalThis.Array.isArray(t?.faces)?t.faces.map(e=>er.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==void 0&&(e.guid=t.guid),t.name!==void 0&&(e.name=t.name),t.vertices?.length&&(e.vertices=t.vertices.map(n=>Ve.toJSON(n))),t.faces?.length&&(e.faces=t.faces.map(n=>er.toJSON(n))),e},create(t){return ed.fromPartial(t??{})},fromPartial(t){const e=rm();return e.guid=t.guid??void 0,e.name=t.name??void 0,e.vertices=t.vertices?.map(n=>Ve.fromPartial(n))||[],e.faces=t.faces?.map(n=>er.fromPartial(n))||[],e}};function Ga(t){return t!=null}class fP{data;constructor(e){let n;if("bytes"in e?n=dP(e.bytes):n=e.data,!n.vertexIndices)throw new Error("Invalid FaceData: Missing required property 'vertices'.");this.data=n}get bytes(){return hP(this.data)}get vertexIndices(){return this.data.vertexIndices}}function dP(t){return er.decode(t)}function hP(t){return er.encode(t).finish()}class pP{data;_points;_faces;constructor(e){let n;if("bytes"in e?n=mP(e.bytes):n=e.data,!n.vertices||!n.faces)throw new Error("Invalid PolyhedronData: Missing required properties (vertices or faces).");this.data=n}get bytes(){return gP(this.data)}get guid(){return this.data.guid?this.data.guid:""}get name(){return this.data.name?this.data.name:""}get vertices(){if(!this._points){this._points=[];for(const e of this.data.vertices){const n=new Fn({data:e});this._points.push(n)}}return this._points}get faces(){if(!this._faces){this._faces=[];for(const e of this.data.faces){const n=new fP({data:e});this._faces.push(n)}}return this._faces}buildGeometry(){const e=new dt,n=new Float32Array(this.vertices.length*3);for(let o=0;o<this.vertices.length;o++){const a=this.vertices[o];n[o*3]=a.x,n[o*3+1]=a.y,n[o*3+2]=a.z}const i=[];for(const o of this.faces){const a=o.vertexIndices;for(let l=1;l<a.length-1;l++)i.push(a[0],a[l],a[l+1])}e.setIndex(i),e.setAttribute("position",new pn(n,3)),e.computeVertexNormals();const r=new Do({color:52292,side:bn});return new $t(e,r)}}function mP(t){return ed.decode(t)}function gP(t){return ed.encode(t).finish()}class _P{data;constructor(e){let n;if("bytes"in e?n=vP(e.bytes):n=e.data,!n.indices)throw new Error("Invalid FaceList: Missing required property 'faces'.");this.data=n}get bytes(){return xP(this.data)}get indices(){return this.data.indices}}function vP(t){return ji.decode(t)}function xP(t){return ji.encode(t).finish()}class yP{data;_vertices;constructor(e){let n;if("bytes"in e?n=SP(e.bytes):n=e.data,!n.vertices||!n.faces)throw new Error("Invalid MeshData: Missing required properties (vertices or faces).");this.data=n}get bytes(){return bP(this.data)}get guid(){return this.data.guid?this.data.guid:""}get name(){return this.data.name?this.data.name:""}get vertices(){if(!this._vertices){this._vertices=[];for(const e of this.data.vertices){const n=new Fn({data:e});this._vertices.push(n)}}return this._vertices}get faces(){const e=[];for(const n of this.data.faces){const i=new _P({data:n});e.push(i)}return e}buildGeometry(){const e=new dt,n=new Float32Array(this.vertices.length*3);this.vertices.forEach((s,o)=>{n[o*3]=s.x,n[o*3+1]=s.y,n[o*3+2]=s.z});const i=[];for(const s of this.faces){const o=s.indices;for(let a=1;a<o.length-1;a++)i.push(o[0],o[a],o[a+1])}e.setIndex(i),e.setAttribute("position",new pn(n,3)),e.computeVertexNormals();const r=new Do({color:30719,flatShading:!0,side:bn});return new $t(e,r)}}function SP(t){return jf.decode(t)}function bP(t){return jf.encode(t).finish()}class V0{data;constructor(e){let n;"bytes"in e?n=MP(e.bytes):n=e.data,this.data=n}get bytes(){return EP(this.data)}get asDict(){const e={};for(const n in this.data.items)Object.prototype.hasOwnProperty.call(this.data.items,n)&&(e[n]=this.data.items[n]);return e}}function MP(t){return Ki.decode(t)}function EP(t){return Ki.encode(t).finish()}const TP=new Map([["ArcData",K1],["BezierData",j1],["BoxData",nC],["CapsuleData",sC],["CircleData",z0],["ConeData",lC],["CylinderData",fC],["EllipseData",pC],["FrameData",Jn],["HyperbolaData",_C],["LineData",yC],["ParabolaData",MC],["PlaneData",wC],["PointData",Fn],["PointcloudData",PC],["PolygonData",LC],["PolylineData",UC],["ProjectionData",BC],["QuaternionData",VC],["ReflectionData",WC],["RotationData",JC],["ScaleData",KC],["ShearData",jC],["SphereData",nP],["TorusData",sP],["TransformationData",k1],["TranslationData",lP],["VectorData",Es],["MeshData",yP],["PolyhedronData",pP],["DictData",V0]]);function wP(t){const e=H0(t),n=AP(e);return n?new n({bytes:e.value}):null}function H0(t){return qg.decode(t).data.message}function AP(t){const n=t.typeUrl.split(".").slice(-1)[0];return TP.get(n)||null}const sm={type:"change"},td={type:"start"},G0={type:"end"},ga=new rl,om=new Ai,CP=Math.cos(70*Eu.DEG2RAD),Ht=new O,_n=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},mc=1e-6;class PP extends HM{constructor(e,n=null){super(e,n),this.state=Et.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Rr,this._lastTargetPosition=new O,this._quat=new Rr().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wp,this._sphericalDelta=new wp,this._scale=1,this._panOffset=new O,this._rotateStart=new ge,this._rotateEnd=new ge,this._rotateDelta=new ge,this._panStart=new ge,this._panEnd=new ge,this._panDelta=new ge,this._dollyStart=new ge,this._dollyEnd=new ge,this._dollyDelta=new ge,this._dollyDirection=new O,this._mouse=new ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=DP.bind(this),this._onPointerDown=RP.bind(this),this._onPointerUp=LP.bind(this),this._onContextMenu=kP.bind(this),this._onMouseWheel=UP.bind(this),this._onKeyDown=OP.bind(this),this._onTouchStart=FP.bind(this),this._onTouchMove=BP.bind(this),this._onMouseDown=IP.bind(this),this._onMouseMove=NP.bind(this),this._interceptControlDown=zP.bind(this),this._interceptControlUp=VP.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sm),this.update(),this.state=Et.NONE}update(e=null){const n=this.object.position;Ht.copy(n).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=_n:i>Math.PI&&(i-=_n),r<-Math.PI?r+=_n:r>Math.PI&&(r-=_n),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ht.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ga.origin.copy(this.object.position),ga.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ga.direction))<CP?this.object.lookAt(this.target):(om.setFromNormalAndCoplanarPoint(this.object.up,this.target),ga.intersectPlane(om,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>mc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>mc||this._lastTargetPosition.distanceToSquared(this.target)>mc?(this.dispatchEvent(sm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_n/60*this.autoRotateSpeed*e:_n/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ht.setFromMatrixColumn(n,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,n){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(n,1):(Ht.setFromMatrixColumn(n,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ht.copy(r).sub(this.target);let s=Ht.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/n.clientHeight),this._rotateUp(_n*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/n.clientHeight),this._rotateUp(_n*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ge,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function RP(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function DP(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function LP(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(G0),this.state=Et.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function IP(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Et.DOLLY;break;case ds.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Et.ROTATE}break;case ds.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(td)}function NP(t){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function UP(t){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(t.preventDefault(),this.dispatchEvent(td),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(G0))}function OP(t){this.enabled!==!1&&this._handleKeyDown(t)}function FP(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Et.TOUCH_ROTATE;break;case ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Et.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(td)}function BP(t){switch(this._trackPointer(t),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Et.NONE}}function kP(t){this.enabled!==!1&&t.preventDefault()}function zP(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function VP(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}Rt.DEFAULT_UP.set(0,0,1);const Ut=new Fb,Mo=new yn(60,window.innerWidth/window.innerHeight,.1,1e3);Mo.position.set(10,-20,15);const In=new B1({antialias:!0});In.setSize(window.innerWidth,window.innerHeight);In.setPixelRatio(window.devicePixelRatio);In.toneMapping=Df;In.shadowMap.enabled=!0;In.shadowMap.type=Jg;In.toneMappingExposure=2.5;In.physicallyCorrectLights=!0;In.outputColorSpace=Cn;document.body.appendChild(In.domElement);const nd=new PP(Mo,In.domElement);nd.enableDamping=!0;const HP=new N0(5);Ut.add(HP);function W0(){requestAnimationFrame(W0),nd.update(),In.render(Ut,Mo)}W0();window.addEventListener("resize",()=>{Mo.aspect=window.innerWidth/window.innerHeight,Mo.updateProjectionMatrix(),In.setSize(window.innerWidth,window.innerHeight)});function GP(t){switch(t.type.value){case"background_color":WP(t);break;case"controls_damping":nd.enableDamping=t.damping.value;break;default:console.warn("Unknown scene type:",t.type.value)}}function WP(t){let e=t.color.value;e=e.replace("#","0x"),e=parseInt(e),Ut.background=new $e(e)}class XP extends sr{constructor(e,n){const i=[1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],r=new dt;r.setAttribute("position",new at(i,3)),r.computeBoundingSphere();const s=new pi({fog:!1});super(r,s),this.light=e,this.color=n,this.type="RectAreaLightHelper";const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],a=new dt;a.setAttribute("position",new at(o,3)),a.computeBoundingSphere(),this.add(new $t(a,new Ds({side:sn,fog:!1})))}updateMatrixWorld(){if(this.scale.set(.5*this.light.width,.5*this.light.height,1),this.color!==void 0)this.material.color.set(this.color),this.children[0].material.color.set(this.color);else{this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);const e=this.material.color,n=Math.max(e.r,e.g,e.b);n>1&&e.multiplyScalar(1/n),this.children[0].material.color.copy(this.material.color)}this.matrixWorld.extractRotation(this.light.matrixWorld).scale(this.scale).copyPosition(this.light.matrixWorld),this.children[0].matrixWorld.copy(this.matrixWorld)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}class fl extends $t{constructor(){const e=fl.SkyShader,n=new qn({name:e.name,uniforms:_0.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:sn,depthWrite:!1});super(new Fr(1,1,1),n),this.isSky=!0}}fl.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new O},up:{value:new O(0,1,0)}},vertexShader:`
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

		}`};const Ft={},On={};function am(t){t.type.value=="point_light"?qP(t):t.type.value=="spot_light"?JP(t):t.type.value=="rect_light"?YP(t):t.type.value=="sunlight"?$P(t):t.type.value=="sky"?KP(t):t.type.value=="ambient_light"&&ZP(t)}function qP(t){let e,n;Ft[t.guid.value]?e=Ft[t.guid.value]:(e=new LM,Ut.add(e));let i=t.color.value;i=i.replace("#","0x"),i=parseInt(i),e.color.set(i),e.intensity=t.intensity.value,e.distance=t.distance.value,e.decay=t.decay.value,e.position.set(t.x.value,t.y.value,t.z.value),e.castShadow=!0,e.shadow.bias=-.002,e.shadow.normalBias=.02,On[t.guid.value]&&t.helper.value?(n=On[t.guid.value],n.update()):t.helper.value&&(n=new FM(e,.5),Ut.add(n)),Ft[t.guid.value]=e,n&&(On[t.guid.value]=n)}function JP(t){let e,n;Ft[t.guid.value]?(e=Ft[t.guid.value],Ut.remove(e.target)):(e=new RM,Ut.add(e));let i=t.color.value;i=i.replace("#","0x"),i=parseInt(i),e.color.set(i),e.intensity=t.intensity.value,e.distance=t.distance.value,e.angle=t.angle.value,e.penumbra=t.penumbra.value,e.decay=t.decay.value,e.position.set(t.x.value,t.y.value,t.z.value);const r=new Rt;r.position.set(t.tx.value,t.ty.value,t.tz.value),Ut.add(r),e.target=r,Ut.remove(r),e.castShadow=!0,e.shadow.bias=-.002,e.shadow.normalBias=.02,On[t.guid.value]&&t.helper.value?(n=On[t.guid.value],n.update()):t.helper.value&&(n=new OM(e),Ut.add(n)),Ft[t.guid.value]=e,n&&(On[t.guid.value]=n)}function YP(t){let e,n;Ft[t.guid.value]?e=Ft[t.guid.value]:(e=new NM,Ut.add(e));let i=t.color.value;i=i.replace("#","0x"),i=parseInt(i),e.color.set(i),e.intensity=t.intensity.value,e.width=t.width.value,e.height=t.height.value,e.position.set(t.x.value,t.y.value,t.z.value),e.lookAt(t.tx.value,t.ty.value,t.tz.value),On[t.guid.value]&&t.helper.value?n=On[t.guid.value]:t.helper.value&&(n=new XP(e),Ut.add(n)),Ft[t.guid.value]=e,n&&(On[t.guid.value]=n)}function $P(t){let e,n;Ft[t.guid.value]?e=Ft[t.guid.value]:(e=new L0,Ut.add(e));let i=t.color.value;if(i=i.replace("#","0x"),i=parseInt(i),e.color.set(i),e.intensity=t.intensity.value,e.position.set(t.x.value,t.y.value,t.z.value),e.target.position.set(t.tx.value,t.ty.value,t.tz.value),e.castShadow=!0,On[t.guid.value]&&t.helper.value)n=On[t.guid.value],n.update();else if(t.helper.value){const r=new BM(e);Ut.add(r)}Ft[t.guid.value]=e,n&&(On[t.guid.value]=n)}function KP(t){let e,n,i;Ft[t.guid.value]?(e=Ft[t.guid.value],n=Ft[t.guid.value+"_sun"],i=Ft[t.guid.value+"_ambient"]):(e=new fl,n=new L0(16777215,1),i=new I0(16777215,.6),Ut.add(e),Ut.add(n),Ut.add(i)),e.scale.setScalar(1e3),e.material.uniforms.turbidity.value=t.turbidity.value,e.material.uniforms.rayleigh.value=t.rayleigh.value,e.material.uniforms.mieCoefficient.value=t.mie_coefficient.value,e.material.uniforms.mieDirectionalG.value=t.mie_directional_g.value;let r=new O;const s=Eu.degToRad(90-t.elevation.value),o=Eu.degToRad(t.azimuth.value);r.setFromSphericalCoords(1,s,o),e.material.uniforms.sunPosition.value=r,n.position.copy(e.material.uniforms.sunPosition.value),n.color.copy(lm(t.elevation.value)),i.color.copy(lm(t.elevation.value)).multiplyScalar(.6),Ft[t.guid.value]=e,Ft[t.guid.value+"_sun"]=n,Ft[t.guid.value+"_ambient"]=i}function lm(t){if(t>10)return new $e(16777215);if(t>0){const e=t/10;return new $e(16777164).lerp(new $e(16777215),e)}if(t>-5){const e=(t+5)/5;return new $e(16764006).lerp(new $e(16777164),e)}return new $e(16764006)}function ZP(t){let e;Ft[t.guid.value]?e=Ft[t.guid.value]:(e=new I0,Ut.add(e));let n=t.color.value;n=n.replace("#","0x"),n=parseInt(n),e.color.set(n),e.intensity=t.intensity.value,e.color.needsUpdate=!0,console.log(t.intensity.value)}const Eo={},id={};function cm(t){let e;switch(t.type.value){case"standard_material":e=QP(t);break;case"line_material":e=jP(t);break}id[t.guid.value]=e,Eo[t.geometry_guid.value]=t.guid.value,iR(t.geometry_guid.value,e)}function QP(t){let e=t.color.value;e=e.replace("#","0x");let n=t.emissive.value;return n=n.replace("#","0x"),new Do({color:parseInt(e),metalness:t.metalness.value,roughness:t.roughness.value,emissive:parseInt(n),emissiveIntensity:t.emissive_intensity.value,flatShading:t.flat_shading.value,wireframe:t.wireframe.value,side:bn})}function jP(t){let e=t.color.value;return e=e.replace("#","0x"),new pi({color:parseInt(e)})}const Ar={};function eR(t){const e=t.guid;if(console.log("geometry manager",t),e in Ar){const i=Ar[e];Ut.remove(i),delete Ar[e]}const n=t.buildGeometry();tR(n,e)}function tR(t,e){t instanceof dt?nR(t,e):(Ut.add(t),Ar[e]=t)}function nR(t,e){let n;if(Eo[e]){const r=Eo[e];n=id[r]}else n=new Do({color:39423,side:bn});const i=new $t(t,n);Ut.add(i),Ar[e]=i}function iR(t,e){const n=Ar[t];n&&(n.material=e)}class rR extends Yf{constructor(e,n={}){const i=n.font;if(i===void 0)super();else{const r=i.generateShapes(e,n.size,n.direction);n.depth===void 0&&(n.depth=50),n.bevelThickness===void 0&&(n.bevelThickness=10),n.bevelSize===void 0&&(n.bevelSize=8),n.bevelEnabled===void 0&&(n.bevelEnabled=!1),super(r,n)}this.type="TextGeometry"}}class sR extends Kf{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new CM(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));n&&n(l)},i,r)}parse(e){return new oR(e)}}class oR{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,n=100,i="ltr"){const r=[],s=aR(e,n,this.data,i);for(let o=0,a=s.length;o<a;o++)r.push(...s[o].toShapes());return r}}function aR(t,e,n,i){const r=Array.from(t),s=e/n.resolution,o=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*s,a=[];let l=0,c=0;(i=="rtl"||i=="tb")&&r.reverse();for(let u=0;u<r.length;u++){const f=r[u];if(f===`
`)l=0,c-=o;else{const d=lR(f,s,l,c,n);i=="tb"?(l=0,c+=n.ascender*s):l+=d.offsetX,a.push(d.path)}}return a}function lR(t,e,n,i,r){const s=r.glyphs[t]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}const o=new VM;let a,l,c,u,f,d,p,g;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,h=v.length;m<h;)switch(v[m++]){case"m":a=v[m++]*e+n,l=v[m++]*e+i,o.moveTo(a,l);break;case"l":a=v[m++]*e+n,l=v[m++]*e+i,o.lineTo(a,l);break;case"q":c=v[m++]*e+n,u=v[m++]*e+i,f=v[m++]*e+n,d=v[m++]*e+i,o.quadraticCurveTo(f,d,c,u);break;case"b":c=v[m++]*e+n,u=v[m++]*e+i,f=v[m++]*e+n,d=v[m++]*e+i,p=v[m++]*e+n,g=v[m++]*e+i,o.bezierCurveTo(f,d,p,g,c,u);break}}return{offsetX:s.ha*e,path:o}}function cR(t){t.type.value==="text_geometry"&&fR(t)}const gc={};async function uR(t,e){const n=`${t}_${e}`;if(gc[n])return gc[n];const i=new sR,r=`/fonts/${n}.typeface.json`;return new Promise((s,o)=>{i.load(r,a=>{gc[n]=a,s(a)},void 0,a=>o(a))})}async function fR(t){const e=t.text.value,n="helvetiker",i=t.weight.value,r=t.depth.value,s=t.size.value,o=await uR(n,i),a=new rR(e,{font:o,size:s,depth:r});let l;if(Eo[t.guid.value]){const b=Eo[t.guid.value];l=id[b]}else l=new Do({color:65535,side:bn});let c;t.centered.value?(a.computeBoundingBox(),c=-.5*(a.boundingBox.max.x-a.boundingBox.min.x)):c=0;const u=new O(t.point_x.value,t.point_y.value,t.point_z.value),f=new O(t.direction_x.value,t.direction_y.value,t.direction_z.value),d=new O(t.up_x.value,t.up_y.value,t.up_z.value),p=new O().crossVectors(f,d).normalize(),g=f.clone().normalize(),v=d.clone().normalize(),m=new mt().makeBasis(g,v,p);m.setPosition(u);const h=new $t(a,l);h.position.x=c,h.applyMatrix4(m),Ar[t.guid.value]=h,Ut.add(h)}function dR(t){H0(t);const e=wP(t);if(e instanceof V0){hR(e);return}else eR(e)}function hR(t){const e=t.data.items;switch(e.dispatch.value){case"material":cm(e);break;case"light":am(e);break;case"scene":GP(e);break;case"ui":vR(e);break;case"text":cR(e);break;default:console.warn("Unknown dispatch value:",e.dispatch.value)}e.dispatch.value=="material"?cm(e):e.dispatch.value=="light"&&am(e)}let Ci=null;function pR(){const t=()=>{Ci=new WebSocket("ws://127.0.0.1:9001/ws"),Ci.binaryType="arraybuffer",Ci.onopen=()=>{sessionStorage.getItem("reloaded")||(sessionStorage.setItem("reloaded","true"),window.location.reload())},Ci.onmessage=e=>{if(e.data instanceof ArrayBuffer){const n=new Uint8Array(e.data);dR(n)}else console.warn("❓ Received non-binary data:",e.data)},Ci.onerror=e=>{console.error("WebSocket error:",e)},Ci.onclose=()=>{sessionStorage.removeItem("reloaded"),setTimeout(t,1e3)}};t()}function mR(t){Ci&&Ci.readyState===WebSocket.OPEN?Ci.send(t):console.error("WebSocket is not open. Unable to send message.")}function gR(t){try{const e=JSON.stringify(t),n=_R(e);mR(n)}catch{}}function _R(t){return new TextEncoder().encode(t).buffer}const rd=ms([]);function vR(t){const e=t.type.value;switch(e){case"button":xR(t);break;case"slider":yR(t);break;default:console.warn("Unknown component type:",e)}}function xR(t){const e={id:Date.now(),component:"Button",label:t.label?.value,props:{text:t.text.value,variant:t.variant.value},action:t.guid.value};rd.push(e)}function yR(t){const e={id:Date.now(),component:"Slider",label:t.label?.value,props:{min:t.min.value,max:t.max.value,step:t.step.value,defaultValue:[t.default_value.value]},action:t.guid.value};rd.push(e)}function um(t,e){const n={action:t};e!==void 0&&(n.value=e),gR(n)}const SR={class:"fixed-sidebar"},bR={key:0,class:"dynamic-label"},MR={key:2,class:"slider-container"},ER={key:0,class:"slider-value"},TR=Wt({__name:"Sidebar",setup(t){return(e,n)=>(gt(),jn("div",SR,[(gt(!0),jn(Yt,null,Yu(Se(rd),i=>(gt(),jn("div",{key:i.id,class:"dynamic-item"},[i.label?(gt(),jn("label",bR,va(i.label),1)):no("",!0),i.component==="Button"?(gt(),Bt(Se(nS),{key:1,variant:i.props.variant,onClick:r=>Se(um)(i.action)},{default:on(()=>[mg(va(i.props.text),1)]),_:2},1032,["variant","onClick"])):i.component==="Slider"?(gt(),jn("div",MR,[Gt(Se(rS),{min:i.props.min,max:i.props.max,step:i.props.step,"default-value":i.props.defaultValue,modelValue:i.props.defaultValue,"onUpdate:modelValue":[r=>i.props.defaultValue=r,r=>Se(um)(i.action,r)],class:"w-[80%]"},null,8,["min","max","step","default-value","modelValue","onUpdate:modelValue"]),i.props.defaultValue?(gt(),jn("span",ER,va(i.props.defaultValue[0]),1)):no("",!0)])):no("",!0)]))),128))]))}}),wR=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},AR=wR(TR,[["__scopeId","data-v-64cf3b8c"]]),CR=Wt({__name:"App",setup(t){const e=rn(null);return Ao(()=>{e.value&&(e.value.appendChild(In.domElement),pR())}),(n,i)=>(gt(),jn(Yt,null,[Gt(AR),Zu("div",{ref_key:"threeContainer",ref:e,class:"three-container"},null,512)],64))}}),PR=yx(CR);PR.mount("#app");
