import { useState } from "react"
import { testimonials } from "@/data/testimonials"
import { useI18n } from "@/i18n"
import SectionHeading from "@/components/ui/SectionHeading"
import SliderButton from "@/components/ui/SliderButton"

// Müşteri yorumları (doküman 05 §9.7): MANUEL yatay slider (otomatik kaymaz).
export default function Testimonials() {
  const { lang, t } = useI18n()
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  const go = (d: number) => setIndex((prev) => (prev + d + count) % count)

  return (
    <section id="testimonials" className="bg-cream py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />

        <div className="relative mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((item) => (
              <figure key={item.id} className="w-full shrink-0 px-4">
                <div className="text-rose" aria-label={`${item.rating}/5`}>
                  {"★".repeat(item.rating)}
                </div>
                <blockquote className="mt-4 font-serif text-xl text-ink">
                  “{item.quote[lang]}”
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted">— {item.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <SliderButton onClick={() => go(-1)} label={t.testimonials.prev}>
            ‹
          </SliderButton>
          {testimonials.map((_, d) => (
            <button
              key={d}
              aria-label={`${d + 1}`}
              onClick={() => setIndex(d)}
              className={`h-2 w-2 rounded-full transition-colors ${
                d === index ? "bg-rose" : "bg-ink/20"
              }`}
            />
          ))}
          <SliderButton onClick={() => go(1)} label={t.testimonials.next}>
            ›
          </SliderButton>
        </div>

        <p className="mt-6 text-xs text-muted">{t.testimonials.note}</p>
      </div>
    </section>
  )
}
