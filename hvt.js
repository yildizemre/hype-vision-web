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
// ziyaretçiye kalıcı kısa kod: WhatsApp mesajına eklenir, paneldeki tıklama kaydıyla eşleşir
function code(){var c=ls('hv_ref');if(!c){var A='ABCDEFGHJKLMNPRSTUVYZ23456789';c='';for(var i=0;i<4;i++)c+=A.charAt(Math.floor(Math.random()*A.length));ls('hv_ref',c)}return c}
var EN=(document.documentElement.lang||'').indexOf('en')===0;
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href*="wa.me/"],a[href^="tel:"]');if(!a)return;
  if(a.href.indexOf('tel:')===0)return send('telefon',{buton:(a.textContent||'').trim().slice(0,60),ref:code()});
  var r=code();try{var u=new URL(a.href),t=u.searchParams.get('text')||(EN?'Hello, I would like to get information.':'Merhaba, bilgi almak istiyorum.');
    if(t.indexOf('Ref:')<0)a.href=u.origin+u.pathname+'?text='+encodeURIComponent(t+' (Ref: '+r+')')}catch(_){}
  send('whatsapp',{buton:(a.textContent||'').trim().slice(0,60),ref:r})},true);
// "Biz arayalım" formu (ön analiz kutusu)
document.addEventListener('submit',function(e){var f=e.target;if(!f.matches||!f.matches('form[data-cb]'))return;e.preventDefault();
  var d={ad:(f.ad&&f.ad.value||'').trim(),sirket:(f.sirket&&f.sirket.value||'').trim(),telefon:(f.telefon.value||'').trim()},m=f.querySelector('.hvcb-msg');
  if(d.telefon.replace(/\D/g,'').length<10){m.textContent=EN?'Please enter a valid phone number.':'Lütfen geçerli bir telefon numarası yazın.';return}
  var bt=f.querySelector('button');bt.disabled=true;
  fetch('https://formsubmit.co/ajax/info@hypevisionlab.com',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},
    body:JSON.stringify(Object.assign({_captcha:'false',_template:'table',_subject:(EN?'Callback request: ':'Geri arama talebi: ')+(d.sirket||d.ad||d.telefon),_form:'geri-arama',sayfa:location.pathname,ref:code()},d))})
  .then(function(){},function(){}).then(function(){f.innerHTML='<p class="hvcb-ok">'+(EN?'Thank you! We will call you within one business day.':'Teşekkürler! En geç 1 iş günü içinde sizi arayacağız.')+'</p>'})},true);
})();
