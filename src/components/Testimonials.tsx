import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Mehmet Yılmaz',
      role: 'İSG Uzmanı',
      company: 'TOFAŞ',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'HypeVisionLab ile iş kazalarımızı %85 azalttık. Baret tespiti sistemi sayesinde çalışanlarımızın güvenliği artık otomatik olarak kontrol ediliyor.',
      rating: 5
    },
    {
      name: 'Ayşe Demir',
      role: 'Kalite Kontrol Müdürü',
      company: 'ARÇELIK',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Üretim hatlarımızda kalite kontrolü artık çok daha hızlı ve doğru. Hatalı ürün oranımız %78 azaldı ve müşteri memnuniyetimiz arttı.',
      rating: 5
    },
    {
      name: 'Can Özkan',
      role: 'Üretim Müdürü',
      company: 'KORTEKS',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Tekstil üretimimizde uzunluk ölçümü ve kumaş kalite kontrolü için kullanıyoruz. Doğruluk oranı %99.2 ve işlem hızımız 10 kat arttı.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {t('testimonials.title.highlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('testimonials.join-customers')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('testimonials.start-trial')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg font-semibold">
                {t('testimonials.start-free-trial')}
              </Link>
              <Link to="/contact" className="text-gray-700 px-8 py-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 font-semibold">
                {t('testimonials.schedule-demo')}
              </Link>
            </div>
            <p>Binlerce müşterimizin HypeVisionLab ile elde ettiği deneyimler ve başarı hikayeleri</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;