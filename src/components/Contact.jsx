import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const Contact = () => {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-reveal',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Connect to your backend API to handle form submissions
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative section-padding bg-bluesci-dark overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-bluesci-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-bluesci-cyan/5 rounded-full blur-[150px]" />
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="contact-reveal">
              <p className="text-bluesci-accent font-mono text-sm tracking-wider uppercase mb-4">
                Get In Touch
              </p>
            </div>
            <h2 className="contact-reveal font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Build{' '}
              <span className="gradient-text">Something Great</span>
            </h2>
            <p className="contact-reveal text-lg text-white/60 mb-12">
              Ready to transform your business with AI? Schedule a discovery call
              to discuss your challenges and explore how we can help.
            </p>

            <div className="space-y-6">
              <div className="contact-reveal flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-bluesci-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-bluesci-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Email Us</h3>
                  <a href="mailto:info@bluesci.ca" className="text-white/60 hover:text-bluesci-accent transition-colors">
                    info@bluesci.ca
                  </a>
                </div>
              </div>

              <div className="contact-reveal flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-bluesci-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-bluesci-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Book a Call</h3>
                  <p className="text-white/60">Free 30-minute discovery session</p>
                </div>
              </div>

              <div className="contact-reveal flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-bluesci-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-bluesci-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Response Time</h3>
                  <p className="text-white/60">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="contact-reveal mt-12 p-6 glass-card rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-bluesci-accent to-bluesci-cyan flex items-center justify-center text-white text-xs font-bold ring-2 ring-bluesci-dark"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="text-white font-medium">25+ companies</span>
                  <span className="text-white/50"> trust us with their AI</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-white/60">5.0 average rating</span>
              </div>
            </div>
          </div>

          <div className="contact-reveal">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  Message Sent!
                </h3>
                <p className="text-white/60 mb-8">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormState({ name: '', email: '', company: '', message: '' })
                  }}
                  className="text-bluesci-accent hover:text-bluesci-accent-light transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-8"
              >
                <h3 className="font-display text-2xl font-bold text-white mb-6">
                  Start a Conversation
                </h3>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Your Name *</label>
                    <input type="text" id="name" name="name" required value={formState.name} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-bluesci-accent/50 focus:ring-1 focus:ring-bluesci-accent/50 transition-all" placeholder="John Smith" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Work Email *</label>
                    <input type="email" id="email" name="email" required value={formState.email} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-bluesci-accent/50 focus:ring-1 focus:ring-bluesci-accent/50 transition-all" placeholder="john@company.com" />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-2">Company</label>
                    <input type="text" id="company" name="company" value={formState.company} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-bluesci-accent/50 focus:ring-1 focus:ring-bluesci-accent/50 transition-all" placeholder="Acme Inc." />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Tell Us About Your Project *</label>
                    <textarea id="message" name="message" required rows={4} value={formState.message} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-bluesci-accent/50 focus:ring-1 focus:ring-bluesci-accent/50 transition-all resize-none" placeholder="Describe your project, challenges, and goals..." />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white rounded-xl overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed">
                    <span className="absolute inset-0 bg-gradient-to-r from-bluesci-accent to-bluesci-cyan" />
                    <span className="absolute inset-0 bg-gradient-to-r from-bluesci-cyan to-bluesci-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
