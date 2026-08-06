import { useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ProjectDetail } from './ProjectModal'

const categories = ['All', 'ERP', 'AI', 'Healthcare', 'Education', 'Enterprise', 'SaaS', 'eCommerce']

export const flagshipProjects: ProjectDetail[] = [
  {
    id: 'nrt-ai-ops',
    name: 'NRT AI Operations Manager',
    category: 'ERP',
    tagline: 'AI-powered Enterprise Operations & ERP Platform',
    description:
      'Comprehensive enterprise platform featuring workflow automation, inventory management, procurement, finance dashboards, analytics, authentication, RBAC, business intelligence, and enterprise reporting.',
    overview:
      'NRT AI Operations Manager is a flagship ERP platform built for scaling businesses needing multi-department automation, real-time inventory reconciliation, and intelligent BI analytics.',
    problem:
      'Traditional enterprise ERPs are rigid, slow, and expensive. Businesses struggled with fragmented supply chain metrics, manual inventory sync, and lack of automated financial forecasting.',
    solution:
      'Engineered a modern, modular ERP powered by NestJS and PostgreSQL with Prisma ORM. Integrated workflow automation, role-based access control (RBAC), and automated report generation.',
    architecture:
      'Next.js 15 App Router frontend paired with NestJS backend microservices. Utilizes PostgreSQL relational schema, Redis caching, JWT RBAC security middleware, and Vercel edge deployment.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'NestJS', 'PostgreSQL', 'Prisma ORM', 'JWT', 'Vercel'],
    metrics: [
      { v: '10+', l: 'ERP Modules' },
      { v: 'RBAC', l: 'Security Architecture' },
      { v: 'Live', l: 'Production Active' },
    ],
    accentColor: '#748CAB',
    link: 'https://nrt-ai-opr.nextrevolutiontech.tech/login',
    github: 'https://github.com/MuhammadAhsankhan786',
    year: '2025',
  },
  {
    id: 'hk-fabric-erp',
    name: 'NRT Trade & HK Fabric ERP System',
    category: 'ERP',
    tagline: 'Enterprise Order Processing & Courier Management',
    description:
      'Textile & retail ERP system with Cash-On-Delivery (COD) tracking, inventory management, customer database, parcel tracking API, and automated business metrics.',
    overview:
      'Designed to manage high-volume ecommerce and retail order fulfillment, parcel dispatching, courier API synchronization, and inventory reconciliation.',
    problem:
      'Retail parcel dispatches suffered from manual tracking entry, lost COD payouts, and stock mismatch across physical warehouses.',
    solution:
      'Integrated courier API tracking hooks, automated parcel status updates, live COD reconciliation dashboards, and barcode inventory logging.',
    architecture:
      'Next.js web app with Node.js backend services and PostgreSQL database. Automated cron jobs poll courier endpoints for parcel delivery updates.',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Courier API'],
    metrics: [
      { v: 'COD', l: 'Courier Auto-Sync' },
      { v: 'Real-time', l: 'Parcel Tracking' },
      { v: 'Live', l: 'Production Active' },
    ],
    accentColor: '#748CAB',
    link: 'https://hk-fabric-powered-by-parcel-ls3eigbee.vercel.app',
    github: 'https://github.com/nextrevolutiontech-maker',
    year: '2025',
  },
  {
    id: 'pulse-portal',
    name: 'Pulse Portal Healthcare System',
    category: 'Healthcare',
    tagline: 'Comprehensive Healthcare & Multi-Portal Management System',
    description:
      'Multi-portal healthcare ecosystem supporting Admin, Reception, Provider, and Patient portals with secure role-based access control, appointment booking, and patient records.',
    overview:
      'Pulse Portal streamlines clinic operations by providing designated portals for doctors, receptionists, admins, and patients under one unified secure cloud infrastructure.',
    problem:
      'Medical facilities relied on paper records and disconnected software, creating patient check-in bottlenecks and privacy compliance risks.',
    solution:
      'Built a multi-tenant healthcare web platform with strict RBAC permission matrices, automated schedule management, and real-time appointment status updates.',
    architecture:
      'React & Next.js frontend with Node.js API services. Database protected with encrypted data layers, role-specific JWT sessions, and responsive UI components.',
    stack: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'RBAC', 'Vercel'],
    metrics: [
      { v: '4 Portals', l: 'Role-Based Portals' },
      { v: '100%', l: 'HIPAA & RBAC Compliant' },
      { v: 'Live', l: 'Production Ready' },
    ],
    accentColor: '#748CAB',
    link: 'https://pulse-portal.com/login',
    github: 'https://github.com/MuhammadAhsankhan786',
    year: '2025',
  },
]

