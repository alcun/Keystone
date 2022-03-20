import React from 'react'
import Features from '../components/Features'
import Info from '../components/Info'
import Listings from '../components/Listings'
import { InfoDataNine, InfoDataSeven, InfoDataTwo } from '../data/InfoData'
import FeaturesRight from '../components/FeaturesRight'
import { ServicesDataFive, ServicesDataFour, ServicesDataOne, ServicesDataThree, ServicesDataTwo } from '../data/ServicesData'
import InfoList from '../components/InfoList'



const Services = () => {
  return (
    <>
    <Info {...InfoDataSeven}/>
    <InfoList/>
<h1>The techniques used to achieve these results include:</h1> <br/>
<Features {...ServicesDataOne} />
<FeaturesRight {...ServicesDataTwo}/>  
<Features {...ServicesDataThree}/>
<FeaturesRight {...ServicesDataFour}/>  


</>

)
}

export default Services