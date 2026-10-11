"""Vakalar: (1) ıslak mendil ambalajında SKT/lot/baskı kontrolü, (2) paketleme hattında yoğunluk ve darboğaz analizi."""
import json, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CJ = os.path.join(ROOT, "content.json")
D = json.load(open(CJ, encoding="utf-8"))
S = lambda h, p=(), li=(), imgs=(), rows=(): {"h": h, "p": list(p), "li": list(li), "cards": [], "rows": [list(r) for r in rows], "imgs": list(imgs)}

def add(path, en_path, tr, en):
    tr.update({"path": path, "date": "2026-10-12", "links": []}); en.update({"path": en_path, "date": "2026-10-12", "links": []})
    D["pages"][:] = [p for p in D["pages"] if p["path"] != path] + [tr]
    D.setdefault("en", {})[path] = en

# ---------------------------------------------------------------- 1) ıslak mendil
add("/vaka-calismalari/islak-mendil-skt-baski-kontrolu", "/en/case-studies/wet-wipes-expiry-print-inspection",
{"title": "Islak mendil hattında SKT ve baskı kontrolü: her paket hat hızında okunuyor",
 "desc": "Islak mendil paketleme hattında endüstriyel kamera ile SKT, lot ve barkod baskısı her pakette okunup doğrulandı; eksik, silik veya kaymış baskılı paketler hattan ayrıldı. Sistem kapalı devre, on-premise çalışıyor.",
 "intro": ["Islak mendil üreten bir tesiste paketlerin üzerine basılan son kullanma tarihi (SKT), lot numarası ve barkodun okunaklı ve doğru olması zorunluydu. Kontrol, operatörün belirli aralıklarla paket alıp bakmasıyla yapılıyordu. Hype Vision, paketleme çıkışına endüstriyel kamera ve aydınlatma kurarak her paketin baskısını hat hızında kontrol eden bir istasyon devreye aldı."],
 "specs": [["Kamera", "Endüstriyel alan tarama kamerası · global shutter"], ["Aydınlatma", "Difüz, yansıma önleyici"], ["Kontrol", "SKT · lot · barkod · baskı kalitesi"],
           ["Hat hızı", "~120 paket / dk"], ["Mimari", "On-premise · kapalı devre ağ"], ["Çıktı", "Reject sinyali + kanıt kaydı"]],
 "sections": [
  S("Problem", ["Parlak ve kıvrımlı ambalaj yüzeyinde SKT ve lot baskısı zaman zaman silik, eksik, kaymış ya da hatalı tarihle çıkıyordu. Örnekleme ile yapılan kontrol bu paketlerin bir kısmını kaçırıyor, hatalı ürün sevkiyata karışabiliyordu.",
                "Yanlış veya okunamayan SKT; geri çağırma, müşteri şikâyeti ve mevzuat riski anlamına geliyordu."]),
  S("Endüstriyel kamera ve aydınlatma", ["Folyo ambalaj ışığı yansıttığı için standart kamera ile tutarlı okuma mümkün değildi. Paket çıkışına global shutter endüstriyel kamera ve yansımayı bastıran difüz aydınlatma yerleştirildi; her karede baskı alanı aynı ölçek ve netlikte yakalanıyor."],
    ["Global shutter: hızlı akan pakette bulanıklık yok", "Difüz ışık: folyo yansıması bastırıldı", "Sabit optik: her pakette aynı okuma alanı", "Tetik ile çekim: paket başına tek kare"],
    imgs=[["/img/vaka/mendil-ocr.webp", "Paket baskı alanı — SKT, lot ve barkod satırları okunup doğrulanıyor"]]),
  S("Neyi kontrol ediyoruz?", ["Yapay zekâ destekli OCR, baskı alanındaki satırları okur ve o vardiyanın üretim emriyle karşılaştırır. Ayrıca baskının kendisi değerlendirilir: eksik karakter, silik baskı, kayma veya taşma tespit edilir."],
    ["SKT doğru tarih ve formatta mı", "Lot numarası üretim emriyle eşleşiyor mu", "Barkod okunabiliyor ve doğru mu", "Baskı eksik, silik, kaymış veya lekeli mi", "Hatalı pakette reject sinyali ve görüntülü kayıt"]),
  S("Kapalı devre, on-premise", ["Sistem tamamen tesis içinde, internete bağlı olmayan kapalı devre bir ağda çalışır. Görüntüler ve kayıtlar tesisten çıkmaz; üretim emri bilgisi yerel sistemden alınır, sonuçlar yerel panele yazılır."]),
  S("Sonuçlar", ["İstasyon devreye alındıktan sonra baskı kontrolü örneklemeden %100 kontrole geçti."],
    ["Her paketin SKT ve lot baskısı hat hızında kontrol ediliyor", "Hatalı baskılı paketler sevkiyattan önce otomatik ayrılıyor", "Her ayrılan paket için zaman damgalı görüntü kaydı", "Operatörün manuel kontrol yükü azaldı", "Denetimlerde baskı kalitesi için dijital kanıt arşivi"]),
 ],
 "faq": [{"q": "Farklı ürün ve ambalajlarda çalışır mı?", "a": "Evet. Her ürün için okuma alanı ve beklenen format bir kez tanımlanır; ürün değişiminde reçete seçilerek devam edilir."},
         {"q": "İnternet bağlantısı gerekiyor mu?", "a": "Hayır. Bu projede sistem kapalı devre ağda, tamamen on-premise çalışıyor."}]},
{"title": "Expiry date and print inspection on a wet-wipes line: every pack read at line speed",
 "desc": "On a wet-wipes packaging line, an industrial camera reads and verifies the expiry date, lot and barcode print on every pack; packs with missing, faded or shifted print are rejected. The system runs on-premise on a closed network.",
 "intro": ["At a wet-wipes plant, the expiry date, lot number and barcode printed on every pack had to be legible and correct. Checks relied on operators pulling packs at intervals. Hype Vision installed an industrial camera and lighting at the packaging outfeed to inspect every pack's print at line speed."],
 "specs": [["Camera", "Industrial area-scan camera · global shutter"], ["Lighting", "Diffuse, anti-glare"], ["Checks", "Expiry · lot · barcode · print quality"],
           ["Line speed", "~120 packs / min"], ["Architecture", "On-premise · closed network"], ["Output", "Reject signal + evidence log"]],
 "sections": [
  S("Problem", ["On glossy, wrinkled packaging the expiry and lot print sometimes came out faded, incomplete, shifted or with the wrong date. Sampling missed some of these packs, which could end up in shipments.",
                "A wrong or unreadable expiry date means recall, complaint and regulatory risk."]),
  S("Industrial camera and lighting", ["Foil packaging reflects light, so consistent reading with a standard camera wasn't possible. A global-shutter industrial camera and glare-suppressing diffuse lighting were placed at the outfeed, capturing the print area at the same scale and sharpness in every frame."],
    ["Global shutter: no blur on fast-moving packs", "Diffuse light: foil glare suppressed", "Fixed optics: same reading area on every pack", "Triggered capture: one frame per pack"],
    imgs=[["/img/vaka/mendil-ocr.webp", "Pack print area — expiry, lot and barcode lines read and verified"]]),
  S("What we check", ["AI-powered OCR reads the lines in the print area and compares them with the shift's production order. The print itself is also assessed: missing characters, faded print, shifts or smears are detected."],
    ["Is the expiry date correct and in the right format?", "Does the lot number match the production order?", "Is the barcode readable and correct?", "Is the print missing, faded, shifted or smeared?", "Reject signal and image record for defective packs"]),
  S("Closed network, on-premise", ["The system runs entirely inside the plant on a closed network with no internet connection. Images and records never leave the site; production order data comes from the local system and results are written to a local dashboard."]),
  S("Results", ["Once live, print inspection moved from sampling to 100% inspection."],
    ["Expiry and lot print checked on every pack at line speed", "Packs with defective print rejected automatically before shipping", "Time-stamped image for every rejected pack", "Less manual inspection for operators", "Digital evidence archive of print quality for audits"]),
 ],
 "faq": [{"q": "Does it work with different products and packs?", "a": "Yes. The reading area and expected format are defined once per product; on changeover the operator selects the recipe."},
         {"q": "Is an internet connection required?", "a": "No. In this project the system runs on a closed network, fully on-premise."}]})

