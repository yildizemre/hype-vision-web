import React from 'react';
import { HardHat, Shield, AlertTriangle, Eye, Camera, Zap, CheckCircle, ArrowRight, Play, Users, Building, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ConstructionSafety = () => {
  const { t } = useLanguage();

  const safetyFeatures = [
    {
      icon: HardHat,
      title: 'Baret Tespiti',
      description: 'Şantiye alanında çalışanların baret takıp takmadığını gerçek zamanlı olarak tespit eder.',
      accuracy: '99.8%',
      color: 'red'
    },
    {
      icon: Shield,
      title: 'Güvenlik Ekipmanı',
      description: 'Güvenlik gözlüğü, eldiven, reflektör yelek ve güvenlik ayakkabısı kontrolü.',
      accuracy: '99.5%',
      color: 'blue'
    },
    {
      icon: AlertTriangle,
      title: 'Tehlikeli Alan Tespiti',
      description: 'Yetkisiz kişilerin tehlikeli alanlara girişini tespit eder ve anında uyarı verir.',
      accuracy: '99.2%',
      color: 'orange'
    },
    {
      icon: Eye,
      title: 'Düşme Riski Analizi',
      description: 'Yüksekte çalışan personelin güvenlik durumunu izler ve düşme riskini analiz eder.',
      accuracy: '98.9%',
      color: 'purple'
    }
  ];

  const constructionTypes = [
    {
      title: 'Konut İnşaatı',
      description: 'Konut projelerinde çalışan güvenliği ve kaza önleme çözümleri',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Baret Kontrolü', 'Yüksekte Çalışma', 'Ekipman Takibi', 'Alan Güvenliği'],
      stats: { workers: '2.5K+', accidents: '%85 ↓', compliance: '%98' }
    },
    {
      title: 'Ticari İnşaat',
      description: 'Büyük ticari projelerde kapsamlı güvenlik izleme sistemi',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Çoklu Kamera', 'Merkezi İzleme', 'Raporlama', 'Uyumluluk Takibi'],
      stats: { sites: '150+', efficiency: '%45 ↑', incidents: '%78 ↓' }
    },
    {
      title: 'Altyapı Projeleri',
      description: 'Köprü, yol ve tünel projelerinde özel güvenlik çözümleri',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Ağır Makine', 'Trafik Güvenliği', 'Çevre Koruması', 'Risk Analizi'],
      stats: { projects: '75+', safety: '%92 ↑', downtime: '%30 ↓' }
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Çalışan Güvenliği',
      description: 'İş kazalarını %85 azaltarak çalışan güvenliğini maksimum seviyeye çıkarır',
      metric: '%85 Azalma'
    },
    {
      icon: Building,
      title: 'Proje Verimliliği',
      description: 'Güvenlik ihlalleri nedeniyle oluşan gecikmeleri minimize eder',
      metric: '%45 Artış'
    },
    {
      icon: Shield,
      title: 'Uyumluluk',
      description: 'İSG mevzuatına uyumluluğu %98 seviyesine çıkarır',
      metric: '%98 Uyum'
    },
    {
      icon: Wrench,
      title: 'Operasyonel Maliyet',
      description: 'Kaza maliyetlerini ve sigorta primlerini önemli ölçüde azaltır',
      metric: '%60 Tasarruf'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-orange-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                <HardHat className="h-4 w-4" />
                <span>İnşaat & İSG Güvenlik</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                İnşaat Sektörü için
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"> Güvenlik AI</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Şantiye alanlarında çalışan güvenliğini artıran yapay zeka çözümleri. 
                Baret tespiti, güvenlik ekipmanı kontrolü ve tehlikeli alan izleme ile iş kazalarını önleyin.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span className="font-semibold">Ücretsiz Demo</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5 text-red-600" />
                  <span className="font-semibold">Başarı Hikayeleri</span>
                </button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">250+</div>
                  <div className="text-sm text-gray-600">Aktif Şantiye</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">2.5K+</div>
                  <div className="text-sm text-gray-600">Korunan Çalışan</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">%85</div>
                  <div className="text-sm text-gray-600">Kaza Azalması</div>
                </div>
              </div>
            </div>

            {/* Live Construction Dashboard */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-red-50 px-6 py-4 border-b border-red-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Canlı Şantiye Güvenlik Paneli</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600">CANLI</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-600 font-medium">Güvenli Çalışan</p>
                        <p className="text-2xl font-bold text-green-900">247</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-red-600 font-medium">Güvenlik Uyarısı</p>
                        <p className="text-2xl font-bold text-red-900">3</p>
                      </div>
                      <AlertTriangle className="h-8 w-8 text-red-600" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Aktif Uyarılar</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                      <HardHat className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Baret Eksik - A Blok</p>
                        <p className="text-xs text-gray-600">2 dakika önce</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                      <Shield className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Güvenlik Gözlüğü - B Blok</p>
                        <p className="text-xs text-gray-600">5 dakika önce</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Günlük Güvenlik Skoru</span>
                    <span className="text-lg font-bold text-red-600">92.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full" style={{ width: '92.5%' }}></div>
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
              İnşaat Güvenlik <span className="text-red-600">Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Şantiye alanlarında çalışan güvenliğini maksimum seviyeye çıkaran AI destekli çözümler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  feature.color === 'red' ? 'bg-red-100 text-red-600' :
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  feature.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Doğruluk Oranı</span>
                  <span className={`text-sm font-bold ${
                    feature.color === 'red' ? 'text-red-600' :
                    feature.color === 'blue' ? 'text-blue-600' :
                    feature.color === 'orange' ? 'text-orange-600' :
                    'text-purple-600'
                  }`}>{feature.accuracy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              İnşaat <span className="text-red-600">Türleri</span>
            </h2>
            <p className="text-xl text-gray-600">
              Farklı inşaat projelerinde özelleştirilmiş güvenlik çözümleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {constructionTypes.map((type, index) => (
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
                    <p className="text-sm font-medium text-gray-900 mb-2">Güvenlik Özellikleri:</p>
                    <div className="grid grid-cols-2 gap-1">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 rounded-full mr-2 bg-red-500"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(type.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-sm font-bold text-red-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-200">
                    Detayları Gör
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
              İş <span className="text-red-600">Faydaları</span>
            </h2>
            <p className="text-xl text-gray-600">
              İnşaat güvenlik AI sistemi ile elde edeceğiniz somut faydalar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-red-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{benefit.description}</p>
                
                <div className="text-2xl font-bold text-red-600">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Şantiye Güvenliğinizi Bir Sonraki Seviyeye Taşıyın
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Hype Vision Construction Safety ile iş kazalarını %85 azaltın ve güvenlik uyumunuzu %98'e çıkarın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold">
              Ücretsiz Demo Talep Et
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-all duration-200 font-semibold">
              Başarı Hikayelerini Gör
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionSafety;