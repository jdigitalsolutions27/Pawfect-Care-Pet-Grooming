import { Mail, MapPin, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../components/common/Button'
import { Section } from '../components/common/Section'
import { Seo } from '../components/common/Seo'
import { business } from '../data/site'
import { type ContactPayload, submitContact } from '../services/api'
import { emailHref, phoneHref } from '../utils/format'

export function ContactPage() {
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactPayload>()

  const onSubmit = async (values: ContactPayload) => {
    await submitContact(values)
    setSent(true)
    reset()
  }

  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact Pawfect Care Pet Grooming for appointments, questions, business hours, location, and pet care support."
      />
      <Section className="bg-sky-50" eyebrow="Contact" title="We’d Love To Meet Your Pet">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <aside className="rounded-[8px] bg-white p-6 premium-shadow">
            <h2 className="text-2xl font-black text-slate-950">Salon Details</h2>
            <div className="mt-6 grid gap-5">
              <a className="flex gap-3 text-slate-700" href={phoneHref(business.phone)}>
                <Phone className="h-5 w-5 text-teal-700" />
                {business.phone}
              </a>
              <a className="flex gap-3 text-slate-700" href={emailHref(business.email)}>
                <Mail className="h-5 w-5 text-teal-700" />
                {business.email}
              </a>
              <p className="flex gap-3 text-slate-700">
                <MapPin className="h-5 w-5 shrink-0 text-teal-700" />
                {business.address}
              </p>
            </div>
            <h3 className="mt-8 text-lg font-black text-slate-950">Business Hours</h3>
            <div className="mt-4 grid gap-3">
              {business.hours.map(([day, hours]) => (
                <div className="flex justify-between gap-4 border-b border-slate-100 pb-3 text-sm" key={day}>
                  <span className="font-bold text-slate-700">{day}</span>
                  <span className="text-slate-600">{hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 overflow-hidden rounded-[8px] bg-teal-50">
              <iframe
                className="h-72 w-full border-0"
                title="Pawfect Care location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=San%20Diego%20CA&output=embed"
              />
            </div>
          </aside>

          <div className="rounded-[8px] bg-white p-6 premium-shadow md:p-8">
            {sent ? (
              <div className="py-14 text-center">
                <h2 className="text-3xl font-black text-slate-950">Message sent.</h2>
                <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-600">
                  Thanks for reaching out. Our client care team will reply soon.
                </p>
                <Button className="mt-8" onClick={() => setSent(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
                <Field label="Name" error={errors.name?.message}>
                  <input className="input" {...register('name', { required: 'Name is required' })} />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input
                    className="input"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                    })}
                  />
                </Field>
                <Field label="Phone">
                  <input className="input" {...register('phone')} />
                </Field>
                <Field label="Subject" error={errors.subject?.message}>
                  <input className="input" {...register('subject', { required: 'Subject is required' })} />
                </Field>
                <Field label="Message" error={errors.message?.message} className="md:col-span-2">
                  <textarea className="input min-h-36" {...register('message', { required: 'Message is required' })} />
                </Field>
                <div className="md:col-span-2">
                  <Button className="w-full" type="submit">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  )
}

function Field({
  label,
  error,
  children,
  className = '',
}: {
  label: string
  error?: string
  children: ReactNode
  className?: string
}) {
  return (
    <label className={`grid gap-2 text-sm font-bold text-slate-700 ${className}`}>
      {label}
      {children}
      {error && <span className="text-sm text-rose-600">{error}</span>}
    </label>
  )
}
