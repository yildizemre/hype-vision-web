import type { Guide } from './types';

export const GUIDES_PART1: Guide[] = [
  {
    slug: 'goruntu-isleme-nedir',
    title: 'Görüntü İşleme Nedir? Nasıl Çalışır, Endüstride Nerelerde Kullanılır?',
    metaTitle: 'Görüntü İşleme Nedir? Nasıl Çalışır ve Kullanım Alanları (2026)',
    metaDescription:
      'Görüntü işleme nedir, nasıl çalışır? Klasik algoritmalardan yapay zekaya görüntü işleme adımları, endüstriyel kullanım alanları, donanım ihtiyacı ve örnek projeler.',
    excerpt:
      'Görüntü işlemenin temellerini, yapay zeka ile ilişkisini ve fabrikada kalite kontrolden iş güvenliğine kadar gerçek kullanım alanlarını tek yazıda anlattık.',
    category: 'Rehber',
    isoDate: '2026-09-08',
    updated: '2026-10-02',
    readMinutes: 9,
    keywords: ['görüntü işleme', 'görüntü işleme nedir', 'yapay zeka görüntü işleme', 'bilgisayarlı görü'],
    blocks: [
      {
        type: 'p',
        text: '**Görüntü işleme**, kamera veya sensörden gelen dijital görüntülerin bilgisayar tarafından analiz edilip anlamlı bilgiye dönüştürülmesidir. Bir fotoğraftaki gürültüyü temizlemek de, üretim bandındaki çizik bir parçayı saniyeler içinde ayıklamak da görüntü işlemedir. Bugün “görüntü işleme” denildiğinde çoğunlukla yapay zeka destekli **bilgisayarlı görü** (computer vision) kastedilir: makinenin görüntüdeki nesneleri tanıması, sayması, ölçmesi ve karar vermesi.',
      },
      {
        type: 'p',
        text: 'Bu rehberde görüntü işlemenin nasıl çalıştığını, klasik yöntemlerle derin öğrenme arasındaki farkı ve fabrikalarda hangi problemleri çözdüğünü sade bir dille anlatıyoruz. Doğrudan endüstriyel çözümlere bakmak isterseniz [endüstriyel görüntü işleme sistemleri](/goruntu-isleme) sayfamıza geçebilirsiniz.',
      },
      { type: 'h2', id: 'nasil-calisir', text: 'Görüntü işleme nasıl çalışır?' },
      {
        type: 'p',
        text: 'Dijital bir görüntü, her biri renk ve parlaklık değeri taşıyan piksellerden oluşan bir matristir. Görüntü işleme sistemi bu matris üzerinde adım adım çalışır:',
      },
      {
        type: 'ol',
        items: [
          '**Görüntü alma:** IP kamera, endüstriyel kamera veya akıllı telefon görüntüyü yakalar. Fabrikalarda genellikle RTSP/ONVIF destekli IP kameralar kullanılır.',
          '**Ön işleme:** Gürültü azaltma, kontrast iyileştirme, perspektif düzeltme ve yeniden boyutlandırma yapılır.',
          '**Özellik çıkarımı:** Kenarlar, renk bölgeleri, dokular veya derin öğrenmede ağın kendisinin öğrendiği temsiller çıkarılır.',
          '**Analiz ve karar:** Nesne tespiti (baret var mı?), sınıflandırma (parça hatalı mı?), segmentasyon (lekenin alanı ne kadar?) veya takip (forklift nereye gidiyor?) yapılır.',
          '**Aksiyon:** Sonuç alarm, rapor, PLC sinyali, turnike kilidi veya ERP kaydı olarak sahaya geri döner.',
        ],
      },
      { type: 'h2', id: 'klasik-ve-yapay-zeka', text: 'Klasik görüntü işleme ile yapay zeka arasındaki fark' },
      {
        type: 'p',
        text: 'Klasik görüntü işleme, mühendisin elle yazdığı kurallara dayanır: “şu renk aralığındaki piksel sayısı eşiği geçerse hata say”. Sabit ışık, sabit açı ve tek tip ürün olan hatlarda hâlâ çok etkilidir. Ancak ortam değiştikçe kurallar kırılır.',
      },
      {
        type: 'p',
        text: '**Derin öğrenme tabanlı görüntü işleme** ise binlerce örnek görüntüden kendi kurallarını öğrenir. Işık, açı, kıyafet rengi ya da ürün varyasyonu değişse de genelleme yapabilir. Bu yüzden iş güvenliği, insan davranışı ve değişken yüzey kusurları gibi “kuralı yazılamayan” problemlerde standart hâline gelmiştir. Detaylı karşılaştırma için [makine görmesi ve derin öğrenme](/blog/makine-gorme-ve-derin-ogrenme) yazımıza bakabilirsiniz.',
      },
      {
        type: 'table',
        head: ['Kriter', 'Klasik görüntü işleme', 'Yapay zeka (derin öğrenme)'],
        rows: [
          ['Kurulum mantığı', 'Elle yazılan kurallar ve eşikler', 'Etiketli örneklerden öğrenme'],
          ['Değişken ortam', 'Hassas, sık ayar ister', 'Dayanıklı, genelleme yapar'],
          ['Uygun işler', 'Ölçüm, barkod, sabit konum kontrolü', 'Kusur tespiti, insan/KKD, davranış, sayım'],
          ['Donanım', 'Endüstriyel kamera + kontrollü ışık', 'Mevcut IP kameralar + edge GPU/NPU'],
        ],
      },
      { type: 'h2', id: 'kullanim-alanlari', text: 'Endüstride görüntü işleme kullanım alanları' },
      {
        type: 'h3',
        text: '1. Kalite kontrol ve kusur tespiti',
      },
      {
        type: 'p',
        text: 'Çizik, leke, çatlak, eksik montaj, yanlış etiket veya renk sapması üretim hızında yakalanır. Hatalı ürün müşteriye gitmeden ayrılır, fire oranı ve iade maliyeti düşer. Bkz. [görüntü işleme ile kalite kontrol](/kalite-kontrol-goruntu-isleme) ve [yüzey kusuru tespiti](/yuzey-kusuru-tespiti).',
      },
      { type: 'h3', text: '2. İş sağlığı ve güvenliği (İSG)' },
      {
        type: 'p',
        text: 'Baret, yelek, gözlük ve eldiven gibi KKD eksiklikleri; yasaklı alana giriş, forklift-yaya yakınlaşması ve düşme olayları 7/24 izlenir. İnsan denetiminin örneklemeli kaldığı sahada her kare kontrol edilir. Bkz. [baret tespit sistemi](/baret-tespit-sistemi), [KKD kontrol](/kkd-kontrol-kamera-sistemi), [forklift-yaya güvenliği](/forklift-yaya-guvenlik-sistemi).',
      },
      { type: 'h3', text: '3. Verimlilik ve OEE' },
      {
        type: 'p',
        text: 'Hat duruşları, çevrim süreleri, istasyon doluluğu ve boşta kalma süreleri kameradan otomatik ölçülür; vardiya sonu Excel yerine anlık panel elde edilir. Bkz. [OEE takip sistemi](/oee-takip-sistemi) ve [personel verimlilik analizi](/personel-verimlilik-analizi-kamera).',
      },
      { type: 'h3', text: '4. Lojistik, sayım ve izlenebilirlik' },
      {
        type: 'p',
        text: 'Palet, koli ve araç sayımı; rampa doluluğu ve sevkiyat doğrulaması yapılır. Sayım verisi WMS/ERP sistemlerine API ile aktarılır. Bkz. [depo ve lojistik güvenliği](/sektor/depo-lojistik-guvenlik).',
      },
      { type: 'h2', id: 'donanim', text: 'Görüntü işleme için hangi donanım gerekir?' },
      {
        type: 'p',
        text: 'Birçok uygulama için yeni kamera almak gerekmez. Tesisteki mevcut IP kameralar (çoğunlukla 1080p, 15–25 FPS) İSG ve verimlilik analizi için yeterlidir. Mikron seviyesinde kusur arayan kalite kontrol istasyonlarında ise endüstriyel kamera ve kontrollü aydınlatma gerekebilir. Analiz, tesis içinde bir **edge** cihazda (görüntü dışarı çıkmadan) veya bulutta yapılabilir. Ayrıntılar: [mevcut IP kameralar yapay zeka için yeterli mi?](/blog/mevcut-ip-kamera-yapay-zeka)',
      },
      { type: 'h2', id: 'proje-adimlari', text: 'Bir görüntü işleme projesi nasıl ilerler?' },
      {
        type: 'ol',
        items: [
          '**Keşif:** Problem, hedef metrik ve kamera konumları birlikte belirlenir.',
          '**Veri ve model:** Sahadan örnek görüntüler toplanır; hazır model kalibre edilir ya da özel model eğitilir.',
          '**Pilot:** 1–2 hat veya alanda birkaç haftalık ölçümlü deneme yapılır.',
          '**Yaygınlaştırma:** Alarm kuralları, raporlar ve ERP/MES entegrasyonu ile tüm tesise genişletilir.',
        ],
      },
      { type: 'cta', text: 'Tesisinizde görüntü işlemenin hangi problemi çözebileceğini keşif görüşmesinde birlikte çıkaralım.' },
    ],
    faq: [
      {
        q: 'Görüntü işleme ile yapay zeka aynı şey mi?',
        a: 'Hayır. Görüntü işleme görüntülerden bilgi çıkarma alanının genel adıdır; yapay zeka (özellikle derin öğrenme) bu işi yapmanın en güçlü güncel yöntemidir. Klasik, kural tabanlı görüntü işleme de hâlâ kullanılır.',
      },
      {
        q: 'Görüntü işleme için hangi programlama dili kullanılır?',
        a: 'En yaygın dil Python’dur; OpenCV, PyTorch ve TensorFlow gibi kütüphanelerle çalışılır. Gerçek zamanlı endüstriyel sistemlerde performans için C++ ve optimize edilmiş çıkarım motorları da kullanılır.',
      },
      {
        q: 'Görüntü işleme sistemi kurmak için yeni kamera almak gerekir mi?',
        a: 'Çoğu İSG ve verimlilik uygulamasında gerekmez; RTSP/ONVIF destekleyen mevcut IP kameralar yeterlidir. Çok küçük kusurların arandığı kalite istasyonlarında endüstriyel kamera önerilebilir.',
      },
      {
        q: 'Endüstriyel görüntü işleme sistemlerinin doğruluğu ne kadardır?',
        a: 'Uygulamaya ve saha koşullarına bağlıdır. Hype Vision sahada kalibrasyon sonrası örneğin baret tespitinde %96–98,6 aralığında doğruluk raporlar; kesin değer pilot ölçümüyle belirlenir.',
      },
    ],
    related: ['/goruntu-isleme', '/blog/goruntu-isleme-firmasi-secimi', '/blog/goruntu-isleme-ile-kalite-kontrol'],
  },
  {
    slug: 'goruntu-isleme-firmasi-secimi',
    title: 'Görüntü İşleme Firmaları: Doğru Firmayı Seçmek İçin 10 Kriter',
    metaTitle: 'Görüntü İşleme Firmaları: Doğru Firma Nasıl Seçilir? (10 Kriter)',
    metaDescription:
      'Görüntü işleme firması seçerken nelere bakılmalı? Saha referansı, mevcut kamera uyumu, edge/cloud, KVKK, pilot süreci ve maliyet dahil 10 kriterlik kontrol listesi.',
    excerpt:
      'Endüstriyel görüntü işleme firması seçerken teklifleri karşılaştırmak için kullanabileceğiniz 10 maddelik pratik kontrol listesi.',
    category: 'Rehber',
    isoDate: '2026-09-15',
    readMinutes: 7,
    keywords: ['görüntü işleme firmaları', 'görüntü işleme şirketleri', 'endüstriyel görüntü işleme firması'],
    blocks: [
      {
        type: 'p',
        text: 'Türkiye’de “görüntü işleme firmaları” araması yapan bir üretim yöneticisi, makine görmesi entegratörlerinden yapay zeka girişimlerine kadar çok farklı oyuncuyla karşılaşır. Teklifler ilk bakışta benzer görünür ama kurulum süresi, gizli donanım maliyetleri ve sahadaki gerçek doğruluk çok farklı olabilir. Aşağıdaki 10 kriter, teklifleri aynı terazide tartmanıza yardım eder.',
      },
      { type: 'h2', id: 'kriterler', text: 'Görüntü işleme firması seçerken 10 kriter' },
      { type: 'h3', text: '1. Sahada kanıtlanmış doğruluk' },
      {
        type: 'p',
        text: 'Laboratuvar doğruluğu değil, sizin ışığınız ve kamera açınızdaki doğruluk önemlidir. Firmadan benzer bir sahadaki ölçülmüş sonuçları ve **pilot sonrası doğrulama** yöntemini isteyin.',
      },
      { type: 'h3', text: '2. Mevcut kameralarla çalışabilme' },
      {
        type: 'p',
        text: 'RTSP/ONVIF destekleyen, marka bağımsız bir çözüm yeni kamera yatırımını gereksiz kılabilir. “Bizim kameramızı almanız gerekir” diyen tekliflerde toplam maliyeti ayrıca hesaplayın. Bkz. [ONVIF/RTSP yapay zeka entegrasyonu](/onvif-rtsp-yapay-zeka-entegrasyonu).',
      },
      { type: 'h3', text: '3. Edge, cloud veya hibrit seçeneği' },
      {
        type: 'p',
        text: 'Görüntülerin tesis dışına çıkmaması gerekiyorsa analiz yerinde (edge) yapılabilmeli. Çok lokasyonlu yapılarda merkezi bulut paneli avantaj sağlar. İyi bir firma ikisini de sunar.',
      },
      { type: 'h3', text: '4. KVKK ve veri güvenliği' },
      {
        type: 'p',
        text: 'Kişisel veri işleme envanteri, saklama süresi, maskeleme/anonimleştirme ve erişim yetkileri net olmalı. Bkz. [KVKK uyumlu kamera analitiği](/kvkk-uyumlu-kamera-analitigi).',
      },
      { type: 'h3', text: '5. Kısa ve ölçülebilir pilot' },
      {
        type: 'p',
        text: 'Aylar süren “proje” yerine 1–2 hatta birkaç haftalık, başarı kriterleri baştan yazılmış bir pilot isteyin. Başarı metrikleri: doğruluk, yanlış alarm oranı, alarm gecikmesi ve operasyonel etki.',
      },
      { type: 'h3', text: '6. Hazır modül + özel model esnekliği' },
      {
        type: 'p',
        text: 'Baret, KKD, yasaklı alan gibi hazır modüller hızlı başlangıç sağlar; ürününüze özgü kusurlar için özel model eğitimi yapılabilmelidir.',
      },
      { type: 'h3', text: '7. Entegrasyon (ERP, MES, PLC, turnike)' },
      {
        type: 'p',
        text: 'Tespit sonucu sadece ekranda kalmamalı; REST API, Modbus/Ethernet-IP, turnike veya siren gibi sahadaki sistemleri tetikleyebilmeli.',
      },
      { type: 'h3', text: '8. Yanlış alarm yönetimi' },
      {
        type: 'p',
        text: 'Çok alarm üreten sistem kısa sürede görmezden gelinir. Bölge, süre eşiği ve vardiya bazlı kural tanımlanabildiğini kontrol edin.',
      },
      { type: 'h3', text: '9. Yerel destek ve Türkçe panel' },
      {
        type: 'p',
        text: 'Sahaya gelebilen, Türkçe raporlama ve eğitim verebilen bir ekip; ilk aylarda kalibrasyonun hızlı yapılması için kritiktir.',
      },
      { type: 'h3', text: '10. Şeffaf toplam sahip olma maliyeti' },
      {
        type: 'p',
        text: 'Lisans, donanım, kurulum, bakım ve model güncellemesi kalemleri ayrı ayrı yazılmalı. Geri dönüş süresini fire, duruş ve iş kazası maliyetleriyle birlikte hesaplayın.',
      },
      { type: 'h2', id: 'kontrol-listesi', text: 'Teklif karşılaştırma tablosu' },
      {
        type: 'table',
        head: ['Soru', 'Neden önemli?'],
        rows: [
          ['Mevcut kameralarımla çalışır mı?', 'Donanım maliyetini belirler'],
          ['Pilot süresi ve başarı kriteri ne?', 'Riski sınırlar'],
          ['Görüntü tesis dışına çıkıyor mu?', 'KVKK ve bilgi güvenliği'],
          ['Yanlış alarm oranı nasıl ölçülüyor?', 'Sistemin sahada kullanılmasını belirler'],
          ['Hangi sistemlere entegre olur?', 'Tespitin aksiyona dönüşmesi'],
        ],
      },
      { type: 'h2', id: 'hype-vision', text: 'Hype Vision bu kriterlerin neresinde?' },
      {
        type: 'p',
        text: 'Hype Vision, 2020’den beri GTÜ Teknopark Gebze’de endüstriyel görüntü işleme geliştiren bir ekiptir. Mevcut IP kameralarla (marka bağımsız) çalışır; edge, cloud ve hibrit mimari sunar; İSG, kalite ve verimlilik modüllerini tek panelde toplar. Tüm modüller için [görüntü işleme çözümleri](/goruntu-isleme) sayfasına göz atabilirsiniz.',
      },
      { type: 'cta' },
    ],
    faq: [
      {
        q: 'Görüntü işleme projesi ne kadar sürede devreye alınır?',
        a: 'Hazır modüllerle (KKD, baret, yasaklı alan) pilot genellikle günler içinde kurulur. Özel kusur tespiti gibi model eğitimi gerektiren işlerde veri toplama dahil birkaç hafta sürebilir.',
      },
      {
        q: 'Görüntü işleme sistemi fiyatları neye göre değişir?',
        a: 'Kamera sayısı, modül sayısı, edge donanım ihtiyacı, özel model eğitimi ve entegrasyon kapsamı fiyatı belirler. Mevcut kameraların kullanılabilmesi maliyeti önemli ölçüde düşürür.',
      },
      {
        q: 'Pilot başarısız olursa ne olur?',
        a: 'İyi kurgulanmış bir pilotta başarı kriterleri baştan yazılır; kriter sağlanmazsa yaygınlaştırma kararı verilmez. Bu yüzden ölçülebilir hedefler pilot öncesi netleştirilmelidir.',
      },
    ],
    related: ['/goruntu-isleme', '/blog/goruntu-isleme-nedir', '/blog/mevcut-ip-kamera-yapay-zeka'],
  },
  {
    slug: 'goruntu-isleme-ile-kalite-kontrol',
    title: 'Görüntü İşleme ile Kalite Kontrol: Hata Tespiti, Kurulum ve Geri Dönüş',
    metaTitle: 'Görüntü İşleme ile Kalite Kontrol Rehberi | Otomatik Hata Tespiti',
    metaDescription:
      'Görüntü işleme ile kalite kontrol nasıl yapılır? Yüzey kusuru, eksik montaj ve etiket kontrolü; kamera, ışık, model eğitimi, pilot ve fire azaltma hesabı.',
    excerpt:
      'Üretim hattında görsel kalite kontrolü otomatikleştirmek için kamera seçiminden model eğitimine, pilot kurgusundan geri dönüş hesabına adım adım rehber.',
    category: 'Rehber',
    isoDate: '2026-09-22',
    readMinutes: 8,
    keywords: ['görüntü işleme ile kalite kontrol', 'otomatik kalite kontrol', 'yapay zeka kalite kontrol', 'hata tespiti'],
    blocks: [
      {
        type: 'p',
        text: 'Görsel kalite kontrol, çoğu fabrikada hâlâ insan gözüyle ve örneklemeyle yapılır. Yorgunluk, vardiya değişimi ve hat hızı arttıkça kaçan hata oranı yükselir. **Görüntü işleme ile kalite kontrol**, her ürünü aynı dikkatle, hat hızında ve kayıt altında denetler.',
      },
      { type: 'h2', id: 'neler-tespit-edilir', text: 'Görüntü işleme ile hangi hatalar tespit edilir?' },
      {
        type: 'ul',
        items: [
          'Yüzey kusurları: çizik, ezik, leke, çatlak, boya akması, kabarcık',
          'Montaj hataları: eksik vida, ters takılmış parça, eksik bileşen',
          'Etiket ve baskı: yanlış/eksik etiket, okunmayan tarih kodu, hizasız baskı',
          'Boyut ve konum: tolerans dışı ölçü, yanlış konumlanmış parça',
          'Tekstil ve gıda: kumaş hatası, renk sapması, yabancı madde, dolum seviyesi',
        ],
      },
      {
        type: 'p',
        text: 'Detaylı modül bilgisi için [kalite kontrol görüntü işleme](/kalite-kontrol-goruntu-isleme) ve [yüzey kusuru tespiti](/yuzey-kusuru-tespiti) sayfalarına bakabilirsiniz.',
      },
      { type: 'h2', id: 'kurulum', text: 'Kurulum adımları' },
      {
        type: 'ol',
        items: [
          '**Hata kataloğu:** Hangi kusurlar kritik, hangileri kozmetik? Her biri için örnek fotoğraf toplanır.',
          '**Kamera ve ışık:** Kusurun en küçük boyutu kamera çözünürlüğünü belirler. Parlak yüzeylerde difüz ışık, çizik için açılı ışık tercih edilir.',
          '**Veri ve etiketleme:** Sağlam ve hatalı ürünlerden örnekler etiketlenir. Nadir kusurlarda anomali tespiti yaklaşımı kullanılabilir.',
          '**Model eğitimi ve doğrulama:** Model, hiç görmediği bir test setinde ölçülür; kaçan hata ve yanlış red oranları ayrı raporlanır.',
          '**Hat entegrasyonu:** Hatalı ürün için PLC sinyali, ayırma mekanizması veya operatör uyarısı bağlanır; sonuçlar MES/ERP’ye yazılır.',
        ],
      },
      { type: 'h2', id: 'metrikler', text: 'Doğru metriklerle ölçmek' },
      {
        type: 'table',
        head: ['Metrik', 'Anlamı', 'Neden önemli?'],
        rows: [
          ['Kaçan hata (false negative)', 'Hatalı ürünün “sağlam” geçmesi', 'Müşteri şikâyeti ve iade'],
          ['Yanlış red (false positive)', 'Sağlam ürünün ayrılması', 'Gereksiz fire ve tekrar kontrol'],
          ['Çevrim süresi', 'Ürün başına analiz süresi', 'Hat hızına yetişme'],
          ['Fire oranı', 'Toplam hatalı üretim', 'Asıl iş sonucu'],
        ],
      },
      { type: 'h2', id: 'geri-donus', text: 'Geri dönüş (ROI) nasıl hesaplanır?' },
      {
        type: 'p',
        text: 'Basit bir hesap: (önlenen fire adedi × birim maliyet) + (önlenen iade/şikâyet maliyeti) + (kontrole ayrılan iş gücünün başka işe kaydırılması). Bu toplamı yıllık sistem maliyetiyle kıyaslayın. Sahadan bir örnek için [konveyör hattında fire azaltma vaka notu](/blog/kalite-kontrol-fire-azaltma) yazımızı okuyabilirsiniz.',
      },
      {
        type: 'note',
        text: 'İpucu: Pilotu en çok fire veren tek ürün ailesiyle başlatın. Sonuç net ölçülür, yaygınlaştırma kararı kolaylaşır.',
      },
      { type: 'cta' },
    ],
    faq: [
      {
        q: 'Görüntü işleme ile kalite kontrol insan kontrolünü tamamen kaldırır mı?',
        a: 'Genellikle hayır; tekrarlayan görsel kontrolü üstlenir, insanı şüpheli ürünlerin karar aşamasına ve süreç iyileştirmeye kaydırır.',
      },
      {
        q: 'Kaç adet hatalı ürün görüntüsü gerekir?',
        a: 'Kusur tipine göre değişir. Sık görülen kusurlarda yüzlerce örnek yeterli olabilir; nadir kusurlarda sağlam ürünlerden öğrenen anomali tespiti tercih edilir.',
      },
      {
        q: 'Hızlı akan hatlarda görüntü işleme yetişir mi?',
        a: 'Doğru kamera (gerekirse global shutter), tetikleme ve edge donanımla saniyede çok sayıda ürün analiz edilebilir. Hat hızı keşif aşamasında ölçülerek donanım buna göre seçilir.',
      },
    ],
    related: ['/kalite-kontrol-goruntu-isleme', '/yuzey-kusuru-tespiti', '/blog/makine-gorme-ve-derin-ogrenme'],
  },
  {
    slug: 'makine-gorme-ve-derin-ogrenme',
    title: 'Makine Görmesi mi, Derin Öğrenme mi? Klasik Görüntü İşleme ile Yapay Zeka Karşılaştırması',
    metaTitle: 'Makine Görmesi vs Derin Öğrenme: Hangisi Ne Zaman Kullanılır?',
    metaDescription:
      'Klasik makine görmesi (machine vision) ile derin öğrenme tabanlı görüntü işleme arasındaki farklar, avantajlar, maliyet ve hangi projede hangisinin seçileceği.',
    excerpt:
      'Kural tabanlı makine görmesi ile yapay zeka tabanlı görüntü işlemeyi maliyet, esneklik ve doğruluk açısından karşılaştırdık.',
    category: 'Karşılaştırma',
    isoDate: '2026-09-29',
    readMinutes: 6,
    keywords: ['makine görmesi', 'machine vision', 'derin öğrenme görüntü işleme', 'bilgisayarlı görü'],
    blocks: [
      {
        type: 'p',
        text: '“Makine görmesi” (machine vision) terimi uzun yıllar boyunca endüstriyel kamera, kontrollü ışık ve kural tabanlı yazılımdan oluşan sistemler için kullanıldı. Derin öğrenmenin olgunlaşmasıyla birlikte aynı problemlere yapay zeka ile yaklaşmak mümkün hâle geldi. Peki hangisi ne zaman doğru seçim?',
      },
      { type: 'h2', id: 'klasik', text: 'Klasik makine görmesi ne zaman yeterli?' },
      {
        type: 'ul',
        items: [
          'Parça her zaman aynı konumda ve aynı ışıkta ise',
          'Hassas boyut ölçümü (mikron seviyesi) gerekiyorsa',
          'Barkod, Data Matrix, OCR gibi standart okuma işleri yapılıyorsa',
          'Kusur tanımı net bir kurala dökülebiliyorsa (ör. “delik var/yok”)',
        ],
      },
      { type: 'h2', id: 'derin-ogrenme', text: 'Derin öğrenme ne zaman şart?' },
      {
        type: 'ul',
        items: [
          'Kusurlar şekil, boyut ve doku olarak çok değişkense (doğal malzeme, kumaş, döküm)',
          'Ortam kontrolsüzse: değişen gün ışığı, farklı kamera açıları',
          'İnsan ve davranış analizi gerekiyorsa: KKD, düşme, yasaklı alan, forklift-yaya',
          'Mevcut IP kameralarla geniş alan izleniyorsa',
        ],
      },
      {
        type: 'table',
        head: ['', 'Makine görmesi (kural tabanlı)', 'Derin öğrenme'],
        rows: [
          ['Geliştirme', 'Mühendis kural yazar', 'Etiketli veriden öğrenir'],
          ['Yeni ürün/varyant', 'Yeniden programlama', 'Yeni örneklerle yeniden eğitim'],
          ['Ortam toleransı', 'Düşük', 'Yüksek'],
          ['Açıklanabilirlik', 'Yüksek (kural belli)', 'Orta (görsel açıklama araçlarıyla)'],
          ['Tipik donanım', 'Endüstriyel kamera + ışık + PC', 'IP/endüstriyel kamera + edge GPU/NPU'],
        ],
      },
      { type: 'h2', id: 'hibrit', text: 'En iyi sonuç: hibrit yaklaşım' },
      {
        type: 'p',
        text: 'Pratikte en sağlam sistemler ikisini birleştirir: derin öğrenme “burada bir kusur var mı, nerede?” sorusunu yanıtlar; klasik görüntü işleme o bölgenin ölçüsünü, alanını ve konumunu hassas biçimde hesaplar. Hype Vision kalite modüllerinde de bu hibrit yaklaşım kullanılır. Bkz. [endüstriyel görüntü işleme sistemleri](/goruntu-isleme).',
      },
      { type: 'cta' },
    ],
    faq: [
      {
        q: 'Makine görmesi ile bilgisayarlı görü aynı şey mi?',
        a: 'Yakın kavramlardır. Makine görmesi genellikle endüstriyel uygulama ve donanım tarafını, bilgisayarlı görü ise görüntüden anlam çıkaran algoritmaların genel bilim alanını ifade eder.',
      },
      {
        q: 'Derin öğrenme her zaman daha mı doğrudur?',
        a: 'Hayır. Sabit koşullarda basit bir ölçüm işi için kural tabanlı sistem daha hızlı, ucuz ve açıklanabilir olabilir. Derin öğrenme değişkenlik yüksek olduğunda öne çıkar.',
      },
    ],
    related: ['/blog/goruntu-isleme-nedir', '/blog/goruntu-isleme-ile-kalite-kontrol', '/goruntu-isleme'],
  },
];
