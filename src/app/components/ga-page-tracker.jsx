'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function GAPageTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!window.gtag || !GA_ID) return

    const queryString = searchParams.toString()
    const url = queryString ? `${pathname}?${queryString}` : pathname

    window.gtag('config', GA_ID, {
      page_path: url,
    })
  }, [pathname, searchParams])

  return null
}