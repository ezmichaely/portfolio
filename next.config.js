/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'getbootstrap.com',
      'cdn-icons-png.flaticon.com',
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/lodong",
  //       destination: "https://lodongsite.vercel.app",
  //       permanent: false,
  //     },
  //   ];
  // },
}

module.exports = nextConfig
