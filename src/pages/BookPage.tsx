import { CalendarCheck } from 'lucide-react'
import type { ReactNode } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../components/common/Button'
import { Section } from '../components/common/Section'
import { Seo } from '../components/common/Seo'
import { services } from '../data/site'
import { type BookingPayload, submitBooking } from '../services/api'

export function BookPage() {
  const [success, setSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingPayload>()

  const onSubmit = async (values: BookingPayload) => {
    await submitBooking(values)
    setSuccess(true)
    reset()
  }

  return (
    <>
      <Seo
        title="Book Appointment"
        description="Book a grooming appointment with Pawfect Care Pet Grooming using our quick, validated appointment request form."
      />
      <Section className="bg-[#fffaf1]" eyebrow="Book Appointment" title="Tell Us About Your Pet">
        <div className="mx-auto max-w-4xl rounded-[8px] bg-white p-6 premium-shadow md:p-8">
          {success ? (
            <div className="py-12 text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <CalendarCheck className="h-8 w-8" />
              </span>
              <h2 className="mt-6 text-3xl font-black text-slate-950">Appointment request received.</h2>
              <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
                We’ll review your pet's details and reach out shortly to confirm timing, service fit,
                and any prep notes.
              </p>
              <Button className="mt-8" onClick={() => setSuccess(false)}>
                Book Another Pet
              </Button>
            </div>
          ) : (
            <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
              <Field label="Owner Name" error={errors.ownerName?.message}>
                <input className="input" {...register('ownerName', { required: 'Owner name is required' })} />
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
              <Field label="Phone" error={errors.phone?.message}>
                <input className="input" {...register('phone', { required: 'Phone is required' })} />
              </Field>
              <Field label="Pet Name" error={errors.petName?.message}>
                <input className="input" {...register('petName', { required: 'Pet name is required' })} />
              </Field>
              <Field label="Pet Type" error={errors.petType?.message}>
                <select className="input" {...register('petType', { required: 'Pet type is required' })}>
                  <option value="">Select pet type</option>
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Other small pet</option>
                </select>
              </Field>
              <Field label="Breed" error={errors.breed?.message}>
                <input className="input" {...register('breed', { required: 'Breed is required' })} />
              </Field>
              <Field label="Age" error={errors.age?.message}>
                <input className="input" {...register('age', { required: 'Age is required' })} />
              </Field>
              <Field label="Requested Service" error={errors.requestedService?.message}>
                <select className="input" {...register('requestedService', { required: 'Choose a service' })}>
                  <option value="">Select service</option>
                  {services.map((service) => (
                    <option key={service.slug}>{service.title}</option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred Date" error={errors.preferredDate?.message}>
                <input className="input" type="date" {...register('preferredDate', { required: 'Preferred date is required' })} />
              </Field>
              <Field label="Notes" className="md:col-span-2">
                <textarea
                  className="input min-h-32"
                  {...register('notes')}
                  placeholder="Temperament, allergies, matting, preferred style, or anything we should know."
                />
              </Field>
              <div className="md:col-span-2">
                <Button className="w-full" type="submit">
                  {isSubmitting ? 'Sending Request...' : 'Request Appointment'}
                </Button>
              </div>
            </form>
          )}
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
