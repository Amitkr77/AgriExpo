import { Suspense } from 'react'
import GAPageTracker from './components/ga-page-tracker'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* other components */}

        <Suspense fallback={null}>
          <GAPageTracker />
        </Suspense>

        {children}
      </body>
    </html>
  )
}