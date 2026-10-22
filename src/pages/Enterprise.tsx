import React from 'react';
import { Building2, Shield, Database, Cpu, CheckCircle, ArrowRight, Play, Users, Globe, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Enterprise = () => {
  const { t } = useLanguage();

  const enterpriseFeatures = [
    {
      icon: Database,
      title: 'Büyük Veri İşleme',
      description: 'Petabyte seviyesinde veri işleme kapasitesi ile sınırsız ölçeklenebilirlik.',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Kurumsal Güvenlik',
      description: 'ISO 27001, SOC 2 ve GDPR uyumlu en yüksek güvenlik standartları.',
      color: 'red'
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Dünya çapında çoklu bölge desteği ve yerel veri merkezleri.',
      color: 'green'
    },
    {
      icon: Cpu,
      title: 'Özel AI Modelleri',
      description: 'İşletmenize özel geliştirilmiş yapay zeka modelleri ve algoritmaları.',
      color: 'purple'
    }
  ];

  const enterpriseSolutions = [
    {
      title: 'Fortune 500 Şirketleri',
      description: 'Büyük kurumlar için kapsamlı AI dönüşüm çözümleri',
      features: ['Özel AI Modelleri', 'Dedicated Infrastructure', 'SLA Garantisi', '7/24 Premium Destek'],
      benefits: ['%60 Operasyonel Verimlilik', '%45 Maliyet Azalması', '%99.99 Uptime', 'Sınırsız Ölçeklenebilirlik'],
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    },
    {
      title: 'Çok Uluslu Şirketler',
      description: 'Global operasyonlar için merkezi AI yönetim platformu',
      features: ['Multi-Region Support', 'Compliance Management', 'Centralized Dashboard', 'Local Data Centers'],
      benefits: ['Global Standardizasyon', 'Yerel Uyumluluk', 'Merkezi Kontrol', 'Hızlı Deployment'],
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    },
    {
      title: 'Holding Şirketleri',
      description: 'Çoklu şirket yapısı için entegre AI ekosistemi',
      features: ['Cross-Company Analytics', 'Unified Reporting', 'Resource Optimization', 'Risk Management'],
      benefits: ['Sinerjik Verimlilik', 'Merkezi İntelligence', 'Risk Azaltma', 'Stratejik İçgörüler'],
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    }
  ];

  const securityFeatures = [
    {
      title: 'Zero Trust Architecture',
      description: 'Her erişim noktasında kimlik doğrulama ve yetkilendirme',
      icon: Lock
    },
    {
      title: 'End-to-End Encryption',
      description: 'Tüm veri transferlerinde AES-256 şifreleme',
      icon: Shield
    },
    {
      title: 'Compliance Management',
      description: 'GDPR, HIPAA, SOX ve diğer düzenlemelere uyumluluk',
      icon: CheckCircle
    },
    {
      title: 'Audit & Monitoring',
      description: '7/24 güvenlik izleme ve detaylı audit logları',
      icon: Database
    }
  ];

  const clientLogos = [
    { name: 'Microsoft', logo: '🔷' },
    { name: 'Google', logo: '🔴' },
    { name: 'Amazon', logo: '🟠' },
    { name: 'Apple', logo: '🍎' },
    { name: 'Meta', logo: '🔵' },
    { name: 'Tesla', logo: '⚡' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-24 pb-20 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Building2 className="h-4 w-4" />
              <span>Kurumsal AI Çözümleri</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Kurumsal Düzeyde
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Yapay Zeka</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Fortune 500 şirketleri için özel tasarlanmış kurumsal seviye yapay zeka çözümleri. 
              Sınırsız ölçeklenebilirlik, maksimum güvenlik ve özel AI modelleri.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span className="font-semibold">Kurumsal Demo</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="group bg-white bg-opacity-20 text-white px-8 py-4 rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span className="font-semibold">Case Studies</span>
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Özel Fiyat</div>
                <div className="text-sm text-gray-300">Kurumsal Paket</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-sm text-gray-300">Çalışan Kapasitesi</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.99%</div>
                <div className="text-sm text-gray-300">SLA Garantisi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">Dünya çapında önde gelen şirketlerin tercihi</p>
          <div className="flex items-center justify-center space-x-12 opacity-60">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{client.logo}</div>
                <div className="text-sm font-medium text-gray-500">{client.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kurumsal Seviye <span className="text-blue-600">Özellikler</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En büyük organizasyonların ihtiyaçlarını karşılayan gelişmiş AI altyapısı
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex p-4 rounded-xl mb-6 ${
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  feature.color === 'red' ? 'bg-red-100 text-red-600' :
                  feature.color === 'green' ? 'bg-green-100 text-green-600' :
                  'bg-purple-100 text-purple-600'
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

      {/* Enterprise Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kurumsal <span className="text-blue-600">Çözümler</span>
            </h2>
            <p className="text-xl text-gray-600">
              Büyük organizasyonlar için özelleştirilmiş AI dönüşüm çözümleri
            </p>
          </div>

          <div className="space-y-12">
            {enterpriseSolutions.map((solution, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-xl text-gray-600 mb-6">{solution.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Özellikler:</h4>
                      <div className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Faydalar:</h4>
                      <div className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold">
                    Detaylı Bilgi Al
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kurumsal <span className="text-red-600">Güvenlik</span>
            </h2>
            <p className="text-xl text-gray-600">
              En yüksek güvenlik standartları ile verilerinizi koruyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-red-600" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Kurumsal AI Dönüşümünüze Başlayın
          </h2>
          <p className="text-blue-100 text-xl mb-8">
            Uzmanlarımızla görüşün ve organizasyonunuz için özel AI stratejisi geliştirin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg">
              Kurumsal Demo Talep Et
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              AI Stratejist ile Görüş
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;