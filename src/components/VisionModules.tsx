import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Package, ShieldCheck, ArrowRight } from 'lucide-react';

const VisionModules = () => {
  const modules = [
    {
      id: 'kalite-kontrol',
      title: 'Kalite Kontrol',
      description: 'Görüntü işleme ile otomatik kalite kontrolü, hata tespiti ve raporlama. Üretim hatlarında gerçek zamanlı denetim.',
      icon: Eye,
      href: '/quality-ai',
      color: 'blue',
      stats: ['Otomatik kontrol', 'Hata tespiti', 'Raporlama']
    },
    {
      id: 'urun-sayim',
      title: 'Ürün Sayım',
      description: 'Konveyör ve depo ortamında ürün sayımı, stok takibi ve envanter doğrulama. Yüksek doğrulukla sayım.',
      icon: Package,
      href: '/production-control',
      color: 'green',
      stats: ['Gerçek zamanlı sayım', 'Stok doğrulama', 'Envanter takibi']
    },
    {
      id: 'isg-denetim',
      title: 'İSG Denetimleri',
      description: 'İş güvenliği uyumu, baret ve yelek tespiti, tehlikeli bölge ihlali kontrolü. Sürekli güvenlik izleme.',
      icon: ShieldCheck,
      href: '/safety-ai',
      color: 'orange',
      stats: ['Baret/yelek tespiti', 'Tehlike analizi', 'Uyum raporları']
    }
  ];

  const iconBgClasses: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200'
  };
  const borderClasses: Record<string, string> = {
    blue: 'border-blue-200 hover:border-blue-400',
    green: 'border-green-200 hover:border-green-400',
    orange: 'border-orange-200 hover:border-orange-400'
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — MES Kontrol Paneli ile aynı tarz */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Görüntü İşleme ile
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Modüller</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Kalite, sayım ve güvenlik denetimlerini görüntü işleme ile tek platformda yönetin
          </p>
        </div>

        {/* Panel container — Dashboard gibi kart */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Görüntü İşleme Modül Paneli</h3>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">Kalite kontrol, ürün sayım ve İSG denetimleri — gerçek zamanlı izleme</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Aktif</span>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {modules.map((module) => (
                <Link
                  key={module.id}
                  to={module.href}
                  className={`group block p-4 sm:p-6 rounded-2xl border-2 bg-white transition-all duration-300 hover:shadow-xl ${borderClasses[module.color]}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl border ${iconBgClasses[module.color]}`}>
                      <module.icon className="h-8 w-8" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{module.description}</p>
                  <ul className="space-y-1">
                    {module.stats.map((stat, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 opacity-70" />
                        {stat}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionModules;
