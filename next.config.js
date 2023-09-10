const isDev = process.env.NODE_ENV !== 'production'

const withPWA = require('@imbios/next-pwa')({
  dest: 'public',
  cacheOnFrontEndNav: true,
  register: false,
  disable: isDev,
  exclude: [
    ({ asset, compilation }) => {
      if (
        asset.name.startsWith('server/') ||
        asset.name.match(
          /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
        )
      ) {
        return true
      }
      if (isDev && !asset.name.startsWith('static/runtime/')) {
        return true
      }
      return false
    },
  ],
})

/** @type {import('next').NextConfig} */

module.exports = withPWA({
  cleanDistDir: true,
  images: {
    domains: ['raw.githubusercontent.com', 'farm66.staticflickr.com'],
  },
  transpilePackages: ['@mui/material'],
  experimental: {
    appDir: true,
  },
  // i18n: {
  //   defaultLocale: 'uk-UA',
  //   locales: ['en-US', 'uk-UA'],
  // },
})
