// Kampanya verisi (doküman 05 §9.3). Fiyatlar ÖRNEKTİR (demo).

export interface Campaign {
  id: string
  tag: string
  title: string
  description: string
  oldPrice: string
  newPrice: string
}

export const campaigns: Campaign[] = [
  {
    id: "glow-facial",
    tag: "SPECIAL OFFER",
    title: "Glow Facial",
    description: "A hydrating ritual tailored to your skin.",
    oldPrice: "₺1.500",
    newPrice: "₺1.200",
  },
  {
    id: "laser",
    tag: "SPECIAL OFFER",
    title: "Laser Hair Removal",
    description: "Smooth, lasting results with gentle technology.",
    oldPrice: "₺2.000",
    newPrice: "₺1.500",
  },
  {
    id: "hydrafacial",
    tag: "SPECIAL OFFER",
    title: "Hydrafacial",
    description: "Deep cleanse, exfoliate and hydrate in one session.",
    oldPrice: "₺2.200",
    newPrice: "₺1.750",
  },
]
