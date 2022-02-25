import{J as y,R as v,M as $,H as b,N as S}from"./vendor.897b6d2a.js";const L=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}};L();function _(t){return new Promise(function(o,s){if(document.querySelector(`[href="${t}"]`))return o(t);let r=document.createElement("link");r.href=t,r.rel="stylesheet",r.onload=()=>o(t),r.onerror=()=>s(new Error(`Style load error for ${t}`)),document.head.append(r)})}const j=t=>{var o;return`
  <section id=${t.id} class="${`${(o=t.layout)!=null?o:""} slide`}">
    <div class="inner">
    ${t.image?`
    <div class="image-wrapper">
      <img src=${t.image}>
    </div>`:""}

    ${t.image2?`
    <div class="image2-wrapper">
      <img src=${t.image2}>
    </div>`:""}


      <div class="main">
        ${t.subtitle?`<h2 class="sub-title">${t.subtitle}</h2>`:""}
        ${t.title?`<h1 class="title">${t.title}</h1>`:""}
        ${t.body?`<div class="body">${t.body}</div>`:""}
        ${t.footer?`<div class="footer">${t.footer}</div>`:""}
      </div>
      <div class="main-background"></div>
    </div>
  </section>
`},x=t=>{var o,s,r,e,n,i,a;return{id:t==null?void 0:t["@id"].split("#").pop(),title:(o=t==null?void 0:t["slide:title"])==null?void 0:o._,subtitle:(s=t==null?void 0:t["slide:subTitle"])==null?void 0:s._,body:(r=t==null?void 0:t["slide:body"])==null?void 0:r._,image:(e=t==null?void 0:t["slide:image"])==null?void 0:e._,layout:(n=t==null?void 0:t["slide:layout"])==null?void 0:n._,footer:(i=t==null?void 0:t["slide:footer"])==null?void 0:i._,image2:(a=t==null?void 0:t["slide:image2"])==null?void 0:a._}},g={presentation:"https://localhost:3000/ttl/presentation.ttl#",slide:"https://localhost:3000/ttl/slide.ttl#"},w=t=>t.split(/\:|\/|\,|\#/).pop(),E=async t=>{const r=(await(await fetch(t)).text()).split('<script type="application/json" id="env-json">')[1].split("<\/script>")[0],e=JSON.parse(r),[,,,n,i]=t.split("/"),c=await(await fetch(e.presentation_url.replace("${identifier}",n))).json();return y(c,g)["presentation:slides"].find(p=>w(p["@id"])===i)},d=JSON.parse(document.querySelector("#env-json").innerHTML),H=t=>d.presentation_url.replace("${identifier}",t);d.styles&&_(d.styles);(async()=>{const[t,o]=location.pathname.substr(1).split("/");if(!t)throw new Error("Please open the site with a presentation identifier");const s=await fetch(H(t)),r=y(await s.json(),g),e=history.replaceState;history.replaceState=(a,c,l)=>{l=l.toString().replace("#","/"+t),e.apply(history,[a,c,l])},document.querySelector("#slides").innerHTML=(await Promise.all(r["presentation:slides"].map(async a=>{var p,u,h,m;const c=(u=(p=a["@type"])==null?void 0:p._)!=null?u:"",f=((h=w(c))==null?void 0:h.toLowerCase())==="reference"?await E((m=a["slide:url"])==null?void 0:m._):a;return j(x(f))}))).join("");const n=1280/window.innerWidth;let i=v({plugins:[$,b,S],hash:!0,margin:0,width:1280,height:window.innerHeight*n,minScale:.1,maxScale:10});i.initialize(),o&&i.addEventListener("ready",()=>{const a=i.getIndices(document.getElementById(o));i.slide(a.h,0)},{once:!0}),window.addEventListener("resize",()=>{const a=1280/window.innerWidth;i.configure({width:1280,height:window.innerHeight*a})})})();
