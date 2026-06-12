import { useInView } from '../../hooks/useInView'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animationClassName?: string
  initialClassName?: string
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  animationClassName = 'animate-[soft-slide_0.65s_cubic-bezier(0.22,1,0.36,1)_both]',
  initialClassName = 'opacity-0',
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView()
  const delayClass = delay >= 0.15 ? 'delay-150' : delay >= 0.08 ? 'delay-75' : ''

  return (
    <div
      ref={ref}
      className={`${className} ${delayClass} ${isInView ? animationClassName : initialClassName}`}
    >
      {children}
    </div>
  )
}
