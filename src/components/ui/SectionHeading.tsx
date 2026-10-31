interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
}

// Bölüm başlığı: küçük gül kurusu etiket (eyebrow) + serif başlık + opsiyonel alt metin.
export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center">
      {eyebrow && (
        <p className="text-sm font-semibold tracking-[0.25em] text-rose">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-3 max-w-xl text-muted">{subtitle}</p>}
    </div>
  )
}
