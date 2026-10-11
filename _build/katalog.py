"""Katalog indirme sayfası (TR /katalog, EN /en/catalog): form FormSubmit'e gider, ardından PDF iner."""
TXT = {"tr": dict(path="/katalog", t="Ürün kataloğu", h="Endüstriyel yapay zekâ çözümleri kataloğu",
  l="21 sayfalık katalog; modül künyeleri, doğruluk aralıkları, teknik gereksinimler ve 16 sık sorulan soruyu içerir. İSG, kalite kontrol, personel verimliliği ve ONVIF/RTSP entegrasyonu tek dokümanda.",
  li=["KKD, baret, tehlikeli bölge ve forklift–yaya modülleri", "Kalite kontrol OK/RED ve yüzey kusuru tespiti", "OEE, boşta kalma ve personel verimliliği KPI'ları", "Edge / cloud mimari ve KVKK uyum rehberi"],
  foot="Bilişim Vadisi, Gebze · Hype Vision · 2020'den beri endüstriyel yapay zekâ", fh="Kataloğu indirmek için formu doldurun", fs="Bilgileriniz yalnızca katalog talebiniz için kullanılır.",
  f=["Ad soyad *", "Firma / şirket *", "E-posta *", "Telefon *", "Adres"], b="Kataloğu indir →", ok="Teşekkürler! Katalog indiriliyor…", err="Form gönderilemedi, katalog yine de indiriliyor.",
  q='Sorularınız mı var? <a href="/sss">SSS sayfasına</a> göz atın veya <a href="/#iletisim">doğrudan iletişime geçin</a>.', home="Ana sayfa", subj="Katalog indirme talebi"),
 "en": dict(path="/en/catalog", t="Product catalogue", h="Industrial AI solutions catalogue",
  l="A 21-page catalogue with module data sheets, accuracy ranges, technical requirements and 16 FAQs. Safety, quality control, workforce productivity and ONVIF/RTSP integration in one document.",
  li=["PPE, hard hat, danger zone and forklift–pedestrian modules", "Quality control OK/NOK and surface defect detection", "OEE, idle time and workforce productivity KPIs", "Edge / cloud architecture and privacy compliance guide"],
  foot="Bilişim Vadisi (IT Valley), Gebze · Hype Vision · industrial AI since 2020", fh="Fill in the form to download the catalogue", fs="Your details are only used for your catalogue request.",
  f=["Full name *", "Company *", "Email *", "Phone *", "Address"], b="Download catalogue →", ok="Thank you! Your download is starting…", err="The form could not be sent, but your download is starting.",
  q='Questions? See the <a href="/en/faq">FAQ</a> or <a href="/en/#iletisim">contact us directly</a>.', home="Home", subj="Catalogue download request")}

CSS = """<style>.kt{display:grid;grid-template-columns:1.1fr 1fr;gap:50px;align-items:start;margin-top:30px}
.kt h1{font-size:clamp(32px,3.6vw,52px);line-height:1.08;letter-spacing:-.025em;font-weight:600;margin-top:12px}
.kt .l{color:#4A4D52;font-size:17px;margin-top:16px;max-width:56ch}
.kt ul{list-style:none;display:grid;gap:8px;margin-top:22px}.kt li{background:var(--bg2);border-radius:8px;padding:13px 16px 13px 40px;position:relative}
.kt li::before{content:"✓";position:absolute;left:16px;color:var(--acc);font-weight:800}
.kt .ft{font-size:13px;color:var(--mute);margin-top:18px}
.kt .cover{margin-top:24px;border-radius:12px;overflow:hidden;aspect-ratio:16/9}.kt .cover img{width:100%;height:100%;object-fit:cover}
.kf{background:var(--bg2);border-radius:14px;padding:30px;display:grid;gap:12px;position:sticky;top:100px}
.kf h3{font-size:20px;font-weight:600}.kf small{color:var(--mute)}
.kf label{font-size:12px;font-weight:600;color:var(--mute);display:grid;gap:6px}
.kf input{font:inherit;font-size:15px;background:#fff;border:1px solid var(--line);border-radius:8px;padding:12px 14px;outline:none}
.kf input:focus{border-color:var(--acc);box-shadow:0 0 0 3px rgba(31,200,214,.15)}
.kf button{font:inherit;font-weight:600;border:0;cursor:pointer;background:var(--ink);color:#fff;border-radius:99px;padding:14px 22px}
.kf .msg{font-size:13px}.kf p.q{font-size:13px;color:var(--mute)}.kf p.q a{color:var(--ink);text-decoration:underline}
@media (max-width:900px){.kt{grid-template-columns:1fr}.kf{position:static}}</style>"""

JS = """<script>document.getElementById('katForm').addEventListener('submit',async e=>{e.preventDefault();const f=e.target,m=f.querySelector('.msg'),d=Object.fromEntries(new FormData(f));if(d._honey)return;f.querySelector('button').disabled=true;
let ok=false;try{const r=await fetch('https://formsubmit.co/ajax/info@hypevisionlab.com',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({_captcha:'false',_template:'table',_subject:'__SUBJ__ — '+(d.firma||''),_form:'katalog',...d})});ok=r.ok}catch(_){}
m.textContent=ok?'__OK__':'__ERR__';m.style.color=ok?'#1C8A55':'#C7363B';window.hvTrack&&hvTrack('catalog_download',{ok:ok});
const a=document.createElement('a');a.href='/hype_vision_katalog.pdf';a.download='Hype_Vision_Katalog.pdf';document.body.appendChild(a);a.click();a.remove();f.querySelector('button').disabled=false});</script>"""

def run(c, lang):
    t = TXT[lang]; E = c["E"]; h = "/" if lang == "tr" else "/en/"
    names = ["ad", "firma", "email", "telefon", "adres"]; types = ["text", "text", "email", "tel", "text"]
    fields = "".join(f'<label>{lab}<input name="{n}" type="{ty}"{" required" if "*" in lab else ""}></label>' for lab, n, ty in zip(t["f"], names, types))
    js = JS.replace("__SUBJ__", t["subj"]).replace("__OK__", t["ok"]).replace("__ERR__", t["err"])
    body = f"""{CSS}<div class="wrap"><div class="crumb rv"><a href="{h}">{t['home']}</a> / <span>{t['t']}</span></div>
<div class="kt"><div class="rv"><div class="k-eyebrow">{t['t']}</div><h1>{t['h']}</h1><p class="l">{t['l']}</p>
<ul>{''.join(f'<li>{E(x)}</li>' for x in t['li'])}</ul><div class="cover"><img src="/img/dijital-ikiz.webp" alt=""></div><p class="ft">{t['foot']}</p></div>
<form class="kf rv" id="katForm"><h3>{t['fh']}</h3><small>{t['fs']}</small>{fields}<input type="text" name="_honey" style="display:none">
<button type="submit">{t['b']}</button><span class="msg" aria-live="polite"></span><p class="q">{t['q']}</p></form></div></div>{js}"""
    c["write"](t["path"], c["shell"](t["t"], t["l"], body, t["path"], lang, crumbs=[(t["home"], h), (t["t"], t["path"])]))
