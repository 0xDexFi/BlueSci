import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const technologies = [
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'PyTorch', icon: '🔥' },
  { name: 'OpenAI', icon: '🤖' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Google Cloud', icon: '🌐' },
  { name: 'Azure', icon: '📊' },
  { name: 'Kubernetes', icon: '⚙️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Python', icon: '🐍' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '💚' },
  { name: 'PostgreSQL', icon: '🐘' },
]

const MarqueeRow = ({ direction = 'left', speed = 30 }) => {
  const rowRef = useRef(null)

  useEffect(() => {
    const row = rowRef.current
    const items = row.children[0]

    row.appendChild(items.cloneNode(true))

    const totalWidth = items.offsetWidth

    gsap.to(row.children, {
      x: direction === 'left' ? -totalWidth : totalWidth,
      duration: speed,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    })
  }, [direction, speed])

  return (
    <div ref={rowRef} className="flex overflow-hidden whitespace-nowrap">
      <div className="flex gap-8 px-4">
        {technologies.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-bluesci-accent/30 transition-colors cursor-default"
          >
            <span className="text-2xl">{tech.icon}</span>
            <span className="text-white/70 font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const Marquee = () => {
  return (
    <section className="relative py-20 bg-bluesci-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bluesci-darker via-bluesci-dark to-bluesci-darker" />

      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-bluesci-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-bluesci-dark to-transparent z-10 pointer-events-none" />

      <div className="relative z-0">
        <div className="text-center mb-12">
          <p className="text-bluesci-accent font-mono text-sm tracking-wider uppercase mb-2">
            Powered By
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white/80">
            Industry-Leading Technologies
          </h3>
        </div>

        <div className="space-y-6">
          <MarqueeRow direction="left" speed={40} />
          <MarqueeRow direction="right" speed={35} />
        </div>
      </div>
    </section>
  )
}

export default Marquee
