# 02 — Teknoloji Yığını & Proje Yapısı

## Teknoloji Yığını
| Katman | Teknoloji |
|--------|-----------|
| UI | React (TypeScript) — kurulu: React 19 |
| Stil | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animasyon | Framer Motion (basit hover/renk için CSS yeterli) |
| İkonlar | lucide-react |
| Dil yönetimi | React tabanlı i18n (react-i18next veya özel context) |
| Routing | react-router-dom kurulu; tek sayfa olduğundan opsiyonel |
| Build | Vite 8 |
| Backend | İlk sürümde yok (ileride randevu/veri için eklenebilir) |

## Proje Dosya Yapısı
> Kök klasör markayla tutarlı: `yeloura-studio/` (istenirse `lumea-beauty/`).

```
src/
├── assets/
├── components/
│   ├── layout/      → Header.tsx, Footer.tsx, MobileMenu.tsx
│   ├── sections/    → Hero, Campaigns, Treatments, OurStory, Blog, Testimonials, Contact
│   ├── ui/          → Button, TreatmentCard, BlogCard, TreatmentModal
│   └── animations/  → FadeIn.tsx, StaggerContainer.tsx
├── i18n/            → en.ts, tr.ts, index.ts
├── data/            → treatments.ts, campaigns.ts, blogPosts.ts
├── hooks/           → useReducedMotion.ts
├── styles/          → global.css
├── App.tsx
└── main.tsx

public/   → images/, favicon.svg, icons/
tests/
```
