"""4 vaka: TIR yükleme sevkiyat sayımı, fuar yoğunluk analizi, açık alanda duman tespiti, 400 kamerada alan bazlı KKD."""
import json, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CJ = os.path.join(ROOT, "content.json")
D = json.load(open(CJ, encoding="utf-8"))
S = lambda h, p=(), li=(), imgs=(), rows=(): {"h": h, "p": list(p), "li": list(li), "cards": [], "rows": [list(r) for r in rows], "imgs": list(imgs)}
def add(path, en_path, tr, en):
    for x, p in ((tr, path), (en, en_path)): x.update({"path": p, "date": "2026-10-12", "links": []})
    D["pages"][:] = [p for p in D["pages"] if p["path"] != path] + [tr]
    D.setdefault("en", {})[path] = en

# 1 ---------------------------------------------------------------- TIR yükleme
add("/vaka-calismalari/tir-yukleme-sevkiyat-sayimi", "/en/case-studies/truck-loading-shipment-counting",
{"title": "TIR yükleme rampasında otomatik sevkiyat sayımı: her yük, her araç kayıt altında",
 "desc": "Yükleme rampasını gören mevcut kamerayla TIR dorsesi ve forklift otomatik algılandı; dorseye giren ürünler sayıldı, sevkiyat adedi ve görüntülü kanıt sistemle eşleştirildi.",
 "intro": ["Bir üretim tesisinin sevkiyat rampasında TIR'a yüklenen ürün adedi, yükleme sonunda elle sayılıyor ve irsaliye ile karşılaştırılıyordu. Eksik veya fazla yükleme ancak müşteri tarafında fark ediliyor, itirazlarda gösterilecek bir kanıt bulunmuyordu. Hype Vision, rampayı gören mevcut kamerayla yükleme sürecini otomatik saymaya ve kayıt altına almaya başladı."],
 "specs": [["Kamera", "Mevcut IP kamera · rampa görüşü"], ["Algılama", "TIR dorsesi · forklift · ürün"], ["Bölge", "Değiştirilebilir ROI veya otomatik dorse tespiti"],
           ["Çıktı", "Araç bazlı yükleme adedi"], ["Kanıt", "Zaman damgalı görüntü kaydı"], ["Entegrasyon", "İrsaliye / ERP karşılaştırma"]],
 "sections": [
  S("Problem", ["Yükleme sırasında sayım operatöre bağlıydı; yoğun saatlerde veya vardiya değişiminde sayılar karışabiliyordu. Müşteriden gelen 'eksik geldi' itirazlarında elde gösterilecek görüntü yoktu ve sorunun yükleme mi taşıma mı kaynaklı olduğu anlaşılamıyordu."]),
  S("Nasıl çalışıyor?", ["Kamera görüntüsünde TIR dorsesinin arka kapısı sayım bölgesi (ROI) olarak kullanılır. Bu bölge iki şekilde çalışabilir: rampaya göre sabit tanımlanan ve panelden değiştirilebilen bir alan olarak, ya da her yeni araç yanaştığında dorse arkasının otomatik algılanmasıyla.",
     "Forklift ve taşıdığı yük takip edilir; yük dorse bölgesine girip forklift boş çıktığında sayaç bir artar. Ters yöndeki hareketler (yükün geri alınması) düşülür. Her sayım, o anın görüntüsüyle birlikte kaydedilir."],
    ["TIR dorsesi ve arka kapı otomatik algılama", "Panelden değiştirilebilir sayım bölgesi (ROI)", "Forklift + yük takibi ile giriş/çıkış ayrımı", "Araç bazında yükleme başlangıç–bitiş süresi"],
    imgs=[["/img/vaka/tir-2.webp", "Forklift yük ile dorseye yaklaşıyor · sayaç 2"], ["/img/vaka/tir-1.webp", "Yük dorse bölgesine girdi · sayaç 3"]]),
  S("Sevkiyat takibi", ["Her araç için yükleme adedi, süre ve kanıt kareleri tek bir sevkiyat kaydında toplanır. İrsaliye veya ERP'deki sipariş adedi ile karşılaştırılır; fark varsa araç rampadan ayrılmadan uyarı verilir."],
    rows=[["Araç", "Sipariş", "Sayılan", "Süre", "Durum"], ["TIR #1", "24", "24", "18 dk", "Tamam"], ["TIR #2", "30", "28", "22 dk", "Eksik · uyarı"], ["TIR #3", "18", "18", "13 dk", "Tamam"]]),
  S("Sonuçlar", ["Sevkiyat sayımı elle yapılan bir işlemden otomatik ve kanıtlı bir sürece dönüştü."],
    ["Her araç için otomatik yükleme adedi", "Sipariş–yükleme farkı araç ayrılmadan tespit ediliyor", "Müşteri itirazlarında görüntülü kanıt", "Rampa kullanım ve yükleme süreleri ölçülüyor", "Elle sayım ve sayım formu ihtiyacı kalktı"]),
 ],
 "faq": [{"q": "Farklı rampalarda ayrı ayar gerekir mi?", "a": "Her rampa kamerası için bölge bir kez tanımlanır; otomatik dorse tespiti açıksa araç pozisyonu değişse de sayım devam eder."},
         {"q": "Paletsiz, tek tek yüklenen ürünler sayılabilir mi?", "a": "Evet; ürün tipine göre model eğitilir. Rulo, torba, koli veya palet gibi farklı yük tipleri ayrı sayılabilir."}]},
{"title": "Automatic shipment counting at the truck loading dock: every load, every vehicle on record",
 "desc": "An existing camera covering the dock detects the trailer and forklift automatically; loads entering the trailer are counted and shipment quantity and video evidence are matched against the order.",
 "intro": ["At a plant's dispatch dock, the quantity loaded into each truck was counted by hand at the end of loading and compared with the delivery note. Short or over-loading was only noticed at the customer, with no evidence for disputes. Hype Vision started counting and recording loading automatically using the existing camera covering the dock."],
 "specs": [["Camera", "Existing IP camera · dock view"], ["Detection", "Trailer · forklift · product"], ["Zone", "Editable ROI or automatic trailer detection"],
           ["Output", "Load count per vehicle"], ["Evidence", "Time-stamped image log"], ["Integration", "Delivery note / ERP matching"]],
 "sections": [
  S("Problem", ["Counting depended on the operator; at busy times or shift changes numbers could get mixed up. For customer 'short delivery' claims there was no footage, and it was unclear whether the issue came from loading or transport."]),
  S("How it works", ["The trailer's rear door is used as the counting zone (ROI). It can be a fixed zone defined per dock and editable in the dashboard, or detected automatically each time a new truck backs in.",
     "The forklift and its load are tracked; when a load enters the trailer zone and the forklift leaves empty, the counter increments. Reverse movements are subtracted. Every count is saved with that moment's image."],
    ["Automatic trailer and rear-door detection", "Counting zone (ROI) editable in the dashboard", "Forklift + load tracking for in/out direction", "Loading start–end time per vehicle"],
    imgs=[["/img/vaka/tir-2.webp", "Forklift approaching the trailer with a load · count 2"], ["/img/vaka/tir-1.webp", "Load entered the trailer zone · count 3"]]),
  S("Shipment tracking", ["Load count, duration and evidence frames are collected in one shipment record per vehicle and compared with the order quantity in the delivery note or ERP; any difference triggers an alert before the truck leaves."],
    rows=[["Vehicle", "Order", "Counted", "Time", "Status"], ["Truck #1", "24", "24", "18 min", "OK"], ["Truck #2", "30", "28", "22 min", "Short · alert"], ["Truck #3", "18", "18", "13 min", "OK"]]),
  S("Results", ["Shipment counting moved from a manual task to an automatic, evidence-backed process."],
    ["Automatic load count per vehicle", "Order vs. loaded differences caught before the truck leaves", "Video evidence for customer claims", "Dock utilisation and loading times measured", "No more manual counting or count sheets"]),
 ],
 "faq": [{"q": "Does each dock need separate setup?", "a": "The zone is defined once per dock camera; with automatic trailer detection, counting continues even if the truck position changes."},
         {"q": "Can loose items be counted, not just pallets?", "a": "Yes; the model is trained per product type. Rolls, sacks, cartons or pallets can be counted separately."}]})

