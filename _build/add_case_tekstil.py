"""Vaka (mevcut adres korunur): tekstil — dikim, ütü ve paketlemede sayım, çevrim süresi ve hat darboğaz analizi."""
import json, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CJ = os.path.join(ROOT, "content.json")
D = json.load(open(CJ, encoding="utf-8"))
PATH = "/vaka-calismalari/tekstil-hat-a-fire-dususu"
S = lambda h, p=(), li=(), imgs=(), rows=(): {"h": h, "p": list(p), "li": list(li), "cards": [], "rows": [list(r) for r in rows], "imgs": list(imgs)}

tr = {"path": PATH, "date": "2026-10-12", "links": [],
 "title": "Konfeksiyon fabrikasında dikim, ütü ve paketleme dijitalleşti: bant bant sayım ve darboğaz analizi",
 "desc": "Bir hazır giyim tesisinde mevcut kameralarla dikim, ütü-kalite kontrol ve paketleme istasyonlarında adet sayımı, parça başı çevrim süresi, istasyon doluluğu ve hat darboğazları ölçüldü; bant sorumluları kendi hattını canlı görüyor.",
 "intro": ["Çok bantlı bir konfeksiyon fabrikasında üretim takibi saat başı elle yazılan çizelgelere ve vardiya sonu sayımlarına dayanıyordu. Hangi bantın hedefin altında kaldığı ancak gün bittiğinde anlaşılıyor, hangi operasyonun hattı beklettiği bilinmiyordu.",
           "Hype Vision, tesisteki mevcut güvenlik kameralarını kullanarak dikim, ütü-kalite kontrol ve paketleme operasyonlarını dijitalleştirdi. Her istasyon kamera görüntüsünde bir analiz alanı olarak tanımlandı; tamamlanan parça sayısı, parça başı süre ve istasyonun aktif çalışma oranı otomatik ölçülmeye başlandı."],
 "specs": [["Kamera", "Mevcut IP kameralar · RTSP"], ["Operasyonlar", "Dikim · ütü & kalite kontrol · paketleme"], ["Ölçülenler", "Adet · çevrim süresi · doluluk"],
           ["Analiz", "İstasyon ROI + kimliksiz poz / el takibi"], ["Panel", "Bant bazlı canlı ekran + log"], ["Mimari", "On-premise"]],
 "sections": [
  S("Problem", ["Bant sorumluları saatlik üretimi el ile sayıp çizelgeye yazıyordu. Sayımlar gecikiyor, hatalı olabiliyor ve operasyon bazında ayrıntı vermiyordu.",
                "Bir bantta ütü istasyonu geride kaldığında ya da bir dikim makinesi boşta beklediğinde bu ancak gün sonunda, toplam adet düşük çıktığında fark ediliyordu. Darboğazı kimin, nerede, ne zaman yarattığı veriyle gösterilemiyordu.",
                "Teklif ve planlamada kullanılan operasyon süreleri (SAM) da sahadaki gerçek sürelerle hiç karşılaştırılmamıştı."]),
  S("Dikim operasyonları", ["Dikim masaları kamera görüntüsünde tek tek istasyon olarak tanımlandı. Kimliksiz poz ve el takibi ile operatörün makinede aktif çalıştığı süre, parçanın masaya gelişi ve tamamlanıp ayrılışı ölçülür.",
     "Böylece her dikim istasyonu için parça başı süre, istasyon doluluğu ve el doluluğu (ellerin gerçekten iş yaptığı süre oranı) hesaplanır. Aynı operasyonu yapan istasyonlar arasındaki fark ilk kez görünür oldu."],
    ["Parça başı dikim süresi ve ortalama", "İstasyon doluluğu (kişinin istasyonda bulunma oranı)", "El doluluğu (aktif çalışma oranı)", "Alanda anlık kişi sayısı", "Benzer operasyonlar arasında karşılaştırma"],
    imgs=[["/img/vaka/tekstil-bant.webp", "Bant 4 – Dikim 3 · ürün sayısı, ürün başına süre, insan ve el doluluğu"], ["/img/vaka/tekstil-dikim.webp", "Dikim hattı · istasyon bazında performans paneli ve el takibi"]]),
  S("Ütü ve kalite kontrol", ["Bant sonundaki ütü ve kalite kontrol masalarında her ürünün ütü masasına gelişi ve ayrılışı sayılır. Panelde anlık adet, istasyonun durumu (çalışıyor / bekleniyor) ve her ürün için geçen süre log olarak tutulur.",
     "Ürün başı ütü süresindeki sapmalar (örneğin 76 sn ile 94 sn arası) anında görülür; uzun süren ürünler kalite sorunu, eksik dikiş ya da eğitim ihtiyacı için işaret olarak kullanılır."],
    ["Ütü masası bazında adet sayımı", "Her ürün için ütü süresi logu", "Bekleme / çalışma durumu", "Bant sonu kalite kontrol çıkış adedi"],
    imgs=[["/img/vaka/tekstil-utu.webp", "Bant 1 Ütü ve Kalite Kontrol · üretim takip sayacı ve ürün başı süre logu"]]),
  S("Paketleme sayımı", ["Paketleme istasyonlarında katlanıp poşetlenen ve koliye giren ürünler sayılır. Paketleme adedi ütü çıkışıyla karşılaştırılarak bant içindeki ara stok ve bekleyen iş miktarı hesaplanır; sevkiyata hazır adet her an bellidir."],
    ["Katlama / poşetleme / kolileme adedi", "Ütü çıkışı ile paketleme arasındaki ara stok", "Saatlik paketleme hızı", "Sipariş bazında tamamlanma durumu"]),
  S("Hat darboğaz analizi", ["Dikim, ütü ve paketleme verileri aynı zaman ekseninde birleştirildiğinde bant akışı uçtan uca görünür hale gelir. Her operasyonun saatlik çıkışı yan yana konur; çıkışı düşük, doluluğu yüksek ve arkasında ara stok biriken istasyon darboğazdır.",
     "Analiz yalnızca hangi istasyonun yavaş olduğunu değil, ne zaman yavaşladığını da gösterir: vardiya başı, mola dönüşü veya model değişimi gibi saatlerde oluşan kayıplar ayrı ayrı raporlanır."],
    rows=[["Operasyon", "Saatlik adet", "Ort. parça süresi", "Doluluk", "Durum"],
          ["Dikim – yan dikiş", "64", "27 sn", "%96", "Dengeli"], ["Dikim – yaka takma", "41", "44 sn", "%99", "Darboğaz"],
          ["Ütü & kalite kontrol", "48", "84 sn", "%92", "Dengeli"], ["Paketleme", "52", "31 sn", "%71", "Bekliyor"]]),
  S("Bant sorumluları için canlı ekran", ["Her bant sorumlusu yalnızca kendi bandının ekranını görür: anlık adet, hedefe göre durum, darboğaz uyarısı ve son ürünlerin süre logu. Fabrika müdürü tüm bantları tek ekranda karşılaştırır. Veriler ERP/MES'e veya Excel'e aktarılabilir."]),
  S("Gizlilik", ["Ölçüm istasyon ve operasyon bazlıdır; yüz tanıma kullanılmaz, kişiler kimliklendirilmez. Poz ve el takibi yalnızca istasyonda aktif çalışma olup olmadığını anlamak için kullanılır. Görüntü tesis içinde işlenir."]),
  S("Sonuçlar", ["Üretim takibi elle tutulan çizelgelerden canlı, operasyon bazlı veriye geçti."],
    ["Dikim, ütü ve paketlemede adetler otomatik sayılıyor", "Parça başı gerçek süreler ölçüldü, SAM değerleri sahayla karşılaştırıldı", "Darboğaz operasyonlar ve saatler veriyle belirlendi",
     "Personel dağılımı ve bant dengelemesi veriye göre yapılıyor", "Bant sorumluları hedef sapmasını gün içinde görüp müdahale ediyor", "Saatlik çizelge ve vardiya sonu sayım ihtiyacı kalktı"]),
 ],
 "faq": [{"q": "Çalışanlar tek tek izleniyor mu?", "a": "Hayır. Ölçüm istasyon bazlıdır; kim çalıştığı değil, istasyonda ne kadar iş yapıldığı ölçülür. Yüz tanıma kullanılmaz."},
         {"q": "Yeni kamera gerekli mi?", "a": "Bu projede mevcut güvenlik kameraları kullanıldı. Kamera açısı masaları ve ürünü görüyorsa ek donanım gerekmez."},
         {"q": "Model değişiminde ne olur?", "a": "Operasyon tanımları ve hedefler panelden güncellenir; sayım ve süre ölçümü yeni modelle devam eder."}]}

