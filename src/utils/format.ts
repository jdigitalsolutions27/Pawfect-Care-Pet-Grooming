export function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}

export function emailHref(email: string) {
  return `mailto:${email}`
}
