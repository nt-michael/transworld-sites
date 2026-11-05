/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  async redirects() {
    return [
      { source: '/', destination: '/en', permanent: false },
      { source: '/:locale(en|fr|es)/network', destination: '/:locale/about', permanent: false },
      { source: '/:locale(en|fr|es)/network/:rest*', destination: '/:locale/procurement-sourcing', permanent: false },
      // Old URLs from the current site
      { source: '/:locale(en|fr|es)/products', destination: '/:locale/global-trade/products', permanent: true },
      { source: '/:locale(en|fr|es)/products/:slug', destination: '/:locale/global-trade/products/:slug', permanent: true },
      { source: '/:locale(en|fr|es)/services', destination: '/:locale/global-trade/services', permanent: true },
    ];
  },
};

export default nextConfig;
