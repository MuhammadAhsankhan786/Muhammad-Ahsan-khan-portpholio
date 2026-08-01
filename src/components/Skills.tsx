import { useEffect, useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

type Skill = {
  name: string
  color: string
  category: string
  level: string
  projects: string
  description: string
}

const orbits: { radius: number; speed: number; skills: Skill[] }[] = [
  {
    radius: 110,
    speed: 0.00012,
    skills: [
      { name: 'React.js', color: '#61dafb', category: 'Frontend', level: 'Expert', projects: '10+ Apps', description: 'React 19, Server Components, Custom Hooks & State Mgmt.' },
      { name: 'Next.js', color: '#ffffff', category: 'Framework', level: 'Expert', projects: '10+ Apps', description: 'App Router, SSR, SSG, Edge Runtime & SEO optimization.' },
      { name: 'TypeScript', color: '#3178c6', category: 'Language', level: 'Expert', projects: '10+ Apps', description: 'Strict typing, Generics, System Contracts & Interface schemas.' },
    ],
  },
  {
    radius: 195,
    speed: 0.00008,
    skills: [
      { name: 'Node.js', color: '#339933', category: 'Backend', level: 'Advanced', projects: '10+ Apps', description: 'Scalable event-driven backend microservices & REST APIs.' },
      { name: 'NestJS', color: '#ea2858', category: 'Backend', level: 'Advanced', projects: 'Enterprise', description: 'Modular architecture, Dependency Injection, Middleware & Guards.' },
      { name: 'PostgreSQL', color: '#336791', category: 'Database', level: 'Advanced', projects: '8+ Apps', description: 'Relational schema design, Indexing, Triggers & Transactions.' },
      { name: 'Prisma ORM', color: '#5a67d8', category: 'ORM', level: 'Advanced', projects: '8+ Apps', description: 'Type-safe database queries, Migrations & Schema relations.' },
      { name: 'Tailwind CSS', color: '#38bdf8', category: 'Styling', level: 'Expert', projects: '10+ Apps', description: 'Utility-first CSS v4, Responsive layouts & Design systems.' },
    ],
  },
  {
    radius: 285,
    speed: 0.00005,
    skills: [
      { name: 'Agentic AI', color: '#7c6ff7', category: 'AI', level: 'Pioneering', projects: 'Personal Agent', description: 'Multi-agent orchestration, Tool execution loops & Goal planning.' },
      { name: 'LLM Systems', color: '#a78bfa', category: 'AI', level: 'Advanced', projects: 'Enterprise AI', description: 'RAG semantic search, Vector embeddings & Prompt engineering.' },
      { name: 'MongoDB', color: '#47a248', category: 'Database', level: 'Advanced', projects: '5+ Apps', description: 'NoSQL document schemas, Aggregations & Collections.' },
      { name: 'Firebase', color: '#ffca28', category: 'BaaS', level: 'Advanced', projects: 'Social Apps', description: 'Real-time database, Authentication & Cloud Functions.' },
      { name: 'REST & RBAC', color: '#4ade80', category: 'Security', level: 'Expert', projects: '10+ Apps', description: 'JWT authentication, Granular permissions & Authorization.' },
      { name: 'Git & Vercel', color: '#f05032', category: 'DevOps', level: 'Expert', projects: 'Continuous', description: 'Git/GitHub workflows, CI/CD pipelines & Vercel CDN.' },
    ],
  },
]

function OrbitRing({
  radius,
  speed,
  skills,
  containerSize,
}: {
  radius: number
  speed: number
  skills: Skill[]
  containerSize: number
}) {
  const [angle, setAngle] = useState(0)
  const rafRef = useRef<number>(0)
  const lastTime = useRef<number>(0)

  useEffect(() => {
    const animate = (t: number) => {
      if (lastTime.current > 0) {
        const dt = t - lastTime.current
        setAngle((a) => a + speed * dt)
      }
      lastTime.current = t
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [speed])

  const cx = containerSize / 2
  const cy = containerSize / 2
  const count = skills.length

  return (
    <>
      {/* Orbit circle */}
      <svg
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
        width={containerSize}
        height={containerSize}
      >
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="rgba(124,111,247,0.12)"
          strokeWidth={1}
          strokeDasharray="4 8"
        />
      </svg>

      {/* Skill nodes */}
      {skills.map((skill, i) => {
        const theta = angle + (i * 2 * Math.PI) / count
        const x = cx + radius * Math.cos(theta)
        const y = cy + radius * Math.sin(theta)
        return (
          <SkillNode key={skill.name} skill={skill} x={x} y={y} />
        )
      })}
    </>
  )
}

function SkillNode({ skill, x, y }: { skill: Skill; x: number; y: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor-hover
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        cursor: 'pointer',
        zIndex: hovered ? 99 : 1,
      }}
    >
      <motion.div
        animate={{
          scale: hovered ? 1.35 : 1,
          boxShadow: hovered
            ? `0 0 25px ${skill.color}90, 0 0 50px ${skill.color}40`
            : `0 0 8px ${skill.color}30`,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        style={{
          width: 38,
          height: 38,
          borderRadius: '50%',
          background: `${skill.color}20`,
          border: `1.5px solid ${skill.color}80`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{ width: 10, height: 10, borderRadius: '50%', background: skill.color }}
        />
      </motion.div>

      <motion.div
        animate={{ opacity: hovered ? 1 : 0.6 }}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: hovered ? skill.color : 'rgba(220,220,238,0.6)',
          whiteSpace: 'nowrap',
          background: 'rgba(4,4,8,0.85)',
          padding: '2px 6px',
          borderRadius: 4,
        }}
      >
        {skill.name}
      </motion.div>

      {/* Rich Inspector Card on Hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              bottom: 54,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 240,
              background: '#0d0d1c',
              border: `1px solid ${skill.color}60`,
              borderRadius: 10,
              padding: 14,
              boxShadow: `0 20px 40px rgba(0,0,0,0.8), 0 0 20px ${skill.color}30`,
              pointerEvents: 'none',
              zIndex: 100,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: '#fff' }}>
                {skill.name}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: skill.color, padding: '2px 6px', background: `${skill.color}20`, borderRadius: 4 }}>
                {skill.category}
              </span>
            </div>
            <div style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(220,220,238,0.6)', marginBottom: 8 }}>
              <span>Proficiency: <strong style={{ color: '#fff' }}>{skill.level}</strong></span>
              <span>Projects: <strong style={{ color: '#a78bfa' }}>{skill.projects}</strong></span>
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(220,220,238,0.7)', lineHeight: 1.4 }}>
              {skill.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const coreSkills = [
  'Enterprise Full Stack Architecture',
  'Custom ERP & Business Systems',
  'Agentic AI & LLM Automation',
  'REST APIs, JWT & RBAC Security',
  'PostgreSQL, Prisma & MongoDB Modeling',
  'Clean Architecture & SDLC Leadership',
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null)
  const SIZE = 540

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative px-6 md:px-20 py-20 md:py-36 bg-[var(--color-surface)] overflow-hidden"
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700,
          height: 700,
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
            color: 'rgba(90,90,130,0.6)',
          }}
        >
          06 — Orbital Skill Architecture
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(21,21,42,1)' }} />
      </motion.div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Headline & Inspector */}
        <div>
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
            Engineering Capabilities
            <br />
            <em style={{ fontStyle: 'italic', color: '#a78bfa' }}>
              & Tech Stack.
            </em>
          </motion.h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              lineHeight: 1.7,
              color: 'rgba(220,220,238,0.6)',
              margin: '0 0 32px',
              maxWidth: 480,
            }}
          >
            Hover or tap any skill node on the orbital radar to inspect proficiency, enterprise project applications, and architectural domain experience.
          </p>

          {/* Active Skill Inspector Card */}
          <div
            style={{
              background: '#070712',
              border: `1px solid ${hoveredSkill ? hoveredSkill.color : 'rgba(124,111,247,0.3)'}`,
              borderRadius: 14,
              padding: 24,
              minHeight: 140,
              transition: 'all 0.3s ease',
              boxShadow: hoveredSkill ? `0 10px 30px ${hoveredSkill.color}20` : 'none',
            }}
          >
            {hoveredSkill ? (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: '#fff' }}>
                    {hoveredSkill.name}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      padding: '4px 10px',
                      borderRadius: 20,
                      background: `${hoveredSkill.color}20`,
                      color: hoveredSkill.color,
                      border: `1px solid ${hoveredSkill.color}40`,
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    {hoveredSkill.level} • {hoveredSkill.projects}
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(90,90,130,0.8)', textTransform: 'uppercase', marginBottom: 12 }}>
                  Category: {hoveredSkill.category}
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(220,220,238,0.7)', margin: 0, lineHeight: 1.6 }}>
                  {hoveredSkill.desc}
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: '100%', color: 'rgba(90,90,130,0.8)', fontFamily: 'var(--font-mono)', fontSize: 12 }}>
                <span>🎯</span>
                <span>Tap or hover over any node on the right to inspect technical capability...</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Orbital Radar Container */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div
            style={{
              position: 'relative',
              width: SIZE,
              height: SIZE,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Core node */}
            <div
              style={{
                position: 'absolute',
                width: 84,
                height: 84,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(124,111,247,0.4) 0%, rgba(124,111,247,0.05) 70%)',
                border: '1.5px solid rgba(124,111,247,0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 5,
                animation: 'pulse-glow 3s ease-in-out infinite',
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: '#7c6ff7',
                  boxShadow: '0 0 20px rgba(124,111,247,0.9)',
                }}
              />
            </div>

            {/* Core label */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, 54px)',
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                letterSpacing: '0.12em',
                color: '#a78bfa',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                zIndex: 5,
                fontWeight: 600,
              }}
            >
              Hover Orbit Nodes
            </div>

            {/* Orbit rings + skill nodes */}
            {orbits.map((orbit) => (
              <OrbitRing
                key={orbit.radius}
                radius={orbit.radius}
                speed={orbit.speed}
                skills={orbit.skills}
                containerSize={SIZE}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
