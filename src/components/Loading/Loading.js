import React from 'react';

const Loading = () => {
    return (
        <div className='lg:my-64 my-32'>
        <div className='flex justify-center items-center text-yellow-400'>
            <p className='text-7xl font-thin'>L</p>
            <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-green-500'></div>
            <p className='text-7xl font-thin'>ading....</p>
        </div>
        </div>
    );
};

export default Loading;