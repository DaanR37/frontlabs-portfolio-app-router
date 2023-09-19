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
   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Exclude manifest.json from being loaded as a module
      config.module.rules.push({
         test: /manifest\.json$/,
         type: "javascript/auto",
         use: [],
      });

      return config;
   },
}

module.exports = nextConfig
