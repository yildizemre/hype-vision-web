import type { IndustryId, Lang, SolutionId } from './types';

/**
 * Vaka çalışmaları. Anlatı metni mevcut yayınlanmış vaka notlarından (i18n blog.posts) gelir;
 * burada yalnızca o notlarda açıkça geçen yapılandırılmış bilgiler tutulur.
 * Notlarda geçmeyen alanlar boş bırakılır ve `todo` ile ekipten istenir — sayfada gösterilmez.
 */
export type CaseFacts = {
  cameras?: string;
  deployment?: string;
  setup?: string;
  pilotDuration?: string;
  scope?: string;
};

export type CaseStudy = {
  slug: string;
  industry: IndustryId;
  solutions: SolutionId[];
  client: Record<Lang, string>;
  facts: Record<Lang, CaseFacts>;
  isoDate: string;
  todo: string[];
};

const COMMON_TODO = [
  'Müşteri onayı (anonim yayın onayı yazılı olarak alındı mı?)',
  'Doğrulama yöntemi (sonuçlar nasıl ölçüldü, hangi dönem, kim doğruladı?)',
  'Ekran görüntüsü / anonimleştirilmiş video (yayın izniyle)',
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'gida-hattinda-idle-azaltma',
    industry: 'manufacturing',
    solutions: ['workforce-analytics', 'production-line-monitoring'],
    client: { tr: 'Orta ölçekli gıda üreticisi — Türkiye', en: 'Mid-sized food manufacturer — Türkiye' },
    facts: {
      tr: { cameras: '6 mevcut IP kamera (RTSP)', deployment: 'Tesis içi edge cihaz', setup: '4 iş günü', pilotDuration: '2 ay izleme', scope: 'Paketleme ve besleme hatları' },
      en: { cameras: '6 existing IP cameras (RTSP)', deployment: 'On-premise edge device', setup: '4 working days', pilotDuration: '2 months of monitoring', scope: 'Packing and feeding lines' },
    },
    isoDate: '2026-05-15',
    todo: [...COMMON_TODO],
  },
  {
    slug: 'isg-kkd-ihlal-tespiti',
    industry: 'manufacturing',
    solutions: ['ppe-detection', 'restricted-area-monitoring'],
    client: { tr: 'Otomotiv yan sanayi tedarikçisi — Türkiye', en: 'Automotive component supplier — Türkiye' },
    facts: {
      tr: { cameras: '8 mevcut kamera', deployment: 'Tesis içi edge; görüntü dışarı çıkmadan', setup: '5 iş günü', pilotDuration: '6 hafta', scope: 'Montaj ve depo alanları' },
      en: { cameras: '8 existing cameras', deployment: 'On-premise edge; video stays on site', setup: '5 working days', pilotDuration: '6 weeks', scope: 'Assembly and warehouse areas' },
    },
    isoDate: '2026-05-02',
    todo: [...COMMON_TODO, 'VMS popup entegrasyonunun hangi VMS ile yapıldığı'],
  },
  {
    slug: 'kalite-kontrol-fire-azaltma',
    industry: 'manufacturing',
    solutions: ['visual-quality-inspection'],
    client: { tr: 'Beyaz eşya komponent üreticisi — Türkiye', en: 'Home-appliance component manufacturer — Türkiye' },
    facts: {
      tr: { cameras: 'Hat kamerası', setup: '4 iş günü', pilotDuration: '8 hafta', scope: 'Konveyör hattı' },
      en: { cameras: 'Line camera', setup: '4 working days', pilotDuration: '8 weeks', scope: 'Conveyor line' },
    },
    isoDate: '2026-04-20',
    todo: [...COMMON_TODO, 'Kamera sayısı ve tipi', 'Kurulum tipi (edge / sunucu)'],
  },
  {
    slug: 'tekstil-hat-a-fire-dususu',
    industry: 'manufacturing',
    solutions: ['visual-quality-inspection', 'product-counting'],
    client: { tr: 'Orta ölçekli konfeksiyon ve paketleme tesisi — Türkiye', en: 'Mid-sized apparel and packing facility — Türkiye' },
    facts: {
      tr: { cameras: '4 mevcut IP kamera (RTSP)', deployment: 'Tesis içi edge cihaz', setup: '5 iş günü', pilotDuration: '30 gün', scope: 'Hat A paketleme' },
      en: { cameras: '4 existing IP cameras (RTSP)', deployment: 'On-premise edge device', setup: '5 working days', pilotDuration: '30 days', scope: 'Line A packing' },
    },
    isoDate: '2026-05-28',
    todo: [...COMMON_TODO],
  },
  {
    slug: 'lojistik-palet-sayim-sapmasi',
    industry: 'logistics',
    solutions: ['product-counting', 'object-tracking'],
    client: { tr: 'Üretici firmanın sevkiyat rampası — Marmara Bölgesi', en: 'Manufacturer’s shipping dock — Marmara region, Türkiye' },
    facts: {
      tr: { cameras: '3 mevcut kamera', setup: '3 iş günü', pilotDuration: '30 gün', scope: 'Sevkiyat rampası palet sayımı' },
      en: { cameras: '3 existing cameras', setup: '3 working days', pilotDuration: '30 days', scope: 'Pallet counting at the shipping dock' },
    },
    isoDate: '2026-05-10',
    todo: [...COMMON_TODO, 'Kurulum tipi (edge / sunucu)'],
  },
];

export const CASE_BY_SLUG = new Map(CASE_STUDIES.map((c) => [c.slug, c]));

export const caseUrl = (slug: string, lang: Lang | 'ru') =>
  lang === 'en' ? `/en/case-studies/${slug}` : lang === 'ru' ? `/ru/blog/${slug}` : `/vaka-calismalari/${slug}`;
