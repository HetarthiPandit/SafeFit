// Download.js
import React from 'react';
import SafeFitBox from '../../../components/Common/SafeFitBox';

function WellnessStudio() {
    const steps = [
        "Rent out SafeFit Wellness Studio",
        "Attend Group Classes at SafeFit Wellness Studio",
        "Partner with SafeFit to host your GX classes"
    ];

    return (
        <SafeFitBox
            title="Book Our Wellness Studio For As Low As AED 65 Per Hour!"
            image="md:bg-wellstdbg md:bg-no-repeat md:bg-contain"
            css="from-[#EBEAF4] to-[#EBEAF4]"
            steps={steps} 
        />
    );
}

export default WellnessStudio;