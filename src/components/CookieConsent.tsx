import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  COOKIE_CONSENT_KEY,
  initAnalytics,
  revokeAnalytics,
  trackPageView,
  type CookieConsent,
} from '../lib/analytics';
import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY) as CookieConsent | null;
    if (!stored) setVisible(true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('cookie-banner-open', visible);
    return () => document.body.classList.remove('cookie-banner-open');
  }, [visible]);

  const save = (value: CookieConsent) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setVisible(false);

    if (value === 'accepted') {
      initAnalytics();
      trackPageView(window.location.pathname + window.location.search);
    } else {
      revokeAnalytics();
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-5 pointer-events-none"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className="max-w-4xl mx-auto pointer-events-auto rounded-2xl bg-[#0c2a30] border border-vision/25 shadow-2xl shadow-black/40 p-5 sm:p-6">
        <div className="flex gap-4">
          <div className="hidden sm:flex w-10 h-10 rounded-xl bg-vision/15 border border-vision/25 items-center justify-center shrink-0">
            <Cookie size={20} className="text-vision-light" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h2 id="cookie-banner-title" className="text-sm font-semibold text-white">
                {t('common.cookie.title')}
              </h2>
              <button
                type="button"
                onClick={() => save('rejected')}
                className="text-gray-500 hover:text-gray-300 shrink-0 p-0.5"
                aria-label={t('common.cookie.close')}
              >
                <X size={16} />
              </button>
            </div>
            <p id="cookie-banner-desc" className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
              {t('common.cookie.description')}{' '}
              <Link to="/cerez-politikasi" className="text-vision-light hover:underline">
                {t('common.cookie.policyLink')}
              </Link>{' '}
              {t('common.cookie.descriptionSuffix')}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => save('accepted')}
                className="flex-1 sm:flex-none text-sm font-semibold text-[#0A0A0A] px-5 py-2.5 rounded-lg bg-vision hover:bg-vision-light transition-colors"
              >
                {t('common.cookie.accept')}
              </button>
              <button
                type="button"
                onClick={() => save('rejected')}
                className="flex-1 sm:flex-none text-sm font-medium text-gray-300 px-5 py-2.5 rounded-lg border border-white/15 hover:border-white/30 hover:text-white transition-colors"
              >
                {t('common.cookie.reject')}
              </button>
              <Link
                to="/cerez-politikasi"
                className="flex-1 sm:flex-none text-center text-sm font-medium text-gray-500 px-5 py-2.5 hover:text-vision-light transition-colors"
              >
                {t('common.cookie.readPolicy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
