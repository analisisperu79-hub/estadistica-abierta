(() => {
/*
  ESTADÍSTICA ABIERTA — CONTROL GLOBAL DE ANUNCIOS

  Mientras enabled = false:
  - Los espacios publicitarios permanecen vacíos.
  - Conservan su tamaño para evitar saltos en el diseño.

  Cuando tengas AdSense:
  1. Cambia enabled a true.
  2. Sustituye clientId por tu ca-pub real.
  3. Coloca los IDs de cada bloque en slots.
*/

const CONFIG={
  enabled:false,
  clientId:"ca-pub-XXXXXXXXXXXXXXXX",
  slots:{
    "lesson-middle":"",
    "lesson-bottom":"",
    "sidebar-top":""
  }
};

if(!CONFIG.enabled)return;

if(!document.querySelector("script[data-ea-adsense]")){
  const script=document.createElement("script");
  script.async=true;
  script.crossOrigin="anonymous";
  script.dataset.eaAdsense="true";
  script.src=`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CONFIG.clientId}`;
  document.head.appendChild(script);
}

document.querySelectorAll(".ea-ad-slot").forEach(container=>{
  const position=container.dataset.adPosition;
  const slot=CONFIG.slots[position];

  if(!slot)return;

  const ad=document.createElement("ins");
  ad.className="adsbygoogle";
  ad.style.display="block";
  ad.dataset.adClient=CONFIG.clientId;
  ad.dataset.adSlot=slot;
  ad.dataset.adFormat="auto";
  ad.dataset.fullWidthResponsive="true";

  container.replaceChildren(ad);
  container.classList.add("is-live");

  try{
    (window.adsbygoogle=window.adsbygoogle||[]).push({});
  }catch{}
});
})();