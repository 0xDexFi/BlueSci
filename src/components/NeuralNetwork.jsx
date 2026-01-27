import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField({ count = 2000 }) {
  const ref = useRef()
  const lineRef = useRef()

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = 4 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)

      const t = Math.random()
      if (t < 0.33) {
        colors[i3] = 0.0
        colors[i3 + 1] = 0.44
        colors[i3 + 2] = 0.95
      } else if (t < 0.66) {
        colors[i3] = 0.0
        colors[i3 + 1] = 0.83
        colors[i3 + 2] = 1.0
      } else {
        colors[i3] = 0.0
        colors[i3 + 1] = 0.79
        colors[i3 + 2] = 0.65
      }
    }

    return [positions, colors]
  }, [count])

  const linePositions = useMemo(() => {
    const lines = []
    const threshold = 2.5

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const x1 = positions[i3]
      const y1 = positions[i3 + 1]
      const z1 = positions[i3 + 2]

      for (let j = i + 1; j < Math.min(i + 20, count); j++) {
        const j3 = j * 3
        const x2 = positions[j3]
        const y2 = positions[j3 + 1]
        const z2 = positions[j3 + 2]

        const dist = Math.sqrt(
          (x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2
        )

        if (dist < threshold) {
          lines.push(x1, y1, z1, x2, y2, z2)
        }
      }
    }

    return new Float32Array(lines)
  }, [positions, count])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1
    }
    if (lineRef.current) {
      lineRef.current.rotation.y = state.clock.elapsedTime * 0.05
      lineRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1
    }
  })

  return (
    <group>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#0070F3"
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  )
}

function GlowingSphere() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05)
    }
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshBasicMaterial
        color="#0070F3"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  )
}

const NeuralNetwork = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <ParticleField count={1500} />
        <GlowingSphere />
      </Canvas>

      <div className="absolute inset-0 bg-gradient-to-b from-bluesci-dark via-transparent to-bluesci-dark pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-bluesci-dark via-transparent to-bluesci-dark pointer-events-none opacity-50" />
    </div>
  )
}

export default NeuralNetwork
