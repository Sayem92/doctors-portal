import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center mt-32'>
        <div className='flex justify-center items-center'>
            <h1 className='text-4xl text-black'>L</h1>
            <p className='h-5 w-5 rounded animate-spin ring ring-green-500 mx-2'></p>
            <h1  className='text-4xl text-black'>ading</h1>
        </div>
        </div>
    );
};

export default Loading;