import React from 'react';
import { Factory, Eye, BarChart3, Database, Activity, Cpu, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Factory,
      title: 'Üretim Planlama',
      description: 'İş emirleri, kaynak planlama ve üretim programlama modülü',
      color: 'blue'
    },
    {
      icon: Eye,
      title: 'Kalite Yönetimi',
      description: 'Görüntü işleme ile otomatik kalite kontrol ve test yönetimi',
      color: 'blue'
    },
    {
      icon: BarChart3,
      title: 'Üretim Analizi',
      description: 'Performans metrikleri, verimlilik analizi ve raporlama',
      color: 'green'
    },
    {
      icon: Database,
      title: 'ERP Entegrasyonu',
      description: 'SAP, Oracle, Dynamics gibi ERP sistemleriyle tam entegrasyon',
      color: 'purple'
    },
    {
      icon: Activity,
      title: 'Süreç İzleme',
      description: 'Üretim süreçlerini gerçek zamanlı izleme ve optimizasyon',
      color: 'purple'
    },
    {
      icon: Cpu,
      title: 'Makine Entegrasyonu',
      description: 'PLC, SCADA ve makine verilerinin MES ile entegrasyonu',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white',
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
      yellow: 'bg-yellow-100 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      indigo: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            MES Sistemi
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Özellikleri</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Görüntü işleme teknolojisi ile desteklenen kapsamlı üretim yönetim sistemi
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-4 sm:p-6 lg:p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className={`inline-flex p-3 rounded-xl mb-6 transition-all duration-300 ${getColorClasses(feature.color)}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Türkiye'nin MES Lideri</h3>
            <p className="text-blue-100 text-sm sm:text-base lg:text-lg px-2">Binlerce şirket MES sistemimiz ile daha verimli üretim yapıyor</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-2">
                <Factory className="h-8 w-8 text-blue-200" />
              </div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-blue-200">Üretim Hattı</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-2">
                <Eye className="h-8 w-8 text-blue-200" />
              </div>
              <div className="text-3xl font-bold">50M+</div>
              <div className="text-blue-200">Kalite Kontrolü</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-blue-200" />
              </div>
              <div className="text-3xl font-bold">%45</div>
              <div className="text-blue-200">Verimlilik Artışı</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center mb-2">
                <Database className="h-8 w-8 text-blue-200" />
              </div>
              <div className="text-3xl font-bold">150+</div>
              <div className="text-blue-200">ERP Entegrasyonu</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;