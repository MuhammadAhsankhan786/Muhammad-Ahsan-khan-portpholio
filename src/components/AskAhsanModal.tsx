import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export type QAItem = {
  q: string
  a: string
  actionLabel?: string
  actionTarget?: string
}

const presetQA: QAItem[] = [
  {
    q: 'Tell me about NRT AI Operations Manager',
    a: 'NRT AI Operations Manager is a flagship enterprise ERP platform built by Ahsan. It features multi-department workflow automation, inventory reconciliation, RBAC access control, BI reporting, and NestJS microservices backed by PostgreSQL.',
    actionLabel: 'View Case Study',
    actionTarget: 'nrt-ai-ops',
  },
  {
    q: 'Explain Ahsan\'s ERP Architecture',
    a: 'Ahsan designs ERP systems using NestJS microservices and Next.js App Router. The database layer uses PostgreSQL with Prisma ORM and Redis caching, protected by strict JWT RBAC multi-tenant role matrices.',
    actionLabel: 'Explore Architecture',
    actionTarget: 'architecture',
  },
  {
    q: 'What technologies does Ahsan specialize in?',
    a: 'Ahsan specializes in React 19, Next.js 15, TypeScript, Node.js, NestJS, PostgreSQL, Prisma ORM, MongoDB, Redis, Docker, Tailwind CSS v4, and Agentic AI LLMs with Vector Memory (RAG).',
    actionLabel: 'View Skills Section',
    actionTarget: 'skills',
  },
  {
    q: 'Is Ahsan available for Senior Software Engineering roles?',
    a: 'Yes! Ahsan is actively available for Senior Full Stack Engineer roles, Lead Architecture positions, and Enterprise Software Consulting worldwide.',
    actionLabel: 'Get In Touch',
    actionTarget: 'contact',
  },
]

export default function AskAhsanModal({
  isOpen,
  onClose,
  onOpenResume,
}: {
  isOpen: boolean
  onClose: () => void
  onOpenResume: () => void
}) {
  const [activeQA, setActiveQA] = useState<QAItem | null>(null)

  if (!isOpen) return null

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
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
        }}
        onWheel={(e) => e.stopPropagation()}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
          style={{
            background: '#1D2D44',
            border: '1px solid rgba(116,140,171,0.3)',
            borderRadius: 16,
            maxWidth: 680,
            width: '100%',
            maxHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 30px 90px rgba(0,0,0,0.9)',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '20px 24px',
              background: '#0D1321',
              borderBottom: '1px solid rgba(116,140,171,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 24 }}>🤖</span>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, color: '#F0EBD8', margin: 0 }}>
                  Ask Ahsan — Engineering Assistant
                </h3>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#748CAB' }}>
                  Instant Answers about Ahsan's Experience, Architecture & Systems
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              style={{
                background: '#1D2D44',
                border: '1px solid rgba(116,140,171,0.25)',
                color: '#F0EBD8',
                width: 32,
                height: 32,
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div
            data-lenis-prevent
            style={{
              padding: 24,
              flex: 1,
              minHeight: 0,
              overflowY: 'auto',
              overscrollBehavior: 'contain',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              scrollbarWidth: 'thin',
              scrollbarColor: '#748CAB #0D1321',
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#748CAB', textTransform: 'uppercase' }}>
              Select a Question to Query Ahsan's Knowledge Base:
            </div>

            {/* Questions Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {presetQA.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveQA(item)}
                  style={{
                    textAlign: 'left',
                    padding: '12px 16px',
                    background: activeQA?.q === item.q ? '#0D1321' : '#0B101D',
                    border: activeQA?.q === item.q ? '1px solid #748CAB' : '1px solid rgba(116,140,171,0.15)',
                    borderRadius: 8,
                    color: '#F0EBD8',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  ❓ {item.q}
                </button>
              ))}
            </div>

            {/* Answer Display */}
            {activeQA && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: '#0D1321',
                  border: '1px solid rgba(116,140,171,0.25)',
                  borderRadius: 10,
                  padding: 20,
                  borderLeft: '4px solid #748CAB',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#748CAB', textTransform: 'uppercase', marginBottom: 8 }}>
                  Ahsan's AI Response:
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#F0EBD8', lineHeight: 1.6, margin: '0 0 16px' }}>
                  {activeQA.a}
                </p>

                {activeQA.actionTarget && (
                  <button
                    onClick={() => {
                      onClose()
                      document.getElementById(activeQA.actionTarget!)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    style={{
                      background: '#748CAB',
                      color: '#0D1321',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: 6,
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    {activeQA.actionLabel} →
                  </button>
                )}
              </motion.div>
            )}

            {/* Extra Actions */}
            <div style={{ borderTop: '1px solid rgba(116,140,171,0.15)', paddingTop: 16, display: 'flex', gap: 12 }}>
              <button
                onClick={() => {
                  onClose()
                  onOpenResume()
                }}
                style={{
                  flex: 1,
                  padding: '10px',
                  background: '#0D1321',
                  border: '1px solid rgba(116,140,171,0.2)',
                  color: '#F0EBD8',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  borderRadius: 6,
                  cursor: 'pointer',
                }}
              >
                📄 Download ATS Resume
              </button>
              <button
                onClick={() => {
                  onClose()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                style={{
                  flex: 1,
                  padding: '10px',
                  background: '#748CAB',
                  border: 'none',
                  color: '#0D1321',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  fontWeight: 700,
                  borderRadius: 6,
                  cursor: 'pointer',
                }}
              >
                💬 Contact Ahsan Directly
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
