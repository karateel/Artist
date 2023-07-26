'use client'

import { Box, Typography, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Barber } from '@/app/interfaces';
import CustomImage from '../reusable/customImage';
import { Pagination } from 'swiper/modules'
import { useState } from 'react'
import MasterComponent from './Master/MasterComponent';

import 'swiper/css'
import 'swiper/css/pagination'

function BarberComponent({ barbers }: { barbers: Barber[] }) {
  const [isHidden, setIsHidden] = useState<Boolean>(true);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);

  const handleCard = (barber: Barber) => {
    setSelectedBarber(barber);
    setIsHidden(!isHidden);
  };

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        centeredSlides={true}
        autoHeight={true}
        pagination={{
          dynamicBullets: true
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ display: isHidden ? 'block' : 'none' }}
      >
        {barbers.map((barber, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <CustomImage
                alt={`${barber.name} image`}
                src={barber.img}
                width={435}
                height={960}
                className={'rounded-xl max-w-full h-auto mx-auto mt-6'}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{
                  boxShadow: `0rem 8.2px 0.5rem ${barber.pallette}`
                }}
              />
              <Typography align='center' variant="h6" color="primary" component="div">
                {barber.name}
              </Typography>
              <Typography align='center' variant="body2" color="secondary">
                {barber.info}
              </Typography>
              <Typography align='center' component='div'>
                <Button
                  onClick={() => handleCard(barber)}
                  variant='outlined'
                >
                  More about {barber.name}
                </Button>
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedBarber && (
        <MasterComponent barber={selectedBarber} display={isHidden ? 'none' : 'block'} state={() => handleCard(selectedBarber as Barber)} />
      )}
    </>
  );
}

export default BarberComponent
