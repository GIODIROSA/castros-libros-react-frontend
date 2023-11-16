import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  height: 300px;

  @media (max-width: 768px) {
    flex-direction: column; /* Cambiar a diseño de columna en dispositivos móviles */
    height: auto; /* Altura automática en dispositivos móviles */
  }
`;

const LeftImage = styled.div`
  flex: 1;
  position: relative;
  background: rgba(52, 152, 219, 0) url('../../../public/img/09elCodigoDaVinci.jpg') no-repeat center center;
  background-size: cover;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;

  h1 {
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); /* Agregar sombra al texto */
  }

  p {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8); /* Agregar sombra al texto */
  }

  @media (max-width: 768px) {
    height: 50vh; /* Ajustar altura en dispositivos móviles */
  }
`;

const RightImage = styled.div`
  flex: 1;
  position: relative;
  background: rgba(46, 204, 113, 0.5) url('../../../public/img/14laGenteOpina.jpg') no-repeat center center;
  background-size: cover;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;

  @media (max-width: 768px) {
    height: 50vh; /* Ajustar altura en dispositivos móviles */
  }
`;
const Banner = () => {
  return (
    <BannerContainer>
       
      <LeftImage>
      <h1 style={{ color: '#ffffff' }}>¡Bienvenido a Castros librería online!</h1>
          <p>Comprando con nosotros estarás ayudando a autores chilenos</p>
      </LeftImage>
      <RightImage>
      </RightImage>
    </BannerContainer>
  );
};

export default Banner;