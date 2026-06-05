import { useInView } from '../../hooks/useInView'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`${className} ${isInView ? 'animate-[fade-in-up_0.7s_cubic-bezier(0.25,0.1,0.25,1)_both]' : 'opacity-0'}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}
