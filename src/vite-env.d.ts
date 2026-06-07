/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_NEWSLETTER_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
