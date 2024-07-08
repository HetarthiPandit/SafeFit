import React from 'react';
import Studio1 from '../../../assets/images/studio1.png';
import Studio2 from "../../../assets/images/studio2.png";
import Studio3 from "../../../assets/images/studio3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { ROUTES } from '../../../constant';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Studio() {
    const secureData = [
        { src: Studio1, name: 'Fit-Suite', description: 'Fully Equipped Fitness Studios', path: ROUTES.FITSUITE.PATH },
        { src: Studio2, name: 'Wellness', description: 'Mind & Body Wellness Studios', path: ROUTES.STUDIO.PATH },
        { src: Studio3, name: 'Functional', description: 'Train Smarter, Perform Better', path: ROUTES.FUNCTIONAL.PATH },
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 0,
        slidesToScroll: 0,
        autoplay: true,
        arrow: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="flex flex-col justify-center items-center font-manrope  md:py-28 sm:py-12 py-6 bg-gradient-to-t from-[#5458F7] to-[#531CC9] text-white" style={{ background: 'radial-gradient(circle, #5458F7, #531CC9)' }}>
            <div className="container mx-auto">
                <p className="xl:text-[165px] lg:text-[140px] sm:text-[87px] text-[37px] font-bold text-center lg:mb-10 sm:mb-2 mb-1 font-outline-2 font-inter font-weight-900 transparent-color">STUDIO TYPES</p>
                <div className="text-center mb-2">
                    <h3 className="lg:text-xl sm:text-sm text-xs font-manrope opacity-70 lg:w-1/2 w-full mx-auto">
                        Bring a friend, partner or trainer with you for FREE! Whether you're bringing a trainer, a client, or a workout buddy, we've got the perfect setup for you.
                    </h3>
                </div>
                <div className="mt-8 slider">
                    <Slider {...settings} >
                        {
                            secureData.map((data, index) => (
                                <div key={index} className="relative group w-full lg:w-1/3 px-2">
                                    <div className="relative">
                                        <img
                                            src={data.src}
                                            alt={`card-image-${index}`}
                                            className="w-full transition-transform duration-300 ease-in-out"
                                        />
                                        <div className="absolute rounded-[13px] inset-0 bg-black lg:bg-opacity-0 bg-opacity-50 lg:hover:bg-opacity-60 transition-opacity duration-300 ease-in-out flex flex-col justify-end items-center text-white">
                                            <h4 className="md:text-4xl text-xl mb-2 font-bold text-center">{data.name}</h4>
                                            <p className="md:text-lg text-sm text-center">{data.description}</p>
                                            <div className="flex justify-center items-center">

                                                <a href={data.path} className="text-black my-6 bg-white xl:border-white border-black focus:outline-none hover:bg-[#531CC9]  hover:text-white font-medium rounded-full xl:text-base xs:text-sm px-6 py-2 text-center" onClick={() => window.scrollTo(0, 0)}>
                                                    View Details <FontAwesomeIcon icon={faArrowRightLong} className='ms-1' />
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Studio;
