import {  MenuItem, Typography } from '@mui/material'
import Link from 'next/link'
import Script from 'next/script'

export default function BookingBtn() {
    return (
        <MenuItem className={'hover:text-black hover:bg-primary'}>
        <Typography textAlign='center'>
          <code>
            <Link href="#" className="ms_booking">Book Now</Link>
          </code>
        </Typography>
        <Script src='//w817129.alteg.io/widgetJS'/>
      </MenuItem>
    )
}