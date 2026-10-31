import { useState } from "react"
import { treatments, type Treatment } from "@/data/treatments"
import { useI18n } from "@/i18n"
import TreatmentCard from "@/components/ui/TreatmentCard"
import TreatmentModal from "@/components/ui/TreatmentModal"
import SectionHeading from "@/components/ui/SectionHeading"

// Seanslar (doküman 05 §9.4): seçili seansı state'te tutar, modalda gösterir.
export default function Treatments() {
  const { t } = useI18n()
  const [active, setActive] = useState<Treatment | null>(null)

  return (
    <section id="treatments" className="bg-cream-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t.treatments.eyebrow}
          title={t.treatments.title}
          subtitle={t.treatments.subtitle}
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((item, i) => (
            <TreatmentCard key={item.id} item={item} index={i} onOpen={() => setActive(item)} />
          ))}
        </div>
      </div>
      <TreatmentModal treatment={active} onClose={() => setActive(null)} />
    </section>
  )
}
