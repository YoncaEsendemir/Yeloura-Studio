// Blog yazıları (doküman 05 §9.6). İlk sürümde örnek veri.

export interface BlogPost {
  id: string
  category: string
  title: string
  excerpt: string
  date: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "routine",
    category: "SKINCARE",
    title: "How to Build a Skincare Routine",
    excerpt: "The simple steps that make a lasting difference for your skin.",
    date: "2026-01-12",
  },
  {
    id: "before-after",
    category: "TIPS",
    title: "Before & After a Facial: What to Know",
    excerpt: "Small habits that help your treatment results last longer.",
    date: "2026-02-03",
  },
  {
    id: "seasonal",
    category: "SKINCARE",
    title: "Seasonal Skincare: Adapting to the Weather",
    excerpt: "Why your routine should change with the seasons.",
    date: "2026-03-18",
  },
]
