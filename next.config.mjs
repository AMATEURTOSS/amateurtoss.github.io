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
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://amateurtoss.github.io' : ''
}

export default withMdx(nextConfig)
