import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    // treatment is just another name of appointment options with name, slots, _id
    const { name, slots } = treatment;
    const date = format(selectedDate, "PP")

    const handleBooking = e => {
        e.preventDefault()
        const form = e.target;
        const slot = form.slot.value;
        const patient = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // console.log(date, slot, patient, email, phone);

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient,
            slot,
            email,
            phone
        }

        // TODO : send data to the server
        // and once data saved then close the modal
        // and display toast 
        console.log(booking);
        setTreatment(null)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">

                    <label

                        htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-black">{name}</h3>

                    <form onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-3 mt-10 '>
                        <input type="text" readOnly value={date} className="input w-full input-sm input-bordered text-black font-semibold border-gray-400" />

                        <select name='slot' className="select select-sm select-bordered w-full text-black border-gray-400 ">
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}
                                >{slot}</option>)
                            }

                        </select>

                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-sm input-bordered border-gray-400" />

                        <input name='email' type="email" placeholder="Email Address" className="input w-full input-sm input-bordered border-gray-400" />

                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-sm input-bordered border-gray-400" />
                        <br />
                        <input type="submit" placeholder='Submit' className='btn btn-success w-full ' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;