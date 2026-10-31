import type { ReactNode } from "react"

interface SliderButtonProps {
  onClick: () => void
  label: string
  children: ReactNode
}

// Yuvarlak gezinme oku — Testimonials ve OurStory'de ortak (DRY).
export default function SliderButton({ onClick, label, children }: SliderButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="rounded-full border border-ink/20 px-4 py-2 text-ink transition-colors hover:border-rose hover:text-rose"
    >
      {children}
    </button>
  )
}
