/** @type {import('next').NextConfig} */
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
  }
}

module.exports = nextConfig
