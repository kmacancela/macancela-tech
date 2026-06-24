import { useEffect, useRef, useState } from 'react'
import { DatabaseIcon, TimerIcon, UsersThreeIcon } from '@phosphor-icons/react'
import { Link } from 'react-router'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { ProfileIcon } from '../components/ui/ProfileIcon'
import { experience } from '../data/experience'
import { profileLinks } from '../data/profileLinks'
import { projects } from '../data/projects'
import { siteConfig } from '../data/siteConfig'
import { useInView } from '../hooks/useInView'

const homeProjectIds = ['kary-waves', 'atrilyx', 'sso-portal']

type HomeProjectChipLabel = {
  compact: string
  full: string
}

const homeProjectKindChips: Record<string, HomeProjectChipLabel> = {
  'kary-waves': { compact: 'App', full: 'Client app' },
  atrilyx: { compact: 'SaaS', full: 'SaaS' },
  'sso-portal': { compact: 'SSO', full: 'Internal platform' },
}
const homeProjectStackChips: Record<string, HomeProjectChipLabel> = {
  'kary-waves': { compact: 'RN/TS/Node/PG', full: 'RN, TS, Node, Postgres' },
  atrilyx: { compact: 'Vue/TS/PHP/PG', full: 'Vue, TS, PHP, Postgres' },
  'sso-portal': { compact: 'React/SSO/JWT', full: 'React, SSO, JWT' },
}
const featuredProjects = homeProjectIds
  .map((projectId) => projects.find((project) => project.id === projectId))
  .filter((project) => project !== undefined)
const resumeLink = profileLinks.find((link) => link.name === 'Resume')
const socialLinks = profileLinks.filter((link) => link.name === 'LinkedIn' || link.name === 'GitHub')
const heroBuildMetadata = [
  {
    field: 'experience',
    value: `${siteConfig.yearsExperience} years`,
    detail: 'Healthcare / AdTech / SaaS startups',
  },
  {
    field: 'region',
    value: siteConfig.location,
    detail: 'NYC based / remote experience',
  },
  {
    field: 'stack',
    value: 'TypeScript / React / Node',
    detail: 'Java / SQL / backend APIs',
  },
  {
    field: 'availability',
    value: 'open for hire',
    detail: 'full-stack / frontend roles',
  },
]

const heroGreetingLines = ['Hey There,', "I'm Karina"]
const heroRoleLines = ["I'm a Software", 'Engineer']
const heroGreetingText = heroGreetingLines.join('\n')
const heroRoleText = heroRoleLines.join('\n')
const heroPortraitSizes = '(max-width: 767px) 50vw, (max-width: 1279px) 36vw, 28rem'
const heroPortraitAvifSrcSet = '/karina-portrait-480.avif 480w, /karina-portrait-800.avif 800w, /karina-portrait-1200.avif 1200w'
const heroPortraitWebpSrcSet = '/karina-portrait-480.webp 480w, /karina-portrait-800.webp 800w, /karina-portrait-1200.webp 1200w'
const heroPortraitJpegSrcSet = '/karina-portrait-480.jpg 480w, /karina-portrait-800.jpg 800w, /karina-portrait-1200.jpg 1200w'
const homeSectionHeadingClass = 'home-capability-copy text-4xl font-bold leading-[1.03] tracking-[-0.03em] text-deep-water md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5rem]'

const clientLogos = [
  { name: 'Mediacom Business', src: '/logos/clients/mediacom-business.svg' },
  { name: 'Turtle Bay', src: '/logos/clients/turtle-bay.png' },
  { name: 'Hard Rock Cafe', src: '/logos/clients/hard-rock-cafe.svg' },
  { name: 'Spectrum', src: '/logos/clients/spectrum.svg' },
  { name: 'Aetna', src: '/logos/clients/aetna.svg' },
  { name: 'Ashley Furniture', src: '/logos/clients/ashley-furniture.svg' },
  { name: 'Oscar de la Renta', src: '/logos/clients/oscar-de-la-renta.png' },
  { name: 'Renewal by Andersen', src: '/logos/clients/renewal-by-andersen.png' },
  { name: 'Apple', src: '/logos/clients/apple.svg' },
  { name: 'Berkeley College', src: '/logos/clients/berkeley-college.png', tone: 'ink' },
  { name: 'NSU', src: '/logos/clients/nsu.png', size: 'tall' },
  { name: 'Azamara Cruises', src: '/logos/clients/azamara-cruises.png' },
]

