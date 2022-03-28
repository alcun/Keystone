import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import ImageOne from "../images/photo1(1).jpg";
import Conditions from '../images/conditions2.jpg';




const Section = styled.section`
width: 100%;
height: 100%;
padding: 4rem 0rem;
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


}
h5 {
    margin-bottom: 5px;

}

li {
    margin-bottom: 5px;
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
`

const title = "Conditions That Have Been Managed Include:"

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

const InfoList = ({heading, paragraphOne, paragraphTwo, buttonLabel, buttonLabel2, buttonLabel3, reverse, image, delay}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft
        reverse={reverse}
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
        data-aos-delay={delay}
        data-aos-anchor-placement="center bottom"
        >
          <h1>{title.toUpperCase()}</h1>
          <ul>
        <li>Back & Neck pain</li>
        <li>Skin diseases (acne / hives / psorasis)</li>
        <li>Lowering cholesterol</li>
        <li>Migranes & headcaches</li>
        <li>Knee pain</li>
        <li>Knee arthritis</li>
        <li>Improving immune function</li>
        <li>Cervical sprain/strain</li>
        <li>Mid back pain</li>
        <li>Lumbar sprain/ strain</li>
        <li>Carpal tunnel syndrome (wrist pain)</li>
        <li>Plantar Fascities (foot pain)</li>
        <li>Lateral Epicondylities (tennis elbow)</li>
        <li>Medial epicondyltites (golfers elbow)</li>
        <li>Rotator cuff tendonitis (shoulder pain)</li>
        <li>Patellofemoral Disorders (knee pain)</li>
        <li>Achilies Tendinitis (ankle pain)</li>
        <li>Scar Tissuse</li>
        <li>Skin Splints</li>
        <li>Trigger finger</li>

        <li>And many more</li>


          </ul>
          {/* <Button to="#faq" primary="true">{buttonLabel}</Button> */}
        </ColumnLeft>
        <ColumnRight reverse={reverse} >
        <img src={Conditions} alt="home"
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

export default InfoList;
