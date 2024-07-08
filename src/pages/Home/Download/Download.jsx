// Download.js
import React from 'react';
import SafeFitBox from '../../../components/Common/SafeFitBox';

function Download() {
    const steps = [
        "Download the SafeFit App from the links below",
        "Sign-up as a Personal Trainer or Client",
        "Book your first FREE Session"
    ];

    return (
        <SafeFitBox
            title="Download SafeFit"
            image="md:bg-downloadbg md:bg-no-repeat md:bg-left-bottom"
            css="from-[#EBEAF4] via-[#C1D9E3] to-[#EBEAF4]"
            steps={steps}
        />
    );
}

export default Download;