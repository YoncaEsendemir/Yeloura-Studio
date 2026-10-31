import { motion } from "framer-motion"
import heroImg from "@/assets/hero.png"
import { CONTACT } from "@/data/site"
import Button from "@/components/ui/Button"

// Ana karşılama (doküman 05 §9.2): metin soldan belirir, görsel yumuşak gelir.
export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center bg-cream-white pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <p className="text-sm font-semibold tracking-[0.25em] text-rose">
            YOUR BEAUTY, YOUR RITUAL
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-6xl">
            Discover the beauty of self-care.
          </h1>
          <p className="mt-5 max-w-md text-muted">
            Make time for yourself. Explore personalized beauty rituals crafted around you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#treatments">Explore Treatments</Button>
            <Button href="#story" variant="outline">
              Our Story
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted">
            Book by phone:{" "}
            <a href={CONTACT.phoneHref} className="font-medium text-rose">
              {CONTACT.phone}
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <img
            src={heroImg}
            alt="Yeloura Studio beauty care"
            className="w-full rounded-3xl object-cover shadow-sm"
          />
        </motion.div>
      </div>
    </section>
  )
}
