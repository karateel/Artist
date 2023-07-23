import { Container, Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { Barber } from '@/app/interfaces';
import Image from 'next/image'

interface MasterComponentProps {
  barber: Barber;
}

const MasterComponent = ({ barber }: MasterComponentProps) => {
  console.log(barber)
  return (
    <Container sx={{
      height: '100%',
    }}>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box >
        <img
        alt={`${barber.name} photo`}
        src={barber.img}
        className={'w-1/2 max-w-[50%] rounded-lg'}
        />
        </Box>
        <Box>
          <Typography variant='h2'>
            {barber.name}
          </Typography>
        <Link href={`/team`} as={'/team'}>
          <Button className={'hover:text-black hover:bg-primary text-secondary'} variant="outlined">
            Back to All Masters
          </Button>
        </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default MasterComponent;