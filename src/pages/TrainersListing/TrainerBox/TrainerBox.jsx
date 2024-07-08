import React from 'react'
import Modal from "../../../assets/images/modal.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function TrainerBox() {
    return (
        <div>
            <section className="sm:container sm:mx-auto font-manrope sm:pb-20">
                <div className=" bg-gradient-to-r from-[#5458F7]  to-[#030429]  sm:rounded-[25px]  xl:h-[489px]">
                    <div className=" sm:flex justify-between items-center inset-0">

                    <div className=" lg:w-3/5  md:w-4/5 sm:w-fit lg:ms-28 md:ms-12 lg:p-0 md:p-2 sm:p-6 p-4 sm:text-start text-center ">
                        <h1 className="lg:mb-6 mb-2 lg:text-6xl sm:text-3xl text-3xl text-white">Bring your own trainer</h1>
                        <p className="lg:mb-6 mb-4 lg:text-xl md:text-sm text-xs text-white font-bold opacity-[60%]">
                            Whether you’re a client with a personal trainer or a trainer with
                            clients, utilize our private studios at no extra cost. Enjoy
                            special packages and discounts designed for professional training
                            sessions in a fully-equipped environment.
                        </p>
                        <button
                        onClick={() => {
                            document.getElementById('locations').scrollIntoView({ behavior: 'smooth' });
                        }}
                         className="bg-white text-black rounded-full font-medium md:text-base md:px-6 md:py-3 mb-2 text-sm px-4 py-2">
                            Enquire Now <FontAwesomeIcon icon={faArrowRightLong} className='ms-1' />
                        </button>
                    </div>
                    <div className="m-0 h-full">
                        <img src={Modal} className='w-full h-full'/>
                    </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default TrainerBox
