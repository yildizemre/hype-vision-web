"""Instagram'dan gelenler için kısa karşılama sayfası: /ig (TR) ve /en/ig (EN).
Büyük görsel + 3 vaka + tek tıkla WhatsApp. Arama motorlarına kapalı (noindex)."""
import urllib.parse
WA = "https://wa.me/905412609190?text="
T = {"tr": dict(path="/ig", t="Instagram'dan hoş geldiniz", h="Kameranız zaten var.<br><span>Yapay zekâyı biz ekliyoruz.</span>",
  l="Mevcut kameralarınızla 7/24 KKD, forklift, sayım ve kalite kontrol. Yeni kamera yok, kurulum günler içinde.",
  wa="WhatsApp'tan yazın", wam="Merhaba, Instagram'dan geliyorum, bilgi almak istiyorum.", demo="Ücretsiz demo isteyin",
  k="Sahadan 3 örnek", more="Tüm vakalar →", trust=["200+ kameralı kurulumlar", "On-premise · KVKK uyumlu", "Bilişim Vadisi, Gebze"],
  reels="Videolarımız", home="/", cases="/vaka-calismalari"),
 "en": dict(path="/en/ig", t="Welcome from Instagram", h="You already have the cameras.<br><span>We add the AI.</span>",
  l="24/7 PPE, forklift, counting and quality control with your existing cameras. No new cameras, live within days.",
  wa="Chat on WhatsApp", wam="Hello, I found you on Instagram and would like more information.", demo="Request a free demo",
  k="3 examples from the field", more="All case studies →", trust=["200+ camera deployments", "On-premise · GDPR-friendly", "IT Valley, Gebze"],
  reels="Our videos", home="/en/", cases="/en/case-studies")}
CASES = [("harman", "/img/vaka/harman-1.webp", "200+ kamera · 20+ modül", "200+ cameras · 20+ modules"),
         ("400-kamera", "/img/vaka/kkd-depo.webp", "400 kamerada KKD", "PPE on 400 cameras"),
         ("kaynak", "/img/vaka/kaynak-1.webp", "Kaynak süresi ölçümü", "Welding time measured")]
REELS = [("DbFZNTgKdnJ", "p2.jpg"), ("Da-M9lGKjnd", "p3.jpg"), ("DadvWMbqbbU", "p4.jpg")]
CSS = """<style>
.igh{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;margin-top:20px}
.igh h1{font-size:clamp(34px,5vw,64px);line-height:1.04;letter-spacing:-.03em;font-weight:600}
.igh h1 span{color:var(--mute)}
.igh .l{font-size:18px;color:#4A4D52;margin-top:16px;max-width:44ch}
.igb{display:flex;gap:10px;flex-wrap:wrap;margin-top:26px}
.igb a{display:inline-flex;align-items:center;gap:10px;font-weight:600;font-size:16px;padding:16px 24px;border-radius:99px}
.igb .w{background:#1D1E20;color:#fff}.igb .w i{width:10px;height:10px;border-radius:50%;background:#2BB673}
.igb .d{background:var(--pill);color:var(--pillInk)}
.igt{display:flex;gap:18px;flex-wrap:wrap;margin-top:20px;font-size:13px;color:var(--mute)}
.igt span::before{content:"✓ ";color:var(--acc);font-weight:800}
.igv{border-radius:16px;overflow:hidden;aspect-ratio:4/3;position:relative}
.igv img{width:100%;height:100%;object-fit:cover}
.igv .live{position:absolute;left:14px;top:14px;background:rgba(0,0,0,.6);color:#fff;font-size:12px;font-weight:600;padding:6px 10px;border-radius:99px}
.igv .live::before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:#FF4D4F;margin-right:6px;animation:bl 1s infinite}
.igc{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:20px}
.igc a{border-radius:12px;overflow:hidden;background:var(--bg2);display:block}
.igc .im{aspect-ratio:16/10;overflow:hidden;position:relative}.igc img{width:100%;height:100%;object-fit:cover}
.igc b{display:block;padding:14px 16px;font-size:15px;font-weight:600}
.igr{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:20px}
.igr a{position:relative;aspect-ratio:9/14;border-radius:12px;overflow:hidden;display:block}
.igr img{width:100%;height:100%;object-fit:cover}
.igr a::after{content:"▶";position:absolute;inset:0;display:grid;place-items:center;color:#fff;font-size:28px;background:rgba(0,0,0,.18)}
.igs{display:flex;justify-content:space-between;align-items:end;margin-top:60px}
.igs h2{font-size:24px;font-weight:600}.igs a{font-size:14px;font-weight:600}
@media (max-width:860px){.igh{grid-template-columns:1fr;gap:22px}.igv{order:-1}.igc{grid-template-columns:1fr}.igb a{flex:1;justify-content:center}}
</style>"""

def run(c, lang):
    t = T[lang]; E = c["E"]; D = c["D"]
    wa = WA + urllib.parse.quote(t["wam"])
    pages = {p["path"]: p for p in D["pages"]}
    cards = ""
    for key, img, tr_cap, en_cap in CASES:
        tr_path = next(p for p in pages if p.startswith("/vaka-calismalari/") and key in p)
        href = tr_path if lang == "tr" else c["EN_OF"].get(tr_path, "/en/case-studies")
        cards += f'<a href="{href}"><div class="im"><img src="{img}" alt="" loading="lazy"></div><b>{tr_cap if lang == "tr" else en_cap}</b></a>'
    reels = "".join(f'<a href="https://www.instagram.com/hypevisionlab/reel/{i}/" target="_blank" rel="noopener"><img src="/img/ig/{f}" alt="" loading="lazy"></a>' for i, f in REELS)
    body = f"""{CSS}<div class="wrap">
<div class="igh"><div><div class="k-eyebrow">{t['t']}</div><h1>{t['h']}</h1><p class="l">{t['l']}</p>
<div class="igb"><a class="w" href="{wa}" target="_blank" rel="noopener"><i></i>{t['wa']}</a><a class="d" href="{t['home']}#iletisim">{t['demo']}</a></div>
<div class="igt">{''.join(f'<span>{x}</span>' for x in t['trust'])}</div></div>
<div class="igv"><img src="/img/det-forklift.webp" alt=""><span class="live">LIVE · CAM 04</span></div></div>
<div class="igs"><h2>{t['k']}</h2><a href="{t['cases']}">{t['more']}</a></div><div class="igc">{cards}</div>
<div class="igs"><h2>{t['reels']}</h2><a href="https://www.instagram.com/hypevisionlab/" target="_blank" rel="noopener">@hypevisionlab</a></div><div class="igr">{reels}</div>
<div class="igb" style="margin:40px 0 20px"><a class="w" href="{wa}" target="_blank" rel="noopener"><i></i>{t['wa']}</a></div></div>"""
    html = c["shell"](t["t"], t["l"], body, t["path"], lang)
    html = html.replace('<meta charset="utf-8">', '<meta charset="utf-8">\n<meta name="robots" content="noindex,follow">', 1)
    c["write"](t["path"], html)
