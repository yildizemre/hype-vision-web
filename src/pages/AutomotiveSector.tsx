import React from 'react';
import { Car, Cpu, Eye, Zap, CheckCircle, AlertTriangle, BarChart3, ArrowRight, Play, Wrench, Factory, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AutomotiveSector = () => {
  const { t } = useLanguage();

  const automotiveFeatures = [
    {
      icon: Eye,
      title: 'Parça Kalite Kontrolü',
      description: 'Otomotiv parçalarında hata tespiti, boyut kontrolü ve yüzey analizi ile mükemmel kalite.',
      accuracy: '99.5%',
      color: 'blue'
    },
    {
      icon: Cpu,
      title: 'Montaj Doğrulaması',
      description: 'Parçaların doğru montajını kontrol eder ve montaj hatalarını anında tespit eder.',
      accuracy: '99.8%',
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Boyut Ölçümü',
      description: 'Hassas boyut ölçümü ile tolerans dışı parçaları otomatik olarak ayırır.',
      accuracy: '99.2%',
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: 'Üretim Analizi',
      description: 'Üretim hattı performansını analiz eder ve verimliliği artırır.',
      accuracy: '98.9%',
      color: 'indigo'
    }
  ];

  const automotiveApplications = [
    {
      title: 'Motor Parçaları',
      description: 'Motor bloğu, piston, valf gibi kritik parçalarda kalite kontrolü',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Yüzey Kontrolü', 'Boyut Ölçümü', 'Hata Tespiti', 'Malzeme Analizi'],
      stats: { accuracy: '99.5%', speed: '0.2s', parts: '1M+' }
    },
    {
      title: 'Karoseri Kontrol',
      description: 'Karoseri parçalarında boyut, şekil ve yüzey kalitesi kontrolü',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Şekil Analizi', 'Boya Kalitesi', 'Çizik Tespiti', 'Montaj Kontrolü'],
      stats: { accuracy: '99.2%', speed: '0.3s', panels: '500K+' }
    },
    {
      title: 'Elektronik Sistemler',
      description: 'Araç elektronik sistemlerinde komponent ve bağlantı kontrolü',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['PCB Kontrolü', 'Lehim Kalitesi', 'Komponent Tespiti', 'Fonksiyon Testi'],
      stats: { accuracy: '99.7%', speed: '0.1s', boards: '250K+' }
    }
  ];

  const benefits = [
    {
      icon: Factory,
      title: 'Üretim Verimliliği',
      description: 'Otomatik kalite kontrolü ile üretim hızını %45 artırır',
      metric: '%45 Artış'
    },
    {
      icon: Shield,
      title: 'Kalite Güvencesi',
      description: 'Hatalı ürün oranını %78 azaltarak kalite standardını yükseltir',
      metric: '%78 Azalma'
    },
    {
      icon: Wrench,
      title: 'Bakım Maliyeti',
      description: 'Öngörülü bakım ile makine arızalarını %60 azaltır',
      metric: '%60 Tasarruf'
    },
    {
      icon: BarChart3,
      title: 'ROI',
      description: 'Yatırım geri dönüş süresini 8 aya kadar düşürür',
      metric: '8 Ay ROI'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Görüntü Yakalama',
      description: 'Yüksek çözünürlüklü kameralar ile parça görüntüleri yakalanır',
      color: 'blue'
    },
    {
      step: '2',
      title: 'AI Analizi',
      description: 'Yapay zeka algoritmaları parçayı analiz eder ve hataları tespit eder',
      color: 'green'
    },
    {
      step: '3',
      title: 'Kalite Değerlendirmesi',
      description: 'Parça kalite standartlarına göre değerlendirilir ve sınıflandırılır',
      color: 'purple'
    },
    {
      step: '4',
      title: 'Otomatik Ayırma',
      description: 'Hatalı parçalar otomatik olarak üretim hattından ayrılır',
      color: 'red'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Car className="h-4 w-4" />
                <span>Otomotiv Sektörü AI</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Otomotiv Sektörü için
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Kalite AI</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Otomotiv üretiminde kalite kontrolü ve hata tespiti için gelişmiş yapay zeka çözümleri. 
                Parça kontrolü, montaj doğrulaması ve üretim optimizasyonu ile mükemmel kalite.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span className="font-semibold">Ücretsiz Demo</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold">Başarı Hikayeleri</span>
                </button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">1M+</div>
                  <div className="text-sm text-gray-600">Kontrol Edilen Parça</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.5%</div>
                  <div className="text-sm text-gray-600">Doğruluk Oranı</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">%78</div>
                  <div className="text-sm text-gray-600">Hata Azalması</div>
                </div>
              </div>
            </div>

            {/* Live Automotive Dashboard */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-blue-50 px-6 py-4 border-b border-blue-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Canlı Otomotiv Kalite Paneli</h3>
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
                        <p className="text-sm text-green-600 font-medium">Kaliteli Parça</p>
                        <p className="text-2xl font-bold text-green-900">98.7%</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-red-600 font-medium">Hatalı Parça</p>
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
                    <span className="text-lg font-bold text-blue-600">98.7%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{ width: '98.7%' }}></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-sm font-bold text-blue-600">1,247</div>
                    <div className="text-xs text-gray-500">Kontrol/Saat</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-sm font-bold text-green-600">0.2s</div>
                    <div className="text-xs text-gray-500">Ortalama Hız</div>
                  </div>
                  <div className="text-center p-2 bg-purple-50 rounded-lg">
                    <div className="text-sm font-bold text-purple-600">24/7</div>
                    <div className="text-xs text-gray-500">Aktif</div>
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
              Otomotiv Kalite <span className="text-blue-600">Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Otomotiv üretiminde kalite kontrolünü maksimum seviyeye çıkaran AI destekli çözümler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automotiveFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  feature.color === 'green' ? 'bg-green-100 text-green-600' :
                  feature.color === 'purple' ? 'bg-purple-100 text-purple-600' :
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
                    feature.color === 'green' ? 'text-green-600' :
                    feature.color === 'purple' ? 'text-purple-600' :
                    'text-indigo-600'
                  }`}>{feature.accuracy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Uygulama <span className="text-blue-600">Alanları</span>
            </h2>
            <p className="text-xl text-gray-600">
              Otomotiv sektöründe farklı parça türleri için özelleştirilmiş kalite kontrol çözümleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {automotiveApplications.map((app, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{app.title}</h3>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Kontrol Özellikleri:</p>
                    <div className="grid grid-cols-2 gap-1">
                      {app.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 rounded-full mr-2 bg-blue-500"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(app.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-sm font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200">
                    Detayları Gör
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kalite Kontrol <span className="text-blue-600">Süreci</span>
            </h2>
            <p className="text-xl text-gray-600">
              Otomotiv parçalarında kalite kontrolü nasıl çalışır?
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center ${
                  step.color === 'blue' ? 'bg-blue-100' :
                  step.color === 'green' ? 'bg-green-100' :
                  step.color === 'purple' ? 'bg-purple-100' :
                  'bg-red-100'
                }`}>
                  <span className={`text-2xl font-bold ${
                    step.color === 'blue' ? 'text-blue-600' :
                    step.color === 'green' ? 'text-green-600' :
                    step.color === 'purple' ? 'text-purple-600' :
                    'text-red-600'
                  }`}>{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
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
              İş <span className="text-blue-600">Faydaları</span>
            </h2>
            <p className="text-xl text-gray-600">
              Otomotiv kalite AI sistemi ile elde edeceğiniz somut faydalar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{benefit.description}</p>
                
                <div className="text-2xl font-bold text-blue-600">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Otomotiv Üretiminizi Bir Sonraki Seviyeye Taşıyın
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Hype Vision Automotive ile hata oranınızı %78 azaltın ve üretim verimliliğinizi %45 artırın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold">
              Ücretsiz Demo Talep Et
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold">
              Başarı Hikayelerini Gör
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomotiveSector;