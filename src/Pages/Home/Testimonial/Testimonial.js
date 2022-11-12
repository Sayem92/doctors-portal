import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2,
            name: 'Maniri chacu',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Portugal'
        },
        {
            _id: 3,
            name: 'Haisa Hisa',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'China'
        }
    ]

    return (
        <section className='my-20 md:mx-10'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-lg text-green-500 font-bold'>Appointment</h4>
                    <h1 className="text-gray-700 text-4xl font-semibold">What Our Patients Says</h1>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>

            <div className='mt-20 md:mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        reviewdata={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;