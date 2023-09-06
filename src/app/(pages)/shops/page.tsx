'use client'

import { useEffect, useState } from 'react';
import SalonsComponent from '@/app/components/salons/SalonsComponent';
import { getData } from '@/app/api/getData';
import { Salons } from '@/app/interfaces';
import Loader from '@/app/components/reusable/loader';

const ShopsPage:React.FC = () => {
  const [salons, setSalons] = useState<Salons[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSalons = async () => {
      try {
        const data = await getData('https://my-json-server.typicode.com/karateel/barber-json/artist', 0, 'shops');
        setSalons(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Handle errors gracefully
      }
    };

    fetchSalons();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader/>
      ) : (
        <SalonsComponent salons={salons} />
      )}
    </div>
  );
}

export default ShopsPage