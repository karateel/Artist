import { Box } from '@mui/material'
import BarberComponent from '../../components/masters/BarberComponent'
import { Barber } from '@/app/interfaces';
import { getData } from '@/app/lib/getData';

type Barbers = Barber[] & {
  length: number;
  pop(): Barber | undefined;
  push(...items: Barber[]): number;
  concat(...items: ConcatArray<Barber>[]): Barber[];
};  

export default async function AMasters() {
  const barbers: Barbers = await getData('https://my-json-server.typicode.com/karateel/barber-json/artist', 0, 'barbers')

  return (
    <Box className={'h-full bg-black'}>
      <BarberComponent barbers={barbers} />
    </Box>
  )
}