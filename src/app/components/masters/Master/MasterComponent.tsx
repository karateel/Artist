import { Box, Typography, Button, Container } from '@mui/material';
import { Barber } from '@/app/interfaces';
import CustomImage from '../../reusable/customImage';

import 'swiper/css'
import 'swiper/css/pagination'
import { ReactEventHandler } from 'react';

interface MasterComponentProps {
  barber: Barber;
  display?: Object,
  state: any
}

const MasterComponent = ({ barber, display, state }: MasterComponentProps) => {
  return (
    <Container sx={{
      height: '100%',
      display: display ?? 'block'
    }}>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <CustomImage
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={`${barber.name} photo`}
          src={barber.img}
          width={640}
          height={960}
          className={'w-1/2 max-w-[50%] rounded-lg'}
        />
        <Box>
          <Typography variant='h2'>
            {barber.name}
          </Typography>
            <Button className={'hover:text-black hover:bg-primary text-secondary'} variant="outlined" onClick={state}>
              Back to All Masters
            </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default MasterComponent;
