import { Camera, ArrowRight, CheckCircle2, LayoutDashboard } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Step = { label: string; sub: string };

export default function CameraIntegration() {
  const { t } = useTranslation();
  const cameraBrands = t('sections.cameraIntegration.brands', { returnObjects: true }) as string[];
  const protocols = t('sections.cameraIntegration.protocols', { returnObjects: true }) as string[];
  const benefits = t('sections.cameraIntegration.benefits', { returnObjects: true }) as string[];
  const stepTexts = t('sections.cameraIntegration.steps', { returnObjects: true }) as Step[];
  const steps = stepTexts.map((step, i) => ({
    ...step,
    Icon: i === 0 ? Camera : i === 2 ? LayoutDashboard : ArrowRight,
    hideIcon: i === 1,
  }));

  return (
    <section
      id="kamera"
      className="section-tint py-16 sm:py-24 lg:py-32 scroll-mt-20 border-b border-vision/10"
      aria-labelledby="kamera-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-dark mb-3">
              {t('sections.cameraIntegration.eyebrow')}
            </p>
            <h2 id="kamera-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0A0A0A] leading-tight mb-5">
              {t('sections.cameraIntegration.title')}
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              {t('sections.cameraIntegration.description')}
              <strong className="font-medium text-[#0A0A0A]">{t('sections.cameraIntegration.descriptionBold')}</strong>
              {t('sections.cameraIntegration.descriptionSuffix')}
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-vision shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-8">
              {protocols.map((p) => (
                <span
                  key={p}
                  className="text-xs font-medium px-3 py-1 rounded-md bg-white border border-gray-200 text-gray-700"
                >
                  {p}
                </span>
              ))}
            </div>

            <a
              href="/#iletisim"
              data-track="contact_cta"
              data-track-location="camera"
              className="inline-flex items-center text-sm font-semibold text-white px-6 py-3 rounded-lg bg-vision hover:bg-vision-dark transition-colors"
            >
              {t('sections.cameraIntegration.cta')}
            </a>
          </div>

          <div>
            <div className="panel-card rounded-2xl p-6 sm:p-8 mb-6">
              <p className="text-xs font-semibold text-vision-dark mb-5">{t('sections.cameraIntegration.howConnect')}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-3">
                {steps.map((step, i) => (
                  <div key={step.label} className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-0 relative">
                    {i < steps.length - 1 && (
                      <ArrowRight
                        size={16}
                        className="absolute top-4 -right-2 text-vision/30 hidden sm:block"
                        aria-hidden
                      />
                    )}
                    <div className="w-12 h-12 shrink-0 sm:mx-auto rounded-xl bg-vision-50 border-2 border-vision/25 flex items-center justify-center sm:mb-2">
                      {step.hideIcon ? (
                        <span className="text-xs font-bold text-vision">AI</span>
                      ) : (
                        <step.Icon size={20} className="text-vision" strokeWidth={1.5} />
                      )}
                    </div>
                    <p className="text-xs font-semibold text-[#0A0A0A] mb-0.5 sm:text-center">{step.label}</p>
                    <p className="text-[11px] text-gray-500 sm:text-center">{step.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs font-medium text-gray-500 mb-2">{t('sections.cameraIntegration.brandsLabel')}</p>
            <div className="flex flex-wrap gap-2">
              {cameraBrands.slice(0, 6).map((brand) => (
                <span
                  key={brand}
                  className="text-[11px] text-gray-600 px-2.5 py-1 rounded bg-white border border-gray-100"
                >
                  {brand}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {t('sections.cameraIntegration.brandsNote')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
