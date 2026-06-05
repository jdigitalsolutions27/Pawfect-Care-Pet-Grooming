import { useState } from 'react'
import { gallery } from '../../data/site'
import type { GalleryItem } from '../../types'
import { Lightbox } from '../../components/common/Lightbox'
import { Section } from '../../components/common/Section'

export function GalleryPreview() {
  const [selected, setSelected] = useState<GalleryItem | null>(null)

  return (
    <Section className="bg-[#fffaf1]" eyebrow="Before & After" title="Fresh, Happy Transformations">
      <div className="grid gap-5 md:grid-cols-3">
        {gallery.slice(0, 3).map((item) => (
          <button
            className="group overflow-hidden rounded-[8px] bg-white text-left premium-shadow"
            key={item.title}
            type="button"
            onClick={() => setSelected(item)}
          >
            <img className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" src={item.image} alt={item.title} loading="lazy" />
            <div className="p-5">
              <p className="text-sm font-bold uppercase text-teal-700">{item.category}</p>
              <h3 className="mt-1 text-xl font-black text-slate-950">{item.title}</h3>
            </div>
          </button>
        ))}
      </div>
      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}
