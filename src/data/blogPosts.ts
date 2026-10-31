import type { Localized } from "@/i18n/config"

// Blog yazıları (doküman 05 §9.6). İlk sürümde örnek veri, iki dilli.

export interface BlogPost {
  id: string
  category: Localized
  title: Localized
  excerpt: Localized
  date: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "routine",
    category: { tr: "CİLT BAKIMI", en: "SKINCARE" },
    title: {
      tr: "Cilt Bakım Rutini Nasıl Oluşturulur?",
      en: "How to Build a Skincare Routine",
    },
    excerpt: {
      tr: "Cildinizde kalıcı fark yaratan basit adımlar.",
      en: "The simple steps that make a lasting difference for your skin.",
    },
    date: "2026-01-12",
  },
  {
    id: "before-after",
    category: { tr: "İPUÇLARI", en: "TIPS" },
    title: {
      tr: "Bakım Öncesi ve Sonrası: Bilmeniz Gerekenler",
      en: "Before & After a Facial: What to Know",
    },
    excerpt: {
      tr: "Bakım sonuçlarınızı uzun süre korumanıza yardımcı küçük alışkanlıklar.",
      en: "Small habits that help your treatment results last longer.",
    },
    date: "2026-02-03",
  },
  {
    id: "seasonal",
    category: { tr: "CİLT BAKIMI", en: "SKINCARE" },
    title: {
      tr: "Mevsimsel Cilt Bakımı: Havaya Göre Uyum",
      en: "Seasonal Skincare: Adapting to the Weather",
    },
    excerpt: {
      tr: "Rutininiz neden mevsimlere göre değişmeli?",
      en: "Why your routine should change with the seasons.",
    },
    date: "2026-03-18",
  },
]
