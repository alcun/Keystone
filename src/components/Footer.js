import React from "react";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import Logo1 from "../images/logo.svg";




const Section = styled.section`
  background: #000;
  color: #fff;
  width: 100%;
  min-height: 600px;
  padding: 3rem calc((100vw - 1300px) / 2);
  border-top: 5px solid #12b886;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: -60px;

  }
`;

const Quote = styled.div`
  display: flex;
  flex: 1;
  padding: 2rem 0rem;
  align-items: center;
  justify-content: flex-start;
  margin-left: -5%;
  // border: 5px solid white;
  // text-shadow: 2px 2px 5px black;


  img {
    background-color: white;

  }

  p {
    font-size: clamp(2rem, 8vw, 5rem);
      color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  text-decoration: none;
  transition: all ease 0.5s;
  border-radius: 5px;
  border: 2px solid transparent;
  text-shadow: 2px 2px 5px black;
  font-weight: 700;

  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;

  }
`;

const FooterInfo = styled.div`
  padding: 2rem;
  line-height: 3;
  display: flex;
  flex-direction: column;
  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #12b886;
      // background: #000d1a;
    }
  }

  h2 {
    text-decoration: underline;
    color:  #fff;
    font-weight: 400;
   
  
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  padding: 2rem 0rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const SocialIcons = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const Icons = css`
font-size: clamp(1rem, 6vw, 2rem);
margin-right: 1.5rem;
color #12b886;
&:hover{
  color: #fff;



}

`;

const Instagram = styled(FaInstagram)`
  ${Icons}
`;
const Facebook = styled(FaFacebookF)`
  ${Icons}
`;
const LinkedIn = styled(FaLinkedin)`
  ${Icons}
`;
const Youtube = styled(FaYoutube)`
  ${Icons}
`;

const Whatsapp = styled(FaWhatsapp)`
  ${Icons}
`;

const Contact = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    // width: 35%;
    height: 50px;
    padding: 10px;
    border: 2px solid #fff;
    background-color: #12b886;
    color: #fff;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 15px;
    margin-bottom: 30px;
    // margin-left: 15px;
    margin-right: 15px;
    &:hover {

      transform: translateY(-2px);
      background: #fff;
      color: #12b886;
      border: 2px #12b886 solid;
    }
`;

const CTags = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: -70px;

  h6 {
  }

  a {
    background-color: transparent;
    color: #12b886;

    &:hover {
      color: #fff;
      box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);

    }


  }
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <Quote
            
          >
            <img src={Logo1} />

            <p    data-aos="zoom-out"
            data-aos-duration="2000">
              KEYSTONE
              <br />
              THERAPIES
            </p>
          </Quote>
          <FooterInfo
            data-aos="fade-left"
            data-aos-duration="2000"
            // data-aos-once="true"
          >
            <h2>INFORMATION</h2>
            <Link to="/">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/testimonials">Testimonials</Link>
          </FooterInfo>
          <FooterInfo
            data-aos="fade-left"
            data-aos-duration="2000"
            // data-aos-once="true"
          >
            <h2>CONTACT</h2>
            <Link to="/location">The Clinic</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/booking">Bookings</Link>
          </FooterInfo>
        </FooterTop>
        <FooterBottom>
          <SocialIcons
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="center bottom"
            // data-aos-once="true"
          >
         

            <a
              href="https://www.instagram.com/keystonetherapies/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram />
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=4407491822789&text=Hello!"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Whatsapp />
            </a>


          </SocialIcons>
          <Contact>
          <a href="mailto:hello@keystone-therapies.co.uk?subject=Mail from Site"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-anchor-placement="center bottom"
              // data-aos-once="true"
            > Get in Touch &nbsp;
              <HiOutlineArrowCircleRight />
            </a>
          </Contact>
        </FooterBottom>
        <CTags
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-anchor-placement="center bottom"
          // data-aos-once="true"
        >
          <h4>©&nbsp;2022 Keystone Therapies</h4> <br />
          <h6>
            Site by <a target="_blank" rel="noopener" href="https://alcun.github.io/Portfolio/">alcun</a>
          </h6>
        </CTags>
      </Container>
    </Section>
  );
};

export default Footer;
