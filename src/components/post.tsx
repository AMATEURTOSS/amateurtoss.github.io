import type { Post } from '@/db'

export function Post ({ title, description = '', createdAt, href = '/' }: Post) {
  return (
    <li className='grid items-start gap-1'>
      <a className='flex items-center gap-1.5' href={href}>
        <span className='font-medium underline underline-offset-4'>
          {title}
        </span>
        <span>{'-'}</span>
        <span className='text-xs tracking-tight text-foreground underline'>
          {createdAt}
        </span>
      </a>
      <span className='text-sm text-foreground'>
        {description}
      </span>
    </li>
  )
}
