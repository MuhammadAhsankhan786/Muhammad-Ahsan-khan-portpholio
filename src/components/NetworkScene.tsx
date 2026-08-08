import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from '../context/ThemeContext'

// ── Static topology (never recreated) ──────────────────────────────
const NODE_DATA: { pos: [number, number, number]; size: number; speed: number }[] = [
  { pos: [0, 0, 0],          size: 0.22, speed: 0.4 },
  { pos: [2.2, 0.4, -0.8],  size: 0.13, speed: 0.6 },
  { pos: [2.6, -0.9, 0.4],  size: 0.10, speed: 0.5 },
  { pos: [1.5, 1.6, 0.2],   size: 0.12, speed: 0.7 },
  { pos: [-2.1, 0.2, -0.3], size: 0.14, speed: 0.45 },
  { pos: [-2.5, -0.7, 0.6], size: 0.09, speed: 0.8 },
  { pos: [-1.3, 1.4, 0.1],  size: 0.11, speed: 0.55 },
  { pos: [0.4, 2.3, -0.6],  size: 0.10, speed: 0.65 },
  { pos: [-0.3, 2.6, 0.4],  size: 0.08, speed: 0.75 },
  { pos: [0.7, -2.1, -0.2], size: 0.11, speed: 0.5 },
  { pos: [-0.5, -2.4, 0.5], size: 0.09, speed: 0.6 },
  { pos: [3.0, 1.7, -0.2],  size: 0.08, speed: 0.9 },
  { pos: [-2.8, 1.6, 0.2],  size: 0.08, speed: 0.7 },
  { pos: [1.1, -1.6, 1.8],  size: 0.09, speed: 0.55 },
  { pos: [-0.9, 0.7, 2.1],  size: 0.10, speed: 0.65 },
  { pos: [1.8, 0.1, 1.5],   size: 0.09, speed: 0.8 },
  { pos: [-1.6, -1.0, -1.5],size: 0.08, speed: 0.7 },
  { pos: [0.2, -0.5, -2.3], size: 0.09, speed: 0.6 },
]

function getConnections(maxDist = 2.2) {
  const pairs: [number, number][] = []
  for (let i = 0; i < NODE_DATA.length; i++) {
    for (let j = i + 1; j < NODE_DATA.length; j++) {
      const [ax, ay, az] = NODE_DATA[i].pos
      const [bx, by, bz] = NODE_DATA[j].pos
      const d = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2 + (az - bz) ** 2)
      if (d < maxDist) pairs.push([i, j])
    }
  }
  return pairs
}
const CONNECTIONS = getConnections()

// ── Read CSS variable from :root ────────────────────────────────────
function getCSSVar(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || '#748CAB'
}

// ── Reactive color hook ─────────────────────────────────────────────
function useThemeColors() {
  const { theme } = useTheme()
  return useMemo(() => ({
    nodeColor:   getCSSVar('--node-color'),
    nodeCore:    getCSSVar('--node-core'),
    nodeEmit:    getCSSVar('--node-emissive'),
    nodeGlow:    getCSSVar('--node-glow'),
    particle:    getCSSVar('--particle'),
    gridA:       getCSSVar('--grid-a'),
    gridB:       getCSSVar('--grid-b'),
    lineA:       getCSSVar('--line-a'),
    lineB:       getCSSVar('--line-b'),
  }), [theme]) // eslint-disable-line react-hooks/exhaustive-deps
}

// ── High precision timer (replaces deprecated THREE.Clock) ───────────
function getTime(): number {
  return performance.now() * 0.001
}

// ── Nodes ────────────────────────────────────────────────────────────
function NetworkNode({ position, size, speed, index, colors }: {
  position: [number, number, number]
  size: number
  speed: number
  index: number
  colors: ReturnType<typeof useThemeColors>
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const matRef  = useRef<THREE.MeshPhongMaterial>(null)
  const isCore  = index === 0

  useEffect(() => {
    if (!matRef.current) return
    matRef.current.color.set(isCore ? colors.nodeCore : colors.nodeColor)
    matRef.current.emissive.set(isCore ? colors.nodeColor : colors.nodeEmit)
  }, [colors, isCore])

  useFrame(() => {
    if (!meshRef.current) return
    const t = getTime()
    meshRef.current.rotation.x = t * speed * 0.4
    meshRef.current.rotation.y = t * speed * 0.3
    meshRef.current.position.y = position[1] + Math.sin(t * 0.5 + index) * 0.04
  })

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[size, 1]} />
      <meshPhongMaterial
        ref={matRef}
        color={isCore ? colors.nodeCore : colors.nodeColor}
        emissive={isCore ? colors.nodeColor : colors.nodeEmit}
        emissiveIntensity={isCore ? 1.4 : 0.9}
        wireframe
        transparent
        opacity={isCore ? 1.0 : 0.92}
      />
    </mesh>
  )
}

function NetworkGlow({ position, size, colors }: {
  position: [number, number, number]
  size: number
  colors: ReturnType<typeof useThemeColors>
}) {
  const matRef = useRef<THREE.MeshBasicMaterial>(null)
  useEffect(() => {
    if (matRef.current) matRef.current.color.set(colors.nodeGlow)
  }, [colors])
  return (
    <mesh position={position}>
      <sphereGeometry args={[size * 2.8, 16, 16]} />
      <meshBasicMaterial ref={matRef} color={colors.nodeGlow} transparent opacity={0.25} />
    </mesh>
  )
}

