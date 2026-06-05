import { Button } from '../components/common/Button'
import { Section } from '../components/common/Section'
import { Seo } from '../components/common/Seo'
import { packages } from '../data/site'

export function PackagesPage() {
  return (
    <>
      <Seo
        title="Grooming Packages"
        description="Compare premium pet grooming packages, pricing, inclusions, duration, and recommended pet types."
      />
      <Section
        className="bg-[#fffaf1]"
        eyebrow="Grooming Packages"
        title="Simple Choices, Premium Results"
        intro="Transparent packages make it easy to choose the right level of care for your pet's coat, comfort, and occasion."
      >
        <div className="grid gap-6 lg:grid-cols-4">
          {packages.map((pkg) => (
            <article
              className={`rounded-[8px] p-6 premium-shadow ${
                pkg.featured ? 'bg-teal-700 text-white' : 'bg-white text-slate-950'
              }`}
              key={pkg.name}
            >
              {pkg.featured && (
                <p className="mb-4 inline-flex rounded-full bg-white px-3 py-1 text-xs font-black uppercase text-teal-800">
                  Most Loved
                </p>
              )}
              <h2 className="text-2xl font-black">{pkg.name}</h2>
              <p className="mt-4 text-4xl font-black">{pkg.price}</p>
              <p className="mt-2 text-sm font-bold opacity-80">{pkg.duration}</p>
              <p className="mt-5 text-sm leading-6 opacity-85">{pkg.recommended}</p>
              <ul className="mt-6 grid gap-3 text-sm font-semibold">
                {pkg.inclusions.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
              <Button className="mt-8 w-full" to="/book" variant={pkg.featured ? 'secondary' : 'primary'}>
                Book Package
              </Button>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
