import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Footer = () => {
  const footerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-reveal',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          },
        }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  const links = {
    services: [
      { name: 'AI Consulting & Strategy', href: '#services' },
      { name: 'Intelligent Automation', href: '#services' },
      { name: 'Data Solutions', href: '#services' },
      { name: 'AI Training', href: '#services' },
      { name: 'Research Support', href: '#services' },
    ],
    consulting: [
      { name: 'AI Strategy & Roadmap', href: '#consulting' },
      { name: 'Technology Selection', href: '#consulting' },
      { name: 'Organizational Transformation', href: '#consulting' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Work', href: '#industries' },
    ],
  }

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer ref={footerRef} className="relative bg-bluesci-darker overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="footer-reveal">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="font-display text-3xl font-bold gradient-text">BlueSci</span>
              </a>
              <p className="text-white/50 mb-8 max-w-xs">
                We engineer the future of AI. Premium consulting and automation
                solutions that transform how organizations operate and compete.
              </p>

            </div>
          </div>

          <div className="footer-reveal">
            <h3 className="font-display font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-white/50 hover:text-white transition-colors text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-reveal">
            <h3 className="font-display font-semibold text-white mb-6">Consulting</h3>
            <ul className="space-y-3">
              {links.consulting.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-white/50 hover:text-white transition-colors text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-reveal">
            <h3 className="font-display font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => link.href.startsWith('#') && scrollToSection(e, link.href)} className="text-white/50 hover:text-white transition-colors text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="footer-reveal text-sm text-white/40">
              &copy; {new Date().getFullYear()} BlueSci. All rights reserved.
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-bluesci-accent/5 to-transparent blur-[100px] pointer-events-none" />
    </footer>
  )
}

export default Footer
