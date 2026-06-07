import { useTranslation } from 'react-i18next';
import { setLanguage, type SupportedLanguage } from '../i18n';

type LanguageSwitcherProps = {
  variant?: 'hero' | 'solid';
  className?: string;
};

export default function LanguageSwitcher({ variant = 'solid', className = '' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const current = (i18n.language === 'en' ? 'en' : 'tr') as SupportedLanguage;

  const switchLang = (lang: SupportedLanguage) => {
    if (lang !== current) void setLanguage(lang);
  };

  const baseBtn =
    'text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded transition-colors';
  const activeHero = 'text-white bg-white/20';
  const inactiveHero = 'text-white/60 hover:text-white hover:bg-white/10';
  const activeSolid = 'text-vision-dark bg-vision/15';
  const inactiveSolid = 'text-gray-500 hover:text-vision-dark hover:bg-vision/10';

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-lg border p-0.5 ${
        variant === 'hero'
          ? 'border-white/25 bg-black/30'
          : 'border-vision/25 bg-white/80'
      } ${className}`}
      role="group"
      aria-label={current === 'tr' ? 'Dil seçimi' : 'Language selection'}
    >
      {(['tr', 'en'] as const).map((lang) => {
        const isActive = current === lang;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => switchLang(lang)}
            className={`${baseBtn} ${
              isActive
                ? variant === 'hero'
                  ? activeHero
                  : activeSolid
                : variant === 'hero'
                  ? inactiveHero
                  : inactiveSolid
            }`}
            aria-pressed={isActive}
          >
            {lang.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
