import type { PropsWithChildren } from 'react'
import './post.css'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <article className='container min-h-screen mx-auto p-8'>
      {children}
    </article>
  )
}
