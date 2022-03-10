import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";
import ListingOne from "../images/photo8.png";
import ListingTwo from "../images/photo8.png";

const Section = styled.section`
width: 100%;
height: 100%;
padding 1rem calc((100vw - 1300px) / 2) 15rem;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
`;
const Heading = styled.div`
  font-size: 1.5rem;
  padding: 2rem 1rem;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;
const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoWrap = styled.div`
padding: 0rem 1rem;
min-height: 550px;
height: 100%

h2 {
  margin-bottom: 1rem;
  font-weight; 400
}

@media screen and (max-width: 768px){
  margin-bottom: 1rem;
}
`;

const Image = styled.img`
width: 100%;
height: 100%;
max-width: 800px;
max-height: 400px
object-fit: cover;
margin-bottom: 1rem;`;

const InfoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #12b886;
  width: 140px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Arrow = styled(HiOutlineArrowCircleRight)`
  margin-left: 10px;
`;

const Listings = () => {
  return (
    <Section>
      <Container>
        <Heading>
          {" "}
          <h1
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
            >
            Testimonials
          </h1>
        </Heading>
        <InfoRow>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="true"
            // data-aos-delay="1000"

            data-aos-anchor-placement="center bottom"
            >
            <Image src={ListingOne} alt="home" />
            <h2>Jim's Sore Back</h2>
            <InfoLink to="/homes">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            // data-aos-delay="1000"

            data-aos-anchor-placement="center bottom"
            >
            <Image
              src={ListingTwo}
              alt="home"
              css={`
                margin-top: 120px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            />
            <h2>Bob's dodgy wrist</h2>
            <InfoLink to="/homes">
              <p>View Details</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
        </InfoRow>
      </Container>
    </Section>
  );
};

export default Listings;
