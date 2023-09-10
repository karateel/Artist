/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports = {
  cleanDistDir: true,
  images: {
    domains: ['raw.githubusercontent.com', 'farm66.staticflickr.com'],
  },
  transpilePackages: ['@mui/material'],
  i18n: {
    defaultLocale: 'uk-UA',
    locales: ['en-US', 'uk-UA'],
  },
  ...withPWA({
    dest: 'public',
    register: true,
    cacheOnFrontEndNav: true,
  }),
}
