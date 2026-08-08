import { motion } from 'framer-motion'

const trustItems = [
  { icon: '🚀', text: '10+ Production Applications Deployed' },
  { icon: '⚙️', text: 'Enterprise ERP & SaaS Architect' },
  { icon: '🤖', text: 'Agentic AI & LLM Systems Specialist' },
  { icon: '🏛️', text: 'Founder & Lead Architect @ Next Revolution Tech' },
  { icon: '💻', text: 'Open Source Contributor' },
  { icon: '🎯', text: 'Top Engineering Practices & Clean Code' },
]

export default function TrustStrip() {
  return (
    <div
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '16px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Fade edges */}
      <div
        style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 80,
          background: 'linear-gradient(to right, var(--bg), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 80,
          background: 'linear-gradient(to left, var(--bg), transparent)',
          zIndex: 2, pointerEvents: 'none',
        }}
      />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
        style={{ display: 'flex', gap: 32, width: 'max-content', whiteSpace: 'nowrap' }}
      >
        {[...trustItems, ...trustItems].map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '6px 16px',
              border: '1px solid var(--border-bright)',
              borderRadius: 30,
              background: 'rgba(var(--surface-rgb), 0.6)',
            }}
          >
            <span style={{ fontSize: 14 }}>{item.icon}</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.08em',
                color: 'var(--fg)',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              {item.text}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
