/** Gizli müşteri sunum merkezi — menüde yok, yalnızca URL ile erişim */
export const SUNUM_HUB = '/sunum';
export const SUNUM_LOGIN = '/sunum/giris';

export function sunumDeck(deckId: string): string {
  return `/sunum/deck/${deckId}`;
}

export function sunumVideo(videoId: string): string {
  return `/sunum/video/${videoId}`;
}

export function isSunumHubPath(pathname: string): boolean {
  return pathname === SUNUM_HUB || pathname === `${SUNUM_HUB}/`;
}
