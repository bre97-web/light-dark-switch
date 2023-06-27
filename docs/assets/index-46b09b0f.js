(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=i=>e=>typeof e=="function"?((t,s)=>(customElements.define(t,s),s))(i,e):((t,s)=>{const{kind:r,elements:o}=s;return{kind:r,elements:o,finisher(n){customElements.define(t,n)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},Ue=(i,e,t)=>{e.constructor.createProperty(t,i)};function p(i){return(e,t)=>t!==void 0?Ue(i,e,t):De(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Se(i){return p({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=({finisher:i,descriptor:e})=>(t,s)=>{var r;if(s===void 0){const o=(r=t.originalKey)!==null&&r!==void 0?r:t.key,n=e!=null?{kind:"method",placement:"prototype",key:o,descriptor:e(t.key)}:{...t,key:o};return i!=null&&(n.finisher=function(l){i(l,o)}),n}{const o=t.constructor;e!==void 0&&Object.defineProperty(t,s,e(s)),i==null||i(o,s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function de(i,e){return He({descriptor:t=>{const s={get(){var r,o;return(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;s.get=function(){var o,n;return this[r]===void 0&&(this[r]=(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(i))!==null&&n!==void 0?n:null),this[r]}}return s}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;((K=window.HTMLSlotElement)===null||K===void 0?void 0:K.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=window,he=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ue=Symbol(),ve=new WeakMap;let Te=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==ue)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(he&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=ve.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ve.set(t,e))}return e}toString(){return this.cssText}};const Fe=i=>new Te(typeof i=="string"?i:i+"",void 0,ue),M=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new Te(t,i,ue)},je=(i,e)=>{he?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const s=document.createElement("style"),r=j.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)})},fe=he?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Fe(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z;const G=window,me=G.trustedTypes,Ve=me?me.emptyScript:"",_e=G.reactiveElementPolyfillSupport,se={toAttribute(i,e){switch(e){case Boolean:i=i?Ve:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Pe=(i,e)=>e!==i&&(e==e||i==i),X={attribute:!0,type:String,converter:se,reflect:!1,hasChanged:Pe},re="finalized";let C=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,s)=>{const r=this._$Ep(s,t);r!==void 0&&(this._$Ev.set(r,s),e.push(r))}),e}static createProperty(e,t=X){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||X}static finalize(){if(this.hasOwnProperty(re))return!1;this[re]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of s)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(fe(r))}else e!==void 0&&t.push(fe(e));return t}static _$Ep(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return je(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t,s=X){var r;const o=this.constructor._$Ep(e,s);if(o!==void 0&&s.reflect===!0){const n=(((r=s.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?s.converter:se).toAttribute(t,s.type);this._$El=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(e,t){var s;const r=this.constructor,o=r._$Ev.get(e);if(o!==void 0&&this._$El!==o){const n=r.getPropertyOptions(o),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?n.converter:se;this._$El=o,this[o]=l.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,s){let r=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||Pe)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,o)=>this[o]=r),this._$Ei=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(s)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdated)===null||r===void 0?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,s)=>this._$EO(s,this[s],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};C[re]=!0,C.elementProperties=new Map,C.elementStyles=[],C.shadowRootOptions={mode:"open"},_e==null||_e({ReactiveElement:C}),((Z=G.reactiveElementVersions)!==null&&Z!==void 0?Z:G.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J;const q=window,x=q.trustedTypes,be=x?x.createPolicy("lit-html",{createHTML:i=>i}):void 0,ie="$lit$",g=`lit$${(Math.random()+"").slice(9)}$`,Re="?"+g,Ge=`<${Re}>`,k=document,z=()=>k.createComment(""),N=i=>i===null||typeof i!="object"&&typeof i!="function",Ie=Array.isArray,qe=i=>Ie(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Q=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,we=/>/g,$=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ge=/'/g,$e=/"/g,Oe=/^(?:script|style|textarea|title)$/i,We=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),m=We(1),E=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Ae=new WeakMap,A=k.createTreeWalker(k,129,null,!1),Ye=(i,e)=>{const t=i.length-1,s=[];let r,o=e===2?"<svg>":"",n=O;for(let a=0;a<t;a++){const c=i[a];let y,d,h=-1,_=0;for(;_<c.length&&(n.lastIndex=_,d=n.exec(c),d!==null);)_=n.lastIndex,n===O?d[1]==="!--"?n=ye:d[1]!==void 0?n=we:d[2]!==void 0?(Oe.test(d[2])&&(r=RegExp("</"+d[2],"g")),n=$):d[3]!==void 0&&(n=$):n===$?d[0]===">"?(n=r??O,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,y=d[1],n=d[3]===void 0?$:d[3]==='"'?$e:ge):n===$e||n===ge?n=$:n===ye||n===we?n=O:(n=$,r=void 0);const H=n===$&&i[a+1].startsWith("/>")?" ":"";o+=n===O?c+Ge:h>=0?(s.push(y),c.slice(0,h)+ie+c.slice(h)+g+H):c+g+(h===-2?(s.push(void 0),a):H)}const l=o+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[be!==void 0?be.createHTML(l):l,s]};class L{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let o=0,n=0;const l=e.length-1,a=this.parts,[c,y]=Ye(e,t);if(this.el=L.createElement(c,s),A.currentNode=this.el.content,t===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(r=A.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes()){const d=[];for(const h of r.getAttributeNames())if(h.endsWith(ie)||h.startsWith(g)){const _=y[n++];if(d.push(h),_!==void 0){const H=r.getAttribute(_.toLowerCase()+ie).split(g),F=/([.?@])?(.*)/.exec(_);a.push({type:1,index:o,name:F[2],strings:H,ctor:F[1]==="."?Ze:F[1]==="?"?Je:F[1]==="@"?Qe:Y})}else a.push({type:6,index:o})}for(const h of d)r.removeAttribute(h)}if(Oe.test(r.tagName)){const d=r.textContent.split(g),h=d.length-1;if(h>0){r.textContent=x?x.emptyScript:"";for(let _=0;_<h;_++)r.append(d[_],z()),A.nextNode(),a.push({type:2,index:++o});r.append(d[h],z())}}}else if(r.nodeType===8)if(r.data===Re)a.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(g,d+1))!==-1;)a.push({type:7,index:o}),d+=g.length-1}o++}}static createElement(e,t){const s=k.createElement("template");return s.innerHTML=e,s}}function S(i,e,t=i,s){var r,o,n,l;if(e===E)return e;let a=s!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[s]:t._$Cl;const c=N(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),c===void 0?a=void 0:(a=new c(i),a._$AT(i,t,s)),s!==void 0?((n=(l=t)._$Co)!==null&&n!==void 0?n:l._$Co=[])[s]=a:t._$Cl=a),a!==void 0&&(e=S(i,a._$AS(i,e.values),a,s)),e}class Ke{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:s},parts:r}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:k).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),l=0,a=0,c=r[0];for(;c!==void 0;){if(l===c.index){let y;c.type===2?y=new B(n,n.nextSibling,this,e):c.type===1?y=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(y=new et(n,this,e)),this._$AV.push(y),c=r[++a]}l!==(c==null?void 0:c.index)&&(n=A.nextNode(),l++)}return A.currentNode=k,o}v(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class B{constructor(e,t,s,r){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cp=(o=r==null?void 0:r.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),N(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):qe(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==u&&N(this._$AH)?this._$AA.nextSibling.data=e:this.$(k.createTextNode(e)),this._$AH=e}g(e){var t;const{values:s,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=L.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.v(s);else{const n=new Ke(o,this),l=n.u(this.options);n.v(s),this.$(l),this._$AH=n}}_$AC(e){let t=Ae.get(e.strings);return t===void 0&&Ae.set(e.strings,t=new L(e)),t}T(e){Ie(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,r=0;for(const o of e)r===t.length?t.push(s=new B(this.k(z()),this.k(z()),this,this.options)):s=t[r],s._$AI(o),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Y{constructor(e,t,s,r,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,r){const o=this.strings;let n=!1;if(o===void 0)e=S(this,e,t,0),n=!N(e)||e!==this._$AH&&e!==E,n&&(this._$AH=e);else{const l=e;let a,c;for(e=o[0],a=0;a<o.length-1;a++)c=S(this,l[s+a],t,a),c===E&&(c=this._$AH[a]),n||(n=!N(c)||c!==this._$AH[a]),c===u?e=u:e!==u&&(e+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!r&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ze extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}const Xe=x?x.emptyScript:"";class Je extends Y{constructor(){super(...arguments),this.type=4}j(e){e&&e!==u?this.element.setAttribute(this.name,Xe):this.element.removeAttribute(this.name)}}class Qe extends Y{constructor(e,t,s,r,o){super(e,t,s,r,o),this.type=5}_$AI(e,t=this){var s;if((e=(s=S(this,e,t,0))!==null&&s!==void 0?s:u)===E)return;const r=this._$AH,o=e===u&&r!==u||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==u&&(r===u||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}}class et{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}}const ke=q.litHtmlPolyfillSupport;ke==null||ke(L,B),((J=q.litHtmlVersions)!==null&&J!==void 0?J:q.litHtmlVersions=[]).push("2.7.4");const tt=(i,e,t)=>{var s,r;const o=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:e;let n=o._$litPart$;if(n===void 0){const l=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=n=new B(e.insertBefore(z(),l),l,void 0,t??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ee,te;class w extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=tt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return E}}w.finalized=!0,w._$litElement$=!0,(ee=globalThis.litElementHydrateSupport)===null||ee===void 0||ee.call(globalThis,{LitElement:w});const Ee=globalThis.litElementPolyfillSupport;Ee==null||Ee({LitElement:w});((te=globalThis.litElementVersions)!==null&&te!==void 0?te:globalThis.litElementVersions=[]).push("3.3.2");function f(i,e,t,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,s);else for(var l=i.length-1;l>=0;l--)(n=i[l])&&(o=(r<3?n(o):r>3?n(e,t,o):n(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ze=Symbol("attachableController");let V;V=new MutationObserver(i=>{var e;for(const t of i)(e=t.target[ze])==null||e.hostConnected()});class Ne{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){e===null?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?!this.htmlFor||!this.host.isConnected?null:this.host.getRootNode().querySelector(`#${this.htmlFor}`):this.currentControl||this.host.parentElement}constructor(e,t){this.host=e,this.onControlChange=t,this.currentControl=null,e.addController(this),e[ze]=this,V==null||V.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const st=["focusin","focusout","pointerdown"];class pe extends w{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Ne(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}handleEvent(e){var t;if(!e[Ce]){switch(e.type){default:return;case"focusin":this.visible=((t=this.control)==null?void 0:t.matches(":focus-visible"))??!1;break;case"focusout":case"pointerdown":this.visible=!1;break}e[Ce]=!0}}onControlChange(e,t){for(const s of st)e==null||e.removeEventListener(s,this),t==null||t.addEventListener(s,this)}}f([p({type:Boolean,reflect:!0})],pe.prototype,"visible",void 0);f([p({type:Boolean,reflect:!0})],pe.prototype,"inward",void 0);const Ce=Symbol("handledByFocusRing");/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const rt=M`:host{--_active-width: var(--md-focus-ring-active-width, 8px);--_color: var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));--_duration: var(--md-focus-ring-duration, 600ms);--_inward-offset: var(--md-focus-ring-inward-offset, 0px);--_outward-offset: var(--md-focus-ring-outward-offset, 2px);--_shape: var(--md-focus-ring-shape, 9999px);--_width: var(--md-focus-ring-width, 3px);--_shape-start-start: var(--md-focus-ring-shape-start-start, var(--_shape));--_shape-start-end: var(--md-focus-ring-shape-start-end, var(--_shape));--_shape-end-end: var(--md-focus-ring-shape-end-end, var(--_shape));--_shape-end-start: var(--md-focus-ring-shape-end-start, var(--_shape));animation-delay:0s,calc(var(--_duration)*.25);animation-duration:calc(var(--_duration)*.25),calc(var(--_duration)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--_color);display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--_shape-end-end) + var(--_outward-offset));border-end-start-radius:calc(var(--_shape-end-start) + var(--_outward-offset));border-start-end-radius:calc(var(--_shape-start-end) + var(--_outward-offset));border-start-start-radius:calc(var(--_shape-start-start) + var(--_outward-offset));inset:calc(-1*(var(--_outward-offset)));outline:var(--_width) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--_shape-end-end) - var(--_inward-offset));border-end-start-radius:calc(var(--_shape-end-start) - var(--_inward-offset));border-start-end-radius:calc(var(--_shape-start-end) - var(--_inward-offset));border-start-start-radius:calc(var(--_shape-start-start) - var(--_inward-offset));border:var(--_width) solid currentColor;inset:var(--_inward-offset)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--_active-width)}}@keyframes outward-shrink{from{outline-width:var(--_active-width)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--_active-width)}}@keyframes inward-shrink{from{border-width:var(--_active-width)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let oe=class extends pe{};oe.styles=[rt];oe=f([R("md-focus-ring")],oe);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const it=M`@media(forced-colors: active){:host{--md-switch-disabled-selected-icon-color: GrayText;--md-switch-disabled-selected-icon-opacity: 1;--md-switch-disabled-selected-track-color: GrayText;--md-switch-disabled-track-opacity: 1;--md-switch-disabled-unselected-handle-color: GrayText;--md-switch-disabled-unselected-handle-opacity: 1;--md-switch-disabled-unselected-icon-color: Canvas;--md-switch-disabled-unselected-icon-opacity: 1;--md-switch-selected-focus-track-color: ButtonText;--md-switch-selected-hover-track-color: ButtonText;--md-switch-selected-icon-color: ButtonText;--md-switch-selected-hover-icon-color: ButtonText;--md-switch-selected-focus-icon-color: ButtonText;--md-switch-selected-pressed-icon-color: ButtonText;--md-switch-selected-pressed-track-color: ButtonText;--md-switch-selected-track-color: ButtonText;--md-switch-unselected-focus-handle-color: ButtonText;--md-switch-unselected-handle-color: ButtonText;--md-switch-unselected-hover-handle-color: ButtonText;--md-switch-unselected-icon-color: Canvas;--md-switch-unselected-hover-icon-color: Canvas;--md-switch-unselected-focus-icon-color: Canvas;--md-switch-unselected-pressed-icon-color: Canvas;--md-switch-unselected-pressed-handle-color: ButtonText}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},nt=i=>(...e)=>({_$litDirective$:i,values:e});class at{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=nt(class extends at{constructor(i){var e;if(super(i),i.type!==ot.ATTRIBUTE||i.name!=="class"||((e=i.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var t,s;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!(!((t=this.nt)===null||t===void 0)&&t.has(o))&&this.it.add(o);return this.render(e)}const r=i.element.classList;this.it.forEach(o=>{o in e||(r.remove(o),this.it.delete(o))});for(const o in e){const n=!!e[o];n===this.it.has(o)||!((s=this.nt)===null||s===void 0)&&s.has(o)||(n?(r.add(o),this.it.add(o)):(r.remove(o),this.it.delete(o)))}return E}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ct={STANDARD:"cubic-bezier(0.2, 0, 0, 1)",STANDARD_ACCELERATE:"cubic-bezier(.3,0,1,1)",STANDARD_DECELERATE:"cubic-bezier(0,0,0,1)",EMPHASIZED:"cubic-bezier(.3,0,0,1)",EMPHASIZED_ACCELERATE:"cubic-bezier(.3,0,.8,.15)",EMPHASIZED_DECELERATE:"cubic-bezier(.05,.7,.1,1)"};/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const lt=450,xe=225,dt=.2,ht=10,ut=75,pt=.35,vt="::after",ft="forwards";var v;(function(i){i[i.INACTIVE=0]="INACTIVE",i[i.TOUCH_DELAY=1]="TOUCH_DELAY",i[i.HOLDING=2]="HOLDING",i[i.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(v||(v={}));const mt=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],_t=150;class D extends w{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=v.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new Ne(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}render(){const e={hovered:this.hovered,pressed:this.pressed};return m`<div class="surface ${ne(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==v.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state===v.HOLDING){this.state=v.WAITING_FOR_CLICK;return}if(this.state===v.TOUCH_DELAY){this.state=v.WAITING_FOR_CLICK,this.startPressAnimation(this.rippleStartEvent);return}}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e)){this.state=v.WAITING_FOR_CLICK,this.startPressAnimation(e);return}this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=v.TOUCH_DELAY,await new Promise(t=>{setTimeout(t,_t)}),this.state===v.TOUCH_DELAY&&(this.state=v.HOLDING,this.startPressAnimation(e)))}}handleClick(){if(!this.disabled){if(this.state===v.WAITING_FOR_CLICK){this.endPressAnimation();return}this.state===v.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation())}}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:t}=this.getBoundingClientRect(),s=Math.max(e,t),r=Math.max(pt*s,ut),o=Math.floor(s*dt),l=Math.sqrt(t**2+e**2)+ht;this.initialSize=o,this.rippleScale=`${(l+r)/o}`,this.rippleSize=`${o}px`}getNormalizedPointerEventCoords(e){const{scrollX:t,scrollY:s}=window,{left:r,top:o}=this.getBoundingClientRect(),n=t+r,l=s+o,{pageX:a,pageY:c}=e;return{x:a-n,y:c-l}}getTranslationCoordinates(e){const{height:t,width:s}=this.getBoundingClientRect(),r={x:(s-this.initialSize)/2,y:(t-this.initialSize)/2};let o;return e instanceof PointerEvent?o=this.getNormalizedPointerEventCoords(e):o={x:s/2,y:t/2},o={x:o.x-this.initialSize/2,y:o.y-this.initialSize/2},{startPoint:o,endPoint:r}}startPressAnimation(e){var n;if(!this.mdRoot)return;this.pressed=!0,(n=this.growAnimation)==null||n.cancel(),this.determineRippleSize();const{startPoint:t,endPoint:s}=this.getTranslationCoordinates(e),r=`${t.x}px, ${t.y}px`,o=`${s.x}px, ${s.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${r}) scale(1)`,`translate(${o}) scale(${this.rippleScale})`]},{pseudoElement:vt,duration:lt,easing:ct.STANDARD,fill:ft})}async endPressAnimation(){this.state=v.INACTIVE;const e=this.growAnimation,t=(e==null?void 0:e.currentTime)??1/0;if(t>=xe){this.pressed=!1;return}await new Promise(s=>{setTimeout(s,xe-t)}),this.growAnimation===e&&(this.pressed=!1)}shouldReactToEvent(e){if(this.disabled||!e.isPrimary||this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if(e.type==="pointerenter"||e.type==="pointerleave")return!this.isTouch(e);const t=e.buttons===1;return this.isTouch(e)||t}inBounds({x:e,y:t}){const{top:s,left:r,bottom:o,right:n}=this.getBoundingClientRect();return e>=r&&e<=n&&t>=s&&t<=o}isTouch({pointerType:e}){return e==="touch"}async handleEvent(e){switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e);break}}onControlChange(e,t){for(const s of mt)e==null||e.removeEventListener(s,this),t==null||t.addEventListener(s,this)}}f([p({type:Boolean,reflect:!0})],D.prototype,"disabled",void 0);f([Se()],D.prototype,"hovered",void 0);f([Se()],D.prototype,"pressed",void 0);f([de(".surface")],D.prototype,"mdRoot",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const bt=M`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media screen and (forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ae=class extends D{};ae.styles=[bt];ae=f([R("md-ripple")],ae);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Le=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];Le.map(Me);function Me(i){return i.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function yt(i){for(const e of Le)i.createProperty(e,{attribute:Me(e),reflect:!0});i.addInitializer(e=>{const t={hostConnected(){e.setAttribute("role","presentation")}};e.addController(t)})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function wt(i){const e=new MouseEvent("click",{bubbles:!0});return i.dispatchEvent(e),e}function gt(i){return i.currentTarget!==i.target||i.composedPath()[0]!==i.target||i.target.disabled?!1:!$t(i)}function $t(i){const e=ce;return e&&(i.preventDefault(),i.stopImmediatePropagation()),At(),e}let ce=!1;async function At(){ce=!0,await null,ce=!1}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Be;let b=class extends w{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this.internals.form}get labels(){return this.internals.labels}constructor(){super(),this.disabled=!1,this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.value="on",this.internals=this.attachInternals(),this.addEventListener("click",e=>{var t;gt(e)&&((t=this.button)==null||t.focus(),this.button!=null&&wt(this.button))})}update(e){const t=String(this.selected);this.internals.setFormValue(this.selected?this.value:null,t),super.update(e)}render(){return m`
      <button
        id="switch"
        type="button"
        class="switch ${ne(this.getRenderClasses())}"
        role="switch"
        aria-checked="${this.selected}"
        aria-label=${this.ariaLabel||u}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        <md-focus-ring></md-focus-ring>
        <span class="track">
          ${this.renderHandle()}
        </span>
      </button>
    `}getRenderClasses(){return{"switch--selected":this.selected,"switch--unselected":!this.selected}}renderHandle(){const e={"with-icon":this.icons||this.showOnlySelectedIcon&&this.selected};return m`
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${ne(e)}">
          ${this.shouldShowIcons()?this.renderIcons():m``}
        </span>
        ${this.renderTouchTarget()}
      </span>
    `}renderIcons(){return m`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon?m``:this.renderOffIcon()}
      </div>
    `}renderOnIcon(){return m`
      <svg class="icon icon--on" viewBox="0 0 24 24">
        <path d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z"/>
      </svg>
    `}renderOffIcon(){return m`
      <svg class="icon icon--off" viewBox="0 0 24 24">
        <path d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z"/>
      </svg>
    `}renderTouchTarget(){return m`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleClick(){this.disabled||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}formResetCallback(){this.selected=this.hasAttribute("selected")}formStateRestoreCallback(e){this.selected=e==="true"}};Be=b;yt(Be);b.shadowRootOptions={mode:"open",delegatesFocus:!0};b.formAssociated=!0;f([p({type:Boolean,reflect:!0})],b.prototype,"disabled",void 0);f([p({type:Boolean})],b.prototype,"selected",void 0);f([p({type:Boolean})],b.prototype,"icons",void 0);f([p({type:Boolean})],b.prototype,"showOnlySelectedIcon",void 0);f([de("button")],b.prototype,"button",void 0);f([p()],b.prototype,"value",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const kt=M`:host{--_disabled-selected-handle-color: var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));--_disabled-selected-handle-opacity: var(--md-switch-disabled-selected-handle-opacity, 1);--_disabled-selected-icon-color: var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-icon-opacity: var(--md-switch-disabled-selected-icon-opacity, 0.38);--_disabled-selected-track-color: var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-track-opacity: var(--md-switch-disabled-track-opacity, 0.12);--_disabled-unselected-handle-color: var(--md-switch-disabled-unselected-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-unselected-handle-opacity: var(--md-switch-disabled-unselected-handle-opacity, 0.38);--_disabled-unselected-icon-color: var(--md-switch-disabled-unselected-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-unselected-icon-opacity: var(--md-switch-disabled-unselected-icon-opacity, 0.38);--_disabled-unselected-track-color: var(--md-switch-disabled-unselected-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-unselected-track-outline-color: var(--md-switch-disabled-unselected-track-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_handle-shape: var(--md-switch-handle-shape, 9999px);--_pressed-handle-height: var(--md-switch-pressed-handle-height, 28px);--_pressed-handle-width: var(--md-switch-pressed-handle-width, 28px);--_selected-focus-handle-color: var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-focus-icon-color: var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-focus-track-color: var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4));--_selected-handle-color: var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff));--_selected-handle-height: var(--md-switch-selected-handle-height, 24px);--_selected-handle-width: var(--md-switch-selected-handle-width, 24px);--_selected-hover-handle-color: var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-hover-icon-color: var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-hover-state-layer-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--_selected-hover-track-color: var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4));--_selected-icon-color: var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-icon-size: var(--md-switch-selected-icon-size, 16px);--_selected-pressed-handle-color: var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff));--_selected-pressed-icon-color: var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_selected-pressed-state-layer-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12);--_selected-pressed-track-color: var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4));--_selected-track-color: var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4));--_state-layer-shape: var(--md-switch-state-layer-shape, 9999px);--_state-layer-size: var(--md-switch-state-layer-size, 40px);--_track-height: var(--md-switch-track-height, 32px);--_track-outline-width: var(--md-switch-track-outline-width, 2px);--_track-shape: var(--md-switch-track-shape, 9999px);--_track-width: var(--md-switch-track-width, 52px);--_unselected-focus-handle-color: var(--md-switch-unselected-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-focus-icon-color: var(--md-switch-unselected-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_unselected-focus-track-color: var(--md-switch-unselected-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_unselected-focus-track-outline-color: var(--md-switch-unselected-focus-track-outline-color, var(--md-sys-color-outline, #79747e));--_unselected-handle-color: var(--md-switch-unselected-handle-color, var(--md-sys-color-outline, #79747e));--_unselected-handle-height: var(--md-switch-unselected-handle-height, 16px);--_unselected-handle-width: var(--md-switch-unselected-handle-width, 16px);--_unselected-hover-handle-color: var(--md-switch-unselected-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-hover-icon-color: var(--md-switch-unselected-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_unselected-hover-state-layer-color: var(--md-switch-unselected-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-hover-state-layer-opacity: var(--md-switch-unselected-hover-state-layer-opacity, 0.08);--_unselected-hover-track-color: var(--md-switch-unselected-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_unselected-hover-track-outline-color: var(--md-switch-unselected-hover-track-outline-color, var(--md-sys-color-outline, #79747e));--_unselected-icon-color: var(--md-switch-unselected-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_unselected-icon-size: var(--md-switch-unselected-icon-size, 16px);--_unselected-pressed-handle-color: var(--md-switch-unselected-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f));--_unselected-pressed-icon-color: var(--md-switch-unselected-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_unselected-pressed-state-layer-color: var(--md-switch-unselected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_unselected-pressed-state-layer-opacity: var(--md-switch-unselected-pressed-state-layer-opacity, 0.12);--_unselected-pressed-track-color: var(--md-switch-unselected-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_unselected-pressed-track-outline-color: var(--md-switch-unselected-pressed-track-outline-color, var(--md-sys-color-outline, #79747e));--_unselected-track-color: var(--md-switch-unselected-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_unselected-track-outline-color: var(--md-switch-unselected-track-outline-color, var(--md-sys-color-outline, #79747e));--_with-icon-handle-height: var(--md-switch-with-icon-handle-height, 24px);--_with-icon-handle-width: var(--md-switch-with-icon-handle-width, 24px);--_handle-shape-start-start: var( --md-switch-handle-shape-start-start, var(--_handle-shape) );--_handle-shape-start-end: var( --md-switch-handle-shape-start-end, var(--_handle-shape) );--_handle-shape-end-end: var( --md-switch-handle-shape-end-end, var(--_handle-shape) );--_handle-shape-end-start: var( --md-switch-handle-shape-end-start, var(--_handle-shape) );--_track-shape-start-start: var( --md-switch-track-shape-start-start, var(--_track-shape) );--_track-shape-start-end: var( --md-switch-track-shape-start-end, var(--_track-shape) );--_track-shape-end-end: var( --md-switch-track-shape-end-end, var(--_track-shape) );--_track-shape-end-start: var( --md-switch-track-shape-end-start, var(--_track-shape) );display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-focus-ring-shape-start-start: var(--_track-shape-start-start);--md-focus-ring-shape-start-end: var(--_track-shape-start-end);--md-focus-ring-shape-end-end: var(--_track-shape-end-end);--md-focus-ring-shape-end-start: var(--_track-shape-end-start)}.switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;padding:0;position:relative;width:var(--_track-width);height:var(--_track-height);border-start-start-radius:var(--_track-shape-start-start);border-start-end-radius:var(--_track-shape-start-end);border-end-end-radius:var(--_track-shape-end-end);border-end-start-radius:var(--_track-shape-end-start)}.touch{position:absolute;height:48px;width:48px}.switch:disabled{cursor:default;pointer-events:none}.switch:disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.switch:disabled .track::before{background-clip:content-box}.switch--selected:disabled .track{background-clip:border-box}.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.switch:disabled .track::before,.switch:disabled .track::after{transition:none;opacity:var(--_disabled-track-opacity)}.switch--selected .track::before{background-color:var(--_selected-track-color)}.switch--selected:hover .track::before{background-color:var(--_selected-hover-track-color)}.switch--selected:focus-within .track::before{background-color:var(--_selected-focus-track-color)}.switch--selected:active .track::before{background-color:var(--_selected-pressed-track-color)}.switch--selected:disabled .track::before{background-color:var(--_disabled-selected-track-color)}.switch--unselected .track::before{background-color:var(--_unselected-track-color);border-color:var(--_unselected-track-outline-color);border-style:solid;border-width:var(--_track-outline-width)}.switch--unselected:hover .track::before{background-color:var(--_unselected-hover-track-color);border-color:var(--_unselected-hover-track-outline-color)}.switch--unselected:focus-visible .track::before{background-color:var(--_unselected-focus-track-color);border-color:var(--_unselected-focus-track-outline-color)}.switch--unselected:active .track::before{background-color:var(--_unselected-pressed-track-color);border-color:var(--_unselected-pressed-track-outline-color)}.switch--unselected:disabled .track::before{background-color:var(--_disabled-unselected-track-color);border-color:var(--_disabled-unselected-track-outline-color)}.handle-container{display:grid;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.switch--selected .handle-container{margin-inline-start:calc(var(--_track-width) - var(--_track-height))}.switch--unselected .handle-container{margin-inline-end:calc(var(--_track-width) - var(--_track-height))}.switch:disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--_handle-shape-start-start);border-start-end-radius:var(--_handle-shape-start-end);border-end-end-radius:var(--_handle-shape-end-end);border-end-start-radius:var(--_handle-shape-end-start);height:var(--_unselected-handle-height);width:var(--_unselected-handle-width);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.switch:disabled .handle,.switch:disabled .handle::before{transition:none}.switch--selected .handle{height:var(--_selected-handle-height);width:var(--_selected-handle-width)}.handle.with-icon{height:var(--_with-icon-handle-height);width:var(--_with-icon-handle-width)}.switch--selected:enabled:active .handle,.switch--unselected:enabled:active .handle{height:var(--_pressed-handle-height);width:var(--_pressed-handle-width);transition-timing-function:linear;transition-duration:100ms}.switch--selected .handle::before{background-color:var(--_selected-handle-color)}.switch--selected:hover .handle::before{background-color:var(--_selected-hover-handle-color)}.switch--selected:focus-within .handle::before{background-color:var(--_selected-focus-handle-color)}.switch--selected:active .handle::before{background-color:var(--_selected-pressed-handle-color)}.switch--selected:disabled .handle::before{background-color:var(--_disabled-selected-handle-color);opacity:var(--_disabled-selected-handle-opacity)}.switch--unselected .handle::before{background-color:var(--_unselected-handle-color)}.switch--unselected:hover .handle::before{background-color:var(--_unselected-hover-handle-color)}.switch--unselected:focus-within .handle::before{background-color:var(--_unselected-focus-handle-color)}.switch--unselected:active .handle::before{background-color:var(--_unselected-pressed-handle-color)}.switch--unselected:disabled .handle::before{background-color:var(--_disabled-unselected-handle-color);opacity:var(--_disabled-unselected-handle-opacity)}md-ripple{border-radius:var(--_state-layer-shape);height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size)}.switch--selected md-ripple{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.switch--unselected md-ripple{--md-ripple-hover-color: var(--_unselected-hover-state-layer-color);--md-ripple-pressed-color: var(--_unselected-pressed-state-layer-color);--md-ripple-hover-opacity: var(--_unselected-hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_unselected-pressed-state-layer-opacity)}.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.switch:disabled .icon{transition:none}.switch--selected .icon--on,.switch--unselected .icon--off{opacity:1}.switch--unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--_unselected-icon-size);height:var(--_unselected-icon-size);fill:var(--_unselected-icon-color)}.switch--unselected:hover .icon--off{fill:var(--_unselected-hover-icon-color)}.switch--unselected:focus-within .icon--off{fill:var(--_unselected-focus-icon-color)}.switch--unselected:active .icon--off{fill:var(--_unselected-pressed-icon-color)}.switch--unselected:disabled .icon--off{fill:var(--_disabled-unselected-icon-color);opacity:var(--_disabled-unselected-icon-opacity)}.icon--on{width:var(--_selected-icon-size);height:var(--_selected-icon-size);fill:var(--_selected-icon-color)}.switch--selected:hover .icon--on{fill:var(--_selected-hover-icon-color)}.switch--selected:focus-within .icon--on{fill:var(--_selected-focus-icon-color)}.switch--selected:active .icon--on{fill:var(--_selected-pressed-icon-color)}.switch--selected:disabled .icon--on{fill:var(--_disabled-selected-icon-color);opacity:var(--_disabled-selected-icon-opacity)}/*# sourceMappingURL=switch-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let le=class extends b{};le.styles=[kt,it];le=f([R("md-switch")],le);var Et=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,I=(i,e,t,s)=>{for(var r=s>1?void 0:s?Ct(e,t):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&Et(e,t,r),r};let T=class extends w{constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this.sync=!1}connectedCallback(){super.connectedCallback(),this._ayncToLocal()&&this.selected==null&&(this.selected=!0),this.sync&&(this._timer=setInterval(()=>{this._ayncToLocal()?this.selected=!0:this.selected=!1},500))}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this._timer)}updated(i){this._toggle()}_ayncToLocal(){return document.documentElement.classList.contains("dark")}_toggle(){this.selected?this._activationDarkClass():this._removeDarkClass()}_removeDarkClass(){document.documentElement.classList.remove("dark")}_activationDarkClass(){document.documentElement.classList.add("dark")}render(){return m`
            <div>
                <md-switch
                    @click="${()=>this.selected=!this.selected}"
                    id="light-dark-switch-ref"
                    ?selected="${this.selected}"
                    ?disabled="${this.disabled}"
                ></md-switch>
            </div>
        `}};I([p({type:Boolean})],T.prototype,"selected",2);I([p({type:Boolean})],T.prototype,"disabled",2);I([p({type:Boolean})],T.prototype,"sync",2);T=I([R("light-dark-switch-md")],T);let W=class extends T{_activation(){var i;(i=this.button)==null||i.classList.add("active")}_remove(){var i;(i=this.button)==null||i.classList.remove("active")}_toggle(){this.selected?this._activation():this._remove()}updated(i){super._toggle(),this._toggle()}render(){return m`
        <div class="content">
            <div class="switch">
                <button href="" @click="${()=>this.selected=!this.selected}" id="btn">
                    <div class="flipBtn">
                        <div class="dark">
                            <svg height="50" width="50">
                                <circle cx="25" cy="25" r="25" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" id="moon" class="moon" viewBox="0 0 512 512">
                                <path d="m494.835 336.171c-6.05-3.911-14.136-2.959-19.102 2.358-31.64 33.838-74.399 52.471-120.424 52.471-41.473 0-80.162-15.839-109.788-42.29l-24.708 4.559 4.014-26.812c-6.16-7.976-11.882-16.333-16.544-25.457h27.026c5.522 0 10.591-3.032 13.198-7.881 2.622-4.863 2.358-10.767-.674-15.366l-54.595-82.91c14.781-77.901 82.061-133.843 162.071-133.843 8.848 0 18.062.85 28.169 2.593 6.973 1.143 14.15-2.827 16.641-9.639s-.264-14.429-6.533-18.091c-39.039-22.807-83.409-35.863-128.277-35.863-129.819 0-255 107.196-255 256 0 149.417 125.757 256 255 256 103.022 0 195.352-62.406 235.21-157.431 2.813-6.694.425-14.443-5.684-18.398z" fill="#ecf2ff" />
                                <g fill="#d9e5ff">
                                    <path d="m500.519 354.569c2.813-6.694.425-14.443-5.684-18.398-6.05-3.911-14.136-2.959-19.102 2.358-31.64 33.838-74.399 52.471-120.424 52.471-32.773 0-63.802-9.897-90-27.1v148.1c103.023 0 195.352-62.406 235.21-157.431z" />
                                    <path d="m355.309 61c8.848 0 18.062.85 28.169 2.593 6.973 1.143 14.15-2.827 16.641-9.639s-.264-14.429-6.533-18.091c-39.039-22.807-83.409-35.863-128.277-35.863v87.362c25.939-16.766 56.876-26.362 90-26.362z" />
                                </g>
                                <g>
                                    <circle cx="325.309" cy="286" fill="#ffdf40" r="15" />
                                </g>
                                <g>
                                    <circle cx="445.309" cy="166" fill="#ffbe40" r="15" />
                                </g>
                                <path d="m157.877 341.371c-8.218-1.099-15.806 4.541-16.978 12.729-1.172 8.203 4.526 15.806 12.729 16.978 34.016 4.814 66.183-3.94 91.891-22.368-7.553-6.742-14.458-14.178-20.695-22.253-19.456 12.779-42.898 18.364-66.947 14.914z" fill="#45364d" />
                                <path d="m385.309 151c-24.901 0-45-20.101-45-45 0-8.401-6.599-15-15-15s-15 6.599-15 15c0 24.899-20.099 45-45 45-8.401 0-15 6.599-15 15 0 8.399 6.599 15 15 15 24.901 0 45 20.099 45 45 0 8.399 6.599 15 15 15s15-6.601 15-15c0-24.901 20.099-45 45-45 8.401 0 15-6.601 15-15 0-8.401-6.599-15-15-15z" fill="#ffdf40" />
                                <path d="m475.309 271h-15v-15c0-8.291-6.709-15-15-15s-15 6.709-15 15v15h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h15v15c0 8.291 6.709 15 15 15s15-6.709 15-15v-15h15c8.291 0 15-6.709 15-15s-6.709-15-15-15z" fill="#ffbe40" />
                                <path d="m155.915 215.395c-5.859-5.859-15.352-5.859-21.211 0-5.347 5.347-12.371 8.02-19.395 8.02s-14.048-2.673-19.395-8.02c-5.859-5.859-15.352-5.859-21.211 0s-5.859 15.352 0 21.211c11.191 11.191 25.898 16.787 40.605 16.787s29.414-5.596 40.605-16.787c5.861-5.86 5.861-15.352.002-21.211z" fill="#5f5266" />
                                <path d="m400.309 166c0 8.399-6.599 15-15 15-24.901 0-45 20.099-45 45 0 8.399-6.599 15-15 15v-150c8.401 0 15 6.599 15 15 0 24.899 20.099 45 45 45 8.401 0 15 6.599 15 15z" fill="#ffbe40" />
                            </svg>
                        </div>
                        <div class="light">
                            <svg height="50" width="50">
                                <circle cx="25" cy="25" r="25" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" id="sun" class="sun" viewBox="0 0 512 512">
                                <path d="m8.291 242.582c-5.083 2.549-8.291 7.734-8.291 13.418s3.208 10.869 8.291 13.418l99.232 49.116v-125.068z" fill="#ffbe40" />
                                <path d="m503.709 242.582-99.232-49.116v125.068l99.232-49.116c5.083-2.549 8.291-7.734 8.291-13.418s-3.208-10.869-8.291-13.418z" fill="#ff9f40" />
                                <path d="m439.926 420.956-34.731-104.194-88.433 88.433 104.194 34.731c5.288 1.796 11.292.439 15.352-3.618 4.013-4.014 5.42-9.961 3.618-15.352z" fill="#ff9f40" />
                                <path d="m106.806 316.762-34.732 104.194c-1.802 5.391-.396 11.338 3.618 15.352 4.048 4.048 10.049 5.418 15.352 3.618l104.194-34.731z" fill="#ffbe40" />
                                <path d="m436.308 75.692c-4.014-3.999-9.976-5.435-15.352-3.618l-104.194 34.731 88.433 88.433 34.731-104.194c1.802-5.391.395-11.338-3.618-15.352z" fill="#ff9f40" />
                                <path d="m91.044 72.074c-5.391-1.816-11.338-.381-15.352 3.618-4.014 4.014-5.42 9.961-3.618 15.352l34.731 104.194 88.433-88.433z" fill="#ffbe40" />
                                <path d="m256 404.477h-62.534l49.116 99.232c2.549 5.083 7.734 8.291 13.418 8.291s10.869-3.208 13.418-8.291l49.116-99.232z" fill="#ffbe40" />
                                <path d="m269.418 503.709 49.116-99.232h-62.534v107.523c5.684 0 10.869-3.208 13.418-8.291z" fill="#ff9f40" />
                                <path d="m269.418 7.625c-2.549-5.083-7.983-7.625-13.418-7.625s-10.869 2.542-13.418 7.625l-49.116 99.899h62.534 62.534z" fill="#ffbe40" />
                                <path d="m269.418 7.625c-2.549-5.083-7.983-7.625-13.418-7.625v107.523h62.534z" fill="#ff9f40" />
                                <circle cx="256" cy="256" fill="#ffdf40" r="165" />
                                <path d="m421 256c0-90.981-74.019-165-165-165v330c90.981 0 165-74.019 165-165z" fill="#ffbe40" />
                                <path d="m215.395 236.605c-10.693-10.693-28.096-10.693-38.789 0-5.859 5.859-15.352 5.859-21.211 0s-5.859-15.352 0-21.211c22.383-22.383 58.828-22.383 81.211 0 5.859 5.859 5.859 15.352 0 21.211-5.86 5.86-15.352 5.86-21.211 0z" fill="#5f5266" />
                                <path d="m335.395 236.605c-10.693-10.693-28.096-10.693-38.789 0-5.859 5.859-15.352 5.859-21.211 0s-5.859-15.352 0-21.211c22.383-22.383 58.828-22.383 81.211 0 5.859 5.859 5.859 15.352 0 21.211-5.86 5.86-15.352 5.86-21.211 0z" fill="#45364d" />
                                <path d="m327.177 313.085c-5.522-6.167-15-6.694-21.182-1.172-13.755 12.305-31.875 18.457-49.995 18.457s-36.24-6.152-49.995-18.457c-6.182-5.522-15.688-4.995-21.182 1.172-5.522 6.182-4.995 15.659 1.172 21.182 19.277 17.241 44.136 26.733 70.005 26.733s50.728-9.492 70.005-26.733c6.167-5.523 6.694-15 1.172-21.182z" fill="#5f5266" />
                                <path d="m327.177 313.085c-5.522-6.167-15-6.694-21.182-1.172-13.755 12.305-31.875 18.457-49.995 18.457v30.63c25.869 0 50.728-9.492 70.005-26.733 6.167-5.523 6.694-15 1.172-21.182z" fill="#45364d" />
                            </svg>
                        </div>
                    </div>
                </button>
            </div>
        </div>
      `}};W.styles=M`

.content {
    width: 60%;
    height: fit-content;
    max-width: 600px;
    position: realative;
    margin: auto;
}

.info {
    padding: 20px;
    text-align: center;
}

.switch {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    width: 110px;
    height: 56px;
    background-color: var(--switch);
    box-shadow: inset 0px 0px 1px 1px var(--switch-shadow);
    border-radius: 50px;
}

button {
    position: relative;
    top: 3px;
    left: 3px;
    outline: none;
    border: none;
    background: none;
    transition: all 0.5s ease-in-out;
}

.flipBtn {
    width: 50px;
    height: 50px;
    transition: 0.6s;
    transform-style: preserve-3d;
    cursor: pointer;
}

.dark {
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0;
    transition: all 0.8s;
    transform: ratateY(180deg);
}

.light{
    position: absolute;
    top: 0px;
    left: 0px;
}

.sun {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: auto;
}

.moon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-51%, -55%);
    width: 70%;
    height: auto;
}

