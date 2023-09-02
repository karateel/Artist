// components/Gallery.tsx
import { ImageList, ImageListItem, useMediaQuery } from '@mui/material';
import { PhotoTypes } from '@/app/interfaces';
import CustomImage from '../reusable/customImage';

interface GalleryComponentProps {
  photos: PhotoTypes[];
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({ photos }) => {
  const matchDownMd = useMediaQuery('(max-width:600px)');

  return (
    <ImageList variant="masonry" gap={8} cols={matchDownMd ? 1 : 3 }>
    {photos.map((photo) => (
      <ImageListItem key={photo.id}>
        <CustomImage
          src={photo.imageUrl}
          alt={photo.title}
          width={photo.sizes.width}
          height={photo.sizes.height}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className={'rounded-2xl'}
        />
      </ImageListItem>
    ))}
  </ImageList>
  );
};

export default GalleryComponent;
