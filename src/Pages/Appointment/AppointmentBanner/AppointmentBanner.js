import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {



    return (
        <header className=' my-3'>
            <div style={{ backgroundImage: `url(${bg})` }}
                className="lg:py-32 hero text-black">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:w-1/2 rounded-lg shadow-xl" alt='dentist chair' />

                    <div className='lg:mr-8 mt-5 shadow-2xl bg-white rounded-xl'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;