import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';
import baby from '../../../assets/images/treatment.png'
import ButtonPrimary from '../../../components/buttonPrimary/ButtonPrimary';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening,
        },
    ]

    return (
        <div className='mt-32'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='mt-2 text-3xl text-black'>Services We Provided</h2>
            </div>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    servicesData.map(service => <ServiceCard
                        key={service.id}
                        service={service}

                    ></ServiceCard>)
                }
            </div>

            {/* exceptional section  */}

            <div className='mt-10'>

                <div className=" lg:p-52  grid lg:grid-cols-2 ">
                    <figure>
                        <img className='rounded-lg w-72 lg:w-full' src={baby} alt="Album" />
                    </figure>

                    <div className="card-body lg:m-4">
                        <h2 className="card-title text-black font-bold text-4xl lg:text-5xl">Exceptional Dental Care, on Your Terms</h2>

                        <p className='text-gray-500 mt-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                
                        <div className="card-actions justify-start">
                            

                            <ButtonPrimary>Get Started</ButtonPrimary>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;