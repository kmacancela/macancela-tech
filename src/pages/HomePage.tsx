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
const supportingProjects = featuredProjects.slice(1)
const resumeLink = profileLinks.find((link) => link.name === 'Resume')
const socialLinks = profileLinks.filter((link) => link.name === 'LinkedIn' || link.name === 'GitHub')

const proofPoints = [
  { label: 'Experience', value: '9 years', detail: 'SaaS, analytics, healthcare, secure systems' },
  { label: 'Scale', value: '10M+ events', detail: 'Daily analytics volume surfaced for clients' },
  { label: 'Clients', value: '300+ SaaS', detail: 'Supported through Atrilyx product work' },
  { label: 'Impact', value: '40% faster', detail: 'Onboarding reduction through internal tooling' },
]

const snapshotRows = [
  ['Role target', 'Full-stack SWE, frontend-leaning'],
  ['Base', siteConfig.location],
  ['Current project', leadProject?.title ?? 'Kary Waves App'],
  ['Contact', siteConfig.email],
]

const workflowNodes = [
  'Client updates',
  'Bookings',
  'Messages',
  'Files',
  'Fastify API',
  'PostgreSQL',
]

const capabilityNotes = [
  {
    title: 'Frontend taste with product pressure',
    body: 'React, Vue, and React Native surfaces that make workflows easier to trust and use.',
  },
  {
    title: 'Full-stack delivery',
    body: 'APIs, auth, data modeling, reporting, and migration work handled with production context.',
  },
  {
    title: 'Clear collaboration',
    body: 'Comfortable translating ambiguity into shippable plans across design, product, and engineering.',
  },
]

