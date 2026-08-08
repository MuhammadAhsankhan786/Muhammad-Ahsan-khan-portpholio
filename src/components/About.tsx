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
  const isLongValue = value.length > 4

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderLeft: '2px solid var(--accent)',
        paddingLeft: 18,
        paddingRight: 12,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: isLongValue ? 'clamp(22px, 5.5vw, 34px)' : 'clamp(32px, 7vw, 44px)',
          fontWeight: 'var(--heading-weight)' as any,
          color: 'var(--accent)',
          lineHeight: 1.1,
          marginBottom: 8,
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: 'var(--label-tracking)',
          textTransform: 'uppercase',
          color: 'var(--fg)',
          marginBottom: 6,
          fontWeight: 600,
          wordBreak: 'break-word',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 12.5,
          color: 'rgba(var(--fg-rgb), 0.65)',
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
      className="relative px-6 md:px-20 py-20 md:py-36 overflow-hidden"
      style={{ background: 'var(--section-b)' }}
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
          background: 'radial-gradient(circle, var(--decorative) 0%, transparent 70%)',
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
        style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 60 }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: 'var(--label-tracking)',
            textTransform: 'uppercase',
            color: 'var(--accent)',
          }}
        >
          01 — About & Credentials
        </span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
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
              fontWeight: 'var(--heading-weight)' as any,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--fg)',
              margin: '0 0 24px',
            }}
          >
            I build enterprise
            <br />
            software &{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              AI solutions
            </em>
            <br />
            that transform business operations.
          </motion.h2>

          {/* Education & Credentials */}
          <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                label: 'ACADEMIC EDUCATION',
                title: 'ADP in Computer Science',
                sub: 'Virtual University of Pakistan',
              },
              {
                label: 'CERTIFICATIONS & AWARDS',
                list: [
                  '🏆 micro1 Verified Top 1% React & Node.js Developer',
                  '🏅 TypeScript & NestJS ERP Architecture Certificate',
                  '🤖 Next.js 14 & Agentic AI Specialist',
                ],
              },
              {
                label: 'LANGUAGES & COMMUNICATION',
                langs: true,
              },
            ].map((card, ci) => (
              <div
                key={ci}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: 'var(--card-radius)',
                  padding: 20,
                  boxShadow: 'var(--card-shadow)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 6, letterSpacing: '0.12em' }}>
                  {card.label}
                </div>
                {card.title && (
                  <>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--fg)' }}>{card.title}</div>
                    <div style={{ fontSize: 12, color: 'rgba(var(--fg-rgb), 0.7)', fontFamily: 'var(--font-mono)', marginTop: 2 }}>{card.sub}</div>
                  </>
                )}
                {card.list && (
                  <div style={{ fontSize: 12.5, color: 'var(--fg)', fontFamily: 'var(--font-mono)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {card.list.map((item) => <div key={item}><strong>{item}</strong></div>)}
                  </div>
                )}
                {card.langs && (
                  <div style={{ fontSize: 12, color: 'rgba(var(--fg-rgb), 0.85)', fontFamily: 'var(--font-mono)', display: 'flex', gap: 20 }}>
                    <span>🗣️ <strong>Urdu</strong> (Native)</span>
                    <span>🌐 <strong>English</strong> (Professional Working)</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Portrait & traits */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {/* Executive Founder Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              borderRadius: 'var(--card-radius)',
              overflow: 'hidden',
              border: '1px solid var(--border-bright)',
              background: 'var(--card-bg)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', overflow: 'hidden', background: 'var(--surface)' }}>
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
                  background: 'linear-gradient(to top, var(--card-bg) 0%, transparent 100%)',
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
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-bright)',
                  borderRadius: 12,
                  padding: '14px 18px',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, color: 'var(--fg)' }}>
                  Muhammad Ahsan Khan
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>
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
                  letterSpacing: 'var(--label-tracking)',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: 10,
                }}
              >
                {t.label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14.5,
                  color: 'rgba(var(--fg-rgb), 0.8)',
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
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-12"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <StatCard value="10+" label="Production Web Apps" detail="ERP, Healthcare, Education, Retail & AI Ops deployed" />
        <StatCard value="Founder" label="Next Revolution Tech" detail="Software startup building enterprise digital products" />
        <StatCard value="Agentic AI" label="Workspace AI Agent" detail="Active development on personal productivity agent" />
        <StatCard value="100%" label="Clean Code & SDLC" detail="SOLID principles, RBAC security & cloud deployment" />
      </div>
    </section>
  )
}
