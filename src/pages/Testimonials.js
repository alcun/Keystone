import React from 'react'
import styled from 'styled-components';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Listings from "../components/Listings";
import { InfoDataOne, InfoDataThree } from '../data/InfoData';
import { SliderDataOne } from '../data/SliderData';

const BookingInfo = styled.div`
margin-left: 30px;
margin-top: 20px;
margin-right: 30px;

h2{
color: #12b886;
}
`

const Testimonials = () => {
  return (
    <>
    <Info {...InfoDataThree}/>
      <Listings/>
      <BookingInfo
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="500"

            data-aos-once="true"
    >
      <h2>ARE YOU A SATISFIED PATIENT?</h2> <br/>
      <ul>If you have a testimonial you would like to see on this page we would be delighted to make it so.</ul>
      <ul>Please email your testimonial to:</ul>

      <br/>
      <li><a href="mailto:hello@keystone-therapies.co.uk?subject=New Testimonial">hello@keystone-therapies.co.uk</a></li>
<br/>

      </BookingInfo>
 </>
  )
}

export default Testimonials;