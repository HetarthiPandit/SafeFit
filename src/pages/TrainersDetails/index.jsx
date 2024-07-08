import React, { useEffect } from 'react'
import Experience from '../Home/Experience/Experience'
import TranierBanner from './TrainerBanner/TrainerBanner'
import TrainerBox from '../TrainersListing/TrainerBox/TrainerBox'
import PersonalTrainersSlider from './PersonalTrainersSlider/PersonalTrainersSlider'
import PersonalDetails from './PersonalDetails/PersonalDetails'

function TrainersDetails() {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    return (
        <div>
            <TranierBanner/>
            <PersonalDetails />
            <PersonalTrainersSlider />
            <TrainerBox/>
            <Experience />

        </div>
    )
}

export default TrainersDetails
