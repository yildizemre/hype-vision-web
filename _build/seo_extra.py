"""SEO yardımcıları: görsel alt metinleri, ilgili sayfa kutuları, kısa başlık/açıklama."""
import re, os

# ---------------------------------------------------------------- 1) alt metinleri
ALT = {
 "p2": ("Hype Vision Instagram videosu: sahada yapay zekâ tespiti", "Hype Vision Instagram video: AI detection on site"), "p3": ("Hype Vision Instagram videosu", "Hype Vision Instagram video"), "p4": ("Hype Vision Instagram videosu", "Hype Vision Instagram video"),
 "milestone": ("Milestone VMS entegrasyonu", "Milestone VMS integration"),  # dosya adı (uzantısız, -sm'siz) -> (TR, EN)
 "det-kkd": ("Baret ve yelek KKD tespiti yapan yapay zekâ kamera görüntüsü", "AI camera view detecting hard hat and hi-vis vest PPE"),
 "det-forklift": ("Forklift ile yaya arasındaki mesafeyi ölçen yapay zekâ kamera görüntüsü", "AI camera view measuring forklift–pedestrian distance"),
 "det-cnc": ("CNC istasyonunda operatör ve makine durumunu izleyen yapay zekâ görüntüsü", "AI monitoring operator and machine status at a CNC station"),
 "det-hat": ("Montaj hattında istasyon doluluğu ve çevrim süresi analizi", "Assembly line station occupancy and cycle time analysis"),
 "det-kusbakisi": ("Fabrika genelinde kişi tespiti yapan kuşbakışı yapay zekâ kamera görüntüsü", "Bird's-eye AI camera view detecting people across a factory"),
 "dijital-ikiz": ("Hype Vision dijital fabrika ikizi: personel verimliliği, düşme ve ürün kontrolü", "Hype Vision digital factory twin: productivity, fall detection and product inspection"),
 "robot-kopek": ("Hype Vision logolu otonom devriye robot köpek", "Hype Vision autonomous patrol robot dog"),
 "drone": ("Rafineri sahasında havadan denetim yapan Hype Vision drone", "Hype Vision drone performing aerial inspection at a refinery"),
 "08-kkd": ("Üretim alanında KKD uyum kontrolü kamera görüntüsü", "PPE compliance check in a production area"),
 "04-forklift": ("Depoda forklift trafiği ve yaya güvenliği kamera görüntüsü", "Forklift traffic and pedestrian safety in a warehouse"),
 "05-uretim-hatti": ("Üretim hattında yapay zekâ ile verimlilik takibi", "AI productivity monitoring on a production line"),
 "06-cnc-istasyon": ("CNC istasyonunda kalite ve verimlilik izleme", "Quality and productivity monitoring at a CNC station"),
 "01-kusbakisi": ("Tesis genelinde yapay zekâ ile kişi ve alan analizi", "Site-wide AI people and zone analytics"),
 "00-genel": ("Endüstriyel tesiste yapay zekâ kamera analitiği", "AI camera analytics in an industrial facility"),
 "02b-dusme-sonra": ("Yapay zekâ ile düşme ve bayılma tespiti", "AI fall and collapse detection"),
 "03b-yangin-sonra": ("Kamera ile erken yangın ve alev tespiti", "Early fire and flame detection with cameras"),
 "otel-servis": ("Restoran ve otelde servis süresi analizi", "Service time analytics in restaurants and hotels"),
 "yasaklialan": ("Yasaklı alan ihlali tespiti kamera görüntüsü", "Restricted zone violation detection"),
 "baretmaske": ("Baret ve maske tespiti kamera görüntüsü", "Hard hat and mask detection"),
 "forkliftinsanmesafe": ("Forklift–insan mesafe tespiti", "Forklift–person distance detection"),
 "kumes1": ("Konveyörde yumurta sayımı ve sınıflandırma", "Egg counting and grading on a conveyor"),
 "kumes2": ("Gıda hattında ürün sayımı kamera görüntüsü", "Product counting on a food line"),
 "kofte2": ("Restoranda servis alanı yapay zekâ analizi", "AI analytics of a restaurant service area"),
 "utu-bant1": ("Tekstilde ütü bandı verimlilik analizi", "Pressing line productivity analytics in textiles"),
 "dikim-bant1": ("Tekstil dikim bandında istasyon analizi", "Station analytics on a textile sewing line"),
 "banko2": ("Operasyon alanı kamera analitiği", "Operations area camera analytics"),
 "belediye": ("Kamu alanında kaçak döküm tespiti", "Illegal dumping detection in a public area"),
 "imalat": ("İmalat holünde KKD, aktif çalışma ve ürün sayımı", "PPE, activity and product counting in a manufacturing hall"),
 "lojistik": ("Depo sevkiyat alanında forklift, palet ve yaya mesafe uyarısı", "Forklift, pallet and pedestrian distance alert in a dispatch area"),
 "perakende": ("Markette müşteri, personel ve kasa kuyruğu analizi", "Customer, staff and checkout queue analytics in a store"),
 "restoran": ("Restoran mutfağında bone, eldiven ve önlük hijyen kontrolü", "Hairnet, glove and apron hygiene check in a kitchen"),
 "otel": ("Otel lobisinde misafir yoğunluğu ve resepsiyon kuyruğu analizi", "Hotel lobby occupancy and reception queue analytics"),
 "insaat": ("İnşaat sahasında baret, yelek ve tehlikeli bölge tespiti", "Hard hat, vest and danger zone detection on a construction site"),
 "kuyumculuk": ("Kuyumcu atölyesinde operatör, tepsi sayımı ve yetkili alan kontrolü", "Operator, tray count and restricted room control in a jewellery workshop"),
 "tekstil": ("Dikim hattında operatör aktif/boşta analizi", "Operator active/idle analytics on a sewing line"),
 "otomotiv": ("Otomotiv montaj hattında KKD, parça varlığı ve ürün sayımı", "PPE, part presence and product count on an automotive assembly line"),
 "gida": ("Gıda paketleme hattında istasyon aktivitesi ve hijyen bölgesi", "Station activity and hygiene zone on a food packaging line"),
 "kkd-depo": ("Depo koridorunda KKD tespiti ve VMS popup alarm", "PPE detection in a warehouse aisle with VMS popup alert"),
 "kkd-giris": ("Giriş kapısında iş ayakkabısı ve KKD kontrolü", "Safety shoe and PPE check at an entrance gate"),
 "kaynak-1": ("Kaynak istasyonunda kaynak süresi ve eldiven/yüz koruması kontrolü", "Welding time and glove/face protection check at a welding station"),
 "kaynak-2": ("Taşlama anında kıvılcım ve KKD tespiti", "Spark and PPE detection during grinding"),
 "med-ok": ("Medikal ambalajda dolu paket — PRODUCT OK", "Filled medical pack — PRODUCT OK"),
 "med-empty": ("Medikal ambalajda boş paket tespiti — EMPTY", "Empty medical pack detection — EMPTY"),
 "mendil-ocr": ("Islak mendil paketinde SKT, lot ve barkod okuma", "Expiry, lot and barcode reading on a wet-wipes pack"),
 "darbogaz": ("Kasalama istasyonunda ürün sayımı ve darboğaz analizi", "Product counting and bottleneck analysis at a boxing station"),
 "tekstil-bant": ("Dikim bandında ürün başı süre ve el doluluğu analizi", "Time per piece and hand occupancy on a sewing line"),
 "tekstil-dikim": ("Dikim hattında istasyon performans paneli", "Station performance panel on a sewing line"),
 "tekstil-utu": ("Ütü ve kalite kontrol bandında üretim sayacı", "Production counter on a pressing and QC line"),
 "tir-1": ("TIR dorsesine yükleme sayımı — sayaç 3", "Truck trailer loading count — count 3"),
 "tir-2": ("Forklift yükle dorseye yaklaşıyor — sayaç 2", "Forklift approaching the trailer with a load — count 2"),
 "fuar-1": ("Fuar alanında 5 bölgeli ziyaretçi yoğunluğu KPI paneli", "5-zone visitor density KPI panel at a trade fair"),
 "fuar-2": ("Fuar standı önünde ziyaretçi bekleme süresi analizi", "Visitor dwell time in front of a fair stand"),
 "duman": ("Açık alanda erken duman tespiti", "Early outdoor smoke detection"),
 "gida-idle": ("Gıda paketleme hattında aktif, boşta ve mola durumu takibi", "Active, idle and break tracking on a food packaging line"),
 "hat-verimliligi-1": ("Üretim hattında makine durumu, personel istasyonları ve İSG bölgelerinin tek kamerada yapay zekâ ile izlenmesi", "AI monitoring machine status, staff workstations and safety zones on a production line from a single camera"),
 "5s-denetimi-1": ("Depoda kamera ile 5S denetimi: düzenli depolama, tanımlı alan dışı malzeme ve geçişi kapatan yığınların tespiti", "Camera-based 5S audit in a warehouse: organized storage, material outside its zone and stacks blocking a passage"),
 "5s-denetimi-2": ("Üretim alanında 5S temizlik denetimi: makine temiz ve yerinde, koridor açık, malzeme düzenli", "5S cleanliness audit on a production floor: machine clean and in place, aisle clear, material tidy"),
 "5s-denetimi-3": ("5S güvenlik denetimi: koridorda zemin engeli ve tanımlı alan dışı malzemenin yapay zekâ ile tespiti", "5S safety audit: AI detecting a floor obstacle in the aisle and material outside its zone"),
 "el-hijyeni-1": ("UV ışık altında el hijyeni analizi: solüsyonun kapladığı ve atlanan bölgelerin yapay zekâ ile yüzde olarak ölçülmesi", "Hand hygiene analysis under UV light: AI measuring covered and missed areas as a percentage"),
 "el-hijyeni-2": ("El hijyeni tarama paneli: toplam temizlik oranı, kapsanan/atlanan alan ve bölge bazında yüzdeler", "Hand hygiene scan dashboard: overall cleanliness rate, covered/missed area and per-region percentages"),
 "mobilya-kkd-1": ("Mobilya fabrikasında 45 kamerada KKD tespiti: baretsiz ve yeleksiz personelin yapay zekâ ile anlık işaretlenmesi", "PPE detection on 45 cameras at a furniture factory: AI flagging staff without a helmet or vest"),
 "mobilya-kkd-2": ("Mobilya fabrikasında KKD uyum paneli: baret ve yelek uyum oranı, kişi ve forklift tespiti", "PPE compliance dashboard at a furniture factory: helmet and vest compliance, people and forklift detection"),
 "akaryakit-1": ("Akaryakıt istasyonunda poz tahmini ile görevli-müşteri etkileşiminin ve hizmet adımlarının yapay zekâ ile ölçülmesi", "Pose estimation measuring attendant–customer interaction and service steps at a fuel station"),
 "akaryakit-2": ("Pompa başında yakıt verme ve ek hizmet adımlarının poz tahmini ile tespiti", "Pose estimation detecting fuelling and extra service steps at the pump"),
 "akaryakit-3": ("Gece istasyonda birden fazla pompada eşzamanlı servis ve araç yoğunluğunun izlenmesi", "Monitoring simultaneous service at several pumps and vehicle traffic at a station at night"),
 "market-sepet-1": ("Market otoparkında yapay zekâ ile alışveriş sepeti çıkış denemesinin tespiti: çok kameralı takip ve yasak alan uyarısı", "AI detecting a shopping-cart exit attempt in a supermarket car park: cross-camera tracking and restricted-area alert"),
 "market-sepet-2": ("Market otoparkındaki mevcut güvenlik kamerasında alışveriş sepetinin yapay zekâ ile tespiti", "AI detecting a shopping cart on an existing security camera in a supermarket car park"),
 "tasinabilir-kamera-1": ("Paketleme hattında bone, maske ve eldiven (KKD) uyumunun yapay zekâ ile kişi bazında tespiti: PPE OK ve PPE INCOMPLETE", "AI detecting hairnet, mask and glove (PPE) compliance per worker on a packing line: PPE OK and PPE INCOMPLETE"),
 "tasinabilir-kamera-2": ("Taşınabilir yapay zekâ kamerası tripod üzerinde ve canlı KKD uyum paneli: bone, eldiven, maske ve genel uyum oranı — kurulumsuz hat analizi", "Portable AI camera on a tripod with a live PPE compliance panel: hairnet, gloves, mask and overall compliance — install-free line analysis"),
 "tekstil-kalite-1": ("Tekstil kumaş kalite kontrolünde yapay zekâ ile kumaştaki deliğin tespiti: hata kutusu ve güven skoru (Hole 0.86)", "AI detecting a hole in textile fabric quality control: defect box and confidence score (Hole 0.86)"),
 "tekstil-kalite-2": ("Desenli ekose kumaşta yapay zekâ ile leke tespiti: desenin içinde kaybolan hatanın yakalanması (Stain)", "AI detecting a stain on patterned check fabric: catching a defect hidden in the pattern (Stain)"),
 "tekstil-kalite-3": ("Kumaş muayene makinesine kurulan yapay zekâ kamerasıyla akan kumaşın gerçek zamanlı kalite kontrolü", "Real-time quality control of moving fabric with an AI camera on the fabric inspection machine"),
 "makine-sayim-1": ("Kamera ile makineden çıkan ruloların yapay zekâ ile sayılması ve ayrı ID ile takibi (Roll 45, Roll 46, Roll 47)", "AI counting rolls coming off a machine and tracking each with its own ID (Roll 45, Roll 46, Roll 47)"),
 "makine-sayim-2": ("Üretim hattında ürün ID takibi ile makine üretim performansının yapay zekâ ile ölçülmesi", "Measuring machine production performance with AI using product ID tracking on a production line"),
 "yumurta-1": ("Konveyördeki yumurtaların yapay zekâ ile büyük/küçük sınıflandırılması ve sayım çizgisiyle sayılması", "AI classifying eggs on a conveyor as large/small and counting them with a counting line"),
 "yumurta-2": ("Yumurta tesisinde birleşen konveyörde yumurtaların yapay zekâ ile tek tek sayılması ve ID ile takibi", "AI counting eggs one by one and tracking them by ID on the merged conveyor at an egg facility"),
 "yumurta-3": ("Yumurta paketleme tesisinde mevcut konveyör ve kameralarla üretim hattının izlenmesi", "Monitoring the production line with existing conveyor and cameras at an egg packing facility"),
 "yumurta-4": ("Yumurta tesisinde paketleme konveyör hattının üstten görünümü ve ROI ile yumurta sayımı", "Top view of the egg packing conveyor line with ROI egg counting at an egg facility"),
 "yumurta-5": ("Yumurta tavuğu kümesi — yumurtaların toplandığı üretim ortamı", "Layer poultry barn — the production environment where eggs are collected"),
 "forklift-binme-1": ("Depoda forklift/transpalet üstüne binen personelin yapay zekâ ile tespiti ve güvenlik ihlali uyarısı (Person on forklift)", "AI detecting a person riding on a forklift/pallet truck in a warehouse and raising a safety-violation alert (Person on forklift)"),
 "forklift-binme-2": ("Depo koridorunda mevcut güvenlik kamerasıyla forklift ve personel hareketinin izlenmesi", "Monitoring forklift and staff movement with an existing security camera in a warehouse aisle"),
 "yangin-1": ("Kamera ile erken yangın tespiti: 15-20 metreden basketbol topu büyüklüğündeki alevin yapay zekâ ile görülmesi", "Early fire detection with a camera: AI spotting a basketball-sized flame from 15-20 meters"),
 "yangin-2": ("Yangın tespitinde anlık WhatsApp uyarısı (YANGIN TESPİT)", "Instant WhatsApp alert on fire detection (fire detected)"),
 "lastik-1": ("Lastik/kauçuk hattında yüzey yırtık ve çatlağın endüstriyel kamera ve yapay zekâ ile tespiti", "Detecting surface tears and cracks on a rubber/tire line with an industrial camera and AI"),
 "lastik-2": ("Lastik/kauçuk hattında tespit edilen yüzey yırtığı — yapay zekâ ile kutu içinde işaretleniyor", "A surface tear detected on a rubber/tire line — marked with a box by AI"),
}
REV = {}  # imgseo: SEO dosya adı -> ALT anahtarı
def _key(src):
    n = os.path.splitext(os.path.basename(src.split("?")[0]))[0]
    n = n[:-3] if n.endswith("-sm") else n
    return REV.get(n, n)

