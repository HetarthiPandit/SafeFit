import React, { useEffect } from 'react'
import FitSuiteActivites from './FitSuiteActivites/FitSuiteActivites'
import Experience from '../Home/Experience/Experience'
import Contact from '../Home/Contact/Contact'
import FitSuiteStudio from './FitSuiteStudio/FitSuiteStudio'
import FitSuiteBanner from './FitSuiteBanner/FitSuiteBanner'
const handleRedirect = () => {
  window.scrollTo(0, 0); // Scroll to top when the component mounts
};
function FitSuite() {
  useEffect(() => {
    handleRedirect();
  }, []);
  return (
    <div>
      <FitSuiteBanner/>
      <FitSuiteActivites/>
      <Experience/>
      <FitSuiteStudio/>
    </div>
  )
}

export default FitSuite
