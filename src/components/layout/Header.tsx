import { Menu, Phone, Scissors, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { business, navItems } from '../../data/site'
import { phoneHref } from '../../utils/format'
import { Button } from '../common/Button'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-teal-100/70 bg-white/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" to="/" aria-label="Pawfect Care home">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-600 text-white">
            <Scissors className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-base font-black text-slate-950">Pawfect Care</span>
            <span className="block text-xs font-bold uppercase text-teal-700">Pet Grooming</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-bold transition ${
                  isActive ? 'bg-teal-50 text-teal-800' : 'text-slate-700 hover:bg-sky-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-teal-700 transition hover:bg-teal-50"
            href={phoneHref(business.phone)}
            aria-label="Call Pawfect Care"
          >
            <Phone className="h-5 w-5" />
          </a>
          <Button to="/book">Book</Button>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-slate-900 lg:hidden"
          type="button"
          aria-label="Open navigation menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-slate-950/30 lg:hidden" onClick={() => setOpen(false)}>
          <div
            className="ml-auto flex h-full w-full max-w-sm flex-col bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-black text-slate-950">Menu</span>
              <button
                className="rounded-full bg-sky-50 p-3 text-slate-900"
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-8 grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-[8px] px-4 py-3 text-base font-bold ${
                      isActive ? 'bg-teal-50 text-teal-800' : 'text-slate-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <Button className="mt-8" to="/book">
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
