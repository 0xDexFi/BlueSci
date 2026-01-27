import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const differentiators = [
  {
    title: 'Proven Expertise',
    description: '15+ years combined experience across data science, software engineering, and scientific research.',
  },
  {
    title: 'Full-Stack Capability',
    description: 'End-to-end delivery from strategy through implementation. No handoffs, no gaps, no surprises.',
  },
  {
    title: 'Knowledge Transfer',
    description: 'We build capability, not dependency. Every engagement leaves your team stronger and more self-sufficient.',
  },
]

const Differentiators = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const itemsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
          },
        }
      )

      gsap.fromTo(
        itemsRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: itemsRef.current,
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative section-padding bg-bluesci-darker overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bluesci-accent/3 rounded-full blur-[200px]" />
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <p className="text-bluesci-accent font-mono text-sm tracking-wider uppercase mb-4">
            What Sets Us Apart
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Built{' '}
            <span className="gradient-text">Different</span>
          </h2>
          <p className="text-lg text-white/60">
            We bring a unique combination of deep technical expertise, research
            methodology, and practical business sense to every project.
          </p>
        </div>

        <div ref={itemsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {differentiators.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="font-display text-lg md:text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentiators
