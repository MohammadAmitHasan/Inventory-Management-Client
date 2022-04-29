import React from 'react';
import './Banner.css'
import banner from '../../../img/banner_RM.png'

const Banner = () => {
    return (
        <div className='relative'>
            <div id='banner'></div>
            <div className='absolute w-full top-0 p-5'>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2'>
                    <div className='flex items-center'>
                        <div>
                            <h1 className='text-3xl md:text-5xl font-semibold mb-5'>Nasah Inventory Management</h1>
                            <h3 className='text-xl leading-8'>Nasah Inventory Management makes your works easy by giving you various features like Cloud data storage, Automatic calculations, Accessing data from anywhere, anytime etc.</h3>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <img className='max-h-[500]' src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;