import React, { useEffect } from 'react'
import StudioBanner from '../Studio/StudioBanner/StudioBanner'
import Experience from '../Home/Experience/Experience'
import FunctionalBanner from './FunctionalBanner/FunctionalBanner'
import FunctionalActivies from './FunctionalActivies/FunctionalActivies'
import FunctionalStudio from './FunctionalStudio/FunctionalStudio'

function Functional() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Delay of 100ms

    return () => clearTimeout(timeoutId); // Cleanup timeout if component unmounts
  }, []);
  return (
    <div>
      <FunctionalBanner/>
      <FunctionalActivies/>
      <FunctionalStudio/>
      <Experience/>
    </div>
  )
}

export default Functional
