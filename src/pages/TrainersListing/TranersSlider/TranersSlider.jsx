import React, { useEffect, useRef, useState } from 'react'
import pr1 from "../../../assets/images/pr1.png";
import pr2 from "../../../assets/images/pr2.png";
import pr3 from "../../../assets/images/pr3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function TranersSlider() {

    const sliderRef = useRef(null);
    const handleButtonClick = () => {
        sliderRef.current.slickNext();
    };

    const token = import.meta.env.VITE_APP_TOKEN;
    const getTrainer = import.meta.env.VITE_APP_API;

    const [trainers, setTrainers] = useState([]);
    console.log('trainers', trainers)
    const [error, setError] = useState();
    console.log(trainers, "trainers");
    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow",
        };

        fetch(getTrainer, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setTrainers(data);
            })
            .catch((error) => {
                console.error("Error fetching trainer list:", error);
                setError(error);
            });
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Adjusted to display 4 slides at a time
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 1900,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                }
            }
        ]
    };

    return (
        <div>
            <section>
                <div className="py-4">
                    <div className="container mx-auto  font-manrope">
                        <div className="text-center mb-8 ">
                            <h1 className="lg:text-[54px] text-[25px] font-semibold">Our Professional Coaches</h1>
                        </div>
                        <div className="slider pt-4 relative md:mb-28 mb-12">
                            <Slider ref={sliderRef} {...settings} >
                                {trainers.data && trainers.data.trainers.map((data, index) => (
                                    <div key={index} className="relative group pl-3 focus:outline-none border-none text-white ">
                                        <div className="before:rounded-[25px] relative before:content-[''] before:absolute before:w-full before:h-full before:bg-transparent  before:top-0 before:left-0  group-hover:before:bg-black/60">
                                            <img
                                                src={data.image_url}
                                                alt={`card-image-${index}`}
                                                className="w-full lg:w-full lg:min-h-[339px] md:min-h-[229px] h-[300px] transition-transform duration-300 ease-in-out rounded-[25px] " />

                                            <div className="absolute rounded-[25px] bottom-5 left-0 right-0  p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                                <p className="text-sm text-center font-bold mb-1">{data.name}</p>
                                                <h4 className="text-xs mb-2 text-center">{data.level_name}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TranersSlider
