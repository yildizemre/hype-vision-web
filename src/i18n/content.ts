import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { FaqCategory, FaqItem } from '../data/faqData';
import type { BlogPost } from '../data/blogPosts';
import type { LegalPageData, LegalSection } from '../data/legalContent';
import { LEGAL_ICONS } from '../data/legalContent';

export const FAQ_CATEGORY_IDS = [
  'genel',
  'kamera',
  'mimari',
  'veri',
  'kurulum',
  'platform',
] as const;

export const BLOG_SLUGS = [
  'gida-hattinda-idle-azaltma',
  'isg-kkd-ihlal-tespiti',
  'kalite-kontrol-fire-azaltma',
  'tekstil-hat-a-fire-dususu',
  'lojistik-palet-sayim-sapmasi',
] as const;

export const SECTOR_SLUGS = ['tekstil', 'otomotiv', 'gida', 'metal'] as const;
export type SectorSlug = (typeof SECTOR_SLUGS)[number];

export const LEGAL_SLUGS = [
  'gizlilik-politikasi',
  'hizmet-sartlari',
  'cerez-politikasi',
] as const;

type FaqItemRaw = { q: string; a: string };
type BlogSectionRaw = { heading?: string; paragraphs: string[] };
type BlogPostRaw = {
  title: string;
  excerpt: string;
  sector: string;
  readTime: string;
  date: string;
  metaDescription: string;
  results: { label: string; value: string }[];
  sections: BlogSectionRaw[];
};
type LegalSectionRaw = { id?: string; heading?: string; paragraphs: string[] };
type LegalPageRaw = {
  title: string;
  shortTitle: string;
  metaDescription: string;
  summary: string;
  lastUpdated: string;
  sections: LegalSectionRaw[];
};

export function useFaqCategories(): FaqCategory[] {
  const { t, i18n } = useTranslation();

  return useMemo(
    () =>
      FAQ_CATEGORY_IDS.map((id) => {
        const items = t(`faq.categories.${id}.items`, {
          returnObjects: true,
        }) as FaqItemRaw[];
        return {
          id,
          label: t(`faq.categories.${id}.label`),
          items: Array.isArray(items) ? items : [],
        };
      }),
    [t, i18n.language]
  );
}

export function useAllFaqs(): FaqItem[] {
  const categories = useFaqCategories();
  return useMemo(() => categories.flatMap((c) => c.items), [categories]);
}

export function useBlogPosts(): BlogPost[] {
  const { t, i18n } = useTranslation();

  return useMemo(
    () =>
      BLOG_SLUGS.map((slug) => {
        const raw = t(`blog.posts.${slug}`, { returnObjects: true }) as BlogPostRaw;
        return {
          slug,
          title: raw.title,
          excerpt: raw.excerpt,
          sector: raw.sector,
          readTime: raw.readTime,
          date: raw.date,
          metaDescription: raw.metaDescription,
          results: raw.results ?? [],
          sections: raw.sections ?? [],
        };
      }),
    [t, i18n.language]
  );
}

export function useBlogPost(slug: string): BlogPost | undefined {
  const posts = useBlogPosts();
  return useMemo(() => posts.find((p) => p.slug === slug), [posts, slug]);
}

export type SectorPage = {
  slug: SectorSlug;
  title: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  headlineHighlight: string;
  intro: string;
  pains: { title: string; desc: string }[];
  modules: string[];
  metrics: { value: string; label: string }[];
  caseSlug: string;
};

type SectorPageRaw = Omit<SectorPage, 'slug'>;

export function useSectorPage(slug: string): SectorPage | undefined {
  const { t, i18n } = useTranslation();

  return useMemo(() => {
    if (!SECTOR_SLUGS.includes(slug as SectorSlug)) return undefined;
    const raw = t(`sectors.pages.${slug}`, { returnObjects: true }) as SectorPageRaw;
    return { slug: slug as SectorSlug, ...raw };
  }, [slug, t, i18n.language]);
}

export function useSectorList(): SectorSlug[] {
  return [...SECTOR_SLUGS];
}

export function useLegalPagesList(): LegalPageData[] {
  const { t, i18n } = useTranslation();

  return useMemo(
    () =>
      LEGAL_SLUGS.map((slug) => {
        const raw = t(`legal.pages.${slug}`, { returnObjects: true }) as LegalPageRaw;
        const sections: LegalSection[] = (raw.sections ?? []).map((s) => ({
          id: s.id,
          heading: s.heading,
          paragraphs: s.paragraphs,
        }));
        return {
          slug,
          title: raw.title,
          shortTitle: raw.shortTitle,
          metaDescription: raw.metaDescription,
          summary: raw.summary,
          lastUpdated: raw.lastUpdated,
          Icon: LEGAL_ICONS[slug],
          sections,
        };
      }),
    [t, i18n.language]
  );
}

export function useLegalPage(slug: string): LegalPageData | undefined {
  const pages = useLegalPagesList();
  return useMemo(() => pages.find((p) => p.slug === slug), [pages, slug]);
}

export function useLegalNavLinks() {
  const pages = useLegalPagesList();
  return useMemo(
    () =>
      pages.map(({ slug, title, shortTitle, summary, Icon }) => ({
        slug,
        title,
        shortTitle,
        summary,
        Icon,
        href: `/${slug}`,
      })),
    [pages]
  );
}
