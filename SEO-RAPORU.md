# Hype Vision — SEO / GEO / AEO Final Raporu (2026-10-03)

## 1. Neler değişti?
- **Prerender düzeltmesi:** Netlify yeni sürümü hiç yayınlamamıştı. Canlıda her sayfa ana sayfanın başlığı ve canonical'ıyla dönüyordu, modül sayfaları da ana sayfaya yönleniyordu.
  - Şimdi 142 sayfanın her biri kendi başlığı, açıklaması, canonical'ı, hreflang'i ve JSON-LD'siyle statik HTML olarak üretiliyor.
  - İçerik JavaScript olmadan da okunabiliyor; bu, Google dışındaki AI crawler'ları için önemli.
- **Tek kaynak rota sistemi** (`src/seo/routes.ts`): Her sayfanın TR/EN/RU karşılığı tek yerde tanımlı. Prerender, sitemap, hreflang, dil değiştirici ve llms.txt buradan otomatik üretiliyor. Burada olmayan her URL gerçek 404 döner.
- **Veriyle yönetilen içerik** (`src/content/*`, `src/data/guides/*`):
  - 14 İngilizce ve 7 yeni Türkçe çözüm sayfası
  - 8 İngilizce ve 7 yeni Türkçe sektör sayfası
  - 4 hub sayfası
  - 11 İngilizce ve 10 yeni Türkçe teknik kaynak yazısı
  - Vaka çalışması sistemi, pilot, kamera değerlendirme ve iş ortaklığı sayfaları
- **Bileşen kiti** (`src/components/kit`): PageHero, Breadcrumbs, FaqList, CtaButton, CtaPanel, StickyCta (mobil), RelatedLinks, PilotProcess, ArchitectureDiagram, VideoDemo, LeadForm ve SmartLink (dil-farkındalıklı link).
- **Menü ve footer:** Dile göre yeniden düzenlendi; İngilizce menü yalnızca İngilizce sayfalara bağlanıyor.
- **Analytics:** `src/lib/events.ts` dosyası eklendi. Olaylar: `demo_request`, `pilot_request`, `camera_assessment`, `partner_request`, `contact_submit`, `video_play`, `video_complete`, `case_study_view`, `cta_click`. Mevcut GA4 ve çerez onayı kuralı korundu.
- **Performans:**
  - Ana JS paketi 305 KB'tan 228 KB'a indi (gzip).
  - Sadece sayfanın dili yükleniyor; /sunum ayrı parçaya bölündü.
  - Ölçülen CLS değerlerinin hepsi 0,06'nın altında; yatay taşma yok.
- **Netlify:** Prerender Chrome yüzünden düşerse repodaki hazır `dist/` yayınlanıyor, böylece deploy düşmüyor.
- **Marka adı:** Her yerde "Hype Vision" olarak tutarlı hale getirildi. Organization şemasına `alternateName: HypeVision` eklendi.

## 2. Yeni URL'ler
- **Hub sayfaları:**
  - `/endustriyel-goruntu-isleme` ↔ `/en/industrial-computer-vision`
  - `/cctv-yapay-zeka` ↔ `/en/cctv-ai-analytics`
- **Çözümler (EN):** `/en/solutions/` + ppe-detection, forklift-pedestrian-detection, restricted-area-monitoring, fall-detection, fire-smoke-detection, production-line-monitoring, product-counting, visual-quality-inspection, workforce-analytics, queue-analytics, people-counting, occupancy-analytics, object-tracking, anomaly-detection
- **Çözümler (TR, yeni):** `/yangin-duman-tespiti`, `/urun-sayimi`, `/kuyruk-analizi`, `/kisi-sayma`, `/yogunluk-analizi`, `/nesne-takibi`, `/anomali-tespiti`
  - Diğer Türkçe karşılıklar zaten mevcut olan modül sayfaları. Aynı aramada birbiriyle yarışmasınlar diye `/baret-kkd-tespiti` ve `/uretim-hatti-izleme` gibi kopya sayfalar açmadım.
- **Sektörler:**
  - EN: `/en/industries/` + manufacturing, logistics, retail, banking, restaurants, hospitality, construction, jewelry-manufacturing
  - TR: `/sektor/` + imalat, perakende, banka, restoran, otel, insaat, kuyumculuk. Lojistik için mevcut `/sektor/depo-lojistik-guvenlik` kullanılıyor.
