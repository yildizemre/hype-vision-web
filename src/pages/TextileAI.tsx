import React from 'react';
import { Shirt, Ruler, Palette, Eye, CheckCircle, AlertTriangle, BarChart3, ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TextileAI = () => {
  const { t } = useLanguage();

  const textileFeatures = [
    {
      icon: Eye,
      title: 'Leke Algılama',
      description: 'Kumaş üzerindeki lekeleri, renk bozukluklarını ve yabancı maddeleri otomatik tespit eder.',
      accuracy: '94%',
      color: 'purple'
    },
    {
      icon: Ruler,
      title: 'Uzunluk Ölçümü',
      description: 'Kumaş uzunluğunu hassas şekilde ölçer ve tolerans dışı ürünleri anında tespit eder.',
      accuracy: '95%',
      color: 'blue'
    },
    {
      icon: Palette,
      title: 'Renk Tutarlılığı',
      description: 'Renk tutarlılığını kontrol eder ve renk sapması olan bölgeleri işaretler.',
      accuracy: '94%',
      color: 'green'
    },
    {
      icon: BarChart3,
      title: 'Desen Analizi',
      description: 'Desen bozukluklarını, eksik desenleri ve hatalı tekrarları tespit eder.',
      accuracy: '94%',
      color: 'indigo'
    }
  ];

  const textileTypes = [
    {
      title: 'Pamuklu Kumaşlar',
      description: 'Pamuklu kumaşlarda kalite kontrolü ve hata tespiti',
      image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Leke Tespiti', 'Uzunluk Ölçümü', 'Renk Kontrolü', 'Doku Analizi'],
      stats: { accuracy: '94%', speed: '0.3s', meters: '500K+' }
    },
    {
      title: 'Sentetik Kumaşlar',
      description: 'Polyester, naylon ve diğer sentetik kumaşlar için özel analiz',
      image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Elektrostatik Kontrol', 'Dayanıklılık Testi', 'Renk Sabitliği', 'Boyut Kontrolü'],
      stats: { accuracy: '94%', speed: '0.2s', rolls: '250K+' }
    },
    {
      title: 'Karma Kumaşlar',
      description: 'Karışım kumaşlarda kompozisyon analizi ve kalite kontrolü',
      image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Kompozisyon Analizi', 'Karışım Oranı', 'Homojenlik Kontrolü', 'Kalite Skoru'],
      stats: { accuracy: '99.0%', speed: '0.4s', batches: '100K+' }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                <Shirt className="h-4 w-4" />
                <span>Hype Vision Textile AI</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tekstil Sektörü için
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Yapay Zeka</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Kumaş kalitesi, uzunluk ölçümü, leke algılama ve desen analizi ile tekstil üretimini optimize edin. 
                Gelişmiş yapay zeka teknolojisi ile mükemmel kumaş kalitesi.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span className="font-semibold">Ücretsiz Demo</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5 text-purple-600" />
                  <span className="font-semibold">Demo Video</span>
                </button>
              </div>
            </div>

            {/* Live Textile Dashboard */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-purple-50 px-6 py-4 border-b border-purple-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Canlı Tekstil Analiz Paneli</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600">CANLI</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-600 font-medium">Kaliteli Kumaş</p>
                        <p className="text-2xl font-bold text-green-900">94%</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-red-600 font-medium">Hatalı Kumaş</p>
                        <p className="text-2xl font-bold text-red-900">1.1%</p>
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
                        <p className="text-sm font-medium text-gray-900">Leke Tespiti - Rulo 247</p>
                        <p className="text-xs text-gray-600">2 dakika önce</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                      <Ruler className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Uzunluk Hatası - Rulo 245</p>
                        <p className="text-xs text-gray-600">5 dakika önce</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Günlük Kalite Skoru</span>
                    <span className="text-lg font-bold text-purple-600">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center p-2 bg-purple-50 rounded-lg">
                    <div className="text-sm font-bold text-purple-600">1,247m</div>
                    <div className="text-xs text-gray-500">Analiz Edilen</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-sm font-bold text-blue-600">0.3s</div>
                    <div className="text-xs text-gray-500">Ortalama Hız</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-sm font-bold text-green-600">24/7</div>
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
              Tekstil Analiz <span className="text-purple-600">Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yapay zeka destekli tekstil analiz çözümlerimiz ile kumaş kalitesini maksimum seviyeye çıkarın
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {textileFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  feature.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
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
                    feature.color === 'purple' ? 'text-purple-600' :
                    feature.color === 'blue' ? 'text-blue-600' :
                    feature.color === 'green' ? 'text-green-600' :
                    'text-indigo-600'
                  }`}>{feature.accuracy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Textile Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kumaş <span className="text-purple-600">Türleri</span>
            </h2>
            <p className="text-xl text-gray-600">
              Farklı kumaş türleri için özelleştirilmiş analiz çözümleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {textileTypes.map((type, index) => (
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
                    <p className="text-sm font-medium text-gray-900 mb-2">Analiz Özellikleri:</p>
                    <div className="grid grid-cols-2 gap-1">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 rounded-full mr-2 bg-purple-500"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(type.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-sm font-bold text-purple-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
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
              Analiz <span className="text-purple-600">Süreci</span>
            </h2>
            <p className="text-xl text-gray-600">
              Kumaş kalite kontrolü nasıl çalışır?
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kumaş Girişi</h3>
              <p className="text-gray-600 text-sm">Kumaş üretim hattına girer ve kameralar tarafından görüntülenir</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Analizi</h3>
              <p className="text-gray-600 text-sm">Yapay zeka algoritmaları kumaşı analiz eder ve hataları tespit eder</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kalite Kontrolü</h3>
              <p className="text-gray-600 text-sm">Hatalı bölgeler işaretlenir ve kalite skoru hesaplanır</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Raporlama</h3>
              <p className="text-gray-600 text-sm">Detaylı raporlar oluşturulur ve operatörlere bildirim gönderilir</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tekstil Üretiminizi Bir Sonraki Seviyeye Taşıyın
          </h2>
          <p className="text-purple-100 text-lg mb-8">
            Hype Vision Textile ile ölçüm doğruluğunuzu %99.2'ye çıkarın ve işlem hızınızı 10 kat artırın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold">
              Ücretsiz Demo Talep Et
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-200 font-semibold">
              Fiyat Bilgisi Al
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextileAI;