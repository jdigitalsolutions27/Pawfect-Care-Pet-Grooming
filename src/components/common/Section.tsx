import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionProps = {
  eyebrow?: string
  title?: string
  intro?: string
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ eyebrow, title, intro, children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <motion.div
            className="mx-auto mb-12 max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            {eyebrow && (
              <p className="mb-3 text-sm font-bold uppercase text-teal-700">{eyebrow}</p>
            )}
            {title && (
              <h2 className="text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {intro && <p className="mt-5 text-lg leading-8 text-slate-600">{intro}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
