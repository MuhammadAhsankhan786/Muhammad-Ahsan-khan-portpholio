import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const aiPillars = [
  {
    title: 'Agentic AI Systems',
    desc: 'Autonomous multi-agent architectures capable of goal decomposition, tool usage, planning, and task execution without continuous human supervision.',
    icon: '🤖',
  },
  {
    title: 'Personal Workspace AI Agent',
    desc: 'Active R&D building an intelligent workspace assistant for productivity, context memory management, natural language document interaction, and enterprise automation.',
    icon: '🧠',
  },
  {
    title: 'Workflow Orchestration',
    desc: 'Connecting enterprise APIs, ERP databases, and LLMs into automated multi-step state machine pipelines.',
    icon: '⚡',
  },
  {
    title: 'Memory & Context Systems',
    desc: 'Long-term vector database memory, RAG semantic search, and prompt optimization tailored for enterprise data security.',
    icon: '💾',
  },
]

export default function AiFocusSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      id="ai-focus"
      ref={sectionRef}
      className="relative px-6 md:px-20 py-20 md:py-36 bg-[var(--color-surface)] overflow-hidden"
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '-10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 60 }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#38bdf8',
          }}
        >
          02 — Agentic AI & AI Automation Focus
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(21,21,42,1)' }} />
      </motion.div>

      {/* Main Headline */}
      <div style={{ maxWidth: 800, marginBottom: 60 }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 3.5vw, 56px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'var(--color-foreground)',
            margin: '0 0 20px',
          }}
        >
          Building Intelligent
          <br />
          <em style={{ fontStyle: 'italic', color: '#38bdf8' }}>
            Agentic AI & LLM Systems.
          </em>
        </motion.h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            lineHeight: 1.7,
            color: 'rgba(220,220,238,0.6)',
            margin: 0,
          }}
        >
          Leveraging modern LLM frameworks, vector memory management, and autonomous workflow agents to transform enterprise software from reactive platforms into intelligent, self-executing business engines.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {aiPillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: '#070712',
              border: '1px solid rgba(56,189,248,0.15)',
              borderRadius: 14,
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'border-color 0.3s ease, transform 0.3s ease',
            }}
            whileHover={{ borderColor: 'rgba(56,189,248,0.4)', y: -4 }}
          >
            <div>
              <div style={{ fontSize: 28, marginBottom: 16 }}>{pillar.icon}</div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: 10,
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: 'rgba(220,220,238,0.55)',
                  margin: 0,
                }}
              >
                {pillar.description}
              </p>
            </div>
            <div
              style={{
                marginTop: 20,
                paddingTop: 16,
                borderTop: '1px solid rgba(21,21,42,1)',
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                color: '#38bdf8',
                letterSpacing: '0.08em',
              }}
            >
              {pillar.tech}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Spotlight: Personal Workspace AI Agent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 30 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#070712] border border-[rgba(56,189,248,0.3)] rounded-2xl p-6 md:p-12 shadow-[0_20px_60px_rgba(56,189,248,0.08)]"
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.2em',
              color: '#38bdf8',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            ACTIVE R&D SPOTLIGHT
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 28,
              fontWeight: 800,
              color: '#fff',
              marginBottom: 16,
            }}
          >
            Personal Workspace AI Agent
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              lineHeight: 1.7,
              color: 'rgba(220,220,238,0.7)',
              marginBottom: 24,
            }}
          >
            An autonomous assistant for productivity engineering. Built to understand natural language intent, interact with enterprise documents via vector RAG, manage persistent memory, and execute automated multi-step workflows across backends.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['LLMs', 'Vector Memory', 'Tool Execution', 'State Machines', 'TypeScript & Python'].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  padding: '4px 10px',
                  background: 'rgba(124,111,247,0.2)',
                  border: '1px solid rgba(124,111,247,0.4)',
                  color: '#a78bfa',
                  borderRadius: 4,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Visual Architecture Diagram */}
        <div
          style={{
            background: '#070714',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12,
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(90,90,130,0.7)', textTransform: 'uppercase', borderBottom: '1px solid rgba(21,21,42,1)', paddingBottom: 8 }}>
            Agent Execution Pipeline
          </div>
          {[
            { step: '01. User Natural Language Intent', color: '#7c6ff7' },
            { step: '02. LLM Reasoning & Task Decomposition', color: '#38bdf8' },
            { step: '03. Vector Memory Retrieval & RAG Context', color: '#a78bfa' },
            { step: '04. Autonomous Tool Execution & ERP Sync', color: '#4ade80' },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '8px 12px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: 6,
                borderLeft: `3px solid ${item.color}`,
                fontSize: 12,
                fontFamily: 'var(--font-mono)',
                color: '#fff',
              }}
            >
              {item.step}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
