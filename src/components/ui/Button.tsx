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
  const base = 'inline-flex min-h-11 items-center justify-center gap-2 border px-5 py-2.5 font-body text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white'

  const variants: Record<string, string> = {
    primary: 'border-deep-water bg-deep-water text-warm-white hover:-translate-y-0.5 hover:bg-deep-water-light',
    outline: 'border-sand-dark bg-warm-white text-ink hover:-translate-y-0.5 hover:border-deep-water hover:text-deep-water',
    ghost: 'border-transparent text-deep-water hover:border-sand-dark hover:bg-sand/70 hover:text-ink',
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
