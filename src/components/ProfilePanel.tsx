import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { MouseEvent } from 'react'

export function ProfilePanel() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 16 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 16 })

  const move = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width - 0.5)
    y.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className="profile-stage"
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={move}
      onMouseLeave={reset}
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="profile-orbit profile-orbit-a" />
      <div className="profile-orbit profile-orbit-b" />
      <div className="profile-photo-shell">
        <img src="/profile.jpg" alt="Trần Quốc Long" />
        <div className="scanline" />
      </div>
      <div className="profile-tag profile-tag-top">FULL-STACK / CLOUD</div>
      <div className="profile-tag profile-tag-bottom">HCMC · VN</div>
    </motion.div>
  )
}
