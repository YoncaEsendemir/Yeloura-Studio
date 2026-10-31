import type { Localized } from "@/i18n/config"

// Müşteri yorumları (doküman 05 §9.7). ÖRNEK içerik (demo), iki dilli.

export interface Testimonial {
  id: string
  name: string
  rating: number
  quote: Localized
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aylin K.",
    rating: 5,
    quote: {
      tr: "Hayatımdaki en rahatlatıcı bakımdı. Cildim hiç bu kadar iyi görünmemişti.",
      en: "The most relaxing facial I've ever had. My skin has never looked better.",
    },
  },
  {
    id: "t2",
    name: "Merve T.",
    rating: 5,
    quote: {
      tr: "Sakin, zarif bir mekân ve gerçekten ilgili bir ekip. Her seferinde ışıldayarak ayrılıyorum.",
      en: "A calm, elegant space and truly caring staff. I always leave glowing.",
    },
  },
  {
    id: "t3",
    name: "Selin D.",
    rating: 4,
    quote: {
      tr: "Hydrafacial'a bayıldım — baştan sona profesyonel bir hizmet.",
      en: "Loved the hydrafacial — professional service from start to finish.",
    },
  },
  {
    id: "t4",
    name: "Zeynep A.",
    rating: 5,
    quote: {
      tr: "Randevu almak çok kolaydı ve sonuçlar kendini gösteriyor. Kesinlikle tavsiye ederim.",
      en: "Booking was easy and the results speak for themselves. Highly recommend.",
    },
  },
]
