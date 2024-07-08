import React from 'react'
import GroupBanner from './GroupBanner'
import GymPod from './GymPod'
import Experience from '../Experience/Experience'
import Requirements from './Requirements'
import GroupSupport from './GroupSupport'
function GroupTraning() {
  return (
    <div>
      <GroupBanner/>
      <GymPod/>
      <GroupSupport/>
      <Requirements/>
      <Experience />
    </div>
  )
}

export default GroupTraning
