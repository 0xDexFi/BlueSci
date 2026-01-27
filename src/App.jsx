import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

import LoadingScreen from './components/LoadingScreen'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Consultations from './components/Consultations'
import Industries from './components/Industries'
import Differentiators from './components/Differentiators'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const mainRef = useRef(null)
  const lenisRef = useRef(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const htmlLoader = document.getElementById('initial-loader')
    if (htmlLoader) {
      htmlLoader.remove()
    }
  }, [])

  useEffect(() => {
    if (isLoading) return

    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: isMobile,
      touchMultiplier: 1.5,
      wheelMultiplier: 1,
      infinite: false,
      autoResize: true,
    })

    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', handleResize)

    setTimeout(() => setIsLoaded(true), 100)

    return () => {
      lenis.destroy()
      window.removeEventListener('resize', handleResize)
    }
  }, [isLoading, isMobile])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {!isLoading && (
        <>
          {!isMobile && <CustomCursor />}
          <Navigation />
          <main
            ref={mainRef}
            className={`relative ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
          >
            <Hero />
            <Marquee />
            <About />
            <Services />
            <Consultations />
            <Process />
            <Industries />
            <Differentiators />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </>
  )
}

export default App
