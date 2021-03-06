import React from "react";
import Gallery from "../components/Gallery";
import Info from "../components/Info";
import { GalleryDataOne } from "../data/GalleryData.js";
import { InfoDataFour } from "../data/InfoData";
import styled from "styled-components";
import MapOne from "../images/map1.png"
import MapTwo from "../images/map2.png"


const LocationSection = styled.div`
h2 {
  color: #12b886;

}
`

const LocationWrapper = styled.div`
width: 100%;
height: 90vh;
display: flex;
flex-direction: column;
justify-content: space-around;



@media screen and (max-width: 768px) {
  height: auto;
}
`

const LocationInfo = styled.div`
margin-left: 30px;
margin-top: 20px;
margin-right: 30px;
li {
  margin-left: 30px;

}

`

const LocationImages = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

img {
  width: 40vw;

  @media screen and (max-width: 668px) {
    width: 75vw;
  }

}

@media screen and (max-width: 668px) {
  flex-direction: column;
  justify-content: space-around;
  height: 95vh;

}
`




const Location = () => {
  return (
    <LocationSection >
      <Info {...InfoDataFour} />
 
      <LocationWrapper id="title">
        <LocationInfo
         data-aos="fade-left"
         data-aos-duration="2000"
         data-aos-once="true"
         data-aos-anchor-placement="center bottom">
      <h2 >OUR LOCATION:</h2> <br/>
      <ul>You can find the clinic at:</ul> <br/>
      <li>Ashton House, 15 Chadwick Street, Moreton, Wirral</li>
      <li>Parking is available on site.</li><br/>

      <ul>The clinic is also easily accessible via public transport:</ul> <br/>
        <li>Moreton train station situated approximately 0.8
miles to the north.</li>
<li>Regular bus routes within
100 metres on both Hoylake and Upton Road.</li>

      </LocationInfo>

      <LocationImages
             data-aos="fade-up"
             data-aos-duration="2000"
             data-aos-once="true"
             data-aos-anchor-placement="center bottom">
      <br/>      <br/>


      <img src={MapOne} alt="Our Location"/>
      <img src={MapTwo} alt="Our Location"/>
      <br/>      <br/>


      </LocationImages>
      </LocationWrapper>
      <br/>

      <LocationInfo>
      <h2 id="title2"
               data-aos="fade-left"
               data-aos-duration="2000"
               data-aos-once="true"
               data-aos-anchor-placement="center bottom"
      >CLINIC GALLERY:</h2>
      
      </LocationInfo>
      <Gallery {...GalleryDataOne} 

               /> 
    <br/>
  
    <LocationInfo
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2000"

            data-aos-once="true"
            data-aos-anchor-placement="top-center"
    >
      <h2>WANT TO KNOW MORE?</h2> <br/>
      You can send us any queries via: 
      <br/>      <br/>

      <ul>
      <li>Email: <a href="mailto:hello@keystone-therapies.co.uk?subject=Mail from Site">hello@keystone-therapies.co.uk</a>  </li>
      <li>Phone / Whatsapp: <a href="tel:+447491822789">07491822789</a>  </li>
      </ul>
<br/>

      </LocationInfo>
      <br/>
    </LocationSection>
  );
};

export default Location;
