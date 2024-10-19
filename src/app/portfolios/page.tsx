import { portfolios } from '@/db'
import { Post } from '@/components/post'
import { Header } from '@/components/header'

export default function Portfolios() {
  return (
    <div className='prose container flex flex-col items-center min-h-screen mx-auto p-8'>
      <Header />
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
