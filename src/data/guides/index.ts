import { GUIDES_PART1 } from './part1';
import { GUIDES_PART2 } from './part2';
import type { Guide } from './types';

export type { Guide, GuideBlock, GuideFaq } from './types';

/** Türkçe rehber yazıları — yeniden eskiye */
export const GUIDES: Guide[] = [...GUIDES_PART1, ...GUIDES_PART2].sort((a, b) =>
  b.isoDate.localeCompare(a.isoDate),
);

const bySlug = new Map(GUIDES.map((g) => [g.slug, g]));

export function getGuide(slug: string): Guide | undefined {
  return bySlug.get(slug);
}
