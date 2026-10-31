import type { ReactNode } from "react"

type Variant = "primary" | "outline" | "light"

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  href?: string
  onClick?: () => void
  className?: string
  type?: "button" | "submit"
}

// Tek buton bileşeni: href verilirse <a>, verilmezse <button> render eder.
const variants: Record<Variant, string> = {
  primary: "bg-rose text-cream-white hover:bg-rose-dark",
  outline: "border border-ink/30 text-ink hover:border-rose hover:text-rose",
  light: "bg-cream-white text-ink hover:bg-cream",
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} onClick={onClick} className={base}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  )
}
