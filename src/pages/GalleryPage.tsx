import { useMemo, useState } from 'react'
import { Lightbox } from '../components/common/Lightbox'
import { Section } from '../components/common/Section'
import { Seo } from '../components/common/Seo'
import { gallery } from '../data/site'
import type { GalleryItem } from '../types'

const filters = ['All', 'Transformations', 'Spa Days', 'Puppies', 'Salon Moments'] as const

export function GalleryPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const [selected, setSelected] = useState<GalleryItem | null>(null)
  const items = useMemo(
    () => (filter === 'All' ? gallery : gallery.filter((item) => item.category === filter)),
    [filter],
  )

  return (
    <>
      <Seo
        title="Gallery"
        description="Browse premium grooming transformations, pet spa moments, puppy grooming, and salon highlights."
      />
      <Section className="bg-sky-50" eyebrow="Gallery" title="Grooming Results Worth Showing Off">
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {filters.map((item) => (
            <button
              className={`rounded-full px-5 py-3 text-sm font-black transition ${
                filter === item ? 'bg-teal-700 text-white' : 'bg-white text-slate-700 hover:bg-teal-50'
              }`}
              key={item}
              type="button"
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="masonry">
          {items.map((item, index) => (
            <button
              className="group w-full overflow-hidden rounded-[8px] bg-white text-left premium-shadow"
              key={`${item.title}-${index}`}
              type="button"
              onClick={() => setSelected(item)}
            >
              <img className="h-auto w-full object-cover transition duration-500 group-hover:scale-105" src={item.image} alt={item.title} loading="lazy" />
              <div className="p-5">
                <p className="text-sm font-bold uppercase text-teal-700">{item.category}</p>
                <h2 className="mt-1 text-xl font-black text-slate-950">{item.title}</h2>
              </div>
            </button>
          ))}
        </div>
      </Section>
      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </>
  )
}
