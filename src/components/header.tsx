import Link from 'next/link'

export function Header () {
  return (
    <header className='flex items-center gap-2 font-medium'>
      <Link href='/'>
        blog
      </Link>
      {'/'}
      <Link href='https://github.com/AMATEURTOSS'>
        github
      </Link>
      {'/'}
      <Link href='/portfolios'>
        portfolio
      </Link>
    </header>
  )
}
