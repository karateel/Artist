'use client'

import { useState } from 'react'
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavigationItems } from '@/app/interfaces/header';
import BookingBtn from './boooking';

const classes = 'hover:text-black hover:bg-primary'

const navigation: NavigationItems[] = [
  { href: '/', navText: 'Home' },
  { href: '/about', navText: 'About' },
  { href: '/team', navText: 'Team' },
  { href: '/salons', navText: 'Salons' },
  { href: '/gallery', navText: 'Gallery' },
  { href: '/contact', navText: 'Contact' }
]

export default function ANav() {
  const pathname = usePathname()

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, backgroundColor: '#111111', }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="secondary"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {navigation.map((item) => (
            <MenuItem
              onClick={() => { handleCloseNavMenu() }}
              key={item.href}
              className={`${classes} ${pathname === item.href ? 'border-solid border-b-primary border-b-2' : ''}`}
            >
              <Typography
                textAlign='center'
              >
                <Link
                  href={item.href} replace prefetch>
                  {item.navText}
                </Link>
              </Typography>
            </MenuItem>
          ))}
          <BookingBtn/>
        </Menu>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {navigation.map((item) => (
          <MenuItem
            key={item.navText}
            className={`${classes} ${pathname === item.href ? 'border-solid border-b-primary border-b-2' : ''}`}
          >
            <Typography
              textAlign='center'
            >
              <Link
                href={item.href} replace prefetch>
                {item.navText}
              </Link>
            </Typography>
          </MenuItem>
        ))}
        <BookingBtn/>
      </Box>
    </>
  )
}