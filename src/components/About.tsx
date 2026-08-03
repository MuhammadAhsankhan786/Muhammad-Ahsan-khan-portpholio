import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import profileImg from '../assets/profile.jpg'

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
        borderLeft: '2px solid #748CAB',
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 44,
          fontWeight: 800,
          color: '#748CAB',
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
          color: '#F0EBD8',
          marginBottom: 6,
          fontWeight: 600,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 13,
          color: 'rgba(240,235,216,0.65)',
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
      className="relative px-6 md:px-20 py-20 md:py-36 bg-[#1D2D44] overflow-hidden"
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
            'radial-gradient(circle, rgba(116,140,171,0.05) 0%, transparent 70%)',
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
            color: '#748CAB',
          }}
        >
          01 — About & Credentials
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(116,140,171,0.12)' }} />
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
              color: '#F0EBD8',
              margin: '0 0 24px',
            }}
          >
            I build enterprise
            <br />
            software &{' '}
            <em style={{ fontStyle: 'italic', color: '#748CAB' }}>
              AI solutions
            </em>
            <br />
            that transform business operations.
          </motion.h2>

          {/* Education & Credentials */}
          <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div
              style={{
                background: '#0D1321',
                border: '1px solid rgba(116,140,171,0.15)',
                borderRadius: 10,
                padding: 20,
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#748CAB', textTransform: 'uppercase', marginBottom: 4 }}>
                ACADEMIC EDUCATION
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: '#F0EBD8' }}>
                ADP in Computer Science
              </div>
              <div style={{ fontSize: 12, color: 'rgba(240,235,216,0.7)', fontFamily: 'var(--font-mono)', marginTop: 2 }}>
                Virtual University of Pakistan
              </div>
            </div>

            <div
              style={{
                background: '#0D1321',
                border: '1px solid rgba(116,140,171,0.15)',
                borderRadius: 10,
                padding: 20,
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#748CAB', textTransform: 'uppercase', marginBottom: 6 }}>
                CERTIFICATIONS & AWARDS
              </div>
              <div style={{ fontSize: 12.5, color: '#F0EBD8', fontFamily: 'var(--font-mono)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div>🏆 <strong>micro1 Verified Top 1% React & Node.js Developer</strong></div>
                <div>🏅 <strong>TypeScript & NestJS ERP Architecture Certificate</strong></div>
                <div>🤖 <strong>Next.js 14 & Agentic AI Specialist</strong></div>
              </div>
            </div>

            <div
              style={{
                background: '#0D1321',
                border: '1px solid rgba(116,140,171,0.15)',
                borderRadius: 10,
                padding: 20,
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#748CAB', textTransform: 'uppercase', marginBottom: 6 }}>
                LANGUAGES & COMMUNICATION
              </div>
              <div style={{ fontSize: 12, color: 'rgba(240,235,216,0.85)', fontFamily: 'var(--font-mono)', display: 'flex', gap: 20 }}>
                <span>🗣️ <strong>Urdu</strong> (Native)</span>
                <span>🌐 <strong>English</strong> (Professional Working)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Founder Executive Portrait & traits */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {/* Executive Founder Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              borderRadius: 20,
              overflow: 'hidden',
              border: '1px solid rgba(116,140,171,0.25)',
              background: '#0D1321',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            }}
          >
            {/* Image */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', overflow: 'hidden', background: '#1D2D44' }}>
              <img
                src={profileImg}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = 'true'
                    target.src = '/profile.jpg'
                  }
                }}
                alt="Muhammad Ahsan Khan - Founder & Full Stack Developer"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '45%',
                  background: 'linear-gradient(to top, #0D1321 0%, rgba(13,19,33,0.4) 60%, transparent 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Badge overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 20,
                  left: 20,
                  right: 20,
                  background: '#0D1321',
                  border: '1px solid rgba(116,140,171,0.25)',
                  borderRadius: 12,
                  padding: '14px 18px',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, color: '#F0EBD8' }}>
                  Muhammad Ahsan Khan
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#748CAB', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>
                  Founder, Next Revolution Tech
                </div>
              </div>
            </div>
          </motion.div>

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
                  color: '#748CAB',
                  marginBottom: 10,
                }}
              >
                {t.label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14.5,
                  color: 'rgba(240,235,216,0.8)',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {t.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-[rgba(116,140,171,0.12)]">
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
