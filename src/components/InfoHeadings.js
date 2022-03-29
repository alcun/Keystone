import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";



const Section = styled.section`
width: 100%;
height: 100%;
padding: 4rem 0rem;
@media screen and (max-width: 768px){
  height: 220vh;
  margin-bottom: 50vh;

}



`;

const Container = styled.div`
padding: 3rem calc((100vw - 1300px) / 2);
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 800px;


@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
`;

const ColumnLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
line-height: 1.4;
padding: 1rem 2rem;
order: ${({reverse}) => (reverse ? '2' : '1')};

h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    color: #12b886;
      // text-shadow: 0.5px 0.5px 1px black;


}

p {
    margin-bottom: 2rem;
}
`;

const ColumnRight = styled.div`
padding: 1rem 2rem;
order: ${({reverse}) => (reverse ? '1' : '2')};
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px) {
    order: ${({reverse}) => (reverse ? '2' : '1')};
    margin-top: 150px

}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    

    @media screen and (max-width: 768px){
        width: 90%;
        height: 90%;
    }
}
`;

const LinkContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
color: green;
`


const BtnRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 20px 20px;
padding: 1rem 2rem;
@media screen and (max-width: 768px){
  flex-direction: column;
  margin-bottom: 150px;
}

`

const InfoHeading = ({heading, paragraphOne, paragraphTwo, buttonLabel1, buttonLabel2, buttonLabel3, reverse, image, delay}) => {
  return (
    <Section id="info1">
      <Container>
        <ColumnLeft
        reverse={reverse}
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
        data-aos-delay={delay}
        data-aos-anchor-placement="center bottom"
        >
          <h1>{heading.toUpperCase()}</h1>
          <h3><u>Offering Consistency with Tailored Treatment Plans</u></h3>
          <p>{paragraphOne} <em>everyone is unique.</em></p>
          <h3><u><strong>Health Screen Within Consultation Assessment</strong></u></h3>

          <p>{paragraphTwo}</p>


        </ColumnLeft>
        <ColumnRight reverse={reverse} >
        <img src={image} alt="home"
                data-aos="zoom-out"
                data-aos-duration="2000"
                data-aos-once="true"
                data-aos-delay={delay}
                data-aos-anchor-placement="center bottom"
        />
        </ColumnRight>
        
      </Container>
      {/* <BtnRow>
            <Button to="homes" primary="true">{buttonLabel1}</Button>
            <Button to="homes" primary="true">{buttonLabel2}</Button>
            <Button to="homes" primary="true">{buttonLabel3}</Button>
            </BtnRow> */}
    </Section>
  );
};

export default InfoHeading;