import { posts } from '@/db'
import { Post } from '@/components/post'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <div className='prose container flex flex-col items-center min-h-screen mx-auto p-8'>
      <Header />
      <main>
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
      </main>
    </div>
  )
}
