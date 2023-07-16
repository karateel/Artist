import { Card, CardContent, CardMedia, Typography, Container } from '@mui/material';

// Define the data for barbers
interface Barbers {
  barbersName: string[];
  barbersInfo: string[];
  barbersImg: string[];
  barbersGradient: string[];
}


const barbers: Barbers = {
  barbersName: ['Ваня Педрила', 'Влад Чертила', 'Макс Хуила', 'Дима Пидор', 'Дима Гандон'],
  barbersInfo: ['1', '2', '3', '4', '5'],
  barbersImg: [
    '/masters/Vanya.jpg',
    '/masters/Vlados.jpg',
    '/masters/Mahon.jpg',
    '/masters/DimaPidor.jpg',
    '/masters/DimaGandon.jpg',
  ],
  barbersGradient: [
    'linear-gradient(90deg, #A8943D, #111111)',
    'linear-gradient(#A8943Dff, #111111)',
    'linear-gradient(#A8943Dff, #111111)',
    'linear-gradient(#A8943Dff, #111111)',
    'linear-gradient(#A8943Dff, #111111)',
  ]
}

export default function BarberComponent() {
  return (
    <>
      {barbers.barbersName.map((barberName, index) => (
        <Container maxWidth='xl'>
          <Card className="flex items-center w-full m-auto rounded-none pt-6 relative" key={index}>
            <CardMedia
              alt={`${barberName} image`}
              src={barbers.barbersImg[index]}
              className="max-w-[200px] max-h-[200px]"
              component="img"
            />
            <CardContent 
            sx={{
              background: `${barbers.barbersGradient[index]}`,
            }}
            className={'h-auto min-h-[200px] min-w-[600px] w-auto'}>
              <Typography variant="h6" color="primary" component="div">
                {barberName}
              </Typography>
              <Typography variant="body2" color="secondary">
                {barbers.barbersInfo[index]}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      ))}
    </>
  );
}