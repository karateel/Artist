'use client'

import { ThemeProvider } from '@mui/material/styles'
import '@fontsource/montserrat'
import { AnimatePresence, motion } from 'framer-motion';
import { theme } from './plugins/mui'
import { useEffect } from 'react';

export default function MyApp({ children }: {
  children: React.ReactNode
}) {
  
  useEffect(() => {
    if('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('Service worker registered at scope:', registration.scope)
      }).catch((error) => {
        console.log('Service worker registration failed: ', error)
      })
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 2.25 }}
          className={'flex h-screen flex-col'}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}