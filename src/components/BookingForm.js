import React from "react";
import styled from "styled-components";

<iframe
  src="https://talkwellworld.trafft.com/booking-embedded"
  style="border: none; width: 100%; max-width:1200px; min-height: 655px; margin: 0 auto; display: block;"
></iframe>;

const TrafftForm = styled.iframe`
  border: none;
  width: 100%;
  max-width: 1200px;
  min-height: 655px;
  margin: 0 auto;
  display: block;
  padding: 1rem 2rem;
  border-radius: 20px;

  

`;

const BookingContainer = styled.div`
// background-color: #000d1a;
// height:700px;
// width:100%;
// display:flex
// align-items: center;
// justify-content: center;
// padding: 2rem 4rem;

`

const BookingForm = () => {
  return (
    <BookingContainer
    data-aos="flip-down"
    data-aos-duration="2000"
    data-aos-delay="500"
    data-aos-anchor-placement="center bottom"


    >
      <TrafftForm src="https://keystonetherapies.trafft.com/booking-embedded"/>

      </BookingContainer>  )

};

export default BookingForm;
