import { useEffect } from 'react'

type SeoProps = {
  title: string
  description: string
}

function setMeta(selector: string, attr: 'content', value: string) {
  const element = document.head.querySelector(selector)
  if (element) {
    element.setAttribute(attr, value)
  }
}

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = `${title} | Pawfect Care Pet Grooming`
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
  }, [description, title])

  return null
}
