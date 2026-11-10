import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import ReviewBubble from './ReviewBubble.jsx'
import Icon from './Icon.jsx'
import { reviews } from '../data/reviews.js'

export default function ReviewCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const activeReview = reviews[activeIndex]

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % reviews.length)
    }, 7000)

    return () => window.clearInterval(timer)
  }, [isPaused, shouldReduceMotion])

  const move = (offset) => {
    setActiveIndex((index) => (index + offset + reviews.length) % reviews.length)
  }

  return (
    <div
      className="mx-auto max-w-3xl"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false)
      }}
    >
      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeIndex}
            initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, x: -24 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: 'easeOut' }}
          >
            <ReviewBubble
              name={activeReview.name}
              text={activeReview.text}
              index={activeIndex}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-5 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous review"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-brand-dark transition hover:border-brand hover:bg-brand/5"
        >
          <Icon name="ChevronLeft" className="h-5 w-5" />
        </button>
        <span className="min-w-[4.5rem] text-center text-sm font-medium text-muted" aria-live="polite">
          {activeIndex + 1} / {reviews.length}
        </span>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next review"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-brand-dark transition hover:border-brand hover:bg-brand/5"
        >
          <Icon name="ChevronRight" className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
