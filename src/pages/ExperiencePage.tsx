import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { SectionHeading } from '../components/ui/SectionHeading'
import { experience } from '../data/experience'
import { skillGroups } from '../data/skills'

export function ExperiencePage() {
  return (
    <div className="animate-[fade-in_0.4s_ease_both]">
      <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              accent="Experience"
              title="Nine years across product, platform, and secure systems"
              subtitle="I have worked as a software engineer, Java developer, and technical product lead across SaaS, healthcare, analytics, and internal platforms."
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-0">
            {experience.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.08}>
                <article className="grid gap-6 border-b border-sand-dark/40 py-10 first:pt-0 last:border-b-0 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
                  <div>
                    <p className="text-sm text-ink-muted">{item.startDate} - {item.endDate}</p>
                    <p className="mt-2 text-sm font-medium text-deep-water">{item.company}</p>
                    <p className="mt-1 text-sm text-ink-muted">{item.location}</p>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl text-ink md:text-3xl">{item.role}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-ink-light">{item.context}</p>
                    <ul className="mt-5 space-y-2">
                      {item.description.map((detail) => (
                        <li key={detail} className="flex items-start gap-3 text-sm leading-relaxed text-ink-muted">
                          <span className="mt-2 h-px w-4 shrink-0 bg-leaf/50" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {item.tech.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sand-dark/40 bg-sand/30 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              accent="Technical range"
              title="A stack shaped by shipped product work"
              subtitle="The throughline is full-stack delivery with a strong front-end product sense."
            />
          </AnimatedSection>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, index) => (
              <AnimatedSection key={group.title} delay={index * 0.05}>
                <div className="border border-sand-dark/40 bg-warm-white p-6">
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-leaf">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-12 border-t border-sand-dark/40 pt-10">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">Education</p>
              <h3 className="mt-3 font-display text-2xl text-ink">B.S. in Computer Science and Applied Mathematics</h3>
              <p className="mt-2 text-sm text-ink-muted">CUNY Queens College / June 2016</p>
              <div className="mt-8">
                <Button to="/contact" variant="outline">Get in touch</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
