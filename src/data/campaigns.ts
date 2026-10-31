import type { Localized } from "@/i18n/config"

// Kampanya verisi (doküman 05 §9.3). Fiyatlar ÖRNEKTİR. "SPECIAL OFFER"
// etiketi i18n'den (t.campaigns.badge) gelir, burada tekrar edilmez.

export interface Campaign {
  id: string
  title: string
  description: Localized
  oldPrice: string
  newPrice: string
}

export const campaigns: Campaign[] = [
  {
    id: "glow-facial",
    title: "Glow Facial",
    description: {
      tr: "Cildine özel nemlendirici bir ritüel.",
      en: "A hydrating ritual tailored to your skin.",
    },
    oldPrice: "₺1.500",
    newPrice: "₺1.200",
  },
  {
    id: "laser",
    title: "Laser Hair Removal",
    description: {
      tr: "Nazik teknolojiyle pürüzsüz, kalıcı sonuçlar.",
      en: "Smooth, lasting results with gentle technology.",
    },
    oldPrice: "₺2.000",
    newPrice: "₺1.500",
  },
  {
    id: "hydrafacial",
    title: "Hydrafacial",
    description: {
      tr: "Tek seansta derin temizlik, arındırma ve nem.",
      en: "Deep cleanse, exfoliate and hydrate in one session.",
    },
    oldPrice: "₺2.200",
    newPrice: "₺1.750",
  },
]
