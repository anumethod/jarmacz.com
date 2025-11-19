'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  target: number
  label: string
}

export default function AnimatedCounter({ target, label }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const increment = target / (duration / 16)
          let current = 0

          const updateCounter = () => {
            current += increment
            if (current < target) {
              setCount(Math.floor(current))
              requestAnimationFrame(updateCounter)
            } else {
              setCount(target % 1 === 0 ? target : parseFloat(target.toFixed(1)))
            }
          }

          updateCounter()
        }
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [target, hasAnimated])

  return (
    <div className="metric" ref={counterRef}>
      <span className="metric-value">
        {count}
      </span>
      <span className="metric-label">{label}</span>
    </div>
  )
}

