import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { GalleryItem } from '../../types'

type LightboxProps = {
  item: GalleryItem | null
  onClose: () => void
}

export function Lightbox({ item, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[8px] bg-white"
            initial={{ scale: 0.94, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.94, y: 20 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-3 text-slate-900 shadow-lg"
              type="button"
              onClick={onClose}
              aria-label="Close gallery preview"
            >
              <X className="h-5 w-5" />
            </button>
            <img className="max-h-[76vh] w-full object-cover" src={item.image} alt={item.title} />
            <div className="p-5">
              <p className="text-sm font-bold uppercase text-teal-700">{item.category}</p>
              <h3 className="mt-1 text-2xl font-black text-slate-950">{item.title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
