import { AppBar, Toolbar, Typography } from '@mui/material'
import ANav from "./a-nav"

export default function AHeader() {
  return (
    <AppBar position="static" sx={{ px: 3 }}>
      <Toolbar disableGutters sx={{ gap: 2 }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'white',
            textDecoration: 'none',
            justifyContent: 'center',
          }}
        >
          LOGO
        </Typography>
        <ANav />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>
      </Toolbar>
    </AppBar>
  )
}    