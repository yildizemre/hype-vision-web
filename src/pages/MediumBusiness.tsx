import React from 'react';
import { Factory, Users, BarChart3, Shield, CheckCircle, ArrowRight, Play, TrendingUp, Zap, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const MediumBusiness = () => {
  const { t } = useLanguage();

  const mediumBusinessFeatures = [
    {
      icon: Factory,
      title: 'Ölçeklenebilir Altyapı',
      description: 'Büyüyen işletmenizle birlikte genişleyen esnek AI altyapısı.',
      color: 'blue'
    },
    {
      icon: BarChart3,
      title: 'Gelişmiş Analitik',
      description: 'Detaylı raporlar ve iş zekası ile stratejik kararlar alın.',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Çoklu Lokasyon',
      description: 'Birden fazla şube ve lokasyonu tek merkezden yönetin.',
      color: 'purple'
    },
    {
      icon: Settings,
      title: 'Özelleştirme',
      description: 'İş süreçlerinize özel yapılandırılabilir çözümler.',
      color: 'orange'
    }
  ];

  const businessSolutions = [
    {
      title: 'Üretim Tesisleri',
      description: '50-200 çalışanlı üretim tesisleri için kapsamlı çözümler',
      features: ['Çoklu Hat İzleme', 'Kalite Kontrolü', 'Öngörülü Bakım', 'ERP Entegrasyonu'],
      savings: '%45 Verimlilik Artışı',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    },
    {
      title: 'Perakende Zincirleri',
      description: 'Çoklu mağaza ve depo yönetimi için akıllı çözümler',
      features: ['Stok Optimizasyonu', 'Müşteri Analizi', 'Güvenlik İzleme', 'Merkezi Raporlama'],
      savings: '%35 Maliyet Azalması',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    },
    {
      title: 'Lojistik Şirketleri',
      description: 'Depo ve nakliye operasyonları için optimize edilmiş sistemler',
      features: ['Araç Takibi', 'Depo Yönetimi', 'Rota Optimizasyonu', 'Güvenlik Kontrolü'],
      savings: '%50 Operasyonel Verimlilik',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Büyüme Desteği',
      description: 'İşletmenizin büyümesini %40 hızlandırın',
      metric: '%40 Hızlanma'
    },
    {
      icon: Shield,
      title: 'Risk Yönetimi',
      description: 'Operasyonel riskleri %65 azaltın',
      metric: '%65 Azalma'
    },
    {
      icon: Zap,
      title: 'Otomasyon',
      description: 'Manuel işlemleri %70 azaltın',
      metric: '%70 Otomasyon'
    },
    {
      icon: BarChart3,
      title: 'Veri Odaklı Kararlar',
      description: 'Karar verme süresini %60 kısaltın',
      metric: '%60 Hızlanma'
    }
  ];

  const integrations = [
    { name: 'SAP', logo: '🔷', description: 'ERP entegrasyonu' },
    { name: 'Microsoft Dynamics', logo: '🔶', description: 'İş yönetimi' },
    { name: 'Oracle', logo: '🔴', description: 'Veritabanı bağlantısı' },
    { name: 'Salesforce', logo: '☁️', description: 'CRM entegrasyonu' },
    { name: 'Power BI', logo: '📊', description: 'İş zekası' },
    { name: 'Tableau', logo: '📈', description: 'Veri görselleştirme' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Factory className="h-4 w-4" />
              <span>Orta Ölçekli İşletme Çözümleri</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Büyüyen İşletmeler için
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Kurumsal AI</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Orta ölçekli işletmeler için özel tasarlanmış ölçeklenebilir yapay zeka çözümleri. 
              Gelişmiş analitik, çoklu lokasyon desteği ve kurumsal entegrasyonlar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact" className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span className="font-semibold">Özel Demo Talep Et</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link to="/about" className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                <Play className="h-5 w-5 text-purple-600" />
                <span className="font-semibold">Başarı Hikayeleri</span>
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Özel Fiyat</div>
                <div className="text-sm text-gray-600">İletişime Geçin</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50-200</div>
                <div className="text-sm text-gray-600">Çalışan Kapasitesi</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Öncelikli Destek</div>
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
              Büyüyen İşletmeler için <span className="text-purple-600">Gelişmiş Özellikler</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kurumsal seviye teknoloji ile işletmenizin büyümesini destekleyin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediumBusinessFeatures.map((feature, index) => (
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
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sektörel <span className="text-purple-600">Çözümler</span>
            </h2>
            <p className="text-xl text-gray-600">
              Farklı sektörlerde orta ölçekli işletmeler için özelleştirilmiş AI çözümleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Özellikler:</p>
                    <div className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium text-green-600">{solution.savings}</div>
                  </div>
                  
                  <Link to="/contact" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 text-center block">
                    Detaylı Bilgi Al
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kurumsal <span className="text-purple-600">Entegrasyonlar</span>
            </h2>
            <p className="text-xl text-gray-600">
              Mevcut sistemlerinizle sorunsuz entegrasyon
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="text-3xl mb-3">{integration.logo}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{integration.name}</h3>
                <p className="text-xs text-gray-600">{integration.description}</p>
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
              İş <span className="text-purple-600">Faydaları</span>
            </h2>
            <p className="text-xl text-gray-600">
              Orta ölçekli işletme AI sistemi ile elde edeceğiniz somut faydalar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-purple-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{benefit.description}</p>
                
                <div className="text-2xl font-bold text-purple-600">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            İşletmenizi Bir Sonraki Seviyeye Taşımaya Hazır mısınız?
          </h2>
          <p className="text-purple-100 text-lg mb-8">
            Uzmanlarımızla görüşün ve işletmeniz için özel çözüm geliştirin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-center">
              Özel Demo Talep Et
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-200 font-semibold text-center">
              Uzmanla Görüş
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediumBusiness;