"""Teknik merkez: üretilen SEO sayfaları (uygulamalar, entegrasyon, karşılaştırma, sorun çözümleri, sözlük),
hub sayfaları, kamera uyumluluk aracı ve GPU/benchmark hesaplayıcı. content.json -> D["gen"]."""
import json, os, re

HUBS = {
 "cluster": ("/uygulamalar", "Uygulama ve kusur atlası", "Sektöre göre üretimde, kalitede ve İSG'de kamera ile çözülebilen 95 somut problem."),
 "integration": ("/entegrasyon", "Kamera ve VMS entegrasyonları", "Hikvision, Dahua, Axis kameralara, NVR ve VMS sistemlerine mevcut altyapıyı değiştirmeden yapay zekâ ekleme."),
 "compare": ("/karsilastirma", "Karşılaştırmalar", "Kamera içi yerleşik analitik ile merkezi yapay zekâ analizi arasındaki farklar, tarafsız."),
 "trouble": ("/cctv-sorun-cozumleri", "CCTV sorun çözüm merkezi", "RTSP, ONVIF, NVR ve akış sorunlarına adım adım çözüm rehberleri."),
}
CRUMB = {"cluster": ("Uygulamalar", "/uygulamalar"), "integration": ("Entegrasyon", "/entegrasyon"), "compare": ("Karşılaştırma", "/karsilastirma"), "trouble": ("Sorun çözümleri", "/cctv-sorun-cozumleri"), "topic": ("Çözümler", "/cozumler"), "glossary": ("Teknik merkez", "/teknik-merkez")}
IMG_BY_SECTOR = {"Tekstil": "/img/sektor/tekstil.webp", "Otomotiv": "/img/sektor/otomotiv.webp", "Metal işleme": "/img/det-cnc.webp", "Plastik enjeksiyon": "/img/det-hat.webp",
 "Gıda üretimi": "/img/sektor/gida.webp", "İçecek ve dolum": "/img/vaka/mendil-ocr.webp", "İlaç ve kozmetik": "/img/vaka/med-ok.webp", "Kimya": "/img/vaka/harman-1.webp",
 "Lojistik depo": "/img/sektor/lojistik.webp", "Maden ve taş ocakları": "/img/vaka/harman-2.webp", "Çimento ve beton": "/img/vaka/harman-3.webp", "Ahşap ve mobilya": "/img/det-hat.webp",
 "Elektronik üretimi": "/img/det-cnc.webp", "Cam ve seramik": "/img/06-cnc-istasyon.webp", "Kağıt ve ambalaj": "/img/vaka/darbogaz.webp", "İSG ve KKD": "/img/det-kkd.webp",
 "Üretim verimliliği": "/img/vaka/tekstil-bant.webp", "Perakende ve mağaza": "/img/sektor/perakende.webp", "Genel makine görüşü": "/img/det-cnc.webp"}
IMG_BY_TYPE = {"integration": "/img/det-kusbakisi.webp", "compare": "/img/01-kusbakisi.webp", "trouble": "/img/00-genel.webp", "topic": "/img/det-forklift.webp", "glossary": "/img/dijital-ikiz.webp"}

PRE = """<div class="wrap" id="on-analiz" style="margin-top:70px"><div class="pre rv"><div><span class="k-eyebrow">Ücretsiz · 15 dakika</span>
<h2>Fabrikanızda yapay zekâ ile neleri tespit edebiliriz?</h2><p>Mevcut güvenlik kameralarınız üzerinden yapılabilecek İSG, kalite kontrol ve üretim analizlerini birlikte değerlendirelim.</p>
<ul><li>15 dakikalık ücretsiz teknik görüşme</li><li>Kamera altyapısı ön değerlendirmesi</li><li>Uygulanabilir yapay zekâ senaryoları</li></ul></div>
<div class="pre-b"><a class="d" href="/#iletisim">Ön analiz talep et →</a><a class="w" href="https://wa.me/905412609190?text=Merhaba%2C%20%C3%BCcretsiz%20kamera%20%C3%B6n%20analizi%20istiyorum." target="_blank" rel="noopener">WhatsApp'tan yazın</a><a class="o" href="/kamera-uyumluluk">Kameram uygun mu?</a></div></div></div>"""
CSS = """<style>
.pre{background:#141516;color:#fff;border-radius:16px;padding:clamp(26px,4vw,44px);display:grid;grid-template-columns:1.4fr 1fr;gap:30px;align-items:center}
.pre h2{font-size:clamp(24px,2.6vw,36px);font-weight:600;letter-spacing:-.02em;margin-top:8px;line-height:1.15}.pre p{color:#B8BBBF;margin-top:10px}
.pre ul{list-style:none;display:grid;gap:6px;margin-top:16px}.pre li::before{content:"✓ ";color:var(--acc);font-weight:800}
.pre-b{display:grid;gap:8px}.pre-b a{text-align:center;font-weight:600;padding:14px 18px;border-radius:99px}
.pre-b .d{background:var(--pill);color:var(--pillInk)}.pre-b .w{background:#2A2B2F;color:#fff}.pre-b .o{box-shadow:inset 0 0 0 1px #3a3c40;color:#fff}
.pre .k-eyebrow{color:var(--acc)}
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
          ("/benchmark", "Hype-Model GPU hesaplayıcı", "Kaç kamera, kaç GPU, hangi Hype-Model boyutu?"),
          ("/karsilastirma", "Karşılaştırmalar", "Kamera içi AI mı, merkezi sunucu mu?"),
          ("/cctv-sorun-cozumleri", "CCTV sorun çözümleri", "RTSP, ONVIF, H.265, NVR akış sorunları."),
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
    status = '<span class="badge">Ölçüm tarihi: ' + E(BM["date"]) + '</span>' if BM.get("measured") else '<span class="badge w">Ölçümler yayınlanmayı bekliyor</span>'
    body = f"""{CSS}<div class="wrap"><div class="crumb rv"><a href="/">Ana sayfa</a> / <a href="/teknik-merkez">Teknik merkez</a> / <span>Benchmark</span></div>
