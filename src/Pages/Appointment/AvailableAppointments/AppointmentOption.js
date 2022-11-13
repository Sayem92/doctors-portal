import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    // console.log(name);

    return (
        <div className="card  shadow-xl">
            <div className="card-body text-center text-black">
                <h2 className="card-title justify-center  text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : 'space'} available</p>
                <div className="card-actions justify-center">

                    {/* modal ar button  */}

                    <label
                        disabled={slots.length === 0 }
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setTreatment(appointmentOption)}
                        >Book Appointment</label>


                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;