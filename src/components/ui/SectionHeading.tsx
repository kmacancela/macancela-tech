interface SectionHeadingProps {
  title: string
  subtitle?: string
  accent?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ title, subtitle, accent, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      {accent && (
        <span className="mb-2 inline-block text-xs font-medium uppercase tracking-[0.2em] text-leaf">{accent}</span>
      )}
      <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-ink-muted leading-relaxed ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}>{subtitle}</p>
      )}
    </div>
  )
}
