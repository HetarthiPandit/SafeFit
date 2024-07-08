import React from 'react';
import Programs1 from '../../../assets/images/programs1.png'
import Programs2 from '../../../assets/images/programs2.png'
import Programs3 from '../../../assets/images/programs3.png'
import Programs4 from '../../../assets/images/programs4.png'
import Programs5 from '../../../assets/images/programs5.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';


// Example data structure
const sections = [
    {
        title: "Fight Obesity Program",
        steps: "Embark on a transformation journey with our comprehensive 40-session program designed to combat obesity through customized exercise routines and nutritional guidance.",
        image: Programs1,
        css: "bg-[#F5F8FA]"
    },
    {
        title: "Body building program",
        steps: "Prepare for competition or simply sculpt your dream physique with our intensive 40-session bodybuilding program, tailored to optimize muscle growth and strength.",
        image: Programs2,
        css: "bg-[#F5F8FA]"
    },
    {
        title: "Pre-Natal & Post-Natal Program",
        steps: "I stay active and healthy during and after pregnancy with our specially designed 20-session programs that focus on safe, effective exercises for expectant and new mothers.",
        image: Programs3,
        css: "bg-[#F2F1FA]"
    },
    {
        title: "Couple Goals Program",
        steps: "Embark on a transformation journey with our comprehensive 40-session program designed to combat obesity through customized exercise routines and nutritional guidance.",
        image: Programs4,
        css: "bg-[#F5F8FA]"
    },
    {
        title: "Injury Rehab Program",
        steps: "Recover safely and effectively with our targeted 20-session rehabilitation program, which includes personalized exercises to help restore mobility and strengthen injured areas.",
        image: Programs5,
        css: "bg-[#F0F8FA]"
    },
];

const AllPrograms = () => {
    return (
        <div className="sm:container sm:mx-auto bg-white flex flex-col justify-center items-center font-manrope py-10">
            {sections.map((section, index) => {
                const isImageRight = index % 2 === 0;
                return (
                    <section
                        key={index}
                        className={`flex justify-center items-center w-full lg:h-[468px] md:py-6 lg:py-10 lg:px-12 lg:rounded-[25px] relative overflow-hidden bg-gradient-to-l ${section.css} opacity-[87%] my-4`}
                    >
                        <div
                            className={`container flex ${isImageRight ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center lg:py-0 md:py-8 py-4`}
                        >
                            <div
                                className={`w-full relative text-black flex flex-col md:flex-row justify-between gap-10 items-center`}
                            >
                                <div
                                    className={`md:w-6/12 w-full ${isImageRight ? 'md:order-1' : 'md:order-2'} order-2 lg:px-0 sm:px-6`}
                                >
                                    <h2 className="lg:text-5xl lg:leading-[50px] md:text-3xl text-xl font-semibold lg:mb-4 mb-2 font-inter tracking-wide">
                                        {section.title}
                                    </h2>
                                    <p className="list-decimal md:text-[22px] text-base text-justify">
                                        {section.steps}
                                    </p>
                                    <div className="flex justify-start items-center">
                                        <button 
                                        onClick={() => {
                                            document.getElementById('locations').scrollIntoView({ behavior: 'smooth' });
                                        }} className="text-black md:mt-10 my-4 border border-black focus:outline-none hover:bg-[#531CC9] hover:text-white hover:border-transparent   font-bold rounded-full xl:text-base xs:text-sm px-6 py-2 text-center ">
                                        Learn more <FontAwesomeIcon icon={faArrowRightLong} className='ms-1' />
                                        </button>

                                    </div>
                                </div>
                                <div
                                    className={` relative ${isImageRight ? 'md:order-2' : 'md:order-1'} order-1`}
                                >
                                    <img
                                        src={section.image}
                                        alt={`Image for ${section.title}`}
                                        className="lg:h-96 h-60 rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default AllPrograms;
