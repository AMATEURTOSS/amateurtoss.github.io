export type Post = {
  title: string
  description?: string
  href?: string
  createdAt: string
}

export const posts: Post[] = [
  {
    title: 'Node.js, 싱글 스레드 약점 극복하기 (PM2)',
    createdAt: '2024-10-19',
    href: '/posts/3'
  },
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

export const portfolios: Post[] = [
  {
    title: '브릿지 프로젝트',
    description: '초, 중학생을 대상으로 한 공부 컨설팅 서비스',
    createdAt: '2023.03 - 2024.11',
    href: '/portfolios/4'
  },
  // {
  //   title: 'Get From Korea',
  //   description: '한국 상품을 더 쉽게 직구할 수 있도록 도와주는 직구 대행 서비스',
  //   createdAt: '2022.09 - 2023.02',
  //   href: '/portfolios/3'
  // },
  {
    title: '트채통',
    description: '스트리밍중인 트위치 방송의 각종 채팅관련 통계를 보여주는 서비스',
    createdAt: '2021.11 - 2022.01',
    href: '/portfolios/2'
  },
  {
    title: 'ft_transcendence',
    description: '탁구 게임 서비스',
    createdAt: '2021.06 - 2022.11',
    href: '/portfolios/1'
  },
]
