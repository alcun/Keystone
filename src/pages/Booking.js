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
      <ul>You should be directed to a page where you can fill out a new patient preliminary health form.</ul>
      <ul>If you are not automatically directed:</ul>
      <br/>
      <li><a href="https://keystone-therapies.netlify.app/details">Please follow this link and complete the form</a>  </li>
<br/>

      </BookingInfo>

    </>
  );
};

export default Booking;
