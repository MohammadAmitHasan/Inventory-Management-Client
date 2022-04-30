import React from 'react';

const Loading = () => {

    return (
        <div className="sweet-loading mb-20">
            <h2 className='text-4xl font-semibold text-center mt-20 text-red-500'>Please Wait. Content Loading...</h2>

            <div className='w-40 h-40 mx-auto flex justify-center items-center'>
                <h1 className='text-3xl text-red-400'>Loading Page. Please wait....</h1>
            </div>

        </div>
    );
};

export default Loading;