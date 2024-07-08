import React from 'react';

function Activities({ title, discripction, steps }) {
    console.log('description', discripction)
    
    return (
        <section className="flex flex-col justify-center items-center font-inter lg:py-28 sm:py-16 py-6">
            <div className="container mx-auto">
                <h2 className="lg:text-6xl text-2xl font-bold text-center mb-6">{title}</h2>
                <div className="text-center mb-8">
                    <h3 className="lg:text-lg text-sm font-manrope">{discripction}</h3>
                </div>
                <div className="flex lg:flex-row flex-col justify-between gap-5">
                    {steps.map((data,index) => (
                        <div
                            key={index}
                            className="border w-full h-[260px] rounded-[25px] flex justify-center items-center overflow-hidden"
                        >
                            <img
                                src={data}
                                alt="card-image"
                                className="h-60"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Activities
