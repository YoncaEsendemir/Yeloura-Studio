import { useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import type { Treatment } from "@/data/treatments"
import { useI18n } from "@/i18n"
import Button from "@/components/ui/Button"

interface TreatmentModalProps {
  treatment: Treatment | null
  onClose: () => void
}

// Seans detay modalı (doküman 05 §9.4 + 06 §C):
// - Escape ile kapanır, açılınca kapatma butonuna odaklanır, arka plan scroll kilitlenir.
export default function TreatmentModal({ treatment, onClose }: TreatmentModalProps) {
  const { lang, t } = useI18n()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!treatment) return
    closeRef.current?.focus()
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [treatment, onClose])

  return (
    <AnimatePresence>
      {treatment && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-ink/60" onClick={onClose} aria-hidden="true" />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="treatment-modal-title"
            className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-cream-white p-6 text-left shadow-xl"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label={t.actions.close}
              className="absolute right-4 top-4 text-2xl leading-none text-muted hover:text-rose"
            >
              ×
            </button>
            <img
              src={treatment.image}
              alt={treatment.name[lang]}
              className="mb-4 h-44 w-full rounded-xl object-cover"
            />
            <h3 id="treatment-modal-title" className="font-serif text-2xl text-ink">
              {treatment.name[lang]}
            </h3>
            <p className="mt-2 text-muted">{treatment.description[lang]}</p>

            <h4 className="mt-5 font-medium text-ink">{t.treatments.steps}</h4>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-muted">
              {treatment.steps[lang].map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>

            <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted">{t.treatments.duration}</span>
                <p className="text-ink">{treatment.duration[lang]}</p>
              </div>
              <div>
                <span className="text-muted">{t.treatments.price}</span>
                <p className="text-ink">{treatment.price}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted">
              <span className="font-medium text-ink">{t.treatments.suitableFor} </span>
              {treatment.suitableFor[lang]}
            </p>

            <Button href="#contact" onClick={onClose} className="mt-6 w-full">
              {t.actions.book}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
