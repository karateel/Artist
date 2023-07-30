'use client'

import { Grid, Card, Typography, CardContent, IconButton, Button } from '@mui/material'
import CustomImage from '../reusable/customImage'
import { Phone } from '@mui/icons-material'
// import { useState } from 'react'

const SalonsComponent = () => {
  // const [open, setOpen] = useState(false);
  // const [frame, setFrame] = useState(null);

  // const handleOpen = () => {
  //   const selectedSalon = data.find((salon) => salon.description === "Карта");
  //   setOpen(true);
  //   setFrame(selectedSalon.id);
  // };

  // const handleClose = () => setOpen(false);

  const data = [
    {
      id: 1,
      title: "Глушко 16/18",
      description: "Карта",
      img: "https://murchim.ru/_sf/4/49531350.jpg",
      color: "rgba(252,218,0,1)",
      number: "+380 (93) 604 91 90",
    },
    {
      id: 2,
      title: "Люстдорфская 55/2",
      description: "Карта",
      img: "https://static9.depositphotos.com/1594920/1088/i/450/depositphotos_10889910-stock-photo-angry-chihuahua-growling-2-years.jpg",
      color: "rgba(250,100,0,1)",
      number: "+380 (93) 604 91 90",
    }
  ];

  return (
    <Grid container spacing={2}
      sx={{
        marginTop: {
          md: "3rem"
        }
      }}
    >
      {data.map((item) => (
        <Grid item xs={12} md={6} key={item.id}>
          <Card
            sx={{
              maxWidth: "100%",
              width: "100%",
              minHeight: "100%",
              boxShadow: `0px 15px 55px 0px ${item.color}`,
            }}
          >
            <CustomImage
              src={item.img}
              alt="Salon photo"
              width={1000}
              height={550}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={"min-h-[550px] max-h-[550px] object-cover"}
            />
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
                {item.title}

              </Typography>

              <Typography component="div" sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                <Typography color="secondary" textAlign="end">
                  <Button variant="outlined" color="primary">
                    {item.description}
                  </Button>
                </Typography>
                <IconButton color="primary">
                  <a href={`tel:${item.number}`}>
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