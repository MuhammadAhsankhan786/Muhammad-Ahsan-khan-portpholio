import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const metricsData = [
  {
    val: '10+',
    title: 'Production Apps Delivered',
    desc: 'Full-stack enterprise applications, ERPs, SaaS platforms, and AI agent workflows actively running in production.',
    tag: 'PROVEN DELIVERIES',
  },
  {
    val: '15+',
    title: 'Enterprise ERP Modules',
    desc: 'Modules engineered across inventory, finance, multi-branch POS, procurement, RBAC security, and BI reporting.',
    tag: 'SYSTEM SCOPE',
  },
  {
    val: 'HIGH',
    title: 'Inventory Sync Precision',
    desc: 'Real-time multi-warehouse inventory tracking and COD courier reconciliation optimized for accuracy.',
    tag: 'RELIABILITY IMPACT',
  },
  {
    val: '100%',
    title: 'RBAC Security Isolation',
    desc: 'Multi-tenant role-based authorization, JWT security middleware, and granular endpoint permission matrices.',
    tag: 'ENTERPRISE SECURITY',
  },
]

export default function BusinessMetrics() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      ref={sectionRef}
      className="relative px-6 md:px-20 py-16 md:py-24 overflow-hidden"
      style={{ background: 'var(--section-a)', borderBottom: '1px solid var(--border)' }}
    >
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
          }}
        >
          02 — Measurable Business Impact & Track Record
        </span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricsData.map((m, idx) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: 'var(--card-radius)',
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.15em',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  marginBottom: 12,
                }}
              >
                {m.tag}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 3.5vw, 48px)',
                  fontWeight: 800,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {m.val}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 16,
                  fontWeight: 700,
                  color: 'var(--fg)',
                  marginBottom: 8,
                }}
              >
                {m.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  color: 'rgba(var(--fg-rgb), 0.65)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {m.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
