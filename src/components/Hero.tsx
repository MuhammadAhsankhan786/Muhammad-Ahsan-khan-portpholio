import { useEffect, useRef, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

const NetworkScene = lazy(() => import('./NetworkScene'))

const roles = ['Full Stack Developer', 'Founder @ NRT', 'Agentic AI Specialist', 'ERP Architect']

export default function Hero({ onOpenResume }: { onOpenResume?: () => void }) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const title = titleRef.current
    if (!title) return
  }, [])

  const words = ['ENTERPRISE', 'AI & ERP', 'SOLUTIONS']

  return (
    <section
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-[var(--color-background)] pt-20 md:pt-0"
    >
      {/* Radial ambient slate bloom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 65% 50%, rgba(116,140,171,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Left: Personal Identity & Editorial Typography */}
      <div
        className="flex flex-col justify-center px-6 md:px-20 py-12 md:py-0 relative z-10"
      >
        {/* Pre-title label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 40,
              height: 1,
              background: '#748CAB',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.2em',
              color: '#748CAB',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Founder & Lead Architect — Next Revolution Tech
          </span>
        </motion.div>

        {/* Primary Visual Focus: MUHAMMAD AHSAN KHAN */}
        <h1
          ref={titleRef}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(44px, 5.2vw, 82px)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            margin: 0,
            marginBottom: 24,
          }}
        >
          {['MUHAMMAD', 'AHSAN KHAN'].map((line, wi) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, y: 50, skewX: -4 }}
              animate={{ opacity: 1, y: 0, skewX: 0 }}
              transition={{
                duration: 1,
                delay: 0.2 + wi * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                display: 'block',
                color: wi === 1 ? '#748CAB' : '#F0EBD8',
                fontStyle: wi === 1 ? 'italic' : 'normal',
              }}
            >
              {line}
            </motion.div>
          ))}
        </h1>

        {/* Professional Positioning & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          style={{ marginBottom: 32 }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              fontWeight: 700,
              color: '#748CAB',
              letterSpacing: '0.08em',
              marginBottom: 10,
              textTransform: 'uppercase',
            }}
          >
            Full Stack Software Engineer • Founder, Next Revolution Tech
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              color: 'rgba(240,235,216,0.75)',
              lineHeight: 1.65,
              maxWidth: 520,
              margin: 0,
            }}
          >
            Handcrafting enterprise-grade software, ERP systems, SaaS platforms, and Agentic AI automation. Delivering timeless digital products across complete SDLC architecture.
          </p>
        </motion.div>

        {/* Role tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}
        >
          {['Full Stack Engineer', 'Founder @ NRT', 'Agentic AI Specialist', 'ERP Architect'].map((role) => (
            <span
              key={role}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                letterSpacing: '0.1em',
                padding: '6px 12px',
                border: '1px solid rgba(116,140,171,0.25)',
                color: '#F0EBD8',
                textTransform: 'uppercase',
                borderRadius: 4,
                background: '#1D2D44',
                whiteSpace: 'nowrap',
              }}
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* CTAs - Solid Colors No Gradients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap md:flex-nowrap gap-3 items-center"
        >
          <a
            href="#projects"
            data-cursor-hover
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 24px',
              background: '#748CAB',
              color: '#0D1321',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: 6,
              fontWeight: 700,
              whiteSpace: 'nowrap',
              transition: 'background-color 0.3s ease',
            }}
          >
            View Work
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Download ATS Resume Button */}
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              data-cursor-hover
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '12px 20px',
                background: '#1D2D44',
                border: '1px solid rgba(116,140,171,0.25)',
                color: '#F0EBD8',
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: 6,
                cursor: 'pointer',
                fontWeight: 600,
                whiteSpace: 'nowrap',
              }}
            >
              📄 ATS Resume
            </button>
          )}

          <a
            href="#contact"
            data-cursor-hover
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 20px',
              background: '#1D2D44',
              border: '1px solid rgba(116,140,171,0.25)',
              color: '#F0EBD8',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: 6,
              whiteSpace: 'nowrap',
            }}
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10 pt-6 border-t border-[rgba(116,140,171,0.12)]"
        >
          {[
            { value: '10+', label: 'Production Apps' },
            { value: 'Founder', label: 'Next Revolution Tech' },
            { value: 'Agentic AI', label: 'Systems & LLMs' },
          ].map((m) => (
            <div key={m.label}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(20px, 2.2vw, 28px)',
                  fontWeight: 800,
                  color: '#748CAB',
                  lineHeight: 1,
                  marginBottom: 4,
                  whiteSpace: 'nowrap',
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: 'rgba(240,235,216,0.6)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right: 3D Scene */}
      <div className="relative z-10 flex items-center h-[320px] md:h-full">
        {/* Scene label */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 20,
            transform: 'translateY(-50%) rotate(-90deg)',
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.2em',
            color: 'rgba(90,90,130,0.5)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            zIndex: 3,
          }}
        >
          AI & Enterprise Architecture Mesh
        </div>

        <Suspense fallback={null}>
          <NetworkScene />
        </Suspense>
      </div>

      {/* Scroll indicator */}
      <motion.div
        ref={scrollRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          zIndex: 5,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.2em',
            color: 'rgba(90,90,130,0.5)',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background:
              'linear-gradient(to bottom, rgba(124,111,247,0.5), transparent)',
            animation: 'float 2s ease-in-out infinite',
          }}
        />
      </motion.div>
    </section>
  )
}
