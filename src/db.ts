export type Post = {
  title: string
  description?: string
  href?: string
  createdAt: string
}

export const posts: Post[] = [
  {
    title: '홈서버 구축기',
    createdAt: '2024-09-01',
    href: '/posts/2',
  },
  {
    title: '차세대 이미지 포멧 AVIF에 관하여',
    createdAt: '2024-06-07',
    href: '/posts/1',
  },
]
