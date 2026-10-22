import { getCookieConsent, initAnalytics } from './analytics';
import {
  attributionToGaParams,
  captureAttribution,
  getAttribution,
  type Attribution,
} from './attribution';

export type TrackLocation =
  | 'header'
  | 'header_mobile'
  | 'hero'
  | 'footer'
  | 'footer_newsletter'
  | 'final_cta'
  | 'final_cta_form'
  | 'contact_page'
  | 'about'
  | 'how_it_works'
  | 'camera'
  | 'audience'
  | 'platform'
  | 'problem_solution'
  | 'inspection'
  | 'use_cases'
  | 'core_products'
  | 'faq'
  | 'legal'
  | 'blog'
  | '404';

function canTrack(): boolean {
  return getCookieConsent() === 'accepted' && !!import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
}

/** GA4 özel / dönüşüm olayı — yalnızca çerez onaylıysa. */
export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (!canTrack()) return;
  initAnalytics();
  window.gtag?.('event', eventName, params);
}

function attributionParams(): Record<string, string> {
  return attributionToGaParams(getAttribution());
}

/** UTM veya Instagram referrer ile gelen ziyaretçi — ilk dokunuş. */
export function trackCampaignLanding(pathname: string, attr: Attribution) {
  trackEvent('campaign_landing', {
    event_category: 'traffic',
    page_path: pathname,
    ...attributionToGaParams(attr),
  });
}

/** İletişim sayfası görüntüleme — Instagram funnel takibi için. */
export function trackContactPageView(pathname: string) {
  const attr = getAttribution();
  trackEvent('view_contact_page', {
    event_category: 'traffic',
    page_path: pathname,
    ...attributionToGaParams(attr),
    has_campaign: !!attr?.utm_source,
  });
}

/** Rota değişiminde UTM yakala; yeni kampanya varsa olay gönder. */
export function captureAndTrackAttribution(pathname: string, search: string) {
  const before = getAttribution();
  const after = captureAttribution(pathname, search);
  if (after && (!before || after.utm_source !== before.utm_source)) {
    trackCampaignLanding(pathname, after);
  }
}

export function trackPhoneClick(location: TrackLocation) {
  trackEvent('click_phone', {
    event_category: 'conversion',
    link_location: location,
    contact_type: 'phone',
  });
}

export function trackEmailClick(location: TrackLocation) {
  trackEvent('click_email', {
    event_category: 'conversion',
    link_location: location,
    contact_type: 'email',
  });
}

export function trackContactCta(location: TrackLocation) {
  trackEvent('click_contact_cta', {
    event_category: 'conversion',
    link_location: location,
    contact_type: 'contact_form_anchor',
  });
}

/** GA4 önerilen olay — form gönderimi */
export function trackLeadSubmit(formType: 'contact' | 'newsletter', location: TrackLocation) {
  trackEvent('generate_lead', {
    event_category: 'conversion',
    form_type: formType,
    link_location: location,
    ...attributionParams(),
  });
}

const TRACK_ATTR = 'data-track';
const LOCATION_ATTR = 'data-track-location';

export function handleTrackedClick(target: EventTarget | null) {
  if (!(target instanceof Element)) return;

  const el = target.closest(`[${TRACK_ATTR}]`) as HTMLElement | null;
  if (!el) return;

  const type = el.getAttribute(TRACK_ATTR);
  const location = (el.getAttribute(LOCATION_ATTR) || 'unknown') as TrackLocation;

  switch (type) {
    case 'phone':
      trackPhoneClick(location);
      break;
    case 'email':
      trackEmailClick(location);
      break;
    case 'contact_cta':
      trackContactCta(location);
      break;
    default:
      break;
  }
}

export { TRACK_ATTR, LOCATION_ATTR };
