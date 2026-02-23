import React from 'react';
import { Cpu, Wrench, Lightbulb, Target, CheckCircle, ArrowRight, Play, Code, Brain, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CustomSolutions = () => {
  const { t } = useLanguage();

  const customFeatures = [
    {
      icon: Brain,
      title: 'Özel AI Modelleri',
      description: 'İşletmenizin özel ihtiyaçları için sıfırdan geliştirilen yapay zeka modelleri.',
      color: 'purple'
    },
    {
      icon: Code,
      title: 'API Geliştirme',
      description: 'Mevcut sistemlerinizle entegrasyon için özel API ve mikroservis geliştirme.',
      color: 'blue'
    },
    {
      icon: Wrench,
      title: 'Sistem Entegrasyonu',
      description: 'Legacy sistemler dahil tüm altyapınızla sorunsuz entegrasyon.',
      color: 'green'
    },
    {
      icon: Target,
      title: 'Özel Eğitim',
      description: 'Ekibiniz için özelleştirilmiş eğitim programları ve teknik destek.',
      color: 'orange'
    }
  ];

  const developmentProcess = [
    {
      step: '1',
      title: 'Keşif ve Analiz',
      description: 'İş süreçlerinizi analiz eder ve AI fırsatlarını belirleriz',
      duration: '2-4 hafta',
      deliverables: ['İhtiyaç Analizi', 'Teknik Mimari', 'Proje Roadmap']
    },
    {
      step: '2',
      title: 'Prototip Geliştirme',
      description: 'Hızlı prototip ile konsepti test eder ve doğrularız',
      duration: '4-6 hafta',
      deliverables: ['MVP Geliştirme', 'Test Senaryoları', 'Performans Analizi']
    },
    {
      step: '3',
      title: 'Tam Geliştirme',
      description: 'Production-ready çözümü geliştirip test ederiz',
      duration: '8-16 hafta',
      deliverables: ['Tam Sistem', 'Güvenlik Testleri', 'Performans Optimizasyonu']
    },
    {
      step: '4',
      title: 'Deployment ve Destek',
      description: 'Sistemi devreye alır ve sürekli destek sağlarız',
      duration: 'Sürekli',
      deliverables: ['Canlı Sistem', 'Eğitim', '7/24 Destek']
    }
  ];

  const customProjects = [
    {
      title: 'Özel Görüntü İşleme Sistemi',
      description: 'Benzersiz üretim süreçleri için özelleştirilmiş görüntü analizi',
      technologies: ['Computer Vision', 'Deep Learning', 'Edge Computing', 'Real-time Processing'],
      timeline: '12-16 hafta',
      complexity: 'Yüksek',
      image: '/images/custom.webp'
    },
    {
      title: 'Akıllı Tahminleme Sistemi',
      description: 'Talep tahmini ve stok optimizasyonu için özel algoritma',
      technologies: ['Machine Learning', 'Time Series', 'Statistical Modeling', 'Big Data'],
      timeline: '8-12 hafta',
      complexity: 'Orta',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    },
    {
      title: 'Doğal Dil İşleme Platformu',
      description: 'Müşteri geri bildirimlerini analiz eden özel NLP sistemi',
      technologies: ['NLP', 'Sentiment Analysis', 'Text Mining', 'Language Models'],
      timeline: '10-14 hafta',
      complexity: 'Yüksek',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    }
  ];

  const benefits = [
    {
      icon: Lightbulb,
      title: 'Benzersiz Çözümler',
      description: 'Sadece sizin için tasarlanmış, rakiplerinizde olmayan özel AI çözümleri',
      metric: '100% Özel'
    },
    {
      icon: Target,
      title: 'Tam Uyumluluk',
      description: 'Mevcut iş süreçlerinizle mükemmel uyum sağlayan entegre sistemler',
      metric: '%100 Uyum'
    },
    {
      icon: Zap,
      title: 'Hızlı Geliştirme',
      description: 'Agile metodoloji ile hızlı prototipleme ve iteratif geliştirme',
      metric: '50% Hızlı'
    },
    {
      icon: Wrench,
      title: 'Sürekli Destek',
      description: 'Geliştirme sonrası sürekli bakım, güncelleme ve teknik destek',
      metric: '7/24 Destek'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-indigo-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Cpu className="h-4 w-4" />
              <span>Özel AI Çözümleri</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Size Özel
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> AI Çözümleri</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Benzersiz iş ihtiyaçlarınız için sıfırdan tasarlanan özelleştirilmiş yapay zeka sistemleri. 
              Uzman ekibimizle birlikte hayalinizdeki AI çözümünü gerçeğe dönüştürün.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span className="font-semibold">Proje Danışmanlığı</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                <Play className="h-5 w-5 text-purple-600" />
                <span className="font-semibold">Özel Projeler</span>
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Özel Proje</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">8-16</div>
                <div className="text-sm text-gray-600">Hafta Geliştirme</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">%95</div>
                <div className="text-sm text-gray-600">Başarı Oranı</div>
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
              Özel Geliştirme <span className="text-purple-600">Hizmetleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uzman ekibimizle birlikte benzersiz AI çözümlerinizi hayata geçirin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  feature.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  feature.color === 'green' ? 'bg-green-100 text-green-600' :
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

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Geliştirme <span className="text-purple-600">Süreci</span>
            </h2>
            <p className="text-xl text-gray-600">
              Agile metodoloji ile hızlı ve güvenilir özel AI çözüm geliştirme
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-600">{process.step}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{process.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">{process.description}</p>
                  
                  <div className="text-center mb-4">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium">
                      {process.duration}
                    </span>
                  </div>
                  
                  <div className="space-y-1">
                    {process.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
                
                {index < developmentProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-purple-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Örnek <span className="text-purple-600">Projeler</span>
            </h2>
            <p className="text-xl text-gray-600">
              Daha önce geliştirdiğimiz özel AI çözümlerinden örnekler
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.complexity === 'Yüksek' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {project.complexity}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Teknolojiler:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Süre:</span> {project.timeline}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200">
                    Benzer Proje Talep Et
                  </button>
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
              Özel Çözüm <span className="text-purple-600">Avantajları</span>
            </h2>
            <p className="text-xl text-gray-600">
              Özelleştirilmiş AI çözümleri ile elde edeceğiniz benzersiz faydalar
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hayalinizdeki AI Çözümünü Gerçeğe Dönüştürün
          </h2>
          <p className="text-purple-100 text-lg mb-8">
            Uzman ekibimizle birlikte benzersiz AI projenizi planlayın ve geliştirin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold">
              Ücretsiz Proje Danışmanlığı
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-200 font-semibold">
              Portföyü İncele
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSolutions;