import React from "react";
import { Link } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import Features from "../components/Features";
import Info from "../components/Info";
import Listings from "../components/Listings";
import { InfoDataOne, InfoDataSix, InfoDataTwo } from "../data/InfoData";

const Booking = () => {
  return (
    <>
      <Info {...InfoDataSix} />
      <BookingForm />

      <Link to="/details">After booking, please complete the health form</Link> 

    </>
  );
};

export default Booking;
