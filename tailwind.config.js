/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        'Montserrat',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
      ],
    },
    colors: {
      primary: '#FFCB74',
      secondary: '#F6F6F6',
      predark: '#2F2F2F',
      black: '#111111',
    },
    screens: {
      xs: '0px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    backgroundColor: {
      primary: '#FFCB74',
      secondary: '#F6F6F6',
    },
  },
  plugins: [],
}
