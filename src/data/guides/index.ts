import { GUIDES_PART1 } from './part1';
import { GUIDES_PART2 } from './part2';
import { GUIDES_PART3 } from './part3';
import { GUIDES_PART4 } from './part4';
import { GUIDES_EN1 } from './en1';
import { GUIDES_EN2 } from './en2';
import { GUIDES_AUTO } from './auto';
import { CASE_STUDIES } from '../../content/cases';
import type { Guide } from './types';

export type { Guide, GuideBlock, GuideFaq } from './types';

const byDate = (a: Guide, b: Guide) => b.isoDate.localeCompare(a.isoDate);

/** Türkçe rehberler (/blog/:slug) — yeniden eskiye */
const HAND_WRITTEN: Guide[] = [...GUIDES_PART1, ...GUIDES_PART2, ...GUIDES_PART3, ...GUIDES_PART4];

/** Panel posts may never replace a hand-written guide or shadow a legacy /blog/<case> redirect */
const TAKEN = new Set([...HAND_WRITTEN.map((g) => g.slug), ...CASE_STUDIES.map((c) => c.slug)]);
const AUTO = GUIDES_AUTO.filter((g) => {
  if (!TAKEN.has(g.slug)) return true;
  console.warn(`[blog-auto] skipped ${g.slug}: slug already used`);
  return false;
});

export const GUIDES: Guide[] = [...HAND_WRITTEN, ...AUTO].sort(byDate);

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
