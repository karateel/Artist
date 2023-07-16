'use client'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import '@fontsource/montserrat'


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
      {children}
    </ThemeProvider>
  );
}