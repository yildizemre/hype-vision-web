import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from './locales/tr';
import en from './locales/en';
import ru from './locales/ru';
import { URL_LANG } from './routing';

export const LANG_KEY = 'hype-lang';
export const supportedLanguages = ['tr', 'en', 'ru'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

/** Dil URL'den gelir (/en, /ru); localStorage yalnızca tercih kaydı içindir. */
function getStoredLanguage(): SupportedLanguage {
  return URL_LANG;
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
