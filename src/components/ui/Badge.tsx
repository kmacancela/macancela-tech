interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'clay' | 'moss' | 'tidal' | 'water' | 'leaf' | 'sun'
}

const variantClasses: Record<string, string> = {
  default: 'border-sand-dark/80 bg-warm-white text-ink-light',
  clay: 'border-clay/30 bg-clay/10 text-clay-dark',
  moss: 'border-moss/30 bg-moss/10 text-moss',
  tidal: 'border-tidal/30 bg-tidal/10 text-deep-water',
  water: 'border-deep-water/25 bg-deep-water/10 text-deep-water',
  leaf: 'border-leaf/30 bg-leaf/10 text-leaf',
  sun: 'border-sun/30 bg-sun/10 text-sun',
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-block border px-2.5 py-1 text-xs font-semibold ${variantClasses[variant]}`}
    >
      {children}
    </span>
  )
}
