import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { SectionHeading } from '../components/ui/SectionHeading'
import { projects } from '../data/projects'

export function ProjectsPage() {
  return (
    <div className="animate-[fade-in_0.4s_ease_both]">
      <section className="border-b border-sand-dark/70 px-6 pt-32 pb-16 md:pt-40">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <AnimatedSection>
            <SectionHeading
              accent="Projects"
              title="Selected systems and current product work"
              subtitle="Project work is organized as evidence: product pressure, role, architecture notes, and what the build says about how I think."
            />
          </AnimatedSection>
          <AnimatedSection delay={0.12}>
            <div className="border-y border-sand-dark/70 py-7">
              <p className="text-sm font-semibold text-deep-water">Project index</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {projects.map((project, index) => (
                  <a key={project.id} href={`#${project.id}`} className="group flex items-center justify-between border-b border-sand-dark/70 pb-3 text-sm text-ink-muted">
                    <span>{project.title}</span>
                    <span className="text-xs font-semibold text-leaf group-hover:text-ink">{String(index + 1).padStart(2, '0')}</span>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.08}>
              <article id={project.id} className="grid scroll-mt-28 border-b border-sand-dark/70 py-16 lg:grid-cols-[0.42fr_1.58fr] lg:gap-12">
                <aside className="mb-8 lg:mb-0">
                  <p className="text-sm font-semibold text-deep-water">{project.kind}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Badge variant={project.status === 'Active' ? 'leaf' : 'tidal'}>{project.status}</Badge>
                    {project.featured && <Badge variant="clay">Featured</Badge>}
                  </div>
                </aside>

                <div>
                  <h2 className="max-w-5xl font-display text-4xl leading-[1.04] tracking-[-0.02em] text-ink md:text-5xl">
                    {project.title}
                  </h2>
                  <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ink-light">{project.summary}</p>

                  <div className="mt-10 grid border border-sand-dark/70 md:grid-cols-2">
                    <div className="border-b border-sand-dark/70 p-6 md:border-b-0 md:border-r">
                      <h3 className="text-sm font-semibold text-deep-water">Product pressure</h3>
                      <p className="mt-4 text-sm leading-relaxed text-ink-muted">{project.problem}</p>
                    </div>
                    <div className="p-6">
                      <h3 className="text-sm font-semibold text-deep-water">My role</h3>
                      <p className="mt-4 text-sm leading-relaxed text-ink-muted">{project.role}</p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.7fr]">
                    <div>
                      <h3 className="text-sm font-semibold text-deep-water">Build notes</h3>
                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        {project.highlights.map((item) => (
                          <p key={item} className="border-t border-sand-dark/70 pt-4 text-sm leading-relaxed text-ink-light">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-deep-water">Stack</h3>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech}>{tech}</Badge>
                        ))}
                      </div>
                      {project.links.length > 0 && (
                        <div className="mt-7 flex flex-wrap gap-3">
                          {project.links.map((link) => (
                            <Button key={link.href} href={link.href} target={link.external ? '_blank' : undefined} variant="outline">
                              {link.label}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  )
}
