import { SAFETY_SOLUTIONS } from './solutions-safety';
import { OPS_SOLUTIONS } from './solutions-ops';
import { INDUSTRIES } from './industries';
import { HUBS } from './hubs';
import { CASE_STUDIES } from './cases';
import { getLandingPage } from '../data/landingPages';
import { GUIDES, GUIDES_EN, guideUrl } from '../data/guides';
import type { Industry, IndustryId, Lang, Solution, SolutionId } from './types';

export * from './types';
export { INDUSTRIES, HUBS, CASE_STUDIES };

export const SOLUTIONS: Solution[] = [...SAFETY_SOLUTIONS, ...OPS_SOLUTIONS];

const solById = new Map(SOLUTIONS.map((s) => [s.id, s]));
const indById = new Map(INDUSTRIES.map((i) => [i.id, i]));

export const getSolution = (id: SolutionId) => solById.get(id)!;
export const getIndustry = (id: IndustryId) => indById.get(id)!;

/** Yeni SolutionPage ile render edilen yol → çözüm */
export function solutionByPath(fullPath: string): { sol: Solution; lang: Lang } | undefined {
  for (const s of SOLUTIONS) {
    if (s.urls.en === fullPath) return { sol: s, lang: 'en' };
    if (s.tr && s.urls.tr === fullPath) return { sol: s, lang: 'tr' };
  }
  return undefined;
}

export function industryByPath(fullPath: string): { ind: Industry; lang: Lang } | undefined {
  for (const i of INDUSTRIES) {
    if (i.urls.en === fullPath) return { ind: i, lang: 'en' };
    if (i.tr && !i.trExisting && i.urls.tr === fullPath) return { ind: i, lang: 'tr' };
  }
  return undefined;
}

/** Çözümün bu dildeki görünen adı (TR eski landing ise başlığından) */
export function solutionName(s: Solution, lang: Lang): string {
  if (lang === 'en') return s.en.name;
  if (s.tr) return s.tr.name;
  const slug = s.urls.tr?.replace(/^\//, '') ?? '';
  return getLandingPage(slug)?.title.split('|')[0].trim() ?? s.en.name;
}

export function solutionUrl(s: Solution, lang: Lang): string | undefined {
  return lang === 'en' ? s.urls.en : s.urls.tr;
}

export function industryName(i: Industry, lang: Lang): string {
  if (lang === 'en') return i.en.name;
  if (i.tr) return i.tr.name;
  const lp = getLandingPage(i.urls.tr.split('/').pop() ?? '');
  return lp?.title.split('|')[0].trim() ?? i.en.name;
}

/** Bir çözümü destekleyen kaynak yazıları (iç linkleme) */
export function resourcesForSolution(id: SolutionId, lang: Lang, limit = 3) {
  const list = lang === 'en' ? GUIDES_EN : GUIDES;
  return list
    .filter((g) => g.solutions?.includes(id))
    .slice(0, limit)
    .map((g) => ({ title: g.title, url: guideUrl(g) }));
}

export function casesForSolution(id: SolutionId) {
  return CASE_STUDIES.filter((c) => c.solutions.includes(id));
}

export function casesForIndustry(id: IndustryId) {
  return CASE_STUDIES.filter((c) => c.industry === id);
}

export function industriesForSolution(id: SolutionId): Industry[] {
  return getSolution(id).industries.map(getIndustry);
}
