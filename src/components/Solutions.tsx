import React from 'react';
import { HardHat, Factory, Shirt, Car, Building, Zap, Shield, Eye, Award, CheckCircle, ArrowRight, X, TrendingUp, AlertTriangle, Users, Cpu, Activity, Heart, Utensils } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = React.useState<string | null>(null);
  const { t } = useLanguage();

  const solutions = [
    {
      id: 'safety-systems',
      title: t('solutions.safety-systems'),
      description: t('solutions.safety-systems.desc'),
      icon: HardHat,
      color: 'red',
      features: ['Baret Tespiti', 'Güvenlik Gözlüğü', 'Reflektör Yelek', 'Güvenlik Ayakkabısı'],
      metrics: { accuracy: '99.8%', response: '0.1s', sites: '250+' },
      image: '/images/guvenlik.png',
      detailedInfo: {
        overview: 'İSG güvenliği için geliştirilmiş kapsamlı MES güvenlik modülü. Şantiye ve fabrika ortamlarında çalışan güvenliğini maksimum seviyeye çıkaran yapay zeka destekli çözümler.',
        challenges: [
          'Şantiye alanlarında sürekli güvenlik kontrolü',
          'Kişisel koruyucu ekipman kullanım takibi',
          'İş kazalarının önceden önlenmesi',
          'Güvenlik protokollerine uyumun sağlanması'
        ],
        solutions: [
          'Computer vision ile baret ve güvenlik ekipmanı tespiti',
          'Real-time uyarı sistemi ve mobil bildirimler',
          'Güvenlik skorlama ve risk analizi',
          'Otomatik raporlama ve uyumluluk takibi'
        ],
        results: [
          { metric: 'İş Kazası Azalması', value: '%85 azalma', improvement: 'Yıllık 340 kaza önlendi' },
          { metric: 'Güvenlik Uyumu', value: '%98 uyumluluk', improvement: 'İSG mevzuatına tam uyum' },
          { metric: 'Müdahale Süresi', value: '< 30 saniye', improvement: 'Anında uyarı sistemi' },
          { metric: 'ROI', value: '%340 geri dönüş', improvement: '6 ay içinde yatırım geri dönüşü' }
        ],
        technologies: ['Computer Vision', 'Real-time Detection', 'Mobile Alerts', 'Safety Analytics'],
        clientTestimonial: {
          quote: 'Hype Vision MES güvenlik sistemi ile şantiyemizdeki iş kazalarını %85 azalttık. Çalışanlarımızın güvenliği artık otomatik kontrol ediliyor.',
          author: 'Mehmet Yılmaz',
          position: 'İSG Uzmanı',
          company: 'TOFAŞ Otomotiv A.Ş.'
        }
      }
    },
    {
      id: 'automotive-quality',
      title: t('solutions.automotive-quality'),
      description: t('solutions.automotive-quality.desc'),
      icon: Car,
      color: 'blue',
      features: ['Parça Kontrolü', 'Boyut Ölçümü', 'Montaj Doğrulama', 'Yüzey Analizi'],
      metrics: { accuracy: '99.5%', speed: '0.2s', parts: '1M+' },
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      detailedInfo: {
        overview: 'Otomotiv sektörü için özel geliştirilmiş MES kalite kontrol modülü. Motor parçaları, karoseri elemanları ve güvenlik kritik komponentlerin hassas kalite kontrolü.',
        challenges: [
          'Yüksek hassasiyet gerektiren boyut toleransları',
          'Karmaşık geometrili parçaların 3D analizi',
          'Yüzey kalitesi ve pürüzsüzlük kontrolü',
          'Farklı malzeme türlerinin otomatik tanınması'
        ],
        solutions: [
          '3D lazer tarama ile hassas boyut ölçümü',
          'AI destekli yüzey kalitesi analizi',
          'Çoklu açı kamera sistemi ile 360° kontrol',
          'Makine öğrenmesi ile malzeme sınıflandırması'
        ],
        results: [
          { metric: 'Boyut Doğruluğu', value: '±0.01mm hassasiyet', improvement: '+%80 iyileşme' },
          { metric: 'Kontrol Hızı', value: '0.2s/parça', improvement: '+%300 hızlanma' },
          { metric: 'Hatalı Parça', value: '%0.2 red oranı', improvement: '-%90 azalma' },
          { metric: 'Üretim Verimliliği', value: '%96 OEE', improvement: '+%35 artış' }
        ],
        technologies: ['3D Laser Scanning', 'Multi-angle Vision', 'AI Classification', 'Real-time Processing'],
        clientTestimonial: {
          quote: 'Hype Vision MES ile otomotiv parça üretimimizde kalite standartlarımızı %40 yükselttik. Müşteri şikayetleri neredeyse sıfırlandı.',
          author: 'Ayşe Demir',
          position: 'Kalite Direktörü',
          company: 'ARÇELIK Beyaz Eşya A.Ş.'
        }
      }
    },
    {
      id: 'textile-solutions',
      title: t('solutions.textile-solutions'),
      description: t('solutions.textile-solutions.desc'),
      icon: Shirt,
      color: 'purple',
      features: ['Kumaş Kalitesi', 'Uzunluk Ölçümü', 'Desen Analizi', 'Renk Kontrolü'],
      metrics: { accuracy: '98.9%', speed: '0.3s', meters: '500K+' },
      image: '/images/tesktil.jpeg',
      detailedInfo: {
        overview: 'Tekstil sektörü için özel tasarlanmış MES kalite kontrol sistemi. Kumaş kalitesi, uzunluk ölçümü, desen analizi ve renk tutarlılığı kontrolü.',
        challenges: [
          'Farklı kumaş türlerinin otomatik tanınması',
          'Hassas uzunluk ölçümü ve metraj hesaplama',
          'Desen bozukluklarının tespiti',
          'Renk tutarlılığı ve ton farkı kontrolü'
        ],
        solutions: [
          'Çok spektrumlu görüntüleme ile kumaş analizi',
          'Lazer mesafe ölçüm sistemi ile hassas metraj',
          'Pattern recognition ile desen kontrolü',
          'Renk kalibrasyonu ve spektral analiz'
        ],
        results: [
          { metric: 'Ölçüm Doğruluğu', value: '%99.2 hassasiyet', improvement: '+%65 iyileşme' },
          { metric: 'İşlem Hızı', value: '10x daha hızlı', improvement: '125m/dakika' },
          { metric: 'Fire Oranı', value: '%1.2 azalma', improvement: '-%75 düşüş' },
          { metric: 'Maliyet Tasarrufu', value: '%60 azalma', improvement: 'Yıllık 1.8M₺' }
        ],
        technologies: ['Multi-spectral Imaging', 'Laser Measurement', 'Pattern Recognition', 'Color Analysis'],
        clientTestimonial: {
          quote: 'Hype Vision MES ile tekstil üretimimizde uzunluk ölçüm hatalarımız %90 azaldı. Müşteri memnuniyetimiz rekor seviyede.',
          author: 'Can Özkan',
          position: 'Üretim Koordinatörü',
          company: 'KORTEKS Tekstil A.Ş.'
        }
      }
    },
    {
      id: 'food-safety',
      title: t('solutions.food-safety'),
      description: t('solutions.food-safety.desc'),
      icon: Shield,
      color: 'green',
      features: ['Hijyen Kontrolü', 'Bone/Eldiven Tespiti', 'Temizlik Kontrolü', 'Kalite Analizi'],
      metrics: { accuracy: '99.2%', speed: '0.15s', facilities: '150+' },
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      detailedInfo: {
        overview: 'Gıda sektörü için HACCP ve ISO 22000 uyumlu MES hijyen kontrol sistemi. Personel hijyeni, temizlik standartları ve gıda güvenliği kontrolü.',
        challenges: [
          'Personel hijyen kurallarına uyumun kontrolü',
          'Gıda üretim alanında temizlik standartları',
          'Soğuk zincir ve sıcaklık kontrolü',
          'HACCP ve ISO 22000 uyumluluk takibi'
        ],
        solutions: [
          'Computer vision ile bone, eldiven ve önlük kontrolü',
          'Hijyen protokolü uyum takibi',
          'Sıcaklık sensörleri ile soğuk zincir izleme',
          'Otomatik uyumluluk raporlaması'
        ],
        results: [
          { metric: 'Hijyen Uyumu', value: '%98 uyumluluk', improvement: 'HACCP standartları' },
          { metric: 'Gıda Güvenliği', value: '%90 risk azalması', improvement: 'Halk sağlığı koruması' },
          { metric: 'Denetim Başarısı', value: '%100 geçiş', improvement: 'Tüm denetimlerde başarı' },
          { metric: 'Operasyonel Maliyet', value: '%25 azalma', improvement: 'Süreç optimizasyonu' }
        ],
        technologies: ['Computer Vision', 'Temperature Monitoring', 'Hygiene Analytics', 'Compliance Tracking'],
        clientTestimonial: {
          quote: 'Hype Vision MES ile gıda üretimimizde hijyen kontrolü tamamen otomatikleşti. HACCP denetimlerini %100 başarı ile geçiyoruz.',
          author: 'Dr. Fatma Arslan',
          position: 'Kalite Güvence Müdürü',
          company: 'Gıda Sanayi Ltd. Şti.'
        }
      }
    },
    {
      id: 'manufacturing',
      title: t('solutions.manufacturing'),
      description: t('solutions.manufacturing.desc'),
      icon: Factory,
      color: 'indigo',
      features: ['Hata Tespiti', 'Kalite Kontrolü', 'Süreç İzleme', 'Verimlilik Analizi'],
      metrics: { accuracy: '99.7%', speed: '0.1s', lines: '500+' },
      image: '/images/imalat.jpg',
      detailedInfo: {
        overview: 'İmalat sanayi için kapsamlı MES üretim kontrol sistemi. Hata tespiti, kalite kontrolü, süreç izleme ve verimlilik analizi ile üretimi optimize edin.',
        challenges: [
          'Üretim hatlarında gerçek zamanlı kalite kontrolü',
          'Farklı ürün tiplerinin otomatik tanınması',
          'Süreç verimliliğinin sürekli izlenmesi',
          'Hatalı ürünlerin anında tespit edilmesi'
        ],
        solutions: [
          'Multi-sensor kalite kontrol sistemi',
          'AI destekli ürün sınıflandırması',
          'Real-time process monitoring',
          'Otomatik reject sistemi'
        ],
        results: [
          { metric: 'Kalite Artışı', value: '%92 iyileşme', improvement: 'Hata oranında düşüş' },
          { metric: 'Üretim Verimliliği', value: '%45 artış', improvement: 'OEE skorunda iyileşme' },
          { metric: 'Hatalı Ürün', value: '%78 azalma', improvement: 'Kalite kontrol ile' },
          { metric: 'Operasyonel Maliyet', value: '%35 tasarruf', improvement: 'Süreç optimizasyonu' }
        ],
        technologies: ['Multi-sensor Systems', 'AI Classification', 'Process Monitoring', 'Automated Rejection'],
        clientTestimonial: {
          quote: 'Hype Vision MES ile üretim hatlarımızda kalite kontrolü tamamen otomatikleşti. Hatalı ürün oranımız %78 azaldı.',
          author: 'Okan Demir',
          position: 'Üretim Müdürü',
          company: 'İmalat Sanayi A.Ş.'
        }
      }
    },
    {
      id: 'energy-sector',
      title: t('solutions.energy-sector'),
      description: t('solutions.energy-sector.desc'),
      icon: Zap,
      color: 'yellow',
      features: ['Güvenlik Kontrolü', 'Ekipman İzleme', 'Bakım Planlaması', 'Risk Analizi'],
      metrics: { accuracy: '99.4%', uptime: '99.9%', plants: '75+' },
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      detailedInfo: {
        overview: 'Enerji sektörü için özel geliştirilmiş MES güvenlik ve izleme sistemi. Güneş, rüzgar ve hidroelektrik santrallerde operasyonel güvenlik ve verimlilik.',
        challenges: [
          'Yüksek voltaj alanlarında güvenlik kontrolü',
          'Kritik ekipmanların sürekli izlenmesi',
          'Çevresel risklerin değerlendirilmesi',
          'Öngörülü bakım planlaması'
        ],
        solutions: [
          'Termal görüntüleme ile ekipman sıcaklık izleme',
          'Güvenlik protokolü uyum takibi',
          'Predictive maintenance algoritmaları',
          'Risk skorlama ve erken uyarı sistemi'
        ],
        results: [
          { metric: 'Güvenlik Artışı', value: '%92 iyileşme', improvement: 'İş kazası önleme' },
          { metric: 'Ekipman Uptime', value: '%99.9 çalışma', improvement: 'Öngörülü bakım ile' },
          { metric: 'Bakım Maliyeti', value: '%45 azalma', improvement: 'Planlı bakım' },
          { metric: 'Operasyonel Verimlilik', value: '%25 artış', improvement: 'Süreç optimizasyonu' }
        ],
        technologies: ['Thermal Imaging', 'Predictive Maintenance', 'Safety Monitoring', 'Risk Analytics'],
        clientTestimonial: {
          quote: 'Hype Vision MES ile enerji tesisimizde güvenlik skorumuzu %92 artırdık. Ekipman arızaları %70 azaldı.',
          author: 'Mühendis Okan Demir',
          position: 'Tesis Müdürü',
          company: 'Enerji Üretim A.Ş.'
        }
      }
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'from-red-500 to-red-600',
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600',
      indigo: 'from-indigo-500 to-indigo-600',
      yellow: 'from-yellow-500 to-yellow-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      red: 'text-red-600',
      blue: 'text-blue-600',
      purple: 'text-purple-600',
      green: 'text-green-600',
      indigo: 'text-indigo-600',
      yellow: 'text-yellow-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('solutions.title')}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {t('solutions.title.highlight')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Header */}
              <div className="relative overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white rounded-full p-2 sm:p-3 shadow-lg">
                  <solution.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${getIconColor(solution.color)}`} />
                </div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{solution.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">{solution.description}</p>
                
                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Temel Özellikler:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 bg-gradient-to-r ${getColorClasses(solution.color)}`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-4 sm:mb-6">
                  <div className="grid grid-cols-3 gap-1 sm:gap-2">
                    {Object.entries(solution.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center p-1.5 sm:p-2 bg-gray-50 rounded-lg">
                        <div className={`text-xs sm:text-sm font-bold ${getIconColor(solution.color)}`}>{value}</div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key === 'accuracy' ? 'Doğruluk' : 
                           key === 'speed' ? 'Hız' : 
                           key === 'response' ? 'Yanıt' :
                           key === 'uptime' ? 'Çalışma' :
                           key === 'sites' ? 'Şantiye' :
                           key === 'parts' ? 'Parça' :
                           key === 'meters' ? 'Metre' :
                           key === 'facilities' ? 'Tesis' :
                           key === 'lines' ? 'Hat' :
                           key === 'plants' ? 'Santral' : key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => setSelectedSolution(solution.id)}
                  className={`w-full bg-gradient-to-r ${getColorClasses(solution.color)} text-white py-2 sm:py-3 rounded-lg hover:shadow-lg transition-all duration-200 font-semibold flex items-center justify-center space-x-2 text-sm sm:text-base`}
                >
                  <span>{t('solutions.explore-solution')}</span>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>


        {/* Integration Showcase */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{t('solutions.easy-integration')}</h3>
            <p className="text-lg sm:text-xl text-gray-600">{t('solutions.works-seamlessly')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 mb-4">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-red-600 mx-auto mb-3 sm:mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{t('solutions.secure')}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{t('solutions.secure.desc')}</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 mb-4">
                <Eye className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{t('solutions.fast')}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{t('solutions.fast.desc')}</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 mb-4">
                <Zap className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-purple-600 mx-auto mb-3 sm:mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{t('solutions.scalable')}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{t('solutions.scalable.desc')}</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 mb-4">
                <Building className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-green-600 mx-auto mb-3 sm:mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{t('solutions.reliable')}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{t('solutions.reliable.desc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">{t('solutions.ready-transform')}</h3>
            <p className="text-blue-100 mb-6 text-base sm:text-lg">
              {t('solutions.companies-transformed')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg font-semibold text-center text-sm sm:text-base">
                {t('solutions.free-consultation')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Solution Details */}
      {selectedSolution && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const solution = solutions.find(sol => sol.id === selectedSolution);
              if (!solution) return null;
              
              return (
                <>
                  {/* Modal Header */}
                  <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${
                        solution.color === 'red' ? 'bg-red-100 text-red-600' :
                        solution.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                        solution.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                        solution.color === 'green' ? 'bg-green-100 text-green-600' :
                        solution.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                        'bg-yellow-100 text-yellow-600'
                      }`}>
                        <solution.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{solution.title}</h3>
                        <p className="text-gray-600 mt-1">MES Detaylı Çözüm Bilgileri</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedSolution(null)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      <X className="h-6 w-6 text-gray-500" />
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-8 space-y-8">
                    {/* Overview */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">MES Çözüm Genel Bakış</h4>
                      <p className="text-gray-600 leading-relaxed text-lg">{solution.detailedInfo.overview}</p>
                    </div>

                    {/* Hero Image */}
                    <div className="relative">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-80 object-cover rounded-2xl shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h5 className="text-2xl font-bold">{solution.title}</h5>
                        <p className="text-gray-200 text-lg">{solution.description}</p>
                      </div>
                    </div>

                    {/* Challenges & Solutions */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <AlertTriangle className="h-6 w-6 text-orange-500 mr-3" />
                          Sektörel Zorluklar
                        </h4>
                        <div className="space-y-4">
                          {solution.detailedInfo.challenges.map((challenge, index) => (
                            <div key={index} className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                              <p className="text-gray-700">{challenge}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                          Hype Vision MES Çözümleri
                        </h4>
                        <div className="space-y-4">
                          {solution.detailedInfo.solutions.map((solutionItem, index) => (
                            <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                              <p className="text-gray-700">{solutionItem}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <TrendingUp className="h-6 w-6 text-blue-500 mr-3" />
                        Elde Edilen Sonuçlar
                      </h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {solution.detailedInfo.results.map((result, index) => (
                          <div key={index} className={`p-6 rounded-xl border-2 hover:shadow-lg transition-all duration-300 ${
                            solution.color === 'red' ? 'bg-gradient-to-br from-red-50 to-orange-50 border-red-200' :
                            solution.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200' :
                            solution.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200' :
                            solution.color === 'green' ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200' :
                            solution.color === 'indigo' ? 'bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200' :
                            'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200'
                          }`}>
                            <h5 className="font-semibold text-gray-900 mb-3">{result.metric}</h5>
                            <div className={`text-3xl font-bold mb-2 ${
                              solution.color === 'red' ? 'text-red-600' :
                              solution.color === 'blue' ? 'text-blue-600' :
                              solution.color === 'purple' ? 'text-purple-600' :
                              solution.color === 'green' ? 'text-green-600' :
                              solution.color === 'indigo' ? 'text-indigo-600' :
                              'text-yellow-600'
                            }`}>{result.value}</div>
                            <div className="text-sm text-green-600 font-medium">{result.improvement}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <Cpu className="h-6 w-6 text-purple-500 mr-3" />
                        Kullanılan MES Teknolojileri
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {solution.detailedInfo.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className={`px-4 py-2 rounded-full font-medium hover:scale-105 transition-transform duration-200 ${
                              solution.color === 'red' ? 'bg-red-100 text-red-700' :
                              solution.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                              solution.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                              solution.color === 'green' ? 'bg-green-100 text-green-700' :
                              solution.color === 'indigo' ? 'bg-indigo-100 text-indigo-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features Summary */}
                    <div className={`rounded-xl p-8 text-white ${
                      solution.color === 'red' ? 'bg-gradient-to-r from-red-600 to-orange-600' :
                      solution.color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-indigo-600' :
                      solution.color === 'purple' ? 'bg-gradient-to-r from-purple-600 to-pink-600' :
                      solution.color === 'green' ? 'bg-gradient-to-r from-green-600 to-emerald-600' :
                      solution.color === 'indigo' ? 'bg-gradient-to-r from-indigo-600 to-blue-600' :
                      'bg-gradient-to-r from-yellow-600 to-orange-600'
                    }`}>
                      <h4 className="text-2xl font-bold mb-6 text-center">MES Çözüm Özellikleri</h4>
                      <div className="grid md:grid-cols-4 gap-6 text-center">
                        {solution.features.map((feature, index) => (
                          <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4">
                            <div className="text-2xl font-bold mb-2">
                              {Object.values(solution.metrics)[index] || '99%'}
                            </div>
                            <div className="text-white text-opacity-90 text-sm">{feature}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <Link to="/contact" className={`flex-1 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 text-center block ${
                        solution.color === 'red' ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700' :
                        solution.color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' :
                        solution.color === 'purple' ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' :
                        solution.color === 'green' ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700' :
                        solution.color === 'indigo' ? 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700' :
                        'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700'
                      }`}>
                        Bu MES Çözümünü Talep Et
                      </Link>
                      <Link to="/blog" className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-lg hover:bg-gray-200 transition-all duration-200 font-semibold text-lg text-center block">
                        Teknik Dokümantasyon
                      </Link>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
};

export default Solutions;