import React, { useEffect, useRef, useState } from "react";
import Sequence from "../../../assets/images/Sequence.mp4";
import GoogleButton from "../../../assets/images/goggleplay.svg";
import AppleButton from "../../../assets/images/appstore.svg";
import { Link } from "react-router-dom";
import { APPSTORE, GOOGLE_PLAY_STORE } from "../../../constant";

function Banner() {
  const videoRef = useRef();
  useEffect(()=>{
    window.scrollBy({
      top: 100,
      left: 0,
      behavior: 'smooth'  // Optional: Smooth scrolling behavior
    });
  },[])

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error);
      });
    }
  };

  useEffect(() => {
    handleVideoClick()
  }, []); // Empty dependency array ensures effect runs only once on mount  

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          if (error.name === "NotAllowedError" || error.name === "AbortError") {
            console.log("Autoplay was prevented. Waiting for user interaction to retry.");
          } else {
            console.error("Error playing video:", error);
          }
        });
      }
    };

    // Attempt to play the video on page load
    playVideo();

    // Add event listener for user interaction to retry playing the video
    const handleUserInteraction = () => {
      playVideo();
      // Remove the event listener once the video starts playing
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);

    return () => {
      // Clean up event listeners when the component unmounts
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  
  }, [videoRef]);
console.log('dsads*******************', videoRef);
  return (
    <>
      <section className="relative lg:h-screen overflow-hidden flex items-center justify-center xl:items-center sm:justify-center top-0 w-full">
        <div className="absolute top-0 left-0 w-full h-full video-container">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={Sequence}
            type="video/mp4"
            ref={videoRef}
            loop
            muted
            playsInline
            onError={(e) => console.error("Video error:", e)}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-customBlueDark via-customBlueLight to-customBlueLight opacity-80"></div>
        <div className="relative md:ml-[163px] mx-[30px] sm:pb-20 sm:pt-44 pb-12 pt-28 w-full">
          <div className="text-white z-10 text-left">
            <h1 className="font-[Manrope] xl:text-7xl xl:leading-[90px] sm:text-4xl text-3xl font-semibold">
              Your Private Gym <br /> No Interruptions
              <br />
              On Demand Fitness
            </h1>
            <h6 className="font-[Manrope] text-base xl:text-2xl sm:text-lg pt-3 lg:pb-12 pb-8">
              Enjoy an uninterrupted workout in your private space
            </h6>
            <div className="flex justify-start gap-4 mb-4">
              <div>
                <Link to={GOOGLE_PLAY_STORE} target="_blank">
                  <img src={GoogleButton} alt="GoogleButton" />
                </Link>
              </div>
              <div>
                <Link to={APPSTORE} target="_blank">
                  <img src={AppleButton} alt="AppleButton" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
