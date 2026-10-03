import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { URL_LANG } from './routing';

export const LANG_KEY = 'hype-lang';
export const supportedLanguages = ['tr', 'en', 'ru'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

/** Yalnızca sayfanın dili (ve yedek olarak TR) yüklenir — diğer dillerin metinleri pakete girmez. */
const loaders: Record<SupportedLanguage, () => Promise<{ default: Record<string, unknown> }>> = {
  tr: () => import('./locales/tr'),
  en: () => import('./locales/en'),
  ru: () => import('./locales/ru'),
};

export const i18nReady: Promise<void> = (async () => {
  const langs: SupportedLanguage[] = URL_LANG === 'tr' ? ['tr'] : [URL_LANG, 'tr'];
  const mods = await Promise.all(langs.map((l) => loaders[l]()));
  await i18n.use(initReactI18next).init({
    resources: Object.fromEntries(langs.map((l, i) => [l, { translation: mods[i].default }])),
    lng: URL_LANG,
    fallbackLng: 'tr',
    supportedLngs: [...supportedLanguages],
    interpolation: { escapeValue: false },
  });
})();

document.documentElement.lang = URL_LANG;

export default i18n;
