import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Contact />
      <Products />
      <Team />
      <CoreFeatures />
    </div>
  );
};

export default Home;
