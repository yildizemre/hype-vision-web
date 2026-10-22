import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Pill, Shield, BarChart3, Database, CheckCircle, AlertTriangle, Clock, Users } from 'lucide-react';

const Pharmaceutical = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Pill className="w-8 h-8 text-blue-600" />,
      title: t('drugQualityControl'),
      description: t('drugQualityControlDesc')
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: t('complianceMonitoring'),
      description: t('complianceMonitoringDesc')
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: t('batchTracking'),
      description: t('batchTrackingDesc')
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-600" />,
      title: t('regulatoryReporting'),
      description: t('regulatoryReportingDesc')
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: t('gmpCompliance'),
      description: t('gmpComplianceDesc')
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-yellow-600" />,
      title: t('qualityAssurance'),
      description: t('qualityAssuranceDesc')
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: t('realTimeMonitoring'),
      description: t('realTimeMonitoringDesc')
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: t('regulatorySupport'),
      description: t('regulatorySupportDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Pill className="w-16 h-16 text-blue-300 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('pharmaceuticalMES')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {t('pharmaceuticalMESDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                {t('startDemo')}
              </button>
              <button className="border border-blue-300 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                {t('learnMore')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('pharmaceuticalFeatures')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('pharmaceuticalFeaturesDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('pharmaceuticalBenefits')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('pharmaceuticalBenefitsDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('readyToStart')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('pharmaceuticalCTA')}
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            {t('contactUs')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pharmaceutical;