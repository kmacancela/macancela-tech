import { useEffect, useRef, useState } from 'react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { ProfileIcon } from '../components/ui/ProfileIcon'
import { experience } from '../data/experience'
import { profileLinks } from '../data/profileLinks'
import { projects } from '../data/projects'
import { siteConfig } from '../data/siteConfig'
import { skillGroups } from '../data/skills'

const homeProjectIds = ['bird-haven', 'kary-waves', 'atrilyx']
const homeProjectStackChips: Record<string, string> = {
  'bird-haven': 'TS, Python, PHP',
  'kary-waves': 'React Native, TS, Node.js, PostgreSQL',
  atrilyx: 'Vue, TS, PHP, PostgreSQL',
}
const featuredProjects = homeProjectIds
  .map((projectId) => projects.find((project) => project.id === projectId))
  .filter((project) => project !== undefined)
const leadProject = projects.find((project) => project.id === 'kary-waves')
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

const proofPoints = [
  { value: '9', label: 'Years building product systems' },
  { value: '300+', label: 'SaaS clients supported' },
  { value: '10M+', label: 'Daily events surfaced' },
  { value: '40%', label: 'Onboarding time reduced' },
]

const serviceCards = [
  {
    label: '01',
    title: 'Product Frontend',
    body: 'React, Vue, and React Native interfaces that make complex workflows easier to use.',
  },
  {
    label: '02',
    title: 'Full-stack Systems',
    body: 'APIs, auth, data models, reporting, and integrations built with production constraints in mind.',
  },
  {
    label: '03',
    title: 'Launch Clarity',
    body: 'Ambiguous ideas shaped into scopes, beta loops, documentation, and shippable delivery paths.',
  },
]

