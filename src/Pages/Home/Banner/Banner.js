import React from 'react';
import './Banner.css'
import banner from '../../../img/banner_RM.png'

const Banner = () => {
    return (
        <div className='relative mt-14'>
            <div id='banner'></div>
            <div className='absolute w-full top-0 p-5'>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2'>
                    <div className='flex items-center'>
                        <div>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>Nasah Inventory Management</h1>
                            <h3 className='text-2xl md:text-3xl lg:text-4xl mt-2 mb-4 md:mt-4 md:mb-6'>For Constructional Retail shop</h3>
                            <p className='text-lg leading-8 text-gray-300'>Nasah Inventory Management makes your works easy by giving you various features like Cloud data storage, Automatic calculations, Accessing data from anywhere, anytime etc.</p>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;