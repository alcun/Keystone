import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { Button } from "./Button";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Logo1 from "../images/logo.svg";

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  background-color: #000;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  width: 100%;
  height: 100%;
`;

const HeroSlider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;



&::before{
    content: '',
    position: absolute;
    width:100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    // overflow: hidden;
    opacity: 0.1;
    background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 100%)


}

`;

const HeroImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const HeroContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  // max-width: 1600px;
  width: 50%;
  // height: 60vh;
  color: #fff;
  padding: 2rem;
  // background-color: #00000080;
  border-radius: 10px;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 85vw;
    // height: 70vh;
    padding: 1rem;
    top: -5%;

    // margin-left: -10%;
  }
  h1 {
    font-size: clamp(2rem, 16vw, 4rem);
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    // margin-bottom: 0.8rem;
    color: #12b886;
    text-shadow: 2px 2px 5px black;

    @media screen and (max-width: 768px) {
      font-size: clamp(1.5rem, 11vw, 2.6rem);
    }
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: center;
    font-weight: 400;
    margin-bottom: 1.8rem;
    text-shadow: 2px 2px 5px black;
    font-size: 1.4rem;
    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

const Arrow = styled(HiOutlineArrowCircleRight)`
  margin-left: 0.8rem;
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;

  @media screen and (max-width: 768px) {
    right: auto;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    bottom: 20px;
  }
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: black;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  border: 2px solid transparent;

  &:hover {
    background: #12b886;
    transform: scale(1.05);
    border: 2px solid #fff;
  }
`;

const SplashLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background: #00000080;
  border-radius: 5px;
  padding: 2rem;
  margin-top: 10vh;
  width: 70vw;
  

  @media screen and (max-width: 768px) {
    width: 90vw
    padding: 1rem;
  }


  }

  h2 {
    font-size: clamp(2rem, 16vw, 4rem);
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    // margin-bottom: 0.8rem;
    color: #fff;
    text-shadow: 4px 4px 10px black;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: clamp(1rem, 8vw, 2rem);
    }
  }
  p {
    width: 100%;
    font-weight: 400;
    font-size: 1.4rem;
    // margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: center;
    font-weight: 400;
    margin-bottom: 1.8rem;
    text-shadow: 2px 2px 5px black;
    
    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
      width: 85vw;

    }
  }

  a {
    background: #fff;
    white-space: nowrap;
    outline: none;
    box-shadow: 0 0 2px;
    z-index: 99;
    border: 2px #12b886 solid;
    border-radius: 5px;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
    color: #12b886;
    font-size: ${({ big }) => (big ? "20px" : "14px")};
    font-weight: 550;
    &:hover {
      transform: translateY(-2px);
      background: #12b886;
      color: white;
      border: 2px #fff solid;
    }
  }
`;

const Logo = styled.div`
  background-color: #000;
  border-radius: 5px;
  border: 4px solid white;
  width: 450px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    background-color: #fff;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    width: 60vw;
    padding: 0.5rem;
  }
`;

const PrevArrow = styled(HiOutlineArrowCircleLeft)`
  ${arrowButtons}
`;

const NextArrow = styled(HiOutlineArrowCircleRight)`
  ${arrowButtons}
`;

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 10000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    // console.log(currentSlide)
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    // console.log(currentSlide)
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 0 },
  };

  return (
    <HeroSection>
      <HeroWrapper>
        <AnimatePresence>
          {slides.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                {index === current && (
                  <HeroSlider>
                    <HeroImage
                      src={slide.image}
                      alt={slide.alt}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={fadeAnimation}
                    />
                    <HeroContent
                      style={{
                        background: index === 0 ? "transparent" : " #00000080",
                      }}
                    >
                      {index != 0 && (
                        <h1 data-aos="fade-down" data-aos-duration="1000">
                          {slide.title}
                        </h1>
                      )}

                      {index === 0 && (
                        <SplashLogo
                          data-aos="fade-down"
                          data-aos-duration="1000"
                        >
                          <br />
                          <br />
                          <Logo>
                            <img src={Logo1} />
                            <h2>
                              KEYSTONE
                              <br />
                              THERAPIES
                            </h2>
                          </Logo>

                          <br />

                          <p
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-delay="1200"
                          >
                            {slide.description1}
                          </p>
                          <a
                            href="#info1"
                            data-aos-anchor-placement="center bottom"
                            data-aos="zoom-out"
                            data-aos-duration="1000"
                            data-aos-delay="2500"
                          >
                            About <Arrow />
                          </a>
                        </SplashLogo>
                      )}
                      <br />
                      {index != 0 && (
                        <p
                          data-aos="fade-down"
                          data-aos-duration="1000"
                          data-aos-delay="1200"
                        >
                          {slide.description1}
                        </p>
                      )}
                      {/* <p data-aos="fade-down" data-aos-duration="600" data-aos-delay="200">
                        {slide.description2}
                      </p> */}

                      {current != 0 && (
                        <Button
                          data-aos="zoom-out"
                          data-aos-duration="1000"
                          data-aos-delay="2500"
                          to={slide.path}
                          primary="true"
                          css={`
                            max-width: 200px;
                            z-index: 99;
                          `}
                        >
                          {slide.label}
                          <Arrow />
                        </Button>
                      )}
                    </HeroContent>
                  </HeroSlider>
                )}
              </HeroSlide>
            );
          })}
        </AnimatePresence>
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />

          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
