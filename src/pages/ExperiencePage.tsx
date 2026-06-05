import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { SectionHeading } from '../components/ui/SectionHeading'
import { experience } from '../data/experience'
import { skillGroups } from '../data/skills'

function yearFrom(date: string) {
  const parts = date.split(' ')
  return parts[parts.length - 1]
}

export function ExperiencePage() {
  return (
    <div className="animate-[fade-in_0.4s_ease_both]">
      <section className="border-b border-sand-dark/70 px-6 pt-32 pb-16 md:pt-40">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <AnimatedSection>
            <SectionHeading
              accent="Experience"
              title="Nine years across product, platform, and secure systems"
              subtitle="The arc moves through software engineering, technical product leadership, compliance-heavy delivery, and full-stack platform work."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.12}>
            <div className="grid border border-sand-dark/70 bg-parchment sm:grid-cols-3">
              <div className="border-r border-sand-dark/70 p-5">
                <p className="font-display text-4xl text-deep-water">9 years</p>
                <p className="mt-2 text-sm text-ink-muted">Experience</p>
              </div>
              <div className="border-r border-sand-dark/70 p-5">
                <p className="font-display text-4xl text-deep-water">4 roles</p>
                <p className="mt-2 text-sm text-ink-muted">Range</p>
              </div>
              <div className="p-5">
                <p className="font-display text-4xl text-deep-water">NYC</p>
                <p className="mt-2 text-sm text-ink-muted">Base</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          {experience.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 0.08}>
              <article className="grid border-b border-sand-dark/70 py-14 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
                <aside className="mb-8 lg:mb-0">
                  <p className="text-sm font-semibold text-deep-water">
                    {yearFrom(item.startDate)} - {yearFrom(item.endDate)}
                  </p>
                  <p className="mt-4 text-sm text-ink-muted">{item.location}</p>
                </aside>

                <div>
                  <p className="text-sm font-semibold text-ink-muted">{item.company}</p>
                  <h2 className="mt-3 font-display text-4xl leading-[1.06] tracking-[-0.02em] text-ink md:text-5xl">{item.role}</h2>
                  <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-light">{item.context}</p>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {item.description.map((detail) => (
                      <p key={detail} className="border-t border-sand-dark/70 pt-4 text-sm leading-relaxed text-ink-muted">
                        {detail}
                      </p>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="border-b border-night-border bg-night px-6 py-20 text-night-text md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <AnimatedSection>
            <span className="text-sm font-semibold text-leaf-light">Stack map</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.04] tracking-[-0.02em] md:text-5xl">
              Built from shipping, not collecting logos.
            </h2>
          </AnimatedSection>
          <div className="grid gap-px bg-night-border sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, index) => (
              <AnimatedSection key={group.title} delay={index * 0.05}>
                <div className="h-full bg-night-panel p-6">
                  <h3 className="text-sm font-semibold text-leaf-light">{group.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-night-muted">{group.skills.join(' / ')}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
          <p className="max-w-xl text-lg leading-relaxed text-ink-muted">
            Want the condensed version? The resume has the same story in a hiring-manager format.
          </p>
          <Button to="/contact">Contact</Button>
        </div>
      </section>
    </div>
  )
}
