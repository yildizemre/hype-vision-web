import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ADDRESS = 'Hightech Binası, Gebze OSB, Kemal Nehrozoğlu Cd. 400. Sokak, 41480 Gebze/Kocaeli';
const PHONE = '0216 451 91 12';
const EMAIL = 'hello@hypevisionlab.com';

const Footer = () => {
  const { t } = useLanguage();

  const footerSections = [
    {
      title: t('footer.company'),
      links: [
        { label: t('footer.about-us'), to: '/about' },
        { label: t('footer.careers'), to: '/contact' },
        { label: t('footer.press'), to: '/contact' },
        { label: t('footer.partners'), to: '/contact' },
        { label: t('footer.contact'), to: '/contact' },
      ]
    },
    {
      title: t('footer.product'),
      links: [
        { label: t('footer.analytics-platform'), to: '/production-control' },
        { label: t('footer.reporting-tools'), to: '/blog' },
        { label: t('footer.api-documentation'), to: '/blog' },
        { label: t('footer.integrations'), to: '/erp-integration' },
      ]
    },
    {
      title: t('footer.solutions'),
      links: [
        { label: t('footer.enterprise'), to: '/enterprise' },
        { label: t('footer.small-business'), to: '/small-business' },
      ]
    },
    {
      title: t('footer.resources'),
      links: [
        { label: t('footer.documentation'), to: '/blog' },
        { label: t('footer.tutorials'), to: '/blog' },
        { label: t('footer.blog'), to: '/blog' },
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-10 sm:py-12 lg:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Brand Section */}
            <div className="col-span-2 space-y-5">
              <Link to="/" className="inline-block">
                <img src="/images/hypefoooterlogo.png" alt="Hype Vision" className="h-9 sm:h-10 w-auto" />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                {t('footer.empowering-businesses')}
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-gray-400">
                <p><strong className="text-white">{t('footer.address')}:</strong></p>
                <p className="break-words">{ADDRESS}</p>
                <p><strong className="text-white">{t('footer.phone')}:</strong> {PHONE}</p>
                <p><strong className="text-white">{t('footer.email')}:</strong> {EMAIL}</p>
              </div>
              <div className="flex gap-2">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 rounded-lg hover:bg-gray-700 transition-colors duration-200" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 rounded-lg hover:bg-gray-700 transition-colors duration-200" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 rounded-lg hover:bg-gray-700 transition-colors duration-200" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
                <a href={`mailto:${EMAIL}`} className="bg-gray-800 p-2.5 rounded-lg hover:bg-gray-700 transition-colors duration-200" aria-label="E-posta">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Footer Link Columns */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-white text-sm uppercase tracking-wider">{section.title}</h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.to + link.label}>
                      <Link
                        to={link.to}
                        className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="font-semibold text-white mb-2">{t('footer.stay-updated')}</h3>
              <p className="text-gray-400">{t('footer.latest-insights')}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder={t('footer.enter-email')}
                className="flex-1 min-w-0 md:w-64 px-4 py-3 sm:py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 text-base"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold whitespace-nowrap min-h-[44px] sm:min-h-0">
                {t('footer.subscribe')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 HypeVisionLab. {t('footer.all-rights')}
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors duration-200 py-1"
              >
                {t('footer.privacy-policy')}
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-white transition-colors duration-200 py-1"
              >
                {t('footer.terms-service')}
              </Link>
              <Link
                to="/cookie-policy"
                className="text-gray-400 hover:text-white transition-colors duration-200 py-1"
              >
                {t('footer.cookie-policy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;