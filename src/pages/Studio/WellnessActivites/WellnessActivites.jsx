import React from 'react'
import Activities from '../../../components/Common/Activities';
import Std1 from "../../../assets/images/std1.png";
import Std2 from "../../../assets/images/std2.png";
import Std3 from "../../../assets/images/std3.png";

function WellnessActivites() {
    const steps = [Std1,Std2, Std3 ];

    return (
        <Activities
            title="SafeFit Wellness Studio"
            discripction="Our wellness studio is a spacious haven, spanning an area suitable for 7-8 individuals, offering ample room for your fitness aspirations to flourish. Whether you're a fitness instructor aiming to host std classes like Yoga, Dance, Zumba, or karate, a std of friends seeking a dedicated space for dance rehearsals, or if you have alternative ideas in mind, our studio is designed to cater to your requirements. Featuring ample space and flexible facilities, SafeFit's wellness studio can adapt to various activities, ensuring a tailored experience for every user."
            steps={steps}

        />
    );
}

export default WellnessActivites
