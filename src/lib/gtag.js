export const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const trackEvent = (
  action,
  category,
  label,
  value
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  }
}