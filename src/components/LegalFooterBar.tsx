import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLegalNavLinks } from '../i18n/content';

type LegalFooterBarProps = {
  activeSlug?: string;
};

export default function LegalFooterBar({ activeSlug }: LegalFooterBarProps) {
  const { t } = useTranslation();
  const legalNavLinks = useLegalNavLinks();
  return (
    <div className="border-t border-white/8 bg-[#0d0d0d]" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 text-center mb-5 sm:mb-6">
          {t('legal.ui.footerBarTitle')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {legalNavLinks.map(({ slug, title, summary, Icon, href }) => {
            const isActive = activeSlug === slug;
            return (
              <Link
                key={slug}
                to={href}
                className={`group flex items-start gap-3 p-4 sm:p-5 rounded-xl border transition-all ${
                  isActive
                    ? 'border-vision/40 bg-vision/10'
                    : 'border-white/10 bg-white/[0.03] hover:border-vision/25 hover:bg-white/[0.05]'
                }`}
              >
                <div
                  className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-vision/20 text-vision-light' : 'bg-white/5 text-gray-400 group-hover:text-vision-light'
                  }`}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    className={`text-sm font-semibold mb-1 ${
                      isActive ? 'text-vision-light' : 'text-gray-200 group-hover:text-white'
                    }`}
                  >
                    {title}
                  </p>
                  <p className="text-[11px] text-gray-500 leading-snug line-clamp-2">{summary}</p>
                </div>
                <ChevronRight
                  size={16}
                  className={`shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5 ${
                    isActive ? 'text-vision-light' : 'text-gray-600 group-hover:text-gray-400'
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