// ── Connections (line materials updated on theme change) ────────────
function Connections({ colors }: { colors: ReturnType<typeof useThemeColors> }) {
  const { lines, mats } = useMemo(() => {
    const lines: THREE.Line[] = []
    const mats: THREE.LineBasicMaterial[] = []
    CONNECTIONS.forEach(([a, b], i) => {
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.Float32BufferAttribute([...NODE_DATA[a].pos, ...NODE_DATA[b].pos], 3))
      const mat = new THREE.LineBasicMaterial({
        color: i % 4 === 0 ? colors.lineA : colors.lineB,
        transparent: true,
        opacity: 0.82,
      })
      mats.push(mat)
      lines.push(new THREE.Line(geo, mat))
    })
    return { lines, mats }
  }, []) // Only create geometry once

  // Update material colors when theme changes (no scene recreation)
  useEffect(() => {
    mats.forEach((mat, i) => {
      mat.color.set(i % 4 === 0 ? colors.lineA : colors.lineB)
      mat.needsUpdate = true
    })
  }, [colors, mats])

  return (
    <>
      {lines.map((line, i) => (
        <primitive key={i} object={line} />
      ))}
    </>
  )
}

// ── Data packets ────────────────────────────────────────────────────
function DataPackets({ colors }: { colors: ReturnType<typeof useThemeColors> }) {
  const packetRefs = useRef<THREE.Mesh[]>([])
  const packetData = useMemo(
    () => CONNECTIONS.slice(0, 10).map((conn, i) => ({
      conn,
      offset: i * 0.1,
      speed:  0.2 + (i % 4) * 0.05,
    })),
    []
  )

  useEffect(() => {
    packetRefs.current.forEach((mesh) => {
      if (mesh) (mesh.material as THREE.MeshBasicMaterial).color.set(colors.nodeColor)
    })
  }, [colors])

  useFrame(() => {
    const t = getTime()
    packetData.forEach((p, i) => {
      const mesh = packetRefs.current[i]
      if (!mesh) return
      const progress = (t * p.speed + p.offset) % 1
      const [a, b] = p.conn
      const pa = NODE_DATA[a].pos
      const pb = NODE_DATA[b].pos
      mesh.position.set(
        pa[0] + (pb[0] - pa[0]) * progress,
        pa[1] + (pb[1] - pa[1]) * progress,
        pa[2] + (pb[2] - pa[2]) * progress,
      )
      ;(mesh.material as THREE.MeshBasicMaterial).opacity = Math.sin(progress * Math.PI) * 0.98
    })
  })

  return (
    <>
      {packetData.map((_, i) => (
        <mesh key={i} ref={(el) => { if (el) packetRefs.current[i] = el }}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshBasicMaterial color={colors.nodeColor} transparent opacity={0} />
        </mesh>
      ))}
    </>
  )
}

// ── Background particles ────────────────────────────────────────────
function BackgroundParticles({ colors }: { colors: ReturnType<typeof useThemeColors> }) {
  const matRef = useRef<THREE.PointsMaterial>(null)
  const points = useMemo(() => {
    const count = 1000
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 22
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22
      pos[i * 3 + 2] = (Math.random() - 0.5) * 22
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
    const mat = new THREE.PointsMaterial({
      color: colors.particle,
      size: 0.045,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.75,
    })
    return new THREE.Points(geo, mat)
  }, [])

  useEffect(() => {
    if (matRef.current) matRef.current.color.set(colors.particle)
    else (points.material as THREE.PointsMaterial).color.set(colors.particle)
  }, [colors, points])

  useFrame(() => {
    const t = getTime()
    points.rotation.y = t * 0.01
    points.rotation.x = Math.sin(t * 0.007) * 0.05
  })

  return <primitive object={points} />
}

// ── Scene ───────────────────────────────────────────────────────────
function Scene() {
  const groupRef   = useRef<THREE.Group>(null)
  const mouseTarget = useRef({ x: 0, y: 0 })
  const { gl }     = useThree()
  const colors     = useThemeColors()

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseTarget.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 0.4,
        y: -(e.clientY / window.innerHeight - 0.5) * 0.25,
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [gl])

  useFrame(() => {
    if (!groupRef.current) return
    const t = getTime()
    groupRef.current.rotation.y += (mouseTarget.current.x + t * 0.04 - groupRef.current.rotation.y) * 0.03
    groupRef.current.rotation.x += (mouseTarget.current.y - groupRef.current.rotation.x) * 0.03
  })

  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[6, 6, 6]}   intensity={8.0} color={colors.nodeColor} />
      <pointLight position={[-6, -4, 4]} intensity={5.0} color={colors.nodeColor} />
      <pointLight position={[0, 5, -5]}  intensity={3.5} color={colors.nodeCore} />

      <BackgroundParticles colors={colors} />

      <group ref={groupRef}>
        {NODE_DATA.map((n, i) => (
          <NetworkNode key={i} index={i} position={n.pos} size={n.size} speed={n.speed} colors={colors} />
        ))}
        {NODE_DATA.map((n, i) => (
          <NetworkGlow key={`glow-${i}`} position={n.pos} size={n.size} colors={colors} />
        ))}
        <Connections colors={colors} />
        <DataPackets colors={colors} />
      </group>
    </>
  )
}

export default function NetworkScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 7.5], fov: 55 }}
      style={{ background: 'transparent', pointerEvents: 'none' }}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene />
    </Canvas>
  )
}
