/*
 * 아이콘 추가 필요 시 아래 링크에서 찾아서 추가
 * https://github.com/Ileriayo/markdown-badges
 * 아이콘이 없을 시
 * https://img.shields.io/badge/{안에 넣을 이름}-{색깔}.svg?style=for-the-badge
 * 위와 같은 식으로 쉴드 생성
 */
type IconType = keyof typeof IconLinkMap

const IconLinkMap = {
  'react': 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
  'typescript': 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
  'nestjs': 'https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white',
  'postgresql': 'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white',
  'socket.io': 'https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101',
  'sass': 'https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white',
  'python': 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54',
  'pandas': 'https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white',
  'konlpy': 'https://img.shields.io/badge/konlpy-red.svg?style=for-the-badge',
  'golang': 'https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white',
  'gin': 'https://img.shields.io/badge/gin-%2300ADD8.svg?style=for-the-badge',
  'nextjs': 'https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white',
  'react-native': 'https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
  'material-ui': 'https://img.shields.io/badge/material--ui-blue.svg?style=for-the-badge',
  'expressjs': 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
  'mongodb': 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',
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
