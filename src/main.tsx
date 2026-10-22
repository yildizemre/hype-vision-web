import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { i18nReady } from './i18n';
import App from './App.tsx';
import { ROUTER_BASENAME } from './i18n/routing';
import { ROUTE_CLUSTERS } from './seo/routes';
import './index.css';

// Prerender/sitemap script'i rota listesini buradan okur (tek kaynak)
(window as unknown as { __ROUTE_CLUSTERS__: unknown }).__ROUTE_CLUSTERS__ = ROUTE_CLUSTERS;

// Dil metinleri yüklenene kadar prerender edilmiş HTML ekranda kalır
i18nReady.then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter basename={ROUTER_BASENAME}>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
});
