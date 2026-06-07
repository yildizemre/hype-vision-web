import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { applyStoredConsent, trackPageView } from '../lib/analytics';

/** Uygulama açılışında kayıtlı çerez tercihini uygular (GA yalnızca onaylıysa). */
export function AnalyticsBootstrap() {
  useEffect(() => {
    applyStoredConsent();
  }, []);

  return null;
}

/** SPA rota değişimlerinde sayfa görüntüleme (yalnızca analitik onaylıysa). */
export default function AnalyticsRouteTracker() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    trackPageView(pathname + search);
  }, [pathname, search]);

  return null;
}
