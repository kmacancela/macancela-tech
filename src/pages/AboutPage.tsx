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
  'Clear product thinking before code',
  'Interfaces that make complex systems legible',
  'Security and data boundaries treated as product quality',
  'Calm collaboration across engineering, product, design, and stakeholders',
]

export function AboutPage() {
  return (
    <div className="animate-[fade-in_0.4s_ease_both]">
      <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              accent="About"
              title="A product-minded engineer with a craft streak"
              subtitle="I build software with a full-stack sense of the system and a front-end sense of how the work should feel."
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <AnimatedSection>
            <div className="border border-sand-dark/50 bg-sand/30 p-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-leaf">{siteConfig.location}</p>
              <h2 className="mt-5 font-display text-4xl leading-tight text-ink">
                {siteConfig.firstName} {siteConfig.lastName}
              </h2>
              <p className="mt-4 text-ink-muted leading-relaxed">
                {siteConfig.role} / {siteConfig.roleDetail}
              </p>
              <div className="mt-8 space-y-4">
                {workingValues.map((value) => (
                  <div key={value} className="flex items-start gap-3 text-sm leading-relaxed text-ink-light">
                    <span className="mt-2 h-px w-4 shrink-0 bg-leaf/50" />
                    {value}
                  </div>
                ))}
              </div>
              {resumeLink && (
                <div className="mt-8">
                  <Button href={resumeLink.href} download variant="outline">Download resume</Button>
                </div>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="space-y-5">
              {siteConfig.bio.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-ink-light">
                  {paragraph}
                </p>
              ))}
              <p className="text-lg leading-relaxed text-ink-light">
                I am especially drawn to products where the interface is not just the surface, but the place where people learn to trust the data, workflow, and system underneath it.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">Technical center of gravity</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroups.flatMap((group) => group.skills).slice(0, 18).map((skill) => (
                  <Badge key={skill} variant="tidal">{skill}</Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-sand-dark/40 bg-sand/30 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              accent="Outside work"
              title="What keeps me attentive"
              subtitle="The same habits that make good software easier to build also show up away from the keyboard: patience, rhythm, observation, and a little play."
            />
          </AnimatedSection>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hobbies.map((group, index) => (
              <AnimatedSection key={group.title} delay={index * 0.06}>
                <div className="h-full border border-sand-dark/40 bg-warm-white p-6">
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-leaf">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="moss">{item}</Badge>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
