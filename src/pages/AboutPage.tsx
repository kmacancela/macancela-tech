import { AnimatedSection } from '../components/ui/AnimatedSection'
import { hobbies } from '../data/hobbies'
import { siteConfig } from '../data/siteConfig'

const introContext = 'I have been coding since I was 13, so building software has always felt like both a craft and a creative outlet for turning ideas into reality. Throughout my career, I have worked with teams across industries like SaaS startups, analytics, healthcare, and enterprise clients, but what has remained consistent is the opportunity to solve interesting, complex problems. I find fulfillment in understanding challenges from multiple perspectives, collaborating with innovative teams to explore solutions, and delivering results. Away from the keyboard, I find balance through hiking, biking, yoga, swimming, and by connecting with my local community.'

export function AboutPage() {
  return (
    <div className="animate-[fade-in_0.4s_ease_both]">
      <section className="px-6 pt-28 pb-16 md:pt-32 md:pb-20">
        <h1 className="sr-only">About {siteConfig.name}</h1>
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <div className="mx-auto space-y-5">
              <p className="mx-auto max-w-2xl text-center text-lg leading-9 text-ink md:text-xl md:leading-10">
                {introContext}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <figure className="mx-auto mt-9 max-w-36 md:max-w-40">
              <div className="about-photo-arrival aspect-square overflow-hidden rounded-full border border-sand-dark/70 bg-parchment">
                <img
                  src="/hike.jpg"
                  alt="Karina Macancela hiking outdoors."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-4 space-y-1 text-center">
                <p className="font-display text-lg leading-tight text-ink">{siteConfig.name}</p>
              </figcaption>
            </figure>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="grid gap-8 border-b border-sand-dark/70 pb-10 md:grid-cols-[0.85fr_1.15fr] md:items-end">
              <h2 className="font-display text-4xl leading-[1.04] tracking-[-0.02em] text-ink md:text-5xl">
                Outside the editor.
              </h2>
              <p className="max-w-2xl leading-relaxed text-ink-muted md:justify-self-end">
                The things I practice outside of coding shape the way I build: patience from music, attention from painting and design, steadiness from movement, and a habit of noticing small details before they become big ones.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hobbies.map((group, index) => (
              <AnimatedSection key={group.title} delay={index * 0.05}>
                <div className="flex min-h-72 flex-col justify-between rounded-lg border border-sand-dark/70 bg-parchment p-6 transition-colors duration-300 hover:border-tidal">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="max-w-44 text-2xl font-semibold leading-tight text-ink">{group.title}</h3>
                      <span className="font-mono text-xs font-semibold text-ink-muted">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="mt-5 leading-relaxed text-ink-muted">{group.note}</p>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-sand-dark/70 bg-warm-white px-3 py-1 text-sm font-semibold text-deep-water"
                      >
                        {item}
                      </span>
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
