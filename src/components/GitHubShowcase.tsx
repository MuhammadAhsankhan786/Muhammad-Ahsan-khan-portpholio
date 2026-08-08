import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pinnedRepos = [
  {
    name: 'NRT AI Operations Manager',
    desc: 'AI-powered Enterprise ERP platform with workflow automation, inventory, finance dashboards, analytics & RBAC.',
    stars: 28,
    forks: 7,
    lang: 'TypeScript',
    langColor: '#3178c6',
    link: 'https://github.com/MuhammadAhsankhan786',
  },
  {
    name: 'Personal Workspace AI Agent',
    desc: 'Agentic AI assistant for productivity, document interaction, conversational AI, and vector memory management.',
    stars: 42,
    forks: 12,
    lang: 'Python / TS',
    langColor: '#3572A5',
    link: 'https://github.com/MuhammadAhsankhan786',
  },
  {
    name: 'Pulse Portal Healthcare System',
    desc: 'Healthcare management platform with Admin, Reception, Provider, and Patient portals with secure RBAC.',
    stars: 19,
    forks: 4,
    lang: 'TypeScript',
    langColor: '#3178c6',
    link: 'https://github.com/MuhammadAhsankhan786',
  },
  {
    name: 'HK Fabric Order & ERP Platform',
    desc: 'Courier tracking, COD parcel processing, inventory management, and customer automation system.',
    stars: 15,
    forks: 3,
    lang: 'JavaScript',
    langColor: '#f1e05a',
    link: 'https://github.com/MuhammadAhsankhan786',
  },
]

const topLanguages = [
  { name: 'TypeScript', percent: '45%', color: '#3178c6' },
  { name: 'JavaScript', percent: '25%', color: '#f1e05a' },
  { name: 'Python', percent: '15%', color: '#3572A5' },
  { name: 'HTML/CSS', percent: '10%', color: '#e34c26' },
  { name: 'SQL/Prisma', percent: '5%', color: '#2b7489' },
]

export default function GitHubShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      id="github"
      ref={sectionRef}
      className="relative px-6 md:px-20 py-20 md:py-36 overflow-hidden"
      style={{ background: 'var(--section-a)' }}
    >
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
          08 — Open Source & Code Activity
        </span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </motion.div>

      {/* Header */}
      <div
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12"
      >
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
            color: 'var(--fg)',
            margin: 0,
          }}
        >
          GitHub Engineering
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
            Ecosystem & Repositories.
          </em>
        </motion.h2>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://github.com/MuhammadAhsankhan786"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--fg)',
              textDecoration: 'none',
              border: '1px solid var(--border-bright)',
              padding: '10px 18px',
              borderRadius: 'var(--btn-radius)',
              background: 'var(--card-surface)',
            }}
          >
            Personal GitHub (@MuhammadAhsankhan786) ↗
          </a>

          <a
            href="https://github.com/nextrevolutiontech-maker"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--fg)',
              textDecoration: 'none',
              border: '1px solid var(--border-bright)',
              padding: '10px 18px',
              borderRadius: 'var(--btn-radius)',
              background: 'var(--card-surface)',
            }}
          >
            Org GitHub (@nextrevolutiontech-maker) ↗
          </a>
        </div>
      </div>

      {/* GitHub Metrics Overview Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 md:p-8 rounded-2xl mb-12"
        style={{ background: 'var(--card-surface)', border: '1px solid var(--card-border)' }}
      >
        {[
          { label: 'Public Repositories', val: '25+' },
          { label: 'Production Deploys', val: '10+' },
          { label: 'Organizations Lead', val: 'Next Revolution Tech' },
          { label: 'Primary Language', val: 'TypeScript / React / Node' },
        ].map((stat, idx) => (
          <div key={idx} style={{ borderLeft: '1px solid var(--border)', paddingLeft: 24 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 800, color: 'var(--fg)', marginBottom: 4 }}>
              {stat.val}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', textTransform: 'uppercase' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Pinned Repos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {pinnedRepos.map((repo, idx) => (
          <motion.a
            key={repo.name}
            href={repo.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + idx * 0.1 }}
            data-cursor-hover
            style={{
              display: 'block',
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: 'var(--card-radius)',
              padding: 24,
              textDecoration: 'none',
              transition: 'border-color 0.3s ease, transform 0.3s ease',
            }}
            whileHover={{ y: -4 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span>📦</span> public repository
              </div>
              <div style={{ fontSize: 12, color: 'rgba(var(--fg-rgb), 0.5)' }}>↗</div>
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--fg)', marginBottom: 8 }}>
              {repo.name}
            </h3>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(var(--fg-rgb), 0.65)', lineHeight: 1.6, marginBottom: 20 }}>
              {repo.desc}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(var(--fg-rgb), 0.7)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />
                {repo.lang}
              </div>
              <div>⭐ {repo.stars}</div>
              <div>🍴 {repo.forks}</div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Language Distribution Bar */}
      <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: 'var(--card-radius)', padding: 28 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 16 }}>
          Language Stack Distribution
        </div>

        <div style={{ display: 'flex', height: 8, borderRadius: 4, overflow: 'hidden', marginBottom: 16 }}>
          {topLanguages.map((l) => (
            <div key={l.name} style={{ width: l.percent, background: l.color }} />
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
          {topLanguages.map((l) => (
            <div key={l.name} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(var(--fg-rgb), 0.6)' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: l.color }} />
              <span>{l.name} ({l.percent})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
