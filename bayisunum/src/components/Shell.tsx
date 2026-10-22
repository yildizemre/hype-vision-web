import type { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { LOGO_HEADER } from '../lib/assets';
import LanguageSwitcher from './LanguageSwitcher';

type ShellProps = {
  children: ReactNode;
  backTo?: string;
  backLabel?: string;
  title?: string;
  subtitle?: string;
};

function BackLink({ to, label }: { to: string; label: string }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (to === '/') {
    return (
      <button
        type="button"
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-500 hover:text-vision-dark transition-colors shrink-0 max-w-[5.5rem] sm:max-w-none"
      >
        <ArrowLeft size={16} className="shrink-0" />
        <span className="truncate sm:hidden">{t('shell.back')}</span>
        <span className="hidden sm:inline whitespace-nowrap">{label}</span>
      </button>
    );
  }

  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-500 hover:text-vision-dark transition-colors shrink-0 max-w-[5.5rem] sm:max-w-none"
    >
      <ArrowLeft size={16} className="shrink-0" />
      <span className="truncate sm:hidden">{t('shell.back')}</span>
      <span className="hidden sm:inline whitespace-nowrap">{label}</span>
    </Link>
  );
}

export default function Shell({
  children,
  backTo,
  backLabel,
  title,
  subtitle,
}: ShellProps) {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const resolvedBackLabel = backLabel ?? t('shell.backToHub');

  return (
    <div className="min-h-screen flex flex-col section-tint overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-vision/10 bg-white/95 backdrop-blur-md shadow-sm shadow-vision/5">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
            {backTo ? <BackLink to={backTo} label={resolvedBackLabel} /> : null}
            <Link to="/" className="flex items-center gap-2 min-w-0">
              <img
                src={LOGO_HEADER}
                alt="Hype Vision"
                className="h-7 sm:h-9 w-auto max-w-[7rem] sm:max-w-none object-contain shrink-0"
              />
              <span className="hidden sm:inline text-[10px] font-semibold uppercase tracking-widest text-vision-dark border border-vision/25 bg-vision-50 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                {t('shell.customerPresentation')}
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <LanguageSwitcher />
            {title ? (
              <div className="hidden md:block text-right min-w-0 max-w-[45%] lg:max-w-md">
                <p className="text-sm font-semibold text-night truncate">{title}</p>
                {subtitle ? <p className="text-xs text-gray-500 truncate">{subtitle}</p> : null}
              </div>
            ) : null}
            <button
              type="button"
              onClick={() => {
                logout();
                navigate('/giris');
              }}
              className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-600 transition-colors"
              title={t('shell.logoutTitle')}
            >
              <LogOut size={14} />
              <span className="hidden sm:inline">{t('shell.logout')}</span>
            </button>
          </div>
        </div>

        {title ? (
          <div className="md:hidden border-t border-vision/8 bg-white/90 px-3 py-2">
            <p className="text-sm font-semibold text-night leading-snug line-clamp-2">{title}</p>
            {subtitle ? <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-2">{subtitle}</p> : null}
          </div>
        ) : null}
      </header>

      <main className="flex-1 w-full min-w-0">{children}</main>

      <footer className="border-t border-vision/10 bg-white py-3 sm:py-4 text-center text-[10px] text-gray-500 px-4">
        {t('shell.footer')}
      </footer>
    </div>
  );
}
