import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { ArrowRight, Check, ChevronRight, Cpu, Bell, Camera, LayoutDashboard, Server, Play } from 'lucide-react';
import SmartLink from './SmartLink';
import { PILOT_STEPS, UI } from '../../content/shared';
import type { Faq, Lang } from '../../content/types';
import { submitLeadForm, type LeadKind } from '../../lib/forms';
import { track, type SiteEvent } from '../../lib/events';

export { SmartLink };

/* ---------- Breadcrumb ---------- */
export function Breadcrumbs({ items, dark = true }: { items: { name: string; url?: string }[]; dark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`flex flex-wrap items-center gap-1.5 text-xs mb-6 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
      {items.map((it, i) => (
        <span key={i} className="inline-flex items-center gap-1.5">
          {i > 0 && <ChevronRight size={12} aria-hidden />}
          {it.url ? (
            <SmartLink href={it.url} className={dark ? 'hover:text-white transition-colors' : 'hover:text-vision-dark'}>
              {it.name}
            </SmartLink>
          ) : (
            <span className={dark ? 'text-vision-light' : 'text-vision-dark'} aria-current="page">
              {it.name}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

/* ---------- Sayfa başlığı ---------- */
export function PageHero({
  crumbs,
  eyebrow,
  h1,
  lead,
  definition,
  children,
}: {
  crumbs: { name: string; url?: string }[];
  eyebrow: string;
  h1: string;
  lead: string;
  definition?: string;
  children?: ReactNode;
}) {
  return (
    <div className="pt-16 lg:pt-[4.25rem] hero-bg border-b border-vision/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16">
        <Breadcrumbs items={crumbs} />
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-vision-light mb-3">{eyebrow}</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-5 max-w-4xl">{h1}</h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl">{lead}</p>
        {definition && (
          <p className="mt-6 max-w-3xl text-sm sm:text-[15px] text-gray-200 leading-relaxed border-l-2 border-vision pl-4">{definition}</p>
        )}
        {children && <div className="mt-8 flex flex-col sm:flex-row gap-3">{children}</div>}
      </div>
    </div>
  );
}

/* ---------- CTA düğmeleri ---------- */
export function CtaButton({
  href,
  children,
  variant = 'primary',
  event = 'cta_click',
  location,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'ghostDark';
  event?: SiteEvent;
  location: string;
}) {
  const cls =
    variant === 'primary'
      ? 'bg-vision hover:bg-vision-dark text-white'
      : variant === 'ghost'
        ? 'border border-white/25 text-white hover:bg-white/10'
        : 'border border-gray-300 text-[#0A0A0A] hover:border-vision/40 bg-white';
  return (
    <SmartLink
      href={href}
      onClick={() => track(event, { location, target: href })}
      className={`inline-flex items-center justify-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors ${cls}`}
    >
      {children}
      {variant === 'primary' && <ArrowRight size={16} aria-hidden />}
    </SmartLink>
  );
}

/** Sayfa sonu baskın CTA bloğu */
export function CtaPanel({ lang, title, text, primary, secondary, location }: {
  lang: Lang;
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  location: string;
}) {
  const u = UI[lang];
  const p = primary ?? { label: u.ctaCameras, href: lang === 'en' ? '/en/camera-assessment' : '/kamera-degerlendirme' };
  return (
    <section className="rounded-2xl bg-[#0c2a30] p-8 sm:p-12 text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">{title ?? u.ctaTitle}</h2>
      <p className="text-gray-300 mb-7 max-w-2xl mx-auto leading-relaxed">{text ?? u.ctaText}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <CtaButton href={p.href} location={location}>{p.label}</CtaButton>
        {secondary && (
          <CtaButton href={secondary.href} variant="ghost" location={location}>
            {secondary.label}
          </CtaButton>
        )}
      </div>
    </section>
  );
}

/** Mobilde ekran altına sabitlenen tek CTA */
export function StickyCta({ label, href, location }: { label: string; href: string; location: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-40 p-3 bg-white/95 backdrop-blur border-t border-gray-200 transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'}`}
      aria-hidden={!show}
    >
      <SmartLink
        href={href}
        tabIndex={show ? 0 : -1}
        onClick={() => track('cta_click', { location: `${location}_sticky`, target: href })}
        className="flex items-center justify-center gap-2 w-full text-sm font-semibold text-white py-3.5 rounded-lg bg-vision"
      >
        {label} <ArrowRight size={16} aria-hidden />
      </SmartLink>
    </div>
  );
}

