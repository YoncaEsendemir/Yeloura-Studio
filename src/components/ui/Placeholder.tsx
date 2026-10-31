interface PlaceholderProps {
  label?: string
  className?: string
  seed?: number
}

// Telifsiz görsel kuralı (doküman 01) gereği gerçek foto yerine palet gradyanı.
// Gerçek lisanslı/free görseller sonra bu bileşenin yerine konacak.
const pairs: [string, string][] = [
  ["--color-powder", "--color-cream"],
  ["--color-rose", "--color-powder"],
  ["--color-cream", "--color-powder"],
  ["--color-rose", "--color-cream"],
]

export default function Placeholder({ label, className = "", seed = 0 }: PlaceholderProps) {
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
