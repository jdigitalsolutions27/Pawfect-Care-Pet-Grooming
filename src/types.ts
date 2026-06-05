import type { LucideIcon } from 'lucide-react'

export type IconName =
  | 'Award'
  | 'Bath'
  | 'Bone'
  | 'CalendarCheck'
  | 'Heart'
  | 'ShieldCheck'
  | 'Sparkles'
  | 'Star'
  | 'Scissors'
  | 'Smile'
  | 'Syringe'
  | 'WandSparkles'

export type NavItem = {
  label: string
  href: string
}

export type Service = {
  title: string
  slug: string
  summary: string
  description: string
  duration: string
  price: string
  benefits: string[]
  icon: IconName
  image: string
}

export type Package = {
  name: string
  price: string
  duration: string
  recommended: string
  inclusions: string[]
  featured?: boolean
}

export type GalleryItem = {
  title: string
  category: 'Transformations' | 'Spa Days' | 'Puppies' | 'Salon Moments'
  image: string
}

export type Testimonial = {
  name: string
  pet: string
  review: string
  rating: number
  image: string
}

export type BlogPost = {
  title: string
  category: 'Grooming' | 'Health' | 'Nutrition' | 'Training' | 'Pet Lifestyle'
  excerpt: string
  readTime: string
  image: string
}

export type TeamMember = {
  name: string
  role: string
  bio: string
  image: string
}

export type IconMap = Record<IconName, LucideIcon>
