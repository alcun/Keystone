import React from "react";
import Map from "react-map-gl";
import Gallery from "../components/Gallery";
import Info from "../components/Info";
import { GalleryDataOne } from "../data/GalleryData.js";
import { InfoDataFour, InfoDataOne, InfoDataTwo } from "../data/InfoData";

const Location = () => {
  return (
    <div>
      <Info {...InfoDataFour} />
      <h1>Location</h1>
      <h1>Map</h1>
      <br/><br/>
      <h1>Some pictures of the Clinic</h1> <br/>
      <Gallery {...GalleryDataOne}/>
  
      {/* <Map
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  />; */}
    </div>
  );
};

export default Location;
