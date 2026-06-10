interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'clay' | 'moss' | 'tidal' | 'water' | 'leaf' | 'sun'
}

const variantClasses: Record<string, string> = {
  default: 'border-paper-line bg-warm-white text-ink-muted',
  clay: 'border-clay/35 bg-clay/10 text-clay-dark',
  moss: 'border-moss/35 bg-moss/10 text-moss',
  tidal: 'border-tidal/35 bg-tidal/10 text-deep-water',
  water: 'border-deep-water/25 bg-deep-water/10 text-deep-water',
  leaf: 'border-leaf/35 bg-leaf/10 text-leaf',
  sun: 'border-sun/35 bg-sun/15 text-deep-water',
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-block border px-2.5 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] ${variantClasses[variant]}`}
    >
      {children}
    </span>
  )
}
