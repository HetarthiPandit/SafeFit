import React from 'react'
import CommonBanner from '../../../components/Common/CommonBanner'
import Stdb1 from '../../../assets/images/stdb1.png';
import Stdb2 from "../../../assets/images/stdb2.png";
import Stdb3 from "../../../assets/images/stdb3.png";

function StudioBanner() {
  const secureData = [
        { src: Stdb1, name: 'Personal Trainer', description: 'Rebecca De Beukelaer' },
        { src: Stdb2, name: 'Personal Trainer', description: 'Mind & Body Wellness Commons' },
        { src: Stdb3, name: 'Personal Trainer', description: 'Train Smarter, Perform Better' },
       
    ];
  return (
    <div>
      <CommonBanner title={"Premium Fitness Studios at SafeFit"} description={"Unleash Your Potential at SafeFit's Elite Fitness Studio where Luxury Meets Performance for Your Ultimate Workout Experience!"} secureData={secureData} />
    </div>
  )
}

export default StudioBanner
