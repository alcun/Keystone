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
        <li>Back & Neck Pain</li>
        <li>Skin Diseases (Acne / Hives / Psoriasis)</li>
        <li>Lowering Cholesterol</li>
        <li>Migranes & Headaches</li>
        <li>Knee Pain</li>
        <li>Knee Arthritis</li>
        <li>Improving Immune Function</li>
        <li>Cervical Sprain / Strain</li>
        <li>Mid Back Pain</li>
        <li>Lumbar Sprain / Strain</li>
        <li>Carpal Tunnel Syndrome (Wrist Pain)</li>
        <li>Plantar Fascities (Foot Pain)</li>
        <li>Lateral Epicondylities (Tennis Elbow)</li>
        <li>Medial Epicondyltites (Golfer's Elbow)</li>
        <li>Rotator Cuff Tendonitis (Shoulder Pain)</li>
        <li>Patellofemoral Disorders (Knee Pain)</li>
        <li>Achilies Tendinitis (Ankle Pain)</li>
        <li>Scar Tissue</li>
        <li>Skin Splints</li>
        <li>Trigger Finger</li>

        <li>And Many More!</li>


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
