"""Ana sayfa (TR) tek seferlik güncellemesi: telefon, footer, bülten, AJAX form, asistan ikonu, vaka bölümü, dil butonu."""
import re, json, html, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
P = os.path.join(ROOT, "index.html")
h = open(P, encoding="utf-8").read()
D = json.load(open(os.path.join(ROOT, "content.json"), encoding="utf-8"))
E = html.escape

# telefon
h = h.replace("+905418629190", "+905412609190").replace("+90 541 862 91 90", "+90 541 260 91 90")

# forklift görseli
h = h.replace('<div class="ph"><img src="img/d/forkliftinsanmesafe.webp" alt="" loading="lazy"></div>', '<div class="ph"><img src="img/det-forklift.webp" alt="" loading="lazy"></div>')
h = h.replace("['img/d/forkliftinsanmesafe.webp','10:42']", "['img/det-forklift.webp','10:42']")

# asistan ikonu
h = h.replace(".side .me i{width:30px;height:30px;border-radius:9px;background:conic-gradient(from 210deg,var(--acc),var(--vio),var(--acc));display:block}",
              ".side .me i{width:34px;height:34px;border-radius:9px;background:#fff url(/img/logo-icon.png) center/70% no-repeat;box-shadow:inset 0 0 0 1px var(--line);display:block}")
h = h.replace(".bot>i{flex:none;width:30px;height:30px;border-radius:9px;background:conic-gradient(from 210deg,var(--acc),var(--vio),var(--acc))}",
              ".bot>i{flex:none;width:30px;height:30px;border-radius:9px;background:#fff url(/img/logo-icon.png) center/70% no-repeat;box-shadow:inset 0 0 0 1px var(--line)}")
h = h.replace(".ask .t i{width:22px;height:22px;border-radius:50%;background:conic-gradient(from 0deg,var(--acc),var(--vio),var(--acc));display:block}",
              ".ask .t i{width:24px;height:24px;border-radius:6px;background:#fff url(/img/logo-icon.png) center/72% no-repeat;display:block}")

# dil butonu
h = h.replace('<div class="hvcta"><a href="#iletisim">İletişim</a>', '<a class="hvlang" href="/en/" hreflang="en" aria-label="English">EN</a><div class="hvcta"><a href="#iletisim">İletişim</a>')

# vaka çalışmaları bölümü (blogun önüne)
cases = [p for p in D["pages"] if p["path"].startswith("/vaka-calismalari/")]
CIMG = {"gida": "img/d/kumes2.webp", "isg": "img/det-kkd.webp", "kalite": "img/det-cnc.webp", "tekstil": "img/d/dikim-bant1.webp", "lojistik": "img/det-forklift.webp"}
def cimg(p):
    for k, v in CIMG.items():
        if k in p: return v
    return "img/det-hat.webp"
def metric(p):
    m = re.search(r"%\s?\d+[.,]?\d*", p["title"] + " " + p["desc"])
    return m.group(0).replace(" ", "") if m else ""
cards = "".join(f'<a class="vk rv" href="{c["path"]}/"><div class="im"><img src="{cimg(c["path"])}" alt="" loading="lazy">{f"<b>{metric(c)}</b>" if metric(c) else ""}</div><div class="bd"><small>Vaka çalışması</small><h4>{E(c["title"])}</h4><p>{E(c["desc"][:140])}…</p></div></a>' for c in cases)
VAKA = f'''<section id="vaka">
  <div class="wrap">
    <div class="bl-head"><h2 class="h rv">Vaka çalışmaları<span>sahadan ölçülmüş sonuçlar</span></h2><a class="rv" href="/vaka-calismalari/">Tüm vakalar →</a></div>
    <div class="vks">{cards}</div>
  </div>
</section>

'''
if 'id="vaka"' not in h:
    h = h.replace('<section id="sss">', VAKA + '<section id="sss">', 1)

