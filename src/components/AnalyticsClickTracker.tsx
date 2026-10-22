import { useEffect } from 'react';
import { handleTrackedClick } from '../lib/conversions';

/** data-track="phone|email|contact_cta" + data-track-location="header" vb. */
export default function AnalyticsClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => handleTrackedClick(e.target);
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