en = {"path": "/en/case-studies/tekstil-hat-a-fire-dususu", "date": "2026-10-12", "links": [],
 "title": "Sewing, pressing and packing digitised at a garment factory: line-by-line counting and bottleneck analysis",
 "desc": "At an apparel plant, existing cameras measured unit counts, cycle time per piece, station occupancy and line bottlenecks across sewing, pressing/quality control and packing; line leaders see their own line live.",
 "intro": ["At a multi-line garment factory, production tracking relied on hourly hand-written charts and end-of-shift counts. Which line was behind target only became clear at the end of the day, and which operation was holding the line up was unknown.",
           "Hype Vision digitised sewing, pressing/quality control and packing using the plant's existing security cameras. Each station was defined as an analysis area; completed pieces, time per piece and active working ratio started to be measured automatically."],
 "specs": [["Cameras", "Existing IP cameras · RTSP"], ["Operations", "Sewing · pressing & QC · packing"], ["Measured", "Count · cycle time · occupancy"],
           ["Analysis", "Station ROI + anonymous pose / hand tracking"], ["Dashboard", "Live per-line screen + log"], ["Architecture", "On-premise"]],
 "sections": [
  S("Problem", ["Line leaders counted hourly output by hand and wrote it on charts. Counts were late, sometimes wrong and gave no per-operation detail.",
                "When a pressing station fell behind or a sewing machine sat idle, it was only noticed at the end of the day when total output came in low. The bottleneck could not be shown with data.",
                "Operation times (SAM) used in quoting and planning had never been compared with real times on the floor."]),
  S("Sewing operations", ["Sewing tables were defined as individual stations. Anonymous pose and hand tracking measure active time at the machine, when a piece arrives and when it is finished.",
     "Time per piece, station occupancy and hand occupancy (share of time hands are actually working) are calculated per station. Differences between stations doing the same operation became visible for the first time."],
    ["Sewing time per piece and average", "Station occupancy", "Hand occupancy (active work ratio)", "Live people count in the area", "Comparison between similar operations"],
    imgs=[["/img/vaka/tekstil-bant.webp", "Line 4 – Sewing 3 · piece count, time per piece, person and hand occupancy"], ["/img/vaka/tekstil-dikim.webp", "Sewing line · per-station performance panel and hand tracking"]]),
  S("Pressing and quality control", ["At the pressing and QC tables at the end of the line, each garment arriving and leaving is counted. The dashboard shows the live count, station status (working / waiting) and a time log for every piece.",
     "Deviations in pressing time per piece (e.g. 76 s vs 94 s) are visible immediately; long pieces flag quality issues, missing stitches or training needs."],
    ["Count per pressing table", "Pressing time log per piece", "Waiting / working status", "End-of-line QC output"],
    imgs=[["/img/vaka/tekstil-utu.webp", "Line 1 Pressing & QC · production counter and time-per-piece log"]]),
  S("Packing count", ["At packing stations, folded, bagged and boxed garments are counted. Packing output is compared with pressing output to calculate work-in-progress between them; ready-to-ship quantity is always known."],
    ["Folding / bagging / boxing count", "WIP between pressing and packing", "Hourly packing rate", "Completion status per order"]),
  S("Line bottleneck analysis", ["Combining sewing, pressing and packing data on one timeline shows the line flow end to end. The station with low output, high occupancy and WIP piling up behind it is the bottleneck.",
     "The analysis shows not only which station is slow but when: losses at shift start, after breaks or at style changeovers are reported separately."],
    rows=[["Operation", "Pieces / hour", "Avg. time per piece", "Occupancy", "Status"],
          ["Sewing – side seam", "64", "27 s", "96%", "Balanced"], ["Sewing – collar attach", "41", "44 s", "99%", "Bottleneck"],
          ["Pressing & QC", "48", "84 s", "92%", "Balanced"], ["Packing", "52", "31 s", "71%", "Waiting"]]),
  S("Live screen for line leaders", ["Each line leader sees only their own line: live count, status against target, bottleneck alerts and the latest time log. The plant manager compares all lines on one screen. Data can be exported to ERP/MES or Excel."]),
  S("Privacy", ["Measurement is station- and operation-based; no face recognition is used and nobody is identified. Pose and hand tracking only determine whether work is happening at the station. Video is processed on site."]),
  S("Results", ["Production tracking moved from hand-written charts to live, per-operation data."],
    ["Sewing, pressing and packing counted automatically", "Real time per piece measured and compared with SAM", "Bottleneck operations and hours identified with data",
     "Staffing and line balancing driven by data", "Line leaders spot target deviations during the day", "No more hourly charts or end-of-shift counts"]),
 ],
 "faq": [{"q": "Are individual workers tracked?", "a": "No. Measurement is station-based: how much work happens at a station, not who did it. No face recognition is used."},
         {"q": "Do we need new cameras?", "a": "This project used existing security cameras. If the camera sees the tables and garments, no extra hardware is needed."},
         {"q": "What happens at style changeover?", "a": "Operation definitions and targets are updated in the dashboard; counting and timing continue with the new style."}]}

D["pages"] = [p for p in D["pages"] if p["path"] != PATH] + [tr]
D.setdefault("en", {})[PATH] = en
json.dump(D, open(CJ, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("ok")
