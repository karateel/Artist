'use client'

import { useState } from 'react'
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
                
const classes = 'hover:text-black hover:bg-primary'

interface NavigationItems {
    navItems: string[],
    href: string[]
} 

const navigation: NavigationItems = {
    navItems: ['Home', 'About', 'Masters', 'Salons', 'Gallery', 'Contact'],
    href: ['/', '/about', '/masters', '/salons', '/gallery', '/contact']
}

export default function ANav() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return (
    <>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, backgroundColor: '#111111' }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="secondary"
        >
          <MenuIcon/>
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
        {navigation.navItems.map((item, index) => (
            <MenuItem
            key={item}
            className={classes}
            >
                <Typography
                textAlign='center'
                >
                    <Link href={navigation.href[index]}>
                        {item}
                    </Link>
                </Typography>
            </MenuItem>
        ))}
        </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {navigation.navItems.map((item, index) => (
            <MenuItem
            key={item}
            className={classes}
            >
                <Typography
                textAlign='center'
                >
                    <Link href={navigation.href[index]}>
                        {item}
                    </Link>
                </Typography>
            </MenuItem>
        ))}
        </Box>
    </>
    )
}