# ---------------------------------------------------------------- 2) darboğaz
add("/vaka-calismalari/paketleme-hatti-yogunluk-darbogaz", "/en/case-studies/packing-line-density-bottleneck",
{"title": "Paketleme hatlarında yoğunluk ve darboğaz analizi: hangi istasyon hattı yavaşlatıyor?",
 "desc": "Taze ürün paketleme tesisinde mevcut kameralarla istasyon bazında adet sayımı, aktif çalışma süresi ve hat yoğunluğu ölçüldü; darboğaz oluşturan istasyonlar ve saatler veriyle belirlendi.",
 "intro": ["Taze sebze ayıklama ve kasalama yapan bir tesiste hatların kapasitesi kâğıt üzerinde aynıydı ama gün sonunda çıkan kasa sayıları istasyondan istasyona çok farklıydı. Hangi noktanın hattı yavaşlattığı bilinmiyordu. Hype Vision, hatları gören mevcut kameralarla her istasyonun ne kadar ürün işlediğini ve ne kadar aktif çalıştığını ölçtü."],
 "specs": [["Kamera", "Mevcut IP kameralar"], ["Analiz", "İstasyon ROI + kimliksiz poz analizi"], ["Ölçülenler", "Adet · aktif süre · yoğunluk"],
           ["Çıktı", "Darboğaz raporu + ısı haritası"], ["Kimlik", "Kimliksiz (istasyon bazlı)"], ["Mimari", "On-premise"]],
 "sections": [
  S("Problem", ["Bant hızı tüm hat için aynı ayarlanıyordu, ancak bazı istasyonlarda ürün birikirken bazılarında personel boşta bekliyordu. Vardiya sonunda yalnızca toplam kasa sayısı biliniyordu; kayıp zamanın nerede oluştuğu görünmüyordu."]),
  S("Nasıl ölçtük?", ["Her istasyon kamera görüntüsünde bir ürün alanı (ROI) olarak tanımlandı. Ürünün alandan kasaya geçişi sayılır; kimliksiz poz analizi ile istasyonda aktif çalışılan ve beklenen süre ayrılır. Banttaki ürün yoğunluğu da aynı görüntüden ölçülür."],
    ["İstasyon başına işlenen ürün / kasa sayısı", "Aktif çalışma ve boşta bekleme süresi", "Bant üzerindeki ürün yoğunluğu ve birikme", "Saatlik verim eğrisi ve vardiya karşılaştırması"],
    imgs=[["/img/vaka/darbogaz.webp", "Kasalama istasyonu — ürün alanı, sayaç ve kimliksiz poz analizi"]]),
  S("Darboğazı bulmak", ["Tüm istasyonların saatlik verimi yan yana konduğunda, belirli istasyonların ve saatlerin hattın geri kalanını beklettiği net olarak görüldü. Banttaki ürün birikmesi bu istasyonlarla aynı zaman dilimlerinde artıyordu."],
    rows=[["İstasyon", "Saatlik kasa", "Aktif süre", "Bant yoğunluğu", "Durum"], ["Kasalama 1", "42", "%91", "Normal", "Dengeli"], ["Kasalama 2", "28", "%64", "Yüksek", "Darboğaz"], ["Kasalama 3", "39", "%88", "Normal", "Dengeli"]]),
  S("Sonuçlar", ["Veriyle belirlenen darboğaz istasyonlarında personel dağılımı ve bant düzeni yeniden planlandı."],
    ["Darboğaz oluşturan istasyon ve saatler veriyle belirlendi", "Personel dağılımı istasyon yüküne göre yeniden planlandı", "Hat yoğunluğu ve birikme anlık izleniyor", "Vardiya ve gün karşılaştırması otomatik raporlanıyor", "Kişi takibi yapılmadan, istasyon bazlı ölçüm"]),
 ],
 "faq": [{"q": "Çalışanlar tek tek izleniyor mu?", "a": "Hayır. Ölçüm istasyon bazlıdır; poz analizi yalnızca istasyonda çalışma olup olmadığını anlamak için kullanılır, kimlik tespiti yapılmaz."},
         {"q": "Yeni kamera gerekli mi?", "a": "Hatları yukarıdan gören mevcut kameralar genellikle yeterlidir; keşifte kamera açıları değerlendirilir."}]},
{"title": "Density and bottleneck analysis on packing lines: which station slows the line?",
 "desc": "At a fresh-produce packing plant, existing cameras measured unit counts, active working time and line density per station; bottleneck stations and hours were identified with data.",
 "intro": ["At a plant sorting and boxing fresh vegetables, line capacity was the same on paper, yet end-of-day box counts differed widely between stations. Nobody knew which point was slowing the line. Hype Vision used the existing cameras covering the lines to measure how much each station processed and how actively it worked."],
 "specs": [["Cameras", "Existing IP cameras"], ["Analysis", "Station ROI + anonymous pose analysis"], ["Measured", "Count · active time · density"],
           ["Output", "Bottleneck report + heatmap"], ["Identity", "Anonymous (station-based)"], ["Architecture", "On-premise"]],
 "sections": [
  S("Problem", ["Belt speed was set the same for the whole line, but product piled up at some stations while staff waited idle at others. Only the total box count was known at the end of the shift; where time was lost was invisible."]),
  S("How we measured", ["Each station was defined as a product area (ROI) in the camera view. Products moving from the area into boxes are counted; anonymous pose analysis separates active working time from waiting. Product density on the belt is measured from the same image."],
    ["Products / boxes per station", "Active work vs. idle waiting time", "Product density and build-up on the belt", "Hourly throughput curve and shift comparison"],
    imgs=[["/img/vaka/darbogaz.webp", "Boxing station — product area, counter and anonymous pose analysis"]]),
  S("Finding the bottleneck", ["Placing every station's hourly throughput side by side clearly showed that certain stations and hours were holding up the rest of the line. Product build-up on the belt rose in the same time windows."],
    rows=[["Station", "Boxes / hour", "Active time", "Belt density", "Status"], ["Boxing 1", "42", "91%", "Normal", "Balanced"], ["Boxing 2", "28", "64%", "High", "Bottleneck"], ["Boxing 3", "39", "88%", "Normal", "Balanced"]]),
  S("Results", ["Staffing and belt layout at the bottleneck stations were re-planned based on the data."],
    ["Bottleneck stations and hours identified with data", "Staffing re-planned according to station load", "Line density and build-up monitored live", "Shift and day comparisons reported automatically", "Station-based measurement without tracking individuals"]),
 ],
 "faq": [{"q": "Are individual workers tracked?", "a": "No. Measurement is station-based; pose analysis only determines whether work is happening at the station, and nobody is identified."},
         {"q": "Do we need new cameras?", "a": "Existing cameras that see the lines from above are usually enough; camera angles are reviewed during discovery."}]})

json.dump(D, open(CJ, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("ok")
