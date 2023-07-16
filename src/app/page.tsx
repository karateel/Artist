import { Box, Typography } from '@mui/material'
import VideoBackground from "./components/main/videobackground";
// import BookNow from './components/main/booknow';

function Home() {
  return (
    <>
      <VideoBackground />
      <Box className={'absolute bottom-10 left-10'}>
        <Typography variant='h2' color='primary'>
          Barbershop description
        </Typography>
        <Typography variant='body2' color={'secondary'}>
          We provide zalupu i idi nahuj
        </Typography>
      </Box>
      {/* <BookNow/> */}
    </>
  );
}

export default Home;