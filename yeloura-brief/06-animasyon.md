# 06 — Animasyon Rehberi

**Genel yaklaşım:** yumuşak geçişler, zarif ortaya çıkışlar, kontrollü etkileşimler.

## Animasyon Planı
| # | Animasyon | Açıklama | Teknoloji | Öncelik |
|---|-----------|----------|-----------|---------|
| 1 | Hero metni | Başlık→açıklama→buton sırayla; başlık hafif aşağıdan. ~0.4–0.8sn | Framer Motion | Çok yüksek |
| 2 | Hero görseli | Hafif opacity + çok küçük ölçek (zoom'dan kaçın) | FM / CSS | Yüksek |
| 3 | Header & mobil menü | Scroll'da görünüm değişir; menü yumuşak açılır, bağlantılar sırayla | FM + Tailwind | Yüksek |
| 4 | Kampanya kartları | Stagger: küçük gecikmelerle sırayla belirir | Framer Motion | Orta-Yüksek |
| 5 | Seans kartı hover | Hafif yükselir, görsel az yakınlaşır, gölge yumuşar | Tailwind + FM | Orta |
| 6 | Seans detay modalı | Arka plan kararır, modal opacity + ölçekle açılır; kapanış ters | Framer Motion | Yüksek |
| 7 | Scroll reveal | Hikâye/blog/yorum kaydırıldıkça belirir; ortak sistem | Framer Motion | Orta-Yüksek |
| 8 | Blog kartı | Görsel yakınlaşır, başlık rengi değişir | CSS + Tailwind | Düşük-Orta |
| 9 | Dil değiştirme | Metin güncellenir; opsiyonel fade | i18n + FM | Orta |
| 10 | Sayfa geçişleri | Tek sayfada gereksiz; kısa opacity yeterli | Framer Motion | Düşük |

## Dikkat Edilecekler
**A. Reduced Motion:** `prefers-reduced-motion` dikkate alınır (`src/hooks/useReducedMotion.ts`); büyük ölçek/kayma kaldırılır; animasyon olmasa da içerik görünür; menü/modal çalışmaya devam eder.

**B. Performans:** aynı anda çok animasyon çalıştırma; görselleri optimize et; sürekli animasyonları sınırla; mümkünse sadece `transform` + `opacity`; mobilde test et.

**C. Klavye erişilebilirliği:** menü, dil, modal aç/kapat (Escape), randevu bağlantıları yalnızca klavye ile kullanılabilmeli; modalda doğru focus yönetimi.

**D. Animasyon içerikten önemli değil:** animasyon başlık/buton/hizmetleri erişilemez yapmamalı; JS hatası içeriği kaybetmemeli.
