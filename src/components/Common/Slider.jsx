import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pr1 from '../../assets/images/pr1.png';
import Pr2 from "../../assets/images/pr2.png";
import Pr3 from "../../assets/images/pr3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constant';

function Sliders() {
    const sliderRef = useRef(null);
    const navigate = useNavigate();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1800,
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

    const handleButtonClick = () => {
        sliderRef.current.slickNext();
    };
    const handleRedirect = (id) => {
        console.log("Redirecting to trainer details with ID:", id);
        navigate(`/trainers-details/${id}`);
    };

    const token = import.meta.env.VITE_APP_TOKEN;
    const getTrainer = import.meta.env.VITE_APP_API;

    const [trainers, setTrainers] = useState([]);
    const [error, setError] = useState();
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

    return (
        <div className='relative '>
            <div className="slider pt-4 relative mb-8  ">
                <Slider ref={sliderRef} {...settings} >
                    {trainers.data && trainers.data.trainers.map((data, index) => (
                        <div key={index} className="relative group pl-3 focus:outline-none border-none text-white ">
                            <div onClick={() => handleRedirect(data.id)} className="lg:min-h-[339px] md:min-h-[229px] h-[300px] overflow-hidden relative before:content-[''] before:absolute before:w-full before:h-full before:bg-transparent  before:top-0 before:left-0  group-hover:before:bg-black/60 rounded-xl">
                                <img
                                    src={data.image_url}
                                    alt={`card-image-${index}`}
                                    className="w-full lg:w-full h-full object-cover transition-transform duration-300 ease-in-out min-h-full"
                                />

                                <div className="absolute bottom-5 left-0 right-0  p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <p className="text-sm text-center font-bold mb-1 text-18">{data.name}</p>
                                    <h4 className="text-xs mb-2 text-center text-14">{data.level_name}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="flex absolute md:-bottom-10 -bottom-4 left-0 right-0 justify-center items-center  w-full">
                    <Link to={ROUTES
                        .TRAINERSLISTING.PATH}
                        onClick={handleButtonClick}
                        className="text-white md:my-6 my-2 bg-black xl:border-white border-black focus:outline-none hover:bg-[#531CC9]  font-medium rounded-full xl:text-base xs:text-sm sm:px-8 sm:py-3 px-6 py-2"
                    >
                        Meet Our Trainer <FontAwesomeIcon icon={faArrowRightLong} className='ms-1' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Sliders;