- **İndeks sayfaları:** `/cozumler`, `/sektorler`, `/vaka-calismalari`, `/blog` ↔ `/en/solutions`, `/en/industries`, `/en/case-studies`, `/en/resources`
- **Dönüşüm sayfaları:** `/pilot`, `/kamera-degerlendirme`, `/is-ortakligi` ↔ `/en/pilot`, `/en/camera-assessment`, `/en/partners`
- **Vaka çalışmaları:** `/vaka-calismalari/<slug>` ↔ `/en/case-studies/<slug>`. Eski `/blog/<vaka>` adresleri 301 ile buraya yönleniyor.
- **Kaynaklar:** `/en/resources/<slug>` (11 yazı) ve `/blog/<slug>` (toplam 18 Türkçe rehber)
- **Diğer 301'ler:** `/goruntu-isleme` → `/endustriyel-goruntu-isleme`, `/en/blog` → `/en/resources`

## 3. Sitemap
- Adres: https://hypevisionlab.com/sitemap.xml
- Her build'de 142 URL ile otomatik üretiliyor; dil karşılıkları `xhtml:link` ile eklendi.
- `lastmod` yalnızca gerçek yayın tarihi olan sayfalarda (yazılar, vakalar) var.
- Sahte `changefreq` ve `priority` değerleri kaldırıldı.

## 4. robots.txt
- Her şeye izin veriyor; yalnızca `/sunum/` (TR/EN/RU) ve `/bayisunum/` engelli.
- Sitemap referansı ekli.
- AI crawler'larını (GPTBot, PerplexityBot, ClaudeBot, Google-Extended vb.) engelleyen kural yok.
- `/llms.txt` üretiliyor: şirket tanımı, hub, çözüm, sektör, kaynak ve vaka listesi. Sıralama garantisi olarak değil, keşfi kolaylaştıran bir ek olarak düşünülmeli.

## 5. Şema türleri
- **Ana sayfa:** Organization (mevcut; alternateName eklendi), WebSite, ProfessionalService, SoftwareApplication
- **Çözüm sayfaları:** Service + BreadcrumbList + FAQPage
- **Sektör ve hub sayfaları:** WebPage (+ItemList) + BreadcrumbList + FAQPage
- **Kaynak yazıları:** BlogPosting + BreadcrumbList + FAQPage
- **Vaka çalışmaları:** Article + BreadcrumbList
- **İndeks sayfaları:** CollectionPage + ItemList
- **VideoObject:** Henüz yok. Herkese açık, onaylı bir video eklenmeden bu şema kullanılmamalı (bkz. 8).

## 6. Ekipten alınması gereken gerçek bilgiler
Kodda `todo` alanlarında ve `TODO(Hype Vision)` yorumlarında işaretli:
- **Pilot:** Tipik süre, kamera sayısı aralığı ve ücretlendirme modeli (`src/content/shared.ts` → `PILOT_CONFIG`). Doldurulursa sayfada otomatik görünür.
- **Modül kapsamı:** Kuyruk analizi, nesne takibi ve anomali tespiti hazır ürün mü, yoksa proje bazlı mı?
- **Yangın modülü:** Sunumdaki "10x10 piksel" iddiası saha verisiyle doğrulanmalı.
- **İş ortaklığı:** White-label veya bayi programı var mı? Varsa koşulları. Doğrulanmadığı için yazmadım.
- **Sektör referansları:** Perakende, banka, restoran, otel, inşaat ve kuyumculuk için kamuya açık referans izni var mı? Şu an sayfalarda müşteri adı yok.
- **Plaka tanıma:** Ayrı bir sayfa açılsın mı? Mevcut sayfalarda "proje bazında değerlendirilir" yazıyor.
- **Sosyal profiller:** Organization `sameAs` alanında yalnızca Facebook ve Instagram var. LinkedIn şirket sayfası varsa eklenmeli; B2B için en önemli profil o.
- **Ekip / hakkımızda:** Kurucu ve mühendis isimleri, uzmanlıkları (E-E-A-T için).
- **Kamera karesi yükleme:** Kamera değerlendirme formunda güvenli dosya yükleme yok. Sahte upload koymadım; form gönderildikten sonra kareler ayrıca isteniyor.