def fill_alts(html, lang):
    i = 0 if lang == "tr" else 1
    if lang == "en":  # TR'den kopyalanmış alt metinlerini İngilizceye çevir
        html = re.sub(r'(<img[^>]*?\ssrc="([^"]+)"[^>]*?\salt=")([^"]*)(")', lambda m: m.group(1) + ALT.get(_key(m.group(2)), (None, m.group(3)))[1] + m.group(4), html)
        html = re.sub(r'(<img[^>]*?\salt=")([^"]*)("[^>]*?\ssrc="([^"]+)")', lambda m: m.group(1) + ALT.get(_key(m.group(4)), (None, m.group(2)))[1] + m.group(3), html)
    def rep(m):
        tag = m.group(0)
        src = re.search(r'\bsrc="([^"]+)"', tag)
        if not src: return tag
        a = ALT.get(_key(src.group(1)).split('.')[0])
        if not a: return tag
        return tag.replace('alt=""', f'alt="{a[i]}"', 1)
    return re.sub(r'<img\b[^>]*\balt=""[^>]*>', rep, html)

# ---------------------------------------------------------------- 3) ilgili sayfalar
TOPICS = [
 (r"kkd|baret|ppe|is-guvenligi|isg|helmet|400-kamera", ["/kkd-kontrol-kamera-sistemi", "/baret-tespit-sistemi", "/yasakli-alan-ihlal-tespiti"], ["400-kamera", "isg-kkd"]),
 (r"forklift|depo|lojistik|tir-|truck|palet|stockyard", ["/forklift-yaya-guvenlik-sistemi", "/urun-sayimi", "/nesne-takibi"], ["tir-yukleme", "400-kamera"]),
 (r"kalite|yuzey|fire|medikal|medical|mendil|wipes|ambalaj|packag|quality|anomali", ["/kalite-kontrol-goruntu-isleme", "/yuzey-kusuru-tespiti", "/anomali-tespiti"], ["medikal", "islak-mendil", "paketleme"]),
 (r"oee|verimlilik|personel|darbogaz|bottleneck|tekstil|textile|kaynak|welding|idle|productiv", ["/oee-takip-sistemi", "/personel-verimlilik-analizi-kamera", "/urun-sayimi"], ["tekstil", "kaynak", "paketleme-hatti", "gida-hattinda"]),
 (r"yangin|duman|fire-smoke|smoke", ["/yangin-duman-tespiti", "/dusme-tespit-sistemi"], ["acik-alan-duman"]),
 (r"yogunluk|fuar|fair|kisi-sayma|kuyruk|occupancy|queue|perakende|retail", ["/yogunluk-analizi", "/kisi-sayma", "/kuyruk-analizi"], ["fuar"]),
 (r"onvif|rtsp|cctv|kamera-acisi|ip-kamera|camera|mimari|edge", ["/onvif-rtsp-yapay-zeka-entegrasyonu", "/cctv-yapay-zeka", "/endustriyel-goruntu-isleme"], ["400-kamera", "tir-yukleme"]),
 (r"kvkk|gizlilik|privacy|gdpr", ["/kvkk-uyumlu-kamera-analitigi", "/cctv-yapay-zeka"], ["fuar", "400-kamera"]),
 (r"goruntu-isleme|computer-vision|makine|firma|maliyet|ne-kadar|pilot|video-analitigi|nedir", ["/endustriyel-goruntu-isleme", "/kalite-kontrol-goruntu-isleme", "/kkd-kontrol-kamera-sistemi"], ["400-kamera", "medikal", "tekstil"]),
 (r"el-hijyeni|hand-hygiene|hijyen", ["/kkd-kontrol-kamera-sistemi", "/kalite-kontrol-goruntu-isleme", "/kvkk-uyumlu-kamera-analitigi"], ["el-hijyeni", "medikal", "gida-hattinda"]),
 (r"5s-denetimi|5s-audit|5s-kamera", ["/oee-takip-sistemi", "/kalite-kontrol-goruntu-isleme", "/yasakli-alan-ihlal-tespiti"], ["kamera-ile-5s", "400-kamera", "kaynak"]),
 (r"enerji|petrokimya|rafineri|akaryakit|energy|petrochemical|oil-gas|refinery|fuel", ["/kkd-kontrol-kamera-sistemi", "/yasakli-alan-ihlal-tespiti", "/yangin-duman-tespiti"], ["akaryakit-istasyonu", "400-kamera", "acik-alan-duman"]),
 (r"ilac|farma|pharma|gmp|cleanroom|temiz-oda", ["/el-hijyeni-denetimi-kamera-sistemi", "/kkd-kontrol-kamera-sistemi", "/kalite-kontrol-goruntu-isleme"], ["el-hijyeni", "medikal", "islak-mendil"]),
]
LBL = {"tr": ("İlgili çözümler", "İlgili vaka çalışmaları", "İncele →"), "en": ("Related solutions", "Related case studies", "Explore →")}

