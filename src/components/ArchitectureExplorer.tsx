import { useState } from 'react'
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
    color: '#748CAB',
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
    color: '#748CAB',
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
    color: '#748CAB',
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
    color: '#748CAB',
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
    color: '#748CAB',
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
    color: '#748CAB',
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
    color: '#748CAB',
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
    color: '#748CAB',
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

  return (
    <section
      id="architecture"
      className="relative px-6 md:px-20 py-20 md:py-32 bg-[#080D1A] border-b border-[rgba(116,140,171,0.12)] overflow-hidden"
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
          background: 'radial-gradient(circle, rgba(116,140,171,0.05) 0%, transparent 70%)',
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
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#748CAB',
          }}
        >
          05 — Interactive System Architecture Visualizer
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(116,140,171,0.12)' }} />
      </motion.div>

      {/* Heading */}
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
          How I Engineer <br />
          <em style={{ fontStyle: 'italic', color: '#748CAB' }}>
            Scalable Enterprise Systems.
          </em>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(240,235,216,0.7)', margin: 0, lineHeight: 1.6 }}>
          Click on any architectural node to inspect technical stacks, data flow diagrams, security protocols, and real code snippets.
        </p>
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
              background: '#1D2D44',
              border: '1px solid rgba(116,140,171,0.2)',
              borderRadius: 12,
              padding: 22,
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.3s ease',
            }}
            whileHover={{ borderColor: '#748CAB', y: -4 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <span style={{ fontSize: 24 }}>{node.icon}</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: '#748CAB',
                  background: '#0D1321',
                  padding: '2px 8px',
                  borderRadius: 4,
                  fontWeight: 600,
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
                color: '#F0EBD8',
                marginBottom: 4,
              }}
            >
              {node.title}
            </h3>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: '#748CAB',
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
                    background: '#0D1321',
                    color: 'rgba(240,235,216,0.7)',
                    borderRadius: 4,
                    border: '1px solid rgba(116,140,171,0.15)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 10, color: '#748CAB', fontWeight: 600 }}>
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
              background: 'rgba(4,4,8,0.85)',
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
                background: '#1D2D44',
                border: '1px solid rgba(116,140,171,0.3)',
                borderRadius: 16,
                maxWidth: 820,
                width: '100%',
                maxHeight: '85vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(0,0,0,0.9)',
              }}
            >
              {/* Header */}
              <div
                style={{
                  padding: '20px 28px',
                  background: '#0D1321',
                  borderBottom: '1px solid rgba(116,140,171,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexShrink: 0,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 28 }}>{selectedNode.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: '#F0EBD8', margin: 0 }}>
                      {selectedNode.title}
                    </h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#748CAB' }}>
                      {selectedNode.subtitle}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedNode(null)}
                  style={{
                    background: '#1D2D44',
                    border: '1px solid rgba(116,140,171,0.25)',
                    color: '#F0EBD8',
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
                  scrollbarColor: '#748CAB #0D1321',
                }}
              >
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(240,235,216,0.8)', lineHeight: 1.6, margin: 0 }}>
                  {selectedNode.description}
                </p>

                {/* Flow Diagram Box */}
                <div style={{ background: '#0D1321', padding: 16, borderRadius: 8, border: '1px solid rgba(116,140,171,0.15)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#748CAB', textTransform: 'uppercase', marginBottom: 6 }}>
                    Data Flow Execution Pathway
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#F0EBD8', fontWeight: 600 }}>
                    {selectedNode.diagramCode}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#748CAB', textTransform: 'uppercase', marginBottom: 10 }}>
                    Architectural Specifications & Guarantees
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                    {selectedNode.keyFeatures.map((f, i) => (
                      <div key={i} style={{ background: '#0D1321', padding: '8px 12px', borderRadius: 6, fontSize: 12, color: '#F0EBD8', borderLeft: '3px solid #748CAB' }}>
                        ✓ {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Snippet */}
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#748CAB', textTransform: 'uppercase', marginBottom: 8 }}>
                    Production Code Sample
                  </div>
                  <pre
                    style={{
                      background: '#0B101D',
                      padding: 16,
                      borderRadius: 8,
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      color: '#748CAB',
                      overflowX: 'auto',
                      border: '1px solid rgba(116,140,171,0.15)',
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
