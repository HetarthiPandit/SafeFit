import React, { useEffect } from 'react'
import Sequence from "../../../assets/images/Sequence.mp4";
import Event1 from "../../../assets/images/bootcamp.png";
import Event2 from "../../../assets/images/yoga.png";
import Event3 from "../../../assets/images/zumba.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TrainerBox from '../../TrainersListing/TrainerBox/TrainerBox';
import PersonalTrainersSlider from '../../TrainersDetails/PersonalTrainersSlider/PersonalTrainersSlider';
import Experience from '../Experience/Experience';
import { faAddressCard, faArrowRightLong, faCalendar, faHandHoldingDollar, faTag } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

function GroupEventDetails() {
    const event1 = GroupEvent1.data.events[0];
    const event2 = GroupEvent2.data.events[0];
    const event3 = GroupEvent3.data.events[0];

    const location = useLocation();
    const id = location.state?.id;

    useEffect(() => {
        if (id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.warn(`Element with id ${id} not found.`);
            }
        }
    }, [id]);
    return (
        <div>

            <section className="relative sm:h-[600px] h-[300px]  top-0 w-full ">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={Sequence}
                    type="video/mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030429] via-[#030429] to-[#5458F7] opacity-80"></div>
            </section>
            <div id='1'>
                <div className=" sm:-mt-96 -mt-40 mb-2 relative container mx-auto font-manrope  ">
                    <div className="bg-white shadow-lg flex flex-col lg:flex-row w-auto lg:py-10 lg:px-12 p-4 lg:gap-10 h-full  ">
                        <div className="flex shrink-0 lg:flex-col sm:flex-row flex-col items-start lg:gap-2 md:gap-8 gap-2 mb-6 lg:w-1/3">
                            <div className="align-middle ">
                                <img src={event1.image} alt={'trainer'} className="md:aspect-square" />

                            </div>
                        </div>

                        <div className="lg:flex items-start cursor-pointer py-2" style={{ scrollbarWidth: "none" }}>

                            <div className="text-start lg:text-lg sm:text-xl text-sm">
                                <h2 className="lg:text-[45px] sm:text-4xl text-2xl font-bold mb-2 ">{event1.name}</h2>
                                <h2 className="sm:text-xl text-xs font-medium mb-4 text-[#5458F7] ">{event1.venue}</h2>

                                <p className="mb-4"><strong className=' sm:text-xl text-base  mr-1 flex flex-col pb-1'>Description</strong> {event1.description}</p>
                                <p className="mb-4 flex flex-col"><strong className='sm:text-xl text-base mr-1 flex items-center gap-2 pb-1'><FontAwesomeIcon icon={faAddressCard} />Address</strong> {event1.address}</p>
                                <div className="flex justify-start items-start w-full  my-2">
                                    <button onClick={() => {
                                        document.getElementById('locations').scrollIntoView({ behavior: 'smooth' });
                                    }} className="text-white bg-black xl:border-black border-black focus:outline-none hover:bg-[#531CC9]  font-medium rounded-full sm:text-base xs:text-xs sm:px-6 sm:py-3 px-2 py-2">
                                        Book a session <FontAwesomeIcon icon={faArrowRightLong} className='ms-1' />
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div id='2'>
                <div className="my-10 relative container mx-auto font-manrope  ">
                    <div className="bg-white shadow-lg flex flex-col lg:flex-row w-auto lg:py-10 lg:px-12 p-4 lg:gap-10 h-full  ">
                        <div className="flex shrink-0 lg:flex-col sm:flex-row flex-col items-start lg:gap-2 md:gap-8 gap-2 mb-6 lg:w-1/3">
                            <div className="align-middle ">
                                <img src={event2.image} alt={'trainer'} className="md:aspect-square" />

                            </div>
                        </div>

                        <div className="lg:flex items-start cursor-pointer py-2" style={{ scrollbarWidth: "none" }}>

                            <div className="text-start lg:text-lg sm:text-xl text-sm">
                                <h2 className="lg:text-[45px] sm:text-4xl text-2xl font-bold mb-2 ">{event2.name}</h2>
                                <h2 className="sm:text-xl text-xs font-medium mb-4 text-[#5458F7] ">{event2.venue}</h2>

                                <p className="mb-4"><strong className=' sm:text-xl text-base  mr-1 flex flex-col pb-1'>Description</strong> {event2.description}</p>
                                <p className="mb-4 flex flex-col"><strong className='sm:text-xl text-base mr-1 flex items-center gap-2 pb-1'><FontAwesomeIcon icon={faAddressCard} />Address</strong> {event2.address}</p>
                                <div className="flex justify-start items-start w-full  my-2">
                                    <button onClick={() => {
                                        document.getElementById('locations').scrollIntoView({ behavior: 'smooth' });
                                    }} className="text-white bg-black xl:border-black border-black focus:outline-none hover:bg-[#531CC9]  font-medium rounded-full sm:text-base xs:text-xs sm:px-6 sm:py-3 px-2 py-2">
                                        Book a session <FontAwesomeIcon icon={faArrowRightLong} className='ms-1' />
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div id='3'>
                <div className="my-10 relative container mx-auto font-manrope  ">
                    <div className="bg-white shadow-lg flex flex-col lg:flex-row w-auto lg:py-10 lg:px-12 p-4 lg:gap-10 h-full  ">
                        <div className="flex shrink-0 lg:flex-col sm:flex-row flex-col items-start lg:gap-2 md:gap-8 gap-2 mb-6 lg:w-1/3">
                            <div className="align-middle ">
                                <img src={event3.image} alt={'trainer'} className="md:aspect-square" />

                            </div>
                        </div>

                        <div className="lg:flex items-start cursor-pointer py-2" style={{ scrollbarWidth: "none" }}>

                            <div className="text-start lg:text-lg sm:text-xl text-sm">
                                <h2 className="lg:text-[45px] sm:text-4xl text-2xl font-bold mb-2 ">{event3.name}</h2>
                                <h2 className="sm:text-xl text-xs font-medium mb-4 text-[#5458F7] ">{event3.venue}</h2>

                                <p className="mb-4"><strong className=' sm:text-xl text-base  mr-1 flex flex-col pb-1'>Description</strong> {event3.description}</p>
                                <p className="mb-4 flex flex-col"><strong className='sm:text-xl text-base mr-1 flex items-center gap-2 pb-1'><FontAwesomeIcon icon={faAddressCard} />Address</strong> {event3.address}</p>
                                <div className="flex justify-start items-start w-full  my-2">
                                    <button onClick={() => {
                                        document.getElementById('locations').scrollIntoView({ behavior: 'smooth' });
                                    }} className="text-white bg-black xl:border-black border-black focus:outline-none hover:bg-[#531CC9]  font-medium rounded-full sm:text-base xs:text-xs sm:px-6 sm:py-3 px-2 py-2">
                                        Book a session <FontAwesomeIcon icon={faArrowRightLong} className='ms-1' />
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <PersonalTrainersSlider />
            <TrainerBox />
            <Experience />

        </div>
    )
}

