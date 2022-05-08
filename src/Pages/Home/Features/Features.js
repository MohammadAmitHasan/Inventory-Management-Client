import React from 'react';
import feature1 from '../../../img/easy_Manage.jpg'
import feature2 from '../../../img/global-connections.jpg'
import feature3 from '../../../img/Data_security.jpg'
import feature4 from '../../../img/Cloud_Data.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import "./Feature.css";


// import required modules
import { Pagination, EffectCoverflow } from "swiper";

import "./Feature.css";

const Features = () => {

    return (
        <div className='max-w-4xl mx-auto p-5 mt-14'>
            <h2 className='text-red-400 text-center text-4xl font-semibold mb-5'>Special Features</h2>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={feature1} alt="feature1" />
                    <p className='text-xl text-center text-purple-300'>
                        Provides Easy Inventory Management
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={feature2} alt="feature2" />
                    <p className='text-xl text-center text-purple-300'>
                        Makes Data Available From Anywhere
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={feature3} alt="feature3" />
                    <p className='text-xl text-center text-purple-300'>
                        Makes your Data Protected
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={feature4} alt="feature4" />
                    <p className='text-xl text-center text-purple-300'>
                        Saves Data from Disaster using Cloud storage
                    </p>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Features;