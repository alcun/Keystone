import React from 'react'
import Features from '../components/Features'
import Info from '../components/Info'
import Listings from '../components/Listings'
import { InfoDataNine, InfoDataSeven, InfoDataTwo } from '../data/InfoData'
import FeaturesRight from '../components/FeaturesRight'
import { ServicesDataFive, ServicesDataFour, ServicesDataOne, ServicesDataThree, ServicesDataTwo } from '../data/ServicesData'
import InfoList from '../components/InfoList'
import styled from 'styled-components'

const ServicesTitle = styled.div`
h2 {
  margin-left: 30px;
}
`


const Services = () => {
  return (
    <>
    <Info {...InfoDataSeven}/>
    <InfoList/>
    <ServicesTitle>
<h2             data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="800"

            data-aos-once="true"
            >TREATMENT METHODS:</h2> <br/>
</ServicesTitle>
<Features {...ServicesDataOne} />
<FeaturesRight {...ServicesDataTwo}/>  
<Features {...ServicesDataThree}/>
<FeaturesRight {...ServicesDataFour}/>  


</>

)
}

export default Services