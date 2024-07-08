// Download.js
import React from 'react';
import SafeFitBox from '../../../components/Common/SafeFitBox';

function FunctionalStudio() {
    const steps = [
        "Bring your trainer for FREE",
        "Bring your workout partner for FREE",
        "Sign up with SafeFit Personal Trainer"
    ];

    return (
        <SafeFitBox
            title="Book our Functional Studio for as low as AED 65 per hour!"
            image="md:bg-fitsuite md:bg-no-repeat md:bg-left"
            css="from-[#EBEAF4] to-[#EBEAF4]"
            steps={steps} 
        />
    );
}

export default FunctionalStudio;