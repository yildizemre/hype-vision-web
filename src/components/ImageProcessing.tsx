import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Factory, Eye, BarChart3, Cpu, Upload, Play, CheckCircle, AlertTriangle, Camera, Activity, X, ArrowRight, Zap, Shield, TrendingUp, Database, Server, Building2, Cloud, FileCode } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ImageProcessing = () => {
  const [activeTab, setActiveTab] = useState('production');
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null);
  const { t } = useLanguage();

  const processingFeatures = [
    {
      id: 'production',
      title: 'Üretim İzleme',
      icon: Factory,
      description: 'Üretim hatlarını görüntü işleme ile gerçek zamanlı izleme ve süreç kontrolü',
      color: 'blue',
      features: [
        'Üretim hızı takibi',
        'Makine durumu izleme',
        'İş emri takibi',
        'Kaynak kullanım analizi'
      ]
    },
    {
      id: 'quality',
      title: 'Kalite Kontrol',
      icon: Eye,
      description: 'Görüntü işleme ile otomatik kalite kontrolü ve hata tespiti',
      color: 'green',
      features: ['Yüzey hata tespiti', 'Boyut ölçümü', 'Renk analizi', 'Şekil kontrolü']
    },
    {
      id: 'analytics',
      title: 'Üretim Analizi',
      icon: BarChart3,
      description: 'Üretim verilerinin analizi ve performans optimizasyonu',
      color: 'purple',
      features: ['Verimlilik analizi', 'Trend tespiti', 'Darboğaz analizi', 'Kapasite planlaması']
    }
  ];

  const useCases = [
    {
      id: 'electronics',
      title: 'Elektronik Üretimi',
      description: 'PCB ve elektronik komponent üretiminde kalite kontrolü',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      metrics: { accuracy: '94%', speed: '0.1s', boards: '50K+' },
      detailedInfo: {
        overview: 'Elektronik üretim sektöründe PCB montaj hatları, komponent yerleşimi ve lehim kalitesi kontrolü için geliştirilmiş özel MES çözümü.',
        challenges: [
          'PCB üzerinde binlerce küçük komponentin doğru yerleşimi',
          'Lehim kalitesinin mikroskobik seviyede kontrolü',
          'Yüksek hızlı üretim hatlarında gerçek zamanlı kontrol',
          'Farklı PCB tiplerinin otomatik tanınması'
        ],
        solutions: [
          'Yüksek çözünürlüklü makro lensler ile mikroskobik detay analizi',
          'Deep learning algoritmaları ile komponent tanıma ve yerleşim kontrolü',
          'Termal görüntüleme ile lehim kalitesi analizi',
          'Edge computing ile milisaniye seviyesinde hızlı işleme'
        ],
        results: [
          { metric: 'Hata Tespiti', value: '%94 doğruluk', improvement: '+%45 iyileşme' },
          { metric: 'Üretim Hızı', value: '500 PCB/saat', improvement: '+%60 artış' },
          { metric: 'Kalite Skoru', value: '%95', improvement: '+%25 iyileşme' },
          { metric: 'Maliyet Tasarrufu', value: '%35 azalma', improvement: 'Yıllık 2.5M₺' }
        ],
        technologies: ['Computer Vision', 'Deep Learning', 'Edge Computing', 'Thermal Imaging'],
        clientTestimonial: {
          quote: 'Hype Vision MES sistemi ile PCB üretimimizde kalite kontrolü tamamen otomatikleşti. Hata oranımız %85 azaldı.',
          author: 'Ahmet Yılmaz',
          position: 'Üretim Müdürü',
          company: 'TechElektronik A.Ş.'
        }
      }
    },
    {
      id: 'automotive',
      title: 'Otomotiv Parça Üretimi',
      description: 'Araç parçalarında hata tespiti, boyut kontrolü ve montaj doğrulaması',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      metrics: { accuracy: '95%', speed: '0.2s', parts: '100K+' },
      detailedInfo: {
        overview: 'Otomotiv sektöründe motor parçaları, karoseri elemanları ve güvenlik kritik komponentlerin kalite kontrolü için özelleştirilmiş MES sistemi.',
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
          quote: 'Otomotiv parça üretimimizde Hype Vision MES ile kalite standartlarımızı %40 yükselttik. Müşteri şikayetleri neredeyse sıfırlandı.',
          author: 'Mehmet Özkan',
          position: 'Kalite Direktörü',
          company: 'OtoParça Sanayi Ltd.'
        }
      }
    },
    {
      id: 'textile',
      title: 'Tekstil Üretimi',
      description: 'Kumaş kalitesi ve uzunluk ölçümü kontrolü',
      image: '/images/tesktil.jpeg',
      metrics: { accuracy: '94%', speed: '0.3s', meters: '200K+' },
      detailedInfo: {
        overview: 'Tekstil sektöründe kumaş kalite kontrolü, uzunluk ölçümü, desen analizi ve renk tutarlılığı için geliştirilmiş özel MES çözümü.',
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
          { metric: 'Ölçüm Doğruluğu', value: '%94 hassasiyet', improvement: '+%65 iyileşme' },
          { metric: 'İşlem Hızı', value: '10x daha hızlı', improvement: '125m/dakika' },
          { metric: 'Fire Oranı', value: '%1.2 azalma', improvement: '-%75 düşüş' },
          { metric: 'Maliyet Tasarrufu', value: '%60 azalma', improvement: 'Yıllık 1.8M₺' }
        ],
        technologies: ['Multi-spectral Imaging', 'Laser Measurement', 'Pattern Recognition', 'Color Analysis'],
        clientTestimonial: {
          quote: 'Tekstil üretimimizde Hype Vision MES ile uzunluk ölçüm hatalarımız %90 azaldı. Müşteri memnuniyetimiz rekor seviyede.',
          author: 'Ayşe Demir',
          position: 'Üretim Koordinatörü',
          company: 'Tekstil Fabrikası A.Ş.'
        }
      }
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-600',
      green: 'bg-green-50 border-green-200 text-green-600',
      purple: 'bg-purple-50 border-purple-200 text-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            MES Görüntü İşleme
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Modülleri</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Üretim süreçlerinde görüntü işleme teknolojisi ile kalite kontrol ve süreç optimizasyonu
          </p>
        </div>

        {/* Processing Features Tabs */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-wrap justify-center mb-6 sm:mb-8 gap-2 px-1">
            {processingFeatures.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`flex items-center justify-center sm:justify-start space-x-2 px-4 sm:px-6 py-3 sm:py-3 rounded-lg transition-all duration-200 text-sm sm:text-base min-h-[44px] ${
                  activeTab === feature.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <feature.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-medium">{feature.title}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          {processingFeatures.map((feature) => (
            activeTab === feature.id && (
              <div key={feature.id} className="bg-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div>
                    <div className={`inline-flex p-3 rounded-xl mb-6 ${getColorClasses(feature.color)}`}>
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <div className="space-y-3">
                      {feature.features.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Demo Interface */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">MES Modül Demo</h4>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-600">Aktif</span>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden mb-4 bg-gray-100 aspect-video max-h-52 sm:max-h-64">
                      {activeTab === 'production' && (
                        <img
                          src="/images/uretim.png"
                          alt="Üretim İzleme - Üretim hatlarını görüntü işleme ile gerçek zamanlı izleme"
                          className="w-full h-full object-cover"
                        />
                      )}
                      {activeTab === 'quality' && (
                        <img
                          src="/images/kalite.png"
                          alt="Kalite Kontrol - Görüntü işleme ile otomatik kalite kontrolü ve hata tespiti"
                          className="w-full h-full object-cover"
                        />
                      )}
                      {activeTab === 'analytics' && (
                        <img
                          src="/images/performans.png"
                          alt="Üretim Analizi - Üretim verilerinin analizi ve performans optimizasyonu"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-gray-100 rounded p-2 text-center">
                        <div className="text-lg font-bold text-gray-900">95%</div>
                        <div className="text-xs text-gray-600">Doğruluk</div>
                      </div>
                      <div className="bg-gray-100 rounded p-2 text-center">
                        <div className="text-lg font-bold text-gray-900">0.1s</div>
                        <div className="text-xs text-gray-600">Hız</div>
                      </div>
                      <div className="bg-gray-100 rounded p-2 text-center">
                        <div className="text-lg font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-600">Aktif</div>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2">
                      <Play className="h-4 w-4" />
                      <span>Analizi Başlat</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Use Cases */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">MES Uygulama Alanları</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white rounded-full p-1.5 sm:p-2 shadow-md">
                    <Factory className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{useCase.title}</h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">{useCase.description}</p>
                  
                  <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-4">
                    <div className="text-center">
                      <div className="text-xs sm:text-sm font-bold text-green-600">{useCase.metrics.accuracy}</div>
                      <div className="text-xs text-gray-500">Doğruluk</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs sm:text-sm font-bold text-blue-600">{useCase.metrics.speed}</div>
                      <div className="text-xs text-gray-500">Hız</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs sm:text-sm font-bold text-purple-600">{Object.values(useCase.metrics)[2]}</div>
                      <div className="text-xs text-gray-500">
                        {Object.keys(useCase.metrics)[2] === 'boards' ? 'PCB' : 
                         Object.keys(useCase.metrics)[2] === 'parts' ? 'Parça' : 'Metre'}
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedUseCase(useCase.id)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <span>Detayları Görüntüle</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ERP/CRM Entegrasyonu */}
        <div className="bg-slate-900 rounded-3xl overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">ERP/CRM Entegrasyonu</h3>
              <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
                Mevcut ERP ve CRM sistemlerinizle tek entegrasyon noktası üzerinden veri senkronizasyonu
              </p>
            </div>

            {/* Desteklenen sistemler */}
            <div className="mb-8 sm:mb-10">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Desteklenen sistemler</h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { name: 'SAP ERP', desc: 'Üretim emirleri, stok ve sipariş entegrasyonu', icon: Database, color: 'text-blue-400' },
                  { name: 'Oracle', desc: 'Veritabanı ve iş süreçleri entegrasyonu', icon: Server, color: 'text-red-400' },
                  { name: 'Microsoft Dynamics', desc: 'Dynamics 365 entegrasyonu', icon: Building2, color: 'text-amber-400' },
                  { name: 'Salesforce', desc: 'CRM ve müşteri yönetimi', icon: Cloud, color: 'text-cyan-400' },
                ].map((item) => (
                  <div key={item.name} className="bg-slate-800/80 rounded-xl p-4 sm:p-5 border border-slate-700/50 hover:border-slate-600 transition-colors">
                    <item.icon className={`h-6 w-6 sm:h-7 sm:w-7 mb-3 ${item.color}`} />
                    <h4 className="font-semibold text-white text-sm sm:text-base mb-1">{item.name}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* MES API örnek */}
            <div>
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <FileCode className="h-4 w-4" />
                MES API ile entegrasyon örneği
              </h4>
              <p className="text-slate-400 text-sm mb-4">
                Üretim hattı görüntüsünü API ile gönderip kalite sonucunu alabilir, ERP tarafında durumu güncelleyebilirsiniz.
              </p>
              <div className="bg-slate-800 rounded-xl border border-slate-700/50 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-800/80 border-b border-slate-700/50">
                  <span className="text-slate-400 text-xs font-medium">Python — mes_api</span>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                </div>
                <pre className="p-4 sm:p-5 text-emerald-400/90 text-xs sm:text-sm overflow-x-auto font-mono leading-relaxed">
{`import mes_api

client = mes_api.ProductionControl(api_key="your_api_key")
result = client.check_production_line("line_1_camera.jpg")

if result.quality_passed:
    print(f"Kalite geçti — Skor: {result.quality_score:.2f}")
    client.update_production_status("line_1", "active")
else:
    print("UYARI: Kalite kontrolü başarısız!")
    client.stop_production_line("line_1")`}
                </pre>
              </div>
              <div className="mt-4 flex justify-center sm:justify-start">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors"
                >
                  MES API Dokümantasyonu
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Use Case Details */}
        {selectedUseCase && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {(() => {
                const useCase = useCases.find(uc => uc.id === selectedUseCase);
                if (!useCase) return null;
                
                return (
                  <>
                    {/* Modal Header */}
                    <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{useCase.title}</h3>
                        <p className="text-gray-600 mt-1 text-sm sm:text-base">MES Detaylı Proje Bilgileri</p>
                      </div>
                      <button
                        onClick={() => setSelectedUseCase(null)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      >
                        <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
                      </button>
                    </div>

                    {/* Modal Content */}
                    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
                      {/* Overview */}
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Proje Genel Bakış</h4>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{useCase.detailedInfo.overview}</p>
                      </div>

                      {/* Challenges & Solutions */}
                      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-2" />
                            Teknik Zorluklar
                          </h4>
                          <div className="space-y-2 sm:space-y-3">
                            {useCase.detailedInfo.challenges.map((challenge, index) => (
                              <div key={index} className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-orange-50 rounded-lg">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 mt-2"></div>
                                <p className="text-gray-700 text-xs sm:text-sm">{challenge}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2" />
                            Hype Vision Çözümleri
                          </h4>
                          <div className="space-y-2 sm:space-y-3">
                            {useCase.detailedInfo.solutions.map((solution, index) => (
                              <div key={index} className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-green-50 rounded-lg">
                                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mt-0.5" />
                                <p className="text-gray-700 text-xs sm:text-sm">{solution}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                          <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-2" />
                          Elde Edilen Sonuçlar
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                          {useCase.detailedInfo.results.map((result, index) => (
                            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-xl border border-blue-200">
                              <h5 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{result.metric}</h5>
                              <div className="text-lg sm:text-2xl font-bold text-blue-600 mb-1">{result.value}</div>
                              <div className="text-xs sm:text-sm text-green-600 font-medium">{result.improvement}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                          <Zap className="h-5 w-5 text-purple-500 mr-2" />
                          Kullanılan Teknolojiler
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {useCase.detailedInfo.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        
                       
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageProcessing;