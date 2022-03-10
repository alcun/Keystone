import React from 'react'
import Accordion from '../components/Accordion';
import Info from '../components/Info';
import { InfoDataFive, InfoDataOne, InfoDataTwo } from '../data/InfoData';

const Faq = () => {
  return (
    <>
    <Info {...InfoDataFive}/>
    <Accordion/>
    </>
  )
}

export default Faq;