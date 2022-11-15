import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);

    //tanStack query-----------
    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions`)
            .then(res => res.json())
    })


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