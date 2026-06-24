export default {
  hero: {
    ariaLabel: 'Ana tanıtım',
    badge: "2020'den beri · Mevcut kameralarınız · Marka fark etmez",
    subtitle: 'Endüstriyel güvenlik ve operasyonel verimlilikte yeni standart',
    titleLine1: 'Gerçek zamanlı',
    titleHighlight: 'İSG, kalite ve verimlilik',
    titleLine2: '— mevcut kameralarınızla.',
    description:
      '7/24 tespit, anlık alarm ve ölçülebilir KPI. Personel denetimi, İSG, kalite kontrol ve boşta kalma — insan gözünün yetemediği süreçler',
    descriptionHighlight: 'otomatik izlenir.',
    contact: 'İletişim',
    cameraIntegration: 'Kamera entegrasyonu',
    stats: [
      { value: 'RTSP', label: 'ONVIF uyumlu' },
      { value: 'İSG', label: 'Otomatik denetim' },
      { value: 'Kalite', label: 'Anlık tespit' },
      { value: 'Idle', label: 'Boşta kalma' },
    ],
  },
  trustStrip: {
    main:
      "2020'den beri endüstriyel yapay zeka ve görüntü işleme — mevcut IP kameralarınızla, marka bağımsız entegrasyon.",
    mainBold: "2020'den beri",
    sub: 'Edge · Cloud · Hibrit · KVKK uyumlu mimari',
    metrics: [
      { value: '2020+', label: 'Saha deneyimi' },
      { value: 'ONVIF', label: 'Marka bağımsız' },
      { value: '7/24', label: 'AI denetim' },
    ],
  },
  cameraIntegration: {
    eyebrow: 'Ürün · Kamera entegrasyonu',
    title: 'Mevcut marka ve model kameralarınızla çalışırız.',
    description:
      'Hype Vision, tesisinizdeki IP kameraları yapay zeka katmanına bağlar. Hikvision, Dahua, Axis veya başka bir üretici —',
    descriptionBold: 'marka fark etmez',
    descriptionSuffix: '. Saha altyapınızı değiştirmeden denetim modüllerini devreye alırsınız.',
    benefits: [
      'Yeni kamera almanız gerekmez — sahada ne varsa ona bağlanırız',
      'Marka ve model fark etmez; standart protokollerle entegrasyon',
      'Kurulum sonrası tüm denetimler tek panelden yönetilir',
      'İSG, personel, kalite ve güvenlik modülleri aynı altyapıda',
    ],
    protocols: ['ONVIF', 'RTSP', 'IP Kamera', 'NVR uyumlu'],
    cta: 'Kamera uyumluluğu için iletişim',
    howConnect: 'Nasıl bağlanır?',
    steps: [
      { label: 'Mevcut IP kameralar', sub: 'Tüm markalar' },
      { label: 'Hype Vision AI', sub: 'Görüntü analizi' },
      { label: 'Canlı panel', sub: 'Uyarı ve rapor' },
    ],
    brandsLabel: 'Uyumlu markalar (örnek)',
    brands: [
      'Hikvision',
      'Dahua',
      'Axis',
      'Bosch',
      'Hanwha',
      'Uniview',
      'Honeywell',
      'TP-Link',
      'Genel IP / RTSP',
    ],
    brandsNote: 'Listede yok mu? RTSP veya ONVIF ile bağlanır.',
  },
  visionShowcase: {
    eyebrow: 'Sahada AI ne görür?',
    title: 'Kamera görüntüsü değil —',
    titleHighlight: 'anlamlandırılmış olay',
    description:
      'Ham video depolanmaz. Yapay zeka personeli, araçları, bölgeleri ve ihlalleri okur; panelde alarm, sayaç ve kanıt olarak sunar.',
    prevImage: 'Önceki görsel',
    nextImage: 'Sonraki görsel',
    shots: [
      {
        alt: 'Forklift ve yaya mesafe analizi — tehlikeli bölge tespiti',
        title: 'Forklift–yaya riski',
        desc: 'Araç ile personel arası mesafe anlık ölçülür; kırmızı bölge ihlali alarm üretir.',
        tags: ['İSG', 'Tehlikeli alan', 'Mesafe analizi'],
      },
      {
        alt: 'Gıda üretim hattında personel ve bölge izleme',
        title: 'Tehlike alanı & hareket',
        desc: 'Personel pozisyonu ve zemin bölgesi izlenir; makine önü ihlalleri kayda alınır.',
        tags: ['İSG', 'Bölge kuralı', 'Pose takibi'],
      },
      {
        alt: 'Konveyör hattında personel denetimi ve iskelet takibi',
        title: 'Hat denetimi',
        desc: 'Vardiya sırasında kim nerede — istasyon ve hat kurallarına uyum görünür olur.',
        tags: ['Personel', 'Hat izleme', 'Verimlilik'],
      },
      {
        alt: 'Depo alanında alan ihlali ve personel tespiti',
        title: 'Depo & alan güvenliği',
        desc: 'Yetkisiz veya riskli alana giriş anında tespit; kanıt görüntüsü panelde.',
        tags: ['Güvenlik', 'Alan ihlali', '7/24'],
      },
    ],
  },
  logoStrip: {
    eyebrow: 'Entegrasyon & bildirim',
    title: "ERP, VMS popup, mobil panel — alarm IoT'ya kadar",
    description:
      "Tespit panelde kalır; Milestone veya Dahua popup'ı, mobil bildirim ve sahadaki IoT cihaz tetiklemesi aynı akışta.",
    protocolBadges: [
      'ONVIF',
      'RTSP',
      'IP Kamera',
      'NVR uyumlu',
      'SAP',
      'Oracle',
      'Dynamics 365',
      'REST API',
      'KVKK',
      'Edge',
      'Cloud',
    ],
    groups: [
      {
        title: 'ERP & MES',
        desc: 'Üretim verisi tek yerde — çift giriş yok',
        items: ['SAP', 'Oracle', 'Dynamics 365', 'MES / BI'],
      },
      {
        title: 'VMS popup & alarm',
        desc: 'Milestone, Dahua vb. — olay anında VMS ekranında',
        items: ['Milestone', 'Dahua', 'Hikvision', 'Genetec'],
      },
      {
        title: 'Mobil & mesaj',
        desc: 'Geri bildirim anında cebinizde',
        items: ['Mobil panel', 'Telegram', 'E-posta / SMS', 'VMS popup'],
      },
      {
        title: 'IoT & saha tetikleme',
        desc: 'Alarm çaldırıyoruz — cihazları otomatik devreye alıyoruz',
        items: ['Siren / flaşör', 'Röle & I/O', 'Hat durdurma', 'ERP olay senkronu'],
      },
    ],
    footer: ['Mobil panel geri bildirimi', 'Anlık alarm akışı', 'API ile özelleştirilebilir'],
  },
  about: {
    eyebrow: 'Hakkımızda',
    title: "2020'den beri",
    titleHighlight: 'endüstriyel yapay zeka',
    p1Bold: 'Hype Teknoloji',
    p1: 'olarak 2020 yılından bu yana endüstriyel güvenlik ve operasyonel verimlilik alanında yapay zeka destekli görüntü işleme sistemleri geliştiriyoruz.',
    p2Bold: 'Hype Vision',
    p2: 'platformumuz; sahadaki IP kameralardan gelen görüntüyü analiz ederek İSG, kalite kontrol, personel verimliliği ve güvenlik süreçlerini otomatikleştirir. Ham video depolamak yerine anlamlandırılmış veri — alarm, metrik, rapor — üretir.',
    p3: 'Amacımız fabrikalarda insan gözünün yetemediği sürekli denetimi ölçeklenebilir, KVKK uyumlu ve mevcut altyapıyla uyumlu bir katmana dönüştürmek.',
    founded: 'Kuruluş: 2020',
    location: 'Beykoz, İstanbul',
    architecture: 'Edge · Cloud · Hibrit',
    cta: 'Ekibimizle tanışın',
    imageAlt: 'Hype Vision saha analizi — depo alanında personel ve bölge izleme',
    stats: [
      { value: '2020', label: 'Kuruluş' },
      { value: '7/24', label: 'Saha izleme' },
      { value: 'KVKK', label: 'Uyumlu mimari' },
    ],
    focusTitle: 'Neye odaklanıyoruz?',
    focusAreas: [
      { label: 'İSG denetimi', desc: 'KKD, tehlikeli bölge, forklift–yaya' },
      { label: 'Kalite kontrol', desc: 'Hat üzerinde anlık hata tespiti' },
      { label: 'Personel & verimlilik', desc: 'Boşta kalma, istasyon uyumu' },
      { label: 'Tesis güvenliği', desc: 'Alan ihlali, 7/24 alarm' },
    ],
  },
  coreProducts: {
    eyebrow: 'Ürün',
    title: 'İSG analizleri, kalite kontrol, verimlilik —',
    titleHighlight: 'her biri ayrıntılı anlatıldı.',
    description:
      'Hype Vision tek platform: kameralardan görüntü alır, yapay zeka ile analiz eder, sonucu',
    descriptionBold: 'canlı panele',
    descriptionSuffix: 've isteğe bağlı ERP / MES sistemlerinize iletir.',
    tablist: 'Ürün modülleri',
    whatAnalyzes: 'Ne analiz eder?',
    panelShows: 'Panelde ne görürsünüz?',
    howWorks: 'Nasıl çalışır?',
    products: {
      isg: {
        label: '01 · İSG Analizleri',
        tab: 'İSG Analizleri',
        title: 'KKD ve iş güvenliği — 7/24, kanıtlı',
        summary:
          'Saha kameralarından gelen görüntüde baret, yelek, maske, eldiven ve tehlikeli bölge ihlalleri yapay zeka ile sürekli analiz edilir. İnsan denetimi örneklemeli kalır; AI her kareyi izler.',
        detects: [
          'Baret, yelek, maske, eldiven eksikliği',
          'Tehlikeli / yasak bölge girişi',
          'İSG kuralına aykırı davranış ve duruş',
          'Olay anı görüntüsü ve zaman damgası',
        ],
        howItWorks:
          'Mevcut IP kameralarınıza modül bağlanır. Görüntü tesis içinde veya bulutta işlenir; ihlal anında panel, WhatsApp veya VMS popup ile uyarı gider.',
        panelShows: [
          'Günlük / vardiya ihlal sayısı',
          'Bölge bazlı ihlal ısı haritası',
          'Kanıt fotoğrafı ve video klibi',
          'İSG sorumlusu için filtrelenmiş alarm listesi',
        ],
        outcome:
          'İş kazası riski erken görünür; denetimlerde dijital kanıt arşivi oluşur, manuel devriye yükü azalır.',
      },
      kalite: {
        label: '02 · Kalite Kontrol',
        tab: 'Kalite Kontrol',
        title: 'Hat içi hata tespiti — fire birikmeden',
        summary:
          'Üretim hattındaki kusur, montaj hatası, renk / boyut sapması ve yüzey defektleri 0.1–0.3 saniyede tespit edilir. İnsan gözünün kaçırdığı veya geç fark ettiği hatalar hat içinde durdurulur.',
        detects: [
          'Yüzey, lehim, montaj ve boyut sapması',
          'Eksik / hatalı parça, renk uyumsuzluğu',
          'OK / red kararı ve hata sınıflandırması',
          'Fire trendi ve vardiya karşılaştırması',
        ],
        howItWorks:
          'Hat kamerası görüntüsü modele göre analiz edilir. Hata tespitinde uyarı, red sinyali veya hat durdurma (PLC / MES entegrasyonu) tetiklenebilir.',
        panelShows: [
          'Anlık hata oranı ve hata tipi dağılımı',
          'Son 24 saat / vardiya kalite grafiği',
          'Red edilen parça sayacı',
          'Kalite mühendisi için detay görüntüsü',
        ],
        outcome:
          'Fire ve hurda maliyeti düşer; müşteri şikayeti üretim aşamasında kesilir, kalite ekibi kök neden analizine odaklanır.',
      },
      verimlilik: {
        label: '03 · Personel & Verimlilik',
        tab: 'Personel & Verimlilik',
        title: 'Kim ne kadar aktif — kayıp zaman görünür',
        summary:
          'Personel denetimleri, aktif çalışma süresi, istasyon bazlı performans ve boşta kalma (idle) ölçülür. Vardiya sonunda değil, vardiya içinde müdahale edilir.',
        detects: [
          'Aktif çalışma vs bekleme / boşta kalma',
          'İstasyon ve hat bazlı performans skoru',
          'Alan ihlali ve yetkisiz bölge',
          'Vardiya ve ekip karşılaştırması',
        ],
        howItWorks:
          'Kamera + hareket analizi ile personel aktivitesi sınıflandırılır. Tanımlı eşikler aşıldığında yönetime ve vardiya amirine KPI özeti ve alarm gider.',
        panelShows: [
          'Vardiya verimlilik yüzdesi',
          'Boşta kalma süresi (dk) ve trend',
          'Hat / istasyon bazlı performans tablosu',
          'Haftalık kayıp zaman raporu',
        ],
        outcome:
          'Gizli kapasite kaybı ortaya çıkar; prim, vardiya planı ve verimlilik iyileştirmesi veriye dayanır.',
      },
      panel: {
        label: '04 · Canlı Vision Paneli',
        tab: 'Canlı Vision Paneli',
        title: 'Tüm modüller tek ekranda — gerçek zamanlı',
        summary:
          'İSG, kalite, verimlilik ve güvenlik verileri ayrı Excel’lere değil, tek canlı panele akar. Fabrika müdürü, kalite ve İSG sorumlusu kendi filtresini görür.',
        detects: [
          'Tüm modüllerden gelen olay ve alarm',
          'KPI özet kartları ve trend grafikleri',
          'Kritik alarm önceliklendirme',
          'ERP / MES senkron durumu',
        ],
        howItWorks:
          'Web tabanlı panel; tarayıcıdan erişim. Rol bazlı görünüm, olay geçmişi arama ve dışa aktarma. API ile mevcut sistemlerinize veri gönderimi.',
        panelShows: [
          'Canlı hat durumu ve açık alarm sayısı',
          'Günlük İSG / kalite / verimlilik özeti',
          'Olay detayı + kanıt görüntüsü',
          'Entegrasyon ve kamera sağlık durumu',
        ],
        outcome:
          'Karar gecikmesi azalır; yönetim kuruluna net, ölçülebilir operasyonel görünürlük sunulur.',
      },
    },
    panelExamples: {
      isg: {
        imageAlt: 'Forklift yaya risk analizi — AI görüntü işleme',
        title: 'Bu ekran ne?',
        subtitle: 'İSG sorumlusunun gördüğü canlı panel — tarayıcıdan açılır, kurulum gerekmez.',
        event: {
          time: '14:32',
          title: 'Baret ihlali · Montaj hattı',
          detail: 'Kamera 4 · Tehlikeli bölge sınırı',
          action: '→ WhatsApp + VMS popup gönderildi',
        },
        explains: [
          { label: 'Sol üst', text: 'Bugünkü ihlal sayısı — vardiya bazlı' },
          { label: 'Orta', text: 'Olay kartı: ne, nerede, ne zaman' },
          { label: 'Sağ', text: 'Kanıt görüntüsü — denetim için arşivlenir' },
        ],
      },
      kalite: {
        imageAlt: 'Konveyör hattında kalite ve personel izleme',
        title: 'Bu ekran ne?',
        subtitle: 'Kalite mühendisinin hata takip ekranı — OK/red kararı ve fire trendi.',
        event: {
          time: '09:15',
          title: 'Lehim hatası · PCB hattı',
          detail: 'Otomatik red · 0.12 sn tespit',
          action: '→ Hat durdurma sinyali (opsiyonel)',
        },
        explains: [
          { label: 'Üst', text: 'Anlık kalite oranı (%98+ hedef)' },
          { label: 'Orta', text: 'Hata tipi: lehim, montaj, boyut…' },
          { label: 'Alt', text: 'Vardiya fire raporu — Excel yerine panel' },
        ],
      },
      verimlilik: {
        imageAlt: 'Hat verimliliği ve personel takibi — AI görüntü analizi',
        title: 'Bu ekran ne?',
        subtitle: 'Fabrika müdürünün verimlilik özeti — kim ne kadar aktif, nerede kayıp var.',
        event: {
          time: 'Vardiya A',
          title: 'Idle süre eşiği aşıldı · Paketleme',
          detail: '42 dk boşta kalma · hedef 25 dk',
          action: '→ Vardiya amirine bildirim',
        },
        explains: [
          { label: 'KPI', text: 'Aktif çalışma %87 — vardiya ortalaması' },
          { label: 'Idle', text: 'Boşta kalma dakikası ve trend' },
          { label: 'Hat', text: 'İstasyon bazlı performans tablosu' },
        ],
      },
      panel: {
        imageAlt: 'Depo güvenliği — alan ve personel denetimi',
        title: 'Bu ekran ne?',
        subtitle: 'Yönetim özeti — İSG, kalite, verimlilik tek bakışta.',
        event: {
          time: 'Canlı',
          title: '3 açık alarm · 0 kritik',
          detail: '2 İSG · 1 kalite · 0 güvenlik',
          action: '→ Tüm modüller senkron',
        },
        explains: [
          { label: 'Özet', text: 'Açık alarm, hat durumu, KPI kartları' },
          { label: 'Filtre', text: 'Rol bazlı: müdür / İSG / kalite görünümü' },
          { label: 'Entegrasyon', text: 'ERP ve kamera sağlık durumu' },
        ],
      },
    },
    panelExplainer: {
      dataFlow: 'Veri akışı',
      flowNodes: ['Kamera', 'AI', 'Panel', 'Alarm'],
      sampleEvent: 'Örnek olay',
      newBadge: 'Yeni',
      panelScreenshot: 'Canlı Vision Paneli — gerçek ekran görüntüsü',
      fieldScreenshot: 'Örnek saha görüntüsü — AI analiz katmanı',
      discoveryNote: 'Keşif görüşmesinde kendi tesis senaryonuzla birlikte değerlendiririz',
    },
    integration: {
      eyebrow: 'Entegrasyon',
      title: 'ERP veriniz kopmasın',
      items: ['SAP', 'Oracle', 'Dynamics 365', 'Salesforce'],
      itemSuffix: '— iş emri, stok ve olay senkronu',
      cta: 'Entegrasyon için iletişim',
    },
    infrastructure: {
      eyebrow: 'Altyapı',
      title: 'Kurumsal güvenlik, kesintisiz operasyon',
      description: 'Tesis içi (Edge) veya bulut kurulum; KVKK uyumlu veri akışı.',
      tags: ['KVKK', 'API', 'Rol bazlı erişim'],
    },
    contact: 'İletişim',
  },
  inspectionModules: {
    eyebrow: 'Denetim Modülleri',
    title: 'Modüle tıklayın —',
    titleHighlight: 'ne yapıyoruz, ne kazanırsınız',
    description:
      'Her modülde saha tarafını ve iş sonucunu ayrı ayrı görün. İsterseniz tek modülle başlayıp zamanla genişletin.',
    expandOpen: 'Detayı gizle',
    expandClosed: 'Ne yapıyoruz · Ne katıyoruz — tıkla',
    whatWeDo: 'Ne yapıyoruz?',
    valueAdd: 'Size ne katıyoruz?',
    modules: [
      {
        title: 'Personel Denetimleri',
        desc: 'Sahada kim, nerede, ne yapıyor — vardiya ve alan kurallarına uyum otomatik izlenir.',
        metric: '7/24 izleme',
        whatWeDo: [
          'Kamera görüntüsünden personel konumu ve hareket analizi',
          'Yetkisiz bölge ve vardiya dışı alan girişi tespiti',
          'Görev alanına uyum ve süre takibi',
          'Olayları zaman damgalı kayıt altına alma',
        ],
        valueAdd: [
          'Manuel devriye ve kağıt denetim maliyetini düşürür',
          'İhlalleri anında görünür kılar — vardiya sonuna kalmaz',
          'Disiplin ve süreç uyumunu ölçülebilir hale getirir',
        ],
      },
      {
        title: 'İSG Denetimleri',
        desc: 'KKD ve iş güvenliği kuralları 7/24 izlenir; ihlal anında raporlanır.',
        metric: 'Anlık uyarı',
        whatWeDo: [
          'Baret, yelek, maske ve eldiven kullanım kontrolü',
          'Tehlikeli bölge ihlali ve yasak alan girişi uyarısı',
          'Denetim ve iş kazası öncesi kanıt görüntüsü saklama',
          'İSG sorumlusuna anlık bildirim (panel / entegrasyon)',
        ],
        valueAdd: [
          'İş kazası ve ceza riskini azaltır',
          'OSHA / yerel İSG denetimlerine hazırlık kolaylaşır',
          'Saha güvenlik kültürünü veriyle destekler',
        ],
      },
      {
        title: 'Kalite Kontrol',
        desc: 'Hat üzerinde kusur ve sapma anlık yakalanır; fire sahada ayrılır.',
        metric: '0.1–0.3 sn',
        whatWeDo: [
          'Görüntü işleme ile yüzey, montaj ve boyut sapması tespiti',
          'Otomatik OK / red kararı ve hat durdurma entegrasyonu',
          'Hata tipi ve sıklığı raporlama',
          'Kalite trend grafikleri ve vardiya bazlı analiz',
        ],
        valueAdd: [
          'Fire ve hurda maliyetini düşürür',
          'Müşteri şikayetlerini üretimde keser',
          'Kalite ekibinin tekrarlayan kontrol yükünü azaltır',
        ],
      },
      {
        title: 'Personel Verimliliği',
        desc: 'Aktif çalışma ve hat performansı ölçülür; yönetim net KPI görür.',
        metric: 'Ölçülebilir KPI',
        whatWeDo: [
          'Aktif çalışma vs bekleme süresi ayrımı',
          'İstasyon ve hat bazlı performans skorları',
          'Vardiya ve ekip karşılaştırması',
          'Hedef–gerçekleşen KPI paneli',
        ],
        valueAdd: [
          'Gizli kapasite kayıplarını ortaya çıkarır',
          'Prim ve vardiya planlamasını veriye dayandırır',
          'Fabrika müdürü için tek ekran özeti',
        ],
      },
      {
        title: 'Boşta Kalma Süreleri',
        desc: 'Idle süre ve kayıp zaman görünür; müdahale hızlanır.',
        metric: 'Kayıp zaman −%',
        whatWeDo: [
          'Personel ve hat boşta kalma (idle) süresi ölçümü',
          'Plansız duraklama ve bekleme analizi',
          'Kayıp zaman ısı haritası ve alarm eşikleri',
          'Haftalık verimlilik kaybı raporu',
        ],
        valueAdd: [
          'Ölçülmeyen kayıp saatleri para kaybı olmaktan çıkar',
          'Darboğaz hatları net gösterir',
          'OEE iyileştirme projelerine somut başlangıç verir',
        ],
      },
      {
        title: 'Makine & Hat Verimliliği',
        desc: 'Duruş, çalışma oranı ve OEE tek panelde takip edilir.',
        metric: 'Canlı panel',
        whatWeDo: [
          'Hat durumu: çalışıyor / durdu / bakım',
          'Makine ve üretim hızı ile senkron görüntü',
          'OEE bileşenlerinin canlı takibi',
          'ERP / MES ile olay senkronizasyonu',
        ],
        valueAdd: [
          'Plansız duruş süresini kısaltmaya yardımcı olur',
          'Üretim planı ile saha gerçeğini hizalar',
          'Yönetim kuruluna anlık operasyonel görünürlük',
        ],
      },
    ],
    ctaTitle: 'Hangi modüller tesisinize uygun?',
    ctaDesc: 'Keşif görüşmesinde modül modül senaryonuzu birlikte netleştiriyoruz.',
    contact: 'İletişim',
  },
  audience: {
    eyebrow: 'Kimler için?',
    title: 'Ekibiniz için',
    titleHighlight: 'Hype Vision',
    description: 'Sorununuz → çözüm → sahadaki aksiyon. Her rol için net, ölçülebilir değer.',
    problem: 'Sorununuz',
    solution: 'Hype Vision',
    action: 'Sahada ne olur?',
    audiences: [
      {
        role: 'Fabrika Müdürü',
        pain: 'Saha gerçeğini vardiya sonunda öğreniyorsunuz; OEE, duruş ve idle kayıpları geç raporlanıyor.',
        solution:
          'Hype Vision tek panelde verimlilik, duruş, kalite ve İSG özetini canlı sunar. Karar vardiya içinde verilir.',
        action:
          'OEE ve idle metriklerini vardiya içinde görün; yönetim kuruluna net KPI gönderin.',
        tags: ['OEE & duruş', 'Vardiya KPI', 'Tek ekran'],
      },
      {
        role: 'İSG Sorumlusu',
        pain: 'KKD ve bölge ihlalleri örneklemeli denetimle kalıyor; iş kazası riski geç fark ediliyor, kanıt zayıf.',
        solution:
          '7/24 KKD ve tehlikeli alan analizi; ihlal anında alarm + zaman damgalı kanıt görüntüsü.',
        action:
          'İhlal anında VMS popup, WhatsApp bildirimi veya saha sireni — müdahale vardiya içinde.',
        tags: ['KKD tespiti', 'VMS popup', 'IoT tetikleme'],
      },
      {
        role: 'Kalite Mühendisi',
        pain: 'Fire birikiyor, manuel kontrol yoruluyor; hata müşteriye veya son montaja kadar gizli kalıyor.',
        solution:
          'Hat içi 0.1–0.3 sn hata tespiti; OK/red, hata tipi trendi ve vardiya raporu.',
        action: 'Hat içi otomatik red ve fire ayrımı — müşteri şikayetine ulaşmadan durdurun.',
        tags: ['Anlık tespit', 'OK / red', 'Fire azaltma'],
      },
    ],
    cta: 'Bize ulaşın',
  },
  problemSolution: {
    eyebrow: 'Neden hâlâ oluyor?',
    title: 'Gecikmiş göstergeler ve manuel yöntemler',
    titleHighlight: 'tesisi modernleştiremez.',
    pains: [
      {
        title: 'Manuel denetim kritik riski kaçırır',
        desc: 'Kağıt İSG denetimi, checklist ve örneklemeli saha turu ciddi ihlalleri göremez. Vardiya sonunda öğrenilen kaza, önlenememiş kaza demektir.',
      },
      {
        title: 'Göremediğinizi önleyemezsiniz',
        desc: 'İSG ekipleri çok çalışır; ama gerçek zamanlı görünürlük olmadan gizli riskler fire, idle kaybı ve iş kazasına dönüşür. Hep bir adım geridesiniz.',
      },
    ],
    withHype: 'Hype Vision ile',
    headline1: 'İnsan denetimi',
    headlineHighlight: 'ölçeklenmez.',
    headline2: 'Yapay zeka ölçeklenir.',
    description:
      'Görüntüyü anlamlandırılmış veriye çeviririz: alarm, metrik, kanıt. Vardiya içinde müdahale; maliyet, risk ve fire düşer.',
    allModules: 'Tüm denetim modülleri →',
    contact: 'İletişim',
    areas: [
      {
        title: 'İSG Denetimleri',
        desc: 'Baret, yelek, maske ve tehlikeli bölge ihlalleri 7/24 izlenir. İnsan denetimi yerine sürekli, kanıt üreten AI gözetimi.',
        highlight: 'KKD & bölge',
        tags: ['İSG denetimi', 'İhlal uyarısı'],
      },
      {
        title: 'Personel & Verimlilik',
        desc: 'Personel denetimleri, çalışma süreleri, verimlilik ve boşta kalma süreleri otomatik ölçülür — kayıp zaman görünür olur.',
        highlight: 'Boşta kalma',
        tags: ['Personel denetimi', 'Verimlilik KPI'],
      },
      {
        title: 'Kalite Kontrol',
        desc: 'Hat üzerinde anlık hata tespiti; fire ve hurda insan yorgunluğuna ve geç müdahaleye bağlı kalmaz.',
        highlight: 'Anlık tespit',
        tags: ['Kalite kontrol', 'Fire azaltma'],
      },
      {
        title: 'Güvenlik & Tesis',
        desc: 'Şüpheli hareket, yetkisiz giriş-çıkış ve anormal durumlar 7/24 bildirilir.',
        highlight: '7/24 alarm',
        tags: ['Güvenlik', 'Anomali'],
      },
    ],
  },
  howItWorks: {
    eyebrow: 'Nasıl çalışır?',
    title: '4 adımda',
    titleHighlight: 'kameradan aksiyona',
    description: 'Kurulum tesis içi (Edge) veya bulut olabilir — keşif sonrası netleşir.',
    imageAlt: 'Hype Vision akış şeması — kamera, AI analiz, panel ve aksiyon',
    flow: [
      { label: 'Bağlan', short: 'Mevcut IP kameralarınız tanınır', detail: 'Marka fark etmez. Yeni kamera almanız gerekmez.' },
      { label: 'Analiz et', short: 'Yapay zeka görüntüyü okur', detail: 'İSG, kalite veya verimlilik — seçtiğiniz modül.' },
      { label: 'Panel', short: 'Sonuç tek ekrana düşer', detail: 'Alarm, sayaç, kanıt görüntüsü — Excel değil.' },
      { label: 'Aksiyon', short: 'Ekip anında haberdar olur', detail: 'WhatsApp, VMS popup veya saha sireni.' },
    ],
    cards: [
      { title: 'Ne kadar sürer?', text: 'Pilot kurulum genelde', bold: '3–5 iş günü', suffix: '.' },
      { title: 'Hangi kameralar?', text: 'RTSP / ONVIF uyumlu IP kameralar.' },
      { title: 'IT yükü?', text: 'Mevcut altyapı kullanılır; modüler başlangıç mümkün.' },
    ],
    ctaTitle: 'Sahadaki görüntüyü birlikte konuşalım',
    ctaDesc: 'Formu doldurun veya doğrudan arayın.',
    contact: 'İletişim',
  },
  valueImpact: {
    eyebrow: 'İş değeri',
    title: 'Sadece teknoloji değil —',
    titleHighlight: 'ölçülebilir kazanç',
    description:
      'Hype Vision, mevcut kameralarınızla çalışır; tesisinize maliyet, risk, hız ve yönetim görünürlüğü katar.',
    impacts: [
      {
        title: 'Maliyet kontrolü',
        points: [
          'Fire, hurda ve idle süre kaybını görünür kılar',
          'Manuel denetim ve devriye yükünü azaltır',
          'Yanlış üretimi hat içinde durdurur',
        ],
      },
      {
        title: 'Risk ve uyum',
        points: [
          'İSG ihlallerinde anlık uyarı ve kanıt',
          'İş kazası ve ceza riskini düşürme',
          'Denetimlere hazır rapor arşivi',
        ],
      },
      {
        title: 'Operasyonel hız',
        points: [
          'Kararlar vardiya içinde verilir',
          'ERP / MES ile senkron veri akışı',
          '3–5 günde modüler canlıya alma',
        ],
      },
      {
        title: 'Ölçülebilir yönetim',
        points: [
          'Fabrika müdürü için tek panel',
          'KPI: verimlilik, kalite, İSG, idle',
          'Vardiya ve hat bazlı karşılaştırma',
        ],
      },
    ],
    compareEyebrow: 'Karşılaştırma',
    compareTitle: 'İnsan denetimi',
    compareVs: 'vs',
    compareHighlight: 'Hype Vision',
    compareDesc: 'Aynı tesis, aynı hat — fark süreklilik, hız ve ölçülebilirlikte.',
    traditional: 'Geleneksel',
    humanInspection: 'İnsan denetimi',
    humanSub: 'Örneklemeli, yorulur, geç kalır',
    ai: 'Yapay zeka',
    hypeVision: 'Hype Vision',
    hypeSub: '7/24, kanıtlı, anlık müdahale',
    rows: [
      {
        dimension: 'Kapsam',
        human: 'Örneklemeli kontrol — tüm hat görülmez',
        humanNote: 'Vardiya başı / sonu, belirli saatler',
        ai: '7/24, her kamera karesi',
        aiNote: 'İnsan yorulmadan sürekli izleme',
      },
      {
        dimension: 'İSG & KKD',
        human: 'Baret / yelek kontrolü kaçırılabilir',
        humanNote: 'İhlal sonradan fark edilir',
        ai: 'Anlık ihlal uyarısı + kanıt görüntüsü',
        aiNote: 'Denetim ve iş kazanı öncesi müdahale',
      },
      {
        dimension: 'Kalite',
        human: 'Göz yorgunluğu, geç tespit',
        humanNote: 'Fire birikir, müdahale gecikir',
        ai: '0.1–0.3 sn hat içi tespit',
        aiNote: 'OK / red, otomatik ayırma',
      },
      {
        dimension: 'Kayıt',
        human: 'Kağıt, Excel, hafıza',
        humanNote: 'Denetimde kanıt zayıf',
        ai: 'Zaman damgalı dijital arşiv',
        aiNote: 'Olay + görüntü tek panelde',
      },
      {
        dimension: 'Müdahale',
        human: 'Vardiya sonunda öğrenilir',
        humanNote: 'Kayıp saatler geri dönülmez',
        ai: 'Anlık alarm ve panel bildirimi',
        aiNote: 'ERP / MES ile senkron opsiyon',
      },
      {
        dimension: 'Maliyet & ölçek',
        human: 'Sürekli iş gücü ve devriye',
        humanNote: 'Hat sayısı arttıkça maliyet artar',
        ai: 'Mevcut kamera + modüler AI',
        aiNote: 'Yeni kamera şart değil',
      },
    ],
    humanResult: 'Sonuç:',
    humanResultText: 'Darboğaz insan kapasitesi; veri geç ve parçalı gelir.',
    aiResult: 'Sonuç:',
    aiResultText: 'Sürekli denetim, anlık alarm, tek panelde KPI.',
    footnote:
      'İnsan denetimi tamamen kalkmaz — kritik kararlar yönetimde; rutin ve sürekli kontrol AI’ya devredilir.',
  },
  useCases: {
    eyebrow: 'Sektör Sonuçları',
    title: 'Sektörünüzü seçin —',
    titleHighlight: 'sorun, çözüm, sonuç',
    description:
      'Aynı platform; farklı hat gerçekleri. Her vakada mevcut kameralar, modüler kurulum ve ölçülebilir iş sonucu.',
    tablist: 'Sektör seçimi',
    challengeTitle: 'Sektördeki sorun',
    approachTitle: 'Hype Vision ile',
    outcomeTitle: 'Ölçülen sonuç',
    sectors: {
      elektronik: {
        category: 'Elektronik & PCB',
        tagline: 'Fire’yi hat içinde durdurun, manuel kontrol yükünü kaldırın',
        challenge: [
          'Komponent ve lehim hataları geç fark ediliyor, fire birikiyor',
          'Manuel AOI / görsel kontrol darboğaz ve yorgunluk kaynağı',
          'Vardiya sonunda öğrenilen hata — müdahale geç kalıyor',
        ],
        approach: [
          'Mevcut hat kameralarına kalite modülü — yeni kamera şart değil',
          '0.1 sn görüntü analizi; OK / red ve hat durdurma entegrasyonu',
          'Hata tipi, sıklık ve vardiya trendi tek panelde',
        ],
        outcomeSummary:
          'Fire oranı düşer, çıkış kalitesi sabitlenir; kalite ekibi tekrarlayan kontrol yerine kök neden analizine odaklanır.',
        stats: [
          { value: '%22', label: 'Fire azalması', hint: '6 ay pilot' },
          { value: '0.1 sn', label: 'Tespit süresi' },
          { value: '50K+', label: 'Parça / gün' },
        ],
        modules: ['Kalite Kontrol', 'Hat Verimliliği', 'Boşta Kalma'],
      },
      otomotiv: {
        category: 'Otomotiv & Yan Sanayi',
        tagline: 'Hatalı parçayı sevkiyattan önce ayırın, geri dönüş maliyetini kesin',
        challenge: [
          'Boyut ve montaj sapması müşteriye veya son montaja kadar gizli kalıyor',
          'Geri dönüş, hurda ve itibar maliyeti yüksek',
          'İSG ve kalite denetimleri ayrı süreçlerde, veri parçalı',
        ],
        approach: [
          'Parça bazlı otomatik red; ERP / MES ile olay senkronu',
          'İSG modülü ile KKD ve tehlikeli bölge aynı altyapıda',
          'Tedarikçi hatlarında modüler devreye alma (3–5 gün)',
        ],
        outcomeSummary:
          'Sevkiyat öncesi hata yakalanır; hurda ve geri çağırma riski düşer, denetim için dijital kanıt arşivi oluşur.',
        stats: [
          { value: '%95', label: 'Tespit doğruluğu' },
          { value: '0.2 sn', label: 'Kontrol hızı' },
          { value: '100K+', label: 'Parça / gün' },
        ],
        modules: ['Kalite Kontrol', 'İSG Denetimleri', 'Personel Denetimi'],
      },
      tekstil: {
        category: 'Tekstil & Konfeksiyon',
        tagline: 'Kumaş fire’sini ruloda değil, üretimde görün',
        challenge: [
          'Renk, dikiş ve kumaş hataları metrelerce üretildikten sonra fark ediliyor',
          'Fire maliyeti sipariş marjını eritiyor',
          'Personel verimliliği ve makine duruşu ölçülemiyor',
        ],
        approach: [
          'Hat kamerasında anlık kusur tespiti ve alarm',
          'Metre bazlı fire ve vardiya raporu',
          'Boşta kalma ve makine duruşu ile kayıp zaman analizi',
        ],
        outcomeSummary:
          'Fire erken kesilir, teslim riski azalır; fabrika müdürü vardiya bazlı kalite ve verimlilik KPI’sını tek ekranda görür.',
        stats: [
          { value: '%94', label: 'Kalite skoru' },
          { value: '0.3 sn', label: 'Tespit' },
          { value: '200K+', label: 'Metre / gün' },
        ],
        modules: ['Kalite Kontrol', 'Boşta Kalma', 'Makine Verimliliği'],
      },
      metal: {
        category: 'Metal, Plastik & Makine',
        tagline: 'Duruş, İSG ve kaliteyi aynı panelden yönetin',
        challenge: [
          'Plansız makine duruşu ve OEE kaybı geç raporlanıyor',
          'Pres / kaynak hatlarında İSG ihlali örneklemeli denetimle kalıyor',
          'Kalite ve güvenlik verileri Excel’de dağınık',
        ],
        approach: [
          'Makine çalışma / duruş ve hat hızı canlı izleme',
          'KKD ve bölge ihlali anlık uyarı + kanıt görüntüsü',
          'OEE bileşenleri ve kalite olayları tek dashboard',
        ],
        outcomeSummary:
          'Duruş süresi kısalır, İSG riski görünür olur; yönetim operasyonel gerçeği vardiya içinde görür.',
        stats: [
          { value: '−%18', label: 'Idle süre', hint: '3 ay' },
          { value: '7/24', label: 'İSG izleme' },
          { value: 'Canlı', label: 'OEE paneli' },
        ],
        modules: ['İSG Denetimleri', 'Makine Verimliliği', 'Personel Verimliliği'],
      },
    },
    ctaTitle: 'Sektörünüz listede yok mu?',
    ctaDesc:
      'Gıda, kimya, lojistik ve daha fazlasında aynı modüllerle çalışıyoruz — keşif görüşmesinde tesisinize özel senaryo konuşuyoruz.',
    contact: 'İletişim',
  },
  platformOverview: {
    eyebrow: 'Saha deneyimi',
    title: "Türkiye'de üretim tesislerinde",
    titleHighlight: 'ölçülebilir sonuçlar',
    description:
      "2020'den beri endüstriyel görüntü işleme — farklı sektörlerde saha projeleri ve pilot kurulumlar. İsim paylaşmadan, tipik sonuç aralıkları:",
    cta: 'Tesisinize özel senaryo',
    outcomes: [
      { sector: 'Otomotiv yan sanayi', metric: '%22 fire düşüşü', note: '6 aylık kalite modülü pilotu' },
      { sector: 'Elektronik & PCB', metric: '0.1 sn tespit', note: 'Hat içi hata ayırma' },
      { sector: 'Tekstil üretimi', metric: '−%18 idle süre', note: 'Vardiya verimlilik takibi' },
      { sector: 'Metal & makine', metric: '7/24 İSG izleme', note: 'KKD ihlali anlık alarm' },
    ],
    steps: [
      { step: '01', title: 'Keşif & kamera eşleştirme', desc: 'Sahadaki kameralarınız ve hatlarınız haritalanır. Marka fark etmez.' },
      { step: '02', title: 'Modül kurulumu', desc: 'İSG, kalite veya verimlilik — ihtiyacınız olan modüller devreye alınır.' },
      { step: '03', title: 'Canlı panel & uyarılar', desc: 'Alarm, rapor ve kanıt görüntüsü tek ekranda; ERP bağlantısı opsiyonel.' },
      { step: '04', title: 'Destek & iyileştirme', desc: 'Ekip eğitimi, eşik ayarları ve yeni hat ekleme desteği.' },
    ],
    sectorsLabel: 'Hizmet verilen sektörler',
    sectors: ['Elektronik', 'Otomotiv', 'Tekstil', 'Gıda', 'Kimya', 'Savunma', 'Metal', 'Ambalaj'],
    footnote: '2+ yıllık saha deneyimi · modüler kurulum · keşif görüşmesi ile tesisinize özel senaryo',
  },
  finalCta: {
    eyebrow: 'İletişim',
  },
  faq: {
    eyebrow: 'Sık Sorulan Sorular',
    title: 'Genel, teknik ve',
    titleHighlight: 'kurulum',
    description:
      'Hype Vision platformu hakkında en çok sorulan sorular — kamera, KVKK, Edge/Cloud, lisans ve API.',
    searchPlaceholder: 'SSS içinde ara...',
    noResults: 'Sonuç bulunamadı.',
    notFound: 'Cevabını bulamadınız mı?',
    email: 'info@hypevisionlab.com',
  },
  blog: {
    eyebrow: 'Vaka notları',
    title: 'Sahadan anonim',
    titleHighlight: 'sonuç hikâyeleri',
    description:
      'Müşteri adı paylaşılmadan, sektör ve ölçülebilir sonuçlarla gerçek saha deneyimleri.',
    readMore: 'Devamını oku',
  },
};
