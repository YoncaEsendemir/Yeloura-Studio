import { motion, useReducedMotion } from "framer-motion"
import heroVideo from "@/assets/video/yeloura-hero6.mp4"
import { CONTACT } from "@/data/site"
import { useI18n } from "@/i18n"
import Button from "@/components/ui/Button"

// Ana karşılama (doküman 05 §9.2): tam ekran arka plan videosu + okunur metin.
// Video dekoratiftir (sessiz, döngü). "Hareketi azalt" tercihinde oynatılmaz
// (ilk karede durur) → a11y.
export default function Hero() {
  const { t } = useI18n()
  const reduced = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] w-full overflow-hidden bg-ink"
    >
      {/* Arka plan videosu — object-cover ile her ekranı boşluksuz kaplar */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo}
        autoPlay={!reduced}
        loop={!reduced}
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* Okunabilirlik degradeleri (sadece görsel): üstte header için,
          alt-solda başlık metni için koyulaşır. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-tr from-ink/80 via-ink/35 to-transparent"
      />

      {/* İçerik */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-left"
        >
          <p className="text-sm font-semibold tracking-[0.25em] text-powder">{t.hero.eyebrow}</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-cream-white md:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-md text-cream-white/90">{t.hero.desc}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#treatments">{t.actions.explore}</Button>
            <Button href="#story" variant="light">
              {t.actions.ourStory}
            </Button>
          </div>
          <p className="mt-6 text-sm text-cream-white/80">
            {t.hero.bookByPhone}{" "}
            <a href={CONTACT.phoneHref} className="font-medium text-powder">
              {CONTACT.phone}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
