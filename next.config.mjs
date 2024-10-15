import nextMdx from '@next/mdx'

const withMdx = nextMdx()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  pageExtensions: ['tsx', 'mdx'],
}

export default withMdx(nextConfig)
