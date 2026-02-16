(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function lu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ct={},jr=[],ri=()=>{},Dp=()=>!1,wo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),cu=t=>t.startsWith("onUpdate:"),Kt=Object.assign,uu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f0=Object.prototype.hasOwnProperty,gt=(t,e)=>f0.call(t,e),Ye=Array.isArray,es=t=>fa(t)==="[object Map]",Ip=t=>fa(t)==="[object Set]",Bf=t=>fa(t)==="[object Date]",Ke=t=>typeof t=="function",Ft=t=>typeof t=="string",Gn=t=>typeof t=="symbol",vt=t=>t!==null&&typeof t=="object",Lp=t=>(vt(t)||Ke(t))&&Ke(t.then)&&Ke(t.catch),Np=Object.prototype.toString,fa=t=>Np.call(t),d0=t=>fa(t).slice(8,-1),Up=t=>fa(t)==="[object Object]",Ao=t=>Ft(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hs=lu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ro=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},h0=/-\w/g,Sn=Ro(t=>t.replace(h0,e=>e.slice(1).toUpperCase())),p0=/\B([A-Z])/g,wr=Ro(t=>t.replace(p0,"-$1").toLowerCase()),Co=Ro(t=>t.charAt(0).toUpperCase()+t.slice(1)),ja=Ro(t=>t?`on${Co(t)}`:""),ji=(t,e)=>!Object.is(t,e),Qo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Op=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},m0=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let kf;const Po=()=>kf||(kf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vs(t){if(Ye(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ft(i)?x0(i):vs(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ft(t)||vt(t))return t}const g0=/;(?![^(]*\))/g,_0=/:([^]+)/,v0=/\/\*[^]*?\*\//g;function x0(t){const e={};return t.replace(v0,"").split(g0).forEach(n=>{if(n){const i=n.split(_0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Do(t){let e="";if(Ft(t))e=t;else if(Ye(t))for(let n=0;n<t.length;n++){const i=Do(t[n]);i&&(e+=i+" ")}else if(vt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const y0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",S0=lu(y0);function Fp(t){return!!t||t===""}function b0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=fu(t[i],e[i]);return n}function fu(t,e){if(t===e)return!0;let n=Bf(t),i=Bf(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Gn(t),i=Gn(e),n||i)return t===e;if(n=Ye(t),i=Ye(e),n||i)return n&&i?b0(t,e):!1;if(n=vt(t),i=vt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in t){const o=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!fu(t[a],e[a]))return!1}}return String(t)===String(e)}const Bp=t=>!!(t&&t.__v_isRef===!0),eo=t=>Ft(t)?t:t==null?"":Ye(t)||vt(t)&&(t.toString===Np||!Ke(t.toString))?Bp(t)?eo(t.value):JSON.stringify(t,kp,2):String(t),kp=(t,e)=>Bp(e)?kp(t,e.value):es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[jo(i,s)+" =>"]=r,n),{})}:Ip(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>jo(n))}:Gn(e)?jo(e):vt(e)&&!Ye(e)&&!Up(e)?String(e):e,jo=(t,e="")=>{var n;return Gn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let vn;class M0{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=vn,!e&&vn&&(this.index=(vn.scopes||(vn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=vn;try{return vn=this,e()}finally{vn=n}}}on(){++this._on===1&&(this.prevScope=vn,vn=this)}off(){this._on>0&&--this._on===0&&(vn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function E0(){return vn}let Rt;const el=new WeakSet;class zp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,vn&&vn.active&&vn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,el.has(this)&&(el.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zf(this),Hp(this);const e=Rt,n=Vn;Rt=this,Vn=!0;try{return this.fn()}finally{Wp(this),Rt=e,Vn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)pu(e);this.deps=this.depsTail=void 0,zf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?el.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Kl(this)&&this.run()}get dirty(){return Kl(this)}}let Vp=0,Ws,Xs;function Gp(t,e=!1){if(t.flags|=8,e){t.next=Xs,Xs=t;return}t.next=Ws,Ws=t}function du(){Vp++}function hu(){if(--Vp>0)return;if(Xs){let e=Xs;for(Xs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ws;){let e=Ws;for(Ws=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Hp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wp(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),pu(i),T0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Kl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===js)||(t.globalVersion=js,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Kl(t))))return;t.flags|=2;const e=t.dep,n=Rt,i=Vn;Rt=t,Vn=!0;try{Hp(t);const r=t.fn(t._value);(e.version===0||ji(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Rt=n,Vn=i,Wp(t),t.flags&=-3}}function pu(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)pu(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function T0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Vn=!0;const qp=[];function Ci(){qp.push(Vn),Vn=!1}function Pi(){const t=qp.pop();Vn=t===void 0?!0:t}function zf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Rt;Rt=void 0;try{e()}finally{Rt=n}}}let js=0;class w0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class mu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Rt||!Vn||Rt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Rt)n=this.activeLink=new w0(Rt,this),Rt.deps?(n.prevDep=Rt.depsTail,Rt.depsTail.nextDep=n,Rt.depsTail=n):Rt.deps=Rt.depsTail=n,Yp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Rt.depsTail,n.nextDep=void 0,Rt.depsTail.nextDep=n,Rt.depsTail=n,Rt.deps===n&&(Rt.deps=i)}return n}trigger(e){this.version++,js++,this.notify(e)}notify(e){du();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{hu()}}}function Yp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Yp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const uo=new WeakMap,yr=Symbol(""),Zl=Symbol(""),ea=Symbol("");function jt(t,e,n){if(Vn&&Rt){let i=uo.get(t);i||uo.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new mu),r.map=i,r.key=n),r.track()}}function Ti(t,e,n,i,r,s){const a=uo.get(t);if(!a){js++;return}const o=l=>{l&&l.trigger()};if(du(),e==="clear")a.forEach(o);else{const l=Ye(t),c=l&&Ao(n);if(l&&n==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===ea||!Gn(d)&&d>=u)&&o(f)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),c&&o(a.get(ea)),e){case"add":l?c&&o(a.get("length")):(o(a.get(yr)),es(t)&&o(a.get(Zl)));break;case"delete":l||(o(a.get(yr)),es(t)&&o(a.get(Zl)));break;case"set":es(t)&&o(a.get(yr));break}}hu()}function A0(t,e){const n=uo.get(t);return n&&n.get(e)}function Ir(t){const e=dt(t);return e===t?e:(jt(e,"iterate",ea),Pn(t)?e:e.map(Hn))}function Io(t){return jt(t=dt(t),"iterate",ea),t}function Hi(t,e){return Di(t)?us(Sr(t)?Hn(e):e):Hn(e)}const R0={__proto__:null,[Symbol.iterator](){return tl(this,Symbol.iterator,t=>Hi(this,t))},concat(...t){return Ir(this).concat(...t.map(e=>Ye(e)?Ir(e):e))},entries(){return tl(this,"entries",t=>(t[1]=Hi(this,t[1]),t))},every(t,e){return pi(this,"every",t,e,void 0,arguments)},filter(t,e){return pi(this,"filter",t,e,n=>n.map(i=>Hi(this,i)),arguments)},find(t,e){return pi(this,"find",t,e,n=>Hi(this,n),arguments)},findIndex(t,e){return pi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return pi(this,"findLast",t,e,n=>Hi(this,n),arguments)},findLastIndex(t,e){return pi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return pi(this,"forEach",t,e,void 0,arguments)},includes(...t){return nl(this,"includes",t)},indexOf(...t){return nl(this,"indexOf",t)},join(t){return Ir(this).join(t)},lastIndexOf(...t){return nl(this,"lastIndexOf",t)},map(t,e){return pi(this,"map",t,e,void 0,arguments)},pop(){return Rs(this,"pop")},push(...t){return Rs(this,"push",t)},reduce(t,...e){return Vf(this,"reduce",t,e)},reduceRight(t,...e){return Vf(this,"reduceRight",t,e)},shift(){return Rs(this,"shift")},some(t,e){return pi(this,"some",t,e,void 0,arguments)},splice(...t){return Rs(this,"splice",t)},toReversed(){return Ir(this).toReversed()},toSorted(t){return Ir(this).toSorted(t)},toSpliced(...t){return Ir(this).toSpliced(...t)},unshift(...t){return Rs(this,"unshift",t)},values(){return tl(this,"values",t=>Hi(this,t))}};function tl(t,e,n){const i=Io(t),r=i[e]();return i!==t&&!Pn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const C0=Array.prototype;function pi(t,e,n,i,r,s){const a=Io(t),o=a!==t&&!Pn(t),l=a[e];if(l!==C0[e]){const f=l.apply(t,s);return o?Hn(f):f}let c=n;a!==t&&(o?c=function(f,d){return n.call(this,Hi(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Vf(t,e,n,i){const r=Io(t);let s=n;return r!==t&&(Pn(t)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,t)}):s=function(a,o,l){return n.call(this,a,Hi(t,o),l,t)}),r[e](s,...i)}function nl(t,e,n){const i=dt(t);jt(i,"iterate",ea);const r=i[e](...n);return(r===-1||r===!1)&&Lo(n[0])?(n[0]=dt(n[0]),i[e](...n)):r}function Rs(t,e,n=[]){Ci(),du();const i=dt(t)[e].apply(t,n);return hu(),Pi(),i}const P0=lu("__proto__,__v_isRef,__isVue"),$p=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gn));function D0(t){Gn(t)||(t=String(t));const e=dt(this);return jt(e,"has",t),e.hasOwnProperty(t)}class Jp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?V0:jp:s?Qp:Zp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ye(e);if(!r){let l;if(a&&(l=R0[n]))return l;if(n==="hasOwnProperty")return D0}const o=Reflect.get(e,n,Ut(e)?e:i);if((Gn(n)?$p.has(n):P0(n))||(r||jt(e,"get",n),s))return o;if(Ut(o)){const l=a&&Ao(n)?o:o.value;return r&&vt(l)?jl(l):l}return vt(o)?r?jl(o):cs(o):o}}class Kp extends Jp{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const a=Ye(e)&&Ao(n);if(!this._isShallow){const c=Di(s);if(!Pn(i)&&!Di(i)&&(s=dt(s),i=dt(i)),!a&&Ut(s)&&!Ut(i))return c||(s.value=i),!0}const o=a?Number(n)<e.length:gt(e,n),l=Reflect.set(e,n,i,Ut(e)?e:r);return e===dt(r)&&(o?ji(i,s)&&Ti(e,"set",n,i):Ti(e,"add",n,i)),l}deleteProperty(e,n){const i=gt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Ti(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Gn(n)||!$p.has(n))&&jt(e,"has",n),i}ownKeys(e){return jt(e,"iterate",Ye(e)?"length":yr),Reflect.ownKeys(e)}}class I0 extends Jp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const L0=new Kp,N0=new I0,U0=new Kp(!0);const Ql=t=>t,ya=t=>Reflect.getPrototypeOf(t);function O0(t,e,n){return function(...i){const r=this.__v_raw,s=dt(r),a=es(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...i),u=n?Ql:e?us:Hn;return!e&&jt(s,"iterate",l?Zl:yr),Kt(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function Sa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function F0(t,e){const n={get(r){const s=this.__v_raw,a=dt(s),o=dt(r);t||(ji(r,o)&&jt(a,"get",r),jt(a,"get",o));const{has:l}=ya(a),c=e?Ql:t?us:Hn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!t&&jt(dt(r),"iterate",yr),r.size},has(r){const s=this.__v_raw,a=dt(s),o=dt(r);return t||(ji(r,o)&&jt(a,"has",r),jt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=dt(o),c=e?Ql:t?us:Hn;return!t&&jt(l,"iterate",yr),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Kt(n,t?{add:Sa("add"),set:Sa("set"),delete:Sa("delete"),clear:Sa("clear")}:{add(r){!e&&!Pn(r)&&!Di(r)&&(r=dt(r));const s=dt(this);return ya(s).has.call(s,r)||(s.add(r),Ti(s,"add",r,r)),this},set(r,s){!e&&!Pn(s)&&!Di(s)&&(s=dt(s));const a=dt(this),{has:o,get:l}=ya(a);let c=o.call(a,r);c||(r=dt(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?ji(s,u)&&Ti(a,"set",r,s):Ti(a,"add",r,s),this},delete(r){const s=dt(this),{has:a,get:o}=ya(s);let l=a.call(s,r);l||(r=dt(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Ti(s,"delete",r,void 0),c},clear(){const r=dt(this),s=r.size!==0,a=r.clear();return s&&Ti(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=O0(r,t,e)}),n}function gu(t,e){const n=F0(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(gt(n,r)&&r in i?n:i,r,s)}const B0={get:gu(!1,!1)},k0={get:gu(!1,!0)},z0={get:gu(!0,!1)};const Zp=new WeakMap,Qp=new WeakMap,jp=new WeakMap,V0=new WeakMap;function G0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function H0(t){return t.__v_skip||!Object.isExtensible(t)?0:G0(d0(t))}function cs(t){return Di(t)?t:_u(t,!1,L0,B0,Zp)}function W0(t){return _u(t,!1,U0,k0,Qp)}function jl(t){return _u(t,!0,N0,z0,jp)}function _u(t,e,n,i,r){if(!vt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=H0(t);if(s===0)return t;const a=r.get(t);if(a)return a;const o=new Proxy(t,s===2?i:n);return r.set(t,o),o}function Sr(t){return Di(t)?Sr(t.__v_raw):!!(t&&t.__v_isReactive)}function Di(t){return!!(t&&t.__v_isReadonly)}function Pn(t){return!!(t&&t.__v_isShallow)}function Lo(t){return t?!!t.__v_raw:!1}function dt(t){const e=t&&t.__v_raw;return e?dt(e):t}function em(t){return!gt(t,"__v_skip")&&Object.isExtensible(t)&&Op(t,"__v_skip",!0),t}const Hn=t=>vt(t)?cs(t):t,us=t=>vt(t)?jl(t):t;function Ut(t){return t?t.__v_isRef===!0:!1}function nn(t){return tm(t,!1)}function X0(t){return tm(t,!0)}function tm(t,e){return Ut(t)?t:new q0(t,e)}class q0{constructor(e,n){this.dep=new mu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:dt(e),this._value=n?e:Hn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Pn(e)||Di(e);e=i?e:dt(e),ji(e,n)&&(this._rawValue=e,this._value=i?e:Hn(e),this.dep.trigger())}}function ye(t){return Ut(t)?t.value:t}function vu(t){return Ke(t)?t():ye(t)}const Y0={get:(t,e,n)=>e==="__v_raw"?t:ye(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ut(r)&&!Ut(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function nm(t){return Sr(t)?t:new Proxy(t,Y0)}function ta(t){const e=Ye(t)?new Array(t.length):{};for(const n in t)e[n]=im(t,n);return e}class $0{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=dt(e);let r=!0,s=e;if(!Ye(e)||!Ao(String(n)))do r=!Lo(s)||Pn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=ye(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Ut(this._raw[this._key])){const n=this._object[this._key];if(Ut(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return A0(this._raw,this._key)}}class J0{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function K0(t,e,n){return Ut(t)?t:Ke(t)?new J0(t):vt(t)&&arguments.length>1?im(t,e,n):nn(t)}function im(t,e,n){return new $0(t,e,n)}class Z0{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new mu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=js-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Rt!==this)return Gp(this,!0),!0}get value(){const e=this.dep.track();return Xp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Q0(t,e,n=!1){let i,r;return Ke(t)?i=t:(i=t.get,r=t.set),new Z0(i,r,n)}const ba={},fo=new WeakMap;let mr;function j0(t,e=!1,n=mr){if(n){let i=fo.get(n);i||fo.set(n,i=[]),i.push(t)}}function e_(t,e,n=Ct){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,c=b=>r?b:Pn(b)||r===!1||r===0?qi(b,1):qi(b);let u,f,d,p,_=!1,v=!1;if(Ut(t)?(f=()=>t.value,_=Pn(t)):Sr(t)?(f=()=>c(t),_=!0):Ye(t)?(v=!0,_=t.some(b=>Sr(b)||Pn(b)),f=()=>t.map(b=>{if(Ut(b))return b.value;if(Sr(b))return c(b);if(Ke(b))return l?l(b,2):b()})):Ke(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Ci();try{d()}finally{Pi()}}const b=mr;mr=u;try{return l?l(t,3,[p]):t(p)}finally{mr=b}}:f=ri,e&&r){const b=f,w=r===!0?1/0:r;f=()=>qi(b(),w)}const m=E0(),h=()=>{u.stop(),m&&m.active&&uu(m.effects,u)};if(s&&e){const b=e;e=(...w)=>{b(...w),h()}}let y=v?new Array(t.length).fill(ba):ba;const T=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const w=u.run();if(r||_||(v?w.some((R,P)=>ji(R,y[P])):ji(w,y))){d&&d();const R=mr;mr=u;try{const P=[w,y===ba?void 0:v&&y[0]===ba?[]:y,p];y=w,l?l(e,3,P):e(...P)}finally{mr=R}}}else u.run()};return o&&o(T),u=new zp(f),u.scheduler=a?()=>a(T,!1):T,p=b=>j0(b,!1,u),d=u.onStop=()=>{const b=fo.get(u);if(b){if(l)l(b,4);else for(const w of b)w();fo.delete(u)}},e?i?T(!0):y=u.run():a?a(T.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function qi(t,e=1/0,n){if(e<=0||!vt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ut(t))qi(t.value,e,n);else if(Ye(t))for(let i=0;i<t.length;i++)qi(t[i],e,n);else if(Ip(t)||es(t))t.forEach(i=>{qi(i,e,n)});else if(Up(t)){for(const i in t)qi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&qi(t[i],e,n)}return t}function da(t,e,n,i){try{return i?t(...i):t()}catch(r){No(r,e,n)}}function oi(t,e,n,i){if(Ke(t)){const r=da(t,e,n,i);return r&&Lp(r)&&r.catch(s=>{No(s,e,n)}),r}if(Ye(t)){const r=[];for(let s=0;s<t.length;s++)r.push(oi(t[s],e,n,i));return r}}function No(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ct;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}o=o.parent}if(s){Ci(),da(s,null,10,[t,l,c]),Pi();return}}t_(t,n,r,i,a)}function t_(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const un=[];let Kn=-1;const ts=[];let Wi=null,$r=0;const rm=Promise.resolve();let ho=null;function sm(t){const e=ho||rm;return t?e.then(this?t.bind(this):t):e}function n_(t){let e=Kn+1,n=un.length;for(;e<n;){const i=e+n>>>1,r=un[i],s=na(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function xu(t){if(!(t.flags&1)){const e=na(t),n=un[un.length-1];!n||!(t.flags&2)&&e>=na(n)?un.push(t):un.splice(n_(e),0,t),t.flags|=1,am()}}function am(){ho||(ho=rm.then(lm))}function i_(t){Ye(t)?ts.push(...t):Wi&&t.id===-1?Wi.splice($r+1,0,t):t.flags&1||(ts.push(t),t.flags|=1),am()}function Gf(t,e,n=Kn+1){for(;n<un.length;n++){const i=un[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;un.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function om(t){if(ts.length){const e=[...new Set(ts)].sort((n,i)=>na(n)-na(i));if(ts.length=0,Wi){Wi.push(...e);return}for(Wi=e,$r=0;$r<Wi.length;$r++){const n=Wi[$r];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Wi=null,$r=0}}const na=t=>t.id==null?t.flags&2?-1:1/0:t.id;function lm(t){try{for(Kn=0;Kn<un.length;Kn++){const e=un[Kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),da(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Kn<un.length;Kn++){const e=un[Kn];e&&(e.flags&=-2)}Kn=-1,un.length=0,om(),ho=null,(un.length||ts.length)&&lm()}}let fn=null,cm=null;function po(t){const e=fn;return fn=t,cm=t&&t.type.__scopeId||null,e}function sn(t,e=fn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&_o(-1);const s=po(e);let a;try{a=t(...r)}finally{po(s),i._d&&_o(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ar(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Ci(),oi(l,n,8,[t.el,o,t,e]),Pi())}}function yu(t,e){if(en){let n=en.provides;const i=en.parent&&en.parent.provides;i===n&&(n=en.provides=Object.create(i)),n[t]=e}}function ns(t,e,n=!1){const i=xs();if(i||rs){let r=rs?rs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ke(e)?e.call(i&&i.proxy):e}}const r_=Symbol.for("v-scx"),s_=()=>ns(r_);function a_(t,e){return Su(t,null,e)}function br(t,e,n){return Su(t,e,n)}function Su(t,e,n=Ct){const{immediate:i,deep:r,flush:s,once:a}=n,o=Kt({},n),l=e&&i||!e&&s!=="post";let c;if(sa){if(s==="sync"){const p=s_();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ri,p.resume=ri,p.pause=ri,p}}const u=en;o.call=(p,_,v)=>oi(p,u,_,v);let f=!1;s==="post"?o.scheduler=p=>{_n(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,_)=>{_?p():xu(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=e_(t,e,o);return sa&&(c?c.push(d):l&&d()),d}function o_(t,e,n){const i=this.proxy,r=Ft(t)?t.includes(".")?um(i,t):()=>i[t]:t.bind(i,i);let s;Ke(e)?s=e:(s=e.handler,n=e);const a=pa(this),o=Su(r,s.bind(i),n);return a(),o}function um(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const l_=Symbol("_vte"),c_=t=>t.__isTeleport,u_=Symbol("_leaveCb");function bu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,bu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ht(t,e){return Ke(t)?Kt({name:t.name},e,{setup:t}):t}function fm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Hf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const mo=new WeakMap;function qs(t,e,n,i,r=!1){if(Ye(t)){t.forEach((v,m)=>qs(v,e&&(Ye(e)?e[m]:e),n,i,r));return}if(is(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&qs(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Cu(i.component):i.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,u=o.refs===Ct?o.refs={}:o.refs,f=o.setupState,d=dt(f),p=f===Ct?Dp:v=>Hf(u,v)?!1:gt(d,v),_=(v,m)=>!(m&&Hf(u,m));if(c!=null&&c!==l){if(Wf(e),Ft(c))u[c]=null,p(c)&&(f[c]=null);else if(Ut(c)){const v=e;_(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(Ke(l))da(l,o,12,[a,u]);else{const v=Ft(l),m=Ut(l);if(v||m){const h=()=>{if(t.f){const y=v?p(l)?f[l]:u[l]:_()||!t.k?l.value:u[t.k];if(r)Ye(y)&&uu(y,s);else if(Ye(y))y.includes(s)||y.push(s);else if(v)u[l]=[s],p(l)&&(f[l]=u[l]);else{const T=[s];_(l,t.k)&&(l.value=T),t.k&&(u[t.k]=T)}}else v?(u[l]=a,p(l)&&(f[l]=a)):m&&(_(l,t.k)&&(l.value=a),t.k&&(u[t.k]=a))};if(a){const y=()=>{h(),mo.delete(t)};y.id=-1,mo.set(t,y),_n(y,n)}else Wf(t),h()}}}function Wf(t){const e=mo.get(t);e&&(e.flags|=8,mo.delete(t))}Po().requestIdleCallback;Po().cancelIdleCallback;const is=t=>!!t.type.__asyncLoader,dm=t=>t.type.__isKeepAlive;function f_(t,e){hm(t,"a",e)}function d_(t,e){hm(t,"da",e)}function hm(t,e,n=en){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Uo(e,i,n),n){let r=n.parent;for(;r&&r.parent;)dm(r.parent.vnode)&&h_(i,e,n,r),r=r.parent}}function h_(t,e,n,i){const r=Uo(e,t,i,!0);Mu(()=>{uu(i[e],r)},n)}function Uo(t,e,n=en,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{Ci();const o=pa(n),l=oi(e,n,t,a);return o(),Pi(),l});return i?r.unshift(s):r.push(s),s}}const Ni=t=>(e,n=en)=>{(!sa||t==="sp")&&Uo(t,(...i)=>e(...i),n)},p_=Ni("bm"),ha=Ni("m"),m_=Ni("bu"),g_=Ni("u"),__=Ni("bum"),Mu=Ni("um"),v_=Ni("sp"),x_=Ni("rtg"),y_=Ni("rtc");function S_(t,e=en){Uo("ec",t,e)}const b_="components",pm=Symbol.for("v-ndc");function M_(t){return Ft(t)?E_(b_,t,!1)||t:t||pm}function E_(t,e,n=!0,i=!1){const r=fn||en;if(r){const s=r.type;{const o=ov(s,!1);if(o&&(o===e||o===Sn(e)||o===Co(Sn(e))))return s}const a=Xf(r[t]||s[t],e)||Xf(r.appContext[t],e);return!a&&i?s:a}}function Xf(t,e){return t&&(t[e]||t[Sn(e)]||t[Co(Sn(e))])}function Eu(t,e,n,i){let r;const s=n,a=Ye(t);if(a||Ft(t)){const o=a&&Sr(t);let l=!1,c=!1;o&&(l=!Pn(t),c=Di(t),t=Io(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?us(Hn(t[u])):Hn(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(vt(t))if(t[Symbol.iterator])r=Array.from(t,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}function di(t,e,n={},i,r){if(fn.ce||fn.parent&&is(fn.parent)&&fn.parent.ce){const c=Object.keys(n).length>0;return mt(),Ot(Yt,null,[Gt("slot",n,i)],c?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),mt();const a=s&&mm(s(n)),o=n.key||a&&a.key,l=Ot(Yt,{key:(o&&!Gn(o)?o:`_${e}`)+(!a&&i?"_fb":"")},a||[],a&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function mm(t){return t.some(e=>ra(e)?!(e.type===li||e.type===Yt&&!mm(e.children)):!0)?t:null}const ec=t=>t?Om(t)?Cu(t):ec(t.parent):null,Ys=Kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ec(t.parent),$root:t=>ec(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>_m(t),$forceUpdate:t=>t.f||(t.f=()=>{xu(t.update)}),$nextTick:t=>t.n||(t.n=sm.bind(t.proxy)),$watch:t=>o_.bind(t)}),il=(t,e)=>t!==Ct&&!t.__isScriptSetup&&gt(t,e),T_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(il(i,e))return a[e]=1,i[e];if(r!==Ct&&gt(r,e))return a[e]=2,r[e];if(gt(s,e))return a[e]=3,s[e];if(n!==Ct&&gt(n,e))return a[e]=4,n[e];tc&&(a[e]=0)}}const c=Ys[e];let u,f;if(c)return e==="$attrs"&&jt(t.attrs,"get",""),c(t);if((u=o.__cssModules)&&(u=u[e]))return u;if(n!==Ct&&gt(n,e))return a[e]=4,n[e];if(f=l.config.globalProperties,gt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return il(r,e)?(r[e]=n,!0):i!==Ct&&gt(i,e)?(i[e]=n,!0):gt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(n[o]||t!==Ct&&o[0]!=="$"&&gt(t,o)||il(e,o)||gt(s,o)||gt(i,o)||gt(Ys,o)||gt(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:gt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function qf(t){return Ye(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let tc=!0;function w_(t){const e=_m(t),n=t.proxy,i=t.ctx;tc=!1,e.beforeCreate&&Yf(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:y,destroyed:T,unmounted:b,render:w,renderTracked:R,renderTriggered:P,errorCaptured:L,serverPrefetch:x,expose:M,inheritAttrs:I,components:F,directives:V,filters:Z}=e;if(c&&A_(c,i,null),a)for(const B in a){const k=a[B];Ke(k)&&(i[B]=k.bind(n))}if(r){const B=r.call(n,n);vt(B)&&(t.data=cs(B))}if(tc=!0,s)for(const B in s){const k=s[B],pe=Ke(k)?k.bind(n,n):Ke(k.get)?k.get.bind(n,n):ri,me=!Ke(k)&&Ke(k.set)?k.set.bind(n):ri,ve=lt({get:pe,set:me});Object.defineProperty(i,B,{enumerable:!0,configurable:!0,get:()=>ve.value,set:ze=>ve.value=ze})}if(o)for(const B in o)gm(o[B],i,n,B);if(l){const B=Ke(l)?l.call(n):l;Reflect.ownKeys(B).forEach(k=>{yu(k,B[k])})}u&&Yf(u,t,"c");function G(B,k){Ye(k)?k.forEach(pe=>B(pe.bind(n))):k&&B(k.bind(n))}if(G(p_,f),G(ha,d),G(m_,p),G(g_,_),G(f_,v),G(d_,m),G(S_,L),G(y_,R),G(x_,P),G(__,y),G(Mu,b),G(v_,x),Ye(M))if(M.length){const B=t.exposed||(t.exposed={});M.forEach(k=>{Object.defineProperty(B,k,{get:()=>n[k],set:pe=>n[k]=pe,enumerable:!0})})}else t.exposed||(t.exposed={});w&&t.render===ri&&(t.render=w),I!=null&&(t.inheritAttrs=I),F&&(t.components=F),V&&(t.directives=V),x&&fm(t)}function A_(t,e,n=ri){Ye(t)&&(t=nc(t));for(const i in t){const r=t[i];let s;vt(r)?"default"in r?s=ns(r.from||i,r.default,!0):s=ns(r.from||i):s=ns(r),Ut(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Yf(t,e,n){oi(Ye(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function gm(t,e,n,i){let r=i.includes(".")?um(n,i):()=>n[i];if(Ft(t)){const s=e[t];Ke(s)&&br(r,s)}else if(Ke(t))br(r,t.bind(n));else if(vt(t))if(Ye(t))t.forEach(s=>gm(s,e,n,i));else{const s=Ke(t.handler)?t.handler.bind(n):e[t.handler];Ke(s)&&br(r,s,t)}}function _m(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>go(l,c,a,!0)),go(l,e,a)),vt(e)&&s.set(e,l),l}function go(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&go(t,s,n,!0),r&&r.forEach(a=>go(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=R_[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const R_={data:$f,props:Jf,emits:Jf,methods:Bs,computed:Bs,beforeCreate:on,created:on,beforeMount:on,mounted:on,beforeUpdate:on,updated:on,beforeDestroy:on,beforeUnmount:on,destroyed:on,unmounted:on,activated:on,deactivated:on,errorCaptured:on,serverPrefetch:on,components:Bs,directives:Bs,watch:P_,provide:$f,inject:C_};function $f(t,e){return e?t?function(){return Kt(Ke(t)?t.call(this,this):t,Ke(e)?e.call(this,this):e)}:e:t}function C_(t,e){return Bs(nc(t),nc(e))}function nc(t){if(Ye(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function on(t,e){return t?[...new Set([].concat(t,e))]:e}function Bs(t,e){return t?Kt(Object.create(null),t,e):e}function Jf(t,e){return t?Ye(t)&&Ye(e)?[...new Set([...t,...e])]:Kt(Object.create(null),qf(t),qf(e??{})):e}function P_(t,e){if(!t)return e;if(!e)return t;const n=Kt(Object.create(null),t);for(const i in e)n[i]=on(t[i],e[i]);return n}function vm(){return{app:null,config:{isNativeTag:Dp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let D_=0;function I_(t,e){return function(i,r=null){Ke(i)||(i=Kt({},i)),r!=null&&!vt(r)&&(r=null);const s=vm(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:D_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:cv,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Ke(u.install)?(a.add(u),u.install(c,...f)):Ke(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Gt(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Cu(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(oi(o,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=rs;rs=c;try{return u()}finally{rs=f}}};return c}}let rs=null;const L_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Sn(e)}Modifiers`]||t[`${wr(e)}Modifiers`];function N_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ct;let r=n;const s=e.startsWith("update:"),a=s&&L_(i,e.slice(7));a&&(a.trim&&(r=n.map(u=>Ft(u)?u.trim():u)),a.number&&(r=n.map(m0)));let o,l=i[o=ja(e)]||i[o=ja(Sn(e))];!l&&s&&(l=i[o=ja(wr(e))]),l&&oi(l,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,oi(c,t,6,r)}}const U_=new WeakMap;function xm(t,e,n=!1){const i=n?U_:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!Ke(t)){const l=c=>{const u=xm(c,e,!0);u&&(o=!0,Kt(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(vt(t)&&i.set(t,null),null):(Ye(s)?s.forEach(l=>a[l]=null):Kt(a,s),vt(t)&&i.set(t,a),a)}function Oo(t,e){return!t||!wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),gt(t,e[0].toLowerCase()+e.slice(1))||gt(t,wr(e))||gt(t,e))}function Kf(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:_,inheritAttrs:v}=t,m=po(t);let h,y;try{if(n.shapeFlag&4){const b=r||i,w=b;h=jn(c.call(w,b,u,f,p,d,_)),y=o}else{const b=e;h=jn(b.length>1?b(f,{attrs:o,slots:a,emit:l}):b(f,null)),y=e.props?o:O_(o)}}catch(b){$s.length=0,No(b,t,1),h=Gt(li)}let T=h;if(y&&v!==!1){const b=Object.keys(y),{shapeFlag:w}=T;b.length&&w&7&&(s&&b.some(cu)&&(y=F_(y,s)),T=Mr(T,y,!1,!0))}return n.dirs&&(T=Mr(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&bu(T,n.transition),h=T,po(m),h}const O_=t=>{let e;for(const n in t)(n==="class"||n==="style"||wo(n))&&((e||(e={}))[n]=t[n]);return e},F_=(t,e)=>{const n={};for(const i in t)(!cu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function B_(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Zf(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(ym(a,i,d)&&!Oo(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Zf(i,a,c):!0:!!a;return!1}function Zf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(ym(e,t,s)&&!Oo(n,s))return!0}return!1}function ym(t,e,n){const i=t[n],r=e[n];return n==="style"&&vt(i)&&vt(r)?!fu(i,r):i!==r}function k_({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Sm={},bm=()=>Object.create(Sm),Mm=t=>Object.getPrototypeOf(t)===Sm;function z_(t,e,n,i=!1){const r={},s=bm();t.propsDefaults=Object.create(null),Em(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:W0(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function V_(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=dt(r),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Oo(t.emitsOptions,d))continue;const p=e[d];if(l)if(gt(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const _=Sn(d);r[_]=ic(l,o,_,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Em(t,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!gt(e,f)&&((u=wr(f))===f||!gt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=ic(l,o,f,void 0,t,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!gt(e,f))&&(delete s[f],c=!0)}c&&Ti(t.attrs,"set","")}function Em(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(Hs(l))continue;const c=e[l];let u;r&&gt(r,u=Sn(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:Oo(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=dt(n),c=o||Ct;for(let u=0;u<s.length;u++){const f=s[u];n[f]=ic(r,l,f,c[f],t,!gt(c,f))}}return a}function ic(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=gt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ke(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=pa(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===wr(n))&&(i=!0))}return i}const G_=new WeakMap;function Tm(t,e,n=!1){const i=n?G_:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!Ke(t)){const u=f=>{l=!0;const[d,p]=Tm(f,e,!0);Kt(a,d),p&&o.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return vt(t)&&i.set(t,jr),jr;if(Ye(s))for(let u=0;u<s.length;u++){const f=Sn(s[u]);Qf(f)&&(a[f]=Ct)}else if(s)for(const u in s){const f=Sn(u);if(Qf(f)){const d=s[u],p=a[f]=Ye(d)||Ke(d)?{type:d}:Kt({},d),_=p.type;let v=!1,m=!0;if(Ye(_))for(let h=0;h<_.length;++h){const y=_[h],T=Ke(y)&&y.name;if(T==="Boolean"){v=!0;break}else T==="String"&&(m=!1)}else v=Ke(_)&&_.name==="Boolean";p[0]=v,p[1]=m,(v||gt(p,"default"))&&o.push(f)}}const c=[a,o];return vt(t)&&i.set(t,c),c}function Qf(t){return t[0]!=="$"&&!Hs(t)}const Tu=t=>t==="_"||t==="_ctx"||t==="$stable",wu=t=>Ye(t)?t.map(jn):[jn(t)],H_=(t,e,n)=>{if(e._n)return e;const i=sn((...r)=>wu(e(...r)),n);return i._c=!1,i},wm=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Tu(r))continue;const s=t[r];if(Ke(s))e[r]=H_(r,s,i);else if(s!=null){const a=wu(s);e[r]=()=>a}}},Am=(t,e)=>{const n=wu(e);t.slots.default=()=>n},Rm=(t,e,n)=>{for(const i in e)(n||!Tu(i))&&(t[i]=e[i])},W_=(t,e,n)=>{const i=t.slots=bm();if(t.vnode.shapeFlag&32){const r=e._;r?(Rm(i,e,n),n&&Op(i,"_",r,!0)):wm(e,i)}else e&&Am(t,e)},X_=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=Ct;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:Rm(r,e,n):(s=!e.$stable,wm(e,r)),a=e}else e&&(Am(t,e),a={default:1});if(s)for(const o in r)!Tu(o)&&a[o]==null&&delete r[o]},_n=K_;function q_(t){return Y_(t)}function Y_(t,e){const n=Po();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=ri,insertStaticContent:_}=t,v=(C,N,X,ee=null,$=null,ie=null,A=void 0,le=null,se=!!N.dynamicChildren)=>{if(C===N)return;C&&!Cs(C,N)&&(ee=ne(C),ze(C,$,ie,!0),C=null),N.patchFlag===-2&&(se=!1,N.dynamicChildren=null);const{type:j,ref:ae,shapeFlag:S}=N;switch(j){case Fo:m(C,N,X,ee);break;case li:h(C,N,X,ee);break;case sl:C==null&&y(N,X,ee,A);break;case Yt:F(C,N,X,ee,$,ie,A,le,se);break;default:S&1?w(C,N,X,ee,$,ie,A,le,se):S&6?V(C,N,X,ee,$,ie,A,le,se):(S&64||S&128)&&j.process(C,N,X,ee,$,ie,A,le,se,Ae)}ae!=null&&$?qs(ae,C&&C.ref,ie,N||C,!N):ae==null&&C&&C.ref!=null&&qs(C.ref,null,ie,C,!0)},m=(C,N,X,ee)=>{if(C==null)i(N.el=o(N.children),X,ee);else{const $=N.el=C.el;N.children!==C.children&&c($,N.children)}},h=(C,N,X,ee)=>{C==null?i(N.el=l(N.children||""),X,ee):N.el=C.el},y=(C,N,X,ee)=>{[C.el,C.anchor]=_(C.children,N,X,ee,C.el,C.anchor)},T=({el:C,anchor:N},X,ee)=>{let $;for(;C&&C!==N;)$=d(C),i(C,X,ee),C=$;i(N,X,ee)},b=({el:C,anchor:N})=>{let X;for(;C&&C!==N;)X=d(C),r(C),C=X;r(N)},w=(C,N,X,ee,$,ie,A,le,se)=>{if(N.type==="svg"?A="svg":N.type==="math"&&(A="mathml"),C==null)R(N,X,ee,$,ie,A,le,se);else{const j=C.el&&C.el._isVueCE?C.el:null;try{j&&j._beginPatch(),x(C,N,$,ie,A,le,se)}finally{j&&j._endPatch()}}},R=(C,N,X,ee,$,ie,A,le)=>{let se,j;const{props:ae,shapeFlag:S,transition:g,dirs:D}=C;if(se=C.el=a(C.type,ie,ae&&ae.is,ae),S&8?u(se,C.children):S&16&&L(C.children,se,null,ee,$,rl(C,ie),A,le),D&&ar(C,null,ee,"created"),P(se,C,C.scopeId,A,ee),ae){for(const Q in ae)Q!=="value"&&!Hs(Q)&&s(se,Q,null,ae[Q],ie,ee);"value"in ae&&s(se,"value",null,ae.value,ie),(j=ae.onVnodeBeforeMount)&&$n(j,ee,C)}D&&ar(C,null,ee,"beforeMount");const q=$_($,g);q&&g.beforeEnter(se),i(se,N,X),((j=ae&&ae.onVnodeMounted)||q||D)&&_n(()=>{j&&$n(j,ee,C),q&&g.enter(se),D&&ar(C,null,ee,"mounted")},$)},P=(C,N,X,ee,$)=>{if(X&&p(C,X),ee)for(let ie=0;ie<ee.length;ie++)p(C,ee[ie]);if($){let ie=$.subTree;if(N===ie||Im(ie.type)&&(ie.ssContent===N||ie.ssFallback===N)){const A=$.vnode;P(C,A,A.scopeId,A.slotScopeIds,$.parent)}}},L=(C,N,X,ee,$,ie,A,le,se=0)=>{for(let j=se;j<C.length;j++){const ae=C[j]=le?bi(C[j]):jn(C[j]);v(null,ae,N,X,ee,$,ie,A,le)}},x=(C,N,X,ee,$,ie,A)=>{const le=N.el=C.el;let{patchFlag:se,dynamicChildren:j,dirs:ae}=N;se|=C.patchFlag&16;const S=C.props||Ct,g=N.props||Ct;let D;if(X&&or(X,!1),(D=g.onVnodeBeforeUpdate)&&$n(D,X,N,C),ae&&ar(N,C,X,"beforeUpdate"),X&&or(X,!0),(S.innerHTML&&g.innerHTML==null||S.textContent&&g.textContent==null)&&u(le,""),j?M(C.dynamicChildren,j,le,X,ee,rl(N,$),ie):A||k(C,N,le,null,X,ee,rl(N,$),ie,!1),se>0){if(se&16)I(le,S,g,X,$);else if(se&2&&S.class!==g.class&&s(le,"class",null,g.class,$),se&4&&s(le,"style",S.style,g.style,$),se&8){const q=N.dynamicProps;for(let Q=0;Q<q.length;Q++){const W=q[Q],Ee=S[W],ue=g[W];(ue!==Ee||W==="value")&&s(le,W,Ee,ue,$,X)}}se&1&&C.children!==N.children&&u(le,N.children)}else!A&&j==null&&I(le,S,g,X,$);((D=g.onVnodeUpdated)||ae)&&_n(()=>{D&&$n(D,X,N,C),ae&&ar(N,C,X,"updated")},ee)},M=(C,N,X,ee,$,ie,A)=>{for(let le=0;le<N.length;le++){const se=C[le],j=N[le],ae=se.el&&(se.type===Yt||!Cs(se,j)||se.shapeFlag&198)?f(se.el):X;v(se,j,ae,null,ee,$,ie,A,!0)}},I=(C,N,X,ee,$)=>{if(N!==X){if(N!==Ct)for(const ie in N)!Hs(ie)&&!(ie in X)&&s(C,ie,N[ie],null,$,ee);for(const ie in X){if(Hs(ie))continue;const A=X[ie],le=N[ie];A!==le&&ie!=="value"&&s(C,ie,le,A,$,ee)}"value"in X&&s(C,"value",N.value,X.value,$)}},F=(C,N,X,ee,$,ie,A,le,se)=>{const j=N.el=C?C.el:o(""),ae=N.anchor=C?C.anchor:o("");let{patchFlag:S,dynamicChildren:g,slotScopeIds:D}=N;D&&(le=le?le.concat(D):D),C==null?(i(j,X,ee),i(ae,X,ee),L(N.children||[],X,ae,$,ie,A,le,se)):S>0&&S&64&&g&&C.dynamicChildren&&C.dynamicChildren.length===g.length?(M(C.dynamicChildren,g,X,$,ie,A,le),(N.key!=null||$&&N===$.subTree)&&Cm(C,N,!0)):k(C,N,X,ae,$,ie,A,le,se)},V=(C,N,X,ee,$,ie,A,le,se)=>{N.slotScopeIds=le,C==null?N.shapeFlag&512?$.ctx.activate(N,X,ee,A,se):Z(N,X,ee,$,ie,A,se):K(C,N,se)},Z=(C,N,X,ee,$,ie,A)=>{const le=C.component=nv(C,ee,$);if(dm(C)&&(le.ctx.renderer=Ae),iv(le,!1,A),le.asyncDep){if($&&$.registerDep(le,G,A),!C.el){const se=le.subTree=Gt(li);h(null,se,N,X),C.placeholder=se.el}}else G(le,C,N,X,$,ie,A)},K=(C,N,X)=>{const ee=N.component=C.component;if(B_(C,N,X))if(ee.asyncDep&&!ee.asyncResolved){B(ee,N,X);return}else ee.next=N,ee.update();else N.el=C.el,ee.vnode=N},G=(C,N,X,ee,$,ie,A)=>{const le=()=>{if(C.isMounted){let{next:S,bu:g,u:D,parent:q,vnode:Q}=C;{const Fe=Pm(C);if(Fe){S&&(S.el=Q.el,B(C,S,A)),Fe.asyncDep.then(()=>{_n(()=>{C.isUnmounted||j()},$)});return}}let W=S,Ee;or(C,!1),S?(S.el=Q.el,B(C,S,A)):S=Q,g&&Qo(g),(Ee=S.props&&S.props.onVnodeBeforeUpdate)&&$n(Ee,q,S,Q),or(C,!0);const ue=Kf(C),Re=C.subTree;C.subTree=ue,v(Re,ue,f(Re.el),ne(Re),C,$,ie),S.el=ue.el,W===null&&k_(C,ue.el),D&&_n(D,$),(Ee=S.props&&S.props.onVnodeUpdated)&&_n(()=>$n(Ee,q,S,Q),$)}else{let S;const{el:g,props:D}=N,{bm:q,m:Q,parent:W,root:Ee,type:ue}=C,Re=is(N);or(C,!1),q&&Qo(q),!Re&&(S=D&&D.onVnodeBeforeMount)&&$n(S,W,N),or(C,!0);{Ee.ce&&Ee.ce._hasShadowRoot()&&Ee.ce._injectChildStyle(ue);const Fe=C.subTree=Kf(C);v(null,Fe,X,ee,C,$,ie),N.el=Fe.el}if(Q&&_n(Q,$),!Re&&(S=D&&D.onVnodeMounted)){const Fe=N;_n(()=>$n(S,W,Fe),$)}(N.shapeFlag&256||W&&is(W.vnode)&&W.vnode.shapeFlag&256)&&C.a&&_n(C.a,$),C.isMounted=!0,N=X=ee=null}};C.scope.on();const se=C.effect=new zp(le);C.scope.off();const j=C.update=se.run.bind(se),ae=C.job=se.runIfDirty.bind(se);ae.i=C,ae.id=C.uid,se.scheduler=()=>xu(ae),or(C,!0),j()},B=(C,N,X)=>{N.component=C;const ee=C.vnode.props;C.vnode=N,C.next=null,V_(C,N.props,ee,X),X_(C,N.children,X),Ci(),Gf(C),Pi()},k=(C,N,X,ee,$,ie,A,le,se=!1)=>{const j=C&&C.children,ae=C?C.shapeFlag:0,S=N.children,{patchFlag:g,shapeFlag:D}=N;if(g>0){if(g&128){me(j,S,X,ee,$,ie,A,le,se);return}else if(g&256){pe(j,S,X,ee,$,ie,A,le,se);return}}D&8?(ae&16&&te(j,$,ie),S!==j&&u(X,S)):ae&16?D&16?me(j,S,X,ee,$,ie,A,le,se):te(j,$,ie,!0):(ae&8&&u(X,""),D&16&&L(S,X,ee,$,ie,A,le,se))},pe=(C,N,X,ee,$,ie,A,le,se)=>{C=C||jr,N=N||jr;const j=C.length,ae=N.length,S=Math.min(j,ae);let g;for(g=0;g<S;g++){const D=N[g]=se?bi(N[g]):jn(N[g]);v(C[g],D,X,null,$,ie,A,le,se)}j>ae?te(C,$,ie,!0,!1,S):L(N,X,ee,$,ie,A,le,se,S)},me=(C,N,X,ee,$,ie,A,le,se)=>{let j=0;const ae=N.length;let S=C.length-1,g=ae-1;for(;j<=S&&j<=g;){const D=C[j],q=N[j]=se?bi(N[j]):jn(N[j]);if(Cs(D,q))v(D,q,X,null,$,ie,A,le,se);else break;j++}for(;j<=S&&j<=g;){const D=C[S],q=N[g]=se?bi(N[g]):jn(N[g]);if(Cs(D,q))v(D,q,X,null,$,ie,A,le,se);else break;S--,g--}if(j>S){if(j<=g){const D=g+1,q=D<ae?N[D].el:ee;for(;j<=g;)v(null,N[j]=se?bi(N[j]):jn(N[j]),X,q,$,ie,A,le,se),j++}}else if(j>g)for(;j<=S;)ze(C[j],$,ie,!0),j++;else{const D=j,q=j,Q=new Map;for(j=q;j<=g;j++){const Se=N[j]=se?bi(N[j]):jn(N[j]);Se.key!=null&&Q.set(Se.key,j)}let W,Ee=0;const ue=g-q+1;let Re=!1,Fe=0;const ce=new Array(ue);for(j=0;j<ue;j++)ce[j]=0;for(j=D;j<=S;j++){const Se=C[j];if(Ee>=ue){ze(Se,$,ie,!0);continue}let Pe;if(Se.key!=null)Pe=Q.get(Se.key);else for(W=q;W<=g;W++)if(ce[W-q]===0&&Cs(Se,N[W])){Pe=W;break}Pe===void 0?ze(Se,$,ie,!0):(ce[Pe-q]=j+1,Pe>=Fe?Fe=Pe:Re=!0,v(Se,N[Pe],X,null,$,ie,A,le,se),Ee++)}const _e=Re?J_(ce):jr;for(W=_e.length-1,j=ue-1;j>=0;j--){const Se=q+j,Pe=N[Se],ge=N[Se+1],Qe=Se+1<ae?ge.el||Dm(ge):ee;ce[j]===0?v(null,Pe,X,Qe,$,ie,A,le,se):Re&&(W<0||j!==_e[W]?ve(Pe,X,Qe,2):W--)}}},ve=(C,N,X,ee,$=null)=>{const{el:ie,type:A,transition:le,children:se,shapeFlag:j}=C;if(j&6){ve(C.component.subTree,N,X,ee);return}if(j&128){C.suspense.move(N,X,ee);return}if(j&64){A.move(C,N,X,Ae);return}if(A===Yt){i(ie,N,X);for(let S=0;S<se.length;S++)ve(se[S],N,X,ee);i(C.anchor,N,X);return}if(A===sl){T(C,N,X);return}if(ee!==2&&j&1&&le)if(ee===0)le.beforeEnter(ie),i(ie,N,X),_n(()=>le.enter(ie),$);else{const{leave:S,delayLeave:g,afterLeave:D}=le,q=()=>{C.ctx.isUnmounted?r(ie):i(ie,N,X)},Q=()=>{ie._isLeaving&&ie[u_](!0),S(ie,()=>{q(),D&&D()})};g?g(ie,q,Q):Q()}else i(ie,N,X)},ze=(C,N,X,ee=!1,$=!1)=>{const{type:ie,props:A,ref:le,children:se,dynamicChildren:j,shapeFlag:ae,patchFlag:S,dirs:g,cacheIndex:D}=C;if(S===-2&&($=!1),le!=null&&(Ci(),qs(le,null,X,C,!0),Pi()),D!=null&&(N.renderCache[D]=void 0),ae&256){N.ctx.deactivate(C);return}const q=ae&1&&g,Q=!is(C);let W;if(Q&&(W=A&&A.onVnodeBeforeUnmount)&&$n(W,N,C),ae&6)ut(C.component,X,ee);else{if(ae&128){C.suspense.unmount(X,ee);return}q&&ar(C,null,N,"beforeUnmount"),ae&64?C.type.remove(C,N,X,Ae,ee):j&&!j.hasOnce&&(ie!==Yt||S>0&&S&64)?te(j,N,X,!1,!0):(ie===Yt&&S&384||!$&&ae&16)&&te(se,N,X),ee&&Oe(C)}(Q&&(W=A&&A.onVnodeUnmounted)||q)&&_n(()=>{W&&$n(W,N,C),q&&ar(C,null,N,"unmounted")},X)},Oe=C=>{const{type:N,el:X,anchor:ee,transition:$}=C;if(N===Yt){nt(X,ee);return}if(N===sl){b(C);return}const ie=()=>{r(X),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(C.shapeFlag&1&&$&&!$.persisted){const{leave:A,delayLeave:le}=$,se=()=>A(X,ie);le?le(C.el,ie,se):se()}else ie()},nt=(C,N)=>{let X;for(;C!==N;)X=d(C),r(C),C=X;r(N)},ut=(C,N,X)=>{const{bum:ee,scope:$,job:ie,subTree:A,um:le,m:se,a:j}=C;jf(se),jf(j),ee&&Qo(ee),$.stop(),ie&&(ie.flags|=8,ze(A,C,N,X)),le&&_n(le,N),_n(()=>{C.isUnmounted=!0},N)},te=(C,N,X,ee=!1,$=!1,ie=0)=>{for(let A=ie;A<C.length;A++)ze(C[A],N,X,ee,$)},ne=C=>{if(C.shapeFlag&6)return ne(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const N=d(C.anchor||C.el),X=N&&N[l_];return X?d(X):N};let Ce=!1;const We=(C,N,X)=>{let ee;C==null?N._vnode&&(ze(N._vnode,null,null,!0),ee=N._vnode.component):v(N._vnode||null,C,N,null,null,null,X),N._vnode=C,Ce||(Ce=!0,Gf(ee),om(),Ce=!1)},Ae={p:v,um:ze,m:ve,r:Oe,mt:Z,mc:L,pc:k,pbc:M,n:ne,o:t};return{render:We,hydrate:void 0,createApp:I_(We)}}function rl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function or({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function $_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Cm(t,e,n=!1){const i=t.children,r=e.children;if(Ye(i)&&Ye(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=bi(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&Cm(a,o)),o.type===Fo&&(o.patchFlag===-1&&(o=r[s]=bi(o)),o.el=a.el),o.type===li&&!o.el&&(o.el=a.el)}}function J_(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<c?s=o+1:a=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function Pm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pm(e)}function jf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Dm(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Dm(e.subTree):null}const Im=t=>t.__isSuspense;function K_(t,e){e&&e.pendingBranch?Ye(t)?e.effects.push(...t):e.effects.push(t):i_(t)}const Yt=Symbol.for("v-fgt"),Fo=Symbol.for("v-txt"),li=Symbol.for("v-cmt"),sl=Symbol.for("v-stc"),$s=[];let Rn=null;function mt(t=!1){$s.push(Rn=t?null:[])}function Z_(){$s.pop(),Rn=$s[$s.length-1]||null}let ia=1;function _o(t,e=!1){ia+=t,t<0&&Rn&&e&&(Rn.hasOnce=!0)}function Lm(t){return t.dynamicChildren=ia>0?Rn||jr:null,Z_(),ia>0&&Rn&&Rn.push(t),t}function Qn(t,e,n,i,r,s){return Lm(Au(t,e,n,i,r,s,!0))}function Ot(t,e,n,i,r){return Lm(Gt(t,e,n,i,r,!0))}function ra(t){return t?t.__v_isVNode===!0:!1}function Cs(t,e){return t.type===e.type&&t.key===e.key}const Nm=({key:t})=>t??null,to=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ft(t)||Ut(t)||Ke(t)?{i:fn,r:t,k:e,f:!!n}:t:null);function Au(t,e=null,n=null,i=0,r=null,s=t===Yt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Nm(e),ref:e&&to(e),scopeId:cm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:fn};return o?(Ru(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ft(n)?8:16),ia>0&&!a&&Rn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Rn.push(l),l}const Gt=Q_;function Q_(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===pm)&&(t=li),ra(t)){const o=Mr(t,e,!0);return n&&Ru(o,n),ia>0&&!s&&Rn&&(o.shapeFlag&6?Rn[Rn.indexOf(t)]=o:Rn.push(o)),o.patchFlag=-2,o}if(lv(t)&&(t=t.__vccOpts),e){e=j_(e);let{class:o,style:l}=e;o&&!Ft(o)&&(e.class=Do(o)),vt(l)&&(Lo(l)&&!Ye(l)&&(l=Kt({},l)),e.style=vs(l))}const a=Ft(t)?1:Im(t)?128:c_(t)?64:vt(t)?4:Ke(t)?2:0;return Au(t,e,n,i,r,a,s,!0)}function j_(t){return t?Lo(t)||Mm(t)?Kt({},t):t:null}function Mr(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,c=e?ci(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Nm(c),ref:e&&e.ref?n&&s?Ye(s)?s.concat(to(e)):[s,to(e)]:to(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Yt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mr(t.ssContent),ssFallback:t.ssFallback&&Mr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&bu(u,l.clone(u)),u}function Um(t=" ",e=0){return Gt(Fo,null,t,e)}function Js(t="",e=!1){return e?(mt(),Ot(li,null,t)):Gt(li,null,t)}function jn(t){return t==null||typeof t=="boolean"?Gt(li):Ye(t)?Gt(Yt,null,t.slice()):ra(t)?bi(t):Gt(Fo,null,String(t))}function bi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Mr(t)}function Ru(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ye(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ru(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Mm(e)?e._ctx=fn:r===3&&fn&&(fn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ke(e)?(e={default:e,_ctx:fn},n=32):(e=String(e),i&64?(n=16,e=[Um(e)]):n=8);t.children=e,t.shapeFlag|=n}function ci(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Do([e.class,i.class]));else if(r==="style")e.style=vs([e.style,i.style]);else if(wo(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ye(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function $n(t,e,n,i=null){oi(t,e,7,[n,i])}const ev=vm();let tv=0;function nv(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||ev,s={uid:tv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new M0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tm(i,r),emitsOptions:xm(i,r),emit:null,emitted:null,propsDefaults:Ct,inheritAttrs:i.inheritAttrs,ctx:Ct,data:Ct,props:Ct,attrs:Ct,slots:Ct,refs:Ct,setupState:Ct,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=N_.bind(null,s),t.ce&&t.ce(s),s}let en=null;const xs=()=>en||fn;let vo,rc;{const t=Po(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};vo=e("__VUE_INSTANCE_SETTERS__",n=>en=n),rc=e("__VUE_SSR_SETTERS__",n=>sa=n)}const pa=t=>{const e=en;return vo(t),t.scope.on(),()=>{t.scope.off(),vo(e)}},ed=()=>{en&&en.scope.off(),vo(null)};function Om(t){return t.vnode.shapeFlag&4}let sa=!1;function iv(t,e=!1,n=!1){e&&rc(e);const{props:i,children:r}=t.vnode,s=Om(t);z_(t,i,s,e),W_(t,r,n||e);const a=s?rv(t,e):void 0;return e&&rc(!1),a}function rv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,T_);const{setup:i}=n;if(i){Ci();const r=t.setupContext=i.length>1?av(t):null,s=pa(t),a=da(i,t,0,[t.props,r]),o=Lp(a);if(Pi(),s(),(o||t.sp)&&!is(t)&&fm(t),o){if(a.then(ed,ed),e)return a.then(l=>{td(t,l)}).catch(l=>{No(l,t,0)});t.asyncDep=a}else td(t,a)}else Fm(t)}function td(t,e,n){Ke(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:vt(e)&&(t.setupState=nm(e)),Fm(t)}function Fm(t,e,n){const i=t.type;t.render||(t.render=i.render||ri);{const r=pa(t);Ci();try{w_(t)}finally{Pi(),r()}}}const sv={get(t,e){return jt(t,"get",""),t[e]}};function av(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sv),slots:t.slots,emit:t.emit,expose:e}}function Cu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(nm(em(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ys)return Ys[n](t)},has(e,n){return n in e||n in Ys}})):t.proxy}function ov(t,e=!0){return Ke(t)?t.displayName||t.name:t.name||e&&t.__name}function lv(t){return Ke(t)&&"__vccOpts"in t}const lt=(t,e)=>Q0(t,e,sa);function Ks(t,e,n){try{_o(-1);const i=arguments.length;return i===2?vt(e)&&!Ye(e)?ra(e)?Gt(t,null,[e]):Gt(t,e):Gt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ra(n)&&(n=[n]),Gt(t,e,n))}finally{_o(1)}}const cv="3.5.28";let sc;const nd=typeof window<"u"&&window.trustedTypes;if(nd)try{sc=nd.createPolicy("vue",{createHTML:t=>t})}catch{}const Bm=sc?t=>sc.createHTML(t):t=>t,uv="http://www.w3.org/2000/svg",fv="http://www.w3.org/1998/Math/MathML",Si=typeof document<"u"?document:null,id=Si&&Si.createElement("template"),dv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Si.createElementNS(uv,t):e==="mathml"?Si.createElementNS(fv,t):n?Si.createElement(t,{is:n}):Si.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Si.createTextNode(t),createComment:t=>Si.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Si.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{id.innerHTML=Bm(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const o=id.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},hv=Symbol("_vtc");function pv(t,e,n){const i=t[hv];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const rd=Symbol("_vod"),mv=Symbol("_vsh"),gv=Symbol(""),_v=/(?:^|;)\s*display\s*:/;function vv(t,e,n){const i=t.style,r=Ft(n);let s=!1;if(n&&!r){if(e)if(Ft(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&no(i,o,"")}else for(const a in e)n[a]==null&&no(i,a,"");for(const a in n)a==="display"&&(s=!0),no(i,a,n[a])}else if(r){if(e!==n){const a=i[gv];a&&(n+=";"+a),i.cssText=n,s=_v.test(n)}}else e&&t.removeAttribute("style");rd in t&&(t[rd]=s?i.display:"",t[mv]&&(i.display="none"))}const sd=/\s*!important$/;function no(t,e,n){if(Ye(n))n.forEach(i=>no(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=xv(t,e);sd.test(n)?t.setProperty(wr(i),n.replace(sd,""),"important"):t[i]=n}}const ad=["Webkit","Moz","ms"],al={};function xv(t,e){const n=al[e];if(n)return n;let i=Sn(e);if(i!=="filter"&&i in t)return al[e]=i;i=Co(i);for(let r=0;r<ad.length;r++){const s=ad[r]+i;if(s in t)return al[e]=s}return e}const od="http://www.w3.org/1999/xlink";function ld(t,e,n,i,r,s=S0(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(od,e.slice(6,e.length)):t.setAttributeNS(od,e,n):n==null||s&&!Fp(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Gn(n)?String(n):n)}function cd(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Bm(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Fp(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function yv(t,e,n,i){t.addEventListener(e,n,i)}function Sv(t,e,n,i){t.removeEventListener(e,n,i)}const ud=Symbol("_vei");function bv(t,e,n,i,r=null){const s=t[ud]||(t[ud]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Mv(e);if(i){const c=s[e]=wv(i,r);yv(t,o,c,l)}else a&&(Sv(t,o,a,l),s[e]=void 0)}}const fd=/(?:Once|Passive|Capture)$/;function Mv(t){let e;if(fd.test(t)){e={};let i;for(;i=t.match(fd);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):wr(t.slice(2)),e]}let ol=0;const Ev=Promise.resolve(),Tv=()=>ol||(Ev.then(()=>ol=0),ol=Date.now());function wv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;oi(Av(i,n.value),e,5,[i])};return n.value=t,n.attached=Tv(),n}function Av(t,e){if(Ye(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const dd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Rv=(t,e,n,i,r,s)=>{const a=r==="svg";e==="class"?pv(t,i,a):e==="style"?vv(t,n,i):wo(e)?cu(e)||bv(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cv(t,e,i,a))?(cd(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ld(t,e,i,a,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ft(i))?cd(t,Sn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),ld(t,e,i,a))};function Cv(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&dd(e)&&Ke(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return dd(e)&&Ft(n)?!1:e in t}const Pv=Kt({patchProp:Rv},dv);let hd;function Dv(){return hd||(hd=q_(Pv))}const Iv=((...t)=>{const e=Dv().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Nv(i);if(!r)return;const s=e._component;!Ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,Lv(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function Lv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Nv(t){return Ft(t)?document.querySelector(t):t}function km(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=km(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function zm(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=km(t))&&(i&&(i+=" "),i+=e);return i}const pd=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,md=zm,Uv=(t,e)=>n=>{var i;if(e?.variants==null)return md(t,n?.class,n?.className);const{variants:r,defaultVariants:s}=e,a=Object.keys(r).map(c=>{const u=n?.[c],f=s?.[c];if(u===null)return null;const d=pd(u)||pd(f);return r[c][d]}),o=n&&Object.entries(n).reduce((c,u)=>{let[f,d]=u;return d===void 0||(c[f]=d),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,u)=>{let{class:f,className:d,...p}=u;return Object.entries(p).every(_=>{let[v,m]=_;return Array.isArray(m)?m.includes({...s,...o}[v]):{...s,...o}[v]===m})?[...c,f,d]:c},[]);return md(t,a,l,n?.class,n?.className)};function Vm(t,e=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY){return Math.min(n,Math.max(e,t))}function Pu(t,e){const n=typeof t=="string"&&!e?`${t}Context`:e,i=Symbol(n);return[a=>{const o=ns(i,a);if(o||o===null)return o;throw new Error(`Injection \`${i.toString()}\` not found. Component must be used within ${Array.isArray(t)?`one of the following components: ${t.join(", ")}`:`\`${t}\``}`)},a=>(yu(i,a),a)]}function Gm(t){return t?t.flatMap(e=>e.type===Yt?Gm(e.children):[e]):[]}const[Ov]=Pu("ConfigProvider");typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Fv=t=>typeof t<"u";function Bv(t){return cs(Ut(t)?new Proxy({},{get(e,n,i){return ye(Reflect.get(t.value,n,i))},set(e,n,i){return Ut(t.value[n])&&!Ut(i)?t.value[n].value=i:t.value[n]=i,!0},deleteProperty(e,n){return Reflect.deleteProperty(t.value,n)},has(e,n){return Reflect.has(t.value,n)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}}):t)}function kv(t){return Bv(lt(t))}function zv(t,...e){const n=e.flat(),i=n[0];return kv(()=>Object.fromEntries(typeof i=="function"?Object.entries(ta(t)).filter(([r,s])=>!i(vu(s),r)):Object.entries(ta(t)).filter(r=>!n.includes(r[0]))))}function Bo(t){var e;const n=vu(t);return(e=n?.$el)!==null&&e!==void 0?e:n}function Vv(){const t=X0(!1),e=xs();return e&&ha(()=>{t.value=!0},e),t}function Gv(t){return JSON.parse(JSON.stringify(t))}function Hv(t,e,n,i={}){var r,s;const{clone:a=!1,passive:o=!1,eventName:l,deep:c=!1,defaultValue:u,shouldEmit:f}=i,d=xs(),p=n||d?.emit||(d==null||(r=d.$emit)===null||r===void 0?void 0:r.bind(d))||(d==null||(s=d.proxy)===null||s===void 0||(s=s.$emit)===null||s===void 0?void 0:s.bind(d?.proxy));let _=l;_=_||`update:${e.toString()}`;const v=y=>a?typeof a=="function"?a(y):Gv(y):y,m=()=>Fv(t[e])?v(t[e]):u,h=y=>{f?f(y)&&p(_,y):p(_,y)};if(o){const y=nn(m());let T=!1;return br(()=>t[e],b=>{T||(T=!0,y.value=v(b),sm(()=>T=!1))}),br(y,b=>{!T&&(b!==t[e]||c)&&h(b)},{deep:c}),y}else return lt({get(){return m()},set(y){h(y)}})}function Wv(t){const e=Ov({dir:nn("ltr")});return lt(()=>t?.value||e.dir?.value||"ltr")}function Xv(t){const e=xs(),n=e?.type.emits,i={};return n?.length||console.warn(`No emitted event found. Please check component: ${e?.type.__name}`),n?.forEach(r=>{i[ja(Sn(r))]=(...s)=>t(r,...s)}),i}function qv(t){return lt(()=>vu(t)?!!Bo(t)?.closest("form"):!0)}function Ar(){const t=xs(),e=nn(),n=lt(()=>["#text","#comment"].includes(e.value?.$el.nodeName)?e.value?.$el.nextElementSibling:Bo(e)),i=Object.assign({},t.exposed),r={};for(const a in t.props)Object.defineProperty(r,a,{enumerable:!0,configurable:!0,get:()=>t.props[a]});if(Object.keys(i).length>0)for(const a in i)Object.defineProperty(r,a,{enumerable:!0,configurable:!0,get:()=>i[a]});Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>t.vnode.el}),t.exposed=r;function s(a){if(e.value=a,!!a&&(Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>a instanceof Element?a:a.$el}),!(a instanceof Element)&&!Object.hasOwn(a,"$el"))){const o=a.$.exposed,l=Object.assign({},r);for(const c in o)Object.defineProperty(l,c,{enumerable:!0,configurable:!0,get:()=>o[c]});t.exposed=l}}return{forwardRef:s,currentRef:e,currentElement:n}}function Yv(t){const e=xs(),n=Object.keys(e?.type.props??{}).reduce((r,s)=>{const a=(e?.type.props[s]).default;return a!==void 0&&(r[s]=a),r},{}),i=K0(t);return lt(()=>{const r={},s=e?.vnode.props??{};return Object.keys(s).forEach(a=>{r[Sn(a)]=s[a]}),Object.keys({...n,...r}).reduce((a,o)=>(i.value[o]!==void 0&&(a[o]=i.value[o]),a),{})})}function $v(t,e){const n=Yv(t),i=e?Xv(e):{};return lt(()=>({...n.value,...i}))}function Jv(t){const e=nn(),n=lt(()=>e.value?.width??0),i=lt(()=>e.value?.height??0);return ha(()=>{const r=Bo(t);if(r){e.value={width:r.offsetWidth,height:r.offsetHeight};const s=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const o=a[0];let l,c;if("borderBoxSize"in o){const u=o.borderBoxSize,f=Array.isArray(u)?u[0]:u;l=f.inlineSize,c=f.blockSize}else l=r.offsetWidth,c=r.offsetHeight;e.value={width:l,height:c}});return s.observe(r,{box:"border-box"}),()=>s.unobserve(r)}else e.value=void 0}),{width:n,height:i}}const ac=Ht({name:"PrimitiveSlot",inheritAttrs:!1,setup(t,{attrs:e,slots:n}){return()=>{if(!n.default)return null;const i=Gm(n.default()),r=i.findIndex(l=>l.type!==li);if(r===-1)return i;const s=i[r];delete s.props?.ref;const a=s.props?ci(e,s.props):e,o=Mr({...s,props:{}},a);return i.length===1?o:(i[r]=o,i)}}}),Kv=["area","img","input"],ys=Ht({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(t,{attrs:e,slots:n}){const i=t.asChild?"template":t.as;return typeof i=="string"&&Kv.includes(i)?()=>Ks(i,e):i!=="template"?()=>Ks(t.as,e,{default:n.default}):()=>Ks(ac,e,{default:n.default})}});function oc(){const t=nn(),e=lt(()=>["#text","#comment"].includes(t.value?.$el.nodeName)?t.value?.$el.nextElementSibling:Bo(t));return{primitiveElement:t,currentElement:e}}const gd="data-reka-collection-item";function Du(t={}){const{key:e="",isProvider:n=!1}=t,i=`${e}CollectionProvider`;let r;n?(r={collectionRef:nn(),itemMap:nn(new Map)},yu(i,r)):r=ns(i);const s=(u=!1)=>{const f=r.collectionRef.value;if(!f)return[];const d=Array.from(f.querySelectorAll(`[${gd}]`)),_=Array.from(r.itemMap.value.values()).sort((v,m)=>d.indexOf(v.ref)-d.indexOf(m.ref));return u?_:_.filter(v=>v.ref.dataset.disabled!=="")},a=Ht({name:"CollectionSlot",inheritAttrs:!1,setup(u,{slots:f,attrs:d}){const{primitiveElement:p,currentElement:_}=oc();return br(_,()=>{r.collectionRef.value=_.value}),()=>Ks(ac,{ref:p,...d},f)}}),o=Ht({name:"CollectionItem",inheritAttrs:!1,props:{value:{validator:()=>!0}},setup(u,{slots:f,attrs:d}){const{primitiveElement:p,currentElement:_}=oc();return a_(v=>{if(_.value){const m=em(_.value);r.itemMap.value.set(m,{ref:_.value,value:u.value}),v(()=>r.itemMap.value.delete(m))}}),()=>Ks(ac,{...d,[gd]:"",ref:p},f)}}),l=lt(()=>Array.from(r.itemMap.value.values())),c=lt(()=>r.itemMap.value.size);return{getItems:s,reactiveItems:l,itemMapSize:c,CollectionSlot:a,CollectionItem:o}}var Zv=Ht({__name:"VisuallyHidden",props:{feature:{type:String,required:!1,default:"focusable"},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){return(e,n)=>(mt(),Ot(ye(ys),{as:e.as,"as-child":e.asChild,"aria-hidden":e.feature==="focusable"?"true":void 0,"data-hidden":e.feature==="fully-hidden"?"":void 0,tabindex:e.feature==="fully-hidden"?"-1":void 0,style:{position:"absolute",border:0,width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",whiteSpace:"nowrap",wordWrap:"normal",top:"-1px",left:"-1px"}},{default:sn(()=>[di(e.$slots,"default")]),_:3},8,["as","as-child","aria-hidden","data-hidden","tabindex"]))}}),Qv=Zv,jv=Ht({inheritAttrs:!1,__name:"VisuallyHiddenInputBubble",props:{name:{type:String,required:!0},value:{type:null,required:!0},checked:{type:Boolean,required:!1,default:void 0},required:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},feature:{type:String,required:!1,default:"fully-hidden"}},setup(t){const e=t,{primitiveElement:n,currentElement:i}=oc(),r=lt(()=>e.checked??e.value);return br(r,(s,a)=>{if(!i.value)return;const o=i.value,l=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(l,"value").set;if(u&&s!==a){const f=new Event("input",{bubbles:!0}),d=new Event("change",{bubbles:!0});u.call(o,s),o.dispatchEvent(f),o.dispatchEvent(d)}}),(s,a)=>(mt(),Ot(Qv,ci({ref_key:"primitiveElement",ref:n},{...e,...s.$attrs},{as:"input"}),null,16))}}),_d=jv,ex=Ht({inheritAttrs:!1,__name:"VisuallyHiddenInput",props:{name:{type:String,required:!0},value:{type:null,required:!0},checked:{type:Boolean,required:!1,default:void 0},required:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},feature:{type:String,required:!1,default:"fully-hidden"}},setup(t){const e=t,n=lt(()=>typeof e.value=="object"&&Array.isArray(e.value)&&e.value.length===0&&e.required),i=lt(()=>typeof e.value=="string"||typeof e.value=="number"||typeof e.value=="boolean"||e.value===null||e.value===void 0?[{name:e.name,value:e.value}]:typeof e.value=="object"&&Array.isArray(e.value)?e.value.flatMap((r,s)=>typeof r=="object"?Object.entries(r).map(([a,o])=>({name:`${e.name}[${s}][${a}]`,value:o})):{name:`${e.name}[${s}]`,value:r}):e.value!==null&&typeof e.value=="object"&&!Array.isArray(e.value)?Object.entries(e.value).map(([r,s])=>({name:`${e.name}[${r}]`,value:s})):[]);return(r,s)=>(mt(),Qn(Yt,null,[Js(" We render single input if it's required "),n.value?(mt(),Ot(_d,ci({key:r.name},{...e,...r.$attrs},{name:r.name,value:r.value}),null,16,["name","value"])):(mt(!0),Qn(Yt,{key:1},Eu(i.value,a=>(mt(),Ot(_d,ci({key:a.name},{ref_for:!0},{...e,...r.$attrs},{name:a.name,value:a.value}),null,16,["name","value"]))),128))],2112))}}),tx=ex;function nx(t=[],e,n){const i=[...t];return i[n]=e,i.sort((r,s)=>r-s)}function Hm(t,e,n){const s=100/(n-e)*(t-e);return Vm(s,0,100)}function ix(t,e){return e>2?`Value ${t+1} of ${e}`:e===2?["Minimum","Maximum"][t]:void 0}function rx(t,e){if(t.length===1)return 0;const n=t.map(r=>Math.abs(r-e)),i=Math.min(...n);return n.indexOf(i)}function sx(t,e,n){const i=t/2,s=Iu([0,50],[0,i]);return(i-s(e)*n)*n}function ax(t){return t.slice(0,-1).map((e,n)=>t[n+1]-e)}function ox(t,e){if(e>0){const n=ax(t);return Math.min(...n)>=e}return!0}function Iu(t,e){return n=>{if(t[0]===t[1]||e[0]===e[1])return e[0];const i=(e[1]-e[0])/(t[1]-t[0]);return e[0]+i*(n-t[0])}}function lx(t){return(String(t).split(".")[1]||"").length}function cx(t,e){const n=10**e;return Math.round(t*n)/n}const Wm=["PageUp","PageDown"],Xm=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],qm={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageUp","ArrowUp","ArrowLeft"]},[Ym,$m]=Pu(["SliderVertical","SliderHorizontal"]);var ux=Ht({__name:"SliderHorizontal",props:{dir:{type:String,required:!1},min:{type:Number,required:!0},max:{type:Number,required:!0},inverted:{type:Boolean,required:!0}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(t,{emit:e}){const n=t,i=e,{max:r,min:s,dir:a,inverted:o}=ta(n),{forwardRef:l,currentElement:c}=Ar(),u=Ss(),f=nn(),d=nn(),p=lt(()=>a?.value!=="rtl"&&!o.value||a?.value!=="ltr"&&o.value);function _(y,T){const b=d.value||c.value.getBoundingClientRect(),w=[...u.thumbElements.value][u.valueIndexToChangeRef.value],R=u.thumbAlignment.value==="contain"?w.clientWidth:0;!f.value&&!T&&u.thumbAlignment.value==="contain"&&(f.value=y.clientX-w.getBoundingClientRect().left);const P=[0,b.width-R],L=p.value?[s.value,r.value]:[r.value,s.value],x=Iu(P,L);d.value=b;const M=T?y.clientX-b.left-R/2:y.clientX-b.left-(f.value??0);return x(M)}const v=lt(()=>p.value?"left":"right"),m=lt(()=>p.value?"right":"left"),h=lt(()=>p.value?1:-1);return $m({startEdge:v,endEdge:m,direction:h,size:"width"}),(y,T)=>(mt(),Ot(Jm,{ref:ye(l),dir:ye(a),"data-orientation":"horizontal",style:vs({"--reka-slider-thumb-transform":!p.value&&ye(u).thumbAlignment.value==="overflow"?"translateX(50%)":"translateX(-50%)"}),onSlideStart:T[0]||(T[0]=b=>{const w=_(b,!0);i("slideStart",w)}),onSlideMove:T[1]||(T[1]=b=>{const w=_(b);i("slideMove",w)}),onSlideEnd:T[2]||(T[2]=()=>{d.value=void 0,f.value=void 0,i("slideEnd")}),onStepKeyDown:T[3]||(T[3]=b=>{const w=p.value?"from-left":"from-right",R=ye(qm)[w].includes(b.key);i("stepKeyDown",b,R?-1:1)}),onEndKeyDown:T[4]||(T[4]=b=>i("endKeyDown",b)),onHomeKeyDown:T[5]||(T[5]=b=>i("homeKeyDown",b))},{default:sn(()=>[di(y.$slots,"default")]),_:3},8,["dir","style"]))}}),fx=ux,dx=Ht({__name:"SliderVertical",props:{min:{type:Number,required:!0},max:{type:Number,required:!0},inverted:{type:Boolean,required:!0}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(t,{emit:e}){const n=t,i=e,{max:r,min:s,inverted:a}=ta(n),o=Ss(),{forwardRef:l,currentElement:c}=Ar(),u=nn(),f=nn(),d=lt(()=>!a.value);function p(h,y){const T=f.value||c.value.getBoundingClientRect(),b=[...o.thumbElements.value][o.valueIndexToChangeRef.value],w=o.thumbAlignment.value==="contain"?b.clientHeight:0;!u.value&&!y&&o.thumbAlignment.value==="contain"&&(u.value=h.clientY-b.getBoundingClientRect().top);const R=[0,T.height-w],P=d.value?[r.value,s.value]:[s.value,r.value],L=Iu(R,P),x=y?h.clientY-T.top-w/2:h.clientY-T.top-(u.value??0);return f.value=T,L(x)}const _=lt(()=>d.value?"bottom":"top"),v=lt(()=>d.value?"top":"bottom"),m=lt(()=>d.value?1:-1);return $m({startEdge:_,endEdge:v,direction:m,size:"height"}),(h,y)=>(mt(),Ot(Jm,{ref:ye(l),"data-orientation":"vertical",style:vs({"--reka-slider-thumb-transform":!d.value&&ye(o).thumbAlignment.value==="overflow"?"translateY(-50%)":"translateY(50%)"}),onSlideStart:y[0]||(y[0]=T=>{const b=p(T,!0);i("slideStart",b)}),onSlideMove:y[1]||(y[1]=T=>{const b=p(T);i("slideMove",b)}),onSlideEnd:y[2]||(y[2]=()=>{f.value=void 0,u.value=void 0,i("slideEnd")}),onStepKeyDown:y[3]||(y[3]=T=>{const b=d.value?"from-bottom":"from-top",w=ye(qm)[b].includes(T.key);i("stepKeyDown",T,w?-1:1)}),onEndKeyDown:y[4]||(y[4]=T=>i("endKeyDown",T)),onHomeKeyDown:y[5]||(y[5]=T=>i("homeKeyDown",T))},{default:sn(()=>[di(h.$slots,"default")]),_:3},8,["style"]))}}),hx=dx;const[Ss,px]=Pu("SliderRoot");var mx=Ht({inheritAttrs:!1,__name:"SliderRoot",props:{defaultValue:{type:Array,required:!1,default:()=>[0]},modelValue:{type:[Array,null],required:!1},disabled:{type:Boolean,required:!1,default:!1},orientation:{type:String,required:!1,default:"horizontal"},dir:{type:String,required:!1},inverted:{type:Boolean,required:!1,default:!1},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},step:{type:Number,required:!1,default:1},minStepsBetweenThumbs:{type:Number,required:!1,default:0},thumbAlignment:{type:String,required:!1,default:"contain"},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue","valueCommit"],setup(t,{emit:e}){const n=t,i=e,{min:r,max:s,step:a,minStepsBetweenThumbs:o,orientation:l,disabled:c,thumbAlignment:u,dir:f}=ta(n),d=Wv(f),{forwardRef:p,currentElement:_}=Ar(),v=qv(_),{CollectionSlot:m}=Du({isProvider:!0}),h=Hv(n,"modelValue",i,{defaultValue:n.defaultValue,passive:n.modelValue===void 0}),y=lt(()=>Array.isArray(h.value)?[...h.value]:[]),T=nn(0),b=nn(y.value);function w(M){const I=rx(y.value,M);L(M,I)}function R(M){L(M,T.value)}function P(){const M=b.value[T.value];y.value[T.value]!==M&&i("valueCommit",dt(y.value))}function L(M,I,{commit:F}={commit:!1}){const V=lx(a.value),Z=cx(Math.round((M-r.value)/a.value)*a.value+r.value,V),K=Vm(Z,r.value,s.value),G=nx(y.value,K,I);if(ox(G,o.value*a.value)){T.value=G.indexOf(K);const B=String(G)!==String(h.value);B&&F&&i("valueCommit",G),B&&(x.value[T.value]?.focus(),h.value=G)}}const x=nn([]);return px({modelValue:h,currentModelValue:y,valueIndexToChangeRef:T,thumbElements:x,orientation:l,min:r,max:s,disabled:c,thumbAlignment:u}),(M,I)=>(mt(),Ot(ye(m),null,{default:sn(()=>[(mt(),Ot(M_(ye(l)==="horizontal"?fx:hx),ci(M.$attrs,{ref:ye(p),"as-child":M.asChild,as:M.as,min:ye(r),max:ye(s),dir:ye(d),inverted:M.inverted,"aria-disabled":ye(c),"data-disabled":ye(c)?"":void 0,onPointerdown:I[0]||(I[0]=()=>{ye(c)||(b.value=y.value)}),onSlideStart:I[1]||(I[1]=F=>!ye(c)&&w(F)),onSlideMove:I[2]||(I[2]=F=>!ye(c)&&R(F)),onSlideEnd:I[3]||(I[3]=F=>!ye(c)&&P()),onHomeKeyDown:I[4]||(I[4]=F=>!ye(c)&&L(ye(r),0,{commit:!0})),onEndKeyDown:I[5]||(I[5]=F=>!ye(c)&&L(ye(s),y.value.length-1,{commit:!0})),onStepKeyDown:I[6]||(I[6]=(F,V)=>{if(!ye(c)){const G=ye(Wm).includes(F.key)||F.shiftKey&&ye(Xm).includes(F.key)?10:1,B=T.value,k=y.value[B],pe=ye(a)*G*V;L(k+pe,B,{commit:!0})}})}),{default:sn(()=>[di(M.$slots,"default",{modelValue:ye(h)}),ye(v)&&M.name?(mt(),Ot(ye(tx),{key:0,type:"number",value:ye(h),name:M.name,required:M.required,disabled:ye(c),step:ye(a)},null,8,["value","name","required","disabled","step"])):Js("v-if",!0)]),_:3},16,["as-child","as","min","max","dir","inverted","aria-disabled","data-disabled"]))]),_:3}))}}),gx=mx,_x=Ht({__name:"SliderImpl",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},emits:["slideStart","slideMove","slideEnd","homeKeyDown","endKeyDown","stepKeyDown"],setup(t,{emit:e}){const n=t,i=e,r=Ss();return(s,a)=>(mt(),Ot(ye(ys),ci({"data-slider-impl":""},n,{onKeydown:a[0]||(a[0]=o=>{o.key==="Home"?(i("homeKeyDown",o),o.preventDefault()):o.key==="End"?(i("endKeyDown",o),o.preventDefault()):ye(Wm).concat(ye(Xm)).includes(o.key)&&(i("stepKeyDown",o),o.preventDefault())}),onPointerdown:a[1]||(a[1]=o=>{const l=o.target;l.setPointerCapture(o.pointerId),o.preventDefault(),ye(r).thumbElements.value.includes(l)?l.focus():i("slideStart",o)}),onPointermove:a[2]||(a[2]=o=>{o.target.hasPointerCapture(o.pointerId)&&i("slideMove",o)}),onPointerup:a[3]||(a[3]=o=>{const l=o.target;l.hasPointerCapture(o.pointerId)&&(l.releasePointerCapture(o.pointerId),i("slideEnd",o))})}),{default:sn(()=>[di(s.$slots,"default")]),_:3},16))}}),Jm=_x,vx=Ht({__name:"SliderRange",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const e=Ss(),n=Ym();Ar();const i=lt(()=>e.currentModelValue.value.map(a=>Hm(a,e.min.value,e.max.value))),r=lt(()=>e.currentModelValue.value.length>1?Math.min(...i.value):0),s=lt(()=>100-Math.max(...i.value,0));return(a,o)=>(mt(),Ot(ye(ys),{"data-disabled":ye(e).disabled.value?"":void 0,"data-orientation":ye(e).orientation.value,"as-child":a.asChild,as:a.as,style:vs({[ye(n).startEdge.value]:`${r.value}%`,[ye(n).endEdge.value]:`${s.value}%`})},{default:sn(()=>[di(a.$slots,"default")]),_:3},8,["data-disabled","data-orientation","as-child","as","style"]))}}),xx=vx,yx=Ht({inheritAttrs:!1,__name:"SliderThumbImpl",props:{index:{type:Number,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const e=t,n=Ss(),i=Ym(),{forwardRef:r,currentElement:s}=Ar(),{CollectionItem:a}=Du(),o=lt(()=>n.modelValue?.value?.[e.index]),l=lt(()=>o.value===void 0?0:Hm(o.value,n.min.value??0,n.max.value??100)),c=lt(()=>ix(e.index,n.modelValue?.value?.length??0)),u=Jv(s),f=lt(()=>u[i.size].value),d=lt(()=>n.thumbAlignment.value==="overflow"||!f.value?0:sx(f.value,l.value,i.direction.value)),p=Vv();return ha(()=>{n.thumbElements.value.push(s.value)}),Mu(()=>{const _=n.thumbElements.value.findIndex(v=>v===s.value)??-1;n.thumbElements.value.splice(_,1)}),(_,v)=>(mt(),Ot(ye(a),null,{default:sn(()=>[Gt(ye(ys),ci(_.$attrs,{ref:ye(r),role:"slider",tabindex:ye(n).disabled.value?void 0:0,"aria-label":_.$attrs["aria-label"]||c.value,"data-disabled":ye(n).disabled.value?"":void 0,"data-orientation":ye(n).orientation.value,"aria-valuenow":o.value,"aria-valuemin":ye(n).min.value,"aria-valuemax":ye(n).max.value,"aria-orientation":ye(n).orientation.value,"as-child":_.asChild,as:_.as,style:{transform:"var(--reka-slider-thumb-transform)",position:"absolute",[ye(i).startEdge.value]:`calc(${l.value}% + ${d.value}px)`,display:!ye(p)&&o.value===void 0?"none":void 0},onFocus:v[0]||(v[0]=()=>{ye(n).valueIndexToChangeRef.value=_.index})}),{default:sn(()=>[di(_.$slots,"default")]),_:3},16,["tabindex","aria-label","data-disabled","data-orientation","aria-valuenow","aria-valuemin","aria-valuemax","aria-orientation","as-child","as","style"])]),_:3}))}}),Sx=yx,bx=Ht({__name:"SliderThumb",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const e=t,{getItems:n}=Du(),{forwardRef:i,currentElement:r}=Ar(),s=lt(()=>r.value?n(!0).findIndex(a=>a.ref===r.value):-1);return(a,o)=>(mt(),Ot(Sx,ci({ref:ye(i)},e,{index:s.value}),{default:sn(()=>[di(a.$slots,"default")]),_:3},16,["index"]))}}),Mx=bx,Ex=Ht({__name:"SliderTrack",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const e=Ss();return Ar(),(n,i)=>(mt(),Ot(ye(ys),{"as-child":n.asChild,as:n.as,"data-disabled":ye(e).disabled.value?"":void 0,"data-orientation":ye(e).orientation.value},{default:sn(()=>[di(n.$slots,"default")]),_:3},8,["as-child","as","data-disabled","data-orientation"]))}}),Tx=Ex;const wx=(t,e)=>{const n=new Array(t.length+e.length);for(let i=0;i<t.length;i++)n[i]=t[i];for(let i=0;i<e.length;i++)n[t.length+i]=e[i];return n},Ax=(t,e)=>({classGroupId:t,validator:e}),Km=(t=new Map,e=null,n)=>({nextPart:t,validators:e,classGroupId:n}),xo="-",vd=[],Rx="arbitrary..",Cx=t=>{const e=Dx(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:a=>{if(a.startsWith("[")&&a.endsWith("]"))return Px(a);const o=a.split(xo),l=o[0]===""&&o.length>1?1:0;return Zm(o,l,e)},getConflictingClassGroupIds:(a,o)=>{if(o){const l=i[a],c=n[a];return l?c?wx(c,l):l:c||vd}return n[a]||vd}}},Zm=(t,e,n)=>{if(t.length-e===0)return n.classGroupId;const r=t[e],s=n.nextPart.get(r);if(s){const c=Zm(t,e+1,s);if(c)return c}const a=n.validators;if(a===null)return;const o=e===0?t.join(xo):t.slice(e).join(xo),l=a.length;for(let c=0;c<l;c++){const u=a[c];if(u.validator(o))return u.classGroupId}},Px=t=>t.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=t.slice(1,-1),n=e.indexOf(":"),i=e.slice(0,n);return i?Rx+i:void 0})(),Dx=t=>{const{theme:e,classGroups:n}=t;return Ix(n,e)},Ix=(t,e)=>{const n=Km();for(const i in t){const r=t[i];Lu(r,n,i,e)}return n},Lu=(t,e,n,i)=>{const r=t.length;for(let s=0;s<r;s++){const a=t[s];Lx(a,e,n,i)}},Lx=(t,e,n,i)=>{if(typeof t=="string"){Nx(t,e,n);return}if(typeof t=="function"){Ux(t,e,n,i);return}Ox(t,e,n,i)},Nx=(t,e,n)=>{const i=t===""?e:Qm(e,t);i.classGroupId=n},Ux=(t,e,n,i)=>{if(Fx(t)){Lu(t(i),e,n,i);return}e.validators===null&&(e.validators=[]),e.validators.push(Ax(n,t))},Ox=(t,e,n,i)=>{const r=Object.entries(t),s=r.length;for(let a=0;a<s;a++){const[o,l]=r[a];Lu(l,Qm(e,o),n,i)}},Qm=(t,e)=>{let n=t;const i=e.split(xo),r=i.length;for(let s=0;s<r;s++){const a=i[s];let o=n.nextPart.get(a);o||(o=Km(),n.nextPart.set(a,o)),n=o}return n},Fx=t=>"isThemeGetter"in t&&t.isThemeGetter===!0,Bx=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=Object.create(null),i=Object.create(null);const r=(s,a)=>{n[s]=a,e++,e>t&&(e=0,i=n,n=Object.create(null))};return{get(s){let a=n[s];if(a!==void 0)return a;if((a=i[s])!==void 0)return r(s,a),a},set(s,a){s in n?n[s]=a:r(s,a)}}},lc="!",xd=":",kx=[],yd=(t,e,n,i,r)=>({modifiers:t,hasImportantModifier:e,baseClassName:n,maybePostfixModifierPosition:i,isExternal:r}),zx=t=>{const{prefix:e,experimentalParseClassName:n}=t;let i=r=>{const s=[];let a=0,o=0,l=0,c;const u=r.length;for(let v=0;v<u;v++){const m=r[v];if(a===0&&o===0){if(m===xd){s.push(r.slice(l,v)),l=v+1;continue}if(m==="/"){c=v;continue}}m==="["?a++:m==="]"?a--:m==="("?o++:m===")"&&o--}const f=s.length===0?r:r.slice(l);let d=f,p=!1;f.endsWith(lc)?(d=f.slice(0,-1),p=!0):f.startsWith(lc)&&(d=f.slice(1),p=!0);const _=c&&c>l?c-l:void 0;return yd(s,p,d,_)};if(e){const r=e+xd,s=i;i=a=>a.startsWith(r)?s(a.slice(r.length)):yd(kx,!1,a,void 0,!0)}if(n){const r=i;i=s=>n({className:s,parseClassName:r})}return i},Vx=t=>{const e=new Map;return t.orderSensitiveModifiers.forEach((n,i)=>{e.set(n,1e6+i)}),n=>{const i=[];let r=[];for(let s=0;s<n.length;s++){const a=n[s],o=a[0]==="[",l=e.has(a);o||l?(r.length>0&&(r.sort(),i.push(...r),r=[]),i.push(a)):r.push(a)}return r.length>0&&(r.sort(),i.push(...r)),i}},Gx=t=>({cache:Bx(t.cacheSize),parseClassName:zx(t),sortModifiers:Vx(t),...Cx(t)}),Hx=/\s+/,Wx=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r,sortModifiers:s}=e,a=[],o=t.trim().split(Hx);let l="";for(let c=o.length-1;c>=0;c-=1){const u=o[c],{isExternal:f,modifiers:d,hasImportantModifier:p,baseClassName:_,maybePostfixModifierPosition:v}=n(u);if(f){l=u+(l.length>0?" "+l:l);continue}let m=!!v,h=i(m?_.substring(0,v):_);if(!h){if(!m){l=u+(l.length>0?" "+l:l);continue}if(h=i(_),!h){l=u+(l.length>0?" "+l:l);continue}m=!1}const y=d.length===0?"":d.length===1?d[0]:s(d).join(":"),T=p?y+lc:y,b=T+h;if(a.indexOf(b)>-1)continue;a.push(b);const w=r(h,m);for(let R=0;R<w.length;++R){const P=w[R];a.push(T+P)}l=u+(l.length>0?" "+l:l)}return l},Xx=(...t)=>{let e=0,n,i,r="";for(;e<t.length;)(n=t[e++])&&(i=jm(n))&&(r&&(r+=" "),r+=i);return r},jm=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=jm(t[i]))&&(n&&(n+=" "),n+=e);return n},qx=(t,...e)=>{let n,i,r,s;const a=l=>{const c=e.reduce((u,f)=>f(u),t());return n=Gx(c),i=n.cache.get,r=n.cache.set,s=o,o(l)},o=l=>{const c=i(l);if(c)return c;const u=Wx(l,n);return r(l,u),u};return s=a,(...l)=>s(Xx(...l))},Yx=[],zt=t=>{const e=n=>n[t]||Yx;return e.isThemeGetter=!0,e},eg=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,tg=/^\((?:(\w[\w-]*):)?(.+)\)$/i,$x=/^\d+\/\d+$/,Jx=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Kx=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Zx=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Qx=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,jx=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Lr=t=>$x.test(t),it=t=>!!t&&!Number.isNaN(Number(t)),Oi=t=>!!t&&Number.isInteger(Number(t)),ll=t=>t.endsWith("%")&&it(t.slice(0,-1)),mi=t=>Jx.test(t),ey=()=>!0,ty=t=>Kx.test(t)&&!Zx.test(t),ng=()=>!1,ny=t=>Qx.test(t),iy=t=>jx.test(t),ry=t=>!Le(t)&&!Ne(t),sy=t=>bs(t,sg,ng),Le=t=>eg.test(t),lr=t=>bs(t,ag,ty),cl=t=>bs(t,uy,it),Sd=t=>bs(t,ig,ng),ay=t=>bs(t,rg,iy),Ma=t=>bs(t,og,ny),Ne=t=>tg.test(t),Ps=t=>Ms(t,ag),oy=t=>Ms(t,fy),bd=t=>Ms(t,ig),ly=t=>Ms(t,sg),cy=t=>Ms(t,rg),Ea=t=>Ms(t,og,!0),bs=(t,e,n)=>{const i=eg.exec(t);return i?i[1]?e(i[1]):n(i[2]):!1},Ms=(t,e,n=!1)=>{const i=tg.exec(t);return i?i[1]?e(i[1]):n:!1},ig=t=>t==="position"||t==="percentage",rg=t=>t==="image"||t==="url",sg=t=>t==="length"||t==="size"||t==="bg-size",ag=t=>t==="length",uy=t=>t==="number",fy=t=>t==="family-name",og=t=>t==="shadow",dy=()=>{const t=zt("color"),e=zt("font"),n=zt("text"),i=zt("font-weight"),r=zt("tracking"),s=zt("leading"),a=zt("breakpoint"),o=zt("container"),l=zt("spacing"),c=zt("radius"),u=zt("shadow"),f=zt("inset-shadow"),d=zt("text-shadow"),p=zt("drop-shadow"),_=zt("blur"),v=zt("perspective"),m=zt("aspect"),h=zt("ease"),y=zt("animate"),T=()=>["auto","avoid","all","avoid-page","page","left","right","column"],b=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],w=()=>[...b(),Ne,Le],R=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto","contain","none"],L=()=>[Ne,Le,l],x=()=>[Lr,"full","auto",...L()],M=()=>[Oi,"none","subgrid",Ne,Le],I=()=>["auto",{span:["full",Oi,Ne,Le]},Oi,Ne,Le],F=()=>[Oi,"auto",Ne,Le],V=()=>["auto","min","max","fr",Ne,Le],Z=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],K=()=>["start","end","center","stretch","center-safe","end-safe"],G=()=>["auto",...L()],B=()=>[Lr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...L()],k=()=>[t,Ne,Le],pe=()=>[...b(),bd,Sd,{position:[Ne,Le]}],me=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ve=()=>["auto","cover","contain",ly,sy,{size:[Ne,Le]}],ze=()=>[ll,Ps,lr],Oe=()=>["","none","full",c,Ne,Le],nt=()=>["",it,Ps,lr],ut=()=>["solid","dashed","dotted","double"],te=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ne=()=>[it,ll,bd,Sd],Ce=()=>["","none",_,Ne,Le],We=()=>["none",it,Ne,Le],Ae=()=>["none",it,Ne,Le],at=()=>[it,Ne,Le],C=()=>[Lr,"full",...L()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[mi],breakpoint:[mi],color:[ey],container:[mi],"drop-shadow":[mi],ease:["in","out","in-out"],font:[ry],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[mi],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[mi],shadow:[mi],spacing:["px",it],text:[mi],"text-shadow":[mi],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Lr,Le,Ne,m]}],container:["container"],columns:[{columns:[it,Le,Ne,o]}],"break-after":[{"break-after":T()}],"break-before":[{"break-before":T()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:w()}],overflow:[{overflow:R()}],"overflow-x":[{"overflow-x":R()}],"overflow-y":[{"overflow-y":R()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:x()}],"inset-x":[{"inset-x":x()}],"inset-y":[{"inset-y":x()}],start:[{start:x()}],end:[{end:x()}],top:[{top:x()}],right:[{right:x()}],bottom:[{bottom:x()}],left:[{left:x()}],visibility:["visible","invisible","collapse"],z:[{z:[Oi,"auto",Ne,Le]}],basis:[{basis:[Lr,"full","auto",o,...L()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[it,Lr,"auto","initial","none",Le]}],grow:[{grow:["",it,Ne,Le]}],shrink:[{shrink:["",it,Ne,Le]}],order:[{order:[Oi,"first","last","none",Ne,Le]}],"grid-cols":[{"grid-cols":M()}],"col-start-end":[{col:I()}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":M()}],"row-start-end":[{row:I()}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":V()}],"auto-rows":[{"auto-rows":V()}],gap:[{gap:L()}],"gap-x":[{"gap-x":L()}],"gap-y":[{"gap-y":L()}],"justify-content":[{justify:[...Z(),"normal"]}],"justify-items":[{"justify-items":[...K(),"normal"]}],"justify-self":[{"justify-self":["auto",...K()]}],"align-content":[{content:["normal",...Z()]}],"align-items":[{items:[...K(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...K(),{baseline:["","last"]}]}],"place-content":[{"place-content":Z()}],"place-items":[{"place-items":[...K(),"baseline"]}],"place-self":[{"place-self":["auto",...K()]}],p:[{p:L()}],px:[{px:L()}],py:[{py:L()}],ps:[{ps:L()}],pe:[{pe:L()}],pt:[{pt:L()}],pr:[{pr:L()}],pb:[{pb:L()}],pl:[{pl:L()}],m:[{m:G()}],mx:[{mx:G()}],my:[{my:G()}],ms:[{ms:G()}],me:[{me:G()}],mt:[{mt:G()}],mr:[{mr:G()}],mb:[{mb:G()}],ml:[{ml:G()}],"space-x":[{"space-x":L()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":L()}],"space-y-reverse":["space-y-reverse"],size:[{size:B()}],w:[{w:[o,"screen",...B()]}],"min-w":[{"min-w":[o,"screen","none",...B()]}],"max-w":[{"max-w":[o,"screen","none","prose",{screen:[a]},...B()]}],h:[{h:["screen","lh",...B()]}],"min-h":[{"min-h":["screen","lh","none",...B()]}],"max-h":[{"max-h":["screen","lh",...B()]}],"font-size":[{text:["base",n,Ps,lr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,Ne,cl]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ll,Le]}],"font-family":[{font:[oy,Le,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[r,Ne,Le]}],"line-clamp":[{"line-clamp":[it,"none",Ne,cl]}],leading:[{leading:[s,...L()]}],"list-image":[{"list-image":["none",Ne,Le]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Ne,Le]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:k()}],"text-color":[{text:k()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ut(),"wavy"]}],"text-decoration-thickness":[{decoration:[it,"from-font","auto",Ne,lr]}],"text-decoration-color":[{decoration:k()}],"underline-offset":[{"underline-offset":[it,"auto",Ne,Le]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ne,Le]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ne,Le]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:pe()}],"bg-repeat":[{bg:me()}],"bg-size":[{bg:ve()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Oi,Ne,Le],radial:["",Ne,Le],conic:[Oi,Ne,Le]},cy,ay]}],"bg-color":[{bg:k()}],"gradient-from-pos":[{from:ze()}],"gradient-via-pos":[{via:ze()}],"gradient-to-pos":[{to:ze()}],"gradient-from":[{from:k()}],"gradient-via":[{via:k()}],"gradient-to":[{to:k()}],rounded:[{rounded:Oe()}],"rounded-s":[{"rounded-s":Oe()}],"rounded-e":[{"rounded-e":Oe()}],"rounded-t":[{"rounded-t":Oe()}],"rounded-r":[{"rounded-r":Oe()}],"rounded-b":[{"rounded-b":Oe()}],"rounded-l":[{"rounded-l":Oe()}],"rounded-ss":[{"rounded-ss":Oe()}],"rounded-se":[{"rounded-se":Oe()}],"rounded-ee":[{"rounded-ee":Oe()}],"rounded-es":[{"rounded-es":Oe()}],"rounded-tl":[{"rounded-tl":Oe()}],"rounded-tr":[{"rounded-tr":Oe()}],"rounded-br":[{"rounded-br":Oe()}],"rounded-bl":[{"rounded-bl":Oe()}],"border-w":[{border:nt()}],"border-w-x":[{"border-x":nt()}],"border-w-y":[{"border-y":nt()}],"border-w-s":[{"border-s":nt()}],"border-w-e":[{"border-e":nt()}],"border-w-t":[{"border-t":nt()}],"border-w-r":[{"border-r":nt()}],"border-w-b":[{"border-b":nt()}],"border-w-l":[{"border-l":nt()}],"divide-x":[{"divide-x":nt()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":nt()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ut(),"hidden","none"]}],"divide-style":[{divide:[...ut(),"hidden","none"]}],"border-color":[{border:k()}],"border-color-x":[{"border-x":k()}],"border-color-y":[{"border-y":k()}],"border-color-s":[{"border-s":k()}],"border-color-e":[{"border-e":k()}],"border-color-t":[{"border-t":k()}],"border-color-r":[{"border-r":k()}],"border-color-b":[{"border-b":k()}],"border-color-l":[{"border-l":k()}],"divide-color":[{divide:k()}],"outline-style":[{outline:[...ut(),"none","hidden"]}],"outline-offset":[{"outline-offset":[it,Ne,Le]}],"outline-w":[{outline:["",it,Ps,lr]}],"outline-color":[{outline:k()}],shadow:[{shadow:["","none",u,Ea,Ma]}],"shadow-color":[{shadow:k()}],"inset-shadow":[{"inset-shadow":["none",f,Ea,Ma]}],"inset-shadow-color":[{"inset-shadow":k()}],"ring-w":[{ring:nt()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:k()}],"ring-offset-w":[{"ring-offset":[it,lr]}],"ring-offset-color":[{"ring-offset":k()}],"inset-ring-w":[{"inset-ring":nt()}],"inset-ring-color":[{"inset-ring":k()}],"text-shadow":[{"text-shadow":["none",d,Ea,Ma]}],"text-shadow-color":[{"text-shadow":k()}],opacity:[{opacity:[it,Ne,Le]}],"mix-blend":[{"mix-blend":[...te(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":te()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[it]}],"mask-image-linear-from-pos":[{"mask-linear-from":ne()}],"mask-image-linear-to-pos":[{"mask-linear-to":ne()}],"mask-image-linear-from-color":[{"mask-linear-from":k()}],"mask-image-linear-to-color":[{"mask-linear-to":k()}],"mask-image-t-from-pos":[{"mask-t-from":ne()}],"mask-image-t-to-pos":[{"mask-t-to":ne()}],"mask-image-t-from-color":[{"mask-t-from":k()}],"mask-image-t-to-color":[{"mask-t-to":k()}],"mask-image-r-from-pos":[{"mask-r-from":ne()}],"mask-image-r-to-pos":[{"mask-r-to":ne()}],"mask-image-r-from-color":[{"mask-r-from":k()}],"mask-image-r-to-color":[{"mask-r-to":k()}],"mask-image-b-from-pos":[{"mask-b-from":ne()}],"mask-image-b-to-pos":[{"mask-b-to":ne()}],"mask-image-b-from-color":[{"mask-b-from":k()}],"mask-image-b-to-color":[{"mask-b-to":k()}],"mask-image-l-from-pos":[{"mask-l-from":ne()}],"mask-image-l-to-pos":[{"mask-l-to":ne()}],"mask-image-l-from-color":[{"mask-l-from":k()}],"mask-image-l-to-color":[{"mask-l-to":k()}],"mask-image-x-from-pos":[{"mask-x-from":ne()}],"mask-image-x-to-pos":[{"mask-x-to":ne()}],"mask-image-x-from-color":[{"mask-x-from":k()}],"mask-image-x-to-color":[{"mask-x-to":k()}],"mask-image-y-from-pos":[{"mask-y-from":ne()}],"mask-image-y-to-pos":[{"mask-y-to":ne()}],"mask-image-y-from-color":[{"mask-y-from":k()}],"mask-image-y-to-color":[{"mask-y-to":k()}],"mask-image-radial":[{"mask-radial":[Ne,Le]}],"mask-image-radial-from-pos":[{"mask-radial-from":ne()}],"mask-image-radial-to-pos":[{"mask-radial-to":ne()}],"mask-image-radial-from-color":[{"mask-radial-from":k()}],"mask-image-radial-to-color":[{"mask-radial-to":k()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[it]}],"mask-image-conic-from-pos":[{"mask-conic-from":ne()}],"mask-image-conic-to-pos":[{"mask-conic-to":ne()}],"mask-image-conic-from-color":[{"mask-conic-from":k()}],"mask-image-conic-to-color":[{"mask-conic-to":k()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:pe()}],"mask-repeat":[{mask:me()}],"mask-size":[{mask:ve()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Ne,Le]}],filter:[{filter:["","none",Ne,Le]}],blur:[{blur:Ce()}],brightness:[{brightness:[it,Ne,Le]}],contrast:[{contrast:[it,Ne,Le]}],"drop-shadow":[{"drop-shadow":["","none",p,Ea,Ma]}],"drop-shadow-color":[{"drop-shadow":k()}],grayscale:[{grayscale:["",it,Ne,Le]}],"hue-rotate":[{"hue-rotate":[it,Ne,Le]}],invert:[{invert:["",it,Ne,Le]}],saturate:[{saturate:[it,Ne,Le]}],sepia:[{sepia:["",it,Ne,Le]}],"backdrop-filter":[{"backdrop-filter":["","none",Ne,Le]}],"backdrop-blur":[{"backdrop-blur":Ce()}],"backdrop-brightness":[{"backdrop-brightness":[it,Ne,Le]}],"backdrop-contrast":[{"backdrop-contrast":[it,Ne,Le]}],"backdrop-grayscale":[{"backdrop-grayscale":["",it,Ne,Le]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[it,Ne,Le]}],"backdrop-invert":[{"backdrop-invert":["",it,Ne,Le]}],"backdrop-opacity":[{"backdrop-opacity":[it,Ne,Le]}],"backdrop-saturate":[{"backdrop-saturate":[it,Ne,Le]}],"backdrop-sepia":[{"backdrop-sepia":["",it,Ne,Le]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":L()}],"border-spacing-x":[{"border-spacing-x":L()}],"border-spacing-y":[{"border-spacing-y":L()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Ne,Le]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[it,"initial",Ne,Le]}],ease:[{ease:["linear","initial",h,Ne,Le]}],delay:[{delay:[it,Ne,Le]}],animate:[{animate:["none",y,Ne,Le]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[v,Ne,Le]}],"perspective-origin":[{"perspective-origin":w()}],rotate:[{rotate:We()}],"rotate-x":[{"rotate-x":We()}],"rotate-y":[{"rotate-y":We()}],"rotate-z":[{"rotate-z":We()}],scale:[{scale:Ae()}],"scale-x":[{"scale-x":Ae()}],"scale-y":[{"scale-y":Ae()}],"scale-z":[{"scale-z":Ae()}],"scale-3d":["scale-3d"],skew:[{skew:at()}],"skew-x":[{"skew-x":at()}],"skew-y":[{"skew-y":at()}],transform:[{transform:[Ne,Le,"","none","gpu","cpu"]}],"transform-origin":[{origin:w()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:C()}],"translate-x":[{"translate-x":C()}],"translate-y":[{"translate-y":C()}],"translate-z":[{"translate-z":C()}],"translate-none":["translate-none"],accent:[{accent:k()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:k()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ne,Le]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ne,Le]}],fill:[{fill:["none",...k()]}],"stroke-w":[{stroke:[it,Ps,lr,cl]}],stroke:[{stroke:["none",...k()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},hy=qx(dy);function lg(...t){return hy(zm(t))}const py=Ht({__name:"Button",props:{variant:{},size:{},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(t){const e=t;return(n,i)=>(mt(),Ot(ye(ys),{"data-slot":"button",as:t.as,"as-child":t.asChild,class:Do(ye(lg)(ye(my)({variant:t.variant,size:t.size}),e.class))},{default:sn(()=>[di(n.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),my=Uv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}}),gy=Ht({__name:"Slider",props:{defaultValue:{},modelValue:{},disabled:{type:Boolean},orientation:{},dir:{},inverted:{type:Boolean},min:{},max:{},step:{},minStepsBetweenThumbs:{},thumbAlignment:{},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},class:{}},emits:["update:modelValue","valueCommit"],setup(t,{emit:e}){const n=t,i=e,r=zv(n,"class"),s=$v(r,i);return(a,o)=>(mt(),Ot(ye(gx),ci({"data-slot":"slider",class:ye(lg)("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",n.class)},ye(s)),{default:sn(({modelValue:l})=>[Gt(ye(Tx),{"data-slot":"slider-track",class:"bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"},{default:sn(()=>[Gt(ye(xx),{"data-slot":"slider-range",class:"bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"})]),_:1}),(mt(!0),Qn(Yt,null,Eu(l,(c,u)=>(mt(),Ot(ye(Mx),{key:u,"data-slot":"slider-thumb",class:"bg-white border-primary ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"}))),128))]),_:1},16,["class"]))}});function _y(){let t=0,e=0;for(let i=0;i<28;i+=7){let r=this.buf[this.pos++];if(t|=(r&127)<<i,(r&128)==0)return this.assertBounds(),[t,e]}let n=this.buf[this.pos++];if(t|=(n&15)<<28,e=(n&112)>>4,(n&128)==0)return this.assertBounds(),[t,e];for(let i=3;i<=31;i+=7){let r=this.buf[this.pos++];if(e|=(r&127)<<i,(r&128)==0)return this.assertBounds(),[t,e]}throw new Error("invalid varint")}function ul(t,e,n){for(let s=0;s<28;s=s+7){const a=t>>>s,o=!(!(a>>>7)&&e==0),l=(o?a|128:a)&255;if(n.push(l),!o)return}const i=t>>>28&15|(e&7)<<4,r=e>>3!=0;if(n.push((r?i|128:i)&255),!!r){for(let s=3;s<31;s=s+7){const a=e>>>s,o=!!(a>>>7),l=(o?a|128:a)&255;if(n.push(l),!o)return}n.push(e>>>31&1)}}const io=4294967296;function Md(t){const e=t[0]==="-";e&&(t=t.slice(1));const n=1e6;let i=0,r=0;function s(a,o){const l=Number(t.slice(a,o));r*=n,i=i*n+l,i>=io&&(r=r+(i/io|0),i=i%io)}return s(-24,-18),s(-18,-12),s(-12,-6),s(-6),e?ug(i,r):Nu(i,r)}function vy(t,e){let n=Nu(t,e);const i=n.hi&2147483648;i&&(n=ug(n.lo,n.hi));const r=cg(n.lo,n.hi);return i?"-"+r:r}function cg(t,e){if({lo:t,hi:e}=xy(t,e),e<=2097151)return String(io*e+t);const n=t&16777215,i=(t>>>24|e<<8)&16777215,r=e>>16&65535;let s=n+i*6777216+r*6710656,a=i+r*8147497,o=r*2;const l=1e7;return s>=l&&(a+=Math.floor(s/l),s%=l),a>=l&&(o+=Math.floor(a/l),a%=l),o.toString()+Ed(a)+Ed(s)}function xy(t,e){return{lo:t>>>0,hi:e>>>0}}function Nu(t,e){return{lo:t|0,hi:e|0}}function ug(t,e){return e=~e,t?t=~t+1:e+=1,Nu(t,e)}const Ed=t=>{const e=String(t);return"0000000".slice(e.length)+e};function Td(t,e){if(t>=0){for(;t>127;)e.push(t&127|128),t=t>>>7;e.push(t)}else{for(let n=0;n<9;n++)e.push(t&127|128),t=t>>7;e.push(1)}}function yy(){let t=this.buf[this.pos++],e=t&127;if((t&128)==0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<7,(t&128)==0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<14,(t&128)==0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<21,(t&128)==0)return this.assertBounds(),e;t=this.buf[this.pos++],e|=(t&15)<<28;for(let n=5;(t&128)!==0&&n<10;n++)t=this.buf[this.pos++];if((t&128)!=0)throw new Error("invalid varint");return this.assertBounds(),e>>>0}var wd={};const ti=Sy();function Sy(){const t=new DataView(new ArrayBuffer(8));if(typeof BigInt=="function"&&typeof t.getBigInt64=="function"&&typeof t.getBigUint64=="function"&&typeof t.setBigInt64=="function"&&typeof t.setBigUint64=="function"&&(!!globalThis.Deno||typeof process!="object"||typeof wd!="object"||wd.BUF_BIGINT_DISABLE!=="1")){const n=BigInt("-9223372036854775808"),i=BigInt("9223372036854775807"),r=BigInt("0"),s=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(a){const o=typeof a=="bigint"?a:BigInt(a);if(o>i||o<n)throw new Error(`invalid int64: ${a}`);return o},uParse(a){const o=typeof a=="bigint"?a:BigInt(a);if(o>s||o<r)throw new Error(`invalid uint64: ${a}`);return o},enc(a){return t.setBigInt64(0,this.parse(a),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},uEnc(a){return t.setBigInt64(0,this.uParse(a),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},dec(a,o){return t.setInt32(0,a,!0),t.setInt32(4,o,!0),t.getBigInt64(0,!0)},uDec(a,o){return t.setInt32(0,a,!0),t.setInt32(4,o,!0),t.getBigUint64(0,!0)}}}return{zero:"0",supported:!1,parse(n){return typeof n!="string"&&(n=n.toString()),Ad(n),n},uParse(n){return typeof n!="string"&&(n=n.toString()),Rd(n),n},enc(n){return typeof n!="string"&&(n=n.toString()),Ad(n),Md(n)},uEnc(n){return typeof n!="string"&&(n=n.toString()),Rd(n),Md(n)},dec(n,i){return vy(n,i)},uDec(n,i){return cg(n,i)}}}function Ad(t){if(!/^-?[0-9]+$/.test(t))throw new Error("invalid int64: "+t)}function Rd(t){if(!/^[0-9]+$/.test(t))throw new Error("invalid uint64: "+t)}const fl=Symbol.for("@bufbuild/protobuf/text-encoding");function fg(){if(globalThis[fl]==null){const t=new globalThis.TextEncoder,e=new globalThis.TextDecoder;globalThis[fl]={encodeUtf8(n){return t.encode(n)},decodeUtf8(n){return e.decode(n)},checkUtf8(n){try{return encodeURIComponent(n),!0}catch{return!1}}}}return globalThis[fl]}var Xi;(function(t){t[t.Varint=0]="Varint",t[t.Bit64=1]="Bit64",t[t.LengthDelimited=2]="LengthDelimited",t[t.StartGroup=3]="StartGroup",t[t.EndGroup=4]="EndGroup",t[t.Bit32=5]="Bit32"})(Xi||(Xi={}));const by=34028234663852886e22,My=-34028234663852886e22,Ey=4294967295,Ty=2147483647,wy=-2147483648;class je{constructor(e=fg().encodeUtf8){this.encodeUtf8=e,this.stack=[],this.chunks=[],this.buf=[]}finish(){this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]);let e=0;for(let r=0;r<this.chunks.length;r++)e+=this.chunks[r].length;let n=new Uint8Array(e),i=0;for(let r=0;r<this.chunks.length;r++)n.set(this.chunks[r],i),i+=this.chunks[r].length;return this.chunks=[],n}fork(){return this.stack.push({chunks:this.chunks,buf:this.buf}),this.chunks=[],this.buf=[],this}join(){let e=this.finish(),n=this.stack.pop();if(!n)throw new Error("invalid state, fork stack empty");return this.chunks=n.chunks,this.buf=n.buf,this.uint32(e.byteLength),this.raw(e)}tag(e,n){return this.uint32((e<<3|n)>>>0)}raw(e){return this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]),this.chunks.push(e),this}uint32(e){for(Cd(e);e>127;)this.buf.push(e&127|128),e=e>>>7;return this.buf.push(e),this}int32(e){return dl(e),Td(e,this.buf),this}bool(e){return this.buf.push(e?1:0),this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){let n=this.encodeUtf8(e);return this.uint32(n.byteLength),this.raw(n)}float(e){Ay(e);let n=new Uint8Array(4);return new DataView(n.buffer).setFloat32(0,e,!0),this.raw(n)}double(e){let n=new Uint8Array(8);return new DataView(n.buffer).setFloat64(0,e,!0),this.raw(n)}fixed32(e){Cd(e);let n=new Uint8Array(4);return new DataView(n.buffer).setUint32(0,e,!0),this.raw(n)}sfixed32(e){dl(e);let n=new Uint8Array(4);return new DataView(n.buffer).setInt32(0,e,!0),this.raw(n)}sint32(e){return dl(e),e=(e<<1^e>>31)>>>0,Td(e,this.buf),this}sfixed64(e){let n=new Uint8Array(8),i=new DataView(n.buffer),r=ti.enc(e);return i.setInt32(0,r.lo,!0),i.setInt32(4,r.hi,!0),this.raw(n)}fixed64(e){let n=new Uint8Array(8),i=new DataView(n.buffer),r=ti.uEnc(e);return i.setInt32(0,r.lo,!0),i.setInt32(4,r.hi,!0),this.raw(n)}int64(e){let n=ti.enc(e);return ul(n.lo,n.hi,this.buf),this}sint64(e){const n=ti.enc(e),i=n.hi>>31,r=n.lo<<1^i,s=(n.hi<<1|n.lo>>>31)^i;return ul(r,s,this.buf),this}uint64(e){const n=ti.uEnc(e);return ul(n.lo,n.hi,this.buf),this}}class he{constructor(e,n=fg().decodeUtf8){this.decodeUtf8=n,this.varint64=_y,this.uint32=yy,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength)}tag(){let e=this.uint32(),n=e>>>3,i=e&7;if(n<=0||i<0||i>5)throw new Error("illegal tag: field no "+n+" wire type "+i);return[n,i]}skip(e,n){let i=this.pos;switch(e){case Xi.Varint:for(;this.buf[this.pos++]&128;);break;case Xi.Bit64:this.pos+=4;case Xi.Bit32:this.pos+=4;break;case Xi.LengthDelimited:let r=this.uint32();this.pos+=r;break;case Xi.StartGroup:for(;;){const[s,a]=this.tag();if(a===Xi.EndGroup){if(n!==void 0&&s!==n)throw new Error("invalid end group tag");break}this.skip(a,s)}break;default:throw new Error("cant skip wire type "+e)}return this.assertBounds(),this.buf.subarray(i,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let e=this.uint32();return e>>>1^-(e&1)}int64(){return ti.dec(...this.varint64())}uint64(){return ti.uDec(...this.varint64())}sint64(){let[e,n]=this.varint64(),i=-(e&1);return e=(e>>>1|(n&1)<<31)^i,n=n>>>1^i,ti.dec(e,n)}bool(){let[e,n]=this.varint64();return e!==0||n!==0}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return ti.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return ti.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let e=this.uint32(),n=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(n,n+e)}string(){return this.decodeUtf8(this.bytes())}}function dl(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid int32: "+typeof t);if(!Number.isInteger(t)||t>Ty||t<wy)throw new Error("invalid int32: "+t)}function Cd(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid uint32: "+typeof t);if(!Number.isInteger(t)||t>Ey||t<0)throw new Error("invalid uint32: "+t)}function Ay(t){if(typeof t=="string"){const e=t;if(t=Number(t),Number.isNaN(t)&&e!=="NaN")throw new Error("invalid float32: "+e)}else if(typeof t!="number")throw new Error("invalid float32: "+typeof t);if(Number.isFinite(t)&&(t>by||t<My))throw new Error("invalid float32: "+t)}function Pd(){return{typeUrl:"",value:new Uint8Array(0)}}const Jr={encode(t,e=new je){return t.typeUrl!==""&&e.uint32(10).string(t.typeUrl),t.value.length!==0&&e.uint32(18).bytes(t.value),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Pd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.typeUrl=n.string();continue}case 2:{if(s!==18)break;r.value=n.bytes();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{typeUrl:hl(t.typeUrl)?globalThis.String(t.typeUrl):hl(t.type_url)?globalThis.String(t.type_url):"",value:hl(t.value)?Ry(t.value):new Uint8Array(0)}},toJSON(t){const e={};return t.typeUrl!==""&&(e.typeUrl=t.typeUrl),t.value.length!==0&&(e.value=Cy(t.value)),e},create(t){return Jr.fromPartial(t??{})},fromPartial(t){const e=Pd();return e.typeUrl=t.typeUrl??"",e.value=t.value??new Uint8Array(0),e}};function Ry(t){if(globalThis.Buffer)return Uint8Array.from(globalThis.Buffer.from(t,"base64"));{const e=globalThis.atob(t),n=new Uint8Array(e.length);for(let i=0;i<e.length;++i)n[i]=e.charCodeAt(i);return n}}function Cy(t){if(globalThis.Buffer)return globalThis.Buffer.from(t).toString("base64");{const e=[];return t.forEach(n=>{e.push(globalThis.String.fromCharCode(n))}),globalThis.btoa(e.join(""))}}function hl(t){return t!=null}function Dd(t){switch(t){case 0:case"NULL_VALUE":return 0;default:return-1}}function Py(t){return t===0?"NULL_VALUE":"UNRECOGNIZED"}function pl(){return{fields:{}}}const ks={encode(t,e=new je){return globalThis.Object.entries(t.fields).forEach(([n,i])=>{i!==void 0&&cc.encode({key:n,value:i},e.uint32(10).fork()).join()}),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=pl();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;const a=cc.decode(n,n.uint32());a.value!==void 0&&(r.fields[a.key]=a.value);continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{fields:uc(t.fields)?globalThis.Object.entries(t.fields).reduce((e,[n,i])=>(e[n]=i,e),{}):{}}},toJSON(t){const e={};if(t.fields){const n=globalThis.Object.entries(t.fields);n.length>0&&(e.fields={},n.forEach(([i,r])=>{e.fields[i]=r}))}return e},create(t){return ks.fromPartial(t??{})},fromPartial(t){const e=pl();return e.fields=globalThis.Object.entries(t.fields??{}).reduce((n,[i,r])=>(r!==void 0&&(n[i]=r),n),{}),e},wrap(t){const e=pl();if(t!==void 0)for(const n of globalThis.Object.keys(t))e.fields[n]=t[n];return e},unwrap(t){const e={};if(t.fields)for(const n of globalThis.Object.keys(t.fields))e[n]=t.fields[n];return e}};function Id(){return{key:"",value:void 0}}const cc={encode(t,e=new je){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&Cn.encode(Cn.wrap(t.value),e.uint32(18).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Id();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.key=n.string();continue}case 2:{if(s!==18)break;r.value=Cn.unwrap(Cn.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{key:Zn(t.key)?globalThis.String(t.key):"",value:Zn(t?.value)?t.value:void 0}},toJSON(t){const e={};return t.key!==""&&(e.key=t.key),t.value!==void 0&&(e.value=t.value),e},create(t){return cc.fromPartial(t??{})},fromPartial(t){const e=Id();return e.key=t.key??"",e.value=t.value??void 0,e}};function ml(){return{nullValue:void 0,numberValue:void 0,stringValue:void 0,boolValue:void 0,structValue:void 0,listValue:void 0}}const Cn={encode(t,e=new je){return t.nullValue!==void 0&&e.uint32(8).int32(t.nullValue),t.numberValue!==void 0&&e.uint32(17).double(t.numberValue),t.stringValue!==void 0&&e.uint32(26).string(t.stringValue),t.boolValue!==void 0&&e.uint32(32).bool(t.boolValue),t.structValue!==void 0&&ks.encode(ks.wrap(t.structValue),e.uint32(42).fork()).join(),t.listValue!==void 0&&zs.encode(zs.wrap(t.listValue),e.uint32(50).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=ml();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==8)break;r.nullValue=n.int32();continue}case 2:{if(s!==17)break;r.numberValue=n.double();continue}case 3:{if(s!==26)break;r.stringValue=n.string();continue}case 4:{if(s!==32)break;r.boolValue=n.bool();continue}case 5:{if(s!==42)break;r.structValue=ks.unwrap(ks.decode(n,n.uint32()));continue}case 6:{if(s!==50)break;r.listValue=zs.unwrap(zs.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{nullValue:Zn(t.nullValue)?Dd(t.nullValue):Zn(t.null_value)?Dd(t.null_value):void 0,numberValue:Zn(t.numberValue)?globalThis.Number(t.numberValue):Zn(t.number_value)?globalThis.Number(t.number_value):void 0,stringValue:Zn(t.stringValue)?globalThis.String(t.stringValue):Zn(t.string_value)?globalThis.String(t.string_value):void 0,boolValue:Zn(t.boolValue)?globalThis.Boolean(t.boolValue):Zn(t.bool_value)?globalThis.Boolean(t.bool_value):void 0,structValue:uc(t.structValue)?t.structValue:uc(t.struct_value)?t.struct_value:void 0,listValue:globalThis.Array.isArray(t.listValue)?[...t.listValue]:globalThis.Array.isArray(t.list_value)?[...t.list_value]:void 0}},toJSON(t){const e={};return t.nullValue!==void 0&&(e.nullValue=Py(t.nullValue)),t.numberValue!==void 0&&(e.numberValue=t.numberValue),t.stringValue!==void 0&&(e.stringValue=t.stringValue),t.boolValue!==void 0&&(e.boolValue=t.boolValue),t.structValue!==void 0&&(e.structValue=t.structValue),t.listValue!==void 0&&(e.listValue=t.listValue),e},create(t){return Cn.fromPartial(t??{})},fromPartial(t){const e=ml();return e.nullValue=t.nullValue??void 0,e.numberValue=t.numberValue??void 0,e.stringValue=t.stringValue??void 0,e.boolValue=t.boolValue??void 0,e.structValue=t.structValue??void 0,e.listValue=t.listValue??void 0,e},wrap(t){const e=ml();if(t===null)e.nullValue=0;else if(typeof t=="boolean")e.boolValue=t;else if(typeof t=="number")e.numberValue=t;else if(typeof t=="string")e.stringValue=t;else if(globalThis.Array.isArray(t))e.listValue=t;else if(typeof t=="object")e.structValue=t;else if(typeof t<"u")throw new globalThis.Error("Unsupported any value type: "+typeof t);return e},unwrap(t){if(t.stringValue!==void 0)return t.stringValue;if(t?.numberValue!==void 0)return t.numberValue;if(t?.boolValue!==void 0)return t.boolValue;if(t?.structValue!==void 0)return t.structValue;if(t?.listValue!==void 0)return t.listValue;if(t?.nullValue!==void 0)return null}};function gl(){return{values:[]}}const zs={encode(t,e=new je){for(const n of t.values)Cn.encode(Cn.wrap(n),e.uint32(10).fork()).join();return e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=gl();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.values.push(Cn.unwrap(Cn.decode(n,n.uint32())));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{values:globalThis.Array.isArray(t?.values)?[...t.values]:[]}},toJSON(t){const e={};return t.values?.length&&(e.values=t.values),e},create(t){return zs.fromPartial(t??{})},fromPartial(t){const e=gl();return e.values=t.values?.map(n=>n)||[],e},wrap(t){const e=gl();return e.values=t??[],e},unwrap(t){return t?.hasOwnProperty("values")&&globalThis.Array.isArray(t.values)?t.values:t}};function uc(t){return typeof t=="object"&&t!==null}function Zn(t){return t!=null}function Ld(){return{message:void 0,value:void 0,fallback:void 0}}const yn={encode(t,e=new je){return t.message!==void 0&&Jr.encode(t.message,e.uint32(10).fork()).join(),t.value!==void 0&&Cn.encode(Cn.wrap(t.value),e.uint32(18).fork()).join(),t.fallback!==void 0&&Kr.encode(t.fallback,e.uint32(26).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Ld();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.message=Jr.decode(n,n.uint32());continue}case 2:{if(s!==18)break;r.value=Cn.unwrap(Cn.decode(n,n.uint32()));continue}case 3:{if(s!==26)break;r.fallback=Kr.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{message:er(t.message)?Jr.fromJSON(t.message):void 0,value:er(t?.value)?t.value:void 0,fallback:er(t.fallback)?Kr.fromJSON(t.fallback):void 0}},toJSON(t){const e={};return t.message!==void 0&&(e.message=Jr.toJSON(t.message)),t.value!==void 0&&(e.value=t.value),t.fallback!==void 0&&(e.fallback=Kr.toJSON(t.fallback)),e},create(t){return yn.fromPartial(t??{})},fromPartial(t){const e=Ld();return e.message=t.message!==void 0&&t.message!==null?Jr.fromPartial(t.message):void 0,e.value=t.value??void 0,e.fallback=t.fallback!==void 0&&t.fallback!==null?Kr.fromPartial(t.fallback):void 0,e}};function Nd(){return{data:void 0}}const Kr={encode(t,e=new je){return t.data!==void 0&&Yi.encode(t.data,e.uint32(10).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Nd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.data=Yi.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{data:er(t.data)?Yi.fromJSON(t.data):void 0}},toJSON(t){const e={};return t.data!==void 0&&(e.data=Yi.toJSON(t.data)),e},create(t){return Kr.fromPartial(t??{})},fromPartial(t){const e=Nd();return e.data=t.data!==void 0&&t.data!==null?Yi.fromPartial(t.data):void 0,e}};function Ud(){return{items:{}}}const Yi={encode(t,e=new je){return globalThis.Object.entries(t.items).forEach(([n,i])=>{fc.encode({key:n,value:i},e.uint32(10).fork()).join()}),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Ud();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;const a=fc.decode(n,n.uint32());a.value!==void 0&&(r.items[a.key]=a.value);continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{items:Dy(t.items)?globalThis.Object.entries(t.items).reduce((e,[n,i])=>(e[n]=yn.fromJSON(i),e),{}):{}}},toJSON(t){const e={};if(t.items){const n=globalThis.Object.entries(t.items);n.length>0&&(e.items={},n.forEach(([i,r])=>{e.items[i]=yn.toJSON(r)}))}return e},create(t){return Yi.fromPartial(t??{})},fromPartial(t){const e=Ud();return e.items=globalThis.Object.entries(t.items??{}).reduce((n,[i,r])=>(r!==void 0&&(n[i]=yn.fromPartial(r)),n),{}),e}};function Od(){return{key:"",value:void 0}}const fc={encode(t,e=new je){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&yn.encode(t.value,e.uint32(18).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Od();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.key=n.string();continue}case 2:{if(s!==18)break;r.value=yn.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{key:er(t.key)?globalThis.String(t.key):"",value:er(t.value)?yn.fromJSON(t.value):void 0}},toJSON(t){const e={};return t.key!==""&&(e.key=t.key),t.value!==void 0&&(e.value=yn.toJSON(t.value)),e},create(t){return fc.fromPartial(t??{})},fromPartial(t){const e=Od();return e.key=t.key??"",e.value=t.value!==void 0&&t.value!==null?yn.fromPartial(t.value):void 0,e}};function Fd(){return{data:void 0,version:void 0}}const dg={encode(t,e=new je){return t.data!==void 0&&yn.encode(t.data,e.uint32(10).fork()).join(),t.version!==void 0&&e.uint32(18).string(t.version),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Fd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.data=yn.decode(n,n.uint32());continue}case 2:{if(s!==18)break;r.version=n.string();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{data:er(t.data)?yn.fromJSON(t.data):void 0,version:er(t.version)?globalThis.String(t.version):void 0}},toJSON(t){const e={};return t.data!==void 0&&(e.data=yn.toJSON(t.data)),t.version!==void 0&&(e.version=t.version),e},create(t){return dg.fromPartial(t??{})},fromPartial(t){const e=Fd();return e.data=t.data!==void 0&&t.data!==null?yn.fromPartial(t.data):void 0,e.version=t.version??void 0,e}};function Dy(t){return typeof t=="object"&&t!==null}function er(t){return t!=null}function Bd(){return{guid:"",name:"",x:0,y:0,z:0}}const Be={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.x!==0&&e.uint32(29).float(t.x),t.y!==0&&e.uint32(37).float(t.y),t.z!==0&&e.uint32(45).float(t.z),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Bd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.x=n.float();continue}case 4:{if(s!==37)break;r.y=n.float();continue}case 5:{if(s!==45)break;r.z=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",x:re(t.x)?globalThis.Number(t.x):0,y:re(t.y)?globalThis.Number(t.y):0,z:re(t.z)?globalThis.Number(t.z):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.x!==0&&(e.x=t.x),t.y!==0&&(e.y=t.y),t.z!==0&&(e.z=t.z),e},create(t){return Be.fromPartial(t??{})},fromPartial(t){const e=Bd();return e.guid=t.guid??"",e.name=t.name??"",e.x=t.x??0,e.y=t.y??0,e.z=t.z??0,e}};function kd(){return{guid:"",name:"",x:0,y:0,z:0}}const bt={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.x!==0&&e.uint32(29).float(t.x),t.y!==0&&e.uint32(37).float(t.y),t.z!==0&&e.uint32(45).float(t.z),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=kd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.x=n.float();continue}case 4:{if(s!==37)break;r.y=n.float();continue}case 5:{if(s!==45)break;r.z=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",x:re(t.x)?globalThis.Number(t.x):0,y:re(t.y)?globalThis.Number(t.y):0,z:re(t.z)?globalThis.Number(t.z):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.x!==0&&(e.x=t.x),t.y!==0&&(e.y=t.y),t.z!==0&&(e.z=t.z),e},create(t){return bt.fromPartial(t??{})},fromPartial(t){const e=kd();return e.guid=t.guid??"",e.name=t.name??"",e.x=t.x??0,e.y=t.y??0,e.z=t.z??0,e}};function zd(){return{guid:"",name:"",point:void 0,xaxis:void 0,yaxis:void 0}}const Ve={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.point!==void 0&&Be.encode(t.point,e.uint32(26).fork()).join(),t.xaxis!==void 0&&bt.encode(t.xaxis,e.uint32(34).fork()).join(),t.yaxis!==void 0&&bt.encode(t.yaxis,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=zd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.point=Be.decode(n,n.uint32());continue}case 4:{if(s!==34)break;r.xaxis=bt.decode(n,n.uint32());continue}case 5:{if(s!==42)break;r.yaxis=bt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",point:re(t.point)?Be.fromJSON(t.point):void 0,xaxis:re(t.xaxis)?bt.fromJSON(t.xaxis):void 0,yaxis:re(t.yaxis)?bt.fromJSON(t.yaxis):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.point!==void 0&&(e.point=Be.toJSON(t.point)),t.xaxis!==void 0&&(e.xaxis=bt.toJSON(t.xaxis)),t.yaxis!==void 0&&(e.yaxis=bt.toJSON(t.yaxis)),e},create(t){return Ve.fromPartial(t??{})},fromPartial(t){const e=zd();return e.guid=t.guid??"",e.name=t.name??"",e.point=t.point!==void 0&&t.point!==null?Be.fromPartial(t.point):void 0,e.xaxis=t.xaxis!==void 0&&t.xaxis!==null?bt.fromPartial(t.xaxis):void 0,e.yaxis=t.yaxis!==void 0&&t.yaxis!==null?bt.fromPartial(t.yaxis):void 0,e}};function Vd(){return{guid:"",name:"",point:void 0,normal:void 0}}const Uu={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.point!==void 0&&Be.encode(t.point,e.uint32(26).fork()).join(),t.normal!==void 0&&bt.encode(t.normal,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Vd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.point=Be.decode(n,n.uint32());continue}case 4:{if(s!==34)break;r.normal=bt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",point:re(t.point)?Be.fromJSON(t.point):void 0,normal:re(t.normal)?bt.fromJSON(t.normal):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.point!==void 0&&(e.point=Be.toJSON(t.point)),t.normal!==void 0&&(e.normal=bt.toJSON(t.normal)),e},create(t){return Uu.fromPartial(t??{})},fromPartial(t){const e=Vd();return e.guid=t.guid??"",e.name=t.name??"",e.point=t.point!==void 0&&t.point!==null?Be.fromPartial(t.point):void 0,e.normal=t.normal!==void 0&&t.normal!==null?bt.fromPartial(t.normal):void 0,e}};function Gd(){return{guid:"",name:"",w:0,x:0,y:0,z:0}}const Ou={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.w!==0&&e.uint32(29).float(t.w),t.x!==0&&e.uint32(37).float(t.x),t.y!==0&&e.uint32(45).float(t.y),t.z!==0&&e.uint32(53).float(t.z),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Gd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.w=n.float();continue}case 4:{if(s!==37)break;r.x=n.float();continue}case 5:{if(s!==45)break;r.y=n.float();continue}case 6:{if(s!==53)break;r.z=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",w:re(t.w)?globalThis.Number(t.w):0,x:re(t.x)?globalThis.Number(t.x):0,y:re(t.y)?globalThis.Number(t.y):0,z:re(t.z)?globalThis.Number(t.z):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.w!==0&&(e.w=t.w),t.x!==0&&(e.x=t.x),t.y!==0&&(e.y=t.y),t.z!==0&&(e.z=t.z),e},create(t){return Ou.fromPartial(t??{})},fromPartial(t){const e=Gd();return e.guid=t.guid??"",e.name=t.name??"",e.w=t.w??0,e.x=t.x??0,e.y=t.y??0,e.z=t.z??0,e}};function Hd(){return{guid:"",name:"",start:void 0,end:void 0}}const Fu={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.start!==void 0&&Be.encode(t.start,e.uint32(26).fork()).join(),t.end!==void 0&&Be.encode(t.end,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Hd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.start=Be.decode(n,n.uint32());continue}case 4:{if(s!==34)break;r.end=Be.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",start:re(t.start)?Be.fromJSON(t.start):void 0,end:re(t.end)?Be.fromJSON(t.end):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.start!==void 0&&(e.start=Be.toJSON(t.start)),t.end!==void 0&&(e.end=Be.toJSON(t.end)),e},create(t){return Fu.fromPartial(t??{})},fromPartial(t){const e=Hd();return e.guid=t.guid??"",e.name=t.name??"",e.start=t.start!==void 0&&t.start!==null?Be.fromPartial(t.start):void 0,e.end=t.end!==void 0&&t.end!==null?Be.fromPartial(t.end):void 0,e}};function Wd(){return{guid:"",name:"",radius:0,frame:void 0}}const $i={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.frame!==void 0&&Ve.encode(t.frame,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Wd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==34)break;r.frame=Ve.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",radius:re(t.radius)?globalThis.Number(t.radius):0,frame:re(t.frame)?Ve.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.frame!==void 0&&(e.frame=Ve.toJSON(t.frame)),e},create(t){return $i.fromPartial(t??{})},fromPartial(t){const e=Wd();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.frame=t.frame!==void 0&&t.frame!==null?Ve.fromPartial(t.frame):void 0,e}};function Xd(){return{guid:"",name:"",circle:void 0,startAngle:0,endAngle:0}}const Bu={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.circle!==void 0&&$i.encode(t.circle,e.uint32(26).fork()).join(),t.startAngle!==0&&e.uint32(37).float(t.startAngle),t.endAngle!==0&&e.uint32(45).float(t.endAngle),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Xd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.circle=$i.decode(n,n.uint32());continue}case 4:{if(s!==37)break;r.startAngle=n.float();continue}case 5:{if(s!==45)break;r.endAngle=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",circle:re(t.circle)?$i.fromJSON(t.circle):void 0,startAngle:re(t.startAngle)?globalThis.Number(t.startAngle):re(t.start_angle)?globalThis.Number(t.start_angle):0,endAngle:re(t.endAngle)?globalThis.Number(t.endAngle):re(t.end_angle)?globalThis.Number(t.end_angle):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.circle!==void 0&&(e.circle=$i.toJSON(t.circle)),t.startAngle!==0&&(e.startAngle=t.startAngle),t.endAngle!==0&&(e.endAngle=t.endAngle),e},create(t){return Bu.fromPartial(t??{})},fromPartial(t){const e=Xd();return e.guid=t.guid??"",e.name=t.name??"",e.circle=t.circle!==void 0&&t.circle!==null?$i.fromPartial(t.circle):void 0,e.startAngle=t.startAngle??0,e.endAngle=t.endAngle??0,e}};function qd(){return{guid:"",name:"",major:0,minor:0,frame:void 0}}const ku={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.major!==0&&e.uint32(29).float(t.major),t.minor!==0&&e.uint32(37).float(t.minor),t.frame!==void 0&&Ve.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=qd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.major=n.float();continue}case 4:{if(s!==37)break;r.minor=n.float();continue}case 5:{if(s!==42)break;r.frame=Ve.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",major:re(t.major)?globalThis.Number(t.major):0,minor:re(t.minor)?globalThis.Number(t.minor):0,frame:re(t.frame)?Ve.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.major!==0&&(e.major=t.major),t.minor!==0&&(e.minor=t.minor),t.frame!==void 0&&(e.frame=Ve.toJSON(t.frame)),e},create(t){return ku.fromPartial(t??{})},fromPartial(t){const e=qd();return e.guid=t.guid??"",e.name=t.name??"",e.major=t.major??0,e.minor=t.minor??0,e.frame=t.frame!==void 0&&t.frame!==null?Ve.fromPartial(t.frame):void 0,e}};function Yd(){return{guid:"",name:"",focal:0,frame:void 0}}const zu={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.focal!==0&&e.uint32(29).float(t.focal),t.frame!==void 0&&Ve.encode(t.frame,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Yd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.focal=n.float();continue}case 4:{if(s!==34)break;r.frame=Ve.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",focal:re(t.focal)?globalThis.Number(t.focal):0,frame:re(t.frame)?Ve.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.focal!==0&&(e.focal=t.focal),t.frame!==void 0&&(e.frame=Ve.toJSON(t.frame)),e},create(t){return zu.fromPartial(t??{})},fromPartial(t){const e=Yd();return e.guid=t.guid??"",e.name=t.name??"",e.focal=t.focal??0,e.frame=t.frame!==void 0&&t.frame!==null?Ve.fromPartial(t.frame):void 0,e}};function $d(){return{guid:"",name:"",major:0,minor:0,frame:void 0}}const Vu={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.major!==0&&e.uint32(29).float(t.major),t.minor!==0&&e.uint32(37).float(t.minor),t.frame!==void 0&&Ve.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=$d();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.major=n.float();continue}case 4:{if(s!==37)break;r.minor=n.float();continue}case 5:{if(s!==42)break;r.frame=Ve.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",major:re(t.major)?globalThis.Number(t.major):0,minor:re(t.minor)?globalThis.Number(t.minor):0,frame:re(t.frame)?Ve.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.major!==0&&(e.major=t.major),t.minor!==0&&(e.minor=t.minor),t.frame!==void 0&&(e.frame=Ve.toJSON(t.frame)),e},create(t){return Vu.fromPartial(t??{})},fromPartial(t){const e=$d();return e.guid=t.guid??"",e.name=t.name??"",e.major=t.major??0,e.minor=t.minor??0,e.frame=t.frame!==void 0&&t.frame!==null?Ve.fromPartial(t.frame):void 0,e}};function Jd(){return{guid:"",name:"",points:[],degree:0}}const Gu={encode(t,e=new je){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name);for(const n of t.points)Be.encode(n,e.uint32(26).fork()).join();return t.degree!==0&&e.uint32(32).int32(t.degree),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Jd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(Be.decode(n,n.uint32()));continue}case 4:{if(s!==32)break;r.degree=n.int32();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",points:globalThis.Array.isArray(t?.points)?t.points.map(e=>Be.fromJSON(e)):[],degree:re(t.degree)?globalThis.Number(t.degree):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.points?.length&&(e.points=t.points.map(n=>Be.toJSON(n))),t.degree!==0&&(e.degree=Math.round(t.degree)),e},create(t){return Gu.fromPartial(t??{})},fromPartial(t){const e=Jd();return e.guid=t.guid??"",e.name=t.name??"",e.points=t.points?.map(n=>Be.fromPartial(n))||[],e.degree=t.degree??0,e}};function Kd(){return{guid:"",name:"",points:[]}}const Hu={encode(t,e=new je){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name);for(const n of t.points)Be.encode(n,e.uint32(26).fork()).join();return e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Kd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(Be.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",points:globalThis.Array.isArray(t?.points)?t.points.map(e=>Be.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.points?.length&&(e.points=t.points.map(n=>Be.toJSON(n))),e},create(t){return Hu.fromPartial(t??{})},fromPartial(t){const e=Kd();return e.guid=t.guid??"",e.name=t.name??"",e.points=t.points?.map(n=>Be.fromPartial(n))||[],e}};function Zd(){return{guid:"",name:"",points:[]}}const Wu={encode(t,e=new je){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name);for(const n of t.points)Be.encode(n,e.uint32(26).fork()).join();return e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Zd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(Be.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",points:globalThis.Array.isArray(t?.points)?t.points.map(e=>Be.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.points?.length&&(e.points=t.points.map(n=>Be.toJSON(n))),e},create(t){return Wu.fromPartial(t??{})},fromPartial(t){const e=Zd();return e.guid=t.guid??"",e.name=t.name??"",e.points=t.points?.map(n=>Be.fromPartial(n))||[],e}};function Qd(){return{guid:"",name:"",frame:void 0,xsize:0,ysize:0,zsize:0}}const Xu={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.frame!==void 0&&Ve.encode(t.frame,e.uint32(26).fork()).join(),t.xsize!==0&&e.uint32(37).float(t.xsize),t.ysize!==0&&e.uint32(45).float(t.ysize),t.zsize!==0&&e.uint32(53).float(t.zsize),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Qd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.frame=Ve.decode(n,n.uint32());continue}case 4:{if(s!==37)break;r.xsize=n.float();continue}case 5:{if(s!==45)break;r.ysize=n.float();continue}case 6:{if(s!==53)break;r.zsize=n.float();continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",frame:re(t.frame)?Ve.fromJSON(t.frame):void 0,xsize:re(t.xsize)?globalThis.Number(t.xsize):0,ysize:re(t.ysize)?globalThis.Number(t.ysize):0,zsize:re(t.zsize)?globalThis.Number(t.zsize):0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.frame!==void 0&&(e.frame=Ve.toJSON(t.frame)),t.xsize!==0&&(e.xsize=t.xsize),t.ysize!==0&&(e.ysize=t.ysize),t.zsize!==0&&(e.zsize=t.zsize),e},create(t){return Xu.fromPartial(t??{})},fromPartial(t){const e=Qd();return e.guid=t.guid??"",e.name=t.name??"",e.frame=t.frame!==void 0&&t.frame!==null?Ve.fromPartial(t.frame):void 0,e.xsize=t.xsize??0,e.ysize=t.ysize??0,e.zsize=t.zsize??0,e}};function jd(){return{guid:"",name:"",radius:0,frame:void 0}}const qu={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.frame!==void 0&&Ve.encode(t.frame,e.uint32(34).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=jd();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==34)break;r.frame=Ve.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",radius:re(t.radius)?globalThis.Number(t.radius):0,frame:re(t.frame)?Ve.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.frame!==void 0&&(e.frame=Ve.toJSON(t.frame)),e},create(t){return qu.fromPartial(t??{})},fromPartial(t){const e=jd();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.frame=t.frame!==void 0&&t.frame!==null?Ve.fromPartial(t.frame):void 0,e}};function eh(){return{guid:"",name:"",radius:0,height:0,frame:void 0}}const Yu={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.height!==0&&e.uint32(37).float(t.height),t.frame!==void 0&&Ve.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=eh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==37)break;r.height=n.float();continue}case 5:{if(s!==42)break;r.frame=Ve.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",radius:re(t.radius)?globalThis.Number(t.radius):0,height:re(t.height)?globalThis.Number(t.height):0,frame:re(t.frame)?Ve.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.height!==0&&(e.height=t.height),t.frame!==void 0&&(e.frame=Ve.toJSON(t.frame)),e},create(t){return Yu.fromPartial(t??{})},fromPartial(t){const e=eh();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.height=t.height??0,e.frame=t.frame!==void 0&&t.frame!==null?Ve.fromPartial(t.frame):void 0,e}};function th(){return{guid:"",name:"",radius:0,height:0,frame:void 0}}const $u={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.height!==0&&e.uint32(37).float(t.height),t.frame!==void 0&&Ve.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=th();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==37)break;r.height=n.float();continue}case 5:{if(s!==42)break;r.frame=Ve.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",radius:re(t.radius)?globalThis.Number(t.radius):0,height:re(t.height)?globalThis.Number(t.height):0,frame:re(t.frame)?Ve.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.height!==0&&(e.height=t.height),t.frame!==void 0&&(e.frame=Ve.toJSON(t.frame)),e},create(t){return $u.fromPartial(t??{})},fromPartial(t){const e=th();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.height=t.height??0,e.frame=t.frame!==void 0&&t.frame!==null?Ve.fromPartial(t.frame):void 0,e}};function nh(){return{guid:"",name:"",radius:0,height:0,frame:void 0}}const Ju={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radius!==0&&e.uint32(29).float(t.radius),t.height!==0&&e.uint32(37).float(t.height),t.frame!==void 0&&Ve.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=nh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radius=n.float();continue}case 4:{if(s!==37)break;r.height=n.float();continue}case 5:{if(s!==42)break;r.frame=Ve.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",radius:re(t.radius)?globalThis.Number(t.radius):0,height:re(t.height)?globalThis.Number(t.height):0,frame:re(t.frame)?Ve.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radius!==0&&(e.radius=t.radius),t.height!==0&&(e.height=t.height),t.frame!==void 0&&(e.frame=Ve.toJSON(t.frame)),e},create(t){return Ju.fromPartial(t??{})},fromPartial(t){const e=nh();return e.guid=t.guid??"",e.name=t.name??"",e.radius=t.radius??0,e.height=t.height??0,e.frame=t.frame!==void 0&&t.frame!==null?Ve.fromPartial(t.frame):void 0,e}};function ih(){return{guid:"",name:"",radiusAxis:0,radiusPipe:0,frame:void 0}}const Ku={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.radiusAxis!==0&&e.uint32(29).float(t.radiusAxis),t.radiusPipe!==0&&e.uint32(37).float(t.radiusPipe),t.frame!==void 0&&Ve.encode(t.frame,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=ih();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==29)break;r.radiusAxis=n.float();continue}case 4:{if(s!==37)break;r.radiusPipe=n.float();continue}case 5:{if(s!==42)break;r.frame=Ve.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",radiusAxis:re(t.radiusAxis)?globalThis.Number(t.radiusAxis):re(t.radius_axis)?globalThis.Number(t.radius_axis):0,radiusPipe:re(t.radiusPipe)?globalThis.Number(t.radiusPipe):re(t.radius_pipe)?globalThis.Number(t.radius_pipe):0,frame:re(t.frame)?Ve.fromJSON(t.frame):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.radiusAxis!==0&&(e.radiusAxis=t.radiusAxis),t.radiusPipe!==0&&(e.radiusPipe=t.radiusPipe),t.frame!==void 0&&(e.frame=Ve.toJSON(t.frame)),e},create(t){return Ku.fromPartial(t??{})},fromPartial(t){const e=ih();return e.guid=t.guid??"",e.name=t.name??"",e.radiusAxis=t.radiusAxis??0,e.radiusPipe=t.radiusPipe??0,e.frame=t.frame!==void 0&&t.frame!==null?Ve.fromPartial(t.frame):void 0,e}};function rh(){return{guid:"",name:"",points:[]}}const Zu={encode(t,e=new je){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name);for(const n of t.points)Be.encode(n,e.uint32(26).fork()).join();return e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=rh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.points.push(Be.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",points:globalThis.Array.isArray(t?.points)?t.points.map(e=>Be.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.points?.length&&(e.points=t.points.map(n=>Be.toJSON(n))),e},create(t){return Zu.fromPartial(t??{})},fromPartial(t){const e=rh();return e.guid=t.guid??"",e.name=t.name??"",e.points=t.points?.map(n=>Be.fromPartial(n))||[],e}};function sh(){return{guid:"",name:"",matrix:[]}}const Qu={encode(t,e=new je){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=sh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const a=n.uint32()+n.pos;for(;n.pos<a;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return Qu.fromPartial(t??{})},fromPartial(t){const e=sh();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function ah(){return{guid:"",name:"",translationVector:void 0}}const ju={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.translationVector!==void 0&&bt.encode(t.translationVector,e.uint32(26).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=ah();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.translationVector=bt.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",translationVector:re(t.translationVector)?bt.fromJSON(t.translationVector):re(t.translation_vector)?bt.fromJSON(t.translation_vector):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.translationVector!==void 0&&(e.translationVector=bt.toJSON(t.translationVector)),e},create(t){return ju.fromPartial(t??{})},fromPartial(t){const e=ah();return e.guid=t.guid??"",e.name=t.name??"",e.translationVector=t.translationVector!==void 0&&t.translationVector!==null?bt.fromPartial(t.translationVector):void 0,e}};function oh(){return{guid:"",name:"",axis:void 0,angle:0,point:void 0}}const ef={encode(t,e=new je){return t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),t.axis!==void 0&&bt.encode(t.axis,e.uint32(26).fork()).join(),t.angle!==0&&e.uint32(37).float(t.angle),t.point!==void 0&&Be.encode(t.point,e.uint32(42).fork()).join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=oh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.axis=bt.decode(n,n.uint32());continue}case 4:{if(s!==37)break;r.angle=n.float();continue}case 5:{if(s!==42)break;r.point=Be.decode(n,n.uint32());continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",axis:re(t.axis)?bt.fromJSON(t.axis):void 0,angle:re(t.angle)?globalThis.Number(t.angle):0,point:re(t.point)?Be.fromJSON(t.point):void 0}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.axis!==void 0&&(e.axis=bt.toJSON(t.axis)),t.angle!==0&&(e.angle=t.angle),t.point!==void 0&&(e.point=Be.toJSON(t.point)),e},create(t){return ef.fromPartial(t??{})},fromPartial(t){const e=oh();return e.guid=t.guid??"",e.name=t.name??"",e.axis=t.axis!==void 0&&t.axis!==null?bt.fromPartial(t.axis):void 0,e.angle=t.angle??0,e.point=t.point!==void 0&&t.point!==null?Be.fromPartial(t.point):void 0,e}};function lh(){return{guid:"",name:"",matrix:[]}}const tf={encode(t,e=new je){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=lh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const a=n.uint32()+n.pos;for(;n.pos<a;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return tf.fromPartial(t??{})},fromPartial(t){const e=lh();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function ch(){return{guid:"",name:"",matrix:[]}}const nf={encode(t,e=new je){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=ch();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const a=n.uint32()+n.pos;for(;n.pos<a;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return nf.fromPartial(t??{})},fromPartial(t){const e=ch();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function uh(){return{guid:"",name:"",matrix:[]}}const rf={encode(t,e=new je){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=uh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const a=n.uint32()+n.pos;for(;n.pos<a;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return rf.fromPartial(t??{})},fromPartial(t){const e=uh();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function fh(){return{guid:"",name:"",matrix:[]}}const sf={encode(t,e=new je){t.guid!==""&&e.uint32(10).string(t.guid),t.name!==""&&e.uint32(18).string(t.name),e.uint32(26).fork();for(const n of t.matrix)e.float(n);return e.join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=fh();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s===29){r.matrix.push(n.float());continue}if(s===26){const a=n.uint32()+n.pos;for(;n.pos<a;)r.matrix.push(n.float());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:re(t.guid)?globalThis.String(t.guid):"",name:re(t.name)?globalThis.String(t.name):"",matrix:globalThis.Array.isArray(t?.matrix)?t.matrix.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.guid!==""&&(e.guid=t.guid),t.name!==""&&(e.name=t.name),t.matrix?.length&&(e.matrix=t.matrix),e},create(t){return sf.fromPartial(t??{})},fromPartial(t){const e=fh();return e.guid=t.guid??"",e.name=t.name??"",e.matrix=t.matrix?.map(n=>n)||[],e}};function re(t){return t!=null}const af="182",ss={ROTATE:0,DOLLY:1,PAN:2},Qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iy=0,dh=1,Ly=2,ro=1,hg=2,Vs=3,tr=0,rn=1,wn=2,Ai=0,as=1,hh=2,ph=3,mh=4,Ny=5,gr=100,Uy=101,Oy=102,Fy=103,By=104,ky=200,zy=201,Vy=202,Gy=203,dc=204,hc=205,Hy=206,Wy=207,Xy=208,qy=209,Yy=210,$y=211,Jy=212,Ky=213,Zy=214,pc=0,mc=1,gc=2,fs=3,_c=4,vc=5,xc=6,yc=7,pg=0,Qy=1,jy=2,si=0,mg=1,gg=2,_g=3,of=4,vg=5,xg=6,yg=7,Sg=300,Er=301,ds=302,Sc=303,bc=304,ko=306,Mc=1e3,wi=1001,Ec=1002,Jt=1003,eS=1004,Ta=1005,tn=1006,_l=1007,vr=1008,An=1009,bg=1010,Mg=1011,aa=1012,lf=1013,ui=1014,ni=1015,Ii=1016,cf=1017,uf=1018,oa=1020,Eg=35902,Tg=35899,wg=1021,Ag=1022,zn=1023,Li=1026,xr=1027,Rg=1028,ff=1029,hs=1030,df=1031,hf=1033,so=33776,ao=33777,oo=33778,lo=33779,Tc=35840,wc=35841,Ac=35842,Rc=35843,Cc=36196,Pc=37492,Dc=37496,Ic=37488,Lc=37489,Nc=37490,Uc=37491,Oc=37808,Fc=37809,Bc=37810,kc=37811,zc=37812,Vc=37813,Gc=37814,Hc=37815,Wc=37816,Xc=37817,qc=37818,Yc=37819,$c=37820,Jc=37821,Kc=36492,Zc=36494,Qc=36495,jc=36283,eu=36284,tu=36285,nu=36286,tS=3200,Cg=0,nS=1,Ji="",Ln="srgb",ps="srgb-linear",yo="linear",St="srgb",Nr=7680,gh=519,iS=512,rS=513,sS=514,pf=515,aS=516,oS=517,mf=518,lS=519,_h=35044,vh="300 es",ii=2e3,So=2001;function Pg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function bo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function cS(){const t=bo("canvas");return t.style.display="block",t}const xh={};function yh(...t){const e="THREE."+t.shift();console.log(e,...t)}function qe(...t){const e="THREE."+t.shift();console.warn(e,...t)}function ht(...t){const e="THREE."+t.shift();console.error(e,...t)}function la(...t){const e=t.join(" ");e in xh||(xh[e]=!0,qe(...t))}function uS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class Rr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sh=1234567;const Zs=Math.PI/180,ms=180/Math.PI;function Es(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function st(t,e,n){return Math.max(e,Math.min(n,t))}function gf(t,e){return(t%e+e)%e}function fS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function dS(t,e,n){return t!==e?(n-t)/(e-t):0}function Qs(t,e,n){return(1-n)*t+n*e}function hS(t,e,n,i){return Qs(t,e,1-Math.exp(-n*i))}function pS(t,e=1){return e-Math.abs(gf(t,e*2)-e)}function mS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function gS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function _S(t,e){return t+Math.floor(Math.random()*(e-t+1))}function vS(t,e){return t+Math.random()*(e-t)}function xS(t){return t*(.5-Math.random())}function yS(t){t!==void 0&&(Sh=t);let e=Sh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function SS(t){return t*Zs}function bS(t){return t*ms}function MS(t){return(t&t-1)===0&&t!==0}function ES(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function TS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function wS(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*u,l*f,l*d,o*c);break;case"YZY":t.set(l*d,o*u,l*f,o*c);break;case"ZXZ":t.set(l*f,l*d,o*u,o*c);break;case"XZX":t.set(o*u,l*_,l*p,o*c);break;case"YXY":t.set(l*p,o*u,l*_,o*c);break;case"ZYZ":t.set(l*_,l*p,o*u,o*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const iu={DEG2RAD:Zs,RAD2DEG:ms,generateUUID:Es,clamp:st,euclideanModulo:gf,mapLinear:fS,inverseLerp:dS,lerp:Qs,damp:hS,pingpong:pS,smoothstep:mS,smootherstep:gS,randInt:_S,randFloat:vS,randFloatSpread:xS,seededRandom:yS,degToRad:SS,radToDeg:bS,isPowerOfTwo:MS,ceilPowerOfTwo:ES,floorPowerOfTwo:TS,setQuaternionFromProperEuler:wS,normalize:ln,denormalize:Zr};class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Tr=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],p=s[a+1],_=s[a+2],v=s[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o>=1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(f!==v||l!==d||c!==p||u!==_){let m=l*d+c*p+u*_+f*v;m<0&&(d=-d,p=-p,_=-_,v=-v,m=-m);let h=1-o;if(m<.9995){const y=Math.acos(m),T=Math.sin(y);h=Math.sin(h*y)/T,o=Math.sin(o*y)/T,l=l*h+d*o,c=c*h+p*o,u=u*h+_*o,f=f*h+v*o}else{l=l*h+d*o,c=c*h+p*o,u=u*h+_*o,f=f*h+v*o;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+u*f+l*p-c*d,e[n+1]=l*_+u*d+c*f-o*p,e[n+2]=c*_+u*p+o*d-l*f,e[n+3]=u*_-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this.z=st(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this.z=st(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new U,bh=new Tr;class et{constructor(e,n,i,r,s,a,o,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],v=r[0],m=r[3],h=r[6],y=r[1],T=r[4],b=r[7],w=r[2],R=r[5],P=r[8];return s[0]=a*v+o*y+l*w,s[3]=a*m+o*T+l*R,s[6]=a*h+o*b+l*P,s[1]=c*v+u*y+f*w,s[4]=c*m+u*T+f*R,s[7]=c*h+u*b+f*P,s[2]=d*v+p*y+_*w,s[5]=d*m+p*T+_*R,s[8]=d*h+p*b+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,p=c*s-a*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-o*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(xl.makeScale(e,n)),this}rotate(e){return this.premultiply(xl.makeRotation(-e)),this}translate(e,n){return this.premultiply(xl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xl=new et,Mh=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AS(){const t={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===St&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(r.r=os(r.r),r.g=os(r.g),r.b=os(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ji?yo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return la("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return la("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ps]:{primaries:e,whitePoint:i,transfer:yo,toXYZ:Mh,fromXYZ:Eh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:e,whitePoint:i,transfer:St,toXYZ:Mh,fromXYZ:Eh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),t}const ct=AS();function Ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function os(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ur;class RS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ur===void 0&&(Ur=bo("canvas")),Ur.width=e.width,Ur.height=e.height;const r=Ur.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ur}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ri(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CS=0;class _f{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(yl(r[a].image)):s.push(yl(r[a]))}else s=yl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function yl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?RS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let PS=0;const Sl=new U;class dn extends Rr{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=wi,r=wi,s=tn,a=vr,o=zn,l=An,c=dn.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Es(),this.name="",this.source=new _f(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sl).x}get height(){return this.source.getSize(Sl).y}get depth(){return this.source.getSize(Sl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){qe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){qe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mc:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mc:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Sg;dn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(c+1)/2,b=(p+1)/2,w=(h+1)/2,R=(u+d)/4,P=(f+v)/4,L=(_+m)/4;return T>b&&T>w?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=P/i):b>w?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=R/r,s=L/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=P/s,r=L/s),this.set(i,r,s,n),this}let y=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-v)/y,this.z=(d-u)/y,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=st(this.x,e.x,n.x),this.y=st(this.y,e.y,n.y),this.z=st(this.z,e.z,n.z),this.w=st(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=st(this.x,e,n),this.y=st(this.y,e,n),this.z=st(this.z,e,n),this.w=st(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DS extends Rr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new dn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new _f(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends DS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Dg extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class IS extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ma{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(s,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wa.copy(i.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),Aa.subVectors(this.max,Ds),Or.subVectors(e.a,Ds),Fr.subVectors(e.b,Ds),Br.subVectors(e.c,Ds),Fi.subVectors(Fr,Or),Bi.subVectors(Br,Fr),cr.subVectors(Or,Br);let n=[0,-Fi.z,Fi.y,0,-Bi.z,Bi.y,0,-cr.z,cr.y,Fi.z,0,-Fi.x,Bi.z,0,-Bi.x,cr.z,0,-cr.x,-Fi.y,Fi.x,0,-Bi.y,Bi.x,0,-cr.y,cr.x,0];return!bl(n,Or,Fr,Br,Aa)||(n=[1,0,0,0,1,0,0,0,1],!bl(n,Or,Fr,Br,Aa))?!1:(Ra.crossVectors(Fi,Bi),n=[Ra.x,Ra.y,Ra.z],bl(n,Or,Fr,Br,Aa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gi=[new U,new U,new U,new U,new U,new U,new U,new U],On=new U,wa=new ma,Or=new U,Fr=new U,Br=new U,Fi=new U,Bi=new U,cr=new U,Ds=new U,Aa=new U,Ra=new U,ur=new U;function bl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ur.fromArray(t,s);const o=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),l=e.dot(ur),c=n.dot(ur),u=i.dot(ur);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const LS=new ma,Is=new U,Ml=new U;let ga=class{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):LS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const n=Is.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Is,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(Ml)),this.expandByPoint(Is.copy(e.center).sub(Ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};const _i=new U,El=new U,Ca=new U,ki=new U,Tl=new U,Pa=new U,wl=new U;class zo{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){El.copy(e).add(n).multiplyScalar(.5),Ca.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(El);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ca),o=ki.dot(this.direction),l=-ki.dot(Ca),c=ki.lengthSq(),u=Math.abs(1-a*a);let f,d,p,_;if(u>0)if(f=a*l-o,d=a*o-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const v=1/u;f*=v,d*=v,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(El).addScaledVector(Ca,d),p}intersectSphere(e,n){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,n,i,r,s){Tl.subVectors(n,e),Pa.subVectors(i,e),wl.crossVectors(Tl,Pa);let a=this.direction.dot(wl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ki.subVectors(this.origin,e);const l=o*this.direction.dot(Pa.crossVectors(ki,Pa));if(l<0)return null;const c=o*this.direction.dot(Tl.cross(ki));if(c<0||l+c>a)return null;const u=-o*ki.dot(wl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,n,i,r,s,a,o,l,c,u,f,d,p,_,v,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,d,p,_,v,m)}set(e,n,i,r,s,a,o,l,c,u,f,d,p,_,v,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),s=1/kr.setFromMatrixColumn(e,1).length(),a=1/kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*f,_=o*u,v=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-v*c,n[9]=-o*l,n[2]=v-d*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,v=c*f;n[0]=d+v*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=p*o-_,n[6]=v+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,v=c*f;n[0]=d-v*o,n[4]=-a*f,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*u,n[9]=v-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,_=o*u,v=o*f;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,v=o*c;n[0]=l*u,n[4]=v-d*f,n[8]=_*f+p,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*f+_,n[10]=d-v*f}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,v=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=a*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=o*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NS,e,US)}lookAt(e,n,i){const r=this.elements;return En.subVectors(e,n),En.lengthSq()===0&&(En.z=1),En.normalize(),zi.crossVectors(i,En),zi.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),zi.crossVectors(i,En)),zi.normalize(),Da.crossVectors(En,zi),r[0]=zi.x,r[4]=Da.x,r[8]=En.x,r[1]=zi.y,r[5]=Da.y,r[9]=En.y,r[2]=zi.z,r[6]=Da.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],v=i[6],m=i[10],h=i[14],y=i[3],T=i[7],b=i[11],w=i[15],R=r[0],P=r[4],L=r[8],x=r[12],M=r[1],I=r[5],F=r[9],V=r[13],Z=r[2],K=r[6],G=r[10],B=r[14],k=r[3],pe=r[7],me=r[11],ve=r[15];return s[0]=a*R+o*M+l*Z+c*k,s[4]=a*P+o*I+l*K+c*pe,s[8]=a*L+o*F+l*G+c*me,s[12]=a*x+o*V+l*B+c*ve,s[1]=u*R+f*M+d*Z+p*k,s[5]=u*P+f*I+d*K+p*pe,s[9]=u*L+f*F+d*G+p*me,s[13]=u*x+f*V+d*B+p*ve,s[2]=_*R+v*M+m*Z+h*k,s[6]=_*P+v*I+m*K+h*pe,s[10]=_*L+v*F+m*G+h*me,s[14]=_*x+v*V+m*B+h*ve,s[3]=y*R+T*M+b*Z+w*k,s[7]=y*P+T*I+b*K+w*pe,s[11]=y*L+T*F+b*G+w*me,s[15]=y*x+T*V+b*B+w*ve,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],v=e[7],m=e[11],h=e[15],y=l*p-c*d,T=o*p-c*f,b=o*d-l*f,w=a*p-c*u,R=a*d-l*u,P=a*f-o*u;return n*(v*y-m*T+h*b)-i*(_*y-m*w+h*R)+r*(_*T-v*w+h*P)-s*(_*b-v*R+m*P)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],v=e[13],m=e[14],h=e[15],y=f*m*c-v*d*c+v*l*p-o*m*p-f*l*h+o*d*h,T=_*d*c-u*m*c-_*l*p+a*m*p+u*l*h-a*d*h,b=u*v*c-_*f*c+_*o*p-a*v*p-u*o*h+a*f*h,w=_*f*l-u*v*l-_*o*d+a*v*d+u*o*m-a*f*m,R=n*y+i*T+r*b+s*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=y*P,e[1]=(v*d*s-f*m*s-v*r*p+i*m*p+f*r*h-i*d*h)*P,e[2]=(o*m*s-v*l*s+v*r*c-i*m*c-o*r*h+i*l*h)*P,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*p-i*l*p)*P,e[4]=T*P,e[5]=(u*m*s-_*d*s+_*r*p-n*m*p-u*r*h+n*d*h)*P,e[6]=(_*l*s-a*m*s-_*r*c+n*m*c+a*r*h-n*l*h)*P,e[7]=(a*d*s-u*l*s+u*r*c-n*d*c-a*r*p+n*l*p)*P,e[8]=b*P,e[9]=(_*f*s-u*v*s-_*i*p+n*v*p+u*i*h-n*f*h)*P,e[10]=(a*v*s-_*o*s+_*i*c-n*v*c-a*i*h+n*o*h)*P,e[11]=(u*o*s-a*f*s-u*i*c+n*f*c+a*i*p-n*o*p)*P,e[12]=w*P,e[13]=(u*v*r-_*f*r+_*i*d-n*v*d-u*i*m+n*f*m)*P,e[14]=(_*o*r-a*v*r-_*i*l+n*v*l+a*i*m-n*o*m)*P,e[15]=(a*f*r-u*o*r+u*i*l-n*f*l-a*i*d+n*o*d)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,d=s*c,p=s*u,_=s*f,v=a*u,m=a*f,h=o*f,y=l*c,T=l*u,b=l*f,w=i.x,R=i.y,P=i.z;return r[0]=(1-(v+h))*w,r[1]=(p+b)*w,r[2]=(_-T)*w,r[3]=0,r[4]=(p-b)*R,r[5]=(1-(d+h))*R,r[6]=(m+y)*R,r[7]=0,r[8]=(_+T)*P,r[9]=(m-y)*P,r[10]=(1-(d+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=kr.set(r[0],r[1],r[2]).length();const a=kr.set(r[4],r[5],r[6]).length(),o=kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Fn.copy(this);const c=1/s,u=1/a,f=1/o;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,n.setFromRotationMatrix(Fn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ii,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let _,v;if(l)_=s/(a-s),v=a*s/(a-s);else if(o===ii)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===So)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ii,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,v;if(l)_=1/(a-s),v=a/(a-s);else if(o===ii)_=-2/(a-s),v=-(a+s)/(a-s);else if(o===So)_=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const kr=new U,Fn=new _t,NS=new U(0,0,0),US=new U(1,1,1),zi=new U,Da=new U,En=new U,Th=new _t,wh=new Tr;class fi{constructor(e=0,n=0,i=0,r=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Th,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wh.setFromEuler(this),this.setFromQuaternion(wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Ig{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OS=0;const Ah=new U,zr=new Tr,vi=new _t,Ia=new U,Ls=new U,FS=new U,BS=new Tr,Rh=new U(1,0,0),Ch=new U(0,1,0),Ph=new U(0,0,1),Dh={type:"added"},kS={type:"removed"},Vr={type:"childadded",child:null},Al={type:"childremoved",child:null};class Pt extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new U,n=new fi,i=new Tr,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new et}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ig,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Rh,e)}rotateY(e){return this.rotateOnAxis(Ch,e)}rotateZ(e){return this.rotateOnAxis(Ph,e)}translateOnAxis(e,n){return Ah.copy(e).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rh,e)}translateY(e){return this.translateOnAxis(Ch,e)}translateZ(e){return this.translateOnAxis(Ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ia.copy(e):Ia.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Ls,Ia,this.up):vi.lookAt(Ia,Ls,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(vi),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dh),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kS),Al.child=e,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dh),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,FS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,BS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new U(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new U,xi=new U,Rl=new U,yi=new U,Gr=new U,Hr=new U,Ih=new U,Cl=new U,Pl=new U,Dl=new U,Il=new Nt,Ll=new Nt,Nl=new Nt;class kn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),xi.subVectors(i,n),Rl.subVectors(e,n);const a=Bn.dot(Bn),o=Bn.dot(xi),l=Bn.dot(Rl),c=xi.dot(xi),u=xi.dot(Rl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Il.setScalar(0),Ll.setScalar(0),Nl.setScalar(0),Il.fromBufferAttribute(e,n),Ll.fromBufferAttribute(e,i),Nl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Il,s.x),a.addScaledVector(Ll,s.y),a.addScaledVector(Nl,s.z),a}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),xi.subVectors(e,n),Bn.cross(xi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Bn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Gr.subVectors(r,i),Hr.subVectors(s,i),Cl.subVectors(e,i);const l=Gr.dot(Cl),c=Hr.dot(Cl);if(l<=0&&c<=0)return n.copy(i);Pl.subVectors(e,r);const u=Gr.dot(Pl),f=Hr.dot(Pl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Gr,a);Dl.subVectors(e,s);const p=Gr.dot(Dl),_=Hr.dot(Dl);if(_>=0&&p<=_)return n.copy(s);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Hr,o);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Ih.subVectors(s,r),o=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(Ih,o);const h=1/(m+v+d);return a=v*h,o=d*h,n.copy(i).addScaledVector(Gr,a).addScaledVector(Hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},La={h:0,s:0,l:0};function Ul(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ct.workingColorSpace){if(e=gf(e,1),n=st(n,0,1),i=st(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Ul(a,s,e+1/3),this.g=Ul(a,s,e),this.b=Ul(a,s,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,n=Ln){function i(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ln){const i=Lg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return ct.workingToColorSpace(Qt.copy(this),e),Math.round(st(Qt.r*255,0,255))*65536+Math.round(st(Qt.g*255,0,255))*256+Math.round(st(Qt.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.workingToColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ct.workingColorSpace){return ct.workingToColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Ln){ct.workingToColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==Ln?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(La);const i=Qs(Vi.h,La.h,n),r=Qs(Vi.s,La.s,n),s=Qs(Vi.l,La.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Ze;Ze.NAMES=Lg;let zS=0;class Cr extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=as,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=hc,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){qe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){qe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dc&&(i.blendSrc=this.blendSrc),this.blendDst!==hc&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ts extends Cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=pg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new U,Na=new Je;let VS=0;class hn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:VS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=_h,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Na.fromBufferAttribute(this,n),Na.applyMatrix3(e),this.setXY(n,Na.x,Na.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Zr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zr(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zr(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zr(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}}class Ng extends hn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ug extends hn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ot extends hn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let GS=0;const In=new _t,Ol=new Pt,Wr=new U,Tn=new ma,Ns=new ma,qt=new U;class pt extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pg(e)?Ug:Ng)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return Ol.lookAt(e),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ot(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(Tn.min,Ns.min),Tn.expandByPoint(qt),qt.addVectors(Tn.max,Ns.max),Tn.expandByPoint(qt)):(Tn.expandByPoint(Ns.min),Tn.expandByPoint(Ns.max))}Tn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)qt.fromBufferAttribute(o,c),l&&(Wr.fromBufferAttribute(e,c),qt.add(Wr)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new U,l[L]=new U;const c=new U,u=new U,f=new U,d=new Je,p=new Je,_=new Je,v=new U,m=new U;function h(L,x,M){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,x),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,L),p.fromBufferAttribute(s,x),_.fromBufferAttribute(s,M),u.sub(c),f.sub(c),p.sub(d),_.sub(d);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(I),o[L].add(v),o[x].add(v),o[M].add(v),l[L].add(m),l[x].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,x=y.length;L<x;++L){const M=y[L],I=M.start,F=M.count;for(let V=I,Z=I+F;V<Z;V+=3)h(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const T=new U,b=new U,w=new U,R=new U;function P(L){w.fromBufferAttribute(r,L),R.copy(w);const x=o[L];T.copy(x),T.sub(w.multiplyScalar(w.dot(x))).normalize(),b.crossVectors(R,x);const I=b.dot(l[L])<0?-1:1;a.setXYZW(L,T.x,T.y,T.z,I)}for(let L=0,x=y.length;L<x;++L){const M=y[L],I=M.start,F=M.count;for(let V=I,Z=I+F;V<Z;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,f=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)qt.fromBufferAttribute(e,n),qt.normalize(),e.setXYZ(n,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new hn(d,u,f)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new _t,fr=new zo,Ua=new ga,Nh=new U,Oa=new U,Fa=new U,Ba=new U,Fl=new U,ka=new U,Uh=new U,za=new U;let $t=class extends Pt{constructor(e=new pt,n=new Ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ka.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Fl.fromBufferAttribute(f,e),a?ka.addScaledVector(Fl,u):ka.addScaledVector(Fl.sub(n),u))}n.add(ka)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Ua.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Ua,Nh)===null||fr.origin.distanceToSquared(Nh)>(e.far-e.near)**2))&&(Lh.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Lh),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=a[m.materialIndex],y=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,w=T;b<w;b+=3){const R=o.getX(b),P=o.getX(b+1),L=o.getX(b+2);r=Va(this,h,e,i,c,u,f,R,P,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const y=o.getX(m),T=o.getX(m+1),b=o.getX(m+2);r=Va(this,a,e,i,c,u,f,y,T,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=a[m.materialIndex],y=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,w=T;b<w;b+=3){const R=b,P=b+1,L=b+2;r=Va(this,h,e,i,c,u,f,R,P,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const y=m,T=m+1,b=m+2;r=Va(this,a,e,i,c,u,f,y,T,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}};function HS(t,e,n,i,r,s,a,o){let l;if(e.side===rn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===tr,o),l===null)return null;za.copy(o),za.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(za);return c<n.near||c>n.far?null:{distance:c,point:za.clone(),object:t}}function Va(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Oa),t.getVertexPosition(l,Fa),t.getVertexPosition(c,Ba);const u=HS(t,e,n,i,Oa,Fa,Ba,Uh);if(u){const f=new U;kn.getBarycoord(Uh,Oa,Fa,Ba,f),r&&(u.uv=kn.getInterpolatedAttribute(r,o,l,c,f,new Je)),s&&(u.uv1=kn.getInterpolatedAttribute(s,o,l,c,f,new Je)),a&&(u.normal=kn.getInterpolatedAttribute(a,o,l,c,f,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};kn.getNormal(Oa,Fa,Ba,d.normal),u.face=d,u.barycoord=f}return u}class Pr extends pt{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(f,2));function _(v,m,h,y,T,b,w,R,P,L,x){const M=b/P,I=w/L,F=b/2,V=w/2,Z=R/2,K=P+1,G=L+1;let B=0,k=0;const pe=new U;for(let me=0;me<G;me++){const ve=me*I-V;for(let ze=0;ze<K;ze++){const Oe=ze*M-F;pe[v]=Oe*y,pe[m]=ve*T,pe[h]=Z,c.push(pe.x,pe.y,pe.z),pe[v]=0,pe[m]=0,pe[h]=R>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(ze/P),f.push(1-me/L),B+=1}}for(let me=0;me<L;me++)for(let ve=0;ve<P;ve++){const ze=d+ve+K*me,Oe=d+ve+K*(me+1),nt=d+(ve+1)+K*(me+1),ut=d+(ve+1)+K*me;l.push(ze,Oe,ut),l.push(Oe,nt,ut),k+=6}o.addGroup(p,k,x),p+=k,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=gs(t[n]);for(const r in i)e[r]=i[r]}return e}function WS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Og(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const Fg={clone:gs,merge:cn};var XS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XS,this.fragmentShader=qS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=WS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Bg extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new U,Oh=new Je,Fh=new Je;class xn extends Bg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,n){return this.getViewBounds(e,Oh,Fh),n.subVectors(Fh,Oh)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Zs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xr=-90,qr=1;class YS extends Pt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(Xr,qr,e,n);r.layers=this.layers,this.add(r);const s=new xn(Xr,qr,e,n);s.layers=this.layers,this.add(s);const a=new xn(Xr,qr,e,n);a.layers=this.layers,this.add(a);const o=new xn(Xr,qr,e,n);o.layers=this.layers,this.add(o);const l=new xn(Xr,qr,e,n);l.layers=this.layers,this.add(l);const c=new xn(Xr,qr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===So)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class kg extends dn{constructor(e=[],n=Er,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zg extends ai{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new kg(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pr(5,5,5),s=new Wn({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Ai});s.uniforms.tEquirect.value=n;const a=new $t(r,s),o=n.minFilter;return n.minFilter===vr&&(n.minFilter=tn),new YS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class Ga extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $S={type:"move"};class Bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($S)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ga;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class JS extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class KS extends dn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Jt,u=Jt,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kl=new U,ZS=new U,QS=new et;let Mi=class{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=kl.subVectors(i,n).cross(ZS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(kl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||QS.getNormalMatrix(e),r=this.coplanarPoint(kl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const dr=new ga,jS=new Je(.5,.5),Ha=new U;class vf{constructor(e=new Mi,n=new Mi,i=new Mi,r=new Mi,s=new Mi,a=new Mi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ii,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],p=s[7],_=s[8],v=s[9],m=s[10],h=s[11],y=s[12],T=s[13],b=s[14],w=s[15];if(r[0].setComponents(c-a,p-u,h-_,w-y).normalize(),r[1].setComponents(c+a,p+u,h+_,w+y).normalize(),r[2].setComponents(c+o,p+f,h+v,w+T).normalize(),r[3].setComponents(c-o,p-f,h-v,w-T).normalize(),i)r[4].setComponents(l,d,m,b).normalize(),r[5].setComponents(c-l,p-d,h-m,w-b).normalize();else if(r[4].setComponents(c-l,p-d,h-m,w-b).normalize(),n===ii)r[5].setComponents(c+l,p+d,h+m,w+b).normalize();else if(n===So)r[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);const n=jS.distanceTo(e.center);return dr.radius=.7071067811865476+n,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ha.x=r.normal.x>0?e.max.x:e.min.x,Ha.y=r.normal.y>0?e.max.y:e.min.y,Ha.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ui extends Cr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mo=new U,Eo=new U,Bh=new _t,Us=new zo,Wa=new ga,zl=new U,kh=new U;let nr=class extends Pt{constructor(e=new pt,n=new Ui){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Mo.fromBufferAttribute(n,r-1),Eo.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Mo.distanceTo(Eo);e.setAttribute("lineDistance",new ot(i,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(r),Wa.radius+=s,e.ray.intersectsSphere(Wa)===!1)return;Bh.copy(r).invert(),Us.copy(e.ray).applyMatrix4(Bh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=p,m=_-1;v<m;v+=c){const h=u.getX(v),y=u.getX(v+1),T=Xa(this,e,Us,l,h,y,v);T&&n.push(T)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(p),h=Xa(this,e,Us,l,v,m,_-1);h&&n.push(h)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let v=p,m=_-1;v<m;v+=c){const h=Xa(this,e,Us,l,v,v+1,v);h&&n.push(h)}if(this.isLineLoop){const v=Xa(this,e,Us,l,_-1,p,_-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Xa(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(Mo.fromBufferAttribute(o,r),Eo.fromBufferAttribute(o,s),n.distanceSqToSegment(Mo,Eo,zl,kh)>i)return;zl.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(zl);if(!(c<e.near||c>e.far))return{distance:c,point:kh.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const zh=new U,Vh=new U;class Vg extends nr{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)zh.fromBufferAttribute(n,r),Vh.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+zh.distanceTo(Vh);e.setAttribute("lineDistance",new ot(i,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xf extends Cr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gh=new _t,ru=new zo,qa=new ga,Ya=new U;class Gg extends Pt{constructor(e=new pt,n=new xf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(r),qa.radius+=s,e.ray.intersectsSphere(qa)===!1)return;Gh.copy(r).invert(),ru.copy(e.ray).applyMatrix4(Gh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=d,v=p;_<v;_++){const m=c.getX(_);Ya.fromBufferAttribute(f,m),Hh(Ya,m,l,r,e,n,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,v=p;_<v;_++)Ya.fromBufferAttribute(f,_),Hh(Ya,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Hh(t,e,n,i,r,s,a){const o=ru.distanceSqToPoint(t);if(o<n){const l=new U;ru.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ca extends dn{constructor(e,n,i=ui,r,s,a,o=Jt,l=Jt,c,u=Li,f=1){if(u!==Li&&u!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _f(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class eb extends ca{constructor(e,n=ui,i=Er,r,s,a=Jt,o=Jt,l,c=Li){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hg extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yf extends pt{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],u=n/2,f=Math.PI/2*e,d=n,p=2*f+d,_=i*2+s,v=r+1,m=new U,h=new U;for(let y=0;y<=_;y++){let T=0,b=0,w=0,R=0;if(y<=i){const x=y/i,M=x*Math.PI/2;b=-u-e*Math.cos(M),w=e*Math.sin(M),R=-e*Math.cos(M),T=x*f}else if(y<=i+s){const x=(y-i)/s;b=-u+x*n,w=e,R=0,T=f+x*d}else{const x=(y-i-s)/i,M=x*Math.PI/2;b=u+e*Math.sin(M),w=e*Math.cos(M),R=e*Math.sin(M),T=f+d+x*f}const P=Math.max(0,Math.min(1,T/p));let L=0;y===0?L=.5/r:y===_&&(L=-.5/r);for(let x=0;x<=r;x++){const M=x/r,I=M*Math.PI*2,F=Math.sin(I),V=Math.cos(I);h.x=-w*V,h.y=b,h.z=w*F,o.push(h.x,h.y,h.z),m.set(-w*V,R,w*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+L,P)}if(y>0){const x=(y-1)*v;for(let M=0;M<r;M++){const I=x+M,F=x+M+1,V=y*v+M,Z=y*v+M+1;a.push(I,F,V),a.push(F,Z,V)}}}this.setIndex(a),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yf(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Sf extends pt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],c=new U,u=new Je;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=n;f++,d+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(o,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Vo extends pt{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],p=[];let _=0;const v=[],m=i/2;let h=0;y(),a===!1&&(e>0&&T(!0),n>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new ot(f,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(p,2));function y(){const b=new U,w=new U;let R=0;const P=(n-e)/i;for(let L=0;L<=s;L++){const x=[],M=L/s,I=M*(n-e)+e;for(let F=0;F<=r;F++){const V=F/r,Z=V*l+o,K=Math.sin(Z),G=Math.cos(Z);w.x=I*K,w.y=-M*i+m,w.z=I*G,f.push(w.x,w.y,w.z),b.set(K,P,G).normalize(),d.push(b.x,b.y,b.z),p.push(V,1-M),x.push(_++)}v.push(x)}for(let L=0;L<r;L++)for(let x=0;x<s;x++){const M=v[x][L],I=v[x+1][L],F=v[x+1][L+1],V=v[x][L+1];(e>0||x!==0)&&(u.push(M,I,V),R+=3),(n>0||x!==s-1)&&(u.push(I,F,V),R+=3)}c.addGroup(h,R,0),h+=R}function T(b){const w=_,R=new Je,P=new U;let L=0;const x=b===!0?e:n,M=b===!0?1:-1;for(let F=1;F<=r;F++)f.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),_++;const I=_;for(let F=0;F<=r;F++){const Z=F/r*l+o,K=Math.cos(Z),G=Math.sin(Z);P.x=x*G,P.y=m*M,P.z=x*K,f.push(P.x,P.y,P.z),d.push(0,M,0),R.x=K*.5+.5,R.y=G*.5*M+.5,p.push(R.x,R.y),_++}for(let F=0;F<r;F++){const V=w+F,Z=I+F;b===!0?u.push(Z,Z+1,V):u.push(Z+1,Z,V),L+=3}c.addGroup(h,L,b===!0?1:2),h+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Go extends Vo{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Go(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ho extends pt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=n/l,p=[],_=[],v=[],m=[];for(let h=0;h<u;h++){const y=h*d-a;for(let T=0;T<c;T++){const b=T*f-s;_.push(b,-y,0),v.push(0,0,1),m.push(T/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<o;y++){const T=y+c*h,b=y+c*(h+1),w=y+1+c*(h+1),R=y+1+c*h;p.push(T,b,R),p.push(b,w,R)}this.setIndex(p),this.setAttribute("position",new ot(_,3)),this.setAttribute("normal",new ot(v,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wo extends pt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new U,d=new U,p=[],_=[],v=[],m=[];for(let h=0;h<=i;h++){const y=[],T=h/i;let b=0;h===0&&a===0?b=.5/n:h===i&&l===Math.PI&&(b=-.5/n);for(let w=0;w<=n;w++){const R=w/n;f.x=-e*Math.cos(r+R*s)*Math.sin(a+T*o),f.y=e*Math.cos(a+T*o),f.z=e*Math.sin(r+R*s)*Math.sin(a+T*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(R+b,1-T),y.push(c++)}u.push(y)}for(let h=0;h<i;h++)for(let y=0;y<n;y++){const T=u[h][y+1],b=u[h][y],w=u[h+1][y],R=u[h+1][y+1];(h!==0||a>0)&&p.push(T,b,R),(h!==i-1||l<Math.PI)&&p.push(b,w,R)}this.setIndex(p),this.setAttribute("position",new ot(_,3)),this.setAttribute("normal",new ot(v,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bf extends pt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new U,f=new U,d=new U;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const v=_/r*s,m=p/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(v),f.y=(e+n*Math.cos(m))*Math.sin(v),f.z=n*Math.sin(m),o.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const v=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,h=(r+1)*(p-1)+_,y=(r+1)*p+_;a.push(v,m,y),a.push(m,h,y)}this.setIndex(a),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class tb extends Wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xo extends Cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cg,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nb extends Cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ib extends Cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _a extends Pt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Vl=new _t,Wh=new U,Xh=new U;class Mf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vf,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Wh.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wh),Xh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Xh),n.updateMatrixWorld(),Vl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rb extends Mf{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=ms*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sb extends _a{constructor(e,n,i=0,r=Math.PI/3,s=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new rb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class ab extends Mf{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}}class ob extends _a{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ab}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Ef extends Bg{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class lb extends Mf{constructor(){super(new Ef(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wg extends _a{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new lb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Xg extends _a{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class cb extends _a{constructor(e,n,i=10,r=10){super(e,n),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const n=super.toJSON(e);return n.object.width=this.width,n.object.height=this.height,n}}class ub extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class qh{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=st(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(st(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Yh=new U;class fb extends Pt{constructor(e,n){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=n,this.type="SpotLightHelper";const i=new pt,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,u=o/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}i.setAttribute("position",new ot(r,3));const s=new Ui({fog:!1,toneMapped:!1});this.cone=new Vg(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,n=e*Math.tan(this.light.angle);this.cone.scale.set(n,n,e),Yh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Yh),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}class db extends $t{constructor(e,n,i){const r=new Wo(n,4,2),s=new Ts({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const $h=new U,$a=new U,Jh=new U;class hb extends Pt{constructor(e,n,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",n===void 0&&(n=1);let r=new pt;r.setAttribute("position",new ot([-n,n,0,n,n,0,n,-n,0,-n,-n,0,-n,n,0],3));const s=new Ui({fog:!1,toneMapped:!1});this.lightPlane=new nr(r,s),this.add(this.lightPlane),r=new pt,r.setAttribute("position",new ot([0,0,0,0,0,1],3)),this.targetLine=new nr(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),$h.setFromMatrixPosition(this.light.matrixWorld),$a.setFromMatrixPosition(this.light.target.matrixWorld),Jh.subVectors($a,$h),this.lightPlane.lookAt($a),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt($a),this.targetLine.scale.z=Jh.length()}}class pb extends nr{constructor(e,n=1,i=16776960){const r=i,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new pt;a.setAttribute("position",new ot(s,3)),a.computeBoundingSphere(),super(a,new Ui({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=n;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new pt;l.setAttribute("position",new ot(o,3)),l.computeBoundingSphere(),this.add(new $t(l,new Ts({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Kh=new U;let Ja,Gl;class mb extends Pt{constructor(e=new U(0,0,1),n=new U(0,0,0),i=1,r=16776960,s=i*.2,a=s*.2){super(),this.type="ArrowHelper",Ja===void 0&&(Ja=new pt,Ja.setAttribute("position",new ot([0,0,0,0,1,0],3)),Gl=new Go(.5,1,5,1),Gl.translate(0,-.5,0)),this.position.copy(n),this.line=new nr(Ja,new Ui({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new $t(Gl,new Ts({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Kh.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(Kh,n)}}setLength(e,n=e*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class gb extends Vg{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new pt;r.setAttribute("position",new ot(n,3)),r.setAttribute("color",new ot(i,3));const s=new Ui({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new Ze,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class _b extends Rr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){qe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Zh(t,e,n,i){const r=vb(i);switch(n){case wg:return t*e;case Rg:return t*e/r.components*r.byteLength;case ff:return t*e/r.components*r.byteLength;case hs:return t*e*2/r.components*r.byteLength;case df:return t*e*2/r.components*r.byteLength;case Ag:return t*e*3/r.components*r.byteLength;case zn:return t*e*4/r.components*r.byteLength;case hf:return t*e*4/r.components*r.byteLength;case so:case ao:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case oo:case lo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wc:case Rc:return Math.max(t,16)*Math.max(e,8)/4;case Tc:case Ac:return Math.max(t,8)*Math.max(e,8)/2;case Cc:case Pc:case Ic:case Lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Dc:case Nc:case Uc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case kc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case zc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case qc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case $c:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Kc:case Zc:case Qc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case jc:case eu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case tu:case nu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function vb(t){switch(t){case An:case bg:return{byteLength:1,components:1};case aa:case Mg:case Ii:return{byteLength:2,components:1};case cf:case uf:return{byteLength:2,components:4};case ui:case lf:case ni:return{byteLength:4,components:1};case Eg:case Tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:af}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=af);function qg(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function xb(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var yb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sb=`#ifdef USE_ALPHAHASH
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
#endif`,bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wb=`#ifdef USE_AOMAP
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
#endif`,Ab=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rb=`#ifdef USE_BATCHING
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
#endif`,Cb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Db=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ib=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lb=`#ifdef USE_IRIDESCENCE
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
#endif`,Nb=`#ifdef USE_BUMPMAP
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
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hb=`#define PI 3.141592653589793
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
} // validated`,Wb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xb=`vec3 transformedNormal = objectNormal;
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
#endif`,qb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$b=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qb=`#ifdef USE_ENVMAP
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
#endif`,jb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oM=`#ifdef USE_GRADIENTMAP
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
}`,lM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fM=`uniform bool receiveShadow;
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
#endif`,dM=`#ifdef USE_ENVMAP
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
#endif`,hM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_M=`PhysicalMaterial material;
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
#endif`,vM=`uniform sampler2D dfgLUT;
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
}`,xM=`
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
#endif`,yM=`#if defined( RE_IndirectDiffuse )
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
#endif`,SM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CM=`#if defined( USE_POINTS_UV )
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
#endif`,PM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`#ifdef USE_MORPHTARGETS
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
#endif`,OM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GM=`#ifdef USE_NORMALMAP
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
#endif`,HM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$M=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,JM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rE=`float getShadowMask() {
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
}`,sE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aE=`#ifdef USE_SKINNING
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
#endif`,oE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lE=`#ifdef USE_SKINNING
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
#endif`,cE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hE=`#ifdef USE_TRANSMISSION
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
#endif`,pE=`#ifdef USE_TRANSMISSION
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
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yE=`uniform sampler2D t2D;
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
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`#include <common>
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
}`,wE=`#if DEPTH_PACKING == 3200
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
}`,AE=`#define DISTANCE
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
}`,RE=`#define DISTANCE
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
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`uniform float scale;
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
}`,IE=`uniform vec3 diffuse;
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
}`,LE=`#include <common>
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
}`,NE=`uniform vec3 diffuse;
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
}`,UE=`#define LAMBERT
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
}`,OE=`#define LAMBERT
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
}`,FE=`#define MATCAP
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
}`,BE=`#define MATCAP
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
}`,kE=`#define NORMAL
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
}`,zE=`#define NORMAL
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
}`,VE=`#define PHONG
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
}`,GE=`#define PHONG
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
}`,HE=`#define STANDARD
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
}`,WE=`#define STANDARD
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
}`,XE=`#define TOON
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
}`,qE=`#define TOON
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
}`,YE=`uniform float size;
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
}`,$E=`uniform vec3 diffuse;
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
}`,JE=`#include <common>
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
}`,KE=`uniform vec3 color;
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
}`,ZE=`uniform float rotation;
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
}`,QE=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:yb,alphahash_pars_fragment:Sb,alphamap_fragment:bb,alphamap_pars_fragment:Mb,alphatest_fragment:Eb,alphatest_pars_fragment:Tb,aomap_fragment:wb,aomap_pars_fragment:Ab,batching_pars_vertex:Rb,batching_vertex:Cb,begin_vertex:Pb,beginnormal_vertex:Db,bsdfs:Ib,iridescence_fragment:Lb,bumpmap_pars_fragment:Nb,clipping_planes_fragment:Ub,clipping_planes_pars_fragment:Ob,clipping_planes_pars_vertex:Fb,clipping_planes_vertex:Bb,color_fragment:kb,color_pars_fragment:zb,color_pars_vertex:Vb,color_vertex:Gb,common:Hb,cube_uv_reflection_fragment:Wb,defaultnormal_vertex:Xb,displacementmap_pars_vertex:qb,displacementmap_vertex:Yb,emissivemap_fragment:$b,emissivemap_pars_fragment:Jb,colorspace_fragment:Kb,colorspace_pars_fragment:Zb,envmap_fragment:Qb,envmap_common_pars_fragment:jb,envmap_pars_fragment:eM,envmap_pars_vertex:tM,envmap_physical_pars_fragment:dM,envmap_vertex:nM,fog_vertex:iM,fog_pars_vertex:rM,fog_fragment:sM,fog_pars_fragment:aM,gradientmap_pars_fragment:oM,lightmap_pars_fragment:lM,lights_lambert_fragment:cM,lights_lambert_pars_fragment:uM,lights_pars_begin:fM,lights_toon_fragment:hM,lights_toon_pars_fragment:pM,lights_phong_fragment:mM,lights_phong_pars_fragment:gM,lights_physical_fragment:_M,lights_physical_pars_fragment:vM,lights_fragment_begin:xM,lights_fragment_maps:yM,lights_fragment_end:SM,logdepthbuf_fragment:bM,logdepthbuf_pars_fragment:MM,logdepthbuf_pars_vertex:EM,logdepthbuf_vertex:TM,map_fragment:wM,map_pars_fragment:AM,map_particle_fragment:RM,map_particle_pars_fragment:CM,metalnessmap_fragment:PM,metalnessmap_pars_fragment:DM,morphinstance_vertex:IM,morphcolor_vertex:LM,morphnormal_vertex:NM,morphtarget_pars_vertex:UM,morphtarget_vertex:OM,normal_fragment_begin:FM,normal_fragment_maps:BM,normal_pars_fragment:kM,normal_pars_vertex:zM,normal_vertex:VM,normalmap_pars_fragment:GM,clearcoat_normal_fragment_begin:HM,clearcoat_normal_fragment_maps:WM,clearcoat_pars_fragment:XM,iridescence_pars_fragment:qM,opaque_fragment:YM,packing:$M,premultiplied_alpha_fragment:JM,project_vertex:KM,dithering_fragment:ZM,dithering_pars_fragment:QM,roughnessmap_fragment:jM,roughnessmap_pars_fragment:eE,shadowmap_pars_fragment:tE,shadowmap_pars_vertex:nE,shadowmap_vertex:iE,shadowmask_pars_fragment:rE,skinbase_vertex:sE,skinning_pars_vertex:aE,skinning_vertex:oE,skinnormal_vertex:lE,specularmap_fragment:cE,specularmap_pars_fragment:uE,tonemapping_fragment:fE,tonemapping_pars_fragment:dE,transmission_fragment:hE,transmission_pars_fragment:pE,uv_pars_fragment:mE,uv_pars_vertex:gE,uv_vertex:_E,worldpos_vertex:vE,background_vert:xE,background_frag:yE,backgroundCube_vert:SE,backgroundCube_frag:bE,cube_vert:ME,cube_frag:EE,depth_vert:TE,depth_frag:wE,distance_vert:AE,distance_frag:RE,equirect_vert:CE,equirect_frag:PE,linedashed_vert:DE,linedashed_frag:IE,meshbasic_vert:LE,meshbasic_frag:NE,meshlambert_vert:UE,meshlambert_frag:OE,meshmatcap_vert:FE,meshmatcap_frag:BE,meshnormal_vert:kE,meshnormal_frag:zE,meshphong_vert:VE,meshphong_frag:GE,meshphysical_vert:HE,meshphysical_frag:WE,meshtoon_vert:XE,meshtoon_frag:qE,points_vert:YE,points_frag:$E,shadow_vert:JE,shadow_frag:KE,sprite_vert:ZE,sprite_frag:QE},Me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},ei={basic:{uniforms:cn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:cn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:cn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:cn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:cn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:cn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:cn([Me.points,Me.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:cn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:cn([Me.common,Me.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:cn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:cn([Me.sprite,Me.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:cn([Me.common,Me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:cn([Me.lights,Me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ei.physical={uniforms:cn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Ka={r:0,b:0,g:0},hr=new fi,jE=new _t;function eT(t,e,n,i,r,s,a){const o=new Ze(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function _(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?n:e).get(b)),b}function v(T){let b=!1;const w=_(T);w===null?h(o,l):w&&w.isColor&&(h(w,1),b=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(T,b){const w=_(b);w&&(w.isCubeTexture||w.mapping===ko)?(u===void 0&&(u=new $t(new Pr(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:gs(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),hr.copy(b.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jE.makeRotationFromEuler(hr)),u.material.toneMapped=ct.getTransfer(w.colorSpace)!==St,(f!==w||d!==w.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=w,d=w.version,p=t.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new $t(new Ho(2,2),new Wn({name:"BackgroundMaterial",uniforms:gs(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ct.getTransfer(w.colorSpace)!==St,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=w,d=w.version,p=t.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function h(T,b){T.getRGB(Ka,Og(t)),i.buffers.color.setClear(Ka.r,Ka.g,Ka.b,b,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,b=1){o.set(T),l=b,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(o,l)},render:v,addToRenderList:m,dispose:y}}function tT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(M,I,F,V,Z){let K=!1;const G=f(V,F,I);s!==G&&(s=G,c(s.object)),K=p(M,V,F,Z),K&&_(M,V,F,Z),Z!==null&&e.update(Z,t.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,b(M,I,F,V),Z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function f(M,I,F){const V=F.wireframe===!0;let Z=i[M.id];Z===void 0&&(Z={},i[M.id]=Z);let K=Z[I.id];K===void 0&&(K={},Z[I.id]=K);let G=K[V];return G===void 0&&(G=d(l()),K[V]=G),G}function d(M){const I=[],F=[],V=[];for(let Z=0;Z<n;Z++)I[Z]=0,F[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,I,F,V){const Z=s.attributes,K=I.attributes;let G=0;const B=F.getAttributes();for(const k in B)if(B[k].location>=0){const me=Z[k];let ve=K[k];if(ve===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),me===void 0||me.attribute!==ve||ve&&me.data!==ve.data)return!0;G++}return s.attributesNum!==G||s.index!==V}function _(M,I,F,V){const Z={},K=I.attributes;let G=0;const B=F.getAttributes();for(const k in B)if(B[k].location>=0){let me=K[k];me===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(me=M.instanceColor));const ve={};ve.attribute=me,me&&me.data&&(ve.data=me.data),Z[k]=ve,G++}s.attributes=Z,s.attributesNum=G,s.index=V}function v(){const M=s.newAttributes;for(let I=0,F=M.length;I<F;I++)M[I]=0}function m(M){h(M,0)}function h(M,I){const F=s.newAttributes,V=s.enabledAttributes,Z=s.attributeDivisors;F[M]=1,V[M]===0&&(t.enableVertexAttribArray(M),V[M]=1),Z[M]!==I&&(t.vertexAttribDivisor(M,I),Z[M]=I)}function y(){const M=s.newAttributes,I=s.enabledAttributes;for(let F=0,V=I.length;F<V;F++)I[F]!==M[F]&&(t.disableVertexAttribArray(F),I[F]=0)}function T(M,I,F,V,Z,K,G){G===!0?t.vertexAttribIPointer(M,I,F,Z,K):t.vertexAttribPointer(M,I,F,V,Z,K)}function b(M,I,F,V){v();const Z=V.attributes,K=F.getAttributes(),G=I.defaultAttributeValues;for(const B in K){const k=K[B];if(k.location>=0){let pe=Z[B];if(pe===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),pe!==void 0){const me=pe.normalized,ve=pe.itemSize,ze=e.get(pe);if(ze===void 0)continue;const Oe=ze.buffer,nt=ze.type,ut=ze.bytesPerElement,te=nt===t.INT||nt===t.UNSIGNED_INT||pe.gpuType===lf;if(pe.isInterleavedBufferAttribute){const ne=pe.data,Ce=ne.stride,We=pe.offset;if(ne.isInstancedInterleavedBuffer){for(let Ae=0;Ae<k.locationSize;Ae++)h(k.location+Ae,ne.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ae=0;Ae<k.locationSize;Ae++)m(k.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let Ae=0;Ae<k.locationSize;Ae++)T(k.location+Ae,ve/k.locationSize,nt,me,Ce*ut,(We+ve/k.locationSize*Ae)*ut,te)}else{if(pe.isInstancedBufferAttribute){for(let ne=0;ne<k.locationSize;ne++)h(k.location+ne,pe.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ne=0;ne<k.locationSize;ne++)m(k.location+ne);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let ne=0;ne<k.locationSize;ne++)T(k.location+ne,ve/k.locationSize,nt,me,ve*ut,ve/k.locationSize*ne*ut,te)}}else if(G!==void 0){const me=G[B];if(me!==void 0)switch(me.length){case 2:t.vertexAttrib2fv(k.location,me);break;case 3:t.vertexAttrib3fv(k.location,me);break;case 4:t.vertexAttrib4fv(k.location,me);break;default:t.vertexAttrib1fv(k.location,me)}}}}y()}function w(){L();for(const M in i){const I=i[M];for(const F in I){const V=I[F];for(const Z in V)u(V[Z].object),delete V[Z];delete I[F]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const F in I){const V=I[F];for(const Z in V)u(V[Z].object),delete V[Z];delete I[F]}delete i[M.id]}function P(M){for(const I in i){const F=i[I];if(F[M.id]===void 0)continue;const V=F[M.id];for(const Z in V)u(V[Z].object),delete V[Z];delete F[M.id]}}function L(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:x,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function nT(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*d[v];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function iT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==zn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const L=P===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==An&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ni&&!L)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:b,maxSamples:w,samples:R}}function rT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Mi,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,T=y*4;let b=h.clippingState||null;l.value=b,b=u(_,d,T,p);for(let w=0;w!==T;++w)b[w]=n[w];h.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const h=p+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let T=0,b=p;T!==v;++T,b+=4)a.copy(f[T]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function sT(t){let e=new WeakMap;function n(a,o){return o===Sc?a.mapping=Er:o===bc&&(a.mapping=ds),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sc||o===bc)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new zg(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Qi=4,Qh=[.125,.215,.35,.446,.526,.582],_r=20,aT=256,Os=new Ef,jh=new Ze;let Hl=null,Wl=0,Xl=0,ql=!1;const oT=new U;class ep{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=oT}=s;Hl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hl,Wl,Xl),this._renderer.xr.enabled=ql,e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Er||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ii,format:zn,colorSpace:ps,depthBuffer:!1},r=tp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tp(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lT(s)),this._blurMaterial=uT(s,e,n),this._ggxMaterial=cT(s,e,n)}return r}_compileMaterial(e){const n=new $t(new pt,e);this._renderer.compile(n,Os)}_sceneToCubeUV(e,n,i,r,s){const l=new xn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(jh),f.toneMapping=si,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $t(new Pr,new Ts({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let h=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,h=!0):(m.color.copy(jh),h=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const w=this._cubeSize;Yr(r,b*w,T>2?w:0,w,w),f.setRenderTarget(r),h&&f.render(v,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=y}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Er||e.mapping===ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=np());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Yr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Os)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,p=f*d,{_lodMax:_}=this,v=this._sizeLods[i],m=3*v*(i>_-Qi?i-_+Qi:0),h=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,Yr(s,m,h,3*v,2*v),r.setRenderTarget(s),r.render(o,Os),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Yr(e,m,h,3*v,2*v),r.setRenderTarget(e),r.render(o,Os)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ht("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*_r-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):_r;m>_r&&qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);const h=[];let y=0;for(let P=0;P<_r;++P){const L=P/v,x=Math.exp(-L*L/2);h.push(x),P===0?y+=x:P<m&&(y+=2*x)}for(let P=0;P<h.length;P++)h[P]=h[P]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-i;const b=this._sizeLods[r],w=3*b*(r>T-Qi?r-T+Qi:0),R=4*(this._cubeSize-b);Yr(n,w,R,3*b,2*b),l.setRenderTarget(n),l.render(f,Os)}}function lT(t){const e=[],n=[],i=[];let r=t;const s=t-Qi+1+Qh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Qi?l=Qh[a-t+Qi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,m=2,h=1,y=new Float32Array(v*_*p),T=new Float32Array(m*_*p),b=new Float32Array(h*_*p);for(let R=0;R<p;R++){const P=R%3*2/3-1,L=R>2?0:-1,x=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];y.set(x,v*_*R),T.set(d,m*_*R);const M=[R,R,R,R,R,R];b.set(M,h*_*R)}const w=new pt;w.setAttribute("position",new hn(y,v)),w.setAttribute("uv",new hn(T,m)),w.setAttribute("faceIndex",new hn(b,h)),i.push(new $t(w,null)),r>Qi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function tp(t,e,n){const i=new ai(t,e,n);return i.texture.mapping=ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function cT(t,e,n){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qo(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function uT(t,e,n){const i=new Float32Array(_r),r=new U(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qo(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function np(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function ip(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function qo(){return`

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
	`}function fT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sc||l===bc,u=l===Er||l===ds;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new ep(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new ep(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function dT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&la("WebGLRenderer: "+i+" extension not supported."),r}}}function hT(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let T=0,b=y.length;T<b;T+=3){const w=y[T+0],R=y[T+1],P=y[T+2];d.push(w,R,R,P,P,w)}}else if(_!==void 0){const y=_.array;v=_.version;for(let T=0,b=y.length/3-1;T<b;T+=3){const w=T+0,R=T+1,P=T+2;d.push(w,R,R,P,P,w)}}else return;const m=new(Pg(d)?Ug:Ng)(d,1);m.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function pT(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*a),n.update(p,i,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,d*a,_),n.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];n.update(m,i,1)}function f(d,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/a,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,_);let h=0;for(let y=0;y<_;y++)h+=p[y]*v[y];n.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function mT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ht("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function gT(t,e,n){const i=new WeakMap,r=new Nt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let M=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let w=o.attributes.position.count*b,R=1;w>e.maxTextureSize&&(R=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const P=new Float32Array(w*R*4*f),L=new Dg(P,w,R,f);L.type=ni,L.needsUpdate=!0;const x=b*4;for(let I=0;I<f;I++){const F=h[I],V=y[I],Z=T[I],K=w*R*4*I;for(let G=0;G<F.count;G++){const B=G*x;_===!0&&(r.fromBufferAttribute(F,G),P[K+B+0]=r.x,P[K+B+1]=r.y,P[K+B+2]=r.z,P[K+B+3]=0),v===!0&&(r.fromBufferAttribute(V,G),P[K+B+4]=r.x,P[K+B+5]=r.y,P[K+B+6]=r.z,P[K+B+7]=0),m===!0&&(r.fromBufferAttribute(Z,G),P[K+B+8]=r.x,P[K+B+9]=r.y,P[K+B+10]=r.z,P[K+B+11]=Z.itemSize===4?r.w:1)}}d={count:f,texture:L,size:new Je(w,R)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function _T(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const vT={[mg]:"LINEAR_TONE_MAPPING",[gg]:"REINHARD_TONE_MAPPING",[_g]:"CINEON_TONE_MAPPING",[of]:"ACES_FILMIC_TONE_MAPPING",[xg]:"AGX_TONE_MAPPING",[yg]:"NEUTRAL_TONE_MAPPING",[vg]:"CUSTOM_TONE_MAPPING"};function xT(t,e,n,i,r){const s=new ai(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new ai(e,n,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),o=new pt;o.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ot([0,2,0,0,2,0],2));const l=new tb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new $t(o,l),u=new Ef(-1,1,1,-1,0,1);let f=null,d=null,p=!1,_,v=null,m=[],h=!1;this.setSize=function(y,T){s.setSize(y,T),a.setSize(y,T);for(let b=0;b<m.length;b++){const w=m[b];w.setSize&&w.setSize(y,T)}},this.setEffects=function(y){m=y,h=m.length>0&&m[0].isRenderPass===!0;const T=s.width,b=s.height;for(let w=0;w<m.length;w++){const R=m[w];R.setSize&&R.setSize(T,b)}},this.begin=function(y,T){if(p||y.toneMapping===si&&m.length===0)return!1;if(v=T,T!==null){const b=T.width,w=T.height;(s.width!==b||s.height!==w)&&this.setSize(b,w)}return h===!1&&y.setRenderTarget(s),_=y.toneMapping,y.toneMapping=si,!0},this.hasRenderPass=function(){return h},this.end=function(y,T){y.toneMapping=_,p=!0;let b=s,w=a;for(let R=0;R<m.length;R++){const P=m[R];if(P.enabled!==!1&&(P.render(y,w,b,T),P.needsSwap!==!1)){const L=b;b=w,w=L}}if(f!==y.outputColorSpace||d!==y.toneMapping){f=y.outputColorSpace,d=y.toneMapping,l.defines={},ct.getTransfer(f)===St&&(l.defines.SRGB_TRANSFER="");const R=vT[d];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(v),y.render(c,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Yg=new dn,su=new ca(1,1),$g=new Dg,Jg=new IS,Kg=new kg,rp=[],sp=[],ap=new Float32Array(16),op=new Float32Array(9),lp=new Float32Array(4);function ws(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=rp[r];if(s===void 0&&(s=new Float32Array(r),rp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Yo(t,e){let n=sp[e];n===void 0&&(n=new Int32Array(e),sp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Wt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function ET(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;lp.set(i),t.uniformMatrix2fv(this.addr,!1,lp),Xt(n,i)}}function TT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;op.set(i),t.uniformMatrix3fv(this.addr,!1,op),Xt(n,i)}}function wT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;ap.set(i),t.uniformMatrix4fv(this.addr,!1,ap),Xt(n,i)}}function AT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function DT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function UT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(su.compareFunction=n.isReversedDepthBuffer()?mf:pf,s=su):s=Yg,n.setTexture2D(e||s,r)}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Jg,r)}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Kg,r)}function BT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$g,r)}function kT(t){switch(t){case 5126:return yT;case 35664:return ST;case 35665:return bT;case 35666:return MT;case 35674:return ET;case 35675:return TT;case 35676:return wT;case 5124:case 35670:return AT;case 35667:case 35671:return RT;case 35668:case 35672:return CT;case 35669:case 35673:return PT;case 5125:return DT;case 36294:return IT;case 36295:return LT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return BT}}function zT(t,e){t.uniform1fv(this.addr,e)}function VT(t,e){const n=ws(e,this.size,2);t.uniform2fv(this.addr,n)}function GT(t,e){const n=ws(e,this.size,3);t.uniform3fv(this.addr,n)}function HT(t,e){const n=ws(e,this.size,4);t.uniform4fv(this.addr,n)}function WT(t,e){const n=ws(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function XT(t,e){const n=ws(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function qT(t,e){const n=ws(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function YT(t,e){t.uniform1iv(this.addr,e)}function $T(t,e){t.uniform2iv(this.addr,e)}function JT(t,e){t.uniform3iv(this.addr,e)}function KT(t,e){t.uniform4iv(this.addr,e)}function ZT(t,e){t.uniform1uiv(this.addr,e)}function QT(t,e){t.uniform2uiv(this.addr,e)}function jT(t,e){t.uniform3uiv(this.addr,e)}function ew(t,e){t.uniform4uiv(this.addr,e)}function tw(t,e,n){const i=this.cache,r=e.length,s=Yo(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=su:a=Yg;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function nw(t,e,n){const i=this.cache,r=e.length,s=Yo(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Jg,s[a])}function iw(t,e,n){const i=this.cache,r=e.length,s=Yo(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Kg,s[a])}function rw(t,e,n){const i=this.cache,r=e.length,s=Yo(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||$g,s[a])}function sw(t){switch(t){case 5126:return zT;case 35664:return VT;case 35665:return GT;case 35666:return HT;case 35674:return WT;case 35675:return XT;case 35676:return qT;case 5124:case 35670:return YT;case 35667:case 35671:return $T;case 35668:case 35672:return JT;case 35669:case 35673:return KT;case 5125:return ZT;case 36294:return QT;case 36295:return jT;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return rw}}class aw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=kT(n.type)}}class ow{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sw(n.type)}}class lw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Yl=/(\w+)(\])?(\[|\.)?/g;function cp(t,e){t.seq.push(e),t.map[e.id]=e}function cw(t,e,n){const i=t.name,r=i.length;for(Yl.lastIndex=0;;){const s=Yl.exec(i),a=Yl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){cp(n,c===void 0?new aw(o,t,e):new ow(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new lw(o),cp(n,f)),n=f}}}class co{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);cw(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function up(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const uw=37297;let fw=0;function dw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const fp=new et;function hw(t){ct._getMatrix(fp,ct.workingColorSpace,t);const e=`mat3( ${fp.elements.map(n=>n.toFixed(4))} )`;switch(ct.getTransfer(t)){case yo:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function dp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+dw(t.getShaderSource(e),o)}else return s}function pw(t,e){const n=hw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const mw={[mg]:"Linear",[gg]:"Reinhard",[_g]:"Cineon",[of]:"ACESFilmic",[xg]:"AgX",[yg]:"Neutral",[vg]:"Custom"};function gw(t,e){const n=mw[e];return n===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Za=new U;function _w(){ct.getLuminanceCoefficients(Za);const t=Za.x.toFixed(4),e=Za.y.toFixed(4),n=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function xw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function yw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Gs(t){return t!==""}function hp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sw=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(t){return t.replace(Sw,Mw)}const bw=new Map;function Mw(t,e){let n=tt[e];if(n===void 0){const i=bw.get(e);if(i!==void 0)n=tt[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return au(n)}const Ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mp(t){return t.replace(Ew,Tw)}function Tw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const ww={[ro]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function Aw(t){return ww[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Rw={[Er]:"ENVMAP_TYPE_CUBE",[ds]:"ENVMAP_TYPE_CUBE",[ko]:"ENVMAP_TYPE_CUBE_UV"};function Cw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Rw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Pw={[ds]:"ENVMAP_MODE_REFRACTION"};function Dw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Pw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Iw={[pg]:"ENVMAP_BLENDING_MULTIPLY",[Qy]:"ENVMAP_BLENDING_MIX",[jy]:"ENVMAP_BLENDING_ADD"};function Lw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Iw[t.combine]||"ENVMAP_BLENDING_NONE"}function Nw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Uw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Aw(n),c=Cw(n),u=Dw(n),f=Lw(n),d=Nw(n),p=vw(n),_=xw(s),v=r.createProgram();let m,h,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Gs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Gs).join(`
`),h.length>0&&(h+=`
`)):(m=[gp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),h=[gp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==si?"#define TONE_MAPPING":"",n.toneMapping!==si?tt.tonemapping_pars_fragment:"",n.toneMapping!==si?gw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,pw("linearToOutputTexel",n.outputColorSpace),_w(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Gs).join(`
`)),a=au(a),a=hp(a,n),a=pp(a,n),o=au(o),o=hp(o,n),o=pp(o,n),a=mp(a),o=mp(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=y+m+a,b=y+h+o,w=up(r,r.VERTEX_SHADER,T),R=up(r,r.FRAGMENT_SHADER,b);r.attachShader(v,w),r.attachShader(v,R),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(I){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(v)||"",V=r.getShaderInfoLog(w)||"",Z=r.getShaderInfoLog(R)||"",K=F.trim(),G=V.trim(),B=Z.trim();let k=!0,pe=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,w,R);else{const me=dp(r,w,"vertex"),ve=dp(r,R,"fragment");ht("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+K+`
`+me+`
`+ve)}else K!==""?qe("WebGLProgram: Program Info Log:",K):(G===""||B==="")&&(pe=!1);pe&&(I.diagnostics={runnable:k,programLog:K,vertexShader:{log:G,prefix:m},fragmentShader:{log:B,prefix:h}})}r.deleteShader(w),r.deleteShader(R),L=new co(r,v),x=yw(r,v)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let x;this.getAttributes=function(){return x===void 0&&P(this),x};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,uw)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=R,this}let Ow=0;class Fw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Bw(e),n.set(e,i)),i}}class Bw{constructor(e){this.id=Ow++,this.code=e,this.usedTimes=0}}function kw(t,e,n,i,r,s,a){const o=new Ig,l=new Fw,c=new Set,u=[],f=new Map,d=r.logarithmicDepthBuffer;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,M,I,F,V){const Z=F.fog,K=V.geometry,G=x.isMeshStandardMaterial?F.environment:null,B=(x.isMeshStandardMaterial?n:e).get(x.envMap||G),k=B&&B.mapping===ko?B.image.height:null,pe=_[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&qe("WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ve=me!==void 0?me.length:0;let ze=0;K.morphAttributes.position!==void 0&&(ze=1),K.morphAttributes.normal!==void 0&&(ze=2),K.morphAttributes.color!==void 0&&(ze=3);let Oe,nt,ut,te;if(pe){const xt=ei[pe];Oe=xt.vertexShader,nt=xt.fragmentShader}else Oe=x.vertexShader,nt=x.fragmentShader,l.update(x),ut=l.getVertexShaderID(x),te=l.getFragmentShaderID(x);const ne=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),We=V.isInstancedMesh===!0,Ae=V.isBatchedMesh===!0,at=!!x.map,C=!!x.matcap,N=!!B,X=!!x.aoMap,ee=!!x.lightMap,$=!!x.bumpMap,ie=!!x.normalMap,A=!!x.displacementMap,le=!!x.emissiveMap,se=!!x.metalnessMap,j=!!x.roughnessMap,ae=x.anisotropy>0,S=x.clearcoat>0,g=x.dispersion>0,D=x.iridescence>0,q=x.sheen>0,Q=x.transmission>0,W=ae&&!!x.anisotropyMap,Ee=S&&!!x.clearcoatMap,ue=S&&!!x.clearcoatNormalMap,Re=S&&!!x.clearcoatRoughnessMap,Fe=D&&!!x.iridescenceMap,ce=D&&!!x.iridescenceThicknessMap,_e=q&&!!x.sheenColorMap,Se=q&&!!x.sheenRoughnessMap,Pe=!!x.specularMap,ge=!!x.specularColorMap,Qe=!!x.specularIntensityMap,O=Q&&!!x.transmissionMap,we=Q&&!!x.thicknessMap,de=!!x.gradientMap,De=!!x.alphaMap,fe=x.alphaTest>0,oe=!!x.alphaHash,xe=!!x.extensions;let $e=si;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&($e=t.toneMapping);const wt={shaderID:pe,shaderType:x.type,shaderName:x.name,vertexShader:Oe,fragmentShader:nt,defines:x.defines,customVertexShaderID:ut,customFragmentShaderID:te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Ae,batchingColor:Ae&&V._colorsTexture!==null,instancing:We,instancingColor:We&&V.instanceColor!==null,instancingMorph:We&&V.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ps,alphaToCoverage:!!x.alphaToCoverage,map:at,matcap:C,envMap:N,envMapMode:N&&B.mapping,envMapCubeUVHeight:k,aoMap:X,lightMap:ee,bumpMap:$,normalMap:ie,displacementMap:A,emissiveMap:le,normalMapObjectSpace:ie&&x.normalMapType===nS,normalMapTangentSpace:ie&&x.normalMapType===Cg,metalnessMap:se,roughnessMap:j,anisotropy:ae,anisotropyMap:W,clearcoat:S,clearcoatMap:Ee,clearcoatNormalMap:ue,clearcoatRoughnessMap:Re,dispersion:g,iridescence:D,iridescenceMap:Fe,iridescenceThicknessMap:ce,sheen:q,sheenColorMap:_e,sheenRoughnessMap:Se,specularMap:Pe,specularColorMap:ge,specularIntensityMap:Qe,transmission:Q,transmissionMap:O,thicknessMap:we,gradientMap:de,opaque:x.transparent===!1&&x.blending===as&&x.alphaToCoverage===!1,alphaMap:De,alphaTest:fe,alphaHash:oe,combine:x.combine,mapUv:at&&v(x.map.channel),aoMapUv:X&&v(x.aoMap.channel),lightMapUv:ee&&v(x.lightMap.channel),bumpMapUv:$&&v(x.bumpMap.channel),normalMapUv:ie&&v(x.normalMap.channel),displacementMapUv:A&&v(x.displacementMap.channel),emissiveMapUv:le&&v(x.emissiveMap.channel),metalnessMapUv:se&&v(x.metalnessMap.channel),roughnessMapUv:j&&v(x.roughnessMap.channel),anisotropyMapUv:W&&v(x.anisotropyMap.channel),clearcoatMapUv:Ee&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(x.sheenRoughnessMap.channel),specularMapUv:Pe&&v(x.specularMap.channel),specularColorMapUv:ge&&v(x.specularColorMap.channel),specularIntensityMapUv:Qe&&v(x.specularIntensityMap.channel),transmissionMapUv:O&&v(x.transmissionMap.channel),thicknessMapUv:we&&v(x.thicknessMap.channel),alphaMapUv:De&&v(x.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ie||ae),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!K.attributes.uv&&(at||De),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ce,skinning:V.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:$e,decodeVideoTexture:at&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===St,decodeVideoTextureEmissive:le&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wn,flipSided:x.side===rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function h(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)M.push(I),M.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(y(M,x),T(M,x),M.push(t.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function y(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function T(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function b(x){const M=_[x.type];let I;if(M){const F=ei[M];I=Fg.clone(F.uniforms)}else I=x.uniforms;return I}function w(x,M){let I=f.get(M);return I!==void 0?++I.usedTimes:(I=new Uw(t,M,x,s),u.push(I),f.set(M,I)),I}function R(x){if(--x.usedTimes===0){const M=u.indexOf(x);u[M]=u[u.length-1],u.pop(),f.delete(x.cacheKey),x.destroy()}}function P(x){l.remove(x)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:b,acquireProgram:w,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:L}}function zw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Vw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function _p(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function vp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,d,p,_,v,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function o(f,d,p,_,v,m){const h=a(f,d,p,_,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,_,v,m){const h=a(f,d,p,_,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||Vw),i.length>1&&i.sort(d||_p),r.length>1&&r.sort(d||_p)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Gw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new vp,t.set(i,[a])):r>=s.length?(a=new vp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Hw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Ze};break;case"SpotLight":n={position:new U,direction:new U,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function Ww(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Xw=0;function qw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Yw(t){const e=new Hw,n=Ww(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new _t,a=new _t;function o(c){let u=0,f=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,_=0,v=0,m=0,h=0,y=0,T=0,b=0,w=0,R=0,P=0;c.sort(qw);for(let x=0,M=c.length;x<M;x++){const I=c[x],F=I.color,V=I.intensity,Z=I.distance;let K=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===hs?K=I.shadow.map.texture:K=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=F.r*V,f+=F.g*V,d+=F.b*V;else if(I.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(I.sh.coefficients[G],V);P++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const B=I.shadow,k=n.get(I);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=I.shadow.matrix,y++}i.directional[p]=G,p++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(F).multiplyScalar(V),G.distance=Z,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,i.spot[v]=G;const B=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,B.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[v]=B.matrix,I.castShadow){const k=n.get(I);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=K,b++}v++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(F).multiplyScalar(V),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=G,m++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const B=I.shadow,k=n.get(I);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,k.shadowCameraNear=B.camera.near,k.shadowCameraFar=B.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=I.shadow.matrix,T++}i.point[_]=G,_++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(V),G.groundColor.copy(I.groundColor).multiplyScalar(V),i.hemi[h]=G,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==h||L.numDirectionalShadows!==y||L.numPointShadows!==T||L.numSpotShadows!==b||L.numSpotMaps!==w||L.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,L.directionalLength=p,L.pointLength=_,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=h,L.numDirectionalShadows=y,L.numPointShadows=T,L.numSpotShadows=b,L.numSpotMaps=w,L.numLightProbes=P,i.version=Xw++)}function l(c,u){let f=0,d=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let h=0,y=c.length;h<y;h++){const T=c[h];if(T.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(T.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function xp(t){const e=new Yw(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function $w(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new xp(t),e.set(r,[o])):s>=a.length?(o=new xp(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Jw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kw=`uniform sampler2D shadow_pass;
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
}`,Zw=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Qw=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],yp=new _t,Fs=new U,$l=new U;function jw(t,e,n){let i=new vf;const r=new Je,s=new Je,a=new Nt,o=new nb,l=new ib,c={},u=n.maxTextureSize,f={[tr]:rn,[rn]:tr,[wn]:wn},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Jw,fragmentShader:Kw}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new pt;_.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $t(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ro;let h=this.type;this.render=function(R,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;R.type===hg&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=ro);const x=t.getRenderTarget(),M=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Ai),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=h!==this.type;V&&P.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(K=>K.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,K=R.length;Z<K;Z++){const G=R[Z],B=G.shadow;if(B===void 0){qe("WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const k=B.getFrameExtents();if(r.multiply(k),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,B.mapSize.y=s.y)),B.map===null||V===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Vs){if(G.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ai(r.x,r.y,{format:hs,type:Ii,minFilter:tn,magFilter:tn,generateMipmaps:!1}),B.map.texture.name=G.name+".shadowMap",B.map.depthTexture=new ca(r.x,r.y,ni),B.map.depthTexture.name=G.name+".shadowMapDepth",B.map.depthTexture.format=Li,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Jt,B.map.depthTexture.magFilter=Jt}else{G.isPointLight?(B.map=new zg(r.x),B.map.depthTexture=new eb(r.x,ui)):(B.map=new ai(r.x,r.y),B.map.depthTexture=new ca(r.x,r.y,ui)),B.map.depthTexture.name=G.name+".shadowMap",B.map.depthTexture.format=Li;const me=t.state.buffers.depth.getReversed();this.type===ro?(B.map.depthTexture.compareFunction=me?mf:pf,B.map.depthTexture.minFilter=tn,B.map.depthTexture.magFilter=tn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Jt,B.map.depthTexture.magFilter=Jt)}B.camera.updateProjectionMatrix()}const pe=B.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<pe;me++){if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,me),t.clear();else{me===0&&(t.setRenderTarget(B.map),t.clear());const ve=B.getViewport(me);a.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),F.viewport(a)}if(G.isPointLight){const ve=B.camera,ze=B.matrix,Oe=G.distance||ve.far;Oe!==ve.far&&(ve.far=Oe,ve.updateProjectionMatrix()),Fs.setFromMatrixPosition(G.matrixWorld),ve.position.copy(Fs),$l.copy(ve.position),$l.add(Zw[me]),ve.up.copy(Qw[me]),ve.lookAt($l),ve.updateMatrixWorld(),ze.makeTranslation(-Fs.x,-Fs.y,-Fs.z),yp.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),B._frustum.setFromProjectionMatrix(yp,ve.coordinateSystem,ve.reversedDepth)}else B.updateMatrices(G);i=B.getFrustum(),b(P,L,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===Vs&&y(B,L),B.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(x,M,I)};function y(R,P){const L=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ai(r.x,r.y,{format:hs,type:Ii})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(P,null,L,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(P,null,L,p,v,null)}function T(R,P,L,x){let M=null;const I=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)M=I;else if(M=L.isPointLight===!0?l:o,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=M.uuid,V=P.uuid;let Z=c[F];Z===void 0&&(Z={},c[F]=Z);let K=Z[V];K===void 0&&(K=M.clone(),Z[V]=K,P.addEventListener("dispose",w)),M=K}if(M.visible=P.visible,M.wireframe=P.wireframe,x===Vs?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:f[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=t.properties.get(M);F.light=L}return M}function b(R,P,L,x,M){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Vs)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const V=e.update(R),Z=R.material;if(Array.isArray(Z)){const K=V.groups;for(let G=0,B=K.length;G<B;G++){const k=K[G],pe=Z[k.materialIndex];if(pe&&pe.visible){const me=T(R,pe,x,M);R.onBeforeShadow(t,R,P,L,V,me,k),t.renderBufferDirect(L,null,V,me,R,k),R.onAfterShadow(t,R,P,L,V,me,k)}}}else if(Z.visible){const K=T(R,Z,x,M);R.onBeforeShadow(t,R,P,L,V,K,null),t.renderBufferDirect(L,null,V,K,R,null),R.onAfterShadow(t,R,P,L,V,K,null)}}const F=R.children;for(let V=0,Z=F.length;V<Z;V++)b(F[V],P,L,x,M)}function w(R){R.target.removeEventListener("dispose",w);for(const L in c){const x=c[L],M=R.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const eA={[pc]:mc,[gc]:xc,[_c]:yc,[fs]:vc,[mc]:pc,[xc]:gc,[yc]:_c,[vc]:fs};function tA(t,e){function n(){let O=!1;const we=new Nt;let de=null;const De=new Nt(0,0,0,0);return{setMask:function(fe){de!==fe&&!O&&(t.colorMask(fe,fe,fe,fe),de=fe)},setLocked:function(fe){O=fe},setClear:function(fe,oe,xe,$e,wt){wt===!0&&(fe*=$e,oe*=$e,xe*=$e),we.set(fe,oe,xe,$e),De.equals(we)===!1&&(t.clearColor(fe,oe,xe,$e),De.copy(we))},reset:function(){O=!1,de=null,De.set(-1,0,0,0)}}}function i(){let O=!1,we=!1,de=null,De=null,fe=null;return{setReversed:function(oe){if(we!==oe){const xe=e.get("EXT_clip_control");oe?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),we=oe;const $e=fe;fe=null,this.setClear($e)}},getReversed:function(){return we},setTest:function(oe){oe?ne(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(oe){de!==oe&&!O&&(t.depthMask(oe),de=oe)},setFunc:function(oe){if(we&&(oe=eA[oe]),De!==oe){switch(oe){case pc:t.depthFunc(t.NEVER);break;case mc:t.depthFunc(t.ALWAYS);break;case gc:t.depthFunc(t.LESS);break;case fs:t.depthFunc(t.LEQUAL);break;case _c:t.depthFunc(t.EQUAL);break;case vc:t.depthFunc(t.GEQUAL);break;case xc:t.depthFunc(t.GREATER);break;case yc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}De=oe}},setLocked:function(oe){O=oe},setClear:function(oe){fe!==oe&&(we&&(oe=1-oe),t.clearDepth(oe),fe=oe)},reset:function(){O=!1,de=null,De=null,fe=null,we=!1}}}function r(){let O=!1,we=null,de=null,De=null,fe=null,oe=null,xe=null,$e=null,wt=null;return{setTest:function(xt){O||(xt?ne(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(xt){we!==xt&&!O&&(t.stencilMask(xt),we=xt)},setFunc:function(xt,Yn,hi){(de!==xt||De!==Yn||fe!==hi)&&(t.stencilFunc(xt,Yn,hi),de=xt,De=Yn,fe=hi)},setOp:function(xt,Yn,hi){(oe!==xt||xe!==Yn||$e!==hi)&&(t.stencilOp(xt,Yn,hi),oe=xt,xe=Yn,$e=hi)},setLocked:function(xt){O=xt},setClear:function(xt){wt!==xt&&(t.clearStencil(xt),wt=xt)},reset:function(){O=!1,we=null,de=null,De=null,fe=null,oe=null,xe=null,$e=null,wt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],_=null,v=!1,m=null,h=null,y=null,T=null,b=null,w=null,R=null,P=new Ze(0,0,0),L=0,x=!1,M=null,I=null,F=null,V=null,Z=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,B=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=B>=1):k.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=B>=2);let pe=null,me={};const ve=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),Oe=new Nt().fromArray(ve),nt=new Nt().fromArray(ze);function ut(O,we,de,De){const fe=new Uint8Array(4),oe=t.createTexture();t.bindTexture(O,oe),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let xe=0;xe<de;xe++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(we,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(we+xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return oe}const te={};te[t.TEXTURE_2D]=ut(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=ut(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=ut(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=ut(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(t.DEPTH_TEST),a.setFunc(fs),$(!1),ie(dh),ne(t.CULL_FACE),X(Ai);function ne(O){u[O]!==!0&&(t.enable(O),u[O]=!0)}function Ce(O){u[O]!==!1&&(t.disable(O),u[O]=!1)}function We(O,we){return f[O]!==we?(t.bindFramebuffer(O,we),f[O]=we,O===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=we),O===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=we),!0):!1}function Ae(O,we){let de=p,De=!1;if(O){de=d.get(we),de===void 0&&(de=[],d.set(we,de));const fe=O.textures;if(de.length!==fe.length||de[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,xe=fe.length;oe<xe;oe++)de[oe]=t.COLOR_ATTACHMENT0+oe;de.length=fe.length,De=!0}}else de[0]!==t.BACK&&(de[0]=t.BACK,De=!0);De&&t.drawBuffers(de)}function at(O){return _!==O?(t.useProgram(O),_=O,!0):!1}const C={[gr]:t.FUNC_ADD,[Uy]:t.FUNC_SUBTRACT,[Oy]:t.FUNC_REVERSE_SUBTRACT};C[Fy]=t.MIN,C[By]=t.MAX;const N={[ky]:t.ZERO,[zy]:t.ONE,[Vy]:t.SRC_COLOR,[dc]:t.SRC_ALPHA,[Yy]:t.SRC_ALPHA_SATURATE,[Xy]:t.DST_COLOR,[Hy]:t.DST_ALPHA,[Gy]:t.ONE_MINUS_SRC_COLOR,[hc]:t.ONE_MINUS_SRC_ALPHA,[qy]:t.ONE_MINUS_DST_COLOR,[Wy]:t.ONE_MINUS_DST_ALPHA,[$y]:t.CONSTANT_COLOR,[Jy]:t.ONE_MINUS_CONSTANT_COLOR,[Ky]:t.CONSTANT_ALPHA,[Zy]:t.ONE_MINUS_CONSTANT_ALPHA};function X(O,we,de,De,fe,oe,xe,$e,wt,xt){if(O===Ai){v===!0&&(Ce(t.BLEND),v=!1);return}if(v===!1&&(ne(t.BLEND),v=!0),O!==Ny){if(O!==m||xt!==x){if((h!==gr||b!==gr)&&(t.blendEquation(t.FUNC_ADD),h=gr,b=gr),xt)switch(O){case as:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hh:t.blendFunc(t.ONE,t.ONE);break;case ph:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ht("WebGLState: Invalid blending: ",O);break}else switch(O){case as:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ph:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mh:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",O);break}y=null,T=null,w=null,R=null,P.set(0,0,0),L=0,m=O,x=xt}return}fe=fe||we,oe=oe||de,xe=xe||De,(we!==h||fe!==b)&&(t.blendEquationSeparate(C[we],C[fe]),h=we,b=fe),(de!==y||De!==T||oe!==w||xe!==R)&&(t.blendFuncSeparate(N[de],N[De],N[oe],N[xe]),y=de,T=De,w=oe,R=xe),($e.equals(P)===!1||wt!==L)&&(t.blendColor($e.r,$e.g,$e.b,wt),P.copy($e),L=wt),m=O,x=!1}function ee(O,we){O.side===wn?Ce(t.CULL_FACE):ne(t.CULL_FACE);let de=O.side===rn;we&&(de=!de),$(de),O.blending===as&&O.transparent===!1?X(Ai):X(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const De=O.stencilWrite;o.setTest(De),De&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),le(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function $(O){M!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),M=O)}function ie(O){O!==Iy?(ne(t.CULL_FACE),O!==I&&(O===dh?t.cullFace(t.BACK):O===Ly?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),I=O}function A(O){O!==F&&(G&&t.lineWidth(O),F=O)}function le(O,we,de){O?(ne(t.POLYGON_OFFSET_FILL),(V!==we||Z!==de)&&(t.polygonOffset(we,de),V=we,Z=de)):Ce(t.POLYGON_OFFSET_FILL)}function se(O){O?ne(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function j(O){O===void 0&&(O=t.TEXTURE0+K-1),pe!==O&&(t.activeTexture(O),pe=O)}function ae(O,we,de){de===void 0&&(pe===null?de=t.TEXTURE0+K-1:de=pe);let De=me[de];De===void 0&&(De={type:void 0,texture:void 0},me[de]=De),(De.type!==O||De.texture!==we)&&(pe!==de&&(t.activeTexture(de),pe=de),t.bindTexture(O,we||te[O]),De.type=O,De.texture=we)}function S(){const O=me[pe];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(O){ht("WebGLState:",O)}}function D(){try{t.compressedTexImage3D(...arguments)}catch(O){ht("WebGLState:",O)}}function q(){try{t.texSubImage2D(...arguments)}catch(O){ht("WebGLState:",O)}}function Q(){try{t.texSubImage3D(...arguments)}catch(O){ht("WebGLState:",O)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(O){ht("WebGLState:",O)}}function Ee(){try{t.compressedTexSubImage3D(...arguments)}catch(O){ht("WebGLState:",O)}}function ue(){try{t.texStorage2D(...arguments)}catch(O){ht("WebGLState:",O)}}function Re(){try{t.texStorage3D(...arguments)}catch(O){ht("WebGLState:",O)}}function Fe(){try{t.texImage2D(...arguments)}catch(O){ht("WebGLState:",O)}}function ce(){try{t.texImage3D(...arguments)}catch(O){ht("WebGLState:",O)}}function _e(O){Oe.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Oe.copy(O))}function Se(O){nt.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),nt.copy(O))}function Pe(O,we){let de=c.get(we);de===void 0&&(de=new WeakMap,c.set(we,de));let De=de.get(O);De===void 0&&(De=t.getUniformBlockIndex(we,O.name),de.set(O,De))}function ge(O,we){const De=c.get(we).get(O);l.get(we)!==De&&(t.uniformBlockBinding(we,De,O.__bindingPointIndex),l.set(we,De))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},pe=null,me={},f={},d=new WeakMap,p=[],_=null,v=!1,m=null,h=null,y=null,T=null,b=null,w=null,R=null,P=new Ze(0,0,0),L=0,x=!1,M=null,I=null,F=null,V=null,Z=null,Oe.set(0,0,t.canvas.width,t.canvas.height),nt.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:Ce,bindFramebuffer:We,drawBuffers:Ae,useProgram:at,setBlending:X,setMaterial:ee,setFlipSided:$,setCullFace:ie,setLineWidth:A,setPolygonOffset:le,setScissorTest:se,activeTexture:j,bindTexture:ae,unbindTexture:S,compressedTexImage2D:g,compressedTexImage3D:D,texImage2D:Fe,texImage3D:ce,updateUBOMapping:Pe,uniformBlockBinding:ge,texStorage2D:ue,texStorage3D:Re,texSubImage2D:q,texSubImage3D:Q,compressedTexSubImage2D:W,compressedTexSubImage3D:Ee,scissor:_e,viewport:Se,reset:Qe}}function nA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,g){return p?new OffscreenCanvas(S,g):bo("canvas")}function v(S,g,D){let q=1;const Q=ae(S);if((Q.width>D||Q.height>D)&&(q=D/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const W=Math.floor(q*Q.width),Ee=Math.floor(q*Q.height);f===void 0&&(f=_(W,Ee));const ue=g?_(W,Ee):f;return ue.width=W,ue.height=Ee,ue.getContext("2d").drawImage(S,0,0,W,Ee),qe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+W+"x"+Ee+")."),ue}else return"data"in S&&qe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),S;return S}function m(S){return S.generateMipmaps}function h(S){t.generateMipmap(S)}function y(S){return S.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?t.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(S,g,D,q,Q=!1){if(S!==null){if(t[S]!==void 0)return t[S];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let W=g;if(g===t.RED&&(D===t.FLOAT&&(W=t.R32F),D===t.HALF_FLOAT&&(W=t.R16F),D===t.UNSIGNED_BYTE&&(W=t.R8)),g===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(W=t.R8UI),D===t.UNSIGNED_SHORT&&(W=t.R16UI),D===t.UNSIGNED_INT&&(W=t.R32UI),D===t.BYTE&&(W=t.R8I),D===t.SHORT&&(W=t.R16I),D===t.INT&&(W=t.R32I)),g===t.RG&&(D===t.FLOAT&&(W=t.RG32F),D===t.HALF_FLOAT&&(W=t.RG16F),D===t.UNSIGNED_BYTE&&(W=t.RG8)),g===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(W=t.RG8UI),D===t.UNSIGNED_SHORT&&(W=t.RG16UI),D===t.UNSIGNED_INT&&(W=t.RG32UI),D===t.BYTE&&(W=t.RG8I),D===t.SHORT&&(W=t.RG16I),D===t.INT&&(W=t.RG32I)),g===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(W=t.RGB8UI),D===t.UNSIGNED_SHORT&&(W=t.RGB16UI),D===t.UNSIGNED_INT&&(W=t.RGB32UI),D===t.BYTE&&(W=t.RGB8I),D===t.SHORT&&(W=t.RGB16I),D===t.INT&&(W=t.RGB32I)),g===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),D===t.UNSIGNED_INT&&(W=t.RGBA32UI),D===t.BYTE&&(W=t.RGBA8I),D===t.SHORT&&(W=t.RGBA16I),D===t.INT&&(W=t.RGBA32I)),g===t.RGB&&(D===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),D===t.UNSIGNED_INT_10F_11F_11F_REV&&(W=t.R11F_G11F_B10F)),g===t.RGBA){const Ee=Q?yo:ct.getTransfer(q);D===t.FLOAT&&(W=t.RGBA32F),D===t.HALF_FLOAT&&(W=t.RGBA16F),D===t.UNSIGNED_BYTE&&(W=Ee===St?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function b(S,g){let D;return S?g===null||g===ui||g===oa?D=t.DEPTH24_STENCIL8:g===ni?D=t.DEPTH32F_STENCIL8:g===aa&&(D=t.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ui||g===oa?D=t.DEPTH_COMPONENT24:g===ni?D=t.DEPTH_COMPONENT32F:g===aa&&(D=t.DEPTH_COMPONENT16),D}function w(S,g){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Jt&&S.minFilter!==tn?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function R(S){const g=S.target;g.removeEventListener("dispose",R),L(g),g.isVideoTexture&&u.delete(g)}function P(S){const g=S.target;g.removeEventListener("dispose",P),M(g)}function L(S){const g=i.get(S);if(g.__webglInit===void 0)return;const D=S.source,q=d.get(D);if(q){const Q=q[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&x(S),Object.keys(q).length===0&&d.delete(D)}i.remove(S)}function x(S){const g=i.get(S);t.deleteTexture(g.__webglTexture);const D=S.source,q=d.get(D);delete q[g.__cacheKey],a.memory.textures--}function M(S){const g=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let Q=0;Q<g.__webglFramebuffer[q].length;Q++)t.deleteFramebuffer(g.__webglFramebuffer[q][Q]);else t.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)t.deleteFramebuffer(g.__webglFramebuffer[q]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const D=S.textures;for(let q=0,Q=D.length;q<Q;q++){const W=i.get(D[q]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(D[q])}i.remove(S)}let I=0;function F(){I=0}function V(){const S=I;return S>=r.maxTextures&&qe("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),I+=1,S}function Z(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function K(S,g){const D=i.get(S);if(S.isVideoTexture&&se(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&D.__version!==S.version){const q=S.image;if(q===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{te(D,S,g);return}}else S.isExternalTexture&&(D.__webglTexture=S.sourceTexture?S.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+g)}function G(S,g){const D=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){te(D,S,g);return}else S.isExternalTexture&&(D.__webglTexture=S.sourceTexture?S.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+g)}function B(S,g){const D=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){te(D,S,g);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+g)}function k(S,g){const D=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&D.__version!==S.version){ne(D,S,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+g)}const pe={[Mc]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[Ec]:t.MIRRORED_REPEAT},me={[Jt]:t.NEAREST,[eS]:t.NEAREST_MIPMAP_NEAREST,[Ta]:t.NEAREST_MIPMAP_LINEAR,[tn]:t.LINEAR,[_l]:t.LINEAR_MIPMAP_NEAREST,[vr]:t.LINEAR_MIPMAP_LINEAR},ve={[iS]:t.NEVER,[lS]:t.ALWAYS,[rS]:t.LESS,[pf]:t.LEQUAL,[sS]:t.EQUAL,[mf]:t.GEQUAL,[aS]:t.GREATER,[oS]:t.NOTEQUAL};function ze(S,g){if(g.type===ni&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===tn||g.magFilter===_l||g.magFilter===Ta||g.magFilter===vr||g.minFilter===tn||g.minFilter===_l||g.minFilter===Ta||g.minFilter===vr)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(S,t.TEXTURE_WRAP_S,pe[g.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,pe[g.wrapT]),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,pe[g.wrapR]),t.texParameteri(S,t.TEXTURE_MAG_FILTER,me[g.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,me[g.minFilter]),g.compareFunction&&(t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,ve[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Jt||g.minFilter!==Ta&&g.minFilter!==vr||g.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(S,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Oe(S,g){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",R));const q=g.source;let Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));const W=Z(g);if(W!==S.__cacheKey){Q[W]===void 0&&(Q[W]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,D=!0),Q[W].usedTimes++;const Ee=Q[S.__cacheKey];Ee!==void 0&&(Q[S.__cacheKey].usedTimes--,Ee.usedTimes===0&&x(g)),S.__cacheKey=W,S.__webglTexture=Q[W].texture}return D}function nt(S,g,D){return Math.floor(Math.floor(S/D)/g)}function ut(S,g,D,q){const W=S.updateRanges;if(W.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,D,q,g.data);else{W.sort((ce,_e)=>ce.start-_e.start);let Ee=0;for(let ce=1;ce<W.length;ce++){const _e=W[Ee],Se=W[ce],Pe=_e.start+_e.count,ge=nt(Se.start,g.width,4),Qe=nt(_e.start,g.width,4);Se.start<=Pe+1&&ge===Qe&&nt(Se.start+Se.count-1,g.width,4)===ge?_e.count=Math.max(_e.count,Se.start+Se.count-_e.start):(++Ee,W[Ee]=Se)}W.length=Ee+1;const ue=t.getParameter(t.UNPACK_ROW_LENGTH),Re=t.getParameter(t.UNPACK_SKIP_PIXELS),Fe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let ce=0,_e=W.length;ce<_e;ce++){const Se=W[ce],Pe=Math.floor(Se.start/4),ge=Math.ceil(Se.count/4),Qe=Pe%g.width,O=Math.floor(Pe/g.width),we=ge,de=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,Qe,O,we,de,D,q,g.data)}S.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ue),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(t.UNPACK_SKIP_ROWS,Fe)}}function te(S,g,D){let q=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=t.TEXTURE_3D);const Q=Oe(S,g),W=g.source;n.bindTexture(q,S.__webglTexture,t.TEXTURE0+D);const Ee=i.get(W);if(W.version!==Ee.__version||Q===!0){n.activeTexture(t.TEXTURE0+D);const ue=ct.getPrimaries(ct.workingColorSpace),Re=g.colorSpace===Ji?null:ct.getPrimaries(g.colorSpace),Fe=g.colorSpace===Ji||ue===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ce=v(g.image,!1,r.maxTextureSize);ce=j(g,ce);const _e=s.convert(g.format,g.colorSpace),Se=s.convert(g.type);let Pe=T(g.internalFormat,_e,Se,g.colorSpace,g.isVideoTexture);ze(q,g);let ge;const Qe=g.mipmaps,O=g.isVideoTexture!==!0,we=Ee.__version===void 0||Q===!0,de=W.dataReady,De=w(g,ce);if(g.isDepthTexture)Pe=b(g.format===xr,g.type),we&&(O?n.texStorage2D(t.TEXTURE_2D,1,Pe,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,Pe,ce.width,ce.height,0,_e,Se,null));else if(g.isDataTexture)if(Qe.length>0){O&&we&&n.texStorage2D(t.TEXTURE_2D,De,Pe,Qe[0].width,Qe[0].height);for(let fe=0,oe=Qe.length;fe<oe;fe++)ge=Qe[fe],O?de&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,ge.width,ge.height,_e,Se,ge.data):n.texImage2D(t.TEXTURE_2D,fe,Pe,ge.width,ge.height,0,_e,Se,ge.data);g.generateMipmaps=!1}else O?(we&&n.texStorage2D(t.TEXTURE_2D,De,Pe,ce.width,ce.height),de&&ut(g,ce,_e,Se)):n.texImage2D(t.TEXTURE_2D,0,Pe,ce.width,ce.height,0,_e,Se,ce.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){O&&we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Pe,Qe[0].width,Qe[0].height,ce.depth);for(let fe=0,oe=Qe.length;fe<oe;fe++)if(ge=Qe[fe],g.format!==zn)if(_e!==null)if(O){if(de)if(g.layerUpdates.size>0){const xe=Zh(ge.width,ge.height,g.format,g.type);for(const $e of g.layerUpdates){const wt=ge.data.subarray($e*xe/ge.data.BYTES_PER_ELEMENT,($e+1)*xe/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,$e,ge.width,ge.height,1,_e,wt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,ge.width,ge.height,ce.depth,_e,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,fe,Pe,ge.width,ge.height,ce.depth,0,ge.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?de&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,ge.width,ge.height,ce.depth,_e,Se,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,fe,Pe,ge.width,ge.height,ce.depth,0,_e,Se,ge.data)}else{O&&we&&n.texStorage2D(t.TEXTURE_2D,De,Pe,Qe[0].width,Qe[0].height);for(let fe=0,oe=Qe.length;fe<oe;fe++)ge=Qe[fe],g.format!==zn?_e!==null?O?de&&n.compressedTexSubImage2D(t.TEXTURE_2D,fe,0,0,ge.width,ge.height,_e,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,fe,Pe,ge.width,ge.height,0,ge.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?de&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,ge.width,ge.height,_e,Se,ge.data):n.texImage2D(t.TEXTURE_2D,fe,Pe,ge.width,ge.height,0,_e,Se,ge.data)}else if(g.isDataArrayTexture)if(O){if(we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Pe,ce.width,ce.height,ce.depth),de)if(g.layerUpdates.size>0){const fe=Zh(ce.width,ce.height,g.format,g.type);for(const oe of g.layerUpdates){const xe=ce.data.subarray(oe*fe/ce.data.BYTES_PER_ELEMENT,(oe+1)*fe/ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,ce.width,ce.height,1,_e,Se,xe)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,_e,Se,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,ce.width,ce.height,ce.depth,0,_e,Se,ce.data);else if(g.isData3DTexture)O?(we&&n.texStorage3D(t.TEXTURE_3D,De,Pe,ce.width,ce.height,ce.depth),de&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,_e,Se,ce.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,ce.width,ce.height,ce.depth,0,_e,Se,ce.data);else if(g.isFramebufferTexture){if(we)if(O)n.texStorage2D(t.TEXTURE_2D,De,Pe,ce.width,ce.height);else{let fe=ce.width,oe=ce.height;for(let xe=0;xe<De;xe++)n.texImage2D(t.TEXTURE_2D,xe,Pe,fe,oe,0,_e,Se,null),fe>>=1,oe>>=1}}else if(Qe.length>0){if(O&&we){const fe=ae(Qe[0]);n.texStorage2D(t.TEXTURE_2D,De,Pe,fe.width,fe.height)}for(let fe=0,oe=Qe.length;fe<oe;fe++)ge=Qe[fe],O?de&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,_e,Se,ge):n.texImage2D(t.TEXTURE_2D,fe,Pe,_e,Se,ge);g.generateMipmaps=!1}else if(O){if(we){const fe=ae(ce);n.texStorage2D(t.TEXTURE_2D,De,Pe,fe.width,fe.height)}de&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Se,ce)}else n.texImage2D(t.TEXTURE_2D,0,Pe,_e,Se,ce);m(g)&&h(q),Ee.__version=W.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function ne(S,g,D){if(g.image.length!==6)return;const q=Oe(S,g),Q=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+D);const W=i.get(Q);if(Q.version!==W.__version||q===!0){n.activeTexture(t.TEXTURE0+D);const Ee=ct.getPrimaries(ct.workingColorSpace),ue=g.colorSpace===Ji?null:ct.getPrimaries(g.colorSpace),Re=g.colorSpace===Ji||Ee===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Fe=g.isCompressedTexture||g.image[0].isCompressedTexture,ce=g.image[0]&&g.image[0].isDataTexture,_e=[];for(let oe=0;oe<6;oe++)!Fe&&!ce?_e[oe]=v(g.image[oe],!0,r.maxCubemapSize):_e[oe]=ce?g.image[oe].image:g.image[oe],_e[oe]=j(g,_e[oe]);const Se=_e[0],Pe=s.convert(g.format,g.colorSpace),ge=s.convert(g.type),Qe=T(g.internalFormat,Pe,ge,g.colorSpace),O=g.isVideoTexture!==!0,we=W.__version===void 0||q===!0,de=Q.dataReady;let De=w(g,Se);ze(t.TEXTURE_CUBE_MAP,g);let fe;if(Fe){O&&we&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Qe,Se.width,Se.height);for(let oe=0;oe<6;oe++){fe=_e[oe].mipmaps;for(let xe=0;xe<fe.length;xe++){const $e=fe[xe];g.format!==zn?Pe!==null?O?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,0,0,$e.width,$e.height,Pe,$e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,Qe,$e.width,$e.height,0,$e.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,0,0,$e.width,$e.height,Pe,ge,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe,Qe,$e.width,$e.height,0,Pe,ge,$e.data)}}}else{if(fe=g.mipmaps,O&&we){fe.length>0&&De++;const oe=ae(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ce){O?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,_e[oe].width,_e[oe].height,Pe,ge,_e[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,_e[oe].width,_e[oe].height,0,Pe,ge,_e[oe].data);for(let xe=0;xe<fe.length;xe++){const wt=fe[xe].image[oe].image;O?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,0,0,wt.width,wt.height,Pe,ge,wt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,Qe,wt.width,wt.height,0,Pe,ge,wt.data)}}else{O?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Pe,ge,_e[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,Pe,ge,_e[oe]);for(let xe=0;xe<fe.length;xe++){const $e=fe[xe];O?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,0,0,Pe,ge,$e.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe+1,Qe,Pe,ge,$e.image[oe])}}}m(g)&&h(t.TEXTURE_CUBE_MAP),W.__version=Q.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Ce(S,g,D,q,Q,W){const Ee=s.convert(D.format,D.colorSpace),ue=s.convert(D.type),Re=T(D.internalFormat,Ee,ue,D.colorSpace),Fe=i.get(g),ce=i.get(D);if(ce.__renderTarget=g,!Fe.__hasExternalTextures){const _e=Math.max(1,g.width>>W),Se=Math.max(1,g.height>>W);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,W,Re,_e,Se,g.depth,0,Ee,ue,null):n.texImage2D(Q,W,Re,_e,Se,0,Ee,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,S),le(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Q,ce.__webglTexture,0,A(g)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Q,ce.__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(S,g,D){if(t.bindRenderbuffer(t.RENDERBUFFER,S),g.depthBuffer){const q=g.depthTexture,Q=q&&q.isDepthTexture?q.type:null,W=b(g.stencilBuffer,Q),Ee=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;le(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,A(g),W,g.width,g.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,A(g),W,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,W,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,S)}else{const q=g.textures;for(let Q=0;Q<q.length;Q++){const W=q[Q],Ee=s.convert(W.format,W.colorSpace),ue=s.convert(W.type),Re=T(W.internalFormat,Ee,ue,W.colorSpace);le(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,A(g),Re,g.width,g.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,A(g),Re,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Re,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ae(S,g,D){const q=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(g.depthTexture);if(Q.__renderTarget=g,(!Q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ze(t.TEXTURE_CUBE_MAP,g.depthTexture);const Fe=s.convert(g.depthTexture.format),ce=s.convert(g.depthTexture.type);let _e;g.depthTexture.format===Li?_e=t.DEPTH_COMPONENT24:g.depthTexture.format===xr&&(_e=t.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,_e,g.width,g.height,0,Fe,ce,null)}}else K(g.depthTexture,0);const W=Q.__webglTexture,Ee=A(g),ue=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,Re=g.depthTexture.format===xr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Li)le(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Re,ue,W,0,Ee):t.framebufferTexture2D(t.FRAMEBUFFER,Re,ue,W,0);else if(g.depthTexture.format===xr)le(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Re,ue,W,0,Ee):t.framebufferTexture2D(t.FRAMEBUFFER,Re,ue,W,0);else throw new Error("Unknown depthTexture format")}function at(S){const g=i.get(S),D=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const q=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=q}if(S.depthTexture&&!g.__autoAllocateDepthBuffer)if(D)for(let q=0;q<6;q++)Ae(g.__webglFramebuffer[q],S,q);else{const q=S.texture.mipmaps;q&&q.length>0?Ae(g.__webglFramebuffer[0],S,0):Ae(g.__webglFramebuffer,S,0)}else if(D){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=t.createRenderbuffer(),We(g.__webglDepthbuffer[q],S,!1);else{const Q=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,W)}}else{const q=S.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),We(g.__webglDepthbuffer,S,!1);else{const Q=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,W)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function C(S,g,D){const q=i.get(S);g!==void 0&&Ce(q.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&at(S)}function N(S){const g=S.texture,D=i.get(S),q=i.get(g);S.addEventListener("dispose",P);const Q=S.textures,W=S.isWebGLCubeRenderTarget===!0,Ee=Q.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=g.version,a.memory.textures++),W){D.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[ue]=[];for(let Re=0;Re<g.mipmaps.length;Re++)D.__webglFramebuffer[ue][Re]=t.createFramebuffer()}else D.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let ue=0;ue<g.mipmaps.length;ue++)D.__webglFramebuffer[ue]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ue=0,Re=Q.length;ue<Re;ue++){const Fe=i.get(Q[ue]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(S.samples>0&&le(S)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ue=0;ue<Q.length;ue++){const Re=Q[ue];D.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[ue]);const Fe=s.convert(Re.format,Re.colorSpace),ce=s.convert(Re.type),_e=T(Re.internalFormat,Fe,ce,Re.colorSpace,S.isXRRenderTarget===!0),Se=A(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,_e,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,D.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),We(D.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),ze(t.TEXTURE_CUBE_MAP,g);for(let ue=0;ue<6;ue++)if(g.mipmaps&&g.mipmaps.length>0)for(let Re=0;Re<g.mipmaps.length;Re++)Ce(D.__webglFramebuffer[ue][Re],S,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re);else Ce(D.__webglFramebuffer[ue],S,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(g)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ue=0,Re=Q.length;ue<Re;ue++){const Fe=Q[ue],ce=i.get(Fe);let _e=t.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(_e=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,ce.__webglTexture),ze(_e,Fe),Ce(D.__webglFramebuffer,S,Fe,t.COLOR_ATTACHMENT0+ue,_e,0),m(Fe)&&h(_e)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ue=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,q.__webglTexture),ze(ue,g),g.mipmaps&&g.mipmaps.length>0)for(let Re=0;Re<g.mipmaps.length;Re++)Ce(D.__webglFramebuffer[Re],S,g,t.COLOR_ATTACHMENT0,ue,Re);else Ce(D.__webglFramebuffer,S,g,t.COLOR_ATTACHMENT0,ue,0);m(g)&&h(ue),n.unbindTexture()}S.depthBuffer&&at(S)}function X(S){const g=S.textures;for(let D=0,q=g.length;D<q;D++){const Q=g[D];if(m(Q)){const W=y(S),Ee=i.get(Q).__webglTexture;n.bindTexture(W,Ee),h(W),n.unbindTexture()}}}const ee=[],$=[];function ie(S){if(S.samples>0){if(le(S)===!1){const g=S.textures,D=S.width,q=S.height;let Q=t.COLOR_BUFFER_BIT;const W=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(S),ue=g.length>1;if(ue)for(let Fe=0;Fe<g.length;Fe++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Re=S.texture.mipmaps;Re&&Re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Fe=0;Fe<g.length;Fe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Fe]);const ce=i.get(g[Fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ce,0)}t.blitFramebuffer(0,0,D,q,0,0,D,q,Q,t.NEAREST),l===!0&&(ee.length=0,$.length=0,ee.push(t.COLOR_ATTACHMENT0+Fe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(ee.push(W),$.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,$)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ee))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let Fe=0;Fe<g.length;Fe++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Fe]);const ce=i.get(g[Fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.TEXTURE_2D,ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const g=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function A(S){return Math.min(r.maxSamples,S.samples)}function le(S){const g=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function se(S){const g=a.render.frame;u.get(S)!==g&&(u.set(S,g),S.update())}function j(S,g){const D=S.colorSpace,q=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||D!==ps&&D!==Ji&&(ct.getTransfer(D)===St?(q!==zn||Q!==An)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",D)),g}function ae(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=B,this.setTextureCube=k,this.rebindTextures=C,this.setupRenderTarget=N,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=le,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function iA(t,e){function n(i,r=Ji){let s;const a=ct.getTransfer(r);if(i===An)return t.UNSIGNED_BYTE;if(i===cf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===uf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Eg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Tg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===bg)return t.BYTE;if(i===Mg)return t.SHORT;if(i===aa)return t.UNSIGNED_SHORT;if(i===lf)return t.INT;if(i===ui)return t.UNSIGNED_INT;if(i===ni)return t.FLOAT;if(i===Ii)return t.HALF_FLOAT;if(i===wg)return t.ALPHA;if(i===Ag)return t.RGB;if(i===zn)return t.RGBA;if(i===Li)return t.DEPTH_COMPONENT;if(i===xr)return t.DEPTH_STENCIL;if(i===Rg)return t.RED;if(i===ff)return t.RED_INTEGER;if(i===hs)return t.RG;if(i===df)return t.RG_INTEGER;if(i===hf)return t.RGBA_INTEGER;if(i===so||i===ao||i===oo||i===lo)if(a===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===so)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===so)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ao)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tc||i===wc||i===Ac||i===Rc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Tc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ac)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cc||i===Pc||i===Dc||i===Ic||i===Lc||i===Nc||i===Uc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Cc||i===Pc)return a===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ic)return s.COMPRESSED_R11_EAC;if(i===Lc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Nc)return s.COMPRESSED_RG11_EAC;if(i===Uc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Oc||i===Fc||i===Bc||i===kc||i===zc||i===Vc||i===Gc||i===Hc||i===Wc||i===Xc||i===qc||i===Yc||i===$c||i===Jc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Oc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$c)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jc)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kc||i===Zc||i===Qc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Kc)return a===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jc||i===eu||i===tu||i===nu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===jc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===eu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const rA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sA=`
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

}`;class aA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Hg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Wn({vertexShader:rA,fragmentShader:sA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $t(new Ho(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oA extends Rr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",m=new aA,h={},y=n.getContextAttributes();let T=null,b=null;const w=[],R=[],P=new Je;let L=null;const x=new xn;x.viewport=new Nt;const M=new xn;M.viewport=new Nt;const I=[x,M],F=new ub;let V=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ne=w[te];return ne===void 0&&(ne=new Bl,w[te]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(te){let ne=w[te];return ne===void 0&&(ne=new Bl,w[te]=ne),ne.getGripSpace()},this.getHand=function(te){let ne=w[te];return ne===void 0&&(ne=new Bl,w[te]=ne),ne.getHandSpace()};function K(te){const ne=R.indexOf(te.inputSource);if(ne===-1)return;const Ce=w[ne];Ce!==void 0&&(Ce.update(te.inputSource,te.frame,c||a),Ce.dispatchEvent({type:te.type,data:te.inputSource}))}function G(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",B);for(let te=0;te<w.length;te++){const ne=R[te];ne!==null&&(R[te]=null,w[te].disconnect(ne))}V=null,Z=null,m.reset();for(const te in h)delete h[te];e.setRenderTarget(T),p=null,d=null,f=null,r=null,b=null,ut.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",G),r.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,We=null,Ae=null;y.depth&&(Ae=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ce=y.stencil?xr:Li,We=y.stencil?oa:ui);const at={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(at),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new ai(d.textureWidth,d.textureHeight,{format:zn,type:An,depthTexture:new ca(d.textureWidth,d.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ce={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new ai(p.framebufferWidth,p.framebufferHeight,{format:zn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ut.setContext(r),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(te){for(let ne=0;ne<te.removed.length;ne++){const Ce=te.removed[ne],We=R.indexOf(Ce);We>=0&&(R[We]=null,w[We].disconnect(Ce))}for(let ne=0;ne<te.added.length;ne++){const Ce=te.added[ne];let We=R.indexOf(Ce);if(We===-1){for(let at=0;at<w.length;at++)if(at>=R.length){R.push(Ce),We=at;break}else if(R[at]===null){R[at]=Ce,We=at;break}if(We===-1)break}const Ae=w[We];Ae&&Ae.connect(Ce)}}const k=new U,pe=new U;function me(te,ne,Ce){k.setFromMatrixPosition(ne.matrixWorld),pe.setFromMatrixPosition(Ce.matrixWorld);const We=k.distanceTo(pe),Ae=ne.projectionMatrix.elements,at=Ce.projectionMatrix.elements,C=Ae[14]/(Ae[10]-1),N=Ae[14]/(Ae[10]+1),X=(Ae[9]+1)/Ae[5],ee=(Ae[9]-1)/Ae[5],$=(Ae[8]-1)/Ae[0],ie=(at[8]+1)/at[0],A=C*$,le=C*ie,se=We/(-$+ie),j=se*-$;if(ne.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(j),te.translateZ(se),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ae[10]===-1)te.projectionMatrix.copy(ne.projectionMatrix),te.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const ae=C+se,S=N+se,g=A-j,D=le+(We-j),q=X*N/S*ae,Q=ee*N/S*ae;te.projectionMatrix.makePerspective(g,D,q,Q,ae,S),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ve(te,ne){ne===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ne.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ne=te.near,Ce=te.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(Ce=m.depthFar)),F.near=M.near=x.near=ne,F.far=M.far=x.far=Ce,(V!==F.near||Z!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,Z=F.far),F.layers.mask=te.layers.mask|6,x.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;const We=te.parent,Ae=F.cameras;ve(F,We);for(let at=0;at<Ae.length;at++)ve(Ae[at],We);Ae.length===2?me(F,x,M):F.projectionMatrix.copy(x.projectionMatrix),ze(te,F,We)};function ze(te,ne,Ce){Ce===null?te.matrix.copy(ne.matrixWorld):(te.matrix.copy(Ce.matrixWorld),te.matrix.invert(),te.matrix.multiply(ne.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ne.projectionMatrix),te.projectionMatrixInverse.copy(ne.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ms*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(te){return h[te]};let Oe=null;function nt(te,ne){if(u=ne.getViewerPose(c||a),_=ne,u!==null){const Ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let We=!1;Ce.length!==F.cameras.length&&(F.cameras.length=0,We=!0);for(let N=0;N<Ce.length;N++){const X=Ce[N];let ee=null;if(p!==null)ee=p.getViewport(X);else{const ie=f.getViewSubImage(d,X);ee=ie.viewport,N===0&&(e.setRenderTargetTextures(b,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(b))}let $=I[N];$===void 0&&($=new xn,$.layers.enable(N),$.viewport=new Nt,I[N]=$),$.matrix.fromArray(X.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(X.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(ee.x,ee.y,ee.width,ee.height),N===0&&(F.matrix.copy($.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),We===!0&&F.cameras.push($)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const N=f.getDepthInformation(Ce[0]);N&&N.isValid&&N.texture&&m.init(N,r.renderState)}if(Ae&&Ae.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let N=0;N<Ce.length;N++){const X=Ce[N].camera;if(X){let ee=h[X];ee||(ee=new Hg,h[X]=ee);const $=f.getCameraImage(X);ee.sourceTexture=$}}}}for(let Ce=0;Ce<w.length;Ce++){const We=R[Ce],Ae=w[Ce];We!==null&&Ae!==void 0&&Ae.update(We,ne,c||a)}Oe&&Oe(te,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const ut=new qg;ut.setAnimationLoop(nt),this.setAnimationLoop=function(te){Oe=te},this.dispose=function(){}}}const pr=new fi,lA=new _t;function cA(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Og(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,y,T,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,b)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,y,T):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===rn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===rn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=e.get(h),T=y.envMap,b=y.envMapRotation;T&&(m.envMap.value=T,pr.copy(b),pr.x*=-1,pr.y*=-1,pr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),m.envMapRotation.value.setFromMatrix4(lA.makeRotationFromEuler(pr)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,T){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=T*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===rn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const y=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uA(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const b=T.program;i.uniformBlockBinding(y,b)}function c(y,T){let b=r[y.id];b===void 0&&(_(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",m));const w=T.program;i.updateUBOMapping(y,w);const R=e.render.frame;s[y.id]!==R&&(d(y),s[y.id]=R)}function u(y){const T=f();y.__bindingPointIndex=T;const b=t.createBuffer(),w=y.__size,R=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,w,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,b),b}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const T=r[y.id],b=y.uniforms,w=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let R=0,P=b.length;R<P;R++){const L=Array.isArray(b[R])?b[R]:[b[R]];for(let x=0,M=L.length;x<M;x++){const I=L[x];if(p(I,R,x,w)===!0){const F=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let Z=0;for(let K=0;K<V.length;K++){const G=V[K],B=v(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,F+Z,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,Z),Z+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,T,b,w){const R=y.value,P=T+"_"+b;if(w[P]===void 0)return typeof R=="number"||typeof R=="boolean"?w[P]=R:w[P]=R.clone(),!0;{const L=w[P];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return w[P]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function _(y){const T=y.uniforms;let b=0;const w=16;for(let P=0,L=T.length;P<L;P++){const x=Array.isArray(T[P])?T[P]:[T[P]];for(let M=0,I=x.length;M<I;M++){const F=x[M],V=Array.isArray(F.value)?F.value:[F.value];for(let Z=0,K=V.length;Z<K;Z++){const G=V[Z],B=v(G),k=b%w,pe=k%B.boundary,me=k+pe;b+=pe,me!==0&&w-me<B.storage&&(b+=w-me),F.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=B.storage}}}const R=b%w;return R>0&&(b+=w-R),y.__size=b,y.__cache={},this}function v(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",y),T}function m(y){const T=y.target;T.removeEventListener("dispose",m);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}const fA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jn=null;function dA(){return Jn===null&&(Jn=new KS(fA,16,16,hs,Ii),Jn.name="DFG_LUT",Jn.minFilter=tn,Jn.magFilter=tn,Jn.wrapS=wi,Jn.wrapT=wi,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}class hA{constructor(e={}){const{canvas:n=cS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=An}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const v=p,m=new Set([hf,df,ff]),h=new Set([An,ui,aa,oa,cf,uf]),y=new Uint32Array(4),T=new Int32Array(4);let b=null,w=null;const R=[],P=[];let L=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let M=!1;this._outputColorSpace=Ln;let I=0,F=0,V=null,Z=-1,K=null;const G=new Nt,B=new Nt;let k=null;const pe=new Ze(0);let me=0,ve=n.width,ze=n.height,Oe=1,nt=null,ut=null;const te=new Nt(0,0,ve,ze),ne=new Nt(0,0,ve,ze);let Ce=!1;const We=new vf;let Ae=!1,at=!1;const C=new _t,N=new U,X=new Nt,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function ie(){return V===null?Oe:1}let A=i;function le(E,z){return n.getContext(E,z)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${af}`),n.addEventListener("webglcontextlost",$e,!1),n.addEventListener("webglcontextrestored",wt,!1),n.addEventListener("webglcontextcreationerror",xt,!1),A===null){const z="webgl2";if(A=le(z,E),A===null)throw le(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw ht("WebGLRenderer: "+E.message),E}let se,j,ae,S,g,D,q,Q,W,Ee,ue,Re,Fe,ce,_e,Se,Pe,ge,Qe,O,we,de,De,fe;function oe(){se=new dT(A),se.init(),de=new iA(A,se),j=new iT(A,se,e,de),ae=new tA(A,se),j.reversedDepthBuffer&&d&&ae.buffers.depth.setReversed(!0),S=new mT(A),g=new zw,D=new nA(A,se,ae,g,j,de,S),q=new sT(x),Q=new fT(x),W=new xb(A),De=new tT(A,W),Ee=new hT(A,W,S,De),ue=new _T(A,Ee,W,S),Qe=new gT(A,j,D),Se=new rT(g),Re=new kw(x,q,Q,se,j,De,Se),Fe=new cA(x,g),ce=new Gw,_e=new $w(se),ge=new eT(x,q,Q,ae,ue,_,l),Pe=new jw(x,ue,j),fe=new uA(A,S,j,ae),O=new nT(A,se,S),we=new pT(A,se,S),S.programs=Re.programs,x.capabilities=j,x.extensions=se,x.properties=g,x.renderLists=ce,x.shadowMap=Pe,x.state=ae,x.info=S}oe(),v!==An&&(L=new xT(v,n.width,n.height,r,s));const xe=new oA(x,A);this.xr=xe,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(E){E!==void 0&&(Oe=E,this.setSize(ve,ze,!1))},this.getSize=function(E){return E.set(ve,ze)},this.setSize=function(E,z,J=!0){if(xe.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=E,ze=z,n.width=Math.floor(E*Oe),n.height=Math.floor(z*Oe),J===!0&&(n.style.width=E+"px",n.style.height=z+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(ve*Oe,ze*Oe).floor()},this.setDrawingBufferSize=function(E,z,J){ve=E,ze=z,Oe=J,n.width=Math.floor(E*J),n.height=Math.floor(z*J),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(v===An){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(G)},this.getViewport=function(E){return E.copy(te)},this.setViewport=function(E,z,J,Y){E.isVector4?te.set(E.x,E.y,E.z,E.w):te.set(E,z,J,Y),ae.viewport(G.copy(te).multiplyScalar(Oe).round())},this.getScissor=function(E){return E.copy(ne)},this.setScissor=function(E,z,J,Y){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,z,J,Y),ae.scissor(B.copy(ne).multiplyScalar(Oe).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(E){ae.setScissorTest(Ce=E)},this.setOpaqueSort=function(E){nt=E},this.setTransparentSort=function(E){ut=E},this.getClearColor=function(E){return E.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,J=!0){let Y=0;if(E){let H=!1;if(V!==null){const be=V.texture.format;H=m.has(be)}if(H){const be=V.texture.type,Ie=h.has(be),Te=ge.getClearColor(),Ue=ge.getClearAlpha(),ke=Te.r,Xe=Te.g,Ge=Te.b;Ie?(y[0]=ke,y[1]=Xe,y[2]=Ge,y[3]=Ue,A.clearBufferuiv(A.COLOR,0,y)):(T[0]=ke,T[1]=Xe,T[2]=Ge,T[3]=Ue,A.clearBufferiv(A.COLOR,0,T))}else Y|=A.COLOR_BUFFER_BIT}z&&(Y|=A.DEPTH_BUFFER_BIT),J&&(Y|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",$e,!1),n.removeEventListener("webglcontextrestored",wt,!1),n.removeEventListener("webglcontextcreationerror",xt,!1),ge.dispose(),ce.dispose(),_e.dispose(),g.dispose(),q.dispose(),Q.dispose(),ue.dispose(),De.dispose(),fe.dispose(),Re.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Df),xe.removeEventListener("sessionend",If),rr.stop()};function $e(E){E.preventDefault(),yh("WebGLRenderer: Context Lost."),M=!0}function wt(){yh("WebGLRenderer: Context Restored."),M=!1;const E=S.autoReset,z=Pe.enabled,J=Pe.autoUpdate,Y=Pe.needsUpdate,H=Pe.type;oe(),S.autoReset=E,Pe.enabled=z,Pe.autoUpdate=J,Pe.needsUpdate=Y,Pe.type=H}function xt(E){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Yn(E){const z=E.target;z.removeEventListener("dispose",Yn),hi(z)}function hi(E){i0(E),g.remove(E)}function i0(E){const z=g.get(E).programs;z!==void 0&&(z.forEach(function(J){Re.releaseProgram(J)}),E.isShaderMaterial&&Re.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,J,Y,H,be){z===null&&(z=ee);const Ie=H.isMesh&&H.matrixWorld.determinant()<0,Te=s0(E,z,J,Y,H);ae.setMaterial(Y,Ie);let Ue=J.index,ke=1;if(Y.wireframe===!0){if(Ue=Ee.getWireframeAttribute(J),Ue===void 0)return;ke=2}const Xe=J.drawRange,Ge=J.attributes.position;let rt=Xe.start*ke,Mt=(Xe.start+Xe.count)*ke;be!==null&&(rt=Math.max(rt,be.start*ke),Mt=Math.min(Mt,(be.start+be.count)*ke)),Ue!==null?(rt=Math.max(rt,0),Mt=Math.min(Mt,Ue.count)):Ge!=null&&(rt=Math.max(rt,0),Mt=Math.min(Mt,Ge.count));const Dt=Mt-rt;if(Dt<0||Dt===1/0)return;De.setup(H,Y,Te,J,Ue);let It,Tt=O;if(Ue!==null&&(It=W.get(Ue),Tt=we,Tt.setIndex(It)),H.isMesh)Y.wireframe===!0?(ae.setLineWidth(Y.wireframeLinewidth*ie()),Tt.setMode(A.LINES)):Tt.setMode(A.TRIANGLES);else if(H.isLine){let He=Y.linewidth;He===void 0&&(He=1),ae.setLineWidth(He*ie()),H.isLineSegments?Tt.setMode(A.LINES):H.isLineLoop?Tt.setMode(A.LINE_LOOP):Tt.setMode(A.LINE_STRIP)}else H.isPoints?Tt.setMode(A.POINTS):H.isSprite&&Tt.setMode(A.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)la("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const He=H._multiDrawStarts,yt=H._multiDrawCounts,ft=H._multiDrawCount,bn=Ue?W.get(Ue).bytesPerElement:1,Dr=g.get(Y).currentProgram.getUniforms();for(let Mn=0;Mn<ft;Mn++)Dr.setValue(A,"_gl_DrawID",Mn),Tt.render(He[Mn]/bn,yt[Mn])}else if(H.isInstancedMesh)Tt.renderInstances(rt,Dt,H.count);else if(J.isInstancedBufferGeometry){const He=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,yt=Math.min(J.instanceCount,He);Tt.renderInstances(rt,Dt,yt)}else Tt.render(rt,Dt)};function Pf(E,z,J){E.transparent===!0&&E.side===wn&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,xa(E,z,J),E.side=tr,E.needsUpdate=!0,xa(E,z,J),E.side=wn):xa(E,z,J)}this.compile=function(E,z,J=null){J===null&&(J=E),w=_e.get(J),w.init(z),P.push(w),J.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),E!==J&&E.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights();const Y=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const be=H.material;if(be)if(Array.isArray(be))for(let Ie=0;Ie<be.length;Ie++){const Te=be[Ie];Pf(Te,J,H),Y.add(Te)}else Pf(be,J,H),Y.add(be)}),w=P.pop(),Y},this.compileAsync=function(E,z,J=null){const Y=this.compile(E,z,J);return new Promise(H=>{function be(){if(Y.forEach(function(Ie){g.get(Ie).currentProgram.isReady()&&Y.delete(Ie)}),Y.size===0){H(E);return}setTimeout(be,10)}se.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Jo=null;function r0(E){Jo&&Jo(E)}function Df(){rr.stop()}function If(){rr.start()}const rr=new qg;rr.setAnimationLoop(r0),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(E){Jo=E,xe.setAnimationLoop(E),E===null?rr.stop():rr.start()},xe.addEventListener("sessionstart",Df),xe.addEventListener("sessionend",If),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const J=xe.enabled===!0&&xe.isPresenting===!0,Y=L!==null&&(V===null||J)&&L.begin(x,V);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(z),z=xe.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,z,V),w=_e.get(E,P.length),w.init(z),P.push(w),C.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),We.setFromProjectionMatrix(C,ii,z.reversedDepth),at=this.localClippingEnabled,Ae=Se.init(this.clippingPlanes,at),b=ce.get(E,R.length),b.init(),R.push(b),xe.enabled===!0&&xe.isPresenting===!0){const Ie=x.xr.getDepthSensingMesh();Ie!==null&&Ko(Ie,z,-1/0,x.sortObjects)}Ko(E,z,0,x.sortObjects),b.finish(),x.sortObjects===!0&&b.sort(nt,ut),$=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,$&&ge.addToRenderList(b,E),this.info.render.frame++,Ae===!0&&Se.beginShadows();const H=w.state.shadowsArray;if(Pe.render(H,E,z),Ae===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&L.hasRenderPass())===!1){const Ie=b.opaque,Te=b.transmissive;if(w.setupLights(),z.isArrayCamera){const Ue=z.cameras;if(Te.length>0)for(let ke=0,Xe=Ue.length;ke<Xe;ke++){const Ge=Ue[ke];Nf(Ie,Te,E,Ge)}$&&ge.render(E);for(let ke=0,Xe=Ue.length;ke<Xe;ke++){const Ge=Ue[ke];Lf(b,E,Ge,Ge.viewport)}}else Te.length>0&&Nf(Ie,Te,E,z),$&&ge.render(E),Lf(b,E,z)}V!==null&&F===0&&(D.updateMultisampleRenderTarget(V),D.updateRenderTargetMipmap(V)),Y&&L.end(x),E.isScene===!0&&E.onAfterRender(x,E,z),De.resetDefaultState(),Z=-1,K=null,P.pop(),P.length>0?(w=P[P.length-1],Ae===!0&&Se.setGlobalState(x.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?b=R[R.length-1]:b=null};function Ko(E,z,J,Y){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||We.intersectsSprite(E)){Y&&X.setFromMatrixPosition(E.matrixWorld).applyMatrix4(C);const Ie=ue.update(E),Te=E.material;Te.visible&&b.push(E,Ie,Te,J,X.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||We.intersectsObject(E))){const Ie=ue.update(E),Te=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),X.copy(E.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),X.copy(Ie.boundingSphere.center)),X.applyMatrix4(E.matrixWorld).applyMatrix4(C)),Array.isArray(Te)){const Ue=Ie.groups;for(let ke=0,Xe=Ue.length;ke<Xe;ke++){const Ge=Ue[ke],rt=Te[Ge.materialIndex];rt&&rt.visible&&b.push(E,Ie,rt,J,X.z,Ge)}}else Te.visible&&b.push(E,Ie,Te,J,X.z,null)}}const be=E.children;for(let Ie=0,Te=be.length;Ie<Te;Ie++)Ko(be[Ie],z,J,Y)}function Lf(E,z,J,Y){const{opaque:H,transmissive:be,transparent:Ie}=E;w.setupLightsView(J),Ae===!0&&Se.setGlobalState(x.clippingPlanes,J),Y&&ae.viewport(G.copy(Y)),H.length>0&&va(H,z,J),be.length>0&&va(be,z,J),Ie.length>0&&va(Ie,z,J),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Nf(E,z,J,Y){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){const rt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new ai(1,1,{generateMipmaps:!0,type:rt?Ii:An,minFilter:vr,samples:j.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const be=w.state.transmissionRenderTarget[Y.id],Ie=Y.viewport||G;be.setSize(Ie.z*x.transmissionResolutionScale,Ie.w*x.transmissionResolutionScale);const Te=x.getRenderTarget(),Ue=x.getActiveCubeFace(),ke=x.getActiveMipmapLevel();x.setRenderTarget(be),x.getClearColor(pe),me=x.getClearAlpha(),me<1&&x.setClearColor(16777215,.5),x.clear(),$&&ge.render(J);const Xe=x.toneMapping;x.toneMapping=si;const Ge=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),Ae===!0&&Se.setGlobalState(x.clippingPlanes,Y),va(E,J,Y),D.updateMultisampleRenderTarget(be),D.updateRenderTargetMipmap(be),se.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Mt=0,Dt=z.length;Mt<Dt;Mt++){const It=z[Mt],{object:Tt,geometry:He,material:yt,group:ft}=It;if(yt.side===wn&&Tt.layers.test(Y.layers)){const bn=yt.side;yt.side=rn,yt.needsUpdate=!0,Uf(Tt,J,Y,He,yt,ft),yt.side=bn,yt.needsUpdate=!0,rt=!0}}rt===!0&&(D.updateMultisampleRenderTarget(be),D.updateRenderTargetMipmap(be))}x.setRenderTarget(Te,Ue,ke),x.setClearColor(pe,me),Ge!==void 0&&(Y.viewport=Ge),x.toneMapping=Xe}function va(E,z,J){const Y=z.isScene===!0?z.overrideMaterial:null;for(let H=0,be=E.length;H<be;H++){const Ie=E[H],{object:Te,geometry:Ue,group:ke}=Ie;let Xe=Ie.material;Xe.allowOverride===!0&&Y!==null&&(Xe=Y),Te.layers.test(J.layers)&&Uf(Te,z,J,Ue,Xe,ke)}}function Uf(E,z,J,Y,H,be){E.onBeforeRender(x,z,J,Y,H,be),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(x,z,J,Y,E,be),H.transparent===!0&&H.side===wn&&H.forceSinglePass===!1?(H.side=rn,H.needsUpdate=!0,x.renderBufferDirect(J,z,Y,H,E,be),H.side=tr,H.needsUpdate=!0,x.renderBufferDirect(J,z,Y,H,E,be),H.side=wn):x.renderBufferDirect(J,z,Y,H,E,be),E.onAfterRender(x,z,J,Y,H,be)}function xa(E,z,J){z.isScene!==!0&&(z=ee);const Y=g.get(E),H=w.state.lights,be=w.state.shadowsArray,Ie=H.state.version,Te=Re.getParameters(E,H.state,be,z,J),Ue=Re.getProgramCacheKey(Te);let ke=Y.programs;Y.environment=E.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(E.isMeshStandardMaterial?Q:q).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",Yn),ke=new Map,Y.programs=ke);let Xe=ke.get(Ue);if(Xe!==void 0){if(Y.currentProgram===Xe&&Y.lightsStateVersion===Ie)return Ff(E,Te),Xe}else Te.uniforms=Re.getUniforms(E),E.onBeforeCompile(Te,x),Xe=Re.acquireProgram(Te,Ue),ke.set(Ue,Xe),Y.uniforms=Te.uniforms;const Ge=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=Se.uniform),Ff(E,Te),Y.needsLights=o0(E),Y.lightsStateVersion=Ie,Y.needsLights&&(Ge.ambientLightColor.value=H.state.ambient,Ge.lightProbe.value=H.state.probe,Ge.directionalLights.value=H.state.directional,Ge.directionalLightShadows.value=H.state.directionalShadow,Ge.spotLights.value=H.state.spot,Ge.spotLightShadows.value=H.state.spotShadow,Ge.rectAreaLights.value=H.state.rectArea,Ge.ltc_1.value=H.state.rectAreaLTC1,Ge.ltc_2.value=H.state.rectAreaLTC2,Ge.pointLights.value=H.state.point,Ge.pointLightShadows.value=H.state.pointShadow,Ge.hemisphereLights.value=H.state.hemi,Ge.directionalShadowMap.value=H.state.directionalShadowMap,Ge.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ge.spotShadowMap.value=H.state.spotShadowMap,Ge.spotLightMatrix.value=H.state.spotLightMatrix,Ge.spotLightMap.value=H.state.spotLightMap,Ge.pointShadowMap.value=H.state.pointShadowMap,Ge.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Xe,Y.uniformsList=null,Xe}function Of(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=co.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Ff(E,z){const J=g.get(E);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function s0(E,z,J,Y,H){z.isScene!==!0&&(z=ee),D.resetTextureUnits();const be=z.fog,Ie=Y.isMeshStandardMaterial?z.environment:null,Te=V===null?x.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ps,Ue=(Y.isMeshStandardMaterial?Q:q).get(Y.envMap||Ie),ke=Y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Xe=!!J.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ge=!!J.morphAttributes.position,rt=!!J.morphAttributes.normal,Mt=!!J.morphAttributes.color;let Dt=si;Y.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Dt=x.toneMapping);const It=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Tt=It!==void 0?It.length:0,He=g.get(Y),yt=w.state.lights;if(Ae===!0&&(at===!0||E!==K)){const an=E===K&&Y.id===Z;Se.setState(Y,E,an)}let ft=!1;Y.version===He.__version?(He.needsLights&&He.lightsStateVersion!==yt.state.version||He.outputColorSpace!==Te||H.isBatchedMesh&&He.batching===!1||!H.isBatchedMesh&&He.batching===!0||H.isBatchedMesh&&He.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&He.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&He.instancing===!1||!H.isInstancedMesh&&He.instancing===!0||H.isSkinnedMesh&&He.skinning===!1||!H.isSkinnedMesh&&He.skinning===!0||H.isInstancedMesh&&He.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&He.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&He.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&He.instancingMorph===!1&&H.morphTexture!==null||He.envMap!==Ue||Y.fog===!0&&He.fog!==be||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Se.numPlanes||He.numIntersection!==Se.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==Xe||He.morphTargets!==Ge||He.morphNormals!==rt||He.morphColors!==Mt||He.toneMapping!==Dt||He.morphTargetsCount!==Tt)&&(ft=!0):(ft=!0,He.__version=Y.version);let bn=He.currentProgram;ft===!0&&(bn=xa(Y,z,H));let Dr=!1,Mn=!1,As=!1;const At=bn.getUniforms(),pn=He.uniforms;if(ae.useProgram(bn.program)&&(Dr=!0,Mn=!0,As=!0),Y.id!==Z&&(Z=Y.id,Mn=!0),Dr||K!==E){ae.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),At.setValue(A,"projectionMatrix",E.projectionMatrix),At.setValue(A,"viewMatrix",E.matrixWorldInverse);const mn=At.map.cameraPosition;mn!==void 0&&mn.setValue(A,N.setFromMatrixPosition(E.matrixWorld)),j.logarithmicDepthBuffer&&At.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&At.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),K!==E&&(K=E,Mn=!0,As=!0)}if(He.needsLights&&(yt.state.directionalShadowMap.length>0&&At.setValue(A,"directionalShadowMap",yt.state.directionalShadowMap,D),yt.state.spotShadowMap.length>0&&At.setValue(A,"spotShadowMap",yt.state.spotShadowMap,D),yt.state.pointShadowMap.length>0&&At.setValue(A,"pointShadowMap",yt.state.pointShadowMap,D)),H.isSkinnedMesh){At.setOptional(A,H,"bindMatrix"),At.setOptional(A,H,"bindMatrixInverse");const an=H.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),At.setValue(A,"boneTexture",an.boneTexture,D))}H.isBatchedMesh&&(At.setOptional(A,H,"batchingTexture"),At.setValue(A,"batchingTexture",H._matricesTexture,D),At.setOptional(A,H,"batchingIdTexture"),At.setValue(A,"batchingIdTexture",H._indirectTexture,D),At.setOptional(A,H,"batchingColorTexture"),H._colorsTexture!==null&&At.setValue(A,"batchingColorTexture",H._colorsTexture,D));const Dn=J.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Qe.update(H,J,bn),(Mn||He.receiveShadow!==H.receiveShadow)&&(He.receiveShadow=H.receiveShadow,At.setValue(A,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(pn.envMap.value=Ue,pn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(pn.envMapIntensity.value=z.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=dA()),Mn&&(At.setValue(A,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&a0(pn,As),be&&Y.fog===!0&&Fe.refreshFogUniforms(pn,be),Fe.refreshMaterialUniforms(pn,Y,Oe,ze,w.state.transmissionRenderTarget[E.id]),co.upload(A,Of(He),pn,D)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(co.upload(A,Of(He),pn,D),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&At.setValue(A,"center",H.center),At.setValue(A,"modelViewMatrix",H.modelViewMatrix),At.setValue(A,"normalMatrix",H.normalMatrix),At.setValue(A,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const an=Y.uniformsGroups;for(let mn=0,Zo=an.length;mn<Zo;mn++){const sr=an[mn];fe.update(sr,bn),fe.bind(sr,bn)}}return bn}function a0(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function o0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(E,z,J){const Y=g.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),g.get(E.texture).__webglTexture=z,g.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:J,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){const J=g.get(E);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0};const l0=A.createFramebuffer();this.setRenderTarget=function(E,z=0,J=0){V=E,I=z,F=J;let Y=null,H=!1,be=!1;if(E){const Te=g.get(E);if(Te.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(A.FRAMEBUFFER,Te.__webglFramebuffer),G.copy(E.viewport),B.copy(E.scissor),k=E.scissorTest,ae.viewport(G),ae.scissor(B),ae.setScissorTest(k),Z=-1;return}else if(Te.__webglFramebuffer===void 0)D.setupRenderTarget(E);else if(Te.__hasExternalTextures)D.rebindTextures(E,g.get(E.texture).__webglTexture,g.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Xe=E.depthTexture;if(Te.__boundDepthTexture!==Xe){if(Xe!==null&&g.has(Xe)&&(E.width!==Xe.image.width||E.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(E)}}const Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(be=!0);const ke=g.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[z])?Y=ke[z][J]:Y=ke[z],H=!0):E.samples>0&&D.useMultisampledRTT(E)===!1?Y=g.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?Y=ke[J]:Y=ke,G.copy(E.viewport),B.copy(E.scissor),k=E.scissorTest}else G.copy(te).multiplyScalar(Oe).floor(),B.copy(ne).multiplyScalar(Oe).floor(),k=Ce;if(J!==0&&(Y=l0),ae.bindFramebuffer(A.FRAMEBUFFER,Y)&&ae.drawBuffers(E,Y),ae.viewport(G),ae.scissor(B),ae.setScissorTest(k),H){const Te=g.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+z,Te.__webglTexture,J)}else if(be){const Te=z;for(let Ue=0;Ue<E.textures.length;Ue++){const ke=g.get(E.textures[Ue]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Ue,ke.__webglTexture,J,Te)}}else if(E!==null&&J!==0){const Te=g.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Te.__webglTexture,J)}Z=-1},this.readRenderTargetPixels=function(E,z,J,Y,H,be,Ie,Te=0){if(!(E&&E.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=g.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue){ae.bindFramebuffer(A.FRAMEBUFFER,Ue);try{const ke=E.textures[Te],Xe=ke.format,Ge=ke.type;if(!j.textureFormatReadable(Xe)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Ge)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-Y&&J>=0&&J<=E.height-H&&(E.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Te),A.readPixels(z,J,Y,H,de.convert(Xe),de.convert(Ge),be))}finally{const ke=V!==null?g.get(V).__webglFramebuffer:null;ae.bindFramebuffer(A.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,z,J,Y,H,be,Ie,Te=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=g.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue)if(z>=0&&z<=E.width-Y&&J>=0&&J<=E.height-H){ae.bindFramebuffer(A.FRAMEBUFFER,Ue);const ke=E.textures[Te],Xe=ke.format,Ge=ke.type;if(!j.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,rt),A.bufferData(A.PIXEL_PACK_BUFFER,be.byteLength,A.STREAM_READ),E.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Te),A.readPixels(z,J,Y,H,de.convert(Xe),de.convert(Ge),0);const Mt=V!==null?g.get(V).__webglFramebuffer:null;ae.bindFramebuffer(A.FRAMEBUFFER,Mt);const Dt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await uS(A,Dt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,rt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,be),A.deleteBuffer(rt),A.deleteSync(Dt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,J=0){const Y=Math.pow(2,-J),H=Math.floor(E.image.width*Y),be=Math.floor(E.image.height*Y),Ie=z!==null?z.x:0,Te=z!==null?z.y:0;D.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,J,0,0,Ie,Te,H,be),ae.unbindTexture()};const c0=A.createFramebuffer(),u0=A.createFramebuffer();this.copyTextureToTexture=function(E,z,J=null,Y=null,H=0,be=null){be===null&&(H!==0?(la("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=H,H=0):be=0);let Ie,Te,Ue,ke,Xe,Ge,rt,Mt,Dt;const It=E.isCompressedTexture?E.mipmaps[be]:E.image;if(J!==null)Ie=J.max.x-J.min.x,Te=J.max.y-J.min.y,Ue=J.isBox3?J.max.z-J.min.z:1,ke=J.min.x,Xe=J.min.y,Ge=J.isBox3?J.min.z:0;else{const Dn=Math.pow(2,-H);Ie=Math.floor(It.width*Dn),Te=Math.floor(It.height*Dn),E.isDataArrayTexture?Ue=It.depth:E.isData3DTexture?Ue=Math.floor(It.depth*Dn):Ue=1,ke=0,Xe=0,Ge=0}Y!==null?(rt=Y.x,Mt=Y.y,Dt=Y.z):(rt=0,Mt=0,Dt=0);const Tt=de.convert(z.format),He=de.convert(z.type);let yt;z.isData3DTexture?(D.setTexture3D(z,0),yt=A.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(D.setTexture2DArray(z,0),yt=A.TEXTURE_2D_ARRAY):(D.setTexture2D(z,0),yt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,z.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,z.unpackAlignment);const ft=A.getParameter(A.UNPACK_ROW_LENGTH),bn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Dr=A.getParameter(A.UNPACK_SKIP_PIXELS),Mn=A.getParameter(A.UNPACK_SKIP_ROWS),As=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,It.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,It.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ke),A.pixelStorei(A.UNPACK_SKIP_ROWS,Xe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ge);const At=E.isDataArrayTexture||E.isData3DTexture,pn=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const Dn=g.get(E),an=g.get(z),mn=g.get(Dn.__renderTarget),Zo=g.get(an.__renderTarget);ae.bindFramebuffer(A.READ_FRAMEBUFFER,mn.__webglFramebuffer),ae.bindFramebuffer(A.DRAW_FRAMEBUFFER,Zo.__webglFramebuffer);for(let sr=0;sr<Ue;sr++)At&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,g.get(E).__webglTexture,H,Ge+sr),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,g.get(z).__webglTexture,be,Dt+sr)),A.blitFramebuffer(ke,Xe,Ie,Te,rt,Mt,Ie,Te,A.DEPTH_BUFFER_BIT,A.NEAREST);ae.bindFramebuffer(A.READ_FRAMEBUFFER,null),ae.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||g.has(E)){const Dn=g.get(E),an=g.get(z);ae.bindFramebuffer(A.READ_FRAMEBUFFER,c0),ae.bindFramebuffer(A.DRAW_FRAMEBUFFER,u0);for(let mn=0;mn<Ue;mn++)At?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Dn.__webglTexture,H,Ge+mn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Dn.__webglTexture,H),pn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,an.__webglTexture,be,Dt+mn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,an.__webglTexture,be),H!==0?A.blitFramebuffer(ke,Xe,Ie,Te,rt,Mt,Ie,Te,A.COLOR_BUFFER_BIT,A.NEAREST):pn?A.copyTexSubImage3D(yt,be,rt,Mt,Dt+mn,ke,Xe,Ie,Te):A.copyTexSubImage2D(yt,be,rt,Mt,ke,Xe,Ie,Te);ae.bindFramebuffer(A.READ_FRAMEBUFFER,null),ae.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else pn?E.isDataTexture||E.isData3DTexture?A.texSubImage3D(yt,be,rt,Mt,Dt,Ie,Te,Ue,Tt,He,It.data):z.isCompressedArrayTexture?A.compressedTexSubImage3D(yt,be,rt,Mt,Dt,Ie,Te,Ue,Tt,It.data):A.texSubImage3D(yt,be,rt,Mt,Dt,Ie,Te,Ue,Tt,He,It):E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,be,rt,Mt,Ie,Te,Tt,He,It.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,be,rt,Mt,It.width,It.height,Tt,It.data):A.texSubImage2D(A.TEXTURE_2D,be,rt,Mt,Ie,Te,Tt,He,It);A.pixelStorei(A.UNPACK_ROW_LENGTH,ft),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,bn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Dr),A.pixelStorei(A.UNPACK_SKIP_ROWS,Mn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,As),be===0&&z.generateMipmaps&&A.generateMipmap(yt),ae.unbindTexture()},this.initRenderTarget=function(E){g.get(E).__webglFramebuffer===void 0&&D.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?D.setTextureCube(E,0):E.isData3DTexture?D.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?D.setTexture2DArray(E,0):D.setTexture2D(E,0),ae.unbindTexture()},this.resetState=function(){I=0,F=0,V=null,ae.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=ct._getUnpackColorSpace()}}class pA{data;constructor(e){let n;"bytes"in e?n=mA(e.bytes):n=e.data,this.data=n}get bytes(){return gA(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new _t;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function mA(t){return Qu.decode(t)}function gA(t){return Qu.encode(t).finish()}function ir(t){const e=new U(t.point.x,t.point.y,t.point.z),n=new U(t.xaxis.x,t.xaxis.y,t.xaxis.z),i=new U(t.yaxis.x,t.yaxis.y,t.yaxis.z),r=new U().crossVectors(n,i),s=new _t;return s.makeBasis(n,i,r),s.setPosition(e),s}class Un{data;constructor(e){let n;if("bytes"in e?n=_A(e.bytes):n=e.data,n.x===void 0||n.y===void 0||n.z===void 0)throw new Error("Invalid PointData: Missing required properties (x, y, or z).");this.data=n}get bytes(){return vA(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get x(){return this.data.x}get y(){return this.data.y}get z(){return this.data.z}buildGeometry(){const e=new pt,n=new Float32Array([this.x,this.y,this.z]);e.setAttribute("position",new hn(n,3));const i=new xf({size:.2,color:255});return new Gg(e,i)}}function _A(t){return Be.decode(t)}function vA(t){return Be.encode(t).finish()}class _s{data;constructor(e){let n;if("bytes"in e?n=xA(e.bytes):n=e.data,n.x===void 0||n.y===void 0||n.z===void 0)throw new Error("Invalid VectorData: Missing required properties (x, y, or z).");this.data=n}get bytes(){return yA(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get x(){return this.data.x}get y(){return this.data.y}get z(){return this.data.z}buildGeometry(e){const n=new U(this.x,this.y,this.z),i=n.length();n.normalize();let r;e?r=new U(e.x,e.y,e.z):r=new U(0,0,0);let s=new mb(n,r,i,16711680);return s.setDirection(n),s}}function xA(t){return bt.decode(t)}function yA(t){return bt.encode(t).finish()}class Xn{data;_point;_xaxis;_yaxis;constructor(e){let n;if("bytes"in e?n=SA(e.bytes):n=e.data,!n.point||!n.xaxis||!n.yaxis)throw new Error("Invalid FrameData: Missing required properties (point, xaxis, or yaxis).");this.data=n}get bytes(){return bA(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get point(){return this._point||(this._point=new Un({data:this.data.point})),this._point}get xaxis(){return this._xaxis||(this._xaxis=new _s({data:this.data.xaxis})),this._xaxis}get yaxis(){return this._yaxis||(this._yaxis=new _s({data:this.data.yaxis})),this._yaxis}buildGeometry(){const e=new gb(1);e.setColors(new Ze(16711680),new Ze(65280),new Ze(255));const n=ir(this.data);return e.applyMatrix4(n),e}}function SA(t){return Ve.decode(t)}function bA(t){return Ve.encode(t).finish()}class Zg{data;_frame;constructor(e){let n;if("bytes"in e?n=MA(e.bytes):n=e.data,!n.radius||!n.frame)throw new Error("Invalid CircleData: Missing required properties (radius or frame).");this.data=n}get bytes(){return EA(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get frame(){return this._frame||(this._frame=new Xn({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new Sf(this.data.radius,e),i=ir(this.data.frame);return n.applyMatrix4(i),n}}function MA(t){return $i.decode(t)}function EA(t){return $i.encode(t).finish()}class TA{data;_circle;constructor(e){let n;if("bytes"in e?n=wA(e.bytes):n=e.data,!n.startAngle||!n.endAngle||!n.circle)throw new Error("Invalid ArcData: Missing required properties (startAngle, endAngle, or circle).");this.data=n}get bytes(){return AA(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get startAngle(){return this.data.startAngle}get endAngle(){return this.data.endAngle}get circle(){return this._circle||(this._circle=new Zg({data:this.data.circle})),this._circle}buildGeometry(){throw new Error("Method not implemented.")}}function wA(t){return Bu.decode(t)}function AA(t){return Bu.encode(t).finish()}class RA{data;_points;constructor(e){let n;if("bytes"in e?n=CA(e.bytes):n=e.data,!n.points||n.points.length===0)throw new Error("Invalid BezierData: Missing required property points.");this.data=n}get bytes(){return PA(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const e of this.data.points){const n=new Un({data:e});this._points.push(n)}}return this._points}buildGeometry(){throw Error("Method not implemented.")}}function CA(t){return Gu.decode(t)}function PA(t){return Gu.encode(t).finish()}class DA{data;_frame;constructor(e){let n;if("bytes"in e?n=IA(e.bytes):n=e.data,!n.xsize||!n.ysize||!n.zsize||!n.frame)throw new Error("Invalid BoxData: Missing required properties (xsize, ysize, zsize, or frame).");this.data=n}get bytes(){return LA(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get xsize(){return this.data.xsize}get ysize(){return this.data.ysize}get zsize(){return this.data.zsize}get frame(){return this._frame||(this._frame=new Xn({data:this.data.frame})),this._frame}buildGeometry(){const e=new Pr(this.data.xsize,this.data.ysize,this.data.zsize),n=ir(this.data.frame);return e.applyMatrix4(n),e}}function IA(t){return Xu.decode(t)}function LA(t){return Xu.encode(t).finish()}class NA{data;_frame;constructor(e){let n;if("bytes"in e?n=UA(e.bytes):n=e.data,!n.radius||!n.height||!n.frame)throw new Error("Invalid CapsuleData: Missing required properties (radius, height, or frame).");this.data=n}get bytes(){return OA(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get height(){return this.data.height}get frame(){return this._frame||(this._frame=new Xn({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new yf(this.data.radius,this.data.height,e,e),i=ir(this.data.frame);return n.applyMatrix4(i),n}}function UA(t){return Ju.decode(t)}function OA(t){return Ju.encode(t).finish()}class FA{data;_frame;constructor(e){let n;if("bytes"in e?n=BA(e.bytes):n=e.data,!n.radius||!n.height||!n.frame)throw new Error("Invalid ConeData: Missing required properties (radius, height, or frame).");this.data=n}get bytes(){return kA(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get height(){return this.data.height}get frame(){return this._frame||(this._frame=new Xn({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new Go(this.radius,this.height,e),i=ir(this.data.frame);return n.applyMatrix4(i),n}}function BA(t){return $u.decode(t)}function kA(t){return $u.encode(t).finish()}class zA{data;_frame;constructor(e){let n;if("bytes"in e?n=VA(e.bytes):n=e.data,!n.radius||!n.height||!n.frame)throw new Error("Invalid CylinderData: Missing required properties (radius, height, or frame).");this.data=n}get bytes(){return GA(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get height(){return this.data.height}get frame(){return this._frame||(this._frame=new Xn({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new Vo(this.data.radius,this.data.radius,this.data.height,e),i=ir(this.frame);return n.applyMatrix4(i),n}}function VA(t){return Yu.decode(t)}function GA(t){return Yu.encode(t).finish()}class HA{data;_frame;constructor(e){let n;if("bytes"in e?n=WA(e.bytes):n=e.data,!n.major||!n.minor||!n.frame)throw new Error("Invalid EllipseData: Missing required properties (major, minor, or frame).");this.data=n}get bytes(){return XA(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get major(){return this.data.major}get minor(){return this.data.minor}get frame(){return this._frame||(this._frame=new Xn({data:this.data.frame})),this._frame}buildGeometry(e=64){throw Error("Method not implemented.")}}function WA(t){return ku.decode(t)}function XA(t){return ku.encode(t).finish()}class qA{data;_frame;constructor(e){let n;if("bytes"in e?n=YA(e.bytes):n=e.data,!n.major||!n.minor||!n.frame)throw new Error("Invalid HyperbolaData: Missing required properties (a, b, or frame).");this.data=n}get bytes(){return $A(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get major(){return this.data.major}get minor(){return this.data.minor}get frame(){return this._frame||(this._frame=new Xn({data:this.data.frame})),this._frame}buildGeometry(e=64){throw Error("Method not implemented.")}}function YA(t){return Vu.decode(t)}function $A(t){return Vu.encode(t).finish()}class JA{data;_start;_end;constructor(e){let n;if("bytes"in e?n=KA(e.bytes):n=e.data,!n.start||!n.end)throw new Error("Invalid LineData: Missing required properties (start or end).");this.data=n}get bytes(){return ZA(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get start(){return this._start||(this._start=new Un({data:this.data.start})),this._start}get end(){return this._end||(this._end=new Un({data:this.data.end})),this._end}buildGeometry(){const e=new U(this.data.start.x,this.data.start.y,this.data.start.z),n=new U(this.data.end.x,this.data.end.y,this.data.end.z),i=new pt().setFromPoints([e,n]),r=new Ui({color:255});return new nr(i,r)}}function KA(t){return Fu.decode(t)}function ZA(t){return Fu.encode(t).finish()}class QA{data;_frame;constructor(e){let n;if("bytes"in e?n=jA(e.bytes):n=e.data,!n.focal||!n.frame)throw new Error("Invalid ParabolaData: Missing required properties (focal_length or frame).");this.data=n}get bytes(){return e1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get focal(){return this.data.focal}get frame(){return this._frame||(this._frame=new Xn({data:this.data.frame})),this._frame}buildGeometry(e=64){throw Error("Method not implemented.")}}function jA(t){return zu.decode(t)}function e1(t){return zu.encode(t).finish()}class t1{data;_point;_normal;constructor(e){let n;if("bytes"in e?n=n1(e.bytes):n=e.data,!n.point||!n.normal)throw new Error("Invalid PlaneData: Missing required properties (point or normal).");this.data=n}get bytes(){return i1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get point(){return this._point||(this._point=new Un({data:this.data.point})),this._point}get normal(){return this._normal||(this._normal=new _s({data:this.data.normal})),this._normal}buildGeometry(e=2){const n=new Mi(new U(this.normal.x,this.normal.y,this.normal.z),0);return n.translate(new U(this.point.x,this.point.y,this.point.z)),new pb(n,e,16711935)}}function n1(t){return Uu.decode(t)}function i1(t){return Uu.encode(t).finish()}class r1{data;_points;constructor(e){let n;if("bytes"in e?n=s1(e.bytes):n=e.data,!n.points||n.points.length===0)throw new Error("Invalid PointcloudData: Missing required property points.");this.data=n}get bytes(){return a1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const e of this.data.points){const n=new Un({data:e});this._points.push(n)}}return this._points}buildGeometry(){const e=new pt,n=new Float32Array(this.points.length*3);for(let s=0;s<this.points.length;s++)n[s*3]=this.points[s].x,n[s*3+1]=this.points[s].y,n[s*3+2]=this.points[s].z;e.setAttribute("position",new hn(n,3));const i=new xf({size:.2,color:16711935});return new Gg(e,i)}}function s1(t){return Zu.decode(t)}function a1(t){return Zu.encode(t).finish()}class o1{data;_points;constructor(e){let n;if("bytes"in e?n=l1(e.bytes):n=e.data,!n.points||n.points.length===0)throw new Error("Invalid PolygonData: Missing required property points.");this.data=n}get bytes(){return c1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const e of this.data.points){const n=new Un({data:e});this._points.push(n)}}return this._points}buildGeometry(){throw Error("Method not implemented.")}}function l1(t){return Wu.decode(t)}function c1(t){return Wu.encode(t).finish()}class u1{data;_points;constructor(e){let n;if("bytes"in e?n=f1(e.bytes):n=e.data,!n.points||n.points.length===0)throw new Error("Invalid PolylineData: Missing required property points.");this.data=n}get bytes(){return d1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get points(){if(!this._points){this._points=[];for(const e of this.data.points){const n=new Un({data:e});this._points.push(n)}}return this._points}buildGeometry(){const e=new pt,n=new Float32Array(this.points.length*3);for(let s=0;s<this.points.length;s++)n[s*3]=this.points[s].x,n[s*3+1]=this.points[s].y,n[s*3+2]=this.points[s].z;e.setAttribute("position",new hn(n,3));const i=new Ui({color:0});return new nr(e,i)}}function f1(t){return Hu.decode(t)}function d1(t){return Hu.encode(t).finish()}class h1{data;constructor(e){let n;if("bytes"in e?n=p1(e.bytes):n=e.data,!n.matrix)throw new Error("Invalid ProjectionData: Missing required properties (direction).");this.data=n}get bytes(){return m1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new _t;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function p1(t){return sf.decode(t)}function m1(t){return sf.encode(t).finish()}class g1{data;constructor(e){let n;if("bytes"in e?n=_1(e.bytes):n=e.data,!n.w||!n.x||!n.y||!n.z)throw new Error("Invalid QuaternionData: Missing required properties (w, x, y, or z).");this.data=n}get bytes(){return v1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get w(){return this.data.w}get x(){return this.data.x}get y(){return this.data.y}get z(){return this.data.z}}function _1(t){return Ou.decode(t)}function v1(t){return Ou.encode(t).finish()}class x1{data;constructor(e){let n;if("bytes"in e?n=y1(e.bytes):n=e.data,!n.matrix)throw new Error("Invalid ReflectionData: Missing required properties (frame).");this.data=n}get bytes(){return S1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new _t;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function y1(t){return nf.decode(t)}function S1(t){return nf.encode(t).finish()}class b1{data;_axis;_point;constructor(e){let n;if("bytes"in e?n=M1(e.bytes):n=e.data,!n.axis||!n.point||!n.angle)throw new Error("Invalid RotationData: Missing required properties (axis or point).");this.data=n}get bytes(){return E1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get axis(){return this._axis||(this._axis=new _s({data:this.data.axis})),this._axis}get point(){return this._point||(this._point=new Un({data:this.data.point})),this._point}get angle(){return this.data.angle}}function M1(t){return ef.decode(t)}function E1(t){return ef.encode(t).finish()}class T1{data;constructor(e){let n;if("bytes"in e?n=w1(e.bytes):n=e.data,!n.matrix)throw new Error("Invalid ScaleData: Missing required properties (factor or frame).");this.data=n}get bytes(){return A1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new _t;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function w1(t){return tf.decode(t)}function A1(t){return tf.encode(t).finish()}class R1{data;constructor(e){let n;if("bytes"in e?n=C1(e.bytes):n=e.data,!n.matrix)throw new Error("Invalid ShearData: Missing required properties (matrix).");this.data=n}get bytes(){return P1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get matrix(){return this.data.matrix}buildThreeMatrix(){const e=this.data.matrix,n=new _t;return n.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]),n}}function C1(t){return rf.decode(t)}function P1(t){return rf.encode(t).finish()}class D1{data;_frame;constructor(e){let n;if("bytes"in e?n=I1(e.bytes):n=e.data,!n.radius||!n.frame)throw new Error("Invalid SphereData: Missing required properties (radius or frame).");this.data=n}get bytes(){return L1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radius(){return this.data.radius}get frame(){return this._frame||(this._frame=new Xn({data:this.data.frame})),this._frame}buildGeometry(e=64){const n=new Wo(this.radius,e,e),i=ir(this.data.frame);return n.applyMatrix4(i),n}}function I1(t){return qu.decode(t)}function L1(t){return qu.encode(t).finish()}class N1{data;_frame;constructor(e){let n;if("bytes"in e?n=U1(e.bytes):n=e.data,!n.radiusAxis||!n.radiusPipe||!n.frame)throw new Error("Invalid TorusData: Missing required properties (major, minor, or frame).");this.data=n}get bytes(){return O1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get radiusAxis(){return this.data.radiusAxis}get radiusPipe(){return this.data.radiusPipe}get frame(){return this._frame||(this._frame=new Xn({data:this.data.frame})),this._frame}buildGeometry(e=64,n=64){const i=new bf(this.radiusAxis,this.radiusPipe,e,n),r=ir(this.data.frame);return i.applyMatrix4(r),i}}function U1(t){return Ku.decode(t)}function O1(t){return Ku.encode(t).finish()}class F1{data;_translationVector;constructor(e){let n;if("bytes"in e?n=B1(e.bytes):n=e.data,!n.translationVector)throw new Error("Invalid TranslationData: Missing required properties (vector or frame).");this.data=n}get bytes(){return k1(this.data)}get guid(){return this.data.guid}get name(){return this.data.name}get translationVector(){return this._translationVector||(this._translationVector=new _s({data:this.data.translationVector})),this._translationVector}}function B1(t){return ju.decode(t)}function k1(t){return ju.encode(t).finish()}function Sp(){return{indices:[]}}const Ki={encode(t,e=new je){e.uint32(10).fork();for(const n of t.indices)e.uint32(n);return e.join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Sp();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s===8){r.indices.push(n.uint32());continue}if(s===10){const a=n.uint32()+n.pos;for(;n.pos<a;)r.indices.push(n.uint32());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{indices:globalThis.Array.isArray(t?.indices)?t.indices.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.indices?.length&&(e.indices=t.indices.map(n=>Math.round(n))),e},create(t){return Ki.fromPartial(t??{})},fromPartial(t){const e=Sp();return e.indices=t.indices?.map(n=>n)||[],e}};function bp(){return{guid:void 0,name:void 0,vertices:[],faces:[]}}const Tf={encode(t,e=new je){t.guid!==void 0&&e.uint32(10).string(t.guid),t.name!==void 0&&e.uint32(18).string(t.name);for(const n of t.vertices)Be.encode(n,e.uint32(26).fork()).join();for(const n of t.faces)Ki.encode(n,e.uint32(34).fork()).join();return e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=bp();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.vertices.push(Be.decode(n,n.uint32()));continue}case 4:{if(s!==34)break;r.faces.push(Ki.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:To(t.guid)?globalThis.String(t.guid):void 0,name:To(t.name)?globalThis.String(t.name):void 0,vertices:globalThis.Array.isArray(t?.vertices)?t.vertices.map(e=>Be.fromJSON(e)):[],faces:globalThis.Array.isArray(t?.faces)?t.faces.map(e=>Ki.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==void 0&&(e.guid=t.guid),t.name!==void 0&&(e.name=t.name),t.vertices?.length&&(e.vertices=t.vertices.map(n=>Be.toJSON(n))),t.faces?.length&&(e.faces=t.faces.map(n=>Ki.toJSON(n))),e},create(t){return Tf.fromPartial(t??{})},fromPartial(t){const e=bp();return e.guid=t.guid??void 0,e.name=t.name??void 0,e.vertices=t.vertices?.map(n=>Be.fromPartial(n))||[],e.faces=t.faces?.map(n=>Ki.fromPartial(n))||[],e}};function Mp(){return{vertexIndices:[]}}const Zi={encode(t,e=new je){e.uint32(10).fork();for(const n of t.vertexIndices)e.int32(n);return e.join(),e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Mp();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s===8){r.vertexIndices.push(n.int32());continue}if(s===10){const a=n.uint32()+n.pos;for(;n.pos<a;)r.vertexIndices.push(n.int32());continue}break}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{vertexIndices:globalThis.Array.isArray(t?.vertexIndices)?t.vertexIndices.map(e=>globalThis.Number(e)):globalThis.Array.isArray(t?.vertex_indices)?t.vertex_indices.map(e=>globalThis.Number(e)):[]}},toJSON(t){const e={};return t.vertexIndices?.length&&(e.vertexIndices=t.vertexIndices.map(n=>Math.round(n))),e},create(t){return Zi.fromPartial(t??{})},fromPartial(t){const e=Mp();return e.vertexIndices=t.vertexIndices?.map(n=>n)||[],e}};function Ep(){return{guid:void 0,name:void 0,vertices:[],faces:[]}}const wf={encode(t,e=new je){t.guid!==void 0&&e.uint32(10).string(t.guid),t.name!==void 0&&e.uint32(18).string(t.name);for(const n of t.vertices)Be.encode(n,e.uint32(26).fork()).join();for(const n of t.faces)Zi.encode(n,e.uint32(34).fork()).join();return e},decode(t,e){const n=t instanceof he?t:new he(t),i=e===void 0?n.len:n.pos+e,r=Ep();for(;n.pos<i;){const s=n.uint32();switch(s>>>3){case 1:{if(s!==10)break;r.guid=n.string();continue}case 2:{if(s!==18)break;r.name=n.string();continue}case 3:{if(s!==26)break;r.vertices.push(Be.decode(n,n.uint32()));continue}case 4:{if(s!==34)break;r.faces.push(Zi.decode(n,n.uint32()));continue}}if((s&7)===4||s===0)break;n.skip(s&7)}return r},fromJSON(t){return{guid:To(t.guid)?globalThis.String(t.guid):void 0,name:To(t.name)?globalThis.String(t.name):void 0,vertices:globalThis.Array.isArray(t?.vertices)?t.vertices.map(e=>Be.fromJSON(e)):[],faces:globalThis.Array.isArray(t?.faces)?t.faces.map(e=>Zi.fromJSON(e)):[]}},toJSON(t){const e={};return t.guid!==void 0&&(e.guid=t.guid),t.name!==void 0&&(e.name=t.name),t.vertices?.length&&(e.vertices=t.vertices.map(n=>Be.toJSON(n))),t.faces?.length&&(e.faces=t.faces.map(n=>Zi.toJSON(n))),e},create(t){return wf.fromPartial(t??{})},fromPartial(t){const e=Ep();return e.guid=t.guid??void 0,e.name=t.name??void 0,e.vertices=t.vertices?.map(n=>Be.fromPartial(n))||[],e.faces=t.faces?.map(n=>Zi.fromPartial(n))||[],e}};function To(t){return t!=null}class z1{data;constructor(e){let n;if("bytes"in e?n=V1(e.bytes):n=e.data,!n.vertexIndices)throw new Error("Invalid FaceData: Missing required property 'vertices'.");this.data=n}get bytes(){return G1(this.data)}get vertexIndices(){return this.data.vertexIndices}}function V1(t){return Zi.decode(t)}function G1(t){return Zi.encode(t).finish()}class H1{data;_points;_faces;constructor(e){let n;if("bytes"in e?n=W1(e.bytes):n=e.data,!n.vertices||!n.faces)throw new Error("Invalid PolyhedronData: Missing required properties (vertices or faces).");this.data=n}get bytes(){return X1(this.data)}get guid(){return this.data.guid?this.data.guid:""}get name(){return this.data.name?this.data.name:""}get vertices(){if(!this._points){this._points=[];for(const e of this.data.vertices){const n=new Un({data:e});this._points.push(n)}}return this._points}get faces(){if(!this._faces){this._faces=[];for(const e of this.data.faces){const n=new z1({data:e});this._faces.push(n)}}return this._faces}buildGeometry(){const e=new pt,n=new Float32Array(this.vertices.length*3);for(let a=0;a<this.vertices.length;a++){const o=this.vertices[a];n[a*3]=o.x,n[a*3+1]=o.y,n[a*3+2]=o.z}const i=[];for(const a of this.faces){const o=a.vertexIndices;for(let l=1;l<o.length-1;l++)i.push(o[0],o[l],o[l+1])}e.setIndex(i),e.setAttribute("position",new hn(n,3)),e.computeVertexNormals();const r=new Xo({color:52292,side:wn});return new $t(e,r)}}function W1(t){return wf.decode(t)}function X1(t){return wf.encode(t).finish()}class q1{data;constructor(e){let n;if("bytes"in e?n=Y1(e.bytes):n=e.data,!n.indices)throw new Error("Invalid FaceList: Missing required property 'faces'.");this.data=n}get bytes(){return $1(this.data)}get indices(){return this.data.indices}}function Y1(t){return Ki.decode(t)}function $1(t){return Ki.encode(t).finish()}class J1{data;_vertices;constructor(e){let n;if("bytes"in e?n=K1(e.bytes):n=e.data,!n.vertices||!n.faces)throw new Error("Invalid MeshData: Missing required properties (vertices or faces).");this.data=n}get bytes(){return Z1(this.data)}get guid(){return this.data.guid?this.data.guid:""}get name(){return this.data.name?this.data.name:""}get vertices(){if(!this._vertices){this._vertices=[];for(const e of this.data.vertices){const n=new Un({data:e});this._vertices.push(n)}}return this._vertices}get faces(){const e=[];for(const n of this.data.faces){const i=new q1({data:n});e.push(i)}return e}buildGeometry(){const e=new pt,n=new Float32Array(this.vertices.length*3);this.vertices.forEach((s,a)=>{n[a*3]=s.x,n[a*3+1]=s.y,n[a*3+2]=s.z});const i=[];for(const s of this.faces){const a=s.indices;for(let o=1;o<a.length-1;o++)i.push(a[0],a[o],a[o+1])}e.setIndex(i),e.setAttribute("position",new hn(n,3)),e.computeVertexNormals();const r=new Xo({color:30719,flatShading:!0,side:wn});return new $t(e,r)}}function K1(t){return Tf.decode(t)}function Z1(t){return Tf.encode(t).finish()}class Qg{data;constructor(e){let n;"bytes"in e?n=Q1(e.bytes):n=e.data,this.data=n}get bytes(){return j1(this.data)}get asDict(){const e={};for(const n in this.data.items)Object.prototype.hasOwnProperty.call(this.data.items,n)&&(e[n]=this.data.items[n]);return e}}function Q1(t){return Yi.decode(t)}function j1(t){return Yi.encode(t).finish()}const eR=new Map([["ArcData",TA],["BezierData",RA],["BoxData",DA],["CapsuleData",NA],["CircleData",Zg],["ConeData",FA],["CylinderData",zA],["EllipseData",HA],["FrameData",Xn],["HyperbolaData",qA],["LineData",JA],["ParabolaData",QA],["PlaneData",t1],["PointData",Un],["PointcloudData",r1],["PolygonData",o1],["PolylineData",u1],["ProjectionData",h1],["QuaternionData",g1],["ReflectionData",x1],["RotationData",b1],["ScaleData",T1],["ShearData",R1],["SphereData",D1],["TorusData",N1],["TransformationData",pA],["TranslationData",F1],["VectorData",_s],["MeshData",J1],["PolyhedronData",H1],["DictData",Qg]]);function tR(t){const e=jg(t),n=nR(e);return n?new n({bytes:e.value}):null}function jg(t){return dg.decode(t).data.message}function nR(t){const n=t.typeUrl.split(".").slice(-1)[0];return eR.get(n)||null}const Tp={type:"change"},Af={type:"start"},e0={type:"end"},Qa=new zo,wp=new Mi,iR=Math.cos(70*iu.DEG2RAD),Vt=new U,gn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jl=1e-6;class rR extends _b{constructor(e,n=null){super(e,n),this.state=Et.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ss.ROTATE,MIDDLE:ss.DOLLY,RIGHT:ss.PAN},this.touches={ONE:Qr.ROTATE,TWO:Qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Tr,this._lastTargetPosition=new U,this._quat=new Tr().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qh,this._sphericalDelta=new qh,this._scale=1,this._panOffset=new U,this._rotateStart=new Je,this._rotateEnd=new Je,this._rotateDelta=new Je,this._panStart=new Je,this._panEnd=new Je,this._panDelta=new Je,this._dollyStart=new Je,this._dollyEnd=new Je,this._dollyDelta=new Je,this._dollyDirection=new U,this._mouse=new Je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=aR.bind(this),this._onPointerDown=sR.bind(this),this._onPointerUp=oR.bind(this),this._onContextMenu=pR.bind(this),this._onMouseWheel=uR.bind(this),this._onKeyDown=fR.bind(this),this._onTouchStart=dR.bind(this),this._onTouchMove=hR.bind(this),this._onMouseDown=lR.bind(this),this._onMouseMove=cR.bind(this),this._interceptControlDown=mR.bind(this),this._interceptControlUp=gR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tp),this.update(),this.state=Et.NONE}update(e=null){const n=this.object.position;Vt.copy(n).sub(this.target),Vt.applyQuaternion(this._quat),this._spherical.setFromVector3(Vt),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=gn:i>Math.PI&&(i-=gn),r<-Math.PI?r+=gn:r>Math.PI&&(r-=gn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Vt.setFromSpherical(this._spherical),Vt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Vt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Qa.origin.copy(this.object.position),Qa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qa.direction))<iR?this.object.lookAt(this.target):(wp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qa.intersectPlane(wp,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Jl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jl||this._lastTargetPosition.distanceToSquared(this.target)>Jl?(this.dispatchEvent(Tp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gn/60*this.autoRotateSpeed*e:gn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Vt.setFromMatrixColumn(n,0),Vt.multiplyScalar(-e),this._panOffset.add(Vt)}_panUp(e,n){this.screenSpacePanning===!0?Vt.setFromMatrixColumn(n,1):(Vt.setFromMatrixColumn(n,0),Vt.crossVectors(this.object.up,Vt)),Vt.multiplyScalar(e),this._panOffset.add(Vt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Vt.copy(r).sub(this.target);let s=Vt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/n.clientHeight),this._rotateUp(gn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/n.clientHeight),this._rotateUp(gn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Je,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function sR(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function aR(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function oR(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(e0),this.state=Et.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function lR(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ss.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Et.DOLLY;break;case ss.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Et.ROTATE}break;case ss.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Af)}function cR(t){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function uR(t){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(t.preventDefault(),this.dispatchEvent(Af),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(e0))}function fR(t){this.enabled!==!1&&this._handleKeyDown(t)}function dR(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Qr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Et.TOUCH_ROTATE;break;case Qr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case Qr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Et.TOUCH_DOLLY_PAN;break;case Qr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Af)}function hR(t){switch(this._trackPointer(t),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Et.NONE}}function pR(t){this.enabled!==!1&&t.preventDefault()}function mR(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gR(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const kt=new JS,ua=new xn(60,window.innerWidth/window.innerHeight,.1,1e3);ua.position.set(10,10,15);const qn=new hA({antialias:!0});qn.setSize(window.innerWidth,window.innerHeight);qn.setPixelRatio(window.devicePixelRatio);qn.toneMapping=of;qn.shadowMap.enabled=!0;qn.shadowMap.type=hg;qn.toneMappingExposure=2.5;document.body.appendChild(qn.domElement);const Rf=new rR(ua,qn.domElement);Rf.enableDamping=!0;function t0(){requestAnimationFrame(t0),Rf.update(),qn.render(kt,ua)}t0();window.addEventListener("resize",()=>{ua.aspect=window.innerWidth/window.innerHeight,ua.updateProjectionMatrix(),qn.setSize(window.innerWidth,window.innerHeight)});function _R(t){switch(t.type.value){case"background_color":vR(t);break;case"controls_damping":Rf.enableDamping=t.damping.value;break;default:console.warn("Unknown scene type:",t.type.value)}}function vR(t){let e=t.color.value;e=e.replace("#","0x"),e=parseInt(e),kt.background=new Ze(e)}class xR extends nr{constructor(e,n){const i=[1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],r=new pt;r.setAttribute("position",new ot(i,3)),r.computeBoundingSphere();const s=new Ui({fog:!1});super(r,s),this.light=e,this.color=n,this.type="RectAreaLightHelper";const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],o=new pt;o.setAttribute("position",new ot(a,3)),o.computeBoundingSphere(),this.add(new $t(o,new Ts({side:rn,fog:!1})))}updateMatrixWorld(){if(this.scale.set(.5*this.light.width,.5*this.light.height,1),this.color!==void 0)this.material.color.set(this.color),this.children[0].material.color.set(this.color);else{this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);const e=this.material.color,n=Math.max(e.r,e.g,e.b);n>1&&e.multiplyScalar(1/n),this.children[0].material.color.copy(this.material.color)}this.matrixWorld.extractRotation(this.light.matrixWorld).scale(this.scale).copyPosition(this.light.matrixWorld),this.children[0].matrixWorld.copy(this.matrixWorld)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}class $o extends $t{constructor(){const e=$o.SkyShader,n=new Wn({name:e.name,uniforms:Fg.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:rn,depthWrite:!1});super(new Pr(1,1,1),n),this.isSky=!0}}$o.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},up:{value:new U(0,1,0)}},vertexShader:`
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

		}`};const Lt={},Nn={};function Ap(t){t.type.value=="point_light"?yR(t):t.type.value=="spot_light"?SR(t):t.type.value=="rect_light"?bR(t):t.type.value=="sunlight"?MR(t):t.type.value=="sky"?ER(t):t.type.value=="ambient_light"&&TR(t)}function yR(t){let e,n;Lt[t.guid.value]?e=Lt[t.guid.value]:(e=new ob,kt.add(e));let i=t.color.value;i=i.replace("#","0x"),i=parseInt(i),e.color.set(i),e.intensity=t.intensity.value,e.distance=t.distance.value,e.decay=t.decay.value,e.position.set(t.x.value,t.y.value,t.z.value),e.castShadow=!0,e.shadow.bias=-.002,e.shadow.normalBias=.02,Nn[t.guid.value]&&t.helper.value?(n=Nn[t.guid.value],n.update()):t.helper.value&&(n=new db(e,.5),kt.add(n)),Lt[t.guid.value]=e,n&&(Nn[t.guid.value]=n)}function SR(t){let e,n;Lt[t.guid.value]?(e=Lt[t.guid.value],kt.remove(e.target)):(e=new sb,kt.add(e));let i=t.color.value;i=i.replace("#","0x"),i=parseInt(i),e.color.set(i),e.intensity=t.intensity.value,e.distance=t.distance.value,e.angle=t.angle.value,e.penumbra=t.penumbra.value,e.decay=t.decay.value,e.position.set(t.x.value,t.y.value,t.z.value);const r=new Pt;r.position.set(t.tx.value,t.ty.value,t.tz.value),kt.add(r),e.target=r,kt.remove(r),e.castShadow=!0,e.shadow.bias=-.002,e.shadow.normalBias=.02,Nn[t.guid.value]&&t.helper.value?(n=Nn[t.guid.value],n.update()):t.helper.value&&(n=new fb(e),kt.add(n)),Lt[t.guid.value]=e,n&&(Nn[t.guid.value]=n)}function bR(t){let e,n;Lt[t.guid.value]?e=Lt[t.guid.value]:(e=new cb,kt.add(e));let i=t.color.value;i=i.replace("#","0x"),i=parseInt(i),e.color.set(i),e.intensity=t.intensity.value,e.width=t.width.value,e.height=t.height.value,e.position.set(t.x.value,t.y.value,t.z.value),e.lookAt(t.tx.value,t.ty.value,t.tz.value),Nn[t.guid.value]&&t.helper.value?n=Nn[t.guid.value]:t.helper.value&&(n=new xR(e),kt.add(n)),Lt[t.guid.value]=e,n&&(Nn[t.guid.value]=n)}function MR(t){let e,n;Lt[t.guid.value]?e=Lt[t.guid.value]:(e=new Wg,kt.add(e));let i=t.color.value;if(i=i.replace("#","0x"),i=parseInt(i),e.color.set(i),e.intensity=t.intensity.value,e.position.set(t.x.value,t.y.value,t.z.value),e.target.position.set(t.tx.value,t.ty.value,t.tz.value),e.castShadow=!0,Nn[t.guid.value]&&t.helper.value)n=Nn[t.guid.value],n.update();else if(t.helper.value){const r=new hb(e);kt.add(r)}Lt[t.guid.value]=e,n&&(Nn[t.guid.value]=n)}function ER(t){let e,n,i;Lt[t.guid.value]?(e=Lt[t.guid.value],n=Lt[t.guid.value+"_sun"],i=Lt[t.guid.value+"_ambient"]):(e=new $o,n=new Wg(16777215,1),i=new Xg(16777215,.6),kt.add(e),kt.add(n),kt.add(i)),e.scale.setScalar(1e3),e.material.uniforms.turbidity.value=t.turbidity.value,e.material.uniforms.rayleigh.value=t.rayleigh.value,e.material.uniforms.mieCoefficient.value=t.mie_coefficient.value,e.material.uniforms.mieDirectionalG.value=t.mie_directional_g.value;let r=new U;const s=iu.degToRad(90-t.elevation.value),a=iu.degToRad(t.azimuth.value);r.setFromSphericalCoords(1,s,a),e.material.uniforms.sunPosition.value=r,n.position.copy(e.material.uniforms.sunPosition.value),n.color.copy(Rp(t.elevation.value)),i.color.copy(Rp(t.elevation.value)).multiplyScalar(.6),Lt[t.guid.value]=e,Lt[t.guid.value+"_sun"]=n,Lt[t.guid.value+"_ambient"]=i}function Rp(t){if(t>10)return new Ze(16777215);if(t>0){const e=t/10;return new Ze(16777164).lerp(new Ze(16777215),e)}if(t>-5){const e=(t+5)/5;return new Ze(16764006).lerp(new Ze(16777164),e)}return new Ze(16764006)}function TR(t){let e;Lt[t.guid.value]?e=Lt[t.guid.value]:(e=new Xg,kt.add(e));let n=t.color.value;n=n.replace("#","0x"),n=parseInt(n),e.color.set(n),e.intensity=t.intensity.value,Lt[t.guid.value]=e}const ou={},n0={};function Cp(t){let e;e=wR(t),n0[t.guid.value]=e,PR(t.geometry_guid.value,e),ou[t.geometry_guid.value]=t.guid.value}function wR(t){let e=t.color.value;e=e.replace("#","0x");let n=t.emissive.value;return n=n.replace("#","0x"),new Xo({color:parseInt(e),metalness:t.metalness.value,roughness:t.roughness.value,emissive:parseInt(n),emissiveIntensity:t.emissive_intensity.value,flatShading:t.flat_shading.value,wireframe:t.wireframe.value,side:wn})}const ls={};function AR(t){const e=t.guid;if(e in ls){const i=ls[e];kt.remove(i),delete ls[e]}const n=t.buildGeometry();RR(n,e)}function RR(t,e){t instanceof pt?CR(t,e):(kt.add(t),ls[e]=t)}function CR(t,e){let n;if(ou[e]){const r=ou[e];n=n0[r]}else n=new Xo({color:39423,side:wn});const i=new $t(t,n);kt.add(i),ls[e]=i}function PR(t,e){const n=ls[t];n&&n instanceof $t&&(n.material=e)}function DR(t){jg(t);const e=tR(t);if(e instanceof Qg){IR(e);return}else AR(e)}function IR(t){const e=t.data.items;switch(e.dispatch.value){case"material":Cp(e);break;case"light":Ap(e);break;case"scene":_R(e);break;case"ui":FR(e);break;default:console.warn("Unknown dispatch value:",e.dispatch.value)}e.dispatch.value=="material"?Cp(e):e.dispatch.value=="light"&&Ap(e)}let Ei=null;function LR(){const t=()=>{Ei=new WebSocket("ws://127.0.0.1:9001/ws"),Ei.binaryType="arraybuffer",Ei.onopen=()=>{sessionStorage.getItem("reloaded")||(sessionStorage.setItem("reloaded","true"),window.location.reload())},Ei.onmessage=e=>{if(e.data instanceof ArrayBuffer){const n=new Uint8Array(e.data);DR(n)}else console.warn("❓ Received non-binary data:",e.data)},Ei.onerror=e=>{console.error("WebSocket error:",e)},Ei.onclose=()=>{sessionStorage.removeItem("reloaded"),setTimeout(t,1e3)}};t()}function NR(t){Ei&&Ei.readyState===WebSocket.OPEN?Ei.send(t):console.error("WebSocket is not open. Unable to send message.")}function UR(t){try{const e=JSON.stringify(t),n=OR(e);NR(n)}catch{}}function OR(t){return new TextEncoder().encode(t).buffer}const Cf=cs([]);function FR(t){const e=t.type.value;switch(e){case"button":BR(t);break;case"slider":kR(t);break;default:console.warn("Unknown component type:",e)}}function BR(t){const e={id:Date.now(),component:"Button",label:t.label?.value,props:{text:t.text.value,variant:t.variant.value},action:t.guid.value};Cf.push(e)}function kR(t){const e={id:Date.now(),component:"Slider",label:t.label?.value,props:{min:t.min.value,max:t.max.value,step:t.step.value,defaultValue:[t.default_value.value]},action:t.guid.value};Cf.push(e)}function Pp(t,e){const n={action:t};e!==void 0&&(n.value=e),UR(n)}const zR={class:"fixed-sidebar"},VR={key:0,class:"dynamic-label"},GR={key:2,class:"slider-container"},HR={key:0,class:"slider-value"},WR=Ht({__name:"Sidebar",setup(t){return(e,n)=>(mt(),Qn("div",zR,[(mt(!0),Qn(Yt,null,Eu(ye(Cf),i=>(mt(),Qn("div",{key:i.id,class:"dynamic-item"},[i.label?(mt(),Qn("label",VR,eo(i.label),1)):Js("",!0),i.component==="Button"?(mt(),Ot(ye(py),{key:1,variant:i.props.variant,onClick:r=>ye(Pp)(i.action)},{default:sn(()=>[Um(eo(i.props.text),1)]),_:2},1032,["variant","onClick"])):i.component==="Slider"?(mt(),Qn("div",GR,[Gt(ye(gy),{min:i.props.min,max:i.props.max,step:i.props.step,"default-value":i.props.defaultValue,modelValue:i.props.defaultValue,"onUpdate:modelValue":[r=>i.props.defaultValue=r,r=>ye(Pp)(i.action,r)],class:"w-[80%]"},null,8,["min","max","step","default-value","modelValue","onUpdate:modelValue"]),i.props.defaultValue?(mt(),Qn("span",HR,eo(i.props.defaultValue[0]),1)):Js("",!0)])):Js("",!0)]))),128))]))}}),XR=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},qR=XR(WR,[["__scopeId","data-v-64cf3b8c"]]),YR=Ht({__name:"App",setup(t){const e=nn(null);return ha(()=>{e.value&&(e.value.appendChild(qn.domElement),LR())}),(n,i)=>(mt(),Qn(Yt,null,[Gt(qR),Au("div",{ref_key:"threeContainer",ref:e,class:"three-container"},null,512)],64))}}),$R=Iv(YR);$R.mount("#app");
