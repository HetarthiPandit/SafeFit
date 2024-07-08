import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Trainers({ filteredTrainers,setLoading, loading }) {
    const token = import.meta.env.VITE_APP_TOKEN;
    const getTrainer = import.meta.env.VITE_APP_API;
    const [trainers, setTrainers] = useState([]);
    const [error, setError] = useState();
    const [expanded, setExpanded] = useState({});
    const navigate = useNavigate();
    const defaultImage = "path/to/default-image.jpg"; 
    const [loadingTrainer, setLoadingTrainer] = useState(true);

    const handleRedirect = (id) => {
        window.scrollTo(0, 0); 
        console.log("Redirecting to trainer details with ID:", id);
        navigate(`/trainers-details/${id}`);
    };

    const toggleReadMore = (id) => {
        setExpanded((prevState) => ({ ...prevState, [id]: !prevState[id] }));
    };

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow",
        };

        fetch(getTrainer, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setTrainers(data);
                setLoading(false); 
                setLoadingTrainer(false);
            })
            .catch((error) => {
                console.error("Error fetching trainer list:", error);
                setError(error);
                setLoading(false);
                setLoadingTrainer(false);
            });
    }, []);

    return (
        <div id='trainer'>
            <section className="flex flex-col justify-center items-center font-manrope py-10">
                <div className="container mx-auto">
                    <h2 className="lg:text-[68px] sm:text-6xl text-4xl font-bold text-center mb-8">
                        Our Trainers
                    </h2>
                    {loadingTrainer || loading ? (
                        <div className="flex flex-col items-center justify-center h-screen">
                        <div className="relative mt-4 -ml-2 h-8 w-4 text-indigo-700">
                            <div className="absolute z-10 -ml-2 h-8 w-8 animate-bounce">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="animate-spin"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z"></path>
                                </svg>
                            </div>
                            <div
                                className="absolute top-4 h-5 w-4 animate-bounce border-l-2 border-gray-200"
                                style={{ transform: 'rotate(-90deg)' }}
                            ></div>
                            <div
                                className="absolute top-4 h-5 w-4 animate-bounce border-r-2 border-gray-200"
                                style={{ transform: 'rotate(90deg)' }}
                            ></div>
                        </div>
                    </div>
                    ) : (
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                            {trainers.data && filteredTrainers ?
                                filteredTrainers.map((data, index) => (
                                    <div key={index} className="p-2">
                                        <div
                                            className="overflow-hidden bg-white hover:shadow-blue-400 cursor-pointer"
                                            onClick={() => handleRedirect(data.id)}
                                        >
                                            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                                <div className="relative ">
                                                    <img
                                                        className="w-full md:h-[447.96px] sm:h-[255.96px] h:[231.96px] object-cover object-center"
                                                        src={data.image_url || defaultImage}
                                                        alt="Trainer"
                                                    />
                                                </div>
                                                <div className="p-6 bg-[#1B2129] max-h-96 text-white">
                                                    <h2 className="lg p-2 pl-0 text-2xl">{data.name}</h2>
                                                    <hr className="p-2 text-gray-500 opacity-15" />

                                                    <h4>
                                                        {expanded[data.id] ? (
                                                            <>
                                                                <h2 className="text-md font-semibold text-white mb-2">
                                                                    Specialisations:
                                                                    <span className="text-sm text-[#858585] ml-2">
                                                                        {data.skills}
                                                                        <button
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                toggleReadMore(data.id);
                                                                            }}
                                                                            className="text-blue-500 ml-1"
                                                                        >
                                                                            Read Less
                                                                        </button>
                                                                    </span>
                                                                </h2>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <h2 className="text-md font-semibold text-white mb-2">
                                                                    Specialisations:
                                                                    <span className="text-sm text-[#858585] ml-2">
                                                                        {data.skills.substring(0, 60)}...
                                                                        <button
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                toggleReadMore(data.id);
                                                                            }}
                                                                            className="text-blue-500 ml-1"
                                                                        >
                                                                            Read More
                                                                        </button>
                                                                    </span>
                                                                </h2>
                                                            </>
                                                        )}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )) :
                                <>
                                        <div class=" text-gray-800 mt-4"></div>
                                        <h2 className="lg:text-[25px] sm:text-2xl text-2xl font-bold text-center mb-8">
                                            No Data Found
                                        </h2>
                                        <div class=" text-gray-800 mt-4"></div>
                                </>
                                }
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Trainers;
