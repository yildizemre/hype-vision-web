"""Teknik merkez: üretilen SEO sayfaları (uygulamalar, entegrasyon, karşılaştırma, sorun çözümleri, sözlük),
hub sayfaları, kamera uyumluluk aracı ve GPU/benchmark hesaplayıcı. content.json -> D["gen"]."""
import json, os, re

HUBS = {
 "cluster": ("/uygulamalar", "Uygulama ve kusur atlası", "Sektöre göre üretimde, kalitede ve İSG'de kamera ile çözülebilen 95 somut problem."),
 "integration": ("/entegrasyon", "Kamera ve VMS entegrasyonları", "Hikvision, Dahua, Axis kameralara, NVR ve VMS sistemlerine mevcut altyapıyı değiştirmeden yapay zekâ ekleme."),
 "compare": ("/karsilastirma", "Karşılaştırmalar", "Kamera içi yerleşik analitik ile merkezi yapay zekâ analizi arasındaki farklar, tarafsız."),
 "trouble": ("/cctv-sorun-cozumleri", "CCTV sorun çözüm merkezi", "RTSP, ONVIF, NVR ve akış sorunlarına adım adım çözüm rehberleri."),
 "city": ("/bolge", "Bölgelere göre yapay zekâ kamera çözümleri", "Gebze, Kocaeli, İstanbul, Bursa, Manisa, Kayseri ve diğer OSB'lerdeki fabrikalar için İSG, kalite kontrol ve verimlilik."),
 "law": ("/mevzuat", "İSG ve KVKK mevzuat rehberi", "6331 İSG Kanunu, KVKK, KKD, risk değerlendirmesi ve İSG kurulu süreçlerinde kamera ve yapay zekâ verisinin kullanımı."),
}
CRUMB = {"cluster": ("Uygulamalar", "/uygulamalar"), "integration": ("Entegrasyon", "/entegrasyon"), "compare": ("Karşılaştırma", "/karsilastirma"), "trouble": ("Sorun çözümleri", "/cctv-sorun-cozumleri"), "topic": ("Çözümler", "/cozumler"), "glossary": ("Teknik merkez", "/teknik-merkez"), "city": ("Bölgeler", "/bolge"), "law": ("Mevzuat", "/mevzuat")}
IMG_BY_SECTOR = {"Tekstil": "/img/sektor/tekstil.webp", "Otomotiv": "/img/sektor/otomotiv.webp", "Metal işleme": "/img/det-cnc.webp", "Plastik enjeksiyon": "/img/det-hat.webp",
 "Gıda üretimi": "/img/sektor/gida.webp", "İçecek ve dolum": "/img/vaka/mendil-ocr.webp", "İlaç ve kozmetik": "/img/vaka/med-ok.webp", "Kimya": "/img/vaka/kkd-depo.webp",
 "Lojistik depo": "/img/sektor/lojistik.webp", "Maden ve taş ocakları": "/img/vaka/kkd-depo.webp", "Çimento ve beton": "/img/vaka/kkd-depo.webp", "Ahşap ve mobilya": "/img/det-hat.webp",
 "Elektronik üretimi": "/img/det-cnc.webp", "Cam ve seramik": "/img/06-cnc-istasyon.webp", "Kağıt ve ambalaj": "/img/vaka/darbogaz.webp", "İSG ve KKD": "/img/det-kkd.webp",
 "Üretim verimliliği": "/img/vaka/tekstil-bant.webp", "Perakende ve mağaza": "/img/sektor/perakende.webp", "Genel makine görüşü": "/img/det-cnc.webp"}
IMG_BY_TYPE = {"integration": "/img/det-kusbakisi.webp", "compare": "/img/01-kusbakisi.webp", "trouble": "/img/00-genel.webp", "topic": "/img/det-forklift.webp", "glossary": "/img/dijital-ikiz.webp", "city": "/img/01-kusbakisi.webp", "law": "/img/det-kkd.webp"}

# --- İngilizce teknik merkez (yalnızca uluslararası değeri olan tipler; city/law çevrilmez) ---
EN_HUBS = {
 "cluster": ("/en/applications", "Application & defect atlas", "Concrete production, quality and safety problems you can solve with your existing cameras."),
 "integration": ("/en/integrations", "Camera & VMS integrations", "Add AI to Hikvision, Dahua and Axis cameras and to NVR/VMS systems without replacing your infrastructure."),
 "compare": ("/en/comparisons", "Comparisons", "In-camera built-in analytics vs. central AI analysis — objective comparisons."),
 "trouble": ("/en/cctv-troubleshooting", "CCTV troubleshooting center", "Step-by-step fixes for RTSP, ONVIF, NVR and stream problems."),
}
EN_CRUMB = {"cluster": ("Applications", "/en/applications"), "integration": ("Integrations", "/en/integrations"), "compare": ("Comparisons", "/en/comparisons"), "trouble": ("CCTV troubleshooting", "/en/cctv-troubleshooting"), "topic": ("Technical hub", "/en/technical-hub"), "glossary": ("Technical hub", "/en/technical-hub")}
PRE_EN = """<div class="wrap" id="on-analiz" style="margin-top:70px"><div class="pre rv"><div><span class="k-eyebrow">Free · 15 minutes</span>
<h2>What can AI detect in your factory?</h2><p>Let's review together which safety, quality and production analytics your existing security cameras can deliver.</p>
<ul><li>Free 15-minute technical call</li><li>Camera infrastructure pre-assessment</li><li>Feasible AI scenarios</li></ul></div>
<div class="pre-b"><form class="hvcb" data-cb><b>Leave your phone number, we'll call you</b><input name="ad" placeholder="Your name" autocomplete="name"><input name="sirket" placeholder="Company" autocomplete="organization"><input name="telefon" type="tel" placeholder="Phone number" autocomplete="tel" required><button type="submit">Call me</button><small class="hvcb-msg"></small></form><a class="w" href="https://wa.me/905412609190?text=Hello%2C%20I%27d%20like%20a%20free%20camera%20pre-assessment." target="_blank" rel="noopener">Chat on WhatsApp</a><a class="o" href="/en/camera-compatibility">Is my camera compatible?</a></div></div></div>"""