# 2 ---------------------------------------------------------------- Fuar
add("/vaka-calismalari/fuar-ziyaretci-yogunluk-analizi", "/en/case-studies/trade-fair-visitor-density-analytics",
{"title": "Fuar alanında ziyaretçi yoğunluğu ve koridor analizi: hangi stant, kaç kişi, ne kadar süre?",
 "desc": "Uluslararası bir fuarda mevcut kameralarla koridor, stant önü, oturma ve bekleme bölgelerinde anlık ve toplam ziyaretçi sayısı, maksimum yoğunluk ve bekleme süresi kimliksiz olarak ölçüldü.",
 "intro": ["Büyük bir fuar organizasyonunda stant sahipleri ve organizatör, hangi alanların gerçekten ilgi gördüğünü ancak tahminle söyleyebiliyordu. Hype Vision, salonu gören kameraları kullanarak alanı bölgelere ayırdı ve ziyaretçi akışını fuar boyunca kimliksiz olarak ölçtü."],
 "specs": [["Kamera", "Salon kameraları · tavan açısı"], ["Bölgeler", "Koridor · stant önü · oturma · bekleme"], ["Ölçülenler", "Anlık / toplam / maksimum kişi"],
           ["Süre", "Bölgede kalma (dwell) süresi"], ["Kimlik", "Kimliksiz ID ile takip"], ["İşleme", "GPU (CUDA) · gerçek zamanlı KPI paneli"]],
 "sections": [
  S("Problem", ["Fuar sonunda stant başarısı ziyaretçi defteri ve izlenimle değerlendiriliyordu. Hangi koridorun kalabalık olduğu, hangi stantın önünden geçilip durulmadığı, oturma alanlarının ne kadar kullanıldığı bilinmiyordu. Organizatör için de güvenlik ve akış planlaması tahmine dayanıyordu."]),
  S("Bölge bazlı analiz", ["Salon görüntüsü koridorlar, stant önleri, oturma ve geçiş/bekleme alanları gibi bölgelere ayrıldı. Her bölge için anlık kişi sayısı, toplam ziyaretçi, gün içindeki maksimum yoğunluk ve kişilerin bölgede kaldığı ortalama süre hesaplanır. Yoğunluk seviyesi (düşük / orta / yüksek) panelde canlı görünür."],
    ["Anlık, toplam ve maksimum kişi sayısı", "Bölgede ortalama kalma (dwell) süresi", "Yoğunluk seviyesi ve saatlik eğri", "Koridor akışı ve geçiş yönü", "Stant önü durma oranı"],
    imgs=[["/img/vaka/fuar-1.webp", "5 bölgeli KPI paneli · koridor, stant önü, oturma ve bekleme alanları"], ["/img/vaka/fuar-2.webp", "Stant girişi ve koridor · kişi başı bekleme süresi"]]),
  S("Kimin işine yarıyor?", ["Stant sahibi, stantının önünden geçen ve duran ziyaretçi sayısını, en yoğun saatleri ve ortalama ilgi süresini görür; fuar yatırımının geri dönüşünü veriyle değerlendirir. Organizatör ise koridor yoğunluğunu anlık izleyerek güvenlik, yönlendirme ve gelecek yılın yerleşim planını veriyle yapar."]),
  S("Gizlilik", ["Yüz tanıma kullanılmaz, kimse kimliklendirilmez. Kişiler yalnızca geçici, anonim ID'lerle sayılır; ID'ler kişiyle eşleştirilmez ve saklanmaz. Panele yalnızca sayı ve süre verisi aktarılır."]),
  S("Sonuçlar", ["Fuar boyunca alan kullanımı ilk kez ölçülebilir hale geldi."],
    ["Bölge bazında saatlik ve günlük ziyaretçi verisi", "Stant önünde durma ve bekleme süreleri", "Koridor darboğazları ve en yoğun saatler belirlendi", "Organizatör için yerleşim ve güvenlik planına veri", "Kimliksiz, KVKK uyumlu ölçüm"]),
 ],
 "faq": [{"q": "Ziyaretçilerin yüzleri kaydediliyor mu?", "a": "Hayır. Analiz kimliksizdir; yalnızca sayı ve süre verisi üretilir."},
         {"q": "Mağaza ve AVM'de de kullanılabilir mi?", "a": "Evet; aynı yöntem perakende, AVM, müze ve etkinlik alanlarında ziyaretçi akışı ve bölge kullanımı için uygulanır."}]},
{"title": "Visitor density and aisle analytics at a trade fair: which stand, how many people, how long?",
 "desc": "At an international fair, existing cameras measured live and total visitors, peak density and dwell time in aisles, stand fronts, seating and waiting zones — anonymously.",
 "intro": ["At a large fair, exhibitors and the organiser could only guess which areas really drew interest. Hype Vision split the hall into zones using the cameras covering it and measured visitor flow anonymously throughout the event."],
 "specs": [["Cameras", "Hall cameras · ceiling view"], ["Zones", "Aisle · stand front · seating · waiting"], ["Measured", "Live / total / peak people"],
           ["Time", "Dwell time per zone"], ["Identity", "Anonymous ID tracking"], ["Processing", "GPU (CUDA) · real-time KPI panel"]],
 "sections": [
  S("Problem", ["Stand success was judged by guest books and impressions. Which aisle was crowded, which stand people passed without stopping and how much seating was used were unknown. The organiser's safety and flow planning was also guesswork."]),
  S("Zone-based analytics", ["The hall view was split into aisles, stand fronts, seating and transit/waiting zones. For each zone the live count, total visitors, daily peak and average dwell time are calculated; density level (low / medium / high) is shown live."],
    ["Live, total and peak people count", "Average dwell time per zone", "Density level and hourly curve", "Aisle flow and direction", "Stop rate in front of stands"],
    imgs=[["/img/vaka/fuar-1.webp", "5-zone KPI panel · aisle, stand front, seating and waiting areas"], ["/img/vaka/fuar-2.webp", "Stand entrance and aisle · dwell time per person"]]),
  S("Who benefits?", ["Exhibitors see how many visitors passed and stopped, peak hours and average attention time, and judge their fair investment with data. The organiser monitors aisle density live for safety, guidance and next year's layout."]),
  S("Privacy", ["No face recognition is used and nobody is identified. People are counted with temporary anonymous IDs that are never linked to a person or stored. Only count and time data reach the dashboard."]),
  S("Results", ["Floor usage became measurable for the first time across the event."],
    ["Hourly and daily visitor data per zone", "Stop and dwell times at stand fronts", "Aisle bottlenecks and peak hours identified", "Data for the organiser's layout and safety planning", "Anonymous, privacy-compliant measurement"]),
 ],
 "faq": [{"q": "Are visitors' faces recorded?", "a": "No. Analysis is anonymous; only count and time data are produced."},
         {"q": "Can this work in stores and malls?", "a": "Yes; the same method applies to retail, malls, museums and event venues for visitor flow and zone usage."}]})

