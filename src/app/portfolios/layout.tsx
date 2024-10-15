import type { PropsWithChildren } from 'react'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <article className='prose container min-h-screen mx-auto p-8'>
      {children}
    </article>
  )
}
