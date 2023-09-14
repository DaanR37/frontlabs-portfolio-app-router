/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      appDir: true,
   },
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/DaanR37/frontlabs-portfolio-app-router/main/public/images/**',
         },
      ],
   },
}

module.exports = nextConfig
