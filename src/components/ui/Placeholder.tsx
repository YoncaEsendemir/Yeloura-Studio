interface PlaceholderProps {
  label?: string
  className?: string
  seed?: number
  src?: string
  alt?: string
}

// Görsel alanı: `src` verilirse gerçek (telifsiz) foto, verilmezse palet gradyanı.
// Böylece fotoğrafı olmayan bölümler de şık bir fallback'le çalışmaya devam eder.
const pairs: [string, string][] = [
  ["--color-powder", "--color-cream"],
  ["--color-rose", "--color-powder"],
  ["--color-cream", "--color-powder"],
  ["--color-rose", "--color-cream"],
]

export default function Placeholder({ label, className = "", seed = 0, src, alt }: PlaceholderProps) {
  if (src) {
    return (
      <img src={src} alt={alt ?? label ?? ""} loading="lazy" className={`object-cover ${className}`} />
    )
  }

  const [a, b] = pairs[seed % pairs.length]
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ background: `linear-gradient(135deg, var(${a}), var(${b}))` }}
    >
      {label && <span className="px-4 text-center font-serif text-lg text-ink/40">{label}</span>}
    </div>
  )
}
