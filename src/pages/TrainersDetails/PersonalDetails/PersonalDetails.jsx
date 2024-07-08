import React, { useEffect, useState } from 'react'
import { faArrowRightLong, faUser, faCertificate, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pr1 from '../../../assets/images/pr1.png'
import Bio from '../../../assets/images/profile-user-svgrepo-com.svg'
import Skill from '../../../assets/images/muscle_5062478.png'
import Cer from '../../../assets/images/verify-svgrepo-com.svg'

import { useParams } from 'react-router-dom';
import axios from 'axios';

function PersonalDetails() {
    const user = {
        image: Pr1,
        name: "Miranda",
        trainer: "SafeFit Trainer",
        bio: "Far far away, behinds the words mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they lived in Book marks grove rights at the coasts of the Semantics, a large language ocean. A small river named Duden flows by the their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted.",
        skill: ["Personal Trainer Certification", "Health Coach Certification", "Medical Exercise Specialist Certification"],
        certifications: ["Personal Trainer Certification", "Health Coach Certification", "Medical Exercise Specialist Certification"],
        additionalInfo: [
            { label: "Spoken", value: "English, Russian" },
            { label: "Location ", value: "Adams St.Westford, MA 01886" },
        ]
    };

    const { id } = useParams(); // Destructure the id correctly
    console.log('id', id)

    const token = import.meta.env.VITE_APP_TOKEN;
    const getTrainer = import.meta.env.VITE_TRAINERDETAILS_API;
    const [trainer, setTrainer] = useState([]); // Use a single trainer object instead of an array
    console.log('trainer', trainer);

    const fetchData = () => {
        axios.post(getTrainer, { trainer_id: id }, {
            headers: {
                'Authorization': token,
            },
        })
            .then(function (response) {
                console.log('response', response.data)

                setTrainer(response.data.data.trainers
                ); // Set the trainer data
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    const languages = Array.isArray(trainer.languages)
        ? trainer.languages.join(', ')
        : (trainer.languages ? trainer.languages.split(',').join(', ') : 'No languages specified');

    return (
        <div>
            <div className="sm:-mt-96 -mt-40 mb-2 relative container  mx-auto  font-manrope ">
                <div className="bg-white shadow-lg flex flex-col lg:flex-row w-auto lg:py-20 lg:px-12 p-4 lg:gap-10 h-full  ">
                    {/* Left Side */}
                    <div className="flex shrink-0 lg:flex-col sm:flex-row flex-col items-start lg:gap-2 md:gap-8 gap-2 mb-6">
                        <div className="w-auto">
                            <img src={trainer.image_url} alt={'trainer'} className="lg:w-[447px] lg:h-[447px] md:h-80 md:w-80  w-80" />

                        </div>
                        <div className="flex flex-col gap-2 mt-2">
                            <div className="text-start lg:text-lg sm:text-xl text-sm">
                                <h2 className="lg:text-[45px] sm:text-4xl text-2xl font-bold mb-1 lg:hidden block">{trainer.name}</h2>
                                <h2 className="sm:text-xl text-xs font-medium mb-2 text-[#5458F7] lg:hidden block">{user.trainer}</h2>
                                <p className="mb-2 "><strong className='sm:text-xl text-base  mr-1'>Languages Spoken:</strong> {languages}</p>
                                <p className="mb-2"><strong className='sm:text-xl text-base  mr-1'>Location:</strong> {trainer.location}</p>

                            </div>
                            <div className="flex justify-start items-start w-full  my-2">
                                <button onClick={() => {
                                    document.getElementById('locations').scrollIntoView({ behavior: 'smooth' });
                                }} className="text-white bg-black xl:border-black border-black focus:outline-none hover:bg-[#531CC9]  font-medium rounded-full sm:text-base xs:text-xs sm:px-6 sm:py-3 px-2 py-2">
                                    Book a FREE session <FontAwesomeIcon icon={faArrowRightLong} className='ms-1' />
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Right Side */}
                    <div className=" flex flex-col items-start cursor-pointer" style={{ scrollbarWidth: "none" }}>
                        <h2 className="sm:text-[45px] text-2xl font-bold mb-3 lg:block hidden">{trainer.name}</h2>
                        <h2 className="sm:text-xl text-xs font-medium mb-2 text-[#5458F7] lg:block hidden">{user.trainer}</h2>
                        <p className="md:mb-8 mb-4 lg:mt-8 mt-2">
                            <div className=" flex items-center">
                                <img src={Bio} className="mr-2" width={25} /><strong className='text-2xl'>Bio</strong>
                            </div>
                            <p className='mt-3 lg:text-xl text-xs  font-medium'>
                                {trainer.description}

                            </p>
                        </p>

                        <div className="md:mb-8 mb-4">
                            <div className=" flex items-center">

                                <img src={Skill} className="mr-2" width={25} /><strong className='text-2xl'>Skill</strong>
                            </div>
                            <ul className="lg:text-xl text-sm list-disc ml-6 lg:my-3 my-2 font-medium">
                                {trainer.trainer_skill?.map((skill, index) => (
                                    <li key={index} className="mb-3">{skill.title}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="md:mb-8 mb-4">
                            <div className=" flex items-center">
                                <img src={Cer} className="mr-2" width={25} /><strong className='text-2xl'>Certifications</strong>
                            </div>
                            <ul className="lg:text-xl text-sm list-disc ml-6 lg:my-3 my-2 font-medium">
                                {user.certifications.map((certification, index) => (
                                    <li key={index} className="mb-3">{certification}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails

// < a href = "https://iconscout.com/icons/account" class="text-underline font-size-sm" target = "_blank" > Account</ > by < a href = "https://iconscout.com/contributors/matasapi" class="text-underline font-size-sm" > Icon Box</ > on < a href = "https://iconscout.com" class="text-underline font-size-sm" > IconScout</ >