# footer
FOOT = '''<footer class="hvf">
  <div class="wrap">
    <div class="fg">
      <div class="fb1"><img src="/img/logo-white.png" alt="Hype Vision" width="150" height="27">
        <p>İnsan denetimini yapay zekâya devrederek İSG, verimlilik, kalite ve güvenlikte ölçülebilir sonuç üretiyoruz.</p>
        <address>GTÜ Teknopark, Hightech Binası<br>41480 Gebze, Kocaeli, Türkiye</address>
        <p class="fc"><a href="mailto:info@hypevisionlab.com">info@hypevisionlab.com</a><br><a href="tel:+905412609190">+90 541 260 91 90</a></p>
        <form class="nl" data-form="newsletter"><label for="nl-mail">Bülten · Endüstriyel AI ve akıllı üretim güncellemeleri</label>
          <div><input id="nl-mail" type="email" name="email" placeholder="E-posta adresiniz" required><button type="submit">Abone ol</button></div><span class="msg" aria-live="polite"></span></form>
      </div>
      <div><h6>Ürün</h6><ul><li><a href="/#urun">Hype Asistan</a></li><li><a href="/#teknoloji">Kamera entegrasyonu</a></li><li><a href="/cozumler/">Denetim modülleri</a></li><li><a href="/onvif-rtsp-yapay-zeka-entegrasyonu/">ONVIF / RTSP entegrasyonu</a></li><li><a href="/cctv-yapay-zeka/">CCTV yapay zeka</a></li><li><a href="/#iletisim">İletişim</a></li></ul></div>
      <div><h6>Çözümler</h6><ul><li><a href="/cozumler/">Tüm çözümler</a></li><li><a href="/baret-tespit-sistemi/">Baret tespit sistemi</a></li><li><a href="/kkd-kontrol-kamera-sistemi/">KKD kontrol sistemi</a></li><li><a href="/forklift-yaya-guvenlik-sistemi/">Forklift–yaya güvenliği</a></li><li><a href="/dusme-tespit-sistemi/">Düşme tespit sistemi</a></li><li><a href="/kalite-kontrol-goruntu-isleme/">Kalite kontrol</a></li><li><a href="/endustriyel-goruntu-isleme/">Endüstriyel görüntü işleme</a></li></ul></div>
      <div><h6>Sektörler</h6><ul><li><a href="/sektorler/">Tüm sektörler</a></li><li><a href="/sektor/imalat/">İmalat</a></li><li><a href="/sektor/tekstil/">Tekstil</a></li><li><a href="/sektor/otomotiv/">Otomotiv</a></li><li><a href="/sektor/gida/">Gıda</a></li><li><a href="/sektor/metal/">Metal</a></li><li><a href="/sektor/depo-lojistik-guvenlik/">Lojistik</a></li></ul></div>
      <div><h6>Kurumsal</h6><ul><li><a href="/hakkimizda/">Hakkımızda</a></li><li><a href="/vaka-calismalari/">Vaka çalışmaları</a></li><li><a href="/blog/">Blog</a></li><li><a href="/is-ortakligi/">İş ortaklığı</a></li><li><a href="/kariyer/">Kariyer</a></li><li><a href="/sss/">SSS</a></li><li><a href="/yasal/">Yasal</a></li></ul></div>
    </div>
    <div class="fbot"><span>© 2026 Hype Teknoloji · Hype Vision</span><span><a href="/gizlilik-politikasi/">Gizlilik Politikası</a><a href="/hizmet-sartlari/">Hizmet Şartları</a><a href="/cerez-politikasi/">Çerez Politikası</a><a href="https://www.instagram.com/hypevisionlab/" target="_blank" rel="noopener">Instagram</a></span></div>
  </div>
</footer>'''
h = re.sub(r"<footer[^>]*>.*?</footer>", FOOT, h, count=1, flags=re.S)

