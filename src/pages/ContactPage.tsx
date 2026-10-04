import { useEffect } from 'react';
import { ChevronRight, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { trackContactPageView } from '../lib/conversions';
import HomeLink from '../components/kit/HomeLink';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

export default function ContactPage() {
  const { t } = useTranslation();

  useEffect(() => {
    const title = t('common.contactPage.metaTitle');
    const description = t('common.contactPage.metaDescription');
    document.title = title;
    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');


    trackContactPageView('/iletisim');

    return () => {
      document.title = t('common.seo.homeTitle');
      setMeta('description', t('common.seo.homeDescription'));
    };
  }, [t]);

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />

      <div className="pt-16 lg:pt-[4.25rem] bg-[#0c2a30] border-b border-vision/15">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 text-center">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-gray-400 mb-5">
            <HomeLink className="hover:text-vision-light transition-colors">
              {t('blog.ui.breadcrumbHome')}
            </HomeLink>
            <ChevronRight size={12} className="text-gray-600" aria-hidden />
            <span className="text-vision-light font-medium">{t('common.contactPage.eyebrow')}</span>
          </nav>
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-light mb-3">
            {t('common.contactPage.eyebrow')}
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4">
            {t('common.contactPage.title')}
          </h1>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto">
            {t('common.contactPage.description')}
          </p>
        </div>
      </div>

      <main className="flex-1 max-w-xl mx-auto w-full px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
        <div className="rounded-2xl bg-white shadow-xl shadow-black/10 border border-vision/10 p-6 sm:p-8 lg:p-9">
          <ContactForm trackLocation="contact_page" formId="contact-form-page" />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs text-gray-500">
          <a
            href="mailto:info@hypevisionlab.com"
            data-track="email"
            data-track-location="contact_page"
            className="inline-flex items-center gap-1.5 hover:text-vision transition-colors"
          >
            <Mail size={14} />
            info@hypevisionlab.com
          </a>
          <span className="hidden sm:inline text-gray-300" aria-hidden>
            ·
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} className="text-vision" />
            {t('common.forms.contact.location')}
          </span>
        </div>
      </main>

      <Footer hideLegalBar />
    </div>
  );
}
