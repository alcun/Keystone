import React from 'react'
import Hero from '../components/Hero';
import Info from '../components/Info';
import Listings from "../components/Listings";
import { InfoDataOne, InfoDataThree } from '../data/InfoData';
import { SliderDataOne } from '../data/SliderData';


const Testimonials = () => {
  return (
    <>
    <Info {...InfoDataThree}/>
      <Listings/>
 <h1>Google reviews slider here</h1>
 </>
  )
}

export default Testimonials;