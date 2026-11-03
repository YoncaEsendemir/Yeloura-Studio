import { useEffect, useState } from "react"
import { BRAND, NAV_IDS } from "@/data/site"
import { useI18n } from "@/i18n"
import Button from "@/components/ui/Button"
import LangToggle from "@/components/ui/LangToggle"
import MobileMenu from "@/components/layout/MobileMenu"

// Üst menü (doküman 05 §9.1): en üstte (video hero üzerinde) açık renk + şeffaf;
// scroll'da krem zemin belirir ve yazılar koyulaşır (okunurluk).
export default function Header() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // scroll öncesi hero videosunun üstündeyiz → açık renk yazı
  const onHero = !scrolled
  const textColor = onHero ? "text-cream-white" : "text-ink"

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-cream-white/90 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="leading-none" aria-label={t.aria.brand}>
          <span className={`block font-serif text-xl font-semibold tracking-wide ${textColor}`}>
            {BRAND.nameTop}
          </span>
          <span className={`block text-[10px] tracking-[0.3em] ${onHero ? "text-cream-white/70" : "text-muted"}`}>
            {BRAND.nameBottom}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm transition-colors hover:text-rose ${textColor}`}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LangToggle dark={onHero} />
          <Button href="#contact">{t.actions.bookNow}</Button>
        </div>

        <button
          className={`md:hidden ${textColor}`}
          aria-label={t.actions.openMenu}
          onClick={() => setMenuOpen(true)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
