'use client'

import { Box, Typography } from '@mui/material'
// import VideoBackground from "./components/reusable/videobackground";


function Home() {
  return (
    <>
      {/* <VideoBackground /> */}
      <Box className={'absolute bottom-10 left-5 sm:left-10'}>
        <Typography variant='h2' color='primary' sx={{
          fontSize: {
            xs: 'h4.fontSize',
            sm: 'h2.fontSize'
          }
        }}>
          Artist Barbershop
        </Typography>
        <Typography variant='body2' color={'secondary'}>
          est. 2021
        </Typography>
      </Box>
    </>
  );
}

export default Home;