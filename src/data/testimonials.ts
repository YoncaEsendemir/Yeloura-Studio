// Müşteri yorumları (doküman 05 §9.7). ÖRNEK içerik (demo).

export interface Testimonial {
  id: string
  name: string
  rating: number
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aylin K.",
    rating: 5,
    quote: "The most relaxing facial I've ever had. My skin has never looked better.",
  },
  {
    id: "t2",
    name: "Merve T.",
    rating: 5,
    quote: "A calm, elegant space and truly caring staff. I always leave glowing.",
  },
  {
    id: "t3",
    name: "Selin D.",
    rating: 4,
    quote: "Loved the hydrafacial — professional service from start to finish.",
  },
  {
    id: "t4",
    name: "Zeynep A.",
    rating: 5,
    quote: "Booking was easy and the results speak for themselves. Highly recommend.",
  },
]