PRE = """<div class="wrap" id="on-analiz" style="margin-top:70px"><div class="pre rv"><div><span class="k-eyebrow">Ücretsiz · 15 dakika</span>
<h2>Fabrikanızda yapay zekâ ile neleri tespit edebiliriz?</h2><p>Mevcut güvenlik kameralarınız üzerinden yapılabilecek İSG, kalite kontrol ve üretim analizlerini birlikte değerlendirelim.</p>
<ul><li>15 dakikalık ücretsiz teknik görüşme</li><li>Kamera altyapısı ön değerlendirmesi</li><li>Uygulanabilir yapay zekâ senaryoları</li></ul></div>
<div class="pre-b"><form class="hvcb" data-cb><b>Telefonunuzu bırakın, biz arayalım</b><input name="ad" placeholder="Adınız" autocomplete="name"><input name="sirket" placeholder="Firma" autocomplete="organization"><input name="telefon" type="tel" placeholder="Telefon (05xx…)" autocomplete="tel" required><button type="submit">Beni arayın</button><small class="hvcb-msg"></small></form><a class="w" href="https://wa.me/905412609190?text=Merhaba%2C%20%C3%BCcretsiz%20kamera%20%C3%B6n%20analizi%20istiyorum." target="_blank" rel="noopener">WhatsApp'tan yazın</a><a class="o" href="/kamera-uyumluluk">Kameram uygun mu?</a></div></div></div>"""
CSS = """<style>
.pre{background:#141516;color:#fff;border-radius:16px;padding:clamp(26px,4vw,44px);display:grid;grid-template-columns:1.4fr 1fr;gap:30px;align-items:center}
.pre h2{font-size:clamp(24px,2.6vw,36px);font-weight:600;letter-spacing:-.02em;margin-top:8px;line-height:1.15}.pre p{color:#B8BBBF;margin-top:10px}
.pre ul{list-style:none;display:grid;gap:6px;margin-top:16px}.pre li::before{content:"✓ ";color:var(--acc);font-weight:800}
.pre-b{display:grid;gap:8px}.pre-b a{text-align:center;font-weight:600;padding:14px 18px;border-radius:99px}
.pre-b .d{background:var(--pill);color:var(--pillInk)}.pre-b .w{background:#2A2B2F;color:#fff}.pre-b .o{box-shadow:inset 0 0 0 1px #3a3c40;color:#fff}
.pre .k-eyebrow{color:var(--acc)}
.hvcb{display:grid;gap:8px;background:#1F2023;border-radius:14px;padding:16px}.hvcb b{font-size:15px}
.hvcb input{font:inherit;font-size:15px;background:#fff;color:#1D1E20;border:0;border-radius:10px;padding:12px 14px}
.hvcb button{font:inherit;font-weight:700;background:var(--pill);color:var(--pillInk);border:0;border-radius:99px;padding:13px;cursor:pointer}.hvcb button:disabled{opacity:.6}
.hvcb-msg{color:#FFB4A8;min-height:0}.hvcb-ok{color:#fff;font-weight:600;padding:8px 2px}

.hubg{margin-top:46px}.hubg h3{font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--acc);margin-bottom:12px}
.hubl{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.hubl a{display:block;background:var(--bg2);border-radius:10px;padding:16px 18px;font-weight:600;font-size:15px;line-height:1.3}.hubl a:hover{background:#EDEDEA}
.hubl a small{display:block;font-weight:400;color:var(--mute);font-size:13px;margin-top:4px}
.tm{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:30px}
.tm a{background:var(--bg2);border-radius:14px;padding:24px;display:flex;flex-direction:column;min-height:180px}.tm a:hover{background:#EDEDEA}
.tm b{font-size:20px;font-weight:600}.tm p{color:var(--mute);font-size:14px;margin-top:6px}.tm span{margin-top:auto;font-weight:600;font-size:14px;padding-top:14px}
.tool{background:var(--bg2);border-radius:16px;padding:26px;margin-top:30px}
.tool .row{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.tool label{font-size:12px;font-weight:600;color:var(--mute);display:grid;gap:6px}
.tool input,.tool select{font:inherit;font-size:15px;background:#fff;border:1px solid var(--line);border-radius:8px;padding:11px 12px}
.res{margin-top:18px;background:#fff;border-radius:12px;padding:20px;box-shadow:inset 0 0 0 1px var(--line)}
.res table{width:100%;border-collapse:collapse;font-size:14px}.res td{padding:9px 10px;border-bottom:1px solid var(--line);vertical-align:top}.res td:first-child{color:var(--mute);width:34%}
.kpi4{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:16px}.kpi4 div{background:#fff;border-radius:10px;padding:16px;box-shadow:inset 0 0 0 1px var(--line)}
.kpi4 b{display:block;font-size:28px;font-weight:600;letter-spacing:-.02em}.kpi4 small{color:var(--mute);font-size:12px}
.badge{display:inline-block;font-size:12px;font-weight:700;padding:3px 9px;border-radius:99px;background:var(--pill);color:var(--pillInk)}
.badge.w{background:#FFF3D6;color:#7A5200}
@media (max-width:900px){.pre{grid-template-columns:1fr}.hubl,.tm{grid-template-columns:1fr}.tool .row,.kpi4{grid-template-columns:1fr 1fr}}
</style>"""

