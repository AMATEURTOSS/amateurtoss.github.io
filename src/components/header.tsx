import Link from 'next/link'

export function Header () {
  return (
    <header className='flex items-center gap-2 font-medium'>
      <Link href='https://github.com/AMATEURTOSS' target='_blank' rel='noreferrer'>
        blog
      </Link>
      {'/'}
      <Link href='https://github.com/AMATEURTOSS' target='_blank' rel='noreferrer'>
        github
      </Link>
      {'/'}
      <Link href='/portfolios' target='_blank' rel='noreferrer'>
        portfolio
      </Link>
    </header>
  )
}
