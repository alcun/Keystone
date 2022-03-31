import styled from "styled-components/macro";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Speech from "../images/speech2.svg";

const Section = styled.section`
width: 100%;
height: auto;
padding 1rem calc((100vw - 1300px) / 2) 15rem;
`;
const Container = styled.div`
  height: auto;
  width: 100%;
  padding: 2rem 1rem;
`;


const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0rem;
  margin-bottom: 10vh;
  // align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoWrap = styled.div`
padding: 0rem 1rem;
min-height: 550px;
height: 100%
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;



@media screen and (max-width: 768px){
  margin-bottom: 1rem;
}

button {
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



const SpeechBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 400px;
  object-fit: fill;
  margin-bottom: 0.5rem;
  background-position: center;
  background-image: url(${Speech});
  // background-size: cover;
  background-repeat: no-repeat;
  max-width: 500px;
  max-height: 400px;
  position: relative;
  padding: 1rem;
  // min-width: 250px;
  // min-height: 400px;
  @media screen and (max-width: 768px){
     width: 100%;
     height: 35vh;
    padding: 2.2rem;

  }


  h2 {
    width: 40%;
    margin-bottom: 8rem;
    margin-right: 1.5rem;
    color: #12b886;

    @media screen and (max-width: 850px){
      width: 80%;
      margin-bottom: 5rem;
      font-size: 1.1rem;
      // margin-right: 2rem;


    }
  }
`;

const OpenQuote = styled(FaQuoteLeft)``;

const CloseQuote = styled(FaQuoteRight)``;



const MoreInfoWrap = styled.div`
position: relative;
max-width: 500px;
color: white;
background: #12b886;
border-radius 5px;
padding: 1rem;
box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);



`;

const TestimonialName = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;



const Listings = () => {
  return (
    <Section id="title">
      <Container>
        <InfoRow>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="true"
            // data-aos-delay="1000"

            data-aos-anchor-placement="center bottom"
          >
            {/* <Image src={Testimonials2} alt="home" /> */}
            <SpeechBox>
              <h2>
                {" "}
                Would Not Hesitate to Recommend{" "}
              </h2>
            </SpeechBox>
            <br />
            <MoreInfoWrap>
              <OpenQuote /> &nbsp; I have had several treatments from John over
              the past few months and have always had a professional, friendly
              and faultless treatment. <br />
              I would not hesitate to recommend him to others. &nbsp;
              <CloseQuote />
              <br /> <br />
              <TestimonialName>
                <p>
                  <strong>- Sarah </strong>
                  <br />
                  <em>Patient at Keystone Therapies</em>
                </p>
              </TestimonialName>
            </MoreInfoWrap>
          </InfoWrap>

          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            // data-aos-delay="1000"

            data-aos-anchor-placement="center bottom"
          >
            {/* <Image
              src={Testimonials1}
              alt="home"
         
            /> */}
            <SpeechBox
              css={`
                margin-top: 120px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            >
              <h2>
                So Thankful I Found Some Relief
              </h2>
            </SpeechBox>
            <MoreInfoWrap>
              <OpenQuote /> &nbsp; I am so glad I visited the clinic about my
              neck pain, after having the treatment I felt an immediate relief
              from my symptoms and by the 3rd session I was completely pain
              free! &nbsp;
              <CloseQuote />
              <br />
              <br />
              <TestimonialName>
                <p>
                  <strong>- Ben </strong>
                  <br />
                  <em>Patient at Keystone Therapies</em>
                </p>
              </TestimonialName>
            </MoreInfoWrap>
          </InfoWrap>
        </InfoRow>

        <br />

        <InfoRow>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="true"
            // data-aos-delay="1000"

            data-aos-anchor-placement="center bottom"
          >
            {/* <Image src={Testimonials2} alt="home" /> */}

            <SpeechBox>
              <h2>
                Persistence and Professionalism
              </h2>
            </SpeechBox>
            <MoreInfoWrap>
              <OpenQuote />
              &nbsp; Completely professional and friendly. <br />
              His approach is persistent, will definitely fix your problem!
              <br />
              Been going to him for almost a year now and cannot recommend his
              services enough! &nbsp;
              <CloseQuote />
              <br /> <br />
              <TestimonialName>
                <p>
                  <strong>- Mikey </strong>
                  <br />
                  <em>Patient at Keystone Therapies</em>
                </p>
              </TestimonialName>
            </MoreInfoWrap>
          </InfoWrap>

          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            // data-aos-delay="1000"

            data-aos-anchor-placement="center bottom"
          >
            {/* <Image
              src={Testimonials1}
              alt="home"
              css={`
                margin-top: 120px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            /> */}
            <SpeechBox
             css={`
             margin-top: 120px;
             @media screen and (max-width: 768px) {
               margin-top: 0px;
             }
           `}
            >
              <h2>A Hunch for Healing</h2>
            </SpeechBox>
            <MoreInfoWrap>
              <OpenQuote /> &nbsp; In my job as a web developer I spend a lot of
              time sat down looking at a screen. <br />
              <br />
              I have always tried to stay active and balanced with posture
              awareness, stretching and exercise but little by little a hunching
              habit had emerged bringing with it stiffness and discomfort.
              <br />
              <br />
              During my consultation with John his deep knowledge of human
              anatomy allowed him to identify the source of the problem, the
              muscles and joints it was manifesting in and the lifestyle habits
              that were contributing to it. <br />
              <br />
              After an initial session involving Massage, Graston and Cupping
              Therapy I noticed the results immediately - in improving the range
              of motion in my neck and shoulders and lessening the stiffness and
              pain it had brought immense relief. <br />
              <br />
              John really knows what he is doing and I've lost count of the
              people I've recommended his treatments to to after hearing the all
              too common complaint of back pain brought on by lifestyle habits.
              &nbsp; <CloseQuote />
              <br />
              <br />
              <TestimonialName>
                <p>
                  <strong>- Alasdair</strong>
                  <br />
                  <em>Patient at Keystone Therapies</em>
                </p>
              </TestimonialName>
            </MoreInfoWrap>
          </InfoWrap>
        </InfoRow>
      </Container>
    </Section>
  );
};

export default Listings;
