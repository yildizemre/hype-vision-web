import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useBlogPosts } from '../i18n/content';

export default function BlogSection() {
  const { t } = useTranslation();
  const blogPosts = useBlogPosts();
  return (
    <section
      id="vaka-notlari"
      className="section-tint py-16 sm:py-24 lg:py-32 scroll-mt-20 border-y border-vision/10"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">
              {t('sections.blog.eyebrow')}
            </p>
            <h2
              id="blog-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-3"
            >
              {t('sections.blog.title')}{' '}
              <span className="text-vision">{t('sections.blog.titleHighlight')}</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {t('sections.blog.description')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="panel-card rounded-2xl p-6 flex flex-col h-full hover:border-vision/25 hover:shadow-md transition-all group"
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-vision-dark px-2.5 py-1 rounded-full bg-vision-50 border border-vision/20">
                  <Tag size={10} />
                  {post.sector}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] text-gray-400">
                  <Clock size={10} />
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#0A0A0A] leading-snug mb-3 group-hover:text-vision-dark transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {post.results.slice(0, 2).map((r) => (
                  <span
                    key={r.label}
                    className="text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 border border-gray-100"
                  >
                    {r.label}: <strong className="text-vision-dark">{r.value}</strong>
                  </span>
                ))}
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-vision hover:text-vision-dark transition-colors mt-auto"
              >
                {t('sections.blog.readMore')}
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
