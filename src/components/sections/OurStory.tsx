import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { storyPages } from "@/data/story"
import Placeholder from "@/components/ui/Placeholder"
import SectionHeading from "@/components/ui/SectionHeading"

// Hikâyemiz (doküman 05 §9.5): "kitap sayfası çevirme" hissi — rotateY geçişli.
export default function OurStory() {
  const [page, setPage] = useState(0)
  const [dir, setDir] = useState(1)
  const current = storyPages[page]

  const go = (d: number) => {
    setDir(d)
    setPage((prev) => (prev + d + storyPages.length) % storyPages.length)
  }

  return (
    <section id="story" className="bg-cream py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="OUR PHILOSOPHY" title="Our Story" />

        <div
          className="relative mt-12 overflow-hidden rounded-3xl bg-cream-white shadow-sm"
          style={{ perspective: 1200 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ rotateY: dir > 0 ? 25 : -25, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: dir > 0 ? -25 : 25, opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ transformStyle: "preserve-3d" }}
              className="grid gap-8 p-8 text-left md:grid-cols-2 md:p-12"
            >
              <Placeholder
                seed={page}
                label={current.title}
                className="h-56 w-full rounded-2xl md:h-full"
              />
              <div className="flex flex-col justify-center">
                <span className="text-xs font-semibold tracking-widest text-rose">
                  {current.eyebrow}
                </span>
                <h3 className="mt-2 font-serif text-2xl text-ink">{current.title}</h3>
                <p className="mt-3 text-muted">{current.body}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous page"
            className="rounded-full border border-ink/20 px-4 py-2 text-ink transition-colors hover:border-rose hover:text-rose"
          >
            ‹
          </button>
          <span className="text-sm text-muted">
            {page + 1} / {storyPages.length}
          </span>
          <button
            onClick={() => go(1)}
            aria-label="Next page"
            className="rounded-full border border-ink/20 px-4 py-2 text-ink transition-colors hover:border-rose hover:text-rose"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
