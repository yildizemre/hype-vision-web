/**
 * Rehber (blog) içerik modeli. Paragraf metinlerinde iki basit biçim desteklenir:
 *   [bağlantı metni](/yol)  → site içi bağlantı
 *   **kalın**               → vurgu
 */
export type GuideBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string; id: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'note'; text: string }
  | { type: 'cta'; text?: string };

export type GuideFaq = { q: string; a: string };

export type Guide = {
  slug: string;
  /** H1 başlık */
  title: string;
  /** <title> (60 karakter civarı) */
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: 'Rehber' | 'Karşılaştırma' | 'Mevzuat' | 'Hesaplama';
  /** ISO 8601 yayın tarihi */
  isoDate: string;
  updated?: string;
  readMinutes: number;
  keywords: string[];
  blocks: GuideBlock[];
  faq: GuideFaq[];
  /** İlgili landing/rehber yolları */
  related: string[];
};
