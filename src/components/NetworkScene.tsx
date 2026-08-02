import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// Node positions forming an enterprise network topology
const NODE_DATA: { pos: [number, number, number]; size: number; speed: number }[] = [
  { pos: [0, 0, 0],         size: 0.22, speed: 0.4 },   // Core hub
  { pos: [2.2, 0.4, -0.8], size: 0.13, speed: 0.6 },
  { pos: [2.6, -0.9, 0.4], size: 0.10, speed: 0.5 },
  { pos: [1.5, 1.6, 0.2],  size: 0.12, speed: 0.7 },
  { pos: [-2.1, 0.2, -0.3],size: 0.14, speed: 0.45 },
  { pos: [-2.5, -0.7, 0.6],size: 0.09, speed: 0.8 },
  { pos: [-1.3, 1.4, 0.1], size: 0.11, speed: 0.55 },
  { pos: [0.4, 2.3, -0.6], size: 0.10, speed: 0.65 },
  { pos: [-0.3, 2.6, 0.4], size: 0.08, speed: 0.75 },
  { pos: [0.7, -2.1, -0.2],size: 0.11, speed: 0.5 },
  { pos: [-0.5, -2.4, 0.5],size: 0.09, speed: 0.6 },
  { pos: [3.0, 1.7, -0.2], size: 0.08, speed: 0.9 },
  { pos: [-2.8, 1.6, 0.2], size: 0.08, speed: 0.7 },
  { pos: [1.1, -1.6, 1.8], size: 0.09, speed: 0.55 },
  { pos: [-0.9, 0.7, 2.1], size: 0.10, speed: 0.65 },
  { pos: [1.8, 0.1, 1.5],  size: 0.09, speed: 0.8 },
  { pos: [-1.6, -1.0, -1.5],size:0.08, speed: 0.7 },
  { pos: [0.2, -0.5, -2.3],size: 0.09, speed: 0.6 },
]

function getConnections(maxDist = 2.2) {
  const pairs: [number, number][] = []
  for (let i = 0; i < NODE_DATA.length; i++) {
    for (let j = i + 1; j < NODE_DATA.length; j++) {
      const [ax, ay, az] = NODE_DATA[i].pos
      const [bx, by, bz] = NODE_DATA[j].pos
      const d = Math.sqrt((ax-bx)**2 + (ay-by)**2 + (az-bz)**2)
      if (d < maxDist) pairs.push([i, j])
    }
  }
  return pairs
}

const CONNECTIONS = getConnections()

function NetworkNode({ position, size, speed, index }: {
  position: [number, number, number]
  size: number
  speed: number
  index: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime
    meshRef.current.rotation.x = t * speed * 0.4
    meshRef.current.rotation.y = t * speed * 0.3
    // Subtle float
    meshRef.current.position.y = position[1] + Math.sin(t * 0.5 + index) * 0.04
  })

  const isCore = index === 0
  const color = isCore ? '#F0EBD8' : '#748CAB'
  const emissive = isCore ? '#748CAB' : '#3E5C76'

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[size, 1]} />
      <meshPhongMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={isCore ? 0.9 : 0.6}
        wireframe
        transparent
        opacity={isCore ? 1.0 : 0.85}
      />
    </mesh>
  )
}

function NetworkGlow({ position, size }: { position: [number, number, number]; size: number }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size * 2.2, 12, 12]} />
      <meshBasicMaterial color="#748CAB" transparent opacity={0.12} />
    </mesh>
  )
}

function Connections() {
  const lines = useMemo(() => {
    return CONNECTIONS.map(([a, b], i) => {
      const pa = NODE_DATA[a].pos
      const pb = NODE_DATA[b].pos
      const geo = new THREE.BufferGeometry()
      geo.setAttribute(
        'position',
        new THREE.Float32BufferAttribute([...pa, ...pb], 3)
      )
      const mat = new THREE.LineBasicMaterial({
        color: i % 4 === 0 ? '#F0EBD8' : '#748CAB',
        transparent: true,
        opacity: 0.45,
      })
      return new THREE.Line(geo, mat)
    })
  }, [])

  return (
    <>
      {lines.map((line, i) => (
        <primitive key={i} object={line} />
      ))}
    </>
  )
}

function DataPackets() {
  const packetRefs = useRef<THREE.Mesh[]>([])
  const packetData = useMemo(
    () =>
      CONNECTIONS.slice(0, 10).map((conn, i) => ({
        conn,
        offset: i * 0.1,
        speed: 0.2 + (i % 4) * 0.05,
      })),
    []
  )

  useFrame((state) => {
    const t = state.clock.elapsedTime
    packetData.forEach((p, i) => {
      const mesh = packetRefs.current[i]
      if (!mesh) return
      const progress = ((t * p.speed + p.offset) % 1)
      const [a, b] = p.conn
      const pa = NODE_DATA[a].pos
      const pb = NODE_DATA[b].pos
      mesh.position.set(
        pa[0] + (pb[0] - pa[0]) * progress,
        pa[1] + (pb[1] - pa[1]) * progress,
        pa[2] + (pb[2] - pa[2]) * progress,
      )
      const alpha = Math.sin(progress * Math.PI)
      ;(mesh.material as THREE.MeshBasicMaterial).opacity = alpha * 0.95
    })
  })

  return (
    <>
      {packetData.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => { if (el) packetRefs.current[i] = el }}
        >
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#748CAB" transparent opacity={0} />
        </mesh>
      ))}
    </>
  )
}

function BackgroundGrid() {
  const grid = useMemo(() => {
    const g = new THREE.GridHelper(18, 24, '#3E5C76', '#1D2D44')
    return g
  }, [])

  return <primitive object={grid} position={[0, -3.2, 0]} />
}

function BackgroundParticles() {
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
      color: '#748CAB',
      size: 0.025,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.5,
    })
    return new THREE.Points(geo, mat)
  }, [])

  useFrame((state) => {
    points.rotation.y = state.clock.elapsedTime * 0.01
    points.rotation.x = Math.sin(state.clock.elapsedTime * 0.007) * 0.05
  })

  return <primitive object={points} />
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null)
  const mouseTarget = useRef({ x: 0, y: 0 })
  const { gl } = useThree()

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

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.rotation.y +=
      (mouseTarget.current.x + t * 0.04 - groupRef.current.rotation.y) * 0.03
    groupRef.current.rotation.x +=
      (mouseTarget.current.y - groupRef.current.rotation.x) * 0.03
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={4.5} color="#748CAB" />
      <pointLight position={[-5, -3, 3]} intensity={3.0} color="#748CAB" />
      <pointLight position={[0, 4, -4]} intensity={2.0} color="#F0EBD8" />

      <BackgroundParticles />
      <BackgroundGrid />

      <group ref={groupRef}>
        {NODE_DATA.map((n, i) => (
          <NetworkNode
            key={i}
            index={i}
            position={n.pos}
            size={n.size}
            speed={n.speed}
          />
        ))}
        {NODE_DATA.map((n, i) => (
          <NetworkGlow key={`glow-${i}`} position={n.pos} size={n.size} />
        ))}
        <Connections />
        <DataPackets />
      </group>
    </>
  )
}

export default function NetworkScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 7.5], fov: 55 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene />
    </Canvas>
  )
}
