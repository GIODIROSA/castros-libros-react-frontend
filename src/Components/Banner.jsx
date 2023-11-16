import React from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '../assets/style/Banner.css';

const Banner = () => {
  return (
    <Splide className="BannerContainer">
      <SplideSlide className="Slide">
        <img className="SlideImage" src="../../../public/img/banner1.jpg" alt="Banner 1" />
        <div className="SlideContent">
          <h1>¡Bienvenido a Castros librería online!</h1>
          <p>Comprando con nosotros estarás ayudando a autores chilenos</p>
        </div>
      </SplideSlide>
      <SplideSlide className="Slide">
      <img className="SlideImage" src="../../../public/img/16elArca.jpg" alt="Banner 1" />
        <div className="SlideContent">
          <h1>¡Bienvenido a Castros librería online!</h1>
          <p>Comprando con nosotros estarás ayudando a autores chilenos</p>
        </div>
      </SplideSlide> 
      <SplideSlide className="Slide">
      <img className="SlideImage" src="../../../public/img/27elJardinSecreto.jpg" alt="Banner 1" />
        <div className="SlideContent">
          <h1>¡Bienvenido a Castros librería online!</h1>
          <p>Comprando con nosotros estarás ayudando a autores chilenos</p>
        </div>
      </SplideSlide>  
    </Splide>
  );
};

export default Banner;