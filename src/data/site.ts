import type {
  BlogPost,
  GalleryItem,
  NavItem,
  Package,
  Service,
  TeamMember,
  Testimonial,
} from '../types'

const unsplash = (id: string, width = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${width}`

export const images = {
  hero: unsplash('photo-1522276498395-f4f68f7f8454', 1800),
  grooming: unsplash('photo-1611173622933-91942d394b04'),
  bath: unsplash('photo-1592887302112-b87aca16ad2c'),
  nailCare: unsplash('photo-1629030502047-b6ac6d4a78b6'),
  petPortrait: unsplash('photo-1561037404-61cd46aa615b'),
  puppy: unsplash('photo-1534361960057-19889db9621e'),
  towelDog: unsplash('photo-1581887936036-3f4f7f0b6679'),
  ownerCare: unsplash('photo-1581527106934-25bc16f1d310'),
  vetCare: unsplash('photo-1644675272883-0c4d582528d8'),
  salonDog: unsplash('photo-1597595735781-6a57fb8e3e3d'),
}

export const business = {
  name: 'Pawfect Care Pet Grooming',
  phone: import.meta.env.VITE_PHONE_NUMBER || '+1 (555) 284-7297',
  email: import.meta.env.VITE_BUSINESS_EMAIL || 'hello@pawfectcare.com',
  address: '1848 Willow Park Avenue, Suite 120, San Diego, CA',
  hours: [
    ['Monday - Friday', '8:00 AM - 6:00 PM'],
    ['Saturday', '9:00 AM - 5:00 PM'],
    ['Sunday', 'By appointment'],
  ],
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Packages', href: '/packages' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const services: Service[] = [
  {
    title: 'Full Grooming',
    slug: 'full-grooming',
    summary: 'A complete nose-to-tail refresh tailored to coat, breed, and temperament.',
    description:
      'Our signature grooming visit includes a coat-safe bath, blow dry, haircut or trim, brush-out, nail care, ear cleaning, and finishing spritz.',
    duration: '90-150 min',
    price: 'From $85',
    benefits: ['Breed-aware styling', 'Skin-safe shampoo', 'Detailed finishing'],
    icon: 'Scissors',
    image: images.grooming,
  },
  {
    title: 'Bath & Blow Dry',
    slug: 'bath-blow-dry',
    summary: 'Deep cleansing, gentle drying, and a soft polished coat.',
    description:
      'Perfect between full grooms, this service removes buildup, reduces shedding, and leaves pets smelling clean without harsh fragrance.',
    duration: '45-75 min',
    price: 'From $45',
    benefits: ['Warm towel comfort', 'De-shedding option', 'Coat-safe products'],
    icon: 'Bath',
    image: images.bath,
  },
  {
    title: 'Nail Trimming',
    slug: 'nail-trimming',
    summary: 'Careful trimming and smoothing for safer, happier paws.',
    description:
      'We work slowly and calmly, especially with nervous pets, to keep nails at a healthy length and reduce snagging or discomfort.',
    duration: '15-25 min',
    price: 'From $18',
    benefits: ['Gentle handling', 'Optional grinding', 'Quick visit'],
    icon: 'ShieldCheck',
    image: images.nailCare,
  },
  {
    title: 'Ear Cleaning',
    slug: 'ear-cleaning',
    summary: 'Gentle ear care that supports comfort and cleanliness.',
    description:
      'A careful external ear clean using pet-safe solutions, ideal for breeds prone to buildup after baths or outdoor play.',
    duration: '15 min',
    price: 'From $16',
    benefits: ['Pet-safe solution', 'Gentle technique', 'Comfort check'],
    icon: 'Heart',
    image: images.ownerCare,
  },
  {
    title: 'Teeth Cleaning',
    slug: 'teeth-cleaning',
    summary: 'A fresh-breath add-on for everyday oral hygiene support.',
    description:
      'Non-invasive brushing helps reduce surface buildup and keeps your pet feeling fresh after their grooming visit.',
    duration: '15 min',
    price: 'From $20',
    benefits: ['Fresh breath', 'Gentle brushing', 'Easy add-on'],
    icon: 'Smile',
    image: images.vetCare,
  },
  {
    title: 'Flea Treatment',
    slug: 'flea-treatment',
    summary: 'Targeted cleansing for pets who need extra coat and skin support.',
    description:
      'A careful treatment bath and comb-through designed to support a cleaner coat while protecting salon hygiene.',
    duration: '60-90 min',
    price: 'From $55',
    benefits: ['Specialty shampoo', 'Thorough comb-out', 'Sanitary handling'],
    icon: 'Syringe',
    image: images.towelDog,
  },
  {
    title: 'Pet Spa',
    slug: 'pet-spa',
    summary: 'A soothing upgrade with conditioning, paw balm, and calming care.',
    description:
      'Our spa visit adds a richer coat treatment, paw and nose balm, aromatherapy-safe finishing, and extra comfort breaks.',
    duration: '75-120 min',
    price: 'From $75',
    benefits: ['Deep conditioning', 'Paw balm', 'Calming pace'],
    icon: 'Sparkles',
    image: images.salonDog,
  },
  {
    title: 'Puppy Grooming',
    slug: 'puppy-grooming',
    summary: 'A positive first grooming experience for young pets.',
    description:
      'Short, patient visits introduce puppies to grooming sounds, touch, brushing, bath time, and nail care without rushing.',
    duration: '45-60 min',
    price: 'From $40',
    benefits: ['Confidence building', 'Gentle introduction', 'Parent guidance'],
    icon: 'Bone',
    image: images.puppy,
  },
]

export const packages: Package[] = [
  {
    name: 'Basic Package',
    price: '$55+',
    duration: '60-90 min',
    recommended: 'Short coats and maintenance visits',
    inclusions: ['Bath and blow dry', 'Brush-out', 'Nail trim', 'Ear cleaning'],
  },
  {
    name: 'Premium Package',
    price: '$95+',
    duration: '90-150 min',
    recommended: 'Most dogs needing a full refresh',
    inclusions: ['Full grooming haircut', 'Bath and blow dry', 'Nails and ears', 'Teeth brushing'],
    featured: true,
  },
  {
    name: 'Luxury Package',
    price: '$135+',
    duration: '2-3 hours',
    recommended: 'Long coats, style trims, and special occasions',
    inclusions: ['Premium full groom', 'Deep conditioning', 'Paw balm', 'Photo-ready finish'],
  },
  {
    name: 'VIP Spa Package',
    price: '$175+',
    duration: '3 hours',
    recommended: 'Pets who deserve the full boutique experience',
    inclusions: ['Luxury groom', 'De-shedding or coat mask', 'Teeth care', 'Priority appointment'],
  },
]

export const gallery: GalleryItem[] = [
  { title: 'Teddy Bear Trim', category: 'Transformations', image: images.grooming },
  { title: 'Fresh Spa Finish', category: 'Spa Days', image: images.bath },
  { title: 'First Puppy Visit', category: 'Puppies', image: images.puppy },
  { title: 'Boutique Grooming Moment', category: 'Salon Moments', image: images.salonDog },
  { title: 'Coat Reset', category: 'Transformations', image: images.towelDog },
  { title: 'Calm Bath Day', category: 'Spa Days', image: images.nailCare },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Maya Thompson',
    pet: 'Oliver',
    rating: 5,
    review:
      'Oliver used to shake before grooming appointments. The team moved at his pace, explained everything, and he came home relaxed and beautiful.',
    image: images.ownerCare,
  },
  {
    name: 'Jordan Lee',
    pet: 'Luna',
    rating: 5,
    review:
      'The salon is spotless, the updates are thoughtful, and Luna always looks like she stepped out of a boutique pet magazine.',
    image: images.grooming,
  },
  {
    name: 'Priya Santos',
    pet: 'Mochi',
    rating: 5,
    review:
      'They noticed a small skin irritation during grooming and recommended we check with our vet. That level of care earned our trust.',
    image: images.vetCare,
  },
]

export const team: TeamMember[] = [
  {
    name: 'Avery Collins',
    role: 'Lead Groomer',
    bio: 'Specializes in breed-aware cuts, senior pets, and calm handling for anxious dogs.',
    image: images.grooming,
  },
  {
    name: 'Nina Patel',
    role: 'Pet Spa Specialist',
    bio: 'Creates soothing bath and coat-care routines with a focus on sensitive skin.',
    image: images.bath,
  },
  {
    name: 'Marcus Rivera',
    role: 'Client Care Coordinator',
    bio: 'Keeps appointments smooth, pet notes detailed, and owners informed from drop-off to pickup.',
    image: images.ownerCare,
  },
]

export const blogPosts: BlogPost[] = [
  {
    title: 'How Often Should Your Dog Be Groomed?',
    category: 'Grooming',
    excerpt:
      'Coat type, lifestyle, and skin sensitivity all matter. Here is how to build a schedule that keeps grooming low-stress.',
    readTime: '4 min read',
    image: images.grooming,
  },
  {
    title: 'Seasonal Paw Care for Hot Sidewalks',
    category: 'Health',
    excerpt:
      'Warm weather can be rough on paws. Learn when to walk, how to check pads, and when balm can help.',
    readTime: '3 min read',
    image: images.petPortrait,
  },
  {
    title: 'Nutrition Habits That Support a Healthy Coat',
    category: 'Nutrition',
    excerpt:
      'A shiny coat starts before the bath. Simple nutrition habits can support skin comfort and coat quality.',
    readTime: '5 min read',
    image: images.towelDog,
  },
  {
    title: 'Helping Puppies Love Their First Groom',
    category: 'Training',
    excerpt:
      'Short positive practice sessions at home make salon visits easier and more confident.',
    readTime: '4 min read',
    image: images.puppy,
  },
]

export const stats = [
  ['Pets Groomed', 5000, '+'],
  ['Happy Clients', 1200, '+'],
  ['Years Experience', 10, '+'],
  ['Average Rating', 4.9, ''],
] as const
