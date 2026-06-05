import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useState } from 'react'
import type { Testimonial } from '../../types'

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  return (
    <div className="mx-auto max-w-4xl rounded-[8px] bg-sky-50 p-6 premium-shadow md:p-10">
      <div className="grid items-center gap-8 md:grid-cols-[240px_1fr]">
        <img className="h-64 w-full rounded-[8px] object-cover" src={current.image} alt={`${current.pet} testimonial`} loading="lazy" />
        <div>
          <div className="flex gap-1 text-amber-500">
            {Array.from({ length: current.rating }).map((_, star) => (
              <Star key={star} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <blockquote className="mt-5 text-xl font-bold leading-9 text-slate-900">
            “{current.review}”
          </blockquote>
          <p className="mt-5 font-black text-slate-950">{current.name}</p>
          <p className="text-sm font-semibold text-teal-700">Pet parent to {current.pet}</p>
          <div className="mt-7 flex gap-3">
            <button
              className="rounded-full bg-white p-3 text-slate-900"
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="rounded-full bg-white p-3 text-slate-900"
              type="button"
              aria-label="Next testimonial"
              onClick={() => setIndex((index + 1) % testimonials.length)}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
