import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const About = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current.querySelectorAll('.reveal-line'),
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative section-padding bg-bluesci-dark overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Visual Element */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full border border-bluesci-accent/20 rounded-full animate-spin-slow" />
                <div className="absolute w-3/4 h-3/4 border border-bluesci-cyan/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
                <div className="absolute w-1/2 h-1/2 border border-bluesci-teal/20 rounded-full animate-spin-slow" style={{ animationDuration: '15s' }} />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-7xl md:text-8xl font-bold gradient-text mb-2">
                    15+
                  </div>
                  <div className="text-white/60 text-lg">Years Combined</div>
                  <div className="text-white/60 text-lg">Experience</div>
                </div>
              </div>

              <div className="absolute top-0 right-0 glass-card p-4 rounded-xl animate-float">
                <div className="text-2xl font-bold gradient-text">25+</div>
                <div className="text-xs text-white/50">Projects</div>
              </div>
              <div className="absolute bottom-0 left-0 glass-card p-4 rounded-xl animate-float" style={{ animationDelay: '-2s' }}>
                <div className="text-2xl font-bold gradient-text">98%</div>
                <div className="text-xs text-white/50">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div ref={textRef} className="order-1 lg:order-2">
            <div className="overflow-hidden mb-6">
              <p className="reveal-line text-bluesci-accent font-mono text-sm tracking-wider uppercase">
                About BlueSci
              </p>
            </div>

            <div className="overflow-hidden mb-8">
              <h2 className="reveal-line font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                AI-Powered Solutions{' '}
                <span className="gradient-text">for Every Decision</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <div className="overflow-hidden">
                <p className="reveal-line">
                  We combine deep AI expertise with real-world business know-how.
                  Our team has worked hands-on with the systems that keep companies running
                  &mdash; from healthcare operations to hiring pipelines and legal processes
                  &mdash; not just talked about them from the sidelines.
                </p>
              </div>

              <div className="overflow-hidden">
                <p className="reveal-line">
                  We believe that data is more than just the new currency of the digital age
                  &mdash; it's the fuel that drives decision-making, strategy, and success.
                  Our suite of services is designed to empower you with the data intelligence
                  you need to thrive in today's competitive landscape.
                </p>
              </div>

              <div className="overflow-hidden">
                <p className="reveal-line">
                  Beyond consultancy, we provide tailored services and workforce
                  development to help your team grow alongside the technology.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                { icon: '01', label: 'Full-Stack AI Capability' },
                { icon: '02', label: 'Research-Grade Methodology' },
                { icon: '03', label: 'Rapid Implementation' },
                { icon: '04', label: 'Knowledge Transfer Focus' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-white/70">
                  <span className="font-mono text-xs text-bluesci-accent">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
