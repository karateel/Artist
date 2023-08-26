import './styles/globals.css'
import type { Metadata } from 'next'
import AHeader from './components/header/a-header'
import MyApp from './_app'
import { Montserrat } from 'next/font/google'
import { Container } from '@mui/material'
import AFooter from './components/footer/a-footer'

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Artist',
  description: 'By K.Yurov',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className={`${montserrat.className}`}>
        <MyApp>
          <AHeader/>
          <Container component='main' maxWidth="xl"
            sx={{ py: 4, position: 'relative', flex: '1'}}
          >
            {children}
          </Container>
          <AFooter/>
        </MyApp>
      </body>
    </html>
  )
}
