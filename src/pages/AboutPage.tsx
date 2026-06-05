import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { SectionHeading } from '../components/ui/SectionHeading'
import { hobbies } from '../data/hobbies'
import { profileLinks } from '../data/profileLinks'
import { siteConfig } from '../data/siteConfig'
import { skillGroups } from '../data/skills'

const resumeLink = profileLinks.find((link) => link.name === 'Resume')

const workingValues = [
  ['01', 'Product shape before implementation detail'],
  ['02', 'Interfaces that make system state legible'],
  ['03', 'Security and data boundaries as user experience'],
  ['04', 'Calm collaboration through ambiguous delivery'],
]

export function AboutPage() {
  return (
    <div className="animate-[fade-in_0.4s_ease_both]">
      <section className="border-b border-sand-dark/70 px-6 pt-32 pb-16 md:pt-40">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <AnimatedSection>
            <SectionHeading
              accent="About"
              title="Product-minded, systems-aware, visually picky."
              subtitle="I build with a full-stack sense of the machinery and a front-end sense of how people actually experience it."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div className="grid border border-sand-dark/70 bg-parchment md:grid-cols-[0.8fr_1.2fr]">
              <div className="grid min-h-72 place-items-center border-b border-sand-dark/70 bg-night text-night-text md:border-b-0 md:border-r">
                <div className="text-center">
                  <p className="font-display text-6xl leading-none">KM</p>
                  <p className="mt-4 text-sm text-night-muted">{siteConfig.location}</p>
                </div>
              </div>
              <div className="p-7">
                <p className="text-sm font-semibold text-deep-water">Current orientation</p>
                <h2 className="mt-5 font-display text-4xl leading-none text-ink">{siteConfig.role}</h2>
                <p className="mt-5 leading-relaxed text-ink-muted">{siteConfig.roleDetail}. {siteConfig.ctaSubtext}</p>
                {resumeLink && (
                  <div className="mt-7">
                    <Button href={resumeLink.href} download variant="outline">Download resume</Button>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-b border-sand-dark/70 px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <AnimatedSection>
            <span className="text-sm font-semibold text-deep-water">Bio</span>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="space-y-7">
              {siteConfig.bio.map((paragraph) => (
                <p key={paragraph} className="max-w-4xl font-display text-2xl leading-[1.16] tracking-[-0.015em] text-ink md:text-4xl">
                  {paragraph}
                </p>
              ))}
              <p className="max-w-3xl text-xl leading-relaxed text-ink-muted">
                I am especially drawn to products where the interface is not just the surface, but the place where people learn whether they can trust the data, workflow, and system underneath it.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-b border-night-border bg-night px-6 py-20 text-night-text md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr]">
          <AnimatedSection>
            <span className="text-sm font-semibold text-leaf-light">Working values</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.04] tracking-[-0.02em] md:text-5xl">
              How I like the work to feel.
            </h2>
          </AnimatedSection>

          <div className="border-t border-night-border">
            {workingValues.map(([number, value], index) => (
              <AnimatedSection key={value} delay={index * 0.08}>
                <div className="grid gap-5 border-b border-night-border py-7 md:grid-cols-[4rem_1fr]">
                  <span className="text-sm font-semibold text-leaf-light">{number}</span>
                  <p className="font-display text-2xl leading-[1.1]">{value}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-sand-dark/70 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <SectionHeading
              accent="Technical Center"
              title="The stack has range, but the throughline is product delivery."
              subtitle="I can move across UI, APIs, authentication, databases, reporting, delivery planning, and stakeholder translation without losing the user-facing thread."
            />
          </AnimatedSection>

          <div className="grid gap-px overflow-hidden border border-sand-dark/70 bg-sand-dark/70 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, index) => (
              <AnimatedSection key={group.title} delay={index * 0.05}>
                <div className="h-full bg-warm-white p-6">
                  <h3 className="text-sm font-semibold text-deep-water">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimatedSection>
            <span className="text-sm font-semibold text-deep-water">Outside work</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.04] tracking-[-0.02em] text-ink md:text-5xl">
              Attention is a practice.
            </h2>
          </AnimatedSection>

          <div className="grid gap-px border border-sand-dark/70 bg-sand-dark/70 sm:grid-cols-2">
            {hobbies.map((group, index) => (
              <AnimatedSection key={group.title} delay={index * 0.06}>
                <div className="bg-parchment p-7">
                  <h3 className="font-display text-3xl text-ink">{group.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-ink-muted">{group.items.join(' / ')}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
