import React from 'react'
import Partner from '../../../assets/images/partner.png'
import Own from '../../../assets/images/own.png'


function PrivatePaired() {
    const adsData = [
        { id: 1, title: 'Bring Your Own Trainer', description: "Whether you’re a client with a personal trainer or a trainer with clients, utilize our private studios at no extra cost. Enjoy special packages and discounts designed for professional training sessions in a fully-equipped environment.", image: Own },
        { id: 2, title: 'Train with Your Partner', description: "Nothing beats having a workout partner by your side. Bring a friend or partner to share the motivation and even the cost! Enjoy working out together with no extra membership fees. It's fitness made fun and affordable!", image: Partner },
    ];

    return (
        <section className=" bg-white h-full flex flex-col justify-center items-center font-inter lg:py-28 md:py-20 py-6 ">
            <div className="container mx-auto">
                <h2 className="lg:text-6xl sm:text-4xl text-3xl font-semibold text-center font-manrope mb-2">Private or Paired
                </h2>
                <h2 className='lg:text-6xl sm:text-4xl text-3xl font-semibold text-center font-manrope'>
                    Your Gym, Your Choice
                </h2>
                <div className="text-center mb-8">
                    <h3 className="md:text-xl text-sm font-manrope opacity-50 lg:w-7/12 lg:mx-auto w-full my-4">Bring a friend, partner or trainer with you for FREE! Whether you're bringing a trainer, a client, or a workout buddy, we've got the perfect setup for you.</h3>
                </div>
                <div className="flex sm:flex-row flex-col gap-5 justify-between">
                    {
                        adsData.map(ad => (

                            <div key={ad.id} className=" lg:h-[416px]  lg:p-8 p-6 bg-[rgb(196,206,255,0.4)] rounded-[25px] text-start flex lg:flex-row flex-col justify-between items-center">

                                <div className="lg:w-7/12 lg:mb-0 mb-6">
                                    <p href="#" className="inline-flex md:text-3xl text-2xl font-bold font-manrope items-center mb-4">
                                        {ad.title}
                                    </p>
                                    <h5 className="mb-2 lg:text-lg text-xs font-medium text-[#333333] font-manrope ">{ad.description}</h5>
                                </div>
                                <div className="">
                                    <img src={ad.image} alt="" className='md:w-full md:h-full h-40' />
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>
        </section>
    );

}

export default PrivatePaired
