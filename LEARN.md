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
