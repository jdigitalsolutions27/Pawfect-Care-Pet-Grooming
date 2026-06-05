import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  onClick?: () => void
}

const variants = {
  primary: 'bg-teal-600 text-white shadow-lg shadow-teal-900/15 hover:bg-teal-700',
  secondary: 'bg-white text-slate-900 ring-1 ring-teal-100 hover:bg-sky-50',
  ghost: 'bg-transparent text-teal-800 hover:bg-teal-50',
}

export function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-300 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    )
  }

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    )
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
