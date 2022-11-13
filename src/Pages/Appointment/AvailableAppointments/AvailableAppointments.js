import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <section className='my-5 mb-36 lg:mt-20'>

            <p className='ml-4 text-center text-secondary font-semibold'>Available Appointments on {format(selectedDate, "PP")}</p>

            {/* options appointment  */}

            <div className='mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-5 md:mx-5'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}

                    ></AppointmentOption>)
                }

            </div>

            {/* modal ar jonno connection  */}

            {
                treatment &&

                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
            
        </section>
    );
};

export default AvailableAppointments;