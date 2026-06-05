import { Link } from 'react-router'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  to?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  target?: string
  rel?: string
  download?: boolean | string
  ariaLabel?: string
}

export function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  target,
  rel,
  download,
  ariaLabel,
}: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 font-body font-semibold text-sm tracking-wide transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white'

  const variants: Record<string, string> = {
    primary: 'bg-deep-water text-warm-white hover:bg-deep-water-light',
    outline: 'border border-ink-muted/30 text-ink hover:border-leaf hover:text-leaf',
    ghost: 'text-ink-muted hover:text-ink hover:bg-sand/60',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        download={download}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} type={type} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
