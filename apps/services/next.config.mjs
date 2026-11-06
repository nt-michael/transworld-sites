/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@tw/ui'],
  images: { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
  async redirects() {
    return [{ source: '/', destination: '/en', permanent: false }];
  },
};
export default nextConfig;
