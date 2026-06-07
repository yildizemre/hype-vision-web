import { Link } from 'react-router-dom';
import { Home, Mail, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />
      <main className="flex-1 flex items-center pt-16 lg:pt-[4.25rem]">
        <div className="max-w-lg mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center w-full">
          <p className="text-7xl sm:text-8xl font-light text-vision/30 mb-4 select-none" aria-hidden>
            404
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#0A0A0A] mb-3">
            {t('common.notFound.title')}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-8">
            {t('common.notFound.description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-sm font-semibold text-white px-6 py-3.5 rounded-lg bg-vision hover:bg-vision-dark transition-colors"
            >
              <Home size={16} />
              {t('common.notFound.home')}
            </Link>
            <Link
              to="/#iletisim"
              data-track="contact_cta"
              data-track-location="404"
              id="cta-contact-404"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-sm font-medium text-gray-700 px-6 py-3.5 rounded-lg border border-gray-200 bg-white hover:border-vision/30 transition-colors"
            >
              <Mail size={16} />
              {t('common.notFound.contact')}
            </Link>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 mt-8 text-xs text-gray-400 hover:text-vision transition-colors"
          >
            <ArrowLeft size={14} />
            {t('common.notFound.back')}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
