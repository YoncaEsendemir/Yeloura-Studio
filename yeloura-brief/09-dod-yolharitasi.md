# 09 — Definition of Done · Yol Haritası · Kararlar

## Önerilen Çalışma Sırası
1. Proje kurulumu + dosya yapısı (React+TS+Tailwind+FM) ✅ (kurulum hazır)
2. Renk/tipografi token'ları (`styles/global.css`, Tailwind)
3. İskelet: header + section'lar + footer (statik, responsive)
4. İçerik + örnek veriler (`data/treatments.ts`, `campaigns.ts`, `blogPosts.ts`)
5. Seans kartı → modal akışı
6. Çoklu dil (TR/EN) + tüm çeviriler
7. Animasyonlar (Hero → menü → stagger → scroll reveal → modal)
8. Erişilebilirlik + reduced-motion
9. SEO/meta + favicon + marka görselleri
10. Çerez onayı + (onaya bağlı) analitik
11. Güvenlik & kalite testleri (geliştirme boyunca + dağıtım öncesi)

## Definition of Done (bir bölüm "bitti" sayılır)
- Responsive (mobil/tablet/masaüstü) ✓
- TR/EN metinleri eksiksiz ✓
- Klavye erişilebilir + reduced-motion uyumlu ✓
- JS hatasız, görseller lisanslı/free ✓
- İlgili `LEARN.md` kaydı yazıldı, `memory.md` güncellendi ✓

## Alınmış Kararlar
- [x] Marka adı: **Yeloura Studio** (alt: LUMÉA).
- [x] Testimonials: **manuel** yatay slider.
- [x] İlk sürüm: backend yok.
- [x] **İletişim: form YOK** → telefon + adres + sahibi/salon adı. Proje bir **demo/öğrenme** projesi olduğu için veriler **uydurma (demo)**.
- [x] **Fotoğraflar:** yalnızca free/kullanım hakkı olan veya kullanıcı sağlar. Telifli yok.
- [x] **Hikâye:** "kitap sayfası çevirme" etkileşimi **uygulanacak**.
- [x] **Analitik: Plausible** (çerezsiz/gizlilik dostu; çerez onayına bağlı, bkz. [08-guvenlik.md](08-guvenlik.md)).

### Demo İletişim Verisi (kurgusal — gerçek değil)
- Salon: **Yeloura Studio** · Sahibi: **Elif Yıldız** (kurgusal)
- Adres: **Bağdat Cad. No:124, Kadıköy / İstanbul**
- Telefon: **+90 212 555 01 47** (555 = demo numara)
- Saatler: **Pzt–Cmt 10:00–20:00**

## Açık Sorular
- [ ] Analitik aracı seçimi (Google Analytics mi, Plausible mı?) — onay bekliyor.
