import{j as w,J as v,R as S,M as x,H as L,N as _}from"./vendor.604c25f3.js";const j=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}};j();function E(e){return new Promise(function(o,s){if(document.querySelector(`[href="${e}"]`))return o(e);let i=document.createElement("link");i.href=e,i.rel="stylesheet",i.onload=()=>o(e),i.onerror=()=>s(new Error(`Style load error for ${e}`)),document.head.append(i)})}const k=e=>{var o;return`
  <section id=${e.id} class="${`${(o=e.layout)!=null?o:""} slide`}">
    <div class="inner">
    ${e.image?`
    <div class="image-wrapper">
      <img src=${e.image}>
    </div>`:""}

    ${e.image2?`
    <div class="image2-wrapper">
      <img src=${e.image2}>
    </div>`:""}


      <div class="main">
        ${e.subtitle?`<h2 class="sub-title">${e.subtitle}</h2>`:""}
        ${e.title?`<h1 class="title">${e.title}</h1>`:""}
        ${e.body?`<div class="body">${e.body}</div>`:""}
        ${e.footer?`<div class="footer">${e.footer}</div>`:""}
      </div>
      <div class="main-background"></div>
    </div>
  </section>
`},H=e=>{var o,s,i,t,n,a,l;return{id:e==null?void 0:e["@id"].split("#").pop(),title:(o=e==null?void 0:e["slide:title"])==null?void 0:o._,subtitle:(s=e==null?void 0:e["slide:subTitle"])==null?void 0:s._,body:(i=e==null?void 0:e["slide:body"])==null?void 0:i._,image:(t=e==null?void 0:e["slide:image"])==null?void 0:t._,layout:(n=e==null?void 0:e["slide:layout"])==null?void 0:n._,footer:(a=e==null?void 0:e["slide:footer"])==null?void 0:a._,image2:(l=e==null?void 0:e["slide:image2"])==null?void 0:l._}},$={presentation:"https://presentation.danielbeeke.nl/presentation.ttl#",slide:"https://presentation.danielbeeke.nl/slide.ttl#"},b=e=>e.split(/\:|\/|\,|\#/).pop(),N=async e=>{const i=(await(await fetch(e)).text()).split('<script type="application/json" id="env-json">')[1].split("<\/script>")[0],t=JSON.parse(i),[,,,n,a]=e.split("/"),c=await(await fetch(t.presentation_url.replace("${identifier}",n))).json(),r=await w.expand(c);return console.log(r),v(r,$)["presentation:slides"].find(f=>b(f["@id"])===a)},u=JSON.parse(document.querySelector("#env-json").innerHTML),O=e=>u.presentation_url.replace("${identifier}",e);u.styles&&E(u.styles);(async()=>{const[e,o]=location.pathname.substr(1).split("/");if(!e)throw new Error("Please open the site with a presentation identifier");const i=await(await fetch(O(e))).json(),t=await w.expand(i),n=v(t[0],$);console.log(t);const a=history.replaceState;history.replaceState=(r,d,p)=>{p=p.toString().replace("#","/"+e),a.apply(history,[r,d,p])},console.log(n["presentation:slides"]),document.querySelector("#slides").innerHTML=(await Promise.all(n["presentation:slides"].map(async r=>{var m,h,y,g;const d=(h=(m=r["@type"])==null?void 0:m._)!=null?h:"",f=((y=b(d))==null?void 0:y.toLowerCase())==="reference"?await N((g=r["slide:url"])==null?void 0:g._):r;return k(H(f))}))).join("");const l=1280/window.innerWidth;let c=S({plugins:[x,L,_],hash:!0,margin:0,width:1280,height:window.innerHeight*l,minScale:.1,maxScale:10});c.initialize(),o&&c.addEventListener("ready",()=>{const r=c.getIndices(document.getElementById(o));c.slide(r.h,0)},{once:!0}),window.addEventListener("resize",()=>{const r=1280/window.innerWidth;c.configure({width:1280,height:window.innerHeight*r})})})();
