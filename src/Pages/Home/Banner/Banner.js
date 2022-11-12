import React from 'react';
import chair from '../../../assets/images/chair.png'
import ButtonPrimary from '../../../components/buttonPrimary/ButtonPrimary';

const Banner = () => {

   
    return (
        <div 
        className="hero bg-sky-200 text-black rounded-lg " 
        // style={{ backgroundImage: `url(${chair})`, backgroundRepeat: 'no-repeat'}}
        >

            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <ButtonPrimary>Get Started</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default Banner;