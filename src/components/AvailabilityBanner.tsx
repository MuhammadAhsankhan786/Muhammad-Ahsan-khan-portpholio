import { motion } from 'framer-motion'

export default function AvailabilityBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1D2D44]/90 border border-[#748CAB]/30 backdrop-blur-md"
      style={{
        boxShadow: '0 4px 20px rgba(116, 140, 171, 0.15)',
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
          color: '#F0EBD8',
          fontWeight: 600,
          textTransform: 'uppercase',
        }}
      >
        Available for <span className="text-[#748CAB]">Senior Full Stack Roles</span> • <span className="text-[#748CAB]">Consulting</span> • <span className="text-[#748CAB]">Enterprise ERP & AI</span>
      </span>
    </motion.div>
  )
}
