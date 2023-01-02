/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.istockphoto.com', 'cdn.pixabay.com', 'i.imgur.com']
  },
  async rewrites() {
    return [
      {
        source: '/shopItem',
        destination: 'http://api2-env.eba-zzvw8krp.ap-northeast-2.elasticbeanstalk.com/shopItem'
      },
      {
        source: '/styleItem',
        destination: 'http://api2-env.eba-zzvw8krp.ap-northeast-2.elasticbeanstalk.com/styleItem'
      }
    ];
  }
};

module.exports = nextConfig;
