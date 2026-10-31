import { useEffect, useState, type ReactNode } from "react"
import { DEFAULT_LANG, LANG_STORAGE_KEY, type Lang } from "./config"
import { DICTS, I18nContext } from "./index"

// Kayıtlı dil tercihini oku (yoksa / erişilemezse varsayılan).
function readStoredLang(): Lang {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY)
    if (saved === "tr" || saved === "en") return saved
  } catch {
    /* localStorage erişilemezse varsayılana düş */
  }
  return DEFAULT_LANG
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readStoredLang)

  // Dil değişince <html lang> güncellenir (SEO) ve tercih saklanır.
  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang)
    } catch {
      /* yoksay */
    }
  }, [lang])

  return (
    <I18nContext.Provider value={{ lang, setLang, t: DICTS[lang] }}>
      {children}
    </I18nContext.Provider>
  )
}
