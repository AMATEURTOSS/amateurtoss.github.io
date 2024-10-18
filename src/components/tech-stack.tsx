/*
 * 아이콘 추가 필요 시 아래 링크에서 찾아서 추가
 * https://github.com/Ileriayo/markdown-badges
 */
type IconType = keyof typeof IconLinkMap

const IconLinkMap = {
  'react': 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
  'typescript': 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
  'nestjs': 'https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white',
  'postgresql': 'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white',
  'socket.io': 'https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101',
  'sass': 'https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white',
} as const

type TechStackProps = {
  name: string
  stack: IconType[]
}

export function TechStack ({ name, stack }: TechStackProps) {
  return (
    <ul>
      <li>{name}</li>
      <ol>
        <li className='flex gap-1'>
          {
            stack.map((tech) => <img key={tech} src={IconLinkMap[tech]} alt={tech} className='m-0'/>)
          }
        </li>
      </ol>
    </ul>
  )
}
