"""Vaka: kaynak atölyesinde üretimin dijitalleştirilmesi (kaynak/taşlama süresi, çevrim, adet, KKD). content.json'a TR+EN ekler."""
import json, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CJ = os.path.join(ROOT, "content.json")
D = json.load(open(CJ, encoding="utf-8"))
PATH = "/vaka-calismalari/kaynak-atolyesi-uretim-dijitallestirme"
EN_PATH = "/en/case-studies/welding-shop-production-digitisation"
S = lambda h, p=(), li=(), imgs=(), rows=(): {"h": h, "p": list(p), "li": list(li), "cards": [], "rows": [list(r) for r in rows], "imgs": list(imgs)}

tr = {"path": PATH, "date": "2026-10-12",
 "title": "Kaynak atölyesinde üretimin dijitalleştirilmesi: her parçanın kaynak ve taşlama süresi artık ölçülüyor",
 "desc": "Boru ve flanş kaynak istasyonunda mevcut IP kamera ile kaynak süresi, taşlama süresi, parça başı çevrim süresi, çıkan iş adedi ve KKD uyumu (eldiven, yüz koruması) otomatik ölçüldü.",
 "intro": ["Boru, flanş ve dirsek kaynağı yapan bir metal imalat atölyesinde üretim takibi vardiya sonunda elle tutulan formlara dayanıyordu. Bir parçanın ne kadar sürede kaynatıldığı, ne kadar taşlandığı ve personelin işi kaç dakikada bitirdiği bilinmiyordu. Hype Vision, istasyonu gören mevcut IP kamerayla bu süreci dijitalleştirdi."],
 "specs": [["Kamera", "Mevcut IP kamera (IPC) · RTSP"], ["Analiz alanı", "Kaynak istasyonu ROI"], ["Ölçülenler", "Kaynak · taşlama · çevrim · adet"],
           ["KKD kontrolü", "Eldiven · yüz koruması / kaynak maskesi"], ["Kimlik", "Kimliksiz (istasyon bazlı)"], ["Çıktı", "Canlı panel + vardiya raporu"]],
 "sections": [
  S("Problem", ["Atölyede üretim adetleri ve süreler vardiya sonunda formlara yazılıyordu. Hangi parçada ne kadar kaynak ve taşlama yapıldığı, istasyonun gün içinde ne kadar aktif çalıştığı ve teklif/maliyet hesabında kullanılan sürelerin gerçeği yansıtıp yansıtmadığı bilinmiyordu.",
                "Kaynak sırasında eldiven ve yüz koruması kullanımı da yalnızca İSG uzmanının tur attığı anlarda kontrol edilebiliyordu."]),
  S("Ne ölçüyoruz?", ["Kamera görüntüsünde istasyon bir analiz alanı (ROI) olarak tanımlandı. Model; kaynak arkını, taşlama kıvılcımını, eldiveni, yüz korumasını ve işlenen parçayı her karede tespit eder. Bu tespitler zamana bağlanarak operasyon verisine dönüşür."],
    ["Kaynak süresi: ark yanık kaldığı toplam süre", "Taşlama süresi: kıvılcım tespit edilen toplam süre", "Parça başı çevrim süresi: işe başlama → parça bitişi", "Çıkan iş adedi: tamamlanan parça sayısı",
     "Aktif / boşta süre: istasyonun gün içi kullanımı", "KKD uyumu: kaynak ve taşlama anında eldiven ve yüz koruması"],
    imgs=[["/img/vaka/kaynak-1.webp", "Kaynak anı — süre sayacı, eldiven ve yüz koruması OK"], ["/img/vaka/kaynak-2.webp", "Taşlama anı — kıvılcım tespiti, gözlük ve eldiven OK"]]),
  S("Panelde ne görülüyor?", ["Her tamamlanan parça için bir satır oluşur. Vardiya sonunda istasyon bazında rapor hazırdır; veriler ERP/MES'e veya Excel'e aktarılabilir."],
    rows=[["Parça", "Kaynak", "Taşlama", "Çevrim", "KKD"], ["Flanşlı boru #14", "6 dk 40 sn", "2 dk 10 sn", "14 dk", "Uygun"], ["Dirsek #15", "4 dk 05 sn", "1 dk 35 sn", "9 dk", "Uygun"],
          ["Flanşlı boru #16", "7 dk 15 sn", "2 dk 50 sn", "16 dk", "Eldiven yok · 12 sn"]]),
  S("Gizlilik", ["Analiz istasyon bazlıdır; yüz tanıma kullanılmaz, kişiler kimliklendirilmez. Görüntü tesis içinde işlenir, panele yalnızca süre, adet ve olay verisi aktarılır."]),
  S("Sonuçlar", ["İlk dönemde ölçülen gerçek süreler, planlama ve maliyet hesabında kullanılan varsayılan sürelerle karşılaştırıldı."],
    ["Parça bazında gerçek kaynak ve taşlama süresi ilk kez ölçüldü", "Teklif ve maliyet hesabı gerçek çevrim sürelerine göre güncellendi", "İstasyon aktif kullanım oranı vardiya bazında görünür oldu",
     "Günlük çıkan iş adedi formsuz, otomatik raporlanıyor", "Kaynak ve taşlama anında KKD uyumu 7/24 kayıt altında"]),
 ],
 "faq": [{"q": "Personel takibi mi yapılıyor?", "a": "Hayır. Ölçüm istasyon bazlıdır; kim çalıştığı değil, istasyonda ne kadar kaynak, taşlama ve iş yapıldığı ölçülür. Yüz tanıma kullanılmaz."},
         {"q": "Yeni kamera gerekli mi?", "a": "Bu projede istasyonu gören mevcut IP kamera kullanıldı. Kamera açısı istasyonu ve parçayı net görüyorsa ek donanım gerekmez."}],
 "links": []}
