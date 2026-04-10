(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function wh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pt={},Rs=[],Si=()=>{},vg=()=>!1,Ll=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Eh=t=>t.startsWith("onUpdate:"),un=Object.assign,Th=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gv=Object.prototype.hasOwnProperty,vt=(t,e)=>gv.call(t,e),Ke=Array.isArray,Ds=t=>ea(t)==="[object Map]",Nl=t=>ea(t)==="[object Set]",sd=t=>ea(t)==="[object Date]",je=t=>typeof t=="function",Jt=t=>typeof t=="string",si=t=>typeof t=="symbol",xt=t=>t!==null&&typeof t=="object",xg=t=>(xt(t)||je(t))&&je(t.then)&&je(t.catch),yg=Object.prototype.toString,ea=t=>yg.call(t),_v=t=>ea(t).slice(8,-1),bg=t=>ea(t)==="[object Object]",Ul=t=>Jt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ro=wh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ol=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},vv=/-\w/g,Un=Ol(t=>t.replace(vv,e=>e.slice(1).toUpperCase())),xv=/\B([A-Z])/g,ns=Ol(t=>t.replace(xv,"-$1").toLowerCase()),Fl=Ol(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qa=Ol(t=>t?`on${Fl(t)}`:""),Sr=(t,e)=>!Object.is(t,e),ja=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Sg=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Mg=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let od;const kl=()=>od||(od=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qs(t){if(Ke(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Jt(i)?Mv(i):Qs(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Jt(t)||xt(t))return t}const yv=/;(?![^(]*\))/g,bv=/:([^]+)/,Sv=/\/\*[^]*?\*\//g;function Mv(t){const e={};return t.replace(Sv,"").split(yv).forEach(n=>{if(n){const i=n.split(bv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Vn(t){let e="";if(Jt(t))e=t;else if(Ke(t))for(let n=0;n<t.length;n++){const i=Vn(t[n]);i&&(e+=i+" ")}else if(xt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const wv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ev=wh(wv);function wg(t){return!!t||t===""}function Tv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=ta(t[i],e[i]);return n}function ta(t,e){if(t===e)return!0;let n=sd(t),i=sd(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=si(t),i=si(e),n||i)return t===e;if(n=Ke(t),i=Ke(e),n||i)return n&&i?Tv(t,e):!1;if(n=xt(t),i=xt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ta(t[o],e[o]))return!1}}return String(t)===String(e)}function Av(t,e){return t.findIndex(n=>ta(n,e))}const Eg=t=>!!(t&&t.__v_isRef===!0),ni=t=>Jt(t)?t:t==null?"":Ke(t)||xt(t)&&(t.toString===yg||!je(t.toString))?Eg(t)?ni(t.value):JSON.stringify(t,Tg,2):String(t),Tg=(t,e)=>Eg(e)?Tg(t,e.value):Ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[ic(i,s)+" =>"]=r,n),{})}:Nl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ic(n))}:si(e)?ic(e):xt(e)&&!Ke(e)&&!bg(e)?String(e):e,ic=(t,e="")=>{var n;return si(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let In;class Cv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=In,!e&&In&&(this.index=(In.scopes||(In.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=In;try{return In=this,e()}finally{In=n}}}on(){++this._on===1&&(this.prevScope=In,In=this)}off(){this._on>0&&--this._on===0&&(In=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Pv(){return In}let Lt;const rc=new WeakSet;class Ag{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,In&&In.active&&In.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,rc.has(this)&&(rc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ad(this),Rg(this);const e=Lt,n=ri;Lt=this,ri=!0;try{return this.fn()}finally{Dg(this),Lt=e,ri=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ph(e);this.deps=this.depsTail=void 0,ad(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?rc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){au(this)&&this.run()}get dirty(){return au(this)}}let Cg=0,Do,Io;function Pg(t,e=!1){if(t.flags|=8,e){t.next=Io,Io=t;return}t.next=Do,Do=t}function Ah(){Cg++}function Ch(){if(--Cg>0)return;if(Io){let e=Io;for(Io=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Do;){let e=Do;for(Do=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Rg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Dg(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Ph(i),Rv(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function au(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ig(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ig(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===zo)||(t.globalVersion=zo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!au(t))))return;t.flags|=2;const e=t.dep,n=Lt,i=ri;Lt=t,ri=!0;try{Rg(t);const r=t.fn(t._value);(e.version===0||Sr(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Lt=n,ri=i,Dg(t),t.flags&=-3}}function Ph(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Ph(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Rv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ri=!0;const Lg=[];function Ki(){Lg.push(ri),ri=!1}function Zi(){const t=Lg.pop();ri=t===void 0?!0:t}function ad(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Lt;Lt=void 0;try{e()}finally{Lt=n}}}let zo=0;class Dv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Rh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Lt||!ri||Lt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Lt)n=this.activeLink=new Dv(Lt,this),Lt.deps?(n.prevDep=Lt.depsTail,Lt.depsTail.nextDep=n,Lt.depsTail=n):Lt.deps=Lt.depsTail=n,Ng(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Lt.depsTail,n.nextDep=void 0,Lt.depsTail.nextDep=n,Lt.depsTail=n,Lt.deps===n&&(Lt.deps=i)}return n}trigger(e){this.version++,zo++,this.notify(e)}notify(e){Ah();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ch()}}}function Ng(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Ng(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const pl=new WeakMap,$r=Symbol(""),lu=Symbol(""),Vo=Symbol("");function pn(t,e,n){if(ri&&Lt){let i=pl.get(t);i||pl.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Rh),r.map=i,r.key=n),r.track()}}function Xi(t,e,n,i,r,s){const o=pl.get(t);if(!o){zo++;return}const a=l=>{l&&l.trigger()};if(Ah(),e==="clear")o.forEach(a);else{const l=Ke(t),c=l&&Ul(n);if(l&&n==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===Vo||!si(d)&&d>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Vo)),e){case"add":l?c&&a(o.get("length")):(a(o.get($r)),Ds(t)&&a(o.get(lu)));break;case"delete":l||(a(o.get($r)),Ds(t)&&a(o.get(lu)));break;case"set":Ds(t)&&a(o.get($r));break}}Ch()}function Iv(t,e){const n=pl.get(t);return n&&n.get(e)}function ls(t){const e=_t(t);return e===t?e:(pn(e,"iterate",Vo),qn(t)?e:e.map(oi))}function Bl(t){return pn(t=_t(t),"iterate",Vo),t}function hr(t,e){return Qi(t)?Vs(Kr(t)?oi(e):e):oi(e)}const Lv={__proto__:null,[Symbol.iterator](){return sc(this,Symbol.iterator,t=>hr(this,t))},concat(...t){return ls(this).concat(...t.map(e=>Ke(e)?ls(e):e))},entries(){return sc(this,"entries",t=>(t[1]=hr(this,t[1]),t))},every(t,e){return Li(this,"every",t,e,void 0,arguments)},filter(t,e){return Li(this,"filter",t,e,n=>n.map(i=>hr(this,i)),arguments)},find(t,e){return Li(this,"find",t,e,n=>hr(this,n),arguments)},findIndex(t,e){return Li(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Li(this,"findLast",t,e,n=>hr(this,n),arguments)},findLastIndex(t,e){return Li(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Li(this,"forEach",t,e,void 0,arguments)},includes(...t){return oc(this,"includes",t)},indexOf(...t){return oc(this,"indexOf",t)},join(t){return ls(this).join(t)},lastIndexOf(...t){return oc(this,"lastIndexOf",t)},map(t,e){return Li(this,"map",t,e,void 0,arguments)},pop(){return lo(this,"pop")},push(...t){return lo(this,"push",t)},reduce(t,...e){return ld(this,"reduce",t,e)},reduceRight(t,...e){return ld(this,"reduceRight",t,e)},shift(){return lo(this,"shift")},some(t,e){return Li(this,"some",t,e,void 0,arguments)},splice(...t){return lo(this,"splice",t)},toReversed(){return ls(this).toReversed()},toSorted(t){return ls(this).toSorted(t)},toSpliced(...t){return ls(this).toSpliced(...t)},unshift(...t){return lo(this,"unshift",t)},values(){return sc(this,"values",t=>hr(this,t))}};function sc(t,e,n){const i=Bl(t),r=i[e]();return i!==t&&!qn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const Nv=Array.prototype;function Li(t,e,n,i,r,s){const o=Bl(t),a=o!==t&&!qn(t),l=o[e];if(l!==Nv[e]){const h=l.apply(t,s);return a?oi(h):h}let c=n;o!==t&&(a?c=function(h,d){return n.call(this,hr(t,h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function ld(t,e,n,i){const r=Bl(t);let s=n;return r!==t&&(qn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,hr(t,a),l,t)}),r[e](s,...i)}function oc(t,e,n){const i=_t(t);pn(i,"iterate",Vo);const r=i[e](...n);return(r===-1||r===!1)&&zl(n[0])?(n[0]=_t(n[0]),i[e](...n)):r}function lo(t,e,n=[]){Ki(),Ah();const i=_t(t)[e].apply(t,n);return Ch(),Zi(),i}const Uv=wh("__proto__,__v_isRef,__isVue"),Ug=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(si));function Ov(t){si(t)||(t=String(t));const e=_t(this);return pn(e,"has",t),e.hasOwnProperty(t)}class Og{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?qv:zg:s?Bg:kg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ke(e);if(!r){let l;if(o&&(l=Lv[n]))return l;if(n==="hasOwnProperty")return Ov}const a=Reflect.get(e,n,qt(e)?e:i);if((si(n)?Ug.has(n):Uv(n))||(r||pn(e,"get",n),s))return a;if(qt(a)){const l=o&&Ul(n)?a:a.value;return r&&xt(l)?uu(l):l}return xt(a)?r?uu(a):$n(a):a}}class Fg extends Og{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const o=Ke(e)&&Ul(n);if(!this._isShallow){const c=Qi(s);if(!qn(i)&&!Qi(i)&&(s=_t(s),i=_t(i)),!o&&qt(s)&&!qt(i))return c||(s.value=i),!0}const a=o?Number(n)<e.length:vt(e,n),l=Reflect.set(e,n,i,qt(e)?e:r);return e===_t(r)&&(a?Sr(i,s)&&Xi(e,"set",n,i):Xi(e,"add",n,i)),l}deleteProperty(e,n){const i=vt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Xi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!si(n)||!Ug.has(n))&&pn(e,"has",n),i}ownKeys(e){return pn(e,"iterate",Ke(e)?"length":$r),Reflect.ownKeys(e)}}class Fv extends Og{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const kv=new Fg,Bv=new Fv,zv=new Fg(!0);const cu=t=>t,fa=t=>Reflect.getPrototypeOf(t);function Vv(t,e,n){return function(...i){const r=this.__v_raw,s=_t(r),o=Ds(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?cu:e?Vs:oi;return!e&&pn(s,"iterate",l?lu:$r),un(Object.create(c),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}}})}}function da(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Hv(t,e){const n={get(r){const s=this.__v_raw,o=_t(s),a=_t(r);t||(Sr(r,a)&&pn(o,"get",r),pn(o,"get",a));const{has:l}=fa(o),c=e?cu:t?Vs:oi;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&pn(_t(r),"iterate",$r),r.size},has(r){const s=this.__v_raw,o=_t(s),a=_t(r);return t||(Sr(r,a)&&pn(o,"has",r),pn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=_t(a),c=e?cu:t?Vs:oi;return!t&&pn(l,"iterate",$r),a.forEach((u,h)=>r.call(s,c(u),c(h),o))}};return un(n,t?{add:da("add"),set:da("set"),delete:da("delete"),clear:da("clear")}:{add(r){!e&&!qn(r)&&!Qi(r)&&(r=_t(r));const s=_t(this);return fa(s).has.call(s,r)||(s.add(r),Xi(s,"add",r,r)),this},set(r,s){!e&&!qn(s)&&!Qi(s)&&(s=_t(s));const o=_t(this),{has:a,get:l}=fa(o);let c=a.call(o,r);c||(r=_t(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Sr(s,u)&&Xi(o,"set",r,s):Xi(o,"add",r,s),this},delete(r){const s=_t(this),{has:o,get:a}=fa(s);let l=o.call(s,r);l||(r=_t(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Xi(s,"delete",r,void 0),c},clear(){const r=_t(this),s=r.size!==0,o=r.clear();return s&&Xi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Vv(r,t,e)}),n}function Dh(t,e){const n=Hv(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(vt(n,r)&&r in i?n:i,r,s)}const Gv={get:Dh(!1,!1)},Wv={get:Dh(!1,!0)},Xv={get:Dh(!0,!1)};const kg=new WeakMap,Bg=new WeakMap,zg=new WeakMap,qv=new WeakMap;function Yv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jv(t){return t.__v_skip||!Object.isExtensible(t)?0:Yv(_v(t))}function $n(t){return Qi(t)?t:Ih(t,!1,kv,Gv,kg)}function $v(t){return Ih(t,!1,zv,Wv,Bg)}function uu(t){return Ih(t,!0,Bv,Xv,zg)}function Ih(t,e,n,i,r){if(!xt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=Jv(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function Kr(t){return Qi(t)?Kr(t.__v_raw):!!(t&&t.__v_isReactive)}function Qi(t){return!!(t&&t.__v_isReadonly)}function qn(t){return!!(t&&t.__v_isShallow)}function zl(t){return t?!!t.__v_raw:!1}function _t(t){const e=t&&t.__v_raw;return e?_t(e):t}function Vg(t){return!vt(t,"__v_skip")&&Object.isExtensible(t)&&Sg(t,"__v_skip",!0),t}const oi=t=>xt(t)?$n(t):t,Vs=t=>xt(t)?uu(t):t;function qt(t){return t?t.__v_isRef===!0:!1}function Wt(t){return Hg(t,!1)}function Kv(t){return Hg(t,!0)}function Hg(t,e){return qt(t)?t:new Zv(t,e)}class Zv{constructor(e,n){this.dep=new Rh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:_t(e),this._value=n?e:oi(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||qn(e)||Qi(e);e=i?e:_t(e),Sr(e,n)&&(this._rawValue=e,this._value=i?e:oi(e),this.dep.trigger())}}function ve(t){return qt(t)?t.value:t}function Lh(t){return je(t)?t():ve(t)}const Qv={get:(t,e,n)=>e==="__v_raw"?t:ve(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return qt(r)&&!qt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Gg(t){return Kr(t)?t:new Proxy(t,Qv)}function Ho(t){const e=Ke(t)?new Array(t.length):{};for(const n in t)e[n]=Wg(t,n);return e}class jv{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=_t(e);let r=!0,s=e;if(!Ke(e)||!Ul(String(n)))do r=!zl(s)||qn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=ve(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&qt(this._raw[this._key])){const n=this._object[this._key];if(qt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Iv(this._raw,this._key)}}class ex{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function tx(t,e,n){return qt(t)?t:je(t)?new ex(t):xt(t)&&arguments.length>1?Wg(t,e,n):Wt(t)}function Wg(t,e,n){return new jv(t,e,n)}class nx{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Rh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Lt!==this)return Pg(this,!0),!0}get value(){const e=this.dep.track();return Ig(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ix(t,e,n=!1){let i,r;return je(t)?i=t:(i=t.get,r=t.set),new nx(i,r,n)}const pa={},ml=new WeakMap;let Hr;function rx(t,e=!1,n=Hr){if(n){let i=ml.get(n);i||ml.set(n,i=[]),i.push(t)}}function sx(t,e,n=Pt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=b=>r?b:qn(b)||r===!1||r===0?qi(b,1):qi(b);let u,h,d,p,g=!1,_=!1;if(qt(t)?(h=()=>t.value,g=qn(t)):Kr(t)?(h=()=>c(t),g=!0):Ke(t)?(_=!0,g=t.some(b=>Kr(b)||qn(b)),h=()=>t.map(b=>{if(qt(b))return b.value;if(Kr(b))return c(b);if(je(b))return l?l(b,2):b()})):je(t)?e?h=l?()=>l(t,2):t:h=()=>{if(d){Ki();try{d()}finally{Zi()}}const b=Hr;Hr=u;try{return l?l(t,3,[p]):t(p)}finally{Hr=b}}:h=Si,e&&r){const b=h,T=r===!0?1/0:r;h=()=>qi(b(),T)}const m=Pv(),f=()=>{u.stop(),m&&m.active&&Th(m.effects,u)};if(s&&e){const b=e;e=(...T)=>{b(...T),f()}}let x=_?new Array(t.length).fill(pa):pa;const y=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const T=u.run();if(r||g||(_?T.some((C,D)=>Sr(C,x[D])):Sr(T,x))){d&&d();const C=Hr;Hr=u;try{const D=[T,x===pa?void 0:_&&x[0]===pa?[]:x,p];x=T,l?l(e,3,D):e(...D)}finally{Hr=C}}}else u.run()};return a&&a(y),u=new Ag(h),u.scheduler=o?()=>o(y,!1):y,p=b=>rx(b,!1,u),d=u.onStop=()=>{const b=ml.get(u);if(b){if(l)l(b,4);else for(const T of b)T();ml.delete(u)}},e?i?y(!0):x=u.run():o?o(y.bind(null,!0),!0):u.run(),f.pause=u.pause.bind(u),f.resume=u.resume.bind(u),f.stop=f,f}function qi(t,e=1/0,n){if(e<=0||!xt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,qt(t))qi(t.value,e,n);else if(Ke(t))for(let i=0;i<t.length;i++)qi(t[i],e,n);else if(Nl(t)||Ds(t))t.forEach(i=>{qi(i,e,n)});else if(bg(t)){for(const i in t)qi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&qi(t[i],e,n)}return t}function na(t,e,n,i){try{return i?t(...i):t()}catch(r){Vl(r,e,n)}}function Ei(t,e,n,i){if(je(t)){const r=na(t,e,n,i);return r&&xg(r)&&r.catch(s=>{Vl(s,e,n)}),r}if(Ke(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Ei(t[s],e,n,i));return r}}function Vl(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Pt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(s){Ki(),na(s,null,10,[t,l,c]),Zi();return}}ox(t,n,r,i,o)}function ox(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Mn=[];let mi=-1;const Is=[];let fr=null,ws=0;const Xg=Promise.resolve();let gl=null;function Nh(t){const e=gl||Xg;return t?e.then(this?t.bind(this):t):e}function ax(t){let e=mi+1,n=Mn.length;for(;e<n;){const i=e+n>>>1,r=Mn[i],s=Go(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Uh(t){if(!(t.flags&1)){const e=Go(t),n=Mn[Mn.length-1];!n||!(t.flags&2)&&e>=Go(n)?Mn.push(t):Mn.splice(ax(e),0,t),t.flags|=1,qg()}}function qg(){gl||(gl=Xg.then(Jg))}function lx(t){Ke(t)?Is.push(...t):fr&&t.id===-1?fr.splice(ws+1,0,t):t.flags&1||(Is.push(t),t.flags|=1),qg()}function cd(t,e,n=mi+1){for(;n<Mn.length;n++){const i=Mn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Mn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Yg(t){if(Is.length){const e=[...new Set(Is)].sort((n,i)=>Go(n)-Go(i));if(Is.length=0,fr){fr.push(...e);return}for(fr=e,ws=0;ws<fr.length;ws++){const n=fr[ws];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}fr=null,ws=0}}const Go=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Jg(t){try{for(mi=0;mi<Mn.length;mi++){const e=Mn[mi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),na(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mi<Mn.length;mi++){const e=Mn[mi];e&&(e.flags&=-2)}mi=-1,Mn.length=0,Yg(),gl=null,(Mn.length||Is.length)&&Jg()}}let ln=null,$g=null;function _l(t){const e=ln;return ln=t,$g=t&&t.type.__scopeId||null,e}function jt(t,e=ln,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&yl(-1);const s=_l(e);let o;try{o=t(...r)}finally{_l(s),i._d&&yl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function cx(t,e){if(ln===null)return t;const n=Xl(ln),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Pt]=e[r];s&&(je(s)&&(s={mounted:s,updated:s}),s.deep&&qi(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Ir(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ki(),Ei(l,n,8,[t.el,a,t,e]),Zi())}}function Oh(t,e){if(mn){let n=mn.provides;const i=mn.parent&&mn.parent.provides;i===n&&(n=mn.provides=Object.create(i)),n[t]=e}}function Ls(t,e,n=!1){const i=eo();if(i||Us){let r=Us?Us._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&je(e)?e.call(i&&i.proxy):e}}const ux=Symbol.for("v-scx"),hx=()=>Ls(ux);function fx(t,e){return Fh(t,null,e)}function Zr(t,e,n){return Fh(t,e,n)}function Fh(t,e,n=Pt){const{immediate:i,deep:r,flush:s,once:o}=n,a=un({},n),l=e&&i||!e&&s!=="post";let c;if(qo){if(s==="sync"){const p=hx();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Si,p.resume=Si,p.pause=Si,p}}const u=mn;a.call=(p,g,_)=>Ei(p,u,g,_);let h=!1;s==="post"?a.scheduler=p=>{Dn(p,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():Uh(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=sx(t,e,a);return qo&&(c?c.push(d):l&&d()),d}function dx(t,e,n){const i=this.proxy,r=Jt(t)?t.includes(".")?Kg(i,t):()=>i[t]:t.bind(i,i);let s;je(e)?s=e:(s=e.handler,n=e);const o=ia(this),a=Fh(r,s.bind(i),n);return o(),a}function Kg(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const px=Symbol("_vte"),mx=t=>t.__isTeleport,gx=Symbol("_leaveCb");function kh(t,e){t.shapeFlag&6&&t.component?(t.transition=e,kh(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Kt(t,e){return je(t)?un({name:t.name},e,{setup:t}):t}function Zg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ud(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const vl=new WeakMap;function Lo(t,e,n,i,r=!1){if(Ke(t)){t.forEach((_,m)=>Lo(_,e&&(Ke(e)?e[m]:e),n,i,r));return}if(Ns(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Lo(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Xl(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Pt?a.refs={}:a.refs,h=a.setupState,d=_t(h),p=h===Pt?vg:_=>ud(u,_)?!1:vt(d,_),g=(_,m)=>!(m&&ud(u,m));if(c!=null&&c!==l){if(hd(e),Jt(c))u[c]=null,p(c)&&(h[c]=null);else if(qt(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(je(l))na(l,a,12,[o,u]);else{const _=Jt(l),m=qt(l);if(_||m){const f=()=>{if(t.f){const x=_?p(l)?h[l]:u[l]:g()||!t.k?l.value:u[t.k];if(r)Ke(x)&&Th(x,s);else if(Ke(x))x.includes(s)||x.push(s);else if(_)u[l]=[s],p(l)&&(h[l]=u[l]);else{const y=[s];g(l,t.k)&&(l.value=y),t.k&&(u[t.k]=y)}}else _?(u[l]=o,p(l)&&(h[l]=o)):m&&(g(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const x=()=>{f(),vl.delete(t)};x.id=-1,vl.set(t,x),Dn(x,n)}else hd(t),f()}}}function hd(t){const e=vl.get(t);e&&(e.flags|=8,vl.delete(t))}kl().requestIdleCallback;kl().cancelIdleCallback;const Ns=t=>!!t.type.__asyncLoader,Qg=t=>t.type.__isKeepAlive;function _x(t,e){jg(t,"a",e)}function vx(t,e){jg(t,"da",e)}function jg(t,e,n=mn){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Hl(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Qg(r.parent.vnode)&&xx(i,e,n,r),r=r.parent}}function xx(t,e,n,i){const r=Hl(e,t,i,!0);zh(()=>{Th(i[e],r)},n)}function Hl(t,e,n=mn,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Ki();const a=ia(n),l=Ei(e,n,t,o);return a(),Zi(),l});return i?r.unshift(s):r.push(s),s}}const nr=t=>(e,n=mn)=>{(!qo||t==="sp")&&Hl(t,(...i)=>e(...i),n)},yx=nr("bm"),js=nr("m"),bx=nr("bu"),Sx=nr("u"),Bh=nr("bum"),zh=nr("um"),Mx=nr("sp"),wx=nr("rtg"),Ex=nr("rtc");function Tx(t,e=mn){Hl("ec",t,e)}const Ax="components",e0=Symbol.for("v-ndc");function el(t){return Jt(t)?Cx(Ax,t,!1)||t:t||e0}function Cx(t,e,n=!0,i=!1){const r=ln||mn;if(r){const s=r.type;{const a=hy(s,!1);if(a&&(a===e||a===Un(e)||a===Fl(Un(e))))return s}const o=fd(r[t]||s[t],e)||fd(r.appContext[t],e);return!o&&i?s:o}}function fd(t,e){return t&&(t[e]||t[Un(e)]||t[Fl(Un(e))])}function yr(t,e,n,i){let r;const s=n,o=Ke(t);if(o||Jt(t)){const a=o&&Kr(t);let l=!1,c=!1;a&&(l=!qn(t),c=Qi(t),t=Bl(t)),r=new Array(t.length);for(let u=0,h=t.length;u<h;u++)r[u]=e(l?c?Vs(oi(t[u])):oi(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(xt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}function Pi(t,e,n={},i,r){if(ln.ce||ln.parent&&Ns(ln.parent)&&ln.parent.ce){const c=Object.keys(n).length>0;return Ye(),Ut(kt,null,[Xt("slot",n,i)],c?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),Ye();const o=s&&t0(s(n)),a=n.key||o&&o.key,l=Ut(kt,{key:(a&&!si(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function t0(t){return t.some(e=>Xo(e)?!(e.type===Ti||e.type===kt&&!t0(e.children)):!0)?t:null}const hu=t=>t?b0(t)?Xl(t):hu(t.parent):null,No=un(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hu(t.parent),$root:t=>hu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>i0(t),$forceUpdate:t=>t.f||(t.f=()=>{Uh(t.update)}),$nextTick:t=>t.n||(t.n=Nh.bind(t.proxy)),$watch:t=>dx.bind(t)}),ac=(t,e)=>t!==Pt&&!t.__isScriptSetup&&vt(t,e),Px={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(ac(i,e))return o[e]=1,i[e];if(r!==Pt&&vt(r,e))return o[e]=2,r[e];if(vt(s,e))return o[e]=3,s[e];if(n!==Pt&&vt(n,e))return o[e]=4,n[e];fu&&(o[e]=0)}}const c=No[e];let u,h;if(c)return e==="$attrs"&&pn(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Pt&&vt(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,vt(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return ac(r,e)?(r[e]=n,!0):i!==Pt&&vt(i,e)?(i[e]=n,!0):vt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||t!==Pt&&a[0]!=="$"&&vt(t,a)||ac(e,a)||vt(s,a)||vt(i,a)||vt(No,a)||vt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:vt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function dd(t){return Ke(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fu=!0;function Rx(t){const e=i0(t),n=t.proxy,i=t.ctx;fu=!1,e.beforeCreate&&pd(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:f,beforeUnmount:x,destroyed:y,unmounted:b,render:T,renderTracked:C,renderTriggered:D,errorCaptured:R,serverPrefetch:S,expose:M,inheritAttrs:L,components:V,directives:q,filters:j}=e;if(c&&Dx(c,i,null),o)for(const k in o){const H=o[k];je(H)&&(i[k]=H.bind(n))}if(r){const k=r.call(n,n);xt(k)&&(t.data=$n(k))}if(fu=!0,s)for(const k in s){const H=s[k],ce=je(H)?H.bind(n,n):je(H.get)?H.get.bind(n,n):Si,pe=!je(H)&&je(H.set)?H.set.bind(n):Si,fe=pt({get:ce,set:pe});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>fe.value,set:ke=>fe.value=ke})}if(a)for(const k in a)n0(a[k],i,n,k);if(l){const k=je(l)?l.call(n):l;Reflect.ownKeys(k).forEach(H=>{Oh(H,k[H])})}u&&pd(u,t,"c");function W(k,H){Ke(H)?H.forEach(ce=>k(ce.bind(n))):H&&k(H.bind(n))}if(W(yx,h),W(js,d),W(bx,p),W(Sx,g),W(_x,_),W(vx,m),W(Tx,R),W(Ex,C),W(wx,D),W(Bh,x),W(zh,b),W(Mx,S),Ke(M))if(M.length){const k=t.exposed||(t.exposed={});M.forEach(H=>{Object.defineProperty(k,H,{get:()=>n[H],set:ce=>n[H]=ce,enumerable:!0})})}else t.exposed||(t.exposed={});T&&t.render===Si&&(t.render=T),L!=null&&(t.inheritAttrs=L),V&&(t.components=V),q&&(t.directives=q),S&&Zg(t)}function Dx(t,e,n=Si){Ke(t)&&(t=du(t));for(const i in t){const r=t[i];let s;xt(r)?"default"in r?s=Ls(r.from||i,r.default,!0):s=Ls(r.from||i):s=Ls(r),qt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function pd(t,e,n){Ei(Ke(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function n0(t,e,n,i){let r=i.includes(".")?Kg(n,i):()=>n[i];if(Jt(t)){const s=e[t];je(s)&&Zr(r,s)}else if(je(t))Zr(r,t.bind(n));else if(xt(t))if(Ke(t))t.forEach(s=>n0(s,e,n,i));else{const s=je(t.handler)?t.handler.bind(n):e[t.handler];je(s)&&Zr(r,s,t)}}function i0(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>xl(l,c,o,!0)),xl(l,e,o)),xt(e)&&s.set(e,l),l}function xl(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&xl(t,s,n,!0),r&&r.forEach(o=>xl(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ix[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ix={data:md,props:gd,emits:gd,methods:So,computed:So,beforeCreate:yn,created:yn,beforeMount:yn,mounted:yn,beforeUpdate:yn,updated:yn,beforeDestroy:yn,beforeUnmount:yn,destroyed:yn,unmounted:yn,activated:yn,deactivated:yn,errorCaptured:yn,serverPrefetch:yn,components:So,directives:So,watch:Nx,provide:md,inject:Lx};function md(t,e){return e?t?function(){return un(je(t)?t.call(this,this):t,je(e)?e.call(this,this):e)}:e:t}function Lx(t,e){return So(du(t),du(e))}function du(t){if(Ke(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yn(t,e){return t?[...new Set([].concat(t,e))]:e}function So(t,e){return t?un(Object.create(null),t,e):e}function gd(t,e){return t?Ke(t)&&Ke(e)?[...new Set([...t,...e])]:un(Object.create(null),dd(t),dd(e??{})):e}function Nx(t,e){if(!t)return e;if(!e)return t;const n=un(Object.create(null),t);for(const i in e)n[i]=yn(t[i],e[i]);return n}function r0(){return{app:null,config:{isNativeTag:vg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ux=0;function Ox(t,e){return function(i,r=null){je(i)||(i=un({},i)),r!=null&&!xt(r)&&(r=null);const s=r0(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Ux++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:dy,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&je(u.install)?(o.add(u),u.install(c,...h)):je(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,d){if(!l){const p=c._ceVNode||Xt(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Xl(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ei(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=Us;Us=c;try{return u()}finally{Us=h}}};return c}}let Us=null;const Fx=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Un(e)}Modifiers`]||t[`${ns(e)}Modifiers`];function kx(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Pt;let r=n;const s=e.startsWith("update:"),o=s&&Fx(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>Jt(u)?u.trim():u)),o.number&&(r=n.map(Mg)));let a,l=i[a=Qa(e)]||i[a=Qa(Un(e))];!l&&s&&(l=i[a=Qa(ns(e))]),l&&Ei(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ei(c,t,6,r)}}const Bx=new WeakMap;function s0(t,e,n=!1){const i=n?Bx:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!je(t)){const l=c=>{const u=s0(c,e,!0);u&&(a=!0,un(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(xt(t)&&i.set(t,null),null):(Ke(s)?s.forEach(l=>o[l]=null):un(o,s),xt(t)&&i.set(t,o),o)}function Gl(t,e){return!t||!Ll(e)?!1:(e=e.slice(2).replace(/Once$/,""),vt(t,e[0].toLowerCase()+e.slice(1))||vt(t,ns(e))||vt(t,e))}function _d(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:p,ctx:g,inheritAttrs:_}=t,m=_l(t);let f,x;try{if(n.shapeFlag&4){const b=r||i,T=b;f=_i(c.call(T,b,u,h,p,d,g)),x=a}else{const b=e;f=_i(b.length>1?b(h,{attrs:a,slots:o,emit:l}):b(h,null)),x=e.props?a:zx(a)}}catch(b){Uo.length=0,Vl(b,t,1),f=Xt(Ti)}let y=f;if(x&&_!==!1){const b=Object.keys(x),{shapeFlag:T}=y;b.length&&T&7&&(s&&b.some(Eh)&&(x=Vx(x,s)),y=jr(y,x,!1,!0))}return n.dirs&&(y=jr(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&kh(y,n.transition),f=y,_l(m),f}const zx=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ll(n))&&((e||(e={}))[n]=t[n]);return e},Vx=(t,e)=>{const n={};for(const i in t)(!Eh(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Hx(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?vd(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o0(o,i,d)&&!Gl(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?vd(i,o,c):!0:!!o;return!1}function vd(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(o0(e,t,s)&&!Gl(n,s))return!0}return!1}function o0(t,e,n){const i=t[n],r=e[n];return n==="style"&&xt(i)&&xt(r)?!ta(i,r):i!==r}function Gx({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const a0={},l0=()=>Object.create(a0),c0=t=>Object.getPrototypeOf(t)===a0;function Wx(t,e,n,i=!1){const r={},s=l0();t.propsDefaults=Object.create(null),u0(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:$v(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Xx(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=_t(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Gl(t.emitsOptions,d))continue;const p=e[d];if(l)if(vt(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const g=Un(d);r[g]=pu(l,a,g,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{u0(t,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!vt(e,h)&&((u=ns(h))===h||!vt(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=pu(l,a,h,void 0,t,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!vt(e,h))&&(delete s[h],c=!0)}c&&Xi(t.attrs,"set","")}function u0(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ro(l))continue;const c=e[l];let u;r&&vt(r,u=Un(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Gl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=_t(n),c=a||Pt;for(let u=0;u<s.length;u++){const h=s[u];n[h]=pu(r,l,h,c[h],t,!vt(c,h))}}return o}function pu(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=vt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&je(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=ia(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ns(n))&&(i=!0))}return i}const qx=new WeakMap;function h0(t,e,n=!1){const i=n?qx:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!je(t)){const u=h=>{l=!0;const[d,p]=h0(h,e,!0);un(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return xt(t)&&i.set(t,Rs),Rs;if(Ke(s))for(let u=0;u<s.length;u++){const h=Un(s[u]);xd(h)&&(o[h]=Pt)}else if(s)for(const u in s){const h=Un(u);if(xd(h)){const d=s[u],p=o[h]=Ke(d)||je(d)?{type:d}:un({},d),g=p.type;let _=!1,m=!0;if(Ke(g))for(let f=0;f<g.length;++f){const x=g[f],y=je(x)&&x.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(m=!1)}else _=je(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||vt(p,"default"))&&a.push(h)}}const c=[o,a];return xt(t)&&i.set(t,c),c}function xd(t){return t[0]!=="$"&&!Ro(t)}const Vh=t=>t==="_"||t==="_ctx"||t==="$stable",Hh=t=>Ke(t)?t.map(_i):[_i(t)],Yx=(t,e,n)=>{if(e._n)return e;const i=jt((...r)=>Hh(e(...r)),n);return i._c=!1,i},f0=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Vh(r))continue;const s=t[r];if(je(s))e[r]=Yx(r,s,i);else if(s!=null){const o=Hh(s);e[r]=()=>o}}},d0=(t,e)=>{const n=Hh(e);t.slots.default=()=>n},p0=(t,e,n)=>{for(const i in e)(n||!Vh(i))&&(t[i]=e[i])},Jx=(t,e,n)=>{const i=t.slots=l0();if(t.vnode.shapeFlag&32){const r=e._;r?(p0(i,e,n),n&&Sg(i,"_",r,!0)):f0(e,i)}else e&&d0(t,e)},$x=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Pt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:p0(r,e,n):(s=!e.$stable,f0(e,r)),o=e}else e&&(d0(t,e),o={default:1});if(s)for(const a in r)!Vh(a)&&o[a]==null&&delete r[a]},Dn=ey;function Kx(t){return Zx(t)}function Zx(t,e){const n=kl();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Si,insertStaticContent:g}=t,_=(I,O,U,z=null,F=null,X=null,E=void 0,re=null,Z=!!O.dynamicChildren)=>{if(I===O)return;I&&!co(I,O)&&(z=oe(I),ke(I,F,X,!0),I=null),O.patchFlag===-2&&(Z=!1,O.dynamicChildren=null);const{type:Q,ref:ie,shapeFlag:w}=O;switch(Q){case Wl:m(I,O,U,z);break;case Ti:f(I,O,U,z);break;case cc:I==null&&x(O,U,z,E);break;case kt:V(I,O,U,z,F,X,E,re,Z);break;default:w&1?T(I,O,U,z,F,X,E,re,Z):w&6?q(I,O,U,z,F,X,E,re,Z):(w&64||w&128)&&Q.process(I,O,U,z,F,X,E,re,Z,Me)}ie!=null&&F?Lo(ie,I&&I.ref,X,O||I,!O):ie==null&&I&&I.ref!=null&&Lo(I.ref,null,X,I,!0)},m=(I,O,U,z)=>{if(I==null)i(O.el=a(O.children),U,z);else{const F=O.el=I.el;O.children!==I.children&&c(F,O.children)}},f=(I,O,U,z)=>{I==null?i(O.el=l(O.children||""),U,z):O.el=I.el},x=(I,O,U,z)=>{[I.el,I.anchor]=g(I.children,O,U,z,I.el,I.anchor)},y=({el:I,anchor:O},U,z)=>{let F;for(;I&&I!==O;)F=d(I),i(I,U,z),I=F;i(O,U,z)},b=({el:I,anchor:O})=>{let U;for(;I&&I!==O;)U=d(I),r(I),I=U;r(O)},T=(I,O,U,z,F,X,E,re,Z)=>{if(O.type==="svg"?E="svg":O.type==="math"&&(E="mathml"),I==null)C(O,U,z,F,X,E,re,Z);else{const Q=I.el&&I.el._isVueCE?I.el:null;try{Q&&Q._beginPatch(),S(I,O,F,X,E,re,Z)}finally{Q&&Q._endPatch()}}},C=(I,O,U,z,F,X,E,re)=>{let Z,Q;const{props:ie,shapeFlag:w,transition:v,dirs:N}=I;if(Z=I.el=o(I.type,X,ie&&ie.is,ie),w&8?u(Z,I.children):w&16&&R(I.children,Z,null,z,F,lc(I,X),E,re),N&&Ir(I,null,z,"created"),D(Z,I,I.scopeId,E,z),ie){for(const ne in ie)ne!=="value"&&!Ro(ne)&&s(Z,ne,null,ie[ne],X,z);"value"in ie&&s(Z,"value",null,ie.value,X),(Q=ie.onVnodeBeforeMount)&&fi(Q,z,I)}N&&Ir(I,null,z,"beforeMount");const Y=Qx(F,v);Y&&v.beforeEnter(Z),i(Z,O,U),((Q=ie&&ie.onVnodeMounted)||Y||N)&&Dn(()=>{Q&&fi(Q,z,I),Y&&v.enter(Z),N&&Ir(I,null,z,"mounted")},F)},D=(I,O,U,z,F)=>{if(U&&p(I,U),z)for(let X=0;X<z.length;X++)p(I,z[X]);if(F){let X=F.subTree;if(O===X||v0(X.type)&&(X.ssContent===O||X.ssFallback===O)){const E=F.vnode;D(I,E,E.scopeId,E.slotScopeIds,F.parent)}}},R=(I,O,U,z,F,X,E,re,Z=0)=>{for(let Q=Z;Q<I.length;Q++){const ie=I[Q]=re?Hi(I[Q]):_i(I[Q]);_(null,ie,O,U,z,F,X,E,re)}},S=(I,O,U,z,F,X,E)=>{const re=O.el=I.el;let{patchFlag:Z,dynamicChildren:Q,dirs:ie}=O;Z|=I.patchFlag&16;const w=I.props||Pt,v=O.props||Pt;let N;if(U&&Lr(U,!1),(N=v.onVnodeBeforeUpdate)&&fi(N,U,O,I),ie&&Ir(O,I,U,"beforeUpdate"),U&&Lr(U,!0),(w.innerHTML&&v.innerHTML==null||w.textContent&&v.textContent==null)&&u(re,""),Q?M(I.dynamicChildren,Q,re,U,z,lc(O,F),X):E||H(I,O,re,null,U,z,lc(O,F),X,!1),Z>0){if(Z&16)L(re,w,v,U,F);else if(Z&2&&w.class!==v.class&&s(re,"class",null,v.class,F),Z&4&&s(re,"style",w.style,v.style,F),Z&8){const Y=O.dynamicProps;for(let ne=0;ne<Y.length;ne++){const $=Y[ne],we=w[$],he=v[$];(he!==we||$==="value")&&s(re,$,we,he,F,U)}}Z&1&&I.children!==O.children&&u(re,O.children)}else!E&&Q==null&&L(re,w,v,U,F);((N=v.onVnodeUpdated)||ie)&&Dn(()=>{N&&fi(N,U,O,I),ie&&Ir(O,I,U,"updated")},z)},M=(I,O,U,z,F,X,E)=>{for(let re=0;re<O.length;re++){const Z=I[re],Q=O[re],ie=Z.el&&(Z.type===kt||!co(Z,Q)||Z.shapeFlag&198)?h(Z.el):U;_(Z,Q,ie,null,z,F,X,E,!0)}},L=(I,O,U,z,F)=>{if(O!==U){if(O!==Pt)for(const X in O)!Ro(X)&&!(X in U)&&s(I,X,O[X],null,F,z);for(const X in U){if(Ro(X))continue;const E=U[X],re=O[X];E!==re&&X!=="value"&&s(I,X,re,E,F,z)}"value"in U&&s(I,"value",O.value,U.value,F)}},V=(I,O,U,z,F,X,E,re,Z)=>{const Q=O.el=I?I.el:a(""),ie=O.anchor=I?I.anchor:a("");let{patchFlag:w,dynamicChildren:v,slotScopeIds:N}=O;N&&(re=re?re.concat(N):N),I==null?(i(Q,U,z),i(ie,U,z),R(O.children||[],U,ie,F,X,E,re,Z)):w>0&&w&64&&v&&I.dynamicChildren&&I.dynamicChildren.length===v.length?(M(I.dynamicChildren,v,U,F,X,E,re),(O.key!=null||F&&O===F.subTree)&&m0(I,O,!0)):H(I,O,U,ie,F,X,E,re,Z)},q=(I,O,U,z,F,X,E,re,Z)=>{O.slotScopeIds=re,I==null?O.shapeFlag&512?F.ctx.activate(O,U,z,E,Z):j(O,U,z,F,X,E,Z):J(I,O,Z)},j=(I,O,U,z,F,X,E)=>{const re=I.component=oy(I,z,F);if(Qg(I)&&(re.ctx.renderer=Me),ay(re,!1,E),re.asyncDep){if(F&&F.registerDep(re,W,E),!I.el){const Z=re.subTree=Xt(Ti);f(null,Z,O,U),I.placeholder=Z.el}}else W(re,I,O,U,F,X,E)},J=(I,O,U)=>{const z=O.component=I.component;if(Hx(I,O,U))if(z.asyncDep&&!z.asyncResolved){k(z,O,U);return}else z.next=O,z.update();else O.el=I.el,z.vnode=O},W=(I,O,U,z,F,X,E)=>{const re=()=>{if(I.isMounted){let{next:w,bu:v,u:N,parent:Y,vnode:ne}=I;{const ze=g0(I);if(ze){w&&(w.el=ne.el,k(I,w,E)),ze.asyncDep.then(()=>{Dn(()=>{I.isUnmounted||Q()},F)});return}}let $=w,we;Lr(I,!1),w?(w.el=ne.el,k(I,w,E)):w=ne,v&&ja(v),(we=w.props&&w.props.onVnodeBeforeUpdate)&&fi(we,Y,w,ne),Lr(I,!0);const he=_d(I),Pe=I.subTree;I.subTree=he,_(Pe,he,h(Pe.el),oe(Pe),I,F,X),w.el=he.el,$===null&&Gx(I,he.el),N&&Dn(N,F),(we=w.props&&w.props.onVnodeUpdated)&&Dn(()=>fi(we,Y,w,ne),F)}else{let w;const{el:v,props:N}=O,{bm:Y,m:ne,parent:$,root:we,type:he}=I,Pe=Ns(O);Lr(I,!1),Y&&ja(Y),!Pe&&(w=N&&N.onVnodeBeforeMount)&&fi(w,$,O),Lr(I,!0);{we.ce&&we.ce._hasShadowRoot()&&we.ce._injectChildStyle(he);const ze=I.subTree=_d(I);_(null,ze,U,z,I,F,X),O.el=ze.el}if(ne&&Dn(ne,F),!Pe&&(w=N&&N.onVnodeMounted)){const ze=O;Dn(()=>fi(w,$,ze),F)}(O.shapeFlag&256||$&&Ns($.vnode)&&$.vnode.shapeFlag&256)&&I.a&&Dn(I.a,F),I.isMounted=!0,O=U=z=null}};I.scope.on();const Z=I.effect=new Ag(re);I.scope.off();const Q=I.update=Z.run.bind(Z),ie=I.job=Z.runIfDirty.bind(Z);ie.i=I,ie.id=I.uid,Z.scheduler=()=>Uh(ie),Lr(I,!0),Q()},k=(I,O,U)=>{O.component=I;const z=I.vnode.props;I.vnode=O,I.next=null,Xx(I,O.props,z,U),$x(I,O.children,U),Ki(),cd(I),Zi()},H=(I,O,U,z,F,X,E,re,Z=!1)=>{const Q=I&&I.children,ie=I?I.shapeFlag:0,w=O.children,{patchFlag:v,shapeFlag:N}=O;if(v>0){if(v&128){pe(Q,w,U,z,F,X,E,re,Z);return}else if(v&256){ce(Q,w,U,z,F,X,E,re,Z);return}}N&8?(ie&16&&se(Q,F,X),w!==Q&&u(U,w)):ie&16?N&16?pe(Q,w,U,z,F,X,E,re,Z):se(Q,F,X,!0):(ie&8&&u(U,""),N&16&&R(w,U,z,F,X,E,re,Z))},ce=(I,O,U,z,F,X,E,re,Z)=>{I=I||Rs,O=O||Rs;const Q=I.length,ie=O.length,w=Math.min(Q,ie);let v;for(v=0;v<w;v++){const N=O[v]=Z?Hi(O[v]):_i(O[v]);_(I[v],N,U,null,F,X,E,re,Z)}Q>ie?se(I,F,X,!0,!1,w):R(O,U,z,F,X,E,re,Z,w)},pe=(I,O,U,z,F,X,E,re,Z)=>{let Q=0;const ie=O.length;let w=I.length-1,v=ie-1;for(;Q<=w&&Q<=v;){const N=I[Q],Y=O[Q]=Z?Hi(O[Q]):_i(O[Q]);if(co(N,Y))_(N,Y,U,null,F,X,E,re,Z);else break;Q++}for(;Q<=w&&Q<=v;){const N=I[w],Y=O[v]=Z?Hi(O[v]):_i(O[v]);if(co(N,Y))_(N,Y,U,null,F,X,E,re,Z);else break;w--,v--}if(Q>w){if(Q<=v){const N=v+1,Y=N<ie?O[N].el:z;for(;Q<=v;)_(null,O[Q]=Z?Hi(O[Q]):_i(O[Q]),U,Y,F,X,E,re,Z),Q++}}else if(Q>v)for(;Q<=w;)ke(I[Q],F,X,!0),Q++;else{const N=Q,Y=Q,ne=new Map;for(Q=Y;Q<=v;Q++){const Ee=O[Q]=Z?Hi(O[Q]):_i(O[Q]);Ee.key!=null&&ne.set(Ee.key,Q)}let $,we=0;const he=v-Y+1;let Pe=!1,ze=0;const ue=new Array(he);for(Q=0;Q<he;Q++)ue[Q]=0;for(Q=N;Q<=w;Q++){const Ee=I[Q];if(we>=he){ke(Ee,F,X,!0);continue}let Ie;if(Ee.key!=null)Ie=ne.get(Ee.key);else for($=Y;$<=v;$++)if(ue[$-Y]===0&&co(Ee,O[$])){Ie=$;break}Ie===void 0?ke(Ee,F,X,!0):(ue[Ie-Y]=Q+1,Ie>=ze?ze=Ie:Pe=!0,_(Ee,O[Ie],U,null,F,X,E,re,Z),we++)}const be=Pe?jx(ue):Rs;for($=be.length-1,Q=he-1;Q>=0;Q--){const Ee=Y+Q,Ie=O[Ee],ye=O[Ee+1],nt=Ee+1<ie?ye.el||_0(ye):z;ue[Q]===0?_(null,Ie,U,nt,F,X,E,re,Z):Pe&&($<0||Q!==be[$]?fe(Ie,U,nt,2):$--)}}},fe=(I,O,U,z,F=null)=>{const{el:X,type:E,transition:re,children:Z,shapeFlag:Q}=I;if(Q&6){fe(I.component.subTree,O,U,z);return}if(Q&128){I.suspense.move(O,U,z);return}if(Q&64){E.move(I,O,U,Me);return}if(E===kt){i(X,O,U);for(let w=0;w<Z.length;w++)fe(Z[w],O,U,z);i(I.anchor,O,U);return}if(E===cc){y(I,O,U);return}if(z!==2&&Q&1&&re)if(z===0)re.beforeEnter(X),i(X,O,U),Dn(()=>re.enter(X),F);else{const{leave:w,delayLeave:v,afterLeave:N}=re,Y=()=>{I.ctx.isUnmounted?r(X):i(X,O,U)},ne=()=>{X._isLeaving&&X[gx](!0),w(X,()=>{Y(),N&&N()})};v?v(X,Y,ne):ne()}else i(X,O,U)},ke=(I,O,U,z=!1,F=!1)=>{const{type:X,props:E,ref:re,children:Z,dynamicChildren:Q,shapeFlag:ie,patchFlag:w,dirs:v,cacheIndex:N}=I;if(w===-2&&(F=!1),re!=null&&(Ki(),Lo(re,null,U,I,!0),Zi()),N!=null&&(O.renderCache[N]=void 0),ie&256){O.ctx.deactivate(I);return}const Y=ie&1&&v,ne=!Ns(I);let $;if(ne&&($=E&&E.onVnodeBeforeUnmount)&&fi($,O,I),ie&6)ut(I.component,U,z);else{if(ie&128){I.suspense.unmount(U,z);return}Y&&Ir(I,null,O,"beforeUnmount"),ie&64?I.type.remove(I,O,U,Me,z):Q&&!Q.hasOnce&&(X!==kt||w>0&&w&64)?se(Q,O,U,!1,!0):(X===kt&&w&384||!F&&ie&16)&&se(Z,O,U),z&&Le(I)}(ne&&($=E&&E.onVnodeUnmounted)||Y)&&Dn(()=>{$&&fi($,O,I),Y&&Ir(I,null,O,"unmounted")},U)},Le=I=>{const{type:O,el:U,anchor:z,transition:F}=I;if(O===kt){Qe(U,z);return}if(O===cc){b(I);return}const X=()=>{r(U),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(I.shapeFlag&1&&F&&!F.persisted){const{leave:E,delayLeave:re}=F,Z=()=>E(U,X);re?re(I.el,X,Z):Z()}else X()},Qe=(I,O)=>{let U;for(;I!==O;)U=d(I),r(I),I=U;r(O)},ut=(I,O,U)=>{const{bum:z,scope:F,job:X,subTree:E,um:re,m:Z,a:Q}=I;yd(Z),yd(Q),z&&ja(z),F.stop(),X&&(X.flags|=8,ke(E,I,O,U)),re&&Dn(re,O),Dn(()=>{I.isUnmounted=!0},O)},se=(I,O,U,z=!1,F=!1,X=0)=>{for(let E=X;E<I.length;E++)ke(I[E],O,U,z,F)},oe=I=>{if(I.shapeFlag&6)return oe(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const O=d(I.anchor||I.el),U=O&&O[px];return U?d(U):O};let Ce=!1;const Ve=(I,O,U)=>{let z;I==null?O._vnode&&(ke(O._vnode,null,null,!0),z=O._vnode.component):_(O._vnode||null,I,O,null,null,null,U),O._vnode=I,Ce||(Ce=!0,cd(z),Yg(),Ce=!1)},Me={p:_,um:ke,m:fe,r:Le,mt:j,mc:R,pc:H,pbc:M,n:oe,o:t};return{render:Ve,hydrate:void 0,createApp:Ox(Ve)}}function lc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Lr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Qx(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function m0(t,e,n=!1){const i=t.children,r=e.children;if(Ke(i)&&Ke(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Hi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&m0(o,a)),a.type===Wl&&(a.patchFlag===-1&&(a=r[s]=Hi(a)),a.el=o.el),a.type===Ti&&!a.el&&(a.el=o.el)}}function jx(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function g0(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:g0(e)}function yd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function _0(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?_0(e.subTree):null}const v0=t=>t.__isSuspense;function ey(t,e){e&&e.pendingBranch?Ke(t)?e.effects.push(...t):e.effects.push(t):lx(t)}const kt=Symbol.for("v-fgt"),Wl=Symbol.for("v-txt"),Ti=Symbol.for("v-cmt"),cc=Symbol.for("v-stc"),Uo=[];let Gn=null;function Ye(t=!1){Uo.push(Gn=t?null:[])}function ty(){Uo.pop(),Gn=Uo[Uo.length-1]||null}let Wo=1;function yl(t,e=!1){Wo+=t,t<0&&Gn&&e&&(Gn.hasOnce=!0)}function x0(t){return t.dynamicChildren=Wo>0?Gn||Rs:null,ty(),Wo>0&&Gn&&Gn.push(t),t}function Nt(t,e,n,i,r,s){return x0(sn(t,e,n,i,r,s,!0))}function Ut(t,e,n,i,r){return x0(Xt(t,e,n,i,r,!0))}function Xo(t){return t?t.__v_isVNode===!0:!1}function co(t,e){return t.type===e.type&&t.key===e.key}const y0=({key:t})=>t??null,tl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Jt(t)||qt(t)||je(t)?{i:ln,r:t,k:e,f:!!n}:t:null);function sn(t,e=null,n=null,i=0,r=null,s=t===kt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&y0(e),ref:e&&tl(e),scopeId:$g,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ln};return a?(Gh(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Jt(n)?8:16),Wo>0&&!o&&Gn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Gn.push(l),l}const Xt=ny;function ny(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===e0)&&(t=Ti),Xo(t)){const a=jr(t,e,!0);return n&&Gh(a,n),Wo>0&&!s&&Gn&&(a.shapeFlag&6?Gn[Gn.indexOf(t)]=a:Gn.push(a)),a.patchFlag=-2,a}if(fy(t)&&(t=t.__vccOpts),e){e=iy(e);let{class:a,style:l}=e;a&&!Jt(a)&&(e.class=Vn(a)),xt(l)&&(zl(l)&&!Ke(l)&&(l=un({},l)),e.style=Qs(l))}const o=Jt(t)?1:v0(t)?128:mx(t)?64:xt(t)?4:je(t)?2:0;return sn(t,e,n,i,r,o,s,!0)}function iy(t){return t?zl(t)||c0(t)?un({},t):t:null}function jr(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?Ai(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&y0(c),ref:e&&e.ref?n&&s?Ke(s)?s.concat(tl(e)):[s,tl(e)]:tl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jr(t.ssContent),ssFallback:t.ssFallback&&jr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&kh(u,l.clone(u)),u}function Os(t=" ",e=0){return Xt(Wl,null,t,e)}function Mr(t="",e=!1){return e?(Ye(),Ut(Ti,null,t)):Xt(Ti,null,t)}function _i(t){return t==null||typeof t=="boolean"?Xt(Ti):Ke(t)?Xt(kt,null,t.slice()):Xo(t)?Hi(t):Xt(Wl,null,String(t))}function Hi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:jr(t)}function Gh(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ke(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Gh(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!c0(e)?e._ctx=ln:r===3&&ln&&(ln.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:ln},n=32):(e=String(e),i&64?(n=16,e=[Os(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ai(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Vn([e.class,i.class]));else if(r==="style")e.style=Qs([e.style,i.style]);else if(Ll(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ke(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function fi(t,e,n,i=null){Ei(t,e,7,[n,i])}const ry=r0();let sy=0;function oy(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||ry,s={uid:sy++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:h0(i,r),emitsOptions:s0(i,r),emit:null,emitted:null,propsDefaults:Pt,inheritAttrs:i.inheritAttrs,ctx:Pt,data:Pt,props:Pt,attrs:Pt,slots:Pt,refs:Pt,setupState:Pt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=kx.bind(null,s),t.ce&&t.ce(s),s}let mn=null;const eo=()=>mn||ln;let bl,mu;{const t=kl(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};bl=e("__VUE_INSTANCE_SETTERS__",n=>mn=n),mu=e("__VUE_SSR_SETTERS__",n=>qo=n)}const ia=t=>{const e=mn;return bl(t),t.scope.on(),()=>{t.scope.off(),bl(e)}},bd=()=>{mn&&mn.scope.off(),bl(null)};function b0(t){return t.vnode.shapeFlag&4}let qo=!1;function ay(t,e=!1,n=!1){e&&mu(e);const{props:i,children:r}=t.vnode,s=b0(t);Wx(t,i,s,e),Jx(t,r,n||e);const o=s?ly(t,e):void 0;return e&&mu(!1),o}function ly(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Px);const{setup:i}=n;if(i){Ki();const r=t.setupContext=i.length>1?uy(t):null,s=ia(t),o=na(i,t,0,[t.props,r]),a=xg(o);if(Zi(),s(),(a||t.sp)&&!Ns(t)&&Zg(t),a){if(o.then(bd,bd),e)return o.then(l=>{Sd(t,l)}).catch(l=>{Vl(l,t,0)});t.asyncDep=o}else Sd(t,o)}else S0(t)}function Sd(t,e,n){je(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xt(e)&&(t.setupState=Gg(e)),S0(t)}function S0(t,e,n){const i=t.type;t.render||(t.render=i.render||Si);{const r=ia(t);Ki();try{Rx(t)}finally{Zi(),r()}}}const cy={get(t,e){return pn(t,"get",""),t[e]}};function uy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,cy),slots:t.slots,emit:t.emit,expose:e}}function Xl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Gg(Vg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in No)return No[n](t)},has(e,n){return n in e||n in No}})):t.proxy}function hy(t,e=!0){return je(t)?t.displayName||t.name:t.name||e&&t.__name}function fy(t){return je(t)&&"__vccOpts"in t}const pt=(t,e)=>ix(t,e,qo);function wr(t,e,n){try{yl(-1);const i=arguments.length;return i===2?xt(e)&&!Ke(e)?Xo(e)?Xt(t,null,[e]):Xt(t,e):Xt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Xo(n)&&(n=[n]),Xt(t,e,n))}finally{yl(1)}}const dy="3.5.28";let gu;const Md=typeof window<"u"&&window.trustedTypes;if(Md)try{gu=Md.createPolicy("vue",{createHTML:t=>t})}catch{}const M0=gu?t=>gu.createHTML(t):t=>t,py="http://www.w3.org/2000/svg",my="http://www.w3.org/1998/Math/MathML",Vi=typeof document<"u"?document:null,wd=Vi&&Vi.createElement("template"),gy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Vi.createElementNS(py,t):e==="mathml"?Vi.createElementNS(my,t):n?Vi.createElement(t,{is:n}):Vi.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Vi.createTextNode(t),createComment:t=>Vi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{wd.innerHTML=M0(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=wd.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_y=Symbol("_vtc");function vy(t,e,n){const i=t[_y];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ed=Symbol("_vod"),xy=Symbol("_vsh"),yy=Symbol(""),by=/(?:^|;)\s*display\s*:/;function Sy(t,e,n){const i=t.style,r=Jt(n);let s=!1;if(n&&!r){if(e)if(Jt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&nl(i,a,"")}else for(const o in e)n[o]==null&&nl(i,o,"");for(const o in n)o==="display"&&(s=!0),nl(i,o,n[o])}else if(r){if(e!==n){const o=i[yy];o&&(n+=";"+o),i.cssText=n,s=by.test(n)}}else e&&t.removeAttribute("style");Ed in t&&(t[Ed]=s?i.display:"",t[xy]&&(i.display="none"))}const Td=/\s*!important$/;function nl(t,e,n){if(Ke(n))n.forEach(i=>nl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=My(t,e);Td.test(n)?t.setProperty(ns(i),n.replace(Td,""),"important"):t[i]=n}}const Ad=["Webkit","Moz","ms"],uc={};function My(t,e){const n=uc[e];if(n)return n;let i=Un(e);if(i!=="filter"&&i in t)return uc[e]=i;i=Fl(i);for(let r=0;r<Ad.length;r++){const s=Ad[r]+i;if(s in t)return uc[e]=s}return e}const Cd="http://www.w3.org/1999/xlink";function Pd(t,e,n,i,r,s=Ev(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Cd,e.slice(6,e.length)):t.setAttributeNS(Cd,e,n):n==null||s&&!wg(n)?t.removeAttribute(e):t.setAttribute(e,s?"":si(n)?String(n):n)}function Rd(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?M0(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=wg(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function w0(t,e,n,i){t.addEventListener(e,n,i)}function wy(t,e,n,i){t.removeEventListener(e,n,i)}const Dd=Symbol("_vei");function Ey(t,e,n,i,r=null){const s=t[Dd]||(t[Dd]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Ty(e);if(i){const c=s[e]=Py(i,r);w0(t,a,c,l)}else o&&(wy(t,a,o,l),s[e]=void 0)}}const Id=/(?:Once|Passive|Capture)$/;function Ty(t){let e;if(Id.test(t)){e={};let i;for(;i=t.match(Id);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ns(t.slice(2)),e]}let hc=0;const Ay=Promise.resolve(),Cy=()=>hc||(Ay.then(()=>hc=0),hc=Date.now());function Py(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ei(Ry(i,n.value),e,5,[i])};return n.value=t,n.attached=Cy(),n}function Ry(t,e){if(Ke(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Ld=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Dy=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?vy(t,i,o):e==="style"?Sy(t,n,i):Ll(e)?Eh(e)||Ey(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Iy(t,e,i,o))?(Rd(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Pd(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Jt(i))?Rd(t,Un(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Pd(t,e,i,o))};function Iy(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ld(e)&&je(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ld(e)&&Jt(n)?!1:e in t}const Nd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ke(e)?n=>ja(e,n):e},fc=Symbol("_assign"),Ly={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const r=Nl(e);w0(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Mg(Sl(o)):Sl(o));t[fc](t.multiple?r?new Set(s):s:s[0]),t._assigning=!0,Nh(()=>{t._assigning=!1})}),t[fc]=Nd(i)},mounted(t,{value:e}){Ud(t,e)},beforeUpdate(t,e,n){t[fc]=Nd(n)},updated(t,{value:e}){t._assigning||Ud(t,e)}};function Ud(t,e){const n=t.multiple,i=Ke(e);if(!(n&&!i&&!Nl(e))){for(let r=0,s=t.options.length;r<s;r++){const o=t.options[r],a=Sl(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Av(e,a)>-1}else o.selected=e.has(a);else if(ta(Sl(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Sl(t){return"_value"in t?t._value:t.value}const Ny=un({patchProp:Dy},gy);let Od;function Uy(){return Od||(Od=Kx(Ny))}const Oy=((...t)=>{const e=Uy().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=ky(i);if(!r)return;const s=e._component;!je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Fy(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Fy(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ky(t){return Jt(t)?document.querySelector(t):t}const By=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const Fd=t=>t==="";const zy=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();const kd=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Vy=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());const Hy=t=>{const e=Vy(t);return e.charAt(0).toUpperCase()+e.slice(1)};var uo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const Gy=({name:t,iconNode:e,absoluteStrokeWidth:n,"absolute-stroke-width":i,strokeWidth:r,"stroke-width":s,size:o=uo.width,color:a=uo.stroke,...l},{slots:c})=>wr("svg",{...uo,...l,width:o,height:o,stroke:a,"stroke-width":Fd(n)||Fd(i)||n===!0||i===!0?Number(r||s||uo["stroke-width"])*24/Number(o):r||s||uo["stroke-width"],class:zy("lucide",l.class,...t?[`lucide-${kd(Hy(t))}-icon`,`lucide-${kd(t)}`]:["lucide-icon"]),...!c.default&&!By(l)&&{"aria-hidden":"true"}},[...e.map(u=>wr(...u)),...c.default?[c.default()]:[]]);const Ri=(t,e)=>(n,{slots:i,attrs:r})=>wr(Gy,{...r,...n,iconNode:e,name:t},i);const Wy=Ri("clipboard-list",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);const Xy=Ri("cuboid",[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",key:"1u2ovd"}],["path",{d:"M10 22v-8L2.25 9.15",key:"11pn4q"}],["path",{d:"m10 14 11.77-6.87",key:"1kt1wh"}]]);const qy=Ri("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);const Yy=Ri("move-3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);const Jy=Ri("rectangle-horizontal",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);const $y=Ri("rectangle-vertical",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]]);const Ky=Ri("rotate-3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);const Zy=Ri("save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);const Qy=Ri("scale-3d",[["path",{d:"M5 7v11a1 1 0 0 0 1 1h11",key:"13dt1j"}],["path",{d:"M5.293 18.707 11 13",key:"ezgbsx"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}]]);const jy=Ri("square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);const Wh="182",Qr={ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eb=0,Bd=1,tb=2,il=1,E0=2,Mo=3,Ar=0,_n=1,wn=2,Ji=0,Fs=1,zd=2,Vd=3,Hd=4,nb=5,Wr=100,ib=101,rb=102,sb=103,ob=104,ab=200,lb=201,cb=202,ub=203,_u=204,vu=205,hb=206,fb=207,db=208,pb=209,mb=210,gb=211,_b=212,vb=213,xb=214,xu=0,yu=1,bu=2,Hs=3,Su=4,Mu=5,wu=6,Eu=7,T0=0,yb=1,bb=2,Mi=0,A0=1,C0=2,P0=3,Xh=4,R0=5,D0=6,I0=7,L0=300,es=301,Gs=302,Tu=303,Au=304,ql=306,Cu=1e3,Yi=1001,Pu=1002,cn=1003,Sb=1004,ma=1005,gn=1006,dc=1007,qr=1008,Hn=1009,N0=1010,U0=1011,Yo=1012,qh=1013,Ci=1014,yi=1015,ji=1016,Yh=1017,Jh=1018,Jo=1020,O0=35902,F0=35899,k0=1021,B0=1022,ii=1023,er=1026,Yr=1027,z0=1028,$h=1029,Ws=1030,Kh=1031,Zh=1033,rl=33776,sl=33777,ol=33778,al=33779,Ru=35840,Du=35841,Iu=35842,Lu=35843,Nu=36196,Uu=37492,Ou=37496,Fu=37488,ku=37489,Bu=37490,zu=37491,Vu=37808,Hu=37809,Gu=37810,Wu=37811,Xu=37812,qu=37813,Yu=37814,Ju=37815,$u=37816,Ku=37817,Zu=37818,Qu=37819,ju=37820,eh=37821,th=36492,nh=36494,ih=36495,rh=36283,sh=36284,oh=36285,ah=36286,Mb=3200,V0=0,wb=1,pr="",zn="srgb",Xs="srgb-linear",Ml="linear",St="srgb",cs=7680,Gd=519,Eb=512,Tb=513,Ab=514,Qh=515,Cb=516,Pb=517,jh=518,Rb=519,Wd=35044,Xd="300 es",bi=2e3,wl=2001;function H0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function El(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Db(){const t=El("canvas");return t.style.display="block",t}const qd={};function Yd(...t){const e="THREE."+t.shift();console.log(e,...t)}function Je(...t){const e="THREE."+t.shift();console.warn(e,...t)}function dt(...t){const e="THREE."+t.shift();console.error(e,...t)}function $o(...t){const e=t.join(" ");e in qd||(qd[e]=!0,Je(...t))}function Ib(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jd=1234567;const Oo=Math.PI/180,qs=180/Math.PI;function rs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[t&255]+hn[t>>8&255]+hn[t>>16&255]+hn[t>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function st(t,e,n){return Math.max(e,Math.min(n,t))}function ef(t,e){return(t%e+e)%e}function Lb(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Nb(t,e,n){return t!==e?(n-t)/(e-t):0}function Fo(t,e,n){return(1-n)*t+n*e}function Ub(t,e,n,i){return Fo(t,e,1-Math.exp(-n*i))}function Ob(t,e=1){return e-Math.abs(ef(t,e*2)-e)}function Fb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function kb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Bb(t,e){return t+Math.floor(Math.random()*(e-t+1))}function zb(t,e){return t+Math.random()*(e-t)}function Vb(t){return t*(.5-Math.random())}function Hb(t){t!==void 0&&(Jd=t);let e=Jd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gb(t){return t*Oo}function Wb(t){return t*qs}function Xb(t){return(t&t-1)===0&&t!==0}function qb(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Yb(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Jb(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*h,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Es(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function bn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Tl={DEG2RAD:Oo,RAD2DEG:qs,generateUUID:rs,clamp:st,euclideanModulo:ef,mapLinear:Lb,inverseLerp:Nb,lerp:Fo,damp:Ub,pingpong:Ob,smoothstep:Fb,smootherstep:kb,randInt:Bb,randFloat:zb,randFloatSpread:Vb,seededRandom:Hb,degToRad:Gb,radToDeg:Wb,isPowerOfTwo:Xb,ceilPowerOfTwo:qb,floorPowerOfTwo:Yb,setQuaternionFromProperEuler:Jb,normalize:bn,denormalize:Es};class me{constructor(e=0,n=0){me.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let an=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a>=1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let m=l*d+c*p+u*g+h*_;m<0&&(d=-d,p=-p,g=-g,_=-_,m=-m);let f=1-a;if(m<.9995){const x=Math.acos(m),y=Math.sin(x);f=Math.sin(f*x)/y,a=Math.sin(a*x)/y,l=l*f+d*a,c=c*f+p*a,u=u*f+g*a,h=h*f+_*a}else{l=l*f+d*a,c=c*f+p*a,u=u*f+g*a,h=h*f+_*a;const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*h+l*p-c*d,e[n+1]=l*g+u*d+c*h-a*p,e[n+2]=c*g+u*p+a*d-l*h,e[n+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class P{constructor(e=0,n=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($d.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($d.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this.z=st(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this.z=st(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pc=new P,$d=new an;class rt{constructor(e,n,i,r,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],f=r[6],x=r[1],y=r[4],b=r[7],T=r[2],C=r[5],D=r[8];return s[0]=o*_+a*x+l*T,s[3]=o*m+a*y+l*C,s[6]=o*f+a*b+l*D,s[1]=c*_+u*x+h*T,s[4]=c*m+u*y+h*C,s[7]=c*f+u*b+h*D,s[2]=d*_+p*x+g*T,s[5]=d*m+p*y+g*C,s[8]=d*f+p*b+g*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(mc.makeScale(e,n)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mc=new rt,Kd=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zd=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $b(){const t={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===St&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(r.r=ks(r.r),r.g=ks(r.g),r.b=ks(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pr?Ml:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $o("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $o("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Xs]:{primaries:e,whitePoint:i,transfer:Ml,toXYZ:Kd,fromXYZ:Zd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:i,transfer:St,toXYZ:Kd,fromXYZ:Zd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),t}const mt=$b();function $i(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ks(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let us;class Kb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{us===void 0&&(us=El("canvas")),us.width=e.width,us.height=e.height;const r=us.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=us}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=El("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=$i(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($i(n[i]/255)*255):n[i]=$i(n[i]);return{data:n,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zb=0;class tf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gc(r[o].image)):s.push(gc(r[o]))}else s=gc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function gc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Kb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}let Qb=0;const _c=new P;class Tn extends is{constructor(e=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,i=Yi,r=Yi,s=gn,o=qr,a=ii,l=Hn,c=Tn.DEFAULT_ANISOTROPY,u=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qb++}),this.uuid=rs(),this.name="",this.source=new tf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_c).x}get height(){return this.source.getSize(_c).y}get depth(){return this.source.getSize(_c).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Je(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Je(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cu:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case Pu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cu:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case Pu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=L0;Tn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,i=0,r=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,b=(p+1)/2,T=(f+1)/2,C=(u+d)/4,D=(h+_)/4,R=(g+m)/4;return y>b&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=D/i):b>T?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=C/r,s=R/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=D/s,r=R/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this.z=st(this.z,e.z,n.z),this.w=st(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this.z=st(this.z,e,n),this.w=st(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jb extends is{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Tn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new tf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends jb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class G0 extends Tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eS extends Tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ra{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ho),_a.subVectors(this.max,ho),hs.subVectors(e.a,ho),fs.subVectors(e.b,ho),ds.subVectors(e.c,ho),ir.subVectors(fs,hs),rr.subVectors(ds,fs),Nr.subVectors(hs,ds);let n=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Nr.z,Nr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Nr.z,0,-Nr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Nr.y,Nr.x,0];return!vc(n,hs,fs,ds,_a)||(n=[1,0,0,0,1,0,0,0,1],!vc(n,hs,fs,ds,_a))?!1:(va.crossVectors(ir,rr),n=[va.x,va.y,va.z],vc(n,hs,fs,ds,_a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new P,new P,new P,new P,new P,new P,new P,new P],Qn=new P,ga=new ra,hs=new P,fs=new P,ds=new P,ir=new P,rr=new P,Nr=new P,ho=new P,_a=new P,va=new P,Ur=new P;function vc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ur.fromArray(t,s);const a=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),l=e.dot(Ur),c=n.dot(Ur),u=i.dot(Ur);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const tS=new ra,fo=new P,xc=new P;let sa=class{constructor(e=new P,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):tS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);const n=fo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(fo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(xc)),this.expandByPoint(fo.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};const Ui=new P,yc=new P,xa=new P,sr=new P,bc=new P,ya=new P,Sc=new P;class oa{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yc.copy(e).add(n).multiplyScalar(.5),xa.copy(n).sub(e).normalize(),sr.copy(this.origin).sub(yc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(xa),a=sr.dot(this.direction),l=-sr.dot(xa),c=sr.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(yc).addScaledVector(xa,d),p}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);const i=Ui.dot(this.direction),r=Ui.dot(Ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,i,r,s){bc.subVectors(n,e),ya.subVectors(i,e),Sc.crossVectors(bc,ya);let o=this.direction.dot(Sc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sr.subVectors(this.origin,e);const l=a*this.direction.dot(ya.crossVectors(sr,ya));if(l<0)return null;const c=a*this.direction.dot(bc.cross(sr));if(c<0||l+c>o)return null;const u=-a*sr.dot(Sc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,o,a,l,c,u,h,d,p,g,_,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,d,p,g,_,m)}set(e,n,i,r,s,o,a,l,c,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,_=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;n[0]=d+_*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;n[0]=d-_*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=_-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,_=a*h;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+_,n[1]=l*h,n[5]=_*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-d*h,n[8]=g*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+g,n[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+_,n[5]=o*u,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*u,n[10]=_*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nS,e,iS)}lookAt(e,n,i){const r=this.elements;return kn.subVectors(e,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),or.crossVectors(i,kn),or.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),or.crossVectors(i,kn)),or.normalize(),ba.crossVectors(kn,or),r[0]=or.x,r[4]=ba.x,r[8]=kn.x,r[1]=or.y,r[5]=ba.y,r[9]=kn.y,r[2]=or.z,r[6]=ba.z,r[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],x=i[3],y=i[7],b=i[11],T=i[15],C=r[0],D=r[4],R=r[8],S=r[12],M=r[1],L=r[5],V=r[9],q=r[13],j=r[2],J=r[6],W=r[10],k=r[14],H=r[3],ce=r[7],pe=r[11],fe=r[15];return s[0]=o*C+a*M+l*j+c*H,s[4]=o*D+a*L+l*J+c*ce,s[8]=o*R+a*V+l*W+c*pe,s[12]=o*S+a*q+l*k+c*fe,s[1]=u*C+h*M+d*j+p*H,s[5]=u*D+h*L+d*J+p*ce,s[9]=u*R+h*V+d*W+p*pe,s[13]=u*S+h*q+d*k+p*fe,s[2]=g*C+_*M+m*j+f*H,s[6]=g*D+_*L+m*J+f*ce,s[10]=g*R+_*V+m*W+f*pe,s[14]=g*S+_*q+m*k+f*fe,s[3]=x*C+y*M+b*j+T*H,s[7]=x*D+y*L+b*J+T*ce,s[11]=x*R+y*V+b*W+T*pe,s[15]=x*S+y*q+b*k+T*fe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15],x=l*p-c*d,y=a*p-c*h,b=a*d-l*h,T=o*p-c*u,C=o*d-l*u,D=o*h-a*u;return n*(_*x-m*y+f*b)-i*(g*x-m*T+f*C)+r*(g*y-_*T+f*D)-s*(g*b-_*C+m*D)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],x=h*m*c-_*d*c+_*l*p-a*m*p-h*l*f+a*d*f,y=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,b=u*_*c-g*h*c+g*a*p-o*_*p-u*a*f+o*h*f,T=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,C=n*x+i*y+r*b+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return e[0]=x*D,e[1]=(_*d*s-h*m*s-_*r*p+i*m*p+h*r*f-i*d*f)*D,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*f+i*l*f)*D,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*D,e[4]=y*D,e[5]=(u*m*s-g*d*s+g*r*p-n*m*p-u*r*f+n*d*f)*D,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*f-n*l*f)*D,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*D,e[8]=b*D,e[9]=(g*h*s-u*_*s-g*i*p+n*_*p+u*i*f-n*h*f)*D,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*f+n*a*f)*D,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*p-n*a*p)*D,e[12]=T*D,e[13]=(u*_*r-g*h*r+g*i*d-n*_*d-u*i*m+n*h*m)*D,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*D,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*d+n*a*d)*D,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,g=s*h,_=o*u,m=o*h,f=a*h,x=l*c,y=l*u,b=l*h,T=i.x,C=i.y,D=i.z;return r[0]=(1-(_+f))*T,r[1]=(p+b)*T,r[2]=(g-y)*T,r[3]=0,r[4]=(p-b)*C,r[5]=(1-(d+f))*C,r[6]=(m+x)*C,r[7]=0,r[8]=(g+y)*D,r[9]=(m-x)*D,r[10]=(1-(d+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=ps.set(r[0],r[1],r[2]).length();const o=ps.set(r[4],r[5],r[6]).length(),a=ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),jn.copy(this);const c=1/s,u=1/o,h=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,n.setFromRotationMatrix(jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=bi,l=!1){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===bi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===wl)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=bi,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===bi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===wl)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ps=new P,jn=new ht,nS=new P(0,0,0),iS=new P(1,1,1),or=new P,ba=new P,kn=new P,Qd=new ht,jd=new an;class ai{constructor(e=0,n=0,i=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Qd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jd.setFromEuler(this),this.setFromQuaternion(jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class nf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rS=0;const ep=new P,ms=new an,Oi=new ht,Sa=new P,po=new P,sS=new P,oS=new an,tp=new P(1,0,0),np=new P(0,1,0),ip=new P(0,0,1),rp={type:"added"},aS={type:"removed"},gs={type:"childadded",child:null},Mc={type:"childremoved",child:null};class Tt extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new P,n=new ai,i=new an,r=new P(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new rt}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(tp,e)}rotateY(e){return this.rotateOnAxis(np,e)}rotateZ(e){return this.rotateOnAxis(ip,e)}translateOnAxis(e,n){return ep.copy(e).applyQuaternion(this.quaternion),this.position.add(ep.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(tp,e)}translateY(e){return this.translateOnAxis(np,e)}translateZ(e){return this.translateOnAxis(ip,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Sa.copy(e):Sa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(po,Sa,this.up):Oi.lookAt(Sa,po,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(Oi),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rp),gs.child=e,this.dispatchEvent(gs),gs.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(aS),Mc.child=e,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rp),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,sS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,oS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new P(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new P,Fi=new P,wc=new P,ki=new P,_s=new P,vs=new P,sp=new P,Ec=new P,Tc=new P,Ac=new P,Cc=new Gt,Pc=new Gt,Rc=new Gt;class ti{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ei.subVectors(e,n),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ei.subVectors(r,n),Fi.subVectors(i,n),wc.subVectors(e,n);const o=ei.dot(ei),a=ei.dot(Fi),l=ei.dot(wc),c=Fi.dot(Fi),u=Fi.dot(wc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(o,ki.y),l.addScaledVector(a,ki.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Cc.setScalar(0),Pc.setScalar(0),Rc.setScalar(0),Cc.fromBufferAttribute(e,n),Pc.fromBufferAttribute(e,i),Rc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Cc,s.x),o.addScaledVector(Pc,s.y),o.addScaledVector(Rc,s.z),o}static isFrontFacing(e,n,i,r){return ei.subVectors(i,n),Fi.subVectors(e,n),ei.cross(Fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ei.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;_s.subVectors(r,i),vs.subVectors(s,i),Ec.subVectors(e,i);const l=_s.dot(Ec),c=vs.dot(Ec);if(l<=0&&c<=0)return n.copy(i);Tc.subVectors(e,r);const u=_s.dot(Tc),h=vs.dot(Tc);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(_s,o);Ac.subVectors(e,s);const p=_s.dot(Ac),g=vs.dot(Ac);if(g>=0&&p<=g)return n.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(vs,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return sp.subVectors(s,r),a=(h-u)/(h-u+(p-g)),n.copy(r).addScaledVector(sp,a);const f=1/(m+_+d);return o=_*f,a=d*f,n.copy(i).addScaledVector(_s,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const W0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function Dc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=mt.workingColorSpace){return this.r=e,this.g=n,this.b=i,mt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=mt.workingColorSpace){if(e=ef(e,1),n=st(n,0,1),i=st(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Dc(o,s,e+1/3),this.g=Dc(o,s,e),this.b=Dc(o,s,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,n=zn){function i(s){s!==void 0&&parseFloat(s)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zn){const i=W0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return mt.workingToColorSpace(fn.copy(this),e),Math.round(st(fn.r*255,0,255))*65536+Math.round(st(fn.g*255,0,255))*256+Math.round(st(fn.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=mt.workingColorSpace){mt.workingToColorSpace(fn.copy(this),n);const i=fn.r,r=fn.g,s=fn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=mt.workingColorSpace){return mt.workingToColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=zn){mt.workingToColorSpace(fn.copy(this),e);const n=fn.r,i=fn.g,r=fn.b;return e!==zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+n,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ar),e.getHSL(Ma);const i=Fo(ar.h,Ma.h,n),r=Fo(ar.s,Ma.s,n),s=Fo(ar.l,Ma.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new $e;$e.NAMES=W0;let lS=0;class ss extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Fs,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_u,this.blendDst=vu,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Je(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Je(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==Ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_u&&(i.blendSrc=this.blendSrc),this.blendDst!==vu&&(i.blendDst=this.blendDst),this.blendEquation!==Wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cr extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=T0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new P,wa=new me;let cS=0;class vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wd,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wa.fromBufferAttribute(this,n),wa.applyMatrix3(e),this.setXY(n,wa.x,wa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Es(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=bn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Es(n,this.array)),n}setX(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Es(n,this.array)),n}setY(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Es(n,this.array)),n}setZ(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Es(n,this.array)),n}setW(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array),r=bn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array),r=bn(r,this.array),s=bn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wd&&(e.usage=this.usage),e}}class X0 extends vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class q0 extends vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class tt extends vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let uS=0;const Jn=new ht,Ic=new Tt,xs=new P,Bn=new ra,mo=new ra,nn=new P;class ft extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H0(e)?q0:X0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new rt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,i){return Jn.makeTranslation(e,n,i),this.applyMatrix4(Jn),this}scale(e,n,i){return Jn.makeScale(e,n,i),this.applyMatrix4(Jn),this}lookAt(e){return Ic.lookAt(e),Ic.updateMatrix(),this.applyMatrix4(Ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Bn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];mo.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Bn.min,mo.min),Bn.expandByPoint(nn),nn.addVectors(Bn.max,mo.max),Bn.expandByPoint(nn)):(Bn.expandByPoint(mo.min),Bn.expandByPoint(mo.max))}Bn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)nn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(nn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)nn.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(e,c),nn.add(xs)),r=Math.max(r,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new P,l[R]=new P;const c=new P,u=new P,h=new P,d=new me,p=new me,g=new me,_=new P,m=new P;function f(R,S,M){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,M),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),a[R].add(_),a[S].add(_),a[M].add(_),l[R].add(m),l[S].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,S=x.length;R<S;++R){const M=x[R],L=M.start,V=M.count;for(let q=L,j=L+V;q<j;q+=3)f(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const y=new P,b=new P,T=new P,C=new P;function D(R){T.fromBufferAttribute(r,R),C.copy(T);const S=a[R];y.copy(S),y.sub(T.multiplyScalar(T.dot(S))).normalize(),b.crossVectors(C,S);const L=b.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,L)}for(let R=0,S=x.length;R<S;++R){const M=x[R],L=M.start,V=M.count;for(let q=L,j=L+V;q<j;q+=3)D(e.getX(q+0)),D(e.getX(q+1)),D(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new vn(d,u,h)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ft,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const op=new ht,Or=new oa,Ea=new sa,ap=new P,Ta=new P,Aa=new P,Ca=new P,Lc=new P,Pa=new P,lp=new P,Ra=new P;let _e=class extends Tt{constructor(e=new ft,n=new Cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Lc.fromBufferAttribute(h,e),o?Pa.addScaledVector(Lc,u):Pa.addScaledVector(Lc.sub(n),u))}n.add(Pa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(Ea.containsPoint(Or.origin)===!1&&(Or.intersectSphere(Ea,ap)===null||Or.origin.distanceToSquared(ap)>(e.far-e.near)**2))&&(op.copy(s).invert(),Or.copy(e.ray).applyMatrix4(op),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=x,T=y;b<T;b+=3){const C=a.getX(b),D=a.getX(b+1),R=a.getX(b+2);r=Da(this,f,e,i,c,u,h,C,D,R),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);r=Da(this,o,e,i,c,u,h,x,y,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=x,T=y;b<T;b+=3){const C=b,D=b+1,R=b+2;r=Da(this,f,e,i,c,u,h,C,D,R),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=m,y=m+1,b=m+2;r=Da(this,o,e,i,c,u,h,x,y,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}};function hS(t,e,n,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ar,a),l===null)return null;Ra.copy(a),Ra.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ra);return c<n.near||c>n.far?null:{distance:c,point:Ra.clone(),object:t}}function Da(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ta),t.getVertexPosition(l,Aa),t.getVertexPosition(c,Ca);const u=hS(t,e,n,i,Ta,Aa,Ca,lp);if(u){const h=new P;ti.getBarycoord(lp,Ta,Aa,Ca,h),r&&(u.uv=ti.getInterpolatedAttribute(r,a,l,c,h,new me)),s&&(u.uv1=ti.getInterpolatedAttribute(s,a,l,c,h,new me)),o&&(u.normal=ti.getInterpolatedAttribute(o,a,l,c,h,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};ti.getNormal(Ta,Aa,Ca,d.normal),u.face=d,u.barycoord=h}return u}class Ht extends ft{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function g(_,m,f,x,y,b,T,C,D,R,S){const M=b/D,L=T/R,V=b/2,q=T/2,j=C/2,J=D+1,W=R+1;let k=0,H=0;const ce=new P;for(let pe=0;pe<W;pe++){const fe=pe*L-q;for(let ke=0;ke<J;ke++){const Le=ke*M-V;ce[_]=Le*x,ce[m]=fe*y,ce[f]=j,c.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[f]=C>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(ke/D),h.push(1-pe/R),k+=1}}for(let pe=0;pe<R;pe++)for(let fe=0;fe<D;fe++){const ke=d+fe+J*pe,Le=d+fe+J*(pe+1),Qe=d+(fe+1)+J*(pe+1),ut=d+(fe+1)+J*pe;l.push(ke,Le,ut),l.push(Le,Qe,ut),H+=6}a.addGroup(p,H,S),p+=H,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Sn(t){const e={};for(let n=0;n<t.length;n++){const i=Ys(t[n]);for(const r in i)e[r]=i[r]}return e}function fS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Y0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const J0={clone:Ys,merge:Sn};var dS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dS,this.fragmentShader=pS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=fS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class $0 extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new P,cp=new me,up=new me;class Ln extends $0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,n){return this.getViewBounds(e,cp,up),n.subVectors(up,cp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Oo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ys=-90,bs=1;class mS extends Tt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(ys,bs,e,n);r.layers=this.layers,this.add(r);const s=new Ln(ys,bs,e,n);s.layers=this.layers,this.add(s);const o=new Ln(ys,bs,e,n);o.layers=this.layers,this.add(o);const a=new Ln(ys,bs,e,n);a.layers=this.layers,this.add(a);const l=new Ln(ys,bs,e,n);l.layers=this.layers,this.add(l);const c=new Ln(ys,bs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class K0 extends Tn{constructor(e=[],n=es,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Z0 extends wi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new K0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ht(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Ji});s.uniforms.tEquirect.value=n;const o=new _e(r,s),a=n.minFilter;return n.minFilter===qr&&(n.minFilter=gn),new mS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Ia extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gS={type:"move"};class Nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ia;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class _S extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class vS extends Tn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=cn,u=cn,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uc=new P,xS=new P,yS=new rt;let Gi=class{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Uc.subVectors(i,n).cross(xS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Uc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||yS.getNormalMatrix(e),r=this.coplanarPoint(Uc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Fr=new sa,bS=new me(.5,.5),La=new P;class rf{constructor(e=new Gi,n=new Gi,i=new Gi,r=new Gi,s=new Gi,o=new Gi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=bi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],p=s[7],g=s[8],_=s[9],m=s[10],f=s[11],x=s[12],y=s[13],b=s[14],T=s[15];if(r[0].setComponents(c-o,p-u,f-g,T-x).normalize(),r[1].setComponents(c+o,p+u,f+g,T+x).normalize(),r[2].setComponents(c+a,p+h,f+_,T+y).normalize(),r[3].setComponents(c-a,p-h,f-_,T-y).normalize(),i)r[4].setComponents(l,d,m,b).normalize(),r[5].setComponents(c-l,p-d,f-m,T-b).normalize();else if(r[4].setComponents(c-l,p-d,f-m,T-b).normalize(),n===bi)r[5].setComponents(c+l,p+d,f+m,T+b).normalize();else if(n===wl)r[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){Fr.center.set(0,0,0);const n=bS.distanceTo(e.center);return Fr.radius=.7071067811865476+n,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(La.x=r.normal.x>0?e.max.x:e.min.x,La.y=r.normal.y>0?e.max.y:e.min.y,La.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(La)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ci extends ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Al=new P,Cl=new P,hp=new ht,go=new oa,Na=new sa,Oc=new P,fp=new P;let on=class extends Tt{constructor(e=new ft,n=new ci){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Al.fromBufferAttribute(n,r-1),Cl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Al.distanceTo(Cl);e.setAttribute("lineDistance",new tt(i,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(r),Na.radius+=s,e.ray.intersectsSphere(Na)===!1)return;hp.copy(r).invert(),go.copy(e.ray).applyMatrix4(hp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=u.getX(_),x=u.getX(_+1),y=Ua(this,e,go,l,f,x,_);y&&n.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),f=Ua(this,e,go,l,_,m,g-1);f&&n.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=Ua(this,e,go,l,_,_+1,_);f&&n.push(f)}if(this.isLineLoop){const _=Ua(this,e,go,l,g-1,p,g-1);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ua(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Al.fromBufferAttribute(a,r),Cl.fromBufferAttribute(a,s),n.distanceSqToSegment(Al,Cl,Oc,fp)>i)return;Oc.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Oc);if(!(c<e.near||c>e.far))return{distance:c,point:fp.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const dp=new P,pp=new P;class Q0 extends on{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)dp.fromBufferAttribute(n,r),pp.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+dp.distanceTo(pp);e.setAttribute("lineDistance",new tt(i,1))}else Je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sf extends ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mp=new ht,lh=new oa,Oa=new sa,Fa=new P;class of extends Tt{constructor(e=new ft,n=new sf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(r),Oa.radius+=s,e.ray.intersectsSphere(Oa)===!1)return;mp.copy(r).invert(),lh.copy(e.ray).applyMatrix4(mp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);Fa.fromBufferAttribute(h,m),gp(Fa,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Fa.fromBufferAttribute(h,g),gp(Fa,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gp(t,e,n,i,r,s,o){const a=lh.distanceSqToPoint(t);if(a<n){const l=new P;lh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ko extends Tn{constructor(e,n,i=Ci,r,s,o,a=cn,l=cn,c,u=er,h=1){if(u!==er&&u!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class SS extends Ko{constructor(e,n=Ci,i=es,r,s,o=cn,a=cn,l,c=er){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class j0 extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class af extends ft{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],u=n/2,h=Math.PI/2*e,d=n,p=2*h+d,g=i*2+s,_=r+1,m=new P,f=new P;for(let x=0;x<=g;x++){let y=0,b=0,T=0,C=0;if(x<=i){const S=x/i,M=S*Math.PI/2;b=-u-e*Math.cos(M),T=e*Math.sin(M),C=-e*Math.cos(M),y=S*h}else if(x<=i+s){const S=(x-i)/s;b=-u+S*n,T=e,C=0,y=h+S*d}else{const S=(x-i-s)/i,M=S*Math.PI/2;b=u+e*Math.sin(M),T=e*Math.cos(M),C=e*Math.sin(M),y=h+d+S*h}const D=Math.max(0,Math.min(1,y/p));let R=0;x===0?R=.5/r:x===g&&(R=-.5/r);for(let S=0;S<=r;S++){const M=S/r,L=M*Math.PI*2,V=Math.sin(L),q=Math.cos(L);f.x=-T*q,f.y=b,f.z=T*V,a.push(f.x,f.y,f.z),m.set(-T*q,C,T*V),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+R,D)}if(x>0){const S=(x-1)*_;for(let M=0;M<r;M++){const L=S+M,V=S+M+1,q=x*_+M,j=x*_+M+1;o.push(L,V,q),o.push(V,j,q)}}}this.setIndex(o),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new af(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class lf extends ft{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new P,u=new me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=n;h++,d+=3){const p=i+h/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class rn extends ft{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let g=0;const _=[],m=i/2;let f=0;x(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(p,2));function x(){const b=new P,T=new P;let C=0;const D=(n-e)/i;for(let R=0;R<=s;R++){const S=[],M=R/s,L=M*(n-e)+e;for(let V=0;V<=r;V++){const q=V/r,j=q*l+a,J=Math.sin(j),W=Math.cos(j);T.x=L*J,T.y=-M*i+m,T.z=L*W,h.push(T.x,T.y,T.z),b.set(J,D,W).normalize(),d.push(b.x,b.y,b.z),p.push(q,1-M),S.push(g++)}_.push(S)}for(let R=0;R<r;R++)for(let S=0;S<s;S++){const M=_[S][R],L=_[S+1][R],V=_[S+1][R+1],q=_[S][R+1];(e>0||S!==0)&&(u.push(M,L,q),C+=3),(n>0||S!==s-1)&&(u.push(L,V,q),C+=3)}c.addGroup(f,C,0),f+=C}function y(b){const T=g,C=new me,D=new P;let R=0;const S=b===!0?e:n,M=b===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const L=g;for(let V=0;V<=r;V++){const j=V/r*l+a,J=Math.cos(j),W=Math.sin(j);D.x=S*W,D.y=m*M,D.z=S*J,h.push(D.x,D.y,D.z),d.push(0,M,0),C.x=J*.5+.5,C.y=W*.5*M+.5,p.push(C.x,C.y),g++}for(let V=0;V<r;V++){const q=T+V,j=L+V;b===!0?u.push(j,j+1,q):u.push(j+1,j,q),R+=3}c.addGroup(f,R,b===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yl extends rn{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Yl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cf extends ft{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(s.slice(),3)),this.setAttribute("uv",new tt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new P,b=new P,T=new P;for(let C=0;C<n.length;C+=3)p(n[C+0],y),p(n[C+1],b),p(n[C+2],T),l(y,b,T,x)}function l(x,y,b,T){const C=T+1,D=[];for(let R=0;R<=C;R++){D[R]=[];const S=x.clone().lerp(b,R/C),M=y.clone().lerp(b,R/C),L=C-R;for(let V=0;V<=L;V++)V===0&&R===C?D[R][V]=S:D[R][V]=S.clone().lerp(M,V/L)}for(let R=0;R<C;R++)for(let S=0;S<2*(C-R)-1;S++){const M=Math.floor(S/2);S%2===0?(d(D[R][M+1]),d(D[R+1][M]),d(D[R][M])):(d(D[R][M+1]),d(D[R+1][M+1]),d(D[R+1][M]))}}function c(x){const y=new P;for(let b=0;b<s.length;b+=3)y.x=s[b+0],y.y=s[b+1],y.z=s[b+2],y.normalize().multiplyScalar(x),s[b+0]=y.x,s[b+1]=y.y,s[b+2]=y.z}function u(){const x=new P;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const b=m(x)/2/Math.PI+.5,T=f(x)/Math.PI+.5;o.push(b,1-T)}g(),h()}function h(){for(let x=0;x<o.length;x+=6){const y=o[x+0],b=o[x+2],T=o[x+4],C=Math.max(y,b,T),D=Math.min(y,b,T);C>.9&&D<.1&&(y<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function p(x,y){const b=x*3;y.x=e[b+0],y.y=e[b+1],y.z=e[b+2]}function g(){const x=new P,y=new P,b=new P,T=new P,C=new me,D=new me,R=new me;for(let S=0,M=0;S<s.length;S+=9,M+=6){x.set(s[S+0],s[S+1],s[S+2]),y.set(s[S+3],s[S+4],s[S+5]),b.set(s[S+6],s[S+7],s[S+8]),C.set(o[M+0],o[M+1]),D.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),T.copy(x).add(y).add(b).divideScalar(3);const L=m(T);_(C,M+0,x,L),_(D,M+2,y,L),_(R,M+4,b,L)}}function _(x,y,b,T){T<0&&x.x===1&&(o[y]=x.x-1),b.x===0&&b.z===0&&(o[y]=T/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cf(e.vertices,e.indices,e.radius,e.detail)}}class Di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,p=(o-u)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new me:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new P,r=[],s=[],o=[],a=new P,l=new ht;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(st(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(st(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class uf extends Di{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new me){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class MS extends uf{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function hf(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const ka=new P,Fc=new hf,kc=new hf,Bc=new hf;class wS extends Di{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new P){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(ka.subVectors(r[0],r[1]).add(r[0]),c=ka);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ka.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ka),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Fc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),kc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),Bc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Fc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),kc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Bc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Fc.calc(l),kc.calc(l),Bc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _p(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function ES(t,e){const n=1-t;return n*n*e}function TS(t,e){return 2*(1-t)*t*e}function AS(t,e){return t*t*e}function ko(t,e,n,i){return ES(t,e)+TS(t,n)+AS(t,i)}function CS(t,e){const n=1-t;return n*n*n*e}function PS(t,e){const n=1-t;return 3*n*n*t*e}function RS(t,e){return 3*(1-t)*t*t*e}function DS(t,e){return t*t*t*e}function Bo(t,e,n,i,r){return CS(t,e)+PS(t,n)+RS(t,i)+DS(t,r)}class e_ extends Di{constructor(e=new me,n=new me,i=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new me){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Bo(e,r.x,s.x,o.x,a.x),Bo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class IS extends Di{constructor(e=new P,n=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new P){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Bo(e,r.x,s.x,o.x,a.x),Bo(e,r.y,s.y,o.y,a.y),Bo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class t_ extends Di{constructor(e=new me,n=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new me){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new me){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class LS extends Di{constructor(e=new P,n=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new P){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new P){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class n_ extends Di{constructor(e=new me,n=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new me){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ko(e,r.x,s.x,o.x),ko(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class NS extends Di{constructor(e=new P,n=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new P){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ko(e,r.x,s.x,o.x),ko(e,r.y,s.y,o.y),ko(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class i_ extends Di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new me){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(_p(a,l.x,c.x,u.x,h.x),_p(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new me().fromArray(r))}return this}}var ch=Object.freeze({__proto__:null,ArcCurve:MS,CatmullRomCurve3:wS,CubicBezierCurve:e_,CubicBezierCurve3:IS,EllipseCurve:uf,LineCurve:t_,LineCurve3:LS,QuadraticBezierCurve:n_,QuadraticBezierCurve3:NS,SplineCurve:i_});class US extends Di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ch[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new ch[r.type]().fromJSON(r))}return this}}class uh extends US{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new t_(this.currentPoint.clone(),new me(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new n_(this.currentPoint.clone(),new me(e,n),new me(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new e_(this.currentPoint.clone(),new me(e,n),new me(i,r),new me(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new i_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new uf(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ll extends uh{constructor(e){super(e),this.uuid=rs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new uh().fromJSON(r))}return this}}function OS(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=r_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=VS(t,e,s,n)),t.length>80*n){a=t[0],l=t[1];let u=a,h=l;for(let d=n;d<r;d+=n){const p=t[d],g=t[d+1];p<a&&(a=p),g<l&&(l=g),p>u&&(u=p),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Zo(s,o,n,a,l,c,0),o}function r_(t,e,n,i,r){let s;if(r===QS(t,e,n,i)>0)for(let o=e;o<n;o+=i)s=vp(o/i|0,t[o],t[o+1],s);else for(let o=n-i;o>=e;o-=i)s=vp(o/i|0,t[o],t[o+1],s);return s&&Js(s,s.next)&&(jo(s),s=s.next),s}function ts(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Js(n,n.next)||Bt(n.prev,n,n.next)===0)){if(jo(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Zo(t,e,n,i,r,s,o){if(!t)return;!o&&s&&qS(t,i,r,s);let a=t;for(;t.prev!==t.next;){const l=t.prev,c=t.next;if(s?kS(t,i,r,s):FS(t)){e.push(l.i,t.i,c.i),jo(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=BS(ts(t),e),Zo(t,e,n,i,r,s,2)):o===2&&zS(t,e,n,i,r,s):Zo(ts(t),e,n,i,r,s,1);break}}}function FS(t){const e=t.prev,n=t,i=t.next;if(Bt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=Math.min(r,s,o),h=Math.min(a,l,c),d=Math.max(r,s,o),p=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&wo(r,a,s,l,o,c,g.x,g.y)&&Bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function kS(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Bt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,p=Math.min(a,l,c),g=Math.min(u,h,d),_=Math.max(a,l,c),m=Math.max(u,h,d),f=hh(p,g,e,n,i),x=hh(_,m,e,n,i);let y=t.prevZ,b=t.nextZ;for(;y&&y.z>=f&&b&&b.z<=x;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&wo(a,u,l,h,c,d,y.x,y.y)&&Bt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=_&&b.y>=g&&b.y<=m&&b!==r&&b!==o&&wo(a,u,l,h,c,d,b.x,b.y)&&Bt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&wo(a,u,l,h,c,d,y.x,y.y)&&Bt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=x;){if(b.x>=p&&b.x<=_&&b.y>=g&&b.y<=m&&b!==r&&b!==o&&wo(a,u,l,h,c,d,b.x,b.y)&&Bt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function BS(t,e){let n=t;do{const i=n.prev,r=n.next.next;!Js(i,r)&&o_(i,n,n.next,r)&&Qo(i,r)&&Qo(r,i)&&(e.push(i.i,n.i,r.i),jo(n),jo(n.next),n=t=r),n=n.next}while(n!==t);return ts(n)}function zS(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$S(o,a)){let l=a_(o,a);o=ts(o,o.next),l=ts(l,l.next),Zo(o,e,n,i,r,s,0),Zo(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function VS(t,e,n,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=r_(t,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(JS(c))}r.sort(HS);for(let s=0;s<r.length;s++)n=GS(r[s],n);return n}function HS(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),r=(e.next.y-e.y)/(e.next.x-e.x);n=i-r}return n}function GS(t,e){const n=WS(t,e);if(!n)return e;const i=a_(n,t);return ts(i,i.next),ts(n,n.next)}function WS(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,o;if(Js(t,n))return n;do{if(Js(t,n.next))return n.next;if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const h=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=i&&h>s&&(s=h,o=n.x<n.next.x?n:n.next,h===i))return o}n=n.next}while(n!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&s_(r<c?i:s,r,l,c,r<c?s:i,r,n.x,n.y)){const h=Math.abs(r-n.y)/(i-n.x);Qo(n,t)&&(h<u||h===u&&(n.x>o.x||n.x===o.x&&XS(o,n)))&&(o=n,u=h)}n=n.next}while(n!==a);return o}function XS(t,e){return Bt(t.prev,t,e.prev)<0&&Bt(e.next,t,t.next)<0}function qS(t,e,n,i){let r=t;do r.z===0&&(r.z=hh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,YS(r)}function YS(t){let e,n=1;do{let i=t,r;t=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;i=o}s.nextZ=null,n*=2}while(e>1);return t}function hh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function JS(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function s_(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function wo(t,e,n,i,r,s,o,a){return!(t===o&&e===a)&&s_(t,e,n,i,r,s,o,a)}function $S(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!KS(t,e)&&(Qo(t,e)&&Qo(e,t)&&ZS(t,e)&&(Bt(t.prev,t,e.prev)||Bt(t,e.prev,e))||Js(t,e)&&Bt(t.prev,t,t.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Js(t,e){return t.x===e.x&&t.y===e.y}function o_(t,e,n,i){const r=za(Bt(t,e,n)),s=za(Bt(t,e,i)),o=za(Bt(n,i,t)),a=za(Bt(n,i,e));return!!(r!==s&&o!==a||r===0&&Ba(t,n,e)||s===0&&Ba(t,i,e)||o===0&&Ba(n,t,i)||a===0&&Ba(n,e,i))}function Ba(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function za(t){return t>0?1:t<0?-1:0}function KS(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&o_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Qo(t,e){return Bt(t.prev,t,t.next)<0?Bt(t,e,t.next)>=0&&Bt(t,t.prev,e)>=0:Bt(t,e,t.prev)<0||Bt(t,t.next,e)<0}function ZS(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function a_(t,e){const n=fh(t.i,t.x,t.y),i=fh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function vp(t,e,n,i){const r=fh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function jo(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function fh(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function QS(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class jS{static triangulate(e,n,i=2){return OS(e,n,i)}}class Jr{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Jr.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];xp(e),yp(i,e);let o=e.length;n.forEach(xp);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,yp(i,n[l]);const a=jS.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function xp(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function yp(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class ff extends ft{constructor(e=new ll([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new tt(r,3)),this.setAttribute("uv",new tt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,_=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,x=n.UVGenerator!==void 0?n.UVGenerator:eM;let y,b=!1,T,C,D,R;if(f){y=f.getSpacedPoints(u),b=!0,d=!1;const U=f.isCatmullRomCurve3?f.closed:!1;T=f.computeFrenetFrames(u,U),C=new P,D=new P,R=new P}d||(m=0,p=0,g=0,_=0);const S=a.extractPoints(c);let M=S.shape;const L=S.holes;if(!Jr.isClockWise(M)){M=M.reverse();for(let U=0,z=L.length;U<z;U++){const F=L[U];Jr.isClockWise(F)&&(L[U]=F.reverse())}}function q(U){const F=10000000000000001e-36;let X=U[0];for(let E=1;E<=U.length;E++){const re=E%U.length,Z=U[re],Q=Z.x-X.x,ie=Z.y-X.y,w=Q*Q+ie*ie,v=Math.max(Math.abs(Z.x),Math.abs(Z.y),Math.abs(X.x),Math.abs(X.y)),N=F*v*v;if(w<=N){U.splice(re,1),E--;continue}X=Z}}q(M),L.forEach(q);const j=L.length,J=M;for(let U=0;U<j;U++){const z=L[U];M=M.concat(z)}function W(U,z,F){return z||dt("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(z,F)}const k=M.length;function H(U,z,F){let X,E,re;const Z=U.x-z.x,Q=U.y-z.y,ie=F.x-U.x,w=F.y-U.y,v=Z*Z+Q*Q,N=Z*w-Q*ie;if(Math.abs(N)>Number.EPSILON){const Y=Math.sqrt(v),ne=Math.sqrt(ie*ie+w*w),$=z.x-Q/Y,we=z.y+Z/Y,he=F.x-w/ne,Pe=F.y+ie/ne,ze=((he-$)*w-(Pe-we)*ie)/(Z*w-Q*ie);X=$+Z*ze-U.x,E=we+Q*ze-U.y;const ue=X*X+E*E;if(ue<=2)return new me(X,E);re=Math.sqrt(ue/2)}else{let Y=!1;Z>Number.EPSILON?ie>Number.EPSILON&&(Y=!0):Z<-Number.EPSILON?ie<-Number.EPSILON&&(Y=!0):Math.sign(Q)===Math.sign(w)&&(Y=!0),Y?(X=-Q,E=Z,re=Math.sqrt(v)):(X=Z,E=Q,re=Math.sqrt(v/2))}return new me(X/re,E/re)}const ce=[];for(let U=0,z=J.length,F=z-1,X=U+1;U<z;U++,F++,X++)F===z&&(F=0),X===z&&(X=0),ce[U]=H(J[U],J[F],J[X]);const pe=[];let fe,ke=ce.concat();for(let U=0,z=j;U<z;U++){const F=L[U];fe=[];for(let X=0,E=F.length,re=E-1,Z=X+1;X<E;X++,re++,Z++)re===E&&(re=0),Z===E&&(Z=0),fe[X]=H(F[X],F[re],F[Z]);pe.push(fe),ke=ke.concat(fe)}let Le;if(m===0)Le=Jr.triangulateShape(J,L);else{const U=[],z=[];for(let F=0;F<m;F++){const X=F/m,E=p*Math.cos(X*Math.PI/2),re=g*Math.sin(X*Math.PI/2)+_;for(let Z=0,Q=J.length;Z<Q;Z++){const ie=W(J[Z],ce[Z],re);Ve(ie.x,ie.y,-E),X===0&&U.push(ie)}for(let Z=0,Q=j;Z<Q;Z++){const ie=L[Z];fe=pe[Z];const w=[];for(let v=0,N=ie.length;v<N;v++){const Y=W(ie[v],fe[v],re);Ve(Y.x,Y.y,-E),X===0&&w.push(Y)}X===0&&z.push(w)}}Le=Jr.triangulateShape(U,z)}const Qe=Le.length,ut=g+_;for(let U=0;U<k;U++){const z=d?W(M[U],ke[U],ut):M[U];b?(D.copy(T.normals[0]).multiplyScalar(z.x),C.copy(T.binormals[0]).multiplyScalar(z.y),R.copy(y[0]).add(D).add(C),Ve(R.x,R.y,R.z)):Ve(z.x,z.y,0)}for(let U=1;U<=u;U++)for(let z=0;z<k;z++){const F=d?W(M[z],ke[z],ut):M[z];b?(D.copy(T.normals[U]).multiplyScalar(F.x),C.copy(T.binormals[U]).multiplyScalar(F.y),R.copy(y[U]).add(D).add(C),Ve(R.x,R.y,R.z)):Ve(F.x,F.y,h/u*U)}for(let U=m-1;U>=0;U--){const z=U/m,F=p*Math.cos(z*Math.PI/2),X=g*Math.sin(z*Math.PI/2)+_;for(let E=0,re=J.length;E<re;E++){const Z=W(J[E],ce[E],X);Ve(Z.x,Z.y,h+F)}for(let E=0,re=L.length;E<re;E++){const Z=L[E];fe=pe[E];for(let Q=0,ie=Z.length;Q<ie;Q++){const w=W(Z[Q],fe[Q],X);b?Ve(w.x,w.y+y[u-1].y,y[u-1].x+F):Ve(w.x,w.y,h+F)}}}se(),oe();function se(){const U=r.length/3;if(d){let z=0,F=k*z;for(let X=0;X<Qe;X++){const E=Le[X];Me(E[2]+F,E[1]+F,E[0]+F)}z=u+m*2,F=k*z;for(let X=0;X<Qe;X++){const E=Le[X];Me(E[0]+F,E[1]+F,E[2]+F)}}else{for(let z=0;z<Qe;z++){const F=Le[z];Me(F[2],F[1],F[0])}for(let z=0;z<Qe;z++){const F=Le[z];Me(F[0]+k*u,F[1]+k*u,F[2]+k*u)}}i.addGroup(U,r.length/3-U,0)}function oe(){const U=r.length/3;let z=0;Ce(J,z),z+=J.length;for(let F=0,X=L.length;F<X;F++){const E=L[F];Ce(E,z),z+=E.length}i.addGroup(U,r.length/3-U,1)}function Ce(U,z){let F=U.length;for(;--F>=0;){const X=F;let E=F-1;E<0&&(E=U.length-1);for(let re=0,Z=u+m*2;re<Z;re++){const Q=k*re,ie=k*(re+1),w=z+X+Q,v=z+E+Q,N=z+E+ie,Y=z+X+ie;at(w,v,N,Y)}}}function Ve(U,z,F){l.push(U),l.push(z),l.push(F)}function Me(U,z,F){I(U),I(z),I(F);const X=r.length/3,E=x.generateTopUV(i,r,X-3,X-2,X-1);O(E[0]),O(E[1]),O(E[2])}function at(U,z,F,X){I(U),I(z),I(X),I(z),I(F),I(X);const E=r.length/3,re=x.generateSideWallUV(i,r,E-6,E-3,E-2,E-1);O(re[0]),O(re[1]),O(re[3]),O(re[1]),O(re[2]),O(re[3])}function I(U){r.push(l[U*3+0]),r.push(l[U*3+1]),r.push(l[U*3+2])}function O(U){s.push(U.x),s.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return tM(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ch[r.type]().fromJSON(r)),new ff(i,e.options)}}const eM={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new me(s,o),new me(a,l),new me(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],p=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new me(o,1-l),new me(c,1-h),new me(d,1-g),new me(_,1-f)]:[new me(a,1-l),new me(u,1-h),new me(p,1-g),new me(m,1-f)]}};function tM(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Ps extends cf{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ps(e.radius,e.detail)}}class aa extends ft{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=n/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const x=f*d-o;for(let y=0;y<c;y++){const b=y*h-s;g.push(b,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const y=x+c*f,b=x+c*(f+1),T=x+1+c*(f+1),C=x+1+c*f;p.push(y,b,C),p.push(b,T,C)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.widthSegments,e.heightSegments)}}class la extends ft{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new P,d=new P,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const x=[],y=f/i;let b=0;f===0&&o===0?b=.5/n:f===i&&l===Math.PI&&(b=-.5/n);for(let T=0;T<=n;T++){const C=T/n;h.x=-e*Math.cos(r+C*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(C+b,1-y),x.push(c++)}u.push(x)}for(let f=0;f<i;f++)for(let x=0;x<n;x++){const y=u[f][x+1],b=u[f][x],T=u[f+1][x],C=u[f+1][x+1];(f!==0||o>0)&&p.push(y,b,C),(f!==i-1||l<Math.PI)&&p.push(b,T,C)}this.setIndex(p),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mr extends ft{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new P,h=new P,d=new P;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/i*Math.PI*2;h.x=(e+n*Math.cos(m))*Math.cos(_),h.y=(e+n*Math.cos(m))*Math.sin(_),h.z=n*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,f=(r+1)*(p-1)+g,x=(r+1)*p+g;o.push(_,m,x),o.push(m,f,x)}this.setIndex(o),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class nM extends li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class to extends ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=V0,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iM extends to{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rM extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sM extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bp={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class oM{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const aM=new oM;class df{constructor(e){this.manager=e!==void 0?e:aM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}df.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bi={};class lM extends Error{constructor(e,n){super(e),this.response=n}}class cM extends df{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=bp.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(Bi[e]!==void 0){Bi[e].push({onLoad:n,onProgress:i,onError:r});return}Bi[e]=[],Bi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Je("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Bi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){x();function x(){h.read().then(({done:y,value:b})=>{if(y)f.close();else{_+=b.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let C=0,D=u.length;C<D;C++){const R=u[C];R.onProgress&&R.onProgress(T)}f.enqueue(b),x()}},y=>{f.error(y)})}}});return new Response(m)}else throw new lM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{bp.add(`file:${e}`,c);const u=Bi[e];delete Bi[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Bi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Bi[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class ca extends Tt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const zc=new ht,Sp=new P,Mp=new P;class pf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Hn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rf,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Sp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sp),Mp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Mp),n.updateMatrixWorld(),zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uM extends pf{constructor(){super(new Ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=qs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hM extends ca{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new uM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class fM extends pf{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0}}class dM extends ca{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new fM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class mf extends $0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class pM extends pf{constructor(){super(new mf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class l_ extends ca{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new pM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class c_ extends ca{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class mM extends ca{constructor(e,n,i=10,r=10){super(e,n),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const n=super.toJSON(e);return n.object.width=this.width,n.object.height=this.height,n}}class gM extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const wp=new ht;class u_{constructor(e,n,i=0,r=1/0){this.ray=new oa(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new nf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):dt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return wp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wp),this}intersectObject(e,n=!0,i=[]){return dh(e,this,i,n),i.sort(Ep),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)dh(e[r],this,i,n);return i.sort(Ep),i}}function Ep(t,e){return t.distance-e.distance}function dh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)dh(s[o],e,n,!0)}}class Tp{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=st(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(st(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ap=new P;class _M extends Tt{constructor(e,n){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=n,this.type="SpotLightHelper";const i=new ft,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,u=a/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}i.setAttribute("position",new tt(r,3));const s=new ci({fog:!1,toneMapped:!1});this.cone=new Q0(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,n=e*Math.tan(this.light.angle);this.cone.scale.set(n,n,e),Ap.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Ap),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class vM extends _e{constructor(e,n,i){const r=new la(n,4,2),s=new Cr({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Cp=new P,Va=new P,Pp=new P;class xM extends Tt{constructor(e,n,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",n===void 0&&(n=1);let r=new ft;r.setAttribute("position",new tt([-n,n,0,n,n,0,n,-n,0,-n,-n,0,-n,n,0],3));const s=new ci({fog:!1,toneMapped:!1});this.lightPlane=new on(r,s),this.add(this.lightPlane),r=new ft,r.setAttribute("position",new tt([0,0,0,0,0,1],3)),this.targetLine=new on(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Cp.setFromMatrixPosition(this.light.matrixWorld),Va.setFromMatrixPosition(this.light.target.matrixWorld),Pp.subVectors(Va,Cp),this.lightPlane.lookAt(Va),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Va),this.targetLine.scale.z=Pp.length()}}class yM extends on{constructor(e,n=1,i=16776960){const r=i,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new ft;o.setAttribute("position",new tt(s,3)),o.computeBoundingSphere(),super(o,new ci({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=n;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new ft;l.setAttribute("position",new tt(a,3)),l.computeBoundingSphere(),this.add(new _e(l,new Cr({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Rp=new P;let Ha,Vc;class gf extends Tt{constructor(e=new P(0,0,1),n=new P(0,0,0),i=1,r=16776960,s=i*.2,o=s*.2){super(),this.type="ArrowHelper",Ha===void 0&&(Ha=new ft,Ha.setAttribute("position",new tt([0,0,0,0,1,0],3)),Vc=new Yl(.5,1,5,1),Vc.translate(0,-.5,0)),this.position.copy(n),this.line=new on(Ha,new ci({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new _e(Vc,new Cr({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Rp.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(Rp,n)}}setLength(e,n=e*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class h_ extends Q0{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new ft;r.setAttribute("position",new tt(n,3)),r.setAttribute("color",new tt(i,3));const s=new ci({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new $e,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class bM{constructor(){this.type="ShapePath",this.color=new $e,this.subPaths=[],this.currentPath=null}moveTo(e,n){return this.currentPath=new uh,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,n),this}lineTo(e,n){return this.currentPath.lineTo(e,n),this}quadraticCurveTo(e,n,i,r){return this.currentPath.quadraticCurveTo(e,n,i,r),this}bezierCurveTo(e,n,i,r,s,o){return this.currentPath.bezierCurveTo(e,n,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function n(f){const x=[];for(let y=0,b=f.length;y<b;y++){const T=f[y],C=new ll;C.curves=T.curves,x.push(C)}return x}function i(f,x){const y=x.length;let b=!1;for(let T=y-1,C=0;C<y;T=C++){let D=x[T],R=x[C],S=R.x-D.x,M=R.y-D.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(D=x[C],S=-S,R=x[T],M=-M),f.y<D.y||f.y>R.y)continue;if(f.y===D.y){if(f.x===D.x)return!0}else{const L=M*(f.x-D.x)-S*(f.y-D.y);if(L===0)return!0;if(L<0)continue;b=!b}}else{if(f.y!==D.y)continue;if(R.x<=f.x&&f.x<=D.x||D.x<=f.x&&f.x<=R.x)return!0}}return b}const r=Jr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new ll,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],d=[];let p=[],g=0,_;d[g]=void 0,p[g]=[];for(let f=0,x=s.length;f<x;f++)a=s[f],_=a.getPoints(),o=r(_),o=e?!o:o,o?(!u&&d[g]&&g++,d[g]={s:new ll,p:_},d[g].s.curves=a.curves,u&&g++,p[g]=[]):p[g].push({h:a,p:_[0]});if(!d[0])return n(s);if(d.length>1){let f=!1,x=0;for(let y=0,b=d.length;y<b;y++)h[y]=[];for(let y=0,b=d.length;y<b;y++){const T=p[y];for(let C=0;C<T.length;C++){const D=T[C];let R=!0;for(let S=0;S<d.length;S++)i(D.p,d[S].p)&&(y!==S&&x++,R?(R=!1,h[S].push(D)):f=!0);R&&h[y].push(D)}}x>0&&f===!1&&(p=h)}let m;for(let f=0,x=d.length;f<x;f++){l=d[f].s,c.push(l),m=p[f];for(let y=0,b=m.length;y<b;y++)l.holes.push(m[y].h)}return c}}class f_ extends is{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Je("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Dp(t,e,n,i){const r=SM(i);switch(n){case k0:return t*e;case z0:return t*e/r.components*r.byteLength;case $h:return t*e/r.components*r.byteLength;case Ws:return t*e*2/r.components*r.byteLength;case Kh:return t*e*2/r.components*r.byteLength;case B0:return t*e*3/r.components*r.byteLength;case ii:return t*e*4/r.components*r.byteLength;case Zh:return t*e*4/r.components*r.byteLength;case rl:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ol:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Du:case Lu:return Math.max(t,16)*Math.max(e,8)/4;case Ru:case Iu:return Math.max(t,8)*Math.max(e,8)/2;case Nu:case Uu:case Fu:case ku:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ou:case Bu:case zu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case qu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Yu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ju:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case $u:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ku:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Zu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Qu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ju:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case eh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case th:case nh:case ih:return Math.ceil(t/4)*Math.ceil(e/4)*16;case rh:case sh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case oh:case ah:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function SM(t){switch(t){case Hn:case N0:return{byteLength:1,components:1};case Yo:case U0:case ji:return{byteLength:2,components:1};case Yh:case Jh:return{byteLength:2,components:4};case Ci:case qh:case yi:return{byteLength:4,components:1};case O0:case F0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wh}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wh);function d_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function MM(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var wM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EM=`#ifdef USE_ALPHAHASH
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
#endif`,TM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RM=`#ifdef USE_AOMAP
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
#endif`,DM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IM=`#ifdef USE_BATCHING
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
#endif`,LM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FM=`#ifdef USE_IRIDESCENCE
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
#endif`,kM=`#ifdef USE_BUMPMAP
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
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,YM=`#define PI 3.141592653589793
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
} // validated`,JM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$M=`vec3 transformedNormal = objectNormal;
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
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ew="gl_FragColor = linearToOutputTexel( gl_FragColor );",tw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nw=`#ifdef USE_ENVMAP
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
#endif`,iw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rw=`#ifdef USE_ENVMAP
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
#endif`,sw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ow=`#ifdef USE_ENVMAP
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
#endif`,aw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hw=`#ifdef USE_GRADIENTMAP
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
}`,fw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mw=`uniform bool receiveShadow;
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
#endif`,gw=`#ifdef USE_ENVMAP
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
#endif`,_w=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bw=`PhysicalMaterial material;
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
#endif`,Sw=`uniform sampler2D dfgLUT;
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
}`,Mw=`
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
#endif`,ww=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ew=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Aw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lw=`#if defined( USE_POINTS_UV )
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
#endif`,Nw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ow=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bw=`#ifdef USE_MORPHTARGETS
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
#endif`,zw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qw=`#ifdef USE_NORMALMAP
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
#endif`,Yw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$w=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lE=`float getShadowMask() {
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
}`,cE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uE=`#ifdef USE_SKINNING
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
#endif`,hE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fE=`#ifdef USE_SKINNING
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
#endif`,dE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_E=`#ifdef USE_TRANSMISSION
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
#endif`,vE=`#ifdef USE_TRANSMISSION
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ME=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wE=`uniform sampler2D t2D;
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
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`#include <common>
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
}`,RE=`#if DEPTH_PACKING == 3200
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
}`,DE=`#define DISTANCE
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
}`,IE=`#define DISTANCE
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`uniform float scale;
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
}`,OE=`uniform vec3 diffuse;
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
}`,FE=`#include <common>
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
}`,kE=`uniform vec3 diffuse;
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
}`,BE=`#define LAMBERT
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
}`,zE=`#define LAMBERT
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
}`,VE=`#define MATCAP
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
}`,HE=`#define MATCAP
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
}`,GE=`#define NORMAL
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
}`,WE=`#define NORMAL
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
}`,XE=`#define PHONG
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
}`,qE=`#define PHONG
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
}`,YE=`#define STANDARD
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
}`,JE=`#define STANDARD
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
}`,$E=`#define TOON
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
}`,KE=`#define TOON
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
}`,ZE=`uniform float size;
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
}`,QE=`uniform vec3 diffuse;
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
}`,jE=`#include <common>
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
}`,e1=`uniform vec3 color;
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
}`,t1=`uniform float rotation;
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
}`,n1=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:wM,alphahash_pars_fragment:EM,alphamap_fragment:TM,alphamap_pars_fragment:AM,alphatest_fragment:CM,alphatest_pars_fragment:PM,aomap_fragment:RM,aomap_pars_fragment:DM,batching_pars_vertex:IM,batching_vertex:LM,begin_vertex:NM,beginnormal_vertex:UM,bsdfs:OM,iridescence_fragment:FM,bumpmap_pars_fragment:kM,clipping_planes_fragment:BM,clipping_planes_pars_fragment:zM,clipping_planes_pars_vertex:VM,clipping_planes_vertex:HM,color_fragment:GM,color_pars_fragment:WM,color_pars_vertex:XM,color_vertex:qM,common:YM,cube_uv_reflection_fragment:JM,defaultnormal_vertex:$M,displacementmap_pars_vertex:KM,displacementmap_vertex:ZM,emissivemap_fragment:QM,emissivemap_pars_fragment:jM,colorspace_fragment:ew,colorspace_pars_fragment:tw,envmap_fragment:nw,envmap_common_pars_fragment:iw,envmap_pars_fragment:rw,envmap_pars_vertex:sw,envmap_physical_pars_fragment:gw,envmap_vertex:ow,fog_vertex:aw,fog_pars_vertex:lw,fog_fragment:cw,fog_pars_fragment:uw,gradientmap_pars_fragment:hw,lightmap_pars_fragment:fw,lights_lambert_fragment:dw,lights_lambert_pars_fragment:pw,lights_pars_begin:mw,lights_toon_fragment:_w,lights_toon_pars_fragment:vw,lights_phong_fragment:xw,lights_phong_pars_fragment:yw,lights_physical_fragment:bw,lights_physical_pars_fragment:Sw,lights_fragment_begin:Mw,lights_fragment_maps:ww,lights_fragment_end:Ew,logdepthbuf_fragment:Tw,logdepthbuf_pars_fragment:Aw,logdepthbuf_pars_vertex:Cw,logdepthbuf_vertex:Pw,map_fragment:Rw,map_pars_fragment:Dw,map_particle_fragment:Iw,map_particle_pars_fragment:Lw,metalnessmap_fragment:Nw,metalnessmap_pars_fragment:Uw,morphinstance_vertex:Ow,morphcolor_vertex:Fw,morphnormal_vertex:kw,morphtarget_pars_vertex:Bw,morphtarget_vertex:zw,normal_fragment_begin:Vw,normal_fragment_maps:Hw,normal_pars_fragment:Gw,normal_pars_vertex:Ww,normal_vertex:Xw,normalmap_pars_fragment:qw,clearcoat_normal_fragment_begin:Yw,clearcoat_normal_fragment_maps:Jw,clearcoat_pars_fragment:$w,iridescence_pars_fragment:Kw,opaque_fragment:Zw,packing:Qw,premultiplied_alpha_fragment:jw,project_vertex:eE,dithering_fragment:tE,dithering_pars_fragment:nE,roughnessmap_fragment:iE,roughnessmap_pars_fragment:rE,shadowmap_pars_fragment:sE,shadowmap_pars_vertex:oE,shadowmap_vertex:aE,shadowmask_pars_fragment:lE,skinbase_vertex:cE,skinning_pars_vertex:uE,skinning_vertex:hE,skinnormal_vertex:fE,specularmap_fragment:dE,specularmap_pars_fragment:pE,tonemapping_fragment:mE,tonemapping_pars_fragment:gE,transmission_fragment:_E,transmission_pars_fragment:vE,uv_pars_fragment:xE,uv_pars_vertex:yE,uv_vertex:bE,worldpos_vertex:SE,background_vert:ME,background_frag:wE,backgroundCube_vert:EE,backgroundCube_frag:TE,cube_vert:AE,cube_frag:CE,depth_vert:PE,depth_frag:RE,distance_vert:DE,distance_frag:IE,equirect_vert:LE,equirect_frag:NE,linedashed_vert:UE,linedashed_frag:OE,meshbasic_vert:FE,meshbasic_frag:kE,meshlambert_vert:BE,meshlambert_frag:zE,meshmatcap_vert:VE,meshmatcap_frag:HE,meshnormal_vert:GE,meshnormal_frag:WE,meshphong_vert:XE,meshphong_frag:qE,meshphysical_vert:YE,meshphysical_frag:JE,meshtoon_vert:$E,meshtoon_frag:KE,points_vert:ZE,points_frag:QE,shadow_vert:jE,shadow_frag:e1,sprite_vert:t1,sprite_frag:n1},Ae={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},vi={basic:{uniforms:Sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Sn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Sn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Sn([Ae.points,Ae.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Sn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Sn([Ae.common,Ae.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Sn([Ae.sprite,Ae.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:Sn([Ae.common,Ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:Sn([Ae.lights,Ae.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};vi.physical={uniforms:Sn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Ga={r:0,b:0,g:0},kr=new ai,i1=new ht;function r1(t,e,n,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?n:e).get(b)),b}function _(y){let b=!1;const T=g(y);T===null?f(a,l):T&&T.isColor&&(f(T,1),b=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(y,b){const T=g(b);T&&(T.isCubeTexture||T.mapping===ql)?(u===void 0&&(u=new _e(new Ht(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Ys(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,D,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),kr.copy(b.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(i1.makeRotationFromEuler(kr)),u.material.toneMapped=mt.getTransfer(T.colorSpace)!==St,(h!==T||d!==T.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,p=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new _e(new aa(2,2),new li({name:"BackgroundMaterial",uniforms:Ys(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=mt.getTransfer(T.colorSpace)!==St,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,p=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,b){y.getRGB(Ga,Y0(t)),i.buffers.color.setClear(Ga.r,Ga.g,Ga.b,b,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:_,addToRenderList:m,dispose:x}}function s1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,L,V,q,j){let J=!1;const W=h(q,V,L);s!==W&&(s=W,c(s.object)),J=p(M,q,V,j),J&&g(M,q,V,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,b(M,L,V,q),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function h(M,L,V){const q=V.wireframe===!0;let j=i[M.id];j===void 0&&(j={},i[M.id]=j);let J=j[L.id];J===void 0&&(J={},j[L.id]=J);let W=J[q];return W===void 0&&(W=d(l()),J[q]=W),W}function d(M){const L=[],V=[],q=[];for(let j=0;j<n;j++)L[j]=0,V[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:q,object:M,attributes:{},index:null}}function p(M,L,V,q){const j=s.attributes,J=L.attributes;let W=0;const k=V.getAttributes();for(const H in k)if(k[H].location>=0){const pe=j[H];let fe=J[H];if(fe===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),pe===void 0||pe.attribute!==fe||fe&&pe.data!==fe.data)return!0;W++}return s.attributesNum!==W||s.index!==q}function g(M,L,V,q){const j={},J=L.attributes;let W=0;const k=V.getAttributes();for(const H in k)if(k[H].location>=0){let pe=J[H];pe===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));const fe={};fe.attribute=pe,pe&&pe.data&&(fe.data=pe.data),j[H]=fe,W++}s.attributes=j,s.attributesNum=W,s.index=q}function _(){const M=s.newAttributes;for(let L=0,V=M.length;L<V;L++)M[L]=0}function m(M){f(M,0)}function f(M,L){const V=s.newAttributes,q=s.enabledAttributes,j=s.attributeDivisors;V[M]=1,q[M]===0&&(t.enableVertexAttribArray(M),q[M]=1),j[M]!==L&&(t.vertexAttribDivisor(M,L),j[M]=L)}function x(){const M=s.newAttributes,L=s.enabledAttributes;for(let V=0,q=L.length;V<q;V++)L[V]!==M[V]&&(t.disableVertexAttribArray(V),L[V]=0)}function y(M,L,V,q,j,J,W){W===!0?t.vertexAttribIPointer(M,L,V,j,J):t.vertexAttribPointer(M,L,V,q,j,J)}function b(M,L,V,q){_();const j=q.attributes,J=V.getAttributes(),W=L.defaultAttributeValues;for(const k in J){const H=J[k];if(H.location>=0){let ce=j[k];if(ce===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){const pe=ce.normalized,fe=ce.itemSize,ke=e.get(ce);if(ke===void 0)continue;const Le=ke.buffer,Qe=ke.type,ut=ke.bytesPerElement,se=Qe===t.INT||Qe===t.UNSIGNED_INT||ce.gpuType===qh;if(ce.isInterleavedBufferAttribute){const oe=ce.data,Ce=oe.stride,Ve=ce.offset;if(oe.isInstancedInterleavedBuffer){for(let Me=0;Me<H.locationSize;Me++)f(H.location+Me,oe.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Me=0;Me<H.locationSize;Me++)m(H.location+Me);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let Me=0;Me<H.locationSize;Me++)y(H.location+Me,fe/H.locationSize,Qe,pe,Ce*ut,(Ve+fe/H.locationSize*Me)*ut,se)}else{if(ce.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)f(H.location+oe,ce.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let oe=0;oe<H.locationSize;oe++)m(H.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let oe=0;oe<H.locationSize;oe++)y(H.location+oe,fe/H.locationSize,Qe,pe,fe*ut,fe/H.locationSize*oe*ut,se)}}else if(W!==void 0){const pe=W[k];if(pe!==void 0)switch(pe.length){case 2:t.vertexAttrib2fv(H.location,pe);break;case 3:t.vertexAttrib3fv(H.location,pe);break;case 4:t.vertexAttrib4fv(H.location,pe);break;default:t.vertexAttrib1fv(H.location,pe)}}}}x()}function T(){R();for(const M in i){const L=i[M];for(const V in L){const q=L[V];for(const j in q)u(q[j].object),delete q[j];delete L[V]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const V in L){const q=L[V];for(const j in q)u(q[j].object),delete q[j];delete L[V]}delete i[M.id]}function D(M){for(const L in i){const V=i[L];if(V[M.id]===void 0)continue;const q=V[M.id];for(const j in q)u(q[j].object),delete q[j];delete V[M.id]}}function R(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function o1(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];n.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function a1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==ii&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const R=D===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Hn&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==yi&&!R)}function l(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:b,maxSamples:T,samples:C}}function l1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Gi,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:i,y=x*4;let b=f.clippingState||null;l.value=b,b=u(g,d,y,p);for(let T=0;T!==y;++T)b[T]=n[T];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,b=p;y!==_;++y,b+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function c1(t){let e=new WeakMap;function n(o,a){return a===Tu?o.mapping=es:a===Au&&(o.mapping=Gs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Tu||a===Au)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Z0(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const br=4,Ip=[.125,.215,.35,.446,.526,.582],Xr=20,u1=256,_o=new mf,Lp=new $e;let Hc=null,Gc=0,Wc=0,Xc=!1;const h1=new P;class Np{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=h1}=s;Hc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hc,Gc,Wc),this._renderer.xr.enabled=Xc,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===es||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:ji,format:ii,colorSpace:Xs,depthBuffer:!1},r=Up(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Up(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=f1(s)),this._blurMaterial=p1(s,e,n),this._ggxMaterial=d1(s,e,n)}return r}_compileMaterial(e){const n=new _e(new ft,e);this._renderer.compile(n,_o)}_sceneToCubeUV(e,n,i,r,s){const l=new Ln(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Lp),h.toneMapping=Mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new Ht,new Cr({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let f=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,f=!0):(m.color.copy(Lp),f=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):b===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const T=this._cubeSize;Ss(r,b*T,y>2?T:0,T,T),h.setRenderTarget(r),f&&h.render(_,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===es||e.mapping===Gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Op());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ss(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,_o)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,p=h*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-br?i-g+br:0),f=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Ss(s,m,f,3*_,2*_),r.setRenderTarget(s),r.render(a,_o),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Ss(e,m,f,3*_,2*_),r.setRenderTarget(e),r.render(a,_o)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&dt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Xr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Xr;m>Xr&&Je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xr}`);const f=[];let x=0;for(let D=0;D<Xr;++D){const R=D/_,S=Math.exp(-R*R/2);f.push(S),D===0?x+=S:D<m&&(x+=2*S)}for(let D=0;D<f.length;D++)f[D]=f[D]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const b=this._sizeLods[r],T=3*b*(r>y-br?r-y+br:0),C=4*(this._cubeSize-b);Ss(n,T,C,3*b,2*b),l.setRenderTarget(n),l.render(h,_o)}}function f1(t){const e=[],n=[],i=[];let r=t;const s=t-br+1+Ip.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-br?l=Ip[o-t+br-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*p),y=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let C=0;C<p;C++){const D=C%3*2/3-1,R=C>2?0:-1,S=[D,R,0,D+2/3,R,0,D+2/3,R+1,0,D,R,0,D+2/3,R+1,0,D,R+1,0];x.set(S,_*g*C),y.set(d,m*g*C);const M=[C,C,C,C,C,C];b.set(M,f*g*C)}const T=new ft;T.setAttribute("position",new vn(x,_)),T.setAttribute("uv",new vn(y,m)),T.setAttribute("faceIndex",new vn(b,f)),i.push(new _e(T,null)),r>br&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Up(t,e,n){const i=new wi(t,e,n);return i.texture.mapping=ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function d1(t,e,n){return new li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:u1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function p1(t,e,n){const i=new Float32Array(Xr),r=new P(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Op(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Fp(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Jl(){return`

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
	`}function m1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Tu||l===Au,u=l===es||l===Gs;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Np(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Np(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function g1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&$o("WebGLRenderer: "+i+" extension not supported."),r}}}function _1(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let y=0,b=x.length;y<b;y+=3){const T=x[y+0],C=x[y+1],D=x[y+2];d.push(T,C,C,D,D,T)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,b=x.length/3-1;y<b;y+=3){const T=y+0,C=y+1,D=y+2;d.push(T,C,C,D,D,T)}}else return;const m=new(H0(d)?q0:X0)(d,1);m.version=_;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function v1(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];n.update(m,i,1)}function h(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x]*_[x];n.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function x1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:dt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function y1(t,e,n){const i=new WeakMap,r=new Gt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let T=a.attributes.position.count*b,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const D=new Float32Array(T*C*4*h),R=new G0(D,T,C,h);R.type=yi,R.needsUpdate=!0;const S=b*4;for(let L=0;L<h;L++){const V=f[L],q=x[L],j=y[L],J=T*C*4*L;for(let W=0;W<V.count;W++){const k=W*S;g===!0&&(r.fromBufferAttribute(V,W),D[J+k+0]=r.x,D[J+k+1]=r.y,D[J+k+2]=r.z,D[J+k+3]=0),_===!0&&(r.fromBufferAttribute(q,W),D[J+k+4]=r.x,D[J+k+5]=r.y,D[J+k+6]=r.z,D[J+k+7]=0),m===!0&&(r.fromBufferAttribute(j,W),D[J+k+8]=r.x,D[J+k+9]=r.y,D[J+k+10]=r.z,D[J+k+11]=j.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new me(T,C)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function b1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const S1={[A0]:"LINEAR_TONE_MAPPING",[C0]:"REINHARD_TONE_MAPPING",[P0]:"CINEON_TONE_MAPPING",[Xh]:"ACES_FILMIC_TONE_MAPPING",[D0]:"AGX_TONE_MAPPING",[I0]:"NEUTRAL_TONE_MAPPING",[R0]:"CUSTOM_TONE_MAPPING"};function M1(t,e,n,i,r){const s=new wi(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),o=new wi(e,n,{type:ji,depthBuffer:!1,stencilBuffer:!1}),a=new ft;a.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new tt([0,2,0,0,2,0],2));const l=new nM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new _e(a,l),u=new mf(-1,1,1,-1,0,1);let h=null,d=null,p=!1,g,_=null,m=[],f=!1;this.setSize=function(x,y){s.setSize(x,y),o.setSize(x,y);for(let b=0;b<m.length;b++){const T=m[b];T.setSize&&T.setSize(x,y)}},this.setEffects=function(x){m=x,f=m.length>0&&m[0].isRenderPass===!0;const y=s.width,b=s.height;for(let T=0;T<m.length;T++){const C=m[T];C.setSize&&C.setSize(y,b)}},this.begin=function(x,y){if(p||x.toneMapping===Mi&&m.length===0)return!1;if(_=y,y!==null){const b=y.width,T=y.height;(s.width!==b||s.height!==T)&&this.setSize(b,T)}return f===!1&&x.setRenderTarget(s),g=x.toneMapping,x.toneMapping=Mi,!0},this.hasRenderPass=function(){return f},this.end=function(x,y){x.toneMapping=g,p=!0;let b=s,T=o;for(let C=0;C<m.length;C++){const D=m[C];if(D.enabled!==!1&&(D.render(x,T,b,y),D.needsSwap!==!1)){const R=b;b=T,T=R}}if(h!==x.outputColorSpace||d!==x.toneMapping){h=x.outputColorSpace,d=x.toneMapping,l.defines={},mt.getTransfer(h)===St&&(l.defines.SRGB_TRANSFER="");const C=S1[d];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(_),x.render(c,u),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const p_=new Tn,ph=new Ko(1,1),m_=new G0,g_=new eS,__=new K0,kp=[],Bp=[],zp=new Float32Array(16),Vp=new Float32Array(9),Hp=new Float32Array(4);function no(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=kp[r];if(s===void 0&&(s=new Float32Array(r),kp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function en(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function tn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function $l(t,e){let n=Bp[e];n===void 0&&(n=new Int32Array(e),Bp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function w1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function E1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2fv(this.addr,e),tn(n,e)}}function T1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;t.uniform3fv(this.addr,e),tn(n,e)}}function A1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4fv(this.addr,e),tn(n,e)}}function C1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;Hp.set(i),t.uniformMatrix2fv(this.addr,!1,Hp),tn(n,i)}}function P1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;Vp.set(i),t.uniformMatrix3fv(this.addr,!1,Vp),tn(n,i)}}function R1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;zp.set(i),t.uniformMatrix4fv(this.addr,!1,zp),tn(n,i)}}function D1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function I1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2iv(this.addr,e),tn(n,e)}}function L1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;t.uniform3iv(this.addr,e),tn(n,e)}}function N1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4iv(this.addr,e),tn(n,e)}}function U1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function O1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2uiv(this.addr,e),tn(n,e)}}function F1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;t.uniform3uiv(this.addr,e),tn(n,e)}}function k1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4uiv(this.addr,e),tn(n,e)}}function B1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ph.compareFunction=n.isReversedDepthBuffer()?jh:Qh,s=ph):s=p_,n.setTexture2D(e||s,r)}function z1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||g_,r)}function V1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||__,r)}function H1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||m_,r)}function G1(t){switch(t){case 5126:return w1;case 35664:return E1;case 35665:return T1;case 35666:return A1;case 35674:return C1;case 35675:return P1;case 35676:return R1;case 5124:case 35670:return D1;case 35667:case 35671:return I1;case 35668:case 35672:return L1;case 35669:case 35673:return N1;case 5125:return U1;case 36294:return O1;case 36295:return F1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return B1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return H1}}function W1(t,e){t.uniform1fv(this.addr,e)}function X1(t,e){const n=no(e,this.size,2);t.uniform2fv(this.addr,n)}function q1(t,e){const n=no(e,this.size,3);t.uniform3fv(this.addr,n)}function Y1(t,e){const n=no(e,this.size,4);t.uniform4fv(this.addr,n)}function J1(t,e){const n=no(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function $1(t,e){const n=no(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function K1(t,e){const n=no(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Z1(t,e){t.uniform1iv(this.addr,e)}function Q1(t,e){t.uniform2iv(this.addr,e)}function j1(t,e){t.uniform3iv(this.addr,e)}function eT(t,e){t.uniform4iv(this.addr,e)}function tT(t,e){t.uniform1uiv(this.addr,e)}function nT(t,e){t.uniform2uiv(this.addr,e)}function iT(t,e){t.uniform3uiv(this.addr,e)}function rT(t,e){t.uniform4uiv(this.addr,e)}function sT(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=ph:o=p_;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function oT(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||g_,s[o])}function aT(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||__,s[o])}function lT(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||m_,s[o])}function cT(t){switch(t){case 5126:return W1;case 35664:return X1;case 35665:return q1;case 35666:return Y1;case 35674:return J1;case 35675:return $1;case 35676:return K1;case 5124:case 35670:return Z1;case 35667:case 35671:return Q1;case 35668:case 35672:return j1;case 35669:case 35673:return eT;case 5125:return tT;case 36294:return nT;case 36295:return iT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return sT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return lT}}class uT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=G1(n.type)}}class hT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=cT(n.type)}}class fT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function Gp(t,e){t.seq.push(e),t.map[e.id]=e}function dT(t,e,n){const i=t.name,r=i.length;for(qc.lastIndex=0;;){const s=qc.exec(i),o=qc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Gp(n,c===void 0?new uT(a,t,e):new hT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new fT(a),Gp(n,h)),n=h}}}class cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);dT(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Wp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const pT=37297;let mT=0;function gT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Xp=new rt;function _T(t){mt._getMatrix(Xp,mt.workingColorSpace,t);const e=`mat3( ${Xp.elements.map(n=>n.toFixed(4))} )`;switch(mt.getTransfer(t)){case Ml:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function qp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+gT(t.getShaderSource(e),a)}else return s}function vT(t,e){const n=_T(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const xT={[A0]:"Linear",[C0]:"Reinhard",[P0]:"Cineon",[Xh]:"ACESFilmic",[D0]:"AgX",[I0]:"Neutral",[R0]:"Custom"};function yT(t,e){const n=xT[e];return n===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Wa=new P;function bT(){mt.getLuminanceCoefficients(Wa);const t=Wa.x.toFixed(4),e=Wa.y.toFixed(4),n=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ST(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function MT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function wT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Eo(t){return t!==""}function Yp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ET=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(t){return t.replace(ET,AT)}const TT=new Map;function AT(t,e){let n=ot[e];if(n===void 0){const i=TT.get(e);if(i!==void 0)n=ot[i],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mh(n)}const CT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $p(t){return t.replace(CT,PT)}function PT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const RT={[il]:"SHADOWMAP_TYPE_PCF",[Mo]:"SHADOWMAP_TYPE_VSM"};function DT(t){return RT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const IT={[es]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[ql]:"ENVMAP_TYPE_CUBE_UV"};function LT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":IT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const NT={[Gs]:"ENVMAP_MODE_REFRACTION"};function UT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":NT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const OT={[T0]:"ENVMAP_BLENDING_MULTIPLY",[yb]:"ENVMAP_BLENDING_MIX",[bb]:"ENVMAP_BLENDING_ADD"};function FT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":OT[t.combine]||"ENVMAP_BLENDING_NONE"}function kT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function BT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=DT(n),c=LT(n),u=UT(n),h=FT(n),d=kT(n),p=ST(n),g=MT(s),_=r.createProgram();let m,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Eo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Eo).join(`
`),f.length>0&&(f+=`
`)):(m=[Kp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),f=[Kp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mi?"#define TONE_MAPPING":"",n.toneMapping!==Mi?ot.tonemapping_pars_fragment:"",n.toneMapping!==Mi?yT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,vT("linearToOutputTexel",n.outputColorSpace),bT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Eo).join(`
`)),o=mh(o),o=Yp(o,n),o=Jp(o,n),a=mh(a),a=Yp(a,n),a=Jp(a,n),o=$p(o),a=$p(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=x+m+o,b=x+f+a,T=Wp(r,r.VERTEX_SHADER,y),C=Wp(r,r.FRAGMENT_SHADER,b);r.attachShader(_,T),r.attachShader(_,C),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(L){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(_)||"",q=r.getShaderInfoLog(T)||"",j=r.getShaderInfoLog(C)||"",J=V.trim(),W=q.trim(),k=j.trim();let H=!0,ce=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,T,C);else{const pe=qp(r,T,"vertex"),fe=qp(r,C,"fragment");dt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+J+`
`+pe+`
`+fe)}else J!==""?Je("WebGLProgram: Program Info Log:",J):(W===""||k==="")&&(ce=!1);ce&&(L.diagnostics={runnable:H,programLog:J,vertexShader:{log:W,prefix:m},fragmentShader:{log:k,prefix:f}})}r.deleteShader(T),r.deleteShader(C),R=new cl(r,_),S=wT(r,_)}let R;this.getUniforms=function(){return R===void 0&&D(this),R};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,pT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=C,this}let zT=0;class VT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new HT(e),n.set(e,i)),i}}class HT{constructor(e){this.id=zT++,this.code=e,this.usedTimes=0}}function GT(t,e,n,i,r,s,o){const a=new nf,l=new VT,c=new Set,u=[],h=new Map,d=r.logarithmicDepthBuffer;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,V,q){const j=V.fog,J=q.geometry,W=S.isMeshStandardMaterial?V.environment:null,k=(S.isMeshStandardMaterial?n:e).get(S.envMap||W),H=k&&k.mapping===ql?k.image.height:null,ce=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&Je("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const pe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,fe=pe!==void 0?pe.length:0;let ke=0;J.morphAttributes.position!==void 0&&(ke=1),J.morphAttributes.normal!==void 0&&(ke=2),J.morphAttributes.color!==void 0&&(ke=3);let Le,Qe,ut,se;if(ce){const yt=vi[ce];Le=yt.vertexShader,Qe=yt.fragmentShader}else Le=S.vertexShader,Qe=S.fragmentShader,l.update(S),ut=l.getVertexShaderID(S),se=l.getFragmentShaderID(S);const oe=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),Ve=q.isInstancedMesh===!0,Me=q.isBatchedMesh===!0,at=!!S.map,I=!!S.matcap,O=!!k,U=!!S.aoMap,z=!!S.lightMap,F=!!S.bumpMap,X=!!S.normalMap,E=!!S.displacementMap,re=!!S.emissiveMap,Z=!!S.metalnessMap,Q=!!S.roughnessMap,ie=S.anisotropy>0,w=S.clearcoat>0,v=S.dispersion>0,N=S.iridescence>0,Y=S.sheen>0,ne=S.transmission>0,$=ie&&!!S.anisotropyMap,we=w&&!!S.clearcoatMap,he=w&&!!S.clearcoatNormalMap,Pe=w&&!!S.clearcoatRoughnessMap,ze=N&&!!S.iridescenceMap,ue=N&&!!S.iridescenceThicknessMap,be=Y&&!!S.sheenColorMap,Ee=Y&&!!S.sheenRoughnessMap,Ie=!!S.specularMap,ye=!!S.specularColorMap,nt=!!S.specularIntensityMap,B=ne&&!!S.transmissionMap,De=ne&&!!S.thicknessMap,ge=!!S.gradientMap,Ne=!!S.alphaMap,de=S.alphaTest>0,le=!!S.alphaHash,Se=!!S.extensions;let et=Mi;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(et=t.toneMapping);const Dt={shaderID:ce,shaderType:S.type,shaderName:S.name,vertexShader:Le,fragmentShader:Qe,defines:S.defines,customVertexShaderID:ut,customFragmentShaderID:se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Me,batchingColor:Me&&q._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&q.instanceColor!==null,instancingMorph:Ve&&q.morphTexture!==null,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Xs,alphaToCoverage:!!S.alphaToCoverage,map:at,matcap:I,envMap:O,envMapMode:O&&k.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:z,bumpMap:F,normalMap:X,displacementMap:E,emissiveMap:re,normalMapObjectSpace:X&&S.normalMapType===wb,normalMapTangentSpace:X&&S.normalMapType===V0,metalnessMap:Z,roughnessMap:Q,anisotropy:ie,anisotropyMap:$,clearcoat:w,clearcoatMap:we,clearcoatNormalMap:he,clearcoatRoughnessMap:Pe,dispersion:v,iridescence:N,iridescenceMap:ze,iridescenceThicknessMap:ue,sheen:Y,sheenColorMap:be,sheenRoughnessMap:Ee,specularMap:Ie,specularColorMap:ye,specularIntensityMap:nt,transmission:ne,transmissionMap:B,thicknessMap:De,gradientMap:ge,opaque:S.transparent===!1&&S.blending===Fs&&S.alphaToCoverage===!1,alphaMap:Ne,alphaTest:de,alphaHash:le,combine:S.combine,mapUv:at&&_(S.map.channel),aoMapUv:U&&_(S.aoMap.channel),lightMapUv:z&&_(S.lightMap.channel),bumpMapUv:F&&_(S.bumpMap.channel),normalMapUv:X&&_(S.normalMap.channel),displacementMapUv:E&&_(S.displacementMap.channel),emissiveMapUv:re&&_(S.emissiveMap.channel),metalnessMapUv:Z&&_(S.metalnessMap.channel),roughnessMapUv:Q&&_(S.roughnessMap.channel),anisotropyMapUv:$&&_(S.anisotropyMap.channel),clearcoatMapUv:we&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&_(S.sheenRoughnessMap.channel),specularMapUv:Ie&&_(S.specularMap.channel),specularColorMapUv:ye&&_(S.specularColorMap.channel),specularIntensityMapUv:nt&&_(S.specularIntensityMap.channel),transmissionMapUv:B&&_(S.transmissionMap.channel),thicknessMapUv:De&&_(S.thicknessMap.channel),alphaMapUv:Ne&&_(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(X||ie),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!J.attributes.uv&&(at||Ne),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ce,skinning:q.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:et,decodeVideoTexture:at&&S.map.isVideoTexture===!0&&mt.getTransfer(S.map.colorSpace)===St,decodeVideoTextureEmissive:re&&S.emissiveMap.isVideoTexture===!0&&mt.getTransfer(S.emissiveMap.colorSpace)===St,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wn,flipSided:S.side===_n,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Se&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&S.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function b(S){const M=g[S.type];let L;if(M){const V=vi[M];L=J0.clone(V.uniforms)}else L=S.uniforms;return L}function T(S,M){let L=h.get(M);return L!==void 0?++L.usedTimes:(L=new BT(t,M,S,s),u.push(L),h.set(M,L)),L}function C(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),h.delete(S.cacheKey),S.destroy()}}function D(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:T,releaseProgram:C,releaseShaderCache:D,programs:u,dispose:R}}function WT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function XT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Zp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,g,_,m){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function a(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(h,d){n.length>1&&n.sort(h||XT),i.length>1&&i.sort(d||Zp),r.length>1&&r.sort(d||Zp)}function u(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function qT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Qp,t.set(i,[o])):r>=s.length?(o=new Qp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function YT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new $e};break;case"SpotLight":n={position:new P,direction:new P,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function JT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let $T=0;function KT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ZT(t){const e=new YT,n=JT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,s=new ht,o=new ht;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,x=0,y=0,b=0,T=0,C=0,D=0;c.sort(KT);for(let S=0,M=c.length;S<M;S++){const L=c[S],V=L.color,q=L.intensity,j=L.distance;let J=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ws?J=L.shadow.map.texture:J=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=V.r*q,h+=V.g*q,d+=V.b*q;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],q);D++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const k=L.shadow,H=n.get(L);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=L.shadow.matrix,x++}i.directional[p]=W,p++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(V).multiplyScalar(q),W.distance=j,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[_]=W;const k=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,k.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[_]=k.matrix,L.castShadow){const H=n.get(L);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=J,b++}_++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(V).multiplyScalar(q),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=W,m++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const k=L.shadow,H=n.get(L);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=W,g++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(q),W.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[f]=W,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==b||R.numSpotMaps!==T||R.numLightProbes!==D)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=D,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=b,R.numSpotMaps=T,R.numLightProbes=D,i.version=$T++)}function l(c,u){let h=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const y=c[f];if(y.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(y.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function jp(t){const e=new ZT(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function QT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new jp(t),e.set(r,[a])):s>=o.length?(a=new jp(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const jT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eA=`uniform sampler2D shadow_pass;
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
}`,tA=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],nA=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],em=new ht,vo=new P,Yc=new P;function iA(t,e,n){let i=new rf;const r=new me,s=new me,o=new Gt,a=new rM,l=new sM,c={},u=n.maxTextureSize,h={[Ar]:_n,[_n]:Ar,[wn]:wn},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:jT,fragmentShader:eA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ft;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _e(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=il;let f=this.type;this.render=function(C,D,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;C.type===E0&&(Je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=il);const S=t.getRenderTarget(),M=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Ji),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const q=f!==this.type;q&&D.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(J=>J.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,J=C.length;j<J;j++){const W=C[j],k=W.shadow;if(k===void 0){Je("WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const H=k.getFrameExtents();if(r.multiply(H),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,k.mapSize.y=s.y)),k.map===null||q===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Mo){if(W.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new wi(r.x,r.y,{format:Ws,type:ji,minFilter:gn,magFilter:gn,generateMipmaps:!1}),k.map.texture.name=W.name+".shadowMap",k.map.depthTexture=new Ko(r.x,r.y,yi),k.map.depthTexture.name=W.name+".shadowMapDepth",k.map.depthTexture.format=er,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=cn,k.map.depthTexture.magFilter=cn}else{W.isPointLight?(k.map=new Z0(r.x),k.map.depthTexture=new SS(r.x,Ci)):(k.map=new wi(r.x,r.y),k.map.depthTexture=new Ko(r.x,r.y,Ci)),k.map.depthTexture.name=W.name+".shadowMap",k.map.depthTexture.format=er;const pe=t.state.buffers.depth.getReversed();this.type===il?(k.map.depthTexture.compareFunction=pe?jh:Qh,k.map.depthTexture.minFilter=gn,k.map.depthTexture.magFilter=gn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=cn,k.map.depthTexture.magFilter=cn)}k.camera.updateProjectionMatrix()}const ce=k.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<ce;pe++){if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,pe),t.clear();else{pe===0&&(t.setRenderTarget(k.map),t.clear());const fe=k.getViewport(pe);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),V.viewport(o)}if(W.isPointLight){const fe=k.camera,ke=k.matrix,Le=W.distance||fe.far;Le!==fe.far&&(fe.far=Le,fe.updateProjectionMatrix()),vo.setFromMatrixPosition(W.matrixWorld),fe.position.copy(vo),Yc.copy(fe.position),Yc.add(tA[pe]),fe.up.copy(nA[pe]),fe.lookAt(Yc),fe.updateMatrixWorld(),ke.makeTranslation(-vo.x,-vo.y,-vo.z),em.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(em,fe.coordinateSystem,fe.reversedDepth)}else k.updateMatrices(W);i=k.getFrustum(),b(D,R,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===Mo&&x(k,R),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(S,M,L)};function x(C,D){const R=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new wi(r.x,r.y,{format:Ws,type:ji})),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(D,null,R,d,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(D,null,R,p,_,null)}function y(C,D,R,S){let M=null;const L=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=R.isPointLight===!0?l:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const V=M.uuid,q=D.uuid;let j=c[V];j===void 0&&(j={},c[V]=j);let J=j[q];J===void 0&&(J=M.clone(),j[q]=J,D.addEventListener("dispose",T)),M=J}if(M.visible=D.visible,M.wireframe=D.wireframe,S===Mo?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:h[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=t.properties.get(M);V.light=R}return M}function b(C,D,R,S,M){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Mo)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const q=e.update(C),j=C.material;if(Array.isArray(j)){const J=q.groups;for(let W=0,k=J.length;W<k;W++){const H=J[W],ce=j[H.materialIndex];if(ce&&ce.visible){const pe=y(C,ce,S,M);C.onBeforeShadow(t,C,D,R,q,pe,H),t.renderBufferDirect(R,null,q,pe,C,H),C.onAfterShadow(t,C,D,R,q,pe,H)}}}else if(j.visible){const J=y(C,j,S,M);C.onBeforeShadow(t,C,D,R,q,J,null),t.renderBufferDirect(R,null,q,J,C,null),C.onAfterShadow(t,C,D,R,q,J,null)}}const V=C.children;for(let q=0,j=V.length;q<j;q++)b(V[q],D,R,S,M)}function T(C){C.target.removeEventListener("dispose",T);for(const R in c){const S=c[R],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const rA={[xu]:yu,[bu]:wu,[Su]:Eu,[Hs]:Mu,[yu]:xu,[wu]:bu,[Eu]:Su,[Mu]:Hs};function sA(t,e){function n(){let B=!1;const De=new Gt;let ge=null;const Ne=new Gt(0,0,0,0);return{setMask:function(de){ge!==de&&!B&&(t.colorMask(de,de,de,de),ge=de)},setLocked:function(de){B=de},setClear:function(de,le,Se,et,Dt){Dt===!0&&(de*=et,le*=et,Se*=et),De.set(de,le,Se,et),Ne.equals(De)===!1&&(t.clearColor(de,le,Se,et),Ne.copy(De))},reset:function(){B=!1,ge=null,Ne.set(-1,0,0,0)}}}function i(){let B=!1,De=!1,ge=null,Ne=null,de=null;return{setReversed:function(le){if(De!==le){const Se=e.get("EXT_clip_control");le?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),De=le;const et=de;de=null,this.setClear(et)}},getReversed:function(){return De},setTest:function(le){le?oe(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(le){ge!==le&&!B&&(t.depthMask(le),ge=le)},setFunc:function(le){if(De&&(le=rA[le]),Ne!==le){switch(le){case xu:t.depthFunc(t.NEVER);break;case yu:t.depthFunc(t.ALWAYS);break;case bu:t.depthFunc(t.LESS);break;case Hs:t.depthFunc(t.LEQUAL);break;case Su:t.depthFunc(t.EQUAL);break;case Mu:t.depthFunc(t.GEQUAL);break;case wu:t.depthFunc(t.GREATER);break;case Eu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ne=le}},setLocked:function(le){B=le},setClear:function(le){de!==le&&(De&&(le=1-le),t.clearDepth(le),de=le)},reset:function(){B=!1,ge=null,Ne=null,de=null,De=!1}}}function r(){let B=!1,De=null,ge=null,Ne=null,de=null,le=null,Se=null,et=null,Dt=null;return{setTest:function(yt){B||(yt?oe(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(yt){De!==yt&&!B&&(t.stencilMask(yt),De=yt)},setFunc:function(yt,hi,Ii){(ge!==yt||Ne!==hi||de!==Ii)&&(t.stencilFunc(yt,hi,Ii),ge=yt,Ne=hi,de=Ii)},setOp:function(yt,hi,Ii){(le!==yt||Se!==hi||et!==Ii)&&(t.stencilOp(yt,hi,Ii),le=yt,Se=hi,et=Ii)},setLocked:function(yt){B=yt},setClear:function(yt){Dt!==yt&&(t.clearStencil(yt),Dt=yt)},reset:function(){B=!1,De=null,ge=null,Ne=null,de=null,le=null,Se=null,et=null,Dt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,x=null,y=null,b=null,T=null,C=null,D=new $e(0,0,0),R=0,S=!1,M=null,L=null,V=null,q=null,j=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,k=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=k>=1):H.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=k>=2);let ce=null,pe={};const fe=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),Le=new Gt().fromArray(fe),Qe=new Gt().fromArray(ke);function ut(B,De,ge,Ne){const de=new Uint8Array(4),le=t.createTexture();t.bindTexture(B,le),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Se=0;Se<ge;Se++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(De,0,t.RGBA,1,1,Ne,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(De+Se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return le}const se={};se[t.TEXTURE_2D]=ut(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=ut(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=ut(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=ut(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(t.DEPTH_TEST),o.setFunc(Hs),F(!1),X(Bd),oe(t.CULL_FACE),U(Ji);function oe(B){u[B]!==!0&&(t.enable(B),u[B]=!0)}function Ce(B){u[B]!==!1&&(t.disable(B),u[B]=!1)}function Ve(B,De){return h[B]!==De?(t.bindFramebuffer(B,De),h[B]=De,B===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=De),B===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=De),!0):!1}function Me(B,De){let ge=p,Ne=!1;if(B){ge=d.get(De),ge===void 0&&(ge=[],d.set(De,ge));const de=B.textures;if(ge.length!==de.length||ge[0]!==t.COLOR_ATTACHMENT0){for(let le=0,Se=de.length;le<Se;le++)ge[le]=t.COLOR_ATTACHMENT0+le;ge.length=de.length,Ne=!0}}else ge[0]!==t.BACK&&(ge[0]=t.BACK,Ne=!0);Ne&&t.drawBuffers(ge)}function at(B){return g!==B?(t.useProgram(B),g=B,!0):!1}const I={[Wr]:t.FUNC_ADD,[ib]:t.FUNC_SUBTRACT,[rb]:t.FUNC_REVERSE_SUBTRACT};I[sb]=t.MIN,I[ob]=t.MAX;const O={[ab]:t.ZERO,[lb]:t.ONE,[cb]:t.SRC_COLOR,[_u]:t.SRC_ALPHA,[mb]:t.SRC_ALPHA_SATURATE,[db]:t.DST_COLOR,[hb]:t.DST_ALPHA,[ub]:t.ONE_MINUS_SRC_COLOR,[vu]:t.ONE_MINUS_SRC_ALPHA,[pb]:t.ONE_MINUS_DST_COLOR,[fb]:t.ONE_MINUS_DST_ALPHA,[gb]:t.CONSTANT_COLOR,[_b]:t.ONE_MINUS_CONSTANT_COLOR,[vb]:t.CONSTANT_ALPHA,[xb]:t.ONE_MINUS_CONSTANT_ALPHA};function U(B,De,ge,Ne,de,le,Se,et,Dt,yt){if(B===Ji){_===!0&&(Ce(t.BLEND),_=!1);return}if(_===!1&&(oe(t.BLEND),_=!0),B!==nb){if(B!==m||yt!==S){if((f!==Wr||b!==Wr)&&(t.blendEquation(t.FUNC_ADD),f=Wr,b=Wr),yt)switch(B){case Fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zd:t.blendFunc(t.ONE,t.ONE);break;case Vd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:dt("WebGLState: Invalid blending: ",B);break}else switch(B){case Fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Vd:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hd:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",B);break}x=null,y=null,T=null,C=null,D.set(0,0,0),R=0,m=B,S=yt}return}de=de||De,le=le||ge,Se=Se||Ne,(De!==f||de!==b)&&(t.blendEquationSeparate(I[De],I[de]),f=De,b=de),(ge!==x||Ne!==y||le!==T||Se!==C)&&(t.blendFuncSeparate(O[ge],O[Ne],O[le],O[Se]),x=ge,y=Ne,T=le,C=Se),(et.equals(D)===!1||Dt!==R)&&(t.blendColor(et.r,et.g,et.b,Dt),D.copy(et),R=Dt),m=B,S=!1}function z(B,De){B.side===wn?Ce(t.CULL_FACE):oe(t.CULL_FACE);let ge=B.side===_n;De&&(ge=!ge),F(ge),B.blending===Fs&&B.transparent===!1?U(Ji):U(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const Ne=B.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),re(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function F(B){M!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),M=B)}function X(B){B!==eb?(oe(t.CULL_FACE),B!==L&&(B===Bd?t.cullFace(t.BACK):B===tb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),L=B}function E(B){B!==V&&(W&&t.lineWidth(B),V=B)}function re(B,De,ge){B?(oe(t.POLYGON_OFFSET_FILL),(q!==De||j!==ge)&&(t.polygonOffset(De,ge),q=De,j=ge)):Ce(t.POLYGON_OFFSET_FILL)}function Z(B){B?oe(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function Q(B){B===void 0&&(B=t.TEXTURE0+J-1),ce!==B&&(t.activeTexture(B),ce=B)}function ie(B,De,ge){ge===void 0&&(ce===null?ge=t.TEXTURE0+J-1:ge=ce);let Ne=pe[ge];Ne===void 0&&(Ne={type:void 0,texture:void 0},pe[ge]=Ne),(Ne.type!==B||Ne.texture!==De)&&(ce!==ge&&(t.activeTexture(ge),ce=ge),t.bindTexture(B,De||se[B]),Ne.type=B,Ne.texture=De)}function w(){const B=pe[ce];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function v(){try{t.compressedTexImage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function Y(){try{t.texSubImage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function ne(){try{t.texSubImage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function we(){try{t.compressedTexSubImage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function he(){try{t.texStorage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function Pe(){try{t.texStorage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function ze(){try{t.texImage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function ue(){try{t.texImage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function be(B){Le.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),Le.copy(B))}function Ee(B){Qe.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),Qe.copy(B))}function Ie(B,De){let ge=c.get(De);ge===void 0&&(ge=new WeakMap,c.set(De,ge));let Ne=ge.get(B);Ne===void 0&&(Ne=t.getUniformBlockIndex(De,B.name),ge.set(B,Ne))}function ye(B,De){const Ne=c.get(De).get(B);l.get(De)!==Ne&&(t.uniformBlockBinding(De,Ne,B.__bindingPointIndex),l.set(De,Ne))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ce=null,pe={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,x=null,y=null,b=null,T=null,C=null,D=new $e(0,0,0),R=0,S=!1,M=null,L=null,V=null,q=null,j=null,Le.set(0,0,t.canvas.width,t.canvas.height),Qe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Ce,bindFramebuffer:Ve,drawBuffers:Me,useProgram:at,setBlending:U,setMaterial:z,setFlipSided:F,setCullFace:X,setLineWidth:E,setPolygonOffset:re,setScissorTest:Z,activeTexture:Q,bindTexture:ie,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:N,texImage2D:ze,texImage3D:ue,updateUBOMapping:Ie,uniformBlockBinding:ye,texStorage2D:he,texStorage3D:Pe,texSubImage2D:Y,texSubImage3D:ne,compressedTexSubImage2D:$,compressedTexSubImage3D:we,scissor:be,viewport:Ee,reset:nt}}function oA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return p?new OffscreenCanvas(w,v):El("canvas")}function _(w,v,N){let Y=1;const ne=ie(w);if((ne.width>N||ne.height>N)&&(Y=N/Math.max(ne.width,ne.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(Y*ne.width),we=Math.floor(Y*ne.height);h===void 0&&(h=g($,we));const he=v?g($,we):h;return he.width=$,he.height=we,he.getContext("2d").drawImage(w,0,0,$,we),Je("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+$+"x"+we+")."),he}else return"data"in w&&Je("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){t.generateMipmap(w)}function x(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(w,v,N,Y,ne=!1){if(w!==null){if(t[w]!==void 0)return t[w];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=v;if(v===t.RED&&(N===t.FLOAT&&($=t.R32F),N===t.HALF_FLOAT&&($=t.R16F),N===t.UNSIGNED_BYTE&&($=t.R8)),v===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&($=t.R8UI),N===t.UNSIGNED_SHORT&&($=t.R16UI),N===t.UNSIGNED_INT&&($=t.R32UI),N===t.BYTE&&($=t.R8I),N===t.SHORT&&($=t.R16I),N===t.INT&&($=t.R32I)),v===t.RG&&(N===t.FLOAT&&($=t.RG32F),N===t.HALF_FLOAT&&($=t.RG16F),N===t.UNSIGNED_BYTE&&($=t.RG8)),v===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&($=t.RG8UI),N===t.UNSIGNED_SHORT&&($=t.RG16UI),N===t.UNSIGNED_INT&&($=t.RG32UI),N===t.BYTE&&($=t.RG8I),N===t.SHORT&&($=t.RG16I),N===t.INT&&($=t.RG32I)),v===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&($=t.RGB8UI),N===t.UNSIGNED_SHORT&&($=t.RGB16UI),N===t.UNSIGNED_INT&&($=t.RGB32UI),N===t.BYTE&&($=t.RGB8I),N===t.SHORT&&($=t.RGB16I),N===t.INT&&($=t.RGB32I)),v===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&($=t.RGBA8UI),N===t.UNSIGNED_SHORT&&($=t.RGBA16UI),N===t.UNSIGNED_INT&&($=t.RGBA32UI),N===t.BYTE&&($=t.RGBA8I),N===t.SHORT&&($=t.RGBA16I),N===t.INT&&($=t.RGBA32I)),v===t.RGB&&(N===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),v===t.RGBA){const we=ne?Ml:mt.getTransfer(Y);N===t.FLOAT&&($=t.RGBA32F),N===t.HALF_FLOAT&&($=t.RGBA16F),N===t.UNSIGNED_BYTE&&($=we===St?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(w,v){let N;return w?v===null||v===Ci||v===Jo?N=t.DEPTH24_STENCIL8:v===yi?N=t.DEPTH32F_STENCIL8:v===Yo&&(N=t.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ci||v===Jo?N=t.DEPTH_COMPONENT24:v===yi?N=t.DEPTH_COMPONENT32F:v===Yo&&(N=t.DEPTH_COMPONENT16),N}function T(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==cn&&w.minFilter!==gn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function C(w){const v=w.target;v.removeEventListener("dispose",C),R(v),v.isVideoTexture&&u.delete(v)}function D(w){const v=w.target;v.removeEventListener("dispose",D),M(v)}function R(w){const v=i.get(w);if(v.__webglInit===void 0)return;const N=w.source,Y=d.get(N);if(Y){const ne=Y[v.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&S(w),Object.keys(Y).length===0&&d.delete(N)}i.remove(w)}function S(w){const v=i.get(w);t.deleteTexture(v.__webglTexture);const N=w.source,Y=d.get(N);delete Y[v.__cacheKey],o.memory.textures--}function M(w){const v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let ne=0;ne<v.__webglFramebuffer[Y].length;ne++)t.deleteFramebuffer(v.__webglFramebuffer[Y][ne]);else t.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)t.deleteFramebuffer(v.__webglFramebuffer[Y]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=w.textures;for(let Y=0,ne=N.length;Y<ne;Y++){const $=i.get(N[Y]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(N[Y])}i.remove(w)}let L=0;function V(){L=0}function q(){const w=L;return w>=r.maxTextures&&Je("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),L+=1,w}function j(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function J(w,v){const N=i.get(w);if(w.isVideoTexture&&Z(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){const Y=w.image;if(Y===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{se(N,w,v);return}}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+v)}function W(w,v){const N=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){se(N,w,v);return}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+v)}function k(w,v){const N=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){se(N,w,v);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+v)}function H(w,v){const N=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&N.__version!==w.version){oe(N,w,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+v)}const ce={[Cu]:t.REPEAT,[Yi]:t.CLAMP_TO_EDGE,[Pu]:t.MIRRORED_REPEAT},pe={[cn]:t.NEAREST,[Sb]:t.NEAREST_MIPMAP_NEAREST,[ma]:t.NEAREST_MIPMAP_LINEAR,[gn]:t.LINEAR,[dc]:t.LINEAR_MIPMAP_NEAREST,[qr]:t.LINEAR_MIPMAP_LINEAR},fe={[Eb]:t.NEVER,[Rb]:t.ALWAYS,[Tb]:t.LESS,[Qh]:t.LEQUAL,[Ab]:t.EQUAL,[jh]:t.GEQUAL,[Cb]:t.GREATER,[Pb]:t.NOTEQUAL};function ke(w,v){if(v.type===yi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===gn||v.magFilter===dc||v.magFilter===ma||v.magFilter===qr||v.minFilter===gn||v.minFilter===dc||v.minFilter===ma||v.minFilter===qr)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,ce[v.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,ce[v.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,ce[v.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,pe[v.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,fe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===cn||v.minFilter!==ma&&v.minFilter!==qr||v.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Le(w,v){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",C));const Y=v.source;let ne=d.get(Y);ne===void 0&&(ne={},d.set(Y,ne));const $=j(v);if($!==w.__cacheKey){ne[$]===void 0&&(ne[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ne[$].usedTimes++;const we=ne[w.__cacheKey];we!==void 0&&(ne[w.__cacheKey].usedTimes--,we.usedTimes===0&&S(v)),w.__cacheKey=$,w.__webglTexture=ne[$].texture}return N}function Qe(w,v,N){return Math.floor(Math.floor(w/N)/v)}function ut(w,v,N,Y){const $=w.updateRanges;if($.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,N,Y,v.data);else{$.sort((ue,be)=>ue.start-be.start);let we=0;for(let ue=1;ue<$.length;ue++){const be=$[we],Ee=$[ue],Ie=be.start+be.count,ye=Qe(Ee.start,v.width,4),nt=Qe(be.start,v.width,4);Ee.start<=Ie+1&&ye===nt&&Qe(Ee.start+Ee.count-1,v.width,4)===ye?be.count=Math.max(be.count,Ee.start+Ee.count-be.start):(++we,$[we]=Ee)}$.length=we+1;const he=t.getParameter(t.UNPACK_ROW_LENGTH),Pe=t.getParameter(t.UNPACK_SKIP_PIXELS),ze=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let ue=0,be=$.length;ue<be;ue++){const Ee=$[ue],Ie=Math.floor(Ee.start/4),ye=Math.ceil(Ee.count/4),nt=Ie%v.width,B=Math.floor(Ie/v.width),De=ye,ge=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,nt,B,De,ge,N,Y,v.data)}w.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,he),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(t.UNPACK_SKIP_ROWS,ze)}}function se(w,v,N){let Y=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=t.TEXTURE_3D);const ne=Le(w,v),$=v.source;n.bindTexture(Y,w.__webglTexture,t.TEXTURE0+N);const we=i.get($);if($.version!==we.__version||ne===!0){n.activeTexture(t.TEXTURE0+N);const he=mt.getPrimaries(mt.workingColorSpace),Pe=v.colorSpace===pr?null:mt.getPrimaries(v.colorSpace),ze=v.colorSpace===pr||he===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ue=_(v.image,!1,r.maxTextureSize);ue=Q(v,ue);const be=s.convert(v.format,v.colorSpace),Ee=s.convert(v.type);let Ie=y(v.internalFormat,be,Ee,v.colorSpace,v.isVideoTexture);ke(Y,v);let ye;const nt=v.mipmaps,B=v.isVideoTexture!==!0,De=we.__version===void 0||ne===!0,ge=$.dataReady,Ne=T(v,ue);if(v.isDepthTexture)Ie=b(v.format===Yr,v.type),De&&(B?n.texStorage2D(t.TEXTURE_2D,1,Ie,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Ie,ue.width,ue.height,0,be,Ee,null));else if(v.isDataTexture)if(nt.length>0){B&&De&&n.texStorage2D(t.TEXTURE_2D,Ne,Ie,nt[0].width,nt[0].height);for(let de=0,le=nt.length;de<le;de++)ye=nt[de],B?ge&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,ye.width,ye.height,be,Ee,ye.data):n.texImage2D(t.TEXTURE_2D,de,Ie,ye.width,ye.height,0,be,Ee,ye.data);v.generateMipmaps=!1}else B?(De&&n.texStorage2D(t.TEXTURE_2D,Ne,Ie,ue.width,ue.height),ge&&ut(v,ue,be,Ee)):n.texImage2D(t.TEXTURE_2D,0,Ie,ue.width,ue.height,0,be,Ee,ue.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){B&&De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ne,Ie,nt[0].width,nt[0].height,ue.depth);for(let de=0,le=nt.length;de<le;de++)if(ye=nt[de],v.format!==ii)if(be!==null)if(B){if(ge)if(v.layerUpdates.size>0){const Se=Dp(ye.width,ye.height,v.format,v.type);for(const et of v.layerUpdates){const Dt=ye.data.subarray(et*Se/ye.data.BYTES_PER_ELEMENT,(et+1)*Se/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,et,ye.width,ye.height,1,be,Dt)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,ye.width,ye.height,ue.depth,be,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,Ie,ye.width,ye.height,ue.depth,0,ye.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ge&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,ye.width,ye.height,ue.depth,be,Ee,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,Ie,ye.width,ye.height,ue.depth,0,be,Ee,ye.data)}else{B&&De&&n.texStorage2D(t.TEXTURE_2D,Ne,Ie,nt[0].width,nt[0].height);for(let de=0,le=nt.length;de<le;de++)ye=nt[de],v.format!==ii?be!==null?B?ge&&n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,ye.width,ye.height,be,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,de,Ie,ye.width,ye.height,0,ye.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ge&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,ye.width,ye.height,be,Ee,ye.data):n.texImage2D(t.TEXTURE_2D,de,Ie,ye.width,ye.height,0,be,Ee,ye.data)}else if(v.isDataArrayTexture)if(B){if(De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ne,Ie,ue.width,ue.height,ue.depth),ge)if(v.layerUpdates.size>0){const de=Dp(ue.width,ue.height,v.format,v.type);for(const le of v.layerUpdates){const Se=ue.data.subarray(le*de/ue.data.BYTES_PER_ELEMENT,(le+1)*de/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,ue.width,ue.height,1,be,Ee,Se)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,be,Ee,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,ue.width,ue.height,ue.depth,0,be,Ee,ue.data);else if(v.isData3DTexture)B?(De&&n.texStorage3D(t.TEXTURE_3D,Ne,Ie,ue.width,ue.height,ue.depth),ge&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,be,Ee,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,ue.width,ue.height,ue.depth,0,be,Ee,ue.data);else if(v.isFramebufferTexture){if(De)if(B)n.texStorage2D(t.TEXTURE_2D,Ne,Ie,ue.width,ue.height);else{let de=ue.width,le=ue.height;for(let Se=0;Se<Ne;Se++)n.texImage2D(t.TEXTURE_2D,Se,Ie,de,le,0,be,Ee,null),de>>=1,le>>=1}}else if(nt.length>0){if(B&&De){const de=ie(nt[0]);n.texStorage2D(t.TEXTURE_2D,Ne,Ie,de.width,de.height)}for(let de=0,le=nt.length;de<le;de++)ye=nt[de],B?ge&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,be,Ee,ye):n.texImage2D(t.TEXTURE_2D,de,Ie,be,Ee,ye);v.generateMipmaps=!1}else if(B){if(De){const de=ie(ue);n.texStorage2D(t.TEXTURE_2D,Ne,Ie,de.width,de.height)}ge&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,be,Ee,ue)}else n.texImage2D(t.TEXTURE_2D,0,Ie,be,Ee,ue);m(v)&&f(Y),we.__version=$.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function oe(w,v,N){if(v.image.length!==6)return;const Y=Le(w,v),ne=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+N);const $=i.get(ne);if(ne.version!==$.__version||Y===!0){n.activeTexture(t.TEXTURE0+N);const we=mt.getPrimaries(mt.workingColorSpace),he=v.colorSpace===pr?null:mt.getPrimaries(v.colorSpace),Pe=v.colorSpace===pr||we===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const ze=v.isCompressedTexture||v.image[0].isCompressedTexture,ue=v.image[0]&&v.image[0].isDataTexture,be=[];for(let le=0;le<6;le++)!ze&&!ue?be[le]=_(v.image[le],!0,r.maxCubemapSize):be[le]=ue?v.image[le].image:v.image[le],be[le]=Q(v,be[le]);const Ee=be[0],Ie=s.convert(v.format,v.colorSpace),ye=s.convert(v.type),nt=y(v.internalFormat,Ie,ye,v.colorSpace),B=v.isVideoTexture!==!0,De=$.__version===void 0||Y===!0,ge=ne.dataReady;let Ne=T(v,Ee);ke(t.TEXTURE_CUBE_MAP,v);let de;if(ze){B&&De&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ne,nt,Ee.width,Ee.height);for(let le=0;le<6;le++){de=be[le].mipmaps;for(let Se=0;Se<de.length;Se++){const et=de[Se];v.format!==ii?Ie!==null?B?ge&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,0,0,et.width,et.height,Ie,et.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,nt,et.width,et.height,0,et.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,0,0,et.width,et.height,Ie,ye,et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,nt,et.width,et.height,0,Ie,ye,et.data)}}}else{if(de=v.mipmaps,B&&De){de.length>0&&Ne++;const le=ie(be[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ne,nt,le.width,le.height)}for(let le=0;le<6;le++)if(ue){B?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,be[le].width,be[le].height,Ie,ye,be[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,nt,be[le].width,be[le].height,0,Ie,ye,be[le].data);for(let Se=0;Se<de.length;Se++){const Dt=de[Se].image[le].image;B?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,0,0,Dt.width,Dt.height,Ie,ye,Dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,nt,Dt.width,Dt.height,0,Ie,ye,Dt.data)}}else{B?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ie,ye,be[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,nt,Ie,ye,be[le]);for(let Se=0;Se<de.length;Se++){const et=de[Se];B?ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,0,0,Ie,ye,et.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,nt,Ie,ye,et.image[le])}}}m(v)&&f(t.TEXTURE_CUBE_MAP),$.__version=ne.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ce(w,v,N,Y,ne,$){const we=s.convert(N.format,N.colorSpace),he=s.convert(N.type),Pe=y(N.internalFormat,we,he,N.colorSpace),ze=i.get(v),ue=i.get(N);if(ue.__renderTarget=v,!ze.__hasExternalTextures){const be=Math.max(1,v.width>>$),Ee=Math.max(1,v.height>>$);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,$,Pe,be,Ee,v.depth,0,we,he,null):n.texImage2D(ne,$,Pe,be,Ee,0,we,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),re(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,ne,ue.__webglTexture,0,E(v)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,ne,ue.__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(w,v,N){if(t.bindRenderbuffer(t.RENDERBUFFER,w),v.depthBuffer){const Y=v.depthTexture,ne=Y&&Y.isDepthTexture?Y.type:null,$=b(v.stencilBuffer,ne),we=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;re(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,E(v),$,v.width,v.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,E(v),$,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,$,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,w)}else{const Y=v.textures;for(let ne=0;ne<Y.length;ne++){const $=Y[ne],we=s.convert($.format,$.colorSpace),he=s.convert($.type),Pe=y($.internalFormat,we,he,$.colorSpace);re(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,E(v),Pe,v.width,v.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,E(v),Pe,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Pe,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Me(w,v,N){const Y=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(v.depthTexture);if(ne.__renderTarget=v,(!ne.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),ke(t.TEXTURE_CUBE_MAP,v.depthTexture);const ze=s.convert(v.depthTexture.format),ue=s.convert(v.depthTexture.type);let be;v.depthTexture.format===er?be=t.DEPTH_COMPONENT24:v.depthTexture.format===Yr&&(be=t.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,be,v.width,v.height,0,ze,ue,null)}}else J(v.depthTexture,0);const $=ne.__webglTexture,we=E(v),he=Y?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,Pe=v.depthTexture.format===Yr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===er)re(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Pe,he,$,0,we):t.framebufferTexture2D(t.FRAMEBUFFER,Pe,he,$,0);else if(v.depthTexture.format===Yr)re(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Pe,he,$,0,we):t.framebufferTexture2D(t.FRAMEBUFFER,Pe,he,$,0);else throw new Error("Unknown depthTexture format")}function at(w){const v=i.get(w),N=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const ne=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",ne)};Y.addEventListener("dispose",ne),v.__depthDisposeCallback=ne}v.__boundDepthTexture=Y}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(N)for(let Y=0;Y<6;Y++)Me(v.__webglFramebuffer[Y],w,Y);else{const Y=w.texture.mipmaps;Y&&Y.length>0?Me(v.__webglFramebuffer[0],w,0):Me(v.__webglFramebuffer,w,0)}else if(N){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=t.createRenderbuffer(),Ve(v.__webglDepthbuffer[Y],w,!1);else{const ne=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,$)}}else{const Y=w.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),Ve(v.__webglDepthbuffer,w,!1);else{const ne=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,$)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function I(w,v,N){const Y=i.get(w);v!==void 0&&Ce(Y.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&at(w)}function O(w){const v=w.texture,N=i.get(w),Y=i.get(v);w.addEventListener("dispose",D);const ne=w.textures,$=w.isWebGLCubeRenderTarget===!0,we=ne.length>1;if(we||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=v.version,o.memory.textures++),$){N.__webglFramebuffer=[];for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[he]=[];for(let Pe=0;Pe<v.mipmaps.length;Pe++)N.__webglFramebuffer[he][Pe]=t.createFramebuffer()}else N.__webglFramebuffer[he]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)N.__webglFramebuffer[he]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(we)for(let he=0,Pe=ne.length;he<Pe;he++){const ze=i.get(ne[he]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(w.samples>0&&re(w)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){const Pe=ne[he];N.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[he]);const ze=s.convert(Pe.format,Pe.colorSpace),ue=s.convert(Pe.type),be=y(Pe.internalFormat,ze,ue,Pe.colorSpace,w.isXRRenderTarget===!0),Ee=E(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,be,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,N.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),Ve(N.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),ke(t.TEXTURE_CUBE_MAP,v);for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0)for(let Pe=0;Pe<v.mipmaps.length;Pe++)Ce(N.__webglFramebuffer[he][Pe],w,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe);else Ce(N.__webglFramebuffer[he],w,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(v)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let he=0,Pe=ne.length;he<Pe;he++){const ze=ne[he],ue=i.get(ze);let be=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(be=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(be,ue.__webglTexture),ke(be,ze),Ce(N.__webglFramebuffer,w,ze,t.COLOR_ATTACHMENT0+he,be,0),m(ze)&&f(be)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Y.__webglTexture),ke(he,v),v.mipmaps&&v.mipmaps.length>0)for(let Pe=0;Pe<v.mipmaps.length;Pe++)Ce(N.__webglFramebuffer[Pe],w,v,t.COLOR_ATTACHMENT0,he,Pe);else Ce(N.__webglFramebuffer,w,v,t.COLOR_ATTACHMENT0,he,0);m(v)&&f(he),n.unbindTexture()}w.depthBuffer&&at(w)}function U(w){const v=w.textures;for(let N=0,Y=v.length;N<Y;N++){const ne=v[N];if(m(ne)){const $=x(w),we=i.get(ne).__webglTexture;n.bindTexture($,we),f($),n.unbindTexture()}}}const z=[],F=[];function X(w){if(w.samples>0){if(re(w)===!1){const v=w.textures,N=w.width,Y=w.height;let ne=t.COLOR_BUFFER_BIT;const $=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(w),he=v.length>1;if(he)for(let ze=0;ze<v.length;ze++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Pe=w.texture.mipmaps;Pe&&Pe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ze=0;ze<v.length;ze++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[ze]);const ue=i.get(v[ze]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,N,Y,0,0,N,Y,ne,t.NEAREST),l===!0&&(z.length=0,F.length=0,z.push(t.COLOR_ATTACHMENT0+ze),w.depthBuffer&&w.resolveDepthBuffer===!1&&(z.push($),F.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,F)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,z))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let ze=0;ze<v.length;ze++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,we.__webglColorRenderbuffer[ze]);const ue=i.get(v[ze]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function E(w){return Math.min(r.maxSamples,w.samples)}function re(w){const v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Z(w){const v=o.render.frame;u.get(w)!==v&&(u.set(w,v),w.update())}function Q(w,v){const N=w.colorSpace,Y=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==Xs&&N!==pr&&(mt.getTransfer(N)===St?(Y!==ii||ne!==Hn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",N)),v}function ie(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=V,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=k,this.setTextureCube=H,this.rebindTextures=I,this.setupRenderTarget=O,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=re,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function aA(t,e){function n(i,r=pr){let s;const o=mt.getTransfer(r);if(i===Hn)return t.UNSIGNED_BYTE;if(i===Yh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===O0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===F0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===N0)return t.BYTE;if(i===U0)return t.SHORT;if(i===Yo)return t.UNSIGNED_SHORT;if(i===qh)return t.INT;if(i===Ci)return t.UNSIGNED_INT;if(i===yi)return t.FLOAT;if(i===ji)return t.HALF_FLOAT;if(i===k0)return t.ALPHA;if(i===B0)return t.RGB;if(i===ii)return t.RGBA;if(i===er)return t.DEPTH_COMPONENT;if(i===Yr)return t.DEPTH_STENCIL;if(i===z0)return t.RED;if(i===$h)return t.RED_INTEGER;if(i===Ws)return t.RG;if(i===Kh)return t.RG_INTEGER;if(i===Zh)return t.RGBA_INTEGER;if(i===rl||i===sl||i===ol||i===al)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===rl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===rl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ru||i===Du||i===Iu||i===Lu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ru)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Du)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Iu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nu||i===Uu||i===Ou||i===Fu||i===ku||i===Bu||i===zu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nu||i===Uu)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ou)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Fu)return s.COMPRESSED_R11_EAC;if(i===ku)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Bu)return s.COMPRESSED_RG11_EAC;if(i===zu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vu||i===Hu||i===Gu||i===Wu||i===Xu||i===qu||i===Yu||i===Ju||i===$u||i===Ku||i===Zu||i===Qu||i===ju||i===eh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ju)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$u)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ku)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qu)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ju)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===th||i===nh||i===ih)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===th)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ih)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rh||i===sh||i===oh||i===ah)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===rh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ah)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const lA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cA=`
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

}`;class uA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new j0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new li({vertexShader:lA,fragmentShader:cA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _e(new aa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hA extends is{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new uA,f={},x=n.getContextAttributes();let y=null,b=null;const T=[],C=[],D=new me;let R=null;const S=new Ln;S.viewport=new Gt;const M=new Ln;M.viewport=new Gt;const L=[S,M],V=new gM;let q=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let oe=T[se];return oe===void 0&&(oe=new Nc,T[se]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(se){let oe=T[se];return oe===void 0&&(oe=new Nc,T[se]=oe),oe.getGripSpace()},this.getHand=function(se){let oe=T[se];return oe===void 0&&(oe=new Nc,T[se]=oe),oe.getHandSpace()};function J(se){const oe=C.indexOf(se.inputSource);if(oe===-1)return;const Ce=T[oe];Ce!==void 0&&(Ce.update(se.inputSource,se.frame,c||o),Ce.dispatchEvent({type:se.type,data:se.inputSource}))}function W(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",k);for(let se=0;se<T.length;se++){const oe=C[se];oe!==null&&(C[se]=null,T[se].disconnect(oe))}q=null,j=null,m.reset();for(const se in f)delete f[se];e.setRenderTarget(y),p=null,d=null,h=null,r=null,b=null,ut.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",W),r.addEventListener("inputsourceschange",k),x.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Ve=null,Me=null;x.depth&&(Me=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ce=x.stencil?Yr:er,Ve=x.stencil?Jo:Ci);const at={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(at),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new wi(d.textureWidth,d.textureHeight,{format:ii,type:Hn,depthTexture:new Ko(d.textureWidth,d.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ce={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new wi(p.framebufferWidth,p.framebufferHeight,{format:ii,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ut.setContext(r),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(se){for(let oe=0;oe<se.removed.length;oe++){const Ce=se.removed[oe],Ve=C.indexOf(Ce);Ve>=0&&(C[Ve]=null,T[Ve].disconnect(Ce))}for(let oe=0;oe<se.added.length;oe++){const Ce=se.added[oe];let Ve=C.indexOf(Ce);if(Ve===-1){for(let at=0;at<T.length;at++)if(at>=C.length){C.push(Ce),Ve=at;break}else if(C[at]===null){C[at]=Ce,Ve=at;break}if(Ve===-1)break}const Me=T[Ve];Me&&Me.connect(Ce)}}const H=new P,ce=new P;function pe(se,oe,Ce){H.setFromMatrixPosition(oe.matrixWorld),ce.setFromMatrixPosition(Ce.matrixWorld);const Ve=H.distanceTo(ce),Me=oe.projectionMatrix.elements,at=Ce.projectionMatrix.elements,I=Me[14]/(Me[10]-1),O=Me[14]/(Me[10]+1),U=(Me[9]+1)/Me[5],z=(Me[9]-1)/Me[5],F=(Me[8]-1)/Me[0],X=(at[8]+1)/at[0],E=I*F,re=I*X,Z=Ve/(-F+X),Q=Z*-F;if(oe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Q),se.translateZ(Z),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Me[10]===-1)se.projectionMatrix.copy(oe.projectionMatrix),se.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ie=I+Z,w=O+Z,v=E-Q,N=re+(Ve-Q),Y=U*O/w*ie,ne=z*O/w*ie;se.projectionMatrix.makePerspective(v,N,Y,ne,ie,w),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function fe(se,oe){oe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(oe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let oe=se.near,Ce=se.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(Ce=m.depthFar)),V.near=M.near=S.near=oe,V.far=M.far=S.far=Ce,(q!==V.near||j!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),q=V.near,j=V.far),V.layers.mask=se.layers.mask|6,S.layers.mask=V.layers.mask&3,M.layers.mask=V.layers.mask&5;const Ve=se.parent,Me=V.cameras;fe(V,Ve);for(let at=0;at<Me.length;at++)fe(Me[at],Ve);Me.length===2?pe(V,S,M):V.projectionMatrix.copy(S.projectionMatrix),ke(se,V,Ve)};function ke(se,oe,Ce){Ce===null?se.matrix.copy(oe.matrixWorld):(se.matrix.copy(Ce.matrixWorld),se.matrix.invert(),se.matrix.multiply(oe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(oe.projectionMatrix),se.projectionMatrixInverse.copy(oe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=qs*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(se){return f[se]};let Le=null;function Qe(se,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){const Ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Ve=!1;Ce.length!==V.cameras.length&&(V.cameras.length=0,Ve=!0);for(let O=0;O<Ce.length;O++){const U=Ce[O];let z=null;if(p!==null)z=p.getViewport(U);else{const X=h.getViewSubImage(d,U);z=X.viewport,O===0&&(e.setRenderTargetTextures(b,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(b))}let F=L[O];F===void 0&&(F=new Ln,F.layers.enable(O),F.viewport=new Gt,L[O]=F),F.matrix.fromArray(U.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(U.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(z.x,z.y,z.width,z.height),O===0&&(V.matrix.copy(F.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ve===!0&&V.cameras.push(F)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const O=h.getDepthInformation(Ce[0]);O&&O.isValid&&O.texture&&m.init(O,r.renderState)}if(Me&&Me.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let O=0;O<Ce.length;O++){const U=Ce[O].camera;if(U){let z=f[U];z||(z=new j0,f[U]=z);const F=h.getCameraImage(U);z.sourceTexture=F}}}}for(let Ce=0;Ce<T.length;Ce++){const Ve=C[Ce],Me=T[Ce];Ve!==null&&Me!==void 0&&Me.update(Ve,oe,c||o)}Le&&Le(se,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const ut=new d_;ut.setAnimationLoop(Qe),this.setAnimationLoop=function(se){Le=se},this.dispose=function(){}}}const Br=new ai,fA=new ht;function dA(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Y0(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,x,y,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,x,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===_n&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===_n&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),y=x.envMap,b=x.envMapRotation;y&&(m.envMap.value=y,Br.copy(b),Br.x*=-1,Br.y*=-1,Br.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),m.envMapRotation.value.setFromMatrix4(fA.makeRotationFromEuler(Br)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=y*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===_n&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const b=y.program;i.uniformBlockBinding(x,b)}function c(x,y){let b=r[x.id];b===void 0&&(g(x),b=u(x),r[x.id]=b,x.addEventListener("dispose",m));const T=y.program;i.updateUBOMapping(x,T);const C=e.render.frame;s[x.id]!==C&&(d(x),s[x.id]=C)}function u(x){const y=h();x.__bindingPointIndex=y;const b=t.createBuffer(),T=x.__size,C=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,T,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,b),b}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=r[x.id],b=x.uniforms,T=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let C=0,D=b.length;C<D;C++){const R=Array.isArray(b[C])?b[C]:[b[C]];for(let S=0,M=R.length;S<M;S++){const L=R[S];if(p(L,C,S,T)===!0){const V=L.__offset,q=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let J=0;J<q.length;J++){const W=q[J],k=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,V+j,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,j),j+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,y,b,T){const C=x.value,D=y+"_"+b;if(T[D]===void 0)return typeof C=="number"||typeof C=="boolean"?T[D]=C:T[D]=C.clone(),!0;{const R=T[D];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return T[D]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(x){const y=x.uniforms;let b=0;const T=16;for(let D=0,R=y.length;D<R;D++){const S=Array.isArray(y[D])?y[D]:[y[D]];for(let M=0,L=S.length;M<L;M++){const V=S[M],q=Array.isArray(V.value)?V.value:[V.value];for(let j=0,J=q.length;j<J;j++){const W=q[j],k=_(W),H=b%T,ce=H%k.boundary,pe=H+ce;b+=ce,pe!==0&&T-pe<k.storage&&(b+=T-pe),V.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=k.storage}}}const C=b%T;return C>0&&(b+=T-C),x.__size=b,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Je("WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}const mA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let di=null;function gA(){return di===null&&(di=new vS(mA,16,16,Ws,ji),di.name="DFG_LUT",di.minFilter=gn,di.magFilter=gn,di.wrapS=Yi,di.wrapT=Yi,di.generateMipmaps=!1,di.needsUpdate=!0),di}class _A{constructor(e={}){const{canvas:n=Db(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Hn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=p,m=new Set([Zh,Kh,$h]),f=new Set([Hn,Ci,Yo,Jo,Yh,Jh]),x=new Uint32Array(4),y=new Int32Array(4);let b=null,T=null;const C=[],D=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let M=!1;this._outputColorSpace=zn;let L=0,V=0,q=null,j=-1,J=null;const W=new Gt,k=new Gt;let H=null;const ce=new $e(0);let pe=0,fe=n.width,ke=n.height,Le=1,Qe=null,ut=null;const se=new Gt(0,0,fe,ke),oe=new Gt(0,0,fe,ke);let Ce=!1;const Ve=new rf;let Me=!1,at=!1;const I=new ht,O=new P,U=new Gt,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let F=!1;function X(){return q===null?Le:1}let E=i;function re(A,G){return n.getContext(A,G)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wh}`),n.addEventListener("webglcontextlost",et,!1),n.addEventListener("webglcontextrestored",Dt,!1),n.addEventListener("webglcontextcreationerror",yt,!1),E===null){const G="webgl2";if(E=re(G,A),E===null)throw re(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw dt("WebGLRenderer: "+A.message),A}let Z,Q,ie,w,v,N,Y,ne,$,we,he,Pe,ze,ue,be,Ee,Ie,ye,nt,B,De,ge,Ne,de;function le(){Z=new g1(E),Z.init(),ge=new aA(E,Z),Q=new a1(E,Z,e,ge),ie=new sA(E,Z),Q.reversedDepthBuffer&&d&&ie.buffers.depth.setReversed(!0),w=new x1(E),v=new WT,N=new oA(E,Z,ie,v,Q,ge,w),Y=new c1(S),ne=new m1(S),$=new MM(E),Ne=new s1(E,$),we=new _1(E,$,w,Ne),he=new b1(E,we,$,w),nt=new y1(E,Q,N),Ee=new l1(v),Pe=new GT(S,Y,ne,Z,Q,Ne,Ee),ze=new dA(S,v),ue=new qT,be=new QT(Z),ye=new r1(S,Y,ne,ie,he,g,l),Ie=new iA(S,he,Q),de=new pA(E,w,Q,ie),B=new o1(E,Z,w),De=new v1(E,Z,w),w.programs=Pe.programs,S.capabilities=Q,S.extensions=Z,S.properties=v,S.renderLists=ue,S.shadowMap=Ie,S.state=ie,S.info=w}le(),_!==Hn&&(R=new M1(_,n.width,n.height,r,s));const Se=new hA(S,E);this.xr=Se,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const A=Z.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Z.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(A){A!==void 0&&(Le=A,this.setSize(fe,ke,!1))},this.getSize=function(A){return A.set(fe,ke)},this.setSize=function(A,G,te=!0){if(Se.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=A,ke=G,n.width=Math.floor(A*Le),n.height=Math.floor(G*Le),te===!0&&(n.style.width=A+"px",n.style.height=G+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(fe*Le,ke*Le).floor()},this.setDrawingBufferSize=function(A,G,te){fe=A,ke=G,Le=te,n.width=Math.floor(A*te),n.height=Math.floor(G*te),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(_===Hn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(W)},this.getViewport=function(A){return A.copy(se)},this.setViewport=function(A,G,te,ee){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,G,te,ee),ie.viewport(W.copy(se).multiplyScalar(Le).round())},this.getScissor=function(A){return A.copy(oe)},this.setScissor=function(A,G,te,ee){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,G,te,ee),ie.scissor(k.copy(oe).multiplyScalar(Le).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(A){ie.setScissorTest(Ce=A)},this.setOpaqueSort=function(A){Qe=A},this.setTransparentSort=function(A){ut=A},this.getClearColor=function(A){return A.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,te=!0){let ee=0;if(A){let K=!1;if(q!==null){const Te=q.texture.format;K=m.has(Te)}if(K){const Te=q.texture.type,Ue=f.has(Te),Re=ye.getClearColor(),Be=ye.getClearAlpha(),Ge=Re.r,Ze=Re.g,Xe=Re.b;Ue?(x[0]=Ge,x[1]=Ze,x[2]=Xe,x[3]=Be,E.clearBufferuiv(E.COLOR,0,x)):(y[0]=Ge,y[1]=Ze,y[2]=Xe,y[3]=Be,E.clearBufferiv(E.COLOR,0,y))}else ee|=E.COLOR_BUFFER_BIT}G&&(ee|=E.DEPTH_BUFFER_BIT),te&&(ee|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",et,!1),n.removeEventListener("webglcontextrestored",Dt,!1),n.removeEventListener("webglcontextcreationerror",yt,!1),ye.dispose(),ue.dispose(),be.dispose(),v.dispose(),Y.dispose(),ne.dispose(),he.dispose(),Ne.dispose(),de.dispose(),Pe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Qf),Se.removeEventListener("sessionend",jf),Rr.stop()};function et(A){A.preventDefault(),Yd("WebGLRenderer: Context Lost."),M=!0}function Dt(){Yd("WebGLRenderer: Context Restored."),M=!1;const A=w.autoReset,G=Ie.enabled,te=Ie.autoUpdate,ee=Ie.needsUpdate,K=Ie.type;le(),w.autoReset=A,Ie.enabled=G,Ie.autoUpdate=te,Ie.needsUpdate=ee,Ie.type=K}function yt(A){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function hi(A){const G=A.target;G.removeEventListener("dispose",hi),Ii(G)}function Ii(A){lv(A),v.remove(A)}function lv(A){const G=v.get(A).programs;G!==void 0&&(G.forEach(function(te){Pe.releaseProgram(te)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,te,ee,K,Te){G===null&&(G=z);const Ue=K.isMesh&&K.matrixWorld.determinant()<0,Re=uv(A,G,te,ee,K);ie.setMaterial(ee,Ue);let Be=te.index,Ge=1;if(ee.wireframe===!0){if(Be=we.getWireframeAttribute(te),Be===void 0)return;Ge=2}const Ze=te.drawRange,Xe=te.attributes.position;let ct=Ze.start*Ge,wt=(Ze.start+Ze.count)*Ge;Te!==null&&(ct=Math.max(ct,Te.start*Ge),wt=Math.min(wt,(Te.start+Te.count)*Ge)),Be!==null?(ct=Math.max(ct,0),wt=Math.min(wt,Be.count)):Xe!=null&&(ct=Math.max(ct,0),wt=Math.min(wt,Xe.count));const zt=wt-ct;if(zt<0||zt===1/0)return;Ne.setup(K,ee,Re,te,Be);let Vt,At=B;if(Be!==null&&(Vt=$.get(Be),At=De,At.setIndex(Vt)),K.isMesh)ee.wireframe===!0?(ie.setLineWidth(ee.wireframeLinewidth*X()),At.setMode(E.LINES)):At.setMode(E.TRIANGLES);else if(K.isLine){let qe=ee.linewidth;qe===void 0&&(qe=1),ie.setLineWidth(qe*X()),K.isLineSegments?At.setMode(E.LINES):K.isLineLoop?At.setMode(E.LINE_LOOP):At.setMode(E.LINE_STRIP)}else K.isPoints?At.setMode(E.POINTS):K.isSprite&&At.setMode(E.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)$o("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))At.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const qe=K._multiDrawStarts,bt=K._multiDrawCounts,gt=K._multiDrawCount,On=Be?$.get(Be).bytesPerElement:1,as=v.get(ee).currentProgram.getUniforms();for(let Fn=0;Fn<gt;Fn++)as.setValue(E,"_gl_DrawID",Fn),At.render(qe[Fn]/On,bt[Fn])}else if(K.isInstancedMesh)At.renderInstances(ct,zt,K.count);else if(te.isInstancedBufferGeometry){const qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,bt=Math.min(te.instanceCount,qe);At.renderInstances(ct,zt,bt)}else At.render(ct,zt)};function Zf(A,G,te){A.transparent===!0&&A.side===wn&&A.forceSinglePass===!1?(A.side=_n,A.needsUpdate=!0,ha(A,G,te),A.side=Ar,A.needsUpdate=!0,ha(A,G,te),A.side=wn):ha(A,G,te)}this.compile=function(A,G,te=null){te===null&&(te=A),T=be.get(te),T.init(G),D.push(T),te.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),A!==te&&A.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights();const ee=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Te=K.material;if(Te)if(Array.isArray(Te))for(let Ue=0;Ue<Te.length;Ue++){const Re=Te[Ue];Zf(Re,te,K),ee.add(Re)}else Zf(Te,te,K),ee.add(Te)}),T=D.pop(),ee},this.compileAsync=function(A,G,te=null){const ee=this.compile(A,G,te);return new Promise(K=>{function Te(){if(ee.forEach(function(Ue){v.get(Ue).currentProgram.isReady()&&ee.delete(Ue)}),ee.size===0){K(A);return}setTimeout(Te,10)}Z.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let ec=null;function cv(A){ec&&ec(A)}function Qf(){Rr.stop()}function jf(){Rr.start()}const Rr=new d_;Rr.setAnimationLoop(cv),typeof self<"u"&&Rr.setContext(self),this.setAnimationLoop=function(A){ec=A,Se.setAnimationLoop(A),A===null?Rr.stop():Rr.start()},Se.addEventListener("sessionstart",Qf),Se.addEventListener("sessionend",jf),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const te=Se.enabled===!0&&Se.isPresenting===!0,ee=R!==null&&(q===null||te)&&R.begin(S,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(G),G=Se.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,G,q),T=be.get(A,D.length),T.init(G),D.push(T),I.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ve.setFromProjectionMatrix(I,bi,G.reversedDepth),at=this.localClippingEnabled,Me=Ee.init(this.clippingPlanes,at),b=ue.get(A,C.length),b.init(),C.push(b),Se.enabled===!0&&Se.isPresenting===!0){const Ue=S.xr.getDepthSensingMesh();Ue!==null&&tc(Ue,G,-1/0,S.sortObjects)}tc(A,G,0,S.sortObjects),b.finish(),S.sortObjects===!0&&b.sort(Qe,ut),F=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,F&&ye.addToRenderList(b,A),this.info.render.frame++,Me===!0&&Ee.beginShadows();const K=T.state.shadowsArray;if(Ie.render(K,A,G),Me===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&R.hasRenderPass())===!1){const Ue=b.opaque,Re=b.transmissive;if(T.setupLights(),G.isArrayCamera){const Be=G.cameras;if(Re.length>0)for(let Ge=0,Ze=Be.length;Ge<Ze;Ge++){const Xe=Be[Ge];td(Ue,Re,A,Xe)}F&&ye.render(A);for(let Ge=0,Ze=Be.length;Ge<Ze;Ge++){const Xe=Be[Ge];ed(b,A,Xe,Xe.viewport)}}else Re.length>0&&td(Ue,Re,A,G),F&&ye.render(A),ed(b,A,G)}q!==null&&V===0&&(N.updateMultisampleRenderTarget(q),N.updateRenderTargetMipmap(q)),ee&&R.end(S),A.isScene===!0&&A.onAfterRender(S,A,G),Ne.resetDefaultState(),j=-1,J=null,D.pop(),D.length>0?(T=D[D.length-1],Me===!0&&Ee.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?b=C[C.length-1]:b=null};function tc(A,G,te,ee){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ve.intersectsSprite(A)){ee&&U.setFromMatrixPosition(A.matrixWorld).applyMatrix4(I);const Ue=he.update(A),Re=A.material;Re.visible&&b.push(A,Ue,Re,te,U.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ve.intersectsObject(A))){const Ue=he.update(A),Re=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),U.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),U.copy(Ue.boundingSphere.center)),U.applyMatrix4(A.matrixWorld).applyMatrix4(I)),Array.isArray(Re)){const Be=Ue.groups;for(let Ge=0,Ze=Be.length;Ge<Ze;Ge++){const Xe=Be[Ge],ct=Re[Xe.materialIndex];ct&&ct.visible&&b.push(A,Ue,ct,te,U.z,Xe)}}else Re.visible&&b.push(A,Ue,Re,te,U.z,null)}}const Te=A.children;for(let Ue=0,Re=Te.length;Ue<Re;Ue++)tc(Te[Ue],G,te,ee)}function ed(A,G,te,ee){const{opaque:K,transmissive:Te,transparent:Ue}=A;T.setupLightsView(te),Me===!0&&Ee.setGlobalState(S.clippingPlanes,te),ee&&ie.viewport(W.copy(ee)),K.length>0&&ua(K,G,te),Te.length>0&&ua(Te,G,te),Ue.length>0&&ua(Ue,G,te),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function td(A,G,te,ee){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ee.id]===void 0){const ct=Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ee.id]=new wi(1,1,{generateMipmaps:!0,type:ct?ji:Hn,minFilter:qr,samples:Q.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace})}const Te=T.state.transmissionRenderTarget[ee.id],Ue=ee.viewport||W;Te.setSize(Ue.z*S.transmissionResolutionScale,Ue.w*S.transmissionResolutionScale);const Re=S.getRenderTarget(),Be=S.getActiveCubeFace(),Ge=S.getActiveMipmapLevel();S.setRenderTarget(Te),S.getClearColor(ce),pe=S.getClearAlpha(),pe<1&&S.setClearColor(16777215,.5),S.clear(),F&&ye.render(te);const Ze=S.toneMapping;S.toneMapping=Mi;const Xe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),T.setupLightsView(ee),Me===!0&&Ee.setGlobalState(S.clippingPlanes,ee),ua(A,te,ee),N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te),Z.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let wt=0,zt=G.length;wt<zt;wt++){const Vt=G[wt],{object:At,geometry:qe,material:bt,group:gt}=Vt;if(bt.side===wn&&At.layers.test(ee.layers)){const On=bt.side;bt.side=_n,bt.needsUpdate=!0,nd(At,te,ee,qe,bt,gt),bt.side=On,bt.needsUpdate=!0,ct=!0}}ct===!0&&(N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te))}S.setRenderTarget(Re,Be,Ge),S.setClearColor(ce,pe),Xe!==void 0&&(ee.viewport=Xe),S.toneMapping=Ze}function ua(A,G,te){const ee=G.isScene===!0?G.overrideMaterial:null;for(let K=0,Te=A.length;K<Te;K++){const Ue=A[K],{object:Re,geometry:Be,group:Ge}=Ue;let Ze=Ue.material;Ze.allowOverride===!0&&ee!==null&&(Ze=ee),Re.layers.test(te.layers)&&nd(Re,G,te,Be,Ze,Ge)}}function nd(A,G,te,ee,K,Te){A.onBeforeRender(S,G,te,ee,K,Te),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(S,G,te,ee,A,Te),K.transparent===!0&&K.side===wn&&K.forceSinglePass===!1?(K.side=_n,K.needsUpdate=!0,S.renderBufferDirect(te,G,ee,K,A,Te),K.side=Ar,K.needsUpdate=!0,S.renderBufferDirect(te,G,ee,K,A,Te),K.side=wn):S.renderBufferDirect(te,G,ee,K,A,Te),A.onAfterRender(S,G,te,ee,K,Te)}function ha(A,G,te){G.isScene!==!0&&(G=z);const ee=v.get(A),K=T.state.lights,Te=T.state.shadowsArray,Ue=K.state.version,Re=Pe.getParameters(A,K.state,Te,G,te),Be=Pe.getProgramCacheKey(Re);let Ge=ee.programs;ee.environment=A.isMeshStandardMaterial?G.environment:null,ee.fog=G.fog,ee.envMap=(A.isMeshStandardMaterial?ne:Y).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",hi),Ge=new Map,ee.programs=Ge);let Ze=Ge.get(Be);if(Ze!==void 0){if(ee.currentProgram===Ze&&ee.lightsStateVersion===Ue)return rd(A,Re),Ze}else Re.uniforms=Pe.getUniforms(A),A.onBeforeCompile(Re,S),Ze=Pe.acquireProgram(Re,Be),Ge.set(Be,Ze),ee.uniforms=Re.uniforms;const Xe=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=Ee.uniform),rd(A,Re),ee.needsLights=fv(A),ee.lightsStateVersion=Ue,ee.needsLights&&(Xe.ambientLightColor.value=K.state.ambient,Xe.lightProbe.value=K.state.probe,Xe.directionalLights.value=K.state.directional,Xe.directionalLightShadows.value=K.state.directionalShadow,Xe.spotLights.value=K.state.spot,Xe.spotLightShadows.value=K.state.spotShadow,Xe.rectAreaLights.value=K.state.rectArea,Xe.ltc_1.value=K.state.rectAreaLTC1,Xe.ltc_2.value=K.state.rectAreaLTC2,Xe.pointLights.value=K.state.point,Xe.pointLightShadows.value=K.state.pointShadow,Xe.hemisphereLights.value=K.state.hemi,Xe.directionalShadowMap.value=K.state.directionalShadowMap,Xe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Xe.spotShadowMap.value=K.state.spotShadowMap,Xe.spotLightMatrix.value=K.state.spotLightMatrix,Xe.spotLightMap.value=K.state.spotLightMap,Xe.pointShadowMap.value=K.state.pointShadowMap,Xe.pointShadowMatrix.value=K.state.pointShadowMatrix),ee.currentProgram=Ze,ee.uniformsList=null,Ze}function id(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=cl.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function rd(A,G){const te=v.get(A);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.batchingColor=G.batchingColor,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function uv(A,G,te,ee,K){G.isScene!==!0&&(G=z),N.resetTextureUnits();const Te=G.fog,Ue=ee.isMeshStandardMaterial?G.environment:null,Re=q===null?S.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Xs,Be=(ee.isMeshStandardMaterial?ne:Y).get(ee.envMap||Ue),Ge=ee.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ze=!!te.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Xe=!!te.morphAttributes.position,ct=!!te.morphAttributes.normal,wt=!!te.morphAttributes.color;let zt=Mi;ee.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(zt=S.toneMapping);const Vt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,At=Vt!==void 0?Vt.length:0,qe=v.get(ee),bt=T.state.lights;if(Me===!0&&(at===!0||A!==J)){const xn=A===J&&ee.id===j;Ee.setState(ee,A,xn)}let gt=!1;ee.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==bt.state.version||qe.outputColorSpace!==Re||K.isBatchedMesh&&qe.batching===!1||!K.isBatchedMesh&&qe.batching===!0||K.isBatchedMesh&&qe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&qe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&qe.instancing===!1||!K.isInstancedMesh&&qe.instancing===!0||K.isSkinnedMesh&&qe.skinning===!1||!K.isSkinnedMesh&&qe.skinning===!0||K.isInstancedMesh&&qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&qe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&qe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&qe.instancingMorph===!1&&K.morphTexture!==null||qe.envMap!==Be||ee.fog===!0&&qe.fog!==Te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ee.numPlanes||qe.numIntersection!==Ee.numIntersection)||qe.vertexAlphas!==Ge||qe.vertexTangents!==Ze||qe.morphTargets!==Xe||qe.morphNormals!==ct||qe.morphColors!==wt||qe.toneMapping!==zt||qe.morphTargetsCount!==At)&&(gt=!0):(gt=!0,qe.__version=ee.version);let On=qe.currentProgram;gt===!0&&(On=ha(ee,G,K));let as=!1,Fn=!1,ao=!1;const It=On.getUniforms(),Cn=qe.uniforms;if(ie.useProgram(On.program)&&(as=!0,Fn=!0,ao=!0),ee.id!==j&&(j=ee.id,Fn=!0),as||J!==A){ie.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(E,"projectionMatrix",A.projectionMatrix),It.setValue(E,"viewMatrix",A.matrixWorldInverse);const Pn=It.map.cameraPosition;Pn!==void 0&&Pn.setValue(E,O.setFromMatrixPosition(A.matrixWorld)),Q.logarithmicDepthBuffer&&It.setValue(E,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&It.setValue(E,"isOrthographic",A.isOrthographicCamera===!0),J!==A&&(J=A,Fn=!0,ao=!0)}if(qe.needsLights&&(bt.state.directionalShadowMap.length>0&&It.setValue(E,"directionalShadowMap",bt.state.directionalShadowMap,N),bt.state.spotShadowMap.length>0&&It.setValue(E,"spotShadowMap",bt.state.spotShadowMap,N),bt.state.pointShadowMap.length>0&&It.setValue(E,"pointShadowMap",bt.state.pointShadowMap,N)),K.isSkinnedMesh){It.setOptional(E,K,"bindMatrix"),It.setOptional(E,K,"bindMatrixInverse");const xn=K.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),It.setValue(E,"boneTexture",xn.boneTexture,N))}K.isBatchedMesh&&(It.setOptional(E,K,"batchingTexture"),It.setValue(E,"batchingTexture",K._matricesTexture,N),It.setOptional(E,K,"batchingIdTexture"),It.setValue(E,"batchingIdTexture",K._indirectTexture,N),It.setOptional(E,K,"batchingColorTexture"),K._colorsTexture!==null&&It.setValue(E,"batchingColorTexture",K._colorsTexture,N));const Yn=te.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&nt.update(K,te,On),(Fn||qe.receiveShadow!==K.receiveShadow)&&(qe.receiveShadow=K.receiveShadow,It.setValue(E,"receiveShadow",K.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Cn.envMap.value=Be,Cn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&G.environment!==null&&(Cn.envMapIntensity.value=G.environmentIntensity),Cn.dfgLUT!==void 0&&(Cn.dfgLUT.value=gA()),Fn&&(It.setValue(E,"toneMappingExposure",S.toneMappingExposure),qe.needsLights&&hv(Cn,ao),Te&&ee.fog===!0&&ze.refreshFogUniforms(Cn,Te),ze.refreshMaterialUniforms(Cn,ee,Le,ke,T.state.transmissionRenderTarget[A.id]),cl.upload(E,id(qe),Cn,N)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(cl.upload(E,id(qe),Cn,N),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&It.setValue(E,"center",K.center),It.setValue(E,"modelViewMatrix",K.modelViewMatrix),It.setValue(E,"normalMatrix",K.normalMatrix),It.setValue(E,"modelMatrix",K.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const xn=ee.uniformsGroups;for(let Pn=0,nc=xn.length;Pn<nc;Pn++){const Dr=xn[Pn];de.update(Dr,On),de.bind(Dr,On)}}return On}function hv(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function fv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,G,te){const ee=v.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),v.get(A.texture).__webglTexture=G,v.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:te,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const te=v.get(A);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0};const dv=E.createFramebuffer();this.setRenderTarget=function(A,G=0,te=0){q=A,L=G,V=te;let ee=null,K=!1,Te=!1;if(A){const Re=v.get(A);if(Re.__useDefaultFramebuffer!==void 0){ie.bindFramebuffer(E.FRAMEBUFFER,Re.__webglFramebuffer),W.copy(A.viewport),k.copy(A.scissor),H=A.scissorTest,ie.viewport(W),ie.scissor(k),ie.setScissorTest(H),j=-1;return}else if(Re.__webglFramebuffer===void 0)N.setupRenderTarget(A);else if(Re.__hasExternalTextures)N.rebindTextures(A,v.get(A.texture).__webglTexture,v.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ze=A.depthTexture;if(Re.__boundDepthTexture!==Ze){if(Ze!==null&&v.has(Ze)&&(A.width!==Ze.image.width||A.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(A)}}const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Te=!0);const Ge=v.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[G])?ee=Ge[G][te]:ee=Ge[G],K=!0):A.samples>0&&N.useMultisampledRTT(A)===!1?ee=v.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?ee=Ge[te]:ee=Ge,W.copy(A.viewport),k.copy(A.scissor),H=A.scissorTest}else W.copy(se).multiplyScalar(Le).floor(),k.copy(oe).multiplyScalar(Le).floor(),H=Ce;if(te!==0&&(ee=dv),ie.bindFramebuffer(E.FRAMEBUFFER,ee)&&ie.drawBuffers(A,ee),ie.viewport(W),ie.scissor(k),ie.setScissorTest(H),K){const Re=v.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+G,Re.__webglTexture,te)}else if(Te){const Re=G;for(let Be=0;Be<A.textures.length;Be++){const Ge=v.get(A.textures[Be]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Be,Ge.__webglTexture,te,Re)}}else if(A!==null&&te!==0){const Re=v.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Re.__webglTexture,te)}j=-1},this.readRenderTargetPixels=function(A,G,te,ee,K,Te,Ue,Re=0){if(!(A&&A.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=v.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){ie.bindFramebuffer(E.FRAMEBUFFER,Be);try{const Ge=A.textures[Re],Ze=Ge.format,Xe=Ge.type;if(!Q.textureFormatReadable(Ze)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Xe)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-ee&&te>=0&&te<=A.height-K&&(A.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Re),E.readPixels(G,te,ee,K,ge.convert(Ze),ge.convert(Xe),Te))}finally{const Ge=q!==null?v.get(q).__webglFramebuffer:null;ie.bindFramebuffer(E.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(A,G,te,ee,K,Te,Ue,Re=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=v.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be)if(G>=0&&G<=A.width-ee&&te>=0&&te<=A.height-K){ie.bindFramebuffer(E.FRAMEBUFFER,Be);const Ge=A.textures[Re],Ze=Ge.format,Xe=Ge.type;if(!Q.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,ct),E.bufferData(E.PIXEL_PACK_BUFFER,Te.byteLength,E.STREAM_READ),A.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Re),E.readPixels(G,te,ee,K,ge.convert(Ze),ge.convert(Xe),0);const wt=q!==null?v.get(q).__webglFramebuffer:null;ie.bindFramebuffer(E.FRAMEBUFFER,wt);const zt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Ib(E,zt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,ct),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Te),E.deleteBuffer(ct),E.deleteSync(zt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,te=0){const ee=Math.pow(2,-te),K=Math.floor(A.image.width*ee),Te=Math.floor(A.image.height*ee),Ue=G!==null?G.x:0,Re=G!==null?G.y:0;N.setTexture2D(A,0),E.copyTexSubImage2D(E.TEXTURE_2D,te,0,0,Ue,Re,K,Te),ie.unbindTexture()};const pv=E.createFramebuffer(),mv=E.createFramebuffer();this.copyTextureToTexture=function(A,G,te=null,ee=null,K=0,Te=null){Te===null&&(K!==0?($o("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=K,K=0):Te=0);let Ue,Re,Be,Ge,Ze,Xe,ct,wt,zt;const Vt=A.isCompressedTexture?A.mipmaps[Te]:A.image;if(te!==null)Ue=te.max.x-te.min.x,Re=te.max.y-te.min.y,Be=te.isBox3?te.max.z-te.min.z:1,Ge=te.min.x,Ze=te.min.y,Xe=te.isBox3?te.min.z:0;else{const Yn=Math.pow(2,-K);Ue=Math.floor(Vt.width*Yn),Re=Math.floor(Vt.height*Yn),A.isDataArrayTexture?Be=Vt.depth:A.isData3DTexture?Be=Math.floor(Vt.depth*Yn):Be=1,Ge=0,Ze=0,Xe=0}ee!==null?(ct=ee.x,wt=ee.y,zt=ee.z):(ct=0,wt=0,zt=0);const At=ge.convert(G.format),qe=ge.convert(G.type);let bt;G.isData3DTexture?(N.setTexture3D(G,0),bt=E.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(N.setTexture2DArray(G,0),bt=E.TEXTURE_2D_ARRAY):(N.setTexture2D(G,0),bt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,G.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,G.unpackAlignment);const gt=E.getParameter(E.UNPACK_ROW_LENGTH),On=E.getParameter(E.UNPACK_IMAGE_HEIGHT),as=E.getParameter(E.UNPACK_SKIP_PIXELS),Fn=E.getParameter(E.UNPACK_SKIP_ROWS),ao=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Vt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Vt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ge),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ze),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Xe);const It=A.isDataArrayTexture||A.isData3DTexture,Cn=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const Yn=v.get(A),xn=v.get(G),Pn=v.get(Yn.__renderTarget),nc=v.get(xn.__renderTarget);ie.bindFramebuffer(E.READ_FRAMEBUFFER,Pn.__webglFramebuffer),ie.bindFramebuffer(E.DRAW_FRAMEBUFFER,nc.__webglFramebuffer);for(let Dr=0;Dr<Be;Dr++)It&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,v.get(A).__webglTexture,K,Xe+Dr),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,v.get(G).__webglTexture,Te,zt+Dr)),E.blitFramebuffer(Ge,Ze,Ue,Re,ct,wt,Ue,Re,E.DEPTH_BUFFER_BIT,E.NEAREST);ie.bindFramebuffer(E.READ_FRAMEBUFFER,null),ie.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||v.has(A)){const Yn=v.get(A),xn=v.get(G);ie.bindFramebuffer(E.READ_FRAMEBUFFER,pv),ie.bindFramebuffer(E.DRAW_FRAMEBUFFER,mv);for(let Pn=0;Pn<Be;Pn++)It?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Yn.__webglTexture,K,Xe+Pn):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Yn.__webglTexture,K),Cn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,xn.__webglTexture,Te,zt+Pn):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,xn.__webglTexture,Te),K!==0?E.blitFramebuffer(Ge,Ze,Ue,Re,ct,wt,Ue,Re,E.COLOR_BUFFER_BIT,E.NEAREST):Cn?E.copyTexSubImage3D(bt,Te,ct,wt,zt+Pn,Ge,Ze,Ue,Re):E.copyTexSubImage2D(bt,Te,ct,wt,Ge,Ze,Ue,Re);ie.bindFramebuffer(E.READ_FRAMEBUFFER,null),ie.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Cn?A.isDataTexture||A.isData3DTexture?E.texSubImage3D(bt,Te,ct,wt,zt,Ue,Re,Be,At,qe,Vt.data):G.isCompressedArrayTexture?E.compressedTexSubImage3D(bt,Te,ct,wt,zt,Ue,Re,Be,At,Vt.data):E.texSubImage3D(bt,Te,ct,wt,zt,Ue,Re,Be,At,qe,Vt):A.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Te,ct,wt,Ue,Re,At,qe,Vt.data):A.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Te,ct,wt,Vt.width,Vt.height,At,Vt.data):E.texSubImage2D(E.TEXTURE_2D,Te,ct,wt,Ue,Re,At,qe,Vt);E.pixelStorei(E.UNPACK_ROW_LENGTH,gt),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,On),E.pixelStorei(E.UNPACK_SKIP_PIXELS,as),E.pixelStorei(E.UNPACK_SKIP_ROWS,Fn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ao),Te===0&&G.generateMipmaps&&E.generateMipmap(bt),ie.unbindTexture()},this.initRenderTarget=function(A){v.get(A).__webglFramebuffer===void 0&&N.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?N.setTextureCube(A,0):A.isData3DTexture?N.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?N.setTexture2DArray(A,0):N.setTexture2D(A,0),ie.unbindTexture()},this.resetState=function(){L=0,V=0,q=null,ie.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=mt._getUnpackColorSpace()}}const tm={type:"change"},_f={type:"start"},v_={type:"end"},Xa=new oa,nm=new Gi,vA=Math.cos(70*Tl.DEG2RAD),Zt=new P,Rn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jc=1e-6;class xA extends f_{constructor(e,n=null){super(e,n),this.state=Et.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qr.ROTATE,MIDDLE:Qr.DOLLY,RIGHT:Qr.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new an,this._lastTargetPosition=new P,this._quat=new an().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Tp,this._sphericalDelta=new Tp,this._scale=1,this._panOffset=new P,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new P,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bA.bind(this),this._onPointerDown=yA.bind(this),this._onPointerUp=SA.bind(this),this._onContextMenu=PA.bind(this),this._onMouseWheel=EA.bind(this),this._onKeyDown=TA.bind(this),this._onTouchStart=AA.bind(this),this._onTouchMove=CA.bind(this),this._onMouseDown=MA.bind(this),this._onMouseMove=wA.bind(this),this._interceptControlDown=RA.bind(this),this._interceptControlUp=DA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tm),this.update(),this.state=Et.NONE}update(e=null){const n=this.object.position;Zt.copy(n).sub(this.target),Zt.applyQuaternion(this._quat),this._spherical.setFromVector3(Zt),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Rn:i>Math.PI&&(i-=Rn),r<-Math.PI?r+=Rn:r>Math.PI&&(r-=Rn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Zt.setFromSpherical(this._spherical),Zt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Zt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Xa.origin.copy(this.object.position),Xa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xa.direction))<vA?this.object.lookAt(this.target):(nm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xa.intersectPlane(nm,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Jc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jc||this._lastTargetPosition.distanceToSquared(this.target)>Jc?(this.dispatchEvent(tm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Rn/60*this.autoRotateSpeed*e:Rn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Zt.setFromMatrixColumn(n,0),Zt.multiplyScalar(-e),this._panOffset.add(Zt)}_panUp(e,n){this.screenSpacePanning===!0?Zt.setFromMatrixColumn(n,1):(Zt.setFromMatrixColumn(n,0),Zt.crossVectors(this.object.up,Zt)),Zt.multiplyScalar(e),this._panOffset.add(Zt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Zt.copy(r).sub(this.target);let s=Zt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new me,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function yA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function bA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function SA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(v_),this.state=Et.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function MA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Et.DOLLY;break;case Qr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Et.ROTATE}break;case Qr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(_f)}function wA(t){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function EA(t){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(t.preventDefault(),this.dispatchEvent(_f),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(v_))}function TA(t){this.enabled!==!1&&this._handleKeyDown(t)}function AA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Cs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Et.TOUCH_ROTATE;break;case Cs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case Cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Et.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(_f)}function CA(t){switch(this._trackPointer(t),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Et.NONE}}function PA(t){this.enabled!==!1&&t.preventDefault()}function RA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function DA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const zr=new u_,dn=new P,cr=new P,Ot=new an,im={X:new P(1,0,0),Y:new P(0,1,0),Z:new P(0,0,1)},$c={type:"change"},rm={type:"mouseDown",mode:null},sm={type:"mouseUp",mode:null},om={type:"objectChange"};class IA extends f_{constructor(e,n=null){super(void 0,n);const i=new kA(this);this._root=i;const r=new BA;this._gizmo=r,i.add(r);const s=new zA;this._plane=s,i.add(s);const o=this;function a(y,b){let T=b;Object.defineProperty(o,y,{get:function(){return T!==void 0?T:b},set:function(C){T!==C&&(T=C,s[y]=C,r[y]=C,o.dispatchEvent({type:y+"-changed",value:C}),o.dispatchEvent($c))}}),o[y]=b,s[y]=b,r[y]=b}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const l=new P,c=new P,u=new an,h=new an,d=new P,p=new an,g=new P,_=new P,m=new P,f=0,x=new P;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",u),a("worldQuaternionStart",h),a("cameraPosition",d),a("cameraQuaternion",p),a("pointStart",g),a("pointEnd",_),a("rotationAxis",m),a("rotationAngle",f),a("eye",x),this._offset=new P,this._startNorm=new P,this._endNorm=new P,this._cameraScale=new P,this._parentPosition=new P,this._parentQuaternion=new an,this._parentQuaternionInv=new an,this._parentScale=new P,this._worldScaleStart=new P,this._worldQuaternionInv=new an,this._worldScale=new P,this._positionStart=new P,this._quaternionStart=new an,this._scaleStart=new P,this._getPointer=LA.bind(this),this._onPointerDown=UA.bind(this),this._onPointerHover=NA.bind(this),this._onPointerMove=OA.bind(this),this._onPointerUp=FA.bind(this),n!==null&&this.connect(n)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&zr.setFromCamera(e,this.camera);const n=Kc(this._gizmo.picker[this.mode],zr);n?this.axis=n.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&zr.setFromCamera(e,this.camera);const n=Kc(this._plane,zr,!0);n&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(n.point).sub(this.worldPositionStart)),this.dragging=!0,rm.mode=this.mode,this.dispatchEvent(rm)}}pointerMove(e){const n=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(n==="E"||n==="XYZE"||n==="XYZ")&&(s="world"),r===void 0||n===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&zr.setFromCamera(e,this.camera);const o=Kc(this._plane,zr,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&n!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),n.indexOf("X")===-1&&(this._offset.x=0),n.indexOf("Y")===-1&&(this._offset.y=0),n.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&n!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(Ot.copy(this._quaternionStart).invert()),n.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(dn.setFromMatrixPosition(r.parent.matrixWorld)),n.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(dn.setFromMatrixPosition(r.parent.matrixWorld)))),r.position.x=Math.max(this.minX,Math.min(this.maxX,r.position.x)),r.position.y=Math.max(this.minY,Math.min(this.maxY,r.position.y)),r.position.z=Math.max(this.minZ,Math.min(this.maxZ,r.position.z));else if(i==="scale"){if(n.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),cr.set(a,a,a)}else dn.copy(this.pointStart),cr.copy(this.pointEnd),dn.applyQuaternion(this._worldQuaternionInv),cr.applyQuaternion(this._worldQuaternionInv),cr.divide(dn),n.search("X")===-1&&(cr.x=1),n.search("Y")===-1&&(cr.y=1),n.search("Z")===-1&&(cr.z=1);r.scale.copy(this._scaleStart).multiply(cr),this.scaleSnap&&(n.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(dn.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;n==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(dn.copy(this.rotationAxis).cross(this.eye))*a):(n==="X"||n==="Y"||n==="Z")&&(this.rotationAxis.copy(im[n]),dn.copy(im[n]),s==="local"&&dn.applyQuaternion(this.worldQuaternion),dn.cross(this.eye),dn.length()===0?l=!0:this.rotationAngle=this._offset.dot(dn.normalize())*a),(n==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&n!=="E"&&n!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(Ot.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(Ot.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent($c),this.dispatchEvent(om)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(sm.mode=this.mode,this.dispatchEvent(sm)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent($c),this.dispatchEvent(om),this.pointStart.copy(this.pointEnd))}getRaycaster(){return zr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,n,i,r){const s=this._gizmo.materialLib;s.xAxis.color.set(e),s.yAxis.color.set(n),s.zAxis.color.set(i),s.active.color.set(r),s.xAxisTransparent.color.set(e),s.yAxisTransparent.color.set(n),s.zAxisTransparent.color.set(i),s.activeTransparent.color.set(r),s.xAxis._color&&s.xAxis._color.set(e),s.yAxis._color&&s.yAxis._color.set(n),s.zAxis._color&&s.zAxis._color.set(i),s.active._color&&s.active._color.set(r),s.xAxisTransparent._color&&s.xAxisTransparent._color.set(e),s.yAxisTransparent._color&&s.yAxisTransparent._color.set(n),s.zAxisTransparent._color&&s.zAxisTransparent._color.set(i),s.activeTransparent._color&&s.activeTransparent._color.set(r)}}function LA(t){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:t.button};{const e=this.domElement.getBoundingClientRect();return{x:(t.clientX-e.left)/e.width*2-1,y:-(t.clientY-e.top)/e.height*2+1,button:t.button}}}function NA(t){if(this.enabled)switch(t.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(t));break}}function UA(t){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(t)),this.pointerDown(this._getPointer(t)))}function OA(t){this.enabled&&this.pointerMove(this._getPointer(t))}function FA(t){this.enabled&&(this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(t)))}function Kc(t,e,n){const i=e.intersectObject(t,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||n)return i[r];return!1}const qa=new ai,Ct=new P(0,1,0),am=new P(0,0,0),lm=new ht,Ya=new an,ul=new an,pi=new P,cm=new ht,To=new P(1,0,0),Gr=new P(0,1,0),Ao=new P(0,0,1),Ja=new P,xo=new P,yo=new P;class kA extends Tt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const n=this.controls;n.object!==void 0&&(n.object.updateMatrixWorld(),n.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):n.object.parent.matrixWorld.decompose(n._parentPosition,n._parentQuaternion,n._parentScale),n.object.matrixWorld.decompose(n.worldPosition,n.worldQuaternion,n._worldScale),n._parentQuaternionInv.copy(n._parentQuaternion).invert(),n._worldQuaternionInv.copy(n.worldQuaternion).invert()),n.camera.updateMatrixWorld(),n.camera.matrixWorld.decompose(n.cameraPosition,n.cameraQuaternion,n._cameraScale),n.camera.isOrthographicCamera?n.camera.getWorldDirection(n.eye).negate():n.eye.copy(n.cameraPosition).sub(n.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class BA extends Tt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new Cr({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=new ci({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=n.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const h=e.clone();h.opacity=.25;const d=e.clone();d.color.setHex(16776960),d.opacity=.25;const p=e.clone();p.color.setHex(16776960);const g=e.clone();g.color.setHex(7895160),this.materialLib={xAxis:s,yAxis:o,zAxis:a,active:p,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:u,activeTransparent:d};const _=new rn(0,.04,.1,12);_.translate(0,.05,0);const m=new Ht(.08,.08,.08);m.translate(0,.04,0);const f=new ft;f.setAttribute("position",new tt([0,0,0,1,0,0],3));const x=new rn(.0075,.0075,.5,3);x.translate(0,.25,0);function y(J,W){const k=new mr(J,.0075,3,64,W*Math.PI*2);return k.rotateY(Math.PI/2),k.rotateX(Math.PI/2),k}function b(){const J=new ft;return J.setAttribute("position",new tt([0,0,0,1,1,1],3)),J}const T={X:[[new _e(_,s),[.5,0,0],[0,0,-Math.PI/2]],[new _e(_,s),[-.5,0,0],[0,0,Math.PI/2]],[new _e(x,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new _e(_,o),[0,.5,0]],[new _e(_,o),[0,-.5,0],[Math.PI,0,0]],[new _e(x,o)]],Z:[[new _e(_,a),[0,0,.5],[Math.PI/2,0,0]],[new _e(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new _e(x,a),null,[Math.PI/2,0,0]]],XYZ:[[new _e(new Ps(.1,0),h),[0,0,0]]],XY:[[new _e(new Ht(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new _e(new Ht(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _e(new Ht(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},C={X:[[new _e(new rn(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new _e(new rn(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new _e(new rn(.2,0,.6,4),i),[0,.3,0]],[new _e(new rn(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new _e(new rn(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new _e(new rn(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new _e(new Ps(.2,0),i)]],XY:[[new _e(new Ht(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new _e(new Ht(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _e(new Ht(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},D={START:[[new _e(new Ps(.01,2),r),null,null,null,"helper"]],END:[[new _e(new Ps(.01,2),r),null,null,null,"helper"]],DELTA:[[new on(b(),r),null,null,null,"helper"]],X:[[new on(f,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new on(f,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new on(f,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},R={XYZE:[[new _e(y(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new _e(y(.5,.5),s)]],Y:[[new _e(y(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new _e(y(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new _e(y(.75,1),d),null,[0,Math.PI/2,0]]]},S={AXIS:[[new on(f,r),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new _e(new la(.25,10,8),i)]],X:[[new _e(new mr(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new _e(new mr(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new _e(new mr(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new _e(new mr(.75,.1,2,24),i)]]},L={X:[[new _e(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new _e(x,s),[0,0,0],[0,0,-Math.PI/2]],[new _e(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new _e(m,o),[0,.5,0]],[new _e(x,o)],[new _e(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new _e(m,a),[0,0,.5],[Math.PI/2,0,0]],[new _e(x,a),[0,0,0],[Math.PI/2,0,0]],[new _e(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new _e(new Ht(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new _e(new Ht(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _e(new Ht(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new _e(new Ht(.1,.1,.1),h)]]},V={X:[[new _e(new rn(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new _e(new rn(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new _e(new rn(.2,0,.6,4),i),[0,.3,0]],[new _e(new rn(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new _e(new rn(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new _e(new rn(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new _e(new Ht(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new _e(new Ht(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _e(new Ht(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new _e(new Ht(.2,.2,.2),i),[0,0,0]]]},q={X:[[new on(f,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new on(f,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new on(f,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function j(J){const W=new Tt;for(const k in J)for(let H=J[k].length;H--;){const ce=J[k][H][0].clone(),pe=J[k][H][1],fe=J[k][H][2],ke=J[k][H][3],Le=J[k][H][4];ce.name=k,ce.tag=Le,pe&&ce.position.set(pe[0],pe[1],pe[2]),fe&&ce.rotation.set(fe[0],fe[1],fe[2]),ke&&ce.scale.set(ke[0],ke[1],ke[2]),ce.updateMatrix();const Qe=ce.geometry.clone();Qe.applyMatrix4(ce.matrix),ce.geometry=Qe,ce.renderOrder=1/0,ce.position.set(0,0,0),ce.rotation.set(0,0,0),ce.scale.set(1,1,1),W.add(ce)}return W}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=j(T)),this.add(this.gizmo.rotate=j(R)),this.add(this.gizmo.scale=j(L)),this.add(this.picker.translate=j(C)),this.add(this.picker.rotate=j(M)),this.add(this.picker.scale=j(V)),this.add(this.helper.translate=j(D)),this.add(this.helper.rotate=j(S)),this.add(this.helper.scale=j(q)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:ul;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Ot.setFromEuler(qa.set(0,0,0)),o.quaternion.copy(i).multiply(Ot),Math.abs(Ct.copy(To).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Ot.setFromEuler(qa.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(Ot),Math.abs(Ct.copy(Gr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Ot.setFromEuler(qa.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(Ot),Math.abs(Ct.copy(Ao).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Ot.setFromEuler(qa.set(0,Math.PI/2,0)),Ct.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(lm.lookAt(am,Ct,Gr)),o.quaternion.multiply(Ot),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),dn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),dn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(dn),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Ct.copy(To).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Ct.copy(Gr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Ct.copy(Ao).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Ct.copy(Ao).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Ct.copy(To).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Ct.copy(Gr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Ya.copy(i),Ct.copy(this.eye).applyQuaternion(Ot.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(lm.lookAt(this.eye,am,Gr)),o.name==="X"&&(Ot.setFromAxisAngle(To,Math.atan2(-Ct.y,Ct.z)),Ot.multiplyQuaternions(Ya,Ot),o.quaternion.copy(Ot)),o.name==="Y"&&(Ot.setFromAxisAngle(Gr,Math.atan2(Ct.x,Ct.z)),Ot.multiplyQuaternions(Ya,Ot),o.quaternion.copy(Ot)),o.name==="Z"&&(Ot.setFromAxisAngle(Ao,Math.atan2(Ct.y,Ct.x)),Ot.multiplyQuaternions(Ya,Ot),o.quaternion.copy(Ot))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}}class zA extends _e{constructor(){super(new aa(1e5,1e5,2,2),new Cr({visible:!1,wireframe:!0,side:wn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let n=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(n="local"),Ja.copy(To).applyQuaternion(n==="local"?this.worldQuaternion:ul),xo.copy(Gr).applyQuaternion(n==="local"?this.worldQuaternion:ul),yo.copy(Ao).applyQuaternion(n==="local"?this.worldQuaternion:ul),Ct.copy(xo),this.mode){case"translate":case"scale":switch(this.axis){case"X":Ct.copy(this.eye).cross(Ja),pi.copy(Ja).cross(Ct);break;case"Y":Ct.copy(this.eye).cross(xo),pi.copy(xo).cross(Ct);break;case"Z":Ct.copy(this.eye).cross(yo),pi.copy(yo).cross(Ct);break;case"XY":pi.copy(yo);break;case"YZ":pi.copy(Ja);break;case"XZ":Ct.copy(yo),pi.copy(xo);break;case"XYZ":case"E":pi.set(0,0,0);break}break;default:pi.set(0,0,0)}pi.length()===0?this.quaternion.copy(this.cameraQuaternion):(cm.lookAt(dn.set(0,0,0),pi,Ct),this.quaternion.setFromRotationMatrix(cm)),super.updateMatrixWorld(e)}}const tr={},$s={};function um(t){let e;switch(t.type.value){case"standard_material":e=VA(t);break;case"line_material":e=HA(t);break;case"point_material":e=GA(t);break;case"physical_material":e=WA(t);break}$s[t.guid.value]=e,tr[t.geometry_guid.value]=t.guid.value,YA(t.geometry_guid.value,e)}function VA(t){let e=t.color.value;e=e.replace("#","0x");let n=t.emissive.value;return n=n.replace("#","0x"),new to({color:parseInt(e),metalness:t.metalness.value,roughness:t.roughness.value,emissive:parseInt(n),emissiveIntensity:t.emissive_intensity.value,flatShading:t.flat_shading.value,wireframe:t.wireframe.value,side:wn})}function HA(t){let e=t.color.value;return e=e.replace("#","0x"),new ci({color:parseInt(e)})}function GA(t){let e=t.color.value;return e=e.replace("#","0x"),new sf({color:parseInt(e),size:t.size.value})}function WA(t){let e=t.color.value;e=e.replace("#","0x");let n=t.emissive.value;n=n.replace("#","0x");let i=t.attenuation_color.value;i=i.replace("#","0x");let r=t.sheen_color.value;r=r.replace("#","0x");let s=t.specular_color.value;return s=s.replace("#","0x"),new iM({color:parseInt(e),metalness:t.metalness.value,roughness:t.roughness.value,emissive:parseInt(n),emissiveIntensity:t.emissive_intensity.value,flatShading:t.flat_shading.value,wireframe:t.wireframe.value,side:wn,anisotropy:t.anisotropy.value,anisotropyRotation:t.anisotropy_rotation.value,attenuationColor:parseInt(i),attenuationDistance:t.attenuation_distance.value,clearcoat:t.clearcoat.value,clearcoatRoughness:t.clearcoat_roughness.value,dispersion:t.dispersion.value,ior:t.ior.value,iridescence:t.iridescence.value,iridescenceIOR:t.iridescence_ior.value,iridescenceThicknessRange:[t.iridescence_thickness_start.value,t.iridescence_thickness_end.value],reflectivity:t.reflectivity.value,sheen:t.sheen.value,sheenColor:parseInt(r),specularColor:parseInt(s),sheenRoughness:t.sheen_roughness.value,specularIntensity:t.specular_intensity.value,thickness:t.thickness.value,transmission:t.transmission.value})}const Wn={},XA=["Line","Point","Vector","Frame","Plane","Polyline"];function x_(t){console.log(t.name),XA.includes(t.name)&&qA(t);const e=t.guid,n=Wn[e],i=t.buildGeometry();if(!i||!(i instanceof _e))return;const r=i.geometry;if(r.computeBoundingSphere(),r.computeBoundingBox(),n instanceof _e){const s=n.geometry;n.geometry=r,n.position.copy(i.position),n.quaternion.copy(i.quaternion),n.scale.copy(i.scale),s&&s.dispose()}else{if(tr[e]){const s=tr[e];$s[s]&&(i.material=$s[s])}else i.material=new to({color:35071,roughness:.5,metalness:.5});Rt.add(i),Wn[e]=i}}function qA(t){const e=t.buildGeometry(),n=t.guid;let i;if(tr[n]){const r=tr[n];$s[r]&&(i=$s[r])}else return;e instanceof on||e instanceof of?e.material=i:(e instanceof gf||e instanceof void 0)&&e.setColor(i.color),Rt.add(e),Wn[n]=e}function YA(t,e){const n=Wn[t];if(n){if(n){n.material=e;return}(n instanceof gf||n instanceof void 0)&&n.setColor(e.color)}}function JA(){let t=0,e=0;for(let i=0;i<28;i+=7){let r=this.buf[this.pos++];if(t|=(r&127)<<i,(r&128)==0)return this.assertBounds(),[t,e]}let n=this.buf[this.pos++];if(t|=(n&15)<<28,e=(n&112)>>4,(n&128)==0)return this.assertBounds(),[t,e];for(let i=3;i<=31;i+=7){let r=this.buf[this.pos++];if(e|=(r&127)<<i,(r&128)==0)return this.assertBounds(),[t,e]}throw new Error("invalid varint")}function Zc(t,e,n){for(let s=0;s<28;s=s+7){const o=t>>>s,a=!(!(o>>>7)&&e==0),l=(a?o|128:o)&255;if(n.push(l),!a)return}const i=t>>>28&15|(e&7)<<4,r=e>>3!=0;if(n.push((r?i|128:i)&255),!!r){for(let s=3;s<31;s=s+7){const o=e>>>s,a=!!(o>>>7),l=(a?o|128:o)&255;if(n.push(l),!a)return}n.push(e>>>31&1)}}const hl=4294967296;function hm(t){const e=t[0]==="-";e&&(t=t.slice(1));const n=1e6;let i=0,r=0;function s(o,a){const l=Number(t.slice(o,a));r*=n,i=i*n+l,i>=hl&&(r=r+(i/hl|0),i=i%hl)}return s(-24,-18),s(-18,-12),s(-12,-6),s(-6),e?b_(i,r):vf(i,r)}function $A(t,e){let n=vf(t,e);const i=n.hi&2147483648;i&&(n=b_(n.lo,n.hi));const r=y_(n.lo,n.hi);return i?"-"+r:r}function y_(t,e){if({lo:t,hi:e}=KA(t,e),e<=2097151)return String(hl*e+t);const n=t&16777215,i=(t>>>24|e<<8)&16777215,r=e>>16&65535;let s=n+i*6777216+r*6710656,o=i+r*8147497,a=r*2;const l=1e7;return s>=l&&(o+=Math.floor(s/l),s%=l),o>=l&&(a+=Math.floor(o/l),o%=l),a.toString()+fm(o)+fm(s)}function KA(t,e){return{lo:t>>>0,hi:e>>>0}}function vf(t,e){return{lo:t|0,hi:e|0}}function b_(t,e){return e=~e,t?t=~t+1:e+=1,vf(t,e)}const fm=t=>{const e=String(t);return"0000000".slice(e.length)+e};function dm(t,e){if(t>=0){for(;t>127;)e.push(t&127|128),t=t>>>7;e.push(t)}else{for(let n=0;n<9;n++)e.push(t&127|128),t=t>>7;e.push(1)}}function ZA(){let t=this.buf[this.pos++],e=t&127;if((t&128)==0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<7,(t&128)==0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<14,(t&128)==0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<21,(t&128)==0)return this.assertBounds(),e;t=this.buf[this.pos++],e|=(t&15)<<28;for(let n=5;(t&128)!==0&&n<10;n++)t=this.buf[this.pos++];if((t&128)!=0)throw new Error("invalid varint");return this.assertBounds(),e>>>0}var pm={};const xi=QA();function QA(){const t=new DataView(new ArrayBuffer(8));if(typeof BigInt=="function"&&typeof t.getBigInt64=="function"&&typeof t.getBigUint64=="function"&&typeof t.setBigInt64=="function"&&typeof t.setBigUint64=="function"&&(!!globalThis.Deno||typeof process!="object"||typeof pm!="object"||pm.BUF_BIGINT_DISABLE!=="1")){const n=BigInt("-9223372036854775808"),i=BigInt("9223372036854775807"),r=BigInt("0"),s=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(o){const a=typeof o=="bigint"?o:BigInt(o);if(a>i||a<n)throw new Error(`invalid int64: ${o}`);return a},uParse(o){const a=typeof o=="bigint"?o:BigInt(o);if(a>s||a<r)throw new Error(`invalid uint64: ${o}`);return a},enc(o){return t.setBigInt64(0,this.parse(o),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},uEnc(o){return t.setBigInt64(0,this.uParse(o),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},dec(o,a){return t.setInt32(0,o,!0),t.setInt32(4,a,!0),t.getBigInt64(0,!0)},uDec(o,a){return t.setInt32(0,o,!0),t.setInt32(4,a,!0),t.getBigUint64(0,!0)}}}return{zero:"0",supported:!1,parse(n){return typeof n!="string"&&(n=n.toString()),mm(n),n},uParse(n){return typeof n!="string"&&(n=n.toString()),gm(n),n},enc(n){return typeof n!="string"&&(n=n.toString()),mm(n),hm(n)},uEnc(n){return typeof n!="string"&&(n=n.toString()),gm(n),hm(n)},dec(n,i){return $A(n,i)},uDec(n,i){return y_(n,i)}}}function mm(t){if(!/^-?[0-9]+$/.test(t))throw new Error("invalid int64: "+t)}function gm(t){if(!/^[0-9]+$/.test(t))throw new Error("invalid uint64: "+t)}const Qc=Symbol.for("@bufbuild/protobuf/text-encoding");function S_(){if(globalThis[Qc]==null){const t=new globalThis.TextEncoder,e=new globalThis.TextDecoder;globalThis[Qc]={encodeUtf8(n){return t.encode(n)},decodeUtf8(n){return e.decode(n)},checkUtf8(n){try{return encodeURIComponent(n),!0}catch{return!1}}}}return globalThis[Qc]}var dr;(function(t){t[t.Varint=0]="Varint",t[t.Bit64=1]="Bit64",t[t.LengthDelimited=2]="LengthDelimited",t[t.StartGroup=3]="StartGroup",t[t.EndGroup=4]="EndGroup",t[t.Bit32=5]="Bit32"})(dr||(dr={}));const jA=34028234663852886e22,eC=-34028234663852886e22,tC=4294967295,nC=2147483647,iC=-2147483648;class it{constructor(e=S_().encodeUtf8){this.encodeUtf8=e,this.stack=[],this.chunks=[],this.buf=[]}finish(){this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]);let e=0;for(let r=0;r<this.chunks.length;r++)e+=this.chunks[r].length;let n=new Uint8Array(e),i=0;for(let r=0;r<this.chunks.length;r++)n.set(this.chunks[r],i),i+=this.chunks[r].length;return this.chunks=[],n}fork(){return this.stack.push({chunks:this.chunks,buf:this.buf}),this.chunks=[],this.buf=[],this}join(){let e=this.finish(),n=this.stack.pop();if(!n)throw new Error("invalid state, fork stack empty");return this.chunks=n.chunks,this.buf=n.buf,this.uint32(e.byteLength),this.raw(e)}tag(e,n){return this.uint32((e<<3|n)>>>0)}raw(e){return this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]),this.chunks.push(e),this}uint32(e){for(_m(e);e>127;)this.buf.push(e&127|128),e=e>>>7;return this.buf.push(e),this}int32(e){return jc(e),dm(e,this.buf),this}bool(e){return this.buf.push(e?1:0),this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){let n=this.encodeUtf8(e);return this.uint32(n.byteLength),this.raw(n)}float(e){rC(e);let n=new Uint8Array(4);return new DataView(n.buffer).setFloat32(0,e,!0),this.raw(n)}double(e){let n=new Uint8Array(8);return new DataView(n.buffer).setFloat64(0,e,!0),this.raw(n)}fixed32(e){_m(e);let n=new Uint8Array(4);return new DataView(n.buffer).setUint32(0,e,!0),this.raw(n)}sfixed32(e){jc(e);let n=new Uint8Array(4);return new DataView(n.buffer).setInt32(0,e,!0),this.raw(n)}sint32(e){return jc(e),e=(e<<1^e>>31)>>>0,dm(e,this.buf),this}sfixed64(e){let n=new Uint8Array(8),i=new DataView(n.buffer),r=xi.enc(e);return i.setInt32(0,r.lo,!0),i.setInt32(4,r.hi,!0),this.raw(n)}fixed64(e){let n=new Uint8Array(8),i=new DataView(n.buffer),r=xi.uEnc(e);return i.setInt32(0,r.lo,!0),i.setInt32(4,r.hi,!0),this.raw(n)}int64(e){let n=xi.enc(e);return Zc(n.lo,n.hi,this.buf),this}sint64(e){const n=xi.enc(e),i=n.hi>>31,r=n.lo<<1^i,s=(n.hi<<1|n.lo>>>31)^i;return Zc(r,s,this.buf),this}uint64(e){const n=xi.uEnc(e);return Zc(n.lo,n.hi,this.buf),this}}class xe{constructor(e,n=S_().decodeUtf8){this.decodeUtf8=n,this.varint64=JA,this.uint32=ZA,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength)}tag(){let e=this.uint32(),n=e>>>3,i=e&7;if(n<=0||i<0||i>5)throw new Error("illegal tag: field no "+n+" wire type "+i);return[n,i]}skip(e,n){let i=this.pos;switch(e){case dr.Varint:for(;this.buf[this.pos++]&128;);break;case dr.Bit64:this.pos+=4;case dr.Bit32:this.pos+=4;break;case dr.LengthDelimited:let r=this.uint32();this.pos+=r;break;case dr.StartGroup:for(;;){const[s,o]=this.tag();if(o===dr.EndGroup){if(n!==void 0&&s!==n)throw new Error("invalid end group tag");break}this.skip(o,s)}break;default:throw new Error("cant skip wire type "+e)}return this.assertBounds(),this.buf.subarray(i,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let e=this.uint32();return e>>>1^-(e&1)}int64(){return xi.dec(...this.varint64())}uint64(){return xi.uDec(...this.varint64())}sint64(){let[e,n]=this.varint64(),i=-(e&1);return e=(e>>>1|(n&1)<<31)^i,n=n>>>1^i,xi.dec(e,n)}bool(){let[e,n]=this.varint64();return e!==0||n!==0}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return xi.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return xi.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let e=this.uint32(),n=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(n,n+e)}string(){return this.decodeUtf8(this.bytes())}}function jc(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid int32: "+typeof t);if(!Number.isInteger(t)||t>nC||t<iC)throw new Error("invalid int32: "+t)}function _m(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid uint32: "+typeof t);if(!Number.isInteger(t)||t>tC||t<0)throw new Error("invalid uint32: "+t)}function rC(t){if(typeof t=="string"){const e=t;if(t=Number(t),Number.isNaN(t)&&e!=="NaN")throw new Error("invalid float32: "+e)}else if(typeof t!="number")throw new Error("invalid float32: "+typeof t);if(Number.isFinite(t)&&(t>jA||t<eC))throw new Error("invalid float32: "+t)}function vm(){return{typeUrl:"",value:new Uint8Array(0)}}const Ts={encode(t,e=new it){return t.typeUrl!==""&&e.uint32(10).string(t.typeUrl),t.value.length!==0&&e.uint32(18).bytes(t.value),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=vm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.typeUrl=n.string();continue}case 2:{if(s!==18)break;r.value=n.bytes();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{typeUrl:eu(t.typeUrl)?globalThis.String(t.typeUrl):eu(t.type_url)?globalThis.String(t.type_url):"",value:eu(t.value)?sC(t.value):new Uint8Array(0)}},toJSON(t){const e={};return t.typeUrl!==""&&(e.typeUrl=t.typeUrl),t.value.length!==0&&(e.value=oC(t.value)),e},create(t){return Ts.fromPartial(t??{})},fromPartial(t){const e=vm();return e.typeUrl=t.typeUrl??"",e.value=t.value??new Uint8Array(0),e}};function sC(t){if(globalThis.Buffer)return Uint8Array.from(globalThis.Buffer.from(t,"base64"));{const e=globalThis.atob(t),n=new Uint8Array(e.length);for(let i=0;i<e.length;++i)n[i]=e.charCodeAt(i);return n}}function oC(t){if(globalThis.Buffer)return globalThis.Buffer.from(t).toString("base64");{const e=[];return t.forEach(n=>{e.push(globalThis.String.fromCharCode(n))}),globalThis.btoa(e.join(""))}}function eu(t){return t!=null}function xm(t){switch(t){case 0:case"NULL_VALUE":return 0;default:return-1}}function aC(t){return t===0?"NULL_VALUE":"UNRECOGNIZED"}function tu(){return{fields:{}}}const Co={encode(t,e=new it){return globalThis.Object.entries(t.fields).forEach(([n,i])=>{i!==void 0&&gh.encode({key:n,value:i},e.uint32(10).fork()).join()}),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=tu();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;const o=gh.decode(n,n.uint32());o.value!==void 0&&(r.fields[o.key]=o.value);continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{fields:_h(t.fields)?globalThis.Object.entries(t.fields).reduce((e,[n,i])=>(e[n]=i,e),{}):{}}},toJSON(t){const e={};if(t.fields){const n=globalThis.Object.entries(t.fields);n.length>0&&(e.fields={},n.forEach(([i,r])=>{e.fields[i]=r}))}return e},create(t){return Co.fromPartial(t??{})},fromPartial(t){const e=tu();return e.fields=globalThis.Object.entries(t.fields??{}).reduce((n,[i,r])=>(r!==void 0&&(n[i]=r),n),{}),e},wrap(t){const e=tu();if(t!==void 0)for(const n of globalThis.Object.keys(t))e.fields[n]=t[n];return e},unwrap(t){const e={};if(t.fields)for(const n of globalThis.Object.keys(t.fields))e[n]=t.fields[n];return e}};function ym(){return{key:"",value:void 0}}const gh={encode(t,e=new it){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&Xn.encode(Xn.wrap(t.value),e.uint32(18).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=ym();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.key=n.string();continue}case 2:{if(s!==18)break;r.value=Xn.unwrap(Xn.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{key:gi(t.key)?globalThis.String(t.key):"",value:gi(t?.value)?t.value:void 0}},toJSON(t){const e={};return t.key!==""&&(e.key=t.key),t.value!==void 0&&(e.value=t.value),e},create(t){return gh.fromPartial(t??{})},fromPartial(t){const e=ym();return e.key=t.key??"",e.value=t.value??void 0,e}};function nu(){return{nullValue:void 0,numberValue:void 0,stringValue:void 0,boolValue:void 0,structValue:void 0,listValue:void 0}}const Xn={encode(t,e=new it){return t.nullValue!==void 0&&e.uint32(8).int32(t.nullValue),t.numberValue!==void 0&&e.uint32(17).double(t.numberValue),t.stringValue!==void 0&&e.uint32(26).string(t.stringValue),t.boolValue!==void 0&&e.uint32(32).bool(t.boolValue),t.structValue!==void 0&&Co.encode(Co.wrap(t.structValue),e.uint32(42).fork()).join(),t.listValue!==void 0&&Po.encode(Po.wrap(t.listValue),e.uint32(50).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=nu();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==8)break;r.nullValue=n.int32();continue}case 2:{if(s!==17)break;r.numberValue=n.double();continue}case 3:{if(s!==26)break;r.stringValue=n.string();continue}case 4:{if(s!==32)break;r.boolValue=n.bool();continue}case 5:{if(s!==42)break;r.structValue=Co.unwrap(Co.decode(n,n.uint32()));continue}case 6:{if(s!==50)break;r.listValue=Po.unwrap(Po.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{nullValue:gi(t.nullValue)?xm(t.nullValue):gi(t.null_value)?xm(t.null_value):void 0,numberValue:gi(t.numberValue)?globalThis.Number(t.numberValue):gi(t.number_value)?globalThis.Number(t.number_value):void 0,stringValue:gi(t.stringValue)?globalThis.String(t.stringValue):gi(t.string_value)?globalThis.String(t.string_value):void 0,boolValue:gi(t.boolValue)?globalThis.Boolean(t.boolValue):gi(t.bool_value)?globalThis.Boolean(t.bool_value):void 0,structValue:_h(t.structValue)?t.structValue:_h(t.struct_value)?t.struct_value:void 0,listValue:globalThis.Array.isArray(t.listValue)?[...t.listValue]:globalThis.Array.isArray(t.list_value)?[...t.list_value]:void 0}},toJSON(t){const e={};return t.nullValue!==void 0&&(e.nullValue=aC(t.nullValue)),t.numberValue!==void 0&&(e.numberValue=t.numberValue),t.stringValue!==void 0&&(e.stringValue=t.stringValue),t.boolValue!==void 0&&(e.boolValue=t.boolValue),t.structValue!==void 0&&(e.structValue=t.structValue),t.listValue!==void 0&&(e.listValue=t.listValue),e},create(t){return Xn.fromPartial(t??{})},fromPartial(t){const e=nu();return e.nullValue=t.nullValue??void 0,e.numberValue=t.numberValue??void 0,e.stringValue=t.stringValue??void 0,e.boolValue=t.boolValue??void 0,e.structValue=t.structValue??void 0,e.listValue=t.listValue??void 0,e},wrap(t){const e=nu();if(t===null)e.nullValue=0;else if(typeof t=="boolean")e.boolValue=t;else if(typeof t=="number")e.numberValue=t;else if(typeof t=="string")e.stringValue=t;else if(globalThis.Array.isArray(t))e.listValue=t;else if(typeof t=="object")e.structValue=t;else if(typeof t<"u")throw new globalThis.Error("Unsupported any value type: "+typeof t);return e},unwrap(t){if(t.stringValue!==void 0)return t.stringValue;if(t?.numberValue!==void 0)return t.numberValue;if(t?.boolValue!==void 0)return t.boolValue;if(t?.structValue!==void 0)return t.structValue;if(t?.listValue!==void 0)return t.listValue;if(t?.nullValue!==void 0)return null}};function iu(){return{values:[]}}const Po={encode(t,e=new it){for(const n of t.values)Xn.encode(Xn.wrap(n),e.uint32(10).fork()).join();return e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=iu();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.values.push(Xn.unwrap(Xn.decode(n,n.uint32())));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{values:globalThis.Array.isArray(t?.values)?[...t.values]:[]}},toJSON(t){const e={};return t.values?.length&&(e.values=t.values),e},create(t){return Po.fromPartial(t??{})},fromPartial(t){const e=iu();return e.values=t.values?.map(n=>n)||[],e},wrap(t){const e=iu();return e.values=t??[],e},unwrap(t){return t?.hasOwnProperty("values")&&globalThis.Array.isArray(t.values)?t.values:t}};function _h(t){return typeof t=="object"&&t!==null}function gi(t){return t!=null}function bm(){return{message:void 0,value:void 0,fallback:void 0}}const Nn={encode(t,e=new it){return t.message!==void 0&&Ts.encode(t.message,e.uint32(10).fork()).join(),t.value!==void 0&&Xn.encode(Xn.wrap(t.value),e.uint32(18).fork()).join(),t.fallback!==void 0&&As.encode(t.fallback,e.uint32(26).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=bm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.message=Ts.decode(n,n.uint32());continue}case 2:{if(s!==18)break;r.value=Xn.unwrap(Xn.decode(n,n.uint32()));continue}case 3:{if(s!==26)break;r.fallback=As.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{message:Er(t.message)?Ts.fromJSON(t.message):void 0,value:Er(t?.value)?t.value:void 0,fallback:Er(t.fallback)?As.fromJSON(t.fallback):void 0}},toJSON(t){const e={};return t.message!==void 0&&(e.message=Ts.toJSON(t.message)),t.value!==void 0&&(e.value=t.value),t.fallback!==void 0&&(e.fallback=As.toJSON(t.fallback)),e},create(t){return Nn.fromPartial(t??{})},fromPartial(t){const e=bm();return e.message=t.message!==void 0&&t.message!==null?Ts.fromPartial(t.message):void 0,e.value=t.value??void 0,e.fallback=t.fallback!==void 0&&t.fallback!==null?As.fromPartial(t.fallback):void 0,e}};function Sm(){return{data:void 0}}const As={encode(t,e=new it){return t.data!==void 0&&gr.encode(t.data,e.uint32(10).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Sm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.data=gr.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{data:Er(t.data)?gr.fromJSON(t.data):void 0}},toJSON(t){const e={};return t.data!==void 0&&(e.data=gr.toJSON(t.data)),e},create(t){return As.fromPartial(t??{})},fromPartial(t){const e=Sm();return e.data=t.data!==void 0&&t.data!==null?gr.fromPartial(t.data):void 0,e}};function Mm(){return{items:{}}}const gr={encode(t,e=new it){return globalThis.Object.entries(t.items).forEach(([n,i])=>{vh.encode({key:n,value:i},e.uint32(10).fork()).join()}),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Mm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;const o=vh.decode(n,n.uint32());o.value!==void 0&&(r.items[o.key]=o.value);continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{items:lC(t.items)?globalThis.Object.entries(t.items).reduce((e,[n,i])=>(e[n]=Nn.fromJSON(i),e),{}):{}}},toJSON(t){const e={};if(t.items){const n=globalThis.Object.entries(t.items);n.length>0&&(e.items={},n.forEach(([i,r])=>{e.items[i]=Nn.toJSON(r)}))}return e},create(t){return gr.fromPartial(t??{})},fromPartial(t){const e=Mm();return e.items=globalThis.Object.entries(t.items??{}).reduce((n,[i,r])=>(r!==void 0&&(n[i]=Nn.fromPartial(r)),n),{}),e}};function wm(){return{key:"",value:void 0}}const vh={encode(t,e=new it){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&Nn.encode(t.value,e.uint32(18).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=wm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.key=n.string();continue}case 2:{if(s!==18)break;r.value=Nn.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{key:Er(t.key)?globalThis.String(t.key):"",value:Er(t.value)?Nn.fromJSON(t.value):void 0}},toJSON(t){const e={};return t.key!==""&&(e.key=t.key),t.value!==void 0&&(e.value=Nn.toJSON(t.value)),e},create(t){return vh.fromPartial(t??{})},fromPartial(t){const e=wm();return e.key=t.key??"",e.value=t.value!==void 0&&t.value!==null?Nn.fromPartial(t.value):void 0,e}};function Em(){return{data:void 0,version:void 0}}const M_={encode(t,e=new it){return t.data!==void 0&&Nn.encode(t.data,e.uint32(10).fork()).join(),t.version!==void 0&&e.uint32(18).string(t.version),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Em();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.data=Nn.decode(n,n.uint32());continue}case 2:{if(s!==18)break;r.version=n.string();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{data:Er(t.data)?Nn.fromJSON(t.data):void 0,version:Er(t.version)?globalThis.String(t.version):void 0}},toJSON(t){const e={};return t.data!==void 0&&(e.data=Nn.toJSON(t.data)),t.version!==void 0&&(e.version=t.version),e},create(t){return M_.fromPartial(t??{})},fromPartial(t){const e=Em();return e.data=t.data!==void 0&&t.data!==null?Nn.fromPartial(t.data):void 0,e.version=t.version??void 0,e}};function lC(t){return typeof t=="object"&&t!==null}function Er(t){return t!=null}function Tm(){return{guid:"",name:"",x:0,y:0,z:0}}const He={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.x!==0&&e.uint32(29).float(t.x),t.y!==0&&e.uint32(37).float(t.y),t.z!==0&&e.uint32(45).float(t.z),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Tm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.x=n.float();continue}case 4:{if(s!==37)break;r.y=n.float();continue}case 5:{if(s!==45)break;r.z=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",x:ae(t.x)?globalThis.Number(t.x):0,y:ae(t.y)?globalThis.Number(t.y):0,z:ae(t.z)?globalThis.Number(t.z):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.x!==0&&(e.x=t.x),t.y!==0&&(e.y=t.y),t.z!==0&&(e.z=t.z),e},create(t){return He.fromPartial(t??{})},fromPartial(t){const e=Tm();return e.guid=t.guid??"",e.name=t.name??"",e.x=t.x??0,e.y=t.y??0,e.z=t.z??0,e}};function Am(){return{guid:"",name:"",x:0,y:0,z:0}}const Mt={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.x!==0&&e.uint32(29).float(t.x),t.y!==0&&e.uint32(37).float(t.y),t.z!==0&&e.uint32(45).float(t.z),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Am();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.x=n.float();continue}case 4:{if(s!==37)break;r.y=n.float();continue}case 5:{if(s!==45)break;r.z=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",x:ae(t.x)?globalThis.Number(t.x):0,y:ae(t.y)?globalThis.Number(t.y):0,z:ae(t.z)?globalThis.Number(t.z):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.x!==0&&(e.x=t.x),t.y!==0&&(e.y=t.y),t.z!==0&&(e.z=t.z),e},create(t){return Mt.fromPartial(t??{})},fromPartial(t){const e=Am();return e.guid=t.guid??"",e.name=t.name??"",e.x=t.x??0,e.y=t.y??0,e.z=t.z??0,e}};function Cm(){return{guid:"",name:"",point:void 0,xaxis:void 0,yaxis:void 0}}const We={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.point!==void 0&&He.encode(t.point,e.uint32(26).fork()).join(),t.xaxis!==void 0&&Mt.encode(t.xaxis,e.uint32(34).fork()).join(),t.yaxis!==void 0&&Mt.encode(t.yaxis,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Cm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.point=He.decode(n,n.uint32());continue}case 4:{if(s!==34)break;r.xaxis=Mt.decode(n,n.uint32());continue}case 5:{if(s!==42)break;r.yaxis=Mt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",point:ae(t.point)?He.fromJSON(t.point):void 0,xaxis:ae(t.xaxis)?Mt.fromJSON(t.xaxis):void 0,yaxis:ae(t.yaxis)?Mt.fromJSON(t.yaxis):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.point!==void 0&&(e.point=He.toJSON(t.point)),t.xaxis!==void 0&&(e.xaxis=Mt.toJSON(t.xaxis)),t.yaxis!==void 0&&(e.yaxis=Mt.toJSON(t.yaxis)),e},create(t){return We.fromPartial(t??{})},fromPartial(t){const e=Cm();return e.guid=t.guid??"",e.name=t.name??"",e.point=t.point!==void 0&&t.point!==null?He.fromPartial(t.point):void 0,e.xaxis=t.xaxis!==void 0&&t.xaxis!==null?Mt.fromPartial(t.xaxis):void 0,e.yaxis=t.yaxis!==void 0&&t.yaxis!==null?Mt.fromPartial(t.yaxis):void 0,e}};function Pm(){return{guid:"",name:"",point:void 0,normal:void 0}}const xf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.point!==void 0&&He.encode(t.point,e.uint32(26).fork()).join(),t.normal!==void 0&&Mt.encode(t.normal,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Pm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.point=He.decode(n,n.uint32());continue}case 4:{if(s!==34)break;r.normal=Mt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",point:ae(t.point)?He.fromJSON(t.point):void 0,normal:ae(t.normal)?Mt.fromJSON(t.normal):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.point!==void 0&&(e.point=He.toJSON(t.point)),t.normal!==void 0&&(e.normal=Mt.toJSON(t.normal)),e},create(t){return xf.fromPartial(t??{})},fromPartial(t){const e=Pm();return e.guid=t.guid??"",e.name=t.name??"",e.point=t.point!==void 0&&t.point!==null?He.fromPartial(t.point):void 0,e.normal=t.normal!==void 0&&t.normal!==null?Mt.fromPartial(t.normal):void 0,e}};function Rm(){return{guid:"",name:"",w:0,x:0,y:0,z:0}}const yf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.w!==0&&e.uint32(29).float(t.w),t.x!==0&&e.uint32(37).float(t.x),t.y!==0&&e.uint32(45).float(t.y),t.z!==0&&e.uint32(53).float(t.z),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Rm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.w=n.float();continue}case 4:{if(s!==37)break;r.x=n.float();continue}case 5:{if(s!==45)break;r.y=n.float();continue}case 6:{if(s!==53)break;r.z=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",w:ae(t.w)?globalThis.Number(t.w):0,x:ae(t.x)?globalThis.Number(t.x):0,y:ae(t.y)?globalThis.Number(t.y):0,z:ae(t.z)?globalThis.Number(t.z):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.w!==0&&(e.w=t.w),t.x!==0&&(e.x=t.x),t.y!==0&&(e.y=t.y),t.z!==0&&(e.z=t.z),e},create(t){return yf.fromPartial(t??{})},fromPartial(t){const e=Rm();return e.guid=t.guid??"",e.name=t.name??"",e.w=t.w??0,e.x=t.x??0,e.y=t.y??0,e.z=t.z??0,e}};function Dm(){return{guid:"",name:"",start:void 0,end:void 0}}const bf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.start!==void 0&&He.encode(t.start,e.uint32(26).fork()).join(),t.end!==void 0&&He.encode(t.end,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Dm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.start=He.decode(n,n.uint32());continue}case 4:{if(s!==34)break;r.end=He.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",start:ae(t.start)?He.fromJSON(t.start):void 0,end:ae(t.end)?He.fromJSON(t.end):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.start!==void 0&&(e.start=He.toJSON(t.start)),t.end!==void 0&&(e.end=He.toJSON(t.end)),e},create(t){return bf.fromPartial(t??{})},fromPartial(t){const e=Dm();return e.guid=t.guid??"",e.name=t.name??"",e.start=t.start!==void 0&&t.start!==null?He.fromPartial(t.start):void 0,e.end=t.end!==void 0&&t.end!==null?He.fromPartial(t.end):void 0,e}};function Im(){return{guid:"",name:"",radius:0,frame:void 0}}const _r={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.frame!==void 0&&We.encode(t.frame,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Im();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==34)break;r.frame=We.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",radius:ae(t.radius)?globalThis.Number(t.radius):0,frame:ae(t.frame)?We.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),e},create(t){return _r.fromPartial(t??{})},fromPartial(t){const e=Im();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e}};function Lm(){return{guid:"",name:"",circle:void 0,startAngle:0,endAngle:0}}const Sf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.circle!==void 0&&_r.encode(t.circle,e.uint32(26).fork()).join(),t.startAngle!==0&&e.uint32(37).float(t.startAngle),t.endAngle!==0&&e.uint32(45).float(t.endAngle),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Lm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.circle=_r.decode(n,n.uint32());continue}case 4:{if(s!==37)break;r.startAngle=n.float();continue}case 5:{if(s!==45)break;r.endAngle=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",circle:ae(t.circle)?_r.fromJSON(t.circle):void 0,startAngle:ae(t.startAngle)?globalThis.Number(t.startAngle):ae(t.start_angle)?globalThis.Number(t.start_angle):0,endAngle:ae(t.endAngle)?globalThis.Number(t.endAngle):ae(t.end_angle)?globalThis.Number(t.end_angle):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.circle!==void 0&&(e.circle=_r.toJSON(t.circle)),t.startAngle!==0&&(e.startAngle=t.startAngle),t.endAngle!==0&&(e.endAngle=t.endAngle),e},create(t){return Sf.fromPartial(t??{})},fromPartial(t){const e=Lm();return e.guid=t.guid??"",e.name=t.name??"",e.circle=t.circle!==void 0&&t.circle!==null?_r.fromPartial(t.circle):void 0,e.startAngle=t.startAngle??0,e.endAngle=t.endAngle??0,e}};function Nm(){return{guid:"",name:"",major:0,minor:0,frame:void 0}}const Mf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.major!==0&&e.uint32(29).float(t.major),t.minor!==0&&e.uint32(37).float(t.minor),t.frame!==void 0&&We.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Nm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.major=n.float();continue}case 4:{if(s!==37)break;r.minor=n.float();continue}case 5:{if(s!==42)break;r.frame=We.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",major:ae(t.major)?globalThis.Number(t.major):0,minor:ae(t.minor)?globalThis.Number(t.minor):0,frame:ae(t.frame)?We.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.major!==0&&(e.major=t.major),t.minor!==0&&(e.minor=t.minor),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),e},create(t){return Mf.fromPartial(t??{})},fromPartial(t){const e=Nm();return e.guid=t.guid??"",e.name=t.name??"",e.major=t.major??0,e.minor=t.minor??0,e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e}};function Um(){return{guid:"",name:"",focal:0,frame:void 0}}const wf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.focal!==0&&e.uint32(29).float(t.focal),t.frame!==void 0&&We.encode(t.frame,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Um();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.focal=n.float();continue}case 4:{if(s!==34)break;r.frame=We.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",focal:ae(t.focal)?globalThis.Number(t.focal):0,frame:ae(t.frame)?We.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.focal!==0&&(e.focal=t.focal),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),e},create(t){return wf.fromPartial(t??{})},fromPartial(t){const e=Um();return e.guid=t.guid??"",e.name=t.name??"",e.focal=t.focal??0,e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e}};function Om(){return{guid:"",name:"",major:0,minor:0,frame:void 0}}const Ef={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.major!==0&&e.uint32(29).float(t.major),t.minor!==0&&e.uint32(37).float(t.minor),t.frame!==void 0&&We.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Om();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.major=n.float();continue}case 4:{if(s!==37)break;r.minor=n.float();continue}case 5:{if(s!==42)break;r.frame=We.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",major:ae(t.major)?globalThis.Number(t.major):0,minor:ae(t.minor)?globalThis.Number(t.minor):0,frame:ae(t.frame)?We.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.major!==0&&(e.major=t.major),t.minor!==0&&(e.minor=t.minor),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),e},create(t){return Ef.fromPartial(t??{})},fromPartial(t){const e=Om();return e.guid=t.guid??"",e.name=t.name??"",e.major=t.major??0,e.minor=t.minor??0,e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e}};function Fm(){return{guid:"",name:"",points:[],degree:0}}const Tf={encode(t,e=new it){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name);for(const n of t.points)He.encode(n,e.uint32(26).fork()).join();return t.degree!==0&&e.uint32(32).int32(t.degree),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Fm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(He.decode(n,n.uint32()));continue}case 4:{if(s!==32)break;r.degree=n.int32();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",points:globalThis.Array.isArray(t?.points)?t.points.map(e=>He.fromJSON(e)):[],degree:ae(t.degree)?globalThis.Number(t.degree):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.points?.length&&(e.points=t.points.map(n=>He.toJSON(n))),t.degree!==0&&(e.degree=Math.round(t.degree)),e},create(t){return Tf.fromPartial(t??{})},fromPartial(t){const e=Fm();return e.guid=t.guid??"",e.name=t.name??"",e.points=t.points?.map(n=>He.fromPartial(n))||[],e.degree=t.degree??0,e}};function km(){return{guid:"",name:"",points:[]}}const Af={encode(t,e=new it){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name);for(const n of t.points)He.encode(n,e.uint32(26).fork()).join();return e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=km();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(He.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",points:globalThis.Array.isArray(t?.points)?t.points.map(e=>He.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.points?.length&&(e.points=t.points.map(n=>He.toJSON(n))),e},create(t){return Af.fromPartial(t??{})},fromPartial(t){const e=km();return e.guid=t.guid??"",e.name=t.name??"",e.points=t.points?.map(n=>He.fromPartial(n))||[],e}};function Bm(){return{guid:"",name:"",points:[]}}const Cf={encode(t,e=new it){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name);for(const n of t.points)He.encode(n,e.uint32(26).fork()).join();return e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Bm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(He.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",points:globalThis.Array.isArray(t?.points)?t.points.map(e=>He.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.points?.length&&(e.points=t.points.map(n=>He.toJSON(n))),e},create(t){return Cf.fromPartial(t??{})},fromPartial(t){const e=Bm();return e.guid=t.guid??"",e.name=t.name??"",e.points=t.points?.map(n=>He.fromPartial(n))||[],e}};function zm(){return{guid:"",name:"",frame:void 0,xsize:0,ysize:0,zsize:0}}const Pf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.frame!==void 0&&We.encode(t.frame,e.uint32(26).fork()).join(),t.xsize!==0&&e.uint32(37).float(t.xsize),t.ysize!==0&&e.uint32(45).float(t.ysize),t.zsize!==0&&e.uint32(53).float(t.zsize),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=zm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.frame=We.decode(n,n.uint32());continue}case 4:{if(s!==37)break;r.xsize=n.float();continue}case 5:{if(s!==45)break;r.ysize=n.float();continue}case 6:{if(s!==53)break;r.zsize=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",frame:ae(t.frame)?We.fromJSON(t.frame):void 0,xsize:ae(t.xsize)?globalThis.Number(t.xsize):0,ysize:ae(t.ysize)?globalThis.Number(t.ysize):0,zsize:ae(t.zsize)?globalThis.Number(t.zsize):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),t.xsize!==0&&(e.xsize=t.xsize),t.ysize!==0&&(e.ysize=t.ysize),t.zsize!==0&&(e.zsize=t.zsize),e},create(t){return Pf.fromPartial(t??{})},fromPartial(t){const e=zm();return e.guid=t.guid??"",e.name=t.name??"",e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e.xsize=t.xsize??0,e.ysize=t.ysize??0,e.zsize=t.zsize??0,e}};function Vm(){return{guid:"",name:"",radius:0,frame:void 0}}const Rf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.frame!==void 0&&We.encode(t.frame,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Vm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==34)break;r.frame=We.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",radius:ae(t.radius)?globalThis.Number(t.radius):0,frame:ae(t.frame)?We.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),e},create(t){return Rf.fromPartial(t??{})},fromPartial(t){const e=Vm();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e}};function Hm(){return{guid:"",name:"",radius:0,height:0,frame:void 0}}const Df={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.height!==0&&e.uint32(37).float(t.height),t.frame!==void 0&&We.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Hm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==37)break;r.height=n.float();continue}case 5:{if(s!==42)break;r.frame=We.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",radius:ae(t.radius)?globalThis.Number(t.radius):0,height:ae(t.height)?globalThis.Number(t.height):0,frame:ae(t.frame)?We.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.height!==0&&(e.height=t.height),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),e},create(t){return Df.fromPartial(t??{})},fromPartial(t){const e=Hm();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.height=t.height??0,e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e}};function Gm(){return{guid:"",name:"",radius:0,height:0,frame:void 0}}const If={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.height!==0&&e.uint32(37).float(t.height),t.frame!==void 0&&We.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Gm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==37)break;r.height=n.float();continue}case 5:{if(s!==42)break;r.frame=We.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",radius:ae(t.radius)?globalThis.Number(t.radius):0,height:ae(t.height)?globalThis.Number(t.height):0,frame:ae(t.frame)?We.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.height!==0&&(e.height=t.height),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),e},create(t){return If.fromPartial(t??{})},fromPartial(t){const e=Gm();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.height=t.height??0,e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e}};function Wm(){return{guid:"",name:"",radius:0,height:0,frame:void 0}}const Lf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.height!==0&&e.uint32(37).float(t.height),t.frame!==void 0&&We.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Wm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==37)break;r.height=n.float();continue}case 5:{if(s!==42)break;r.frame=We.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",radius:ae(t.radius)?globalThis.Number(t.radius):0,height:ae(t.height)?globalThis.Number(t.height):0,frame:ae(t.frame)?We.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.height!==0&&(e.height=t.height),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),e},create(t){return Lf.fromPartial(t??{})},fromPartial(t){const e=Wm();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.height=t.height??0,e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e}};function Xm(){return{guid:"",name:"",radiusAxis:0,radiusPipe:0,frame:void 0}}const Nf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radiusAxis!==0&&e.uint32(29).float(t.radiusAxis),t.radiusPipe!==0&&e.uint32(37).float(t.radiusPipe),t.frame!==void 0&&We.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Xm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radiusAxis=n.float();continue}case 4:{if(s!==37)break;r.radiusPipe=n.float();continue}case 5:{if(s!==42)break;r.frame=We.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",radiusAxis:ae(t.radiusAxis)?globalThis.Number(t.radiusAxis):ae(t.radius_axis)?globalThis.Number(t.radius_axis):0,radiusPipe:ae(t.radiusPipe)?globalThis.Number(t.radiusPipe):ae(t.radius_pipe)?globalThis.Number(t.radius_pipe):0,frame:ae(t.frame)?We.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radiusAxis!==0&&(e.radiusAxis=t.radiusAxis),t.radiusPipe!==0&&(e.radiusPipe=t.radiusPipe),t.frame!==void 0&&(e.frame=We.toJSON(t.frame)),e},create(t){return Nf.fromPartial(t??{})},fromPartial(t){const e=Xm();return e.guid=t.guid??"",e.name=t.name??"",e.radiusAxis=t.radiusAxis??0,e.radiusPipe=t.radiusPipe??0,e.frame=t.frame!==void 0&&t.frame!==null?We.fromPartial(t.frame):void 0,e}};function qm(){return{guid:"",name:"",points:[]}}const Uf={encode(t,e=new it){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name);for(const n of t.points)He.encode(n,e.uint32(26).fork()).join();return e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=qm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(He.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",points:globalThis.Array.isArray(t?.points)?t.points.map(e=>He.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.points?.length&&(e.points=t.points.map(n=>He.toJSON(n))),e},create(t){return Uf.fromPartial(t??{})},fromPartial(t){const e=qm();return e.guid=t.guid??"",e.name=t.name??"",e.points=t.points?.map(n=>He.fromPartial(n))||[],e}};function Ym(){return{guid:"",name:"",matrix:[]}}const Of={encode(t,e=new it){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Ym();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return Of.fromPartial(t??{})},fromPartial(t){const e=Ym();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function Jm(){return{guid:"",name:"",translationVector:void 0}}const Ff={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.translationVector!==void 0&&Mt.encode(t.translationVector,e.uint32(26).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Jm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.translationVector=Mt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",translationVector:ae(t.translationVector)?Mt.fromJSON(t.translationVector):ae(t.translation_vector)?Mt.fromJSON(t.translation_vector):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.translationVector!==void 0&&(e.translationVector=Mt.toJSON(t.translationVector)),e},create(t){return Ff.fromPartial(t??{})},fromPartial(t){const e=Jm();return e.guid=t.guid??"",e.name=t.name??"",e.translationVector=t.translationVector!==void 0&&t.translationVector!==null?Mt.fromPartial(t.translationVector):void 0,e}};function $m(){return{guid:"",name:"",axis:void 0,angle:0,point:void 0}}const kf={encode(t,e=new it){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.axis!==void 0&&Mt.encode(t.axis,e.uint32(26).fork()).join(),t.angle!==0&&e.uint32(37).float(t.angle),t.point!==void 0&&He.encode(t.point,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=$m();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.axis=Mt.decode(n,n.uint32());continue}case 4:{if(s!==37)break;r.angle=n.float();continue}case 5:{if(s!==42)break;r.point=He.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",axis:ae(t.axis)?Mt.fromJSON(t.axis):void 0,angle:ae(t.angle)?globalThis.Number(t.angle):0,point:ae(t.point)?He.fromJSON(t.point):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.axis!==void 0&&(e.axis=Mt.toJSON(t.axis)),t.angle!==0&&(e.angle=t.angle),t.point!==void 0&&(e.point=He.toJSON(t.point)),e},create(t){return kf.fromPartial(t??{})},fromPartial(t){const e=$m();return e.guid=t.guid??"",e.name=t.name??"",e.axis=t.axis!==void 0&&t.axis!==null?Mt.fromPartial(t.axis):void 0,e.angle=t.angle??0,e.point=t.point!==void 0&&t.point!==null?He.fromPartial(t.point):void 0,e}};function Km(){return{guid:"",name:"",matrix:[]}}const Bf={encode(t,e=new it){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Km();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return Bf.fromPartial(t??{})},fromPartial(t){const e=Km();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function Zm(){return{guid:"",name:"",matrix:[]}}const zf={encode(t,e=new it){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Zm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return zf.fromPartial(t??{})},fromPartial(t){const e=Zm();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function Qm(){return{guid:"",name:"",matrix:[]}}const Vf={encode(t,e=new it){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=Qm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return Vf.fromPartial(t??{})},fromPartial(t){const e=Qm();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function jm(){return{guid:"",name:"",matrix:[]}}const Hf={encode(t,e=new it){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=jm();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const o=n.uint32()+n.pos;for(;n.pos<o;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:ae(t.guid)?globalThis.String(t.guid):"",name:ae(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return Hf.fromPartial(t??{})},fromPartial(t){const e=jm();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function ae(t){return t!=null}class cC{data;constructor(e){let n;"bytes"in e?n=uC(e.bytes):n=e.data,this.data=n}get bytes(){return hC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new ht;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function uC(t){return Of.decode(t)}function hC(t){return Of.encode(t).finish()}function Pr(t){const e=new P(t.point.x,t.point.y,t.point.z),n=new P(t.xaxis.x,t.xaxis.y,t.xaxis.z),i=new P(t.yaxis.x,t.yaxis.y,t.yaxis.z),r=new P().crossVectors(n,i),s=new ht;return s.makeBasis(n,i,r),s.setPosition(e),s}class Zn{data;constructor(e){let n;if("bytes"in e?n=fC(e.bytes):n=e.data,n.x===void 0||n.y===void 0||n.z===void 0)throw new Error("Invalid PointData: Missing required properties (x, y, or z).");this.data=n}get bytes(){return dC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get x(){return this.data.x}get y(){return this.data.y}get z(){return this.data.z}buildGeometry(){const e=new ft,n=new Float32Array([this.x,this.y,this.z]);return e.setAttribute("position",new vn(n,3)),new of(e)}}function fC(t){return He.decode(t)}function dC(t){return He.encode(t).finish()}class Ks{data;constructor(e){let n;if("bytes"in e?n=pC(e.bytes):n=e.data,n.x===void 0||n.y===void 0||n.z===void 0)throw new Error("Invalid VectorData: Missing required properties (x, y, or z).");this.data=n}get bytes(){return mC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get x(){return this.data.x}get y(){return this.data.y}get z(){return this.data.z}buildGeometry(e){const n=new P(this.x,this.y,this.z),i=n.length();n.normalize();let r;e?r=new P(e.x,e.y,e.z):r=new P(0,0,0);let s=new gf(n,r,i,16711680);return s.setDirection(n),s}}function pC(t){return Mt.decode(t)}function mC(t){return Mt.encode(t).finish()}class ui{data;_point;_xaxis;_yaxis;constructor(e){let n;if("bytes"in e?n=gC(e.bytes):n=e.data,!n.point||!n.xaxis||!n.yaxis)throw new Error("Invalid FrameData: Missing required properties (point, xaxis, or yaxis).");this.data=n}get bytes(){return _C(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get point(){return this._point||(this._point=new Zn({data:this.data.point})),this._point}get xaxis(){return this._xaxis||(this._xaxis=new Ks({data:this.data.xaxis})),this._xaxis}get yaxis(){return this._yaxis||(this._yaxis=new Ks({data:this.data.yaxis})),this._yaxis}buildGeometry(){const e=new h_(1);e.setColors(new $e(16711680),new $e(65280),new $e(255));const n=Pr(this.data);return e.applyMatrix4(n),e}}function gC(t){return We.decode(t)}function _C(t){return We.encode(t).finish()}class w_{data;_frame;constructor(e){let n;if("bytes"in e?n=vC(e.bytes):n=e.data,!n.radius||!n.frame)throw new Error("Invalid CircleData: Missing required properties (radius or frame).");this.data=n}get bytes(){return xC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get frame(){return this._frame||(this._frame=new ui({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new lf(this.data.radius,e),i=Pr(this.data.frame),r=new _e(n);return r.applyMatrix4(i),r}}function vC(t){return _r.decode(t)}function xC(t){return _r.encode(t).finish()}class yC{data;_circle;constructor(e){let n;if("bytes"in e?n=bC(e.bytes):n=e.data,!n.startAngle||!n.endAngle||!n.circle)throw new Error("Invalid ArcData: Missing required properties (startAngle, endAngle, or circle).");this.data=n}get bytes(){return SC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get startAngle(){return this.data.startAngle}get endAngle(){return this.data.endAngle}get circle(){return this._circle||(this._circle=new w_({data:this.data.circle})),this._circle}buildGeometry(){throw new Error("Method not implemented.")}}function bC(t){return Sf.decode(t)}function SC(t){return Sf.encode(t).finish()}class MC{data;_points;constructor(e){let n;if("bytes"in e?n=wC(e.bytes):n=e.data,!n.points||n.points.length===0)throw new Error("Invalid BezierData: Missing required property points.");this.data=n}get bytes(){return EC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const e of this.data.points){const n=new Zn({data:e});this._points.push(n)}}return this._points}buildGeometry(){throw Error("Method not implemented.")}}function wC(t){return Tf.decode(t)}function EC(t){return Tf.encode(t).finish()}class TC{data;_frame;constructor(e){let n;if("bytes"in e?n=AC(e.bytes):n=e.data,!n.xsize||!n.ysize||!n.zsize||!n.frame)throw new Error("Invalid BoxData: Missing required properties (xsize, ysize, zsize, or frame).");this.data=n}get bytes(){return CC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get xsize(){return this.data.xsize}get ysize(){return this.data.ysize}get zsize(){return this.data.zsize}get frame(){return this._frame||(this._frame=new ui({data:this.data.frame})),this._frame}buildGeometry(){const e=new Ht(this.data.xsize,this.data.ysize,this.data.zsize),n=Pr(this.data.frame),i=new _e(e);return i.applyMatrix4(n),i}}function AC(t){return Pf.decode(t)}function CC(t){return Pf.encode(t).finish()}class PC{data;_frame;constructor(e){let n;if("bytes"in e?n=RC(e.bytes):n=e.data,!n.radius||!n.height||!n.frame)throw new Error("Invalid CapsuleData: Missing required properties (radius, height, or frame).");this.data=n}get bytes(){return DC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get height(){return this.data.height}get frame(){return this._frame||(this._frame=new ui({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new af(this.data.radius,this.data.height,e,e),i=new _e(n),r=Pr(this.data.frame);return i.applyMatrix4(r),i}}function RC(t){return Lf.decode(t)}function DC(t){return Lf.encode(t).finish()}class IC{data;_frame;constructor(e){let n;if("bytes"in e?n=LC(e.bytes):n=e.data,!n.radius||!n.height||!n.frame)throw new Error("Invalid ConeData: Missing required properties (radius, height, or frame).");this.data=n}get bytes(){return NC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get height(){return this.data.height}get frame(){return this._frame||(this._frame=new ui({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new Yl(this.radius,this.height,e),i=new _e(n),r=Pr(this.data.frame);return i.applyMatrix4(r),i}}function LC(t){return If.decode(t)}function NC(t){return If.encode(t).finish()}class UC{data;_frame;constructor(e){let n;if("bytes"in e?n=OC(e.bytes):n=e.data,!n.radius||!n.height||!n.frame)throw new Error("Invalid CylinderData: Missing required properties (radius, height, or frame).");this.data=n}get bytes(){return FC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get height(){return this.data.height}get frame(){return this._frame||(this._frame=new ui({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new rn(this.data.radius,this.data.radius,this.data.height,e),i=new _e(n),r=Pr(this.frame);return i.applyMatrix4(r),i}}function OC(t){return Df.decode(t)}function FC(t){return Df.encode(t).finish()}class kC{data;_frame;constructor(e){let n;if("bytes"in e?n=BC(e.bytes):n=e.data,!n.major||!n.minor||!n.frame)throw new Error("Invalid EllipseData: Missing required properties (major, minor, or frame).");this.data=n}get bytes(){return zC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get major(){return this.data.major}get minor(){return this.data.minor}get frame(){return this._frame||(this._frame=new ui({data:this.data.frame})),this._frame}buildGeometry(e=64){throw Error("Method not implemented.")}}function BC(t){return Mf.decode(t)}function zC(t){return Mf.encode(t).finish()}class VC{data;_frame;constructor(e){let n;if("bytes"in e?n=HC(e.bytes):n=e.data,!n.major||!n.minor||!n.frame)throw new Error("Invalid HyperbolaData: Missing required properties (a, b, or frame).");this.data=n}get bytes(){return GC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get major(){return this.data.major}get minor(){return this.data.minor}get frame(){return this._frame||(this._frame=new ui({data:this.data.frame})),this._frame}buildGeometry(e=64){throw Error("Method not implemented.")}}function HC(t){return Ef.decode(t)}function GC(t){return Ef.encode(t).finish()}class WC{data;_start;_end;constructor(e){let n;if("bytes"in e?n=XC(e.bytes):n=e.data,!n.start||!n.end)throw new Error("Invalid LineData: Missing required properties (start or end).");this.data=n}get bytes(){return qC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get start(){return this._start||(this._start=new Zn({data:this.data.start})),this._start}get end(){return this._end||(this._end=new Zn({data:this.data.end})),this._end}buildGeometry(){const e=new P(this.data.start.x,this.data.start.y,this.data.start.z),n=new P(this.data.end.x,this.data.end.y,this.data.end.z),i=new ft().setFromPoints([e,n]),r=new ci({color:255});return new on(i,r)}}function XC(t){return bf.decode(t)}function qC(t){return bf.encode(t).finish()}class YC{data;_frame;constructor(e){let n;if("bytes"in e?n=JC(e.bytes):n=e.data,!n.focal||!n.frame)throw new Error("Invalid ParabolaData: Missing required properties (focal_length or frame).");this.data=n}get bytes(){return $C(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get focal(){return this.data.focal}get frame(){return this._frame||(this._frame=new ui({data:this.data.frame})),this._frame}buildGeometry(e=64){throw Error("Method not implemented.")}}function JC(t){return wf.decode(t)}function $C(t){return wf.encode(t).finish()}class KC{data;_point;_normal;constructor(e){let n;if("bytes"in e?n=ZC(e.bytes):n=e.data,!n.point||!n.normal)throw new Error("Invalid PlaneData: Missing required properties (point or normal).");this.data=n}get bytes(){return QC(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get point(){return this._point||(this._point=new Zn({data:this.data.point})),this._point}get normal(){return this._normal||(this._normal=new Ks({data:this.data.normal})),this._normal}buildGeometry(e=2){const n=new Gi(new P(this.normal.x,this.normal.y,this.normal.z),0);return n.translate(new P(this.point.x,this.point.y,this.point.z)),new yM(n,e)}}function ZC(t){return xf.decode(t)}function QC(t){return xf.encode(t).finish()}class jC{data;_points;constructor(e){let n;if("bytes"in e?n=eP(e.bytes):n=e.data,!n.points||n.points.length===0)throw new Error("Invalid PointcloudData: Missing required property points.");this.data=n}get bytes(){return tP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const e of this.data.points){const n=new Zn({data:e});this._points.push(n)}}return this._points}buildGeometry(){const e=new ft,n=new Float32Array(this.points.length*3);for(let s=0;s<this.points.length;s++)n[s*3]=this.points[s].x,n[s*3+1]=this.points[s].y,n[s*3+2]=this.points[s].z;e.setAttribute("position",new vn(n,3));const i=new sf({size:.2,color:16711935});return new of(e,i)}}function eP(t){return Uf.decode(t)}function tP(t){return Uf.encode(t).finish()}class nP{data;_points;constructor(e){let n;if("bytes"in e?n=iP(e.bytes):n=e.data,!n.points||n.points.length===0)throw new Error("Invalid PolygonData: Missing required property points.");this.data=n}get bytes(){return rP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const e of this.data.points){const n=new Zn({data:e});this._points.push(n)}}return this._points}buildGeometry(){throw Error("Method not implemented.")}}function iP(t){return Cf.decode(t)}function rP(t){return Cf.encode(t).finish()}class sP{data;_points;constructor(e){let n;if("bytes"in e?n=oP(e.bytes):n=e.data,!n.points||n.points.length===0)throw new Error("Invalid PolylineData: Missing required property points.");this.data=n}get bytes(){return aP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const e of this.data.points){const n=new Zn({data:e});this._points.push(n)}}return this._points}buildGeometry(){const e=new ft,n=new Float32Array(this.points.length*3);for(let s=0;s<this.points.length;s++)n[s*3]=this.points[s].x,n[s*3+1]=this.points[s].y,n[s*3+2]=this.points[s].z;e.setAttribute("position",new vn(n,3));const i=new ci({color:0});return new on(e,i)}}function oP(t){return Af.decode(t)}function aP(t){return Af.encode(t).finish()}class lP{data;constructor(e){let n;if("bytes"in e?n=cP(e.bytes):n=e.data,!n.matrix)throw new Error("Invalid ProjectionData: Missing required properties (direction).");this.data=n}get bytes(){return uP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new ht;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function cP(t){return Hf.decode(t)}function uP(t){return Hf.encode(t).finish()}class hP{data;constructor(e){let n;if("bytes"in e?n=fP(e.bytes):n=e.data,!n.w||!n.x||!n.y||!n.z)throw new Error("Invalid QuaternionData: Missing required properties (w, x, y, or z).");this.data=n}get bytes(){return dP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get w(){return this.data.w}get x(){return this.data.x}get y(){return this.data.y}get z(){return this.data.z}}function fP(t){return yf.decode(t)}function dP(t){return yf.encode(t).finish()}class pP{data;constructor(e){let n;if("bytes"in e?n=mP(e.bytes):n=e.data,!n.matrix)throw new Error("Invalid ReflectionData: Missing required properties (frame).");this.data=n}get bytes(){return gP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new ht;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function mP(t){return zf.decode(t)}function gP(t){return zf.encode(t).finish()}class _P{data;_axis;_point;constructor(e){let n;if("bytes"in e?n=vP(e.bytes):n=e.data,!n.axis||!n.point||!n.angle)throw new Error("Invalid RotationData: Missing required properties (axis or point).");this.data=n}get bytes(){return xP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get axis(){return this._axis||(this._axis=new Ks({data:this.data.axis})),this._axis}get point(){return this._point||(this._point=new Zn({data:this.data.point})),this._point}get angle(){return this.data.angle}}function vP(t){return kf.decode(t)}function xP(t){return kf.encode(t).finish()}class yP{data;constructor(e){let n;if("bytes"in e?n=bP(e.bytes):n=e.data,!n.matrix)throw new Error("Invalid ScaleData: Missing required properties (factor or frame).");this.data=n}get bytes(){return SP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new ht;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function bP(t){return Bf.decode(t)}function SP(t){return Bf.encode(t).finish()}class MP{data;constructor(e){let n;if("bytes"in e?n=wP(e.bytes):n=e.data,!n.matrix)throw new Error("Invalid ShearData: Missing required properties (matrix).");this.data=n}get bytes(){return EP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new ht;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function wP(t){return Vf.decode(t)}function EP(t){return Vf.encode(t).finish()}class TP{data;_frame;constructor(e){let n;if("bytes"in e?n=AP(e.bytes):n=e.data,!n.radius||!n.frame)throw new Error("Invalid SphereData: Missing required properties (radius or frame).");this.data=n}get bytes(){return CP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get frame(){return this._frame||(this._frame=new ui({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new la(this.radius,e,e),i=new _e(n),r=Pr(this.data.frame);return i.applyMatrix4(r),i}}function AP(t){return Rf.decode(t)}function CP(t){return Rf.encode(t).finish()}class PP{data;_frame;constructor(e){let n;if("bytes"in e?n=RP(e.bytes):n=e.data,!n.radiusAxis||!n.radiusPipe||!n.frame)throw new Error("Invalid TorusData: Missing required properties (major, minor, or frame).");this.data=n}get bytes(){return DP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radiusAxis(){return this.data.radiusAxis}get radiusPipe(){return this.data.radiusPipe}get frame(){return this._frame||(this._frame=new ui({data:this.data.frame})),this._frame}buildGeometry(e=64,n=64){const i=new mr(this.radiusAxis,this.radiusPipe,e,n),r=new _e(i),s=Pr(this.data.frame);return r.applyMatrix4(s),r}}function RP(t){return Nf.decode(t)}function DP(t){return Nf.encode(t).finish()}class IP{data;_translationVector;constructor(e){let n;if("bytes"in e?n=LP(e.bytes):n=e.data,!n.translationVector)throw new Error("Invalid TranslationData: Missing required properties (vector or frame).");this.data=n}get bytes(){return NP(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get translationVector(){return this._translationVector||(this._translationVector=new Ks({data:this.data.translationVector})),this._translationVector}}function LP(t){return Ff.decode(t)}function NP(t){return Ff.encode(t).finish()}function eg(){return{indices:[]}}const vr={encode(t,e=new it){e.uint32(10).fork();for(const n of t.indices)e.uint32(n);return e.join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=eg();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s===8){r.indices.push(n.uint32());continue}if(s===10){const o=n.uint32()+n.pos;for(;n.pos<o;)r.indices.push(n.uint32());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{indices:globalThis.Array.isArray(t?.indices)?t.indices.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.indices?.length&&(e.indices=t.indices.map(n=>Math.round(n))),e},create(t){return vr.fromPartial(t??{})},fromPartial(t){const e=eg();return e.indices=t.indices?.map(n=>n)||[],e}};function tg(){return{guid:void 0,name:void 0,vertices:[],faces:[]}}const Gf={encode(t,e=new it){t.guid!==void 0&&e.uint32(10).string(t.guid),t.name!==void 0&&e.uint32(18).string(t.name);for(const n of t.vertices)He.encode(n,e.uint32(26).fork()).join();for(const n of t.faces)vr.encode(n,e.uint32(34).fork()).join();return e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=tg();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.vertices.push(He.decode(n,n.uint32()));continue}case 4:{if(s!==34)break;r.faces.push(vr.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:Pl(t.guid)?globalThis.String(t.guid):void 0,name:Pl(t.name)?globalThis.String(t.name):void 0,vertices:globalThis.Array.isArray(t?.vertices)?t.vertices.map(e=>He.fromJSON(e)):[],faces:globalThis.Array.isArray(t?.faces)?t.faces.map(e=>vr.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==void 0&&(e.guid=t.guid),t.name!==void 0&&(e.name=t.name),t.vertices?.length&&(e.vertices=t.vertices.map(n=>He.toJSON(n))),t.faces?.length&&(e.faces=t.faces.map(n=>vr.toJSON(n))),e},create(t){return Gf.fromPartial(t??{})},fromPartial(t){const e=tg();return e.guid=t.guid??void 0,e.name=t.name??void 0,e.vertices=t.vertices?.map(n=>He.fromPartial(n))||[],e.faces=t.faces?.map(n=>vr.fromPartial(n))||[],e}};function ng(){return{vertexIndices:[]}}const xr={encode(t,e=new it){e.uint32(10).fork();for(const n of t.vertexIndices)e.int32(n);return e.join(),e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=ng();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s===8){r.vertexIndices.push(n.int32());continue}if(s===10){const o=n.uint32()+n.pos;for(;n.pos<o;)r.vertexIndices.push(n.int32());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{vertexIndices:globalThis.Array.isArray(t?.vertexIndices)?t.vertexIndices.map(e=>globalThis.Number(e)):globalThis.Array.isArray(t?.vertex_indices)?t.vertex_indices.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.vertexIndices?.length&&(e.vertexIndices=t.vertexIndices.map(n=>Math.round(n))),e},create(t){return xr.fromPartial(t??{})},fromPartial(t){const e=ng();return e.vertexIndices=t.vertexIndices?.map(n=>n)||[],e}};function ig(){return{guid:void 0,name:void 0,vertices:[],faces:[]}}const Wf={encode(t,e=new it){t.guid!==void 0&&e.uint32(10).string(t.guid),t.name!==void 0&&e.uint32(18).string(t.name);for(const n of t.vertices)He.encode(n,e.uint32(26).fork()).join();for(const n of t.faces)xr.encode(n,e.uint32(34).fork()).join();return e},decode(t,e){const n=t instanceof xe?t:new xe(t),i=e===void 0?n.len:n.pos+e,r=ig();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.vertices.push(He.decode(n,n.uint32()));continue}case 4:{if(s!==34)break;r.faces.push(xr.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:Pl(t.guid)?globalThis.String(t.guid):void 0,name:Pl(t.name)?globalThis.String(t.name):void 0,vertices:globalThis.Array.isArray(t?.vertices)?t.vertices.map(e=>He.fromJSON(e)):[],faces:globalThis.Array.isArray(t?.faces)?t.faces.map(e=>xr.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==void 0&&(e.guid=t.guid),t.name!==void 0&&(e.name=t.name),t.vertices?.length&&(e.vertices=t.vertices.map(n=>He.toJSON(n))),t.faces?.length&&(e.faces=t.faces.map(n=>xr.toJSON(n))),e},create(t){return Wf.fromPartial(t??{})},fromPartial(t){const e=ig();return e.guid=t.guid??void 0,e.name=t.name??void 0,e.vertices=t.vertices?.map(n=>He.fromPartial(n))||[],e.faces=t.faces?.map(n=>xr.fromPartial(n))||[],e}};function Pl(t){return t!=null}class UP{data;constructor(e){let n;if("bytes"in e?n=OP(e.bytes):n=e.data,!n.vertexIndices)throw new Error("Invalid FaceData: Missing required property 'vertices'.");this.data=n}get bytes(){return FP(this.data)}get vertexIndices(){return this.data.vertexIndices}}function OP(t){return xr.decode(t)}function FP(t){return xr.encode(t).finish()}class kP{data;_points;_faces;constructor(e){let n;if("bytes"in e?n=BP(e.bytes):n=e.data,!n.vertices||!n.faces)throw new Error("Invalid PolyhedronData: Missing required properties (vertices or faces).");this.data=n}get bytes(){return zP(this.data)}get guid(){return this.data.guid?this.data.guid:""}get name(){return this.data.name?this.data.name:""}get vertices(){if(!this._points){this._points=[];for(const e of this.data.vertices){const n=new Zn({data:e});this._points.push(n)}}return this._points}get faces(){if(!this._faces){this._faces=[];for(const e of this.data.faces){const n=new UP({data:e});this._faces.push(n)}}return this._faces}buildGeometry(){const e=new ft,n=new Float32Array(this.vertices.length*3);for(let o=0;o<this.vertices.length;o++){const a=this.vertices[o];n[o*3]=a.x,n[o*3+1]=a.y,n[o*3+2]=a.z}const i=[];for(const o of this.faces){const a=o.vertexIndices;for(let l=1;l<a.length-1;l++)i.push(a[0],a[l],a[l+1])}e.setIndex(i),e.setAttribute("position",new vn(n,3)),e.computeVertexNormals();const r=new to({color:52292,side:wn});return new _e(e,r)}}function BP(t){return Wf.decode(t)}function zP(t){return Wf.encode(t).finish()}class VP{data;constructor(e){let n;if("bytes"in e?n=HP(e.bytes):n=e.data,!n.indices)throw new Error("Invalid FaceList: Missing required property 'faces'.");this.data=n}get bytes(){return GP(this.data)}get indices(){return this.data.indices}}function HP(t){return vr.decode(t)}function GP(t){return vr.encode(t).finish()}function WP(t,e=Math.PI/3){const n=Math.cos(e),i=(1+1e-10)*100,r=[new P,new P,new P],s=new P,o=new P,a=new P,l=new P;function c(_){const m=~~(_.x*i),f=~~(_.y*i),x=~~(_.z*i);return`${m},${f},${x}`}const u=t.index?t.toNonIndexed():t,h=u.attributes.position,d={};for(let _=0,m=h.count/3;_<m;_++){const f=3*_,x=r[0].fromBufferAttribute(h,f+0),y=r[1].fromBufferAttribute(h,f+1),b=r[2].fromBufferAttribute(h,f+2);s.subVectors(b,y),o.subVectors(x,y);const T=new P().crossVectors(s,o).normalize();for(let C=0;C<3;C++){const D=r[C],R=c(D);R in d||(d[R]=[]),d[R].push(T)}}const p=new Float32Array(h.count*3),g=new vn(p,3,!1);for(let _=0,m=h.count/3;_<m;_++){const f=3*_,x=r[0].fromBufferAttribute(h,f+0),y=r[1].fromBufferAttribute(h,f+1),b=r[2].fromBufferAttribute(h,f+2);s.subVectors(b,y),o.subVectors(x,y),a.crossVectors(s,o).normalize();for(let T=0;T<3;T++){const C=r[T],D=c(C),R=d[D];l.set(0,0,0);for(let S=0,M=R.length;S<M;S++){const L=R[S];a.dot(L)>n&&l.add(L)}l.normalize(),g.setXYZ(f+T,l.x,l.y,l.z)}}return u.setAttribute("normal",g),u}class XP{data;_vertices;constructor(e){let n;if("bytes"in e?n=qP(e.bytes):n=e.data,!n.vertices||!n.faces)throw new Error("Invalid MeshData: Missing required properties (vertices or faces).");this.data=n}get bytes(){return YP(this.data)}get guid(){return this.data.guid?this.data.guid:""}get name(){return this.data.name?this.data.name:""}get vertices(){if(!this._vertices){this._vertices=[];for(const e of this.data.vertices){const n=new Zn({data:e});this._vertices.push(n)}}return this._vertices}get faces(){const e=[];for(const n of this.data.faces){const i=new VP({data:n});e.push(i)}return e}buildGeometry(){let e=new ft;const n=new Float32Array(this.vertices.length*3);this.vertices.forEach((o,a)=>{n[a*3]=o.x,n[a*3+1]=o.y,n[a*3+2]=o.z});const i=[];for(const o of this.faces){const a=o.indices;for(let l=1;l<a.length-1;l++)i.push(a[0],a[l],a[l+1])}e.setIndex(i),e.setAttribute("position",new vn(n,3));const r=Tl.degToRad(30);e=WP(e,r);const s=new to({color:30719,flatShading:!0,side:wn});return new _e(e,s)}}function qP(t){return Gf.decode(t)}function YP(t){return Gf.encode(t).finish()}class E_{data;constructor(e){let n;"bytes"in e?n=JP(e.bytes):n=e.data,this.data=n}get bytes(){return $P(this.data)}get asDict(){const e={};for(const n in this.data.items)Object.prototype.hasOwnProperty.call(this.data.items,n)&&(e[n]=this.data.items[n]);return e}}function JP(t){return gr.decode(t)}function $P(t){return gr.encode(t).finish()}const KP=new Map([["ArcData",yC],["BezierData",MC],["BoxData",TC],["CapsuleData",PC],["CircleData",w_],["ConeData",IC],["CylinderData",UC],["EllipseData",kC],["FrameData",ui],["HyperbolaData",VC],["LineData",WC],["ParabolaData",YC],["PlaneData",KC],["PointData",Zn],["PointcloudData",jC],["PolygonData",nP],["PolylineData",sP],["ProjectionData",lP],["QuaternionData",hP],["ReflectionData",pP],["RotationData",_P],["ScaleData",yP],["ShearData",MP],["SphereData",TP],["TorusData",PP],["TransformationData",cC],["TranslationData",IP],["VectorData",Ks],["MeshData",XP],["PolyhedronData",kP],["DictData",E_]]);function ZP(t){const e=T_(t),n=QP(e);return n?new n({bytes:e.value}):null}function T_(t){return M_.decode(t).data.message}function QP(t){const n=t.typeUrl.split(".").slice(-1)[0];return KP.get(n)||null}class jP extends on{constructor(e,n){const i=[1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],r=new ft;r.setAttribute("position",new tt(i,3)),r.computeBoundingSphere();const s=new ci({fog:!1});super(r,s),this.light=e,this.color=n,this.type="RectAreaLightHelper";const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],a=new ft;a.setAttribute("position",new tt(o,3)),a.computeBoundingSphere(),this.add(new _e(a,new Cr({side:_n,fog:!1})))}updateMatrixWorld(){if(this.scale.set(.5*this.light.width,.5*this.light.height,1),this.color!==void 0)this.material.color.set(this.color),this.children[0].material.color.set(this.color);else{this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);const e=this.material.color,n=Math.max(e.r,e.g,e.b);n>1&&e.multiplyScalar(1/n),this.children[0].material.color.copy(this.material.color)}this.matrixWorld.extractRotation(this.light.matrixWorld).scale(this.scale).copyPosition(this.light.matrixWorld),this.children[0].matrixWorld.copy(this.matrixWorld)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}class Kl extends _e{constructor(){const e=Kl.SkyShader,n=new li({name:e.name,uniforms:J0.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:_n,depthWrite:!1});super(new Ht(1,1,1),n),this.isSky=!0}}Kl.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new P},up:{value:new P(0,1,0)}},vertexShader:`
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

		}`};const Yt={},Kn={};function rg(t){t.type.value=="point_light"?e3(t):t.type.value=="spot_light"?t3(t):t.type.value=="rect_light"?n3(t):t.type.value=="sunlight"?i3(t):t.type.value=="sky"?r3(t):t.type.value=="ambient_light"&&s3(t)}function e3(t){let e,n;Yt[t.guid.value]?e=Yt[t.guid.value]:(e=new dM,Rt.add(e));let i=t.color.value;i=i.replace("#","0x"),i=parseInt(i),e.color.set(i),e.intensity=t.intensity.value,e.distance=t.distance.value,e.decay=t.decay.value,e.position.set(t.x.value,t.y.value,t.z.value),e.castShadow=!0,e.shadow.bias=-.002,e.shadow.normalBias=.02,Kn[t.guid.value]&&t.helper.value?(n=Kn[t.guid.value],n.update()):t.helper.value&&(n=new vM(e,.5),Rt.add(n)),Yt[t.guid.value]=e,n&&(Kn[t.guid.value]=n)}function t3(t){let e,n;Yt[t.guid.value]?(e=Yt[t.guid.value],Rt.remove(e.target)):(e=new hM,Rt.add(e));let i=t.color.value;i=i.replace("#","0x"),i=parseInt(i),e.color.set(i),e.intensity=t.intensity.value,e.distance=t.distance.value,e.angle=t.angle.value,e.penumbra=t.penumbra.value,e.decay=t.decay.value,e.position.set(t.x.value,t.y.value,t.z.value);const r=new Tt;r.position.set(t.tx.value,t.ty.value,t.tz.value),Rt.add(r),e.target=r,Rt.remove(r),e.castShadow=!0,e.shadow.bias=-.002,e.shadow.normalBias=.02,Kn[t.guid.value]&&t.helper.value?(n=Kn[t.guid.value],n.update()):t.helper.value&&(n=new _M(e),Rt.add(n)),Yt[t.guid.value]=e,n&&(Kn[t.guid.value]=n)}function n3(t){let e,n;Yt[t.guid.value]?e=Yt[t.guid.value]:(e=new mM,Rt.add(e));let i=t.color.value;i=i.replace("#","0x"),i=parseInt(i),e.color.set(i),e.intensity=t.intensity.value,e.width=t.width.value,e.height=t.height.value,e.position.set(t.x.value,t.y.value,t.z.value),e.lookAt(t.tx.value,t.ty.value,t.tz.value),Kn[t.guid.value]&&t.helper.value?n=Kn[t.guid.value]:t.helper.value&&(n=new jP(e),Rt.add(n)),Yt[t.guid.value]=e,n&&(Kn[t.guid.value]=n)}function i3(t){let e,n;Yt[t.guid.value]?e=Yt[t.guid.value]:(e=new l_,Rt.add(e));let i=t.color.value;if(i=i.replace("#","0x"),i=parseInt(i),e.color.set(i),e.intensity=t.intensity.value,e.position.set(t.x.value,t.y.value,t.z.value),e.target.position.set(t.tx.value,t.ty.value,t.tz.value),e.castShadow=!0,Kn[t.guid.value]&&t.helper.value)n=Kn[t.guid.value],n.update();else if(t.helper.value){const r=new xM(e);Rt.add(r)}Yt[t.guid.value]=e,n&&(Kn[t.guid.value]=n)}function r3(t){let e,n,i;Yt[t.guid.value]?(e=Yt[t.guid.value],n=Yt[t.guid.value+"_sun"],i=Yt[t.guid.value+"_ambient"]):(e=new Kl,n=new l_(16777215,1),i=new c_(16777215,.6),Rt.add(e),Rt.add(n),Rt.add(i)),e.scale.setScalar(1e3),e.material.uniforms.up.value=new P(0,0,1),e.material.uniforms.turbidity.value=t.turbidity.value,e.material.uniforms.rayleigh.value=t.rayleigh.value,e.material.uniforms.mieCoefficient.value=t.mie_coefficient.value,e.material.uniforms.mieDirectionalG.value=t.mie_directional_g.value;let r=new P;const s=Tl.degToRad(90-t.elevation.value),o=Tl.degToRad(t.azimuth.value);r.setFromSphericalCoords(1,s,o),e.material.uniforms.sunPosition.value=r,n.position.copy(e.material.uniforms.sunPosition.value),n.color.copy(sg(t.elevation.value)),i.color.copy(sg(t.elevation.value)).multiplyScalar(.6),Yt[t.guid.value]=e,Yt[t.guid.value+"_sun"]=n,Yt[t.guid.value+"_ambient"]=i}function sg(t){if(t>10)return new $e(16777215);if(t>0){const e=t/10;return new $e(16777164).lerp(new $e(16777215),e)}if(t>-5){const e=(t+5)/5;return new $e(16764006).lerp(new $e(16777164),e)}return new $e(16764006)}function s3(t){let e;Yt[t.guid.value]?e=Yt[t.guid.value]:(e=new c_,Rt.add(e));let n=t.color.value;n=n.replace("#","0x"),n=parseInt(n),e.color.set(n),e.intensity=t.intensity.value,e.color.needsUpdate=!0,console.log(t.intensity.value)}const Tr=$n({title:"Object Infos",isVisible:!1,data:null}),xh=$n({title:"Sidebar Infos",isVisible:!1,data:null}),A_=$n({value:!0}),Xf=$n([]);function o3(t){const e=t.type.value;switch(e){case"button":a3(t),xh.isVisible=!0;break;case"slider":l3(t),xh.isVisible=!0;break;default:console.warn("Unknown component type:",e)}}function a3(t){const e={id:Date.now(),component:"Button",label:t.label?.value,props:{text:t.text.value,variant:t.variant.value},action:t.guid.value};Xf.push(e)}function l3(t){const e={id:Date.now(),component:"Slider",label:t.label?.value,props:{min:t.min.value,max:t.max.value,step:t.step.value,defaultValue:[t.default_value.value]},action:t.guid.value};Xf.push(e)}function og(t,e){const n={dispatch:"ui_callback",action:t,value:null};e!==void 0&&(n.value=e),R_(n)}class c3 extends ff{constructor(e,n={}){const i=n.font;if(i===void 0)super();else{const r=i.generateShapes(e,n.size,n.direction);n.depth===void 0&&(n.depth=50),n.bevelThickness===void 0&&(n.bevelThickness=10),n.bevelSize===void 0&&(n.bevelSize=8),n.bevelEnabled===void 0&&(n.bevelEnabled=!1),super(r,n)}this.type="TextGeometry"}}class u3 extends df{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new cM(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));n&&n(l)},i,r)}parse(e){return new h3(e)}}class h3{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,n=100,i="ltr"){const r=[],s=f3(e,n,this.data,i);for(let o=0,a=s.length;o<a;o++)r.push(...s[o].toShapes());return r}}function f3(t,e,n,i){const r=Array.from(t),s=e/n.resolution,o=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*s,a=[];let l=0,c=0;(i=="rtl"||i=="tb")&&r.reverse();for(let u=0;u<r.length;u++){const h=r[u];if(h===`
`)l=0,c-=o;else{const d=d3(h,s,l,c,n);i=="tb"?(l=0,c+=n.ascender*s):l+=d.offsetX,a.push(d.path)}}return a}function d3(t,e,n,i,r){const s=r.glyphs[t]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}const o=new bM;let a,l,c,u,h,d,p,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,f=_.length;m<f;)switch(_[m++]){case"m":a=_[m++]*e+n,l=_[m++]*e+i,o.moveTo(a,l);break;case"l":a=_[m++]*e+n,l=_[m++]*e+i,o.lineTo(a,l);break;case"q":c=_[m++]*e+n,u=_[m++]*e+i,h=_[m++]*e+n,d=_[m++]*e+i,o.quadraticCurveTo(h,d,c,u);break;case"b":c=_[m++]*e+n,u=_[m++]*e+i,h=_[m++]*e+n,d=_[m++]*e+i,p=_[m++]*e+n,g=_[m++]*e+i,o.bezierCurveTo(h,d,p,g,c,u);break}}return{offsetX:s.ha*e,path:o}}function p3(t){t.type.value==="text_geometry"&&g3(t)}const ru={};async function m3(t,e){const n=`${t}_${e}`;if(ru[n])return ru[n];const i=new u3,r=`/fonts/${n}.typeface.json`;return new Promise((s,o)=>{i.load(r,a=>{ru[n]=a,s(a)},void 0,a=>o(a))})}async function g3(t){const e=t.text.value,n=t.font.value,i=t.weight.value,r=t.depth.value,s=t.size.value,o=await m3(n,i),a=new c3(e,{font:o,size:s,depth:r});let l;if(tr[t.guid.value]){const x=tr[t.guid.value];l=$s[x]}else l=new to({color:65535,side:wn});let c;t.centered.value?(a.computeBoundingBox(),c=-.5*(a.boundingBox.max.x-a.boundingBox.min.x)):c=0;const u=new P(t.point_x.value,t.point_y.value,t.point_z.value),h=new P(t.direction_x.value,t.direction_y.value,t.direction_z.value),d=new P(t.up_x.value,t.up_y.value,t.up_z.value),p=new P().crossVectors(h,d).normalize(),g=h.clone().normalize(),_=d.clone().normalize(),m=new ht().makeBasis(g,_,p);m.setPosition(u);const f=new _e(a,l);f.position.x=c,f.applyMatrix4(m),Wn[t.guid.value]=f,Rt.add(f)}function _3(){Tr.isVisible=!0}function C_(){Tr.isVisible=!1}function P_(t){delete t.dispatch,Tr.data=t}document.addEventListener("keydown",t=>{(t.key==="I"||t.key==="i")&&(Tr.isVisible?C_():_3())});let Rl=!1;const fl=new Map;function v3(t){Rl=t,t||y3()}function x3(){return v3(!Rl),Rl}function y3(){if(!fl.size)return;const t=Array.from(fl.values());fl.clear(),t.forEach(e=>x_(e))}function b3(t){T_(t);const e=ZP(t);if(e instanceof E_){S3(e);return}else{if(Rl&&e?.guid&&e.guid in Wn){fl.set(e.guid,e);return}x_(e)}}function S3(t){const e=t.data.items;switch(e.dispatch.value){case"material":um(e);break;case"light":rg(e);break;case"scene":V3(e);break;case"ui":o3(e);break;case"text":p3(e);break;case"object_infos":P_(e);break;case"remove_object":G3(e);break;default:console.warn("Unknown dispatch value:",e.dispatch.value)}e.dispatch.value=="material"?um(e):e.dispatch.value=="light"&&rg(e)}let Wi=null;function M3(){const t=()=>{Wi=new WebSocket("ws://127.0.0.1:9001/ws"),Wi.binaryType="arraybuffer",Wi.onopen=()=>{sessionStorage.getItem("reloaded")||(sessionStorage.setItem("reloaded","true"),window.location.reload())},Wi.onmessage=e=>{if(e.data instanceof ArrayBuffer){const n=new Uint8Array(e.data);b3(n)}else console.warn("❓ Received non-binary data:",e.data)},Wi.onerror=e=>{console.error("WebSocket error:",e)},Wi.onclose=()=>{sessionStorage.removeItem("reloaded"),setTimeout(t,1e3)}};t()}function w3(t){Wi&&Wi.readyState===WebSocket.OPEN?Wi.send(t):console.error("WebSocket is not open. Unable to send message.")}function R_(t){try{const e=JSON.stringify(t),n=E3(e);w3(n)}catch{}}function E3(t){return new TextEncoder().encode(t).buffer}let Dl,Bs,Zs,T3=!1;function zs(t){!Zs||T3||Zs.setMode(t)}class A3{tControl;constructor(){this.tControl=new IA(Ft,An.domElement),Rt.add(this.tControl.getHelper()),this.setupEventListeners()}setupEventListeners(){this.tControl.addEventListener("dragging-changed",e=>{En.enabled=!e.value}),window.addEventListener("keydown",e=>{if(!(e.altKey||e.ctrlKey||e.metaKey))switch(e.key){case"w":case"W":zs("translate");break;case"e":case"E":zs("rotate");break;case"s":case"S":case"r":case"R":zs("scale");break;case"Escape":case"Esc":this.tControl.detach();break}})}get controls(){return this.tControl}}class C3{raycaster;pickedObject;constructor(){this.raycaster=new u_,this.pickedObject=null}pick(e,n){if(!A_.value)return;this.raycaster.setFromCamera(e,Ft);const i=this.raycaster.intersectObjects(Wn?Object.values(Wn):[],!0);if(i.length){this.pickedObject=i[0].object,Zs.attach(this.pickedObject);const r=Object.keys(Wn).find(o=>Wn[o]===this.pickedObject);R_({dispatch:"object_picked",guid:r}),console.log("Picked object key:",r)}else this.pickedObject&&(this.pickedObject=null,Zs.detach(),P_(null))}}function P3(t){const e=Bs.getBoundingClientRect();return{x:(t.clientX-e.left)*(Bs.width/e.width),y:(t.clientY-e.top)*(Bs.height/e.height)}}function R3(t){const e=P3(t);Dl.x=e.x/Bs.width*2-1,Dl.y=e.y/Bs.height*-2+1}function D3(t){return Bs=document.querySelector("canvas"),Dl={x:0,y:0},Zs=new A3().controls,window.addEventListener("mousedown",n=>{n.button===0&&(Zs.dragging||(R3(n),t.pick(Dl,Rt)))}),t}Tt.DEFAULT_UP.set(0,0,1);const Rt=new _S,Ft=new Ln(60,window.innerWidth/window.innerHeight,.1,1e3);Ft.position.set(8,-15,15);Ft.zoom=1;const An=new _A({antialias:!0});An.setSize(window.innerWidth,window.innerHeight);An.setPixelRatio(window.devicePixelRatio);An.toneMapping=Xh;An.shadowMap.enabled=!0;An.shadowMap.type=E0;An.toneMappingExposure=2.5;An.physicallyCorrectLights=!0;An.outputColorSpace=zn;document.body.appendChild(An.domElement);const En=new xA(Ft,An.domElement);En.enableDamping=!0;En.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:Qr.ROTATE};const I3=16777215,D_=0;let I_="none";const yh=new Set;function L_(){const t=Zl();yh.forEach(e=>e(t))}function N_(t){return yh.add(t),t(Zl()),()=>{yh.delete(t)}}const L3={top:new P(0,0,1),bottom:new P(0,0,-1),front:new P(0,-1,0),back:new P(0,1,0),left:new P(-1,0,0),right:new P(1,0,0),front_left:new P(-1,-1,1),front_right:new P(1,-1,1),back_left:new P(-1,1,1),back_right:new P(1,1,1)},N3=new Map([["Numpad5","top"],["Numpad0","bottom"],["Numpad2","front"],["Numpad8","back"],["Numpad4","left"],["Numpad6","right"],["Numpad1","front_left"],["Numpad3","front_right"],["Numpad7","back_left"],["Numpad9","back_right"]]),U_=new h_(5);Rt.add(U_);const U3=new C3;D3(U3);function O_(){En.update(),An.render(Rt,Ft)}function F_(){O_(),requestAnimationFrame(F_)}F_();window.addEventListener("keydown",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=z3(t.code);e&&(qf(e),t.preventDefault())});window.addEventListener("resize",()=>{Ft.aspect=window.innerWidth/window.innerHeight,Ft.updateProjectionMatrix(),An.setSize(window.innerWidth,window.innerHeight)});function qf(t){const e=En.target.clone(),n=L3[t].clone().normalize(),i=Ft.position.distanceTo(e);Ft.position.copy(e.clone().add(n.multiplyScalar(i))),En.update()}function $a(t){qf(t)}function O3(t){return{id:`view-${Date.now()}`,name:t,cameraPosition:{x:Ft.position.x,y:Ft.position.y,z:Ft.position.z},target:{x:En.target.x,y:En.target.y,z:En.target.z},zoom:Ft.zoom,fov:Ft.fov}}function F3(t){Ft.position.set(t.cameraPosition.x,t.cameraPosition.y,t.cameraPosition.z),En.target.set(t.target.x,t.target.y,t.target.z),Ft.zoom=t.zoom,Ft.fov=t.fov,Ft.updateProjectionMatrix(),En.update()}function ag(t){I_=t;const e=t==="dark"?D_:I3;return Rt.background=new $e(e),L_(),Zl()}function k3(){return Zl()==="dark"?ag("light"):ag("dark")}function Zl(){return Rt.background instanceof $e&&Rt.background.getHex()===D_?"dark":"light"}function B3(t){O_();const e=document.createElement("a");e.download=`compas-view-${new Date().toISOString().replace(/[:.]/g,"-")}.png`,e.href=An.domElement.toDataURL("image/png"),e.click()}function z3(t){return N3.get(t)??null}function V3(t){switch(t.type.value){case"background_color":H3(t);break;case"controls_damping":En.enableDamping=t.damping.value;break;case"world_axis":U_.visible=t.show.value;break;case"picker":A_.value=t.enabled.value;break;case"camera_fov":Ft.fov=t.fov.value,Ft.updateProjectionMatrix();break;case"camera_zoom":Ft.zoom=t.zoom.value,Ft.updateProjectionMatrix();break;case"camera_position":Ft.position.set(t.x.value,t.y.value,t.z.value),En.update();break;case"camera_target":En.target.set(t.x.value,t.y.value,t.z.value),En.update();break;case"camera_view":{const e=t.preset.value;e&&qf(e);break}default:console.warn("Unknown scene type:",t.type.value)}}function H3(t){let e=t.color.value;e=e.replace("#","0x"),e=parseInt(e),I_==="none"&&(Rt.background=new $e(e)),L_()}function G3(t){const e=t.guid.value;if(e in Wn){const n=Wn[e];Rt.remove(n),delete Wn[e]}e in tr&&delete tr[e]}const W3={class:"toolbar-group"},X3=["title","onClick"],q3={key:1},Y3={class:"toolbar-group"},J3=["title","onClick"],$3={key:1},K3={class:"toolbar-group"},Z3=["title","onClick"],Q3={key:1},j3={key:0,class:"saved-views-panel"},eR=["value"],lg="compas_threejs_saved_views",tR=Kt({__name:"Toolbar",setup(t){const e=Wt([]),n=Wt(""),i=Wt(!1),r=Wt(!1);let s=null;function o(){localStorage.setItem(lg,JSON.stringify(e.value))}function a(){const _=localStorage.getItem(lg);if(_)try{const m=JSON.parse(_);Array.isArray(m)&&(e.value=m)}catch{e.value=[]}}function l(){const _=e.value.find(m=>m.id===n.value);_&&F3(_)}const c=$n([{id:"move",iconComponent:Yy,tooltip:"Move (W)",active:!1},{id:"rotate",iconComponent:Ky,tooltip:"Rotate (E)",active:!1},{id:"scale",iconComponent:Qy,tooltip:"Scale (S)",active:!1},{id:"toggle-movement",icon:"⏸",tooltip:"Play/Pause Movements (Space)",active:!1}]),u=$n([{id:"view-top",iconComponent:$y,tooltip:"Top View (5)"},{id:"view-front",iconComponent:jy,tooltip:"Front View (2)"},{id:"view-right",iconComponent:Jy,tooltip:"Right View (6)"},{id:"view-perspective",iconComponent:Xy,tooltip:"Perspective View (3)"}]),h=$n([{id:"save-view",iconComponent:Zy,tooltip:"Save Current View"},{id:"saved-views",iconComponent:Wy,tooltip:"Saved Views"},{id:"toggle-background",icon:"◐",tooltip:"Toggle Dark/Light Background",active:!1},{id:"save-screenshot",iconComponent:qy,tooltip:"Save as PNG"}]),d=_=>{switch(_!=="toggle-movement"&&c.forEach(m=>{m.id!=="toggle-movement"&&(m.active=m.id===_)}),_){case"move":zs("translate");break;case"rotate":zs("rotate");break;case"scale":zs("scale");break;case"toggle-movement":const m=c.find(f=>f.id===_);if(m){const f=x3();m.active=f,m.icon=f?"▶":"⏸"}break}},p=_=>{switch(_){case"view-top":$a("top");break;case"view-front":$a("front");break;case"view-right":$a("right");break;case"view-perspective":$a("front_right");break}},g=_=>{switch(_){case"save-view":{const f=`View ${e.value.length+1}`,x=window.prompt("Name for saved view",f);if(x===null)break;const y=x.trim()||f,b=O3(y);e.value=[...e.value,b],n.value=b.id,i.value=!0,o();break}case"saved-views":{i.value=!i.value;break}case"toggle-background":const m=h.find(f=>f.id==="toggle-background");if(m){const f=k3();m.active=f==="dark"}break;case"save-screenshot":B3();break}};return js(()=>{a(),s=N_(m=>{r.value=m==="dark";const f=h.find(x=>x.id==="toggle-background");f&&(f.active=m==="dark")});const _=m=>{const f=m.key.toLowerCase();if(!(m.ctrlKey||m.metaKey||m.altKey))switch(f){case"w":m.preventDefault(),d("move");break;case"e":m.preventDefault(),d("rotate");break;case"s":m.preventDefault(),d("scale");break;case" ":m.preventDefault(),d("toggle-movement");break;case"2":m.preventDefault(),p("view-front");break;case"3":m.preventDefault(),p("view-perspective");break;case"5":m.preventDefault(),p("view-top");break;case"6":m.preventDefault(),p("view-right");break}};return document.addEventListener("keydown",_),()=>{document.removeEventListener("keydown",_)}}),Bh(()=>{s&&(s(),s=null)}),(_,m)=>(Ye(),Nt("div",{class:Vn(["toolbar",{"is-dark":r.value}])},[sn("div",W3,[(Ye(!0),Nt(kt,null,yr(c,f=>(Ye(),Nt("button",{key:f.id,class:Vn(["toolbar-button",{active:f.active}]),title:f.tooltip,onClick:x=>d(f.id)},[sn("span",{class:Vn(["button-icon",{"front-icon":f.id==="view-front","pause-icon":f.id==="toggle-movement"&&f.icon==="⏸"}])},[f.iconComponent?(Ye(),Ut(el(f.iconComponent),{key:0,size:16,"stroke-width":2,"aria-hidden":"true"})):(Ye(),Nt("span",q3,ni(f.icon),1))],2)],10,X3))),128))]),sn("div",Y3,[(Ye(!0),Nt(kt,null,yr(u,f=>(Ye(),Nt("button",{key:f.id,class:"toolbar-button",title:f.tooltip,onClick:x=>p(f.id)},[sn("span",{class:Vn(["button-icon",{"front-icon":f.id==="view-front","pause-icon":f.id==="toggle-movement"&&f.icon==="⏸"}])},[f.iconComponent?(Ye(),Ut(el(f.iconComponent),{key:0,size:16,"stroke-width":2,"aria-hidden":"true"})):(Ye(),Nt("span",$3,ni(f.icon),1))],2)],8,J3))),128))]),sn("div",K3,[(Ye(!0),Nt(kt,null,yr(h,f=>(Ye(),Nt("button",{key:f.id,class:Vn(["toolbar-button",{active:f.active}]),title:f.tooltip,onClick:x=>g(f.id)},[sn("span",{class:Vn(["button-icon",{"front-icon":f.id==="view-front","pause-icon":f.id==="toggle-movement"&&f.icon==="⏸"}])},[f.iconComponent?(Ye(),Ut(el(f.iconComponent),{key:0,size:16,"stroke-width":2,"aria-hidden":"true"})):(Ye(),Nt("span",Q3,ni(f.icon),1))],2)],10,Z3))),128))]),i.value?(Ye(),Nt("div",j3,[cx(sn("select",{"onUpdate:modelValue":m[0]||(m[0]=f=>n.value=f),class:"saved-views-select",onChange:l},[m[1]||(m[1]=sn("option",{disabled:"",value:""},"Select view",-1)),(Ye(!0),Nt(kt,null,yr(e.value,f=>(Ye(),Nt("option",{key:f.id,value:f.id},ni(f.name),9,eR))),128))],544),[[Ly,n.value]])])):Mr("",!0)],2))}}),Ql=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},nR=Ql(tR,[["__scopeId","data-v-505385b4"]]);function k_(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=k_(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function B_(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=k_(t))&&(i&&(i+=" "),i+=e);return i}const cg=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,ug=B_,iR=(t,e)=>n=>{var i;if(e?.variants==null)return ug(t,n?.class,n?.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const u=n?.[c],h=s?.[c];if(u===null)return null;const d=cg(u)||cg(h);return r[c][d]}),a=n&&Object.entries(n).reduce((c,u)=>{let[h,d]=u;return d===void 0||(c[h]=d),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,u)=>{let{class:h,className:d,...p}=u;return Object.entries(p).every(g=>{let[_,m]=g;return Array.isArray(m)?m.includes({...s,...a}[_]):{...s,...a}[_]===m})?[...c,h,d]:c},[]);return ug(t,o,l,n?.class,n?.className)};function z_(t,e=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY){return Math.min(n,Math.max(e,t))}function Yf(t,e){const n=typeof t=="string"&&!e?`${t}Context`:e,i=Symbol(n);return[o=>{const a=Ls(i,o);if(a||a===null)return a;throw new Error(`Injection \`${i.toString()}\` not found. Component must be used within ${Array.isArray(t)?`one of the following components: ${t.join(", ")}`:`\`${t}\``}`)},o=>(Oh(i,o),o)]}function V_(t){return t?t.flatMap(e=>e.type===kt?V_(e.children):[e]):[]}const[rR]=Yf("ConfigProvider");typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const sR=t=>typeof t<"u";function oR(t){return $n(qt(t)?new Proxy({},{get(e,n,i){return ve(Reflect.get(t.value,n,i))},set(e,n,i){return qt(t.value[n])&&!qt(i)?t.value[n].value=i:t.value[n]=i,!0},deleteProperty(e,n){return Reflect.deleteProperty(t.value,n)},has(e,n){return Reflect.has(t.value,n)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}}):t)}function aR(t){return oR(pt(t))}function lR(t,...e){const n=e.flat(),i=n[0];return aR(()=>Object.fromEntries(typeof i=="function"?Object.entries(Ho(t)).filter(([r,s])=>!i(Lh(s),r)):Object.entries(Ho(t)).filter(r=>!n.includes(r[0]))))}function jl(t){var e;const n=Lh(t);return(e=n?.$el)!==null&&e!==void 0?e:n}function cR(){const t=Kv(!1),e=eo();return e&&js(()=>{t.value=!0},e),t}function uR(t){return JSON.parse(JSON.stringify(t))}function hR(t,e,n,i={}){var r,s;const{clone:o=!1,passive:a=!1,eventName:l,deep:c=!1,defaultValue:u,shouldEmit:h}=i,d=eo(),p=n||d?.emit||(d==null||(r=d.$emit)===null||r===void 0?void 0:r.bind(d))||(d==null||(s=d.proxy)===null||s===void 0||(s=s.$emit)===null||s===void 0?void 0:s.bind(d?.proxy));let g=l;g=g||`update:${e.toString()}`;const _=x=>o?typeof o=="function"?o(x):uR(x):x,m=()=>sR(t[e])?_(t[e]):u,f=x=>{h?h(x)&&p(g,x):p(g,x)};if(a){const x=Wt(m());let y=!1;return Zr(()=>t[e],b=>{y||(y=!0,x.value=_(b),Nh(()=>y=!1))}),Zr(x,b=>{!y&&(b!==t[e]||c)&&f(b)},{deep:c}),x}else return pt({get(){return m()},set(x){f(x)}})}function fR(t){const e=rR({dir:Wt("ltr")});return pt(()=>t?.value||e.dir?.value||"ltr")}function dR(t){const e=eo(),n=e?.type.emits,i={};return n?.length||console.warn(`No emitted event found. Please check component: ${e?.type.__name}`),n?.forEach(r=>{i[Qa(Un(r))]=(...s)=>t(r,...s)}),i}function pR(t){return pt(()=>Lh(t)?!!jl(t)?.closest("form"):!0)}function os(){const t=eo(),e=Wt(),n=pt(()=>["#text","#comment"].includes(e.value?.$el.nodeName)?e.value?.$el.nextElementSibling:jl(e)),i=Object.assign({},t.exposed),r={};for(const o in t.props)Object.defineProperty(r,o,{enumerable:!0,configurable:!0,get:()=>t.props[o]});if(Object.keys(i).length>0)for(const o in i)Object.defineProperty(r,o,{enumerable:!0,configurable:!0,get:()=>i[o]});Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>t.vnode.el}),t.exposed=r;function s(o){if(e.value=o,!!o&&(Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>o instanceof Element?o:o.$el}),!(o instanceof Element)&&!Object.hasOwn(o,"$el"))){const a=o.$.exposed,l=Object.assign({},r);for(const c in a)Object.defineProperty(l,c,{enumerable:!0,configurable:!0,get:()=>a[c]});t.exposed=l}}return{forwardRef:s,currentRef:e,currentElement:n}}function mR(t){const e=eo(),n=Object.keys(e?.type.props??{}).reduce((r,s)=>{const o=(e?.type.props[s]).default;return o!==void 0&&(r[s]=o),r},{}),i=tx(t);return pt(()=>{const r={},s=e?.vnode.props??{};return Object.keys(s).forEach(o=>{r[Un(o)]=s[o]}),Object.keys({...n,...r}).reduce((o,a)=>(i.value[a]!==void 0&&(o[a]=i.value[a]),o),{})})}function gR(t,e){const n=mR(t),i=e?dR(e):{};return pt(()=>({...n.value,...i}))}function _R(t){const e=Wt(),n=pt(()=>e.value?.width??0),i=pt(()=>e.value?.height??0);return js(()=>{const r=jl(t);if(r){e.value={width:r.offsetWidth,height:r.offsetHeight};const s=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const a=o[0];let l,c;if("borderBoxSize"in a){const u=a.borderBoxSize,h=Array.isArray(u)?u[0]:u;l=h.inlineSize,c=h.blockSize}else l=r.offsetWidth,c=r.offsetHeight;e.value={width:l,height:c}});return s.observe(r,{box:"border-box"}),()=>s.unobserve(r)}else e.value=void 0}),{width:n,height:i}}const bh=Kt({name:"PrimitiveSlot",inheritAttrs:!1,setup(t,{attrs:e,slots:n}){return()=>{if(!n.default)return null;const i=V_(n.default()),r=i.findIndex(l=>l.type!==Ti);if(r===-1)return i;const s=i[r];delete s.props?.ref;const o=s.props?Ai(e,s.props):e,a=jr({...s,props:{}},o);return i.length===1?a:(i[r]=a,i)}}}),vR=["area","img","input"],io=Kt({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(t,{attrs:e,slots:n}){const i=t.asChild?"template":t.as;return typeof i=="string"&&vR.includes(i)?()=>wr(i,e):i!=="template"?()=>wr(t.as,e,{default:n.default}):()=>wr(bh,e,{default:n.default})}});function Sh(){const t=Wt(),e=pt(()=>["#text","#comment"].includes(t.value?.$el.nodeName)?t.value?.$el.nextElementSibling:jl(t));return{primitiveElement:t,currentElement:e}}const hg="data-reka-collection-item";function Jf(t={}){const{key:e="",isProvider:n=!1}=t,i=`${e}CollectionProvider`;let r;n?(r={collectionRef:Wt(),itemMap:Wt(new Map)},Oh(i,r)):r=Ls(i);const s=(u=!1)=>{const h=r.collectionRef.value;if(!h)return[];const d=Array.from(h.querySelectorAll(`[${hg}]`)),g=Array.from(r.itemMap.value.values()).sort((_,m)=>d.indexOf(_.ref)-d.indexOf(m.ref));return u?g:g.filter(_=>_.ref.dataset.disabled!=="")},o=Kt({name:"CollectionSlot",inheritAttrs:!1,setup(u,{slots:h,attrs:d}){const{primitiveElement:p,currentElement:g}=Sh();return Zr(g,()=>{r.collectionRef.value=g.value}),()=>wr(bh,{ref:p,...d},h)}}),a=Kt({name:"CollectionItem",inheritAttrs:!1,props:{value:{validator:()=>!0}},setup(u,{slots:h,attrs:d}){const{primitiveElement:p,currentElement:g}=Sh();return fx(_=>{if(g.value){const m=Vg(g.value);r.itemMap.value.set(m,{ref:g.value,value:u.value}),_(()=>r.itemMap.value.delete(m))}}),()=>wr(bh,{...d,[hg]:"",ref:p},h)}}),l=pt(()=>Array.from(r.itemMap.value.values())),c=pt(()=>r.itemMap.value.size);return{getItems:s,reactiveItems:l,itemMapSize:c,CollectionSlot:o,CollectionItem:a}}var xR=Kt({__name:"VisuallyHidden",props:{feature:{type:String,required:!1,default:"focusable"},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){return(e,n)=>(Ye(),Ut(ve(io),{as:e.as,"as-child":e.asChild,"aria-hidden":e.feature==="focusable"?"true":void 0,"data-hidden":e.feature==="fully-hidden"?"":void 0,tabindex:e.feature==="fully-hidden"?"-1":void 0,style:{position:"absolute",border:0,width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",whiteSpace:"nowrap",wordWrap:"normal",top:"-1px",left:"-1px"}},{default:jt(()=>[Pi(e.$slots,"default")]),_:3},8,["as","as-child","aria-hidden","data-hidden","tabindex"]))}}),yR=xR,bR=Kt({inheritAttrs:!1,__name:"VisuallyHiddenInputBubble",props:{name:{type:String,required:!0},value:{type:null,required:!0},checked:{type:Boolean,required:!1,default:void 0},required:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},feature:{type:String,required:!1,default:"fully-hidden"}},setup(t){const e=t,{primitiveElement:n,currentElement:i}=Sh(),r=pt(()=>e.checked??e.value);return Zr(r,(s,o)=>{if(!i.value)return;const a=i.value,l=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(l,"value").set;if(u&&s!==o){const h=new Event("input",{bubbles:!0}),d=new Event("change",{bubbles:!0});u.call(a,s),a.dispatchEvent(h),a.dispatchEvent(d)}}),(s,o)=>(Ye(),Ut(yR,Ai({ref_key:"primitiveElement",ref:n},{...e,...s.$attrs},{as:"input"}),null,16))}}),fg=bR,SR=Kt({inheritAttrs:!1,__name:"VisuallyHiddenInput",props:{name:{type:String,required:!0},value:{type:null,required:!0},checked:{type:Boolean,required:!1,default:void 0},required:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},feature:{type:String,required:!1,default:"fully-hidden"}},setup(t){const e=t,n=pt(()=>typeof e.value=="object"&&Array.isArray(e.value)&&e.value.length===0&&e.required),i=pt(()=>typeof e.value=="string"||typeof e.value=="number"||typeof e.value=="boolean"||e.value===null||e.value===void 0?[{name:e.name,value:e.value}]:typeof e.value=="object"&&Array.isArray(e.value)?e.value.flatMap((r,s)=>typeof r=="object"?Object.entries(r).map(([o,a])=>({name:`${e.name}[${s}][${o}]`,value:a})):{name:`${e.name}[${s}]`,value:r}):e.value!==null&&typeof e.value=="object"&&!Array.isArray(e.value)?Object.entries(e.value).map(([r,s])=>({name:`${e.name}[${r}]`,value:s})):[]);return(r,s)=>(Ye(),Nt(kt,null,[Mr(" We render single input if it's required "),n.value?(Ye(),Ut(fg,Ai({key:r.name},{...e,...r.$attrs},{name:r.name,value:r.value}),null,16,["name","value"])):(Ye(!0),Nt(kt,{key:1},yr(i.value,o=>(Ye(),Ut(fg,Ai({key:o.name},{ref_for:!0},{...e,...r.$attrs},{name:o.name,value:o.value}),null,16,["name","value"]))),128))],2112))}}),MR=SR;function wR(t=[],e,n){const i=[...t];return i[n]=e,i.sort((r,s)=>r-s)}function H_(t,e,n){const s=100/(n-e)*(t-e);return z_(s,0,100)}function ER(t,e){return e>2?`Value ${t+1} of ${e}`:e===2?["Minimum","Maximum"][t]:void 0}function TR(t,e){if(t.length===1)return 0;const n=t.map(r=>Math.abs(r-e)),i=Math.min(...n);return n.indexOf(i)}function AR(t,e,n){const i=t/2,s=$f([0,50],[0,i]);return(i-s(e)*n)*n}function CR(t){return t.slice(0,-1).map((e,n)=>t[n+1]-e)}function PR(t,e){if(e>0){const n=CR(t);return Math.min(...n)>=e}return!0}function $f(t,e){return n=>{if(t[0]===t[1]||e[0]===e[1])return e[0];const i=(e[1]-e[0])/(t[1]-t[0]);return e[0]+i*(n-t[0])}}function RR(t){return(String(t).split(".")[1]||"").length}function DR(t,e){const n=10**e;return Math.round(t*n)/n}const G_=["PageUp","PageDown"],W_=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],X_={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageUp","ArrowUp","ArrowLeft"]},[q_,Y_]=Yf(["SliderVertical","SliderHorizontal"]);var IR=Kt({__name:"SliderHorizontal",props:{dir:{type:String,required:!1},min:{type:Number,required:!0},max:{type:Number,required:!0},inverted:{type:Boolean,required:!0}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(t,{emit:e}){const n=t,i=e,{max:r,min:s,dir:o,inverted:a}=Ho(n),{forwardRef:l,currentElement:c}=os(),u=ro(),h=Wt(),d=Wt(),p=pt(()=>o?.value!=="rtl"&&!a.value||o?.value!=="ltr"&&a.value);function g(x,y){const b=d.value||c.value.getBoundingClientRect(),T=[...u.thumbElements.value][u.valueIndexToChangeRef.value],C=u.thumbAlignment.value==="contain"?T.clientWidth:0;!h.value&&!y&&u.thumbAlignment.value==="contain"&&(h.value=x.clientX-T.getBoundingClientRect().left);const D=[0,b.width-C],R=p.value?[s.value,r.value]:[r.value,s.value],S=$f(D,R);d.value=b;const M=y?x.clientX-b.left-C/2:x.clientX-b.left-(h.value??0);return S(M)}const _=pt(()=>p.value?"left":"right"),m=pt(()=>p.value?"right":"left"),f=pt(()=>p.value?1:-1);return Y_({startEdge:_,endEdge:m,direction:f,size:"width"}),(x,y)=>(Ye(),Ut(J_,{ref:ve(l),dir:ve(o),"data-orientation":"horizontal",style:Qs({"--reka-slider-thumb-transform":!p.value&&ve(u).thumbAlignment.value==="overflow"?"translateX(50%)":"translateX(-50%)"}),onSlideStart:y[0]||(y[0]=b=>{const T=g(b,!0);i("slideStart",T)}),onSlideMove:y[1]||(y[1]=b=>{const T=g(b);i("slideMove",T)}),onSlideEnd:y[2]||(y[2]=()=>{d.value=void 0,h.value=void 0,i("slideEnd")}),onStepKeyDown:y[3]||(y[3]=b=>{const T=p.value?"from-left":"from-right",C=ve(X_)[T].includes(b.key);i("stepKeyDown",b,C?-1:1)}),onEndKeyDown:y[4]||(y[4]=b=>i("endKeyDown",b)),onHomeKeyDown:y[5]||(y[5]=b=>i("homeKeyDown",b))},{default:jt(()=>[Pi(x.$slots,"default")]),_:3},8,["dir","style"]))}}),LR=IR,NR=Kt({__name:"SliderVertical",props:{min:{type:Number,required:!0},max:{type:Number,required:!0},inverted:{type:Boolean,required:!0}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(t,{emit:e}){const n=t,i=e,{max:r,min:s,inverted:o}=Ho(n),a=ro(),{forwardRef:l,currentElement:c}=os(),u=Wt(),h=Wt(),d=pt(()=>!o.value);function p(f,x){const y=h.value||c.value.getBoundingClientRect(),b=[...a.thumbElements.value][a.valueIndexToChangeRef.value],T=a.thumbAlignment.value==="contain"?b.clientHeight:0;!u.value&&!x&&a.thumbAlignment.value==="contain"&&(u.value=f.clientY-b.getBoundingClientRect().top);const C=[0,y.height-T],D=d.value?[r.value,s.value]:[s.value,r.value],R=$f(C,D),S=x?f.clientY-y.top-T/2:f.clientY-y.top-(u.value??0);return h.value=y,R(S)}const g=pt(()=>d.value?"bottom":"top"),_=pt(()=>d.value?"top":"bottom"),m=pt(()=>d.value?1:-1);return Y_({startEdge:g,endEdge:_,direction:m,size:"height"}),(f,x)=>(Ye(),Ut(J_,{ref:ve(l),"data-orientation":"vertical",style:Qs({"--reka-slider-thumb-transform":!d.value&&ve(a).thumbAlignment.value==="overflow"?"translateY(-50%)":"translateY(50%)"}),onSlideStart:x[0]||(x[0]=y=>{const b=p(y,!0);i("slideStart",b)}),onSlideMove:x[1]||(x[1]=y=>{const b=p(y);i("slideMove",b)}),onSlideEnd:x[2]||(x[2]=()=>{h.value=void 0,u.value=void 0,i("slideEnd")}),onStepKeyDown:x[3]||(x[3]=y=>{const b=d.value?"from-bottom":"from-top",T=ve(X_)[b].includes(y.key);i("stepKeyDown",y,T?-1:1)}),onEndKeyDown:x[4]||(x[4]=y=>i("endKeyDown",y)),onHomeKeyDown:x[5]||(x[5]=y=>i("homeKeyDown",y))},{default:jt(()=>[Pi(f.$slots,"default")]),_:3},8,["style"]))}}),UR=NR;const[ro,OR]=Yf("SliderRoot");var FR=Kt({inheritAttrs:!1,__name:"SliderRoot",props:{defaultValue:{type:Array,required:!1,default:()=>[0]},modelValue:{type:[Array,null],required:!1},disabled:{type:Boolean,required:!1,default:!1},orientation:{type:String,required:!1,default:"horizontal"},dir:{type:String,required:!1},inverted:{type:Boolean,required:!1,default:!1},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},step:{type:Number,required:!1,default:1},minStepsBetweenThumbs:{type:Number,required:!1,default:0},thumbAlignment:{type:String,required:!1,default:"contain"},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue","valueCommit"],setup(t,{emit:e}){const n=t,i=e,{min:r,max:s,step:o,minStepsBetweenThumbs:a,orientation:l,disabled:c,thumbAlignment:u,dir:h}=Ho(n),d=fR(h),{forwardRef:p,currentElement:g}=os(),_=pR(g),{CollectionSlot:m}=Jf({isProvider:!0}),f=hR(n,"modelValue",i,{defaultValue:n.defaultValue,passive:n.modelValue===void 0}),x=pt(()=>Array.isArray(f.value)?[...f.value]:[]),y=Wt(0),b=Wt(x.value);function T(M){const L=TR(x.value,M);R(M,L)}function C(M){R(M,y.value)}function D(){const M=b.value[y.value];x.value[y.value]!==M&&i("valueCommit",_t(x.value))}function R(M,L,{commit:V}={commit:!1}){const q=RR(o.value),j=DR(Math.round((M-r.value)/o.value)*o.value+r.value,q),J=z_(j,r.value,s.value),W=wR(x.value,J,L);if(PR(W,a.value*o.value)){y.value=W.indexOf(J);const k=String(W)!==String(f.value);k&&V&&i("valueCommit",W),k&&(S.value[y.value]?.focus(),f.value=W)}}const S=Wt([]);return OR({modelValue:f,currentModelValue:x,valueIndexToChangeRef:y,thumbElements:S,orientation:l,min:r,max:s,disabled:c,thumbAlignment:u}),(M,L)=>(Ye(),Ut(ve(m),null,{default:jt(()=>[(Ye(),Ut(el(ve(l)==="horizontal"?LR:UR),Ai(M.$attrs,{ref:ve(p),"as-child":M.asChild,as:M.as,min:ve(r),max:ve(s),dir:ve(d),inverted:M.inverted,"aria-disabled":ve(c),"data-disabled":ve(c)?"":void 0,onPointerdown:L[0]||(L[0]=()=>{ve(c)||(b.value=x.value)}),onSlideStart:L[1]||(L[1]=V=>!ve(c)&&T(V)),onSlideMove:L[2]||(L[2]=V=>!ve(c)&&C(V)),onSlideEnd:L[3]||(L[3]=V=>!ve(c)&&D()),onHomeKeyDown:L[4]||(L[4]=V=>!ve(c)&&R(ve(r),0,{commit:!0})),onEndKeyDown:L[5]||(L[5]=V=>!ve(c)&&R(ve(s),x.value.length-1,{commit:!0})),onStepKeyDown:L[6]||(L[6]=(V,q)=>{if(!ve(c)){const W=ve(G_).includes(V.key)||V.shiftKey&&ve(W_).includes(V.key)?10:1,k=y.value,H=x.value[k],ce=ve(o)*W*q;R(H+ce,k,{commit:!0})}})}),{default:jt(()=>[Pi(M.$slots,"default",{modelValue:ve(f)}),ve(_)&&M.name?(Ye(),Ut(ve(MR),{key:0,type:"number",value:ve(f),name:M.name,required:M.required,disabled:ve(c),step:ve(o)},null,8,["value","name","required","disabled","step"])):Mr("v-if",!0)]),_:3},16,["as-child","as","min","max","dir","inverted","aria-disabled","data-disabled"]))]),_:3}))}}),kR=FR,BR=Kt({__name:"SliderImpl",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},emits:["slideStart","slideMove","slideEnd","homeKeyDown","endKeyDown","stepKeyDown"],setup(t,{emit:e}){const n=t,i=e,r=ro();return(s,o)=>(Ye(),Ut(ve(io),Ai({"data-slider-impl":""},n,{onKeydown:o[0]||(o[0]=a=>{a.key==="Home"?(i("homeKeyDown",a),a.preventDefault()):a.key==="End"?(i("endKeyDown",a),a.preventDefault()):ve(G_).concat(ve(W_)).includes(a.key)&&(i("stepKeyDown",a),a.preventDefault())}),onPointerdown:o[1]||(o[1]=a=>{const l=a.target;l.setPointerCapture(a.pointerId),a.preventDefault(),ve(r).thumbElements.value.includes(l)?l.focus():i("slideStart",a)}),onPointermove:o[2]||(o[2]=a=>{a.target.hasPointerCapture(a.pointerId)&&i("slideMove",a)}),onPointerup:o[3]||(o[3]=a=>{const l=a.target;l.hasPointerCapture(a.pointerId)&&(l.releasePointerCapture(a.pointerId),i("slideEnd",a))})}),{default:jt(()=>[Pi(s.$slots,"default")]),_:3},16))}}),J_=BR,zR=Kt({__name:"SliderRange",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const e=ro(),n=q_();os();const i=pt(()=>e.currentModelValue.value.map(o=>H_(o,e.min.value,e.max.value))),r=pt(()=>e.currentModelValue.value.length>1?Math.min(...i.value):0),s=pt(()=>100-Math.max(...i.value,0));return(o,a)=>(Ye(),Ut(ve(io),{"data-disabled":ve(e).disabled.value?"":void 0,"data-orientation":ve(e).orientation.value,"as-child":o.asChild,as:o.as,style:Qs({[ve(n).startEdge.value]:`${r.value}%`,[ve(n).endEdge.value]:`${s.value}%`})},{default:jt(()=>[Pi(o.$slots,"default")]),_:3},8,["data-disabled","data-orientation","as-child","as","style"]))}}),VR=zR,HR=Kt({inheritAttrs:!1,__name:"SliderThumbImpl",props:{index:{type:Number,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const e=t,n=ro(),i=q_(),{forwardRef:r,currentElement:s}=os(),{CollectionItem:o}=Jf(),a=pt(()=>n.modelValue?.value?.[e.index]),l=pt(()=>a.value===void 0?0:H_(a.value,n.min.value??0,n.max.value??100)),c=pt(()=>ER(e.index,n.modelValue?.value?.length??0)),u=_R(s),h=pt(()=>u[i.size].value),d=pt(()=>n.thumbAlignment.value==="overflow"||!h.value?0:AR(h.value,l.value,i.direction.value)),p=cR();return js(()=>{n.thumbElements.value.push(s.value)}),zh(()=>{const g=n.thumbElements.value.findIndex(_=>_===s.value)??-1;n.thumbElements.value.splice(g,1)}),(g,_)=>(Ye(),Ut(ve(o),null,{default:jt(()=>[Xt(ve(io),Ai(g.$attrs,{ref:ve(r),role:"slider",tabindex:ve(n).disabled.value?void 0:0,"aria-label":g.$attrs["aria-label"]||c.value,"data-disabled":ve(n).disabled.value?"":void 0,"data-orientation":ve(n).orientation.value,"aria-valuenow":a.value,"aria-valuemin":ve(n).min.value,"aria-valuemax":ve(n).max.value,"aria-orientation":ve(n).orientation.value,"as-child":g.asChild,as:g.as,style:{transform:"var(--reka-slider-thumb-transform)",position:"absolute",[ve(i).startEdge.value]:`calc(${l.value}% + ${d.value}px)`,display:!ve(p)&&a.value===void 0?"none":void 0},onFocus:_[0]||(_[0]=()=>{ve(n).valueIndexToChangeRef.value=g.index})}),{default:jt(()=>[Pi(g.$slots,"default")]),_:3},16,["tabindex","aria-label","data-disabled","data-orientation","aria-valuenow","aria-valuemin","aria-valuemax","aria-orientation","as-child","as","style"])]),_:3}))}}),GR=HR,WR=Kt({__name:"SliderThumb",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const e=t,{getItems:n}=Jf(),{forwardRef:i,currentElement:r}=os(),s=pt(()=>r.value?n(!0).findIndex(o=>o.ref===r.value):-1);return(o,a)=>(Ye(),Ut(GR,Ai({ref:ve(i)},e,{index:s.value}),{default:jt(()=>[Pi(o.$slots,"default")]),_:3},16,["index"]))}}),XR=WR,qR=Kt({__name:"SliderTrack",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const e=ro();return os(),(n,i)=>(Ye(),Ut(ve(io),{"as-child":n.asChild,as:n.as,"data-disabled":ve(e).disabled.value?"":void 0,"data-orientation":ve(e).orientation.value},{default:jt(()=>[Pi(n.$slots,"default")]),_:3},8,["as-child","as","data-disabled","data-orientation"]))}}),YR=qR;const JR=(t,e)=>{const n=new Array(t.length+e.length);for(let i=0;i<t.length;i++)n[i]=t[i];for(let i=0;i<e.length;i++)n[t.length+i]=e[i];return n},$R=(t,e)=>({classGroupId:t,validator:e}),$_=(t=new Map,e=null,n)=>({nextPart:t,validators:e,classGroupId:n}),Il="-",dg=[],KR="arbitrary..",ZR=t=>{const e=jR(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{if(o.startsWith("[")&&o.endsWith("]"))return QR(o);const a=o.split(Il),l=a[0]===""&&a.length>1?1:0;return K_(a,l,e)},getConflictingClassGroupIds:(o,a)=>{if(a){const l=i[o],c=n[o];return l?c?JR(c,l):l:c||dg}return n[o]||dg}}},K_=(t,e,n)=>{if(t.length-e===0)return n.classGroupId;const r=t[e],s=n.nextPart.get(r);if(s){const c=K_(t,e+1,s);if(c)return c}const o=n.validators;if(o===null)return;const a=e===0?t.join(Il):t.slice(e).join(Il),l=o.length;for(let c=0;c<l;c++){const u=o[c];if(u.validator(a))return u.classGroupId}},QR=t=>t.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=t.slice(1,-1),n=e.indexOf(":"),i=e.slice(0,n);return i?KR+i:void 0})(),jR=t=>{const{theme:e,classGroups:n}=t;return e2(n,e)},e2=(t,e)=>{const n=$_();for(const i in t){const r=t[i];Kf(r,n,i,e)}return n},Kf=(t,e,n,i)=>{const r=t.length;for(let s=0;s<r;s++){const o=t[s];t2(o,e,n,i)}},t2=(t,e,n,i)=>{if(typeof t=="string"){n2(t,e,n);return}if(typeof t=="function"){i2(t,e,n,i);return}r2(t,e,n,i)},n2=(t,e,n)=>{const i=t===""?e:Z_(e,t);i.classGroupId=n},i2=(t,e,n,i)=>{if(s2(t)){Kf(t(i),e,n,i);return}e.validators===null&&(e.validators=[]),e.validators.push($R(n,t))},r2=(t,e,n,i)=>{const r=Object.entries(t),s=r.length;for(let o=0;o<s;o++){const[a,l]=r[o];Kf(l,Z_(e,a),n,i)}},Z_=(t,e)=>{let n=t;const i=e.split(Il),r=i.length;for(let s=0;s<r;s++){const o=i[s];let a=n.nextPart.get(o);a||(a=$_(),n.nextPart.set(o,a)),n=a}return n},s2=t=>"isThemeGetter"in t&&t.isThemeGetter===!0,o2=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=Object.create(null),i=Object.create(null);const r=(s,o)=>{n[s]=o,e++,e>t&&(e=0,i=n,n=Object.create(null))};return{get(s){let o=n[s];if(o!==void 0)return o;if((o=i[s])!==void 0)return r(s,o),o},set(s,o){s in n?n[s]=o:r(s,o)}}},Mh="!",pg=":",a2=[],mg=(t,e,n,i,r)=>({modifiers:t,hasImportantModifier:e,baseClassName:n,maybePostfixModifierPosition:i,isExternal:r}),l2=t=>{const{prefix:e,experimentalParseClassName:n}=t;let i=r=>{const s=[];let o=0,a=0,l=0,c;const u=r.length;for(let _=0;_<u;_++){const m=r[_];if(o===0&&a===0){if(m===pg){s.push(r.slice(l,_)),l=_+1;continue}if(m==="/"){c=_;continue}}m==="["?o++:m==="]"?o--:m==="("?a++:m===")"&&a--}const h=s.length===0?r:r.slice(l);let d=h,p=!1;h.endsWith(Mh)?(d=h.slice(0,-1),p=!0):h.startsWith(Mh)&&(d=h.slice(1),p=!0);const g=c&&c>l?c-l:void 0;return mg(s,p,d,g)};if(e){const r=e+pg,s=i;i=o=>o.startsWith(r)?s(o.slice(r.length)):mg(a2,!1,o,void 0,!0)}if(n){const r=i;i=s=>n({className:s,parseClassName:r})}return i},c2=t=>{const e=new Map;return t.orderSensitiveModifiers.forEach((n,i)=>{e.set(n,1e6+i)}),n=>{const i=[];let r=[];for(let s=0;s<n.length;s++){const o=n[s],a=o[0]==="[",l=e.has(o);a||l?(r.length>0&&(r.sort(),i.push(...r),r=[]),i.push(o)):r.push(o)}return r.length>0&&(r.sort(),i.push(...r)),i}},u2=t=>({cache:o2(t.cacheSize),parseClassName:l2(t),sortModifiers:c2(t),...ZR(t)}),h2=/\s+/,f2=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r,sortModifiers:s}=e,o=[],a=t.trim().split(h2);let l="";for(let c=a.length-1;c>=0;c-=1){const u=a[c],{isExternal:h,modifiers:d,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:_}=n(u);if(h){l=u+(l.length>0?" "+l:l);continue}let m=!!_,f=i(m?g.substring(0,_):g);if(!f){if(!m){l=u+(l.length>0?" "+l:l);continue}if(f=i(g),!f){l=u+(l.length>0?" "+l:l);continue}m=!1}const x=d.length===0?"":d.length===1?d[0]:s(d).join(":"),y=p?x+Mh:x,b=y+f;if(o.indexOf(b)>-1)continue;o.push(b);const T=r(f,m);for(let C=0;C<T.length;++C){const D=T[C];o.push(y+D)}l=u+(l.length>0?" "+l:l)}return l},d2=(...t)=>{let e=0,n,i,r="";for(;e<t.length;)(n=t[e++])&&(i=Q_(n))&&(r&&(r+=" "),r+=i);return r},Q_=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=Q_(t[i]))&&(n&&(n+=" "),n+=e);return n},p2=(t,...e)=>{let n,i,r,s;const o=l=>{const c=e.reduce((u,h)=>h(u),t());return n=u2(c),i=n.cache.get,r=n.cache.set,s=a,a(l)},a=l=>{const c=i(l);if(c)return c;const u=f2(l,n);return r(l,u),u};return s=o,(...l)=>s(d2(...l))},m2=[],Qt=t=>{const e=n=>n[t]||m2;return e.isThemeGetter=!0,e},j_=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,ev=/^\((?:(\w[\w-]*):)?(.+)\)$/i,g2=/^\d+\/\d+$/,_2=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,v2=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,x2=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,y2=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,b2=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ms=t=>g2.test(t),lt=t=>!!t&&!Number.isNaN(Number(t)),ur=t=>!!t&&Number.isInteger(Number(t)),su=t=>t.endsWith("%")&&lt(t.slice(0,-1)),zi=t=>_2.test(t),S2=()=>!0,M2=t=>v2.test(t)&&!x2.test(t),tv=()=>!1,w2=t=>y2.test(t),E2=t=>b2.test(t),T2=t=>!Oe(t)&&!Fe(t),A2=t=>so(t,rv,tv),Oe=t=>j_.test(t),Vr=t=>so(t,sv,M2),ou=t=>so(t,I2,lt),gg=t=>so(t,nv,tv),C2=t=>so(t,iv,E2),Ka=t=>so(t,ov,w2),Fe=t=>ev.test(t),bo=t=>oo(t,sv),P2=t=>oo(t,L2),_g=t=>oo(t,nv),R2=t=>oo(t,rv),D2=t=>oo(t,iv),Za=t=>oo(t,ov,!0),so=(t,e,n)=>{const i=j_.exec(t);return i?i[1]?e(i[1]):n(i[2]):!1},oo=(t,e,n=!1)=>{const i=ev.exec(t);return i?i[1]?e(i[1]):n:!1},nv=t=>t==="position"||t==="percentage",iv=t=>t==="image"||t==="url",rv=t=>t==="length"||t==="size"||t==="bg-size",sv=t=>t==="length",I2=t=>t==="number",L2=t=>t==="family-name",ov=t=>t==="shadow",N2=()=>{const t=Qt("color"),e=Qt("font"),n=Qt("text"),i=Qt("font-weight"),r=Qt("tracking"),s=Qt("leading"),o=Qt("breakpoint"),a=Qt("container"),l=Qt("spacing"),c=Qt("radius"),u=Qt("shadow"),h=Qt("inset-shadow"),d=Qt("text-shadow"),p=Qt("drop-shadow"),g=Qt("blur"),_=Qt("perspective"),m=Qt("aspect"),f=Qt("ease"),x=Qt("animate"),y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],b=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],T=()=>[...b(),Fe,Oe],C=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto","contain","none"],R=()=>[Fe,Oe,l],S=()=>[Ms,"full","auto",...R()],M=()=>[ur,"none","subgrid",Fe,Oe],L=()=>["auto",{span:["full",ur,Fe,Oe]},ur,Fe,Oe],V=()=>[ur,"auto",Fe,Oe],q=()=>["auto","min","max","fr",Fe,Oe],j=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],J=()=>["start","end","center","stretch","center-safe","end-safe"],W=()=>["auto",...R()],k=()=>[Ms,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...R()],H=()=>[t,Fe,Oe],ce=()=>[...b(),_g,gg,{position:[Fe,Oe]}],pe=()=>["no-repeat",{repeat:["","x","y","space","round"]}],fe=()=>["auto","cover","contain",R2,A2,{size:[Fe,Oe]}],ke=()=>[su,bo,Vr],Le=()=>["","none","full",c,Fe,Oe],Qe=()=>["",lt,bo,Vr],ut=()=>["solid","dashed","dotted","double"],se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],oe=()=>[lt,su,_g,gg],Ce=()=>["","none",g,Fe,Oe],Ve=()=>["none",lt,Fe,Oe],Me=()=>["none",lt,Fe,Oe],at=()=>[lt,Fe,Oe],I=()=>[Ms,"full",...R()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[zi],breakpoint:[zi],color:[S2],container:[zi],"drop-shadow":[zi],ease:["in","out","in-out"],font:[T2],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[zi],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[zi],shadow:[zi],spacing:["px",lt],text:[zi],"text-shadow":[zi],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ms,Oe,Fe,m]}],container:["container"],columns:[{columns:[lt,Oe,Fe,a]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:T()}],overflow:[{overflow:C()}],"overflow-x":[{"overflow-x":C()}],"overflow-y":[{"overflow-y":C()}],overscroll:[{overscroll:D()}],"overscroll-x":[{"overscroll-x":D()}],"overscroll-y":[{"overscroll-y":D()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:S()}],"inset-x":[{"inset-x":S()}],"inset-y":[{"inset-y":S()}],start:[{start:S()}],end:[{end:S()}],top:[{top:S()}],right:[{right:S()}],bottom:[{bottom:S()}],left:[{left:S()}],visibility:["visible","invisible","collapse"],z:[{z:[ur,"auto",Fe,Oe]}],basis:[{basis:[Ms,"full","auto",a,...R()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[lt,Ms,"auto","initial","none",Oe]}],grow:[{grow:["",lt,Fe,Oe]}],shrink:[{shrink:["",lt,Fe,Oe]}],order:[{order:[ur,"first","last","none",Fe,Oe]}],"grid-cols":[{"grid-cols":M()}],"col-start-end":[{col:L()}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":M()}],"row-start-end":[{row:L()}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":q()}],"auto-rows":[{"auto-rows":q()}],gap:[{gap:R()}],"gap-x":[{"gap-x":R()}],"gap-y":[{"gap-y":R()}],"justify-content":[{justify:[...j(),"normal"]}],"justify-items":[{"justify-items":[...J(),"normal"]}],"justify-self":[{"justify-self":["auto",...J()]}],"align-content":[{content:["normal",...j()]}],"align-items":[{items:[...J(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...J(),{baseline:["","last"]}]}],"place-content":[{"place-content":j()}],"place-items":[{"place-items":[...J(),"baseline"]}],"place-self":[{"place-self":["auto",...J()]}],p:[{p:R()}],px:[{px:R()}],py:[{py:R()}],ps:[{ps:R()}],pe:[{pe:R()}],pt:[{pt:R()}],pr:[{pr:R()}],pb:[{pb:R()}],pl:[{pl:R()}],m:[{m:W()}],mx:[{mx:W()}],my:[{my:W()}],ms:[{ms:W()}],me:[{me:W()}],mt:[{mt:W()}],mr:[{mr:W()}],mb:[{mb:W()}],ml:[{ml:W()}],"space-x":[{"space-x":R()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":R()}],"space-y-reverse":["space-y-reverse"],size:[{size:k()}],w:[{w:[a,"screen",...k()]}],"min-w":[{"min-w":[a,"screen","none",...k()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[o]},...k()]}],h:[{h:["screen","lh",...k()]}],"min-h":[{"min-h":["screen","lh","none",...k()]}],"max-h":[{"max-h":["screen","lh",...k()]}],"font-size":[{text:["base",n,bo,Vr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,Fe,ou]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",su,Oe]}],"font-family":[{font:[P2,Oe,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[r,Fe,Oe]}],"line-clamp":[{"line-clamp":[lt,"none",Fe,ou]}],leading:[{leading:[s,...R()]}],"list-image":[{"list-image":["none",Fe,Oe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Fe,Oe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:H()}],"text-color":[{text:H()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ut(),"wavy"]}],"text-decoration-thickness":[{decoration:[lt,"from-font","auto",Fe,Vr]}],"text-decoration-color":[{decoration:H()}],"underline-offset":[{"underline-offset":[lt,"auto",Fe,Oe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Fe,Oe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Fe,Oe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ce()}],"bg-repeat":[{bg:pe()}],"bg-size":[{bg:fe()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ur,Fe,Oe],radial:["",Fe,Oe],conic:[ur,Fe,Oe]},D2,C2]}],"bg-color":[{bg:H()}],"gradient-from-pos":[{from:ke()}],"gradient-via-pos":[{via:ke()}],"gradient-to-pos":[{to:ke()}],"gradient-from":[{from:H()}],"gradient-via":[{via:H()}],"gradient-to":[{to:H()}],rounded:[{rounded:Le()}],"rounded-s":[{"rounded-s":Le()}],"rounded-e":[{"rounded-e":Le()}],"rounded-t":[{"rounded-t":Le()}],"rounded-r":[{"rounded-r":Le()}],"rounded-b":[{"rounded-b":Le()}],"rounded-l":[{"rounded-l":Le()}],"rounded-ss":[{"rounded-ss":Le()}],"rounded-se":[{"rounded-se":Le()}],"rounded-ee":[{"rounded-ee":Le()}],"rounded-es":[{"rounded-es":Le()}],"rounded-tl":[{"rounded-tl":Le()}],"rounded-tr":[{"rounded-tr":Le()}],"rounded-br":[{"rounded-br":Le()}],"rounded-bl":[{"rounded-bl":Le()}],"border-w":[{border:Qe()}],"border-w-x":[{"border-x":Qe()}],"border-w-y":[{"border-y":Qe()}],"border-w-s":[{"border-s":Qe()}],"border-w-e":[{"border-e":Qe()}],"border-w-t":[{"border-t":Qe()}],"border-w-r":[{"border-r":Qe()}],"border-w-b":[{"border-b":Qe()}],"border-w-l":[{"border-l":Qe()}],"divide-x":[{"divide-x":Qe()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Qe()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ut(),"hidden","none"]}],"divide-style":[{divide:[...ut(),"hidden","none"]}],"border-color":[{border:H()}],"border-color-x":[{"border-x":H()}],"border-color-y":[{"border-y":H()}],"border-color-s":[{"border-s":H()}],"border-color-e":[{"border-e":H()}],"border-color-t":[{"border-t":H()}],"border-color-r":[{"border-r":H()}],"border-color-b":[{"border-b":H()}],"border-color-l":[{"border-l":H()}],"divide-color":[{divide:H()}],"outline-style":[{outline:[...ut(),"none","hidden"]}],"outline-offset":[{"outline-offset":[lt,Fe,Oe]}],"outline-w":[{outline:["",lt,bo,Vr]}],"outline-color":[{outline:H()}],shadow:[{shadow:["","none",u,Za,Ka]}],"shadow-color":[{shadow:H()}],"inset-shadow":[{"inset-shadow":["none",h,Za,Ka]}],"inset-shadow-color":[{"inset-shadow":H()}],"ring-w":[{ring:Qe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:H()}],"ring-offset-w":[{"ring-offset":[lt,Vr]}],"ring-offset-color":[{"ring-offset":H()}],"inset-ring-w":[{"inset-ring":Qe()}],"inset-ring-color":[{"inset-ring":H()}],"text-shadow":[{"text-shadow":["none",d,Za,Ka]}],"text-shadow-color":[{"text-shadow":H()}],opacity:[{opacity:[lt,Fe,Oe]}],"mix-blend":[{"mix-blend":[...se(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":se()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[lt]}],"mask-image-linear-from-pos":[{"mask-linear-from":oe()}],"mask-image-linear-to-pos":[{"mask-linear-to":oe()}],"mask-image-linear-from-color":[{"mask-linear-from":H()}],"mask-image-linear-to-color":[{"mask-linear-to":H()}],"mask-image-t-from-pos":[{"mask-t-from":oe()}],"mask-image-t-to-pos":[{"mask-t-to":oe()}],"mask-image-t-from-color":[{"mask-t-from":H()}],"mask-image-t-to-color":[{"mask-t-to":H()}],"mask-image-r-from-pos":[{"mask-r-from":oe()}],"mask-image-r-to-pos":[{"mask-r-to":oe()}],"mask-image-r-from-color":[{"mask-r-from":H()}],"mask-image-r-to-color":[{"mask-r-to":H()}],"mask-image-b-from-pos":[{"mask-b-from":oe()}],"mask-image-b-to-pos":[{"mask-b-to":oe()}],"mask-image-b-from-color":[{"mask-b-from":H()}],"mask-image-b-to-color":[{"mask-b-to":H()}],"mask-image-l-from-pos":[{"mask-l-from":oe()}],"mask-image-l-to-pos":[{"mask-l-to":oe()}],"mask-image-l-from-color":[{"mask-l-from":H()}],"mask-image-l-to-color":[{"mask-l-to":H()}],"mask-image-x-from-pos":[{"mask-x-from":oe()}],"mask-image-x-to-pos":[{"mask-x-to":oe()}],"mask-image-x-from-color":[{"mask-x-from":H()}],"mask-image-x-to-color":[{"mask-x-to":H()}],"mask-image-y-from-pos":[{"mask-y-from":oe()}],"mask-image-y-to-pos":[{"mask-y-to":oe()}],"mask-image-y-from-color":[{"mask-y-from":H()}],"mask-image-y-to-color":[{"mask-y-to":H()}],"mask-image-radial":[{"mask-radial":[Fe,Oe]}],"mask-image-radial-from-pos":[{"mask-radial-from":oe()}],"mask-image-radial-to-pos":[{"mask-radial-to":oe()}],"mask-image-radial-from-color":[{"mask-radial-from":H()}],"mask-image-radial-to-color":[{"mask-radial-to":H()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[lt]}],"mask-image-conic-from-pos":[{"mask-conic-from":oe()}],"mask-image-conic-to-pos":[{"mask-conic-to":oe()}],"mask-image-conic-from-color":[{"mask-conic-from":H()}],"mask-image-conic-to-color":[{"mask-conic-to":H()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ce()}],"mask-repeat":[{mask:pe()}],"mask-size":[{mask:fe()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Fe,Oe]}],filter:[{filter:["","none",Fe,Oe]}],blur:[{blur:Ce()}],brightness:[{brightness:[lt,Fe,Oe]}],contrast:[{contrast:[lt,Fe,Oe]}],"drop-shadow":[{"drop-shadow":["","none",p,Za,Ka]}],"drop-shadow-color":[{"drop-shadow":H()}],grayscale:[{grayscale:["",lt,Fe,Oe]}],"hue-rotate":[{"hue-rotate":[lt,Fe,Oe]}],invert:[{invert:["",lt,Fe,Oe]}],saturate:[{saturate:[lt,Fe,Oe]}],sepia:[{sepia:["",lt,Fe,Oe]}],"backdrop-filter":[{"backdrop-filter":["","none",Fe,Oe]}],"backdrop-blur":[{"backdrop-blur":Ce()}],"backdrop-brightness":[{"backdrop-brightness":[lt,Fe,Oe]}],"backdrop-contrast":[{"backdrop-contrast":[lt,Fe,Oe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",lt,Fe,Oe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[lt,Fe,Oe]}],"backdrop-invert":[{"backdrop-invert":["",lt,Fe,Oe]}],"backdrop-opacity":[{"backdrop-opacity":[lt,Fe,Oe]}],"backdrop-saturate":[{"backdrop-saturate":[lt,Fe,Oe]}],"backdrop-sepia":[{"backdrop-sepia":["",lt,Fe,Oe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":R()}],"border-spacing-x":[{"border-spacing-x":R()}],"border-spacing-y":[{"border-spacing-y":R()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Fe,Oe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[lt,"initial",Fe,Oe]}],ease:[{ease:["linear","initial",f,Fe,Oe]}],delay:[{delay:[lt,Fe,Oe]}],animate:[{animate:["none",x,Fe,Oe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[_,Fe,Oe]}],"perspective-origin":[{"perspective-origin":T()}],rotate:[{rotate:Ve()}],"rotate-x":[{"rotate-x":Ve()}],"rotate-y":[{"rotate-y":Ve()}],"rotate-z":[{"rotate-z":Ve()}],scale:[{scale:Me()}],"scale-x":[{"scale-x":Me()}],"scale-y":[{"scale-y":Me()}],"scale-z":[{"scale-z":Me()}],"scale-3d":["scale-3d"],skew:[{skew:at()}],"skew-x":[{"skew-x":at()}],"skew-y":[{"skew-y":at()}],transform:[{transform:[Fe,Oe,"","none","gpu","cpu"]}],"transform-origin":[{origin:T()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:I()}],"translate-x":[{"translate-x":I()}],"translate-y":[{"translate-y":I()}],"translate-z":[{"translate-z":I()}],"translate-none":["translate-none"],accent:[{accent:H()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:H()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Fe,Oe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Fe,Oe]}],fill:[{fill:["none",...H()]}],"stroke-w":[{stroke:[lt,bo,Vr,ou]}],stroke:[{stroke:["none",...H()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},U2=p2(N2);function av(...t){return U2(B_(t))}const dl=Kt({__name:"Button",props:{variant:{},size:{},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(t){const e=t;return(n,i)=>(Ye(),Ut(ve(io),{"data-slot":"button",as:t.as,"as-child":t.asChild,class:Vn(ve(av)(ve(O2)({variant:t.variant,size:t.size}),e.class))},{default:jt(()=>[Pi(n.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),O2=iR("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}}),F2=Kt({__name:"Slider",props:{defaultValue:{},modelValue:{},disabled:{type:Boolean},orientation:{},dir:{},inverted:{type:Boolean},min:{},max:{},step:{},minStepsBetweenThumbs:{},thumbAlignment:{},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},class:{}},emits:["update:modelValue","valueCommit"],setup(t,{emit:e}){const n=t,i=e,r=lR(n,"class"),s=gR(r,i);return(o,a)=>(Ye(),Ut(ve(kR),Ai({"data-slot":"slider",class:ve(av)("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",n.class)},ve(s)),{default:jt(({modelValue:l})=>[Xt(ve(YR),{"data-slot":"slider-track",class:"bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"},{default:jt(()=>[Xt(ve(VR),{"data-slot":"slider-range",class:"bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"})]),_:1}),(Ye(!0),Nt(kt,null,yr(l,(c,u)=>(Ye(),Ut(ve(XR),{key:u,"data-slot":"slider-thumb",class:"bg-white border-primary ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"}))),128))]),_:1},16,["class"]))}}),k2={key:0,class:"dynamic-label"},B2={key:2,class:"slider-container"},z2={key:0,class:"slider-value"},V2=Kt({__name:"Sidebar",setup(t){const e=Wt(!0),n=Wt(!1),i=N_(s=>{n.value=s==="dark"});function r(){e.value=!e.value}return document.addEventListener("keydown",s=>{(s.key==="Q"||s.key==="q")&&r()}),Bh(()=>{i()}),(s,o)=>(Ye(),Nt(kt,null,[sn("div",{class:Vn(["fixed-sidebar",{"is-hidden":!e.value,"is-dark":n.value,dark:n.value}])},[(Ye(!0),Nt(kt,null,yr(ve(Xf),a=>(Ye(),Nt("div",{key:a.id,class:"dynamic-item"},[a.label?(Ye(),Nt("label",k2,ni(a.label),1)):Mr("",!0),a.component==="Button"?(Ye(),Ut(ve(dl),{key:1,variant:"secondary",onClick:l=>ve(og)(a.action)},{default:jt(()=>[Os(ni(a.props.text),1)]),_:2},1032,["onClick"])):a.component==="Slider"?(Ye(),Nt("div",B2,[Xt(ve(F2),{min:a.props.min,max:a.props.max,step:a.props.step,"default-value":a.props.defaultValue,modelValue:a.props.defaultValue,"onUpdate:modelValue":[l=>a.props.defaultValue=l,l=>ve(og)(a.action,l)],class:"w-[80%]"},null,8,["min","max","step","default-value","modelValue","onUpdate:modelValue"]),a.props.defaultValue?(Ye(),Nt("span",z2,ni(a.props.defaultValue[0]),1)):Mr("",!0)])):Mr("",!0)]))),128)),Xt(ve(dl),{variant:"secondary",size:"icon",class:"mb-4",onClick:o[0]||(o[0]=a=>r())},{default:jt(()=>[Os(ni(e.value?"<<":">>"),1)]),_:1})],2),sn("div",{class:Vn({dark:n.value})},[Xt(ve(dl),{variant:"secondary",size:"icon",class:Vn(["mb-5",{"is-hidden":!e.value}]),onClick:o[1]||(o[1]=a=>r())},{default:jt(()=>[...o[2]||(o[2]=[Os(" >> ",-1)])]),_:1},8,["class"])],2)],64))}}),H2=Ql(V2,[["__scopeId","data-v-38691013"]]),G2={class:"info-module",id:"info-panel"},W2={class:"metadata"},X2={__name:"ObjectInfo",setup(t){return Tr.data&&Object.fromEntries(Object.entries(Tr.data).filter(([e])=>e!=="dispatch")),(e,n)=>(Ye(),Nt("div",G2,[Xt(ve(dl),{variant:"ghost",onClick:n[0]||(n[0]=i=>ve(C_)())},{default:jt(()=>[...n[1]||(n[1]=[Os(" X ",-1)])]),_:1}),sn("div",W2,[n[2]||(n[2]=sn("h1",null,"METADATA",-1)),(Ye(!0),Nt(kt,null,yr(ve(Tr).data,(i,r)=>(Ye(),Nt("div",{key:r,class:"single_data"},[sn("p",null,[sn("strong",null,ni(r)+":",1),Os(" "+ni(i.value),1)])]))),128))])]))}},q2=Ql(X2,[["__scopeId","data-v-ff5fa631"]]),Y2={class:"app-container"},J2=Kt({__name:"App",setup(t){const e=Wt(null);return js(()=>{e.value&&(e.value.appendChild(An.domElement),M3())}),(n,i)=>(Ye(),Nt("div",Y2,[Xt(nR),ve(xh).isVisible?(Ye(),Ut(H2,{key:0})):Mr("",!0),sn("div",{ref_key:"threeContainer",ref:e,class:"three-container"},null,512),ve(Tr).isVisible?(Ye(),Ut(q2,{key:1})):Mr("",!0)]))}}),$2=Ql(J2,[["__scopeId","data-v-f56028e7"]]),K2=Oy($2);K2.mount("#app");
