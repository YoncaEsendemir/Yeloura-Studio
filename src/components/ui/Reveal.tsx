import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

// Ortak scroll-reveal sarmalayıcı (doküman 06-animasyon.md):
// Eleman ekrana girince BİR KEZ yumuşakça belirir (alttan yukarı).
// "prefers-reduced-motion" açıksa hareket YOK → içerik anında görünür (a11y).
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
