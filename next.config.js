/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'getbootstrap.com',
      'cdn-icons-png.flaticon.com',
    ],
  },
  async redirects() {
    return [
      {
        source: "/lodong",
        destination:
          "https://blog.dundermifflin.com",
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
