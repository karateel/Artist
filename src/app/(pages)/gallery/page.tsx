'use client'

import { useEffect, useState } from 'react';
import { getPhotos } from '@/app/api/getPhotos';
import { PhotoTypes } from '@/app/interfaces';
import GalleryComponent from '@/app/components/gallery/GalleryComponent';
import Loader from '@/app/components/reusable/loader';

const GalleryPage:React.FC = () => {
  const [photos, setPhotos] = useState<PhotoTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const { photos } = await getPhotos();
        setPhotos(photos);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching photos:', error);
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader/>
      ) : (
        <GalleryComponent photos={photos} />
      )}
    </>
  );
};

export default GalleryPage;