## 7. Eksik vaka çalışması verileri
Her vaka için:
- Yazılı anonim yayın onayı
- Doğrulama yöntemi (sonuçlar hangi dönemde, nasıl ölçüldü?)
- Anonimleştirilmiş ekran görüntüsü veya video

Vakaya özel eksikler:
- **kalite-kontrol-fire-azaltma:** Kamera sayısı ve tipi, kurulum tipi
- **lojistik-palet-sayim-sapmasi:** Kurulum tipi
- **isg-kkd-ihlal-tespiti:** "VMS popup" entegrasyonunun hangi VMS ile yapıldığı

Not: Vakalardaki sayılar (−%52, −%31 vb.) sitede zaten yayınlanmış metinden alındı. Yeniden doğrulanmaları önerilir.

## 8. Hangi video hangi sayfaya?
Videolar şu an Google Drive'da ve gizli /sunum içinde; müşteri görüntüsü olabilecekleri için herkese açık sayfaya koymadım. Önerilen yol:
1. Müşteri onayı alın ve görüntüyü anonimleştirin (yüz ve logoları bulanıklaştırın).
2. Videoyu YouTube'a (açıklamalı) veya mp4 + poster olarak `public/videos/` altına yükleyin.
3. Bana iletin; `VideoDemo` bileşeni ve VideoObject şemasıyla eklerim.

Video → sayfa eşleşmesi:

| Video | Sayfa |
|---|---|
| İSG / KKD demosu | `/en/solutions/ppe-detection`, `/kkd-kontrol-kamera-sistemi`, `/baret-tespit-sistemi` |
| Yangın demoları | `/yangin-duman-tespiti`, `/en/solutions/fire-smoke-detection` |
| Rampa takibi (araç, personel, ürün sayımı) | `/urun-sayimi`, `/en/solutions/product-counting`, `/en/industries/logistics` |
| Tekstil dikim ve ütü-paketleme verimliliği | `/personel-verimlilik-analizi-kamera`, `/en/solutions/workforce-analytics`, `/sektor/tekstil` |
| MES / OEE | `/oee-takip-sistemi`, `/en/solutions/production-line-monitoring` |
| Kalite (ters/hatalı ürün) | `/kalite-kontrol-goruntu-isleme`, `/en/solutions/visual-quality-inspection` |

## 9. Google Search Console
1. Domain property olarak `hypevisionlab.com` ekleyin (DNS TXT doğrulaması).
2. Sitemaps → `sitemap.xml` gönderin.
3. URL Inspection ile şu sayfalar için "Request indexing" isteyin:
   - `/`
   - `/endustriyel-goruntu-isleme`
   - `/en/industrial-computer-vision`
   - `/en/cctv-ai-analytics`
   - `/cctv-yapay-zeka`
   - `/en/solutions/ppe-detection`
   - `/baret-tespit-sistemi`
   - `/en/`
4. 2–3 hafta sonra kontrol edin: Pages raporu ("Duplicate without user-selected canonical" kalmamalı), International targeting / hreflang hataları, Enhancements (Breadcrumb, FAQ).

## 10. Bing Webmaster Tools
1. "Import from Google Search Console" ile siteyi ekleyin.
2. Sitemap'i gönderin.
3. IndexNow'u açın; Bing, ChatGPT search ve Copilot kaynaklarını besler.
4. Site Scan çalıştırın.

## 11. İlk 30 günde yayınlanacak içerikler
1. **1. hafta:** Onaylı bir vaka videosu + VideoObject. LinkedIn şirket sayfası açın ve `sameAs`'e ekleyin.
2. **2. hafta:**
   - EN: "On-premise video analytics for banks"
   - TR: "Fabrikada yapay zeka kamera sistemi maliyeti neye bağlıdır?" (sayı vermeden, maliyet kalemleriyle)
3. **3. hafta:**
   - EN: "PPE detection in the UAE: heat, glare and outdoor sites"
   - TR: "Türkiye’de görüntü işleme firmaları nasıl karşılaştırılır" yazısının güncellemesi
4. **4. hafta:** Onaylı bir yeni vaka çalışması (EN+TR) ve "Hype Vision vs. classic machine vision integrators" karşılaştırması (rakip adı vermeden).

## 12. Takip edilecek 50 sorgu
**TR (25):**
- Firma / genel:
  - görüntü işleme firmaları
  - türkiye görüntü işleme firmaları
  - endüstriyel görüntü işleme
  - endüstriyel görüntü işleme firması
  - görüntü işleme
  - görüntü işleme nedir
  - yapay zeka görüntü işleme
  - fabrika yapay zeka kamera sistemi
