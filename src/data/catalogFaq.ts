/** Katalogdaki 16 SSS — FAQPage şeması ve /sss sayfası için */
export type CatalogFaqItem = { q: string; a: string };

export const CATALOG_FAQ: CatalogFaqItem[] = [
  {
    q: 'Sistem nasıl çalışıyor?',
    a: 'Hype Vision, sahadaki IP kameralardan alınan canlı görüntü akışını (RTSP/ONVIF) gerçek zamanlı analiz eder. Görüntü edge sunucuda veya tanımlı işlem biriminde işlenir; derin öğrenme modelleri nesne, insan, ekipman ve operasyonel akışları tespit eder. Ham video yerine olay, alarm, sayaç, süre ve performans metriği üretilir. Üretim tarafında OEE ve cycle-time; İSG tarafında KKD ihlali, tehlikeli alan girişi ve forklift-yaya riski anlık algılanır.',
  },
  {
    q: 'Mevcut kameralarımızla çalışır mı?',
    a: 'Evet. RTSP/ONVIF uyumlu tüm IP kameralar desteklenir — Hikvision, Dahua, Axis, Bosch, Hanwha, Uniview ve diğer markalar. Yeni kamera almanız gerekmez; keşif sonrası yalnızca gerekli noktalarda çözünürlük veya açı optimizasyonu önerilebilir.',
  },
  {
    q: 'Doğruluk oranları ne kadar?',
    a: 'Modül ve sahaya göre değişir. KKD/baret tespitinde %96–98,6; tehlikeli bölge ihlalinde %97,8; forklift-yaya analizinde %97,3; kalite OK/RED sınıflandırmasında %94+ bandında performans hedeflenir. Pilot aşamasında saha verisiyle kalibrasyon yapılır.',
  },
  {
    q: 'Edge mi Cloud mu tercih edilmeli?',
    a: 'Edge: video tesis dışına çıkmaz, 100–300 ms gecikme, KVKK için ideal. Cloud: çok lokasyonlu yapılarda merkezi yönetim. Hibrit: kritik analiz Edge’de, raporlama Cloud’da. Karar keşif sonrası netleşir.',
  },
  {
    q: 'KVKK uyumlu mu?',
    a: 'Evet. Ham görüntü zorunlu olmadıkça saklanmaz; yalnızca anlamlandırılmış çıktılar (olay, alarm, metrik) kaydedilir. Yüz tanıma varsayılan kapalıdır. Edge mimaride video tesis dışına çıkmaz; Cloud’da şifreleme ve erişim yetkisi uygulanır.',
  },
  {
    q: 'Kurulum süresi ne kadar?',
    a: '4–8 kamera, standart modüller: 1–3 iş günü. Orta ölçek: 1–2 hafta. Büyük veya çok lokasyonlu projeler: 3–6 hafta. Kurulum sonrası test ve kalibrasyon dahildir.',
  },
  {
    q: 'ERP / MES entegrasyonu var mı?',
    a: 'Evet. REST API ile alarm kayıtları, sayaç verileri, OEE/duruş metrikleri ve sistem durumu çekilebilir. SAP, ERP ve MES sistemlerine entegrasyon mümkündür.',
  },
  {
    q: 'Turnike veya PLC ile entegre olur mu?',
    a: 'Evet. KKD ihlali algılandığında turnike kilitleme, yangın paneli tetikleme veya hat durdurma gibi senaryolar endüstriyel protokoller (Modbus, Ethernet/IP, dijital I/O) üzerinden kurgulanabilir.',
  },
  {
    q: 'Aynı anda kaç kamera işlenebilir?',
    a: 'GPU, çözünürlük, FPS ve aktif modül sayısına bağlıdır. Tek GPU’lu edge sunucuda 1080p ile genellikle 6–12 kamera gerçek zamanlı analiz edilir. Çoklu GPU veya Cloud ile onlarca kameraya ölçeklenir.',
  },
  {
    q: 'Offline çalışabilir mi?',
    a: 'Evet, Edge mimaride internet olmadan tam kapasite çalışır. Bağlantı kesilse bile analiz devam eder; veri yerelde saklanır. İnternet yalnızca uzaktan erişim veya Cloud senkronu için gereklidir.',
  },
  {
    q: 'Custom model eğitilebilir mi?',
    a: 'Evet. Belirli hat, ürün veya İSG senaryosu için saha verisi toplanır, etiketlenir ve model fine-tune edilir. Custom modeller mevcut panele ve alarm altyapısına entegre edilir.',
  },
  {
    q: 'Lisans modeli nasıl?',
    a: 'Modüler yapı: kamera başı + aktif modül. Yalnızca kullandığınız fonksiyonlar için ödeme. Yıllık veya çok yıllık sözleşme; büyük projelerde enterprise paket mümkün.',
  },
  {
    q: 'Alarm gecikmesi (latency) ne kadar?',
    a: 'Edge’de optimize kurulumda görüntüden alarm üretimine genellikle 100–300 ms, kritik İSG senaryolarında 1 saniyenin altında. Katalog verilerinde alarm tepki süresi <1 sn olarak ölçülmüştür.',
  },
  {
    q: 'Multi-site (çok tesis) destek var mı?',
    a: 'Evet. Farklı tesisler merkezi panelden izlenir. Her lokasyon Edge çalışabilir; veriler merkeze aktarılır. Rol bazlı yetki ile lokasyon filtresi uygulanır.',
  },
  {
    q: 'Hangi sektörlerde kullanılıyor?',
    a: 'Tekstil, otomotiv, gıda, metal, lojistik/depo, kimya ve ağır sanayi. İSG, kalite kontrol, personel verimliliği ve güvenlik modülleri sektöre göre yapılandırılır.',
  },
  {
    q: 'Pilot süreci nasıl işler?',
    a: '1) Keşif: saha analizi ve hedef belirleme. 2) Senaryo tasarımı: mimari ve modül seçimi. 3) Kurulum ve kalibrasyon. 4) Canlıya alma, eğitim ve raporlama. 30 günlük pilot paket mevcuttur.',
  },
];
