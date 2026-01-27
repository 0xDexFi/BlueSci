import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const industries = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    fullName: 'Healthcare & Life Sciences',
    description: 'Accelerating medical breakthroughs with AI-powered diagnostics, workflow automation, and drug discovery modeling.',
    applications: [
      'Administrative workflow automation',
      'Medical imaging analysis and diagnostic support',
      'Drug discovery acceleration through AI modeling',
    ],
    stats: { projects: '8+', impact: '40% faster diagnostics' },
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
    image: (
      <svg className="w-16 h-16 md:w-24 md:h-24 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    id: 'hr',
    name: 'HR',
    fullName: 'Human Resources & Recruiting',
    description: 'Intelligent systems for talent acquisition, automated outreach, and internal knowledge management.',
    applications: [
      'Resume screening and candidate ranking systems',
      'Automated outreach and interview scheduling',
      'Internal knowledge bases and policy assistants',
    ],
    stats: { projects: '6+', impact: '65% faster hiring' },
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-500/10',
    image: (
      <svg className="w-16 h-16 md:w-24 md:h-24 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    fullName: 'Real Estate',
    description: 'AI-driven property valuation, market analysis, virtual staging, and predictive maintenance dashboards.',
    applications: [
      'AI-driven property valuation and market analysis',
      'Virtual staging and listing optimization',
      'AI dashboards that predict maintenance needs',
    ],
    stats: { projects: '5+', impact: '30% better valuations' },
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-500/10',
    image: (
      <svg className="w-16 h-16 md:w-24 md:h-24 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
  {
    id: 'legal',
    name: 'Legal',
    fullName: 'Legal Services',
    description: 'AI-powered contract analysis, automated compliance monitoring, and case research acceleration.',
    applications: [
      'Contract analysis and legal document review',
      'Automated compliance monitoring',
      'Automated case research and precedent analysis',
    ],
    stats: { projects: '6+', impact: '70% faster review' },
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    image: (
      <svg className="w-16 h-16 md:w-24 md:h-24 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
]

const Industries = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const [activeIndustry, setActiveIndustry] = useState('healthcare')

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

      gsap.fromTo(
        '.industry-tab',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: '.industry-tabs',
            start: 'top 85%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const activeData = industries.find((i) => i.id === activeIndustry)

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative section-padding bg-bluesci-darker overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-bluesci-accent/3 rounded-full blur-[150px] md:blur-[200px]" />
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom relative z-10">
        <div ref={headerRef} className="text-center mb-10 md:mb-16">
          <p className="text-bluesci-accent font-mono text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4">
            Specialized Verticals
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Industries We{' '}
            <span className="gradient-text">Transformed</span>
          </h2>
          <p className="max-w-xl md:max-w-2xl mx-auto text-base md:text-lg text-white/60 px-2">
            Deep domain expertise combined with cutting-edge AI capabilities.
            We understand the unique challenges and opportunities in each sector.
          </p>
        </div>

        <div className="industry-tabs overflow-x-auto pb-4 mb-10 md:mb-16 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex md:flex-wrap md:justify-center gap-2 md:gap-3 min-w-max md:min-w-0">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                className={`industry-tab relative px-4 md:px-6 py-2.5 md:py-3 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  activeIndustry === industry.id
                    ? 'text-white'
                    : 'text-white/60 hover:text-white/80 bg-white/5'
                }`}
              >
                {activeIndustry === industry.id && (
                  <motion.div
                    layoutId="activeIndustry"
                    className={`absolute inset-0 bg-gradient-to-r ${industry.color} rounded-full`}
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <span className="hidden sm:inline">{industry.fullName}</span>
                  <span className="sm:hidden">{industry.name}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeIndustry}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          <div className="relative order-2 lg:order-1">
            <div className={`aspect-square max-w-sm md:max-w-none mx-auto rounded-2xl md:rounded-3xl ${activeData.bgColor} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 opacity-30">
                <div className={`absolute top-1/4 left-1/4 w-20 md:w-32 h-20 md:h-32 rounded-full bg-gradient-to-r ${activeData.color} blur-2xl md:blur-3xl animate-pulse`} />
                <div className={`absolute bottom-1/4 right-1/4 w-24 md:w-40 h-24 md:h-40 rounded-full bg-gradient-to-r ${activeData.color} blur-2xl md:blur-3xl animate-pulse delay-1000`} />
              </div>

              <div className="relative">{activeData.image}</div>

            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              {activeData.fullName}
            </h3>
            <p className="text-base md:text-lg text-white/60 mb-6 md:mb-8">
              {activeData.description}
            </p>

            <div className="space-y-3 md:space-y-4">
              <h4 className="text-xs md:text-sm font-medium text-white/40 uppercase tracking-wider">
                Key Applications
              </h4>
              {activeData.applications.map((app, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-white/5 active:bg-white/10 md:hover:bg-white/10 transition-colors"
                >
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-r ${activeData.color} flex items-center justify-center flex-shrink-0`}>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-white/80">{app}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className={`mt-6 md:mt-8 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 md:px-6 py-3 rounded-full bg-gradient-to-r ${activeData.color} text-white font-medium hover:opacity-90 transition-opacity text-sm md:text-base`}
            >
              Discuss Your {activeData.name} Project
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Industries
