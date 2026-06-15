import { AnimatedSection } from '../components/ui/AnimatedSection'
import { siteConfig } from '../data/siteConfig'

const introContext = 'I have been coding since I was 12, so building software has always felt like both a craft and a creative outlet for turning ideas into reality. Throughout my career, I have worked with SaaS startups, analytics teams, healthcare organizations, and enterprise product teams, but what has remained consistent is the opportunity to solve interesting, complex problems. I find fulfillment in understanding challenges from multiple perspectives, collaborating with innovative teams to explore solutions, and delivering results. Away from the keyboard, I find balance through hiking, biking, yoga, swimming, and by connecting with my local community.'

export function AboutPage() {
  return (
    <div className="animate-[fade-in_0.4s_ease_both]">
      <section className="px-6 pt-28 pb-16 md:pt-32 md:pb-20">
        <h1 className="sr-only">About {siteConfig.name}</h1>
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection animationClassName="about-intro-copy">
            <div className="mx-auto space-y-5">
              <p className="mx-auto max-w-2xl text-center text-lg leading-9 text-ink md:text-xl md:leading-10">
                {introContext}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <figure className="mx-auto mt-9 max-w-36 md:max-w-40">
              <div className="about-photo-roll-target">
                <div className="about-photo-arrival aspect-square overflow-hidden rounded-full border border-sand-dark/70 bg-parchment">
                  <img
                    src="/hike.jpg"
                    alt="Karina Macancela hiking outdoors."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <figcaption className="mt-4 space-y-1 text-center">
                <p className="font-display text-lg leading-tight text-ink">{siteConfig.name}</p>
              </figcaption>
            </figure>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
