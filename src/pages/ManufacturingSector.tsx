import React from 'react';
import { Factory, Cpu, Eye, Zap, CheckCircle, AlertTriangle, BarChart3, ArrowRight, Play, Wrench, Settings, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ManufacturingSector = () => {
  const { t } = useLanguage();

  const manufacturingFeatures = [
    {
      icon: Eye,
      title: 'Hata Tespiti',
      description: 'Üretim hatlarında otomatik hata tespiti ve kalite analizi ile mükemmel ürünler.',
      accuracy: '99.7%',
      color: 'blue'
    },
    {
      icon: Cpu,
      title: 'Süreç İzleme',
      description: 'Üretim süreçlerini gerçek zamanlı izler ve optimizasyon önerileri sunar.',
      accuracy: '99.3%',
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Verimlilik Analizi',
      description: 'Üretim verimliliğini analiz eder ve iyileştirme alanlarını belirler.',
      accuracy: '98.8%',
      color: 'purple'
    },
    {
      icon: Settings,
      title: 'Öngörülü Bakım',
      description: 'Makine arızalarını önceden tahmin eder ve bakım planlaması yapar.',
      accuracy: '99.1%',
      color: 'orange'
    }
  ];

  const manufacturingTypes = [
    {
      title: 'Elektronik Üretimi',
      description: 'PCB, komponent ve elektronik cihaz üretiminde kalite kontrolü',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['PCB Kontrolü', 'Komponent Tespiti', 'Lehim Kalitesi', 'Fonksiyon Testi'],
      stats: { accuracy: '99.7%', speed: '0.1s', boards: '500K+' }
    },
    {
      title: 'Makine İmalatı',
      description: 'Makine parçaları ve metal işleme süreçlerinde kalite kontrolü',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Boyut Kontrolü', 'Yüzey Kalitesi', 'Tolerans Tespiti', 'Malzeme Analizi'],
      stats: { accuracy: '99.5%', speed: '0.2s', parts: '1M+' }
    },
    {
      title: 'Plastik İnjeksiyon',
      description: 'Plastik parça üretiminde şekil, boyut ve kalite kontrolü',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Şekil Analizi', 'Renk Kontrolü', 'Boyut Ölçümü', 'Hata Tespiti'],
      stats: { accuracy: '99.2%', speed: '0.3s', pieces: '2M+' }
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Üretim Verimliliği',
      description: 'Otomatik kalite kontrolü ile üretim verimliliğini %50 artırır',
      metric: '%50 Artış'
    },
    {
      icon: Factory,
      title: 'Kalite İyileştirmesi',
      description: 'Hatalı ürün oranını %80 azaltarak kalite standardını yükseltir',
      metric: '%80 Azalma'
    },
    {
      icon: Wrench,
      title: 'Bakım Maliyeti',
      description: 'Öngörülü bakım ile makine arızalarını %65 azaltır',
      metric: '%65 Tasarruf'
    },
    {
      icon: BarChart3,
      title: 'Operasyonel Maliyet',
      description: 'Toplam operasyonel maliyetleri %35 azaltır',
      metric: '%35 Azalma'
    }
  ];

  const processOptimization = [
    {
      title: 'Gerçek Zamanlı İzleme',
      description: 'Üretim süreçlerini 7/24 izler ve anında müdahale imkanı sağlar',
      icon: Eye,
      features: ['Canlı Dashboard', 'Anında Uyarılar', 'Performans Metrikleri', 'Trend Analizi']
    },
    {
      title: 'Otomatik Kalite Kontrolü',
      description: 'İnsan hatasını minimize ederek tutarlı kalite standardı sağlar',
      icon: CheckCircle,
      features: ['Hata Tespiti', 'Boyut Kontrolü', 'Yüzey Analizi', 'Sınıflandırma']
    },
    {
      title: 'Veri Analizi',
      description: 'Büyük veri analizi ile üretim süreçlerini optimize eder',
      icon: BarChart3,
      features: ['Performans Analizi', 'Trend Tespiti', 'Öngörülü Modelleme', 'Raporlama']
    },
    {
      title: 'Entegrasyon',
      description: 'Mevcut ERP ve MES sistemleri ile sorunsuz entegrasyon',
      icon: Settings,
      features: ['ERP Entegrasyonu', 'MES Bağlantısı', 'API Desteği', 'Veri Senkronizasyonu']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                <Factory className="h-4 w-4" />
                <span>İmalat Sanayi AI</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                İmalat Sanayi için
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Akıllı Üretim</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Üretim hatlarında kalite kontrol, hata tespiti ve süreç optimizasyonu için gelişmiş yapay zeka çözümleri. 
                Öngörülü bakım ve veri analizi ile üretim verimliliğini maksimuma çıkarın.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span className="font-semibold">Ücretsiz Demo</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5 text-indigo-600" />
                  <span className="font-semibold">Süreç Optimizasyonu</span>
                </button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Üretim Hattı</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.7%</div>
                  <div className="text-sm text-gray-600">Kalite Skoru</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">%50</div>
                  <div className="text-sm text-gray-600">Verimlilik Artışı</div>
                </div>
              </div>
            </div>

            {/* Live Manufacturing Dashboard */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Canlı Üretim Paneli</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
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
                        <p className="text-2xl font-bold text-green-900">99.2%</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-red-600 font-medium">Hatalı Ürün</p>
                        <p className="text-2xl font-bold text-red-900">0.8%</p>
                      </div>
                      <AlertTriangle className="h-8 w-8 text-red-600" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Üretim Hatları Durumu</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <Factory className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Hat 1 - Normal Çalışıyor</p>
                        <p className="text-xs text-gray-600">Verimlilik: %94</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                      <Wrench className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Hat 2 - Bakım Gerekli</p>
                        <p className="text-xs text-gray-600">Öngörülü bakım: 2 gün</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Günlük Verimlilik</span>
                    <span className="text-lg font-bold text-indigo-600">94.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{ width: '94.2%' }}></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center p-2 bg-indigo-50 rounded-lg">
                    <div className="text-sm font-bold text-indigo-600">1,847</div>
                    <div className="text-xs text-gray-500">Üretim/Saat</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-sm font-bold text-green-600">0.2s</div>
                    <div className="text-xs text-gray-500">Kontrol Hızı</div>
                  </div>
                  <div className="text-center p-2 bg-purple-50 rounded-lg">
                    <div className="text-sm font-bold text-purple-600">5</div>
                    <div className="text-xs text-gray-500">Aktif Hat</div>
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
              İmalat <span className="text-indigo-600">Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Üretim süreçlerini optimize eden ve kaliteyi maksimuma çıkaran AI destekli çözümler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {manufacturingFeatures.map((feature, index) => (
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


      {/* Process Optimization */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Süreç <span className="text-indigo-600">Optimizasyonu</span>
            </h2>
            <p className="text-xl text-gray-600">
              Üretim süreçlerinizi optimize eden akıllı çözümler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processOptimization.map((process, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <process.icon className="h-8 w-8 text-indigo-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{process.title}</h3>
                <p className="text-gray-600 mb-4 text-center text-sm">{process.description}</p>
                
                <div className="space-y-2">
                  {process.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full mr-2 bg-indigo-500"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              İş <span className="text-indigo-600">Faydaları</span>
            </h2>
            <p className="text-xl text-gray-600">
              İmalat AI sistemi ile elde edeceğiniz somut faydalar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-indigo-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{benefit.description}</p>
                
                <div className="text-2xl font-bold text-indigo-600">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Üretim Süreçlerinizi Bir Sonraki Seviyeye Taşıyın
          </h2>
          <p className="text-indigo-100 text-lg mb-8">
            Hype Vision Manufacturing ile üretim verimliliğinizi %50 artırın ve kalite skorunuzu %99.7'ye çıkarın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold">
              Ücretsiz Demo Talep Et
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-200 font-semibold">
              Süreç Optimizasyon Rehberi
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingSector;