import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { SectionHeading } from '../components/ui/SectionHeading'
import { projects } from '../data/projects'

export function ProjectsPage() {
  return (
    <div className="animate-[fade-in_0.4s_ease_both]">
      <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              accent="Projects"
              title="Current work and selected systems"
              subtitle="A practical look at the product surfaces, platform decisions, and secure systems behind my engineering work."
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-14">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.08}>
                <article className="grid gap-8 border-b border-sand-dark/40 pb-14 last:border-b-0 md:grid-cols-[0.75fr_1.25fr]">
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <Badge variant={project.status === 'Active' ? 'leaf' : 'tidal'}>{project.status}</Badge>
                      <span className="text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">{project.kind}</span>
                    </div>
                    <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">{project.title}</h2>
                    <p className="mt-5 text-ink-muted leading-relaxed">{project.summary}</p>
                    {project.links.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.links.map((link) => (
                          <Button
                            key={link.href}
                            href={link.href}
                            target={link.external ? '_blank' : undefined}
                            variant="outline"
                          >
                            {link.label}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-leaf">Problem</h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-light">{project.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-leaf">Role</h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-light">{project.role}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-leaf">Highlights</h3>
                      <ul className="mt-3 space-y-2">
                        {project.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-muted">
                            <span className="mt-2 h-px w-4 shrink-0 bg-leaf/50" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
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
    </div>
  )
}
