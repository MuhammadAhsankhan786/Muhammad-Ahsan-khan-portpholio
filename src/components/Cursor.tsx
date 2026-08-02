import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const hovering = useRef(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      hovering.current = !!(
        t.closest('a') ||
        t.closest('button') ||
        t.closest('[data-cursor-hover]')
      )
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onEnter)

    let raf: number
    const animate = () => {
      const dot = dotRef.current
      const ring = ringRef.current
      if (dot && ring) {
        dot.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`

        ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.1
        ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.1
        ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) scale(${hovering.current ? 1.8 : 1})`
        ring.style.borderColor = hovering.current
          ? '#748CAB'
          : 'rgba(116, 140, 171, 0.4)'
        ring.style.backgroundColor = hovering.current
          ? 'rgba(116, 140, 171, 0.08)'
          : 'transparent'
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onEnter)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          background: '#F0EBD8',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 1000000,
          transform: 'translate(-50%, -50%)',
          transition: 'background 0.15s ease',
          marginLeft: -3,
          marginTop: -3,
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          border: '1px solid rgba(116, 140, 171, 0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 999999,
          marginLeft: -18,
          marginTop: -18,
          transition: 'border-color 0.2s ease, background-color 0.2s ease, scale 0.2s ease',
          backdropFilter: 'blur(0px)',
        }}
      />
    </>
  )
}
