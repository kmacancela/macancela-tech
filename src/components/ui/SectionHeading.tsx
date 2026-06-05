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
        <span className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-deep-water">
          <span className="h-2 w-2 bg-leaf" />
          {accent}
        </span>
      )}
      <h2 className="max-w-4xl font-display text-4xl leading-[1.02] tracking-[-0.02em] text-ink md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-6 text-lg leading-relaxed text-ink-muted ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>{subtitle}</p>
      )}
    </div>
  )
}
