import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('INITIALIZING ENTERPRISE NODE')
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    const statuses = [
      'INITIALIZING ENTERPRISE CORE',
      'LOADING NODE MATRIX & MESH NETWORK',
      'ESTABLISHING POSTGRESQL & PRISMA DATA PIPELINE',
      'BOOTSTRAPPING AGENTIC AI WORKFLOW ENGINE',
      'SYSTEM ONLINE — MUHAMMAD AHSAN KHAN',
    ]

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsFinished(true)
            setTimeout(onComplete, 800)
          }, 300)
          return 100
        }
        const next = prev + Math.floor(Math.random() * 8) + 4
        const capped = Math.min(next, 100)

        if (capped < 25) setStatusText(statuses[0])
        else if (capped < 50) setStatusText(statuses[1])
        else if (capped < 75) setStatusText(statuses[2])
        else if (capped < 95) setStatusText(statuses[3])
        else setStatusText(statuses[4])

        return capped
      })
    }, 60)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: '#040408',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 32,
            overflow: 'hidden',
          }}
        >
          {/* Ambient background glow */}
          <div
            style={{
              position: 'absolute',
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(124,111,247,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Animated Enterprise Network SVG Graphic */}
          <div style={{ position: 'relative', width: 220, height: 220, marginBottom: 40 }}>
            <svg width="220" height="220" viewBox="0 0 200 200" fill="none">
              {/* Outer connecting circle */}
              <circle cx="100" cy="100" r="80" stroke="rgba(124,111,247,0.15)" strokeWidth="1" strokeDasharray="6 6" />

              {/* Connecting lines */}
              <motion.line
                x1="100" y1="100" x2="60" y2="50"
                stroke="#7c6ff7" strokeWidth="1.5" strokeOpacity="0.4"
                initial={{ pathLength: 0 }} animate={{ pathLength: progress / 100 }}
              />
              <motion.line
                x1="100" y1="100" x2="140" y2="50"
                stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4"
                initial={{ pathLength: 0 }} animate={{ pathLength: progress / 100 }}
              />
              <motion.line
                x1="100" y1="100" x2="150" y2="130"
                stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.4"
                initial={{ pathLength: 0 }} animate={{ pathLength: progress / 100 }}
              />
              <motion.line
                x1="100" y1="100" x2="50" y2="130"
                stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.4"
                initial={{ pathLength: 0 }} animate={{ pathLength: progress / 100 }}
              />

              {/* Node points */}
              {[
                { cx: 100, cy: 100, color: '#7c6ff7', r: 8 },
                { cx: 60, cy: 50, color: '#38bdf8', r: 5 },
                { cx: 140, cy: 50, color: '#a78bfa', r: 5 },
                { cx: 150, cy: 130, color: '#7c6ff7', r: 6 },
                { cx: 50, cy: 130, color: '#4ade80', r: 5 },
              ].map((node, i) => (
                <g key={i}>
                  <circle cx={node.cx} cy={node.cy} r={node.r + 4} fill={`${node.color}20`} />
                  <circle cx={node.cx} cy={node.cy} r={node.r} fill={node.color} />
                </g>
              ))}
            </svg>

            {/* Glowing Brand Tag */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                fontWeight: 700,
                color: '#fff',
                letterSpacing: '0.15em',
              }}
            >
              NRT
            </div>
          </div>

          {/* Progress Percentage */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 12 }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 64,
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1,
              }}
            >
              {progress}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 20,
                color: '#a78bfa',
                fontWeight: 600,
              }}
            >
              %
            </span>
          </div>

          {/* Progress bar line */}
          <div
            style={{
              width: 280,
              height: 2,
              background: 'rgba(21,21,42,1)',
              borderRadius: 2,
              overflow: 'hidden',
              marginBottom: 16,
            }}
          >
            <motion.div
              style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #7c6ff7, #38bdf8)',
                boxShadow: '0 0 10px #7c6ff7',
              }}
            />
          </div>

          {/* Console status output */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.15em',
              color: 'rgba(220,220,238,0.5)',
              textTransform: 'uppercase',
            }}
          >
            {statusText}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
