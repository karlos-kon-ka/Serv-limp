import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';


const Home = lazy(() => import('./components/Home'));
const Servicios = lazy(() => import('./components/pages/Servicios'));

function App() {
  return (
    <>
      <Nav />
     
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
        <Footer />
      </Suspense>
      
    </>
  );
}

export default App;
