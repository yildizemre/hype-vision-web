import { trackEvent } from './conversions';

/**
 * Dönüşüm olay sözlüğü (GA4). Mevcut çerez onayı kuralına tabidir — onay yoksa gönderilmez.
 * Yeni bir sağlayıcı eklenecekse yalnızca bu dosya değişir.
 */
export type SiteEvent =
  | 'demo_request'
  | 'pilot_request'
  | 'camera_assessment'
  | 'partner_request'
  | 'contact_submit'
  | 'video_play'
  | 'video_complete'
  | 'case_study_view'
  | 'cta_click';

export function track(event: SiteEvent, params: Record<string, string | number | boolean> = {}) {
  trackEvent(event, { page_path: window.location.pathname, ...params });
}
