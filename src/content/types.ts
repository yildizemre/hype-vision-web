/**
 * Veriyle yönetilen içerik modeli (çözümler, sektörler, hub'lar, vaka çalışmaları).
 * Kural: Doğrulanmamış sayı, müşteri, sertifika veya entegrasyon iddiası yazılmaz.
 * Ekipten alınması gereken bilgi `todo` alanlarında tutulur ve CONTENT-TODO raporuna düşer;
 * sayfada herkese açık placeholder gösterilmez.
 */
export type Lang = 'tr' | 'en';

export type Faq = { q: string; a: string };

export type SolutionId =
  | 'ppe-detection'
  | 'forklift-pedestrian-detection'
  | 'restricted-area-monitoring'
  | 'fall-detection'
  | 'fire-smoke-detection'
  | 'production-line-monitoring'
  | 'product-counting'
  | 'visual-quality-inspection'
  | 'workforce-analytics'
  | 'queue-analytics'
  | 'people-counting'
  | 'occupancy-analytics'
  | 'object-tracking'
  | 'anomaly-detection';

export type IndustryId =
  | 'manufacturing'
  | 'logistics'
  | 'retail'
  | 'banking'
  | 'restaurants'
  | 'hospitality'
  | 'construction'
  | 'jewelry-manufacturing';

export type SolutionGroup = 'safety' | 'production' | 'operations';

export type SolutionCopy = {
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Tek cümlelik değer önerisi */
  lead: string;
  /** "X nedir?" — AI/cevap motorlarının alıntılayabileceği kısa tanım */
  definition: string;
  problem: string[];
  howItWorks: string[];
  events: string[];
  scenarios: string[];
  cameraNotes: string[];
  integrations: string[];
  limitations: string[];
  faq: Faq[];
};

export type Solution = {
  id: SolutionId;
  group: SolutionGroup;
  /** Tam yol (dil önekiyle). TR mevcut landing sayfasına da işaret edebilir. */
  urls: { tr?: string; en: string };
  industries: IndustryId[];
  related: SolutionId[];
  /** Yeni SolutionPage ile render edilen diller (TR eski landing ise yalnızca en) */
  tr?: SolutionCopy;
  en: SolutionCopy;
  todo?: string[];
};

export type IndustryCopy = {
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  context: string[];
  useCases: { solution: SolutionId; why: string }[];
  considerations: string[];
  faq: Faq[];
};

export type Industry = {
  id: IndustryId;
  urls: { tr: string; en: string };
  /** TR sayfası mevcut bir landing ise (ör. depo-lojistik) yeni sayfa üretilmez */
  trExisting?: boolean;
  tr?: IndustryCopy;
  en: IndustryCopy;
  todo?: string[];
};
