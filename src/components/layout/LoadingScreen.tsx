import { motion, AnimatePresence } from 'framer-motion'
import { Scissors } from 'lucide-react'
import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 700)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#fffaf1]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-600 text-white premium-shadow">
              <Scissors className="h-7 w-7" />
            </span>
            <p className="text-sm font-bold uppercase text-teal-700">Preparing a calm visit</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
