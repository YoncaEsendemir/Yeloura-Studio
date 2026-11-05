import type { Localized } from "@/i18n/config"
import story1 from "@/assets/photos/story-1.webp"
import story2 from "@/assets/photos/story-2.webp"
import story3 from "@/assets/photos/story-3.webp"

// "Hikâyemiz" — kitap sayfası çevirme düzeni (doküman 05 §9.5), iki dilli.
// Her sayfanın telifsiz bir görseli (`image`) vardır (Pexels).

export interface StoryPage {
  id: string
  image: string
  eyebrow: Localized
  title: Localized
  body: Localized
}

export const storyPages: StoryPage[] = [
  {
    id: "s1",
    image: story1,
    eyebrow: { tr: "FELSEFEMİZ", en: "OUR PHILOSOPHY" },
    title: {
      tr: "Güzellik, kendine zaman ayırmakla başlar.",
      en: "Beauty begins with taking time for yourself.",
    },
    body: {
      tr: "Yeloura Studio basit bir inançtan doğdu: öz bakım bir lüks değil, bir ritüeldir. Her bakım sizi yavaşlatmak için tasarlandı.",
      en: "Yeloura Studio was born from a simple belief: self-care is not a luxury, it is a ritual. Every treatment is designed to slow you down.",
    },
  },
  {
    id: "s2",
    image: story2,
    eyebrow: { tr: "YAKLAŞIMIMIZ", en: "OUR APPROACH" },
    title: {
      tr: "Size özel, nazik bir bakım.",
      en: "Gentle care, crafted around you.",
    },
    body: {
      tr: "Kanıtlanmış teknikleri sıcak ve kişisel bir ilgiyle birleştiriyoruz. Acele yok, herkese aynı yaklaşım yok — yalnızca cildinize ve hikâyenize uygun bir bakım.",
      en: "We combine proven techniques with warm, personal attention. No rushing, no one-size-fits-all — just care that fits your skin and your story.",
    },
  },
  {
    id: "s3",
    image: story3,
    eyebrow: { tr: "SÖZÜMÜZ", en: "OUR PROMISE" },
    title: {
      tr: "Hissedebileceğiniz bir kalite.",
      en: "Quality you can feel.",
    },
    body: {
      tr: "Seçtiğimiz ürünlerden stüdyomuzun huzuruna kadar her ayrıntı, siz rahatça dinlenip ışıldayın diye düşünüldü.",
      en: "From the products we choose to the calm of our studio, every detail is considered so you can simply relax and glow.",
    },
  },
]
