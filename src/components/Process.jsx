import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into your business, understanding challenges, opportunities, and strategic objectives.',
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We design a tailored AI roadmap with clear milestones, success metrics, and ROI projections.',
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Build',
    description: 'Our team implements production-grade AI solutions using proven methodologies and best practices.',
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'We launch your AI systems with rigorous testing, monitoring, and performance optimization.',
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Scale',
    description: 'We ensure your AI capabilities grow with your business through continuous improvement and support.',
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
]

const Process = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const timelineRef = useRef(null)
  const progressRef = useRef(null)
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
        headerRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      )

      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 70%',
              end: 'bottom 70%',
              scrub: 1,
            },
          }
        )
      }

      gsap.fromTo(
        '.process-step',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [isMobile])

  return (
    <section
      ref={sectionRef}
      className="relative section-padding bg-bluesci-darker overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-bluesci-cyan/5 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-bluesci-accent/5 rounded-full blur-[100px] md:blur-[150px]" />
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom relative z-10">
        <div ref={headerRef} className="text-center mb-12 md:mb-20">
          <p className="text-bluesci-accent font-mono text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4">
            Our Process
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            How We{' '}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="max-w-xl md:max-w-2xl mx-auto text-base md:text-lg text-white/60 px-2">
            A proven methodology refined across 25+ successful AI implementations.
            Transparent, collaborative, and focused on delivering measurable results.
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          <div className={`absolute ${isMobile ? 'left-6' : 'left-1/2 -translate-x-1/2'} top-0 bottom-0 w-px bg-white/10`}>
            <div
              ref={progressRef}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-bluesci-accent via-bluesci-cyan to-bluesci-teal origin-top"
            />
          </div>

          <div className="space-y-8 md:space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`process-step relative flex items-start gap-4 md:gap-8 ${
                  isMobile
                    ? 'flex-row pl-4'
                    : index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {isMobile && (
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-bluesci-dark border-2 border-bluesci-accent flex items-center justify-center text-bluesci-accent shadow-lg shadow-bluesci-accent/20">
                      {step.icon}
                    </div>
                  </div>
                )}

                <div className={`flex-1 ${!isMobile && (index % 2 === 0 ? 'text-right' : 'text-left')}`}>
                  <div className={`inline-block glass-card rounded-xl md:rounded-2xl p-4 md:p-6 w-full md:max-w-md ${
                    !isMobile && (index % 2 === 0 ? 'ml-auto' : 'mr-auto')
                  }`}>
                    <div className={`flex items-center gap-3 md:gap-4 mb-3 md:mb-4 ${
                      !isMobile && (index % 2 === 0 ? 'justify-end' : 'justify-start')
                    }`}>
                      <span className="font-mono text-xs md:text-sm text-bluesci-accent">
                        {step.number}
                      </span>
                      <h3 className="font-display text-lg md:text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {!isMobile && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-12 md:w-14 h-12 md:h-14 rounded-full bg-bluesci-dark border-2 border-bluesci-accent flex items-center justify-center text-bluesci-accent shadow-lg shadow-bluesci-accent/20">
                      {step.icon}
                    </div>
                  </div>
                )}

                {!isMobile && <div className="flex-1" />}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 text-base md:text-lg font-medium text-white rounded-full bg-gradient-to-r from-bluesci-accent to-bluesci-cyan hover:opacity-90 transition-opacity"
          >
            Start Your AI Journey
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Process
