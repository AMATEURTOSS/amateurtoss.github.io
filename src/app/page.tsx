import Link from 'next/link'
import { posts } from '@/db'
import { Post } from '@/components/post'

export default function Home() {
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
      </header>
      <main>
        <div>
          <article>
            <h2>posts</h2>
            <ul>
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
