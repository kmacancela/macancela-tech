interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'clay' | 'moss' | 'tidal' | 'water' | 'leaf' | 'sun'
}

const variantClasses: Record<string, string> = {
  default: 'bg-sand-dark/60 text-ink-light',
  clay: 'bg-clay/10 text-clay-dark',
  moss: 'bg-moss/10 text-moss',
  tidal: 'bg-tidal/10 text-deep-water',
  water: 'bg-deep-water/10 text-deep-water',
  leaf: 'bg-leaf/10 text-leaf',
  sun: 'bg-sun/10 text-sun',
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-sm px-2.5 py-1 text-xs font-medium tracking-wide ${variantClasses[variant]}`}
    >
      {children}
    </span>
  )
}
