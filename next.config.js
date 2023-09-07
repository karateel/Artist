/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const nextConfig = {
  images: {
    domains: [
      'raw.githubusercontent.com',
      'farm66.staticflickr.com'
    ],
  },
  i18n: {
    localeDetection: true,
    defaultLocale: 'ua',
    locales: ['us', 'ua']
  },
  ...withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true
  })
}

module.exports = nextConfig