# 3 ---------------------------------------------------------------- Duman
add("/vaka-calismalari/acik-alan-duman-tespiti", "/en/case-studies/outdoor-smoke-detection",
{"title": "Açık alanda erken duman tespiti: dedektörün ulaşamadığı yerde kamera görüyor",
 "desc": "Bir maden ve silo sahasının çevresindeki açık alanda, mevcut çevre güvenlik kameraları ile duman yapay zekâ tarafından erken aşamada tespit edildi ve kanıt kareli alarm üretildi.",
 "intro": ["Silo ve stok sahaları, otoyol kenarı ve çevresindeki otluk alanlarla çevrili bir tesiste, açık alanda başlayan küçük bir yangın veya duman, duman dedektörlerinin bulunmadığı bu bölgelerde geç fark ediliyordu. Hype Vision, çevre güvenliği için zaten kurulu olan kameraları duman algılayan bir erken uyarı sistemine dönüştürdü."],
 "specs": [["Kamera", "Mevcut çevre güvenlik kameraları"], ["Algılama", "Duman ve alev"], ["Ortam", "Açık alan · otluk · stok sahası"],
           ["Alarm", "Kanıt kareli anlık bildirim"], ["Kanal", "Panel · mobil · SMS / WhatsApp"], ["Mimari", "On-premise"]],
 "sections": [
  S("Problem", ["Nokta tipi duman dedektörleri kapalı alanlar içindir; açık sahada, rüzgârlı ortamda çalışmaz. Çevre kameraları ise yalnızca kayıt alıyordu ve kimse 7/24 ekran başında değildi. Kuru otluk alanlarda başlayan duman dakikalar içinde büyüyebiliyordu."]),
  S("Nasıl çalışıyor?", ["Yapay zekâ modeli, kamera görüntüsünde duman bulutunu ve alevi zemin, gökyüzü ve tozdan ayırt edecek şekilde eğitildi. Tespit, birkaç kare boyunca doğrulandıktan sonra alarma dönüşür; böylece toz, sis veya araç egzozu gibi kısa süreli görüntüler yanlış alarm üretmez.",
     "Alarm; kamera adı, konum, zaman ve işaretli kanıt karesi ile birlikte kontrol odası paneline ve mobil cihazlara iletilir."],
    ["Açık alanda duman ve alev tespiti", "Çok kareli doğrulama ile yanlış alarm azaltma", "Bölge bazlı hassasiyet (stok sahası, otluk, yol kenarı)", "Kanıt kareli anlık bildirim"],
    imgs=[["/img/vaka/duman.webp", "Silo sahası çevresi · açık alanda başlayan duman erken aşamada işaretlendi"]]),
  S("Neden önemli?", ["Erken uyarı, küçük bir dumanın yangına dönüşmeden söndürülmesini sağlar. Mevcut kameralar kullanıldığı için sahaya yeni sensör, kablolama veya altyapı gerekmez; aynı kameralar çevre güvenliği için de çalışmaya devam eder."]),
  S("Sonuçlar", ["Çevre kameraları pasif kayıttan aktif erken uyarıya geçti."],
    ["Dedektör olmayan açık alanlarda 7/24 duman izleme", "Duman ilk aşamada tespit edilip ekibe iletildi", "Her alarm kanıt karesiyle kayıt altında", "Yeni sensör veya kablolama gerekmedi"]),
 ],
 "faq": [{"q": "Duman dedektörlerinin yerini alır mı?", "a": "Hayır. Görüntü tabanlı tespit tamamlayıcı bir katmandır; mevzuatın gerektirdiği yangın algılama sistemlerinin yerine geçmez, özellikle dedektörün olmadığı açık alanlarda erken uyarı sağlar."},
         {"q": "Sis veya toz yanlış alarm verir mi?", "a": "Çok kareli doğrulama ve sahaya özel kalibrasyon ile bu tür yanlış alarmlar en aza indirilir."}]},
{"title": "Early smoke detection outdoors: the camera sees where detectors can't reach",
 "desc": "Around a mining and silo site, existing perimeter cameras detected smoke at an early stage with AI and raised alerts with evidence frames.",
 "intro": ["At a site surrounded by silos, stockyards, a motorway verge and grassland, a small outdoor fire or smoke was noticed late in areas without smoke detectors. Hype Vision turned the perimeter cameras already installed for security into an early-warning smoke detection system."],
 "specs": [["Cameras", "Existing perimeter cameras"], ["Detection", "Smoke and flame"], ["Environment", "Outdoor · grassland · stockyard"],
           ["Alert", "Instant alert with evidence frame"], ["Channel", "Dashboard · mobile · SMS / WhatsApp"], ["Architecture", "On-premise"]],
 "sections": [
  S("Problem", ["Point smoke detectors are for indoor spaces and don't work in open, windy areas. Perimeter cameras only recorded, and nobody watched screens 24/7. Smoke starting in dry grass could grow within minutes."]),
  S("How it works", ["The AI model was trained to distinguish smoke plumes and flames from ground, sky and dust. A detection is confirmed over several frames before becoming an alert, so brief dust, fog or exhaust doesn't cause false alarms.",
     "Alerts are sent to the control-room dashboard and mobile devices with camera name, location, time and a marked evidence frame."],
    ["Outdoor smoke and flame detection", "Multi-frame confirmation to reduce false alarms", "Zone-based sensitivity (stockyard, grassland, roadside)", "Instant alert with evidence frame"],
    imgs=[["/img/vaka/duman.webp", "Silo site perimeter · smoke starting outdoors flagged at an early stage"]]),
  S("Why it matters", ["Early warning lets a small plume be put out before it becomes a fire. Since existing cameras are used, no new sensors, cabling or infrastructure are needed, and the same cameras keep doing perimeter security."]),
  S("Results", ["Perimeter cameras moved from passive recording to active early warning."],
    ["24/7 smoke monitoring in outdoor areas without detectors", "Smoke detected at the first stage and sent to the team", "Every alert logged with an evidence frame", "No new sensors or cabling required"]),
 ],
 "faq": [{"q": "Does it replace smoke detectors?", "a": "No. Vision-based detection is a complementary layer; it doesn't replace legally required fire detection, but adds early warning especially outdoors where detectors don't exist."},
         {"q": "Do fog or dust trigger false alarms?", "a": "Multi-frame confirmation and site-specific calibration keep such false alarms to a minimum."}]})

