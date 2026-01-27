import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const consultations = [
  {
    id: 1,
    title: 'AI Strategy & Roadmap Development',
    description: 'Comprehensive evaluation and strategic planning for your AI journey.',
    items: [
      { name: 'AI Readiness Assessment', desc: 'Evaluation of your organization\'s data maturity, technical capabilities, and cultural preparedness' },
      { name: 'Opportunity Identification', desc: 'Discovery workshops to pinpoint high-impact AI use cases specific to your business challenges' },
      { name: 'Implementation Roadmap', desc: 'Phased execution plans with clear milestones, resource requirements, and success metrics' },
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Technology Selection & Vendor Evaluation',
    description: 'Unbiased platform assessment and integration architecture.',
    items: [
      { name: 'Platform Assessment', desc: 'Unbiased evaluation of AI tools, platforms, and vendors against your specific requirements' },
      { name: 'Build vs. Buy Analysis', desc: 'Strategic guidance on when to develop custom solutions versus adopting existing products' },
      { name: 'Integration Architecture', desc: 'Technical blueprints for connecting AI solutions with your existing enterprise systems' },
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.42 3.24V7.17l5.42-3.24m0 11.24l5.42 3.24V7.17l-5.42-3.24m0 11.24V3.93m5.42 3.24l5.42-3.24v11.24l-5.42 3.24" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Organizational Transformation',
    description: 'Building internal AI capability that compounds over time.',
    items: [
      { name: 'AI Adoption Management', desc: 'Strategies for driving adoption and managing the human side of AI implementation' },
      { name: 'Skills Gap Analysis', desc: 'Assessment of current capabilities and training roadmaps for upskilling teams' },
      { name: 'Center of Excellence Design', desc: 'Frameworks for building internal AI competency that compounds over time' },
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
]

const Consultations = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const [expandedId, setExpandedId] = useState(1)

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
        '.consult-card',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.consult-grid',
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
      id="consulting"
      className="relative section-padding bg-bluesci-dark overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-bluesci-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-bluesci-accent/5 rounded-full blur-[150px]" />
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom relative z-10">
        <div ref={headerRef} className="max-w-3xl mb-16">
          <p className="text-bluesci-accent font-mono text-sm tracking-wider uppercase mb-4">
            Strategic Advisory
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            AI{' '}
            <span className="gradient-text">Consultations</span>
          </h2>
          <p className="text-lg text-white/60">
            Expert guidance for organizations at every stage of their AI journey.
            From strategy development to organizational transformation, we help you
            navigate the complexities of AI adoption with clarity and confidence.
          </p>
        </div>

        <div className="consult-grid space-y-4">
          {consultations.map((consult) => (
            <motion.div
              key={consult.id}
              className="consult-card"
              layout
            >
              <div
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 ${
                  expandedId === consult.id
                    ? 'border-bluesci-accent/30'
                    : 'border-transparent hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => setExpandedId(expandedId === consult.id ? null : consult.id)}
                  className="w-full p-6 md:p-8 flex items-start gap-4 md:gap-6 text-left"
                >
                  <div className="w-14 h-14 rounded-xl bg-bluesci-accent/10 flex items-center justify-center flex-shrink-0 text-bluesci-accent">
                    {consult.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-white mb-1">
                      {consult.title}
                    </h3>
                    <p className="text-sm text-white/50">{consult.description}</p>
                  </div>
                  <motion.svg
                    className="w-6 h-6 text-white/40 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ rotate: expandedId === consult.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedId === consult.id ? 'auto' : 0,
                    opacity: expandedId === consult.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-4 ml-0 md:ml-20">
                    <div className="h-px bg-gradient-to-r from-bluesci-accent/50 via-bluesci-cyan/50 to-transparent" />
                    {consult.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-bluesci-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-bluesci-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-white font-medium text-sm">{item.name}</h4>
                          <p className="text-white/50 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 glass-card rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Not sure where to start?
          </h3>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation to discuss your challenges and explore
            how AI can drive value for your organization.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-medium text-white rounded-full bg-gradient-to-r from-bluesci-accent to-bluesci-cyan hover:opacity-90 transition-opacity"
          >
            Schedule a Call
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Consultations
