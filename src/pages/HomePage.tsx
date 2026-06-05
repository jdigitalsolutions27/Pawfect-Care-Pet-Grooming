import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedCounter } from '../components/common/AnimatedCounter'
import { Button } from '../components/common/Button'
import { Icon } from '../components/common/Icon'
import { Section } from '../components/common/Section'
import { Seo } from '../components/common/Seo'
import {
  blogPosts,
  images,
  packages,
  services,
  stats,
  team,
  testimonials,
} from '../data/site'
import { GalleryPreview } from './partials/GalleryPreview'
import { TestimonialCarousel } from './partials/TestimonialCarousel'

const trustItems = [
  ['Certified Groomers', 'Award'],
  ['Safe & Clean Environment', 'ShieldCheck'],
  ['Loving Pet Care', 'Heart'],
  ['5-Star Customer Experience', 'Star'],
] as const

const reasons = [
  'Experienced Groomers',
  'Pet Safety First',
  'Stress-Free Environment',
  'Premium Products',
  'Personalized Care',
]

export function HomePage() {
  return (
    <>
      <Seo
        title="Luxury Pet Grooming"
        description="Book premium pet grooming, pet spa treatments, and gentle pet care at Pawfect Care Pet Grooming."
      />
      <section className="relative overflow-hidden bg-[#fffaf1] px-4 py-16 sm:px-6 lg:min-h-[calc(100vh-80px)] lg:px-8 lg:py-20">
        <div className="absolute inset-0 soft-grid opacity-70" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-teal-800 ring-1 ring-teal-100">
              Luxury Pet Care + Modern Pet Boutique
            </p>
            <h1 className="text-5xl font-black leading-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Where Every Pet Gets VIP Treatment
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Professional grooming, loving care, and a stress-free experience for your furry
              family members.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/book">Book Appointment</Button>
              <Button to="/services" variant="secondary">
                Explore Services
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold text-slate-700">
              <span className="rounded-full bg-white px-4 py-2">Same-week openings</span>
              <span className="rounded-full bg-white px-4 py-2">Gentle senior care</span>
              <span className="rounded-full bg-white px-4 py-2">Clean boutique salon</span>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <img
              className="w-full rounded-[8px] bg-white object-cover premium-shadow"
              src={images.hero}
              alt="Happy pets in a premium grooming salon"
              fetchPriority="high"
            />
            <div className="absolute bottom-4 left-4 rounded-[8px] bg-white/92 p-4 shadow-xl backdrop-blur">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-sm font-black text-slate-950">4.9 rating from local families</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-teal-100 bg-white px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(([label, icon]) => (
            <div className="flex items-center gap-3 rounded-[8px] bg-sky-50 p-4" key={label}>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-teal-700">
                <Icon name={icon} className="h-5 w-5" />
              </span>
              <p className="font-black text-slate-900">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <Section
        id="services"
        eyebrow="Services"
        title="Beautiful Grooming, Thoughtful Care"
        intro="Every appointment is built around your pet's coat, comfort level, lifestyle, and owner preferences."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <motion.article
              key={service.slug}
              className="group rounded-[8px] bg-white p-5 premium-shadow"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <Icon name={service.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-black text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.summary}</p>
              <Link className="mt-5 inline-flex text-sm font-black text-teal-700" to="/services">
                View details
              </Link>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section className="bg-sky-50" eyebrow="Why Choose Us" title="Care That Feels Calm, Clean, and Considered">
        <div className="grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div className="rounded-[8px] bg-white p-5 premium-shadow" key={reason}>
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-teal-600 text-white">
                  <Icon name="Sparkles" className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-black text-slate-950">{reason}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Clear communication, clean tools, comfort breaks, and pet notes that follow them
                  from visit to visit.
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map(([label, value, suffix]) => (
              <AnimatedCounter key={label} label={label} value={value} suffix={suffix} />
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Packages" title="Featured Grooming Packages" intro="Clear options for maintenance visits, full transformations, and spa-day indulgence.">
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.slice(0, 3).map((pkg) => (
            <article
              className={`rounded-[8px] p-6 premium-shadow ${
                pkg.featured ? 'bg-teal-700 text-white' : 'bg-white text-slate-950'
              }`}
              key={pkg.name}
            >
              <p className="text-sm font-bold uppercase opacity-80">{pkg.duration}</p>
              <h3 className="mt-3 text-2xl font-black">{pkg.name}</h3>
              <p className="mt-4 text-4xl font-black">{pkg.price}</p>
              <ul className="mt-6 grid gap-3 text-sm">
                {pkg.inclusions.map((item) => (
                  <li className="flex gap-2" key={item}>
                    <span>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="mt-7 w-full" to="/book" variant={pkg.featured ? 'secondary' : 'primary'}>
                Book Now
              </Button>
            </article>
          ))}
        </div>
      </Section>

      <GalleryPreview />

      <Section className="bg-white" eyebrow="Testimonials" title="Owners Notice the Difference">
        <TestimonialCarousel testimonials={testimonials} />
      </Section>

      <Section eyebrow="Team" title="Meet Our Team" intro="Skilled groomers and pet care specialists who treat every visit like a relationship, not a transaction.">
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <article className="overflow-hidden rounded-[8px] bg-white premium-shadow" key={member.name}>
              <img className="h-64 w-full object-cover transition duration-500 hover:scale-105" src={member.image} alt={member.name} loading="lazy" />
              <div className="p-6">
                <p className="text-sm font-bold uppercase text-teal-700">{member.role}</p>
                <h3 className="mt-2 text-2xl font-black text-slate-950">{member.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-sky-50" eyebrow="Pet Care Tips" title="Helpful Advice Between Visits">
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <Link className="overflow-hidden rounded-[8px] bg-white premium-shadow" key={post.title} to="/blog">
              <img className="h-52 w-full object-cover transition duration-500 hover:scale-105" src={post.image} alt={post.title} loading="lazy" />
              <div className="p-6">
                <p className="text-sm font-bold uppercase text-teal-700">{post.category}</p>
                <h3 className="mt-2 text-xl font-black text-slate-950">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-teal-700 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <h2 className="text-4xl font-black sm:text-5xl">Ready To Give Your Pet The Care They Deserve?</h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/book" variant="secondary">Book Appointment</Button>
            <Button href="tel:+15552847297" variant="ghost" className="text-white hover:bg-white/10">Call Now</Button>
          </div>
        </div>
      </section>
    </>
  )
}
