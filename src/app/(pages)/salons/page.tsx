import { Box } from '@mui/material'
import SalonsComponent from '@/app/components/salons/SalonsComponent'
import { getData } from '@/app/lib/getData'
import { Salons } from '@/app/interfaces'

type Salon = Salons[] & {
    length: number;
    pop(): Salons | undefined;
    push(...items: Salons[]): number;
    concat(...items: ConcatArray<Salons>[]): Salons[];
};

export default async function ASalons() {
    const salons: Salon = await getData('https://my-json-server.typicode.com/karateel/barber-json/artist', 0, 'shops')

    return (
        <Box>
            <SalonsComponent salons={salons} />
        </Box>
    )
}