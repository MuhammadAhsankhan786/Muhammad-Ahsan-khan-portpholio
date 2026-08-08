import { useRef } from 'react'
import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
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
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden pt-28 md:pt-32 pb-16"
      style={{ background: 'var(--bg)' }}
    >
      {/* Ambient background bloom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 65% 50%, var(--hero-bloom) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Left Column: Personal Identity & Positioning */}
      <div className="flex flex-col justify-center px-6 md:px-20 relative z-10">
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
          <div style={{ width: 40, height: 1, background: 'var(--accent)' }} />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.2em',
              color: 'var(--accent)',
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
                color: wi === 1 ? 'var(--accent)' : 'var(--fg)',
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
              color: 'var(--accent)',
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
              color: 'rgba(var(--fg-rgb), 0.75)',
              lineHeight: 1.65,
              maxWidth: 520,
              margin: 0,
            }}
          >
            Full Stack Engineer building web applications, ERP systems, and AI automation tools with clean, reliable architecture.
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
                border: '1px solid var(--border-bright)',
                color: 'var(--fg)',
                textTransform: 'uppercase',
                borderRadius: 4,
                background: 'var(--surface)',
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
              background: 'var(--accent)',
              color: 'var(--accent-fg)',
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
                background: 'var(--surface)',
                border: '1px solid var(--border-bright)',
                color: 'var(--fg)',
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
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                color: 'var(--fg)',
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
        <Suspense
          fallback={
            <div className="w-full h-full flex flex-col items-center justify-center relative p-8">
              <div
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: '50%',
                  border: '1px dashed var(--accent)',
                  animation: 'orbit 8s linear infinite',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    border: '1px solid var(--accent)',
                    boxShadow: '0 0 25px rgba(var(--accent-rgb), 0.3)',
                    animation: 'pulse-glow 2s ease-in-out infinite',
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: 'var(--accent)',
                  letterSpacing: '0.2em',
                  marginTop: 20,
                  textTransform: 'uppercase',
                }}
              >
                Initializing 3D Mesh...
              </span>
            </div>
          }
        >
          <NetworkScene />
        </Suspense>
      </div>
    </section>
  )
}
