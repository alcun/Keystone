import React from 'react'
import HealthForm from '../components/HealthForm/HealthForm'
import Info from '../components/Info'
import { InfoDataEight} from '../data/InfoData'

const Details = () => {
  return (
      <>
      <Info {...InfoDataEight}/>
    {/* <HealthForm/> */}
    </>
  )
}

export default Details