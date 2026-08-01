import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const traits = [
  {
    label: 'Philosophy',
    text: "Results-driven engineering prioritizing scalability, clean architecture, RBAC security, and practical AI automation for business growth.",
  },
  {
    label: 'Approach',
    text: "Full SDLC ownership—from requirement analysis and system architecture to database modeling, REST API design, responsive UIs, deployment, and ongoing support.",
  },
  {
    label: 'Currently',
    text: "Founder of Next Revolution Tech. Expanding expertise in Agentic AI, AI Automation, and building a Personal Workspace AI Agent for intelligent workflow execution.",
  },
]

function StatCard({ value, label, detail }: { value: string; label: string; detail: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderLeft: '1px solid rgba(124,111,247,0.25)',
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 44,
          fontWeight: 800,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(167,139,250,0.8)',
          lineHeight: 1,
          marginBottom: 8,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(167,139,250,0.7)',
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 13,
          color: 'rgba(90,90,130,0.8)',
          lineHeight: 1.5,
        }}
      >
        {detail}
      </div>
    </motion.div>
  )
}

export default function About() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative px-6 md:px-20 py-20 md:py-36 bg-[var(--color-background)] overflow-hidden"
    >
      {/* Ambient background shape */}
      <motion.div
        style={{
          y,
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(124,111,247,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          marginBottom: 60,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(90,90,130,0.6)',
          }}
        >
          01 — About & Credentials
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(21,21,42,1)' }} />
      </motion.div>

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16">
        {/* Left: Headline & Bio */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 60px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--color-foreground)',
              margin: '0 0 24px',
            }}
          >
            I build enterprise
            <br />
            software &{' '}
            <em style={{ fontStyle: 'italic', color: '#a78bfa' }}>
              AI solutions
            </em>
            <br />
            that transform business operations.
          </motion.h2>

          {/* Education & Credentials */}
          <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(124,111,247,0.2)',
                borderRadius: 10,
                padding: 20,
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#38bdf8', textTransform: 'uppercase', marginBottom: 4 }}>
                ACADEMIC EDUCATION
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: '#fff' }}>
                ADP in Computer Science
              </div>
              <div style={{ fontSize: 12, color: 'rgba(220,220,238,0.6)', fontFamily: 'var(--font-mono)', marginTop: 2 }}>
                Virtual University of Pakistan
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(124,111,247,0.2)',
                borderRadius: 10,
                padding: 20,
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#4ade80', textTransform: 'uppercase', marginBottom: 6 }}>
                CERTIFICATIONS & AWARDS
              </div>
              <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, color: 'rgba(220,220,238,0.7)', lineHeight: 1.7 }}>
                <li><strong>micro1 AI Interview Certification</strong> — Outstanding Performance (2026)</li>
                <li><strong>SMIT</strong> — Web & App Development Certification</li>
                <li><strong>SMIT Hackathon</strong> Participation Award</li>
                <li><strong>Web Development Certificate</strong></li>
              </ul>
            </div>

            <div
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(124,111,247,0.2)',
                borderRadius: 10,
                padding: 20,
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#a78bfa', textTransform: 'uppercase', marginBottom: 6 }}>
                LANGUAGES & COMMUNICATION
              </div>
              <div style={{ fontSize: 12, color: 'rgba(220,220,238,0.75)', fontFamily: 'var(--font-mono)', display: 'flex', gap: 20 }}>
                <span>🗣️ <strong>Urdu</strong> (Native)</span>
                <span>🌐 <strong>English</strong> (Professional Working)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: traits */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {traits.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#7c6ff7',
                  marginBottom: 10,
                }}
              >
                {t.label}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: 'rgba(220,220,238,0.65)',
                  margin: 0,
                }}
              >
                {t.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-[rgba(21,21,42,1)]">
        <StatCard
          value="10+"
          label="Production Web Apps"
          detail="ERP, Healthcare, Education, Retail & AI Ops deployed"
        />
        <StatCard
          value="Founder"
          label="Next Revolution Tech"
          detail="Software startup building enterprise digital products"
        />
        <StatCard
          value="Agentic AI"
          label="Workspace AI Agent"
          detail="Active development on personal productivity agent"
        />
        <StatCard
          value="100%"
          label="Clean Code & SDLC"
          detail="SOLID principles, RBAC security & cloud deployment"
        />
      </div>
    </section>
  )
}
