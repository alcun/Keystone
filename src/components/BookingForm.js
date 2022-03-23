import React from "react";
import styled from "styled-components";

<iframe
  src="https://keystonetherapies.trafft.com/booking-embedded"
  style="border: none; width: 100%; max-width:1200px; min-height: 655px; margin: 0 auto; display: block;"
></iframe>;

const TrafftForm = styled.iframe`
  width: 100%;
  max-width: 1500px;
  height: 80vh;
  min-height: 500px;
  margin: 0 auto;
  display: block;
  border-radius: 20px;
  border: solid #12b886 2px;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);

  

  @media screen and (max-width: 768px) {
height: 85vh;  }
`;

const BookingContainer = styled.div`
  background-color: #fff;
  height:100vh;
  width:100%;
  display:flex
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;
  overflow-y: hidden;

  @media screen and (max-width: 768px) {
    padding: 1rem 1rem;
    `;

const BookingForm = () => {
  return (
    <BookingContainer id="title"
    data-aos="fade-up"
 
    data-aos-duration="2000"
    data-aos-once="true"
    >
      <TrafftForm src="https://keystonetherapies.trafft.com/booking-embedded" />
    </BookingContainer>
  );
};

export default BookingForm;