/* ---------- Bölüm başlığı + içerik ---------- */
export function Section({ id, title, children, className = '' }: { id?: string; title: string; children: ReactNode; className?: string }) {
  return (
    <section aria-labelledby={id} className={className}>
      <h2 id={id} className="scroll-mt-24 text-xl sm:text-2xl font-semibold text-[#0A0A0A] mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((t) => (
        <li key={t} className="flex gap-2.5 text-[15px] text-gray-700 leading-relaxed">
          <Check size={17} className="text-vision shrink-0 mt-1" aria-hidden />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ items }: { items: string[] }) {
  return (
    <ol className="space-y-3">
      {items.map((t, i) => (
        <li key={t} className="flex gap-3 text-[15px] text-gray-700 leading-relaxed">
          <span className="shrink-0 w-7 h-7 rounded-full bg-vision-50 border border-vision/25 text-vision-dark text-xs font-bold flex items-center justify-center">
            {i + 1}
          </span>
          <span className="pt-0.5">{t}</span>
        </li>
      ))}
    </ol>
  );
}

/* ---------- SSS ---------- */
export function FaqList({ faq }: { faq: Faq[] }) {
  return (
    <div className="space-y-3">
      {faq.map((f) => (
        <details key={f.q} className="group rounded-xl border border-gray-200 bg-white p-5 open:border-vision/30">
          <summary className="cursor-pointer font-medium text-[#0A0A0A] list-none flex justify-between gap-3">
            {f.q}
            <span className="text-vision group-open:rotate-45 transition-transform" aria-hidden>
              +
            </span>
          </summary>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ---------- İlgili içerik ---------- */
export function RelatedLinks({ title, links }: { title: string; links: { title: string; url: string; desc?: string }[] }) {
  if (!links.length) return null;
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-vision-dark mb-4">{title}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {links.map((l) => (
          <SmartLink key={l.url} href={l.url} className="panel-card rounded-xl p-4 hover:border-vision/25 transition-colors">
            <span className="block text-sm font-semibold text-[#0A0A0A]">{l.title}</span>
            {l.desc && <span className="block mt-1 text-xs text-gray-500 line-clamp-2">{l.desc}</span>}
          </SmartLink>
        ))}
      </div>
    </div>
  );
}

/* ---------- Pilot süreci ---------- */
export function PilotProcess({ lang }: { lang: Lang }) {
  return (
    <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {PILOT_STEPS[lang].map((s, i) => (
        <li key={s.title} className="panel-card rounded-xl p-5">
          <span className="text-xs font-bold text-vision">{String(i + 1).padStart(2, '0')}</span>
          <p className="font-semibold text-[#0A0A0A] mt-1 mb-1.5">{s.title}</p>
          <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Mimari diyagram (HTML, metin tabanlı) ---------- */
export function ArchitectureDiagram({ lang }: { lang: Lang }) {
  const steps =
    lang === 'en'
      ? [
          { icon: Camera, t: 'Existing IP cameras / NVR', d: 'RTSP / ONVIF streams' },
          { icon: Server, t: 'Edge device on-site', d: 'AI models + rules; video stays local' },
          { icon: Bell, t: 'Events', d: 'Time, camera, zone, evidence frame' },
          { icon: LayoutDashboard, t: 'Dashboard, alerts, API', d: 'Notifications, relays, REST/webhook' },
        ]
      : [
          { icon: Camera, t: 'Mevcut IP kamera / NVR', d: 'RTSP / ONVIF akışı' },
          { icon: Server, t: 'Tesis içi edge cihaz', d: 'Yapay zeka + kurallar; görüntü yerelde' },
          { icon: Bell, t: 'Olaylar', d: 'Zaman, kamera, bölge, kanıt karesi' },
          { icon: LayoutDashboard, t: 'Panel, alarm, API', d: 'Bildirim, röle, REST/webhook' },
        ];
  return (
    <figure className="panel-card rounded-2xl p-5 sm:p-6">
      <div className="grid sm:grid-cols-4 gap-3 items-stretch">
        {steps.map(({ icon: Icon, t, d }, i) => (
          <div key={t} className="relative rounded-xl border border-vision/20 bg-vision-50/60 p-4">
            <Icon size={20} className="text-vision-dark mb-2" aria-hidden />
            <p className="text-sm font-semibold text-[#0A0A0A]">{t}</p>
            <p className="text-xs text-gray-600 mt-1">{d}</p>
            {i < steps.length - 1 && (
              <ArrowRight size={16} className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 text-vision z-10 bg-white rounded-full" aria-hidden />
            )}
          </div>
        ))}
      </div>
      <figcaption className="mt-3 text-xs text-gray-500 flex items-center gap-1.5">
        <Cpu size={12} aria-hidden />
        {lang === 'en' ? 'Typical on-premise deployment. Cloud and hybrid options are also available.' : 'Tipik tesis içi kurulum. Bulut ve hibrit seçenekler de mevcuttur.'}
      </figcaption>
    </figure>
  );
}

/* ---------- Video demo (poster önce, tıklayınca yüklenir) ---------- */
export type DemoVideo = {
  id: string;
  name: string;
  description: string;
  poster: string;
  src: string;
  uploadDate?: string;
  duration?: string;
  transcript?: string;
};

export function VideoDemo({ video, lang }: { video: DemoVideo; lang: Lang }) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <figure className="panel-card rounded-2xl overflow-hidden">
      <div className="relative aspect-video bg-black">
        {playing ? (
          <video
            ref={ref}
            src={video.src}
            poster={video.poster}
            controls
            autoPlay
            muted
            playsInline
            preload="none"
            className="w-full h-full object-contain"
            onEnded={() => track('video_complete', { video: video.id })}
          />
        ) : (
          <button
            type="button"
            onClick={() => {
              setPlaying(true);
              track('video_play', { video: video.id });
            }}
            className="group absolute inset-0 w-full h-full"
            aria-label={`${lang === 'en' ? 'Play video' : 'Videoyu oynat'}: ${video.name}`}
          >
            <img src={video.poster} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
              <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                <Play size={26} className="text-[#0c2a30] ml-1" aria-hidden />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="p-4">
        <p className="font-semibold text-[#0A0A0A] text-sm">{video.name}</p>
        <p className="text-xs text-gray-500 mt-1">{video.description}</p>
        {video.transcript && (
          <details className="mt-2 text-xs text-gray-600">
            <summary className="cursor-pointer">{lang === 'en' ? 'Transcript' : 'Açıklama metni'}</summary>
            <p className="mt-2 leading-relaxed">{video.transcript}</p>
          </details>
        )}
      </figcaption>
    </figure>
  );
}

/* ---------- Lead formu ---------- */
type FieldDef = { name: string; label: string; type?: 'text' | 'email' | 'select' | 'textarea' | 'number'; options?: string[]; required?: boolean };

export function LeadForm({ kind, lang, fields, submitLabel }: { kind: LeadKind; lang: Lang; fields: FieldDef[]; submitLabel: string }) {
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if ((form.elements.namedItem('_hp') as HTMLInputElement)?.value) return; // bot tuzağı
    const data: Record<string, string> = {};
    fields.forEach((f) => {
      data[f.name] = String((form.elements.namedItem(f.name) as HTMLInputElement | null)?.value ?? '').trim();
    });
    setState('sending');
    const res = await submitLeadForm(kind, data);
    if (res.ok) {
      setState('ok');
      track(kind, { lang });
      form.reset();
    } else {
      setState('error');
      setMsg(res.message);
    }
  }

  const inputCls =
    'w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-[#0A0A0A] focus:outline-none focus:ring-2 focus:ring-vision/40 focus:border-vision';

  if (state === 'ok') {
    return (
      <div role="status" className="panel-card rounded-2xl p-8 text-center">
        <Check size={32} className="text-vision mx-auto mb-3" aria-hidden />
        <p className="font-semibold text-[#0A0A0A]">{lang === 'en' ? 'Thank you — we will get back to you shortly.' : 'Teşekkürler — en kısa sürede dönüş yapacağız.'}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="panel-card rounded-2xl p-6 sm:p-8 grid sm:grid-cols-2 gap-4" noValidate={false}>
      <input type="text" name="_hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {fields.map((f) => (
        <label key={f.name} className={`block ${f.type === 'textarea' ? 'sm:col-span-2' : ''}`}>
          <span className="block text-xs font-semibold text-gray-700 mb-1.5">
            {f.label}
            {f.required && <span className="text-vision"> *</span>}
          </span>
          {f.type === 'select' ? (
            <select name={f.name} required={f.required} className={inputCls} defaultValue="">
              <option value="" disabled>
                {lang === 'en' ? 'Select…' : 'Seçin…'}
              </option>
              {f.options!.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          ) : f.type === 'textarea' ? (
            <textarea name={f.name} rows={4} required={f.required} className={inputCls} />
          ) : (
            <input name={f.name} type={f.type ?? 'text'} required={f.required} min={f.type === 'number' ? 1 : undefined} className={inputCls} />
          )}
        </label>
      ))}
      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
        <p className="text-xs text-gray-500">
          {lang === 'en' ? (
            <>By submitting you agree to our <SmartLink href="/en/gizlilik-politikasi" className="underline">privacy policy</SmartLink>.</>
          ) : (
            <>Göndererek <SmartLink href="/gizlilik-politikasi" className="underline">gizlilik politikasını</SmartLink> kabul etmiş olursunuz.</>
          )}
        </p>
        <button
          type="submit"
          disabled={state === 'sending'}
          className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-7 py-3.5 rounded-lg bg-vision hover:bg-vision-dark disabled:opacity-60 transition-colors"
        >
          {state === 'sending' ? (lang === 'en' ? 'Sending…' : 'Gönderiliyor…') : submitLabel}
        </button>
      </div>
      {state === 'error' && (
        <p role="alert" className="sm:col-span-2 text-sm text-red-600">
          {msg}
        </p>
      )}
    </form>
  );
}
