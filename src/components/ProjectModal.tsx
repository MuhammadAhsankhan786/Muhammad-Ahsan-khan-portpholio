import { useState } from 'react'
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
  const [activeTab, setActiveTab] = useState<'overview' | 'solution' | 'metrics' | 'stack'>('overview')

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
          background: 'rgba(0,0,0,0.75)',
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
            background: 'var(--card-bg)',
            border: '1px solid var(--border-bright)',
            borderRadius: 'var(--card-radius)',
            maxWidth: 920,
            width: '100%',
            maxHeight: '88vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              padding: '24px 32px',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--surface)',
              flexShrink: 0,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: 'var(--label-tracking)',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
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
                  color: 'var(--fg)',
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
                background: 'var(--card-surface)',
                border: '1px solid var(--border-bright)',
                color: 'var(--fg)',
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
              scrollbarColor: 'var(--sb-thumb) var(--sb-bg)',
            }}
          >
            {/* Real Project Screenshot Banner */}
            {project.image && (
              <div
                style={{
                  borderRadius: 10,
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  maxHeight: 320,
                  background: 'var(--surface)',
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
                color: 'rgba(var(--fg-rgb), 0.85)',
                fontStyle: 'italic',
                borderLeft: '3px solid var(--accent)',
                paddingLeft: 16,
              }}
            >
              "{project.tagline}"
            </div>

            {/* Tabs */}
            <div
              style={{
                display: 'flex',
                gap: 8,
                borderBottom: '1px solid var(--border)',
                paddingBottom: 12,
              }}
            >
              {[
                { id: 'overview', label: '01. Overview & Problem' },
                { id: 'solution', label: '02. Solution & Architecture' },
                { id: 'metrics', label: '03. Impact & Metrics' },
                { id: 'stack', label: '04. Tech Stack' },
              ].map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 6,
                      background: isActive ? 'var(--accent)' : 'var(--surface-2)',
                      color: isActive ? 'var(--accent-fg)' : 'var(--fg-muted)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      fontWeight: isActive ? 700 : 500,
                      border: '1px solid var(--border)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Tab Contents */}
            {activeTab === 'overview' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                    01. Project Overview
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'rgba(var(--fg-rgb), 0.75)', margin: 0 }}>
                    {project.overview}
                  </p>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                    02. Industry Problem
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'rgba(var(--fg-rgb), 0.75)', margin: 0 }}>
                    {project.problem}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'solution' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                    01. Enterprise Solution
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'rgba(var(--fg-rgb), 0.75)', margin: 0 }}>
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                    02. System Architecture Design
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'rgba(var(--fg-rgb), 0.75)', margin: 0 }}>
                    {project.architecture}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'metrics' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                  Quantified Production Metrics & Results
                </h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 16,
                    background: 'var(--surface)',
                    padding: 20,
                    borderRadius: 12,
                    border: '1px solid var(--border)',
                  }}
                >
                  {project.metrics.map((m, i) => (
                    <div key={i}>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 28,
                          fontWeight: 800,
                          color: 'var(--accent)',
                        }}
                      >
                        {m.v}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 11,
                          color: 'rgba(var(--fg-rgb), 0.6)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {m.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'stack' && (
              <div>
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>
                  Tech Stack & Engineering Tooling
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
                        background: 'var(--tag-bg)',
                        border: '1px solid var(--tag-border)',
                        color: 'var(--tag-fg)',
                        borderRadius: 4,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                paddingTop: 16,
                borderTop: '1px solid var(--border)',
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
                    background: 'var(--btn-primary-bg)',
                    color: 'var(--btn-primary-fg)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    borderRadius: 'var(--btn-radius)',
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
                    background: 'var(--btn-secondary-bg)',
                    border: '1px solid var(--btn-border)',
                    color: 'var(--btn-secondary-fg)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    borderRadius: 'var(--btn-radius)',
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
