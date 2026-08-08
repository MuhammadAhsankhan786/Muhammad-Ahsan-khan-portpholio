import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    company: 'Next Revolution Tech',
    role: 'Founder & Full Stack Developer',
    period: 'June 2025 — Present',
    location: 'Pakistan (Remote / Global)',
    highlights: [
      'Founded and actively leading Next Revolution Tech, a growing software startup delivering enterprise software, AI automation, and custom digital products.',
      'Designed, developed, and deployed 10+ production web applications across ERP, Healthcare, Education, Retail, Event Management, and eCommerce.',
      'Built scalable frontend architectures using React.js, Next.js, TypeScript, HTML5, CSS3, and Tailwind CSS.',
      'Engineered secure backend microservices using Node.js, NestJS, Express.js, PostgreSQL, Prisma ORM, and MongoDB with REST APIs, JWT, and RBAC security.',
      'Developed enterprise ERP modules including Inventory, Sales, Purchasing, Customer Management, BI Dashboards, and Parcel Courier tracking.',
      'Actively expanding into Agentic AI systems, AI automation, and building a Personal Workspace AI Agent.',
    ],
    tags: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'Prisma ORM', 'Agentic AI', 'Vercel'],
  },
  {
    company: 'Codezyra',
    role: 'Full Stack Developer',
    period: 'January 2024 — May 2025',
    location: 'Pakistan',
    highlights: [
      'Developed responsive web applications using React.js, Next.js, and modern TypeScript.',
      'Built reusable UI component libraries and scalable frontend architecture.',
      'Integrated backend REST APIs, state management, and optimized overall page loading performance.',
      'Collaborated within agile Git/GitHub workflows following clean code and component reusability.',
    ],
    tags: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Git'],
  },
]

function ExperienceItem({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 24,
        paddingBottom: 48,
        marginBottom: 48,
        borderBottom: '1px solid var(--border)',
      }}
      className="md:grid-cols-[240px_1fr] md:gap-16"
    >
      {/* Left column */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 26,
            fontWeight: 'var(--heading-weight)' as any,
            color: 'var(--accent)',
            marginBottom: 8,
            lineHeight: 1.1,
          }}
        >
          {exp.company}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'rgba(var(--fg-rgb), 0.6)',
            letterSpacing: '0.08em',
            marginBottom: 4,
          }}
        >
          {exp.period}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'rgba(var(--fg-rgb), 0.4)',
            letterSpacing: '0.08em',
          }}
        >
          {exp.location}
        </div>

        {/* Timeline dot */}
        <div
          style={{
            marginTop: 28,
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--accent)',
            boxShadow: '0 0 10px rgba(var(--accent-rgb), 0.5)',
          }}
        />
      </div>

      {/* Right column */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            fontWeight: 600,
            color: 'var(--fg)',
            marginBottom: 20,
            letterSpacing: '0.01em',
          }}
        >
          {exp.role}
        </div>

        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
          {exp.highlights.map((h, hi) => (
            <li
              key={hi}
              style={{
                display: 'flex',
                gap: 12,
                marginBottom: 14,
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                lineHeight: 1.65,
                color: 'rgba(var(--fg-rgb), 0.75)',
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  marginTop: 8,
                }}
              />
              {h}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 24 }}>
          {exp.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                letterSpacing: '0.1em',
                padding: '4px 10px',
                background: 'var(--tag-bg)',
                border: '1px solid var(--tag-border)',
                color: 'var(--tag-fg)',
                textTransform: 'uppercase',
                borderRadius: 4,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="experience"
      ref={ref}
      className="relative px-6 md:px-20 py-20 md:py-36 overflow-hidden"
      style={{ background: 'var(--section-b)' }}
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '-10%',
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
          05 — Professional Work Experience
        </span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
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
            fontWeight: 'var(--heading-weight)' as any,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'var(--fg)',
            margin: '0 0 20px',
          }}
        >
          Engineering Leadership
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
            & Career Track.
          </em>
        </motion.h2>
      </div>

      {/* Experience List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
        {experiences.map((exp, index) => (
          <ExperienceItem key={exp.company} exp={exp} index={index} />
        ))}
      </div>
    </section>
  )
}
