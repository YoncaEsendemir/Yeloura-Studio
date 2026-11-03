import type { Campaign } from "@/data/campaigns"
import { useI18n } from "@/i18n"
import Button from "@/components/ui/Button"
import Placeholder from "@/components/ui/Placeholder"

interface CampaignCardProps {
  item: Campaign
  index: number
}

export default function CampaignCard({ item, index }: CampaignCardProps) {
  const { lang, t } = useI18n()

  return (
    <article className="overflow-hidden rounded-2xl bg-cream-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <Placeholder seed={index} src={item.image} alt={item.title[lang]} className="h-48 w-full" />
      <div className="p-6 text-left">
        <span className="text-xs font-semibold tracking-widest text-rose">{t.campaigns.badge}</span>
        <h3 className="mt-2 font-serif text-xl text-ink">{item.title[lang]}</h3>
        <p className="mt-2 text-sm text-muted">{item.description[lang]}</p>
        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-muted line-through">{item.oldPrice}</span>
          <span className="text-lg font-semibold text-ink">{item.newPrice}</span>
        </div>
        <Button href="#contact" className="mt-5">
          {t.actions.discover} →
        </Button>
      </div>
    </article>
  )
}
