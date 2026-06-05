import { Camera, Mail, MapPin, Phone, Scissors, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, navItems } from '../../data/site'
import { emailHref, phoneHref } from '../../utils/format'

export function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-500">
              <Scissors className="h-5 w-5" />
            </span>
            <div>
              <p className="font-black">{business.name}</p>
              <p className="text-sm text-sky-100">Luxury grooming with a gentle touch.</p>
            </div>
          </div>
          <p className="mt-6 max-w-md leading-7 text-slate-300">
            A calm, spotless, boutique grooming salon built for pets who deserve thoughtful
            handling and owners who want clear communication.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="rounded-full bg-white/10 p-3" href="#" aria-label="Instagram">
              <Camera className="h-5 w-5" />
            </a>
            <a className="rounded-full bg-white/10 p-3" href="#" aria-label="Facebook">
              <Share2 className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-black">Explore</h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link className="text-sm font-semibold text-slate-300 hover:text-white" key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-black">Visit</h2>
          <div className="mt-5 grid gap-4 text-sm text-slate-300">
            <a className="flex gap-3 hover:text-white" href={phoneHref(business.phone)}>
              <Phone className="h-5 w-5 text-teal-300" />
              {business.phone}
            </a>
            <a className="flex gap-3 hover:text-white" href={emailHref(business.email)}>
              <Mail className="h-5 w-5 text-teal-300" />
              {business.email}
            </a>
            <p className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-teal-300" />
              {business.address}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-400">
        © {new Date().getFullYear()} Pawfect Care Pet Grooming. All rights reserved.
      </div>
    </footer>
  )
}
