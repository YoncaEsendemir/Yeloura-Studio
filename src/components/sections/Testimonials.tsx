import { useState } from "react"
import { testimonials } from "@/data/testimonials"
import SectionHeading from "@/components/ui/SectionHeading"

// Müşteri yorumları (doküman 05 §9.7): MANUEL yatay slider (otomatik kaymaz).
export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  const go = (d: number) => setIndex((prev) => (prev + d + count) % count)

  return (
    <section id="testimonials" className="bg-cream py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading eyebrow="KIND WORDS" title="What Our Clients Say" />

        <div className="relative mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t) => (
              <figure key={t.id} className="w-full shrink-0 px-4">
                <div className="text-rose" aria-label={`${t.rating} out of 5 stars`}>
                  {"★".repeat(t.rating)}
                </div>
                <blockquote className="mt-4 font-serif text-xl text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="rounded-full border border-ink/20 px-3 py-1 text-ink transition-colors hover:border-rose hover:text-rose"
          >
            ‹
          </button>
          {testimonials.map((_, d) => (
            <button
              key={d}
              aria-label={`Go to testimonial ${d + 1}`}
              onClick={() => setIndex(d)}
              className={`h-2 w-2 rounded-full transition-colors ${
                d === index ? "bg-rose" : "bg-ink/20"
              }`}
            />
          ))}
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="rounded-full border border-ink/20 px-3 py-1 text-ink transition-colors hover:border-rose hover:text-rose"
          >
            ›
          </button>
        </div>

        <p className="mt-6 text-xs text-muted">* Sample testimonials for demo purposes.</p>
      </div>
    </section>
  )
}
