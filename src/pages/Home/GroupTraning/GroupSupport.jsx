import React from 'react'

function GroupSupport() {
    return (
        <div>
            <section className=" bg-[#F5F5F5] sm:py-24">
                <div className="container  mx-auto flex flex-col xl:flex-row py-4 space-y-4 md:space-y-0 md:space-x-6 rounded-lg my-4">
                    <div className="flex justify-center items-center xl:mb-0 sm:mb-9 bg-[#D9D9D9] text-white font-bold overflow-hidden w-full xl:max-w-[641px] xl:h-auto sm:h-96 h-60">
                        <img src="" alt="" />
                    </div>
                    <div className="flex flex-col space-y-1 lg:p-4 p-2 rounded-lg w-full xl:w-1/2">
                        <h2 className="sm:text-4xl text-xl xl:text-[53px] leading-[60px] font-bold font-manrope">The Support You’ll Receive</h2>
                        <ul className="lg:ml-4 sm:ml-2 list-disc lg:text-2xl sm:text-lg text-sm px-4 space-y-4 ">
                            <li>Scalable business model</li>
                            <li>Cutting edge technology with custom built booking & automation system</li>
                            <li>Integrated business management suite</li>
                            <li>Support on infrastructure, equipment, systems, and procedures</li>
                            <li>Marketing and customer service</li>
                        </ul>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default GroupSupport
