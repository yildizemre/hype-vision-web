import React from 'react';
import { Activity, Eye, BarChart3, Cpu, CheckCircle, AlertTriangle, Factory, ArrowRight, Play, TrendingUp, Zap, X, Shield, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProcessMonitoring = () => {
  const [selectedProcess, setSelectedProcess] = React.useState<string | null>(null);
  const { t } = useLanguage();

  const monitoringFeatures = [
    {
      icon: Activity,
      title: 'Gerçek Zamanlı İzleme',
      description: 'Üretim süreçlerini 7/24 izler ve anında müdahale imkanı sağlar.',
      accuracy: '95%',
      color: 'blue'
    },
    {
      icon: Eye,
      title: 'Görsel Süreç Kontrolü',
      description: 'Kameralar ile üretim hatlarını görsel olarak izler ve analiz eder.',
      accuracy: '94%',
      color: 'green'
    },
    {
      icon: BarChart3,
      title: 'Performans Analizi',
      description: 'Süreç performansını analiz eder ve iyileştirme önerileri sunar.',
      accuracy: '94%',
      color: 'purple'
    },
    {
      icon: Cpu,
      title: 'Otomatik Optimizasyon',
      description: 'AI algoritmaları ile süreçleri otomatik olarak optimize eder.',
      accuracy: '94%',
      color: 'orange'
    }
  ];

  const processTypes = [
    {
      id: 'electronics-assembly',
      title: 'Elektronik Montaj Hattı',
      description: 'PCB montaj ve test süreçlerinin görsel izlenmesi',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Komponent Yerleşimi', 'Lehim Kalitesi', 'Test Sonuçları', 'Throughput Analizi'],
      stats: { efficiency: '94%', quality: '94%', speed: '0.1s' },
      detailedInfo: {
        overview: 'Elektronik montaj hatları için özel geliştirilmiş MES süreç izleme sistemi. PCB montaj süreçlerini gerçek zamanlı izler, komponent yerleşimini kontrol eder ve test sonuçlarını analiz eder.',
        challenges: [
          'Yüksek hızlı SMT hatlarında süreç kontrolü',
          'Binlerce küçük komponentin montaj takibi',
          'Lehim kalitesinin süreç içi kontrolü',
          'Test sonuçları ile üretim verilerinin entegrasyonu',
          'Farklı PCB tiplerinin otomatik süreç adaptasyonu'
        ],
        solutions: [
          'Computer vision ile komponent yerleşim izleme',
          'Termal görüntüleme ile lehim süreç kontrolü',
          'Real-time test data integration',
          'AI destekli süreç optimizasyonu',
          'Otomatik süreç parametresi ayarlama'
        ],
        results: [
          { metric: 'Süreç Verimliliği', value: '%94 efficiency', improvement: '+%35 iyileşme' },
          { metric: 'Kalite Kontrolü', value: '%99.2 doğruluk', improvement: '+%45 iyileşme' },
          { metric: 'Üretim Hızı', value: '500 PCB/saat', improvement: '+%60 artış' },
          { metric: 'Hata Tespiti', value: '0.1s response', improvement: '+%400 hızlanma' },
          { metric: 'Süreç Maliyeti', value: '%40 azalma', improvement: 'Optimizasyon ile' },
          { metric: 'Throughput', value: '%55 artış', improvement: 'Süreç iyileştirme' }
        ],
        technologies: ['Computer Vision', 'Thermal Imaging', 'Real-time Integration', 'AI Process Optimization', 'Automated Parameter Control'],
        clientTestimonial: {
          quote: 'Hype Vision MES süreç izleme ile elektronik montaj hatlarımızda verimliliği %35 artırdık. Süreç kontrolü tamamen otomatikleşti ve kalite skorumuz %99.2\'ye ulaştı.',
          author: 'Ahmet Kaya',
          position: 'Üretim Müdürü',
          company: 'Elektronik Sanayi A.Ş.'
        }
      }
    },
    {
      id: 'automotive-production',
      title: 'Otomotiv Üretim Hattı',
      description: 'Araç parçalarının üretim ve montaj süreç kontrolü',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Parça Kontrolü', 'Montaj Doğrulama', 'Boyut Ölçümü', 'Kalite Skoru'],
      stats: { efficiency: '92%', quality: '94%', speed: '0.2s' },
      detailedInfo: {
        overview: 'Otomotiv üretim hatları için geliştirilmiş MES süreç izleme modülü. Motor parçaları, karoseri elemanları ve güvenlik kritik komponentlerin üretim süreçlerini optimize eder.',
        challenges: [
          'Karmaşık otomotiv parçalarının süreç takibi',
          'Yüksek hassasiyet gerektiren montaj süreçleri',
          'Çoklu istasyon süreç koordinasyonu',
          'Kalite kontrol noktalarının entegrasyonu',
          'Just-in-time üretim süreç yönetimi'
        ],
        solutions: [
          '3D vision ile parça orientasyon kontrolü',
          'Multi-station process coordination',
          'Real-time quality gate integration',
          'Predictive process analytics',
          'Automated workflow optimization'
        ],
        results: [
          { metric: 'Üretim Verimliliği', value: '%92 efficiency', improvement: '+%40 iyileşme' },
          { metric: 'Kalite Garantisi', value: '%99.5 doğruluk', improvement: '+%50 iyileşme' },
          { metric: 'Süreç Hızı', value: '0.2s/parça', improvement: '+%250 hızlanma' },
          { metric: 'Montaj Doğruluğu', value: '%98.8 başarı', improvement: '+%65 iyileşme' },
          { metric: 'Operasyonel Maliyet', value: '%35 azalma', improvement: 'Süreç optimizasyonu' },
          { metric: 'Müşteri Memnuniyeti', value: '%85 artış', improvement: 'Kalite güvencesi' }
        ],
        technologies: ['3D Vision Systems', 'Multi-station Coordination', 'Quality Gate Integration', 'Predictive Analytics', 'Workflow Optimization'],
        clientTestimonial: {
          quote: 'Hype Vision MES süreç izleme ile otomotiv üretim hatlarımızda verimliliği %40 artırdık. Süreç koordinasyonu mükemmel ve kalite garantimiz %99.5\'e ulaştı.',
          author: 'Mehmet Özkan',
          position: 'Üretim Direktörü',
          company: 'Otomotiv Sanayi A.Ş.'
        }
      }
    },
    {
      id: 'textile-production',
      title: 'Tekstil Üretim Hattı',
      description: 'Kumaş üretimi ve kalite kontrol süreçlerinin izlenmesi',
      image: '/images/tesktil.jpeg',
      features: ['Kumaş Kalitesi', 'Uzunluk Ölçümü', 'Desen Kontrolü', 'Renk Analizi'],
      stats: { efficiency: '89%', quality: '94%', speed: '0.3s' },
      detailedInfo: {
        overview: 'Tekstil üretim süreçleri için özelleştirilmiş MES izleme sistemi. Kumaş kalitesi, uzunluk ölçümü, desen kontrolü ve renk analizi ile tekstil üretimini optimize eder.',
        challenges: [
          'Farklı kumaş türlerinin süreç adaptasyonu',
          'Hassas uzunluk ölçümü ve metraj takibi',
          'Desen tekrarı ve kalite kontrolü',
          'Renk tutarlılığı süreç izleme',
          'Yüksek hızlı dokuma süreç kontrolü'
        ],
        solutions: [
          'Multi-spectral imaging ile kumaş analizi',
          'Lazer mesafe ölçüm sistemi entegrasyonu',
          'Pattern recognition ile desen kontrolü',
          'Color consistency monitoring',
          'Real-time process parameter adjustment'
        ],
        results: [
          { metric: 'Süreç Verimliliği', value: '%89 efficiency', improvement: '+%30 iyileşme' },
          { metric: 'Kumaş Kalitesi', value: '%98.9 doğruluk', improvement: '+%55 iyileşme' },
          { metric: 'Ölçüm Hassasiyeti', value: '±1mm doğruluk', improvement: '+%80 iyileşme' },
          { metric: 'Süreç Hızı', value: '125m/dakika', improvement: '+%70 artış' },
          { metric: 'Fire Oranı', value: '%75 azalma', improvement: 'Kalite kontrolü ile' },
          { metric: 'Maliyet Tasarrufu', value: '%60 azalma', improvement: 'Süreç optimizasyonu' }
        ],
        technologies: ['Multi-spectral Imaging', 'Laser Measurement', 'Pattern Recognition', 'Color Monitoring', 'Process Parameter Control'],
        clientTestimonial: {
          quote: 'Hype Vision MES süreç izleme ile tekstil üretimimizde kalite kontrolü %55 iyileşti. Kumaş fire oranımız %75 azaldı ve üretim hızımız %70 arttı.',
          author: 'Ayşe Demir',
          position: 'Süreç Geliştirme Uzmanı',
          company: 'Tekstil Fabrikası A.Ş.'
        }
      }
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Verimlilik Artışı',
      description: 'Süreç optimizasyonu ile üretim verimliliğini %40 artırır',
      metric: '%40 Artış'
    },
    {
      icon: Eye,
      title: 'Kalite İyileştirmesi',
      description: 'Görsel kontrol ile kalite problemlerini %75 azaltır',
      metric: '%75 Azalma'
    },
    {
      icon: Zap,
      title: 'Hızlı Müdahale',
      description: 'Problemleri anında tespit eder ve müdahale süresini kısaltır',
      metric: '< 30 saniye'
    },
    {
      icon: Factory,
      title: 'Maliyet Tasarrufu',
      description: 'Süreç optimizasyonu ile operasyonel maliyetleri %25 azaltır',
      metric: '%25 Tasarruf'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <Activity className="h-4 w-4" />
                <span>MES Süreç İzleme</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Üretim Süreçlerini
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Görsel İzleme</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Görüntü işleme teknolojisi ile üretim süreçlerini gerçek zamanlı izleyin. 
                Performans analizi, kalite kontrolü ve süreç optimizasyonu ile verimliliği maksimuma çıkarın.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span className="font-semibold">Süreç İzleme Demo</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">Süreç Analizi</span>
                </button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">İzlenen Süreç</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">İzleme Doğruluğu</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">%40</div>
                  <div className="text-sm text-gray-600">Verimlilik Artışı</div>
                </div>
              </div>
            </div>

            {/* Live Process Dashboard */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-green-50 px-6 py-4 border-b border-green-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Canlı Süreç İzleme Paneli</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600">CANLI</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-600 font-medium">Aktif Süreç</p>
                        <p className="text-2xl font-bold text-green-900">12</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-orange-600 font-medium">Optimizasyon</p>
                        <p className="text-2xl font-bold text-orange-900">3</p>
                      </div>
                      <TrendingUp className="h-8 w-8 text-orange-600" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Süreç Durumu</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <Factory className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Elektronik Montaj - Normal</p>
                        <p className="text-xs text-gray-600">Verimlilik: %94</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Eye className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Kalite Kontrol - Aktif</p>
                        <p className="text-xs text-gray-600">Skor: %98.7</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Günlük Performans</span>
                    <span className="text-lg font-bold text-green-600">92.4%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{ width: '92.4%' }}></div>
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
              Süreç İzleme <span className="text-green-600">Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Görüntü işleme teknolojisi ile üretim süreçlerini optimize eden gelişmiş özellikler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {monitoringFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  feature.color === 'green' ? 'bg-green-100 text-green-600' :
                  feature.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Doğruluk Oranı</span>
                  <span className={`text-sm font-bold ${
                    feature.color === 'blue' ? 'text-blue-600' :
                    feature.color === 'green' ? 'text-green-600' :
                    feature.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`}>{feature.accuracy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              İzlenen <span className="text-green-600">Süreç Türleri</span>
            </h2>
            <p className="text-xl text-gray-600">
              Farklı üretim süreçleri için özelleştirilmiş izleme çözümleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">İzleme Özellikleri:</p>
                    <div className="grid grid-cols-2 gap-1">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 rounded-full mr-2 bg-green-500"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(type.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-sm font-bold text-green-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200">
                    <button 
                      onClick={() => setSelectedProcess(type.id)}
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Süreç Detayları</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Süreç İzleme <span className="text-green-600">Faydaları</span>
            </h2>
            <p className="text-xl text-gray-600">
              MES süreç izleme sistemi ile elde edeceğiniz somut faydalar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-green-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{benefit.description}</p>
                
                <div className="text-2xl font-bold text-green-600">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Üretim Süreçlerinizi Optimize Edin
          </h2>
          <p className="text-green-100 text-lg mb-8">
            MES Süreç İzleme ile verimlilik artışını %40'a çıkarın ve kalite problemlerini %75 azaltın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold">
              Süreç İzleme Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-200 font-semibold">
              Optimizasyon Rehberi
            </button>
          </div>
        </div>
      </section>

      {/* Modal for Process Details */}
      {selectedProcess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const process = processTypes.find(p => p.id === selectedProcess);
              if (!process) return null;
              
              return (
                <>
                  {/* Modal Header */}
                  <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{process.title}</h3>
                      <p className="text-gray-600 mt-1">MES Süreç İzleme Detaylı Çözüm Bilgileri</p>
                    </div>
                    <button
                      onClick={() => setSelectedProcess(null)}
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
                        <Activity className="h-6 w-6 text-green-600 mr-3" />
                        MES Süreç İzleme Genel Bakış
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-lg">{process.detailedInfo.overview}</p>
                    </div>

                    {/* Hero Image */}
                    <div className="relative">
                      <img
                        src={process.image}
                        alt={process.title}
                        className="w-full h-80 object-cover rounded-2xl shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h5 className="text-2xl font-bold">{process.title}</h5>
                        <p className="text-gray-200 text-lg">{process.description}</p>
                      </div>
                    </div>

                    {/* Challenges & Solutions */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                          Süreç İzleme Zorlukları
                        </h4>
                        <div className="space-y-4">
                          {process.detailedInfo.challenges.map((challenge, index) => (
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
                          Hype Vision Süreç Çözümleri
                        </h4>
                        <div className="space-y-4">
                          {process.detailedInfo.solutions.map((solution, index) => (
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
                        Elde Edilen Süreç Sonuçları
                      </h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {process.detailedInfo.results.map((result, index) => (
                          <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300">
                            <h5 className="font-semibold text-gray-900 mb-3">{result.metric}</h5>
                            <div className="text-3xl font-bold text-green-600 mb-2">{result.value}</div>
                            <div className="text-sm text-blue-600 font-medium">{result.improvement}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <Zap className="h-5 w-5 text-purple-500 mr-2" />
                        Kullanılan MES Süreç Teknolojileri
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {process.detailedInfo.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium hover:bg-purple-200 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Process Metrics Summary */}
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white">
                      <h4 className="text-xl font-bold mb-6 text-center">Anahtar Süreç Performans Göstergeleri</h4>
                      <div className="grid md:grid-cols-4 gap-6 text-center">
                        {process.features.map((feature, index) => (
                          <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4">
                            <div className="text-2xl font-bold mb-2">
                              {index === 0 ? Object.values(process.stats)[0] : 
                               index === 1 ? Object.values(process.stats)[1] : 
                               index === 2 ? Object.values(process.stats)[2] : '24/7'}
                            </div>
                            <div className="text-green-100 text-sm">{feature}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <button className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 font-semibold text-lg">
                        Bu MES Süreç Çözümünü Talep Et
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

export default ProcessMonitoring;