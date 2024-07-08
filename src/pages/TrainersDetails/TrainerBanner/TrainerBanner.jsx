import Sequence from "../../../assets/images/Sequence.mp4";
import React from 'react';
import PersonalDetails from "../PersonalDetails/PersonalDetails";
function TranierBanner() {
    return (
        <div>
            <section className="relative sm:h-[600px] h-[300px]  top-0 w-full">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={Sequence}
                    type="video/mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030429] via-[#030429] to-[#5458F7] opacity-80"></div>
            </section>
                
        </div>
    )
}

export default TranierBanner
