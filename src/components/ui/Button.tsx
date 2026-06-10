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
  const base = 'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-2.5 font-body text-sm font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-tidal focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white'

  const variants: Record<string, string> = {
    primary: 'border-deep-water bg-deep-water text-warm-white hover:-translate-y-0.5 hover:bg-tidal',
    outline: 'border-paper-line bg-warm-white text-deep-water hover:-translate-y-0.5 hover:border-tidal hover:text-tidal',
    ghost: 'border-transparent text-tidal hover:border-paper-line hover:bg-warm-white hover:text-deep-water',
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
