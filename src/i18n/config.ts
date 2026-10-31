// i18n temel yapılandırması (doküman 04-icerik-i18n.md).
// Lang tipi + içerik verisini iki dilli tutmak için Localized yardımcı tipi.

export type Lang = "tr" | "en"

export const LANGS: Lang[] = ["tr", "en"]
export const DEFAULT_LANG: Lang = "tr"
export const LANG_STORAGE_KEY = "yeloura-lang"

// Bir alanın her dildeki karşılığı: Localized = { tr: ..., en: ... }
export type Localized<T = string> = Record<Lang, T>
