import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { pressLogos } from '../data/mediaFeatures.js'

function Logo({ name, image, href, decorative = false }) {
  const content = (
    <img
      src={image}
      alt={decorative ? '' : name}
      aria-hidden={decorative || undefined}
      className="h-[52px] w-[132px] object-contain"
      loading="eager"
    />
  )

  return (
    <div className="flex h-[104px] w-[168px] flex-shrink-0 items-center justify-center rounded-[18px] border border-line bg-white px-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card">
      {decorative ? content : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label={`Read ${name} feature`}
          className="flex h-full w-full items-center justify-center rounded-[18px] focus-visible:outline-offset-[-3px]"
        >
          {content}
        </a>
      )}
    </div>
  )
}

export default function LogoCarousel() {
  const carouselRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return undefined

    const carousel = carouselRef.current
    if (!carousel) return undefined

    let frameId
    let previousTime
    const scroll = (time) => {
      if (previousTime !== undefined) {
        const loopWidth = carousel.scrollWidth / 2
        if (loopWidth > 0) {
          carousel.scrollLeft += Math.min(time - previousTime, 50) * 0.03
          if (carousel.scrollLeft >= loopWidth) carousel.scrollLeft -= loopWidth
        }
      }

      previousTime = time
      frameId = window.requestAnimationFrame(scroll)
    }

    frameId = window.requestAnimationFrame(scroll)
    return () => window.cancelAnimationFrame(frameId)
  }, [isPaused, shouldReduceMotion])

  const handleWheel = (event) => {
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault()
      event.currentTarget.scrollLeft += event.deltaY
    }
  }

  return (
    <div
      ref={carouselRef}
      className="logo-carousel"
      role="region"
      aria-label="Publications featuring Aanchal Narang"
      tabIndex={0}
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false)
      }}
      onWheel={handleWheel}
    >
      <div className="logo-carousel__track">
        <div className="logo-carousel__group">
          {pressLogos.map((logo) => <Logo key={logo.name} {...logo} />)}
        </div>
        <div className="logo-carousel__group" aria-hidden="true">
          {pressLogos.map((logo) => <Logo key={logo.name} {...logo} decorative />)}
        </div>
      </div>
    </div>
  )
}
