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
  const [copied, setCopied] = useState(false)

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
          background: 'rgba(0,0,0,0.75)',
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
            background: 'var(--card-bg)',
            border: '1px solid var(--border-bright)',
            borderRadius: 'var(--card-radius)',
            maxWidth: 680,
            width: '100%',
            maxHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '20px 24px',
              background: 'var(--surface)',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 24 }}>🤖</span>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, color: 'var(--fg)', margin: 0 }}>
                  Ask Ahsan — Engineering Assistant
                </h3>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)' }}>
                  Instant Answers about Ahsan's Experience, Architecture & Systems
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              style={{
                background: 'var(--card-surface)',
                border: '1px solid var(--border-bright)',
                color: 'var(--fg)',
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
              scrollbarColor: 'var(--sb-thumb) var(--sb-bg)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', textTransform: 'uppercase' }}>
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
                    background: activeQA?.q === item.q ? 'var(--surface)' : 'var(--card-surface)',
                    border: activeQA?.q === item.q ? '1px solid var(--accent)' : '1px solid var(--border)',
                    borderRadius: 8,
                    color: 'var(--fg)',
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
                  background: 'var(--surface)',
                  border: '1px solid var(--border-bright)',
                  borderRadius: 10,
                  padding: 20,
                  borderLeft: '4px solid var(--accent)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                    Ahsan's AI Response:
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(activeQA.a)
                      setCopied(true)
                      setTimeout(() => setCopied(false), 2000)
                    }}
                    style={{
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      color: 'var(--fg)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      padding: '3px 8px',
                      borderRadius: 4,
                      cursor: 'pointer',
                    }}
                  >
                    {copied ? '✓ Copied!' : '📋 Copy'}
                  </button>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg)', lineHeight: 1.6, margin: '0 0 16px' }}>
                  {activeQA.a}
                </p>

                {activeQA.actionTarget && (
                  <button
                    onClick={() => {
                      onClose()
                      document.getElementById(activeQA.actionTarget!)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    style={{
                      background: 'var(--btn-primary-bg)',
                      color: 'var(--btn-primary-fg)',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: 'var(--btn-radius)',
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
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16, display: 'flex', gap: 12 }}>
              <button
                onClick={() => {
                  onClose()
                  onOpenResume()
                }}
                style={{
                  flex: 1,
                  padding: '10px',
                  background: 'var(--btn-secondary-bg)',
                  border: '1px solid var(--btn-border)',
                  color: 'var(--btn-secondary-fg)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  borderRadius: 'var(--btn-radius)',
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
                  background: 'var(--btn-primary-bg)',
                  border: 'none',
                  color: 'var(--btn-primary-fg)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  fontWeight: 700,
                  borderRadius: 'var(--btn-radius)',
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
