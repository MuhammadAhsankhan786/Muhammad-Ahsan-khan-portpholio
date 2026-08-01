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
      {/* Radial gradient bloom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 65% 50%, rgba(124,111,247,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 40% 40% at 20% 80%, rgba(56,189,248,0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* Left: Typography */}
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
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 40,
              height: 1,
              background: 'rgba(124,111,247,0.6)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.2em',
              color: 'rgba(167,139,250,0.9)',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Founder, Next Revolution Tech — 2026
          </span>
        </motion.div>

        {/* Main headline */}
        <h1
          ref={titleRef}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(44px, 5.5vw, 84px)',
            fontWeight: 800,
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
            margin: 0,
            marginBottom: 28,
          }}
        >
          {words.map((word, wi) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, y: 60, skewX: -5 }}
              animate={{ opacity: 1, y: 0, skewX: 0 }}
              transition={{
                duration: 1,
                delay: 0.2 + wi * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                display: 'block',
                color: wi === 1 ? 'transparent' : 'var(--color-foreground)',
                WebkitTextStroke:
                  wi === 1 ? '1.5px rgba(124,111,247,0.85)' : undefined,
              }}
            >
              {word}
            </motion.div>
          ))}
        </h1>

        {/* Name & Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            color: 'rgba(220,220,238,0.6)',
            lineHeight: 1.6,
            maxWidth: 480,
            marginBottom: 36,
          }}
        >
          <span style={{ color: 'var(--color-foreground)', fontWeight: 600 }}>
            Muhammad Ahsan Khan
          </span>
          {' '}— Full Stack Developer & Founder of Next Revolution Tech. Specializing in enterprise-grade software, ERP platforms, SaaS, and Agentic AI automation.
        </motion.p>

        {/* Role tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 44 }}
        >
          {roles.map((role) => (
            <span
              key={role}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                letterSpacing: '0.1em',
                padding: '6px 12px',
                border: '1px solid rgba(124,111,247,0.3)',
                color: 'rgba(167,139,250,0.8)',
                textTransform: 'uppercase',
                borderRadius: 4,
              }}
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
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
              padding: '12px 20px',
              background: 'linear-gradient(135deg, #7c6ff7, #a78bfa)',
              color: '#fff',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: 6,
              fontWeight: 600,
              whiteSpace: 'nowrap',
              transition: 'filter 0.3s ease, transform 0.3s ease',
            }}
          >
            View Projects
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
                padding: '12px 18px',
                background: 'rgba(56,189,248,0.12)',
                border: '1px solid rgba(56,189,248,0.4)',
                color: '#38bdf8',
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
              padding: '12px 18px',
              border: '1px solid rgba(124,111,247,0.3)',
              color: 'rgba(220,220,238,0.7)',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: 6,
              whiteSpace: 'nowrap',
            }}
          >
            Let's Talk
          </a>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10 pt-6 border-t border-[rgba(21,21,42,1)]"
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
                  fontSize: 28,
                  fontWeight: 800,
                  color: '#a78bfa',
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: 'rgba(90,90,130,1)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
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
