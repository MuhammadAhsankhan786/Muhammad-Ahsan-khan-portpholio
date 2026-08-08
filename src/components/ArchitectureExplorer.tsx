import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export type ArchNode = {
  id: string
  title: string
  subtitle: string
  icon: string
  color: string
  stack: string[]
  description: string
  keyFeatures: string[]
  diagramCode: string
  codeSnippet: string
}

const nodesData: ArchNode[] = [
  {
    id: 'frontend',
    title: 'Frontend Layer',
    subtitle: 'High-Performance UI Engine',
    icon: '💻',
    color: 'var(--accent)',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind v4', 'Framer Motion'],
    description:
      'Responsive, accessible, and fast web user interfaces built with modern React 19 server/client components and smooth micro-interactions.',
    keyFeatures: ['Server & Client Components', 'Strict Type Checking', '60fps Micro-animations', 'Optimized Core Web Vitals'],
    diagramCode: '[User Browser] ──> [Next.js App Router] ──> [Component State]',
    codeSnippet: `// Modern Server Component pattern
export async function DashboardPage() {
  const data = await fetchMetrics();
  return <MetricsGrid initialData={data} />;
}`,
  },
  {
    id: 'gateway',
    title: 'API Gateway',
    subtitle: 'Traffic & Request Routing',
    icon: '⚡',
    color: 'var(--accent)',
    stack: ['Vercel Edge', 'Nginx', 'CORS Middleware', 'Rate Limiter'],
    description:
      'Central entry point managing SSL termination, rate limiting, request validation, headers, and zero-latency routing to backend services.',
    keyFeatures: ['DDoS & Abuse Protection', 'CORS Security Policy', 'Edge Request Rewrites', 'Gzip/Brotli Compression'],
    diagramCode: '[Client Request] ──> [Edge Gateway] ──> [Auth & Validation Middleware]',
    codeSnippet: `// Edge Middleware Route Guard
export function middleware(req: NextRequest) {
  const token = req.cookies.get('session');
  if (!token) return NextResponse.redirect(new URL('/login', req.url));
}`,
  },
  {
    id: 'auth',
    title: 'Authentication & Security',
    subtitle: 'Multi-Tenant RBAC Protocol',
    icon: '🔒',
    color: 'var(--accent)',
    stack: ['JWT Tokens', 'RBAC Middleware', 'Bcrypt Security', 'Prisma Auth'],
    description:
      'Granular Role-Based Access Control enforcing tenant isolation across Admin, Provider, Manager, and End-User roles.',
    keyFeatures: ['JWT Access & Refresh Tokens', 'Role Hierarchy Enforcement', 'Password Hashing & Salting', 'Audit Trail Logging'],
    diagramCode: '[Bearer Token] ──> [RBAC Guard] ──> [Permission Verification: PASSED]',
    codeSnippet: `// NestJS Role Guard Annotation
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN, UserRole.MANAGER)
@Get('financial-report')
async getReport() { return this.financeService.getAudit(); }`,
  },
  {
    id: 'services',
    title: 'Microservices Backend',
    subtitle: 'Enterprise Core Logic',
    icon: '⚙️',
    color: 'var(--accent)',
    stack: ['NestJS', 'Node.js', 'Express.js', 'REST API', 'WebSockets'],
    description:
      'Decoupled domain services handling ERP business logic, inventory calculation, COD parcel sync, and report generation.',
    keyFeatures: ['Modular NestJS Architecture', 'Async Event Emitters', 'RESTful Standard Endpoints', 'WebSocket Real-time Events'],
    diagramCode: '[Controller] ──> [Service Layer] ──> [Repository Pattern] ──> [DB]',
    codeSnippet: `// NestJS Service Layer
@Injectable()
export class InventoryService {
  async reconcileStock(itemId: string, qty: number) {
    return this.prisma.inventory.update({ where: { id: itemId }, data: { quantity: qty } });
  }
}`,
  },
  {
    id: 'database',
    title: 'Database & Caching',
    subtitle: 'ACID Persistence & Speed',
    icon: '🗄️',
    color: 'var(--accent)',
    stack: ['PostgreSQL', 'Prisma ORM', 'Redis', 'MongoDB'],
    description:
      'Relational PostgreSQL schema with foreign keys, transactional integrity, Prisma ORM type safety, and Redis memory caching.',
    keyFeatures: ['ACID Compliant Transactions', 'Auto Migration Pipeline', 'Redis In-Memory Cache', 'Vector Indexes (pgvector)'],
    diagramCode: '[NestJS API] ──> [Redis Cache (Hit)] OR [PostgreSQL (Miss & Write)]',
    codeSnippet: `// Prisma Transaction Query
await prisma.$transaction([
  prisma.order.create({ data: orderData }),
  prisma.inventory.update({ where: { id: item.id }, data: { stock: { decrement: 1 } } })
]);`,
  },
  {
    id: 'ai-layer',
    title: 'Agentic AI Layer',
    subtitle: 'LLMs & Autonomous Agents',
    icon: '🤖',
    color: 'var(--accent)',
    stack: ['LLM APIs', 'Vector RAG', 'Python', 'Agent State Machine'],
    description:
      'Autonomous AI agent runtime equipped with vector memory retrieval, tool execution, and goal decomposition for enterprise tasks.',
    keyFeatures: ['Multi-Agent Tool Calling', 'Semantic Vector Search (RAG)', 'Context Memory Windowing', 'Autonomous Goal Planning'],
    diagramCode: '[Prompt] ──> [Agent Planner] ──> [Vector Memory Retrieval] ──> [Tool Execution]',
    codeSnippet: `// Agentic Tool Execution Loop
const toolResult = await executeTool(agentIntent.action, agentIntent.params);
const finalAnswer = await llm.synthesize({ context, toolResult });`,
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Logs',
    subtitle: 'System Health & Analytics',
    icon: '📊',
    color: 'var(--accent)',
    stack: ['Sentry', 'Winston Logger', 'Vercel Analytics', 'Health Check API'],
    description:
      'Continuous telemetry, exception capture, response time measurement, and structured logging across production deployments.',
    keyFeatures: ['Real-time Exception Tracking', 'Structured JSON Logs', 'Endpoint Uptime Monitoring', 'Core Web Vitals Telemetry'],
    diagramCode: '[Runtime Exception] ──> [Sentry Capture] ──> [Alert Notification]',
    codeSnippet: `// Global Exception Filter
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    logger.error('Unhandled Exception:', exception);
  }
}`,
  },
  {
    id: 'deployment',
    title: 'CI/CD & Deployment',
    subtitle: 'Global Edge Infrastructure',
    icon: '🚀',
    color: 'var(--accent)',
    stack: ['Vercel Edge', 'Docker', 'GitHub Actions', 'Vite CDN'],
    description:
      'Automated deployment pipeline running static type checks, linting, and instant global CDN delivery with sub-second response times.',
    keyFeatures: ['Automated GitHub Actions Build', 'Global Edge Distribution', 'Zero-Downtime Deployment', 'Environment Variable Security'],
    diagramCode: '[Git Push] ──> [GitHub Actions CI] ──> [Vercel Global Edge Deploy]',
    codeSnippet: `# GitHub Actions Workflow
name: Enterprise CI/CD
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: pnpm build`,
  },
]

