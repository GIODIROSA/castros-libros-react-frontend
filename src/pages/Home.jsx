import React from "react";
import Banner from "../Components/Banner";
import Products from "../Components/Products";  

const Home = () => {
  return (
    <div>
      <div className="castros-contenedor__banner">
        <Banner />
        <Products />
      </div>
    </div>
  );
};

export default Home;
