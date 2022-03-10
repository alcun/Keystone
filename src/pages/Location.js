import React from 'react'
import Map from 'react-map-gl';
import Info from '../components/Info';
import { InfoDataFour, InfoDataOne, InfoDataTwo } from '../data/InfoData';


const Location = () => {
  return (
    <div>
          <Info {...InfoDataFour}/>

    <h1>Location</h1>
    <h1>Location</h1>
    <h1>Location</h1>
    <h1>Location</h1>
    <h1>Here we can have clinic adress</h1>
    <h1>Google Maps</h1>
    <h1>Direct to booking form</h1>
    <h1>COntact Details/Form</h1>
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
  )
}

export default Location