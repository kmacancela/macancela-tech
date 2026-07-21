import { useEffect, useState } from 'react'
import { ArrowUpIcon, ArrowUpRightIcon, PlusIcon } from '@phosphor-icons/react'
import { Link } from 'react-router'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Badge } from '../components/ui/Badge'
import { projects } from '../data/projects'
import type { Project } from '../types'

type FeaturedProjectData = Project & Required<Pick<Project, 'image' | 'imageAlt'>>

interface FeaturedProjectProps {
  project: FeaturedProjectData
  index: number
  isDetailsOpen: boolean
  onToggleDetails: () => void
}

function isFeaturedProject(project: Project): project is FeaturedProjectData {
  return Boolean(project.image && project.imageAlt)
}

function StackBadges({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <Badge key={item} variant="water">{item}</Badge>
      ))}
    </div>
  )
}

function ProjectLinks({ project }: { project: Project }) {
  if (project.links.length === 0) return null

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-3">
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
          className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap border-b border-deep-water py-2 text-sm font-bold text-deep-water transition-colors duration-200 hover:text-tidal focus:outline-none focus-visible:ring-2 focus-visible:ring-tidal focus-visible:ring-offset-4 focus-visible:ring-offset-warm-white"
        >
          {link.label}
          <ArrowUpRightIcon
            aria-hidden="true"
            className="h-4 w-4"
            weight="bold"
          />
        </a>
      ))}
    </div>
  )
}

