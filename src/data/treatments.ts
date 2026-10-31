import type { Localized } from "@/i18n/config"

// Seans/hizmet verisi (doküman 05 §9.4). Çeviri gereken alanlar Localized.
// Hizmet adları (name) her iki dilde aynı bırakıldı (yaygın kullanım).

export interface Treatment {
  id: string
  name: string
  short: Localized
  duration: Localized
  price: string
  description: Localized
  steps: Localized<string[]>
  suitableFor: Localized
}

export const treatments: Treatment[] = [
  {
    id: "glow-facial",
    name: "Glow Facial",
    short: {
      tr: "Yorgun cilde derin nem ve ışıltı.",
      en: "Deep hydration and radiance for tired skin.",
    },
    duration: { tr: "60 dk", en: "60 min" },
    price: "₺1.200",
    description: {
      tr: "Cildi temizleyen, arındıran ve derinlemesine nemlendirerek doğal bir ışıltı kazandıran imza bakımı.",
      en: "A signature facial that cleanses, exfoliates and deeply hydrates to reveal a natural glow.",
    },
    steps: {
      tr: ["Temizleme", "Nazik peeling", "Nemlendirici maske", "Masaj ve nemlendirme"],
      en: ["Cleansing", "Gentle exfoliation", "Hydrating mask", "Massage & moisturizer"],
    },
    suitableFor: {
      tr: "Tüm cilt tipleri, özellikle donuk veya nemsiz ciltler.",
      en: "All skin types, especially dull or dehydrated skin.",
    },
  },
  {
    id: "hydrafacial",
    name: "Hydrafacial",
    short: {
      tr: "Tek seansta temizlik, arındırma ve nem.",
      en: "Cleanse, extract and hydrate in one session.",
    },
    duration: { tr: "45 dk", en: "45 min" },
    price: "₺1.750",
    description: {
      tr: "Gözenekleri arındıran ve cildi besleyici serumlarla doyuran çok adımlı bir bakım.",
      en: "A multi-step treatment that purifies pores and infuses the skin with nourishing serums.",
    },
    steps: {
      tr: ["Derin temizlik", "Peeling", "Arındırma", "Nem takviyesi"],
      en: ["Deep cleanse", "Peel", "Extraction", "Hydration boost"],
    },
    suitableFor: {
      tr: "Gözenekli veya düzensiz ton görünümüne sahip ciltler.",
      en: "Congested or uneven skin tone.",
    },
  },
  {
    id: "laser",
    name: "Laser Hair Removal",
    short: {
      tr: "Nazik teknolojiyle kalıcı pürüzsüzlük.",
      en: "Lasting smoothness with gentle technology.",
    },
    duration: { tr: "30–60 dk", en: "30–60 min" },
    price: "₺1.500",
    description: {
      tr: "Tüy çıkışını konforlu ve etkili biçimde azaltan hassas lazer seansları.",
      en: "Precise laser sessions that reduce hair growth comfortably and effectively.",
    },
    steps: {
      tr: ["Cilt değerlendirmesi", "Soğutma hazırlığı", "Lazer uygulaması", "Yatıştırıcı bakım"],
      en: ["Skin assessment", "Cooling prep", "Laser application", "Soothing care"],
    },
    suitableFor: {
      tr: "Çoğu cilt tonu; ön görüşme önerilir.",
      en: "Most skin tones; consultation recommended.",
    },
  },
  {
    id: "anti-aging",
    name: "Anti-Aging Ritual",
    short: {
      tr: "İnce çizgileri yumuşatan sıkılaştırıcı bakım.",
      en: "Firming care that softens fine lines.",
    },
    duration: { tr: "75 dk", en: "75 min" },
    price: "₺2.000",
    description: {
      tr: "Sıkılığı yeniden kazandırmak için masaj ve aktif serumları birleştiren gençleştirici bakım.",
      en: "A rejuvenating treatment combining massage and active serums to restore firmness.",
    },
    steps: {
      tr: ["Temizleme", "Enzim peeling", "Sıkılaştırıcı masaj", "Kolajen maske"],
      en: ["Cleanse", "Enzyme peel", "Lifting massage", "Collagen mask"],
    },
    suitableFor: {
      tr: "Olgun cilt veya erken yaşlanma belirtileri.",
      en: "Mature skin or early signs of aging.",
    },
  },
  {
    id: "skin-care",
    name: "Classic Skincare",
    short: {
      tr: "Sakinleştirici temizlik ve bakım rutini.",
      en: "A calming cleanse-and-care routine.",
    },
    duration: { tr: "50 dk", en: "50 min" },
    price: "₺900",
    description: {
      tr: "Günlük cilt sağlığı için denge ve konfora odaklanan rahatlatıcı bir bakım.",
      en: "A relaxing facial focused on balance and comfort for everyday skin health.",
    },
    steps: {
      tr: ["Temizleme", "Tonik", "Maske", "Nemlendirme"],
      en: ["Cleanse", "Tone", "Mask", "Moisturize"],
    },
    suitableFor: {
      tr: "Hassas veya normal ciltler.",
      en: "Sensitive or normal skin.",
    },
  },
  {
    id: "massage",
    name: "Relax Massage",
    short: {
      tr: "Gerginliği atın, tamamen rahatlayın.",
      en: "Release tension and unwind fully.",
    },
    duration: { tr: "60 dk", en: "60 min" },
    price: "₺1.100",
    description: {
      tr: "Stresi azaltmak ve huzuru geri getirmek için tasarlanmış yatıştırıcı tüm vücut masajı.",
      en: "A soothing full-body massage designed to relieve stress and restore calm.",
    },
    steps: {
      tr: ["Isınma", "Sırt ve omuzlar", "Bacaklar ve kollar", "Rahatlama"],
      en: ["Warm-up", "Back & shoulders", "Legs & arms", "Relaxation"],
    },
    suitableFor: {
      tr: "Dinlenmeye ve toparlanmaya ihtiyaç duyan herkes.",
      en: "Anyone needing rest and recovery.",
    },
  },
]
