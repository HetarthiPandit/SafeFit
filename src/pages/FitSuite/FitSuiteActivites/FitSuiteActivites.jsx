import React from 'react'
import Activities from '../../../components/Common/Activities';
import Std1 from "../../../assets/images/fit1.svg";
import Std2 from "../../../assets/images/fit2.svg";
import Std3 from "../../../assets/images/fit3.svg";

function FitSuiteActivites() {
    const steps = [Std1,Std2, Std3 ];

    return (
        <Activities
            title="Fit-Suite Studios"
            discripction="Your premier destination for a transformative workout experience. Step into a realm where luxury and performance converge to redefine your fitness journey. Our meticulously curated space is designed to inspire and empower, featuring state-of-the-art equipment, personalized training programs, and a private environment tailored to your needs. Whether you're seeking strength training, cardio workouts, or virtual training options, our studio offers the perfect blend of sophistication and functionality. Join us and discover a new level of fitness excellence at SafeFit's Elite Fitness Studio. Your journey to a healthier, stronger you starts here."
            steps={steps}

        />
    );
}

export default FitSuiteActivites
