import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAllFaqs, useFaqCategories } from '../i18n/content';

export default function FaqSection() {
  const { t } = useTranslation();
  const faqCategories = useFaqCategories();
  const allFaqs = useAllFaqs();
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);
  const [openKey, setOpenKey] = useState<string | null>(
    `${faqCategories[0].id}-0`
  );
  const [query, setQuery] = useState('');

  const category = faqCategories.find((c) => c.id === activeCategory) ?? faqCategories[0];

  const filteredItems = query.trim()
    ? allFaqs.filter(
        (f) =>
          f.q.toLowerCase().includes(query.toLowerCase()) ||
          f.a.toLowerCase().includes(query.toLowerCase())
      )
    : category.items;

  return (
    <section
      id="sss"
      className="section-tint py-16 sm:py-24 lg:py-32 scroll-mt-20"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">
            {t('sections.faq.eyebrow')}
          </p>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-4"
          >
            {t('sections.faq.title')}{' '}
            <span className="text-vision">{t('sections.faq.titleHighlight')}</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            {t('sections.faq.description')}
          </p>
        </div>

        <div className="relative mb-6">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('sections.faq.searchPlaceholder')}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-vision focus:ring-2 focus:ring-vision/20 bg-white"
          />
        </div>

        {!query.trim() && (
          <div className="scroll-tabs mb-6">
            {faqCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setActiveCategory(c.id);
                  setOpenKey(`${c.id}-0`);
                }}
                className={`shrink-0 text-xs sm:text-sm font-medium px-4 py-2 rounded-lg border transition-colors ${
                  activeCategory === c.id
                    ? 'bg-vision text-white border-vision'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-vision/40'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-2">
          {filteredItems.length === 0 ? (
            <p className="text-center text-sm text-gray-500 py-8">{t('sections.faq.noResults')}</p>
          ) : (
            filteredItems.map((faq, i) => {
              const key = `${activeCategory}-${i}`;
              const isOpen = openKey === key;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border border-gray-100 overflow-hidden bg-white panel-card"
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#0A0A0A] pr-2">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-gray-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 -mt-1">
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          {t('sections.faq.notFound')}{' '}
          <a
            href="mailto:info@hypevisionlab.com"
            data-track="email"
            data-track-location="faq"
            id="cta-email-faq"
            className="font-semibold text-vision hover:underline"
          >
            info@hypevisionlab.com
          </a>
        </p>
      </div>
    </section>
  );
}