export default GroupEventDetails

const GroupEvent1 = {
    "data": {
        "pagination_meta": {
            "total_records": 0,
            "total_page": 0,
            "items_per_page": 0,
            "current_page": 1
        },
        "events": [
            {
                "id": 1,
                "name": "Bootcamp with ELI",
                "venue": "SF Arabian ranches",
                "zone_id": 14,
                "start_date": "2024-06-12",
                "end_date": "2024-06-12",
                "start_time": "04:45:00",
                "end_time": "05:45:00",
                "capacity": 5,
                "event_status": "1",
                "is_free": 0,
                "credit": 8,
                "price": 60,
                "currency": "AED",
                "image": Event1,
                "start_date_time": "12/06/2024 04:45 AM",
                "end_date_time": "12/06/2024 05:45 AM",
                "address": "SafeFit - Arabian Ranches 2, The Ranches Souk - Dubai - United Arab Emirates",
                "latitude": 25.02949,
                "longitude": 55.27053,
                "description": "Get ready to sweat and sculpt with Bootcamp led by EMAN! Crush your fitness goals with high-energy workouts blending cardio and strength training. All levels are welcome. Join us and experience the burn!",
                "distance": 30.947948277854696,
                "is_current_user_registered": 0,
                "registered_users_count": 0,
                "start_date_time_ms": 1718167500000,
                "end_date_time_ms": 1718171100000,
                "status": 0
            }
        ]
    },
    "code": 200,
    "message": "Group trainings Fetched."
}
const GroupEvent2 = {
    "data": {
        "pagination_meta": {
            "total_records": 0,
            "total_page": 0,
            "items_per_page": 0,
            "current_page": 1
        },
        "events": [
            {
                "id": 2,
                "name": "Yoga with Mye",
                "venue": "SF Arabian ranches",
                "zone_id": 14,
                "start_date": "2024-06-12",
                "end_date": "2024-06-12",
                "start_time": "04:45:00",
                "end_time": "05:45:00",
                "capacity": 5,
                "event_status": "1",
                "is_free": 0,
                "credit": 8,
                "price": 60,
                "currency": "AED",
                "image": Event2,
                "start_date_time": "12/06/2024 04:45 AM",
                "end_date_time": "12/06/2024 05:45 AM",
                "address": "SafeFit - Arabian Ranches 2, The Ranches Souk - Dubai - United Arab Emirates",
                "latitude": 25.02949,
                "longitude": 55.27053,
                "description": "Join us for an exhilarating Zumba class exclusively for ladies, led by our energetic and experienced instructor Toktam! Don't miss out on the fun. Bring your friends and let's dance our way to a healthier, happier you.",
                "distance": 30.947948277854696,
                "is_current_user_registered": 0,
                "registered_users_count": 0,
                "start_date_time_ms": 1718167500000,
                "end_date_time_ms": 1718171100000,
                "status": 0
            }
        ]
    },
    "code": 200,
    "message": "Group trainings Fetched."
}
const GroupEvent3 = {
    "data": {
        "pagination_meta": {
            "total_records": 0,
            "total_page": 0,
            "items_per_page": 0,
            "current_page": 1
        },
        "events": [
            {
                "id": 3,
                "name": "Zumba with Toktam",
                "venue": "SF Arabian ranches",
                "zone_id": 14,
                "start_date": "2024-06-12",
                "end_date": "2024-06-12",
                "start_time": "04:45:00",
                "end_time": "05:45:00",
                "capacity": 5,
                "event_status": "1",
                "is_free": 0,
                "credit": 8,
                "price": 60,
                "currency": "AED",
                "image": Event3,
                "start_date_time": "12/06/2024 04:45 AM",
                "end_date_time": "12/06/2024 05:45 AM",
                "address": "SafeFit - Arabian Ranches 2, The Ranches Souk - Dubai - United Arab Emirates",
                "latitude": 25.02949,
                "longitude": 55.27053,
                "description": "Get ready to sweat and sculpt with Bootcamp led by EMAN! Crush your fitness goals with high-energy workouts blending cardio and strength training. All levels are welcome. Join us and experience the burn!",
                "distance": 30.947948277854696,
                "is_current_user_registered": 0,
                "registered_users_count": 0,
                "start_date_time_ms": 1718167500000,
                "end_date_time_ms": 1718171100000,
                "status": 0
            }
        ]
    },
    "code": 200,
    "message": "Group trainings Fetched."
}