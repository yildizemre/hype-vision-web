import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from './locales/tr';
import en from './locales/en';

export const LANG_KEY = 'hype-lang';
export const supportedLanguages = ['tr', 'en'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

function getStoredLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') return 'tr';
  const stored = localStorage.getItem(LANG_KEY);
  if (stored === 'tr' || stored === 'en') return stored;
  return 'tr';
}

i18n.use(initReactI18next).init({
  resources: {
    tr: { translation: tr },
    en: { translation: en },
  },
  lng: getStoredLanguage(),
  fallbackLng: 'tr',
  supportedLngs: [...supportedLanguages],
  interpolation: {
    escapeValue: false,
  },
});

export function setLanguage(lang: SupportedLanguage) {
  localStorage.setItem(LANG_KEY, lang);
  return i18n.changeLanguage(lang);
}

export default i18n;
