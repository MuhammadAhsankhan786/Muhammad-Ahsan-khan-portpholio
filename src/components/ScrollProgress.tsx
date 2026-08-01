import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: 'linear-gradient(90deg, #7c6ff7 0%, #38bdf8 50%, #a78bfa 100%)',
        transformOrigin: '0%',
        zIndex: 999999,
        boxShadow: '0 0 12px rgba(124, 111, 247, 0.8)',
      }}
    />
  )
}
