// Seans/hizmet verisi (doküman 05 §9.4). Kart tıklanınca modalda gösterilir.

export interface Treatment {
  id: string
  name: string
  short: string
  duration: string
  price: string
  description: string
  steps: string[]
  suitableFor: string
}

export const treatments: Treatment[] = [
  {
    id: "glow-facial",
    name: "Glow Facial",
    short: "Deep hydration and radiance for tired skin.",
    duration: "60 min",
    price: "₺1.200",
    description:
      "A signature facial that cleanses, exfoliates and deeply hydrates to reveal a natural glow.",
    steps: ["Cleansing", "Gentle exfoliation", "Hydrating mask", "Massage & moisturizer"],
    suitableFor: "All skin types, especially dull or dehydrated skin.",
  },
  {
    id: "hydrafacial",
    name: "Hydrafacial",
    short: "Cleanse, extract and hydrate in one session.",
    duration: "45 min",
    price: "₺1.750",
    description:
      "A multi-step treatment that purifies pores and infuses the skin with nourishing serums.",
    steps: ["Deep cleanse", "Peel", "Extraction", "Hydration boost"],
    suitableFor: "Congested or uneven skin tone.",
  },
  {
    id: "laser",
    name: "Laser Hair Removal",
    short: "Lasting smoothness with gentle technology.",
    duration: "30–60 min",
    price: "₺1.500",
    description:
      "Precise laser sessions that reduce hair growth comfortably and effectively.",
    steps: ["Skin assessment", "Cooling prep", "Laser application", "Soothing care"],
    suitableFor: "Most skin tones; consultation recommended.",
  },
  {
    id: "anti-aging",
    name: "Anti-Aging Ritual",
    short: "Firming care that softens fine lines.",
    duration: "75 min",
    price: "₺2.000",
    description:
      "A rejuvenating treatment combining massage and active serums to restore firmness.",
    steps: ["Cleanse", "Enzyme peel", "Lifting massage", "Collagen mask"],
    suitableFor: "Mature skin or early signs of aging.",
  },
  {
    id: "skin-care",
    name: "Classic Skincare",
    short: "A calming cleanse-and-care routine.",
    duration: "50 min",
    price: "₺900",
    description:
      "A relaxing facial focused on balance and comfort for everyday skin health.",
    steps: ["Cleanse", "Tone", "Mask", "Moisturize"],
    suitableFor: "Sensitive or normal skin.",
  },
  {
    id: "massage",
    name: "Relax Massage",
    short: "Release tension and unwind fully.",
    duration: "60 min",
    price: "₺1.100",
    description:
      "A soothing full-body massage designed to relieve stress and restore calm.",
    steps: ["Warm-up", "Back & shoulders", "Legs & arms", "Relaxation"],
    suitableFor: "Anyone needing rest and recovery.",
  },
]
