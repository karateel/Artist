'use client'

import { Box, Typography, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Barber } from '@/app/interfaces';
import CustomImage from '../reusable/customImage';
import { Pagination } from 'swiper/modules'
import { Instagram } from '@mui/icons-material';
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/pagination'

export default function BarberComponent({ barbers }: { barbers: Barber[] }) {

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
              <Box sx={{
                maxWidth: '435px',
                mx: 'auto',
                position: 'relative',
                width: '100%'
              }}>
                <Typography variant='body2' component='div'>
                  <Typography align='center' variant="h6" color="primary" component="div">
                    {barber.name}
                  </Typography>
                  <Typography align='center' variant="body2" color="secondary" className={'max-w-[75%] my-0 mx-auto'}>
                    {barber.info}
                  </Typography>
                </Typography>
                <Typography align='right'
                  sx={{
                    position: 'absolute',
                    right: '0',
                    bottom: '0'
                  }}
                >
                  <Link target="_blank" href={barber.inst}>
                    <IconButton
                      color='secondary'
                      size='large'
                      aria-label='master-instagram'
                    >
                      <Instagram />
                    </IconButton>
                  </Link>
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
