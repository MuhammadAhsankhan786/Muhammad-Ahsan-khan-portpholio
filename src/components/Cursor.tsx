import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const hovering = useRef(false)
  const isVisible = useRef(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Disable custom cursor on mobile touch screens
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true)
      return
    }

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!isVisible.current) {
        isVisible.current = true
        ringPos.current = { x: e.clientX, y: e.clientY }
        if (dotRef.current) dotRef.current.style.opacity = '1'
        if (ringRef.current) ringRef.current.style.opacity = '1'
      }
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      hovering.current = !!(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('[data-cursor-hover]')
      )
    }

    const onMouseLeave = () => {
      isVisible.current = false
      if (dotRef.current) dotRef.current.style.opacity = '0'
      if (ringRef.current) ringRef.current.style.opacity = '0'
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onMouseOver, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)

    let rafId: number
    const render = () => {
      const dot = dotRef.current
      const ring = ringRef.current

      if (dot && ring && isVisible.current) {
        // Fast direct follow for inner dot
        dot.style.transform = `translate3d(${pos.current.x - 4}px, ${pos.current.y - 4}px, 0)`

        // Smooth spring interpolation for outer ring
        ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15
        ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15

        const scale = hovering.current ? 1.7 : 1
        ring.style.transform = `translate3d(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px, 0) scale(${scale})`

        if (hovering.current) {
          ring.style.borderColor = '#748CAB'
          ring.style.backgroundColor = 'rgba(116, 140, 171, 0.12)'
        } else {
          ring.style.borderColor = 'rgba(116, 140, 171, 0.4)'
          ring.style.backgroundColor = 'transparent'
        }
      }

      rafId = requestAnimationFrame(render)
    }

    rafId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (isTouchDevice) return null

  return (
    <>
      {/* Inner Precision Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          background: '#F0EBD8',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999999,
          opacity: 0,
          willChange: 'transform, opacity',
          transition: 'opacity 0.2s ease, background-color 0.2s ease',
        }}
      />

      {/* Outer Follower Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          border: '1px dashed rgba(116, 140, 171, 0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999998,
          opacity: 0,
          willChange: 'transform, opacity',
          transition: 'border-color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease',
        }}
      />
    </>
  )
}
