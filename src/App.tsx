import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Projects from './components/Projects'
import BusinessMetrics from './components/BusinessMetrics'
import Services from './components/Services'
import ArchitectureExplorer from './components/ArchitectureExplorer'
import EngineeringProcess from './components/EngineeringProcess'
import About from './components/About'
import AiFocusSection from './components/AiFocusSection'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Skills from './components/Skills'
import GitHubShowcase from './components/GitHubShowcase'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import ProjectModal, { ProjectDetail } from './components/ProjectModal'
import ResumeModal from './components/ResumeModal'
import CommandPalette from './components/CommandPalette'
import AskAhsanModal from './components/AskAhsanModal'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)
  const [isAskAhsanOpen, setIsAskAhsanOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null)
  const [viewMode, setViewMode] = useState<'standard' | 'recruiter' | 'cto'>('standard')

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div
      style={{
        background: 'var(--bg)',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Enterprise Preloader */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* Top Scroll Indicator Bar */}
      <ScrollProgress />

      {/* Custom Mouse Follower */}
      <Cursor />

      {/* Header Navigation with Mode Switcher */}
      <Nav
        viewMode={viewMode}
        onSetViewMode={(mode) => setViewMode(mode)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAskAhsan={() => setIsAskAhsanOpen(true)}
      />

      {/* 01. Client Trust & Credential Strip */}
      <TrustStrip />

      {/* 02. Featured Flagship Case Studies (PROOF FIRST) */}
      <Projects onSelectProject={(project) => setSelectedProject(project)} />

      {/* 03. Business Metrics & Results Before Technologies */}
      <BusinessMetrics />

      {/* 04. Services & Enterprise Solutions */}
      <Services />

      {/* 05. Interactive System Architecture Explorer */}
      <ArchitectureExplorer />

      {/* 06. Enterprise Engineering Process Pipeline */}
      <EngineeringProcess />

      {/* Recruiter View / Standard Mode conditional sections */}
      {viewMode !== 'recruiter' && (
        <>
          {/* About & Personal Journey */}
          <About />

          {/* Agentic AI Focus */}
          <AiFocusSection />
        </>
      )}

      {/* Experience Timeline */}
      <Experience />

      {/* Certifications */}
      <Certifications />

      {/* Orbital Skills */}
      <Skills />

      {/* GitHub Showcase */}
      <GitHubShowcase />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Direct Contact */}
      <Contact />

      {/* Floating Ask Ahsan Widget */}
      <button
        onClick={() => setIsAskAhsanOpen(true)}
        data-cursor-hover
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 9000,
          padding: '12px 20px',
          background: 'var(--accent)',
          color: 'var(--accent-fg)',
          border: 'none',
          borderRadius: 30,
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          fontWeight: 700,
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        🤖 Ask Ahsan
      </button>

      {/* Modals */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenAskAhsan={() => setIsAskAhsanOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onSetViewMode={(mode) => setViewMode(mode)}
      />

      <AskAhsanModal
        isOpen={isAskAhsanOpen}
        onClose={() => setIsAskAhsanOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  )
}
