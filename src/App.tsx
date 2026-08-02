import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import AiFocusSection from './components/AiFocusSection'
import Services from './components/Services'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import GitHubShowcase from './components/GitHubShowcase'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import ProjectModal, { ProjectDetail } from './components/ProjectModal'
import ResumeModal from './components/ResumeModal'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null)

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
        background: 'var(--color-background)',
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

      {/* Header Navigation */}
      <Nav />

      {/* Hero Section */}
      <Hero onOpenResume={() => setIsResumeOpen(true)} />

      {/* About & Credentials Section */}
      <About />

      {/* Agentic AI & Current Focus Section */}
      <AiFocusSection />

      {/* Enterprise Solutions & Services Section */}
      <Services />

      {/* Verified Certifications Section */}
      <Certifications />

      {/* Work Experience Section */}
      <Experience />

      {/* Filterable Projects Section */}
      <Projects onSelectProject={(project) => setSelectedProject(project)} />

      {/* Orbital Technical Skills Section */}
      <Skills />

      {/* GitHub Showcase & Open Source Section */}
      <GitHubShowcase />

      {/* Verified Client Testimonials Section */}
      <Testimonials />

      {/* Direct Contact Section */}
      <Contact />

      {/* Project Case Study Drawer / Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Downloadable ATS Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  )
}
