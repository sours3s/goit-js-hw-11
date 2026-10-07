import{a as p,S as d,i as n}from"./assets/vendor-Cl33yHFG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="57930041-98ffbfcb0d5f6c92ccc9089fe",y="https://pixabay.com/api/";function h(i){return p.get(y,{params:{key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:o,comments:f,downloads:m})=>`<li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img class="gallery-image" src="${s}" alt="${e}" />
  </a>
  <ul class="info">
    <li class="info-item"><b>Likes</b><span>${t}</span></li>
    <li class="info-item"><b>Views</b><span>${o}</span></li>
    <li class="info-item"><b>Comments</b><span>${f}</span></li>
    <li class="info-item"><b>Downloads</b><span>${m}</span></li>
  </ul>
</li>`).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){c.innerHTML=""}function q(){u.classList.add("is-active")}function v(){u.classList.remove("is-active")}const l=document.querySelector(".form");l.addEventListener("submit",i=>{i.preventDefault();const r=l.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query.",position:"topRight"});return}S(),q(),h(r).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(s.hits)}).catch(()=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
