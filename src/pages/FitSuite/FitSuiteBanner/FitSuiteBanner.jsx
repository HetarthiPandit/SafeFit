import React from 'react'
import CommonBanner from '../../../components/Common/CommonBanner'
import FitSuit1 from "../../../assets/images/fitsuit1.jpg";
import FitSuit2 from "../../../assets/images/fitsuit2.jpg";
import FitSuit3 from "../../../assets/images/fitsuit3.jpg";

function FitSuiteBanner() {
  const secureData = [
    
    { src: FitSuit1, name: 'Personal Trainer', description: 'Fully Equipped Fitness Commons' },
    { src: FitSuit2, name: 'Personal Trainer', description: 'Mind & Body Wellness Commons' },
    { src: FitSuit3, name: 'Personal Trainer', description: 'Train Smarter, Perform Better' },
   
];
  return (
    <div>
      <CommonBanner secureData={secureData}title={"Premium Fitness Studios at SafeFit"} description={"Unleash Your Potential at SafeFit's Elite Fitness Studio where Luxury Meets Performance for Your Ultimate Workout Experience!"}/>
    </div>
  )
}

export default FitSuiteBanner