# 4 ---------------------------------------------------------------- KKD 400 kamera
add("/vaka-calismalari/400-kamera-alan-bazli-kkd-denetimi", "/en/case-studies/400-camera-zone-based-ppe-monitoring",
{"title": "400 kamerada alan bazlı KKD denetimi: baret, yelek, iş ayakkabısı ve eldiven",
 "desc": "Büyük bir üretim ve depolama tesisinde 400 kamera üzerinde baret ve yelek denetimi devreye alındı; giriş kapılarında iş ayakkabısı ve eldiven kontrolü eklendi, her alan için ayrı KKD kuralı tanımlandı.",
 "intro": ["Çok sayıda hol, depo koridoru ve giriş kapısı olan bir tesiste İSG ekibi KKD uyumunu tüm sahada aynı anda denetleyemiyordu. Hype Vision, tesisteki 400 kamerayı tek bir KKD denetim platformuna bağladı ve her alan için o alanın gerektirdiği donanımı kontrol eden kurallar tanımladı."],
 "specs": [["Kamera", "400 mevcut IP kamera"], ["Genel alan", "Baret · reflektörlü yelek"], ["Giriş kapıları", "İş ayakkabısı · eldiven · baret"],
           ["Kural", "Alan bazlı KKD zorunluluğu"], ["Alarm", "Panel · VMS popup · mobil"], ["Kimlik", "Kimliksiz"]],
 "sections": [
  S("Problem", ["Tesisin farklı alanları farklı KKD gerektiriyordu: üretim hollerinde baret ve yelek, depo koridorlarında yelek, bazı girişlerde iş ayakkabısı ve eldiven. İSG uzmanları sahayı turla denetliyor, ihlallerin büyük kısmı görülmeden geçiyordu. Denetimlerde gösterilecek sistematik bir kayıt yoktu."]),
  S("400 kamerada baret ve yelek", ["Tesisteki 400 kamera tek platforma bağlandı ve tamamında baret ve reflektörlü yelek denetimi çalıştırıldı. İhlal anında kamera, konum, zaman ve işaretli kanıt karesi ile panelde ve VMS ekranında popup alarm oluşur."],
    ["400 kamerada eşzamanlı baret ve yelek kontrolü", "VMS popup ve mobil bildirim", "Zaman damgalı ihlal arşivi", "Vardiya ve alan bazlı uyum raporu"],
    imgs=[["/img/vaka/kkd-depo.webp", "Depo koridoru · KKD tespiti ve VMS popup alarm"]]),
  S("Giriş kapılarında iş ayakkabısı ve eldiven", ["Üretim alanına açılan giriş kapılarındaki kameralarda kurallar genişletildi: kişinin baretli olup olmadığına ek olarak iş ayakkabısı (güvenlik ayakkabısı) ve eldiven kontrol edilir. Uygun olmayan girişler anında işaretlenir; istenirse turnike veya kapı kilidi ile entegre çalışır."],
    ["Girişte iş ayakkabısı kontrolü", "Girişte eldiven kontrolü", "Baret ile birlikte çoklu KKD kuralı", "Turnike / kapı entegrasyonuna hazır"],
    imgs=[["/img/vaka/kkd-giris.webp", "Giriş kapısı · uygun KKD (sol) ve iş ayakkabısı olmadan giriş uyarısı (orta, sağ)"]]),
  S("Alan bazlı kural yönetimi", ["Her kamera ve her bölge için ayrı KKD kuralı tanımlanır: hangi alanda hangi donanımın zorunlu olduğu panelden yönetilir. Böylece depo koridorunda yelek yeterliyken kaynak alanında yüz siperi, giriş kapısında iş ayakkabısı aranır; gereksiz alarm üretilmez."],
    rows=[["Alan", "Baret", "Yelek", "İş ayakkabısı", "Eldiven"], ["Üretim holü", "✓", "✓", "—", "—"], ["Depo koridoru", "—", "✓", "—", "—"], ["Giriş kapıları", "✓", "—", "✓", "✓"], ["Yükleme rampası", "✓", "✓", "✓", "—"]]),
  S("Sonuçlar", ["KKD denetimi turla yapılan örneklemeden tüm sahayı kapsayan sürekli bir sürece dönüştü."],
    ["400 kamerada 7/24 baret ve yelek denetimi", "Giriş kapılarında iş ayakkabısı ve eldiven kontrolü", "Her alan için ayrı KKD kuralı, gereksiz alarm yok", "İhlaller VMS ekranına kanıt kareli düşüyor", "İSG denetimleri için sistematik dijital kayıt"]),
 ],
 "faq": [{"q": "400 kamera tek sunucuda mı çalışıyor?", "a": "Donanım kamera sayısı ve modüllere göre boyutlandırılır; büyük kurulumlarda birden fazla edge sunucu tek panelde birleştirilir."},
         {"q": "Kişiler tanınıyor mu?", "a": "Hayır. KKD denetimi kimliksizdir; yalnızca donanımın varlığı kontrol edilir, yüz tanıma kullanılmaz."}]},
{"title": "Zone-based PPE monitoring on 400 cameras: hard hats, vests, safety shoes and gloves",
 "desc": "At a large production and warehousing site, hard-hat and vest monitoring went live on 400 cameras; safety-shoe and glove checks were added at entrance gates, with separate PPE rules per zone.",
 "intro": ["At a site with many halls, warehouse aisles and entrance gates, the HSE team couldn't check PPE compliance across the whole site at once. Hype Vision connected all 400 cameras to a single PPE platform and defined rules that check the equipment each zone requires."],
 "specs": [["Cameras", "400 existing IP cameras"], ["General areas", "Hard hat · hi-vis vest"], ["Entrance gates", "Safety shoes · gloves · hard hat"],
           ["Rules", "Zone-based PPE requirements"], ["Alerts", "Dashboard · VMS popup · mobile"], ["Identity", "Anonymous"]],
 "sections": [
  S("Problem", ["Different zones required different PPE: hard hat and vest in production halls, vest in warehouse aisles, safety shoes and gloves at some entrances. HSE staff inspected by walking rounds and most violations went unseen. There was no systematic record for audits."]),
  S("Hard hats and vests on 400 cameras", ["All 400 cameras were connected to one platform with hard-hat and hi-vis vest checks running on every camera. A violation creates a popup alert in the dashboard and VMS with camera, location, time and a marked evidence frame."],
    ["Concurrent hard-hat and vest checks on 400 cameras", "VMS popup and mobile alerts", "Time-stamped violation archive", "Compliance report by shift and zone"],
    imgs=[["/img/vaka/kkd-depo.webp", "Warehouse aisle · PPE detection and VMS popup alert"]]),
  S("Safety shoes and gloves at entrance gates", ["Rules were extended on cameras at gates leading into production: in addition to the hard hat, safety shoes and gloves are checked. Non-compliant entries are flagged instantly and can be integrated with turnstiles or door locks."],
    ["Safety-shoe check at entry", "Glove check at entry", "Multi-PPE rule together with hard hat", "Ready for turnstile / door integration"],
    imgs=[["/img/vaka/kkd-giris.webp", "Entrance gate · compliant PPE (left) and entry without safety shoes (middle, right)"]]),
  S("Zone-based rule management", ["A separate PPE rule is defined per camera and zone; which equipment is mandatory where is managed in the dashboard. A vest is enough in a warehouse aisle, a face shield is required in welding, safety shoes at the gate — no unnecessary alerts."],
    rows=[["Zone", "Hard hat", "Vest", "Safety shoes", "Gloves"], ["Production hall", "✓", "✓", "—", "—"], ["Warehouse aisle", "—", "✓", "—", "—"], ["Entrance gates", "✓", "—", "✓", "✓"], ["Loading dock", "✓", "✓", "✓", "—"]]),
  S("Results", ["PPE monitoring moved from sampled rounds to continuous coverage of the whole site."],
    ["24/7 hard-hat and vest monitoring on 400 cameras", "Safety-shoe and glove checks at entrance gates", "Separate PPE rules per zone, no unnecessary alerts", "Violations reach the VMS with evidence frames", "Systematic digital record for HSE audits"]),
 ],
 "faq": [{"q": "Do 400 cameras run on a single server?", "a": "Hardware is sized by camera count and modules; large deployments combine several edge servers in one dashboard."},
         {"q": "Are people identified?", "a": "No. PPE monitoring is anonymous; only the presence of equipment is checked and no face recognition is used."}]})

json.dump(D, open(CJ, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("ok")
