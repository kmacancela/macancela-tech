import { useEffect, useState } from 'react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { projects } from '../data/projects'
import { useInView } from '../hooks/useInView'
import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
  index: number
}

const accentClasses = ['bg-deep-water', 'bg-clay', 'bg-moss', 'bg-tidal', 'bg-sun']
const decodeCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const decodableCharacterPattern = /[A-Za-z0-9]/

function countDecodableCharacters(label: string) {
  return Array.from(label).filter((character) => decodableCharacterPattern.test(character)).length
}

function scrambleLabel(label: string, revealedCharacters: number) {
  let decodableIndex = 0

  return Array.from(label).map((character) => {
    if (!decodableCharacterPattern.test(character)) return character

    decodableIndex += 1
    if (decodableIndex <= revealedCharacters) return character

    const nextIndex = Math.floor(Math.random() * decodeCharacters.length)
    return decodeCharacters[nextIndex]
  }).join('')
}

interface DecodingStackBadgeProps {
  active: boolean
  delayIndex: number
  label: string
}

function DecodingStackBadge({ active, delayIndex, label }: DecodingStackBadgeProps) {
  const [displayText, setDisplayText] = useState(label)

  useEffect(() => {
    if (!active) return

    if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(label)
      return
    }

    const decodableCount = countDecodableCharacters(label)
    if (decodableCount === 0) {
      setDisplayText(label)
      return
    }

    let frame = 0
    let intervalId: number | undefined
    const startDelay = 120 + delayIndex * 44

    const timeoutId = window.setTimeout(() => {
      setDisplayText(scrambleLabel(label, 0))

      intervalId = window.setInterval(() => {
        frame += 1
        const revealedCharacters = Math.min(decodableCount, Math.floor(frame / 2))

        if (revealedCharacters >= decodableCount) {
          setDisplayText(label)
          if (intervalId !== undefined) window.clearInterval(intervalId)
          return
        }

        setDisplayText(scrambleLabel(label, revealedCharacters))
      }, 38)
    }, startDelay)

    return () => {
      window.clearTimeout(timeoutId)
      if (intervalId !== undefined) window.clearInterval(intervalId)
    }
  }, [active, delayIndex, label])

  return (
    <span className="project-stack-badge">
      <Badge>
        <span aria-hidden="true">{displayText}</span>
        <span className="sr-only">{label}</span>
      </Badge>
    </span>
  )
}

interface StackFocusBadgesProps {
  tech: string[]
}

function StackFocusBadges({ tech }: StackFocusBadgesProps) {
  const { ref, isInView } = useInView('-20px')

  return (
    <div ref={ref} className="mt-4 flex flex-wrap gap-2">
      {tech.map((item, techIndex) => (
        <DecodingStackBadge key={item} active={isInView} delayIndex={techIndex} label={item} />
      ))}
    </div>
  )
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const reversed = index % 2 === 1
  const accentClass = accentClasses[index % accentClasses.length]
  const entryStepClass = `project-card-step-${Math.min(index + 1, 5)}`
  const { ref, isInView } = useInView()
  const details = [
    {
      label: 'Challenge',
      value: project.problem,
    },
    {
      label: 'My role',
      value: project.role,
    },
  ]

  return (
    <div
      ref={ref}
      className={`project-card-entry ${entryStepClass} ${isInView ? 'project-card-in' : 'project-card-initial'}`}
    >
      <article
        id={project.id}
        className="scroll-mt-28 overflow-hidden border border-paper-line bg-warm-white shadow-sm"
      >
        <div className="grid lg:grid-cols-3">
          <section
            className={`order-1 p-6 sm:p-8 lg:col-span-2 lg:p-10 ${
              reversed ? 'lg:order-2' : 'lg:order-1'
            } project-card-main`}
          >
            <div className="max-w-4xl">
              <h2 className="font-display text-4xl leading-[1.02] tracking-[-0.02em] text-ink md:text-6xl">
                {project.title}
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-light md:text-xl">{project.summary}</p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
              {details.map((detail, detailIndex) => (
                <section
                  key={detail.label}
                  className={detailIndex === 0 ? 'md:pr-8' : 'md:pl-8'}
                >
                  <h3 className="text-sm font-semibold text-deep-water">{detail.label}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">{detail.value}</p>
                </section>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-deep-water">What shipped</h3>
              <ul className="mt-4 grid gap-x-8 md:grid-cols-2">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 py-4 text-sm leading-relaxed text-ink-light"
                  >
                    <span className={`mt-2 h-2 w-2 shrink-0 ${accentClass}`} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <aside
            className={`order-2 border-t border-paper-line bg-sand/60 p-6 sm:p-8 lg:col-span-1 lg:border-t-0 ${
              reversed ? 'lg:order-1 lg:border-r' : 'lg:order-2 lg:border-l'
            } project-card-side`}
          >
            <div className="flex h-full flex-col justify-between gap-10">
              <div className="grid grid-cols-2 items-start gap-8 lg:block lg:space-y-8">
                <div>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-[0.08em] text-ink-muted">Type</dt>
                      <dd className="mt-1 text-base font-bold text-ink">{project.kind}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-[0.08em] text-ink-muted">Status</dt>
                      <dd className="mt-1 text-base font-bold text-deep-water">{project.status}</dd>
                    </div>
                  </dl>
                </div>

                <div className="lg:border-t lg:border-sand-dark/70 lg:pt-6">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-deep-water">Stack focus</p>
                  <StackFocusBadges tech={project.tech} />
                </div>
              </div>

              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-3 border-t border-sand-dark/70 pt-6">
                  {project.links.map((link) => (
                    <Button key={link.href} href={link.href} target={link.external ? '_blank' : undefined} variant="outline" className="w-full">
                      {link.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>
      </article>
    </div>
  )
}

export function ProjectsPage() {
  return (
    <div className="animate-[fade-in_0.4s_ease_both]">
      <section className="px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="sr-only">Projects</h1>
          <div className="space-y-8 md:space-y-10">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
