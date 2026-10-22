# Hype Vision — Müşteri Sunum Merkezi

Dahili sunum ve video demo hub'ı. Ana siteye (`hypevisionlab.com`) bağlı değil — bağımsız çalışır.

## Çalıştırma

```bash
cd bayisunum
npm install
npm run dev
```

Tarayıcı: **http://localhost:5180**

## İçerik

| Bölüm | Açıklama |
|--------|----------|
| **Sunumlar** | MES (8 slayt), İSG (6 slayt) — slayt slayt gezinme |
| **Video demolar** | Drive videosu + sağda tıklanabilir çıkarımlar |

## PowerPoint (PPTX) ekleme

Sunum dosyasını şuraya koy:

```
bayisunum/public/decks/mes.pptx
bayisunum/public/decks/isg.pptx
```

`src/data/content.ts` içinde `pptxUrl` zaten tanımlı — dosyayı koyunca otomatik yüklenir. PNG export gerekmez.

Kök klasördeki `.pptx` dosyasını güncellediğinde `public/decks/` altına tekrar kopyala.

## Yeni video demo ekleme

`src/data/content.ts` içinde `videoDemos` dizisine ekle:

```ts
{
  id: 'yeni-demo',
  title: 'Başlık',
  subtitle: 'Alt başlık',
  tag: 'Etiket',
  driveFileId: 'GOOGLE_DRIVE_FILE_ID', // paylaşım linkindeki /d/XXXXX/ kısmı
  insights: [
    { id: '1', title: '...', paragraphs: ['...'] },
  ],
}
```

Drive linki örneği: `https://drive.google.com/file/d/FILE_ID/view`

## Build (statik dosya)

```bash
npm run build
```

Çıktı: `dist/` — isterseniz ayrı subdomain veya klasörde host edebilirsiniz.

## Not

- HashRouter kullanılıyor (`#/`) — statik hosting'de sunucu ayarı gerektirmez.
- PPTX dosyası klasörde durabilir; görüntüleme PNG export ile yapılır.
