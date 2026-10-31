// "Hikâyemiz" bölümü — kitap sayfası çevirme düzeni (doküman 05 §9.5).

export interface StoryPage {
  id: string
  eyebrow: string
  title: string
  body: string
}

export const storyPages: StoryPage[] = [
  {
    id: "s1",
    eyebrow: "OUR PHILOSOPHY",
    title: "Beauty begins with taking time for yourself.",
    body: "Yeloura Studio was born from a simple belief: self-care is not a luxury, it is a ritual. Every treatment is designed to slow you down.",
  },
  {
    id: "s2",
    eyebrow: "OUR APPROACH",
    title: "Gentle care, crafted around you.",
    body: "We combine proven techniques with warm, personal attention. No rushing, no one-size-fits-all — just care that fits your skin and your story.",
  },
  {
    id: "s3",
    eyebrow: "OUR PROMISE",
    title: "Quality you can feel.",
    body: "From the products we choose to the calm of our studio, every detail is considered so you can simply relax and glow.",
  },
]
