import Link from 'next/link'
import { portfolios } from '@/db'
import { Post } from '@/components/post'

export default function Portfolios() {
  return (
    <div className='prose container flex flex-col items-center min-h-screen mx-auto py-8'>
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
      <main>
        <article>
          <h2>portfolios</h2>
          <ul>
            {
              portfolios.map((post) => (
                <Post key={post.href} {...post} />
              ))
            }
          </ul>
        </article>
      </main>
    </div>
  )
}
