import React from 'react';
import { Zap, Shield, Eye, AlertTriangle, CheckCircle, Thermometer, ArrowRight, Play, Battery, Sun, Wind } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const EnergySector = () => {
  const { t } = useLanguage();

  const energyFeatures = [
    {
      icon: Shield,
      title: 'Güvenlik Kontrolü',
      description: 'Enerji tesislerinde çalışan güvenliği ve güvenlik protokollerinin kontrolü.',
      accuracy: '99.4%',
      color: 'red'
    },
    {
      icon: Eye,
      title: 'Ekipman İzleme',
      description: 'Kritik ekipmanların durumunu sürekli izler ve anormallikleri tespit eder.',
      accuracy: '99.6%',
      color: 'blue'
    },
    {
      icon: Thermometer,
      title: 'Sıcaklık Kontrolü',
      description: 'Transformatör, jeneratör ve diğer ekipmanların sıcaklık izlemesi.',
      accuracy: '99.8%',
      color: 'orange'
    },
    {
      icon: AlertTriangle,
      title: 'Risk Analizi',
      description: 'Potansiyel riskleri önceden tespit eder ve önleyici tedbirler alır.',
      accuracy: '98.7%',
      color: 'purple'
    }
  ];

  const energyTypes = [
    {
      title: 'Güneş Enerjisi Santralleri',
      description: 'Güneş panellerinin verimliliği ve arıza tespiti',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Panel Kontrolü', 'Verimlilik İzleme', 'Arıza Tespiti', 'Temizlik Kontrolü'],
      stats: { plants: '75+', uptime: '%99.9', efficiency: '%94' },
      icon: Sun
    },
    {
      title: 'Rüzgar Enerjisi Santralleri',
      description: 'Rüzgar türbinlerinin performans ve güvenlik izlemesi',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Türbin İzleme', 'Titreşim Analizi', 'Performans Takibi', 'Bakım Planlaması'],
      stats: { turbines: '200+', availability: '%96', maintenance: '%40 ↓' },
      icon: Wind
    },
    {
      title: 'Hidroelektrik Santraller',
      description: 'Su seviyesi, türbin performansı ve güvenlik kontrolü',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Su Seviyesi', 'Türbin Kontrolü', 'Güvenlik İzleme', 'Çevre Koruması'],
      stats: { facilities: '50+', reliability: '%99.5', safety: '%95' },
      icon: Battery
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Operasyonel Verimlilik',
      description: 'Enerji üretim verimliliğini %25 artırır ve kayıpları minimize eder',
      metric: '%25 Artış'
    },
    {
      icon: Shield,
      title: 'Güvenlik Artışı',
      description: 'İş kazalarını %92 azaltarak çalışan güvenliğini maksimuma çıkarır',
      metric: '%92 Güvenlik'
    },
    {
      icon: AlertTriangle,
      title: 'Arıza Önleme',
      description: 'Öngörülü bakım ile ekipman arızalarını %70 azaltır',
      metric: '%70 Azalma'
    },
    {
      icon: Battery,
      title: 'Maliyet Tasarrufu',
      description: 'Bakım maliyetlerini %45 azaltır ve sistem ömrünü uzatır',
      metric: '%45 Tasarruf'
    }
  ];

  const safetyProtocols = [
    {
      title: 'Kişisel Koruyucu Ekipman',
      description: 'Baret, güvenlik gözlüğü, eldiven ve güvenlik ayakkabısı kontrolü',
      compliance: '99.4%'
    },
    {
      title: 'Yüksek Voltaj Güvenliği',
      description: 'Yüksek voltaj alanlarında güvenlik protokollerinin takibi',
      compliance: '99.8%'
    },
    {
      title: 'Acil Durum Prosedürleri',
      description: 'Acil durum çıkışları ve güvenlik ekipmanlarının kontrolü',
      compliance: '98.9%'
    },
    {
      title: 'Çevre Güvenliği',
      description: 'Çevresel risklerin izlenmesi ve koruma önlemlerinin kontrolü',
      compliance: '99.2%'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-white to-orange-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4" />
                <span>Enerji Sektörü AI</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Enerji Sektörü için
                <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"> Akıllı İzleme</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Enerji tesislerinde güvenlik kontrolü, ekipman izleme ve bakım planlaması için gelişmiş yapay zeka çözümleri. 
                Güneş, rüzgar ve hidroelektrik santrallerde operasyonel verimliliği maksimuma çıkarın.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span className="font-semibold">Ücretsiz Demo</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5 text-yellow-600" />
                  <span className="font-semibold">Güvenlik Protokolleri</span>
                </button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">325+</div>
                  <div className="text-sm text-gray-600">Enerji Tesisi</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600">Sistem Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">%92</div>
                  <div className="text-sm text-gray-600">Güvenlik Artışı</div>
                </div>
              </div>
            </div>

            {/* Live Energy Dashboard */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-yellow-50 px-6 py-4 border-b border-yellow-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Canlı Enerji İzleme Paneli</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600">CANLI</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-600 font-medium">Sistem Durumu</p>
                        <p className="text-2xl font-bold text-green-900">Normal</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-orange-600 font-medium">Bakım Uyarısı</p>
                        <p className="text-2xl font-bold text-orange-900">1</p>
                      </div>
                      <AlertTriangle className="h-8 w-8 text-orange-600" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Tesis Durumu</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <Sun className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Güneş Santrali - Aktif</p>
                        <p className="text-xs text-gray-600">Verimlilik: %94</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                      <Wind className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Rüzgar Santrali - Bakım</p>
                        <p className="text-xs text-gray-600">Planlı bakım: 2 saat</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Günlük Verimlilik</span>
                    <span className="text-lg font-bold text-yellow-600">96.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{ width: '96.8%' }}></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center p-2 bg-yellow-50 rounded-lg">
                    <div className="text-sm font-bold text-yellow-600">325</div>
                    <div className="text-xs text-gray-500">MW Kapasite</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-sm font-bold text-green-600">99.9%</div>
                    <div className="text-xs text-gray-500">Uptime</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-sm font-bold text-blue-600">24/7</div>
                    <div className="text-xs text-gray-500">İzleme</div>
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
              Enerji İzleme <span className="text-yellow-600">Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enerji tesislerinde güvenlik ve verimliliği maksimuma çıkaran AI destekli çözümler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {energyFeatures.map((feature, index) => (
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

      {/* Energy Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enerji <span className="text-yellow-600">Türleri</span>
            </h2>
            <p className="text-xl text-gray-600">
              Farklı enerji üretim tesislerinde özelleştirilmiş izleme çözümleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {energyTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <type.icon className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">İzleme Özellikleri:</p>
                    <div className="grid grid-cols-2 gap-1">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 rounded-full mr-2 bg-yellow-500"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(type.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-sm font-bold text-yellow-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-2 rounded-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-200">
                    Detayları Gör
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Protocols */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Güvenlik <span className="text-yellow-600">Protokolleri</span>
            </h2>
            <p className="text-xl text-gray-600">
              Enerji tesislerinde uygulanan güvenlik standartları ve uyumluluk oranları
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyProtocols.map((protocol, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-yellow-600" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{protocol.title}</h3>
                <p className="text-gray-600 mb-4 text-center text-sm">{protocol.description}</p>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">{protocol.compliance}</div>
                  <div className="text-sm text-gray-500">Uyumluluk Oranı</div>
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
              İş <span className="text-yellow-600">Faydaları</span>
            </h2>
            <p className="text-xl text-gray-600">
              Enerji sektörü AI sistemi ile elde edeceğiniz somut faydalar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-yellow-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{benefit.description}</p>
                
                <div className="text-2xl font-bold text-yellow-600">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Enerji Tesislerinizi Bir Sonraki Seviyeye Taşıyın
          </h2>
          <p className="text-yellow-100 text-lg mb-8">
            Hype Vision Energy ile operasyonel verimliliğinizi %25 artırın ve güvenlik skorunuzu %92'ye çıkarın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold">
              Ücretsiz Demo Talep Et
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-yellow-600 transition-all duration-200 font-semibold">
              Güvenlik Protokol Rehberi
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergySector;