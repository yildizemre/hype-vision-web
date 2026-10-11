"""Vaka: medikal ambalajda boş paket tespiti (endüstriyel kamera + aydınlatma). content.json'a TR+EN ekler."""
import json, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CJ = os.path.join(ROOT, "content.json")
D = json.load(open(CJ, encoding="utf-8"))
PATH = "/vaka-calismalari/medikal-ambalaj-bos-paket-tespiti"
EN_PATH = "/en/case-studies/medical-packaging-empty-pack-detection"
S = lambda h, p=(), li=(), imgs=(): {"h": h, "p": list(p), "li": list(li), "cards": [], "rows": [], "imgs": list(imgs)}
IMGS_TR = [["/img/vaka/med-ok.webp", "Dolu paket — PRODUCT OK, geçti"], ["/img/vaka/med-empty.webp", "Boş paket — EMPTY, hattan ayrıldı"]]
IMGS_EN = [["/img/vaka/med-ok.webp", "Filled pack — PRODUCT OK, passed"], ["/img/vaka/med-empty.webp", "Empty pack — EMPTY, rejected"]]

tr = {"path": PATH, "date": "2026-10-12",
 "title": "Medikal ambalaj hattında boş paket tespiti: müşteriye giden hatalı paket %94 azaldı",
 "desc": "Steril medikal sarf malzeme hattında endüstriyel kamera ve kontrollü aydınlatma ile her paket tek tek kontrol edildi; yapay zekâ modeli %98,6 doğrulukla boş paketi ayırdı.",
 "intro": ["Steril tek kullanımlık medikal ürün paketleyen bir üreticinin hattında, içi boş veya eksik dolmuş paketlerin müşteriye ulaşması hem itibar hem iade maliyeti yaratıyordu. Hype Vision, hatta endüstriyel kamera ve kontrollü aydınlatma kurarak her paketi yapay zekâ ile tek tek kontrol eden bir istasyon devreye aldı."],
 "specs": [["Kamera", "Hikrobot MV-CT1CG0089 · 8.9 MP, global shutter, GigE"], ["Aydınlatma", "Difüz arka aydınlatma (backlight)"], ["Sınıflar", "PRODUCT OK · EMPTY"],
           ["Model doğruluğu", "%98,6 (saha doğrulaması)"], ["Karar süresi", "< 100 ms / paket"], ["Entegrasyon", "Reject sinyali (dijital I/O) + panel"]],
 "sections": [
  S("Problem", ["Paketleme hattında ambalajlar yüksek hızda kapatılıyor ve operatör yalnızca örnekleme ile kontrol yapabiliyordu. Opak olmayan ama baskılı steril ambalajda içeriğin olup olmadığı çıplak gözle hızla ayırt edilemiyordu.",
                "Sonuç: boş veya eksik paketler zaman zaman sevkiyata karışıyor, müşteri şikâyeti, iade ve yeniden paketleme maliyeti oluşuyordu."]),
  S("Neden endüstriyel kamera ve ışık?", ["Bu senaryoda belirleyici olan model değil, görüntünün kendisiydi. Standart CCTV açısı ve ortam ışığı ambalaj baskısını öne çıkarıyor, içeriği gizliyordu.",
     "Paketin altına difüz arka aydınlatma yerleştirildi. Işık ambalajdan geçerek içerideki ürünün silüetini görünür hale getirdi; baskı ve yansımalar bastırıldı. Görüntü 8.9 MP global shutter endüstriyel kamera ile hareket bulanıklığı olmadan alındı."],
    ["Global shutter: hızlı akan pakette bulanıklık yok", "Arka aydınlatma: içerik silüeti net, baskı etkisi düşük", "Sabit çalışma mesafesi ve lens: her karede aynı ölçek", "PoE + IP67 gövde: hat ortamına uygun kurulum"]),
  S("Çözüm", ["Hype Vision, saha görüntüleriyle eğitilen bir sınıflandırma modeli ile her paketi iki sınıfa ayırır: PRODUCT OK ve EMPTY. Karar, paket kamera alanına girdiği anda verilir ve ekranda güven skoru ile gösterilir.",
              "EMPTY kararında hat kontrolcüsüne dijital çıkış ile reject sinyali gönderilir, paket otomatik olarak ayrılır. Her karar zaman damgalı görüntüsüyle kayıt altına alınır; vardiya sonunda geçen/ayrılan paket raporu panelde hazırdır."],
    imgs=IMGS_TR),
  S("Kurulum süreci", [], ["Keşif ve numune görüntü toplama: 2 gün", "Kamera, lens ve aydınlatma montajı: 1 gün", "Model eğitimi ve saha kalibrasyonu: 5 iş günü", "Paralel çalışma (manuel kontrolle karşılaştırma): 2 hafta"]),
  S("Sonuçlar", ["Paralel çalışma döneminde sistem kararları manuel kontrol ile karşılaştırıldı ve ardından tam otomatik moda geçildi."],
    ["Yapay zekâ modeli doğruluğu: %98,6", "Müşteriye ulaşan boş/eksik paket: %94 azaldı", "Manuel son kontrol yükü: %70 azaldı", "Hat hızında %100 paket kontrolü (örnekleme yerine)", "Her ayrılan paket için görüntülü kanıt kaydı"]),
 ],
 "faq": [{"q": "Neden mevcut CCTV kamerası yerine endüstriyel kamera kullanıldı?", "a": "Paket içeriği ancak kontrollü aydınlatma ve sabit optikle güvenilir şekilde görünür hale geliyordu. İSG ve operasyon senaryolarında mevcut kameralar yeterlidir; ürün kalite kontrolünde ise çoğu zaman endüstriyel kamera ve ışık önerilir."},
         {"q": "Farklı ambalaj ölçülerinde çalışır mı?", "a": "Evet. Yeni ölçü veya baskı için kısa bir numune toplama ve kalibrasyon yeterlidir; aynı istasyon birden fazla ürün reçetesi ile çalışabilir."}],
 "links": []}
en = {"path": EN_PATH, "date": "2026-10-12",
 "title": "Empty-pack detection on a medical packaging line: defective packs reaching customers down 94%",
 "desc": "On a sterile medical consumables line, an industrial camera and controlled lighting inspected every pack; the AI model separated empty packs with 98.6% accuracy.",
 "intro": ["A manufacturer packing sterile single-use medical products was seeing empty or under-filled packs reach customers, causing complaints and return costs. Hype Vision deployed an inspection station with an industrial camera and controlled lighting that checks every pack with AI."],
 "specs": [["Camera", "Hikrobot MV-CT1CG0089 · 8.9 MP, global shutter, GigE"], ["Lighting", "Diffuse backlight"], ["Classes", "PRODUCT OK · EMPTY"],
           ["Model accuracy", "98.6% (field validation)"], ["Decision time", "< 100 ms / pack"], ["Integration", "Reject signal (digital I/O) + dashboard"]],
 "sections": [
  S("Problem", ["Packs were sealed at high speed and operators could only spot-check. On printed sterile packaging, it was hard to tell at a glance whether the product was inside.",
                "Empty or incomplete packs occasionally slipped into shipments, leading to complaints, returns and re-packing costs."]),
  S("Why an industrial camera and lighting?", ["The deciding factor was the image, not the model. A standard CCTV angle and ambient light emphasised the print and hid the content.",
     "A diffuse backlight was placed under the pack. Light passing through the packaging revealed the product's silhouette while suppressing print and reflections. Images were captured with an 8.9 MP global-shutter industrial camera without motion blur."],
    ["Global shutter: no blur on fast-moving packs", "Backlight: clear content silhouette, minimal print effect", "Fixed working distance and lens: same scale in every frame", "PoE + IP67 housing: suited to the line environment"]),
  S("Solution", ["A classification model trained on site footage sorts every pack into PRODUCT OK or EMPTY. The decision is made as the pack enters the field of view and shown with a confidence score.",
                 "On EMPTY, a reject signal is sent to the line controller via digital output and the pack is removed automatically. Every decision is logged with a time-stamped image; a pass/reject report per shift is ready in the dashboard."],
    imgs=IMGS_EN),
  S("Deployment", [], ["Discovery and sample image collection: 2 days", "Camera, lens and lighting installation: 1 day", "Model training and field calibration: 5 working days", "Parallel run against manual inspection: 2 weeks"]),
  S("Results", ["During the parallel run, system decisions were compared with manual inspection before switching to fully automatic mode."],
    ["AI model accuracy: 98.6%", "Empty/incomplete packs reaching customers: down 94%", "Manual final-inspection workload: down 70%", "100% inspection at line speed (instead of sampling)", "Image evidence for every rejected pack"]),
 ],
 "faq": [{"q": "Why an industrial camera instead of existing CCTV?", "a": "Pack content only became reliably visible with controlled lighting and fixed optics. Existing cameras are enough for safety and operations use cases; product quality inspection usually calls for an industrial camera and lighting."},
         {"q": "Does it work with different pack sizes?", "a": "Yes. A new size or print needs only a short sample collection and calibration; one station can run several product recipes."}],
 "links": []}
D["pages"] = [p for p in D["pages"] if p["path"] != PATH] + [tr]
D.setdefault("en", {})[PATH] = en
json.dump(D, open(CJ, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("ok")
