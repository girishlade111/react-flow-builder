/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/react-flow-builder',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