export function HomePage() {
  return (
    <>
      <section className="border-b border-sand-dark/70 px-6 pt-32 pb-16 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.74fr)] lg:items-start">
            <AnimatedSection>
              <div className="flex flex-wrap gap-2">
                <Badge variant="leaf">{siteConfig.location}</Badge>
                <Badge>{siteConfig.yearsExperience} years</Badge>
                <Badge variant="water">Frontend SWE focus</Badge>
              </div>

              <h1 className="mt-8 max-w-5xl font-display text-4xl leading-[1.02] tracking-[-0.02em] text-ink sm:text-6xl lg:text-[5.8rem]">
                Karina Macancela
              </h1>

              <p className="mt-5 max-w-4xl font-display text-2xl leading-[1.12] tracking-[-0.015em] text-deep-water sm:text-3xl md:text-5xl">
                Full-stack SWE with frontend taste and product range.
              </p>

              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-ink-light md:text-xl">
                {siteConfig.subtitle}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {resumeLink && (
                  <Button href={resumeLink.href} download>
                    <ProfileIcon icon={resumeLink.icon} className="h-4 w-4" />
                    Download resume
                  </Button>
                )}
                <Button to="/projects" variant="outline">View projects</Button>
                <Button to="/contact" variant="ghost">Contact Karina</Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <aside className="border border-sand-dark/70 bg-parchment p-5 sm:shadow-[12px_12px_0_var(--color-sand)]">
                <div className="flex items-start justify-between gap-4 border-b border-sand-dark/70 pb-5">
                  <div>
                    <p className="text-sm font-semibold text-deep-water">Hiring snapshot</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      Open to full-stack and frontend-leaning SWE roles.
                    </p>
                  </div>
                  <span className="h-3 w-3 shrink-0 rounded-full bg-leaf" aria-hidden="true" />
                </div>

                <div className="divide-y divide-sand-dark/70">
                  {snapshotRows.map(([label, value]) => (
                    <div key={label} className="grid gap-2 py-4 text-sm sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-4">
                      <span className="text-ink-muted">{label}</span>
                      <span className="min-w-0 font-semibold text-ink">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-12 items-center justify-between border border-sand-dark/70 bg-warm-white px-4 text-sm font-semibold text-ink transition-colors hover:border-deep-water hover:text-deep-water"
                    >
                      {link.label}
                      <ProfileIcon icon={link.icon} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </aside>
            </AnimatedSection>
          </div>

          {leadProject && (
            <AnimatedSection delay={0.18}>
              <article className="mt-14 overflow-hidden border border-sand-dark/70 bg-warm-white">
                <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="border-b border-sand-dark/70 p-6 md:p-8 lg:border-r lg:border-b-0">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="leaf">{leadProject.status}</Badge>
                      <Badge variant="clay">{leadProject.kind}</Badge>
                    </div>
                    <h2 className="mt-7 max-w-xl font-display text-4xl leading-[1.04] tracking-[-0.02em] text-ink md:text-5xl">
                      Current project: {leadProject.title}
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-light">
                      {leadProject.summary}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {leadProject.tech.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-parchment p-6 md:p-8">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {workflowNodes.map((node, index) => (
                        <div
                          key={node}
                          className={`border border-sand-dark/70 bg-warm-white p-4 ${index === 4 || index === 5 ? 'sm:col-span-1' : ''}`}
                        >
                          <p className="text-xs font-semibold text-ink-muted">Workflow {index + 1}</p>
                          <p className="mt-2 text-base font-semibold text-ink">{node}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 grid gap-4 border-t border-sand-dark/70 pt-6 md:grid-cols-2">
                      <p className="text-sm leading-relaxed text-ink-muted">
                        <span className="font-semibold text-ink">Product pressure:</span> {leadProject.problem}
                      </p>
                      <p className="text-sm leading-relaxed text-ink-muted">
                        <span className="font-semibold text-ink">My role:</span> {leadProject.role}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          )}
        </div>
      </section>

      <section className="border-b border-sand-dark/70 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold text-deep-water">Proof without the poster treatment</p>
                <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.04] tracking-[-0.02em] text-ink md:text-5xl">
                  The work reads fast because hiring readers are busy.
                </h2>
              </div>

              <div className="grid gap-px overflow-hidden border border-sand-dark/70 bg-sand-dark/70 md:grid-cols-2">
                {proofPoints.map((item) => (
                  <div key={item.label} className="bg-warm-white p-5">
                    <p className="text-sm font-semibold text-deep-water">{item.value}</p>
                    <h3 className="mt-3 text-base font-semibold text-ink">{item.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-b border-sand-dark/70 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {capabilityNotes.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.06}>
              <article className="h-full border border-sand-dark/70 bg-parchment p-5">
                <h2 className="font-display text-2xl leading-[1.08] text-ink">{item.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="border-b border-night-border bg-night px-6 py-16 text-night-text md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <AnimatedSection>
            <p className="text-sm font-semibold text-leaf-light">Featured work</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.04] tracking-[-0.02em] md:text-5xl">
              Shipped systems with real product constraints.
            </h2>
          </AnimatedSection>

          <div className="divide-y divide-night-border border-y border-night-border">
            {supportingProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.08}>
                <article className="grid gap-5 py-7 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant={project.status === 'Active' ? 'leaf' : 'tidal'}>{project.status}</Badge>
                      <Badge variant="sun">{project.kind}</Badge>
                    </div>
                    <h3 className="mt-5 font-display text-3xl leading-[1.08]">{project.title}</h3>
                  </div>
                  <p className="max-w-3xl text-sm leading-relaxed text-night-muted">{project.summary}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-sand-dark/70 px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <AnimatedSection>
            <p className="text-sm font-semibold text-deep-water">How I work</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.04] tracking-[-0.02em] text-ink md:text-5xl">
              Product sense from both sides of the table.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Engineering delivery, compliance-aware project leadership, secure systems, and product surfaces that had to carry real operational weight.
            </p>
            <div className="mt-8">
              <Button to="/experience" variant="outline">Read experience</Button>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {experience.slice(0, 3).map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.08}>
                <article className="border border-sand-dark/70 bg-warm-white p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-deep-water">{item.company}</p>
                    <p className="text-sm text-ink-muted">{item.startDate} to {item.endDate}</p>
                  </div>
                  <h3 className="mt-3 font-display text-3xl leading-[1.08] text-ink">{item.role}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">{item.context}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.75fr]">
          <AnimatedSection>
            <div className="grid gap-px overflow-hidden border border-sand-dark/70 bg-sand-dark/70 md:grid-cols-2">
              {skillGroups.slice(0, 4).map((group) => (
                <div key={group.title} className="bg-warm-white p-5">
                  <h3 className="text-sm font-semibold text-deep-water">{group.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{group.skills.join(', ')}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div className="border border-sand-dark/70 bg-parchment p-6">
              <p className="text-sm font-semibold text-deep-water">Human note</p>
              <p className="mt-4 font-display text-3xl leading-[1.08] text-ink">
                I care about interfaces because they are where people decide whether the system is trustworthy.
              </p>
              <div className="mt-7">
                <Button to="/about" variant="outline">More about Karina</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
