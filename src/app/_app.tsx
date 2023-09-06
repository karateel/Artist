'use client'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import '@fontsource/montserrat'
import { AnimatePresence, motion } from 'framer-motion';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFCB74',
      dark: '#FFCB74'
    },
    secondary: {
      main: '#F6F6F6',
      dark: '#F6F6F6',
    },
    info: {
      main: '#2F2F2F',
      dark: '#2F2F2F',
    },
    success: {
      main: '#111111',
      dark: '#111111',
    }
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({ }) => ({
          backgroundColor: '#111111'
        })
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#F6F6F6',
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#111111'
        }
      }
    }
  }
});

export default function MyApp({ children }: {
  children: React.ReactNode
}) {
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