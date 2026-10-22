import React from 'react';
import { Users, Target, Award, Globe, Brain, Zap, Shield, TrendingUp, ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      title: 'Çalışan',
      value: '10',
      description: 'Uzman ekibimiz'
    },
    {
      icon: Globe,
      title: 'Müşteri',
      value: '42',
      description: 'Memnun müşterilerimiz'
    },
    {
      icon: Brain,
      title: 'Doğruluk Oranı',
      value: '%92',
      description: 'AI sistem doğruluğu'
    },
    {
      icon: Award,
      title: 'Deneyim',
      value: '4+',
      description: 'Yıllık sektör deneyimi'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'İnovasyon',
      description: 'En son AI teknolojilerini endüstriyel çözümlere dönüştürüyoruz',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Güvenlik',
      description: 'İş güvenliği ve veri güvenliği konularında taviz vermiyoruz',
      color: 'red'
    },
    {
      icon: TrendingUp,
      title: 'Verimlilik',
      description: 'Müşterilerimizin operasyonel verimliliğini artırmayı hedefliyoruz',
      color: 'green'
    },
    {
      icon: Users,
      title: 'İşbirliği',
      description: 'Müşterilerimizle uzun vadeli ortaklıklar kuruyoruz',
      color: 'purple'
    }
  ];


  const awards = [
    {
      title: 'En İyi AI Startup',
      organization: 'TechCrunch Disrupt',
      year: '2023',
      icon: '🏆'
    },
    {
      title: 'İnovasyon Ödülü',
      organization: 'Türkiye Bilişim Vakfı',
      year: '2023',
      icon: '🥇'
    },
    {
      title: 'Güvenlik Teknolojisi Ödülü',
      organization: 'İSG Derneği',
      year: '2022',
      icon: '🛡️'
    },
    {
      title: 'Hızlı Büyüyen Şirket',
      organization: 'Deloitte Fast 50',
      year: '2022',
      icon: '🚀'
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
              <Brain className="h-4 w-4" />
              <span>Hakkımızda</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Endüstriyel AI'nin
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Öncüleri</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              2020'den beri Türkiye'nin önde gelen şirketlerine yapay zeka destekli 
              güvenlik ve kalite kontrol çözümleri sunuyoruz. Misyonumuz, AI teknolojisini 
              herkesin erişebileceği ve kullanabileceği hale getirmek.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span className="font-semibold">Hikayemizi Keşfedin</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                <Play className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">Şirket Videosu</span>
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
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

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Misyonumuz ve <span className="text-blue-600">Vizyonumuz</span>
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Target className="h-6 w-6 text-blue-600 mr-3" />
                    Misyonumuz
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yapay zeka teknolojisini endüstriyel alanlarda erişilebilir kılarak, 
                    işyeri güvenliğini artırmak ve üretim kalitesini optimize etmek. 
                    Her büyüklükteki işletmenin AI'dan faydalanabilmesini sağlamak.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Zap className="h-6 w-6 text-purple-600 mr-3" />
                    Vizyonumuz
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Türkiye'nin ve bölgenin endüstriyel yapay zeka alanında lider şirketi olmak. 
                    Dünya çapında tanınan, güvenilir ve yenilikçi AI çözümleri sunan 
                    bir teknoloji şirketi haline gelmek.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Ekibimiz"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Şirket kültürümüzü şekillendiren ve her kararımızda rehber olan temel değerlerimiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className={`inline-flex p-4 rounded-xl mb-6 ${
                  value.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  value.color === 'red' ? 'bg-red-100 text-red-600' :
                  value.color === 'green' ? 'bg-green-100 text-green-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  <value.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Awards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ödüller ve <span className="text-blue-600">Başarılar</span>
            </h2>
            <p className="text-xl text-gray-600">
              Sektörde aldığımız tanınırlık ve ödüller
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{award.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-600 text-sm mb-1">{award.organization}</p>
                <p className="text-blue-600 font-medium text-sm">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Geleceği Birlikte Şekillendirelim
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Ekibimize katılın veya çözümlerimizi keşfederek AI dönüşümünüzü başlatın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-center">
              Kariyer Fırsatları
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-center">
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;