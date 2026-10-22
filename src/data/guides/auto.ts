import type { Guide, GuideBlock } from './types';

/**
 * Blog posts published from the Lead-AI panel (lead.hypevisionlab.com → "Yayınla").
 * The panel commits one JSON file per post into ./auto/ using the same Guide model as the
 * hand-written guides, so routing, prerender, sitemap, schema and the /blog index pick them up.
 *
 * Every file is validated here. An invalid or colliding file is skipped with a warning —
 * it must never break the build (a failed Netlify build would publish a broken site).
 */
const files = import.meta.glob('./auto/*.json', { eager: true, import: 'default' }) as Record<string, unknown>;

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const str = (v: unknown, max = 5000): v is string => typeof v === 'string' && v.trim().length > 0 && v.length <= max;
const strArr = (v: unknown) => Array.isArray(v) && v.every((x) => typeof x === 'string');

function validBlock(b: unknown): b is GuideBlock {
  if (!b || typeof b !== 'object') return false;
  const x = b as Record<string, unknown>;
  switch (x.type) {
    case 'p':
    case 'h3':
    case 'note':
      return str(x.text);
    case 'h2':
      return str(x.text) && typeof x.id === 'string' && SLUG.test(x.id);
    case 'ul':
    case 'ol':
      return strArr(x.items) && (x.items as string[]).length > 0;
    case 'cta':
      return x.text === undefined || typeof x.text === 'string';
    default:
      return false;
  }
}

function toGuide(file: string, raw: unknown): Guide | null {
  const x = raw as Record<string, unknown>;
  const problems: string[] = [];
  if (!x || typeof x !== 'object') problems.push('not an object');
  else {
    if (!str(x.slug, 90) || !SLUG.test(x.slug)) problems.push('slug');
    if (!str(x.title, 140)) problems.push('title');
    if (!str(x.metaTitle, 80)) problems.push('metaTitle');
    if (!str(x.metaDescription, 200)) problems.push('metaDescription');
    if (!str(x.excerpt, 400)) problems.push('excerpt');
    if (!str(x.category, 40)) problems.push('category');
    if (!str(x.isoDate, 10) || !DATE.test(x.isoDate)) problems.push('isoDate');
    if (typeof x.readMinutes !== 'number' || x.readMinutes < 1) problems.push('readMinutes');
    if (!strArr(x.keywords)) problems.push('keywords');
    if (!strArr(x.related)) problems.push('related');
    if (x.solutions !== undefined && !strArr(x.solutions)) problems.push('solutions');
    if (!Array.isArray(x.blocks) || x.blocks.length < 3 || !x.blocks.every(validBlock)) problems.push('blocks');
    if (!Array.isArray(x.faq) || !x.faq.every((f) => f && str((f as Record<string, unknown>).q) && str((f as Record<string, unknown>).a))) problems.push('faq');
    if (x.lang !== undefined && x.lang !== 'tr') problems.push('lang (only tr)');
  }
  if (problems.length) {
    console.warn(`[blog-auto] skipped ${file}: invalid ${problems.join(', ')}`);
    return null;
  }
  return { ...(x as unknown as Guide), lang: 'tr' };
}

/** Valid panel posts. Slug collisions with existing pages are filtered in ./index.ts */
export const GUIDES_AUTO: Guide[] = Object.entries(files)
  .map(([file, raw]) => toGuide(file, raw))
  .filter((g): g is Guide => g !== null);
