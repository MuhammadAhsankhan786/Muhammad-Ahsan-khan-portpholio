import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const servicesList = [
  {
    num: '01',
    title: 'Enterprise Software',
    subtitle: 'Scalable Architecture & Systems',
    desc: 'Designing and deploying robust full-stack software tailored for high concurrency, clean architecture, and enterprise compliance.',
    tech: ['React.js', 'Next.js', 'NestJS', 'PostgreSQL', 'System Architecture'],
  },
  {
    num: '02',
    title: 'ERP & Business Systems',
    subtitle: 'Inventory, Sales & Financial Automation',
    desc: 'Custom ERP solutions featuring real-time inventory management, procurement workflows, COD tracking, financial dashboards, and role-based access control.',
    tech: ['Inventory Modules', 'COD Courier API', 'Financial Analytics', 'RBAC Security'],
  },
  {
    num: '03',
    title: 'Agentic AI & Automation',
    subtitle: 'Autonomous AI Agents & LLM Tools',
    desc: 'Integrating state-of-the-art LLMs, multi-agent goal planners, RAG vector search, and workflow automation into business operations.',
    tech: ['Multi-Agent AI', 'Vector DB', 'RAG Context', 'LLM Workflows', 'Python'],
  },
  {
    num: '04',
    title: 'SaaS Platform Development',
    subtitle: 'Multi-tenant Web Applications',
    desc: 'Building modern multi-tenant SaaS platforms from ground zero—including subscription billing, user portals, dashboard analytics, and automated reporting.',
    tech: ['Next.js App Router', 'Stripe/Payment APIs', 'Prisma ORM', 'Vercel Cloud'],
  },
  {
    num: '05',
    title: 'API Engineering & Security',
    subtitle: 'REST, GraphQL & RBAC Auth',
    desc: 'Engineering high-performance RESTful APIs, JWT token management, granular Role-Based Access Control (RBAC), and relational database modeling.',
    tech: ['NestJS', 'Node.js', 'PostgreSQL', 'Prisma', 'JWT & OAuth'],
  },
  {
    num: '06',
    title: 'Custom Digital Products',
    subtitle: 'End-to-End SDLC Delivery',
    desc: 'From initial requirements gathering to UI design, database modeling, frontend & backend engineering, deployment, and ongoing maintenance.',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Docker', 'Vercel Deployment'],
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.15 })

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative px-6 md:px-20 py-20 md:py-36 bg-[var(--color-background)] overflow-hidden"
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          right: '-5%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,111,247,0.06) 0%, transparent 70%)',
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
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#a78bfa',
          }}
        >
          03 — Enterprise Solutions & Offerings
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(21,21,42,1)' }} />
      </motion.div>

      {/* Main Headline */}
      <div style={{ maxWidth: 800, marginBottom: 60 }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 3.5vw, 56px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'var(--color-foreground)',
            margin: '0 0 20px',
          }}
        >
          High-Performance Software
          <br />
          <em style={{ fontStyle: 'italic', color: '#a78bfa' }}>
            & Startup Engineering.
          </em>
        </motion.h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            lineHeight: 1.7,
            color: 'rgba(220,220,238,0.6)',
            margin: 0,
          }}
        >
          End-to-end digital solution development built on clean SDLC principles, modern cloud architecture, robust database models, and seamless user experiences.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesList.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: '#070712',
              border: '1px solid rgba(124,111,247,0.18)',
              borderRadius: 16,
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'border-color 0.3s, transform 0.3s',
            }}
            whileHover={{ borderColor: 'rgba(167,139,250,0.6)', y: -6 }}
          >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 40,
                    fontWeight: 800,
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(124,111,247,0.6)',
                    marginBottom: 16,
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: 6,
                  }}
                >
                  {s.title}
                </h3>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: '#a78bfa',
                    marginBottom: 16,
                    letterSpacing: '0.05em',
                  }}
                >
                  {s.subtitle}
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: 'rgba(220,220,238,0.55)',
                    marginBottom: 28,
                  }}
                >
                  {s.desc}
                </p>
              </div>

              {/* Tech Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {s.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      padding: '4px 8px',
                      background: 'rgba(21,21,42,0.8)',
                      border: '1px solid rgba(124,111,247,0.2)',
                      color: 'rgba(220,220,238,0.7)',
                      borderRadius: 4,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
    </section>
  )
}
