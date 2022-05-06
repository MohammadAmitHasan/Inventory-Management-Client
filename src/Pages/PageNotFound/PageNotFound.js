import React from 'react';
import error from '../../img/404.webp'

const PageNotFound = () => {
    return (
        <div className='container mx-auto p-3'>
            <img className='rounded-lg shadow-lg shadow-purple-500 w-100 sm:w-3/4 md:w-1/2 mx-auto' src={error} alt="" />
            <h2 className='text-3xl md:text-5xl text-center mt-3 font-semibold text-red-600'>Sorry.! Page Not Found</h2>
        </div>
    );
};

export default PageNotFound;