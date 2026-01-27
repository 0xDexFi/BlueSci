import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    number: '01',
    title: 'AI Consulting & Strategy Advisory',
    subtitle: 'Strategic Foundation',
    description: 'Comprehensive audits, strategic roadmapping, and governance frameworks that align AI initiatives with your core business objectives.',
    features: [
      'AI Readiness Assessments & Infrastructure Audits',
      'Phased Adoption Roadmapping with ROI Projections',
      'Governance & Ethics Frameworks for Responsible AI',
    ],
    gradient: 'from-blue-500 to-cyan-500',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 2,
    number: '02',
    title: 'Intelligent Automation & Process Optimization',
    subtitle: 'Operational Intelligence',
    description: 'Transform repetitive business processes into self-managing systems that learn, adapt, and improve over time.',
    features: [
      'Workflow Intelligence & Self-Managing Systems',
      'Document Processing with Near-Human Accuracy',
      'Decision Automation with Smart Escalation',
    ],
    gradient: 'from-cyan-500 to-teal-500',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    number: '03',
    title: 'Data Solutions & Consulting',
    subtitle: 'Analytics Infrastructure',
    description: 'End-to-end data systems that uncover trends, deliver real-time insights, and process massive data volumes at scale.',
    features: [
      'Advanced Dataset Analysis & Trend Discovery',
      'Real-Time Analytics Dashboards & Visualizations',
      'Big Data Processing for Enterprise Scale',
    ],
    gradient: 'from-teal-500 to-emerald-500',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    id: 4,
    number: '04',
    title: 'AI Training & Workforce Development',
    subtitle: 'Capability Building',
    description: 'Comprehensive upskilling programs that transition your staff into a knowledge-based economy with technological independence.',
    features: [
      'Corporate Competency Training Programs',
      'Technical Team Specialized Instruction',
      'Leadership & Strategy Executive Workshops',
    ],
    gradient: 'from-blue-600 to-indigo-500',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 5,
    number: '05',
    title: 'Educational Intelligence & Academic Innovation',
    subtitle: 'Academic Acceleration',
    description: 'AI-augmented tools for academic success modeling, research acceleration, and market-driven program discovery.',
    features: [
      'Academic Success & Retention Modeling',
      'Research & Grant Acceleration Tools',
      'Market-Driven Program & Skill Gap Discovery',
    ],
    gradient: 'from-indigo-500 to-violet-500',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    id: 6,
    number: '06',
    title: 'Academic Research & Publication Support',
    subtitle: 'Scientific Research',
    description: 'AI-assisted statistical modeling, manuscript development, and research dissemination for academic and scientific teams.',
    features: [
      'Statistical Modelling & Disease Dynamics Simulation',
      'Manuscript Development & Optimization',
      'Research Dissemination & Visual Abstracts',
    ],
    gradient: 'from-violet-500 to-purple-500',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
]

const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="service-card group relative"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        className="relative h-full glass-card-hover rounded-2xl p-8 cursor-pointer overflow-hidden"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        <div className="absolute top-6 right-6 font-mono text-sm text-white/20 group-hover:text-white/40 transition-colors duration-300">
          {service.number}
        </div>

        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10 mb-6 transition-transform duration-300 group-hover:scale-110`}>
          <div className="text-white/80">{service.icon}</div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-white/40 mb-1">
              {service.subtitle}
            </p>
            <h3 className="font-display text-xl font-semibold text-white group-hover:gradient-text transition-all duration-300">
              {service.title}
            </h3>
          </div>

          <p className="text-white/50 text-sm leading-relaxed">
            {service.description}
          </p>

          <div
            className="grid transition-all duration-500 ease-out"
            style={{
              gridTemplateRows: isExpanded ? '1fr' : '0fr',
            }}
          >
            <div className="overflow-hidden">
              <ul className="space-y-2 pt-4 border-t border-white/10">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-white/60 transition-all duration-300"
                    style={{
                      opacity: isExpanded ? 1 : 0,
                      transform: isExpanded ? 'translateX(0)' : 'translateX(-8px)',
                      transitionDelay: isExpanded ? `${idx * 75}ms` : '0ms',
                    }}
                  >
                    <svg className="w-4 h-4 mt-0.5 text-bluesci-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 transition-all duration-300">
          <svg
            className={`w-6 h-6 text-white/40 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

const Services = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)

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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative section-padding bg-bluesci-darker overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bluesci-accent/5 rounded-full blur-[150px]" />
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom relative z-10">
        <div ref={headerRef} className="text-center mb-20">
          <p className="text-bluesci-accent font-mono text-sm tracking-wider uppercase mb-4">
            AI Automation & Implementation
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            End-to-End{' '}
            <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60">
            From strategic advisory to production deployment, we build AI systems
            that transform operations and drive measurable business outcomes.
          </p>
        </div>

        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/50 mb-6">Need a custom solution?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-bluesci-accent hover:text-bluesci-accent-light transition-colors font-medium"
          >
            Let's discuss your requirements
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
