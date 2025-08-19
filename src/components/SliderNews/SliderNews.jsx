import React from 'react'
import './SliderNews.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import NewsCard from '../NewsCard/NewsCard';

const SliderNews = ({items}) => {
  return (
    <>
        <Swiper 
        spaceBetween={0}
        slidesPerView="auto"
        loop={true}
        pagination={{
            clickable: true,
            bulletClass: "my-bullet",
            bulletActiveClass: "my-bullet-active"
        }}
        modules={[Pagination]}
        initialSlide={1}
        className='news-swiper-container'>
            {items.map((item)=>(
                <SwiperSlide>
                    <NewsCard item={item} />
                </SwiperSlide>
            ))}
        </Swiper>
    </>
  )
}

export default SliderNews