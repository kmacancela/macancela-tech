import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false

  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}

export function useInView(margin = '-60px') {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(() => prefersReducedMotion())

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let observer: IntersectionObserver | undefined

    function revealImmediately() {
      setIsInView(true)
      observer?.disconnect()
    }

    function handleMotionPreferenceChange(event: MediaQueryListEvent) {
      if (event.matches) revealImmediately()
    }

    if (motionQuery.matches) {
      revealImmediately()
      motionQuery.addEventListener('change', handleMotionPreferenceChange)

      return () => {
        motionQuery.removeEventListener('change', handleMotionPreferenceChange)
      }
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer?.unobserve(el)
        }
      },
      { rootMargin: margin }
    )

    observer.observe(el)
    motionQuery.addEventListener('change', handleMotionPreferenceChange)

    return () => {
      observer?.disconnect()
      motionQuery.removeEventListener('change', handleMotionPreferenceChange)
    }
  }, [margin])

  return { ref, isInView }
}
