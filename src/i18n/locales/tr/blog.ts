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
        { label: 'Müdahale', value: 'Vardiya içi' },
        { label: 'Kurulum', value: '4 iş günü' },
        { label: 'Kapasite kazancı', value: '~%6' },
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
        { label: 'Günlük ihlal', value: '−%52' },
        { label: 'Manuel tur', value: '−%40' },
        { label: 'Kurulum', value: '5 iş günü' },
        { label: 'Alarm süresi', value: '<2 sn' },
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
            'İlk 6 haftada günlük ihlal kayıtları %52 azaldı — ekip davranış değişikliğini bilinçli olarak yorumlamıyoruz; ancak “görünmeyen ihlal” kavramı ortadan kalktı.',
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
        { label: 'Fire oranı', value: '−%22' },
        { label: 'Tespit', value: '0.2 sn' },
        { label: 'Kurulum', value: '4 iş günü' },
        { label: 'Pilot süre', value: '8 hafta' },
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
    'tekstil-hat-a-fire-dususu': {
      title: 'Hat A paketlemede fire oranı %31 nasıl düştü?',
      excerpt:
        'Anonim tekstil tesisi — dikiş sonrası paketleme hattında erken hata ayırma; hurda birikimi ve geri işleme maliyeti belirgin şekilde azaldı.',
      sector: 'Tekstil & Konfeksiyon',
      readTime: '6 dk',
      date: '28 Mayıs 2026',
      metaDescription:
        'Tekstil Hat A vaka çalışması: paketleme hattında fire %31 düşüş, anlık kalite alarmı, anonim fabrika örneği.',
      results: [
        { label: 'Hat A fire', value: '−%31' },
        { label: 'Geri işleme', value: '−%45' },
        { label: 'Kurulum', value: '5 iş günü' },
        { label: 'Pilot süre', value: '30 gün' },
      ],
      sections: [
        {
          paragraphs: [
            'Bu vaka notu, İstanbul yakınlarında faaliyet gösteren orta ölçekli bir konfeksiyon ve paketleme tesisindeki Hat A pilotunu anlatır. Müşteri adı gizlilik nedeniyle paylaşılmamaktadır.',
            'Hat A günlük 4.200 parça kapasiteli paketleme hattıdır. Fire çoğunlukla etiket hizası, dikiş görünümü ve ambalaj bütünlüğü kaynaklıydı.',
          ],
        },
        {
          heading: 'Başlangıç metrikleri',
          paragraphs: [
            'Pilot öncesi 30 günlük ortalama fire oranı %4.8 idi. Kalite ekibi hat sonunda örnekleme yapıyor; hat içi hatalar birikerek geri işleme kuyruğuna düşüyordu.',
            'Mevcut 4 IP kamera (paketleme giriş, orta nokta, çıkış, etiket istasyonu) RTSP ile edge kutusuna bağlandı. Yeni kamera alınmadı.',
          ],
        },
        {
          heading: 'Hat A\'da ne değişti?',
          paragraphs: [
            'Kalite modülü her parçayı 0.2–0.4 saniye içinde sınıflandırdı. Sapma tespitinde kalite mühendisine panel alarmı ve VMS popup gitti.',
            'İlk 30 gün sonunda Hat A fire oranı %3.3\'e indi — göreli %31 iyileşme. Geri işleme kuyruğu hacmi %45 azaldı.',
            'Operatör müdahalesi hat içinde yapılabildiği için hurda birikimi kesildi; asıl kazanç geç müdahaleden çok erken ayırmada.',
          ],
        },
        {
          heading: 'Vardiya bazlı görünürlük',
          paragraphs: [
            'Saatlik fire eğrisi vardiya amirine gösterildi. Öğle vardiyası sonrası spike tespit edilince etiket rulosu değişimi prosedüre alındı — kök neden 48 saat içinde kapandı.',
          ],
        },
        {
          heading: 'Sonuç ve yaygınlaştırma',
          paragraphs: [
            'Pilot 5 iş gününde kuruldu, 30 gün ölçüldü, yazılı rapor teslim edildi. Hat B için aynı edge altyapısı ile genişletme planlandı.',
            'Benzer paketleme hattına sahip tekstil tesisleri için keşif görüşmesinde hat haritası ve kamera açıları birlikte değerlendirilir.',
          ],
        },
      ],
    },
    'lojistik-palet-sayim-sapmasi': {
      title: 'Sevkiyat rampasında palet sayım sapması: anlık alarm vakası',
      excerpt:
        'Anonim lojistik merkezi — beklenen ve tespit edilen palet sayısı arasındaki sapma anında yakalandı; sevkiyat hataları %60 azaldı.',
      sector: 'Lojistik & Sevkiyat',
      readTime: '5 dk',
      date: '10 Mayıs 2026',
      metaDescription:
        'Lojistik palet sayım vaka çalışması: sevkiyat sapması tespiti, nesne sayım modülü, %60 sevkiyat hatası azalması.',
      results: [
        { label: 'Sevkiyat hatası', value: '−%60' },
        { label: 'Kayıt arama', value: '40dk→3dk' },
        { label: 'Kurulum', value: '3 iş günü' },
        { label: 'Kamera', value: 'Mevcut 3' },
      ],
      sections: [
        {
          paragraphs: [
            'Bu vaka, Marmara bölgesinde bir üreticinin sevkiyat rampasında yapılan nesne sayım pilotunu özetler. Tesis adı anonimdir.',
            'Rampada forklift ile yüklenen paletler manuel sayılıyor; ERP girişi saatler sonra yapılıyordu. Sayım farkları ancak gün sonu mutabakatında çıkıyordu.',
          ],
        },
        {
          heading: 'Sorun',
          paragraphs: [
            'Haftalık ortalama 12 sevkiyat sapması kaydı vardı. Farkın kaynağı (eksik palet, çift sayım, yanlış SKU) kamera kaydından manuel aranarak bulunuyordu.',
            'Lojistik sorumlusu her sapmada 25–40 dakika kayıt taraması yapıyordu.',
          ],
        },
        {
          heading: 'Çözüm',
          paragraphs: [
            'Rampaya bakan 3 mevcut kamera nesne sayım modülüne bağlandı. Her yükleme olayında beklenen palet sayısı (ERP\'den veya operatör girişinden) ile AI sayımı karşılaştırıldı.',
            'Sapma %5 eşiğini aştığında lojistik sorumlusuna panel bildirimi gitti; olay kartında zaman damgası ve sayım özeti arşivlendi.',
          ],
        },
        {
          heading: '30 günlük sonuç',
          paragraphs: [
            'Sevkiyat sapması kayıtları haftalık 12\'den 5\'e düştü (%60 azalma). Kayıt arama süresi ortalama 3 dakikaya indi.',
            'Pilot raporunda ROI, fire değil operasyonel hata maliyeti üzerinden hesaplandı — müşteri iç verilerini paylaşmadığı için rakamlar anonim bırakıldı.',
          ],
        },
        {
          heading: 'Öğrenilenler',
          paragraphs: [
            'Sayım modülü lojistikte en hızlı ROI veren modüllerden biri; kurulum süresi 3 iş günü.',
            'ERP entegrasyonu ikinci fazda tamamlandı — pilot aşamasında operatör tablet girişi yeterli oldu.',
          ],
        },
      ],
    },
  },
};
