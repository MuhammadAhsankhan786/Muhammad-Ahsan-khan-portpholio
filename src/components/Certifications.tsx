import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

export type Certificate = {
  id: string
  title: string
  issuer: string
  date: string
  badgeColor: string
  verifiedUrl?: string
  recipient: string
  description: string
  signatory: string
  featured?: boolean
  imageFallbackUrl?: string
}

const certificatesData: Certificate[] = [
  {
    id: 'micro1-ai',
    title: 'micro1 AI Interview Certification',
    issuer: 'micro1',
    date: 'July 21st, 2026',
    badgeColor: '#22c55e',
    recipient: 'Muhammad Ahsan Khan',
    description: 'Had an outstanding performance during micro1\'s AI Interview evaluating senior full stack engineering, system architecture, and AI capabilities.',
    signatory: 'Ali Ansari, Founder / CEO (micro1)',
    verifiedUrl: 'https://micro1.ai/apply-as-talent',
    featured: true,
  },
  {
    id: 'smit-web-app',
    title: 'Web & Mobile App Development',
    issuer: 'SMIT (Saylani Mass IT Training)',
    date: 'Certified',
    badgeColor: '#38bdf8',
    recipient: 'Muhammad Ahsan Khan',
    description: 'Comprehensive software development program covering modern full-stack web applications, JavaScript ES6+, React, Node.js, and database architectures.',
    signatory: 'SMIT Academic Board',
    featured: true,
  },
  {
    id: 'smit-hackathon',
    title: 'SMIT Hackathon Participation',
    issuer: 'SMIT Hackathon',
    date: 'Certified',
    badgeColor: '#a78bfa',
    recipient: 'Muhammad Ahsan Khan',
    description: 'Awarded for active participation and rapid solution prototyping during the competitive SMIT Full Stack Hackathon.',
    signatory: 'SMIT Hackathon Committee',
    featured: true,
  },
  {
    id: 'web-dev-cert',
    title: 'Full Stack Web Development Certificate',
    issuer: 'Professional Web Dev Institute',
    date: 'Certified',
    badgeColor: '#7c6ff7',
    recipient: 'Muhammad Ahsan Khan',
    description: 'Advanced web engineering certification covering RESTful APIs, database optimization, authentication (JWT/RBAC), and deployment.',
    signatory: 'Lead Instructors',
    featured: false,
  },
]

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [activeCert, setActiveCert] = useState<Certificate | null>(null)

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative px-6 md:px-20 py-20 md:py-36 overflow-hidden"
      style={{ background: 'var(--section-b)' }}
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '10%',
          transform: 'translateY(-50%)',
          width: 600,
          height: 600,
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
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: 'var(--label-tracking)',
            textTransform: 'uppercase',
            color: 'var(--accent)',
          }}
        >
          04 — Verified Certifications & Credentials
        </span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </motion.div>

      {/* Headline */}
      <div style={{ maxWidth: 800, marginBottom: 60 }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 3.5vw, 56px)',
            fontWeight: 'var(--heading-weight)' as any,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'var(--fg)',
            margin: '0 0 20px',
          }}
        >
          Verified AI & Software
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
            Certifications.
          </em>
        </motion.h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            lineHeight: 1.7,
            color: 'rgba(var(--fg-rgb), 0.7)',
            margin: 0,
          }}
        >
          Official certifications validating AI interview performance, full-stack engineering proficiency, and hackathon achievements.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {certificatesData.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setActiveCert(cert)}
            data-cursor-hover
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: 'var(--card-radius)',
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--card-shadow)',
            }}
            whileHover={{ y: -6, boxShadow: 'var(--card-shadow-hover)' }}
          >
            {/* Top Verified Badge Indicator */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '4px 10px',
                  borderRadius: 20,
                  background: 'rgba(var(--accent-rgb), 0.15)',
                  border: '1px solid rgba(var(--accent-rgb), 0.3)',
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
                VERIFIED CREDENTIAL
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(var(--fg-rgb), 0.5)' }}>
                {cert.date}
              </span>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  fontWeight: 700,
                  color: 'var(--fg)',
                  marginBottom: 8,
                  lineHeight: 1.25,
                }}
              >
                {cert.title}
              </h3>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--accent)',
                  marginBottom: 16,
                  fontWeight: 600,
                }}
              >
                Issued by {cert.issuer}
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: 'rgba(var(--fg-rgb), 0.65)',
                  margin: 0,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {cert.description}
              </p>
            </div>

            <div
              style={{
                marginTop: 24,
                paddingTop: 16,
                borderTop: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)' }}>
                Click to View Certificate →
              </span>
              <span style={{ fontSize: 14 }}>🔍</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal Viewer */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'rgba(0,0,0,0.80)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 24,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--card-bg)',
                border: `2px solid ${activeCert.badgeColor}60`,
                borderRadius: 20,
                maxWidth: 720,
                width: '100%',
                padding: 40,
                boxShadow: `0 30px 90px rgba(0,0,0,0.9), 0 0 50px ${activeCert.badgeColor}30`,
                position: 'relative',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                data-cursor-hover
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  background: 'var(--card-surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--fg)',
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>

              {/* Replica Official Certificate View */}
              <div
                style={{
                  border: `1px solid ${activeCert.badgeColor}40`,
                  borderRadius: 12,
                  padding: 40,
                  background: 'var(--surface)',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                {/* Verified Green Badge Icon */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: `${activeCert.badgeColor}20`,
                    border: `2px solid ${activeCert.badgeColor}`,
                    display: 'grid',
                    placeItems: 'center',
                    margin: '0 auto 20px',
                    boxShadow: `0 0 20px ${activeCert.badgeColor}80`,
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke={activeCert.badgeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 28,
                    fontWeight: 800,
                    color: 'var(--fg)',
                    marginBottom: 8,
                  }}
                >
                  Certified by <span style={{ color: activeCert.badgeColor }}>{activeCert.issuer}</span>
                </div>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(var(--fg-rgb), 0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24 }}>
                  This is to certify that
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 34,
                    fontWeight: 800,
                    color: 'var(--fg)',
                    letterSpacing: '-0.01em',
                    marginBottom: 16,
                  }}
                >
                  {activeCert.recipient}
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 15,
                    color: 'rgba(var(--fg-rgb), 0.7)',
                    maxWidth: 500,
                    margin: '0 auto 32px',
                    lineHeight: 1.6,
                  }}
                >
                  {activeCert.description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    paddingTop: 24,
                    borderTop: '1px solid var(--border)',
                    fontSize: 12,
                    fontFamily: 'var(--font-mono)',
                    color: 'rgba(var(--fg-rgb), 0.6)',
                  }}
                >
                  <div>
                    <div>Issue Date: <strong style={{ color: 'var(--fg)' }}>{activeCert.date}</strong></div>
                    {activeCert.verifiedUrl && (
                      <div style={{ marginTop: 4 }}>
                        Verify: <a href={activeCert.verifiedUrl} target="_blank" rel="noopener noreferrer" style={{ color: activeCert.badgeColor }}>{activeCert.verifiedUrl.replace('https://', '')}</a>
                      </div>
                    )}
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--fg)', fontStyle: 'italic' }}>
                      {activeCert.signatory}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
