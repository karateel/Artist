const withPWA = require('@imbios/next-pwa')({
  dest: 'public',
  cacheOnFrontEndNav: true,
  register: false,
})

/** @type {import('next').NextConfig} */

module.exports = withPWA({
  cleanDistDir: true,
  images: {
    domains: ['raw.githubusercontent.com', 'farm66.staticflickr.com'],
  },
  transpilePackages: ['@mui/material'],
  experimental : {
    appDir: true,
  }
  // i18n: {
  //   defaultLocale: 'uk-UA',
  //   locales: ['en-US', 'uk-UA'],
  // },
})
