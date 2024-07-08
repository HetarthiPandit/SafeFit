import React from 'react';
import { ROUTES } from '../../../constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function PersonalTrainersSlider() {

    return (
        <>
            <div className="lg:py-20  sm:pb-10 pb-8 pt-4">
                <div className="container mx-auto font-manrope">
                    <div className="md:text-start text-center md:mb-8 ">
                        <h1 className="lg:text-[54px] sm:text-5xl text-2xl font-semibold sm:mb-3 mb-2">More Trainers</h1>
                        <div className="flex md:flex-row flex-col md:justify-between justify-start items-center">
                            <p className="md:text-xl sm:text-base text-xs sm:mb-4 mb-2 md:w-7/12 opacity-70">Dive into the diverse backgrounds and specializations of our dedicated personal trainers. With a combined wealth of knowledge, they bring a personalized approach to every session.</p>
                            <div className="flex md:justify-end justify-center items-center  md:w-3/12 w-full">
                                <a href={ROUTES.TRAINERSLISTING.PATH} className="text-white md:my-6 my-2 bg-black xl:border-white border-black focus:outline-none hover:bg-[#531CC9]   font-medium rounded-full xl:text-base xs:text-sm sm:px-8 sm:py-3 px-6 py-2" onClick={() => window.scrollTo(0, 0)}>
                                    View All Trainers <FontAwesomeIcon icon={faArrowRightLong} className='ms-1' />
                                </a>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default PersonalTrainersSlider;
