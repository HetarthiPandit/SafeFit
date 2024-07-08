import React from "react";
import Sequence from "../../assets/images/Sequence.mp4";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stdb1 from '../../assets/images/stdb1.png';
import Stdb2 from "../../assets/images/stdb2.png";
import Stdb3 from "../../assets/images/stdb3.png";
import FitSuit1 from "../../assets/images/fitsuit1.jpg";
import FitSuit2 from "../../assets/images/fitsuit2.jpg";
import FitSuit3 from "../../assets/images/fitsuit3.jpg";

import ReactPlayer from "react-player";

function CommonBanner({ title, description ,secureData}) {
 
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <section className="relative lg:h-screen w-full overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src={Sequence}
                        type="video/mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#030429] via-[#030429] to-[#5458F7] opacity-80"></div>
                <div className="container mx-auto relative sm:pt-52 pb-4 pt-28 w-full">
                    <div className="text-white z-10  text-center ">
                        <h1 className="font-[Manrope] xl:text-7xl xl:leading-[90px]  sm:text-4xl text-2xl font-semibold">
                            {title}
                        </h1>
                        <h6 className="font-[Manrope] text-sm xl:text-[22px] sm:text-lg pt-3 lg:pb-12 pb-8 lg:w-7/12 lg:mx-auto">
                            {description}
                        </h6>
                    </div>

                </div>
                <div className="slider relative xl:-bottom-32 lg:-bottom-24 -bottom-2">
                    <Slider {...settings}>
                        {secureData.map((data, index) => (
                            <div key={index} className=" sm:ps-2 focus:outline-none border-none text-white shadow-none  h-[499px] overflow-hidden">
                                <img
                                    src={data.src}
                                    alt={`card-image-${index}`}
                                    className=" w-full  h-[505px]"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    );
}

export default CommonBanner;
