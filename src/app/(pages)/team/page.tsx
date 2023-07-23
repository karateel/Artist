import { Box } from '@mui/material'
import BarberComponent from '../../components/masters/BarberComponent'
import { Barber } from '@/app/interfaces';
import { getBarbers } from '@/app/api/barbers';

type Barbers = Barber[] & {
  length: number;
  pop(): Barber | undefined;
  push(...items: Barber[]): number;
  concat(...items: ConcatArray<Barber>[]): Barber[];
};

export default async function AMasters() {
  const barbers:Barbers = await getBarbers('https://my-json-server.typicode.com/karateel/barber-json/barbers')

  return (
    <Box className={'h-full bg-black'}>
      <BarberComponent barbers={barbers}/>
    </Box>
  )
}