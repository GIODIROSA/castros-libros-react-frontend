import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  height: 30vw; 

  @media (max-width: 576px) {
    flex-direction: column;
    height: 50vw; 
  }
`;

const LeftImage = styled.div`
  flex: 1;
  position: relative;
  background: rgba(52, 152, 219, 0) url('../../../public/img/09elCodigoDaVinci.jpg') no-repeat center center;
  background-size: 120% auto;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2vw; 
  border-top-left-radius: 5vw; 
  border-bottom-left-radius: 5vw; 

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
    border-bottom-left-radius: 0;
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

const RightImage = styled.div`
  flex: 1;
  position: relative;
  background: rgba(46, 204, 113, 0.5) url('../../../public/img/14laGenteOpina.jpg') no-repeat center center;
  background-size: cover;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2vw;
  border-top-right-radius: 5vw; 
  border-bottom-right-radius: 5vw;

  @media (max-width: 576px) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 5vw;
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <LeftImage>
        <h1>¡Bienvenido a Castros librería online!</h1>
        <p>Comprando con nosotros estarás ayudando a autores chilenos</p>
      </LeftImage>
      <RightImage></RightImage>
    </BannerContainer>
  );
};

export default Banner;
