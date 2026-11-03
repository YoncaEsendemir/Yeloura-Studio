import type { Treatment } from "@/data/treatments"
import { useI18n } from "@/i18n"
import Placeholder from "@/components/ui/Placeholder"

interface TreatmentCardProps {
  item: Treatment
  index: number
  onOpen: () => void
}

// Kart tıklama + klavye (Enter/Space) ile modal açar (doküman 06 §C erişilebilirlik).
export default function TreatmentCard({ item, index, onOpen }: TreatmentCardProps) {
  const { lang, t } = useI18n()

  return (
    <article
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onOpen()
        }
      }}
      className="cursor-pointer overflow-hidden rounded-2xl border border-transparent bg-white/60 transition duration-300 hover:-translate-y-1 hover:border-rose hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-rose"
    >
      <Placeholder seed={index + 1} src={item.image} alt={item.name[lang]} className="h-44 w-full" />
      <div className="p-5 text-left">
        <h3 className="font-serif text-lg text-ink">{item.name[lang]}</h3>
        <p className="mt-1 text-sm text-muted">{item.short[lang]}</p>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-muted">{item.duration[lang]}</span>
          <span className="font-semibold text-ink">{item.price}</span>
        </div>
        <span className="mt-4 inline-block text-sm font-medium text-rose">
          {t.actions.viewDetails} →
        </span>
      </div>
    </article>
  )
}
