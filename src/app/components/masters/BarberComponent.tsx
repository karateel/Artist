'use client'

import { Box, Typography, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'
import 'swiper/css'
import { Barber } from '@/app/interfaces';
import CustomImage from '../main/customImage';

function BarberComponent({ barbers }: {barbers: Barber[]}) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      centeredSlides={true}
      autoHeight={true}
    >
      {barbers.map((barber, index) => (
        <SwiperSlide
          key={index}>
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
            width={640}
            height={960}
            className={'rounded-xl max-w-full h-auto mx-auto'}
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
              <Button variant='outlined'>
                <Link
                  key={barber.id}
                  href={`/team/[id]`}
                  as={`/team/${barber.id}`}
                >
                  Больше о {barber.name}
                </Link>
              </Button>
            </Typography>
          </Box>
        </SwiperSlide>
      ))
      }
    </Swiper >
  );
}

export default BarberComponent