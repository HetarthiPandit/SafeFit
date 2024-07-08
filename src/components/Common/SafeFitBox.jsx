import React from 'react'
import Mobile from '../../assets/images/iPhone.png'
import GooglePlay from "../../assets/images/google-play-badge-logo-svgrepo-com.svg";
import Appstore from "../../assets/images/download-on-the-app-store-apple-logo-svgrepo-com.svg";
import { Link } from 'react-router-dom';
import { APPSTORE, GOOGLE_PLAY_STORE } from '../../constant';

function SafeFitBox({ title, steps, image, css }) {
    return (
        <>
            <section className="md:container md:mx-auto bg-white flex justify-center items-center md:px-0 lg:py-20 sm:pb-8 font-manrope">
                <div className={`flex justify-center items-center w-full sm:py-2 lg:px-28 md:px-16 py-12 md:rounded-[25px] relative overflow-hidden bg-gradient-to-l ${css}`}>
                    <div className={`absolute inset-y-0 right-0 bottom-0 ${image}  w-full`}></div>
                    <div className="container flex md:flex-row flex-col items-center  lg:py-1 md:py-8 py-4">
                        <div className="w-full relative text-black flex sm:flex-row flex-col justify-end gap-2 items-center">
                            <div className="md:w-6/12 w-full sm:order-1 order-2">
                                <h2 className="lg:text-5xl leading-[50px] text-3xl font-bold lg:mb-12 sm:mb-4 mb-2 font-manrope tracking-wide">{title}</h2>
                                <ul className="lg:ml-4 list-decimal lg:text-2xl sm:text-lg text-base px-4 md:space-y-6 space-y-2">
                                    {steps.map((step, index) => (
                                        <li key={index}>{step}</li>
                                    ))}
                                </ul>
                                <div className="flex justify-start items-center lg:gap-9 gap-2 md:mt-7  mt-6 ">
                                    <div className="lg:w-4/12 w-7/12 m-1 mr-4">
                                        <Link to={GOOGLE_PLAY_STORE} target="blank">
                                            <img src={GooglePlay} alt="" className="lg:w-80" />
                                        </Link>
                                    </div>
                                    <div className='lg:w-4/12 w-7/12 m-1'>
                                        <Link to={APPSTORE} target="blank">
                                            <img src={Appstore} alt="" className="lg:w-80" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className=" relative sm:order-2 order-1  rounded-lg sm:shrink-0  sm:w-auto w-full flex justify-center py-6">
                                <img src={Mobile} alt="Description of the image" className="w-auto lg:h-auto h-96 " />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SafeFitBox