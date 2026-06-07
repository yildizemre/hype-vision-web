export const COOKIE_CONSENT_KEY = 'hypevision-cookie-consent';

export type CookieConsent = 'accepted' | 'rejected';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getCookieConsent(): CookieConsent | null {
  const value = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (value === 'accepted' || value === 'rejected') return value;
  return null;
}

function getMeasurementId(): string | undefined {
  return import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || undefined;
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer!.push(args);
    };
  }
  return window.gtag;
}

let analyticsInitialized = false;

/** Yalnızca kullanıcı "Kabul et" dediyse GA4 yükler. */
export function initAnalytics(): void {
  const id = getMeasurementId();
  if (!id || getCookieConsent() !== 'accepted' || analyticsInitialized) return;

  analyticsInitialized = true;
  const gtag = ensureGtag();

  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500,
  });

  gtag('consent', 'update', {
    analytics_storage: 'granted',
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  gtag('js', new Date());
  gtag('config', id, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    send_page_view: false,
  });
}

export function revokeAnalytics(): void {
  if (window.gtag) {
    window.gtag('consent', 'update', { analytics_storage: 'denied' });
  }
}

export function trackPageView(path: string): void {
  const id = getMeasurementId();
  if (!id || getCookieConsent() !== 'accepted') return;

  initAnalytics();

  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }
}

export function applyStoredConsent(): void {
  if (getCookieConsent() === 'accepted') {
    initAnalytics();
  }
}
