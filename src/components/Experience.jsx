import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Container } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const locales = [
  {
    name: 'Triggo',
    description: '',
    imageUrl: '/img/triggo.webp',
  },
  {
    name: 'Clinica dental Balboa',
    description: '',
    imageUrl: '/img/balboa.jpg',
  },
  {
    name: 'Manazana Rota',
    description: '',
    imageUrl: '/img/manzana.jpg',
  },
 
  {
    name: 'Talula',
    description: '',
    imageUrl: '/img/talula.webp',
  },
  {
    name: 'La colegiala',
    description: '',
    imageUrl: '/img/cole.jpg',
  },
];

function CleaningLocationsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
  };

  return (

    
    <section className='slider' >
     
      <Container  maxWidth="md" sx={{ marginTop: 4 }}>
        <h1>Servicio de Limpiezas </h1>
      
      <Slider {...settings}>
        {locales.map((local, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              height: '400px',
              backgroundImage: `url(${local.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
                color: '#fff',
                textAlign: 'center',
                padding: 2,
              }}
            >
              <Typography variant="h4" component="div">
                {local.name}
              </Typography>
              <Typography variant="body1" component="div" sx={{ marginTop: 2 }}>
                {local.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>

     
    
    </Container>
    
    </section>
  );
}

export default CleaningLocationsSlider;
