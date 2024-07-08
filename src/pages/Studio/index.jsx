import React, { useEffect } from 'react';
import Experience from '../Home/Experience/Experience'
import MultiPurpose from './MultiPurpose/MultiPurpose'
import WellnessActivites from './WellnessActivites/WellnessActivites'
import WellnessStudio from './WellnessStudio/WellnessStudio'
import StudioBanner from './StudioBanner/StudioBanner'

const handleRedirect = () => {
  window.scrollTo(0, 0); // Scroll to top when the component mounts
};

function Studio() {
  useEffect(() => {
    handleRedirect();
  }, []);
  return (
    <div>
      <StudioBanner/>
      <WellnessActivites/>
      <MultiPurpose/>
      <WellnessStudio/>
      <Experience/>
    </div>
  )
}

export default Studio
