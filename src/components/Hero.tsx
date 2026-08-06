import { useEffect, useRef, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import AvailabilityBanner from './AvailabilityBanner'

const NetworkScene = lazy(() => import('./NetworkScene'))

export default function Hero({
  onOpenResume,
  onOpenAskAhsan,
}: {
  onOpenResume?: () => void
  onOpenAskAhsan?: () => void
}) {
  const titleRef = useRef<HTMLHeadingElement>(null)

  return (
    <section
      id="hero"
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-[var(--color-background)] pt-24 md:pt-0"
    >
      {/* Ambient background bloom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 65% 50%, rgba(116,140,171,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Left Column: Personal Identity & Positioning */}
      <div className="flex flex-col justify-center px-6 md:px-20 py-12 md:py-0 relative z-10">
        {/* Availability Banner */}
        <div style={{ marginBottom: 24 }}>
          <AvailabilityBanner />
        </div>

        {/* Founder Credential Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 20,
          }}
        >
          <div style={{ width: 40, height: 1, background: '#748CAB' }} />
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

        {/* Primary Name Headline */}
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

        {/* Tagline & Elevator Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          style={{ marginBottom: 28 }}
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
            Senior Full Stack Software Engineer • Enterprise Architect
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
            I engineer enterprise software applications, scalable ERP platforms, SaaS systems, and Agentic AI automation with clean, production-grade architecture.
          </p>
        </motion.div>

        {/* Skill Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}
        >
          {['Full Stack Engineer', 'Founder @ NRT', 'Agentic AI Specialist', 'ERP Architect'].map((role) => (
            <span
              key={role}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                letterSpacing: '0.1em',
                padding: '5px 12px',
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

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap items-center gap-3"
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
            }}
          >
            Explore Projects
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Ask Ahsan AI Assistant Button */}
          {onOpenAskAhsan && (
            <button
              onClick={onOpenAskAhsan}
              data-cursor-hover
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '12px 20px',
                background: '#1D2D44',
                border: '1px solid rgba(116,140,171,0.3)',
                color: '#F0EBD8',
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: 6,
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              🤖 Ask Ahsan AI
            </button>
          )}

          {/* Download ATS Resume Button */}
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              data-cursor-hover
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '12px 18px',
                background: '#0D1321',
                border: '1px solid rgba(116,140,171,0.25)',
                color: '#F0EBD8',
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: 6,
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              📄 ATS Resume
            </button>
          )}
        </motion.div>
      </div>

      {/* Right Column: 3D Scene */}
      <div className="relative z-10 flex items-center h-[320px] md:h-full">
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
          Enterprise System Architecture Mesh
        </div>

        <Suspense fallback={null}>
          <NetworkScene />
        </Suspense>
      </div>
    </section>
  )
}
