import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import ButtonPrimary from '../../../components/buttonPrimary/ButtonPrimary';

const MakeAppointment = () => {
    return (
        <section className='md:mt-16'
        style={{
            backgroundImage : `url(${appointment})`
        }}
        >
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row pb-0">
                    <img src={doctor} className="-mt-36 hidden md:block lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
                    <div>
                        <h4 className='text-lg text-green-500 font-bold'>Appointment</h4>
                        <h1 className="text-white text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>

                      <ButtonPrimary>Get Started</ButtonPrimary>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;