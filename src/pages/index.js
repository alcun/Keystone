import React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Listings from "../components/Listings";
import { SliderDataOne } from "../data/SliderData";
import { InfoDataOne, InfoDataTwo } from "../data/InfoData";
import InfoLinks from "../components/InfoLinks";

const Home = () => {
  return (
    <>
      <Hero slides={SliderDataOne} />
      <InfoLinks {...InfoDataOne} />
      {/* <Listings />
      <Features />

      <Info {...InfoDataTwo} /> */}
    </>
  );
};

export default Home;
