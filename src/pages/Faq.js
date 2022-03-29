import React from 'react'
import Accordion from '../components/Accordion';
import Info from '../components/Info';
import InfoEmail from '../components/InfoEmail';
import { InfoDataFive, InfoDataOne, InfoDataTwo } from '../data/InfoData';

const Faq = () => {
  return (
    <>
    <InfoEmail {...InfoDataFive}/>
    <Accordion id="faq" />
    
    </>
  )
}

export default Faq;