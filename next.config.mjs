import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'

const withMdx = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  pageExtensions: ['tsx', 'mdx'],
}

export default withMdx(nextConfig)
