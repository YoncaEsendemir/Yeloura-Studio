import type { Localized } from "@/i18n/config"
import hair from "@/assets/photos/hair.jpg"
import manicure from "@/assets/photos/manicure.jpg"
import makeup from "@/assets/photos/makeup.jpg"
import facial from "@/assets/photos/facial.jpg"
import waxing from "@/assets/photos/waxing.jpg"
import laser from "@/assets/photos/laser.jpg"

// Seans/hizmet verisi (doküman 05 §9.4). Çeviri gereken alanlar Localized.
// Her hizmetin kendi telifsiz görseli (`image`) vardır (Pexels, src/assets/photos).

export interface Treatment {
  id: string
  name: Localized
  image: string
  short: Localized
  duration: Localized
  price: string
  description: Localized
  steps: Localized<string[]>
  suitableFor: Localized
}

export const treatments: Treatment[] = [
  {
    id: "hair",
    name: { tr: "Saç Bakımı", en: "Hair Care" },
    image: hair,
    short: {
      tr: "Saça canlılık ve parlaklık kazandıran bakım.",
      en: "Care that restores vitality and shine to your hair.",
    },
    duration: { tr: "60 dk", en: "60 min" },
    price: "₺800",
    description: {
      tr: "Saç tipinize göre seçilen ürünlerle derinlemesine besleyen, yumuşatan ve parlaklık veren profesyonel bakım.",
      en: "A professional treatment that deeply nourishes, softens and adds shine, with products chosen for your hair type.",
    },
    steps: {
      tr: ["Saç analizi", "Derin temizlik", "Besleyici maske", "Şekillendirme"],
      en: ["Hair analysis", "Deep cleanse", "Nourishing mask", "Styling"],
    },
    suitableFor: {
      tr: "Yıpranmış, kuru veya cansız saçlar.",
      en: "Damaged, dry or dull hair.",
    },
  },
  {
    id: "manicure",
    name: { tr: "El Bakımı & Manikür", en: "Manicure" },
    image: manicure,
    short: {
      tr: "Bakımlı eller ve kusursuz tırnaklar.",
      en: "Groomed hands and flawless nails.",
    },
    duration: { tr: "45 dk", en: "45 min" },
    price: "₺500",
    description: {
      tr: "Nazik tırnak şekillendirme, kütikül bakımı ve nemlendirici el masajını birleştiren rahatlatıcı bakım.",
      en: "A relaxing treatment combining gentle nail shaping, cuticle care and a hydrating hand massage.",
    },
    steps: {
      tr: ["Şekillendirme", "Kütikül bakımı", "El masajı", "Oje / cila"],
      en: ["Shaping", "Cuticle care", "Hand massage", "Polish"],
    },
    suitableFor: {
      tr: "Düzenli bakım isteyen herkes.",
      en: "Anyone who wants well-kept hands.",
    },
  },
  {
    id: "makeup",
    name: { tr: "Makyaj", en: "Makeup" },
    image: makeup,
    short: {
      tr: "Özel günleriniz için profesyonel makyaj.",
      en: "Professional makeup for your special moments.",
    },
    duration: { tr: "60 dk", en: "60 min" },
    price: "₺1.000",
    description: {
      tr: "Cilt tonunuza ve davetin tarzına uygun, gün boyu kalıcı profesyonel makyaj uygulaması.",
      en: "A long-lasting professional makeup application tailored to your skin tone and the occasion.",
    },
    steps: {
      tr: ["Cilt hazırlığı", "Fondöten & kapatıcı", "Göz & kaş", "Son dokunuşlar"],
      en: ["Skin prep", "Foundation & concealer", "Eyes & brows", "Finishing touches"],
    },
    suitableFor: {
      tr: "Düğün, nişan, davet ve çekimler.",
      en: "Weddings, engagements, events and shoots.",
    },
  },
  {
    id: "facial",
    name: { tr: "Yüz Bakımı", en: "Facial" },
    image: facial,
    short: {
      tr: "Cildi temizleyen ve ışıldatan derin bakım.",
      en: "Deep care that cleanses and brightens the skin.",
    },
    duration: { tr: "60 dk", en: "60 min" },
    price: "₺1.200",
    description: {
      tr: "Cildi temizleyen, arındıran ve derinlemesine nemlendirerek doğal bir ışıltı kazandıran imza bakımı.",
      en: "A signature facial that cleanses, purifies and deeply hydrates to reveal a natural glow.",
    },
    steps: {
      tr: ["Temizleme", "Nazik peeling", "Nemlendirici maske", "Masaj ve nemlendirme"],
      en: ["Cleansing", "Gentle exfoliation", "Hydrating mask", "Massage & moisturizer"],
    },
    suitableFor: {
      tr: "Tüm cilt tipleri, özellikle donuk ciltler.",
      en: "All skin types, especially dull skin.",
    },
  },
  {
    id: "waxing",
    name: { tr: "Ağda", en: "Waxing" },
    image: waxing,
    short: {
      tr: "Pürüzsüz bir cilt için nazik ağda.",
      en: "Gentle waxing for smooth skin.",
    },
    duration: { tr: "30 dk", en: "30 min" },
    price: "₺400",
    description: {
      tr: "Hassas ciltlere uygun ürünlerle konforlu ve hijyenik tüy alma uygulaması.",
      en: "A comfortable, hygienic hair-removal treatment with products suited to sensitive skin.",
    },
    steps: {
      tr: ["Cilt hazırlığı", "Ağda uygulaması", "Tüy alma", "Yatıştırıcı bakım"],
      en: ["Skin prep", "Wax application", "Removal", "Soothing care"],
    },
    suitableFor: {
      tr: "Tüm bölgeler; hassas ciltler dahil.",
      en: "All areas; including sensitive skin.",
    },
  },
  {
    id: "laser",
    name: { tr: "Lazer Epilasyon", en: "Laser Hair Removal" },
    image: laser,
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
]