en = {"path": EN_PATH, "date": "2026-10-12",
 "title": "Digitising a welding shop: welding and grinding time per part, now measured",
 "desc": "At a pipe and flange welding station, an existing IP camera measured welding time, grinding time, cycle time per part, output count and PPE compliance (gloves, face protection) automatically.",
 "intro": ["At a metal fabrication shop welding pipes, flanges and elbows, production tracking relied on paper forms filled in at the end of the shift. Nobody knew how long a part was welded, how long it was ground or how many minutes a job really took. Hype Vision digitised the process using the existing IP camera that already covered the station."],
 "specs": [["Camera", "Existing IP camera (IPC) · RTSP"], ["Analysis area", "Welding station ROI"], ["Measured", "Welding · grinding · cycle · output"],
           ["PPE check", "Gloves · face shield / welding mask"], ["Identity", "Anonymous (station-based)"], ["Output", "Live dashboard + shift report"]],
 "sections": [
  S("Problem", ["Output and times were written on forms at the end of each shift. How much welding and grinding each part needed, how actively the station was used and whether the times used in quoting were realistic were all unknown.",
                "Glove and face-protection use during welding could only be checked when the HSE specialist walked by."]),
  S("What we measure", ["The station was defined as a region of interest in the camera view. The model detects the welding arc, grinding sparks, gloves, face protection and the workpiece in every frame; tied to time, these detections become operational data."],
    ["Welding time: total time the arc is on", "Grinding time: total time sparks are detected", "Cycle time per part: job start → part finished", "Output: number of completed parts",
     "Active / idle time: station utilisation during the day", "PPE compliance: gloves and face protection while welding and grinding"],
    imgs=[["/img/vaka/kaynak-1.webp", "Welding — duration counter, gloves and face protection OK"], ["/img/vaka/kaynak-2.webp", "Grinding — spark detection, goggles and gloves OK"]]),
  S("What the dashboard shows", ["Each finished part creates a row. A station report is ready at the end of the shift and can be exported to ERP/MES or Excel."],
    rows=[["Part", "Welding", "Grinding", "Cycle", "PPE"], ["Flanged pipe #14", "6 min 40 s", "2 min 10 s", "14 min", "OK"], ["Elbow #15", "4 min 05 s", "1 min 35 s", "9 min", "OK"],
          ["Flanged pipe #16", "7 min 15 s", "2 min 50 s", "16 min", "No gloves · 12 s"]]),
  S("Privacy", ["Analysis is station-based; no face recognition is used and nobody is identified. Video is processed on site and only time, count and event data reach the dashboard."]),
  S("Results", ["Measured times from the first period were compared with the default times used in planning and costing."],
    ["Real welding and grinding time per part measured for the first time", "Quotes and costing updated with real cycle times", "Station utilisation visible per shift",
     "Daily output reported automatically, no paper forms", "PPE compliance during welding and grinding logged 24/7"]),
 ],
 "faq": [{"q": "Is this tracking individual workers?", "a": "No. Measurement is station-based: we measure how much welding, grinding and work happened at the station, not who did it. No face recognition is used."},
         {"q": "Do we need new cameras?", "a": "This project used the existing IP camera covering the station. If the camera clearly sees the station and the part, no extra hardware is needed."}],
 "links": []}
D["pages"] = [p for p in D["pages"] if p["path"] != PATH] + [tr]
D.setdefault("en", {})[PATH] = en
json.dump(D, open(CJ, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("ok")
