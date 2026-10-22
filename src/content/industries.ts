import type { Industry } from './types';

export const INDUSTRIES: Industry[] = [
  {
    id: 'manufacturing',
    urls: { tr: '/sektor/imalat', en: '/en/industries/manufacturing' },
    en: {
      name: 'Manufacturing',
      metaTitle: 'Computer Vision for Manufacturing | Safety, Quality & Production Analytics — Hype Vision',
      metaDescription:
        'Computer vision use cases for manufacturing plants: PPE and danger zones, forklift safety, production monitoring, downtime, product counting and visual quality inspection using existing cameras.',
      h1: 'Computer vision for manufacturing plants',
      lead: 'One video-analytics layer on existing cameras for workplace safety, production visibility and quality.',
      context: [
        'Manufacturing plants usually already have dozens of CCTV cameras installed for security. Those cameras also see the processes that HSE, production and quality teams need data about: who enters a danger zone, when a line stops, how long a station waits, which units leave with a defect.',
        'Hype Vision analyses those streams on-premise and turns them into events and metrics for each team, starting with the use case that has the clearest business case and expanding from there.',
      ],
      useCases: [
        { solution: 'ppe-detection', why: 'Continuous PPE compliance at hall entrances and machine areas.' },
        { solution: 'restricted-area-monitoring', why: 'Alerts for entries into robot cells, press areas and electrical rooms.' },
        { solution: 'forklift-pedestrian-detection', why: 'Near-miss visibility where internal logistics meets operators.' },
        { solution: 'fall-detection', why: 'Worker-down alerts for night shifts and remote areas.' },
        { solution: 'production-line-monitoring', why: 'Running time, micro-stops and cycle times — even on machines without PLC data.' },
        { solution: 'product-counting', why: 'Output per line and shift without manual tallies.' },
        { solution: 'visual-quality-inspection', why: 'Defect detection at line speed with an image record.' },
        { solution: 'workforce-analytics', why: 'Station occupancy and bottlenecks in labour-intensive processes.' },
      ],
      considerations: [
        'Safety and production use cases usually work with existing security cameras; quality inspection often needs dedicated cameras and lighting.',
        'Most plants prefer on-premise processing so video never leaves the site.',
        'Start with 1–2 use cases and a defined set of cameras; expand after validation.',
      ],
      faq: [
        { q: 'Which use case should a plant start with?', a: 'The one with a clear owner and measurable impact — often PPE or danger-zone compliance for HSE, or downtime visibility for production. The discovery call is used to choose.' },
        { q: 'Can one system serve HSE, production and quality?', a: 'Yes. The same cameras and edge hardware can run several analytics, with separate dashboards and alerts for each team.' },
      ],
    },
    tr: {
      name: 'İmalat ve Fabrikalar',
      metaTitle: 'Fabrikalar için Görüntü İşleme | İSG, Kalite ve Üretim Analitiği — Hype Vision',
      metaDescription:
        'Üretim tesisleri için görüntü işleme: KKD ve tehlikeli alan, forklift güvenliği, hat izleme, duruş analizi, ürün sayımı ve görsel kalite kontrol; mevcut kameralarla.',
      h1: 'Fabrikalar için görüntü işleme ve yapay zeka',
      lead: 'Mevcut kameralar üzerinde tek bir video analitiği katmanı: iş güvenliği, üretim görünürlüğü ve kalite.',
      context: [
        'Üretim tesislerinde güvenlik amacıyla kurulmuş onlarca CCTV kamera zaten bulunur. Bu kameralar İSG, üretim ve kalite ekiplerinin ihtiyaç duyduğu süreçleri de görür: tehlikeli bölgeye kim giriyor, hat ne zaman duruyor, istasyon ne kadar bekliyor, hangi ürün kusurla çıkıyor.',
        'Hype Vision bu akışları tesis içinde analiz ederek her ekip için olay ve metriğe dönüştürür. İş gerekçesi en net olan kullanım senaryosuyla başlanır, sonra genişletilir.',
      ],
      useCases: [
        { solution: 'ppe-detection', why: 'Hol girişlerinde ve makine alanlarında sürekli KKD uyumu.' },
        { solution: 'restricted-area-monitoring', why: 'Robot hücresi, pres alanı ve elektrik odalarına girişte alarm.' },
        { solution: 'forklift-pedestrian-detection', why: 'İç lojistiğin operatörle kesiştiği noktalarda ramak kala görünürlüğü.' },
        { solution: 'fall-detection', why: 'Gece vardiyası ve uzak alanlarda düşme alarmı.' },
        { solution: 'production-line-monitoring', why: 'PLC verisi olmayan makinelerde bile çalışma süresi, mikro duruş ve çevrim süresi.' },
        { solution: 'product-counting', why: 'Elle sayım olmadan hat ve vardiya bazında çıktı.' },
        { solution: 'visual-quality-inspection', why: 'Hat hızında kusur tespiti ve görüntü kaydı.' },
        { solution: 'workforce-analytics', why: 'Emek yoğun süreçlerde istasyon doluluğu ve darboğazlar.' },
      ],
      considerations: [
        'Güvenlik ve üretim senaryoları genellikle mevcut güvenlik kameralarıyla çalışır; kalite kontrol çoğu zaman özel kamera ve aydınlatma gerektirir.',
        'Çoğu tesis görüntünün dışarı çıkmaması için tesis içi (edge) işlemeyi tercih eder.',
        '1–2 kullanım senaryosu ve tanımlı kamera setiyle başlayın; doğrulamadan sonra genişletin.',
      ],
      faq: [
        { q: 'Bir fabrika hangi senaryoyla başlamalı?', a: 'Sahibi net ve etkisi ölçülebilir olanla: İSG için çoğu zaman KKD veya tehlikeli alan uyumu, üretim için duruş görünürlüğü. Seçim keşif görüşmesinde yapılır.' },
        { q: 'Tek sistem İSG, üretim ve kaliteye hizmet edebilir mi?', a: 'Evet. Aynı kameralar ve edge donanım birden fazla analitiği çalıştırabilir; her ekip için ayrı panel ve alarm tanımlanır.' },
      ],
    },
  },
  {
    id: 'logistics',
    urls: { tr: '/sektor/depo-lojistik-guvenlik', en: '/en/industries/logistics' },
    trExisting: true,
    en: {
      name: 'Logistics & Warehousing',
      metaTitle: 'Video Analytics for Warehouses & Logistics | Forklift Safety, Docks, Counting — Hype Vision',
      metaDescription:
        'Computer vision for warehouses and distribution centres: forklift–pedestrian safety, dock and truck tracking, pallet counting, PPE and restricted zones using existing CCTV.',
      h1: 'Video analytics for warehouses and logistics',
      lead: 'Safer aisles and docks, and measurable flow from gate to shipment — using the cameras that already cover your site.',
      context: [
        'Warehouses combine fast-moving vehicles, people on foot and time-critical processes. Most of the risk and most of the lost time sit in a few places: crossings, docks and staging areas.',
        'Camera analytics makes those places measurable — near-misses, dwell times, counts — without tags on vehicles or people.',
      ],
      useCases: [
        { solution: 'forklift-pedestrian-detection', why: 'Near-miss detection at crossings, aisle ends and dock doors.' },
        { solution: 'object-tracking', why: 'Truck arrival, dock occupancy and waiting times.' },
        { solution: 'product-counting', why: 'Pallet and box counts during loading and unloading.' },
        { solution: 'ppe-detection', why: 'Vest and PPE compliance in vehicle areas.' },
        { solution: 'restricted-area-monitoring', why: 'Alerts for entries into racking or vehicle-only zones.' },
        { solution: 'fire-smoke-detection', why: 'Visual early warning in high-bay storage and yards.' },
      ],
      considerations: ['Wide-angle cameras over crossings and docks are usually the best starting point.', 'Counts and dock events can be pushed to WMS/TMS via API.'],
      faq: [{ q: 'Do vehicles or people need tags?', a: 'No. Detection is purely camera-based.' }],
    },
  },
  {
    id: 'retail',
    urls: { tr: '/sektor/perakende', en: '/en/industries/retail' },
    todo: ['Perakende sektöründe referans/pilot olup olmadığı ekip tarafından teyit edilmeli'],
    en: {
      name: 'Retail',
      metaTitle: 'Retail Video Analytics with Existing CCTV | Footfall, Queues, Occupancy — Hype Vision',
      metaDescription:
        'Use existing store CCTV for people counting, queue alerts, occupancy and dwell-time analytics, plus back-of-house safety — processed on-premise without identifying shoppers.',
      h1: 'Retail video analytics on existing CCTV',
      lead: 'Footfall, queues and space usage from the cameras already in your stores — without identifying shoppers.',
      context: [
        'Store cameras are installed for loss prevention, but they also capture how customers move through the store and when service points are overloaded.',
        'Analytics turns this into footfall, queue and occupancy data for operations, and adds safety monitoring for back-of-house areas.',
      ],
      useCases: [
        { solution: 'people-counting', why: 'Entrance counts as the basis for conversion and staffing.' },
        { solution: 'queue-analytics', why: 'Alerts when checkout queues exceed a threshold.' },
        { solution: 'occupancy-analytics', why: 'Heatmaps and dwell time for layout and promotions.' },
        { solution: 'forklift-pedestrian-detection', why: 'Safety in stockrooms and receiving areas.' },
        { solution: 'fall-detection', why: 'Alerts for falls in aisles and public areas.' },
      ],
      considerations: ['Shopper privacy: counting and occupancy do not require identification.', 'Entrance counting may need a camera angle different from security cameras.'],
      faq: [{ q: 'Does it identify customers?', a: 'No. It counts and measures movement anonymously.' }],
    },
    tr: {
      name: 'Perakende',
      metaTitle: 'Perakende için Kamera Analitiği | Ziyaretçi, Kuyruk, Yoğunluk — Hype Vision',
      metaDescription:
        'Mağaza CCTV kameralarıyla kişi sayma, kuyruk alarmı, yoğunluk ve kalma süresi analizi; arka alan güvenliği. Tesis içinde işleme, müşteri kimliği tespiti yok.',
      h1: 'Perakende için mevcut CCTV ile video analitiği',
      lead: 'Mağazanızdaki kameralardan ziyaretçi, kuyruk ve alan kullanımı verisi; müşteri kimliği tespit edilmeden.',
      context: [
        'Mağaza kameraları kayıp önleme için kurulur, ancak müşterilerin mağaza içinde nasıl dolaştığını ve hizmet noktalarının ne zaman sıkıştığını da görür.',
        'Analitik bunu operasyon için ziyaretçi, kuyruk ve doluluk verisine dönüştürür; arka alanlar için güvenlik izlemesi ekler.',
      ],
      useCases: [
        { solution: 'people-counting', why: 'Dönüşüm ve personel planlaması için giriş sayımı.' },
        { solution: 'queue-analytics', why: 'Kasa kuyruğu eşiği aştığında alarm.' },
        { solution: 'occupancy-analytics', why: 'Yerleşim ve kampanyalar için ısı haritası ve kalma süresi.' },
        { solution: 'forklift-pedestrian-detection', why: 'Depo ve mal kabul alanlarında güvenlik.' },
        { solution: 'fall-detection', why: 'Reyon ve ortak alanlarda düşme alarmı.' },
      ],
      considerations: ['Müşteri mahremiyeti: sayım ve doluluk için kimlik tespiti gerekmez.', 'Giriş sayımı, güvenlik kameralarından farklı bir açı gerektirebilir.'],
      faq: [{ q: 'Müşterileri tanıyor mu?', a: 'Hayır. Sayım ve hareket ölçümü anonim yapılır.' }],
    },
  },
  {
    id: 'banking',
    urls: { tr: '/sektor/banka', en: '/en/industries/banking' },
    todo: ['Bankacılık projesi/demosunun (Desktop/banka paneli) kamuya açık referans olarak kullanılıp kullanılamayacağı teyit edilmeli'],
    en: {
      name: 'Banking',
      metaTitle: 'CCTV Video Analytics for Bank Branches | Queues, Occupancy, Security — Hype Vision',
      metaDescription:
        'Video analytics for bank branches on existing CCTV: queue length and waiting time, occupancy, after-hours and restricted-room alerts, procedure compliance — processed on-premise.',
      h1: 'Video analytics for bank branches',
      lead: 'Service-level visibility and security events from branch cameras, with video kept on-premise.',
      context: [
        'Branch networks have hundreds of cameras recorded for security, but service quality is still measured with surveys and ticket systems that do not show how long people actually wait.',
        'Analytics on the same cameras adds queue, occupancy and restricted-area events to the existing security setup.',
      ],
      useCases: [
        { solution: 'queue-analytics', why: 'Queue length and waiting time per counter area.' },
        { solution: 'people-counting', why: 'Branch footfall by hour for staffing.' },
        { solution: 'occupancy-analytics', why: 'Lobby occupancy and dwell time.' },
        { solution: 'restricted-area-monitoring', why: 'Alerts for vault, cash-room and after-hours access.' },
        { solution: 'anomaly-detection', why: 'Flags for deviations in cash-handling procedures.' },
      ],
      considerations: ['Banks typically require on-premise processing and strict access control.', 'Multi-branch dashboards aggregate events centrally without moving raw video.'],
      faq: [{ q: 'Can video stay inside the bank network?', a: 'Yes. On-premise deployment processes video locally; only event data is shared with the central dashboard.' }],
    },
    tr: {
      name: 'Bankacılık',
      metaTitle: 'Banka Şubeleri için Kamera Analitiği | Kuyruk, Yoğunluk, Güvenlik — Hype Vision',
      metaDescription:
        'Mevcut CCTV ile banka şubelerinde kuyruk ve bekleme süresi, yoğunluk, mesai dışı ve kısıtlı oda alarmları, prosedür uyumu; görüntü tesis içinde işlenir.',
      h1: 'Banka şubeleri için video analitiği',
      lead: 'Şube kameralarından hizmet seviyesi görünürlüğü ve güvenlik olayları; görüntü kurum içinde kalır.',
      context: [
        'Şube ağlarında güvenlik için kayıt alan yüzlerce kamera vardır; ancak hizmet kalitesi hâlâ anket ve sıramatik verisiyle ölçülür, müşterinin gerçekte ne kadar beklediği görünmez.',
        'Aynı kameralar üzerindeki analitik, mevcut güvenlik yapısına kuyruk, doluluk ve kısıtlı alan olaylarını ekler.',
      ],
      useCases: [
        { solution: 'queue-analytics', why: 'Gişe alanı bazında kuyruk uzunluğu ve bekleme süresi.' },
        { solution: 'people-counting', why: 'Personel planlaması için saatlik şube ziyaretçi sayısı.' },
        { solution: 'occupancy-analytics', why: 'Lobi doluluğu ve kalma süresi.' },
        { solution: 'restricted-area-monitoring', why: 'Kasa dairesi, para odası ve mesai dışı erişim alarmı.' },
        { solution: 'anomaly-detection', why: 'Nakit işlem prosedürlerindeki sapmalar için işaretleme.' },
      ],
      considerations: ['Bankalar genellikle tesis içi işleme ve sıkı erişim kontrolü ister.', 'Çok şubeli paneller ham görüntüyü taşımadan olayları merkezde toplar.'],
      faq: [{ q: 'Görüntü banka ağı içinde kalabilir mi?', a: 'Evet. Tesis içi kurulumda görüntü yerelde işlenir; merkezi panelle yalnızca olay verisi paylaşılır.' }],
    },
  },
  {
    id: 'restaurants',
    urls: { tr: '/sektor/restoran', en: '/en/industries/restaurants' },
    todo: ['Restoran zinciri demosunun (Köfteci Yusuf) referans olarak isimle kullanılabilmesi için müşteri onayı gerekir'],
    en: {
      name: 'Restaurants & Food Service',
      metaTitle: 'Restaurant Video Analytics | Kitchen Hygiene, Queues & Operations — Hype Vision',
      metaDescription:
        'Video analytics for restaurant chains on existing CCTV: kitchen hygiene and uniform rules, queue and occupancy at counters, station activity and procedure compliance across branches.',
      h1: 'Video analytics for restaurants and food service',
      lead: 'Consistent hygiene, service speed and procedures across every branch — measured, not assumed.',
      context: [
        'Restaurant chains depend on standards being followed in every kitchen and at every counter, but area managers can only visit so often.',
        'Analytics on branch cameras turns hygiene rules, queues and station activity into events and comparable branch reports.',
      ],
      useCases: [
        { solution: 'ppe-detection', why: 'Hairnet, gloves or uniform rules in kitchen zones (evaluated per camera).' },
        { solution: 'queue-analytics', why: 'Order-counter queues and waiting times.' },
        { solution: 'occupancy-analytics', why: 'Dining-area occupancy by hour.' },
        { solution: 'workforce-analytics', why: 'Station activity and peak-hour bottlenecks.' },
        { solution: 'anomaly-detection', why: 'Deviations in cash and order procedures.' },
        { solution: 'fire-smoke-detection', why: 'Visual early warning in kitchens.' },
      ],
      considerations: ['Kitchen cameras face steam, grease and strong light; suitability is checked per camera.', 'Branch comparisons work best with standardised camera positions.'],
      faq: [{ q: 'Can rules differ between kitchen and dining areas?', a: 'Yes. Each zone has its own rules and alert recipients.' }],
    },
    tr: {
      name: 'Restoran ve Yiyecek-İçecek',
      metaTitle: 'Restoranlar için Kamera Analitiği | Mutfak Hijyeni, Kuyruk, Operasyon — Hype Vision',
      metaDescription:
        'Restoran zincirleri için mevcut CCTV ile mutfak hijyeni ve kıyafet kuralları, kasa kuyruğu ve doluluk, istasyon aktivitesi ve prosedür uyumu; şubeler arası karşılaştırma.',
      h1: 'Restoranlar için video analitiği',
      lead: 'Her şubede tutarlı hijyen, hizmet hızı ve prosedür: varsayılmadan, ölçülerek.',
      context: [
        'Restoran zincirleri, standartların her mutfakta ve her kasada uygulanmasına bağlıdır; bölge müdürleri ise şubeleri sınırlı sıklıkta ziyaret edebilir.',
        'Şube kameraları üzerindeki analitik, hijyen kurallarını, kuyrukları ve istasyon aktivitesini olaylara ve karşılaştırılabilir şube raporlarına dönüştürür.',
      ],
      useCases: [
        { solution: 'ppe-detection', why: 'Mutfakta bone, eldiven veya kıyafet kuralları (kamera bazında değerlendirilir).' },
        { solution: 'queue-analytics', why: 'Sipariş noktasında kuyruk ve bekleme süresi.' },
        { solution: 'occupancy-analytics', why: 'Saat bazında salon doluluğu.' },
        { solution: 'workforce-analytics', why: 'İstasyon aktivitesi ve yoğun saat darboğazları.' },
        { solution: 'anomaly-detection', why: 'Kasa ve sipariş prosedürlerindeki sapmalar.' },
        { solution: 'fire-smoke-detection', why: 'Mutfakta görsel erken uyarı.' },
      ],
      considerations: ['Mutfak kameraları buhar, yağ ve güçlü ışıkla karşılaşır; uygunluk kamera bazında kontrol edilir.', 'Şube karşılaştırması standart kamera konumlarıyla en iyi sonucu verir.'],
      faq: [{ q: 'Mutfak ve salon için farklı kurallar olabilir mi?', a: 'Evet. Her bölgenin kendi kuralları ve alarm alıcıları vardır.' }],
    },
  },
  {
    id: 'hospitality',
    urls: { tr: '/sektor/otel', en: '/en/industries/hospitality' },
    todo: ['Otel/turizm projesi referansı (Kıbrıs demosu) kamuya açık kullanım için teyit edilmeli'],
    en: {
      name: 'Hospitality & Hotels',
      metaTitle: 'Video Analytics for Hotels & Hospitality | Occupancy, Queues, Safety — Hype Vision',
      metaDescription:
        'Video analytics for hotels and resorts on existing CCTV: lobby and restaurant occupancy, reception queues, back-of-house safety, fall and fire early warning.',
      h1: 'Video analytics for hotels and hospitality',
      lead: 'Guest-facing service levels and back-of-house safety from the cameras already installed across the property.',
      context: [
        'Hotels operate many spaces at once — lobby, restaurants, pools, kitchens, technical areas — with peaks that shift by hour and season.',
        'Analytics helps operations teams see where guests wait or crowd and where staff safety risks occur, without identifying guests.',
      ],
      useCases: [
        { solution: 'occupancy-analytics', why: 'Restaurant, lobby and pool-area occupancy by hour.' },
        { solution: 'queue-analytics', why: 'Reception and buffet queues.' },
        { solution: 'fall-detection', why: 'Alerts for falls in public and remote areas.' },
        { solution: 'fire-smoke-detection', why: 'Visual early warning in kitchens and technical areas.' },
        { solution: 'restricted-area-monitoring', why: 'Back-of-house and technical-room access.' },
      ],
      considerations: ['Guest privacy: guest-facing analytics should remain anonymous and aggregated.'],
      faq: [{ q: 'Can occupancy be shown on screens for guests?', a: 'Occupancy figures can be exposed via API to digital signage; this is configured per project.' }],
    },
    tr: {
      name: 'Otel ve Turizm',
      metaTitle: 'Oteller için Kamera Analitiği | Doluluk, Kuyruk, Güvenlik — Hype Vision',
      metaDescription:
        'Otel ve tesisler için mevcut CCTV ile lobi ve restoran doluluğu, resepsiyon kuyruğu, arka alan güvenliği, düşme ve yangın erken uyarısı.',
      h1: 'Oteller için video analitiği',
      lead: 'Tesis genelindeki kameralardan misafir hizmet seviyesi ve arka alan güvenliği.',
      context: [
        'Oteller aynı anda birçok alanı işletir: lobi, restoranlar, havuz, mutfaklar, teknik alanlar; yoğunluk saate ve sezona göre değişir.',
        'Analitik, operasyon ekiplerinin misafirlerin nerede beklediğini veya yığıldığını ve personel güvenliği risklerinin nerede oluştuğunu misafir kimliği tespit etmeden görmesini sağlar.',
      ],
      useCases: [
        { solution: 'occupancy-analytics', why: 'Saat bazında restoran, lobi ve havuz doluluğu.' },
        { solution: 'queue-analytics', why: 'Resepsiyon ve açık büfe kuyrukları.' },
        { solution: 'fall-detection', why: 'Ortak ve uzak alanlarda düşme alarmı.' },
        { solution: 'fire-smoke-detection', why: 'Mutfak ve teknik alanlarda görsel erken uyarı.' },
        { solution: 'restricted-area-monitoring', why: 'Arka alan ve teknik oda erişimi.' },
      ],
      considerations: ['Misafir mahremiyeti: misafire dönük analitik anonim ve toplu kalmalıdır.'],
      faq: [{ q: 'Doluluk misafirlere ekranda gösterilebilir mi?', a: 'Doluluk verisi API ile dijital ekranlara aktarılabilir; proje bazında yapılandırılır.' }],
    },
  },
  {
    id: 'construction',
    urls: { tr: '/sektor/insaat', en: '/en/industries/construction' },
    todo: ['İnşaat sahası referansı/pilotu olup olmadığı teyit edilmeli'],
    en: {
      name: 'Construction',
      metaTitle: 'AI Site Safety for Construction | PPE, Exclusion Zones, Falls — Hype Vision',
      metaDescription:
        'Computer vision for construction sites: hard hat and vest detection, exclusion zones around machinery, fall detection and fire early warning using site cameras.',
      h1: 'AI safety monitoring for construction sites',
      lead: 'PPE compliance and exclusion-zone alerts on sites that change every week.',
      context: [
        'Construction sites change constantly, involve multiple subcontractors and have heavy machinery moving among people on foot. Site safety staff cannot watch every area all day.',
        'Camera analytics provides continuous PPE and exclusion-zone monitoring, with zones that can be redrawn as the site evolves.',
      ],
      useCases: [
        { solution: 'ppe-detection', why: 'Hard hat and vest compliance at gates and work areas.' },
        { solution: 'restricted-area-monitoring', why: 'Exclusion zones around cranes, excavators and edges.' },
        { solution: 'fall-detection', why: 'Worker-down alerts.' },
        { solution: 'fire-smoke-detection', why: 'Early warning for storage and hot-work areas.' },
      ],
      considerations: ['Site cameras may need connectivity planning (4G/5G or site network); on-site edge processing reduces bandwidth needs.', 'Zones should be reviewed as the site layout changes.'],
      faq: [{ q: 'Can it work on sites without fixed network infrastructure?', a: 'It depends on camera connectivity on site. Edge processing reduces bandwidth needs; connectivity is assessed during discovery.' }],
    },
    tr: {
      name: 'İnşaat',
      metaTitle: 'İnşaat Sahaları için Yapay Zeka İSG | KKD, Yasak Bölge, Düşme — Hype Vision',
      metaDescription:
        'İnşaat sahaları için görüntü işleme: baret ve yelek tespiti, iş makinesi çevresinde yasak bölge, düşme tespiti ve yangın erken uyarısı; saha kameralarıyla.',
      h1: 'İnşaat sahaları için yapay zeka destekli İSG izleme',
      lead: 'Her hafta değişen sahalarda KKD uyumu ve yasak bölge alarmları.',
      context: [
        'İnşaat sahaları sürekli değişir, çok sayıda taşeron barındırır ve iş makineleri yayalarla aynı alanda hareket eder. Saha İSG ekibi her alanı gün boyu izleyemez.',
        'Kamera analitiği sürekli KKD ve yasak bölge izlemesi sağlar; saha geliştikçe bölgeler yeniden çizilebilir.',
      ],
      useCases: [
        { solution: 'ppe-detection', why: 'Saha girişlerinde ve çalışma alanlarında baret ve yelek uyumu.' },
        { solution: 'restricted-area-monitoring', why: 'Vinç, ekskavatör ve kenar çevresinde yasak bölgeler.' },
        { solution: 'fall-detection', why: 'Düşme alarmı.' },
        { solution: 'fire-smoke-detection', why: 'Depolama ve sıcak çalışma alanlarında erken uyarı.' },
      ],
      considerations: ['Saha kameraları bağlantı planlaması gerektirebilir (4G/5G veya saha ağı); sahada edge işleme bant genişliği ihtiyacını azaltır.', 'Saha yerleşimi değiştikçe bölgeler gözden geçirilmelidir.'],
      faq: [{ q: 'Sabit ağ altyapısı olmayan sahalarda çalışır mı?', a: 'Sahadaki kamera bağlantısına bağlıdır. Edge işleme bant genişliği ihtiyacını azaltır; bağlantı keşif aşamasında değerlendirilir.' }],
    },
  },
  {
    id: 'jewelry-manufacturing',
    urls: { tr: '/sektor/kuyumculuk', en: '/en/industries/jewelry-manufacturing' },
    todo: ['Kuyum/altın üreticisi projesinin kapsamı ve referans izni ekip tarafından teyit edilmeli'],
    en: {
      name: 'Jewelry & Precious Metals Manufacturing',
      metaTitle: 'Computer Vision for Jewelry & Gold Manufacturing | Process & Security Analytics — Hype Vision',
      metaDescription:
        'Video analytics for jewelry and precious-metal workshops: restricted-room access, process compliance, station activity, counting and visual inspection on existing CCTV.',
      h1: 'Computer vision for jewelry and precious-metal manufacturing',
      lead: 'Process visibility and security in workshops where every gram matters.',
      context: [
        'Jewelry and precious-metal manufacturing combines high-value material, many manual steps and strict security procedures. Workshops are usually well covered by CCTV, but footage is reviewed only after a discrepancy.',
        'Analytics turns the same cameras into continuous process and access monitoring, with on-premise processing for confidentiality.',
      ],
      useCases: [
        { solution: 'restricted-area-monitoring', why: 'Access to vaults, casting rooms and refining areas.' },
        { solution: 'anomaly-detection', why: 'Deviations from handling and weighing procedures.' },
        { solution: 'workforce-analytics', why: 'Station activity and bottlenecks in manual steps.' },
        { solution: 'product-counting', why: 'Counts of pieces moving between workshop steps.' },
        { solution: 'visual-quality-inspection', why: 'Visual checks for finish and assembly defects.' },
      ],
      considerations: ['On-premise processing is strongly recommended for confidentiality.', 'Small items may need closer camera framing than security cameras provide.'],
      faq: [{ q: 'Can small pieces be counted with existing cameras?', a: 'Only if they are visible at sufficient size. Close-up cameras at transfer points are often needed; this is checked during camera assessment.' }],
    },
    tr: {
      name: 'Kuyumculuk ve Değerli Metal Üretimi',
      metaTitle: 'Kuyum ve Altın Üretimi için Görüntü İşleme | Süreç ve Güvenlik — Hype Vision',
      metaDescription:
        'Kuyum ve değerli metal atölyeleri için mevcut CCTV ile kısıtlı oda erişimi, süreç uyumu, istasyon aktivitesi, sayım ve görsel kontrol.',
      h1: 'Kuyum ve değerli metal üretimi için görüntü işleme',
      lead: 'Her gramın önemli olduğu atölyelerde süreç görünürlüğü ve güvenlik.',
      context: [
        'Kuyum ve değerli metal üretimi yüksek değerli malzeme, çok sayıda el işçiliği adımı ve sıkı güvenlik prosedürlerini bir araya getirir. Atölyeler genellikle kameralarla iyi kaplanmıştır, ancak görüntüler ancak bir fark çıktığında incelenir.',
        'Analitik, aynı kameraları sürekli süreç ve erişim izlemesine dönüştürür; gizlilik için tesis içinde işlenir.',
      ],
      useCases: [
        { solution: 'restricted-area-monitoring', why: 'Kasa, döküm ve rafineri alanlarına erişim.' },
        { solution: 'anomaly-detection', why: 'Taşıma ve tartım prosedürlerindeki sapmalar.' },
        { solution: 'workforce-analytics', why: 'El işçiliği adımlarında istasyon aktivitesi ve darboğazlar.' },
        { solution: 'product-counting', why: 'Atölye adımları arasında geçen parça sayımı.' },
        { solution: 'visual-quality-inspection', why: 'Yüzey ve montaj kusurları için görsel kontrol.' },
      ],
      considerations: ['Gizlilik için tesis içi işleme kuvvetle önerilir.', 'Küçük parçalar güvenlik kameralarından daha yakın çekim gerektirebilir.'],
      faq: [{ q: 'Küçük parçalar mevcut kameralarla sayılabilir mi?', a: 'Yalnızca yeterli boyutta görünüyorlarsa. Geçiş noktalarında yakın çekim kamera çoğu zaman gerekir; bu kamera değerlendirmesinde kontrol edilir.' }],
    },
  },
];
