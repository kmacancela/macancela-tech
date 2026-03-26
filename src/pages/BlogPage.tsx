import { motion } from 'motion/react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Badge } from '../components/ui/Badge'
import { blogPosts } from '../data/blogPosts'

export function BlogPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-28 pb-24 px-6"
    >
      <div className="mx-auto max-w-3xl">
        <AnimatedSection>
          <SectionHeading
            title="Blog"
            accent="Thoughts & writing"
            subtitle="Thoughts on web design, fashion branding, and building beautiful digital experiences."
          />
        </AnimatedSection>

        <div className="divide-y divide-sand-dark/40">
          {blogPosts.map((post, i) => (
            <AnimatedSection key={post.id} delay={i * 0.08}>
              <article className="group py-8 first:pt-0">
                <div className="mb-2 flex items-center gap-3">
                  <time className="text-xs tracking-wide text-ink-muted">{post.date}</time>
                  <span className="text-xs text-ink-muted/50">{post.readingTime}</span>
                </div>
                <h3 className="mb-2 font-display text-xl text-ink transition-colors duration-300 group-hover:text-deep-water md:text-2xl">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm text-ink-muted leading-relaxed">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="tidal">{tag}</Badge>
                  ))}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
