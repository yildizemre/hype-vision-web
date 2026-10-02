import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GUIDES } from '../data/guides';
import { SITE_URL } from '../data/legalContent';
import { useBlogPosts } from '../i18n/content';
import { URL_LANG, pathFor } from '../i18n/routing';
import { breadcrumbSchema, usePageMeta } from '../seo/usePageMeta';

const COPY = {
  tr: {
    title: 'Görüntü İşleme ve Endüstriyel Yapay Zeka Blogu | Hype Vision',
    description:
      'Görüntü işleme, yapay zeka ile kalite kontrol, iş güvenliği (İSG), OEE ve KVKK üzerine rehberler ve sahadan anonim vaka notları. Hype Vision mühendislik ekibinden.',
    eyebrow: 'Blog',
    h1: 'Görüntü işleme ve endüstriyel yapay zeka',
    h1b: 'rehberleri',
    intro:
      'Fabrikada görüntü işleme projelerini planlayan üretim, kalite ve İSG ekipleri için pratik rehberler ve sahadan ölçülmüş sonuçlar.',
    guides: 'Rehberler',
    cases: 'Vaka notları',
    read: 'Oku',
    home: 'Ana sayfa',
  },
  en: {
    title: 'Industrial AI & Computer Vision Blog | Hype Vision',
    description:
      'Anonymous field case notes on computer vision for safety, quality control and productivity from the Hype Vision engineering team.',
    eyebrow: 'Blog',
    h1: 'Industrial computer vision',
    h1b: 'case notes',
    intro: 'Measured results from real deployments — customer names withheld, numbers kept.',
    guides: 'Guides',
    cases: 'Case notes',
    read: 'Read',
    home: 'Home',
  },
  ru: {
    title: 'Блог о промышленном ИИ и компьютерном зрении | Hype Vision',
    description:
      'Анонимные кейсы внедрения компьютерного зрения: охрана труда, контроль качества и производительность. От инженеров Hype Vision.',
    eyebrow: 'Блог',
    h1: 'Промышленное компьютерное зрение —',
    h1b: 'кейсы',
    intro: 'Измеренные результаты реальных внедрений без раскрытия названий клиентов.',
    guides: 'Руководства',
    cases: 'Кейсы',
    read: 'Читать',
    home: 'Главная',
  },
} as const;

export default function BlogIndexPage() {
  const c = COPY[URL_LANG];
  const posts = useBlogPosts();
  const guides = URL_LANG === 'tr' ? GUIDES : [];
  const url = `${SITE_URL}${pathFor('/blog', URL_LANG)}`;

  usePageMeta({
    title: c.title,
    description: c.description,
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: c.title,
        description: c.description,
        url,
        inLanguage: URL_LANG,
        publisher: { '@id': `${SITE_URL}/#organization` },
        blogPost: [
          ...guides.map((g) => ({
            '@type': 'BlogPosting',
            headline: g.title,
            datePublished: g.isoDate,
            url: `${SITE_URL}/blog/${g.slug}`,
          })),
          ...posts.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            datePublished: p.isoDate,
            url: `${SITE_URL}${pathFor(`/blog/${p.slug}`, URL_LANG)}`,
          })),
        ],
      },
      breadcrumbSchema([
        { name: c.home, url: `${SITE_URL}${pathFor('/', URL_LANG)}` },
        { name: c.eyebrow, url },
      ]),
    ],
  });

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />

      <div className="pt-16 lg:pt-[4.25rem] bg-[#0c2a30] border-b border-vision/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-light mb-3">{c.eyebrow}</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4 max-w-3xl">
            {c.h1} <span className="text-vision-light">{c.h1b}</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">{c.intro}</p>
        </div>
      </div>

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 w-full space-y-14">
        {guides.length > 0 && (
          <section aria-labelledby="rehberler">
            <h2 id="rehberler" className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-[#0A0A0A] mb-6">
              <BookOpen size={20} className="text-vision" aria-hidden />
              {c.guides}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {guides.map((g) => (
                <article key={g.slug} className="panel-card rounded-2xl p-6 flex flex-col hover:border-vision/25 hover:shadow-md transition-all group">
                  <div className="flex items-center gap-2 mb-3 text-[10px]">
                    <span className="font-semibold uppercase tracking-wider text-vision-dark px-2.5 py-1 rounded-full bg-vision-50 border border-vision/20">
                      {g.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-gray-400">
                      <Clock size={10} /> {g.readMinutes} dk
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0A0A0A] leading-snug mb-2 group-hover:text-vision-dark">
                    <Link to={`/blog/${g.slug}`}>{g.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{g.excerpt}</p>
                  <Link to={`/blog/${g.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-vision hover:text-vision-dark">
                    {c.read} <ArrowRight size={14} />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        <section aria-labelledby="vaka-notlari">
          <h2 id="vaka-notlari" className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-[#0A0A0A] mb-6">
            <Tag size={20} className="text-vision" aria-hidden />
            {c.cases}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((p) => (
              <article key={p.slug} className="panel-card rounded-2xl p-6 flex flex-col hover:border-vision/25 hover:shadow-md transition-all group">
                <div className="flex items-center gap-2 mb-3 text-[10px]">
                  <span className="font-semibold uppercase tracking-wider text-vision-dark px-2.5 py-1 rounded-full bg-vision-50 border border-vision/20">
                    {p.sector}
                  </span>
                  <span className="text-gray-400">{p.date}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-[#0A0A0A] leading-snug mb-2 group-hover:text-vision-dark">
                  <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{p.excerpt}</p>
                <Link to={`/blog/${p.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-vision hover:text-vision-dark">
                  {c.read} <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