CSS = '''
/* lang */
.hvlang{pointer-events:auto;margin-left:auto;margin-right:8px;font-size:13px;font-weight:700;letter-spacing:.04em;height:44px;min-width:44px;padding:0 12px;border-radius:12px;display:grid;place-items:center;background:rgba(236,236,234,.6);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);box-shadow:inset 0 0 0 1px rgba(255,255,255,.35)}
.hvlang:hover{background:#fff}
/* vaka */
.vks{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-top:40px}
.vk{background:var(--bg2);border-radius:10px;overflow:hidden;display:flex;flex-direction:column;transition:.25s}
.vk:hover{transform:translateY(-3px);box-shadow:0 20px 40px -24px rgba(0,0,0,.3)}
.vk .im{position:relative;aspect-ratio:4/3;overflow:hidden}.vk .im img{width:100%;height:100%;object-fit:cover}
.vk .im b{position:absolute;left:12px;bottom:12px;background:#fff;border-radius:8px;padding:6px 10px;font-size:20px;font-weight:700;letter-spacing:-.02em}
.vk .bd{padding:16px 18px 20px}
.vk small{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--acc)}
.vk h4{font-size:16px;font-weight:600;line-height:1.3;margin-top:6px}
.vk p{font-size:13px;color:var(--mute);margin-top:6px}
@media (max-width:1100px){.vks{grid-template-columns:repeat(3,1fr)}}
@media (max-width:700px){.vks{grid-template-columns:1fr 1fr}}
/* footer */
footer.hvf{background:#141516;color:#9C9FA4;margin-top:110px;padding:70px 0 30px;border:0;font-size:14px}
.hvf .fg{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr 1fr;gap:34px}
.hvf .fb1 img{height:27px;width:auto}
.hvf .fb1 p{margin-top:16px;max-width:36ch;line-height:1.55}
.hvf address{font-style:normal;margin-top:16px;line-height:1.6}
.hvf .fc a{color:#fff;font-weight:600}
.hvf h6{color:#fff;font-size:14px;font-weight:600;margin-bottom:14px}
.hvf ul{list-style:none;display:grid;gap:9px}
.hvf a:hover{color:#fff}
.nl{margin-top:22px}
.nl label{display:block;font-size:12px;color:#7D8086;margin-bottom:8px}
.nl div{display:flex;gap:6px;background:#232427;border-radius:99px;padding:4px;max-width:360px}
.nl input{flex:1;min-width:0;background:none;border:0;outline:none;color:#fff;font:inherit;padding:0 14px}
.nl button{border:0;cursor:pointer;font:inherit;font-weight:600;background:var(--pill);color:var(--pillInk);border-radius:99px;padding:10px 16px}
.nl .msg,.cform .msg{display:block;font-size:13px;margin-top:8px}
.fbot{border-top:1px solid #2A2B2F;margin-top:50px;padding-top:22px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:13px;color:#6E7177}
.fbot span:last-child{display:flex;gap:18px;flex-wrap:wrap}
@media (max-width:1000px){.hvf .fg{grid-template-columns:1fr 1fr}.hvf .fb1{grid-column:1/-1}}
'''
if "/* lang */" not in h:
    h = h.replace("</style>", CSS + "</style>", 1)

# AJAX form
h = h.replace('<form class="cform rv" action="https://formsubmit.co/info@hypevisionlab.com" method="POST">', '<form class="cform rv" data-form="contact">')
h = h.replace('<span class="kv">Bilgileriniz yalnızca size dönüş yapmak için kullanılır.</span>', '<span class="msg" aria-live="polite"></span><span class="kv">Bilgileriniz yalnızca size dönüş yapmak için kullanılır. <a href="/gizlilik-politikasi/" style="text-decoration:underline">Gizlilik Politikası</a></span>')
JS = '''
/* forms (FormSubmit AJAX — eski siteyle aynı akış) */
document.querySelectorAll('form[data-form]').forEach(f=>f.addEventListener('submit',async e=>{
  e.preventDefault();const msg=f.querySelector('.msg'),btn=f.querySelector('button');const L=document.documentElement.lang==='en';
  const kind=f.dataset.form;const data=Object.fromEntries(new FormData(f).entries());if(data._honey)return;
  const payload={_captcha:'false',_template:'table',_subject:kind==='newsletter'?(L?'Newsletter signup':'Bülten aboneliği'):(L?'Website contact: ':'Web sitesi iletişim: ')+(data.sirket||data.ad||''),_form:kind,sayfa:location.pathname,...data};
  btn.disabled=true;msg.textContent=L?'Sending…':'Gönderiliyor…';msg.style.color='';
  try{const r=await fetch('https://formsubmit.co/ajax/info@hypevisionlab.com',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(payload)});
    const j=await r.json();if(r.ok&&String(j.success)==='true'){msg.textContent=kind==='newsletter'?(L?'Thanks, you are subscribed.':'Teşekkürler, aboneliğiniz alındı.'):(L?'Thanks! We will get back to you shortly.':'Teşekkürler! En kısa sürede dönüş yapacağız.');msg.style.color='#1C8A55';f.reset()}
    else throw 0}catch(_){msg.textContent=L?'Could not send. Please email info@hypevisionlab.com.':'Gönderilemedi. Lütfen info@hypevisionlab.com adresine yazın.';msg.style.color='#C7363B'}
  btn.disabled=false}));
'''
if "/* forms (" not in h:
    h = h.replace("/* misc */", JS + "\n/* misc */", 1)
open(P, "w", encoding="utf-8").write(h)
print("ok", h.count("+90 541 260 91 90"), 'id="vaka"' in h)
