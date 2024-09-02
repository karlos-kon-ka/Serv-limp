import React, { Suspense, lazy } from 'react';
import BookingForm from './Booking';
import Intro from './Intro';
import Experience  from './Experience'

// Carga diferida del componente FallingText
const Titu = lazy(() => import('./Titu'));

function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Titu />
      </Suspense>
      <Experience />
      <div className='fondo'>
        <BookingForm />
      </div>
      
      <Intro />
      
      
    </>
  );
}

export default Home;
