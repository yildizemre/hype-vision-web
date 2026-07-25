/** Türkçe SEO landing page içerikleri — Hype Vision endüstriyel yapay zeka modülleri ve sektör sayfaları */

export type LandingSection = { heading: string; paragraphs: string[] };

export type LandingPage = {
  slug: string;
  type: 'module' | 'sector';
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  h1Highlight: string;
  intro: string;
  accuracy?: string;
  specs: { label: string; value: string }[];
  sections: LandingSection[];
  useCases: string[];
  benefits: string[];
  relatedSlugs: string[];
};

export const MODULE_SLUGS = [
  'baret-tespit-sistemi',
  'kkd-kontrol-kamera-sistemi',
  'yasakli-alan-ihlal-tespiti',
  'forklift-yaya-guvenlik-sistemi',
  'dusme-tespit-sistemi',
  'kalite-kontrol-goruntu-isleme',
  'yuzey-kusuru-tespiti',
  'oee-takip-sistemi',
  'personel-verimlilik-analizi-kamera',
  'kvkk-uyumlu-kamera-analitigi',
  'onvif-rtsp-yapay-zeka-entegrasyonu',
] as const;

export const SEO_SECTOR_SLUGS = [
  'tekstil-fabrikasi-yapay-zeka',
  'gida-fabrikasi-kalite-kontrol',
  'depo-lojistik-guvenlik',
] as const;

