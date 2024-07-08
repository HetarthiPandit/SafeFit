import React from 'react'
import Dubble from '../../../assets/images/dumbble.png'
import GooglePlay from "../../../assets/images/google-play-badge-logo-svgrepo-com.svg";
import Appstore from "../../../assets/images/download-on-the-app-store-apple-logo-svgrepo-com.svg";
import { APPSTORE, GOOGLE_PLAY_STORE } from '../../../constant';
import { Link } from 'react-router-dom';

function FreeSession() {
    return (
        <div>
            <section className="container mx-auto bg-white flex justify-center items-center sm:py-10 pb-4 font-manrope ">
                <div className="flex justify-center items-center w-full md:py-6 lg:px-28 px-6 md:rounded-[25px] rounded-[20px] bg-[#EBEAF4]">
                    <div className="container flex md:flex-row flex-col justify-between items-center  lg:py-0 sm:py-8 py-4">
                        <div className="w-full relative text-black flex sm:flex-row flex-col justify-between md:gap-20 items-center lg:gap-4 gap-2">
                            <div className="md:w-4/12 md:mt-6">
                                <img src={Dubble} alt="" className="w-auto " />
                            </div>
                            <div className="md:w-5/12 w-full">
                                <h2 className="lg:text-[42px] lg:leading-[60px] sm:text-2xl text-2xl font-bold spcae-y-4 font-manrope tracking-wide sm:text-start text-center">Book your first </h2>
                                <h2 className="lg:text-[42px] lg:leading-[60px] sm:text-2xl text-2xl font-bold spcae-y-4 font-manrope tracking-wide sm:text-start text-center">FREE Session NOW!</h2>

                                <p className='text-[#12141D] opacity-60 md:text-base text-sm sm:text-start text-center'>Download SafeFit App today!</p>

                            </div>
                            <div className="flex justify-start items-center lg:gap-9 gap-2 md:mt-0  mt-2 md:w-4/12">
                                <div className="w-1/2 m-1">
                                    <Link to={GOOGLE_PLAY_STORE} target="blank">
                                        <img src={GooglePlay} alt="" className="w-80" />
                                    </Link>
                                </div>
                                <div className='w-1/2 m-1'>
                                    <Link to={APPSTORE} target="blank">
                                        <img src={Appstore} alt="" className="w-80" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FreeSession
