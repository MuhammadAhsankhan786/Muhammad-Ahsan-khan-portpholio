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
  { name: 'Reviews', id: 'reviews' },
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
              'linear-gradient(to bottom, rgba(13,19,33,0.95) 0%, rgba(13,19,33,0.5) 100%)',
            borderBottom: '1px solid rgba(116,140,171,0.12)',
          }}
        />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3 pr-4 md:pr-6 md:border-r md:border-[rgba(116,140,171,0.15)]">
          <div
            style={{
              width: 26,
              height: 26,
              border: '1px solid rgba(116,140,171,0.5)',
              display: 'grid',
              placeItems: 'center',
              transform: 'rotate(45deg)',
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
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
                    ? '#748CAB'
                    : 'rgba(240,235,216,0.6)',
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
                    background: '#748CAB',
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Desktop Status badge */}
        <div
          className="relative z-10 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(116,140,171,0.25)] bg-[rgba(29,45,68,0.4)]"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: '#F0EBD8',
            letterSpacing: '0.08em',
            whiteSpace: 'nowrap',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              background: '#748CAB',
              borderRadius: '50%',
              display: 'inline-block',
            }}
          />
          AVAILABLE FOR FULL-TIME • REMOTE
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative z-10 flex md:hidden p-2 text-[#748CAB] focus:outline-none"
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
            className="fixed inset-0 z-[8999] bg-[#0D1321]/95 backdrop-blur-xl flex flex-col justify-center px-8 py-20 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left font-mono text-xl uppercase tracking-widest text-[#F0EBD8]/80 hover:text-[#748CAB] py-2 border-b border-white/5"
                >
                  {link.name}
                </button>
              ))}

              <div className="mt-6 pt-4 flex items-center gap-2 font-mono text-xs text-[#F0EBD8]">
                <span className="w-2 h-2 rounded-full bg-[#748CAB]" />
                AVAILABLE FOR FULL-TIME • REMOTE
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
