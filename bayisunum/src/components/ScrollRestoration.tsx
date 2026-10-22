import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { restoreHubScroll, saveHubScroll } from '../lib/hubScroll';
export function useHubScroll() {
  const location = useLocation();
  const restoredKey = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => saveHubScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href') ?? '';
      const leavesHub =
        (href.startsWith('#/') && href !== '#/' && href !== '#') ||
        (href.startsWith('/') && href !== '/');
      if (leavesHub) saveHubScroll();
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  useLayoutEffect(() => {
    if (location.pathname !== '/') return;
    if (restoredKey.current === location.key) return;
    restoredKey.current = location.key;
    restoreHubScroll();
  }, [location.pathname, location.key]);
}

/** Alt sayfalara girerken üste al; hub'a dönüşte restore HubPage hook'u yapar. */
export default function ScrollRestoration() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    const prev = prevPath.current;
    const curr = location.pathname;

    if (prev === '/' && curr !== '/') {
      saveHubScroll();
    }

    if (curr !== '/' && prev !== curr) {
      window.scrollTo(0, 0);
    }

    prevPath.current = curr;
  }, [location.pathname, location.key]);

  return null;
}
