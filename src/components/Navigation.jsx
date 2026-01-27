import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Navigation = () => {
  const navRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Consulting', href: '#consulting' },
    { name: 'Our Work', href: '#industries' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
    )

    ScrollTrigger.create({
      start: 'top -80',
      onUpdate: (self) => {
        setIsScrolled(self.progress > 0)
      },
    })
  }, [])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-bluesci-dark/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a
            href="#"
            className="relative group flex items-center gap-2"
            onClick={(e) => scrollToSection(e, '#hero')}
          >
            <span className="relative font-display text-2xl md:text-3xl font-bold gradient-text">
              BlueSci
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 group"
              >
                <span>{link.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-bluesci-accent to-bluesci-cyan group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-full overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-bluesci-accent to-bluesci-cyan" />
              <span className="absolute inset-0 bg-gradient-to-r from-bluesci-cyan to-bluesci-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative">Book a Discovery Call</span>
              <svg
                className="relative w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 origin-left ${isMobileMenuOpen ? 'rotate-45 translate-x-px' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 translate-x-4' : ''}`} />
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 origin-left ${isMobileMenuOpen ? '-rotate-45 translate-x-px' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-20 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="absolute inset-0 bg-bluesci-dark" />
        <div className="absolute inset-0 bg-gradient-to-b from-bluesci-dark via-bluesci-dark to-bluesci-darker" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-bluesci-accent/5 via-transparent to-transparent" />

        <div className="relative container-custom py-8">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-2xl font-display font-medium text-white/90 hover:text-white py-3 border-b border-white/10 transition-colors"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-medium text-white rounded-full bg-gradient-to-r from-bluesci-accent to-bluesci-cyan"
            >
              Book a Discovery Call
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
