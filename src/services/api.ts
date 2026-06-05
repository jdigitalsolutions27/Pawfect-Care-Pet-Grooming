import axios from 'axios'

export type BookingPayload = {
  ownerName: string
  email: string
  phone: string
  petName: string
  petType: string
  breed: string
  age: string
  requestedService: string
  preferredDate: string
  notes?: string
}

export type ContactPayload = {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  timeout: 8000,
})

const demoResponse = async <T>(payload: T) => {
  await new Promise((resolve) => setTimeout(resolve, 650))
  return {
    id: `pawfect-${Date.now()}`,
    receivedAt: new Date().toISOString(),
    payload,
  }
}

export async function submitBooking(payload: BookingPayload) {
  if (!import.meta.env.VITE_API_BASE_URL) {
    return demoResponse(payload)
  }

  const response = await api.post('/bookings', payload)
  return response.data
}

export async function submitContact(payload: ContactPayload) {
  if (!import.meta.env.VITE_API_BASE_URL) {
    return demoResponse(payload)
  }

  const response = await api.post('/contacts', payload)
  return response.data
}
