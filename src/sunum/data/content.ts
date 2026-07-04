export type Slide = {
  index: number;
  title: string;
  subtitle?: string;
};

export type Deck = {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  slideCount: number;
  sourceFile?: string;
  pptxUrl?: string;
  /** Canva view/edit URL — varsa embed ile gösterilir (PPTX yerine) */
  canvaUrl?: string;
  slides: Slide[];
  ready: boolean;
};

export type Insight = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type VideoCategory = 'isg' | 'yangin' | 'verimlilik' | 'custom';

export type VideoDemo = {
  id: string;
  category: VideoCategory;
  title: string;
  subtitle: string;
  /** Google Drive file ID veya tam paylaşım linki — video her zaman Drive'dan oynatılır */
  driveFileId?: string;
  /** Aynı proje için birden fazla kamera açısı */
  driveFileIds?: string[];
  driveUrl?: string;
  insights: Insight[];
};

export const videoCategoryMeta: Record<
  VideoCategory,
  { label: string; title: string; description: string; accent: string }
> = {
  isg: {
    label: 'İSG',
    title: 'İş güvenliği demoları',
    description:
      'KKD uyumu, tehlikeli bölge ihlali ve dijital kanıt arşivi — sahadan gerçek kayıtlar ve teknik çıkarımlar.',
    accent: 'border-amber-400/30 bg-amber-50 text-amber-800',
  },
  yangin: {
    label: 'YANGIN',
    title: 'Erken yangın algılama ve afet yönetimi',
    description:
      '10x10 piksel alev tespiti, yangın paneli entegrasyonu, çok kanallı alarm ve itfaiye yönlendirme — klasik sensörlerden önce.',
    accent: 'border-red-400/30 bg-red-50 text-red-800',
  },
  verimlilik: {
    label: 'VERİMLİLİK',
    title: 'Üretim ve operasyon demoları',
    description:
      'OEE, hat duruşu, döngü süresi, personel ve ürün takibi — ölçülebilir verimlilik metrikleriyle saha kanıtı.',
    accent: 'border-vision/25 bg-vision-50 text-vision-dark',
  },
  custom: {
    label: 'CUSTOM',
    title: 'Özel proje demoları',
    description:
      'Müşteriye özel pilot kurulumlar, entegrasyon senaryoları ve sektöre özel görüntü işleme çözümleri.',
    accent: 'border-violet-400/25 bg-violet-50 text-violet-800',
  },
};

export const decks: Deck[] = [
  {
    id: 'mes',
    title: 'MES Çözümü',
    subtitle: 'Üretim yürütme, OEE, hat verimliliği ve operasyonel görünürlük',
    tag: 'MES',
    slideCount: 8,
    sourceFile: 'hype_mes_solution kopyası.pptx',
    pptxUrl: './decks/mes.pptx',
    canvaUrl: 'https://www.canva.com/design/DAHFOS4XNPw/OpWdqA2hnDNF3PJtomVjYQ/view',
    ready: true,
    slides: [
      { index: 1, title: 'Giriş', subtitle: 'Hype Vision MES platformu' },
      { index: 2, title: 'Sorun', subtitle: 'Manuel takip ve gecikmeli veri' },
      { index: 3, title: 'Çözüm mimarisi', subtitle: 'Edge + mevcut kameralar' },
      { index: 4, title: 'Modüller', subtitle: 'OEE, idle, kalite, alarm' },
      { index: 5, title: 'Canlı panel', subtitle: 'Vardiya bazlı KPI' },
      { index: 6, title: 'Entegrasyon', subtitle: 'ERP / MES API' },
      { index: 7, title: 'Pilot süreci', subtitle: 'Keşif → kurulum → rapor' },
      { index: 8, title: 'Sonuç', subtitle: 'Ölçülebilir verimlilik kazancı' },
    ],
  },
  {
    id: 'isg',
    title: 'İSG Denetimi',
    subtitle: 'KKD, tehlikeli bölge, yangın ve dijital kanıt arşivi',
    tag: 'İSG',
    slideCount: 20,
    sourceFile: 'hype_ohs_solutions kopyası.pptx',
    pptxUrl: './decks/isg.pptx',
    canvaUrl: 'https://www.canva.com/design/DAHFOXDjpKY/pTnU67XUX6wjYZzI39-cQA/view',
    ready: true,
    slides: Array.from({ length: 20 }, (_, i) => ({
      index: i + 1,
      title: `Slayt ${i + 1}`,
      subtitle: 'İSG çözüm sunumu',
    })),
  },
];

