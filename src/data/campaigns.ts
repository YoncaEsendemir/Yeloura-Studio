import type { Localized } from "@/i18n/config"

// Kampanya verisi (doküman 05 §9.3). Fiyatlar ÖRNEKTİR. "SPECIAL OFFER"
// etiketi i18n'den (t.campaigns.badge) gelir, burada tekrar edilmez.

export interface Campaign {
  id: string
  title: Localized
  description: Localized
  oldPrice: string
  newPrice: string
}

export const campaigns: Campaign[] = [
  {
    id: "laser",
    title: { tr: "Lazer Epilasyon", en: "Laser Hair Removal" },
    description: {
      tr: "Nazik teknolojiyle pürüzsüz, kalıcı sonuçlar.",
      en: "Smooth, lasting results with gentle technology.",
    },
    oldPrice: "₺2.000",
    newPrice: "₺1.500",
  },
  {
    id: "facial",
    title: { tr: "Yüz Bakımı", en: "Facial" },
    description: {
      tr: "Cildine özel nemlendirici bir ritüel.",
      en: "A hydrating ritual tailored to your skin.",
    },
    oldPrice: "₺1.500",
    newPrice: "₺1.200",
  },
  {
    id: "manicure",
    title: { tr: "El Bakımı & Manikür", en: "Manicure" },
    description: {
      tr: "Bakımlı eller için özel fiyat.",
      en: "A special price for well-kept hands.",
    },
    oldPrice: "₺700",
    newPrice: "₺500",
  },
]
