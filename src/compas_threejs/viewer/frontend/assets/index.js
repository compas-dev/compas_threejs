(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Eh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pt={},Ls=[],Mi=()=>{},bg=()=>!1,Ul=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Th=t=>t.startsWith("onUpdate:"),un=Object.assign,Ah=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mv=Object.prototype.hasOwnProperty,vt=(t,e)=>mv.call(t,e),$e=Array.isArray,Ns=t=>na(t)==="[object Map]",Ol=t=>na(t)==="[object Set]",ld=t=>na(t)==="[object Date]",je=t=>typeof t=="function",Jt=t=>typeof t=="string",oi=t=>typeof t=="symbol",xt=t=>t!==null&&typeof t=="object",Sg=t=>(xt(t)||je(t))&&je(t.then)&&je(t.catch),Mg=Object.prototype.toString,na=t=>Mg.call(t),gv=t=>na(t).slice(8,-1),wg=t=>na(t)==="[object Object]",Fl=t=>Jt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Io=Eh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),kl=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},_v=/-\w/g,Fn=kl(t=>t.replace(_v,e=>e.slice(1).toUpperCase())),vv=/\B([A-Z])/g,ss=kl(t=>t.replace(vv,"-$1").toLowerCase()),Bl=kl(t=>t.charAt(0).toUpperCase()+t.slice(1)),el=kl(t=>t?`on${Bl(t)}`:""),wr=(t,e)=>!Object.is(t,e),tl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Eg=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Tg=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let cd;const zl=()=>cd||(cd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function eo(t){if($e(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Jt(i)?Sv(i):eo(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Jt(t)||xt(t))return t}const xv=/;(?![^(]*\))/g,yv=/:([^]+)/,bv=/\/\*[^]*?\*\//g;function Sv(t){const e={};return t.replace(bv,"").split(xv).forEach(n=>{if(n){const i=n.split(yv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Gn(t){let e="";if(Jt(t))e=t;else if($e(t))for(let n=0;n<t.length;n++){const i=Gn(t[n]);i&&(e+=i+" ")}else if(xt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Mv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wv=Eh(Mv);function Ag(t){return!!t||t===""}function Ev(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=ia(t[i],e[i]);return n}function ia(t,e){if(t===e)return!0;let n=ld(t),i=ld(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=oi(t),i=oi(e),n||i)return t===e;if(n=$e(t),i=$e(e),n||i)return n&&i?Ev(t,e):!1;if(n=xt(t),i=xt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ia(t[o],e[o]))return!1}}return String(t)===String(e)}function Tv(t,e){return t.findIndex(n=>ia(n,e))}const Cg=t=>!!(t&&t.__v_isRef===!0),ii=t=>Jt(t)?t:t==null?"":$e(t)||xt(t)&&(t.toString===Mg||!je(t.toString))?Cg(t)?ii(t.value):JSON.stringify(t,Pg,2):String(t),Pg=(t,e)=>Cg(e)?Pg(t,e.value):Ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[rc(i,s)+" =>"]=r,n),{})}:Ol(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>rc(n))}:oi(e)?rc(e):xt(e)&&!$e(e)&&!wg(e)?String(e):e,rc=(t,e="")=>{var n;return oi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Ln;class Av{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ln,!e&&Ln&&(this.index=(Ln.scopes||(Ln.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ln;try{return Ln=this,e()}finally{Ln=n}}}on(){++this._on===1&&(this.prevScope=Ln,Ln=this)}off(){this._on>0&&--this._on===0&&(Ln=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Cv(){return Ln}let It;const sc=new WeakSet;class Rg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ln&&Ln.active&&Ln.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,sc.has(this)&&(sc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ig(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ud(this),Lg(this);const e=It,n=si;It=this,si=!0;try{return this.fn()}finally{Ng(this),It=e,si=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Rh(e);this.deps=this.depsTail=void 0,ud(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?sc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){lu(this)&&this.run()}get dirty(){return lu(this)}}let Dg=0,Lo,No;function Ig(t,e=!1){if(t.flags|=8,e){t.next=No,No=t;return}t.next=Lo,Lo=t}function Ch(){Dg++}function Ph(){if(--Dg>0)return;if(No){let e=No;for(No=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Lo;){let e=Lo;for(Lo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Lg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ng(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Rh(i),Pv(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function lu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ug(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ug(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ho)||(t.globalVersion=Ho,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!lu(t))))return;t.flags|=2;const e=t.dep,n=It,i=si;It=t,si=!0;try{Lg(t);const r=t.fn(t._value);(e.version===0||wr(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{It=n,si=i,Ng(t),t.flags&=-3}}function Rh(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Rh(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Pv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let si=!0;const Og=[];function Qi(){Og.push(si),si=!1}function ji(){const t=Og.pop();si=t===void 0?!0:t}function ud(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=It;It=void 0;try{e()}finally{It=n}}}let Ho=0;class Rv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Dh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!It||!si||It===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==It)n=this.activeLink=new Rv(It,this),It.deps?(n.prevDep=It.depsTail,It.depsTail.nextDep=n,It.depsTail=n):It.deps=It.depsTail=n,Fg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=It.depsTail,n.nextDep=void 0,It.depsTail.nextDep=n,It.depsTail=n,It.deps===n&&(It.deps=i)}return n}trigger(e){this.version++,Ho++,this.notify(e)}notify(e){Ch();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ph()}}}function Fg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Fg(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const gl=new WeakMap,Zr=Symbol(""),cu=Symbol(""),Go=Symbol("");function pn(t,e,n){if(si&&It){let i=gl.get(t);i||gl.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Dh),r.map=i,r.key=n),r.track()}}function Yi(t,e,n,i,r,s){const o=gl.get(t);if(!o){Ho++;return}const a=l=>{l&&l.trigger()};if(Ch(),e==="clear")o.forEach(a);else{const l=$e(t),c=l&&Fl(n);if(l&&n==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Go||!oi(f)&&f>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Go)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Zr)),Ns(t)&&a(o.get(cu)));break;case"delete":l||(a(o.get(Zr)),Ns(t)&&a(o.get(cu)));break;case"set":Ns(t)&&a(o.get(Zr));break}}Ph()}function Dv(t,e){const n=gl.get(t);return n&&n.get(e)}function hs(t){const e=_t(t);return e===t?e:(pn(e,"iterate",Go),Jn(t)?e:e.map(ai))}function Vl(t){return pn(t=_t(t),"iterate",Go),t}function dr(t,e){return er(t)?Ws(Qr(t)?ai(e):e):ai(e)}const Iv={__proto__:null,[Symbol.iterator](){return oc(this,Symbol.iterator,t=>dr(this,t))},concat(...t){return hs(this).concat(...t.map(e=>$e(e)?hs(e):e))},entries(){return oc(this,"entries",t=>(t[1]=dr(this,t[1]),t))},every(t,e){return Ui(this,"every",t,e,void 0,arguments)},filter(t,e){return Ui(this,"filter",t,e,n=>n.map(i=>dr(this,i)),arguments)},find(t,e){return Ui(this,"find",t,e,n=>dr(this,n),arguments)},findIndex(t,e){return Ui(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ui(this,"findLast",t,e,n=>dr(this,n),arguments)},findLastIndex(t,e){return Ui(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ui(this,"forEach",t,e,void 0,arguments)},includes(...t){return ac(this,"includes",t)},indexOf(...t){return ac(this,"indexOf",t)},join(t){return hs(this).join(t)},lastIndexOf(...t){return ac(this,"lastIndexOf",t)},map(t,e){return Ui(this,"map",t,e,void 0,arguments)},pop(){return uo(this,"pop")},push(...t){return uo(this,"push",t)},reduce(t,...e){return hd(this,"reduce",t,e)},reduceRight(t,...e){return hd(this,"reduceRight",t,e)},shift(){return uo(this,"shift")},some(t,e){return Ui(this,"some",t,e,void 0,arguments)},splice(...t){return uo(this,"splice",t)},toReversed(){return hs(this).toReversed()},toSorted(t){return hs(this).toSorted(t)},toSpliced(...t){return hs(this).toSpliced(...t)},unshift(...t){return uo(this,"unshift",t)},values(){return oc(this,"values",t=>dr(this,t))}};function oc(t,e,n){const i=Vl(t),r=i[e]();return i!==t&&!Jn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const Lv=Array.prototype;function Ui(t,e,n,i,r,s){const o=Vl(t),a=o!==t&&!Jn(t),l=o[e];if(l!==Lv[e]){const h=l.apply(t,s);return a?ai(h):h}let c=n;o!==t&&(a?c=function(h,f){return n.call(this,dr(t,h),f,t)}:n.length>2&&(c=function(h,f){return n.call(this,h,f,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function hd(t,e,n,i){const r=Vl(t);let s=n;return r!==t&&(Jn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,dr(t,a),l,t)}),r[e](s,...i)}function ac(t,e,n){const i=_t(t);pn(i,"iterate",Go);const r=i[e](...n);return(r===-1||r===!1)&&Hl(n[0])?(n[0]=_t(n[0]),i[e](...n)):r}function uo(t,e,n=[]){Qi(),Ch();const i=_t(t)[e].apply(t,n);return Ph(),ji(),i}const Nv=Eh("__proto__,__v_isRef,__isVue"),kg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(oi));function Uv(t){oi(t)||(t=String(t));const e=_t(this);return pn(e,"has",t),e.hasOwnProperty(t)}class Bg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Xv:Gg:s?Hg:Vg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=$e(e);if(!r){let l;if(o&&(l=Iv[n]))return l;if(n==="hasOwnProperty")return Uv}const a=Reflect.get(e,n,qt(e)?e:i);if((oi(n)?kg.has(n):Nv(n))||(r||pn(e,"get",n),s))return a;if(qt(a)){const l=o&&Fl(n)?a:a.value;return r&&xt(l)?hu(l):l}return xt(a)?r?hu(a):On(a):a}}class zg extends Bg{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const o=$e(e)&&Fl(n);if(!this._isShallow){const c=er(s);if(!Jn(i)&&!er(i)&&(s=_t(s),i=_t(i)),!o&&qt(s)&&!qt(i))return c||(s.value=i),!0}const a=o?Number(n)<e.length:vt(e,n),l=Reflect.set(e,n,i,qt(e)?e:r);return e===_t(r)&&(a?wr(i,s)&&Yi(e,"set",n,i):Yi(e,"add",n,i)),l}deleteProperty(e,n){const i=vt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Yi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!oi(n)||!kg.has(n))&&pn(e,"has",n),i}ownKeys(e){return pn(e,"iterate",$e(e)?"length":Zr),Reflect.ownKeys(e)}}class Ov extends Bg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Fv=new zg,kv=new Ov,Bv=new zg(!0);const uu=t=>t,pa=t=>Reflect.getPrototypeOf(t);function zv(t,e,n){return function(...i){const r=this.__v_raw,s=_t(r),o=Ns(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?uu:e?Ws:ai;return!e&&pn(s,"iterate",l?cu:Zr),un(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function ma(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Vv(t,e){const n={get(r){const s=this.__v_raw,o=_t(s),a=_t(r);t||(wr(r,a)&&pn(o,"get",r),pn(o,"get",a));const{has:l}=pa(o),c=e?uu:t?Ws:ai;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&pn(_t(r),"iterate",Zr),r.size},has(r){const s=this.__v_raw,o=_t(s),a=_t(r);return t||(wr(r,a)&&pn(o,"has",r),pn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=_t(a),c=e?uu:t?Ws:ai;return!t&&pn(l,"iterate",Zr),a.forEach((u,h)=>r.call(s,c(u),c(h),o))}};return un(n,t?{add:ma("add"),set:ma("set"),delete:ma("delete"),clear:ma("clear")}:{add(r){!e&&!Jn(r)&&!er(r)&&(r=_t(r));const s=_t(this);return pa(s).has.call(s,r)||(s.add(r),Yi(s,"add",r,r)),this},set(r,s){!e&&!Jn(s)&&!er(s)&&(s=_t(s));const o=_t(this),{has:a,get:l}=pa(o);let c=a.call(o,r);c||(r=_t(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?wr(s,u)&&Yi(o,"set",r,s):Yi(o,"add",r,s),this},delete(r){const s=_t(this),{has:o,get:a}=pa(s);let l=o.call(s,r);l||(r=_t(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Yi(s,"delete",r,void 0),c},clear(){const r=_t(this),s=r.size!==0,o=r.clear();return s&&Yi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=zv(r,t,e)}),n}function Ih(t,e){const n=Vv(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(vt(n,r)&&r in i?n:i,r,s)}const Hv={get:Ih(!1,!1)},Gv={get:Ih(!1,!0)},Wv={get:Ih(!0,!1)};const Vg=new WeakMap,Hg=new WeakMap,Gg=new WeakMap,Xv=new WeakMap;function qv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yv(t){return t.__v_skip||!Object.isExtensible(t)?0:qv(gv(t))}function On(t){return er(t)?t:Lh(t,!1,Fv,Hv,Vg)}function Jv(t){return Lh(t,!1,Bv,Gv,Hg)}function hu(t){return Lh(t,!0,kv,Wv,Gg)}function Lh(t,e,n,i,r){if(!xt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=Yv(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function Qr(t){return er(t)?Qr(t.__v_raw):!!(t&&t.__v_isReactive)}function er(t){return!!(t&&t.__v_isReadonly)}function Jn(t){return!!(t&&t.__v_isShallow)}function Hl(t){return t?!!t.__v_raw:!1}function _t(t){const e=t&&t.__v_raw;return e?_t(e):t}function Wg(t){return!vt(t,"__v_skip")&&Object.isExtensible(t)&&Eg(t,"__v_skip",!0),t}const ai=t=>xt(t)?On(t):t,Ws=t=>xt(t)?hu(t):t;function qt(t){return t?t.__v_isRef===!0:!1}function Wt(t){return Xg(t,!1)}function $v(t){return Xg(t,!0)}function Xg(t,e){return qt(t)?t:new Kv(t,e)}class Kv{constructor(e,n){this.dep=new Dh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:_t(e),this._value=n?e:ai(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Jn(e)||er(e);e=i?e:_t(e),wr(e,n)&&(this._rawValue=e,this._value=i?e:ai(e),this.dep.trigger())}}function ve(t){return qt(t)?t.value:t}function Nh(t){return je(t)?t():ve(t)}const Zv={get:(t,e,n)=>e==="__v_raw"?t:ve(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return qt(r)&&!qt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function qg(t){return Qr(t)?t:new Proxy(t,Zv)}function Wo(t){const e=$e(t)?new Array(t.length):{};for(const n in t)e[n]=Yg(t,n);return e}class Qv{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=_t(e);let r=!0,s=e;if(!$e(e)||!Fl(String(n)))do r=!Hl(s)||Jn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=ve(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&qt(this._raw[this._key])){const n=this._object[this._key];if(qt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Dv(this._raw,this._key)}}class jv{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function ex(t,e,n){return qt(t)?t:je(t)?new jv(t):xt(t)&&arguments.length>1?Yg(t,e,n):Wt(t)}function Yg(t,e,n){return new Qv(t,e,n)}class tx{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Dh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ho-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&It!==this)return Ig(this,!0),!0}get value(){const e=this.dep.track();return Ug(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function nx(t,e,n=!1){let i,r;return je(t)?i=t:(i=t.get,r=t.set),new tx(i,r,n)}const ga={},_l=new WeakMap;let Wr;function ix(t,e=!1,n=Wr){if(n){let i=_l.get(n);i||_l.set(n,i=[]),i.push(t)}}function rx(t,e,n=Pt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=b=>r?b:Jn(b)||r===!1||r===0?Ji(b,1):Ji(b);let u,h,f,p,g=!1,v=!1;if(qt(t)?(h=()=>t.value,g=Jn(t)):Qr(t)?(h=()=>c(t),g=!0):$e(t)?(v=!0,g=t.some(b=>Qr(b)||Jn(b)),h=()=>t.map(b=>{if(qt(b))return b.value;if(Qr(b))return c(b);if(je(b))return l?l(b,2):b()})):je(t)?e?h=l?()=>l(t,2):t:h=()=>{if(f){Qi();try{f()}finally{ji()}}const b=Wr;Wr=u;try{return l?l(t,3,[p]):t(p)}finally{Wr=b}}:h=Mi,e&&r){const b=h,T=r===!0?1/0:r;h=()=>Ji(b(),T)}const m=Cv(),d=()=>{u.stop(),m&&m.active&&Ah(m.effects,u)};if(s&&e){const b=e;e=(...T)=>{b(...T),d()}}let _=v?new Array(t.length).fill(ga):ga;const y=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const T=u.run();if(r||g||(v?T.some((C,D)=>wr(C,_[D])):wr(T,_))){f&&f();const C=Wr;Wr=u;try{const D=[T,_===ga?void 0:v&&_[0]===ga?[]:_,p];_=T,l?l(e,3,D):e(...D)}finally{Wr=C}}}else u.run()};return a&&a(y),u=new Rg(h),u.scheduler=o?()=>o(y,!1):y,p=b=>ix(b,!1,u),f=u.onStop=()=>{const b=_l.get(u);if(b){if(l)l(b,4);else for(const T of b)T();_l.delete(u)}},e?i?y(!0):_=u.run():o?o(y.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Ji(t,e=1/0,n){if(e<=0||!xt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,qt(t))Ji(t.value,e,n);else if($e(t))for(let i=0;i<t.length;i++)Ji(t[i],e,n);else if(Ol(t)||Ns(t))t.forEach(i=>{Ji(i,e,n)});else if(wg(t)){for(const i in t)Ji(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ji(t[i],e,n)}return t}function ra(t,e,n,i){try{return i?t(...i):t()}catch(r){Gl(r,e,n)}}function Ai(t,e,n,i){if(je(t)){const r=ra(t,e,n,i);return r&&Sg(r)&&r.catch(s=>{Gl(s,e,n)}),r}if($e(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Ai(t[s],e,n,i));return r}}function Gl(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Pt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(s){Qi(),ra(s,null,10,[t,l,c]),ji();return}}sx(t,n,r,i,o)}function sx(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const wn=[];let gi=-1;const Us=[];let pr=null,As=0;const Jg=Promise.resolve();let vl=null;function Uh(t){const e=vl||Jg;return t?e.then(this?t.bind(this):t):e}function ox(t){let e=gi+1,n=wn.length;for(;e<n;){const i=e+n>>>1,r=wn[i],s=Xo(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Oh(t){if(!(t.flags&1)){const e=Xo(t),n=wn[wn.length-1];!n||!(t.flags&2)&&e>=Xo(n)?wn.push(t):wn.splice(ox(e),0,t),t.flags|=1,$g()}}function $g(){vl||(vl=Jg.then(Zg))}function ax(t){$e(t)?Us.push(...t):pr&&t.id===-1?pr.splice(As+1,0,t):t.flags&1||(Us.push(t),t.flags|=1),$g()}function fd(t,e,n=gi+1){for(;n<wn.length;n++){const i=wn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;wn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Kg(t){if(Us.length){const e=[...new Set(Us)].sort((n,i)=>Xo(n)-Xo(i));if(Us.length=0,pr){pr.push(...e);return}for(pr=e,As=0;As<pr.length;As++){const n=pr[As];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}pr=null,As=0}}const Xo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Zg(t){try{for(gi=0;gi<wn.length;gi++){const e=wn[gi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ra(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gi<wn.length;gi++){const e=wn[gi];e&&(e.flags&=-2)}gi=-1,wn.length=0,Kg(),vl=null,(wn.length||Us.length)&&Zg()}}let ln=null,Qg=null;function xl(t){const e=ln;return ln=t,Qg=t&&t.type.__scopeId||null,e}function en(t,e=ln,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Sl(-1);const s=xl(e);let o;try{o=t(...r)}finally{xl(s),i._d&&Sl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function lx(t,e){if(ln===null)return t;const n=Yl(ln),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Pt]=e[r];s&&(je(s)&&(s={mounted:s,updated:s}),s.deep&&Ji(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Nr(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Qi(),Ai(l,n,8,[t.el,a,t,e]),ji())}}function Fh(t,e){if(mn){let n=mn.provides;const i=mn.parent&&mn.parent.provides;i===n&&(n=mn.provides=Object.create(i)),n[t]=e}}function Os(t,e,n=!1){const i=no();if(i||ks){let r=ks?ks._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&je(e)?e.call(i&&i.proxy):e}}const cx=Symbol.for("v-scx"),ux=()=>Os(cx);function hx(t,e){return kh(t,null,e)}function jr(t,e,n){return kh(t,e,n)}function kh(t,e,n=Pt){const{immediate:i,deep:r,flush:s,once:o}=n,a=un({},n),l=e&&i||!e&&s!=="post";let c;if(Jo){if(s==="sync"){const p=ux();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Mi,p.resume=Mi,p.pause=Mi,p}}const u=mn;a.call=(p,g,v)=>Ai(p,u,g,v);let h=!1;s==="post"?a.scheduler=p=>{In(p,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():Oh(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=rx(t,e,a);return Jo&&(c?c.push(f):l&&f()),f}function fx(t,e,n){const i=this.proxy,r=Jt(t)?t.includes(".")?jg(i,t):()=>i[t]:t.bind(i,i);let s;je(e)?s=e:(s=e.handler,n=e);const o=sa(this),a=kh(r,s.bind(i),n);return o(),a}function jg(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const dx=Symbol("_vte"),px=t=>t.__isTeleport,mx=Symbol("_leaveCb");function Bh(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Bh(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Kt(t,e){return je(t)?un({name:t.name},e,{setup:t}):t}function e0(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function dd(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const yl=new WeakMap;function Uo(t,e,n,i,r=!1){if($e(t)){t.forEach((v,m)=>Uo(v,e&&($e(e)?e[m]:e),n,i,r));return}if(Fs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Uo(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Yl(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Pt?a.refs={}:a.refs,h=a.setupState,f=_t(h),p=h===Pt?bg:v=>dd(u,v)?!1:vt(f,v),g=(v,m)=>!(m&&dd(u,m));if(c!=null&&c!==l){if(pd(e),Jt(c))u[c]=null,p(c)&&(h[c]=null);else if(qt(c)){const v=e;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(je(l))ra(l,a,12,[o,u]);else{const v=Jt(l),m=qt(l);if(v||m){const d=()=>{if(t.f){const _=v?p(l)?h[l]:u[l]:g()||!t.k?l.value:u[t.k];if(r)$e(_)&&Ah(_,s);else if($e(_))_.includes(s)||_.push(s);else if(v)u[l]=[s],p(l)&&(h[l]=u[l]);else{const y=[s];g(l,t.k)&&(l.value=y),t.k&&(u[t.k]=y)}}else v?(u[l]=o,p(l)&&(h[l]=o)):m&&(g(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const _=()=>{d(),yl.delete(t)};_.id=-1,yl.set(t,_),In(_,n)}else pd(t),d()}}}function pd(t){const e=yl.get(t);e&&(e.flags|=8,yl.delete(t))}zl().requestIdleCallback;zl().cancelIdleCallback;const Fs=t=>!!t.type.__asyncLoader,t0=t=>t.type.__isKeepAlive;function gx(t,e){n0(t,"a",e)}function _x(t,e){n0(t,"da",e)}function n0(t,e,n=mn){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Wl(e,i,n),n){let r=n.parent;for(;r&&r.parent;)t0(r.parent.vnode)&&vx(i,e,n,r),r=r.parent}}function vx(t,e,n,i){const r=Wl(e,t,i,!0);Vh(()=>{Ah(i[e],r)},n)}function Wl(t,e,n=mn,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Qi();const a=sa(n),l=Ai(e,n,t,o);return a(),ji(),l});return i?r.unshift(s):r.push(s),s}}const rr=t=>(e,n=mn)=>{(!Jo||t==="sp")&&Wl(t,(...i)=>e(...i),n)},xx=rr("bm"),to=rr("m"),yx=rr("bu"),bx=rr("u"),zh=rr("bum"),Vh=rr("um"),Sx=rr("sp"),Mx=rr("rtg"),wx=rr("rtc");function Ex(t,e=mn){Wl("ec",t,e)}const Tx="components",i0=Symbol.for("v-ndc");function nl(t){return Jt(t)?Ax(Tx,t,!1)||t:t||i0}function Ax(t,e,n=!0,i=!1){const r=ln||mn;if(r){const s=r.type;{const a=uy(s,!1);if(a&&(a===e||a===Fn(e)||a===Bl(Fn(e))))return s}const o=md(r[t]||s[t],e)||md(r.appContext[t],e);return!o&&i?s:o}}function md(t,e){return t&&(t[e]||t[Fn(e)]||t[Bl(Fn(e))])}function Sr(t,e,n,i){let r;const s=n,o=$e(t);if(o||Jt(t)){const a=o&&Qr(t);let l=!1,c=!1;a&&(l=!Jn(t),c=er(t),t=Vl(t)),r=new Array(t.length);for(let u=0,h=t.length;u<h;u++)r[u]=e(l?c?Ws(ai(t[u])):ai(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(xt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}function Di(t,e,n={},i,r){if(ln.ce||ln.parent&&Fs(ln.parent)&&ln.parent.ce){const c=Object.keys(n).length>0;return Ye(),Nt(kt,null,[Xt("slot",n,i)],c?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),Ye();const o=s&&r0(s(n)),a=n.key||o&&o.key,l=Nt(kt,{key:(a&&!oi(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function r0(t){return t.some(e=>Yo(e)?!(e.type===Ci||e.type===kt&&!r0(e.children)):!0)?t:null}const fu=t=>t?w0(t)?Yl(t):fu(t.parent):null,Oo=un(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fu(t.parent),$root:t=>fu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>o0(t),$forceUpdate:t=>t.f||(t.f=()=>{Oh(t.update)}),$nextTick:t=>t.n||(t.n=Uh.bind(t.proxy)),$watch:t=>fx.bind(t)}),lc=(t,e)=>t!==Pt&&!t.__isScriptSetup&&vt(t,e),Cx={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(lc(i,e))return o[e]=1,i[e];if(r!==Pt&&vt(r,e))return o[e]=2,r[e];if(vt(s,e))return o[e]=3,s[e];if(n!==Pt&&vt(n,e))return o[e]=4,n[e];du&&(o[e]=0)}}const c=Oo[e];let u,h;if(c)return e==="$attrs"&&pn(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Pt&&vt(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,vt(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return lc(r,e)?(r[e]=n,!0):i!==Pt&&vt(i,e)?(i[e]=n,!0):vt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||t!==Pt&&a[0]!=="$"&&vt(t,a)||lc(e,a)||vt(s,a)||vt(i,a)||vt(Oo,a)||vt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:vt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function gd(t){return $e(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let du=!0;function Px(t){const e=o0(t),n=t.proxy,i=t.ctx;du=!1,e.beforeCreate&&_d(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:d,beforeUnmount:_,destroyed:y,unmounted:b,render:T,renderTracked:C,renderTriggered:D,errorCaptured:R,serverPrefetch:S,expose:M,inheritAttrs:L,components:V,directives:q,filters:j}=e;if(c&&Rx(c,i,null),o)for(const k in o){const H=o[k];je(H)&&(i[k]=H.bind(n))}if(r){const k=r.call(n,n);xt(k)&&(t.data=On(k))}if(du=!0,s)for(const k in s){const H=s[k],ce=je(H)?H.bind(n,n):je(H.get)?H.get.bind(n,n):Mi,pe=!je(H)&&je(H.set)?H.set.bind(n):Mi,fe=pt({get:ce,set:pe});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>fe.value,set:ke=>fe.value=ke})}if(a)for(const k in a)s0(a[k],i,n,k);if(l){const k=je(l)?l.call(n):l;Reflect.ownKeys(k).forEach(H=>{Fh(H,k[H])})}u&&_d(u,t,"c");function W(k,H){$e(H)?H.forEach(ce=>k(ce.bind(n))):H&&k(H.bind(n))}if(W(xx,h),W(to,f),W(yx,p),W(bx,g),W(gx,v),W(_x,m),W(Ex,R),W(wx,C),W(Mx,D),W(zh,_),W(Vh,b),W(Sx,S),$e(M))if(M.length){const k=t.exposed||(t.exposed={});M.forEach(H=>{Object.defineProperty(k,H,{get:()=>n[H],set:ce=>n[H]=ce,enumerable:!0})})}else t.exposed||(t.exposed={});T&&t.render===Mi&&(t.render=T),L!=null&&(t.inheritAttrs=L),V&&(t.components=V),q&&(t.directives=q),S&&e0(t)}function Rx(t,e,n=Mi){$e(t)&&(t=pu(t));for(const i in t){const r=t[i];let s;xt(r)?"default"in r?s=Os(r.from||i,r.default,!0):s=Os(r.from||i):s=Os(r),qt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function _d(t,e,n){Ai($e(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function s0(t,e,n,i){let r=i.includes(".")?jg(n,i):()=>n[i];if(Jt(t)){const s=e[t];je(s)&&jr(r,s)}else if(je(t))jr(r,t.bind(n));else if(xt(t))if($e(t))t.forEach(s=>s0(s,e,n,i));else{const s=je(t.handler)?t.handler.bind(n):e[t.handler];je(s)&&jr(r,s,t)}}function o0(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>bl(l,c,o,!0)),bl(l,e,o)),xt(e)&&s.set(e,l),l}function bl(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&bl(t,s,n,!0),r&&r.forEach(o=>bl(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Dx[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Dx={data:vd,props:xd,emits:xd,methods:wo,computed:wo,beforeCreate:bn,created:bn,beforeMount:bn,mounted:bn,beforeUpdate:bn,updated:bn,beforeDestroy:bn,beforeUnmount:bn,destroyed:bn,unmounted:bn,activated:bn,deactivated:bn,errorCaptured:bn,serverPrefetch:bn,components:wo,directives:wo,watch:Lx,provide:vd,inject:Ix};function vd(t,e){return e?t?function(){return un(je(t)?t.call(this,this):t,je(e)?e.call(this,this):e)}:e:t}function Ix(t,e){return wo(pu(t),pu(e))}function pu(t){if($e(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bn(t,e){return t?[...new Set([].concat(t,e))]:e}function wo(t,e){return t?un(Object.create(null),t,e):e}function xd(t,e){return t?$e(t)&&$e(e)?[...new Set([...t,...e])]:un(Object.create(null),gd(t),gd(e??{})):e}function Lx(t,e){if(!t)return e;if(!e)return t;const n=un(Object.create(null),t);for(const i in e)n[i]=bn(t[i],e[i]);return n}function a0(){return{app:null,config:{isNativeTag:bg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nx=0;function Ux(t,e){return function(i,r=null){je(i)||(i=un({},i)),r!=null&&!xt(r)&&(r=null);const s=a0(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Nx++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:fy,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&je(u.install)?(o.add(u),u.install(c,...h)):je(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,f){if(!l){const p=c._ceVNode||Xt(i,r);return p.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),t(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Yl(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ai(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=ks;ks=c;try{return u()}finally{ks=h}}};return c}}let ks=null;const Ox=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Fn(e)}Modifiers`]||t[`${ss(e)}Modifiers`];function Fx(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Pt;let r=n;const s=e.startsWith("update:"),o=s&&Ox(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>Jt(u)?u.trim():u)),o.number&&(r=n.map(Tg)));let a,l=i[a=el(e)]||i[a=el(Fn(e))];!l&&s&&(l=i[a=el(ss(e))]),l&&Ai(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ai(c,t,6,r)}}const kx=new WeakMap;function l0(t,e,n=!1){const i=n?kx:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!je(t)){const l=c=>{const u=l0(c,e,!0);u&&(a=!0,un(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(xt(t)&&i.set(t,null),null):($e(s)?s.forEach(l=>o[l]=null):un(o,s),xt(t)&&i.set(t,o),o)}function Xl(t,e){return!t||!Ul(e)?!1:(e=e.slice(2).replace(/Once$/,""),vt(t,e[0].toLowerCase()+e.slice(1))||vt(t,ss(e))||vt(t,e))}function yd(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:p,ctx:g,inheritAttrs:v}=t,m=xl(t);let d,_;try{if(n.shapeFlag&4){const b=r||i,T=b;d=vi(c.call(T,b,u,h,p,f,g)),_=a}else{const b=e;d=vi(b.length>1?b(h,{attrs:a,slots:o,emit:l}):b(h,null)),_=e.props?a:Bx(a)}}catch(b){Fo.length=0,Gl(b,t,1),d=Xt(Ci)}let y=d;if(_&&v!==!1){const b=Object.keys(_),{shapeFlag:T}=y;b.length&&T&7&&(s&&b.some(Th)&&(_=zx(_,s)),y=ts(y,_,!1,!0))}return n.dirs&&(y=ts(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&Bh(y,n.transition),d=y,xl(m),d}const Bx=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ul(n))&&((e||(e={}))[n]=t[n]);return e},zx=(t,e)=>{const n={};for(const i in t)(!Th(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Vx(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?bd(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(c0(o,i,f)&&!Xl(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?bd(i,o,c):!0:!!o;return!1}function bd(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(c0(e,t,s)&&!Xl(n,s))return!0}return!1}function c0(t,e,n){const i=t[n],r=e[n];return n==="style"&&xt(i)&&xt(r)?!ia(i,r):i!==r}function Hx({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const u0={},h0=()=>Object.create(u0),f0=t=>Object.getPrototypeOf(t)===u0;function Gx(t,e,n,i=!1){const r={},s=h0();t.propsDefaults=Object.create(null),d0(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Jv(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Wx(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=_t(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Xl(t.emitsOptions,f))continue;const p=e[f];if(l)if(vt(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=Fn(f);r[g]=mu(l,a,g,p,t,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{d0(t,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!vt(e,h)&&((u=ss(h))===h||!vt(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=mu(l,a,h,void 0,t,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!vt(e,h))&&(delete s[h],c=!0)}c&&Yi(t.attrs,"set","")}function d0(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Io(l))continue;const c=e[l];let u;r&&vt(r,u=Fn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Xl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=_t(n),c=a||Pt;for(let u=0;u<s.length;u++){const h=s[u];n[h]=mu(r,l,h,c[h],t,!vt(c,h))}}return o}function mu(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=vt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&je(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=sa(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ss(n))&&(i=!0))}return i}const Xx=new WeakMap;function p0(t,e,n=!1){const i=n?Xx:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!je(t)){const u=h=>{l=!0;const[f,p]=p0(h,e,!0);un(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return xt(t)&&i.set(t,Ls),Ls;if($e(s))for(let u=0;u<s.length;u++){const h=Fn(s[u]);Sd(h)&&(o[h]=Pt)}else if(s)for(const u in s){const h=Fn(u);if(Sd(h)){const f=s[u],p=o[h]=$e(f)||je(f)?{type:f}:un({},f),g=p.type;let v=!1,m=!0;if($e(g))for(let d=0;d<g.length;++d){const _=g[d],y=je(_)&&_.name;if(y==="Boolean"){v=!0;break}else y==="String"&&(m=!1)}else v=je(g)&&g.name==="Boolean";p[0]=v,p[1]=m,(v||vt(p,"default"))&&a.push(h)}}const c=[o,a];return xt(t)&&i.set(t,c),c}function Sd(t){return t[0]!=="$"&&!Io(t)}const Hh=t=>t==="_"||t==="_ctx"||t==="$stable",Gh=t=>$e(t)?t.map(vi):[vi(t)],qx=(t,e,n)=>{if(e._n)return e;const i=en((...r)=>Gh(e(...r)),n);return i._c=!1,i},m0=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Hh(r))continue;const s=t[r];if(je(s))e[r]=qx(r,s,i);else if(s!=null){const o=Gh(s);e[r]=()=>o}}},g0=(t,e)=>{const n=Gh(e);t.slots.default=()=>n},_0=(t,e,n)=>{for(const i in e)(n||!Hh(i))&&(t[i]=e[i])},Yx=(t,e,n)=>{const i=t.slots=h0();if(t.vnode.shapeFlag&32){const r=e._;r?(_0(i,e,n),n&&Eg(i,"_",r,!0)):m0(e,i)}else e&&g0(t,e)},Jx=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Pt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:_0(r,e,n):(s=!e.$stable,m0(e,r)),o=e}else e&&(g0(t,e),o={default:1});if(s)for(const a in r)!Hh(a)&&o[a]==null&&delete r[a]},In=jx;function $x(t){return Kx(t)}function Kx(t,e){const n=zl();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Mi,insertStaticContent:g}=t,v=(I,O,U,z=null,F=null,X=null,E=void 0,re=null,Z=!!O.dynamicChildren)=>{if(I===O)return;I&&!ho(I,O)&&(z=oe(I),ke(I,F,X,!0),I=null),O.patchFlag===-2&&(Z=!1,O.dynamicChildren=null);const{type:Q,ref:ie,shapeFlag:w}=O;switch(Q){case ql:m(I,O,U,z);break;case Ci:d(I,O,U,z);break;case uc:I==null&&_(O,U,z,E);break;case kt:V(I,O,U,z,F,X,E,re,Z);break;default:w&1?T(I,O,U,z,F,X,E,re,Z):w&6?q(I,O,U,z,F,X,E,re,Z):(w&64||w&128)&&Q.process(I,O,U,z,F,X,E,re,Z,Me)}ie!=null&&F?Uo(ie,I&&I.ref,X,O||I,!O):ie==null&&I&&I.ref!=null&&Uo(I.ref,null,X,I,!0)},m=(I,O,U,z)=>{if(I==null)i(O.el=a(O.children),U,z);else{const F=O.el=I.el;O.children!==I.children&&c(F,O.children)}},d=(I,O,U,z)=>{I==null?i(O.el=l(O.children||""),U,z):O.el=I.el},_=(I,O,U,z)=>{[I.el,I.anchor]=g(I.children,O,U,z,I.el,I.anchor)},y=({el:I,anchor:O},U,z)=>{let F;for(;I&&I!==O;)F=f(I),i(I,U,z),I=F;i(O,U,z)},b=({el:I,anchor:O})=>{let U;for(;I&&I!==O;)U=f(I),r(I),I=U;r(O)},T=(I,O,U,z,F,X,E,re,Z)=>{if(O.type==="svg"?E="svg":O.type==="math"&&(E="mathml"),I==null)C(O,U,z,F,X,E,re,Z);else{const Q=I.el&&I.el._isVueCE?I.el:null;try{Q&&Q._beginPatch(),S(I,O,F,X,E,re,Z)}finally{Q&&Q._endPatch()}}},C=(I,O,U,z,F,X,E,re)=>{let Z,Q;const{props:ie,shapeFlag:w,transition:x,dirs:N}=I;if(Z=I.el=o(I.type,X,ie&&ie.is,ie),w&8?u(Z,I.children):w&16&&R(I.children,Z,null,z,F,cc(I,X),E,re),N&&Nr(I,null,z,"created"),D(Z,I,I.scopeId,E,z),ie){for(const ne in ie)ne!=="value"&&!Io(ne)&&s(Z,ne,null,ie[ne],X,z);"value"in ie&&s(Z,"value",null,ie.value,X),(Q=ie.onVnodeBeforeMount)&&di(Q,z,I)}N&&Nr(I,null,z,"beforeMount");const Y=Zx(F,x);Y&&x.beforeEnter(Z),i(Z,O,U),((Q=ie&&ie.onVnodeMounted)||Y||N)&&In(()=>{Q&&di(Q,z,I),Y&&x.enter(Z),N&&Nr(I,null,z,"mounted")},F)},D=(I,O,U,z,F)=>{if(U&&p(I,U),z)for(let X=0;X<z.length;X++)p(I,z[X]);if(F){let X=F.subTree;if(O===X||b0(X.type)&&(X.ssContent===O||X.ssFallback===O)){const E=F.vnode;D(I,E,E.scopeId,E.slotScopeIds,F.parent)}}},R=(I,O,U,z,F,X,E,re,Z=0)=>{for(let Q=Z;Q<I.length;Q++){const ie=I[Q]=re?Wi(I[Q]):vi(I[Q]);v(null,ie,O,U,z,F,X,E,re)}},S=(I,O,U,z,F,X,E)=>{const re=O.el=I.el;let{patchFlag:Z,dynamicChildren:Q,dirs:ie}=O;Z|=I.patchFlag&16;const w=I.props||Pt,x=O.props||Pt;let N;if(U&&Ur(U,!1),(N=x.onVnodeBeforeUpdate)&&di(N,U,O,I),ie&&Nr(O,I,U,"beforeUpdate"),U&&Ur(U,!0),(w.innerHTML&&x.innerHTML==null||w.textContent&&x.textContent==null)&&u(re,""),Q?M(I.dynamicChildren,Q,re,U,z,cc(O,F),X):E||H(I,O,re,null,U,z,cc(O,F),X,!1),Z>0){if(Z&16)L(re,w,x,U,F);else if(Z&2&&w.class!==x.class&&s(re,"class",null,x.class,F),Z&4&&s(re,"style",w.style,x.style,F),Z&8){const Y=O.dynamicProps;for(let ne=0;ne<Y.length;ne++){const $=Y[ne],we=w[$],he=x[$];(he!==we||$==="value")&&s(re,$,we,he,F,U)}}Z&1&&I.children!==O.children&&u(re,O.children)}else!E&&Q==null&&L(re,w,x,U,F);((N=x.onVnodeUpdated)||ie)&&In(()=>{N&&di(N,U,O,I),ie&&Nr(O,I,U,"updated")},z)},M=(I,O,U,z,F,X,E)=>{for(let re=0;re<O.length;re++){const Z=I[re],Q=O[re],ie=Z.el&&(Z.type===kt||!ho(Z,Q)||Z.shapeFlag&198)?h(Z.el):U;v(Z,Q,ie,null,z,F,X,E,!0)}},L=(I,O,U,z,F)=>{if(O!==U){if(O!==Pt)for(const X in O)!Io(X)&&!(X in U)&&s(I,X,O[X],null,F,z);for(const X in U){if(Io(X))continue;const E=U[X],re=O[X];E!==re&&X!=="value"&&s(I,X,re,E,F,z)}"value"in U&&s(I,"value",O.value,U.value,F)}},V=(I,O,U,z,F,X,E,re,Z)=>{const Q=O.el=I?I.el:a(""),ie=O.anchor=I?I.anchor:a("");let{patchFlag:w,dynamicChildren:x,slotScopeIds:N}=O;N&&(re=re?re.concat(N):N),I==null?(i(Q,U,z),i(ie,U,z),R(O.children||[],U,ie,F,X,E,re,Z)):w>0&&w&64&&x&&I.dynamicChildren&&I.dynamicChildren.length===x.length?(M(I.dynamicChildren,x,U,F,X,E,re),(O.key!=null||F&&O===F.subTree)&&v0(I,O,!0)):H(I,O,U,ie,F,X,E,re,Z)},q=(I,O,U,z,F,X,E,re,Z)=>{O.slotScopeIds=re,I==null?O.shapeFlag&512?F.ctx.activate(O,U,z,E,Z):j(O,U,z,F,X,E,Z):J(I,O,Z)},j=(I,O,U,z,F,X,E)=>{const re=I.component=sy(I,z,F);if(t0(I)&&(re.ctx.renderer=Me),oy(re,!1,E),re.asyncDep){if(F&&F.registerDep(re,W,E),!I.el){const Z=re.subTree=Xt(Ci);d(null,Z,O,U),I.placeholder=Z.el}}else W(re,I,O,U,F,X,E)},J=(I,O,U)=>{const z=O.component=I.component;if(Vx(I,O,U))if(z.asyncDep&&!z.asyncResolved){k(z,O,U);return}else z.next=O,z.update();else O.el=I.el,z.vnode=O},W=(I,O,U,z,F,X,E)=>{const re=()=>{if(I.isMounted){let{next:w,bu:x,u:N,parent:Y,vnode:ne}=I;{const ze=x0(I);if(ze){w&&(w.el=ne.el,k(I,w,E)),ze.asyncDep.then(()=>{In(()=>{I.isUnmounted||Q()},F)});return}}let $=w,we;Ur(I,!1),w?(w.el=ne.el,k(I,w,E)):w=ne,x&&tl(x),(we=w.props&&w.props.onVnodeBeforeUpdate)&&di(we,Y,w,ne),Ur(I,!0);const he=yd(I),Pe=I.subTree;I.subTree=he,v(Pe,he,h(Pe.el),oe(Pe),I,F,X),w.el=he.el,$===null&&Hx(I,he.el),N&&In(N,F),(we=w.props&&w.props.onVnodeUpdated)&&In(()=>di(we,Y,w,ne),F)}else{let w;const{el:x,props:N}=O,{bm:Y,m:ne,parent:$,root:we,type:he}=I,Pe=Fs(O);Ur(I,!1),Y&&tl(Y),!Pe&&(w=N&&N.onVnodeBeforeMount)&&di(w,$,O),Ur(I,!0);{we.ce&&we.ce._hasShadowRoot()&&we.ce._injectChildStyle(he);const ze=I.subTree=yd(I);v(null,ze,U,z,I,F,X),O.el=ze.el}if(ne&&In(ne,F),!Pe&&(w=N&&N.onVnodeMounted)){const ze=O;In(()=>di(w,$,ze),F)}(O.shapeFlag&256||$&&Fs($.vnode)&&$.vnode.shapeFlag&256)&&I.a&&In(I.a,F),I.isMounted=!0,O=U=z=null}};I.scope.on();const Z=I.effect=new Rg(re);I.scope.off();const Q=I.update=Z.run.bind(Z),ie=I.job=Z.runIfDirty.bind(Z);ie.i=I,ie.id=I.uid,Z.scheduler=()=>Oh(ie),Ur(I,!0),Q()},k=(I,O,U)=>{O.component=I;const z=I.vnode.props;I.vnode=O,I.next=null,Wx(I,O.props,z,U),Jx(I,O.children,U),Qi(),fd(I),ji()},H=(I,O,U,z,F,X,E,re,Z=!1)=>{const Q=I&&I.children,ie=I?I.shapeFlag:0,w=O.children,{patchFlag:x,shapeFlag:N}=O;if(x>0){if(x&128){pe(Q,w,U,z,F,X,E,re,Z);return}else if(x&256){ce(Q,w,U,z,F,X,E,re,Z);return}}N&8?(ie&16&&se(Q,F,X),w!==Q&&u(U,w)):ie&16?N&16?pe(Q,w,U,z,F,X,E,re,Z):se(Q,F,X,!0):(ie&8&&u(U,""),N&16&&R(w,U,z,F,X,E,re,Z))},ce=(I,O,U,z,F,X,E,re,Z)=>{I=I||Ls,O=O||Ls;const Q=I.length,ie=O.length,w=Math.min(Q,ie);let x;for(x=0;x<w;x++){const N=O[x]=Z?Wi(O[x]):vi(O[x]);v(I[x],N,U,null,F,X,E,re,Z)}Q>ie?se(I,F,X,!0,!1,w):R(O,U,z,F,X,E,re,Z,w)},pe=(I,O,U,z,F,X,E,re,Z)=>{let Q=0;const ie=O.length;let w=I.length-1,x=ie-1;for(;Q<=w&&Q<=x;){const N=I[Q],Y=O[Q]=Z?Wi(O[Q]):vi(O[Q]);if(ho(N,Y))v(N,Y,U,null,F,X,E,re,Z);else break;Q++}for(;Q<=w&&Q<=x;){const N=I[w],Y=O[x]=Z?Wi(O[x]):vi(O[x]);if(ho(N,Y))v(N,Y,U,null,F,X,E,re,Z);else break;w--,x--}if(Q>w){if(Q<=x){const N=x+1,Y=N<ie?O[N].el:z;for(;Q<=x;)v(null,O[Q]=Z?Wi(O[Q]):vi(O[Q]),U,Y,F,X,E,re,Z),Q++}}else if(Q>x)for(;Q<=w;)ke(I[Q],F,X,!0),Q++;else{const N=Q,Y=Q,ne=new Map;for(Q=Y;Q<=x;Q++){const Ee=O[Q]=Z?Wi(O[Q]):vi(O[Q]);Ee.key!=null&&ne.set(Ee.key,Q)}let $,we=0;const he=x-Y+1;let Pe=!1,ze=0;const ue=new Array(he);for(Q=0;Q<he;Q++)ue[Q]=0;for(Q=N;Q<=w;Q++){const Ee=I[Q];if(we>=he){ke(Ee,F,X,!0);continue}let Ie;if(Ee.key!=null)Ie=ne.get(Ee.key);else for($=Y;$<=x;$++)if(ue[$-Y]===0&&ho(Ee,O[$])){Ie=$;break}Ie===void 0?ke(Ee,F,X,!0):(ue[Ie-Y]=Q+1,Ie>=ze?ze=Ie:Pe=!0,v(Ee,O[Ie],U,null,F,X,E,re,Z),we++)}const be=Pe?Qx(ue):Ls;for($=be.length-1,Q=he-1;Q>=0;Q--){const Ee=Y+Q,Ie=O[Ee],ye=O[Ee+1],nt=Ee+1<ie?ye.el||y0(ye):z;ue[Q]===0?v(null,Ie,U,nt,F,X,E,re,Z):Pe&&($<0||Q!==be[$]?fe(Ie,U,nt,2):$--)}}},fe=(I,O,U,z,F=null)=>{const{el:X,type:E,transition:re,children:Z,shapeFlag:Q}=I;if(Q&6){fe(I.component.subTree,O,U,z);return}if(Q&128){I.suspense.move(O,U,z);return}if(Q&64){E.move(I,O,U,Me);return}if(E===kt){i(X,O,U);for(let w=0;w<Z.length;w++)fe(Z[w],O,U,z);i(I.anchor,O,U);return}if(E===uc){y(I,O,U);return}if(z!==2&&Q&1&&re)if(z===0)re.beforeEnter(X),i(X,O,U),In(()=>re.enter(X),F);else{const{leave:w,delayLeave:x,afterLeave:N}=re,Y=()=>{I.ctx.isUnmounted?r(X):i(X,O,U)},ne=()=>{X._isLeaving&&X[mx](!0),w(X,()=>{Y(),N&&N()})};x?x(X,Y,ne):ne()}else i(X,O,U)},ke=(I,O,U,z=!1,F=!1)=>{const{type:X,props:E,ref:re,children:Z,dynamicChildren:Q,shapeFlag:ie,patchFlag:w,dirs:x,cacheIndex:N}=I;if(w===-2&&(F=!1),re!=null&&(Qi(),Uo(re,null,U,I,!0),ji()),N!=null&&(O.renderCache[N]=void 0),ie&256){O.ctx.deactivate(I);return}const Y=ie&1&&x,ne=!Fs(I);let $;if(ne&&($=E&&E.onVnodeBeforeUnmount)&&di($,O,I),ie&6)ut(I.component,U,z);else{if(ie&128){I.suspense.unmount(U,z);return}Y&&Nr(I,null,O,"beforeUnmount"),ie&64?I.type.remove(I,O,U,Me,z):Q&&!Q.hasOnce&&(X!==kt||w>0&&w&64)?se(Q,O,U,!1,!0):(X===kt&&w&384||!F&&ie&16)&&se(Z,O,U),z&&Le(I)}(ne&&($=E&&E.onVnodeUnmounted)||Y)&&In(()=>{$&&di($,O,I),Y&&Nr(I,null,O,"unmounted")},U)},Le=I=>{const{type:O,el:U,anchor:z,transition:F}=I;if(O===kt){Qe(U,z);return}if(O===uc){b(I);return}const X=()=>{r(U),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(I.shapeFlag&1&&F&&!F.persisted){const{leave:E,delayLeave:re}=F,Z=()=>E(U,X);re?re(I.el,X,Z):Z()}else X()},Qe=(I,O)=>{let U;for(;I!==O;)U=f(I),r(I),I=U;r(O)},ut=(I,O,U)=>{const{bum:z,scope:F,job:X,subTree:E,um:re,m:Z,a:Q}=I;Md(Z),Md(Q),z&&tl(z),F.stop(),X&&(X.flags|=8,ke(E,I,O,U)),re&&In(re,O),In(()=>{I.isUnmounted=!0},O)},se=(I,O,U,z=!1,F=!1,X=0)=>{for(let E=X;E<I.length;E++)ke(I[E],O,U,z,F)},oe=I=>{if(I.shapeFlag&6)return oe(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const O=f(I.anchor||I.el),U=O&&O[dx];return U?f(U):O};let Ce=!1;const Ve=(I,O,U)=>{let z;I==null?O._vnode&&(ke(O._vnode,null,null,!0),z=O._vnode.component):v(O._vnode||null,I,O,null,null,null,U),O._vnode=I,Ce||(Ce=!0,fd(z),Kg(),Ce=!1)},Me={p:v,um:ke,m:fe,r:Le,mt:j,mc:R,pc:H,pbc:M,n:oe,o:t};return{render:Ve,hydrate:void 0,createApp:Ux(Ve)}}function cc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ur({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Zx(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function v0(t,e,n=!1){const i=t.children,r=e.children;if($e(i)&&$e(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Wi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&v0(o,a)),a.type===ql&&(a.patchFlag===-1&&(a=r[s]=Wi(a)),a.el=o.el),a.type===Ci&&!a.el&&(a.el=o.el)}}function Qx(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function x0(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:x0(e)}function Md(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function y0(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?y0(e.subTree):null}const b0=t=>t.__isSuspense;function jx(t,e){e&&e.pendingBranch?$e(t)?e.effects.push(...t):e.effects.push(t):ax(t)}const kt=Symbol.for("v-fgt"),ql=Symbol.for("v-txt"),Ci=Symbol.for("v-cmt"),uc=Symbol.for("v-stc"),Fo=[];let Xn=null;function Ye(t=!1){Fo.push(Xn=t?null:[])}function ey(){Fo.pop(),Xn=Fo[Fo.length-1]||null}let qo=1;function Sl(t,e=!1){qo+=t,t<0&&Xn&&e&&(Xn.hasOnce=!0)}function S0(t){return t.dynamicChildren=qo>0?Xn||Ls:null,ey(),qo>0&&Xn&&Xn.push(t),t}function Lt(t,e,n,i,r,s){return S0(jt(t,e,n,i,r,s,!0))}function Nt(t,e,n,i,r){return S0(Xt(t,e,n,i,r,!0))}function Yo(t){return t?t.__v_isVNode===!0:!1}function ho(t,e){return t.type===e.type&&t.key===e.key}const M0=({key:t})=>t??null,il=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Jt(t)||qt(t)||je(t)?{i:ln,r:t,k:e,f:!!n}:t:null);function jt(t,e=null,n=null,i=0,r=null,s=t===kt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&M0(e),ref:e&&il(e),scopeId:Qg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ln};return a?(Wh(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Jt(n)?8:16),qo>0&&!o&&Xn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Xn.push(l),l}const Xt=ty;function ty(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===i0)&&(t=Ci),Yo(t)){const a=ts(t,e,!0);return n&&Wh(a,n),qo>0&&!s&&Xn&&(a.shapeFlag&6?Xn[Xn.indexOf(t)]=a:Xn.push(a)),a.patchFlag=-2,a}if(hy(t)&&(t=t.__vccOpts),e){e=ny(e);let{class:a,style:l}=e;a&&!Jt(a)&&(e.class=Gn(a)),xt(l)&&(Hl(l)&&!$e(l)&&(l=un({},l)),e.style=eo(l))}const o=Jt(t)?1:b0(t)?128:px(t)?64:xt(t)?4:je(t)?2:0;return jt(t,e,n,i,r,o,s,!0)}function ny(t){return t?Hl(t)||f0(t)?un({},t):t:null}function ts(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?Pi(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&M0(c),ref:e&&e.ref?n&&s?$e(s)?s.concat(il(e)):[s,il(e)]:il(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ts(t.ssContent),ssFallback:t.ssFallback&&ts(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Bh(u,l.clone(u)),u}function Bs(t=" ",e=0){return Xt(ql,null,t,e)}function Er(t="",e=!1){return e?(Ye(),Nt(Ci,null,t)):Xt(Ci,null,t)}function vi(t){return t==null||typeof t=="boolean"?Xt(Ci):$e(t)?Xt(kt,null,t.slice()):Yo(t)?Wi(t):Xt(ql,null,String(t))}function Wi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ts(t)}function Wh(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if($e(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Wh(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!f0(e)?e._ctx=ln:r===3&&ln&&(ln.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:ln},n=32):(e=String(e),i&64?(n=16,e=[Bs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pi(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Gn([e.class,i.class]));else if(r==="style")e.style=eo([e.style,i.style]);else if(Ul(r)){const s=e[r],o=i[r];o&&s!==o&&!($e(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function di(t,e,n,i=null){Ai(t,e,7,[n,i])}const iy=a0();let ry=0;function sy(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||iy,s={uid:ry++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Av(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:p0(i,r),emitsOptions:l0(i,r),emit:null,emitted:null,propsDefaults:Pt,inheritAttrs:i.inheritAttrs,ctx:Pt,data:Pt,props:Pt,attrs:Pt,slots:Pt,refs:Pt,setupState:Pt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Fx.bind(null,s),t.ce&&t.ce(s),s}let mn=null;const no=()=>mn||ln;let Ml,gu;{const t=zl(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Ml=e("__VUE_INSTANCE_SETTERS__",n=>mn=n),gu=e("__VUE_SSR_SETTERS__",n=>Jo=n)}const sa=t=>{const e=mn;return Ml(t),t.scope.on(),()=>{t.scope.off(),Ml(e)}},wd=()=>{mn&&mn.scope.off(),Ml(null)};function w0(t){return t.vnode.shapeFlag&4}let Jo=!1;function oy(t,e=!1,n=!1){e&&gu(e);const{props:i,children:r}=t.vnode,s=w0(t);Gx(t,i,s,e),Yx(t,r,n||e);const o=s?ay(t,e):void 0;return e&&gu(!1),o}function ay(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Cx);const{setup:i}=n;if(i){Qi();const r=t.setupContext=i.length>1?cy(t):null,s=sa(t),o=ra(i,t,0,[t.props,r]),a=Sg(o);if(ji(),s(),(a||t.sp)&&!Fs(t)&&e0(t),a){if(o.then(wd,wd),e)return o.then(l=>{Ed(t,l)}).catch(l=>{Gl(l,t,0)});t.asyncDep=o}else Ed(t,o)}else E0(t)}function Ed(t,e,n){je(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xt(e)&&(t.setupState=qg(e)),E0(t)}function E0(t,e,n){const i=t.type;t.render||(t.render=i.render||Mi);{const r=sa(t);Qi();try{Px(t)}finally{ji(),r()}}}const ly={get(t,e){return pn(t,"get",""),t[e]}};function cy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ly),slots:t.slots,emit:t.emit,expose:e}}function Yl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(qg(Wg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Oo)return Oo[n](t)},has(e,n){return n in e||n in Oo}})):t.proxy}function uy(t,e=!0){return je(t)?t.displayName||t.name:t.name||e&&t.__name}function hy(t){return je(t)&&"__vccOpts"in t}const pt=(t,e)=>nx(t,e,Jo);function Tr(t,e,n){try{Sl(-1);const i=arguments.length;return i===2?xt(e)&&!$e(e)?Yo(e)?Xt(t,null,[e]):Xt(t,e):Xt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Yo(n)&&(n=[n]),Xt(t,e,n))}finally{Sl(1)}}const fy="3.5.28";let _u;const Td=typeof window<"u"&&window.trustedTypes;if(Td)try{_u=Td.createPolicy("vue",{createHTML:t=>t})}catch{}const T0=_u?t=>_u.createHTML(t):t=>t,dy="http://www.w3.org/2000/svg",py="http://www.w3.org/1998/Math/MathML",Gi=typeof document<"u"?document:null,Ad=Gi&&Gi.createElement("template"),my={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Gi.createElementNS(dy,t):e==="mathml"?Gi.createElementNS(py,t):n?Gi.createElement(t,{is:n}):Gi.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Gi.createTextNode(t),createComment:t=>Gi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Ad.innerHTML=T0(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Ad.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},gy=Symbol("_vtc");function _y(t,e,n){const i=t[gy];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Cd=Symbol("_vod"),vy=Symbol("_vsh"),xy=Symbol(""),yy=/(?:^|;)\s*display\s*:/;function by(t,e,n){const i=t.style,r=Jt(n);let s=!1;if(n&&!r){if(e)if(Jt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&rl(i,a,"")}else for(const o in e)n[o]==null&&rl(i,o,"");for(const o in n)o==="display"&&(s=!0),rl(i,o,n[o])}else if(r){if(e!==n){const o=i[xy];o&&(n+=";"+o),i.cssText=n,s=yy.test(n)}}else e&&t.removeAttribute("style");Cd in t&&(t[Cd]=s?i.display:"",t[vy]&&(i.display="none"))}const Pd=/\s*!important$/;function rl(t,e,n){if($e(n))n.forEach(i=>rl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Sy(t,e);Pd.test(n)?t.setProperty(ss(i),n.replace(Pd,""),"important"):t[i]=n}}const Rd=["Webkit","Moz","ms"],hc={};function Sy(t,e){const n=hc[e];if(n)return n;let i=Fn(e);if(i!=="filter"&&i in t)return hc[e]=i;i=Bl(i);for(let r=0;r<Rd.length;r++){const s=Rd[r]+i;if(s in t)return hc[e]=s}return e}const Dd="http://www.w3.org/1999/xlink";function Id(t,e,n,i,r,s=wv(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Dd,e.slice(6,e.length)):t.setAttributeNS(Dd,e,n):n==null||s&&!Ag(n)?t.removeAttribute(e):t.setAttribute(e,s?"":oi(n)?String(n):n)}function Ld(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?T0(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Ag(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function A0(t,e,n,i){t.addEventListener(e,n,i)}function My(t,e,n,i){t.removeEventListener(e,n,i)}const Nd=Symbol("_vei");function wy(t,e,n,i,r=null){const s=t[Nd]||(t[Nd]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Ey(e);if(i){const c=s[e]=Cy(i,r);A0(t,a,c,l)}else o&&(My(t,a,o,l),s[e]=void 0)}}const Ud=/(?:Once|Passive|Capture)$/;function Ey(t){let e;if(Ud.test(t)){e={};let i;for(;i=t.match(Ud);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ss(t.slice(2)),e]}let fc=0;const Ty=Promise.resolve(),Ay=()=>fc||(Ty.then(()=>fc=0),fc=Date.now());function Cy(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ai(Py(i,n.value),e,5,[i])};return n.value=t,n.attached=Ay(),n}function Py(t,e){if($e(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Od=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ry=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?_y(t,i,o):e==="style"?by(t,n,i):Ul(e)?Th(e)||wy(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Dy(t,e,i,o))?(Ld(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Id(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Jt(i))?Ld(t,Fn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Id(t,e,i,o))};function Dy(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Od(e)&&je(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Od(e)&&Jt(n)?!1:e in t}const Fd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $e(e)?n=>tl(e,n):e},dc=Symbol("_assign"),Iy={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const r=Ol(e);A0(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Tg(wl(o)):wl(o));t[dc](t.multiple?r?new Set(s):s:s[0]),t._assigning=!0,Uh(()=>{t._assigning=!1})}),t[dc]=Fd(i)},mounted(t,{value:e}){kd(t,e)},beforeUpdate(t,e,n){t[dc]=Fd(n)},updated(t,{value:e}){t._assigning||kd(t,e)}};function kd(t,e){const n=t.multiple,i=$e(e);if(!(n&&!i&&!Ol(e))){for(let r=0,s=t.options.length;r<s;r++){const o=t.options[r],a=wl(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Tv(e,a)>-1}else o.selected=e.has(a);else if(ia(wl(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function wl(t){return"_value"in t?t._value:t.value}const Ly=un({patchProp:Ry},my);let Bd;function Ny(){return Bd||(Bd=$x(Ly))}const Uy=((...t)=>{const e=Ny().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Fy(i);if(!r)return;const s=e._component;!je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Oy(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Oy(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Fy(t){return Jt(t)?document.querySelector(t):t}const ky=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const zd=t=>t==="";const By=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();const Vd=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const zy=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());const Vy=t=>{const e=zy(t);return e.charAt(0).toUpperCase()+e.slice(1)};var fo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const Hy=({name:t,iconNode:e,absoluteStrokeWidth:n,"absolute-stroke-width":i,strokeWidth:r,"stroke-width":s,size:o=fo.width,color:a=fo.stroke,...l},{slots:c})=>Tr("svg",{...fo,...l,width:o,height:o,stroke:a,"stroke-width":zd(n)||zd(i)||n===!0||i===!0?Number(r||s||fo["stroke-width"])*24/Number(o):r||s||fo["stroke-width"],class:By("lucide",l.class,...t?[`lucide-${Vd(Vy(t))}-icon`,`lucide-${Vd(t)}`]:["lucide-icon"]),...!c.default&&!ky(l)&&{"aria-hidden":"true"}},[...e.map(u=>Tr(...u)),...c.default?[c.default()]:[]]);const Ii=(t,e)=>(n,{slots:i,attrs:r})=>Tr(Hy,{...r,...n,iconNode:e,name:t},i);const Gy=Ii("clipboard-list",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);const Wy=Ii("cuboid",[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",key:"1u2ovd"}],["path",{d:"M10 22v-8L2.25 9.15",key:"11pn4q"}],["path",{d:"m10 14 11.77-6.87",key:"1kt1wh"}]]);const Xy=Ii("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);const qy=Ii("move-3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);const Yy=Ii("rectangle-horizontal",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);const Jy=Ii("rectangle-vertical",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]]);const $y=Ii("rotate-3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);const Ky=Ii("save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);const Zy=Ii("scale-3d",[["path",{d:"M5 7v11a1 1 0 0 0 1 1h11",key:"13dt1j"}],["path",{d:"M5.293 18.707 11 13",key:"ezgbsx"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}]]);const Qy=Ii("square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);const Xh="182",es={ROTATE:0,DOLLY:1,PAN:2},Ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jy=0,Hd=1,eb=2,sl=1,C0=2,Eo=3,Pr=0,vn=1,Tn=2,Ki=0,zs=1,Gd=2,Wd=3,Xd=4,tb=5,qr=100,nb=101,ib=102,rb=103,sb=104,ob=200,ab=201,lb=202,cb=203,vu=204,xu=205,ub=206,hb=207,fb=208,db=209,pb=210,mb=211,gb=212,_b=213,vb=214,yu=0,bu=1,Su=2,Xs=3,Mu=4,wu=5,Eu=6,Tu=7,P0=0,xb=1,yb=2,wi=0,R0=1,D0=2,I0=3,qh=4,L0=5,N0=6,U0=7,O0=300,ns=301,qs=302,Au=303,Cu=304,Jl=306,Pu=1e3,$i=1001,Ru=1002,cn=1003,bb=1004,_a=1005,gn=1006,pc=1007,Jr=1008,Wn=1009,F0=1010,k0=1011,$o=1012,Yh=1013,Ri=1014,bi=1015,tr=1016,Jh=1017,$h=1018,Ko=1020,B0=35902,z0=35899,V0=1021,H0=1022,ri=1023,nr=1026,$r=1027,G0=1028,Kh=1029,Ys=1030,Zh=1031,Qh=1033,ol=33776,al=33777,ll=33778,cl=33779,Du=35840,Iu=35841,Lu=35842,Nu=35843,Uu=36196,Ou=37492,Fu=37496,ku=37488,Bu=37489,zu=37490,Vu=37491,Hu=37808,Gu=37809,Wu=37810,Xu=37811,qu=37812,Yu=37813,Ju=37814,$u=37815,Ku=37816,Zu=37817,Qu=37818,ju=37819,eh=37820,th=37821,nh=36492,ih=36494,rh=36495,sh=36283,oh=36284,ah=36285,lh=36286,Sb=3200,W0=0,Mb=1,gr="",Hn="srgb",Js="srgb-linear",El="linear",St="srgb",fs=7680,qd=519,wb=512,Eb=513,Tb=514,jh=515,Ab=516,Cb=517,ef=518,Pb=519,Yd=35044,Jd="300 es",Si=2e3,Tl=2001;function X0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Al(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Rb(){const t=Al("canvas");return t.style.display="block",t}const $d={};function Kd(...t){const e="THREE."+t.shift();console.log(e,...t)}function Je(...t){const e="THREE."+t.shift();console.warn(e,...t)}function dt(...t){const e="THREE."+t.shift();console.error(e,...t)}function Zo(...t){const e=t.join(" ");e in $d||($d[e]=!0,Je(...t))}function Db(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zd=1234567;const ko=Math.PI/180,$s=180/Math.PI;function as(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[t&255]+hn[t>>8&255]+hn[t>>16&255]+hn[t>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function st(t,e,n){return Math.max(e,Math.min(n,t))}function tf(t,e){return(t%e+e)%e}function Ib(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Lb(t,e,n){return t!==e?(n-t)/(e-t):0}function Bo(t,e,n){return(1-n)*t+n*e}function Nb(t,e,n,i){return Bo(t,e,1-Math.exp(-n*i))}function Ub(t,e=1){return e-Math.abs(tf(t,e*2)-e)}function Ob(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Fb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function kb(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Bb(t,e){return t+Math.random()*(e-t)}function zb(t){return t*(.5-Math.random())}function Vb(t){t!==void 0&&(Zd=t);let e=Zd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hb(t){return t*ko}function Gb(t){return t*$s}function Wb(t){return(t&t-1)===0&&t!==0}function Xb(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function qb(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Yb(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*h,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Cs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Cl={DEG2RAD:ko,RAD2DEG:$s,generateUUID:as,clamp:st,euclideanModulo:tf,mapLinear:Ib,inverseLerp:Lb,lerp:Bo,damp:Nb,pingpong:Ub,smoothstep:Ob,smootherstep:Fb,randInt:kb,randFloat:Bb,randFloatSpread:zb,seededRandom:Vb,degToRad:Hb,radToDeg:Gb,isPowerOfTwo:Wb,ceilPowerOfTwo:Xb,floorPowerOfTwo:qb,setQuaternionFromProperEuler:Yb,normalize:Sn,denormalize:Cs};class me{constructor(e=0,n=0){me.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let an=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a>=1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(h!==v||l!==f||c!==p||u!==g){let m=l*f+c*p+u*g+h*v;m<0&&(f=-f,p=-p,g=-g,v=-v,m=-m);let d=1-a;if(m<.9995){const _=Math.acos(m),y=Math.sin(_);d=Math.sin(d*_)/y,a=Math.sin(a*_)/y,l=l*d+f*a,c=c*d+p*a,u=u*d+g*a,h=h*d+v*a}else{l=l*d+f*a,c=c*d+p*a,u=u*d+g*a,h=h*d+v*a;const _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*h+l*p-c*f,e[n+1]=l*g+u*f+c*h-a*p,e[n+2]=c*g+u*p+a*f-l*h,e[n+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class P{constructor(e=0,n=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this.z=st(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this.z=st(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mc.copy(this).projectOnVector(e),this.sub(mc)}reflect(e){return this.sub(mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mc=new P,Qd=new an;class rt{constructor(e,n,i,r,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],v=r[0],m=r[3],d=r[6],_=r[1],y=r[4],b=r[7],T=r[2],C=r[5],D=r[8];return s[0]=o*v+a*_+l*T,s[3]=o*m+a*y+l*C,s[6]=o*d+a*b+l*D,s[1]=c*v+u*_+h*T,s[4]=c*m+u*y+h*C,s[7]=c*d+u*b+h*D,s[2]=f*v+p*_+g*T,s[5]=f*m+p*y+g*C,s[8]=f*d+p*b+g*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=n*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(gc.makeScale(e,n)),this}rotate(e){return this.premultiply(gc.makeRotation(-e)),this}translate(e,n){return this.premultiply(gc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gc=new rt,jd=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ep=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jb(){const t={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===St&&(r.r=Zi(r.r),r.g=Zi(r.g),r.b=Zi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(r.r=Vs(r.r),r.g=Vs(r.g),r.b=Vs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===gr?El:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Js]:{primaries:e,whitePoint:i,transfer:El,toXYZ:jd,fromXYZ:ep,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:e,whitePoint:i,transfer:St,toXYZ:jd,fromXYZ:ep,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),t}const mt=Jb();function Zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ds;class $b{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ds===void 0&&(ds=Al("canvas")),ds.width=e.width,ds.height=e.height;const r=ds.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ds}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Al("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zi(n[i]/255)*255):n[i]=Zi(n[i]);return{data:n,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kb=0;class nf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kb++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_c(r[o].image)):s.push(_c(r[o]))}else s=_c(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function _c(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$b.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}let Zb=0;const vc=new P;class An extends os{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,i=$i,r=$i,s=gn,o=Jr,a=ri,l=Wn,c=An.DEFAULT_ANISOTROPY,u=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=as(),this.name="",this.source=new nf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vc).x}get height(){return this.source.getSize(vc).y}get depth(){return this.source.getSize(vc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Je(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Je(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pu:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Ru:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pu:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Ru:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=O0;An.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,i=0,r=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,b=(p+1)/2,T=(d+1)/2,C=(u+f)/4,D=(h+v)/4,R=(g+m)/4;return y>b&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=D/i):b>T?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=C/r,s=R/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=D/s,r=R/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-v)/_,this.z=(f-u)/_,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this.z=st(this.z,e.z,n.z),this.w=st(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this.z=st(this.z,e,n),this.w=st(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qb extends os{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new An(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new nf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends Qb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class q0 extends An{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jb extends An{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oa{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),va.copy(i.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),xa.subVectors(this.max,po),ps.subVectors(e.a,po),ms.subVectors(e.b,po),gs.subVectors(e.c,po),sr.subVectors(ms,ps),or.subVectors(gs,ms),Or.subVectors(ps,gs);let n=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Or.z,Or.y,sr.z,0,-sr.x,or.z,0,-or.x,Or.z,0,-Or.x,-sr.y,sr.x,0,-or.y,or.x,0,-Or.y,Or.x,0];return!xc(n,ps,ms,gs,xa)||(n=[1,0,0,0,1,0,0,0,1],!xc(n,ps,ms,gs,xa))?!1:(ya.crossVectors(sr,or),n=[ya.x,ya.y,ya.z],xc(n,ps,ms,gs,xa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new P,new P,new P,new P,new P,new P,new P,new P],jn=new P,va=new oa,ps=new P,ms=new P,gs=new P,sr=new P,or=new P,Or=new P,po=new P,xa=new P,ya=new P,Fr=new P;function xc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Fr.fromArray(t,s);const a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),l=e.dot(Fr),c=n.dot(Fr),u=i.dot(Fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const eS=new oa,mo=new P,yc=new P;let aa=class{constructor(e=new P,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):eS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);const n=mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(yc)),this.expandByPoint(mo.copy(e.center).sub(yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};const Fi=new P,bc=new P,ba=new P,ar=new P,Sc=new P,Sa=new P,Mc=new P;class la{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,n),Fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){bc.copy(e).add(n).multiplyScalar(.5),ba.copy(n).sub(e).normalize(),ar.copy(this.origin).sub(bc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ba),a=ar.dot(this.direction),l=-ar.dot(ba),c=ar.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(bc).addScaledVector(ba,f),p}intersectSphere(e,n){Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),r=Fi.dot(Fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,n,i,r,s){Sc.subVectors(n,e),Sa.subVectors(i,e),Mc.crossVectors(Sc,Sa);let o=this.direction.dot(Mc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ar.subVectors(this.origin,e);const l=a*this.direction.dot(Sa.crossVectors(ar,Sa));if(l<0)return null;const c=a*this.direction.dot(Sc.cross(ar));if(c<0||l+c>o)return null;const u=-a*ar.dot(Mc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,o,a,l,c,u,h,f,p,g,v,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,f,p,g,v,m)}set(e,n,i,r,s,o,a,l,c,u,h,f,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/_s.setFromMatrixColumn(e,0).length(),s=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,v=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=f-v*c,n[9]=-a*l,n[2]=v-f*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,v=c*h;n[0]=f+v*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=v+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,v=c*h;n[0]=f-v*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=v-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,v=a*h;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+v,n[1]=l*h,n[5]=v*c+f,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-f*h,n[8]=g*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+g,n[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+v,n[5]=o*u,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*u,n[10]=v*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tS,e,nS)}lookAt(e,n,i){const r=this.elements;return zn.subVectors(e,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),lr.crossVectors(i,zn),lr.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),lr.crossVectors(i,zn)),lr.normalize(),Ma.crossVectors(zn,lr),r[0]=lr.x,r[4]=Ma.x,r[8]=zn.x,r[1]=lr.y,r[5]=Ma.y,r[9]=zn.y,r[2]=lr.z,r[6]=Ma.z,r[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],_=i[3],y=i[7],b=i[11],T=i[15],C=r[0],D=r[4],R=r[8],S=r[12],M=r[1],L=r[5],V=r[9],q=r[13],j=r[2],J=r[6],W=r[10],k=r[14],H=r[3],ce=r[7],pe=r[11],fe=r[15];return s[0]=o*C+a*M+l*j+c*H,s[4]=o*D+a*L+l*J+c*ce,s[8]=o*R+a*V+l*W+c*pe,s[12]=o*S+a*q+l*k+c*fe,s[1]=u*C+h*M+f*j+p*H,s[5]=u*D+h*L+f*J+p*ce,s[9]=u*R+h*V+f*W+p*pe,s[13]=u*S+h*q+f*k+p*fe,s[2]=g*C+v*M+m*j+d*H,s[6]=g*D+v*L+m*J+d*ce,s[10]=g*R+v*V+m*W+d*pe,s[14]=g*S+v*q+m*k+d*fe,s[3]=_*C+y*M+b*j+T*H,s[7]=_*D+y*L+b*J+T*ce,s[11]=_*R+y*V+b*W+T*pe,s[15]=_*S+y*q+b*k+T*fe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15],_=l*p-c*f,y=a*p-c*h,b=a*f-l*h,T=o*p-c*u,C=o*f-l*u,D=o*h-a*u;return n*(v*_-m*y+d*b)-i*(g*_-m*T+d*C)+r*(g*y-v*T+d*D)-s*(g*b-v*C+m*D)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],_=h*m*c-v*f*c+v*l*p-a*m*p-h*l*d+a*f*d,y=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,b=u*v*c-g*h*c+g*a*p-o*v*p-u*a*d+o*h*d,T=g*h*l-u*v*l-g*a*f+o*v*f+u*a*m-o*h*m,C=n*_+i*y+r*b+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return e[0]=_*D,e[1]=(v*f*s-h*m*s-v*r*p+i*m*p+h*r*d-i*f*d)*D,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*d+i*l*d)*D,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*D,e[4]=y*D,e[5]=(u*m*s-g*f*s+g*r*p-n*m*p-u*r*d+n*f*d)*D,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*d-n*l*d)*D,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*D,e[8]=b*D,e[9]=(g*h*s-u*v*s-g*i*p+n*v*p+u*i*d-n*h*d)*D,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*d+n*a*d)*D,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*p-n*a*p)*D,e[12]=T*D,e[13]=(u*v*r-g*h*r+g*i*f-n*v*f-u*i*m+n*h*m)*D,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*D,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*f+n*a*f)*D,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,v=o*u,m=o*h,d=a*h,_=l*c,y=l*u,b=l*h,T=i.x,C=i.y,D=i.z;return r[0]=(1-(v+d))*T,r[1]=(p+b)*T,r[2]=(g-y)*T,r[3]=0,r[4]=(p-b)*C,r[5]=(1-(f+d))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(g+y)*D,r[9]=(m-_)*D,r[10]=(1-(f+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=_s.set(r[0],r[1],r[2]).length();const o=_s.set(r[4],r[5],r[6]).length(),a=_s.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),ei.copy(this);const c=1/s,u=1/o,h=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=h,ei.elements[9]*=h,ei.elements[10]*=h,n.setFromRotationMatrix(ei),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Si,l=!1){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===Si)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Tl)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Si,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===Si)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===Tl)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const _s=new P,ei=new ht,tS=new P(0,0,0),nS=new P(1,1,1),lr=new P,Ma=new P,zn=new P,tp=new ht,np=new an;class li{constructor(e=0,n=0,i=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return np.setFromEuler(this),this.setFromQuaternion(np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class rf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iS=0;const ip=new P,vs=new an,ki=new ht,wa=new P,go=new P,rS=new P,sS=new an,rp=new P(1,0,0),sp=new P(0,1,0),op=new P(0,0,1),ap={type:"added"},oS={type:"removed"},xs={type:"childadded",child:null},wc={type:"childremoved",child:null};class Tt extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new P,n=new li,i=new an,r=new P(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new rt}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(rp,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(op,e)}translateOnAxis(e,n){return ip.copy(e).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rp,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wa.copy(e):wa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(go,wa,this.up):ki.lookAt(wa,go,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),vs.setFromRotationMatrix(ki),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ap),xs.child=e,this.dispatchEvent(xs),xs.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(oS),wc.child=e,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ap),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,rS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,sS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new P(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new P,Bi=new P,Ec=new P,zi=new P,ys=new P,bs=new P,lp=new P,Tc=new P,Ac=new P,Cc=new P,Pc=new Gt,Rc=new Gt,Dc=new Gt;class ni{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ti.subVectors(e,n),r.cross(ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ti.subVectors(r,n),Bi.subVectors(i,n),Ec.subVectors(e,n);const o=ti.dot(ti),a=ti.dot(Bi),l=ti.dot(Ec),c=Bi.dot(Bi),u=Bi.dot(Ec),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zi.x),l.addScaledVector(o,zi.y),l.addScaledVector(a,zi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Pc.setScalar(0),Rc.setScalar(0),Dc.setScalar(0),Pc.fromBufferAttribute(e,n),Rc.fromBufferAttribute(e,i),Dc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Pc,s.x),o.addScaledVector(Rc,s.y),o.addScaledVector(Dc,s.z),o}static isFrontFacing(e,n,i,r){return ti.subVectors(i,n),Bi.subVectors(e,n),ti.cross(Bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ti.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ys.subVectors(r,i),bs.subVectors(s,i),Tc.subVectors(e,i);const l=ys.dot(Tc),c=bs.dot(Tc);if(l<=0&&c<=0)return n.copy(i);Ac.subVectors(e,r);const u=ys.dot(Ac),h=bs.dot(Ac);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ys,o);Cc.subVectors(e,s);const p=ys.dot(Cc),g=bs.dot(Cc);if(g>=0&&p<=g)return n.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(bs,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return lp.subVectors(s,r),a=(h-u)/(h-u+(p-g)),n.copy(r).addScaledVector(lp,a);const d=1/(m+v+f);return o=v*d,a=f*d,n.copy(i).addScaledVector(ys,o).addScaledVector(bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function Ic(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=mt.workingColorSpace){return this.r=e,this.g=n,this.b=i,mt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=mt.workingColorSpace){if(e=tf(e,1),n=st(n,0,1),i=st(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ic(o,s,e+1/3),this.g=Ic(o,s,e),this.b=Ic(o,s,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,n=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=Y0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return mt.workingToColorSpace(fn.copy(this),e),Math.round(st(fn.r*255,0,255))*65536+Math.round(st(fn.g*255,0,255))*256+Math.round(st(fn.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=mt.workingColorSpace){mt.workingToColorSpace(fn.copy(this),n);const i=fn.r,r=fn.g,s=fn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=mt.workingColorSpace){return mt.workingToColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Hn){mt.workingToColorSpace(fn.copy(this),e);const n=fn.r,i=fn.g,r=fn.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+n,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(cr),e.getHSL(Ea);const i=Bo(cr.h,Ea.h,n),r=Bo(cr.s,Ea.s,n),s=Bo(cr.l,Ea.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new Ze;Ze.NAMES=Y0;let aS=0;class ls extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=as(),this.name="",this.type="Material",this.blending=zs,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vu,this.blendDst=xu,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Je(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Je(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==Pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vu&&(i.blendSrc=this.blendSrc),this.blendDst!==xu&&(i.blendDst=this.blendDst),this.blendEquation!==qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rr extends ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=P0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new P,Ta=new me;let lS=0;class xn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Yd,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ta.fromBufferAttribute(this,n),Ta.applyMatrix3(e),this.setXY(n,Ta.x,Ta.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Cs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Cs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Cs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Cs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Cs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yd&&(e.usage=this.usage),e}}class J0 extends xn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class $0 extends xn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class tt extends xn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let cS=0;const Kn=new ht,Lc=new Tt,Ss=new P,Vn=new oa,_o=new oa,rn=new P;class ft extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X0(e)?$0:J0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new rt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,n,i){return Kn.makeTranslation(e,n,i),this.applyMatrix4(Kn),this}scale(e,n,i){return Kn.makeScale(e,n,i),this.applyMatrix4(Kn),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Vn.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Vn.min,_o.min),Vn.expandByPoint(rn),rn.addVectors(Vn.max,_o.max),Vn.expandByPoint(rn)):(Vn.expandByPoint(_o.min),Vn.expandByPoint(_o.max))}Vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)rn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(rn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)rn.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),rn.add(Ss)),r=Math.max(r,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new P,l[R]=new P;const c=new P,u=new P,h=new P,f=new me,p=new me,g=new me,v=new P,m=new P;function d(R,S,M){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),a[R].add(v),a[S].add(v),a[M].add(v),l[R].add(m),l[S].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,S=_.length;R<S;++R){const M=_[R],L=M.start,V=M.count;for(let q=L,j=L+V;q<j;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const y=new P,b=new P,T=new P,C=new P;function D(R){T.fromBufferAttribute(r,R),C.copy(T);const S=a[R];y.copy(S),y.sub(T.multiplyScalar(T.dot(S))).normalize(),b.crossVectors(C,S);const L=b.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,L)}for(let R=0,S=_.length;R<S;++R){const M=_[R],L=M.start,V=M.count;for(let q=L,j=L+V;q<j;q+=3)D(e.getX(q+0)),D(e.getX(q+1)),D(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new xn(f,u,h)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ft,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cp=new ht,kr=new la,Aa=new aa,up=new P,Ca=new P,Pa=new P,Ra=new P,Nc=new P,Da=new P,hp=new P,Ia=new P;let _e=class extends Tt{constructor(e=new ft,n=new Rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Da.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Nc.fromBufferAttribute(h,e),o?Da.addScaledVector(Nc,u):Da.addScaledVector(Nc.sub(n),u))}n.add(Da)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),kr.copy(e.ray).recast(e.near),!(Aa.containsPoint(kr.origin)===!1&&(kr.intersectSphere(Aa,up)===null||kr.origin.distanceToSquared(up)>(e.far-e.near)**2))&&(cp.copy(s).invert(),kr.copy(e.ray).applyMatrix4(cp),!(i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=_,T=y;b<T;b+=3){const C=a.getX(b),D=a.getX(b+1),R=a.getX(b+2);r=La(this,d,e,i,c,u,h,C,D,R),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const _=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);r=La(this,o,e,i,c,u,h,_,y,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=_,T=y;b<T;b+=3){const C=b,D=b+1,R=b+2;r=La(this,d,e,i,c,u,h,C,D,R),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const _=m,y=m+1,b=m+2;r=La(this,o,e,i,c,u,h,_,y,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}};function uS(t,e,n,i,r,s,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Pr,a),l===null)return null;Ia.copy(a),Ia.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ia);return c<n.near||c>n.far?null:{distance:c,point:Ia.clone(),object:t}}function La(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ca),t.getVertexPosition(l,Pa),t.getVertexPosition(c,Ra);const u=uS(t,e,n,i,Ca,Pa,Ra,hp);if(u){const h=new P;ni.getBarycoord(hp,Ca,Pa,Ra,h),r&&(u.uv=ni.getInterpolatedAttribute(r,a,l,c,h,new me)),s&&(u.uv1=ni.getInterpolatedAttribute(s,a,l,c,h,new me)),o&&(u.normal=ni.getInterpolatedAttribute(o,a,l,c,h,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new P,materialIndex:0};ni.getNormal(Ca,Pa,Ra,f.normal),u.face=f,u.barycoord=h}return u}class Ht extends ft{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function g(v,m,d,_,y,b,T,C,D,R,S){const M=b/D,L=T/R,V=b/2,q=T/2,j=C/2,J=D+1,W=R+1;let k=0,H=0;const ce=new P;for(let pe=0;pe<W;pe++){const fe=pe*L-q;for(let ke=0;ke<J;ke++){const Le=ke*M-V;ce[v]=Le*_,ce[m]=fe*y,ce[d]=j,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[m]=0,ce[d]=C>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(ke/D),h.push(1-pe/R),k+=1}}for(let pe=0;pe<R;pe++)for(let fe=0;fe<D;fe++){const ke=f+fe+J*pe,Le=f+fe+J*(pe+1),Qe=f+(fe+1)+J*(pe+1),ut=f+(fe+1)+J*pe;l.push(ke,Le,ut),l.push(Le,Qe,ut),H+=6}a.addGroup(p,H,S),p+=H,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Mn(t){const e={};for(let n=0;n<t.length;n++){const i=Ks(t[n]);for(const r in i)e[r]=i[r]}return e}function hS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function K0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const Z0={clone:Ks,merge:Mn};var fS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fS,this.fragmentShader=dS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=hS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Q0 extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new P,fp=new me,dp=new me;class Nn extends Q0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$s*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,n){return this.getViewBounds(e,fp,dp),n.subVectors(dp,fp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ko*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ms=-90,ws=1;class pS extends Tt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(Ms,ws,e,n);r.layers=this.layers,this.add(r);const s=new Nn(Ms,ws,e,n);s.layers=this.layers,this.add(s);const o=new Nn(Ms,ws,e,n);o.layers=this.layers,this.add(o);const a=new Nn(Ms,ws,e,n);a.layers=this.layers,this.add(a);const l=new Nn(Ms,ws,e,n);l.layers=this.layers,this.add(l);const c=new Nn(Ms,ws,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class j0 extends An{constructor(e=[],n=ns,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class e_ extends Ei{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new j0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ht(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:Ki});s.uniforms.tEquirect.value=n;const o=new _e(r,s),a=n.minFilter;return n.minFilter===Jr&&(n.minFilter=gn),new pS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Na extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mS={type:"move"};class Uc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Na;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class gS extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class _S extends An{constructor(e=null,n=1,i=1,r,s,o,a,l,c=cn,u=cn,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oc=new P,vS=new P,xS=new rt;let Xi=class{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Oc.subVectors(i,n).cross(vS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Oc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||xS.getNormalMatrix(e),r=this.coplanarPoint(Oc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Br=new aa,yS=new me(.5,.5),Ua=new P;class sf{constructor(e=new Xi,n=new Xi,i=new Xi,r=new Xi,s=new Xi,o=new Xi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],g=s[8],v=s[9],m=s[10],d=s[11],_=s[12],y=s[13],b=s[14],T=s[15];if(r[0].setComponents(c-o,p-u,d-g,T-_).normalize(),r[1].setComponents(c+o,p+u,d+g,T+_).normalize(),r[2].setComponents(c+a,p+h,d+v,T+y).normalize(),r[3].setComponents(c-a,p-h,d-v,T-y).normalize(),i)r[4].setComponents(l,f,m,b).normalize(),r[5].setComponents(c-l,p-f,d-m,T-b).normalize();else if(r[4].setComponents(c-l,p-f,d-m,T-b).normalize(),n===Si)r[5].setComponents(c+l,p+f,d+m,T+b).normalize();else if(n===Tl)r[5].setComponents(l,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){Br.center.set(0,0,0);const n=yS.distanceTo(e.center);return Br.radius=.7071067811865476+n,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ua.x=r.normal.x>0?e.max.x:e.min.x,Ua.y=r.normal.y>0?e.max.y:e.min.y,Ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ui extends ls{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pl=new P,Rl=new P,pp=new ht,vo=new la,Oa=new aa,Fc=new P,mp=new P;let on=class extends Tt{constructor(e=new ft,n=new ui){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Pl.fromBufferAttribute(n,r-1),Rl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Pl.distanceTo(Rl);e.setAttribute("lineDistance",new tt(i,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(r),Oa.radius+=s,e.ray.intersectsSphere(Oa)===!1)return;pp.copy(r).invert(),vo.copy(e.ray).applyMatrix4(pp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=u.getX(v),_=u.getX(v+1),y=Fa(this,e,vo,l,d,_,v);y&&n.push(y)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),d=Fa(this,e,vo,l,v,m,g-1);d&&n.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=Fa(this,e,vo,l,v,v+1,v);d&&n.push(d)}if(this.isLineLoop){const v=Fa(this,e,vo,l,g-1,p,g-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Fa(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Pl.fromBufferAttribute(a,r),Rl.fromBufferAttribute(a,s),n.distanceSqToSegment(Pl,Rl,Fc,mp)>i)return;Fc.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Fc);if(!(c<e.near||c>e.far))return{distance:c,point:mp.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const gp=new P,_p=new P;class t_ extends on{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)gp.fromBufferAttribute(n,r),_p.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+gp.distanceTo(_p);e.setAttribute("lineDistance",new tt(i,1))}else Je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class of extends ls{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vp=new ht,ch=new la,ka=new aa,Ba=new P;class af extends Tt{constructor(e=new ft,n=new of){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(r),ka.radius+=s,e.ray.intersectsSphere(ka)===!1)return;vp.copy(r).invert(),ch.copy(e.ray).applyMatrix4(vp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,v=p;g<v;g++){const m=c.getX(g);Ba.fromBufferAttribute(h,m),xp(Ba,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,v=p;g<v;g++)Ba.fromBufferAttribute(h,g),xp(Ba,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xp(t,e,n,i,r,s,o){const a=ch.distanceSqToPoint(t);if(a<n){const l=new P;ch.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Qo extends An{constructor(e,n,i=Ri,r,s,o,a=cn,l=cn,c,u=nr,h=1){if(u!==nr&&u!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class bS extends Qo{constructor(e,n=Ri,i=ns,r,s,o=cn,a=cn,l,c=nr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class n_ extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lf extends ft{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],u=n/2,h=Math.PI/2*e,f=n,p=2*h+f,g=i*2+s,v=r+1,m=new P,d=new P;for(let _=0;_<=g;_++){let y=0,b=0,T=0,C=0;if(_<=i){const S=_/i,M=S*Math.PI/2;b=-u-e*Math.cos(M),T=e*Math.sin(M),C=-e*Math.cos(M),y=S*h}else if(_<=i+s){const S=(_-i)/s;b=-u+S*n,T=e,C=0,y=h+S*f}else{const S=(_-i-s)/i,M=S*Math.PI/2;b=u+e*Math.sin(M),T=e*Math.cos(M),C=e*Math.sin(M),y=h+f+S*h}const D=Math.max(0,Math.min(1,y/p));let R=0;_===0?R=.5/r:_===g&&(R=-.5/r);for(let S=0;S<=r;S++){const M=S/r,L=M*Math.PI*2,V=Math.sin(L),q=Math.cos(L);d.x=-T*q,d.y=b,d.z=T*V,a.push(d.x,d.y,d.z),m.set(-T*q,C,T*V),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+R,D)}if(_>0){const S=(_-1)*v;for(let M=0;M<r;M++){const L=S+M,V=S+M+1,q=_*v+M,j=_*v+M+1;o.push(L,V,q),o.push(V,j,q)}}}this.setIndex(o),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lf(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class cf extends ft{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new P,u=new me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=n;h++,f+=3){const p=i+h/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class sn extends ft{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let g=0;const v=[],m=i/2;let d=0;_(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(p,2));function _(){const b=new P,T=new P;let C=0;const D=(n-e)/i;for(let R=0;R<=s;R++){const S=[],M=R/s,L=M*(n-e)+e;for(let V=0;V<=r;V++){const q=V/r,j=q*l+a,J=Math.sin(j),W=Math.cos(j);T.x=L*J,T.y=-M*i+m,T.z=L*W,h.push(T.x,T.y,T.z),b.set(J,D,W).normalize(),f.push(b.x,b.y,b.z),p.push(q,1-M),S.push(g++)}v.push(S)}for(let R=0;R<r;R++)for(let S=0;S<s;S++){const M=v[S][R],L=v[S+1][R],V=v[S+1][R+1],q=v[S][R+1];(e>0||S!==0)&&(u.push(M,L,q),C+=3),(n>0||S!==s-1)&&(u.push(L,V,q),C+=3)}c.addGroup(d,C,0),d+=C}function y(b){const T=g,C=new me,D=new P;let R=0;const S=b===!0?e:n,M=b===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const L=g;for(let V=0;V<=r;V++){const j=V/r*l+a,J=Math.cos(j),W=Math.sin(j);D.x=S*W,D.y=m*M,D.z=S*J,h.push(D.x,D.y,D.z),f.push(0,M,0),C.x=J*.5+.5,C.y=W*.5*M+.5,p.push(C.x,C.y),g++}for(let V=0;V<r;V++){const q=T+V,j=L+V;b===!0?u.push(j,j+1,q):u.push(j+1,j,q),R+=3}c.addGroup(d,R,b===!0?1:2),d+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $l extends sn{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new $l(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uf extends ft{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(s.slice(),3)),this.setAttribute("uv",new tt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new P,b=new P,T=new P;for(let C=0;C<n.length;C+=3)p(n[C+0],y),p(n[C+1],b),p(n[C+2],T),l(y,b,T,_)}function l(_,y,b,T){const C=T+1,D=[];for(let R=0;R<=C;R++){D[R]=[];const S=_.clone().lerp(b,R/C),M=y.clone().lerp(b,R/C),L=C-R;for(let V=0;V<=L;V++)V===0&&R===C?D[R][V]=S:D[R][V]=S.clone().lerp(M,V/L)}for(let R=0;R<C;R++)for(let S=0;S<2*(C-R)-1;S++){const M=Math.floor(S/2);S%2===0?(f(D[R][M+1]),f(D[R+1][M]),f(D[R][M])):(f(D[R][M+1]),f(D[R+1][M+1]),f(D[R+1][M]))}}function c(_){const y=new P;for(let b=0;b<s.length;b+=3)y.x=s[b+0],y.y=s[b+1],y.z=s[b+2],y.normalize().multiplyScalar(_),s[b+0]=y.x,s[b+1]=y.y,s[b+2]=y.z}function u(){const _=new P;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];const b=m(_)/2/Math.PI+.5,T=d(_)/Math.PI+.5;o.push(b,1-T)}g(),h()}function h(){for(let _=0;_<o.length;_+=6){const y=o[_+0],b=o[_+2],T=o[_+4],C=Math.max(y,b,T),D=Math.min(y,b,T);C>.9&&D<.1&&(y<.2&&(o[_+0]+=1),b<.2&&(o[_+2]+=1),T<.2&&(o[_+4]+=1))}}function f(_){s.push(_.x,_.y,_.z)}function p(_,y){const b=_*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function g(){const _=new P,y=new P,b=new P,T=new P,C=new me,D=new me,R=new me;for(let S=0,M=0;S<s.length;S+=9,M+=6){_.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),b.set(s[S+6],s[S+7],s[S+8]),C.set(o[M+0],o[M+1]),D.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),T.copy(_).add(y).add(b).divideScalar(3);const L=m(T);v(C,M+0,_,L),v(D,M+2,y,L),v(R,M+4,b,L)}}function v(_,y,b,T){T<0&&_.x===1&&(o[y]=_.x-1),b.x===0&&b.z===0&&(o[y]=T/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function d(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uf(e.vertices,e.indices,e.radius,e.detail)}}class Li{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new me:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new P,r=[],s=[],o=[],a=new P,l=new ht;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(st(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(st(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class hf extends Li{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new me){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class SS extends hf{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ff(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const za=new P,kc=new ff,Bc=new ff,zc=new ff;class MS extends Li{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new P){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(za.subVectors(r[0],r[1]).add(r[0]),c=za);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(za.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=za),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),kc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,v,m),Bc.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,v,m),zc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(kc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Bc.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),zc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(kc.calc(l),Bc.calc(l),zc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function yp(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function wS(t,e){const n=1-t;return n*n*e}function ES(t,e){return 2*(1-t)*t*e}function TS(t,e){return t*t*e}function zo(t,e,n,i){return wS(t,e)+ES(t,n)+TS(t,i)}function AS(t,e){const n=1-t;return n*n*n*e}function CS(t,e){const n=1-t;return 3*n*n*t*e}function PS(t,e){return 3*(1-t)*t*t*e}function RS(t,e){return t*t*t*e}function Vo(t,e,n,i,r){return AS(t,e)+CS(t,n)+PS(t,i)+RS(t,r)}class i_ extends Li{constructor(e=new me,n=new me,i=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new me){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Vo(e,r.x,s.x,o.x,a.x),Vo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class DS extends Li{constructor(e=new P,n=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new P){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Vo(e,r.x,s.x,o.x,a.x),Vo(e,r.y,s.y,o.y,a.y),Vo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class r_ extends Li{constructor(e=new me,n=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new me){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new me){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class IS extends Li{constructor(e=new P,n=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new P){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new P){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class s_ extends Li{constructor(e=new me,n=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new me){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(zo(e,r.x,s.x,o.x),zo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class LS extends Li{constructor(e=new P,n=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new P){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(zo(e,r.x,s.x,o.x),zo(e,r.y,s.y,o.y),zo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class o_ extends Li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new me){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(yp(a,l.x,c.x,u.x,h.x),yp(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new me().fromArray(r))}return this}}var uh=Object.freeze({__proto__:null,ArcCurve:SS,CatmullRomCurve3:MS,CubicBezierCurve:i_,CubicBezierCurve3:DS,EllipseCurve:hf,LineCurve:r_,LineCurve3:IS,QuadraticBezierCurve:s_,QuadraticBezierCurve3:LS,SplineCurve:o_});class NS extends Li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new uh[r.type]().fromJSON(r))}return this}}class hh extends NS{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new r_(this.currentPoint.clone(),new me(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new s_(this.currentPoint.clone(),new me(e,n),new me(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new i_(this.currentPoint.clone(),new me(e,n),new me(i,r),new me(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new o_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new hf(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ul extends hh{constructor(e){super(e),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new hh().fromJSON(r))}return this}}function US(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=a_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=zS(t,e,s,n)),t.length>80*n){a=t[0],l=t[1];let u=a,h=l;for(let f=n;f<r;f+=n){const p=t[f],g=t[f+1];p<a&&(a=p),g<l&&(l=g),p>u&&(u=p),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return jo(s,o,n,a,l,c,0),o}function a_(t,e,n,i,r){let s;if(r===ZS(t,e,n,i)>0)for(let o=e;o<n;o+=i)s=bp(o/i|0,t[o],t[o+1],s);else for(let o=n-i;o>=e;o-=i)s=bp(o/i|0,t[o],t[o+1],s);return s&&Zs(s,s.next)&&(ta(s),s=s.next),s}function is(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Zs(n,n.next)||Bt(n.prev,n,n.next)===0)){if(ta(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function jo(t,e,n,i,r,s,o){if(!t)return;!o&&s&&XS(t,i,r,s);let a=t;for(;t.prev!==t.next;){const l=t.prev,c=t.next;if(s?FS(t,i,r,s):OS(t)){e.push(l.i,t.i,c.i),ta(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=kS(is(t),e),jo(t,e,n,i,r,s,2)):o===2&&BS(t,e,n,i,r,s):jo(is(t),e,n,i,r,s,1);break}}}function OS(t){const e=t.prev,n=t,i=t.next;if(Bt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=Math.min(r,s,o),h=Math.min(a,l,c),f=Math.max(r,s,o),p=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&To(r,a,s,l,o,c,g.x,g.y)&&Bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function FS(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Bt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,p=Math.min(a,l,c),g=Math.min(u,h,f),v=Math.max(a,l,c),m=Math.max(u,h,f),d=fh(p,g,e,n,i),_=fh(v,m,e,n,i);let y=t.prevZ,b=t.nextZ;for(;y&&y.z>=d&&b&&b.z<=_;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&To(a,u,l,h,c,f,y.x,y.y)&&Bt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=v&&b.y>=g&&b.y<=m&&b!==r&&b!==o&&To(a,u,l,h,c,f,b.x,b.y)&&Bt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&To(a,u,l,h,c,f,y.x,y.y)&&Bt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=_;){if(b.x>=p&&b.x<=v&&b.y>=g&&b.y<=m&&b!==r&&b!==o&&To(a,u,l,h,c,f,b.x,b.y)&&Bt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function kS(t,e){let n=t;do{const i=n.prev,r=n.next.next;!Zs(i,r)&&c_(i,n,n.next,r)&&ea(i,r)&&ea(r,i)&&(e.push(i.i,n.i,r.i),ta(n),ta(n.next),n=t=r),n=n.next}while(n!==t);return is(n)}function BS(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&JS(o,a)){let l=u_(o,a);o=is(o,o.next),l=is(l,l.next),jo(o,e,n,i,r,s,0),jo(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function zS(t,e,n,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=a_(t,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(YS(c))}r.sort(VS);for(let s=0;s<r.length;s++)n=HS(r[s],n);return n}function VS(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),r=(e.next.y-e.y)/(e.next.x-e.x);n=i-r}return n}function HS(t,e){const n=GS(t,e);if(!n)return e;const i=u_(n,t);return is(i,i.next),is(n,n.next)}function GS(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,o;if(Zs(t,n))return n;do{if(Zs(t,n.next))return n.next;if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const h=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=i&&h>s&&(s=h,o=n.x<n.next.x?n:n.next,h===i))return o}n=n.next}while(n!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&l_(r<c?i:s,r,l,c,r<c?s:i,r,n.x,n.y)){const h=Math.abs(r-n.y)/(i-n.x);ea(n,t)&&(h<u||h===u&&(n.x>o.x||n.x===o.x&&WS(o,n)))&&(o=n,u=h)}n=n.next}while(n!==a);return o}function WS(t,e){return Bt(t.prev,t,e.prev)<0&&Bt(e.next,t,t.next)<0}function XS(t,e,n,i){let r=t;do r.z===0&&(r.z=fh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,qS(r)}function qS(t){let e,n=1;do{let i=t,r;t=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;i=o}s.nextZ=null,n*=2}while(e>1);return t}function fh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function YS(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function l_(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function To(t,e,n,i,r,s,o,a){return!(t===o&&e===a)&&l_(t,e,n,i,r,s,o,a)}function JS(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!$S(t,e)&&(ea(t,e)&&ea(e,t)&&KS(t,e)&&(Bt(t.prev,t,e.prev)||Bt(t,e.prev,e))||Zs(t,e)&&Bt(t.prev,t,t.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Zs(t,e){return t.x===e.x&&t.y===e.y}function c_(t,e,n,i){const r=Ha(Bt(t,e,n)),s=Ha(Bt(t,e,i)),o=Ha(Bt(n,i,t)),a=Ha(Bt(n,i,e));return!!(r!==s&&o!==a||r===0&&Va(t,n,e)||s===0&&Va(t,i,e)||o===0&&Va(n,t,i)||a===0&&Va(n,e,i))}function Va(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Ha(t){return t>0?1:t<0?-1:0}function $S(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&c_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function ea(t,e){return Bt(t.prev,t,t.next)<0?Bt(t,e,t.next)>=0&&Bt(t,t.prev,e)>=0:Bt(t,e,t.prev)<0||Bt(t,t.next,e)<0}function KS(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function u_(t,e){const n=dh(t.i,t.x,t.y),i=dh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function bp(t,e,n,i){const r=dh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ta(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function dh(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ZS(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class QS{static triangulate(e,n,i=2){return US(e,n,i)}}class Kr{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Kr.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];Sp(e),Mp(i,e);let o=e.length;n.forEach(Sp);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,Mp(i,n[l]);const a=QS.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Sp(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Mp(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class df extends ft{constructor(e=new ul([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new tt(r,3)),this.setAttribute("uv",new tt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,v=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,_=n.UVGenerator!==void 0?n.UVGenerator:jS;let y,b=!1,T,C,D,R;if(d){y=d.getSpacedPoints(u),b=!0,f=!1;const U=d.isCatmullRomCurve3?d.closed:!1;T=d.computeFrenetFrames(u,U),C=new P,D=new P,R=new P}f||(m=0,p=0,g=0,v=0);const S=a.extractPoints(c);let M=S.shape;const L=S.holes;if(!Kr.isClockWise(M)){M=M.reverse();for(let U=0,z=L.length;U<z;U++){const F=L[U];Kr.isClockWise(F)&&(L[U]=F.reverse())}}function q(U){const F=10000000000000001e-36;let X=U[0];for(let E=1;E<=U.length;E++){const re=E%U.length,Z=U[re],Q=Z.x-X.x,ie=Z.y-X.y,w=Q*Q+ie*ie,x=Math.max(Math.abs(Z.x),Math.abs(Z.y),Math.abs(X.x),Math.abs(X.y)),N=F*x*x;if(w<=N){U.splice(re,1),E--;continue}X=Z}}q(M),L.forEach(q);const j=L.length,J=M;for(let U=0;U<j;U++){const z=L[U];M=M.concat(z)}function W(U,z,F){return z||dt("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(z,F)}const k=M.length;function H(U,z,F){let X,E,re;const Z=U.x-z.x,Q=U.y-z.y,ie=F.x-U.x,w=F.y-U.y,x=Z*Z+Q*Q,N=Z*w-Q*ie;if(Math.abs(N)>Number.EPSILON){const Y=Math.sqrt(x),ne=Math.sqrt(ie*ie+w*w),$=z.x-Q/Y,we=z.y+Z/Y,he=F.x-w/ne,Pe=F.y+ie/ne,ze=((he-$)*w-(Pe-we)*ie)/(Z*w-Q*ie);X=$+Z*ze-U.x,E=we+Q*ze-U.y;const ue=X*X+E*E;if(ue<=2)return new me(X,E);re=Math.sqrt(ue/2)}else{let Y=!1;Z>Number.EPSILON?ie>Number.EPSILON&&(Y=!0):Z<-Number.EPSILON?ie<-Number.EPSILON&&(Y=!0):Math.sign(Q)===Math.sign(w)&&(Y=!0),Y?(X=-Q,E=Z,re=Math.sqrt(x)):(X=Z,E=Q,re=Math.sqrt(x/2))}return new me(X/re,E/re)}const ce=[];for(let U=0,z=J.length,F=z-1,X=U+1;U<z;U++,F++,X++)F===z&&(F=0),X===z&&(X=0),ce[U]=H(J[U],J[F],J[X]);const pe=[];let fe,ke=ce.concat();for(let U=0,z=j;U<z;U++){const F=L[U];fe=[];for(let X=0,E=F.length,re=E-1,Z=X+1;X<E;X++,re++,Z++)re===E&&(re=0),Z===E&&(Z=0),fe[X]=H(F[X],F[re],F[Z]);pe.push(fe),ke=ke.concat(fe)}let Le;if(m===0)Le=Kr.triangulateShape(J,L);else{const U=[],z=[];for(let F=0;F<m;F++){const X=F/m,E=p*Math.cos(X*Math.PI/2),re=g*Math.sin(X*Math.PI/2)+v;for(let Z=0,Q=J.length;Z<Q;Z++){const ie=W(J[Z],ce[Z],re);Ve(ie.x,ie.y,-E),X===0&&U.push(ie)}for(let Z=0,Q=j;Z<Q;Z++){const ie=L[Z];fe=pe[Z];const w=[];for(let x=0,N=ie.length;x<N;x++){const Y=W(ie[x],fe[x],re);Ve(Y.x,Y.y,-E),X===0&&w.push(Y)}X===0&&z.push(w)}}Le=Kr.triangulateShape(U,z)}const Qe=Le.length,ut=g+v;for(let U=0;U<k;U++){const z=f?W(M[U],ke[U],ut):M[U];b?(D.copy(T.normals[0]).multiplyScalar(z.x),C.copy(T.binormals[0]).multiplyScalar(z.y),R.copy(y[0]).add(D).add(C),Ve(R.x,R.y,R.z)):Ve(z.x,z.y,0)}for(let U=1;U<=u;U++)for(let z=0;z<k;z++){const F=f?W(M[z],ke[z],ut):M[z];b?(D.copy(T.normals[U]).multiplyScalar(F.x),C.copy(T.binormals[U]).multiplyScalar(F.y),R.copy(y[U]).add(D).add(C),Ve(R.x,R.y,R.z)):Ve(F.x,F.y,h/u*U)}for(let U=m-1;U>=0;U--){const z=U/m,F=p*Math.cos(z*Math.PI/2),X=g*Math.sin(z*Math.PI/2)+v;for(let E=0,re=J.length;E<re;E++){const Z=W(J[E],ce[E],X);Ve(Z.x,Z.y,h+F)}for(let E=0,re=L.length;E<re;E++){const Z=L[E];fe=pe[E];for(let Q=0,ie=Z.length;Q<ie;Q++){const w=W(Z[Q],fe[Q],X);b?Ve(w.x,w.y+y[u-1].y,y[u-1].x+F):Ve(w.x,w.y,h+F)}}}se(),oe();function se(){const U=r.length/3;if(f){let z=0,F=k*z;for(let X=0;X<Qe;X++){const E=Le[X];Me(E[2]+F,E[1]+F,E[0]+F)}z=u+m*2,F=k*z;for(let X=0;X<Qe;X++){const E=Le[X];Me(E[0]+F,E[1]+F,E[2]+F)}}else{for(let z=0;z<Qe;z++){const F=Le[z];Me(F[2],F[1],F[0])}for(let z=0;z<Qe;z++){const F=Le[z];Me(F[0]+k*u,F[1]+k*u,F[2]+k*u)}}i.addGroup(U,r.length/3-U,0)}function oe(){const U=r.length/3;let z=0;Ce(J,z),z+=J.length;for(let F=0,X=L.length;F<X;F++){const E=L[F];Ce(E,z),z+=E.length}i.addGroup(U,r.length/3-U,1)}function Ce(U,z){let F=U.length;for(;--F>=0;){const X=F;let E=F-1;E<0&&(E=U.length-1);for(let re=0,Z=u+m*2;re<Z;re++){const Q=k*re,ie=k*(re+1),w=z+X+Q,x=z+E+Q,N=z+E+ie,Y=z+X+ie;at(w,x,N,Y)}}}function Ve(U,z,F){l.push(U),l.push(z),l.push(F)}function Me(U,z,F){I(U),I(z),I(F);const X=r.length/3,E=_.generateTopUV(i,r,X-3,X-2,X-1);O(E[0]),O(E[1]),O(E[2])}function at(U,z,F,X){I(U),I(z),I(X),I(z),I(F),I(X);const E=r.length/3,re=_.generateSideWallUV(i,r,E-6,E-3,E-2,E-1);O(re[0]),O(re[1]),O(re[3]),O(re[1]),O(re[2]),O(re[3])}function I(U){r.push(l[U*3+0]),r.push(l[U*3+1]),r.push(l[U*3+2])}function O(U){s.push(U.x),s.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return eM(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new uh[r.type]().fromJSON(r)),new df(i,e.options)}}const jS={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new me(s,o),new me(a,l),new me(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],p=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new me(o,1-l),new me(c,1-h),new me(f,1-g),new me(v,1-d)]:[new me(a,1-l),new me(u,1-h),new me(p,1-g),new me(m,1-d)]}};function eM(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Is extends uf{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Is(e.radius,e.detail)}}class ca extends ft{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=n/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const _=d*f-o;for(let y=0;y<c;y++){const b=y*h-s;g.push(b,-_,0),v.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const y=_+c*d,b=_+c*(d+1),T=_+1+c*(d+1),C=_+1+c*d;p.push(y,b,C),p.push(b,T,C)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.widthSegments,e.heightSegments)}}class ua extends ft{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new P,f=new P,p=[],g=[],v=[],m=[];for(let d=0;d<=i;d++){const _=[],y=d/i;let b=0;d===0&&o===0?b=.5/n:d===i&&l===Math.PI&&(b=-.5/n);for(let T=0;T<=n;T++){const C=T/n;h.x=-e*Math.cos(r+C*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(C+b,1-y),_.push(c++)}u.push(_)}for(let d=0;d<i;d++)for(let _=0;_<n;_++){const y=u[d][_+1],b=u[d][_],T=u[d+1][_],C=u[d+1][_+1];(d!==0||o>0)&&p.push(y,b,C),(d!==i-1||l<Math.PI)&&p.push(b,T,C)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _r extends ft{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new P,h=new P,f=new P;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const v=g/r*s,m=p/i*Math.PI*2;h.x=(e+n*Math.cos(m))*Math.cos(v),h.y=(e+n*Math.cos(m))*Math.sin(v),h.z=n*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const v=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,_=(r+1)*p+g;o.push(v,m,_),o.push(m,d,_)}this.setIndex(o),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class tM extends ci{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class io extends ls{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=W0,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nM extends io{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class iM extends ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rM extends ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wp={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class sM{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const oM=new sM;class pf{constructor(e){this.manager=e!==void 0?e:oM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}pf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vi={};class aM extends Error{constructor(e,n){super(e),this.response=n}}class lM extends pf{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=wp.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(Vi[e]!==void 0){Vi[e].push({onLoad:n,onProgress:i,onError:r});return}Vi[e]=[],Vi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Je("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Vi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let v=0;const m=new ReadableStream({start(d){_();function _(){h.read().then(({done:y,value:b})=>{if(y)d.close();else{v+=b.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let C=0,D=u.length;C<D;C++){const R=u[C];R.onProgress&&R.onProgress(T)}d.enqueue(b),_()}},y=>{d.error(y)})}}});return new Response(m)}else throw new aM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{wp.add(`file:${e}`,c);const u=Vi[e];delete Vi[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Vi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Vi[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class ha extends Tt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Vc=new ht,Ep=new P,Tp=new P;class mf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sf,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ep.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ep),Tp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Tp),n.updateMatrixWorld(),Vc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cM extends mf{constructor(){super(new Nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=$s*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class uM extends ha{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new cM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class hM extends mf{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0}}class fM extends ha{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new hM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class gf extends Q0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class dM extends mf{constructor(){super(new gf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class h_ extends ha{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new dM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class f_ extends ha{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class pM extends ha{constructor(e,n,i=10,r=10){super(e,n),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const n=super.toJSON(e);return n.object.width=this.width,n.object.height=this.height,n}}class mM extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ap=new ht;class d_{constructor(e,n,i=0,r=1/0){this.ray=new la(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new rf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):dt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Ap.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ap),this}intersectObject(e,n=!0,i=[]){return ph(e,this,i,n),i.sort(Cp),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ph(e[r],this,i,n);return i.sort(Cp),i}}function Cp(t,e){return t.distance-e.distance}function ph(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)ph(s[o],e,n,!0)}}class Pp{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=st(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(st(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Rp=new P;class gM extends Tt{constructor(e,n){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=n,this.type="SpotLightHelper";const i=new ft,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,u=a/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}i.setAttribute("position",new tt(r,3));const s=new ui({fog:!1,toneMapped:!1});this.cone=new t_(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,n=e*Math.tan(this.light.angle);this.cone.scale.set(n,n,e),Rp.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Rp),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class _M extends _e{constructor(e,n,i){const r=new ua(n,4,2),s=new Rr({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Dp=new P,Ga=new P,Ip=new P;class vM extends Tt{constructor(e,n,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",n===void 0&&(n=1);let r=new ft;r.setAttribute("position",new tt([-n,n,0,n,n,0,n,-n,0,-n,-n,0,-n,n,0],3));const s=new ui({fog:!1,toneMapped:!1});this.lightPlane=new on(r,s),this.add(this.lightPlane),r=new ft,r.setAttribute("position",new tt([0,0,0,0,0,1],3)),this.targetLine=new on(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Dp.setFromMatrixPosition(this.light.matrixWorld),Ga.setFromMatrixPosition(this.light.target.matrixWorld),Ip.subVectors(Ga,Dp),this.lightPlane.lookAt(Ga),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ga),this.targetLine.scale.z=Ip.length()}}class xM extends on{constructor(e,n=1,i=16776960){const r=i,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new ft;o.setAttribute("position",new tt(s,3)),o.computeBoundingSphere(),super(o,new ui({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=n;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new ft;l.setAttribute("position",new tt(a,3)),l.computeBoundingSphere(),this.add(new _e(l,new Rr({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Lp=new P;let Wa,Hc;class _f extends Tt{constructor(e=new P(0,0,1),n=new P(0,0,0),i=1,r=16776960,s=i*.2,o=s*.2){super(),this.type="ArrowHelper",Wa===void 0&&(Wa=new ft,Wa.setAttribute("position",new tt([0,0,0,0,1,0],3)),Hc=new $l(.5,1,5,1),Hc.translate(0,-.5,0)),this.position.copy(n),this.line=new on(Wa,new ui({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new _e(Hc,new Rr({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Lp.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(Lp,n)}}setLength(e,n=e*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class p_ extends t_{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new ft;r.setAttribute("position",new tt(n,3)),r.setAttribute("color",new tt(i,3));const s=new ui({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new Ze,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class yM{constructor(){this.type="ShapePath",this.color=new Ze,this.subPaths=[],this.currentPath=null}moveTo(e,n){return this.currentPath=new hh,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,n),this}lineTo(e,n){return this.currentPath.lineTo(e,n),this}quadraticCurveTo(e,n,i,r){return this.currentPath.quadraticCurveTo(e,n,i,r),this}bezierCurveTo(e,n,i,r,s,o){return this.currentPath.bezierCurveTo(e,n,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function n(d){const _=[];for(let y=0,b=d.length;y<b;y++){const T=d[y],C=new ul;C.curves=T.curves,_.push(C)}return _}function i(d,_){const y=_.length;let b=!1;for(let T=y-1,C=0;C<y;T=C++){let D=_[T],R=_[C],S=R.x-D.x,M=R.y-D.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(D=_[C],S=-S,R=_[T],M=-M),d.y<D.y||d.y>R.y)continue;if(d.y===D.y){if(d.x===D.x)return!0}else{const L=M*(d.x-D.x)-S*(d.y-D.y);if(L===0)return!0;if(L<0)continue;b=!b}}else{if(d.y!==D.y)continue;if(R.x<=d.x&&d.x<=D.x||D.x<=d.x&&d.x<=R.x)return!0}}return b}const r=Kr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new ul,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],f=[];let p=[],g=0,v;f[g]=void 0,p[g]=[];for(let d=0,_=s.length;d<_;d++)a=s[d],v=a.getPoints(),o=r(v),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new ul,p:v},f[g].s.curves=a.curves,u&&g++,p[g]=[]):p[g].push({h:a,p:v[0]});if(!f[0])return n(s);if(f.length>1){let d=!1,_=0;for(let y=0,b=f.length;y<b;y++)h[y]=[];for(let y=0,b=f.length;y<b;y++){const T=p[y];for(let C=0;C<T.length;C++){const D=T[C];let R=!0;for(let S=0;S<f.length;S++)i(D.p,f[S].p)&&(y!==S&&_++,R?(R=!1,h[S].push(D)):d=!0);R&&h[y].push(D)}}_>0&&d===!1&&(p=h)}let m;for(let d=0,_=f.length;d<_;d++){l=f[d].s,c.push(l),m=p[d];for(let y=0,b=m.length;y<b;y++)l.holes.push(m[y].h)}return c}}class m_ extends os{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Je("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Np(t,e,n,i){const r=bM(i);switch(n){case V0:return t*e;case G0:return t*e/r.components*r.byteLength;case Kh:return t*e/r.components*r.byteLength;case Ys:return t*e*2/r.components*r.byteLength;case Zh:return t*e*2/r.components*r.byteLength;case H0:return t*e*3/r.components*r.byteLength;case ri:return t*e*4/r.components*r.byteLength;case Qh:return t*e*4/r.components*r.byteLength;case ol:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ll:case cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Iu:case Nu:return Math.max(t,16)*Math.max(e,8)/4;case Du:case Lu:return Math.max(t,8)*Math.max(e,8)/2;case Uu:case Ou:case ku:case Bu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Fu:case zu:case Vu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Wu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case qu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $u:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ku:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Qu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ju:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case eh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case th:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case nh:case ih:case rh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case sh:case oh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ah:case lh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function bM(t){switch(t){case Wn:case F0:return{byteLength:1,components:1};case $o:case k0:case tr:return{byteLength:2,components:1};case Jh:case $h:return{byteLength:2,components:4};case Ri:case Yh:case bi:return{byteLength:4,components:1};case B0:case z0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xh}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xh);function g_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function SM(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var MM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wM=`#ifdef USE_ALPHAHASH
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
#endif`,EM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PM=`#ifdef USE_AOMAP
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
#endif`,RM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DM=`#ifdef USE_BATCHING
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
#endif`,IM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OM=`#ifdef USE_IRIDESCENCE
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
#endif`,FM=`#ifdef USE_BUMPMAP
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
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qM=`#define PI 3.141592653589793
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
} // validated`,YM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JM=`vec3 transformedNormal = objectNormal;
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
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jM="gl_FragColor = linearToOutputTexel( gl_FragColor );",ew=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tw=`#ifdef USE_ENVMAP
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
#endif`,nw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iw=`#ifdef USE_ENVMAP
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
#endif`,rw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sw=`#ifdef USE_ENVMAP
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
#endif`,ow=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uw=`#ifdef USE_GRADIENTMAP
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
}`,hw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pw=`uniform bool receiveShadow;
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
#endif`,mw=`#ifdef USE_ENVMAP
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
#endif`,gw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_w=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yw=`PhysicalMaterial material;
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
#endif`,bw=`uniform sampler2D dfgLUT;
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
}`,Sw=`
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
#endif`,Mw=`#if defined( RE_IndirectDiffuse )
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
#endif`,ww=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ew=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Aw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iw=`#if defined( USE_POINTS_UV )
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
#endif`,Lw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ow=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kw=`#ifdef USE_MORPHTARGETS
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
#endif`,Bw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ww=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xw=`#ifdef USE_NORMALMAP
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
#endif`,qw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$w=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,aE=`float getShadowMask() {
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
}`,lE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cE=`#ifdef USE_SKINNING
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
#endif`,uE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hE=`#ifdef USE_SKINNING
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
#endif`,fE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gE=`#ifdef USE_TRANSMISSION
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
#endif`,_E=`#ifdef USE_TRANSMISSION
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ME=`uniform sampler2D t2D;
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
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`#include <common>
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
}`,PE=`#if DEPTH_PACKING == 3200
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
}`,RE=`#define DISTANCE
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
}`,DE=`#define DISTANCE
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
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`uniform float scale;
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
}`,UE=`uniform vec3 diffuse;
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
}`,OE=`#include <common>
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
}`,FE=`uniform vec3 diffuse;
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
}`,kE=`#define LAMBERT
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
}`,BE=`#define LAMBERT
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
}`,zE=`#define MATCAP
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
}`,VE=`#define MATCAP
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
}`,HE=`#define NORMAL
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
}`,GE=`#define NORMAL
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
}`,WE=`#define PHONG
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
}`,XE=`#define PHONG
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
}`,qE=`#define STANDARD
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
}`,YE=`#define STANDARD
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
}`,JE=`#define TOON
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
}`,$E=`#define TOON
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
}`,KE=`uniform float size;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,QE=`#include <common>
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
}`,jE=`uniform vec3 color;
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
}`,e1=`uniform float rotation;
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
}`,t1=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:MM,alphahash_pars_fragment:wM,alphamap_fragment:EM,alphamap_pars_fragment:TM,alphatest_fragment:AM,alphatest_pars_fragment:CM,aomap_fragment:PM,aomap_pars_fragment:RM,batching_pars_vertex:DM,batching_vertex:IM,begin_vertex:LM,beginnormal_vertex:NM,bsdfs:UM,iridescence_fragment:OM,bumpmap_pars_fragment:FM,clipping_planes_fragment:kM,clipping_planes_pars_fragment:BM,clipping_planes_pars_vertex:zM,clipping_planes_vertex:VM,color_fragment:HM,color_pars_fragment:GM,color_pars_vertex:WM,color_vertex:XM,common:qM,cube_uv_reflection_fragment:YM,defaultnormal_vertex:JM,displacementmap_pars_vertex:$M,displacementmap_vertex:KM,emissivemap_fragment:ZM,emissivemap_pars_fragment:QM,colorspace_fragment:jM,colorspace_pars_fragment:ew,envmap_fragment:tw,envmap_common_pars_fragment:nw,envmap_pars_fragment:iw,envmap_pars_vertex:rw,envmap_physical_pars_fragment:mw,envmap_vertex:sw,fog_vertex:ow,fog_pars_vertex:aw,fog_fragment:lw,fog_pars_fragment:cw,gradientmap_pars_fragment:uw,lightmap_pars_fragment:hw,lights_lambert_fragment:fw,lights_lambert_pars_fragment:dw,lights_pars_begin:pw,lights_toon_fragment:gw,lights_toon_pars_fragment:_w,lights_phong_fragment:vw,lights_phong_pars_fragment:xw,lights_physical_fragment:yw,lights_physical_pars_fragment:bw,lights_fragment_begin:Sw,lights_fragment_maps:Mw,lights_fragment_end:ww,logdepthbuf_fragment:Ew,logdepthbuf_pars_fragment:Tw,logdepthbuf_pars_vertex:Aw,logdepthbuf_vertex:Cw,map_fragment:Pw,map_pars_fragment:Rw,map_particle_fragment:Dw,map_particle_pars_fragment:Iw,metalnessmap_fragment:Lw,metalnessmap_pars_fragment:Nw,morphinstance_vertex:Uw,morphcolor_vertex:Ow,morphnormal_vertex:Fw,morphtarget_pars_vertex:kw,morphtarget_vertex:Bw,normal_fragment_begin:zw,normal_fragment_maps:Vw,normal_pars_fragment:Hw,normal_pars_vertex:Gw,normal_vertex:Ww,normalmap_pars_fragment:Xw,clearcoat_normal_fragment_begin:qw,clearcoat_normal_fragment_maps:Yw,clearcoat_pars_fragment:Jw,iridescence_pars_fragment:$w,opaque_fragment:Kw,packing:Zw,premultiplied_alpha_fragment:Qw,project_vertex:jw,dithering_fragment:eE,dithering_pars_fragment:tE,roughnessmap_fragment:nE,roughnessmap_pars_fragment:iE,shadowmap_pars_fragment:rE,shadowmap_pars_vertex:sE,shadowmap_vertex:oE,shadowmask_pars_fragment:aE,skinbase_vertex:lE,skinning_pars_vertex:cE,skinning_vertex:uE,skinnormal_vertex:hE,specularmap_fragment:fE,specularmap_pars_fragment:dE,tonemapping_fragment:pE,tonemapping_pars_fragment:mE,transmission_fragment:gE,transmission_pars_fragment:_E,uv_pars_fragment:vE,uv_pars_vertex:xE,uv_vertex:yE,worldpos_vertex:bE,background_vert:SE,background_frag:ME,backgroundCube_vert:wE,backgroundCube_frag:EE,cube_vert:TE,cube_frag:AE,depth_vert:CE,depth_frag:PE,distance_vert:RE,distance_frag:DE,equirect_vert:IE,equirect_frag:LE,linedashed_vert:NE,linedashed_frag:UE,meshbasic_vert:OE,meshbasic_frag:FE,meshlambert_vert:kE,meshlambert_frag:BE,meshmatcap_vert:zE,meshmatcap_frag:VE,meshnormal_vert:HE,meshnormal_frag:GE,meshphong_vert:WE,meshphong_frag:XE,meshphysical_vert:qE,meshphysical_frag:YE,meshtoon_vert:JE,meshtoon_frag:$E,points_vert:KE,points_frag:ZE,shadow_vert:QE,shadow_frag:jE,sprite_vert:e1,sprite_frag:t1},Ae={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},xi={basic:{uniforms:Mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Mn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Mn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Mn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Mn([Ae.points,Ae.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Mn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Mn([Ae.common,Ae.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Mn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Mn([Ae.sprite,Ae.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:Mn([Ae.common,Ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:Mn([Ae.lights,Ae.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};xi.physical={uniforms:Mn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Xa={r:0,b:0,g:0},zr=new li,n1=new ht;function i1(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?n:e).get(b)),b}function v(y){let b=!1;const T=g(y);T===null?d(a,l):T&&T.isColor&&(d(T,1),b=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(y,b){const T=g(b);T&&(T.isCubeTexture||T.mapping===Jl)?(u===void 0&&(u=new _e(new Ht(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Ks(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,D,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),zr.copy(b.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(n1.makeRotationFromEuler(zr)),u.material.toneMapped=mt.getTransfer(T.colorSpace)!==St,(h!==T||f!==T.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=T,f=T.version,p=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new _e(new ca(2,2),new ci({name:"BackgroundMaterial",uniforms:Ks(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=mt.getTransfer(T.colorSpace)!==St,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=T,f=T.version,p=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,b){y.getRGB(Xa,K0(t)),i.buffers.color.setClear(Xa.r,Xa.g,Xa.b,b,o)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:v,addToRenderList:m,dispose:_}}function r1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,L,V,q,j){let J=!1;const W=h(q,V,L);s!==W&&(s=W,c(s.object)),J=p(M,q,V,j),J&&g(M,q,V,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,b(M,L,V,q),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function h(M,L,V){const q=V.wireframe===!0;let j=i[M.id];j===void 0&&(j={},i[M.id]=j);let J=j[L.id];J===void 0&&(J={},j[L.id]=J);let W=J[q];return W===void 0&&(W=f(l()),J[q]=W),W}function f(M){const L=[],V=[],q=[];for(let j=0;j<n;j++)L[j]=0,V[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:q,object:M,attributes:{},index:null}}function p(M,L,V,q){const j=s.attributes,J=L.attributes;let W=0;const k=V.getAttributes();for(const H in k)if(k[H].location>=0){const pe=j[H];let fe=J[H];if(fe===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),pe===void 0||pe.attribute!==fe||fe&&pe.data!==fe.data)return!0;W++}return s.attributesNum!==W||s.index!==q}function g(M,L,V,q){const j={},J=L.attributes;let W=0;const k=V.getAttributes();for(const H in k)if(k[H].location>=0){let pe=J[H];pe===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));const fe={};fe.attribute=pe,pe&&pe.data&&(fe.data=pe.data),j[H]=fe,W++}s.attributes=j,s.attributesNum=W,s.index=q}function v(){const M=s.newAttributes;for(let L=0,V=M.length;L<V;L++)M[L]=0}function m(M){d(M,0)}function d(M,L){const V=s.newAttributes,q=s.enabledAttributes,j=s.attributeDivisors;V[M]=1,q[M]===0&&(t.enableVertexAttribArray(M),q[M]=1),j[M]!==L&&(t.vertexAttribDivisor(M,L),j[M]=L)}function _(){const M=s.newAttributes,L=s.enabledAttributes;for(let V=0,q=L.length;V<q;V++)L[V]!==M[V]&&(t.disableVertexAttribArray(V),L[V]=0)}function y(M,L,V,q,j,J,W){W===!0?t.vertexAttribIPointer(M,L,V,j,J):t.vertexAttribPointer(M,L,V,q,j,J)}function b(M,L,V,q){v();const j=q.attributes,J=V.getAttributes(),W=L.defaultAttributeValues;for(const k in J){const H=J[k];if(H.location>=0){let ce=j[k];if(ce===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){const pe=ce.normalized,fe=ce.itemSize,ke=e.get(ce);if(ke===void 0)continue;const Le=ke.buffer,Qe=ke.type,ut=ke.bytesPerElement,se=Qe===t.INT||Qe===t.UNSIGNED_INT||ce.gpuType===Yh;if(ce.isInterleavedBufferAttribute){const oe=ce.data,Ce=oe.stride,Ve=ce.offset;if(oe.isInstancedInterleavedBuffer){for(let Me=0;Me<H.locationSize;Me++)d(H.location+Me,oe.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Me=0;Me<H.locationSize;Me++)m(H.location+Me);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let Me=0;Me<H.locationSize;Me++)y(H.location+Me,fe/H.locationSize,Qe,pe,Ce*ut,(Ve+fe/H.locationSize*Me)*ut,se)}else{if(ce.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)d(H.location+oe,ce.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let oe=0;oe<H.locationSize;oe++)m(H.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let oe=0;oe<H.locationSize;oe++)y(H.location+oe,fe/H.locationSize,Qe,pe,fe*ut,fe/H.locationSize*oe*ut,se)}}else if(W!==void 0){const pe=W[k];if(pe!==void 0)switch(pe.length){case 2:t.vertexAttrib2fv(H.location,pe);break;case 3:t.vertexAttrib3fv(H.location,pe);break;case 4:t.vertexAttrib4fv(H.location,pe);break;default:t.vertexAttrib1fv(H.location,pe)}}}}_()}function T(){R();for(const M in i){const L=i[M];for(const V in L){const q=L[V];for(const j in q)u(q[j].object),delete q[j];delete L[V]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const V in L){const q=L[V];for(const j in q)u(q[j].object),delete q[j];delete L[V]}delete i[M.id]}function D(M){for(const L in i){const V=i[L];if(V[M.id]===void 0)continue;const q=V[M.id];for(const j in q)u(q[j].object),delete q[j];delete V[M.id]}}function R(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function s1(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];n.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function o1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==ri&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const R=D===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Wn&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==bi&&!R)}function l(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:b,maxSamples:T,samples:C}}function a1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Xi,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,y=_*4;let b=d.clippingState||null;l.value=b,b=u(g,f,y,p);for(let T=0;T!==y;++T)b[T]=n[T];d.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,b=p;y!==v;++y,b+=4)o.copy(h[y]).applyMatrix4(_,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function l1(t){let e=new WeakMap;function n(o,a){return a===Au?o.mapping=ns:a===Cu&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Au||a===Cu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new e_(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Mr=4,Up=[.125,.215,.35,.446,.526,.582],Yr=20,c1=256,xo=new gf,Op=new Ze;let Gc=null,Wc=0,Xc=0,qc=!1;const u1=new P;class Fp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=u1}=s;Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Wc,Xc),this._renderer.xr.enabled=qc,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:tr,format:ri,colorSpace:Js,depthBuffer:!1},r=kp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kp(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=h1(s)),this._blurMaterial=d1(s,e,n),this._ggxMaterial=f1(s,e,n)}return r}_compileMaterial(e){const n=new _e(new ft,e);this._renderer.compile(n,xo)}_sceneToCubeUV(e,n,i,r,s){const l=new Nn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Op),h.toneMapping=wi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new Ht,new Rr({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,d=!0):(m.color.copy(Op),d=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):b===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const T=this._cubeSize;Es(r,b*T,y>2?T:0,T,T),h.setRenderTarget(r),d&&h.render(v,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ns||e.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Es(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,xo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Mr?i-g+Mr:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Es(s,m,d,3*v,2*v),r.setRenderTarget(s),r.render(a,xo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Es(e,m,d,3*v,2*v),r.setRenderTarget(e),r.render(a,xo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&dt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Yr-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Yr;m>Yr&&Je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yr}`);const d=[];let _=0;for(let D=0;D<Yr;++D){const R=D/v,S=Math.exp(-R*R/2);d.push(S),D===0?_+=S:D<m&&(_+=2*S)}for(let D=0;D<d.length;D++)d[D]=d[D]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const b=this._sizeLods[r],T=3*b*(r>y-Mr?r-y+Mr:0),C=4*(this._cubeSize-b);Es(n,T,C,3*b,2*b),l.setRenderTarget(n),l.render(h,xo)}}function h1(t){const e=[],n=[],i=[];let r=t;const s=t-Mr+1+Up.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Mr?l=Up[o-t+Mr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,_=new Float32Array(v*g*p),y=new Float32Array(m*g*p),b=new Float32Array(d*g*p);for(let C=0;C<p;C++){const D=C%3*2/3-1,R=C>2?0:-1,S=[D,R,0,D+2/3,R,0,D+2/3,R+1,0,D,R,0,D+2/3,R+1,0,D,R+1,0];_.set(S,v*g*C),y.set(f,m*g*C);const M=[C,C,C,C,C,C];b.set(M,d*g*C)}const T=new ft;T.setAttribute("position",new xn(_,v)),T.setAttribute("uv",new xn(y,m)),T.setAttribute("faceIndex",new xn(b,d)),i.push(new _e(T,null)),r>Mr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function kp(t,e,n){const i=new Ei(t,e,n);return i.texture.mapping=Jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Es(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function f1(t,e,n){return new ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:c1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function d1(t,e,n){const i=new Float32Array(Yr),r=new P(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Bp(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function zp(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Kl(){return`

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
	`}function p1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Au||l===Cu,u=l===ns||l===qs;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Fp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Fp(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function m1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Zo("WebGLRenderer: "+i+" extension not supported."),r}}}function g1(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let y=0,b=_.length;y<b;y+=3){const T=_[y+0],C=_[y+1],D=_[y+2];f.push(T,C,C,D,D,T)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,b=_.length/3-1;y<b;y+=3){const T=y+0,C=y+1,D=y+2;f.push(T,C,C,D,D,T)}}else return;const m=new(X0(f)?$0:J0)(f,1);m.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function _1(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,f*o,g),n.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];n.update(m,i,1)}function h(f,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_]*v[_];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function v1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:dt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function x1(t,e,n){const i=new WeakMap,r=new Gt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let T=a.attributes.position.count*b,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const D=new Float32Array(T*C*4*h),R=new q0(D,T,C,h);R.type=bi,R.needsUpdate=!0;const S=b*4;for(let L=0;L<h;L++){const V=d[L],q=_[L],j=y[L],J=T*C*4*L;for(let W=0;W<V.count;W++){const k=W*S;g===!0&&(r.fromBufferAttribute(V,W),D[J+k+0]=r.x,D[J+k+1]=r.y,D[J+k+2]=r.z,D[J+k+3]=0),v===!0&&(r.fromBufferAttribute(q,W),D[J+k+4]=r.x,D[J+k+5]=r.y,D[J+k+6]=r.z,D[J+k+7]=0),m===!0&&(r.fromBufferAttribute(j,W),D[J+k+8]=r.x,D[J+k+9]=r.y,D[J+k+10]=r.z,D[J+k+11]=j.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new me(T,C)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function y1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const b1={[R0]:"LINEAR_TONE_MAPPING",[D0]:"REINHARD_TONE_MAPPING",[I0]:"CINEON_TONE_MAPPING",[qh]:"ACES_FILMIC_TONE_MAPPING",[N0]:"AGX_TONE_MAPPING",[U0]:"NEUTRAL_TONE_MAPPING",[L0]:"CUSTOM_TONE_MAPPING"};function S1(t,e,n,i,r){const s=new Ei(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),o=new Ei(e,n,{type:tr,depthBuffer:!1,stencilBuffer:!1}),a=new ft;a.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new tt([0,2,0,0,2,0],2));const l=new tM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new _e(a,l),u=new gf(-1,1,1,-1,0,1);let h=null,f=null,p=!1,g,v=null,m=[],d=!1;this.setSize=function(_,y){s.setSize(_,y),o.setSize(_,y);for(let b=0;b<m.length;b++){const T=m[b];T.setSize&&T.setSize(_,y)}},this.setEffects=function(_){m=_,d=m.length>0&&m[0].isRenderPass===!0;const y=s.width,b=s.height;for(let T=0;T<m.length;T++){const C=m[T];C.setSize&&C.setSize(y,b)}},this.begin=function(_,y){if(p||_.toneMapping===wi&&m.length===0)return!1;if(v=y,y!==null){const b=y.width,T=y.height;(s.width!==b||s.height!==T)&&this.setSize(b,T)}return d===!1&&_.setRenderTarget(s),g=_.toneMapping,_.toneMapping=wi,!0},this.hasRenderPass=function(){return d},this.end=function(_,y){_.toneMapping=g,p=!0;let b=s,T=o;for(let C=0;C<m.length;C++){const D=m[C];if(D.enabled!==!1&&(D.render(_,T,b,y),D.needsSwap!==!1)){const R=b;b=T,T=R}}if(h!==_.outputColorSpace||f!==_.toneMapping){h=_.outputColorSpace,f=_.toneMapping,l.defines={},mt.getTransfer(h)===St&&(l.defines.SRGB_TRANSFER="");const C=b1[f];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(v),_.render(c,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const __=new An,mh=new Qo(1,1),v_=new q0,x_=new jb,y_=new j0,Vp=[],Hp=[],Gp=new Float32Array(16),Wp=new Float32Array(9),Xp=new Float32Array(4);function ro(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Vp[r];if(s===void 0&&(s=new Float32Array(r),Vp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function tn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function nn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Zl(t,e){let n=Hp[e];n===void 0&&(n=new Int32Array(e),Hp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function M1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function w1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;t.uniform2fv(this.addr,e),nn(n,e)}}function E1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(tn(n,e))return;t.uniform3fv(this.addr,e),nn(n,e)}}function T1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;t.uniform4fv(this.addr,e),nn(n,e)}}function A1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(tn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,i))return;Xp.set(i),t.uniformMatrix2fv(this.addr,!1,Xp),nn(n,i)}}function C1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(tn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,i))return;Wp.set(i),t.uniformMatrix3fv(this.addr,!1,Wp),nn(n,i)}}function P1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(tn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,i))return;Gp.set(i),t.uniformMatrix4fv(this.addr,!1,Gp),nn(n,i)}}function R1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function D1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;t.uniform2iv(this.addr,e),nn(n,e)}}function I1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;t.uniform3iv(this.addr,e),nn(n,e)}}function L1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;t.uniform4iv(this.addr,e),nn(n,e)}}function N1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function U1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;t.uniform2uiv(this.addr,e),nn(n,e)}}function O1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;t.uniform3uiv(this.addr,e),nn(n,e)}}function F1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;t.uniform4uiv(this.addr,e),nn(n,e)}}function k1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(mh.compareFunction=n.isReversedDepthBuffer()?ef:jh,s=mh):s=__,n.setTexture2D(e||s,r)}function B1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||x_,r)}function z1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||y_,r)}function V1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||v_,r)}function H1(t){switch(t){case 5126:return M1;case 35664:return w1;case 35665:return E1;case 35666:return T1;case 35674:return A1;case 35675:return C1;case 35676:return P1;case 5124:case 35670:return R1;case 35667:case 35671:return D1;case 35668:case 35672:return I1;case 35669:case 35673:return L1;case 5125:return N1;case 36294:return U1;case 36295:return O1;case 36296:return F1;case 35678:case 36198:case 36298:case 36306:case 35682:return k1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return z1;case 36289:case 36303:case 36311:case 36292:return V1}}function G1(t,e){t.uniform1fv(this.addr,e)}function W1(t,e){const n=ro(e,this.size,2);t.uniform2fv(this.addr,n)}function X1(t,e){const n=ro(e,this.size,3);t.uniform3fv(this.addr,n)}function q1(t,e){const n=ro(e,this.size,4);t.uniform4fv(this.addr,n)}function Y1(t,e){const n=ro(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function J1(t,e){const n=ro(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $1(t,e){const n=ro(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function K1(t,e){t.uniform1iv(this.addr,e)}function Z1(t,e){t.uniform2iv(this.addr,e)}function Q1(t,e){t.uniform3iv(this.addr,e)}function j1(t,e){t.uniform4iv(this.addr,e)}function eT(t,e){t.uniform1uiv(this.addr,e)}function tT(t,e){t.uniform2uiv(this.addr,e)}function nT(t,e){t.uniform3uiv(this.addr,e)}function iT(t,e){t.uniform4uiv(this.addr,e)}function rT(t,e,n){const i=this.cache,r=e.length,s=Zl(n,r);tn(i,s)||(t.uniform1iv(this.addr,s),nn(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=mh:o=__;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function sT(t,e,n){const i=this.cache,r=e.length,s=Zl(n,r);tn(i,s)||(t.uniform1iv(this.addr,s),nn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||x_,s[o])}function oT(t,e,n){const i=this.cache,r=e.length,s=Zl(n,r);tn(i,s)||(t.uniform1iv(this.addr,s),nn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||y_,s[o])}function aT(t,e,n){const i=this.cache,r=e.length,s=Zl(n,r);tn(i,s)||(t.uniform1iv(this.addr,s),nn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||v_,s[o])}function lT(t){switch(t){case 5126:return G1;case 35664:return W1;case 35665:return X1;case 35666:return q1;case 35674:return Y1;case 35675:return J1;case 35676:return $1;case 5124:case 35670:return K1;case 35667:case 35671:return Z1;case 35668:case 35672:return Q1;case 35669:case 35673:return j1;case 5125:return eT;case 36294:return tT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return aT}}class cT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=H1(n.type)}}class uT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lT(n.type)}}class hT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Yc=/(\w+)(\])?(\[|\.)?/g;function qp(t,e){t.seq.push(e),t.map[e.id]=e}function fT(t,e,n){const i=t.name,r=i.length;for(Yc.lastIndex=0;;){const s=Yc.exec(i),o=Yc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){qp(n,c===void 0?new cT(a,t,e):new uT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new hT(a),qp(n,h)),n=h}}}class hl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);fT(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Yp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const dT=37297;let pT=0;function mT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Jp=new rt;function gT(t){mt._getMatrix(Jp,mt.workingColorSpace,t);const e=`mat3( ${Jp.elements.map(n=>n.toFixed(4))} )`;switch(mt.getTransfer(t)){case El:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function $p(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+mT(t.getShaderSource(e),a)}else return s}function _T(t,e){const n=gT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const vT={[R0]:"Linear",[D0]:"Reinhard",[I0]:"Cineon",[qh]:"ACESFilmic",[N0]:"AgX",[U0]:"Neutral",[L0]:"Custom"};function xT(t,e){const n=vT[e];return n===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const qa=new P;function yT(){mt.getLuminanceCoefficients(qa);const t=qa.x.toFixed(4),e=qa.y.toFixed(4),n=qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function ST(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function MT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ao(t){return t!==""}function Kp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wT=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(t){return t.replace(wT,TT)}const ET=new Map;function TT(t,e){let n=ot[e];if(n===void 0){const i=ET.get(e);if(i!==void 0)n=ot[i],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gh(n)}const AT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qp(t){return t.replace(AT,CT)}function CT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const PT={[sl]:"SHADOWMAP_TYPE_PCF",[Eo]:"SHADOWMAP_TYPE_VSM"};function RT(t){return PT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const DT={[ns]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[Jl]:"ENVMAP_TYPE_CUBE_UV"};function IT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":DT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const LT={[qs]:"ENVMAP_MODE_REFRACTION"};function NT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":LT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const UT={[P0]:"ENVMAP_BLENDING_MULTIPLY",[xb]:"ENVMAP_BLENDING_MIX",[yb]:"ENVMAP_BLENDING_ADD"};function OT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":UT[t.combine]||"ENVMAP_BLENDING_NONE"}function FT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function kT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=RT(n),c=IT(n),u=NT(n),h=OT(n),f=FT(n),p=bT(n),g=ST(s),v=r.createProgram();let m,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ao).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ao).join(`
`),d.length>0&&(d+=`
`)):(m=[jp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),d=[jp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?ot.tonemapping_pars_fragment:"",n.toneMapping!==wi?xT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,_T("linearToOutputTexel",n.outputColorSpace),yT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ao).join(`
`)),o=gh(o),o=Kp(o,n),o=Zp(o,n),a=gh(a),a=Kp(a,n),a=Zp(a,n),o=Qp(o),a=Qp(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=_+m+o,b=_+d+a,T=Yp(r,r.VERTEX_SHADER,y),C=Yp(r,r.FRAGMENT_SHADER,b);r.attachShader(v,T),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function D(L){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(v)||"",q=r.getShaderInfoLog(T)||"",j=r.getShaderInfoLog(C)||"",J=V.trim(),W=q.trim(),k=j.trim();let H=!0,ce=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,T,C);else{const pe=$p(r,T,"vertex"),fe=$p(r,C,"fragment");dt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+J+`
`+pe+`
`+fe)}else J!==""?Je("WebGLProgram: Program Info Log:",J):(W===""||k==="")&&(ce=!1);ce&&(L.diagnostics={runnable:H,programLog:J,vertexShader:{log:W,prefix:m},fragmentShader:{log:k,prefix:d}})}r.deleteShader(T),r.deleteShader(C),R=new hl(r,v),S=MT(r,v)}let R;this.getUniforms=function(){return R===void 0&&D(this),R};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,dT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=C,this}let BT=0;class zT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new VT(e),n.set(e,i)),i}}class VT{constructor(e){this.id=BT++,this.code=e,this.usedTimes=0}}function HT(t,e,n,i,r,s,o){const a=new rf,l=new zT,c=new Set,u=[],h=new Map,f=r.logarithmicDepthBuffer;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,V,q){const j=V.fog,J=q.geometry,W=S.isMeshStandardMaterial?V.environment:null,k=(S.isMeshStandardMaterial?n:e).get(S.envMap||W),H=k&&k.mapping===Jl?k.image.height:null,ce=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&Je("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const pe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,fe=pe!==void 0?pe.length:0;let ke=0;J.morphAttributes.position!==void 0&&(ke=1),J.morphAttributes.normal!==void 0&&(ke=2),J.morphAttributes.color!==void 0&&(ke=3);let Le,Qe,ut,se;if(ce){const yt=xi[ce];Le=yt.vertexShader,Qe=yt.fragmentShader}else Le=S.vertexShader,Qe=S.fragmentShader,l.update(S),ut=l.getVertexShaderID(S),se=l.getFragmentShaderID(S);const oe=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),Ve=q.isInstancedMesh===!0,Me=q.isBatchedMesh===!0,at=!!S.map,I=!!S.matcap,O=!!k,U=!!S.aoMap,z=!!S.lightMap,F=!!S.bumpMap,X=!!S.normalMap,E=!!S.displacementMap,re=!!S.emissiveMap,Z=!!S.metalnessMap,Q=!!S.roughnessMap,ie=S.anisotropy>0,w=S.clearcoat>0,x=S.dispersion>0,N=S.iridescence>0,Y=S.sheen>0,ne=S.transmission>0,$=ie&&!!S.anisotropyMap,we=w&&!!S.clearcoatMap,he=w&&!!S.clearcoatNormalMap,Pe=w&&!!S.clearcoatRoughnessMap,ze=N&&!!S.iridescenceMap,ue=N&&!!S.iridescenceThicknessMap,be=Y&&!!S.sheenColorMap,Ee=Y&&!!S.sheenRoughnessMap,Ie=!!S.specularMap,ye=!!S.specularColorMap,nt=!!S.specularIntensityMap,B=ne&&!!S.transmissionMap,De=ne&&!!S.thicknessMap,ge=!!S.gradientMap,Ne=!!S.alphaMap,de=S.alphaTest>0,le=!!S.alphaHash,Se=!!S.extensions;let et=wi;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(et=t.toneMapping);const Rt={shaderID:ce,shaderType:S.type,shaderName:S.name,vertexShader:Le,fragmentShader:Qe,defines:S.defines,customVertexShaderID:ut,customFragmentShaderID:se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Me,batchingColor:Me&&q._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&q.instanceColor!==null,instancingMorph:Ve&&q.morphTexture!==null,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Js,alphaToCoverage:!!S.alphaToCoverage,map:at,matcap:I,envMap:O,envMapMode:O&&k.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:z,bumpMap:F,normalMap:X,displacementMap:E,emissiveMap:re,normalMapObjectSpace:X&&S.normalMapType===Mb,normalMapTangentSpace:X&&S.normalMapType===W0,metalnessMap:Z,roughnessMap:Q,anisotropy:ie,anisotropyMap:$,clearcoat:w,clearcoatMap:we,clearcoatNormalMap:he,clearcoatRoughnessMap:Pe,dispersion:x,iridescence:N,iridescenceMap:ze,iridescenceThicknessMap:ue,sheen:Y,sheenColorMap:be,sheenRoughnessMap:Ee,specularMap:Ie,specularColorMap:ye,specularIntensityMap:nt,transmission:ne,transmissionMap:B,thicknessMap:De,gradientMap:ge,opaque:S.transparent===!1&&S.blending===zs&&S.alphaToCoverage===!1,alphaMap:Ne,alphaTest:de,alphaHash:le,combine:S.combine,mapUv:at&&v(S.map.channel),aoMapUv:U&&v(S.aoMap.channel),lightMapUv:z&&v(S.lightMap.channel),bumpMapUv:F&&v(S.bumpMap.channel),normalMapUv:X&&v(S.normalMap.channel),displacementMapUv:E&&v(S.displacementMap.channel),emissiveMapUv:re&&v(S.emissiveMap.channel),metalnessMapUv:Z&&v(S.metalnessMap.channel),roughnessMapUv:Q&&v(S.roughnessMap.channel),anisotropyMapUv:$&&v(S.anisotropyMap.channel),clearcoatMapUv:we&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:be&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&v(S.sheenRoughnessMap.channel),specularMapUv:Ie&&v(S.specularMap.channel),specularColorMapUv:ye&&v(S.specularColorMap.channel),specularIntensityMapUv:nt&&v(S.specularIntensityMap.channel),transmissionMapUv:B&&v(S.transmissionMap.channel),thicknessMapUv:De&&v(S.thicknessMap.channel),alphaMapUv:Ne&&v(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(X||ie),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!J.attributes.uv&&(at||Ne),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ce,skinning:q.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:et,decodeVideoTexture:at&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===St,decodeVideoTextureEmissive:re&&S.emissiveMap.isVideoTexture===!0&&mt.getTransfer(S.emissiveMap.colorSpace)===St,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Tn,flipSided:S.side===vn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Se&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&S.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(_(M,S),y(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function b(S){const M=g[S.type];let L;if(M){const V=xi[M];L=Z0.clone(V.uniforms)}else L=S.uniforms;return L}function T(S,M){let L=h.get(M);return L!==void 0?++L.usedTimes:(L=new kT(t,M,S,s),u.push(L),h.set(M,L)),L}function C(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),h.delete(S.cacheKey),S.destroy()}}function D(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:T,releaseProgram:C,releaseShaderCache:D,programs:u,dispose:R}}function GT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function WT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function em(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function tm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,g,v,m){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function a(h,f,p,g,v,m){const d=o(h,f,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(h,f,p,g,v,m){const d=o(h,f,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(h,f){n.length>1&&n.sort(h||WT),i.length>1&&i.sort(f||em),r.length>1&&r.sort(f||em)}function u(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function XT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new tm,t.set(i,[o])):r>=s.length?(o=new tm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function qT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new Ze};break;case"SpotLight":n={position:new P,direction:new P,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function YT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let JT=0;function $T(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function KT(t){const e=new qT,n=YT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,s=new ht,o=new ht;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,_=0,y=0,b=0,T=0,C=0,D=0;c.sort($T);for(let S=0,M=c.length;S<M;S++){const L=c[S],V=L.color,q=L.intensity,j=L.distance;let J=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ys?J=L.shadow.map.texture:J=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=V.r*q,h+=V.g*q,f+=V.b*q;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],q);D++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const k=L.shadow,H=n.get(L);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=L.shadow.matrix,_++}i.directional[p]=W,p++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(V).multiplyScalar(q),W.distance=j,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[v]=W;const k=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,k.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[v]=k.matrix,L.castShadow){const H=n.get(L);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=J,b++}v++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(V).multiplyScalar(q),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=W,m++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const k=L.shadow,H=n.get(L);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=W,g++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(q),W.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[d]=W,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==_||R.numPointShadows!==y||R.numSpotShadows!==b||R.numSpotMaps!==T||R.numLightProbes!==D)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=D,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=_,R.numPointShadows=y,R.numSpotShadows=b,R.numSpotMaps=T,R.numLightProbes=D,i.version=JT++)}function l(c,u){let h=0,f=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){const y=c[d];if(y.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(y.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function nm(t){const e=new KT(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ZT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new nm(t),e.set(r,[a])):s>=o.length?(a=new nm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const QT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jT=`uniform sampler2D shadow_pass;
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
}`,eA=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],tA=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],im=new ht,yo=new P,Jc=new P;function nA(t,e,n){let i=new sf;const r=new me,s=new me,o=new Gt,a=new iM,l=new rM,c={},u=n.maxTextureSize,h={[Pr]:vn,[vn]:Pr,[Tn]:Tn},f=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:QT,fragmentShader:jT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new ft;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _e(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let d=this.type;this.render=function(C,D,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;C.type===C0&&(Je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=sl);const S=t.getRenderTarget(),M=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Ki),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const q=d!==this.type;q&&D.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(J=>J.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,J=C.length;j<J;j++){const W=C[j],k=W.shadow;if(k===void 0){Je("WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const H=k.getFrameExtents();if(r.multiply(H),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,k.mapSize.y=s.y)),k.map===null||q===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Eo){if(W.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Ei(r.x,r.y,{format:Ys,type:tr,minFilter:gn,magFilter:gn,generateMipmaps:!1}),k.map.texture.name=W.name+".shadowMap",k.map.depthTexture=new Qo(r.x,r.y,bi),k.map.depthTexture.name=W.name+".shadowMapDepth",k.map.depthTexture.format=nr,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=cn,k.map.depthTexture.magFilter=cn}else{W.isPointLight?(k.map=new e_(r.x),k.map.depthTexture=new bS(r.x,Ri)):(k.map=new Ei(r.x,r.y),k.map.depthTexture=new Qo(r.x,r.y,Ri)),k.map.depthTexture.name=W.name+".shadowMap",k.map.depthTexture.format=nr;const pe=t.state.buffers.depth.getReversed();this.type===sl?(k.map.depthTexture.compareFunction=pe?ef:jh,k.map.depthTexture.minFilter=gn,k.map.depthTexture.magFilter=gn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=cn,k.map.depthTexture.magFilter=cn)}k.camera.updateProjectionMatrix()}const ce=k.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<ce;pe++){if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,pe),t.clear();else{pe===0&&(t.setRenderTarget(k.map),t.clear());const fe=k.getViewport(pe);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),V.viewport(o)}if(W.isPointLight){const fe=k.camera,ke=k.matrix,Le=W.distance||fe.far;Le!==fe.far&&(fe.far=Le,fe.updateProjectionMatrix()),yo.setFromMatrixPosition(W.matrixWorld),fe.position.copy(yo),Jc.copy(fe.position),Jc.add(eA[pe]),fe.up.copy(tA[pe]),fe.lookAt(Jc),fe.updateMatrixWorld(),ke.makeTranslation(-yo.x,-yo.y,-yo.z),im.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(im,fe.coordinateSystem,fe.reversedDepth)}else k.updateMatrices(W);i=k.getFrustum(),b(D,R,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===Eo&&_(k,R),k.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(S,M,L)};function _(C,D){const R=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ei(r.x,r.y,{format:Ys,type:tr})),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(D,null,R,f,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(D,null,R,p,v,null)}function y(C,D,R,S){let M=null;const L=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=R.isPointLight===!0?l:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const V=M.uuid,q=D.uuid;let j=c[V];j===void 0&&(j={},c[V]=j);let J=j[q];J===void 0&&(J=M.clone(),j[q]=J,D.addEventListener("dispose",T)),M=J}if(M.visible=D.visible,M.wireframe=D.wireframe,S===Eo?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:h[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=t.properties.get(M);V.light=R}return M}function b(C,D,R,S,M){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Eo)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const q=e.update(C),j=C.material;if(Array.isArray(j)){const J=q.groups;for(let W=0,k=J.length;W<k;W++){const H=J[W],ce=j[H.materialIndex];if(ce&&ce.visible){const pe=y(C,ce,S,M);C.onBeforeShadow(t,C,D,R,q,pe,H),t.renderBufferDirect(R,null,q,pe,C,H),C.onAfterShadow(t,C,D,R,q,pe,H)}}}else if(j.visible){const J=y(C,j,S,M);C.onBeforeShadow(t,C,D,R,q,J,null),t.renderBufferDirect(R,null,q,J,C,null),C.onAfterShadow(t,C,D,R,q,J,null)}}const V=C.children;for(let q=0,j=V.length;q<j;q++)b(V[q],D,R,S,M)}function T(C){C.target.removeEventListener("dispose",T);for(const R in c){const S=c[R],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const iA={[yu]:bu,[Su]:Eu,[Mu]:Tu,[Xs]:wu,[bu]:yu,[Eu]:Su,[Tu]:Mu,[wu]:Xs};function rA(t,e){function n(){let B=!1;const De=new Gt;let ge=null;const Ne=new Gt(0,0,0,0);return{setMask:function(de){ge!==de&&!B&&(t.colorMask(de,de,de,de),ge=de)},setLocked:function(de){B=de},setClear:function(de,le,Se,et,Rt){Rt===!0&&(de*=et,le*=et,Se*=et),De.set(de,le,Se,et),Ne.equals(De)===!1&&(t.clearColor(de,le,Se,et),Ne.copy(De))},reset:function(){B=!1,ge=null,Ne.set(-1,0,0,0)}}}function i(){let B=!1,De=!1,ge=null,Ne=null,de=null;return{setReversed:function(le){if(De!==le){const Se=e.get("EXT_clip_control");le?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),De=le;const et=de;de=null,this.setClear(et)}},getReversed:function(){return De},setTest:function(le){le?oe(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(le){ge!==le&&!B&&(t.depthMask(le),ge=le)},setFunc:function(le){if(De&&(le=iA[le]),Ne!==le){switch(le){case yu:t.depthFunc(t.NEVER);break;case bu:t.depthFunc(t.ALWAYS);break;case Su:t.depthFunc(t.LESS);break;case Xs:t.depthFunc(t.LEQUAL);break;case Mu:t.depthFunc(t.EQUAL);break;case wu:t.depthFunc(t.GEQUAL);break;case Eu:t.depthFunc(t.GREATER);break;case Tu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ne=le}},setLocked:function(le){B=le},setClear:function(le){de!==le&&(De&&(le=1-le),t.clearDepth(le),de=le)},reset:function(){B=!1,ge=null,Ne=null,de=null,De=!1}}}function r(){let B=!1,De=null,ge=null,Ne=null,de=null,le=null,Se=null,et=null,Rt=null;return{setTest:function(yt){B||(yt?oe(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(yt){De!==yt&&!B&&(t.stencilMask(yt),De=yt)},setFunc:function(yt,fi,Ni){(ge!==yt||Ne!==fi||de!==Ni)&&(t.stencilFunc(yt,fi,Ni),ge=yt,Ne=fi,de=Ni)},setOp:function(yt,fi,Ni){(le!==yt||Se!==fi||et!==Ni)&&(t.stencilOp(yt,fi,Ni),le=yt,Se=fi,et=Ni)},setLocked:function(yt){B=yt},setClear:function(yt){Rt!==yt&&(t.clearStencil(yt),Rt=yt)},reset:function(){B=!1,De=null,ge=null,Ne=null,de=null,le=null,Se=null,et=null,Rt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,_=null,y=null,b=null,T=null,C=null,D=new Ze(0,0,0),R=0,S=!1,M=null,L=null,V=null,q=null,j=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,k=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=k>=1):H.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=k>=2);let ce=null,pe={};const fe=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),Le=new Gt().fromArray(fe),Qe=new Gt().fromArray(ke);function ut(B,De,ge,Ne){const de=new Uint8Array(4),le=t.createTexture();t.bindTexture(B,le),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Se=0;Se<ge;Se++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(De,0,t.RGBA,1,1,Ne,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(De+Se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return le}const se={};se[t.TEXTURE_2D]=ut(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=ut(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=ut(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=ut(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(t.DEPTH_TEST),o.setFunc(Xs),F(!1),X(Hd),oe(t.CULL_FACE),U(Ki);function oe(B){u[B]!==!0&&(t.enable(B),u[B]=!0)}function Ce(B){u[B]!==!1&&(t.disable(B),u[B]=!1)}function Ve(B,De){return h[B]!==De?(t.bindFramebuffer(B,De),h[B]=De,B===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=De),B===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=De),!0):!1}function Me(B,De){let ge=p,Ne=!1;if(B){ge=f.get(De),ge===void 0&&(ge=[],f.set(De,ge));const de=B.textures;if(ge.length!==de.length||ge[0]!==t.COLOR_ATTACHMENT0){for(let le=0,Se=de.length;le<Se;le++)ge[le]=t.COLOR_ATTACHMENT0+le;ge.length=de.length,Ne=!0}}else ge[0]!==t.BACK&&(ge[0]=t.BACK,Ne=!0);Ne&&t.drawBuffers(ge)}function at(B){return g!==B?(t.useProgram(B),g=B,!0):!1}const I={[qr]:t.FUNC_ADD,[nb]:t.FUNC_SUBTRACT,[ib]:t.FUNC_REVERSE_SUBTRACT};I[rb]=t.MIN,I[sb]=t.MAX;const O={[ob]:t.ZERO,[ab]:t.ONE,[lb]:t.SRC_COLOR,[vu]:t.SRC_ALPHA,[pb]:t.SRC_ALPHA_SATURATE,[fb]:t.DST_COLOR,[ub]:t.DST_ALPHA,[cb]:t.ONE_MINUS_SRC_COLOR,[xu]:t.ONE_MINUS_SRC_ALPHA,[db]:t.ONE_MINUS_DST_COLOR,[hb]:t.ONE_MINUS_DST_ALPHA,[mb]:t.CONSTANT_COLOR,[gb]:t.ONE_MINUS_CONSTANT_COLOR,[_b]:t.CONSTANT_ALPHA,[vb]:t.ONE_MINUS_CONSTANT_ALPHA};function U(B,De,ge,Ne,de,le,Se,et,Rt,yt){if(B===Ki){v===!0&&(Ce(t.BLEND),v=!1);return}if(v===!1&&(oe(t.BLEND),v=!0),B!==tb){if(B!==m||yt!==S){if((d!==qr||b!==qr)&&(t.blendEquation(t.FUNC_ADD),d=qr,b=qr),yt)switch(B){case zs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gd:t.blendFunc(t.ONE,t.ONE);break;case Wd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:dt("WebGLState: Invalid blending: ",B);break}else switch(B){case zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Wd:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xd:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",B);break}_=null,y=null,T=null,C=null,D.set(0,0,0),R=0,m=B,S=yt}return}de=de||De,le=le||ge,Se=Se||Ne,(De!==d||de!==b)&&(t.blendEquationSeparate(I[De],I[de]),d=De,b=de),(ge!==_||Ne!==y||le!==T||Se!==C)&&(t.blendFuncSeparate(O[ge],O[Ne],O[le],O[Se]),_=ge,y=Ne,T=le,C=Se),(et.equals(D)===!1||Rt!==R)&&(t.blendColor(et.r,et.g,et.b,Rt),D.copy(et),R=Rt),m=B,S=!1}function z(B,De){B.side===Tn?Ce(t.CULL_FACE):oe(t.CULL_FACE);let ge=B.side===vn;De&&(ge=!ge),F(ge),B.blending===zs&&B.transparent===!1?U(Ki):U(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const Ne=B.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),re(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function F(B){M!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),M=B)}function X(B){B!==jy?(oe(t.CULL_FACE),B!==L&&(B===Hd?t.cullFace(t.BACK):B===eb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),L=B}function E(B){B!==V&&(W&&t.lineWidth(B),V=B)}function re(B,De,ge){B?(oe(t.POLYGON_OFFSET_FILL),(q!==De||j!==ge)&&(t.polygonOffset(De,ge),q=De,j=ge)):Ce(t.POLYGON_OFFSET_FILL)}function Z(B){B?oe(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function Q(B){B===void 0&&(B=t.TEXTURE0+J-1),ce!==B&&(t.activeTexture(B),ce=B)}function ie(B,De,ge){ge===void 0&&(ce===null?ge=t.TEXTURE0+J-1:ge=ce);let Ne=pe[ge];Ne===void 0&&(Ne={type:void 0,texture:void 0},pe[ge]=Ne),(Ne.type!==B||Ne.texture!==De)&&(ce!==ge&&(t.activeTexture(ge),ce=ge),t.bindTexture(B,De||se[B]),Ne.type=B,Ne.texture=De)}function w(){const B=pe[ce];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function x(){try{t.compressedTexImage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function Y(){try{t.texSubImage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function ne(){try{t.texSubImage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function we(){try{t.compressedTexSubImage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function he(){try{t.texStorage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function Pe(){try{t.texStorage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function ze(){try{t.texImage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function ue(){try{t.texImage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function be(B){Le.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),Le.copy(B))}function Ee(B){Qe.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),Qe.copy(B))}function Ie(B,De){let ge=c.get(De);ge===void 0&&(ge=new WeakMap,c.set(De,ge));let Ne=ge.get(B);Ne===void 0&&(Ne=t.getUniformBlockIndex(De,B.name),ge.set(B,Ne))}function ye(B,De){const Ne=c.get(De).get(B);l.get(De)!==Ne&&(t.uniformBlockBinding(De,Ne,B.__bindingPointIndex),l.set(De,Ne))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ce=null,pe={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,_=null,y=null,b=null,T=null,C=null,D=new Ze(0,0,0),R=0,S=!1,M=null,L=null,V=null,q=null,j=null,Le.set(0,0,t.canvas.width,t.canvas.height),Qe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Ce,bindFramebuffer:Ve,drawBuffers:Me,useProgram:at,setBlending:U,setMaterial:z,setFlipSided:F,setCullFace:X,setLineWidth:E,setPolygonOffset:re,setScissorTest:Z,activeTexture:Q,bindTexture:ie,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:ze,texImage3D:ue,updateUBOMapping:Ie,uniformBlockBinding:ye,texStorage2D:he,texStorage3D:Pe,texSubImage2D:Y,texSubImage3D:ne,compressedTexSubImage2D:$,compressedTexSubImage3D:we,scissor:be,viewport:Ee,reset:nt}}function sA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):Al("canvas")}function v(w,x,N){let Y=1;const ne=ie(w);if((ne.width>N||ne.height>N)&&(Y=N/Math.max(ne.width,ne.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(Y*ne.width),we=Math.floor(Y*ne.height);h===void 0&&(h=g($,we));const he=x?g($,we):h;return he.width=$,he.height=we,he.getContext("2d").drawImage(w,0,0,$,we),Je("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+$+"x"+we+")."),he}else return"data"in w&&Je("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){t.generateMipmap(w)}function _(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(w,x,N,Y,ne=!1){if(w!==null){if(t[w]!==void 0)return t[w];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=x;if(x===t.RED&&(N===t.FLOAT&&($=t.R32F),N===t.HALF_FLOAT&&($=t.R16F),N===t.UNSIGNED_BYTE&&($=t.R8)),x===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&($=t.R8UI),N===t.UNSIGNED_SHORT&&($=t.R16UI),N===t.UNSIGNED_INT&&($=t.R32UI),N===t.BYTE&&($=t.R8I),N===t.SHORT&&($=t.R16I),N===t.INT&&($=t.R32I)),x===t.RG&&(N===t.FLOAT&&($=t.RG32F),N===t.HALF_FLOAT&&($=t.RG16F),N===t.UNSIGNED_BYTE&&($=t.RG8)),x===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&($=t.RG8UI),N===t.UNSIGNED_SHORT&&($=t.RG16UI),N===t.UNSIGNED_INT&&($=t.RG32UI),N===t.BYTE&&($=t.RG8I),N===t.SHORT&&($=t.RG16I),N===t.INT&&($=t.RG32I)),x===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&($=t.RGB8UI),N===t.UNSIGNED_SHORT&&($=t.RGB16UI),N===t.UNSIGNED_INT&&($=t.RGB32UI),N===t.BYTE&&($=t.RGB8I),N===t.SHORT&&($=t.RGB16I),N===t.INT&&($=t.RGB32I)),x===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&($=t.RGBA8UI),N===t.UNSIGNED_SHORT&&($=t.RGBA16UI),N===t.UNSIGNED_INT&&($=t.RGBA32UI),N===t.BYTE&&($=t.RGBA8I),N===t.SHORT&&($=t.RGBA16I),N===t.INT&&($=t.RGBA32I)),x===t.RGB&&(N===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),x===t.RGBA){const we=ne?El:mt.getTransfer(Y);N===t.FLOAT&&($=t.RGBA32F),N===t.HALF_FLOAT&&($=t.RGBA16F),N===t.UNSIGNED_BYTE&&($=we===St?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(w,x){let N;return w?x===null||x===Ri||x===Ko?N=t.DEPTH24_STENCIL8:x===bi?N=t.DEPTH32F_STENCIL8:x===$o&&(N=t.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ri||x===Ko?N=t.DEPTH_COMPONENT24:x===bi?N=t.DEPTH_COMPONENT32F:x===$o&&(N=t.DEPTH_COMPONENT16),N}function T(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==cn&&w.minFilter!==gn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function C(w){const x=w.target;x.removeEventListener("dispose",C),R(x),x.isVideoTexture&&u.delete(x)}function D(w){const x=w.target;x.removeEventListener("dispose",D),M(x)}function R(w){const x=i.get(w);if(x.__webglInit===void 0)return;const N=w.source,Y=f.get(N);if(Y){const ne=Y[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&S(w),Object.keys(Y).length===0&&f.delete(N)}i.remove(w)}function S(w){const x=i.get(w);t.deleteTexture(x.__webglTexture);const N=w.source,Y=f.get(N);delete Y[x.__cacheKey],o.memory.textures--}function M(w){const x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let ne=0;ne<x.__webglFramebuffer[Y].length;ne++)t.deleteFramebuffer(x.__webglFramebuffer[Y][ne]);else t.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)t.deleteFramebuffer(x.__webglFramebuffer[Y]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=w.textures;for(let Y=0,ne=N.length;Y<ne;Y++){const $=i.get(N[Y]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(N[Y])}i.remove(w)}let L=0;function V(){L=0}function q(){const w=L;return w>=r.maxTextures&&Je("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),L+=1,w}function j(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function J(w,x){const N=i.get(w);if(w.isVideoTexture&&Z(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){const Y=w.image;if(Y===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{se(N,w,x);return}}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+x)}function W(w,x){const N=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){se(N,w,x);return}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+x)}function k(w,x){const N=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){se(N,w,x);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+x)}function H(w,x){const N=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&N.__version!==w.version){oe(N,w,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+x)}const ce={[Pu]:t.REPEAT,[$i]:t.CLAMP_TO_EDGE,[Ru]:t.MIRRORED_REPEAT},pe={[cn]:t.NEAREST,[bb]:t.NEAREST_MIPMAP_NEAREST,[_a]:t.NEAREST_MIPMAP_LINEAR,[gn]:t.LINEAR,[pc]:t.LINEAR_MIPMAP_NEAREST,[Jr]:t.LINEAR_MIPMAP_LINEAR},fe={[wb]:t.NEVER,[Pb]:t.ALWAYS,[Eb]:t.LESS,[jh]:t.LEQUAL,[Tb]:t.EQUAL,[ef]:t.GEQUAL,[Ab]:t.GREATER,[Cb]:t.NOTEQUAL};function ke(w,x){if(x.type===bi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===gn||x.magFilter===pc||x.magFilter===_a||x.magFilter===Jr||x.minFilter===gn||x.minFilter===pc||x.minFilter===_a||x.minFilter===Jr)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,ce[x.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,ce[x.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,ce[x.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,pe[x.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,pe[x.minFilter]),x.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,fe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===cn||x.minFilter!==_a&&x.minFilter!==Jr||x.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Le(w,x){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",C));const Y=x.source;let ne=f.get(Y);ne===void 0&&(ne={},f.set(Y,ne));const $=j(x);if($!==w.__cacheKey){ne[$]===void 0&&(ne[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ne[$].usedTimes++;const we=ne[w.__cacheKey];we!==void 0&&(ne[w.__cacheKey].usedTimes--,we.usedTimes===0&&S(x)),w.__cacheKey=$,w.__webglTexture=ne[$].texture}return N}function Qe(w,x,N){return Math.floor(Math.floor(w/N)/x)}function ut(w,x,N,Y){const $=w.updateRanges;if($.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,N,Y,x.data);else{$.sort((ue,be)=>ue.start-be.start);let we=0;for(let ue=1;ue<$.length;ue++){const be=$[we],Ee=$[ue],Ie=be.start+be.count,ye=Qe(Ee.start,x.width,4),nt=Qe(be.start,x.width,4);Ee.start<=Ie+1&&ye===nt&&Qe(Ee.start+Ee.count-1,x.width,4)===ye?be.count=Math.max(be.count,Ee.start+Ee.count-be.start):(++we,$[we]=Ee)}$.length=we+1;const he=t.getParameter(t.UNPACK_ROW_LENGTH),Pe=t.getParameter(t.UNPACK_SKIP_PIXELS),ze=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let ue=0,be=$.length;ue<be;ue++){const Ee=$[ue],Ie=Math.floor(Ee.start/4),ye=Math.ceil(Ee.count/4),nt=Ie%x.width,B=Math.floor(Ie/x.width),De=ye,ge=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,nt,B,De,ge,N,Y,x.data)}w.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,he),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(t.UNPACK_SKIP_ROWS,ze)}}function se(w,x,N){let Y=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=t.TEXTURE_3D);const ne=Le(w,x),$=x.source;n.bindTexture(Y,w.__webglTexture,t.TEXTURE0+N);const we=i.get($);if($.version!==we.__version||ne===!0){n.activeTexture(t.TEXTURE0+N);const he=mt.getPrimaries(mt.workingColorSpace),Pe=x.colorSpace===gr?null:mt.getPrimaries(x.colorSpace),ze=x.colorSpace===gr||he===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ue=v(x.image,!1,r.maxTextureSize);ue=Q(x,ue);const be=s.convert(x.format,x.colorSpace),Ee=s.convert(x.type);let Ie=y(x.internalFormat,be,Ee,x.colorSpace,x.isVideoTexture);ke(Y,x);let ye;const nt=x.mipmaps,B=x.isVideoTexture!==!0,De=we.__version===void 0||ne===!0,ge=$.dataReady,Ne=T(x,ue);if(x.isDepthTexture)Ie=b(x.format===$r,x.type),De&&(B?n.texStorage2D(t.TEXTURE_2D,1,Ie,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Ie,ue.width,ue.height,0,be,Ee,null));else if(x.isDataTexture)if(nt.length>0){B&&De&&n.texStorage2D(t.TEXTURE_2D,Ne,Ie,nt[0].width,nt[0].height);for(let de=0,le=nt.length;de<le;de++)ye=nt[de],B?ge&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,ye.width,ye.height,be,Ee,ye.data):n.texImage2D(t.TEXTURE_2D,de,Ie,ye.width,ye.height,0,be,Ee,ye.data);x.generateMipmaps=!1}else B?(De&&n.texStorage2D(t.TEXTURE_2D,Ne,Ie,ue.width,ue.height),ge&&ut(x,ue,be,Ee)):n.texImage2D(t.TEXTURE_2D,0,Ie,ue.width,ue.height,0,be,Ee,ue.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){B&&De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ne,Ie,nt[0].width,nt[0].height,ue.depth);for(let de=0,le=nt.length;de<le;de++)if(ye=nt[de],x.format!==ri)if(be!==null)if(B){if(ge)if(x.layerUpdates.size>0){const Se=Np(ye.width,ye.height,x.format,x.type);for(const et of x.layerUpdates){const Rt=ye.data.subarray(et*Se/ye.data.BYTES_PER_ELEMENT,(et+1)*Se/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,et,ye.width,ye.height,1,be,Rt)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,ye.width,ye.height,ue.depth,be,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,Ie,ye.width,ye.height,ue.depth,0,ye.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ge&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,ye.width,ye.height,ue.depth,be,Ee,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,Ie,ye.width,ye.height,ue.depth,0,be,Ee,ye.data)}else{B&&De&&n.texStorage2D(t.TEXTURE_2D,Ne,Ie,nt[0].width,nt[0].height);for(let de=0,le=nt.length;de<le;de++)ye=nt[de],x.format!==ri?be!==null?B?ge&&n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,ye.width,ye.height,be,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,de,Ie,ye.width,ye.height,0,ye.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ge&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,ye.width,ye.height,be,Ee,ye.data):n.texImage2D(t.TEXTURE_2D,de,Ie,ye.width,ye.height,0,be,Ee,ye.data)}else if(x.isDataArrayTexture)if(B){if(De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ne,Ie,ue.width,ue.height,ue.depth),ge)if(x.layerUpdates.size>0){const de=Np(ue.width,ue.height,x.format,x.type);for(const le of x.layerUpdates){const Se=ue.data.subarray(le*de/ue.data.BYTES_PER_ELEMENT,(le+1)*de/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,ue.width,ue.height,1,be,Ee,Se)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,be,Ee,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,ue.width,ue.height,ue.depth,0,be,Ee,ue.data);else if(x.isData3DTexture)B?(De&&n.texStorage3D(t.TEXTURE_3D,Ne,Ie,ue.width,ue.height,ue.depth),ge&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,be,Ee,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,ue.width,ue.height,ue.depth,0,be,Ee,ue.data);else if(x.isFramebufferTexture){if(De)if(B)n.texStorage2D(t.TEXTURE_2D,Ne,Ie,ue.width,ue.height);else{let de=ue.width,le=ue.height;for(let Se=0;Se<Ne;Se++)n.texImage2D(t.TEXTURE_2D,Se,Ie,de,le,0,be,Ee,null),de>>=1,le>>=1}}else if(nt.length>0){if(B&&De){const de=ie(nt[0]);n.texStorage2D(t.TEXTURE_2D,Ne,Ie,de.width,de.height)}for(let de=0,le=nt.length;de<le;de++)ye=nt[de],B?ge&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,be,Ee,ye):n.texImage2D(t.TEXTURE_2D,de,Ie,be,Ee,ye);x.generateMipmaps=!1}else if(B){if(De){const de=ie(ue);n.texStorage2D(t.TEXTURE_2D,Ne,Ie,de.width,de.height)}ge&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,be,Ee,ue)}else n.texImage2D(t.TEXTURE_2D,0,Ie,be,Ee,ue);m(x)&&d(Y),we.__version=$.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function oe(w,x,N){if(x.image.length!==6)return;const Y=Le(w,x),ne=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+N);const $=i.get(ne);if(ne.version!==$.__version||Y===!0){n.activeTexture(t.TEXTURE0+N);const we=mt.getPrimaries(mt.workingColorSpace),he=x.colorSpace===gr?null:mt.getPrimaries(x.colorSpace),Pe=x.colorSpace===gr||we===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const ze=x.isCompressedTexture||x.image[0].isCompressedTexture,ue=x.image[0]&&x.image[0].isDataTexture,be=[];for(let le=0;le<6;le++)!ze&&!ue?be[le]=v(x.image[le],!0,r.maxCubemapSize):be[le]=ue?x.image[le].image:x.image[le],be[le]=Q(x,be[le]);const Ee=be[0],Ie=s.convert(x.format,x.colorSpace),ye=s.convert(x.type),nt=y(x.internalFormat,Ie,ye,x.colorSpace),B=x.isVideoTexture!==!0,De=$.__version===void 0||Y===!0,ge=ne.dataReady;let Ne=T(x,Ee);ke(t.TEXTURE_CUBE_MAP,x);let de;if(ze){B&&De&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ne,nt,Ee.width,Ee.height);for(let le=0;le<6;le++){de=be[le].mipmaps;for(let Se=0;Se<de.length;Se++){const et=de[Se];x.format!==ri?Ie!==null?B?ge&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,0,0,et.width,et.height,Ie,et.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,nt,et.width,et.height,0,et.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,0,0,et.width,et.height,Ie,ye,et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,nt,et.width,et.height,0,Ie,ye,et.data)}}}else{if(de=x.mipmaps,B&&De){de.length>0&&Ne++;const le=ie(be[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ne,nt,le.width,le.height)}for(let le=0;le<6;le++)if(ue){B?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,be[le].width,be[le].height,Ie,ye,be[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,nt,be[le].width,be[le].height,0,Ie,ye,be[le].data);for(let Se=0;Se<de.length;Se++){const Rt=de[Se].image[le].image;B?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,0,0,Rt.width,Rt.height,Ie,ye,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,nt,Rt.width,Rt.height,0,Ie,ye,Rt.data)}}else{B?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ie,ye,be[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,nt,Ie,ye,be[le]);for(let Se=0;Se<de.length;Se++){const et=de[Se];B?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,0,0,Ie,ye,et.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,nt,Ie,ye,et.image[le])}}}m(x)&&d(t.TEXTURE_CUBE_MAP),$.__version=ne.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Ce(w,x,N,Y,ne,$){const we=s.convert(N.format,N.colorSpace),he=s.convert(N.type),Pe=y(N.internalFormat,we,he,N.colorSpace),ze=i.get(x),ue=i.get(N);if(ue.__renderTarget=x,!ze.__hasExternalTextures){const be=Math.max(1,x.width>>$),Ee=Math.max(1,x.height>>$);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,$,Pe,be,Ee,x.depth,0,we,he,null):n.texImage2D(ne,$,Pe,be,Ee,0,we,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),re(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,ne,ue.__webglTexture,0,E(x)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,ne,ue.__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(w,x,N){if(t.bindRenderbuffer(t.RENDERBUFFER,w),x.depthBuffer){const Y=x.depthTexture,ne=Y&&Y.isDepthTexture?Y.type:null,$=b(x.stencilBuffer,ne),we=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;re(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,E(x),$,x.width,x.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,E(x),$,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,$,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,w)}else{const Y=x.textures;for(let ne=0;ne<Y.length;ne++){const $=Y[ne],we=s.convert($.format,$.colorSpace),he=s.convert($.type),Pe=y($.internalFormat,we,he,$.colorSpace);re(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,E(x),Pe,x.width,x.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,E(x),Pe,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Pe,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Me(w,x,N){const Y=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(x.depthTexture);if(ne.__renderTarget=x,(!ne.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),ke(t.TEXTURE_CUBE_MAP,x.depthTexture);const ze=s.convert(x.depthTexture.format),ue=s.convert(x.depthTexture.type);let be;x.depthTexture.format===nr?be=t.DEPTH_COMPONENT24:x.depthTexture.format===$r&&(be=t.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,be,x.width,x.height,0,ze,ue,null)}}else J(x.depthTexture,0);const $=ne.__webglTexture,we=E(x),he=Y?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,Pe=x.depthTexture.format===$r?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===nr)re(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Pe,he,$,0,we):t.framebufferTexture2D(t.FRAMEBUFFER,Pe,he,$,0);else if(x.depthTexture.format===$r)re(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Pe,he,$,0,we):t.framebufferTexture2D(t.FRAMEBUFFER,Pe,he,$,0);else throw new Error("Unknown depthTexture format")}function at(w){const x=i.get(w),N=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const ne=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",ne)};Y.addEventListener("dispose",ne),x.__depthDisposeCallback=ne}x.__boundDepthTexture=Y}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let Y=0;Y<6;Y++)Me(x.__webglFramebuffer[Y],w,Y);else{const Y=w.texture.mipmaps;Y&&Y.length>0?Me(x.__webglFramebuffer[0],w,0):Me(x.__webglFramebuffer,w,0)}else if(N){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=t.createRenderbuffer(),Ve(x.__webglDepthbuffer[Y],w,!1);else{const ne=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,$)}}else{const Y=w.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Ve(x.__webglDepthbuffer,w,!1);else{const ne=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,$)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function I(w,x,N){const Y=i.get(w);x!==void 0&&Ce(Y.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&at(w)}function O(w){const x=w.texture,N=i.get(w),Y=i.get(x);w.addEventListener("dispose",D);const ne=w.textures,$=w.isWebGLCubeRenderTarget===!0,we=ne.length>1;if(we||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=x.version,o.memory.textures++),$){N.__webglFramebuffer=[];for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[he]=[];for(let Pe=0;Pe<x.mipmaps.length;Pe++)N.__webglFramebuffer[he][Pe]=t.createFramebuffer()}else N.__webglFramebuffer[he]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let he=0;he<x.mipmaps.length;he++)N.__webglFramebuffer[he]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(we)for(let he=0,Pe=ne.length;he<Pe;he++){const ze=i.get(ne[he]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(w.samples>0&&re(w)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){const Pe=ne[he];N.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[he]);const ze=s.convert(Pe.format,Pe.colorSpace),ue=s.convert(Pe.type),be=y(Pe.internalFormat,ze,ue,Pe.colorSpace,w.isXRRenderTarget===!0),Ee=E(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,be,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,N.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),Ve(N.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),ke(t.TEXTURE_CUBE_MAP,x);for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0)for(let Pe=0;Pe<x.mipmaps.length;Pe++)Ce(N.__webglFramebuffer[he][Pe],w,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe);else Ce(N.__webglFramebuffer[he],w,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(x)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let he=0,Pe=ne.length;he<Pe;he++){const ze=ne[he],ue=i.get(ze);let be=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(be=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(be,ue.__webglTexture),ke(be,ze),Ce(N.__webglFramebuffer,w,ze,t.COLOR_ATTACHMENT0+he,be,0),m(ze)&&d(be)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Y.__webglTexture),ke(he,x),x.mipmaps&&x.mipmaps.length>0)for(let Pe=0;Pe<x.mipmaps.length;Pe++)Ce(N.__webglFramebuffer[Pe],w,x,t.COLOR_ATTACHMENT0,he,Pe);else Ce(N.__webglFramebuffer,w,x,t.COLOR_ATTACHMENT0,he,0);m(x)&&d(he),n.unbindTexture()}w.depthBuffer&&at(w)}function U(w){const x=w.textures;for(let N=0,Y=x.length;N<Y;N++){const ne=x[N];if(m(ne)){const $=_(w),we=i.get(ne).__webglTexture;n.bindTexture($,we),d($),n.unbindTexture()}}}const z=[],F=[];function X(w){if(w.samples>0){if(re(w)===!1){const x=w.textures,N=w.width,Y=w.height;let ne=t.COLOR_BUFFER_BIT;const $=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(w),he=x.length>1;if(he)for(let ze=0;ze<x.length;ze++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Pe=w.texture.mipmaps;Pe&&Pe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ze=0;ze<x.length;ze++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[ze]);const ue=i.get(x[ze]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,N,Y,0,0,N,Y,ne,t.NEAREST),l===!0&&(z.length=0,F.length=0,z.push(t.COLOR_ATTACHMENT0+ze),w.depthBuffer&&w.resolveDepthBuffer===!1&&(z.push($),F.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,F)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,z))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let ze=0;ze<x.length;ze++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,we.__webglColorRenderbuffer[ze]);const ue=i.get(x[ze]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function E(w){return Math.min(r.maxSamples,w.samples)}function re(w){const x=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Z(w){const x=o.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function Q(w,x){const N=w.colorSpace,Y=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==Js&&N!==gr&&(mt.getTransfer(N)===St?(Y!==ri||ne!==Wn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",N)),x}function ie(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=V,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=k,this.setTextureCube=H,this.rebindTextures=I,this.setupRenderTarget=O,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=re,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function oA(t,e){function n(i,r=gr){let s;const o=mt.getTransfer(r);if(i===Wn)return t.UNSIGNED_BYTE;if(i===Jh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===$h)return t.UNSIGNED_SHORT_5_5_5_1;if(i===B0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===z0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===F0)return t.BYTE;if(i===k0)return t.SHORT;if(i===$o)return t.UNSIGNED_SHORT;if(i===Yh)return t.INT;if(i===Ri)return t.UNSIGNED_INT;if(i===bi)return t.FLOAT;if(i===tr)return t.HALF_FLOAT;if(i===V0)return t.ALPHA;if(i===H0)return t.RGB;if(i===ri)return t.RGBA;if(i===nr)return t.DEPTH_COMPONENT;if(i===$r)return t.DEPTH_STENCIL;if(i===G0)return t.RED;if(i===Kh)return t.RED_INTEGER;if(i===Ys)return t.RG;if(i===Zh)return t.RG_INTEGER;if(i===Qh)return t.RGBA_INTEGER;if(i===ol||i===al||i===ll||i===cl)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Du||i===Iu||i===Lu||i===Nu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Du)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Iu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Uu||i===Ou||i===Fu||i===ku||i===Bu||i===zu||i===Vu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Uu||i===Ou)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Fu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ku)return s.COMPRESSED_R11_EAC;if(i===Bu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===zu)return s.COMPRESSED_RG11_EAC;if(i===Vu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Hu||i===Gu||i===Wu||i===Xu||i===qu||i===Yu||i===Ju||i===$u||i===Ku||i===Zu||i===Qu||i===ju||i===eh||i===th)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Hu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ju)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$u)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ku)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ju)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===th)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nh||i===ih||i===rh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===nh)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ih)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sh||i===oh||i===ah||i===lh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===sh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===oh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ah)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ko?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const aA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lA=`
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

}`;class cA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new n_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ci({vertexShader:aA,fragmentShader:lA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _e(new ca(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uA extends os{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new cA,d={},_=n.getContextAttributes();let y=null,b=null;const T=[],C=[],D=new me;let R=null;const S=new Nn;S.viewport=new Gt;const M=new Nn;M.viewport=new Gt;const L=[S,M],V=new mM;let q=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let oe=T[se];return oe===void 0&&(oe=new Uc,T[se]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(se){let oe=T[se];return oe===void 0&&(oe=new Uc,T[se]=oe),oe.getGripSpace()},this.getHand=function(se){let oe=T[se];return oe===void 0&&(oe=new Uc,T[se]=oe),oe.getHandSpace()};function J(se){const oe=C.indexOf(se.inputSource);if(oe===-1)return;const Ce=T[oe];Ce!==void 0&&(Ce.update(se.inputSource,se.frame,c||o),Ce.dispatchEvent({type:se.type,data:se.inputSource}))}function W(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",k);for(let se=0;se<T.length;se++){const oe=C[se];oe!==null&&(C[se]=null,T[se].disconnect(oe))}q=null,j=null,m.reset();for(const se in d)delete d[se];e.setRenderTarget(y),p=null,f=null,h=null,r=null,b=null,ut.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",W),r.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Ve=null,Me=null;_.depth&&(Me=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ce=_.stencil?$r:nr,Ve=_.stencil?Ko:Ri);const at={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(at),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Ei(f.textureWidth,f.textureHeight,{format:ri,type:Wn,depthTexture:new Qo(f.textureWidth,f.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Ce={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Ei(p.framebufferWidth,p.framebufferHeight,{format:ri,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ut.setContext(r),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(se){for(let oe=0;oe<se.removed.length;oe++){const Ce=se.removed[oe],Ve=C.indexOf(Ce);Ve>=0&&(C[Ve]=null,T[Ve].disconnect(Ce))}for(let oe=0;oe<se.added.length;oe++){const Ce=se.added[oe];let Ve=C.indexOf(Ce);if(Ve===-1){for(let at=0;at<T.length;at++)if(at>=C.length){C.push(Ce),Ve=at;break}else if(C[at]===null){C[at]=Ce,Ve=at;break}if(Ve===-1)break}const Me=T[Ve];Me&&Me.connect(Ce)}}const H=new P,ce=new P;function pe(se,oe,Ce){H.setFromMatrixPosition(oe.matrixWorld),ce.setFromMatrixPosition(Ce.matrixWorld);const Ve=H.distanceTo(ce),Me=oe.projectionMatrix.elements,at=Ce.projectionMatrix.elements,I=Me[14]/(Me[10]-1),O=Me[14]/(Me[10]+1),U=(Me[9]+1)/Me[5],z=(Me[9]-1)/Me[5],F=(Me[8]-1)/Me[0],X=(at[8]+1)/at[0],E=I*F,re=I*X,Z=Ve/(-F+X),Q=Z*-F;if(oe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Q),se.translateZ(Z),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Me[10]===-1)se.projectionMatrix.copy(oe.projectionMatrix),se.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ie=I+Z,w=O+Z,x=E-Q,N=re+(Ve-Q),Y=U*O/w*ie,ne=z*O/w*ie;se.projectionMatrix.makePerspective(x,N,Y,ne,ie,w),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function fe(se,oe){oe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(oe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let oe=se.near,Ce=se.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(Ce=m.depthFar)),V.near=M.near=S.near=oe,V.far=M.far=S.far=Ce,(q!==V.near||j!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),q=V.near,j=V.far),V.layers.mask=se.layers.mask|6,S.layers.mask=V.layers.mask&3,M.layers.mask=V.layers.mask&5;const Ve=se.parent,Me=V.cameras;fe(V,Ve);for(let at=0;at<Me.length;at++)fe(Me[at],Ve);Me.length===2?pe(V,S,M):V.projectionMatrix.copy(S.projectionMatrix),ke(se,V,Ve)};function ke(se,oe,Ce){Ce===null?se.matrix.copy(oe.matrixWorld):(se.matrix.copy(Ce.matrixWorld),se.matrix.invert(),se.matrix.multiply(oe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(oe.projectionMatrix),se.projectionMatrixInverse.copy(oe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=$s*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(se){l=se,f!==null&&(f.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(se){return d[se]};let Le=null;function Qe(se,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){const Ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Ve=!1;Ce.length!==V.cameras.length&&(V.cameras.length=0,Ve=!0);for(let O=0;O<Ce.length;O++){const U=Ce[O];let z=null;if(p!==null)z=p.getViewport(U);else{const X=h.getViewSubImage(f,U);z=X.viewport,O===0&&(e.setRenderTargetTextures(b,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(b))}let F=L[O];F===void 0&&(F=new Nn,F.layers.enable(O),F.viewport=new Gt,L[O]=F),F.matrix.fromArray(U.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(U.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(z.x,z.y,z.width,z.height),O===0&&(V.matrix.copy(F.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ve===!0&&V.cameras.push(F)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const O=h.getDepthInformation(Ce[0]);O&&O.isValid&&O.texture&&m.init(O,r.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let O=0;O<Ce.length;O++){const U=Ce[O].camera;if(U){let z=d[U];z||(z=new n_,d[U]=z);const F=h.getCameraImage(U);z.sourceTexture=F}}}}for(let Ce=0;Ce<T.length;Ce++){const Ve=C[Ce],Me=T[Ce];Ve!==null&&Me!==void 0&&Me.update(Ve,oe,c||o)}Le&&Le(se,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const ut=new g_;ut.setAnimationLoop(Qe),this.setAnimationLoop=function(se){Le=se},this.dispose=function(){}}}const Vr=new li,hA=new ht;function fA(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,K0(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,y,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===vn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===vn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),y=_.envMap,b=_.envMapRotation;y&&(m.envMap.value=y,Vr.copy(b),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),m.envMapRotation.value.setFromMatrix4(hA.makeRotationFromEuler(Vr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=y*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===vn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const b=y.program;i.uniformBlockBinding(_,b)}function c(_,y){let b=r[_.id];b===void 0&&(g(_),b=u(_),r[_.id]=b,_.addEventListener("dispose",m));const T=y.program;i.updateUBOMapping(_,T);const C=e.render.frame;s[_.id]!==C&&(f(_),s[_.id]=C)}function u(_){const y=h();_.__bindingPointIndex=y;const b=t.createBuffer(),T=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,T,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,b),b}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const y=r[_.id],b=_.uniforms,T=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let C=0,D=b.length;C<D;C++){const R=Array.isArray(b[C])?b[C]:[b[C]];for(let S=0,M=R.length;S<M;S++){const L=R[S];if(p(L,C,S,T)===!0){const V=L.__offset,q=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let J=0;J<q.length;J++){const W=q[J],k=v(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,V+j,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,j),j+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,y,b,T){const C=_.value,D=y+"_"+b;if(T[D]===void 0)return typeof C=="number"||typeof C=="boolean"?T[D]=C:T[D]=C.clone(),!0;{const R=T[D];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return T[D]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(_){const y=_.uniforms;let b=0;const T=16;for(let D=0,R=y.length;D<R;D++){const S=Array.isArray(y[D])?y[D]:[y[D]];for(let M=0,L=S.length;M<L;M++){const V=S[M],q=Array.isArray(V.value)?V.value:[V.value];for(let j=0,J=q.length;j<J;j++){const W=q[j],k=v(W),H=b%T,ce=H%k.boundary,pe=H+ce;b+=ce,pe!==0&&T-pe<k.storage&&(b+=T-pe),V.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=k.storage}}}const C=b%T;return C>0&&(b+=T-C),_.__size=b,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Je("WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}const pA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pi=null;function mA(){return pi===null&&(pi=new _S(pA,16,16,Ys,tr),pi.name="DFG_LUT",pi.minFilter=gn,pi.magFilter=gn,pi.wrapS=$i,pi.wrapT=$i,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}class gA{constructor(e={}){const{canvas:n=Rb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Wn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=p,m=new Set([Qh,Zh,Kh]),d=new Set([Wn,Ri,$o,Ko,Jh,$h]),_=new Uint32Array(4),y=new Int32Array(4);let b=null,T=null;const C=[],D=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let M=!1;this._outputColorSpace=Hn;let L=0,V=0,q=null,j=-1,J=null;const W=new Gt,k=new Gt;let H=null;const ce=new Ze(0);let pe=0,fe=n.width,ke=n.height,Le=1,Qe=null,ut=null;const se=new Gt(0,0,fe,ke),oe=new Gt(0,0,fe,ke);let Ce=!1;const Ve=new sf;let Me=!1,at=!1;const I=new ht,O=new P,U=new Gt,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let F=!1;function X(){return q===null?Le:1}let E=i;function re(A,G){return n.getContext(A,G)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xh}`),n.addEventListener("webglcontextlost",et,!1),n.addEventListener("webglcontextrestored",Rt,!1),n.addEventListener("webglcontextcreationerror",yt,!1),E===null){const G="webgl2";if(E=re(G,A),E===null)throw re(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw dt("WebGLRenderer: "+A.message),A}let Z,Q,ie,w,x,N,Y,ne,$,we,he,Pe,ze,ue,be,Ee,Ie,ye,nt,B,De,ge,Ne,de;function le(){Z=new m1(E),Z.init(),ge=new oA(E,Z),Q=new o1(E,Z,e,ge),ie=new rA(E,Z),Q.reversedDepthBuffer&&f&&ie.buffers.depth.setReversed(!0),w=new v1(E),x=new GT,N=new sA(E,Z,ie,x,Q,ge,w),Y=new l1(S),ne=new p1(S),$=new SM(E),Ne=new r1(E,$),we=new g1(E,$,w,Ne),he=new y1(E,we,$,w),nt=new x1(E,Q,N),Ee=new a1(x),Pe=new HT(S,Y,ne,Z,Q,Ne,Ee),ze=new fA(S,x),ue=new XT,be=new ZT(Z),ye=new i1(S,Y,ne,ie,he,g,l),Ie=new nA(S,he,Q),de=new dA(E,w,Q,ie),B=new s1(E,Z,w),De=new _1(E,Z,w),w.programs=Pe.programs,S.capabilities=Q,S.extensions=Z,S.properties=x,S.renderLists=ue,S.shadowMap=Ie,S.state=ie,S.info=w}le(),v!==Wn&&(R=new S1(v,n.width,n.height,r,s));const Se=new uA(S,E);this.xr=Se,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const A=Z.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Z.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(A){A!==void 0&&(Le=A,this.setSize(fe,ke,!1))},this.getSize=function(A){return A.set(fe,ke)},this.setSize=function(A,G,te=!0){if(Se.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=A,ke=G,n.width=Math.floor(A*Le),n.height=Math.floor(G*Le),te===!0&&(n.style.width=A+"px",n.style.height=G+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(fe*Le,ke*Le).floor()},this.setDrawingBufferSize=function(A,G,te){fe=A,ke=G,Le=te,n.width=Math.floor(A*te),n.height=Math.floor(G*te),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(v===Wn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(W)},this.getViewport=function(A){return A.copy(se)},this.setViewport=function(A,G,te,ee){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,G,te,ee),ie.viewport(W.copy(se).multiplyScalar(Le).round())},this.getScissor=function(A){return A.copy(oe)},this.setScissor=function(A,G,te,ee){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,G,te,ee),ie.scissor(k.copy(oe).multiplyScalar(Le).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(A){ie.setScissorTest(Ce=A)},this.setOpaqueSort=function(A){Qe=A},this.setTransparentSort=function(A){ut=A},this.getClearColor=function(A){return A.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,te=!0){let ee=0;if(A){let K=!1;if(q!==null){const Te=q.texture.format;K=m.has(Te)}if(K){const Te=q.texture.type,Ue=d.has(Te),Re=ye.getClearColor(),Be=ye.getClearAlpha(),Ge=Re.r,Ke=Re.g,Xe=Re.b;Ue?(_[0]=Ge,_[1]=Ke,_[2]=Xe,_[3]=Be,E.clearBufferuiv(E.COLOR,0,_)):(y[0]=Ge,y[1]=Ke,y[2]=Xe,y[3]=Be,E.clearBufferiv(E.COLOR,0,y))}else ee|=E.COLOR_BUFFER_BIT}G&&(ee|=E.DEPTH_BUFFER_BIT),te&&(ee|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",et,!1),n.removeEventListener("webglcontextrestored",Rt,!1),n.removeEventListener("webglcontextcreationerror",yt,!1),ye.dispose(),ue.dispose(),be.dispose(),x.dispose(),Y.dispose(),ne.dispose(),he.dispose(),Ne.dispose(),de.dispose(),Pe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",td),Se.removeEventListener("sessionend",nd),Ir.stop()};function et(A){A.preventDefault(),Kd("WebGLRenderer: Context Lost."),M=!0}function Rt(){Kd("WebGLRenderer: Context Restored."),M=!1;const A=w.autoReset,G=Ie.enabled,te=Ie.autoUpdate,ee=Ie.needsUpdate,K=Ie.type;le(),w.autoReset=A,Ie.enabled=G,Ie.autoUpdate=te,Ie.needsUpdate=ee,Ie.type=K}function yt(A){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function fi(A){const G=A.target;G.removeEventListener("dispose",fi),Ni(G)}function Ni(A){av(A),x.remove(A)}function av(A){const G=x.get(A).programs;G!==void 0&&(G.forEach(function(te){Pe.releaseProgram(te)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,te,ee,K,Te){G===null&&(G=z);const Ue=K.isMesh&&K.matrixWorld.determinant()<0,Re=cv(A,G,te,ee,K);ie.setMaterial(ee,Ue);let Be=te.index,Ge=1;if(ee.wireframe===!0){if(Be=we.getWireframeAttribute(te),Be===void 0)return;Ge=2}const Ke=te.drawRange,Xe=te.attributes.position;let ct=Ke.start*Ge,wt=(Ke.start+Ke.count)*Ge;Te!==null&&(ct=Math.max(ct,Te.start*Ge),wt=Math.min(wt,(Te.start+Te.count)*Ge)),Be!==null?(ct=Math.max(ct,0),wt=Math.min(wt,Be.count)):Xe!=null&&(ct=Math.max(ct,0),wt=Math.min(wt,Xe.count));const zt=wt-ct;if(zt<0||zt===1/0)return;Ne.setup(K,ee,Re,te,Be);let Vt,At=B;if(Be!==null&&(Vt=$.get(Be),At=De,At.setIndex(Vt)),K.isMesh)ee.wireframe===!0?(ie.setLineWidth(ee.wireframeLinewidth*X()),At.setMode(E.LINES)):At.setMode(E.TRIANGLES);else if(K.isLine){let qe=ee.linewidth;qe===void 0&&(qe=1),ie.setLineWidth(qe*X()),K.isLineSegments?At.setMode(E.LINES):K.isLineLoop?At.setMode(E.LINE_LOOP):At.setMode(E.LINE_STRIP)}else K.isPoints?At.setMode(E.POINTS):K.isSprite&&At.setMode(E.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Zo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))At.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const qe=K._multiDrawStarts,bt=K._multiDrawCounts,gt=K._multiDrawCount,kn=Be?$.get(Be).bytesPerElement:1,us=x.get(ee).currentProgram.getUniforms();for(let Bn=0;Bn<gt;Bn++)us.setValue(E,"_gl_DrawID",Bn),At.render(qe[Bn]/kn,bt[Bn])}else if(K.isInstancedMesh)At.renderInstances(ct,zt,K.count);else if(te.isInstancedBufferGeometry){const qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,bt=Math.min(te.instanceCount,qe);At.renderInstances(ct,zt,bt)}else At.render(ct,zt)};function ed(A,G,te){A.transparent===!0&&A.side===Tn&&A.forceSinglePass===!1?(A.side=vn,A.needsUpdate=!0,da(A,G,te),A.side=Pr,A.needsUpdate=!0,da(A,G,te),A.side=Tn):da(A,G,te)}this.compile=function(A,G,te=null){te===null&&(te=A),T=be.get(te),T.init(G),D.push(T),te.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),A!==te&&A.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights();const ee=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Te=K.material;if(Te)if(Array.isArray(Te))for(let Ue=0;Ue<Te.length;Ue++){const Re=Te[Ue];ed(Re,te,K),ee.add(Re)}else ed(Te,te,K),ee.add(Te)}),T=D.pop(),ee},this.compileAsync=function(A,G,te=null){const ee=this.compile(A,G,te);return new Promise(K=>{function Te(){if(ee.forEach(function(Ue){x.get(Ue).currentProgram.isReady()&&ee.delete(Ue)}),ee.size===0){K(A);return}setTimeout(Te,10)}Z.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let tc=null;function lv(A){tc&&tc(A)}function td(){Ir.stop()}function nd(){Ir.start()}const Ir=new g_;Ir.setAnimationLoop(lv),typeof self<"u"&&Ir.setContext(self),this.setAnimationLoop=function(A){tc=A,Se.setAnimationLoop(A),A===null?Ir.stop():Ir.start()},Se.addEventListener("sessionstart",td),Se.addEventListener("sessionend",nd),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const te=Se.enabled===!0&&Se.isPresenting===!0,ee=R!==null&&(q===null||te)&&R.begin(S,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(G),G=Se.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,G,q),T=be.get(A,D.length),T.init(G),D.push(T),I.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ve.setFromProjectionMatrix(I,Si,G.reversedDepth),at=this.localClippingEnabled,Me=Ee.init(this.clippingPlanes,at),b=ue.get(A,C.length),b.init(),C.push(b),Se.enabled===!0&&Se.isPresenting===!0){const Ue=S.xr.getDepthSensingMesh();Ue!==null&&nc(Ue,G,-1/0,S.sortObjects)}nc(A,G,0,S.sortObjects),b.finish(),S.sortObjects===!0&&b.sort(Qe,ut),F=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,F&&ye.addToRenderList(b,A),this.info.render.frame++,Me===!0&&Ee.beginShadows();const K=T.state.shadowsArray;if(Ie.render(K,A,G),Me===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&R.hasRenderPass())===!1){const Ue=b.opaque,Re=b.transmissive;if(T.setupLights(),G.isArrayCamera){const Be=G.cameras;if(Re.length>0)for(let Ge=0,Ke=Be.length;Ge<Ke;Ge++){const Xe=Be[Ge];rd(Ue,Re,A,Xe)}F&&ye.render(A);for(let Ge=0,Ke=Be.length;Ge<Ke;Ge++){const Xe=Be[Ge];id(b,A,Xe,Xe.viewport)}}else Re.length>0&&rd(Ue,Re,A,G),F&&ye.render(A),id(b,A,G)}q!==null&&V===0&&(N.updateMultisampleRenderTarget(q),N.updateRenderTargetMipmap(q)),ee&&R.end(S),A.isScene===!0&&A.onAfterRender(S,A,G),Ne.resetDefaultState(),j=-1,J=null,D.pop(),D.length>0?(T=D[D.length-1],Me===!0&&Ee.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?b=C[C.length-1]:b=null};function nc(A,G,te,ee){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ve.intersectsSprite(A)){ee&&U.setFromMatrixPosition(A.matrixWorld).applyMatrix4(I);const Ue=he.update(A),Re=A.material;Re.visible&&b.push(A,Ue,Re,te,U.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ve.intersectsObject(A))){const Ue=he.update(A),Re=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),U.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),U.copy(Ue.boundingSphere.center)),U.applyMatrix4(A.matrixWorld).applyMatrix4(I)),Array.isArray(Re)){const Be=Ue.groups;for(let Ge=0,Ke=Be.length;Ge<Ke;Ge++){const Xe=Be[Ge],ct=Re[Xe.materialIndex];ct&&ct.visible&&b.push(A,Ue,ct,te,U.z,Xe)}}else Re.visible&&b.push(A,Ue,Re,te,U.z,null)}}const Te=A.children;for(let Ue=0,Re=Te.length;Ue<Re;Ue++)nc(Te[Ue],G,te,ee)}function id(A,G,te,ee){const{opaque:K,transmissive:Te,transparent:Ue}=A;T.setupLightsView(te),Me===!0&&Ee.setGlobalState(S.clippingPlanes,te),ee&&ie.viewport(W.copy(ee)),K.length>0&&fa(K,G,te),Te.length>0&&fa(Te,G,te),Ue.length>0&&fa(Ue,G,te),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function rd(A,G,te,ee){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ee.id]===void 0){const ct=Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ee.id]=new Ei(1,1,{generateMipmaps:!0,type:ct?tr:Wn,minFilter:Jr,samples:Q.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace})}const Te=T.state.transmissionRenderTarget[ee.id],Ue=ee.viewport||W;Te.setSize(Ue.z*S.transmissionResolutionScale,Ue.w*S.transmissionResolutionScale);const Re=S.getRenderTarget(),Be=S.getActiveCubeFace(),Ge=S.getActiveMipmapLevel();S.setRenderTarget(Te),S.getClearColor(ce),pe=S.getClearAlpha(),pe<1&&S.setClearColor(16777215,.5),S.clear(),F&&ye.render(te);const Ke=S.toneMapping;S.toneMapping=wi;const Xe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),T.setupLightsView(ee),Me===!0&&Ee.setGlobalState(S.clippingPlanes,ee),fa(A,te,ee),N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te),Z.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let wt=0,zt=G.length;wt<zt;wt++){const Vt=G[wt],{object:At,geometry:qe,material:bt,group:gt}=Vt;if(bt.side===Tn&&At.layers.test(ee.layers)){const kn=bt.side;bt.side=vn,bt.needsUpdate=!0,sd(At,te,ee,qe,bt,gt),bt.side=kn,bt.needsUpdate=!0,ct=!0}}ct===!0&&(N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te))}S.setRenderTarget(Re,Be,Ge),S.setClearColor(ce,pe),Xe!==void 0&&(ee.viewport=Xe),S.toneMapping=Ke}function fa(A,G,te){const ee=G.isScene===!0?G.overrideMaterial:null;for(let K=0,Te=A.length;K<Te;K++){const Ue=A[K],{object:Re,geometry:Be,group:Ge}=Ue;let Ke=Ue.material;Ke.allowOverride===!0&&ee!==null&&(Ke=ee),Re.layers.test(te.layers)&&sd(Re,G,te,Be,Ke,Ge)}}function sd(A,G,te,ee,K,Te){A.onBeforeRender(S,G,te,ee,K,Te),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(S,G,te,ee,A,Te),K.transparent===!0&&K.side===Tn&&K.forceSinglePass===!1?(K.side=vn,K.needsUpdate=!0,S.renderBufferDirect(te,G,ee,K,A,Te),K.side=Pr,K.needsUpdate=!0,S.renderBufferDirect(te,G,ee,K,A,Te),K.side=Tn):S.renderBufferDirect(te,G,ee,K,A,Te),A.onAfterRender(S,G,te,ee,K,Te)}function da(A,G,te){G.isScene!==!0&&(G=z);const ee=x.get(A),K=T.state.lights,Te=T.state.shadowsArray,Ue=K.state.version,Re=Pe.getParameters(A,K.state,Te,G,te),Be=Pe.getProgramCacheKey(Re);let Ge=ee.programs;ee.environment=A.isMeshStandardMaterial?G.environment:null,ee.fog=G.fog,ee.envMap=(A.isMeshStandardMaterial?ne:Y).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",fi),Ge=new Map,ee.programs=Ge);let Ke=Ge.get(Be);if(Ke!==void 0){if(ee.currentProgram===Ke&&ee.lightsStateVersion===Ue)return ad(A,Re),Ke}else Re.uniforms=Pe.getUniforms(A),A.onBeforeCompile(Re,S),Ke=Pe.acquireProgram(Re,Be),Ge.set(Be,Ke),ee.uniforms=Re.uniforms;const Xe=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=Ee.uniform),ad(A,Re),ee.needsLights=hv(A),ee.lightsStateVersion=Ue,ee.needsLights&&(Xe.ambientLightColor.value=K.state.ambient,Xe.lightProbe.value=K.state.probe,Xe.directionalLights.value=K.state.directional,Xe.directionalLightShadows.value=K.state.directionalShadow,Xe.spotLights.value=K.state.spot,Xe.spotLightShadows.value=K.state.spotShadow,Xe.rectAreaLights.value=K.state.rectArea,Xe.ltc_1.value=K.state.rectAreaLTC1,Xe.ltc_2.value=K.state.rectAreaLTC2,Xe.pointLights.value=K.state.point,Xe.pointLightShadows.value=K.state.pointShadow,Xe.hemisphereLights.value=K.state.hemi,Xe.directionalShadowMap.value=K.state.directionalShadowMap,Xe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Xe.spotShadowMap.value=K.state.spotShadowMap,Xe.spotLightMatrix.value=K.state.spotLightMatrix,Xe.spotLightMap.value=K.state.spotLightMap,Xe.pointShadowMap.value=K.state.pointShadowMap,Xe.pointShadowMatrix.value=K.state.pointShadowMatrix),ee.currentProgram=Ke,ee.uniformsList=null,Ke}function od(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=hl.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function ad(A,G){const te=x.get(A);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.batchingColor=G.batchingColor,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function cv(A,G,te,ee,K){G.isScene!==!0&&(G=z),N.resetTextureUnits();const Te=G.fog,Ue=ee.isMeshStandardMaterial?G.environment:null,Re=q===null?S.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Js,Be=(ee.isMeshStandardMaterial?ne:Y).get(ee.envMap||Ue),Ge=ee.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ke=!!te.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Xe=!!te.morphAttributes.position,ct=!!te.morphAttributes.normal,wt=!!te.morphAttributes.color;let zt=wi;ee.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(zt=S.toneMapping);const Vt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,At=Vt!==void 0?Vt.length:0,qe=x.get(ee),bt=T.state.lights;if(Me===!0&&(at===!0||A!==J)){const yn=A===J&&ee.id===j;Ee.setState(ee,A,yn)}let gt=!1;ee.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==bt.state.version||qe.outputColorSpace!==Re||K.isBatchedMesh&&qe.batching===!1||!K.isBatchedMesh&&qe.batching===!0||K.isBatchedMesh&&qe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&qe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&qe.instancing===!1||!K.isInstancedMesh&&qe.instancing===!0||K.isSkinnedMesh&&qe.skinning===!1||!K.isSkinnedMesh&&qe.skinning===!0||K.isInstancedMesh&&qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&qe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&qe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&qe.instancingMorph===!1&&K.morphTexture!==null||qe.envMap!==Be||ee.fog===!0&&qe.fog!==Te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ee.numPlanes||qe.numIntersection!==Ee.numIntersection)||qe.vertexAlphas!==Ge||qe.vertexTangents!==Ke||qe.morphTargets!==Xe||qe.morphNormals!==ct||qe.morphColors!==wt||qe.toneMapping!==zt||qe.morphTargetsCount!==At)&&(gt=!0):(gt=!0,qe.__version=ee.version);let kn=qe.currentProgram;gt===!0&&(kn=da(ee,G,K));let us=!1,Bn=!1,co=!1;const Dt=kn.getUniforms(),Pn=qe.uniforms;if(ie.useProgram(kn.program)&&(us=!0,Bn=!0,co=!0),ee.id!==j&&(j=ee.id,Bn=!0),us||J!==A){ie.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Dt.setValue(E,"projectionMatrix",A.projectionMatrix),Dt.setValue(E,"viewMatrix",A.matrixWorldInverse);const Rn=Dt.map.cameraPosition;Rn!==void 0&&Rn.setValue(E,O.setFromMatrixPosition(A.matrixWorld)),Q.logarithmicDepthBuffer&&Dt.setValue(E,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Dt.setValue(E,"isOrthographic",A.isOrthographicCamera===!0),J!==A&&(J=A,Bn=!0,co=!0)}if(qe.needsLights&&(bt.state.directionalShadowMap.length>0&&Dt.setValue(E,"directionalShadowMap",bt.state.directionalShadowMap,N),bt.state.spotShadowMap.length>0&&Dt.setValue(E,"spotShadowMap",bt.state.spotShadowMap,N),bt.state.pointShadowMap.length>0&&Dt.setValue(E,"pointShadowMap",bt.state.pointShadowMap,N)),K.isSkinnedMesh){Dt.setOptional(E,K,"bindMatrix"),Dt.setOptional(E,K,"bindMatrixInverse");const yn=K.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Dt.setValue(E,"boneTexture",yn.boneTexture,N))}K.isBatchedMesh&&(Dt.setOptional(E,K,"batchingTexture"),Dt.setValue(E,"batchingTexture",K._matricesTexture,N),Dt.setOptional(E,K,"batchingIdTexture"),Dt.setValue(E,"batchingIdTexture",K._indirectTexture,N),Dt.setOptional(E,K,"batchingColorTexture"),K._colorsTexture!==null&&Dt.setValue(E,"batchingColorTexture",K._colorsTexture,N));const $n=te.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&nt.update(K,te,kn),(Bn||qe.receiveShadow!==K.receiveShadow)&&(qe.receiveShadow=K.receiveShadow,Dt.setValue(E,"receiveShadow",K.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Pn.envMap.value=Be,Pn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&G.environment!==null&&(Pn.envMapIntensity.value=G.environmentIntensity),Pn.dfgLUT!==void 0&&(Pn.dfgLUT.value=mA()),Bn&&(Dt.setValue(E,"toneMappingExposure",S.toneMappingExposure),qe.needsLights&&uv(Pn,co),Te&&ee.fog===!0&&ze.refreshFogUniforms(Pn,Te),ze.refreshMaterialUniforms(Pn,ee,Le,ke,T.state.transmissionRenderTarget[A.id]),hl.upload(E,od(qe),Pn,N)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(hl.upload(E,od(qe),Pn,N),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Dt.setValue(E,"center",K.center),Dt.setValue(E,"modelViewMatrix",K.modelViewMatrix),Dt.setValue(E,"normalMatrix",K.normalMatrix),Dt.setValue(E,"modelMatrix",K.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const yn=ee.uniformsGroups;for(let Rn=0,ic=yn.length;Rn<ic;Rn++){const Lr=yn[Rn];de.update(Lr,kn),de.bind(Lr,kn)}}return kn}function uv(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function hv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,G,te){const ee=x.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),x.get(A.texture).__webglTexture=G,x.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:te,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const te=x.get(A);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0};const fv=E.createFramebuffer();this.setRenderTarget=function(A,G=0,te=0){q=A,L=G,V=te;let ee=null,K=!1,Te=!1;if(A){const Re=x.get(A);if(Re.__useDefaultFramebuffer!==void 0){ie.bindFramebuffer(E.FRAMEBUFFER,Re.__webglFramebuffer),W.copy(A.viewport),k.copy(A.scissor),H=A.scissorTest,ie.viewport(W),ie.scissor(k),ie.setScissorTest(H),j=-1;return}else if(Re.__webglFramebuffer===void 0)N.setupRenderTarget(A);else if(Re.__hasExternalTextures)N.rebindTextures(A,x.get(A.texture).__webglTexture,x.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ke=A.depthTexture;if(Re.__boundDepthTexture!==Ke){if(Ke!==null&&x.has(Ke)&&(A.width!==Ke.image.width||A.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(A)}}const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Te=!0);const Ge=x.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[G])?ee=Ge[G][te]:ee=Ge[G],K=!0):A.samples>0&&N.useMultisampledRTT(A)===!1?ee=x.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?ee=Ge[te]:ee=Ge,W.copy(A.viewport),k.copy(A.scissor),H=A.scissorTest}else W.copy(se).multiplyScalar(Le).floor(),k.copy(oe).multiplyScalar(Le).floor(),H=Ce;if(te!==0&&(ee=fv),ie.bindFramebuffer(E.FRAMEBUFFER,ee)&&ie.drawBuffers(A,ee),ie.viewport(W),ie.scissor(k),ie.setScissorTest(H),K){const Re=x.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+G,Re.__webglTexture,te)}else if(Te){const Re=G;for(let Be=0;Be<A.textures.length;Be++){const Ge=x.get(A.textures[Be]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Be,Ge.__webglTexture,te,Re)}}else if(A!==null&&te!==0){const Re=x.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Re.__webglTexture,te)}j=-1},this.readRenderTargetPixels=function(A,G,te,ee,K,Te,Ue,Re=0){if(!(A&&A.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=x.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){ie.bindFramebuffer(E.FRAMEBUFFER,Be);try{const Ge=A.textures[Re],Ke=Ge.format,Xe=Ge.type;if(!Q.textureFormatReadable(Ke)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Xe)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-ee&&te>=0&&te<=A.height-K&&(A.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Re),E.readPixels(G,te,ee,K,ge.convert(Ke),ge.convert(Xe),Te))}finally{const Ge=q!==null?x.get(q).__webglFramebuffer:null;ie.bindFramebuffer(E.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(A,G,te,ee,K,Te,Ue,Re=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=x.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be)if(G>=0&&G<=A.width-ee&&te>=0&&te<=A.height-K){ie.bindFramebuffer(E.FRAMEBUFFER,Be);const Ge=A.textures[Re],Ke=Ge.format,Xe=Ge.type;if(!Q.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,ct),E.bufferData(E.PIXEL_PACK_BUFFER,Te.byteLength,E.STREAM_READ),A.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Re),E.readPixels(G,te,ee,K,ge.convert(Ke),ge.convert(Xe),0);const wt=q!==null?x.get(q).__webglFramebuffer:null;ie.bindFramebuffer(E.FRAMEBUFFER,wt);const zt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Db(E,zt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,ct),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Te),E.deleteBuffer(ct),E.deleteSync(zt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,te=0){const ee=Math.pow(2,-te),K=Math.floor(A.image.width*ee),Te=Math.floor(A.image.height*ee),Ue=G!==null?G.x:0,Re=G!==null?G.y:0;N.setTexture2D(A,0),E.copyTexSubImage2D(E.TEXTURE_2D,te,0,0,Ue,Re,K,Te),ie.unbindTexture()};const dv=E.createFramebuffer(),pv=E.createFramebuffer();this.copyTextureToTexture=function(A,G,te=null,ee=null,K=0,Te=null){Te===null&&(K!==0?(Zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=K,K=0):Te=0);let Ue,Re,Be,Ge,Ke,Xe,ct,wt,zt;const Vt=A.isCompressedTexture?A.mipmaps[Te]:A.image;if(te!==null)Ue=te.max.x-te.min.x,Re=te.max.y-te.min.y,Be=te.isBox3?te.max.z-te.min.z:1,Ge=te.min.x,Ke=te.min.y,Xe=te.isBox3?te.min.z:0;else{const $n=Math.pow(2,-K);Ue=Math.floor(Vt.width*$n),Re=Math.floor(Vt.height*$n),A.isDataArrayTexture?Be=Vt.depth:A.isData3DTexture?Be=Math.floor(Vt.depth*$n):Be=1,Ge=0,Ke=0,Xe=0}ee!==null?(ct=ee.x,wt=ee.y,zt=ee.z):(ct=0,wt=0,zt=0);const At=ge.convert(G.format),qe=ge.convert(G.type);let bt;G.isData3DTexture?(N.setTexture3D(G,0),bt=E.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(N.setTexture2DArray(G,0),bt=E.TEXTURE_2D_ARRAY):(N.setTexture2D(G,0),bt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,G.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,G.unpackAlignment);const gt=E.getParameter(E.UNPACK_ROW_LENGTH),kn=E.getParameter(E.UNPACK_IMAGE_HEIGHT),us=E.getParameter(E.UNPACK_SKIP_PIXELS),Bn=E.getParameter(E.UNPACK_SKIP_ROWS),co=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Vt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Vt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ge),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ke),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Xe);const Dt=A.isDataArrayTexture||A.isData3DTexture,Pn=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const $n=x.get(A),yn=x.get(G),Rn=x.get($n.__renderTarget),ic=x.get(yn.__renderTarget);ie.bindFramebuffer(E.READ_FRAMEBUFFER,Rn.__webglFramebuffer),ie.bindFramebuffer(E.DRAW_FRAMEBUFFER,ic.__webglFramebuffer);for(let Lr=0;Lr<Be;Lr++)Dt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,x.get(A).__webglTexture,K,Xe+Lr),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,x.get(G).__webglTexture,Te,zt+Lr)),E.blitFramebuffer(Ge,Ke,Ue,Re,ct,wt,Ue,Re,E.DEPTH_BUFFER_BIT,E.NEAREST);ie.bindFramebuffer(E.READ_FRAMEBUFFER,null),ie.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||x.has(A)){const $n=x.get(A),yn=x.get(G);ie.bindFramebuffer(E.READ_FRAMEBUFFER,dv),ie.bindFramebuffer(E.DRAW_FRAMEBUFFER,pv);for(let Rn=0;Rn<Be;Rn++)Dt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,$n.__webglTexture,K,Xe+Rn):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,$n.__webglTexture,K),Pn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,yn.__webglTexture,Te,zt+Rn):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,yn.__webglTexture,Te),K!==0?E.blitFramebuffer(Ge,Ke,Ue,Re,ct,wt,Ue,Re,E.COLOR_BUFFER_BIT,E.NEAREST):Pn?E.copyTexSubImage3D(bt,Te,ct,wt,zt+Rn,Ge,Ke,Ue,Re):E.copyTexSubImage2D(bt,Te,ct,wt,Ge,Ke,Ue,Re);ie.bindFramebuffer(E.READ_FRAMEBUFFER,null),ie.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Pn?A.isDataTexture||A.isData3DTexture?E.texSubImage3D(bt,Te,ct,wt,zt,Ue,Re,Be,At,qe,Vt.data):G.isCompressedArrayTexture?E.compressedTexSubImage3D(bt,Te,ct,wt,zt,Ue,Re,Be,At,Vt.data):E.texSubImage3D(bt,Te,ct,wt,zt,Ue,Re,Be,At,qe,Vt):A.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Te,ct,wt,Ue,Re,At,qe,Vt.data):A.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Te,ct,wt,Vt.width,Vt.height,At,Vt.data):E.texSubImage2D(E.TEXTURE_2D,Te,ct,wt,Ue,Re,At,qe,Vt);E.pixelStorei(E.UNPACK_ROW_LENGTH,gt),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,kn),E.pixelStorei(E.UNPACK_SKIP_PIXELS,us),E.pixelStorei(E.UNPACK_SKIP_ROWS,Bn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,co),Te===0&&G.generateMipmaps&&E.generateMipmap(bt),ie.unbindTexture()},this.initRenderTarget=function(A){x.get(A).__webglFramebuffer===void 0&&N.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?N.setTextureCube(A,0):A.isData3DTexture?N.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?N.setTexture2DArray(A,0):N.setTexture2D(A,0),ie.unbindTexture()},this.resetState=function(){L=0,V=0,q=null,ie.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=mt._getUnpackColorSpace()}}const rm={type:"change"},vf={type:"start"},b_={type:"end"},Ya=new la,sm=new Xi,_A=Math.cos(70*Cl.DEG2RAD),Zt=new P,Dn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$c=1e-6;class vA extends m_{constructor(e,n=null){super(e,n),this.state=Et.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:Ds.ROTATE,TWO:Ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new an,this._lastTargetPosition=new P,this._quat=new an().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pp,this._sphericalDelta=new Pp,this._scale=1,this._panOffset=new P,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new P,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yA.bind(this),this._onPointerDown=xA.bind(this),this._onPointerUp=bA.bind(this),this._onContextMenu=CA.bind(this),this._onMouseWheel=wA.bind(this),this._onKeyDown=EA.bind(this),this._onTouchStart=TA.bind(this),this._onTouchMove=AA.bind(this),this._onMouseDown=SA.bind(this),this._onMouseMove=MA.bind(this),this._interceptControlDown=PA.bind(this),this._interceptControlUp=RA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rm),this.update(),this.state=Et.NONE}update(e=null){const n=this.object.position;Zt.copy(n).sub(this.target),Zt.applyQuaternion(this._quat),this._spherical.setFromVector3(Zt),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Dn:i>Math.PI&&(i-=Dn),r<-Math.PI?r+=Dn:r>Math.PI&&(r-=Dn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Zt.setFromSpherical(this._spherical),Zt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Zt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ya.origin.copy(this.object.position),Ya.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ya.direction))<_A?this.object.lookAt(this.target):(sm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ya.intersectPlane(sm,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>$c||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$c||this._lastTargetPosition.distanceToSquared(this.target)>$c?(this.dispatchEvent(rm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Dn/60*this.autoRotateSpeed*e:Dn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Zt.setFromMatrixColumn(n,0),Zt.multiplyScalar(-e),this._panOffset.add(Zt)}_panUp(e,n){this.screenSpacePanning===!0?Zt.setFromMatrixColumn(n,1):(Zt.setFromMatrixColumn(n,0),Zt.crossVectors(this.object.up,Zt)),Zt.multiplyScalar(e),this._panOffset.add(Zt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Zt.copy(r).sub(this.target);let s=Zt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new me,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function xA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function yA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function bA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(b_),this.state=Et.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function SA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Et.DOLLY;break;case es.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Et.ROTATE}break;case es.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(vf)}function MA(t){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function wA(t){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(t.preventDefault(),this.dispatchEvent(vf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(b_))}function EA(t){this.enabled!==!1&&this._handleKeyDown(t)}function TA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ds.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Et.TOUCH_ROTATE;break;case Ds.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case Ds.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Et.TOUCH_DOLLY_PAN;break;case Ds.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(vf)}function AA(t){switch(this._trackPointer(t),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Et.NONE}}function CA(t){this.enabled!==!1&&t.preventDefault()}function PA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function RA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Hr=new d_,dn=new P,hr=new P,Ut=new an,om={X:new P(1,0,0),Y:new P(0,1,0),Z:new P(0,0,1)},Kc={type:"change"},am={type:"mouseDown",mode:null},lm={type:"mouseUp",mode:null},cm={type:"objectChange"};class DA extends m_{constructor(e,n=null){super(void 0,n);const i=new FA(this);this._root=i;const r=new kA;this._gizmo=r,i.add(r);const s=new BA;this._plane=s,i.add(s);const o=this;function a(y,b){let T=b;Object.defineProperty(o,y,{get:function(){return T!==void 0?T:b},set:function(C){T!==C&&(T=C,s[y]=C,r[y]=C,o.dispatchEvent({type:y+"-changed",value:C}),o.dispatchEvent(Kc))}}),o[y]=b,s[y]=b,r[y]=b}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const l=new P,c=new P,u=new an,h=new an,f=new P,p=new an,g=new P,v=new P,m=new P,d=0,_=new P;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",u),a("worldQuaternionStart",h),a("cameraPosition",f),a("cameraQuaternion",p),a("pointStart",g),a("pointEnd",v),a("rotationAxis",m),a("rotationAngle",d),a("eye",_),this._offset=new P,this._startNorm=new P,this._endNorm=new P,this._cameraScale=new P,this._parentPosition=new P,this._parentQuaternion=new an,this._parentQuaternionInv=new an,this._parentScale=new P,this._worldScaleStart=new P,this._worldQuaternionInv=new an,this._worldScale=new P,this._positionStart=new P,this._quaternionStart=new an,this._scaleStart=new P,this._getPointer=IA.bind(this),this._onPointerDown=NA.bind(this),this._onPointerHover=LA.bind(this),this._onPointerMove=UA.bind(this),this._onPointerUp=OA.bind(this),n!==null&&this.connect(n)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Hr.setFromCamera(e,this.camera);const n=Zc(this._gizmo.picker[this.mode],Hr);n?this.axis=n.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Hr.setFromCamera(e,this.camera);const n=Zc(this._plane,Hr,!0);n&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(n.point).sub(this.worldPositionStart)),this.dragging=!0,am.mode=this.mode,this.dispatchEvent(am)}}pointerMove(e){const n=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(n==="E"||n==="XYZE"||n==="XYZ")&&(s="world"),r===void 0||n===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Hr.setFromCamera(e,this.camera);const o=Zc(this._plane,Hr,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&n!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),n.indexOf("X")===-1&&(this._offset.x=0),n.indexOf("Y")===-1&&(this._offset.y=0),n.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&n!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(Ut.copy(this._quaternionStart).invert()),n.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(dn.setFromMatrixPosition(r.parent.matrixWorld)),n.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(dn.setFromMatrixPosition(r.parent.matrixWorld)))),r.position.x=Math.max(this.minX,Math.min(this.maxX,r.position.x)),r.position.y=Math.max(this.minY,Math.min(this.maxY,r.position.y)),r.position.z=Math.max(this.minZ,Math.min(this.maxZ,r.position.z));else if(i==="scale"){if(n.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),hr.set(a,a,a)}else dn.copy(this.pointStart),hr.copy(this.pointEnd),dn.applyQuaternion(this._worldQuaternionInv),hr.applyQuaternion(this._worldQuaternionInv),hr.divide(dn),n.search("X")===-1&&(hr.x=1),n.search("Y")===-1&&(hr.y=1),n.search("Z")===-1&&(hr.z=1);r.scale.copy(this._scaleStart).multiply(hr),this.scaleSnap&&(n.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(dn.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;n==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(dn.copy(this.rotationAxis).cross(this.eye))*a):(n==="X"||n==="Y"||n==="Z")&&(this.rotationAxis.copy(om[n]),dn.copy(om[n]),s==="local"&&dn.applyQuaternion(this.worldQuaternion),dn.cross(this.eye),dn.length()===0?l=!0:this.rotationAngle=this._offset.dot(dn.normalize())*a),(n==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&n!=="E"&&n!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(Ut.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(Ut.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Kc),this.dispatchEvent(cm)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(lm.mode=this.mode,this.dispatchEvent(lm)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Kc),this.dispatchEvent(cm),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Hr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,n,i,r){const s=this._gizmo.materialLib;s.xAxis.color.set(e),s.yAxis.color.set(n),s.zAxis.color.set(i),s.active.color.set(r),s.xAxisTransparent.color.set(e),s.yAxisTransparent.color.set(n),s.zAxisTransparent.color.set(i),s.activeTransparent.color.set(r),s.xAxis._color&&s.xAxis._color.set(e),s.yAxis._color&&s.yAxis._color.set(n),s.zAxis._color&&s.zAxis._color.set(i),s.active._color&&s.active._color.set(r),s.xAxisTransparent._color&&s.xAxisTransparent._color.set(e),s.yAxisTransparent._color&&s.yAxisTransparent._color.set(n),s.zAxisTransparent._color&&s.zAxisTransparent._color.set(i),s.activeTransparent._color&&s.activeTransparent._color.set(r)}}function IA(t){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:t.button};{const e=this.domElement.getBoundingClientRect();return{x:(t.clientX-e.left)/e.width*2-1,y:-(t.clientY-e.top)/e.height*2+1,button:t.button}}}function LA(t){if(this.enabled)switch(t.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(t));break}}function NA(t){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(t)),this.pointerDown(this._getPointer(t)))}function UA(t){this.enabled&&this.pointerMove(this._getPointer(t))}function OA(t){this.enabled&&(this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(t)))}function Zc(t,e,n){const i=e.intersectObject(t,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||n)return i[r];return!1}const Ja=new li,Ct=new P(0,1,0),um=new P(0,0,0),hm=new ht,$a=new an,fl=new an,mi=new P,fm=new ht,Co=new P(1,0,0),Xr=new P(0,1,0),Po=new P(0,0,1),Ka=new P,bo=new P,So=new P;class FA extends Tt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const n=this.controls;n.object!==void 0&&(n.object.updateMatrixWorld(),n.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):n.object.parent.matrixWorld.decompose(n._parentPosition,n._parentQuaternion,n._parentScale),n.object.matrixWorld.decompose(n.worldPosition,n.worldQuaternion,n._worldScale),n._parentQuaternionInv.copy(n._parentQuaternion).invert(),n._worldQuaternionInv.copy(n.worldQuaternion).invert()),n.camera.updateMatrixWorld(),n.camera.matrixWorld.decompose(n.cameraPosition,n.cameraQuaternion,n._cameraScale),n.camera.isOrthographicCamera?n.camera.getWorldDirection(n.eye).negate():n.eye.copy(n.cameraPosition).sub(n.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class kA extends Tt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new Rr({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=new ui({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=n.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const h=e.clone();h.opacity=.25;const f=e.clone();f.color.setHex(16776960),f.opacity=.25;const p=e.clone();p.color.setHex(16776960);const g=e.clone();g.color.setHex(7895160),this.materialLib={xAxis:s,yAxis:o,zAxis:a,active:p,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:u,activeTransparent:f};const v=new sn(0,.04,.1,12);v.translate(0,.05,0);const m=new Ht(.08,.08,.08);m.translate(0,.04,0);const d=new ft;d.setAttribute("position",new tt([0,0,0,1,0,0],3));const _=new sn(.0075,.0075,.5,3);_.translate(0,.25,0);function y(J,W){const k=new _r(J,.0075,3,64,W*Math.PI*2);return k.rotateY(Math.PI/2),k.rotateX(Math.PI/2),k}function b(){const J=new ft;return J.setAttribute("position",new tt([0,0,0,1,1,1],3)),J}const T={X:[[new _e(v,s),[.5,0,0],[0,0,-Math.PI/2]],[new _e(v,s),[-.5,0,0],[0,0,Math.PI/2]],[new _e(_,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new _e(v,o),[0,.5,0]],[new _e(v,o),[0,-.5,0],[Math.PI,0,0]],[new _e(_,o)]],Z:[[new _e(v,a),[0,0,.5],[Math.PI/2,0,0]],[new _e(v,a),[0,0,-.5],[-Math.PI/2,0,0]],[new _e(_,a),null,[Math.PI/2,0,0]]],XYZ:[[new _e(new Is(.1,0),h),[0,0,0]]],XY:[[new _e(new Ht(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new _e(new Ht(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _e(new Ht(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},C={X:[[new _e(new sn(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new _e(new sn(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new _e(new sn(.2,0,.6,4),i),[0,.3,0]],[new _e(new sn(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new _e(new sn(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new _e(new sn(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new _e(new Is(.2,0),i)]],XY:[[new _e(new Ht(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new _e(new Ht(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _e(new Ht(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},D={START:[[new _e(new Is(.01,2),r),null,null,null,"helper"]],END:[[new _e(new Is(.01,2),r),null,null,null,"helper"]],DELTA:[[new on(b(),r),null,null,null,"helper"]],X:[[new on(d,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new on(d,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new on(d,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},R={XYZE:[[new _e(y(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new _e(y(.5,.5),s)]],Y:[[new _e(y(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new _e(y(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new _e(y(.75,1),f),null,[0,Math.PI/2,0]]]},S={AXIS:[[new on(d,r),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new _e(new ua(.25,10,8),i)]],X:[[new _e(new _r(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new _e(new _r(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new _e(new _r(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new _e(new _r(.75,.1,2,24),i)]]},L={X:[[new _e(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new _e(_,s),[0,0,0],[0,0,-Math.PI/2]],[new _e(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new _e(m,o),[0,.5,0]],[new _e(_,o)],[new _e(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new _e(m,a),[0,0,.5],[Math.PI/2,0,0]],[new _e(_,a),[0,0,0],[Math.PI/2,0,0]],[new _e(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new _e(new Ht(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new _e(new Ht(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _e(new Ht(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new _e(new Ht(.1,.1,.1),h)]]},V={X:[[new _e(new sn(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new _e(new sn(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new _e(new sn(.2,0,.6,4),i),[0,.3,0]],[new _e(new sn(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new _e(new sn(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new _e(new sn(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new _e(new Ht(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new _e(new Ht(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _e(new Ht(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new _e(new Ht(.2,.2,.2),i),[0,0,0]]]},q={X:[[new on(d,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new on(d,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new on(d,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function j(J){const W=new Tt;for(const k in J)for(let H=J[k].length;H--;){const ce=J[k][H][0].clone(),pe=J[k][H][1],fe=J[k][H][2],ke=J[k][H][3],Le=J[k][H][4];ce.name=k,ce.tag=Le,pe&&ce.position.set(pe[0],pe[1],pe[2]),fe&&ce.rotation.set(fe[0],fe[1],fe[2]),ke&&ce.scale.set(ke[0],ke[1],ke[2]),ce.updateMatrix();const Qe=ce.geometry.clone();Qe.applyMatrix4(ce.matrix),ce.geometry=Qe,ce.renderOrder=1/0,ce.position.set(0,0,0),ce.rotation.set(0,0,0),ce.scale.set(1,1,1),W.add(ce)}return W}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=j(T)),this.add(this.gizmo.rotate=j(R)),this.add(this.gizmo.scale=j(L)),this.add(this.picker.translate=j(C)),this.add(this.picker.rotate=j(M)),this.add(this.picker.scale=j(V)),this.add(this.helper.translate=j(D)),this.add(this.helper.rotate=j(S)),this.add(this.helper.scale=j(q)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:fl;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Ut.setFromEuler(Ja.set(0,0,0)),o.quaternion.copy(i).multiply(Ut),Math.abs(Ct.copy(Co).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Ut.setFromEuler(Ja.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(Ut),Math.abs(Ct.copy(Xr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Ut.setFromEuler(Ja.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(Ut),Math.abs(Ct.copy(Po).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Ut.setFromEuler(Ja.set(0,Math.PI/2,0)),Ct.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(hm.lookAt(um,Ct,Xr)),o.quaternion.multiply(Ut),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),dn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),dn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(dn),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Ct.copy(Co).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Ct.copy(Xr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Ct.copy(Po).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Ct.copy(Po).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Ct.copy(Co).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Ct.copy(Xr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&($a.copy(i),Ct.copy(this.eye).applyQuaternion(Ut.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(hm.lookAt(this.eye,um,Xr)),o.name==="X"&&(Ut.setFromAxisAngle(Co,Math.atan2(-Ct.y,Ct.z)),Ut.multiplyQuaternions($a,Ut),o.quaternion.copy(Ut)),o.name==="Y"&&(Ut.setFromAxisAngle(Xr,Math.atan2(Ct.x,Ct.z)),Ut.multiplyQuaternions($a,Ut),o.quaternion.copy(Ut)),o.name==="Z"&&(Ut.setFromAxisAngle(Po,Math.atan2(Ct.y,Ct.x)),Ut.multiplyQuaternions($a,Ut),o.quaternion.copy(Ut))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}}class BA extends _e{constructor(){super(new ca(1e5,1e5,2,2),new Rr({visible:!1,wireframe:!0,side:Tn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let n=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(n="local"),Ka.copy(Co).applyQuaternion(n==="local"?this.worldQuaternion:fl),bo.copy(Xr).applyQuaternion(n==="local"?this.worldQuaternion:fl),So.copy(Po).applyQuaternion(n==="local"?this.worldQuaternion:fl),Ct.copy(bo),this.mode){case"translate":case"scale":switch(this.axis){case"X":Ct.copy(this.eye).cross(Ka),mi.copy(Ka).cross(Ct);break;case"Y":Ct.copy(this.eye).cross(bo),mi.copy(bo).cross(Ct);break;case"Z":Ct.copy(this.eye).cross(So),mi.copy(So).cross(Ct);break;case"XY":mi.copy(So);break;case"YZ":mi.copy(Ka);break;case"XZ":Ct.copy(So),mi.copy(bo);break;case"XYZ":case"E":mi.set(0,0,0);break}break;default:mi.set(0,0,0)}mi.length()===0?this.quaternion.copy(this.cameraQuaternion):(fm.lookAt(dn.set(0,0,0),mi,Ct),this.quaternion.setFromRotationMatrix(fm)),super.updateMatrixWorld(e)}}const ir={},Qs={};function dm(t){let e;switch(t.type.value){case"standard_material":e=zA(t);break;case"line_material":e=VA(t);break;case"point_material":e=HA(t);break;case"physical_material":e=GA(t);break}Qs[t.guid.value]=e,ir[t.geometry_guid.value]=t.guid.value,qA(t.geometry_guid.value,e)}function zA(t){let e=t.color.value;e=e.replace("#","0x");let n=t.emissive.value;return n=n.replace("#","0x"),new io({color:parseInt(e),metalness:t.metalness.value,roughness:t.roughness.value,emissive:parseInt(n),emissiveIntensity:t.emissive_intensity.value,flatShading:t.flat_shading.value,wireframe:t.wireframe.value,side:Tn})}function VA(t){let e=t.color.value;return e=e.replace("#","0x"),new ui({color:parseInt(e)})}function HA(t){let e=t.color.value;return e=e.replace("#","0x"),new of({color:parseInt(e),size:t.size.value})}function GA(t){let e=t.color.value;e=e.replace("#","0x");let n=t.emissive.value;n=n.replace("#","0x");let i=t.attenuation_color.value;i=i.replace("#","0x");let r=t.sheen_color.value;r=r.replace("#","0x");let s=t.specular_color.value;return s=s.replace("#","0x"),new nM({color:parseInt(e),metalness:t.metalness.value,roughness:t.roughness.value,emissive:parseInt(n),emissiveIntensity:t.emissive_intensity.value,flatShading:t.flat_shading.value,wireframe:t.wireframe.value,side:Tn,anisotropy:t.anisotropy.value,anisotropyRotation:t.anisotropy_rotation.value,attenuationColor:parseInt(i),attenuationDistance:t.attenuation_distance.value,clearcoat:t.clearcoat.value,clearcoatRoughness:t.clearcoat_roughness.value,dispersion:t.dispersion.value,ior:t.ior.value,iridescence:t.iridescence.value,iridescenceIOR:t.iridescence_ior.value,iridescenceThicknessRange:[t.iridescence_thickness_start.value,t.iridescence_thickness_end.value],reflectivity:t.reflectivity.value,sheen:t.sheen.value,sheenColor:parseInt(r),specularColor:parseInt(s),sheenRoughness:t.sheen_roughness.value,specularIntensity:t.specular_intensity.value,thickness:t.thickness.value,transmission:t.transmission.value})}const qn={},WA=["Line","Point","Vector","Frame","Plane","Polyline"];function S_(t){console.log(t.name),WA.includes(t.name)&&XA(t);const e=t.guid,n=qn[e],i=t.buildGeometry();if(!i||!(i instanceof _e))return;const r=i.geometry;if(r.computeBoundingSphere(),r.computeBoundingBox(),n instanceof _e){const s=n.geometry;n.geometry=r,n.position.copy(i.position),n.quaternion.copy(i.quaternion),n.scale.copy(i.scale),s&&s.dispose()}else{if(ir[e]){const s=ir[e];Qs[s]&&(i.material=Qs[s])}else i.material=new io({color:35071,roughness:.5,metalness:.5});Ot.add(i),qn[e]=i}}function XA(t){const e=t.buildGeometry(),n=t.guid;let i;if(ir[n]){const r=ir[n];Qs[r]&&(i=Qs[r])}else return;e instanceof on||e instanceof af?e.material=i:(e instanceof _f||e instanceof void 0)&&e.setColor(i.color),Ot.add(e),qn[n]=e}function qA(t,e){const n=qn[t];if(n){if(n){n.material=e;return}(n instanceof _f||n instanceof void 0)&&n.setColor(e.color)}}function YA(){let t=0,e=0;for(let i=0;i<28;i+=7){let r=this.buf[this.pos++];if(t|=(r&127)<<i,(r&128)==0)return this.assertBounds(),[t,e]}let n=this.buf[this.pos++];if(t|=(n&15)<<28,e=(n&112)>>4,(n&128)==0)return this.assertBounds(),[t,e];for(let i=3;i<=31;i+=7){let r=this.buf[this.pos++];if(e|=(r&127)<<i,(r&128)==0)return this.assertBounds(),[t,e]}throw new Error("invalid varint")}function Qc(t,e,n){for(let s=0;s<28;s=s+7){const o=t>>>s,a=!(!(o>>>7)&&e==0),l=(a?o|128:o)&255;if(n.push(l),!a)return}const i=t>>>28&15|(e&7)<<4,r=e>>3!=0;if(n.push((r?i|128:i)&255),!!r){for(let s=3;s<31;s=s+7){const o=e>>>s,a=!!(o>>>7),l=(a?o|128:o)&255;if(n.push(l),!a)return}n.push(e>>>31&1)}}const dl=4294967296;function pm(t){const e=t[0]==="-";e&&(t=t.slice(1));const n=1e6;let i=0,r=0;function s(o,a){const l=Number(t.slice(o,a));r*=n,i=i*n+l,i>=dl&&(r=r+(i/dl|0),i=i%dl)}return s(-24,-18),s(-18,-12),s(-12,-6),s(-6),e?w_(i,r):xf(i,r)}function JA(t,e){let n=xf(t,e);const i=n.hi&2147483648;i&&(n=w_(n.lo,n.hi));const r=M_(n.lo,n.hi);return i?"-"+r:r}function M_(t,e){if({lo:t,hi:e}=$A(t,e),e<=2097151)return String(dl*e+t);const n=t&16777215,i=(t>>>24|e<<8)&16777215,r=e>>16&65535;let s=n+i*6777216+r*6710656,o=i+r*8147497,a=r*2;const l=1e7;return s>=l&&(o+=Math.floor(s/l),s%=l),o>=l&&(a+=Math.floor(o/l),o%=l),a.toString()+mm(o)+mm(s)}function $A(t,e){return{lo:t>>>0,hi:e>>>0}}function xf(t,e){return{lo:t|0,hi:e|0}}function w_(t,e){return e=~e,t?t=~t+1:e+=1,xf(t,e)}const mm=t=>{const e=String(t);return"0000000".slice(e.length)+e};function gm(t,e){if(t>=0){for(;t>127;)e.push(t&127|128),t=t>>>7;e.push(t)}else{for(let n=0;n<9;n++)e.push(t&127|128),t=t>>7;e.push(1)}}function KA(){let t=this.buf[this.pos++],e=t&127;if((t&128)==0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<7,(t&128)==0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<14,(t&128)==0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<21,(t&128)==0)return this.assertBounds(),e;t=this.buf[this.pos++],e|=(t&15)<<28;for(let n=5;(t&128)!==0&&n<10;n++)t=this.buf[this.pos++];if((t&128)!=0)throw new Error("invalid varint");return this.assertBounds(),e>>>0}var _m={};const yi=ZA();function ZA(){const t=new DataView(new ArrayBuffer(8));if(typeof BigInt=="function"&&typeof t.getBigInt64=="function"&&typeof t.getBigUint64=="function"&&typeof t.setBigInt64=="function"&&typeof t.setBigUint64=="function"&&(!!globalThis.Deno||typeof process!="object"||typeof _m!="object"||_m.BUF_BIGINT_DISABLE!=="1")){const n=BigInt("-9223372036854775808"),i=BigInt("9223372036854775807"),r=BigInt("0"),s=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(o){const a=typeof o=="bigint"?o:BigInt(o);if(a>i||a<n)throw new Error(`invalid int64: ${o}`);return a},uParse(o){const a=typeof o=="bigint"?o:BigInt(o);if(a>s||a<r)throw new Error(`invalid uint64: ${o}`);return a},enc(o){return t.setBigInt64(0,this.parse(o),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},uEnc(o){return t.setBigInt64(0,this.uParse(o),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},dec(o,a){return t.setInt32(0,o,!0),t.setInt32(4,a,!0),t.getBigInt64(0,!0)},uDec(o,a){return t.setInt32(0,o,!0),t.setInt32(4,a,!0),t.getBigUint64(0,!0)}}}return{zero:"0",supported:!1,parse(n){return typeof n!="string"&&(n=n.toString()),vm(n),n},uParse(n){return typeof n!="string"&&(n=n.toString()),xm(n),n},enc(n){return typeof n!="string"&&(n=n.toString()),vm(n),pm(n)},uEnc(n){return typeof n!="string"&&(n=n.toString()),xm(n),pm(n)},dec(n,i){return JA(n,i)},uDec(n,i){return M_(n,i)}}}function vm(t){if(!/^-?[0-9]+$/.test(t))throw new Error("invalid int64: "+t)}function xm(t){if(!/^[0-9]+$/.test(t))throw new Error("invalid uint64: "+t)}const jc=Symbol.for("@bufbuild/protobuf/text-encoding");function E_(){if(globalThis[jc]==null){const t=new globalThis.TextEncoder,e=new globalThis.TextDecoder;globalThis[jc]={encodeUtf8(n){return t.encode(n)},decodeUtf8(n){return e.decode(n)},checkUtf8(n){try{return encodeURIComponent(n),!0}catch{return!1}}}}return globalThis[jc]}var mr;(function(t){t[t.Varint=0]="Varint",t[t.Bit64=1]="Bit64",t[t.LengthDelimited=2]="LengthDelimited",t[t.StartGroup=3]="StartGroup",t[t.EndGroup=4]="EndGroup",t[t.Bit32=5]="Bit32"})(mr||(mr={}));const QA=34028234663852886e22,jA=-34028234663852886e22,eC=4294967295,tC=2147483647,nC=-2147483648;class it{constructor(e=E_().encodeUtf8){this.encodeUtf8=e,this.stack=[],this.chunks=[],this.buf=[]}finish(){this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]);let e=0;for(let r=0;r<this.chunks.length;r++)e+=this.chunks[r].length;let n=new Uint8Array(e),i=0;for(let r=0;r<this.chunks.length;r++)n.set(this.chunks[r],i),i+=this.chunks[r].length;return this.chunks=[],n}fork(){return this.stack.push({chunks:this.chunks,buf:this.buf}),this.chunks=[],this.buf=[],this}join(){let e=this.finish(),n=this.stack.pop();if(!n)throw new Error("invalid state, fork stack empty");return this.chunks=n.chunks,this.buf=n.buf,this.uint32(e.byteLength),this.raw(e)}tag(e,n){return this.uint32((e<<3|n)>>>0)}raw(e){return this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]),this.chunks.push(e),this}uint32(e){for(ym(e);e>127;)this.buf.push(e&127|128),e=e>>>7;return this.buf.push(e),this}int32(e){return eu(e),gm(e,this.buf),this}bool(e){return this.buf.push(e?1:0),this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){let n=this.encodeUtf8(e);return this.uint32(n.byteLength),this.raw(n)}float(e){iC(e);let n=new Uint8Array(4);return new DataView(n.buffer).setFloat32(0,e,!0),this.raw(n)}double(e){let n=new Uint8Array(8);return new DataView(n.buffer).setFloat64(0,e,!0),this.raw(n)}fixed32(e){ym(e);let n=new Uint8Array(4);return new DataView(n.buffer).setUint32(0,e,!0),this.raw(n)}sfixed32(e){eu(e);let n=new Uint8Array(4);return new DataView(n.buffer).setInt32(0,e,!0),this.raw(n)}sint32(e){return eu(e),e=(e<<1^e>>31)>>>0,gm(e,this.buf),this}sfixed64(e){let n=new Uint8Array(8),i=new DataView(n.buffer),r=yi.enc(e);return i.setInt32(0,r.lo,!0),i.setInt32(4,r.hi,!0),this.raw(n)}fixed64(e){let n=new Uint8Array(8),i=new DataView(n.buffer),r=yi.uEnc(e);return i.setInt32(0,r.lo,!0),i.setInt32(4,r.hi,!0),this.raw(n)}int64(e){let n=yi.enc(e);return Qc(n.lo,n.hi,this.buf),this}sint64(e){const n=yi.enc(e),i=n.hi>>31,r=n.lo<<1^i,s=(n.hi<<1|n.lo>>>31)^i;return Qc(r,s,this.buf),this}uint64(e){const n=yi.uEnc(e);return Qc(n.lo,n.hi,this.buf),this}}class xe{constructor(e,n=E_().decodeUtf8){this.decodeUtf8=n,this.varint64=YA,this.uint32=KA,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength)}tag(){let e=this.uint32(),n=e>>>3,i=e&7;if(n<=0||i<0||i>5)throw new Error("illegal tag: field no "+n+" wire type "+i);return[n,i]}skip(e,n){let i=this.pos;switch(e){case mr.Varint:for(;this.buf[this.pos++]&128;);break;case mr.Bit64:this.pos+=4;case mr.Bit32:this.pos+=4;break;case mr.LengthDelimited:let r=this.uint32();this.pos+=r;break;case mr.StartGroup:for(;;){const[s,o]=this.tag();if(o===mr.EndGroup){if(n!==void 0&&s!==n)throw new Error("invalid end group tag");break}this.skip(o,s)}break;default:throw new Error("cant skip wire type "+e)}return this.assertBounds(),this.buf.subarray(i,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let e=this.uint32();return e>>>1^-(e&1)}int64(){return yi.dec(...this.varint64())}uint64(){return yi.uDec(...this.varint64())}sint64(){let[e,n]=this.varint64(),i=-(e&1);return e=(e>>>1|(n&1)<<31)^i,n=n>>>1^i,yi.dec(e,n)}bool(){let[e,n]=this.varint64();return e!==0||n!==0}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return yi.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return yi.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let e=this.uint32(),n=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(n,n+e)}string(){return this.decodeUtf8(this.bytes())}}function eu(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid int32: "+typeof t);if(!Number.isInteger(t)||t>tC||t<nC)throw new Error("invalid int32: "+t)}function ym(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid uint32: "+typeof t);if(!Number.isInteger(t)||t>eC||t<0)throw new Error("invalid uint32: "+t)}function iC(t){if(typeof t=="string"){const e=t;if(t=Number(t),Number.isNaN(t)&&e!=="NaN")throw new Error("invalid float32: "+e)}else if(typeof t!="number")throw new Error("invalid float32: "+typeof t);if(Number.isFinite(t)&&(t>QA||t<jA))throw new Error("invalid float32: "+t)}function bm(){return{typeUrl:"",value:new Uint8Array(0)}}const Ps={encode(t,e=new it){return t.typeUrl!==""&&e.uint32(10).string(t.typeUrl),t.value.length!==0&&e.uint32(18).bytes(t.value),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=bm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.typeUrl=n.string();continue}case 2:{if(s!==18)break;r.value=n.bytes();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{typeUrl:tu(t.typeUrl)?globalThis.String(t.typeUrl):tu(t.type_url)?globalThis.String(t.type_url):"",value:tu(t.value)?rC(t.value):new Uint8Array(0)}},toJSON(t){const e={};return t.typeUrl!==""&&(e.typeUrl=t.typeUrl),t.value.length!==0&&(e.value=sC(t.value)),e},create(t){return Ps.fromPartial(t??{})},fromPartial(t){const e=bm();return e.typeUrl=t.typeUrl??"",e.value=t.value??new Uint8Array(0),e}};function rC(t){if(globalThis.Buffer)return Uint8Array.from(globalThis.Buffer.from(t,"base64"));{const e=globalThis.atob(t),n=new Uint8Array(e.length);for(let i=0;i<e.length;++i)n[i]=e.charCodeAt(i);return n}}function sC(t){if(globalThis.Buffer)return globalThis.Buffer.from(t).toString("base64");{const e=[];return t.forEach(n=>{e.push(globalThis.String.fromCharCode(n))}),globalThis.btoa(e.join(""))}}function tu(t){return t!=null}function Sm(t){switch(t){case 0:case"NULL_VALUE":return 0;default:return-1}}function oC(t){return t===0?"NULL_VALUE":"UNRECOGNIZED"}function nu(){return{fields:{}}}const Ro={encode(t,e=new it){return globalThis.Object.entries(t.fields).forEach(([n,i])=>{i!==void 0&&_h.encode({key:n,value:i},e.uint32(10).fork()).join()}),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=nu();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;const o=_h.decode(n,n.uint32());o.value!==void 0&&(r.fields[o.key]=o.value);continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{fields:vh(t.fields)?globalThis.Object.entries(t.fields).reduce((e,[n,i])=>(e[n]=i,e),{}):{}}},toJSON(t){const e={};if(t.fields){const n=globalThis.Object.entries(t.fields);n.length>0&&(e.fields={},n.forEach(([i,r])=>{e.fields[i]=r}))}return e},create(t){return Ro.fromPartial(t??{})},fromPartial(t){const e=nu();return e.fields=globalThis.Object.entries(t.fields??{}).reduce((n,[i,r])=>(r!==void 0&&(n[i]=r),n),{}),e},wrap(t){const e=nu();if(t!==void 0)for(const n of globalThis.Object.keys(t))e.fields[n]=t[n];return e},unwrap(t){const e={};if(t.fields)for(const n of globalThis.Object.keys(t.fields))e[n]=t.fields[n];return e}};function Mm(){return{key:"",value:void 0}}const _h={encode(t,e=new it){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&Yn.encode(Yn.wrap(t.value),e.uint32(18).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Mm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.key=n.string();continue}case 2:{if(s!==18)break;r.value=Yn.unwrap(Yn.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{key:_i(t.key)?globalThis.String(t.key):"",value:_i(t?.value)?t.value:void 0}},toJSON(t){const e={};return t.key!==""&&(e.key=t.key),t.value!==void 0&&(e.value=t.value),e},create(t){return _h.fromPartial(t??{})},fromPartial(t){const e=Mm();return e.key=t.key??"",e.value=t.value??void 0,e}};function iu(){return{nullValue:void 0,numberValue:void 0,stringValue:void 0,boolValue:void 0,structValue:void 0,listValue:void 0}}const Yn={encode(t,e=new it){return t.nullValue!==void 0&&e.uint32(8).int32(t.nullValue),t.numberValue!==void 0&&e.uint32(17).double(t.numberValue),t.stringValue!==void 0&&e.uint32(26).string(t.stringValue),t.boolValue!==void 0&&e.uint32(32).bool(t.boolValue),t.structValue!==void 0&&Ro.encode(Ro.wrap(t.structValue),e.uint32(42).fork()).join(),t.listValue!==void 0&&Do.encode(Do.wrap(t.listValue),e.uint32(50).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=iu();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==8)break;r.nullValue=n.int32();continue}case 2:{if(s!==17)break;r.numberValue=n.double();continue}case 3:{if(s!==26)break;r.stringValue=n.string();continue}case 4:{if(s!==32)break;r.boolValue=n.bool();continue}case 5:{if(s!==42)break;r.structValue=Ro.unwrap(Ro.decode(n,n.uint32()));continue}case 6:{if(s!==50)break;r.listValue=Do.unwrap(Do.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{nullValue:_i(t.nullValue)?Sm(t.nullValue):_i(t.null_value)?Sm(t.null_value):void 0,numberValue:_i(t.numberValue)?globalThis.Number(t.numberValue):_i(t.number_value)?globalThis.Number(t.number_value):void 0,stringValue:_i(t.stringValue)?globalThis.String(t.stringValue):_i(t.string_value)?globalThis.String(t.string_value):void 0,boolValue:_i(t.boolValue)?globalThis.Boolean(t.boolValue):_i(t.bool_value)?globalThis.Boolean(t.bool_value):void 0,structValue:vh(t.structValue)?t.structValue:vh(t.struct_value)?t.struct_value:void 0,listValue:globalThis.Array.isArray(t.listValue)?[...t.listValue]:globalThis.Array.isArray(t.list_value)?[...t.list_value]:void 0}},toJSON(t){const e={};return t.nullValue!==void 0&&(e.nullValue=oC(t.nullValue)),t.numberValue!==void 0&&(e.numberValue=t.numberValue),t.stringValue!==void 0&&(e.stringValue=t.stringValue),t.boolValue!==void 0&&(e.boolValue=t.boolValue),t.structValue!==void 0&&(e.structValue=t.structValue),t.listValue!==void 0&&(e.listValue=t.listValue),e},create(t){return Yn.fromPartial(t??{})},fromPartial(t){const e=iu();return e.nullValue=t.nullValue??void 0,e.numberValue=t.numberValue??void 0,e.stringValue=t.stringValue??void 0,e.boolValue=t.boolValue??void 0,e.structValue=t.structValue??void 0,e.listValue=t.listValue??void 0,e},wrap(t){const e=iu();if(t===null)e.nullValue=0;else if(typeof t=="boolean")e.boolValue=t;else if(typeof t=="number")e.numberValue=t;else if(typeof t=="string")e.stringValue=t;else if(globalThis.Array.isArray(t))e.listValue=t;else if(typeof t=="object")e.structValue=t;else if(typeof t<"u")throw new globalThis.Error("Unsupported any value type: "+typeof t);return e},unwrap(t){if(t.stringValue!==void 0)return t.stringValue;if(t?.numberValue!==void 0)return t.numberValue;if(t?.boolValue!==void 0)return t.boolValue;if(t?.structValue!==void 0)return t.structValue;if(t?.listValue!==void 0)return t.listValue;if(t?.nullValue!==void 0)return null}};function ru(){return{values:[]}}const Do={encode(t,e=new it){for(const n of t.values)Yn.encode(Yn.wrap(n),e.uint32(10).fork()).join();return e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=ru();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.values.push(Yn.unwrap(Yn.decode(n,n.uint32())));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{values:globalThis.Array.isArray(t?.values)?[...t.values]:[]}},toJSON(t){const e={};return t.values?.length&&(e.values=t.values),e},create(t){return Do.fromPartial(t??{})},fromPartial(t){const e=ru();return e.values=t.values?.map(n=>n)||[],e},wrap(t){const e=ru();return e.values=t??[],e},unwrap(t){return t?.hasOwnProperty("values")&&globalThis.Array.isArray(t.values)?t.values:t}};function vh(t){return typeof t=="object"&&t!==null}function _i(t){return t!=null}function wm(){return{message:void 0,value:void 0,fallback:void 0}}const Un={encode(t,e=new it){return t.message!==void 0&&Ps.encode(t.message,e.uint32(10).fork()).join(),t.value!==void 0&&Yn.encode(Yn.wrap(t.value),e.uint32(18).fork()).join(),t.fallback!==void 0&&Rs.encode(t.fallback,e.uint32(26).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=wm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.message=Ps.decode(n,n.uint32());continue}case 2:{if(s!==18)break;r.value=Yn.unwrap(Yn.decode(n,n.uint32()));continue}case 3:{if(s!==26)break;r.fallback=Rs.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{message:Ar(t.message)?Ps.fromJSON(t.message):void 0,value:Ar(t?.value)?t.value:void 0,fallback:Ar(t.fallback)?Rs.fromJSON(t.fallback):void 0}},toJSON(t){const e={};return t.message!==void 0&&(e.message=Ps.toJSON(t.message)),t.value!==void 0&&(e.value=t.value),t.fallback!==void 0&&(e.fallback=Rs.toJSON(t.fallback)),e},create(t){return Un.fromPartial(t??{})},fromPartial(t){const e=wm();return e.message=t.message!==void 0&&t.message!==null?Ps.fromPartial(t.message):void 0,e.value=t.value??void 0,e.fallback=t.fallback!==void 0&&t.fallback!==null?Rs.fromPartial(t.fallback):void 0,e}};function Em(){return{data:void 0}}const Rs={encode(t,e=new it){return t.data!==void 0&&vr.encode(t.data,e.uint32(10).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Em();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.data=vr.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{data:Ar(t.data)?vr.fromJSON(t.data):void 0}},toJSON(t){const e={};return t.data!==void 0&&(e.data=vr.toJSON(t.data)),e},create(t){return Rs.fromPartial(t??{})},fromPartial(t){const e=Em();return e.data=t.data!==void 0&&t.data!==null?vr.fromPartial(t.data):void 0,e}};function Tm(){return{items:{}}}const vr={encode(t,e=new it){return globalThis.Object.entries(t.items).forEach(([n,i])=>{xh.encode({key:n,value:i},e.uint32(10).fork()).join()}),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Tm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;const o=xh.decode(n,n.uint32());o.value!==void 0&&(r.items[o.key]=o.value);continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{items:aC(t.items)?globalThis.Object.entries(t.items).reduce((e,[n,i])=>(e[n]=Un.fromJSON(i),e),{}):{}}},toJSON(t){const e={};if(t.items){const n=globalThis.Object.entries(t.items);n.length>0&&(e.items={},n.forEach(([i,r])=>{e.items[i]=Un.toJSON(r)}))}return e},create(t){return vr.fromPartial(t??{})},fromPartial(t){const e=Tm();return e.items=globalThis.Object.entries(t.items??{}).reduce((n,[i,r])=>(r!==void 0&&(n[i]=Un.fromPartial(r)),n),{}),e}};function Am(){return{key:"",value:void 0}}const xh={encode(t,e=new it){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&Un.encode(t.value,e.uint32(18).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Am();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.key=n.string();continue}case 2:{if(s!==18)break;r.value=Un.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{key:Ar(t.key)?globalThis.String(t.key):"",value:Ar(t.value)?Un.fromJSON(t.value):void 0}},toJSON(t){const e={};return t.key!==""&&(e.key=t.key),t.value!==void 0&&(e.value=Un.toJSON(t.value)),e},create(t){return xh.fromPartial(t??{})},fromPartial(t){const e=Am();return e.key=t.key??"",e.value=t.value!==void 0&&t.value!==null?Un.fromPartial(t.value):void 0,e}};function Cm(){return{data:void 0,version:void 0}}const T_={encode(t,e=new it){return t.data!==void 0&&Un.encode(t.data,e.uint32(10).fork()).join(),t.version!==void 0&&e.uint32(18).string(t.version),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Cm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.data=Un.decode(n,n.uint32());continue}case 2:{if(s!==18)break;r.version=n.string();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{data:Ar(t.data)?Un.fromJSON(t.data):void 0,version:Ar(t.version)?globalThis.String(t.version):void 0}},toJSON(t){const e={};return t.data!==void 0&&(e.data=Un.toJSON(t.data)),t.version!==void 0&&(e.version=t.version),e},create(t){return T_.fromPartial(t??{})},fromPartial(t){const e=Cm();return e.data=t.data!==void 0&&t.data!==null?Un.fromPartial(t.data):void 0,e.version=t.version??void 0,e}};function aC(t){return typeof t=="object"&&t!==null}function Ar(t){return t!=null}function Pm(){return{guid:"",name:"",x:0,y:0,z:0}}const He={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.x!==0&&e.uint32(29).float(t.x),t.y!==0&&e.uint32(37).float(t.y),t.z!==0&&e.uint32(45).float(t.z),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Pm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.x=n.float();continue}case 4:{if(s!==37)break;r.y=n.float();continue}case 5:{if(s!==45)break;r.z=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",x:ae(t.x)?globalThis.Number(t.x):0,y:ae(t.y)?globalThis.Number(t.y):0,z:ae(t.z)?globalThis.Number(t.z):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.x!==0&&(e.x=t.x),t.y!==0&&(e.y=t.y),t.z!==0&&(e.z=t.z),e},create(t){return He.fromPartial(t??{})},fromPartial(t){const e=Pm();return e.guid=t.guid??"",e.name=t.name??"",e.x=t.x??0,e.y=t.y??0,e.z=t.z??0,e}};function Rm(){return{guid:"",name:"",x:0,y:0,z:0}}const Mt={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.x!==0&&e.uint32(29).float(t.x),t.y!==0&&e.uint32(37).float(t.y),t.z!==0&&e.uint32(45).float(t.z),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Rm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.x=n.float();continue}case 4:{if(s!==37)break;r.y=n.float();continue}case 5:{if(s!==45)break;r.z=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",x:ae(t.x)?globalThis.Number(t.x):0,y:ae(t.y)?globalThis.Number(t.y):0,z:ae(t.z)?globalThis.Number(t.z):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.x!==0&&(e.x=t.x),t.y!==0&&(e.y=t.y),t.z!==0&&(e.z=t.z),e},create(t){return Mt.fromPartial(t??{})},fromPartial(t){const e=Rm();return e.guid=t.guid??"",e.name=t.name??"",e.x=t.x??0,e.y=t.y??0,e.z=t.z??0,e}};function Dm(){return{guid:"",name:"",point:void 0,xaxis:void 0,yaxis:void 0}}const We={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.point!==void 0&&He.encode(t.point,e.uint32(26).fork()).join(),t.xaxis!==void 0&&Mt.encode(t.xaxis,e.uint32(34).fork()).join(),t.yaxis!==void 0&&Mt.encode(t.yaxis,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Dm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.point=He.decode(n,n.uint32());continue}case 4:{if(s!==34)break;r.xaxis=Mt.decode(n,n.uint32());continue}case 5:{if(s!==42)break;r.yaxis=Mt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",point:ae(t.point)?He.fromJSON(t.point):void 0,xaxis:ae(t.xaxis)?Mt.fromJSON(t.xaxis):void 0,yaxis:ae(t.yaxis)?Mt.fromJSON(t.yaxis):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.point!==void 0&&(e.point=He.toJSON(t.point)),t.xaxis!==void 0&&(e.xaxis=Mt.toJSON(t.xaxis)),t.yaxis!==void 0&&(e.yaxis=Mt.toJSON(t.yaxis)),e},create(t){return We.fromPartial(t??{})},fromPartial(t){const e=Dm();return e.guid=t.guid??"",e.name=t.name??"",e.point=t.point!==void 0&&t.point!==null?He.fromPartial(t.point):void 0,e.xaxis=t.xaxis!==void 0&&t.xaxis!==null?Mt.fromPartial(t.xaxis):void 0,e.yaxis=t.yaxis!==void 0&&t.yaxis!==null?Mt.fromPartial(t.yaxis):void 0,e}};function Im(){return{guid:"",name:"",point:void 0,normal:void 0}}const yf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.point!==void 0&&He.encode(t.point,e.uint32(26).fork()).join(),t.normal!==void 0&&Mt.encode(t.normal,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Im();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.point=He.decode(n,n.uint32());continue}case 4:{if(s!==34)break;r.normal=Mt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",point:ae(t.point)?He.fromJSON(t.point):void 0,normal:ae(t.normal)?Mt.fromJSON(t.normal):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.point!==void 0&&(e.point=He.toJSON(t.point)),t.normal!==void 0&&(e.normal=Mt.toJSON(t.normal)),e},create(t){return yf.fromPartial(t??{})},fromPartial(t){const e=Im();return e.guid=t.guid??"",e.name=t.name??"",e.point=t.point!==void 0&&t.point!==null?He.fromPartial(t.point):void 0,e.normal=t.normal!==void 0&&t.normal!==null?Mt.fromPartial(t.normal):void 0,e}};function Lm(){return{guid:"",name:"",w:0,x:0,y:0,z:0}}const bf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.w!==0&&e.uint32(29).float(t.w),t.x!==0&&e.uint32(37).float(t.x),t.y!==0&&e.uint32(45).float(t.y),t.z!==0&&e.uint32(53).float(t.z),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Lm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.w=n.float();continue}case 4:{if(s!==37)break;r.x=n.float();continue}case 5:{if(s!==45)break;r.y=n.float();continue}case 6:{if(s!==53)break;r.z=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",w:ae(t.w)?globalThis.Number(t.w):0,x:ae(t.x)?globalThis.Number(t.x):0,y:ae(t.y)?globalThis.Number(t.y):0,z:ae(t.z)?globalThis.Number(t.z):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.w!==0&&(e.w=t.w),t.x!==0&&(e.x=t.x),t.y!==0&&(e.y=t.y),t.z!==0&&(e.z=t.z),e},create(t){return bf.fromPartial(t??{})},fromPartial(t){const e=Lm();return e.guid=t.guid??"",e.name=t.name??"",e.w=t.w??0,e.x=t.x??0,e.y=t.y??0,e.z=t.z??0,e}};function Nm(){return{guid:"",name:"",start:void 0,end:void 0}}const Sf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.start!==void 0&&He.encode(t.start,e.uint32(26).fork()).join(),t.end!==void 0&&He.encode(t.end,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Nm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.start=He.decode(n,n.uint32());continue}case 4:{if(s!==34)break;r.end=He.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",start:ae(t.start)?He.fromJSON(t.start):void 0,end:ae(t.end)?He.fromJSON(t.end):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.start!==void 0&&(e.start=He.toJSON(t.start)),t.end!==void 0&&(e.end=He.toJSON(t.end)),e},create(t){return Sf.fromPartial(t??{})},fromPartial(t){const e=Nm();return e.guid=t.guid??"",e.name=t.name??"",e.start=t.start!==void 0&&t.start!==null?He.fromPartial(t.start):void 0,e.end=t.end!==void 0&&t.end!==null?He.fromPartial(t.end):void 0,e}};function Um(){return{guid:"",name:"",radius:0,frame:void 0}}const xr={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.frame!==void 0&&We.encode(t.frame,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Um();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==34)break;r.frame=We.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",radius:ae(t.radius)?globalThis.Number(t.radius):0,frame:ae(t.frame)?We.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),e},create(t){return xr.fromPartial(t??{})},fromPartial(t){const e=Um();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e}};function Om(){return{guid:"",name:"",circle:void 0,startAngle:0,endAngle:0}}const Mf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.circle!==void 0&&xr.encode(t.circle,e.uint32(26).fork()).join(),t.startAngle!==0&&e.uint32(37).float(t.startAngle),t.endAngle!==0&&e.uint32(45).float(t.endAngle),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Om();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.circle=xr.decode(n,n.uint32());continue}case 4:{if(s!==37)break;r.startAngle=n.float();continue}case 5:{if(s!==45)break;r.endAngle=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",circle:ae(t.circle)?xr.fromJSON(t.circle):void 0,startAngle:ae(t.startAngle)?globalThis.Number(t.startAngle):ae(t.start_angle)?globalThis.Number(t.start_angle):0,endAngle:ae(t.endAngle)?globalThis.Number(t.endAngle):ae(t.end_angle)?globalThis.Number(t.end_angle):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.circle!==void 0&&(e.circle=xr.toJSON(t.circle)),t.startAngle!==0&&(e.startAngle=t.startAngle),t.endAngle!==0&&(e.endAngle=t.endAngle),e},create(t){return Mf.fromPartial(t??{})},fromPartial(t){const e=Om();return e.guid=t.guid??"",e.name=t.name??"",e.circle=t.circle!==void 0&&t.circle!==null?xr.fromPartial(t.circle):void 0,e.startAngle=t.startAngle??0,e.endAngle=t.endAngle??0,e}};function Fm(){return{guid:"",name:"",major:0,minor:0,frame:void 0}}const wf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.major!==0&&e.uint32(29).float(t.major),t.minor!==0&&e.uint32(37).float(t.minor),t.frame!==void 0&&We.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Fm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.major=n.float();continue}case 4:{if(s!==37)break;r.minor=n.float();continue}case 5:{if(s!==42)break;r.frame=We.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",major:ae(t.major)?globalThis.Number(t.major):0,minor:ae(t.minor)?globalThis.Number(t.minor):0,frame:ae(t.frame)?We.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.major!==0&&(e.major=t.major),t.minor!==0&&(e.minor=t.minor),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),e},create(t){return wf.fromPartial(t??{})},fromPartial(t){const e=Fm();return e.guid=t.guid??"",e.name=t.name??"",e.major=t.major??0,e.minor=t.minor??0,e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e}};function km(){return{guid:"",name:"",focal:0,frame:void 0}}const Ef={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.focal!==0&&e.uint32(29).float(t.focal),t.frame!==void 0&&We.encode(t.frame,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=km();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.focal=n.float();continue}case 4:{if(s!==34)break;r.frame=We.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",focal:ae(t.focal)?globalThis.Number(t.focal):0,frame:ae(t.frame)?We.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.focal!==0&&(e.focal=t.focal),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),e},create(t){return Ef.fromPartial(t??{})},fromPartial(t){const e=km();return e.guid=t.guid??"",e.name=t.name??"",e.focal=t.focal??0,e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e}};function Bm(){return{guid:"",name:"",major:0,minor:0,frame:void 0}}const Tf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.major!==0&&e.uint32(29).float(t.major),t.minor!==0&&e.uint32(37).float(t.minor),t.frame!==void 0&&We.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Bm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.major=n.float();continue}case 4:{if(s!==37)break;r.minor=n.float();continue}case 5:{if(s!==42)break;r.frame=We.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",major:ae(t.major)?globalThis.Number(t.major):0,minor:ae(t.minor)?globalThis.Number(t.minor):0,frame:ae(t.frame)?We.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.major!==0&&(e.major=t.major),t.minor!==0&&(e.minor=t.minor),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),e},create(t){return Tf.fromPartial(t??{})},fromPartial(t){const e=Bm();return e.guid=t.guid??"",e.name=t.name??"",e.major=t.major??0,e.minor=t.minor??0,e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e}};function zm(){return{guid:"",name:"",points:[],degree:0}}const Af={encode(t,e=new it){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name);for(const n of t.points)He.encode(n,e.uint32(26).fork()).join();return t.degree!==0&&e.uint32(32).int32(t.degree),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=zm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(He.decode(n,n.uint32()));continue}case 4:{if(s!==32)break;r.degree=n.int32();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",points:globalThis.Array.isArray(t?.points)?t.points.map(e=>He.fromJSON(e)):[],degree:ae(t.degree)?globalThis.Number(t.degree):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.points?.length&&(e.points=t.points.map(n=>He.toJSON(n))),t.degree!==0&&(e.degree=Math.round(t.degree)),e},create(t){return Af.fromPartial(t??{})},fromPartial(t){const e=zm();return e.guid=t.guid??"",e.name=t.name??"",e.points=t.points?.map(n=>He.fromPartial(n))||[],e.degree=t.degree??0,e}};function Vm(){return{guid:"",name:"",points:[]}}const Cf={encode(t,e=new it){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name);for(const n of t.points)He.encode(n,e.uint32(26).fork()).join();return e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Vm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(He.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",points:globalThis.Array.isArray(t?.points)?t.points.map(e=>He.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.points?.length&&(e.points=t.points.map(n=>He.toJSON(n))),e},create(t){return Cf.fromPartial(t??{})},fromPartial(t){const e=Vm();return e.guid=t.guid??"",e.name=t.name??"",e.points=t.points?.map(n=>He.fromPartial(n))||[],e}};function Hm(){return{guid:"",name:"",points:[]}}const Pf={encode(t,e=new it){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name);for(const n of t.points)He.encode(n,e.uint32(26).fork()).join();return e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Hm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(He.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",points:globalThis.Array.isArray(t?.points)?t.points.map(e=>He.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.points?.length&&(e.points=t.points.map(n=>He.toJSON(n))),e},create(t){return Pf.fromPartial(t??{})},fromPartial(t){const e=Hm();return e.guid=t.guid??"",e.name=t.name??"",e.points=t.points?.map(n=>He.fromPartial(n))||[],e}};function Gm(){return{guid:"",name:"",frame:void 0,xsize:0,ysize:0,zsize:0}}const Rf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.frame!==void 0&&We.encode(t.frame,e.uint32(26).fork()).join(),t.xsize!==0&&e.uint32(37).float(t.xsize),t.ysize!==0&&e.uint32(45).float(t.ysize),t.zsize!==0&&e.uint32(53).float(t.zsize),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Gm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.frame=We.decode(n,n.uint32());continue}case 4:{if(s!==37)break;r.xsize=n.float();continue}case 5:{if(s!==45)break;r.ysize=n.float();continue}case 6:{if(s!==53)break;r.zsize=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",frame:ae(t.frame)?We.fromJSON(t.frame):void 0,xsize:ae(t.xsize)?globalThis.Number(t.xsize):0,ysize:ae(t.ysize)?globalThis.Number(t.ysize):0,zsize:ae(t.zsize)?globalThis.Number(t.zsize):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),t.xsize!==0&&(e.xsize=t.xsize),t.ysize!==0&&(e.ysize=t.ysize),t.zsize!==0&&(e.zsize=t.zsize),e},create(t){return Rf.fromPartial(t??{})},fromPartial(t){const e=Gm();return e.guid=t.guid??"",e.name=t.name??"",e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e.xsize=t.xsize??0,e.ysize=t.ysize??0,e.zsize=t.zsize??0,e}};function Wm(){return{guid:"",name:"",radius:0,frame:void 0}}const Df={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.frame!==void 0&&We.encode(t.frame,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Wm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==34)break;r.frame=We.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",radius:ae(t.radius)?globalThis.Number(t.radius):0,frame:ae(t.frame)?We.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),e},create(t){return Df.fromPartial(t??{})},fromPartial(t){const e=Wm();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e}};function Xm(){return{guid:"",name:"",radius:0,height:0,frame:void 0}}const If={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.height!==0&&e.uint32(37).float(t.height),t.frame!==void 0&&We.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Xm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==37)break;r.height=n.float();continue}case 5:{if(s!==42)break;r.frame=We.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",radius:ae(t.radius)?globalThis.Number(t.radius):0,height:ae(t.height)?globalThis.Number(t.height):0,frame:ae(t.frame)?We.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.height!==0&&(e.height=t.height),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),e},create(t){return If.fromPartial(t??{})},fromPartial(t){const e=Xm();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.height=t.height??0,e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e}};function qm(){return{guid:"",name:"",radius:0,height:0,frame:void 0}}const Lf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.height!==0&&e.uint32(37).float(t.height),t.frame!==void 0&&We.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=qm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==37)break;r.height=n.float();continue}case 5:{if(s!==42)break;r.frame=We.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",radius:ae(t.radius)?globalThis.Number(t.radius):0,height:ae(t.height)?globalThis.Number(t.height):0,frame:ae(t.frame)?We.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.height!==0&&(e.height=t.height),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),e},create(t){return Lf.fromPartial(t??{})},fromPartial(t){const e=qm();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.height=t.height??0,e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e}};function Ym(){return{guid:"",name:"",radius:0,height:0,frame:void 0}}const Nf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.height!==0&&e.uint32(37).float(t.height),t.frame!==void 0&&We.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Ym();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==37)break;r.height=n.float();continue}case 5:{if(s!==42)break;r.frame=We.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",radius:ae(t.radius)?globalThis.Number(t.radius):0,height:ae(t.height)?globalThis.Number(t.height):0,frame:ae(t.frame)?We.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.height!==0&&(e.height=t.height),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),e},create(t){return Nf.fromPartial(t??{})},fromPartial(t){const e=Ym();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.height=t.height??0,e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e}};function Jm(){return{guid:"",name:"",radiusAxis:0,radiusPipe:0,frame:void 0}}const Uf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radiusAxis!==0&&e.uint32(29).float(t.radiusAxis),t.radiusPipe!==0&&e.uint32(37).float(t.radiusPipe),t.frame!==void 0&&We.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Jm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radiusAxis=n.float();continue}case 4:{if(s!==37)break;r.radiusPipe=n.float();continue}case 5:{if(s!==42)break;r.frame=We.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",radiusAxis:ae(t.radiusAxis)?globalThis.Number(t.radiusAxis):ae(t.radius_axis)?globalThis.Number(t.radius_axis):0,radiusPipe:ae(t.radiusPipe)?globalThis.Number(t.radiusPipe):ae(t.radius_pipe)?globalThis.Number(t.radius_pipe):0,frame:ae(t.frame)?We.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radiusAxis!==0&&(e.radiusAxis=t.radiusAxis),t.radiusPipe!==0&&(e.radiusPipe=t.radiusPipe),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),e},create(t){return Uf.fromPartial(t??{})},fromPartial(t){const e=Jm();return e.guid=t.guid??"",e.name=t.name??"",e.radiusAxis=t.radiusAxis??0,e.radiusPipe=t.radiusPipe??0,e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e}};function $m(){return{guid:"",name:"",points:[]}}const Of={encode(t,e=new it){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name);for(const n of t.points)He.encode(n,e.uint32(26).fork()).join();return e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=$m();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(He.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",points:globalThis.Array.isArray(t?.points)?t.points.map(e=>He.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.points?.length&&(e.points=t.points.map(n=>He.toJSON(n))),e},create(t){return Of.fromPartial(t??{})},fromPartial(t){const e=$m();return e.guid=t.guid??"",e.name=t.name??"",e.points=t.points?.map(n=>He.fromPartial(n))||[],e}};function Km(){return{guid:"",name:"",matrix:[]}}const Ff={encode(t,e=new it){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Km();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return Ff.fromPartial(t??{})},fromPartial(t){const e=Km();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function Zm(){return{guid:"",name:"",translationVector:void 0}}const kf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.translationVector!==void 0&&Mt.encode(t.translationVector,e.uint32(26).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Zm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.translationVector=Mt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",translationVector:ae(t.translationVector)?Mt.fromJSON(t.translationVector):ae(t.translation_vector)?Mt.fromJSON(t.translation_vector):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.translationVector!==void 0&&(e.translationVector=Mt.toJSON(t.translationVector)),e},create(t){return kf.fromPartial(t??{})},fromPartial(t){const e=Zm();return e.guid=t.guid??"",e.name=t.name??"",e.translationVector=t.translationVector!==void 0&&t.translationVector!==null?Mt.fromPartial(t.translationVector):void 0,e}};function Qm(){return{guid:"",name:"",axis:void 0,angle:0,point:void 0}}const Bf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.axis!==void 0&&Mt.encode(t.axis,e.uint32(26).fork()).join(),t.angle!==0&&e.uint32(37).float(t.angle),t.point!==void 0&&He.encode(t.point,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Qm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.axis=Mt.decode(n,n.uint32());continue}case 4:{if(s!==37)break;r.angle=n.float();continue}case 5:{if(s!==42)break;r.point=He.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",axis:ae(t.axis)?Mt.fromJSON(t.axis):void 0,angle:ae(t.angle)?globalThis.Number(t.angle):0,point:ae(t.point)?He.fromJSON(t.point):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.axis!==void 0&&(e.axis=Mt.toJSON(t.axis)),t.angle!==0&&(e.angle=t.angle),t.point!==void 0&&(e.point=He.toJSON(t.point)),e},create(t){return Bf.fromPartial(t??{})},fromPartial(t){const e=Qm();return e.guid=t.guid??"",e.name=t.name??"",e.axis=t.axis!==void 0&&t.axis!==null?Mt.fromPartial(t.axis):void 0,e.angle=t.angle??0,e.point=t.point!==void 0&&t.point!==null?He.fromPartial(t.point):void 0,e}};function jm(){return{guid:"",name:"",matrix:[]}}const zf={encode(t,e=new it){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=jm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return zf.fromPartial(t??{})},fromPartial(t){const e=jm();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function eg(){return{guid:"",name:"",matrix:[]}}const Vf={encode(t,e=new it){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=eg();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return Vf.fromPartial(t??{})},fromPartial(t){const e=eg();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function tg(){return{guid:"",name:"",matrix:[]}}const Hf={encode(t,e=new it){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=tg();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return Hf.fromPartial(t??{})},fromPartial(t){const e=tg();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function ng(){return{guid:"",name:"",matrix:[]}}const Gf={encode(t,e=new it){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=ng();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return Gf.fromPartial(t??{})},fromPartial(t){const e=ng();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function ae(t){return t!=null}class lC{data;constructor(e){let n;"bytes"in e?n=cC(e.bytes):n=e.data,this.data=n}get bytes(){return uC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new ht;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function cC(t){return Ff.decode(t)}function uC(t){return Ff.encode(t).finish()}function Dr(t){const e=new P(t.point.x,t.point.y,t.point.z),n=new P(t.xaxis.x,t.xaxis.y,t.xaxis.z),i=new P(t.yaxis.x,t.yaxis.y,t.yaxis.z),r=new P().crossVectors(n,i),s=new ht;return s.makeBasis(n,i,r),s.setPosition(e),s}class Qn{data;constructor(e){let n;if("bytes"in e?n=hC(e.bytes):n=e.data,n.x===void 0||n.y===void 0||n.z===void 0)throw new Error("Invalid PointData: Missing required properties (x, y, or z).");this.data=n}get bytes(){return fC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get x(){return this.data.x}get y(){return this.data.y}get z(){return this.data.z}buildGeometry(){const e=new ft,n=new Float32Array([this.x,this.y,this.z]);return e.setAttribute("position",new xn(n,3)),new af(e)}}function hC(t){return He.decode(t)}function fC(t){return He.encode(t).finish()}class js{data;constructor(e){let n;if("bytes"in e?n=dC(e.bytes):n=e.data,n.x===void 0||n.y===void 0||n.z===void 0)throw new Error("Invalid VectorData: Missing required properties (x, y, or z).");this.data=n}get bytes(){return pC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get x(){return this.data.x}get y(){return this.data.y}get z(){return this.data.z}buildGeometry(e){const n=new P(this.x,this.y,this.z),i=n.length();n.normalize();let r;e?r=new P(e.x,e.y,e.z):r=new P(0,0,0);let s=new _f(n,r,i,16711680);return s.setDirection(n),s}}function dC(t){return Mt.decode(t)}function pC(t){return Mt.encode(t).finish()}class hi{data;_point;_xaxis;_yaxis;constructor(e){let n;if("bytes"in e?n=mC(e.bytes):n=e.data,!n.point||!n.xaxis||!n.yaxis)throw new Error("Invalid FrameData: Missing required properties (point, xaxis, or yaxis).");this.data=n}get bytes(){return gC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get point(){return this._point||(this._point=new Qn({data:this.data.point})),this._point}get xaxis(){return this._xaxis||(this._xaxis=new js({data:this.data.xaxis})),this._xaxis}get yaxis(){return this._yaxis||(this._yaxis=new js({data:this.data.yaxis})),this._yaxis}buildGeometry(){const e=new p_(1);e.setColors(new Ze(16711680),new Ze(65280),new Ze(255));const n=Dr(this.data);return e.applyMatrix4(n),e}}function mC(t){return We.decode(t)}function gC(t){return We.encode(t).finish()}class A_{data;_frame;constructor(e){let n;if("bytes"in e?n=_C(e.bytes):n=e.data,!n.radius||!n.frame)throw new Error("Invalid CircleData: Missing required properties (radius or frame).");this.data=n}get bytes(){return vC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get frame(){return this._frame||(this._frame=new hi({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new cf(this.data.radius,e),i=Dr(this.data.frame),r=new _e(n);return r.applyMatrix4(i),r}}function _C(t){return xr.decode(t)}function vC(t){return xr.encode(t).finish()}class xC{data;_circle;constructor(e){let n;if("bytes"in e?n=yC(e.bytes):n=e.data,!n.startAngle||!n.endAngle||!n.circle)throw new Error("Invalid ArcData: Missing required properties (startAngle, endAngle, or circle).");this.data=n}get bytes(){return bC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get startAngle(){return this.data.startAngle}get endAngle(){return this.data.endAngle}get circle(){return this._circle||(this._circle=new A_({data:this.data.circle})),this._circle}buildGeometry(){throw new Error("Method not implemented.")}}function yC(t){return Mf.decode(t)}function bC(t){return Mf.encode(t).finish()}class SC{data;_points;constructor(e){let n;if("bytes"in e?n=MC(e.bytes):n=e.data,!n.points||n.points.length===0)throw new Error("Invalid BezierData: Missing required property points.");this.data=n}get bytes(){return wC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const e of this.data.points){const n=new Qn({data:e});this._points.push(n)}}return this._points}buildGeometry(){throw Error("Method not implemented.")}}function MC(t){return Af.decode(t)}function wC(t){return Af.encode(t).finish()}class EC{data;_frame;constructor(e){let n;if("bytes"in e?n=TC(e.bytes):n=e.data,!n.xsize||!n.ysize||!n.zsize||!n.frame)throw new Error("Invalid BoxData: Missing required properties (xsize, ysize, zsize, or frame).");this.data=n}get bytes(){return AC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get xsize(){return this.data.xsize}get ysize(){return this.data.ysize}get zsize(){return this.data.zsize}get frame(){return this._frame||(this._frame=new hi({data:this.data.frame})),this._frame}buildGeometry(){const e=new Ht(this.data.xsize,this.data.ysize,this.data.zsize),n=Dr(this.data.frame),i=new _e(e);return i.applyMatrix4(n),i}}function TC(t){return Rf.decode(t)}function AC(t){return Rf.encode(t).finish()}class CC{data;_frame;constructor(e){let n;if("bytes"in e?n=PC(e.bytes):n=e.data,!n.radius||!n.height||!n.frame)throw new Error("Invalid CapsuleData: Missing required properties (radius, height, or frame).");this.data=n}get bytes(){return RC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get height(){return this.data.height}get frame(){return this._frame||(this._frame=new hi({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new lf(this.data.radius,this.data.height,e,e),i=new _e(n),r=Dr(this.data.frame);return i.applyMatrix4(r),i}}function PC(t){return Nf.decode(t)}function RC(t){return Nf.encode(t).finish()}class DC{data;_frame;constructor(e){let n;if("bytes"in e?n=IC(e.bytes):n=e.data,!n.radius||!n.height||!n.frame)throw new Error("Invalid ConeData: Missing required properties (radius, height, or frame).");this.data=n}get bytes(){return LC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get height(){return this.data.height}get frame(){return this._frame||(this._frame=new hi({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new $l(this.radius,this.height,e),i=new _e(n),r=Dr(this.data.frame);return i.applyMatrix4(r),i}}function IC(t){return Lf.decode(t)}function LC(t){return Lf.encode(t).finish()}class NC{data;_frame;constructor(e){let n;if("bytes"in e?n=UC(e.bytes):n=e.data,!n.radius||!n.height||!n.frame)throw new Error("Invalid CylinderData: Missing required properties (radius, height, or frame).");this.data=n}get bytes(){return OC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get height(){return this.data.height}get frame(){return this._frame||(this._frame=new hi({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new sn(this.data.radius,this.data.radius,this.data.height,e),i=new _e(n),r=Dr(this.frame);return i.applyMatrix4(r),i}}function UC(t){return If.decode(t)}function OC(t){return If.encode(t).finish()}class FC{data;_frame;constructor(e){let n;if("bytes"in e?n=kC(e.bytes):n=e.data,!n.major||!n.minor||!n.frame)throw new Error("Invalid EllipseData: Missing required properties (major, minor, or frame).");this.data=n}get bytes(){return BC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get major(){return this.data.major}get minor(){return this.data.minor}get frame(){return this._frame||(this._frame=new hi({data:this.data.frame})),this._frame}buildGeometry(e=64){throw Error("Method not implemented.")}}function kC(t){return wf.decode(t)}function BC(t){return wf.encode(t).finish()}class zC{data;_frame;constructor(e){let n;if("bytes"in e?n=VC(e.bytes):n=e.data,!n.major||!n.minor||!n.frame)throw new Error("Invalid HyperbolaData: Missing required properties (a, b, or frame).");this.data=n}get bytes(){return HC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get major(){return this.data.major}get minor(){return this.data.minor}get frame(){return this._frame||(this._frame=new hi({data:this.data.frame})),this._frame}buildGeometry(e=64){throw Error("Method not implemented.")}}function VC(t){return Tf.decode(t)}function HC(t){return Tf.encode(t).finish()}class GC{data;_start;_end;constructor(e){let n;if("bytes"in e?n=WC(e.bytes):n=e.data,!n.start||!n.end)throw new Error("Invalid LineData: Missing required properties (start or end).");this.data=n}get bytes(){return XC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get start(){return this._start||(this._start=new Qn({data:this.data.start})),this._start}get end(){return this._end||(this._end=new Qn({data:this.data.end})),this._end}buildGeometry(){const e=new P(this.data.start.x,this.data.start.y,this.data.start.z),n=new P(this.data.end.x,this.data.end.y,this.data.end.z),i=new ft().setFromPoints([e,n]),r=new ui({color:255});return new on(i,r)}}function WC(t){return Sf.decode(t)}function XC(t){return Sf.encode(t).finish()}class qC{data;_frame;constructor(e){let n;if("bytes"in e?n=YC(e.bytes):n=e.data,!n.focal||!n.frame)throw new Error("Invalid ParabolaData: Missing required properties (focal_length or frame).");this.data=n}get bytes(){return JC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get focal(){return this.data.focal}get frame(){return this._frame||(this._frame=new hi({data:this.data.frame})),this._frame}buildGeometry(e=64){throw Error("Method not implemented.")}}function YC(t){return Ef.decode(t)}function JC(t){return Ef.encode(t).finish()}class $C{data;_point;_normal;constructor(e){let n;if("bytes"in e?n=KC(e.bytes):n=e.data,!n.point||!n.normal)throw new Error("Invalid PlaneData: Missing required properties (point or normal).");this.data=n}get bytes(){return ZC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get point(){return this._point||(this._point=new Qn({data:this.data.point})),this._point}get normal(){return this._normal||(this._normal=new js({data:this.data.normal})),this._normal}buildGeometry(e=2){const n=new Xi(new P(this.normal.x,this.normal.y,this.normal.z),0);return n.translate(new P(this.point.x,this.point.y,this.point.z)),new xM(n,e)}}function KC(t){return yf.decode(t)}function ZC(t){return yf.encode(t).finish()}class QC{data;_points;constructor(e){let n;if("bytes"in e?n=jC(e.bytes):n=e.data,!n.points||n.points.length===0)throw new Error("Invalid PointcloudData: Missing required property points.");this.data=n}get bytes(){return eP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const e of this.data.points){const n=new Qn({data:e});this._points.push(n)}}return this._points}buildGeometry(){const e=new ft,n=new Float32Array(this.points.length*3);for(let s=0;s<this.points.length;s++)n[s*3]=this.points[s].x,n[s*3+1]=this.points[s].y,n[s*3+2]=this.points[s].z;e.setAttribute("position",new xn(n,3));const i=new of({size:.2,color:16711935});return new af(e,i)}}function jC(t){return Of.decode(t)}function eP(t){return Of.encode(t).finish()}class tP{data;_points;constructor(e){let n;if("bytes"in e?n=nP(e.bytes):n=e.data,!n.points||n.points.length===0)throw new Error("Invalid PolygonData: Missing required property points.");this.data=n}get bytes(){return iP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const e of this.data.points){const n=new Qn({data:e});this._points.push(n)}}return this._points}buildGeometry(){throw Error("Method not implemented.")}}function nP(t){return Pf.decode(t)}function iP(t){return Pf.encode(t).finish()}class rP{data;_points;constructor(e){let n;if("bytes"in e?n=sP(e.bytes):n=e.data,!n.points||n.points.length===0)throw new Error("Invalid PolylineData: Missing required property points.");this.data=n}get bytes(){return oP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const e of this.data.points){const n=new Qn({data:e});this._points.push(n)}}return this._points}buildGeometry(){const e=new ft,n=new Float32Array(this.points.length*3);for(let s=0;s<this.points.length;s++)n[s*3]=this.points[s].x,n[s*3+1]=this.points[s].y,n[s*3+2]=this.points[s].z;e.setAttribute("position",new xn(n,3));const i=new ui({color:0});return new on(e,i)}}function sP(t){return Cf.decode(t)}function oP(t){return Cf.encode(t).finish()}class aP{data;constructor(e){let n;if("bytes"in e?n=lP(e.bytes):n=e.data,!n.matrix)throw new Error("Invalid ProjectionData: Missing required properties (direction).");this.data=n}get bytes(){return cP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new ht;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function lP(t){return Gf.decode(t)}function cP(t){return Gf.encode(t).finish()}class uP{data;constructor(e){let n;if("bytes"in e?n=hP(e.bytes):n=e.data,!n.w||!n.x||!n.y||!n.z)throw new Error("Invalid QuaternionData: Missing required properties (w, x, y, or z).");this.data=n}get bytes(){return fP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get w(){return this.data.w}get x(){return this.data.x}get y(){return this.data.y}get z(){return this.data.z}}function hP(t){return bf.decode(t)}function fP(t){return bf.encode(t).finish()}class dP{data;constructor(e){let n;if("bytes"in e?n=pP(e.bytes):n=e.data,!n.matrix)throw new Error("Invalid ReflectionData: Missing required properties (frame).");this.data=n}get bytes(){return mP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new ht;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function pP(t){return Vf.decode(t)}function mP(t){return Vf.encode(t).finish()}class gP{data;_axis;_point;constructor(e){let n;if("bytes"in e?n=_P(e.bytes):n=e.data,!n.axis||!n.point||!n.angle)throw new Error("Invalid RotationData: Missing required properties (axis or point).");this.data=n}get bytes(){return vP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get axis(){return this._axis||(this._axis=new js({data:this.data.axis})),this._axis}get point(){return this._point||(this._point=new Qn({data:this.data.point})),this._point}get angle(){return this.data.angle}}function _P(t){return Bf.decode(t)}function vP(t){return Bf.encode(t).finish()}class xP{data;constructor(e){let n;if("bytes"in e?n=yP(e.bytes):n=e.data,!n.matrix)throw new Error("Invalid ScaleData: Missing required properties (factor or frame).");this.data=n}get bytes(){return bP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new ht;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function yP(t){return zf.decode(t)}function bP(t){return zf.encode(t).finish()}class SP{data;constructor(e){let n;if("bytes"in e?n=MP(e.bytes):n=e.data,!n.matrix)throw new Error("Invalid ShearData: Missing required properties (matrix).");this.data=n}get bytes(){return wP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new ht;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function MP(t){return Hf.decode(t)}function wP(t){return Hf.encode(t).finish()}class EP{data;_frame;constructor(e){let n;if("bytes"in e?n=TP(e.bytes):n=e.data,!n.radius||!n.frame)throw new Error("Invalid SphereData: Missing required properties (radius or frame).");this.data=n}get bytes(){return AP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get frame(){return this._frame||(this._frame=new hi({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new ua(this.radius,e,e),i=new _e(n),r=Dr(this.data.frame);return i.applyMatrix4(r),i}}function TP(t){return Df.decode(t)}function AP(t){return Df.encode(t).finish()}class CP{data;_frame;constructor(e){let n;if("bytes"in e?n=PP(e.bytes):n=e.data,!n.radiusAxis||!n.radiusPipe||!n.frame)throw new Error("Invalid TorusData: Missing required properties (major, minor, or frame).");this.data=n}get bytes(){return RP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radiusAxis(){return this.data.radiusAxis}get radiusPipe(){return this.data.radiusPipe}get frame(){return this._frame||(this._frame=new hi({data:this.data.frame})),this._frame}buildGeometry(e=64,n=64){const i=new _r(this.radiusAxis,this.radiusPipe,e,n),r=new _e(i),s=Dr(this.data.frame);return r.applyMatrix4(s),r}}function PP(t){return Uf.decode(t)}function RP(t){return Uf.encode(t).finish()}class DP{data;_translationVector;constructor(e){let n;if("bytes"in e?n=IP(e.bytes):n=e.data,!n.translationVector)throw new Error("Invalid TranslationData: Missing required properties (vector or frame).");this.data=n}get bytes(){return LP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get translationVector(){return this._translationVector||(this._translationVector=new js({data:this.data.translationVector})),this._translationVector}}function IP(t){return kf.decode(t)}function LP(t){return kf.encode(t).finish()}function ig(){return{indices:[]}}const yr={encode(t,e=new it){e.uint32(10).fork();for(const n of t.indices)e.uint32(n);return e.join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=ig();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s===8){r.indices.push(n.uint32());continue}if(s===10){const o=n.uint32()+n.pos;for(;n.pos<o;)r.indices.push(n.uint32());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{indices:globalThis.Array.isArray(t?.indices)?t.indices.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.indices?.length&&(e.indices=t.indices.map(n=>Math.round(n))),e},create(t){return yr.fromPartial(t??{})},fromPartial(t){const e=ig();return e.indices=t.indices?.map(n=>n)||[],e}};function rg(){return{guid:void 0,name:void 0,vertices:[],faces:[]}}const Wf={encode(t,e=new it){t.guid!==void 0&&e.uint32(10).string(t.guid),t.name!==void 0&&e.uint32(18).string(t.name);for(const n of t.vertices)He.encode(n,e.uint32(26).fork()).join();for(const n of t.faces)yr.encode(n,e.uint32(34).fork()).join();return e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=rg();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.vertices.push(He.decode(n,n.uint32()));continue}case 4:{if(s!==34)break;r.faces.push(yr.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:Dl(t.guid)?globalThis.String(t.guid):void 0,name:Dl(t.name)?globalThis.String(t.name):void 0,vertices:globalThis.Array.isArray(t?.vertices)?t.vertices.map(e=>He.fromJSON(e)):[],faces:globalThis.Array.isArray(t?.faces)?t.faces.map(e=>yr.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==void 0&&(e.guid=t.guid),t.name!==void 0&&(e.name=t.name),t.vertices?.length&&(e.vertices=t.vertices.map(n=>He.toJSON(n))),t.faces?.length&&(e.faces=t.faces.map(n=>yr.toJSON(n))),e},create(t){return Wf.fromPartial(t??{})},fromPartial(t){const e=rg();return e.guid=t.guid??void 0,e.name=t.name??void 0,e.vertices=t.vertices?.map(n=>He.fromPartial(n))||[],e.faces=t.faces?.map(n=>yr.fromPartial(n))||[],e}};function sg(){return{vertexIndices:[]}}const br={encode(t,e=new it){e.uint32(10).fork();for(const n of t.vertexIndices)e.int32(n);return e.join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=sg();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s===8){r.vertexIndices.push(n.int32());continue}if(s===10){const o=n.uint32()+n.pos;for(;n.pos<o;)r.vertexIndices.push(n.int32());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{vertexIndices:globalThis.Array.isArray(t?.vertexIndices)?t.vertexIndices.map(e=>globalThis.Number(e)):globalThis.Array.isArray(t?.vertex_indices)?t.vertex_indices.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.vertexIndices?.length&&(e.vertexIndices=t.vertexIndices.map(n=>Math.round(n))),e},create(t){return br.fromPartial(t??{})},fromPartial(t){const e=sg();return e.vertexIndices=t.vertexIndices?.map(n=>n)||[],e}};function og(){return{guid:void 0,name:void 0,vertices:[],faces:[]}}const Xf={encode(t,e=new it){t.guid!==void 0&&e.uint32(10).string(t.guid),t.name!==void 0&&e.uint32(18).string(t.name);for(const n of t.vertices)He.encode(n,e.uint32(26).fork()).join();for(const n of t.faces)br.encode(n,e.uint32(34).fork()).join();return e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=og();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.vertices.push(He.decode(n,n.uint32()));continue}case 4:{if(s!==34)break;r.faces.push(br.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:Dl(t.guid)?globalThis.String(t.guid):void 0,name:Dl(t.name)?globalThis.String(t.name):void 0,vertices:globalThis.Array.isArray(t?.vertices)?t.vertices.map(e=>He.fromJSON(e)):[],faces:globalThis.Array.isArray(t?.faces)?t.faces.map(e=>br.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==void 0&&(e.guid=t.guid),t.name!==void 0&&(e.name=t.name),t.vertices?.length&&(e.vertices=t.vertices.map(n=>He.toJSON(n))),t.faces?.length&&(e.faces=t.faces.map(n=>br.toJSON(n))),e},create(t){return Xf.fromPartial(t??{})},fromPartial(t){const e=og();return e.guid=t.guid??void 0,e.name=t.name??void 0,e.vertices=t.vertices?.map(n=>He.fromPartial(n))||[],e.faces=t.faces?.map(n=>br.fromPartial(n))||[],e}};function Dl(t){return t!=null}class NP{data;constructor(e){let n;if("bytes"in e?n=UP(e.bytes):n=e.data,!n.vertexIndices)throw new Error("Invalid FaceData: Missing required property 'vertices'.");this.data=n}get bytes(){return OP(this.data)}get vertexIndices(){return this.data.vertexIndices}}function UP(t){return br.decode(t)}function OP(t){return br.encode(t).finish()}class FP{data;_points;_faces;constructor(e){let n;if("bytes"in e?n=kP(e.bytes):n=e.data,!n.vertices||!n.faces)throw new Error("Invalid PolyhedronData: Missing required properties (vertices or faces).");this.data=n}get bytes(){return BP(this.data)}get guid(){return this.data.guid?this.data.guid:""}get name(){return this.data.name?this.data.name:""}get vertices(){if(!this._points){this._points=[];for(const e of this.data.vertices){const n=new Qn({data:e});this._points.push(n)}}return this._points}get faces(){if(!this._faces){this._faces=[];for(const e of this.data.faces){const n=new NP({data:e});this._faces.push(n)}}return this._faces}buildGeometry(){const e=new ft,n=new Float32Array(this.vertices.length*3);for(let o=0;o<this.vertices.length;o++){const a=this.vertices[o];n[o*3]=a.x,n[o*3+1]=a.y,n[o*3+2]=a.z}const i=[];for(const o of this.faces){const a=o.vertexIndices;for(let l=1;l<a.length-1;l++)i.push(a[0],a[l],a[l+1])}e.setIndex(i),e.setAttribute("position",new xn(n,3)),e.computeVertexNormals();const r=new io({color:52292,side:Tn});return new _e(e,r)}}function kP(t){return Xf.decode(t)}function BP(t){return Xf.encode(t).finish()}class zP{data;constructor(e){let n;if("bytes"in e?n=VP(e.bytes):n=e.data,!n.indices)throw new Error("Invalid FaceList: Missing required property 'faces'.");this.data=n}get bytes(){return HP(this.data)}get indices(){return this.data.indices}}function VP(t){return yr.decode(t)}function HP(t){return yr.encode(t).finish()}function GP(t,e=Math.PI/3){const n=Math.cos(e),i=(1+1e-10)*100,r=[new P,new P,new P],s=new P,o=new P,a=new P,l=new P;function c(v){const m=~~(v.x*i),d=~~(v.y*i),_=~~(v.z*i);return`${m},${d},${_}`}const u=t.index?t.toNonIndexed():t,h=u.attributes.position,f={};for(let v=0,m=h.count/3;v<m;v++){const d=3*v,_=r[0].fromBufferAttribute(h,d+0),y=r[1].fromBufferAttribute(h,d+1),b=r[2].fromBufferAttribute(h,d+2);s.subVectors(b,y),o.subVectors(_,y);const T=new P().crossVectors(s,o).normalize();for(let C=0;C<3;C++){const D=r[C],R=c(D);R in f||(f[R]=[]),f[R].push(T)}}const p=new Float32Array(h.count*3),g=new xn(p,3,!1);for(let v=0,m=h.count/3;v<m;v++){const d=3*v,_=r[0].fromBufferAttribute(h,d+0),y=r[1].fromBufferAttribute(h,d+1),b=r[2].fromBufferAttribute(h,d+2);s.subVectors(b,y),o.subVectors(_,y),a.crossVectors(s,o).normalize();for(let T=0;T<3;T++){const C=r[T],D=c(C),R=f[D];l.set(0,0,0);for(let S=0,M=R.length;S<M;S++){const L=R[S];a.dot(L)>n&&l.add(L)}l.normalize(),g.setXYZ(d+T,l.x,l.y,l.z)}}return u.setAttribute("normal",g),u}class WP{data;_vertices;constructor(e){let n;if("bytes"in e?n=XP(e.bytes):n=e.data,!n.vertices||!n.faces)throw new Error("Invalid MeshData: Missing required properties (vertices or faces).");this.data=n}get bytes(){return qP(this.data)}get guid(){return this.data.guid?this.data.guid:""}get name(){return this.data.name?this.data.name:""}get vertices(){if(!this._vertices){this._vertices=[];for(const e of this.data.vertices){const n=new Qn({data:e});this._vertices.push(n)}}return this._vertices}get faces(){const e=[];for(const n of this.data.faces){const i=new zP({data:n});e.push(i)}return e}buildGeometry(){let e=new ft;const n=new Float32Array(this.vertices.length*3);this.vertices.forEach((o,a)=>{n[a*3]=o.x,n[a*3+1]=o.y,n[a*3+2]=o.z});const i=[];for(const o of this.faces){const a=o.indices;for(let l=1;l<a.length-1;l++)i.push(a[0],a[l],a[l+1])}e.setIndex(i),e.setAttribute("position",new xn(n,3));const r=Cl.degToRad(30);e=GP(e,r);const s=new io({color:30719,flatShading:!0,side:Tn});return new _e(e,s)}}function XP(t){return Wf.decode(t)}function qP(t){return Wf.encode(t).finish()}class C_{data;constructor(e){let n;"bytes"in e?n=YP(e.bytes):n=e.data,this.data=n}get bytes(){return JP(this.data)}get asDict(){const e={};for(const n in this.data.items)Object.prototype.hasOwnProperty.call(this.data.items,n)&&(e[n]=this.data.items[n]);return e}}function YP(t){return vr.decode(t)}function JP(t){return vr.encode(t).finish()}const $P=new Map([["ArcData",xC],["BezierData",SC],["BoxData",EC],["CapsuleData",CC],["CircleData",A_],["ConeData",DC],["CylinderData",NC],["EllipseData",FC],["FrameData",hi],["HyperbolaData",zC],["LineData",GC],["ParabolaData",qC],["PlaneData",$C],["PointData",Qn],["PointcloudData",QC],["PolygonData",tP],["PolylineData",rP],["ProjectionData",aP],["QuaternionData",uP],["ReflectionData",dP],["RotationData",gP],["ScaleData",xP],["ShearData",SP],["SphereData",EP],["TorusData",CP],["TransformationData",lC],["TranslationData",DP],["VectorData",js],["MeshData",WP],["PolyhedronData",FP],["DictData",C_]]);function KP(t){const e=ZP(t),n=QP(e);return n?new n({bytes:e.value}):null}function ZP(t){return T_.decode(t).data.message}function QP(t){const n=t.typeUrl.split(".").slice(-1)[0];return $P.get(n)||null}class jP extends on{constructor(e,n){const i=[1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],r=new ft;r.setAttribute("position",new tt(i,3)),r.computeBoundingSphere();const s=new ui({fog:!1});super(r,s),this.light=e,this.color=n,this.type="RectAreaLightHelper";const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],a=new ft;a.setAttribute("position",new tt(o,3)),a.computeBoundingSphere(),this.add(new _e(a,new Rr({side:vn,fog:!1})))}updateMatrixWorld(){if(this.scale.set(.5*this.light.width,.5*this.light.height,1),this.color!==void 0)this.material.color.set(this.color),this.children[0].material.color.set(this.color);else{this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);const e=this.material.color,n=Math.max(e.r,e.g,e.b);n>1&&e.multiplyScalar(1/n),this.children[0].material.color.copy(this.material.color)}this.matrixWorld.extractRotation(this.light.matrixWorld).scale(this.scale).copyPosition(this.light.matrixWorld),this.children[0].matrixWorld.copy(this.matrixWorld)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}class Ql extends _e{constructor(){const e=Ql.SkyShader,n=new ci({name:e.name,uniforms:Z0.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:vn,depthWrite:!1});super(new Ht(1,1,1),n),this.isSky=!0}}Ql.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new P},up:{value:new P(0,1,0)}},vertexShader:`
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

		}`};const Yt={},Zn={};function ag(t){t.type.value=="point_light"?e3(t):t.type.value=="spot_light"?t3(t):t.type.value=="rect_light"?n3(t):t.type.value=="sunlight"?i3(t):t.type.value=="sky"?r3(t):t.type.value=="ambient_light"&&s3(t)}function e3(t){let e,n;Yt[t.guid.value]?e=Yt[t.guid.value]:(e=new fM,Ot.add(e));let i=t.color.value;i=i.replace("#","0x"),i=parseInt(i),e.color.set(i),e.intensity=t.intensity.value,e.distance=t.distance.value,e.decay=t.decay.value,e.position.set(t.x.value,t.y.value,t.z.value),e.castShadow=!0,e.shadow.bias=-.002,e.shadow.normalBias=.02,Zn[t.guid.value]&&t.helper.value?(n=Zn[t.guid.value],n.update()):t.helper.value&&(n=new _M(e,.5),Ot.add(n)),Yt[t.guid.value]=e,n&&(Zn[t.guid.value]=n)}function t3(t){let e,n;Yt[t.guid.value]?(e=Yt[t.guid.value],Ot.remove(e.target)):(e=new uM,Ot.add(e));let i=t.color.value;i=i.replace("#","0x"),i=parseInt(i),e.color.set(i),e.intensity=t.intensity.value,e.distance=t.distance.value,e.angle=t.angle.value,e.penumbra=t.penumbra.value,e.decay=t.decay.value,e.position.set(t.x.value,t.y.value,t.z.value);const r=new Tt;r.position.set(t.tx.value,t.ty.value,t.tz.value),Ot.add(r),e.target=r,Ot.remove(r),e.castShadow=!0,e.shadow.bias=-.002,e.shadow.normalBias=.02,Zn[t.guid.value]&&t.helper.value?(n=Zn[t.guid.value],n.update()):t.helper.value&&(n=new gM(e),Ot.add(n)),Yt[t.guid.value]=e,n&&(Zn[t.guid.value]=n)}function n3(t){let e,n;Yt[t.guid.value]?e=Yt[t.guid.value]:(e=new pM,Ot.add(e));let i=t.color.value;i=i.replace("#","0x"),i=parseInt(i),e.color.set(i),e.intensity=t.intensity.value,e.width=t.width.value,e.height=t.height.value,e.position.set(t.x.value,t.y.value,t.z.value),e.lookAt(t.tx.value,t.ty.value,t.tz.value),Zn[t.guid.value]&&t.helper.value?n=Zn[t.guid.value]:t.helper.value&&(n=new jP(e),Ot.add(n)),Yt[t.guid.value]=e,n&&(Zn[t.guid.value]=n)}function i3(t){let e,n;Yt[t.guid.value]?e=Yt[t.guid.value]:(e=new h_,Ot.add(e));let i=t.color.value;if(i=i.replace("#","0x"),i=parseInt(i),e.color.set(i),e.intensity=t.intensity.value,e.position.set(t.x.value,t.y.value,t.z.value),e.target.position.set(t.tx.value,t.ty.value,t.tz.value),e.castShadow=!0,Zn[t.guid.value]&&t.helper.value)n=Zn[t.guid.value],n.update();else if(t.helper.value){const r=new vM(e);Ot.add(r)}Yt[t.guid.value]=e,n&&(Zn[t.guid.value]=n)}function r3(t){let e,n,i;Yt[t.guid.value]?(e=Yt[t.guid.value],n=Yt[t.guid.value+"_sun"],i=Yt[t.guid.value+"_ambient"]):(e=new Ql,n=new h_(16777215,1),i=new f_(16777215,.6),Ot.add(e),Ot.add(n),Ot.add(i)),e.scale.setScalar(1e3),e.material.uniforms.up.value=new P(0,0,1),e.material.uniforms.turbidity.value=t.turbidity.value,e.material.uniforms.rayleigh.value=t.rayleigh.value,e.material.uniforms.mieCoefficient.value=t.mie_coefficient.value,e.material.uniforms.mieDirectionalG.value=t.mie_directional_g.value;let r=new P;const s=Cl.degToRad(90-t.elevation.value),o=Cl.degToRad(t.azimuth.value);r.setFromSphericalCoords(1,s,o),e.material.uniforms.sunPosition.value=r,n.position.copy(e.material.uniforms.sunPosition.value),n.color.copy(lg(t.elevation.value)),i.color.copy(lg(t.elevation.value)).multiplyScalar(.6),Yt[t.guid.value]=e,Yt[t.guid.value+"_sun"]=n,Yt[t.guid.value+"_ambient"]=i}function lg(t){if(t>10)return new Ze(16777215);if(t>0){const e=t/10;return new Ze(16777164).lerp(new Ze(16777215),e)}if(t>-5){const e=(t+5)/5;return new Ze(16764006).lerp(new Ze(16777164),e)}return new Ze(16764006)}function s3(t){let e;Yt[t.guid.value]?e=Yt[t.guid.value]:(e=new f_,Ot.add(e));let n=t.color.value;n=n.replace("#","0x"),n=parseInt(n),e.color.set(n),e.intensity=t.intensity.value,e.color.needsUpdate=!0,console.log(t.intensity.value)}const Cr=On({title:"Object Infos",isVisible:!1,data:null}),yh=On({title:"Sidebar Infos",isVisible:!1,data:null}),rs=On({value:!0}),En=On({lightBackgroundColor:16777215,darkBackgroundColor:0,defaultBackgroundColor:16777215,backgroundOverrideMode:"none",backgroundMode:"light"}),Il=On({objectMotionPaused:!1}),qf=On([]);function o3(t){const e=t.type.value;switch(e){case"button":a3(t),yh.isVisible=!0;break;case"slider":l3(t),yh.isVisible=!0;break;default:console.warn("Unknown component type:",e)}}function a3(t){const e={id:Date.now(),component:"Button",label:t.label?.value,props:{text:t.text.value,variant:t.variant.value},action:t.guid.value};qf.push(e)}function l3(t){const e={id:Date.now(),component:"Slider",label:t.label?.value,props:{min:t.min.value,max:t.max.value,step:t.step.value,defaultValue:[t.default_value.value]},action:t.guid.value};qf.push(e)}function cg(t,e){const n={dispatch:"ui_callback",action:t,value:null};e!==void 0&&(n.value=e),D_(n)}class c3 extends df{constructor(e,n={}){const i=n.font;if(i===void 0)super();else{const r=i.generateShapes(e,n.size,n.direction);n.depth===void 0&&(n.depth=50),n.bevelThickness===void 0&&(n.bevelThickness=10),n.bevelSize===void 0&&(n.bevelSize=8),n.bevelEnabled===void 0&&(n.bevelEnabled=!1),super(r,n)}this.type="TextGeometry"}}class u3 extends pf{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new lM(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));n&&n(l)},i,r)}parse(e){return new h3(e)}}class h3{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,n=100,i="ltr"){const r=[],s=f3(e,n,this.data,i);for(let o=0,a=s.length;o<a;o++)r.push(...s[o].toShapes());return r}}function f3(t,e,n,i){const r=Array.from(t),s=e/n.resolution,o=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*s,a=[];let l=0,c=0;(i=="rtl"||i=="tb")&&r.reverse();for(let u=0;u<r.length;u++){const h=r[u];if(h===`
`)l=0,c-=o;else{const f=d3(h,s,l,c,n);i=="tb"?(l=0,c+=n.ascender*s):l+=f.offsetX,a.push(f.path)}}return a}function d3(t,e,n,i,r){const s=r.glyphs[t]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}const o=new yM;let a,l,c,u,h,f,p,g;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,d=v.length;m<d;)switch(v[m++]){case"m":a=v[m++]*e+n,l=v[m++]*e+i,o.moveTo(a,l);break;case"l":a=v[m++]*e+n,l=v[m++]*e+i,o.lineTo(a,l);break;case"q":c=v[m++]*e+n,u=v[m++]*e+i,h=v[m++]*e+n,f=v[m++]*e+i,o.quadraticCurveTo(h,f,c,u);break;case"b":c=v[m++]*e+n,u=v[m++]*e+i,h=v[m++]*e+n,f=v[m++]*e+i,p=v[m++]*e+n,g=v[m++]*e+i,o.bezierCurveTo(h,f,p,g,c,u);break}}return{offsetX:s.ha*e,path:o}}function p3(t){t.type.value==="text_geometry"&&g3(t)}const su={};async function m3(t,e){const n=`${t}_${e}`;if(su[n])return su[n];const i=new u3,r=`/fonts/${n}.typeface.json`;return new Promise((s,o)=>{i.load(r,a=>{su[n]=a,s(a)},void 0,a=>o(a))})}async function g3(t){const e=t.text.value,n=t.font.value,i=t.weight.value,r=t.depth.value,s=t.size.value,o=await m3(n,i),a=new c3(e,{font:o,size:s,depth:r});let l;if(ir[t.guid.value]){const _=ir[t.guid.value];l=Qs[_]}else l=new io({color:65535,side:Tn});let c;t.centered.value?(a.computeBoundingBox(),c=-.5*(a.boundingBox.max.x-a.boundingBox.min.x)):c=0;const u=new P(t.point_x.value,t.point_y.value,t.point_z.value),h=new P(t.direction_x.value,t.direction_y.value,t.direction_z.value),f=new P(t.up_x.value,t.up_y.value,t.up_z.value),p=new P().crossVectors(h,f).normalize(),g=h.clone().normalize(),v=f.clone().normalize(),m=new ht().makeBasis(g,v,p);m.setPosition(u);const d=new _e(a,l);d.position.x=c,d.applyMatrix4(m),qn[t.guid.value]=d,Ot.add(d)}function _3(){Cr.isVisible=!0}function P_(){Cr.isVisible=!1}function R_(t){delete t.dispatch,Cr.data=t}document.addEventListener("keydown",t=>{(t.key==="I"||t.key==="i")&&(Cr.isVisible?P_():_3())});const pl=[];function v3(t){Il.objectMotionPaused=t,t||b3()}function x3(){return v3(!Il.objectMotionPaused),Il.objectMotionPaused}function y3(t){return!Il.objectMotionPaused||!t?.guid||!(t.guid in qn)?!1:(pl.push(t),!0)}function b3(){if(!pl.length)return;pl.splice(0,pl.length).forEach(e=>S_(e))}function S3(t){const e=KP(t);if(e instanceof C_){M3(e);return}else{if(y3(e))return;S_(e)}}function M3(t){const e=t.data.items;switch(e.dispatch.value){case"material":dm(e);break;case"light":ag(e);break;case"scene":W3(e);break;case"ui":o3(e);break;case"text":p3(e);break;case"object_infos":R_(e);break;case"remove_object":q3(e);break;default:console.warn("Unknown dispatch value:",e.dispatch.value)}e.dispatch.value=="material"?dm(e):e.dispatch.value=="light"&&ag(e)}let qi=null;function w3(){const t=()=>{qi=new WebSocket("ws://127.0.0.1:9001/ws"),qi.binaryType="arraybuffer",qi.onopen=()=>{sessionStorage.getItem("reloaded")||(sessionStorage.setItem("reloaded","true"),window.location.reload())},qi.onmessage=e=>{if(e.data instanceof ArrayBuffer){const n=new Uint8Array(e.data);S3(n)}else console.warn("❓ Received non-binary data:",e.data)},qi.onerror=e=>{console.error("WebSocket error:",e)},qi.onclose=()=>{sessionStorage.removeItem("reloaded"),setTimeout(t,1e3)}};t()}function E3(t){qi&&qi.readyState===WebSocket.OPEN?qi.send(t):console.error("WebSocket is not open. Unable to send message.")}function D_(t){try{const e=JSON.stringify(t),n=T3(e);E3(n)}catch{}}function T3(t){return new TextEncoder().encode(t).buffer}let Ll,Hs,Ti;function Gs(t){!Ti||!rs.value||Ti.setMode(t)}function A3(t){rs.value=t,Ti&&(Ti.enabled=t,t||(Ti.detach(),_n.enabled=!0))}function C3(){return A3(!rs.value),rs.value}class P3{tControl;constructor(){this.tControl=new DA(Ft,Cn.domElement),Ot.add(this.tControl.getHelper()),this.setupEventListeners()}setupEventListeners(){this.tControl.addEventListener("dragging-changed",e=>{_n.enabled=!e.value}),window.addEventListener("keydown",e=>{if(!(e.altKey||e.ctrlKey||e.metaKey))switch(e.key){case"w":case"W":Gs("translate");break;case"e":case"E":Gs("rotate");break;case"r":case"R":Gs("scale");break;case"Escape":case"Esc":this.tControl.detach();break;case"p":case"P":C3();break}})}get controls(){return this.tControl}}class R3{raycaster;pickedObject;constructor(){this.raycaster=new d_,this.pickedObject=null}pick(e,n){if(!rs.value)return;this.raycaster.setFromCamera(e,Ft);const i=this.raycaster.intersectObjects(qn?Object.values(qn):[],!0);if(i.length){this.pickedObject=i[0].object,Ti.attach(this.pickedObject);const r=Object.keys(qn).find(o=>qn[o]===this.pickedObject);D_({dispatch:"object_picked",guid:r}),console.log("Picked object key:",r)}else this.pickedObject&&(this.pickedObject=null,Ti.detach(),R_(null))}}function D3(t){const e=Hs.getBoundingClientRect();return{x:(t.clientX-e.left)*(Hs.width/e.width),y:(t.clientY-e.top)*(Hs.height/e.height)}}function I3(t){const e=D3(t);Ll.x=e.x/Hs.width*2-1,Ll.y=e.y/Hs.height*-2+1}function L3(t){return Hs=document.querySelector("canvas"),Ll={x:0,y:0},Ti=new P3().controls,Ti.enabled=rs.value,window.addEventListener("mousedown",n=>{n.button===0&&(Ti.dragging||(I3(n),t.pick(Ll,Ot)))}),t}const bh=new Set;function I_(){if(En.backgroundOverrideMode!=="none"){En.backgroundMode=En.backgroundOverrideMode;return}En.backgroundMode=En.defaultBackgroundColor===En.darkBackgroundColor?"dark":"light"}function L_(){I_();const t=En.backgroundMode;bh.forEach(e=>e(t))}function Yf(t){return bh.add(t),t(Jf()),()=>{bh.delete(t)}}function ug(t){return En.backgroundOverrideMode=t,L_(),Jf()}function N3(){return Jf()==="dark"?ug("light"):ug("dark")}function Jf(){return I_(),En.backgroundMode}function U3(t){En.defaultBackgroundColor=t,L_()}function O3(){return En.backgroundOverrideMode==="dark"?En.darkBackgroundColor:En.backgroundOverrideMode==="light"?En.lightBackgroundColor:En.defaultBackgroundColor}Tt.DEFAULT_UP.set(0,0,1);const Ot=new gS,Ft=new Nn(60,window.innerWidth/window.innerHeight,.1,1e3);Ft.position.set(8,-15,15);Ft.zoom=1;const Cn=new gA({antialias:!0});Cn.setSize(window.innerWidth,window.innerHeight);Cn.setPixelRatio(window.devicePixelRatio);Cn.toneMapping=qh;Cn.shadowMap.enabled=!0;Cn.shadowMap.type=C0;Cn.toneMappingExposure=2.5;Cn.physicallyCorrectLights=!0;Cn.outputColorSpace=Hn;document.body.appendChild(Cn.domElement);const _n=new vA(Ft,Cn.domElement);_n.enableDamping=!0;_n.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:es.ROTATE};const F3={top:new P(0,0,1),bottom:new P(0,0,-1),front:new P(0,-1,0),back:new P(0,1,0),left:new P(-1,0,0),right:new P(1,0,0),front_left:new P(-1,-1,1),front_right:new P(1,-1,1),back_left:new P(-1,1,1),back_right:new P(1,1,1)},k3=new Map([["Numpad5","top"],["Numpad0","bottom"],["Numpad2","front"],["Numpad8","back"],["Numpad4","left"],["Numpad6","right"],["Numpad1","front_left"],["Numpad3","front_right"],["Numpad7","back_left"],["Numpad9","back_right"]]),N_=new p_(5);Ot.add(N_);const B3=new R3;L3(B3);function U_(){_n.update(),Cn.render(Ot,Ft)}Yf(()=>{Ot.background=new Ze(O3())});function O_(){U_(),requestAnimationFrame(O_)}O_();window.addEventListener("keydown",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=G3(t.code);e&&($f(e),t.preventDefault())});window.addEventListener("resize",()=>{Ft.aspect=window.innerWidth/window.innerHeight,Ft.updateProjectionMatrix(),Cn.setSize(window.innerWidth,window.innerHeight)});function $f(t){const e=_n.target.clone(),n=F3[t].clone().normalize(),i=Ft.position.distanceTo(e);Ft.position.copy(e.clone().add(n.multiplyScalar(i))),_n.update()}function Za(t){$f(t)}function z3(t){return{id:`view-${Date.now()}`,name:t,cameraPosition:{x:Ft.position.x,y:Ft.position.y,z:Ft.position.z},target:{x:_n.target.x,y:_n.target.y,z:_n.target.z},zoom:Ft.zoom,fov:Ft.fov}}function V3(t){Ft.position.set(t.cameraPosition.x,t.cameraPosition.y,t.cameraPosition.z),_n.target.set(t.target.x,t.target.y,t.target.z),Ft.zoom=t.zoom,Ft.fov=t.fov,Ft.updateProjectionMatrix(),_n.update()}function H3(t){U_();const e=document.createElement("a");e.download=`compas-view-${new Date().toISOString().replace(/[:.]/g,"-")}.png`,e.href=Cn.domElement.toDataURL("image/png"),e.click()}function G3(t){return k3.get(t)??null}function W3(t){switch(t.type.value){case"background_color":X3(t);break;case"controls_damping":_n.enableDamping=t.damping.value;break;case"world_axis":N_.visible=t.show.value;break;case"picker":rs.value=t.enabled.value;break;case"camera_fov":Ft.fov=t.fov.value,Ft.updateProjectionMatrix();break;case"camera_zoom":Ft.zoom=t.zoom.value,Ft.updateProjectionMatrix();break;case"camera_position":Ft.position.set(t.x.value,t.y.value,t.z.value),_n.update();break;case"camera_target":_n.target.set(t.x.value,t.y.value,t.z.value),_n.update();break;case"camera_view":{const e=t.preset.value;e&&$f(e);break}default:console.warn("Unknown scene type:",t.type.value)}}function X3(t){let e=t.color.value;e=e.replace("#","0x"),e=parseInt(e),U3(e)}function q3(t){const e=t.guid.value;if(e in qn){const n=qn[e];Ot.remove(n),delete qn[e]}e in ir&&delete ir[e]}const Y3={class:"toolbar-group"},J3=["title","onClick"],$3={key:1},K3={class:"toolbar-group"},Z3=["title","onClick"],Q3={key:1},j3={class:"toolbar-group"},eR=["title","onClick"],tR={key:1},nR={key:0,class:"saved-views-panel"},iR={class:"saved-views-controls"},rR=["value"],sR=["disabled"],hg="compas_threejs_saved_views",oR=Kt({__name:"Toolbar",setup(t){const e=Wt([]),n=Wt(""),i=Wt(!1),r=Wt(!1);let s=null;function o(){localStorage.setItem(hg,JSON.stringify(e.value))}function a(){const m=localStorage.getItem(hg);if(m)try{const d=JSON.parse(m);Array.isArray(d)&&(e.value=d)}catch{e.value=[]}}function l(){const m=e.value.find(d=>d.id===n.value);m&&V3(m)}function c(){if(!n.value)return;const m=e.value.filter(d=>d.id!==n.value);e.value=m,n.value=m[0]?.id??"",o()}const u=On([{id:"move",iconComponent:qy,tooltip:"Move (W)",active:!1},{id:"rotate",iconComponent:$y,tooltip:"Rotate (E)",active:!1},{id:"scale",iconComponent:Zy,tooltip:"Scale (R)",active:!1},{id:"toggle-movement",icon:"⏸",tooltip:"Play/Pause Movements (Space)",active:!1}]),h=On([{id:"view-top",iconComponent:Jy,tooltip:"Top View (5)"},{id:"view-front",iconComponent:Qy,tooltip:"Front View (2)"},{id:"view-right",iconComponent:Yy,tooltip:"Right View (6)"},{id:"view-perspective",iconComponent:Wy,tooltip:"Perspective View (3)"}]),f=On([{id:"save-view",iconComponent:Ky,tooltip:"Save Current View"},{id:"saved-views",iconComponent:Gy,tooltip:"Saved Views"},{id:"toggle-background",icon:"◐",tooltip:"Toggle Dark/Light Background",active:!1},{id:"save-screenshot",iconComponent:Xy,tooltip:"Save as PNG"}]),p=m=>{switch(m!=="toggle-movement"&&u.forEach(d=>{d.id!=="toggle-movement"&&(d.active=d.id===m)}),m){case"move":Gs("translate");break;case"rotate":Gs("rotate");break;case"scale":Gs("scale");break;case"toggle-movement":const d=u.find(_=>_.id===m);if(d){const _=x3();d.active=_,d.icon=_?"▶":"⏸"}break}},g=m=>{switch(m){case"view-top":Za("top");break;case"view-front":Za("front");break;case"view-right":Za("right");break;case"view-perspective":Za("front_right");break}},v=m=>{switch(m){case"save-view":{const _=`View ${e.value.length+1}`,y=window.prompt("Name for saved view",_);if(y===null)break;const b=y.trim()||_,T=z3(b);e.value=[...e.value,T],n.value=T.id,i.value=!0,o();break}case"saved-views":{i.value=!i.value;break}case"toggle-background":const d=f.find(_=>_.id==="toggle-background");if(d){const _=N3();d.active=_==="dark"}break;case"save-screenshot":H3();break}};return to(()=>{a(),s=Yf(d=>{r.value=d==="dark";const _=f.find(y=>y.id==="toggle-background");_&&(_.active=d==="dark")});const m=d=>{const _=d.key.toLowerCase();if(!(d.ctrlKey||d.metaKey||d.altKey))switch(_){case"w":d.preventDefault(),p("move");break;case"e":d.preventDefault(),p("rotate");break;case"r":d.preventDefault(),p("scale");break;case" ":d.preventDefault(),p("toggle-movement");break;case"2":d.preventDefault(),g("view-front");break;case"3":d.preventDefault(),g("view-perspective");break;case"5":d.preventDefault(),g("view-top");break;case"6":d.preventDefault(),g("view-right");break}};return document.addEventListener("keydown",m),()=>{document.removeEventListener("keydown",m)}}),zh(()=>{s&&(s(),s=null)}),(m,d)=>(Ye(),Lt("div",{class:Gn(["toolbar",{"is-dark":r.value}])},[jt("div",Y3,[(Ye(!0),Lt(kt,null,Sr(u,_=>(Ye(),Lt("button",{key:_.id,class:Gn(["toolbar-button",{active:_.active}]),title:_.tooltip,onClick:y=>p(_.id)},[jt("span",{class:Gn(["button-icon",{"front-icon":_.id==="view-front","pause-icon":_.id==="toggle-movement"&&_.icon==="⏸"}])},[_.iconComponent?(Ye(),Nt(nl(_.iconComponent),{key:0,size:16,"stroke-width":2,"aria-hidden":"true"})):(Ye(),Lt("span",$3,ii(_.icon),1))],2)],10,J3))),128))]),jt("div",K3,[(Ye(!0),Lt(kt,null,Sr(h,_=>(Ye(),Lt("button",{key:_.id,class:"toolbar-button",title:_.tooltip,onClick:y=>g(_.id)},[jt("span",{class:Gn(["button-icon",{"front-icon":_.id==="view-front","pause-icon":_.id==="toggle-movement"&&_.icon==="⏸"}])},[_.iconComponent?(Ye(),Nt(nl(_.iconComponent),{key:0,size:16,"stroke-width":2,"aria-hidden":"true"})):(Ye(),Lt("span",Q3,ii(_.icon),1))],2)],8,Z3))),128))]),jt("div",j3,[(Ye(!0),Lt(kt,null,Sr(f,_=>(Ye(),Lt("button",{key:_.id,class:Gn(["toolbar-button",{active:_.active}]),title:_.tooltip,onClick:y=>v(_.id)},[jt("span",{class:Gn(["button-icon",{"front-icon":_.id==="view-front","pause-icon":_.id==="toggle-movement"&&_.icon==="⏸"}])},[_.iconComponent?(Ye(),Nt(nl(_.iconComponent),{key:0,size:16,"stroke-width":2,"aria-hidden":"true"})):(Ye(),Lt("span",tR,ii(_.icon),1))],2)],10,eR))),128))]),i.value?(Ye(),Lt("div",nR,[jt("div",iR,[lx(jt("select",{"onUpdate:modelValue":d[0]||(d[0]=_=>n.value=_),class:"saved-views-select",onChange:l},[d[1]||(d[1]=jt("option",{disabled:"",value:""},"Select view",-1)),(Ye(!0),Lt(kt,null,Sr(e.value,_=>(Ye(),Lt("option",{key:_.id,value:_.id},ii(_.name),9,rR))),128))],544),[[Iy,n.value]]),jt("button",{class:"saved-view-delete",title:"Delete selected view",disabled:!n.value,onClick:c}," × ",8,sR)])])):Er("",!0)],2))}}),jl=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},aR=jl(oR,[["__scopeId","data-v-435580f2"]]);function F_(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=F_(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function k_(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=F_(t))&&(i&&(i+=" "),i+=e);return i}const fg=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,dg=k_,lR=(t,e)=>n=>{var i;if(e?.variants==null)return dg(t,n?.class,n?.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const u=n?.[c],h=s?.[c];if(u===null)return null;const f=fg(u)||fg(h);return r[c][f]}),a=n&&Object.entries(n).reduce((c,u)=>{let[h,f]=u;return f===void 0||(c[h]=f),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,u)=>{let{class:h,className:f,...p}=u;return Object.entries(p).every(g=>{let[v,m]=g;return Array.isArray(m)?m.includes({...s,...a}[v]):{...s,...a}[v]===m})?[...c,h,f]:c},[]);return dg(t,o,l,n?.class,n?.className)};function B_(t,e=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY){return Math.min(n,Math.max(e,t))}function Kf(t,e){const n=typeof t=="string"&&!e?`${t}Context`:e,i=Symbol(n);return[o=>{const a=Os(i,o);if(a||a===null)return a;throw new Error(`Injection \`${i.toString()}\` not found. Component must be used within ${Array.isArray(t)?`one of the following components: ${t.join(", ")}`:`\`${t}\``}`)},o=>(Fh(i,o),o)]}function z_(t){return t?t.flatMap(e=>e.type===kt?z_(e.children):[e]):[]}const[cR]=Kf("ConfigProvider");typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const uR=t=>typeof t<"u";function hR(t){return On(qt(t)?new Proxy({},{get(e,n,i){return ve(Reflect.get(t.value,n,i))},set(e,n,i){return qt(t.value[n])&&!qt(i)?t.value[n].value=i:t.value[n]=i,!0},deleteProperty(e,n){return Reflect.deleteProperty(t.value,n)},has(e,n){return Reflect.has(t.value,n)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}}):t)}function fR(t){return hR(pt(t))}function dR(t,...e){const n=e.flat(),i=n[0];return fR(()=>Object.fromEntries(typeof i=="function"?Object.entries(Wo(t)).filter(([r,s])=>!i(Nh(s),r)):Object.entries(Wo(t)).filter(r=>!n.includes(r[0]))))}function ec(t){var e;const n=Nh(t);return(e=n?.$el)!==null&&e!==void 0?e:n}function pR(){const t=$v(!1),e=no();return e&&to(()=>{t.value=!0},e),t}function mR(t){return JSON.parse(JSON.stringify(t))}function gR(t,e,n,i={}){var r,s;const{clone:o=!1,passive:a=!1,eventName:l,deep:c=!1,defaultValue:u,shouldEmit:h}=i,f=no(),p=n||f?.emit||(f==null||(r=f.$emit)===null||r===void 0?void 0:r.bind(f))||(f==null||(s=f.proxy)===null||s===void 0||(s=s.$emit)===null||s===void 0?void 0:s.bind(f?.proxy));let g=l;g=g||`update:${e.toString()}`;const v=_=>o?typeof o=="function"?o(_):mR(_):_,m=()=>uR(t[e])?v(t[e]):u,d=_=>{h?h(_)&&p(g,_):p(g,_)};if(a){const _=Wt(m());let y=!1;return jr(()=>t[e],b=>{y||(y=!0,_.value=v(b),Uh(()=>y=!1))}),jr(_,b=>{!y&&(b!==t[e]||c)&&d(b)},{deep:c}),_}else return pt({get(){return m()},set(_){d(_)}})}function _R(t){const e=cR({dir:Wt("ltr")});return pt(()=>t?.value||e.dir?.value||"ltr")}function vR(t){const e=no(),n=e?.type.emits,i={};return n?.length||console.warn(`No emitted event found. Please check component: ${e?.type.__name}`),n?.forEach(r=>{i[el(Fn(r))]=(...s)=>t(r,...s)}),i}function xR(t){return pt(()=>Nh(t)?!!ec(t)?.closest("form"):!0)}function cs(){const t=no(),e=Wt(),n=pt(()=>["#text","#comment"].includes(e.value?.$el.nodeName)?e.value?.$el.nextElementSibling:ec(e)),i=Object.assign({},t.exposed),r={};for(const o in t.props)Object.defineProperty(r,o,{enumerable:!0,configurable:!0,get:()=>t.props[o]});if(Object.keys(i).length>0)for(const o in i)Object.defineProperty(r,o,{enumerable:!0,configurable:!0,get:()=>i[o]});Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>t.vnode.el}),t.exposed=r;function s(o){if(e.value=o,!!o&&(Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>o instanceof Element?o:o.$el}),!(o instanceof Element)&&!Object.hasOwn(o,"$el"))){const a=o.$.exposed,l=Object.assign({},r);for(const c in a)Object.defineProperty(l,c,{enumerable:!0,configurable:!0,get:()=>a[c]});t.exposed=l}}return{forwardRef:s,currentRef:e,currentElement:n}}function yR(t){const e=no(),n=Object.keys(e?.type.props??{}).reduce((r,s)=>{const o=(e?.type.props[s]).default;return o!==void 0&&(r[s]=o),r},{}),i=ex(t);return pt(()=>{const r={},s=e?.vnode.props??{};return Object.keys(s).forEach(o=>{r[Fn(o)]=s[o]}),Object.keys({...n,...r}).reduce((o,a)=>(i.value[a]!==void 0&&(o[a]=i.value[a]),o),{})})}function bR(t,e){const n=yR(t),i=e?vR(e):{};return pt(()=>({...n.value,...i}))}function SR(t){const e=Wt(),n=pt(()=>e.value?.width??0),i=pt(()=>e.value?.height??0);return to(()=>{const r=ec(t);if(r){e.value={width:r.offsetWidth,height:r.offsetHeight};const s=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const a=o[0];let l,c;if("borderBoxSize"in a){const u=a.borderBoxSize,h=Array.isArray(u)?u[0]:u;l=h.inlineSize,c=h.blockSize}else l=r.offsetWidth,c=r.offsetHeight;e.value={width:l,height:c}});return s.observe(r,{box:"border-box"}),()=>s.unobserve(r)}else e.value=void 0}),{width:n,height:i}}const Sh=Kt({name:"PrimitiveSlot",inheritAttrs:!1,setup(t,{attrs:e,slots:n}){return()=>{if(!n.default)return null;const i=z_(n.default()),r=i.findIndex(l=>l.type!==Ci);if(r===-1)return i;const s=i[r];delete s.props?.ref;const o=s.props?Pi(e,s.props):e,a=ts({...s,props:{}},o);return i.length===1?a:(i[r]=a,i)}}}),MR=["area","img","input"],so=Kt({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(t,{attrs:e,slots:n}){const i=t.asChild?"template":t.as;return typeof i=="string"&&MR.includes(i)?()=>Tr(i,e):i!=="template"?()=>Tr(t.as,e,{default:n.default}):()=>Tr(Sh,e,{default:n.default})}});function Mh(){const t=Wt(),e=pt(()=>["#text","#comment"].includes(t.value?.$el.nodeName)?t.value?.$el.nextElementSibling:ec(t));return{primitiveElement:t,currentElement:e}}const pg="data-reka-collection-item";function Zf(t={}){const{key:e="",isProvider:n=!1}=t,i=`${e}CollectionProvider`;let r;n?(r={collectionRef:Wt(),itemMap:Wt(new Map)},Fh(i,r)):r=Os(i);const s=(u=!1)=>{const h=r.collectionRef.value;if(!h)return[];const f=Array.from(h.querySelectorAll(`[${pg}]`)),g=Array.from(r.itemMap.value.values()).sort((v,m)=>f.indexOf(v.ref)-f.indexOf(m.ref));return u?g:g.filter(v=>v.ref.dataset.disabled!=="")},o=Kt({name:"CollectionSlot",inheritAttrs:!1,setup(u,{slots:h,attrs:f}){const{primitiveElement:p,currentElement:g}=Mh();return jr(g,()=>{r.collectionRef.value=g.value}),()=>Tr(Sh,{ref:p,...f},h)}}),a=Kt({name:"CollectionItem",inheritAttrs:!1,props:{value:{validator:()=>!0}},setup(u,{slots:h,attrs:f}){const{primitiveElement:p,currentElement:g}=Mh();return hx(v=>{if(g.value){const m=Wg(g.value);r.itemMap.value.set(m,{ref:g.value,value:u.value}),v(()=>r.itemMap.value.delete(m))}}),()=>Tr(Sh,{...f,[pg]:"",ref:p},h)}}),l=pt(()=>Array.from(r.itemMap.value.values())),c=pt(()=>r.itemMap.value.size);return{getItems:s,reactiveItems:l,itemMapSize:c,CollectionSlot:o,CollectionItem:a}}var wR=Kt({__name:"VisuallyHidden",props:{feature:{type:String,required:!1,default:"focusable"},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){return(e,n)=>(Ye(),Nt(ve(so),{as:e.as,"as-child":e.asChild,"aria-hidden":e.feature==="focusable"?"true":void 0,"data-hidden":e.feature==="fully-hidden"?"":void 0,tabindex:e.feature==="fully-hidden"?"-1":void 0,style:{position:"absolute",border:0,width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",whiteSpace:"nowrap",wordWrap:"normal",top:"-1px",left:"-1px"}},{default:en(()=>[Di(e.$slots,"default")]),_:3},8,["as","as-child","aria-hidden","data-hidden","tabindex"]))}}),ER=wR,TR=Kt({inheritAttrs:!1,__name:"VisuallyHiddenInputBubble",props:{name:{type:String,required:!0},value:{type:null,required:!0},checked:{type:Boolean,required:!1,default:void 0},required:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},feature:{type:String,required:!1,default:"fully-hidden"}},setup(t){const e=t,{primitiveElement:n,currentElement:i}=Mh(),r=pt(()=>e.checked??e.value);return jr(r,(s,o)=>{if(!i.value)return;const a=i.value,l=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(l,"value").set;if(u&&s!==o){const h=new Event("input",{bubbles:!0}),f=new Event("change",{bubbles:!0});u.call(a,s),a.dispatchEvent(h),a.dispatchEvent(f)}}),(s,o)=>(Ye(),Nt(ER,Pi({ref_key:"primitiveElement",ref:n},{...e,...s.$attrs},{as:"input"}),null,16))}}),mg=TR,AR=Kt({inheritAttrs:!1,__name:"VisuallyHiddenInput",props:{name:{type:String,required:!0},value:{type:null,required:!0},checked:{type:Boolean,required:!1,default:void 0},required:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},feature:{type:String,required:!1,default:"fully-hidden"}},setup(t){const e=t,n=pt(()=>typeof e.value=="object"&&Array.isArray(e.value)&&e.value.length===0&&e.required),i=pt(()=>typeof e.value=="string"||typeof e.value=="number"||typeof e.value=="boolean"||e.value===null||e.value===void 0?[{name:e.name,value:e.value}]:typeof e.value=="object"&&Array.isArray(e.value)?e.value.flatMap((r,s)=>typeof r=="object"?Object.entries(r).map(([o,a])=>({name:`${e.name}[${s}][${o}]`,value:a})):{name:`${e.name}[${s}]`,value:r}):e.value!==null&&typeof e.value=="object"&&!Array.isArray(e.value)?Object.entries(e.value).map(([r,s])=>({name:`${e.name}[${r}]`,value:s})):[]);return(r,s)=>(Ye(),Lt(kt,null,[Er(" We render single input if it's required "),n.value?(Ye(),Nt(mg,Pi({key:r.name},{...e,...r.$attrs},{name:r.name,value:r.value}),null,16,["name","value"])):(Ye(!0),Lt(kt,{key:1},Sr(i.value,o=>(Ye(),Nt(mg,Pi({key:o.name},{ref_for:!0},{...e,...r.$attrs},{name:o.name,value:o.value}),null,16,["name","value"]))),128))],2112))}}),CR=AR;function PR(t=[],e,n){const i=[...t];return i[n]=e,i.sort((r,s)=>r-s)}function V_(t,e,n){const s=100/(n-e)*(t-e);return B_(s,0,100)}function RR(t,e){return e>2?`Value ${t+1} of ${e}`:e===2?["Minimum","Maximum"][t]:void 0}function DR(t,e){if(t.length===1)return 0;const n=t.map(r=>Math.abs(r-e)),i=Math.min(...n);return n.indexOf(i)}function IR(t,e,n){const i=t/2,s=Qf([0,50],[0,i]);return(i-s(e)*n)*n}function LR(t){return t.slice(0,-1).map((e,n)=>t[n+1]-e)}function NR(t,e){if(e>0){const n=LR(t);return Math.min(...n)>=e}return!0}function Qf(t,e){return n=>{if(t[0]===t[1]||e[0]===e[1])return e[0];const i=(e[1]-e[0])/(t[1]-t[0]);return e[0]+i*(n-t[0])}}function UR(t){return(String(t).split(".")[1]||"").length}function OR(t,e){const n=10**e;return Math.round(t*n)/n}const H_=["PageUp","PageDown"],G_=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],W_={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageUp","ArrowUp","ArrowLeft"]},[X_,q_]=Kf(["SliderVertical","SliderHorizontal"]);var FR=Kt({__name:"SliderHorizontal",props:{dir:{type:String,required:!1},min:{type:Number,required:!0},max:{type:Number,required:!0},inverted:{type:Boolean,required:!0}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(t,{emit:e}){const n=t,i=e,{max:r,min:s,dir:o,inverted:a}=Wo(n),{forwardRef:l,currentElement:c}=cs(),u=oo(),h=Wt(),f=Wt(),p=pt(()=>o?.value!=="rtl"&&!a.value||o?.value!=="ltr"&&a.value);function g(_,y){const b=f.value||c.value.getBoundingClientRect(),T=[...u.thumbElements.value][u.valueIndexToChangeRef.value],C=u.thumbAlignment.value==="contain"?T.clientWidth:0;!h.value&&!y&&u.thumbAlignment.value==="contain"&&(h.value=_.clientX-T.getBoundingClientRect().left);const D=[0,b.width-C],R=p.value?[s.value,r.value]:[r.value,s.value],S=Qf(D,R);f.value=b;const M=y?_.clientX-b.left-C/2:_.clientX-b.left-(h.value??0);return S(M)}const v=pt(()=>p.value?"left":"right"),m=pt(()=>p.value?"right":"left"),d=pt(()=>p.value?1:-1);return q_({startEdge:v,endEdge:m,direction:d,size:"width"}),(_,y)=>(Ye(),Nt(Y_,{ref:ve(l),dir:ve(o),"data-orientation":"horizontal",style:eo({"--reka-slider-thumb-transform":!p.value&&ve(u).thumbAlignment.value==="overflow"?"translateX(50%)":"translateX(-50%)"}),onSlideStart:y[0]||(y[0]=b=>{const T=g(b,!0);i("slideStart",T)}),onSlideMove:y[1]||(y[1]=b=>{const T=g(b);i("slideMove",T)}),onSlideEnd:y[2]||(y[2]=()=>{f.value=void 0,h.value=void 0,i("slideEnd")}),onStepKeyDown:y[3]||(y[3]=b=>{const T=p.value?"from-left":"from-right",C=ve(W_)[T].includes(b.key);i("stepKeyDown",b,C?-1:1)}),onEndKeyDown:y[4]||(y[4]=b=>i("endKeyDown",b)),onHomeKeyDown:y[5]||(y[5]=b=>i("homeKeyDown",b))},{default:en(()=>[Di(_.$slots,"default")]),_:3},8,["dir","style"]))}}),kR=FR,BR=Kt({__name:"SliderVertical",props:{min:{type:Number,required:!0},max:{type:Number,required:!0},inverted:{type:Boolean,required:!0}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(t,{emit:e}){const n=t,i=e,{max:r,min:s,inverted:o}=Wo(n),a=oo(),{forwardRef:l,currentElement:c}=cs(),u=Wt(),h=Wt(),f=pt(()=>!o.value);function p(d,_){const y=h.value||c.value.getBoundingClientRect(),b=[...a.thumbElements.value][a.valueIndexToChangeRef.value],T=a.thumbAlignment.value==="contain"?b.clientHeight:0;!u.value&&!_&&a.thumbAlignment.value==="contain"&&(u.value=d.clientY-b.getBoundingClientRect().top);const C=[0,y.height-T],D=f.value?[r.value,s.value]:[s.value,r.value],R=Qf(C,D),S=_?d.clientY-y.top-T/2:d.clientY-y.top-(u.value??0);return h.value=y,R(S)}const g=pt(()=>f.value?"bottom":"top"),v=pt(()=>f.value?"top":"bottom"),m=pt(()=>f.value?1:-1);return q_({startEdge:g,endEdge:v,direction:m,size:"height"}),(d,_)=>(Ye(),Nt(Y_,{ref:ve(l),"data-orientation":"vertical",style:eo({"--reka-slider-thumb-transform":!f.value&&ve(a).thumbAlignment.value==="overflow"?"translateY(-50%)":"translateY(50%)"}),onSlideStart:_[0]||(_[0]=y=>{const b=p(y,!0);i("slideStart",b)}),onSlideMove:_[1]||(_[1]=y=>{const b=p(y);i("slideMove",b)}),onSlideEnd:_[2]||(_[2]=()=>{h.value=void 0,u.value=void 0,i("slideEnd")}),onStepKeyDown:_[3]||(_[3]=y=>{const b=f.value?"from-bottom":"from-top",T=ve(W_)[b].includes(y.key);i("stepKeyDown",y,T?-1:1)}),onEndKeyDown:_[4]||(_[4]=y=>i("endKeyDown",y)),onHomeKeyDown:_[5]||(_[5]=y=>i("homeKeyDown",y))},{default:en(()=>[Di(d.$slots,"default")]),_:3},8,["style"]))}}),zR=BR;const[oo,VR]=Kf("SliderRoot");var HR=Kt({inheritAttrs:!1,__name:"SliderRoot",props:{defaultValue:{type:Array,required:!1,default:()=>[0]},modelValue:{type:[Array,null],required:!1},disabled:{type:Boolean,required:!1,default:!1},orientation:{type:String,required:!1,default:"horizontal"},dir:{type:String,required:!1},inverted:{type:Boolean,required:!1,default:!1},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},step:{type:Number,required:!1,default:1},minStepsBetweenThumbs:{type:Number,required:!1,default:0},thumbAlignment:{type:String,required:!1,default:"contain"},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue","valueCommit"],setup(t,{emit:e}){const n=t,i=e,{min:r,max:s,step:o,minStepsBetweenThumbs:a,orientation:l,disabled:c,thumbAlignment:u,dir:h}=Wo(n),f=_R(h),{forwardRef:p,currentElement:g}=cs(),v=xR(g),{CollectionSlot:m}=Zf({isProvider:!0}),d=gR(n,"modelValue",i,{defaultValue:n.defaultValue,passive:n.modelValue===void 0}),_=pt(()=>Array.isArray(d.value)?[...d.value]:[]),y=Wt(0),b=Wt(_.value);function T(M){const L=DR(_.value,M);R(M,L)}function C(M){R(M,y.value)}function D(){const M=b.value[y.value];_.value[y.value]!==M&&i("valueCommit",_t(_.value))}function R(M,L,{commit:V}={commit:!1}){const q=UR(o.value),j=OR(Math.round((M-r.value)/o.value)*o.value+r.value,q),J=B_(j,r.value,s.value),W=PR(_.value,J,L);if(NR(W,a.value*o.value)){y.value=W.indexOf(J);const k=String(W)!==String(d.value);k&&V&&i("valueCommit",W),k&&(S.value[y.value]?.focus(),d.value=W)}}const S=Wt([]);return VR({modelValue:d,currentModelValue:_,valueIndexToChangeRef:y,thumbElements:S,orientation:l,min:r,max:s,disabled:c,thumbAlignment:u}),(M,L)=>(Ye(),Nt(ve(m),null,{default:en(()=>[(Ye(),Nt(nl(ve(l)==="horizontal"?kR:zR),Pi(M.$attrs,{ref:ve(p),"as-child":M.asChild,as:M.as,min:ve(r),max:ve(s),dir:ve(f),inverted:M.inverted,"aria-disabled":ve(c),"data-disabled":ve(c)?"":void 0,onPointerdown:L[0]||(L[0]=()=>{ve(c)||(b.value=_.value)}),onSlideStart:L[1]||(L[1]=V=>!ve(c)&&T(V)),onSlideMove:L[2]||(L[2]=V=>!ve(c)&&C(V)),onSlideEnd:L[3]||(L[3]=V=>!ve(c)&&D()),onHomeKeyDown:L[4]||(L[4]=V=>!ve(c)&&R(ve(r),0,{commit:!0})),onEndKeyDown:L[5]||(L[5]=V=>!ve(c)&&R(ve(s),_.value.length-1,{commit:!0})),onStepKeyDown:L[6]||(L[6]=(V,q)=>{if(!ve(c)){const W=ve(H_).includes(V.key)||V.shiftKey&&ve(G_).includes(V.key)?10:1,k=y.value,H=_.value[k],ce=ve(o)*W*q;R(H+ce,k,{commit:!0})}})}),{default:en(()=>[Di(M.$slots,"default",{modelValue:ve(d)}),ve(v)&&M.name?(Ye(),Nt(ve(CR),{key:0,type:"number",value:ve(d),name:M.name,required:M.required,disabled:ve(c),step:ve(o)},null,8,["value","name","required","disabled","step"])):Er("v-if",!0)]),_:3},16,["as-child","as","min","max","dir","inverted","aria-disabled","data-disabled"]))]),_:3}))}}),GR=HR,WR=Kt({__name:"SliderImpl",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},emits:["slideStart","slideMove","slideEnd","homeKeyDown","endKeyDown","stepKeyDown"],setup(t,{emit:e}){const n=t,i=e,r=oo();return(s,o)=>(Ye(),Nt(ve(so),Pi({"data-slider-impl":""},n,{onKeydown:o[0]||(o[0]=a=>{a.key==="Home"?(i("homeKeyDown",a),a.preventDefault()):a.key==="End"?(i("endKeyDown",a),a.preventDefault()):ve(H_).concat(ve(G_)).includes(a.key)&&(i("stepKeyDown",a),a.preventDefault())}),onPointerdown:o[1]||(o[1]=a=>{const l=a.target;l.setPointerCapture(a.pointerId),a.preventDefault(),ve(r).thumbElements.value.includes(l)?l.focus():i("slideStart",a)}),onPointermove:o[2]||(o[2]=a=>{a.target.hasPointerCapture(a.pointerId)&&i("slideMove",a)}),onPointerup:o[3]||(o[3]=a=>{const l=a.target;l.hasPointerCapture(a.pointerId)&&(l.releasePointerCapture(a.pointerId),i("slideEnd",a))})}),{default:en(()=>[Di(s.$slots,"default")]),_:3},16))}}),Y_=WR,XR=Kt({__name:"SliderRange",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const e=oo(),n=X_();cs();const i=pt(()=>e.currentModelValue.value.map(o=>V_(o,e.min.value,e.max.value))),r=pt(()=>e.currentModelValue.value.length>1?Math.min(...i.value):0),s=pt(()=>100-Math.max(...i.value,0));return(o,a)=>(Ye(),Nt(ve(so),{"data-disabled":ve(e).disabled.value?"":void 0,"data-orientation":ve(e).orientation.value,"as-child":o.asChild,as:o.as,style:eo({[ve(n).startEdge.value]:`${r.value}%`,[ve(n).endEdge.value]:`${s.value}%`})},{default:en(()=>[Di(o.$slots,"default")]),_:3},8,["data-disabled","data-orientation","as-child","as","style"]))}}),qR=XR,YR=Kt({inheritAttrs:!1,__name:"SliderThumbImpl",props:{index:{type:Number,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const e=t,n=oo(),i=X_(),{forwardRef:r,currentElement:s}=cs(),{CollectionItem:o}=Zf(),a=pt(()=>n.modelValue?.value?.[e.index]),l=pt(()=>a.value===void 0?0:V_(a.value,n.min.value??0,n.max.value??100)),c=pt(()=>RR(e.index,n.modelValue?.value?.length??0)),u=SR(s),h=pt(()=>u[i.size].value),f=pt(()=>n.thumbAlignment.value==="overflow"||!h.value?0:IR(h.value,l.value,i.direction.value)),p=pR();return to(()=>{n.thumbElements.value.push(s.value)}),Vh(()=>{const g=n.thumbElements.value.findIndex(v=>v===s.value)??-1;n.thumbElements.value.splice(g,1)}),(g,v)=>(Ye(),Nt(ve(o),null,{default:en(()=>[Xt(ve(so),Pi(g.$attrs,{ref:ve(r),role:"slider",tabindex:ve(n).disabled.value?void 0:0,"aria-label":g.$attrs["aria-label"]||c.value,"data-disabled":ve(n).disabled.value?"":void 0,"data-orientation":ve(n).orientation.value,"aria-valuenow":a.value,"aria-valuemin":ve(n).min.value,"aria-valuemax":ve(n).max.value,"aria-orientation":ve(n).orientation.value,"as-child":g.asChild,as:g.as,style:{transform:"var(--reka-slider-thumb-transform)",position:"absolute",[ve(i).startEdge.value]:`calc(${l.value}% + ${f.value}px)`,display:!ve(p)&&a.value===void 0?"none":void 0},onFocus:v[0]||(v[0]=()=>{ve(n).valueIndexToChangeRef.value=g.index})}),{default:en(()=>[Di(g.$slots,"default")]),_:3},16,["tabindex","aria-label","data-disabled","data-orientation","aria-valuenow","aria-valuemin","aria-valuemax","aria-orientation","as-child","as","style"])]),_:3}))}}),JR=YR,$R=Kt({__name:"SliderThumb",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const e=t,{getItems:n}=Zf(),{forwardRef:i,currentElement:r}=cs(),s=pt(()=>r.value?n(!0).findIndex(o=>o.ref===r.value):-1);return(o,a)=>(Ye(),Nt(JR,Pi({ref:ve(i)},e,{index:s.value}),{default:en(()=>[Di(o.$slots,"default")]),_:3},16,["index"]))}}),KR=$R,ZR=Kt({__name:"SliderTrack",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const e=oo();return cs(),(n,i)=>(Ye(),Nt(ve(so),{"as-child":n.asChild,as:n.as,"data-disabled":ve(e).disabled.value?"":void 0,"data-orientation":ve(e).orientation.value},{default:en(()=>[Di(n.$slots,"default")]),_:3},8,["as-child","as","data-disabled","data-orientation"]))}}),QR=ZR;const jR=(t,e)=>{const n=new Array(t.length+e.length);for(let i=0;i<t.length;i++)n[i]=t[i];for(let i=0;i<e.length;i++)n[t.length+i]=e[i];return n},e2=(t,e)=>({classGroupId:t,validator:e}),J_=(t=new Map,e=null,n)=>({nextPart:t,validators:e,classGroupId:n}),Nl="-",gg=[],t2="arbitrary..",n2=t=>{const e=r2(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{if(o.startsWith("[")&&o.endsWith("]"))return i2(o);const a=o.split(Nl),l=a[0]===""&&a.length>1?1:0;return $_(a,l,e)},getConflictingClassGroupIds:(o,a)=>{if(a){const l=i[o],c=n[o];return l?c?jR(c,l):l:c||gg}return n[o]||gg}}},$_=(t,e,n)=>{if(t.length-e===0)return n.classGroupId;const r=t[e],s=n.nextPart.get(r);if(s){const c=$_(t,e+1,s);if(c)return c}const o=n.validators;if(o===null)return;const a=e===0?t.join(Nl):t.slice(e).join(Nl),l=o.length;for(let c=0;c<l;c++){const u=o[c];if(u.validator(a))return u.classGroupId}},i2=t=>t.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=t.slice(1,-1),n=e.indexOf(":"),i=e.slice(0,n);return i?t2+i:void 0})(),r2=t=>{const{theme:e,classGroups:n}=t;return s2(n,e)},s2=(t,e)=>{const n=J_();for(const i in t){const r=t[i];jf(r,n,i,e)}return n},jf=(t,e,n,i)=>{const r=t.length;for(let s=0;s<r;s++){const o=t[s];o2(o,e,n,i)}},o2=(t,e,n,i)=>{if(typeof t=="string"){a2(t,e,n);return}if(typeof t=="function"){l2(t,e,n,i);return}c2(t,e,n,i)},a2=(t,e,n)=>{const i=t===""?e:K_(e,t);i.classGroupId=n},l2=(t,e,n,i)=>{if(u2(t)){jf(t(i),e,n,i);return}e.validators===null&&(e.validators=[]),e.validators.push(e2(n,t))},c2=(t,e,n,i)=>{const r=Object.entries(t),s=r.length;for(let o=0;o<s;o++){const[a,l]=r[o];jf(l,K_(e,a),n,i)}},K_=(t,e)=>{let n=t;const i=e.split(Nl),r=i.length;for(let s=0;s<r;s++){const o=i[s];let a=n.nextPart.get(o);a||(a=J_(),n.nextPart.set(o,a)),n=a}return n},u2=t=>"isThemeGetter"in t&&t.isThemeGetter===!0,h2=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=Object.create(null),i=Object.create(null);const r=(s,o)=>{n[s]=o,e++,e>t&&(e=0,i=n,n=Object.create(null))};return{get(s){let o=n[s];if(o!==void 0)return o;if((o=i[s])!==void 0)return r(s,o),o},set(s,o){s in n?n[s]=o:r(s,o)}}},wh="!",_g=":",f2=[],vg=(t,e,n,i,r)=>({modifiers:t,hasImportantModifier:e,baseClassName:n,maybePostfixModifierPosition:i,isExternal:r}),d2=t=>{const{prefix:e,experimentalParseClassName:n}=t;let i=r=>{const s=[];let o=0,a=0,l=0,c;const u=r.length;for(let v=0;v<u;v++){const m=r[v];if(o===0&&a===0){if(m===_g){s.push(r.slice(l,v)),l=v+1;continue}if(m==="/"){c=v;continue}}m==="["?o++:m==="]"?o--:m==="("?a++:m===")"&&a--}const h=s.length===0?r:r.slice(l);let f=h,p=!1;h.endsWith(wh)?(f=h.slice(0,-1),p=!0):h.startsWith(wh)&&(f=h.slice(1),p=!0);const g=c&&c>l?c-l:void 0;return vg(s,p,f,g)};if(e){const r=e+_g,s=i;i=o=>o.startsWith(r)?s(o.slice(r.length)):vg(f2,!1,o,void 0,!0)}if(n){const r=i;i=s=>n({className:s,parseClassName:r})}return i},p2=t=>{const e=new Map;return t.orderSensitiveModifiers.forEach((n,i)=>{e.set(n,1e6+i)}),n=>{const i=[];let r=[];for(let s=0;s<n.length;s++){const o=n[s],a=o[0]==="[",l=e.has(o);a||l?(r.length>0&&(r.sort(),i.push(...r),r=[]),i.push(o)):r.push(o)}return r.length>0&&(r.sort(),i.push(...r)),i}},m2=t=>({cache:h2(t.cacheSize),parseClassName:d2(t),sortModifiers:p2(t),...n2(t)}),g2=/\s+/,_2=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r,sortModifiers:s}=e,o=[],a=t.trim().split(g2);let l="";for(let c=a.length-1;c>=0;c-=1){const u=a[c],{isExternal:h,modifiers:f,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:v}=n(u);if(h){l=u+(l.length>0?" "+l:l);continue}let m=!!v,d=i(m?g.substring(0,v):g);if(!d){if(!m){l=u+(l.length>0?" "+l:l);continue}if(d=i(g),!d){l=u+(l.length>0?" "+l:l);continue}m=!1}const _=f.length===0?"":f.length===1?f[0]:s(f).join(":"),y=p?_+wh:_,b=y+d;if(o.indexOf(b)>-1)continue;o.push(b);const T=r(d,m);for(let C=0;C<T.length;++C){const D=T[C];o.push(y+D)}l=u+(l.length>0?" "+l:l)}return l},v2=(...t)=>{let e=0,n,i,r="";for(;e<t.length;)(n=t[e++])&&(i=Z_(n))&&(r&&(r+=" "),r+=i);return r},Z_=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=Z_(t[i]))&&(n&&(n+=" "),n+=e);return n},x2=(t,...e)=>{let n,i,r,s;const o=l=>{const c=e.reduce((u,h)=>h(u),t());return n=m2(c),i=n.cache.get,r=n.cache.set,s=a,a(l)},a=l=>{const c=i(l);if(c)return c;const u=_2(l,n);return r(l,u),u};return s=o,(...l)=>s(v2(...l))},y2=[],Qt=t=>{const e=n=>n[t]||y2;return e.isThemeGetter=!0,e},Q_=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,j_=/^\((?:(\w[\w-]*):)?(.+)\)$/i,b2=/^\d+\/\d+$/,S2=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,M2=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,w2=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,E2=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,T2=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ts=t=>b2.test(t),lt=t=>!!t&&!Number.isNaN(Number(t)),fr=t=>!!t&&Number.isInteger(Number(t)),ou=t=>t.endsWith("%")&&lt(t.slice(0,-1)),Hi=t=>S2.test(t),A2=()=>!0,C2=t=>M2.test(t)&&!w2.test(t),ev=()=>!1,P2=t=>E2.test(t),R2=t=>T2.test(t),D2=t=>!Oe(t)&&!Fe(t),I2=t=>ao(t,iv,ev),Oe=t=>Q_.test(t),Gr=t=>ao(t,rv,C2),au=t=>ao(t,F2,lt),xg=t=>ao(t,tv,ev),L2=t=>ao(t,nv,R2),Qa=t=>ao(t,sv,P2),Fe=t=>j_.test(t),Mo=t=>lo(t,rv),N2=t=>lo(t,k2),yg=t=>lo(t,tv),U2=t=>lo(t,iv),O2=t=>lo(t,nv),ja=t=>lo(t,sv,!0),ao=(t,e,n)=>{const i=Q_.exec(t);return i?i[1]?e(i[1]):n(i[2]):!1},lo=(t,e,n=!1)=>{const i=j_.exec(t);return i?i[1]?e(i[1]):n:!1},tv=t=>t==="position"||t==="percentage",nv=t=>t==="image"||t==="url",iv=t=>t==="length"||t==="size"||t==="bg-size",rv=t=>t==="length",F2=t=>t==="number",k2=t=>t==="family-name",sv=t=>t==="shadow",B2=()=>{const t=Qt("color"),e=Qt("font"),n=Qt("text"),i=Qt("font-weight"),r=Qt("tracking"),s=Qt("leading"),o=Qt("breakpoint"),a=Qt("container"),l=Qt("spacing"),c=Qt("radius"),u=Qt("shadow"),h=Qt("inset-shadow"),f=Qt("text-shadow"),p=Qt("drop-shadow"),g=Qt("blur"),v=Qt("perspective"),m=Qt("aspect"),d=Qt("ease"),_=Qt("animate"),y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],b=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],T=()=>[...b(),Fe,Oe],C=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto","contain","none"],R=()=>[Fe,Oe,l],S=()=>[Ts,"full","auto",...R()],M=()=>[fr,"none","subgrid",Fe,Oe],L=()=>["auto",{span:["full",fr,Fe,Oe]},fr,Fe,Oe],V=()=>[fr,"auto",Fe,Oe],q=()=>["auto","min","max","fr",Fe,Oe],j=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],J=()=>["start","end","center","stretch","center-safe","end-safe"],W=()=>["auto",...R()],k=()=>[Ts,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...R()],H=()=>[t,Fe,Oe],ce=()=>[...b(),yg,xg,{position:[Fe,Oe]}],pe=()=>["no-repeat",{repeat:["","x","y","space","round"]}],fe=()=>["auto","cover","contain",U2,I2,{size:[Fe,Oe]}],ke=()=>[ou,Mo,Gr],Le=()=>["","none","full",c,Fe,Oe],Qe=()=>["",lt,Mo,Gr],ut=()=>["solid","dashed","dotted","double"],se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],oe=()=>[lt,ou,yg,xg],Ce=()=>["","none",g,Fe,Oe],Ve=()=>["none",lt,Fe,Oe],Me=()=>["none",lt,Fe,Oe],at=()=>[lt,Fe,Oe],I=()=>[Ts,"full",...R()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Hi],breakpoint:[Hi],color:[A2],container:[Hi],"drop-shadow":[Hi],ease:["in","out","in-out"],font:[D2],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Hi],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Hi],shadow:[Hi],spacing:["px",lt],text:[Hi],"text-shadow":[Hi],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ts,Oe,Fe,m]}],container:["container"],columns:[{columns:[lt,Oe,Fe,a]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:T()}],overflow:[{overflow:C()}],"overflow-x":[{"overflow-x":C()}],"overflow-y":[{"overflow-y":C()}],overscroll:[{overscroll:D()}],"overscroll-x":[{"overscroll-x":D()}],"overscroll-y":[{"overscroll-y":D()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:S()}],"inset-x":[{"inset-x":S()}],"inset-y":[{"inset-y":S()}],start:[{start:S()}],end:[{end:S()}],top:[{top:S()}],right:[{right:S()}],bottom:[{bottom:S()}],left:[{left:S()}],visibility:["visible","invisible","collapse"],z:[{z:[fr,"auto",Fe,Oe]}],basis:[{basis:[Ts,"full","auto",a,...R()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[lt,Ts,"auto","initial","none",Oe]}],grow:[{grow:["",lt,Fe,Oe]}],shrink:[{shrink:["",lt,Fe,Oe]}],order:[{order:[fr,"first","last","none",Fe,Oe]}],"grid-cols":[{"grid-cols":M()}],"col-start-end":[{col:L()}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":M()}],"row-start-end":[{row:L()}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":q()}],"auto-rows":[{"auto-rows":q()}],gap:[{gap:R()}],"gap-x":[{"gap-x":R()}],"gap-y":[{"gap-y":R()}],"justify-content":[{justify:[...j(),"normal"]}],"justify-items":[{"justify-items":[...J(),"normal"]}],"justify-self":[{"justify-self":["auto",...J()]}],"align-content":[{content:["normal",...j()]}],"align-items":[{items:[...J(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...J(),{baseline:["","last"]}]}],"place-content":[{"place-content":j()}],"place-items":[{"place-items":[...J(),"baseline"]}],"place-self":[{"place-self":["auto",...J()]}],p:[{p:R()}],px:[{px:R()}],py:[{py:R()}],ps:[{ps:R()}],pe:[{pe:R()}],pt:[{pt:R()}],pr:[{pr:R()}],pb:[{pb:R()}],pl:[{pl:R()}],m:[{m:W()}],mx:[{mx:W()}],my:[{my:W()}],ms:[{ms:W()}],me:[{me:W()}],mt:[{mt:W()}],mr:[{mr:W()}],mb:[{mb:W()}],ml:[{ml:W()}],"space-x":[{"space-x":R()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":R()}],"space-y-reverse":["space-y-reverse"],size:[{size:k()}],w:[{w:[a,"screen",...k()]}],"min-w":[{"min-w":[a,"screen","none",...k()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[o]},...k()]}],h:[{h:["screen","lh",...k()]}],"min-h":[{"min-h":["screen","lh","none",...k()]}],"max-h":[{"max-h":["screen","lh",...k()]}],"font-size":[{text:["base",n,Mo,Gr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,Fe,au]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ou,Oe]}],"font-family":[{font:[N2,Oe,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[r,Fe,Oe]}],"line-clamp":[{"line-clamp":[lt,"none",Fe,au]}],leading:[{leading:[s,...R()]}],"list-image":[{"list-image":["none",Fe,Oe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Fe,Oe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:H()}],"text-color":[{text:H()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ut(),"wavy"]}],"text-decoration-thickness":[{decoration:[lt,"from-font","auto",Fe,Gr]}],"text-decoration-color":[{decoration:H()}],"underline-offset":[{"underline-offset":[lt,"auto",Fe,Oe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Fe,Oe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Fe,Oe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ce()}],"bg-repeat":[{bg:pe()}],"bg-size":[{bg:fe()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},fr,Fe,Oe],radial:["",Fe,Oe],conic:[fr,Fe,Oe]},O2,L2]}],"bg-color":[{bg:H()}],"gradient-from-pos":[{from:ke()}],"gradient-via-pos":[{via:ke()}],"gradient-to-pos":[{to:ke()}],"gradient-from":[{from:H()}],"gradient-via":[{via:H()}],"gradient-to":[{to:H()}],rounded:[{rounded:Le()}],"rounded-s":[{"rounded-s":Le()}],"rounded-e":[{"rounded-e":Le()}],"rounded-t":[{"rounded-t":Le()}],"rounded-r":[{"rounded-r":Le()}],"rounded-b":[{"rounded-b":Le()}],"rounded-l":[{"rounded-l":Le()}],"rounded-ss":[{"rounded-ss":Le()}],"rounded-se":[{"rounded-se":Le()}],"rounded-ee":[{"rounded-ee":Le()}],"rounded-es":[{"rounded-es":Le()}],"rounded-tl":[{"rounded-tl":Le()}],"rounded-tr":[{"rounded-tr":Le()}],"rounded-br":[{"rounded-br":Le()}],"rounded-bl":[{"rounded-bl":Le()}],"border-w":[{border:Qe()}],"border-w-x":[{"border-x":Qe()}],"border-w-y":[{"border-y":Qe()}],"border-w-s":[{"border-s":Qe()}],"border-w-e":[{"border-e":Qe()}],"border-w-t":[{"border-t":Qe()}],"border-w-r":[{"border-r":Qe()}],"border-w-b":[{"border-b":Qe()}],"border-w-l":[{"border-l":Qe()}],"divide-x":[{"divide-x":Qe()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Qe()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ut(),"hidden","none"]}],"divide-style":[{divide:[...ut(),"hidden","none"]}],"border-color":[{border:H()}],"border-color-x":[{"border-x":H()}],"border-color-y":[{"border-y":H()}],"border-color-s":[{"border-s":H()}],"border-color-e":[{"border-e":H()}],"border-color-t":[{"border-t":H()}],"border-color-r":[{"border-r":H()}],"border-color-b":[{"border-b":H()}],"border-color-l":[{"border-l":H()}],"divide-color":[{divide:H()}],"outline-style":[{outline:[...ut(),"none","hidden"]}],"outline-offset":[{"outline-offset":[lt,Fe,Oe]}],"outline-w":[{outline:["",lt,Mo,Gr]}],"outline-color":[{outline:H()}],shadow:[{shadow:["","none",u,ja,Qa]}],"shadow-color":[{shadow:H()}],"inset-shadow":[{"inset-shadow":["none",h,ja,Qa]}],"inset-shadow-color":[{"inset-shadow":H()}],"ring-w":[{ring:Qe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:H()}],"ring-offset-w":[{"ring-offset":[lt,Gr]}],"ring-offset-color":[{"ring-offset":H()}],"inset-ring-w":[{"inset-ring":Qe()}],"inset-ring-color":[{"inset-ring":H()}],"text-shadow":[{"text-shadow":["none",f,ja,Qa]}],"text-shadow-color":[{"text-shadow":H()}],opacity:[{opacity:[lt,Fe,Oe]}],"mix-blend":[{"mix-blend":[...se(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":se()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[lt]}],"mask-image-linear-from-pos":[{"mask-linear-from":oe()}],"mask-image-linear-to-pos":[{"mask-linear-to":oe()}],"mask-image-linear-from-color":[{"mask-linear-from":H()}],"mask-image-linear-to-color":[{"mask-linear-to":H()}],"mask-image-t-from-pos":[{"mask-t-from":oe()}],"mask-image-t-to-pos":[{"mask-t-to":oe()}],"mask-image-t-from-color":[{"mask-t-from":H()}],"mask-image-t-to-color":[{"mask-t-to":H()}],"mask-image-r-from-pos":[{"mask-r-from":oe()}],"mask-image-r-to-pos":[{"mask-r-to":oe()}],"mask-image-r-from-color":[{"mask-r-from":H()}],"mask-image-r-to-color":[{"mask-r-to":H()}],"mask-image-b-from-pos":[{"mask-b-from":oe()}],"mask-image-b-to-pos":[{"mask-b-to":oe()}],"mask-image-b-from-color":[{"mask-b-from":H()}],"mask-image-b-to-color":[{"mask-b-to":H()}],"mask-image-l-from-pos":[{"mask-l-from":oe()}],"mask-image-l-to-pos":[{"mask-l-to":oe()}],"mask-image-l-from-color":[{"mask-l-from":H()}],"mask-image-l-to-color":[{"mask-l-to":H()}],"mask-image-x-from-pos":[{"mask-x-from":oe()}],"mask-image-x-to-pos":[{"mask-x-to":oe()}],"mask-image-x-from-color":[{"mask-x-from":H()}],"mask-image-x-to-color":[{"mask-x-to":H()}],"mask-image-y-from-pos":[{"mask-y-from":oe()}],"mask-image-y-to-pos":[{"mask-y-to":oe()}],"mask-image-y-from-color":[{"mask-y-from":H()}],"mask-image-y-to-color":[{"mask-y-to":H()}],"mask-image-radial":[{"mask-radial":[Fe,Oe]}],"mask-image-radial-from-pos":[{"mask-radial-from":oe()}],"mask-image-radial-to-pos":[{"mask-radial-to":oe()}],"mask-image-radial-from-color":[{"mask-radial-from":H()}],"mask-image-radial-to-color":[{"mask-radial-to":H()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[lt]}],"mask-image-conic-from-pos":[{"mask-conic-from":oe()}],"mask-image-conic-to-pos":[{"mask-conic-to":oe()}],"mask-image-conic-from-color":[{"mask-conic-from":H()}],"mask-image-conic-to-color":[{"mask-conic-to":H()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ce()}],"mask-repeat":[{mask:pe()}],"mask-size":[{mask:fe()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Fe,Oe]}],filter:[{filter:["","none",Fe,Oe]}],blur:[{blur:Ce()}],brightness:[{brightness:[lt,Fe,Oe]}],contrast:[{contrast:[lt,Fe,Oe]}],"drop-shadow":[{"drop-shadow":["","none",p,ja,Qa]}],"drop-shadow-color":[{"drop-shadow":H()}],grayscale:[{grayscale:["",lt,Fe,Oe]}],"hue-rotate":[{"hue-rotate":[lt,Fe,Oe]}],invert:[{invert:["",lt,Fe,Oe]}],saturate:[{saturate:[lt,Fe,Oe]}],sepia:[{sepia:["",lt,Fe,Oe]}],"backdrop-filter":[{"backdrop-filter":["","none",Fe,Oe]}],"backdrop-blur":[{"backdrop-blur":Ce()}],"backdrop-brightness":[{"backdrop-brightness":[lt,Fe,Oe]}],"backdrop-contrast":[{"backdrop-contrast":[lt,Fe,Oe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",lt,Fe,Oe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[lt,Fe,Oe]}],"backdrop-invert":[{"backdrop-invert":["",lt,Fe,Oe]}],"backdrop-opacity":[{"backdrop-opacity":[lt,Fe,Oe]}],"backdrop-saturate":[{"backdrop-saturate":[lt,Fe,Oe]}],"backdrop-sepia":[{"backdrop-sepia":["",lt,Fe,Oe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":R()}],"border-spacing-x":[{"border-spacing-x":R()}],"border-spacing-y":[{"border-spacing-y":R()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Fe,Oe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[lt,"initial",Fe,Oe]}],ease:[{ease:["linear","initial",d,Fe,Oe]}],delay:[{delay:[lt,Fe,Oe]}],animate:[{animate:["none",_,Fe,Oe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[v,Fe,Oe]}],"perspective-origin":[{"perspective-origin":T()}],rotate:[{rotate:Ve()}],"rotate-x":[{"rotate-x":Ve()}],"rotate-y":[{"rotate-y":Ve()}],"rotate-z":[{"rotate-z":Ve()}],scale:[{scale:Me()}],"scale-x":[{"scale-x":Me()}],"scale-y":[{"scale-y":Me()}],"scale-z":[{"scale-z":Me()}],"scale-3d":["scale-3d"],skew:[{skew:at()}],"skew-x":[{"skew-x":at()}],"skew-y":[{"skew-y":at()}],transform:[{transform:[Fe,Oe,"","none","gpu","cpu"]}],"transform-origin":[{origin:T()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:I()}],"translate-x":[{"translate-x":I()}],"translate-y":[{"translate-y":I()}],"translate-z":[{"translate-z":I()}],"translate-none":["translate-none"],accent:[{accent:H()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:H()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Fe,Oe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Fe,Oe]}],fill:[{fill:["none",...H()]}],"stroke-w":[{stroke:[lt,Mo,Gr,au]}],stroke:[{stroke:["none",...H()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},z2=x2(B2);function ov(...t){return z2(k_(t))}const ml=Kt({__name:"Button",props:{variant:{},size:{},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(t){const e=t;return(n,i)=>(Ye(),Nt(ve(so),{"data-slot":"button",as:t.as,"as-child":t.asChild,class:Gn(ve(ov)(ve(V2)({variant:t.variant,size:t.size}),e.class))},{default:en(()=>[Di(n.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),V2=lR("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}}),H2=Kt({__name:"Slider",props:{defaultValue:{},modelValue:{},disabled:{type:Boolean},orientation:{},dir:{},inverted:{type:Boolean},min:{},max:{},step:{},minStepsBetweenThumbs:{},thumbAlignment:{},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},class:{}},emits:["update:modelValue","valueCommit"],setup(t,{emit:e}){const n=t,i=e,r=dR(n,"class"),s=bR(r,i);return(o,a)=>(Ye(),Nt(ve(GR),Pi({"data-slot":"slider",class:ve(ov)("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",n.class)},ve(s)),{default:en(({modelValue:l})=>[Xt(ve(QR),{"data-slot":"slider-track",class:"bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"},{default:en(()=>[Xt(ve(qR),{"data-slot":"slider-range",class:"bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"})]),_:1}),(Ye(!0),Lt(kt,null,Sr(l,(c,u)=>(Ye(),Nt(ve(KR),{key:u,"data-slot":"slider-thumb",class:"bg-white border-primary ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"}))),128))]),_:1},16,["class"]))}}),G2={key:0,class:"dynamic-label"},W2={key:2,class:"slider-container"},X2={key:0,class:"slider-value"},q2=Kt({__name:"Sidebar",setup(t){const e=Wt(!0),n=Wt(!1),i=Yf(s=>{n.value=s==="dark"});function r(){e.value=!e.value}return document.addEventListener("keydown",s=>{(s.key==="Q"||s.key==="q")&&r()}),zh(()=>{i()}),(s,o)=>(Ye(),Lt(kt,null,[jt("div",{class:Gn(["fixed-sidebar",{"is-hidden":!e.value,"is-dark":n.value,dark:n.value}])},[(Ye(!0),Lt(kt,null,Sr(ve(qf),a=>(Ye(),Lt("div",{key:a.id,class:"dynamic-item"},[a.label?(Ye(),Lt("label",G2,ii(a.label),1)):Er("",!0),a.component==="Button"?(Ye(),Nt(ve(ml),{key:1,variant:"secondary",onClick:l=>ve(cg)(a.action)},{default:en(()=>[Bs(ii(a.props.text),1)]),_:2},1032,["onClick"])):a.component==="Slider"?(Ye(),Lt("div",W2,[Xt(ve(H2),{min:a.props.min,max:a.props.max,step:a.props.step,"default-value":a.props.defaultValue,modelValue:a.props.defaultValue,"onUpdate:modelValue":[l=>a.props.defaultValue=l,l=>ve(cg)(a.action,l)],class:"w-[80%]"},null,8,["min","max","step","default-value","modelValue","onUpdate:modelValue"]),a.props.defaultValue?(Ye(),Lt("span",X2,ii(a.props.defaultValue[0]),1)):Er("",!0)])):Er("",!0)]))),128)),Xt(ve(ml),{variant:"secondary",size:"icon",class:"mb-4",onClick:o[0]||(o[0]=a=>r())},{default:en(()=>[Bs(ii(e.value?"<<":">>"),1)]),_:1})],2),jt("div",{class:Gn({dark:n.value})},[Xt(ve(ml),{variant:"secondary",size:"icon",class:Gn(["mb-5",{"is-hidden":!e.value}]),onClick:o[1]||(o[1]=a=>r())},{default:en(()=>[...o[2]||(o[2]=[Bs(" >> ",-1)])]),_:1},8,["class"])],2)],64))}}),Y2=jl(q2,[["__scopeId","data-v-569b2a45"]]),J2={class:"info-module",id:"info-panel"},$2={class:"metadata"},K2={__name:"ObjectInfo",setup(t){return Cr.data&&Object.fromEntries(Object.entries(Cr.data).filter(([e])=>e!=="dispatch")),(e,n)=>(Ye(),Lt("div",J2,[Xt(ve(ml),{variant:"ghost",onClick:n[0]||(n[0]=i=>ve(P_)())},{default:en(()=>[...n[1]||(n[1]=[Bs(" X ",-1)])]),_:1}),jt("div",$2,[n[2]||(n[2]=jt("h1",null,"METADATA",-1)),(Ye(!0),Lt(kt,null,Sr(ve(Cr).data,(i,r)=>(Ye(),Lt("div",{key:r,class:"single_data"},[jt("p",null,[jt("strong",null,ii(r)+":",1),Bs(" "+ii(i.value),1)])]))),128))])]))}},Z2=jl(K2,[["__scopeId","data-v-ff5fa631"]]),Q2={class:"app-container"},j2=Kt({__name:"App",setup(t){const e=Wt(null);return to(()=>{e.value&&(e.value.appendChild(Cn.domElement),w3())}),(n,i)=>(Ye(),Lt("div",Q2,[Xt(aR),ve(yh).isVisible?(Ye(),Nt(Y2,{key:0})):Er("",!0),jt("div",{ref_key:"threeContainer",ref:e,class:"three-container"},null,512),ve(Cr).isVisible?(Ye(),Nt(Z2,{key:1})):Er("",!0)]))}}),eD=jl(j2,[["__scopeId","data-v-f56028e7"]]),tD=Uy(eD);tD.mount("#app");
