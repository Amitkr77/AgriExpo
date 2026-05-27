'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function GAPageTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [url, setUrl] = useState(pathname)

  useEffect(() => {
    const queryString = searchParams?.toString()
    setUrl(queryString ? `${pathname}?${queryString}` : pathname)
  }, [pathname, searchParams])

  useEffect(() => {
    if (!window.gtag || !GA_ID) return

    window.gtag('config', GA_ID, {
      page_path: url,
    })
  }, [url])

  return null
}