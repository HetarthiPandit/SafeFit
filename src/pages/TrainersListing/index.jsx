import React, { useEffect } from 'react'
import TrainersListingBanner from './TrainersListingBanner/TrainersListingBanner'
// import Trainers from './Trainers/Trainers'
import TranersSlider from './TranersSlider/TranersSlider'
import TrainerBox from './TrainerBox/TrainerBox'
import Experience from '../Home/Experience/Experience'

function TrainersListing() {
  useEffect(()=>{
    window.scrollTo(0, 0)
},[])
  return (
    <div>
      <TrainersListingBanner/>
      {/* <Trainers/> */}
      {/* <TranersSlider/> */}
      <TrainerBox/>
      <Experience/>
    </div>
  )
}

export default TrainersListing
