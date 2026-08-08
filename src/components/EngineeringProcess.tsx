import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const processSteps = [
  {
    num: '01',
    title: 'Discovery & Audit',
    desc: 'Analyzing business requirements, workflows, database models, and bottlenecks to craft precise technical specifications.',
    deliverable: 'Technical Requirements & Schema Scope',
  },
  {
    num: '02',
    title: 'System Architecture',
    desc: 'Designing ER diagrams, REST microservices API contracts, RBAC permission tables, and data caching strategies.',
    deliverable: 'Architecture Blueprints & Data Flow',
  },
  {
    num: '03',
    title: 'UI/UX Prototyping',
    desc: 'Crafting responsive, clean user interfaces and interactive design systems optimized for conversion and speed.',
    deliverable: 'Figma Component Mockups',
  },
  {
    num: '04',
    title: 'Modular Development',
    desc: 'Writing clean, type-safe React, Next.js, and NestJS code following SOLID engineering principles.',
    deliverable: 'Production TypeScript Codebase',
  },
  {
    num: '05',
    title: 'Automated Testing',
    desc: 'Verifying API payloads, authentication token security, database transactions, and UI component integrity.',
    deliverable: 'Clean QA Audit & Test Pass',
  },
  {
    num: '06',
    title: 'CI/CD Deployment',
    desc: 'Configuring GitHub Actions pipelines, Docker containers, SSL certs, and Vercel Edge global CDN distribution.',
    deliverable: 'Zero-Downtime Live Release',
  },
  {
    num: '07',
    title: 'Continuous Improvement',
    desc: 'Monitoring production telemetry, optimizing database queries, adding features, and maintaining long-term health.',
    deliverable: '99.9% Uptime & Feature Growth',
  },
]

export default function EngineeringProcess() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      ref={sectionRef}
      className="relative px-6 md:px-20 py-20 md:py-32 overflow-hidden"
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
          06 — My Enterprise Engineering Process
        </span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </motion.div>

      {/* Heading */}
      <div style={{ maxWidth: 720, marginBottom: 56 }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 3.5vw, 52px)',
            fontWeight: 800,
            color: 'var(--fg)',
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          End-to-End Delivery Pipeline <br />
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
            Built for Enterprise Predictability.
          </em>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(var(--fg-rgb), 0.7)', margin: 0, lineHeight: 1.6 }}>
          How I take complex software concepts from discovery to robust production deployment and continuous feature growth.
        </p>
      </div>

      {/* Pipeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {processSteps.map((step, idx) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: 'var(--card-radius)',
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 28,
                  fontWeight: 800,
                  color: 'var(--accent)',
                  marginBottom: 12,
                }}
              >
                {step.num}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 18,
                  fontWeight: 700,
                  color: 'var(--fg)',
                  marginBottom: 8,
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  color: 'rgba(var(--fg-rgb), 0.65)',
                  lineHeight: 1.6,
                  marginBottom: 20,
                }}
              >
                {step.desc}
              </p>
            </div>

            <div
              style={{
                borderTop: '1px solid var(--border)',
                paddingTop: 12,
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                color: 'var(--accent)',
                textTransform: 'uppercase',
              }}
            >
              Output: <span style={{ color: 'var(--fg)' }}>{step.deliverable}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
