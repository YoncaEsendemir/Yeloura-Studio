# 05 — Bölümler (Spesifikasyon)

## Sayfa Sırası
1. Header · 2. Hero · 3. Kampanyalar · 4. Seanslar · 5. Hikâyemiz · 6. Blog · 7. Testimonials · 8. Contact · 9. Footer

### Görsel Hiyerarşi
```
HEADER → Logo, Home, Campaigns, Treatments, Our Story, Blog, Contact, TR/EN, See Menu
HERO → Büyük görsel, ana başlık, açıklama, Explore Treatments, Our Story
CAMPAIGNS → 3 kampanya kartı
TREATMENTS → Seans kartları → detay modalı
OUR STORY → Hikâye + görsel
BLOG → 3 blog kartı
TESTIMONIALS → Müşteri yorumları (yatay slider)
CONTACT → İletişim bilgileri + randevu/iletişim butonu
FOOTER → Logo, hızlı bağlantılar, sosyal medya, gizlilik/telif
```

---

## 9.1 Header
- **İçerik:** Logo (Yeloura Studio), menü (Ana Sayfa · Seanslar · Hikâyemiz · Blog · İletişim), **TR/EN**, **Randevu Al** butonu.
- **Renkler:** arka plan kırık beyaz; logo/menü yumuşak siyah; hover gül kurusu; seçili dil gül kurusu; buton gül kurusu zemin + açık metin.
- **Davranış:** menü baştan gül kurusu değil (sadece hover/seçili); scroll'da header gizlenmez, hafifçe değişir, erişilebilir kalır.

## 9.2 Hero
- **İçerik:** büyük görsel, etkileyici başlık, kısa açıklama, **Explore Treatments**, **Randevu Al** (tek telefon numarası), opsiyonel slogan, opsiyonel seans/kampanya önizleme.
- **Renkler:** arka plan kırık beyaz; başlık yumuşak siyah; küçük üst başlık gül kurusu; açıklama ikincil metin; Explore butonu gül kurusu; Our Story butonu şeffaf + ince kenarlık + siyah metin.
- **Örnek:** "YOUR BEAUTY, YOUR RITUAL. / Discover the beauty of self-care."

## 9.3 Kampanyalar
- **Kart içeriği:** görsel, seans adı, kısa açıklama, kampanya fiyatı/indirim, **Discover Offer** butonu.
- **Örnek kampanyalar:** Cilt bakımı · Lazer epilasyon · Hydrafacial · Anti-aging.
- **Renkler:** bölüm krem; kart kırık beyaz; başlık yumuşak siyah; etiket gül kurusu; normal fiyat ikincil (üstü çizili); kampanyalı fiyat yumuşak siyah; buton gül kurusu.
- ⚠️ Fiyatlar **örnek fiyat** olarak belirtilir.

## 9.4 Seanslar
- Hero/kampanyadaki "See Menu" butonu buraya kaydırır.
- **Kart:** görsel, ad, kısa açıklama, tahmini süre, fiyat, **Detayları Gör**.
- **Tıklanınca → Detay Modalı:** açıklama, uygulama aşamaları, süre, kimler için uygun, fiyat, randevu butonu.
- **Renkler:** arka plan kırık beyaz; kart beyaz/açık krem; başlık yumuşak siyah; açıklama ikincil; hover kenarlık gül kurusu; detay bağlantısı gül kurusu.

## 9.5 Hikâyemiz (About Us)
- **İçerik:** salonun hikâyesi, bakım yaklaşımı, kalite anlayışı, salon/ekip fotoğrafı, opsiyonel gerçek istatistikler.
- **Etkileşim (karar):** "kitap sayfası çevirme" düzeni **uygulanacak** — her sayfada fotoğraf + yan kart + açıklama.
- **Renkler:** arka plan krem; başlık yumuşak siyah; küçük etiket gül kurusu (az kullan); açıklama ikincil.
- **Örnek:** "OUR PHILOSOPHY / Beauty begins with taking time for yourself."

## 9.6 Blog (Beauty Journal)
- **Kart:** görsel, başlık, kısa açıklama, tarih, **Read Article**.
- **Örnek yazılar:** cilt bakım rutini, bakım öncesi/sonrası, mevsimsel bakım, profesyonel vs evde bakım.
- **Renkler:** arka plan kırık beyaz; kart beyaz; başlık yumuşak siyah; kategori etiketi açık pudra `#E8D2D0`; Read Article gül kurusu; hover gül kurusu + yumuşak görsel yakınlaşma.
- İlk sürüm örnek veri; ileride ayrı detay sayfası eklenebilir.

## 9.7 Testimonials
- **İçerik:** yorum, isim/izinli bilgi, opsiyonel yıldız.
- **Davranış (karar):** **manuel** yatay slider (otomatik/hızlı kayma yok); ok veya dots ile gezinme; dokunmatikte swipe; klavye erişilebilir.
- Gerçek yorum yoksa **örnek içerik** olarak işaretlenir.

## 9.8 Contact (İletişim) — KARAR
- **Form YOK.** İlk sürümde randevu sistemi yok.
- **Gösterilecekler (demo/kurgusal veri):** telefon, adres, sahibi/salon adı — bkz. [09-dod-yolharitasi.md](09-dod-yolharitasi.md) "Demo İletişim Verisi".
- Opsiyonel: çalışma saatleri, harita bağlantısı, sosyal medya.
- **Renkler (koyu kontrast):** arka plan yumuşak siyah `#252321`; başlık kırık beyaz; açıklama açık krem; ikonlar gül kurusu; buton gül kurusu zemin.

## 9.9 Footer
- **İçerik:** logo + kısa açıklama, hızlı bağlantılar, iletişim, sosyal medya, Gizlilik Politikası, Kullanım Koşulları, telif.
- **Renkler:** arka plan `#252321`; logo kırık beyaz; bağlantılar açık krem; hover gül kurusu; ayırıcı düşük kontrast gri-kahve.
