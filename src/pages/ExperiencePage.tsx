import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { experience } from '../data/experience'
import type { Experience } from '../types'

const experienceTimelineItems = [
  {
    experienceId: 'exp-1',
    callout: 'The strongest signal for teams that need a senior engineer who can own product surfaces, data boundaries, and launch details.',
    proof: '300+ SaaS clients / 10M+ daily events / 120+ internal SSO users',
    badgeVariant: 'tidal',
    dotClass: 'border-tidal bg-tidal',
    detailCount: 3,
  },
  {
    experienceId: 'exp-2',
    callout: 'I can keep scope, risk, compliance, and people moving in the same direction.',
    proof: 'Roadmaps, Jira rituals, HIPAA/PII audits, executive alignment',
    badgeVariant: 'moss',
    dotClass: 'border-moss bg-moss',
    detailCount: 2,
  },
  {
    experienceId: 'exp-3',
    callout: 'Useful in teams modernizing real infrastructure while protecting user trust.',
    proof: 'OAuth2 flows, microservices migration, rollback-aware delivery',
    badgeVariant: 'sun',
    dotClass: 'border-sun bg-sun',
    detailCount: 2,
  },
  {
    experienceId: 'exp-4',
    callout: 'A practical support background that still shapes how I debug, document, and build for real people.',
    proof: 'Campus IT support while completing CS and applied mathematics',
    badgeVariant: 'clay',
    dotClass: 'border-clay bg-clay',
    detailCount: 2,
  },
] as const

const education = {
  school: 'CUNY Queens College',
  degree: 'Bachelor of Science in Computer Science and Applied Mathematics',
  location: 'New York, NY',
  detail: 'Formal technical foundation built alongside campus IT support work, with a practical mix of systems thinking, problem solving, and applied math.',
}

interface TimelineEntryProps {
  item: Experience
  card: (typeof experienceTimelineItems)[number]
  index: number
}

const timelineStepClasses = ['timeline-step-1', 'timeline-step-2', 'timeline-step-3', 'timeline-step-4'] as const

function TimelineEntry({ item, card, index }: TimelineEntryProps) {
  const isLeft = index % 2 === 0
  const contentClass = isLeft ? 'md:pr-10 md:text-right' : 'md:col-start-3 md:pl-10'
  const proofClass = isLeft ? 'md:col-start-3 md:pl-10' : 'md:col-start-1 md:row-start-1 md:pr-10 md:text-right'
  const dateClass = isLeft ? 'ml-6 md:-ml-6 md:-translate-x-full' : 'ml-6'
  const datePillClass = isLeft ? 'timeline-date-pill-left' : 'timeline-date-pill-right'
  const metaClass = isLeft ? 'md:justify-end' : ''
  const primaryPanelClass = isLeft ? 'timeline-panel-left' : 'timeline-panel-right'
  const proofPanelClass = isLeft ? 'timeline-panel-right' : 'timeline-panel-left'
  const timelineStepClass = timelineStepClasses[index % timelineStepClasses.length]

  return (
    <div
      className={`timeline-entry ${timelineStepClass} relative grid gap-0 pl-12 pt-12 md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] md:items-start md:pl-0`}
    >
      <div className="timeline-dot absolute left-4 top-2 z-30 flex -translate-x-1/2 items-center justify-center md:left-1/2" aria-hidden="true">
        <span className={`h-4 w-4 rounded-full border-4 ring-8 ring-warm-white ${card.dotClass}`} />
      </div>

      <div className={`absolute left-4 top-0 z-20 md:left-1/2 ${dateClass}`}>
        <span className={`timeline-date-pill ${datePillClass} block whitespace-nowrap rounded-full border border-paper-line bg-warm-white px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-deep-water shadow-[0_10px_24px_rgba(18,54,64,0.045)]`}>
          {item.startDate} - {item.endDate}
        </span>
      </div>

      <div className={contentClass}>
        <article className={`timeline-panel timeline-panel-primary ${primaryPanelClass} rounded-t-2xl rounded-b-none border border-sand-dark/70 bg-warm-white p-5 md:rounded-2xl md:border-paper-line md:p-6`}>
          <div>
            <div className={`flex flex-wrap gap-x-3 gap-y-1 ${metaClass}`}>
              <p className="text-sm font-bold text-ink-muted">{item.company}</p>
              <p className="text-sm font-bold text-deep-water">{item.location}</p>
            </div>
            <h2 className="mt-2 font-display text-3xl leading-[1.06] text-ink md:text-4xl">
              {item.role}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-light">
              {item.context}
            </p>
          </div>

          <div className={`mt-6 flex flex-wrap gap-2 ${metaClass}`}>
            {item.tech.slice(0, 5).map((tech) => (
              <Badge key={tech} variant={card.badgeVariant}>{tech}</Badge>
            ))}
          </div>
        </article>
      </div>

      <aside className={proofClass}>
        <div className={`timeline-panel timeline-panel-proof ${proofPanelClass} -mt-px rounded-t-none rounded-b-2xl border border-sand-dark/70 bg-sand p-5 md:mt-0 md:rounded-2xl`}>
          <p className="font-display text-2xl leading-tight text-deep-water">
            {card.proof}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            {card.callout}
          </p>
          <div className="mt-5 space-y-3">
            {item.description.slice(0, card.detailCount).map((detail) => (
              <p key={detail} className="border-t border-sand-dark/70 pt-3 text-sm leading-relaxed text-ink-muted">
                {detail}
              </p>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}

export function ExperiencePage() {
  return (
    <div className="animate-[fade-in_0.4s_ease_both]">
      <section className="px-6 pt-24 pb-3 md:pt-32 md:pb-4">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="flex justify-center text-center">
            <Button to="/projects" variant="outline" className="min-h-14 w-fit bg-warm-white px-7 py-3 text-base">
              View current projects
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-warm-white px-6 pt-8 pb-14 md:pt-10 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="relative">
            <div className="absolute top-2 bottom-2 left-4 w-px md:left-1/2 md:-translate-x-1/2" aria-hidden="true">
              <span className="timeline-spine block h-full w-full bg-paper-line" />
            </div>

            <div className="space-y-10 md:space-y-14">
              {experienceTimelineItems.map((card, index) => {
                const item = experience.find((entry) => entry.id === card.experienceId)
                if (!item) return null

                return <TimelineEntry key={item.id} item={item} card={card} index={index} />
              })}
            </div>
          </div>

          <AnimatedSection delay={0.12} className="lg:col-span-6">
            <article className="mt-14 rounded-3xl border border-paper-line bg-sand p-6 md:mt-20 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
                <div>
                  <h2 className="font-display text-4xl leading-[1.04] tracking-[-0.02em] text-deep-water md:text-5xl">
                    Education
                  </h2>
                  <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-muted">
                    {education.detail}
                  </p>
                </div>

                <div className="rounded-2xl border border-sand-dark/70 bg-warm-white p-5 md:p-6">
                  <p className="text-sm font-bold text-ink-muted">{education.school}</p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
                    {education.degree}
                  </h3>
                  <p className="mt-5 text-sm font-bold text-deep-water">{education.location}</p>
                </div>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}
