import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Calendar, ChevronRight, Clock, Tag, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE_URL } from '../data/legalContent';
import { useBlogPost, useBlogPosts } from '../i18n/content';
import { getHomeSeoStrings } from '../components/HomeSeo';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

export default function BlogPostPage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const post = useBlogPost(slug ?? '');
  const blogPosts = useBlogPosts();

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | ${t('blog.ui.titleSuffix')}`;
    setMeta('description', post.metaDescription);
    setMeta('og:title', post.title, 'property');
    setMeta('og:description', post.metaDescription, 'property');
    setMeta('og:url', `${SITE_URL}/blog/${post.slug}`, 'property');

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}/blog/${post.slug}`;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.date,
      author: { '@type': 'Organization', name: 'Hype Vision' },
      publisher: { '@type': 'Organization', name: 'Hype Vision' },
      url: `${SITE_URL}/blog/${post.slug}`,
    };
    const scriptId = 'blog-article-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      const home = getHomeSeoStrings(t);
      document.title = home.title;
      setMeta('description', home.description);
      if (canonical) canonical.href = `${SITE_URL}/`;
      document.getElementById(scriptId)?.remove();
    };
  }, [post, t]);

  if (!post) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen flex flex-col section-tint">
      <Header variant="solid" />

      <div className="pt-16 lg:pt-[4.25rem] bg-[#0c2a30] border-b border-vision/15">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400 mb-5">
            <Link to="/" className="hover:text-vision-light transition-colors">
              {t('blog.ui.breadcrumbHome')}
            </Link>
            <ChevronRight size={12} className="text-gray-600" aria-hidden />
            <Link to="/#vaka-notlari" className="hover:text-vision-light transition-colors">
              {t('blog.ui.breadcrumbBlog')}
            </Link>
            <ChevronRight size={12} className="text-gray-600" aria-hidden />
            <span className="text-vision-light font-medium line-clamp-1">{post.sector}</span>
          </nav>
          <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-4">
            <span className="inline-flex items-center gap-1.5">
              <Tag size={12} className="text-vision-light" />
              {post.sector}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={12} />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={12} />
              {post.readTime} {t('blog.ui.readTimeSuffix')}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 sm:mb-10">
          {post.results.map((r) => (
            <div key={r.label} className="panel-card rounded-xl p-4 text-center">
              <p className="text-lg sm:text-xl font-bold text-vision mb-0.5">{r.value}</p>
              <p className="text-[10px] sm:text-xs text-gray-500">{r.label}</p>
            </div>
          ))}
        </div>

        <article className="panel-card rounded-2xl p-6 sm:p-8 lg:p-10 space-y-8">
          {post.sections.map((section, i) => (
            <section key={i}>
              {section.heading && (
                <h2 className="text-lg font-semibold text-[#0A0A0A] mb-3 pb-2 border-b border-gray-100">
                  {section.heading}
                </h2>
              )}
              <div className="space-y-3">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
          <p className="text-xs text-gray-400 pt-4 border-t border-gray-100 italic">
            {t('blog.ui.disclaimer')}
          </p>
        </article>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <Link
            to="/#vaka-notlari"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-600 hover:text-vision transition-colors"
          >
            <ArrowLeft size={16} />
            {t('blog.ui.allPosts')}
          </Link>
          <Link
            to="/#iletisim"
            data-track="contact_cta"
            data-track-location="blog"
            id="cta-contact-blog"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-lg bg-vision hover:bg-vision-dark transition-colors"
          >
            {t('blog.ui.contact')}
          </Link>
        </div>

        {blogPosts.filter((p) => p.slug !== post.slug).length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-xs font-bold uppercase tracking-widest text-vision-dark mb-4">
              {t('blog.ui.otherPosts')}
            </p>
            <div className="space-y-3">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="block p-4 rounded-xl panel-card hover:border-vision/25 transition-colors"
                  >
                    <p className="text-sm font-semibold text-[#0A0A0A] mb-1">{p.title}</p>
                    <p className="text-xs text-gray-500 line-clamp-2">{p.excerpt}</p>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
