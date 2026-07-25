/** Tek kaynak: marka ve adres bilgileri — tüm sitede aynı kullanılır. */
export const SITE_BRAND = {
  name: 'Hype Vision',
  /** Yasal unvan — yalnızca footer ve sözleşmelerde */
  legalName: 'Hype Teknoloji',
  email: 'info@hypevisionlab.com',
  phone: '+90 541 862 9190',
  website: 'https://hypevisionlab.com',
} as const;

export const SITE_ADDRESS = {
  street: 'GTÜ Teknopark, Hightech Binası, Kemal Nehrozoğlu Cd. 400. Sokak',
  district: 'Gebze OSB',
  city: 'Gebze',
  region: 'Kocaeli',
  postalCode: '41480',
  country: 'TR',
  /** Tek satır görünüm */
  full: 'GTÜ Teknopark, Hightech Binası, Kemal Nehrozoğlu Cd. 400. Sokak, 41480 Gebze/Kocaeli',
  short: 'GTÜ Teknopark · Gebze',
  /** Schema.org / geo */
  latitude: 40.7984,
  longitude: 29.4303,
} as const;

export const CATALOG_PDF_PATH = '/hype_vision_katalog.pdf';
