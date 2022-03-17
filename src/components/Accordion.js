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
  width: 80%

  @media screen and (max-width: 768px) {
    height: 30px;
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
  top: 15%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  width: 80vw;
  
  

  h1 {
      color: #12b886;
      // border-radius: 5px;


  }
`;

const Wrap = styled.div`
  color: #000d1a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  background: #fff;
  border: 2px solid #000d1a;


  h1 {
    padding: 2rem;
    font-size: 2rem;
    width: 100%;
  }

  h2 {
    padding: 2rem;
    font-size: 1.5rem;
    width: 100%;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #000d1a;
  color: #00ffb9;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;


  padding: 3rem;

  p {
    font-size: 1rem;
    color: #fff;
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
          <h1>Some Frequently Asked Questions</h1>

          {FaqData.map((item, index, key) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)}>
                  <h2 key={key}>{item.question}</h2>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p key={key}>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
