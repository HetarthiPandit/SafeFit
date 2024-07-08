import React, { useEffect, useState } from 'react';
import Sequence from "../../../assets/images/Sequence.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Trainers from '../Trainers/Trainers';

function TrainersListingBanner() {
    const [searchName, setSearchName] = useState("");
    const [certification, setCertification] = useState(false);
    const [gender, setGender] = useState("");
    const [languages, setLanguage] = useState("");
    const [trainers, setTrainers] = useState([]);
    const [filteredTrainers, setFilteredTrainers] = useState([]);
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true);
    const token = import.meta.env.VITE_APP_TOKEN;
    const getTrainer = import.meta.env.VITE_TRAINERFILTER_API;
    const [uniqueLanguages, setUniqueLanguages] = useState([]);

    useEffect(() => {
        getAllData();
    }, [getTrainer, token]);

    useEffect(() => {
        if (searchName) {
            if (trainers) {
                const filtered = trainers.filter(trainer =>
                    trainer.name.toLowerCase().includes(searchName.toLowerCase())
                );
                setFilteredTrainers(filtered);

            }
        } else {
            setFilteredTrainers(trainers);
        }
    }, [searchName, trainers]);

    const getAllData = (data) => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        let formData = new FormData();
        if (data) {
            if (data.gender) {
                formData.append('gender', data.gender);
            }
            if (data.languages) {
                formData.append('languages', data.languages);
            }
            if (data.name) {
                formData.append('name', data.name);
            }
        }

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formData,
            redirect: "follow",
        };

        fetch(getTrainer, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setTrainers(data.data.trainers);
                setFilteredTrainers(data.data.trainers);
                setLoading(false);
                if (!localStorage.getItem('trainerLanguages')) {
                    const uniqueLangs = [...new Map(
                        (data.data.trainers || []).flatMap(trainer =>
                            (trainer.trainer_languages || []).map(language => ({
                                id: language.id,
                                name: language.name
                            }))
                        ).map(language => [language.id, language])
                    ).values()];

                    setUniqueLanguages(uniqueLangs);
                    localStorage.setItem('trainerLanguages', JSON.stringify(uniqueLangs));
                }
            })
            .catch((error) => {
                console.error("Error fetching trainer list:", error);
                setLoading(false);
            });
    };

    const handleSearchClick = () => {
        getAllData({ gender, languages, name });
        setLoading(true);
        document.getElementById('trainer').scrollIntoView({ behavior: 'smooth' });
    };

    const languageOptions = uniqueLanguages.map(language => (
        <option key={language.id} value={language.id}>{language.name}</option>
    ));

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    useEffect(() => {
        const storedLanguages = localStorage.getItem('trainerLanguages');
        if (storedLanguages) {
            setUniqueLanguages(JSON.parse(storedLanguages));
        } else {
            getAllData();
        }
    }, [getTrainer, token]);

    return (
        <div>
            <section className="relative h-[500px] overflow-hidden flex items-center justify-center xl:justify-center lg:justify-center xl:items-center sm:justify-center top-0 font-manrope">
                <div className="absolute top-0 left-0 w-full h-full">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src={Sequence}
                        type="video/mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-l from-[#5458F7] to-[#030429] opacity-80"></div>
                <div className="container mx-auto relative">
                    <div className="text-white z-10 text-center">
                        <h1 className="font-[Manrope] xl:text-3xl text-3xl font-semibold">
                            Meet Our Trainers
                        </h1>
                        <h6 className="font-[Manrope] text-sm xl:text-base sm:text-sm pt-3 pb-6">
                            Experience the epitome of luxury and versatility with our
                            state-of-the-art studio designed to cater to your fitness and
                            wellness needs.
                        </h6>

                        <div className="bg-white lg:max-w-[842px] py-6 lg:px-0 px-4 rounded-[10px] lg:rounded-full text-black lg:py-1 lg:ps-4 m-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center">
                            <>
                                <input
                                    type="text"
                                    placeholder="Trainer name"
                                    className="w-auto lg:p-2 ps-1 py-2 mb-2 lg:mb-0 lg:mr-2 text-black border-b-2 lg:border-none outline-none placeholder:text-black font-medium lg:text-xl text-xs"
                                    value={searchName || ""}
                                    onChange={(e) => setSearchName(e.target.value)}
                                />
                                <div className="flex w-full justify-between gap-7 lg:px-4 px-0">
                                    <select
                                        className="w-1/2 lg:text-left text-left lg:p-2 py-2 mb-2 lg:mb-0 border-b-2 text-black lg:border-none outline-none font-medium lg:text-xl text-xs"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option value="">Gender</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>
                                    <select
                                        className="w-1/2 lg:text-left text-left lg:p-2 py-2 mb-2 lg:mb-0 l border-b-2 lg:border-none text-black outline-none font-medium lg:text-xl text-xs"
                                        value={languages}
                                        onChange={handleChange}
                                    >
                                        <option value="">Language</option>
                                        {languageOptions}
                                    </select>
                                </div>
                            </>

                            <div className="lg:w-auto w-full lg:me-1">
                                <div className="lg:w-[48px] lg:h-[48px] w-full py-2 lg:mt-0 mt-2 rounded-full bg-[#5458F7] text-white flex items-center justify-center" onClick={handleSearchClick}>
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        className="cursor-pointer text-xl"
                                    />
                                    <span className='lg:hidden block ml-3'>Search</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div id="trainer">
                    {filteredTrainers && filteredTrainers.length > 0 ? (
                        <Trainers filteredTrainers={filteredTrainers} loading={loading} setLoading={setLoading} />
                    ) : (
                        <div className="text-center py-24">
                            <h2 className="text-5xl font-semibold mb-3">No trainers found</h2>
                            <p>Please try a different search criteria.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default TrainersListingBanner;
