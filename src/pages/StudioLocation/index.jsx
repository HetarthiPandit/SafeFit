import React, { useState, useEffect, useRef } from 'react';
import Building from "../../assets/images/bilding-icon.png";
import Location from "../../assets/images/location-display.png";
import Clock from "../../assets/images/clock.png";
import Sequence from "../../assets/images/Sequence.mp4";
import AR from "../../assets/images/location1.mp4";
import SR from "../../assets/images/location2.mp4";
import { Link } from "react-router-dom";

function StudioLocation() {
    const infoItems = [
        {
            video: SR,
            location: "SafeFit South Ridge",
            fullAddress: "Located in the heart of Dubai – Downtown near Burj Khalifa and The Dubai Mall",
            landmark: "Downtown near Burj Khalifa and The Dubai Mall",
            country: "SafeFit, South Ridge 1, Dubai, UAE",
            time: "Everyday 4:00AM to 11:30PM",
            mapLink: "https://www.google.com/maps/place/SafeFit/@25.1864375,55.2746238,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f69c817bba68b:0x9111d069174578db!8m2!3d25.1864375!4d55.2768125"
        },
        {
            video: AR,
            location: "SafeFit Arabian Ranches",
            fullAddress: "Located in the prestigious Arabian Ranches community",
            landmark: "The Ranches Souk, Arabian Ranches 2",
            country: "SafeFit, The Ranches Souk, AR 2, Dubai, UAE",
            time: "Everyday 5:00AM to 11:00PM",
            mapLink: "https://www.google.com/maps/place/The+Ranches+Souk+%7C+Arabian+Ranches+II/@25.0294113,55.2679837,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f6e3933ffac7b:0xee3f467bf0c312c7!8m2!3d25.0294113!4d55.2701724"
        },
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRefs = useRef([]);

    useEffect(() => {
        const handleVideoEnd = () => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % infoItems.length);
        };

        const currentVideo = videoRefs.current[currentVideoIndex];
        if (currentVideo) {
            currentVideo.play();
            currentVideo.addEventListener('ended', handleVideoEnd);
        }

        return () => {
            if (currentVideo) {
                currentVideo.removeEventListener('ended', handleVideoEnd);
            }
        };
    }, [currentVideoIndex, infoItems.length]);

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index !== currentVideoIndex) {
                    video.pause();
                    video.currentTime = 0;
                } else {
                    video.play();
                }
            }
        });
    }, [currentVideoIndex]);

    return (
        <div>
            <section className="relative h-16 lg:h-20 xl:h-20 overflow-hidden flex items-center justify-center w-full">
                <div className="absolute top-0 left-0 w-full h-full object-cover">
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
                <div className="absolute inset-0 bg-gradient-to-r from-customBlueDark via-customBlueLight to-customBlueLight opacity-80"></div>
            </section>

            <section className="mx-6 md:mx-20 lg:mx-10 xl:mx-72 lg:mt-32">
                <div className="w-full text-black font-inter font-semibold text-2xl md:text-4xl lg:text-5xl leading-tight mt-10 md:mt-30">
                    Our Locations
                </div>
                {infoItems.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row py-4 space-y-4 md:space-y-0 md:space-x-6 rounded-lg my-4">
                        <div className="flex justify-center items-center bg-neutral-200 text-white font-bold overflow-hidden rounded-2xl w-full md:w-1/2 h-40 md:h-auto">
                            <video
                                ref={(el) => (videoRefs.current[index] = el)}
                                className="w-full h-full object-cover"
                                src={item.video}
                                type="video/mp4"
                                loop={false}
                                playsInline
                                controls
                                autoPlay
                                muted
                                onClick={() => setCurrentVideoIndex(index)}
                            />
                        </div>
                        <div className="flex flex-col space-y-4 bg-white lg:p-4 p-2 rounded-lg w-full md:w-1/2 lg:w-1/3 font-semibold">
                            <h2 className="text-xl md:text-4xl font-bold font-inter">{item.location}</h2>
                            <p className="text-xl md:text-2xl font-semibold font-Manrope">{item.fullAddress}</p>
                            <div className="flex md:items-start items-center space-x-2">
                                <img src={Building} alt="Building Logo" className="w-4 h-4 md:w-6 md:h-6" />
                                <p className="text-neutral-800 font-medium">{item.landmark}</p>
                            </div>
                            <div className="flex md:items-start items-center space-x-2">
                                <img src={Location} alt="Location Logo" className="w-4 h-4 md:w-6 md:h-6" />
                                <p className="text-neutral-800 font-medium">{item.country}</p>
                            </div>
                            <div className="flex md:items-start items-center space-x-2">
                                <img src={Clock} alt="Clock Logo" className="w-4 h-4 md:w-6 md:h-6" />
                                <p className="text-neutral-800 font-medium">{item.time}</p>
                            </div>
                            <Link to={item.mapLink} target="_blank" className="border border-black w-full md:w-32 text-neutral-800 font-semibold py-3 px-3 rounded-lg hover:bg-gray-300 transition duration-300 text-center">
                                View Map
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default StudioLocation;
