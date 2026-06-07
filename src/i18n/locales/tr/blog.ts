export default {
  ui: {
    sectionEyebrow: 'Vaka notları',
    sectionTitle: 'Sahadan anonim',
    sectionTitleHighlight: 'sonuç hikâyeleri',
    sectionDesc:
      'Müşteri adı paylaşılmadan, sektör ve ölçülebilir sonuçlarla gerçek saha deneyimleri.',
    readMore: 'Devamını oku',
    breadcrumbHome: 'Ana sayfa',
    breadcrumbBlog: 'Vaka notları',
    readTimeSuffix: 'okuma',
    disclaimer:
      '* Müşteri adı ve tesis detayları gizlilik nedeniyle paylaşılmamaktadır. Sonuçlar tesis koşullarına göre değişebilir.',
    allPosts: 'Tüm vaka notları',
    contact: 'İletişim',
    otherPosts: 'Diğer vaka notları',
    titleSuffix: 'Hype Vision',
  },
  posts: {
    'gida-hattinda-idle-azaltma': {
      title: 'Gıda üretim hattında boşta kalma süresi nasıl %18 azaltıldı?',
      excerpt:
        'Anonim gıda tesisi — vardiya içi idle görünür hale geldi; müdahale süresi kısaldı, kayıp kapasite ölçülebilir oldu.',
      sector: 'Gıda & İçecek',
      readTime: '4 dk',
      date: '15 Mayıs 2026',
      metaDescription:
        'Gıda üretim hattında yapay zeka ile boşta kalma (idle) takibi: anonim vaka notu, %18 idle azaltma, vardiya içi müdahale.',
      results: [
        { label: 'Idle azaltma', value: '%18' },
        { label: 'Tespit süresi', value: 'Anlık' },
        { label: 'Kurulum', value: '4 gün' },
      ],
      sections: [
        {
          paragraphs: [
            'Bu vaka notu, Türkiye’de faaliyet gösteren orta ölçekli bir gıda üretim tesisinde Hype Vision personel verimlilik modülünün devreye alınmasını özetler. Müşteri adı gizlilik nedeniyle paylaşılmamaktadır.',
            'Tesisin ana sorunu vardiya sonunda öğrenilen kayıp süreydi: paketleme hattında personelin ne kadar aktif, ne kadar beklemede kaldığı Excel ve gözleme dayalı raporlarla ancak gün sonunda görülüyordu.',
          ],
        },
        {
          heading: 'Başlangıç durumu',
          paragraphs: [
            'Mevcut 6 adet IP kamera (Hikvision, RTSP) paketleme ve besleme hatlarına bakıyordu. Yeni kamera alınmadı; Hype Vision edge kutusu tesis ağına bağlandı.',
            'Vardiya hedefi: istasyon başına maksimum 25 dakika boşta kalma. Gerçekleşen ortalama 43 dakikaydı — fark vardiya sonunda raporlanıyordu.',
          ],
        },
        {
          heading: 'Ne değişti?',
          paragraphs: [
            'Yapay zeka personel hareketini sınıflandırarak aktif çalışma, onaylı mola ve idle sürelerini saatlik olarak ayırdı. Vardiya amiri eşik aşıldığında panel bildirimi aldı.',
            'İlk ay sonunda ortalama idle süresi 43 dakikadan 35 dakikaya indi (%18 iyileşme). İkinci ay istasyon bazlı hedefler sıkılaştırıldığında trend korundu.',
            'Yönetim için asıl kazanç: müdahale vardiya içinde yapılabildi; “dün ne olmuş?” yerine “şu an ne oluyor?” sorusu yanıt buldu.',
          ],
        },
        {
          heading: 'Sonuç',
          paragraphs: [
            'Proje 4 iş gününde pilot olarak kuruldu. Tam ölçekli yaygınlaştırma ikinci hatta aynı altyapı ile genişletildi.',
            'Benzer hat yapısına sahip tesisler için mevcut kameralar yeterli olabilir — keşif görüşmesinde hat haritası birlikte çıkarılır.',
          ],
        },
      ],
    },
    'isg-kkd-ihlal-tespiti': {
      title: 'Montaj hattında KKD ihlalleri: 7/24 otomatik denetim vakası',
      excerpt:
        'Anonim otomotiv yan sanayi tesisi — baret ve yelek ihlalleri anında tespit; manuel devriye yükü azaldı, dijital kanıt arşivi oluştu.',
      sector: 'Otomotiv Yan Sanayi',
      readTime: '5 dk',
      date: '2 Mayıs 2026',
      metaDescription:
        'İSG KKD denetimi yapay zeka vaka notu: baret yelek tespiti, tehlikeli bölge ihlali, 7/24 otomatik alarm. Anonim fabrika örneği.',
      results: [
        { label: 'İhlal görünürlüğü', value: '7/24' },
        { label: 'Manuel tur', value: '−%40' },
        { label: 'Kanıt arşivi', value: 'Otomatik' },
      ],
      sections: [
        {
          paragraphs: [
            'Otomotiv yan sanayi tedarikçisi olan bu tesis (anonim), montaj ve depo alanlarında İSG denetimini örneklemeli saha turları ve kağıt checklist ile yürütüyordu. Kritik ihlaller vardiya dışı saatlerde veya kör noktalarda kaçırılabiliyordu.',
          ],
        },
        {
          heading: 'Sorun',
          paragraphs: [
            'Tehlikeli bölge sınırında baret/yelek eksikliği en sık ihlal tipiydi. Denetim ekibi günde 2 tur atsa bile 7/24 kapsama mümkün değildi.',
            'İş kazası sonrası “o an kamerada ne vardı?” sorusuna cevap bulmak saatler sürebiliyordu.',
          ],
        },
        {
          heading: 'Çözüm',
          paragraphs: [
            '8 mevcut kameraya İSG modülü bağlandı. Baret, yelek ve bölge ihlali modelleri tesis içi edge’de çalıştırıldı; görüntü dışarı çıkmadan analiz edildi.',
            'İhlal anında İSG sorumlusuna panel alarmı ve VMS popup gitti. Olay kartında zaman damgası ve kanıt karesi otomatik arşivlendi.',
            'İlk 6 haftada günlük ihlal sayısı düştü — ekip davranış değişikliğini bilinçli olarak yorumlamıyoruz; ancak “görünmeyen ihlal” kavramı ortadan kalktı.',
          ],
        },
        {
          heading: 'Operasyonel etki',
          paragraphs: [
            'Manuel saha turu sıklığı %40 azaltıldı; ekip önleyici aksiyonlara zaman ayırdı.',
            'Denetim dosyaları için dijital kanıt arşivi oluştu — Excel listeleri yerine olay bazlı görüntü.',
          ],
        },
      ],
    },
    'kalite-kontrol-fire-azaltma': {
      title: 'Konveyör hattında erken hata tespiti ile fire oranı düşüşü',
      excerpt:
        'Anonim beyaz eşya komponent hattı — yüzey hatası anında yakalandı; geç müdahale kaynaklı hurda birikimi azaldı.',
      sector: 'Beyaz Eşya / Komponent',
      readTime: '4 dk',
      date: '20 Nisan 2026',
      metaDescription:
        'Kalite kontrol yapay zeka vaka notu: konveyör hattında hata tespiti, fire azaltma, anlık alarm. Anonim üretim tesisi.',
      results: [
        { label: 'Fire trendi', value: '−%22' },
        { label: 'Tespit', value: '0.2 sn' },
        { label: 'Hat duruşu', value: 'Opsiyonel' },
      ],
      sections: [
        {
          paragraphs: [
            'Beyaz eşya komponent üreten bu tesis (anonim), hat sonunda örnekleme ile kalite kontrol yapıyordu. Hat içi hatalar birikerek fire maliyetine dönüşüyordu.',
          ],
        },
        {
          heading: 'Önceki süreç',
          paragraphs: [
            'Operatör görsel kontrolle hata yakalamaya çalışıyordu; yorgunluk ve hız nedeniyle küçük yüzey defektleri geç kalabiliyordu.',
            'Fire oranı vardiya bazında %3.2 civarındaydı; kök neden analizi her zaman geç yapılıyordu.',
          ],
        },
        {
          heading: 'Hype Vision kalite modülü',
          paragraphs: [
            'Hat kamerası görüntüsü modele göre analiz edildi. Yüzey ve montaj sapmaları 0.1–0.3 saniye içinde sınıflandırıldı.',
            'Hata tespitinde kalite mühendisine anlık alarm gitti; isteğe bağlı PLC entegrasyonu ile hat durdurma sinyali tanımlandı (bu tesiste ilk aşamada sadece alarm kullanıldı).',
            '8 haftalık pilot sonunda vardiya bazlı fire oranı %2.5’e indi (yaklaşık %22 göreli iyileşme).',
          ],
        },
        {
          heading: 'Öğrenilenler',
          paragraphs: [
            'Erken tespit, hurda birikimini keser; asıl tasarruf fire maliyetinde değil müdahale hızındadır.',
            'Model, tesisin kendi parça örnekleriyle birkaç gün içinde ince ayar yapıldı — genel bir “kutudan çıkan” model değildi.',
          ],
        },
      ],
    },
  },
};
