'use client'

import { useState } from 'react'
import { Box, Menu, Tooltip, IconButton, Avatar, MenuItem, Typography } from '@mui/material'
import Link from 'next/link'

interface UserSettings {
    settings: string[],
    href: string[]
}

const userSettings: UserSettings = {
    settings: ['Profilj', 'Nastrojki'],
    href: ['/user/profile', '/user/settings']
}

const classes = 'hover:text-black hover:bg-primary'

export default function AUserSettings() {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              color="success"
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            {userSettings.settings.map((setting, index) => (
                <MenuItem 
                className={
                    classes
                }
                key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link href={userSettings.href[index]}>{setting}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
    )
}