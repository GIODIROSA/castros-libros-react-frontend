import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../assets/style/Banner.css";

const Banner = () => {
  return (
    <>
      <div className="castros-banner">
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
                gap: 5,
                pagination: true,
                padding: {
                  right: "5rem",
                },
              },
            },
            autoplay: true,
            arrows: false,
            drag: true,

            pagination: false,
          }}
        >
          <SplideSlide>
            <div className="castros-banner__contenedor">
              <div className="castros-banner__contenedor-imagen">
                <img
                  className="castros-banner-imagen"
                  src="../../../public/img/banner1.jpg"
                  alt="imagen banner"
                />

                <div className="castros-banner__filtro"></div>

                <div className="castros-banner__contenido">
                  <h1 className="castros-banner-titulo margin-none">
                    Bajo la sombra de las letras
                  </h1>
                  <p className="castros-banner-parrafo margin-none">
                    tu librería de confianza
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="castros-banner__contenedor">
              <div className="castros-banner__contenedor-imagen">
                <img
                  className="castros-banner-imagen"
                  src="../../../public/img/banner2.jpg"
                  alt="imagen banner"
                />

                <div className="castros-banner__filtro"></div>

                <div className="castros-banner__contenido">
                  <h1 className="castros-banner-titulo margin-none">
                    Bajo la sombra de las letras
                  </h1>
                  <p className="castros-banner-parrafo margin-none">
                    tu librería de confianza
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default Banner;
