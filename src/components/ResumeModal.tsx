import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ResumeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('resume-modal-active')
    } else {
      document.body.classList.remove('resume-modal-active')
    }
    return () => {
      document.body.classList.remove('resume-modal-active')
    }
  }, [isOpen])

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
        data-lenis-prevent
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          background: 'rgba(0,0,0,0.80)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          data-lenis-prevent
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border-bright)',
            borderRadius: 'var(--card-radius)',
            maxWidth: 900,
            width: '100%',
            maxHeight: '92vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            cursor: 'auto',
          }}
        >
          {/* Modal Header Bar (Hidden during Print) */}
          <div
            className="no-print"
            style={{
              padding: '18px 24px',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--surface)',
              cursor: 'auto',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.15em',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                }}
              >
                ATS-Optimized Executive Resume
              </span>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: 20,
                  background: 'rgba(var(--accent-rgb),0.15)',
                  border: '1px solid rgba(var(--accent-rgb),0.3)',
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                OFFICIAL 2-PAGE PDF READY
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button
                onClick={handlePrint}
                data-cursor-hover
                style={{
                  background: 'var(--btn-primary-bg)',
                  border: 'none',
                  color: 'var(--btn-primary-fg)',
                  padding: '10px 22px',
                  borderRadius: 'var(--btn-radius)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                  <path d="M4 10v3h6v-3M3 6h8v4H3V6zM3 4h8V1H3v3z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download PDF / Print Resume
              </button>

              <button
                onClick={onClose}
                data-cursor-hover
                style={{
                  background: 'var(--card-surface)',
                  border: '1px solid var(--border-bright)',
                  color: 'var(--fg)',
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  cursor: 'pointer',
                  fontSize: 16,
                }}
              >
                ✕
              </button>
            </div>
          </div>

          {/* ATS Printable Resume Container */}
          <div
            id="ats-resume-document"
            data-lenis-prevent
            style={{
              padding: '36px 44px',
              overflowY: 'auto',
              color: 'var(--fg)',
              fontFamily: 'var(--font-body)',
              fontSize: 12.5,
              lineHeight: 1.6,
              userSelect: 'text',
              background: 'var(--card-bg)',
            }}
          >
            {/* Header / Personal Information */}
            <div style={{ borderBottom: '2px solid var(--accent)', paddingBottom: 16, marginBottom: 20 }}>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 28,
                  fontWeight: 800,
                  color: 'var(--fg)',
                  margin: '0 0 4px',
                  letterSpacing: '-0.02em',
                }}
              >
                MUHAMMAD AHSAN KHAN
              </h1>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', fontWeight: 700, marginBottom: 10 }}>
                Full Stack Developer | Founder, Next Revolution Tech | Enterprise Software, ERP, AI & Agentic AI Solutions
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', fontSize: 10.5, fontFamily: 'var(--font-mono)', color: 'rgba(var(--fg-rgb),0.75)' }}>
                <span>📍 Pakistan</span>
                <span>📞 +92 344 2013217</span>
                <span>📧 ahsan.khan@nextrevolutiontech.tech</span>
                <span>✉ ahsankh079@gmail.com</span>
                <span>🌐 <a href="https://www.nextrevolutiontech.tech" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>nextrevolutiontech.tech</a></span>
                <span>💼 <a href="https://www.linkedin.com/in/muhammad-ahsan-khan-61a51032a" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>LinkedIn</a></span>
                <span>💻 <a href="https://github.com/MuhammadAhsankhan786" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>GitHub Personal</a></span>
                <span>💻 <a href="https://github.com/nextrevolutiontech-maker" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>GitHub Org</a></span>
              </div>
            </div>

            {/* Professional Summary */}
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: 6, borderBottom: '1px solid var(--border)', paddingBottom: 3, fontWeight: 700 }}>
                PROFESSIONAL SUMMARY
              </h2>
              <p style={{ margin: 0, color: 'rgba(var(--fg-rgb),0.85)', fontSize: 12 }}>
                Results-driven Full Stack Developer with hands-on experience designing, developing, deploying, and maintaining enterprise-grade web applications, ERP systems, SaaS platforms, AI-powered business solutions, and custom software. Strong expertise in React.js, Next.js, TypeScript, Node.js, NestJS, Express.js, PostgreSQL, Prisma ORM, MongoDB, and REST APIs. Founder of Next Revolution Tech. Experienced across full SDLC including system architecture, database modeling, REST APIs, authentication, RBAC, deployment, and support. Actively expanding expertise in Agentic AI systems, AI Automation, and LLM-powered applications. Building a Personal Workspace AI Agent focused on intelligent task execution and workflow orchestration.
              </p>
            </div>

            {/* Professional Experience */}
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: 10, borderBottom: '1px solid var(--border)', paddingBottom: 3, fontWeight: 700 }}>
                PROFESSIONAL EXPERIENCE
              </h2>

              {/* NRT */}
              <div style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--fg)', fontSize: 13 }}>
                  <span>Founder & Full Stack Developer — Next Revolution Tech</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--accent)' }}>June 2025 – Present</span>
                </div>
                <ul style={{ margin: '6px 0 0', paddingLeft: 16, color: 'rgba(var(--fg-rgb),0.8)', fontSize: 11.5 }}>
                  <li>Founded and actively leading Next Revolution Tech, delivering enterprise software, ERP systems, SaaS platforms, and AI automation.</li>
                  <li>Designed, developed, and deployed 10+ production-ready web applications across ERP, Healthcare, Education, Retail, Event Management, AI Operations, and eCommerce.</li>
                  <li>Built scalable frontend architectures using React.js, Next.js, TypeScript, HTML5, CSS3, and Tailwind CSS.</li>
                  <li>Engineered secure backend services using Node.js, NestJS, Express.js, PostgreSQL, Prisma ORM, and MongoDB with REST APIs, JWT, and RBAC.</li>
                  <li>Developed enterprise ERP modules including Inventory, Sales, Purchasing, Customer Management, BI Dashboards, and Parcel Courier tracking.</li>
                  <li>Built AI-powered enterprise management platforms with workflow automation, analytics dashboards, and business intelligence.</li>
                </ul>
              </div>

              {/* Codezyra */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--fg)', fontSize: 13 }}>
                  <span>Full Stack Developer — Codezyra</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--accent)' }}>January 2024 – May 2025</span>
                </div>
                <ul style={{ margin: '6px 0 0', paddingLeft: 16, color: 'rgba(var(--fg-rgb),0.8)', fontSize: 11.5 }}>
                  <li>Developed responsive web applications using React.js, Next.js, and modern TypeScript.</li>
                  <li>Built reusable UI components and scalable frontend architecture with integrated REST APIs.</li>
                  <li>Improved overall application performance, page loading speeds, and responsive cross-device layouts.</li>
                </ul>
              </div>
            </div>

            {/* Selected Projects */}
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: 10, borderBottom: '1px solid var(--border)', paddingBottom: 3, fontWeight: 700 }}>
                SELECTED PRODUCTION PROJECTS (11 SHIPPED)
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
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
                  <div key={i} style={{ background: 'var(--surface)', padding: 8, borderRadius: 6, border: '1px solid var(--border)' }}>
                    <div style={{ fontWeight: 700, color: 'var(--fg)', fontSize: 11 }}>{p.name}</div>
                    <div style={{ fontSize: 10, color: 'rgba(var(--fg-rgb),0.7)', margin: '1px 0' }}>{p.tech}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'var(--accent)' }}>{p.link}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Client Reviews */}
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.12em', marginBottom: 10, borderBottom: '1px solid var(--border)', paddingBottom: 3, fontWeight: 700 }}>
                VERIFIED CLIENT REVIEWS & 5.0 ★ TESTIMONIALS
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {[
                  { name: 'Aakash 🇮🇳 (India)', review: 'Muhammad Ahsan did an outstanding job on this project! Delivered exceptional results beyond requirements. Highly recommended!', rating: '5.0 ★' },
                  { name: 'Serunjogi 🇺🇬 (Uganda)', review: 'He is the best freelancer I have worked with, very calm, understanding, innovative, and professional with high integrity.', rating: '5.0 ★' },
                  { name: 'Veer 🇮🇳 (India)', review: 'The Cashfree payment gateway integration was completed perfectly on time and within budget. Muhammad Ahsan has great technical expertise.', rating: '5.0 ★' },
                  { name: 'Ahmed 🇹🇳 (Tunisia)', review: 'Firebase Setup, TypeScript Cloud Functions & Coordinates Localization. Really satisfied by the high quality of work!', rating: '5.0 ★' },
                  { name: 'Anas 🇵🇰 (Pakistan)', review: 'This time he proves himself very well. Thank you for your efforts. Will work more in future.', rating: '5.0 ★' },
                  { name: 'Abdelrahman 🇪🇬 (Egypt)', review: 'Good developer. NestJS & React Docs Portal built cleanly. I hope all the best for you!', rating: '5.0 ★' },
                ].map((rev, i) => (
                  <div key={i} style={{ background: 'var(--surface)', padding: 8, borderRadius: 6, border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--fg)', fontSize: 10.5 }}>
                      <span>{rev.name}</span>
                      <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{rev.rating}</span>
                    </div>
                    <div style={{ fontSize: 10, color: 'rgba(var(--fg-rgb),0.75)', fontStyle: 'italic', marginTop: 2 }}>"{rev.review}"</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills & Education */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: 6, borderBottom: '1px solid var(--border)', paddingBottom: 3, fontWeight: 700 }}>
                  TECHNICAL SKILLS
                </h2>
                <div style={{ fontSize: 10.5, color: 'rgba(var(--fg-rgb),0.85)', lineHeight: 1.6 }}>
                  <strong>Frontend:</strong> React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS<br />
                  <strong>Backend:</strong> Node.js, NestJS, Express.js, REST APIs, JWT, RBAC Auth<br />
                  <strong>Databases:</strong> PostgreSQL, MongoDB, Prisma ORM, Firebase<br />
                  <strong>Emerging:</strong> Agentic AI, AI Automation, LLMs, Python, RAG Memory<br />
                  <strong>Tools:</strong> Git, GitHub, Postman, Vercel, Netlify, Figma, VS Code
                </div>
              </div>

              <div>
                <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: 6, borderBottom: '1px solid var(--border)', paddingBottom: 3, fontWeight: 700 }}>
                  EDUCATION & CERTIFICATIONS
                </h2>
                <div style={{ fontSize: 10.5, color: 'rgba(var(--fg-rgb),0.85)', lineHeight: 1.6 }}>
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
