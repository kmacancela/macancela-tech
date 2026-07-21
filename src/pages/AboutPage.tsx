import { AnimatedSection } from '../components/ui/AnimatedSection'

export function AboutPage() {
  return (
    <div className="animate-[fade-in_0.4s_ease_both]">
      <section className="px-6 pt-28 pb-16 md:pt-32 md:pb-20">
        <h1 className="sr-only">About</h1>
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection animationClassName="about-intro-copy">
            <div className="mx-auto max-w-2xl space-y-6 text-lg leading-9 text-ink md:text-xl md:leading-10">
              <p>
                I have been coding since I was 12, so building software has always felt like both a craft and a creative outlet for turning ideas into reality. Throughout my career, I have worked with SaaS startups, analytics teams, healthcare organizations, and enterprise product teams, but what has remained consistent is the opportunity to solve interesting, complex problems.
              </p>
              <p>
                I find fulfillment in understanding challenges from multiple perspectives, collaborating with innovative teams to explore solutions, and delivering results. Away from the keyboard, I find balance through hiking, birding, biking, yoga, swimming, and by connecting with my local community.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
