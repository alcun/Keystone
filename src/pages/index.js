import React from "react";
import Hero from "../components/Hero";
import { SliderDataOne } from "../data/SliderData";
import { InfoDataOne, InfoDataTwo } from "../data/InfoData";
import InfoLinks from "../components/InfoLinks";

const Home = () => {
  return (
    <>
      <Hero slides={SliderDataOne} />
      <InfoLinks {...InfoDataOne} />
  
    </>
  );
};

export default Home;