export const allProjectsData: ProjectDetail[] = [
  ...flagshipProjects,
  {
    id: 'workspace-ai-agent',
    name: 'Personal Workspace AI Agent',
    category: 'AI',
    tagline: 'Agentic AI Productivity & Workflow Assistant',
    description:
      'Building an Agentic AI-powered personal productivity assistant capable of intelligent task management, workflow automation, document interaction, and LLM orchestration.',
    overview:
      'An autonomous agentic assistant designed to streamline personal workflows, summarize long documents, query knowledge repositories via RAG, and execute multi-step API scripts.',
    problem:
      'Standard LLM chat interfaces lack persistent long-term memory, stateful task execution capabilities, and direct integration with local developer tools.',
    solution:
      'Designing a multi-agent orchestration architecture with Vector memory (chromadb/pgvector), tool execution loops, and natural language command parsing.',
    architecture:
      'Node.js & Python agent runtime with LLM API orchestrator. Uses vector embeddings for semantic document search, memory persistence layers, and task state machines.',
    stack: ['Agentic AI', 'LLMs', 'Python', 'TypeScript', 'Node.js', 'Vector DB', 'Prompt Eng.'],
    metrics: [
      { v: 'Agentic', l: 'Autonomous Execution' },
      { v: 'RAG', l: 'Vector Memory' },
      { v: 'Active', l: 'R&D Phase' },
    ],
    accentColor: '#748CAB',
    link: 'https://github.com/MuhammadAhsankhan786',
    github: 'https://github.com/MuhammadAhsankhan786',
    year: '2026',
  },
  {
    id: 'wakissha-exam-portal',
    name: 'WAKISSHA Mock Exam Portal',
    category: 'Education',
    tagline: 'School & Student Management Platform',
    description:
      'Educational management platform featuring School Registration, Student Management, Online Fee Payments, Timetables, Automated Report Cards, and Role-Based Access.',
    overview:
      'Serves educational institutions by digitizing student admissions, exam grade processing, timetable creation, and parent report card delivery.',
    problem:
      'Schools spent hundreds of manual hours compiling quarterly mock examination results and distributing physical grade sheets to thousands of students.',
    solution:
      'Built a centralized web portal where teachers submit scores and the system automatically compiles weighted GPAs, ranks students, and generates PDF report cards.',
    architecture:
      'Next.js & TypeScript stack with Express.js REST API and MongoDB database. Generates PDF reports dynamically server-side.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Express.js', 'MongoDB', 'REST API', 'Vercel'],
    metrics: [
      { v: 'Schools', l: 'Multi-Institutional' },
      { v: 'Automated', l: 'Grade & PDF Reports' },
      { v: 'Live', l: 'Production' },
    ],
    accentColor: '#748CAB',
    link: 'https://student-portal-mangment-system-dqjm.vercel.app',
    github: 'https://github.com/MuhammadAhsankhan786',
    year: '2024',
  },
  {
    id: 'next-revolution-tech',
    name: 'Next Revolution Tech Hub',
    category: 'Enterprise',
    tagline: 'Official Enterprise Software Startup Website',
    description:
      'Official company platform for Next Revolution Tech showcasing enterprise digital solutions, ERP products, SaaS consulting, and AI automation services.',
    overview:
      'The digital flagship for Next Revolution Tech highlighting enterprise technology offerings, startup portfolio, client case studies, and solution engineering.',
    problem:
      'Communicating enterprise software capabilities and AI automation products clearly to prospective business partners and clients.',
    solution:
      'Crafted a high-performance modern web application built on Next.js with rich micro-animations, fast page loads, and SEO optimization.',
    architecture:
      'Next.js React 19 framework deployed on Vercel Edge CDN with custom Tailwind CSS styling, responsive layout grid, and contact API integration.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'SEO'],
    metrics: [
      { v: 'Official', l: 'Company Hub' },
      { v: '100%', l: 'Responsive & Fast' },
      { v: 'Live', l: 'Global Edge' },
    ],
    accentColor: '#748CAB',
    link: 'https://www.nextrevolutiontech.tech',
    github: 'https://github.com/nextrevolutiontech-maker',
    year: '2025',
  },
  {
    id: 'satellite-offline',
    name: 'Satellite Offline Platform',
    category: 'Enterprise',
    tagline: 'Offline-Capable Enterprise Application & Data Sync Platform',
    description:
      'Offline-first business application designed for uninterrupted usage in disconnected field environments with automatic background data synchronization upon reconnection.',
    overview:
      'Enables enterprise field personnel to continue business operations, record transactions, and edit records even with zero internet connectivity.',
    problem:
      'Remote field operators lost data and encountered app crashes whenever network signals dropped in unserved geographic zones.',
    solution:
      'Implemented progressive web storage, IndexedDB local caching, and background sync reconciliation algorithms.',
    architecture:
      'Progressive Web App (PWA) built with React, Service Workers, IndexedDB, and background conflict resolution handlers.',
    stack: ['React.js', 'Service Workers', 'IndexedDB', 'PWA', 'Offline Sync', 'Vercel'],
    metrics: [
      { v: 'Offline', l: 'First Architecture' },
      { v: '0% Data Loss', l: 'Local Sync' },
      { v: 'Live', l: 'Production Active' },
    ],
    accentColor: '#748CAB',
    link: 'https://satellite-offline-platform.vercel.app',
    github: 'https://github.com/MuhammadAhsankhan786',
    year: '2024',
  },
]

