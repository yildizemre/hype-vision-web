import React from 'react';
import { Shield, Eye, Users, CheckCircle, AlertTriangle, Thermometer, ArrowRight, Play, Utensils, Heart, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FoodBeverage = () => {
  const { t } = useLanguage();

  const foodSafetyFeatures = [
    {
      icon: Shield,
      title: 'Hijyen Kontrolü',
      description: 'Personelin hijyen kurallarına uyumunu kontrol eder ve ihlalleri anında tespit eder.',
      accuracy: '99.2%',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Bone/Eldiven Tespiti',
      description: 'Gıda üretim alanında çalışanların bone ve eldiven kullanımını kontrol eder.',
      accuracy: '99.5%',
      color: 'blue'
    },
    {
      icon: Eye,
      title: 'Temizlik Kontrolü',
      description: 'Üretim alanı ve ekipmanların temizlik durumunu sürekli izler.',
      accuracy: '98.9%',
      color: 'purple'
    },
    {
      icon: Thermometer,
      title: 'Sıcaklık İzleme',
      description: 'Soğuk zincir ve üretim sıcaklıklarını sürekli izler ve uyarı verir.',
      accuracy: '99.8%',
      color: 'red'
    }
  ];

  const foodApplications = [
    {
      title: 'Et İşleme Tesisleri',
      description: 'Et ve et ürünleri üretiminde hijyen ve güvenlik kontrolü',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Hijyen Kontrolü', 'Sıcaklık İzleme', 'Personel Takibi', 'Kalite Analizi'],
      stats: { facilities: '150+', compliance: '%98', incidents: '%85 ↓' }
    },
    {
      title: 'Süt Ürünleri',
      description: 'Süt ve süt ürünleri üretiminde kalite ve hijyen standardları',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Soğuk Zincir', 'Ambalaj Kontrolü', 'Tazelik Testi', 'Kontaminasyon Tespiti'],
      stats: { products: '2M+', quality: '%99.2', freshness: '%96' }
    },
    {
      title: 'Fırın Ürünleri',
      description: 'Ekmek ve unlu mamullerde kalite kontrolü ve hijyen izleme',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      features: ['Pişirme Kontrolü', 'Şekil Analizi', 'Renk Kontrolü', 'Ambalaj Tespiti'],
      stats: { batches: '100K+', consistency: '%97', waste: '%15 ↓' }
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Gıda Güvenliği',
      description: 'HACCP ve ISO 22000 standartlarına uyumluluğu %98 seviyesine çıkarır',
      metric: '%98 Uyum'
    },
    {
      icon: Heart,
      title: 'Halk Sağlığı',
      description: 'Gıda kaynaklı hastalık riskini %90 azaltır',
      metric: '%90 Risk Azalması'
    },
    {
      icon: Award,
      title: 'Kalite Sertifikasyonu',
      description: 'Uluslararası kalite sertifikalarını daha kolay elde etmeyi sağlar',
      metric: 'ISO 22000'
    },
    {
      icon: Utensils,
      title: 'Müşteri Memnuniyeti',
      description: 'Ürün kalitesi artışı ile müşteri memnuniyetini %85 artırır',
      metric: '%85 Artış'
    }
  ];

  const complianceStandards = [
    {
      name: 'HACCP',
      description: 'Hazard Analysis Critical Control Points',
      coverage: '100%'
    },
    {
      name: 'ISO 22000',
      description: 'Gıda Güvenliği Yönetim Sistemi',
      coverage: '100%'
    },
    {
      name: 'BRC',
      description: 'British Retail Consortium',
      coverage: '95%'
    },
    {
      name: 'IFS',
      description: 'International Featured Standards',
      coverage: '95%'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4" />
                <span>Gıda & İçecek Güvenliği</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Gıda Sektörü için
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Güvenlik AI</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Gıda üretiminde hijyen kontrolü, personel güvenliği ve kalite standartları için gelişmiş yapay zeka çözümleri. 
                HACCP ve ISO 22000 uyumlu sistemler ile gıda güvenliğini garanti altına alın.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span className="font-semibold">Ücretsiz Demo</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">Uyumluluk Rehberi</span>
                </button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-600">Gıda Tesisi</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.2%</div>
                  <div className="text-sm text-gray-600">Hijyen Skoru</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">%85</div>
                  <div className="text-sm text-gray-600">Risk Azalması</div>
                </div>
              </div>
            </div>

            {/* Live Food Safety Dashboard */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-green-50 px-6 py-4 border-b border-green-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Canlı Gıda Güvenlik Paneli</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600">CANLI</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-600 font-medium">Hijyen Uyumu</p>
                        <p className="text-2xl font-bold text-green-900">98.5%</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-red-600 font-medium">Hijyen Uyarısı</p>
                        <p className="text-2xl font-bold text-red-900">2</p>
                      </div>
                      <AlertTriangle className="h-8 w-8 text-red-600" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Aktif Uyarılar</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                      <Users className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Bone Eksik - Üretim Hattı 1</p>
                        <p className="text-xs text-gray-600">1 dakika önce</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                      <Thermometer className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Sıcaklık Uyarısı - Soğuk Oda</p>
                        <p className="text-xs text-gray-600">3 dakika önce</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">HACCP Uyumluluk Skoru</span>
                    <span className="text-lg font-bold text-green-600">98.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{ width: '98.5%' }}></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-sm font-bold text-green-600">247</div>
                    <div className="text-xs text-gray-500">Personel</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-sm font-bold text-blue-600">4°C</div>
                    <div className="text-xs text-gray-500">Soğuk Oda</div>
                  </div>
                  <div className="text-center p-2 bg-purple-50 rounded-lg">
                    <div className="text-sm font-bold text-purple-600">24/7</div>
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
              Gıda Güvenlik <span className="text-green-600">Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gıda üretiminde hijyen ve güvenlik standartlarını maksimum seviyeye çıkaran AI destekli çözümler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {foodSafetyFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  feature.color === 'green' ? 'bg-green-100 text-green-600' :
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  feature.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-red-100 text-red-600'
                }`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Doğruluk Oranı</span>
                  <span className={`text-sm font-bold ${
                    feature.color === 'green' ? 'text-green-600' :
                    feature.color === 'blue' ? 'text-blue-600' :
                    feature.color === 'purple' ? 'text-purple-600' :
                    'text-red-600'
                  }`}>{feature.accuracy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Compliance Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Uyumluluk <span className="text-green-600">Standartları</span>
            </h2>
            <p className="text-xl text-gray-600">
              Uluslararası gıda güvenliği standartlarına tam uyumluluk
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{standard.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{standard.description}</p>
                
                <div className="text-2xl font-bold text-green-600">{standard.coverage}</div>
                <div className="text-sm text-gray-500">Kapsama Oranı</div>
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
              İş <span className="text-green-600">Faydaları</span>
            </h2>
            <p className="text-xl text-gray-600">
              Gıda güvenlik AI sistemi ile elde edeceğiniz somut faydalar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-green-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{benefit.description}</p>
                
                <div className="text-2xl font-bold text-green-600">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Gıda Güvenliğinizi Bir Sonraki Seviyeye Taşıyın
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Hype Vision Food Safety ile HACCP uyumunuzu %98'e çıkarın ve gıda güvenlik risklerini %90 azaltın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold">
              Ücretsiz Demo Talep Et
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-200 font-semibold">
              Uyumluluk Rehberini İndir
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodBeverage;