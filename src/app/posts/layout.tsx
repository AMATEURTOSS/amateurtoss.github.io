import type { PropsWithChildren } from 'react'
import Link from 'next/link'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <article className='prose container min-h-screen mx-auto p-8'>
      <Link href='/' className='text-xs'>{'<'} 돌아가기</Link>
      {children}
    </article>
  )
}
