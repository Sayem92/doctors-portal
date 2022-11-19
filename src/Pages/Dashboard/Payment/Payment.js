import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    console.log(booking);



    return (
        <div>
            <h1>Welcome for paid</h1>
        </div>
    );
};

export default Payment;