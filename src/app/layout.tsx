import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import './globals.css'

const title = '최영진의 개발 노트'
const description = '웹 개발의 A to Z를 탐구하는 기술 블로그. 실전에서 마주한 문제들과 그 해결 과정을 공유합니다.'
export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
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
