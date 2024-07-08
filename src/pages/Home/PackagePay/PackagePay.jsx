import React from 'react';
import Mobile from '../../../assets/images/mobile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function PackagePay() {
    return (
        <>
            <section className="mx-auto bg-white flex justify-center items-center lg:py-28 md:pb-16 font-manrope">
                <div className="flex justify-center items-center w-full lg:h-[564.19px] bg-packagepay bg-cover bg-center relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5140D3] to-[#5140D3] opacity-[87%]"></div>
                    <div className="container flex md:flex-row flex-col justify-between items-center  lg:py-0 sm:pt-8 py-4">
                        <div className="md:p-4 lg:w-1/2 w-full relative text-white">
                            <h2 className="lg:text-5xl sm:text-4xl text-2xl font-bold mb-6">Only pay for what you use!</h2>
                            <ul className="lg:ml-4 sm:ml-2 list-decimal lg:text-2xl sm:text-lg text-sm px-4 space-y-4">
                                <li>No long term contracts</li>
                                <li>No expiry of credits</li>
                                <li>No membership or freezing fees</li>
                                <li>Flexible packages for studio, GX or PT sessions</li>
                                {/* Add more list items as needed */}
                            </ul>
                            {/* <button className="text-black mt-6 mb-4 bg-white xl:border-white border-black focus:outline-none hover:bg-[#531CC9] hover:text-white font-medium rounded-full xl:text-lg xs:text-sm px-6 py-3 text-center">
                                Package Details <FontAwesomeIcon icon={faArrowRightLong} className="ms-1" />
                            </button> */}
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

export default PackagePay
