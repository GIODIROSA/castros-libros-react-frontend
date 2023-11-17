import React from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../assets/style/Banner.css";

const Banner = () => {
  return (
    <Splide
      options={{
        perPage: 1,
        perMove: 1,
        breakpoints: {
          768: {
            perPage: 1,
            drag: true,
            type: "loop",
            autoplay: true,
            pagination: true,
            padding: {
              right: "5rem",
            },
          },
        },
        autoplay: true,
        arrows: false,
        drag: false,
        pagination: false,
      }}
      className="BannerContainer"
    >
      <SplideSlide className="Slide">
        <div className="castros-banner__contenedor">
          <div className="castros-banner__imagen">
            <img
              className="SlideImage"
              src="../../../public/img/banner1.jpg"
              alt="imagen banner"
            />
          </div>

          <div className="castros-banner__content">
            <h1>¡Bienvenido a Castros librería online!</h1>
            <p>Comprando con nosotros estarás ayudando a autores chilenos</p>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default Banner;
