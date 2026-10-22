import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, Building, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Mail,
      title: 'E-posta',
      description: 'Detaylı sorularınız için yazın',
      contact: 'info@hypevisionlab.com',
      availability: '7/24 aktif, 4 saat içinde yanıt',
      color: 'green'
    },
    {
      icon: MapPin,
      title: 'Ofis Adresi',
      description: 'Ziyaret için randevu alın',
      contact: 'Hightech Binası, Gebze OSB, Kemal Nehrozoğlu Cd. 400. Sokak, 41480 Gebze/Kocaeli',
      availability: 'Pazartesi - Cuma, 09:00 - 18:00',
      color: 'purple'
    },
    {
      icon: MessageSquare,
      title: 'Canlı Destek',
      description: 'Anında yardım alın',
      contact: 'Canlı sohbet başlat',
      availability: '7/24 aktif destek',
      color: 'orange'
    }
  ];

  const officeHours = [
    { day: 'Pazartesi - Cuma', hours: '09:00 - 18:00', status: 'Açık' },
    { day: 'Cumartesi', hours: '10:00 - 16:00', status: 'Açık' },
    { day: 'Pazar', hours: 'Kapalı', status: 'Kapalı' }
  ];

  const departments = [
    { name: 'Satış Ekibi', email: 'info@hypevisionlab.com', description: 'Ürün bilgileri ve fiyatlandırma' },
    { name: 'Teknik Destek', email: 'info@hypevisionlab.com', description: 'Teknik sorular ve entegrasyon' },
    { name: 'İş Geliştirme', email: 'info@hypevisionlab.com', description: 'Ortaklık ve iş birliği' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Phone className="h-4 w-4" />
              <span>İletişim</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Bizimle
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> İletişime Geçin</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              MES çözümlerimiz hakkında bilgi almak, demo talep etmek veya özel projelerinizi 
              görüşmek için uzman ekibimizle iletişime geçin.
            </p>

            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">&lt; 2 dk</div>
                <div className="text-sm text-gray-600">Ortalama Yanıt</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">7/24</div>
                <div className="text-sm text-gray-600">Destek</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">%98</div>
                <div className="text-sm text-gray-600">Memnuniyet</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              İletişim <span className="text-blue-600">Yöntemleri</span>
            </h2>
            <p className="text-xl text-gray-600">
              Size en uygun iletişim yöntemini seçin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  method.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  method.color === 'green' ? 'bg-green-100 text-green-600' :
                  method.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  <method.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                <p className="font-medium text-gray-900 mb-2">{method.contact}</p>
                <p className="text-xs text-gray-500">{method.availability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Demo Talep Formu
            </h2>
            <p className="text-gray-600 text-lg">
              Ücretsiz demo ve danışmanlık için formu doldurun
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="ornek@sirket.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="+90 (5xx) xxx xx xx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Şirket Adı *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Şirket adınız"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  İlgilendiğiniz Çözüm
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                  <option value="">Seçiniz...</option>
                  <option value="production-control">MES Üretim Kontrol</option>
                  <option value="quality-ai">MES Kalite Kontrol</option>
                  <option value="process-monitoring">MES Süreç İzleme</option>
                  <option value="erp-integration">ERP/CRM Entegrasyonu</option>
                  <option value="safety-systems">Güvenlik Sistemleri</option>
                  <option value="textile-solutions">Tekstil Çözümleri</option>
                  <option value="custom-solutions">Özel Çözümler</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mesajınız
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Projeniz hakkında detayları paylaşın..."
                ></textarea>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  <span className="font-medium">Gizlilik Politikası</span>'nı okudum ve kabul ediyorum
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Demo Talep Et</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Office Hours */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="h-6 w-6 text-blue-600 mr-3" />
                Çalışma Saatleri
              </h3>
              
              <div className="space-y-4">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{schedule.day}</div>
                      <div className="text-sm text-gray-600">{schedule.hours}</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      schedule.status === 'Açık' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {schedule.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Building className="h-6 w-6 text-purple-600 mr-3" />
                Departmanlar
              </h3>
              
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{dept.name}</h4>
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        {dept.email}
                      </a>
                    </div>
                    <p className="text-sm text-gray-600">{dept.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-gray-600">
              En çok merak edilen konularda hızlı yanıtlar
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'MES sistemi kurulumu ne kadar sürer?',
                answer: 'Temel MES kurulumu 1-2 hafta, tam entegrasyon ise 4-8 hafta sürmektedir. Proje büyüklüğüne göre değişiklik gösterebilir.'
              },
              {
                question: 'Hangi ERP sistemleri ile entegrasyon mümkün?',
                answer: 'SAP, Oracle, Microsoft Dynamics, Salesforce gibi tüm major ERP/CRM sistemleri ile entegrasyon sağlayabiliyoruz.'
              },
              {
                question: 'Demo sürecinde neler yapılır?',
                answer: 'Demo sürecinde mevcut üretim süreçlerinizi analiz eder, MES çözümlerimizi tanıtır ve pilot uygulama planı hazırlarız.'
              },
              {
                question: 'Fiyatlandırma nasıl çalışır?',
                answer: 'Fiyatlandırma proje kapsamına, kullanıcı sayısına ve entegrasyon karmaşıklığına göre belirlenir. Ücretsiz danışmanlık ile özel teklif hazırlarız.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
                <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            MES Dönüşümünüze Bugün Başlayın
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Uzman ekibimizle görüşün ve işletmeniz için özel MES çözümü geliştirin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@hypevisionlab.com" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-center inline-block">
              E-posta Gönder
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;