/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  async redirects() {
    return [
      { source: '/', destination: '/en', permanent: false },
      { source: '/:locale(en|fr|es)/network', destination: '/:locale/about', permanent: false },
      { source: '/:locale(en|fr|es)/network/:rest*', destination: '/:locale/about', permanent: false },
      // Property Services and Procurement & Sourcing moved to a separate site.
      // TODO: point these at that site's domain once it is chosen.
      { source: '/:locale(en|fr|es)/property-services/:rest*', destination: '/:locale', permanent: false },
      { source: '/:locale(en|fr|es)/procurement-sourcing/:rest*', destination: '/:locale', permanent: false },
      // Old URLs from the current site
      // One product listing: the Global Trade hub. The old list page redirects there.
      { source: '/:locale(en|fr|es)/global-trade/products', destination: '/:locale/global-trade#products', permanent: true },
      { source: '/:locale(en|fr|es)/products', destination: '/:locale/global-trade#products', permanent: true },
      { source: '/:locale(en|fr|es)/products/:slug', destination: '/:locale/global-trade/products/:slug', permanent: true },
      { source: '/:locale(en|fr|es)/services', destination: '/:locale/global-trade/services', permanent: true },
    ];
  },
};

export default nextConfig;
