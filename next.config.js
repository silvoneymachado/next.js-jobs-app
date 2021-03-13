const isProd = process.env.NODE_ENV === 'production'

module.exports = {
   env: {
      title: 'My Title',
   },
   basePath: '/app',
   async rewrites() {
    return [
      {
        source: '/ab',
        destination: '/about',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'x-custom-header-1',
            value: 'my custom header 1',
          },
          {
            key: 'x-custom-header-2',
            value: 'my custom header 2',
          },
        ],
      },
    ]
  },
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],  
  assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
  poweredByHeader: false,
}