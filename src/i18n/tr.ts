import type { Dict } from "./en"

// Türkçe arayüz metinleri. Tip `Dict` olduğu için en.ts ile birebir aynı şekle
// sahip olmak zorunda — eksik anahtar derleme hatası verir (güvenli çeviri).
export const tr: Dict = {
  nav: {
    hero: "Ana Sayfa",
    campaigns: "Kampanyalar",
    treatments: "Seanslar",
    story: "Hikâyemiz",
    blog: "Blog",
    contact: "İletişim",
  },
  actions: {
    bookNow: "Randevu Al",
    explore: "Seansları Keşfet",
    ourStory: "Hikâyemiz",
    discover: "Detayları Gör",
    viewDetails: "Detayları gör",
    book: "Randevu Al",
    readArticle: "Yazıyı Oku",
    callToBook: "Arayarak Randevu Al",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    close: "Kapat",
  },
  hero: {
    eyebrow: "GÜZELLİĞİN, RİTÜELİN",
    title: "Öz bakımın güzelliğini keşfet.",
    desc: "Kendine zaman ayır. Sana özel tasarlanan bakım ritüellerini keşfet.",
    bookByPhone: "Telefonla randevu:",
  },
  campaigns: {
    eyebrow: "ÖZEL FIRSATLAR",
    title: "Öne Çıkan Kampanyalar",
    subtitle: "Mevsimlik ritüeller özel fiyatlarla.",
    badge: "ÖZEL FIRSAT",
    priceNote: "* Fiyatlar demo amaçlı örnektir.",
  },
  treatments: {
    eyebrow: "MENÜMÜZ",
    title: "Seanslar",
    subtitle: "Tüm bakım ritüellerimizi keşfedin. Detay için karta dokunun.",
    steps: "Aşamalar",
    duration: "Süre",
    price: "Fiyat",
    suitableFor: "Kimler için uygun:",
  },
  story: {
    title: "Hikâyemiz",
    prevPage: "Önceki sayfa",
    nextPage: "Sonraki sayfa",
  },
  blog: {
    eyebrow: "GÜZELLİK GÜNLÜĞÜ",
    title: "Blog'dan",
    subtitle: "Öz bakım rutininiz için ipuçları ve ritüeller.",
  },
  testimonials: {
    eyebrow: "GÜZEL SÖZLER",
    title: "Müşterilerimiz Ne Diyor?",
    note: "* Yorumlar demo amaçlı örnektir.",
    prev: "Önceki yorum",
    next: "Sonraki yorum",
  },
  contact: {
    eyebrow: "BİZE ULAŞIN",
    title: "Randevunu Oluştur",
    desc: "Bizi arayın ya da stüdyoya uğrayın — sizi görmekten mutluluk duyarız.",
    salon: "Salon",
    owner: "Sahibi",
    phone: "Telefon",
    address: "Adres",
    hours: "Çalışma Saatleri",
    note: "* Demo iletişim bilgileri — gerçek bir işletme değildir.",
  },
  footer: {
    tagline: "Sana özel tasarlanan güzellik ve öz bakım ritüelleri.",
    quickLinks: "Hızlı Bağlantılar",
    follow: "Takip Et",
    rights: "Demo proje — gerçek bir işletme değildir.",
  },
  aria: {
    brand: "Yeloura Studio — ana sayfa",
  },
}
