import { CalendarCheck, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business } from '../../data/site'
import { phoneHref } from '../../utils/format'

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-3">
      <Link
        className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white shadow-xl shadow-teal-900/20 transition hover:bg-teal-700"
        to="/book"
        aria-label="Book appointment"
      >
        <CalendarCheck className="h-5 w-5" />
      </Link>
      <a
        className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white shadow-xl shadow-sky-900/20 transition hover:bg-sky-600"
        href={phoneHref(business.phone)}
        aria-label="Call Pawfect Care"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  )
}
