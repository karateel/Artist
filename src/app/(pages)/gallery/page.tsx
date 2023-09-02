'use client'

import { useEffect, useState } from 'react';
import GalleryComponent from '@/app/components/gallery/GalleryComponent';
import { getPhotos } from '../api/getPhotos';
import { PhotoTypes } from '@/app/interfaces';

const Gallery = () => {
    const [photos, setPhotos] = useState<PhotoTypes[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { photos } = await getPhotos();
          setPhotos(photos);
        } catch (error) {
          console.error('Error fetching photos:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return <GalleryComponent photos={photos} />;
  };

export default Gallery;
