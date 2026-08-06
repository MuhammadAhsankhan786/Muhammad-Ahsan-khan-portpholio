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
        background: '#0B101D',
        borderTop: '1px solid rgba(116, 140, 171, 0.12)',
        borderBottom: '1px solid rgba(116, 140, 171, 0.12)',
        padding: '16px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 80,
          background: 'linear-gradient(to right, #0D1321, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 80,
          background: 'linear-gradient(to left, #0D1321, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 25,
        }}
        style={{
          display: 'flex',
          gap: 32,
          width: 'max-content',
          whiteSpace: 'nowrap',
        }}
      >
        {[...trustItems, ...trustItems].map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '6px 16px',
              background: '#1D2D44/60',
              border: '1px solid rgba(116, 140, 171, 0.18)',
              borderRadius: 30,
            }}
          >
            <span style={{ fontSize: 14 }}>{item.icon}</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.08em',
                color: '#F0EBD8',
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