- CCTV:
  - cctv yapay zeka analizi
  - mevcut kameralara yapay zeka
  - video analitiği nedir
  - rtsp nedir
  - onvif nedir
  - edge ai nedir
- İSG:
  - baret tespit sistemi
  - kkd tespit sistemi
  - forklift yaya tespit sistemi
  - yasaklı alan ihlal tespiti
  - düşme tespit sistemi
  - kamera ile yangın tespiti
- Üretim / operasyon:
  - üretim hattı görüntü işleme
  - görüntü işleme ile kalite kontrol
  - oee nasıl hesaplanır
  - kamera ile ürün sayımı
  - kuyruk analizi kamera

**EN (25):**
- Company / general:
  - computer vision company turkey
  - industrial computer vision turkey
  - ai video analytics turkey
  - manufacturing computer vision company
  - industrial computer vision
- CCTV / architecture:
  - existing cctv ai analytics
  - cctv ai analytics
  - edge ai cctv analytics
  - on-premise video analytics
  - factory video analytics
- Safety:
  - ai workplace safety
  - ppe detection using cctv
  - hard hat detection camera
  - forklift pedestrian detection
  - forklift safety computer vision
  - restricted area monitoring cctv
  - fall detection cctv
  - video fire smoke detection
- Production / operations:
  - ai quality inspection
  - computer vision manufacturing
  - production line monitoring ai
  - people counting existing cctv
  - queue analytics cctv
- Concepts:
  - what is video analytics
  - rtsp onvif explained

## 13. En yüksek öncelikli sayfalar
- **TR:** `/endustriyel-goruntu-isleme`, `/cctv-yapay-zeka`, `/baret-tespit-sistemi`, `/kkd-kontrol-kamera-sistemi`, `/forklift-yaya-guvenlik-sistemi`, `/kalite-kontrol-goruntu-isleme`, `/blog/goruntu-isleme-firmasi-secimi`
- **EN:** `/en/industrial-computer-vision`, `/en/cctv-ai-analytics`, `/en/solutions/ppe-detection`, `/en/solutions/forklift-pedestrian-detection`, `/en/industries/manufacturing`, `/en/partners`, `/en/camera-assessment`

## 14. Dönüşüm için optimize edilen sayfalar
- Her çözüm, sektör, hub, vaka ve kaynak sayfasında tek baskın CTA ("Kameralarınızı değerlendirelim" / "Evaluate your cameras"), mobilde sabit alt CTA ve sayfa sonu CTA paneli var.
- Formlar kısa tutuldu, bot tuzağı eklendi ve her gönderim GA4 olayı tetikliyor:
  - `/kamera-degerlendirme` ve `/en/camera-assessment` (lead magnet)
  - `/pilot` ve `/en/pilot`
  - `/is-ortakligi` ve `/en/partners`

## 15. Deployment öncesi manuel kontrol
1. Netlify'da son deploy'un "Published" olduğunu ve build log'unda prerender satırını görün. "UYARI: prerender basarisiz" yazıyorsa site yine yayına çıkar ama bana haber verin.
2. Canlıda kontrol edin:
   - `https://hypevisionlab.com/en/solutions/ppe-detection`: sayfa kaynağında başlık İngilizce olmalı.
   - `https://hypevisionlab.com/olmayan`: 404 dönmeli.
   - `https://hypevisionlab.com/goruntu-isleme`: 301 ile yönlenmeli.
3. Formlardan birer deneme gönderin. FormSubmit ilk gönderimde info@ adresine aktivasyon maili atabilir; onaylayın.
4. Çerez bannerında "Kabul et" dedikten sonra GA4 DebugView'da `camera_assessment` olayını görün.
5. Bu rapordaki 6. ve 7. maddelerdeki bilgileri ekipten toplayın.

## Bakım notu
- Yeni sayfa ya da yazı → `src/content` veya `src/data/guides` altına veri olarak ekleyin; rota, sitemap, hreflang ve llms.txt kendiliğinden güncellenir.
- Commit öncesi `npm run build:prerender` çalıştırın. QA hata bulursa (kırık link, başlık tekrarı, canonical, JSON-LD) build durur.
