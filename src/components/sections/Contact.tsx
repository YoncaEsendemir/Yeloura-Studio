import { CONTACT } from "@/data/site"
import { useI18n } from "@/i18n"
import Button from "@/components/ui/Button"
import Reveal from "@/components/ui/Reveal"

// Tek satır iletişim bilgisi (opsiyonel bağlantılı).
function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  const external = href?.startsWith("http")
  return (
    <div className="rounded-xl bg-cream-white/5 p-4">
      <span className="text-xs uppercase tracking-widest text-rose">{label}</span>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="mt-1 block text-cream-white hover:text-rose"
        >
          {value}
        </a>
      ) : (
        <p className="mt-1 text-cream-white">{value}</p>
      )}
    </div>
  )
}

// İletişim (doküman 05 §9.8): FORM YOK — telefon + adres + sahibi/salon (demo veri).
export default function Contact() {
  const { lang, t } = useI18n()

  return (
    <section id="contact" className="bg-ink py-20 text-cream-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
        <p className="text-sm font-semibold tracking-[0.25em] text-rose">{t.contact.eyebrow}</p>
        <h2 className="mt-3 font-serif text-3xl text-cream-white md:text-4xl">{t.contact.title}</h2>
        <p className="mt-4 text-cream">{t.contact.desc}</p>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          <Info label={t.contact.salon} value={CONTACT.salon} />
          <Info label={t.contact.owner} value={CONTACT.owner} />
          <Info label={t.contact.phone} value={CONTACT.phone} href={CONTACT.phoneHref} />
          <Info label={t.contact.address} value={CONTACT.address} href={CONTACT.mapUrl} />
          <Info label={t.contact.hours} value={CONTACT.hours[lang]} />
        </div>

        <Button href={CONTACT.phoneHref} className="mt-10">
          {t.actions.callToBook}
        </Button>
        <p className="mt-6 text-xs text-cream/60">{t.contact.note}</p>
        </Reveal>
      </div>
    </section>
  )
}
