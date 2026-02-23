import React from 'react';
import { Headphones, MessageCircle, Book, Phone, Mail, Clock, ArrowRight, Search, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const SupportCenter = () => {
  const { t } = useLanguage();

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Canlı Destek',
      description: 'Uzmanlarımızla anında sohbet edin',
      availability: '7/24 Aktif',
      responseTime: '< 2 dakika',
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Telefon Desteği',
      description: 'Doğrudan telefon ile destek alın',
      availability: '09:00 - 18:00',
      responseTime: 'Anında',
      color: 'green'
    },
    {
      icon: Mail,
      title: 'E-posta Desteği',
      description: 'Detaylı sorularınız için e-posta gönderin',
      availability: '7/24 Aktif',
      responseTime: '< 4 saat',
      color: 'purple'
    },
    {
      icon: Book,
      title: 'Dokümantasyon',
      description: 'Kapsamlı kılavuzlar ve API referansları',
      availability: 'Her zaman',
      responseTime: 'Anında',
      color: 'orange'
    }
  ];

  const faqCategories = [
    {
      title: 'Başlangıç',
      questions: [
        {
          question: 'HypeVisionLab AI nasıl çalışır?',
          answer: 'HypeVisionLab AI, gelişmiş computer vision ve machine learning teknolojileri kullanarak görüntüleri analiz eder ve güvenlik, kalite kontrol gibi alanlarda otomatik tespit yapar.'
        },
        {
          question: 'Hangi sektörlerde kullanılabilir?',
          answer: 'İnşaat, otomotiv, tekstil, gıda, enerji ve imalat sektörlerinde başarıyla kullanılmaktadır.'
        },
        {
          question: 'Kurulum ne kadar sürer?',
          answer: 'Temel kurulum 1-2 gün, tam entegrasyon ise 1-2 hafta sürmektedir.'
        }
      ]
    },
    {
      title: 'Teknik',
      questions: [
        {
          question: 'API rate limit nedir?',
          answer: 'Standart planda dakikada 100 istek, premium planda dakikada 1000 istek limiti bulunmaktadır.'
        },
        {
          question: 'Hangi görüntü formatları desteklenir?',
          answer: 'JPG, PNG, BMP, TIFF formatları desteklenmektedir. Maksimum dosya boyutu 10MB\'dir.'
        },
        {
          question: 'Offline çalışabilir mi?',
          answer: 'Edge deployment seçeneği ile offline çalışma mümkündür.'
        }
      ]
    },
    {
      title: 'Faturalama',
      questions: [
        {
          question: 'Fiyatlandırma nasıl çalışır?',
          answer: 'Aylık işlenen görüntü sayısına göre kademeli fiyatlandırma uygulanmaktadır.'
        },
        {
          question: 'Ücretsiz deneme var mı?',
          answer: 'Evet, 30 gün ücretsiz deneme ve 1000 ücretsiz API çağrısı sunulmaktadır.'
        },
        {
          question: 'İptal politikası nedir?',
          answer: 'İstediğiniz zaman iptal edebilirsiniz, kalan süre için ücret iadesi yapılır.'
        }
      ]
    }
  ];

  const supportStats = [
    {
      icon: Clock,
      title: 'Ortalama Yanıt Süresi',
      value: '< 2 dk',
      description: 'Canlı destek için'
    },
    {
      icon: CheckCircle,
      title: 'Çözüm Oranı',
      value: '%98',
      description: 'İlk temasta çözüm'
    },
    {
      icon: Headphones,
      title: 'Müşteri Memnuniyeti',
      value: '4.9/5',
      description: '10,000+ değerlendirme'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Headphones className="h-4 w-4" />
              <span>7/24 Teknik Destek</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Size Nasıl
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Yardım Edebiliriz?</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Uzman destek ekibimiz size yardımcı olmak için burada. 
              Sorularınızı yanıtlayın, sorunlarınızı çözün ve başarılı olmanızı sağlayın.
            </p>

            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Sorunuzu veya konuyu arayın..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                  Ara
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {supportStats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-900 mb-1">{stat.title}</div>
                  <div className="text-xs text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Destek <span className="text-blue-600">Kanalları</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Size en uygun destek kanalını seçin ve hemen yardım alın
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  channel.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  channel.color === 'green' ? 'bg-green-100 text-green-600' :
                  channel.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  <channel.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{channel.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Müsaitlik:</span>
                    <span className="font-medium text-gray-900">{channel.availability}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Yanıt Süresi:</span>
                    <span className="font-medium text-green-600">{channel.responseTime}</span>
                  </div>
                </div>
                
                <Link to="/contact" className={`w-full mt-4 py-2 rounded-lg font-medium transition-all duration-200 text-center block ${
                  channel.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700' :
                  channel.color === 'green' ? 'bg-green-600 text-white hover:bg-green-700' :
                  channel.color === 'purple' ? 'bg-purple-600 text-white hover:bg-purple-700' :
                  'bg-orange-600 text-white hover:bg-orange-700'
                }`}>
                  İletişime Geç
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sıkça Sorulan <span className="text-blue-600">Sorular</span>
            </h2>
            <p className="text-xl text-gray-600">
              En çok merak edilen konularda hızlı yanıtlar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                      <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1">
                  <span>Daha fazla göster</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Doğrudan İletişim
              </h2>
              <p className="text-gray-600">
                Acil durumlar veya özel destek ihtiyaçlarınız için
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Telefon Desteği</h3>
                <p className="text-gray-600 mb-2">0216 451 91 12</p>
                <p className="text-sm text-gray-500">Pazartesi - Cuma, 09:00 - 18:00</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">E-posta Desteği</h3>
                <p className="text-gray-600 mb-2">hello@hypevisionlab.com</p>
                <p className="text-sm text-gray-500">7/24 aktif, 4 saat içinde yanıt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hala Sorunuz mu Var?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Uzman ekibimiz size yardımcı olmak için hazır bekliyor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-center">
              Canlı Destek
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-center">
              Ticket Oluştur
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportCenter;