import React from 'react'
import ProgramsBanner from './ProgramsBanner/ProgramsBanner'
import AllPrograms from './AllPrograms/AllPrograms'
import Experience from '../Home/Experience/Experience'
import FitSuiteStudio from '../FitSuite/FitSuiteStudio/FitSuiteStudio'

function Programs() {
  return (
    <div>
      <ProgramsBanner/>
      <AllPrograms/>
      <Experience/>
      <FitSuiteStudio/>
    </div>
  )
}

export default Programs
