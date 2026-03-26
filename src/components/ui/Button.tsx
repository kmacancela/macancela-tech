import { Link } from 'react-router'
import { motion } from 'motion/react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  to?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

export function Button({ children, variant = 'primary', to, href, onClick, type = 'button', className = '' }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 font-body font-semibold text-sm tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white'

  const variants: Record<string, string> = {
    primary: 'bg-deep-water text-warm-white hover:bg-deep-water-light',
    outline: 'border border-ink-muted/30 text-ink hover:border-leaf hover:text-leaf',
    ghost: 'text-ink-muted hover:text-ink hover:bg-sand/60',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { y: 0 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 20 },
  }

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={classes}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button onClick={onClick} type={type} className={classes} {...motionProps}>
      {children}
    </motion.button>
  )
}
