import {
  Award,
  Bath,
  Bone,
  CalendarCheck,
  Heart,
  Scissors,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Syringe,
  WandSparkles,
} from 'lucide-react'
import type { IconMap, IconName } from '../../types'

const icons: IconMap = {
  Award,
  Bath,
  Bone,
  CalendarCheck,
  Heart,
  Scissors,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Syringe,
  WandSparkles,
}

export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const Component = icons[name]
  return <Component className={className} aria-hidden="true" />
}
