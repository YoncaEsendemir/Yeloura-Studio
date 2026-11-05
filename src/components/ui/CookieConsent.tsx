import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import Button from "./Button"
import { useI18n } from "@/i18n"
import { CONSENT_STORAGE_KEY, type Consent } from "@/i18n/config"

// Kayıtlı çerez kararını oku. Yoksa / erişilemezse null → banner gösterilir.
function readConsent(): Consent | null {
  try {
    const saved = localStorage.getItem(CONSENT_STORAGE_KEY)
    if (saved === "granted" || saved === "denied") return saved
  } catch {
    /* localStorage erişilemezse karar yok sayılır */
  }
  return null
}

// Onay verilince analitiği YÜKLE. Onay olmadan bu fonksiyon hiç çağrılmaz,
// yani izleme script'i de hiç eklenmez (KVKK/GDPR gereği).
// Plausible = gizlilik dostu, çerezsiz, hafif ziyaretçi analitiği.
function loadAnalytics() {
  if (document.getElementById("plausible-script")) return // iki kez yüklemeyi önle
  const s = document.createElement("script")
  s.id = "plausible-script"
  s.defer = true
  s.dataset.domain = "beauty.yoncaesendemir.com.tr"
  s.src = "https://plausible.io/js/script.js"
  document.head.appendChild(s)
}

// Çerez onayı banner'ı (doküman 09 #10):
// Karar YOKSA alttan belirir → "Kabul"/"Reddet" kararı localStorage'a yazılır →
// bir daha sorulmaz. "prefers-reduced-motion" açıksa hareketsiz görünür (a11y).
export default function CookieConsent() {
  const { t } = useI18n()
  const reduced = useReducedMotion()
  // Kararı ilk render'da senkron oku (i18n provider ile aynı desen) → yanıp sönme yok.
  const [consent, setConsent] = useState<Consent | null>(readConsent)

  // Sayfa açılırken zaten onay verilmişse analitiği yükle (state'e dokunmadan).
  useEffect(() => {
    if (readConsent() === "granted") loadAnalytics()
  }, [])

  // Kararı kalıcı sakla, state'i güncelle, onaysa analitiği yükle.
  function decide(value: Consent) {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, value)
    } catch {
      /* yoksay */
    }
    setConsent(value)
    if (value === "granted") loadAnalytics()
  }

  // Banner yalnızca henüz karar verilmemişken görünür.
  const show = consent === null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-label={t.cookie.ariaLabel}
          aria-live="polite"
          className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl bg-cream-white p-5 shadow-xl ring-1 ring-ink/10 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-ink">
              <p className="font-medium">{t.cookie.title}</p>
              <p className="mt-1 text-sm text-ink/70">{t.cookie.desc}</p>
            </div>
            <div className="flex shrink-0 gap-3">
              <Button variant="outline" onClick={() => decide("denied")}>
                {t.cookie.reject}
              </Button>
              <Button variant="primary" onClick={() => decide("granted")}>
                {t.cookie.accept}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
