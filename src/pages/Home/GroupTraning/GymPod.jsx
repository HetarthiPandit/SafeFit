import React from 'react'
import SideImg from '../../../assets/images/Maskgroup.png'

function GymPod() {
    return (
        <div>
            <section className="flex flex-col justify-center items-center font-inter lg:py-28 sm:py-16 pt-8">
                <div className="container mx-auto">
                    <h2 className="lg:text-6xl text-2xl text-center mb-6">OWN YOUR VERY OWN <span className=" font-extrabold">GYM POD</span></h2>
                    <div className="text-center mb-8">
                        <h3 className="lg:text-lg text-sm font-manrope font-medium lg:w-7/12 lg:mx-auto">With our proprietary technology, you can activate unutilized space and transform it into a revenue stream. Our plug-and-play business model can be deployed in a multitude of locations and allows you to operate on a 24/7, fully automated basis.</h3>
                    </div>
                </div>
            </section>
            <section className="  grid md:grid-cols-2 ">
                <div className="flex flex-col md:justify-center md:items-center space-y-4 p-7  w-full bg-[#5140D3] text-white  font-manrope">
                    <div className="xl:w-8/12 ">
                        <h2 className="sm:text-3xl  text-2xl xl:text-[42px] font-bold mb-6 ">WHY OWN A GYM POD</h2>
                        <ul className="lg:ml-8 sm:ml-2 ml-5 list-disc lg:text-xl sm:text-lg text-sm  space-y-4  mx-auto opacity-70 ">
                            <li>Unique and scalable business opportunity</li>
                            <li>Transform unutilised space into revenue using our automation technology</li>
                            <li>Agile setup and minimal operations required</li>
                            <li>User-empowered model bringing smart fitness solutions to everyone</li>
                        </ul>

                    </div>

                </div>
                <div className="">
                    <img src={SideImg} alt="" className="w-full object-cover h-full" />
                </div>
            </section>
        </div>
    )
}

export default GymPod
