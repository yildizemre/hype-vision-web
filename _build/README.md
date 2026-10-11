# Hype Vision site — üretim

- `index.html` (TR ana sayfa) elle düzenlenir. EN ana sayfa (`en/index.html`) ve tüm alt sayfalar üretilir:

      python -I _build/build.py

- İçerik: `content.json` (eski siteden çekildi: `_build/crawl.py`, İngilizce karşılıklar: `_build/crawl_en.py`).
- EN ana sayfa çevirisi: `_build/i18n.py` (T sözlüğü). TR ana sayfaya yeni metin eklersen buraya İngilizcesini de ekle;
  build sonunda "çevrilmeyen metin" listesi basılır.
- Şirket sayfaları (Hakkımızda, Kariyer, Yasal, İş ortaklığı): `_build/pages_extra.py` (TR/EN metinler TXT içinde).
- SEO: her sayfada canonical, hreflang (tr/en/x-default), Open Graph, JSON-LD; `sitemap.xml`, `robots.txt`, `_redirects` (Netlify 301), `404.html` build ile üretilir.
- Formlar: FormSubmit AJAX → info@hypevisionlab.com (iletişim + bülten). İlk gönderimde FormSubmit onay maili gelir.
- Lead paneli (lead.hypevisionlab.com) blog "Yayınla": Guide JSON'u `src/data/guides/auto/<slug>.json` yoluna yazar.
  Bu site aynı klasörü okur → `/blog/<slug>/` sayfası, blog listesi ve sitemap'e otomatik eklenir (build çalışınca).
  Yeni repoya geçilirse lead sunucusundaki `BLOG_GH_REPO` bu sitenin reposuna çevrilmeli ve Netlify build komutu `python _build/build.py` olmalı.
- Mail imzaları `https://hypevisionlab.com/hypevisionlogo.png` kullanır — kökteki bu dosyayı silme.
- URL politikası eski siteyle aynı: sonda / yok (yalnızca / ve /en/). Her sayfa hem `x.html` (Netlify /x → 200) hem `x/index.html` (yerel önizleme) olarak yazılır.
- GA4 G-87Z95JWRRM yalnızca çerez onayıyla yüklenir (anahtar `hypevision-cookie-consent`, eski siteyle aynı). Form gönderimleri `contact_submit` / `newsletter_signup` olayı yollar.
- `llms.txt`, `netlify.toml` (güvenlik + cache başlıkları) build ile/elle hazır.
