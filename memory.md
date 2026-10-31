# memory.md — Kodda Nerede Kaldık?

> Tek amaç: her oturumun sonunda "kodda nerede kaldık"ı yazmak, sonraki oturumda
> buradan devam etmek. Spec detayı burada YOK → [yeloura-studio-proje-dokumani.md](yeloura-studio-proje-dokumani.md).

## ŞU AN SIRADAKİ ADIM
→ Yol haritası #6: Çoklu dil (TR/EN) i18n altyapısı. Metinler şu an bileşenlerde/`data/` içinde İngilizce hard-code; i18n'e taşınacak. (TR/EN butonu henüz işlevsiz.)

## TAMAMLANANLAR
- [x] #1 Proje kurulumu (Vite + React 19 + TS + Tailwind v4 + Framer Motion) — hazır geldi.
- [x] #2 Renk/tipografi token'ları — `src/index.css` (@theme) + Google Fonts.
- [x] #3 İskelet (header + 7 section + footer) — `src/components/**`, `App.tsx`.
- [x] #4 İçerik + örnek veriler — `src/data/*.ts`.
- [x] #5 Seans kartı → modal — `TreatmentCard` + `TreatmentModal` (Escape/focus/scroll-lock).
- [ ] #6 Çoklu dil (TR/EN) ← SIRADAKİ
- [ ] #7 Animasyonlar
- [ ] #8 A11y + reduced-motion
- [ ] #9 SEO/meta + favicon
- [ ] #10 Çerez onayı + analitik
- [ ] #11 Güvenlik & testler

## REPO
- GitHub: https://github.com/YoncaEsendemir/Yeloura-Studio.git (branch: main)
- **Kural:** Her değişiklikten sonra commit + push. Commit'lerde co-author satırı YOK.

## OTURUM GÜNLÜĞÜ (en yeni üstte)
### 2026-10-31 (2. oturum)
- Plausible analitik kararı işlendi (08, 09).
- `tsconfig.app.json`'a `@/*` path alias eklendi (build için gerekliydi).
- Tüm bölümler kodlandı (token'lar, veri, ui, layout, 7 section, App).
- Test: `npm run build` ✅, `npm run lint` ✅, tarayıcıda render + modal + Escape doğrulandı, konsol hatası yok.
- Görsel: palet-gradyanı placeholder (telifsizlik). Hero görseli hâlâ Vite şablon png'si → prenses gerçek foto verecek.

### 2026-10-31 (1. oturum)
- Spec `yeloura-brief/` içine haritalandı; kök doküman ince indeks oldu.
- Kararlar: İletişim = demo veri (form yok); fotoğraflar free/lisanslı; hikaye kitap-çevirme EVET; analitik EVET (araç seçimi açık).
- `.claude/settings.json` eklendi (includeCoAuthoredBy:false).
- Git kuruldu, ilk commit GitHub'a push edildi.
- Kod yazılmadı.
