'use client'
import { useParams } from 'next/navigation';
import { Barber } from '@/app/interfaces';
import MasterComponent from '@/app/components/masters/Master/MasterComponent';
import { getBarbers } from '@/app/api/barbers';

async function getMaster(url: string) {
  const res = getBarbers(url);
  return res
}

export default async function MoreAboutThisBarber() {
  const params = useParams()
  const barberInfo = await getMaster(`https://my-json-server.typicode.com/karateel/barber-json/barbers/${params.id}`);
  const [barber]: Barber[] = await Promise.all([barberInfo]);

  return (
    <>
      {barber && <MasterComponent barber={barber} />}
    </>
  );
};