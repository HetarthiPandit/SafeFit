import React from 'react'
import Sequence from "../../../assets/images/Sequence.mp4";
function ProgramsBanner() {
    return (
        <div>
            <section className="relative lg:h-full  top-0 w-full overflow-hidden">
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
                <div className="container mx-auto relative sm:pt-52 pb-10 pt-28 w-full">
                    <div className="text-white z-10  text-center ">
                        <h1 className="font-[Manrope] xl:text-7xl xl:leading-[90px]  sm:text-4xl text-3xl font-semibold">
                            Specialized Fitness Programs
                        </h1>
                        <h6 className="font-inter font-normal text-sm+ xl:text-[22px] sm:text-lg pt-3 lg:pb-12 pb-8 lg:w-11/12 lg:mx-auto">
                            At SafeFit, we're excited to offer a variety of specialized fitness programs designed to meet the unique needs of every individual. Whether you're fighting obesity, preparing for a bodybuilding competition, navigating the journey of pregnancy, working towards shared fitness goals with your partner, or recovering from an injury, we have a program tailored just for you. Discover the right fit and take the first step towards a healthier, happier you!
                        </h6>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default ProgramsBanner
