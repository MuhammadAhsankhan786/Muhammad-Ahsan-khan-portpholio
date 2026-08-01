import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const links = [
  { name: 'About', id: 'about' },
  { name: 'AI Focus', id: 'ai-focus' },
  { name: 'Services', id: 'services' },
  { name: 'Certs', id: 'certifications' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'GitHub', id: 'github' },
  { name: 'Contact', id: 'contact' },
]

export default function Nav() {
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
        className="fixed top-0 left-0 right-0 z-[9000] flex items-center justify-between px-4 md:px-8 py-4"
      >
        {/* Background blur layer */}
        <motion.div
          style={{
            opacity: borderOpacity,
            position: 'absolute',
            inset: 0,
            backdropFilter: 'blur(20px)',
            background:
              'linear-gradient(to bottom, rgba(4,4,8,0.95) 0%, rgba(4,4,8,0.4) 100%)',
            borderBottom: '1px solid rgba(21,21,42,0.8)',
          }}
        />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3 pr-4 md:pr-6 md:border-r md:border-[rgba(21,21,42,0.9)]">
          <div
            style={{
              width: 26,
              height: 26,
              border: '1px solid rgba(124,111,247,0.6)',
              display: 'grid',
              placeItems: 'center',
              transform: 'rotate(45deg)',
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                background: '#7c6ff7',
                transform: 'rotate(-45deg)',
              }}
            />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '0.15em',
            }}
          >
            MAK
          </span>
        </div>

        {/* Desktop Nav links */}
        <div className="relative z-10 hidden md:flex items-center gap-4 px-4">
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
                color:
                  activeSection === link.id
                    ? '#a78bfa'
                    : 'rgba(220,220,238,0.5)',
                transition: 'color 0.3s ease',
                padding: '4px 2px',
                position: 'relative',
              }}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="nav-active"
                  style={{
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: '#a78bfa',
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Desktop Status badge */}
        <div
          className="relative z-10 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(74,222,128,0.2)] bg-[rgba(74,222,128,0.05)]"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: '#4ade80',
            letterSpacing: '0.08em',
            whiteSpace: 'nowrap',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              background: '#4ade80',
              borderRadius: '50%',
              display: 'inline-block',
              animation: 'pulse-glow 2s ease-in-out infinite',
              boxShadow: '0 0 8px #4ade80',
            }}
          />
          AVAILABLE FOR FULL-TIME • REMOTE
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative z-10 flex md:hidden p-2 text-[#a78bfa] focus:outline-none"
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
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[8999] bg-[#040408]/95 backdrop-blur-xl flex flex-col justify-center px-8 py-20 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left font-mono text-xl uppercase tracking-widest text-white/80 hover:text-[#a78bfa] py-2 border-b border-white/5"
                >
                  {link.name}
                </button>
              ))}

              <div className="mt-6 pt-4 flex items-center gap-2 font-mono text-xs text-[#4ade80]">
                <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                AVAILABLE FOR FULL-TIME • REMOTE
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
