import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import ButtonPrimary from '../../../components/buttonPrimary/ButtonPrimary';

const Banner = () => {

   
    return (
        <div 
        className="hero lg:my-24 text-black rounded-lg " 
        style={{ backgroundImage: `url(${bg})`}}
        >

            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <ButtonPrimary>Get Started</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default Banner;