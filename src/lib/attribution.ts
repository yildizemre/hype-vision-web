const STORAGE_KEY = 'hypevision-attribution';

export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
  landing_page?: string;
};

export function getAttribution(): Attribution | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}

/** İlk dokunuş (first-touch) — UTM veya Instagram referrer ile kaynak saklanır. */
export function captureAttribution(pathname: string, search: string): Attribution | null {
  const existing = getAttribution();
  const params = new URLSearchParams(search);
  const utm_source = params.get('utm_source') ?? undefined;
  const utm_medium = params.get('utm_medium') ?? undefined;
  const utm_campaign = params.get('utm_campaign') ?? undefined;
  const utm_content = params.get('utm_content') ?? undefined;
  const utm_term = params.get('utm_term') ?? undefined;
  const hasUtm = !!(utm_source || utm_medium || utm_campaign || utm_content || utm_term);

  const ref = document.referrer;
  const fromInstagramRef = /instagram\.com/i.test(ref);

  if (existing && !hasUtm) return existing;
  if (!hasUtm && !fromInstagramRef) return existing;

  const attribution: Attribution = {
    utm_source: utm_source ?? (fromInstagramRef ? 'instagram' : existing?.utm_source),
    utm_medium: utm_medium ?? (fromInstagramRef ? 'referral' : existing?.utm_medium),
    utm_campaign: utm_campaign ?? existing?.utm_campaign,
    utm_content: utm_content ?? existing?.utm_content,
    utm_term: utm_term ?? existing?.utm_term,
    referrer: ref || existing?.referrer,
    landing_page: existing?.landing_page ?? pathname,
  };

  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  return attribution;
}

export function attributionToGaParams(attr: Attribution | null): Record<string, string> {
  if (!attr) return {};
  const out: Record<string, string> = {};
  if (attr.utm_source) out.campaign_source = attr.utm_source;
  if (attr.utm_medium) out.campaign_medium = attr.utm_medium;
  if (attr.utm_campaign) out.campaign_name = attr.utm_campaign;
  if (attr.utm_content) out.campaign_content = attr.utm_content;
  if (attr.utm_term) out.campaign_term = attr.utm_term;
  return out;
}

export function attributionToFormFields(attr: Attribution | null): Record<string, string> {
  if (!attr?.utm_source && !attr?.landing_page) {
    return { Kaynak: 'Doğrudan / bilinmiyor' };
  }
  const parts = [
    attr.utm_source && `kaynak: ${attr.utm_source}`,
    attr.utm_medium && `medya: ${attr.utm_medium}`,
    attr.utm_campaign && `kampanya: ${attr.utm_campaign}`,
    attr.landing_page && `giriş sayfası: ${attr.landing_page}`,
  ].filter(Boolean);
  return { Kaynak: parts.join(' · ') };
}
