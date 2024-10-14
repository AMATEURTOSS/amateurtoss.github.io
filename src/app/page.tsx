import Link from 'next/link'
import { posts } from '@/db'
import { Post } from '@/components/post'

export default function Home() {
  return (
    <div className='container flex flex-col items-center min-h-screen mx-auto py-8'>
      <header className='flex items-center gap-2 font-medium'>
        <Link className='underline underline-offset-4' href='https://github.com/AMATEURTOSS' target='_blank' rel='noreferrer'>
          blog
        </Link>
        {'/'}
        <Link className='underline underline-offset-4' href='https://github.com/AMATEURTOSS' target='_blank' rel='noreferrer'>
          github
        </Link>
      </header>
      <main className='flex-1 px-8'>
        <div className='container flex flex-col space-y-2'>
          <article className='pt-6'>
            <h2 className='text-lg tracking-tighter'>
              posts
            </h2>
            <ul className='space-y-4 py-4'>
              {
                posts.map((post) => (
                  <Post key={post.href} {...post} />
                ))
              }
            </ul>
          </article>
        </div>
      </main>
    </div>
  )
}
