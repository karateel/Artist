import { Barber } from '@/app/interfaces';
import MasterComponent from '@/app/components/masters/Master/MasterComponent';
import { getBarbers } from '@/app/api/barbers';

export async function generateStaticParams() {
  const barbers = await fetch('https://my-json-server.typicode.com/karateel/barber-json/barbers').then((res) => res.json());

  return barbers.map((barber: {id: string}) => ({
    id: barber.id
  }));
}

export default async function MoreAboutThisBarber({ params }: { params: { id: string }}) {
  const barberInfo = await getBarbers(`https://my-json-server.typicode.com/karateel/barber-json/barbers/${params.id}`)
  const barber: Barber = barberInfo;

  return (
    <>
      {barber && <MasterComponent barber={barber} />}
    </>
  );
};