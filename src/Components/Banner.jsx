import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  height: 30vw;
  border-radius: 10px; /* Ajustar el radio de borde */

  @media (max-width: 576px) {
    flex-direction: column;
    height: 50vw; 
  }
`;

const LeftImage = styled.div`
  flex: 1;
  position: relative;
  background: rgba(52, 152, 219, 0) url('../../../public/img/banner1.jpg') no-repeat center center;
  background-size: 100% auto;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2vw; 
  border-radius: 10px; 
  overflow: hidden; 

  h1 {
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    font-size: 3vw; 
  }

  p {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
    font-size: 2vw;
  }

  @media (max-width: 576px) {
    border-radius: 0;
    h1 {
      color: #ffffff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
      font-size: 6vw; 
    }
  
    p {
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
      font-size: 4vw;
    }
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <LeftImage>
        <h1>¡Bienvenido a Castros librería online!</h1>
        <p>Comprando con nosotros estarás ayudando a autores chilenos</p>
      </LeftImage>
    </BannerContainer>
  );
};

export default Banner;