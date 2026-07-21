import { Link } from 'react-router'

interface BrandLockupProps {
  className?: string
}

const focusRing = 'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tidal'

export function BrandLockup({ className = '' }: BrandLockupProps) {
  return (
    <Link
      to="/"
      aria-label="Macancela Technologies home"
      className={`group inline-flex flex-col items-stretch text-deep-water ${focusRing} ${className}`}
    >
      <span
        className="relative text-2xl font-bold leading-none tracking-normal sm:text-3xl"
        aria-hidden="true"
      >
        Macancela
        <span className="pointer-events-none absolute inset-0 text-moss [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-200 ease-out group-hover:[clip-path:inset(0_0_0_0)] group-focus-visible:[clip-path:inset(0_0_0_0)] motion-reduce:transition-none">
          Macancela
        </span>
      </span>
      <span
        className="w-full text-center text-xs font-normal uppercase leading-none tracking-normal text-ink-muted"
        aria-hidden="true"
      >
        Technologies
      </span>
    </Link>
  )
}
