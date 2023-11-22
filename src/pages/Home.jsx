import React from "react";
import Carousel from "../components/Carousel";
import Advertise from "../components/Advertise";
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";


const Home = () => {

  return (
    <div>
      <CategoryNav />
      <Carousel />
      <Product type="phone" />
      <Advertise />
      <Product type="laptop" />
      <Advertise /> 
    </div>
  );
};

export default Home;
