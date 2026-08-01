import { motion, AnimatePresence } from 'framer-motion'

export default function ResumeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

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
          zIndex: 99999,
          background: 'rgba(4,4,8,0.85)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: '#0d0d1a',
            border: '1px solid rgba(124,111,247,0.3)',
            borderRadius: 16,
            maxWidth: 860,
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 30px 90px rgba(0,0,0,0.8), 0 0 40px rgba(124,111,247,0.15)',
          }}
        >
          {/* Top Bar Header */}
          <div
            style={{
              padding: '20px 28px',
              borderBottom: '1px solid rgba(21,21,42,1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#070712',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.15em',
                  color: '#a78bfa',
                  textTransform: 'uppercase',
                }}
              >
                ATS-Optimized Executive Resume
              </span>
              <span
                style={{
                  padding: '2px 8px',
                  borderRadius: 4,
                  background: 'rgba(74,222,128,0.15)',
                  color: '#4ade80',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  fontWeight: 600,
                }}
              >
                VERIFIED 2026
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button
                onClick={handlePrint}
                data-cursor-hover
                style={{
                  background: 'linear-gradient(135deg, #7c6ff7, #a78bfa)',
                  border: 'none',
                  color: '#fff',
                  padding: '8px 20px',
                  borderRadius: 6,
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M4 10v3h6v-3M3 6h8v4H3V6zM3 4h8V1H3v3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Print / Save PDF
              </button>

              <button
                onClick={onClose}
                data-cursor-hover
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Printable Resume Content Container */}
          <div
            id="printable-resume"
            style={{
              padding: 40,
              overflowY: 'auto',
              color: '#dcdcee',
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              lineHeight: 1.6,
            }}
          >
            {/* Header */}
            <div style={{ borderBottom: '2px solid rgba(124,111,247,0.4)', paddingBottom: 20, marginBottom: 24 }}>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 32,
                  fontWeight: 800,
                  color: '#fff',
                  margin: '0 0 6px',
                  letterSpacing: '-0.02em',
                }}
              >
                MUHAMMAD AHSAN KHAN
              </h1>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: '#a78bfa', fontWeight: 600, marginBottom: 12 }}>
                Full Stack Developer | Founder, Next Revolution Tech | Enterprise Software, ERP, AI & Agentic AI Solutions
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 24px', fontSize: 11, fontFamily: 'var(--font-mono)', color: 'rgba(220,220,238,0.7)' }}>
                <span>📍 Pakistan</span>
                <span>📞 +92 344 2013217</span>
                <span>📧 ahsan.khan@nextrevolutiontech.tech</span>
                <span>🌐 nextrevolutiontech.tech</span>
                <span>💼 linkedin.com/in/muhammad-ahsan-khan-61a51032a</span>
                <span>💻 github.com/MuhammadAhsankhan786</span>
              </div>
            </div>

            {/* Summary */}
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 13, textTransform: 'uppercase', color: '#7c6ff7', letterSpacing: '0.1em', marginBottom: 8, borderBottom: '1px solid rgba(21,21,42,1)', paddingBottom: 4 }}>
                Executive Summary
              </h2>
              <p style={{ margin: 0, color: 'rgba(220,220,238,0.85)' }}>
                Results-driven Full Stack Developer with hands-on experience designing, developing, deploying, and maintaining enterprise-grade web applications, ERP systems, SaaS platforms, AI-powered business solutions, and custom software. Founder of Next Revolution Tech. Experienced across full SDLC including system architecture, database modeling, REST APIs, authentication, RBAC, deployment, and optimization. Actively building Agentic AI systems, AI automation, and LLM-powered applications.
              </p>
            </div>

            {/* Professional Experience */}
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 13, textTransform: 'uppercase', color: '#7c6ff7', letterSpacing: '0.1em', marginBottom: 12, borderBottom: '1px solid rgba(21,21,42,1)', paddingBottom: 4 }}>
                Professional Experience
              </h2>

              {/* NRT */}
              <div style={{ marginBottom: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: '#fff', fontSize: 14 }}>
                  <span>Founder & Full Stack Developer — Next Revolution Tech</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#a78bfa' }}>June 2025 – Present</span>
                </div>
                <ul style={{ margin: '8px 0 0', paddingLeft: 18, color: 'rgba(220,220,238,0.8)' }}>
                  <li>Founded Next Revolution Tech, delivering enterprise software, ERP systems, SaaS platforms, and AI automation.</li>
                  <li>Designed, developed, and deployed 10+ production web applications across ERP, Healthcare, Education, Retail, and AI Ops.</li>
                  <li>Architected scalable frontends with React.js, Next.js, TypeScript & Tailwind CSS; built secure backends with Node.js, NestJS, Express, PostgreSQL, Prisma ORM & MongoDB.</li>
                  <li>Developed core ERP modules including Inventory, Sales, Purchasing, Customer Mgmt, Reporting, and RBAC authentication.</li>
                </ul>
              </div>

              {/* Codezyra */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: '#fff', fontSize: 14 }}>
                  <span>Full Stack Developer — Codezyra</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#a78bfa' }}>January 2024 – May 2025</span>
                </div>
                <ul style={{ margin: '8px 0 0', paddingLeft: 18, color: 'rgba(220,220,238,0.8)' }}>
                  <li>Developed responsive web applications using React.js, Next.js, and TypeScript.</li>
                  <li>Built reusable UI components and scalable frontend architectures with integrated REST APIs.</li>
                </ul>
              </div>
            </div>

            {/* Selected Projects */}
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 13, textTransform: 'uppercase', color: '#7c6ff7', letterSpacing: '0.1em', marginBottom: 12, borderBottom: '1px solid rgba(21,21,42,1)', paddingBottom: 4 }}>
                Key Production Projects (11 Shipped)
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { name: 'NRT AI Operations Manager', tech: 'Next.js, NestJS, PostgreSQL, Prisma, RBAC', link: 'nrt-ai-opr.nextrevolutiontech.tech/login' },
                  { name: 'Personal Workspace AI Agent', tech: 'Agentic AI, LLMs, Vector Memory, Python, Node.js', link: 'github.com/MuhammadAhsankhan786' },
                  { name: 'Pulse Portal Healthcare', tech: 'React, Next.js, Role-Based Access, PostgreSQL', link: 'pulse-portal.com/login' },
                  { name: 'HK Fabric ERP System', tech: 'React, COD Tracking, Parcel Courier API, Vercel', link: 'hk-fabric-powered-by-parcel-ls3eigbee.vercel.app' },
                  { name: 'WAKISSHA Mock Exam Portal', tech: 'Next.js, Student Management, Express, MongoDB', link: 'student-portal-mangment-system-dqjm.vercel.app' },
                  { name: 'Saba Jojo Salon', tech: 'Salon Booking System, Appointment Calendar, React', link: 'saba-jojo-saloon.vercel.app' },
                  { name: 'Satellite Offline Platform', tech: 'Offline PWA, IndexedDB Caching, Service Workers', link: 'satellite-offline-platform.vercel.app' },
                  { name: 'Full E-Commerce Platform', tech: 'React.js, Cart Workflows, REST API, Vercel', link: 'full-ecom-front-end.vercel.app/home' },
                  { name: 'Social Firebase Application', tech: 'React, Firebase Realtime DB, Auth, Firestore', link: 'social-firebase-app.vercel.app' },
                  { name: 'Event Management System', tech: 'React, Participant Registration, Ticketing Hub', link: 'event-management-system-ten-ashy.vercel.app' },
                  { name: 'Next Revolution Tech', tech: 'Official Company Portal, Next.js 19, Tailwind', link: 'www.nextrevolutiontech.tech' },
                ].map((p, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: 10, borderRadius: 6, border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ fontWeight: 600, color: '#fff', fontSize: 11 }}>{p.name}</div>
                    <div style={{ fontSize: 10, color: 'rgba(220,220,238,0.6)', margin: '1px 0 3px' }}>{p.tech}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#38bdf8' }}>{p.link}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills & Certifications */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', color: '#7c6ff7', letterSpacing: '0.1em', marginBottom: 8, borderBottom: '1px solid rgba(21,21,42,1)', paddingBottom: 4 }}>
                  Technical Skills
                </h2>
                <div style={{ fontSize: 11, color: 'rgba(220,220,238,0.8)', lineHeight: 1.7 }}>
                  <strong>Frontend:</strong> React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS<br />
                  <strong>Backend:</strong> Node.js, NestJS, Express.js, REST APIs, JWT, RBAC Auth<br />
                  <strong>Databases:</strong> PostgreSQL, MongoDB, Prisma ORM, Firebase<br />
                  <strong>Emerging:</strong> Agentic AI, AI Automation, LLMs, Python, RAG Memory<br />
                  <strong>Tools:</strong> Git, GitHub, Postman, Vercel, Netlify, Figma, VS Code
                </div>
              </div>

              <div>
                <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', color: '#7c6ff7', letterSpacing: '0.1em', marginBottom: 8, borderBottom: '1px solid rgba(21,21,42,1)', paddingBottom: 4 }}>
                  Education & Certifications
                </h2>
                <div style={{ fontSize: 11, color: 'rgba(220,220,238,0.8)', lineHeight: 1.7 }}>
                  🎓 <strong>ADP in Computer Science</strong> — Virtual University of Pakistan<br />
                  🏆 <strong>micro1 AI Interview Certification</strong> (Outstanding Performance 2026)<br />
                  📜 <strong>SMIT Web & Mobile App Development Certificate</strong><br />
                  📜 <strong>SMIT Hackathon Participation Certificate</strong><br />
                  📜 <strong>Web Development Certificate</strong><br />
                  🗣️ <strong>Languages:</strong> Urdu (Native), English (Professional Working)
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
