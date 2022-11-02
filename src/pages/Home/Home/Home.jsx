import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Teams from "../Teams/Teams";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Products></Products>
      <Teams></Teams>
      <Features></Features>
    </div>
  );
};

export default Home;
