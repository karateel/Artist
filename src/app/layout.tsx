import './styles/globals.css'
import type { Metadata } from 'next'
import AHeader from './components/header/a-header'
import MyApp from './_app'
import { Montserrat } from 'next/font/google'
import { Container } from '@mui/material'


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
      <body className={`${montserrat.className}`}>
        <MyApp>
          <AHeader />
          <Container maxWidth="xl"
          sx={{ py: 4 }}
          >
            {children}
          </Container>
        </MyApp>
      </body>
    </html>
  )
}
