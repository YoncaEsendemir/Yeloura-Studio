import { LANGS } from "@/i18n/config"
import { useI18n } from "@/i18n"

// TR / EN dil seçici (Header + MobileMenu'de ortak kullanılır → tek kaynak).
export default function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n()

  return (
    <div className={`text-sm text-ink ${className}`}>
      {LANGS.map((l, i) => (
        <span key={l}>
          {i > 0 && <span className="mx-1 text-muted">/</span>}
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
