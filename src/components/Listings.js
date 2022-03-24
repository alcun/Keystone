import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";
import ListingOne from "../images/photo8.png";
import ListingTwo from "../images/photo8.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Testimonials1 from "../images/testimonials1.jpg";
import Testimonials2 from "../images/testimonials2.jpg";

const Section = styled.section`
width: 100%;
height: auto;
padding 1rem calc((100vw - 1300px) / 2) 15rem;
`;
const Container = styled.div`
  height: auto;
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
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h2 {
  margin-bottom: 1rem;
    color: #12b886;
  
  
}

@media screen and (max-width: 768px){
  margin-bottom: 1rem;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 35%;
  height: 50px;
  padding: 10px;
  border: 2px solid #12b886;
  background-color: #fff;
  color: #12b886;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 30px;
  // margin-left: 15px;
  margin-right: 15px;
  &:hover {


    transform: translateY(-2px);
    background: #12b886;
    color: #fff;
    border: 2px #fff solid;
    transition: 0.3s;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  }
`;

const Image = styled.img`
width: 100%;
// height: 100%;
max-width: 800px;
max-height: 400px
object-fit: cover;
margin-bottom: 1rem;`;

const OpenQuote = styled(FaQuoteLeft)``;

const CloseQuote = styled(FaQuoteRight)``;

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

const MoreInfoWrap = styled.div`
position: relative;
max-width: 500px;
color: white;
background: #12b886;
border-radius 5px;
padding: 1rem;


`;

const TestimonialName = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Arrow = styled(HiOutlineArrowCircleRight)`
  margin-left: 10px;
`;

const Listings = () => {
  const [showMore1, setShowMore1] = useState();
  const [showMore2, setShowMore2] = useState();
  const [showMore3, setShowMore3] = useState();
  const [showMore4, setShowMore4] = useState();


  const handleShowMore1 = () => {
    if (!showMore1) {
      setShowMore1(true);
    } else {
      setShowMore1(false);
    }
  };

  const handleShowMore2 = () => {
    if (!showMore2) {
      setShowMore2(true);
    } else {
      setShowMore2(false);
    }
  };

  const handleShowMore3 = () => {
    if (!showMore3) {
      setShowMore3(true);
    } else {
      setShowMore3(false);
    }
  };

  const handleShowMore4 = () => {
    if (!showMore4) {
      setShowMore4(true);
    } else {
      setShowMore4(false);
    }
  };

  return (
    <Section id="title">
      <Container>
        <InfoRow>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="true"
            // data-aos-delay="1000"

            data-aos-anchor-placement="center bottom"
          >
            <Image src={Testimonials2} alt="home" />
            <h2> Would Not Hesitate to Recommend </h2>

            {showMore4 && (
              <MoreInfoWrap>
                <OpenQuote /> &nbsp; I have had several treatments from john
                over the past few months and have always had a professional ,
                friendly and faultless treatment. <br />
                I would not hesitate to recommend him to others. &nbsp;
                <CloseQuote />
                <br /> <br />
                <TestimonialName>
                  <p>
                    <strong>- Sarah </strong>
                    <br />
                    <em>Patient at Keystone Therapies</em>
                  </p>
                </TestimonialName>
              </MoreInfoWrap>
            )}
            <button onClick={handleShowMore4}>
              {!showMore4 && "View Details"}
              {showMore4 && "View Less"}

              <Arrow />
            </button>
          </InfoWrap>

          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            // data-aos-delay="1000"

            data-aos-anchor-placement="center bottom"
          >
            <Image
              src={Testimonials1}
              alt="home"
              css={`
                margin-top: 120px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            />
            <h2>So Thankful I Found Some Relief</h2>
            {showMore3 && (
              <MoreInfoWrap>
                <OpenQuote /> &nbsp; I am so glad I visited the clinic about my
                neck pain, after having the treatment I felt a immediate relief
                from my symptoms and by the 3rd session I was completely pain
                free! &nbsp;
                <CloseQuote />
                <br />
                <br />
                <TestimonialName>
                  <p>
                    <strong>- Ben </strong>
                    <br />
                    <em>Patient at Keystone Therapies</em>
                  </p>
                </TestimonialName>
              </MoreInfoWrap>
            )}
            <button onClick={handleShowMore3}>
              {!showMore3 && "View Details"}
              {showMore3 && "View Less"}

              <Arrow />
            </button>
          </InfoWrap>
        </InfoRow>

        <br />

        <InfoRow>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="true"
            // data-aos-delay="1000"

            data-aos-anchor-placement="center bottom"
          >
            <Image src={Testimonials2} alt="home" />
            <h2>NEED A TITLE HERE</h2>

            {showMore1 && (
              <MoreInfoWrap>
                <OpenQuote />
                &nbsp; Completely professional and friendly. <br />
                His approach is persistent, will definitely fix your problem!
                <br />
                Been going to him for almost a year now and cannot recommend his
                services enough! &nbsp;
                <CloseQuote />
                <br /> <br />
                <TestimonialName>
                  <p>
                    <strong>- Mikey </strong>
                    <br />
                    <em>Patient at Keystone Therapies</em>
                  </p>
                </TestimonialName>
              </MoreInfoWrap>
            )}
            <button onClick={handleShowMore1}>
              {!showMore1 && "View Details"}
              {showMore1 && "View Less"}

              <Arrow />
            </button>
          </InfoWrap>

          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            // data-aos-delay="1000"

            data-aos-anchor-placement="center bottom"
          >
            <Image
              src={Testimonials1}
              alt="home"
              css={`
                margin-top: 120px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            />
            <h2>A Hunch for Healing</h2>
            {showMore2 && (
              <MoreInfoWrap>
                <OpenQuote /> &nbsp; In my job as a web developer I spend a lot
                of time sat down looking at a screen. <br />
                <br />
                I have always tried to stay active and balanced with posture
                awareness, stretching and exercise but little by little a
                hunching habit had emerged bringing with it stiffness and
                discomfort.
                <br />
                <br />
                During my consultation with Johnny his deep knowledge of human
                anatomy allowed him to identify the source of the problem, the
                muscles and joints it was manifesting in and the lifestyle
                habits that were contributing to it. <br />
                <br />
                After an initial session involving Massage, Graston and Cupping
                Therapy I noticed the results immediately - in improving the
                range of motion in my neck and shoulders and lessening the
                stiffness and pain it had brought immense relief. <br />
                <br />
                Johnny really knows what he is doing and I've lost count of the
                people I've recommended his treatments to to after hearing the
                all too common complaint of back pain brought on by lifestyle
                habits. &nbsp; <CloseQuote />
                <br />
                <br />
                <TestimonialName>
                  <p>
                    <strong>- Alasdair </strong>
                    <br />
                    <em>Patient at Keystone Therapies</em>
                  </p>
                </TestimonialName>
              </MoreInfoWrap>
            )}
            <button onClick={handleShowMore2}>
              {!showMore2 && "View Details"}
              {showMore2 && "View Less"}

              <Arrow />
            </button>
          </InfoWrap>
        </InfoRow>
      </Container>
    </Section>
  );
};

export default Listings;
