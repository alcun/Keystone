import React from 'react'
import Features from '../components/Features'
import Info from '../components/Info'
import Listings from '../components/Listings'
import { InfoDataSeven, InfoDataTwo } from '../data/InfoData'
import FeaturesRight from '../components/FeaturesRight'
import { ServicesDataFive, ServicesDataFour, ServicesDataOne, ServicesDataThree, ServicesDataTwo } from '../data/ServicesData'



const Services = () => {
  return (
    <>
    <Info {...InfoDataSeven}/>
    {/* <Info {...InfoDataTwo}/> */}

<Features {...ServicesDataOne} />
<FeaturesRight {...ServicesDataTwo}/>  
<Features {...ServicesDataThree}/>
<FeaturesRight {...ServicesDataFour}/>  


</>

)
}

export default Services