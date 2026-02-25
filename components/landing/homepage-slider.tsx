'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Slide = {
  _id: string
  title: string
  subtitle?: string
  imageUrl: string
  buttonText?: string
  buttonLink?: string
}

const SLIDE_INTERVAL = 7000

export function HomepageSlider() {
  const [slides, setSlides] = useState<Slide[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const router = useRouter()

  useEffect(() => {
    let isMounted = true

    const fetchSlides = async () => {
      try {
        const res = await fetch('/api/homepage/slides', { cache: 'no-store' })
        if (!res.ok) return
        const data = await res.json()
        if (isMounted && Array.isArray(data.data)) {
          setSlides(data.data)
        }
      } catch (error) {
        // silently ignore for public landing
      }
    }

    fetchSlides()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    if (!slides.length) return
    if (isHovering) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, SLIDE_INTERVAL)

    return () => clearInterval(timer)
  }, [slides, isHovering])

  if (!slides.length) {
    return null
  }

  const goToSlide = (index: number) => {
    if (!slides.length) return
    setCurrentIndex((index + slides.length) % slides.length)
  }

  const currentSlide = slides[currentIndex]

  const handleButtonClick = () => {
    if (!currentSlide?.buttonLink) return
    if (currentSlide.buttonLink.startsWith('http')) {
      window.location.href = currentSlide.buttonLink
    } else {
      router.push(currentSlide.buttonLink)
    }
  }

  return (
    <section
      className="relative w-full overflow-hidden bg-gray-900 text-white"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative h-[420px] md:h-[520px]">
        {/* Slide background */}
        <div className="absolute inset-0">
          <img
            src={currentSlide.imageUrl}
            alt={currentSlide.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex items-center">
          <div className="max-w-xl space-y-4 md:space-y-6">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Healthcare ERP Platform
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {currentSlide.title}
            </h2>
            {currentSlide.subtitle && (
              <p className="text-sm md:text-lg text-blue-100">
                {currentSlide.subtitle}
              </p>
            )}

            {currentSlide.buttonText && currentSlide.buttonLink && (
              <button
                onClick={handleButtonClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold text-sm md:text-base shadow-lg hover:bg-blue-50 transition-colors"
              >
                {currentSlide.buttonText}
              </button>
            )}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goToSlide(currentIndex - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 border border-white/10 backdrop-blur-sm transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goToSlide(currentIndex + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 border border-white/10 backdrop-blur-sm transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Indicator dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide._id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              className={cn(
                'h-2 rounded-full transition-all',
                index === currentIndex
                  ? 'w-6 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/80'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

