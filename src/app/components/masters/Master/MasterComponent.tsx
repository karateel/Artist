import { Container, Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { Barber } from '@/app/interfaces';
import CustomImage from '../../main/customImage';

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