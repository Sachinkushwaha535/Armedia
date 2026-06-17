'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import { useMotionValueEvent, useMotionValue, type MotionValue } from 'framer-motion'
import { useRef } from 'react'
import * as THREE from 'three'
import type { Group, Mesh } from 'three'

const GOLD = '#d9a441'
const CORAL = '#e8785a'
const INDIGO = '#9b8fd9'
const GOLD_BRIGHT = '#e8b85a'

type Hero3DSceneProps = {
  reducedMotion?: boolean
  pointerX?: MotionValue<number>
  pointerY?: MotionValue<number>
}

type OrbitRingProps = {
  radius: number
  tilt: [number, number, number]
  speed: number
  color: string
  reducedMotion: boolean
}

function OrbitRing({ radius, tilt, speed, color, reducedMotion }: OrbitRingProps) {
  const ref = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (reducedMotion || !ref.current) return
    ref.current.rotation.z += delta * speed
  })

  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.014, 24, 96]} />
      <meshBasicMaterial color={color} transparent opacity={0.32} />
    </mesh>
  )
}

type SatelliteProps = {
  radius: number
  speed: number
  offset: number
  color: string
  reducedMotion: boolean
}

function Satellite({ radius, speed, offset, color, reducedMotion }: SatelliteProps) {
  const ref = useRef<Group>(null)

  useFrame(({ clock }) => {
    if (reducedMotion || !ref.current) return
    const t = clock.elapsedTime * speed + offset
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 0.65) * 0.28,
      Math.sin(t) * radius,
    )
  })

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.055, 20, 20]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.8}
          metalness={0.4}
          roughness={0.2}
        />
      </mesh>
    </group>
  )
}

type SceneContentProps = {
  reducedMotion: boolean
  pointerX?: MotionValue<number>
  pointerY?: MotionValue<number>
}

function SceneContent({ reducedMotion, pointerX, pointerY }: SceneContentProps) {
  const groupRef = useRef<Group>(null)
  const pointerRef = useRef({ x: 0, y: 0 })
  const idleRef = useRef({ y: 0, x: 0 })
  const fallbackX = useMotionValue(0)
  const fallbackY = useMotionValue(0)
  const sourceX = pointerX ?? fallbackX
  const sourceY = pointerY ?? fallbackY

  useMotionValueEvent(sourceX, 'change', (value) => {
    pointerRef.current.x = value
  })

  useMotionValueEvent(sourceY, 'change', (value) => {
    pointerRef.current.y = value
  })

  useFrame((state, delta) => {
    if (!groupRef.current) return

    if (reducedMotion) return

    const t = state.clock.elapsedTime
    idleRef.current.y = t * 0.14
    idleRef.current.x = Math.sin(t * 0.35) * 0.08

    const px = pointerRef.current.x
    const py = pointerRef.current.y
    const targetRotY = idleRef.current.y + px * 1.15
    const targetRotX = idleRef.current.x - py * 0.95
    const targetPosX = px * 0.42
    const targetPosY = -py * 0.28
    const targetPosZ = px * 0.12
    const lerp = 1 - Math.exp(-delta * 7.5)

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, lerp)
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, lerp)
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetPosX, lerp)
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetPosY, lerp)
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetPosZ, lerp)
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.3}>
        <mesh>
          <icosahedronGeometry args={[0.36, 1]} />
          <meshStandardMaterial
            color={GOLD}
            emissive={GOLD}
            emissiveIntensity={0.55}
            wireframe
            transparent
            opacity={0.45}
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.28, 0]} />
          <meshStandardMaterial
            color={GOLD_BRIGHT}
            emissive={GOLD}
            emissiveIntensity={1.1}
            metalness={0.85}
            roughness={0.12}
          />
        </mesh>
      </Float>

      <OrbitRing
        radius={0.95}
        tilt={[Math.PI / 2.2, 0.2, 0]}
        speed={0.12}
        color={GOLD}
        reducedMotion={reducedMotion}
      />
      <OrbitRing
        radius={1.28}
        tilt={[Math.PI / 2.5, -0.45, 0.3]}
        speed={-0.09}
        color={CORAL}
        reducedMotion={reducedMotion}
      />
      <OrbitRing
        radius={1.62}
        tilt={[Math.PI / 2.8, 0.55, -0.2]}
        speed={0.07}
        color={INDIGO}
        reducedMotion={reducedMotion}
      />

      <Satellite radius={0.95} speed={0.55} offset={0} color={GOLD_BRIGHT} reducedMotion={reducedMotion} />
      <Satellite radius={1.28} speed={0.42} offset={1.4} color={CORAL} reducedMotion={reducedMotion} />
      <Satellite radius={1.28} speed={0.42} offset={3.8} color={INDIGO} reducedMotion={reducedMotion} />
      <Satellite radius={1.62} speed={0.32} offset={2.2} color={GOLD} reducedMotion={reducedMotion} />

      <Sparkles
        count={reducedMotion ? 24 : 64}
        scale={4.2}
        size={1.2}
        speed={0.35}
        color={GOLD_BRIGHT}
        opacity={0.45}
      />
    </group>
  )
}

export default function Hero3DScene({
  reducedMotion = false,
  pointerX,
  pointerY,
}: Hero3DSceneProps) {
  return (
    <div className="hero-3d-scene hero-3d-scene--ambient" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.6, 3.6], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} color="#fff8ee" />
        <pointLight position={[3, 4, 2]} intensity={2.2} color={GOLD} />
        <pointLight position={[-2.5, 1, -2]} intensity={1.4} color={CORAL} />
        <pointLight position={[0, -2, 2]} intensity={0.8} color={INDIGO} />
        <SceneContent reducedMotion={reducedMotion} pointerX={pointerX} pointerY={pointerY} />
      </Canvas>
    </div>
  )
}
