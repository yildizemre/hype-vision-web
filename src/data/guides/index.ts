import { GUIDES_PART1 } from './part1';
import { GUIDES_PART2 } from './part2';
import { GUIDES_PART3 } from './part3';
import { GUIDES_PART4 } from './part4';
import { GUIDES_EN1 } from './en1';
import { GUIDES_EN2 } from './en2';
import type { Guide } from './types';

export type { Guide, GuideBlock, GuideFaq } from './types';

const byDate = (a: Guide, b: Guide) => b.isoDate.localeCompare(a.isoDate);

/** Türkçe rehberler (/blog/:slug) — yeniden eskiye */
export const GUIDES: Guide[] = [...GUIDES_PART1, ...GUIDES_PART2, ...GUIDES_PART3, ...GUIDES_PART4].sort(byDate);

/** English resources (/en/resources/:slug) */
export const GUIDES_EN: Guide[] = [...GUIDES_EN1, ...GUIDES_EN2].sort(byDate);

const trBySlug = new Map(GUIDES.map((g) => [g.slug, g]));
const enBySlug = new Map(GUIDES_EN.map((g) => [g.slug, g]));

export function getGuide(slug: string): Guide | undefined {
  return trBySlug.get(slug);
}

export function getGuideEn(slug: string): Guide | undefined {
  return enBySlug.get(slug);
}

export function guideUrl(g: Guide): string {
  return g.lang === 'en' ? `/en/resources/${g.slug}` : `/blog/${g.slug}`;
}
