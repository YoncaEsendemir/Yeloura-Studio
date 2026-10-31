import { AnimatePresence, motion } from "framer-motion"
import { NAV_LINKS } from "@/data/site"
import Button from "@/components/ui/Button"

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

// Mobil menü: sağdan yumuşak açılır panel (doküman 06 #3).
export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-ink/40 md:hidden"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 h-full w-72 bg-cream-white p-6 shadow-xl md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="mb-8 text-2xl leading-none text-ink hover:text-rose"
            >
              ×
            </button>
            <nav className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={onClose}
                  className="text-lg text-ink transition-colors hover:text-rose"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <Button href="#contact" onClick={onClose} className="mt-8 w-full">
              Book Now
            </Button>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
