import { Award, HeartHandshake, ShieldCheck } from 'lucide-react'
import { Button } from '../components/common/Button'
import { Section } from '../components/common/Section'
import { Seo } from '../components/common/Seo'
import { images, team } from '../data/site'

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Meet the caring professionals behind Pawfect Care Pet Grooming and learn about our calm, safety-first approach."
      />
      <section className="bg-sky-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase text-teal-700">About Pawfect Care</p>
            <h1 className="mt-4 text-5xl font-black text-slate-950 sm:text-6xl">
              Premium grooming shaped around trust.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We built Pawfect Care for owners who want more than a quick trim. Our salon is calm,
              spotless, and detail-driven, with pet notes, comfort breaks, and grooming plans that
              respect each pet's personality.
            </p>
            <Button className="mt-8" to="/book">
              Book a First Visit
            </Button>
          </div>
          <img
            className="rounded-[8px] bg-white object-cover premium-shadow"
            src={images.ownerCare}
            alt="Happy pet owner hugging their dog"
          />
        </div>
      </section>

      <Section title="A Boutique Standard of Care">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: 'Safety First',
              copy: 'Clean tools, calm handling, and careful intake notes for every visit.',
            },
            {
              icon: Award,
              title: 'Skilled Groomers',
              copy: 'Experienced hands for breed cuts, coat care, and sensitive pets.',
            },
            {
              icon: HeartHandshake,
              title: 'Owner Confidence',
              copy: 'Clear timing, service notes, and honest recommendations.',
            },
          ].map(({ icon: IconComponent, title, copy }) => (
            <article className="rounded-[8px] bg-white p-6 premium-shadow" key={title}>
              <IconComponent className="h-8 w-8 text-teal-700" />
              <h2 className="mt-5 text-xl font-black text-slate-950">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-[#fffaf1]" eyebrow="Team" title="People You Can Trust With Your Pet">
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <article className="overflow-hidden rounded-[8px] bg-white premium-shadow" key={member.name}>
              <img className="h-64 w-full object-cover" src={member.image} alt={member.name} loading="lazy" />
              <div className="p-6">
                <p className="text-sm font-bold uppercase text-teal-700">{member.role}</p>
                <h2 className="mt-2 text-2xl font-black text-slate-950">{member.name}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
