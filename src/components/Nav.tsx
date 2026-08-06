import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const links = [
  { name: 'Projects', id: 'projects' },
  { name: 'Architecture', id: 'architecture' },
  { name: 'Process', id: 'process' },
  { name: 'Services', id: 'services' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'GitHub', id: 'github' },
  { name: 'Contact', id: 'contact' },
]

export default function Nav({
  viewMode,
  onSetViewMode,
  onOpenCommandPalette,
}: {
  viewMode: 'standard' | 'recruiter' | 'cto'
  onSetViewMode: (mode: 'standard' | 'recruiter' | 'cto') => void
  onOpenCommandPalette: () => void
}) {
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 80], [0, 1])
  const borderOpacity = useTransform(scrollY, [0, 120], [0, 1])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { threshold: 0.2 }
    )
    links.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        style={{ opacity }}
        className="fixed top-0 left-0 right-0 z-[9000] flex items-center justify-between px-4 md:px-8 py-3.5"
      >
        {/* Background blur layer */}
        <motion.div
          style={{
            opacity: borderOpacity,
            position: 'absolute',
            inset: 0,
            backdropFilter: 'blur(20px)',
            background:
              'linear-gradient(to bottom, rgba(13,19,33,0.95) 0%, rgba(13,19,33,0.7) 100%)',
            borderBottom: '1px solid rgba(116,140,171,0.12)',
          }}
        />

        {/* Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="relative z-10 flex items-center gap-3 cursor-pointer"
        >
          <div
            style={{
              width: 24,
              height: 24,
              border: '1px solid rgba(116,140,171,0.5)',
              display: 'grid',
              placeItems: 'center',
              transform: 'rotate(45deg)',
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                background: '#748CAB',
                transform: 'rotate(-45deg)',
              }}
            />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              fontWeight: 800,
              color: '#F0EBD8',
              letterSpacing: '0.15em',
            }}
          >
            MAK
          </span>
        </div>

        {/* View Mode Switcher Pills */}
        <div className="relative z-10 flex items-center gap-1 bg-[#0D1321] border border-[rgba(116,140,171,0.2)] p-1 rounded-full text-[10px] font-mono">
          <button
            onClick={() => onSetViewMode('standard')}
            style={{
              padding: '4px 10px',
              borderRadius: 20,
              background: viewMode === 'standard' ? '#748CAB' : 'transparent',
              color: viewMode === 'standard' ? '#0D1321' : '#F0EBD8',
              fontWeight: viewMode === 'standard' ? 700 : 400,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Standard
          </button>
          <button
            onClick={() => onSetViewMode('recruiter')}
            style={{
              padding: '4px 10px',
              borderRadius: 20,
              background: viewMode === 'recruiter' ? '#748CAB' : 'transparent',
              color: viewMode === 'recruiter' ? '#0D1321' : '#F0EBD8',
              fontWeight: viewMode === 'recruiter' ? 700 : 400,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            💼 Recruiter
          </button>
          <button
            onClick={() => onSetViewMode('cto')}
            style={{
              padding: '4px 10px',
              borderRadius: 20,
              background: viewMode === 'cto' ? '#748CAB' : 'transparent',
              color: viewMode === 'cto' ? '#0D1321' : '#F0EBD8',
              fontWeight: viewMode === 'cto' ? 700 : 400,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            🛠️ CTO Mode
          </button>
        </div>

        {/* Desktop Nav links */}
        <div className="relative z-10 hidden xl:flex items-center gap-4 px-2">
          {links.map((link) => (
            <button
              key={link.id}
              data-cursor-hover
              onClick={() => scrollTo(link.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                color: activeSection === link.id ? '#748CAB' : 'rgba(240,235,216,0.6)',
                transition: 'color 0.3s ease',
                padding: '4px 2px',
                position: 'relative',
              }}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Ctrl+K Command Palette Button */}
        <div className="relative z-10 flex items-center gap-3">
          <button
            onClick={onOpenCommandPalette}
            data-cursor-hover
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 12px',
              background: '#1D2D44',
              border: '1px solid rgba(116,140,171,0.25)',
              borderRadius: 6,
              color: '#F0EBD8',
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              cursor: 'pointer',
            }}
          >
            🔍 <span className="hidden sm:inline">Search</span>
            <kbd style={{ background: '#0D1321', padding: '2px 5px', borderRadius: 4, color: '#748CAB', fontSize: 9 }}>
              Ctrl+K
            </kbd>
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex xl:hidden p-2 text-[#748CAB] focus:outline-none"
            aria-label="Toggle mobile navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[8999] bg-[#0D1321]/95 backdrop-blur-xl flex flex-col justify-center px-8 py-20 xl:hidden"
          >
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left font-mono text-lg uppercase tracking-widest text-[#F0EBD8]/80 hover:text-[#748CAB] py-2 border-b border-white/5"
                >
                  {link.name}
                </button>
              ))}

              <div className="mt-4 flex flex-col gap-2 font-mono text-xs">
                <button
                  onClick={() => {
                    onSetViewMode('recruiter')
                    setMobileMenuOpen(false)
                  }}
                  className="text-left py-2 px-3 bg-[#1D2D44] text-[#F0EBD8] rounded"
                >
                  💼 Switch to Recruiter View
                </button>
                <button
                  onClick={() => {
                    onSetViewMode('cto')
                    setMobileMenuOpen(false)
                  }}
                  className="text-left py-2 px-3 bg-[#1D2D44] text-[#F0EBD8] rounded"
                >
                  🛠️ Switch to CTO Mode
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
