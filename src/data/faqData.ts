export type FaqItem = { q: string; a: string };
export type FaqCategory = { id: string; label: string; items: FaqItem[] };

export const faqCategories: FaqCategory[] = [
  {
    id: 'genel',
    label: 'Genel & Sistem',
    items: [
      {
        q: 'Sistem nasıl çalışıyor?',
        a: 'Hype Vision görüntü işleme altyapısı, sahadaki IP kameralardan alınan canlı görüntü akışını (RTSP/ONVIF uyumlu) gerçek zamanlı analiz eder. Görüntü edge sunucuya veya tanımlı işlem birimine aktarılır; derin öğrenme algoritmaları nesne, insan, ekipman, davranış ve operasyonel akışları tespit eder. Veriler ham video olarak değil; olay, alarm, sayaç, süre, ihlal kaydı ve performans metriği şeklinde işlenir ve merkezi panele aktarılır. Üretim tarafında verimlilik, duruş, cycle-time ve OEE; İSG tarafında KKD ihlali, tehlikeli alan girişi, forklift-yaya riski gibi durumlar anlık algılanır. API altyapısı ile ERP, SAP ve diğer kurumsal sistemlere entegre edilebilir.',
      },
      {
        q: 'Rakiplerden farkınız nedir?',
        a: 'Hype Vision yalnızca görüntü izleyen bir sistem değil; görüntüyü operasyonel karara dönüştüren analitik bir platformdur. Tek modüle odaklanmak yerine MES ve İSG senaryolarını aynı altyapıda birleştirir. Ham video bağımlı değil, anlamlandırılmış veri üretim odaklı çalışır. Edge, Cloud ve hibrit mimari esnekliği sunar. Proje bazlı özelleştirme ve model optimizasyonu ile kurumsal seviyede çözüm sağlar.',
      },
      {
        q: 'Model eğitimi size mi ait?',
        a: 'Evet. Temel yapay zeka modellerinin geliştirilmesi ve eğitimi firmamıza aittir. Standart modüller hazır gelir; özel senaryolarda proje kapsamında ek veri toplanarak model fine-tune edilir. Model yönetimi merkezi, versiyonlanmış ve planlı güncellemelerle yapılır.',
      },
      {
        q: 'Custom model yapılabiliyor mu?',
        a: 'Evet. Belirli bir hat, ürün, makine veya özel İSG senaryosu için veri toplama, etiketleme ve model eğitimi planlanabilir. Custom modeller mevcut mimariye, panele ve alarm altyapısına entegre edilir.',
      },
    ],
  },
  {
    id: 'kamera',
    label: 'Kamera & Entegrasyon',
    items: [
      {
        q: 'Kamera şart mı? Mevcut kamera ile olur mu?',
        a: 'Temel gereksinim görüntü kaynağıdır; çoğu projede mevcut IP kameralar kullanılır. RTSP/ONVIF uyumlu standart akışlarla çalışırız. PPE tespiti, uzak mesafe alan ihlali gibi modüllerde çözünürlük, açı, lens ve ışık kritik olabilir — keşifte yeterliyse aynen devam, değilse sadece gerekli noktalarda optimizasyon önerilir.',
      },
      {
        q: 'RTSP ile çalışır mı?',
        a: 'Evet. Standart olarak RTSP üzerinden çalışır; kameradan gelen akış decode edilip gerçek zamanlı analiz edilir. Ek özel kamera markası veya kapalı sistem gerekmez.',
      },
      {
        q: 'ONVIF destekler mi?',
        a: 'Evet. ONVIF ile kamera keşfi, stream bilgisi alma ve profil yönetimi yapılabilir. Analiz video akışı üzerinden gerçekleştiği için ONVIF zorunlu değildir; RTSP erişimi olan tüm IP kameralarla çalışır.',
      },
      {
        q: 'Hangi kamera markaları desteklenir?',
        a: 'Hikvision, Dahua, Axis, Bosch, Hanwha, Uniview ve diğer ONVIF/RTSP uyumlu IP kameralar. Marka fark etmez.',
      },
    ],
  },
  {
    id: 'mimari',
    label: 'Mimari & Donanım',
    items: [
      {
        q: 'Edge mi Cloud mu?',
        a: 'Her ikisi de mümkün. Endüstriyel tesislerde genellikle Edge tercih edilir; video dışarı çıkmaz, düşük gecikme sağlanır. Cloud çok lokasyonlu yapılarda merkezi yönetim avantajı sunar. Hibrit modelde kritik analiz Edge’de, raporlama Cloud’da tutulabilir. Karar keşif sonrası netleşir.',
      },
      {
        q: 'Donanım gereksinimi nedir?',
        a: 'Kamera sayısı, çözünürlük, FPS ve modül sayısına göre belirlenir. Küçük projelerde 4–8 kamera için GPU’lu edge sunucu (8–12 GB VRAM), 32 GB RAM ve NVMe SSD yeterli olabilir. Büyük ölçekte daha yüksek VRAM ve çoklu disk mimarisi önerilir. Sistem GPU ağırlıklı çalışır.',
      },
      {
        q: 'GPU gereksinimi nedir?',
        a: 'CUDA ve VRAM kapasitesi kritiktir. Küçük projelerde 8–12 GB VRAM yeterli olabilir; orta/büyük ölçekte 16–24 GB+ veya çoklu GPU. Kapasite kamera başı işlem yükü hesabıyla belirlenir.',
      },
      {
        q: 'Aynı anda kaç kamera işlenebilir?',
        a: 'GPU, çözünürlük, FPS ve aktif modüle bağlıdır. Tek GPU’lu edge sunucuda 1080p ile genellikle 6–12 kamera gerçek zamanlı analiz edilebilir. Çoklu GPU veya Cloud ile onlarca kameraya ölçeklenir.',
      },
      {
        q: 'FPS sınırı nedir?',
        a: 'Teorik olarak kameranın sağladığı FPS’e kadar işlenebilir; pratikte çoğu İSG/üretim senaryosunda 10–15 FPS yeterlidir. Yüksek hızlı senaryolarda 20–25 FPS tercih edilebilir. Proje bazlı performans-doğruluk dengesi kurulur.',
      },
      {
        q: 'Offline çalışabilir mi?',
        a: 'Evet, Edge mimaride tamamen offline çalışabilir. İnternet yalnızca uzaktan erişim veya Cloud senkronu için gerekir. Bağlantı kesilse bile analiz devam eder, veri yerelde saklanır.',
      },
    ],
  },
  {
    id: 'veri',
    label: 'Veri & KVKK',
    items: [
      {
        q: 'Veri nerede tutuluyor?',
        a: 'Mimari ve KVKK/IT politikalarınıza göre belirlenir. Ham video zorunlu olmadıkça saklanmaz; olay kaydı, alarm, sayaç ve metrikler veritabanında tutulur. Edge’de tesis içinde, Cloud’da belirlenen ortamda. Video kayıt ayrı politika olarak ele alınır (NVR veya 7/30/90 gün).',
      },
      {
        q: 'KVKK uyumlu mu?',
        a: 'Evet. Ham görüntü depolanmak yerine anlık analiz edilir; yalnızca anlamlandırılmış çıktılar saklanır. Yüz tanıma gibi kimliklendirme modülleri varsayılan kapalıdır. Edge’de video tesis dışına çıkmaz; Cloud’da şifreleme, erişim yetkisi ve loglama uygulanır.',
      },
      {
        q: 'Loglama nasıl tutuluyor?',
        a: 'Sistem sağlığı, kamera bağlantıları, alarm üretimi, kullanıcı işlemleri ve API çağrıları uçtan uca loglanır. Saklama süresi IT/KVKK politikasına göre yapılandırılır; SIEM entegrasyonu mümkündür.',
      },
    ],
  },
  {
    id: 'kurulum',
    label: 'Kurulum & Lisans',
    items: [
      {
        q: 'Kurulum süresi nedir?',
        a: '4–8 kamera, standart modüller: 1–3 iş günü. Orta ölçek: 1–2 hafta. Büyük/çok lokasyonlu: 3–6 hafta. Kurulum sonrası test ve kalibrasyon yapılır.',
      },
      {
        q: 'Lisans modeli nasıl?',
        a: 'Modüler yapı: kamera başı + aktif modül. Sadece ihtiyaç duyduğunuz fonksiyonlar için ödeme. Yıllık veya çok yıllık sözleşme; büyük projelerde enterprise paket mümkün.',
      },
      {
        q: 'Eğitim gerekiyor mu?',
        a: 'İleri seviye teknik bilgi gerekmez. Operasyon ekiplerine 2–4 saatlik rol bazlı eğitim verilir; teknik ekiplere ayrı admin eğitimi sunulur. Dokümantasyon ile desteklenir.',
      },
    ],
  },
  {
    id: 'platform',
    label: 'Platform & API',
    items: [
      {
        q: 'API var mı?',
        a: 'Evet. REST tabanlı API ile alarm kayıtları, olay logları, sayaç verileri, OEE/duruş metrikleri ve sistem durumu çekilebilir. ERP, SAP, MES ve BI araçları entegre edilebilir. Token bazlı güvenlik.',
      },
      {
        q: 'Dashboard özelleştirilebilir mi?',
        a: 'Evet. Rol bazlı ve modüler; yönetim, operasyon ve teknik ekranlar ayrı tasarlanabilir. KPI, grafik, vardiya filtresi, çoklu tesis görünümü ve kurumsal renk uyarlanabilir.',
      },
      {
        q: 'Alarm mekanizması nasıl?',
        a: 'İhlal veya kritik durum tespit edildiğinde zaman damgalı kayıt oluşur. Eşik, süre koşulu, vardiya filtresi ve alan kuralları yapılandırılır. Dashboard, e-posta veya API ile bildirim gider.',
      },
      {
        q: 'Latency (gecikme) kaç ms?',
        a: 'Edge’de optimize kurulumda görüntüden alarm üretimine genellikle 100–300 ms. Kritik İSG senaryolarında Edge tercih edilir.',
      },
      {
        q: 'Multi-site destek var mı?',
        a: 'Evet. Farklı tesisler merkezi panelden izlenir. Her lokasyon Edge çalışabilir; veriler merkeze aktarılır. Rol bazlı yetki ile lokasyon filtresi.',
      },
      {
        q: 'Failover var mı?',
        a: 'Kritik projelerde aktif-pasif veya aktif-aktif yedeklilik kurgulanabilir. Kamera kopmalarında otomatik yeniden bağlanma ve durum izleme mevcuttur.',
      },
    ],
  },
];

export const allFaqs = faqCategories.flatMap((c) => c.items);
