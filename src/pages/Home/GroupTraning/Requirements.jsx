
import React from 'react';
import Mobile from '../../../assets/images/mobile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function Requirements() {
    return (
        <>
            <section className="mx-auto bg-white flex justify-center items-center lg:py-32 md:pb-16 font-manrope">
                <div className="flex justify-center items-center w-full lg:h-[564.19px] relative">
                    <div className="container flex md:flex-row flex-col justify-between items-center  lg:py-0 sm:pt-8 py-4">
                        <div className="md:p-4 lg:w-1/2 w-full relative text-black">
                            <h2 className="lg:text-5xl sm:text-4xl text-2xl font-bold mb-6">Requirements</h2>
                            <p className="lg:text-2xl sm:text-lg text-sm space-y-4 font-bold mb-9">Here are some considerations, benefits, and requirements to start your Gym Pod.</p>
                            <ul className="lg:ml-4 sm:ml-2 list-disc lg:text-2xl sm:text-lg text-sm px-4 space-y-4">
                                <li>Minimum S$50,000 liquid capital or access to investors or partners</li>
                                <li>No previous business or fitness knowledge required</li>
                                <li>BONUS: Owner or given authorized permission of 20 square meters indoor/outdoor space to setup a Pod</li>
                            </ul>
                        </div>

                        {/* Right Side Image */}
                        <div className=" relative lg:ms-auto">
                            <img src={Mobile} alt="Description of the image" className="w-auto lg:h-auto h-96" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Requirements