<div class="ph rv"><h1>Hype-Model GPU benchmark ve kapasite hesaplayıcı<span>100 kameraya kaç GPU gerekir? Kamera sayısı, analiz sıklığı ve model boyutuna göre kapasiteyi hesaplayın.</span></h1>
<div class="intro"><p>Hype-Model, Hype Vision'ın endüstriyel görüntü işleme model ailesidir: Hype-Model-N (edge), -S, -M ve -L (yüksek doğruluk). Aşağıdaki hesaplayıcı varsayımları açıkça gösterir; değerleri kendi sahanıza göre değiştirebilirsiniz.</p></div></div>
<div class="tool rv"><div class="row">
<label>Kamera sayısı<input id="g1" type="number" value="100" min="1"></label>
<label>Kamera başına analiz (kare/sn)<input id="g2" type="number" value="5" min="1" step="1"></label>
<label>Model<select id="g3">{''.join(f'<option value="{m["fps"]}">{E(m["name"])}</option>' for m in BM["calc_models"])}</select></label>
<label>Hedef GPU kullanımı (%)<input id="g4" type="number" value="70" min="30" max="95"></label></div>
<div class="kpi4"><div><b id="o1">—</b><small>Toplam kare/sn ihtiyacı</small></div><div><b id="o2">—</b><small>GPU başına kapasite (kare/sn)</small></div><div><b id="o3">—</b><small>Gereken GPU sayısı</small></div><div><b id="o4">—</b><small>GPU başına kamera</small></div></div>
<p style="font-size:13px;color:var(--mute);margin-top:12px">{E(BM["calc_note"])}</p></div>
<h2 class="h rv" style="margin-top:50px">Ölçüm tablosu {status}<span>model · donanım · test tarihi ve sürümüyle</span></h2>
<div class="tbl rv" style="margin-top:16px"><table><tr><th>Model</th><th>Girdi</th><th>GPU</th><th>Kare/sn</th><th>Gecikme (ms)</th><th>VRAM (GB)</th></tr>{trs}</table></div>
<p style="font-size:13px;color:var(--mute);margin-top:10px">{E(BM["method"])}</p></div>
<script>function g(){{const c=+g1.value,f=+g2.value,cap=+g3.value*(+g4.value/100),need=c*f,n=Math.max(1,Math.ceil(need/cap));o1.textContent=need.toLocaleString('tr-TR');o2.textContent=Math.round(cap).toLocaleString('tr-TR');o3.textContent=n;o4.textContent=Math.floor(cap/f)}}
['g1','g2','g3','g4'].forEach(i=>document.getElementById(i).addEventListener('input',g));g();</script>{PRE}"""
    write("/benchmark", shell("Hype-Model GPU benchmark ve kapasite hesaplayıcı", "100 kameraya kaç GPU gerekir? Hype-Model ailesi için kamera sayısı, analiz sıklığı ve GPU kapasitesi hesaplayıcı ve ölçüm tablosu.", body, "/benchmark", "tr", crumbs=[("Ana sayfa", "/"), ("Teknik merkez", "/teknik-merkez"), ("Benchmark", "/benchmark")]))
    return [p["path"] for p in G] + [v[0] for v in HUBS.values()] + ["/teknik-merkez", "/kamera-uyumluluk", "/benchmark"]
