/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.istockphoto.com', 'cdn.pixabay.com', 'i.imgur.com']
  }
};

module.exports = nextConfig;