.dark svg {
    fill: rgb(3, 0, 51);
    transition: fill ease-in-out 0.3s;
    stroke: none;
}

.light svg {
    fill: rgb(110, 190, 255);
    transition: fill ease-in-out 0.3s;
    stroke: none;
}

.active {
    left: 57px;
}

.active .flipBtn {
    transform: rotateY(180deg);
}

.active .dark {
    opacity: 1;
}

.active .light svg {
    transition: all 1s;
    opacity: 0;
}

/** For mobile devices **/
@media (max-width: 768px) {
    .content {
        width: 90%;
    }
}
    `;I([de("#btn")],W.prototype,"button",2);W=I([R("light-dark-switch-standard")],W);var xt=Object.defineProperty,St=Object.getOwnPropertyDescriptor,U=(i,e,t,s)=>{for(var r=s>1?void 0:s?St(e,t):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&xt(e,t,r),r};let P=class extends w{constructor(){super(...arguments),this.md=!1,this.selected=!1,this.disabled=!1,this.sync=!1}render(){return this.md?m`
        <light-dark-switch-md ?selected="${this.selected}" ?disabled="${this.disabled}" ?sync="${this.sync}"></light-dark-switch-md>
      `:m`
        <light-dark-switch-standard ?selected="${this.selected}" ?disabled="${this.disabled}" ?sync="${this.sync}"></light-dark-switch-standard>
    
    `}};U([p({type:Boolean})],P.prototype,"md",2);U([p({type:Boolean})],P.prototype,"selected",2);U([p({type:Boolean})],P.prototype,"disabled",2);U([p({type:Boolean})],P.prototype,"sync",2);P=U([R("light-dark-switch")],P);