function FeaturedProject({ project, index, isDetailsOpen, onToggleDetails }: FeaturedProjectProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const imageFollowsCopy = index % 2 === 1
  const detailsId = `${project.id}-details`
  const imageBasePath = project.image.replace(/\.[^.]+$/, '')
  const loadImmediately = index < 2
  const sectionSpacing = index === 0
    ? 'pt-0'
    : 'pt-12 md:pt-16 lg:pt-20'

  return (
    <article id={project.id} className={`scroll-mt-28 ${sectionSpacing}`}>
      <div className="grid min-w-0 gap-9 xl:grid-cols-[minmax(0,1.12fr)_minmax(24rem,0.88fr)] xl:items-start xl:gap-14">
        <figure className={`min-w-0 ${imageFollowsCopy ? 'xl:order-2' : ''}`}>
          <div className="project-preview-frame relative aspect-[8/5] overflow-hidden border border-paper-line bg-sand/60">
            <div
              aria-hidden="true"
              className={`absolute inset-0 bg-sand/60 transition-opacity duration-300 motion-reduce:transition-none ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}
            />
            <picture className="block h-full w-full">
              <source
                type="image/avif"
                srcSet={`${imageBasePath}-720.avif 720w, ${imageBasePath}-1280.avif 1280w`}
                sizes="(min-width: 1280px) 55vw, calc(100vw - 3rem)"
              />
              <source
                type="image/webp"
                srcSet={`${imageBasePath}-720.webp 720w, ${imageBasePath}-1280.webp 1280w`}
                sizes="(min-width: 1280px) 55vw, calc(100vw - 3rem)"
              />
              <img
                src={project.image}
                alt={project.imageAlt}
                width="1440"
                height="900"
                loading={loadImmediately ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                decoding="async"
                onLoad={() => setImageLoaded(true)}
                className={`h-full w-full object-cover object-top transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${imageLoaded ? 'scale-100 opacity-100' : 'scale-[1.006] opacity-0'}`}
              />
            </picture>
          </div>
        </figure>

        <div className={`min-w-0 ${imageFollowsCopy ? 'xl:order-1' : ''}`}>
          <div className="flex min-w-0 items-start justify-between gap-4">
            <h3 className="min-w-0 font-display text-4xl leading-[1.02] tracking-[-0.02em] text-ink sm:text-5xl lg:text-6xl">
              {project.title}
            </h3>
            <Badge variant={project.status === 'Active' ? 'moss' : 'water'}>{project.status}</Badge>
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-light md:text-xl">{project.summary}</p>
          <div className="mt-8 space-y-7 border-t border-paper-line pt-7">
            <StackBadges tech={project.tech} />
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>

      <div className={`relative left-1/2 mt-10 w-[100dvw] -translate-x-1/2 overflow-hidden border-y border-paper-line transition-colors duration-300 ${isDetailsOpen ? 'bg-sand/65' : 'bg-sand/35'}`}>
        <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] px-6">
          <div
            aria-hidden={isDetailsOpen}
            className={`col-start-1 row-start-1 grid transition-[grid-template-rows,opacity] ease-[cubic-bezier(0.22,1,0.36,1)] ${isDetailsOpen ? 'grid-rows-[0fr] opacity-0 duration-[380ms]' : 'grid-rows-[1fr] opacity-100 duration-500'}`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="flex min-h-20 items-center py-5">
                <span className={`min-w-0 transition-[opacity,transform] duration-200 ${isDetailsOpen ? '-translate-y-1 opacity-0' : 'translate-y-0 opacity-100'}`}>
                  <span className="block text-base font-bold text-deep-water">
                    View project details
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div
            id={detailsId}
            aria-hidden={!isDetailsOpen}
            className={`col-span-2 row-start-2 grid transition-[grid-template-rows,opacity] ease-[cubic-bezier(0.22,1,0.36,1)] ${isDetailsOpen ? 'grid-rows-[1fr] opacity-100 duration-500' : 'grid-rows-[0fr] opacity-0 duration-[380ms]'}`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className={`grid gap-8 pt-8 transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] md:grid-cols-2 md:pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-10 ${isDetailsOpen ? 'translate-y-0 opacity-100 duration-500' : '-translate-y-2 opacity-0 duration-[280ms]'}`}>
                <div>
                  <h4 className="text-sm font-bold text-deep-water">The challenge</h4>
                  <p className="mt-2 text-base leading-relaxed text-ink-light">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-deep-water">My role</h4>
                  <p className="mt-2 text-base leading-relaxed text-ink-light">{project.role}</p>
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                  <h4 className="text-sm font-bold text-deep-water">Selected proof</h4>
                  <ul className="mt-3 space-y-3">
                    {project.highlights.slice(0, 3).map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-relaxed text-ink-light">
                        <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 bg-tidal" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-controls={detailsId}
            aria-expanded={isDetailsOpen}
            aria-label={isDetailsOpen ? 'Collapse project details' : 'View project details'}
            onClick={onToggleDetails}
            className={`group/detail relative z-10 flex cursor-pointer items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-tidal focus-visible:ring-offset-4 focus-visible:ring-offset-sand ${isDetailsOpen ? 'col-start-2 row-start-3 my-[18px] h-11 w-11 justify-self-end' : 'col-span-2 row-start-1 h-full w-full justify-end justify-self-stretch'}`}
          >
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-paper-line bg-warm-white/70 text-deep-water transition-[background-color,border-color,color,transform] duration-200 group-hover/detail:border-tidal group-hover/detail:bg-warm-white group-hover/detail:text-tidal group-active/detail:scale-95">
              <PlusIcon
                aria-hidden="true"
                className={`absolute h-5 w-5 transition-[opacity,transform] duration-200 ${isDetailsOpen ? '-translate-y-1 scale-75 rotate-90 opacity-0' : 'translate-y-0 scale-100 rotate-0 opacity-100'}`}
                weight="bold"
              />
              <ArrowUpIcon
                aria-hidden="true"
                className={`absolute h-5 w-5 transition-[opacity,transform] duration-200 ${isDetailsOpen ? 'translate-y-0 scale-100 opacity-100 delay-150' : 'translate-y-1 scale-75 opacity-0'}`}
                weight="bold"
              />
            </span>
          </button>
        </div>
      </div>
    </article>
  )
}

interface ArchiveProjectProps {
  project: Project
  isFirst: boolean
  isLast: boolean
  isOpen: boolean
  showFullWidthBoundaries: boolean
  isPreviousExpandedVisual: boolean
  onToggle: (shouldOpen: boolean) => void
}

function ArchiveProject({
  project,
  isFirst,
  isLast,
  isOpen,
  showFullWidthBoundaries,
  isPreviousExpandedVisual,
  onToggle,
}: ArchiveProjectProps) {
  const detailsId = `${project.id}-details`

  return (
    <article
      id={project.id}
      className={`relative left-1/2 w-[100dvw] -translate-x-1/2 scroll-mt-28 transition-colors duration-300 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-px before:bg-paper-line before:transition-opacity before:duration-300 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-px after:bg-paper-line after:transition-opacity after:duration-300 ${isOpen ? 'bg-sand/65' : 'bg-transparent'} ${showFullWidthBoundaries && !isFirst ? 'before:opacity-100' : 'before:opacity-0'} ${showFullWidthBoundaries && !isLast ? 'after:opacity-100' : 'after:opacity-0'}`}
    >
      <div className="mx-auto w-full max-w-[83rem] px-6">
        <div className={`grid grid-cols-[minmax(0,1fr)_3.75rem] ${isFirst ? '' : `border-t transition-colors duration-300 ${showFullWidthBoundaries || isPreviousExpandedVisual ? 'border-transparent' : 'border-paper-line'}`}`}>
          <div className="col-start-1 row-start-1">
            <div className="grid min-h-28 gap-4 py-7 pr-5 md:grid-cols-[minmax(12rem,0.7fr)_minmax(0,1.3fr)] md:items-center md:gap-8">
              <div className="min-w-0">
                <h3 className="text-2xl font-bold leading-tight text-ink sm:text-3xl">{project.title}</h3>
                <p className="mt-2 text-sm font-semibold text-ink-light">{project.kind} · {project.status}</p>
              </div>
              <p className="max-w-3xl text-base leading-relaxed text-ink-light">{project.summary}</p>
            </div>
          </div>

          <div
            id={detailsId}
            aria-hidden={!isOpen}
            className={`col-span-2 row-start-2 grid transition-[grid-template-rows,opacity] ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 duration-500' : 'grid-rows-[0fr] opacity-0 duration-[380ms]'}`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className={`grid gap-8 pt-8 transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] md:grid-cols-2 md:pt-10 lg:gap-12 ${isOpen ? 'translate-y-0 opacity-100 duration-500' : '-translate-y-2 opacity-0 duration-[280ms]'}`}>
                <div className="space-y-7">
                  <div>
                    <h4 className="text-sm font-bold text-deep-water">The challenge</h4>
                    <p className="mt-2 text-base leading-relaxed text-ink-light">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-deep-water">My role</h4>
                    <p className="mt-2 text-base leading-relaxed text-ink-light">{project.role}</p>
                  </div>
                  <StackBadges tech={project.tech} />
                  <ProjectLinks project={project} />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-deep-water">What shipped</h4>
                  <ul className="mt-3 space-y-3">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-relaxed text-ink-light">
                        <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 bg-moss" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-controls={detailsId}
            aria-expanded={isOpen}
            aria-label={isOpen ? `Collapse ${project.title} details` : `View ${project.title} details`}
            onClick={() => onToggle(!isOpen)}
            className={`group/archive-toggle relative z-10 flex cursor-pointer items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-tidal focus-visible:ring-offset-4 focus-visible:ring-offset-sand ${isOpen ? 'col-start-2 row-start-3 my-[18px] h-11 w-11 justify-self-end' : 'col-span-2 row-start-1 h-full w-full justify-end justify-self-stretch'}`}
          >
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-paper-line bg-warm-white/70 text-deep-water transition-[background-color,border-color,color,transform] duration-200 group-hover/archive-toggle:border-tidal group-hover/archive-toggle:bg-warm-white group-hover/archive-toggle:text-tidal group-active/archive-toggle:scale-95">
              <PlusIcon
                aria-hidden="true"
                className={`absolute h-5 w-5 transition-[opacity,transform] duration-200 ${isOpen ? '-translate-y-1 scale-75 rotate-90 opacity-0' : 'translate-y-0 scale-100 rotate-0 opacity-100'}`}
                weight="bold"
              />
              <ArrowUpIcon
                aria-hidden="true"
                className={`absolute h-5 w-5 transition-[opacity,transform] duration-200 ${isOpen ? 'translate-y-0 scale-100 opacity-100 delay-150' : 'translate-y-1 scale-75 opacity-0'}`}
                weight="bold"
              />
            </span>
          </button>
        </div>
      </div>
    </article>
  )
}

