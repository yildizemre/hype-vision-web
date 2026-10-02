import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { LANG_PREFIX, URL_LANG } from '../i18n/routing';
import { LANG_KEY, type SupportedLanguage } from '../i18n';
import { isTranslatedPath } from '../seo/routes';

type LanguageSwitcherProps = {
  variant?: 'hero' | 'solid';
  className?: string;
};

export default function LanguageSwitcher({ variant = 'solid', className = '' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const current = (['tr', 'en', 'ru'].includes(i18n.language) ? i18n.language : 'tr') as SupportedLanguage;

  const location = useLocation();

  // Çevirisi olmayan sayfada (TR'ye özel içerik) hedef dilin ana sayfasına git
  const targetPath = isTranslatedPath(location.pathname) ? location.pathname : '/';
  const hrefFor = (lang: SupportedLanguage) => `${LANG_PREFIX[lang]}${targetPath}${location.hash}`;

  const rememberLang = (lang: SupportedLanguage) => {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* yok say */
    }
  };

  const baseBtn =
    'text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded transition-colors';
  const activeHero = 'text-white bg-white/20';
  const inactiveHero = 'text-white/60 hover:text-white hover:bg-white/10';
  const activeSolid = 'text-vision-dark bg-vision/15';
  const inactiveSolid = 'text-gray-500 hover:text-vision-dark hover:bg-vision/10';

  const ariaLabel =
    current === 'tr' ? 'Dil seçimi' : current === 'ru' ? 'Выбор языка' : 'Language selection';

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-lg border p-0.5 ${
        variant === 'hero'
          ? 'border-white/25 bg-black/30'
          : 'border-vision/25 bg-white/80'
      } ${className}`}
      role="group"
      aria-label={ariaLabel}
    >
      {(['tr', 'en', 'ru'] as const).map((lang) => {
        const isActive = current === lang;
        return (
          <a
            key={lang}
            href={hrefFor(lang)}
            hrefLang={lang}
            onClick={() => rememberLang(lang)}
            className={`${baseBtn} ${
              isActive
                ? variant === 'hero'
                  ? activeHero
                  : activeSolid
                : variant === 'hero'
                  ? inactiveHero
                  : inactiveSolid
            }`}
            aria-current={isActive ? 'true' : undefined}
          >
            {lang.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}
