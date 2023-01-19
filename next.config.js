/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['cdn.sanity.io', 'https://portfolio-rrm-demo.sanity.studio'],
  }
}

module.exports = nextConfig
