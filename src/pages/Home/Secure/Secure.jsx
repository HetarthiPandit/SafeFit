import React from 'react'
import Private1 from '../../../assets/images/private1.png'
import Private2 from "../../../assets/images/private2.png";
import Private3 from "../../../assets/images/private3.png";

function Secure() {
    const secureData = [
        { id: 1, image:Private1, name: 'Personal Space', description: "Workout in private in your own personal gym. No waiting or distractions. Simply choose a time that suits your schedule to enjoy a dedicated fitness space" },
        { id: 2, image:Private2, name: 'Premium Experience', description: "Indulge in a luxury fitness experience at UAE's first Private and On-Demand fitness private, featuring top-tier fitness gear and exclusive private shower facilities" },
        { id: 3, image:Private3, name: 'On-Demand', description: "Access our gym experience when and where you want. Buy credits or pay-as-you go for private, PT or GX and get more of what you want, less of what you don’t." },
    ];

    return (
        <section className="flex flex-col justify-center items-center font-manrope  md:py-20 sm:py-6 py-8">
            <div className="container mx-auto">
                <h2 className="lg:text-[68px] sm:text-5xl text-3xl font-bold text-center margin-bottom-20">Secure, Private, Yours</h2>
                <div className="text-center mb-2">
                    <h3 className="lg:text-xl text-sm font-manrope opacity-50">Download the SafeFit App to experience our Premium Studios!</h3>
                </div>
                <div className="flex sm:flex-row flex-col justify-between sm:gap-6  ">
                    {
                        secureData.map((data ,index) => (
                            <div key={index} className="relative flex flex-col mt-6 text-gray-700 bg-[#F7F8FA] bg-clip-border border border-[#EAEBEF] rounded-xl lg:w-1/2 lg:h-[495px]  lg:p-6 p-4">
                                <div
                                    className="relative overflow-hidden text-white bg-clip-border bg-blue-gray-500">
                                    <img
                                        src={data.image}
                                        alt="card-image" className='w-full'/>
                                </div>
                                <div className="md:mt-8 mt-4">
                                    <h5 className="block lg:mb-6 mb-1 font-sans lg:text-2xl mb:text-lg sm:text-sm antialiased font-semibold leading-snug tracking-normal text-black">
                                        {data.name}
                                    </h5>
                                    <p className="block font-sans lg:text-lg md:text-sm text-xs antialiased font-light leading-relaxed text-inherit">
                                       {data.description}
                                    </p>
                                </div>

                            </div>

                        ))}
                </div>

            </div>
        </section>
    );

}

export default Secure
