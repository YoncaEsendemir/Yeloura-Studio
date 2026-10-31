import { BRAND, NAV_LINKS, SOCIALS } from "@/data/site"

// Alt bilgi (doküman 05 §9.9): koyu zemin, hızlı bağlantılar, sosyal, telif.
export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 text-left md:grid-cols-3">
        <div>
          <p className="font-serif text-xl text-cream-white">
            {BRAND.nameTop} <span className="text-xs tracking-widest">{BRAND.nameBottom}</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-cream/70">
            Beauty & self-care rituals crafted around you.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-cream-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-cream/70 transition-colors hover:text-rose">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-cream-white">Follow</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 transition-colors hover:text-rose"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {BRAND.name}. Demo project — not a real business.
      </div>
    </footer>
  )
}
