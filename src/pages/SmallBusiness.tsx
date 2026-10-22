import React from 'react';
import { Building, Users, Zap, Shield, CheckCircle, ArrowRight, Play, TrendingUp, DollarSign, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const SmallBusiness = () => {
  const { t } = useLanguage();

  const smallBusinessFeatures = [
    {
      icon: Building,
      title: 'Kolay Kurulum',
      description: 'Plug-and-play çözümler ile dakikalar içinde kurulum. Teknik bilgi gerektirmez.',
      color: 'blue'
    },
    {
      icon: DollarSign,
      title: 'Uygun Fiyat',
      description: 'Küçük işletmeler için özel çözümler. Uygun fiyatlı paketler.',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Basit Kullanım',
      description: 'Kullanıcı dostu arayüz ile herkes kolayca kullanabilir. Eğitim gerektirmez.',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Güvenilir Destek',
      description: '7/24 Türkçe destek ve uzaktan yardım. Sorunlarınızı anında çözüyoruz.',
      color: 'red'
    }
  ];

  const businessTypes = [
    {
      title: 'Küçük Atölyeler',
      description: '5-20 çalışanlı atölyelerde güvenlik ve kalite kontrolü',
      features: ['Baret Tespiti', 'Güvenlik Kontrolü', 'Basit Raporlama', 'Mobil Uyarılar'],
      price: '99₺/ay',
      savings: '%60 Kaza Azalması'
    },
    {
      title: 'Yerel Üreticiler',
      description: 'Gıda, tekstil ve küçük imalat işletmeleri için özel çözümler',
      features: ['Kalite Kontrolü', 'Hijyen İzleme', 'Stok Takibi', 'Müşteri Raporları'],
      price: '199₺/ay',
      savings: '%40 Verimlilik Artışı'
    },
    {
      title: 'Hizmet Sektörü',
      description: 'Restoran, kafe, berber gibi hizmet işletmeleri',
      features: ['Personel Takibi', 'Hijyen Kontrolü', 'Müşteri Analizi', 'Güvenlik İzleme'],
      price: '149₺/ay',
      savings: '%30 Maliyet Tasarrufu'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Hızlı ROI',
      description: '3 ay içinde yatırımınızı geri kazanın',
      metric: '3 Ay'
    },
    {
      icon: Shield,
      title: 'Risk Azaltma',
      description: 'İş kazalarını %60 azaltın',
      metric: '%60 Azalma'
    },
    {
      icon: Clock,
      title: 'Zaman Tasarrufu',
      description: 'Manuel kontrollerde %80 zaman tasarrufu',
      metric: '%80 Tasarruf'
    },
    {
      icon: DollarSign,
      title: 'Maliyet Kontrolü',
      description: 'Operasyonel maliyetleri %25 azaltın',
      metric: '%25 Azalma'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Building className="h-4 w-4" />
              <span>{t('nav.small-business') || 'Küçük İşletme Çözümleri'}</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t('small-business.title') || 'Küçük İşletmeler için'}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Akıllı AI</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              {t('small-business.subtitle') || 'Küçük işletmeler için özel tasarlanmış uygun fiyatlı yapay zeka çözümleri. Kolay kurulum, basit kullanım ve hızlı geri dönüş ile işinizi büyütün.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact" className="group bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span className="font-semibold">Ücretsiz Deneme Başlat</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link to="/contact" className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                <Play className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">Demo İzle</span>
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99₺</div>
                <div className="text-sm text-gray-600">Aylık Başlangıç</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">30 Gün</div>
                <div className="text-sm text-gray-600">Ücretsiz Deneme</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5 Dk</div>
                <div className="text-sm text-gray-600">Kurulum Süresi</div>
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
              Neden <span className="text-blue-600">Küçük İşletmeler</span> Bizi Seçiyor?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Büyük şirketlerin teknolojisini küçük işletmelerin bütçesine uygun hale getirdik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {smallBusinessFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  feature.color === 'green' ? 'bg-green-100 text-green-600' :
                  feature.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-red-100 text-red-600'
                }`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              İşletme <span className="text-blue-600">Türlerine</span> Özel Çözümler
            </h2>
            <p className="text-xl text-gray-600">
              Her işletme türü için özelleştirilmiş AI çözümleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Özellikler:</p>
                    <div className="space-y-1">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium text-green-600">{type.savings}</div>
                  </div>
                  
                  <Link to="/contact" className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 text-center block">
                    Ücretsiz Dene
                  </Link>
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
              İş <span className="text-blue-600">Faydaları</span>
            </h2>
            <p className="text-xl text-gray-600">
              Küçük işletme AI sistemi ile elde edeceğiniz somut faydalar
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            İşletmenizi Büyütmeye Hazır mısınız?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            30 gün ücretsiz deneme ile başlayın. Kredi kartı gerektirmez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-center">
              Ücretsiz Deneme Başlat
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-center">
              Fiyatları Görüntüle
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmallBusiness;