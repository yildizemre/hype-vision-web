"""Vaka: maden/kimya tesisinde harman stok alanı — ürün tipi bölge kontrolü, forklift süreleri, forklift üstünde KKD. 200+ kamera, on-premise, 20+ modül."""
import json, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CJ = os.path.join(ROOT, "content.json")
D = json.load(open(CJ, encoding="utf-8"))
PATH = "/vaka-calismalari/maden-tesisi-harman-stok-forklift-kkd"
EN_PATH = "/en/case-studies/mining-plant-stockyard-forklift-ppe"
S = lambda h, p=(), li=(), imgs=(), rows=(): {"h": h, "p": list(p), "li": list(li), "cards": [], "rows": [list(r) for r in rows], "imgs": list(imgs)}

tr = {"path": PATH, "date": "2026-10-12",
 "title": "Maden tesisinde 200+ kamera, 20+ modül: harman stokta ürün tipi, forklift süresi ve KKD tek platformda",
 "desc": "Büyük bir maden ve kimyasal üretim tesisinde 200'den fazla mevcut kamera on-premise olarak yapay zekâya bağlandı; harman stokta ürün tipi bölgeleri, forklift operasyon süreleri ve forklift üstünde baret kullanımı 7/24 izleniyor.",
 "intro": ["Big-bag ve torba ürünlerin harmanlanıp stoklandığı geniş bir maden ve kimya tesisinde stok alanı, forklift trafiği ve İSG kuralları birkaç kişinin gözüne emanetti. Hype Vision, tesisteki 200'den fazla mevcut kamerayı tamamen tesis içinde (on-premise) çalışan tek bir platforma bağladı ve 20'den fazla analiz modülünü aynı anda devreye aldı."],
 "specs": [["Kamera", "200+ mevcut IP kamera"], ["Mimari", "On-premise · veri tesisten çıkmaz"], ["Modül", "20+ eşzamanlı analiz modülü"],
           ["Harman stok", "Ürün tipi bölgeleri (type 1/2/3)"], ["Forklift", "Operasyon ve bekleme süreleri"], ["KKD", "Forklift üstünde ve sahada baret"]],
 "sections": [
  S("Problem", ["Harman stok alanında farklı ürün tiplerinin kendi bölgelerinde tutulması, karışmaması ve stok seviyelerinin bilinmesi gerekiyordu. Kontrol, vardiya içinde yapılan turlara ve el ile tutulan kayıtlara dayanıyordu.",
                "Aynı alanda yoğun forklift trafiği vardı. Forkliftlerin ne kadar süre çalıştığı, beklediği ve hangi bölgede yoğunlaştığı ölçülmüyordu. Forklift operatörlerinin ve sahadaki personelin baret kullanımı da sürekli denetlenemiyordu."]),
  S("Harman stok: ürün tipi kontrolü", ["Her stok bölgesi kamera görüntüsünde ayrı bir alan olarak tanımlandı (type 1, type 2, type 3). Model, big-bag'leri tespit edip bulundukları bölgeye göre sınıflandırır; yanlış bölgeye bırakılan ürün veya dolan bölge anında bildirilir."],
    ["Bölge bazlı ürün tipi doğrulama", "Yanlış bölgeye bırakılan ürün için uyarı", "Bölge doluluk durumu ve stok hareketi", "Zaman damgalı görüntü ile stok kaydı"],
    imgs=[["/img/vaka/harman-1.webp", "Harman stok — ürün tipi bölgeleri ve forklift operatöründe baret kontrolü"]]),
  S("Forklift süreleri ve KKD", ["Forkliftler tespit edilip takip edilerek aktif çalışma, bekleme ve bölgelerde geçirilen süreler ölçülür. Forklift üzerindeki operatör ve sahadaki personel için baret kontrolü yapılır; ihlal anında kanıt kareli bildirim üretilir."],
    ["Forklift aktif çalışma ve bekleme süresi", "Bölge bazlı forklift yoğunluğu", "Forklift operatöründe baret kontrolü", "Sahada baretsiz personel tespiti"],
    imgs=[["/img/vaka/harman-2.webp", "Stok sahası — forklift operatörü ve personelde baret ihlali"], ["/img/vaka/harman-3.webp", "Harman alanı — birden fazla kişide baret ihlali, kimliksiz ID ile takip"]]),
  S("200+ kamera, on-premise mimari", ["Tüm analiz tesis içindeki sunucularda çalışır; görüntü tesisten çıkmaz. Tek bir kamera birden fazla modülü besler — aynı görüntüden hem stok, hem forklift, hem KKD analizi yapılır.",
     "20'den fazla modül aynı platformda çalışır ve sonuçlar tek panelde toplanır. Kişiler kimliklendirilmez; takip, kimliksiz ID'lerle yapılır."]),
  S("Sonuçlar", ["Tesis genelinde denetim, tur ve formlara bağlı olmaktan çıkıp sürekli ve ölçülebilir hale geldi."],
    ["200+ kameranın tamamı tek platformda, on-premise", "20+ modül eşzamanlı çalışıyor", "Harman stokta ürün tipi karışıklığı anında görünür", "Forklift kullanım süreleri ölçülebilir, planlama veriyle yapılıyor",
     "Forklift üstünde ve sahada baret uyumu 7/24 kayıt altında", "İSG ve operasyon ekipleri aynı veriden çalışıyor"]),
 ],
 "faq": [{"q": "200'den fazla kamera için ne kadar donanım gerekiyor?", "a": "Donanım; kamera sayısına, modüllere ve analiz sıklığına göre keşifte boyutlandırılır. Aynı kamera birden fazla modülü beslediği için kamera başına ayrı cihaz gerekmez."},
         {"q": "Görüntü tesis dışına çıkıyor mu?", "a": "Hayır. Kurulum on-premise'dir; analiz tesis içindeki sunucularda yapılır, panele yalnızca olay ve metrik verisi aktarılır."}],
 "links": []}
en = {"path": EN_PATH, "date": "2026-10-12",
 "title": "200+ cameras, 20+ modules at a mining plant: product types, forklift time and PPE on one platform",
 "desc": "At a large mining and chemical plant, more than 200 existing cameras were connected to AI on-premise; product-type zones in the stockyard, forklift operating times and hard-hat use on forklifts are monitored 24/7.",
 "intro": ["At a large mining and chemical plant where big-bag products are blended and stocked, the stockyard, forklift traffic and HSE rules depended on a few people's eyes. Hype Vision connected more than 200 existing cameras to a single fully on-premise platform and deployed over 20 analytics modules at once."],
 "specs": [["Cameras", "200+ existing IP cameras"], ["Architecture", "On-premise · video never leaves the site"], ["Modules", "20+ concurrent analytics modules"],
           ["Stockyard", "Product-type zones (type 1/2/3)"], ["Forklifts", "Operating and waiting times"], ["PPE", "Hard hats on forklifts and on site"]],
 "sections": [
  S("Problem", ["Different product types had to be kept in their own stockyard zones, without mixing, and stock levels had to be known. Checks relied on shift rounds and manual records.",
                "The same area had heavy forklift traffic. How long forklifts worked, waited and where they concentrated was not measured, and hard-hat use by drivers and staff could not be checked continuously."]),
  S("Stockyard: product-type control", ["Each stock zone was defined as a separate area in the camera view (type 1, type 2, type 3). The model detects big-bags and classifies them by zone; a product dropped in the wrong zone or a full zone is reported immediately."],
    ["Zone-based product-type verification", "Alert for products placed in the wrong zone", "Zone occupancy and stock movement", "Stock records with time-stamped images"],
    imgs=[["/img/vaka/harman-1.webp", "Stockyard — product-type zones and hard-hat check on the forklift driver"]]),
  S("Forklift time and PPE", ["Forklifts are detected and tracked to measure active work, waiting and time spent in each zone. Hard hats are checked for drivers and staff on the floor; violations trigger alerts with evidence frames."],
    ["Forklift active and waiting time", "Forklift density by zone", "Hard-hat check on forklift drivers", "Detection of staff without hard hats"],
    imgs=[["/img/vaka/harman-2.webp", "Stock area — hard-hat violation on driver and staff"], ["/img/vaka/harman-3.webp", "Blending area — multiple hard-hat violations, tracked with anonymous IDs"]]),
  S("200+ cameras, on-premise", ["All analysis runs on servers inside the plant; video never leaves the site. One camera feeds several modules — stock, forklift and PPE analytics from the same image.",
     "More than 20 modules run on the same platform and results land in one dashboard. Nobody is identified; tracking uses anonymous IDs."]),
  S("Results", ["Plant-wide inspection moved from rounds and forms to continuous, measurable monitoring."],
    ["All 200+ cameras on one on-premise platform", "20+ modules running concurrently", "Product-type mix-ups in the stockyard visible instantly", "Forklift usage measurable, planning driven by data",
     "Hard-hat compliance on forklifts and on site logged 24/7", "HSE and operations teams work from the same data"]),
 ],
 "faq": [{"q": "How much hardware do 200+ cameras need?", "a": "Hardware is sized during discovery based on camera count, modules and analysis frequency. Since one camera feeds several modules, no device per camera is needed."},
         {"q": "Does video leave the plant?", "a": "No. The deployment is on-premise; analysis runs on servers inside the plant and only event and metric data reach the dashboard."}],
 "links": []}
D["pages"] = [p for p in D["pages"] if p["path"] != PATH] + [tr]
D.setdefault("en", {})[PATH] = en
json.dump(D, open(CJ, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("ok")