def related_box(path, kind, lang, ctx):
    """ctx: dict(titles: {tr_path: (tr_title, en_title, en_path)}, cases: [tr_case_paths])"""
    key = path + " "
    sols, cas = [], []
    for rx, s, c in TOPICS:
        if re.search(rx, key):
            sols += [x for x in s if x not in sols]; cas += [x for x in c if x not in cas]
    if not sols: return ""
    T = ctx["titles"]; tr_self = ctx["tr_of"].get(path.rstrip("/"), path.rstrip("/"))
    items = []
    if kind in ("blog", "case", "sec"):
        for s in sols:
            if s == tr_self or s not in T: continue
            items.append((T[s][0] if lang == "tr" else T[s][1], s if lang == "tr" else T[s][2]))
        title = LBL[lang][0]
    else:  # çözüm sayfası -> vakalar
        for k in cas:
            cp = next((p for p in ctx["cases"] if k in p), None)
            if not cp or cp not in T: continue
            items.append((T[cp][0] if lang == "tr" else T[cp][1], cp if lang == "tr" else T[cp][2]))
        title = LBL[lang][1]
    items = [i for i in items if i[1]][:3]
    if not items: return ""
    cards = "".join(f'<a class="cd" href="{h}"><b>{t}</b><i>{LBL[lang][2]}</i></a>' for t, h in items)
    return f'<div class="wrap" style="margin-top:60px"><h2 class="h rv">{title}</h2><div class="cards rel3 rv" style="margin-top:20px">{cards}</div></div>'

# ---------------------------------------------------------------- 5) başlık / açıklama
def short_title(t, limit=52):
    t = re.sub(r"\s+", " ", t).strip()
    if len(t) <= limit: return t
    for sep in (" — ", ": ", " | ", "? ", " – "):
        if sep in t:
            head = t.split(sep)[0] + ("?" if sep == "? " else "")
            if 18 <= len(head) <= limit: return head
    cut = t[:limit].rsplit(" ", 1)[0].rstrip(",;:–—-")
    return cut

def short_desc(d, limit=158):
    d = re.sub(r"\s+", " ", d or "").strip()
    if len(d) <= limit: return d
    return d[:limit].rsplit(" ", 1)[0].rstrip(",;:–—-") + "…"
