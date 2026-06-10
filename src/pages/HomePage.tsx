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

const featuredProjects = projects.filter((project) => project.featured)
const leadProject = featuredProjects[0]
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
  const [targetText, setTargetText] = useState(heroGreetingText)
  const [displayText, setDisplayText] = useState(() => (
    shouldTypeHeroGreeting() ? '' : heroGreetingText
  ))
  const [returnAfterRole, setReturnAfterRole] = useState(false)

  useEffect(() => () => {
    if (returnTimerId.current !== null) window.clearTimeout(returnTimerId.current)
  }, [])

  function clearReturnTimer() {
    if (returnTimerId.current === null) return
    window.clearTimeout(returnTimerId.current)
    returnTimerId.current = null
  }

  function showRoleText() {
    clearReturnTimer()
    setReturnAfterRole(false)
    setTargetText((currentText) => (currentText === heroRoleText ? currentText : heroRoleText))
  }

  function showGreetingText() {
    clearReturnTimer()
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
  const cursorIsOnSecondLine = displayText.includes('\n')
  const shouldShowCursor = isActive || displayText.length > 0

  return (
    <div
      className="relative w-full max-w-3xl cursor-default"
      onPointerEnter={showRoleText}
      onPointerLeave={showGreetingText}
    >
      <span
        aria-hidden="true"
        className="invisible block select-none font-display text-5xl leading-[0.96] tracking-normal sm:text-7xl lg:text-[6.25rem]"
      >
        <span className="block min-h-[0.96em]">
          {heroGreetingLines[0]}
        </span>
        <span className="block min-h-[0.96em]">
          {heroGreetingLines[1]}
        </span>
      </span>

      <h1
        className="pointer-events-none absolute inset-0 font-display text-5xl leading-[0.96] tracking-normal text-deep-water outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tidal sm:text-7xl lg:text-[6.25rem]"
        aria-label={targetText.replace('\n', ' ')}
        onBlur={showGreetingText}
        onFocus={showRoleText}
        tabIndex={0}
      >
        <span aria-hidden="true">
          <span className="block min-h-[0.96em]">
            {visibleFirstLine}
            {shouldShowCursor && !cursorIsOnSecondLine && <TypewriterCursor />}
          </span>
          <span className="block min-h-[0.96em]">
            {visibleSecondLine}
            {shouldShowCursor && cursorIsOnSecondLine && <TypewriterCursor />}
          </span>
        </span>
      </h1>
    </div>
  )
}

