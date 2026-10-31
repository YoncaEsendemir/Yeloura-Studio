import { campaigns } from "@/data/campaigns"
import { useI18n } from "@/i18n"
import CampaignCard from "@/components/ui/CampaignCard"
import SectionHeading from "@/components/ui/SectionHeading"

// Kampanyalar (doküman 05 §9.3): krem zemin, 3'lü kart gridi.
export default function Campaigns() {
  const { t } = useI18n()

  return (
    <section id="campaigns" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t.campaigns.eyebrow}
          title={t.campaigns.title}
          subtitle={t.campaigns.subtitle}
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((c, i) => (
            <CampaignCard key={c.id} item={c} index={i} />
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted">{t.campaigns.priceNote}</p>
      </div>
    </section>
  )
}