export function ProjectsPage() {
  const featuredProjects = projects.filter(isFeaturedProject)
  const archiveProjects = projects.filter((project) => !isFeaturedProject(project))
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null)
  const [closingProjectId, setClosingProjectId] = useState<string | null>(null)

  useEffect(() => {
    if (!closingProjectId) return

    const respectsReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timeoutId = window.setTimeout(
      () => setClosingProjectId(null),
      respectsReducedMotion ? 0 : 400,
    )

    return () => window.clearTimeout(timeoutId)
  }, [closingProjectId])

  const setProjectExpanded = (projectId: string, shouldOpen: boolean) => {
    if (shouldOpen) {
      if (expandedProjectId && expandedProjectId !== projectId) {
        setClosingProjectId(expandedProjectId)
      }
      setExpandedProjectId(projectId)
      return
    }

    if (expandedProjectId === projectId) {
      setClosingProjectId(projectId)
      setExpandedProjectId(null)
    }
  }

  return (
    <div className="projects-page animate-[fade-in_0.4s_ease_both]">
      <section className="px-6 pb-20 pt-28 md:pb-28 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <h1 className="sr-only">Projects</h1>

          <section aria-label="Current projects">
            <div>
              {featuredProjects.map((project, index) => (
                <AnimatedSection
                  key={project.id}
                  delay={index === 0 ? 0 : Math.min(index * 0.08, 0.15)}
                >
                  <FeaturedProject
                    project={project}
                    index={index}
                    isDetailsOpen={expandedProjectId === project.id}
                    onToggleDetails={() => setProjectExpanded(project.id, expandedProjectId !== project.id)}
                  />
                </AnimatedSection>
              ))}
            </div>
          </section>

          <AnimatedSection delay={0.08}>
            <section aria-label="Additional projects" className="pt-12 md:pt-16">
              <div>
                {archiveProjects.map((project, index) => (
                  <ArchiveProject
                    key={project.id}
                    project={project}
                    isFirst={index === 0}
                    isLast={index === archiveProjects.length - 1}
                    isOpen={expandedProjectId === project.id}
                    showFullWidthBoundaries={expandedProjectId === project.id || closingProjectId === project.id}
                    isPreviousExpandedVisual={index > 0 && (
                      expandedProjectId === archiveProjects[index - 1].id
                      || closingProjectId === archiveProjects[index - 1].id
                    )}
                    onToggle={(shouldOpen) => setProjectExpanded(project.id, shouldOpen)}
                  />
                ))}
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <aside className="mt-16 border-t border-paper-line pt-8 md:mt-24 md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-10 md:pt-10">
              <div>
                <h2 className="text-2xl font-bold text-ink md:text-3xl">Interested in how I work?</h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-light">
                  I can walk through product decisions, implementation tradeoffs, and the systems behind this work.
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full border border-deep-water bg-deep-water px-6 py-3 text-sm font-bold text-warm-white transition-[background-color,border-color] duration-200 hover:border-moss hover:bg-moss focus:outline-none focus-visible:ring-2 focus-visible:ring-tidal focus-visible:ring-offset-4 focus-visible:ring-offset-warm-white md:mt-0"
              >
                Start a conversation
                <ArrowUpRightIcon aria-hidden="true" className="h-4 w-4" weight="bold" />
              </Link>
            </aside>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
