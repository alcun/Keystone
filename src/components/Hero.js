import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { Button } from "./Button";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

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
  height: 50vh;
  color: #fff;
  padding: 1rem;
  background-color: #00000080;
  border-radius: 10px;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 85vw;
    height: 55vh;
    padding: 2rem;
    top: -5%;

    // margin-left: -10%;
  }
  h1 {
    font-size: clamp(2rem, 16vw, 4rem);
    font-weight: 600;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: center;
    margin-bottom: 0.8rem;
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
    font-weight: 510;
    margin-bottom: 1.8rem;
    text-shadow: 2px 2px 5px black;
  }

  a {
    background: #12b886;
    white-space: nowrap;
    outline: none;
    box-shadow: 0 0 2px;
    z-index: 99;
    border: 2px #fff solid;
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
    color: ${({ primary }) => (primary ? "#fff" : "#fff")};
    font-size: ${({ big }) => (big ? "20px" : "14px")};
    font-weight: 550;
    &:hover {
      transform: translateY(-2px);
      background: white;
      color: #12b886;
      border: 2px #12b886 solid;
    }
  }

  @media screen and (max-width: 768px) {
    // width: calc(100% - 100px);
    // margin-left: -10%;
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

  @media screen and (max-width: 768px) {
  }

  &:hover {
    background: #12b886;
    transform: scale(1.05);
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
                    <HeroContent>
                      <h1 data-aos="fade-down" data-aos-duration="600">
                        {slide.title}
                      </h1>

                      <p
                        data-aos="fade-down"
                        data-aos-duration="600"
                        data-aos-delay="200"
                      >
                        {slide.description1}
                      </p>
                      {/* <p data-aos="fade-down" data-aos-duration="600" data-aos-delay="200">
                        {slide.description2}
                      </p> */}

                      {current === 0 && (
                        <a
                          href="#info1"
                          data-aos="zoom-out"
                          data-aos-duration="800"
                          data-aos-delay="30"
                        >
                          About <Arrow />
                        </a>
                      )}

                      {current != 0 && (
                        <Button
                          data-aos="zoom-out"
                          data-aos-duration="800"
                          data-aos-delay="300"
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
