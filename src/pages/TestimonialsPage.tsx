import { Star } from 'lucide-react'
import { Button } from '../components/common/Button'
import { Section } from '../components/common/Section'
import { Seo } from '../components/common/Seo'
import { testimonials } from '../data/site'

export function TestimonialsPage() {
  return (
    <>
      <Seo
        title="Testimonials"
        description="Read reviews from pet owners who trust Pawfect Care Pet Grooming with their dogs and cats."
      />
      <Section
        className="bg-[#fffaf1]"
        eyebrow="Testimonials"
        title="Real Confidence From Real Pet Parents"
        intro="Owners come to us for polished grooming, but they return because their pets are treated with patience and respect."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article className="rounded-[8px] bg-white p-6 premium-shadow" key={testimonial.name}>
              <img className="h-48 w-full rounded-[8px] object-cover" src={testimonial.image} alt={`${testimonial.pet} after grooming`} loading="lazy" />
              <div className="mt-5 flex gap-1 text-amber-500">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-5 leading-8 text-slate-700">“{testimonial.review}”</p>
              <h2 className="mt-5 text-xl font-black text-slate-950">{testimonial.name}</h2>
              <p className="text-sm font-bold text-teal-700">Pet parent to {testimonial.pet}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to="/book">Start Your Pet's Visit</Button>
        </div>
      </Section>
    </>
  )
}
