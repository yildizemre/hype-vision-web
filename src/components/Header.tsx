import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

/** Koyu / mavi hero üzerinde (footer logosu) */
const LOGO_ON_HERO = '/hypefoooterlogo.png';
/** Kaydırınca ve mobil menüde */
const LOGO_DEFAULT = '/hypevisionlogo.png';

type HeaderProps = {
  /** Yasal ve iç sayfalarda her zaman solid header */
  variant?: 'default' | 'solid';
};

export default function Header({ variant = 'default' }: HeaderProps) {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    { label: t('common.header.nav.product'), href: '/#urunler' },
    { label: t('common.header.nav.inspection'), href: '/#denetim' },
    { label: t('common.header.nav.about'), href: '/#hakkimizda' },
    { label: t('common.header.nav.faq'), href: '/#sss' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  /** Üstte hero: footer logosu + şeffaf koyu bar — yasal sayfalarda kapalı */
  const onHero = variant === 'default' && !scrolled && !mobileOpen;
  const logoSrc = onHero ? LOGO_ON_HERO : LOGO_DEFAULT;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          onHero
            ? 'bg-black/25 backdrop-blur-md border-b border-white/10'
            : 'bg-vision-50/95 backdrop-blur-md border-b border-vision/25 shadow-[0_4px_20px_rgba(0,202,220,0.12)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="relative flex items-center justify-between h-16 lg:h-[4.25rem]">
            <Link to="/" className="relative z-10 shrink-0" onClick={closeMobile} aria-label={t('common.brand.ariaLabel')}>
              <img
                key={logoSrc}
                src={logoSrc}
                alt={t('common.brand.alt')}
                width={180}
                height={44}
                className="h-9 sm:h-10 w-auto object-contain transition-opacity duration-300"
              />
            </Link>

            <nav
              className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8"
              aria-label={t('common.header.mainMenu')}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`group relative text-[13px] font-medium transition-colors ${
                    onHero
                      ? 'text-white/80 hover:text-white'
                      : 'text-vision-dark hover:text-[#0A0A0A]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-200 ${
                      onHero ? 'bg-white' : 'bg-vision'
                    }`}
                  />
                </a>
              ))}
            </nav>

            <div className="relative z-10 flex items-center gap-3">
              <a
                href="tel:+905418629190"
                data-track="phone"
                data-track-location="header"
                id="cta-phone-header"
                className={`hidden xl:block text-[13px] font-medium transition-colors ${
                  onHero ? 'text-white/65 hover:text-white' : 'text-vision-dark hover:text-vision'
                }`}
              >
                0541 862 91 90
              </a>
              <LanguageSwitcher variant={onHero ? 'hero' : 'solid'} />
              <a
                href="/#iletisim"
                data-track="contact_cta"
                data-track-location="header"
                id="cta-contact-header"
                className={`hidden sm:inline-flex text-[13px] font-semibold px-5 py-2.5 rounded-lg transition-colors ${
                  onHero
                    ? 'text-[#0A0A0A] bg-white hover:bg-gray-100'
                    : 'text-white bg-vision hover:bg-vision-dark'
                }`}
              >
                {t('common.header.contact')}
              </a>
              <button
                type="button"
                className={`lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  onHero
                    ? 'border border-white/25 text-white hover:bg-white/10'
                    : 'border border-vision/30 text-vision-dark hover:bg-vision/10'
                }`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? t('common.header.closeMenu') : t('common.header.openMenu')}
              >
                {mobileOpen ? <X size={20} /> : (
                  <span className="flex flex-col gap-1">
                    <span
                      className={`block w-4 h-0.5 ${onHero ? 'bg-white' : 'bg-vision-dark'}`}
                    />
                    <span
                      className={`block w-4 h-0.5 ${onHero ? 'bg-white' : 'bg-vision-dark'}`}
                    />
                    <span
                      className={`block w-3 h-0.5 ${onHero ? 'bg-white' : 'bg-vision-dark'}`}
                    />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] lg:hidden ${mobileOpen ? 'visible' : 'invisible'}`}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/30 transition-opacity ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeMobile}
          aria-label={t('common.header.close')}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[min(100%,300px)] bg-vision-50 shadow-xl flex flex-col transition-transform duration-300 border-l border-vision/20 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-vision/20 bg-white/80">
            <img src={LOGO_DEFAULT} alt="" className="h-8 w-auto" />
            <button type="button" onClick={closeMobile} className="p-2 text-vision-dark" aria-label={t('common.header.close')}>
              <X size={20} />
            </button>
          </div>
          <nav className="flex-1 p-5 flex flex-col gap-1 bg-vision-50">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className="py-3 px-4 text-base font-medium text-[#0A0A0A] rounded-lg hover:bg-white/80"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="px-5 pb-4">
            <LanguageSwitcher variant="solid" />
          </div>
          <div className="p-5 border-t border-vision/20 bg-white/60">
            <a
              href="/#iletisim"
              data-track="contact_cta"
              data-track-location="header_mobile"
              id="cta-contact-header-mobile"
              onClick={closeMobile}
              className="block text-center text-sm font-semibold text-white py-3.5 rounded-lg bg-vision hover:bg-vision-dark"
            >
              {t('common.header.contact')}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
