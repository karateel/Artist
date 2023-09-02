'use client'

import { Grid, Card, Typography, CardContent, IconButton, Button } from '@mui/material'
import { useState } from 'react'
import CustomImage from '../reusable/customImage'
import { Phone } from '@mui/icons-material'
import { Salons } from '@/app/interfaces'
import dynamic from 'next/dynamic'

const DynamicBarberMap = dynamic(() => import('../reusable/map-modal'), {
  ssr: false
});

const SalonsComponent = ({ salons }: { salons: Salons[] }) => {

  const [shownSalon, setShownSalon] = useState<Salons | null>(null);

  const toggleMap = (salon: Salons) => {
    setShownSalon(shownSalon === salon ? null : salon);
  };

  return (
    <Grid container spacing={2}
      sx={{
        marginTop: {
          md: "3rem"
        }
      }}
    >
      {salons.map((salon) => (
        <Grid item xs={12} md={6} key={salon.id}>
          <Card
            sx={{
              maxWidth: "100%",
              width: "100%",
              minHeight: "100%",
            }}
          >
            {shownSalon === salon ? (
              <DynamicBarberMap lng={salon.lng} lat={salon.lat} />
            ) : (
              <CustomImage
                src={salon.img}
                alt="Salon photo"
                width={1000}
                height={550}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={"min-h-[550px] max-h-[550px] object-cover"}
              />
            )}
            <CardContent
              sx={{
                maxHeight: "150px",
                height: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >

              <Typography color="primary" textAlign="center" component="h2">
                {salon.title}
              </Typography>

              <Typography component="div" sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                <Typography color="secondary" textAlign="end">
                  <Button variant="outlined" color="primary" onClick={() => toggleMap(salon)}>
                    {salon.description}
                  </Button>
                </Typography>
                <IconButton color="primary">
                  <a href={`tel:${salon.number}`}>
                    <Phone />
                  </a>
                </IconButton>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SalonsComponent