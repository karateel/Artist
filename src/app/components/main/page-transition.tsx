'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}