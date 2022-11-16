import React from 'react';

const Review = ({ reviewdata }) => {
    const { name, img, location, review } = reviewdata;

    return (

        <div className='border rounded-lg  shadow-xl'>

            <div className="p-4 space-y-2 text-sm text-gray-700">
                <p>{review}</p>
            </div>
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={img} alt="" className="ring ring-primary object-cover w-12 h-12 rounded-full bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">{name}</h4>
                        <span className="text-xs text-gray-700">{location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;