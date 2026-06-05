import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Badge } from '../components/ui/Badge'
import { blogPosts } from '../data/blogPosts'

export function BlogPage() {
  return (
    <div className="px-6 pt-32 pb-24 animate-[fade-in_0.3s_ease_both] md:pt-40">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionHeading
            title="Blog"
            accent="Thoughts & writing"
            subtitle="A future home for engineering notes, project writeups, and reflections on product craft."
          />
        </AnimatedSection>

        <div className="border-t border-sand-dark/70">
          {blogPosts.map((post, i) => (
            <AnimatedSection key={post.id} delay={i * 0.08}>
              <article className="group grid gap-5 border-b border-sand-dark/70 py-8 md:grid-cols-[10rem_1fr]">
                <div className="flex items-center gap-3 md:block">
                  <time className="text-xs tracking-wide text-ink-muted">{post.date}</time>
                  <span className="text-xs text-ink-muted/50 md:mt-2 md:block">{post.readingTime}</span>
                </div>
                <div>
                  <h3 className="font-display text-3xl leading-none text-ink transition-colors duration-300 group-hover:text-deep-water md:text-4xl">
                    {post.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm text-ink-muted leading-relaxed">{post.excerpt}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="tidal">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
