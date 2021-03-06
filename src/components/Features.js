import React, { useState } from "react";
import styled from "styled-components";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { Modal } from "./Modal";


const Section = styled.section`
  background-color: #000000;
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='4.5' stroke-opacity='0.96'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");

  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // border-bottom: #12b886 1px solid;
  border-top: #12b886 2px solid;
`;
const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
  // border-radius: 10px;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;
`;

const Content = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 1200px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #12b886;
    @media screen and (max-width: 1200px) {
      margin-bottom: 0.5rem;

    }
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
    @media screen and (max-width: 1200px) {
      margin-bottom: 0.5rem;

    }
  }
`;

const Arrow = styled(HiOutlineArrowCircleRight)`
  margin-left: 0.8rem;
  font-size: 1rem;
`;

const ColumnRight = styled.div`
position: absolute;
top: -80px;
right: 0;
max-width: 850px;
height: 140%;
width: 45%
padding:left: 1rem;

@media screen and (max-width: 1200px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
}
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  // border: #12b886 3px solid;
  // border-radius: 10px;
`;

const ModalButton = styled.button`
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

const Features = ({
  heading,
  image,
  paragraphOne,
  paragraphTwo,
  modalHeading,
  modalParagraphOne,
  modalParagraphTwo,
  modalBenefit1,
  modalBenefit2,
  modalBenefit3,
}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
              data-aos-once="true"
              //   data-aos-anchor-placement="center bottom"
            >
              <h2>{heading.toUpperCase()}</h2>
              <p>{paragraphOne}</p>
              {/* <p>{paragraphTwo}</p> */}
              <ModalButton onClick={openModal}>Learn More <Arrow /></ModalButton>
              <Modal
                modalHeading={modalHeading}
                modalParagraphOne={modalParagraphOne}
                modalParagraphTwo={modalParagraphTwo}

                showModal={showModal}
                setShowModal={setShowModal}
              />
            </Content>
          </ColumnLeft>
          <ColumnRight>
            <Image
              src={image}
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-once="true"
              //   data-aos-anchor-placement="center bottom"
            />
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  );
};

export default Features;
