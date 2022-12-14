import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import CheckOutForm from './CheckOutForm';
import { useNavigation } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const booking = useLoaderData();

    const navigation = useNavigation();


    const { treatment, price, appointmentDate, slot } = booking;


    if (navigation.state === "loading") {
        return <Loading></Loading>
    }

    return (
        <div className='px-4 py-10'>
            <h1 className='text-3xl font-bold '>Payment for <span className='text-green-500'>{treatment}</span></h1>
            <p className='text-xl my-2'>Please pay <strong>${price}</strong> for your appointment on <span className='font-semibold'>{appointmentDate}</span> at <span className='text-blue-500'>{slot}</span></p>

            <div className='my-12 md:w-96 border p-4 rounded-lg shadow-lg'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;