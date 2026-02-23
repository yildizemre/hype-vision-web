import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Factory, Eye, Activity, BarChart3, CheckCircle, AlertTriangle, Database, Cpu } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400 to-blue-600 rounded-full opacity-10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex flex-wrap items-center gap-2 bg-blue-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium max-w-full">
                <Factory className="h-4 w-4 shrink-0" />
                <span className="break-words">{t('hero.badge')}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.title')}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t('hero.title.highlight')}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-100">
                <Factory className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">
                    {language === 'tr' ? 'Üretim İzleme' : 'Production Monitoring'}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {language === 'tr' ? 'Gerçek zamanlı süreç takibi' : 'Real-time process tracking'}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-100">
                <Eye className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">
                    {language === 'tr' ? 'Kalite Kontrol' : 'Quality Control'}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {language === 'tr' ? 'Görüntü işleme ile otomatik' : 'Automated with computer vision'}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center sm:justify-start space-x-4 sm:space-x-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">{t('hero.stats.lines')}</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">95%</div>
                <div className="text-xs sm:text-sm text-gray-600">{t('hero.stats.quality')}</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">{t('hero.stats.monitoring')}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm sm:text-base">
                <span className="font-semibold">{t('hero.cta.mes-demo')}</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link to="/contact" className="group bg-white text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base">
                <Play className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                <span className="font-semibold">{t('hero.cta.mes-video')}</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="pt-6 sm:pt-8">
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">{t('hero.integrations')}</p>
              <div className="flex items-center justify-center sm:justify-start space-x-4 sm:space-x-8 opacity-60">
                <div className="text-sm sm:text-lg font-bold text-gray-400">SAP</div>
                <div className="text-sm sm:text-lg font-bold text-gray-400">ORACLE</div>
                <div className="text-sm sm:text-lg font-bold text-gray-400">DYNAMICS</div>
                <div className="text-sm sm:text-lg font-bold text-gray-400">SALESFORCE</div>
              </div>
            </div>
          </div>

          {/* Right Column - Live MES Dashboard */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Canlı MES Kontrol Paneli</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-500">MES Aktif</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Production Status */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm text-green-600 font-medium">Aktif Hat</p>
                        <p className="text-lg sm:text-2xl font-bold text-green-900">8</p>
                      </div>
                      <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                    </div>
                    <p className="text-xs text-green-600 mt-1 sm:mt-2">Verimlilik: %94</p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 sm:p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm text-orange-600 font-medium">Planlı Bakım</p>
                        <p className="text-lg sm:text-2xl font-bold text-orange-900">2</p>
                      </div>
                      <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                    </div>
                    <p className="text-xs text-orange-600 mt-1 sm:mt-2">Öngörülü bakım</p>
                  </div>
                </div>

                {/* Live Production Feed */}
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">Üretim Durumu</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-600">CANLI</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-white rounded border border-gray-200">
                      <span className="text-xs sm:text-sm text-gray-700">Hat 1 - Elektronik</span>
                      <span className="text-xs text-green-600 font-medium">Aktif</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white rounded border border-gray-200">
                      <span className="text-xs sm:text-sm text-gray-700">Hat 2 - Montaj</span>
                      <span className="text-xs text-green-600 font-medium">Aktif</span>
                    </div>
                  </div>
                </div>

                {/* Production Metrics */}
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-medium text-gray-900 text-sm sm:text-base">Üretim Metrikleri</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Günlük Üretim</span>
                      <span className="text-xs sm:text-sm font-medium text-green-600">1,247 adet</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 h-1.5 sm:h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-gray-600">Kalite Skoru</span>
                      <span className="text-xs sm:text-sm font-medium text-blue-600">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 sm:h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-lg shadow-lg p-2 sm:p-3 border border-gray-100">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-700">MES Aktif</span>
              </div>
            </div>
            
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white rounded-lg shadow-lg p-2 sm:p-3 border border-gray-100">
              <div className="text-xs text-gray-600">
                <span className="font-medium text-green-600">ERP</span> entegre
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;