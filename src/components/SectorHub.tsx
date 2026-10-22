import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function SectorHub() {
  const { t } = useTranslation();
  const sectors = t('growth.sectorHub.sectors', { returnObjects: true }) as {
    slug: string;
    tag: string;
    metric: string;
  }[];

  return (
    <section
      id="sektor-cozumleri"
      className="bg-[#0A0A0A] py-16 sm:py-24 lg:py-28 scroll-mt-24"
      aria-labelledby="sector-hub-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-light mb-3">
            {t('growth.sectorHub.eyebrow')}
          </p>
          <h2 id="sector-hub-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4">
            {t('growth.sectorHub.title')}{' '}
            <span className="text-vision-light">{t('growth.sectorHub.titleHighlight')}</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            {t('growth.sectorHub.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {sectors.map((sector) => (
            <Link
              key={sector.slug}
              to={`/sektor/${sector.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-vision/40 hover:bg-white/[0.06] transition-all"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-vision/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-vision/20 transition-colors" />
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-vision-light mb-3">
                {sector.tag}
              </span>
              <p className="text-2xl font-bold text-white mb-4">{sector.metric}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-400 group-hover:text-vision-light transition-colors">
                {t('growth.sectorHub.explore')}
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
