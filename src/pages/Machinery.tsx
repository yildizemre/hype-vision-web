import React from 'react';
import { Factory, Eye, BarChart3, Activity, Shield, Zap, CheckCircle, ArrowRight, Cog, Settings, Wrench, TrendingUp, Users, Phone, Mail } from 'lucide-react';

const Machinery = () => {
  const machineryFeatures = [
    {
      icon: Factory,
      title: 'Makine İzleme',
      description: 'Üretim makinelerinin gerçek zamanlı durumu ve performans takibi',
      color: 'blue'
    },
    {
      icon: Eye,
      title: 'Öngörülü Bakım',
      description: 'Makine arızalarını önceden tespit ederek planlı bakım yapın',
      color: 'green'
    },
    {
      icon: BarChart3,
      title: 'Performans Analizi',
      description: 'Makine verimliliği ve üretim metriklerini detaylı analiz edin',
      color: 'purple'
    },
    {
      icon: Activity,
      title: 'Ekipman Takibi',
      description: 'Tüm ekipmanların konumu, durumu ve kullanım geçmişi',
      color: 'orange'
    }
  ];

  const machineryApplications = [
    {
      title: 'CNC Tezgahlar',
      description: 'CNC tezgahlarda işleme kalitesi ve takım ömrü optimizasyonu',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Takım Ömrü Takibi', 'İşleme Kalitesi', 'Vibrasyon Analizi', 'Sıcaklık Kontrolü'],
      stats: { efficiency: '95%', quality: '99.2%', speed: '0.2s' }
    },
    {
      title: 'Enjeksiyon Makineleri',
      description: 'Plastik enjeksiyon makinelerinde kalite kontrol ve süreç optimizasyonu',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Enjeksiyon Basıncı', 'Sıcaklık Kontrolü', 'Parça Kalitesi', 'Döngü Süresi'],
      stats: { efficiency: '92%', quality: '98.8%', speed: '0.3s' }
    },
    {
      title: 'Pres Makineleri',
      description: 'Pres makinelerinde kuvvet kontrolü ve parça kalite analizi',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Kuvvet Ölçümü', 'Parça Boyutu', 'Kalite Kontrolü', 'Hata Tespiti'],
      stats: { efficiency: '94%', quality: '99.1%', speed: '0.1s' }
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Arıza Azalması',
      description: 'Öngörülü bakım ile makine arızalarını %70 azaltın',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Verimlilik Artışı',
      description: 'Makine performansını optimize ederek %35 verimlilik artışı',
      color: 'green'
    },
    {
      icon: CheckCircle,
      title: 'Kalite İyileştirme',
      description: 'Sürekli izleme ile ürün kalitesini %25 artırın',
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Factory className="h-4 w-4" />
                <span>Makine Sanayi AI</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Makine Sanayi için
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Akıllı Üretim</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Makine sanayinde üretim süreçlerini optimize edin. Öngörülü bakım, performans analizi ve kalite kontrolü ile verimliliği maksimuma çıkarın.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span className="font-semibold">Demo Talep Et</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold">İletişime Geç</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Makine Durumu</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-green-600 font-medium">Aktif Makine</p>
                          <p className="text-2xl font-bold text-green-900">12</p>
                        </div>
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <p className="text-xs text-green-600 mt-2">Verimlilik: %95</p>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-orange-600 font-medium">Bakım Gerekli</p>
                          <p className="text-2xl font-bold text-orange-900">3</p>
                        </div>
                        <Activity className="h-8 w-8 text-orange-600" />
                      </div>
                      <p className="text-xs text-orange-600 mt-2">Öngörülü bakım</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-white rounded border border-gray-200">
                      <span className="text-sm text-gray-700">CNC Tezgah 1</span>
                      <span className="text-xs text-green-600 font-medium">Aktif</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white rounded border border-gray-200">
                      <span className="text-sm text-gray-700">Enjeksiyon Makinesi 2</span>
                      <span className="text-xs text-green-600 font-medium">Aktif</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Makine Sanayi
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> MES Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Makine sanayinde üretim süreçlerini optimize etmek için gelişmiş MES çözümleri
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {machineryFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl mb-6 ${
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  feature.color === 'green' ? 'bg-green-100 text-green-600' :
                  feature.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Makine Uygulama Alanları</h3>
            <p className="text-xl text-gray-600">Farklı makine türleri için özelleştirilmiş MES çözümleri</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {machineryApplications.map((application, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={application.image}
                    alt={application.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <Factory className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{application.title}</h4>
                  <p className="text-gray-600 mb-4">{application.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center">
                      <div className="text-sm font-bold text-green-600">{application.stats.efficiency}</div>
                      <div className="text-xs text-gray-500">Verimlilik</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-blue-600">{application.stats.quality}</div>
                      <div className="text-xs text-gray-500">Kalite</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-purple-600">{application.stats.speed}</div>
                      <div className="text-xs text-gray-500">Hız</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {application.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
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
              Makine Sanayi
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Faydaları</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MES sistemi ile makine sanayinde elde edeceğiniz somut faydalar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex p-4 rounded-full mb-6 ${
                  benefit.color === 'blue' ? 'bg-blue-100' :
                  benefit.color === 'green' ? 'bg-green-100' :
                  'bg-orange-100'
                }`}>
                  <benefit.icon className={`h-8 w-8 ${
                    benefit.color === 'blue' ? 'text-blue-600' :
                    benefit.color === 'green' ? 'text-green-600' :
                    'text-orange-600'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Makine Sanayinizi Optimize Etmeye Hazır mısınız?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            HypeVisionLab MES sistemi ile makine verimliliğinizi artırın ve üretim süreçlerinizi optimize edin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2">
              <span>Demo Talep Et</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold inline-flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>İletişime Geç</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Machinery;