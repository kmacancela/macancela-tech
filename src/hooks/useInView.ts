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

    if (motionQuery.matches) {
      function handleMotionPreferenceChange(event: MediaQueryListEvent) {
        if (event.matches) setIsInView(true)
      }

      setIsInView(true)
      motionQuery.addEventListener('change', handleMotionPreferenceChange)

      return () => {
        motionQuery.removeEventListener('change', handleMotionPreferenceChange)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer?.unobserve(el)
        }
      },
      { rootMargin: margin }
    )

    function handleMotionPreferenceChange(event: MediaQueryListEvent) {
      if (!event.matches) return

      setIsInView(true)
      observer.disconnect()
    }

    observer.observe(el)
    motionQuery.addEventListener('change', handleMotionPreferenceChange)

    return () => {
      observer?.disconnect()
      motionQuery.removeEventListener('change', handleMotionPreferenceChange)
    }
  }, [margin])

  return { ref, isInView }
}
