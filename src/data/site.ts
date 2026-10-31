// Marka + navigasyon + DEMO (kurgusal) iletişim verisi.
// Gerçek işletme değildir — doküman 09'daki "Demo İletişim Verisi" ile birebir.

export const BRAND = {
  name: "Yeloura Studio",
  nameTop: "YELOURA",
  nameBottom: "STUDIO",
  tagline: "Beauty & Self-Care Rituals",
} as const

export interface NavLink {
  id: string
  label: string
}

export const NAV_LINKS: NavLink[] = [
  { id: "hero", label: "Home" },
  { id: "campaigns", label: "Campaigns" },
  { id: "treatments", label: "Treatments" },
  { id: "story", label: "Our Story" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
]

export const CONTACT = {
  owner: "Elif Yıldız",
  salon: "Yeloura Studio",
  phone: "+90 212 555 01 47",
  phoneHref: "tel:+902125550147",
  address: "Bağdat Cad. No:124, Kadıköy / İstanbul",
  hours: "Mon–Sat · 10:00–20:00",
  mapUrl: "https://www.google.com/maps?q=Kadikoy+Istanbul",
} as const

export interface Social {
  label: string
  href: string
}

export const SOCIALS: Social[] = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
]
