// Download.js
import React from 'react';
import SafeFitBox from '../../../components/Common/SafeFitBox';

function FitSuiteStudio() {
    const steps = [
        "Workout by yourself with guided workout programs",
        "Bring your trainer for FREE",
        "Bring your workout partner for FREE",
        "Sign up with SafeFit Personal Trainer",
        "Sign up for a range of transformative programs"
    ];

    return (
        <SafeFitBox
            title="Book our Fit-Suite Studio For As Low As AED 65 Per Hour!"
            image="md:bg-fitsuite md:bg-no-repeat md:bg-left"
            css="from-[#EBEAF4] to-[#EBEAF4]"
            steps={steps} 
        />
    );
}

export default FitSuiteStudio;