def run(c):
    E, shell, write, cta, faq_html, section_html = c["E"], c["shell"], c["write"], c["cta"], c["faq_html"], c["section_html"]
    G = list(c["D"].get("gen", {}).values())
    h = "/"
    def crumbs(kind, title, path):
        n, u = CRUMB[kind]
        return [("Ana sayfa", "/"), (n, u), (title, path)], f'<a href="/">Ana sayfa</a> / <a href="{u}">{n}</a> / <span>{E(title)}</span>'
    def page(p):
        kind = p["type"]; path = p["path"]
        cr, crh = crumbs(kind, p["title"], path)
        img = IMG_BY_SECTOR.get(p.get("sector")) or IMG_BY_TYPE.get(kind, "/img/det-kusbakisi.webp")
        intro = "".join(f"<p>{E(t)}</p>" for t in p.get("intro", [])[:2])
        short = f'<div class="wrap"><section class="tldr rv"><span class="k-eyebrow">Kısa cevap</span><p style="margin-top:8px;font-size:16px;color:#2F3237">{E(p["short"])}</p></section></div>' if p.get("short") else ""
        secs = "".join(section_html({"h": s.get("h", ""), "p": s.get("p", []) or [], "li": s.get("li", []) or [], "rows": s.get("rows", []) or [], "cards": []}, "tr") for s in p["sections"])
        tags = ""
        if p.get("kws"):
            tags = '<div class="wrap" style="margin-top:30px"><p style="font-size:13px;color:var(--mute)">Bu sayfa şu soruları yanıtlar: ' + " · ".join(E(k) for k in p["kws"][:10]) + "</p></div>"
        body = f"""{CSS}<div class="wrap"><div class="crumb rv">{crh}</div>
<div class="ph rv"><h1>{E(p['title'])}<span>{E(p['desc'])}</span></h1><div class="intro">{intro}<div class="pillg"><a href="/#iletisim">İletişim</a><a class="d" href="#on-analiz">Ücretsiz ön analiz</a></div></div></div>
<div class="pimg rv"><img src="{img}" alt="{E(p['title'])}"></div></div>{short}
<div class="wrap" style="margin-top:50px">{secs}</div>{tags}
{faq_html(p.get('faq') or [], 'tr')}{PRE}"""
        write(path, shell(p["title"], p["desc"], body, path, "tr", faq=p.get("faq") or None, crumbs=cr, kind="sol" if kind in ("integration", "topic") else "page"))

    for p in G: page(p)

    # hub sayfaları
    for kind, (path, title, sub) in HUBS.items():
        items = [p for p in G if p["type"] == kind]
        if not items: continue
        if kind == "cluster":
            groups = {}
            for p in items: groups.setdefault(p.get("sector", "Diğer"), []).append(p)
            blocks = "".join(f'<div class="hubg rv"><h3>{E(s)}</h3><div class="hubl">' + "".join(f'<a href="{p["path"]}">{E(p["title"])}<small>{E(p["desc"][:90])}…</small></a>' for p in ps) + "</div></div>" for s, ps in groups.items())
        else:
            blocks = '<div class="hubg rv"><div class="hubl">' + "".join(f'<a href="{p["path"]}">{E(p["title"])}<small>{E(p["desc"][:90])}…</small></a>' for p in items) + "</div></div>"
        body = f"""{CSS}<div class="wrap"><div class="crumb rv"><a href="/">Ana sayfa</a> / <a href="/teknik-merkez">Teknik merkez</a> / <span>{title}</span></div>
<div class="ph rv"><h1>{title}<span>{sub}</span></h1><div class="intro"><div class="pillg"><a href="/teknik-merkez">Teknik merkez</a><a class="d" href="#on-analiz">Ücretsiz ön analiz</a></div></div></div>{blocks}</div>{PRE}"""
        write(path, shell(title, sub, body, path, "tr", crumbs=[("Ana sayfa", "/"), ("Teknik merkez", "/teknik-merkez"), (title, path)], kind="index", items_ld=[(p["title"], p["path"]) for p in items]))

    # teknik merkez
    TM = [("/uygulamalar", "Uygulama ve kusur atlası", "95 somut problem: kumaş deliği, boya kusuru, eksik parça, KKD…"),
          ("/entegrasyon", "Kamera ve VMS entegrasyonları", "Hikvision, Dahua, Axis, NVR, Milestone, Nx Witness."),
          ("/kamera-uyumluluk", "Kameranız yapay zekâya uygun mu?", "Marka ve model kodu ile ön kontrol aracı."),
          ("/benchmark", "GPU kapasite tahmin aracı", "Kaç kamera, kaç GPU, hangi Hype-Model boyutu?"),
          ("/karsilastirma", "Karşılaştırmalar", "Kamera içi AI mı, merkezi sunucu mu?"),
          ("/cctv-sorun-cozumleri", "CCTV sorun çözümleri", "RTSP, ONVIF, H.265, NVR akış sorunları."),
          ("/mevzuat", "İSG ve KVKK mevzuat rehberi", "6331, KVKK, KKD, risk değerlendirmesi, İSG kurulu."),
          ("/bolge", "Bölgeler ve OSB'ler", "Gebze, Kocaeli, İstanbul, Bursa, Manisa, Kayseri…"),
          ("/sozluk", "CCTV & AI sözlüğü", "RTSP, ONVIF, ROI, VLM, edge AI ve dahası."),
          ("/blog", "Rehberler ve blog", "Uygulama rehberleri ve soru–cevap yazıları."),
          ("/vaka-calismalari", "Vaka çalışmaları", "Sahadan ölçülmüş sonuçlar.")]
    body = f"""{CSS}<div class="wrap"><div class="crumb rv"><a href="/">Ana sayfa</a> / <span>Teknik merkez</span></div>
<div class="ph rv"><h1>Endüstriyel yapay zekâ teknik merkezi<span>Kamera entegrasyonu, uygulama atlası, hesaplayıcılar ve sorun çözüm rehberleri tek yerde.</span></h1><div class="intro"><div class="pillg"><a href="/kamera-uyumluluk">Kameram uygun mu?</a><a class="d" href="#on-analiz">Ücretsiz ön analiz</a></div></div></div>
<div class="tm">{''.join(f'<a class="rv" href="{u}"><b>{t}</b><p>{d}</p><span>İncele →</span></a>' for u, t, d in TM)}</div></div>{PRE}"""
    write("/teknik-merkez", shell("Teknik merkez", "Endüstriyel yapay zekâ ve CCTV teknik merkezi: entegrasyonlar, uygulama atlası, hesaplayıcılar, sözlük.", body, "/teknik-merkez", "tr", crumbs=[("Ana sayfa", "/"), ("Teknik merkez", "/teknik-merkez")]))

    # kamera uyumluluk aracı
    CAM = json.load(open(os.path.join(c["ROOT"], "_build", "cameras.json"), encoding="utf-8"))
    rows = "".join(f'<tr><td>{E(f["brand"])}</td><td>{E(f["family"])}</td><td>{E(f["type"])}</td><td>{"✓" if f.get("onvif") else "?"}</td></tr>' for f in CAM["families"])
    body = f"""{CSS}<div class="wrap"><div class="crumb rv"><a href="/">Ana sayfa</a> / <a href="/teknik-merkez">Teknik merkez</a> / <span>Kamera uyumluluk</span></div>
<div class="ph rv"><h1>Kameranız yapay zekâya uygun mu?<span>Marka ve model kodunu girin; RTSP/ONVIF bağlantı yöntemini, önerilen akışı ve uygulanabilir yapay zekâ senaryolarını görün.</span></h1>
<div class="intro"><p>Bu araç model ailesine göre ön değerlendirme yapar. Kesin uygunluk; firmware, ağ ve kamera açısına bağlıdır ve ücretsiz ön analizde doğrulanır.</p></div></div>
<div class="tool rv"><div class="row"><label>Marka<select id="cb"><option value="">Seçin</option>{''.join(f'<option>{b}</option>' for b in CAM["brands"])}</select></label>
<label style="grid-column:span 2">Model kodu<input id="cm" placeholder="Örn: DS-2CD2347G2, IPC-HFW2441, P3268-LVE"></label>
<label>Kullanım<select id="cu"><option>KKD / İSG</option><option>Kalite kontrol</option><option>Sayım / verimlilik</option><option>Güvenlik / alan ihlali</option></select></label></div>
<div class="res" id="cr"><p style="color:var(--mute)">Marka ve model kodu girin.</p></div></div>
<div style="margin-top:40px"><h2 class="h rv">Desteklenen model aileleri<span>bilinen bağlantı yöntemleriyle</span></h2>
<div class="tbl rv" style="margin-top:16px"><table><tr><th>Marka</th><th>Model ailesi</th><th>Tür</th><th>ONVIF</th></tr>{rows}</table></div>
<p style="font-size:13px;color:var(--mute);margin-top:10px">Liste genel model ailesi bilgisidir; üreticilerin resmî ortaklığını ifade etmez. ONVIF uyumluluğu firmware sürümüne göre değişebilir. Kaynaklar: üretici dokümantasyonları ve ONVIF uyumlu ürünler veritabanı.</p></div></div>
<script>const CAM={json.dumps(CAM, ensure_ascii=False)};
const U={{"KKD / İSG":"Baret, yelek, eldiven; yasaklı alan; forklift–yaya mesafesi","Kalite kontrol":"Genel CCTV ile var/yok ve büyük kusurlar; mikron seviyesi için endüstriyel kamera önerilir","Sayım / verimlilik":"Ürün/palet sayımı, istasyon doluluğu, çevrim süresi","Güvenlik / alan ihlali":"Bölge ihlali, sahipsiz nesne, kalabalık, duman/alev"}};
function run(){{const b=document.getElementById('cb').value,m=document.getElementById('cm').value.trim().toUpperCase(),u=document.getElementById('cu').value,r=document.getElementById('cr');
if(!b&&!m){{r.innerHTML='<p style="color:var(--mute)">Marka ve model kodu girin.</p>';return}}
let f=CAM.families.find(x=>(!b||x.brand===b)&&x.prefixes.some(p=>m.startsWith(p)));if(!f&&b)f=CAM.families.find(x=>x.brand===b&&x.default);
const br=CAM.brandInfo[b||(f&&f.brand)]||{{}};
const rows=[['Marka / aile',(f?f.brand+' · '+f.family:(b||'—'))+(m?' · '+m:'')],['Kamera türü',f?f.type:'—'],['RTSP yolu (tipik)',br.rtsp||'Üretici dokümanına göre'],['ONVIF',f&&f.onvif?'Genellikle Profile S destekli (firmware ile doğrulanır)':'Doğrulanması gerekir'],['Önerilen akış','Alt akış (substream) 720p–1080p, 10–15 fps; kalite kontrolde ana akış'],['Uygulanabilir senaryolar',U[u]],['Hype Vision testi',f&&f.tested?'<span class="badge">Sahada doğrulandı</span>':'<span class="badge w">Ön değerlendirme — test gerekir</span>']];
r.innerHTML='<table>'+rows.map(x=>'<tr><td>'+x[0]+'</td><td>'+x[1]+'</td></tr>').join('')+'</table><div class="pillg" style="display:inline-flex;margin-top:16px"><a href="https://wa.me/905412609190?text='+encodeURIComponent('Merhaba, '+(b||'')+' '+m+' kameram için yapay zekâ uygunluk değerlendirmesi istiyorum.')+'" target="_blank" rel="noopener">WhatsApp</a><a class="d" href="/#iletisim">Ücretsiz değerlendirme</a></div>'}}
['cb','cm','cu'].forEach(i=>document.getElementById(i).addEventListener('input',run));</script>{PRE}"""
    write("/kamera-uyumluluk", shell("Kameranız yapay zekâya uygun mu?", "Hikvision, Dahua, Axis ve ONVIF kameralar için yapay zekâ uygunluk ön kontrolü: RTSP yolu, önerilen akış ve uygulanabilir senaryolar.", body, "/kamera-uyumluluk", "tr", crumbs=[("Ana sayfa", "/"), ("Teknik merkez", "/teknik-merkez"), ("Kamera uyumluluk", "/kamera-uyumluluk")]))

    # benchmark / GPU hesaplayıcı
    BM = json.load(open(os.path.join(c["ROOT"], "_build", "benchmark.json"), encoding="utf-8"))
    def cell(v): return "—" if v in (None, "") else E(str(v))
    trs = "".join(f'<tr><td><b>{E(r["model"])}</b><br><small>{E(r.get("task",""))}</small></td><td>{cell(r.get("input"))}</td><td>{cell(r.get("gpu"))}</td><td>{cell(r.get("fps"))}</td><td>{cell(r.get("latency_ms"))}</td><td>{cell(r.get("vram_gb"))}</td></tr>' for r in BM["rows"])
    measured = BM.get("measured")
    # Gerçek ölçüm yoksa sayfa bir "kapasite tahmin aracı"dır; boş benchmark tablosu öne çıkarılmaz.
    if measured:
        title = "Hype-Model GPU benchmark ve kapasite hesaplayıcı"
        desc = "100 kameraya kaç GPU gerekir? Hype-Model ailesi için ölçülmüş kare/sn, gecikme ve VRAM değerleriyle kapasite hesaplayıcı."
        h1 = "Hype-Model GPU benchmark ve kapasite hesaplayıcı<span>100 kameraya kaç GPU gerekir? Ölçülmüş değerlerle kamera sayısı, analiz sıklığı ve GPU kapasitesini planlayın.</span>"
        table = f'<h2 class="h rv" style="margin-top:50px">Ölçüm tablosu <span class="badge">Ölçüm tarihi: {E(BM["date"])}</span><span>model · donanım · test tarihi ve sürümüyle</span></h2>\n<div class="tbl rv" style="margin-top:16px"><table><tr><th>Model</th><th>Girdi</th><th>GPU</th><th>Kare/sn</th><th>Gecikme (ms)</th><th>VRAM (GB)</th></tr>{trs}</table></div>\n<p style="font-size:13px;color:var(--mute);margin-top:10px">{E(BM["method"])}</p>'
    else:
        title = "GPU kapasite tahmin aracı — Hype-Model için kaç GPU?"
        desc = "100 kameraya kaç GPU gerekir? Kamera sayısı, analiz sıklığı ve Hype-Model boyutuna göre GPU ihtiyacını planlamak için ücretsiz tahmin aracı."
        h1 = "GPU kapasite tahmin aracı<span>100 kameraya kaç GPU gerekir? Kamera sayısı, analiz sıklığı ve model boyutuna göre GPU ihtiyacını tahmin edin.</span>"
        table = ('<h2 class="h rv" style="margin-top:50px">Bu değerler nasıl hesaplanıyor?<span>planlama varsayımları, saha ölçümü değil</span></h2>'
                 '<div class="tbl rv" style="margin-top:16px;padding:22px 24px;background:var(--bg2);border-radius:14px"><p style="margin:0 0 10px">Yukarıdaki sonuçlar, tek RTX 4090 sınıfı bir GPU üzerinde 640 px girdi ve video çözme dahil, temkinli bir planlama varsayımına dayanır. Kesin kare/sn, gecikme ve VRAM değerleri modele, girdi çözünürlüğüne, sürücü/TensorRT sürümüne ve kameralarınızın kodlamasına göre değişir.</p>'
                 '<p style="margin:0;color:var(--mute);font-size:14px">Hype-Model ailesinin sahada ölçülmüş benchmark sonuçları (kare/sn · gecikme · VRAM), metodolojisiyle birlikte hazırlanıyor ve tamamlandığında burada yayımlanacak. O zamana kadar bu araç yalnızca planlama amaçlıdır; kesin donanım, pilot sırasında sizin kameralarınız ve modülleriniz üzerinde ölçülerek belirlenir.</p></div>')
    body = f"""{CSS}<div class="wrap"><div class="crumb rv"><a href="/">Ana sayfa</a> / <a href="/teknik-merkez">Teknik merkez</a> / <span>GPU kapasite aracı</span></div>
<div class="ph rv"><h1>{h1}</h1>
<div class="intro"><p>Hype-Model, Hype Vision'ın endüstriyel görüntü işleme model ailesidir: Hype-Model-N (edge), -S, -M ve -L (yüksek doğruluk). Aşağıdaki araç varsayımları açıkça gösterir; değerleri kendi sahanıza göre değiştirebilirsiniz.</p></div></div>
<div class="tool rv"><div class="row">
<label>Kamera sayısı<input id="g1" type="number" value="100" min="1"></label>
<label>Kamera başına analiz (kare/sn)<input id="g2" type="number" value="5" min="1" step="1"></label>
<label>Model<select id="g3">{''.join(f'<option value="{m["fps"]}">{E(m["name"])}</option>' for m in BM["calc_models"])}</select></label>
<label>Hedef GPU kullanımı (%)<input id="g4" type="number" value="70" min="30" max="95"></label></div>
<div class="kpi4"><div><b id="o1">—</b><small>Toplam kare/sn ihtiyacı</small></div><div><b id="o2">—</b><small>GPU başına kapasite (kare/sn)</small></div><div><b id="o3">—</b><small>Gereken GPU sayısı (tahmini)</small></div><div><b id="o4">—</b><small>GPU başına kamera</small></div></div>
<p style="font-size:13px;color:var(--mute);margin-top:12px">{E(BM["calc_note"])}</p></div>
{table}</div>
<script>function g(){{const c=+g1.value,f=+g2.value,cap=+g3.value*(+g4.value/100),need=c*f,n=Math.max(1,Math.ceil(need/cap));o1.textContent=need.toLocaleString('tr-TR');o2.textContent=Math.round(cap).toLocaleString('tr-TR');o3.textContent=n;o4.textContent=Math.floor(cap/f)}}
['g1','g2','g3','g4'].forEach(i=>document.getElementById(i).addEventListener('input',g));g();</script>{PRE}"""
    write("/benchmark", shell(title, desc, body, "/benchmark", "tr", crumbs=[("Ana sayfa", "/"), ("Teknik merkez", "/teknik-merkez"), ("GPU kapasite aracı", "/benchmark")]))

    # ================= İNGİLİZCE TEKNİK MERKEZ =================
    # gen_en: TR'den çevrilen EN sayfalar · gen_us: yalnızca ABD pazarı için yazılmış EN sayfalar
    GEN_EN = list(c["D"].get("gen_en", {}).values()) + list(c["D"].get("gen_us", {}).values())
    en_paths = []
    def page_en(p):
        kind = p["type"]; path = p["path"]; en_paths.append(path)
        n, u = EN_CRUMB[kind]
        cr = [("Home", "/en/"), (n, u), (p["title"], path)]
        crh = f'<a href="/en/">Home</a> / <a href="{u}">{E(n)}</a> / <span>{E(p["title"])}</span>'
        img = IMG_BY_SECTOR.get(p.get("sector")) or IMG_BY_TYPE.get(kind, "/img/det-kusbakisi.webp")
        intro = "".join(f"<p>{E(t)}</p>" for t in p.get("intro", [])[:2])
        short = f'<div class="wrap"><section class="tldr rv"><span class="k-eyebrow">Quick answer</span><p style="margin-top:8px;font-size:16px;color:#2F3237">{E(p["short"])}</p></section></div>' if p.get("short") else ""
        secs = "".join(section_html({"h": s.get("h", ""), "p": s.get("p", []) or [], "li": s.get("li", []) or [], "rows": s.get("rows", []) or [], "cards": []}, "en") for s in p["sections"])
        tags = ""
        if p.get("kws"):
            tags = '<div class="wrap" style="margin-top:30px"><p style="font-size:13px;color:var(--mute)">This page answers: ' + " · ".join(E(k) for k in p["kws"][:10]) + "</p></div>"
        body = f"""{CSS}<div class="wrap"><div class="crumb rv">{crh}</div>
<div class="ph rv"><h1>{E(p['title'])}<span>{E(p['desc'])}</span></h1><div class="intro">{intro}<div class="pillg"><a href="/en/#iletisim">Contact</a><a class="d" href="#on-analiz">Free pre-assessment</a></div></div></div>
<div class="pimg rv"><img src="{img}" alt="{E(p['title'])}"></div></div>{short}
<div class="wrap" style="margin-top:50px">{secs}</div>{tags}
{faq_html(p.get('faq') or [], 'en')}{PRE_EN}"""
        write(path, shell(p["title"], p["desc"], body, path, "en", faq=p.get("faq") or None, crumbs=cr, kind="sol" if kind in ("integration", "topic") else "page"))
    for p in GEN_EN: page_en(p)

    # EN hub indexleri
    for kind, (path, title, sub) in EN_HUBS.items():
        items = [p for p in GEN_EN if p["type"] == kind]
        if not items: continue
        if kind == "cluster":
            groups = {}
            for p in items: groups.setdefault(p.get("sector", "Other") or "Other", []).append(p)
            blocks = "".join(f'<div class="hubg rv"><h3>{E(s)}</h3><div class="hubl">' + "".join(f'<a href="{p["path"]}">{E(p["title"])}<small>{E(p["desc"][:90])}…</small></a>' for p in ps) + "</div></div>" for s, ps in groups.items())
        else:
            blocks = '<div class="hubg rv"><div class="hubl">' + "".join(f'<a href="{p["path"]}">{E(p["title"])}<small>{E(p["desc"][:90])}…</small></a>' for p in items) + "</div></div>"
        body = f"""{CSS}<div class="wrap"><div class="crumb rv"><a href="/en/">Home</a> / <a href="/en/technical-hub">Technical hub</a> / <span>{E(title)}</span></div>
<div class="ph rv"><h1>{E(title)}<span>{E(sub)}</span></h1><div class="intro"><div class="pillg"><a href="/en/technical-hub">Technical hub</a><a class="d" href="#on-analiz">Free pre-assessment</a></div></div></div>{blocks}</div>{PRE_EN}"""
        write(path, shell(title, sub, body, path, "en", crumbs=[("Home", "/en/"), ("Technical hub", "/en/technical-hub"), (title, path)], kind="index", items_ld=[(p["title"], p["path"]) for p in items])); en_paths.append(path)

    # EN sözlük (glossary tek sayfa, EN_HUBS'ta yok; zaten page_en ile üretildi)
    # EN teknik merkez
    have = {p["type"] for p in GEN_EN}
    TM_EN = [("/en/applications", "Application & defect atlas", "Concrete problems: fabric holes, paint defects, missing parts, PPE…"),
             ("/en/integrations", "Camera & VMS integrations", "Hikvision, Dahua, Axis, NVR, Milestone, Nx Witness."),
             ("/en/camera-compatibility", "Is your camera AI-ready?", "Pre-check by brand and model code."),
             ("/en/gpu-calculator", "GPU capacity estimator", "How many cameras, how many GPUs, which Hype-Model size?"),
             ("/en/comparisons", "Comparisons", "In-camera AI or a central server?"),
             ("/en/cctv-troubleshooting", "CCTV troubleshooting", "RTSP, ONVIF, H.265, NVR stream issues."),
             ("/en/glossary", "CCTV & AI glossary", "RTSP, ONVIF, ROI, VLM, edge AI and more."),
             ("/en/resources", "Guides & resources", "Application guides and Q&A articles."),
             ("/en/case-studies", "Case studies", "Results measured on site.")]
    tmcards = "".join(f'<a class="rv" href="{u}"><b>{E(t)}</b><p>{E(d)}</p><span>Explore →</span></a>' for u, t, d in TM_EN)
    body = f"""{CSS}<div class="wrap"><div class="crumb rv"><a href="/en/">Home</a> / <span>Technical hub</span></div>
<div class="ph rv"><h1>Industrial AI technical hub<span>Camera integrations, the application atlas, calculators and troubleshooting guides in one place.</span></h1><div class="intro"><div class="pillg"><a href="/en/camera-compatibility">Is my camera compatible?</a><a class="d" href="#on-analiz">Free pre-assessment</a></div></div></div>
<div class="tm">{tmcards}</div></div>{PRE_EN}"""
    write("/en/technical-hub", shell("Technical hub", "Industrial AI & CCTV technical hub: integrations, application atlas, calculators, glossary.", body, "/en/technical-hub", "en", crumbs=[("Home", "/en/"), ("Technical hub", "/en/technical-hub")])); en_paths.append("/en/technical-hub")

    # EN kamera uyumluluk aracı
    body = f"""{CSS}<div class="wrap"><div class="crumb rv"><a href="/en/">Home</a> / <a href="/en/technical-hub">Technical hub</a> / <span>Camera compatibility</span></div>
<div class="ph rv"><h1>Is your camera AI-ready?<span>Enter the brand and model code to see the RTSP/ONVIF connection method, the recommended stream and feasible AI scenarios.</span></h1>
<div class="intro"><p>This tool gives a pre-assessment by model family. Exact compatibility depends on firmware, network and camera angle, and is confirmed in the free pre-assessment.</p></div></div>
<div class="tool rv"><div class="row"><label>Brand<select id="cb"><option value="">Select</option>{''.join(f'<option>{b}</option>' for b in CAM["brands"])}</select></label>
<label style="grid-column:span 2">Model code<input id="cm" placeholder="e.g. DS-2CD2347G2, IPC-HFW2441, P3268-LVE"></label>
<label>Use case<select id="cu"><option>PPE / safety</option><option>Quality control</option><option>Counting / productivity</option><option>Security / intrusion</option></select></label></div>
<div class="res" id="cr"><p style="color:var(--mute)">Enter a brand and model code.</p></div></div>
<div style="margin-top:40px"><h2 class="h rv">Supported model families<span>with known connection methods</span></h2>
<div class="tbl rv" style="margin-top:16px"><table><tr><th>Brand</th><th>Model family</th><th>Type</th><th>ONVIF</th></tr>{rows}</table></div>
<p style="font-size:13px;color:var(--mute);margin-top:10px">This is general model-family information and does not imply any official manufacturer partnership. ONVIF support may vary by firmware version. Sources: manufacturer documentation and the ONVIF conformant products database.</p></div></div>
<script>const CAM={json.dumps(CAM, ensure_ascii=False)};
const U={{"PPE / safety":"Hard hats, vests, gloves; restricted areas; forklift–pedestrian distance","Quality control":"Presence/absence and large defects with general CCTV; industrial cameras recommended for micron level","Counting / productivity":"Product/pallet counting, station occupancy, cycle time","Security / intrusion":"Zone intrusion, abandoned objects, crowding, smoke/flame"}};
function run(){{const b=document.getElementById('cb').value,m=document.getElementById('cm').value.trim().toUpperCase(),u=document.getElementById('cu').value,r=document.getElementById('cr');
if(!b&&!m){{r.innerHTML='<p style="color:var(--mute)">Enter a brand and model code.</p>';return}}
let f=CAM.families.find(x=>(!b||x.brand===b)&&x.prefixes.some(p=>m.startsWith(p)));if(!f&&b)f=CAM.families.find(x=>x.brand===b&&x.default);
const br=CAM.brandInfo[b||(f&&f.brand)]||{{}};
const rows=[['Brand / family',(f?f.brand+' · '+f.family:(b||'—'))+(m?' · '+m:'')],['Camera type',f?f.type:'—'],['RTSP path (typical)',br.rtsp||'Per manufacturer documentation'],['ONVIF',f&&f.onvif?'Usually Profile S supported (verify with firmware)':'Needs verification'],['Recommended stream','Substream 720p–1080p, 10–15 fps; main stream for quality control'],['Feasible scenarios',U[u]],['Hype Vision test',f&&f.tested?'<span class="badge">Verified on site</span>':'<span class="badge w">Pre-assessment — test required</span>']];
r.innerHTML='<table>'+rows.map(x=>'<tr><td>'+x[0]+'</td><td>'+x[1]+'</td></tr>').join('')+'</table><div class="pillg" style="display:inline-flex;margin-top:16px"><a href="https://wa.me/905412609190?text='+encodeURIComponent('Hello, I would like an AI compatibility assessment for my '+(b||'')+' '+m+' camera.')+'" target="_blank" rel="noopener">WhatsApp</a><a class="d" href="/en/#iletisim">Free assessment</a></div>'}}
['cb','cm','cu'].forEach(i=>document.getElementById(i).addEventListener('input',run));</script>{PRE_EN}"""
    write("/en/camera-compatibility", shell("Is your camera AI-ready?", "AI compatibility pre-check for Hikvision, Dahua, Axis and ONVIF cameras: RTSP path, recommended stream and feasible scenarios.", body, "/en/camera-compatibility", "en", crumbs=[("Home", "/en/"), ("Technical hub", "/en/technical-hub"), ("Camera compatibility", "/en/camera-compatibility")])); en_paths.append("/en/camera-compatibility")

    # EN GPU hesaplayıcı
    if measured:
        etitle = "Hype-Model GPU benchmark & capacity calculator"
        edesc = "How many GPUs for 100 cameras? Capacity calculator with measured FPS, latency and VRAM for the Hype-Model family."
        eh1 = "Hype-Model GPU benchmark & capacity calculator<span>How many GPUs for 100 cameras? Plan camera count, analysis frequency and GPU capacity with measured values.</span>"
        etable = f'<h2 class="h rv" style="margin-top:50px">Measurement table <span class="badge">Measured: {E(BM["date"])}</span><span>by model · hardware · test date and version</span></h2>\n<div class="tbl rv" style="margin-top:16px"><table><tr><th>Model</th><th>Input</th><th>GPU</th><th>FPS</th><th>Latency (ms)</th><th>VRAM (GB)</th></tr>{trs}</table></div>'
    else:
        etitle = "GPU capacity estimator — how many GPUs for Hype-Model?"
        edesc = "How many GPUs for 100 cameras? A free estimator to plan GPU needs by camera count, analysis frequency and Hype-Model size."
        eh1 = "GPU capacity estimator<span>How many GPUs for 100 cameras? Estimate GPU needs by camera count, analysis frequency and model size.</span>"
        etable = ('<h2 class="h rv" style="margin-top:50px">How are these values calculated?<span>planning assumptions, not field measurements</span></h2>'
                  '<div class="tbl rv" style="margin-top:16px;padding:22px 24px;background:var(--bg2);border-radius:14px"><p style="margin:0 0 10px">The results above assume a single RTX 4090-class GPU with 640 px input and video decoding included, using a conservative planning assumption. Exact FPS, latency and VRAM vary by model, input resolution, driver/TensorRT version and your cameras\' encoding.</p>'
                  '<p style="margin:0;color:var(--mute);font-size:14px">Field-measured benchmark results for the Hype-Model family (FPS · latency · VRAM), with methodology, are being prepared and will be published here. Until then this is a planning tool only; exact hardware is sized during the pilot on your own cameras and modules.</p></div>')
    body = f"""{CSS}<div class="wrap"><div class="crumb rv"><a href="/en/">Home</a> / <a href="/en/technical-hub">Technical hub</a> / <span>GPU capacity tool</span></div>
<div class="ph rv"><h1>{eh1}</h1>
<div class="intro"><p>Hype-Model is Hype Vision's industrial computer-vision model family: Hype-Model-N (edge), -S, -M and -L (high accuracy). The tool below shows its assumptions explicitly; you can change the values for your own site.</p></div></div>
<div class="tool rv"><div class="row">
<label>Number of cameras<input id="g1" type="number" value="100" min="1"></label>
<label>Analysis per camera (FPS)<input id="g2" type="number" value="5" min="1" step="1"></label>
<label>Model<select id="g3">{''.join(f'<option value="{m["fps"]}">{E(m["name"])}</option>' for m in BM["calc_models"])}</select></label>
<label>Target GPU utilisation (%)<input id="g4" type="number" value="70" min="30" max="95"></label></div>
<div class="kpi4"><div><b id="o1">—</b><small>Total FPS required</small></div><div><b id="o2">—</b><small>Capacity per GPU (FPS)</small></div><div><b id="o3">—</b><small>GPUs needed (estimate)</small></div><div><b id="o4">—</b><small>Cameras per GPU</small></div></div>
<p style="font-size:13px;color:var(--mute);margin-top:12px">Per-GPU capacity figures are for planning (a single RTX 4090-class GPU, 640 px input, video decoding included, conservative assumption). Exact hardware is measured during the pilot on your own cameras and modules.</p></div>
{etable}</div>
<script>function g(){{const c=+g1.value,f=+g2.value,cap=+g3.value*(+g4.value/100),need=c*f,n=Math.max(1,Math.ceil(need/cap));o1.textContent=need.toLocaleString('en-US');o2.textContent=Math.round(cap).toLocaleString('en-US');o3.textContent=n;o4.textContent=Math.floor(cap/f)}}
['g1','g2','g3','g4'].forEach(i=>document.getElementById(i).addEventListener('input',g));g();</script>{PRE_EN}"""
    write("/en/gpu-calculator", shell(etitle, edesc, body, "/en/gpu-calculator", "en", crumbs=[("Home", "/en/"), ("Technical hub", "/en/technical-hub"), ("GPU capacity tool", "/en/gpu-calculator")])); en_paths.append("/en/gpu-calculator")

    return [p["path"] for p in G] + [v[0] for v in HUBS.values()] + ["/teknik-merkez", "/kamera-uyumluluk", "/benchmark"] + en_paths
