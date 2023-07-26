'use client'

import { Box, Typography } from '@mui/material'
// import VideoBackground from "./components/reusable/videobackground";


function Home() {
  return (
    <>
      {/* <VideoBackground /> */}
      <Box className={'absolute bottom-10 left-10'}>
        <Typography variant='h2' color='primary'>
          Barbershop description
        </Typography>
        <Typography variant='body2' color={'secondary'}>
          We provide zalupu i idi nahuj
        </Typography>
      </Box>
    </>
  );
}

export default Home;