const lifecycleSegments = [
  {
    label: 'Discover',
    strokeClass: 'stroke-tidal',
    centerAngle: -90,
    labelClass: 'fill-warm-white',
  },
  {
    label: 'Scope',
    strokeClass: 'stroke-moss-light',
    centerAngle: -38.57,
    labelClass: 'fill-warm-white',
  },
  {
    label: 'Plan',
    strokeClass: 'stroke-sun',
    centerAngle: 12.86,
    reverseLabel: true,
    labelClass: 'fill-deep-water',
  },
  {
    label: 'Build',
    strokeClass: 'stroke-clay',
    centerAngle: 64.29,
    reverseLabel: true,
    labelClass: 'fill-warm-white',
  },
  {
    label: 'QA',
    strokeClass: 'stroke-deep-water',
    centerAngle: 115.71,
    labelClass: 'fill-warm-white',
  },
  {
    label: 'Launch',
    strokeClass: 'stroke-tidal-light',
    centerAngle: 167.14,
    labelClass: 'fill-deep-water',
  },
  {
    label: 'Iterate',
    strokeClass: 'stroke-moss',
    centerAngle: 218.57,
    reverseLabel: false,
    labelClass: 'fill-warm-white',
  },
]

const lifecycleArcRadius = 112
const lifecycleArcSpan = 360 / lifecycleSegments.length + 0.45

const capabilityHighlights = [
  {
    icon: 'clients',
    title: '300+ SaaS clients supported',
  },
  {
    icon: 'data',
    title: '10M+ daily events surfaced',
  },
  {
    icon: 'handoff',
    title: '40% onboarding time reduced',
  },
] as const

const capabilityHighlightDelayClasses = ['delay-75', 'delay-150', 'delay-300']

const timelineColors = ['bg-tidal', 'bg-clay', 'bg-sun']
const timelineDotDelayClasses = ['delay-300', 'delay-150', '']
const introStorageKey = 'macancela-home-intro-seen'
const introOverlayMs = 1950
const introHandoffMs = 2800
const initialGreetingHoldMs = 420

function HomeProjectChipText({ label }: { label: HomeProjectChipLabel }) {
  return (
    <>
      <span className="xl:hidden">{label.compact}</span>
      <span className="hidden xl:inline">{label.full}</span>
    </>
  )
}

type CapabilityHighlightIconName = (typeof capabilityHighlights)[number]['icon']

function CapabilityHighlightIcon({ icon }: { icon: CapabilityHighlightIconName }) {
  const iconClass = 'h-10 w-10'
  const Icon = {
    clients: UsersThreeIcon,
    data: DatabaseIcon,
    handoff: TimerIcon,
  }[icon]

  return (
    <Icon aria-hidden="true" className={iconClass} weight="duotone" />
  )
}

function getClientLogoClass(logo: (typeof clientLogos)[number]) {
  const sizeClass = 'size' in logo && logo.size === 'tall' ? 'max-h-14 max-w-44' : 'max-h-12 max-w-44'
  const baseClass = `${sizeClass} object-contain transition-opacity duration-300 hover:opacity-100`
  if ('tone' in logo && logo.tone === 'ink') {
    return `${baseClass} opacity-75 brightness-0 dark:invert`
  }

  return `${baseClass} opacity-80 grayscale contrast-125 mix-blend-multiply dark:mix-blend-normal dark:invert`
}

