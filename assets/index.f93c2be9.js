import{j as v,J as y,R as $,M as b,H as S,N as L}from"./vendor.604c25f3.js";const _=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}};_();function j(e){return new Promise(function(o,s){if(document.querySelector(`[href="${e}"]`))return o(e);let r=document.createElement("link");r.href=e,r.rel="stylesheet",r.onload=()=>o(e),r.onerror=()=>s(new Error(`Style load error for ${e}`)),document.head.append(r)})}const x=e=>{var o;return`
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
`},E=e=>{var o,s,r,t,n,i,a;return{id:e==null?void 0:e["@id"].split("#").pop(),title:(o=e==null?void 0:e["slide:title"])==null?void 0:o._,subtitle:(s=e==null?void 0:e["slide:subTitle"])==null?void 0:s._,body:(r=e==null?void 0:e["slide:body"])==null?void 0:r._,image:(t=e==null?void 0:e["slide:image"])==null?void 0:t._,layout:(n=e==null?void 0:e["slide:layout"])==null?void 0:n._,footer:(i=e==null?void 0:e["slide:footer"])==null?void 0:i._,image2:(a=e==null?void 0:e["slide:image2"])==null?void 0:a._}},g={presentation:"https://presentation.danielbeeke.nl/presentation.ttl#",slide:"https://presentation.danielbeeke.nl/slide.ttl#"},w=e=>e.split(/\:|\/|\,|\#/).pop(),k=async e=>{const r=(await(await fetch(e)).text()).split('<script type="application/json" id="env-json">')[1].split("<\/script>")[0],t=JSON.parse(r),[,,,n,i]=e.split("/"),l=await(await fetch(t.presentation_url.replace("${identifier}",n))).json(),c=await v.expand(l);return y(c,g)["presentation:slides"].find(p=>w(p["@id"])===i)},f=JSON.parse(document.querySelector("#env-json").innerHTML),H=e=>f.presentation_url.replace("${identifier}",e);f.styles&&j(f.styles);(async()=>{const[e,o]=location.pathname.substr(1).split("/");if(!e)throw new Error("Please open the site with a presentation identifier");const s=await fetch(H(e)),r=y(await s.json(),g),t=history.replaceState;history.replaceState=(a,l,c)=>{c=c.toString().replace("#","/"+e),t.apply(history,[a,l,c])},document.querySelector("#slides").innerHTML=(await Promise.all(r["presentation:slides"].map(async a=>{var d,p,m,h;const l=(p=(d=a["@type"])==null?void 0:d._)!=null?p:"",u=((m=w(l))==null?void 0:m.toLowerCase())==="reference"?await k((h=a["slide:url"])==null?void 0:h._):a;return x(E(u))}))).join("");const n=1280/window.innerWidth;let i=$({plugins:[b,S,L],hash:!0,margin:0,width:1280,height:window.innerHeight*n,minScale:.1,maxScale:10});i.initialize(),o&&i.addEventListener("ready",()=>{const a=i.getIndices(document.getElementById(o));i.slide(a.h,0)},{once:!0}),window.addEventListener("resize",()=>{const a=1280/window.innerWidth;i.configure({width:1280,height:window.innerHeight*a})})})();
