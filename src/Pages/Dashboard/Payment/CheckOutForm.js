import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';

const CheckOutForm = ({ booking }) => {
    const [clientSecret, setClientSecret] = useState("");
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const { price, patient, email, _id } = booking;


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://doctors-portal-server-sayem92.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setClientSecret(data.clientSecret)
            });
    }, [price]);



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        };

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        };

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        }
        else {
            // console.log('[PaymentMethod]', paymentMethod);
            setCardError('');
        }

        setSuccess('');
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email
                    },
                },
            });

        if (confirmError) { // error ar jonno--------------
            setCardError(confirmError.message);
            return;
        }

        if (paymentIntent.status === "succeeded") {

            console.log("cardInfo", card);

            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }

            // store payment info in the database
            fetch(`https://doctors-portal-server-sayem92.vercel.app/payments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {

                        setSuccess('Congrats! Your payment completed.')
                        setTransactionId(paymentIntent.id);
                    }
                })

        }
        setProcessing(false);
        // console.log("paymentIntent", paymentIntent);

    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    //  processing takle disabled
                    className='btn btn-sm btn-primary mt-6'
                    type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId : <strong>{transactionId}</strong></p>
                </div>
            }
        </div>
    );
};

export default CheckOutForm;