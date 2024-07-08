import React from "react";
import Event1 from "../../../assets/images/yoga.png";
import Event2 from "../../../assets/images/zumba.png";
import Event3 from "../../../assets/images/bootcamp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function MultiPurpose() {
  const secureData = [
    {
      id: 1,
      src: Event1,
      name: "Bootcamp with Eli",
      description:
        "Get ready to sweat and sculpt with Bootcamp led by Elisabeta! Crush your fitness goals with high-energy workouts blending cardio and strength training. All levels welcome. Your first class is FREE! Join us and experience the burn!",
    },
    {
      id: 2,
      src: Event2,
      name: "Yoga with Mye",
      description:
        "Experience the invigorating world of yoga in our exclusive class tailored for ladies experienced instructor  Mye! –  Invite your friends and embark on this journey to a healthier you through the practice of yoga.",
    },
    {
      id: 3,
      src: Event3,
      name: "Zumba with Toktam",
      description:
        "Join us for an exhilarating Zumba class exclusively for ladies, led by our energetic and experienced instructor Toktam! Dont miss out on the fun. Bring your friends and let dance our way to a healthier, happier you.",
    },
  ];

  return (
    <div>
      <section className="mx-auto sm:py-28 py-0 font-manrope bg-packagepay bg-cover bg-center relative text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5140D3] to-[#5140D3] opacity-[87%]"></div>
        <div className="container mx-auto  lg:py-0 py-8 relative w-full ">
          <h2 className="lg:text-5xl text-2xl font-bold mb-6 text-center">
            Multi-purpose Studio
          </h2>
          <p className="text-center lg:w-6/12 mx-auto ">
            Experience the epitome of luxury and versatility with our
            state-of-the-art studio designed to cater to your fitness and
            wellness needs.
          </p>

          <div className="grid md:grid-cols-3 grid-cols-1 justify-center md:gap-[30px] gap-4 mt-8">
            {secureData.map((data, index) => (
              <div
                key={index}
                className="relative group sm:ps-2 focus:outline-none border-none text-white shadow-none"
              >
                <img
                  src={data.src}
                  alt={`card-image-${index}`}
                  className=" w-full transition-transform duration-300 ease-in-out group-hover:opacity-90 shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 md:px-8 px-2 md:py-6 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  {/* <h4 className="md:text-3xl mb-3 text-start font-medium tracking-[2%]">{data.name}</h4> */}
                  <p className="md:text-xs  text-s text-start font-light mb-1">
                    {data.description.slice(0,100)}
                  </p>
                  <div className="flex justify-start items-center   w-full md:my-0 my-2">
                    <button
                      className="text-black  bg-white xl:border-white border-black focus:outline-none hover:bg-[#531CC9]   font-medium rounded-full xl:text-base xs:text-sm sm:px-6 sm:py-3 "
                      onClick={() => {
                        document
                          .getElementById("locations")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Book Now{" "}
                      <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className="ms-1"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MultiPurpose;
