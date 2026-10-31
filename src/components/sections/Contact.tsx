import { CONTACT } from "@/data/site"
import Button from "@/components/ui/Button"

// Tek satır iletişim bilgisi (opsiyonel bağlantılı).
function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="rounded-xl bg-cream-white/5 p-4">
      <span className="text-xs uppercase tracking-widest text-rose">{label}</span>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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
  return (
    <section id="contact" className="bg-ink py-20 text-cream-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold tracking-[0.25em] text-rose">GET IN TOUCH</p>
        <h2 className="mt-3 font-serif text-3xl text-cream-white md:text-4xl">
          Book Your Appointment
        </h2>
        <p className="mt-4 text-cream">
          Call us or visit the studio — we would love to see you.
        </p>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          <Info label="Salon" value={CONTACT.salon} />
          <Info label="Owner" value={CONTACT.owner} />
          <Info label="Phone" value={CONTACT.phone} href={CONTACT.phoneHref} />
          <Info label="Address" value={CONTACT.address} href={CONTACT.mapUrl} />
          <Info label="Hours" value={CONTACT.hours} />
        </div>

        <Button href={CONTACT.phoneHref} className="mt-10">
          Call to Book
        </Button>
        <p className="mt-6 text-xs text-cream/60">* Demo contact details — not a real business.</p>
      </div>
    </section>
  )
}
