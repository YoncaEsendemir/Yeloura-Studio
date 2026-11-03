import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { storyPages } from "@/data/story"
import { useI18n } from "@/i18n"
import Placeholder from "@/components/ui/Placeholder"
import SectionHeading from "@/components/ui/SectionHeading"
import SliderButton from "@/components/ui/SliderButton"
import Reveal from "@/components/ui/Reveal"

// Hikâyemiz (doküman 05 §9.5): "kitap sayfası çevirme" hissi — rotateY geçişli.
// Renk: arkada yumuşak gül kurusu/pudra ışımalar; her sayfanın gerçek görseli.
export default function OurStory() {
  const { lang, t } = useI18n()
  const [page, setPage] = useState(0)
  const [dir, setDir] = useState(1)
  const current = storyPages[page]

  const go = (d: number) => {
    setDir(d)
    setPage((prev) => (prev + d + storyPages.length) % storyPages.length)
  }

  return (
    <section id="story" className="relative overflow-hidden bg-cream py-20">
      {/* Dekoratif renkli ışımalar (sadece görsel, a11y'de gizli) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-powder/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-8 h-64 w-64 rounded-full bg-rose/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow={current.eyebrow[lang]} title={t.story.title} />
        </Reveal>

        <Reveal className="mt-12" delay={0.1}>
          {/* perspective ayrı katmanda: kitap-çevirme 3D'si Reveal'ın
              kendi transform'undan etkilenmesin diye. */}
          <div
            className="relative overflow-hidden rounded-3xl bg-cream-white shadow-md ring-1 ring-powder/60"
            style={{ perspective: 1200 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ rotateY: dir > 0 ? 18 : -18, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: dir > 0 ? -18 : 18, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="grid md:grid-cols-2"
              >
                {/* Görsel + üstten koyulaşan geçiş + sayfa rozeti */}
                <div className="relative h-64 md:h-full">
                  <Placeholder
                    src={current.image}
                    alt={current.title[lang]}
                    className="h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-cream-white/90 px-3 py-1 text-xs font-semibold tracking-widest text-rose">
                    {page + 1} / {storyPages.length}
                  </span>
                </div>

                {/* Metin */}
                <div className="flex flex-col justify-center p-8 text-left md:p-12">
                  <span className="text-xs font-semibold tracking-[0.25em] text-rose">
                    {current.eyebrow[lang]}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl text-ink md:text-3xl">
                    {current.title[lang]}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">{current.body[lang]}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <div className="mt-6 flex items-center justify-center gap-4">
          <SliderButton onClick={() => go(-1)} label={t.story.prevPage}>
            ‹
          </SliderButton>
          <span className="text-sm text-muted">
            {page + 1} / {storyPages.length}
          </span>
          <SliderButton onClick={() => go(1)} label={t.story.nextPage}>
            ›
          </SliderButton>
        </div>
      </div>
    </section>
  )
}