export const videoDemos: VideoDemo[] = [
  {
    id: 'rampa-takip',
    category: 'verimlilik',
    title: 'Araç Algılama ve Rampa Takibi',
    subtitle: 'Lojistik rampasında araç varışı, bekleme süresi, personel ve ürün sayımı',
    driveFileId: '1AeD2BvLSXp685iDEIoWlAuweE7o_ihsd',
    insights: [
      {
        id: 'arac-algilama',
        title: '1. Araç Algılama ve Rampa Takibi',
        paragraphs: [
          'Yöntem: Görseldeki sarı çizgilerle belirlenmiş alan (ROI — Region of Interest) yükleme bölgesini temsil eder. Araç bu sınıra girdiğinde sistem "Araç Geldi" lojistiğini tetikler.',
          'Kaç dakika durdu? Araç sarı alana girdiği an sistem zaman damgası (Tbaşlangıç) alır. Araç alandan ayrıldığında (Tbitiş) süresi ölçülerek Toplam Kalış Süresi otomatik hesaplanır.',
        ],
      },
      {
        id: 'personel-sayim',
        title: '2. Personel ve Ürün Sayımı (Sayaç: 18)',
        paragraphs: [
          'Personel tespiti: Sistem personeli yeşil kutu (bounding box) içerisine alarak %86 doğruluk oranıyla (Person: 86%) anlık olarak takip etmektedir.',
          'Kaç tane ürün koydu? Ekranın alt orta kısmındaki "SAYAÇ: 18" ibaresinden anlaşılacağı üzere, personel o ana kadar kamyona tam 18 adet ürün yüklemiştir. Sağ üst köşede güncel olarak ÜRÜN #18 takibi yapılmaktadır.',
        ],
      },
      {
        id: 'dongu-suresi',
        title: '3. Ürün Başına İşlem Süresi (Döngü Süresi)',
        paragraphs: [
          'Sol üstteki "ÜRÜN ZAMANLARI" tablosuna göre her bir ürünün yüklenme hızı milisaniye hassasiyetinde ölçülmektedir.',
          'Şu an yüklenmekte olan 18. ürün için geçen net süre 0.84 saniye olarak ölçülmüştür. Bu veri, operasyonel verimlilik ve personel performans analizi için kritik bir metriktir.',
        ],
      },
      {
        id: 'tamamlandi',
        title: '4. Yükleme Ne Zaman Tamamlandı?',
        paragraphs: [
          'Personel ürün koymayı bıraktığında (sayaç artışı durduğunda) ve araç sarı çizgili güvenli bölgeyi terk ettiğinde sistem yükleme sürecini "Tamamlandı" olarak işaretler.',
          'Kesin bitiş saati veritabanına kaydedilir; sevkiyat mutabakatı ve lojistik raporlama için dijital kanıt oluşur.',
        ],
      },
    ],
  },
  {
    id: 'tekstil-dikim-verimlilik',
    category: 'verimlilik',
    title: 'Tekstil Dikim Hattı — Personel Davranış ve Varlık Takibi',
    subtitle: 'Dikiş dikme vs. dikilmeyen süre · alanda bulunmama ve istasyon doluluk analizi',
    driveFileId: '1vaKQQ6duCEYj4LacNl_TlPOgC4VlIG6l',
    insights: [
      {
        id: 'dikim-varlik',
        title: '1. Personel Davranış ve Varlık Takibi (Oturma / Ayakta Kalma)',
        paragraphs: [
          'Alanda bulunmama süresi (absenteeism): Operatörlerin istasyon başında fiziksel olarak bulunmadığı süreler anlık loglanır — örn. alt istasyonda 123 sn, sol üst istasyonda 155 sn. Malzeme tedarik aksamaları, hat dengeleme problemleri ve mola dışı istasyon terki bu veriyle analiz edilir.',
          'İstasyon başı toplam süre: Operatörlerin dikim masasında geçirdiği toplam süre (ör. 98 ve 66 sn) ölçülerek hat doluluk performansı hesaplanır.',
        ],
      },
      {
        id: 'dikim-operasyon',
        title: '2. İstasyon ve Operasyon Verimliliği (Dikiş Dikme vs. Dikmeme Süresi)',
        paragraphs: [
          'Dikiş dikme süresi (katma değerli zaman): Operatörün kumaşı iğnenin altına yerleştirip makineyi aktif çalıştırdığı net üretim süresi (ör. alt istasyonda 6 sn, sağ istasyonda 104 sn) — doğrudan OEE performans puanını belirler.',
          'Dikiş dikilmeyen süre (katma değersiz / boşta kalma): Personel masada oturduğu halde makinenin çalışmadığı süre (ör. alt istasyonda 215 sn, sağ istasyonda 117 sn) — kumaş katlama, parça eşleştirme, ip değişimi gibi mikro-kayıp süreçleri deşifre eder.',
        ],
      },
      {
        id: 'dikim-darbogaz',
        title: '3. Proje Çıkarımları ve Darboğaz Analizi',
        paragraphs: [
          'İstasyonlar arası denge kaybı: Sağ istasyon dikiş sürecinde uzun süre aktif kalırken (104 sn), sol taraftaki istasyonların düşük dikim süreleri (6 ve 1 sn) hat üzerinde operasyonel dengesizlik ve darboğaz arkası bekleme sinyali verir.',
          'Ergonomi ve iş süreci optimizasyonu: Pose Estimation ile oturuş ergonomisi ve el hareketleri izlenir; yüksek dikilmeyen süreleri düşürmek için ön hazırlık aparatları veya lojistik destek personeli önerilir.',
        ],
      },
      {
        id: 'dikim-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Tekstil dikim hattında performansı tahmini standart sürelerle değil, makine ve personelin saniye bazlı dijital etkileşimiyle ölçüyoruz. Operatörlerin ne kadar süre dikiş diktiğini (104 sn), ne kadar boşta kaldığını (215 sn) ve istasyon dışına çıktığını (155 sn) anlık analiz ederek konfeksiyon hatlarındaki gizli zaman kayıplarını ortadan kaldırıyoruz.',
        ],
      },
    ],
  },
  {
    id: 'utu-paketleme-verimlilik',
    category: 'verimlilik',
    title: 'Ütü ve Paketleme İstasyonları — Sayım ve Verimlilik Analizi',
    subtitle: 'Otomatik sayaç · ütü yapma vs. boşta kalma süresi ve darboğaz tespiti',
    driveFileId: '1v6ITYXbX18Rr_Rm30wxLEBgnoDSHejdU',
    insights: [
      {
        id: 'utu-sayim',
        title: '1. Ütü ve Paketleme İstasyonları Sayım Mekanizması',
        paragraphs: [
          'Yapay zeka modeli her ütü masasından çıkan ve paketlemeye gönderilen bitmiş ürünleri insan hatasından arındırılmış şekilde tek tek sayar.',
          'İstasyon çıktı takibi: Üst istasyon Sayım: 98, sağ alt Sayım: 104, sol alt Sayım: 1 — gün/vardiya sonunda hangi masanın kaç adet ürünü ütüleyip paketlemeye hazır hale getirdiği net belgelenir.',
        ],
      },
      {
        id: 'utu-sure',
        title: '2. Ütüleme Süresi vs. Boşta Kalma Süresi Analizi',
        paragraphs: [
          'Ütü yapma süresi (active ironing time): Operatörün fiziksel olarak ürünü ütülediği katma değerli süre (ör. sağ altta 66 sn) — ürün başına standart ütüleme KPI uyumluluğunu ölçer.',
          'Ütü yapılmayan süre (idle / hazırlık): Personel masada olduğu halde ütünün çalışmadığı süre (ör. sağ altta 117 sn) — askıdan alma, serme, katlama ve poşete yerleştirme gibi ara süreçlerin zaman kaybını gösterir.',
        ],
      },
      {
        id: 'utu-darbogaz',
        title: '3. Hat Darboğaz ve Devamsızlık Analizi',
        paragraphs: [
          'Alanda bulunulmayan süre: Operatörlerin istasyonu terk ettiği veya lojistik beklediği süreler ölçülür (üst istasyonda 155 sn, sol altta 123 sn).',
          'Darboğaz çıkarımı: Sol alt istasyonun sadece 1 ürün yapması ve 123 sn alanda bulunmaması, dikimhaneden/yıkamadan ürün gelmediğini veya ciddi hat dengeleme problemi olduğunu kanıtlar.',
        ],
      },
      {
        id: 'utu-aksiyon',
        title: '4. Süreç Optimizasyonu İçin Aksiyon Planı',
        paragraphs: [
          'Ütü/paketleme ayrımı: Ütü yapılmayan süreleri düşürmek için ütü biten ürünün direkt arkadaki paketleme personeline aktarılacağı akış bandı tasarımı kurgulanmalıdır.',
          'Besleme yönetimi: Düşük sayımlı masaların boşta kalmasını engellemek için dikimden çıkan ürünlerin masalara homojen dağıtılacağı ara stok (WIP) yönetim modeli planlanmalıdır.',
        ],
      },
      {
        id: 'utu-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Ütü ve paketleme hattında her masanın çıktısını, ütüleme süresini ve boşta kalma oranını saniye bazında ölçüyoruz. Düşük sayımlı istasyonları ve tedarik zinciri kopukluklarını anında tespit ederek hat dengeleme ve WIP yönetimi kararlarını veriyle destekliyoruz.',
        ],
      },
    ],
  },
  {
    id: 'tekstil-kpi-dikim',
    category: 'verimlilik',
    title: 'Dijital Tekstil Hattı — Dikiş Süreleri ve KPI Başarı Analizi',
    subtitle: 'İstasyon bazlı OEE · cycle time uyumu, idle time ve absenteeism skoru',
    driveFileId: '1AbBNkPv9PeQUKXNfxelX4_HHZNgQeH1g',
    insights: [
      {
        id: 'kpi-karsilastirma',
        title: '1. İstasyon Bazlı KPI ve Performans Karşılaştırması',
        paragraphs: [
          'Masa 1 (yüksek KPI %90.4): Operatör 420 dk alanda, 380 dk aktif dikiş, 40 dk boşta kalma; ürün başına 3.1 dk ortalama süre ile hedef KPI\'a yakın verimlilik.',
          'Masa 2 (geliştirilmesi gereken %82.9): 410 dk alanda, 340 dk aktif dikiş, 70 dk boşta kalma; ürün başına 3.5 dk ile KPI hedefinin altında.',
        ],
      },
      {
        id: 'kpi-metrikler',
        title: '2. Dikiş Süreçlerinde Takip Edilen Temel KPI Metrikleri',
        paragraphs: [
          'OEE (Toplam Ekipman/İstasyon Etkinliği): Aktif çalışma süresi / toplam süre formülüyle masanın vardiya boyunca ne kadar efektif kullanıldığı ölçülür.',
          'Çevrim süresi standart uyumu: Ürün başına harcanan sürenin fabrika reçete süresine yakınlığı; kayıp zaman oranı (idle time rate) ve devamsızlık/hat terk skoru (Pose ile absenteeism) raporlanır.',
        ],
      },
      {
        id: 'kpi-aksiyon',
        title: '3. KPI Çıktılarına Göre Süreç Planlama ve Aksiyon Yönetimi',
        paragraphs: [
          'Nokta atışı eğitim: Masa 2 işlem süresi (3.5 dk) Masa 1\'den (3.1 dk) uzun — dikiş tekniği veya parça yerleştirmede destek/eğitim ihtiyacı sinyali.',
          'Darboğaz önleme ve teşvik: %90 verimlilik barajını aşan istasyonlar teşvik sistemine dahil edilir; geride kalan masaların 70 dk boşta kalma nedeni (malzeme, arıza) logdan incelenerek hat duruşları önlenir.',
        ],
      },
      {
        id: 'kpi-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Tekstil hatlarında verimliliği subjektif gözlemlerle değil, yapay zekanın ürettiği gerçek zamanlı KPI karneleriyle yönetiyoruz. Net dikiş süreleri ve boşta kalma dakikalarını anlık analiz ederek hedef KPI uyumlarını (Masa 1: %90.4 vs Masa 2: %82.9) nesnel raporluyor ve hat dengeleme kararlarını tamamen veri odaklı alıyoruz.',
        ],
      },
    ],
  },
  {
    id: 'turnike-ihlal',
    category: 'custom',
    title: 'Turnike Entegrasyonu ve Kaçak Geçiş Önleme',
    subtitle: 'Kart okuyucu logları + kamera görüntüsü hibrit entegrasyonu — ihlal yönetimi ve akıllı eşleştirme',
    driveFileId: '1X7kXlcEojanoJMwd-Fxz-e2qsqctzX9D',
    insights: [
      {
        id: 'kartli-gecis',
        title: '1. Kartlı Geçiş ve Validasyon (Normal Akış)',
        paragraphs: [
          'Senaryo: Personel veya ziyaretçi kartını okutur, turnike açılır ve geçiş tamamlanır.',
          'Sistem tepkisi: Kart okuma logu ile kameradaki kişi eşleştiği için sistem arka planda yeşil ışık yakar; herhangi bir ihlal kaydı oluşturulmaz, süreç sorunsuz onaylanır.',
        ],
      },
      {
        id: 'kacak-gecis',
        title: '2. Kaçak Geçiş Algılama ve Dijital Eşkal Kaydı',
        paragraphs: [
          'Senaryo: Bir kişi kart okutmadan turnikeden atlayarak veya arkadaki turnikeden (ör. ID: 4 veya ID: 12) kaçak geçiş yapar.',
          'Sistem tepkisi: Donanımdan "kart okundu" sinyali gelmeden turnike bölgesinde dinamik insan hareketi algılandığı anda "İhlal Eden Giriş Durumu" mekanizması tetiklenir.',
          'Kaçak geçiş yapan şahsın yüz biyometrisi, kıyafet renkleri ve fiziksel ayırt edici özellikleri yapay zeka tarafından çıkarılarak Kara Liste / İhlal Havuzu veri tabanına anlık kaydedilir.',
        ],
      },
      {
        id: 'akilli-eslestirme',
        title: '3. Akıllı Eşleştirme ve Uyarı Mekanizması',
        paragraphs: [
          'Yakalama senaryosu: Kaçak geçiş yapan kişi, bir sonraki sefer (akşam çıkışında veya ertesi gün) kendi kartını turnikeye bastığında sistem devreye girer.',
          'Eşleştirme ve blokaj: Kartın basıldığı andaki canlı kamera görüntüsü, havuzdaki kaçak geçiş eşkal verisiyle saniyeler içinde eşleştirilir.',
          'Uyarı bildirimi: Güvenlik birimleri ve İK / Operasyon paneline anlık uyarı düşer — "Bu personel daha önce kaçak geçiş ihlali yapmıştır, kartını iptal edin/askıya alın" bildirimi tetiklenir.',
        ],
      },
      {
        id: 'ozet-mesaj',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Sadece turnikeyi açan değil, turnikeyi bypass eden kişileri de takip ediyoruz. Sistemimiz, kart basma sinyali ile görsel doğrulamayı hibrit olarak işleyerek kaçak geçiş yapanların eşkalini hafızaya alır ve ilk kartlı işlemde personelin kartını otomatik olarak bloke edecek uyarı mekanizmasını tetikler.',
        ],
      },
    ],
  },
  {
    id: 'akaryakit-analitik',
    category: 'custom',
    title: 'Akaryakıt İstasyonu Video Analitik & Market Yönlendirme',
    subtitle: 'Plaka tanıma, iskelet takibi ve nesne etkileşimi — hizmet süreleri + cross-selling',
    driveFileId: '1fFj3Knztc8kScXzrtUdE7m2tjU2i7Hmu',
    insights: [
      {
        id: 'operasyonel-metrikler',
        title: '1. Temel Operasyonel Metrikler',
        paragraphs: [
          'Toplam kaç araç geldi? İstasyon alanına giren ve pompalara yanaşan her araç car ve licence_plate (plaka tanıma) modelleriyle tekil olarak sayılır. Günlük, saatlik ve rampa bazlı (ör. POMPA 1-2) toplam araç hacmi raporlanır.',
          'Hizmet süresi: Aracın pompa önündeki sarı çizgili ROI alanına girdiği an giriş zaman damgası alınır. Dolum bitip araç ayrıldığında çıkış damgası alınır. Fark Net Hizmet Süresi olarak kaydedilir — hangi pompalarda darboğaz olduğu canlı haritalanır.',
        ],
      },
      {
        id: 'ilk-temas',
        title: '2. Personel – Müşteri İlk Temas Süresi',
        paragraphs: [
          'Sistem mantığı: Pompa yanındaki personel iskelet takibi (Pose Estimation) modeliyle izlenir — görselde person 0.81 ve person 0.92 etiketleri aktif.',
          'İlk temas ölçümü: Aracın durduğu an ile personelin iskelet koordinatlarının araca veya depo kapağına yaklaştığı (kesiştiği) ilk an arasındaki süre hesaplanır.',
          'Amaç: Müşterinin istasyona girdikten sonra kaç saniye bekletildiğini tespit etmek ve hizmet kalitesini (SLA) standartlaştırmak.',
        ],
      },
      {
        id: 'cam-kaput',
        title: '3. Cam Silme ve Kaput Açma Algılama',
        paragraphs: [
          'Kaç aracın camı silindi? Personelin kol ve gövde iskelet hareketleri, ön cam bölgesinde (yeşil kutu — front cam alanı) belirli süre git-gel hareketi sergilediğinde sistem bunu "Cam Silme Aktivitesi" olarak loglar.',
          'Kaç aracın kaputu açıldı? Aracın ön kısmında dikey geometri değişimi (kaputun yukarı kalkması) ve personelin motor gövdesine eğilmesiyle "Kaput Açıldı / Yağ-Su Kontrolü Yapılıyor" aksiyonu tetiklenir.',
        ],
      },
      {
        id: 'market-yonlendirme',
        title: '4. Market Yönlendirme Mekanizması (Cross-Selling)',
        paragraphs: [
          'Aktif bekleme optimizasyonu: Akaryakıt dolumu ortalama 1,5–3 dakika sürer. Dolum başladıktan ve personel teması onaylandıktan sonra müşterinin boşta bekleme süresi hesaplanır.',
          'Hedefli kampanya: Cam silindi algılanırsa pompa ekranına veya sadakat uygulamasına "Cam suyunuzu yenilediniz mi? Markette 2 al 1 öde!" tetiklenir. Kaput açıldıysa araç tipine göre "Antifriz ve motor yağlarında %20 indirim" yönlendirmesi yapılır.',
          'Süre bazlı tetikleme: Araç 90 saniyeden uzun bekliyorsa sürücü ekranına "Sıcak bir kahve mola ister misiniz?" görseli basılarak müşteri markete yönlendirilir.',
        ],
      },
      {
        id: 'akaryakit-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Kameralarımız sadece akaryakıt satışını izlemiyor; personelin müşteriye ilk dokunuş anından cam silme faaliyetine kadar tüm operasyonu anlamlandırıyor. Amacımız, dolum esnasındaki 2 dakikalık pasif bekleme süresini yapay zeka tetiklemeli kampanyalarla dinamik olarak market içi satışa dönüştürmek.',
        ],
      },
    ],
  },
  {
    id: 'okey-kalite',
    category: 'custom',
    title: 'Okey Taşı Kalite Kontrol ve Otomatik Ayıklama',
    subtitle: 'Geometrik kusur + ters-düz analizi, röle tetiklemesi ve paketleme verimliliği',
    driveFileId: '1URhf8Jo-3EO1WZwVgFR0S2a1FeWweilI',
    insights: [
      {
        id: 'kalite-analizi',
        title: '1. Kalite Kontrol ve Ters-Düz Analizi',
        paragraphs: [
          'Doğru konum (yeşil kutu): Parmakla gösterilen bölgedeki taş yeşil bounding box ile işaretlenir — "Doğru Yüzey/Düz" veya kusursuz ürün standardına uygun.',
          'Hatalı/ters ürün (kırmızı kutular): Alt kanallardan geçen taşlar kırmızı bounding box (Arka/Hatalı) olarak algılanır. Ters dönme, kalıp hataları, renk veya mikron düzeyindeki geometrik kusurlar anında yakalanır.',
        ],
      },
      {
        id: 'role-tetikleme',
        title: '2. Röle Tetiklemesi ile Hattan Atma',
        paragraphs: [
          'Gerçek zamanlı haberleşme: Model kırmızı kutuyla hata algıladığı anda endüstriyel protokoller üzerinden PLC hattına veya röle kartına tetikleme sinyali gönderir.',
          'Fiziksel ayıklama: Tetiklenen röle, hava pistonunu veya mekanik iticiyi milisaniyeler içinde çalıştırarak hatalı taşı bandından dışarı atar. Paketleme aşamasına sadece %100 kusursuz taşlar gider.',
        ],
      },
      {
        id: 'paketleme-oee',
        title: '3. Paketleme Verimliliği ve Döngü Süresi',
        paragraphs: [
          'Paketleme verimliliği (OEE): Hatalı ürünlerin paketleme hattına girmesi engellenir; makine duruş-kalkış süreleri minimuma iner. Bant akış hızı optimize edilerek üretim verimliliği maksimize edilir.',
          'Döngü süresi: Taşların banttaki hızı ve iki taş arası geçiş süreleri anlık ölçülür. Bant hızı stabilizasyonu ve makine performans takibi bu metrikle sağlanır.',
        ],
      },
      {
        id: 'dijital-sayac',
        title: '4. Dijital Sayaç — Bugün Kaç Taş Paketledim?',
        paragraphs: [
          'Üretim adet takibi: Yeşil kutu olarak onaylanan ve hattan atılmadan paketleme alanına ulaşan her taş "+1 Başarılı Ürün" olarak yazılır.',
          'Canlı dashboard: Operatör paneline ve ERP sistemine anlık basılan veriler — bugün toplam üretilen taş, başarıyla paketlenen sayı (set bazlı), hattan atılan defolu/ters taş ve fire oranı.',
        ],
      },
      {
        id: 'okey-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Geliştirdiğimiz yapay zeka modeli sadece hata tespit etmekle kalmıyor; röle entegrasyonu sayesinde hatalı veya ters dönmüş okey taşlarını milisaniyeler içinde hattan fiziksel olarak dışarı fırlatıyor. Böylece paketleme hattına sadece %100 kusursuz ürünlerin girmesini sağlayarak paketleme verimliliğini artırıyor ve gün sonunda kaç adet kusursuz taş paketlendiğini canlı olarak raporluyoruz.',
        ],
      },
    ],
  },
  {
    id: 'ifm-giris',
    category: 'custom',
    title: 'İFM Fuar Merkezi — Giriş Turnikeleri',
    subtitle: 'Ana giriş hattı demografik analiz · giriş sayacı, yaş ve cinsiyet dağılımı',
    driveFileId: '16OHtCKouADT6tyH2ePfpPkqDl-deVgOm',
    insights: [
      {
        id: 'ifm-giris-sayac',
        title: '1. Kaç Kişi Girdi? (Giriş Sayıcı)',
        paragraphs: [
          'image_853484 kamerası ana giriş kapısındaki turnikeleri (Giriş Hattı — kırmızı çizgi) ve kayıt masası alanını gerçek zamanlı tarar.',
          'Kırmızı tetikleme çizgisinden geçiş yapan tekil ziyaretçiler anlık sayılır. Sol üstteki "GİRİŞ ANALİZİ" tablosuna göre hattan başarıyla geçen toplam giriş canlı raporlanır.',
        ],
      },
      {
        id: 'ifm-giris-demo',
        title: '2. Yaş ve Cinsiyet Dağılımı',
        paragraphs: [
          'Yapay zeka modeli turnikeden geçen kişilerin yüz ve fiziksel özelliklerini işleyerek anlık yaş grubu tahmini ve cinsiyet ayrımı yapar.',
          'Cinsiyet dağılımı: Erkek / Kadın sayıları canlı güncellenir. Kayıt masası kuyruğundaki ziyaretçiler turnikeye yaklaştıkça veriye eklenir.',
          'Yaş tahmini: Ziyaretçiler hedef odaklı segmentlere ayrılır — örn. 26–35 Yetişkin, 31 Yaş, 34 Yaş gibi doğrudan etiketleme.',
        ],
      },
      {
        id: 'ifm-giris-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Fuar girişinde sadece kaç kişi geldiğini değil; kimin geldiğini — yaş ve cinsiyet dağılımını — anlık ölçüyoruz. Bu veri stant performansıyla birleştirildiğinde katılımcı firmalara demografik ziyaretçi profili sunulur.',
        ],
      },
    ],
  },
  {
    id: 'ifm-hall',
    category: 'custom',
    title: 'İFM Fuar Merkezi — Hall 1 Yoğunluk Analizi',
    subtitle: 'Alan bazlı bulunma süresi (dwell time) ve stand trafiği · 5 ROI bölgesi',
    driveFileId: '1Pa-Mn0qOnbOowxk71_3hPdzM0vRw7qQ0',
    insights: [
      {
        id: 'ifm-hall-dwell',
        title: '3. Alanlarda Toplam Bulunma Süreleri',
        paragraphs: [
          'image_8534e7 kamerası fuar alanını (Hall 1) 5 farklı alt bölgeye (ROI) ayırarak ziyaretçi davranışlarını analiz eder.',
          'Bölge 1 ve 3 (koridor/geçiş): Bulunma süresi düşük — stantlar arası geçiş alanı olarak kullanıldığı doğrulanır.',
          'Bölge 4 ve 5 (stant içi görüşme/ürün sergileme): Masalarda oturma veya ürün inceleme (ör. Can-am araçları) süresi maksimuma çıkar — stand ilgi çekiciliği ölçülür.',
        ],
      },
      {
        id: 'ifm-hall-trafik',
        title: '4. Ziyaret Sayısı (Stand Trafiği / Heatmap)',
        paragraphs: [
          'Her bölgenin poligon alanı, içinden geçen veya belirli sürenin üzerinde vakit geçiren tekil kişi sayısıyla Ziyaret Skoru üretir.',
          'Isı haritası mantığına göre Borusan Oto ve Can-am stantlarının kesişimindeki ana ağırlama alanı (Bölge 4) en yüksek ziyaret trafiğini alan bölge olarak kaydedilir.',
        ],
      },
      {
        id: 'ifm-hall-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Fuar alanına giren ziyaretçinin hangi standın önünde kaç dakika vakit geçirdiğini uçtan uca ölçüyoruz. Girişteki demografik veri ile stant içi yoğunluk verilerini birleştirerek, katılımcı firmalara hangi yaş grubunun hangi ürüne daha çok ilgi gösterdiğini raporlayan akıllı fuar analitiği sunuyoruz.',
        ],
      },
    ],
  },
  {
    id: 'ifm-prestige',
    category: 'custom',
    title: 'İFM Fuar Merkezi — Prestige Alan Analizi',
    subtitle: 'Prestige salonu canlı ziyaretçi akışı ve alan performans kaydı',
    driveFileId: '1UBLpfuMINYjCA2DgH8sE8S-wZKUTYRB6',
    insights: [
      {
        id: 'ifm-prestige-genel',
        title: 'Prestige Salonu Canlı İzleme',
        paragraphs: [
          'Prestige alanındaki kamera akışı; ziyaretçi giriş-çıkış, alan içi dolaşım ve yoğunluk değişimlerini gerçek zamanlı kaydeder.',
          'Giriş turnikelerinden gelen demografik veri ile salon içi davranış metrikleri aynı panelde birleştirilir.',
        ],
      },
      {
        id: 'ifm-prestige-metrik',
        title: 'Operasyonel Metrikler',
        paragraphs: [
          'Alan bazlı ziyaretçi sayısı, ortalama kalış süresi ve saatlik yoğunluk grafikleri katılımcı firmalara raporlanır.',
          'Hangi saat aralığında hangi bölgenin daha fazla ilgi gördüğü canlı dashboard üzerinden izlenir.',
        ],
      },
      {
        id: 'ifm-prestige-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'İstanbul Fuar Merkezi genelinde girişten stant içine kadar uçtan uca analitik sunuyoruz: kaç kişi geldi, kim geldi, hangi standda ne kadar kaldı — hepsi tek platformda.',
        ],
      },
    ],
  },
  {
    id: 'migros-kasa-fraud',
    category: 'custom',
    title: 'Migros Kasa — Müşteri Yok & Fraud Tespiti',
    subtitle: 'Kasa bölgesi varlık analizi · hayalet işlem ve şüpheli iade/kasa açma alarmı',
    driveFileId: '1RPeDrcnXwN-A2hoCxz5TZl7pKAIdhiMR',
    insights: [
      {
        id: 'migros-kasa-bolge',
        title: '1. Kasa Bölgesi ve Müşteri Varlık Analizi',
        paragraphs: [
          'Senaryo A — Müşteri yok: Kamera, KASA BÖLGESİ poligonunu tarar; alanda kimse yoksa "MÜŞTERİ YOK" etiketi basılır. Bu esnada POS "KASA AÇIK" tetiklenirse nakit çekmecesi açılır veya iade girilmeye çalışılır.',
          'Senaryo B — Normal akış: Kasa önünde müşteri belirdiğinde "MÜŞTERİ VAR Count: 1" ile sayaç güncellenir ve POS üzerindeki normal işlem akışı onaylanır.',
        ],
      },
      {
        id: 'migros-fraud-hayalet',
        title: '2. Fraud & Kaçak Geçiş — Hayalet İşlem',
        paragraphs: [
          'Kasa önünde "MÜŞTERİ YOK" sinyali varken aşağıdaki işlemlerden biri yapıldığında sistem alarm durumuna geçer:',
          'Müşterisiz kasa açma / nakit çekmecesini tetikleme',
          'Şüpheli iade veya iptal işlemleri geçme',
          'Boş fiş / sepet sıfırlama hareketleri',
        ],
      },
    ],
  },
  {
    id: 'migros-kasa-sap',
    category: 'custom',
    title: 'Migros Kasa — SAP Fraud Video Kanıt',
    subtitle: 'POS log çapraz kontrolü · SAP kayıp-kaçak modülüne otomatik video clip',
    driveFileId: '1gc7_5QdAqtUQsrOzwsP3vVaPab3sk_rR',
    insights: [
      {
        id: 'migros-sap-eslestirme',
        title: '3. SAP Entegrasyonu ve Otomatik Video Kanıt',
        paragraphs: [
          'Anlık eşleşme: Kamerada "Müşteri Yok" tespiti ile POS logundaki "İade/Kasa Açma" event zaman damgası milisaniyeler içinde çapraz kontrol edilir.',
          'SAP Fraud ekibine bildirim: Şüpheli eşleşme algılandığında SAP ERP / Kayıp Kaçak Yönetimi modülüne otomatik ihlal kaydı açılır.',
          'Video kaydı: İhlal anının 5 saniye öncesi ve sonrasını içeren clip, SAP fraud kaydına link veya medya eki olarak basılır — denetim ekibi manuel kamera taraması yapmadan kanıtı görür.',
        ],
      },
      {
        id: 'migros-sap-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Sistemimiz sayesinde kasadaki nakit hareketlerini sadece loglarla değil, gözle de doğruluyoruz. Kasa önünde fiziksel müşteri yokken yapılan her türlü iade, iptal veya çekmece açma işlemini anında yakalıyor; ihlal anının video kaydını SAP Fraud ekibinin ekranına kanıt olarak otomatik gönderiyoruz.',
        ],
      },
    ],
  },
  {
    id: 'yangin-erken-algilama',
    category: 'yangin',
    title: 'Erken Aşama Yangın Algılama ve Afet Yönetimi',
    subtitle: '10x10 piksel alev tespiti · yangın paneli, omnichannel alarm ve itfaiye entegrasyonu',
    driveFileId: '1D46FqHzYlmOul27FpK55qACdoP1F7Xup',
    insights: [
      {
        id: 'yangin-erken-teshis',
        title: '1. Ultra Erken Teşhis (10×10 Piksel)',
        paragraphs: [
          'Konvansiyonel sensörlerden önce tespit: Duman veya ısının fiziksel sensörlere ulaşmasını beklemez. Kamera kadrajındaki 10×10 piksel büyüklüğündeki alev kıvılcımı veya ilk duman belirtisi (FIRE etiketli kırmızı kutu) milisaniyeler içinde yakalanır.',
          'Hatalı alarm filtresi: Kaynak ışığı, güneş yansıması veya iş makinesi farları gibi etkenler elenir; sadece gerçek tehditlerde alarm tetiklenir.',
        ],
      },
      {
        id: 'yangin-entegrasyon',
        title: '2. Donanım ve Sistem Entegrasyonları',
        paragraphs: [
          'Yangın ihbar paneli: Alev algılandığında kuru kontak röleler veya endüstriyel protokoller üzerinden fiziksel yangın paneline sinyal gönderilir, siren çalışır.',
          'Çok kanallı bildirim: Yangının konumu, saati ve canlı kamera görüntüsü mobil uygulama, web arayüzü, SMS ve Telegram/WhatsApp botları ile kriz yönetimine iletilir.',
          'İtfaiye entegrasyonu: Doğrulanan alarmlarda yerel itfaiye merkezine (112) konum ve yangın büyüklük verisiyle otomatik çağrı/veri paketi düşer.',
        ],
      },
      {
        id: 'yangin-afet-yonetim',
        title: '3. Akıllı Afet ve Tahliye Yönetimi',
        paragraphs: [
          'İçeride kaç kişi kaldı? Giriş-çıkış kameraları ve turnike entegrasyonlarıyla yangın anında içeride kalan personel/ziyaretçi sayısı dijital tespit edilir.',
          'Eş zamanlı bilgi akışı: Yangının yayılma hızı, yönü ve devre dışı kalan kameralar canlı panelde güncellenir.',
          'İtfaiye için akıllı giriş haritası: Yangın merkez üssü kırmızı gösterilir; içeride kalanların kümelendiği noktalar ve temiz koridorlar analiz edilerek en güvenli müdahale rotası canlı çizilir.',
        ],
      },
      {
        id: 'yangin-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Biz sadece yangını algılamıyoruz; yangın anında kaosu yönetiyoruz. Klasik dedektörler dumanı hissedene kadar kameramız 10×10 piksellik alevi yakalayıp sireni çalıyor, yangın panellerini tetikliyor. Kriz anında içeride kaç kişi kaldığını ve itfaiyenin hangi kapıdan girmesi gerektiğini canlı harita üzerinde gösteren dinamik bir afet yönetim ekosistemi sunuyoruz.',
        ],
      },
    ],
  },
  {
    id: 'gratis-yangin-vms',
    category: 'yangin',
    title: 'Gratis Fabrika — Açık Alan Yangın Algılama',
    subtitle: 'Dış saha alev/duman tespiti · Milestone VMS canlı pop-up entegrasyonu',
    driveFileId: '1O4u_Co3C8AHWIwO3rbi2DTPRlcO6gDNY',
    insights: [
      {
        id: 'gratis-algilama',
        title: '1. Açık Alan Yangın Algılama',
        paragraphs: [
          'Gratis fabrika dış sahası ve açık depolama alanları bilgisayarlı görü ile 7/24 taranır.',
          'Klasik sensörlerin ulaşamadığı açık alanlarda alev ve duman belirtisi milisaniyeler içinde FIRE etiketiyle yakalanır; hatalı alarm filtresi güneş yansıması ve kaynak ışığını eler.',
        ],
      },
      {
        id: 'gratis-milestone',
        title: '2. Milestone VMS Entegrasyonu ve Pop-Up',
        paragraphs: [
          'Yangın algılandığı anda Milestone VMS sistemine anlık event sinyali gönderilir.',
          'Güvenlik ve İSG monitör merkezinde ihlal kamerasının canlı görüntüsü otomatik pop-up olarak büyür ve sesli uyarı verir — operatör yüzlerce kamerayı taramadan doğrudan olaya odaklanır.',
        ],
      },
      {
        id: 'gratis-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Gratis fabrikasında açık alan yangın riskini sensör beklemeden kamerayla yakalıyoruz. Algılama anında Milestone VMS üzerinden güvenlik ekranına canlı pop-up düşürerek saniyeler içinde müdahale imkânı sağlıyoruz.',
        ],
      },
    ],
  },
  {
    id: 'bursa-mobilya-yangin',
    category: 'yangin',
    title: 'Bursa Mobilya Fabrikası — Açık Alan Yangın',
    subtitle: 'Dış saha alev/duman tespiti · VMS pop-up ve yangın paneli entegrasyonu',
    driveFileId: '1k3DVIXQWJyfoeCRxv02KbfdnkmhMC_s3',
    insights: [
      {
        id: 'bursa-algilama',
        title: '1. Açık Alan Ultra Erken Teşhis',
        paragraphs: [
          'Bursa mobilya fabrikası dış sahası, açık depo ve yükleme alanları bilgisayarlı görü ile kesintisiz izlenir.',
          'Klasik duman dedektörlerinin ulaşamadığı açık alanlarda 10×10 piksel hassasiyetinde alev kıvılcımı ve ilk duman belirtisi FIRE etiketiyle milisaniyeler içinde yakalanır.',
        ],
      },
      {
        id: 'bursa-vms',
        title: '2. VMS Pop-Up ve Siren Geri Bildirimi',
        paragraphs: [
          'Yangın algılandığı anda VMS (Milestone / NX Witness vb.) sistemine anlık event sinyali gönderilir.',
          'Güvenlik monitör merkezinde ilgili kamera görüntüsü otomatik pop-up olarak açılır; sesli siren ve yangın ihbar paneli eş zamanlı tetiklenir.',
        ],
      },
      {
        id: 'bursa-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Bursa mobilya fabrikasında açık alan yangın riskini sensör beklemeden kamerayla yakalıyoruz. Algılama anında VMS pop-up, siren ve yangın paneli geri bildirimiyle saniyeler içinde müdahale sağlanır.',
        ],
      },
    ],
  },
  {
    id: 'metro-istanbul-yangin',
    category: 'yangin',
    title: 'Metro İstanbul Depoları — Açık Alan Yangın',
    subtitle: 'Lojistik depo dış saha tespiti · VMS pop-up, siren ve çok kanallı alarm',
    driveFileId: '1cwmhxneu5OuDgQNOEhsFSRvEFOiWu5zp',
    insights: [
      {
        id: 'metro-yangin-alg',
        title: '1. Depo Açık Alan Yangın Algılama',
        paragraphs: [
          'Metro İstanbul depo ve lojistik sahalarının açık alanları 7/24 bilgisayarlı görü ile taranır.',
          'Ahşap, karton ve yanıcı malzeme bulunan dış sahalarda alev ve duman belirtisi dedektör beklemeden anında tespit edilir; hatalı alarm filtresi güneş ve refleksiyon kaynaklarını eler.',
        ],
      },
      {
        id: 'metro-yangin-vms',
        title: '2. VMS Pop-Up ve Siren Geri Bildirimi',
        paragraphs: [
          'Yangın algılandığı anda VMS sistemine event gönderilir; güvenlik merkezinde ilgili kamera canlı pop-up olarak büyür.',
          'Sesli siren, yangın ihbar paneli ve mobil push bildirim eş zamanlı tetiklenir — operatör ve saha ekibi saniyeler içinde bilgilendirilir.',
        ],
      },
      {
        id: 'metro-yangin-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Metro İstanbul depolarında açık alan yangın riskini yapay zeka kameralarıyla erken yakalıyoruz. VMS pop-up, siren ve yangın paneli geri bildirimiyle kriz anında hızlı müdahale ve kanıtlı alarm yönetimi sağlıyoruz.',
        ],
      },
    ],
  },
  {
    id: 'inofa-yangin',
    category: 'yangin',
    title: 'Inofa Technology — Erken Yangın Algılama',
    subtitle: 'Üretim sahası alev/duman tespiti · VMS pop-up, siren ve yangın paneli entegrasyonu',
    driveFileId: '1bkranF4HlLb6cWUlOL3HWCDl_6nd9AHU',
    insights: [
      {
        id: 'inofa-algilama',
        title: '1. Erken Yangın ve Duman Algılama',
        paragraphs: [
          'Inofa Technology üretim sahası ve açık alanları bilgisayarlı görü ile 7/24 izlenir.',
          'Alev kıvılcımı ve ilk duman belirtisi FIRE etiketiyle milisaniyeler içinde yakalanır; hatalı alarm filtresi güneş yansıması ve kaynak ışığını eler.',
        ],
      },
      {
        id: 'inofa-vms',
        title: '2. VMS Pop-Up ve Siren Geri Bildirimi',
        paragraphs: [
          'Yangın algılandığı anda VMS sistemine anlık event sinyali gönderilir; güvenlik merkezinde ilgili kamera canlı pop-up olarak açılır.',
          'Sesli siren, yangın ihbar paneli ve mobil push bildirim eş zamanlı tetiklenir — operatör yüzlerce kamerayı taramadan doğrudan olaya odaklanır.',
        ],
      },
      {
        id: 'inofa-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Inofa Technology sahasında yangın riskini sensör beklemeden yapay zeka kameralarıyla erken yakalıyoruz. VMS pop-up, siren ve yangın paneli geri bildirimiyle saniyeler içinde müdahale ve kanıtlı alarm yönetimi sağlıyoruz.',
        ],
      },
    ],
  },
  {
    id: 'duman-erken-algilama',
    category: 'yangin',
    title: 'Erken Duman Algılama — VMS Pop-Up ve Sesli Bildirim',
    subtitle: 'İlk duman belirtisi tespiti · VMS canlı pop-up ve sesli alarm entegrasyonu',
    driveFileId: '1jRJlM748D4MHy861XLVAtPPpEgyebkMg',
    insights: [
      {
        id: 'duman-alg',
        title: '1. Erken Duman Algılama',
        paragraphs: [
          'Üretim ve depo alanları bilgisayarlı görü ile 7/24 taranır; alev çıkmadan önce ilk duman belirtisi milisaniyeler içinde yakalanır.',
          'Klasik duman dedektörlerinin ulaşamadığı yüksek tavanlı veya açık sahalarda yapay zeka modeli dumanı FIRE/SMOKE etiketiyle işaretler; hatalı alarm filtresi buhar ve toz kaynaklarını eler.',
        ],
      },
      {
        id: 'duman-vms',
        title: '2. VMS Pop-Up ve Sesli Bildirim',
        paragraphs: [
          'Duman algılandığı anda VMS sistemine anlık event sinyali gönderilir; güvenlik merkezinde ilgili kamera canlı pop-up olarak büyür.',
          'Sesli siren ve yangın ihbar paneli eş zamanlı tetiklenir — operatör yüzlerce kamerayı taramadan doğrudan olay noktasına odaklanır.',
        ],
      },
      {
        id: 'duman-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Yangın çıkmadan önce dumanı yakalıyoruz. Algılama anında VMS üzerinden canlı pop-up ve sesli bildirim düşürerek saniyeler içinde müdahale imkânı sağlıyoruz.',
        ],
      },
    ],
  },
  {
    id: 'khan-palet-dijital',
    category: 'custom',
    title: 'Palet Üretim & Tamir Hattı Dijital İkiz',
    subtitle: 'Khan Palet — palet sayımı, tamir aksiyon tanıma ve personel verimlilik analizi',
    driveFileId: '1D01aYRFqIaHfQAaufk_d-UvdxNjfe1ia',
    insights: [
      {
        id: 'palet-metrikler',
        title: '1. Üretim ve Tamir Metrikleri',
        paragraphs: [
          'Hattan geçen toplam palet: Ana konveyör hattında "TOPLAM PALET SAYIMI: 140" gibi her palet tekil olarak sayılır.',
          'Tamir edilen vs. edilmeyen: Tamir masalarında çivi çakma, tahta değiştirme gibi aktiviteler Aksiyon Tanıma ile izlenir. Sağlam hatta gidenler "Tamir Edildi", hurda hattına ayrılanlar "Tamir Edilmedi / Hurda" olarak etiketlenir.',
        ],
      },
      {
        id: 'palet-personel',
        title: '2. Akıllı Personel Verimlilik Analizi',
        paragraphs: [
          'Yasal mola entegrasyonu: Yemek ve tuvalet molaları shift/takvim entegrasyonu ile otomatik düşülür.',
          'Boşta kalma (idle): Personel masada palete uzun süre dokunmuyorsa veya masada palet yoksa "Malzeme Bekleme / Operasyonel Duraksama" kaydedilir.',
          'Masayı terk etme: Tanımlı molalar haricinde ROI dışına çıkış süreleri milisaniye hassasiyetinde biriktirilir. Gün, hafta, ay, yıl bazında OEE skoru çıkarılır.',
        ],
      },
      {
        id: 'palet-dijital-ikiz',
        title: '3. Fabrikanın Dijital Paneli',
        paragraphs: [
          'Dijital ikiz ekranı: Tüm masaların anlık durumu tek panelde — Masa 1: Aktif, Masa 2: 15 dk boşta, Hat 3: Sıkışma.',
          'Stratejik aksiyon: Yüksek boşta kalma "tembellik" mi yoksa "hattın gerisinden palet gelmemesi" mi — sistem otomatik analiz eder, yönetim hat dengesini yeniden kurgular.',
        ],
      },
      {
        id: 'palet-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Khan Palet fabrikasında üretimi tamamen dijitalleştiriyoruz. Kameralarımız sadece hattan geçen 140 paleti saymıyor; personelin masadaki her hareketini analiz ederek yasal molalar dışındaki görünmez duraksamaları gün, hafta, yıl bazında raporluyor. Fabrikanın dijital ikizini çıkararak yönetimin şeffaf ve veri odaklı aksiyon almasını sağlıyoruz.',
        ],
      },
    ],
  },
  {
    id: 'metro-araba-takip',
    category: 'custom',
    title: 'Metro Market — Alışveriş Arabası Takip & VMS',
    subtitle: 'grocery_cart algılama · ROI sınır ihlali ve VMS canlı pop-up entegrasyonu',
    driveFileId: '1ij4_lMEIAQM-UPH-jgrjKXGTWO1s4S0f',
    insights: [
      {
        id: 'metro-algilama',
        title: '1. Nesne Algılama ve Sınır İhlal Tespiti',
        paragraphs: [
          'Market arabası algılama: Müşterinin sürdüğü alışveriş arabası yapay zeka tarafından grocery_cart olarak etiketlenip yeşil bounding box içine alınır.',
          'Bölge sınırı (ROI): Otopark dış çıkış hatları veya arabaların çıkarılmasının yasak olduğu kritik bölgeler dijital çizgilerle sınırlanır. Araba bu çizgileri geçtiği an ihlal mekanizması çalışır.',
        ],
      },
      {
        id: 'metro-vms',
        title: '2. VMS Entegrasyonu ve Canlı Pop-Up',
        paragraphs: [
          'Anlık alarm: Market arabasının otopark sınırı dışına çıkarıldığı veya sahipsiz şekilde araç yollarına terk edildiği algılandığında VMS (Milestone, NX Witness vb.) sistemine event sinyali gönderilir.',
          'Canlı pop-up: Güvenlik odası monitöründe ihlal kamerasının görüntüsü otomatik pop-up olarak büyür ve sesli uyarı verir — operatör yüzlerce kamerayı taramadan doğrudan olaya odaklanır.',
        ],
      },
      {
        id: 'metro-operasyon',
        title: '3. Operasyonel Faydalar',
        paragraphs: [
          'Mobil bildirim: Sahipsiz veya dışarı kaçırılmaya çalışılan arabaların konumu otopark görevlilerinin el terminallerine bildirim olarak düşer.',
          'Kayıp ve hasar maliyeti: Arabaların çalınması, çevre araçlara çarpması veya trafiği tıkaması veri odaklı önlenir.',
        ],
      },
      {
        id: 'metro-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Metro Market otoparkında alışveriş arabalarını başıboş bırakmıyoruz. Kameralarımız market arabalarını anlık takip ediyor; sınır dışına çıkma veya araca çarpma riski doğduğunda VMS üzerinden güvenlik ekranlarına canlı pop-up uyarısı düşürerek saha ekiplerinin saniyeler içinde müdahale etmesini sağlıyoruz.',
        ],
      },
    ],
  },
  {
    id: 'sleepy-kalite-kontrol',
    category: 'custom',
    title: 'Sleepy Paketleme Hattı — Baskı Doğrulama',
    subtitle: 'OCR/OCV etiket kontrolü · silinme/kusur algılama ve PLC hattan atma',
    driveFileId: '1OL3-vdq5XXKDCD-SxaN_zjtyeFlVF6qa',
    insights: [
      {
        id: 'sleepy-ocr',
        title: '1. Etiket ve Baskı Doğruluğu Kontrolü',
        paragraphs: [
          'OCR & OCV: ROI içindeki paket yüzeyindeki tüm yazılar (üretim tarihi, SKT, gramaj, barkod) optik karakter doğrulama ile taranır.',
          'Karakter kontrolü: Harf ve sayıların şablona uygunluğu, doğru konumda (hizada) basılıp basılmadığı anlık kontrol edilir.',
        ],
      },
      {
        id: 'sleepy-kusur',
        title: '2. Silinme ve Kusur Algılama',
        paragraphs: [
          'Silinmiş/eksik karakter: Inkjet tıkanma veya kayma nedeniyle sayı/harf silinmesi, eksik çıkması veya silik basılması milisaniyeler içinde yakalanır.',
          'Geometrik hata: Paket kaynak noktalarında kayma veya baskıda yırtılma/büzüşme piksel düzeyinde doğrulanır.',
        ],
      },
      {
        id: 'sleepy-plc',
        title: '3. PLC Tetiklemesi ve Hattan Atma',
        paragraphs: [
          'Röle/PLC: Yazısı silinmiş, eksik veya hatalı paket algılandığında fabrika PLC sistemine anlık sinyal gönderilir.',
          'Ejector: Hatalı Sleepy paketi pnomatik fırlatıcı ile bandından dışarı atılır — hatalı ürünlerin kutulanması ve rafa gitmesi engellenir.',
        ],
      },
      {
        id: 'sleepy-dashboard',
        title: '4. Verimlilik ve Raporlama',
        paragraphs: [
          'Bugün kaç paket kontrol edildi? Hattan geçen kusursuz ürünler tek tek sayılır.',
          'Fire analizi: Gün sonunda baskı hatası nedeniyle hattan atılan paket sayısı raporlanır; inkjet yazıcı bakım zamanı öngörücü bakımla tespit edilir.',
        ],
      },
      {
        id: 'sleepy-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Sleepy üretim hattında gözden hiçbir kusuru kaçırmıyoruz. Yüksek hızda akan paketlerin üzerindeki sayı ve harfleri anlık tarıyor; en ufak silinme, kayma veya eksik baskıda PLC tetiklemesiyle hatalı paketi hattan fırlatıyoruz. Paketleme verimliliğini %100\'e çıkararak rafa sadece kusursuz ürünlerin gitmesini sağlıyoruz.',
        ],
      },
    ],
  },
  {
    id: 'ankara-seker-cuval',
    category: 'custom',
    title: 'Ankara Şeker — Konveyör Çuval Sayımı & OEE',
    subtitle: 'Türkşeker paketleme hattı · sack counter, SPM ve mikro-duraksama analizi',
    driveFileId: '1vUL0ru-WeBA9iIaq8UD1Kq9MdjorJ4Ly',
    insights: [
      {
        id: 'seker-sayim',
        title: '1. Nesne Algılama ve Akıllı Sayım',
        paragraphs: [
          'Çuval sayıcı: Hattan geçen her Türkşeker çuvalı yapay zeka tarafından tekil olarak sayılır — SACK COUNTER TOTAL arayüzünde canlı güncellenir.',
          'Tetikleme noktaları (ROI): Alt kısımdaki yeşil ve kırmızı poligon çizgileri çuvalların geçiş yönünü, hızını ve hattan başarıyla çıkışını doğrular. Sarı kesikli kutu çuvalın tam geçiş anını yakalar.',
        ],
      },
      {
        id: 'seker-oee',
        title: '2. Hat Verimliliği ve Kapasite (OEE)',
        paragraphs: [
          'Dakika başına çuval (SPM): Hattın anlık akış hızı ölçülür; planlanan hedef ile gerçekleşen hız kıyaslanarak performans skoru hesaplanır.',
          'Mikro-duraksama: Bant çalışırken belirli süre (ör. 2 dk) kontrol hatlarından çuval geçmezse "Besleme Kesintisi" veya "Paketleme Arızası" kaydedilir.',
          'Vardiya karşılaştırması: Farklı konveyör hatlarının verimlilik oranları gün, hafta ve vardiya bazında karşılaştırılır; darboğaz noktaları raporlanır.',
        ],
      },
      {
        id: 'seker-erp',
        title: '3. ERP/SAP Entegrasyonu ve Alarmlar',
        paragraphs: [
          'Depo ve stok: Sayılan her çuval anlık olarak ERP/SAP stok yönetimine işlenir — üretim ile depo girişi arasında mutabakat sağlanır.',
          'Anormallik alarmları: Çuvalların üst üste binmesi, bantta sıkışma veya hat durması durumunda operatör ekranlarına anlık uyarı gönderilir.',
        ],
      },
      {
        id: 'seker-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Ankara Şeker fabrikasında konveyör hatlarını tamamen akıllı hale getiriyoruz. Kameralarımız hatlardan geçen çuvalları milisaniyeler içinde tek tek sayıp dijitalleştirirken; kontrol bölgeleri sayesinde dakika başına çuval akış hızını (SPM) ve mikro-duraksamaları analiz ederek hat verimliliğini gerçek zamanlı raporluyoruz.',
        ],
      },
    ],
  },
  {
    id: 'bim-forklift-yolcu',
    category: 'custom',
    title: 'BİM Dağıtım — Yetkisiz Araç Üstü Yolcu Tespiti',
    subtitle: 'Transpalet/forklift üzerinde personel · Person on forklift alarmı ve canlı pop-up',
    driveFileIds: ['19hVgmeO3S7GfIRAQxXoW-TyDkj80wCp9', '16lQgXD9DyWSpyKrpT2px5NMSInPOLk_r'],
    insights: [
      {
        id: 'bim-ihlal-analiz',
        title: '1. Yapay Zeka Tabanlı İhlal Analizi',
        paragraphs: [
          'Araç üstü insan algılama: Hareket halindeki iş makinesi ve üzerindeki insan eş zamanlı analiz edilir — kırmızı kutuda Person on forklift etiketi tetiklenir.',
          'Kritik etiketleme: Sadece yan yana yürüyen iki nesne değil; insanın makinenin gövdesine/basamağına biniş pozisyonunda olduğu ayırt edilerek ihlal kaydedilir.',
        ],
      },
      {
        id: 'bim-uyari',
        title: '2. Anlık Bilgilendirme ve Uyarı',
        paragraphs: [
          'Pop-up merkez alarmı: İhlal algılandığı anda depo İSG uzmanı veya vardiya amirinin paneline canlı kamera görüntüsüyle kırmızı pop-up düşer.',
          'Saha bilgi akışı: Lokasyon (ör. BİM Dağıtım Merkezi — Blok C, Koridor 4) ve araç/operatör bilgisi Telegram, WhatsApp veya mobil İSG uygulaması ile push bildirim olarak iletilir.',
        ],
      },
      {
        id: 'bim-katki',
        title: '3. Operasyonel ve İSG Katkıları',
        paragraphs: [
          'Düşme ve ezilme riski: Transpalet/forklift hareket halindeyken basamaktan düşme, devrilme veya yük altında kalma riskleri oluşma aşamasında engellenir.',
          'Sicil yönetimi: Kural ihlalini mükerrer yapan operatör/personel dijital raporlanır — yaptırım ve nokta atışı eğitimler için kesin kanıt oluşur.',
        ],
      },
      {
        id: 'bim-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'BİM lojistik depolarında iş makinelerinin amacı dışında ve güvensiz kullanımını yapay zeka ile engelliyoruz. Transpalet veya forklift üzerine binen, basamakta yetkisiz seyahat eden personeli Person on forklift uyarısıyla yakalıyor; amirlerin ekranına canlı pop-up düşürerek tehlikeli hareketlerin önüne geçiyoruz.',
        ],
      },
    ],
  },
  {
    id: 'donas-kacak-siparis',
    category: 'custom',
    title: 'Donas — Kayıp Önleme ve Kaçak Sipariş Tespiti',
    subtitle: 'Izgara dürüm sayımı · POS çapraz kontrol ve hayalet ürün fraud alarmı',
    driveFileId: '1JaCOGykq6SxwVho2tNELQFG4snL9igB_',
    insights: [
      {
        id: 'donas-sayim',
        title: '1. Izgara ve Üretim Hattı Ürün Sayımı',
        paragraphs: [
          'Gerçek zamanlı nesne takibi: Tezgah kamerası ızgaraya giren ve bandan geçen dürümleri tek tek etiketler — örn. 496 id\'li (mavi) ve 497 id\'li (kırmızı) dürüm benzersiz ID ile anlık takip edilir.',
          'Net çıktı: Gün boyunca tezgahtan geçen toplam net dürüm sayısı insan hatasından bağımsız dijital mutfak loguna kaydedilir.',
        ],
      },
      {
        id: 'donas-fraud',
        title: '2. POS Çapraz Kontrol ve Kaçak Satış',
        paragraphs: [
          'Hayalet ürün algılama: Her geçen dürüm için o zaman diliminde kasadan açılmış aktif adisyon/sipariş aranır.',
          'Kayıt dışı satış ihlali: Tezgahta dürüm üretilip paketlenirken kasada fiş/adisyon yoksa "Kayıt Dışı Ürün / Fraud" alarmı üretilir — nakit elden alım senaryosu açığa çıkar.',
        ],
      },
      {
        id: 'donas-video-kanit',
        title: '3. Otomatik Video Kanıt ve Yönetim Bildirimi',
        paragraphs: [
          'Zaman damgası eşleşmesi: İhlal anı (kasada hareket yokken mutfakta paketleme) tespit edildiği saniyede ihlal logu açılır.',
          'Merkez denetim: Şüpheli kaydın öncesi ve sonrasını içeren video clip şube yönetim paneline veya merkez iç denetim ekibine kanıt olarak düşer.',
        ],
      },
      {
        id: 'donas-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Donas şubelerinde kaçak ve kayıt dışı satış dönemini yapay zeka ile kapatıyoruz. Izgardan geçen her dürümü benzersiz ID ile sayarken POS kasa logları ile anlık çapraz kontrol yapıyoruz. Kasaya girilmeden üretilen her hayalet dürümü saniyesinde yakalayıp video kanıtıyla iç denetim paneline raporluyoruz.',
        ],
      },
    ],
  },
  {
    id: 'yuk-asansor-transpalet',
    category: 'custom',
    title: 'Yük Asansörleri — Akıllı Koruma ve Otomatik Donanım Kilitleme',
    subtitle: 'Transpalet ROI algılama · Ethernet I/O röle ile asansör güç kesme ve kilit modu',
    driveFileId: '1496tA3in7ldYnTuYpTeNyf8eialCNTYu',
    insights: [
      {
        id: 'asansor-roi',
        title: '1. Bölge Tabanlı Transpalet Algılama (ROI Control)',
        paragraphs: [
          'Asansör kapısının önündeki kritik hol, kırmızı poligon çizgileriyle çevrili sanal kontrol bölgesi (ROI) olarak tanımlanır.',
          'Kırmızı alana akülü istif makinesi veya transpalet girdiğinde yapay zeka nesneyi milisaniyeler içinde teşhis eder; arayüzde "TRANSPALET TESPİT EDİLDİ" uyarısı anında belirir.',
        ],
      },
      {
        id: 'asansor-relay',
        title: '2. Donanımsal Müdahale — Güç Kesme ve Kilit Modu',
        paragraphs: [
          'Transpalet algılandığı anda panodaki kontrolör, asansör kumanda panosuna bağlı Ethernet I/O röle modülüne sinyal gönderir.',
          'Ana kontaktör veya kapı motorlarının gücü kesilir; asansör Kilit/Emniyet moduna alınır — kapılar açılmaz, hareket durur ve transpalet zorlasa bile kabine giremez.',
        ],
      },
      {
        id: 'asansor-popup',
        title: '3. Pop-Up Bilgilendirme ve Operasyonel Raporlama',
        paragraphs: [
          'Kabin/kat önü operasyon ekranlarına ve merkez izleme paneline anlık sesli ve görsel pop-up ihlal bildirimi düşer.',
          'İhlal görsel kanıtı (clip) ve zaman damgası İSG ve tesis yönetimine otomatik raporlanır.',
        ],
      },
      {
        id: 'asansor-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Depolardaki yük asansörlerinin transpaletler tarafından kırılıp dökülmesini yapay zeka ile tamamen engelliyoruz. Kırmızı bölgeye transpalet girdiği anda TRANSPALET TESPİT EDİLDİ alarmı basılıyor ve röle modülü üzerinden asansörün gücü kesilerek kapılar kilitleniyor — yüksek maliyetli hasarların önüne geçiyoruz.',
        ],
      },
    ],
  },
  {
    id: 'aemot-bobin-sarim',
    category: 'custom',
    title: 'Elektrikli Motor Üretimi — Akıllı Bobin Sarım ve Paketleme Hattı',
    subtitle: 'Üst açı Pose Estimation · sarım/paketleme ROI, döngü süresi ve OEE raporlama',
    driveFileId: '1FGYWe6ZN46KTGjjNq9vonj5pwKbCsBnp',
    insights: [
      {
        id: 'aemot-roi-pose',
        title: '1. Sarım ve Paketleme Alanı Bazlı İşlem Akışı (ROI & Pose Estimation)',
        paragraphs: [
          'Üst açı kameralarıyla operatörler mavi iskelet çizgileriyle anlık izlenir; personelin masada oturması değil, elleriyle aktif montaj/sarım yapıp yapmadığı ayırt edilir.',
          'Masa üzerinde iki operasyonel alan tanımlanır: Sarım Alanı (turuncu kutu) bobin sarım işlemleri ve sayaç takibi; Paketleme Alanı (yeşil kutu) sarımı biten bobinlerin toplandığı son istasyon.',
        ],
      },
      {
        id: 'aemot-metrikler',
        title: '2. Üretim ve Performans Takip Metrikleri',
        paragraphs: [
          'Toplam üretim adedi: Her personelin tamamladığı ürünler gerçek zamanlı sayılır; gün/vardiya sonunda hat bazlı toplam çıktı otomatik netleşir.',
          'Döngü süresi (cycle time): Bobinin sarım alanına girişi ile paketleme alanına aktarılması arasındaki süre saniye bazında ölçülür; her bobinin sarım süresi tekil loglanır.',
          'Personel varlık süresi: Operatörün iskeletinin çalışma sandalyesinde aktif algılandığı toplam süre vardiya boyunca ölçülür.',
        ],
      },
      {
        id: 'aemot-durum',
        title: '3. Masa / İstasyon Zaman ve Durum Analizleri',
        paragraphs: [
          'Aktif çalışma süresi: Personelin sarım/paketleme alanlarında montaj, sarım veya taşıma hareketi gerçekleştirdiği verimli süre.',
          'Boşta kalma (idle): Personel masada oturduğu halde fiziksel işlem yapmadığı mikro-kayıp süreler — malzeme bekleme, duraksama.',
          'İstasyon terk (absenteeism): Personelin istasyonu tamamen bıraktığı, iskelet algılamasının sıfıra düştüğü süreler.',
        ],
      },
      {
        id: 'aemot-rapor',
        title: '4. Günlük / Vardiya Bazlı Üretim Karnesi',
        paragraphs: [
          'Sistem gün veya vardiya sonunda istasyon/operatör bazlı otomatik rapor üretir: personel varlık süresi, aktif çalışma, boşta kalma, toplam çıktı (adet), bobin başına ortalama sarım süresi ve istasyon verimlilik skoru (OEE).',
          'Örnek çıktı: İstasyon 1 — 420 dk varlık, 380 dk aktif, 40 dk boşta, 120 adet, 3.1 dk/bobin, %90.4 OEE; İstasyon 2 — 410 dk varlık, 340 dk aktif, 70 dk boşta.',
        ],
      },
      {
        id: 'aemot-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Elektrikli motor üretim hattında verimliliği tahminlerle değil, yapay zekanın milisaniyelik verileriyle ölçüyoruz. Üst açıdan personelin iskelet hareketlerini ve sarım/paketleme alanlarını anlık analiz ediyor; hangi bobinin kaç dakikada sarıldığını, personelin ne kadar aktif çalıştığını ve hatların hangi dakikalarda boşta kaldığını otomatik raporlayarak günlük ve vardiya bazlı üretim karnelerini insan inisiyatifinden bağımsız çıkarıyoruz.',
        ],
      },
    ],
  },
  {
    id: 'konveyor-montaj-darbogaz',
    category: 'custom',
    title: 'Konveyör Montaj Hattı — Akıllı Darboğaz ve Verimlilik Analizi',
    subtitle: 'Motor ID takibi · personel-ürün etkileşim süresi, idle time ve gecikme alarmı',
    driveFileId: '1eSwQnXzFTLPdtZQb2zj94MOqFXZU1i3m',
    insights: [
      {
        id: 'konveyor-cycle',
        title: '1. Ürün Tabanlı İzleme ve Döngü Süresi (Cycle Time) Takibi',
        paragraphs: [
          'Konveyör bandı üzerindeki her elektrikli motor benzersiz ID ile takip edilir — M-1, M-2, M-3, M-4, M-5, M-6 gibi etiketlerle hat akışı milisaniyeler içinde izlenir.',
          'Her motorun üzerinde o ana kadar geçirdiği sürenin hedef süreye oranı anlık verimlilik yüzdesi olarak basılır (ör. M-1 %54, M-2 %75, M-4 %76, M-5 %55).',
        ],
      },
      {
        id: 'konveyor-personel',
        title: '2. Personel — Ürün Etkileşim Analizi',
        paragraphs: [
          'Montaj hattındaki personellerin el hareketleri ve konumları analiz edilerek iş gücü dağılımı ölçülür.',
          'Nokta atışı operasyon süresi: Ortadaki personelin M-3 ile ilgileniyor | 8.9 sn, sağdaki personelin M-5 ile ilgileniyor | 2.0 sn gibi eşleştirmeler saniye bazında loglanır; el pratikliği ve standart süre uyumu (KPI) raporlanır.',
        ],
      },
      {
        id: 'konveyor-idle',
        title: '3. Boşta Kalma (Idle Time) ve Darboğaz Tespiti',
        paragraphs: [
          'İstasyon dışı takip: Personel montaj alanından uzaklaştığında "P-4 istasyon dışı" gibi loglar üretilir; operasyona dahil olmayan süreler boşta kalma olarak kaydedilir.',
          'Darboğaz analizi: Montajı biten motor önündeki hattan dolayı ilerleyemiyorsa sistem bunu hattın tıkanma noktası olarak işaretler.',
        ],
      },
      {
        id: 'konveyor-alarm',
        title: '4. Proaktif Geri Bildirim — Hatta Fazla Kalma / Gecikme Uyarıları',
        paragraphs: [
          'Motor tanımlı maksimum çevrim süresini (ör. 45 sn) aşarsa anormallik alarmı tetiklenir; istasyon akıllı ekranına veya kule lambasına sarı/kırmızı uyarı düşer.',
          'Vardiya amirine "Hat 2, İstasyon 3\'te M-3 motoru 12 saniyedir gecikmede" şeklinde pop-up / mobil bildirim gönderilerek duruş maliyeti yaşanmadan müdahale sağlanır.',
        ],
      },
      {
        id: 'konveyor-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Montaj hattındaki tıkanmaları ve gizli zaman kayıplarını yapay zeka ile görünür kılıyoruz. Hattan geçen her motoru ve personeli anlık eşleştirerek hangi personelin hangi motorla kaç saniye ilgilendiğini ve kimlerin istasyon dışında kaldığını milisaniyeler içinde analiz ediyoruz. Ürün hatta normalden fazla durduğunda otomatik geri bildirim üreterek darboğazları büyümeden çözmemizi sağlıyoruz.',
        ],
      },
    ],
  },
  {
    id: 'masa-pose-verimlilik',
    category: 'custom',
    title: 'Manuel Montaj İstasyonları — Pose Tabanlı Verimlilik Analizi',
    subtitle: 'Otomatik sayaç · cycle time, doluluk oranı ve darboğaz haritalama',
    driveFileId: '1_pVWlnzHpLgjKbT9Yyz8-RBpxJhyY823',
    insights: [
      {
        id: 'masa-sayac',
        title: '1. Personel Verimliliği ve Sayaç Takibi',
        paragraphs: [
          'Yapay zeka modeli her personelin tamamladığı ürün sayısını otomatik sayar — Masa 1: 44 adet, Masa 2: 41 adet gibi net çıktılar insan hatasından arındırılmış şekilde gösterilir.',
          'Aynı istasyon veya farklı vardiyalarda personel performansı objektif verilerle kıyaslanır; örneğin Masa 1\'in Masa 2\'den %7,3 daha verimli çalıştığı tespit edilerek nokta atışı eğitim ihtiyaçları belirlenir.',
        ],
      },
      {
        id: 'masa-cycle',
        title: '2. İstasyon Verimliliği ve Ürün Başına Zaman Analizi',
        paragraphs: [
          'Sayaç tablosundaki "Süre" verisi (ör. 2.1s) her ürünün istasyonda geçirdiği net işlem süresini milisaniye hassasiyetinde ölçer; ürün bazlı standardizasyon sağlanır.',
          'Pose Estimation ile personelin aktif montaj hareketi gerçekleştirdiği süre ("Aktif 2.1s", "DOLU" etiketi) ölçülür; istasyonda bulunup boşta kalınan mikro-kayıp zamanlar tespit edilir.',
        ],
      },
      {
        id: 'masa-darbogaz',
        title: '3. Darboğaz Analizi ve Süreç Planlaması',
        paragraphs: [
          'Farklı istasyonların anlık verimlilik skorları karşılaştırılır (%100 DOLU vs %80 DOLU) — hattın nerede yavaşladığı ve darboğazın nerede oluştuğu anlık haritalanır.',
          'Masa 1 işlem süresi istikrarlı şekilde daha uzunsa takviye personel veya operasyon kaydırma gibi dinamik süreç planlama kararlarıyla hat dengelenir.',
        ],
      },
      {
        id: 'masa-kayip',
        title: '4. Kayıp Zaman Analizi ve Boşta Kalma Tespiti',
        paragraphs: [
          '"Aktif" süre ile döngü süresi arasındaki fark mikro-duraklamaları, malzeme bekleme ve ergonomik sıkıntıları işaret eder.',
          'Personelin iskelet algılamasının kesildiği ve istasyonun "BOŞ" kaldığı süreler otomatik kaydedilir; mola harici duruşlar ve lojistik eksiklikler veri odaklı analiz edilir.',
        ],
      },
      {
        id: 'masa-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Manuel operasyonları tamamen şeffaf hale getiriyoruz. Her personelin kaç ürün yaptığını (Masa 1: 44 adet), her üründe kaç saniye geçirdiğini (Süre: 2.1s) ve istasyonların hangi dakikalarda darboğaz oluşturduğunu saniyeler bazında analiz ediyoruz. Görünmez kayıp zamanları ortadan kaldırarak üretim verimliliğini %100 doluluk oranına ulaştırmayı hedefliyoruz.',
        ],
      },
    ],
  },
  {
    id: 'hat-poka-yoke-etiket',
    category: 'custom',
    title: 'Akıllı Hat Üretim Takibi ve Proses Doğrulama (Poka-Yoke)',
    subtitle: 'Ürün sayımı · etiketleme proses kontrolü ve operatör HMI uyarısı',
    driveFileId: '1iL9jq45B6ItnMpmQdTHGRT2_YUoM_Hah',
    insights: [
      {
        id: 'poka-sayim',
        title: '1. Gelen Ürün Sayımı ve Giriş Takibi',
        paragraphs: [
          'Ana konveyör bandından personelin önüne gelen her yarı mamul/ürün yapay zeka tarafından tekil algılanır ve dijital üretim sayacına işlenir.',
          'Mavi ve sarı poligon ROI alanları ürünün işlem gördüğü montaj ve etiketleme istasyonunu temsil eder; ürün bu alana girdiği an süreç takibi başlar.',
        ],
      },
      {
        id: 'poka-proses',
        title: '2. Proses Doğrulama ve Eksik Etiket (Hata) Tespiti',
        paragraphs: [
          'Adım 1 — Algılama: Ürün masaya gelir. Adım 2 — Proses kontrolü: Operatörün etiket yapıştırma hareketi ve ürün üzerinde barkod/etiket nesnesinin belirip belirmediği anlık taranır.',
          'Adım 3 — Çıkış kontrolü: Ürün işlem sonrası arkadaki çıkış bandına doğru hareket ettirilir; eksik etiket saniyesinde tespit edilir.',
        ],
      },
      {
        id: 'poka-uyari',
        title: '3. Operatör Ekranı Anlık Uyarısı — "Etiketi Unuttun!"',
        paragraphs: [
          'Personel ürünü etiketlemeden arkadaki hatta koymaya çalışırsa operatörün önündeki HMI paneline "UYARI: ETİKET EKSİK / ETİKETİ UNUTTUN!" flaş uyarısı düşer.',
          'Opsiyonel istasyon kilitleme: Çıkış bandı motoru Ethernet I/O rölesi ile durdurulabilir; etiket yapıştırılıp yapay zeka yeşil onay verene kadar hatalı ürünün çıkışına izin verilmez.',
        ],
      },
      {
        id: 'poka-rapor',
        title: '4. Operasyonel Çıkarımlar ve Kalite Katkısı',
        paragraphs: [
          'Sıfır hatalı sevkiyat: Montajı veya etiketi eksik hiçbir ürün paketleme aşamasına geçemez.',
          'Gün sonu raporlama: Hangi istasyonda kaç ürün etiketlendiği ve kaç kez etiket unutma uyarısı tetiklendiği loglanarak operatör odaklanma ve hata eğilimleri dijitalleştirilir.',
        ],
      },
      {
        id: 'poka-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Üretim hattında insan hatasına bağlı kalite kusurlarını yapay zeka ile sıfıra indiriyoruz. Hattan gelen ürünleri sayarken personelin etiket yapıştırma prosesini anlık denetliyoruz. Operatör etiketi yapıştırmadan ürünü arkaya sevk etmeye çalıştığı anda önündeki ekrana "Etiketi Unuttun!" uyarısı basarak hatalı ürünün istasyondan çıkmasını anında engelliyoruz.',
        ],
      },
    ],
  },
  {
    id: 'tir-yukleme-sayim',
    category: 'custom',
    title: 'Akıllı Sevkiyat Alanı — Tır Yükleme ve Forklift Ürün Sayımı',
    subtitle: 'ROI zone palet sayımı · yükleme çevrim süresi ve rampa darboğaz analizi',
    driveFileId: '1bRK7h227gCXbDvRlJGcUEwrtkapcE5vu',
    insights: [
      {
        id: 'tir-roi-sayim',
        title: '1. Dinamik ROI Zone ile Otomatik Palet/Ürün Sayımı',
        paragraphs: [
          'Tır kasası girişine tanımlanan sarı ROI ZONE, sistemin ana kontrol merkezidir; forklift veya transpaletin yükü içeriye bırakıp bırakmadığı ürün varlığı ve hareket analiziyle doğrulanır.',
          'Sağ üst köşedeki dijital sayaç tır bazlı yükleme başladığı an gerçek zamanlı güncellenir; her onaylı palet insan eliyle çetele tutulmadan otomatik işlenir.',
        ],
      },
      {
        id: 'tir-darbogaz',
        title: '2. Sevkiyat Hattı Darboğaz ve Kayıp Zaman Analizi',
        paragraphs: [
          'Tır yükleme çevrim süresi: Tırın rampaya yanaştığı andan yüklemenin bittiği ana kadar geçen toplam süre ölçülür.',
          'Forklift besleme frekansı: İki palet yüklemesi arasındaki bekleme süreleri hesaplanır — rampa önünde sıra varsa "Rampa Darboğazı", tır içinde uzun bekleme varsa "Depo İçi Lojistik Besleme Darboğazı" teşhisi konur.',
        ],
      },
      {
        id: 'tir-poka-yoke',
        title: '3. Süreç Planlaması ve Poka-Yoke Çıkarımları',
        paragraphs: [
          'WMS entegrasyonu ile o tıra yüklenmemesi gereken farklı barkodlu palet rampaya getirildiğinde forklift operatörü hata yapmadan önce uyarılır.',
          'Üretim/paketleme hızı ile sevkiyat hızı anlık kıyaslanır; rampada ürün yığılmasını engellemek için forklift operatörü görevlendirmeleri dinamik optimize edilir.',
        ],
      },
      {
        id: 'tir-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Üretim sahasındaki yapay zeka takibini tır yükleme rampalarıyla taçlandırarak lojistik süreçleri %100 şeffaf hale getiriyoruz. ROI ZONE sayesinde forkliftlerin içeriye bıraktığı her ürünü otomatik sayıyor; hangi tırın kaç dakikada yüklendiğini ve forkliftlerin rampa önünde ne kadar boşta beklediğini saniye saniye analiz ederek sevkiyat darboğazlarını ortadan kaldırıyoruz.',
        ],
      },
    ],
  },
  {
    id: 'cummins-motor-yabanci-nesne',
    category: 'custom',
    title: 'Cummins Motor Test İstasyonu — Akıllı Yabancı Nesne Önleme',
    subtitle: 'Bez/karton algılama · PLC interlocking ile test kilitleme ve güvenli başlatma',
    driveFileId: '18jjlmNKIsGqlewrCzmhzwZZXzJGl1hc8',
    insights: [
      {
        id: 'cummins-alg',
        title: '1. Yapay Zeka Tabanlı Yabancı Nesne Algılama',
        paragraphs: [
          'Motorun test standındaki konumu kameralar tarafından taranan ana kontrol bölgesine (ROI) alınır.',
          'Model motor bileşenleri dışındaki anomalileri tespit eder; unutulan endüstriyel bezler, temizlik kağıtları veya ambalaj kartonları anında yüksek doğrulukla yakalanır.',
        ],
      },
      {
        id: 'cummins-plc',
        title: '2. PLC Entegrasyonu ile Enerji Kesme (Interlocking)',
        paragraphs: [
          'Yabancı nesne algılandığında PROFINET / Modbus TCP üzerinden PLC\'ye YABANCI_MADDE_IHLAL = 1 sinyali gönderilir; test standı güç beslemesi kesilir veya başlatma rölesi kilitlenir.',
          'HMI panelde "UYARI: MOTOR ÜSTÜNDE BEZ/KARTON UNUTULDU - LÜTFEN TEMİZLEYİN" uyarısı flaş şeklinde yanıp söner — operatör ne yaparsa yapsın test başlatılamaz.',
        ],
      },
      {
        id: 'cummins-temizlik',
        title: '3. Güvenli Başlatma Mantığı',
        paragraphs: [
          'Operatör motor üstündeki yabancı nesneyi fiziksel olarak alıp alanı temizleyene kadar sistem blokajı kaldırmaz.',
          'Nesne kaldırıldığında yapay zeka motor yüzeyinin temiz olduğunu onaylar ve PLC\'ye TEST_IZIN = 1 sinyali basarak testin güvenle başlamasını sağlar.',
        ],
      },
      {
        id: 'cummins-kpi',
        title: '4. Süreç ve Kalite İyileştirme Katkısı',
        paragraphs: [
          'Yüksek sıcaklık veya hareketli parçalarla temas edebilecek yanıcı maddeler test öncesi %100 elenir — sıfır yangın ve mekanik hasar riski.',
          'Hangi vardiyada veya motor tipinde daha çok bez/karton unutulduğu loglanarak montaj hattındaki ön hazırlık süreçleri revize edilir.',
        ],
      },
      {
        id: 'cummins-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Cummins motor test hattında insan hatasına bağlı yangın ve hasar risklerini yapay zeka ile sıfıra indiriyoruz. Test öncesinde motor üstünü tarayarak unutulan bez, kağıt veya kartonları anında teşhis ediyor; yabancı madde kaldığı sürece PLC entegrasyonu ile test gücünü keserek alan tamamen temizlenene kadar testi donanımsal olarak bloke ediyoruz.',
        ],
      },
    ],
  },
  {
    id: 'isg-kkd-uyum',
    category: 'isg',
    title: 'KKD Uyum Denetimi — Güvenli Geçiş',
    subtitle: 'Baret, maske ve gözlük algılama · yeşil onay senaryoları',
    driveFileId: '1PMlg2dIU-I-5Fr2-Jz2oKUZR8YIZSlzM',
    insights: [
      {
        id: 'isg-guvenli-gecis',
        title: '1. Güvenli Geçiş ve Tam KKD Uyumu',
        paragraphs: [
          'Baret ve maske/gözlük algılama: Bareti doğru şekilde takan personel yapay zeka tarafından anlık tespit edilir.',
          'Sistem tepkisi: Gerekli donanımları tam olan personelin geçişine izin verilir, ekranda yeşil onay işareti belirir ve İSG loglarına "Uyumlu Geçiş" olarak kaydedilir.',
        ],
      },
      {
        id: 'isg-ihlal-alarm',
        title: '2. İhlal Algılama ve Anlık Alarm',
        paragraphs: [
          'Baretsiz/eksik ekipmanla geçiş: Sahaya baretsiz giriş yapan veya koridorda baretini çıkaran personeller yakalanır.',
          'Sistem tepkisi: Baret eksikliği algılandığı anda ekranda kırmızı ünlem (ihlal/tehlike) simgesi tetiklenir. Personelin altına kırmızı kutu açılarak ihlal türü etiketlenir.',
        ],
      },
    ],
  },
  {
    id: 'isg-kkd-entegrasyon',
    category: 'isg',
    title: 'KKD Denetimi — Turnike Entegrasyonu',
    subtitle: 'Anlık bildirim, turnike kilidi ve geriye dönük İSG raporlama',
    driveFileId: '1AUasOLa4MBkh4NbOfvG8TI311gUXe94C',
    insights: [
      {
        id: 'isg-entegrasyon',
        title: '3. Entegrasyon ve Yaptırım Senaryoları',
        paragraphs: [
          'Anlık bildirim: İhlal algılandığı an vardiya amirine, İSG uzmanına veya merkez güvenlik paneline personelin fotoğrafı ve lokasyon bilgisiyle push notification gönderilir.',
          'Turnike ve kapı kilit entegrasyonu: Personel baretini veya yeleğini giymediği sürece turnike fiziksel olarak açılmaz — eksiksiz girişler %100 engellenir.',
          'Geriye dönük raporlama: Hangi departmanın veya personelin aylık bazda ne kadar İSG ihlali yaptığı dijital raporlanarak eğitim planlaması için veri sağlar.',
        ],
      },
      {
        id: 'isg-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'İSG denetimlerini kağıt formlardan çıkarıp anlık otomasyona dönüştürüyoruz. Kameralarımız sahaya giren personelin baret, yelek ve diğer KKD ekipmanlarını milisaniyeler içinde kontrol ediyor; ihlal durumunda turnikeleri kilitleyip İSG uzmanına anlık görsel bildirim göndererek iş kazalarını gerçekleşmeden önlüyor.',
        ],
      },
    ],
  },
  {
    id: 'isg-forklift-mesafe',
    category: 'isg',
    title: 'Forklift Akıllı Mesafe Takip ve Hız Sınırlandırma',
    subtitle: 'Kör nokta analizi · kaplumbağa modu ECU entegrasyonu ve near-miss raporlama',
    driveFileId: '14e3Jfx_Neew8uQdiW9ayLCOiIAhf0s4P',
    insights: [
      {
        id: 'forklift-zonlar',
        title: '1. Dinamik Güvenlik Bölgeleri',
        paragraphs: [
          'Yeşil alan (güvenli): Yayanın forklifte güvenli mesafede olduğu durum.',
          'Sarı alan (yakın tehdit): Yayanın araca yaklaşmaya başladığı kritik sınır.',
          'Kırmızı ihlal alanı (tehlike zonu): İnsan veya engelin forkliftin ani durma mesafesinin / kör noktasının içine girdiği kritik bölge — kırmızı şeffaf kutu ile işaretlenir.',
        ],
      },
      {
        id: 'forklift-kaplumbaga',
        title: '2. Otomatik Kaplumbağa Modu (Speed Limiter)',
        paragraphs: [
          'CAN-Bus / ECU entegrasyonu: Kırmızı bölgede insan algılandığında forklift ECU veya hız valflerine doğrudan sinyal gönderilir.',
          'Hız sabitleme: Operatör gaza bassa bile araç otomatik kaplumbağa moduna (ör. maks. 5 km/s) alınır — yayanın kaçması için zaman kazanılır, çarpışma şiddeti minimize edilir.',
        ],
      },
      {
        id: 'forklift-uyari',
        title: '3. Pop-Up ve Sesli Bildirim',
        paragraphs: [
          'Kabin içi canlı ekran: Operatör ekranına anlık pop-up düşer; kör noktadaki insan kırmızı uyarı simgeleriyle gösterilir.',
          'Akustik siren/buzzer: Görsel uyarıya ek olarak kabin içi ve harici sirenler tetiklenerek operatör ve yaya yüksek sesle uyarılır.',
        ],
      },
      {
        id: 'forklift-rapor',
        title: '4. İSG Raporlama ve Güzergah Optimizasyonu',
        paragraphs: [
          'Near-miss logları: Kıl payı atlatılan tüm kaplumbağa modu tetiklenmeleri konum ve kamera kaydıyla İSG paneline raporlanır.',
          'Yoğunluk haritası: Forklift-insan karşılaşmalarının en çok yaşandığı koridorlar tespit edilerek yaya yolları yeniden tasarlanır.',
        ],
      },
      {
        id: 'forklift-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Forklift kazalarını operatörün dikkatine bırakmıyoruz; forklifti yapay zeka ile yönetiyoruz. Kör noktaya yaya girdiğinde kabin içine sesli ve görsel pop-up düşürüyor, aracı otomatik kaplumbağa moduna alarak hızını mekanik olarak kesiyoruz. Kazaları daha yaşanmadan donanımsal olarak engelliyoruz.',
        ],
      },
    ],
  },
  {
    id: 'isg-makine-uzuv-koruma',
    category: 'isg',
    title: 'Hareketli Makine Hatları — Akıllı Uzuv Koruma ve Donanımsal Acil Stop',
    subtitle: 'Pose Estimation iskelet takibi · Ethernet I/O röle ile mekanik güç kesme',
    driveFileId: '169saWK6_ign4kHyJhsz7QWXjZ8bm5nU1',
    insights: [
      {
        id: 'makine-pose',
        title: '1. Pose Estimation (İskelet Takibi) ve Risk Analizi',
        paragraphs: [
          'Kamera açısındaki personel, yapay zeka modeli tarafından el, bilek, dirsek ve omuz gibi kritik eklem noktalarıyla eş zamanlı haritalandırılır. Renkli iskelet çizgileri modelin milisaniyelik hassasiyetle takip ettiğini gösterir.',
          'Makinenin dönen veya sıkıştırma yapan en tehlikeli bölümü (ör. sarıcı ayırma bölgesi) sisteme sanal koruma kalkanı olarak kırmızı şeffaf ROI kutusu ile tanımlanır.',
        ],
      },
      {
        id: 'makine-relay',
        title: '2. Donanımsal Müdahale — Ethernet I/O Röle Entegrasyonu',
        paragraphs: [
          'Personelin el veya bilek eklem noktası kırmızı risk bölgesini ihlal ettiğinde (MAKİNE İHLAL DURUMU) yapay zeka anında algılar.',
          'Algılama anında yerel ağ üzerinden makine panosundaki Ethernet I/O röle modülüne dijital sinyal (Modbus TCP/IP vb.) gönderilir; röle devresi açılarak ana güç/kontaktör kesilir ve makine Acil Stop moduna geçer.',
        ],
      },
      {
        id: 'makine-panel',
        title: '3. Yönetim Paneli ve İSG Loglama',
        paragraphs: [
          'İhlal anında fabrika kontrol merkezindeki dijital ekrana kırmızı "MAKİNE İHLAL DURUMU" uyarısı düşer; görsel kanıt anlık olarak sunulur.',
          'Donanımsal stop ile sonuçlanan veya kıl payı atlatılan (near-miss) tüm ihlaller, personelin iskelet görüntüsü ve zaman damgasıyla İSG veri tabanına kaydedilir.',
        ],
      },
      {
        id: 'makine-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Ağır sanayide uzuv ve can kayıplarının önüne geçmek için yapay zekayı makinenin sigortası yapıyoruz. Kameralarımız personelin el ve kol hareketlerini Pose Estimation ile milimetrik izliyor; el tehlikeli kırmızı alana girdiği anda Ethernet I/O röle modülü üzerinden makinenin elektriğini milisaniyeler içinde keserek üretimi donanımsal olarak durduruyoruz.',
        ],
      },
    ],
  },
  {
    id: 'tekirdag-kagit-yasak-alan',
    category: 'isg',
    title: 'Tekirdağ Kağıt Fabrikası — Yasak Alan ve Donanımsal Güç Kesme',
    subtitle: 'Tehlikeli bölge ihlali algılama · Ethernet I/O röle ile anında makine durdurma',
    driveFileId: '1DVvldfiWtvU8qhL_b_Tejt5sZHGh2DnJ',
    insights: [
      {
        id: 'tekirdag-roi',
        title: '1. Yasak Alan (ROI) Tanımı ve İhlal Algılama',
        paragraphs: [
          'Makinenin dönen veya sıkıştırma yapan tehlikeli bölümü sisteme kırmızı şeffaf koruma alanı (ROI) olarak tanımlanır.',
          'Belirlenen alana insan girdiğinde — ayağının ucu bile risk sınırını geçse — yapay zeka anında ihlal algılar ve "YASAK HAREKET" uyarısı üretir.',
        ],
      },
      {
        id: 'tekirdag-relay',
        title: '2. Ethernet I/O Röle ile Donanımsal Güç Kesme',
        paragraphs: [
          'İhlal algılandığı anda yerel ağ üzerinden makine panosundaki Ethernet I/O röle modülüne dijital sinyal gönderilir.',
          'Röle devresi milisaniyeler içinde açılarak ana güç/kontaktör kesilir; makine operatörü mekanizmaya kaptırmadan önce donanımsal olarak durdurulur.',
        ],
      },
      {
        id: 'tekirdag-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'Tekirdağ kağıt fabrikasında tehlikeli makine bölgelerini yapay zeka kameralarıyla koruyoruz. Personel yasak alana ayak ucuyla bile girse Ethernet I/O röle modülü üzerinden makinenin gücünü anında keserek iş kazasını mekanik olarak engelliyoruz.',
        ],
      },
    ],
  },
  {
    id: 'eae-test-plc-isg',
    category: 'isg',
    title: 'EAE Test Ortamı — İSG Güvenlik ve PLC Entegrasyonu',
    subtitle: 'Kapı durum analizi · kabin içi Pose takibi ve donanımsal test kilitleme',
    driveFileId: '12vn3EwDMKK_tGBei2AnqnZW1LEQwqbAL',
    insights: [
      {
        id: 'eae-kapi',
        title: '1. Kapı Durum Analizi (Proses Giriş Kilidi)',
        paragraphs: [
          'Test odasının kapısı kameralar tarafından anlık izlenir; açık/kapalı durumu nesne algılama modelleriyle saniyelik doğrulanır.',
          'Testin başlaması için ilk zorunlu koşul (Condition 1), kapının tam olarak KAPALI konumda olduğunun yapay zeka tarafından onaylanmasıdır.',
        ],
      },
      {
        id: 'eae-pose',
        title: '2. Kabin İçi İnsan Varlığı Takibi (Pose & Alan İhlal Algılama)',
        paragraphs: [
          'Test odası içi kırmızı güvenlik poligonu (ROI Zone) ile çevrelenir; sadece kapının kapanması test başlatmak için yeterli değildir.',
          'Personel iskelet analiziyle en küçük el/kol hareketine kadar taranır; arkası dönük veya loş ışıkta bile varlık %100 doğrulukla algılanır.',
        ],
      },
      {
        id: 'eae-plc',
        title: '3. PLC Entegrasyonu ve Test Kilitleme (Interlocking)',
        paragraphs: [
          'Kapı kapalı olsa bile oda içinde insan algılandığında PLC\'ye KABIN_DOLU = 1 sinyali gönderilir; test kontaktörleri/güç röleleri kilitlenir — Start düğmesine basılsa bile test başlatılamaz.',
          'HMI ekranında "UYARI: İÇERİDE PERSONEL VAR - TEST BAŞLATILAMAZ!" uyarısı gösterilir. Personel çıkıp alan BOŞ raporlandığında PLC kilidi kaldırılır (TEST_IZIN = 1).',
        ],
      },
      {
        id: 'eae-rapor',
        title: '4. İSG Raporlama ve Dijital Karne',
        paragraphs: [
          'İçeride insan varken kaç kez test başlatma girişiminde bulunulduğu tarih, saat ve görsel kanıtla İSG veri tabanına kaydedilir.',
          'Near-miss (ramak kala) raporları otomatik beslenir; yüksek gerilim/test odalarında sıfır kaza hedefi donanımsal olarak desteklenir.',
        ],
      },
      {
        id: 'eae-ozet',
        title: 'Müşteriye Özet Mesaj',
        paragraphs: [
          'EAE test ortamında iş güvenliğini yapay zeka ve PLC\'nin kusursuz iş birliğiyle yönetiyoruz. Test kapısının kapandığını doğruladıktan sonra kabin içinde personel olup olmadığını Pose Estimation ile anlık denetliyor; içeride insan varken testin başlamasını PLC entegrasyonu ile donanımsal olarak engelliyoruz.',
        ],
      },
    ],
  },
];

export const videoCategoryOrder: VideoCategory[] = ['isg', 'yangin', 'verimlilik', 'custom'];

export function getDeck(id: string): Deck | undefined {
  return decks.find((d) => d.id === id);
}

export function getVideo(id: string): VideoDemo | undefined {
  return videoDemos.find((v) => v.id === id);
}

export function getVideosByCategory(category: VideoCategory): VideoDemo[] {
  return videoDemos.filter((v) => v.category === category);
}

export function getVideoNeighbors(videoId: string) {
  const video = getVideo(videoId);
  if (!video) return { prev: undefined, next: undefined, index: -1, total: 0 };
  const list = getVideosByCategory(video.category);
  const index = list.findIndex((v) => v.id === videoId);
  return {
    prev: index > 0 ? list[index - 1] : undefined,
    next: index >= 0 && index < list.length - 1 ? list[index + 1] : undefined,
    index,
    total: list.length,
  };
}