const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'baret-tespit-sistemi',
    type: 'module',
    title: 'Baret Tespit Sistemi | Hype Vision — %96–98,6 Doğruluk, Turnike Entegrasyonu',
    metaDescription:
      'Hype Vision baret tespit sistemi: mevcut IP kameralarınızla %96–98,6 doğruluk, turnike kilitleme, anlık alarm. RTSP/ONVIF, Edge mimari, KVKK uyumlu. GTÜ Teknopark Gebze.',
    eyebrow: 'İSG Modülü · Baret Tespiti',
    h1: 'Baret tespit sistemi —',
    h1Highlight: '7/24 otomatik denetim',
    intro:
      'Hype Vision baret tespit modülü, tesisinizdeki mevcut IP kameralardan (RTSP/ONVIF) gelen canlı görüntüyü derin öğrenme ile analiz ederek baret eksikliğini anında tespit eder. İnsan denetiminin örneklemeli kaldığı sahalarda yapay zeka her kareyi izler; ihlal anında panel, mobil bildirim veya turnike kilitleme tetiklenir. GTÜ Teknopark Gebze merkezli Hype Vision, 2020\'den beri endüstriyel İSG projelerinde sahada kanıtlanmış doğruluk oranları sunar. Vardiya değişimlerinde yoğunlaşan giriş trafiğinde baret ihlali en sık İSG raporlamalarından biridir; otomatik tespit bu ihlalleri anında görünür kılar.',
    accuracy: '%96–98,6',
    specs: [
      { label: 'Doğruluk', value: '%96–98,6 (saha kalibrasyonu sonrası)' },
      { label: 'Alarm gecikmesi', value: '<1 sn (Edge kurulum)' },
      { label: 'Protokoller', value: 'RTSP, ONVIF, Modbus/Ethernet/IP' },
      { label: 'Turnike entegrasyonu', value: 'İhlalde otomatik kilitleme' },
      { label: 'Mimari', value: 'Edge · Cloud · Hibrit' },
      { label: 'Kamera uyumu', value: 'Hikvision, Dahua, Axis ve tüm IP markalar' },
    ],
    sections: [
      {
        heading: 'Baret tespiti neden otomatikleştirilmeli?',
        paragraphs: [
          'İnşaat, metal, kimya ve ağır sanayi tesislerinde baret kullanımı yasal zorunluluktur; ancak vardiya değişimlerinde, yoğun trafikte ve geniş sahalarda manuel denetim sürdürülebilir değildir. Güvenlik görevlisi dakikada belirli sayıda personeli kontrol edebilir; yapay zeka ise saniyede onlarca kareyi eşzamanlı analiz eder. Bu fark, ihlalin tespit edilmeden geçmesini engeller ve iş kazası riskini ölçülebilir biçimde düşürür.',
          'Hype Vision baret tespit sistemi, ham video depolamak yerine anlamlandırılmış olay üretir: ihlal zaman damgası, kamera kimliği, bölge etiketi ve kanıt karesi panelde görünür. Böylece İSG müdürleri raporlama yaparken "kim, ne zaman, hangi kapıda baretsiz geçti?" sorusuna anında yanıt alır. Katalog verilerinde baret modülü %96–98,6 doğruluk bandında performans göstermektedir.',
          'Sistem mevcut altyapınıza entegre olur; yeni kamera almanız gerekmez. Hikvision, Dahua, Axis, Bosch veya RTSP destekleyen herhangi bir IP kamera akışına bağlanır. Kurulum GTÜ Teknopark Gebze\'deki mühendislik ekibimiz tarafından keşif sonrası planlanır; pilot aşamasında saha verisiyle model kalibrasyonu yapılır.',
          'OSB ve organize sanayi bölgelerinde pilot projelerde baret ihlal oranı ilk 90 günde %40–60 düşüş gösterebilir; hedefli eğitim ve turnike entegrasyonu bu etkiyi güçlendirir.',
        ],
      },
      {
        heading: 'Turnike ve erişim kontrolü entegrasyonu',
        paragraphs: [
          'Baret ihlali tespit edildiğinde turnike kilitleme senaryosu endüstriyel protokoller üzerinden kurgulanabilir. Modbus TCP, Ethernet/IP veya dijital I/O röle çıkışları ile turnike, bariyer veya kapı kontrolü otomatik devreye alınır. Personel baretsiz geçiş denediğinde sistem hem alarm üretir hem de fiziksel erişimi engeller; bu çift katmanlı yaklaşım davranış değişimini hızlandırır.',
          'Turnike entegrasyonu isteğe bağlıdır. Bazı tesislerde yalnızca uyarı ve raporlama yeterli olurken, yüksek riskli bölgelerde (yüksek gerilim, eriyik metal, vinç altı) fiziksel kilitleme tercih edilir. Hype Vision her iki senaryoyu da destekler; keşif toplantısında operasyon akışınız analiz edilir ve en uygun tetikleme noktaları belirlenir.',
          'Entegrasyon sırasında mevcut erişim kontrol sisteminiz (kart okuyucu, biyometrik, turnike markası) korunur. Hype Vision yalnızca ihlal sinyali üretir; turnike kontrolörünüze bu sinyal tanımlı protokolle iletilir. Kurulum sonrası test senaryoları ile false positive oranı minimize edilir.',
          'Özen, Gunnebo ve benzeri turnike kontrolörlerine Modbus/Ethernet/IP ile dijital çıkış sinyali gönderilir; mevcut erişim kontrol altyapınız korunur.',
        ],
      },
      {
        heading: 'Teknik mimari ve KVKK uyumu',
        paragraphs: [
          'Görüntü işleme Edge sunucuda veya tanımlı GPU biriminde gerçekleşir; video tesis dışına çıkmadan analiz tamamlanır. Bu mimari KVKK açısından idealdir: ham görüntü zorunlu olmadıkça saklanmaz, yalnızca ihlal olayı ve kanıt karesi kaydedilir. Yüz tanıma varsayılan olarak kapalıdır; baret tespiti kişisel veri işlemeden ekipman eksikliğine odaklanır.',
          'Cloud veya hibrit mimaride de aynı prensipler geçerlidir. Merkezi panel farklı lokasyonlardan gelen baret ihlal metriklerini toplar; rol bazlı yetki ile yalnızca yetkili kullanıcılar raporlara erişir. Veri şifreleme, erişim logları ve saklama süresi politikaları sözleşme kapsamında tanımlanır.',
          'Alarm gecikmesi Edge kurulumda 100–300 ms bandındadır; kritik İSG senaryolarında 1 saniyenin altında tepki hedeflenir. Sistem offline çalışabilir: internet kesilse bile analiz devam eder, veriler yerelde saklanır ve bağlantı geldiğinde senkronize edilir.',
          'Baret rengi (beyaz, sarı, mavi, kırmızı) ve tipi model tarafından ayırt edilir; departman bazlı farklı baret kuralları tanımlanabilir.',
        ],
      },
      {
        heading: 'Kurulum süreci ve pilot paket',
        paragraphs: [
          'Hype Vision kurulum süreci dört aşamadan oluşur: saha keşfi ve kamera açı optimizasyonu, modül konfigürasyonu, kalibrasyon ve canlıya alma. 4–8 kamera ile standart baret modülü genellikle 1–3 iş gününde devreye alınır. Orta ölçekli tesislerde 1–2 hafta, çok lokasyonlu projelerde 3–6 hafta planlanır.',
          '30 günlük pilot paket ile belirli bir kapı veya bölgede baret tespitini test edebilirsiniz. Pilot sonunda doğruluk oranı, false positive/negative analizi ve ROI raporu sunulur. Memnun kalırsanız aynı altyapı üzerine KKD, yasaklı alan ve forklift modülleri eklenir.',
          'Demo ve keşif için GTÜ Teknopark Gebze ofisimizden veya uzaktan görüntülü toplantı ile başlayabilirsiniz. Mevcut kamera marka/model listenizi paylaşmanız yeterli; RTSP/ONVIF uyumluluğu ön değerlendirmede kontrol edilir.',
          'Kurulum sonrası İSG ekibinize panel eğitimi verilir; WhatsApp, Telegram, e-posta ve SMS bildirim kanalları konfigüre edilir.',
        ],
      },
      {
        heading: 'Raporlama ve sürekli iyileştirme — demo ve iletişim',
        paragraphs: [
          'Panelde günlük, haftalık ve vardiya bazlı baret ihlal sayıları görüntülenir. Bölge ısı haritası hangi kapı veya koridorun en çok ihlal ürettiğini gösterir; İSG ekibi hedefli eğitim veya fiziksel düzenleme yapabilir. REST API ile veriler ERP, SAP veya BI araçlarına aktarılabilir.',
          'Custom model eğitimi mümkündür: baret rengi, tipi veya özel saha koşulları (toz, düşük ışık, reflektif yüzey) için saha verisi toplanır ve model fine-tune edilir. Bu sayede standart modelin yetersiz kaldığı özel senaryolarda doğruluk artırılır.',
          'Hype Vision baret tespit sistemi tek başına bir ürün değil; KKD kontrol, yasaklı alan ve forklift-yaya modülleriyle aynı platformda çalışır. Tek panelden tüm İSG metriklerinizi yönetir, lisans maliyetini yalnızca kullandığınız modüller için ödersiniz.',
          'VMS popup ile Milestone, Dahua SmartPSS ve Hikvision iVMS-4200 ekranlarında ihlal anında görüntülenir.',
          '2020 yılından bu yana GTÜ Teknopark Gebze merkezli Hype Vision, endüstriyel yapay zeka ve görüntü işleme alanında onlarca saha projesi tamamlamıştır. baret tespit modülü tek başına bir ürün değil; İSG, kalite, verimlilik ve güvenlik modüllerinin tamamı aynı RTSP/ONVIF kamera altyapısı üzerinde modüler lisans ile çalışır. Yeni kamera almadan mevcut Hikvision, Dahua, Axis veya diğer IP kameralarınızı yapay zeka katmanına bağlarsınız.',
          'Edge-first mimari KVKK uyumunu teknik düzeyde sağlar: ham video varsayılan depolanmaz, yüz tanıma kapalıdır, yalnızca olay ve metrik kaydedilir. Alarm gecikmesi 100–300 ms bandındadır; offline çalışma desteği ile internet kesilse bile analiz devam eder. REST API ile ERP, SAP, MES, WMS ve BI araçlarına entegrasyon mümkündür.',
          'Modüler lisans modeli ile yalnızca kullandığınız fonksiyonlar için ödeme yaparsınız. 30 günlük pilot paket, keşif toplantısı ve kurulum sonrası eğitim standart hizmet kapsamındadır. İletişim formu veya telefon ile demo talep edin; 24 saat içinde GTÜ Teknopark Gebze ekibimizden dönüş alın.',
          'Hype Vision baret tespit çözümünü risk almadan değerlendirmek için 30 günlük pilot paket veya ücretsiz keşif toplantısı talep edebilirsiniz. GTÜ Teknopark Gebze, Hightech Binası\'ndaki ofisimizde canlı demo yapılabilir; uzaktan görüntülü toplantı ile RTSP/ONVIF uyumluluk değerlendirmesi de mümkündür. Mevcut IP kamera marka/model listenizi info@hypevisionlab.com adresine iletmeniz yeterlidir.',
          'Keşif sürecinde saha layout, kamera açıları, aydınlatma koşulları ve operasyon akışınız analiz edilir. Mimari önerisi (Edge, Cloud veya hibrit), modül seçimi ve kurulum takvimi netleştirilir. Pilot sonunda doğruluk raporu, false positive/negative analizi ve ROI projeksiyonu sunulur; memnun kalmazsanız taahhüt yoktur.',
          'Tek CTA odak noktamız iletişim ve demo: /iletisim formu, telefon (+90 541 862 9190) veya e-posta ile randevu alın. 2020\'den beri endüstriyel yapay zeka deneyimimizle mevcut kameralarınızı yapay zeka katmanına bağlayın; yeni kamera yatırımı olmadan İSG, kalite ve verimlilik metriklerinizi tek panelde toplayın.',
          'Hype Vision olarak GTÜ Teknopark Gebze merkezimizden Türkiye genelinde endüstriyel tesislere hizmet veriyoruz. Katalog PDF\'imizi indirerek modül detaylarını inceleyebilir; keşif toplantısında saha özelinde mimari önerisi alabilirsiniz. İletişim formu doldurarak demo talebinizi iletin — 24 saat içinde dönüş yapılır.',
        ],
      },
    ],
    useCases: [
      'Fabrika giriş turnikelerinde baretsiz geçiş engelleme',
      'İnşaat sahası giriş kapılarında otomatik denetim',
      'Metal ve döküm tesislerinde eriyik alan giriş kontrolü',
      'Kimya ve petrokimya tesislerinde zorunlu KKD bölgesi',
      'Liman ve lojistik sahalarında yüksek trafikli giriş noktaları',
      'Çok vardiyalı üretim tesislerinde 7/24 otomatik raporlama',
    ],
    benefits: [
      'Mevcut IP kameralarınızla çalışır; yeni yatırım gerekmez',
      '%96–98,6 doğruluk ile sahada kanıtlanmış performans',
      'Turnike kilitleme ile ihlali fiziksel olarak engeller',
      'KVKK uyumlu Edge mimari; ham video depolanmaz',
      'Anlık alarm: panel, mobil, VMS popup, e-posta/SMS',
      'Modüler lisans: yalnızca baret modülü için ödeme',
    ],
    relatedSlugs: [
      'kkd-kontrol-kamera-sistemi',
      'yasakli-alan-ihlal-tespiti',
      'onvif-rtsp-yapay-zeka-entegrasyonu',
    ],
  },
  {
    slug: 'kkd-kontrol-kamera-sistemi',
    type: 'module',
    title: 'KKD Kontrol Kamera Sistemi | Baret, Yelek, Maske, Eldiven — Hype Vision',
    metaDescription:
      'Tam KKD kontrolü: baret, yelek, maske, eldiven tespiti mevcut kameralarınızla. %96+ doğruluk, turnike entegrasyonu, KVKK uyumlu Edge. Hype Vision GTÜ Teknopark.',
    eyebrow: 'İSG Modülü · Tam KKD Denetimi',
    h1: 'KKD kontrol kamera sistemi —',
    h1Highlight: 'baret, yelek, maske, eldiven',
    intro:
      'Hype Vision KKD kontrol modülü, kişisel koruyucu donanım eksikliklerini tek platformda izler: baret, yansıtıcı yelek, maske ve eldiven tespiti mevcut IP kameralarınızdan (RTSP/ONVIF) gerçek zamanlı yapılır. Her modül bağımsız veya birlikte devreye alınabilir; ihlal anında alarm, kanıt görüntüsü ve isteğe bağlı turnike kilitleme tetiklenir. GTÜ Teknopark Gebze\'de geliştirilen platform, 2020\'den beri endüstriyel İSG projelerinde kullanılmaktadır. Tek bir kamera görüntüsünde birden fazla KKD eksikliği eşzamanlı tespit edilir; baret var yelek yok gibi kombinasyonlar ayrı alarm kategorisi olarak raporlanır.',
    accuracy: '%96–98,6',
    specs: [
      { label: 'Tespit edilen KKD', value: 'Baret, yelek, maske, eldiven' },
      { label: 'Doğruluk', value: '%96–98,6 (modül ve sahaya göre)' },
      { label: 'Protokoller', value: 'RTSP, ONVIF, Modbus, REST API' },
      { label: 'Alarm gecikmesi', value: '<1 sn' },
      { label: 'Mimari', value: 'Edge · Cloud · Hibrit · KVKK uyumlu' },
      { label: 'Entegrasyon', value: 'Turnike, PLC, VMS popup, ERP/MES' },
    ],
    sections: [
      {
        heading: 'Tam KKD denetimi neden kritik?',
        paragraphs: [
          '6331 sayılı İş Sağlığı ve Güvenliği Kanunu ve ilgili yönetmelikler, tehlikeli işlerde uygun KKD kullanımını işveren için yasal yükümlülük haline getirir. Baret tek başına yeterli değildir; yansıtıcı yelek, koruyucu eldiven ve maske farklı risk profillerinde zorunludur. Manuel denetim tüm bu unsurları sürekli kontrol edemez; yapay zeka destekli kamera sistemi ise çoklu KKD eksikliğini aynı karede tespit eder.',
          'Hype Vision KKD kontrol modülü, derin öğrenme modelleri ile her personeli frame bazında analiz eder. Baret var ama yelek yok, eldiven eksik veya maske takılı değil gibi kombinasyonlar ayrı ayrı sınıflandırılır. Panelde ihlal türü, konum ve zaman damgası ile birlikte raporlanır; İSG müdürleri hangi KKD kuralının en çok ihlal edildiğini görür.',
          'Sistem mevcut IP kameralarınıza bağlanır; Hikvision, Dahua, Axis, Bosch, Hanwha ve RTSP destekleyen tüm markalar desteklenir. Yeni kamera almanız gerekmez. Keşif sonrası yalnızca gerekli noktalarda çözünürlük veya açı optimizasyonu önerilebilir.',
          '6331 sayılı kanun kapsamında KKD kullanımı işveren yükümlülüğüdür; otomatik denetim denetim raporlarında somut kanıt sağlar.',
        ],
      },
      {
        heading: 'Modüler KKD yapılandırması',
        paragraphs: [
          'Her KKD türü bağımsız modül olarak lisanslanır: yalnızca baret, baret+yelek veya tam paket (baret, yelek, maske, eldiven) seçebilirsiniz. Bu modüler yapı maliyeti kontrol altında tutar; önce kritik bölgede baret modülünü pilot edip sonra diğer KKD türlerini ekleyebilirsiniz.',
          'Bölge bazlı kural tanımlama mümkündür: üretim hattında maske zorunlu, depo alanında yelek zorunlu, kimyasal bölgede eldiven+baret zorunlu gibi senaryolar konfigüre edilir. Aynı kamera farklı bölgelerde farklı KKD kuralları uygulayabilir; ROI (Region of Interest) ile analiz alanı daraltılır.',
          'Turnike ve erişim kontrolü entegrasyonu ile KKD ihlali algılandığında geçiş engellenebilir. Modbus TCP, Ethernet/IP veya dijital I/O üzerinden turnike, bariyer veya hat durdurma senaryoları kurgulanır. Katalog SSS\'de belirtildiği gibi yangın paneli tetikleme de mümkündür.',
          'Gıda ve kimya tesislerinde hijyen bölgesi maske+eldiven zorunluluğu ayrı ROI kuralı ile tanımlanır.',
        ],
      },
      {
        heading: 'Edge mimari ve veri gizliliği',
        paragraphs: [
          'KKD analizi Edge sunucuda gerçekleşir; video tesis dışına çıkmadan işlenir. Ham görüntü zorunlu olmadıkça saklanmaz; yalnızca ihlal olayı, KKD türü etiketi ve kanıt karesi kaydedilir. Yüz tanıma varsayılan kapalıdır. Bu yaklaşım KVKK ve işyeri gizliliği gereksinimlerini karşılar.',
          'Cloud veya hibrit mimaride merkezi panel farklı tesislerden gelen KKD ihlal metriklerini toplar. Rol bazlı yetki ile lokasyon filtresi uygulanır; her kullanıcı yalnızca yetkili olduğu tesis ve bölgeyi görür. Veri şifreleme ve saklama süresi sözleşme kapsamında tanımlanır.',
          'Offline çalışma desteği ile internet kesilse bile KKD denetimi devam eder. Veriler yerelde saklanır; bağlantı geldiğinde merkeze senkronize edilir. Bu özellik üretim kesintisi yaşanmaması gereken tesislerde kritiktir.',
          'Vardiya bazlı KKD ihlal trendi eğitim planlaması için veri sağlar; hangi vardiyada hangi KKD türü en çok eksik görülür analiz edilir.',
        ],
      },
      {
        heading: 'Saha kurulumu ve kalibrasyon',
        paragraphs: [
          'KKD modülü kurulumu keşif ile başlar: kamera açıları, ışık koşulları ve personel akış rotaları analiz edilir. 4–8 kamera ile standart kurulum 1–3 iş gününde tamamlanır. Pilot aşamasında saha verisiyle model kalibrasyonu yapılır; false positive oranı minimize edilir.',
          'Düşük ışık, toz, buhar veya reflektif yüzey gibi zorlu koşullarda custom model eğitimi önerilir. Saha verisi toplanır, etiketlenir ve model fine-tune edilir. Custom modeller mevcut panele ve alarm altyapısına entegre edilir.',
          'GTÜ Teknopark Gebze\'deki mühendislik ekibimiz kurulum sonrası test senaryoları uygular ve kullanıcı eğitimi verir. 30 günlük pilot paket ile belirli bir bölgede KKD kontrolünü risk almadan test edebilirsiniz.',
          'Turnike kilitleme ile ihlalde fiziksel geçiş engellenir; davranış değişimi hızlandırılır.',
        ],
      },
      {
        heading: 'Raporlama ve operasyonel değer — demo ve iletişim',
        paragraphs: [
          'Panelde günlük, vardiya ve bölge bazlı KKD ihlal raporları görüntülenir. Hangi KKD türünün en çok eksik olduğu, hangi vardiyada ihlal arttığı ve hangi kapıda sorun yoğunlaştığı analiz edilir. REST API ile veriler ERP, SAP veya BI araçlarına aktarılabilir.',
          'KKD ihlal trendi zaman içinde azalıyorsa eğitim ve sistem etkili demektir; artıyorsa hedefli müdahale planlanır. Isı haritası görselleştirmesi İSG denetimlerinde somut kanıt sunar.',
          'Hype Vision KKD kontrol sistemi, baret tespit, yasaklı alan, forklift-yaya ve düşme modülleriyle aynı platformda çalışır. Tek altyapı, tek panel, modüler lisans — endüstriyel İSG\'nin tüm boyutlarını kapsar. Demo ve keşif için iletişime geçin.',
          'REST API ile ihlal kayıtları SAP, ERP veya BI araçlarına otomatik aktarılır.',
          '2020 yılından bu yana GTÜ Teknopark Gebze merkezli Hype Vision, endüstriyel yapay zeka ve görüntü işleme alanında onlarca saha projesi tamamlamıştır. KKD kontrol modülü tek başına bir ürün değil; İSG, kalite, verimlilik ve güvenlik modüllerinin tamamı aynı RTSP/ONVIF kamera altyapısı üzerinde modüler lisans ile çalışır. Yeni kamera almadan mevcut Hikvision, Dahua, Axis veya diğer IP kameralarınızı yapay zeka katmanına bağlarsınız.',
          'Edge-first mimari KVKK uyumunu teknik düzeyde sağlar: ham video varsayılan depolanmaz, yüz tanıma kapalıdır, yalnızca olay ve metrik kaydedilir. Alarm gecikmesi 100–300 ms bandındadır; offline çalışma desteği ile internet kesilse bile analiz devam eder. REST API ile ERP, SAP, MES, WMS ve BI araçlarına entegrasyon mümkündür.',
          'Modüler lisans modeli ile yalnızca kullandığınız fonksiyonlar için ödeme yaparsınız. 30 günlük pilot paket, keşif toplantısı ve kurulum sonrası eğitim standart hizmet kapsamındadır. İletişim formu veya telefon ile demo talep edin; 24 saat içinde GTÜ Teknopark Gebze ekibimizden dönüş alın.',
          'Hype Vision KKD kontrol çözümünü risk almadan değerlendirmek için 30 günlük pilot paket veya ücretsiz keşif toplantısı talep edebilirsiniz. GTÜ Teknopark Gebze, Hightech Binası\'ndaki ofisimizde canlı demo yapılabilir; uzaktan görüntülü toplantı ile RTSP/ONVIF uyumluluk değerlendirmesi de mümkündür. Mevcut IP kamera marka/model listenizi info@hypevisionlab.com adresine iletmeniz yeterlidir.',
          'Keşif sürecinde saha layout, kamera açıları, aydınlatma koşulları ve operasyon akışınız analiz edilir. Mimari önerisi (Edge, Cloud veya hibrit), modül seçimi ve kurulum takvimi netleştirilir. Pilot sonunda doğruluk raporu, false positive/negative analizi ve ROI projeksiyonu sunulur; memnun kalmazsanız taahhüt yoktur.',
          'Tek CTA odak noktamız iletişim ve demo: /iletisim formu, telefon (+90 541 862 9190) veya e-posta ile randevu alın. 2020\'den beri endüstriyel yapay zeka deneyimimizle mevcut kameralarınızı yapay zeka katmanına bağlayın; yeni kamera yatırımı olmadan İSG, kalite ve verimlilik metriklerinizi tek panelde toplayın.',
          'Hype Vision olarak GTÜ Teknopark Gebze merkezimizden Türkiye genelinde endüstriyel tesislere hizmet veriyoruz. Katalog PDF\'imizi indirerek modül detaylarını inceleyebilir; keşif toplantısında saha özelinde mimari önerisi alabilirsiniz. İletişim formu doldurarak demo talebinizi iletin — 24 saat içinde dönüş yapılır.',
        ],
      },
    ],
    useCases: [
      'Üretim hattı girişlerinde tam KKD kontrolü',
      'Kimya ve petrokimya tesislerinde zorunlu ekipman denetimi',
      'İnşaat ve altyapı projelerinde çoklu KKD ihlal tespiti',
      'Gıda tesislerinde hijyen bölgesi maske+eldiven kontrolü',
      'Liman ve lojistik sahalarında yansıtıcı yelek zorunluluğu',
      'Çok vardiyalı fabrikalarda otomatik İSG raporlaması',
    ],
    benefits: [
      'Baret, yelek, maske, eldiven tek platformda',
      'Mevcut IP kameralar; marka bağımsız RTSP/ONVIF',
      '%96+ doğruluk; saha kalibrasyonu ile optimize',
      'Turnike kilitleme ve PLC entegrasyonu',
      'KVKK uyumlu; ham video depolanmaz',
      'Modüler lisans; yalnızca ihtiyacınız olan KKD türleri',
    ],
    relatedSlugs: [
      'baret-tespit-sistemi',
      'yasakli-alan-ihlal-tespiti',
      'kvkk-uyumlu-kamera-analitigi',
    ],
  },
  {
    slug: 'yasakli-alan-ihlal-tespiti',
    type: 'module',
    title: 'Yasaklı Alan İhlal Tespiti | %97,8 Doğruluk — Hype Vision',
    metaDescription:
      'Yasaklı ve tehlikeli bölge ihlal tespiti: %97,8 doğruluk, ROI tanımlama, anlık alarm. Mevcut IP kameralar, RTSP/ONVIF, Edge mimari. Hype Vision GTÜ Teknopark Gebze.',
    eyebrow: 'İSG Modülü · Yasaklı Alan',
    h1: 'Yasaklı alan ihlal tespiti —',
    h1Highlight: 'tehlikeli bölgeye anında müdahale',
    intro:
      'Hype Vision yasaklı alan modülü, tesisinizde tanımladığınız tehlikeli veya yasak bölgelere yetkisiz girişi mevcut IP kameralarınızdan gerçek zamanlı tespit eder. Makine önü, vinç altı, yüksek gerilim bölgesi veya eriyik metal alanı gibi kritik noktalarda personel veya araç ihlali anında alarm üretir. Katalog verilerinde bu modül %97,8 doğruluk bandında performans göstermektedir. Pres önü, vinç altı ve eriyik metal bölgesi gibi kritik noktalarda saniyeler içinde ihlal algılanır; operatör müdahalesi gerekmeden alarm üretilir.',
    accuracy: '%97,8',
    specs: [
      { label: 'Doğruluk', value: '%97,8 (saha kalibrasyonu sonrası)' },
      { label: 'Bölge tanımı', value: 'Çokgen ROI, dinamik/sabit alan' },
      { label: 'Alarm gecikmesi', value: '<1 sn' },
      { label: 'Protokoller', value: 'RTSP, ONVIF, Modbus, REST API' },
      { label: 'Tetikleme', value: 'Siren, hat durdurma, VMS popup' },
      { label: 'Mimari', value: 'Edge · Cloud · Hibrit' },
    ],
    sections: [
      {
        heading: 'Tehlikeli bölge ihlali neden otomatik izlenmeli?',
        paragraphs: [
          'Endüstriyel tesislerde makine önü, pres altı, eriyik metal havuzu, kimyasal depolama ve vinç altı gibi bölgeler yasak alan olarak işaretlenir. Personel kısa süreli dikkatsizlikle bu bölgelere girebilir; manuel gözetim 7/24 sürdürülemez. Yapay zeka destekli kamera analitiği, tanımlı ROI (Region of Interest) içinde insan veya araç tespiti yaparak ihlali saniyeler içinde algılar.',
          'Hype Vision yasaklı alan modülü, çokgen bölge tanımlama ile esnek konfigürasyon sunar. Aynı kamera görüntüsünde birden fazla yasak bölge tanımlanabilir; her bölge için farklı alarm seviyesi ve tetikleme kuralı uygulanabilir. Ihlal anında panel, mobil bildirim, siren veya hat durdurma devreye alınır.',
          'Sistem mevcut IP kameralarınıza (Hikvision, Dahua, Axis, RTSP/ONVIF) bağlanır. GTÜ Teknopark Gebze merkezli Hype Vision ekibi keşif sonrası kamera açılarını ve bölge sınırlarını optimize eder.',
          'Çokgen ROI ile karmaşık bölge şekilleri tanımlanır; L-şekilli makine önü veya dairesel vinç kapsama alanı çizilebilir.',
          'İSG denetimlerinde yasaklı alan ihlali somut kanıt gerektirir; zaman damgalı olay kaydı ve kanıt karesi panelde arşivlenir.',
        ],
      },
      {
        heading: 'ROI tanımlama ve kural motoru',
        paragraphs: [
          'Panel üzerinden sürükle-bırak veya koordinat girişi ile yasak bölge çizilir. Bölge statik (sabit makine önü) veya dinamik (hareketli vinç kapsama alanı) olabilir. Giriş, çıkış veya sürekli bulunma gibi farklı ihlal türleri tanımlanır; örneğin makine önünde 3 saniyeden uzun kalma ihlal sayılırken anlık geçiş uyarı seviyesinde kalabilir.',
          'Kural motoru zaman dilimi, vardiya ve personel tipi filtreleri destekler. Bakım ekibi belirli saatlerde yasak bölgeye girebilir; bu durumda whitelist veya geçici kural devre dışı bırakma uygulanır. Böylece false positive oranı minimize edilir.',
          'Entegrasyon katmanında Modbus, Ethernet/IP veya dijital I/O ile PLC\'ye sinyal gönderilir. Pres durdurma, konveyör durdurma veya siren tetikleme senaryoları endüstriyel protokoller üzerinden kurgulanır.',
          'Whitelist ile bakım ekibi belirli saatlerde yasak bölgeye girebilir; false positive minimize edilir.',
          'İSG denetimlerinde yasaklı alan ihlali somut kanıt gerektirir; zaman damgalı olay kaydı ve kanıt karesi panelde arşivlenir.',
        ],
      },
      {
        heading: 'Pose takibi ve gelişmiş algılama',
        paragraphs: [
          'Yasaklı alan modülü temel nesne tespiti ile çalışır; isteğe bağlı pose estimation ile personelin duruşu ve hareket yönü de analiz edilebilir. Makine önüne eğilme, vinç altında durma gibi tehlikeli pozisyonlar ayrı alarm kategorisi olarak raporlanır.',
          'Forklift ve yaya ayrımı yapılır; yalnızca yaya ihlali veya yalnızca araç ihlali gibi filtreler uygulanabilir. Depo ve lojistik sahalarında forklift yasak bölgeleri ile yaya yürüyüş yolları ayrı tanımlanır.',
          'Düşük ışık, toz veya buhar ortamında custom model eğitimi ile doğruluk artırılır. Pilot aşamasında saha verisi toplanır ve model fine-tune edilir.',
          'PLC entegrasyonu ile pres durdurma, konveyör durdurma veya siren tetikleme senaryoları kurgulanır.',
          'İSG denetimlerinde yasaklı alan ihlali somut kanıt gerektirir; zaman damgalı olay kaydı ve kanıt karesi panelde arşivlenir.',
        ],
      },
      {
        heading: 'KVKK ve Edge mimari',
        paragraphs: [
          'Görüntü analizi Edge sunucuda gerçekleşir; video tesis dışına çıkmadan işlenir. Ham görüntü zorunlu olmadıkça saklanmaz; yalnızca ihlal olayı, bölge etiketi ve kanıt karesi kaydedilir. KVKK uyumlu mimari ile kişisel veri minimizasyonu sağlanır.',
          'Cloud veya hibrit mimaride merkezi panel çok lokasyonlu tesislerden gelen yasaklı alan ihlallerini toplar. REST API ile ERP, SAP veya BI araçlarına veri aktarımı mümkündür.',
          'Offline çalışma desteği ile internet kesilse bile analiz devam eder. Kritik İSG senaryolarında kesintisiz denetim garanti edilir.',
          'Pose estimation ile tehlikeli eğilme ve vinç altında durma ayrı alarm kategorisi olarak raporlanır.',
          'İSG denetimlerinde yasaklı alan ihlali somut kanıt gerektirir; zaman damgalı olay kaydı ve kanıt karesi panelde arşivlenir.',
        ],
      },
      {
        heading: 'Kurulum, pilot ve demo — demo ve iletişim',
        paragraphs: [
          'Keşif sonrası kamera açıları ve bölge sınırları optimize edilir. 4–8 kamera ile standart kurulum 1–3 iş gününde tamamlanır. 30 günlük pilot paket ile belirli bir tehlikeli bölgede modülü test edebilirsiniz.',
          'Panelde bölge bazlı ihlal ısı haritası, vardiya karşılaştırması ve trend analizi görüntülenir. İSG denetimlerinde somut kanıt sunar.',
          'Hype Vision yasaklı alan modülü, baret/KKD, forklift-yaya ve düşme tespiti ile aynı platformda çalışır. Demo ve keşif için GTÜ Teknopark Gebze ofisimizden veya uzaktan toplantı ile başlayın.',
          'Isı haritası hangi bölgenin en riskli olduğunu gösterir; fiziksel bariyer planlaması desteklenir.',
          'İSG denetimlerinde yasaklı alan ihlali somut kanıt gerektirir; zaman damgalı olay kaydı ve kanıt karesi panelde arşivlenir.',
          '2020 yılından bu yana GTÜ Teknopark Gebze merkezli Hype Vision, endüstriyel yapay zeka ve görüntü işleme alanında onlarca saha projesi tamamlamıştır. yasaklı alan ihlal modülü tek başına bir ürün değil; İSG, kalite, verimlilik ve güvenlik modüllerinin tamamı aynı RTSP/ONVIF kamera altyapısı üzerinde modüler lisans ile çalışır. Yeni kamera almadan mevcut Hikvision, Dahua, Axis veya diğer IP kameralarınızı yapay zeka katmanına bağlarsınız.',
          'Edge-first mimari KVKK uyumunu teknik düzeyde sağlar: ham video varsayılan depolanmaz, yüz tanıma kapalıdır, yalnızca olay ve metrik kaydedilir. Alarm gecikmesi 100–300 ms bandındadır; offline çalışma desteği ile internet kesilse bile analiz devam eder. REST API ile ERP, SAP, MES, WMS ve BI araçlarına entegrasyon mümkündür.',
          'Modüler lisans modeli ile yalnızca kullandığınız fonksiyonlar için ödeme yaparsınız. 30 günlük pilot paket, keşif toplantısı ve kurulum sonrası eğitim standart hizmet kapsamındadır. İletişim formu veya telefon ile demo talep edin; 24 saat içinde GTÜ Teknopark Gebze ekibimizden dönüş alın.',
          'Hype Vision yasaklı alan ihlal çözümünü risk almadan değerlendirmek için 30 günlük pilot paket veya ücretsiz keşif toplantısı talep edebilirsiniz. GTÜ Teknopark Gebze, Hightech Binası\'ndaki ofisimizde canlı demo yapılabilir; uzaktan görüntülü toplantı ile RTSP/ONVIF uyumluluk değerlendirmesi de mümkündür. Mevcut IP kamera marka/model listenizi info@hypevisionlab.com adresine iletmeniz yeterlidir.',
          'Keşif sürecinde saha layout, kamera açıları, aydınlatma koşulları ve operasyon akışınız analiz edilir. Mimari önerisi (Edge, Cloud veya hibrit), modül seçimi ve kurulum takvimi netleştirilir. Pilot sonunda doğruluk raporu, false positive/negative analizi ve ROI projeksiyonu sunulur; memnun kalmazsanız taahhüt yoktur.',
          'Tek CTA odak noktamız iletişim ve demo: /iletisim formu, telefon (+90 541 862 9190) veya e-posta ile randevu alın. 2020\'den beri endüstriyel yapay zeka deneyimimizle mevcut kameralarınızı yapay zeka katmanına bağlayın; yeni kamera yatırımı olmadan İSG, kalite ve verimlilik metriklerinizi tek panelde toplayın.',
          'Hype Vision olarak GTÜ Teknopark Gebze merkezimizden Türkiye genelinde endüstriyel tesislere hizmet veriyoruz. Katalog PDF\'imizi indirerek modül detaylarını inceleyebilir; keşif toplantısında saha özelinde mimari önerisi alabilirsiniz. İletişim formu doldurarak demo talebinizi iletin — 24 saat içinde dönüş yapılır.',
        ],
      },
    ],
    useCases: [
      'Pres ve kesme makinesi önü yasak bölge',
      'Vinç ve portal crane altı tehlikeli alan',
      'Eriyik metal ve döküm bölgesi giriş kontrolü',
      'Kimyasal depolama ve tank çevresi',
      'Yüksek gerilim ve elektrik panosu bölgesi',
      'Depo raf arası ve forklift yasak yaya alanı',
    ],
    benefits: [
      '%97,8 doğruluk ile sahada kanıtlanmış performans',
      'Çokgen ROI ile esnek bölge tanımlama',
      'PLC/hat durdurma entegrasyonu',
      'Mevcut IP kameralar; yeni yatırım gerekmez',
      'KVKK uyumlu Edge mimari',
      '7/24 otomatik denetim ve kanıt arşivi',
    ],
    relatedSlugs: [
      'forklift-yaya-guvenlik-sistemi',
      'dusme-tespit-sistemi',
      'kkd-kontrol-kamera-sistemi',
    ],
  },
  {
    slug: 'forklift-yaya-guvenlik-sistemi',
    type: 'module',
    title: 'Forklift Yaya Güvenlik Sistemi | %97,3 Doğruluk — Hype Vision',
    metaDescription:
      'Forklift-yaya çarpışma önleme: %97,3 doğruluk, mesafe analizi, tehlikeli bölge alarmı. Mevcut IP kameralar, RTSP/ONVIF. Hype Vision GTÜ Teknopark Gebze.',
    eyebrow: 'İSG Modülü · Forklift–Yaya',
    h1: 'Forklift yaya güvenlik sistemi —',
    h1Highlight: 'çarpışma riskini anında algıla',
    intro:
      'Hype Vision forklift-yaya güvenlik modülü, depo, fabrika ve lojistik sahalarında forklift ile yaya arasındaki mesafeyi mevcut IP kameralarınızdan gerçek zamanlı analiz eder. Tehlikeli mesafe ihlali, yasak bölgeye araç girişi ve yaya-forklift kesişim noktaları anında tespit edilir; alarm ve isteğe bağlı siren veya uyarı lambası tetiklenir. Katalog verilerinde %97,3 doğruluk bandında performans hedeflenmektedir. Depo koridorları, yükleme rampası ve sevkiyat alanında forklift-yaya kesişim noktaları 7/24 izlenir; çarpışma riski mesafe eşiği altına düştüğünde alarm tetiklenir.',
    accuracy: '%97,3',
    specs: [
      { label: 'Doğruluk', value: '%97,3 (saha kalibrasyonu sonrası)' },
      { label: 'Analiz', value: 'Mesafe ölçümü, bölge ihlali, yön tespiti' },
      { label: 'Alarm gecikmesi', value: '<1 sn' },
      { label: 'Protokoller', value: 'RTSP, ONVIF, Modbus, REST API' },
      { label: 'Tetikleme', value: 'Siren, flaşör, VMS popup, mobil bildirim' },
      { label: 'Mimari', value: 'Edge · Cloud · Hibrit · KVKK uyumlu' },
    ],
    sections: [
      {
        heading: 'Forklift-yaya kazaları neden önlenebilir?',
        paragraphs: [
          'Depo ve lojistik sahalarında forklift-yaya çarpışmaları en sık iş kazası türlerinden biridir. Görüş açısı kısıtlı koridorlar, yüksek raf arası geçişler ve yoğun vardiya trafiği riski artırır. Manuel gözetim tüm kesişim noktalarını eşzamanlı izleyemez; yapay zeka destekli kamera analitiği ise her karede forklift ve yaya konumunu hesaplar.',
          'Hype Vision modülü, iki nesne arası mesafeyi piksel ve gerçek dünya koordinatlarına kalibrasyon ile ölçer. Tanımlı eşik değerin altına düşüldüğünde (örneğin 2 metre) alarm üretilir. Yasak bölgeye forklift girişi veya yaya yürüyüş yolundan sapma ayrı kategorilerde raporlanır.',
          'Sistem mevcut IP kameralarınıza bağlanır; Hikvision, Dahua, Axis ve RTSP/ONVIF destekleyen tüm markalar uyumludur. GTÜ Teknopark Gebze\'de geliştirilen platform, 2020\'den beri lojistik ve üretim tesislerinde kullanılmaktadır.',
          'Kör nokta analizi keşif sonrası yapılır; ek kamera veya ayna önerileri sunulur.',
          'OSHA ve İSG mevzuatı forklift-yaya ayrımını zorunlu kılar; otomatik mesafe denetimi uyum kanıtı sağlar.',
        ],
      },
      {
        heading: 'Mesafe analizi ve bölge kuralları',
        paragraphs: [
          'Kamera görüş açısı ve zemin referans noktaları ile mesafe kalibrasyonu yapılır. Koridor genişliği, kavşak noktası ve yükleme rampası gibi farklı senaryolar için ayrı eşik değerleri tanımlanır. Forklift hızı ve yaya hareket yönü de analiz edilebilir; karşılıklı yaklaşma durumunda alarm seviyesi yükseltilir.',
          'Yaya yürüyüş yolları, forklift trafik koridorları ve kesişim noktaları ROI ile ayrılır. Yaya yürüyüş yolunda forklift tespiti veya forklift koridorunda yaya tespiti ayrı alarm kategorisi olarak işlenir.',
          'Entegrasyon katmanında siren, flaşör veya kabin içi uyarı sistemi tetiklenebilir. Modbus veya dijital I/O ile endüstriyel protokoller üzerinden sinyal iletimi yapılır.',
          'Karşılıklı yaklaşma durumunda alarm seviyesi otomatik yükseltilir.',
          'OSHA ve İSG mevzuatı forklift-yaya ayrımını zorunlu kılar; otomatik mesafe denetimi uyum kanıtı sağlar.',
        ],
      },
      {
        heading: 'Çoklu kamera ve geniş saha',
        paragraphs: [
          'Tek GPU\'lu Edge sunucuda 1080p ile genellikle 6–12 kamera gerçek zamanlı analiz edilir. Büyük depolarda çoklu kamera ile kavşak noktaları ve kör noktalar kapsanır. Çoklu GPU veya Cloud ile onlarca kameraya ölçeklenir.',
          'Merkezi panel tüm kamera noktalarından gelen forklift-yaya olaylarını birleştirir. Isı haritası hangi koridorun en riskli olduğunu gösterir; trafik akışı yeniden düzenlenebilir.',
          'Multi-site desteği ile farklı depo ve tesisler merkezi panelden izlenir. Her lokasyon Edge çalışabilir; veriler merkeze aktarılır.',
          'Forklift kabin içi uyarı sistemi Modbus ile tetiklenebilir.',
          'OSHA ve İSG mevzuatı forklift-yaya ayrımını zorunlu kılar; otomatik mesafe denetimi uyum kanıtı sağlar.',
        ],
      },
      {
        heading: 'KVKK ve operasyonel entegrasyon',
        paragraphs: [
          'Görüntü Edge\'de işlenir; ham video depolanmaz. Yalnızca olay, mesafe değeri ve kanıt karesi kaydedilir. KVKK uyumlu mimari ile kişisel veri minimizasyonu sağlanır.',
          'REST API ile alarm kayıtları ERP, SAP veya BI araçlarına aktarılabilir. VMS popup entegrasyonu ile Milestone, Dahua veya Hikvision ekranında olay anında görüntülenir.',
          'Offline çalışma desteği ile internet kesilse bile analiz devam eder. Kritik lojistik operasyonlarında kesintisiz güvenlik denetimi sağlanır.',
          'Koridor ısı haritası trafik akışı optimizasyonu için veri sağlar.',
          'OSHA ve İSG mevzuatı forklift-yaya ayrımını zorunlu kılar; otomatik mesafe denetimi uyum kanıtı sağlar.',
        ],
      },
      {
        heading: 'Kurulum ve pilot süreci — demo ve iletişim',
        paragraphs: [
          'Keşif sonrası kamera konumları, açıları ve kalibrasyon noktaları belirlenir. Pilot aşamasında saha verisiyle model ve eşik değerleri optimize edilir. 30 günlük pilot paket mevcuttur.',
          'Panelde günlük ihlal sayısı, koridor bazlı risk skoru ve vardiya karşılaştırması görüntülenir. İSG ve operasyon ekipleri ortak metrikler üzerinden çalışır.',
          'Hype Vision forklift-yaya modülü, yasaklı alan, KKD ve depo güvenliği modülleriyle aynı platformda çalışır. Demo ve keşif için iletişime geçin.',
          'Soğuk hava deposu dar koridorlarında düşük ışık kalibrasyonu uygulanır.',
          'OSHA ve İSG mevzuatı forklift-yaya ayrımını zorunlu kılar; otomatik mesafe denetimi uyum kanıtı sağlar.',
          '2020 yılından bu yana GTÜ Teknopark Gebze merkezli Hype Vision, endüstriyel yapay zeka ve görüntü işleme alanında onlarca saha projesi tamamlamıştır. forklift-yaya güvenlik modülü tek başına bir ürün değil; İSG, kalite, verimlilik ve güvenlik modüllerinin tamamı aynı RTSP/ONVIF kamera altyapısı üzerinde modüler lisans ile çalışır. Yeni kamera almadan mevcut Hikvision, Dahua, Axis veya diğer IP kameralarınızı yapay zeka katmanına bağlarsınız.',
          'Edge-first mimari KVKK uyumunu teknik düzeyde sağlar: ham video varsayılan depolanmaz, yüz tanıma kapalıdır, yalnızca olay ve metrik kaydedilir. Alarm gecikmesi 100–300 ms bandındadır; offline çalışma desteği ile internet kesilse bile analiz devam eder. REST API ile ERP, SAP, MES, WMS ve BI araçlarına entegrasyon mümkündür.',
          'Modüler lisans modeli ile yalnızca kullandığınız fonksiyonlar için ödeme yaparsınız. 30 günlük pilot paket, keşif toplantısı ve kurulum sonrası eğitim standart hizmet kapsamındadır. İletişim formu veya telefon ile demo talep edin; 24 saat içinde GTÜ Teknopark Gebze ekibimizden dönüş alın.',
          'Hype Vision forklift-yaya güvenlik çözümünü risk almadan değerlendirmek için 30 günlük pilot paket veya ücretsiz keşif toplantısı talep edebilirsiniz. GTÜ Teknopark Gebze, Hightech Binası\'ndaki ofisimizde canlı demo yapılabilir; uzaktan görüntülü toplantı ile RTSP/ONVIF uyumluluk değerlendirmesi de mümkündür. Mevcut IP kamera marka/model listenizi info@hypevisionlab.com adresine iletmeniz yeterlidir.',
          'Keşif sürecinde saha layout, kamera açıları, aydınlatma koşulları ve operasyon akışınız analiz edilir. Mimari önerisi (Edge, Cloud veya hibrit), modül seçimi ve kurulum takvimi netleştirilir. Pilot sonunda doğruluk raporu, false positive/negative analizi ve ROI projeksiyonu sunulur; memnun kalmazsanız taahhüt yoktur.',
          'Tek CTA odak noktamız iletişim ve demo: /iletisim formu, telefon (+90 541 862 9190) veya e-posta ile randevu alın. 2020\'den beri endüstriyel yapay zeka deneyimimizle mevcut kameralarınızı yapay zeka katmanına bağlayın; yeni kamera yatırımı olmadan İSG, kalite ve verimlilik metriklerinizi tek panelde toplayın.',
          'Hype Vision olarak GTÜ Teknopark Gebze merkezimizden Türkiye genelinde endüstriyel tesislere hizmet veriyoruz. Katalog PDF\'imizi indirerek modül detaylarını inceleyebilir; keşif toplantısında saha özelinde mimari önerisi alabilirsiniz. İletişim formu doldurarak demo talebinizi iletin — 24 saat içinde dönüş yapılır.',
        ],
      },
    ],
    useCases: [
      'Depo koridorlarında forklift-yaya mesafe denetimi',
      'Yükleme rampası ve sevkiyat alanı güvenliği',
      'Üretim hattı yan koridorları trafik analizi',
      'Liman ve konteyner sahası araç-yaya ayrımı',
      'Soğuk hava deposu dar koridor güvenliği',
      'Çok vardiyalı lojistik merkezi 7/24 izleme',
    ],
    benefits: [
      '%97,3 doğruluk ile çarpışma riski erken uyarısı',
      'Mesafe ölçümü ve bölge kuralı tek modülde',
      'Mevcut IP kameralar; marka bağımsız',
      'Siren, flaşör ve VMS popup entegrasyonu',
      'KVKK uyumlu Edge mimari',
      'Depo ve lojistik sektöründe sahada kanıtlanmış',
    ],
    relatedSlugs: [
      'yasakli-alan-ihlal-tespiti',
      'depo-lojistik-guvenlik',
      'onvif-rtsp-yapay-zeka-entegrasyonu',
    ],
  },
  {
    slug: 'dusme-tespit-sistemi',
    type: 'module',
    title: 'Düşme Tespit Sistemi | Pose Estimation — Hype Vision',
    metaDescription:
      'Düşme tespit sistemi: pose estimation, anlık alarm, mevcut IP kameralar. İnşaat, metal, ağır sanayi. Edge mimari, KVKK uyumlu. Hype Vision GTÜ Teknopark.',
    eyebrow: 'İSG Modülü · Düşme Tespiti',
    h1: 'Düşme tespit sistemi —',
    h1Highlight: 'pose estimation ile anında müdahale',
    intro:
      'Hype Vision düşme tespit modülü, pose estimation (iskelet takibi) teknolojisi ile personelin ani düşüşünü mevcut IP kameralarınızdan gerçek zamanlı algılar. İnşaat iskelesi, yüksek platform, merdiven ve ağır sanayi sahalarında düşme olayı saniyeler içinde tespit edilir; acil müdahale ekibi anında bilgilendirilir. Sistem ham video depolamak yerine olay, zaman damgası ve kanıt karesi üretir. İnşaat iskelesi, yüksek platform ve merdiven gibi düşme riski yüksek noktalarda acil müdahale süresi kısalır; olay saniyeler içinde tespit edilir.',
    specs: [
      { label: 'Teknoloji', value: 'Pose estimation, iskelet takibi' },
      { label: 'Alarm gecikmesi', value: '<2 sn (düşme olayı sonrası)' },
      { label: 'Protokoller', value: 'RTSP, ONVIF, REST API, Modbus' },
      { label: 'Tetikleme', value: 'Acil alarm, mobil, siren, VMS popup' },
      { label: 'Mimari', value: 'Edge · Cloud · Hibrit · KVKK uyumlu' },
      { label: 'Kamera uyumu', value: 'Hikvision, Dahua, Axis, tüm IP markalar' },
    ],
    sections: [
      {
        heading: 'Düşme tespiti neden kritik?',
        paragraphs: [
          'Yüksekten düşme, endüstriyel iş kazalarının önde gelen nedenlerinden biridir. İnşaat, metal işleme, liman ve ağır sanayi sahalarında personel iskele, platform veya merdivende çalışırken düşme riski sürekli mevcuttur. Manuel gözetim tüm alanları eşzamanlı izleyemez; yapay zeka destekli pose estimation ise personelin vücut pozisyonunu frame bazında analiz ederek ani düşüş hareketini algılar.',
          'Hype Vision düşme modülü, iskelet keypoint\'lerini takip eder. Normal yürüme, eğilme veya oturma ile düşme hareketi ayrıştırılır; dikey hızlanma, yatay konum değişimi ve zemin teması gibi sinyaller birleştirilir. False positive oranı saha kalibrasyonu ile minimize edilir.',
          'Düşme algılandığında acil alarm tetiklenir: panel, mobil bildirim, siren veya acil müdahale ekibine otomatik bildirim. Olay kanıt karesi ve zaman damgası ile birlikte kaydedilir.',
          'İskelet keypoint takibi ile ani dikey konum kaybı ve vücut yataylaşması algılanır.',
          'Yüksekte çalışma yönetmeliği kapsamında düşme riski değerlendirmesi yapılan tesislerde otomatik algılama ek güvenlik katmanıdır.',
        ],
      },
      {
        heading: 'Pose estimation teknolojisi',
        paragraphs: [
          'Pose estimation, derin öğrenme modelleri ile insan vücudunun eklem noktalarını (keypoint) tespit eder. Omuz, dirsek, kalça, diz ve ayak bileği koordinatları frame\'ler arası takip edilir. Ani dikey konum kaybı, vücut yataylaşması ve hareketsiz kalma süresi düşme sinyali olarak değerlendirilir.',
          'Modül düşük ışık, kısmi görünürlük ve kalabalık saha koşullarında custom model eğitimi ile optimize edilir. Pilot aşamasında saha verisi toplanır ve model fine-tune edilir.',
          'Yüz tanıma kullanılmaz; yalnızca vücut pozisyonu analiz edilir. KVKK açısından kişisel veri minimizasyonu sağlanır.',
          'Hareketsiz kalma süresi düşme sonrası bilinçsizlik senaryosunda ek alarm üretir.',
          'Yüksekte çalışma yönetmeliği kapsamında düşme riski değerlendirmesi yapılan tesislerde otomatik algılama ek güvenlik katmanıdır.',
        ],
      },
      {
        heading: 'Saha uygulamaları ve kamera yerleşimi',
        paragraphs: [
          'İnşaat iskelesi, yüksek raf, platform ve merdiven gibi düşme riski yüksek noktalara kamera yerleştirilir. Açı ve kapsama alanı keşif sonrası optimize edilir. Birden fazla kamera ile kör nokta minimize edilir.',
          'Ağır sanayi ve metal tesislerinde pres önü, vinç platformu ve bakım alanları hedeflenir. Yasaklı alan modülü ile birlikte kullanıldığında hem bölge ihlali hem düşme olayı aynı platformda izlenir.',
          'GTÜ Teknopark Gebze\'deki mühendislik ekibimiz saha keşfi, kurulum ve kalibrasyon sürecini yönetir. 4–8 kamera ile standart kurulum 1–3 iş gününde tamamlanır.',
          'Acil müdahale ekibine otomatik SMS/telefon bildirimi konfigüre edilir.',
          'Yüksekte çalışma yönetmeliği kapsamında düşme riski değerlendirmesi yapılan tesislerde otomatik algılama ek güvenlik katmanıdır.',
        ],
      },
      {
        heading: 'Edge mimari ve acil müdahale entegrasyonu',
        paragraphs: [
          'Görüntü Edge sunucuda işlenir; video tesis dışına çıkmadan analiz tamamlanır. Ham görüntü zorunlu olmadıkça saklanmaz. Acil müdahale senaryolarında alarm gecikmesi kritiktir; Edge kurulumda 100–300 ms işleme süresi hedeflenir.',
          'Modbus, Ethernet/IP veya dijital I/O ile acil durum paneli, siren veya iletişim sistemi tetiklenebilir. REST API ile alarm kayıtları ERP veya acil müdahale yazılımına aktarılabilir.',
          'Offline çalışma desteği ile internet kesilse bile düşme tespiti devam eder. Kritik sahalarda kesintisiz izleme garanti edilir.',
          'Yalnız çalışan bölgelerinde düşme tespiti kritik güvenlik katmanı sağlar.',
          'Yüksekte çalışma yönetmeliği kapsamında düşme riski değerlendirmesi yapılan tesislerde otomatik algılama ek güvenlik katmanıdır.',
        ],
      },
      {
        heading: 'Raporlama ve pilot paket — demo ve iletişim',
        paragraphs: [
          'Panelde düşme olayı sayısı, konum, zaman ve müdahale süresi raporlanır. İSG denetimlerinde olay analizi ve kök neden çalışmalarına veri sağlar.',
          '30 günlük pilot paket ile belirli bir yüksek risk bölgesinde modülü test edebilirsiniz. Pilot sonunda doğruluk, false positive analizi ve ROI raporu sunulur.',
          'Hype Vision düşme modülü, yasaklı alan, KKD ve forklift-yaya modülleriyle aynı platformda çalışır. Demo ve keşif için iletişime geçin.',
          'Custom model ile iskele ve platform özel saha koşullarında optimize edilir.',
          'Yüksekte çalışma yönetmeliği kapsamında düşme riski değerlendirmesi yapılan tesislerde otomatik algılama ek güvenlik katmanıdır.',
          '2020 yılından bu yana GTÜ Teknopark Gebze merkezli Hype Vision, endüstriyel yapay zeka ve görüntü işleme alanında onlarca saha projesi tamamlamıştır. düşme tespit modülü tek başına bir ürün değil; İSG, kalite, verimlilik ve güvenlik modüllerinin tamamı aynı RTSP/ONVIF kamera altyapısı üzerinde modüler lisans ile çalışır. Yeni kamera almadan mevcut Hikvision, Dahua, Axis veya diğer IP kameralarınızı yapay zeka katmanına bağlarsınız.',
          'Edge-first mimari KVKK uyumunu teknik düzeyde sağlar: ham video varsayılan depolanmaz, yüz tanıma kapalıdır, yalnızca olay ve metrik kaydedilir. Alarm gecikmesi 100–300 ms bandındadır; offline çalışma desteği ile internet kesilse bile analiz devam eder. REST API ile ERP, SAP, MES, WMS ve BI araçlarına entegrasyon mümkündür.',
          'Modüler lisans modeli ile yalnızca kullandığınız fonksiyonlar için ödeme yaparsınız. 30 günlük pilot paket, keşif toplantısı ve kurulum sonrası eğitim standart hizmet kapsamındadır. İletişim formu veya telefon ile demo talep edin; 24 saat içinde GTÜ Teknopark Gebze ekibimizden dönüş alın.',
          'Hype Vision düşme tespit çözümünü risk almadan değerlendirmek için 30 günlük pilot paket veya ücretsiz keşif toplantısı talep edebilirsiniz. GTÜ Teknopark Gebze, Hightech Binası\'ndaki ofisimizde canlı demo yapılabilir; uzaktan görüntülü toplantı ile RTSP/ONVIF uyumluluk değerlendirmesi de mümkündür. Mevcut IP kamera marka/model listenizi info@hypevisionlab.com adresine iletmeniz yeterlidir.',
          'Keşif sürecinde saha layout, kamera açıları, aydınlatma koşulları ve operasyon akışınız analiz edilir. Mimari önerisi (Edge, Cloud veya hibrit), modül seçimi ve kurulum takvimi netleştirilir. Pilot sonunda doğruluk raporu, false positive/negative analizi ve ROI projeksiyonu sunulur; memnun kalmazsanız taahhüt yoktur.',
          'Tek CTA odak noktamız iletişim ve demo: /iletisim formu, telefon (+90 541 862 9190) veya e-posta ile randevu alın. 2020\'den beri endüstriyel yapay zeka deneyimimizle mevcut kameralarınızı yapay zeka katmanına bağlayın; yeni kamera yatırımı olmadan İSG, kalite ve verimlilik metriklerinizi tek panelde toplayın.',
          'Hype Vision olarak GTÜ Teknopark Gebze merkezimizden Türkiye genelinde endüstriyel tesislere hizmet veriyoruz. Katalog PDF\'imizi indirerek modül detaylarını inceleyebilir; keşif toplantısında saha özelinde mimari önerisi alabilirsiniz. İletişim formu doldurarak demo talebinizi iletin — 24 saat içinde dönüş yapılır.',
        ],
      },
    ],
    useCases: [
      'İnşaat iskelesi ve yüksek platform düşme algılama',
      'Metal ve ağır sanayi bakım alanları',
      'Liman ve konteyner sahası yüksek çalışma',
      'Depo raf ve mezzanine kat güvenliği',
      'Merdiven ve geçiş noktası izleme',
      'Acil müdahale gerektiren yalnız çalışan bölgeleri',
    ],
    benefits: [
      'Pose estimation ile hassas düşme algılama',
      'Acil alarm ve hızlı müdahale tetikleme',
      'Mevcut IP kameralar; yeni yatırım gerekmez',
      'KVKK uyumlu; yüz tanıma kullanılmaz',
      'Edge mimari ile düşük gecikme',
      'Yasaklı alan ve KKD modülleriyle entegre platform',
    ],
    relatedSlugs: [
      'yasakli-alan-ihlal-tespiti',
      'kkd-kontrol-kamera-sistemi',
      'depo-lojistik-guvenlik',
    ],
  },
  {
    slug: 'kalite-kontrol-goruntu-isleme',
    type: 'module',
    title: 'Kalite Kontrol Görüntü İşleme | OK/RED %94,2 — Hype Vision',
    metaDescription:
      'Hat üzerinde kalite kontrol: OK/RED sınıflandırma %94,2 doğruluk, kusur tespiti, mevcut IP kameralar. RTSP/ONVIF, ERP/MES entegrasyonu. Hype Vision GTÜ Teknopark.',
    eyebrow: 'Kalite Modülü · Görüntü İşleme',
    h1: 'Kalite kontrol görüntü işleme —',
    h1Highlight: 'hat üzerinde anlık OK/RED',
    intro:
      'Hype Vision kalite kontrol modülü, üretim hattındaki mevcut IP kameralarınızdan gelen görüntüyü derin öğrenme ile analiz ederek ürünleri OK (kabul) veya RED (red) olarak sınıflandırır. Çatlak, deformasyon, renk sapması, eksik parça ve ambalaj hatası gibi kusur türleri anında tespit edilir; hatalı ürün hat dışına alınmadan önce yakalanır. Katalog verilerinde OK/RED sınıflandırması %94,2 doğruluk bandında performans göstermektedir. Konveyör hattındaki her ürün saniyede analiz edilir; hatalı parça müşteriye ulaşmadan red hattına yönlendirilir.',
    accuracy: '%94,2',
    specs: [
      { label: 'OK/RED doğruluk', value: '%94,2 (ürün ve hat bazlı)' },
      { label: 'Kusur türleri', value: 'Çatlak, deformasyon, renk, eksik parça, ambalaj' },
      { label: 'İşlem gecikmesi', value: '100–500 ms (hat hızına göre)' },
      { label: 'Protokoller', value: 'RTSP, ONVIF, REST API, Modbus' },
      { label: 'Entegrasyon', value: 'ERP, MES, hat durdurma, red konveyörü' },
      { label: 'Mimari', value: 'Edge · Cloud · Hibrit' },
    ],
    sections: [
      {
        heading: 'Hat üzerinde kalite kontrol neden otomatik?',
        paragraphs: [
          'Manuel kalite kontrol örneklemeli çalışır; her ürün incelenemez. Hatalı parça müşteriye ulaşana kadar fark edilmeyebilir. Yapay zeka destekli görüntü işleme ise konveyör hattındaki her ürünü saniyede onlarca kez analiz eder; kusur anında tespit edilir ve red mekanizması tetiklenebilir.',
          'Hype Vision kalite modülü, ürün tipine göre eğitilmiş modeller kullanır. OK/RED ikili sınıflandırma temel senaryodur; çok sınıflı kusur tespiti (çatlak tipi A, B, C) isteğe bağlı olarak eklenir. Panelde anlık red oranı, kusur dağılımı ve vardiya karşılaştırması görüntülenir.',
          'Sistem mevcut IP kameralarınıza bağlanır; hat üzerine yeni kamera eklenmesi keşif sonrası önerilebilir. Hikvision, Dahua, Axis ve endüstriyel vision kameralar RTSP/ONVIF ile desteklenir.',
          'OK/RED ikili sınıflandırma temel senaryodur; çok sınıflı kusur tespiti isteğe bağlı eklenir.',
          'Müşteri şikayeti maliyeti red hattında yakalanan bir hatalı üründen kat kat yüksektir; erken tespit ROI\'yi hızla pozitife çevirir.',
        ],
      },
      {
        heading: 'Kusur türleri ve model eğitimi',
        paragraphs: [
          'Standart kusur kategorileri: yüzey çatlak, deformasyon, renk sapması, eksik montaj, ambalaj hatası, etiket eksikliği ve yabancı madde. Her kategori için ayrı tespit modeli veya çok sınıflı tek model kullanılabilir. Custom model eğitimi ile tesisinize özel kusur tipleri tanımlanır.',
          'Model eğitimi süreci: saha verisi toplama, etiketleme, fine-tune ve doğrulama. Pilot aşamasında 500–2000 örnek görüntü ile başlangıç modeli oluşturulur; canlıya alma sonrası sürekli iyileştirme yapılır.',
          'Hat hızına göre kamera FPS ve işlem gecikmesi optimize edilir. Yüksek hızlı hatlarda çoklu kamera veya GPU yükseltmesi gerekebilir.',
          'Hat hızına göre FPS ve GPU kapasitesi optimize edilir; yüksek hızlı hatlarda strobe aydınlatma önerilebilir.',
          'Müşteri şikayeti maliyeti red hattında yakalanan bir hatalı üründen kat kat yüksektir; erken tespit ROI\'yi hızla pozitife çevirir.',
        ],
      },
      {
        heading: 'ERP/MES entegrasyonu ve hat kontrolü',
        paragraphs: [
          'REST API ile red sayısı, kusur tipi dağılımı ve OEE etkisi ERP, SAP veya MES sistemlerine aktarılır. Çift veri girişi ortadan kalkar; kalite metrikleri üretim verisiyle birleşir.',
          'Modbus veya dijital I/O ile red konveyörü, hat durdurma veya ayırıcı kol tetiklenebilir. Hatalı ürün otomatik olarak hat dışına alınır; operatör müdahalesi minimize edilir.',
          'VMS popup ve mobil bildirim ile kalite mühendisi anında bilgilendirilir. Kritik kusur tiplerinde hat otomatik durdurulabilir.',
          'Red konveyörü ve ayırıcı kol Modbus ile otomatik tetiklenir.',
          'Müşteri şikayeti maliyeti red hattında yakalanan bir hatalı üründen kat kat yüksektir; erken tespit ROI\'yi hızla pozitife çevirir.',
        ],
      },
      {
        heading: 'Edge mimari ve KVKK',
        paragraphs: [
          'Görüntü işleme Edge sunucuda gerçekleşir; ürün görüntüleri tesis dışına çıkmadan analiz edilir. Ham video depolanmaz; yalnızca red olayı, kusur tipi ve kanıt karesi kaydedilir. KVKK uyumlu mimari ile veri minimizasyonu sağlanır.',
          'Cloud veya hibrit mimaride merkezi panel çok hatlı veya çok tesisli yapılardan kalite metriklerini toplar. Rol bazlı yetki ile hat ve lokasyon filtresi uygulanır.',
          'Offline çalışma desteği ile internet kesilse bile kalite kontrol devam eder. Kritik üretim hatlarında kesintisiz denetim garanti edilir.',
          'Kusur trend analizi proses iyileştirme hedefler; hangi vardiyada red arttı görülür.',
          'Müşteri şikayeti maliyeti red hattında yakalanan bir hatalı üründen kat kat yüksektir; erken tespit ROI\'yi hızla pozitife çevirir.',
        ],
      },
      {
        heading: 'Kurulum, pilot ve sektör uygulamaları — demo ve iletişim',
        paragraphs: [
          'Keşif sonrası hat hızı, ürün boyutu, kamera açısı ve aydınlatma optimize edilir. 30 günlük pilot paket ile tek hat üzerinde modül test edilir. Pilot sonunda doğruluk, false positive/negative analizi ve ROI raporu sunulur.',
          'Tekstil, otomotiv, gıda, elektronik ve metal sektörlerinde farklı ürün tipleri için custom model eğitimi yapılmıştır. GTÜ Teknopark Gebze\'deki Ar-Ge ekibimiz sektöre özel kalite senaryoları geliştirir.',
          'Hype Vision kalite modülü, yüzey kusuru tespiti, OEE takip ve personel verimliliği modülleriyle aynı platformda çalışır. Demo ve keşif için iletişime geçin.',
          'OEE quality bileşenine otomatik veri sağlar.',
          'Müşteri şikayeti maliyeti red hattında yakalanan bir hatalı üründen kat kat yüksektir; erken tespit ROI\'yi hızla pozitife çevirir.',
          '2020 yılından bu yana GTÜ Teknopark Gebze merkezli Hype Vision, endüstriyel yapay zeka ve görüntü işleme alanında onlarca saha projesi tamamlamıştır. kalite kontrol görüntü işleme modülü tek başına bir ürün değil; İSG, kalite, verimlilik ve güvenlik modüllerinin tamamı aynı RTSP/ONVIF kamera altyapısı üzerinde modüler lisans ile çalışır. Yeni kamera almadan mevcut Hikvision, Dahua, Axis veya diğer IP kameralarınızı yapay zeka katmanına bağlarsınız.',
          'Edge-first mimari KVKK uyumunu teknik düzeyde sağlar: ham video varsayılan depolanmaz, yüz tanıma kapalıdır, yalnızca olay ve metrik kaydedilir. Alarm gecikmesi 100–300 ms bandındadır; offline çalışma desteği ile internet kesilse bile analiz devam eder. REST API ile ERP, SAP, MES, WMS ve BI araçlarına entegrasyon mümkündür.',
          'Modüler lisans modeli ile yalnızca kullandığınız fonksiyonlar için ödeme yaparsınız. 30 günlük pilot paket, keşif toplantısı ve kurulum sonrası eğitim standart hizmet kapsamındadır. İletişim formu veya telefon ile demo talep edin; 24 saat içinde GTÜ Teknopark Gebze ekibimizden dönüş alın.',
          'Hype Vision kalite kontrol görüntü işleme çözümünü risk almadan değerlendirmek için 30 günlük pilot paket veya ücretsiz keşif toplantısı talep edebilirsiniz. GTÜ Teknopark Gebze, Hightech Binası\'ndaki ofisimizde canlı demo yapılabilir; uzaktan görüntülü toplantı ile RTSP/ONVIF uyumluluk değerlendirmesi de mümkündür. Mevcut IP kamera marka/model listenizi info@hypevisionlab.com adresine iletmeniz yeterlidir.',
          'Keşif sürecinde saha layout, kamera açıları, aydınlatma koşulları ve operasyon akışınız analiz edilir. Mimari önerisi (Edge, Cloud veya hibrit), modül seçimi ve kurulum takvimi netleştirilir. Pilot sonunda doğruluk raporu, false positive/negative analizi ve ROI projeksiyonu sunulur; memnun kalmazsanız taahhüt yoktur.',
          'Tek CTA odak noktamız iletişim ve demo: /iletisim formu, telefon (+90 541 862 9190) veya e-posta ile randevu alın. 2020\'den beri endüstriyel yapay zeka deneyimimizle mevcut kameralarınızı yapay zeka katmanına bağlayın; yeni kamera yatırımı olmadan İSG, kalite ve verimlilik metriklerinizi tek panelde toplayın.',
          'Hype Vision olarak GTÜ Teknopark Gebze merkezimizden Türkiye genelinde endüstriyel tesislere hizmet veriyoruz. Katalog PDF\'imizi indirerek modül detaylarını inceleyebilir; keşif toplantısında saha özelinde mimari önerisi alabilirsiniz. İletişim formu doldurarak demo talebinizi iletin — 24 saat içinde dönüş yapılır.',
        ],
      },
    ],
    useCases: [
      'Montaj hattında eksik parça ve deformasyon tespiti',
      'Ambalaj hattında etiket ve mühür kontrolü',
      'Gıda hattında ambalaj bütünlüğü ve yabancı madde',
      'Tekstil hattında dikiş ve kumaş kusuru',
      'Elektronik PCB görsel muayene',
      'Metal parça yüzey çatlak ve deformasyon',
    ],
    benefits: [
      'OK/RED %94,2 doğruluk ile sahada kanıtlanmış',
      'Her ürün incelenir; örneklemeli kontrol sona erer',
      'ERP/MES entegrasyonu ile çift giriş ortadan kalkar',
      'Hat durdurma ve red konveyörü otomasyonu',
      'Custom model ile tesisinize özel kusur tipleri',
      'Mevcut IP kameralar; modüler lisans',
    ],
    relatedSlugs: [
      'yuzey-kusuru-tespiti',
      'oee-takip-sistemi',
      'tekstil-fabrikasi-yapay-zeka',
    ],
  },
  {
    slug: 'yuzey-kusuru-tespiti',
    type: 'module',
    title: 'Yüzey Kusuru Tespiti | Çizik, Deformasyon — Hype Vision',
    metaDescription:
      'Yüzey kusuru tespiti: çizik, çatlak, deformasyon, leke. Derin öğrenme, mevcut IP kameralar, %94+ doğruluk. Edge mimari. Hype Vision GTÜ Teknopark Gebze.',
    eyebrow: 'Kalite Modülü · Yüzey Kusuru',
    h1: 'Yüzey kusuru tespiti —',
    h1Highlight: 'çizik, deformasyon, leke',
    intro:
      'Hype Vision yüzey kusuru tespit modülü, metal, plastik, cam ve kaplamalı yüzeylerdeki çizik, çatlak, deformasyon, leke ve pürüz gibi görsel hataları mevcut IP kameralarınızdan gerçek zamanlı algılar. Üretim hattında veya final muayene istasyonunda her parça otomatik incelenir; kusurlu ürün red hattına yönlendirilir. Modül, kalite kontrol görüntü işleme altyapısının özelleştirilmiş yüzey analizi katmanıdır. Mikron seviyesindeki çizik ve lekeler insan gözünden kaçabilir; yapay zeka her pikseli tutarlı kriterlerle analiz eder.',
    accuracy: '%94+',
    specs: [
      { label: 'Kusur türleri', value: 'Çizik, çatlak, deformasyon, leke, pürüz' },
      { label: 'Doğruluk', value: '%94+ (yüzey tipi ve aydınlatmaya göre)' },
      { label: 'Analiz', value: 'Anomali tespiti, sınıflandırma, lokalizasyon' },
      { label: 'Protokoller', value: 'RTSP, ONVIF, REST API, Modbus' },
      { label: 'Aydınlatma', value: 'Dome, bar, ring light uyumlu' },
      { label: 'Mimari', value: 'Edge · Cloud · Hibrit' },
    ],
    sections: [
      {
        heading: 'Yüzey kusuru neden görüntü işleme ile tespit edilir?',
        paragraphs: [
          'Geleneksel yüzey muayenesi insan gözüne dayanır; yorgunluk, dikkat dağınıklığı ve subjektif değerlendirme tutarsız sonuçlar üretir. Mikron seviyesindeki çizik ve lekeler gözden kaçabilir. Yapay zeka destekli görüntü işleme ise her pikseli tutarlı kriterlerle analiz eder; kusur boyutu, konumu ve tipi objektif olarak raporlanır.',
          'Hype Vision yüzey modülü, derin öğrenme tabanlı anomali tespiti ve sınıflandırma kullanır. Normal yüzey örnekleri ile eğitilen model, sapma gösteren bölgeleri işaretler. Çizik, çatlak, deformasyon ve leke ayrı sınıflar olarak etiketlenebilir.',
          'Metal döküm, sac metal, plastik enjeksiyon, cam ve kaplamalı parçalar farklı aydınlatma ve kamera konfigürasyonları gerektirir. Keşif sonrası optimal kurulum planlanır.',
          'Bounding box ve segmentasyon maskesi ile kusur konumu ve boyutu raporlanır.',
          'Otomotiv tedarik zincirinde yüzey kalitesi sıfır hata toleransı gerektirir; objektif AI muayene tutarlılık sağlar.',
        ],
      },
      {
        heading: 'Kusur lokalizasyonu ve ölçüm',
        paragraphs: [
          'Tespit edilen kusur görüntü üzerinde bounding box veya segmentasyon maskesi ile işaretlenir. Kusur boyutu (mm cinsinden), konumu ve tipi panelde görüntülenir. Kalite mühendisleri hangi proses adımının en çok kusur ürettiğini analiz edebilir.',
          'Kritik yüzeylerde (otomotiv dış panel, beyaz eşya kapak) tolerans eşiği tanımlanır. Eşik altındaki mikro kusurlar uyarı, üstündekiler red olarak sınıflandırılır.',
          'Custom model eğitimi ile tesisinize özel kusur tipleri ve toleranslar tanımlanır. Saha verisi toplanır, etiketlenir ve model fine-tune edilir.',
          'Dome, bar ve ring light aydınlatma keşif sonrası optimize edilir.',
          'Otomotiv tedarik zincirinde yüzey kalitesi sıfır hata toleransı gerektirir; objektif AI muayene tutarlılık sağlar.',
        ],
      },
      {
        heading: 'Aydınlatma ve kamera optimizasyonu',
        paragraphs: [
          'Yüzey kusuru tespiti aydınlatmaya duyarlıdır. Dome light, bar light veya ring light ile gölge ve yansıma minimize edilir. Keşif aşamasında aydınlatma testi yapılır; gerekirse endüstriyel vision aydınlatma önerilir.',
          'Mevcut IP kameralar çoğu senaryoda yeterlidir; yüksek çözünürlük veya özel açı gerektiren noktalarda ek kamera önerilebilir. RTSP/ONVIF ile tüm endüstriyel kamera markaları desteklenir.',
          'Hat hızına göre exposure time ve FPS optimize edilir. Yüksek hızlı hatlarda strobe aydınlatma veya çoklu kamera senaryosu değerlendirilir.',
          'Otomotiv dış panel ve beyaz eşya kapak senaryolarında tolerans eşiği tanımlanır.',
          'Otomotiv tedarik zincirinde yüzey kalitesi sıfır hata toleransı gerektirir; objektif AI muayene tutarlılık sağlar.',
        ],
      },
      {
        heading: 'Entegrasyon ve raporlama',
        paragraphs: [
          'REST API ile kusur sayısı, tip dağılımı ve red oranı ERP, SAP veya MES sistemlerine aktarılır. Modbus ile red konveyörü veya ayırıcı kol tetiklenebilir.',
          'Panelde günlük, vardiya ve hat bazlı kusur raporları görüntülenir. Trend analizi ile proses iyileştirme hedeflenir. Isı haritası hangi yüzey bölgesinde kusur yoğunlaştığını gösterir.',
          'KVKK uyumlu Edge mimari ile ürün görüntüleri tesis dışına çıkmadan işlenir. Ham video depolanmaz.',
          'Custom model ile tesisinize özel kusur profili eğitilir.',
          'Otomotiv tedarik zincirinde yüzey kalitesi sıfır hata toleransı gerektirir; objektif AI muayene tutarlılık sağlar.',
        ],
      },
      {
        heading: 'Sektör uygulamaları ve pilot — demo ve iletişim',
        paragraphs: [
          'Otomotiv tedarikçilerinde sac parça çizik ve deformasyon, beyaz eşyada kapak yüzey kusuru, metal işlemede kaynak dikişi ve döküm yüzey analizi uygulanmıştır. GTÜ Teknopark Gebze\'deki ekibimiz sektöre özel demo senaryoları sunar.',
          '30 günlük pilot paket ile tek istasyon veya hat üzerinde modül test edilir. Pilot sonunda doğruluk, false positive analizi ve ROI raporu sunulur.',
          'Hype Vision yüzey kusuru modülü, kalite kontrol görüntü işleme ve OEE takip modülleriyle aynı platformda çalışır. Demo ve keşif için iletişime geçin.',
          'Metal döküm, plastik enjeksiyon ve cam yüzey için farklı model varyantları mevcuttur.',
          'Otomotiv tedarik zincirinde yüzey kalitesi sıfır hata toleransı gerektirir; objektif AI muayene tutarlılık sağlar.',
          '2020 yılından bu yana GTÜ Teknopark Gebze merkezli Hype Vision, endüstriyel yapay zeka ve görüntü işleme alanında onlarca saha projesi tamamlamıştır. yüzey kusuru tespit modülü tek başına bir ürün değil; İSG, kalite, verimlilik ve güvenlik modüllerinin tamamı aynı RTSP/ONVIF kamera altyapısı üzerinde modüler lisans ile çalışır. Yeni kamera almadan mevcut Hikvision, Dahua, Axis veya diğer IP kameralarınızı yapay zeka katmanına bağlarsınız.',
          'Edge-first mimari KVKK uyumunu teknik düzeyde sağlar: ham video varsayılan depolanmaz, yüz tanıma kapalıdır, yalnızca olay ve metrik kaydedilir. Alarm gecikmesi 100–300 ms bandındadır; offline çalışma desteği ile internet kesilse bile analiz devam eder. REST API ile ERP, SAP, MES, WMS ve BI araçlarına entegrasyon mümkündür.',
          'Modüler lisans modeli ile yalnızca kullandığınız fonksiyonlar için ödeme yaparsınız. 30 günlük pilot paket, keşif toplantısı ve kurulum sonrası eğitim standart hizmet kapsamındadır. İletişim formu veya telefon ile demo talep edin; 24 saat içinde GTÜ Teknopark Gebze ekibimizden dönüş alın.',
          'Hype Vision yüzey kusuru tespit çözümünü risk almadan değerlendirmek için 30 günlük pilot paket veya ücretsiz keşif toplantısı talep edebilirsiniz. GTÜ Teknopark Gebze, Hightech Binası\'ndaki ofisimizde canlı demo yapılabilir; uzaktan görüntülü toplantı ile RTSP/ONVIF uyumluluk değerlendirmesi de mümkündür. Mevcut IP kamera marka/model listenizi info@hypevisionlab.com adresine iletmeniz yeterlidir.',
          'Keşif sürecinde saha layout, kamera açıları, aydınlatma koşulları ve operasyon akışınız analiz edilir. Mimari önerisi (Edge, Cloud veya hibrit), modül seçimi ve kurulum takvimi netleştirilir. Pilot sonunda doğruluk raporu, false positive/negative analizi ve ROI projeksiyonu sunulur; memnun kalmazsanız taahhüt yoktur.',
          'Tek CTA odak noktamız iletişim ve demo: /iletisim formu, telefon (+90 541 862 9190) veya e-posta ile randevu alın. 2020\'den beri endüstriyel yapay zeka deneyimimizle mevcut kameralarınızı yapay zeka katmanına bağlayın; yeni kamera yatırımı olmadan İSG, kalite ve verimlilik metriklerinizi tek panelde toplayın.',
          'Hype Vision olarak GTÜ Teknopark Gebze merkezimizden Türkiye genelinde endüstriyel tesislere hizmet veriyoruz. Katalog PDF\'imizi indirerek modül detaylarını inceleyebilir; keşif toplantısında saha özelinde mimari önerisi alabilirsiniz. İletişim formu doldurarak demo talebinizi iletin — 24 saat içinde dönüş yapılır.',
        ],
      },
    ],
    useCases: [
      'Sac metal parça çizik ve deformasyon tespiti',
      'Plastik enjeksiyon yüzey pürüz analizi',
      'Otomotiv dış panel boya ve kaplama kusuru',
      'Cam ve seramik yüzey çatlak tespiti',
      'Döküm parça yüzey anomali muayenesi',
      'Beyaz eşya kapak ve panel kalite kontrolü',
    ],
    benefits: [
      'Çizik, çatlak, deformasyon tek modülde',
      '%94+ doğruluk; custom model ile artırılabilir',
      'Kusur lokalizasyonu ve boyut ölçümü',
      'ERP/MES ve red hat otomasyonu',
      'Mevcut IP kameralar; aydınlatma danışmanlığı',
      'Objektif, tekrarlanabilir kalite kriterleri',
    ],
    relatedSlugs: [
      'kalite-kontrol-goruntu-isleme',
      'oee-takip-sistemi',
      'gida-fabrikasi-kalite-kontrol',
    ],
  },
  {
    slug: 'oee-takip-sistemi',
    type: 'module',
    title: 'OEE Takip Sistemi | Duruş, Cycle Time — Hype Vision',
    metaDescription:
      'Kamera tabanlı OEE takip: availability, performance, quality. Duruş, cycle time, ERP/MES entegrasyonu. Mevcut IP kameralar. Hype Vision GTÜ Teknopark.',
    eyebrow: 'Verimlilik Modülü · OEE',
    h1: 'OEE takip sistemi —',
    h1Highlight: 'kamera ile gerçek zamanlı verimlilik',
    intro:
      'Hype Vision OEE takip modülü, mevcut IP kameralarınızdan gelen görüntüyü analiz ederek hat durumunu (çalışıyor/durdu), cycle time ve üretim akışını gerçek zamanlı izler. Geleneksel OEE sensörlerine ek olarak veya onların yerine kamera tabanlı veri toplama sunar; availability, performance ve quality bileşenleri tek panelde birleşir. REST API ile ERP, SAP ve MES sistemlerine entegrasyon mümkündür. Geleneksel sensör ve manuel veri girişine ek olarak görsel kanıta dayalı OEE; hat gerçekten çalışıyor mu objektif olarak ölçülür.',
    specs: [
      { label: 'OEE bileşenleri', value: 'Availability, Performance, Quality' },
      { label: 'Metrikler', value: 'Duruş süresi, cycle time, üretim sayacı' },
      { label: 'Entegrasyon', value: 'ERP, SAP, MES, REST API, Modbus' },
      { label: 'Protokoller', value: 'RTSP, ONVIF' },
      { label: 'Raporlama', value: 'Vardiya, günlük, haftalık, lokasyon bazlı' },
      { label: 'Mimari', value: 'Edge · Cloud · Hibrit' },
    ],
    sections: [
      {
        heading: 'Kamera tabanlı OEE neden tercih edilir?',
        paragraphs: [
          'Geleneksel OEE hesaplaması PLC, sensör ve manuel veri girişine dayanır. Sensör arızası, kalibrasyon kayması veya operatör hatası metrikleri bozar. Kamera tabanlı OEE ise görsel kanıta dayanır: hat gerçekten çalışıyor mu, ürün akışı var mı, duruş ne kadar sürdü? Bu objektif veri kaynağı OEE doğruluğunu artırır.',
          'Hype Vision OEE modülü, hat görüntüsünden hareket tespiti, ürün sayımı ve duruş algılama yapar. Cycle time her ürün geçişinde ölçülür; planlı ve plansız duruş ayrıştırılır. Kalite modülü ile entegre çalıştığında quality bileşeni de otomatik hesaplanır.',
          'Mevcut IP kameralarınıza bağlanır; ek sensör veya PLC yatırımı gerekmez. Keşif sonrası kamera açıları hat görüş alanını kapsayacak şekilde optimize edilir.',
          'Planlı ve plansız duruş otomatik ayrıştırılır; duruş nedeni operatör tarafından etiketlenebilir.',
          'World Class Manufacturing hedeflerinde OEE %85+ bandı kritiktir; kamera tabanlı ölçüm veri güvenilirliğini artırır.',
        ],
      },
      {
        heading: 'Availability, performance ve quality',
        paragraphs: [
          'Availability (kullanılabilirlik): planlı üretim süresine göre gerçek çalışma süresi. Duruş algılandığında süre otomatik sayılır; duruş nedeni operatör tarafından etiketlenebilir veya kamera analizi ile tahmin edilir (malzeme bekleme, arıza, kalite kontrol).',
          'Performance (performans): ideal cycle time\'a göre gerçek üretim hızı. Yavaşlama, tıkanma veya operatör müdahalesi tespit edilir. Cycle time trendi vardiya karşılaştırmasında görüntülenir.',
          'Quality (kalite): kalite kontrol modülü ile entegre çalıştığında red oranı otomatik OEE quality bileşenine yansır. Standalone OEE modülünde manuel red girişi veya API entegrasyonu kullanılır.',
          'Cycle time trendi vardiya karşılaştırmasında darboğaz tespiti sağlar.',
          'World Class Manufacturing hedeflerinde OEE %85+ bandı kritiktir; kamera tabanlı ölçüm veri güvenilirliğini artırır.',
        ],
      },
      {
        heading: 'ERP/MES entegrasyonu',
        paragraphs: [
          'REST API ile OEE metrikleri, duruş kayıtları ve cycle time verileri ERP, SAP, Oracle, Dynamics 365 veya MES sistemlerine aktarılır. Çift veri girişi ortadan kalkar; üretim planlama ve bakım ekipleri gerçek zamanlı veriye erişir.',
          'Modbus veya OPC-UA ile mevcut SCADA/PLC altyapısına sinyal gönderilebilir. Duruş eşiği aşıldığında otomatik bakım talebi oluşturulabilir.',
          'Multi-site desteği ile farklı tesislerden OEE metrikleri merkezi panelde birleştirilir. Lokasyon, hat ve vardiya filtresi uygulanır.',
          'OPC-UA ve Modbus ile mevcut SCADA/PLC altyapısına sinyal gönderilir.',
          'World Class Manufacturing hedeflerinde OEE %85+ bandı kritiktir; kamera tabanlı ölçüm veri güvenilirliğini artırır.',
        ],
      },
      {
        heading: 'Edge mimari ve offline çalışma',
        paragraphs: [
          'Görüntü analizi Edge sunucuda gerçekleşir; video tesis dışına çıkmadan işlenir. Ham video depolanmaz; yalnızca OEE metrikleri, duruş olayları ve sayaç verileri kaydedilir.',
          'Offline çalışma desteği ile internet kesilse bile OEE takibi devam eder. Veriler yerelde saklanır; bağlantı geldiğinde merkeze senkronize edilir.',
          'KVKK uyumlu mimari ile kişisel veri minimizasyonu sağlanır. Personel tespiti OEE modülünde zorunlu değildir; yalnızca hat durumu ve ürün akışı analiz edilir.',
          'Multi-site merkezi panel ile çok hatlı fabrikalar tek ekrandan yönetilir.',
          'World Class Manufacturing hedeflerinde OEE %85+ bandı kritiktir; kamera tabanlı ölçüm veri güvenilirliğini artırır.',
        ],
      },
      {
        heading: 'Kurulum, pilot ve sektör uygulamaları — demo ve iletişim',
        paragraphs: [
          'Keşif sonrası hat layout, kamera konumları ve cycle time referans değerleri belirlenir. 30 günlük pilot paket ile tek hat üzerinde OEE modülü test edilir.',
          'Tekstil, otomotiv, gıda, metal ve elektronik sektörlerinde kamera tabanlı OEE uygulanmıştır. Personel verimliliği modülü ile birlikte kullanıldığında hem hat hem operatör metrikleri tek panelde birleşir.',
          'GTÜ Teknopark Gebze\'deki Hype Vision ekibi demo ve keşif toplantısı düzenler. Mevcut kamera altyapınızı paylaşmanız yeterli.',
          'Kalite modülü ile entegre quality bileşeni otomatik hesaplanır.',
          'World Class Manufacturing hedeflerinde OEE %85+ bandı kritiktir; kamera tabanlı ölçüm veri güvenilirliğini artırır.',
          '2020 yılından bu yana GTÜ Teknopark Gebze merkezli Hype Vision, endüstriyel yapay zeka ve görüntü işleme alanında onlarca saha projesi tamamlamıştır. OEE takip modülü tek başına bir ürün değil; İSG, kalite, verimlilik ve güvenlik modüllerinin tamamı aynı RTSP/ONVIF kamera altyapısı üzerinde modüler lisans ile çalışır. Yeni kamera almadan mevcut Hikvision, Dahua, Axis veya diğer IP kameralarınızı yapay zeka katmanına bağlarsınız.',
          'Edge-first mimari KVKK uyumunu teknik düzeyde sağlar: ham video varsayılan depolanmaz, yüz tanıma kapalıdır, yalnızca olay ve metrik kaydedilir. Alarm gecikmesi 100–300 ms bandındadır; offline çalışma desteği ile internet kesilse bile analiz devam eder. REST API ile ERP, SAP, MES, WMS ve BI araçlarına entegrasyon mümkündür.',
          'Modüler lisans modeli ile yalnızca kullandığınız fonksiyonlar için ödeme yaparsınız. 30 günlük pilot paket, keşif toplantısı ve kurulum sonrası eğitim standart hizmet kapsamındadır. İletişim formu veya telefon ile demo talep edin; 24 saat içinde GTÜ Teknopark Gebze ekibimizden dönüş alın.',
          'Hype Vision OEE takip çözümünü risk almadan değerlendirmek için 30 günlük pilot paket veya ücretsiz keşif toplantısı talep edebilirsiniz. GTÜ Teknopark Gebze, Hightech Binası\'ndaki ofisimizde canlı demo yapılabilir; uzaktan görüntülü toplantı ile RTSP/ONVIF uyumluluk değerlendirmesi de mümkündür. Mevcut IP kamera marka/model listenizi info@hypevisionlab.com adresine iletmeniz yeterlidir.',
          'Keşif sürecinde saha layout, kamera açıları, aydınlatma koşulları ve operasyon akışınız analiz edilir. Mimari önerisi (Edge, Cloud veya hibrit), modül seçimi ve kurulum takvimi netleştirilir. Pilot sonunda doğruluk raporu, false positive/negative analizi ve ROI projeksiyonu sunulur; memnun kalmazsanız taahhüt yoktur.',
          'Tek CTA odak noktamız iletişim ve demo: /iletisim formu, telefon (+90 541 862 9190) veya e-posta ile randevu alın. 2020\'den beri endüstriyel yapay zeka deneyimimizle mevcut kameralarınızı yapay zeka katmanına bağlayın; yeni kamera yatırımı olmadan İSG, kalite ve verimlilik metriklerinizi tek panelde toplayın.',
          'Hype Vision olarak GTÜ Teknopark Gebze merkezimizden Türkiye genelinde endüstriyel tesislere hizmet veriyoruz. Katalog PDF\'imizi indirerek modül detaylarını inceleyebilir; keşif toplantısında saha özelinde mimari önerisi alabilirsiniz. İletişim formu doldurarak demo talebinizi iletin — 24 saat içinde dönüş yapılır.',
        ],
      },
    ],
    useCases: [
      'Montaj hattı duruş ve cycle time takibi',
      'Ambalaj hattı üretim sayacı ve OEE',
      'Tekstil dikim hattı verimlilik analizi',
      'Gıda dolum hattı availability ölçümü',
      'Çok hatlı fabrika merkezi OEE paneli',
      'ERP/MES entegrasyonu ile otomatik raporlama',
    ],
    benefits: [
      'Sensörsüz OEE; mevcut kameralar yeterli',
      'Availability, performance, quality tek panelde',
      'ERP, SAP, MES REST API entegrasyonu',
      'Gerçek zamanlı duruş ve cycle time',
      'Multi-site merkezi raporlama',
      'Kalite modülü ile entegre quality bileşeni',
    ],
    relatedSlugs: [
      'personel-verimlilik-analizi-kamera',
      'kalite-kontrol-goruntu-isleme',
      'tekstil-fabrikasi-yapay-zeka',
    ],
  },
  {
    slug: 'personel-verimlilik-analizi-kamera',
    type: 'module',
    title: 'Personel Verimlilik Analizi Kamera | %84,2 Aktif — Hype Vision',
    metaDescription:
      'Kamera tabanlı personel verimliliği: %84,2 aktif, %15,8 boşta kalma. İstasyon uyumu, vardiya analizi. Mevcut IP kameralar, KVKK uyumlu. Hype Vision GTÜ Teknopark.',
    eyebrow: 'Verimlilik Modülü · Personel Analizi',
    h1: 'Personel verimlilik analizi —',
    h1Highlight: 'aktif çalışma ve boşta kalma',
    intro:
      'Hype Vision personel verimlilik modülü, mevcut IP kameralarınızdan gelen görüntüyü analiz ederek operatörlerin aktif çalışma, boşta kalma (idle) ve istasyon uyumunu gerçek zamanlı ölçer. Saha verilerinde ortalama %84,2 aktif çalışma ve %15,8 boşta kalma oranları raporlanmaktadır. Ham video depolanmaz; yalnızca anlamlandırılmış metrikler üretilir. KVKK uyumlu Edge mimari ile kişisel veri minimizasyonu sağlanır. Manuel zaman etüdü yerine sürekli aktivite ölçümü; istasyon bazlı aktif çalışma ve boşta kalma metrikleri objektif veri sağlar.',
    accuracy: '%84,2 aktif / %15,8 idle',
    specs: [
      { label: 'Aktif çalışma', value: '%84,2 (saha ortalaması)' },
      { label: 'Boşta kalma', value: '%15,8 (saha ortalaması)' },
      { label: 'Metrikler', value: 'Aktif süre, idle, istasyon uyumu, hareket' },
      { label: 'Protokoller', value: 'RTSP, ONVIF, REST API' },
      { label: 'Mimari', value: 'Edge · KVKK uyumlu · Yüz tanıma kapalı' },
      { label: 'Raporlama', value: 'Vardiya, istasyon, hat bazlı' },
    ],
    sections: [
      {
        heading: 'Personel verimliliği neden kamera ile ölçülür?',
        paragraphs: [
          'Geleneksel verimlilik ölçümü manuel zaman etüdü veya kart okuma sistemlerine dayanır. Zaman etüdü örneklemeli ve maliyetlidir; kart sistemleri yalnızca giriş-çıkış kaydeder, istasyon içi aktiviteyi ölçmez. Kamera tabanlı analiz ise operatörün istasyonda aktif mi, boşta mı, doğru pozisyonda mı olduğunu sürekli izler.',
          'Hype Vision personel modülü, hareket tespiti ve pose estimation ile aktivite sınıflandırması yapar. Aktif çalışma (üretim hareketi), boşta kalma (hareketsizlik veya istasyon dışı) ve istasyon uyumu (doğru noktada mı) ayrı metrikler olarak raporlanır.',
          'Yüz tanıma varsayılan kapalıdır; bireysel kimlik yerine istasyon ve vardiya bazlı anonim metrikler üretilir. KVKK uyumlu mimari ile kişisel veri minimizasyonu sağlanır.',
          'Yüz tanıma kapalı; anonim istasyon ve vardiya metrikleri üretilir.',
          'Lean üretim ve Kaizen çalışmalarında objektif aktivite verisi darboğaz analizinin temelidir.',
        ],
      },
      {
        heading: 'Aktif, idle ve istasyon metrikleri',
        paragraphs: [
          'Aktif çalışma süresi: operatörün üretim hareketi yaptığı süre. Montaj, paketleme, makine operasyonu gibi aktiviteler aktif olarak sınıflandırılır. Saha ortalaması %84,2 aktif çalışma raporlanmaktadır.',
          'Boşta kalma (idle): operatörün hareketsiz kaldığı veya istasyon dışında bulunduğu süre. Malzeme bekleme, mola, arıza müdahalesi gibi nedenler ayrıştırılabilir. Saha ortalaması %15,8 idle süre.',
          'İstasyon uyumu: operatörün tanımlı istasyon sınırları içinde olup olmadığı. Yanlış istasyonda çalışma veya istasyon terk etme ayrı alarm kategorisi olarak raporlanır.',
          'Malzeme bekleme, mola ve arıza müdahalesi idle alt kategorileri olarak ayrıştırılabilir.',
          'Lean üretim ve Kaizen çalışmalarında objektif aktivite verisi darboğaz analizinin temelidir.',
        ],
      },
      {
        heading: 'Vardiya analizi ve operasyonel değer',
        paragraphs: [
          'Panelde vardiya bazlı aktif/idle dağılımı, istasyon karşılaştırması ve trend analizi görüntülenir. Hangi vardiyada verimlilik düştü, hangi istasyonda idle arttı sorularına yanıt verilir.',
          'REST API ile metrikler ERP, SAP veya BI araçlarına aktarılır. OEE modülü ile birlikte kullanıldığında hem hat hem operatör verimliliği tek panelde birleşir.',
          'Verimlilik artışı hedeflenmez; objektif veri ile darboğaz tespiti ve proses iyileştirme yapılır. Operatör performans değerlendirmesi yerine sistem ve proses optimizasyonu odaklanır.',
          'Operatör performans değerlendirmesi değil proses optimizasyonu odaklanır.',
          'Lean üretim ve Kaizen çalışmalarında objektif aktivite verisi darboğaz analizinin temelidir.',
        ],
      },
      {
        heading: 'KVKK ve gizlilik',
        paragraphs: [
          'Ham video depolanmaz; yalnızca anonim metrikler (aktif süre, idle, istasyon) kaydedilir. Yüz tanıma ve bireysel kimlik tespiti varsayılan kapalıdır. Edge mimaride video tesis dışına çıkmaz.',
          'İşveren-çalışan ilişkisinde açık rıza ve bilgilendirme süreçleri sözleşme kapsamında ele alınır. Veri saklama süresi ve erişim yetkisi tanımlanır.',
          'Personel temsilcileri ile pilot öncesi bilgilendirme toplantısı önerilir. Şeffaf süreç güven oluşturur.',
          'OEE modülü ile hat duruşu ve operatör aktivitesi korelasyon analizi yapılır.',
          'Lean üretim ve Kaizen çalışmalarında objektif aktivite verisi darboğaz analizinin temelidir.',
        ],
      },
      {
        heading: 'Kurulum ve pilot paket — demo ve iletişim',
        paragraphs: [
          'Keşif sonrası istasyon sınırları, kamera açıları ve aktivite tanımları belirlenir. 30 günlük pilot paket ile tek hat veya bölge üzerinde modül test edilir.',
          'Tekstil, gıda, otomotiv ve elektronik sektörlerinde personel verimliliği uygulanmıştır. GTÜ Teknopark Gebze\'deki ekibimiz demo ve keşif toplantısı düzenler.',
          'Hype Vision personel modülü, OEE takip, kalite kontrol ve İSG modülleriyle aynı platformda çalışır. Demo ve keşif için iletişime geçin.',
          'İşveren-çalışan bilgilendirme süreci pilot öncesi önerilir.',
          'Lean üretim ve Kaizen çalışmalarında objektif aktivite verisi darboğaz analizinin temelidir.',
          '2020 yılından bu yana GTÜ Teknopark Gebze merkezli Hype Vision, endüstriyel yapay zeka ve görüntü işleme alanında onlarca saha projesi tamamlamıştır. personel verimlilik analizi modülü tek başına bir ürün değil; İSG, kalite, verimlilik ve güvenlik modüllerinin tamamı aynı RTSP/ONVIF kamera altyapısı üzerinde modüler lisans ile çalışır. Yeni kamera almadan mevcut Hikvision, Dahua, Axis veya diğer IP kameralarınızı yapay zeka katmanına bağlarsınız.',
          'Edge-first mimari KVKK uyumunu teknik düzeyde sağlar: ham video varsayılan depolanmaz, yüz tanıma kapalıdır, yalnızca olay ve metrik kaydedilir. Alarm gecikmesi 100–300 ms bandındadır; offline çalışma desteği ile internet kesilse bile analiz devam eder. REST API ile ERP, SAP, MES, WMS ve BI araçlarına entegrasyon mümkündür.',
          'Modüler lisans modeli ile yalnızca kullandığınız fonksiyonlar için ödeme yaparsınız. 30 günlük pilot paket, keşif toplantısı ve kurulum sonrası eğitim standart hizmet kapsamındadır. İletişim formu veya telefon ile demo talep edin; 24 saat içinde GTÜ Teknopark Gebze ekibimizden dönüş alın.',
          'Hype Vision personel verimlilik analizi çözümünü risk almadan değerlendirmek için 30 günlük pilot paket veya ücretsiz keşif toplantısı talep edebilirsiniz. GTÜ Teknopark Gebze, Hightech Binası\'ndaki ofisimizde canlı demo yapılabilir; uzaktan görüntülü toplantı ile RTSP/ONVIF uyumluluk değerlendirmesi de mümkündür. Mevcut IP kamera marka/model listenizi info@hypevisionlab.com adresine iletmeniz yeterlidir.',
          'Keşif sürecinde saha layout, kamera açıları, aydınlatma koşulları ve operasyon akışınız analiz edilir. Mimari önerisi (Edge, Cloud veya hibrit), modül seçimi ve kurulum takvimi netleştirilir. Pilot sonunda doğruluk raporu, false positive/negative analizi ve ROI projeksiyonu sunulur; memnun kalmazsanız taahhüt yoktur.',
          'Tek CTA odak noktamız iletişim ve demo: /iletisim formu, telefon (+90 541 862 9190) veya e-posta ile randevu alın. 2020\'den beri endüstriyel yapay zeka deneyimimizle mevcut kameralarınızı yapay zeka katmanına bağlayın; yeni kamera yatırımı olmadan İSG, kalite ve verimlilik metriklerinizi tek panelde toplayın.',
          'Hype Vision olarak GTÜ Teknopark Gebze merkezimizden Türkiye genelinde endüstriyel tesislere hizmet veriyoruz. Katalog PDF\'imizi indirerek modül detaylarını inceleyebilir; keşif toplantısında saha özelinde mimari önerisi alabilirsiniz. İletişim formu doldurarak demo talebinizi iletin — 24 saat içinde dönüş yapılır.',
        ],
      },
    ],
    useCases: [
      'Montaj hattı operatör aktivite analizi',
      'Paketleme istasyonu boşta kalma tespiti',
      'Tekstil dikim hattı istasyon uyumu',
      'Gıda dolum hattı vardiya verimliliği',
      'Depo picking alanı hareket analizi',
      'Çok vardiyalı fabrika karşılaştırmalı rapor',
    ],
    benefits: [
      '%84,2 aktif / %15,8 idle sahada ölçülmüş metrikler',
      'Manuel zaman etüdüne gerek kalmaz',
      'KVKK uyumlu; yüz tanıma kapalı',
      'OEE modülü ile entegre verimlilik paneli',
      'Vardiya ve istasyon bazlı darboğaz tespiti',
      'Mevcut IP kameralar; modüler lisans',
    ],
    relatedSlugs: [
      'oee-takip-sistemi',
      'tekstil-fabrikasi-yapay-zeka',
      'kvkk-uyumlu-kamera-analitigi',
    ],
  },
  {
    slug: 'kvkk-uyumlu-kamera-analitigi',
    type: 'module',
    title: 'KVKK Uyumlu Kamera Analitiği | Edge Mimari — Hype Vision',
    metaDescription:
      'KVKK uyumlu endüstriyel kamera analitiği: Edge mimari, ham video depolanmaz, yüz tanıma kapalı. Olay ve metrik odaklı. Hype Vision GTÜ Teknopark Gebze.',
    eyebrow: 'Platform · KVKK Uyumu',
    h1: 'KVKK uyumlu kamera analitiği —',
    h1Highlight: 'Edge mimari, veri minimizasyonu',
    intro:
      'Hype Vision platformu, Kişisel Verilerin Korunması Kanunu (KVKK) gereksinimlerini mimari tasarımın merkezine alır. Ham video zorunlu olmadıkça saklanmaz; yapay zeka görüntüyü Edge sunucuda işler ve yalnızca anlamlandırılmış çıktılar (olay, alarm, metrik, kanıt karesi) kaydedilir. Yüz tanıma varsayılan kapalıdır. GTÜ Teknopark Gebze\'de geliştirilen Edge-first yaklaşım, endüstriyel tesislerde KVKK uyumlu yapay zeka denetimini mümkün kılar. Veri minimizasyonu, amaç sınırlaması ve Edge-first işleme KVKK uyumunun teknik temelidir; ham video varsayılan olarak saklanmaz.',
    specs: [
      { label: 'Veri işleme', value: 'Edge-first; video tesis dışına çıkmaz' },
      { label: 'Ham video', value: 'Varsayılan depolanmaz' },
      { label: 'Yüz tanıma', value: 'Varsayılan kapalı' },
      { label: 'Saklanan veri', value: 'Olay, alarm, metrik, kanıt karesi' },
      { label: 'Şifreleme', value: 'Transit ve rest; rol bazlı erişim' },
      { label: 'Mimari', value: 'Edge · Cloud · Hibrit (sözleşmeye göre)' },
    ],
    sections: [
      {
        heading: 'KVKK neden endüstriyel AI için kritik?',
        paragraphs: [
          'Endüstriyel tesislerde kamera analitiği personel görüntüsü işler; bu Kişisel Verilerin Korunması Kanunu kapsamındadır. Ham video arşivleme, yüz tanıma ve tesis dışına veri aktarımı KVKK açısından risk oluşturur. Hype Vision bu riskleri mimari tasarımla minimize eder: veri minimizasyonu, amaç sınırlaması ve Edge işleme prensipleri platformun temelidir.',
          '6698 sayılı KVKK, kişisel verilerin hukuka uygun, dürüst ve ölçülü işlenmesini zorunlu kılar. Hype Vision ham video depolamak yerine olay ve metrik üretir; kişisel veri işleme amacı İSG denetimi, kalite kontrol ve verimlilik ölçümü ile sınırlıdır.',
          'Hype Vision veri sorumlusu veya veri işleyen rolünü müşteri sözleşmesine göre üstlenir. Aydınlatma metni, açık rısa ve veri saklama süresi proje kapsamında tanımlanır.',
          '6698 sayılı KVKK kapsamında veri işleme sözleşmesi (DPA) her proje için hazırlanır.',
          'Veri sorumlusu olarak müşterilerimize KVKK uyum checklist ve teknik dokümantasyon sunuyoruz.',
        ],
      },
      {
        heading: 'Edge mimari ve veri minimizasyonu',
        paragraphs: [
          'Edge mimaride görüntü tesis içindeki sunucuda veya GPU biriminde işlenir; analiz tamamlandıktan sonra ham video akışı discard edilir. Tesis dışına yalnızca anlamlandırılmış JSON/event verisi çıkar. Bu yaklaşım KVKK\'nın veri minimizasyonu ilkesini karşılar.',
          'Kanıt karesi (snapshot) yalnızca ihlal veya olay anında kaydedilir; sürekli kayıt yapılmaz. Saklama süresi sözleşmede tanımlanır (örneğin 30–90 gün); süre sonunda otomatik silme uygulanır.',
          'Cloud veya hibrit mimaride de aynı prensipler geçerlidir. Cloud\'a aktarılan veri şifrelenir; erişim rol bazlı yetki ile sınırlanır. Veri lokasyonu (Türkiye/EU) müşteri tercihine göre belirlenir.',
          'Kanıt karesi saklama süresi sözleşmede tanımlanır; otomatik silme uygulanır.',
          'Veri sorumlusu olarak müşterilerimize KVKK uyum checklist ve teknik dokümantasyon sunuyoruz.',
        ],
      },
      {
        heading: 'Yüz tanıma ve kimlik tespiti',
        paragraphs: [
          'Hype Vision varsayılan olarak yüz tanıma kullanmaz. Baret tespiti ekipman eksikliğine, personel verimliliği anonim metriklere, yasaklı alan modülü bölge ihlaline odaklanır. Bireysel kimlik tespiti platformun standart modüllerinde yer almaz.',
          'Özel talep halinde (örneğin erişim kontrolü entegrasyonu) yüz tanıma modülü ayrı sözleşme ve açık rıza süreci ile devreye alınabilir. Bu senaryo KVKK aydınlatma ve rıza gereksinimlerini tam olarak karşılar.',
          'Pose estimation ve hareket analizi kişiyi tanımlamaz; yalnızca vücut pozisyonu ve aktivite sınıflandırması yapar. KVKK açısından daha düşük risk profili oluşturur.',
          'RBAC ile rol bazlı erişim; audit trail ile denetim izi oluşturulur.',
          'Veri sorumlusu olarak müşterilerimize KVKK uyum checklist ve teknik dokümantasyon sunuyoruz.',
        ],
      },
      {
        heading: 'Güvenlik, erişim ve denetim',
        paragraphs: [
          'Platform erişimi rol bazlı yetki (RBAC) ile yönetilir. Her kullanıcı yalnızca yetkili olduğu tesis, bölge ve modüle erişir. Erişim logları tutulur; denetim izi (audit trail) oluşturulur.',
          'Veri transit ve rest halinde şifrelenir. TLS/HTTPS ile API iletişimi; AES ile disk şifreleme. Penetrasyon testi ve güvenlik değerlendirmesi enterprise projelerde sunulabilir.',
          'Veri ihlali durumunda bildirim prosedürü sözleşme kapsamında tanımlanır. Hype Vision KVKK md. 12 uyarınca veri güvenliği önlemlerini alır.',
          'Cloud veri lokasyonu Türkiye/EU müşteri tercihine göre belirlenir.',
          'Veri sorumlusu olarak müşterilerimize KVKK uyum checklist ve teknik dokümantasyon sunuyoruz.',
        ],
      },
      {
        heading: 'Sözleşme, pilot ve danışmanlık — demo ve iletişim',
        paragraphs: [
          'Her proje için veri işleme sözleşmesi (DPA) ve KVKK uyum checklist\'i hazırlanır. Müşterinin veri sorumlusu olarak yükümlülükleri danışmanlık kapsamında ele alınır.',
          '30 günlük pilot paket ile KVKK uyumlu mimariyi risk almadan test edebilirsiniz. Pilot sonunda veri akış diyagramı ve uyum raporu sunulur.',
          'GTÜ Teknopark Gebze\'deki Hype Vision ekibi KVKK danışmanlığı ve teknik keşif toplantısı düzenler. Demo ve iletişim için bize ulaşın.',
          'Penetrasyon testi enterprise projelerde sunulabilir.',
          'Veri sorumlusu olarak müşterilerimize KVKK uyum checklist ve teknik dokümantasyon sunuyoruz.',
          '2020 yılından bu yana GTÜ Teknopark Gebze merkezli Hype Vision, endüstriyel yapay zeka ve görüntü işleme alanında onlarca saha projesi tamamlamıştır. KVKK uyumlu kamera analitiği modülü tek başına bir ürün değil; İSG, kalite, verimlilik ve güvenlik modüllerinin tamamı aynı RTSP/ONVIF kamera altyapısı üzerinde modüler lisans ile çalışır. Yeni kamera almadan mevcut Hikvision, Dahua, Axis veya diğer IP kameralarınızı yapay zeka katmanına bağlarsınız.',
          'Edge-first mimari KVKK uyumunu teknik düzeyde sağlar: ham video varsayılan depolanmaz, yüz tanıma kapalıdır, yalnızca olay ve metrik kaydedilir. Alarm gecikmesi 100–300 ms bandındadır; offline çalışma desteği ile internet kesilse bile analiz devam eder. REST API ile ERP, SAP, MES, WMS ve BI araçlarına entegrasyon mümkündür.',
          'Modüler lisans modeli ile yalnızca kullandığınız fonksiyonlar için ödeme yaparsınız. 30 günlük pilot paket, keşif toplantısı ve kurulum sonrası eğitim standart hizmet kapsamındadır. İletişim formu veya telefon ile demo talep edin; 24 saat içinde GTÜ Teknopark Gebze ekibimizden dönüş alın.',
          'Hype Vision KVKK uyumlu kamera analitiği çözümünü risk almadan değerlendirmek için 30 günlük pilot paket veya ücretsiz keşif toplantısı talep edebilirsiniz. GTÜ Teknopark Gebze, Hightech Binası\'ndaki ofisimizde canlı demo yapılabilir; uzaktan görüntülü toplantı ile RTSP/ONVIF uyumluluk değerlendirmesi de mümkündür. Mevcut IP kamera marka/model listenizi info@hypevisionlab.com adresine iletmeniz yeterlidir.',
          'Keşif sürecinde saha layout, kamera açıları, aydınlatma koşulları ve operasyon akışınız analiz edilir. Mimari önerisi (Edge, Cloud veya hibrit), modül seçimi ve kurulum takvimi netleştirilir. Pilot sonunda doğruluk raporu, false positive/negative analizi ve ROI projeksiyonu sunulur; memnun kalmazsanız taahhüt yoktur.',
          'Tek CTA odak noktamız iletişim ve demo: /iletisim formu, telefon (+90 541 862 9190) veya e-posta ile randevu alın. 2020\'den beri endüstriyel yapay zeka deneyimimizle mevcut kameralarınızı yapay zeka katmanına bağlayın; yeni kamera yatırımı olmadan İSG, kalite ve verimlilik metriklerinizi tek panelde toplayın.',
          'Hype Vision olarak GTÜ Teknopark Gebze merkezimizden Türkiye genelinde endüstriyel tesislere hizmet veriyoruz. Katalog PDF\'imizi indirerek modül detaylarını inceleyebilir; keşif toplantısında saha özelinde mimari önerisi alabilirsiniz. İletişim formu doldurarak demo talebinizi iletin — 24 saat içinde dönüş yapılır.',
        ],
      },
    ],
    useCases: [
      'KVKK hassasiyeti yüksek üretim tesisleri',
      'Personel verimliliği anonim metrik toplama',
      'İSG denetimi kanıt arşivi (sınırlı saklama)',
      'Edge-only mimari ile veri tesis dışına çıkmaz',
      'Çok lokasyonlu KVKK uyumlu merkezi panel',
      'Gıda ve ilaç sektörü veri gizliliği gereksinimleri',
    ],
    benefits: [
      'Edge-first mimari; video tesis dışına çıkmaz',
      'Ham video varsayılan depolanmaz',
      'Yüz tanıma varsayılan kapalı',
      'Rol bazlı erişim ve audit trail',
      'DPA ve KVKK uyum danışmanlığı',
      'Tüm modüller aynı uyumlu altyapıda',
    ],
    relatedSlugs: [
      'onvif-rtsp-yapay-zeka-entegrasyonu',
      'personel-verimlilik-analizi-kamera',
      'kkd-kontrol-kamera-sistemi',
    ],
  },
  {
    slug: 'onvif-rtsp-yapay-zeka-entegrasyonu',
    type: 'module',
    title: 'ONVIF RTSP Yapay Zeka Entegrasyonu | Marka Bağımsız — Hype Vision',
    metaDescription:
      'ONVIF ve RTSP ile yapay zeka entegrasyonu: Hikvision, Dahua, Axis, Bosch. Mevcut IP kameralar, marka bağımsız. Hype Vision GTÜ Teknopark Gebze.',
    eyebrow: 'Platform · Kamera Entegrasyonu',
    h1: 'ONVIF RTSP yapay zeka entegrasyonu —',
    h1Highlight: 'marka bağımsız, mevcut kameralar',
    intro:
      'Hype Vision, tesisinizdeki mevcut IP kameraları standart protokoller (RTSP, ONVIF) üzerinden yapay zeka katmanına bağlar. Hikvision, Dahua, Axis, Bosch, Hanwha, Uniview veya RTSP destekleyen herhangi bir marka — yeni kamera almanız gerekmez. GTÜ Teknopark Gebze\'de geliştirilen platform, 2020\'den beri marka bağımsız endüstriyel kamera entegrasyonu sunmaktadır. Karma marka kamera parkları, legacy NVR sistemleri ve farklı çözünürlükler tek RTSP/ONVIF katmanında birleşir.',
    specs: [
      { label: 'Protokoller', value: 'RTSP, ONVIF Profile S/G/T' },
      { label: 'Markalar', value: 'Hikvision, Dahua, Axis, Bosch, Hanwha, Uniview+' },
      { label: 'NVR uyumu', value: 'NVR RTSP stream çıkışı desteklenir' },
      { label: 'Çözünürlük', value: '720p–4K (modül ve GPU\'ya göre)' },
      { label: 'FPS', value: '5–30 FPS (modül gereksinimine göre)' },
      { label: 'Mimari', value: 'Edge · Cloud · Hibrit' },
    ],
    sections: [
      {
        heading: 'Neden marka bağımsız entegrasyon?',
        paragraphs: [
          'Endüstriyel tesislerde farklı marka ve modellerden oluşan kamera altyapısı yaygındır. Zaman içinde eklenen kameralar, farklı NVR sistemleri ve legacy cihazlar entegrasyonu zorlaştırır. Hype Vision RTSP ve ONVIF standart protokoller üzerinden çalışır; marka ve model fark etmez.',
          'Yeni kamera almanız gerekmez. Keşif sonrası mevcut kamera listesi, RTSP URL\'leri ve ONVIF uyumluluğu kontrol edilir. Yalnızca gerekli noktalarda çözünürlük veya açı optimizasyonu önerilebilir.',
          'NVR üzerinden RTSP stream çıkışı da desteklenir. Doğrudan kamera bağlantısı veya NVR proxy senaryosu keşif sonrası belirlenir.',
          'ONVIF discovery ile otomatik kamera tespiti keşif aşamasında yapılır.',
          'Kamera yenileme projelerinde mevcut altyapıyı koruyarak AI katmanı eklemek toplam sahip olma maliyetini düşürür.',
        ],
      },
      {
        heading: 'RTSP ve ONVIF teknik detaylar',
        paragraphs: [
          'RTSP (Real Time Streaming Protocol) IP kameraların standart video akış protokolüdür. Hype Vision Edge sunucusu RTSP URL\'den H.264/H.265 stream alır, decode eder ve yapay zeka modüllerine iletir. Latency optimize edilmiş pipeline ile 100–300 ms işleme süresi hedeflenir.',
          'ONVIF (Open Network Video Interface Forum) kamera keşfi, PTZ kontrolü ve event subscription için kullanılır. Profile S (streaming), Profile G (recording) ve Profile T (advanced streaming) desteklenir.',
          'Kamera kimlik doğrulama (digest, basic) ve TLS stream (RTSPS) güvenlik gereksinimlerine göre yapılandırılır. Fabrika ağı VLAN segmentasyonu ile izole edilebilir.',
          'RTSPS (TLS) stream güvenlik gereksinimlerine göre yapılandırılır.',
          'Kamera yenileme projelerinde mevcut altyapıyı koruyarak AI katmanı eklemek toplam sahip olma maliyetini düşürür.',
        ],
      },
      {
        heading: 'Desteklenen markalar ve NVR entegrasyonu',
        paragraphs: [
          'Test edilmiş markalar: Hikvision, Dahua, Axis, Bosch, Hanwha, Uniview, Honeywell, TP-Link ve genel IP/RTSP kameralar. Listede olmayan markalar RTSP veya ONVIF ile bağlanır.',
          'NVR sistemleri (Hikvision, Dahua, Milestone, Genetec) üzerinden RTSP stream çıkışı alınabilir. VMS popup entegrasyonu ile alarm anında VMS ekranında olay görüntülenir.',
          'Endüstriyel vision kameralar (Basler, FLIR, Cognex RTSP çıkışlı modeller) de desteklenir. Yüksek FPS veya özel çözünürlük gereksinimleri GPU kapasitesine göre planlanır.',
          'NVR proxy senaryosu: doğrudan kamera veya NVR RTSP çıkışı.',
          'Kamera yenileme projelerinde mevcut altyapıyı koruyarak AI katmanı eklemek toplam sahip olma maliyetini düşürür.',
        ],
      },
      {
        heading: 'Kurulum süreci ve keşif',
        paragraphs: [
          'Keşif aşamasında mevcut kamera envanteri, ağ topolojisi ve RTSP URL listesi toplanır. ONVIF discovery ile otomatik kamera tespiti yapılabilir. Uyumluluk raporu sunulur.',
          '4–8 kamera ile standart kurulum 1–3 iş gününde tamamlanır. Orta ölçek 1–2 hafta, çok lokasyonlu projeler 3–6 hafta. Kurulum sonrası test ve kalibrasyon dahildir.',
          'GTÜ Teknopark Gebze\'deki mühendislik ekibimiz uzaktan veya sahada keşif yapar. Kamera marka/model listenizi paylaşmanız yeterli.',
          'Endüstriyel vision kameralar (Basler, FLIR) RTSP çıkışlı modeller desteklenir.',
          'Kamera yenileme projelerinde mevcut altyapıyı koruyarak AI katmanı eklemek toplam sahip olma maliyetini düşürür.',
        ],
      },
      {
        heading: 'Tüm modüller tek altyapıda — demo ve iletişim',
        paragraphs: [
          'ONVIF/RTSP entegrasyonu tüm Hype Vision modüllerinin temelidir: İSG (KKD, yasaklı alan, forklift), kalite kontrol, OEE, personel verimliliği. Tek kamera altyapısı, modüler lisans ile istediğiniz modülleri ekleyin.',
          'Tek GPU\'lu Edge sunucuda 1080p ile 6–12 kamera gerçek zamanlı analiz edilir. Çoklu GPU veya Cloud ile onlarca kameraya ölçeklenir.',
          'Demo ve keşif için iletişime geçin. Mevcut kamera altyapınızı yapay zeka katmanına bağlamak için GTÜ Teknopark Gebze ekibimiz hazır.',
          'Tek GPU ile 1080p\'de 6–12 kamera; çoklu GPU ile onlarca kamera ölçeklenir.',
          'Kamera yenileme projelerinde mevcut altyapıyı koruyarak AI katmanı eklemek toplam sahip olma maliyetini düşürür.',
          '2020 yılından bu yana GTÜ Teknopark Gebze merkezli Hype Vision, endüstriyel yapay zeka ve görüntü işleme alanında onlarca saha projesi tamamlamıştır. ONVIF RTSP yapay zeka entegrasyonu modülü tek başına bir ürün değil; İSG, kalite, verimlilik ve güvenlik modüllerinin tamamı aynı RTSP/ONVIF kamera altyapısı üzerinde modüler lisans ile çalışır. Yeni kamera almadan mevcut Hikvision, Dahua, Axis veya diğer IP kameralarınızı yapay zeka katmanına bağlarsınız.',
          'Edge-first mimari KVKK uyumunu teknik düzeyde sağlar: ham video varsayılan depolanmaz, yüz tanıma kapalıdır, yalnızca olay ve metrik kaydedilir. Alarm gecikmesi 100–300 ms bandındadır; offline çalışma desteği ile internet kesilse bile analiz devam eder. REST API ile ERP, SAP, MES, WMS ve BI araçlarına entegrasyon mümkündür.',
          'Modüler lisans modeli ile yalnızca kullandığınız fonksiyonlar için ödeme yaparsınız. 30 günlük pilot paket, keşif toplantısı ve kurulum sonrası eğitim standart hizmet kapsamındadır. İletişim formu veya telefon ile demo talep edin; 24 saat içinde GTÜ Teknopark Gebze ekibimizden dönüş alın.',
          'Hype Vision ONVIF RTSP yapay zeka entegrasyonu çözümünü risk almadan değerlendirmek için 30 günlük pilot paket veya ücretsiz keşif toplantısı talep edebilirsiniz. GTÜ Teknopark Gebze, Hightech Binası\'ndaki ofisimizde canlı demo yapılabilir; uzaktan görüntülü toplantı ile RTSP/ONVIF uyumluluk değerlendirmesi de mümkündür. Mevcut IP kamera marka/model listenizi info@hypevisionlab.com adresine iletmeniz yeterlidir.',
          'Keşif sürecinde saha layout, kamera açıları, aydınlatma koşulları ve operasyon akışınız analiz edilir. Mimari önerisi (Edge, Cloud veya hibrit), modül seçimi ve kurulum takvimi netleştirilir. Pilot sonunda doğruluk raporu, false positive/negative analizi ve ROI projeksiyonu sunulur; memnun kalmazsanız taahhüt yoktur.',
          'Tek CTA odak noktamız iletişim ve demo: /iletisim formu, telefon (+90 541 862 9190) veya e-posta ile randevu alın. 2020\'den beri endüstriyel yapay zeka deneyimimizle mevcut kameralarınızı yapay zeka katmanına bağlayın; yeni kamera yatırımı olmadan İSG, kalite ve verimlilik metriklerinizi tek panelde toplayın.',
          'Hype Vision olarak GTÜ Teknopark Gebze merkezimizden Türkiye genelinde endüstriyel tesislere hizmet veriyoruz. Katalog PDF\'imizi indirerek modül detaylarını inceleyebilir; keşif toplantısında saha özelinde mimari önerisi alabilirsiniz. İletişim formu doldurarak demo talebinizi iletin — 24 saat içinde dönüş yapılır.',
        ],
      },
    ],
    useCases: [
      'Mevcut Hikvision/Dahua altyapısına AI katmanı',
      'Karma marka kamera parkına tek platform',
      'NVR üzerinden RTSP stream analizi',
      'Legacy kamera modernizasyonu (yeni kamera yok)',
      'Çok lokasyonlu merkezi kamera yönetimi',
      'VMS (Milestone, Genetec) popup entegrasyonu',
    ],
    benefits: [
      'Marka bağımsız; RTSP/ONVIF standart protokoller',
      'Yeni kamera almanız gerekmez',
      'Hikvision, Dahua, Axis, Bosch ve 20+ marka',
      'NVR ve VMS entegrasyonu',
      'Tüm AI modülleri aynı altyapıda',
      '1–3 iş gününde standart kurulum',
    ],
    relatedSlugs: [
      'baret-tespit-sistemi',
      'kvkk-uyumlu-kamera-analitigi',
      'oee-takip-sistemi',
    ],
  },
  {
    slug: 'tekstil-fabrikasi-yapay-zeka',
    type: 'sector',
    title: 'Tekstil Fabrikası Yapay Zeka | Dikim Hattı, OEE, KKD — Hype Vision',
    metaDescription:
      'Tekstil fabrikası yapay zeka: dikim hattı OEE, KKD denetimi, kalite kontrol, personel verimliliği. Mevcut IP kameralar. Hype Vision GTÜ Teknopark Gebze.',
    eyebrow: 'Sektör · Tekstil',
    h1: 'Tekstil fabrikası yapay zeka —',
    h1Highlight: 'dikim hattından sevkiyata',
    intro:
      'Tekstil fabrikalarında dikim hattı verimliliği, KKD uyumu, kalite kontrol ve personel aktivitesi aynı anda yönetilmelidir. Hype Vision, mevcut IP kameralarınızdan (RTSP/ONVIF) gelen görüntüyü analiz ederek OEE, boşta kalma, dikiş hattı kusuru ve baret/yelek denetimini tek panelde birleştirir. GTÜ Teknopark Gebze\'de geliştirilen platform, 2020\'den beri tekstil sektöründe sahada uygulanmaktadır. Dikim hattından paketlemeye kadar OEE, kalite, KKD ve personel metrikleri tek platformda; tekstil operasyonlarına özel modül paketi.',
    specs: [
      { label: 'Modüller', value: 'OEE, personel, kalite, KKD, yasaklı alan' },
      { label: 'Hat tipi', value: 'Dikim, kesim, paketleme, sevkiyat' },
      { label: 'Metrikler', value: 'Cycle time, idle, red oranı, ihlal sayısı' },
      { label: 'Entegrasyon', value: 'ERP, MES, REST API' },
      { label: 'Protokoller', value: 'RTSP, ONVIF' },
      { label: 'Mimari', value: 'Edge · KVKK uyumlu' },
    ],
    sections: [
      {
        heading: 'Tekstil sektöründe dijital dönüşüm',
        paragraphs: [
          'Tekstil fabrikaları yoğun işgücü, çok vardiya ve hızlı sipariş döngüsü ile çalışır. Dikim hattı verimliliği, kalite tutarlılığı ve İSG uyumu operasyonel maliyeti doğrudan etkiler. Geleneksel yönetim vardiya sonunda rapor alır; sorun geç fark edilir. Yapay zeka destekli kamera analitiği ise olayları gerçek zamanlı görünür kılar.',
          'Hype Vision tekstil paketi: dikim hattı OEE takibi, operatör boşta kalma analizi, dikiş/kumaş kusuru tespiti ve KKD (baret, yelek) denetimi. Tüm modüller mevcut IP kameralarınıza bağlanır; yeni altyapı yatırımı minimize edilir.',
          'Türkiye\'nin tekstil üretim bölgelerinde (İstanbul, Bursa, Denizli, Gaziantep) pilot ve tam ölçekli projeler yürütülmüştür.',
          'Bursa, Denizli, Gaziantep ve İstanbul tekstil bölgelerinde saha deneyimi mevcuttur.',
          'Tekstil ihracatında kalite ve teslimat süresi rekabet avantajıdır; gerçek zamanlı metrik yönetimi destekler.',
        ],
      },
      {
        heading: 'Dikim hattı OEE ve personel verimliliği',
        paragraphs: [
          'Dikim hattında cycle time, duruş süresi ve üretim sayacı kamera tabanlı OEE modülü ile ölçülür. Operatör başına aktif çalışma ve boşta kalma (idle) personel verimliliği modülü ile raporlanır. Saha ortalaması %84,2 aktif, %15,8 idle.',
          'Vardiya karşılaştırması hangi vardiyada verimlilik düştüğünü gösterir. İstasyon bazlı darboğaz tespiti ile hat dengesi optimize edilir. REST API ile ERP ve MES sistemlerine veri aktarımı mümkündür.',
          'Manuel zaman etüdüne gerek kalmaz; 7/24 otomatik metrik toplama sürdürülebilir verimlilik yönetimini mümkün kılar.',
          'Dikim hattı cycle time ve operatör idle metrikleri vardiya karşılaştırmasında kullanılır.',
          'Tekstil ihracatında kalite ve teslimat süresi rekabet avantajıdır; gerçek zamanlı metrik yönetimi destekler.',
        ],
      },
      {
        heading: 'Kalite kontrol ve kusur tespiti',
        paragraphs: [
          'Dikiş hattı, kumaş yüzeyi ve paketleme noktalarında kalite kontrol modülü devreye alınır. OK/RED sınıflandırması %94,2 doğruluk bandında; dikiş hatası, leke, renk sapması ve ambalaj kusuru tespit edilir.',
          'Custom model eğitimi ile tesisinize özel kusur tipleri tanımlanır. Red oranı vardiya ve hat bazlı raporlanır; kalite mühendisleri proses iyileştirme hedefler.',
          'Kalite modülü OEE quality bileşenine otomatik veri sağlar; OEE hesaplaması üç boyutlu (availability, performance, quality) tamamlanır.',
          'Dikiş hatası ve kumaş lekesi kalite modülü ile %94,2 OK/RED doğruluk.',
          'Tekstil ihracatında kalite ve teslimat süresi rekabet avantajıdır; gerçek zamanlı metrik yönetimi destekler.',
        ],
      },
      {
        heading: 'İSG: KKD ve yasaklı alan',
        paragraphs: [
          'Kesim ve dikim bölgelerinde baret ve yelek denetimi KKD modülü ile yapılır. %96–98,6 doğruluk bandında baret tespiti; turnike entegrasyonu ile ihlalde geçiş engellenebilir.',
          'Makine önü, bıçaklı kesim alanı ve yüksek istif bölgeleri yasaklı alan modülü ile izlenir. %97,8 doğruluk ile bölge ihlali anında alarm üretilir.',
          'KVKK uyumlu Edge mimari ile ham video depolanmaz; İSG denetimi kişisel veri riski olmadan sürdürülür.',
          'Kesim bölgesi baret+yelek KKD denetimi turnike entegrasyonu ile.',
          'Tekstil ihracatında kalite ve teslimat süresi rekabet avantajıdır; gerçek zamanlı metrik yönetimi destekler.',
        ],
      },
      {
        heading: 'Kurulum, pilot ve demo — demo ve iletişim',
        paragraphs: [
          'Keşif sonrası hat layout, kamera konumları ve modül önceliklendirmesi belirlenir. 30 günlük pilot paket ile tek dikim hattında OEE + personel modülü test edilir.',
          'GTÜ Teknopark Gebze\'deki Hype Vision ekibi tekstil sektörü demo senaryoları ve referans projeleri sunar. Mevcut kamera altyapınızı paylaşmanız yeterli.',
          'Demo ve keşif toplantısı için iletişime geçin. Tekstil fabrikanızı yapay zeka ile dönüştürmek için bir adım atın.',
          'ERP entegrasyonu ile sipariş takibi ve verimlilik metrikleri birleşir.',
          'Tekstil ihracatında kalite ve teslimat süresi rekabet avantajıdır; gerçek zamanlı metrik yönetimi destekler.',
          '2020 yılından bu yana GTÜ Teknopark Gebze merkezli Hype Vision, endüstriyel yapay zeka ve görüntü işleme alanında onlarca saha projesi tamamlamıştır. tekstil fabrikası yapay zeka modülü tek başına bir ürün değil; İSG, kalite, verimlilik ve güvenlik modüllerinin tamamı aynı RTSP/ONVIF kamera altyapısı üzerinde modüler lisans ile çalışır. Yeni kamera almadan mevcut Hikvision, Dahua, Axis veya diğer IP kameralarınızı yapay zeka katmanına bağlarsınız.',
          'Edge-first mimari KVKK uyumunu teknik düzeyde sağlar: ham video varsayılan depolanmaz, yüz tanıma kapalıdır, yalnızca olay ve metrik kaydedilir. Alarm gecikmesi 100–300 ms bandındadır; offline çalışma desteği ile internet kesilse bile analiz devam eder. REST API ile ERP, SAP, MES, WMS ve BI araçlarına entegrasyon mümkündür.',
          'Modüler lisans modeli ile yalnızca kullandığınız fonksiyonlar için ödeme yaparsınız. 30 günlük pilot paket, keşif toplantısı ve kurulum sonrası eğitim standart hizmet kapsamındadır. İletişim formu veya telefon ile demo talep edin; 24 saat içinde GTÜ Teknopark Gebze ekibimizden dönüş alın.',
          'Hype Vision tekstil fabrikası yapay zeka çözümünü risk almadan değerlendirmek için 30 günlük pilot paket veya ücretsiz keşif toplantısı talep edebilirsiniz. GTÜ Teknopark Gebze, Hightech Binası\'ndaki ofisimizde canlı demo yapılabilir; uzaktan görüntülü toplantı ile RTSP/ONVIF uyumluluk değerlendirmesi de mümkündür. Mevcut IP kamera marka/model listenizi info@hypevisionlab.com adresine iletmeniz yeterlidir.',
          'Keşif sürecinde saha layout, kamera açıları, aydınlatma koşulları ve operasyon akışınız analiz edilir. Mimari önerisi (Edge, Cloud veya hibrit), modül seçimi ve kurulum takvimi netleştirilir. Pilot sonunda doğruluk raporu, false positive/negative analizi ve ROI projeksiyonu sunulur; memnun kalmazsanız taahhüt yoktur.',
          'Tek CTA odak noktamız iletişim ve demo: /iletisim formu, telefon (+90 541 862 9190) veya e-posta ile randevu alın. 2020\'den beri endüstriyel yapay zeka deneyimimizle mevcut kameralarınızı yapay zeka katmanına bağlayın; yeni kamera yatırımı olmadan İSG, kalite ve verimlilik metriklerinizi tek panelde toplayın.',
          'Hype Vision olarak GTÜ Teknopark Gebze merkezimizden Türkiye genelinde endüstriyel tesislere hizmet veriyoruz. Katalog PDF\'imizi indirerek modül detaylarını inceleyebilir; keşif toplantısında saha özelinde mimari önerisi alabilirsiniz. İletişim formu doldurarak demo talebinizi iletin — 24 saat içinde dönüş yapılır.',
        ],
      },
    ],
    useCases: [
      'Dikim hattı OEE ve cycle time takibi',
      'Operatör boşta kalma ve istasyon analizi',
      'Dikiş hattı kalite kontrol OK/RED',
      'Kesim bölgesi KKD (baret, yelek) denetimi',
      'Paketleme hattı ambalaj kusuru tespiti',
      'Çok vardiyalı fabrika merkezi panel',
    ],
    benefits: [
      'Tekstil sektörüne özel modül paketi',
      'Mevcut IP kameralar; marka bağımsız',
      'OEE + kalite + İSG tek platformda',
      'KVKK uyumlu Edge mimari',
      'ERP/MES entegrasyonu',
      '30 günlük pilot paket',
    ],
    relatedSlugs: [
      'oee-takip-sistemi',
      'kalite-kontrol-goruntu-isleme',
      'kkd-kontrol-kamera-sistemi',
    ],
  },
  {
    slug: 'gida-fabrikasi-kalite-kontrol',
    type: 'sector',
    title: 'Gıda Fabrikası Kalite Kontrol | Hijyen, Ambalaj — Hype Vision',
    metaDescription:
      'Gıda fabrikası kalite kontrol: hijyen bölgesi, ambalaj bütünlüğü, yabancı madde tespiti, KKD. Mevcut IP kameralar, KVKK uyumlu. Hype Vision GTÜ Teknopark.',
    eyebrow: 'Sektör · Gıda',
    h1: 'Gıda fabrikası kalite kontrol —',
    h1Highlight: 'hijyen, ambalaj, yabancı madde',
    intro:
      'Gıda üretim tesislerinde hijyen standartları, ambalaj bütünlüğü ve yabancı madde tespiti kalite güvencesinin temelidir. Hype Vision, mevcut IP kameralarınızdan gelen görüntüyü analiz ederek dolum hattı kusuru, ambalaj hatası, hijyen bölgesi KKD ihlali ve üretim hattı OEE\'sini tek panelde birleştirir. Gıda güvenliği regülasyonlarına (HACCP, ISO 22000) uyumlu veri arşivi sunar. HACCP ve ISO 22000 denetimlerinde kanıtlanabilir kalite olay arşivi; hijyen bölgesi KKD ve ambalaj bütünlüğü aynı panelde.',
    specs: [
      { label: 'Modüller', value: 'Kalite, KKD, OEE, yasaklı alan, personel' },
      { label: 'Kusur türleri', value: 'Ambalaj, mühür, etiket, yabancı madde, leke' },
      { label: 'Hijyen', value: 'Maske, eldiven, bone KKD denetimi' },
      { label: 'Doğruluk', value: 'OK/RED %94,2; KKD %96+' },
      { label: 'Entegrasyon', value: 'ERP, MES, REST API' },
      { label: 'Mimari', value: 'Edge · KVKK uyumlu · HACCP uyumlu kayıt' },
    ],
    sections: [
      {
        heading: 'Gıda sektöründe görüntü tabanlı kalite',
        paragraphs: [
          'Gıda fabrikalarında manuel kalite kontrol her ürünü kapsayamaz; hatalı ambalaj, eksik mühür veya yabancı madde müşteriye ulaşana kadar fark edilmeyebilir. Yapay zeka destekli görüntü işleme konveyör hattındaki her ürünü saniyede analiz eder; kusur anında tespit edilir ve red mekanizması tetiklenir.',
          'Hype Vision gıda kalite modülü: ambalaj bütünlüğü, etiket doğruluğu, mühür kontrolü, renk sapması ve yabancı madde tespiti. OK/RED sınıflandırması %94,2 doğruluk bandında.',
          'Dolum, paketleme ve paletleme hatlarında farklı kamera konfigürasyonları uygulanmıştır. GTÜ Teknopark Gebze\'deki ekibimiz gıda sektörü demo senaryoları sunar.',
          'Dolum hattı mühür, etiket ve ambalaj bütünlüğü %94,2 OK/RED doğruluk.',
          'Gıda güvenliği skandalları marka değerini geri dönülmez biçimde zedeler; hat üzerinde %100 kontrol riski minimize eder.',
        ],
      },
      {
        heading: 'Hijyen bölgesi ve KKD denetimi',
        paragraphs: [
          'Gıda üretiminde hijyen bölgesi (clean room, dolum alanı) maske, eldiven ve bone kullanımı zorunludur. KKD modülü bu ekipman eksikliklerini %96+ doğruluk ile tespit eder. İhlal anında alarm ve isteğe bağlı bölge kilitleme tetiklenir.',
          'Yasaklı alan modülü ile hijyen bölgesi dışından yetkisiz giriş algılanır. Personel akış rotaları ROI ile tanımlanır.',
          'KVKK uyumlu mimari ile hijyen denetimi kişisel veri riski olmadan sürdürülür. Kanıt karesi sınırlı süre saklanır.',
          'Hijyen bölgesi maske, eldiven ve bone KKD denetimi %96+ doğruluk.',
          'Gıda güvenliği skandalları marka değerini geri dönülmez biçimde zedeler; hat üzerinde %100 kontrol riski minimize eder.',
        ],
      },
      {
        heading: 'OEE ve üretim verimliliği',
        paragraphs: [
          'Dolum ve paketleme hattında OEE modülü availability, performance ve quality bileşenlerini ölçer. Duruş süresi, cycle time ve red oranı gerçek zamanlı raporlanır.',
          'Personel verimliliği modülü ile operatör aktivitesi ve boşta kalma analizi yapılır. Vardiya bazlı verimlilik karşılaştırması operasyon ekibine veri sağlar.',
          'REST API ile ERP, SAP ve MES sistemlerine entegrasyon; çift veri girişi ortadan kalkar.',
          'Yabancı madde tespiti konveyör hattında custom model ile.',
          'Gıda güvenliği skandalları marka değerini geri dönülmez biçimde zedeler; hat üzerinde %100 kontrol riski minimize eder.',
        ],
      },
      {
        heading: 'Regülasyon uyumu ve veri arşivi',
        paragraphs: [
          'HACCP ve ISO 22000 denetimlerinde kalite olaylarının kanıtlanabilir kaydı gereklidir. Hype Vision olay, zaman damgası ve kanıt karesi ile denetlenebilir arşiv oluşturur. Saklama süresi regülasyon ve sözleşme gereksinimlerine göre yapılandırılır.',
          'Edge mimaride ham video depolanmaz; yalnızca anlamlandırılmış kalite olayları kaydedilir. Veri bütünlüğü ve erişim logları audit trail sağlar.',
          'Gıda güvenliği mühendisleri panelden red trendi, kusur dağılımı ve vardiya analizi yapabilir.',
          'Soğuk zincir depo alan güvenliği yasaklı alan modülü ile.',
          'Gıda güvenliği skandalları marka değerini geri dönülmez biçimde zedeler; hat üzerinde %100 kontrol riski minimize eder.',
        ],
      },
      {
        heading: 'Kurulum ve pilot paket — demo ve iletişim',
        paragraphs: [
          'Keşif sonrası hat hızı, ürün tipi, aydınlatma ve kamera açıları optimize edilir. 30 günlük pilot paket ile tek dolum veya paketleme hattında kalite modülü test edilir.',
          'Custom model eğitimi ile tesisinize özel ambalaj tipi ve kusur profili tanımlanır. Pilot sonunda doğruluk ve ROI raporu sunulur.',
          'Demo ve keşif için GTÜ Teknopark Gebze ofisimizden veya uzaktan toplantı ile başlayın.',
          'Denetlenebilir olay arşivi regülasyon uyumu sağlar.',
          'Gıda güvenliği skandalları marka değerini geri dönülmez biçimde zedeler; hat üzerinde %100 kontrol riski minimize eder.',
          '2020 yılından bu yana GTÜ Teknopark Gebze merkezli Hype Vision, endüstriyel yapay zeka ve görüntü işleme alanında onlarca saha projesi tamamlamıştır. gıda fabrikası kalite kontrol modülü tek başına bir ürün değil; İSG, kalite, verimlilik ve güvenlik modüllerinin tamamı aynı RTSP/ONVIF kamera altyapısı üzerinde modüler lisans ile çalışır. Yeni kamera almadan mevcut Hikvision, Dahua, Axis veya diğer IP kameralarınızı yapay zeka katmanına bağlarsınız.',
          'Edge-first mimari KVKK uyumunu teknik düzeyde sağlar: ham video varsayılan depolanmaz, yüz tanıma kapalıdır, yalnızca olay ve metrik kaydedilir. Alarm gecikmesi 100–300 ms bandındadır; offline çalışma desteği ile internet kesilse bile analiz devam eder. REST API ile ERP, SAP, MES, WMS ve BI araçlarına entegrasyon mümkündür.',
          'Modüler lisans modeli ile yalnızca kullandığınız fonksiyonlar için ödeme yaparsınız. 30 günlük pilot paket, keşif toplantısı ve kurulum sonrası eğitim standart hizmet kapsamındadır. İletişim formu veya telefon ile demo talep edin; 24 saat içinde GTÜ Teknopark Gebze ekibimizden dönüş alın.',
          'Hype Vision gıda fabrikası kalite kontrol çözümünü risk almadan değerlendirmek için 30 günlük pilot paket veya ücretsiz keşif toplantısı talep edebilirsiniz. GTÜ Teknopark Gebze, Hightech Binası\'ndaki ofisimizde canlı demo yapılabilir; uzaktan görüntülü toplantı ile RTSP/ONVIF uyumluluk değerlendirmesi de mümkündür. Mevcut IP kamera marka/model listenizi info@hypevisionlab.com adresine iletmeniz yeterlidir.',
          'Keşif sürecinde saha layout, kamera açıları, aydınlatma koşulları ve operasyon akışınız analiz edilir. Mimari önerisi (Edge, Cloud veya hibrit), modül seçimi ve kurulum takvimi netleştirilir. Pilot sonunda doğruluk raporu, false positive/negative analizi ve ROI projeksiyonu sunulur; memnun kalmazsanız taahhüt yoktur.',
          'Tek CTA odak noktamız iletişim ve demo: /iletisim formu, telefon (+90 541 862 9190) veya e-posta ile randevu alın. 2020\'den beri endüstriyel yapay zeka deneyimimizle mevcut kameralarınızı yapay zeka katmanına bağlayın; yeni kamera yatırımı olmadan İSG, kalite ve verimlilik metriklerinizi tek panelde toplayın.',
          'Hype Vision olarak GTÜ Teknopark Gebze merkezimizden Türkiye genelinde endüstriyel tesislere hizmet veriyoruz. Katalog PDF\'imizi indirerek modül detaylarını inceleyebilir; keşif toplantısında saha özelinde mimari önerisi alabilirsiniz. İletişim formu doldurarak demo talebinizi iletin — 24 saat içinde dönüş yapılır.',
        ],
      },
    ],
    useCases: [
      'Dolum hattı ambalaj ve mühür kontrolü',
      'Paketleme hattı etiket ve barkod doğrulama',
      'Hijyen bölgesi maske ve eldiven denetimi',
      'Konveyör hattı yabancı madde tespiti',
      'Soğuk zincir depo alan güvenliği',
      'HACCP denetim kanıt arşivi',
    ],
    benefits: [
      'Gıda sektörüne özel kalite modülü',
      'HACCP/ISO 22000 uyumlu olay arşivi',
      'Hijyen KKD denetimi %96+ doğruluk',
      'OK/RED %94,2 ambalaj kontrolü',
      'ERP/MES entegrasyonu',
      'KVKK uyumlu Edge mimari',
    ],
    relatedSlugs: [
      'kalite-kontrol-goruntu-isleme',
      'kkd-kontrol-kamera-sistemi',
      'oee-takip-sistemi',
    ],
  },
  {
    slug: 'depo-lojistik-guvenlik',
    type: 'sector',
    title: 'Depo Lojistik Güvenlik | Forklift, Palet, Alan — Hype Vision',
    metaDescription:
      'Depo ve lojistik güvenlik: forklift-yaya %97,3, palet sayımı, alan ihlali, KKD. Mevcut IP kameralar. Hype Vision GTÜ Teknopark Gebze.',
    eyebrow: 'Sektör · Depo & Lojistik',
    h1: 'Depo lojistik güvenlik —',
    h1Highlight: 'forklift, palet, alan güvenliği',
    intro:
      'Depo ve lojistik merkezlerinde forklift-yaya çarpışma riski, yetkisiz alan girişi, palet/envanter takibi ve KKD uyumu aynı anda yönetilmelidir. Hype Vision, mevcut IP kameralarınızdan (RTSP/ONVIF) gelen görüntüyü analiz ederek forklift-yaya mesafe denetimi (%97,3 doğruluk), yasaklı alan ihlali, baret/yelek denetimi ve operasyonel sayaçları tek panelde birleştirir. E-ticaret fulfillment, liman depo ve soğuk hava deposu senaryolarında forklift-yaya, alan güvenliği ve envanter sayaç tek çatı altında.',
    specs: [
      { label: 'Modüller', value: 'Forklift-yaya, yasaklı alan, KKD, sayaç, OEE' },
      { label: 'Forklift doğruluk', value: '%97,3 mesafe analizi' },
      { label: 'Alan ihlali', value: '%97,8 yasaklı bölge' },
      { label: 'Sayaç', value: 'Palet, koli, araç giriş-çıkış' },
      { label: 'Entegrasyon', value: 'WMS, ERP, REST API, siren/flaşör' },
      { label: 'Mimari', value: 'Edge · 7/24 · KVKK uyumlu' },
    ],
    sections: [
      {
        heading: 'Depo güvenliğinde yapay zeka',
        paragraphs: [
          'Depo ve lojistik sahaları yüksek forklift trafiği, dar koridorlar ve yoğun yaya hareketi ile karakterizedir. Forklift-yaya kazaları en sık iş kazası türlerinden biridir. Manuel gözetim tüm kavşak noktalarını eşzamanlı izleyemez; yapay zeka destekli kamera analitiği 7/24 otomatik denetim sağlar.',
          'Hype Vision depo paketi: forklift-yaya mesafe analizi (%97,3), yasaklı alan ihlali (%97,8), KKD denetimi (baret, yelek) ve operasyonel sayaç (palet, koli, araç). Tüm modüller mevcut IP kameralarınıza bağlanır.',
          'Liman, e-ticaret fulfillment merkezi, soğuk hava deposu ve üretim depolarında uygulanmıştır. GTÜ Teknopark Gebze\'deki ekibimiz depo güvenliği demo senaryoları sunar.',
          'Koridor kavşakları mesafe kalibrasyonu keşif sonrası optimize edilir.',
          'E-ticaret büyümesi depo trafiğini artırır; forklift-yaya güvenliği operasyonel sürdürülebilirlik için şarttır.',
        ],
      },
      {
        heading: 'Forklift-yaya güvenlik sistemi',
        paragraphs: [
          'Koridor kavşakları, yükleme rampası ve sevkiyat alanında forklift ile yaya arası mesafe gerçek zamanlı ölçülür. Tehlikeli mesafe ihlalinde alarm, siren veya flaşör tetiklenir. Yaya yürüyüş yolundan sapma ve forklift yasak bölgeye giriş ayrı kategorilerde raporlanır.',
          'Modbus veya dijital I/O ile endüstriyel protokoller üzerinden siren, flaşör veya kabin içi uyarı entegrasyonu yapılır. VMS popup ile Milestone, Dahua veya Hikvision ekranında olay anında görüntülenir.',
          'Isı haritası hangi koridorun en riskli olduğunu gösterir; trafik akışı yeniden düzenlenebilir.',
          'Palet giriş-çıkış sayacı WMS entegrasyonu ile envanter hareketi kanıtlanır.',
          'E-ticaret büyümesi depo trafiğini artırır; forklift-yaya güvenliği operasyonel sürdürülebilirlik için şarttır.',
        ],
      },
      {
        heading: 'Alan güvenliği ve envanter sayaç',
        paragraphs: [
          'Yüksek değerli stok alanı, soğuk oda ve sevkiyat bölgesi yasaklı alan modülü ile izlenir. Yetkisiz giriş anında alarm üretilir; kanıt karesi panelde arşivlenir.',
          'Palet, koli ve araç giriş-çıkış sayacı operasyonel metrikler sağlar. WMS ve ERP sistemlerine REST API ile veri aktarımı mümkündür. Envanter hareketi görsel kanıta dayanır.',
          'KKD modülü ile depo personeli baret ve yelek denetimi yapılır. Giriş turnikesinde turnike kilitleme entegrasyonu uygulanabilir.',
          'Sevkiyat alanı KKD denetimi baret+yelek zorunluluğu ile.',
          'E-ticaret büyümesi depo trafiğini artırır; forklift-yaya güvenliği operasyonel sürdürülebilirlik için şarttır.',
        ],
      },
      {
        heading: '7/24 izleme ve multi-site',
        paragraphs: [
          'Depo operasyonları 7/24 sürdürülür; kamera analitiği de kesintisiz çalışır. Edge mimaride offline çalışma desteği ile internet kesilse bile analiz devam eder.',
          'Multi-site desteği ile farklı depo ve lojistik merkezleri merkezi panelden izlenir. Lokasyon bazlı rol yetkisi uygulanır.',
          'KVKK uyumlu mimari ile ham video depolanmaz; yalnızca olay ve metrik kaydedilir.',
          'Multi-site merkezi panel ile çok depo yönetimi.',
          'E-ticaret büyümesi depo trafiğini artırır; forklift-yaya güvenliği operasyonel sürdürülebilirlik için şarttır.',
        ],
      },
      {
        heading: 'Kurulum, pilot ve demo — demo ve iletişim',
        paragraphs: [
          'Keşif sonrası koridor layout, kamera konumları, mesafe kalibrasyonu ve bölge sınırları belirlenir. 30 günlük pilot paket ile tek depo bölgesinde forklift-yaya modülü test edilir.',
          'WMS/ERP entegrasyonu keşif sonrası planlanır. REST API dokümantasyonu kurulum sonrası sunulur.',
          'Demo ve keşif için GTÜ Teknopark Gebze ofisimizden veya uzaktan toplantı ile başlayın. Depo güvenliğinizi yapay zeka ile güçlendirin.',
          '7/24 offline Edge çalışma ile kesintisiz güvenlik denetimi.',
          'E-ticaret büyümesi depo trafiğini artırır; forklift-yaya güvenliği operasyonel sürdürülebilirlik için şarttır.',
          '2020 yılından bu yana GTÜ Teknopark Gebze merkezli Hype Vision, endüstriyel yapay zeka ve görüntü işleme alanında onlarca saha projesi tamamlamıştır. depo lojistik güvenlik modülü tek başına bir ürün değil; İSG, kalite, verimlilik ve güvenlik modüllerinin tamamı aynı RTSP/ONVIF kamera altyapısı üzerinde modüler lisans ile çalışır. Yeni kamera almadan mevcut Hikvision, Dahua, Axis veya diğer IP kameralarınızı yapay zeka katmanına bağlarsınız.',
          'Edge-first mimari KVKK uyumunu teknik düzeyde sağlar: ham video varsayılan depolanmaz, yüz tanıma kapalıdır, yalnızca olay ve metrik kaydedilir. Alarm gecikmesi 100–300 ms bandındadır; offline çalışma desteği ile internet kesilse bile analiz devam eder. REST API ile ERP, SAP, MES, WMS ve BI araçlarına entegrasyon mümkündür.',
          'Modüler lisans modeli ile yalnızca kullandığınız fonksiyonlar için ödeme yaparsınız. 30 günlük pilot paket, keşif toplantısı ve kurulum sonrası eğitim standart hizmet kapsamındadır. İletişim formu veya telefon ile demo talep edin; 24 saat içinde GTÜ Teknopark Gebze ekibimizden dönüş alın.',
          'Hype Vision depo lojistik güvenlik çözümünü risk almadan değerlendirmek için 30 günlük pilot paket veya ücretsiz keşif toplantısı talep edebilirsiniz. GTÜ Teknopark Gebze, Hightech Binası\'ndaki ofisimizde canlı demo yapılabilir; uzaktan görüntülü toplantı ile RTSP/ONVIF uyumluluk değerlendirmesi de mümkündür. Mevcut IP kamera marka/model listenizi info@hypevisionlab.com adresine iletmeniz yeterlidir.',
          'Keşif sürecinde saha layout, kamera açıları, aydınlatma koşulları ve operasyon akışınız analiz edilir. Mimari önerisi (Edge, Cloud veya hibrit), modül seçimi ve kurulum takvimi netleştirilir. Pilot sonunda doğruluk raporu, false positive/negative analizi ve ROI projeksiyonu sunulur; memnun kalmazsanız taahhüt yoktur.',
          'Tek CTA odak noktamız iletişim ve demo: /iletisim formu, telefon (+90 541 862 9190) veya e-posta ile randevu alın. 2020\'den beri endüstriyel yapay zeka deneyimimizle mevcut kameralarınızı yapay zeka katmanına bağlayın; yeni kamera yatırımı olmadan İSG, kalite ve verimlilik metriklerinizi tek panelde toplayın.',
          'Hype Vision olarak GTÜ Teknopark Gebze merkezimizden Türkiye genelinde endüstriyel tesislere hizmet veriyoruz. Katalog PDF\'imizi indirerek modül detaylarını inceleyebilir; keşif toplantısında saha özelinde mimari önerisi alabilirsiniz. İletişim formu doldurarak demo talebinizi iletin — 24 saat içinde dönüş yapılır.',
        ],
      },
    ],
    useCases: [
      'Forklift koridoru mesafe denetimi',
      'Yükleme rampası araç-yaya güvenliği',
      'Soğuk hava deposu alan ihlali',
      'Sevkiyat alanı KKD denetimi',
      'Palet giriş-çıkış sayaç ve WMS entegrasyonu',
      'Çok lokasyonlu lojistik merkezi paneli',
    ],
    benefits: [
      'Forklift-yaya %97,3 doğruluk',
      'Yasaklı alan %97,8 ihlal tespiti',
      'Siren, flaşör ve VMS entegrasyonu',
      'WMS/ERP REST API entegrasyonu',
      'Mevcut IP kameralar; 7/24 otomatik',
      'Multi-site merkezi yönetim',
    ],
    relatedSlugs: [
      'forklift-yaya-guvenlik-sistemi',
      'yasakli-alan-ihlal-tespiti',
      'onvif-rtsp-yapay-zeka-entegrasyonu',
    ],
  },];

const landingBySlug = new Map<string, LandingPage>(
  LANDING_PAGES.map((page) => [page.slug, page]),
);

export function getLandingPage(slug: string): LandingPage | undefined {
  return landingBySlug.get(slug);
}

export function getAllLandingSlugs(): string[] {
  return LANDING_PAGES.map((page) => page.slug);
}
