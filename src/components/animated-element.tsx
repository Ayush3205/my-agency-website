'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedElementProps {
  children: ReactNode
  delay?: number
}

export default function AnimatedElement({ children, delay = 0 }: AnimatedElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}