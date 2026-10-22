import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function DocumentLang() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = ['tr', 'en', 'ru'].includes(i18n.language) ? i18n.language : 'tr';
    document.documentElement.lang = lang;
  }, [i18n.language]);

  return null;
}
