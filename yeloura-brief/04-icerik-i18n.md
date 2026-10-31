# 04 — İçerik & Çoklu Dil (TR / EN)

Dil değiştirildiğinde **tüm arayüz** doğru dile geçmeli. Kontrol edilecek alanlar:
- Header, Hero, Kampanyalar, Seans detayları, Blog, Formlar, Footer
- Erişilebilirlik metinleri (aria-label vb.)

## Yapı
- Dil dosyaları: `src/i18n/tr.ts` ve `src/i18n/en.ts`
- Yapılandırma: `src/i18n/index.ts`

## Kurallar
- Asıl öncelik: tüm metinlerin **eksiksiz çevirisi**. Geçiş animasyonu ikincil (opsiyonel fade).
- Dil değiştiğinde `<html lang>` değeri de güncellenir (`tr` / `en`) — SEO ile bağlantılı (bkz. [07-a11y-perf-seo.md](07-a11y-perf-seo.md)).
- Her metin hard-code edilmez; i18n anahtarı üzerinden gelir.
