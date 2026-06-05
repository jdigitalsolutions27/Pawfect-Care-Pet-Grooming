import { Button } from '../components/common/Button'
import { Icon } from '../components/common/Icon'
import { Section } from '../components/common/Section'
import { Seo } from '../components/common/Seo'
import { services } from '../data/site'

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Explore full grooming, bath and blow dry, nail trimming, ear cleaning, teeth cleaning, flea treatment, pet spa, and puppy grooming services."
      />
      <Section
        className="bg-sky-50"
        eyebrow="Services"
        title="Detailed Grooming Services"
        intro="Choose a complete transformation, a quick maintenance visit, or gentle add-ons that keep pets comfortable between appointments."
      >
        <div className="grid gap-6">
          {services.map((service, index) => (
            <article
              className="grid overflow-hidden rounded-[8px] bg-white premium-shadow lg:grid-cols-[.9fr_1.1fr]"
              key={service.slug}
            >
              <img
                className={`h-full min-h-80 w-full object-cover ${index % 2 ? 'lg:order-2' : ''}`}
                src={service.image}
                alt={service.title}
                loading="lazy"
              />
              <div className="p-6 md:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-3xl font-black text-slate-950">{service.title}</h2>
                <p className="mt-4 leading-8 text-slate-600">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-bold text-slate-700">
                    {service.duration}
                  </span>
                  <span className="rounded-full bg-teal-50 px-4 py-2 text-sm font-bold text-teal-800">
                    {service.price}
                  </span>
                </div>
                <ul className="mt-6 grid gap-2 text-sm font-semibold text-slate-600">
                  {service.benefits.map((benefit) => (
                    <li key={benefit}>✓ {benefit}</li>
                  ))}
                </ul>
                <Button className="mt-7" to="/book">
                  Request This Service
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
