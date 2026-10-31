import { useEffect, useState } from "react"
import { BRAND, NAV_LINKS } from "@/data/site"
import Button from "@/components/ui/Button"
import MobileMenu from "@/components/layout/MobileMenu"

// Üst menü (doküman 05 §9.1): scroll'da zemin belirginleşir, gizlenmez.
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-cream-white/90 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="leading-none" aria-label={BRAND.name}>
          <span className="block font-serif text-xl font-semibold tracking-wide text-ink">
            {BRAND.nameTop}
          </span>
          <span className="block text-[10px] tracking-[0.3em] text-muted">
            {BRAND.nameBottom}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-ink transition-colors hover:text-rose"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {/* TR/EN: i18n adımında (yol haritası #6) işlevsel olacak */}
          <div className="text-sm text-ink">
            <button className="font-medium text-rose">TR</button>
            <span className="mx-1 text-muted">/</span>
            <button className="transition-colors hover:text-rose">EN</button>
          </div>
          <Button href="#contact">Book Now</Button>
        </div>

        <button
          className="text-ink md:hidden"
          aria-label="Open menu"
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
