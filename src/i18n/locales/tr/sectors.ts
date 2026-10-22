export default {
  ui: {
    breadcrumbHome: 'Ana sayfa',
    breadcrumbSectors: 'Sektörler',
    modulesTitle: 'Önerilen modüller',
    metricsTitle: 'Tipik sonuçlar',
    painsTitle: 'Sektör zorlukları',
    caseStudy: 'İlgili vaka notu',
    cta: 'Sektörünüz için keşif iste',
    ctaPanel: 'Canlı paneli gör',
    relatedSectors: 'Diğer sektörler',
  },
  pages: {
    tekstil: {
      title: 'Tekstil üretiminde yapay zeka denetimi',
      metaDescription:
        'Tekstil fabrikalarında personel verimliliği, KKD denetimi ve hat takibi — mevcut kameralarla Hype Vision.',
      eyebrow: 'Tekstil & konfeksiyon',
      headline: 'Dikiş hattından paketlemeye',
      headlineHighlight: 'ölçülebilir verimlilik',
      intro:
        'Tekstil tesislerinde vardiya sonu öğrenilen kayıp süre, KKD ihlalleri ve hat dengesizliği günlük operasyonu etkiler. Hype Vision mevcut IP kameralarınızla bu görünürlüğü anlık hale getirir.',
      pains: [
        { title: 'Görünmeyen idle süre', desc: 'Operatör bekleme süreleri vardiya sonunda raporlanır; müdahale geç kalır.' },
        { title: 'KKD uyumu', desc: 'Dikiş ve kesim alanlarında baret, eldiven ve yelek ihlalleri örneklemeli turla yakalanır.' },
        { title: 'Hat dengesizliği', desc: 'Besleme ve paketleme arası darboğazlar geç fark edilir.' },
      ],
      modules: ['Personel verimlilik', 'KKD / İSG', 'Kişi sayımı', 'Bölge analizi'],
      metrics: [
        { value: '−%18', label: 'Ortalama idle azaltma' },
        { value: '7/24', label: 'KKD izleme' },
        { value: '4 gün', label: 'Tipik pilot kurulum' },
      ],
      caseSlug: 'tekstil-hat-a-fire-dususu',
    },
    otomotiv: {
      title: 'Otomotiv yan sanayide kalite ve İSG',
      metaDescription:
        'Montaj hatlarında fire azaltma, KKD ihlali tespiti ve anlık alarm — otomotiv tedarikçileri için Hype Vision.',
      eyebrow: 'Otomotiv yan sanayi',
      headline: 'Montaj hattında',
      headlineHighlight: 'fire ve İSG kontrolü',
      intro:
        'Just-in-time baskısı altındaki otomotiv tedarikçilerinde geç yakalanan hatalar ve İSG ihlalleri hem maliyet hem denetim riski oluşturur.',
      pains: [
        { title: 'Geç fire tespiti', desc: 'Hatalı parça bir sonraki istasyona geçince hurda maliyeti katlanır.' },
        { title: 'Manuel İSG turları', desc: 'Vardiya dışı saatlerde kör noktalar kalır.' },
        { title: 'Dijital kanıt eksikliği', desc: 'Denetim dosyaları kağıt ve Excel ile sınırlı kalır.' },
      ],
      modules: ['Kalite kontrol', 'KKD / İSG', 'Nesne sayımı', 'Yüz tanıma giriş'],
      metrics: [
        { value: '−%22', label: 'Fire trendi (pilot)' },
        { value: '0.2 sn', label: 'Hata tespit süresi' },
        { value: '−%40', label: 'Manuel tur azaltma' },
      ],
      caseSlug: 'isg-kkd-ihlal-tespiti',
    },
    gida: {
      title: 'Gıda üretiminde hijyen ve verimlilik',
      metaDescription:
        'Gıda hatlarında idle takibi, hijyen bölgesi ihlali ve personel verimliliği — Hype Vision ile 7/24 izleme.',
      eyebrow: 'Gıda & içecek',
      headline: 'Paketleme hattında',
      headlineHighlight: 'kayıp süreyi görünür kılın',
      intro:
        'Gıda tesislerinde hijyen kuralları ve vardiya verimliliği bir arada yönetilmelidir. Hype Vision her iki boyutu da aynı panelden izler.',
      pains: [
        { title: 'Vardiya kaybı', desc: 'Paketleme ve besleme hatlarında boşta kalma geç fark edilir.' },
        { title: 'Hijyen bölgesi', desc: 'Yetkisiz giriş ve ekipman ihlalleri anlık yakalanmaz.' },
        { title: 'İzlenebilirlik', desc: 'Olay sonrası kamera kaydı aramak saatler alır.' },
      ],
      modules: ['Personel verimlilik', 'Bölge ihlali', 'KKD / hijyen', 'Canlı panel'],
      metrics: [
        { value: '−%18', label: 'Idle azaltma' },
        { value: 'Anlık', label: 'Alarm süresi' },
        { value: 'KVKK', label: 'Edge seçeneği' },
      ],
      caseSlug: 'gida-hattinda-idle-azaltma',
    },
    metal: {
      title: 'Metal ve makine imalatında İSG',
      metaDescription:
        'Kaynak, kesim ve montaj alanlarında KKD, tehlikeli bölge ve düşme tespiti — metal üretim için Hype Vision.',
      eyebrow: 'Metal & makine',
      headline: 'Kaynak ve montajda',
      headlineHighlight: '7/24 İSG denetimi',
      intro:
        'Metal işleme tesislerinde en yüksek risk kaynak, kesim ve ağır ekipman bölgelerindedir. Sürekli otomatik izleme manuel turların ötesine geçer.',
      pains: [
        { title: 'KKD ihlali', desc: 'Kaynak maskesi, eldiven ve baret eksikliği sık görülür.' },
        { title: 'Tehlikeli bölge', desc: 'Forklift ve yaya çakışma riski yüksektir.' },
        { title: 'Düşme / anormal duruş', desc: 'Pose analizi ile erken uyarı mümkün değildir (manuelde).' },
      ],
      modules: ['KKD / İSG', 'Pose & düşme', 'Forklift tespiti', 'Alarmlar'],
      metrics: [
        { value: '7/24', label: 'İSG kapsama' },
        { value: '<3 sn', label: 'Alarm gecikmesi' },
        { value: 'Otomatik', label: 'Kanıt arşivi' },
      ],
      caseSlug: 'kalite-kontrol-fire-azaltma',
    },
  },
};
