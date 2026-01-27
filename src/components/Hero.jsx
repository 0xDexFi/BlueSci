import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NeuralNetwork from './NeuralNetwork'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const statsRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current.querySelectorAll('.word'),
        { y: isMobile ? 50 : 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: isMobile ? 0.8 : 1.2,
          ease: 'power4.out',
          stagger: 0.08,
          delay: 0.5,
        }
      )

      gsap.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.2 }
      )

      gsap.fromTo(
        ctaRef.current.children,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
          delay: 1.5,
        }
      )

      gsap.fromTo(
        statsRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.08,
          delay: 1.8,
        }
      )

      if (!isMobile) {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            gsap.set(titleRef.current, { y: self.progress * 100 })
            gsap.set(subtitleRef.current, { y: self.progress * 50 })
          },
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [isMobile])

  const stats = [
    { value: '25+', label: 'Projects Delivered' },
    { value: '15+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50M+', label: 'Data Points Processed' },
  ]

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-bluesci-dark pt-20 pb-12 md:py-0"
    >
      {!isMobile && <NeuralNetwork />}

      <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-bluesci-accent/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-bluesci-cyan/15 rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-1000" />

      <div className="relative z-10 container-custom text-center px-4">
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8">
          <span className="w-2 h-2 bg-bluesci-teal rounded-full animate-pulse" />
          <span className="text-xs md:text-sm text-white/70">Now accepting new clients for Q1 2026</span>
        </div>

        <h1
          ref={titleRef}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight mb-6 md:mb-8"
        >
          <span className="overflow-hidden inline-block">
            <span className="word inline-block">We</span>
          </span>{' '}
          <span className="overflow-hidden inline-block">
            <span className="word inline-block gradient-text">Engineer</span>
          </span>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          <span className="overflow-hidden inline-block">
            <span className="word inline-block">The</span>
          </span>{' '}
          <span className="overflow-hidden inline-block">
            <span className="word inline-block text-white/90">Future</span>
          </span>{' '}
          <span className="overflow-hidden inline-block">
            <span className="word inline-block text-white/60">of AI.</span>
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="max-w-xl md:max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-white/60 leading-relaxed mb-8 md:mb-12 px-2"
        >
          Through tailored intelligence solutions that transform how organizations
          operate, decide, and compete &mdash; we deliver measurable impact from
          strategy through implementation.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-12 md:mb-20">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 text-base md:text-lg font-medium text-white rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-bluesci-accent to-bluesci-cyan transition-transform duration-500 group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-r from-bluesci-cyan to-bluesci-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative">Book a Discovery Call</span>
            <svg
              className="relative w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 text-base md:text-lg font-medium text-white/80 hover:text-white rounded-full border border-white/20 hover:border-white/40 transition-all duration-300"
          >
            <span>Explore Services</span>
            <svg
              className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-3 md:p-0">
              <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce hidden md:flex">
        <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <div
        className="absolute inset-0 opacity-[0.01] md:opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
    </section>
  )
}

export default Hero
