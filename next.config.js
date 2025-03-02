/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingExcludes: {
      '*': ['**/*'],
    },
  },
}

module.exports = nextConfig 