import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blog',
  verification: {
    google: 'OwHKPNKdBwgpiIeHCPodU73heHdBhAoM7A9AphpQxbI'
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='kr'>
      <body className='font-wanted'>
        {children}
      </body>
    </html>
  )
}
