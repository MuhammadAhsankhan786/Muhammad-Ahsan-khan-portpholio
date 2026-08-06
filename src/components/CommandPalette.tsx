import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export type CommandAction = {
  id: string
  label: string
  category: string
  icon: string
  action: () => void
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenAskAhsan,
  onOpenResume,
  onSetViewMode,
}: {
  isOpen: boolean
  onClose: () => void
  onOpenAskAhsan: () => void
  onOpenResume: () => void
  onSetViewMode: (mode: 'standard' | 'recruiter' | 'cto') => void
}) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) onClose()
        else setQuery('')
      }
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const actions: CommandAction[] = [
    {
      id: 'projects',
      label: 'Go to Featured Projects',
      category: 'Navigation',
      icon: '🚀',
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    },
    {
      id: 'architecture',
      label: 'Explore Interactive Architecture Explorer',
      category: 'Navigation',
      icon: '⚙️',
      action: () => {
        document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    },
    {
      id: 'recruiter-mode',
      label: 'Switch to Recruiter View (5-Min Summary)',
      category: 'View Mode',
      icon: '💼',
      action: () => {
        onSetViewMode('recruiter')
        onClose()
      },
    },
    {
      id: 'cto-mode',
      label: 'Switch to CTO / Tech Deep Dive View',
      category: 'View Mode',
      icon: '🛠️',
      action: () => {
        onSetViewMode('cto')
        onClose()
      },
    },
    {
      id: 'ask-ahsan',
      label: 'Ask Ahsan AI Assistant',
      category: 'AI Assistant',
      icon: '🤖',
      action: () => {
        onClose()
        onOpenAskAhsan()
      },
    },
    {
      id: 'resume',
      label: 'Download ATS Approved Resume',
      category: 'Documents',
      icon: '📄',
      action: () => {
        onClose()
        onOpenResume()
      },
    },
    {
      id: 'contact',
      label: 'Get In Touch / Book Consultation',
      category: 'Contact',
      icon: '💬',
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        onClose()
      },
    },
    {
      id: 'github',
      label: 'Open GitHub Profile (@MuhammadAhsankhan786)',
      category: 'External Links',
      icon: '💻',
      action: () => {
        window.open('https://github.com/MuhammadAhsankhan786', '_blank')
        onClose()
      },
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn Profile',
      category: 'External Links',
      icon: '🔗',
      action: () => {
        window.open('https://www.linkedin.com/in/muhammad-ahsan-khan-61a51032a', '_blank')
        onClose()
      },
    },
  ]

  const filtered = actions.filter(
    (a) =>
      a.label.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999999,
          background: 'rgba(4,4,8,0.85)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: '10vh',
          paddingLeft: 20,
          paddingRight: 20,
        }}
        onWheel={(e) => e.stopPropagation()}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -20 }}
          onClick={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
          style={{
            background: '#1D2D44',
            border: '1px solid rgba(116,140,171,0.3)',
            borderRadius: 16,
            maxWidth: 640,
            width: '100%',
            overflow: 'hidden',
            boxShadow: '0 30px 90px rgba(0,0,0,0.9)',
          }}
        >
          {/* Input Header */}
          <div
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid rgba(116,140,171,0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: '#0D1321',
            }}
          >
            <span style={{ fontSize: 18 }}>🔍</span>
            <input
              type="text"
              autoFocus
              placeholder="Type a command or search section (e.g. Projects, Resume, AI)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#F0EBD8',
                fontFamily: 'var(--font-mono)',
                fontSize: 14,
                width: '100%',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                color: '#748CAB',
                background: '#1D2D44',
                padding: '4px 8px',
                borderRadius: 4,
              }}
            >
              ESC
            </span>
          </div>

          {/* Results List */}
          <div
            data-lenis-prevent
            style={{ maxHeight: 380, overflowY: 'auto', overscrollBehavior: 'contain', padding: 12 }}
          >
            {filtered.length === 0 ? (
              <div style={{ padding: 24, textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#748CAB' }}>
                No commands matching "{query}"
              </div>
            ) : (
              filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={item.action}
                  data-cursor-hover
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: 8,
                    cursor: 'pointer',
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#0D1321')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 18 }}>{item.icon}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: '#F0EBD8', fontWeight: 500 }}>
                      {item.label}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      color: '#748CAB',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
