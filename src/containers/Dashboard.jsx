import { Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Follow from "../pages/Follow/Follow";
import Studio from "../pages/Studio";
import FitSuite from "../pages/FitSuite";
import Contact from "../pages/Home/Contact/Contact";
import Functional from "../pages/Functional";
import Programs from "../pages/Programs";
import TrainersDetails from "../pages/TrainersDetails";
import TrainersListing from "../pages/TrainersListing";
import StudioLocation from "../pages/StudioLocation";
import { ROUTES } from "../constant";
import GroupEventDetails from "../pages/Home/Groups/GroupEventDetails";
import Home from "../pages/Home";
import GroupTraning from "../pages/Home/GroupTraning";


const Dashboard = () => {
    const [id, setId] = useState(null)
    console.log('id', id)

    function Loading() {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="absolute top-1/2 left-1/2 -mt-4 -ml-2 h-8 w-4 text-indigo-700">
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
        );
    }

   
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Header setId={setId} id={id}/>
                <div className="wrapper">
                    <Routes>
                        <Route path={ROUTES.HOME.PATH} element={<Home />} />
                        <Route path={ROUTES.STUDIO.PATH} element={<Studio />} />
                        <Route path={ROUTES.FITSUITE.PATH} element={<FitSuite />} />
                        <Route path={ROUTES.FUNCTIONAL.PATH} element={<Functional />} />
                        <Route path={ROUTES.PROGERAMS.PATH} element={<Programs />} />
                        <Route path={ROUTES.TRAINERSDETAILS.PATH} element={<TrainersDetails />} />
                        <Route path={ROUTES.GROUPEVENT.PATH} element={<GroupEventDetails />} />

                        <Route path={ROUTES.TRAINERSLISTING.PATH} element={<TrainersListing />} />
                        <Route path={ROUTES.STUDIOLOCATION.PATH} element={<StudioLocation />} />
                        <Route path={ROUTES.GROUPTRANING.PATH} element={<GroupTraning />} />

                    </Routes>
                </div>
                <div id={id || 'locations'}>
                    <Contact />
                </div>
                <Follow />
                <Footer id={id}/>
            </Suspense>
        </>
    );
};

export default Dashboard;
