import { motion } from 'framer-motion'

export default function AvailabilityBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        padding: '6px 14px',
        borderRadius: 30,
        background: 'rgba(var(--surface-rgb), 0.9)',
        border: '1px solid var(--border-bright)',
        backdropFilter: 'blur(12px)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Live pulse dot */}
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </span>

      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.08em',
          color: 'var(--fg)',
          fontWeight: 600,
          textTransform: 'uppercase',
        }}
      >
        Available for{' '}
        <span style={{ color: 'var(--accent)' }}>Senior Full Stack Roles</span>
        {' '}•{' '}
        <span style={{ color: 'var(--accent)' }}>Consulting</span>
        {' '}•{' '}
        <span style={{ color: 'var(--accent)' }}>Enterprise ERP & AI</span>
      </span>
    </motion.div>
  )
}
