import { Facebook, Instagram, Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SOCIAL_LINKS } from '../data/legalContent';
import { submitNewsletter } from '../lib/forms';
import { trackLeadSubmit } from '../lib/conversions';
import LegalFooterBar from './LegalFooterBar';
import { useLegalNavLinks } from '../i18n/content';

const FOOTER_LOGO = '/hypefoooterlogo.png';

type FooterProps = {
  hideLegalBar?: boolean;
};

export default function Footer({ hideLegalBar = false }: FooterProps) {
  const { t } = useTranslation();
  const legalNavLinks = useLegalNavLinks();
  const sectorLinks = t('growth.sectorHub.sectors', { returnObjects: true }) as { slug: string; tag: string }[];
  const [email, setEmail] = useState('');
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [newsletterError, setNewsletterError] = useState<string | null>(null);

  const handleNewsletter = async (e: FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!value || newsletterLoading) return;

    setNewsletterLoading(true);
    setNewsletterError(null);

    const result = await submitNewsletter(value);
    setNewsletterLoading(false);

    if (result.ok) {
      trackLeadSubmit('newsletter', 'footer_newsletter');
      setNewsletterDone(true);
      setEmail('');
    } else {
      setNewsletterError(result.message);
    }
  };

  const footerLinks: { section: string; links: { label: string; href: string }[] }[] = [
    {
      section: t('common.footer.sections.product'),
      links: [
        { label: t('common.footer.links.cameraIntegration'), href: '/#kamera' },
        { label: t('common.footer.links.livePanel'), href: '/#urunler' },
        { label: t('common.footer.links.inspectionModules'), href: '/#denetim' },
        { label: t('common.footer.links.contact'), href: '/#iletisim' },
      ],
    },
    {
      section: t('common.footer.sections.solutions'),
      links: [
        { label: t('common.footer.links.whoFor'), href: '/#kimler-icin' },
        ...sectorLinks.map((s) => ({ label: s.tag, href: `/sektor/${s.slug}` })),
        { label: t('common.footer.links.hseInspection'), href: '/#denetim' },
        { label: t('common.footer.links.qualityControl'), href: '/#denetim' },
        { label: t('common.footer.links.faq'), href: '/#sss' },
      ],
    },
    {
      section: t('common.footer.sections.corporate'),
      links: [
        { label: t('common.footer.links.about'), href: '/#hakkimizda' },
        { label: t('common.footer.links.platformProcess'), href: '/#platform' },
        { label: t('common.footer.links.sectors'), href: '/#sektorler' },
        { label: t('common.footer.links.caseNotes'), href: '/#vaka-notlari' },
        { label: t('common.footer.links.contact'), href: '/#iletisim' },
        ...legalNavLinks.map(({ title, href }) => ({ label: title, href })),
      ],
    },
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/8" style={{ borderColor: 'rgba(255,255,255,0.08)' }} role="contentinfo">
      <div className="border-b border-white/8 py-4 text-center" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <p className="text-xs text-gray-600 font-light px-4">
          {t('common.footer.tagline')}{' '}
          <span className="text-gray-500 font-medium">{t('common.footer.taglineHighlight')}</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-6" aria-label={t('common.brand.ariaLabel')}>
              <img
                src={FOOTER_LOGO}
                alt={t('common.brand.alt')}
                width={180}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-6 max-w-sm">
              {t('common.footer.description')}
            </p>
            <div className="flex items-center gap-3 mb-6">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer me"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-gray-300 hover:border-vision/30 transition-colors"
                aria-label={t('common.footer.facebookAria')}
              >
                <Facebook size={17} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer me"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-gray-300 hover:border-vision/30 transition-colors"
                aria-label={t('common.footer.instagramAria')}
              >
                <Instagram size={17} />
              </a>
            </div>
            <address className="not-italic text-xs text-gray-600 leading-relaxed space-y-1 mb-8">
              <p>{t('common.footer.address.street')}</p>
              <p>{t('common.footer.address.city')}</p>
              <p>{t('common.footer.address.country')}</p>
              <p className="pt-3">
                <a
                  href="mailto:info@hypevisionlab.com"
                  data-track="email"
                  data-track-location="footer"
                  id="cta-email-footer"
                  className="hover:text-gray-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail size={11} />
                  {t('common.footer.email')}
                </a>
              </p>
            </address>

            <div className="max-w-sm">
              <h4 className="text-white font-semibold text-sm mb-3">{t('common.footer.sections.newsletter')}</h4>
              <p className="text-xs text-gray-500 mb-3 font-light">
                {t('common.footer.newsletter.desc')}
              </p>
              {newsletterDone ? (
                <p className="flex items-center gap-2 text-xs text-vision-light">
                  <CheckCircle2 size={14} />
                  {t('common.footer.newsletter.success')}
                </p>
              ) : (
                <form onSubmit={handleNewsletter} className="space-y-2">
                  <div className="flex flex-col gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('common.footer.newsletter.placeholder')}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder-gray-600 outline-none focus:border-white/20 transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={newsletterLoading}
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-white px-4 py-2.5 rounded-lg bg-vision hover:bg-vision-dark transition-colors disabled:opacity-70"
                    >
                      {newsletterLoading ? <Loader2 size={14} className="animate-spin" /> : null}
                      {t('common.footer.newsletter.subscribe')}
                    </button>
                  </div>
                  {newsletterError && (
                    <p className="text-[10px] text-red-400 leading-snug">{newsletterError}</p>
                  )}
                </form>
              )}
            </div>
          </div>

          {footerLinks.map(({ section, links }) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-5">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) =>
                  link.href.startsWith('/') && !link.href.includes('#') ? (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-xs text-gray-500 hover:text-gray-300 transition-colors font-light"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-gray-500 hover:text-gray-300 transition-colors font-light"
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {!hideLegalBar && <LegalFooterBar />}

      <div className="border-t border-white/8 py-5 sm:py-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600 font-light text-center sm:text-left">
            © {new Date().getFullYear()} {t('common.footer.copyright')}
          </p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-gray-500"
            aria-label={t('common.footer.legalLinks')}
          >
            {legalNavLinks.map((item, i) => (
              <span key={item.slug} className="flex items-center gap-3">
                {i > 0 && <span className="text-gray-700 hidden sm:inline" aria-hidden>·</span>}
                <Link to={item.href} className="hover:text-vision-light transition-colors">
                  {item.title}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
