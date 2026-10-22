import type { VideoCategory } from '../data/content';

const HUB_BROWSER_KEY = 'bayisunum-hub-browser';

export type HubBrowserState = {
  category: VideoCategory;
  query: string;
};

export function saveHubBrowserState(state: HubBrowserState) {
  sessionStorage.setItem(HUB_BROWSER_KEY, JSON.stringify(state));
}

export function getHubBrowserState(): HubBrowserState | null {
  const raw = sessionStorage.getItem(HUB_BROWSER_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as HubBrowserState;
    if (!parsed?.category) return null;
    return {
      category: parsed.category,
      query: typeof parsed.query === 'string' ? parsed.query : '',
    };
  } catch {
    return null;
  }
}

export { HUB_BROWSER_KEY };
