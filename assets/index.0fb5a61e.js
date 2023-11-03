(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function ht(e,t={target:document.body},n="hmr",r="app-loaded"){const o=document.getElementById(n),s=document.createElement("div");s.style.visibility="hidden",t.target.appendChild(s),o?addEventListener(r,i):i();function i(){removeEventListener(r,i),o&&o.remove(),s.style.visibility=null,s.setAttribute("id",n)}return new e({...t,target:s})}function x(){}function Fe(e,t){for(const n in t)e[n]=t[n];return e}function Ue(e){return e()}function Pe(){return Object.create(null)}function B(e){e.forEach(Ue)}function ge(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let te;function ke(e,t){return te||(te=document.createElement("a")),te.href=t,e===te.href}function mt(e){return Object.keys(e).length===0}function ye(e,...t){if(e==null)return x;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function J(e){let t;return ye(e,n=>t=n)(),t}function q(e,t,n){e.$$.on_destroy.push(ye(t,n))}function _t(e,t,n,r){if(e){const o=qe(e,t,n,r);return e[0](o)}}function qe(e,t,n,r){return e[1]&&r?Fe(n.ctx.slice(),e[1](r(t))):n.ctx}function gt(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(t.dirty===void 0)return o;if(typeof o=="object"){const s=[],i=Math.max(t.dirty.length,o.length);for(let c=0;c<i;c+=1)s[c]=t.dirty[c]|o[c];return s}return t.dirty|o}return t.dirty}function yt(e,t,n,r,o,s){if(o){const i=qe(t,n,r,s);e.p(i,o)}}function bt(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}function jn(e){return e==null?"":e}function wt(e,t,n){return e.set(n),t}function Pt(e){return e&&ge(e.destroy)?e.destroy:x}function Nn(e,t){e.appendChild(t)}function L(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function Mn(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function be(e){return document.createElement(e)}function Be(e){return document.createTextNode(e)}function we(){return Be(" ")}function Q(){return Be("")}function Fn(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function V(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function kt(e){return Array.from(e.childNodes)}function Un(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function qn(e,t){e.value=t==null?"":t}function De(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let G;function z(e){G=e}function le(){if(!G)throw new Error("Function called outside component initialization");return G}function Bn(e){le().$$.on_mount.push(e)}function $t(e){le().$$.on_destroy.push(e)}function He(e,t){return le().$$.context.set(e,t),t}function Ke(e){return le().$$.context.get(e)}const W=[],$e=[],re=[],xe=[],Ve=Promise.resolve();let de=!1;function We(){de||(de=!0,Ve.then(ze))}function xt(){return We(),Ve}function pe(e){re.push(e)}const fe=new Set;let ne=0;function ze(){const e=G;do{for(;ne<W.length;){const t=W[ne];ne++,z(t),vt(t.$$)}for(z(null),W.length=0,ne=0;$e.length;)$e.pop()();for(let t=0;t<re.length;t+=1){const n=re[t];fe.has(n)||(fe.add(n),n())}re.length=0}while(W.length);for(;xe.length;)xe.pop()();de=!1,fe.clear(),z(e)}function vt(e){if(e.fragment!==null){e.update(),B(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(pe)}}const oe=new Set;let j;function H(){j={r:0,c:[],p:j}}function K(){j.r||B(j.c),j=j.p}function _(e,t){e&&e.i&&(oe.delete(e),e.i(t))}function b(e,t,n,r){if(e&&e.o){if(oe.has(e))return;oe.add(e),j.c.push(()=>{oe.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function Et(e,t){e.d(1),t.delete(e.key)}function Rt(e,t){b(e,1,1,()=>{t.delete(e.key)})}function Je(e,t,n,r,o,s,i,c,a,l,u,f){let m=e.length,h=s.length,d=m;const w={};for(;d--;)w[e[d].key]=d;const k=[],R=new Map,T=new Map;for(d=h;d--;){const g=f(o,s,d),$=n(g);let p=i.get($);p?r&&p.p(g,t):(p=l($,g),p.c()),R.set($,k[d]=p),$ in w&&T.set($,Math.abs(d-w[$]))}const N=new Set,ee=new Set;function M(g){_(g,1),g.m(c,u),i.set(g.key,g),u=g.first,h--}for(;m&&h;){const g=k[h-1],$=e[m-1],p=g.key,P=$.key;g===$?(u=g.first,m--,h--):R.has(P)?!i.has(p)||N.has(p)?M(g):ee.has(P)?m--:T.get(p)>T.get(P)?(ee.add(p),M(g)):(N.add(P),m--):(a($,i),m--)}for(;m--;){const g=e[m];R.has(g.key)||a(g,i)}for(;h;)M(k[h-1]);return k}function Lt(e,t){const n={},r={},o={$$scope:1};let s=e.length;for(;s--;){const i=e[s],c=t[s];if(c){for(const a in i)a in c||(r[a]=1);for(const a in c)o[a]||(n[a]=c[a],o[a]=1);e[s]=c}else for(const a in i)o[a]=1}for(const i in r)i in n||(n[i]=void 0);return n}function Ot(e){return typeof e=="object"&&e!==null?e:{}}function I(e){e&&e.c()}function C(e,t,n,r){const{fragment:o,on_mount:s,on_destroy:i,after_update:c}=e.$$;o&&o.m(t,n),r||pe(()=>{const a=s.map(Ue).filter(ge);i?i.push(...a):B(a),e.$$.on_mount=[]}),c.forEach(pe)}function S(e,t){const n=e.$$;n.fragment!==null&&(B(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ct(e,t){e.$$.dirty[0]===-1&&(W.push(e),We(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,r,o,s,i,c=[-1]){const a=G;z(e);const l=e.$$={fragment:null,ctx:null,props:s,update:x,not_equal:o,bound:Pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:Pe(),dirty:c,skip_bound:!1,root:t.target||a.$$.root};i&&i(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},(f,m,...h)=>{const d=h.length?h[0]:m;return l.ctx&&o(l.ctx[f],l.ctx[f]=d)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](d),u&&Ct(e,f)),m}):[],l.update(),u=!0,B(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const f=kt(t.target);l.fragment&&l.fragment.l(f),f.forEach(v)}else l.fragment&&l.fragment.c();t.intro&&_(e.$$.fragment),C(e,t.target,t.anchor,t.customElement),ze()}z(a)}class Y{$destroy(){S(this,1),this.$destroy=x}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!mt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const O={queryHandler:{parse:e=>St(new URLSearchParams(e)),stringify:e=>"?"+new URLSearchParams(e).toString()},urlTransform:{apply:e=>e,remove:e=>e},useHash:!1};function St(e){return[...e].reduce((t,[n,r])=>(t[n]=r,t),{})}const Qe=RegExp(/\:([^/()]+)/g);function Tt(e,t){if(navigator.userAgent.includes("jsdom"))return!1;t&&Ge(e),It()}function It(){if(navigator.userAgent.includes("jsdom"))return!1;const{hash:e}=window.location;if(e){const t=document.getElementById(e.substring(1));t&&t.scrollIntoView()}}function Ge(e){e&&e.scrollTo&&e.dataset.routify!=="scroll-lock"&&e.dataset["routify-scroll"]!=="lock"&&(e.style["scroll-behavior"]="auto",e.scrollTo({top:0,behavior:"auto"}),e.style["scroll-behavior"]="",Ge(e.parentElement))}const At=(e,t)=>{const n=t?"":"/?$";return e=e.replace(/\/_fallback?$/,"(/|$)"),e=e.replace(/\/index$/,"(/index)?"),e=e.replace(Qe,"([^/]+)")+n,e=`^${e}`,e},Xe=e=>{const t=[];let n;for(;n=Qe.exec(e);)t.push(n[1]);return t},jt=({path:e})=>e.split("/").filter(Boolean).map(t=>t==="_fallback"?"A":t.startsWith(":")?"B":"C").join("");function se(e,t){se._console=se._console||{log:console.log,warn:console.warn};const{_console:n}=se,r=e.componentFile.name.replace(/Proxy<_?(.+)>/,"$1").replace(/^Index$/,e.component.shortPath.split("/").pop()).replace(/^./,s=>s.toUpperCase()).replace(/\:(.+)/,"U5B$1u5D"),o=[`<${r}> received an unexpected slot "default".`,`<${r}> was created with unknown prop 'scoped'`,`<${r}> was created with unknown prop 'scopedSync'`];for(const s of["log","warn"])console[s]=(...i)=>{o.includes(i[0])||n[s](...i)},t().then(()=>{console[s]=n[s]})}function ce(){let e=window.location.pathname+window.location.search+window.location.hash;const{url:t,options:n}=Nt(e);return{...he(t),options:n}}function Nt(e){const[t,n]=e.split("__[[routify_url_options]]__"),r=JSON.parse(decodeURIComponent(n||"")||"{}");return window.routify=window.routify||{},window.routify.prefetched=r.prefetch,{url:t,options:r}}function he(e){O.useHash&&(e=e.replace(/.*#(.+)/,"$1"));const t=e.startsWith("/")?window.location.origin:void 0,n=new URL(e,t),r=n.pathname+n.search+n.hash;return{url:n,fullpath:r}}function ae(e,t,n){const r=O.useHash?"#":"";let o;return o=Mt(e,t,n),o=O.urlTransform.apply(o),o=r+o,o}function Mt(e,t,n){const r=Object.assign({},n,t),o=Ft(e,t);for(const[s,i]of Object.entries(r))e=e.replace(`:${s}`,i);return`${e}${o}`}function Ft(e,t){if(!O.queryHandler)return"";const n=Xe(e),r={};return t&&Object.entries(t).forEach(([o,s])=>{n.includes(o)||(r[o]=s)}),O.queryHandler.stringify(r).replace(/\?$/,"")}function Ut(e){let t;const n=e[2].default,r=_t(n,e,e[1],null);return{c(){r&&r.c()},m(o,s){r&&r.m(o,s),t=!0},p(o,[s]){r&&r.p&&(!t||s&2)&&yt(r,n,o,o[1],t?gt(n,o[1],s,null):bt(o[1]),null)},i(o){t||(_(r,o),t=!0)},o(o){b(r,o),t=!1},d(o){r&&r.d(o)}}}function qt(e,t,n){let{$$slots:r={},$$scope:o}=t,{scoped:s={}}=t;return e.$$set=i=>{"scoped"in i&&n(0,s=i.scoped),"$$scope"in i&&n(1,o=i.$$scope)},[s,o,r]}class Bt extends Y{constructor(t){super(),X(this,t,qt,Ut,D,{scoped:0})}}const F=[];function Dt(e,t){return{subscribe:A(e,t).subscribe}}function A(e,t=x){let n;const r=new Set;function o(c){if(D(e,c)&&(e=c,n)){const a=!F.length;for(const l of r)l[1](),F.push(l,e);if(a){for(let l=0;l<F.length;l+=2)F[l][0](F[l+1]);F.length=0}}}function s(c){o(c(e))}function i(c,a=x){const l=[c,a];return r.add(l),r.size===1&&(n=t(o)||x),c(e),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:o,update:s,subscribe:i}}function Ye(e,t,n){const r=!Array.isArray(e),o=r?[e]:e,s=t.length<2;return Dt(n,i=>{let c=!1;const a=[];let l=0,u=x;const f=()=>{if(l)return;u();const h=t(r?a[0]:a,i);s?i(h):u=ge(h)?h:x},m=o.map((h,d)=>ye(h,w=>{a[d]=w,l&=~(1<<d),c&&f()},()=>{l|=1<<d}));return c=!0,f(),function(){B(m),u()}})}window.routify=window.routify||{};const Z=A(null),ue=A([]);ue.subscribe(e=>window.routify.routes=e);let Ze=A({component:{params:{}}});const Ht=A(null),et=A(!0);async function Kt({page:e,metatags:t,afterPageLoad:n,parentNode:r}){const o=e.last!==e;setTimeout(()=>Tt(r,o));const{path:s}=e,{options:i}=ce(),c=i.prefetch;for(const a of n._hooks)a&&await a(e.api);t.update(),dispatchEvent(new CustomEvent("app-loaded")),parent.postMessage({msg:"app-loaded",prefetched:window.routify.prefetched,path:s,prefetchId:c},"*"),window.routify.appLoaded=!0,window.routify.stopAutoReady=!1}function me(e,t=!1){e=O.urlTransform.remove(e);let{pathname:n,search:r}=he(e).url;const o=J(ue),s=o.find(u=>n===u.meta.name)||o.find(u=>n.match(u.regex));if(!s)throw new Error(`Route could not be found for "${n}".`);const i=t?Object.create(s):s,{route:c,redirectPath:a,rewritePath:l}=tt(i,o);return l&&({pathname:n,search:r}=he(ae(l,c.params)).url,a&&(c.redirectTo=ae(a,c.params||{}))),O.queryHandler&&(c.params=Object.assign({},O.queryHandler.parse(r))),Vt(c,n),c.leftover=e.replace(new RegExp(c.regex),""),c}function Vt(e,t){if(e.paramKeys){const n=Wt(e.layouts),r=t.split("/").filter(Boolean);zt(e.path).forEach((s,i)=>{s&&(e.params[s]=r[i],n[i]?n[i].param={[s]:r[i]}:e.param={[s]:r[i]})})}}function tt(e,t,n,r){const{redirect:o,rewrite:s}=e.meta;if(o||s){n=o?o.path||o:n,r=s?s.path||s:n;const i=o&&o.params,c=s&&s.params,a=t.find(l=>l.path.replace(/\/index$/,"")===r);return a===e&&console.error(`${r} is redirecting to itself`),a||console.error(`${e.path} is redirecting to non-existent path: ${r}`),(i||c)&&(a.params=Object.assign({},a.params,i,c)),tt(a,t,n,r)}return{route:e,redirectPath:n,rewritePath:r}}function Wt(e){const t=[];return e.forEach(n=>{t[n.path.split("/").filter(Boolean).length-1]=n}),t}function zt(e){return e.split("/").filter(Boolean).map(t=>t.match(/\:(.+)/)).map(t=>t&&t[1])}function ve(e,t,n){const r=e.slice();return r[1]=t[n],r}function Ee(e,t){let n,r;return{key:e,first:null,c(){n=be("iframe"),ke(n.src,r=t[1].url)||V(n,"src",r),V(n,"frameborder","0"),V(n,"title","routify prefetcher"),this.first=n},m(o,s){L(o,n,s)},p(o,s){t=o,s&1&&!ke(n.src,r=t[1].url)&&V(n,"src",r)},d(o){o&&v(n)}}}function Jt(e){let t,n=[],r=new Map,o=e[0];const s=i=>i[1].options.prefetch;for(let i=0;i<o.length;i+=1){let c=ve(e,o,i),a=s(c);r.set(a,n[i]=Ee(a,c))}return{c(){t=be("div");for(let i=0;i<n.length;i+=1)n[i].c();V(t,"id","__routify_iframes"),De(t,"display","none")},m(i,c){L(i,t,c);for(let a=0;a<n.length;a+=1)n[a].m(t,null)},p(i,[c]){c&1&&(o=i[0],n=Je(n,c,s,1,i,o,r,t,Et,Ee,null,ve))},i:x,o:x,d(i){i&&v(t);for(let c=0;c<n.length;c+=1)n[c].d()}}}const Qt=2,_e=A([]),nt=Ye(_e,e=>e.slice(0,Qt));nt.subscribe(e=>e.forEach(({options:t})=>{setTimeout(()=>rt(t.prefetch),t.timeout)}));function rt(e){const t=e.data?e.data.prefetchId:e;if(!t)return null;const n=J(_e).find(r=>r&&r.options.prefetch==t);if(n){const{gracePeriod:r}=n.options,o=new Promise(i=>setTimeout(i,r)),s=new Promise(i=>{window.requestIdleCallback?window.requestIdleCallback(i):setTimeout(i,r+1e3)});Promise.all([o,s]).then(()=>{_e.update(i=>i.filter(c=>c.options.prefetch!=t))})}}addEventListener("message",rt,!1);function Gt(e,t,n){let r;return q(e,nt,o=>n(0,r=o)),[r]}class Xt extends Y{constructor(t){super(),X(this,t,Gt,Jt,D,{})}}function ot(){return Ke("routify")||Ze}const Yt={_hooks:[e=>et.set(!1)],subscribe:st},Zt={_hooks:[],subscribe:st};function st(e){const t=this._hooks,n=t.length;return e(r=>{t[n]=r}),(...r)=>{delete t[n],e(...r)}}const Dn={subscribe(e){const t=ot();return Ye(t,n=>en(n,n.route,n.routes)).subscribe(e)}};function en(e,t,n){return function(o,s={},i){const{component:c}=e,a=Object.assign({},t.params,c.params);let l=o&&o.nodeType&&o;l&&(o=o.getAttribute("href")),o=o?h(o):c.shortPath;const u=n.find(d=>[d.shortPath||"/",d.path].includes(o));if(u&&u.meta.preload==="proximity"&&window.requestIdleCallback){const d=routify.appLoaded?0:1500;setTimeout(()=>{window.requestIdleCallback(()=>u.api.preload())},d)}i&&i.strict!==!1||(o=o.replace(/index$/,""));let m=ae(o,s,a);if(l)return l.href=m,{update(d){l.href=ae(o,d,a)}};return m;function h(d){if(d.match(/^\.\.?\//)){let[,w,k]=d.match(/^([\.\/]+)(.*)/),R=c.path.replace(/\/$/,"");const T=w.match(/\.\.\//g)||[];c.isPage&&T.push(null),T.forEach(()=>R=R.replace(/\/[^\/]+\/?$/,"")),d=`${R}/${k}`.replace(/\/$/,""),d=d||"/"}else if(!d.match(/^\//)){const w=n.find(k=>k.meta.name===d);w&&(d=w.shortPath)}return d}}}const y={subscribe(e){return this._origin=this.getOrigin(),e(ie)},props:{},templates:{},services:{plain:{propField:"name",valueField:"content"},twitter:{propField:"name",valueField:"content"},og:{propField:"property",valueField:"content"}},plugins:[{name:"applyTemplate",condition:()=>!0,action:(e,t)=>{const n=y.getLongest(y.templates,e)||(r=>r);return[e,n(t)]}},{name:"createMeta",condition:()=>!0,action(e,t){y.writeMeta(e,t)}},{name:"createOG",condition:e=>!e.match(":"),action(e,t){y.writeMeta(`og:${e}`,t)}},{name:"createTitle",condition:e=>e==="title",action(e,t){document.title=t}}],getLongest(e,t){const n=e[t];if(n){const r=J(Z).path,i=Object.keys(e[t]).filter(c=>r.includes(c)).sort((c,a)=>a.length-c.length)[0];return n[i]}},writeMeta(e,t){const n=document.getElementsByTagName("head")[0],r=e.match(/(.+)\:/),o=r&&r[1]||"plain",{propField:s,valueField:i}=ie.services[o]||ie.services.plain,c=document.querySelector(`meta[${s}='${e}']`);c&&c.remove();const a=document.createElement("meta");a.setAttribute(s,e),a.setAttribute(i,t),a.setAttribute("data-origin","routify"),n.appendChild(a)},set(e,t){typeof e=="string"&&y.plugins.forEach(n=>{n.condition(e,t)&&([e,t]=n.action(e,t)||[e,t])})},clear(){const e=document.querySelector("meta");e&&e.remove()},template(e,t){const n=y.getOrigin;y.templates[e]=y.templates[e]||{},y.templates[e][n]=t},update(){Object.keys(y.props).forEach(e=>{let t=y.getLongest(y.props,e);y.plugins.forEach(n=>{n.condition(e,t)&&([e,t]=n.action(e,t)||[e,t])})})},batchedUpdate(){y._pendingUpdate||(y._pendingUpdate=!0,setTimeout(()=>{y._pendingUpdate=!1,this.update()}))},_updateQueued:!1,_origin:!1,getOrigin(){if(this._origin)return this._origin;const e=ot();return e&&J(e).path||"/"},_pendingUpdate:!1},ie=new Proxy(y,{set(e,t,n,r){const{props:o}=e;return Reflect.has(e,t)?Reflect.set(e,t,n,r):(o[t]=o[t]||{},o[t][e.getOrigin()]=n),window.routify.appLoaded&&e.batchedUpdate(),!0}});function Re(e,t,n){const r=e.slice();return r[21]=t[n].component,r[22]=t[n].componentFile,r[2]=t[n].decorator,r[1]=t[n].nodes,r}function Le(e){let t=[],n=new Map,r,o,s=[e[4]];const i=c=>c[7];for(let c=0;c<1;c+=1){let a=Re(e,s,c),l=i(a);n.set(l,t[c]=Ce(l,a))}return{c(){for(let c=0;c<1;c+=1)t[c].c();r=Q()},m(c,a){for(let l=0;l<1;l+=1)t[l].m(c,a);L(c,r,a),o=!0},p(c,a){a&33554621&&(s=[c[4]],H(),t=Je(t,a,i,1,c,s,n,r.parentNode,Rt,Ce,r,Re),K())},i(c){if(!o){for(let a=0;a<1;a+=1)_(t[a]);o=!0}},o(c){for(let a=0;a<1;a+=1)b(t[a]);o=!1},d(c){for(let a=0;a<1;a+=1)t[a].d(c);c&&v(r)}}}function Oe(e){let t,n;return t=new it({props:{decorator:e[2],nodes:e[1],scoped:{...e[0],...e[25]}}}),{c(){I(t.$$.fragment)},m(r,o){C(t,r,o),n=!0},p(r,o){const s={};o&4&&(s.decorator=r[2]),o&16&&(s.nodes=r[1]),o&33554433&&(s.scoped={...r[0],...r[25]}),t.$set(s)},i(r){n||(_(t.$$.fragment,r),n=!0)},o(r){b(t.$$.fragment,r),n=!1},d(r){S(t,r)}}}function tn(e){let t,n,r=e[21]&&e[1].length&&Oe(e);return{c(){r&&r.c(),t=Q()},m(o,s){r&&r.m(o,s),L(o,t,s),n=!0},p(o,s){o[21]&&o[1].length?r?(r.p(o,s),s&16&&_(r,1)):(r=Oe(o),r.c(),_(r,1),r.m(t.parentNode,t)):r&&(H(),b(r,1,1,()=>{r=null}),K())},i(o){n||(_(r),n=!0)},o(o){b(r),n=!1},d(o){r&&r.d(o),o&&v(t)}}}function nn(e){let t,n,r;const o=[{scoped:e[0]},{scopedSync:e[5]},e[3].param||{}];var s=e[22];function i(c){let a={$$slots:{default:[tn,({scoped:l,decorator:u})=>({25:l,2:u}),({scoped:l,decorator:u})=>(l?33554432:0)|(u?4:0)]},$$scope:{ctx:c}};for(let l=0;l<o.length;l+=1)a=Fe(a,o[l]);return{props:a}}return s&&(t=new s(i(e))),{c(){t&&I(t.$$.fragment),n=we()},m(c,a){t&&C(t,c,a),L(c,n,a),r=!0},p(c,a){const l=a&41?Lt(o,[a&1&&{scoped:c[0]},a&32&&{scopedSync:c[5]},a&8&&Ot(c[3].param||{})]):{};if(a&100663317&&(l.$$scope={dirty:a,ctx:c}),s!==(s=c[22])){if(t){H();const u=t;b(u.$$.fragment,1,0,()=>{S(u,1)}),K()}s?(t=new s(i(c)),I(t.$$.fragment),_(t.$$.fragment,1),C(t,n.parentNode,n)):t=null}else s&&t.$set(l)},i(c){r||(t&&_(t.$$.fragment,c),r=!0)},o(c){t&&b(t.$$.fragment,c),r=!1},d(c){t&&S(t,c),c&&v(n)}}}function Ce(e,t){let n,r,o,s;var i=t[2];function c(a){return{props:{scoped:a[0],$$slots:{default:[nn]},$$scope:{ctx:a}}}}return i&&(r=new i(c(t))),{key:e,first:null,c(){n=Q(),r&&I(r.$$.fragment),o=Q(),this.first=n},m(a,l){L(a,n,l),r&&C(r,a,l),L(a,o,l),s=!0},p(a,l){t=a;const u={};if(l&1&&(u.scoped=t[0]),l&67108925&&(u.$$scope={dirty:l,ctx:t}),i!==(i=t[2])){if(r){H();const f=r;b(f.$$.fragment,1,0,()=>{S(f,1)}),K()}i?(r=new i(c(t)),I(r.$$.fragment),_(r.$$.fragment,1),C(r,o.parentNode,o)):r=null}else i&&r.$set(u)},i(a){s||(r&&_(r.$$.fragment,a),s=!0)},o(a){r&&b(r.$$.fragment,a),s=!1},d(a){a&&v(n),a&&v(o),r&&S(r,a)}}}function Se(e){let t,n,r;return{c(){t=be("div"),De(t,"display","contents")},m(o,s){L(o,t,s),n||(r=Pt(e[10].call(null,t)),n=!0)},d(o){o&&v(t),n=!1,r()}}}function rn(e){let t,n,r,o=e[4]&&Le(e),s=!e[6]&&Se(e);return{c(){o&&o.c(),t=we(),s&&s.c(),n=Q()},m(i,c){o&&o.m(i,c),L(i,t,c),s&&s.m(i,c),L(i,n,c),r=!0},p(i,[c]){i[4]?o?(o.p(i,c),c&16&&_(o,1)):(o=Le(i),o.c(),_(o,1),o.m(t.parentNode,t)):o&&(H(),b(o,1,1,()=>{o=null}),K()),i[6]?s&&(s.d(1),s=null):s||(s=Se(i),s.c(),s.m(n.parentNode,n))},i(i){r||(_(o),r=!0)},o(i){b(o),r=!1},d(i){o&&o.d(i),i&&v(t),s&&s.d(i),i&&v(n)}}}function on(e,t,n){let r,o,s,i,c;q(e,Z,p=>n(14,s=p)),q(e,ue,p=>n(16,c=p));let{nodes:a=[]}=t,{scoped:l={}}=t,{decorator:u=void 0}=t,f=null,m=null,h={},d,w=1;const k=A(null);q(e,k,p=>n(4,o=p));const R=Ke("routify")||Ze;q(e,R,p=>n(15,i=p));const T=p=>n(6,d=p.parentNode);He("routify",k);let N=[];function ee(p){let P=p.component();P instanceof Promise?P.then(M):M(P)}function M(p){n(5,h={...l});const P={...o,nodes:m,decorator:u||Bt,layout:f.isLayout?f:i.layout,component:f,route:s,routes:c,componentFile:p,parentNode:d||i.parentNode};k.set(P),wt(R,i.child=f,i),m.length===0&&g()}async function g(){await new Promise(P=>setTimeout(P));const p=o.component.path===s.path;!window.routify.stopAutoReady&&p&&Kt({page:o.component,metatags:ie,afterPageLoad:Yt,parentNode:d})}function $({meta:p,path:P,param:dt,params:pt}){return JSON.stringify({path:P,invalidate:w,param:(p["param-is-page"]||p["slug-is-page"])&&dt,queryParams:p["query-params-is-page"]&&pt})}return e.$$set=p=>{"nodes"in p&&n(1,a=p.nodes),"scoped"in p&&n(0,l=p.scoped),"decorator"in p&&n(2,u=p.decorator)},e.$$.update=()=>{e.$$.dirty&6146&&N!==a&&(n(12,N=a),n(3,[f,...m]=[...a],f),n(3,f.api.reset=()=>n(11,w++,w),f)),e.$$.dirty&8&&ee(f),e.$$.dirty&2064&&n(7,r=o&&w&&$(o.component)),e.$$.dirty&16&&o&&se(o,xt)},[l,a,u,f,o,h,d,r,k,R,T,w,N]}class it extends Y{constructor(t){super(),X(this,t,on,rn,D,{nodes:1,scoped:0,decorator:2})}}function sn(e,t){let n=!1;function r(s,i){const c=s||ce().fullpath,a=me(c);a.redirectTo&&(history.replaceStateNative({},null,a.redirectTo),delete a.redirectTo);const f=[...(i&&me(ce().fullpath,e)||a).layouts,a];n&&delete n.last,a.last=n,n=a,s||Ht.set(a),Z.set(a),a.api.preload().then(()=>{et.set(!0),t(f)})}const o=cn(r);return{updatePage:r,destroy:o}}function cn(e){["pushState","replaceState"].forEach(o=>{history[o+"Native"]||(history[o+"Native"]=history[o]),history[o]=async function(s={},i,c){const a=location.pathname+location.search+location.hash;if(c===a)return!1;const{id:l,path:u,params:f}=J(Z);s={id:l,path:u,params:f,...s};const m=new Event(o.toLowerCase());if(Object.assign(m,{state:s,title:i,url:c}),await Te(m,c))return history[o+"Native"].apply(this,[s,i,c]),dispatchEvent(m)}});let t=!1;const n={click:an,pushstate:()=>e(),replacestate:()=>e(),popstate:async o=>{t?t=!1:await Te(o,ce().fullpath)?e():(t=!0,o.preventDefault(),history.go(1))}};return Object.entries(n).forEach(o=>addEventListener(...o)),()=>{Object.entries(n).forEach(o=>removeEventListener(...o))}}function an(e){const t=e.target.closest("a")||e.composedPath().find(s=>s.tagName==="A"),n=t&&t.href;if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button||e.defaultPrevented||!n||t.target||t.host!==location.host)return;const r=new URL(n),o=r.pathname+r.search+r.hash;e.preventDefault(),history.pushState({},"",o)}async function Te(e,t){const n=me(t).api;for(const r of Zt._hooks.filter(Boolean))if(!await r(e,n,{url:t}))return!1;return!0}function Ie(e){let t,n;return t=new it({props:{nodes:e[0]}}),{c(){I(t.$$.fragment)},m(r,o){C(t,r,o),n=!0},p(r,o){const s={};o&1&&(s.nodes=r[0]),t.$set(s)},i(r){n||(_(t.$$.fragment,r),n=!0)},o(r){b(t.$$.fragment,r),n=!1},d(r){S(t,r)}}}function ln(e){let t,n,r,o=e[0]&&e[1]!==null&&Ie(e);return n=new Xt({}),{c(){o&&o.c(),t=we(),I(n.$$.fragment)},m(s,i){o&&o.m(s,i),L(s,t,i),C(n,s,i),r=!0},p(s,[i]){s[0]&&s[1]!==null?o?(o.p(s,i),i&3&&_(o,1)):(o=Ie(s),o.c(),_(o,1),o.m(t.parentNode,t)):o&&(H(),b(o,1,1,()=>{o=null}),K())},i(s){r||(_(o),_(n.$$.fragment,s),r=!0)},o(s){b(o),b(n.$$.fragment,s),r=!1},d(s){o&&o.d(s),s&&v(t),S(n,s)}}}function un(e,t,n){let r;q(e,Z,h=>n(1,r=h));let{routes:o}=t,{config:s={}}=t,i,c;window.routify=window.routify||{},window.routify.inBrowser=!window.navigator.userAgent.match("jsdom"),Object.assign(O,s),He("routifyupdatepage",(...h)=>c&&c.updatePage(...h));const l=h=>n(0,i=h),u=()=>{!c||(c.destroy(),c=null)};let f=null;const m=()=>{clearTimeout(f),f=setTimeout(()=>{u(),c=sn(o,l),ue.set(o),c.updatePage()})};return $t(u),e.$$set=h=>{"routes"in h&&n(2,o=h.routes),"config"in h&&n(3,s=h.config)},e.$$.update=()=>{e.$$.dirty&4&&o&&m()},[i,r,o,s]}class fn extends Y{constructor(t){super(),X(this,t,un,ln,D,{routes:2,config:3})}}function E(e){const t=async function(r){return await ct(e,{file:r.tree,state:{treePayload:r},scope:{}})};return t.sync=function(r){return at(e,{file:r.tree,state:{treePayload:r},scope:{}})},t}async function ct(e,t){const n=await e(t);if(n===!1)return!1;const r=n||t.file;if(r.children){const o=await Promise.all(r.children.map(async s=>ct(e,{state:t.state,scope:lt(t.scope||{}),parent:t.file,file:await s})));r.children=o.filter(Boolean)}return r}function at(e,t){const n=e(t);if(n===!1)return!1;const r=n||t.file;if(r.children){const o=r.children.map(s=>at(e,{state:t.state,scope:lt(t.scope||{}),parent:t.file,file:s}));r.children=o.filter(Boolean)}return r}function lt(e){return JSON.parse(JSON.stringify(e))}const dn=E(({file:e})=>{(e.isPage||e.isFallback)&&(e.regex=At(e.path,e.isFallback))}),pn=E(({file:e})=>{e.paramKeys=Xe(e.path)}),hn=E(({file:e})=>{e.isFallback||e.isIndex?e.shortPath=e.path.replace(/\/[^/]+$/,""):e.shortPath=e.path}),mn=E(({file:e})=>{e.ranking=jt(e)}),_n=E(({file:e})=>{const t=e,n=e.meta&&e.meta.children||[];n.length&&(t.children=t.children||[],t.children.push(...n.map(r=>({isMeta:!0,...r,meta:r}))))}),gn=E(e=>{const{file:t}=e,{isFallback:n,meta:r}=t,o=t.path.split("/").pop().startsWith(":"),s=t.path.endsWith("/index"),i=r.index||r.index===0,c=r.index===!1;t.isIndexable=i||!n&&!o&&!s&&!c,t.isNonIndexable=!t.isIndexable}),yn=E(({file:e,parent:t})=>{Object.defineProperty(e,"parent",{get:()=>t}),Object.defineProperty(e,"nextSibling",{get:()=>Ae(e,1)}),Object.defineProperty(e,"prevSibling",{get:()=>Ae(e,-1)}),Object.defineProperty(e,"lineage",{get:()=>ut(t)})});function ut(e,t=[]){return e&&(t.unshift(e),ut(e.parent,t)),t}function Ae(e,t){if(!e.root){const n=e.parent.children.filter(o=>o.isIndexable),r=n.indexOf(e);return n[r+t]}}const bn=E(({file:e,parent:t})=>{e.isIndex&&Object.defineProperty(t,"index",{get:()=>e})}),wn=E(({file:e,scope:t})=>{Object.defineProperty(e,"layouts",{get:()=>n(e)});function n(r){if(!r.isLayout&&r.meta.reset)return[];const{parent:o}=r,s=o&&o.component&&o,i=s&&(s.isReset||s.meta.reset),c=o&&!i&&n(o)||[];return s&&c.push(s),c}}),Pn=e=>{E(t=>{(t.file.isPage||t.file.isFallback)&&t.state.treePayload.routes.push(t.file)}).sync(e),e.routes.sort((t,n)=>t.ranking>=n.ranking?-1:1)},kn=E(({file:e})=>{const t=e.root?a:e.children?e.isPage?i:r:e.isReset?c:e.isLayout?n:e.isFallback?o:s;Object.setPrototypeOf(e,t.prototype);function n(){}function r(){}function o(){}function s(){}function i(){}function c(){}function a(){}}),$n=Object.freeze(Object.defineProperty({__proto__:null,setRegex:dn,setParamKeys:pn,setShortPath:hn,setRank:mn,addMetaChildren:_n,setIsIndexable:gn,assignRelations:yn,assignIndex:bn,assignLayout:wn,createFlatList:Pn,setPrototype:kn},Symbol.toStringTag,{value:"Module"})),xn={isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!1,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},id:"__fallback"};function ft(e){return Object.entries(xn).forEach(([t,n])=>{typeof e[t]>"u"&&(e[t]=n)}),e.children&&(e.children=e.children.map(ft)),e}const vn=E(({file:e})=>{e.api=new En(e)});class En{constructor(t){this.__file=t,Object.defineProperty(this,"__file",{enumerable:!1}),this.isMeta=!!t.isMeta,this.path=t.path,this.title=Rn(t),this.meta=t.meta}get parent(){return!this.__file.root&&this.__file.parent.api}get children(){return(this.__file.children||this.__file.isLayout&&this.__file.parent.children||[]).filter(t=>!t.isNonIndexable).sort((t,n)=>t.isMeta&&n.isMeta?0:(t=(t.meta.index||t.meta.title||t.path).toString(),n=(n.meta.index||n.meta.title||n.path).toString(),t.localeCompare(n,void 0,{numeric:!0,sensitivity:"base"}))).map(({api:t})=>t)}get next(){return je(this,1)}get prev(){return je(this,-1)}async preload(){const t=[...this.__file.layouts,this.__file,this.index&&this.index.__file].filter(Boolean).map(n=>n.component());await Promise.all(t)}get component(){return this.__file.component?this.__file.component():this.__file.index?this.__file.index.component():!1}get componentWithIndex(){return new Promise(t=>Promise.all([this.component,this.index&&this.index.component]).then(n=>t(n)))}get index(){const t=this.__file.children&&this.__file.children.find(n=>n.isIndex);return t&&t.api}}function je(e,t){if(!e.__file.root){const r=e.parent.children.indexOf(e);return e.parent.children[r+t]}}function Rn(e){return typeof e.meta.title<"u"?e.meta.title:(e.shortPath||e.path).split("/").pop().replace(/-/g," ")}const Ne={...$n,restoreDefaults:({tree:e})=>ft(e),assignAPI:vn};function Ln(e){const t=["restoreDefaults","setParamKeys","setRegex","setShortPath","setRank","assignLayout","setPrototype","addMetaChildren","assignRelations","setIsIndexable","assignIndex","assignAPI","createFlatList"],n={tree:e,routes:[]};for(let r of t)(Ne[r].sync||Ne[r])(n);return n}const On="modulepreload",Cn=function(e){return"/"+e},Me={},U=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Cn(s),s in Me)return;Me[s]=!0;const i=s.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(!!r)for(let u=o.length-1;u>=0;u--){const f=o[u];if(f.href===s&&(!i||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${c}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":On,i||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),i)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},Sn={root:!0,ownMeta:{preload:"proximity"},children:[{isFallback:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/_fallback",component:()=>U(()=>import("./_fallback.34bdb84e.js"),["assets/_fallback.34bdb84e.js","assets/_fallback.1cd44a11.css"]).then(e=>e.default)},{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/about",id:"_about",component:()=>U(()=>import("./about.3dd22ed7.js"),["assets/about.3dd22ed7.js","assets/styles.7322d83f.js","assets/styles.c5bb7f66.css","assets/Header.091d5c7a.js","assets/Header.45aec658.css","assets/about.1c817232.css"]).then(e=>e.default)},{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/contact",id:"_contact",component:()=>U(()=>import("./contact.246cccf2.js"),["assets/contact.246cccf2.js","assets/styles.7322d83f.js","assets/styles.c5bb7f66.css","assets/Header.091d5c7a.js","assets/Header.45aec658.css","assets/contact.35d8b571.css"]).then(e=>e.default)},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/index",id:"_index",component:()=>U(()=>import("./index.6195b72c.js"),["assets/index.6195b72c.js","assets/styles.7322d83f.js","assets/styles.c5bb7f66.css","assets/20.031e5bfc.js","assets/index.99ceb3b7.css"]).then(e=>e.default)},{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/portfolio",id:"_portfolio",component:()=>U(()=>import("./portfolio.53f6a52a.js"),["assets/portfolio.53f6a52a.js","assets/Header.091d5c7a.js","assets/styles.7322d83f.js","assets/styles.c5bb7f66.css","assets/Header.45aec658.css","assets/20.031e5bfc.js","assets/portfolio.7a3e35ce.css"]).then(e=>e.default)}],isLayout:!0,meta:{preload:"proximity",recursive:!0,prerender:!0},path:"/",id:"__layout",component:()=>U(()=>import("./_layout.5d1d4974.js"),[]).then(e=>e.default)},{tree:Hn,routes:Tn}=Ln(Sn);function In(e){let t,n;return t=new fn({props:{routes:Tn}}),{c(){I(t.$$.fragment)},m(r,o){C(t,r,o),n=!0},p:x,i(r){n||(_(t.$$.fragment,r),n=!0)},o(r){b(t.$$.fragment,r),n=!1},d(r){S(t,r)}}}class An extends Y{constructor(t){super(),X(this,t,null,In,D,{})}}ht(An,{target:document.body},"routify-app");export{yt as A,bt as B,gt as C,Y as S,we as a,V as b,L as c,Nn as d,be as e,v as f,q as g,ke as h,X as i,jn as j,Un as k,I as l,C as m,x as n,_ as o,b as p,S as q,Fn as r,D as s,Be as t,Dn as u,Bn as v,qn as w,B as x,Mn as y,_t as z};
