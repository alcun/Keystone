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
  height: 100vh;
  background: #;
  padding: 1rem;
  width: 100vw;

  @media screen and (max-width: 768px) {
    height: 150vh;
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

  padding: 1rem;

  p {
    font-size: 1rem;
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
                <Wrap onClick={() => toggle(index)} key={item.key}>
                  <h2>{item.question}</h2>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
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
