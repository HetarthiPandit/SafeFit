import React, { useEffect, useRef, useState } from 'react'
import Event1 from "../../../assets/images/yoga.png";
import Event2 from "../../../assets/images/zumba.png";
import Event3 from "../../../assets/images/bootcamp.png";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

function Groups() {

    const navigate = useNavigate()
    const secureData = [
        { id : 1,src: Event1, name: 'Yoga with Mye', description: 'Get ready to sweat and sculpt with Bootcamp led by Elisabeta! Crush your fitness goals with high-energy workouts blending cardio and strength training. All levels welcome. Your first class is FREE! Join us and experience the burn!' },
        { id : 2,src: Event2, name: 'Zumba with Toktam', description: 'Experience the invigorating world of yoga in our exclusive class tailored for ladies experienced instructor  Mye! –  Invite your friends and embark on this journey to a healthier you through the practice of yoga.' },
        { id : 3,src: Event3, name: 'Bootcamp with Eli', description: 'Join us for an exhilarating Zumba class exclusively for ladies, led by our energetic and experienced instructor Toktam! Dont miss out on the fun. Bring your friends and let dance our way to a healthier, happier you.' },
    ];

    const token = import.meta.env.VITE_APP_TOKEN;
    const getTrainer = import.meta.env.VITE_GET_EVENT_API;

    const [trainers, setTrainers] = useState([]);
    console.log('trainersgroup', trainers)
    const [error, setError] = useState();
    console.log(trainers, "trainers");
    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            // body: { date: "2024-06-12", user_longitude:55.3688799,user_id:1118,user_latitude:25.293192}
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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1600,
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

    const handleRedirect = (id) => {
         navigate("/group-event", { state: { id } });
    }
    
    

    return (
        <>
            <section className="bg-white font-manrope  lg:py-12 pt-6">
                <div className="lg:pt-6  pb-10">
                    <div className="container mx-auto font-manrope">
                        <h2 className="lg:text-6xl sm:text-4xl text-2xl font-bold text-center mb-4">Small Groups, Big Results</h2>
                        <div className="text-center sm:mb-8 mb-4">
                            <h3 className="lg:text-xl text-sm font-manrope opacity-50">Download the SafeFit App to Join Our Exclusive Small Group Classes for Focused Fitness and Faster Results</h3>
                        </div>

                    </div>
                    <div className="slider pt-4">
                        <Slider {...settings}>
                            {secureData.map((data, index) => (
                                <div key={index} className="overflow-hidden lg:ps-3 sm:px-1 px-6" onClick={()=>handleRedirect(data.id)}>
                                    <div className="relative group cursor-pointer focus:outline-none border-none text-white shadow-none overflow-hidden md:h-[320px] sm:h-[240px] h-[360px] lg:h-auto">
                                        <img
                                            src={data.src}
                                            alt={`card-image-${index}`}
                                            className="w-full h-full transition-transform duration-300 ease-in-out group-hover:opacity-90 shadow-lg"
                                        />
                                        <div className="absolute bottom-0 bg-black left-0 right-0 bg-opacity-50 p-4 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                            {/* <p className="text-xl text-center font-medium mb-1">{data.description}</p> */}
                                            <h4 className="text-base mb-2 text-center font-normal">{data.name}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Groups
