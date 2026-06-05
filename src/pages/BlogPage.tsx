import { useMemo, useState } from 'react'
import { Section } from '../components/common/Section'
import { Seo } from '../components/common/Seo'
import { blogPosts } from '../data/site'

const categories = ['All', 'Grooming', 'Health', 'Nutrition', 'Training', 'Pet Lifestyle'] as const

export function BlogPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>('All')
  const posts = useMemo(
    () => (category === 'All' ? blogPosts : blogPosts.filter((post) => post.category === category)),
    [category],
  )

  return (
    <>
      <Seo
        title="Pet Care Tips Blog"
        description="Read practical grooming, health, nutrition, training, and pet lifestyle tips from Pawfect Care."
      />
      <Section
        className="bg-sky-50"
        eyebrow="Pet Care Tips"
        title="Smart Guidance Between Grooming Visits"
        intro="Helpful, realistic advice for keeping pets comfortable, clean, and confident at home."
      >
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((item) => (
            <button
              className={`rounded-full px-5 py-3 text-sm font-black transition ${
                category === item ? 'bg-teal-700 text-white' : 'bg-white text-slate-700 hover:bg-teal-50'
              }`}
              key={item}
              type="button"
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article className="overflow-hidden rounded-[8px] bg-white premium-shadow" key={post.title}>
              <img className="h-64 w-full object-cover" src={post.image} alt={post.title} loading="lazy" />
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="rounded-full bg-teal-50 px-3 py-1 text-xs font-black uppercase text-teal-800">
                    {post.category}
                  </p>
                  <p className="text-sm font-semibold text-slate-500">{post.readTime}</p>
                </div>
                <h2 className="mt-4 text-2xl font-black text-slate-950">{post.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
