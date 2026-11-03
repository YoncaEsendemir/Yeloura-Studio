import { useState } from "react"
import { treatments, type Treatment } from "@/data/treatments"
import { useI18n } from "@/i18n"
import TreatmentCard from "@/components/ui/TreatmentCard"
import TreatmentModal from "@/components/ui/TreatmentModal"
import SectionHeading from "@/components/ui/SectionHeading"
import Reveal from "@/components/ui/Reveal"

// Seanslar (doküman 05 §9.4): seçili seansı state'te tutar, modalda gösterir.
export default function Treatments() {
  const { t } = useI18n()
  const [active, setActive] = useState<Treatment | null>(null)

  return (
    <section id="treatments" className="bg-cream-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t.treatments.eyebrow}
            title={t.treatments.title}
            subtitle={t.treatments.subtitle}
          />
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 0.1}>
              <TreatmentCard item={item} index={i} onOpen={() => setActive(item)} />
            </Reveal>
          ))}
        </div>
      </div>
      <TreatmentModal treatment={active} onClose={() => setActive(null)} />
    </section>
  )
}
