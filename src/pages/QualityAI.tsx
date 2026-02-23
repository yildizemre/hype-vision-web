import React from 'react';
import { Eye, Cpu, Zap, CheckCircle, AlertTriangle, Camera, BarChart3, ArrowRight, Play, X, Shield, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const QualityAI = () => {
  const [selectedIndustry, setSelectedIndustry] = React.useState<string | null>(null);
  const { t } = useLanguage();

  const qualityFeatures = [
    {
      icon: Eye,
      title: 'Hata Tespiti',
      description: 'Üretim hatlarında otomatik hata tespiti ve kalite analizi ile mükemmel ürünler üretin.',
      accuracy: '95%',
      color: 'blue'
    },
    {
      icon: Cpu,
      title: 'Boyut Kontrolü',
      description: 'Ürün boyutlarını hassas şekilde ölçer ve tolerans dışı ürünleri anında tespit eder.',
      accuracy: '94%',
      color: 'purple'
    },
    {
      icon: Zap,
      title: 'Yüzey Analizi',
      description: 'Yüzey kusurları, çizikler ve renk tutarsızlıklarını gerçek zamanlı olarak analiz eder.',
      accuracy: '94%',
      color: 'green'
    },
    {
      icon: BarChart3,
      title: 'Kalite Raporlama',
      description: 'Detaylı kalite raporları ve istatistikler ile sürekli iyileştirme sağlar.',
      accuracy: '96%',
      color: 'indigo'
    }
  ];

  const industries = [
    {
      id: 'automotive',
      title: 'Otomotiv Sektörü',
      description: 'Araç parçalarında hata tespiti, boyut kontrolü ve montaj doğrulaması',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Parça Kontrolü', 'Boyut Ölçümü', 'Montaj Doğrulama', 'Yüzey Analizi'],
      stats: { accuracy: '94%', speed: '0.2s', parts: '1M+' },
      detailedInfo: {
        overview: 'Otomotiv sektörü için özel geliştirilmiş MES kalite kontrol sistemi. Motor parçaları, karoseri elemanları ve güvenlik kritik komponentlerin hassas kalite kontrolü ile üretim standardını maksimuma çıkarır.',
        challenges: [
          'Yüksek hassasiyet gerektiren boyut toleransları (±0.01mm)',
          'Karmaşık geometrili parçaların 3D kalite analizi',
          'Yüzey kalitesi ve pürüzsüzlük kontrolü',
          'Farklı malzeme türlerinin otomatik tanınması ve sınıflandırması',
          'Yüksek hızlı üretim hatlarında gerçek zamanlı kalite kontrolü'
        ],
        solutions: [
          '3D lazer tarama teknolojisi ile mikron hassasiyetinde boyut ölçümü',
          'AI destekli yüzey kalitesi analizi ve kusur tespiti',
          'Çoklu açı kamera sistemi ile 360° parça kontrolü',
          'Deep learning ile malzeme sınıflandırması ve özellik tanıma',
          'Edge computing ile milisaniye seviyesinde hızlı işleme'
        ],
        results: [
          { metric: 'Boyut Doğruluğu', value: '±0.01mm hassasiyet', improvement: '+%80 iyileşme' },
          { metric: 'Kontrol Hızı', value: '0.2s/parça', improvement: '+%300 hızlanma' },
          { metric: 'Hatalı Parça Tespiti', value: '%99.5 doğruluk', improvement: '-%90 hata kaçırma' },
          { metric: 'Üretim Verimliliği', value: '%96 OEE', improvement: '+%35 artış' },
          { metric: 'Kalite Maliyeti', value: '%45 azalma', improvement: 'Yıllık 3.2M₺ tasarruf' },
          { metric: 'Müşteri Şikayeti', value: '%92 azalma', improvement: 'Kalite güvencesi' }
        ],
        technologies: ['3D Laser Scanning', 'Multi-angle Computer Vision', 'AI Classification', 'Edge Computing', 'Real-time Processing', 'Predictive Quality Analytics'],
        clientTestimonial: {
          quote: 'Hype Vision MES kalite sistemi ile otomotiv parça üretimimizde kalite standartlarımızı %40 yükselttik. Müşteri şikayetleri %92 azaldı ve üretim verimliliğimiz %35 arttı. Artık her parça mükemmel kalitede.',
          author: 'Mehmet Özkan',
          position: 'Kalite Direktörü',
          company: 'TOFAŞ Otomotiv Sanayi A.Ş.'
        }
      }
    },
    {
      id: 'electronics',
      title: 'Elektronik Üretimi',
      description: 'PCB kontrolü, komponent yerleşimi ve lehim kalitesi analizi',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['PCB Kontrolü', 'Komponent Tespiti', 'Lehim Kalitesi', 'Devre Analizi'],
      stats: { accuracy: '95%', speed: '0.1s', boards: '500K+' },
      detailedInfo: {
        overview: 'Elektronik üretim sektörü için geliştirilmiş MES kalite kontrol modülü. PCB montaj hatları, komponent yerleşimi ve lehim kalitesi kontrolü ile elektronik üretimde mükemmellik sağlar.',
        challenges: [
          'PCB üzerinde binlerce küçük komponentin doğru yerleşim kontrolü',
          'Lehim kalitesinin mikroskobik seviyede analizi',
          'Farklı PCB tiplerinin otomatik tanınması',
          'Yüksek hızlı SMT hatlarında gerçek zamanlı kontrol',
          'Elektriksel test sonuçları ile görsel kontrolün entegrasyonu'
        ],
        solutions: [
          'Yüksek çözünürlüklü makro lensler ile mikroskobik detay analizi',
          'Deep learning algoritmaları ile komponent tanıma ve yerleşim kontrolü',
          'Termal görüntüleme ile lehim kalitesi ve sıcaklık analizi',
          'AOI (Automated Optical Inspection) teknolojisi entegrasyonu',
          'Machine learning ile PCB tipi otomatik sınıflandırması'
        ],
        results: [
          { metric: 'Komponent Doğruluğu', value: '%99.7 hassasiyet', improvement: '+%85 iyileşme' },
          { metric: 'Lehim Kalite Kontrolü', value: '%99.2 doğruluk', improvement: '+%70 iyileşme' },
          { metric: 'Üretim Hızı', value: '500 PCB/saat', improvement: '+%60 artış' },
          { metric: 'Hata Tespiti', value: '0.1s/PCB', improvement: '+%400 hızlanma' },
          { metric: 'Kalite Maliyeti', value: '%50 azalma', improvement: 'Yıllık 2.8M₺ tasarruf' },
          { metric: 'Rework Oranı', value: '%88 azalma', improvement: 'Kalite güvencesi' }
        ],
        technologies: ['High-Resolution Macro Imaging', 'Thermal Analysis', 'Deep Learning', 'AOI Integration', 'Machine Learning Classification', 'Real-time Processing'],
        clientTestimonial: {
          quote: 'Hype Vision MES ile elektronik üretimimizde PCB kalite kontrolü tamamen otomatikleşti. Lehim kalitesi kontrolümüz %99.2 doğruluğa ulaştı ve üretim hızımız %60 arttı. Rework maliyetlerimiz %88 azaldı.',
          author: 'Dr. Elif Kaya',
          position: 'Ar-Ge Direktörü',
          company: 'Elektronik Sanayi A.Ş.'
        }
      }
    },
    {
      id: 'food-safety',
      title: 'Gıda Sektörü',
      description: 'Gıda kalitesi, ambalaj kontrolü ve hijyen standartları',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Kalite Kontrolü', 'Ambalaj Tespiti', 'Hijyen Kontrolü', 'Tazelik Analizi'],
      stats: { accuracy: '94%', speed: '0.15s', products: '2M+' },
      detailedInfo: {
        overview: 'Gıda sektörü için HACCP ve ISO 22000 uyumlu MES kalite kontrol sistemi. Personel hijyeni, gıda kalitesi, ambalaj kontrolü ve güvenlik standartları ile halk sağlığını korur.',
        challenges: [
          'Personel hijyen kurallarına uyumun sürekli kontrolü',
          'Gıda kalitesi ve tazelik seviyesinin objektif ölçümü',
          'Ambalaj bütünlüğü ve etiket doğruluğu kontrolü',
          'Soğuk zincir ve sıcaklık kontrolü',
          'HACCP, ISO 22000 ve BRC standartlarına uyumluluk'
        ],
        solutions: [
          'Computer vision ile bone, eldiven ve önlük kontrolü',
          'Spektral analiz ile gıda kalitesi ve tazelik tespiti',
          'Barcode/QR kod okuma ile ambalaj doğrulama',
          'IoT sensörler ile sıcaklık ve nem izleme',
          'Otomatik uyumluluk raporlaması ve audit trail'
        ],
        results: [
          { metric: 'Hijyen Uyumu', value: '%98 uyumluluk', improvement: 'HACCP standartları' },
          { metric: 'Gıda Güvenliği', value: '%90 risk azalması', improvement: 'Halk sağlığı koruması' },
          { metric: 'Kalite Kontrolü', value: '%99.2 doğruluk', improvement: '+%75 iyileşme' },
          { metric: 'Denetim Başarısı', value: '%100 geçiş', improvement: 'Tüm denetimlerde başarı' },
          { metric: 'Operasyonel Maliyet', value: '%25 azalma', improvement: 'Süreç optimizasyonu' },
          { metric: 'Müşteri Güveni', value: '%85 artış', improvement: 'Kalite güvencesi' }
        ],
        technologies: ['Computer Vision', 'Spectral Analysis', 'IoT Temperature Monitoring', 'Barcode Recognition', 'Hygiene Analytics', 'Compliance Automation'],
        clientTestimonial: {
          quote: 'Hype Vision MES ile gıda üretimimizde hijyen kontrolü tamamen otomatikleşti. HACCP denetimlerini %100 başarı ile geçiyoruz ve gıda güvenlik risklerimiz %90 azaldı. Müşteri güvenimiz rekor seviyede.',
          author: 'Dr. Fatma Arslan',
          position: 'Kalite Güvence Müdürü',
          company: 'Gıda Sanayi Ltd. Şti.'
        }
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Eye className="h-4 w-4" />
                <span>Hype Vision Quality AI</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Kalite Kontrol için
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Yapay Zeka</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Gelişmiş yapay zeka ile üretim hatlarında otomatik hata tespiti ve kalite analizi. 
                Mükemmel ürünler için gerçek zamanlı kalite kontrolü.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span className="font-semibold">Ücretsiz Demo</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold">Demo Video</span>
                </button>
              </div>
            </div>

            {/* Live Quality Dashboard */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-blue-50 px-6 py-4 border-b border-blue-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Canlı Kalite Paneli</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600">CANLI</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-600 font-medium">Kaliteli Ürün</p>
                        <p className="text-2xl font-bold text-green-900">95%</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-red-600 font-medium">Hatalı Ürün</p>
                        <p className="text-2xl font-bold text-red-900">1.3%</p>
                      </div>
                      <AlertTriangle className="h-8 w-8 text-red-600" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Son Tespit Edilen Hatalar</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                      <Eye className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Boyut Hatası - Hat 2</p>
                        <p className="text-xs text-gray-600">1 dakika önce</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                      <Cpu className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Yüzey Kusuru - Hat 1</p>
                        <p className="text-xs text-gray-600">3 dakika önce</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Günlük Kalite Skoru</span>
                    <span className="text-lg font-bold text-blue-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kalite Kontrol <span className="text-blue-600">Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yapay zeka destekli kalite kontrol çözümlerimiz ile üretim kalitesini maksimum seviyeye çıkarın
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  feature.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  feature.color === 'green' ? 'bg-green-100 text-green-600' :
                  'bg-indigo-100 text-indigo-600'
                }`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Doğruluk Oranı</span>
                  <span className={`text-sm font-bold ${
                    feature.color === 'blue' ? 'text-blue-600' :
                    feature.color === 'purple' ? 'text-purple-600' :
                    feature.color === 'green' ? 'text-green-600' :
                    'text-indigo-600'
                  }`}>{feature.accuracy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sektörel <span className="text-blue-600">Uygulamalar</span>
            </h2>
            <p className="text-xl text-gray-600">
              Farklı sektörlerde kanıtlanmış kalite kontrol çözümleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Özellikler:</p>
                    <div className="grid grid-cols-2 gap-1">
                      {industry.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 rounded-full mr-2 bg-blue-500"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(industry.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-sm font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                    <button 
                      onClick={() => setSelectedIndustry(industry.id)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Detayları Görüntüle</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Integration */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Kolay API Entegrasyonu</h2>
            <p className="text-gray-300 text-lg">Sadece birkaç satır kod ile başlayın</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm">Python</span>
            </div>
            
            <pre className="text-green-400 text-sm overflow-x-auto">
{`import hypevision

# Kalite kontrol istemcisini başlat
client = hypevision.QualityDetector(api_key="your_api_key")

# Hata tespiti yap
result = client.detect_defects("product_image.jpg")

# Sonuçları al
if result.defects_found:
    print(f"Hata tespit edildi: {result.defect_types}")
    print(f"Kalite skoru: {result.quality_score:.2f}")
else:
    print("Ürün kaliteli - Hata bulunamadı")`}
            </pre>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
              API Dokümantasyonu
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Üretim Kalitenizi Bir Sonraki Seviyeye Taşıyın
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Hype Vision Quality ile hata oranınızı %78 azaltın ve kalite skorunuzu %92 artırın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold">
              Ücretsiz Demo Talep Et
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold">
              Fiyat Bilgisi Al
            </button>
          </div>
        </div>
      </section>

      {/* Modal for Industry Details */}
      {selectedIndustry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const industry = industries.find(ind => ind.id === selectedIndustry);
              if (!industry) return null;
              
              return (
                <>
                  {/* Modal Header */}
                  <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{industry.title}</h3>
                      <p className="text-gray-600 mt-1">MES Kalite Kontrol Detaylı Çözüm Bilgileri</p>
                    </div>
                    <button
                      onClick={() => setSelectedIndustry(null)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      <X className="h-6 w-6 text-gray-500" />
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-8 space-y-8">
                    {/* Overview */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <Eye className="h-6 w-6 text-blue-600 mr-3" />
                        MES Kalite Kontrol Genel Bakış
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-lg">{industry.detailedInfo.overview}</p>
                    </div>

                    {/* Hero Image */}
                    <div className="relative">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-80 object-cover rounded-2xl shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h5 className="text-2xl font-bold">{industry.title}</h5>
                        <p className="text-gray-200 text-lg">{industry.description}</p>
                      </div>
                    </div>

                    {/* Challenges & Solutions */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                          Sektörel Kalite Zorlukları
                        </h4>
                        <div className="space-y-4">
                          {industry.detailedInfo.challenges.map((challenge, index) => (
                            <div key={index} className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                              <p className="text-gray-700">{challenge}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          Hype Vision Kalite Çözümleri
                        </h4>
                        <div className="space-y-4">
                          {industry.detailedInfo.solutions.map((solution, index) => (
                            <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                              <p className="text-gray-700">{solution}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <TrendingUp className="h-6 w-6 text-blue-500 mr-3" />
                        Elde Edilen Kalite Sonuçları
                      </h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industry.detailedInfo.results.map((result, index) => (
                          <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                            <h5 className="font-semibold text-gray-900 mb-3">{result.metric}</h5>
                            <div className="text-3xl font-bold text-blue-600 mb-2">{result.value}</div>
                            <div className="text-sm text-green-600 font-medium">{result.improvement}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <Zap className="h-5 w-5 text-purple-500 mr-2" />
                        Kullanılan MES Kalite Teknolojileri
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {industry.detailedInfo.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium hover:bg-purple-200 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Quality Metrics Summary */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                      <h4 className="text-xl font-bold mb-6 text-center">Anahtar Kalite Performans Göstergeleri</h4>
                      <div className="grid md:grid-cols-4 gap-6 text-center">
                        {industry.features.map((feature, index) => (
                          <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4">
                            <div className="text-2xl font-bold mb-2">
                              {index === 0 ? Object.values(industry.stats)[0] : 
                               index === 1 ? Object.values(industry.stats)[1] : 
                               index === 2 ? Object.values(industry.stats)[2] : '24/7'}
                            </div>
                            <div className="text-blue-100 text-sm">{feature}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold text-lg">
                        Bu MES Kalite Çözümünü Talep Et
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-lg hover:bg-gray-200 transition-all duration-200 font-semibold text-lg">
                        Teknik Dokümantasyon
                      </button>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default QualityAI;