function TypewriterCursor() {
  return (
    <span className="typewriter-cursor ml-2 inline-block h-10 w-1 translate-y-1 bg-clay align-baseline sm:h-14 lg:h-20" />
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

      <section className={`relative isolate overflow-hidden border-b border-paper-line bg-warm-white px-6 pt-24 pb-14 text-ink md:pt-28 ${showIntro ? 'home-hero-after-intro' : ''}`}>
        <div className="absolute inset-x-0 top-0 -z-10 h-1 bg-tidal" aria-hidden="true" />
        <div className="absolute top-28 right-[4vw] -z-10 h-72 w-72 rounded-full bg-sun/15 blur-3xl" aria-hidden="true" />
        <div className="mx-auto max-w-[94rem]">
          <div className="grid gap-12 lg:min-h-[calc(100vh-10rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(34rem,0.95fr)] lg:items-start lg:pt-16">
            <AnimatedSection>
              <TypewriterHeading isActive={introHandoffComplete} />

              <div
                className={`mt-12 max-w-2xl border border-paper-line bg-parchment/70 text-deep-water shadow-[8px_8px_0_rgba(47,126,120,0.08)] ${introShouldPlay && !introHandoffComplete ? 'build-profile-intro-handoff' : ''}`}
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
                    <div key={item.field} className="grid gap-1 px-4 py-3 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6">
                      <dt className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-muted">{item.field}</dt>
                      <dd className="min-w-0">
                        <p className="text-lg font-bold leading-tight tracking-normal text-deep-water sm:text-xl">{item.value}</p>
                        <p className="mt-1 text-sm font-semibold leading-tight text-ink-muted">{item.detail}</p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08} className="relative lg:-ml-20 lg:justify-self-start xl:-ml-24 2xl:-ml-24">
              <div className="relative mx-auto w-full max-w-[42rem] pt-16 lg:min-h-[36rem] lg:pt-6 xl:max-w-[46rem] xl:min-h-[38rem]">
                <div className="relative z-10 mx-auto max-w-[28rem] lg:mx-0 lg:w-[58%] lg:max-w-none xl:w-[60%]">
                  <img
                    src="/karina-portrait.jpg"
                    alt="Karina Macancela"
                    className="relative z-10 aspect-[4/5] w-full border border-paper-line bg-parchment object-cover object-center p-2"
                  />
                </div>

                <div className="relative z-30 mt-8 max-w-sm origin-top -rotate-1 border border-sand-dark bg-sun-light p-6 text-night shadow-2xl transition-transform duration-300 hover:rotate-0 lg:absolute lg:top-24 lg:left-[50%] lg:mt-0 lg:w-80 xl:top-20 xl:left-[51%] xl:w-96">
                  <div
                    className="pointer-events-none absolute top-0 left-1/2 h-10 w-24 -translate-x-1/2 -translate-y-1/2 rotate-3 border border-paper-line bg-warm-white/80 shadow-md"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute right-0 bottom-0 h-12 w-12 border-t border-l border-sand-dark bg-sand"
                    aria-hidden="true"
                  />

                  <p className="pr-12 text-sm font-bold uppercase tracking-[0.08em] text-night">Contact Me</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 inline-block break-words text-sm font-semibold text-night/75 underline decoration-night/20 underline-offset-4 transition-colors hover:text-night"
                  >
                    {siteConfig.email}
                  </a>

                  <p className="mt-9 text-2xl font-semibold leading-snug tracking-normal text-night">
                    Full-stack SWE with an eye for frontend and a habit of turning complex product ideas into clear systems.
                  </p>

                  <p className="mt-5 text-base leading-relaxed text-night/75">
                    {siteConfig.subtitle}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {resumeLink && (
                      <Button href={resumeLink.href} download>
                        <ProfileIcon icon={resumeLink.icon} className="h-4 w-4" />
                        Resume
                      </Button>
                    )}
                    <Button to="/projects" variant="outline">Projects</Button>
                  </div>

                  <div className="mt-7 flex gap-5 border-t border-sand-dark pt-5">
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
          </div>

          <AnimatedSection delay={0.15}>
            <div id="selected-work" className="mt-20 scroll-mt-28">
              <div className="mb-4 flex items-end justify-between gap-4">
                <p className="text-sm font-bold uppercase tracking-[0.08em] text-ink-muted">Selected Work</p>
                <Button to="/projects" variant="ghost">Explore more work</Button>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {featuredProjects.map((project, index) => (
                  <article key={project.id} className="group">
                    <p className="font-mono text-sm text-ink-muted">[{String(index + 1).padStart(2, '0')}]</p>
                    <div className="mt-3 flex min-h-[18rem] flex-col justify-between border border-paper-line bg-parchment p-5 transition-transform duration-300 group-hover:-translate-y-1">
                      <div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant={project.status === 'Active' ? 'leaf' : 'tidal'}>{project.status}</Badge>
                          <Badge variant="sun">{project.kind}</Badge>
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
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-clay">What do I help?</p>
            <h2 className="mt-5 max-w-2xl text-5xl font-bold leading-[1.02] tracking-[-0.03em] text-deep-water md:text-6xl">
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
                <p className="text-sm font-bold uppercase tracking-[0.08em] text-ink-muted">My Work Experience</p>
                <h2 className="mt-5 max-w-xl text-5xl font-bold leading-[1.02] tracking-[-0.03em] text-deep-water md:text-6xl">
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
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-clay">Stack Range</p>
            <h2 className="mt-5 max-w-2xl text-5xl font-bold leading-[1.02] tracking-[-0.03em] text-deep-water md:text-6xl">
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
                  <Badge variant="leaf">Current build</Badge>
                  <h2 className="mt-5 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-deep-water md:text-5xl">
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