export default function ArchitectureExplorer() {
  const [selectedNode, setSelectedNode] = useState<ArchNode | null>(null)
  const [isSimulating, setIsSimulating] = useState(false)
  const [simRps, setSimRps] = useState(12450)
  const [simLatency, setSimLatency] = useState(18)
  const [simCache, setSimCache] = useState(99.4)

  useEffect(() => {
    if (!isSimulating) return
    const interval = setInterval(() => {
      setSimRps(Math.floor(25000 + Math.random() * 15000))
      setSimLatency(Math.floor(12 + Math.random() * 14))
      setSimCache(parseFloat((98.5 + Math.random() * 1.4).toFixed(1)))
    }, 400)
    return () => clearInterval(interval)
  }, [isSimulating])

  return (
    <section
      id="architecture"
      className="relative px-6 md:px-20 py-20 md:py-32 overflow-hidden"
      style={{ background: 'var(--section-a)', borderBottom: '1px solid var(--border)' }}
    >
      {/* Background radial highlight */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--decorative) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Label */}
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
            letterSpacing: 'var(--label-tracking)',
            textTransform: 'uppercase',
            color: 'var(--accent)',
          }}
        >
          05 — Interactive System Architecture Visualizer
        </span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </motion.div>

      {/* Heading & Live Traffic Simulator Controls */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 48 }}>
        <div style={{ maxWidth: 640 }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              fontWeight: 'var(--heading-weight)' as any,
              color: 'var(--fg)',
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            How I Engineer <br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              Scalable Enterprise Systems.
            </em>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(var(--fg-rgb), 0.7)', margin: 0, lineHeight: 1.6 }}>
            Click on any node to inspect code patterns or launch the live traffic simulator to test system throughput.
          </p>
        </div>

        {/* Traffic Simulator Panel */}
        <div
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border-bright)',
            borderRadius: 14,
            padding: '16px 20px',
            boxShadow: 'var(--card-shadow)',
            minWidth: 280,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', color: 'var(--accent)', textTransform: 'uppercase', fontWeight: 700 }}>
              ⚡ System Load Simulator
            </span>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: isSimulating ? '#10B981' : 'var(--fg-muted)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 14, textAlign: 'center' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 800, color: 'var(--fg)' }}>
                {isSimulating ? simRps.toLocaleString() : '12,450'}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-muted)' }}>RPS</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 800, color: 'var(--accent)' }}>
                {isSimulating ? `${simLatency}ms` : '18ms'}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-muted)' }}>LATENCY</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 800, color: 'var(--fg)' }}>
                {isSimulating ? `${simCache}%` : '99.4%'}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-muted)' }}>CACHE HIT</div>
            </div>
          </div>

          <button
            onClick={() => setIsSimulating(!isSimulating)}
            data-cursor-hover
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: 8,
              background: isSimulating ? 'var(--accent)' : 'var(--btn-primary-bg)',
              color: 'var(--btn-primary-fg)',
              border: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.2s ease',
            }}
          >
            {isSimulating ? '⏹️ Stop Traffic Test' : '▶️ Trigger Burst Traffic'}
          </button>
        </div>
      </div>

      {/* Interactive Nodes Flow Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {nodesData.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onClick={() => setSelectedNode(node)}
            data-cursor-hover
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: 'var(--card-radius)',
              padding: 22,
              cursor: 'pointer',
              position: 'relative',
              boxShadow: 'var(--card-shadow)',
              transition: 'all 0.3s ease',
            }}
            whileHover={{ y: -4, boxShadow: 'var(--card-shadow-hover)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <span style={{ fontSize: 24 }}>{node.icon}</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: 'var(--accent)',
                  background: 'var(--surface)',
                  padding: '2px 8px',
                  borderRadius: 4,
                  fontWeight: 600,
                  border: '1px solid var(--border)',
                }}
              >
                NODE 0{index + 1}
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 17,
                fontWeight: 700,
                color: 'var(--fg)',
                marginBottom: 4,
              }}
            >
              {node.title}
            </h3>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--accent)',
                marginBottom: 14,
              }}
            >
              {node.subtitle}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
              {node.stack.slice(0, 3).map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9,
                    padding: '3px 8px',
                    background: 'var(--tag-bg)',
                    color: 'var(--tag-fg)',
                    borderRadius: 4,
                    border: '1px solid var(--tag-border)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', fontWeight: 600 }}>
              Inspect Node →
            </div>
          </motion.div>
        ))}
      </div>

      {/* Node Inspector Modal */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNode(null)}
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
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-bright)',
                borderRadius: 'var(--card-radius)',
                maxWidth: 820,
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
                  padding: '20px 28px',
                  background: 'var(--surface)',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexShrink: 0,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 28 }}>{selectedNode.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--fg)', margin: 0 }}>
                      {selectedNode.title}
                    </h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)' }}>
                      {selectedNode.subtitle}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedNode(null)}
                  style={{
                    background: 'var(--card-surface)',
                    border: '1px solid var(--border-bright)',
                    color: 'var(--fg)',
                    width: 34,
                    height: 34,
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
                  padding: 28,
                  flex: 1,
                  minHeight: 0,
                  overflowY: 'auto',
                  overscrollBehavior: 'contain',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'var(--sb-thumb) var(--sb-bg)',
                }}
              >
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(var(--fg-rgb), 0.8)', lineHeight: 1.6, margin: 0 }}>
                  {selectedNode.description}
                </p>

                {/* Flow Diagram Box */}
                <div style={{ background: 'var(--surface)', padding: 16, borderRadius: 8, border: '1px solid var(--border)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 6 }}>
                    Data Flow Execution Pathway
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg)', fontWeight: 600 }}>
                    {selectedNode.diagramCode}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 10 }}>
                    Architectural Specifications & Guarantees
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                    {selectedNode.keyFeatures.map((f, i) => (
                      <div key={i} style={{ background: 'var(--surface)', padding: '8px 12px', borderRadius: 6, fontSize: 12, color: 'var(--fg)', borderLeft: '3px solid var(--accent)' }}>
                        ✓ {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Snippet */}
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 8 }}>
                    Production Code Sample
                  </div>
                  <pre
                    style={{
                      background: 'var(--surface-2)',
                      padding: 16,
                      borderRadius: 8,
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      color: 'var(--fg)',
                      overflowX: 'auto',
                      border: '1px solid var(--border)',
                      margin: 0,
                    }}
                  >
                    {selectedNode.codeSnippet}
                  </pre>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
