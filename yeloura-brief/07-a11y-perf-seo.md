# 07 — Erişilebilirlik · Performans · SEO

## SEO & Meta
Her dil için ayrı:
- `<title>` — TR: "Yeloura Studio — Güzellik ve Bakım Ritüelleri" / EN: "Yeloura Studio — Beauty & Self-Care Rituals"
- `<meta name="description">` — 150–160 karakter, dile göre
- `<html lang="tr|en">` — dil değiştikçe güncellenir
- `<link rel="canonical">`, `<meta name="robots" content="index, follow">`

**Open Graph:** og:title, og:description, og:image (1200×630), og:type=website, og:url, og:site_name=Yeloura Studio, og:locale=tr_TR|en_US
**Twitter:** twitter:card=summary_large_image, title, description, image
**JSON-LD:** `schema.org/BeautySalon` veya `LocalBusiness` — name, image, telephone, address, openingHours, priceRange, url, sameAs. Yalnızca **gerçek** bilgiyle; demo'da örnek olduğu belirtilir.

## Favicon & Marka Görselleri
`public/favicon.svg` + `public/icons/`:
| Dosya | Boyut | Amaç |
|-------|-------|------|
| favicon.svg | ölçeklenebilir | Modern tarayıcı |
| favicon.ico | 32×32 | Eski tarayıcı yedek |
| apple-touch-icon.png | 180×180 | iOS |
| icon-192 / icon-512.png | 192/512 | PWA (ops.) |
| maskable-icon.png | 512×512 | Android (ops.) |
| og-image.png | 1200×630 | Sosyal önizleme |
| site.webmanifest | — | PWA (ops.) |

Logo varyantları: açık zemin için koyu logo, koyu zemin için açık logo; tercihen **SVG**.

## Erişilebilirlik (a11y)
- Yalnızca klavye ile tam kullanım: menü, dil, seans detayı/modal (Escape ile kapat), randevu bağlantıları.
- Modalda focus yönetimi + ekran okuyucu desteği.
- Reduced motion desteği (bkz. [06-animasyon.md](06-animasyon.md)).
- Doğru başlık hiyerarşisi, aria-label'lar iki dilde.

## Performans
- Görseller optimize (uygun boyut/format).
- Aynı anda az animasyon; `transform`/`opacity` tercih.
- Mobilde performans testi.
