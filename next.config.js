/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'm.media-amazon.com'
        }, {
          protocol: 'https',
          hostname: 'cdn.sabancidx.com'
        }
      ],
    }
  }
  
  module.exports = nextConfig