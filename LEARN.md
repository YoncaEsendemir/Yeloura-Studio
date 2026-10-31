# LEARN.md — Yeloura Studio Öğrenme Günlüğü

> Bu dosya, projeyi birlikte kodlarken öğrendiğin kavramları tutar.
> Kural kaynağı: `ClaudeLearnCO.md`. Amaç: kısa, pratik, tekrarsız bilgi.
>
> **Nasıl okunur:** Her yeni özellik/değişiklikte buraya bir blok eklenir.
> Blok formatı aşağıdaki "Şablon" ile aynıdır. En yeni kayıt en alttadır.

---

## Nasıl Çalışıyoruz (Öğrenme Modu Kuralları)

- Önce **çalışan kod** → sonra **kısa açıklama** → sonra **öğrenme özeti**.
- Uzun teori yok; sadece o an gereken kavram anlatılır.
- "öğret" / "test et" dersen Claude kod yazmaz, sana 1-3 soru sorar.
- "bunu kendim yazacağım" dersen kod verilmez, adım adım yönlendirilirsin.
- Hata olursa format: **Problem → Sebep → Çözüm → Öğren**.

---

## Kavram Sözlüğü (büyüdükçe dolacak)

> Bir kavramı ilk kez kullandığımızda buraya tek satır tanım düşeriz,
> böylece ileride tekrar anlatmaya gerek kalmaz.

| Kavram | Tek cümlelik tanım | İlk kullanıldığı yer |
|--------|--------------------|----------------------|
| _(henüz yok)_ | | |

---

## Öğrenme Kayıtları

> Şablon (kopyala-doldur):
>
> ### [TARİH] — [Özellik / Değişiklik adı]
> - **Ne yaptık:** 1-2 cümle.
> - **Neden yaptık:** 1-2 cümle.
> - **Önemli Kavramlar:** (max 3-5 madde)
> - **Kodun Mantığı:** (max 3-5 adım)
> - **İlgili dosyalar:** `path/to/file`

<!-- Yeni kayıtlar buradan itibaren eklenecek -->

### 2026-10-31 — Proje tanıma & kurulum (kod yok)
- **Ne yaptık:** Proje dokümanını ve öğrenme kurallarını okuduk; `LEARN.md` ve `memory.md` iskeletlerini oluşturduk.
- **Neden yaptık:** Kodlamaya başlamadan önce ortak bir "hafıza" ve "öğrenme" zemini kurmak, ileride kafa karışıklığını önlemek.
- **Önemli Kavramlar:**
  - **SPA (single-page app):** Tüm bölümler tek sayfada, menü smooth-scroll ile ilgili bölüme kaydırır.
  - **i18n:** Arayüzün TR/EN iki dilde tutulması (metinler `src/i18n/` içinde).
  - **Design token:** Renk/tipografi gibi tasarım değerlerinin merkezî tanımı (Tailwind + CSS değişkenleri).
- **Kodun Mantığı:** (henüz kod yok — sıradaki adım proje iskeleti)
- **İlgili dosyalar:** `yeloura-studio-proje-dokumani.md`, `ClaudeLearnCO.md`

### 2026-10-31 — Tüm bölümler kodlandı (05-bolumler.md)
- **Ne yaptık:** Header, Hero, Kampanyalar, Seanslar (+modal), Hikâye (kitap çevirme), Blog, Testimonials (manuel slider), Contact, Footer — tek sayfalık iskeleti kurduk.
- **Neden yaptık:** Dokümandaki bölüm spesifikasyonunu çalışır, responsive, erişilebilir bir arayüze dönüştürmek.
- **Önemli Kavramlar:**
  - **Tailwind v4 `@theme`:** Renk/font token'ları CSS'te tanımlanır → otomatik `bg-rose`, `text-ink`, `font-serif` util'leri üretir (`src/index.css`).
  - **Veri-odaklı render (`.map`):** İçerik `src/data/*.ts` dosyalarında; bileşenler `array.map()` ile kart üretir. İleride i18n'e taşımak kolay olur.
  - **State lifting:** Modalın açık/kapalı durumu `Treatments`'ta tutulur, `active` seans state'i çocuğa prop olarak iner.
  - **Controlled component (slider):** Testimonials/Story bir `index` state'i ile; `translateX(-index*100%)` veya sayfa değişimiyle kontrol edilir (otomatik kaymaz).
  - **Erişilebilirlik:** Modal `Escape` ile kapanır, açılınca focus kapatma butonuna gider, `body` scroll kilitlenir; kartlar `role="button"` + klavye (Enter/Space).
  - **`AnimatePresence` (framer-motion):** Bir eleman DOM'dan çıkarken çıkış animasyonu oynatır (modal, mobil menü, sayfa çevirme).
  - **Path alias `@/`:** `@/components/...` = `src/components/...`. Hem Vite (`vite.config.ts`) hem TS (`tsconfig.app.json > paths`) tanımı gerekir — ikincisi eksikti, ekledik.
- **Kodun Mantığı:**
  1. `index.css` → token'lar + temel stiller (smooth scroll, reduced-motion).
  2. `data/*.ts` → tip (interface) + içerik dizileri.
  3. `ui/` küçük bileşenler (Button, Card'lar, Modal, Placeholder) → tekrar kullanılır.
  4. `sections/` her bölüm veriyi `.map`'leyip kartları dizer; `layout/` header+footer sarar.
  5. `App.tsx` hepsini `<main>` içinde sıralar.
- **Notlar:** Görseller telifsizlik gereği palet-gradyanı placeholder (gerçek foto sonra). Fontlar şimdilik Google Fonts; üretimde self-host (KVKK). i18n + Plausible + çerez bannerı sonraki adımlar.
- **İlgili dosyalar:** `src/index.css`, `src/data/*`, `src/components/**`, `src/App.tsx`
