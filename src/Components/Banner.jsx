import React from 'react';
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner5 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';


const Banner = () => {
    const bannerImg = [{
        id: 1,
        bannerPhoto: banner4,
        alt: "Banner 1"
      },
      {
        id: 2,
        bannerPhoto: banner2,
        alt: "Banner 2"
      },
      {
        id: 3,
        bannerPhoto: banner5,
        alt: "Banner 3"
      },
      {
        id: 4,
        bannerPhoto: banner1,
        alt: "Banner 4"
      }
    ];
    return (
        <Swiper>
            {
                bannerImg.map((item)=> 
                <SwiperSlide  
                style={{backgroundImage:`url(${item.bannerPhoto})`}} 
                className='min-h-[600px] bg-cover bg-no-repeat bg-top rounded-2xl opacity-90 text-black overflow-hidden' key={item.id}>

                  <div className='absolute top-50 left-10 md:left-40 space-y-3'>
                    <h1 className='text-5xl md:text-7xl font-bold text-white text-shadow-lg text-shadow-gray-600 '>Pay Any Bill in <br /> Seconds</h1>
                    <p className='text-2xl font-semibold text-white text-shadow-lg text-shadow-gray-500'>Easily pay your unility bills with few clicks.</p>
                    <button className='btn bg-gray-300 border-none hover:bg-white'>Get Started</button>
                  </div>

                </SwiperSlide>)
            }
      </Swiper>
      
    );
};

export default Banner;