function BrowserMockup({
  project,
  onOpenModal,
}: {
  project: ProjectDetail
  onOpenModal: () => void
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6])
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 30 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      onClick={onOpenModal}
      data-cursor-hover
      style={{ perspective: 900, cursor: 'pointer' }}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d',
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          border: '1px solid rgba(116,140,171,0.2)',
          background: '#1D2D44',
          width: '100%',
          aspectRatio: '16/10',
          position: 'relative',
        }}
      >
        {/* Browser Header */}
        <div
          style={{
            height: 36,
            background: '#0D1321',
            borderBottom: '1px solid rgba(116,140,171,0.15)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 14px',
            gap: 8,
          }}
        >
          {['#ff5f57', '#ffbd2e', '#28c841'].map((c) => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />
          ))}
          <div
            style={{
              flex: 1,
              margin: '0 12px',
              height: 20,
              background: 'rgba(116,140,171,0.08)',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 10,
              gap: 6,
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#748CAB', opacity: 0.9 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(240,235,216,0.5)' }}>
              {project.link.replace('https://', '')}
            </span>
          </div>
        </div>

        {/* Content Preview */}
        <div style={{ padding: 20, height: 'calc(100% - 36px)', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#748CAB' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: '#F0EBD8' }}>
              {project.name}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {project.metrics.map((m, i) => (
              <div key={i} style={{ background: '#0D1321', padding: 8, borderRadius: 6, border: '1px solid rgba(116,140,171,0.15)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, color: '#748CAB' }}>{m.v}</div>
                <div style={{ fontSize: 9, color: 'rgba(240,235,216,0.6)', fontFamily: 'var(--font-mono)' }}>{m.l}</div>
              </div>
            ))}
          </div>

          <div style={{ flex: 1, background: '#0D1321', borderRadius: 6, padding: 12, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6, border: '1px solid rgba(116,140,171,0.12)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#748CAB', fontWeight: 600 }}>
              Explore Deep Case Study →
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectPanel({
  project,
  onOpenModal,
}: {
  project: ProjectDetail
  onOpenModal: (p: ProjectDetail) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pb-16 mb-16 border-b border-[rgba(116,140,171,0.12)]"
    >
      {/* Detail Scanning Column */}
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#748CAB', marginBottom: 12, fontWeight: 600 }}>
          FLAGSHIP CASE STUDY • {project.category} ({project.year})
        </div>

        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#F0EBD8', marginBottom: 10 }}>
          {project.name}
        </h3>

        <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#748CAB', fontStyle: 'italic', marginBottom: 20 }}>
          "{project.tagline}"
        </div>

        {/* Quick Scan Structure: Problem -> Architecture -> Impact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24, background: '#1D2D44', padding: 16, borderRadius: 10, border: '1px solid rgba(116,140,171,0.15)' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#748CAB', textTransform: 'uppercase', fontWeight: 700 }}>
              Problem:
            </span>{' '}
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(240,235,216,0.85)' }}>
              {project.problem}
            </span>
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#748CAB', textTransform: 'uppercase', fontWeight: 700 }}>
              Architecture:
            </span>{' '}
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(240,235,216,0.85)' }}>
              {project.architecture}
            </span>
          </div>
        </div>

        {/* Stack tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
          {project.stack.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                padding: '4px 10px',
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

        {/* Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <button
            onClick={() => onOpenModal(project)}
            data-cursor-hover
            style={{
              padding: '10px 22px',
              background: '#748CAB',
              color: '#0D1321',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: 6,
              border: 'none',
              cursor: 'pointer',
              fontWeight: 700,
            }}
          >
            Full Case Study
          </button>

          <a
            data-cursor-hover
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '10px 18px',
              background: '#1D2D44',
              border: '1px solid rgba(116,140,171,0.25)',
              color: '#F0EBD8',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: 6,
            }}
          >
            Live Demo ↗
          </a>
        </div>
      </div>

      {/* Mockup */}
      <div>
        <BrowserMockup project={project} onOpenModal={() => onOpenModal(project)} />
      </div>
    </motion.div>
  )
}

export default function Projects({
  onSelectProject,
}: {
  onSelectProject: (project: ProjectDetail) => void
}) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? allProjectsData
      : allProjectsData.filter((p) => p.category === activeCategory)

  return (
    <section
      id="projects"
      className="relative px-6 md:px-20 py-20 md:py-32 bg-[#0D1321] overflow-hidden"
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#748CAB',
          }}
        >
          01 — Featured Flagship Case Studies
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(116,140,171,0.12)' }} />
      </motion.div>

      {/* Headline */}
      <div style={{ maxWidth: 720, marginBottom: 48 }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 3.5vw, 52px)',
            fontWeight: 800,
            color: '#F0EBD8',
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Production Systems & <br />
          <em style={{ fontStyle: 'italic', color: '#748CAB' }}>
            Enterprise Flagship Software.
          </em>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(240,235,216,0.7)', margin: 0, lineHeight: 1.6 }}>
          Explore real-world software applications engineered for scalable operations, inventory management, healthcare portals, and AI workflows.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 56 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            data-cursor-hover
            style={{
              background: activeCategory === cat ? '#748CAB' : '#1D2D44',
              border: activeCategory === cat ? 'none' : '1px solid rgba(116,140,171,0.15)',
              color: activeCategory === cat ? '#0D1321' : '#F0EBD8',
              padding: '8px 16px',
              borderRadius: 6,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: activeCategory === cat ? 700 : 400,
              transition: 'all 0.3s ease',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Panels */}
      {filteredProjects.map((p) => (
        <ProjectPanel key={p.id} project={p} onOpenModal={onSelectProject} />
      ))}
    </section>
  )
}
