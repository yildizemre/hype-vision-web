import React from 'react';
import { Cpu, Eye, Zap, CheckCircle, AlertTriangle, BarChart3, ArrowRight, Play, Factory, Settings, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Electronics = () => {
  const { t } = useLanguage();

  const electronicsFeatures = [
    {
      icon: Eye,
      title: 'PCB Kalite Kontrolü',
      description: 'Elektronik kart üretiminde komponent yerleşimi ve lehim kalitesi kontrolü.',
      accuracy: '99.7%',
      color: 'blue'
    },
    {
      icon: Cpu,
      title: 'Komponent Tespiti',
      description: 'Elektronik komponentlerin doğru yerleşimini ve orientasyonunu kontrol eder.',
      accuracy: '99.5%',
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Lehim Kalitesi',
      description: 'Lehim noktalarının kalitesini analiz eder ve hatalı lehimleri tespit eder.',
      accuracy: '98.9%',
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: 'Üretim Analizi',
      description: 'Elektronik üretim hatlarının performansını analiz eder ve optimize eder.',
      accuracy: '99.2%',
      color: 'indigo'
    }
  ];

  const electronicsApplications = [
    {
      title: 'PCB Üretimi',
      description: 'Elektronik kart üretiminde komponent yerleşimi ve kalite kontrolü',
      image: '/images/pcb.jpg',
      features: ['Komponent Kontrolü', 'Lehim Kalitesi', 'Devre Testi', 'Boyut Ölçümü'],
      stats: { accuracy: '99.7%', speed: '0.1s', boards: '500K+' }
    },
    {
      title: 'Elektronik Montaj',
      description: 'Elektronik cihazların montaj süreçlerinde kalite ve doğruluk kontrolü',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Montaj Doğrulama', 'Kablo Kontrolü', 'Fonksiyon Testi', 'Final Kontrol'],
      stats: { accuracy: '99.2%', speed: '0.2s', devices: '250K+' }
    },
    {
      title: 'Yarı İletken Üretimi',
      description: 'Mikroçip ve yarı iletken üretiminde hassas kalite kontrolü',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Wafer Kontrolü', 'Die Tespiti', 'Paketleme Kontrolü', 'Elektriksel Test'],
      stats: { accuracy: '99.9%', speed: '0.05s', chips: '1M+' }
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Üretim Verimliliği',
      description: 'Otomatik kalite kontrolü ile elektronik üretim verimliliğini %50 artırır',
      metric: '%50 Artış'
    },
    {
      icon: Factory,
      title: 'Hata Azaltma',
      description: 'Elektronik üretimde hatalı ürün oranını %85 azaltır',
      metric: '%85 Azalma'
    },
    {
      icon: Settings,
      title: 'Süreç Optimizasyonu',
      description: 'Üretim süreçlerini optimize ederek çevrim süresini %30 kısaltır',
      metric: '%30 Hızlanma'
    },
    {
      icon: BarChart3,
      title: 'Maliyet Tasarrufu',
      description: 'Kalite kontrol maliyetlerini %40 azaltır',
      metric: '%40 Tasarruf'
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
                <Cpu className="h-4 w-4" />
                <span>Elektronik Sektörü MES</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Elektronik Üretimi için
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> MES Çözümü</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Elektronik üretiminde PCB kalite kontrolü, komponent tespiti ve lehim kalitesi analizi için gelişmiş MES sistemi. 
                Görüntü işleme teknolojisi ile üretim süreçlerini optimize edin.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span className="font-semibold">MES Demo</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold">Üretim Süreçleri</span>
                </button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500K+</div>
                  <div className="text-sm text-gray-600">Kontrol Edilen PCB</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.7%</div>
                  <div className="text-sm text-gray-600">Kalite Doğruluğu</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">0.1s</div>
                  <div className="text-sm text-gray-600">Kontrol Hızı</div>
                </div>
              </div>
            </div>

            {/* Live Electronics MES Dashboard */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-blue-50 px-6 py-4 border-b border-blue-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Canlı Elektronik MES Paneli</h3>
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
                        <p className="text-sm text-green-600 font-medium">Kaliteli PCB</p>
                        <p className="text-2xl font-bold text-green-900">99.2%</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-red-600 font-medium">Hatalı PCB</p>
                        <p className="text-2xl font-bold text-red-900">0.8%</p>
                      </div>
                      <AlertTriangle className="h-8 w-8 text-red-600" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Üretim Hatları</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <Factory className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">PCB Hat 1 - Aktif</p>
                        <p className="text-xs text-gray-600">Throughput: 247 PCB/saat</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Eye className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Kalite Kontrol - Normal</p>
                        <p className="text-xs text-gray-600">Skor: %99.2</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Günlük Üretim Hedefi</span>
                    <span className="text-lg font-bold text-blue-600">87%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{ width: '87%' }}></div>
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
              Elektronik MES <span className="text-blue-600">Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elektronik üretiminde kalite ve verimliliği maksimuma çıkaran MES özellikleri
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {electronicsFeatures.map((feature, index) => (
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
              Elektronik <span className="text-blue-600">Uygulama Alanları</span>
            </h2>
            <p className="text-xl text-gray-600">
              Elektronik sektöründe farklı üretim alanları için özelleştirilmiş MES çözümleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {electronicsApplications.map((app, index) => (
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
                    <p className="text-sm font-medium text-gray-900 mb-2">MES Özellikleri:</p>
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
                    MES Detayları
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
              MES <span className="text-blue-600">Faydaları</span>
            </h2>
            <p className="text-xl text-gray-600">
              Elektronik sektörü MES sistemi ile elde edeceğiniz somut faydalar
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
            Elektronik Üretiminizi Bir Sonraki Seviyeye Taşıyın
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            MES sistemi ile elektronik üretim verimliliğinizi %50 artırın ve hata oranınızı %85 azaltın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold">
              MES Demo Talep Et
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold">
              ERP Entegrasyon Rehberi
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Electronics;