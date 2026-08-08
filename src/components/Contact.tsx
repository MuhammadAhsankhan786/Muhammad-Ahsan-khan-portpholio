import { useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

const socials = [
  { label: 'GitHub',     handle: '@MuhammadAhsankhan786',        href: 'https://github.com/MuhammadAhsankhan786' },
  { label: 'GitHub Org', handle: '@nextrevolutiontech-maker',    href: 'https://github.com/nextrevolutiontech-maker' },
  { label: 'LinkedIn',   handle: 'in/muhammad-ahsan-khan',       href: 'https://www.linkedin.com/in/muhammad-ahsan-khan-61a51032a' },
  { label: 'Website',    handle: 'nextrevolutiontech.tech',       href: 'https://www.nextrevolutiontech.tech' },
]

function MagneticCTA({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 25 })
  const springY = useSpring(y, { stiffness: 200, damping: 25 })

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35)
  }
  const handleLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.a
      ref={ref}
      href={href}
      data-cursor-hover
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        x: springX,
        y: springY,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 14,
        padding: '18px 48px',
        background: 'var(--btn-primary-bg)',
        color: 'var(--btn-primary-fg)',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--btn-radius)',
        fontWeight: 700,
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.a>
  )
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })
  const [copied, setCopied] = useState(false)
  const primaryEmail = 'ahsan.khan@nextrevolutiontech.tech'

  const copyEmail = () => {
    navigator.clipboard.writeText(primaryEmail)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative px-6 md:px-20 py-20 md:py-36 overflow-hidden"
      style={{ background: 'var(--section-a)' }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--decorative) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 60 }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--label-tracking)', textTransform: 'uppercase', color: 'var(--accent)' }}>
          10 — Direct Contact & Collaboration
        </span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </motion.div>

      <div style={{ maxWidth: 800, marginBottom: 48 }}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 84px)',
            fontWeight: 'var(--heading-weight)' as any,
            lineHeight: 0.95,
            letterSpacing: '-0.025em',
            margin: '0 0 28px',
          }}
        >
          <span style={{ color: 'var(--fg)' }}>{"Let's build"}</span>
          <br />
          <em
            style={{
              fontStyle: 'italic',
              color: 'transparent',
              WebkitTextStroke: '1.5px var(--accent)',
            }}
          >
            transformative
          </em>
          <br />
          <span style={{ color: 'var(--fg)' }}>enterprise software.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            lineHeight: 1.7,
            color: 'rgba(var(--fg-rgb), 0.7)',
            maxWidth: 580,
            marginBottom: 44,
          }}
        >
          Available for Full-time Senior Engineering roles, Founder consulting, custom ERP development, and Agentic AI partnerships. {"Let's"} discuss your system requirements.
        </motion.p>

        {/* Contact info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.28 }}
          style={{ display: 'flex', gap: 24, alignItems: 'center', marginBottom: 40, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', flexWrap: 'wrap' }}
        >
          <div>📞 Direct Phone: <strong style={{ color: 'var(--fg)' }}>+92 344 2013217</strong></div>
          <div>📍 Location: <strong style={{ color: 'var(--fg)' }}>Pakistan (Remote / Global)</strong></div>
          <div>✉ Alt Email: <strong style={{ color: 'var(--fg)' }}>ahsankh079@gmail.com</strong></div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}
        >
          <MagneticCTA href={`mailto:${primaryEmail}`}>Send Email Message</MagneticCTA>

          <button
            data-cursor-hover
            onClick={copyEmail}
            style={{
              background: 'var(--btn-secondary-bg)',
              border: '1px solid var(--btn-border)',
              padding: '18px 32px',
              borderRadius: 'var(--btn-radius)',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              letterSpacing: '0.1em',
              color: copied ? 'var(--accent)' : 'var(--fg)',
              cursor: 'pointer',
              transition: 'color 0.3s, border-color 0.3s',
            }}
          >
            {copied ? (
              <>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Copied to Clipboard!
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="4" y="1" width="7" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M1 4h2v7h6v-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                {primaryEmail}
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* Socials & Footer */}
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 48, marginTop: 48, borderTop: '1px solid var(--border)' }}
        className="md:flex-row md:items-center md:justify-between"
      >
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              style={{ display: 'flex', flexDirection: 'column', gap: 4, textDecoration: 'none' }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)' }}>{s.label}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(var(--fg-rgb), 0.7)', transition: 'color 0.3s' }}>{s.handle}</span>
            </a>
          ))}
        </div>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(var(--fg-rgb), 0.5)', letterSpacing: '0.08em' }}>
          © 2026 Muhammad Ahsan Khan — Founder, Next Revolution Tech
        </div>
      </div>
    </section>
  )
}
