import { useState } from 'react'
import { useInView } from '../../hooks/useInView'

type PlatformIconProps = {
  className?: string
}

function GoogleAdsIcon({ className = '' }: PlatformIconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <path d="M12 37 26.5 11h8L20 37Z" className="fill-tidal" />
      <path d="M26.5 11h8L44 37h-8.2L29.7 20.3Z" className="fill-sun" />
      <circle cx="12.5" cy="37" r="7" className="fill-moss" />
    </svg>
  )
}

function MetaBusinessIcon({ className = '' }: PlatformIconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <path
        d="M9 29.5c2.8-9.9 7-14.8 11.5-14.8 3.1 0 5.5 2.4 7.6 5.4 2.3 3.3 4.1 6.5 7.4 6.5 2.3 0 4.1-1.6 4.7-4"
        fill="none"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-tidal"
      />
      <path
        d="M39 18.5c-2.8 9.9-7 14.8-11.5 14.8-3.1 0-5.5-2.4-7.6-5.4-2.3-3.3-4.1-6.5-7.4-6.5-2.3 0-4.1 1.6-4.7 4"
        fill="none"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-moss"
      />
    </svg>
  )
}

function TradeDeskIcon({ className = '' }: PlatformIconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <path
        d="M12 16h24M12 24h24M12 32h24"
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        className="stroke-clay"
      />
      <circle cx="16" cy="16" r="4" className="fill-deep-water" />
      <circle cx="32" cy="24" r="4" className="fill-deep-water" />
      <circle cx="22" cy="32" r="4" className="fill-deep-water" />
    </svg>
  )
}

function MicrosoftAdsIcon({ className = '' }: PlatformIconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <rect x="10" y="10" width="12" height="12" className="fill-sun" />
      <rect x="26" y="10" width="12" height="12" className="fill-moss" />
      <rect x="10" y="26" width="12" height="12" className="fill-tidal" />
      <rect x="26" y="26" width="12" height="12" className="fill-clay" />
    </svg>
  )
}

const attributionPlatformNodes = [
  {
    label: 'Google Ads',
    detail: 'search intent',
    path: 'M 50 50 H 38 V 24 H 23',
    positionClass: 'left-[18%] top-[24%]',
    Icon: GoogleAdsIcon,
    strokeClass: 'stroke-sun',
    fillClass: 'fill-sun',
    begin: '0s',
  },
  {
    label: 'Meta Business',
    detail: 'paid social',
    path: 'M 50 50 H 62 V 24 H 77',
    positionClass: 'left-[82%] top-[24%]',
    Icon: MetaBusinessIcon,
    strokeClass: 'stroke-tidal',
    fillClass: 'fill-tidal',
    begin: '0.45s',
  },
  {
    label: 'The Trade Desk',
    detail: 'programmatic',
    path: 'M 50 50 H 38 V 76 H 23',
    positionClass: 'left-[18%] top-[76%]',
    Icon: TradeDeskIcon,
    strokeClass: 'stroke-clay',
    fillClass: 'fill-clay',
    begin: '0.9s',
  },
  {
    label: 'Microsoft Ads',
    detail: 'search network',
    path: 'M 50 50 H 62 V 76 H 77',
    positionClass: 'left-[82%] top-[76%]',
    Icon: MicrosoftAdsIcon,
    strokeClass: 'stroke-moss',
    fillClass: 'fill-moss',
    begin: '1.35s',
  },
]

function shouldAnimateAttributionNetwork() {
  if (typeof window === 'undefined') return false

  try {
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}

export function AttributionNetwork() {
  const { ref, isInView } = useInView('-90px')
  const [canAnimateNetwork] = useState(() => shouldAnimateAttributionNetwork())
  const shouldAnimateNetwork = isInView && canAnimateNetwork

  return (
    <div
      ref={ref}
      className="relative min-h-[19rem] overflow-hidden"
      aria-label="Attribution platforms connected through campaign data"
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className={`absolute inset-0 h-full w-full transition duration-700 ease-out ${isInView ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
      >
        <path
          d="M 10 16 H 90 M 10 84 H 90 M 14 10 V 90 M 86 10 V 90"
          fill="none"
          strokeWidth="0.3"
          strokeDasharray="1 5"
          className="stroke-paper-line opacity-70"
        />
        <path
          d="M 50 31 V 69 M 33 50 H 67"
          fill="none"
          strokeWidth="0.45"
          strokeDasharray="2 4"
          className="stroke-paper-line opacity-80"
        />
        {attributionPlatformNodes.map((node) => (
          <g key={node.label}>
            <path
              d={node.path}
              fill="none"
              strokeWidth="1.3"
              strokeLinecap="square"
              strokeLinejoin="miter"
              className="stroke-paper-line"
            />
            <path
              d={node.path}
              fill="none"
              strokeWidth="0.55"
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeDasharray="3 3"
              className={`${node.strokeClass} opacity-80`}
            />
            {shouldAnimateNetwork ? (
              <circle r="1.05" className={node.fillClass}>
                <animateMotion
                  path={node.path}
                  begin={node.begin}
                  dur="2.7s"
                  repeatCount="indefinite"
                />
              </circle>
            ) : null}
          </g>
        ))}
        <rect x="37.4" y="22.6" width="2.2" height="2.2" className="fill-paper-line" />
        <rect x="60.4" y="22.6" width="2.2" height="2.2" className="fill-paper-line" />
        <rect x="37.4" y="75.2" width="2.2" height="2.2" className="fill-paper-line" />
        <rect x="60.4" y="75.2" width="2.2" height="2.2" className="fill-paper-line" />
      </svg>

      <div className={`absolute left-1/2 top-1/2 z-20 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center transition duration-700 ease-out ${isInView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
        <span aria-hidden="true" className="absolute inset-0 rounded-full border border-tidal/35" />
        <span aria-hidden="true" className="absolute inset-3 rounded-full border border-paper-line" />
        <div className="relative flex h-24 w-24 flex-col items-center justify-center rounded-full border border-tidal bg-warm-white text-center">
          <span className="text-base font-bold leading-tight text-deep-water">
            Attribution
          </span>
          <span className="mt-1 font-mono text-[0.55rem] font-bold uppercase leading-tight tracking-[0.16em] text-moss">
            event hub
          </span>
        </div>
      </div>

      {attributionPlatformNodes.map((node) => (
        <div
          key={node.label}
          className={`absolute z-30 flex w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center transition duration-700 ease-out ${isInView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'} ${node.positionClass}`}
        >
          <span className="grid h-14 w-14 place-items-center rounded-full border border-paper-line bg-warm-white shadow-sm">
            <node.Icon className="h-8 w-8" />
          </span>
          <span className="text-sm font-bold leading-tight text-deep-water">
            {node.label}
          </span>
          <span className="font-mono text-[0.55rem] font-bold uppercase leading-none tracking-[0.14em] text-ink-muted">
            {node.detail}
          </span>
        </div>
      ))}
    </div>
  )
}
