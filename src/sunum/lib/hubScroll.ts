const HUB_SCROLL_KEY = 'bayisunum-hub-scroll';

export function saveHubScroll() {
  const y = window.scrollY;
  if (y > 0) {
    sessionStorage.setItem(HUB_SCROLL_KEY, String(y));
  }
}

export function getHubScroll(): number {
  const raw = sessionStorage.getItem(HUB_SCROLL_KEY);
  if (!raw) return 0;
  const y = Number(raw);
  return Number.isFinite(y) && y > 0 ? y : 0;
}

/** Hub yeniden mount olduğunda kayıtlı konuma dön — layout oturana kadar tekrar dener. */
export function restoreHubScroll() {
  const target = getHubScroll();
  if (target <= 0) return;

  let tries = 0;
  const attempt = () => {
    if (tries > 40) return;
    tries++;
    window.scrollTo(0, target);
    const diff = Math.abs(window.scrollY - target);
    const canReach = document.documentElement.scrollHeight >= target + window.innerHeight * 0.25;
    if (diff > 24 && canReach) {
      requestAnimationFrame(attempt);
    }
  };

  requestAnimationFrame(attempt);
  setTimeout(attempt, 50);
  setTimeout(attempt, 150);
  setTimeout(attempt, 350);
}

export { HUB_SCROLL_KEY };
