import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { ProfileIcon } from '../components/ui/ProfileIcon'
import { experience } from '../data/experience'
import { hobbies } from '../data/hobbies'
import { profileLinks } from '../data/profileLinks'
import { projects } from '../data/projects'
import { siteConfig } from '../data/siteConfig'
import { skillGroups } from '../data/skills'

const featuredProjects = projects.filter((project) => project.featured)
const resumeLink = profileLinks.find((link) => link.name === 'Resume')
const socialLinks = profileLinks.filter((link) => link.name === 'LinkedIn' || link.name === 'GitHub')

const proofPoints = [
  { value: '9 years', label: 'software engineering and technical product leadership' },
  { value: '300+', label: 'SaaS clients supported through analytics platform work' },
  { value: '10M+', label: 'daily events flowing through attribution dashboards' },
  { value: '40%', label: 'onboarding time reduction through internal platform design' },
]

export function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen items-end overflow-hidden md:items-center">
        <div className="absolute inset-0">
          <img src="/ladybug-nature.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-deep-water/80" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep-water to-transparent" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 pb-24 pt-36 md:grid-cols-[1.4fr_0.8fr] md:items-end md:pb-28 md:pt-40">
          <AnimatedSection>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-leaf-light">
              {siteConfig.location} / {siteConfig.yearsExperience} years / Full-stack + frontend
            </p>
            <h1 className="max-w-4xl font-display text-5xl leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              {siteConfig.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
              {siteConfig.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {resumeLink && (
                <Button
                  href={resumeLink.href}
                  download
                  className="!bg-leaf !text-white hover:!bg-leaf-light"
                >
                  <ProfileIcon icon={resumeLink.icon} className="h-4 w-4" />
                  Resume
                </Button>
              )}
              <Button to="/projects" variant="outline" className="!border-white/30 !text-white hover:!border-white/60 hover:!text-white">
                Projects
              </Button>
              <Button to="/contact" variant="ghost" className="!text-white/75 hover:!bg-white/10 hover:!text-white">
                Contact
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="border-l border-white/20 pl-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">Current focus</p>
              <p className="mt-4 font-display text-2xl leading-tight text-white md:text-3xl">
                Building product surfaces where UX clarity and system trust have to show up together.
              </p>
              <div className="mt-6 flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 transition-colors hover:text-white"
                    aria-label={link.name}
                  >
                    <ProfileIcon icon={link.icon} />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-b border-sand-dark/40 bg-sand/30 px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <AnimatedSection key={point.value}>
              <div>
                <p className="font-display text-3xl text-deep-water">{point.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{point.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-leaf">Featured projects</span>
                <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-5xl">Current work and platform proof.</h2>
              </div>
              <p className="text-ink-muted leading-relaxed">
                A mix of active product work and shipped systems: mobile workflows, SaaS analytics, internal platforms, and secure enterprise architecture.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.08}>
                <article className="flex h-full flex-col border border-sand-dark/50 bg-warm-white p-6 transition-colors hover:border-leaf/40">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <Badge variant={project.status === 'Active' ? 'leaf' : 'tidal'}>{project.status}</Badge>
                    <span className="text-xs uppercase tracking-[0.15em] text-ink-muted">{project.kind}</span>
                  </div>
                  <h3 className="font-display text-2xl text-ink">{project.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-10">
              <Button to="/projects" variant="outline">View all projects</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-sand-dark/40 bg-sand/30 px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimatedSection>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-leaf">Experience</span>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-5xl">A practical arc from systems to product leadership.</h2>
            <p className="mt-5 text-ink-muted leading-relaxed">
              I have moved between engineering, technical project leadership, and product ownership in places where security, data quality, and stakeholder trust matter.
            </p>
            <div className="mt-8">
              <Button to="/experience" variant="outline">Read experience</Button>
            </div>
          </AnimatedSection>

          <div className="space-y-0">
            {experience.slice(0, 3).map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.08}>
                <article className="border-b border-sand-dark/40 py-8 first:pt-0 last:border-b-0">
                  <p className="text-sm text-ink-muted">{item.startDate} - {item.endDate}</p>
                  <h3 className="mt-2 font-display text-2xl text-ink">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-deep-water">{item.company} / {item.location}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">{item.context}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-leaf">Stack</span>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-5xl">Tools I reach for.</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {skillGroups.slice(0, 4).map((group) => (
                  <div key={group.title} className="border-l border-sand-dark/60 pl-4">
                    <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">{group.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-light">{group.skills.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div className="border border-sand-dark/50 p-8">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-leaf">Away from the keyboard</span>
              <p className="mt-4 font-display text-3xl leading-tight text-ink">
                Movement, craft, and quiet attention shape how I build.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {hobbies.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-ink-muted">{group.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Badge key={item} variant="moss">{item}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-sand-dark/40 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-leaf">Contact</span>
                <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-5xl">{siteConfig.ctaSubtext}</h2>
                <p className="mt-4 max-w-xl text-ink-muted leading-relaxed">
                  The fastest way to reach me is email, LinkedIn, or the resume link in this site.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button to="/contact">Contact me</Button>
                {resumeLink && (
                  <Button href={resumeLink.href} download variant="outline">Download resume</Button>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
