import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useTheme, type Theme } from '../context/ThemeContext'

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

const THEMES: { id: Theme; label: string; description: string; dot: string }[] = [
  { id: 'dark', label: 'Dark Obsidian', description: 'Deep Navy & Cream', dot: '#748CAB' },
  { id: '01',   label: 'Haus Teal', description: 'Teal & Dusty Rose', dot: '#DA7B93' },
  { id: '02',   label: 'GED Mint', description: 'Mint & Cream Light', dot: '#9FEDD7' },
  { id: '03',   label: 'Michelle Rose', description: 'Blush Rose Light', dot: '#DD8EA4' },
  { id: '04',   label: 'Loket Flame', description: 'Sunset Flame Light', dot: '#E43D12' },
  { id: '05',   label: 'Centralwest Sage', description: 'Sage Green & Soft Amber', dot: '#2D6A4F' },
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
  const [isThemeOpen, setIsThemeOpen] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 80], [0, 1])
  const borderOpacity = useTransform(scrollY, [0, 120], [0, 1])
  const { theme, setTheme } = useTheme()

  const currentThemeObj = THEMES.find((t) => t.id === theme) || THEMES[0]

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

  // Close theme dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (!target.closest('#theme-dropdown-container')) {
        setIsThemeOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[9000] flex items-center justify-between px-4 md:px-8 py-3.5"
      >
        {/* Background blur layer — Opaque glassmorphic background to prevent text bleed */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            background: 'rgba(var(--bg-rgb), 0.94)',
            borderBottom: '1px solid var(--nav-border)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          }}
        />

        {/* Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="relative z-10 flex items-center gap-2 cursor-pointer"
          title="Scroll to Top"
        >
          <img
            src="/favicon.svg"
            alt="MAK Logo Emblem"
            style={{
              width: 32,
              height: 32,
              borderRadius: 6,
            }}
          />
        </div>

        {/* Center controls: Theme Dropdown + View Mode Switcher */}
        <div className="relative z-10 flex items-center gap-2">
          {/* ── THEME DROPDOWN SELECTOR ── */}
          <div id="theme-dropdown-container" className="relative">
            <button
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              data-cursor-hover
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '5px 12px',
                background: 'var(--surface)',
                border: '1px solid var(--border-bright)',
                borderRadius: 20,
                color: 'var(--fg)',
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'border-color 0.2s, background 0.2s',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: currentThemeObj.dot,
                  display: 'inline-block',
                }}
              />
              <span>{currentThemeObj.label}</span>
              <span style={{ fontSize: 9, opacity: 0.6, marginLeft: 2 }}>{isThemeOpen ? '▲' : '▼'}</span>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isThemeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    left: 0,
                    zIndex: 9999,
                    width: 220,
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border-bright)',
                    borderRadius: 14,
                    padding: 6,
                    boxShadow: 'var(--card-shadow-hover)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <div
                    style={{
                      padding: '6px 10px 8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 9,
                      color: 'var(--fg-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      borderBottom: '1px solid var(--border)',
                      marginBottom: 4,
                    }}
                  >
                    🎨 Select Theme Palette
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {THEMES.map((t) => {
                      const isActive = theme === t.id
                      return (
                        <button
                          key={t.id}
                          onClick={() => {
                            setTheme(t.id)
                            setIsThemeOpen(false)
                          }}
                          style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '8px 10px',
                            borderRadius: 8,
                            background: isActive ? 'var(--surface)' : 'transparent',
                            color: isActive ? 'var(--accent)' : 'var(--fg)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: 11,
                            fontWeight: isActive ? 700 : 500,
                            border: 'none',
                            cursor: 'pointer',
                            textAlign: 'left',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span
                              style={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                background: t.dot,
                                flexShrink: 0,
                              }}
                            />
                            <div>
                              <div style={{ lineHeight: 1.2 }}>{t.label}</div>
                              <div style={{ fontSize: 9, color: 'var(--fg-muted)', fontWeight: 400, marginTop: 2 }}>
                                {t.description}
                              </div>
                            </div>
                          </div>
                          {isActive && <span style={{ color: 'var(--accent)', fontWeight: 800 }}>✓</span>}
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── VIEW MODE SWITCHER ── */}
          <div
            className="hidden sm:flex items-center gap-1 p-1 rounded-full text-[10px] font-mono"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-bright)',
            }}
          >
            <button
              onClick={() => onSetViewMode('standard')}
              style={{
                padding: '3px 9px',
                borderRadius: 20,
                background: viewMode === 'standard' ? 'var(--accent)' : 'transparent',
                color: viewMode === 'standard' ? 'var(--accent-fg)' : 'var(--fg-muted)',
                fontWeight: viewMode === 'standard' ? 700 : 400,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              Standard
            </button>
            <button
              onClick={() => onSetViewMode('recruiter')}
              style={{
                padding: '3px 9px',
                borderRadius: 20,
                background: viewMode === 'recruiter' ? 'var(--accent)' : 'transparent',
                color: viewMode === 'recruiter' ? 'var(--accent-fg)' : 'var(--fg-muted)',
                fontWeight: viewMode === 'recruiter' ? 700 : 400,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              💼 Recruiter
            </button>
            <button
              onClick={() => onSetViewMode('cto')}
              style={{
                padding: '3px 9px',
                borderRadius: 20,
                background: viewMode === 'cto' ? 'var(--accent)' : 'transparent',
                color: viewMode === 'cto' ? 'var(--accent-fg)' : 'var(--fg-muted)',
                fontWeight: viewMode === 'cto' ? 700 : 400,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              🛠️ CTO Mode
            </button>
          </div>
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
                color: activeSection === link.id ? 'var(--accent)' : 'rgba(var(--fg-rgb), 0.6)',
                transition: 'color 0.3s ease',
                padding: '4px 2px',
                position: 'relative',
              }}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Ctrl+K Command Palette Button + Hamburger */}
        <div className="relative z-10 flex items-center gap-3">
          <button
            onClick={onOpenCommandPalette}
            data-cursor-hover
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 12px',
              background: 'var(--surface)',
              border: '1px solid var(--border-bright)',
              borderRadius: 6,
              color: 'var(--fg)',
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              cursor: 'pointer',
            }}
          >
            🔍 <span className="hidden sm:inline">Search</span>
            <kbd style={{ background: 'var(--surface-2)', padding: '2px 5px', borderRadius: 4, color: 'var(--accent)', fontSize: 9 }}>
              Ctrl+K
            </kbd>
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex xl:hidden p-2 focus:outline-none"
            style={{ color: 'var(--accent)' }}
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
            className="fixed inset-0 z-[8999] backdrop-blur-xl flex flex-col justify-center px-8 py-20 xl:hidden"
            style={{ background: 'rgba(var(--bg-rgb), 0.95)' }}
          >
            <div className="flex flex-col gap-5">
              {/* Mobile Theme Switcher */}
              <div className="flex flex-col gap-2 mb-4">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  🎨 Select Theme Palette:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {THEMES.map((t) => {
                    const isActive = theme === t.id
                    return (
                      <button
                        key={t.id}
                        onClick={() => setTheme(t.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          padding: '8px 12px',
                          borderRadius: 8,
                          background: isActive ? 'var(--accent)' : 'var(--surface)',
                          color: isActive ? 'var(--accent-fg)' : 'var(--fg)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: 11,
                          fontWeight: isActive ? 700 : 400,
                          border: '1px solid var(--border-bright)',
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                      >
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: t.dot,
                            flexShrink: 0,
                          }}
                        />
                        <span>{t.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  style={{
                    textAlign: 'left',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 18,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'rgba(var(--fg-rgb), 0.8)',
                    padding: '8px 0',
                    borderBottom: '1px solid var(--border)',
                    background: 'none',
                    border: 'none',
                    borderBottomColor: 'var(--border)',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: 1,
                    cursor: 'pointer',
                  }}
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
                  style={{
                    textAlign: 'left',
                    padding: '8px 12px',
                    background: 'var(--surface)',
                    color: 'var(--fg)',
                    border: '1px solid var(--border-bright)',
                    borderRadius: 6,
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                  }}
                >
                  💼 Switch to Recruiter View
                </button>
                <button
                  onClick={() => {
                    onSetViewMode('cto')
                    setMobileMenuOpen(false)
                  }}
                  style={{
                    textAlign: 'left',
                    padding: '8px 12px',
                    background: 'var(--surface)',
                    color: 'var(--fg)',
                    border: '1px solid var(--border-bright)',
                    borderRadius: 6,
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                  }}
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
