import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import App from './App.tsx';
import { ROUTER_BASENAME } from './i18n/routing';
import { SEO_ROUTES } from './seo/routes';

// Prerender/sitemap script'i rota listesini buradan okur (tek kaynak)
(window as unknown as { __SEO_ROUTES__: unknown }).__SEO_ROUTES__ = SEO_ROUTES;
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={ROUTER_BASENAME}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
