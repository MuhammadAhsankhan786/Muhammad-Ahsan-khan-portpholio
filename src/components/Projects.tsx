import { useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ProjectDetail } from './ProjectModal'

const categories = ['All', 'ERP', 'AI', 'Healthcare', 'Education', 'Enterprise', 'SaaS', 'eCommerce']

const projectsData: ProjectDetail[] = [
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
    id: 'workspace-ai-agent',
    name: 'Personal Workspace AI Agent',
    category: 'AI',
    tagline: 'Agentic AI Productivity & Workflow Assistant (In Progress)',
    description:
      'Building an Agentic AI-powered personal productivity assistant capable of intelligent task management, workflow automation, document interaction, conversational AI, and natural language task execution using modern LLMs.',
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
    id: 'pulse-portal',
    name: 'Pulse Portal Healthcare',
    category: 'Healthcare',
    tagline: 'Comprehensive Healthcare Management System',
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
  {
    id: 'hk-fabric-erp',
    name: 'HK Fabric ERP System',
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
    name: 'Next Revolution Tech',
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
    id: 'saba-jojo-salon',
    name: 'Saba Jojo Salon',
    category: 'SaaS',
    tagline: 'Salon Management & Appointment Booking Platform',
    description:
      'Modern salon management system featuring online appointment scheduling, service catalogs, staff availability calendars, and customer booking portals.',
    overview:
      'Built to streamline client appointment scheduling, service time-slot booking, staff allocation, and automated booking notifications.',
    problem:
      'Salon managers struggled with phone booking overlaps, client double-booking, and lack of digitized service menus.',
    solution:
      'Developed an intuitive online booking interface with real-time calendar slot reservation and service pricing.',
    architecture:
      'React frontend hosted on Vercel with responsive mobile-first Tailwind styling and automated booking state management.',
    stack: ['React.js', 'JavaScript', 'Tailwind CSS', 'Vercel', 'Booking API'],
    metrics: [
      { v: '24/7', l: 'Online Booking' },
      { v: 'Mobile', l: 'First UX' },
      { v: 'Live', l: 'Production Active' },
    ],
    accentColor: '#748CAB',
    link: 'https://saba-jojo-saloon.vercel.app',
    github: 'https://github.com/MuhammadAhsankhan786',
    year: '2024',
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
  {
    id: 'full-ecom',
    name: 'Full E-Commerce Platform',
    category: 'eCommerce',
    tagline: 'Modern High-Performance Online Shopping Experience',
    description:
      'Full-featured eCommerce web application with dynamic product catalogs, filtering, cart management, checkout workflows, and responsive UI.',
    overview:
      'A comprehensive digital storefront engineered for fast product search, category browsing, and seamless shopping cart checkout.',
    problem:
      'Legacy shopping carts were slow on mobile devices, causing high bounce rates and checkout abandonment.',
    solution:
      'Architected a lightning-fast React frontend with optimized state management and instant product filtering.',
    architecture:
      'React frontend with modular component architecture, Context API state management, and optimized asset delivery on Vercel.',
    stack: ['React.js', 'JavaScript', 'CSS3', 'REST API', 'Vercel'],
    metrics: [
      { v: '<1s', l: 'Catalog Load' },
      { v: '100%', l: 'Responsive' },
      { v: 'Live', l: 'Production Active' },
    ],
    accentColor: '#748CAB',
    link: 'https://full-ecom-front-end.vercel.app/home',
    github: 'https://github.com/MuhammadAhsankhan786',
    year: '2024',
  },
  {
    id: 'social-firebase',
    name: 'Social Firebase Application',
    category: 'SaaS',
    tagline: 'Real-Time Social Networking & Community Platform',
    description:
      'Real-time social networking application featuring user authentication, live feeds, instant messaging, media uploads, and post interactions.',
    overview:
      'A community social platform built to demonstrate real-time data sync, post feed updates, and user profile management.',
    problem:
      'Building real-time social interactions requires complex WebSocket infrastructure and scalable database listeners.',
    solution:
      'Leveraged Firebase Realtime Database and Firestore for zero-latency post sync and instant user status broadcasts.',
    architecture:
      'React frontend paired with Firebase Authentication, Firestore NoSQL DB, and Cloud Storage for media assets.',
    stack: ['React.js', 'Firebase', 'Firestore', 'Auth', 'Tailwind CSS', 'Vercel'],
    metrics: [
      { v: 'Real-Time', l: 'Database Sync' },
      { v: 'Instant', l: 'Live Feeds' },
      { v: 'Live', l: 'Production Active' },
    ],
    accentColor: '#748CAB',
    link: 'https://social-firebase-app.vercel.app',
    github: 'https://github.com/MuhammadAhsankhan786',
    year: '2024',
  },
  {
    id: 'event-management',
    name: 'Event Management System',
    category: 'SaaS',
    tagline: 'Online Event Planning & Participant Management',
    description:
      'Online platform for event organizers to create, publish, schedule, and track participant registrations and ticketing.',
    overview:
      'Simplifies conference and seminar management by providing digital registration forms, participant tracking, and schedule publication.',
    problem:
      'Manual attendee tracking spreadsheet leads to entry errors and duplicate guest passes.',
    solution:
      'Built a centralized digital dashboard with unique registration IDs, capacity limits, and instant ticket confirmations.',
    architecture:
      'React single page application integrated with backend REST API and Vercel hosting.',
    stack: ['React.js', 'JavaScript', 'HTML5/CSS3', 'REST API', 'Vercel'],
    metrics: [
      { v: 'Digital', l: 'Ticketing' },
      { v: 'Live', l: 'Registration Hub' },
      { v: 'Live', l: 'Production Active' },
    ],
    accentColor: '#748CAB',
    link: 'https://event-management-system-ten-ashy.vercel.app',
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
      style={{
        perspective: 900,
        cursor: 'pointer',
      }}
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
        {/* Browser chrome */}
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

        {/* Inner Content Display */}
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

          <div style={{ flex: 1, background: '#0D1321', borderRadius: 6, padding: 12, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, border: '1px solid rgba(116,140,171,0.12)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#748CAB', fontWeight: 600 }}>
              Click to Explore Case Study →
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectPanel({
  project,
  index,
  onOpenModal,
}: {
  project: ProjectDetail
  index: number
  onOpenModal: (p: ProjectDetail) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center pb-16 mb-16 border-b border-[rgba(116,140,171,0.12)]"
    >
      {/* Text side */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#748CAB',
            marginBottom: 16,
            fontWeight: 600,
          }}
        >
          {project.category} • {project.year}
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 56px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            color: '#F0EBD8',
            marginBottom: 12,
          }}
        >
          {project.name}
        </h3>

        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            color: '#748CAB',
            fontStyle: 'italic',
            marginBottom: 20,
          }}
        >
          {project.tagline}
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            lineHeight: 1.7,
            color: 'rgba(240,235,216,0.75)',
            marginBottom: 28,
            maxWidth: 440,
          }}
        >
          {project.description}
        </p>

        {/* Stack tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
          {project.stack.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '4px 10px',
                background: '#1D2D44',
                border: '1px solid rgba(116,140,171,0.2)',
                color: '#F0EBD8',
                borderRadius: 4,
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Buttons - Solid Colors No Gradients */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <button
            onClick={() => onOpenModal(project)}
            data-cursor-hover
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
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
            Explore Case Study
          </button>

          <a
            data-cursor-hover
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
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

      {/* Mockup side */}
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
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory)

  return (
    <section
      id="projects"
      className="relative px-6 md:px-20 py-20 md:py-36 bg-[#0D1321] overflow-hidden"
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          marginBottom: 60,
        }}
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
          06 — Selected Enterprise Work
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(116,140,171,0.12)' }} />
      </motion.div>

      {/* Category Filter Pills - Solid Colors No Gradients */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 80 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            data-cursor-hover
            style={{
              background: activeCategory === cat ? '#748CAB' : '#1D2D44',
              border: activeCategory === cat ? 'none' : '1px solid rgba(116,140,171,0.15)',
              color: activeCategory === cat ? '#0D1321' : '#F0EBD8',
              padding: '8px 18px',
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
      {filteredProjects.map((p, i) => (
        <ProjectPanel key={p.id} project={p} index={i} onOpenModal={onSelectProject} />
      ))}
    </section>
  )
}
