import type { Post } from '@/db'
import Link from 'next/link'

export function Post ({ title, description = '', createdAt, href = '/' }: Post) {
  return (
    <li className='grid items-start gap-1'>
      <Link className='flex items-center gap-1.5 no-underline' href={href}>
        <span className='font-medium underline underline-offset-4'>
          {title}
        </span>
        <span>{'-'}</span>
        <span className='text-xs tracking-tight text-foreground flex-shrink-0'>
          {createdAt}
        </span>
      </Link>
      <span className='text-sm text-foreground'>
        {description}
      </span>
    </li>
  )
}