function ClientLogoGrid() {
  return (
    <AnimatedSection delay={0.18} className="mt-14 md:mt-4 xl:mt-10">
      <div
        className="py-8 md:pt-4 md:pb-8 xl:pt-6 xl:pb-8"
        aria-labelledby="client-logo-heading"
      >
        <h3 id="client-logo-heading" className="text-center text-lg font-bold tracking-[-0.01em] text-deep-water md:text-xl">
          Recent Clients
        </h3>
        <div className="mx-auto mt-8 grid max-w-[86rem] grid-cols-2 items-center gap-x-5 gap-y-7 sm:grid-cols-3 sm:gap-x-7 lg:grid-cols-6 lg:gap-x-8">
          {clientLogos.map((logo) => (
            <div key={logo.name} className="flex h-16 items-center justify-center">
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                loading="eager"
                decoding="async"
                className={getClientLogoClass(logo)}
              />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

function getLifecyclePoint(angle: number, radius = lifecycleArcRadius) {
  const radians = (angle * Math.PI) / 180
  return {
    x: 160 + Math.cos(radians) * radius,
    y: 160 + Math.sin(radians) * radius,
  }
}

function getLifecycleArcPath(centerAngle: number, reverse = false) {
  const startAngle = centerAngle - lifecycleArcSpan / 2
  const endAngle = centerAngle + lifecycleArcSpan / 2
  const start = getLifecyclePoint(reverse ? endAngle : startAngle)
  const end = getLifecyclePoint(reverse ? startAngle : endAngle)
  const sweepFlag = reverse ? 0 : 1
  return `M ${start.x} ${start.y} A ${lifecycleArcRadius} ${lifecycleArcRadius} 0 0 ${sweepFlag} ${end.x} ${end.y}`
}

function shouldReverseLifecycleLabel(centerAngle: number) {
  return centerAngle > 90 && centerAngle < 270
}

function getLifecycleFanRotation(centerAngle: number) {
  return -90 - centerAngle
}

function getLifecycleLabelPathId(label: string) {
  return `lifecycle-label-${label.toLowerCase()}`
}

function shouldAnimateLifecycleWheel() {
  if (typeof window === 'undefined') return false

  try {
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}

function LifecycleWheel() {
  const { ref, isInView } = useInView('-90px')
  const [canAnimateLifecycle] = useState(() => shouldAnimateLifecycleWheel())
  const wheelStateClass = isInView ? 'rotate-0 scale-100 opacity-100' : '-rotate-28 scale-95 opacity-50'

  return (
    <div
      ref={ref}
      className="relative mx-auto aspect-square w-full max-w-[34rem] sm:max-w-[38rem] lg:ml-auto lg:mr-0 xl:-ml-6 xl:mr-auto"
      aria-label="Agile product lifecycle from discovery through iteration"
    >
      <div className={`absolute inset-[3%] transition duration-700 ease-out sm:inset-[8%] ${wheelStateClass}`}>
        <svg
          viewBox="0 0 320 320"
          role="img"
          aria-label="Circular lifecycle diagram"
          className="h-full w-full overflow-visible"
        >
          <defs>
            {lifecycleSegments.map((segment) => (
              <path
                key={`${segment.label}-label-path`}
                id={getLifecycleLabelPathId(segment.label)}
                d={getLifecycleArcPath(segment.centerAngle, segment.reverseLabel ?? shouldReverseLifecycleLabel(segment.centerAngle))}
              />
            ))}
          </defs>
          <circle
            cx="160"
            cy="160"
            r={lifecycleArcRadius}
            fill="none"
            strokeWidth="30"
            className="stroke-paper-line"
          />
            {lifecycleSegments.map((segment, index) => {
              const fanRotation = getLifecycleFanRotation(segment.centerAngle)
              const begin = `${index * 0.055}s`
              const shouldFanOut = isInView && canAnimateLifecycle

              return (
                <g
                  key={segment.label}
                  transform={isInView ? 'rotate(0 160 160)' : `rotate(${fanRotation} 160 160)`}
                  opacity={isInView ? 1 : 0}
                >
                  {shouldFanOut ? (
                    <>
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from={`${fanRotation} 160 160`}
                        to="0 160 160"
                        begin={begin}
                        dur="0.78s"
                        fill="freeze"
                        calcMode="spline"
                        keyTimes="0;1"
                        keySplines="0.22 1 0.36 1"
                      />
                      <animate
                        attributeName="opacity"
                        from="0"
                        to="1"
                        begin={begin}
                        dur="0.22s"
                        fill="freeze"
                      />
                    </>
                  ) : null}
                  <path
                    d={getLifecycleArcPath(segment.centerAngle)}
                    fill="none"
                    strokeWidth="30"
                    strokeLinecap="butt"
                    className={segment.strokeClass}
                  />
                  <text
                    dy="0.32em"
                    className={`font-mono text-[0.5rem] font-bold uppercase tracking-[0.16em] sm:text-[0.56rem] ${segment.labelClass}`}
                  >
                    <textPath
                      href={`#${getLifecycleLabelPathId(segment.label)}`}
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      {segment.label}
                    </textPath>
                  </text>
                </g>
              )
            })}
        </svg>
      </div>

      <div className={`absolute inset-[34%] flex flex-col items-center justify-center rounded-full border border-paper-line bg-warm-white/95 text-center transition duration-700 ease-out ${isInView ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
        <span className="text-xl font-bold leading-tight text-deep-water sm:text-2xl">
          Product
          <br />
          Lifecycle
        </span>
      </div>

    </div>
  )
}

function shouldPlayIntro() {
  if (typeof window === 'undefined') return false

  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    if (new URLSearchParams(window.location.search).has('intro')) return true
    return window.sessionStorage.getItem(introStorageKey) !== 'true'
  } catch {
    return false
  }
}

function shouldTypeHeroGreeting() {
  if (typeof window === 'undefined') return false

  try {
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}

function TypewriterHeading({ isActive }: { isActive: boolean }) {
  const returnTimerId = useRef<number | null>(null)
  const initialGreetingTimerId = useRef<number | null>(null)
  const pointerInsideRef = useRef(false)
  const [targetText, setTargetText] = useState(heroGreetingText)
  const [displayText, setDisplayText] = useState(() => (
    shouldTypeHeroGreeting() ? '' : heroGreetingText
  ))
  const [returnAfterRole, setReturnAfterRole] = useState(false)
  const [initialGreetingComplete, setInitialGreetingComplete] = useState(() => !shouldTypeHeroGreeting())

  useEffect(() => () => {
    if (returnTimerId.current !== null) window.clearTimeout(returnTimerId.current)
    if (initialGreetingTimerId.current !== null) window.clearTimeout(initialGreetingTimerId.current)
  }, [])

  function clearReturnTimer() {
    if (returnTimerId.current === null) return
    window.clearTimeout(returnTimerId.current)
    returnTimerId.current = null
  }

  function clearInitialGreetingTimer() {
    if (initialGreetingTimerId.current === null) return
    window.clearTimeout(initialGreetingTimerId.current)
    initialGreetingTimerId.current = null
  }

  function showRoleText() {
    pointerInsideRef.current = true
    if (!initialGreetingComplete) return

    clearReturnTimer()
    setReturnAfterRole(false)
    setTargetText((currentText) => (currentText === heroRoleText ? currentText : heroRoleText))
  }

  function showGreetingText() {
    pointerInsideRef.current = false
    clearReturnTimer()
    if (!initialGreetingComplete) {
      setReturnAfterRole(false)
      setTargetText((currentText) => (currentText === heroGreetingText ? currentText : heroGreetingText))
      return
    }

    setReturnAfterRole(true)
    setTargetText((currentText) => (currentText === heroRoleText ? currentText : heroRoleText))
  }

  useEffect(() => {
    if (!shouldTypeHeroGreeting()) {
      setDisplayText(targetText)
      return
    }

    if (!isActive) {
      setDisplayText('')
      return
    }

    if (displayText === targetText) return

    const isTyping = targetText.startsWith(displayText)
    const delay = displayText === '' ? 220 : isTyping ? 58 : 32
    const timerId = window.setTimeout(() => {
      setDisplayText((currentText) => {
        if (currentText === targetText) return currentText
        if (targetText.startsWith(currentText)) return targetText.slice(0, currentText.length + 1)

        return currentText.slice(0, -1)
      })
    }, delay)

    return () => {
      window.clearTimeout(timerId)
    }
  }, [displayText, isActive, targetText])

  useEffect(() => {
    if (initialGreetingComplete || targetText !== heroGreetingText || displayText !== heroGreetingText) return

    clearInitialGreetingTimer()
    initialGreetingTimerId.current = window.setTimeout(() => {
      setInitialGreetingComplete(true)
      initialGreetingTimerId.current = null
      if (!pointerInsideRef.current) return

      setReturnAfterRole(false)
      setTargetText((currentText) => (currentText === heroRoleText ? currentText : heroRoleText))
    }, initialGreetingHoldMs)

    return () => {
      clearInitialGreetingTimer()
    }
  }, [displayText, initialGreetingComplete, targetText])

  useEffect(() => {
    if (!returnAfterRole || targetText !== heroRoleText || displayText !== heroRoleText) return

    clearReturnTimer()
    returnTimerId.current = window.setTimeout(() => {
      setTargetText((currentText) => (currentText === heroGreetingText ? currentText : heroGreetingText))
      setReturnAfterRole(false)
      returnTimerId.current = null
    }, 420)

    return () => {
      clearReturnTimer()
    }
  }, [displayText, returnAfterRole, targetText])

  const [visibleFirstLine = '', visibleSecondLine = ''] = displayText.split('\n')
  const visibleSingleLine = displayText.replace('\n', ' ')
  const cursorIsOnSecondLine = displayText.includes('\n')
  const shouldShowCursor = isActive || displayText.length > 0

  return (
    <div
      className="relative w-full max-w-3xl cursor-default max-xl:max-w-none"
      onPointerEnter={showRoleText}
      onPointerLeave={showGreetingText}
    >
      <span
        aria-hidden="true"
        className="invisible hidden select-none font-display text-5xl leading-[0.96] tracking-normal sm:text-7xl lg:text-[6.25rem] xl:block"
      >
        <span className="block min-h-[0.96em]">
          {heroGreetingLines[0]}
        </span>
        <span className="block min-h-[0.96em]">
          {heroGreetingLines[1]}
        </span>
      </span>
      <span
        aria-hidden="true"
        className="invisible block w-full select-none whitespace-nowrap font-display text-[1.625rem] leading-[0.96] tracking-normal min-[380px]:text-4xl sm:text-5xl sm:max-md:text-[4rem] md:text-[4.5rem] md:max-lg:text-[5rem] lg:text-[5.25rem] xl:hidden"
      >
        {heroGreetingText.replace('\n', ' ')}
      </span>

      <h1
        className="pointer-events-none absolute inset-0 font-display text-[1.625rem] leading-[0.96] tracking-normal text-deep-water outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tidal min-[380px]:text-4xl sm:text-5xl sm:max-md:text-[4rem] md:text-[4.5rem] md:max-lg:text-[5rem] lg:text-[5.25rem] xl:text-[6.25rem]"
        aria-label={targetText.replace('\n', ' ')}
        onBlur={showGreetingText}
        onFocus={showRoleText}
        tabIndex={0}
      >
        <span aria-hidden="true" className="hidden xl:block">
          <span className="block min-h-[0.96em]">
            {visibleFirstLine}
            {shouldShowCursor && !cursorIsOnSecondLine && <TypewriterCursor />}
          </span>
          <span className="block min-h-[0.96em]">
            {visibleSecondLine}
            {shouldShowCursor && cursorIsOnSecondLine && <TypewriterCursor />}
          </span>
        </span>
        <span aria-hidden="true" className="block w-full whitespace-nowrap xl:hidden">
          {visibleSingleLine}
          {shouldShowCursor && <TypewriterCursor className="max-sm:h-8 max-sm:w-0.5 lg:h-16" />}
        </span>
      </h1>
    </div>
  )
}

function TypewriterCursor({ className = '' }: { className?: string }) {
  return (
    <span className={`typewriter-cursor ml-2 inline-block h-10 w-1 translate-y-1 bg-clay align-baseline sm:h-14 lg:h-20 ${className}`} />
  )
}

function BuildProfileCard({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div
      className={`${className} max-w-2xl border border-paper-line bg-parchment/70 text-deep-water shadow-[8px_8px_0_rgba(47,126,120,0.08)]`}
      aria-label="Profile facts"
    >
      <div className="flex items-center justify-between gap-4 border-b border-paper-line px-4 py-2.5">
        <p className="font-mono text-xs font-bold tracking-[0.14em] text-ink-muted">build.profile</p>
        <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-leaf">
          <span className="status-dot-pulse h-2 w-2 rounded-full bg-leaf" aria-hidden="true" />
          ready
        </p>
      </div>

      <dl className="divide-y divide-paper-line">
        {heroBuildMetadata.map((item) => (
          <div
            key={item.field}
            className={`grid gap-1 px-4 py-3 ${compact ? '' : 'sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6'}`}
          >
            <dt className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-muted">{item.field}</dt>
            <dd className="min-w-0">
              <p className="text-lg font-bold leading-tight tracking-normal text-deep-water sm:text-xl">{item.value}</p>
              <p className="mt-1 text-sm font-semibold leading-tight text-ink-muted">{item.detail}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function HomePage() {
  const [introShouldPlay] = useState(shouldPlayIntro)
  const [showIntro, setShowIntro] = useState(introShouldPlay)
  const [introHandoffComplete, setIntroHandoffComplete] = useState(!introShouldPlay)
  const { ref: timelineRef, isInView: timelineIsInView } = useInView('-90px')

  useEffect(() => {
    if (!introShouldPlay) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const introTimer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem(introStorageKey, 'true')
      } catch {
        // Session storage can be unavailable in strict browser modes.
      }
      setShowIntro(false)
    }, introOverlayMs)

    const handoffTimer = window.setTimeout(() => {
      setIntroHandoffComplete(true)
      document.body.style.overflow = previousOverflow
    }, introHandoffMs)

    return () => {
      window.clearTimeout(introTimer)
      window.clearTimeout(handoffTimer)
      document.body.style.overflow = previousOverflow
    }
  }, [introShouldPlay])

  return (
    <>
      {showIntro && (
        <div className="home-intro-overlay pointer-events-none fixed inset-0 z-[80] overflow-hidden bg-warm-white text-deep-water" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(239,183,62,0.2),transparent_35%)]" />
          <div className="home-intro-wordmark absolute inset-0 grid place-items-center px-6 text-center">
            <div>
              <p className="inline-flex items-baseline ![font-family:var(--font-editorial)] text-5xl leading-none !font-normal !tracking-normal sm:text-7xl">
                macancela
                <span className="home-intro-dot mx-[0.05em] inline-flex h-[0.18em] w-[0.18em] rounded-full bg-tidal" />
                tech
              </p>
              <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
                product design / full-stack engineering / data-driven
              </p>
            </div>
          </div>
        </div>
      )}

      <section className={`relative isolate overflow-hidden border-b border-paper-line bg-warm-white px-6 pt-24 pb-14 text-ink max-xl:pt-32 md:pt-28 max-xl:md:pt-36 ${showIntro ? 'home-hero-after-intro' : ''}`}>
        <div className="absolute inset-x-0 top-0 -z-10 h-1 bg-tidal" aria-hidden="true" />
        <div className="absolute top-28 right-[4vw] -z-10 h-72 w-72 rounded-full bg-sun/15 blur-3xl" aria-hidden="true" />
        <div className="mx-auto max-w-[94rem]">
          <div className="grid gap-8 md:max-xl:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1.28fr)] md:max-xl:items-stretch xl:min-h-[calc(100vh-10rem)] xl:grid-cols-[minmax(0,1.05fr)_minmax(34rem,0.95fr)] xl:items-start xl:gap-12 xl:pt-16">
            <AnimatedSection className="md:max-xl:col-span-2 xl:max-2xl:relative xl:max-2xl:z-20">
              <TypewriterHeading isActive={introHandoffComplete} />

              <BuildProfileCard
                className={`mt-12 max-xl:hidden ${introShouldPlay && !introHandoffComplete ? 'build-profile-intro-handoff' : ''}`}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.08} className="relative md:max-xl:col-start-2 md:max-xl:row-start-2 md:max-xl:h-full xl:-ml-24 xl:justify-self-start 2xl:-ml-24">
              <div className="relative mx-auto grid w-full max-w-2xl grid-cols-2 items-stretch pt-4 md:block md:min-h-[28rem] md:max-w-none md:pt-6 md:max-xl:h-full xl:min-h-[38rem] xl:w-[46rem] xl:max-w-[46rem]">
                <div className="relative z-10 h-full min-h-64 w-full md:min-h-[24rem] md:w-[82%] md:max-xl:min-h-full md:max-xl:w-[60%] md:max-xl:max-w-sm xl:mx-0 xl:h-auto xl:min-h-0 xl:w-[60%] xl:max-w-none">
                  <picture className="contents">
                    <source type="image/avif" srcSet={heroPortraitAvifSrcSet} sizes={heroPortraitSizes} />
                    <source type="image/webp" srcSet={heroPortraitWebpSrcSet} sizes={heroPortraitSizes} />
                    <img
                      src="/karina-portrait-800.jpg"
                      srcSet={heroPortraitJpegSrcSet}
                      sizes={heroPortraitSizes}
                      width="1200"
                      height="1500"
                      alt="Karina Macancela"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="relative z-10 h-full w-full border border-r-0 border-paper-line bg-parchment object-cover object-center p-2 md:border-r xl:aspect-[4/5] xl:h-auto"
                    />
                  </picture>
                </div>

                <div className="relative z-30 -ml-3 flex h-full min-w-0 flex-col justify-between border border-l-0 border-paper-line bg-sun-light p-3 text-night sm:p-5 md:absolute md:top-16 md:right-4 md:ml-0 md:block md:h-auto md:w-[48%] md:border-l md:border-sand-dark md:p-5 md:shadow-xl md:transition-transform md:duration-300 md:-rotate-1 md:hover:rotate-0 lg:w-[47%] lg:p-6 xl:top-20 xl:right-auto xl:left-[52%] xl:w-96 xl:max-w-none xl:shadow-2xl">
                  <div
                    className="pointer-events-none absolute top-0 left-1/2 hidden h-10 w-24 -translate-x-1/2 -translate-y-1/2 rotate-3 border border-paper-line bg-warm-white/80 shadow-md md:block"
                    aria-hidden="true"
                  />

                  <div className="min-w-0">
                    <p className="text-sm font-bold uppercase tracking-[0.08em] text-night max-[360px]:text-xs md:pr-12">
                      <span className="max-[360px]:hidden">Contact Me</span>
                      <span className="hidden max-[360px]:inline">Contact</span>
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-0 inline-block max-w-full break-words text-sm font-semibold text-night/75 underline decoration-night/20 underline-offset-4 transition-colors hover:text-night max-[360px]:text-xs md:mt-1"
                    >
                      {siteConfig.email}
                    </a>
                  </div>

                  <p className="mt-3 text-sm font-semibold leading-snug tracking-normal text-night min-[500px]:max-sm:text-lg sm:mt-5 sm:text-lg xl:hidden">
                    Full-stack software engineer focused on intuitive interfaces, solid architecture, and product clarity.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 xl:hidden">
                    {resumeLink && (
                      <Button href={resumeLink.href} download className="min-h-10 px-4 py-2 text-xs">
                        <ProfileIcon icon={resumeLink.icon} className="h-4 w-4" />
                        Resume
                      </Button>
                    )}
                    <Button to="/projects" variant="outline" className="min-h-10 px-4 py-2 text-xs">Projects</Button>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-night/20 pt-4 sm:gap-x-8 xl:hidden">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-bold text-night transition-colors hover:text-clay-dark"
                      >
                        {link.label}
                        <ProfileIcon icon={link.icon} className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>

                  <p className="mt-8 hidden text-xl font-semibold leading-snug tracking-normal text-night sm:mt-9 sm:text-2xl xl:block">
                    Full-stack SWE with an eye for frontend and a habit of turning complex product ideas into clear systems.
                  </p>

                  <p className="mt-5 hidden text-base leading-relaxed text-night/75 xl:block">
                    {siteConfig.subtitle}
                  </p>

                  <div className="mt-8 hidden flex-wrap gap-3 xl:flex">
                    {resumeLink && (
                      <Button href={resumeLink.href} download>
                        <ProfileIcon icon={resumeLink.icon} className="h-4 w-4" />
                        Resume
                      </Button>
                    )}
                    <Button to="/projects" variant="outline">Projects</Button>
                  </div>

                  <div className="mt-7 hidden gap-10 border-t border-night/20 pt-5 xl:flex">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-bold text-night transition-colors hover:text-clay-dark"
                      >
                        {link.label}
                        <ProfileIcon icon={link.icon} className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="md:max-xl:relative md:max-xl:z-20 md:max-xl:col-start-1 md:max-xl:row-start-2 md:max-xl:pt-6 xl:hidden">
              <BuildProfileCard
                compact
                className={`mx-auto w-full md:max-xl:max-w-none ${introShouldPlay && !introHandoffComplete ? 'build-profile-intro-handoff' : ''}`}
              />
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.15}>
            <div id="selected-work" className="mt-20 scroll-mt-28">
              <div className="grid gap-5 md:grid-cols-3">
                {featuredProjects.map((project) => {
                  const projectLink = project.links[0]

                  return (
                    <article key={project.id} className="group">
                      <div className="relative flex h-full min-h-[15rem] flex-col border border-paper-line bg-parchment p-5 pb-12 transition-transform duration-300 group-hover:-translate-y-1">
                        <div>
                          <div className="flex flex-nowrap gap-2 [&>span]:shrink-0 [&>span]:whitespace-nowrap">
                            <Badge variant="sun">
                              <HomeProjectChipText label={homeProjectKindChips[project.id]} />
                            </Badge>
                            <Badge variant="water">
                              <HomeProjectChipText label={homeProjectStackChips[project.id]} />
                            </Badge>
                          </div>
                          <h2 className="mt-8 max-w-sm text-3xl font-bold leading-[1.05] tracking-[-0.02em] text-deep-water">
                            {project.title}
                          </h2>
                        </div>
                        <div className="mt-5">
                          <p className="text-sm leading-relaxed text-ink-light">{project.summary}</p>
                        </div>
                        {projectLink && (
                          <a
                            href={projectLink.href}
                            target={projectLink.external ? '_blank' : undefined}
                            rel={projectLink.external ? 'noopener noreferrer' : undefined}
                            aria-label={`Open ${project.title}`}
                            className="absolute right-5 bottom-5 inline-flex min-h-11 min-w-11 items-end justify-end text-xl font-bold leading-none text-deep-water transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:translate-x-0.5 hover:text-tidal focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tidal"
                          >
                            <span aria-hidden="true">↗</span>
                          </a>
                        )}
                      </div>
                    </article>
                  )
                })}
              </div>
              <div className="mt-6 flex justify-end">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 py-2 text-sm font-bold text-tidal transition-colors duration-300 hover:text-deep-water focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tidal"
                >
                  Explore more work
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-b border-paper-line bg-parchment px-6 py-20 md:py-28">
        <div className="mx-auto w-full max-w-[94rem] px-3 md:px-6 xl:px-8">
          <AnimatedSection
            className="origin-left transition duration-700 ease-out"
            initialClassName="translate-y-4 opacity-100"
            animationClassName="translate-y-0 opacity-100"
          >
            <h2 className={homeSectionHeadingClass}>
              I turn product ideas into efficient, scalable software that’s ready for real users.
            </h2>
          </AnimatedSection>
        </div>

        <div className="mx-auto w-full max-w-7xl px-3 md:px-6 xl:px-0">
          <div className="mt-5 grid gap-4 md:mt-7 md:gap-y-8 xl:grid-cols-[0.95fr_1.05fr] xl:gap-x-10 xl:gap-y-8">
            <AnimatedSection delay={0.12} className="order-1 w-full max-w-[69.375rem] md:row-start-1 xl:order-2 xl:col-span-1 xl:col-start-2 xl:max-w-none xl:self-end">
              <p className="home-capability-copy text-xl font-medium leading-relaxed text-deep-water md:text-2xl">
                Building systems, aligning teams, and shipping with care means moving through the full Agile lifecycle with both product judgment and engineering execution: clarifying scope, designing usable interfaces, shaping backend contracts, protecting data access, validating details through QA, and turning launch feedback into the next iteration.
              </p>
            </AnimatedSection>

            <div className="order-2 grid gap-4 md:row-start-2 md:grid-cols-[minmax(0,1fr)_minmax(13rem,18rem)] md:items-center md:gap-x-6 md:gap-y-8 lg:grid-cols-[minmax(0,38rem)_minmax(13rem,18rem)] lg:justify-center lg:-translate-x-12 min-[1180px]:-translate-x-20 xl:contents xl:translate-x-0">
              <div className="md:col-start-1 xl:order-1 xl:row-span-2 xl:row-start-1">
                <LifecycleWheel />
              </div>

              <div className="w-full md:col-start-2 md:self-center xl:order-3 xl:col-start-2 xl:row-start-2 xl:self-start">
                <div className="mx-auto grid w-full max-w-[22rem] gap-3 sm:max-w-none sm:grid-cols-3 md:max-w-[18rem] md:grid-cols-1 xl:max-w-none xl:grid-cols-3">
                  {capabilityHighlights.map((item, index) => (
                    <AnimatedSection
                      key={item.title}
                      className={`h-full ${capabilityHighlightDelayClasses[index] ?? ''}`}
                      initialClassName="translate-x-8 opacity-0"
                      animationClassName="translate-x-0 opacity-100 transition duration-700 ease-out motion-reduce:transition-none"
                    >
                      <article className="flex min-h-36 flex-col items-center justify-center rounded-lg border border-paper-line bg-warm-white/70 p-4 text-center md:min-h-32 xl:min-h-36">
                        <div className="flex h-12 w-12 items-center justify-center text-tidal">
                          <CapabilityHighlightIcon icon={item.icon} />
                        </div>
                        <h3 className="mt-4 text-xl font-bold leading-tight tracking-[-0.01em] text-deep-water">
                          {item.title}
                        </h3>
                      </article>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="mx-auto max-w-[94rem]">
          <ClientLogoGrid />
        </div>
      </section>

      <section id="experience" className="scroll-mt-28 border-b border-paper-line bg-warm-white px-6 pt-20 pb-14 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="grid gap-8 xl:grid-cols-[0.75fr_1.25fr]">
              <div>
                <h2 className={`${homeSectionHeadingClass} max-w-none xl:max-w-xl xl:![text-wrap-style:balance]`}>
                  I understand software from multiple angles.
                </h2>
              </div>

              <div>
                <div ref={timelineRef} className="space-y-10">
                  {experience.slice(0, 3).map((item, index) => (
                    <article key={item.id} className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-4 gap-y-5 md:grid-cols-[12rem_2rem_minmax(0,1fr)] md:gap-5 lg:grid-cols-[13rem_2rem_minmax(0,1fr)] xl:grid-cols-[0.55fr_2rem_1fr]">
                      <div className="col-start-2 md:col-start-auto md:text-right">
                        <p className="font-bold text-deep-water">{item.company}</p>
                        <p className="mt-1 text-sm text-ink-muted">{item.startDate} - {item.endDate}</p>
                      </div>
                      <div className="relative col-start-1 row-span-2 row-start-1 flex justify-center md:col-start-auto md:row-auto md:row-span-1">
                        <span
                          className={`relative z-10 mt-1 h-4 w-4 rounded-full transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:delay-0 ${timelineColors[index] ?? 'bg-tidal'} ${timelineDotDelayClasses[index] ?? ''} ${timelineIsInView ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-3 scale-75 opacity-0'}`}
                        />
                        <span className="absolute top-1 bottom-[-2.5rem] w-px border-l border-dashed border-paper-line" aria-hidden="true" />
                      </div>
                      <div className="col-start-2 md:col-start-auto">
                        <h3 className="text-2xl font-bold tracking-[-0.01em] text-deep-water">{item.role}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.context}</p>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="mt-10 flex justify-end">
                  <Link
                    to="/experience"
                    className="group inline-flex items-center gap-2 py-2 text-sm font-bold text-tidal transition-colors duration-300 hover:text-deep-water focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tidal"
                  >
                    View full experience
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </>
  )
}
