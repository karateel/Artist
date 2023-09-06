'use client'

import { useEffect, useState } from 'react';
import BarberComponent from '../../components/masters/BarberComponent';
import { Barber } from '@/app/interfaces';
import { getData } from '@/app/api/getData';
import Loader from '@/app/components/reusable/loader';

export default function AMasters() {
  const [barbers, setBarbers] = useState<Barber[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBarbers = async () => {
      try {
        const data = await getData('https://my-json-server.typicode.com/karateel/barber-json/artist', 0, 'barbers');
        setBarbers(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching barbers:', error);
        setIsLoading(false);
      }
    };

    fetchBarbers();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader/>
      ) : (
        <BarberComponent barbers={barbers} />
      )}
    </>
  );
}
