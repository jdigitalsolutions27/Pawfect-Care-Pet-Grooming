import { useInView, useMotionValue, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type AnimatedCounterProps = {
  value: number
  label: string
  suffix?: string
}

export function AnimatedCounter({ value, label, suffix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const count = useMotionValue(0)
  const [display, setDisplay] = useState(value % 1 === 0 ? '0' : '0.0')

  useEffect(() => {
    if (!inView) return
    const unsubscribe = count.on('change', (latest) => {
      setDisplay(value % 1 === 0 ? Math.round(latest).toLocaleString() : latest.toFixed(1))
    })
    const controls = animate(count, value, { duration: 1.8, ease: 'easeOut' })
    return () => {
      unsubscribe()
      controls.stop()
    }
  }, [count, inView, value])

  return (
    <div ref={ref} className="rounded-[8px] bg-white p-6 text-center premium-shadow">
      <div className="text-3xl font-black text-teal-700 sm:text-4xl">
        {display}
        {suffix}
      </div>
      <p className="mt-2 text-sm font-semibold text-slate-600">{label}</p>
    </div>
  )
}
