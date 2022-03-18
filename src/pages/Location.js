import React from "react";
import Gallery from "../components/Gallery";
import Info from "../components/Info";
import { GalleryDataOne } from "../data/GalleryData.js";
import { InfoDataFour, InfoDataOne, InfoDataTwo } from "../data/InfoData";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from "styled-components";

const MapboxContainer = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;
padding: 50px;
`

const Map = ReactMapboxGl({ accessToken: "pk.eyJ1IjoiYWxjdW4iLCJhIjoiY2wwdnI5bDduMDRoaDNqbXlkaWo5aGYzZSJ9.p0OJo3uXd-6AHpCcKcz5GQ"});


const Location = () => {
  return (
    <div>
      <Info {...InfoDataFour} />
 
      <br/><br/>
      <h1>Some pictures of the Clinic</h1> <br/>
      <Gallery {...GalleryDataOne}/>

  
  <MapboxContainer>
    <h1>Our Location</h1>
    <br/>
      <Map
         initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5
        }}
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '45vh',
    width: '60vw',
    padding: '50px',
    borderRadius: '5px',
  }}
>
  <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
    <Feature coordinates={[53.435282, -3.166914]} />
  </Layer>
</Map>;
</MapboxContainer>

    </div>
  );
};

export default Location;
