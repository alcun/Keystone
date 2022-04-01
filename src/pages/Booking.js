import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BookingForm from "../components/BookingForm";
import Features from "../components/Features";
import Info from "../components/Info";
import Listings from "../components/Listings";
import { InfoDataOne, InfoDataSix, InfoDataTwo } from "../data/InfoData";

const BookingInfo = styled.div`
margin-left: 30px;
margin-top: 20px;
margin-right: 30px;

h2{
color: #12b886;
}

li {
  margin-left: 30px;

}

`

const Booking = () => {
  return (
    <>
      <Info {...InfoDataSix} />
      <BookingForm />
      <BookingInfo
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="500"

            data-aos-once="true"
    >
      <h2>AFTER COMPLETING BOOKING:</h2> <br/>
      You should be directed to a page where you will be asked to complete a new patient preliminary health form.<br/>
      If you are not automatically redirected:
      <br/> <br/>
      <ul>
      <li><a href="https://keystone-therapies.co.uk/details">Please follow this link and complete the form</a>  </li> </ul>
<br/>

      </BookingInfo>

    </>
  );
};

export default Booking;
