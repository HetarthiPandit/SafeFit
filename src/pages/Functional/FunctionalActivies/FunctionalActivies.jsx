import React from 'react'
import Activities from '../../../components/Common/Activities';
import Std1 from "../../../assets/images/fun1.png";
import Std2 from "../../../assets/images/fun2.png";
import Std3 from "../../../assets/images/fun3.png";
function FunctionalActivies() {
    const steps = [Std1, Std2, Std3];

    return (
        <Activities
            title="SafeFit Functional Studio"
            discripction="Step into SafeFit's dynamic Functional Studio, the ultimate destination for cutting-edge functional training experiences. Our studio is meticulously designed to cater to the demands of high-intensity interval training (HIIT), circuit training, bodyweight exercises, and more. Embrace the versatility of our space as you engage in dynamic workouts that challenge and transform your body. With state-of-the-art equipment and expert guidance from our certified trainers, you'll push your limits, improve strength, agility, and endurance, and achieve your fitness goals like never before. Join us at SafeFit's Functional Studio and unlock the full potential of your fitness journey."
            steps={steps}

        />
    );
}

export default FunctionalActivies