const timelineColors = ['bg-tidal', 'bg-clay', 'bg-sun']
const introStorageKey = 'macancela-home-intro-seen'
const introOverlayMs = 1650
const introHandoffMs = 2500
const initialGreetingHoldMs = 420

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
              <div className="relative mx-auto grid w-full max-w-2xl grid-cols-2 items-stretch pt-4 md:block md:min-h-[28rem] md:max-w-none md:pt-6 md:max-xl:h-full xl:min-h-[38rem] xl:max-w-[46rem]">
                <div className="relative z-10 h-full min-h-64 w-full md:min-h-[24rem] md:w-[82%] md:max-xl:min-h-full md:max-xl:w-[60%] md:max-xl:max-w-sm xl:mx-0 xl:h-auto xl:min-h-0 xl:w-[60%] xl:max-w-none">
                  <img
                    src="/karina-portrait.jpg"
                    alt="Karina Macancela"
                    className="relative z-10 h-full w-full border border-r-0 border-paper-line bg-parchment object-cover object-center p-2 md:border-r xl:aspect-[4/5] xl:h-auto"
                  />
                </div>

                <div className="relative z-30 -ml-3 flex h-full min-w-0 flex-col justify-between border border-l-0 border-paper-line bg-sun-light p-3 text-night sm:p-5 md:absolute md:top-16 md:right-4 md:ml-0 md:block md:h-auto md:w-[48%] md:border-l md:border-sand-dark md:p-5 md:shadow-xl md:transition-transform md:duration-300 md:-rotate-1 md:hover:rotate-0 lg:w-[47%] lg:p-6 xl:top-20 xl:right-auto xl:left-[52%] xl:w-96 xl:max-w-none xl:shadow-2xl">
                  <div
                    className="pointer-events-none absolute top-0 left-1/2 hidden h-10 w-24 -translate-x-1/2 -translate-y-1/2 rotate-3 border border-paper-line bg-warm-white/80 shadow-md md:block"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute right-0 bottom-0 hidden h-12 w-12 border-t border-l border-sand-dark bg-sand md:block"
                    aria-hidden="true"
                  />

                  <p className="text-sm font-bold uppercase tracking-[0.08em] text-night max-[360px]:text-xs md:pr-12">
                    <span className="max-[360px]:hidden">Contact Me</span>
                    <span className="hidden max-[360px]:inline">Contact</span>
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 inline-block break-words text-sm font-semibold text-night/75 underline decoration-night/20 underline-offset-4 transition-colors hover:text-night max-[360px]:text-xs"
                  >
                    <span className="max-[420px]:hidden">{siteConfig.email}</span>
                    <span className="hidden max-[420px]:inline">Email me</span>
                  </a>

                  <p className="mt-3 text-sm font-semibold leading-snug tracking-normal text-night sm:mt-5 sm:text-lg xl:hidden">
                    Full-stack SWE focused on frontend polish and clear systems.
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

                  <div className="mt-4 flex flex-wrap gap-2 border-t border-sand-dark pt-4 sm:gap-3 xl:hidden">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-night transition-colors hover:text-clay-dark"
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

                  <div className="mt-7 hidden gap-5 border-t border-sand-dark pt-5 xl:flex">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-night transition-colors hover:text-clay-dark"
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
              <div className="mb-4 flex justify-end">
                <Button to="/projects" variant="ghost">Explore more work</Button>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {featuredProjects.map((project) => (
                  <article key={project.id} className="group">
                    <div className="flex min-h-[18rem] flex-col justify-between border border-paper-line bg-parchment p-5 transition-transform duration-300 group-hover:-translate-y-1">
                      <div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="sun">{project.kind}</Badge>
                          <Badge variant="water">{homeProjectStackChips[project.id]}</Badge>
                        </div>
                        <h2 className="mt-8 max-w-sm text-3xl font-bold leading-[1.05] tracking-[-0.02em] text-deep-water">
                          {project.title}
                        </h2>
                      </div>
                      <p className="mt-8 text-sm leading-relaxed text-ink-muted">{project.summary}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-b border-paper-line bg-parchment px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <AnimatedSection>
            <div className="space-y-4">
              {serviceCards.map((item) => (
                <article key={item.title} className="grid gap-5 border border-paper-line bg-warm-white p-5 sm:grid-cols-[4.5rem_minmax(0,1fr)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-tidal text-sm font-bold text-warm-white">
                    {item.label}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold tracking-[-0.01em] text-deep-water">{item.title}</h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <h2 className="max-w-2xl text-5xl font-bold leading-[1.02] tracking-[-0.03em] text-deep-water md:text-6xl">
              I make software feel calm, capable, and ready for real users.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted">
              I like the middle space where product questions, frontend craft, backend reliability, and user trust all meet. That is where SaaS dashboards, mobile workflows, and internal tools either feel solid or start to fray.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {proofPoints.map((item) => (
                <div key={item.label} className="border-t border-paper-line pt-5">
                  <p className="font-display text-5xl font-bold leading-none text-deep-water">{item.value}</p>
                  <p className="mt-2 max-w-44 text-sm font-semibold leading-tight text-ink-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="experience" className="scroll-mt-28 border-b border-paper-line bg-warm-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <h2 className="max-w-xl text-5xl font-bold leading-[1.02] tracking-[-0.03em] text-deep-water md:text-6xl">
                  Product sense from both sides of the table.
                </h2>
              </div>

              <div className="space-y-10">
                {experience.slice(0, 3).map((item, index) => (
                  <article key={item.id} className="grid gap-5 md:grid-cols-[0.55fr_2rem_1fr]">
                    <div>
                      <p className="font-bold text-deep-water">{item.company}</p>
                      <p className="mt-1 text-sm text-ink-muted">{item.startDate} - {item.endDate}</p>
                    </div>
                    <div className="relative hidden justify-center md:flex">
                      <span className={`relative z-10 mt-1 h-4 w-4 rounded-full ${timelineColors[index] ?? 'bg-tidal'}`} />
                      <span className="absolute top-1 bottom-[-2.5rem] w-px border-l border-dashed border-paper-line" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold tracking-[-0.01em] text-deep-water">{item.role}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.context}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-parchment px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <AnimatedSection>
            <h2 className="max-w-2xl text-5xl font-bold leading-[1.02] tracking-[-0.03em] text-deep-water md:text-6xl">
              Technical range, edited for hiring readers.
            </h2>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.slice(0, 4).map((group, index) => (
              <AnimatedSection key={group.title} delay={index * 0.06}>
                <article className="h-full border border-paper-line bg-warm-white p-5">
                  <p className="font-mono text-xs text-ink-muted">[{String(index + 1).padStart(2, '0')}]</p>
                  <h3 className="mt-5 text-xl font-bold text-deep-water">{group.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{group.skills.join(', ')}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {leadProject && (
          <AnimatedSection delay={0.12}>
            <div className="mx-auto mt-16 max-w-7xl border-t border-paper-line pt-10">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div>
                  <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-deep-water md:text-5xl">
                    {leadProject.title}
                  </h2>
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-ink-muted">{leadProject.problem}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {leadProject.tech.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}
      </section>
    </>
  )
}
