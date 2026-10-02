import type { Guide } from './types';

export const GUIDES_PART2: Guide[] = [
  {
    slug: 'yapay-zeka-ile-is-guvenligi',
    title: 'Yapay Zeka ile İş Güvenliği: Kamera ile KKD ve Tehlikeli Alan Denetimi',
    metaTitle: 'Yapay Zeka ile İş Güvenliği | Kamera ile KKD ve İSG Denetimi',
    metaDescription:
      'Yapay zeka ve görüntü işleme ile iş güvenliği: baret, yelek, KKD tespiti, yasaklı alan, forklift-yaya ve düşme algılama. 6331 sayılı Kanun kapsamında önleyici denetim.',
    excerpt:
      'İSG denetimini örneklemeden 7/24 otomatik izlemeye taşımanın yolları: hangi riskler kamerayla tespit edilir, kurulum nasıl yapılır, nelere dikkat edilir?',
    category: 'Mevzuat',
    isoDate: '2026-08-25',
    readMinutes: 8,
    keywords: ['yapay zeka iş güvenliği', 'İSG kamera sistemi', 'KKD tespiti', 'baret tespiti'],
    blocks: [
      {
        type: 'p',
        text: '6331 sayılı İş Sağlığı ve Güvenliği Kanunu, işverene riskleri önceden değerlendirme ve önleyici tedbir alma yükümlülüğü getirir. Ancak sahadaki denetim çoğunlukla İSG uzmanının tur atmasına ve gözleme dayanır. **Yapay zeka destekli kamera sistemleri**, bu denetimi her kareye ve her vardiyaya yayar; ihlal olduğu anda uyarı üretir ve kayıt altına alır.',
      },
      {
        type: 'note',
        text: 'Bu yazı bilgilendirme amaçlıdır; hukuki görüş değildir. Mevzuat yükümlülükleri için İSG profesyonelinize ve hukuk danışmanınıza başvurun.',
      },
      { type: 'h2', id: 'tespit-edilenler', text: 'Kamera ile hangi İSG riskleri tespit edilir?' },
      {
        type: 'table',
        head: ['Risk', 'Görüntü işleme ne yapar?', 'Modül'],
        rows: [
          ['Baret eksikliği', 'Kişi başına baret var/yok, turnike kilidi', '[Baret tespiti](/baret-tespit-sistemi)'],
          ['KKD eksikliği', 'Yelek, gözlük, eldiven, maske kontrolü', '[KKD kontrol](/kkd-kontrol-kamera-sistemi)'],
          ['Yasaklı/tehlikeli alan', 'Sanal bölgeye giriş ve süre takibi', '[Yasaklı alan](/yasakli-alan-ihlal-tespiti)'],
          ['Forklift-yaya çakışması', 'Mesafe ve rota kesişimi uyarısı', '[Forklift-yaya](/forklift-yaya-guvenlik-sistemi)'],
          ['Düşme / hareketsizlik', 'Düşen veya yerde kalan kişi alarmı', '[Düşme tespiti](/dusme-tespit-sistemi)'],
        ],
      },
      { type: 'h2', id: 'nasil-calisir', text: 'Sistem nasıl çalışır?' },
      {
        type: 'ol',
        items: [
          'Mevcut IP kameralardan RTSP/ONVIF ile canlı görüntü alınır.',
          'Edge cihazda derin öğrenme modeli kişi ve ekipmanları tespit eder.',
          'Bölge, süre ve vardiya kurallarına göre ihlal kararı verilir.',
          'Panel, mobil bildirim, siren, flaşör veya turnike gibi aksiyonlar tetiklenir.',
          'İhlaller kanıt görüntüsüyle raporlanır; trend analizi ile eğitim ihtiyacı belirlenir.',
        ],
      },
      { type: 'h2', id: 'faydalar', text: 'Önleyici İSG için ne kazandırır?' },
      {
        type: 'ul',
        items: [
          '**Sürekli denetim:** Gece vardiyası ve hafta sonu dahil her kare izlenir.',
          '**Ramak kala görünürlüğü:** Kazaya dönüşmeyen ihlaller de kayda geçer; risk değerlendirmesi veriye dayanır.',
          '**Davranış değişimi:** Anlık uyarı, kuralların gerçekten uygulanmasını sağlar.',
          '**Raporlama:** Bölge, vardiya ve ihlal tipine göre trend raporları denetim ve eğitim planlamasını kolaylaştırır.',
        ],
      },
      { type: 'h2', id: 'kvkk', text: 'Çalışan mahremiyeti ve KVKK' },
      {
        type: 'p',
        text: 'İSG amaçlı kamera analitiğinde amaç kişiyi değil ihlali tespit etmektir. Yüz tanıma kullanılmadan çalışmak, görüntülerin tesis içinde işlenmesi ve saklama sürelerinin sınırlandırılması mümkündür. Ayrıntılar için [fabrikada kamera analitiği ve KVKK](/blog/kvkk-kamera-yapay-zeka) rehberimize bakın.',
      },
      { type: 'cta', text: 'Sahanızdaki en riskli 2–3 bölgeyle başlayan ölçümlü bir İSG pilotu planlayalım.' },
    ],
    faq: [
      {
        q: 'Yapay zeka İSG uzmanının yerini alır mı?',
        a: 'Hayır. Sistem uzmanın gözü ve kulağı olur; tespit ve raporlamayı otomatikleştirir. Risk değerlendirmesi, eğitim ve düzeltici faaliyet kararları İSG profesyonelinde kalır.',
      },
      {
        q: 'Kask/baret tespiti gece veya düşük ışıkta çalışır mı?',
        a: 'Kameranın gece görüş (IR) kalitesi yeterliyse evet. Keşif aşamasında gece görüntüleri de test edilerek doğruluk ölçülür.',
      },
      {
        q: 'İhlal anında turnike veya makine durdurulabilir mi?',
        a: 'Evet. Röle, Modbus/Ethernet-IP veya API üzerinden turnike kilitleme, siren ve makine interlock senaryoları kurulabilir.',
      },
    ],
    related: ['/baret-tespit-sistemi', '/kkd-kontrol-kamera-sistemi', '/blog/isg-kkd-ihlal-tespiti'],
  },
  {
    slug: 'oee-nasil-hesaplanir',
    title: 'OEE Nasıl Hesaplanır? Formül, Örnek Hesap ve Kamera ile Otomatik OEE Takibi',
    metaTitle: 'OEE Nasıl Hesaplanır? Formül ve Örnek Hesaplama (Rehber)',
    metaDescription:
      'OEE (Toplam Ekipman Etkinliği) nasıl hesaplanır? Kullanılabilirlik × Performans × Kalite formülü, adım adım örnek hesap, dünya standardı OEE ve görüntü işleme ile otomatik ölçüm.',
    excerpt:
      'OEE formülünü adım adım bir örnekle açıklıyor, manuel ölçümün tuzaklarını ve kamera ile otomatik OEE takibini anlatıyoruz.',
    category: 'Hesaplama',
    isoDate: '2026-08-18',
    readMinutes: 7,
    keywords: ['OEE nasıl hesaplanır', 'OEE formülü', 'toplam ekipman etkinliği', 'OEE takip'],
    blocks: [
      {
        type: 'p',
        text: '**OEE (Overall Equipment Effectiveness – Toplam Ekipman Etkinliği)**, bir makinenin ya da hattın planlanan üretim süresini ne kadar verimli kullandığını tek bir yüzdeyle ifade eder. Üç bileşenden oluşur: kullanılabilirlik, performans ve kalite.',
      },
      { type: 'h2', id: 'formul', text: 'OEE formülü' },
      {
        type: 'p',
        text: '**OEE = Kullanılabilirlik × Performans × Kalite**',
      },
      {
        type: 'ul',
        items: [
          '**Kullanılabilirlik** = Çalışma süresi ÷ Planlanan üretim süresi',
          '**Performans** = (İdeal çevrim süresi × Toplam üretim adedi) ÷ Çalışma süresi',
          '**Kalite** = Sağlam ürün adedi ÷ Toplam üretim adedi',
        ],
      },
      { type: 'h2', id: 'ornek', text: 'Adım adım örnek hesap' },
      {
        type: 'p',
        text: 'Bir vardiya 480 dakika; 30 dakika planlı mola var. Planlanan üretim süresi 450 dakika. Vardiya içinde 45 dakika plansız duruş yaşandı. İdeal çevrim süresi 1 dakika/adet; toplam 360 adet üretildi, bunların 342’si sağlam.',
      },
      {
        type: 'table',
        head: ['Bileşen', 'Hesap', 'Sonuç'],
        rows: [
          ['Çalışma süresi', '450 − 45', '405 dk'],
          ['Kullanılabilirlik', '405 ÷ 450', '%90,0'],
          ['Performans', '(1 × 360) ÷ 405', '%88,9'],
          ['Kalite', '342 ÷ 360', '%95,0'],
          ['OEE', '0,900 × 0,889 × 0,950', '≈ %76,0'],
        ],
      },
      {
        type: 'p',
        text: 'Sektörde sıkça referans alınan “dünya standardı” OEE yaklaşık %85’tir. Ancak asıl değer, kendi hattınızın OEE’sini düzenli ölçüp kayıpları (duruş, yavaş çalışma, hata) kaynağına göre ayırabilmektir.',
      },
      { type: 'h2', id: 'manuel-sorunlar', text: 'Manuel OEE ölçümünün tuzakları' },
      {
        type: 'ul',
        items: [
          'Kısa duruşlar (1–2 dk) form ve Excel kayıtlarına girmez; performans kaybı gizli kalır.',
          'Veriler vardiya sonunda toplanır; müdahale için geç kalınır.',
          'Duruş nedeni tahmine dayalı yazılır, kök neden analizi zayıflar.',
        ],
      },
      { type: 'h2', id: 'kamera-ile', text: 'Kamera ve görüntü işleme ile otomatik OEE' },
      {
        type: 'p',
        text: 'Görüntü işleme; hattın çalışıp çalışmadığını, geçen ürün adedini, çevrim sürelerini ve istasyondaki operatör varlığını kameradan otomatik çıkarır. Böylece mikro duruşlar dahil gerçek OEE anlık izlenir; PLC’ye dokunmadan eski makinelerde bile ölçüm yapılabilir. Bkz. [OEE takip sistemi](/oee-takip-sistemi) ve [personel verimlilik analizi](/personel-verimlilik-analizi-kamera).',
      },
      { type: 'cta', text: 'Hattınızın gerçek OEE’sini birkaç gün içinde kameradan ölçmeye başlayalım.' },
    ],
    faq: [
      {
        q: 'İyi bir OEE değeri kaçtır?',
        a: 'Sıkça referans alınan dünya standardı yaklaşık %85’tir; birçok tesiste ilk ölçümler %40–60 aralığında çıkar. Hedef, kendi başlangıç değerinizden sistematik iyileşmedir.',
      },
      {
        q: 'OEE ile TEEP arasındaki fark nedir?',
        a: 'OEE planlanan üretim süresini baz alır; TEEP ise takvimdeki tüm zamanı (24/7) baz alarak atıl kapasiteyi de gösterir.',
      },
      {
        q: 'Eski makinelerde OEE ölçülebilir mi?',
        a: 'Evet. PLC verisi olmayan makinelerde kamera, makinenin çalışma durumunu ve ürün çıkışını görsel olarak tespit ederek OEE hesaplayabilir.',
      },
    ],
    related: ['/oee-takip-sistemi', '/personel-verimlilik-analizi-kamera', '/blog/gida-hattinda-idle-azaltma'],
  },
  {
    slug: 'kvkk-kamera-yapay-zeka',
    title: 'Fabrikada Yapay Zeka Kamera Analitiği ve KVKK: Uyum Rehberi',
    metaTitle: 'Yapay Zeka Kamera Analitiği ve KVKK Uyumu | Fabrika Rehberi',
    metaDescription:
      'İşyerinde yapay zeka destekli kamera analitiği KVKK’ya nasıl uyumlu kurulur? Aydınlatma, veri minimizasyonu, edge işleme, maskeleme, saklama süresi ve erişim yetkileri.',
    excerpt:
      'Kamera analitiği projelerinde 6698 sayılı KVKK açısından dikkat edilmesi gereken başlıkları pratik bir kontrol listesiyle özetledik.',
    category: 'Mevzuat',
    isoDate: '2026-08-11',
    readMinutes: 6,
    keywords: ['KVKK kamera', 'kamera analitiği KVKK', 'işyeri kamera KVKK', 'yapay zeka KVKK'],
    blocks: [
      {
        type: 'p',
        text: 'Kamera görüntüsünde kişi tanınabiliyorsa bu görüntü 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel veridir. Yapay zeka analitiği eklemek, verinin işlenme amacını ve yöntemini değiştirdiği için uyum çerçevesinin yeniden gözden geçirilmesini gerektirir. İyi haber: doğru mimariyle hem İSG/verimlilik hedeflerine ulaşmak hem de mahremiyeti korumak mümkündür.',
      },
      {
        type: 'note',
        text: 'Bu yazı genel bilgilendirme amaçlıdır, hukuki danışmanlık yerine geçmez. Kurumunuza özgü değerlendirme için KVKK danışmanınızla çalışın.',
      },
      { type: 'h2', id: 'kontrol-listesi', text: 'Uyum kontrol listesi' },
      {
        type: 'ol',
        items: [
          '**Amaç ve hukuki dayanak:** Analitiğin amacı (ör. iş güvenliği, kalite) yazılı olarak tanımlanmalı ve işleme şartlarıyla ilişkilendirilmelidir.',
          '**Aydınlatma:** Çalışanlar kamera analitiği, amacı ve süreleri hakkında bilgilendirilmeli; alanlarda görünür bilgilendirme yapılmalıdır.',
          '**Veri minimizasyonu:** Amaç için gerekmeyen veriler işlenmemeli; örneğin İSG için yüz tanıma kullanılmamalı.',
          '**Yerinde (edge) işleme:** Görüntüler tesis dışına çıkmadan analiz edilip yalnızca olay meta verisi aktarılabilir.',
          '**Maskeleme/anonimleştirme:** Raporlarda yüz ve kimlik bilgisi bulanıklaştırılabilir.',
          '**Saklama süresi:** Ham görüntü ve olay kayıtları için ayrı, kısa ve gerekçeli süreler belirlenmelidir.',
          '**Erişim yetkisi:** Kimin hangi görüntüyü görebileceği rol bazlı sınırlandırılmalı ve loglanmalıdır.',
          '**VERBİS ve envanter:** Kişisel veri işleme envanteri ve gerekiyorsa VERBİS kaydı güncellenmelidir.',
        ],
      },
      { type: 'h2', id: 'mimari', text: 'Mahremiyet odaklı mimari örneği' },
      {
        type: 'table',
        head: ['Katman', 'Uygulama'],
        rows: [
          ['Kamera', 'Mevcut IP kamera, değişiklik yok'],
          ['Edge analiz', 'Görüntü tesis içinde işlenir, internete çıkmaz'],
          ['Olay kaydı', 'Yalnızca ihlal anındaki kısa klip / kare, maskeli'],
          ['Panel', 'Rol bazlı erişim, işlem logları'],
          ['Saklama', 'Otomatik silme politikası'],
        ],
      },
      {
        type: 'p',
        text: 'Hype Vision bu yaklaşımı varsayılan olarak destekler. Ayrıntılar: [KVKK uyumlu kamera analitiği](/kvkk-uyumlu-kamera-analitigi).',
      },
      { type: 'cta' },
    ],
    faq: [
      {
        q: 'İş güvenliği için kamera analitiğinde açık rıza gerekir mi?',
        a: 'Duruma göre farklı hukuki dayanaklar uygulanabilir; işveren-çalışan ilişkisinde açık rızanın geçerliliği tartışmalı olabildiğinden değerlendirme KVKK danışmanıyla yapılmalıdır.',
      },
      {
        q: 'Yüz tanıma olmadan kişi bazlı ihlal raporu alınabilir mi?',
        a: 'İhlal anonim olarak (bölge, zaman, ihlal tipi) raporlanabilir. Kişi eşleştirmesi gerekiyorsa turnike/kart verisi gibi mevcut sistemlerle sınırlı ve gerekçeli şekilde yapılmalıdır.',
      },
    ],
    related: ['/kvkk-uyumlu-kamera-analitigi', '/blog/yapay-zeka-ile-is-guvenligi', '/goruntu-isleme'],
  },
  {
    slug: 'mevcut-ip-kamera-yapay-zeka',
    title: 'Mevcut IP Kameralar Yapay Zeka İçin Yeterli mi? Çözünürlük, FPS ve Açı Rehberi',
    metaTitle: 'Mevcut IP Kameralar Yapay Zeka İçin Yeterli mi? | Kamera Rehberi',
    metaDescription:
      'Yapay zeka görüntü işleme için mevcut IP kameralarınız yeterli mi? Çözünürlük, FPS, lens, açı, gece görüşü ve RTSP/ONVIF gereksinimleri; ne zaman yeni kamera gerekir?',
    excerpt:
      'Yeni kamera yatırımı yapmadan önce okuyun: mevcut güvenlik kameralarınızın yapay zeka analitiği için uygun olup olmadığını nasıl anlarsınız?',
    category: 'Rehber',
    isoDate: '2026-09-01',
    readMinutes: 6,
    keywords: ['IP kamera yapay zeka', 'mevcut kamera görüntü işleme', 'RTSP ONVIF yapay zeka', 'kamera analitiği'],
    blocks: [
      {
        type: 'p',
        text: 'Görüntü işleme projelerinde en sık sorulan soru: “Yeni kamera almamız gerekiyor mu?” Çoğu İSG, güvenlik ve verimlilik uygulamasında cevap **hayır**. Tesislerdeki güvenlik kameraları yapay zeka analitiği için çoğu zaman yeterlidir; sadece birkaç kriteri kontrol etmek gerekir.',
      },
      { type: 'h2', id: 'kriterler', text: 'Kontrol edilmesi gereken 6 kriter' },
      {
        type: 'table',
        head: ['Kriter', 'Genellikle yeterli', 'Dikkat'],
        rows: [
          ['Protokol', 'RTSP veya ONVIF desteği', 'Sadece kayıt cihazına kapalı sistemler'],
          ['Çözünürlük', '1080p (2 MP) ve üzeri', 'Küçük nesne/uzak mesafe için 4 MP+'],
          ['Kare hızı', '10–25 FPS', 'Hızlı hareket (forklift, konveyör) için yüksek FPS'],
          ['Açı', 'Hedefi yukarıdan-çapraz gören konum', 'Tam tepeden bakış KKD tespitini zorlaştırabilir'],
          ['Işık / gece', 'İyi IR veya ortam aydınlatması', 'Ters ışık ve parlama'],
          ['Ağ', 'Kamera ile analiz cihazı aynı yerel ağda', 'Bant genişliği ve VLAN ayarları'],
        ],
      },
      { type: 'h2', id: 'ne-zaman-yeni', text: 'Ne zaman yeni kamera gerekir?' },
      {
        type: 'ul',
        items: [
          'Mikron/milimetre seviyesinde yüzey kusuru aranan kalite istasyonları',
          'Çok hızlı akan hatlarda hareket bulanıklığı (global shutter ihtiyacı)',
          'Hedef alanı hiç görmeyen ya da çok uzaktan gören konumlar',
        ],
      },
      { type: 'h2', id: 'test', text: 'Hızlı uygunluk testi' },
      {
        type: 'p',
        text: 'Keşif aşamasında her kameradan kısa örnek kayıt alınır ve model bu görüntüler üzerinde çalıştırılır. Böylece “kamera uygun mu?” sorusu tahminle değil ölçümle cevaplanır. Marka bağımsız entegrasyon için: [ONVIF/RTSP yapay zeka entegrasyonu](/onvif-rtsp-yapay-zeka-entegrasyonu).',
      },
      { type: 'cta', text: 'Kamera listenizi gönderin, hangi kameraların hangi modüle uygun olduğunu birlikte çıkaralım.' },
    ],
    faq: [
      {
        q: 'Hikvision, Dahua, Axis gibi farklı marka kameralar birlikte kullanılabilir mi?',
        a: 'Evet. RTSP/ONVIF destekleyen kameralar marka fark etmeksizin aynı platformda analiz edilebilir.',
      },
      {
        q: 'NVR/DVR üzerinden görüntü almak mümkün mü?',
        a: 'Çoğu NVR kanal bazlı RTSP akışı sunar; bu akışlar analiz için kullanılabilir. Bazı durumlarda doğrudan kameraya bağlanmak gecikmeyi azaltır.',
      },
    ],
    related: ['/onvif-rtsp-yapay-zeka-entegrasyonu', '/blog/goruntu-isleme-nedir', '/goruntu-isleme'],
  },
];
