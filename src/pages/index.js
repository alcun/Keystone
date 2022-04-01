import React from "react";
import Hero from "../components/Hero";
import { SliderDataOne } from "../data/SliderData";
import { InfoDataOne, InfoDataTwo } from "../data/InfoData";
import InfoLinks from "../components/InfoLinks";
import styled from "styled-components";

const LocationInfo = styled.div`
margin-left: 30px;
margin-top: 20px;
margin-right: 30px;
h2 {
  color: #12b886;

}
`

const Home = () => {
  return (
    <>
      <Hero slides={SliderDataOne} />
      <InfoLinks {...InfoDataOne} />
  
      <LocationInfo
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="1000"

            data-aos-once="true"
            // data-aos-anchor-placement="top-center"
    >
      <h2>SESSIONS VIA APPOINTMENT ONLY</h2> <br/>
      Contact now to book your appointment:
      <br/>
      <ul>
      <li>By Phone: <a href="tel:+447491822789">07491822789</a>  </li>
      <li>Online: <a href="https://www.keystone-therapies.co.uk/booking">Our Booking Page</a>  </li>
      </ul>
<br/>

      </LocationInfo>
      <br/>
    </>
  );
};

export default Home;
