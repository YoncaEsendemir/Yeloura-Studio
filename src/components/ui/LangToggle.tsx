import { LANGS } from "@/i18n/config"
import { useI18n } from "@/i18n"

// TR / EN dil seçici (Header + MobileMenu'de ortak kullanılır → tek kaynak).
// `dark`: koyu zemin (hero videosu) üzerinde açık renk görünür.
export default function LangToggle({
  className = "",
  dark = false,
}: {
  className?: string
  dark?: boolean
}) {
  const { lang, setLang } = useI18n()

  return (
    <div className={`text-sm ${dark ? "text-cream-white" : "text-ink"} ${className}`}>
      {LANGS.map((l, i) => (
        <span key={l}>
          {i > 0 && <span className={`mx-1 ${dark ? "text-cream-white/50" : "text-muted"}`}>/</span>}
          <button
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={
              lang === l ? "font-medium text-rose" : "transition-colors hover:text-rose"
            }
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  )
}
