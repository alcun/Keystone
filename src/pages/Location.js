import React from "react";
import Gallery from "../components/Gallery";
import Info from "../components/Info";
import { GalleryDataOne } from "../data/GalleryData.js";
import { InfoDataFour, InfoDataOne, InfoDataTwo } from "../data/InfoData";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from "styled-components";
import MapOne from "../images/map1.png"
import MapTwo from "../images/map2.png"


const MapboxContainer = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;
padding: 50px;
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

`

const LocationImages = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

img {
  width: 40vw;

  @media screen and (max-width: 768px) {
    width: 75vw;
  }

}

@media screen and (max-width: 768px) {
  flex-direction: column;
  justify-content: space-around;
  height: 95vh;

}
`




const Location = () => {
  return (
    <div>
      <Info {...InfoDataFour} />
 
      <LocationWrapper>
        <LocationInfo
         data-aos="fade-left"
         data-aos-duration="2000"
         data-aos-once="true"
         data-aos-anchor-placement="center bottom">
      <h2>OUR LOCATION:</h2> <br/>
      <ul>You can find the clinic at:</ul> <br/>
      <li>Ashton House, 15 Chadwick Street, Moreton, Wirral</li>
      <li>Parking is available on site.</li><br/>

      <ul>The clinic is also easily accessible via public transport:</ul> <br/>
        <li>Moreton train station situated approximately 0.8
miles to the north</li>
<li>Regular bus routes within
100 metres on both Hoylake and Upton Road.</li>

      </LocationInfo>

      <LocationImages
             data-aos="fade-up"
             data-aos-duration="2000"
             data-aos-once="true"
             data-aos-anchor-placement="center bottom">
      <br/>

      <img src={MapOne}/>
      <img src={MapTwo}/>
      <br/>

      </LocationImages>
      </LocationWrapper>
      <br/>

      <LocationInfo>
      <h2
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
            data-aos-delay="1500"

            data-aos-once="true"
            data-aos-anchor-placement="top-center"
    >
      <h2>WANT TO KNOW MORE?</h2> <br/>
      <ul>You can send us an email at: </ul>
      <li>hello@keystone-therapies.co.uk</li> <br/>
      <p>We will answer questions n shiet</p> <br/>

      </LocationInfo>
      <br/>
    </div>
  );
};

export default Location;
