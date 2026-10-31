import { createContext, useContext } from "react"
import type { Lang } from "./config"
import { en, type Dict } from "./en"
import { tr } from "./tr"

// Dil → sözlük eşlemesi. Context + hook burada (component içermez).
export const DICTS: Record<Lang, Dict> = { en, tr }

export interface I18nValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dict
}

export const I18nContext = createContext<I18nValue | null>(null)

// Her bileşen metni ve aktif dili buradan alır.
export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
