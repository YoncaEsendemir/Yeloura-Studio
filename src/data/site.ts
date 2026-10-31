import type { Localized } from "@/i18n/config"

// Marka + navigasyon + DEMO (kurgusal) iletişim verisi (doküman 09).

export const BRAND = {
  name: "Yeloura Studio",
  nameTop: "YELOURA",
  nameBottom: "STUDIO",
  tagline: "Beauty & Self-Care Rituals",
} as const

// Navigasyon id'leri; etiketleri i18n sözlüğünden (t.nav[id]) gelir.
export const NAV_IDS = ["hero", "campaigns", "treatments", "story", "blog", "contact"] as const
export type NavId = (typeof NAV_IDS)[number]

export const CONTACT = {
  owner: "Elif Yıldız",
  salon: "Yeloura Studio",
  phone: "+90 212 555 01 47",
  phoneHref: "tel:+902125550147",
  address: "Bağdat Cad. No:124, Kadıköy / İstanbul",
  hours: { tr: "Pzt–Cmt · 10:00–20:00", en: "Mon–Sat · 10:00–20:00" } as Localized,
  mapUrl: "https://www.google.com/maps?q=Kadikoy+Istanbul",
}

export interface Social {
  label: string
  href: string
}

export const SOCIALS: Social[] = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
]
