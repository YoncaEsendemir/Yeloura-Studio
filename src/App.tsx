import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Campaigns from "@/components/sections/Campaigns"
import Treatments from "@/components/sections/Treatments"
import OurStory from "@/components/sections/OurStory"
import Blog from "@/components/sections/Blog"
import Testimonials from "@/components/sections/Testimonials"
import Contact from "@/components/sections/Contact"
import CookieConsent from "@/components/ui/CookieConsent"
import { useI18n } from "@/i18n"

// Tek sayfa iskeleti (doküman 05 + 09): header → section'lar → footer.
export default function App() {
  const { t } = useI18n()
  return (
    <>
      {/* Klavye kullanıcıları için atlama linki: sadece odaklanınca görünür (a11y). */}
      <a
        href="#main"
        className="sr-only rounded-full bg-rose px-4 py-2 text-cream-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
      >
        {t.aria.skipToContent}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Campaigns />
        <Treatments />
        <OurStory />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      {/* Çerez onayı: karar verilene kadar altta görünür (doküman 09 #10). */}
      <CookieConsent />
    </>
  )
}
