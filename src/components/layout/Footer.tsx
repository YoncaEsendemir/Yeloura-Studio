import { BRAND, NAV_IDS, SOCIALS } from "@/data/site"
import { useI18n } from "@/i18n"

// Alt bilgi (doküman 05 §9.9): koyu zemin, hızlı bağlantılar, sosyal, telif.
export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 text-left md:grid-cols-3">
        <div>
          <p className="font-serif text-xl text-cream-white">
            {BRAND.nameTop} <span className="text-xs tracking-widest">{BRAND.nameBottom}</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-cream/70">{t.footer.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-cream-white">{t.footer.quickLinks}</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="text-cream/70 transition-colors hover:text-rose">
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-cream-white">{t.footer.follow}</h3>
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

      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/70">
        © {new Date().getFullYear()} {BRAND.name}. {t.footer.rights}
      </div>
    </footer>
  )
}
