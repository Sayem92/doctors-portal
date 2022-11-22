import { format } from 'date-fns';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    // treatment is just another name of appointment options with name, slots, _id
    const { name, slots, price } = treatment;
    const date = format(selectedDate, "PP");
    const { user } = useContext(AuthContext);

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
            phone,
            price
        }


        // post treatment to server----------
        fetch('https://doctors-portal-server-sayem92.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Booking confirmed");
                    setTreatment(null);
                    refetch();// auto update--------
                }
                else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">

                    <label

                        htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold ">{name}</h3>

                    <form onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-3 mt-10 '>
                        <input type="text" disabled value={date} className="input w-full input-sm input-bordered font-semibold border-gray-400" />

                        <select name='slot' className="select select-sm select-bordered w-full  border-gray-400 ">
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}
                                >{slot}</option>)
                            }

                        </select>

                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Your Name" className="input w-full input-sm input-bordered border-gray-400  font-semibold" />

                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input w-full input-sm input-bordered border-gray-400 font-semibold" />

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