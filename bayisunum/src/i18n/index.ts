import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from './locales/tr';
import en from './locales/en';
import ru from './locales/ru';

export const LANG_KEY = 'bayisunum-lang';
export const supportedLanguages = ['tr', 'en', 'ru'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

function getStoredLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') return 'tr';
  const stored = localStorage.getItem(LANG_KEY);
  if (stored === 'tr' || stored === 'en' || stored === 'ru') return stored;
  return 'tr';
}

i18n.use(initReactI18next).init({
  resources: {
    tr: { translation: tr },
    en: { translation: en },
    ru: { translation: ru },
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
  document.documentElement.lang = lang;
  return i18n.changeLanguage(lang);
}

document.documentElement.lang = getStoredLanguage();

export default i18n;
