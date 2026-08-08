import { motion, AnimatePresence } from 'framer-motion'

export type ProjectDetail = {
  id: string
  name: string
  tagline: string
  category: string
  description: string
  overview: string
  problem: string
  solution: string
  architecture: string
  stack: string[]
  metrics: { v: string; l: string }[]
  accentColor: string
  link: string
  github?: string
  year: string
  image?: string
}

export default function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectDetail | null
  onClose: () => void
}) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        onWheel={(e) => e.stopPropagation()}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          background: 'rgba(4,4,8,0.85)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
          style={{
            background: '#1D2D44',
            border: '1px solid rgba(116,140,171,0.25)',
            borderRadius: 20,
            maxWidth: 920,
            width: '100%',
            maxHeight: '88vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(0,0,0,0.9)',
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              padding: '24px 32px',
              borderBottom: '1px solid rgba(116,140,171,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#0D1321',
              flexShrink: 0,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#748CAB',
                  marginBottom: 4,
                }}
              >
                {project.category} • Case Study ({project.year})
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 32,
                  fontWeight: 800,
                  color: '#F0EBD8',
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                {project.name}
              </h2>
            </div>

            <button
              onClick={onClose}
              data-cursor-hover
              style={{
                background: '#1D2D44',
                border: '1px solid rgba(116,140,171,0.25)',
                color: '#F0EBD8',
                width: 36,
                height: 36,
                borderRadius: '50%',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>

          {/* Body Content */}
          <div
            data-lenis-prevent
            style={{
              padding: 32,
              flex: 1,
              minHeight: 0,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 28,
              overscrollBehavior: 'contain',
              scrollbarWidth: 'thin',
              scrollbarColor: '#748CAB #0D1321',
            }}
          >
            {/* Real Project Screenshot Banner */}
            {project.image && (
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid rgba(116,140,171,0.2)',
                  maxHeight: 320,
                  background: '#0D1321',
                }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  style={{
                    width: '100%',
                    maxHeight: 320,
                    objectFit: 'cover',
                    objectPosition: 'top left',
                  }}
                />
              </div>
            )}

            {/* Tagline */}
            <div
              style={{
                fontSize: 18,
                color: 'rgba(240,235,216,0.75)',
                fontStyle: 'italic',
                borderLeft: '3px solid #748CAB',
                paddingLeft: 16,
              }}
            >
              "{project.tagline}"
            </div>

            {/* Metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 16,
                background: '#0D1321',
                padding: 20,
                borderRadius: 12,
                border: '1px solid rgba(116,140,171,0.15)',
              }}
            >
              {project.metrics.map((m, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 28,
                      fontWeight: 800,
                      color: '#748CAB',
                    }}
                  >
                    {m.v}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      color: 'rgba(240,235,216,0.6)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {m.l}
                  </div>
                </div>
              ))}
            </div>

            {/* Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#748CAB', marginBottom: 8 }}>
                  01. Overview
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'rgba(240,235,216,0.75)', margin: 0 }}>
                  {project.overview}
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#748CAB', marginBottom: 8 }}>
                  02. Industry Problem
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'rgba(240,235,216,0.75)', margin: 0 }}>
                  {project.problem}
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#748CAB', marginBottom: 8 }}>
                  03. Enterprise Solution
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'rgba(240,235,216,0.75)', margin: 0 }}>
                  {project.solution}
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#748CAB', marginBottom: 8 }}>
                  04. System Architecture
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'rgba(240,235,216,0.75)', margin: 0 }}>
                  {project.architecture}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#748CAB', marginBottom: 12 }}>
                  Tech Stack & Tooling
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        letterSpacing: '0.08em',
                        padding: '6px 14px',
                        background: '#0D1321',
                        border: '1px solid rgba(116,140,171,0.2)',
                        color: '#F0EBD8',
                        borderRadius: 4,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                paddingTop: 16,
                borderTop: '1px solid rgba(116,140,171,0.12)',
              }}
            >
              {project.link && (
                <a
                  href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '14px 28px',
                    background: '#748CAB',
                    color: '#0D1321',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    borderRadius: 6,
                    fontWeight: 700,
                  }}
                >
                  Launch Live Demo
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github.startsWith('http') ? project.github : `https://${project.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '14px 28px',
                    background: '#0D1321',
                    border: '1px solid rgba(116,140,171,0.25)',
                    color: '#F0EBD8',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    borderRadius: 6,
                  }}
                >
                  GitHub Repository
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
