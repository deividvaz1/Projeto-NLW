const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      '10.52.4.191',
      'github.com',
      'ik.imagekit.io',
      'nlw-server-ivory.vercel.app', // Adicione o domínio aqui
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://projeto-nlw-five.vercel.app/',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
