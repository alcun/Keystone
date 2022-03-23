import React, { useState } from "react";
import { FaqData } from "../data/FaqData";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 1500px;
  background: #;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    height: 2800px;
    margin-top: -40vh;
  }

  h1 {
    color: #fff;
    background: #000d1a;
    padding: 1rem;
    text-align: center;
  }
`;

const Container = styled.div`
  position: absolute;
  // top: 15%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  width: 80vw;
  
  

  h1 {
      color: #12b886;
      // border-radius: 5px;


  }
`;

const QuestionCard = styled.div``

const Wrap = styled.div`
  color: #000d1a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  background: #fff;
  border: 2px solid #000d1a;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }


  h1 {
    padding: 2rem;
    font-size: 2rem;
    width: 100%;
    @media screen and (max-width: 768px) {
      padding: 1rem;
    }
  }

  h2 {
    padding: 2rem;
    font-size: 1.5rem;
    width: 100%;
    @media screen and (max-width: 768px) {
      padding: 1rem;
    }
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #000d1a;
  color: #00ffb9;
  width: 100%;
  // height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 5px;


  padding: 2.5rem;


  @media screen and (max-width: 768px) {
    height: auto;
    // text-align: center;
    padding: 2rem;

  }
  p {
    font-size: 1rem;
    color: #fff;


    @media screen and (max-width: 768px) {
      margin-bottom: 5px;

  
    }
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#12b886", size: "25px" }}>
      <AccordionSection>
        <Container>
          <h1>Frequently Asked Questions</h1>

          {FaqData.map((item, index, key) => {
            return (
              <QuestionCard key={item.key}>
                <Wrap onClick={() => toggle(index)}>
                  <h2 key={key}>{item.question}</h2>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p >{item.answer}</p>
                    <p >{item.answer2}</p>
                    <p >{item.answer3}</p>
                    <p >{item.answer4}</p>
                    <p >{item.answer5}</p>

              

                  </Dropdown>
                ) : null}
              </QuestionCard>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
