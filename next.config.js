/** @type {import('next').NextConfig} */
const nextConfig = {

  env: {
    apiURL: 'https://aroundq-api.onrender.com/',
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
