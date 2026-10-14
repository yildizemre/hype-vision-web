/* Hype Vision: form + WhatsApp talepleri lead paneline (kaynak/UTM ile) */
(function(){
var API='https://lead.hypevisionlab.com/api/public/web-lead',K='hv_src';
function ls(k,v){try{if(v===undefined)return JSON.parse(localStorage.getItem(k)||'null');localStorage.setItem(k,JSON.stringify(v))}catch(_){}}
// ilk geliş kaynağı: UTM / reklam tıklaması / referrer (yeni UTM gelirse güncellenir)
var q=new URLSearchParams(location.search),u={};
['utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbclid','gclid'].forEach(function(k){if(q.get(k))u[k]=q.get(k).slice(0,120)});
var ref=document.referrer&&document.referrer.indexOf(location.host)<0?document.referrer.slice(0,200):'';
if(Object.keys(u).length||!ls(K))ls(K,{utm:u,ref:ref,land:location.pathname,t:Date.now()});
function send(kind,data){var s=ls(K)||{};var b=JSON.stringify({kind:kind,data:data||{},page:location.pathname,lang:document.documentElement.lang||'tr',src:s});
  try{if(navigator.sendBeacon&&navigator.sendBeacon(API,new Blob([b],{type:'text/plain'})))return}catch(_){}
  try{fetch(API,{method:'POST',body:b,headers:{'Content-Type':'text/plain'},keepalive:true,mode:'cors'})}catch(_){}}
// FormSubmit'e giden her form aynı anda panele de kopyalanır
var F=window.fetch;
if(F)window.fetch=function(url,opt){try{if(String(url).indexOf('formsubmit.co/ajax')>-1&&opt&&opt.body){var d=JSON.parse(opt.body),o={};
  for(var k in d)if(k.charAt(0)!=='_'||k==='_form')o[k]=String(d[k]).slice(0,2000);send(d._form||'form',o)}}catch(_){}return F.apply(this,arguments)};
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href*="wa.me/"],a[href^="tel:"]');
  if(a)send(a.href.indexOf('tel:')===0?'telefon':'whatsapp',{buton:(a.textContent||'').trim().slice(0,60)})},true);
})();
